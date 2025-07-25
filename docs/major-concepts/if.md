---
sidebar_position: 3
---

# Impact Engine (CLI)

## Introduction

`if-run` is a command line tool that computes [IMP files](imp-file.md).
It is the portal allowing users to interact with the Impact Framework.

The available options and their shortcuts are:

- `--manifest` or `-m`: path to an input IMP file
- `--output` or `-o` (optional): path to the output file where the results as saved
- `--no-output` or `-n` (optional): suppress the output to console
- `--help` or `-h`: prints out help instruction
- `--debug`: enables IF execution logs
- `--append`: allows you to rerun an already-computed IMP and append new values to the existing data.
- `--observe`: runs only `observe` phases of the IMP execution
- `--regroup`: runs only `regroup` phases of the IMP execution
- `--compute`: runs only `compute` phases of the IMP execution

The only required command is `--manifest`. Without a valid path to an IMP file, `if-run` has nothing to execute.

To use `if-run`, you must first [write an IMP file](../users/how-to-write-imps.md). Then, you can simply pass the path to the IMP file to `if-run` on the command line.

```sh
if-run --manifest /my-imp.yml
## or using aliases
if-run -m /my-imp.yml
```

You can also pass a path where you would like to save the output file to. For example:

```sh
if-run --manifest ./my-imp.yml --output ./my-results.yml
## or using aliases
if-run -m ./my-imp.yml -o ./my-results.yml
```

If you omit the `--output` command, your results will only be displayed in the console.

For more information on the `if-run` commands see the [CLI reference documentation](../reference/cli.md).

## Phased execution

To enable greener and more flexible use of IF, we separate the IMP execution into distinct phases: `observe`, `regroup` and `compute`. This is invisible to you when you run `if-run` but behind the scenes all three of these phases are being run. However, you can instruct IF to run these phases individually, to avoid recomputing parts of the IMP unnecessarily. To do this, you simply pass `--observe`, `--regroup`, and `--compute` flags to IF in the combination you need. For example, to run _only_ the observe phase (to generate input data):

```
if-run -m <imp> --observe
```

to run the compute phase on its own:

```
if-run -m <imp> --compute
```

To run the observe and compute phases without regrouping:

```
if-run -m <imp> --observe --compute
```
