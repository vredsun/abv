(this.webpackJsonpabv=this.webpackJsonpabv||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var i=t(1),o=t.n(i),r=t(4),c=t.n(r),a=(t(9),t(3)),s=(t(10),t(0));var l=function(){var e=Object(i.useState)(void 0),n=Object(a.a)(e,2),t=n[0],o=n[1],r=Object(i.useState)(void 0),c=Object(a.a)(r,2),l=c[0],u=c[1],d=Object(i.useMemo)((function(){if(t&&l)return(t-l)/(t+l)}),[t,l]);return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"iMin",children:"iMin"}),Object(s.jsx)("input",{id:"iMin",value:t,onChange:function(e){return o(e.target.value)}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"iMax",children:"iMax"}),Object(s.jsx)("input",{id:"iMax",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"result",children:"result"}),Object(s.jsx)("input",{id:"result",disabled:!0,value:d})]})]})},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(n){var t=n.getCLS,i=n.getFID,o=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),i(e),o(e),r(e),c(e)}))};c.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/abv",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/abv","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(n,e)}))}}(),h()},9:function(e,n,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.4b9e64b2.chunk.js.map