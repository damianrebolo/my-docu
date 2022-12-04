"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={id:"pr-ioc-react",title:"Inversion of Control",sidebar_label:"Inversion of control",slug:"/ioc-react"},i=void 0,s={unversionedId:"principles/pr-ioc-react",id:"principles/pr-ioc-react",title:"Inversion of Control",description:"What is IoC?",source:"@site/docs/principles/pr-ioc-react.md",sourceDirName:"principles",slug:"/ioc-react",permalink:"/my-docu/docs/ioc-react",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/principles/pr-ioc-react.md",tags:[],version:"current",frontMatter:{id:"pr-ioc-react",title:"Inversion of Control",sidebar_label:"Inversion of control",slug:"/ioc-react"},sidebar:"mySidebar",previous:{title:"HTTP Headers",permalink:"/my-docu/docs/http-security-headers"},next:{title:"SOLID Principles",permalink:"/my-docu/docs/solid"}},c={},l=[{value:"What is IoC?",id:"what-is-ioc",level:2},{value:"Compound Components",id:"compound-components",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"A simple principle that can drastically improve your reusable code.",type:"tip"}),(0,r.kt)("h2",{id:"what-is-ioc"},"What is IoC?"),(0,r.kt)("p",null,"IoC refers to transferring the control of objects (components) and their dependencies from the main program to a container or framework. Is used to increase modularity of the program and make it extensible, and has applications in object-oriented programming and other programming paradigms."),(0,r.kt)("p",null,"There's also patterns that you may be familiar with that are basically a form of inversion of control. My favorite pattern for this is ",(0,r.kt)("em",{parentName:"p"},'"Compound Components"'),"."),(0,r.kt)("h2",{id:"compound-components"},"Compound Components"),(0,r.kt)("p",null,"Let's say you want to build a ",(0,r.kt)("em",{parentName:"p"},"Menu")," component that has a button for opening the menu and a list of menu items to display when it's clicked. Then when an item is selected, it will perform some action. A common approach to this kind of component is to create props for each of these things:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function App() {\n  return (\n    <Menu\n      buttonContents={\n        <>\n          Actions <span aria-hidden>\u25be</span>\n        </>\n      }\n      items={[\n        { contents: "Download", onSelect: () => alert("Download") },\n        { contents: "Create a Copy", onSelect: () => alert("Create a Copy") },\n        { contents: "Delete", onSelect: () => alert("Delete") },\n      ]}\n    />\n  );\n}\n')),(0,r.kt)("p",null,"This allows us to customize a lot about our Menu item. But what if we wanted to insert a line before the Delete menu item? Would we have to add an option to the items objects? Like, I don't know: ",(0,r.kt)("inlineCode",{parentName:"p"},"precedeWithLine?")," Yikes. Maybe we'd have a special kind of menu item that's a ",(0,r.kt)("inlineCode",{parentName:"p"},"{contents: <hr />}"),". I guess that would work, but then we'd have to handle the case where no ",(0,r.kt)("inlineCode",{parentName:"p"},"onSelect")," is provided. And it's honestly an awkward API."),(0,r.kt)("p",null,"When you're thinking about how to create a nice API for people who are trying to do things slightly differently, instead of reaching for ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements and ternaries, consider the possibility of inverting control. In this case, what if we just gave rendering responsibility to the user of our menu? Let's use one of React's greatest strengths of composibility:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function App() {\n  return (\n    <Menu>\n      <MenuButton>\n        Actions <span aria-hidden>\u25be</span>\n      </MenuButton>\n      <MenuList>\n        <MenuItem onSelect={() => alert("Download")}>Download</MenuItem>\n        <MenuItem onSelect={() => alert("Copy")}>Create a Copy</MenuItem>\n        <MenuItem onSelect={() => alert("Delete")}>Delete</MenuItem>\n      </MenuList>\n    </Menu>\n  );\n}\n')),(0,r.kt)("p",null,"The key thing to notice here is that there's no state visible to the user of the components. The state is implicitly shared between these components. That's the primary value of the compound components pattern. By using that capability, we've given some rendering control over to the user of our components and now adding an extra line in there (or anything else for that matter) is pretty trivial and intuitive. ",(0,r.kt)("strong",{parentName:"p"},"No API docs to look up, and no extra features, code, or tests to add. Big win for everyone.")))}u.isMDXComponent=!0}}]);