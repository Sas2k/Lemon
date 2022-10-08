"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[4195],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),l=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,s=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=l(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return n?r.createElement(h,a(a({ref:e},u),{},{components:n})):r.createElement(h,a({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=n.length,a=new Array(s);a[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1301:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={},a="Tutorial Part 4: Storing the requests and Displaying them as Posts",i={unversionedId:"tutorial/tutorial-part-4",id:"tutorial/tutorial-part-4",title:"Tutorial Part 4: Storing the requests and Displaying them as Posts",description:"In this part, we're going to store the requests, and then we're going to display them. as pages.",source:"@site/docs/tutorial/tutorial-part-4.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-part-4",permalink:"/Lemon/docs/next/tutorial/tutorial-part-4",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/edit/main/website/docs/tutorial/tutorial-part-4.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Part 3: Building the api.",permalink:"/Lemon/docs/next/tutorial/tutorial-part-3"},next:{title:"Tutorial Part 5: Styling the blog and finalizing.",permalink:"/Lemon/docs/next/tutorial/tutorial-part-5"}},p={},l=[],u={toc:l};function d(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-part-4-storing-the-requests-and-displaying-them-as-posts"},"Tutorial Part 4: Storing the requests and Displaying them as Posts"),(0,o.kt)("p",null,"In this part, we're going to store the requests, and then we're going to display them. as pages."),(0,o.kt)("p",null,"To store them, we're going to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'posts = [{"title": "Hello World", "author": "Lemon", "body": "This is a test post"}]\n')),(0,o.kt)("p",null,"now let's change the return of the item function in the App Component to this,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"return f\"<BlogPost title={props['title']} author={props['author']} body={props['body']}/>\"\n")),(0,o.kt)("p",null,'also let\'s change the "/" route to "/{post_id}" and add these.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@app.route("/{post_id}")\ndef home(request, response, post_id):\n    if post_id.isdigit():\n        try:\n            post = posts[int(post_id)-1]\n            response.text = Root.render(f\'<App title={post["title"]} author={post["author"]} body={post["body"]}/>\')\n        except IndexError:\n            response.status_code = 404\n            response.text = "<h3>Post not found</h3>"\n    else:\n        response.text = "<h3>This id should be an integer, Not String</h3>"\n')),(0,o.kt)("p",null,"also remember the API routes, let's change them like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@app.route("/api/get/{post_id}") # the {id} is an argument in the url.\ndef api_get(request, response, post_id):\n    #for now let\'s just return the post_id\n    response.text = posts[post_id]\n\n@app.route(\'/api/post/\')\nclass api_post():\n    def get(self, req, res):\n        res.text = "method not allowed"\n    def post(self, req, res):\n        json = req.json\n        if json["title"] and json["body"] and json["author"] and json["id"]:\n            post_id = int(json["id"])\n            if post_id not in posts:\n                posts[post_id] = json\n                res.text = "success"\n            else:\n                posts.append(json)\n                res.text = "success"\n        else:\n            res.text = "failed"\n')),(0,o.kt)("p",null,"And now run, the app."),(0,o.kt)("p",null,"Try going to. https://localhost:8000/1"),(0,o.kt)("p",null,"and you should see the Test Post."),(0,o.kt)("p",null,"you can create a your own posts by sending post requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/post")),(0,o.kt)("p",null,"here is an example body"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "title": "Hello World",\n    "author": "Sas2k",\n    "body": "Lorem Ispum Dorem Alamet"\n}\n')),(0,o.kt)("p",null,"And that's about it."),(0,o.kt)("p",null,"We've created a fully functioning App in Lemon."),(0,o.kt)("p",null,"Now let's move to part 5, to style the blog."))}d.isMDXComponent=!0}}]);