_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"2qu3":function(e,t,r){"use strict";var n=r("oI91"),o=r("/GRZ"),a=r("i2R6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var s,d=(s=r("q1tI"))&&s.__esModule?s:{default:s},f=r("8L3h"),p=r("jwwS");var m=[],h=[],b=!1;function y(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function v(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=y(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function _(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function g(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:_,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new O(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!b&&"function"===typeof r.webpack){var a=r.webpack();h.push((function(e){var t,r=u(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=d.default.useContext(p.LoadableContext),i=(0,f.useSubscription)(n);return d.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),d.default.useMemo((function(){return i.loading||i.error?d.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",d.default.forwardRef(i)}var O=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l(l({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return g(y,e)}function w(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return w(e,t)}))}j.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return g(v,e)},j.preloadAll=function(){return new Promise((function(e,t){w(m).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return b=!0,t()};w(h,e).then(r,r)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var k=j;t.default=k},FQCn:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return r("TuXs")}])},TuXs:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return p}));var n=r("nKUr"),o=r("rGDf"),a=r("wZsY"),i=r("zHD3"),l=r("oSKe"),u=r("a6RD"),c=r.n(u),s=r("p2q9"),d=r.n(s),f=c()((function(){return Promise.all([r.e(13),r.e(2),r.e(4),r.e(31)]).then(r.bind(null,"Kj2P"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["Kj2P"]},modules:["../components/Resume"]}});var p=!0;t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(o.a,{mb:"2rem",children:Object(n.jsxs)(a.a,{spacing:4,direction:"row",align:"center",children:[Object(n.jsx)("span",{role:"image",children:"\ud83d\udc40 my resume"}),Object(n.jsx)(i.a,{href:"cv/cv.pdf",children:Object(n.jsx)(l.a,{as:d.a})})]})}),Object(n.jsx)(f,{url:"cv/cv.pdf",scale:1.5})]})}},a6RD:function(e,t,r){"use strict";var n=r("oI91");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=i.default.Map;var o={},l=e.modules();Object.keys(l).forEach((function(e){var t=l[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};l(r("q1tI"));var i=l(r("2qu3"));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},oSKe:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("sKyC"),o=r("U6LL"),a=r("epLR"),i=r("pr4h"),l=r("q1tI");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c={path:l.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},l.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),l.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),l.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},s=Object(n.a)((function(e,t){var{as:r,viewBox:n,color:i="currentColor",focusable:s=!1,children:d,className:f,__css:p}=e,m=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["as","viewBox","color","focusable","children","className","__css"]),h={ref:t,focusable:s,className:Object(a.a)("chakra-icon",f),__css:u({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:i},p)},b=null!=n?n:c.viewBox;if(r&&"string"!==typeof r)return l.createElement(o.a.svg,u({as:r},h,m));var y=null!=d?d:c.path;return l.createElement(o.a.svg,u({verticalAlign:"middle",viewBox:b},h,m),y)}));i.a&&(s.displayName="Icon")},p2q9:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("q1tI")),i=(0,n(r("8/g6")).default)(a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");t.default=i},wZsY:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("U6LL"),o=r("sKyC"),a=r("JX03"),i=r("epLR"),l=r("pr4h"),u=r("q1tI"),c=r("x9W9"),s="& > *:not(style) ~ *:not(style)";function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=e=>u.createElement(n.a.div,d({className:"chakra-stack__item"},e,{__css:d({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),p=Object(o.a)((function(e,t){var{isInline:r,direction:o,align:l,justify:p,spacing:m="0.5rem",wrap:h,children:b,divider:y,className:v,shouldWrapChildren:_}=e,g=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),O=r?"row":null!=o?o:"column",j=u.useMemo(()=>function(e){var{spacing:t,direction:r}=e,n={column:{mt:t,ml:0},row:{ml:t,mt:0},"column-reverse":{mb:t,mr:0},"row-reverse":{mr:t,mb:0}};return{flexDirection:r,[s]:Object(c.b)(r,e=>n[e])}}({direction:O,spacing:m}),[O,m]),w=u.useMemo(()=>function(e){var{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":Object(c.b)(r,e=>n[e])}}({spacing:m,direction:O}),[m,O]),k=!!y,x=!_&&!k,E=Object(a.b)(b),P=x?E:E.map((e,t)=>{var r=t+1===E.length,n=_?u.createElement(f,{key:t},e):e;if(!k)return n;var o=r?null:u.cloneElement(y,{__css:w});return u.createElement(u.Fragment,{key:t},n,o)}),S=Object(i.a)("chakra-stack",v);return u.createElement(n.a.div,d({ref:t,display:"flex",alignItems:l,justifyContent:p,flexDirection:j.flexDirection,flexWrap:h,className:S,__css:k?{}:{[s]:j[s]}},g),P)}));l.a&&(p.displayName="Stack");var m=Object(o.a)((e,t)=>u.createElement(p,d({align:"center"},e,{direction:"row",ref:t})));l.a&&(m.displayName="HStack");var h=Object(o.a)((e,t)=>u.createElement(p,d({align:"center"},e,{direction:"column",ref:t})));l.a&&(h.displayName="VStack")}},[["FQCn",1,0,3,9]]]);