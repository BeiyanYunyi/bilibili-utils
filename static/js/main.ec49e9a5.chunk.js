(this["webpackJsonpbili-utils"]=this["webpackJsonpbili-utils"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);for(var i=n(0),o=n(10),a=n.n(o),c=(n(84),n(46)),r="fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF",s={},l=0;l<58;l++)s[r[l]]=l;var d=[11,10,3,8,4,6],u=177451812,h=8728348608;var j=n(139),b=n(150),p=n(148),f=n(142),v=n(151),g=n(152),m=n(153),x=n(154),w=n(157),O=n(155),y=n(72),k=n(149),S=n(43),B=n(156),W=n(71),C=n.n(W),L=n(61),N=n.n(L),z=n(144),A=n(145),I=n(146),T=n(147),F=n(70),P=n.n(F),V=n(67),E=n.n(V),M=n(68),U=n.n(M),D=n(69),J=n.n(D),R=n(6),X=Object(j.a)({root:{maxWidth:345},media:{maxHeight:250}}),H=function(e){var t=X();return Object(R.jsx)(f.a,{item:!0,children:Object(R.jsx)(z.a,{className:t.root,children:Object(R.jsxs)(A.a,{onClick:function(){setTimeout((function(){window.open("http://www.bilibili.com/video/".concat(e.bvnum))}),200)},children:[Object(R.jsx)(I.a,{className:t.media,component:"img",image:e.src,title:e.title}),Object(R.jsxs)(T.a,{children:[Object(R.jsx)(p.a,{variant:"h6",component:"div",gutterBottom:!0,children:e.title}),Object(R.jsxs)(p.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{display:"flex",alignItems:"center"},children:[Object(R.jsx)(E.a,{fontSize:"small"}),e.click]}),Object(R.jsxs)(p.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{display:"flex",alignItems:"center"},children:[Object(R.jsx)(U.a,{fontSize:"small"}),e.videoreview]}),Object(R.jsxs)(p.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{display:"flex",alignItems:"center"},children:[Object(R.jsx)(J.a,{fontSize:"small"}),e.review]}),Object(R.jsxs)(p.a,{gutterBottom:!0,variant:"body2",color:"textSecondary",component:"p",style:{display:"flex",alignItems:"center"},children:[Object(R.jsx)(P.a,{fontSize:"small"}),e.bvnum]})]})]})})})},_=Object(y.a)({palette:{primary:k.a,secondary:S.a}}),q=Object(j.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"500px",height:"auto"},icon:{color:"rgba(255, 255, 255, 0.54)"},menuButton:{marginRight:e.spacing(2)},videoelement:{width:"500px",height:"500px"}}})),G=function(e){var t=e.prop,n=q();return 0===t.length?"":Object(R.jsxs)(b.a,{style:{maxWidth:"100%"},children:[Object(R.jsx)(p.a,{variant:"text",style:{color:"#8A8A8A"},children:"\u63a8\u8350\u89c6\u9891\u5217\u8868"}),Object(R.jsx)(f.a,{container:!0,spacing:2,children:t.map((function(e){var t="https://wallen.top:7788/".concat(e.cover),i=function(e){e=(e^u)+h;for(var t="BV1  4 1 7  ".split(""),n=0;n<6;n++)t[d[n]]=r[Math.floor(e/Math.pow(58,n))%58];return t.join("")}(e.aid);return Object(R.jsx)(H,{bvnum:i,src:t,title:e.title,className:n.videoelement,click:e.click,review:e.review,videoreview:e.video_review},e.aid)}))})]})},K=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)("BV1uX4y1N7LS"),r=Object(c.a)(a,2),l=r[0],j=r[1],b=q();return Object(R.jsxs)(v.a,{theme:_,children:[Object(R.jsx)(g.a,{position:"static",children:Object(R.jsxs)(m.a,{children:[Object(R.jsx)(x.a,{edge:"start",className:b.menuButton,color:"inherit","aria-label":"menu",children:Object(R.jsx)(C.a,{})}),Object(R.jsx)(p.a,{variant:"h6",children:"\u83b7\u53d6\u63a8\u8350\u89c6\u9891"})]})}),Object(R.jsxs)(f.a,{container:!0,children:[Object(R.jsxs)(f.a,{item:!0,style:{margin:_.spacing(1)},children:[Object(R.jsx)(w.a,{variant:"outlined",size:"small",label:"BV\u53f7",placeholder:"BV1uX4y1N7LS",onChange:function(e){j(e.target.value)}}),Object(R.jsxs)(O.a,{variant:"contained",color:"secondary",size:"large",onClick:function(e){e.preventDefault();var t=function(e){for(var t=0,n=0;n<6;n++)t+=s[e[d[n]]]*Math.pow(58,n);return t-h^u}(l),n="https://wallen.top:7788/http://api.bilibili.cn/author_recommend?aid=".concat(t);N.a.get(n).then((function(e){o([]),o(e.data.list)})).catch((function(e){alert("".concat(e))}))},style:{marginLeft:_.spacing(1)},children:[Object(R.jsx)(B.a,{}),"\u83b7\u53d6"]})]}),Object(R.jsx)(G,{prop:n})]})]})},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),a(e),c(e)}))};a.a.render(Object(R.jsx)(K,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/bilibili-utils",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/bilibili-utils","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Y(t,e)}))}}(),Z()},84:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.ec49e9a5.chunk.js.map