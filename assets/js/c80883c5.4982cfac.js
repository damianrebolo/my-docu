"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8214],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),p=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),y=n,b=u["".concat(i,".").concat(y)]||u[y]||d[y]||s;return t?a.createElement(b,o(o({ref:r},c),{},{components:t})):a.createElement(b,o({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=u;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},485:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const s={id:"js-spread-syntax",title:"Spread Syntax",sidebar_label:"Spread Syntax",slug:"/spread-syntax",sidebar_position:2},o=void 0,l={unversionedId:"javascript/js-spread-syntax",id:"javascript/js-spread-syntax",title:"Spread Syntax",description:"Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.",source:"@site/docs/javascript/js-spread-syntax.md",sourceDirName:"javascript",slug:"/spread-syntax",permalink:"/my-docu/docs/spread-syntax",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/js-spread-syntax.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"js-spread-syntax",title:"Spread Syntax",sidebar_label:"Spread Syntax",slug:"/spread-syntax",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Var - let - const",permalink:"/my-docu/docs/js-variables"},next:{title:"Destructuring assignment",permalink:"/my-docu/docs/destructuring-assignment"}},i={},p=[{value:"Spread in function calls",id:"spread-in-function-calls",level:3},{value:"Spread in array literals",id:"spread-in-array-literals",level:3},{value:"Spread in object literals",id:"spread-in-object-literals",level:3},{value:"Resources",id:"resources",level:2}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Spread syntax (...)")," allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected."),(0,n.kt)("h3",{id:"spread-in-function-calls"},"Spread in function calls"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"function myFunction(x, y, z) {}\nlet args = [0, 1, 2];\nmyFunction(...args);\n")),(0,n.kt)("h3",{id:"spread-in-array-literals"},"Spread in array literals"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'let parts = ["shoulders", "knees"];\nlet lyrics = ["head", ...parts, "and", "toes"];\n')),(0,n.kt)("h3",{id:"spread-in-object-literals"},"Spread in object literals"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'let obj1 = { foo: "bar", x: 42 };\nlet obj2 = { foo: "baz", y: 13 };\n\nlet clonedObj = { ...obj1 };\n// Object { foo: "bar", x: 42 }\n\nlet mergedObj = { ...obj1, ...obj2 };\n// Object { foo: "baz", x: 42, y: 13 }\n')),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://reactpatterns.com/#jsx-spread-attributes"},"https://reactpatterns.com/#jsx-spread-attributes")))}d.isMDXComponent=!0}}]);