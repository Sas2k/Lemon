"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[1906],{3905:(A,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var e=n(7294);function r(A,t,n){return t in A?Object.defineProperty(A,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[t]=n,A}function a(A,t){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(A);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),n.push.apply(n,e)}return n}function o(A){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(A,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(n,t))}))}return A}function p(A,t){if(null==A)return{};var n,e,r=function(A,t){if(null==A)return{};var n,e,r={},a=Object.keys(A);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||(r[n]=A[n]);return r}(A,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(e=0;e<a.length;e++)n=a[e],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(r[n]=A[n])}return r}var l=e.createContext({}),i=function(A){var t=e.useContext(l),n=t;return A&&(n="function"==typeof A?A(t):o(o({},t),A)),n},u=function(A){var t=i(A.components);return e.createElement(l.Provider,{value:t},A.children)},c={inlineCode:"code",wrapper:function(A){var t=A.children;return e.createElement(e.Fragment,{},t)}},m=e.forwardRef((function(A,t){var n=A.components,r=A.mdxType,a=A.originalType,l=A.parentName,u=p(A,["components","mdxType","originalType","parentName"]),m=i(n),f=r,s=m["".concat(l,".").concat(f)]||m[f]||c[f]||a;return n?e.createElement(s,o(o({ref:t},u),{},{components:n})):e.createElement(s,o({ref:t},u))}));function f(A,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof A||r){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=A,p.mdxType="string"==typeof A?A:r,o[1]=p;for(var i=2;i<a;i++)o[i]=n[i];return e.createElement.apply(null,o)}return e.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4292:(A,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var e=n(7462),r=(n(7294),n(3905));const a={},o="Tutorial Part 5: Styling the blog and finalizing.",p={unversionedId:"tutorial/tutorial-part-5",id:"version-1.3.0/tutorial/tutorial-part-5",title:"Tutorial Part 5: Styling the blog and finalizing.",description:"In this part we're going to style the posts.",source:"@site/versioned_docs/version-1.3.0/tutorial/tutorial-part-5.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-part-5",permalink:"/Lemon/docs/tutorial/tutorial-part-5",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/edit/main/website/versioned_docs/version-1.3.0/tutorial/tutorial-part-5.md",tags:[],version:"1.3.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Part 4: Storing the requests and Displaying them as Posts",permalink:"/Lemon/docs/tutorial/tutorial-part-4"}},l={},i=[],u={toc:i};function c(A){let{components:t,...a}=A;return(0,r.kt)("wrapper",(0,e.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-part-5-styling-the-blog-and-finalizing"},"Tutorial Part 5: Styling the blog and finalizing."),(0,r.kt)("p",null,"In this part we're going to style the posts."),(0,r.kt)("p",null,"Now let's delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"JS")," folder, but let's keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"CSS")," Folder."),(0,r.kt)("p",null,"Now let's create a ",(0,r.kt)("inlineCode",{parentName:"p"},"style.css"),"."),(0,r.kt)("p",null,"Add this CSS code to style it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"* {\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size: 1.2rem;\n    color: #333;\n    line-height: 1.5;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #ffffff;\n}\n\nh1 {\n    font-size: 3rem;\n    line-height: 1.2;\n    margin-bottom: 1rem;\n}\n\nh2 {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n}\n\nh3 {\n    font-size: 1.5rem;\n    margin-bottom: 1rem;\n    color: #ffa;\n}\n\np {\n    margin-bottom: 1rem;\n}\n")),(0,r.kt)("p",null,"now in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.py")," file let's change the ",(0,r.kt)("inlineCode",{parentName:"p"},"Root"),", to add the CSS file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'Root = Component("HTTP-Blog", stylesheet="public/css/style.css")\n')),(0,r.kt)("p",null,"Now run the app and see the page now."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"blog-output",src:n(7526).Z,width:"333",height:"259"})),(0,r.kt)("p",null,"And that's about it."),(0,r.kt)("p",null,"A fully functioning app in Lemon \ud83c\udf4b."),(0,r.kt)("p",null,"Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Sas2k/HTTP-Blog"},"https://github.com/Sas2k/HTTP-Blog")))}c.isMDXComponent=!0},7526:(A,t,n)=>{n.d(t,{Z:()=>e});const e="data:image/png;base64,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"}}]);