var ke=Object.defineProperty,$e=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var ne=(e,t,r)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))te.call(t,r)&&ne(e,r,t[r]);if(V)for(var r of V(t))ae.call(t,r)&&ne(e,r,t[r]);return e},D=(e,t)=>$e(e,ve(t));var re=(e,t)=>{var r={};for(var n in e)te.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&V)for(var n of V(e))t.indexOf(n)<0&&ae.call(e,n)&&(r[n]=e[n]);return r};import{a as L,b as De,w as K,p as x,c as Pe,m as O,h as J,d as se,e as N,_ as oe,f as ie,g as xe,o as G,i as Ae,j as Se,k as P,l as Re,n as Le,q as Te,r as ce,s as Ie,t as Me,u as ue,v as je,x as le,y as T,z as a,T as Oe,P as Ue,F as y,A as C,B as E,C as A,D as I,R as Q,E as k,I as M,G as de,H,J as qe,K as Ne,S as ze,L as _e,M as z,N as Ve,O as X,Q as W,U as he,V as pe,W as Ke,X as Je,Y as He,Z as We,$ as Ge}from"./vendor.b3b49239.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}};Qe();const Xe=L([{key:"1",title:"\u9996\u9875"},{key:"2",title:"\u8425\u9500\u6570\u636E\u7BA1\u7406",children:[{key:"2-1",title:"\u5185\u5BB9\u7BA1\u7406",pathname:"/article"},{key:"2-2",title:"\u4E3B\u64AD\u7BA1\u7406",pathname:"/article/new"},{key:"2-3",title:"\u5206\u7C7B\u7BA1\u7406",pathname:"/app/anchor"},{key:"2-4",title:"Tag\u6807\u7B7E\u7BA1\u7406",pathname:"/app/anchor"},{key:"2-5",title:"\u83DC\u5355\u7BA1\u7406",pathname:"/app/anchor"}]},{key:"3",title:"\u8D44\u6E90\u7BA1\u7406",children:[{key:"3-1",title:"\u56FE\u7247",pathname:"/app/content"},{key:"3-2",title:"\u97F3\u9891",pathname:"/app/anchor"},{key:"3-3",title:"\u89C6\u9891",pathname:"/app/anchor"}]},{key:"4",title:"\u7528\u6237\u6570\u636E\u7BA1\u7406",children:[{key:"4-1",title:"\u7528\u6237\u7BA1\u7406",pathname:"/app/content"}]}]),U=L("/api"),Ye=L(5e6);L(0);const Ze=L({1:"\u5BC6\u7801\u9519\u8BEF",2:"token\u9519\u8BEF",10:"\u8D26\u53F7\u5DF2\u88AB\u7981\u7528",11:"\u7535\u8BDD\u53F7\u7801\u683C\u5F0F\u9519\u8BEF",12:"\u7528\u6237\u540D\u5DF2\u5B58\u5728",default:"\u672A\u77E5\u9519\u8BEF"}),et=L({200:"\u670D\u52A1\u5668\u6210\u529F\u8FD4\u56DE\u8BF7\u6C42\u7684\u6570\u636E\u3002",201:"\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u6210\u529F\u3002",202:"\u4E00\u4E2A\u8BF7\u6C42\u5DF2\u7ECF\u8FDB\u5165\u540E\u53F0\u6392\u961F\uFF08\u5F02\u6B65\u4EFB\u52A1\uFF09\u3002",204:"\u5220\u9664\u6570\u636E\u6210\u529F\u3002",400:"\u53D1\u51FA\u7684\u8BF7\u6C42\u6709\u9519\u8BEF\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u65B0\u5EFA\u6216\u4FEE\u6539\u6570\u636E\u7684\u64CD\u4F5C\u3002",401:"\u7528\u6237\u6CA1\u6709\u6743\u9650\uFF08\u4EE4\u724C\u3001\u7528\u6237\u540D\u3001\u5BC6\u7801\u9519\u8BEF\uFF09\u3002",403:"\u7528\u6237\u5F97\u5230\u6388\u6743\uFF0C\u4F46\u662F\u8BBF\u95EE\u662F\u88AB\u7981\u6B62\u7684\u3002",404:"\u53D1\u51FA\u7684\u8BF7\u6C42\u9488\u5BF9\u7684\u662F\u4E0D\u5B58\u5728\u7684\u8BB0\u5F55\uFF0C\u670D\u52A1\u5668\u6CA1\u6709\u8FDB\u884C\u64CD\u4F5C\u3002",406:"\u8BF7\u6C42\u7684\u683C\u5F0F\u4E0D\u53EF\u5F97\u3002",410:"\u8BF7\u6C42\u7684\u8D44\u6E90\u88AB\u6C38\u4E45\u5220\u9664\uFF0C\u4E14\u4E0D\u4F1A\u518D\u5F97\u5230\u7684\u3002",422:"\u5F53\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u53D1\u751F\u4E00\u4E2A\u9A8C\u8BC1\u9519\u8BEF\u3002",500:"\u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u670D\u52A1\u5668\u3002",502:"\u7F51\u5173\u9519\u8BEF\u3002",503:"\u670D\u52A1\u4E0D\u53EF\u7528\uFF0C\u670D\u52A1\u5668\u6682\u65F6\u8FC7\u8F7D\u6216\u7EF4\u62A4\u3002",504:"\u7F51\u5173\u8D85\u65F6\u3002",default:"\u672A\u77E5\u9519\u8BEF"}),S=De.create({baseURL:"",timeout:Ye()}),me=()=>(window.location.href=`${window.location.origin}${window.location.pathname}#/login`,!1);S.interceptors.request.use(e=>(e.headers.token=`${localStorage.getItem("token")}`,e.params=K(it,ut)(x("params",e)),e),()=>{Pe(O.warning)("ajax\u8BF7\u6C42\u65F6\u9519\u8BEF")});S.interceptors.response.use(e=>(K(J(se(["data","code"],e)),t=>{N(O.info,x(oe,t),se(["data","code"]))(e)})(Ze()),K(ie(["data","code"],-9999),me)(e),x("data",e)),e=>(N(O.warning,x(oe,et()),xe("default",["response","status"]))(e),K(ie(["response","status"],401),me)(e),e.response.data));const tt=(e,t)=>S({url:`${U()}${e}`,method:"get",params:o({},t)}),at=(e,t)=>S({url:`${U()}${e}`,method:"post",data:o({},t),headers:{"Content-Type":"application/json"}}),nt=(e,t)=>S({url:`${U()}${e}/${t}`,method:"delete"}),rt=(e,t)=>S({url:`${U()}${e}/${t.id}`,method:"put",data:o({},t?G(["id"],t):{}),headers:{"Content-Type":"application/json"}}),st=(e,t)=>S({url:`${U()}${e}/${t}`,method:"get"}),ot=e=>S({url:`${U()}${e}/all`,method:"get"}),it=e=>!(Ae(e)||Se(e));P((e,t)=>(console.log(e,t),t));const ye={fetch:tt,add:at,Delete:nt,update:rt,fetchDetail:st,fetchAll:ot},ct=e=>Object.keys(ye).reduce((t,r)=>(t[r]=P(ye[r])(e),t),{}),ut=e=>Re(t=>t||Le(Boolean,t)||Te(0,t),e);P((e,t)=>t.map(e));P(e=>{let t=ce((s,c)=>(s.push(x("validateFn",c)),s),[],e),r=ce((s,c)=>(s.push(x("errMsg",c)),s),[],e);const n=(s,c)=>Me(s,ue.Either.Right,()=>ue.Either.Left(new Error(c))),i=Ie([s=>n(s,r.shift())],t);return console.log(i),je(...i.reverse())});const Y=e=>{const t=`${window.location.origin}${window.location.pathname}`;let r=t;if(e)if(typeof e=="object"){const{url:n=t,search:i}=e;i?r=`${n}?${le.stringify(i)}`:r=n}else r=e;window.history.replaceState({url:r},document.title,r)};const fe=e=>({id:e,key:String(e),name:"John Brown",age:String(e),email:"yitjhy@126.com",website:"yitjhy.com",address:"1 Lake Park",tags:["nice"]}),d={\u5F53\u524D\u9875\u6570:"page",\u6BCF\u9875\u6761\u6570:"pageSize",\u6570\u636E\u603B\u6570:"total"},_=L({[d.\u5F53\u524D\u9875\u6570]:1,[d.\u6BCF\u9875\u6761\u6570]:50,[d.\u6570\u636E\u603B\u6570]:300})(),lt=(e,t)=>{const{resource:r,namespace:n,crudService:i}=e,{fetch:s,add:c,Delete:f,update:F,fetchDetail:h,fetchAll:g}=o(o({},ct(r)),i||{}),p={namespace:n,state:o({list:[],pagination:_,detail:{}},x("state",t)||{}),effects:o({async fetch({payload:u},{call:l,put:m,selector:B}){let w=_,v=u;J(d.\u5F53\u524D\u9875\u6570,u)?w={[d.\u5F53\u524D\u9875\u6570]:Number(u[d.\u5F53\u524D\u9875\u6570]),[d.\u6BCF\u9875\u6761\u6570]:Number(u[d.\u6BCF\u9875\u6761\u6570]),[d.\u6570\u636E\u603B\u6570]:B("pagination")[d.\u6570\u636E\u603B\u6570]}:v=D(o({},v),{[d.\u5F53\u524D\u9875\u6570]:_[d.\u5F53\u524D\u9875\u6570],[d.\u6BCF\u9875\u6761\u6570]:_[d.\u6BCF\u9875\u6761\u6570]}),m({type:"savePagination",payload:{pagination:w}}),await l(s,v);const j=[];for(let q=(w[d.\u5F53\u524D\u9875\u6570]-1)*w[d.\u6BCF\u9875\u6761\u6570];q<w[d.\u5F53\u524D\u9875\u6570]*w[d.\u6BCF\u9875\u6761\u6570];q++)j.push(fe(q));m({type:"saveList",payload:{list:j}})},async update({payload:u,callback:l},{call:m,put:B}){await m(F,u),O.success("\u66F4\u65B0\u6210\u529F\uFF01"),l&&l()},async fetchDetail({payload:u,callback:l},{call:m,put:B}){await m(h,u);const w=fe(u);l&&l(w),B({type:"saveDetail",payload:{detail:w}})},async add({payload:u,callback:l},{call:m,put:B}){await m(c,u),O.success("\u65B0\u589E\u6210\u529F\uFF01"),l&&l()},async refresh({payload:u},{call:l,put:m}){await m({type:"fetch"})},async delete({payload:u,callback:l},{call:m,put:B}){await m(f,u),O.success("\u5220\u9664\u6210\u529F\uFF01"),l&&l()}},x("effects",t)||{}),reducers:o({saveList(u,l){return o(o({},u),l.payload)},savePagination(u,l){return o(o({},u),l.payload)},saveDetail(u,l){return o(o({},u),l.payload)},default(u){return u}},x("effects",t)||{})},b=(u,l)=>p.reducers[l.type]?p.reducers[l.type](u,l):p.reducers.default(u),$=T.exports.createContext(n);return{Context:$,Provider:({children:u})=>{const[l,m]=T.exports.useReducer(b,p.state),B=v=>v==="ROOT"?l:l[v],w=v=>{const{type:j}=v,q=Object.keys(p.reducers),be=Object.keys(p.effects);if(q.includes(j)&&m(v),be.includes(j)){const Be=(we,Ee)=>we(Ee);p.effects[j](v,{call:Be,selector:B,put:w})}};return a($.Provider,{value:{dispatch:w,SELECTOR:B},children:u})}}},dt=e=>t=>{const{buildColumns:r}=e,{SELECTOR:n,dispatch:i}=t,s=()=>{const f=A.UrlParser(window.location.href).queryParams;let F=f;J(d.\u5F53\u524D\u9875\u6570,f)||(F=o(o({},f),G([d.\u6570\u636E\u603B\u6570],n("pagination")))),i({type:"fetch",payload:F})},c=r(t);return T.exports.useEffect(()=>{s()},[]),a(Oe,o({columns:c,dataSource:n("list"),bordered:!0,scroll:{y:"calc(100vh - 150px)"},pagination:!1},t))},ht=(e={})=>t=>{const r=["10","20","30","40"],n="small",i=!0,{SELECTOR:s,dispatch:c}=t,f=s("pagination")[d.\u5F53\u524D\u9875\u6570],F=s("pagination")[d.\u6BCF\u9875\u6761\u6570],h=s("pagination")[d.\u6570\u636E\u603B\u6570],{pageSizeOptions:g=r,size:p=n,showSizeChanger:b=i}=e||{},$=(R,u)=>{const l=A.UrlParser(window.location.href).queryParams,m={[d.\u5F53\u524D\u9875\u6570]:R,[d.\u6BCF\u9875\u6761\u6570]:u},B=o(o({},l),m);Y({search:B}),c({type:"savePagination",payload:{pagination:D(o({},m),{[d.\u6570\u636E\u603B\u6570]:h})}}),c({type:"fetch",payload:B})};return a(Ue,o({current:f,pageSize:F,total:h,pageSizeOptions:g,size:p,showSizeChanger:b,showTotal:(R,u)=>`\u7B2C${u[0]}-${u[1]}\u6761\uFF0C \u5171${R||10}\u6761`,onChange:$,onShowSizeChange:$},t))},pt=({ActionContainerComponent:e,OtherComponent:t})=>r=>a(y,{children:C("div",{className:"toolbar-container",style:{justifyContent:t?"space-between":"flex-end",paddingRight:t?"1rem":"0"},children:[a("div",{className:"toolbar-action-container",children:a(e,o({},r))}),a("div",{children:t?a(t,o({},r)):a("div",{})})]})}),mt=(e,t)=>r=>a(y,{children:C("div",{className:"article-container",children:[a("div",{children:a(e,o({},r))}),a("div",{children:a(t,o({},r))})]})}),yt=({action:e="search",transFormFields:t},r)=>n=>{const i={labelCol:{span:6},wrapperCol:{span:15}},s={required:"${label} \u4E3A\u5FC5\u586B\u9879\uFF01",types:{email:"${label} \u4E0D\u662F\u6709\u6548\u90AE\u7BB1!",number:"${label} \u4E0D\u662F\u6709\u6548\u6570\u5B57!"},number:{range:"${label} \u5FC5\u987B\u5728 ${min} \u548C ${max}\u4E4B\u95F4"}},[c]=E.useForm(),f={add:h=>{const g=()=>{const{match:{path:p},dispatch:b}=n,$=document.referrer?A.UrlParser(document.referrer).pathname:"";b({type:"savePagination",payload:{pagination:_}}),p.replace("/new","")===$?n.history.push({pathname:$}):n.history.push({pathname:p.replace("/new","")})};n.dispatch({type:"add",payload:h,callback:g})},update:h=>{const{match:{params:{id:g}}}=n,p=()=>{const{match:{path:b}}=n,$=A.UrlParser(document.referrer).queryParams,R=A.UrlParser(document.referrer).pathname;b.replace("/:id","")===R?n.history.push({pathname:R,search:le.stringify($)}):n.history.goBack()};n.dispatch({type:"update",payload:D(o({},h),{id:g}),callback:p})},search:h=>{const g=A.UrlParser(window.location.href).queryParams,{SELECTOR:p}=n;let b=o(o({},g),h);J(d.\u5F53\u524D\u9875\u6570,g)||(b=o(o({},b),G([d.\u6570\u636E\u603B\u6570],p("pagination")))),Y({search:b}),n.dispatch({type:"fetch",payload:b})},default:h=>{console.log(h)}},F=h=>{let g=h;t&&(g=t(h)),f[e]?f[e](g):f.default(g)};return T.exports.useEffect(()=>{if(e==="update"){const h=p=>c.setFieldsValue(p),{match:{params:{id:g}}}=n;n.dispatch({type:"fetchDetail",payload:g,callback:h})}if(e==="search"){const h=A.UrlParser(window.location.href).queryParams;c.setFieldsValue(h)}},[]),a(E,D(o(D(o({},i),{form:c,name:"nest-messages",onFinish:F,validateMessages:s,autoComplete:"off"}),n),{children:a(r,D(o({},n),{form:c}))}))},ft=e=>t=>{const{form:r,resetCallback:n}=e;return a(y,{children:a(I,D(o({onClick:()=>{r.resetFields(),n&&n(D(o({},t),{form:r}))}},t),{children:"\u91CD\u7F6E"}))})},gt=i=>{var s=i,{dispatch:e,id:t,form:r}=s,n=re(s,["dispatch","id","form"]);return a(y,{children:a(I,D(o({onClick:()=>{e({type:"fetchDetail",payload:t,callback:F=>r.setFieldsValue(F)})}},n),{children:"\u91CD\u7F6E"}))})},Ct=e=>t=>r=>a(t,o(o({},r),e));var Z={createList:P(dt),createPagination:P(ht),createToolbarContainer:P(pt),createMainComponent:P(mt),createForm:P(yt),connect:P(Ct),createResetFormFieldsEmptyButton:ft,ResetUpdateFormFieldsButton:gt};const ge=e=>a(y,{children:C(Q,{children:[a(k,{span:12,children:a(E.Item,{name:["name"],label:"\u59D3\u540D",rules:[{required:!0}],children:a(M,{})})}),a(k,{span:12,children:a(E.Item,{name:["email"],label:"\u90AE\u7BB1",rules:[{type:"email"}],children:a(M,{})})}),a(k,{span:12,children:a(E.Item,{name:["age"],label:"\u5E74\u9F84",rules:[{type:"number",min:0,max:99}],children:a(de,{style:{width:"100%"}})})}),a(k,{span:12,children:a(E.Item,{name:["address"],label:"\u5730\u5740",children:a(M,{})})}),a(k,{span:12,children:a(E.Item,{name:["website"],label:"\u7F51\u7AD9",children:a(M,{})})}),a(k,{span:12,children:a(E.Item,{name:["introduction"],label:"\u81EA\u6211\u4ECB\u7ECD",children:a(M.TextArea,{})})})]})}),Ft="ARTICLE",bt="/article",Ce=[];for(let e=0;e<500;e++)Ce.push({id:e,key:String(e),name:"John Brown",age:e,address:"1 Lake Park",email:"yitjhy@126.com",website:"yitjhy.com",tags:["nice"]});const Bt=lt({namespace:Ft,resource:bt},{state:{list:Ce}}),{Context:ee,Provider:wt}=Bt,{createToolbarContainer:Et,createMainComponent:kt,createForm:$t,createResetFormFieldsEmptyButton:vt}=Z,Dt=({form:e})=>{const t=vt({form:e});return C(y,{children:[a(t,{}),a(I,{type:"primary",htmlType:"submit",children:"\u4FDD\u5B58"})]})},Pt=N($t({action:"add"}),kt(ge),Et)({ActionContainerComponent:Dt}),xt=e=>{const t=T.exports.useContext(ee);return a(y,{children:a(Pt,o(o({},t),e))})},{createToolbarContainer:At,createMainComponent:St,createForm:Rt,ResetUpdateFormFieldsButton:Lt}=Z,Tt=({dispatch:e,match:{params:{id:t}},form:r})=>C(y,{children:[a(Lt,{dispatch:e,id:t,form:r}),a(I,{type:"primary",htmlType:"submit",children:"\u66F4\u65B0"})]}),It=N(Rt({action:"update"}),St(ge),At)({ActionContainerComponent:Tt}),Mt=e=>{const t=T.exports.useContext(ee);return a(y,{children:a(It,o(o({},t),e))})},jt=e=>a(y,{children:C(Q,{children:[a(k,{span:8,children:a(E.Item,{name:["name"],label:"\u59D3\u540D",children:a(M,{})})}),a(k,{span:8,children:a(E.Item,{name:["email"],label:"\u90AE\u7BB1",rules:[{type:"email"}],children:a(M,{})})}),a(k,{span:8,children:a(E.Item,{name:["age"],label:"\u5E74\u9F84",rules:[{type:"number",min:0,max:99}],children:a(de,{style:{width:"100%"}})})})]})}),{createToolbarContainer:Ot,createMainComponent:Ut,createList:qt,createPagination:Nt,createForm:zt,createResetFormFieldsEmptyButton:_t}=Z,Vt=({match:e,dispatch:t,history:r})=>{const{path:n}=e;return[{title:"ID",dataIndex:"id",key:"id"},{title:"\u59D3\u540D",dataIndex:"name",key:"name",render:(i,s)=>a("a",{href:"javascript:void(0)",onClick:()=>{r.push({pathname:H(n,String(s.id))})},children:i})},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u90AE\u7BB1",dataIndex:"email",key:"email"},{title:"\u7F51\u5740",dataIndex:"website",key:"website"},{title:"\u6807\u7B7E",key:"tags",dataIndex:"tags",render:i=>a(y,{children:i.map(s=>a(qe,{color:"green",children:s.toUpperCase()},s))})},{title:"\u64CD\u4F5C",key:"action",render:(i,s)=>a(Ne,{title:"\u786E\u8BA4\u5220\u9664\u8BE5\u6761\u6570\u636E?",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88",onConfirm:()=>{const c=()=>{const f=A.UrlParser(window.location.href).queryParams;t({type:"fetch",payload:f})};t({type:"delete",payload:s.id,callback:c})},onCancel:()=>{},children:a(ze,{size:"middle",children:a(I,{type:"danger",children:"\u5220\u9664"})})})}]},Kt=e=>{const{path:t}=e.match;return a(y,{children:a(I,{type:"primary",onClick:()=>{e.history.push({pathname:H(t,"new")})},children:"\u65B0\u589E"})})},Jt=qt({buildColumns:Vt}),Ht=e=>{const{form:t,dispatch:r}=e,i=_t({form:t,resetCallback:()=>{Y(),r({type:"fetch"})}});return a(y,{children:C("div",{children:[a("div",{style:{marginTop:"10px"},children:C(Q,{children:[a(k,{span:18,children:a(jt,o({},e))}),a(k,{span:6,children:C("div",{children:[a(I,{type:"primary",htmlType:"submit",children:"\u641C\u7D22"}),a(i,{style:{marginLeft:"0.7rem"}})]})})]})}),a(Jt,o({},e))]})})},Wt=N(zt({action:"search"}),Ut(Ht),Ot)({ActionContainerComponent:Kt,OtherComponent:Nt()}),Gt=e=>{const t=T.exports.useContext(ee);return a(y,{children:a(Wt,o(o({},t),e))})},Qt=e=>a(y,{children:a(xt,o({},e))}),Xt=e=>a(y,{children:a(Mt,o({},e))}),Yt=e=>a(y,{children:a(Gt,o({},e))}),Zt=({match:e})=>{const{path:t}=e;return C(_e,{children:[a(z,{path:H(t,"new"),exact:!0,component:Qt}),a(z,{path:H(t,":id"),exact:!0,component:Xt}),a(z,{path:t,exact:!0,component:Yt})]})},ea=e=>a(wt,{children:a(Zt,o({},e))});var ta="/assets/logo.6000b0e9.svg";const{SubMenu:aa}=W,{Content:na,Sider:ra}=X,sa=e=>{const{history:t}=e;return a("div",{children:C(X,{children:[a(ra,{collapsible:!0,children:C(W,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[a("img",{src:ta,className:"App-logo",alt:"logo"}),(n=>n.reduce((i,s)=>(s.children?i.push(a(aa,{title:C("span",{children:[s.icon||a(he,{}),a("span",{children:s.title})]}),children:s.children.map(c=>a(W.Item,{onClick:()=>{c.pathname&&t.push(c.pathname)},children:c.title},c.key))},s.key)):i.push(a(W.Item,{onClick:()=>{s.pathname&&t.push(s.pathname)},children:C("span",{children:[s.icon||a(he,{}),a("span",{children:s.title})]})},s.key)),i),[]))(Xe()).map(n=>n)]})}),a(X,{children:a(na,{children:a("div",{style:{minHeight:"100vh"},children:C(pe,{basename:"/middle-platform-template",children:[a(z,{exact:!0,path:"/",render:()=>a(Ke,{to:"/article"})}),a(z,{component:ea,path:"/article"})]})})})})]})})};var oa=Ve(sa);const ia="modulepreload",Fe={},ca="/",ua=function(t,r){return!r||r.length===0?t():Promise.all(r.map(n=>{if(n=`${ca}${n}`,n in Fe)return;Fe[n]=!0;const i=n.endsWith(".css"),s=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${s}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":ia,i||(c.as="script",c.crossOrigin=""),c.href=n,document.head.appendChild(c),i)return new Promise((f,F)=>{c.addEventListener("load",f),c.addEventListener("error",F)})})).then(()=>t())},la=e=>{e&&e instanceof Function&&ua(()=>import("./web-vitals.d62816c8.js"),[]).then(({getCLS:t,getFID:r,getFCP:n,getLCP:i,getTTFB:s})=>{t(e),r(e),n(e),i(e),s(e)})};Je.render(a(He.StrictMode,{children:a(We,{locale:Ge,children:a(pe,{children:a(oa,{})})})}),document.getElementById("root"));la();
