"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[273],{4137:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?i.createElement(h,r(r({ref:n},m),{},{components:t})):i.createElement(h,r({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7281:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(7462),a=(t(7294),t(4137));const o={},r="SCI-O (operational emissions)",l={unversionedId:"models/sci-o",id:"models/sci-o",title:"SCI-O (operational emissions)",description:"Operational emissions refer to the carbon generated by a component while it is in use. It is the product of the energy used by the component in kWh and the grid intensity in gCO2e/kWh. The operational emissions are added to the embodied emissions (calculated using sci-m) to provide an overall SCI score for the component.",source:"@site/docs/05-models/sci-o.md",sourceDirName:"05-models",slug:"/models/sci-o",permalink:"/models/sci-o",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/TODO/docs/05-models/sci-o.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SCI-M: embodied carbon",permalink:"/models/sci-m"},next:{title:"SCI (software carbon intensity)",permalink:"/models/sci"}},s={},p=[{value:"Model name",id:"model-name",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Model config",id:"model-config",level:3},{value:"Observations",id:"observations",level:3},{value:"Returns",id:"returns",level:2},{value:"Calculation",id:"calculation",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Usage",id:"usage",level:2},{value:"Example impl",id:"example-impl",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sci-o-operational-emissions"},"SCI-O (operational emissions)"),(0,a.kt)("p",null,"Operational emissions refer to the carbon generated by a component while it is in use. It is the product of the energy used by the component in kWh and the grid intensity in gCO2e/kWh. The operational emissions are added to the embodied emissions (calculated using ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-m"),") to provide an overall SCI score for the component."),(0,a.kt)("h2",{id:"model-name"},"Model name"),(0,a.kt)("p",null,"IF recognizes the SCI-O model as ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-o")," "),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"model-config"},"Model config"),(0,a.kt)("p",null,"None"),(0,a.kt)("h3",{id:"observations"},"Observations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"energy"),": energy value in kWh "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"grid-carbon-intensity"),": intensity value gCO2e/kWh"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp"),": a timestamp for the observation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"duration"),": the amount of time, in seconds, that the observation covers.")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operational-carbon"),": the carbon emitted during a applications operation, in gCO2eq")),(0,a.kt)("h2",{id:"calculation"},"Calculation"),(0,a.kt)("p",null,"To calculate the operational emissions ",(0,a.kt)("inlineCode",{parentName:"p"},"o")," for a software application, use the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"O = E * I\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"O")," = operational emissions, ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," = energy in kWh, and ",(0,a.kt)("inlineCode",{parentName:"p"},"I")," = grid carbon intensity. "),(0,a.kt)("p",null,"In the IEF implementation the calculation is expressed using the following terms:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"o = (energy * grid-carbon-intensity)\n")),(0,a.kt)("p",null,"Read more on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci/blob/main/Software_Carbon_Intensity/Software_Carbon_Intensity_Specification.md#operational-carbon"},"operational emissions"),"."),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"IEF implements the plugin based on the simple multiplication of the energy and intensity values as inputs. The ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-o")," model expects ",(0,a.kt)("inlineCode",{parentName:"p"},"energy")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"grid-carbon-intensity")," to be provided as ",(0,a.kt)("inlineCode",{parentName:"p"},"inputs"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"energy")," field is added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," by the ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-e")," model only. This means ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-o")," must always be preceded by ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-e")," in a model pipeline. This is always true, even if there is only a single component of ",(0,a.kt)("inlineCode",{parentName:"p"},"energy")," such as ",(0,a.kt)("inlineCode",{parentName:"p"},"energy-cpu")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"teads-curve"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-e")," sums all the available components and adds the sum to the ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"energy"),".")),(0,a.kt)("p",null,"To run the model, you must first create an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"SciOModel")," and call its ",(0,a.kt)("inlineCode",{parentName:"p"},"configure()")," method. Then, you can call ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," to return ",(0,a.kt)("inlineCode",{parentName:"p"},"operational-carbon"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The following snippet demonstrates how to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-o")," model from Typescript."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {SciOModel} from '@gsf/ief';\n\nconst sciOModel = new SciOModel();\nsciOModel.configure()\nconst results = sciOModel.execute([\n  {\n    energy: 0.5, // energy value in kWh \n    'grid-carbon-intensity': 0.5, // intensity value gCO2e/kWh\n  }\n])\n")),(0,a.kt)("h2",{id:"example-impl"},"Example impl"),(0,a.kt)("p",null,"IEF users will typically call the model as part of a pipeline defined in an ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," file. In this case, instantiating and configuring the model is handled by ",(0,a.kt)("inlineCode",{parentName:"p"},"impact-engine")," and does not have to be done explicitly by the user. The following is an example ",(0,a.kt)("inlineCode",{parentName:"p"},"impl")," that calls ",(0,a.kt)("inlineCode",{parentName:"p"},"sci-o"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: sci-o-demo\ndescription:\ntags:\ninitialize:\n  models:\n    - name: sci-o\n      kind: plugin\n      model: SciOModel\n      path: sci-o\ngraph:\n  children:\n    child:\n      pipeline:\n        - sci-o\n      config:\n        sci-e:\n      inputs:\n        - timestamp: 2023-08-06T00:00\n          duration: 3600\n          energy: 0.001\n          grid-carbon-intensity: 800\n\n")))}d.isMDXComponent=!0}}]);