(this["webpackJsonpnew-shift-t"]=this["webpackJsonpnew-shift-t"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"api_key":"af5ca86ab695c18304b7d1f990731651ff72239be080a5acc9ff87193d735658"}')},16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(8),o=n.n(c),i=(n(21),n(3));var u=function(){return a.a.createElement("div",{className:"converter-block-address"},a.a.createElement("input",{placeholder:"ETH address",type:"text",className:"input-address"}))};var l=function(){return a.a.createElement("button",{className:"converter-next"},"NEXT")},s=n(1),v=n.n(s),m=n(5),p=n(4),d=n(14),f=function(){var e=Object(m.a)(v.a.mark((function e(t){var n,r,a,c,o=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"BNBMAINNET",r=o.length>2?o[2]:void 0,a=o.length>3?o[3]:void 0,e.next=5,a("https://changenow.io/api/v1/exchange-amount/".concat(r,"/").concat(t,"_").concat(n,"/?api_key=").concat(d.api_key));case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(v.a.mark((function e(t,n){var r,a,c=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>2&&void 0!==c[2]?c[2]:"BNBMAINNET",e.next=3,t("https://changenow.io/api/v1/min-amount/".concat(n,"_").concat(r));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(e,t){return Object(p.a)({type:"CONVERT_DATA"},e,t)},k=function(){return{request:a.a.useCallback(function(){var e=Object(m.a)(v.a.mark((function e(t){var n,r,a,c,o,i=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"GET",r=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{},e.prev=3,r&&(r=JSON.stringify(r),a["Content-Type"]="application/json"),e.next=7,fetch(t,{method:n,body:r,headers:a});case 7:return c=e.sent,e.next=10,c.json();case 10:if(o=e.sent,c.ok){e.next=13;break}throw new Error(o.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!");case 13:return e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(3),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),[])}};var E=a.a.memo((function(){var e=k().request,t=Object(i.b)(),n=Object(i.c)((function(e){return{converter:e.converter}})).converter;return a.a.createElement("button",{onClick:function(){return(null===n||void 0===n?void 0:n.tickerFrom)?(null===n||void 0===n?void 0:n.tickerTo)?(null===n||void 0===n?void 0:n.valueFrom)?(null===n||void 0===n?void 0:n.valueFrom)<(null===n||void 0===n?void 0:n.minConvert)?alert("\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438 ".concat(null===n||void 0===n?void 0:n.minConvert)):void t(function(e,t,n,r){return function(){var a=Object(m.a)(v.a.mark((function a(c){var o;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,f(e,t,n,r);case 2:o=a.sent,c({type:"CONVERT_RESULT",payload:o.estimatedAmount});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(null===n||void 0===n?void 0:n.tickerFrom.toLowerCase(),null===n||void 0===n?void 0:n.tickerTo.toLowerCase(),null===n||void 0===n?void 0:n.valueFrom,e)):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438!"):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0442\u043e\u0433\u043e\u0432\u0443\u044e  \u0432\u0430\u043b\u044e\u0442\u0443!"):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u0443\u044e \u0432\u0430\u043b\u044e\u0442\u0443!")},className:"button-convert"},a.a.createElement("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M9.26228 2.33243L11.3097 4.37983L0.523856 4.37983L0.524061 6.83013L11.3097 6.83013L9.2622 8.87758L10.9948 10.6101L16.0001 5.60493L10.9949 0.599853L9.26228 2.33243Z"}),a.a.createElement("path",{d:"M6.73777 19.365L4.69033 17.3176L15.7312 17.3176L15.731 14.8673L4.69036 14.8673L6.73785 12.8199L5.00527 11.0873L-2.3107e-05 16.0925L5.00516 21.0976L6.73777 19.365Z"})))})),O=n(2),y=n(7);var j=function(e){var t=e.ticket,n=e.setInput,r=e.type,c=e.setList,o=k().request,u=Object(i.b)(),l=function(){var e=Object(m.a)(v.a.mark((function e(t){var a,i,l,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.innerText,u(h(i="from"===r?"tickerFrom":"tickerTo",a)),c(!1),(null===(l=window.store.getState().converter)||void 0===l?void 0:l.tickerTo)!==(null===l||void 0===l?void 0:l.tickerFrom)){e.next=8;break}return c(!1),e.abrupt("return",alert("\u0412\u0430\u043b\u044e\u0442\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435!"));case 8:if(n((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(p.a)({},i,a))})),!(null===l||void 0===l?void 0:l.tickerFrom)||!(null===l||void 0===l?void 0:l.tickerTo)){e.next=15;break}return e.next=12,b(o,null===l||void 0===l?void 0:l.tickerFrom,null===l||void 0===l?void 0:l.tickerTo);case 12:s=e.sent,u(h("minConvert",s.minAmount)),(null===l||void 0===l?void 0:l.valueFrom)||u(h("valueFrom",s.minAmount));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{onClick:l,className:"converter-ticket"},null===t||void 0===t?void 0:t.ticker.toUpperCase())};var g=a.a.memo((function(){var e=Object(i.b)(),t=a.a.useState(!1),n=Object(y.a)(t,2),r=n[0],c=n[1],o=a.a.useState({valueFrom:"",tickerFrom:""}),u=Object(y.a)(o,2),l=u[0],s=u[1],v=Object(i.c)((function(e){var t=e.listMoney,n=e.converter;return{listMoney:t.listMoney,valueFrom:n.valueFrom}})),m=v.listMoney,d=v.valueFrom,f=function(t){t.persist(),"tickerFrom"===t.target.name&&(t.target.value?c(!0):c(!1)),s((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(p.a)({},t.target.name,t.target.value.toUpperCase()))})),e(h(t.target.name,t.target.value))};return a.a.createElement("div",{className:"converter-block"},a.a.createElement("input",{name:"valueFrom",onChange:f,value:d,placeholder:"0",type:"text"}),a.a.createElement("input",{placeholder:"BTC",value:l.tickerFrom,onChange:f,onClick:function(){c(!r)},type:"text",name:"tickerFrom"}),a.a.createElement("div",{className:r?"converter-list":"converter-list none"},m.map((function(e,t){return a.a.createElement(j,{key:"".concat(e.ticket,"_").concat(t),ticket:e,setInput:s,type:"from",setList:c})}))))}));var w=a.a.memo((function(){var e=Object(i.b)(),t=a.a.useState(!1),n=Object(y.a)(t,2),r=n[0],c=n[1],o=a.a.useState({valueTo:"",tickerTo:""}),u=Object(y.a)(o,2),l=u[0],s=u[1],v=Object(i.c)((function(e){var t=e.listMoney,n=e.converter;return{listMoney:t.listMoney,result:n.result}})),m=v.listMoney,d=v.result,f=function(t){t.persist(),"tickerTo"===t.target.name&&(t.target.value?c(!0):c(!1)),e(h(t.target.name,t.target.value)),s((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(p.a)({},t.target.name,t.target.value))}))};return a.a.createElement("div",{className:"converter-block"},a.a.createElement("input",{name:"valueTo",onChange:f,value:d,placeholder:"0",type:"text",disabled:!0}),a.a.createElement("input",{placeholder:"BNBMAINNET",value:l.tickerTo,onChange:f,onClick:function(){c(!r)},type:"text",name:"tickerTo"}),a.a.createElement("div",{className:r?"converter-list":"converter-list none"},m.map((function(e,t){return a.a.createElement(j,{key:"".concat(e.ticket,"_").concat(t),ticket:e,setInput:s,type:"to",setList:c})}))))}));var T=function(){return a.a.createElement("div",{className:"converter"},a.a.createElement("div",{className:"converter-blocks"},a.a.createElement(g,null),a.a.createElement(E,null),a.a.createElement(w,null)),a.a.createElement("div",{className:"converter-blocks"},a.a.createElement(u,null),a.a.createElement(l,null)))},N=function(e){return{type:"GET_LIST_MONEY",payload:e}};var x=function(){var e=k().request,t=Object(i.b)();return a.a.useEffect((function(){t(function(e){return function(){var t=Object(m.a)(v.a.mark((function t(n){var r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("https://changenow.io/api/v1/currencies?active=true","GET");case 2:r=t.sent,n(N(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))})),a.a.createElement("div",{className:"container"},a.a.createElement(T,null))},L=n(6),C=n(15),F={result:0,minConvert:0},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,n=Object.keys(t)[1],r=t[n];switch(t.type){case"CONVERT_DATA":return Object(O.a)(Object(O.a)({},e),{},Object(p.a)({},n,r));case"CONVERT_RESULT":return Object(O.a)(Object(O.a)({},e),{},{result:t.payload});default:return e}},_={listMoney:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIST_MONEY":return Object(O.a)(Object(O.a)({},e),{},{listMoney:t.payload});default:return e}},A=Object(L.c)({listMoney:S,converter:M}),B=Object(L.d)(A,Object(L.a)(C.a));window.store=B;var I=B;o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:I},a.a.createElement(x,null))),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d3a24d55.chunk.js.map