_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"/GRZ":function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},"0sNQ":function(e,t){"trimStart"in String.prototype||(String.prototype.trimStart=String.prototype.trimLeft),"trimEnd"in String.prototype||(String.prototype.trimEnd=String.prototype.trimRight),"description"in Symbol.prototype||Object.defineProperty(Symbol.prototype,"description",{configurable:!0,get:function(){var e=/\((.*)\)/.exec(this.toString());return e?e[1]:void 0}}),Array.prototype.flat||(Array.prototype.flat=function(e,t){return t=this.concat.apply([],this),e>1&&t.some(Array.isArray)?t.flat(e-1):t},Array.prototype.flatMap=function(e,t){return this.map(e,t).flat()}),Promise.prototype.finally||(Promise.prototype.finally=function(e){if("function"!=typeof e)return this.then(e,e);var t=this.constructor||Promise;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))})},"1ccW":function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},BMP1:function(e,t,n){"use strict";var r=n("7KCV")(n("IKlv"));window.next=r,(0,r.default)().catch(console.error)},DqTX:function(e,t,n){"use strict";var r=n("zoAU");t.__esModule=!0,t.default=function(e){var t=document.getElementsByTagName("head")[0],n=new Set(t.children);i(n,e.map((function(e){var t=r(e,2),n=t[0],a=t[1];return(0,o.createElement)(n,a)})),!1);var a=null;return{mountedInstances:new Set,updateHead:function(e){var t=a=Promise.resolve().then((function(){t===a&&(a=null,i(n,e,!0))}))}}};var o=n("q1tI"),a={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"};function i(e,t,n){var r=document.getElementsByTagName("head")[0],o=new Set(e);t.forEach((function(t){if("title"!==t.type){for(var n=function(e){var t=e.type,n=e.props,r=document.createElement(t);for(var o in n)if(n.hasOwnProperty(o)&&"children"!==o&&"dangerouslySetInnerHTML"!==o&&void 0!==n[o]){var i=a[o]||o.toLowerCase();r.setAttribute(i,n[o])}var u=n.children,c=n.dangerouslySetInnerHTML;return c?r.innerHTML=c.__html||"":u&&(r.textContent="string"===typeof u?u:Array.isArray(u)?u.join(""):""),r}(t),i=e.values();;){var u=i.next(),c=u.done,s=u.value;if(null==s?void 0:s.isEqualNode(n))return void o.delete(s);if(c)break}e.add(n),r.appendChild(n)}else{var f="";if(t){var l=t.props.children;f="string"===typeof l?l:Array.isArray(l)?l.join(""):""}f!==document.title&&(document.title=f)}})),o.forEach((function(t){n&&t.parentNode.removeChild(t),e.delete(t)}))}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},IKlv:function(e,t,n){"use strict";var r=n("vJKn"),o=n("qVT1"),a=n("/GRZ"),i=n("i2R6"),u=n("48fX"),c=n("tCBg"),s=n("T0f4"),f=n("zoAU");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var d=n("7KCV"),p=n("AroE");t.__esModule=!0,t.render=ae,t.renderError=ue,t.default=t.emitter=t.router=t.version=void 0;var h=p(n("1ccW"));p(n("7KCV"));n("0sNQ");var m=p(n("q1tI")),v=p(n("i8i4")),g=n("FYa8"),y=p(n("dZ6Y")),S=n("qOIg"),_=n("elyg"),w=n("/jkW"),E=d(n("3WeD")),b=d(n("yLiY")),T=n("g/15"),x=p(n("DqTX")),P=d(n("zmvN")),R=p(n("bGXG")),C=n("nOHt"),A=JSON.parse(document.getElementById("__NEXT_DATA__").textContent);window.__NEXT_DATA__=A;t.version="10.0.1";var k=A.props,I=A.err,N=A.page,L=A.query,M=A.buildId,D=A.assetPrefix,F=A.runtimeConfig,O=A.dynamicIds,B=A.isFallback,j=A.head,q=A.locales,H=A.locale,X=A.defaultLocale,U=D||"";n.p="".concat(U,"/_next/"),b.setConfig({serverRuntimeConfig:{},publicRuntimeConfig:F||{}});var G=(0,T.getURL)();(0,_.hasBasePath)(G)&&(G=(0,_.delBasePath)(G));var W=new P.default(M,U,N),V=function(e){var t=f(e,2),n=t[0],r=t[1];return W.registerPage(n,r)};window.__NEXT_P&&window.__NEXT_P.map((function(e){return setTimeout((function(){return V(e)}),0)})),window.__NEXT_P=[],window.__NEXT_P.push=V;var Y,K,J,z,Z,Q,$,ee=(0,x.default)(j),te=document.getElementById("__next");t.router=J;var ne=function(e){u(n,e);var t=l(n);function n(){return a(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){this.props.fn(e,t)}},{key:"componentDidMount",value:function(){this.scrollToHash(),J.isSsr&&(B||A.nextExport&&((0,w.isDynamicRoute)(J.pathname)||location.search)||k&&k.__N_SSG&&location.search)&&J.replace(J.pathname+"?"+String(E.assign(E.urlQueryToSearchParams(J.query),new URLSearchParams(location.search))),G,{_h:1,shallow:!B})}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=location.hash;if(e=e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout((function(){return t.scrollIntoView()}),0)}}},{key:"render",value:function(){return this.props.children}}]),n}(m.default.Component),re=(0,y.default)();t.emitter=re;var oe=function(){var e=o(r.mark((function e(){var n,o,a,i,u,c,s=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.length>0&&void 0!==s[0]?s[0]:{},e.next=4,W.loadPage("/_app");case 4:return n=e.sent,o=n.page,a=n.mod,Q=o,a&&a.reportWebVitals&&($=function(e){var t,n=e.id,r=e.name,o=e.startTime,i=e.value,u=e.duration,c=e.entryType,s=e.entries,f="".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12);s&&s.length&&(t=s[0].startTime),a.reportWebVitals({id:n||f,name:r,startTime:o||t,value:null==i?u:i,label:"mark"===c||"measure"===c?"custom":"web-vital"})}),i=I,e.prev=10,e.next=14,W.loadPage(N);case 14:u=e.sent,z=u.page,Z=u.styleSheets,e.next=21;break;case 21:e.next=28;break;case 23:if(e.prev=23,e.t0=e.catch(10),!(P.INITIAL_CSS_LOAD_ERROR in e.t0)){e.next=27;break}throw e.t0;case 27:i=e.t0;case 28:if(!window.__NEXT_PRELOADREADY){e.next=32;break}return e.next=32,window.__NEXT_PRELOADREADY(O);case 32:return t.router=J=(0,C.createRouter)(N,L,G,{initialProps:k,pageLoader:W,App:Q,Component:z,initialStyleSheets:Z,wrapApp:pe,err:i,isFallback:Boolean(B),subscription:function(e,t){return ae({App:t,Component:e.Component,styleSheets:e.styleSheets,props:e.props,err:e.err})},locale:H,locales:q,defaultLocale:X}),ae(c={App:Q,Component:z,styleSheets:Z,props:k,err:i}),e.abrupt("return",re);case 40:return e.abrupt("return",{emitter:re,render:ae,renderCtx:c});case 41:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(){return e.apply(this,arguments)}}();function ae(e){return ie.apply(this,arguments)}function ie(){return(ie=o(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.err){e.next=4;break}return e.next=3,ue(t);case 3:return e.abrupt("return");case 4:return e.prev=4,e.next=7,he(t);case 7:e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(4),!e.t0.cancelled){e.next=13;break}throw e.t0;case 13:return e.next=16,ue((0,h.default)({},t,{err:e.t0}));case 16:case"end":return e.stop()}}),e,null,[[4,9]])})))).apply(this,arguments)}function ue(e){var t=e.App,n=e.err;return console.error(n),W.loadPage("/_error").then((function(r){var o=r.page,a=r.styleSheets,i=pe(t),u={Component:o,AppTree:i,router:J,ctx:{err:n,pathname:N,query:L,asPath:G,AppTree:i}};return Promise.resolve(e.props?e.props:(0,T.loadGetInitialProps)(t,u)).then((function(t){return he((0,h.default)({},e,{err:n,Component:o,styleSheets:a,props:t}))}))}))}t.default=oe;var ce="function"===typeof v.default.hydrate;function se(){T.ST&&(performance.mark("afterHydrate"),performance.measure("Next.js-before-hydration","navigationStart","beforeRender"),performance.measure("Next.js-hydration","beforeRender","afterHydrate"),$&&performance.getEntriesByName("Next.js-hydration").forEach($),le())}function fe(){if(T.ST){performance.mark("afterRender");var e=performance.getEntriesByName("routeChange","mark");e.length&&(performance.measure("Next.js-route-change-to-render",e[0].name,"beforeRender"),performance.measure("Next.js-render","beforeRender","afterRender"),$&&(performance.getEntriesByName("Next.js-render").forEach($),performance.getEntriesByName("Next.js-route-change-to-render").forEach($)),le(),["Next.js-route-change-to-render","Next.js-render"].forEach((function(e){return performance.clearMeasures(e)})))}}function le(){["beforeRender","afterHydrate","afterRender","routeChange"].forEach((function(e){return performance.clearMarks(e)}))}function de(e){var t=e.children;return m.default.createElement(ne,{fn:function(e){return ue({App:Q,err:e}).catch((function(e){return console.error("Error rendering page: ",e)}))}},m.default.createElement(S.RouterContext.Provider,{value:(0,C.makePublicRouterInstance)(J)},m.default.createElement(g.HeadManagerContext.Provider,{value:ee},t)))}var pe=function(e){return function(t){var n=(0,h.default)({},t,{Component:z,err:I,router:J});return m.default.createElement(de,null,m.default.createElement(e,n))}};function he(e){var t=e.App,n=e.Component,r=e.props,o=e.err,a=e.styleSheets;n=n||Y.Component,r=r||Y.props;var i=(0,h.default)({},r,{Component:n,err:o,router:J});Y=i;var u,c=!1,s=new Promise((function(e,t){K&&K(),u=function(){K=null,e()},K=function(){c=!0,K=null;var e=new Error("Cancel rendering route");e.cancelled=!0,t(e)}}));var f,l,d=m.default.createElement(me,{callback:function(){if(!ce&&!c){for(var e=new Set(a.map((function(e){return e.href}))),t=(0,P.looseToArray)(document.querySelectorAll("style[data-n-href]")),n=t.map((function(e){return e.getAttribute("data-n-href")})),r=0;r<n.length;++r)e.has(n[r])?t[r].removeAttribute("media"):t[r].setAttribute("media","x");var o=document.querySelector("noscript[data-n-css]");o&&a.forEach((function(e){var t=e.href,n=document.querySelector('style[data-n-href="'.concat(t,'"]'));n&&(o.parentNode.insertBefore(n,o.nextSibling),o=n)})),(0,P.looseToArray)(document.querySelectorAll("link[data-n-p]")).forEach((function(e){e.parentNode.removeChild(e)})),getComputedStyle(document.body,"height")}u()}},m.default.createElement(de,null,m.default.createElement(t,i)));return function(){if(ce)return!1;var e=(0,P.looseToArray)(document.querySelectorAll("style[data-n-href]")),t=new Set(e.map((function(e){return e.getAttribute("data-n-href")})));a.forEach((function(e){var n=e.href,r=e.text;if(!t.has(n)){var o=document.createElement("style");o.setAttribute("data-n-href",n),o.setAttribute("media","x"),document.head.appendChild(o),o.appendChild(document.createTextNode(r))}}))}(),f=d,l=te,T.ST&&performance.mark("beforeRender"),ce?(v.default.hydrate(f,l,se),ce=!1):v.default.render(f,l,fe),s}function me(e){var t=e.callback,n=e.children;return m.default.useLayoutEffect((function(){return t()}),[t]),m.default.useEffect((function(){(0,R.default)($)}),[]),n}},Lab5:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="/"===e?"/index":/^\/index(\/|$)/.test(e)?"/index".concat(e):"".concat(e);return n+t}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},bGXG:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r,o=n("w6Sm"),a=(location.href,!1);function i(e){r&&r(e)}t.default=function(e){r=e,a||(a=!0,(0,o.getCLS)(i),(0,o.getFID)(i),(0,o.getFCP)(i),(0,o.getLCP)(i),(0,o.getTTFB)(i))}},i2R6:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},tCBg:function(e,t,n){var r=n("C+bE"),o=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},w6Sm:function(e,t,n){"use strict";n.r(t),n.d(t,"getCLS",(function(){return h})),n.d(t,"getFCP",(function(){return v})),n.d(t,"getFID",(function(){return g})),n.d(t,"getLCP",(function(){return S})),n.d(t,"getTTFB",(function(){return _}));var r,o,a=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:a(),isFinal:!1}},u=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},c=!1,s=!1,f=function(e){c=!e.persisted},l=function(){addEventListener("pagehide",f),addEventListener("beforeunload",(function(){}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s||(l(),s=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:c})}),{capture:!0,once:t})},p=function(e,t,n,r){var o;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(o||0),(t.delta||t.isFinal||void 0===o)&&(e(t),o=t.value))}},h=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("CLS",0),o=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),t())},a=u("layout-shift",o);a&&(t=p(e,r,a,n),d((function(e){var n=e.isUnloading;a.takeRecords().map(o),n&&(r.isFinal=!0),t()})))},m=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,d((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},v=function(e){var t,n=i("FCP"),r=m(),o=u("paint",(function(e){"first-contentful-paint"===e.name&&e.startTime<r.timeStamp&&(n.value=e.startTime,n.isFinal=!0,n.entries.push(e),t())}));o&&(t=p(e,n,o))},g=function(e){var t=i("FID"),n=m(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},o=u("first-input",r),a=p(e,t,o);o?d((function(){o.takeRecords().map(r),o.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],a())}))},y=function(){return o||(o=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),o},S=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i("LCP"),o=m(),a=function(e){var n=e.startTime;n<o.timeStamp?(r.value=n,r.entries.push(e)):r.isFinal=!0,t()},c=u("largest-contentful-paint",a);if(c){t=p(e,r,c,n);var s=function(){r.isFinal||(c.takeRecords().map(a),r.isFinal=!0,t())};y().then(s),d(s,!0)}},_=function(e){var t,n=i("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],n.isFinal=!0,e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}},yLiY:function(e,t,n){"use strict";var r;t.__esModule=!0,t.setConfig=function(e){r=e},t.default=void 0;t.default=function(){return r}},zmvN:function(e,t,n){"use strict";var r=n("vJKn"),o=n("qVT1"),a=n("/GRZ"),i=n("i2R6"),u=n("AroE");t.__esModule=!0,t.default=t.INITIAL_CSS_LOAD_ERROR=t.looseToArray=void 0;var c=u(n("dZ6Y")),s=n("elyg"),f=u(n("Lab5")),l=n("/jkW"),d=n("hS4m"),p=function(e){return[].slice.call(e)};function h(e,t){try{return document.createElement("link").relList.supports(e)}catch(n){}}function m(e){return(0,s.markLoadingError)(new Error("Error loading ".concat(e)))}t.looseToArray=p;var v=Symbol("INITIAL_CSS_LOAD_ERROR");t.INITIAL_CSS_LOAD_ERROR=v;var g=h("preload")&&!h("prefetch")?"preload":"prefetch",y=h("preload")?"preload":g;document.createElement("script");function S(e){if("/"!==e[0])throw new Error('Route name should start with a "/", got "'.concat(e,'"'));return"/"===e?e:e.replace(/\/$/,"")}function _(e,t,n,r){return new Promise((function(o,a){r=document.createElement("link"),n&&(r.as=n),r.rel=t,r.crossOrigin=void 0,r.onload=o,r.onerror=a,r.href=e,document.head.appendChild(r)}))}var w=function(){function e(t,n,r){a(this,e),this.initialPage=void 0,this.buildId=void 0,this.assetPrefix=void 0,this.pageCache=void 0,this.pageRegisterEvents=void 0,this.loadingRoutes=void 0,this.promisedBuildManifest=void 0,this.promisedSsgManifest=void 0,this.promisedDevPagesManifest=void 0,this.initialPage=r,this.buildId=t,this.assetPrefix=n,this.pageCache={},this.pageRegisterEvents=(0,c.default)(),this.loadingRoutes={"/_app":!0},"/_error"!==r&&(this.loadingRoutes[r]=!0),this.promisedBuildManifest=new Promise((function(e){window.__BUILD_MANIFEST?e(window.__BUILD_MANIFEST):window.__BUILD_MANIFEST_CB=function(){e(window.__BUILD_MANIFEST)}})),this.promisedSsgManifest=new Promise((function(e){window.__SSG_MANIFEST?e(window.__SSG_MANIFEST):window.__SSG_MANIFEST_CB=function(){e(window.__SSG_MANIFEST)}}))}return i(e,[{key:"getPageList",value:function(){return this.promisedBuildManifest.then((function(e){return e.sortedPages}))}},{key:"getDependencies",value:function(e){var t=this;return this.promisedBuildManifest.then((function(n){return n[e]?n[e].map((function(e){return"".concat(t.assetPrefix,"/_next/").concat(encodeURI(e))})):Promise.reject(m(e))}))}},{key:"getDataHref",value:function(e,t,n,r){var o=this,a=(0,d.parseRelativeUrl)(e),i=a.pathname,u=a.query,c=a.search,p=(0,d.parseRelativeUrl)(t).pathname,h=S(i),m=function(e){var t=(0,s.addLocale)((0,f.default)(e,".json"),r);return(0,s.addBasePath)("/_next/data/".concat(o.buildId).concat(t).concat(n?"":c))},v=(0,l.isDynamicRoute)(h),g=v?(0,s.interpolateAs)(i,p,u).result:"";return v?g&&m(g):m(h)}},{key:"prefetchData",value:function(e,t,n){var r=this,o=S((0,d.parseRelativeUrl)(e).pathname);return this.promisedSsgManifest.then((function(a,i){return a.has(o)&&(i=r.getDataHref(e,t,!0,n))&&!document.querySelector('link[rel="'.concat(g,'"][href^="').concat(i,'"]'))&&_(i,g,"fetch").catch((function(){}))}))}},{key:"loadPage",value:function(e){var t=this;return e=S(e),new Promise((function(n,r){var o=t.pageCache[e];if(o)"error"in o?r(o.error):n(o);else{var a=function o(a){t.pageRegisterEvents.off(e,o),delete t.loadingRoutes[e],"error"in a?r(a.error):n(a)};if(t.pageRegisterEvents.on(e,a),!t.loadingRoutes[e])t.loadingRoutes[e]=!0,t.getDependencies(e).then((function(e){var t=[];return e.forEach((function(e){e.endsWith(".js")&&!document.querySelector('script[src^="'.concat(e,'"]'))&&t.push(function(e){return new Promise((function(t,n){var r=document.createElement("script");r.crossOrigin=void 0,r.src=e,r.onload=t,r.onerror=function(){return n(m(e))},document.body.appendChild(r)}))}(e)),e.endsWith(".css")&&!document.querySelector('link[rel="'.concat(y,'"][href^="').concat(e,'"]'))&&_(e,y,"fetch").catch((function(){}))})),Promise.all(t)})).catch((function(n){t.pageCache[e]={error:n},a({error:n})}))}}))}},{key:"registerPage",value:function(e,t){var n=this,a=this,i=function(){var n=o(r.mark((function n(o){var i,u;return r.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t();case 3:i=n.sent,u={page:i.default||i,mod:i,styleSheets:o},a.pageCache[e]=u,a.pageRegisterEvents.emit(e,u),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),a.pageCache[e]={error:n.t0},a.pageRegisterEvents.emit(e,{error:n.t0});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();var u=e===this.initialPage;("/_app"===e?Promise.resolve([]):(u?Promise.resolve(p(document.querySelectorAll("link[data-n-p]")).map((function(e){return e.getAttribute("href")}))):this.getDependencies(e).then((function(e){return e.filter((function(e){return e.endsWith(".css")}))}))).then((function(e){return Promise.all(e.map((function(e){return t=e,fetch(t).then((function(e){if(!e.ok)throw m(t);return e.text().then((function(e){return{href:t,text:e}}))}));var t}))).catch((function(e){throw u&&Object.defineProperty(e,v,{}),e}))}))).then((function(e){return i(e)}),(function(t){n.pageCache[e]={error:t},n.pageRegisterEvents.emit(e,{error:t})}))}},{key:"prefetch",value:function(e,t){var n,r,o=this;if((n=navigator.connection)&&(n.saveData||/2g/.test(n.effectiveType)))return Promise.resolve();if(t)r=e;else;return Promise.all(document.querySelector('link[rel="'.concat(g,'"][href^="').concat(r,'"]'))?[]:[r&&_(r,g,r.endsWith(".css")?"fetch":"script"),!t&&this.getDependencies(e).then((function(e){return Promise.all(e.map((function(e){return o.prefetch(e,!0)})))}))]).then((function(){}),(function(){}))}}]),e}();t.default=w}},[["BMP1",1,0,2,7]]]);