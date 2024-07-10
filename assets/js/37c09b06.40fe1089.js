"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[485],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,h=d["".concat(p,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={"sidebar-position":6},i="How to create an exhaust script",s={unversionedId:"developers/how-to-create-exhaust-script",id:"developers/how-to-create-exhaust-script",title:"How to create an exhaust script",description:"The If framework outputs data in yaml format. Any other output formats require a separate script that takes the yaml output data and processes it. We provide if-csv for outputting data in csv format bundled with IF. For any other format, you need to write an exhaust script.",source:"@site/docs/developers/how-to-create-exhaust-script.md",sourceDirName:"developers",slug:"/developers/how-to-create-exhaust-script",permalink:"/developers/how-to-create-exhaust-script",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/developers/how-to-create-exhaust-script.md",tags:[],version:"current",frontMatter:{"sidebar-position":6},sidebar:"tutorialSidebar",previous:{title:"How to build plugins",permalink:"/developers/how-to-build-plugins"},next:{title:"How to make plugins production ready",permalink:"/developers/how-to-refine-plugins"}},p={},c=[],u={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-an-exhaust-script"},"How to create an exhaust script"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"If")," framework outputs data in ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml")," format. Any other output formats require a separate script that takes the yaml output data and processes it. We provide ",(0,o.kt)("a",{parentName:"p",href:"/users/how-to-export-csv-file-with-if-csv"},(0,o.kt)("inlineCode",{parentName:"a"},"if-csv"))," for outputting data in ",(0,o.kt)("inlineCode",{parentName:"p"},"csv")," format bundled with IF. For any other format, you need to write an exhaust script.\nThis guide will help you create your own exhaust script."),(0,o.kt)("p",null,"In this example, we'll create a script that executes the manifest and outputs the data in ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const IfJson = async () => {\n  const { manifest, output } = await parseIfCsvArgs();\n\n  if (manifest) {\n    const { rawManifest } = await load(manifest);\n    const { children } = rawManifest.tree;\n\n    if (!(children?.child || children?.['child-0']).outputs) {\n      throw new ManifestValidationError(FAILURE_MESSAGE_OUTPUTS);\n    }\n\n    // Add logic to export the executed manifest to `json` format.\n  }\n\n  process.exit(0);\n};\n\nIfJson().catch(handleError);\n")),(0,o.kt)("p",null,"To add this script to your package.json, include the following entry in the scripts section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "if-json": "npx ts-node if-json.ts"\n}\n')),(0,o.kt)("p",null,"This setup ensures that your script will execute the manifest and output the data in JSON format."))}l.isMDXComponent=!0}}]);