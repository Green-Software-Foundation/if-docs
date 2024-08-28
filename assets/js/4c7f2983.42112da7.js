"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[186],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5608:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(7462),i=(n(7294),n(4137));const a={"sidebar-position":7},o="Regroup",p={unversionedId:"major-concepts/regroup",id:"major-concepts/regroup",title:"Regroup",description:"Regroup is an IF feature that reorganizes a tree according to keys provided by the user. This allows users to regroup their observations according to various properties of their application. For example, the following manifest file contains a flat array of observations. This is how you might expect data to arrive from an importer plugin, maybe one that hits a metrics API for a cloud service.",source:"@site/docs/major-concepts/regroup.md",sourceDirName:"major-concepts",slug:"/major-concepts/regroup",permalink:"/major-concepts/regroup",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/major-concepts/regroup.md",tags:[],version:"current",frontMatter:{"sidebar-position":7},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/major-concepts/plugins"},next:{title:"Time",permalink:"/major-concepts/time"}},s={},u=[{value:"Using <code>regroup</code>",id:"using-regroup",level:2}],c={toc:u};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"regroup"},"Regroup"),(0,i.kt)("p",null,"Regroup is an IF feature that reorganizes a tree according to keys provided by the user. This allows users to regroup their observations according to various properties of their application. For example, the following manifest file contains a flat array of observations. This is how you might expect data to arrive from an importer plugin, maybe one that hits a metrics API for a cloud service."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: if-demo\ndescription: demo pipeline\ntree:\n  children:\n    my-app:\n      pipeline:\n        observe:\n        regroup:\n          - cloud-region\n          - instance-type     \n        compute:\n          - teads-curve\n      inputs:\n        - timestamp: 2023-07-06T00:00\n          duration: 300 \n          instance-type: A1 \n          region: uk-west\n          cpu-util: 99\n        - timestamp: 2023-07-06T05:00 \n          duration: 300 \n          instance-type: A1 \n          region: uk-west\n          cpu-util: 23    \n        - timestamp: 2023-07-06T10:00\n          duration: 300\n          instance-type: A1 \n          region: uk-west\n          cpu-util: 12\n        - timestamp: 2023-07-06T00:00 # note this time restarts at the start timstamp\n          duration: 300 \n          instance-type: B1\n          region: uk-west\n          cpu-util: 11\n        - timestamp: 2023-07-06T05:00 \n          duration: 300 \n          instance-type: B1\n          region: uk-west\n          cpu-util: 67\n        - timestamp: 2023-07-06T10:00\n          duration: 300 \n          instance-type: B1\n          region: uk-west\n          cpu-util: 1     \n")),(0,i.kt)("p",null,"However, each observation contains an ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-type")," field that varies between observations. There are two instance types being represented in this array of observations. This means there are duplicate entries for the same timestamp in this array. This is the problem that ",(0,i.kt)("inlineCode",{parentName:"p"},"regroup")," solves. You provide ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-type")," as a key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"regroup")," config and it extracts the data belonging to the different instances and separates them into independent arrays. The above example would be restructured so that instance types ",(0,i.kt)("inlineCode",{parentName:"p"},"A1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B1")," have their own data, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"children:\n  A1:\n      inputs:\n      - timestamp: 2023-07-06T00:00\n          duration: 300\n          instance-type: A1\n          region: uk-west\n          cpu-util: 99\n      - timestamp: 2023-07-06T05:00\n          duration: 300\n          instance-type: A1\n          region: uk-west\n          cpu-util: 23\n      - timestamp: 2023-07-06T10:00\n          duration: 300\n          instance-type: A1\n          region: uk-west\n          cpu-util: 12\n  B1:\n      inputs:\n      - timestamp: 2023-07-06T00:00\n          duration: 300\n          instance-type: B1\n          region: uk-east\n          cpu-util: 11\n      - timestamp: 2023-07-06T05:00\n          duration: 300\n          instance-type: B1\n          region: uk-east\n          cpu-util: 67\n      - timestamp: 2023-07-06T10:00\n          duration: 300\n          instance-type: B1\n          region: uk-east\n          cpu-util: 1          \n")),(0,i.kt)("h2",{id:"using-regroup"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"regroup")),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"regroup"),", you simply provide the keys you want to regroup by in the ",(0,i.kt)("inlineCode",{parentName:"p"},"regroup")," pipeline. ",(0,i.kt)("inlineCode",{parentName:"p"},"regroup")," is NOT a plugin, it is a core feature of IF that is executed when you run ",(0,i.kt)("inlineCode",{parentName:"p"},"if-run")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"if-run --regroup")," if the config is available in the manifest file."),(0,i.kt)("p",null,"The config is provided at the node level, and it looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"tree:\n  children:\n    my-app:\n      pipeline:\n        observe:\n        regroup:\n          - cloud-region\n          - instance-type  \n")),(0,i.kt)("p",null,"In the example above, the plugin would regroup the input data for the specific component by ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-region")," and by ",(0,i.kt)("inlineCode",{parentName:"p"},"instance-type"),"."))}l.isMDXComponent=!0}}]);