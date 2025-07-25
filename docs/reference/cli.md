---
sidebar_position: 1
---

# Command line tool

A core feature of the Impact Framework is the `if-run` command line tool (CLI). This is how you trigger Impact Framework to execute a certain IMP file.

We also provide several other command line tools that work in concert with `if-run` to enable flows such as comparing, re-executing and verifying IF output files.

This page includes reference documentation for the CLI tools, including the various commands and flags each tool exposes.

We also provide tutorial-style user documentation for these tools in the [`Users`](../users/) section.

## `if-run`

If you have globally installed our `if` npm package, you can invoke the CLI using the `if-run` command directly in your terminal. The `if-run` command is an alias to `npx ts-node src/index.ts`, which executes the Impact Framework's `src/index.ts` script and acts as the entry point for Impact Framework.

`if-run <args>`

`if-run` runs the full execution cycle of an IMP file, including `observe`, `regroup` and `compute` phases along with `aggregation` and `explain` if they are configured in the IMP.

### `--manifest` , `-m`

The `--manifest` flag is the only required flag and tells `if-run` where to find the IMP file that you want to execute. This command expects to receive the path where your IMP file is saved, as shown in the following example:

```sh
if-run --manifest examples/manifests/my-imp.yml
## or using aliases
if-run -m examples/manifests/my-imp.yml
```

### `--output` , `-o`

The `--output` flag is optional and is used for defining a path to save your output data.

Here is an example of `--output` being used to define a path:

```sh
if-run --manifest examples/manifests/my-imp.yml --output examples/outputs/my-outdata
## or using aliases
if-run -m examples/manifests/my-imp.yml -o examples/outputs/my-outdata
```

### `--help` , `-h`

The `--help` command provides information about all available commands in order to help you easily find the command you need.

Example:

```sh
if-run --help
## or using alias
if-run -h
```

### `--observe`

`if-run --observe` runs _only_ the observe phase of the IMP execution. This means only those plugins that generate `input` data are run. These are defined in the `observe` section of the pipeline for each component in the IMP.

An example of an observe pipeline that invokes a plugin called "azure-importer" could look as follows:

```yaml
tree:
  children:
    child:
      pipeline:
        observe:
          - azure-importer
```

### `--regroup`

`if-run --regroup` runs _only_ the regrouping phase of the IMP's execution. There has to be `input` data available in the IMP to regroup (or `--observe` has to be invoked too) and the regrouping configuration has to be included in the IMP. This config defines which parameters `if-run --regroup` should regroup the data by.

For example, to regroup on `cloud/region` and `cloud/instance-type`:

```yaml
tree:
  children:
    child:
      pipeline:
        observe:
        regroup:
          - cloud/region
          - cloud/instance-type
```

### `--compute`

`if-run --compute` runs _only_ the compute phase of the IMP's execution. The IMP passed to `if-run --compute` should already have input data, appropriately grouped (or you have to pass `--observe --regroup` too). This includes the plugins that do operations over the input data to generate output data.

For example, in an IMP that executes `sum`, `coefficient` and `multiply` in its compute phase:

```yaml
tree:
  children:
    child-1:
      pipeline:
        observe:
        compute:
          - sum
          - coefficient
          - multiply
```

### `--debug`

You can provide the `--debug` flag to `if-run` in order to display execution logs to the console. These logs show messages for each operation IF and its plugins are executing. For example, your `debug` logs will look similar to the following:

