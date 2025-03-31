---
sidebar_position: 1
---

# From CPU utilization to carbon emissions

## Tags

carbon, teads, power-curve

## Observations

This IMP requires the following observations:

- CPU utilization
- thermal design power of the processors
- number of vCPUs allocated to the application under observation
- total number of vCPUs available on the cloud instance being used
- the name of the cloud instance type being used
- the grid carbon intensity for the grid powering the data center

## Impacts

This pipeline takes the observations described above, and generates carbon emissions in each timestep, expressed in gCO2e.

## Scope

This pipeline takes into account the operational carbon of the server running our application. This includes the energy used to run the application, calculated from CPU and memory utilization. It does not account for any embodied carbon, nor networking energy, nor anything related to the end user. In real applications, the pipeline described here will be part of a much larger IMP that considers other parts of the system.

## Description

The Teads CPU power curve CPU utilization (as a percentage) against a scaling factor that can be applied to the CPUs thermal design power to estimate the power drawn by the CPU in Watts.

The research underpinning the curve was summarized in a pair of blog posts:

[TEADS Engineering: Buildiong an AWS EC2 Carbon Emissions Dataset](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac)

[Teads Engineering: Estimating AWS EC2 Instances Power Consumption](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959)

The curve has become very widely used as a general purpose utilization-to-wattage converter for CPUs, despite the fact that it does not generalize well.

The wattage can be transformed into energy by doing the following:

1. Measure your CPU utilization
2. Determine the thermal design power of your processor
3. Determine the scaling factor for your CPU utilization by interpolating the Teads curve
4. Determine the power drawn by your CPU by multiplying your scaling factor by the CPU's thermal design power
5. Perform a unit conversion to convert power in Watts to energy in kwH
6. Scale the energy estimated for the entire chip to the portion of the chip that is actually in use.

These steps can be executed in IF using just three plugins:

- `Interpolate`
- `Multiply`
- `Divide`

## Common patterns

The logical flow from CPU utilization to carbon via a power-curve and thermal design power is a common pattern that is likely to be re-used elsewhere.

## Constants and coefficients:

| parameter               | description                                                                                                        | value                                              | unit          | source                                                                                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| `x`, `y`                | Points on power curve relating CPU utilization to a coefficient used to scale the processor's thermal design power | `x: [0, 10, 50, 100], y: [0.12, 0.32, 0.75, 1.02]` | dimensionless | [Davy, 2021](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac) |
| `grid-carbon-intensity` | the carbon emitted per unit energy from the electrical grid                                                        | 750                                                | gCO2e/kWh     | approximates global average                                                                                  |

## Assumptions and limitations

The following are assumed to be true in this IMP:

- the power curve relating CPU utilization to power is appropriate for the processor being used to run our application
- the temporal granularity of the observations are sufficient to accurately capture the behaviour of our application
- the grid carbon intensity is sufficiently accurate for the location where the computational work is done

## Components

There is only one component in this example. It represents the entire application. The component pipeline looks as follows:

```yaml
pipeline:
  compute:
    - interpolate
    - cpu-factor-to-wattage
    - wattage-times-duration
    - wattage-to-energy-kwh
    - calculate-vcpu-ratio
    - correct-cpu-energy-for-vcpu-ratio
    - energy-to-carbon
```

## Plugins

### Interpolate

The `interpolate` plugin is used once. The instance is named `interpolate`. It is used to interpolate the curve relating CPU utilization and thermal-design-power factor so that the right value can be retrieved for the observed CPU utilization at each timestep.

#### config

```yaml
method: linear
x: [0, 10, 50, 100]
y: [0.12, 0.32, 0.75, 1.02]
input-parameter: cpu/utilization
output-parameter: cpu-factor
```

### Multiply

The `Multiply` plugin is used several times. The instances are:

- `cpu-factor-to-wattage`: used to multiply the thermal design power of the processor by the factor returned from the power curve interpolation, yielding power in Watts.
- `wattage-times-duration`: used to multiply the power in Watts by the duration of each timestep, yielding energy in W/duration.
- `energy-to-carbon`: used to convert energy expended to carbon emitted.

#### config

```yaml
cpu-factor-to-wattage:
  input-parameters:
    - cpu-factor
    - cpu/thermal-design-power
  output-parameter:
    - cpu-wattage

wattage-times-duration:
  input-parameters:
    - cpu-wattage
    - duration
  output-parameter:
    - cpu-wattage-times-duration

energy-to-carbon:
  input-parameters:
    - grid-carbon-intensity
    - energy-cpu-kwh
  output-parameter:
    - carbon
```

### Divide

The `Divide` plugin is used several times in this IMP. The instances are:

- `wattage-to-energy-kwh`. used to convert energy in W/duration to kWh.
- `calculate-vcpu-ratio`: used to calculate the ratio of allocated vCPUs to total vCPUS
- `correct-cpu-energy-for-vcpu-ratio`: used to scale the CPU energy by the vCPU ratio

#### config

```yaml
wattage-to-energy-kwh:
  numerator: cpu-wattage-times-duration
  denominator: 3600000
  output: cpu-energy-raw

calculate-vcpu-ratio:
  numerator: vcpus-total
  denominator: vcpus-allocated
  output: vcpu-ratio

correct-cpu-energy-for-vcpu-ratio:
  numerator: cpu-energy-raw
  denominator: vcpu-ratio
  output: cpu/energy
```

## IMP

