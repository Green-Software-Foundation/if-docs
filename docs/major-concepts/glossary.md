---
sidebar_position: 6
---

# Glossary

### Component

**aka**: *component node*

A component is something that creates environmental impacts, for example, a server or network traffic. Essentially, if it creates an environmental impact it's called a component. They effectively form the leaf nodes of a [graph](./06-specification/graph.md). Each component has at least one [model plugin](./06-specification/model-plugin.md) configured as well as some [input observations](./06-specification/observations.md). The observations are passed to the model plugin which interacts with a model to calculate the output observations for this component.

### Computation

Computation is the act of calculating the output of a [graph](/06-specification/graph.md).

### Computation pipeline

Computing an entire [graph](/06-specification/graph.md) involves multiple phases, the pipeline describes those phases. The computation pipeline should not be confused with the model pipeline. 

### Graph 

A graph is a collection of nodes that defines an ontology we want to model. For example, an application, a campaign or a user journey. 

### Graph duration

Every [graph](/06-specification/graph.md) represents a duration of time for which observations have been gathered about its components. By default, the graph duration will be calculated from the earliest observations to the latest, for all of its components.

### Graph node

**aka**: *node*

A [graph](/06-specification/graph.md) is made up of nodes, where each node represents either a [grouping](#Grouping) or a [component](#Component). 

### Grouping

**aka**: *component grouping*, *grouping node*

This is a node in the graph used to group multiple components together. A grouping doesn't generate its own outputs, although its child node outputs are aggregated to generate an output. Groupings are used to add structure to the graph to aid analysis.

### Impact

**aka:** *impact metric*

An impact is some environmental metric that you would like to measure, for example carbon, water, energy.

### Model

A model is something that, when given some inputs, returns some Outputs. For example, if you input CPU utilization, a model might translate that into an estimate of energy consumed.

### ModelParams

ModelParams are parameters passed to a model. Some are inputs, some are observations, some may have other meanings. They all conform to a defined [type](https://github.com/Green-Software-Foundation/if/blob/29280ff9cd9c9a843ab1842c728751aafdf21756/src/types/impl.ts#L14). 

### Model plugin

A model plugin is a software package or module external to the [Impact Framework](./06-specification/impact-framework.md). This is code that you download and install, allowing you to interact with a model using an open source standard interface.

### Model pipeline

Since models all expose the same [interface](#model-plugin-interface) and use standardised parameters, they can be joined together and work in a pipeline. In the same way that a unix pipeline can join multiple smaller commands together to form a more complex function, you can join multiple models together to form a complex computation pipeline, this is called the [model pipeline](./06-specification/model-pipeline.md).

### Model plugin interface

**aka**: *model interface*

The model interface is a common class interface that every [model plugin](./06-specification/model-plugin.md) needs to extend and implement. Model may vary, but through a [model plugin](./06-specification/model-plugin.md) that implements the same interface we can easily compare, swap, and replace plugins since they all expose the same interface.

### Observation

**aka**: *Input fields*

An observation is a collection of [model params](#modelparams) regarding a [component](#component) in your [subject](#subject) for a particular a time span (time and duration).

### Observation duration

Every [observation](#observation) is for a particular time and duration. The duration of an observation determines the granularity of the output timeseries. If the observation duration is equal to the graph duration then only one metric will be computed for the whole graph. If the observation duration is less than the graph duration then multiple metrics might be computed.

### Subject

The subject is what we are measuring the environmental impact of, for example a software application, a user journey, a campaign.
