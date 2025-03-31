"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[533],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(4137));const i={"sidebar-position":4},a="Plugins",l={unversionedId:"major-concepts/plugins",id:"major-concepts/plugins",title:"Plugins",description:"Plugins are self-contained units of code that do one thing. They can be loaded into IF and chained together in a pipeline so that simple individual plugins can form a complicated procedure for computing an IMP file.",source:"@site/docs/major-concepts/plugins.md",sourceDirName:"major-concepts",slug:"/major-concepts/plugins",permalink:"/major-concepts/plugins",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/major-concepts/plugins.md",tags:[],version:"current",frontMatter:{"sidebar-position":4},sidebar:"tutorialSidebar",previous:{title:"IMP Files",permalink:"/major-concepts/imp-file"},next:{title:"Regroup",permalink:"/major-concepts/regroup"}},s={},p=[{value:"What are plugins?",id:"what-are-plugins",level:2},{value:"Why do we need to standardize the interface to plugins?",id:"why-do-we-need-to-standardize-the-interface-to-plugins",level:2},{value:"Finding community plugins",id:"finding-community-plugins",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Plugins are self-contained units of code that do one thing. They can be loaded into IF and chained together in a pipeline so that simple individual plugins can form a complicated procedure for computing an IMP file."),(0,o.kt)("h2",{id:"what-are-plugins"},"What are plugins?"),(0,o.kt)("p",null,"A plugin is a small, reuseable unit of code that can either observe some usage metric, grab some data from a file or API, or execute some transformation or calculation over some existing input data, for example, some plugins convert an input of CPU utilization into an output of energy."),(0,o.kt)("p",null,"The set of available plugins is growing; however, no single plugin can cover all impacts, scenarios, environments, contexts, and use cases. To calculate the end-to-end impact of a software application, you need to stitch together many different plugins. Plugins differ in fundamental ways in the inputs inputs they accept, their interface, their calculation methodology, their outputs, their granularity, and their coverage. "),(0,o.kt)("p",null,"We expect the choice of which plugin to use for which software component to come down to an expert decision by a green software professional."),(0,o.kt)("h2",{id:"why-do-we-need-to-standardize-the-interface-to-plugins"},"Why do we need to standardize the interface to plugins?"),(0,o.kt)("p",null,"Currently, suppose you want to consume a plugin in your measurement application. In that case, you must craft custom code to interact with a custom interface since every plugin has its unique interface. Swapping one plugin for another requires code changes, and comparing plugins or validating their accuracy/precision is challenging. "),(0,o.kt)("p",null,"If every plugin ",(0,o.kt)("strong",{parentName:"p"},"exposes the same interface"),", then those plugins can easily be plugged into different applications, swapped in and out, upgraded, and compared. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Our thesis is simple: if we want a large, vibrant ecosystem of people and tooling around measurement, we need a standard, common interface for all plugins.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Ecosystems grow and thrive through standards.")),(0,o.kt)("p",null,"You can explore more in the ",(0,o.kt)("a",{parentName:"p",href:"/reference/plugins"},"plugins reference docs")," or our ",(0,o.kt)("a",{parentName:"p",href:"/developers/how-to-build-plugins"},"plugin building tutorial"),"."),(0,o.kt)("h2",{id:"finding-community-plugins"},"Finding community plugins"),(0,o.kt)("p",null,"Anyone can build IF plugins. To make them discoverable, we host the ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.if.greensoftware.foundation"},"IF Explorer")," website. There you can search for plugins that you need for your specific use-case."),(0,o.kt)("p",null,"You can also add your own plugins to the explorer. Simply fill in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.greensoftware.foundation/how-to-add-plugins"},"submission form"),"."))}c.isMDXComponent=!0}}]);