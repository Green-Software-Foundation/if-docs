# Teads' CPU Estimation Model

Teads Engineering team has built a model that is capable of estimating CPU usages across varying type of CPUs using a curve commonly known as Teads Curve.

## Model name

IF recognizes the Teads CPU model as `teads-curve`.

## Parameters

### Model config

- `thermal-design-power`: the TDp of the processor
- `interpolation`: the interpolation method to apply to the TDP data

### Observations

- `cpu-util`: percentage CPU utilization for the observation 

## Returns

- `energy-cpu`: The energy used by the CPU, in kWh


## Implementation

### Linear Interpolation

This model implements linear interpolation by default for estimating energy consumption using the TDP of a chip.

The power curve provided for `IDLE`, `10%`, `50%`, `100%` in the Teads Curve are used by default.

The algorithm in linear interpolation will take the lowest possible base value + linear interpolated value. ie. 75% usage will be calculated as follows.
`100%` and `50%` are the known values hence we are interpolating linearly between them.
(`50%` + `(100%-50%)` `x` `(75%-50%))` `x` `thermal-design-power`. 



#### Example

```typescript
import {TeadsCurveModel} from 'ief';

const teads = new TeadsCurveModel();
teads.configure({
  thermal-design-power: 100, // thermal-design-power of the CPU
});
const results = teads.execute([
  {
    duration: 3600, // duration institute
    cpu: 100, // CPU usage as a value between 0 to 100 in percentage
    datetime: '2021-01-01T00:00:00Z', // ISO8601 / RFC3339 timestamp
  },
]);
```

### Spline Curve Approximation

This method implements the spline curve approximation using `typescript-cubic-spline`. It is not possible to customize the spline behaviour as of now.

Resulting values are an approximation / estimation based on the testing done by Teads' Engineering Team. Further information can be found in the following links.

1. [TEADS Engineering: Building An AWS EC2 Carbon Emissions Dataset](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac)
2. [TEADS Engineering: Estimating AWS EC2 Instances Power Consumption](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959)

#### Example

```typescript
import {TeadsCurveModel, TeadsInterpolation} from '@gsf/ief';

const teads = new TeadsCurveModel();
teads.configure({
  tdp: 100, // TDP of the CPU
  interpolation: Interpolation.SPLINE,
});
const results = teads.execute([
  {
    duration: 3600, // duration institute
    cpu: 100, // CPU usage as a value between 0 to 100 in percentage
    datetime: '2021-01-01T00:00:00Z', // ISO8601 / RFC3339 timestamp
  },
]);
```
