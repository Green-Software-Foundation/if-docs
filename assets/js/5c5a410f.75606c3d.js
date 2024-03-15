"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[468],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7003:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=t(7462),i=(t(7294),t(4137));const r={"sidebar-position":2},l="Manifest File",o={unversionedId:"major-concepts/manifest-file",id:"major-concepts/manifest-file",title:"Manifest File",description:"Manifest files are fundamental to Impact Framework and they serve multiple important purposes, including:",source:"@site/docs/major-concepts/manifest-file.md",sourceDirName:"major-concepts",slug:"/major-concepts/manifest-file",permalink:"/major-concepts/manifest-file",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/ief/docs/major-concepts/manifest-file.md",tags:[],version:"current",frontMatter:{"sidebar-position":2},sidebar:"tutorialSidebar",previous:{title:"Impact Engine (CLI)",permalink:"/major-concepts/if"},next:{title:"Parameters",permalink:"/major-concepts/parameters"}},p={},s=[{value:"Structure of a manifest file",id:"structure-of-a-manifest-file",level:2},{value:"Overview",id:"overview",level:3},{value:"Global metadata",id:"global-metadata",level:3},{value:"Plugin initialization",id:"plugin-initialization",level:3},{value:"Tree",id:"tree",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Computing a manifest file",id:"computing-a-manifest-file",level:2},{value:"Outputs",id:"outputs",level:2}],u={toc:s};function m(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"manifest-file"},"Manifest File"),(0,i.kt)("p",null,"Manifest files are fundamental to Impact Framework and they serve multiple important purposes, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They contain all the necessary configurations for Impact Framework"),(0,i.kt)("li",{parentName:"ul"},"They define your application architecture"),(0,i.kt)("li",{parentName:"ul"},"They hold your input data"),(0,i.kt)("li",{parentName:"ul"},"They are shareable, portable and human-readable"),(0,i.kt)("li",{parentName:"ul"},"They can be used as verifiable audits form your application")),(0,i.kt)("p",null,"The manifest is a ",(0,i.kt)("a",{parentName:"p",href:"https://circleci.com/blog/what-is-yaml-a-beginner-s-guide/"},"yaml")," file with a particular structure.\nIt can be thought of as an ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"executable audit"))," because the file itself can be shared with others and re-executed to verify your environmental impact calculations. "),(0,i.kt)("p",null,"It is a formal report detailing not just the end impact but all the assumptions, inputs, and plugins used in calculating the impact."),(0,i.kt)("p",null,"This is possible because ",(0,i.kt)("em",{parentName:"p"},"all the configuration and data required to run Impact Framework is contained in the manifest file"),". "),(0,i.kt)("p",null,"Anyone can download Impact Framework and execute a manifest file to verify the results. "),(0,i.kt)("h2",{id:"structure-of-a-manifest-file"},"Structure of a manifest file"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Manifest files can be simple or very intricate, depending on the plugin pipeline you want to use and the complexity of your application. However, all manifest files conform to a basic structure that looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name:\ndescription:\ntags:\ninitialize:\n  plugins:\n    <PLUGIN-NAME-HERE>: \n      method: \n      path: \n  outputs:\ntree:\n  children:\n    child:\n      pipeline:\n      config:\n      defaults:\n      inputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 3600\n")),(0,i.kt)("h3",{id:"global-metadata"},"Global metadata"),(0,i.kt)("p",null,"The global metadata includes the ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," that can be used to describe the nature of the manifest file. For example, you might name the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Carbon Jan 2024")," or similar. A short description might briefly outline the scope of the manifest file, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"company x's carbon emissions due to web serves from Jab 24 - July 24"),". Tags can be used to group manifest files (we do not explicitly use this field for anything currently)."),(0,i.kt)("h3",{id:"plugin-initialization"},"Plugin initialization"),(0,i.kt)("p",null,"The initialize section is where you define which plugins will be used in your manifest file and provide the global configuration for them. Below is sample for initialization: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"initialize:\n  plugins:\n    <PLUGIN-NAME-HERE>:\n      method: <METHOD-NAME-HERE>\n  outputs: ['csv', 'yaml', 'log']\n")),(0,i.kt)("p",null,"Where required values are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method"),": the name of the function exported by the plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path"),": the path to the plugin code. For example, for a plugin from our standard library installed from npm, this value would be ",(0,i.kt)("inlineCode",{parentName:"li"},"@grnsft/if-plugins"))),(0,i.kt)("p",null,"There is also an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"global-config")," field that can be used to set ",(0,i.kt)("em",{parentName:"p"},"global")," configuration that is common to a plugin wherever it is invoked across the entire manifest file."),(0,i.kt)("p",null,"Impact Framework uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialize")," section to instantiate each plugin. A plugin cannot be invoked elsewhere in the manifest file unless it is included in this section."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," is a list of possible export types (currently ",(0,i.kt)("inlineCode",{parentName:"p"},"csv"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"log")," are supported)."),(0,i.kt)("h3",{id:"tree"},"Tree"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," section of a manifest file defines the topology of all the components being measured. The shape of the ",(0,i.kt)("inlineCode",{parentName:"p"},"tree")," defines the grouping of components. It describes the architecture of the application being studied and contains all the usage observations for each component. The tree has individual components such as leaves, intermediate nodes representing groupings, and the top level is the root."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(403).Z,width:"614",height:"569"})),(0,i.kt)("p",null,"For example, a web application could be organized as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tree:\n  children:\n    front-end:\n      children:\n        build-pipeline:\n          children:\n            vercel:\n            github-pages:\n    backend-database:\n      children:\n        server1:\n        server2:\n        server3:\n    front-end:\n    networking:\n")),(0,i.kt)("p",null,"This example has a relatively straightforward structure with a maximum of 3 levels of nesting. You can continue to nest components to any depth."),(0,i.kt)("p",null,"Each component has some configuration, some input data, and a plugin pipeline."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pipeline"),": a list of plugins that should be executed for a specific component"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config"),": contains configuration for each plugin that applies just inside this specific component."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defaults"),": fallback values that IF defaults to if they are not present in an input observation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs"),": an array of ",(0,i.kt)("inlineCode",{parentName:"li"},"observation")," data, with each ",(0,i.kt)("inlineCode",{parentName:"li"},"observation")," containing usage data for a given timestep.")),(0,i.kt)("p",null,"If a component ",(0,i.kt)("em",{parentName:"p"},"does not")," include its own ",(0,i.kt)("inlineCode",{parentName:"p"},"pipeline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," values, they are inherited from the closest parent."),(0,i.kt)("p",null,"Here's an example of a moderately complex tree:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"tree:\n  children:\n    child-0:\n      pipeline:\n        - sci-e\n      children:\n        child-0-1:\n          pipeline:\n            - sci-e\n          config: null\n          defaults: null\n          inputs:\n            - timestamp: 2023-07-06T00:00\n              duration: 10\n              cpu-util: 50\n              energy-network: 0.000811\n          outputs:\n            - timestamp: 2023-07-06T00:00\n              duration: 10\n              cpu-util: 50\n              energy-network: 0.000811\n              energy: 0.000811\n        child-0-2:\n          children:\n            child-0-2-1:\n              pipeline:\n                - sci-e\n              config: null\n              defaults: null\n              inputs:\n                - timestamp: 2023-07-06T00:00\n                  duration: 10\n                  cpu-util: 50\n                  energy-network: 0.000811\n              outputs:\n                - timestamp: 2023-07-06T00:00\n                  duration: 10\n                  cpu-util: 50\n                  energy-network: 0.000811\n                  energy: 0.000811\n")),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"Every component includes an ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," field that gets read into plugins as an array. ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," are divided into ",(0,i.kt)("inlineCode",{parentName:"p"},"observations"),", each having a ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"duration"),". Every ",(0,i.kt)("inlineCode",{parentName:"p"},"observation")," refers to an element in ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," representing some snapshot in time."),(0,i.kt)("p",null,"Each plugin takes the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array and applies some calculation or transformation to each ",(0,i.kt)("inlineCode",{parentName:"p"},"observation")," in the array."),(0,i.kt)("p",null,"Observations can include any type of data, including human judgment, assumptions, other plugins, APIs, survey data or telemetry."),(0,i.kt)("p",null,"The separation of timestamps in the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array determines the temporal granularity of your impact calculations. The more frequent your observations, the more accurate your impact assessment."),(0,i.kt)("h2",{id:"computing-a-manifest-file"},"Computing a manifest file"),(0,i.kt)("p",null,"Impact Framework computes manifest files. For each component in the tree, the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array is passed to each plugin in the pipeline in sequence. "),(0,i.kt)("p",null,"Each plugin ",(0,i.kt)("em",{parentName:"p"},"enriches")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," array in some specific way, typically by adding a new ",(0,i.kt)("inlineCode",{parentName:"p"},"key-value")," pair to each observation in the array. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"teads-curve")," plugin takes in CPU utilization expressed as a percentage as an input and appends ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu/energy")," expressed in kWh. ",(0,i.kt)("inlineCode",{parentName:"p"},"cpu/energy")," is then available to be passed as an input to, for example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"sci-e")," plugin."),(0,i.kt)("p",null,"This implies a sequence of plugins where the inputs for some plugins must either be present in the original manifest file or be outputs of the preceding plugins in the pipeline."),(0,i.kt)("p",null,"There are also plugins and built-in features that can synchronize time series of ",(0,i.kt)("inlineCode",{parentName:"p"},"observations")," across an entire tree and aggregate data across time or across components."),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"When Impact Framework computes a manifest file, it appends new data to the manifest file and the final result is an enriched manifest that includes all the configuration and contextual data, the input data, and the results of executing each plugin. This means the output file is completely auditable - the manifest file can be recovered simply by deleting the ",(0,i.kt)("inlineCode",{parentName:"p"},"outputs")," section of the output file."),(0,i.kt)("p",null,"Here's an example output file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: e-mem\ndescription: null\ntags: null\ninitialize:\n  plugins:\n    e-mem:\n      path: "@grnsft/if-plugins"\n      method: EMem\ntree:\n  children:\n    child:\n      pipeline:\n        - e-mem\n      config: null\n      defaults:\n      inputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 3600\n          memory/utilization: 40\n          memory/capacity: 1\n      outputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 3600\n          mem-util: 40\n          memory/capacity: 1\n          memory/energy: 0.15200000000000002\n')))}m.isMDXComponent=!0},403:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/3f18767c1a55cee416e3de70314609e3-c7fa9feaf0993c3ed2b5a34b8b82432c.png"}}]);