(this["webpackJsonpmessage-notification-mui-example"]=this["webpackJsonpmessage-notification-mui-example"]||[]).push([[0],{40:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(9),r=a.n(l),o=a(74),c=a(73),u=a(75);const i=Object(n.createContext)({message:null,addMessage:null,removeMessage:null}),m=({children:e})=>{const t=Object(n.useState)(null),a=t[0],l=t[1],r={message:a,addMessage:Object(n.useCallback)((e,t,a,n)=>((e,t,a,n)=>{l({title:e,text:t,type:a,duration:n})})(e,t,a,n),[]),removeMessage:Object(n.useCallback)(()=>{l(null)},[])};return s.a.createElement(i.Provider,{value:r},e)},g=()=>{const e=Object(n.useContext)(i);return{message:e.message,addMessage:e.addMessage,removeMessage:e.removeMessage}},d=()=>{const e=g(),t=e.message,a=e.removeMessage,n=t||{title:"",text:"",type:"info",duration:6e3},l=n.title,r=n.text,i=n.type,m=n.duration,d=()=>{a()},E=()=>t?s.a.createElement(c.a,{onClose:d,severity:i},s.a.createElement(u.a,null,l),r):s.a.createElement("div",null);return s.a.createElement(o.a,{open:!!t,autoHideDuration:m,onClose:d,anchorOrigin:{vertical:"top",horizontal:"center"}},s.a.createElement(E,null))};var E=()=>{const e=g().addMessage,t=t=>{const a="".concat(t.toUpperCase()," Message"),n="My ".concat(t," message");e(a,n,t,3e3)};return s.a.createElement("div",null,s.a.createElement("button",{onClick:()=>{t("info")}},"Show Info Message"),s.a.createElement("button",{onClick:()=>{t("warning")}},"Show Warning Message"),s.a.createElement("button",{onClick:()=>{t("success")}},"Show Success Message"),s.a.createElement("button",{onClick:()=>{t("error")}},"Show Error Message"))};var M=()=>s.a.createElement(m,null,s.a.createElement("div",null,s.a.createElement(E,null)),s.a.createElement(d,null));r.a.render(s.a.createElement(M,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.3f0654c0.chunk.js.map