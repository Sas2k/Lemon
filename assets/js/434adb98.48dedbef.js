"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(h,p(p({ref:t},s),{},{components:n})):r.createElement(h,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},p="Tutorial Part 1: Setting things up.",l={unversionedId:"tutorial/tutorial-part-1",id:"tutorial/tutorial-part-1",title:"Tutorial Part 1: Setting things up.",description:"Now, let's set thing up.",source:"@site/docs/tutorial/tutorial-part-1.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-part-1",permalink:"/Lemon/docs/next/tutorial/tutorial-part-1",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/tree/main/docs/Lemon-Docs/docs/tutorial/tutorial-part-1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro To Tutorial",permalink:"/Lemon/docs/next/tutorial/intro-to-tutorial"},next:{title:"Tutorial Part 2: Writing the basic components.",permalink:"/Lemon/docs/next/tutorial/tutorial-part-2"}},i={},u=[],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-part-1-setting-things-up"},"Tutorial Part 1: Setting things up."),(0,o.kt)("p",null,"Now, let's set thing up."),(0,o.kt)("p",null,"firstly, let's  run the usual ",(0,o.kt)("inlineCode",{parentName:"p"},"create-lemon-app")," command to generate the boilerplate code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"create-lemon-app http-blog\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"App created @ /http-blog/\n")),(0,o.kt)("p",null,"then move into it with ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd http-blog\n")),(0,o.kt)("p",null,"then the directory should look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dir"},"http-blog/\n    - models/\n        - model.py\n    -public/\n        - css/\n            - style.css\n        - js/\n            - script.js\n    - app.py\n    - base.py\n    - README.md\n")),(0,o.kt)("p",null,"now create a virtual environment "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cmd"},"#with venv\npython -m venv venv\n\n#with virtualenv\npip install virtualenv #if you haven't already installed it before\npython -m virtualenv venv\n")),(0,o.kt)("p",null,"After this install ",(0,o.kt)("inlineCode",{parentName:"p"},"Lemon")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pip install Lemon-Library\n")),(0,o.kt)("p",null,"then run the ",(0,o.kt)("inlineCode",{parentName:"p"},"app.py")," to see if everything is correct."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python app.py")),(0,o.kt)("p",null,"if the app is running then visit localhost:8000, to see the app running."),(0,o.kt)("p",null,"then press ",(0,o.kt)("inlineCode",{parentName:"p"},"control + c")," to stop."),(0,o.kt)("p",null,"now go ahead and delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"script.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"style.css")," which is inside the public. (since we don't need it yet.)"),(0,o.kt)("p",null,"Now go into the app.py"),(0,o.kt)("p",null,"and replace the file with this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from Lemon.components import Component\nfrom Lemon.Server.server import Server\n\nRoot = Component("Lemon")\napp = Server(static_dir="public")\n\nclass App(Component):\n    name = "App"\n    def item(props: dict):\n        return "Hello World"\n\nRoot.add(\n    [\n        App\n    ]\n)\n\n@app.route("/")\ndef home(request, response):\n    response.text = Root.render(\'<App/>\')\n\napp.run()\n\n')),(0,o.kt)("p",null,"Here, we have removed everything unnecessary from the app.\n(We kept the app component since, it will be the main component.)"),(0,o.kt)("p",null,"now if you run it."),(0,o.kt)("p",null,"you will just see a Hello World text on the browser."),(0,o.kt)("p",null,"Now the files are prepped and ready to write the code."),(0,o.kt)("p",null,"Go to Part II."))}c.isMDXComponent=!0}}]);