"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1529],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var s=n.createContext({}),p=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=p(a),d=l,h=c["".concat(s,".").concat(d)]||c[d]||k[d]||o;return a?n.createElement(h,r(r({ref:e},u),{},{components:a})):n.createElement(h,r({ref:e},u))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64204:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),r=["components"],i={id:"learn-DOT",title:"DOT",sidebar_label:"DOT",description:"Learn about the tokenomics of the Polkadot ecosystem.",keywords:["token","DOT","what are the uses of DOT","KSM","faucet"],slug:"../learn-DOT"},s=void 0,p={unversionedId:"learn/learn-DOT",id:"learn/learn-DOT",title:"DOT",description:"Learn about the tokenomics of the Polkadot ecosystem.",source:"@site/../docs/learn/learn-DOT.md",sourceDirName:"learn",slug:"/learn-DOT",permalink:"/docs/learn-DOT",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-DOT.md",tags:[],version:"current",lastUpdatedBy:"Yuri Volkov",lastUpdatedAt:1687247840,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{id:"learn-DOT",title:"DOT",sidebar_label:"DOT",description:"Learn about the tokenomics of the Polkadot ecosystem.",keywords:["token","DOT","what are the uses of DOT","KSM","faucet"],slug:"../learn-DOT"},sidebar:"docs",previous:{title:"Assets",permalink:"/docs/learn-assets"},next:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"}},u={},c=[{value:"What is DOT?",id:"what-is-dot",level:2},{value:"The Planck Unit",id:"the-planck-unit",level:3},{value:"Polkadot",id:"polkadot",level:3},{value:"Kusama",id:"kusama",level:3},{value:"What are the uses of DOT?",id:"what-are-the-uses-of-dot",level:2},{value:"DOT for Governance",id:"dot-for-governance",level:3},{value:"DOT for Consensus",id:"dot-for-consensus",level:3},{value:"DOT for Parachain Slot Acquisition",id:"dot-for-parachain-slot-acquisition",level:3},{value:"Calculating When Vesting DOT Will Be Available",id:"calculating-when-vesting-dot-will-be-available",level:4},{value:"Obtaining Testnet Tokens",id:"obtaining-testnet-tokens",level:2},{value:"Getting Tokens on the Westend Testnet",id:"getting-tokens-on-the-westend-testnet",level:3},{value:"Getting Tokens on the Rococo Testnet",id:"getting-tokens-on-the-rococo-testnet",level:3},{value:"Getting Tokens on the Wococo Testnet",id:"getting-tokens-on-the-wococo-testnet",level:3},{value:"Faucets support",id:"faucets-support",level:3},{value:"Kusama Tokens",id:"kusama-tokens",level:2},{value:"Polkadot Mainnet DOT",id:"polkadot-mainnet-dot",level:2}],k={toc:c},d="wrapper";function h(t){var e=t.components,a=(0,l.Z)(t,r);return(0,o.kt)(d,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-dot"},"What is DOT?"),(0,o.kt)("p",null,"DOT is the native token of the Polkadot network in a similar way that BTC is the native token of\nBitcoin or Ether is the native token of the Ethereum blockchain."),(0,o.kt)("h3",{id:"the-planck-unit"},"The Planck Unit"),(0,o.kt)("p",null,"The smallest unit for the account balance on Substrate based blockchains (Polkadot, Kusama, etc.) is\nPlanck (a reference to ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Planck_length"},"Planck Length"),", the smallest\npossible distance in the physical Universe). You can compare DOT's Planck to BTC's Satoshi or ETH's\nWei. Polkadot's native token DOT equals to 10",(0,o.kt)("sup",null,"10")," Planck and Kusama's native token KSM\nequals to 10",(0,o.kt)("sup",null,"12")," Planck."),(0,o.kt)("h3",{id:"polkadot"},"Polkadot"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Unit"),(0,o.kt)("th",{parentName:"tr",align:null},"Decimal Places"),(0,o.kt)("th",{parentName:"tr",align:null},"Conversion to Planck"),(0,o.kt)("th",{parentName:"tr",align:null},"Conversion to DOT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"1 Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.0000000001 DOT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microdot (uDOT)"),(0,o.kt)("td",{parentName:"tr",align:null},"4"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"4")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.0000010000 DOT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Millidot (mDOT)"),(0,o.kt)("td",{parentName:"tr",align:null},"7"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"7")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.0010000000 DOT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dot (DOT)"),(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"10")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"1.0000000000 DOT")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Million (MDOT)"),(0,o.kt)("td",{parentName:"tr",align:null},"16"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"16")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"1,000,000.00 DOT")))),(0,o.kt)("admonition",{title:"DOT was redenominated at block #1_248_328",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"DOT was originally equal to 10",(0,o.kt)("sup",null,"12"),' Planck just like Kusama (which is referred to as "DOT\n(old)"), but went through a process of ',(0,o.kt)("a",{parentName:"p",href:"/docs/learn-redenomination"},"redenomination")," which increased\nDOT's supply by 100x. As a consequence, 1 DOT now equals to 10",(0,o.kt)("sup",null,"10")," Planck.")),(0,o.kt)("h3",{id:"kusama"},"Kusama"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Unit"),(0,o.kt)("th",{parentName:"tr",align:null},"Decimal Places"),(0,o.kt)("th",{parentName:"tr",align:null},"Conversion to Planck"),(0,o.kt)("th",{parentName:"tr",align:null},"Conversion to KSM"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"1 Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.000000000001 KSM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Point"),(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"3")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.000000001000 KSM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MicroKSM (uKSM)"),(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"6")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.000001000000 KSM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MilliKSM (mKSM)"),(0,o.kt)("td",{parentName:"tr",align:null},"9"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"9")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.001000000000 KSM")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"KSM"),(0,o.kt)("td",{parentName:"tr",align:null},"12"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"12")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"1.000000000000 KSM")))),(0,o.kt)("h2",{id:"what-are-the-uses-of-dot"},"What are the uses of DOT?"),(0,o.kt)("p",null,"DOT serves three key functions in Polkadot:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to be used for governance of the network,"),(0,o.kt)("li",{parentName:"ul"},"to be staked for the operation of the network,"),(0,o.kt)("li",{parentName:"ul"},"to be bonded to connect a chain to Polkadot as a parachain.")),(0,o.kt)("p",null,"DOT can also serve ancillary functions by being a transferrable token. For example, DOT stored in\nthe Treasury can be sent to teams working on relevant projects for the Polkadot network."),(0,o.kt)("admonition",{title:"Explainer video on token utility",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"These concepts have been further explained in the video\n",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=POfFgrMfkTo&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&index=7"},"Usage of DOT and KSM on Polkadot and Kusama"),".")),(0,o.kt)("h3",{id:"dot-for-governance"},"DOT for Governance"),(0,o.kt)("p",null,"The first function of DOT is to entitle holders to control the governance of the platform. Some\nfunctions that are included under the governance mechanism include determining the fees of the\nnetwork, the addition or removal of parachains, and exceptional events such as upgrades and fixes to\nthe Polkadot platform."),(0,o.kt)("p",null,"Polkadot will enable any holder of DOT to participate in governance. For details on how holders can\nparticipate in governance, as well as their rights and responsibilities, see the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-opengov"},"governance page"),"."),(0,o.kt)("h3",{id:"dot-for-consensus"},"DOT for Consensus"),(0,o.kt)("p",null,"DOT will be used to facilitate the consensus mechanism that underpins Polkadot. For the platform to\nfunction and allow for valid transactions to be carried out across parachains, Polkadot will rely on\nholders of DOT to play active roles. Participants will put their DOT at risk (via staking) to\nperform these functions. The staking of DOT acts as a disincentive for malicious participants who\nwill be punished by the network by getting their DOT slashed. The DOT required to participate in the\nnetwork will vary depending on the activity that is being performed, the duration the DOT will be\nstaked for, and the total number of DOT staked. For more information about staking on Polkadot visit\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"the dedicated staking page"),"."),(0,o.kt)("h3",{id:"dot-for-parachain-slot-acquisition"},"DOT for Parachain Slot Acquisition"),(0,o.kt)("p",null,"DOT will have the ability to be locked for a duration in order to secure a parachain slot in the\nnetwork. The DOT will be reserved during the slot lease and will be released back to the account\nthat reserved them after the duration of the lease has elapsed and the parachain is removed. You can\nlearn more about this aspect by reading about the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auctions")," that govern parachain\nslots."),(0,o.kt)("h4",{id:"calculating-when-vesting-dot-will-be-available"},"Calculating When Vesting DOT Will Be Available"),(0,o.kt)("p",null,"Generally, you should be able to see from the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts"),' by\nlooking at your accounts and seeing when the vesting will finish. However, some DOT vest with\n"cliffs" - a single block where all the DOT are released, instead of vesting over time. In this\ncase, you will have to query the chain state directly to see when they will be available (since\ntechnically, the vesting has not yet started - all of the vesting will occur in a single block in\nthe future).'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to the\n",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate"},"Chain State")," page on\nPolkadot-JS."),(0,o.kt)("li",{parentName:"ol"},"Query chain state for ",(0,o.kt)("inlineCode",{parentName:"li"},"vesting.vesting(ACCOUNT_ID)")),(0,o.kt)("li",{parentName:"ol"},"Note the ",(0,o.kt)("inlineCode",{parentName:"li"},"startingBlock")," where the unlock starts, and how much DOT is unlocked per block\n(",(0,o.kt)("inlineCode",{parentName:"li"},"perBlock"),")."),(0,o.kt)("li",{parentName:"ol"},'You will have to calculate the result into \u201chuman time". To do this, remember that there are\napproximately 14\u2019400 blocks per day, and you can see what the latest block is shown on the\n',(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/explorer"},"Explorer")," page.")),(0,o.kt)("h2",{id:"obtaining-testnet-tokens"},"Obtaining Testnet Tokens"),(0,o.kt)("p",null,"DOT are required to make transactions on the Polkadot network. Tokens on Polkadot's Testnets like\nWestend and Rococo do not have any value besides allowing you to experiment with the features on the\nnetwork."),(0,o.kt)("h3",{id:"getting-tokens-on-the-westend-testnet"},"Getting Tokens on the Westend Testnet"),(0,o.kt)("p",null,"Polkadot's testnet is called ",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain-networks#westend-test-network"},"Westend")," and\nyou can obtain its native tokens (called Westies!) by posting ",(0,o.kt)("inlineCode",{parentName:"p"},"!drip <WESTEND_ADDRESS>")," in the\nMatrix chatroom ",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#westend_faucet:matrix.org"},"#westend_faucet:matrix.org"),". Your\naccount will be credited with 1 WND by default. You can also specify to get more tokens by\n",(0,o.kt)("inlineCode",{parentName:"p"},"!drip <WESTEND_ADDRESS> X"),", where X is the number of tokens."),(0,o.kt)("p",null,"Another way is to use our web-based\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-testnet-faucet/westend"},"Westend faucet"),"."),(0,o.kt)("p",null,"You can also earn WNDs as rewards by ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-validator"},"becoming a validator")," on Westend network.\nWatch the video below on how to get started on Westend."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0ji0ccZyb3k"},(0,o.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/0ji0ccZyb3k/0.jpg",alt:"Testing Polkadot features on Westend"}))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Unit"),(0,o.kt)("th",{parentName:"tr",align:null},"Decimal Places"),(0,o.kt)("th",{parentName:"tr",align:null},"Conversion to Planck"),(0,o.kt)("th",{parentName:"tr",align:null},"Conversion to WND"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0"),(0,o.kt)("td",{parentName:"tr",align:null},"1 Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.000000000001 WND")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Point"),(0,o.kt)("td",{parentName:"tr",align:null},"3"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"3")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.000000001000 WND")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MicroWND (uWND)"),(0,o.kt)("td",{parentName:"tr",align:null},"6"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"6")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.000001000000 WND")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MilliWND (mWND)"),(0,o.kt)("td",{parentName:"tr",align:null},"9"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"9")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"0.001000000000 WND")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"WND"),(0,o.kt)("td",{parentName:"tr",align:null},"12"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"12")," Planck"),(0,o.kt)("td",{parentName:"tr",align:null},"1.000000000000 WND")))),(0,o.kt)("h3",{id:"getting-tokens-on-the-rococo-testnet"},"Getting Tokens on the Rococo Testnet"),(0,o.kt)("p",null,"Rococo is a parachain testnet. Tokens are given directly to teams working on parachains or exploring\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"cross consensus")," message-passing aspects of this testnet. General users can\nobtain ROC by posting ",(0,o.kt)("inlineCode",{parentName:"p"},"!drip <ROCOCO_ADDRESS>")," in the Matrix chatroom\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#rococo-faucet:matrix.org"},"#rococo-faucet:matrix.org")," or through the web-based\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-testnet-faucet/"},"Rococo faucet"),". Learn more about Rococo on\nits ",(0,o.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"dedicated wiki section"),"."),(0,o.kt)("h3",{id:"getting-tokens-on-the-wococo-testnet"},"Getting Tokens on the Wococo Testnet"),(0,o.kt)("p",null,"Wococo is a bridge testnet. General users can obtain WOOK by posting ",(0,o.kt)("inlineCode",{parentName:"p"},"!drip <WOCOCO_ADDRESS>")," in the\nMatrix chatroom ",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#wococo-faucet:matrix.org"},"#wococo-faucet:matrix.org"),"."),(0,o.kt)("h3",{id:"faucets-support"},"Faucets support"),(0,o.kt)("p",null,"If you require help with using faucets, or wish to report an issue, there is a support chat\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#faucets-support:matrix.org"},"#faucets-support:matrix.org"),", or you can\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-testnet-faucet/issues/new/choose"},"create an issue")," directly\nin the faucets repo"),(0,o.kt)("h2",{id:"kusama-tokens"},"Kusama Tokens"),(0,o.kt)("p",null,"Unlike testnet DOT, Kusama tokens are not freely given away. Kusama tokens are available via the\n",(0,o.kt)("a",{parentName:"p",href:"https://claim.kusama.network/"},"claims process")," (if you had DOT at the time of Kusama genesis) or\nthrough the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"Treasury"),". Alternatively, they can be obtained on the open market."),(0,o.kt)("h2",{id:"polkadot-mainnet-dot"},"Polkadot Mainnet DOT"),(0,o.kt)("p",null,"Polkadot Mainnet DOT are not freely given away. If you purchased DOT in the original 2017 offering,\nyou may claim them via the ",(0,o.kt)("a",{parentName:"p",href:"https://claims.polkadot.network/"},"Polkadot claims process"),".\nAlternatively, they are available on the open market."))}h.isMDXComponent=!0}}]);