```sh
INFO: 2024-06-12T08:48:02.918Z: Starting IF
DEBUG: 2024-06-12T08:48:02.919Z: Loading manifest
DEBUG: 2024-06-12T08:48:02.924Z: Capturing runtime environment data
DEBUG: 2024-06-12T08:48:03.978Z: Validating manifest
DEBUG: 2024-06-12T08:48:03.980Z: Syncing parameters
DEBUG: 2024-06-12T08:48:03.980Z: Initializing plugins
DEBUG: 2024-06-12T08:48:03.981Z: Initializing Sum
DEBUG: 2024-06-12T08:48:03.981Z: Loading Sum from builtin
DEBUG: 2024-06-12T08:48:04.859Z: Initializing Coefficient
DEBUG: 2024-06-12T08:48:04.859Z: Loading Coefficient from builtin
DEBUG: 2024-06-12T08:48:04.860Z: Initializing Multiply
DEBUG: 2024-06-12T08:48:04.860Z: Loading Multiply from builtin
DEBUG: 2024-06-12T08:48:04.860Z: Computing pipeline for `sum`
DEBUG: 2024-06-12T08:48:04.861Z: Computing pipeline for `coefficient`
DEBUG: 2024-06-12T08:48:04.861Z: Computing pipeline for `multiply`
DEBUG: 2024-06-12T08:48:04.862Z: Aggregating outputs
DEBUG: 2024-06-12T08:48:04.862Z: Preparing output data
```

You can use the `--debug` flag to help debug failing IF runs. You will see exactly where in the execution pipeline an error arise. If the error arose from a plugin, this will be clear from the execution logs, for example:

```sh
INFO: 2024-06-12T08:53:21.376Z: Starting IF
DEBUG: 2024-06-12T08:53:21.376Z: Loading manifest
DEBUG: 2024-06-12T08:53:21.381Z: Capturing runtime environment data
DEBUG: 2024-06-12T08:53:22.367Z: Validating manifest
DEBUG: 2024-06-12T08:53:22.369Z: Syncing parameters
DEBUG: 2024-06-12T08:53:22.369Z: Initializing plugins
DEBUG: 2024-06-12T08:53:22.369Z: Initializing Sum
DEBUG: 2024-06-12T08:53:22.370Z: Loading Sum from builtin
DEBUG: 2024-06-12T08:53:23.165Z: Initializing Coefficient
DEBUG: 2024-06-12T08:53:23.165Z: Loading Coefficient from builtin
DEBUG: 2024-06-12T08:53:23.165Z: Initializing Multiply
DEBUG: 2024-06-12T08:53:23.165Z: Loading Multiply from builtin
DEBUG: 2024-06-12T08:53:23.165Z: Computing pipeline for `sum`
[2024-06-12 09:53:23.166 AM] error:     cpu/energy is missing from the input array.
```

## `if-diff`

The `if-diff` command line tool allows you to determine whether two IMP or output files are the same, and if not, how they differ.

`if-diff` needs two files to compare - a `source` and a `target`. The `source` file is considered to be the "true" file that another file, the `target`, is compared against. Note that for most purposes, it doesn't matter which file is assigned as `source` or `target` - the important thing is that `if-diff` receives two files. Both files should be `yaml` files. They are expected to be IF output files, meaning they contain all the required fields of an IMP plus the IF-generated `output` and `execution` blocks.

`if-diff` is run as follows:

```sh
if-diff --source file-1.yml --target file2.yml
```

You can also pipe the outputs from `if-run` directly into `if-diff`. This means you only provide _one_ file to `if-diff` and the other comes from a new `if-run` run configured to send its output data to the console. This is an important feature because it allows you to receive an output file and verify that it was computed correctly and not tampered with post-execution. For example, if someone provides you with an output file, you can strip out the `outputs` section and re-run it with `if-run`, piping the outputs straight to `if-diff` to compare against the original you received.

If the original was correctly and honestly reported, `if-diff` will return a success response.

e.g.

```
if-run -m my-imp | if-diff --target my-output-file.yml
```

### `if-diff` matching rules

`if-diff` looks for differences between the `source` and `target`. However, `if-diff` applies its own IF-specific matching rules, ensuring that the outputs are functionally identical even if they are not precisely identical. For example, `if-diff` allows the order of nodes in a tree to vary between files as long as identically named components contain identical data.

| Difference identified                                    | Report or ignore? | Note                                                                                       |
| -------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| trees contain different number of nodes                  | report            | works the same regardless whether `source` or `target` has more nodes                      |
| nodes in tree have different names                       | report            | There should be no named nodes existing in one file that aren't also in the other          |
| nodes in tree contain non-identical fields and/or values | report            | the data inside each tree component should contain identical keys/values                   |
| keys and values in context field are non- identical      | report            | the same fields should exist in the `context` section and their values should be identical |
| `status` and `error` fields in `execution` block         | report            | Only these two fields in `execution` are considered                                        |
| order of nodes in tree are different                     | ignore            | if data is identical, position of node in tree is ignored                                  |
| order of fields in context                               | ignore            | if data is identical, position of field in context is ignored                              |
| content of execution block EXCEPT `status` and `error`   | ignore            | environment information is ignored                                                         |

