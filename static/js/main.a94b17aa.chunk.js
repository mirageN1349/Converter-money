(this["webpackJsonpnew-shift-t"]=this["webpackJsonpnew-shift-t"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"api_key":"af5ca86ab695c18304b7d1f990731651ff72239be080a5acc9ff87193d735658"}')},16:function(e,t,r){e.exports=r(29)},21:function(e,t,r){},29:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(8),c=r.n(o),i=(r(21),r(1));var l=function(){return a.a.createElement("div",{className:"converter-block-address"},a.a.createElement("input",{placeholder:"ETH address",type:"text",className:"input-address"}))};var u=function(){return a.a.createElement("button",{className:"converter-next"},"NEXT")},s=r(2),v=r.n(s),m=r(5),d=r(4),p=r(14),f=function(){var e=Object(m.a)(v.a.mark((function e(t){var r,n,a,o,c=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]?c[1]:"BNBMAINNET",n=c.length>2?c[2]:void 0,a=c.length>3?c[3]:void 0,e.next=5,a("https://changenow.io/api/v1/exchange-amount/".concat(n,"/").concat(t,"_").concat(r,"/?api_key=").concat(p.api_key));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(m.a)(v.a.mark((function e(t,r){var n,a,o=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>2&&void 0!==o[2]?o[2]:"BNBMAINNET",e.next=3,t("https://changenow.io/api/v1/min-amount/".concat(r,"_").concat(n));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(e,t){return Object(d.a)({type:"CONVERT_DATA"},e,t)},E=function(){return{request:a.a.useCallback(function(){var e=Object(m.a)(v.a.mark((function e(t){var r,n,a,o,c,i=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"GET",n=i.length>2&&void 0!==i[2]?i[2]:null,a=i.length>3&&void 0!==i[3]?i[3]:{},e.prev=3,n&&(n=JSON.stringify(n),a["Content-Type"]="application/json"),e.next=7,fetch(t,{method:r,body:n,headers:a});case 7:return o=e.sent,e.next=10,o.json();case 10:if(c=e.sent,o.ok){e.next=13;break}return e.abrupt("return",alert("\u041f\u0430\u0440\u0430 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u0430!"));case 13:return e.abrupt("return",c);case 16:throw e.prev=16,e.t0=e.catch(3),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),[])}};var h=a.a.memo((function(){var e=E(),t=e.request,r=(e.setPreloader,Object(i.b)()),n=Object(i.c)((function(e){return{converter:e.converter}})).converter;return a.a.createElement("button",{onClick:function(){if((null===n||void 0===n?void 0:n.tickerFrom)&&(null===n||void 0===n?void 0:n.tickerTo)&&(null===n||void 0===n?void 0:n.valueFrom)){if(!((null===n||void 0===n?void 0:n.valueFrom)<(null===n||void 0===n?void 0:n.minConvert)))return(null===n||void 0===n?void 0:n.tickerFrom)===(null===n||void 0===n?void 0:n.tickerTo)||(null===n||void 0===n?void 0:n.tickerTo)===(null===n||void 0===n?void 0:n.tickerFrom)?(r(k("result","-")),void r(k("error",!0))):void r(function(e,t,r,n){return function(){var a=Object(m.a)(v.a.mark((function a(o){var c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o(k("loading",!0)),a.next=3,f(e,t,r,n);case 3:c=a.sent,o({type:"CONVERT_RESULT",payload:null===c||void 0===c?void 0:c.estimatedAmount}),o(k("loading",!1));case 6:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(null===n||void 0===n?void 0:n.tickerFrom.toLowerCase(),null===n||void 0===n?void 0:n.tickerTo.toLowerCase(),null===n||void 0===n?void 0:n.valueFrom,t));r(k("result","-"))}},className:"button-convert"},a.a.createElement("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M9.26228 2.33243L11.3097 4.37983L0.523856 4.37983L0.524061 6.83013L11.3097 6.83013L9.2622 8.87758L10.9948 10.6101L16.0001 5.60493L10.9949 0.599853L9.26228 2.33243Z"}),a.a.createElement("path",{d:"M6.73777 19.365L4.69033 17.3176L15.7312 17.3176L15.731 14.8673L4.69036 14.8673L6.73785 12.8199L5.00527 11.0873L-2.3107e-05 16.0925L5.00516 21.0976L6.73777 19.365Z"})))})),g=r(3),O=r(7);var y=function(e){var t=e.ticket,r=e.setInput,n=e.type,o=e.setList,c=E().request,l=Object(i.b)();function u(){l(k("error",!0)),l(k("result","-"))}var s=!1,p=function(){var e=Object(m.a)(v.a.mark((function e(t){var a,i,m,p;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target.innerText,l(k(i="from"===n?"tickerFrom":"tickerTo",a)),o(!1),(null===(m=window.store.getState().converter)||void 0===m?void 0:m.tickerTo)===(null===m||void 0===m?void 0:m.tickerFrom)||(null===m||void 0===m?void 0:m.tickerFrom)===(null===m||void 0===m?void 0:m.tickerTo)?(u(),s=!0):(s=!1,l(k("result",0))),console.log("from",null===m||void 0===m?void 0:m.tickerFrom,"to",null===m||void 0===m?void 0:m.tickerTo),r((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(d.a)({},i,a))})),!(null===m||void 0===m?void 0:m.tickerFrom)||!(null===m||void 0===m?void 0:m.tickerTo)){e.next=19;break}if(!0!==s){e.next=11;break}return e.abrupt("return");case 11:return l(k("error",!1)),l(k("loading",!0)),e.next=15,b(c,null===m||void 0===m?void 0:m.tickerFrom,null===m||void 0===m?void 0:m.tickerTo);case 15:p=e.sent,l(k("minConvert",null===p||void 0===p?void 0:p.minAmount)),(null===m||void 0===m?void 0:m.valueFrom)&&"0"!==(null===m||void 0===m?void 0:m.valueFrom)||l(k("valueFrom",null===p||void 0===p?void 0:p.minAmount)),l(k("loading",!1));case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("div",{onClick:p,className:"converter-ticket"},null===t||void 0===t?void 0:t.ticker.toUpperCase())};var j=a.a.memo((function(){var e=Object(i.b)(),t=a.a.useState(!1),r=Object(O.a)(t,2),n=r[0],o=r[1],c=a.a.useState({valueFrom:"",tickerFrom:""}),l=Object(O.a)(c,2),u=l[0],s=l[1],v=Object(i.c)((function(e){var t=e.listMoney,r=e.converter;return{listMoney:t.listMoney,valueFrom:r.valueFrom,minConvert:r.minConvert,tickerTo:r.tickerTo,tickerFrom:r.tickerFrom,result:r.result,error:r.error}})),m=v.listMoney,p=v.valueFrom,f=v.minConvert,b=v.result,E=v.tickerTo,h=v.tickerFrom,j=v.error,N=function(t){t.persist(),"tickerFrom"===t.target.name&&(t.target.value?o(!0):o(!1)),s((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(d.a)({},t.target.name,t.target.value.toUpperCase()))})),e(k(t.target.name,t.target.value))};return a.a.createElement("div",{className:"converter-block"},a.a.createElement("input",{name:"valueFrom",className:"converter-input",onChange:N,value:p,placeholder:"0",type:"text"}),a.a.createElement("input",{placeholder:"BTC",value:u.tickerFrom,onChange:N,onClick:function(e){e.target.setAttribute("disabled",!0),o(!n)},type:"text",name:"tickerFrom"}),"-"!==b||j?j&&"-"===b?a.a.createElement("span",{className:"error-min"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0432\u0430\u043b\u044e\u0442\u044b"):h?E?p&&"0"!==p?a.a.createElement("span",{className:"success"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438"):a.a.createElement("span",{className:"error-min"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438"):a.a.createElement("span",{className:"error-min"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0442\u043e\u0433\u043e\u0432\u0443\u044e \u0432\u0430\u043b\u044e\u0442\u0443"):a.a.createElement("span",{className:"error-min"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u0443\u044e \u0432\u0430\u043b\u044e\u0442\u0443"):a.a.createElement("span",{className:"error-min"},"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438: ",a.a.createElement("span",{className:"error-min__value"},f||"\u043f\u0430\u0440\u0430 \u043d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u0430")),a.a.createElement("div",{className:n?"converter-list":"converter-list none"},m.map((function(e,t){return a.a.createElement(y,{key:"".concat(e.ticker,"_").concat(t),ticket:e,setInput:s,type:"from",setList:o})}))))}));var N=a.a.memo((function(){var e=Object(i.b)(),t=a.a.useState(!1),r=Object(O.a)(t,2),n=r[0],o=r[1],c=a.a.useState({valueTo:"",tickerTo:""}),l=Object(O.a)(c,2),u=l[0],s=l[1],v=Object(i.c)((function(e){var t=e.listMoney,r=e.converter;return{listMoney:t.listMoney,result:r.result}})),m=v.listMoney,p=v.result,f=function(t){t.persist(),"tickerTo"===t.target.name&&(t.target.value?o(!0):o(!1)),e(k(t.target.name,t.target.value)),s((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(d.a)({},t.target.name,t.target.value))}))};return a.a.createElement("div",{className:"converter-block"},a.a.createElement("input",{name:"valueTo",onChange:f,value:p,placeholder:"0",type:"text",disabled:!0}),a.a.createElement("input",{placeholder:"BNBMAINNET",value:u.tickerTo,onChange:f,onClick:function(e){e.target.setAttribute("disabled",!0),o(!n)},type:"text",name:"tickerTo"}),a.a.createElement("div",{className:n?"converter-list":"converter-list none"},m.map((function(e,t){return a.a.createElement(y,{key:"".concat(e.ticker,"_").concat(t),ticket:e,setInput:s,type:"to",setList:o})}))))}));var T=function(){return a.a.createElement("div",{className:"progress"},a.a.createElement("div",{className:"indeterminate"}))};var w=function(){var e=Object(i.c)((function(e){return{loading:e.converter.loading}})).loading;return a.a.createElement("div",{className:"converter"},a.a.createElement("div",{className:"converter-blocks"},a.a.createElement(j,null),a.a.createElement(h,null),a.a.createElement(N,null)),a.a.createElement("div",{className:"converter-blocks"},a.a.createElement(l,null),a.a.createElement(u,null)),a.a.createElement("div",{className:"converter-preloader"},e?a.a.createElement(T,null):""))},x=function(e){return{type:"GET_LIST_MONEY",payload:e}};var F=function(){var e=E().request,t=Object(i.b)();return a.a.useEffect((function(){t(function(e){return function(){var t=Object(m.a)(v.a.mark((function t(r){var n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(k("loading",!0)),t.next=3,e("https://changenow.io/api/v1/currencies?active=true","GET");case 3:n=t.sent,r(x(n)),r(k("loading",!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))})),a.a.createElement("div",{className:"container"},a.a.createElement(w,null))},L=r(6),C=r(15),M={result:0,minConvert:0,error:!1,loading:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,r=Object.keys(t)[1],n=t[r];switch(t.type){case"CONVERT_DATA":return Object(g.a)(Object(g.a)({},e),{},Object(d.a)({},r,n));case"CONVERT_RESULT":return Object(g.a)(Object(g.a)({},e),{},{result:t.payload});default:return e}},A={listMoney:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LIST_MONEY":return Object(g.a)(Object(g.a)({},e),{},{listMoney:t.payload});default:return e}},B=Object(L.c)({listMoney:S,converter:_}),I=Object(L.d)(B,Object(L.a)(C.a));window.store=I;var R=I;c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(i.a,{store:R},a.a.createElement(F,null))),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a94b17aa.chunk.js.map