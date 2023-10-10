"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[1909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),a=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=a(e.components);return o.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=a(t),d=r,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||s;return t?o.createElement(f,i(i({ref:n},c),{},{components:t})):o.createElement(f,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var a=2;a<s;a++)i[a]=t[a];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>a});var o=t(7462),r=(t(7294),t(3905));const s={title:"Lemon.components",sidebar_position:1},i="Lemon.components",p={unversionedId:"api-reference/Lemon-components",id:"version-1.3.5/api-reference/Lemon-components",title:"Lemon.components",description:"The module responsible for initializing and creating components.",source:"@site/versioned_docs/version-1.3.5/api-reference/Lemon-components.md",sourceDirName:"api-reference",slug:"/api-reference/Lemon-components",permalink:"/Lemon/docs/1.3.5/api-reference/Lemon-components",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/edit/main/website/versioned_docs/version-1.3.5/api-reference/Lemon-components.md",tags:[],version:"1.3.5",sidebarPosition:1,frontMatter:{title:"Lemon.components",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Lemon vs React",permalink:"/Lemon/docs/1.3.5/lemon-vs-react"},next:{title:"Lemon.Server",permalink:"/Lemon/docs/1.3.5/api-reference/Lemon-Server"}},l={},a=[{value:"Component Class | (self, name, stylesheet=None, script=None)",id:"component-class--self-name-stylesheetnone-scriptnone",level:2},{value:"Attributes, Properties and Functions",id:"attributes-properties-and-functions",level:3},{value:"add Function | (self, components: list or object)",id:"add-function--self-components-list-or-object",level:4},{value:"parse Function | (self, Root, prop: list) | &lt; Developer-Function &gt;",id:"parse-function--self-root-prop-list---developer-function-",level:4},{value:"render Function | (self, app: str)",id:"render-function--self-app-str",level:4},{value:"item Function | (self, props: dict)",id:"item-function--self-props-dict",level:4}],c={toc:a};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lemoncomponents"},"Lemon.components"),(0,r.kt)("p",null,"The module responsible for initializing and creating components."),(0,r.kt)("h2",{id:"component-class--self-name-stylesheetnone-scriptnone"},"Component ","[Class]"," | (self, name, stylesheet=None, script=None)"),(0,r.kt)("p",null,"The base component class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class TestComponent(Component):\n    name = "TestComponent"\n\n    def item(props: dict):\n        return """\n        <h1>Hello World!</h1>\n        <p>Lorem ispum</p>\n        """\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When naming Components, Always make the first letter Capital as if your writing names.")),(0,r.kt)("h3",{id:"attributes-properties-and-functions"},"Attributes, Properties and Functions"),(0,r.kt)("h4",{id:"add-function--self-components-list-or-object"},"add ","[Function]"," | (self, components: list or object)"),(0,r.kt)("p",null,"Adds a component(s) to a list. to parse."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Root.add(\n    [\n        Component,\n        Testing,\n        WarningComponent\n    ]\n)\n")),(0,r.kt)("h4",{id:"parse-function--self-root-prop-list---developer-function-"},"parse ","[Function]"," | (self, Root, prop: list) | < Developer-Function >"),(0,r.kt)("p",null,"The function that parses the string."),(0,r.kt)("h4",{id:"render-function--self-app-str"},"render ","[Function]"," | (self, app: str)"),(0,r.kt)("p",null,"The function that will render the component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'response.text = Root.render("<WarningComponent/>")\n')),(0,r.kt)("h4",{id:"item-function--self-props-dict"},"item ","[Function]"," | (self, props: dict)"),(0,r.kt)("p",null,"The function where the components html/elements are present"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# must be inside your component class.\ndef item(props: dict):\n    return f"""\n    <h1>{props[\'title\']}</h1>\n    <p>{props[\'body\']}</p>\n    """\n')))}m.isMDXComponent=!0}}]);