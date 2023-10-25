"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2119],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(a),g=o,u=c["".concat(l,".").concat(g)]||c[g]||k[g]||r;return a?n.createElement(u,s(s({ref:e},p),{},{components:a})):n.createElement(u,s({ref:e},p))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=g;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},94927:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={id:"staking-apps",title:"Polkadot Staking Apps",sidebar_label:"Staking Apps",description:"Staking Apps in the Polkadot Ecosystem.",keywords:["staking","stake","nominate","nominating","NPoS","staking dashboard"],slug:"../staking-apps"},l=void 0,d={unversionedId:"general/staking-apps",id:"general/staking-apps",title:"Polkadot Staking Apps",description:"Staking Apps in the Polkadot Ecosystem.",source:"@site/../docs/general/staking-apps.md",sourceDirName:"general",slug:"/staking-apps",permalink:"/docs/staking-apps",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/staking-apps.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1698226518,formattedLastUpdatedAt:"Oct 25, 2023",frontMatter:{id:"staking-apps",title:"Polkadot Staking Apps",sidebar_label:"Staking Apps",description:"Staking Apps in the Polkadot Ecosystem.",keywords:["staking","stake","nominate","nominating","NPoS","staking dashboard"],slug:"../staking-apps"},sidebar:"docs",previous:{title:"Wallets and Extensions",permalink:"/docs/wallets-and-extensions"},next:{title:"Parachain Apps",permalink:"/docs/parachains-apps"}},p={},c=[{value:"Polkadot Staking Dashboard",id:"polkadot-staking-dashboard",level:2},{value:"Staking Dashboard Video Tutorials",id:"staking-dashboard-video-tutorials",level:3}],k={toc:c},g="wrapper";function u(t){var e=t.components,a=(0,o.Z)(t,s);return(0,r.kt)(g,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Community Page",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page is open to contributions from the community. Please follow the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki#contributing-to-documentation"},"Wiki contribution guidelines"),"\nand add your protocol native, permissionless, non-custodial NPoS Staking app to this page.")),(0,r.kt)("h2",{id:"polkadot-staking-dashboard"},"Polkadot Staking Dashboard"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},"Polkadot Staking Dashboard")," is a web3 application\ndedicated to native non-custodial ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking")," on the\nPolkadot relay chain. The dashboard allows to\nstake as a solo nominator or as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," member.\nUsers can also create their nomination pools. The dashboard supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/ledger"},"Ledger"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadot-vault"},"Polkadot Vault"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions#subwallet"},"Subwallet"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions#talisman"},"Talisman"),", WalletConnect, Fearless Wallet,\nPolkaGate, and Enkrypt. The dashboard also supports\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-proxies#staking-proxy"},"staking proxies"),"."),(0,r.kt)("p",null,"You can find more information about the Polkadot staking dashboard on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/staking-dashboard"},"dedicated page"),"."),(0,r.kt)("h3",{id:"staking-dashboard-video-tutorials"},"Staking Dashboard Video Tutorials"),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"https://youtu.be/F59N3YKYCRs?feature=shared"},(0,r.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/F59N3YKYCRs/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Nominate")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"https://youtu.be/dDIG7QAApig?feature=shared"},(0,r.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/dDIG7QAApig/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Join a Nomination Pool")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"https://youtu.be/hvXLc4H7rA4?feature=shared"},(0,r.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/hvXLc4H7rA4/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Staking Dashboard Walkthrough"))))),(0,r.kt)("br",null),(0,r.kt)("tr",{class:"cards-container"},(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"https://youtu.be/58pIe8tt2o4?feature=shared"},(0,r.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/58pIe8tt2o4/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"After Staking")))),(0,r.kt)("td",null,(0,r.kt)("a",{class:"guide-link",href:"https://youtu.be/aTFWhwy_Mxg?feature=shared"},(0,r.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/aTFWhwy_Mxg/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,r.kt)("div",{class:"cards-body"},(0,r.kt)("h5",{class:"cards-title"},"Create, Manage & Destroy Pools"))))))}u.isMDXComponent=!0}}]);