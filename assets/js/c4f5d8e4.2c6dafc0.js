"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[193],{5600:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var l=n(7294),a=n(6010),r=n(9960),c=n(2263),o=n(215),s=n(7462);const m="features_t9lD",i=[{title:"Built In Python",description:l.createElement(l.Fragment,null,"Lemon is written in Python, and is designed like React and Vue. It's easy to learn and use.")},{title:"Component Based",description:l.createElement(l.Fragment,null,"Lemon is component based, all of the page is designed in components to render and control the page.")},{title:"Full-Stack",description:l.createElement(l.Fragment,null,"Lemon is a full-stack framework, it has a built-in server and database, and it's easy to use.")}];function d(e){let{title:t,description:n}=e;return l.createElement("div",{className:(0,a.Z)("col col--4")},l.createElement("div",{className:"text--center padding-horiz--md"},l.createElement("h3",null,t),l.createElement("p",null,n)))}function u(){return l.createElement("section",{className:m},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},i.map(((e,t)=>l.createElement(d,(0,s.Z)({key:t},e)))))))}const p="codeBlock_ERO2",E="textBlock_pFXz",h="yellow_block_JlO2",g="green_block_oAgq";var f=n(5660),N=n.n(f);function v(e){let{code:t,language:n}=e;return(0,l.useEffect)((()=>{N().highlightAll()}),[]),l.createElement("div",{className:"Code "+p},l.createElement("pre",null,l.createElement("code",{className:`language-${n}`},t)))}function k(e){return l.createElement(l.Fragment,null,l.createElement("div",{className:h},l.createElement("div",{className:E},l.createElement("h3",null,"Components made easy."),l.createElement("p",null,"Components are isolated elements which have their own properties and states")),l.createElement(v,{language:"python",code:'class MyComponent(Component):\n    name = "MyComponent"\n    def item(props: dict):\n        return f"<div>Hello {props[\'name\']}!</div>"'})),l.createElement("div",{className:g},l.createElement("div",{className:E},l.createElement("h3",null,"Backend intertwined with Front-end."),l.createElement("p",null,"the backend is seamlessly connected with the backend, So you can connect to the DB while fixing the UI \ud83d\udee0")),l.createElement(v,{language:"python",code:"@app.route(\"/api\")\nclass api:\n    def get(self, req, res):\n        res.text = Root.render(\"<MyComponent name='Alfred'/>\")\n    def post(self, req, res):\n        name = req.json['name']\n        orm.insert('Person', [['Names'], [name]])"})))}function y(e){return l.createElement(l.Fragment,null,l.createElement("div",null,l.createElement(k,null)))}const b="heroBanner_qdFl",_="buttons_AeoN";function w(){const{siteConfig:e}=(0,c.Z)();return l.createElement("header",{className:(0,a.Z)("hero hero--primary",b)},l.createElement("div",{className:"container"},l.createElement("h1",{className:"hero__title"},e.title),l.createElement("p",{className:"hero__subtitle"},e.tagline),l.createElement("div",{className:_},l.createElement(r.Z,{className:"button button--secondary button--lg",to:"/docs/lemon-in-3min"},"Lemon Tutorial -3min \u23f1\ufe0f"))))}function C(){const{siteConfig:e}=(0,c.Z)();return l.createElement(o.Z,{title:`${e.title}`,description:"The Website and Docs for Lemon \ud83c\udf4b"},l.createElement(w,null),l.createElement("main",null,l.createElement(u,null),l.createElement(y,null)))}}}]);