```yaml
name: teads curve demo
description:
tags:
initialize:
  plugins:
    interpolate:
      path: builtin
      method: Interpolation
      config:
        method: linear
        x:
          - 0
          - 10
          - 50
          - 100
        'y':
          - 0.12
          - 0.32
          - 0.75
          - 1.02
        input-parameter: cpu/utilization
        output-parameter: cpu-factor
    cpu-factor-to-wattage:
      path: builtin
      method: Multiply
      config:
        input-parameters:
          - cpu-factor
          - thermal-design-power
        output-parameter: cpu-wattage
    wattage-times-duration:
      path: builtin
      method: Multiply
      config:
        input-parameters:
          - cpu-wattage
          - duration
        output-parameter: cpu-wattage-times-duration
    wattage-to-energy-kwh:
      path: builtin
      method: Divide
      config:
        numerator: cpu-wattage-times-duration
        denominator: 3600000
        output: cpu-energy-raw
    calculate-vcpu-ratio:
      path: builtin
      method: Divide
      config:
        numerator: vcpus-total
        denominator: vcpus-allocated
        output: vcpu-ratio
    correct-cpu-energy-for-vcpu-ratio:
      path: builtin
      method: Divide
      config:
        numerator: cpu-energy-raw
        denominator: vcpu-ratio
        output: cpu-energy-kwh
    energy-to-carbon:
      path: builtin
      method: Multiply
      config:
        input-parameters:
          - grid-carbon-intensity
          - cpu-energy-kwh
        output-parameter: carbon
execution:
  command: >-
    /home/user/.npm/_npx/1bf7c3c15bf47d04/node_modules/.bin/ts-node
    /home/user/if/src/index.ts -m IMPs/examples/teads-curve.yml
  environment:
    if-version: 0.6.0
    os: macOS
    os-version: 14.6.1
    node-version: 18.20.4
    date-time: 2024-10-03T15:11:48.498Z (UTC)
    dependencies:
      - '@babel/core@7.22.10'
      - '@babel/preset-typescript@7.23.3'
      - '@commitlint/cli@18.6.0'
      - '@commitlint/config-conventional@18.6.0'
      - '@grnsft/if-core@0.0.25'
      - '@jest/globals@29.7.0'
      - '@types/jest@29.5.8'
      - '@types/js-yaml@4.0.9'
      - '@types/luxon@3.4.2'
      - '@types/node@20.9.0'
      - axios-mock-adapter@1.22.0
      - axios@1.7.2
      - cross-env@7.0.3
      - csv-parse@5.5.6
      - csv-stringify@6.4.6
      - fixpack@4.0.0
      - gts@5.2.0
      - husky@8.0.3
      - jest@29.7.0
      - js-yaml@4.1.0
      - lint-staged@15.2.2
      - luxon@3.4.4
      - release-it@16.3.0
      - rimraf@5.0.5
      - ts-command-line-args@2.5.1
      - ts-jest@29.1.1
      - typescript-cubic-spline@1.0.1
      - typescript@5.2.2
      - winston@3.11.0
      - zod@3.23.8
  status: success
tree:
  children:
    child:
      pipeline:
        observe:
        regroup:
        compute:
          - interpolate
          - cpu-factor-to-wattage
          - wattage-times-duration
          - wattage-to-energy-kwh
          - calculate-vcpu-ratio
          - correct-cpu-energy-for-vcpu-ratio
          - energy-to-carbon
      defaults:
        thermal-design-power: 100
        vcpus-total: 8
        vcpus-allocated: 2
        grid-carbon-intensity: 750
      inputs:
        - timestamp: 2023-08-06T00:00
          duration: 360
          cpu/utilization: 1
          carbon: 30
        - timestamp: 2023-09-06T00:00
          duration: 360
          carbon: 30
          cpu/utilization: 10
        - timestamp: 2023-10-06T00:00
          duration: 360
          carbon: 30
          cpu/utilization: 50
        - timestamp: 2023-10-06T00:00
          duration: 360
          carbon: 30
          cpu/utilization: 100
      outputs:
        - timestamp: 2023-08-06T00:00
          duration: 360
          cpu/utilization: 1
          carbon: 30
          thermal-design-power: 100
          vcpus-total: 8
          vcpus-allocated: 2
          grid-carbon-intensity: 750
          cpu-factor: 0.13999999999999999
          cpu-wattage: 13.999999999999998
          cpu-wattage-times-duration: 5039.999999999999
          cpu-energy-raw: 0.0013999999999999998
          vcpu-ratio: 4
          cpu-energy-kwh: 0.00034999999999999994
        - timestamp: 2023-09-06T00:00
          duration: 360
          carbon: 30
          cpu/utilization: 10
          thermal-design-power: 100
          vcpus-total: 8
          vcpus-allocated: 2
          grid-carbon-intensity: 750
          cpu-factor: 0.32
          cpu-wattage: 32
          cpu-wattage-times-duration: 11520
          cpu-energy-raw: 0.0032
          vcpu-ratio: 4
          cpu-energy-kwh: 0.0008
        - timestamp: 2023-10-06T00:00
          duration: 360
          carbon: 30
          cpu/utilization: 50
          thermal-design-power: 100
          vcpus-total: 8
          vcpus-allocated: 2
          grid-carbon-intensity: 750
          cpu-factor: 0.75
          cpu-wattage: 75
          cpu-wattage-times-duration: 27000
          cpu-energy-raw: 0.0075
          vcpu-ratio: 4
          cpu-energy-kwh: 0.001875
        - timestamp: 2023-10-06T00:00
          duration: 360
          carbon: 30
          cpu/utilization: 100
          thermal-design-power: 100
          vcpus-total: 8
          vcpus-allocated: 2
          grid-carbon-intensity: 750
          cpu-factor: 1.02
          cpu-wattage: 102
          cpu-wattage-times-duration: 36720
          cpu-energy-raw: 0.0102
          vcpu-ratio: 4
          cpu-energy-kwh: 0.00255
```
