"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||l[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={id:"re-state",title:"React State",sidebar_label:"State",slug:"/react-state"},i=void 0,s={unversionedId:"react/re-state",id:"react/re-state",title:"React State",description:'The state is an object that holds information about a certain component. React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.',source:"@site/docs/react/re-state.md",sourceDirName:"react",slug:"/react-state",permalink:"/my-docu/docs/react-state",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/re-state.md",tags:[],version:"current",frontMatter:{id:"re-state",title:"React State",sidebar_label:"State",slug:"/react-state"},sidebar:"mySidebar",previous:{title:"Lifecycle",permalink:"/my-docu/docs/react-lifecycle"},next:{title:"Memoization",permalink:"/my-docu/docs/react-memoization"}},c={},u=[{value:"useState Hook",id:"usestate-hook",level:2},{value:"useReducer Hook",id:"usereducer-hook",level:2},{value:"React Context",id:"react-context",level:2},{value:"React-query",id:"react-query",level:2},{value:"Client State Management",id:"client-state-management",level:2},{value:"Redux",id:"redux",level:3},{value:"Zustand",id:"zustand",level:3}],p={toc:u};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'The state is an object that holds information about a certain component. React functional components can store information even after execution. When we need a component to store or "remember" something, or to act in a different way depending on the environment, state is what we need to make it work this way.'),(0,o.kt)("p",null,"It's important to mention that not all components in a React app must have state. There are ",(0,o.kt)("inlineCode",{parentName:"p"},"stateless components")," as well which just render its content without the need to store any information, and that's just fine."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"State change make a React component re-render.")),(0,o.kt)("h2",{id:"usestate-hook"},"useState Hook"),(0,o.kt)("p",null,"In order to implement state in our components, React provides us with a hook called ",(0,o.kt)("inlineCode",{parentName:"p"},"useState"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"App.jsx","App.jsx":!0},'import { useState } from "react";\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className="App">\n      <div>\n        <button onClick={() => setCount(count + 1)}>Add 1</button>\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"usereducer-hook"},"useReducer Hook"),(0,o.kt)("p",null,"Another problem may come up when you're using useState where the new state to be set depends on the previous state or when state changes occur very frequently in our application. In these occasions, useState may provoke some unexpected and unpredictable behavior. In come ",(0,o.kt)("inlineCode",{parentName:"p"},"reducers")," to solve this problem."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"reducer")," is a pure function that takes the previous state and an action as an argument, and returns the next state."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useReducer")," is the hook Reacts provides that lets us implement reducers to manage our state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"App.jsx","App.jsx":!0},'import { useReducer } from "react";\n\nfunction App() {\n  function reducer(state, action) {\n    switch (action.type) {\n      case "ADD":\n        return { count: state.count + 1 };\n      case "SUB":\n        return { count: state.count - 1 };\n      case "ADD10":\n        return { count: state.count + 10 };\n      case "SUB10":\n        return { count: state.count - 10 };\n      case "RESET":\n        return { count: 0 };\n      default:\n        return state;\n    }\n  }\n\n  const [state, dispatch] = useReducer(reducer, { count: 0 });\n\n  return (\n    <div>\n      <p>Count is: {state.count}</p>\n\n      <div>\n        <button onClick={() => dispatch({ type: "ADD" })}>Add 1</button>\n\n        <button onClick={() => dispatch({ type: "SUB" })}>Decrease 1</button>\n\n        <button onClick={() => dispatch({ type: "ADD10" })}>Add 10</button>\n        <button onClick={() => dispatch({ type: "SUB10" })}>Decrease 10</button>\n\n        <button onClick={() => dispatch({ type: "RESET" })}>Reset count</button>\n      </div>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.kt)("h2",{id:"react-context"},"React Context"),(0,o.kt)("p",null,"Context provides a way to pass data through the component tree without having to pass props down manually at every level."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Context is designed to share data that can be considered \u201cglobal\u201d for a tree of React components, such as the current authenticated user, theme, or preferred language.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"If you only want to avoid passing some props through many levels, ",(0,o.kt)("inlineCode",{parentName:"p"},"component composition")," is often a simpler solution than context.")),(0,o.kt)("h2",{id:"react-query"},"React-query"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React Query")," is often described as the missing data-fetching library for React, but in more technical terms, it makes ",(0,o.kt)("inlineCode",{parentName:"p"},"fetching"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"caching"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"synchronizing")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"updating")," server state in your React applications a breeze."),(0,o.kt)("p",null,"While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state."),(0,o.kt)("h2",{id:"client-state-management"},"Client State Management"),(0,o.kt)("h3",{id:"redux"},"Redux"),(0,o.kt)("p",null,"Redux is a tool that comes to solve prop drilling and unpredictable state behavior on frequent and complex state changes."),(0,o.kt)("h3",{id:"zustand"},"Zustand"),(0,o.kt)("p",null,"A small, fast non-opinionated and scalable barebones state-management solution with a comfy API based on hooks and almost no boilerplate."))}l.isMDXComponent=!0}}]);