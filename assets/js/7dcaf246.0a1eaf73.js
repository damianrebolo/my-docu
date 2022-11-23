"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={id:"rt-event-handler",title:"Event Handler",sidebar_label:"Event Handler",slug:"/event-handler",sidebar_position:5},i=void 0,c={unversionedId:"react-testing/rt-event-handler",id:"react-testing/rt-event-handler",title:"Event Handler",description:"",source:"@site/docs/react-testing/rt-event-handler.md",sourceDirName:"react-testing",slug:"/event-handler",permalink:"/my-docu/docs/event-handler",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-testing/rt-event-handler.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"rt-event-handler",title:"Event Handler",sidebar_label:"Event Handler",slug:"/event-handler",sidebar_position:5},sidebar:"mySidebar",previous:{title:"Multiple Elements",permalink:"/my-docu/docs/multiple-elements"},next:{title:"State Hook",permalink:"/my-docu/docs/state-hook"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nexport const ButtonWrapper: React.FunctionComponent<\n  React.DetailedHTMLProps<\n    React.ButtonHTMLAttributes<HTMLButtonElement>,\n    HTMLButtonElement\n  > & {\n    title: string,\n  }\n> = ({ title, ...props }) => <button {...props}>{title}</button>;\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { render, screen, fireEvent } from "@testing-library/react";\nimport { ButtonWrapper } from "./ButtonWrapper";\n\ntest("handles onClick", () => {\n  const onClick = jest.fn();\n  render(<ButtonWrapper onClick={onClick} title="Add Item" />);\n  const buttonElement = screen.getByText("Add Item");\n  fireEvent.click(buttonElement);\n  expect(onClick).toHaveBeenCalledTimes(1);\n});\n')))}u.isMDXComponent=!0}}]);