---
sidebar_position: 1
---

# Quick start

This page will provide the basic instructions for getting up and running with Impact Framework.

## 1: Install Impact Framework

Install the Impact Framework globally using npm.

```sh
npm install -g @grnsft/if
```

Read our detailed guide to [installing IF](./how-to-install-if.md).


## 2: Create a manifest file

A manifest file contains all the configuration and input data required to measure your application's energy and carbon impacts and should have a `.yml` extension.

Open the file, add your data and save the file. The minimal example below runs two snapshot observations through a single plugin - all it does is multiply a value in each element of the `input` data by 2.

```yaml
name: basic-demo
description:
tags:
initialize:
  plugins:
    double-a-value: 
      path: 'builtin'
      method: Coefficient
      config:
        input-parameter: "cpu-utilization"
        coefficient: 2
        output-parameter: "cpu-utilization-doubled"

tree:
  children:
    child-0:
      defaults:
        cpu/thermal-design-power: 100
      pipeline:
        observe:
        regroup:
        compute:
          - double-a-value
      inputs:
        - timestamp: 2023-07-06T00:00
          duration: 1
          cpu/utilization: 20
        - timestamp: 2023-07-06T00:01
          duration: 1
          cpu/utilization: 80
```

Read our detailed guides to [writing manifest files](./how-to-write-manifests.md).

## 3: Compute your manifest file

Run the pipeline by passing the path to your manifest file to the `if-run` command line tool:

```sh
if-run --manifest <path-to-your-manifest>
```

The output will be printed to the console.

:tada:**Congratulations** :tada:! You have just used the Impact Framework to compute a manifest file! Your challenge now is to use these principles to construct manifest files for real applications. Our docs will help! 


## Next steps

Now you know how to use the `if-run` you can start building more complex pipelines of plugins and more complicated manifest files. Your overall aim is to create a manifest file that accurately represents a real software application, and a plugin pipeline that yields an environmental metric that's important to you (e.g. `carbon`).


Experiment by adding more plugins to the pipeline and observe how each plugin enriches each element in the `inputs` array with new values.


You can also configure `if` to save your output data to another `yaml` file. To do this, add the `--output` flag and the path to the output file where the results are saved.

The command is then as follows:

```sh
if-run --manifest <path-to-your-impl> --output <save-path>
```

Explore our user documentation for walkthrough guides to common Impact Framework tasks:

- [How to install Impact Framework](./how-to-install-if.md)
- [How to load plugins](./how-to-import-plugins.md)
- [How to write manifest files](./how-to-write-manifests.md)
