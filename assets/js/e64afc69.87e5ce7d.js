"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[623],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(u,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8961:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const r={},o="Building model plugins",l={unversionedId:"tutorials/how-to-build-models",id:"tutorials/how-to-build-models",title:"Building model plugins",description:"The IF is designed to be as composable as possible. This means you can develop your own models and use them in a model pipeline.",source:"@site/docs/06-tutorials/how-to-build-models.md",sourceDirName:"06-tutorials",slug:"/tutorials/how-to-build-models",permalink:"/tutorials/how-to-build-models",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/TODO/docs/06-tutorials/how-to-build-models.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/tutorials/"},next:{title:"how-to-import-models",permalink:"/tutorials/how-to-import-models"}},u={},p=[{value:"The model interface",id:"the-model-interface",level:2},{value:"Walk-through",id:"walk-through",level:2},{value:"Running your model",id:"running-your-model",level:2}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-model-plugins"},"Building model plugins"),(0,i.kt)("p",null,"The IF is designed to be as composable as possible. This means you can develop your own models and use them in a model pipeline.\nTo help developers write Typescript models to integrate easily into IF, we provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"IOutputModelInterface")," interface. Here's an overview of the stages you need to follow to integrate your model:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a Typescript file that implements the ",(0,i.kt)("inlineCode",{parentName:"li"},"IOutputModelInterface")),(0,i.kt)("li",{parentName:"ul"},"provide the path to the model to the IF command line tool.")),(0,i.kt)("h2",{id:"the-model-interface"},"The model interface"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IOutputModelInterface")," is structured as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export interface IOutputModelInterface {\n\n  configure(\n    staticParams: object | undefined\n  ): Promise<IOutputModelInterface>;\n\n  authenticate(authParams: object): void;\n\n  execute(inputs: object | object[] | undefined): Promise<any[]>;\n}\n")),(0,i.kt)("p",null,"There are four required methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configure()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This method completes any configuration steps for the model, such as loading config data from the ",(0,i.kt)("inlineCode",{parentName:"li"},"impl")," file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Params"),": None",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"staticParams"),": the model config data "))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Returns"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"an instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"IOutputModelInterface")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authenticate()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This method completes any authorization, such as handling API keys or generating tokens"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Params"),": ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"authParams"),": an object containing authorization parameters"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Returns"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"None"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"execute()"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This is where the main calculation logic of the model is implemented."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Params"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"inputs"),": the data provided in the ",(0,i.kt)("inlineCode",{parentName:"li"},"inputs")," field of the ",(0,i.kt)("inlineCode",{parentName:"li"},"impl")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Returns"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An array containing the input data plus any additional fields resulting from the model calculations.")))))),(0,i.kt)("h2",{id:"walk-through"},"Walk-through"),(0,i.kt)("p",null,"To demonstrate how to build a model that conforms to this interface, let's examine the simple ",(0,i.kt)("inlineCode",{parentName:"p"},"sci-e")," model."),(0,i.kt)("p",null,"The model itself is an exported class conforming to the ",(0,i.kt)("inlineCode",{parentName:"p"},"IOutputmodelInterface"),", so the model code can start with the class definition. You can call the class ",(0,i.kt)("inlineCode",{parentName:"p"},"SciEModel"),", and inside the body you can add the method signatures for each of the required methods. This will look as follows:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class SciEModel implements IOutputModelInterface {\n  authParams: object | undefined;\n  name: string | undefined;\n\n  authenticate(authParams: object): void {\n\n  }\n\n  async configure(\n    staticParams: object | undefined = undefined\n  ): Promise<IOutputModelInterface> {\n\n  }\n\n  async execute(inputs: object | object[] | undefined): Promise<any[]> {\n    ;\n  }\n\n  modelIdentifier(): string {\n  }\n}\n")),(0,i.kt)("p",null,"Building your model is a case of adding logic to each of the method bodies. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sci-e")," model is a simple summation of input values. There are no external API calls involved, and no authorization steps. Therefore, the ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticate()")," method can be very simple - nothing needs to be executed in it. You can simply instantiate the class variable ",(0,i.kt)("inlineCode",{parentName:"p"},"this.authParams")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"authParams")," being passed in as input data, which is an empty object. Your ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticate()")," method can look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  authenticate(authParams: object): void {\n    this.authParams = authParams;\n  }\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"configure()")," method simply has to load config data into the class variables. You can assign the method arguments to their associated class variables and return the instance, as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  async configure(\n    staticParams: object | undefined = undefined\n  ): Promise<IOutputModelInterface> {\n    this.staticParams = staticParams;\n\n    if (staticParams === undefined) {\n      throw new Error('Required Parameters not provided');\n    }\n    return this;\n  }\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," methods is where all the actual model logic is implemented. For ",(0,i.kt)("inlineCode",{parentName:"p"},"sci-e")," the model simply has to return the sum of whichever of ",(0,i.kt)("inlineCode",{parentName:"p"},"e-cpu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"e-net")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"e-mem")," are available in the input data."),(0,i.kt)("p",null,"The method below includes some basic inpout value validation, then a ",(0,i.kt)("inlineCode",{parentName:"p"},"map")," over the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),". This code iterates over each ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs")," and passes each element to a ",(0,i.kt)("inlineCode",{parentName:"p"},"calculateEnergy")," method, appending the result to ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs['energy']"),". The array of data, with the new field appended, is returned. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  async execute(inputs: object | object[] | undefined): Promise<any[]> {\n    // basic validation\n    if (inputs === undefined) {\n      throw new Error('Required Parameters not provided');\n    } else if (!Array.isArray(inputs)) {\n      throw new Error('inputs must be an array');\n    }\n\n    return inputs.map((input: KeyValuePair) => {\n      this.configure(this.name!, input);\n      input['energy'] = this.calculateEnergy(input);\n\n      return input;\n    });\n  }\n\n")),(0,i.kt)("p",null,"Now, you can see what happened inside ",(0,i.kt)("inlineCode",{parentName:"p"},"calculateEnergy()"),". First, the presence of at least one of the required input values, ",(0,i.kt)("inlineCode",{parentName:"p"},"energy-cpu"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"energy-memory"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"energy-network")," is confirmed. Then there are some basic checks on the validity of their values. Finally, the sum of the values is returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"private calculateEnergy(input: KeyValuePair) {\nlet e_mem = 0;\nlet e_net = 0;\nlet e_cpu = 0;\n\nif (\n    !('energy-cpu' in input) &&\n    !('energy-memory' in input) &&\n    !('energy-network' in input)\n) {\n    throw new Error(\n    'Required Parameters not provided: at least one of energy-memory, energy-network or energy must be present in input'\n    );\n}\n\n// If the user gives a negative value it will default to zero.\nif ('energy-cpu' in input && input['energy-cpu'] > 0) {\n    e_cpu = input['energy-cpu'];\n}\nif ('energy-memory' in input && input['energy-memory'] > 0) {\n    e_mem = input['energy-memory'];\n}\nif ('energy-network' in input && input['energy-network'] > 0) {\n    e_net = input['energy-network'];\n}\n\nreturn e_cpu + e_net + e_mem;\n}\n")),(0,i.kt)("p",null,"You can replace the logic inside ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," with whatever you need for your specific model implementation. As long as you conform to the interface, meaning youy provide methods with the expected parameters and return types, your model will integrate with IF."),(0,i.kt)("h2",{id:"running-your-model"},"Running your model"),(0,i.kt)("p",null,"You can simply save your model in a public Github repository and pass the path to it in your impl.\nFor example, for a model saved in ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com/my-repo/my-model")," you can do the following:"),(0,i.kt)("p",null,"yarn install your model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add https://github.com/my-repo/my-model\n")),(0,i.kt)("p",null,"Then, in your ",(0,i.kt)("inlineCode",{parentName:"p"},"impl"),", provide the path in the model instantiation. You also need to specify which class the model instantiates. In this case you are using the IOutputModelInterface, so you can specify ",(0,i.kt)("inlineCode",{parentName:"p"},"OutputModel"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: model-demo\ndescription: loads model\ntags: null\ninitialize:\n  models:\n    - name: my-model\n      kind: plugin\n      model: OutputModel\n      path: https://github.com/my-repo/my-model\n      config:\n        allocation: LINEAR\n        verbose: true\n\n...\n")),(0,i.kt)("p",null,"Now, when you run the ",(0,i.kt)("inlineCode",{parentName:"p"},"impl")," using the IF CLI, it will load the model automatically. Run using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx ts-node scripts/impact.ts --impl <path-to-your-impl> --ompl <path-to-save-output>\n")))}m.isMDXComponent=!0}}]);