"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9762],{3905:(e,n,o)=>{o.d(n,{Zo:()=>f,kt:()=>d});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},f=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=r,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return o?t.createElement(h,i(i({ref:n},f),{},{components:o})):t.createElement(h,i({ref:n},f))}));function d(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}p.displayName="MDXCreateElement"},1427:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=o(7462),r=(o(7294),o(3905));const a={id:"w3-pow-mining",title:"Proof of Work & Mining",sidebar_label:"Proof of Work & Mining",slug:"/w3-pow-mining"},i=void 0,s={unversionedId:"web3/w3-pow-mining",id:"web3/w3-pow-mining",title:"Proof of Work & Mining",description:"Blockchain networks, like Ethereum, are essentially distributed and decentralized databases consisting of many nodes.",source:"@site/docs/web3/w3-proof-of-work-mining.md",sourceDirName:"web3",slug:"/w3-pow-mining",permalink:"/my-docu/docs/w3-pow-mining",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web3/w3-proof-of-work-mining.md",tags:[],version:"current",frontMatter:{id:"w3-pow-mining",title:"Proof of Work & Mining",sidebar_label:"Proof of Work & Mining",slug:"/w3-pow-mining"},sidebar:"mySidebar",previous:{title:"Cryptography",permalink:"/my-docu/docs/w3-cryptography"},next:{title:"Blockchain Architecture",permalink:"/my-docu/docs/w3-blockchain-architecture"}},l={},c=[{value:"Proof of Work",id:"proof-of-work",level:2},{value:"Mining",id:"mining",level:2},{value:"Why do miners expend resources to secure a proof-of-work blockchain network like Ethereum or Bitcoin?",id:"why-do-miners-expend-resources-to-secure-a-proof-of-work-blockchain-network-like-ethereum-or-bitcoin",level:3},{value:"The Mempool",id:"the-mempool",level:2},{value:"Why would you use Proof of Work?",id:"why-would-you-use-proof-of-work",level:2}],f={toc:c};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},f,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Blockchain networks, like Ethereum, are essentially distributed and decentralized databases consisting of many nodes."),(0,r.kt)("p",null,"In a decentralized environment, common issues are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How do all nodes agree on what the current and future state of user account balances and contract interactions is?"),(0,r.kt)("li",{parentName:"ul"},'Who gets to add new blocks/transactions to a chain? How do we know any blocks added are "valid"?'),(0,r.kt)("li",{parentName:"ul"},"How the heck are all of these things coordinated without any central actor in place?")),(0,r.kt)("p",null,"The answer is ",(0,r.kt)("strong",{parentName:"p"},"consensus mechanisms"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Consensus means coming to a general agreement. Blockchain consensus typically means at least 51% of nodes are in agreement over the current global state of the network.")),(0,r.kt)("h2",{id:"proof-of-work"},"Proof of Work"),(0,r.kt)("p",null,"Proof-of-work is the consensus mechanism that allows decentralized networks like Bitcoin and (previously) Ethereum to come to consensus, or agree on things like account balances and the order of transactions."),(0,r.kt)("p",null,"The consensus mechanism ends up providing security to a blockchain network just because it demands that everyone follow the consensus rules if they want to participate!"),(0,r.kt)("p",null,"In proof-of-work, ",(0,r.kt)("strong",{parentName:"p"},"mining"),' is the "work" itself.'),(0,r.kt)("h2",{id:"mining"},"Mining"),(0,r.kt)("p",null,"Mining is process of creating a block of transactions to be added to a blockchain."),(0,r.kt)("p",null,"In proof-of-work consensus, nodes in the network continuously attempt to extend the chain with new blocks - these are the ",(0,r.kt)("strong",{parentName:"p"},"miners"),', nodes that contain mining software. Miners are in charge of extending a blockchain by adding blocks that contain "valid" transactions. In order to add a block, the network will ask miners for their ',(0,r.kt)("inlineCode",{parentName:"p"},"proof-of-work"),"."),(0,r.kt)("p",null,"A proof-of-work-based system will typically require miners produce an output in a very difficult-to-get target range. A valid proof-of-work would currently look like this in the Bitcoin network:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"000000000000000000043f43161dc56a08ffd0727df1516c987f7b187f5194c6")),(0,r.kt)("p",null,"If the hash output is below a target difficulty, then the miner has found the answer to the puzzle: a valid proof of work."),(0,r.kt)("p",null,"Proof-of-work networks will typically have some sort of ",(0,r.kt)("inlineCode",{parentName:"p"},"target_difficulty"),'. In order for a miner to add a new block, they must find a proof-of-work lower than the network target difficulty. It\'s basically the network saying: "If you want to add a new block, you must provide a proof-of-work with 12 leading zeroes."'),(0,r.kt)("p",null,"The way the math works, finding such a diffcult-to-find output is proof enough that a miner expended considerable resources to secure the network."),(0,r.kt)("h3",{id:"why-do-miners-expend-resources-to-secure-a-proof-of-work-blockchain-network-like-ethereum-or-bitcoin"},"Why do miners expend resources to secure a proof-of-work blockchain network like Ethereum or Bitcoin?"),(0,r.kt)("p",null,"In exchange for the large amounts of energy and hardware upkeep required to run mining software, miners receive currency as a reward. If the consensus rules are followed, making a secure network, miners get paid."),(0,r.kt)("h2",{id:"the-mempool"},"The Mempool"),(0,r.kt)("p",null,"Users who want to make transactions will broadcast their transactions to the blockchain network. The mempool is a place for miners to keep those transactions before adding them to a block."),(0,r.kt)("p",null,"Typically, the miner will take all the transactions with the highest transaction fees from the mempool. Then they'll add them to the block and attempt to find the proof of work."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const SHA256 = require("crypto-js/sha256");\nconst TARGET_DIFFICULTY =\n  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);\nconst MAX_TRANSACTIONS = 10;\n\nconst mempool = [];\nconst blocks = [];\n\nfunction addTransaction(transaction) {\n  mempool.push(transaction);\n}\n\nfunction mine() {\n  let nonce = 0;\n  const block = {\n    id: blocks.length,\n    transactions: mempool.splice(0, 10),\n    nonce,\n  };\n  let hash;\n  while (true) {\n    hash = SHA256(JSON.stringify(block));\n    if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {\n      break;\n    } else {\n      block.nonce++;\n    }\n  }\n  blocks.push({\n    ...block,\n    hash,\n  });\n}\n\nmodule.exports = {\n  TARGET_DIFFICULTY,\n  MAX_TRANSACTIONS,\n  addTransaction,\n  mine,\n  blocks,\n  mempool,\n};\n')),(0,r.kt)("h2",{id:"why-would-you-use-proof-of-work"},"Why would you use Proof of Work?"),(0,r.kt)("p",null,"One of the first use cases of Proof of Work was to prevent spamming. If a spammer wants to send an email to a million people, they need to come up with a million hashes with three 5s. It becomes computationally expensive for them to do this kind of spamming."),(0,r.kt)("p",null,"Now you might be wondering: ",(0,r.kt)("strong",{parentName:"p"},"Could the spammer just use the same hash for all 1 million emails?")),(0,r.kt)("p",null,"Yes, certainly! Well, that is, unless we build requirements to make each hash unique."))}u.isMDXComponent=!0}}]);