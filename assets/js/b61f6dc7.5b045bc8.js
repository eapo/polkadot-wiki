"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1372],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=o,f=d["".concat(l,".").concat(u)]||d[u]||h[u]||n;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],s={id:"research",title:"Research Pages",sidebar_label:"Research Pages",description:"Keep up-to-date with the latest research developments related to Polkadot.",keywords:["research","development"],slug:"../research"},l=void 0,c={unversionedId:"general/research",id:"general/research",title:"Research Pages",description:"Keep up-to-date with the latest research developments related to Polkadot.",source:"@site/../docs/general/research.md",sourceDirName:"general",slug:"/research",permalink:"/docs/research",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/research.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1671650096,formattedLastUpdatedAt:"Dec 21, 2022",frontMatter:{id:"research",title:"Research Pages",sidebar_label:"Research Pages",description:"Keep up-to-date with the latest research developments related to Polkadot.",keywords:["research","development"],slug:"../research"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Wallets",permalink:"/docs/wallets"}},p={},d=[{value:"Research Papers",id:"research-papers",level:2},{value:"Research Blogs",id:"research-blogs",level:2}],h={toc:d};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Polkadot ",(0,n.kt)("a",{parentName:"p",href:"https://w3f-research.readthedocs.io/en/latest/Publications.html"},"research pages")," are\nedited directly by the researchers at W3F and contain papers, articles and documents that are\nsources for the information on the wiki."),(0,n.kt)("p",null,"The following papers and articles may be of special interest for those interested in exploring\nPolkadot from a research or academic perspective."),(0,n.kt)("h2",{id:"research-papers"},"Research Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2022/1611"},"Efficient Aggregatable BLS Signatures with Chaum-Pedersen Proofs")," -\ndescribes our improvements regarding efficient verification for BLS signatures for both individual\nas well as aggregated signatures."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/apk-proofs/blob/9f3ed95d4dba4a4ea4b0dca3a57f4b7495271346/Light%20Client.pdf"},"Accountable Light Client Systems for PoS Blockchains")," -\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/w3f/apk-proofs"},(0,n.kt)("inlineCode",{parentName:"a"},"Implemented"))," as an efficient method to aggregate BLS\nsignatures and BLS public keys which in turn is used to build light client systems that are the\ncore cryptographic primitive for secure proof-of-stake blockchain bridges. In turn, the efficient\nBLS aggregation can be securely proven to a light client verifier using a custom designed SNARK.\nAuthors: Oana Ciobotaru, Fatemeh Shirazi, Alistair Stewart, Sergey Vasilyev"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2005.13456.pdf"},"Overview of Polkadot and its Design Considerations")," - A\nbroad overview of the design of Polkadot. Authors: Jeff Burdges, Alfonso Cevallos, Peter Czaban,\nRob Habermeier, Syed Hosseini, Fabio Lama, Handan K\u0131l\u0131n\xe7 Alper, Ximin Luo, Fatemeh Shirazi,\nAlistair Stewart, Gavin Wood"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/NPoS/index.html"},"Intro to Nominated Proof of Stake")," -\nA description of the NPoS scheme which selects which validators are allowed to participate in the\nconsensus protocol of Polkadot. Author: Alfonso Cevallos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.01560"},"GRANDPA: A Byzantine Finality Gadget")," - GHOST-based Recursive\nAncestor Deriving Prefix Agreement, Polkadot's finality gadget. Authors: Alistair Stewart and\nLefteris Kokoris Kogias"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.12990"},"A Verifiably Secure and Proportional Committee Election Rule")," -\nValidator Election in Nominated Proof of Stake. Authors: Alfonso Cevallos and Alistair Stewart"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/1348.pdf"},"Network Time with a Consensus on Clock")," - Consensus on\nClock in Universally Composable Timing. Author: Handan K\u0131l\u0131n\xe7 Alper"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/638"},"Delay Encryption")," - Delay Encryption can roughly be described\nas \u201cidentity based encryption with slow derived private key issuance\u201d. Authors: Jeff Burdges and\nLuca de Feo")),(0,n.kt)("h2",{id:"research-blogs"},"Research Blogs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.network/an-updated-overview-of-polkadot/"},"An Updated Overview of Polkadot")," \u2013\nGives a summary of the paper \u201cOverview of Polkadot and its Design Considerations\u201d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot.network/polkadot-research-update/"},"Polkadot Research Update")," \u2013 Gives a summary\nof the papers on Validator Election in Nominated Proof of Stake, Network Time with a Consensus on\nClock, and Byzantine Finality Gadgets."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/polkadots-messaging-scheme-b1ec560908b7"},"Polkadot\u2019s Messaging Scheme"),"\n\u2013 Gives an outline of Cross-Chain Message Passing (XCMP). Authors: Fatemeh Shirazi, Logan Saether,\nAlistair Stewart, Rob Habermeier, Gavin Wood"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/how-nominated-proof-of-stake-will-work-in-polkadot-377d70c6bd43"},"How Nominated Proof of Stake Will Work in Polkadot"),"\n\u2013 Gives an outline of Nominated Proof of Stake in Polkadot. Author: Alfonzo Cevallos"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/messaging-protocol-workshop-outcomes-7a827d02a81a"},"Messaging Protocol Workshop Outcomes"),"\n\u2013 An initiative to design and implement a privacy-preserving communication system for\ndecentralized applications.")))}u.isMDXComponent=!0}}]);