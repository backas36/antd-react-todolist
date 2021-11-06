(this["webpackJsonpantd-todolist"]=this["webpackJsonpantd-todolist"]||[]).push([[0],{216:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(19),i=n.n(c),a=n(28),l=(n(139),n(224)),s=n(44),d=n(231),j=n(123),u=n(223),O=n(219),b=n(222),p=n(226),h="ADD_TODO",f="TOGGLE_TODO",x="DELETE_TODO",y="DELETE_COMPLETED_TODO",g="SET_FILTER",m=0,v=function(e){return{type:h,payload:{id:m++,content:e}}},E=function(e){return{type:g,payload:{filter:e}}},T=n(10),_=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],o=t[1],c=Object(a.b)(),i=function(e){var t=n.trim();if(t){if("Enter"===e.key)return c(v(t)),o("");c(v(t)),o("")}else u.a.error({title:"\u8acb\u8f38\u5165 todo \u540d\u7a31",okText:"\u77e5\u9053\u4e86\uff01"})};return Object(T.jsxs)(O.a,{style:{flexFlow:"nowrap"},children:[Object(T.jsx)(b.a,{placeholder:"\u8acb\u8f38\u5165 TODO \u540d\u7a31",allowClear:!0,size:"large",bordered:!0,value:n,onChange:function(e){o(e.target.value)},style:{maxWidth:"600px"},onPressEnter:function(e){return i(e)}}),Object(T.jsx)(s.a,{type:"primary",icon:Object(T.jsx)(p.a,{}),size:"large",onClick:i,children:"Add"})]})},D=n(220),w=n(221),C=n(225),k=n(128),z=n(227),S=function(){var e=Object(a.c)((function(e){return function(e){var t=e.showFilter,n=e.todos.todos;switch(t){case"\u5df2\u5b8c\u6210":return n.filter((function(e){return e.completed}));case"\u672a\u5b8c\u6210":return n.filter((function(e){return!e.completed}));default:return n}}(e)})),t=Object(a.b)();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(D.a,{orientation:"left",children:"TodoList"}),e&&e.length?Object(T.jsx)(w.b,{size:"large",bordered:!0,style:{fontSize:"1rem"},dataSource:e,renderItem:function(e){return Object(T.jsx)(w.b.Item,{style:e.completed?{textDecoration:"line-through"}:{},actions:[Object(T.jsx)(C.a,{title:"completed",children:Object(T.jsx)(s.a,{type:"ghost",shape:"circle",icon:Object(T.jsx)(k.a,{}),size:"middle",onClick:function(){return t((n=e.id,{type:f,payload:{id:n}}));var n}})}),Object(T.jsx)(C.a,{title:"delete",children:Object(T.jsx)(s.a,{type:"ghost",shape:"circle",icon:Object(T.jsx)(z.a,{}),size:"middle",danger:!0,ghost:!0,onClick:function(){return t((n=e.id,{type:x,payload:{id:n}}));var n}})})],children:e.content})}}):Object(T.jsx)("div",{children:"No todo yet !"})]})},L=n(228),A=n(229),F=n(230),I=function(){var e=Object(a.c)((function(e){return e.showFilter})),t=Object(a.b)();return Object(T.jsxs)(O.a,{style:{margin:"30px"},justify:"space-around",children:[Object(T.jsx)(s.a,{icon:Object(T.jsx)(L.a,{}),type:"primary",size:"large",ghost:"all"!==e,onClick:function(){return t(E("all"))},children:"All"}),Object(T.jsx)(s.a,{icon:Object(T.jsx)(A.a,{}),type:"primary",size:"large",ghost:"\u5df2\u5b8c\u6210"!==e,onClick:function(){return t(E("\u5df2\u5b8c\u6210"))},children:"\u5df2\u5b8c\u6210"}),Object(T.jsx)(s.a,{icon:Object(T.jsx)(F.a,{}),type:"danger",size:"large",ghost:"\u672a\u5b8c\u6210"!==e,onClick:function(){return t(E("\u672a\u5b8c\u6210"))},children:"\u672a\u5b8c\u6210"})]})},N=l.a.Header,R=l.a.Content;var P=function(){var e=Object(a.c)((function(e){return e.todos})).todos,t=Object(a.b)();return Object(T.jsxs)(l.a,{style:{minHeight:"100vh"},children:[Object(T.jsx)(N,{style:{color:"#fff",fontSize:"20px"},children:"Use React, Redux, and Antd Design build Todo APP"}),Object(T.jsxs)(R,{style:{textAlign:"center",padding:"30px",margin:"0 auto",minWidth:"70vw"},children:[Object(T.jsx)(_,{}),Object(T.jsx)(I,{}),Object(T.jsx)(S,{}),e.length?Object(T.jsx)(s.a,{icon:Object(T.jsx)(d.a,{}),type:"primary",size:"large",ghost:!0,style:{marginTop:"60px"},onClick:function(){return t({type:y})},children:"Clean Completed"}):""]})]})},X=n(86),U=n(100),G=n(124),H={todos:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:var n=t.payload,r=n.id,o=n.content;return{todos:[].concat(Object(G.a)(e.todos),[{id:r,content:o,completed:!1}])};case f:var c=t.payload.id;return{todos:e.todos.map((function(e){return e.id!==c?e:Object(U.a)(Object(U.a)({},e),{},{completed:!e.completed})}))};case x:var i=t.payload.id;return{todos:e.todos.filter((function(e){return e.id!==i}))};case y:return{todos:e.todos.filter((function(e){return!e.completed}))};default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",t=arguments.length>1?arguments[1]:void 0;return t.type===g?t.payload.filter:e},V=Object(X.a)({todos:J,showFilter:M}),W=Object(X.b)(V,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(T.jsx)(o.a.StrictMode,{children:Object(T.jsx)(a.a,{store:W,children:Object(T.jsx)(P,{})})}),document.getElementById("root"))}},[[216,1,2]]]);
//# sourceMappingURL=main.248d6e7c.chunk.js.map