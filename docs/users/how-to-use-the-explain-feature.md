---
sidebar_position: 7
---

# How to check parameters and units using `explainer`

Manifest files can get complicated, especially when there are many plugin instances initialized. It can be challenging to keep track of the flow of parameters and their units through a pipeline. To help IMP authors and auditors verify the correct flow of information through a pipeline, we provide the `explainer` feature.

`explainer` adds a block to the IMP that simply lists the parameter metadata used be the plugin's instance in the IMP. The metadata contains:

- **plugins:** the list of plugins where the parameter is used
- **unit**: the unit in which the parameter is expressed
- **description:** a plain-language summary of the parameter
- **aggregation-method:**: The appropriate method to use when aggregating the parameter across time or components (e.g. should it be summed, averaged, or held constant)

This information allows you to check that the units output by one plugin are consistent with those expected as inputs to another, in one clear itemized list in your output IMP.

Note that when the parameter has different units across instances, an error will occur.

## Toggling `explainer` on or off

To enable the `explainer` feature, add the following line to your IMP, somewhere in the IMP context (e.g. above the `plugins` block):

```yaml
explainer: true
```

If you set `explainer` to `false` or omit the line altogether, the `explainer` feature will not run.

## Defining parameter metadata

Plugins are expected to ship with default values for their parameter metadata in their source code. For example, our plugin for calculating embodied carbon, `SciEmbodied`, includes the following metadata definition:

```ts
export const SciEmbodied = PluginFactory({
  metadata: {
    inputs: {
      vCPUs: {
        description: 'number of CPUs allocated to an application',
        unit: 'CPUs',
        'aggregation-method': {
          time: 'copy',
          component: 'copy',
        },
      },
      memory: {
        description: 'RAM available for a resource, in GB',
        unit: 'GB',
        'aggregation-method': {
          time: 'copy',
          component: 'copy',
        },
      },
      ssd: {
        description: 'number of SSDs available for a resource',
        unit: 'SSDs',
        'aggregation-method': {
          time: 'copy',
          component: 'copy',
        },
      },
      hdd: {
        description: 'number of HDDs available for a resource',
        unit: 'HDDs',
        'aggregation-method': {
          time: 'copy',
          component: 'copy',
        },
      },
      gpu: {
        description: 'number of GPUs available for a resource',
        unit: 'GPUs',
        'aggregation-method': {
          time: 'copy',
          component: 'copy',
        },
      },
      'usage-ratio': {
        description:
          'a scaling factor that can be used to describe the ratio of actual resource usage comapred to real device usage, e.g. 0.25 if you are using 2 out of 8 vCPUs, 0.1 if you are responsible for 1 out of 10 GB of storage, etc',
        unit: 'dimensionless',
        'aggregation-method': {
          time: 'copy',
          component: 'copy',
        },
      },
      time: {
        description:
          'a time unit to scale the embodied carbon by, in seconds. If not provided,time defaults to the value of the timestep duration.',
        unit: 'seconds',
        'aggregation-method': {
          time: 'copy',
          component: 'copy',
        },
      },
    },
    outputs: {
      'embodied-carbon': {
        description: 'embodied carbon for a resource, scaled by usage',
        unit: 'gCO2e',
        'aggregation-method': {
          time: 'sum',
          component: 'sum',
        },
      },
    },
  },
});
```

However, there are cases where a plugin might not have parameter metadata in its source code, either because it was omitted, it was not knowable in advance, or the plugin was built before we shipped the `explain` feature. Sometimes, you might want to override the hard-coded defaults and use alternative metadata. In these cases, you can define new plugin metadata in the IMP file. It is considered best-practice to ensure all plugin instances have a complete set of plugin metadata.

Setting parameter metadata from the IMP file is done in the plugin instance's `initialize` block, as follows:

```yaml
initialize:
  plugins:
    interpolate:
      method: Interpolation
      path: 'builtin'
      config:
        method: linear
        x: [0, 10, 50, 100]
        y: [0.12, 0.32, 0.75, 1.02]
        input-parameter: 'cpu/utilization'
        output-parameter: 'cpu-factor'
      parameter-metadata:
        inputs:
          cpu/utilization:
            description: 'portion of the total CPU capacity being used by an application'
            unit: 'percentage'
            aggregation-method:
              time: avg
              component: avg
        outputs:
          cpu-factor:
            description: "a dimensionless intermediate used to scale a processor's thermal design power by CPU usage"
            unit: 'dimensionless'
            aggregation-method:
              time: avg
              component: avg
```

## Example IMP

The following IMP uses three plugins: `sci`, `sci-embodied` and `sum-carbon`. Of these, only `sci-embodied` has defaults hardcoded into the plugin code. The other two do not because they are "generic" arithmetic plugins for whom the values cannot be known in advance. Therefore, we set new parameter metadata in the `initialize` block for `sci` and `sum-carbon` but use the hardcoded defaults for `sci-embodied`.

We toggle the `explainer` feature by adding `explainer: true` in the IMP context.

