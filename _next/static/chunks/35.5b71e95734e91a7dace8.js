(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"j/6X":function(t,e,o){"use strict";o.r(e);var r=o("q1tI"),n=o.n(r);function c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,e){return t(e={exports:{}},e.exports),e.exports}var s=i((function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var o="function"==typeof Symbol&&Symbol.for,r=o?Symbol.for("react.element"):60103,n=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,u=o?Symbol.for("react.async_mode"):60111,f=o?Symbol.for("react.concurrent_mode"):60111,l=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116;function b(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case u:case f:case c:case s:case i:case d:return t;default:switch(t=t&&t.$$typeof){case p:case l:case a:return t;default:return e}}case m:case y:case n:return e}}}function h(t){return b(t)===f}e.typeOf=b,e.AsyncMode=u,e.ConcurrentMode=f,e.ContextConsumer=p,e.ContextProvider=a,e.Element=r,e.ForwardRef=l,e.Fragment=c,e.Lazy=m,e.Memo=y,e.Portal=n,e.Profiler=s,e.StrictMode=i,e.Suspense=d,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===c||t===f||t===s||t===i||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===m||t.$$typeof===y||t.$$typeof===a||t.$$typeof===p||t.$$typeof===l)},e.isAsyncMode=function(t){return h(t)||b(t)===u},e.isConcurrentMode=h,e.isContextConsumer=function(t){return b(t)===p},e.isContextProvider=function(t){return b(t)===a},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r},e.isForwardRef=function(t){return b(t)===l},e.isFragment=function(t){return b(t)===c},e.isLazy=function(t){return b(t)===m},e.isMemo=function(t){return b(t)===y},e.isPortal=function(t){return b(t)===n},e.isProfiler=function(t){return b(t)===s},e.isStrictMode=function(t){return b(t)===i},e.isSuspense=function(t){return b(t)===d}}));c(s),c(i((function(t,e){})));i((function(t){t.exports=s}));var a=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;(function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},o=0;o<10;o++)e["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}})()&&Object.assign;function f(t,e,o,r,n){}f.resetWarningCache=function(){};Function.call.bind(Object.prototype.hasOwnProperty);function l(){}function d(){}d.resetWarningCache=l;var y=i((function(t){t.exports=function(){function t(t,e,o,r,n,c){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==c){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function e(){return t}t.isRequired=t;var o={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:d,resetWarningCache:l};return o.PropTypes=o,o}()})),m=[],b=function(t){function e(){t.apply(this,arguments),this.state={isLoading:!0}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.loadTweetForProps=function(t){var e=this,o=function(){window.twttr.ready().then((function(o){var r=o.widgets;e._div&&(e._div.innerHTML="");var n=t.onTweetLoadSuccess,c=t.onTweetLoadError;r.createTweetEmbed(e.props.id,e._div,t.options).then((function(t){e.setState({isLoading:!1}),n&&n(t)})).catch(c)}))},r=window.twttr;r&&r.ready?o():function(t,e){if(0===m.length){m.push(e);var o=document.createElement("script");o.setAttribute("src",t),o.onload=function(){return m.forEach((function(t){return t()}))},document.body.appendChild(o)}else m.push(e)}((window.location.protocol.indexOf("file")>=0?this.props.protocol:"")+"//platform.twitter.com/widgets.js",o)},e.prototype.componentDidMount=function(){this.loadTweetForProps(this.props)},e.prototype.shouldComponentUpdate=function(t,e){return this.props.id!==t.id||this.props.className!==t.className},e.prototype.componentWillUpdate=function(t,e){this.props.id!==t.id&&this.loadTweetForProps(t)},e.prototype.render=function(){var t=this;return n.a.createElement("div",{className:this.props.className,ref:function(e){t._div=e}},this.state.isLoading&&this.props.placeholder)},e}(n.a.Component);b.propTypes={id:y.string,options:y.object,protocol:y.string,onTweetLoadSuccess:y.func,onTweetLoadError:y.func,className:y.string},b.defaultProps={protocol:"https:",options:{},className:null},e.default=b}}]);