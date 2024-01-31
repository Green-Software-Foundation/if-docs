---
sidebar_position: 1
---

# Design philosophy

The following elements make up the design philosophy of the Impact Framework.

## Transparency

The [manifest file](./manifest-file.md) is the lifeblood of Impact Framework and allows full transparency to the process. It defines the context for an environmental impact calculation, including the architecture of an application, the observation period, the pipeline of calculations and transformations to execute, and the environmental impacts to track. This manifest file can then be executed to generate impact values, offering unparalleled transparency to an environmental audit, all in a standard, easy-to-read format that anyone can re-execute.


## Verifiability

An Impact Framework manifest file is powerful because anyone can re-execute it. Whilst it's possible to experiment by swapping out different plugins, the critical concept is that everything is provided, allowing anyone to re-run a calculation with the manifest file and the lightweight Impact Framework command line tool to verify an organization's impact calculation.


## Flexibility

We aim to make the Impact Framework as flexible as possible. On the one hand, balancing the helpers and standards that make plugins interoperable and consistent, while also allowing freedom of expression and creativity. Impact Framework aims to remove constraints so that the community can continue to use it for whatever their needs are. This community includes the community of experts contributing to design decisions and standards which are baked into the protocol, the community of plugin developers experimenting at the margins, and the organizations using Impact Framework to measure, report and mitigate their environmental imapact. 

Impact Framework can be a tool for transparent, verifiable environmental impact audits, but it can also be a platform for experimentation. The manifest file is a foundation for forecasting into the future or exploring where to make adjustments to most effectively minimize environmental impact. It can be a tool for research, hypothesis testing, R&D and business decision making as well as environemntal reporting. 

## Modularity

Impact Framework is the minimal set of features that enable a manifest file to be processed according to some agreed principles. We provide a tool for processing manifest files and a set of standards and norms. This allows builders to create plugins for specific tasks, such as grabbing data from a particular cloud provider or applying some calculation over some particular data.

Anyone can build a plugin and share it, meaning Impact Framework development can be bottom-up and community-driven. It also means that if you are not satisfied with how some calculation was done, you can easily fork it and replace it with your own.

Modularity as a principal, means that we aim to provide a minimal set of rules and guardrails for model builders to ensure compatibility with Impact Framework.


## Neutrality

Impact Framework aims to decentralize plugin development, supporting anyone who wants to build plugins and use them to calculate their environmental impacts. At the same time, we want to provide the helpers and guardrails that make impact calculations as smooth as possible. This means providing the minimal protocol required to support community plugin development and make it as safe as possible from unit errors and other footguns. 

***We want to see the universe of Impact Framework plugins grow organically and permissionlessly in ways we can't even imagine today!***

The Impact Framework is the result of countless discussions, experiments, conversations with industry partners, academics, researchers and developers, and represents a community consensus for how certain actions should be executed, for example, how should a series of observations be aggregated?, what standard units should be used?, how should a manifest file be structured?, etc.

Ultimately, what we are really building is a protocol; Impact Framework is just a Typescript implementation of this protocol. The protocol itself is a set of fundamental principles that define how a manifest file should be processed, such that any implementation in any language will yield the same result from a given manifest file. This means we can be neutral about what can be built with IF while also providing a set of canonical processes and standards.

Explore the other pages in this section to see how these principles have been applied to specific Impact Framework features, or head to our [user documentation](../users/) to get started running Impact Framework for yourself. 
