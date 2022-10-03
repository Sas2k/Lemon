"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[403],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={title:"Lemon vs React",sidebar_position:4},i="Lemon vs React.",s={unversionedId:"lemon-vs-react",id:"version-1.0.0/lemon-vs-react",title:"Lemon vs React",description:"In this page we're going to talk about the differences of Lemon and React.",source:"@site/versioned_docs/version-1.0.0/lemon-vs-react.md",sourceDirName:".",slug:"/lemon-vs-react",permalink:"/Lemon/docs/lemon-vs-react",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/tree/main/docs/Lemon-Docs/versioned_docs/version-1.0.0/lemon-vs-react.md",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{title:"Lemon vs React",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Hello World!",permalink:"/Lemon/docs/Hello-World"},next:{title:"Intro To Tutorial",permalink:"/Lemon/docs/tutorial/intro-to-tutorial"}},l={},c=[{value:"TLDR; What is React?",id:"tldr-what-is-react",level:2},{value:"Components",id:"components",level:2},{value:"Lemon Python (v1.0.0)",id:"lemon-python-v100",level:3},{value:"React (JSX)",id:"react-jsx",level:3},{value:"Reactivity",id:"reactivity",level:2},{value:"Lemon (v1.0.0)",id:"lemon-v100",level:3},{value:"React",id:"react",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lemon-vs-react"},"Lemon vs React."),(0,r.kt)("p",null,"In this page we're going to talk about the differences of Lemon and React."),(0,r.kt)("h2",{id:"tldr-what-is-react"},"TLDR; What is React?"),(0,r.kt)("p",null,"React is a front-end framework for JavaScript, it's used to build Interactive UIs. (",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"Website"),")"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now let's compare them feature at a time")),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"Now let's talk about components, Both of the libraries use Components."),(0,r.kt)("h3",{id:"lemon-python-v100"},"Lemon ","[Python]"," (v1.0.0)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class HelloMessage(Component):\n    name = "HelloMessage"\n    def item(props:dict):\n        return f"<p>Hello! {props[\'name\']}"\n\n@app.route("/") #don\'t mind the app.route or the index function there just there to route the sever\ndef index(request, response):\n    response.text = root.render("<HelloMessage name=\'Tyler\'/>")\n')),(0,r.kt)("h3",{id:"react-jsx"},"React (JSX)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'class HelloMessage extends React.Component {\n    render(){\n        return <div>Hello {this.props.name}</name>;\n    };\n};\n\nroot.render(<HelloMessage name="tyler"/>)\n')),(0,r.kt)("p",null,"The first one is in Lemon(Python),\nThe Second one is in React (JSX)"),(0,r.kt)("p",null,"Here we have a simple component created in both.\nBoth of them are very similar. Except for the fact that since React uses JSX, you can write HTML directly."),(0,r.kt)("h2",{id:"reactivity"},"Reactivity"),(0,r.kt)("p",null,"what reactivity does is when the information, variables change, the render changes automatically."),(0,r.kt)("p",null,"here is a To-Do example in both Lemon and React."),(0,r.kt)("h3",{id:"lemon-v100"},"Lemon (v1.0.0)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"app.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'class ToDo(Component):\n    name = \'ToDo\'\n    def item(props:dict):\n        return f"""\n        <div>\n            <Input text="Enter Todo Item" id="Text"/>\n            <p id="Todo-List"></p>\n        </div>\n        """\n\n@app.route("/")\ndef index(request, response):\n    response.text = root.render("<ToDo/>")\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"public/index.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let todoitems = () => {\n    data.message = document.getElementById("Text").value;\n};\n\nlet updateToDo = () => {\n    document.getElementById("Todo-List").text += data.message + \'\\n\';\n};\n\nwatcher(updateToDo);\n')),(0,r.kt)("h3",{id:"react"},"React"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"taken from homepage example.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"class TodoApp extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { items: [], text: '' };\n    this.handleChange = this.handleChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  render() {\n    return (\n      <div>\n        <h3>TODO</h3>\n        <TodoList items={this.state.items} />\n        <form onSubmit={this.handleSubmit}>\n          <label htmlFor=\"new-todo\">\n            What needs to be done?\n          </label>\n          <input\n            id=\"new-todo\"\n            onChange={this.handleChange}\n            value={this.state.text}\n          />\n          <button>\n            Add #{this.state.items.length + 1}\n          </button>\n        </form>\n      </div>\n    );\n  }\n\n  handleChange(e) {\n    this.setState({ text: e.target.value });\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n    if (this.state.text.length === 0) {\n      return;\n    }\n    const newItem = {\n      text: this.state.text,\n      id: Date.now()\n    };\n    this.setState(state => ({\n      items: state.items.concat(newItem),\n      text: ''\n    }));\n  }\n}\n\nclass TodoList extends React.Component {\n  render() {\n    return (\n      <ul>\n        {this.props.items.map(item => (\n          <li key={item.id}>{item.text}</li>\n        ))}\n      </ul>\n    );\n  }\n}\n\nroot.render(<TodoApp />);\n")),(0,r.kt)("p",null,"Here as we can see, for lemon reactivity happens through a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"watcher")," which watched the function and it's variables to change, the ",(0,r.kt)("inlineCode",{parentName:"p"},"data.message")," are the values that would change."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"And that's about it, for the differences... (I might add more soon...)")))}d.isMDXComponent=!0}}]);