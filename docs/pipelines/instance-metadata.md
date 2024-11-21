---
sidebar-position: 1
---

# Grabbing instance metadata from a CSV file

## Observations

This manifest requires the following observations:

- name of the specific cloud instance being used

## Impacts

This pipeline looks up metadata associated with the given cloud instance. It does not generate impacts per se, it just retrieves additional data from an external file using the given instance name as a search key.

## Scope

This pipeline is likely to be used as part of a larger pipeline. All we are doing here is retrieving metadata from an external file. Typicaly, this metadata will be used to feed further plugind to support impactestimates.

## Description

The instance metadata pipeline simply looks up a metadata for a given virtual machine instance name using the `csv-lookup` plugin from the IF standard library. However, the target dataset can return multiple processor names for a given VM instance where there are multiple possibilitiers. This means we need to create a pipeline that includes the `regex` plugin so parse out just one of the possible values.

For this demo we'll just extract the first value if there are multiple available for the `processor-name`.

## Tags

csv, instance-metadata, regex

## Common Patterns

The lookup process described on this page will likely be a common pattern used in other pipelines.

## Assumptions and limitations

The following are assumed to be true in this manifest:

- the target dataset is up to date
- where there are multiple possible processors associated with an instance name, it is appropriate to select the first in the list.

## Components

There is only one component in this example. It represents the entire application. The component pipeline looks as follows:

```yaml
pipeline:
  compute:
    - cloud-instance-metadata
    - extract-processor-name
```

## Plugins

### csv-lookup

The `csv-lookup` plugin is used once. The instance is named `cloud-instance-metadata`. It targets a csv file in our `if-data` repository.

#### config

```yaml
cloud-instance-metadata:
  method: CSVLookup
  path: 'builtin'
  config:
    filepath: https://raw.githubusercontent.com/Green-Software-Foundation/if-data/main/cloud-metdata-azure-instances.csv
    query: instance-class: "cloud/instance-type"
    output: "*"
```

### regex

The `regex` plugin is used once. The instance is named `extract-processor-name`. It parses the response from the csv lookup plugin and extracts the first entry from the returned list.

#### config

```yaml
extract-processor-name:
  method: Regex
  path: 'builtin'
  config:
    parameter: cpu-model-name
    match: /^([^,])+/g
    output: cpu/name
```

## Manifest

```yaml
name: instance-metadata
description:
tags:
initialize:
  plugins:
    cloud-instance-metadata:
      method: CSVLookup
      path: 'builtin'
      config:
        filepath: https://raw.githubusercontent.com/Green-Software-Foundation/if-data/main/cloud-metdata-azure-instances.csv
        query:
          instance-class: 'cloud/instance-type'
        output: '*'
    extract-processor-name:
      method: Regex
      path: 'builtin'
      config:
        parameter: cpu-model-name
        match: /^([^,])+/g
        output: cpu/name
tree:
  children:
    child:
      pipeline:
        observe:
        regroup:
        compute:
          - cloud-instance-metadata
          - extract-processor-name
      inputs:
        - timestamp: 2023-08-06T00:00
          duration: 3600
          cpu/energy: 0.001
          cloud/provider: gcp
          cloud/region: asia-east
          cloud/instance-type: Standard_A1_v2
```

Now you can run this manifest using:

```sh
if-run -m instance-metadata.yml -o output.yml
```

Your new `output.yml` file will contain the following:

```yaml
name: csv-demo
description: null
tags: null
initialize:
  plugins:
    cloud-instance-metadata:
      path: builtin
      method: CSVLookup
      config:
        filepath: >-
          https://raw.githubusercontent.com/Green-Software-Foundation/if-data/main/cloud-metdata-azure-instances.csv
        query:
          instance-class: cloud/instance-type
        output: '*'
    extract-processor-name:
      path: builtin
      method: Regex
      config:
        parameter: cpu-model-name
        match: /^([^,])+/g
        output: cpu/name
execution:
  command: >-
    /home/user/.npm/_npx/1bf7c3c15bf47d04/node_modules/.bin/ts-node
    /home/user/Code/if/src/index.ts -m manifests/examples/instance-metadata.yml
  environment:
    if-version: 0.6.0
    os: macOS
    os-version: 14.6.1
    node-version: 18.20.4
    date-time: 2024-10-03T15:15:36.328Z (UTC)
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
          - cloud-instance-metadata
          - extract-processor-name
      inputs:
        - timestamp: 2023-08-06T00:00
          duration: 3600
          cpu/energy: 0.001
          cloud/provider: gcp
          cloud/region: asia-east
          cloud/instance-type: Standard_A1_v2
      outputs:
        - timestamp: 2023-08-06T00:00
          duration: 3600
          cpu/energy: 0.001
          cloud/provider: gcp
          cloud/region: asia-east
          cloud/instance-type: Standard_A1_v2
          cpu-cores-available: 52
          cpu-cores-utilized: 1
          cpu-manufacturer: Intel
          cpu-model-name: >-
            Intel® Xeon® Platinum 8272CL,Intel® Xeon® 8171M 2.1 GHz,Intel® Xeon®
            E5-2673 v4 2.3 GHz,Intel® Xeon® E5-2673 v3 2.4 GHz
          cpu-tdp: 205
          gpu-count: nan
          gpu-model-name: nan
          gpu-tdp: nan
          memory-available: 2
          cpu/name: Intel® Xeon® Platinum 8272CL
```
