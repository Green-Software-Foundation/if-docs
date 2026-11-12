---
sidebar_position: 5
---

# Aggregation

Aggregation is the process of summarizing a set of metrics.

Two types of aggregation can be executed in IF. The first takes a time series and condenses it down into a single number representing an entire observation period, for example, if your time series contains three timesteps, the value of the metric being aggregated is `1` in each timestep and the aggregate is being computed as a sum, the aggregated value for the whole observation period is `3`. We refer to this as "time series aggregation" or "horizontal aggregation".

The second type of aggregation happens across components in a tree. Where time series exist for multiple child nodes under a parent, their time series are aggregated together into one summary time series that is pushed to the parent node. For example, in the following tree, each child has a time series with three timesteps. At each timestep, the metric value is `1` for both children:

```
         parent
        /      \
       /        \
child-1          child-2
data: [1,1,1]    data: [1,1,1]
```

Assuming the aggregation method is `sum`, the parent would receive an aggregated time series [2,2,2], representing the aggregated values from both children. We refer to this as "tree aggregation" or "vertical aggregation".

## Configuration

`Aggregate` is a built-in feature of the IF. This means you do not need to initialize it along with the plugins you are using in your pipeline. All you need to do is to add a small piece of config to your IMP file.

The `aggregate` config looks as follows:

```yaml
aggregation:
  metrics:
    - 'carbon'
    - 'energy'
  type: 'both'
```

There are two fields: `metrics` and `type`.

`metrics` is an array of metrics that you want to aggregate. You can provide any value here, but they must match a key that exists in your output data (i.e. if you tell IF to aggregate `carbon` but `carbon` is not in your outputs you will receive an error message and aggregation will fail). You can provide any number of metrics. In the example above, the aggregation feature will operate on the `carbon` and `energy` values.

`type` determines which kind of aggregation you want to perform. The choices are `time` (previously `horizontal`: time-series aggregation only), `component` (previously `vertical`: tree aggregation only) or `both` (both kinds of aggregation will be performed). In the example above, both types of aggregation will be performed over the two selected metrics.

## Aggregation methods

Aggregation can happen in several ways. In the example above, both of the selected metrics are absolute values measured in gCO2eq (carbon) and kWh (energy). To aggregate, it makes sense to add the values in each timestep for time-series aggregation and element-wise across components for tree aggregation. However, summing the values is not always the right way to aggregate.

For example, some values are constants that apply to every timestep - these should simply be copied into the aggregated metric and not summed. For example, if you are using a hard-coded value for grid carbon intensity that applies globally, then you simply want to persist that value into the aggregate - adding them together would provide a misleading result.

Similarly, some values are proportions or percentages. In these cases, the right way to aggregate is usually to take an average rather than summing over a set of values.

### Measuring SCI over a period

By default, when time aggregation includes `sci` and the default metadata is used, Impact Framework takes a straight average of the SCI values across observations. Because each observation is weighted equally regardless of its duration, the result doesn’t always reflect the SCI for the entire period.

Imagine two consecutive one-minute observations for a single system, where carbon is allocated per minute and each request is counted once:

| Minute | Carbon | Requests | SCI |
| --- | ---: | ---: | ---: |
| 1 | 100 gCO2eq | 1 | 100 gCO2eq/request |
| 2 | 100 gCO2eq | 100 | 1 gCO2eq/request |

Averaging those two rates gives `50.5 gCO2eq/request`, while dividing the total carbon by the combined requests gives approximately `1.98 gCO2eq/request` for the full two-minute period.

For this example, the period result can be calculated by running `TimeSync` before `Sci`, using a single 120-second interval and setting the time aggregation method for requests to `sum`.

This approach relies on complete, non-overlapping observations covering the period for the same system and functional unit, with positive request counts and non-negative carbon values. Check the inputs separately: `TimeSync` won’t catch every issue, and setting `allow-padding` to `false` won’t prevent internal gaps from being padded. Aggregating across components may also require different denominator assumptions.

The numbers here are illustrative. Running `Sci` alone doesn’t guarantee compliance with the SCI specification, which also depends on the system boundary and how operational and embodied emissions are quantified and allocated.

## Aggregation outputs

The aggregation process adds new output data to your IMP file. The two types of aggregation add different outputs. The horizontal (time-series) aggregation adds a new field called `aggregated` to each node whose time series has been aggregated. In the `aggregated` block, you will find the aggregated value for each of the aggregation metrics defined in the aggregation config.

The vertical aggregation adds a new array of output observations. These are simply named `outputs` and they always contain a timestamp and duration along with the aggregated metrics for each timestep.

The example below shows the result of running both kinds of aggregation for a single component:

```yaml
   "outputs": [
      {
        "carbon": 0.04846481793320214,
        "energy": 0.00030285447154471535,
        "timestamp": "2023-12-12T00:00:00.000Z"
      },
      {
        "carbon": 0.037777724630840566,
        "energy": 0.00023606013840495548,
        "timestamp": "2023-12-12T00:00:05.000Z"
      },
      {
        "carbon": 0.03630388278027921,
        "energy": 0.000226848626838947,
        "timestamp": "2023-12-12T00:00:10.000Z"
      },
      {
        "carbon": 0.0360935970659935,
        "energy": 0.0002255343411246613,
        "timestamp": "2023-12-12T00:00:15.000Z"
      },
      {
        "carbon": 0.0360935970659935,
        "energy": 0.0002255343411246613,
        "timestamp": "2023-12-12T00:00:20.000Z"
      },
      {
        "carbon": 0.0360935970659935,
        "energy": 0.0002255343411246613,
        "timestamp": "2023-12-12T00:00:25.000Z"
      },
      {
        "carbon": 0.0360935970659935,
        "energy": 0.0002255343411246613,
        "timestamp": "2023-12-12T00:00:30.000Z"
      },
      {
        "carbon": 0.0360935970659935,
        "energy": 0.0002255343411246613,
        "timestamp": "2023-12-12T00:00:35.000Z"
      },
    ],
    "aggregated": {
      "carbon": 0.3246705689138855,
      "energy": 0.0020287555470867216
    }
```
