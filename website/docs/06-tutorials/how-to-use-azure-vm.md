---
author: Joseph Cook (@jmcook1186)
abstract: Guidance for using the Azure importer.
---

## Importing data from Azure

The Azure importer model allows you to provide some basic details about an Azure virtual machine and automatically populate your `impl` with usage metrics that can then be passed along a model pipeline to calculate energy and carbon impacts.


## Prerequisites

First, you need to have a VM instance running on Azure. You can create one using [portal.azure.com](https://portal.azure.com). You also need to create a metrics application for that virtual machine and assign the relevant permissions.

Next you should create a `.env` file in the IF project root directory. This is whee you can store your Azure authentication details. Your `.env` file should look as follows:

```txt
AZURE_TENANT_ID: <your-tenant-id>
AZURE_CLIENT_ID: <your-client-id> 
AZURE_CLIENT_SECRET: <your-client-secret>
```

## Inputs

All that remains is to provide the details about your virtual machine in the `inputs` field in your `impl`.
These are the required fields:

- `timestamp`: An ISO8601 timestamp indicating the start time for your observation period. We work out your `timespan` by adding `duration` to this initial start time.
- `duration`: Number of seconds your observation period should last. We add this number of seconds to `timestamp` to work out when your observation period should stop.
- `azure-observation-window`: The time interval between measurements (temporal resolution) as a string with a value and a unit, e.g. `5 mins`. The value and unit must be space separated. 
- `azure-observation-aggregation`: This indicates how you want metrics to be aggregated between each `interval`. The recommended default is `average`.
- `azure-subscription-id`: Your Azure subscription ID, e.g. 9cf5e19b-8b18-4c37-9541-55fc47ad70c3
- `azure-resource-group`: Your Azure resource group name
- `azure-vm-name`: vYour virtual machine name

These are all provided as `inputs`. You also need to instantiate an `azure-importer` model to handle the Azure-specific `input` data. Here's what a complete `impl` could look like:

```
name: azure-demo
description: example impl invoking Azure model
initialize:
  models:
    - name: azure-importer
      kind: builtin
graph:
  children:
    child:
      pipeline:
        - azure-importer
      config:
        azure-importer:
      inputs:
          - timestamp: '2023-11-02T10:35:31.820Z'
            duration: 3600
            azure-observation-window: 5 min  
            azure-observation-aggregation: 'average'
            azure-subscription-id: 9cf5e19b-8b18-4c37-9541-55fc47ad70c3
            azure-resource-group: my_group
            azure-vm-name: my_vm
```

This will grab Azure metrics for `my_vm` in `my_group` for a one hour period beginning at 10:35 UTC on 2nd November 2023, at 5 minute resolution, aggregating data occuring more frequently than 5 minutes by averaging. 


## Outputs

The Azure importer model will enrich your `impl` with the following data:

- `cpu-util`: percentage CPU utilization
- `instance-type`: VM instance name
- `location`: VM region

These can be used as inputs in other models in the pipeline. Typically, the `instance-type` can be used to obtain `tdp` data that can then, along with `cpu-util`, feed a model such as `teads-curve`. 