### `if-diff` outputs

If `if-diff` finds no in-scope differences between the `source` and `target` then it returns a success message and exit code `0`:

```sh
FILES MATCH and exit code 0.
```

If `if-diff` detects an in-scope difference between the files, it halts execution, returns exit code `1` and reports the difference to the command line.

The report includes the yaml path to the differing element in the tree, the value in the `source` and the value in the `target`, using the following schema:

```
Files do not match!
<yaml path to non-matching element>
source: <value in source file>
target: <value in target file>
```

If the difference relates to a missing node in the tree for source or target then `<value in x file>` should be either exists or missing and the yaml path should point to the highest level element that is missing (e.g. if an entire child component is missing, provide the path to the child component).

e.g. different values detected for a given key in an input array:

```
Files do not match!
tree.children.vm1[4].cpu/utilization
source: 45
target:  43
```

e.g. different components in `tree` in `source` and `target`:

```sh
Files do not match!
tree.children.child1
source: missing
target:  exists
```

## `if-env`

`if-env` is a command line tool that helps you to create local development environments where you can run IMPs.

There are two use cases for this:

1. setting up a new development environment for plugin building
2. replicating a runtime environment for a given IMP, so you can re-execute it

### commands

- `--manifest` or `-m`: the path to an IMP whose dependencies you want to install
- `--install` or `-i`: instructs `if-env` to automatically install the dependencies in the local `package.json`
- `--cwd` or `-c`: forces `if-env` to create or update the package.json in the current working directory. This is already default behaviour when no arguments are passed to `if-env`, but when an IMP is passed to `-m`, `if-env` defaults to saving a package.json in the same folder as the IMP. using `-cwd` overrides that behaviour and uses the current working directory as the `package.json` target path.

### Setting up new development environments using `if-env`

If you are creating a new IMP from scratch and want to bootstrap your way in, you can use `if-env` with no arguments to generate a template IMP and package.json in your current working directory. Then, all you need to do is tweak the templates for your specific use case.

For example:

```sh
mkdir my-imp && cd my-imp
if-env
```

After running these commands, you will see the following files in `my-imp`:

```
ls my-imp

> package.json manifest.yaml
```

Now, you can use these files as templates for your IMP development.

### Replicating runtime environments using `if-env`

If you are given an IF output file and you want to re-run it, you can use `if-env` to install that output file's dependencies so that all the plugins in its execution pipeline can be executed.

For example, if you are given a file, `output-file.yml`, you can save the file to `if` and run

```
cd if
if-env -m output-file.yml
```

`if-env` will compare the installed dependencies in the `package.json` it sees in `if` with the dependencies listed in `output-file.yaml`. Any dependencies that are in `output-file.yaml` and not in `if/package.json` will be added to `if-package.json`. Then, you can run:

```sh
npm i
```

and you are ready to re-execute `output-file.yaml` in your local environment. We also provide the `--install` flag to instruct `if-env` to automatically run `npm i` after merging the dependencies, so you could craft a single command to install all the relevant dependencies and then run the IMP, as follows:

```sh
if-env -m output-file.yml -i && if-run -m output-file.yml
```

## `if-check`

`if-check` is an IMP verification tool that is equivalent to running `if-env` and `if-diff` on a given IMP file. The IMP file must have `outputs` and an `execution` section for `if-check` to run.

The intended use case is to verify that an IMP's outputs are correct and honest. Say someone handed you an IMP as evidence of their environmental impact. You could choose to trust them, or you could run `if-check` to verify that their calculations are correct. Under the hood, IF is creating a development environment using the dependencies listed in the given file's `execution` section and then executing the file locally, then comparing the newly generated results to those in the given file.

To check a file:

```
if-check -m <path-to-file>
```

If the `if-check` is successful you will receive the following response:

