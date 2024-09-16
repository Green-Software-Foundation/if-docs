---
sidebar-position: 2
---

# Software Carbon Intensity (SCI)

## Description

The [software carbon intensity (SCI)](https://greensoftware.foundation/articles/software-carbon-intensity-sci-specification-project) score is perhaps the most important value that can be generated using Impact Framework.

SCI is an ISO-recognized standard for reporting the carbon costs of running software. This tutorial demonstrates how to organize a pipeline of Impact framework plugins to calculate SCI scores from some simple observations that are commonly available for software applications running in the cloud.

## Tags

SCI, cloud, cpu, memory, power-curve

## Prerequisites

This tutorial builds on top of the [Teads curve](./teads.md) pipeline tutorial. That tutorial demonstrates how to organize a pipeline that converts CPU utilization observations into CPU energy. This tutorial uses the same pipeline but goes several steps further, including converting the CPU energy estimates into carbon, adding the embodied carbon associated with the hardware being used and calculating the SCI score.

## Scope

This SCI calculation takes into account the operational and embodied carbon of the server running our application. This includes the energy used to run the application, calculated from CPU and memory utilization, and the energy required to transfer data over the internet between server and client. It does not account for data center embodied carbon, embodied carbon of end user devices nor operational carbon in end user devices.

## Common patterns

We employ the well known power curve from [Davy, 2021](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac) to estimate CPU power from CPU utilization. You can find a detailed explanation of our implementation of this power curve methodology [here](./teads.md).

We also use the networking energy and embodied carbon estimation methods from [Cloud Carbon Footprint](https://www.cloudcarbonfootprint.org/docs/methodology). This includes using the networking energy coefficient they suggest and implementing their method for calculating embodied emissions in an [Impact Framework plugin](https://github.com/Green-Software-Foundation/if/tree/main/src/if-run/builtins/sci-embodied).

## Observations

This manifest requires the following observations:

- CPU utilization
- thermal design power of the processors
- number of vCPUs allocated to the application under observation
- total number of vCPUs available on the cloud instance being used
- the name of the cloud instance type being used
- the grid carbon intensity for the grid powering the data center
- data transferred in/out of the application
- users per timestep

## Constants and coefficients:

| parameter                    | description                                                                                                        | value                                              | unit          | source                                                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| `network-energy-coefficient` | Coefficient relating data sent over network to energy                                                              | 0.001                                              | kWh/GB        | [CCF](https://www.cloudcarbonfootprint.org/docs/methodology/#networking)                                     |
| `x`, `y`                     | Points on power curve relating CPU utilization to a coefficient used to scale the processor's thermal design power | `x: [0, 10, 50, 100], y: [0.12, 0.32, 0.75, 1.02]` | dimensionless | [Davy, 2021](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac) |
| `baseline-emissions`         | embodied emissions for a "baseline" server with 1 CPU, 16GB RAM                                                    | 1000000                                            | gCO2e         | [CCF](https://www.cloudcarbonfootprint.org/docs/methodology/#embodied-emissions)                             |
| `lifespan`                   | lifespan for the server running our application                                                                    | 126144000                                          | seconds       | none, assumed 4 years is typical                                                                             |
| `usage-ratio`                | scaling factor for adjusting total embodied carbon down tot he portion our application is responsible for          | 1                                                  | dimensionless | no usage scaling is done here as we assume dedicated hardware, we only scale by time                         |

## Assumptions and limitations

The following are assumed to be true in this manifest:

- the embodied carbon of the baseline server approximates the real embodied carbon of the server running our application
- the lifespan of the server running our application is really 4 years
- the coefficient relating data transferred over the network to energy is accurate
- the power curve relating CPU utilization to power is appropriate for the processor being used to run our application
- the coefficient relating memory utilization to energy is accurate
- it is appropriate to consider end user embodied carbon, end user operational carbon and the operationl and embodied emissions of the data center to be out of scope.
- the temporal granularity of the observations are sufficient to accurately capture the behaviour of our application

## Components

There is only one component in this example. It represents the entire application. The component pipeline looks as follows:

```
pipeline:
  compute:
    - interpolate
    - cpu-factor-to-wattage
    - wattage-times-duration
    - wattage-to-energy-kwh
    - calculate-vcpu-ratio
    - correct-cpu-energy-for-vcpu-ratio
    - sum-energy-components
    - embodied-carbon
    - operational-carbon
    - sum-carbon
    - sci
```

## Plugins

### Interpolate

The `interpolate` plugin is used once. The instance is named `interpolate`. It is used to interpolate the curve relating CPU utilization and thermal-design-power factor so that the right value can be retrieved for the observed CPU utilization at each timestep.

#### config

```
method: linear
x: [0, 10, 50, 100]
y:[0.12, 0.32, 0.75, 1.02]
input-parameter: cpu/utilization
output-parameter: cpu-factor
```

### Multiply

The `Multiply` plugin is used several times. The instances are:

- `cpu-factor-to-wattage`: used to multiply the thermal design power of the processor by the factor returned from the power curve interpolation, yielding power in Watts.
- `wattage-times-duration`: used to multiply the power in Watts by the duration of each timestep, yielding energy in W/duration.
- `operational-carbon`: used to convert energy into operational carbon by multiplying energy in kWh by the grid carbon intensity in gCO2/kWh.

#### config

```
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

operational-carbon:
  input-parameters:
    - energy
    - grid/carbon-intensity
  output-parameter:
    - carbon-operational

```

### Divide

The `Divide` plugin is used once in this manifest. The instance is named `wattage-to-energy-kwh`. It is used to convert energy in W/duration to kWh.

#### config

```
wattage-to-energy-kwh:
  numerator: cpu-wattage-times-duration
  denominator: 3600000
  output: cpu-energy-raw
```

### Sum

The `Sum` plugin is used several times in this manifest. The instances are:

- `sum-energy-components`: used to sum all the various components of energy into a single value, called `energy`.
- `sum-carbon`: used to sum the various components of carbon into a single value, named `carbon`.

#### config

```
sum-energy-components:
input-parameters:
  - cpu/energy
  - network/energy
output-parameter:
  - energy

sum-carbon:
input-parameters:
  - carbon-operational
  - carbon-embodied
output-parameter:
  - carbon
```

### SciEmbodied

The `SciEmbodied` plugin is used once. Its purpose is to calculate the embodied emissions of the server running our application and apportion the total embodied carbon to the fraction that we are responsible (i.e. scale it based on the application only using a fraction of the available resources and a fraction of the server lifespan). We do not scale by resource allocation in this example, only time.

#### config

We use the plugin defaults for all the `SciEmbodied` config. This means we assume the total embodied emissions to be 1000000 gCO2e and the server to be a simple rack server with 1 CPU and 16GB RAM and no other components.

### SCI

The `SCI` plugin is used once. It is used to calculate the software carbon intensity by dividing `carbon` by a functional unit, that has to be available in the manifest `inputs` array at the time the plugin is executed. The functional unit in this example is users in each timestep.

#### config:

```
sci:
functional-unit: users
```

## Manifest

```yaml
name: sci example
description:
tags:
aggregation:
  metrics:
    - carbon
    - sci
  type: both

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
          - cpu/thermal-design-power
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
        output: cpu/energy
    sum-energy-components:
      path: builtin
      method: Sum
      config:
        input-parameters:
          - cpu/energy
          - network/energy
        output-parameter: energy
    embodied-carbon:
      path: builtin
      method: SciEmbodied
      config:
        output-parameter: embodied-carbon
    operational-carbon:
      path: builtin
      method: Multiply
      config:
        input-parameters:
          - energy
          - grid/carbon-intensity
        output-parameter: carbon-operational
    sum-carbon:
      path: builtin
      method: Sum
      config:
        input-parameters:
          - carbon-operational
          - embodied-carbon
        output-parameter: carbon
    sci:
      path: builtin
      method: Sci
      config:
        functional-unit: users

tree:
  children:
    github-storage-for-if-docs:
      pipeline:
        compute:
          - interpolate
          - cpu-factor-to-wattage
          - wattage-times-duration
          - wattage-to-energy-kwh
          - calculate-vcpu-ratio
          - correct-cpu-energy-for-vcpu-ratio
          - sum-energy-components
          - embodied-carbon
          - operational-carbon
          - sum-carbon
          - sci
      defaults:
        cpu/thermal-design-power: 100
        vcpus-total: 1
        vcpus-allocated: 1
        network/energy: 0.001
        grid/carbon-intensity: 130
      inputs:
        - timestamp: '2024-07-22T00:00:00'
          duration: 3600
          site-visits: 228
          cpu/utilization: 45
          component: 1
          users: 1100
        - timestamp: '2024-07-23T00:00:00'
          duration: 3600
          site-visits: 216
          cpu/utilization: 30
          component: 1
          users: 1050
        - timestamp: '2024-07-24T00:00:00'
          duration: 3600
          site-visits: 203
          cpu/utilization: 50
          component: 1
          users: 1055
        - timestamp: '2024-07-25T00:00:00'
          duration: 3600
          site-visits: 203
          cpu/utilization: 33
          component: 1
          users: 996
        - timestamp: '2024-07-26T00:00:00'
          duration: 3600
          site-visits: 172
          cpu/utilization: 29
          component: 1
          users: 899
        - timestamp: '2024-07-27T00:00:00'
          duration: 3600
          site-visits: 38
          cpu/utilization: 68
          component: 1
          users: 1080
        - timestamp: '2024-07-28T00:00:00'
          duration: 3600
          site-visits: 63
          cpu/utilization: 49
          component: 1
          users: 1099
        - timestamp: '2024-07-29T00:00:00'
          duration: 3600
          site-visits: 621
          cpu/utilization: 77
          component: 1
          users: 1120
        - timestamp: '2024-07-30T00:00:00'
          duration: 3600
          site-visits: 181
          cpu/utilization: 31
          component: 1
          users: 1125
        - timestamp: '2024-07-31T00:00:00'
          duration: 3600
          site-visits: 213
          cpu/utilization: 29
          component: 1
          users: 1113
        - timestamp: '2024-08-01T00:00:00'
          duration: 3600
          site-visits: 167
          cpu/utilization: 29
          component: 1
          users: 1111
        - timestamp: '2024-08-02T00:00:00'
          duration: 3600
          site-visits: 428
          cpu/utilization: 29
          component: 1
          users: 1230
        - timestamp: '2024-08-03T00:00:00'
          duration: 3600
          site-visits: 58
          cpu/utilization: 64
          component: 1
          users: 1223
        - timestamp: '2024-08-04T00:00:00'
          duration: 3600
          site-visits: 66
          cpu/utilization: 59
          component: 1
          users: 1210
        - timestamp: '2024-08-05T00:00:00'
          duration: 3600
          site-visits: 301
          cpu/utilization: 60
          component: 1
          users: 1011
        - timestamp: '2024-08-06T00:00:00'
          duration: 3600
          site-visits: 193
          cpu/utilization: 35
          component: 1
          users: 999
        - timestamp: '2024-08-07T00:00:00'
          duration: 3600
          site-visits: 220
          cpu/utilization: 37
          component: 1
          users: 1010
        - timestamp: '2024-08-08T00:00:00'
          duration: 3600
          site-visits: 215
          cpu/utilization: 43
          component: 1
          users: 1008
        - timestamp: '2024-08-09T00:00:00'
          duration: 3600
          site-visits: 516
          cpu/utilization: 28
          component: 1
          users: 992
        - timestamp: '2024-08-10T00:00:00'
          duration: 3600
          site-visits: 42
          cpu/utilization: 39
          component: 1
          users: 1101
        - timestamp: '2024-08-11T00:00:00'
          duration: 3600
          cpu/utilization: 40
          site-visits: 76
          component: 1
          users: 1000
        - timestamp: '2024-08-12T00:00:00'
          duration: 3600
          site-visits: 226
          cpu/utilization: 55
          component: 1
          users: 845
        - timestamp: '2024-08-13T00:00:00'
          duration: 3600
          site-visits: 180
          cpu/utilization: 62
          component: 1
          users: 1006
        - timestamp: '2024-08-14T00:00:00'
          duration: 3600
          site-visits: 232
          cpu/utilization: 71
          component: 1
          users: 1076
        - timestamp: '2024-08-15T00:00:00'
          duration: 3600
          site-visits: 175
          cpu/utilization: 75
          component: 1
          users: 1050
        - timestamp: '2024-08-16T00:00:00'
          duration: 3600
          site-visits: 235
          cpu/utilization: 77
          component: 1
          users: 1047
        - timestamp: '2024-08-17T00:00:00'
          duration: 3600
          site-visits: 44
          cpu/utilization: 80
          component: 1
          users: 1020
        - timestamp: '2024-08-18T00:00:00'
          duration: 3600
          site-visits: 31
          cpu/utilization: 84
          component: 1
          users: 1038
```
