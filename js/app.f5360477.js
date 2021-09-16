(function(e){function t(t){for(var n,a,u=t[0],i=t[1],s=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==o[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09cdff06":"d26e46c2","chunk-44fd6d74":"588b9463"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-09cdff06":1,"chunk-44fd6d74":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-09cdff06":"ce3ca28c","chunk-44fd6d74":"bcd75803"}[e]+".css",o=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===n||d===o))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){s=f[u],d=s.getAttribute("data-href");if(d===n||d===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],l.parentNode.removeChild(l),r(c)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var f=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",f.name="ChunkLoadError",f.type=n,f.request=a,r[1](f)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/covid-map/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=d;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"2c9a":function(e,t,r){},4685:function(e,t,r){"use strict";r("2c9a")},"4ee2":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("7a23");const{createRouter:a,createWebHashHistory:o}=r("6c02"),c=o(),u=a({history:c,routes:[{path:"/",name:"home",component:()=>r.e("chunk-44fd6d74").then(r.bind(null,"6511"))},{path:"/:pathMatch(.*)*",name:"notFound",component:()=>r.e("chunk-09cdff06").then(r.bind(null,"8cdb"))}]});var i=u,s=r("5502"),d=r("bc3a"),f=r.n(d);const l={getFullData(){return new Promise(e=>{f()({method:"get",baseURL:"https://young-ocean-93425.herokuapp.com",url:"/covid",params:{CK:"covid-19@nchc.org.tw",querydata:"4001",limited:"TWN"}}).then(t=>e(t.data))})}};var p=l,h=r("5a0c"),m=r.n(h);const v={formatter(e){return m()(e,"YYYY-MM-DD").format("M/DD")},filter(e){return m()(e,"YYYY-MM-DD").isAfter(m()("2021-01-01"))}};var g=v;const b=Object(s["a"])({state:{data:[]},mutations:{setData:(e,t)=>e.data=t},actions:{init({commit:e}){p.getFullData().then(t=>e("setData",t))}},getters:{getLastData(e){return e.data[0]},lineChartData(e){return e.data.filter(e=>g.filter(e.a04)).reverse().map(e=>({x:g.formatter(e.a04),y:parseInt(e.a06)}))}}});var y=b;function w(e,t,r,a,o,c){const u=Object(n["z"])("router-view");return Object(n["t"])(),Object(n["e"])(u)}var O={name:"App",setup(){const e=Object(s["b"])();e.dispatch("init")}};r("4685");O.render=w;var j=O;r("4ee2");Object(n["d"])(j).use(i).use(y).mount("#app")}});
//# sourceMappingURL=app.f5360477.js.map