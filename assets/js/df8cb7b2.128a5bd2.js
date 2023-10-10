"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[1036],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),i=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=i(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var r=t(7462),o=(t(7294),t(3905));const a={title:"Version 1.3.0 Release \ud83e\uddea",authors:"Sas2k"},s="Version 1.3.0 \ud83e\uddea",l={permalink:"/Lemon/blog/2022/10/07/Version-1-3-0-Update",editUrl:"https://github.com/Sas2k/Lemon/tree/main/docs/Lemon-Docs/blog/2022-10-07-Version-1-3-0-Update.md",source:"@site/blog/2022-10-07-Version-1-3-0-Update.md",title:"Version 1.3.0 Release \ud83e\uddea",description:"Changes",date:"2022-10-07T00:00:00.000Z",formattedDate:"October 7, 2022",tags:[],readingTime:.775,hasTruncateMarker:!1,authors:[{name:"Sasen Perera",title:"Maintainer and Creator of Lemon \ud83c\udf4b",url:"https://github.com/sas2k",imageURL:"https://github.com/sas2k.png",key:"Sas2k"}],frontMatter:{title:"Version 1.3.0 Release \ud83e\uddea",authors:"Sas2k"},nextItem:{title:"Version 1.2.0 Release \ud83d\udcbe",permalink:"/Lemon/blog/2022/10/04/Version-1-2-1-Update"}},p={authorsImageUrls:[void 0]},i=[{value:"Changes",id:"changes",level:2}],c={toc:i};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"changes"},"Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added Test Fixtures for server.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import pytest\n\ndef client_can_send_requests(server, client):\n    RESPONSE_TEXT = "THIS IS COOL"\n    @server.route("/test")\n    def test(request, response):\n        response.text = RESPONSE_TEXT\n\n    assert client.get("http://testserver/hey").text == RESPONSE_TEXT\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Added Exception Handler (the text you get when a server gets an error)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class ExceptionComponent(Component):\n    name = "ExceptionComponent"\n\n    def item(props: dict):\n        return """\n        <style>\n            body {\n                background-color: #000;\n                color: #fff;\n            }\n            h1 {\n                font-size: 3rem;\n                font-weight: 300;\n                color: #0af0fa;\n            }\n            h2 {\n                font-size: 2rem;\n                font-weight: 300;\n            }\n            p {\n                font-size: 1.5rem;\n                font-weight: 300;\n            }\n        </style>\n        <div class=\'container\'>\n            <h1>001010100101101010010100101</h1>\n            <h2>Looks like something went wrong</h2>\n            <p>Please try again later......</p>\n        </div>\n        """\n\ndef custom_exception_handler(request, response, exception_cls):\n    response.text = root.render("<ExceptionComponent/>")\n\napp.add_exception_handler(custom_exception_handler)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Django Like Routing (since of this, blueprinting is now achievable: check ",(0,o.kt)("inlineCode",{parentName:"li"},"examples/Lemon-App"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from Lemon.Server import server\n\napp = server.Server(None)\n\ndef index(request, response):\n    response.text = "Hello, world!"\n\napp.add_route("/", index)\n\napp.run()\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated ",(0,o.kt)("inlineCode",{parentName:"li"},"create-react-app"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sas2k/Lemon/compare/V.1.2.6...V.1.3.0"},"https://github.com/Sas2k/Lemon/compare/V.1.2.6...V.1.3.0")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Until Next Time Good Day people!"))))}u.isMDXComponent=!0}}]);