```
if-check: successfully verified <filename>
```

If `if-check` was not able to verify the file because there were differences in the given and re-executed files, then you will receive the following response which includes the details of how the files differ, as per `if-diff`.

```
if-check: could not verify <filename>. The re-executed file does not match the original.
```

### Running IF over multiple IMPs with `--d`

Alice could also run `if-check` over any number of IMPs in a single command, using the `--directory` or `-d` subcommand. For a folder containing multiple IMPs, pass the folder path:

```sh
if-check -d /my-folder-of-imps
```

Each IMP will be run through `if-check` in sequence.

## `if-csv`

`if-csv` is a command line tool that helps to save data to CSV file.

### commands

- `--manifest` or `-m`: (optional) the path to an executed IMP
- `--output` or `-o`: (optional) the path to save your output data in `csv` format
- `--params` or `-p`: (required) the metric to export the data

There are three use cases for this:

1. Exporting CSV with the `--output` flag: When the `--output` flag is provided, `if-csv` exports the data to a CSV file at the specified path. This is useful for saving data for later use or sharing with others.

```sh
if-csv -m ./my-imp.yml -p carbon -o ./my-outdata
```

2. Printing CSV to the console without the `--output` flag: If the `--output` flag is omitted, `if-csv` will print the CSV data directly to the console. This is useful for quick checks.

```sh
if-csv -m ./my-imp.yml -p carbon
```

3. Piping output from `if-run` to `if-csv`. By piping the output from `if-run`, you can chain commands to execute an IMP and then immediately export the data to a CSV file.

```sh
if-run -m ./my-imp.yml | if-csv -p carbon -o ./my-outdata
```

## `--append`

You can re-use an IMP file to make multiple batches of observations, appending the results to the existing outputs. The command that makes this possible is `--append`. To use `--append` you have to pass IMP files that has **already been computed** - i.e.it already has outputs. If you do, then the newly generated outputs will be appended to the existing output data.

The use case for this is when you want to repeatedly monitor the same resource or set of resources without changign the IMP config - you just want to grab new observations. The `--append` command allows you to do this without havign to generate lots of individual IMP files.

### example

With a computed IMP:

```yaml
name: append
description: >-
  a complete pipeline that starts with mocked CPU utilization data and outputs
  operational carbon in gCO2eq
initialize:
  plugins:
    mock-observations:
      path: builtin
      method: MockObservations
      config:
        timestamp-from: '2024-03-05T00:00:04.000Z'
        timestamp-to: '2024-03-05T00:00:07.000Z'
        duration: 1
        components:
          - name: server-1
            cloud/instance-type: Standard_E64_v3
            cloud/region: westus3
        generators:
          common:
            cloud/vendor: azure
          randint:
            cpu/energy:
              min: 1
              max: 99
            mem/energy:
              min: 1
              max: 99
    sum:
      path: builtin
      method: Sum
     config:
        input-parameters:
          - cpu/energy
          - mem/energy
        output-parameter: energy
execution:
  command: >-
    /home/user/.npm/_npx/1bf7c3c15bf47d04/node_modules/.bin/ts-node
    /home/user/Code/if/src/index.ts -m
    manifests/examples/mock-cpu-util-to-carbon.yml -s
  environment:
    if-version: 0.4.0
    os: linux
    os-version: 5.15.0-107-generic
    node-version: 21.4.0
    date-time: 2024-06-18T14:18:44.864Z (UTC)
    dependencies:
      - '@babel/core@7.22.10'
      - '@babel/preset-typescript@7.23.3'
      - '@commitlint/cli@18.6.0'
      - '@commitlint/config-conventional@18.6.0'
      - '@grnsft/if-core@0.0.3'
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
      - zod@3.22.4
  status: success
tree:
  pipeline:
    compute:
      - mock-observations
      - sum
    regroup:
      - cloud/region
      - name
  defaults: null
  inputs:
    - timestamp: '2024-03-05T00:00:00.000Z'
      duration: 1
      name: server-1
      cloud/instance-type: Standard_E64_v3
      cloud/region: westus3
      cloud/vendor: azure
      cpu/energy: 5
      mem/energy: 10
    - timestamp: '2024-03-05T00:00:01.000Z'
      duration: 1
      name: server-1
      cloud/instance-type: Standard_E64_v3
      cloud/region: westus3
      cloud/vendor: azure
      cpu/energy: 71
      mem/energy: 5
    - timestamp: '2024-03-05T00:00:02.000Z'
      duration: 1
      name: server-1
      cloud/instance-type: Standard_E64_v3
      cloud/region: westus3
      cloud/vendor: azure
      cpu/energy: 36
      mem/energy: 74
  outputs:
    - timestamp: '2024-03-05T00:00:00.000Z'
      duration: 1
      name: server-1
      cloud/instance-type: Standard_E64_v3
      cloud/region: westus3
      cloud/vendor: azure
      cpu/energy: 5
      mem/energy: 10
      energy: 15
    - timestamp: '2024-03-05T00:00:01.000Z'
      duration: 1
      name: server-1
      cloud/instance-type: Standard_E64_v3
      cloud/region: westus3
      cloud/vendor: azure
      cpu/energy: 71
      mem/energy: 5
      energy: 76
    - timestamp: '2024-03-05T00:00:02.000Z'
      duration: 1
      name: server-1
      cloud/instance-type: Standard_E64_v3
      cloud/region: westus3
      cloud/vendor: azure
      cpu/energy: 36
      mem/energy: 74
      energy: 110
```

