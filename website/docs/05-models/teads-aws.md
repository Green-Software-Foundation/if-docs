# Teads' AWS Estimation Model

Teads Engineering Team built a model for estimating AWS Instances energy usage. This model creates a power curve on a correlation to SPEC Power database. This allows the model to generate a power curve for any AWS EC2 instance type based on publicly available AWS EC2 Instance CPU data. 

The main benefit of this model is that it accounts for all the components involved in an instance's compute capacity. 


## Model name

IF recognizes the Teads AWS mdoel as `teads-aws`

## Parameters

### Model config

- `interpolation`: the interpolation method to apply to the TDP curve
- `instance-type`: the name of the instance type, e.g. `t2.micro`

### Observations

- `cpu-util`: percentage CPU usage for the given time period
- `timestamp`: a timestamp for the observation
- `duration`: the amount of time, in seconds, that the observation covers.

## Returns

- `energy`: The energy used in operating the application, in kWh
- `embodied-carbon`: The carbon used in manufacturing and disposing of the device


## Implementation

IEF implements this plugin based off the data embedded from the CCF (Cloud Carbon Footprint) dataset.

Spline interpolation is implemented as the default method of estimating the usage using the power curve provided by `IDLE`, `10%`, `50%`, `100%` values in the dataset. 

Resulting values are an approximation / estimation based on the testing done by Teads' Engineering Team. Further information can be found in the following links. 
1. [TEADS Engineering: Building An AWS EC2 Carbon Emissions Dataset](https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac)
2. [TEADS Engineering: Estimating AWS EC2 Instances Power Consumption](https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959)

## Example
```typescript
import {TeadsAWS} from 'ief';

const teads = new TeadsAWS();
teads.configure({
  instance_type: 'c6i.large'
})
const results = teads.execute([
  {
    duration: 3600, // duration institute
    cpu: 0.1, // CPU usage as a value between 0 and 1 in floating point number
    datetime: '2021-01-01T00:00:00Z', // ISO8601 / RFC3339 timestamp
  }
]);
```
