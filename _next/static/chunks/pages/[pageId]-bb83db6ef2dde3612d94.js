_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"94bl":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[pageId]",function(){return n("lxsQ")}])},CjHp:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"===typeof e?e:"string"===typeof e.content?e.content:e.content.map(n).join(""):""},a=function(t){for(var r=[],i=0;i<t.length;i++){var s=t[i],o=!1;if("string"!==typeof s&&("tag"===s.type&&s.content[0]&&"tag"===s.content[0].type?"</"===s.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===n(s.content[0].content[1])&&r.pop():"/>"===s.content[s.content.length-1].content||r.push({tagName:n(s.content[0].content[1]),openedBraces:0}):r.length>0&&"punctuation"===s.type&&"{"===s.content?r[r.length-1].openedBraces++:r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===s.type&&"}"===s.content?r[r.length-1].openedBraces--:o=!0),(o||"string"===typeof s)&&r.length>0&&0===r[r.length-1].openedBraces){var l=n(s);i<t.length-1&&("string"===typeof t[i+1]||"plain-text"===t[i+1].type)&&(l+=n(t[i+1]),t.splice(i+1,1)),i>0&&("string"===typeof t[i-1]||"plain-text"===t[i-1].type)&&(l=n(t[i-1])+l,t.splice(i-1,1),i--),t[i]=new e.Token("plain-text",l,null,l)}s.content&&"string"!==typeof s.content&&a(s.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||a(e.tokens)}))}(Prism)},JX7q:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,a,r,i,s,o){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,a,r,i,s,o],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},lxsQ:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return v})),n.d(t,"default",(function(){return b}));var a=n("nKUr"),r=n("q1tI"),i=n.n(r),s=n("ws9J");var o=n("Qox2"),l=n("Oy/b"),u=n.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var g=Object(r.memo)((function(e){var t=e.children,n=e.math,a=e.block,s=e.errorColor,o=e.renderError,l=e.settings,g=e.as,d=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(r[n]=e[n]);return r}(e,["children","math","block","errorColor","renderError","settings","as"]),p=g||(a?"div":"span"),f=null!=t?t:n,h=Object(r.useState)({innerHtml:""}),m=h[0],v=h[1];return Object(r.useEffect)((function(){try{var e=u.a.renderToString(f,c({displayMode:!!a,errorColor:s,throwOnError:!!o},l));v({innerHtml:e})}catch(e){if(!(e instanceof u.a.ParseError||e instanceof TypeError))throw e;v(o?{errorElement:o(e)}:{innerHtml:e.message})}}),[a,f,s,o,l]),"errorElement"in m?m.errorElement:i.a.createElement(p,Object.assign({},d,{dangerouslySetInnerHTML:{__html:m.innerHtml}}))})),d=n("wZee"),p=(n("CjHp"),function(e){var t=e.code,n=e.language,a=void 0===n?"javascript":n,r=a.toLowerCase(),s=d.languages[r]||d.languages.javascript;return i.a.createElement("pre",{className:"notion-code"},i.a.createElement("code",{className:"language-"+r,dangerouslySetInnerHTML:{__html:Object(d.highlight)(t,s,a)}}))}),f=n("rGDf"),h=n("uMdk"),m=n("v7Hm"),v=!0;function b(e){var t=e.recordMap;if(!t)return null;var n=function(e){var t,n=null===(t=e.block[Object.keys(e.block)[0]])||void 0===t?void 0:t.value;return n?Object(s.a)(n,e):null}(t);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f.a,{style:{textAlign:"center"},children:n}),Object(a.jsx)(h.a,{}),Object(a.jsxs)(m.a,{mt:8,children:[Object(a.jsx)(o.a,{recordMap:t,fullPage:!1,darkMode:!1,components:{equation:g,code:p}})," "]})]})}},rePB:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))},s4An:function(e,t,n){"use strict";function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",(function(){return a}))},uMdk:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("sKyC"),r=n("4jWa"),i=n("CRla"),s=n("U6LL"),o=n("epLR"),l=n("pr4h"),u=n("q1tI");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var d=Object(a.a)(((e,t)=>{var n=Object(r.b)("Divider",e),{borderLeftWidth:a,borderBottomWidth:l,borderTopWidth:d,borderRightWidth:p,borderWidth:f,borderStyle:h,borderColor:m}=n,v=g(n,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),b=Object(i.b)(e),{className:y,orientation:x="horizontal",__css:w}=b,k=g(b,["className","orientation","__css"]),F={vertical:{borderLeftWidth:a||p||f||"1px",height:"100%"},horizontal:{borderBottomWidth:l||d||f||"1px",width:"100%"}};return u.createElement(s.a.hr,c({ref:t,role:"separator","aria-orientation":x},k,{__css:c({},v,{border:"0",borderColor:m,borderStyle:h},F[x],w),className:Object(o.a)("chakra-divider",y)}))}));l.a&&(d.displayName="Divider")},v7Hm:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("U6LL"),r=n("sKyC"),i=n("pr4h"),s=n("q1tI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}var u=Object(a.a)("div");i.a&&(u.displayName="Box");var c=Object(r.a)(((e,t)=>{var{size:n,centerContent:a=!0}=e,r=l(e,["size","centerContent"]),i=a?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return s.createElement(u,o({ref:t,boxSize:n,__css:o({},i,{flexShrink:0,flexGrow:0})},r))}));i.a&&(c.displayName="Square");var g=Object(r.a)(((e,t)=>{var{size:n}=e,a=l(e,["size"]);return s.createElement(c,o({size:n,ref:t,borderRadius:"9999px"},a))}));i.a&&(g.displayName="Circle")},wZee:function(e,t,n){(function(t){var n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof r?new r(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var s in r={},n[i]=r,t)t.hasOwnProperty(s)&&(r[s]=e(t[s],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(o)||(s[o]=i[o])}var u=r[e];return r[e]=s,a.languages.DFS(a.languages,(function(t,n){n===u&&t!=e&&(this[t]=s)})),s},DFS:function e(t,n,r,i){i=i||{};var s=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],u=a.util.type(l);"Object"!==u||i[s(l)]?"Array"!==u||i[s(l)]||(i[s(l)]=!0,e(l,n,o,i)):(i[s(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,s=0;i=r.elements[s++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(n,r,i){var s=a.util.getLanguage(n),o=a.languages[s];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var l=n.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var u={element:n,language:s,grammar:o,code:n.textContent};function c(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),i&&i.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(i&&i.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var g=new Worker(a.filename);g.onmessage=function(e){c(e.data)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",i),i.tokens=a.tokenize(i.code,i.grammar),a.hooks.run("after-tokenize",i),r.stringify(a.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var r=new o;return l(r,r.head,e),s(e,r,t,r.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:r};function r(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function i(e,t,n,a){e.lastIndex=t;var r=e.exec(n);if(r&&a&&r[1]){var i=r[1].length;r.index+=i,r[0]=r[0].slice(i)}return r}function s(e,t,n,o,c,g){for(var d in n)if(n.hasOwnProperty(d)&&n[d]){var p=n[d];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(g&&g.cause==d+","+f)return;var h=p[f],m=h.inside,v=!!h.lookbehind,b=!!h.greedy,y=h.alias;if(b&&!h.pattern.global){var x=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,x+"g")}for(var w=h.pattern||h,k=o.next,F=c;k!==t.tail&&!(g&&F>=g.reach);F+=k.value.length,k=k.next){var j=k.value;if(t.length>e.length)return;if(!(j instanceof r)){var A,_=1;if(b){if(!(A=i(w,F,e,v)))break;var O=A.index,E=A.index+A[0].length,$=F;for($+=k.value.length;O>=$;)$+=(k=k.next).value.length;if(F=$-=k.value.length,k.value instanceof r)continue;for(var S=k;S!==t.tail&&($<E||"string"===typeof S.value);S=S.next)_++,$+=S.value.length;_--,j=e.slice(F,$),A.index-=F}else if(!(A=i(w,0,j,v)))continue;O=A.index;var C=A[0],P=j.slice(0,O),N=j.slice(O+C.length),z=F+j.length;g&&z>g.reach&&(g.reach=z);var L=k.prev;P&&(L=l(t,L,P),F+=P.length),u(t,L,_),k=l(t,L,new r(d,m?a.tokenize(C,m):C,y,C)),N&&l(t,k,N),_>1&&s(e,t,n,k.prev,F,{cause:d+","+f,reach:z})}}}}}function o(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function l(e,t,n){var a=t.next,r={value:n,prev:t,next:a};return t.next=r,a.prev=r,e.length++,r}function u(e,t,n){for(var a=t.next,r=0;r<n&&a!==e.tail;r++)a=a.next;t.next=a,a.prev=t,e.length-=r}if(e.Prism=a,r.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(i.classes,s):i.classes.push(s)),a.hooks.run("wrap",i);var o="";for(var l in i.attributes)o+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+o+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,s=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),s&&e.close()}),!1),a):a;var c=a.util.currentScript();function g(){a.manual||a.highlightAll()}if(c&&(a.filename=c.src,c.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var d=document.readyState;"loading"===d||"interactive"===d&&c&&c.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},n.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){if("undefined"!==typeof self&&self.Prism&&self.document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e=window.Prism,t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a="loading",r="loaded",i='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])',s=/\blang(?:uage)?-([\w-]+)\b/i;e.hooks.add("before-highlightall",(function(e){e.selector+=", "+i})),e.hooks.add("before-sanity-check",(function(s){var o=s.element;if(o.matches(i)){s.code="",o.setAttribute(n,a);var u=o.appendChild(document.createElement("CODE"));u.textContent="Loading\u2026";var c=o.getAttribute("data-src"),g=s.language;if("none"===g){var d=(/\.(\w+)$/.exec(c)||[,"none"])[1];g=t[d]||d}l(u,g),l(o,g);var p=e.plugins.autoloader;p&&p.loadLanguages(g);var f=new XMLHttpRequest;f.open("GET",c,!0),f.onreadystatechange=function(){var t,a;4==f.readyState&&(f.status<400&&f.responseText?(o.setAttribute(n,r),u.textContent=f.responseText,e.highlightElement(u)):(o.setAttribute(n,"failed"),f.status>=400?u.textContent=(t=f.status,a=f.statusText,"\u2716 Error "+t+" while fetching file: "+a):u.textContent="\u2716 Error: File does not exist or is empty"))},f.send(null)}})),e.plugins.fileHighlight={highlight:function(t){for(var n,a=(t||document).querySelectorAll(i),r=0;n=a[r++];)e.highlightElement(n)}};var o=!1;e.fileHighlight=function(){o||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),o=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}function l(e,t){var n=e.className;n=n.replace(s," ")+" language-"+t,e.className=n.replace(/\s+/g," ").trim()}}()}).call(this,n("ntbh"))},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))}},[["94bl",0,1,11,2,6]]]);