```yaml
name: sci
description: successful path
tags:
explainer: true
initialize:
  plugins:
    sci-embodied:
      path: 'builtin'
      method: SciEmbodied
    'sum-carbon':
      path: 'builtin'
      method: Sum
      config:
        input-parameters:
          - carbon-operational
          - embodied-carbon
        output-parameter: carbon
      parameter-metadata:
        inputs:
          carbon-operational:
            description: "carbon emitted due to an application's execution"
            unit: 'gCO2eq'
            aggregation-method:
              time: sum
              component: sum
          embodied-carbon:
            description: "carbon emitted during the production, distribution and disposal of a hardware component, scaled by the fraction of the component's lifespan being allocated to the application under investigation"
            unit: 'gCO2eq'
            aggregation-method:
              time: sum
              component: sum
        outputs:
          carbon:
            description: "total carbon emissions attributed to an application's usage as the sum of embodied and operational carbon"
            unit: 'gCO2eq'
            aggregation-method:
              time: sum
              component: sum
    sci:
      kind: plugin
      method: Sci
      path: 'builtin'
      config:
        functional-unit: requests
      parameter-metadata:
        inputs:
          carbon:
            description: "total carbon emissions attributed to an application's usage as the sum of embodied and operational carbon"
            unit: 'gCO2eq'
            aggregation-method:
              time: sum
              component: sum
          requests:
            description: 'number of requests made to application in the given timestep'
            unit: 'requests'
            aggregation-method:
              time: sum
              component: sum
        outputs:
          sci:
            description: 'software carbon intensity expressed as a rate of carbon emission per request'
            unit: 'gCO2eq/request'
            aggregation-method:
              time: sum
              component: sum
tree:
  children:
    child:
      pipeline:
        compute:
          - sci-embodied
          - sum-carbon
          - sci
      defaults:
        device/emissions-embodied: 1533.120 # gCO2eq
        time-reserved: 3600 # 1hr in seconds
        device/expected-lifespan: 94608000 # 3 years in seconds
        vcpus-allocated: 1
        vcpus-total: 8
      inputs:
        - timestamp: 2023-07-06T00:00
          duration: 3600
          energy: 5
          carbon-operational: 5
          requests: 100
```

When we execute this IMP, the following `explain` block is added to the output file:

```yaml
explain:
  sci-embodied:
    inputs:
      vCPUs:
        description: number of CPUs allocated to an application
        unit: CPUs
        aggregation-method:
          time: copy
          component: copy
      memory:
        description: RAM available for a resource, in GB
        unit: GB
        aggregation-method:
          time: copy
          component: copy
      ssd:
        description: number of SSDs available for a resource
        unit: SSDs
        aggregation-method:
          time: copy
          component: copy
      hdd:
        description: number of HDDs available for a resource
        unit: HDDs
        aggregation-method:
          time: copy
          component: copy
      gpu:
        description: number of GPUs available for a resource
        unit: GPUs
        aggregation-method:
          time: copy
          component: copy
      usage-ratio:
        description: >-
          a scaling factor that can be used to describe the ratio of actual
          resource usage comapred to real device usage, e.g. 0.25 if you are
          using 2 out of 8 vCPUs, 0.1 if you are responsible for 1 out of 10 GB
          of storage, etc
        unit: dimensionless
        aggregation-method:
          time: copy
          component: copy
      time:
        description: >-
          a time unit to scale the embodied carbon by, in seconds. If not
          provided,time defaults to the value of the timestep duration.
        unit: seconds
        aggregation-method:
          time: copy
          component: copy
    outputs:
      embodied-carbon:
        description: embodied carbon for a resource, scaled by usage
        unit: gCO2eq
        aggregation-method:
          time: sum
          component: sum
  sum-carbon:
    inputs:
      carbon-operational:
        unit: gCO2eq
        description: carbon emitted due to an application's execution
        aggregation-method:
          time: sum
          component: sum
      embodied-carbon:
        unit: gCO2eq
        description: >-
          carbon emitted during the production, distribution and disposal of a
          hardware component, scaled by the fraction of the component's lifespan
          being allocated to the application under investigation
        aggregation-method:
          time: sum
          component: sum
    outputs:
      carbon:
        unit: gCO2eq
        description: >-
          total carbon emissions attributed to an application's usage as the sum
          of embodied and operational carbon
        aggregation-method:
          time: sum
          component: sum
  sci:
    inputs:
      carbon:
        unit: gCO2eq
        description: >-
          total carbon emissions attributed to an application's usage as the sum
          of embodied and operational carbon
        aggregation-method:
          time: sum
          component: sum
      functional-unit:
        description: >-
          the name of the functional unit in which the final SCI value should be
          expressed, e.g. requests, users
        unit: none
        aggregation-method:
          time: sum
          component: sum
      requests:
        unit: requests
        description: number of requests made to application in the given timestep
        aggregation-method:
          time: sum
          component: sum
    outputs:
      sci:
        unit: gCO2eq/request
        description: >-
          software carbon intensity expressed as a rate of carbon emission per
          request
        aggregation-method:
          time: sum
          component: sum
```

## When _not_ to use `explainer`

In IMPs where you are only using generic plugins, or override all the metadata loaded in from the plugin source code, `explainer` will simply echo back information from your `initialize` block since all the parameter metadata is set there. In these cases, the `explain` block is probably redundant information as you could just read the same information in your IMP's `plugins` section. The point of `explain` is to confirm what units and parameters are being passed through a pipeline when you have a mixture of plugins from many sources whose parameter metadata is defined in-code and in-IMP.
