"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[109],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(4137));const i={sidebar_position:1},o="Quick start",l={unversionedId:"users/quick-start",id:"users/quick-start",title:"Quick start",description:"This page will provide the basic instructions for getting up and running with Impact Framework.",source:"@site/docs/users/quick-start.md",sourceDirName:"users",slug:"/users/quick-start",permalink:"/users/quick-start",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/users/quick-start.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Users",permalink:"/users/"},next:{title:"How to install Impact Framework",permalink:"/users/how-to-install-if"}},s={},u=[{value:"1: Install Impact Framework",id:"1-install-impact-framework",level:2},{value:"2: Create a manifest file",id:"2-create-a-manifest-file",level:2},{value:"3: Compute your manifest file",id:"3-compute-your-manifest-file",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick start"),(0,r.kt)("p",null,"This page will provide the basic instructions for getting up and running with Impact Framework."),(0,r.kt)("h2",{id:"1-install-impact-framework"},"1: Install Impact Framework"),(0,r.kt)("p",null,"Install the Impact Framework globally using npm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @grnsft/if\n")),(0,r.kt)("p",null,"Read our detailed guide to ",(0,r.kt)("a",{parentName:"p",href:"/users/how-to-install-if"},"installing IF"),"."),(0,r.kt)("h2",{id:"2-create-a-manifest-file"},"2: Create a manifest file"),(0,r.kt)("p",null,"A manifest file contains all the configuration and input data required to measure your application's energy and carbon impacts and should have a ",(0,r.kt)("inlineCode",{parentName:"p"},".yml")," extension."),(0,r.kt)("p",null,"Open the file, add your data and save the file. The minimal example below runs two snapshot observations through a single plugin - all it does is multiply a value in each element of the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," data by 2."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'name: basic-demo\ndescription:\ntags:\ninitialize:\n  plugins:\n    double-a-value: \n      path: \'builtin\'\n      method: Coefficient\n      config:\n        input-parameter: "cpu/utilization"\n        coefficient: 2\n        output-parameter: "cpu-utilization-doubled"\n\ntree:\n  children:\n    child-0:\n      defaults:\n        cpu/thermal-design-power: 100\n      pipeline:\n        observe:\n        regroup:\n        compute:\n          - double-a-value\n      inputs:\n        - timestamp: 2023-07-06T00:00\n          duration: 1\n          cpu/utilization: 20\n        - timestamp: 2023-07-06T00:01\n          duration: 1\n          cpu/utilization: 80\n')),(0,r.kt)("p",null,"Read our detailed guides to ",(0,r.kt)("a",{parentName:"p",href:"/users/how-to-write-manifests"},"writing manifest files"),"."),(0,r.kt)("h2",{id:"3-compute-your-manifest-file"},"3: Compute your manifest file"),(0,r.kt)("p",null,"Run the pipeline by passing the path to your manifest file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"if-run")," command line tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"if-run --manifest <path-to-your-manifest>\n")),(0,r.kt)("p",null,"The output will be printed to the console."),(0,r.kt)("p",null,"\ud83c\udf89",(0,r.kt)("strong",{parentName:"p"},"Congratulations")," \ud83c\udf89! You have just used the Impact Framework to compute a manifest file! Your challenge now is to use these principles to construct manifest files for real applications. Our docs will help! "),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Now you know how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"if-run")," you can start building more complex pipelines of plugins and more complicated manifest files. Your overall aim is to create a manifest file that accurately represents a real software application, and a plugin pipeline that yields an environmental metric that's important to you (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"carbon"),")."),(0,r.kt)("p",null,"Experiment by adding more plugins to the pipeline and observe how each plugin enriches each element in the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputs")," array with new values."),(0,r.kt)("p",null,"You can also configure ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," to save your output data to another ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml")," file. To do this, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"--output")," flag and the path to the output file where the results are saved."),(0,r.kt)("p",null,"The command is then as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"if-run --manifest <path-to-your-impl> --output <save-path>\n")),(0,r.kt)("p",null,"Explore our user documentation for walkthrough guides to common Impact Framework tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/users/how-to-install-if"},"How to install Impact Framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/users/how-to-import-plugins"},"How to load plugins")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/users/how-to-write-manifests"},"How to write manifest files"))))}c.isMDXComponent=!0}}]);