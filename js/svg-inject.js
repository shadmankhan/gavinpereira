!function(e,r){var t,n,i="createElement",o="getElementsByTagName",a="length",f="style",u="title",c="undefined",l="setAttribute",s="getAttribute",d=null,v="__svgInject",p="--inject-",m=new RegExp(p+"\\d+","g"),h="LOAD_FAIL",y="SVG_NOT_SUPPORTED",g="SVG_INVALID",b=["src","alt","onload","onerror"],E=r[i]("a"),k=typeof SVGRect!=c,w={useCache:!0,copyAttributes:!0,makeIdsUnique:!0},x={clipPath:["clip-path"],"color-profile":d,cursor:d,filter:d,linearGradient:["fill","stroke"],marker:["marker","marker-end","marker-mid","marker-start"],mask:d,pattern:["fill","stroke"],radialGradient:["fill","stroke"]},A=1,C=2,S=1;function I(e){return(t=t||new XMLSerializer).serializeToString(e)}function L(e,r){var t,n,i,u,c=p+S++,v=/url\("?#([a-zA-Z][\w:.-]*)"?\)/g,m=e.querySelectorAll("[id]"),h=r?[]:d,y={},g=[],b=!1;if(m[a]){for(i=0;i<m[a];i++)(n=m[i].localName)in x&&(y[n]=1);for(n in y)(x[n]||[n]).forEach(function(e){g.indexOf(e)<0&&g.push(e)});g[a]&&g.push(f);var E,k,w,A=e[o]("*"),C=e;for(i=-1;C!=d;){if(C.localName==f)(w=(k=C.textContent)&&k.replace(v,function(e,r){return h&&(h[r]=1),"url(#"+r+c+")"}))!==k&&(C.textContent=w);else if(C.hasAttributes()){for(u=0;u<g[a];u++)E=g[u],(w=(k=C[s](E))&&k.replace(v,function(e,r){return h&&(h[r]=1),"url(#"+r+c+")"}))!==k&&C[l](E,w);["xlink:href","href"].forEach(function(e){var r=C[s](e);/^\s*#/.test(r)&&(r=r.trim(),C[l](e,r+c),h&&(h[r.substring(1)]=1))})}C=A[++i]}for(i=0;i<m[a];i++)t=m[i],h&&!h[t.id]||(t.id+=c,b=!0)}return b}function j(e,t,n,o){if(t){t[l]("data-inject-url",n);var f=e.parentNode;if(f){o.copyAttributes&&function(e,t){for(var n,o,f,c=e.attributes,s=0;s<c[a];s++)if(o=(n=c[s]).name,-1==b.indexOf(o))if(f=n.value,o==u){var d,v=t.firstElementChild;v&&v.localName.toLowerCase()==u?d=v:(d=r[i+"NS"]("http://www.w3.org/2000/svg",u),t.insertBefore(d,v)),d.textContent=f}else t[l](o,f)}(e,t);var c=o.beforeInject,s=c&&c(e,t)||t;f.replaceChild(s,e),e[v]=A,O(e);var d=o.afterInject;d&&d(e,s)}}else V(e,o)}function G(){for(var e={},r=arguments,t=0;t<r[a];t++){var n=r[t];for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e}function N(e,t){if(t){var i;try{i=function(e){return(n=n||new DOMParser).parseFromString(e,"text/xml")}(e)}catch(e){return d}return i[o]("parsererror")[a]?d:i.documentElement}var f=r.createElement("div");return f.innerHTML=e,f.firstElementChild}function O(e){e.removeAttribute("onload")}function T(e){console.error("SVGInject: "+e)}function P(e,r,t){e[v]=C,t.onFail?t.onFail(e,r):T(r)}function V(e,r){O(e),P(e,g,r)}function _(e,r){O(e),P(e,y,r)}function D(e,r){P(e,h,r)}function F(e){e.onload=d,e.onerror=d}function M(e){T("no img element")}var q=function t(n,u){var l=G(w,u),y={};function b(e,r){r=G(l,r);var t=function(t){var n=function(){var e=r.onAllFinish;e&&e(),t&&t()};if(e&&typeof e[a]!=c){var i=0,o=e[a];if(0==o)n();else for(var f=function(){++i==o&&n()},u=0;u<o;u++)x(e[u],r,f)}else x(e,r,n)};return typeof Promise==c?t():new Promise(t)}function x(e,r,t){if(e){var n=e[v];if(n)Array.isArray(n)?n.push(t):t();else{if(F(e),!k)return _(e,r),void t();var i=r.beforeLoad,o=i&&i(e)||e[s]("src");if(!o)return""===o&&D(e,r),void t();var a=[];e[v]=a;var f=function(){t(),a.forEach(function(e){e()})},u=function(e){return E.href=e,E.href}(o),l=r.useCache,b=r.makeIdsUnique,w=function(e){l&&(y[u].forEach(function(r){r(e)}),y[u]=e)};if(l){var x,A=function(t){if(t===h)D(e,r);else if(t===g)V(e,r);else{var n,i=t[0],o=t[1],a=t[2];b&&(i===d?(i=L(n=N(o,!1),!1),t[0]=i,t[2]=i&&I(n)):i&&(o=function(e){return e.replace(m,p+S++)}(a))),n=n||N(o,!1),j(e,n,u,r)}f()};if(typeof(x=y[u])!=c)return void(x.isCallbackQueue?x.push(A):A(x));(x=[]).isCallbackQueue=!0,y[u]=x}!function(e,r,t){if(e){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState){var e=n.status;200==e?r(n.responseXML,n.responseText.trim()):400<=e?t():0==e&&t()}},n.open("GET",e,!0),n.send()}}(u,function(t,n){var i=t instanceof Document?t.documentElement:N(n,!0),o=r.afterLoad;if(o){var a=o(i,n)||i;if(a){var c="string"==typeof a;n=c?a:I(i),i=c?N(a,!0):a}}if(i instanceof SVGElement){var s=d;if(b&&(s=L(i,!1)),l){var v=s&&I(i);w([s,n,v])}j(e,i,u,r)}else V(e,r),w(g);f()},function(){D(e,r),w(h),f()})}}else M()}return k&&function(e){var t=r[o]("head")[0];if(t){var n=r[i](f);n.type="text/css",n.appendChild(r.createTextNode(e)),t.appendChild(n)}}('img[onload^="'+n+'("]{visibility:hidden;}'),b.setOptions=function(e){l=G(l,e)},b.create=t,b.err=function(e,r){e?e[v]!=C&&(F(e),k?(O(e),D(e,l)):_(e,l),r&&(O(e),e.src=r)):M()},e[n]=b}("SVGInject");"object"==typeof module&&"object"==typeof module.exports&&(module.exports=q)}(window,document);