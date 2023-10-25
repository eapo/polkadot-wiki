(self.webpackChunk=self.webpackChunk||[]).push([[7654],{47940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(74165),o=n(15861),i=n(67294),r=n(87152),s=n(17145),l=n(67425);function d(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,a.Z)().mark((function e(t,n,o){var i,l,d,p,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new r.U(i),e.next=21,s.G.create({provider:d});case 21:p=e.sent,(c=n.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,n=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,p=(0,i.useState)(""),u=p[0],m=p[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(r.toString(),l,t,m):m(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,m);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(o,l,t,m):m(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),u}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,a){var o=void 0;if("polkadot"===n||"statemint"===n)o=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(o)+" "+t[n].symbol).toString())},Precise:function(e,n,a){a(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},40569:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(47940),s=["components"],l={id:"learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",sidebar_label:"OpenGov",description:"Advanced How-to Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel"],slug:"../learn-guides-polkadot-opengov"},d=void 0,p={unversionedId:"learn/learn-guides-polkadot-opengov",id:"learn/learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",description:"Advanced How-to Guides about Polkadot OpenGov.",source:"@site/../docs/learn/learn-guides-polkadot-opengov.md",sourceDirName:"learn",slug:"/learn-guides-polkadot-opengov",permalink:"/docs/learn-guides-polkadot-opengov",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-guides-polkadot-opengov.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1697790575,formattedLastUpdatedAt:"Oct 20, 2023",frontMatter:{id:"learn-guides-polkadot-opengov",title:"Polkadot OpenGov How-to Guides",sidebar_label:"OpenGov",description:"Advanced How-to Guides about Polkadot OpenGov.",keywords:["opengov","polkadot opengov","referenda","cancel"],slug:"../learn-guides-polkadot-opengov"},sidebar:"docs",previous:{title:"Nomination Pools",permalink:"/docs/learn-guides-staking-pools"},next:{title:"Treasury",permalink:"/docs/learn-guides-treasury"}},c={},u=[{value:"Delegations",id:"delegations",level:2},{value:"Delegate Votes",id:"delegate-votes",level:3},{value:"Undelegate Votes",id:"undelegate-votes",level:3},{value:"Unlock Expired ConvictionVoting Locks",id:"unlock-expired-convictionvoting-locks",level:3},{value:"Modify your Delegations",id:"modify-your-delegations",level:3},{value:"Claiming OpenGov Deposits",id:"claiming-opengov-deposits",level:2},{value:"Claiming the Preimage and Decision Deposits",id:"claiming-the-preimage-and-decision-deposits",level:3},{value:"Claiming the Referendum Submission Deposit",id:"claiming-the-referendum-submission-deposit",level:3},{value:"Cancel or Kill a Referendum",id:"cancel-or-kill-a-referendum",level:2}],m={toc:u},g="wrapper";function k(e){var t=e.components,l=(0,o.Z)(e,s);return(0,i.kt)(g,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page is for advanced users of Polkadot OpenGov. If you would learn about and participate in\nOpenGov, please navigate to the page on\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-polkadot-opengov"},"participating in Polkadot Opengov.")),(0,i.kt)("h2",{id:"delegations"},"Delegations"),(0,i.kt)("h3",{id:"delegate-votes"},"Delegate Votes"),(0,i.kt)("p",null,'You can start delegating your votes by clicking the "Delegate" button on\n',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-start",src:n(90691).Z,width:"1055",height:"497"})),(0,i.kt)("p",null,"If it is the first time you delegate or vote, there will be a banner message. You can delegate on a\nsingle track or all the tracks. You have an option to specify the number of votes (i.e., the number\nof tokens) and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#voluntary-locking"},"conviction multiplier"),'. After\nclicking "Next", you will need to specify the account to delegate your votes to, and after clicking\n"Delegate" and "Sign and Submit" your delegations will appear for each track (see below).'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-allTracks",src:n(62428).Z,width:"2116",height:"1438"})),(0,i.kt)("p",null,"Note that if you want to delegate just a few tracks, you have two options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Repeat the process using the "Delegate" button multiple times'),(0,i.kt)("li",{parentName:"ul"},"Issue a batch call with multiple ",(0,i.kt)("inlineCode",{parentName:"li"},"convictionVoting.delegate")," extrinsics under\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-delegate",src:n(54853).Z,width:"2694",height:"1104"})),(0,i.kt)("p",null,'By clicking on "Add item" you can add new extrinsics for multiple tracks.'),(0,i.kt)("h3",{id:"undelegate-votes"},"Undelegate Votes"),(0,i.kt)("p",null,'The "Delegate" button on ',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda")," is only\nfor delegating votes. You cannot undelegate or modify your delegations. If you wish to undelegate,\nyou will need to go to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics")," and\nsubmit a ",(0,i.kt)("inlineCode",{parentName:"p"},"convictionVoting.undelegate")," extrinsic, specifying the track you wish to undelegate."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-undelegate",src:n(9459).Z,width:"2708",height:"632"})),(0,i.kt)("p",null,'Undelegated tracks will show up as "0 votes" on the Delegate tab.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-undelegate",src:n(93996).Z,width:"2128",height:"1432"})),(0,i.kt)("p",null,"After you undelegated, the conviction lock will start the countdown, and your funds will be\navailable for unlocking after the countdown ends."),(0,i.kt)("h3",{id:"unlock-expired-convictionvoting-locks"},"Unlock Expired ConvictionVoting Locks"),(0,i.kt)("p",null,"After the conviction lock expires, you can go to\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics")," and submit a\n",(0,i.kt)("inlineCode",{parentName:"p"},"convictionVoting.unlock")," extrinsic to unlock funds for a specific track. Note that if you delegated\nmultiple tracks, the funds will be unlocked after undelegating all the tracks."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"js-delegation-unlock",src:n(52692).Z,width:"2704",height:"872"})),(0,i.kt)("h3",{id:"modify-your-delegations"},"Modify your Delegations"),(0,i.kt)("p",null,'The "Delegate" button on ',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda")," is only\nfor delegating votes. You cannot undelegate or modify your delegations. If you wish to update the\ndelegated account, the conviction, and the number of votes you will need to go to\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics"),", ",(0,i.kt)("a",{parentName:"p",href:"#undelegate-votes"},"undelegate"),"\nthe track and ",(0,i.kt)("a",{parentName:"p",href:"#delegate-votes"},"delegate")," again with updated information."),(0,i.kt)("h2",{id:"claiming-opengov-deposits"},"Claiming OpenGov Deposits"),(0,i.kt)("h3",{id:"claiming-the-preimage-and-decision-deposits"},"Claiming the Preimage and Decision Deposits"),(0,i.kt)("p",null,"After a referendum finishes its life cycle (and gets approved or rejected or timed out), the\npreimage and decision deposits can be claimed. For claiming the preimage deposit, navigate to\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Governance > Preimages")," and click on\nunnote button shown on the preimage you submitted."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Claim Preimage Deposit",src:n(80560).Z,width:"2828",height:"362"})),(0,i.kt)("p",null,"Similarly, to claim the decision deposit, navigate to\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda")," and scroll down\nto the end of the page to click on the referenda with the decision deposit and claim it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Claim Referendum Deposits",src:n(62248).Z,width:"2830",height:"444"})),(0,i.kt)("h3",{id:"claiming-the-referendum-submission-deposit"},"Claiming the Referendum Submission Deposit"),(0,i.kt)("p",null,"The submission deposit for a referendum can be claimed\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/cfb29254f74412cea35e8048d8aea94bc789fcb1/substrate/frame/referenda/src/types.rs#L261"},"only if the referendum was ",(0,i.kt)("inlineCode",{parentName:"a"},"Approved")," or ",(0,i.kt)("inlineCode",{parentName:"a"},"Canceled")),".\nThe submission deposit can be claimed by issuing the ",(0,i.kt)("inlineCode",{parentName:"p"},"refundSubmissionDeposit")," extrinsic."),(0,i.kt)("p",null,"Users can not refund their submission deposit while the referendum is ",(0,i.kt)("inlineCode",{parentName:"p"},"Ongoing")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Rejected"),".\nSimilarly, users cannot refund their submission deposit if the proposal has ",(0,i.kt)("inlineCode",{parentName:"p"},"TimedOut")," (failing to\nsubmit the decision deposit within a\n",(0,i.kt)(r.Z,{network:"polkadot",path:"const.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\nperiod will lead to a referendum timeout). This behavior exists so that users can refrain from\nspamming the chain with proposals that have no interest from the community. If a proposal is in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"TimedOut")," state, any user can call ",(0,i.kt)("inlineCode",{parentName:"p"},"slash_proposal_deposit"),", which will move the funds from the\nuser to a runtime-configured account, like the treasury."),(0,i.kt)("p",null,"To refund your slashed deposit, you can start a new referendum and specifically request a refund\nfrom the treasury. You need to make sure you have enough balance for a new submission and decision\ndeposit, and you will need to select the right track to ask for a refund. For example, the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#small-tipper"},"Small Tipper Track")," would be fine for\nany kind of deposit refund up to\n250 DOT."),(0,i.kt)("h2",{id:"cancel-or-kill-a-referendum"},"Cancel or Kill a Referendum"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Anybody can cancel an ongoing referendum (i.e., a referendum within the Lead-in or\nvoting/confirmation period). For more information about the referenda timeline in Polkadot OpenGov,\nsee the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#referenda-timeline"},"dedicated page"),"."),(0,i.kt)("p",{parentName:"admonition"},"To successfully cancel a referendum through the track ",(0,i.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller"),", you will need to\nattain\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#referendum-canceller"},"specific approval and support levels"),".")),(0,i.kt)("p",null,"To cancel a referendum, you need first to submit a preimage with the ",(0,i.kt)("inlineCode",{parentName:"p"},"referenda.cancel")," extrinsic.\nGo to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda"),' and\nclick on the "Add Preimage" button. You must specify the ',(0,i.kt)("inlineCode",{parentName:"p"},"referenda.cancel")," extrinsic with the index\nequal to the ongoing Referendum you wish to cancel. In the screenshot below, the Referendum to be\ncancelled is 249."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-preimage-creation",src:n(78996).Z,width:"2144",height:"944"})),(0,i.kt)("p",null,"This call will cancel the referendum and return the deposit. You can also kill a referendum using\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"referenda.kill")," extrinsic. This will cancel the referendum and slash the deposit."),(0,i.kt)("admonition",{title:"Preimage Submission Deposit",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A deposit is required for the preimage to be stored on chain. The preimage deposit is proportional\nto the amount of information stored within the preimage. The deposit amount required for a preimage\nwith a treasury spend transaction is around\n41 DOT. Ensure you have enough account\nbalance to pay for this submission deposit as well as the transaction fees.")),(0,i.kt)("p",null,"Once a preimage is submitted, it can be checked under\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/preimages"},"Governance > Preimages"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-preimage-check",src:n(16212).Z,width:"2758",height:"190"})),(0,i.kt)("p",null,"You must copy the preimage to use it when you submit your proposal. To submit the proposal to cancel\nreferendum 249, for example, you need to go under\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"Governance > Referenda"),' and click the "Submit Proposal"\nbutton.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cancel-referenda-proposal",src:n(81405).Z,width:"2130",height:"1226"})),(0,i.kt)("p",null,"You must specify the account to submit the proposal (this can differ from the account used to create\nthe preimage). Then you will need to specify the track ",(0,i.kt)("inlineCode",{parentName:"p"},"20 / Referendum Canceller")," and add the\npreimage hash containing the specific action that will be enacted if the referendum passes. Note\nthat a submission deposit of\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.referenda.submissionDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),"","\nwill be reserved for submitting the proposal."),(0,i.kt)("p",null,"Once the proposal has been submitted, it will stay in the Lead-in period until there is enough space\nwithin the track, and a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#polkadot-opengov-terminology-and-parameters"},"track-dependent preparation period and decision deposit"),"\nhave been met. Failing to submit the decision deposit within a\n",(0,i.kt)(r.Z,{network:"polkadot",path:"consts.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"","-day\nperiod will lead to a referendum timeout."))}k.isMDXComponent=!0},16212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/cancel-referenda-preimage-check-45ef7f984450113a2b1a87e9e2751d69.png"},78996:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/cancel-referenda-preimage-creation-3923463db47aec298f74a426dba23166.png"},81405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/cancel-referenda-proposal-b9c5e90784ec8216360053d8bda84980.png"},80560:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/claim-preimage-deposit-069843b91eba35d4829b237b59ab2d12.png"},62248:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/claim-referendum-decision-deposit-6352bbad189dac6fe7a651b5a3c8f5a5.png"},62428:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/js-delegation-allTracks-788efa580f296aa78b65b77691570181.png"},54853:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/js-delegation-delegate-3bcce735bcc35b831079cd44ad0eef15.png"},90691:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/js-delegation-start-c8186f8875fd402b993abfd5ab09f515.png"},9459:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/js-delegation-undelegate-a5018d2ecd2d5523f711199cd6fa1e63.png"},93996:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/js-delegation-undelegated-9b5efde53d2016c4e4b1f0f6b651ecf5.png"},52692:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/js-delegation-unlock-faed8e2a94e06f9be970c175b5a126f2.png"},46601:()=>{}}]);