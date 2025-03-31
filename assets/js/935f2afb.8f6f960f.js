"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/intro","docId":"intro"},{"type":"category","label":"Major Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Design philosophy","href":"/major-concepts/design-philosophy","docId":"major-concepts/design-philosophy"},{"type":"link","label":"Aggregation","href":"/major-concepts/aggregation","docId":"major-concepts/aggregation"},{"type":"link","label":"Pipelines","href":"/major-concepts/pipelines","docId":"major-concepts/pipelines"},{"type":"link","label":"Exhaust scripts","href":"/major-concepts/exhaust-script","docId":"major-concepts/exhaust-script"},{"type":"link","label":"Impact Engine (CLI)","href":"/major-concepts/if","docId":"major-concepts/if"},{"type":"link","label":"IMP Files","href":"/major-concepts/imp-file","docId":"major-concepts/imp-file"},{"type":"link","label":"Plugins","href":"/major-concepts/plugins","docId":"major-concepts/plugins"},{"type":"link","label":"Regroup","href":"/major-concepts/regroup","docId":"major-concepts/regroup"},{"type":"link","label":"Time","href":"/major-concepts/time","docId":"major-concepts/time"}],"href":"/major-concepts/"},{"type":"category","label":"Users","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Quick start","href":"/users/quick-start","docId":"users/quick-start"},{"type":"link","label":"How to install Impact Framework","href":"/users/how-to-install-if","docId":"users/how-to-install-if"},{"type":"link","label":"How to load plugins","href":"/users/how-to-import-plugins","docId":"users/how-to-import-plugins"},{"type":"link","label":"How to write an IMP file","href":"/users/how-to-write-imps","docId":"users/how-to-write-imps"},{"type":"link","label":"Exporting CSV file with `if-csv`","href":"/users/how-to-export-csv-file-with-if-csv","docId":"users/how-to-export-csv-file-with-if-csv"},{"type":"link","label":"How to compare files with `if-diff`","href":"/users/how-to-compare-files-with-if-diff","docId":"users/how-to-compare-files-with-if-diff"},{"type":"link","label":"Verifying IF outputs with `if-check`","href":"/users/how-to-verify-files-with-if-check","docId":"users/how-to-verify-files-with-if-check"},{"type":"link","label":"How to check parameters and units using `explainer`","href":"/users/how-to-use-the-explain-feature","docId":"users/how-to-use-the-explain-feature"}],"href":"/users/"},{"type":"category","label":"Developers","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"How to build plugins","href":"/developers/how-to-build-plugins","docId":"developers/how-to-build-plugins"},{"type":"link","label":"How to create an exhaust script","href":"/developers/how-to-create-exhaust-script","docId":"developers/how-to-create-exhaust-script"},{"type":"link","label":"How to make plugins production ready","href":"/developers/how-to-refine-plugins","docId":"developers/how-to-refine-plugins"},{"type":"link","label":"How to submit plugins","href":"/developers/how-to-submit-plugins","docId":"developers/how-to-submit-plugins"},{"type":"link","label":"How to write unit tests","href":"/developers/how-to-write-unit-tests","docId":"developers/how-to-write-unit-tests"}],"href":"/developers/"},{"type":"category","label":"Pipeline Examples","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"From CPU utilization to carbon emissions","href":"/pipelines/cpu-to-carbon","docId":"pipelines/cpu-to-carbon"},{"type":"link","label":"Teads CPU pipeline","href":"/pipelines/teads","docId":"pipelines/teads"},{"type":"link","label":"Grabbing instance metadata from a CSV file","href":"/pipelines/instance-metadata","docId":"pipelines/instance-metadata"},{"type":"link","label":"Software Carbon Intensity (SCI)","href":"/pipelines/sci","docId":"pipelines/sci"}],"href":"/pipelines/"},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Command line tool","href":"/reference/cli","docId":"reference/cli"},{"type":"link","label":"Errors","href":"/reference/errors","docId":"reference/errors"},{"type":"link","label":"IF features","href":"/reference/features","docId":"reference/features"},{"type":"link","label":"Plugins","href":"/reference/plugins","docId":"reference/plugins"}],"href":"/reference/"},{"type":"link","label":"FAQs","href":"/FAQ","docId":"FAQ"}]},"docs":{"developers/how-to-build-plugins":{"id":"developers/how-to-build-plugins","title":"How to build plugins","description":"The IF is designed to be as composable as possible. This means you can develop your own plugins and use them in a pipeline.","sidebar":"tutorialSidebar"},"developers/how-to-create-exhaust-script":{"id":"developers/how-to-create-exhaust-script","title":"How to create an exhaust script","description":"The IF framework outputs data in yaml format. Any other output formats require a separate script that takes the yaml output data and processes it. We provide if-csv for outputting data in csv format bundled with IF. For any other format, you need to write an exhaust script.","sidebar":"tutorialSidebar"},"developers/how-to-refine-plugins":{"id":"developers/how-to-refine-plugins","title":"How to make plugins production ready","description":"Our How to build plugins guide covered the basics for how to construct an Impact Framework plugin. This guide will help you to refine your plugin to make it production-ready. These are best practice guidelines - if you intend to contribute to one of our repositories, following these guidelines will help your PR to get merged. Consistency with our norms is useful for debugging and maintaining and for making your plugin as useful as possible for other Impact Framework developers.","sidebar":"tutorialSidebar"},"developers/how-to-submit-plugins":{"id":"developers/how-to-submit-plugins","title":"How to submit plugins","description":"Once you have built a plugin and made it production ready you probably want to share it with the world!","sidebar":"tutorialSidebar"},"developers/how-to-write-unit-tests":{"id":"developers/how-to-write-unit-tests","title":"How to write unit tests","description":"Impact Framework unit tests follow a standard format. We use the jest testing library. You can run all our existing tests by opening the project directory and running npm test. This page explains how you can add new unit tests for your plugins (or add some for our plugins if you notice a gap).","sidebar":"tutorialSidebar"},"developers/index":{"id":"developers/index","title":"Developers","description":"This section contains information for Impact Framework developers. You are a developer if you want to change or update the Impact Framework by adding new features, fixing bugs or building new plugins.","sidebar":"tutorialSidebar"},"FAQ":{"id":"FAQ","title":"FAQs","description":"How can I contribute to Impact framework?","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Impact Framework","sidebar":"tutorialSidebar"},"major-concepts/aggregation":{"id":"major-concepts/aggregation","title":"Aggregation","description":"Aggregation is the process of summarizing a set of metrics.","sidebar":"tutorialSidebar"},"major-concepts/design-philosophy":{"id":"major-concepts/design-philosophy","title":"Design philosophy","description":"Transparency","sidebar":"tutorialSidebar"},"major-concepts/exhaust-script":{"id":"major-concepts/exhaust-script","title":"Exhaust scripts","description":"Exhaust scripts are scripts that can run independently of IF itself that take an executed IMP file (one with outputs) as an input, parse the yaml data and reformat it into some other representation. We provide if-csv bundled with IF, but if you want other data formats, you\'ll have to create an exhaust script yourself.","sidebar":"tutorialSidebar"},"major-concepts/if":{"id":"major-concepts/if","title":"Impact Engine (CLI)","description":"Introduction","sidebar":"tutorialSidebar"},"major-concepts/imp-file":{"id":"major-concepts/imp-file","title":"IMP Files","description":"IMP files are fundamental to Impact Framework and they serve multiple important purposes, including:","sidebar":"tutorialSidebar"},"major-concepts/index":{"id":"major-concepts/index","title":"Major Concepts","description":"Here you will find explanations for the fundamental Impact Framework concepts. This includes:","sidebar":"tutorialSidebar"},"major-concepts/pipelines":{"id":"major-concepts/pipelines","title":"Pipelines","description":"Pipelines are chains of plugins that operate in sequence over the input data in your IMP file.","sidebar":"tutorialSidebar"},"major-concepts/plugins":{"id":"major-concepts/plugins","title":"Plugins","description":"Plugins are self-contained units of code that do one thing. They can be loaded into IF and chained together in a pipeline so that simple individual plugins can form a complicated procedure for computing an IMP file.","sidebar":"tutorialSidebar"},"major-concepts/regroup":{"id":"major-concepts/regroup","title":"Regroup","description":"Regroup is an IF feature that reorganizes a tree according to keys provided by the user. This allows users to regroup their observations according to various properties of their application. For example, the following IMP file contains a flat array of observations. This is how you might expect data to arrive from an importer plugin, maybe one that hits a metrics API for a cloud service.","sidebar":"tutorialSidebar"},"major-concepts/time":{"id":"major-concepts/time","title":"Time","description":"Every observation in an array of inputs represents a snapshot with a known start time and a known duration. For example, the following observation shows that the CPU utilization for a resource was 20% for the 10 second period starting at 1500 on the 22nd January 2024:","sidebar":"tutorialSidebar"},"pipelines/cpu-to-carbon":{"id":"pipelines/cpu-to-carbon","title":"From CPU utilization to carbon emissions","description":"Tags","sidebar":"tutorialSidebar"},"pipelines/index":{"id":"pipelines/index","title":"Pipeline Examples","description":"This section contains walkthrough guides for some common pipelines you may want to use in your IMP files.","sidebar":"tutorialSidebar"},"pipelines/instance-metadata":{"id":"pipelines/instance-metadata","title":"Grabbing instance metadata from a CSV file","description":"Observations","sidebar":"tutorialSidebar"},"pipelines/sci":{"id":"pipelines/sci","title":"Software Carbon Intensity (SCI)","description":"Description","sidebar":"tutorialSidebar"},"pipelines/teads":{"id":"pipelines/teads","title":"Teads CPU pipeline","description":"The Teads CPU power curve CPU utilization (as a percentage) against a scaling factor that can be applied to the CPUs thermal design power to estimate the power drawn by the CPU in Watts.","sidebar":"tutorialSidebar"},"reference/cli":{"id":"reference/cli","title":"Command line tool","description":"A core feature of the Impact Framework is the if-run command line tool (CLI). This is how you trigger Impact Framework to execute a certain IMP file.","sidebar":"tutorialSidebar"},"reference/errors":{"id":"reference/errors","title":"Errors","description":"IF defines a finite set of error classes. All error messages emitted by IF are attached to one of these classes.","sidebar":"tutorialSidebar"},"reference/features":{"id":"reference/features","title":"IF features","description":"This page simply lists the features of Impact Framework that are not plugins or CLI tools, along with a brief description, usage instruction and link to more detailed docs.","sidebar":"tutorialSidebar"},"reference/index":{"id":"reference/index","title":"Reference","description":"In this section you will find reference documentation for the core data structures and features used in the Impact Framework.","sidebar":"tutorialSidebar"},"reference/plugins":{"id":"reference/plugins","title":"Plugins","description":"Impact Framework works by executing pipelines of plugins over input data. Those plugins are re-useable units of code that can be thought of as Lego bricks - simple blocks of code that can be assembled into complex workflows.","sidebar":"tutorialSidebar"},"users/how-to-compare-files-with-if-diff":{"id":"users/how-to-compare-files-with-if-diff","title":"How to compare files with `if-diff`","description":"if-diff is a command line tool that allows you to compare two if-run output files. They either match according to if-diff\'s matching rules, or they don\'t. If they match, then if-diff returns a simple success response. If the differ, then if-diff returns a report of the differences it finds.","sidebar":"tutorialSidebar"},"users/how-to-export-csv-file-with-if-csv":{"id":"users/how-to-export-csv-file-with-if-csv","title":"Exporting CSV file with `if-csv`","description":"IF includes a command line tool called if-csv which is designed to export CSV files based on a specified IMP file and metric.","sidebar":"tutorialSidebar"},"users/how-to-import-plugins":{"id":"users/how-to-import-plugins","title":"How to load plugins","description":"Plugins are developed separately to the Impact Framework core. However, the IF core developers maintain a standard library of plugins come bundled with IF. These are known as builtins.","sidebar":"tutorialSidebar"},"users/how-to-install-if":{"id":"users/how-to-install-if","title":"How to install Impact Framework","description":"You can install Impact Framework either globally or locally. For most users, we recommend installing our official releases globally using npm. You can do this using the following command:","sidebar":"tutorialSidebar"},"users/how-to-use-the-explain-feature":{"id":"users/how-to-use-the-explain-feature","title":"How to check parameters and units using `explainer`","description":"IMP files can get complicated, especially when there are many plugin instances initialized. It can be challenging to keep track of the flow of parameters and their units through a pipeline. To help IMP authors and auditors verify the correct flow of information through a pipeline, we provide the explainer feature.","sidebar":"tutorialSidebar"},"users/how-to-verify-files-with-if-check":{"id":"users/how-to-verify-files-with-if-check","title":"Verifying IF outputs with `if-check`","description":"IF includes a command line tool called if-check that can be used to verify the results in an IMP file.","sidebar":"tutorialSidebar"},"users/how-to-write-imps":{"id":"users/how-to-write-imps","title":"How to write an IMP file","description":"The Impact Framework receives all its configuration and input data in the form of an IMP file known as an IMP. To use the framework, you will need to write an IMP file and pass its path to the command line tool. This guide will help you to understand how to construct one of these files and use it to measure the energy and carbon usage of your app.","sidebar":"tutorialSidebar"},"users/index":{"id":"users/index","title":"Users","description":"This section contains information for Impact Framework users. You are a user if you want to apply the Impact Framework to your own use-case, such as using it to measure the environmental impact of your own apps running on some cloud platform.","sidebar":"tutorialSidebar"},"users/quick-start":{"id":"users/quick-start","title":"Quick start","description":"This page will provide the basic instructions for getting up and running with Impact Framework.","sidebar":"tutorialSidebar"}}}')}}]);