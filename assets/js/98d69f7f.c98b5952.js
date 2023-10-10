"use strict";(self.webpackChunklemon_docs=self.webpackChunklemon_docs||[]).push([[4812],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=l,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return t?a.createElement(f,r(r({ref:n},u),{},{components:t})):a.createElement(f,r({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9513:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const o={title:"Lemon.orm.DBManager",sidebar_position:6},r="Lemon.orm.DBManager",s={unversionedId:"api-reference/Lemon-orm-DBManager",id:"version-1.3.5/api-reference/Lemon-orm-DBManager",title:"Lemon.orm.DBManager",description:"The Database Manager",source:"@site/versioned_docs/version-1.3.5/api-reference/Lemon-orm-DBManager.md",sourceDirName:"api-reference",slug:"/api-reference/Lemon-orm-DBManager",permalink:"/Lemon/docs/1.3.5/api-reference/Lemon-orm-DBManager",draft:!1,editUrl:"https://github.com/Sas2k/Lemon/edit/main/website/versioned_docs/version-1.3.5/api-reference/Lemon-orm-DBManager.md",tags:[],version:"1.3.5",sidebarPosition:6,frontMatter:{title:"Lemon.orm.DBManager",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Lemon.orm",permalink:"/Lemon/docs/1.3.5/api-reference/Lemon-orm"},next:{title:"Lemon.orm.migrations",permalink:"/Lemon/docs/1.3.5/api-reference/Lemon-orm-migrations"}},i={},c=[{value:"SQLConnectionManager Class | (self, filename) &lt; Developer-Class &gt;",id:"sqlconnectionmanager-class--self-filename--developer-class-",level:2},{value:"Attributes, Properties and Functions",id:"attributes-properties-and-functions",level:3},{value:"commit Decorator(Functions) | (operation)",id:"commit-decoratorfunctions--operation",level:4},{value:"create_table Function | (self, tablename, fields)",id:"create_table-function--self-tablename-fields",level:4},{value:"show_tables Property(Function) | (self)",id:"show_tables-propertyfunction--self",level:4},{value:"SqliteManager Class | (self, filename)",id:"sqlitemanager-class--self-filename",level:2},{value:"commit Decorator(function) | (operation) &lt; Developer-Function &gt;",id:"commit-decoratorfunction--operation--developer-function-",level:3},{value:"create_table Function | (self, tablename, columns)",id:"create_table-function--self-tablename-columns",level:3},{value:"insert Function | (self, tablename, columns, values)",id:"insert-function--self-tablename-columns-values",level:3},{value:"select Function | (self, tablename, columns)",id:"select-function--self-tablename-columns",level:3},{value:"delete Function | (self, tablename, conditions, logic=&quot;AND&quot;)",id:"delete-function--self-tablename-conditions-logicand",level:3},{value:"update Function | (self, tablename, columns, values)",id:"update-function--self-tablename-columns-values",level:3},{value:"base Class | (self)",id:"base-class--self",level:2},{value:"baseModel Class | (self)",id:"basemodel-class--self",level:2},{value:"MetaModel Class | (self) &lt; Developer-Class &gt;",id:"metamodel-class--self--developer-class-",level:2}],u={toc:c};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lemonormdbmanager"},"Lemon.orm.DBManager"),(0,l.kt)("p",null,"The Database Manager"),(0,l.kt)("h2",{id:"sqlconnectionmanager-class--self-filename--developer-class-"},"SQLConnectionManager ","[Class]"," | (self, filename) < Developer-Class >"),(0,l.kt)("p",null,"The SQLConnectionManager used in migrations"),(0,l.kt)("h3",{id:"attributes-properties-and-functions"},"Attributes, Properties and Functions"),(0,l.kt)("h4",{id:"commit-decoratorfunctions--operation"},"commit ","[Decorator(Functions)]"," | (operation)"),(0,l.kt)("p",null,"Commits a query."),(0,l.kt)("h4",{id:"create_table-function--self-tablename-fields"},"create_table ","[Function]"," | (self, tablename, fields)"),(0,l.kt)("p",null,"creates a table"),(0,l.kt)("h4",{id:"show_tables-propertyfunction--self"},"show_tables ","[Property(Function)]"," | (self)"),(0,l.kt)("p",null,"shows the tables in the database"),(0,l.kt)("h2",{id:"sqlitemanager-class--self-filename"},"SqliteManager ","[Class]"," | (self, filename)"),(0,l.kt)("p",null,"The SQLite Manager."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'from Lemon.orm.DBManager import SqliteManager\n\nsql = SqliteManager("model.db")\n\nsql.select("authors", ["name", "age"])\n\nsql.insert("authors", ["Paul", "age"], ["Paul", "25"])\n\n')),(0,l.kt)("h3",{id:"commit-decoratorfunction--operation--developer-function-"},"commit ","[Decorator(function)]"," | (operation) < Developer-Function >"),(0,l.kt)("p",null,"Commits the query."),(0,l.kt)("h3",{id:"create_table-function--self-tablename-columns"},"create_table ","[Function]"," | (self, tablename, columns)"),(0,l.kt)("p",null,"Creates a table in the Database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'sql = SqliteManager("model.db")\n\nsql.create_table("authors", ["name", "age"])\n')),(0,l.kt)("h3",{id:"insert-function--self-tablename-columns-values"},"insert ","[Function]"," | (self, tablename, columns, values)"),(0,l.kt)("p",null,"inserts data to columns"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'sql = SqliteManager("model.db")\n\nsql.insert("authors", ["name", "age"], ["Paul", "25"])\n')),(0,l.kt)("h3",{id:"select-function--self-tablename-columns"},"select ","[Function]"," | (self, tablename, columns)"),(0,l.kt)("p",null,"selects columns from the table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'sql = SqliteManager("model.db")\n\nsql.select("authors", ["name", "age"])\n')),(0,l.kt)("h3",{id:"delete-function--self-tablename-conditions-logicand"},"delete ","[Function]",' | (self, tablename, conditions, logic="AND")'),(0,l.kt)("p",null,"Deletes a record from the table which matches the condition."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'sql = SqliteManager("model.db")\n\nsql.delete("authors", ["name=\'paul\'", "age=25"], "AND")\n')),(0,l.kt)("h3",{id:"update-function--self-tablename-columns-values"},"update ","[Function]"," | (self, tablename, columns, values)"),(0,l.kt)("p",null,"Update values in the Database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'sql = SqliteManager("model.db")\n\nsql.update("authors", ["name", "age"], ["Paul", "22"])\n')),(0,l.kt)("h2",{id:"base-class--self"},"base ","[Class]"," | (self)"),(0,l.kt)("p",null,"The Base Class to be inherited."),(0,l.kt)("h2",{id:"basemodel-class--self"},"baseModel ","[Class]"," | (self)"),(0,l.kt)("p",null,"The Base Model to be inherited"),(0,l.kt)("h2",{id:"metamodel-class--self--developer-class-"},"MetaModel ","[Class]"," | (self) < Developer-Class >"),(0,l.kt)("p",null,"The MetaModel Class"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"base"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"baseModel")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"MetaModel")," are used in the migrations.")))}m.isMDXComponent=!0}}]);