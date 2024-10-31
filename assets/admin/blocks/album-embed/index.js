!function(){var e,t={669:function(e,t,r){e.exports=r(609)},448:function(e,t,r){"use strict";var n=r(867),o=r(26),i=r(372),s=r(327),a=r(97),c=r(109),u=r(985),l=r(61),f=r(874),p=r(263);e.exports=function(e){return new Promise((function(t,r){var d,h=e.data,m=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(d),e.signal&&e.signal.removeEventListener("abort",d)}n.isFormData(h)&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(g+":"+w)}var x=a(e.baseURL,e.url);function E(){if(b){var n="getAllResponseHeaders"in b?c(b.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:n,config:e,request:b};o((function(e){t(e),v()}),(function(e){r(e),v()}),i),b=null}}if(b.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=E:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(E)},b.onabort=function(){b&&(r(l("Request aborted",e,"ECONNABORTED",b)),b=null)},b.onerror=function(){r(l("Network Error",e,null,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||f;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",b)),b=null},n.isStandardBrowserEnv()){var S=(e.withCredentials||u(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;S&&(m[e.xsrfHeaderName]=S)}"setRequestHeader"in b&&n.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),y&&"json"!==y&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(d=function(e){b&&(r(!e||e&&e.type?new p("canceled"):e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(d),e.signal&&(e.signal.aborted?d():e.signal.addEventListener("abort",d))),h||(h=null),b.send(h)}))}},609:function(e,t,r){"use strict";var n=r(867),o=r(849),i=r(321),s=r(185),a=function e(t){var r=new i(t),a=o(i.prototype.request,r);return n.extend(a,i.prototype,r),n.extend(a,r),a.create=function(r){return e(s(t,r))},a}(r(546));a.Axios=i,a.Cancel=r(263),a.CancelToken=r(972),a.isCancel=r(502),a.VERSION=r(288).version,a.all=function(e){return Promise.all(e)},a.spread=r(713),a.isAxiosError=r(268),e.exports=a,e.exports.default=a},263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:function(e,t,r){"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,r){"use strict";var n=r(867),o=r(327),i=r(782),s=r(572),a=r(185),c=r(875),u=c.validators;function l(e){this.defaults=e,this.interceptors={request:new i,response:new i}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,l=[];if(this.interceptors.response.forEach((function(e){l.push(e.fulfilled,e.rejected)})),!o){var f=[s,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(l),i=Promise.resolve(t);f.length;)i=i.then(f.shift(),f.shift());return i}for(var p=t;n.length;){var d=n.shift(),h=n.shift();try{p=d(p)}catch(e){h(e);break}}try{i=s(p)}catch(e){return Promise.reject(e)}for(;l.length;)i=i.then(l.shift(),l.shift());return i},l.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){l.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=l},782:function(e,t,r){"use strict";var n=r(867);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:function(e,t,r){"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:function(e,t,r){"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},572:function(e,t,r){"use strict";var n=r(867),o=r(527),i=r(502),s=r(546),a=r(263);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:function(e){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:function(e,t,r){"use strict";var n=r(867);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function c(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var u={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||i,o=t(e);n.isUndefined(o)&&t!==c||(r[e]=o)})),r}},26:function(e,t,r){"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:function(e,t,r){"use strict";var n=r(867),o=r(546);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},546:function(e,t,r){"use strict";var n=r(867),o=r(16),i=r(481),s=r(874),a={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,l={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=r(448)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(0,JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){l.headers[e]=n.merge(a)})),e.exports=l},874:function(e){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},288:function(e){e.exports={version:"0.26.1"}},849:function(e){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:function(e,t,r){"use strict";var n=r(867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:function(e,t,r){"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},268:function(e,t,r){"use strict";var n=r(867);e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}},985:function(e,t,r){"use strict";var n=r(867);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:function(e,t,r){"use strict";var n=r(867);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:function(e,t,r){"use strict";var n=r(867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:function(e,t,r){"use strict";var n=r(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,s){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],s=t[i];if(s){var a=e[i],c=void 0===a||s(a,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:o}},867:function(e,t,r){"use strict";var n=r(849),o=Object.prototype.toString;function i(e){return Array.isArray(e)}function s(e){return void 0===e}function a(e){return"[object ArrayBuffer]"===o.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:a,isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===o.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&a(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return c(e)&&l(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===o.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},864:function(e,t,r){"use strict";var n=window.wp.blocks,o=window.React,i=window.wp.i18n,s=window.wp.components,a=window.wp.blockEditor,c=r(967),u=r.n(c),l=r(669),f=r.n(l),p=r(735);const{Component:d}=wp.element;var h=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"pulseshare/album-embed","version":"1.0.0","title":"Album & Tracks","category":"pulseshare","description":"Display a list of album tracks to embed in your posts.","keywords":["spotify","album","track","embed"],"supports":{"html":false},"attributes":{"blockID":{"type":"string","default":""},"albumArray":{"type":"array","default":[]},"displayType":{"type":"string","default":"full"},"currentTrack":{"type":"object","default":{}},"height":{"type":"string"},"width":{"type":"string"}},"textdomain":"pulseshare","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');(0,o.createElement)("svg",{width:"24",height:"24",fill:"none"},(0,o.createElement)("path",{d:"M16 5H4v2h12V5ZM16 9H4v2h12V9ZM4 13h8v2H4v-2ZM20 16l-6-3v6l6-3Z",fill:"currentColor"}));const m=(0,o.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},(0,o.createElement)("path",{d:"M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-1 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0z","clip-rule":"evenodd",fill:"currentColor","fill-rule":"evenodd"}),(0,o.createElement)("path",{d:"M5 12a7 7 0 0 1 7-7v2a5 5 0 0 0-5 5H5zM12 17a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7v-2z",fill:"currentColor"}),(0,o.createElement)("path",{d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0z","clip-rule":"evenodd",fill:"currentColor","fill-rule":"evenodd"}));(0,n.registerBlockType)(h,{icon:{src:m,foreground:"#2BA266"},edit:class extends d{componentDidMount(){const{attributes:e,setAttributes:t,clientId:r}=this.props,{blockID:n,albumArray:o}=e;n||t({blockID:`album-embed-${r}`}),0===o.length&&this.initAlbum();const i=f().create({baseURL:"https://accounts.spotify.com",headers:{"Content-Type":"application/json"}}),s=f().create({baseURL:"https://api.spotify.com/v1/",headers:{"Content-Type":"application/json"}});s.interceptors.request.use((e=>(i.post("/api/token",p.stringify({grant_type:"client_credentials",client_id:PulseShareAdminVars.pulseshare_options.client_id,client_secret:PulseShareAdminVars.pulseshare_options.client_secret}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((t=>{e.headers.Authorization=`Bearer ${t.data.access_token}`})),e)),(e=>Promise.reject(e))),s.interceptors.response.use((e=>e),(async e=>{const t=e.config;if(401===e.response.status&&!t._retry){t._retry=!0;try{const e=await i.post("/api/token",p.stringify({grant_type:"client_credentials",client_id:PulseShareAdminVars.pulseshare_options.client_id,client_secret:PulseShareAdminVars.pulseshare_options.client_secret}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}});return s.defaults.headers.common.Authorization=`Bearer ${e.data.access_token}`,s(t)}catch(e){return e.response&&e.response.data?Promise.reject(e.response.data):Promise.reject(e)}}return 403===e.response.status&&e.response.data?Promise.reject(e.response.data):Promise.reject(e)})),s.get(`albums/${PulseShareAdminVars.pulseshare_options.album_id}/tracks?market=US&limit=50`).then((e=>{const{data:r}=e,{items:n}=r,o=n.map((e=>({id:e.id,name:e.name,external_url:e.external_urls.spotify,uri:e.uri,type:e.type})));t({albumArray:o})})).catch((e=>{console.log(e.toJSON())}))}initAlbum(){const{setAttributes:e}=this.props;e({albumArray:[]})}render(){const{attributes:e,setAttributes:t,className:r}=this.props,{blockID:n,albumArray:c,displayType:l,currentTrack:f,height:p,width:d}=e,h=u()(r,"album-embed");return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(a.InspectorControls,null,(0,o.createElement)("div",{className:"sfwe-block-sidebar"},(0,o.createElement)(s.PanelBody,{title:(0,i.__)("Settings","pulseshare"),initialOpen:!0},(0,o.createElement)(s.RadioControl,{label:(0,i.__)("Display Type","pulseshare"),help:"Select the display type for the album.",selected:l||"full",options:[{label:"Full Album",value:"full"},{label:"Single Track",value:"single"}],onChange:e=>{t({displayType:e})}}),"single"===l&&(0,o.createElement)(s.SelectControl,{__nextHasNoMarginBottom:!0,label:(0,i.__)("Select Track","pulseshare"),help:"Selected track will be displayed in the frontend.",value:f?f.id:c[0].id,options:c.map((e=>({label:e.name,value:e.id}))),onChange:e=>{t({currentTrack:c.find((t=>t.id===e))})}}),(0,o.createElement)(s.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Height",onChange:e=>{t({height:e})},units:[{a11yLabel:"Pixels (px)",label:"px",step:1,value:"px"},{a11yLabel:"Percent (%)",label:"%",step:1,value:"%"}],value:p}),(0,o.createElement)(s.__experimentalUnitControl,{__next40pxDefaultSize:!0,label:"Width",onChange:e=>{t({width:e})},units:[{a11yLabel:"Pixels (px)",label:"px",step:1,value:"px"},{a11yLabel:"Percent (%)",label:"%",step:1,value:"%"}],value:d})))),(0,o.createElement)("div",{className:h,id:n},(0,o.createElement)("div",{className:"container"},(0,o.createElement)("div",{className:"sfwe-episode"},"single"===l&&!f.id&&(0,o.createElement)("div",{className:"notice notice-info alt"},(0,o.createElement)("p",null,(0,o.createElement)("i",null,(0,i.__)("Please select a track from the block settings.","pulseshare")))),"single"===l&&f.id&&(0,o.createElement)("iframe",{id:"sfwe-track-"+f.id,frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",width:d||"100%",height:p||"200",src:"https://open.spotify.com/embed/track/"+f.id}),"full"===l&&(0,o.createElement)("iframe",{id:"sfwe-album-"+PulseShareAdminVars.pulseshare_options.album_id,frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",width:d||"100%",height:p||"380",src:"https://open.spotify.com/embed/album/"+PulseShareAdminVars.pulseshare_options.album_id})))))}},save:function(e){const{className:t,attributes:r}=e,{blockID:n,currentTrack:i,displayType:s,height:a,width:c}=r,l=u()(t,"album-embed");return(0,o.createElement)("div",{className:l,id:n},(0,o.createElement)("div",{className:"container"},(0,o.createElement)("div",{className:"sfwe-episode"},"single"===s&&i.id&&(0,o.createElement)("iframe",{id:"sfwe-track-"+i.id,frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",width:c||"100%",height:a||"200",src:"https://open..com/embed/track/"+i.id}),"full"===s&&(0,o.createElement)("iframe",{id:"sfwe-album-"+PulseShareAdminVars.pulseshare_options.album_id,frameBorder:"0",allowFullScreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",width:c||"100%",height:a||"380",src:"https://open..com/embed/album/"+PulseShareAdminVars.pulseshare_options.album_id}))))}})},335:function(e){"use strict";function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,n,o,i){n=n||"&",o=o||"=";var s={};if("string"!=typeof e||0===e.length)return s;var a=/\+/g;e=e.split(n);var c=1e3;i&&"number"==typeof i.maxKeys&&(c=i.maxKeys);var u=e.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var f,p,d,h,m=e[l].replace(a,"%20"),y=m.indexOf(o);y>=0?(f=m.substr(0,y),p=m.substr(y+1)):(f=m,p=""),d=decodeURIComponent(f),h=decodeURIComponent(p),t(s,d)?r(s[d])?s[d].push(h):s[d]=[s[d],h]:s[d]=h}return s};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},795:function(e){"use strict";var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,i,s,a){return i=i||"&",s=s||"=",null===e&&(e=void 0),"object"==typeof e?n(o(e),(function(o){var a=encodeURIComponent(t(o))+s;return r(e[o])?n(e[o],(function(e){return a+encodeURIComponent(t(e))})).join(i):a+encodeURIComponent(t(e[o]))})).join(i):a?encodeURIComponent(t(a))+s+encodeURIComponent(t(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var o=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},735:function(e,t,r){"use strict";t.decode=t.parse=r(335),t.encode=t.stringify=r(795)},967:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={116:0,682:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],c=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var l=c(n)}for(t&&t(r);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self.webpackChunkpulseshare=self.webpackChunkpulseshare||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[682],(function(){return n(864)}));o=n.O(o)}();