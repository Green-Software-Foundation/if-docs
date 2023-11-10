"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[472],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=r,y=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return t?i.createElement(y,o(o({ref:n},c),{},{components:t})):i.createElement(y,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(4137));const a={},o="SCI-E (total energy)",l={unversionedId:"models/sci-e",id:"models/sci-e",title:"SCI-E (total energy)",description:"sci-e is a model that simply sums up the contributions to a component's energy use. The model retunrs energy which is used as the input to the sci-o model that calculates operational emissions for the component.",source:"@site/docs/05-models/sci-e.md",sourceDirName:"05-models",slug:"/models/sci-e",permalink:"/models/sci-e",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/TODO/docs/05-models/sci-e.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cloud Instance Metadata",permalink:"/models/cloud-instance-metadata"},next:{title:"SCI-M: embodied carbon",permalink:"/models/sci-m"}},p={},s=[{value:"Model name",id:"model-name",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Model config",id:"model-config",level:3},{value:"Observations",id:"observations",level:3},{value:"Returns",id:"returns",level:2},{value:"Calculation",id:"calculation",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Example impl",id:"example-impl",level:2}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sci-e-total-energy"},"SCI-E (total energy)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sci-e")," is a model that simply sums up the contributions to a component's energy use. The model retunrs ",(0,r.kt)("inlineCode",{parentName:"p"},"energy")," which is used as the input to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-o")," model that calculates operational emissions for the component."),(0,r.kt)("h2",{id:"model-name"},"Model name"),(0,r.kt)("p",null,"IF recognizes the SCI-E model as ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-e")," "),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"model-config"},"Model config"),(0,r.kt)("p",null,"None"),(0,r.kt)("h3",{id:"observations"},"Observations"),(0,r.kt)("p",null,"At least one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"energy-cpu"),": energy used by the CPU, in kWh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enmergy-memory"),": energy used by memory, in kWh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"energy-gpu"),": energy used by GPU, in kWh"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"energy-network"),": energy used to handle network traffic, in kWh")),(0,r.kt)("p",null,"plus the following required: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),": a timestamp for the observation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"duration"),": the amount of time, in seconds, that the observation covers.")),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"energy"),": the sum of all energy components, in kWh")),(0,r.kt)("h2",{id:"calculation"},"Calculation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"energy")," is calculated as the sum of the energy due to CPU usage, energy due to network trafic, energy due to memory and energy due to GPU usage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"energy = energy-cpu + energy-network + energy-memory + e-gpu\n")),(0,r.kt)("p",null,"In any model pipeline that includes ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-o"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-o")," must be preceded by ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-e"),". This is because ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-o")," does not recognize the individual contributions, ",(0,r.kt)("inlineCode",{parentName:"p"},"energy-cpu"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"energy-network"),", etc, but expects to find ",(0,r.kt)("inlineCode",{parentName:"p"},"energy"),". Only ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-e")," takes individual contributions and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"energy"),"."),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"To run the model, you must first create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SciEModel")," and call its ",(0,r.kt)("inlineCode",{parentName:"p"},"configure()")," method. Then, you can call ",(0,r.kt)("inlineCode",{parentName:"p"},"execute()")," to return ",(0,r.kt)("inlineCode",{parentName:"p"},"energy"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { SciEModel } from '@gsf/ief';\n\nconst sciEModel = new SciEModel();\nsciEModel.configure()\nconst results = sciEModel.execute([\n  {\n    energy-cpu: 0.001,\n    energy-memory: 0.0005,\n    energy-network: 0.0005,\n  }\n])\n")),(0,r.kt)("h2",{id:"example-impl"},"Example impl"),(0,r.kt)("p",null,"IEF users will typically call the model as part of a pipeline defined in an ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," file. In this case, instantiating and configuring the model is handled by ",(0,r.kt)("inlineCode",{parentName:"p"},"impact-engine")," and does not have to be done explicitly by the user. The following is an example ",(0,r.kt)("inlineCode",{parentName:"p"},"impl")," that calls ",(0,r.kt)("inlineCode",{parentName:"p"},"sci-e"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"name: sci-e-demo\ndescription:\ntags:\ninitialize:\n  models:\n    - name: sci-e\n      kind: plugin\n      model: SciEModel\n      path: sci-e\ngraph:\n  children:\n    child:\n      pipeline:\n        - sci-e\n      config:\n        sci-e:\n      inputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 3600\n          energy-cpu: 0.001\n\n")))}m.isMDXComponent=!0}}]);