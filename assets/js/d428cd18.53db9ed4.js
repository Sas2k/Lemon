"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[7637],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return n?o.createElement(h,l(l({ref:t},u),{},{components:n})):o.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},l="Part 2: Writing the basic components.",i={unversionedId:"tutorial/tutorial-part-2",id:"tutorial/tutorial-part-2",title:"Part 2: Writing the basic components.",description:"now, let's create a directory(which is a fancy term for a folder.) and name it Components",source:"@site/docs/tutorial/tutorial-part-2.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-part-2",permalink:"/Lemon/docs/next/tutorial/tutorial-part-2",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/edit/main/website/docs/tutorial/tutorial-part-2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Part 1: Setting things up.",permalink:"/Lemon/docs/next/tutorial/tutorial-part-1"},next:{title:"Part 3: Building the api.",permalink:"/Lemon/docs/next/tutorial/tutorial-part-3"}},p={},c=[{value:"Hello World",id:"hello-world",level:2},{value:"Your-Name",id:"your-name",level:3}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"part-2-writing-the-basic-components"},"Part 2: Writing the basic components."),(0,r.kt)("p",null,"now, let's create a directory(which is a fancy term for a folder.) and name it ",(0,r.kt)("inlineCode",{parentName:"p"},"Components")),(0,r.kt)("p",null,"in this folder we're going to create a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"components.py")),(0,r.kt)("p",null,"now we're going to write a basic component which has the title, the body and the author."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Now before we write anything let me quickly give you the structure of a component."),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class thing(Component):\n  name = "thing" # the name here will the name going to be used in `root.render()`\n  def item(props: dict):\n      return "<p>THING</p>" # the item function is where the html code is presented.\n'))),(0,r.kt)("p",null,"now firstly we need to import the ",(0,r.kt)("inlineCode",{parentName:"p"},"Component")," class, which is the base class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from Lemon.components import Component\n")),(0,r.kt)("p",null,"then let's write a basic post component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class BlogPost(Component):\n    name = "BlogPost"\n\n    def item(props: dict):\n        return f"""\n        <div>\n            <h2>{props[\'title\']}</h2>\n            <h3>By {props[\'author\']}</h3>\n            <br>\n            <p>{props[\'body\']}</p>\n        </div>\n        """\n')),(0,r.kt)("p",null,"(you can change it however you like.)"),(0,r.kt)("p",null,"now in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.py")," file import it like this.\n",(0,r.kt)("inlineCode",{parentName:"p"},"from Components.components import BlogPost")),(0,r.kt)("p",null,"then change the Root.add function like this,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Root.add(\n    [\n        App,\n        BlogPost\n    ]\n)\n")),(0,r.kt)("p",null,'now you can test it out by removing the "Hello World" from the App components ',(0,r.kt)("inlineCode",{parentName:"p"},"item")," function, and adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPost")," one."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<BlogPost title='Hello World' author='Your-Name' body='Lorem Ispum Dorem Almet why is this used everywhere?'/>")),(0,r.kt)("p",null,"(above is an example)"),(0,r.kt)("p",null,"Now if you run it, you should see something like below."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hello-world"},"Hello World"),(0,r.kt)("h3",{id:"your-name"},"Your-Name"),(0,r.kt)("p",null,"Lorem Ispum Dorem Almet why is this used everywhere?"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, that the component is created an working let's move onto part 3."))}s.isMDXComponent=!0}}]);