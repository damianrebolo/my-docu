"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5584],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(y,i(i({ref:t},p),{},{components:a})):n.createElement(y,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const s={id:"js-async-await",title:"Async / await",sidebar_label:"Async / await",slug:"/async-await",sidebar_position:5},i=void 0,o={unversionedId:"javascript/js-async-await",id:"javascript/js-async-await",title:"Async / await",description:"Inside a function marked as async, you are allowed to place the await keyword in front of an expression that returns a promise. When you do, the execution of the async function is paused until the promise is resolved.",source:"@site/docs/javascript/js-async-await.md",sourceDirName:"javascript",slug:"/async-await",permalink:"/my-docu/docs/async-await",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/js-async-await.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"js-async-await",title:"Async / await",sidebar_label:"Async / await",slug:"/async-await",sidebar_position:5},sidebar:"mySidebar",previous:{title:"Objects",permalink:"/my-docu/docs/objects-in-js"}},c={},l=[{value:"FetchAvatar example",id:"fetchavatar-example",level:2},{value:"Using Promise",id:"using-promise",level:3},{value:"Using Async / await",id:"using-async--await",level:3},{value:"FetchCatAvatar example",id:"fetchcatavatar-example",level:2},{value:"Using Promises",id:"using-promises",level:3},{value:"Using Async / await",id:"using-async--await-1",level:3},{value:"Solution",id:"solution",level:3},{value:"Resources",id:"resources",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inside a function marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),", you are allowed to place the ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," keyword in front of an expression that returns a promise. When you do, the execution of the async function is paused until the promise is resolved."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure ",(0,r.kt)("inlineCode",{parentName:"p"},"promise chains"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Async")," functions always return a ",(0,r.kt)("inlineCode",{parentName:"p"},"promise"),". If the return value of an ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," function is not explicitly a ",(0,r.kt)("inlineCode",{parentName:"p"},"promise"),", it will be implicitly wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"promise"),"."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The await keyword is only valid inside async functions. If you use it outside of an async function's body, you will get a SyntaxError.")),(0,r.kt)("h2",{id:"fetchavatar-example"},"FetchAvatar example"),(0,r.kt)("h3",{id:"using-promise"},"Using Promise"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function fetchAvatar(userId) {\n  return fetch("userUrl...")\n    .then((response) => response.json())\n    .then((data) => data.imageUrl);\n}\n')),(0,r.kt)("h3",{id:"using-async--await"},"Using Async / await"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'async function fetchAvatar(userId) {\n  const response = await fetch("userUrl...");\n  const data = await response.json();\n  return data.imageUrl;\n}\n')),(0,r.kt)("h2",{id:"fetchcatavatar-example"},"FetchCatAvatar example"),(0,r.kt)("h3",{id:"using-promises"},"Using Promises"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function fetchCatAvatars(userId) {\n  return fetch(`userUrl...`)\n    .then((response) => response.json())\n    .then((user) => {\n      const promises = user.cats.map((catId) =>\n        fetch(`catUrl...`)\n          .then((response) => response.json())\n          .then((catData) => catData.imageUrl)\n      );\n      return Promise.all(promises);\n    });\n}\n")),(0,r.kt)("h3",{id:"using-async--await-1"},"Using Async / await"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function fetchCatAvatars(userId) {\n  const response = await fetch(`userUrl...`);\n  const user = await response.json();\n  const catImageUrls = [];\n  for (const catId of user.cats) {\n    const response = await fetch(`catUrl...`);\n    const catData = await response.json();\n    catImageUrls.push(catData.imageUrl);\n  }\n  return catImageUrls;\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"They are not logically equivalent. In the async / await example it will load the cats in sequence while the promised example will load them in parallel, so the promise example is a lot faster.")),(0,r.kt)("h3",{id:"solution"},"Solution"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function fetchCatAvatars(userId) {\n  const response = await fetch(`userUrl...`);\n  const user = await response.json();\n\n  return await Promise.all(\n    user.cats.map(async function (catId) {\n      const response = await fetch(`catUrl...`);\n      const catData = await response.json();\n      return catData.imageUrl;\n    })\n  );\n}\n")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"If you need to run in parallel use ",(0,r.kt)("inlineCode",{parentName:"p"},"Promises"),", if you need to run in sequence ",(0,r.kt)("inlineCode",{parentName:"p"},"async / await")," is more readable.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=568g8hxJJp4&t=1140s"},"https://www.youtube.com/watch?v=568g8hxJJp4&t=1140s")))}u.isMDXComponent=!0}}]);