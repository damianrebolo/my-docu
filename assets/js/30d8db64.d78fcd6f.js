"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"rt-multiple-elements",title:"Multiple Elements",sidebar_label:"Multiple Elements",slug:"/multiple-elements",sidebar_position:5},o=void 0,l={unversionedId:"react-testing/rt-multiple-elements",id:"react-testing/rt-multiple-elements",title:"Multiple Elements",description:"",source:"@site/docs/react-testing/rt-multiple-elements.md",sourceDirName:"react-testing",slug:"/multiple-elements",permalink:"/my-docu/docs/multiple-elements",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react-testing/rt-multiple-elements.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"rt-multiple-elements",title:"Multiple Elements",sidebar_label:"Multiple Elements",slug:"/multiple-elements",sidebar_position:5},sidebar:"mySidebar",previous:{title:"Basic Component",permalink:"/my-docu/docs/basic-component"},next:{title:"Event Handler",permalink:"/my-docu/docs/event-handler"}},s={},c=[],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\n\nexport const SideBar = ({\n  items,\n}: {\n  items: { name: string, href: string }[],\n}) => (\n  <div>\n    {items.map((item) => (\n      <div key={item.href}>\n        <a role="navigation" href={item.href}>\n          {item.name}\n        </a>\n      </div>\n    ))}\n  </div>\n);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'import React from "react";\nimport { render, screen } from "@testing-library/react";\nimport { SideBar } from "./SideBar";\n\ntest("renders a name", () => {\n  const items = [\n    {\n      name: "test",\n      href: "/test",\n    },\n  ];\n  render(<SideBar items={items} />);\n  const anchorElements = screen.getAllByRole("navigation");\n  expect(anchorElements[0]).toHaveTextContent(items[0].name);\n  expect(anchorElements[0]).toHaveAttribute("href", items[0].href);\n});\n')))}p.isMDXComponent=!0}}]);