parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"awqi":[function(require,module,exports) {
"use strict";var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),s=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),i=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),l=Symbol.iterator;function p(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d=Object.assign,_={};function x(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}function h(){}function m(e,t,r){this.props=e,this.context=t,this.refs=_,this.updater=r||y}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=x.prototype;var v=m.prototype=new h;v.constructor=m,d(v,x.prototype),v.isPureReactComponent=!0;var b=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},$={key:!0,ref:!0,__self:!0,__source:!0};function w(t,r,n){var o,u={},s=null,a=null;if(null!=r)for(o in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(s=""+r.key),r)S.call(r,o)&&!$.hasOwnProperty(o)&&(u[o]=r[o]);var c=arguments.length-2;if(1===c)u.children=n;else if(1<c){for(var i=Array(c),f=0;f<c;f++)i[f]=arguments[f+2];u.children=i}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===u[o]&&(u[o]=c[o]);return{$$typeof:e,type:t,key:s,ref:a,props:u,_owner:E.current}}function R(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}function k(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}function C(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}var g=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?C(""+e.key):t.toString(36)}function O(r,n,o,u,s){var a=typeof r;"undefined"!==a&&"boolean"!==a||(r=null);var c=!1;if(null===r)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case e:case t:c=!0}}if(c)return s=s(c=r),r=""===u?"."+j(c,0):u,b(s)?(o="",null!=r&&(o=r.replace(g,"$&/")+"/"),O(s,n,o,"",function(e){return e})):null!=s&&(k(s)&&(s=R(s,o+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(g,"$&/")+"/")+r)),n.push(s)),1;if(c=0,u=""===u?".":u+":",b(r))for(var i=0;i<r.length;i++){var f=u+j(a=r[i],i);c+=O(a,n,o,f,s)}else if("function"==typeof(f=p(r)))for(r=f.call(r),i=0;!(a=r.next()).done;)c+=O(a=a.value,n,o,f=u+j(a,i++),s);else if("object"===a)throw n=String(r),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",function(e){return t.call(r,e,o++)}),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},V={transition:null},A={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:V,ReactCurrentOwner:E};function D(){throw Error("act(...) is not supported in production builds of React.")}exports.Children={map:P,forEach:function(e,t,r){P(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},exports.Component=x,exports.Fragment=r,exports.Profiler=o,exports.PureComponent=m,exports.StrictMode=n,exports.Suspense=c,exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,exports.act=D,exports.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=d({},t.props),u=t.key,s=t.ref,a=t._owner;if(null!=r){if(void 0!==r.ref&&(s=r.ref,a=E.current),void 0!==r.key&&(u=""+r.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(i in r)S.call(r,i)&&!$.hasOwnProperty(i)&&(o[i]=void 0===r[i]&&void 0!==c?c[i]:r[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){c=Array(i);for(var f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:e,type:t.type,key:u,ref:s,props:o,_owner:a}},exports.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},exports.createElement=w,exports.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},exports.createRef=function(){return{current:null}},exports.forwardRef=function(e){return{$$typeof:a,render:e}},exports.isValidElement=k,exports.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},exports.memo=function(e,t){return{$$typeof:i,type:e,compare:void 0===t?null:t}},exports.startTransition=function(e){var t=V.transition;V.transition={};try{e()}finally{V.transition=t}},exports.unstable_act=D,exports.useCallback=function(e,t){return T.current.useCallback(e,t)},exports.useContext=function(e){return T.current.useContext(e)},exports.useDebugValue=function(){},exports.useDeferredValue=function(e){return T.current.useDeferredValue(e)},exports.useEffect=function(e,t){return T.current.useEffect(e,t)},exports.useId=function(){return T.current.useId()},exports.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},exports.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},exports.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},exports.useMemo=function(e,t){return T.current.useMemo(e,t)},exports.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},exports.useRef=function(e){return T.current.useRef(e)},exports.useState=function(e){return T.current.useState(e)},exports.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},exports.useTransition=function(){return T.current.useTransition()},exports.version="18.3.1";
},{}],"n8MK":[function(require,module,exports) {
"use strict";module.exports=require("./cjs/react.production.min.js");
},{"./cjs/react.production.min.js":"awqi"}],"XzIr":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}const a=t=>{let{children:a,onClose:l=(()=>{}),onHide:r=(()=>{}),onExpand:n=(()=>{})}=t;return e.default.createElement("div",{className:"border border-terminalText rounded-md p-4 max-w-4xl mx-auto my-4"},e.default.createElement("div",{className:"bg-terminalBg border-b border-terminalText text-terminalText p-2 rounded-t-md flex justify-between"},e.default.createElement("span",null,"Terminal"),e.default.createElement("div",null,e.default.createElement("span",{onClick:r,className:"mr-2"},"_"),e.default.createElement("span",{onClick:n,className:"mr-2"},"□"),e.default.createElement("span",{onClick:l},"✕"))),e.default.createElement("div",{className:"p-4"},a))};var l=exports.default=a;
},{"react":"n8MK"}],"tg8r":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}const a=t=>{let{prompt:a,children:r}=t;return e.default.createElement("div",{className:"flex"},e.default.createElement("span",{className:"text-terminalText"},a),e.default.createElement("span",{className:"ml-2 text-terminalText"},r))};var r=exports.default=a;
},{"react":"n8MK"}],"Xy58":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("react"));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}function r(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var l=u?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}const n=t=>{let{prompt:r,onSubmit:n}=t;const[a,u]=(0,e.useState)("");return e.default.createElement("div",{className:"flex items-center"},e.default.createElement("span",{className:"text-terminalText"},r),e.default.createElement("input",{type:"text",value:a,onChange:e=>u(e.target.value),onKeyDown:e=>{"Enter"===e.key&&(n(a),u(""))},className:"bg-transparent text-terminalText ml-2 focus:outline-none",autoFocus:!0}))};var a=exports.default=n;
},{"react":"n8MK"}],"xiqC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}const r=t=>{let{directory:r="~",status:l="Normal Mode"}=t;return e.default.createElement("div",{className:"bg-terminalBg border-t border-terminalText text-terminalText p-2 flex justify-between"},e.default.createElement("span",null,r),e.default.createElement("span",null,l))};var l=exports.default=r;
},{"react":"n8MK"}],"ryp7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}const a=t=>{let{history:a}=t;return e.default.createElement("div",{className:"flex flex-col"},a.map((t,a)=>e.default.createElement("div",{key:a,className:"mb-2"},e.default.createElement("div",{className:"flex"},e.default.createElement("span",{className:"text-terminalText"},t.prompt),e.default.createElement("span",{className:"ml-2 text-terminalText"},t.command)),e.default.createElement("div",{className:"text-terminalText ml-4"},t.output))))};var l=exports.default=a;
},{"react":"n8MK"}],"N4ah":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("react"));function t(e){return e&&e.__esModule?e:{default:e}}const r=t=>{let{output:r}=t;return e.default.createElement("div",{className:"text-terminalText ml-4"},r)};var u=exports.default=r;
},{"react":"n8MK"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"CommandHistory",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(exports,"TerminalInput",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(exports,"TerminalLine",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(exports,"TerminalOutput",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(exports,"TerminalStatusBar",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(exports,"TerminalWindow",{enumerable:!0,get:function(){return e.default}});var e=i(require("./components/terminalWindow")),t=i(require("./components/terminalLine")),r=i(require("./components/terminalInput")),n=i(require("./components/TerminalStatusbar")),u=i(require("./components/commandHistory")),o=i(require("./components/terminalOutput"));function i(e){return e&&e.__esModule?e:{default:e}}
},{"./components/terminalWindow":"XzIr","./components/terminalLine":"tg8r","./components/terminalInput":"Xy58","./components/TerminalStatusbar":"xiqC","./components/commandHistory":"ryp7","./components/terminalOutput":"N4ah"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map