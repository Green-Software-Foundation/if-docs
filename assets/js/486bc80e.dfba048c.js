"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[162],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:2},l="How to install Impact Framework",i={unversionedId:"users/how-to-install-if",id:"users/how-to-install-if",title:"How to install Impact Framework",description:"You can install Impact Framework either globally or locally. For most users, we recommend installing our official releases globally using npm. You can do this using the following command:",source:"@site/docs/users/how-to-install-if.md",sourceDirName:"users",slug:"/users/how-to-install-if",permalink:"/users/how-to-install-if",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/users/how-to-install-if.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/users/quick-start"},next:{title:"How to load plugins",permalink:"/users/how-to-import-plugins"}},s={},c=[{value:"Installing locally",id:"installing-locally",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-install-impact-framework"},"How to install Impact Framework"),(0,o.kt)("p",null,"You can install Impact Framework either globally or locally. For most users, we recommend installing our official releases globally using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm"),". You can do this using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g @grnsft/if\n")),(0,o.kt)("p",null,"Then, run the package using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ie")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ie --manifest <path to manifest file> \n")),(0,o.kt)("h2",{id:"installing-locally"},"Installing locally"),(0,o.kt)("p",null,"You can also clone the Impact Framework repositories and install them locally, useful for developers who want to make changes or build new plugins. Use the following command for local installation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/Green-Software-Foundation/if && cd if\nnpm install\n")),(0,o.kt)("p",null,"Then, use the following command to run Impact Framework:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run ie -- --manifest <path to your manifest file>\n")),(0,o.kt)("p",null,"Next, install local plugin repositories using ",(0,o.kt)("inlineCode",{parentName:"p"},"npm link"),". You can do this by entering the plugin folder and running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm link\n")),(0,o.kt)("p",null,"This creates a global package with the same name as your project root directory which you can then load by passing the path in your manifest file."),(0,o.kt)("p",null,"Read our detailed guide to ",(0,o.kt)("a",{parentName:"p",href:"/users/how-to-import-plugins"},"installing plugins"),"."))}u.isMDXComponent=!0}}]);