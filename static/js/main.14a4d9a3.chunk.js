(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{274:function(e,t,a){},284:function(e,t){},350:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(46),i=a.n(r),o=a(22),s=a(257),l=a.n(s),j=(a(273),a(274),a(140)),u=a(40),d=a(108),b=a(437),p=a(445),h=a(13),O=a(133),f=a.n(O),m=a(64),x=a(101),y=a(266),g=a(211),v=a(61),k=a.n(v),w=a(109),C=a(54),F=a(89),P=a(112),S=a(230),I=a(233),T=a(114),E=a(261),L=a(438),R=a(258),U=a(439),B=a(166),D=a(262),z=a(234),q=a(100),A=a(117),M=a(162),N=a(33),$=a(164),J=a(41),V=a(235),H=a(115),K=a(163),G=a(79),Q=a(189),W=a(248),X=a.n(W),Y=a(229),Z=a(52),_=a(231),ee=a(232),te=a(159),ae=F.a([{key:"1",title:"\u9996\u9875"},{key:"2",title:"\u8425\u9500\u6570\u636e\u7ba1\u7406",children:[{key:"2-1",title:"\u5185\u5bb9\u7ba1\u7406",pathname:"/article"},{key:"2-2",title:"\u4e3b\u64ad\u7ba1\u7406",pathname:"/article/new"},{key:"2-3",title:"\u5206\u7c7b\u7ba1\u7406",pathname:"/app/anchor"},{key:"2-4",title:"Tag\u6807\u7b7e\u7ba1\u7406",pathname:"/app/anchor"},{key:"2-5",title:"\u83dc\u5355\u7ba1\u7406",pathname:"/app/anchor"}]},{key:"3",title:"\u8d44\u6e90\u7ba1\u7406",children:[{key:"3-1",title:"\u56fe\u7247",pathname:"/app/content"},{key:"3-2",title:"\u97f3\u9891",pathname:"/app/anchor"},{key:"3-3",title:"\u89c6\u9891",pathname:"/app/anchor"}]},{key:"4",title:"\u7528\u6237\u6570\u636e\u7ba1\u7406",children:[{key:"4-1",title:"\u7528\u6237\u7ba1\u7406",pathname:"/app/content"}]}]),ne=F.a("/api"),ce=F.a(5e6),re=(F.a(0),F.a({1:"\u5bc6\u7801\u9519\u8bef",2:"token\u9519\u8bef",10:"\u8d26\u53f7\u5df2\u88ab\u7981\u7528",11:"\u7535\u8bdd\u53f7\u7801\u683c\u5f0f\u9519\u8bef",12:"\u7528\u6237\u540d\u5df2\u5b58\u5728",default:"\u672a\u77e5\u9519\u8bef"})),ie=F.a({200:"\u670d\u52a1\u5668\u6210\u529f\u8fd4\u56de\u8bf7\u6c42\u7684\u6570\u636e\u3002",201:"\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u6210\u529f\u3002",202:"\u4e00\u4e2a\u8bf7\u6c42\u5df2\u7ecf\u8fdb\u5165\u540e\u53f0\u6392\u961f\uff08\u5f02\u6b65\u4efb\u52a1\uff09\u3002",204:"\u5220\u9664\u6570\u636e\u6210\u529f\u3002",400:"\u53d1\u51fa\u7684\u8bf7\u6c42\u6709\u9519\u8bef\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u65b0\u5efa\u6216\u4fee\u6539\u6570\u636e\u7684\u64cd\u4f5c\u3002",401:"\u7528\u6237\u6ca1\u6709\u6743\u9650\uff08\u4ee4\u724c\u3001\u7528\u6237\u540d\u3001\u5bc6\u7801\u9519\u8bef\uff09\u3002",403:"\u7528\u6237\u5f97\u5230\u6388\u6743\uff0c\u4f46\u662f\u8bbf\u95ee\u662f\u88ab\u7981\u6b62\u7684\u3002",404:"\u53d1\u51fa\u7684\u8bf7\u6c42\u9488\u5bf9\u7684\u662f\u4e0d\u5b58\u5728\u7684\u8bb0\u5f55\uff0c\u670d\u52a1\u5668\u6ca1\u6709\u8fdb\u884c\u64cd\u4f5c\u3002",406:"\u8bf7\u6c42\u7684\u683c\u5f0f\u4e0d\u53ef\u5f97\u3002",410:"\u8bf7\u6c42\u7684\u8d44\u6e90\u88ab\u6c38\u4e45\u5220\u9664\uff0c\u4e14\u4e0d\u4f1a\u518d\u5f97\u5230\u7684\u3002",422:"\u5f53\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\u53d1\u751f\u4e00\u4e2a\u9a8c\u8bc1\u9519\u8bef\u3002",500:"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u3002",502:"\u7f51\u5173\u9519\u8bef\u3002",503:"\u670d\u52a1\u4e0d\u53ef\u7528\uff0c\u670d\u52a1\u5668\u6682\u65f6\u8fc7\u8f7d\u6216\u7ef4\u62a4\u3002",504:"\u7f51\u5173\u8d85\u65f6\u3002",default:"\u672a\u77e5\u9519\u8bef"}),oe=X.a.create({baseURL:"",timeout:ce()}),se=function(){return window.location.href="".concat(window.location.origin).concat(window.location.pathname,"#/login"),!1};oe.interceptors.request.use((function(e){return e.headers.token="".concat(localStorage.getItem("token")),e.params=Y.a(ue,be)(P.a("params",e)),e}),(function(){$.a(E.b.warning)("ajax\u8bf7\u6c42\u65f6\u9519\u8bef")})),oe.interceptors.response.use((function(e){return Y.a(S.a(Z.a(["data","code"],e)),(function(t){x.a(E.b.info,P.a(_.a,t),Z.a(["data","code"]))(e)}))(re()),Y.a(ee.a(["data","code"],-9999),se)(e),P.a("data",e)}),(function(e){return x.a(E.b.warning,P.a(_.a,ie()),te.a("default",["response","status"]))(e),Y.a(ee.a(["response","status"],401),se)(e),e.response.data}));for(var le,je=oe,ue=function(e){return!(z.a(e)||q.a(e))},de=(T.a((function(e,t){return console.log(e,t),t})),{fetch:function(e,t){return je({url:"".concat(ne()).concat(e),method:"get",params:Object(h.a)({},t)})},add:function(e,t){return je({url:"".concat(ne()).concat(e),method:"post",data:Object(h.a)({},t),headers:{"Content-Type":"application/json"}})},Delete:function(e,t){return je({url:"".concat(ne()).concat(e,"/").concat(t),method:"delete"})},update:function(e,t){return je({url:"".concat(ne()).concat(e,"/").concat(t.id),method:"put",data:Object(h.a)({},t?Object(I.a)(["id"],t):{}),headers:{"Content-Type":"application/json"}})},fetchDetail:function(e,t){return je({url:"".concat(ne()).concat(e,"/").concat(t),method:"get"})},fetchAll:function(e){return je({url:"".concat(ne()).concat(e,"/all"),method:"get"})}}),be=function(e){return A.a((function(e){return e||M.a(Boolean,e)||N.a(0,e)}),e)},pe=(T.a((function(e,t){return t.map(e)})),T.a((function(e){var t=J.a((function(e,t){return e.push(P.a("validateFn",t)),e}),[],e),a=J.a((function(e,t){return e.push(P.a("errMsg",t)),e}),[],e),n=H.a([function(e){return t=e,n=a.shift(),V.a(t,Q.Either.Right,(function(){return Q.Either.Left(new Error(n))}));var t,n}],t);return console.log(n),K.a.apply(G,Object(D.a)(n.reverse()))})),function(e){var t="".concat(window.location.origin).concat(window.location.pathname),a=t;if(e)if("object"===typeof e){var n=e.url,c=void 0===n?t:n,r=e.search;a=r?"".concat(c,"?").concat(Object(B.stringify)(r)):c}else a=e;window.history.replaceState({url:a},document.title,a)}),he=a(78),Oe=(a(350),a(7)),fe=["dispatch","id","form"],me=function(e){return{id:e,key:String(e),name:"John Brown",age:String(e),email:"yitjhy@126.com",website:"yitjhy.com",address:"1 Lake Park",tags:["nice"]}},xe="page",ye="pageSize",ge="total",ve=Object(F.a)((le={},Object(C.a)(le,xe,1),Object(C.a)(le,ye,50),Object(C.a)(le,ge,300),le))(),ke={createList:Object(T.a)((function(e){return function(t){var a=e.buildColumns,c=t.SELECTOR,r=t.dispatch,i=a(t);return Object(n.useEffect)((function(){!function(){var e=Object(he.UrlParser)(window.location.href).queryParams,t=e;Object(S.a)(xe,e)||(t=Object(h.a)(Object(h.a)({},e),Object(I.a)([ge],c("pagination")))),r({type:"fetch",payload:t})}()}),[]),Object(Oe.jsx)(L.a,Object(h.a)({columns:i,dataSource:c("list"),bordered:!0,scroll:{y:"calc(100vh - 150px)"},pagination:!1},t))}})),createPagination:Object(T.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var a=t.SELECTOR,n=t.dispatch,c=a("pagination")[xe],r=a("pagination")[ye],i=a("pagination")[ge],o=e||{},s=o.pageSizeOptions,l=void 0===s?["10","20","30","40"]:s,j=o.size,u=void 0===j?"small":j,d=o.showSizeChanger,b=void 0===d||d,p=function(e,t){var a,c=Object(he.UrlParser)(window.location.href).queryParams,r=(a={},Object(C.a)(a,xe,e),Object(C.a)(a,ye,t),a),o=Object(h.a)(Object(h.a)({},c),r);pe({search:o}),n({type:"savePagination",payload:{pagination:Object(h.a)(Object(h.a)({},r),{},Object(C.a)({},ge,i))}}),n({type:"fetch",payload:o})};return Object(Oe.jsx)(R.a,Object(h.a)({current:c,pageSize:r,total:i,pageSizeOptions:l,size:u,showSizeChanger:b,showTotal:function(e,t){return"\u7b2c".concat(t[0],"-").concat(t[1],"\u6761\uff0c \u5171").concat(e||10,"\u6761")},onChange:p,onShowSizeChange:p},t))}})),createToolbarContainer:Object(T.a)((function(e){var t=e.ActionContainerComponent,a=e.OtherComponent;return function(e){return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsxs)("div",{className:"toolbar-container",style:{justifyContent:a?"space-between":"flex-end",paddingRight:a?"1rem":"0"},children:[Object(Oe.jsx)("div",{className:"toolbar-action-container",children:Object(Oe.jsx)(t,Object(h.a)({},e))}),Object(Oe.jsx)("div",{children:a?Object(Oe.jsx)(a,Object(h.a)({},e)):Object(Oe.jsx)("div",{})})]})})}})),createMainComponent:Object(T.a)((function(e,t){return function(a){return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsxs)("div",{className:"article-container",children:[Object(Oe.jsx)("div",{children:Object(Oe.jsx)(e,Object(h.a)({},a))}),Object(Oe.jsx)("div",{children:Object(Oe.jsx)(t,Object(h.a)({},a))})]})})}})),createForm:Object(T.a)((function(e,t){var a=e.action,c=void 0===a?"search":a,r=e.transFormFields;return function(e){var a=U.a.useForm(),i=Object(g.a)(a,1)[0],o={add:function(t){e.dispatch({type:"add",payload:t,callback:function(){var t=e.match.path,a=e.dispatch,n=document.referrer?Object(he.UrlParser)(document.referrer).pathname:"";a({type:"savePagination",payload:{pagination:ve}}),t.replace("/new","")===n?e.history.push({pathname:n}):e.history.push({pathname:t.replace("/new","")})}})},update:function(t){var a=e.match.params.id;e.dispatch({type:"update",payload:Object(h.a)(Object(h.a)({},t),{},{id:a}),callback:function(){var t=e.match.path,a=Object(he.UrlParser)(document.referrer).queryParams,n=Object(he.UrlParser)(document.referrer).pathname;t.replace("/:id","")===n?e.history.push({pathname:n,search:Object(B.stringify)(a)}):e.history.goBack()}})},search:function(t){var a=Object(he.UrlParser)(window.location.href).queryParams,n=e.SELECTOR,c=Object(h.a)(Object(h.a)({},a),t);Object(S.a)(xe,a)||(c=Object(h.a)(Object(h.a)({},c),Object(I.a)([ge],n("pagination")))),pe({search:c}),e.dispatch({type:"fetch",payload:c})},default:function(e){console.log(e)}};return Object(n.useEffect)((function(){if("update"===c){var t=e.match.params.id;e.dispatch({type:"fetchDetail",payload:t,callback:function(e){return i.setFieldsValue(e)}})}if("search"===c){var a=Object(he.UrlParser)(window.location.href).queryParams;i.setFieldsValue(a)}}),[]),Object(Oe.jsx)(U.a,Object(h.a)(Object(h.a)(Object(h.a)({},{labelCol:{span:6},wrapperCol:{span:15}}),{},{form:i,name:"nest-messages",onFinish:function(e){var t=e;r&&(t=r(e)),o[c]?o[c](t):o.default(t)},validateMessages:{required:"${label} \u4e3a\u5fc5\u586b\u9879\uff01",types:{email:"${label} \u4e0d\u662f\u6709\u6548\u90ae\u7bb1!",number:"${label} \u4e0d\u662f\u6709\u6548\u6570\u5b57!"},number:{range:"${label} \u5fc5\u987b\u5728 ${min} \u548c ${max}\u4e4b\u95f4"}},autoComplete:"off"},e),{},{children:Object(Oe.jsx)(t,Object(h.a)(Object(h.a)({},e),{},{form:i}))}))}})),connect:Object(T.a)((function(e){return function(t){return function(a){return Object(Oe.jsx)(t,Object(h.a)(Object(h.a)({},a),e))}}})),createResetFormFieldsEmptyButton:function(e){return function(t){var a=e.form,n=e.resetCallback;return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(m.a,Object(h.a)(Object(h.a)({onClick:function(){a.resetFields(),n&&n(Object(h.a)(Object(h.a)({},t),{},{form:a}))}},t),{},{children:"\u91cd\u7f6e"}))})}},ResetUpdateFormFieldsButton:function(e){var t=e.dispatch,a=e.id,n=e.form,c=Object(y.a)(e,fe);return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(m.a,Object(h.a)(Object(h.a)({onClick:function(){t({type:"fetchDetail",payload:a,callback:function(e){return n.setFieldsValue(e)}})}},c),{},{children:"\u91cd\u7f6e"}))})}},we=a(435),Ce=a(436),Fe=a(441),Pe=a(440),Se=function(e){return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsxs)(we.a,{children:[Object(Oe.jsx)(Ce.a,{span:12,children:Object(Oe.jsx)(U.a.Item,{name:["name"],label:"\u59d3\u540d",rules:[{required:!0}],children:Object(Oe.jsx)(Fe.a,{})})}),Object(Oe.jsx)(Ce.a,{span:12,children:Object(Oe.jsx)(U.a.Item,{name:["email"],label:"\u90ae\u7bb1",rules:[{type:"email"}],children:Object(Oe.jsx)(Fe.a,{})})}),Object(Oe.jsx)(Ce.a,{span:12,children:Object(Oe.jsx)(U.a.Item,{name:["age"],label:"\u5e74\u9f84",rules:[{type:"number",min:0,max:99}],children:Object(Oe.jsx)(Pe.a,{style:{width:"100%"}})})}),Object(Oe.jsx)(Ce.a,{span:12,children:Object(Oe.jsx)(U.a.Item,{name:["address"],label:"\u5730\u5740",children:Object(Oe.jsx)(Fe.a,{})})}),Object(Oe.jsx)(Ce.a,{span:12,children:Object(Oe.jsx)(U.a.Item,{name:["website"],label:"\u7f51\u7ad9",children:Object(Oe.jsx)(Fe.a,{})})}),Object(Oe.jsx)(Ce.a,{span:12,children:Object(Oe.jsx)(U.a.Item,{name:["introduction"],label:"\u81ea\u6211\u4ecb\u7ecd",children:Object(Oe.jsx)(Fe.a.TextArea,{})})})]})})},Ie=[],Te=0;Te<500;Te++)Ie.push({id:Te,key:String(Te),name:"John Brown",age:Te,address:"1 Lake Park",email:"yitjhy@126.com",website:"yitjhy.com",tags:["nice"]});var Ee=function(e,t){var a=e.resource,c=e.namespace,r=e.crudService,i=Object(h.a)(Object(h.a)({},function(e){return Object.keys(de).reduce((function(t,a){return t[a]=T.a(de[a])(e),t}),{})}(a)),r||{}),o=i.fetch,s=i.add,l=i.Delete,j=i.update,u=i.fetchDetail,d=(i.fetchAll,{namespace:c,state:Object(h.a)({list:[],pagination:ve,detail:{}},Object(P.a)("state",t)||{}),effects:Object(h.a)({fetch:function(e,t){return Object(w.a)(k.a.mark((function a(){var n,c,r,i,s,l,j,u,d,b;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,c=t.call,r=t.put,i=t.selector,s=ve,l=n,Object(S.a)(xe,n)?(j={},Object(C.a)(j,xe,Number(n[xe])),Object(C.a)(j,ye,Number(n[ye])),Object(C.a)(j,ge,i("pagination")[ge]),s=j):l=Object(h.a)(Object(h.a)({},l),{},(u={},Object(C.a)(u,xe,ve[xe]),Object(C.a)(u,ye,ve[ye]),u)),r({type:"savePagination",payload:{pagination:s}}),a.next=8,c(o,l);case 8:for(d=[],b=(s[xe]-1)*s[ye];b<s[xe]*s[ye];b++)d.push(me(b));r({type:"saveList",payload:{list:d}});case 11:case"end":return a.stop()}}),a)})))()},update:function(e,t){return Object(w.a)(k.a.mark((function a(){var n,c,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(j,n);case 4:E.b.success("\u66f4\u65b0\u6210\u529f\uff01"),c&&c();case 6:case"end":return a.stop()}}),a)})))()},fetchDetail:function(e,t){return Object(w.a)(k.a.mark((function a(){var n,c,r,i,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,i=t.put,a.next=4,r(u,n);case 4:o=me(n),c&&c(o),i({type:"saveDetail",payload:{detail:o}});case 7:case"end":return a.stop()}}),a)})))()},add:function(e,t){return Object(w.a)(k.a.mark((function a(){var n,c,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(s,n);case 4:E.b.success("\u65b0\u589e\u6210\u529f\uff01"),c&&c();case 6:case"end":return a.stop()}}),a)})))()},refresh:function(e,t){return Object(w.a)(k.a.mark((function a(){var n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.payload,t.call,n=t.put,a.next=4,n({type:"fetch"});case 4:case"end":return a.stop()}}),a)})))()},delete:function(e,t){return Object(w.a)(k.a.mark((function a(){var n,c,r;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,c=e.callback,r=t.call,t.put,a.next=4,r(l,n);case 4:E.b.success("\u5220\u9664\u6210\u529f\uff01"),c&&c();case 6:case"end":return a.stop()}}),a)})))()}},Object(P.a)("effects",t)||{}),reducers:Object(h.a)({saveList:function(e,t){return Object(h.a)(Object(h.a)({},e),t.payload)},savePagination:function(e,t){return Object(h.a)(Object(h.a)({},e),t.payload)},saveDetail:function(e,t){return Object(h.a)(Object(h.a)({},e),t.payload)},default:function(e){return e}},Object(P.a)("effects",t)||{})}),b=function(e,t){return d.reducers[t.type]?d.reducers[t.type](e,t):d.reducers.default(e)},p=Object(n.createContext)(c);return{Context:p,Provider:function(e){var t=e.children,a=Object(n.useReducer)(b,d.state),c=Object(g.a)(a,2),r=c[0],i=c[1],o=function(e){return"ROOT"===e?r:r[e]};return Object(Oe.jsx)(p.Provider,{value:{dispatch:function e(t){var a=t.type,n=Object.keys(d.reducers),c=Object.keys(d.effects);if(n.includes(a)&&i(t),c.includes(a)){d.effects[a](t,{call:function(e,t){return e(t)},selector:o,put:e})}},SELECTOR:o},children:t})}}}({namespace:"ARTICLE",resource:"/article"},{state:{list:Ie}}),Le=Ee.Context,Re=Ee.Provider,Ue=ke.createToolbarContainer,Be=ke.createMainComponent,De=ke.createForm,ze=ke.createResetFormFieldsEmptyButton,qe=Object(x.a)(De({action:"add"}),Be(Se),Ue)({ActionContainerComponent:function(e){var t=e.form,a=ze({form:t});return Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)(a,{}),Object(Oe.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u4fdd\u5b58"})]})}}),Ae=function(e){var t=Object(n.useContext)(Le);return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(qe,Object(h.a)(Object(h.a)({},t),e))})},Me=ke.createToolbarContainer,Ne=ke.createMainComponent,$e=ke.createForm,Je=ke.ResetUpdateFormFieldsButton,Ve=Object(x.a)($e({action:"update"}),Ne(Se),Me)({ActionContainerComponent:function(e){var t=e.dispatch,a=e.match.params.id,n=e.form;return Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)(Je,{dispatch:t,id:a,form:n}),Object(Oe.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u66f4\u65b0"})]})}}),He=function(e){var t=Object(n.useContext)(Le);return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(Ve,Object(h.a)(Object(h.a)({},t),e))})},Ke=a(442),Ge=a(443),Qe=a(444),We=function(e){return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsxs)(we.a,{children:[Object(Oe.jsx)(Ce.a,{span:8,children:Object(Oe.jsx)(U.a.Item,{name:["name"],label:"\u59d3\u540d",children:Object(Oe.jsx)(Fe.a,{})})}),Object(Oe.jsx)(Ce.a,{span:8,children:Object(Oe.jsx)(U.a.Item,{name:["email"],label:"\u90ae\u7bb1",rules:[{type:"email"}],children:Object(Oe.jsx)(Fe.a,{})})}),Object(Oe.jsx)(Ce.a,{span:8,children:Object(Oe.jsx)(U.a.Item,{name:["age"],label:"\u5e74\u9f84",rules:[{type:"number",min:0,max:99}],children:Object(Oe.jsx)(Pe.a,{style:{width:"100%"}})})})]})})},Xe=ke.createToolbarContainer,Ye=ke.createMainComponent,Ze=ke.createPagination,_e=ke.createForm,et=ke.createResetFormFieldsEmptyButton,tt=(0,ke.createList)({buildColumns:function(e){var t=e.match,a=e.dispatch,n=e.history,c=t.path;return[{title:"ID",dataIndex:"id",key:"id"},{title:"\u59d3\u540d",dataIndex:"name",key:"name",render:function(e,t){return Object(Oe.jsx)("a",{href:"javascript:void(0)",onClick:function(){n.push({pathname:f()(c,String(t.id))})},children:e})}},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u5730\u5740",dataIndex:"address",key:"address"},{title:"\u90ae\u7bb1",dataIndex:"email",key:"email"},{title:"\u7f51\u5740",dataIndex:"website",key:"website"},{title:"\u6807\u7b7e",key:"tags",dataIndex:"tags",render:function(e){return Object(Oe.jsx)(Oe.Fragment,{children:e.map((function(e){return Object(Oe.jsx)(Ke.a,{color:"green",children:e.toUpperCase()},e)}))})}},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return Object(Oe.jsx)(Ge.a,{title:"\u786e\u8ba4\u5220\u9664\u8be5\u6761\u6570\u636e?",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onConfirm:function(){a({type:"delete",payload:t.id,callback:function(){var e=Object(he.UrlParser)(window.location.href).queryParams;a({type:"fetch",payload:e})}})},onCancel:function(){},children:Object(Oe.jsx)(Qe.b,{size:"middle",children:Object(Oe.jsx)(m.a,{type:"danger",children:"\u5220\u9664"})})})}}]}}),at=Object(x.a)(_e({action:"search"}),Ye((function(e){var t=e.form,a=e.dispatch,n=et({form:t,resetCallback:function(){pe(),a({type:"fetch"})}});return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)("div",{style:{marginTop:"10px"},children:Object(Oe.jsxs)(we.a,{children:[Object(Oe.jsx)(Ce.a,{span:18,children:Object(Oe.jsx)(We,Object(h.a)({},e))}),Object(Oe.jsx)(Ce.a,{span:6,children:Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)(m.a,{type:"primary",htmlType:"submit",children:"\u641c\u7d22"}),Object(Oe.jsx)(n,{style:{marginLeft:"0.7rem"}})]})})]})}),Object(Oe.jsx)(tt,Object(h.a)({},e))]})})})),Xe)({ActionContainerComponent:function(e){var t=e.match.path;return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(m.a,{type:"primary",onClick:function(){e.history.push({pathname:f()(t,"new")})},children:"\u65b0\u589e"})})},OtherComponent:Ze()}),nt=function(e){var t=Object(n.useContext)(Le);return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(at,Object(h.a)(Object(h.a)({},t),e))})},ct=function(e){return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(Ae,Object(h.a)({},e))})},rt=function(e){return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(He,Object(h.a)({},e))})},it=function(e){return Object(Oe.jsx)(Oe.Fragment,{children:Object(Oe.jsx)(nt,Object(h.a)({},e))})},ot=function(e){var t=e.match.path;return Object(Oe.jsxs)(u.d,{children:[Object(Oe.jsx)(u.b,{path:f()(t,"new"),exact:!0,component:ct}),Object(Oe.jsx)(u.b,{path:f()(t,":id"),exact:!0,component:rt}),Object(Oe.jsx)(u.b,{path:t,exact:!0,component:it})]})},st=function(e){return Object(Oe.jsx)(Re,{children:Object(Oe.jsx)(ot,Object(h.a)({},e))})},lt=a.p+"static/media/logo.6ce24c58.svg",jt=d.a.SubMenu,ut=b.a.Content,dt=b.a.Sider,bt=Object(u.g)((function(e){var t,a=e.history;return Object(Oe.jsx)("div",{children:Object(Oe.jsxs)(b.a,{children:[Object(Oe.jsx)(dt,{collapsible:!0,children:Object(Oe.jsxs)(d.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"],children:[Object(Oe.jsx)("img",{src:lt,className:"App-logo",alt:"logo"}),(t=ae(),t.reduce((function(e,t){return t.children?e.push(Object(Oe.jsx)(jt,{title:Object(Oe.jsxs)("span",{children:[t.icon||Object(Oe.jsx)(p.a,{}),Object(Oe.jsx)("span",{children:t.title})]}),children:t.children.map((function(e){return Object(Oe.jsx)(d.a.Item,{onClick:function(){e.pathname&&a.push(e.pathname)},children:e.title},e.key)}))},t.key)):e.push(Object(Oe.jsx)(d.a.Item,{onClick:function(){t.pathname&&a.push(t.pathname)},children:Object(Oe.jsxs)("span",{children:[t.icon||Object(Oe.jsx)(p.a,{}),Object(Oe.jsx)("span",{children:t.title})]})},t.key)),e}),[])).map((function(e){return e}))]})}),Object(Oe.jsx)(b.a,{children:Object(Oe.jsx)(ut,{children:Object(Oe.jsx)("div",{style:{minHeight:"100vh"},children:Object(Oe.jsxs)(j.a,{children:[Object(Oe.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(Oe.jsx)(u.a,{to:"/article"})}}),Object(Oe.jsx)(u.b,{component:st,path:"/article"})]})})})})]})})})),pt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,446)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(Oe.jsx)(c.a.StrictMode,{children:Object(Oe.jsx)(o.a,{locale:l.a,children:Object(Oe.jsx)(j.a,{children:Object(Oe.jsx)(bt,{})})})}),document.getElementById("root")),pt()}},[[432,1,2]]]);
//# sourceMappingURL=main.14a4d9a3.chunk.js.map