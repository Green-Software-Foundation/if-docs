"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[95],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),i=(n(7294),n(4137));const o={sidebar_position:2},r="Teads CPU pipeline",p={unversionedId:"pipelines/teads",id:"pipelines/teads",title:"Teads CPU pipeline",description:"The Teads CPU power curve CPU utilization (as a percentage) against a scaling factor that can be applied to the CPUs thermal design power to estimate the power drawn by the CPU in Watts.",source:"@site/docs/pipelines/teads.md",sourceDirName:"pipelines",slug:"/pipelines/teads",permalink:"/pipelines/teads",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/pipelines/teads.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"From CPU utilization to carbon emissions",permalink:"/pipelines/cpu-to-carbon"},next:{title:"Grabbing instance metadata from a CSV file",permalink:"/pipelines/instance-metadata"}},l={},u=[{value:"Impact Framework implementation",id:"impact-framework-implementation",level:2},{value:"Step 1: measure CPU utilization",id:"step-1-measure-cpu-utilization",level:3},{value:"Step 2: Determine the thermal design power of your processor",id:"step-2-determine-the-thermal-design-power-of-your-processor",level:3},{value:"Step 3: Interpolate the Teads curve",id:"step-3-interpolate-the-teads-curve",level:3},{value:"Step 4: Convert CPU factor to power",id:"step-4-convert-cpu-factor-to-power",level:3},{value:"Step 5: Convert wattage to energy",id:"step-5-convert-wattage-to-energy",level:3},{value:"Step 6: Scale the energy by the allocated CPUs",id:"step-6-scale-the-energy-by-the-allocated-cpus",level:3},{value:"Step 7: Define your pipeline",id:"step-7-define-your-pipeline",level:3},{value:"Running the manifest",id:"running-the-manifest",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"teads-cpu-pipeline"},"Teads CPU pipeline"),(0,i.kt)("p",null,"The Teads CPU power curve CPU utilization (as a percentage) against a scaling factor that can be applied to the CPUs thermal design power to estimate the power drawn by the CPU in Watts."),(0,i.kt)("p",null,"The research underpinning the curve was summarized in a pair of blog posts:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/teads-engineering/building-an-aws-ec2-carbon-emissions-dataset-3f0fd76c98ac"},"TEADS Engineering: Buildiong an AWS EC2 Carbon Emissions Dataset"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/teads-engineering/estimating-aws-ec2-instances-power-consumption-c9745e347959"},"Teads Engineering: Estimating AWS EC2 Instances Power Consumption")),(0,i.kt)("p",null,"The curve has become very widely used as a general purpose utilization-to-wattage converter for CPUs, despite the fact that it does not geenralize well."),(0,i.kt)("p",null,"The wattage can be transformed into energy by doing the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Measure your CPU utilization"),(0,i.kt)("li",{parentName:"ol"},"Determine the thermal design power of your processor"),(0,i.kt)("li",{parentName:"ol"},"Determine the scaling factor for your CPU utilization by interpolating the Teads curve"),(0,i.kt)("li",{parentName:"ol"},"Determine the power drawn by your CPU by multiplying your scaling factor by the CPU's thermal design power"),(0,i.kt)("li",{parentName:"ol"},"Perform a unit conversion to convert power in Watts to energy in kwH"),(0,i.kt)("li",{parentName:"ol"},"Scale the energy estimated for the entire chip to the portion of the chip that is actually in use.")),(0,i.kt)("p",null,"These steps can be executed in IF using just three plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Interpolate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Multiply")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Divide"))),(0,i.kt)("p",null,"We'll go through each step in the energy estimate and examine how to implement it in a manifest file using IF's standard library of ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin"),"s."),(0,i.kt)("h2",{id:"impact-framework-implementation"},"Impact Framework implementation"),(0,i.kt)("p",null,"First, create a manifest file and add this following boilerplate code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: carbon-intensity plugin demo\ndescription:\ntags:\ninitialize:\n  plugins:\ntree:\n  children:\n    child:\n      pipeline:\n        observe:\n        regroup:\n        compute:\n      defaults:\n      inputs:\n")),(0,i.kt)("p",null,"If this structure looks unfamiliar to you, you can go back to our ",(0,i.kt)("a",{parentName:"p",href:"/major-concepts/manifest-file"},"manifests page"),"."),(0,i.kt)("h3",{id:"step-1-measure-cpu-utilization"},"Step 1: measure CPU utilization"),(0,i.kt)("p",null,"The first step was to measure your CPU utilization. In real use cases you would typoically do this using an importer plugin that grabs data from a monitor API or similar. However, for this example we will just manually create some dummy data. Add some timestamps, durations and cpu/utilization data to your ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: teads demo\ndescription:\ntags:\ninitialize:\n  plugins:\ntree:\n  children:\n    child:\n      pipeline:\n        observe:\n        regroup:\n        compute:\n      defaults:\n      inputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 360\n          cpu/utilization: 1\n          carbon: 30\n        - timestamp: 2023-09-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 10\n        - timestamp: 2023-10-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 50\n        - timestamp: 2023-10-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 100\n")),(0,i.kt)("h3",{id:"step-2-determine-the-thermal-design-power-of-your-processor"},"Step 2: Determine the thermal design power of your processor"),(0,i.kt)("p",null,"Typically determinign the TDP of your processor would be done using a CSV lookup. We have a pipeline example for ",(0,i.kt)("a",{parentName:"p",href:"./tdp-finder.md"},"tdp-finder")," in these docs - combining this pipeline with the ",(0,i.kt)("inlineCode",{parentName:"p"},"tdp-finder")," pipeline would eb a great follow on exercise after you have finished this tutorial. Foir now, we will just hartd code some TDP data into your manifest so we can focus on the CPU utilization to energy calculations. Add ",(0,i.kt)("inlineCode",{parentName:"p"},"thermal-design-power")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"defaults")," - this is a shortcut to providing it in every timestep in your ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"default:\n  thermal-design-power: 100\n")),(0,i.kt)("h3",{id:"step-3-interpolate-the-teads-curve"},"Step 3: Interpolate the Teads curve"),(0,i.kt)("p",null,"The Teads curve has CPU utilization ont he ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," axis and a scaling factor on the ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," axis. There are only four points on the published curve. Your task is to get the scaling factor for your specific CPU utilization values by interpolating between the known points. Luckily, we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"builtin")," for that purpose!"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"Interpolation")," plugin to your list of plugins in the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"initialize:\n  plugins:\n    interpolate:\n      method Interpolation\n      path: builtin\n")),(0,i.kt)("p",null,"The details about the interpolation you want to do and the values to return are configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," whoch is also added int he ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize block"),". Specifically, you have to provide the known points of the curve you want to interpolate, the ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameter")," (which is the ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," value whose correspondiong ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," value you want to find out, i.e. your CPU utilization value) and the ",(0,i.kt)("inlineCode",{parentName:"p"},"output-parameter")," (the name you want to give to your retrieved ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," value)."),(0,i.kt)("p",null,"You want to interpolate the Teads curve, so you can provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," values obtained from the articles linked in the introduction section above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"x: [0, 10, 50, 100]\ny: [0.12, 0.32, 0.75, 1.02]\n")),(0,i.kt)("p",null,"Your ",(0,i.kt)("inlineCode",{parentName:"p"},"input-parameter")," is your ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu/utilization")," and we'll name give the ",(0,i.kt)("inlineCode",{parentName:"p"},"output-parameter")," the name ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-factor"),"."),(0,i.kt)("p",null,"Your compelted ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," block for ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolate")," should look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"interpolate:\n  method: Interpolation\n  path: 'builtin'\n  config:\n    method: linear\n    x: [0, 10, 50, 100]\n    y: [0.12, 0.32, 0.75, 1.02]\n    input-parameter: 'cpu/utilization'\n    output-parameter: 'cpu-factor'\n")),(0,i.kt)("h3",{id:"step-4-convert-cpu-factor-to-power"},"Step 4: Convert CPU factor to power"),(0,i.kt)("p",null,"The interpoaltion only gave use the scaling factor; we need to apply that scaling factor to the processor's TDP to get the power drawn by the CPU at your specific CPU utilization."),(0,i.kt)("p",null,"To do this, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Multiply")," plugin in the IF standard library. We'll give the instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Multiply")," the name ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-factor-to-wattage")," and int he ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," we'll define ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-factor")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"thermal-design-power")," as the two elements in our ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array that we want to multiply together. Then we'll name the result ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-wattage"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"cpu-factor-to-wattage:\n  method: Multiply\n  path: builtin\n  config:\n    input-parameters: ['cpu-factor', 'thermal-design-power']\n    output-parameter: 'cpu-wattage'\n")),(0,i.kt)("p",null,"Add this to your ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," block."),(0,i.kt)("h3",{id:"step-5-convert-wattage-to-energy"},"Step 5: Convert wattage to energy"),(0,i.kt)("p",null,"Next we have to perform some unit conversions. Wattage is a measure of power (energy over time). To convert to energy, we can first multiply by the number of seconds our observation covers (",(0,i.kt)("inlineCode",{parentName:"p"},"duration"),") to yield energy in joules. Then, convert to kWh by applying a scaling factor that takes seconds to hours and watts to kilowatts."),(0,i.kt)("p",null,"You can do this in two steps: the first uses another instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Multiply")," an the second uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Divide"),":"),(0,i.kt)("p",null,"To do the initial multiplication of the CPU wattage and the observation duration, add the following config to your ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," block:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"wattage-times-duration:\n  method: Multiply\n  path: builtin\n  config:\n    input-parameters: ['cpu-wattage', 'duration']\n    output-parameter: 'cpu-wattage-times-duration'\n")),(0,i.kt)("p",null,"next, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Divide")," plugin to do the unit conversion:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"wattage-to-energy-kwh:\n  method: Divide\n  path: 'builtin'\n  config:\n    numerator: cpu-wattage-times-duration\n    denominator: 3600000\n    output: cpu-energy-raw\n")),(0,i.kt)("h3",{id:"step-6-scale-the-energy-by-the-allocated-cpus"},"Step 6: Scale the energy by the allocated CPUs"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-energy-raw")," value you just configured is for the entire chip. But your application probably doesn't use the entire chip. Chances are you have some number of VCPUs allocated to you that is less than the total available. So you can scale your energy estimate by the ratio of VCPUs allocated to VCPUS available."),(0,i.kt)("p",null,"Let's assume you know the number of VCPUs allocated and available in advance and that they are the same in every timestep. In this case, you can just add the values to ",(0,i.kt)("inlineCode",{parentName:"p"},"defaults")," so they become available in every timestep, just as you did with ",(0,i.kt)("inlineCode",{parentName:"p"},"thermal-design-power"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  thermal-design-power: 100\n  vcpus-total: 8\n  vcpus-allocated: 2\n")),(0,i.kt)("p",null,"You need one instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Divide")," to calculate the ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpu-ratio")," and another to apply that ",(0,i.kt)("inlineCode",{parentName:"p"},"vcpu-ratio")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-energy-raw")," value and yield your final result: ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu-energy-kwh"),". Add the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," block to achieve those steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"calculate-vcpu-ratio:\n  method: Divide\n  path: 'builtin'\n  config:\n    numerator: vcpus-total\n    denominator: vcpus-allocated\n    output: vcpu-ratio\ncorrect-cpu-energy-for-vcpu-ratio:\n  method: Divide\n  path: 'builtin'\n  config:\n    numerator: cpu-energy-raw\n    denominator: vcpu-ratio\n    output: cpu-energy-kwh\n")),(0,i.kt)("h3",{id:"step-7-define-your-pipeline"},"Step 7: Define your pipeline"),(0,i.kt)("p",null,"Now you have configured all your plugins, covering all the stages of the calculation, you can simple define them in order in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline")," section of your manifest, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"tree:\n  children:\n    child:\n      pipeline:\n        observe:\n        regroup:\n        compute:\n          - interpolate\n          - cpu-factor-to-wattage\n          - wattage-times-duration\n          - wattage-to-energy-kwh\n          - calculate-vcpu-ratio\n          - correct-cpu-energy-for-vcpu-ratio\n")),(0,i.kt)("p",null,"You also need to add some input data that your pipeline can operate over."),(0,i.kt)("p",null,"You can see the full manifest in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if/blob/main/manifests/examples/teads-curve.yml"},"IF repository"),"."),(0,i.kt)("p",null,"That's it! Your manifest is ready to run!"),(0,i.kt)("h2",{id:"running-the-manifest"},"Running the manifest"),(0,i.kt)("p",null,"Having saved your manifest as ",(0,i.kt)("inlineCode",{parentName:"p"},"teads-curve.yaml")," you can run it using IF:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"if-run -m teads-curve.yml -o teads-output.yml\n")),(0,i.kt)("p",null,"This will yield the following output file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: teads curve demo\ndescription: null\ntags: null\ninitialize:\n  plugins:\n    interpolate:\n      path: builtin\n      method: Interpolation\n      config:\n        method: linear\n        x:\n          - 0\n          - 10\n          - 50\n          - 100\n        'y':\n          - 0.12\n          - 0.32\n          - 0.75\n          - 1.02\n        input-parameter: cpu/utilization\n        output-parameter: cpu-factor\n    cpu-factor-to-wattage:\n      path: builtin\n      method: Multiply\n      config:\n        input-parameters:\n          - cpu-factor\n          - thermal-design-power\n        output-parameter: cpu-wattage\n    wattage-times-duration:\n      path: builtin\n      method: Multiply\n      config:\n        input-parameters:\n          - cpu-wattage\n          - duration\n        output-parameter: cpu-wattage-times-duration\n    wattage-to-energy-kwh:\n      path: builtin\n      method: Divide\n      config:\n        numerator: cpu-wattage-times-duration\n        denominator: 3600000\n        output: cpu-energy-raw\n    calculate-vcpu-ratio:\n      path: builtin\n      method: Divide\n      config:\n        numerator: vcpus-total\n        denominator: vcpus-allocated\n        output: vcpu-ratio\n    correct-cpu-energy-for-vcpu-ratio:\n      path: builtin\n      method: Divide\n      config:\n        numerator: cpu-energy-raw\n        denominator: vcpu-ratio\n        output: cpu-energy-kwh\nexecution:\n  command: >-\n    /home/user/.npm/_npx/1bf7c3c15bf47d04/node_modules/.bin/ts-node\n    /home/user/if/src/index.ts -m manifests/examples/teads-curve.yml\n  environment:\n    if-version: 0.6.0\n    os: macOS\n    os-version: 14.6.1\n    node-version: 18.20.4\n    date-time: 2024-10-03T15:05:11.948Z (UTC)\n    dependencies:\n      - '@babel/core@7.22.10'\n      - '@babel/preset-typescript@7.23.3'\n      - '@commitlint/cli@18.6.0'\n      - '@commitlint/config-conventional@18.6.0'\n      - '@grnsft/if-core@0.0.25'\n      - '@jest/globals@29.7.0'\n      - '@types/jest@29.5.8'\n      - '@types/js-yaml@4.0.9'\n      - '@types/luxon@3.4.2'\n      - '@types/node@20.9.0'\n      - axios-mock-adapter@1.22.0\n      - axios@1.7.2\n      - cross-env@7.0.3\n      - csv-parse@5.5.6\n      - csv-stringify@6.4.6\n      - fixpack@4.0.0\n      - gts@5.2.0\n      - husky@8.0.3\n      - jest@29.7.0\n      - js-yaml@4.1.0\n      - lint-staged@15.2.2\n      - luxon@3.4.4\n      - release-it@16.3.0\n      - rimraf@5.0.5\n      - ts-command-line-args@2.5.1\n      - ts-jest@29.1.1\n      - typescript-cubic-spline@1.0.1\n      - typescript@5.2.2\n      - winston@3.11.0\n      - zod@3.23.8\n  status: success\ntree:\n  children:\n    child:\n      pipeline:\n        observe:\n        regroup:\n        compute:\n          - interpolate\n          - cpu-factor-to-wattage\n          - wattage-times-duration\n          - wattage-to-energy-kwh\n          - calculate-vcpu-ratio\n          - correct-cpu-energy-for-vcpu-ratio\n      defaults:\n        thermal-design-power: 100\n        vcpus-total: 8\n        vcpus-allocated: 2\n      inputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 360\n          cpu/utilization: 1\n          carbon: 30\n        - timestamp: 2023-09-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 10\n        - timestamp: 2023-10-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 50\n        - timestamp: 2023-10-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 100\n      outputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 360\n          cpu/utilization: 1\n          carbon: 30\n          thermal-design-power: 100\n          vcpus-total: 8\n          vcpus-allocated: 2\n          cpu-factor: 0.13999999999999999\n          cpu-wattage: 13.999999999999998\n          cpu-wattage-times-duration: 5039.999999999999\n          cpu-energy-raw: 0.0013999999999999998\n          vcpu-ratio: 4\n          cpu-energy-kwh: 0.00034999999999999994\n        - timestamp: 2023-09-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 10\n          thermal-design-power: 100\n          vcpus-total: 8\n          vcpus-allocated: 2\n          cpu-factor: 0.32\n          cpu-wattage: 32\n          cpu-wattage-times-duration: 11520\n          cpu-energy-raw: 0.0032\n          vcpu-ratio: 4\n          cpu-energy-kwh: 0.0008\n        - timestamp: 2023-10-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 50\n          thermal-design-power: 100\n          vcpus-total: 8\n          vcpus-allocated: 2\n          cpu-factor: 0.75\n          cpu-wattage: 75\n          cpu-wattage-times-duration: 27000\n          cpu-energy-raw: 0.0075\n          vcpu-ratio: 4\n          cpu-energy-kwh: 0.001875\n        - timestamp: 2023-10-06T00:00\n          duration: 360\n          carbon: 30\n          cpu/utilization: 100\n          thermal-design-power: 100\n          vcpus-total: 8\n          vcpus-allocated: 2\n          cpu-factor: 1.02\n          cpu-wattage: 102\n          cpu-wattage-times-duration: 36720\n          cpu-energy-raw: 0.0102\n          vcpu-ratio: 4\n          cpu-energy-kwh: 0.00255\n")))}c.isMDXComponent=!0}}]);