run

```sh
npm run if-run -- -m manifests/outputs/features/append.yaml -o manifests/outputs/features/re-append --append
```

And see the following output (with new observations appended to old observations):

```yaml
name: append
description: >-
  a complete pipeline that starts with mocked CPU utilization data and outputs
  operational carbon in gCO2eq
initialize:
  plugins:
    mock-observations:
      path: builtin
      method: MockObservations
      config:
        timestamp-from: '2024-03-05T00:00:04.000Z'
        timestamp-to: '2024-03-05T00:00:07.000Z'
        duration: 1
        components:
          - name: server-1
            cloud/instance-type: Standard_E64_v3
            cloud/region: westus3
        generators:
          common:
            cloud/vendor: azure
          randint:
            cpu/energy:
              min: 1
              max: 99
            mem/energy:
              min: 1
              max: 99
    sum:
      path: builtin
      method: Sum
      config:
        input-parameters:
          - cpu/energy
          - mem/energy
        output-parameter: energy
execution:
  command: >-
    /Users/jcrowley/.npm/_npx/1bf7c3c15bf47d04/node_modules/.bin/ts-node
    /Users/jcrowley/Development/gsf/if/src/if-run/index.ts -m
    manifests/outputs/features/append.yaml -o
    manifests/outputs/features/re-append --append
  environment:
    if-version: 0.6.0
    os: macOS
    os-version: 14.6.1
    node-version: 20.16.0
    date-time: 2024-09-04T01:05:58.758Z (UTC)
    dependencies:
      - '@babel/core@7.22.10'
      - '@babel/preset-typescript@7.23.3'
      - '@commitlint/cli@18.6.0'
      - '@commitlint/config-conventional@18.6.0'
      - '@grnsft/if-core@0.0.16'
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
  pipeline:
    compute:
      - mock-observations
      - sum
    regroup:
      - cloud/region
      - name
  defaults: null
  children:
    westus3:
      children:
        server-1:
          inputs:
            - timestamp: '2024-03-05T00:00:00.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 5
              mem/energy: 10
            - timestamp: '2024-03-05T00:00:01.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 71
              mem/energy: 5
            - timestamp: '2024-03-05T00:00:02.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 36
              mem/energy: 74
          outputs:
            - timestamp: '2024-03-05T00:00:00.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 5
              mem/energy: 10
              energy: 15
            - timestamp: '2024-03-05T00:00:01.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 71
              mem/energy: 5
              energy: 76
            - timestamp: '2024-03-05T00:00:02.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 36
              mem/energy: 74
              energy: 110
            - timestamp: '2024-03-05T00:00:04.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 2
              mem/energy: 26
              energy: 28
            - timestamp: '2024-03-05T00:00:05.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 67
              mem/energy: 27
              energy: 94
            - timestamp: '2024-03-05T00:00:06.000Z'
              duration: 1
              name: server-1
              cloud/instance-type: Standard_E64_v3
              cloud/region: westus3
              cloud/vendor: azure
              cpu/energy: 88
              mem/energy: 6
              energy: 94
```

