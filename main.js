/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector("#todo__template").content;function e(e,r){var n=t.querySelector(".todo__list-item").cloneNode(!0),o=n.querySelector(".todo__button_remove"),i=n.querySelector(".todo__button_edit"),c=n.querySelector(".todo__text"),a=n.querySelector(".todo__checkbox"),u=e.id,s=e.title,l=e.completed,f=r.removeFunc,h=r.editFunc,p=r.changeStatusFunc;return c.textContent=s,a.checked=l,a.checked&&c.classList.add("todo__text_completed"),o.addEventListener("click",(function(t){return f(n,u)})),i.addEventListener("click",(function(t){return h({description:c,isCompleted:a},u)})),a.addEventListener("click",(function(t){p({title:c.textContent,completed:a.checked},u,c)})),n}function r(t){t.remove()}function n(t,e){e.description.textContent=t.title,e.isCompleted.checked=t.completed}function o(t,e){e?t.classList.add("todo__text_completed"):t.classList.remove("todo__text_completed")}function i(t){t.showModal(),document.addEventListener("mousedown",c)}function c(t){(t.target.classList.contains("dialog__close")||t.target.classList.contains("dialog"))&&a(t.target.closest(".dialog"))}function a(t){t.close(),document.removeEventListener("click",c)}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function s(){s=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof w?e:w,c=Object.create(i.prototype),a=new F(n||[]);return o(c,"_invoke",{value:O(t,r,a)}),c}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",m="completed",g={};function w(){}function _(){}function b(){}var x={};f(x,c,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==r&&n.call(E,c)&&(x=E);var k=b.prototype=w.prototype=Object.create(x);function S(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,c,a){var s=p(t[o],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,a)}))}a(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=d;return function(i,c){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw c;return{value:t,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=q(a,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function q(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,q(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var c=i.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(u(e)+" is not iterable")}return _.prototype=b,o(k,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:_,configurable:!0}),_.displayName=f(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},S(j.prototype),f(j.prototype,a,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new j(h(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(k),f(k,l,"Generator"),f(k,c,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function l(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){l(i,n,o,c,a,"next",t)}function a(t){l(i,n,o,c,a,"throw",t)}c(void 0)}))}}function h(t){return p.apply(this,arguments)}function p(){return(p=f(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.ok){t.next=6;break}return t.next=3,e.json();case 3:return t.abrupt("return",t.sent);case 6:return t.abrupt("return",Promise.reject("Ошибка ".concat(e.status)));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return y.apply(this,arguments)}function y(){return(y=f(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/todos/");case 2:return e=t.sent,t.abrupt("return",h(e));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=f(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/todos/",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)});case 2:return r=t.sent,t.abrupt("return",h(r));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,e){return w.apply(this,arguments)}function w(){return(w=f(s().mark((function t(e,r){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/todos/".concat(r),{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)});case 2:return n=t.sent,t.abrupt("return",h(n));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return b.apply(this,arguments)}function b(){return(b=f(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/posts/".concat(e),{method:"DELETE"});case 2:return r=t.sent,t.abrupt("return",h(r));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function L(){L=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,c=Object.create(i.prototype),a=new F(n||[]);return o(c,"_invoke",{value:O(t,r,a)}),c}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",y="completed",v={};function m(){}function g(){}function w(){}var _={};s(_,c,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(T([])));E&&E!==r&&n.call(E,c)&&(_=E);var k=w.prototype=m.prototype=Object.create(_);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,c,a){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==x(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,a)}))}a(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=h;return function(i,c){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw c;return{value:t,done:!0}}for(n.method=i,n.arg=c;;){var a=n.delegate;if(a){var u=q(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:p,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function q(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,q(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var c=i.arg;return c?c.done?(r[e.resultName]=c.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):c:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(x(e)+" is not iterable")}return g.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},S(j.prototype),s(j.prototype,a,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new j(l(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},S(k),s(k,u,"Generator"),s(k,c,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}function E(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function k(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){E(i,n,o,c,a,"next",t)}function a(t){E(i,n,o,c,a,"throw",t)}c(void 0)}))}}var S=document.querySelector(".todo__list"),j=document.querySelector(".search__form"),O=document.querySelector(".search__input"),q=document.querySelector(".search__button_reset"),P=document.querySelector(".content__button-new"),N=document.querySelector(".dialog_new"),F={dialog:N,form:N.querySelector(".dialog__form"),submitButton:N.querySelector(".dialog__button")},T=document.querySelector(".dialog_remove"),G={dialog:T,form:T.querySelector(".dialog__form"),submitButton:T.querySelector(".dialog__button")},C=document.querySelector(".dialog_edit"),A={dialog:C,form:C.querySelector(".dialog__form"),submitButton:C.querySelector(".dialog__button")};function I(){return(I=k(L().mark((function t(){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d();case 3:t.sent.forEach((function(t){S.append(e(t,U))})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function D(){return(D=k(L().mark((function t(r){var n;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.prev=1,t.next=4,v({title:F.form.description.value,completed:!1});case 4:n=t.sent,S.prepend(e({title:n.title,completed:!1},U)),a(N),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(er);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}!function(){I.apply(this,arguments)}();var Y,B,J,U={removeFunc:(J=k(L().mark((function t(e,n){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(T),M=function(){var t=k(L().mark((function t(){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(n);case 3:t.sent,r(e),a(T),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();case 2:case"end":return t.stop()}}),t)}))),function(t,e){return J.apply(this,arguments)}),editFunc:(B=k(L().mark((function t(e,r){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(C),A.form.description.value=e.description.textContent,z=function(){var t=k(L().mark((function t(){var o;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g({title:A.form.description.value,completed:e.isCompleted.checked},r);case 3:n({title:(o=t.sent).title,completed:o.completed},e),a(C),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();case 3:case"end":return t.stop()}}),t)}))),function(t,e){return B.apply(this,arguments)}),changeStatusFunc:(Y=k(L().mark((function t(e,r,n){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g(e,r);case 3:t.sent,o(n,e.completed),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),function(t,e,r){return Y.apply(this,arguments)})};function H(t){var e=Array.from(S.querySelectorAll(".todo__list-item")),r=e.filter((function(e){return e.querySelector(".todo__text").textContent.toLowerCase().includes(t.toLowerCase())}));e.forEach((function(t){r.includes(t)?t.classList.remove("todo__list-item_hidden"):t.classList.add("todo__list-item_hidden")}))}P.addEventListener("click",(function(){F.form.reset(),i(N)})),F.form.addEventListener("submit",(function(t){return D.apply(this,arguments)}));var M=function(){var t=k(L().mark((function t(){return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),z=function(){};G.form.addEventListener("submit",(function(t){t.preventDefault(),M()})),A.form.addEventListener("submit",(function(t){t.preventDefault(),z()})),j.addEventListener("submit",(function(t){return t.preventDefault()})),j.search.addEventListener("input",(function(t){H(j.search.value)})),document.addEventListener("click",(function(t){var e=t.target.classList.contains("search__button_search"),r=t.target.classList.contains("search__input"),n=t.target.classList.contains("search__button_reset");e?(j.classList.add("search__form_expanded"),q.classList.add("search__button_reset_expanded"),O.classList.add("search__input_expanded")):e||r||n||""!==O.value||(j.classList.remove("search__form_expanded"),q.classList.remove("search__button_reset_expanded"),O.classList.remove("search__input_expanded"))})),q.addEventListener("click",(function(){j.reset(),H(j.search.value)}))})();
//# sourceMappingURL=main.js.map