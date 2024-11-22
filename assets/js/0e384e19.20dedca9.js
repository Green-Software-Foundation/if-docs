"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[671],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(4137));const a={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Impact Framework",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/intro",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/if-docs/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Major Concepts",permalink:"/major-concepts/"}},l={},c=[{value:"Impact Framework",id:"impact-framework",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Background",id:"background",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"Navigating these docs",id:"navigating-these-docs",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"impact-framework"},"Impact Framework"),(0,r.kt)("p",null,"Impact Framework (IF) aims to make the environmental impacts of software easier to calculate ",(0,r.kt)("strong",{parentName:"p"},"and")," share."),(0,r.kt)("p",null,"IF allows you to calculate the environmental impacts, such as carbon, of your software applications without writing any code. All you have to do is write a simple ",(0,r.kt)("strong",{parentName:"p"},"manifest file")," and IF handles the rest."),(0,r.kt)("p",null,"The project is entirely open source and composability is a core design principle - we want you to be able to create your own plugins and plug them in to our framework, or pick from a broad universe of open source plugins created by others."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"If you can't measure, you can't improve. Software has many negative environmental ",(0,r.kt)("strong",{parentName:"p"},"impacts")," which we need to optimize, carbon, water, and energy, to name just a few."),(0,r.kt)("p",null,"Unfortunately, measuring software impact metrics like carbon, water, and energy is complex and nuanced."),(0,r.kt)("p",null,"Modern applications are composed of many smaller pieces of software (components) running on different environments, for example, private cloud, public cloud, bare-metal, virtualized, containerized, mobile, laptops, desktops, embedded, and IoT. Many components that make up a typical software application are run on something other than resources you own or control, which makes including the impact of managed services in your measurement especially hard."),(0,r.kt)("p",null,"The impacts of software components also vary over time, so as well as understanding ",(0,r.kt)("strong",{parentName:"p"},"which")," components contribute most to the overall impacts, there is also a question of ",(0,r.kt)("strong",{parentName:"p"},"when")," they contribute the most."),(0,r.kt)("p",null,"Only through a granular analysis of the impacts of your software system can investments in reducing its impact be prioritized and verified. Measurement is the first and most crucial step in greening a software system, and the first step in that process with the Impact Framework is to create a tree."),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"This project has evolved over the two years of the GSF's existence."),(0,r.kt)("p",null,"During the development of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/sci/blob/dev/SPEC.md"},"SCI"),", we acknowledged that the biggest blocker to adoption was data regarding the emissions of software components on different platforms and runtimes."),(0,r.kt)("p",null,"We then launched the sci-data project to help create the data sets required to calculate an SCI score."),(0,r.kt)("p",null,"After some investigation, the original sci-data team quickly realized that there were several existing data sources, and many more were in development, free open source or private commercial. The future challenge wouldn't be to source them, it would be knowing which data set to use for which use case, how data sets differed in their methodology and interface and when to use one over the other, the pros/cons, and trade-offs."),(0,r.kt)("p",null,"The project evolved into the ",(0,r.kt)("a",{parentName:"p",href:"https://sci-guide.greensoftware.foundation/"},"sci-guide")," to document existing data sets, providing guidance for when to use one over another and how to use it to create your own software measurement reports."),(0,r.kt)("p",null,"Finally, we had enough information, and ",(0,r.kt)("a",{parentName:"p",href:"https://sci-guide.greensoftware.foundation/CaseStudies"},"SCI case studies")," started to be written. This was a milestone moment."),(0,r.kt)("p",null,"But now we are in the next evolution, to have software measurement be a mainstream activity. For this to be an industry with thousands of professionals working to decarbonize software, for businesses to grow and thrive in a commercial software measurement ecosystem, we need to formalize software measurement into a discipline with standards and tooling. The SCI Specification is the standard, and the Impact Framework is the tooling."),(0,r.kt)("h2",{id:"project-structure"},"Project Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"IF source code")," can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if"},"IF Github repository"),". The code there covers the framework, which includes all the infrastructure for reading and writing input and output yamls, invoking plugins, running the command line tool and associated helper functions. However, it does not include the actual plugins themselves. Part of the IF design philosophy is that plugins should aim to do one thing as simply as possible, so that the IF is as composable and configurable as possible. Therefore, to use IF, you have to either create your own plugins or find some prebuilt ones and install them yourself. This also implies that you take responsibility for the plugins you choose to install."),(0,r.kt)("p",null,"We do provide a ",(0,r.kt)("strong",{parentName:"p"},"standard library of plugins")," built and maintained by the IF core team. These come bundled with IF. Their source code and README documentation and can be found in ",(0,r.kt)("inlineCode",{parentName:"p"},"if/src/builtins"),"."),(0,r.kt)("p",null,"There are also a wide range of community-owned plugins that we make discoverable on our ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.if.greensoftware.foundation"},"Explorer website")),(0,r.kt)("p",null,"Finally, the ",(0,r.kt)("strong",{parentName:"p"},"source code for this documentation")," website is available at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Green-Software-Foundation/if-docs"},(0,r.kt)("inlineCode",{parentName:"a"},"if-docs")," Github repository"),"."),(0,r.kt)("h2",{id:"navigating-these-docs"},"Navigating these docs"),(0,r.kt)("p",null,"The lefthand sidebar contains links to all the information you need to understand Impact Framework."),(0,r.kt)("p",null,"You can explore the key ideas underpinning Impact Framework in the ",(0,r.kt)("a",{parentName:"p",href:"/major-concepts/"},"Major Concepts section"),"."),(0,r.kt)("p",null,"Users can read our ",(0,r.kt)("a",{parentName:"p",href:"./users/"},"guides")," explaining how to use IF, including installation, using the CLI and loading plugins."),(0,r.kt)("p",null,"We also have ",(0,r.kt)("a",{parentName:"p",href:"./developers/"},"developer documentation")," to help you get started building with IF."),(0,r.kt)("p",null,"You will find documentation for the individual built-in plugin implementations in ",(0,r.kt)("a",{parentName:"p",href:"/reference/plugins"},(0,r.kt)("inlineCode",{parentName:"a"},"plugins")),"."))}p.isMDXComponent=!0}}]);