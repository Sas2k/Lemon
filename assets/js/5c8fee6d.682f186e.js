"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[2979],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>u});var t=n(7294);function l(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){l(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,l=function(e,r){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(l[n]=e[n]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),p=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=l,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||o;return n?t.createElement(f,a(a({ref:r},d),{},{components:n})):t.createElement(f,a({ref:r},d))}));function u(e,r){var n=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3291:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(7462),l=(n(7294),n(3905));const o={title:"Lemon.Server.middleware",sidebar_position:4},a="Lemon.Server.middleware",i={unversionedId:"api-reference/Lemon-Server-middleware",id:"api-reference/Lemon-Server-middleware",title:"Lemon.Server.middleware",description:"The middleware module",source:"@site/docs/api-reference/Lemon-Server-middleware.md",sourceDirName:"api-reference",slug:"/api-reference/Lemon-Server-middleware",permalink:"/Lemon/docs/next/api-reference/Lemon-Server-middleware",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/edit/main/website/docs/api-reference/Lemon-Server-middleware.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Lemon.Server.middleware",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Lemon.Server.server",permalink:"/Lemon/docs/next/api-reference/Lemon-Server-server"},next:{title:"Lemon.orm",permalink:"/Lemon/docs/next/api-reference/Lemon-orm"}},s={},p=[{value:"Middleware Class | (self, app)",id:"middleware-class--self-app",level:2},{value:"Attributes, Properties and Functions",id:"attributes-properties-and-functions",level:3}],d={toc:p};function c(e){let{components:r,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lemonservermiddleware"},"Lemon.Server.middleware"),(0,l.kt)("p",null,"The middleware module"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'1 | from Lemon.components import Component\n2 | from Lemon.Server import server, middleware\n3 | \n4 | app = server.Server(None)\n5 |\n6 | class middleware_example(middleware):\n7 |     def process_request(self, req):\n8 |         print("Despatching ->", req.url)\n9 | \n10|     def process_response(self, req, res):\n11|         print("Despatched", req.url)\n12|\n13|app.add_middleware(middleware_example)\n')),(0,l.kt)("h2",{id:"middleware-class--self-app"},"Middleware ","[Class]"," | (self, app)"),(0,l.kt)("p",null,"The middleware base class"),(0,l.kt)("h3",{id:"attributes-properties-and-functions"},"Attributes, Properties and Functions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"add-function--self-middleware_cls--developer-function-"},"add ","[Function]"," | (self, middleware_cls) < Developer-Function >"))),(0,l.kt)("p",null,"Adds a middleware."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"process_request-function--self-req"},"process_request ","[Function]"," | (self, req)"))),(0,l.kt)("p",null,"Process's the middleware's requests"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"line 6~8 on example")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"process_response-function--self-req"},"process_response ","[Function]"," | (self, req)"))),(0,l.kt)("p",null,"Process's the middleware before sending back the response"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"line 10~11 on example")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("h4",{parentName:"li",id:"handle_request-function--self-req-res--developer-function-"},"handle_request ","[Function]"," | (self, req, res) < Developer-Function >"))),(0,l.kt)("p",null,"Handles Request that the class receives."))}c.isMDXComponent=!0}}]);