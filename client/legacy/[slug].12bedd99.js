import{x as t,_ as n,a as e,b as r,c as a,i as c,d as o,S as s,s as i,f as u,e as f,t as l,q as h,h as p,j as d,g as v,k as m,l as y,m as x,p as g,o as b,v as $,u as w,r as R}from"./client.e274aad6.js";import{p as j}from"./$$___$$c49bf11166c826f2d67a43e26c6db7d6.c575ece8.js";function k(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=e(t);if(n){var o=e(this).constructor;a=Reflect.construct(c,arguments,o)}else a=c.apply(this,arguments);return r(this,a)}}function _(t){var n,e,r,a,c,o,s=t[0].metadata.title+"",i=t[0].html+"";return document.title=n=t[0].metadata.title,{c:function(){e=u(),r=f("h1"),a=l(s),c=u(),o=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-18mmgjc"]',document.head).forEach(p),e=d(t),r=v(t,"H1",{});var n=m(r);a=y(n,s),n.forEach(p),c=d(t),o=v(t,"DIV",{class:!0}),m(o).forEach(p),this.h()},h:function(){x(o,"class","content svelte-1ycksgq")},m:function(t,n){g(t,e,n),g(t,r,n),b(r,a),g(t,c,n),g(t,o,n),o.innerHTML=i},p:function(t,e){var r=$(e,1)[0];1&r&&n!==(n=t[0].metadata.title)&&(document.title=n),1&r&&s!==(s=t[0].metadata.title+"")&&w(a,s),1&r&&i!==(i=t[0].html+"")&&(o.innerHTML=i)},i:R,o:R,d:function(t){t&&p(e),t&&p(r),t&&p(c),t&&p(o)}}}var D=function(t,n,e,r){return new(e||(e=Promise))((function(a,c){function o(t){try{i(r.next(t))}catch(t){c(t)}}function s(t){try{i(r.throw(t))}catch(t){c(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(o,s)}i((r=r.apply(t,n||[])).next())}))};function E(n){var e=n.params;return D(this,void 0,void 0,t.mark((function n(){var r;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=j.filter((function(t){return t.metadata.slug==e.slug}))).length){t.next=3;break}return t.abrupt("return",{post:r.pop()});case 3:return t.abrupt("return",this.error(404,"Not found"));case 4:case"end":return t.stop()}}),n,this)})))}function H(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var q=function(t){n(r,s);var e=k(r);function r(t){var n;return a(this,r),n=e.call(this),c(o(n),t,H,_,i,{post:0}),n}return r}();export default q;export{E as preload};
