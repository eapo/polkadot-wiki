"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4672],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),i=a(86010),o=a(12466),l=a(16550),s=a(91980),u=a(67392),c=a(50012);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,i=(0,l.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(i.location.search);t.set(o,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[o,i])]}function f(e){var t,a,n,i,o=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),b=f[0],k=f[1],g=h({queryString:s,groupId:u}),y=g[0],v=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],i=a[1],[n,(0,r.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=w[0],S=w[1],P=function(){var e=null!=y?y:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){P&&k(P)}),[P]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);k(e),v(e),S(e)}),[v,S,p]),tabValues:p}}var b=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var i,o=c.indexOf(e.currentTarget)-1;a=null!=(i=c[o])?i:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},o,{className:(0,i.Z)("tabs__item",k.tabItem,null==o?void 0:o.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var o=i.find((function(e){return e.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=f(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},24567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(74866),l=a(85162),s=["components"],u={id:"build-guide",title:"Builders Starter's Guide",sidebar_label:"Builders Starter's Guide",description:"Start building with Polkadot/Kusama.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-guide"},c=void 0,p={unversionedId:"build/build-guide",id:"build/build-guide",title:"Builders Starter's Guide",description:"Start building with Polkadot/Kusama.",source:"@site/../docs/build/build-guide.md",sourceDirName:"build",slug:"/build-guide",permalink:"/docs/build-guide",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-guide.md",tags:[],version:"current",lastUpdatedBy:"Nicol\xe1s Biondini",lastUpdatedAt:1695502274,formattedLastUpdatedAt:"Sep 23, 2023",frontMatter:{id:"build-guide",title:"Builders Starter's Guide",sidebar_label:"Builders Starter's Guide",description:"Start building with Polkadot/Kusama.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-guide"},sidebar:"docs",previous:{title:"Builder's Guides",permalink:"/docs/build-index"},next:{title:"Parachain Development",permalink:"/docs/build-pdk"}},d={},m=[{value:"Development Ecosystem Overview",id:"development-ecosystem-overview",level:2},{value:"Polkadot Ecosystem Networks",id:"polkadot-ecosystem-networks",level:3},{value:"Building Parachains",id:"building-parachains",level:2},{value:"Constructing FRAME Runtimes with Substrate",id:"constructing-frame-runtimes-with-substrate",level:3},{value:"Building Parachains with Cumulus",id:"building-parachains-with-cumulus",level:4},{value:"Parachains Benefits",id:"parachains-benefits",level:4},{value:"Building a Pallet",id:"building-a-pallet",level:2},{value:"Developing Smart Contracts",id:"developing-smart-contracts",level:2},{value:"ink! and EVM-based Smart Contracts",id:"ink-and-evm-based-smart-contracts",level:3},{value:"Developing a dApp/uApp",id:"developing-a-dappuapp",level:2}],h={toc:m},f="wrapper";function b(e){var t=e.components,u=(0,r.Z)(e,s);return(0,i.kt)(f,(0,n.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Polkadot is a blockchain protocol with two\ngoals: providing ",(0,i.kt)("strong",{parentName:"p"},"shared security")," among all connected parachains and allowing all connected\nchains to ",(0,i.kt)("strong",{parentName:"p"},"interoperate")," by using ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM"),". With the advent of\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk#parachain-development-kit"},"PDKs")," like\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus"),", the time it\ntakes to develop and launch a new chain has dropped significantly. While before, it would take years\nto launch a new chain, now it may only take weeks or even days, depending on your goals."),(0,i.kt)("p",null,"This guide will walk you through the steps you can take today to get started building your vision\nwith Polkadot. It will explain the difference\nbetween a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," and a smart contract in deciding which best fits\nyour architectural needs."),(0,i.kt)("p",null,"This build guide provides four different tracks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#building-parachains"},"Building Parachains")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#building-a-pallet"},"Building a Pallet")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#developing-smart-contracts"},"Developing Smart Contracts")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#developing-a-dappuapp"},"Developing a dApp"))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Keep in mind that these tracks are merely suggestive, and there are many ways to utilize\nPolkadot, Substrate, and their various\ndevelopmental components. For more inspiration, look at the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-open-source"},"open source projects")," featured here in the wiki!")),(0,i.kt)("p",null,"Before diving into any one of these tracks, it is encouraged to read about\nPolkadot and its networks in order to gain\ncontext about the application you could make."),(0,i.kt)("h2",{id:"development-ecosystem-overview"},"Development Ecosystem Overview"),(0,i.kt)("mermaid",{value:"%%{\n  init: {\n    'theme': 'base',\n    'themeVariables': {\n      'fontFamily': 'Unbounded',\n      'primaryColor': '#E6007A',\n      'fontSize': '18px',\n      'primaryTextColor': '#fff',\n      'primaryBorderColor': '#7C0000',\n      'lineColor': '#140523',\n      'secondaryColor': '#552BBF',\n      'tertiaryColor': '#fff'\n    }\n  }\n}%%\nflowchart TB\n    subgraph PL [\"Protocol Side (Parachains, Smart Contracts)\"]\n        ST[Build a Blockchain]\n        BSC[Develop a Smart Contract] --\x3e SC[Smart Contract Parachain]\n        SC --\x3e ink!\n        SC --\x3e Solidity\n        ST --\x3e R[WASM Runtime - FRAME]\n        R --\x3eParachain[\"Parachain\"]--\x3eSSC[\"Shared Security - Cumulus\"]\n        R --\x3eSoloChain[Solo Chain]--\x3eNSS[\"No Shared Security\"]\n    end\n\n    CS--\x3e| Develop apps| PL\n\n    subgraph CS [\"Client Side (dApps/uApps)\"]\n        UA[UApp - Smoldot]\n        UA --\x3e CAPI\n        UA --\x3e PJS[Polkadot JS]\n        UA --\x3e SubXT\n        SubXT\n    end"}),(0,i.kt)("p",null,"Before diving into the various paths, one can take in developing on\nPolkadot, it's important to realize and know key terms that make up the\nfollowing sections. Even before considering what kind of application you want to build, it's prudent\nto understand what Polkadot ",(0,i.kt)("em",{parentName:"p"},"is")," and how\nrelates to it, and how what each developmental component can do for you within the Polkadot\necosystem."),(0,i.kt)("h3",{id:"polkadot-ecosystem-networks"},"Polkadot Ecosystem Networks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet: ",(0,i.kt)("strong",{parentName:"li"},"Polkadot")),(0,i.kt)("li",{parentName:"ul"},"Canary network: ",(0,i.kt)("strong",{parentName:"li"},"Kusama"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kusama.network/"},"Kusama")," is a value-bearing canary network that gets features before\nPolkadot does. ",(0,i.kt)("em",{parentName:"li"},"Expect Chaos"),"."))),(0,i.kt)("li",{parentName:"ul"},"Official testnets:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Westend")," - Functionality equal to the current Polkadot mainnet, with possible next-generation\ntesting of features from time to time that will eventually migrate onto Polkadot. Perma-testnet\n(is not reset back to genesis block)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Canvas")," - Wasm-based Smart Contract enabled testnet, primarily for ",(0,i.kt)("a",{parentName:"li",href:"https://use.ink/"},(0,i.kt)("inlineCode",{parentName:"a"},"ink!")),"\ndevelopment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rococo")," - Parachains and XCM testnet. Occasionally reset (started over again with a new\ngenesis block).")))),(0,i.kt)("p",null,"Polkadot mainnet has been running since May 2020 and has ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-implementations"},"implementations in various programming languages"),"\nranging from Rust to JavaScript. The leading implementation is built in Rust and uses the Substrate framework."),(0,i.kt)("p",null,"Tooling is rapidly evolving to interact with the network; there are many ways to get started!"),(0,i.kt)("p",null,"But before you jump head-first into the code, you should consider the ",(0,i.kt)("em",{parentName:"p"},"kind")," of decentralized\napplication you want to make and understand the different paradigms available to developers who want\nto build on Polkadot."),(0,i.kt)("h2",{id:"building-parachains"},"Building Parachains"),(0,i.kt)("p",null,"Polkadot is canonically referred to as the\nRelay Chain. It is also considered a ",(0,i.kt)("em",{parentName:"p"},"layer zero")," protocol, as it enables the interoperability and\nshared security of multiple ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains"),", which are ",(0,i.kt)("em",{parentName:"p"},"layer one"),"\nprotocols. Parachains connect to a relay chain using the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"build 1",src:a(41227).Z,width:"1296",height:"907"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Throughout this document, you will encounter the term ",(0,i.kt)("strong",{parentName:"p"},"runtime")," or ",(0,i.kt)("strong",{parentName:"p"},"STF (State Transition\nFunction)"),". Both refer to the same concept, as they define how exactly a particular system, i.e., a\nblockchain, should deal with state changes externally and internally. Both of these terms are used\nextensively in Polkadot, and by association,\nSubstrate contexts.")),(0,i.kt)("p",null,"Parachains open possibilities to construct complex ",(0,i.kt)("strong",{parentName:"p"},"runtime"),", or ",(0,i.kt)("strong",{parentName:"p"},"STF")," (state transition\nfunction) the logic that would be too expensive to execute with smart contracts. However, unlike\nsmart contracts, parachains lack a mandatory gas metering system entirely and could potentially be\nvulnerable to bugs that cause infinite loops (something that is prevented by design in smart\ncontracts). This vulnerability is mitigated by the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/build/tx-weights-fees/"},"weight system")," that is implemented in Substrate\n-- although it places more of a burden on the developer of the parachain to perform properly\nbenchmarks."),(0,i.kt)("admonition",{title:"What is a parathread?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},'Parathreads, or "on-demand parachains," are like parachains and enable the developer to have\nlower-level control of the logic of their application. The main difference between the two is\neconomical since parathreads will be much less expensive to secure than a parachain and is a\n"pay-as-you-go" model. The lower costs of parathreads are because parathreads will only produce a\nblock when needed, unlike parachains, which have secured a slot to produce a block at every block of\nthe Relay Chain. When building a parathread, you will use the same tools (like PDKs) and get all the\nbenefits of building a parachain without the cost drawback.')),(0,i.kt)("h3",{id:"constructing-frame-runtimes-with-substrate"},"Constructing FRAME Runtimes with Substrate"),(0,i.kt)("p",null,"Polkadot is built using the ",(0,i.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate")," framework.\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.io/"},"Substrate")," is a highly configurable and dynamic framework for building\nblockchains. At a lower level, Substrate provides a set of tools and libraries ranging from\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/rust-api/"},"block production, finality gadgets, to peer-to-peer networking"),".\nBoth Polkadot and Kusama, as well as most parachains, are built using Substrate."),(0,i.kt)("p",null,"In essence, Substrate can break down a blockchain's development process by providing crucial\nbuilding blocks of functionality, removing the need for re-engineering complex mechanisms that\nusually involved when developing a blockchain."),(0,i.kt)("p",null,"Substrate can be used as a basis for a parachain to connect to a relay chain like Polkadot or\nKusama, or even as a basis to form a conventional layer one solo chain."),(0,i.kt)("p",null,"Currently, the most streamlined way of utilizing Substrate is\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/learn/runtime-development/#frame"},"FRAME"),", which conveniently allows for a\nruntime/STF to be generated from a set of modules (called\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"pallets"),").\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/learn/architecture/#runtime"},"Runtimes")," in Substrate are built using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"WebAssembly")," (Wasm), and represent the state transition function for a\nnetwork. FRAME allows for a collection of business logic-oriented modules, called\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"pallets"),", to construct a runtime/STF and define\nhow exactly the blockchain is supposed to behave. Ranging from\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_identity/index.html"},"identity")," to\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html"},"smart contracts"),",\npallets can be quite extensive in providing on-chain functionality."),(0,i.kt)("p",null,"Even though FRAME is heavily used, it is not the only way to create a valid runtime/STF using\nSubstrate. Substrate can be used to create new paradigms and abstractions that build on the concept\nof web3."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Although most parachains utilize FRAME and Substrate to build runtime/STFs for connecting to the\nrelay chain, it is not contingent. Building a parachain using other tools is possible, so long as\nthey follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachains Protocol"),"."),(0,i.kt)("p",{parentName:"admonition"},"As a general rule of thumb, Substrate provides the means for this to become possible through\ncomparably minimal effort.")),(0,i.kt)("h4",{id:"building-parachains-with-cumulus"},"Building Parachains with Cumulus"),(0,i.kt)("p",null,"Diving further into building parachains, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus"},"Cumulus")," is another\nset of tools that aid in building a parachain-ready blockchain for Polkadot or Kusama. Cumulus\nutilizes FRAME and Substrate to create an easy way to build your first parachain. It ensures the\nchain follows the Parachain Protocol."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("em",{parentName:"p"},"Cumulus clouds are shaped sort of like dots; together, they form a system that is intricate,\nbeautiful, and functional."))),(0,i.kt)("p",null,"For most developers, the best place to start is to get familiar with Substrate independently,\nfollowed by FRAME, with Cumulus as the final step to understanding the entire parachain building\nprocess. This way, one can view how various paradigms are applied and make decisions on integrating\nor utilizing Substrate for their particular use case."),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk"},"parachain development guide")," for how to get started on building\na parachain or parathread."),(0,i.kt)("h4",{id:"parachains-benefits"},"Parachains Benefits"),(0,i.kt)("p",null,"Parachains contain their own runtime/STF logic and benefit from the shared security and the\ncross-chain messaging provided by the Polkadot relay chain. Parachains\npermit high flexibility and customization but require more effort to create and maintain over time.\nA production-grade parachain is typically more involved to create due to the complexity involved in\nblockchain networks' technical and economic aspects."),(0,i.kt)("p",null,"Parachains grant the creators more space to build the monetary system and other chain aspects from\nthe ground up. They will allow for a more concise and efficient execution of complex logic than a\nsmart contract platform could offer. Parachains also offer more flexibility in the form of\ngovernance and can perform complete upgrades in a less controversial way than the current process of\nhard forks."),(0,i.kt)("p",null,"Some examples of features you can have on a parachain or parathread:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom fee structure (for example, pay a flat transaction fee or pay per byte)."),(0,i.kt)("li",{parentName:"ul"},"Shared security and finalization via the relay chain (Polkadot or Kusama)."),(0,i.kt)("li",{parentName:"ul"},"Custom monetary policy for the native token and local economy."),(0,i.kt)("li",{parentName:"ul"},"Treasury to be funded through transitions in your state function."),(0,i.kt)("li",{parentName:"ul"},"A governance mechanism that could manage a DAO that is responsible for allocating your on-chain\ntreasury.")),(0,i.kt)("h2",{id:"building-a-pallet"},"Building a Pallet"),(0,i.kt)("p",null,"While parachains are highly customizable, they are often complex to develop. If you wish to get\nfamiliar with FRAME and Substrate, a good place to start is by building a pallet in a development\nenvironment. A pallet is a fully customizable module that allows you to implement layer one logic\nwith relatively minimal development time on a basic level while still allowing the possibility of\nbuilding advanced functionality into your custom chain."),(0,i.kt)("p",null,"To learn how to build a pallet, follow the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/build-application-logic/"},"Substrate documentation"),"."),(0,i.kt)("h2",{id:"developing-smart-contracts"},"Developing Smart Contracts"),(0,i.kt)("p",null,"Smart contracts are another option that enables for an often simpler developer experience. Below is\na quick comparison of how building a smart contract compares to building a parachain:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},"Parachains"),(0,i.kt)("th",{parentName:"tr",align:null},"Smart Contracts"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Speed of Development"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ease of Deployment"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Complexity of logic"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Maintenance overhead"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Level of customization"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Strict resource control"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Native chain features"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scalability"),(0,i.kt)("td",{parentName:"tr",align:null},"+"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("admonition",{title:"What's the difference between a smart contract and a pallet?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you recall, a parachain comprises a runtime/STF usually built on Substrate. These runtime/STFs\noften utilize FRAME, which is subsequently made of pallets. Pallets are part of a Substrate\nruntime/STF, whereas smart contracts are a product of a pallet (see:\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_contracts/index.html"},"pallet_contracts"),").\nPallets require more engineering and thought, as they can directly affect the chain's state.")),(0,i.kt)("h3",{id:"ink-and-evm-based-smart-contracts"},"ink! and EVM-based Smart Contracts"),(0,i.kt)("p",null,"At a high level, a ",(0,i.kt)("em",{parentName:"p"},"smart contract")," is simply some code that exists at an address on a chain and is\ncallable by external actors. Whether it's\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/integrate-with-tools/evm-integration/"},"EVM-based"),", or written\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://use.ink/"},"ink!"),", smart contracts sandboxed, executable programs that live on-chain."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Polkadot relay chain does not support smart contracts. However, several parachains do. See the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts#smart-contract-environments-are-still-maturing"},"smart contracts guide")," for\nmore information about the environments provided.")),(0,i.kt)("p",null,"A popular choice for smart contracts is ",(0,i.kt)("a",{parentName:"p",href:"https://use.ink/"},"ink!"),". Other parachains that offer\nEVM-based contracts written in Solidity alongside ink!\n",(0,i.kt)("a",{parentName:"p",href:"./build-smart-contracts#parachains"},"are also available"),"."),(0,i.kt)("p",null,"Because smart contracts exist on a single chain at a time, they can have smooth interoperability\nwith other smart contracts on the same chain. However, they will always be constrained and limited\nby the inherent characteristics of their host chain."),(0,i.kt)("p",null,"As a developer, you will need to consider the storage and complexity of your smart contract to\nensure that gas usage stays within reasonable bounds. Consider using the listed options on the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-storage"},"decentralized storage")," page to keep the data and submit only the content address\non the chain."),(0,i.kt)("admonition",{title:"Building a smart contract",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts"},"smart contracts guide")," for how to get started on building\na smart contract.")),(0,i.kt)("h2",{id:"developing-a-dappuapp"},"Developing a dApp/uApp"),(0,i.kt)("p",null,"If one aims to develop a ",(0,i.kt)("strong",{parentName:"p"},"dApp")," (Decentralized App) or ",(0,i.kt)("strong",{parentName:"p"},"uApp")," (Unstoppable App), the Polkadot\necosystem contains various SDKs to tap into the relay chain and parachains."),(0,i.kt)("p",null,"For front-end applications, several options exist for interfacing with Substrate-based chains\n(parachains, relay chains, etc.) and smart contracts. These often will interact with the RPC of a\nSubstrate node:"),(0,i.kt)(o.Z,{groupId:"clients",values:[{label:"Polkadot.js",value:"pjs"},{label:"Subxt",value:"subxt"},{label:"CAPI",value:"capi"},{label:"React Hooks for ink!",value:"ink"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"pjs",mdxType:"TabItem"}," Promise and RxJS APIs around Polkadot and Substrate based chains via RPC calls. It is dynamically generated based on what the Substrate runtime provides in terms of metadata. Full documentation & examples available. "),(0,i.kt)(l.Z,{value:"capi",mdxType:"TabItem"}," Capi is a framework (based on Typescript) for crafting interactions with Substrate chains. It consists of a development server and fluent API, which facilitates multichain interactions without compromising either performance or ease of use. "),(0,i.kt)(l.Z,{value:"subxt",mdxType:"TabItem"}," Submit extrinsics (transactions) to a Substrate node via RPC using Rust. Also referred to as Rust Parity. "),(0,i.kt)(l.Z,{value:"ink",mdxType:"TabItem"}," React hooks for ink! smart contracts ")),(0,i.kt)("p",null,"For a full list of tools please take a look here: ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-open-source"},"Tools, APIs and Languages")))}b.isMDXComponent=!0},41227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-1-706b8858ef80594b1c9d2cd9c4ce0421.png"}}]);