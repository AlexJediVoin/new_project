(this.webpackJsonpnew_project=this.webpackJsonpnew_project||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={post:"Message_post__m9rtP",block_1:"Message_block_1__3MRiF",avatar:"Message_avatar__1b-mM",triangle:"Message_triangle__2nlQ8",block_2:"Message_block_2__2r9Uu",wrap:"Message_wrap__3sxXg",name:"Message_name__2EvZL",message:"Message_message__1dQ38",date:"Message_date__2X7J5"}},function(e,t,n){e.exports={container:"StyleForAllPages_container__H8Yhh"}},,,function(e,t,n){e.exports={panel:"Header_panel__2o_1o",hidden_panel:"Header_hidden_panel__2vnqV",nav_item:"Header_nav_item__2SjNK"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__2sIfq",error:"Greeting_error__1YAFa",dont_have_error:"Greeting_dont_have_error__3D7Te",have_error:"Greeting_have_error__3aeVv"}},function(e,t,n){e.exports={img_pencil:"SpanStyle_img_pencil__1ZD63",span_style:"SpanStyle_span_style__3p6YI"}},,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__1inEt",type2:"SuperInputText_type2__2E2Gh",errorInput:"SuperInputText_errorInput__3kM5e",error:"SuperInputText_error__ZJ6Lg"}},,function(e,t,n){e.exports={blue:"HW4_blue__m_quK",column:"HW4_column__1Vd22",testSpanError:"HW4_testSpanError__vQ7Ik"}},function(e,t,n){e.exports={default:"SuperButton_default__2IyT1",red:"SuperButton_red__26fl9"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3Rslt",spanClassName:"SuperCheckbox_spanClassName__3mJjF"}},function(e,t,n){e.exports={dark:"HW12_dark__1p0NA","dark-text":"HW12_dark-text__2OCv2",red:"HW12_red__c17X0","red-text":"HW12_red-text__2nIam",some:"HW12_some__1gULv","some-text":"HW12_some-text__t1BDP"}},,function(e,t,n){e.exports={App:"App_App__CVxHt"}},function(e,t,n){e.exports={range:"SuperRange_range__2jBG1"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(22),s=n.n(r),i=(n(29),n(23)),o=n.n(i),j=n(9),l=n(11),u=n.n(l),b=n(0);var d=function(){return Object(b.jsx)("div",{className:u.a.panel,children:Object(b.jsxs)("nav",{className:u.a.hidden_panel,children:[Object(b.jsx)(j.b,{className:u.a.nav_item,to:"/pre-junior",children:" PreJunior"}),Object(b.jsx)(j.b,{className:u.a.nav_item,to:"/junior",children:" Junior"}),Object(b.jsx)(j.b,{className:u.a.nav_item,to:"/junior+",children:" Junior+"})]})})},h=n(2),O=n(7),x=n.n(O);var p=function(e){return Object(b.jsxs)("div",{className:x.a.post,children:[Object(b.jsx)("div",{className:x.a.block_1,children:Object(b.jsx)("img",{className:x.a.avatar,src:e.avatar,alt:"\u0442\u0443\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})}),Object(b.jsx)("div",{className:x.a.block_2,children:Object(b.jsxs)("div",{className:x.a.wrap,children:[Object(b.jsx)("div",{className:x.a.name,children:e.name}),Object(b.jsx)("div",{className:x.a.message,children:e.message}),Object(b.jsx)("div",{className:x.a.date,children:e.time}),Object(b.jsx)("div",{className:x.a.triangle})]})})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",m="Artem",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",f="22:00";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)(p,{avatar:_,name:m,message:v,time:f}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=n(3);var k=function(e){return Object(b.jsxs)("div",{children:[e.affair.name," ",e.affair.priority,Object(b.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var N=function(e){var t=e.data.map((function(t){return Object(b.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(a.useState)(y),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(C.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):void 0}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(N,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!=t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},w=n(15),T=n(13),F=n.n(T),I=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=c?F.a.someClass:F.a.error,i=c?F.a.dont_have_error:F.a.have_error;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:s,onKeyPress:function(e){"Enter"===e.key&&a()}}),Object(b.jsx)("button",{onClick:a,children:"add"}),Object(b.jsx)("span",{children:r}),Object(b.jsx)("div",{className:i,children:c})]})},H=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(C.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],d=t.length;return Object(b.jsx)(I,{name:s,setNameCallback:function(e){""!==e.currentTarget.value?(i(e.currentTarget.value),u("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0420\u0410\u0417\u0420\u0415\u0428\u0415\u041d\u041e!")):(u(""),i(""))},addUser:function(){""!==s&&(n(s),d+=1,alert("Hello ".concat(s," !")))},error:l,totalUsers:d})},A=n(33);var E=function(){var e=Object(a.useState)([]),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(H,{users:n,addUserCallback:function(e){var t=[{_id:Object(A.a)(),name:e}].concat(Object(w.a)(n));c(t)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},M=n(6),P=n(5),W=n(16),J=n.n(W),B=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],R=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(P.a)(e,B),j="".concat(J.a.error," ").concat(i||""),l="".concat(r?J.a.errorInput:J.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(b.jsx)("span",{className:j,children:r})]})},U=n(18),D=n.n(U),G=n(19),K=n.n(G),X=["red","className"],q=function(e){var t=e.red,n=e.className,a=Object(P.a)(e,X),c="".concat(t?K.a.red:K.a.default," ").concat(n);return Object(b.jsx)("button",Object(M.a)({className:c},a))},L=n(20),V=n.n(L),Y=["type","onChange","onChangeChecked","className","spanClassName","children"],Z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(P.a)(e,Y),s="".concat(V.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(b.jsx)("span",{className:V.a.spanClassName,children:c})]})};var Q=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:D.a.column,children:[Object(b.jsx)(R,{value:n,onChangeText:c,onEnter:s,error:r}),Object(b.jsx)(R,{className:D.a.blue}),Object(b.jsx)(q,{children:"default"}),Object(b.jsx)(q,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(q,{disabled:!0,children:"disabled"}),Object(b.jsx)(Z,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(Z,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},z=n(8),$=n.n(z);var ee=function(){return Object(b.jsxs)("div",{className:$.a.container,children:[Object(b.jsx)(g,{}),Object(b.jsx)(S,{}),Object(b.jsx)(E,{}),Object(b.jsx)(Q,{})]})};var te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 10",Object(b.jsx)("div",{children:Object(b.jsx)(q,{onClick:function(){console.log("loading...")},children:"set loading..."})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ne=n(24),ae=n.n(ne),ce=["type","onChange","onChangeRange","className"],re=function(e){e.type;var t=e.onChange,n=e.onChangeRange,a=e.className,c=Object(P.a)(e,ce),r="".concat(ae.a.range," ").concat(a||"");return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("input",Object(M.a)({type:"range",onChange:function(e){t&&t(e),n&&n(+e.currentTarget.value)},className:r},c))})},se=function(e){e.onChangeRange,e.value;return Object(b.jsx)(b.Fragment,{children:"DoubleRange"})};var ie=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=(t[1],Object(a.useState)(100)),r=Object(C.a)(c,2),s=r[0];return r[1],Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 11",Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(re,{})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)(se,{}),Object(b.jsx)("span",{children:s})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},oe=n(21),je=n.n(oe);var le=function(){return Object(b.jsxs)("div",{className:je.a.some,children:[Object(b.jsx)("hr",{}),Object(b.jsx)("span",{className:je.a["some-text"],children:"homeworks 12"}),Object(b.jsx)("hr",{})]})};var ue=function(){return Object(b.jsxs)("div",{className:$.a.container,children:[Object(b.jsx)(te,{}),Object(b.jsx)(ie,{}),Object(b.jsx)(le,{})]})},be=n(14),de=n.n(be),he=["autoFocus","onBlur","onEnter","spanProps"],Oe=["children","onDoubleClick","className"],xe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(P.a)(e,he),s=Object(a.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=c||{},u=l.children,d=l.onDoubleClick,h=l.className,O=Object(P.a)(l,Oe),x="".concat(de.a.span_style," ").concat(h);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(R,Object(M.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(b.jsx)("span",Object(M.a)(Object(M.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},O),{},{children:u||r.value}))})};function pe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function _e(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}pe("test",{x:"A",y:1});_e("test",{x:"",y:0});var me=function(){var e=Object(a.useState)("\u042d\u0442\u043e\u0442 \u0442\u0435\u043a\u0441\u0442 \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c!"),t=Object(C.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:de.a.img_pencil,src:"https://img.icons8.com/material/2x/pencil--v2.png"}),Object(b.jsx)(xe,{value:n,onChangeText:function(e){c(e)},spanProps:{children:n?void 0:"enter text..."}})]}),Object(b.jsx)(q,{onClick:function(){pe("editable-span-value",n)},children:"save"}),Object(b.jsx)(q,{onClick:function(){c(_e("editable-span-value",n))},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ve=["options","onChange","onChangeOption","value"],fe=function(e){var t=e.options,n=(e.onChange,e.onChangeOption),a=e.value,c=Object(P.a)(e,ve),r=t?t.map((function(e,t){return Object(b.jsx)("option",{children:e},t)})):[];return Object(b.jsx)("select",Object(M.a)(Object(M.a)({value:a,onChange:function(e){n&&n(e.currentTarget.value)}},c),{},{children:r}))},ge=["type","name","options","value","onChange","onChangeOption"],Ce=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=(e.onChange,e.onChangeOption),r=(Object(P.a)(e,ge),function(e){c&&c(e.currentTarget.value)}),s=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:t,value:e,onChange:r,checked:e===a}),e]},n)})):[];return Object(b.jsx)(b.Fragment,{children:s})},ke=["x","y","z"];var Ne=function(){var e=Object(a.useState)(ke[0]),t=Object(C.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(fe,{options:ke,value:n,onChangeOption:c})}),Object(b.jsx)("div",{children:Object(b.jsx)(Ce,{name:"radio",options:ke,value:n,onChangeOption:c})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ye=function(e,t){var n=Object(w.a)(e);switch(t.type){case"sort":return"up"===t.payload&&n.sort((function(e,t){return e.name>t.name?1:-1})),"down"===t.payload&&n.sort((function(e,t){return e.name<t.name?1:-1})),n;case"check":return n.filter((function(e){return e.age>t.payload})).sort((function(e,t){return e.age>t.age?1:-1}));default:return e}},Se=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var we=function(){var e=Object(a.useState)(Se),t=Object(C.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:e.name}),Object(b.jsx)("th",{children:e.age})]},e._id)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 8",Object(b.jsxs)("table",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u0418\u043c\u0435\u043d\u0430"}),Object(b.jsx)("th",{children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"})]}),r]}),Object(b.jsx)("span",{children:Object(b.jsx)(q,{onClick:function(){return c(ye(Se,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(b.jsx)("span",{children:Object(b.jsx)(q,{onClick:function(){return c(ye(Se,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(b.jsx)("span",{children:Object(b.jsx)(q,{onClick:function(){return c(ye(Se,{type:"check",payload:18}))},children:"check 18"})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Te=function(){return Object(b.jsxs)("div",{className:$.a.container,children:[Object(b.jsx)(me,{}),Object(b.jsx)(Ne,{}),Object(b.jsx)(we,{})]})};var Fe=function(){return Object(b.jsxs)("div",{className:$.a.container,children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},Ie="/pre-junior",He="/junior",Ae="/junior+";var Ee=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/",element:""}),Object(b.jsx)(h.a,{path:Ie,element:Object(b.jsx)(ee,{})}),Object(b.jsx)(h.a,{path:He,element:Object(b.jsx)(Te,{})}),Object(b.jsx)(h.a,{path:Ae,element:Object(b.jsx)(ue,{})}),Object(b.jsx)(h.a,{path:"/*",element:Object(b.jsx)(Fe,{})})]})})};var Me=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)(Ee,{})]})})};var Pe=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0438:"}),Object(b.jsx)(Me,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.fc1890c3.chunk.js.map