## `if-merge`

`if-merge` is a command line tool that takes multiple output files and merges them into one single file.

### commands

- `--manifests` or `-m`: (required) the path to an executed IMP
- `--output` or `-o`: (optional) the path to save your output data
- `name` or `n`: (optional) the value of the `name` property in the merged IMP
- `description` or `d`: (optional) the value of the `description` property in the merged IMP
- `help` or `h`: (optional) provides information about all available commands in order to help you easily find the command you need.

This cli helps for systems to generate their own IMPs independently, then later merge all the IMPs from the different components together for time-syncing, aggregation and reporting purposes.

```sh
if-merge -m imp.yml imp2.yml -n "merged-imp" -d "description of my imp" -o merged-imp.yml
```

## `if-api`

`if-api` is a command that provides the functionality of `if-run` as an API Server.  By default, it accepts requests on `localhost:3000`, but this can be changed using environment variables or options.

```sh
# Run the API server listening on the default localhost:3000.
$ if-api
```

If the API server is running, you can send a manifest in the request body and receive the results of `if-run` as a response.

```sh
# Health check
$ curl http://localhost:3000/health

# Process manifest (YAML request)
$ curl -H "Content-Type: application/yaml" --data-binary @manifest.yaml http://localhost:3000/v1/run

# Process manifest (JSON request)
$ curl --json @manifest.json http://localhost:3000/v1/run
```

The options `--observe`, `--aggregate`, and `--compute` for running only specific phases of `if-run` can be specified as query parameters.

```sh
# Execute only the compute phase
$ curl -H "Content-Type: application/yaml" --data-binary @manifest.yaml http://localhost:3000/v1/run --url-query compute=true
```

### environment variables

`if-api` supports the following environment variables.

- `HOST`: Specifies the hostname/IP address that the API Server will listen on.
- `PORT`: Specifies the port number that the API Server will listen on.

### `--host`, `-b`

The `--host` option specifies the hostname/IP address that the API Server will listen on.  This option takes precedence over the `HOST` environment variable specification.

```sh
# Run the API server listening on 0.0.0.0:3000.
$ if-api --host 0.0.0.0
## or using aliases
$ if-api -b 0.0.0.0
```

### `--port`, `-p`

The `--port` option specifies the port number that the API Server will listen on.  This option takes precedence over the `PORT` environment variable specification.

```sh
# Run the API server listening on localhost:8080
$ if-api --port 8080
## or using aliases
$ if-api -p 8080
```

### `--disableExternalPluginWarning`, `-w`

`if-api` outputs warning logs for external plugins that are being executed for the first time, but this warning can be suppressed by specifying the `--disableExternalPluginWarning` option.

### `--disabledPlugins`, `-f`

With `if-api`, it's possible to use not only builtin plugins but also external plugins installed in the execution environment. However, for security reasons, the following builtin plugins are disabled by default:

- Shell
- CSVImport
- CSVLookup

To enable these, or conversely to disable other plugins, you can control them by specifying a file containing the plugins to be disabled using the startup option `--disabledPlugins <filename>`.
In the file, specify one plugin per line in the format `plugin-path:method-name`. For builtin plugins, specify them in the format `builtin:method-name`.

```sh
# Disable builtin:Shell and if-github-plugin:Github. Do not disable builtin:CSVImport and builtin:CSVLookup.
$ cat disabled-plugins.txt
builtin:Shell
if-github-plugin:Github
$ if-api --disabledPlugins disabled-plugins.txt
```

Note that to enable all plugins, you need to specify an empty file.

```sh
# Disable nothing.
$ cat empty.txt
$ if-api --disabledPlugins empty.txt
```

### `--debug`, `-d`

Specifying the `--debug` option enables debug log output.

### `--help` , `-h`

The `--help` option provides information about all available commands in order to help you easily find the command you need.
