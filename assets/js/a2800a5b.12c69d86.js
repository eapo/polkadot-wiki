"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},69595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"build-transaction-construction",title:"Transaction Construction and Signing",sidebar_label:"Transaction Construction",description:"Information about how transactions are constructed on Polkadot.",keywords:["transaction","transaction construction","format","tools"],slug:"../build-transaction-construction"},l=void 0,c={unversionedId:"build/build-transaction-construction",id:"build/build-transaction-construction",title:"Transaction Construction and Signing",description:"Information about how transactions are constructed on Polkadot.",source:"@site/../docs/build/build-transaction-construction.md",sourceDirName:"build",slug:"/build-transaction-construction",permalink:"/docs/build-transaction-construction",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-transaction-construction.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1650998673,formattedLastUpdatedAt:"4/26/2022",frontMatter:{id:"build-transaction-construction",title:"Transaction Construction and Signing",sidebar_label:"Transaction Construction",description:"Information about how transactions are constructed on Polkadot.",keywords:["transaction","transaction construction","format","tools"],slug:"../build-transaction-construction"},sidebar:"docs",previous:{title:"Node Interaction",permalink:"/docs/build-node-interaction"},next:{title:"Tool Index",permalink:"/docs/build-tools-index"}},d={},p=[{value:"Transaction Format",id:"transaction-format",level:2},{value:"Polkadot-JS Tools",id:"polkadot-js-tools",level:2},{value:"Tx Wrapper Polkadot",id:"tx-wrapper-polkadot",level:2},{value:"Submitting a Signed Payload",id:"submitting-a-signed-payload",level:2},{value:"Notes",id:"notes",level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page will discuss the transaction format in Polkadot and how to create, sign, and broadcast\ntransactions. Like the other pages in this guide, this page demonstrates some of the available\ntools. ",(0,i.kt)("strong",{parentName:"p"},"Always refer to each tool's documentation when integrating.")),(0,i.kt)("h2",{id:"transaction-format"},"Transaction Format"),(0,i.kt)("p",null,"Polkadot has some basic transaction information that is common to all transactions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Address: The SS58-encoded address of the sending account."),(0,i.kt)("li",{parentName:"ul"},"Block Hash: The hash of the ",(0,i.kt)("a",{parentName:"li",href:"/docs/build-protocol-info#transaction-mortality"},"checkpoint")," block."),(0,i.kt)("li",{parentName:"ul"},"Block Number: The number of the checkpoint block."),(0,i.kt)("li",{parentName:"ul"},"Genesis Hash: The genesis hash of the chain."),(0,i.kt)("li",{parentName:"ul"},"Metadata: The SCALE-encoded metadata for the runtime when submitted."),(0,i.kt)("li",{parentName:"ul"},"Nonce: The nonce for this transaction.","*"),(0,i.kt)("li",{parentName:"ul"},"Spec Version: The current spec version for the runtime."),(0,i.kt)("li",{parentName:"ul"},"Transaction Version: The current version for transaction format."),(0,i.kt)("li",{parentName:"ul"},"Tip: Optional, the ",(0,i.kt)("a",{parentName:"li",href:"/docs/build-protocol-info#fees"},"tip")," to increase transaction priority."),(0,i.kt)("li",{parentName:"ul"},"Era Period: Optional, the number of blocks after the checkpoint for which a transaction is valid.\nIf zero, the transaction is ",(0,i.kt)("a",{parentName:"li",href:"/docs/build-protocol-info#transaction-mortality"},"immortal"),".")),(0,i.kt)("p",null,"*","The nonce queried from the System module does not account for pending transactions. You must track\nand increment the nonce manually if you want to submit multiple valid transactions at the same time."),(0,i.kt)("p",null,"Each transaction will have its own (or no) parameters to add. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"transferKeepAlive"),"\nfunction from the Balances pallet will take:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dest"),": Destination address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#[compact] value"),": Number of tokens (compact encoding)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Serialized transaction format")),(0,i.kt)("p",null,"Before being submitted, transactions are serialized. Serialized transactions are hex encoded SCALE-encoded\nbytes. The specific serialization is defined in the runtime and can change if the runtime is upgraded, but\nin general the serialization format can be described as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Compact encoded number of SCALE encoded bytes following this."),(0,i.kt)("li",{parentName:"ul"},"1 bit: it is a 0 if no signature is present, or a 1 if it is."),(0,i.kt)("li",{parentName:"ul"},"7 bits: the extrinsic version, it is equal to 4 in decimal.","-"," 4 bytes: Spec version of the runtime."),(0,i.kt)("li",{parentName:"ul"},"4 bytes: Transaction version of the runtime."),(0,i.kt)("li",{parentName:"ul"},"32 bytes: Genesis hash of the chain."),(0,i.kt)("li",{parentName:"ul"},"32 bytes: Block hash serving as the era reference. If the transaction is immortal, then this would be the\ngenesis hash."),(0,i.kt)("li",{parentName:"ul"},"If there is a signature:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a SCALE encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"sp_runtime::MultiAddress::Id<AccountId32, u32>")," indicating the signer(s) of the transaction."),(0,i.kt)("li",{parentName:"ul"},"a SCALE encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"sp_runtime::MultiSignature::{SigningScheme}")," with the signature","*","."),(0,i.kt)("li",{parentName:"ul"},"a SCALE encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"sp_runtime::generic::Era")," indicating for how long this transaction is valid:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the transaction is immortal, the Era would be simply 0."),(0,i.kt)("li",{parentName:"ul"},"Otherwise, it would be a ",(0,i.kt)("inlineCode",{parentName:"li"},"Vec[u64, u64]")," comprising the period and the phase."))),(0,i.kt)("li",{parentName:"ul"},"Compact encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"u32")," with the nonce."),(0,i.kt)("li",{parentName:"ul"},"Compact encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"u128")," with the tip paid to the block producer."),(0,i.kt)("li",{parentName:"ul"},"a SCALE encoded ",(0,i.kt)("inlineCode",{parentName:"li"},"sp_runtime::traits::SignedExtension<Vec<Text>>")," with the additional data and logic associated\nwith this transaction."))),(0,i.kt)("li",{parentName:"ul"},"The specific transaction parameters or call data, which consists of:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"1 byte: the pallet index the transaction is calling into."),(0,i.kt)("li",{parentName:"ul"},"1 byte: the function in the pallet the transaction is calling."),(0,i.kt)("li",{parentName:"ul"},"variable: the SCALE-encoded parameters required by the function being called.")))),(0,i.kt)("p",null,"The metadata provides you with all of the information required to know how to construct the serialized call data\nspecific to your transaction. You can read more about the metadata, its format and how to get it in the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/runtime/metadata/"},"Substrate documentation"),"."),(0,i.kt)("p",null,"*"," Polkadot supports sr25519, ed25519, and ECDSA as signing schemes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Summary")),(0,i.kt)("p",null,"Once you have all the necessary information, you will need to:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Construct an unsigned transaction."),(0,i.kt)("li",{parentName:"ol"},"Create a signing payload."),(0,i.kt)("li",{parentName:"ol"},"Sign the payload."),(0,i.kt)("li",{parentName:"ol"},"Serialize the signed payload into a transaction."),(0,i.kt)("li",{parentName:"ol"},"Submit the serialized transaction.")),(0,i.kt)("p",null,"Parity provides the following tools to help perform these steps."),(0,i.kt)("h2",{id:"polkadot-js-tools"},"Polkadot-JS Tools"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/tools"},"Polkadot-JS Tools"),' contains a set of command line tools for\ninteracting with a Substrate client, including one called "Signer CLI" to create, sign, and\nbroadcast transactions.'),(0,i.kt)("p",null,"This example will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"signer submit")," command, which will create and submit the transaction. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"signer sendOffline")," command has the exact same API, but will not broadcast the transaction.\n",(0,i.kt)("inlineCode",{parentName:"p"},"submit")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"sendOffline")," must be connected to a node to fetch the current metadata and construct a\nvalid transaction. Their API has the format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run:signer <submit|sendOffline> --account <from-account-ss58> --ws <endpoint> <module.method> [param1] [...] [paramX]\n")),(0,i.kt)("p",null,"Signing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run:signer sign --account <from-account-ss58> --seed <seed> --type <sr25519|ed25519> <payload>\n")),(0,i.kt)("p",null,"For example, let's send 0.5 DOT from ",(0,i.kt)("inlineCode",{parentName:"p"},"121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2")," to\n",(0,i.kt)("inlineCode",{parentName:"p"},"15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn run:signer submit --account 121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2 --ws ws://127.0.0.1:9944 balances.transferKeepAlive 15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y 5000000000\n")),(0,i.kt)("p",null,"This will return a payload to sign and an input waiting for a signature. Take this payload and use\nyour normal signing environment (e.g. air gapped machine, VM, etc.). Sign the payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'yarn run:signer sign --account 121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2 --seed "pulp gaze fuel ... mercy inherit equal" --type sr25519 0x040300ff4a83f1...a8239139ff3ff7c3f6\n')),(0,i.kt)("p",null,"Save the output and bring it to the machine that you will broadcast from, enter it into ",(0,i.kt)("inlineCode",{parentName:"p"},"submit"),"'s\nsignature field, and send the transaction (or just return the serialized transaction if using\n",(0,i.kt)("inlineCode",{parentName:"p"},"sendOffline"),")."),(0,i.kt)("h2",{id:"tx-wrapper-polkadot"},"Tx Wrapper Polkadot"),(0,i.kt)("p",null,"If you do not want to use the CLI for signing operations, Parity provides an SDK called\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core"},"TxWrapper Core")," to generate and sign transactions\noffline. For Polkadot, Kusama, and select parachains, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"txwrapper-polkadot")," package. Other\nSubstrate-based chains will have their own ",(0,i.kt)("inlineCode",{parentName:"p"},"txwrapper-{chain}")," implementations. See the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/blob/main/packages/txwrapper-examples/README.md"},"examples"),"\nfor a guide."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Import a private key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { importPrivateKey } from '@substrate/txwrapper-polkadot';\n\nconst keypair = importPrivateKey(\u201cpulp gaze fuel ... mercy inherit equal\u201d);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Derive an address from a public key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { deriveAddress } from '@substrate/txwrapper-polkadot';\n\n// Public key, can be either hex string, or Uint8Array\nconst publicKey = \u201c0x2ca17d26ca376087dc30ed52deb74bf0f64aca96fe78b05ec3e720a72adb1235\u201d;\nconst address = deriveAddress(publicKey);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Construct a transaction offline")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { methods } from "@substrate/txwrapper-polkadot";\n\nconst unsigned = methods.balances.transferKeepAlive(\n  {\n    dest: "15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y",\n    value: 5000000000,\n  },\n  {\n    address: "121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2",\n    blockHash:\n      "0x1fc7493f3c1e9ac758a183839906475f8363aafb1b1d3e910fe16fab4ae1b582",\n    blockNumber: 4302222,\n    genesisHash:\n      "0xe3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f636",\n    metadataRpc, // must import from client RPC call state_getMetadata\n    nonce: 2,\n    specVersion: 1019,\n    tip: 0,\n    eraPeriod: 64, // number of blocks from checkpoint that transaction is valid\n    transactionVersion: 1,\n  },\n  {\n    metadataRpc,\n    registry, // Type registry\n  }\n);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Construct a signing payload")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { methods, createSigningPayload } from \'@substrate/txwrapper-polkadot\';\n\n// See "Construct a transaction offline" for "{...}"\nconst unsigned = methods.balances.transferKeepAlive({...}, {...}, {...});\nconst signingPayload = createSigningPayload(unsigned, { registry });\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Serialize a signed transaction")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { createSignedTx } from "@substrate/txwrapper-polkadot";\n\n// Example code, replace `signWithAlice` with actual remote signer.\n// An example is given here:\n// https://github.com/paritytech/txwrapper-core/blob/b213cabf50f18f0fe710817072a81596e1a53cae/packages/txwrapper-core/src/test-helpers/signWithAlice.ts\nconst signature = await signWithAlice(signingPayload);\nconst signedTx = createSignedTx(unsigned, signature, { metadataRpc, registry });\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Decode payload types")),(0,i.kt)("p",null,"You may want to decode payloads to verify their contents prior to submission."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { decode } from "@substrate/txwrapper-polkadot";\n\n// Decode an unsigned tx\nconst txInfo = decode(unsigned, { metadataRpc, registry });\n\n// Decode a signing payload\nconst txInfo = decode(signingPayload, { metadataRpc, registry });\n\n// Decode a signed tx\nconst txInfo = decode(signedTx, { metadataRpc, registry });\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check a transaction's hash")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { getTxHash } from \u2018@substrate/txwrapper-polkadot\u2019;\nconst txHash = getTxHash(signedTx);\n")),(0,i.kt)("h2",{id:"submitting-a-signed-payload"},"Submitting a Signed Payload"),(0,i.kt)("p",null,"There are several ways to submit a signed payload:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Signer CLI (",(0,i.kt)("inlineCode",{parentName:"li"},"yarn run:signer submit --tx <signed-transaction> --ws <endpoint>"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"build-node-interaction#substrate-api-sidecar"},"Substrate API Sidecar")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"build-node-interaction#polkadot-rpc"},"RPC")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"author_submitExtrinsic")," or\n",(0,i.kt)("inlineCode",{parentName:"li"},"author_submitAndWatchExtrinsic"),", the latter of which will subscribe you to events to be notified\nas a transaction gets validated and included in the chain.")),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"Some addresses to use in the examples. See\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/tools/subkey/"},"Subkey documentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ subkey --network polkadot generate\nSecret phrase `pulp gaze fuel ... mercy inherit equal` is account:\n  Secret seed:      0x57450b3e09ba4598 ... ... ... ... ... ... ... .. 219756eeba80bb16\n  Public key (hex): 0x2ca17d26ca376087dc30ed52deb74bf0f64aca96fe78b05ec3e720a72adb1235\n  Account ID:       0x2ca17d26ca376087dc30ed52deb74bf0f64aca96fe78b05ec3e720a72adb1235\n  SS58 Address:     121X5bEgTZcGQx5NZjwuTjqqKoiG8B2wEAvrUFjuw24ZGZf2\n\n$ subkey --network polkadot generate\nSecret phrase `exercise auction soft ... obey control easily` is account:\n  Secret seed:      0x5f4bbb9fbb69261a ... ... ... ... ... ... ... .. 4691ed7d1130fbbd\n  Public key (hex): 0xda04de6cd781c98acf0693dfb97c11011938ad22fcc476ed0089ac5aec3fe243\n  Account ID:       0xda04de6cd781c98acf0693dfb97c11011938ad22fcc476ed0089ac5aec3fe243\n  SS58 Address:     15vrtLsCQFG3qRYUcaEeeEih4JwepocNJHkpsrqojqnZPc2y\n")))}m.isMDXComponent=!0}}]);