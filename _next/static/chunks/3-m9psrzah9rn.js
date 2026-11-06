(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[332793,(t,e,i)=>{var r=t.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(t.r(421506)),o=t.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAlt")},37463,(t,e,i)=>{var r=t.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(t.r(421506)),o=t.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M10 9h4V6h3l-5-5-5 5h3zm-1 1H6V7l-5 5 5 5v-3h3zm14 2-5-5v3h-3v4h3v3zm-9 3h-4v3H7l5 5 5-5h-3z"}),"OpenWith")},753892,t=>{function e(){for(var t,e,i=0,r="";i<arguments.length;)(t=arguments[i++])&&(e=function t(e){var i,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(i=0;i<e.length;i++)e[i]&&(r=t(e[i]))&&(n&&(n+=" "),n+=r);else for(i in e)e[i]&&(n&&(n+=" "),n+=i);return n}(t))&&(r&&(r+=" "),r+=e);return r}t.s(["clsx",0,e,"default",0,e])},498981,(t,e,i)=>{var r,n;let o;r="u">typeof window?window:t.e,n=function(t){function e(t,e,i,r){t.hasOwnProperty(e)||(t[e]=r.apply(null,i))}var i={};return e(i,"Core/Globals.js",[],function(){var e,i,r=void 0!==t?t:"u">typeof window?window:{};return(e=i||(i={})).SVG_NS="http://www.w3.org/2000/svg",e.product="Highcharts",e.version="9.2.2",e.win=r,e.doc=e.win.document,e.svg=e.doc&&e.doc.createElementNS&&!!e.doc.createElementNS(e.SVG_NS,"svg").createSVGRect,e.userAgent=e.win.navigator&&e.win.navigator.userAgent||"",e.isChrome=-1!==e.userAgent.indexOf("Chrome"),e.isFirefox=-1!==e.userAgent.indexOf("Firefox"),e.isMS=/(edge|msie|trident)/i.test(e.userAgent)&&!e.win.opera,e.isSafari=!e.isChrome&&-1!==e.userAgent.indexOf("Safari"),e.isTouchDevice=/(Mobile|Android|Windows Phone)/.test(e.userAgent),e.isWebKit=-1!==e.userAgent.indexOf("AppleWebKit"),e.deg2rad=2*Math.PI/360,e.hasBidiBug=e.isFirefox&&4>parseInt(e.userAgent.split("Firefox/")[1],10),e.hasTouch=!!e.win.TouchEvent,e.marginNames=["plotTop","marginRight","marginBottom","plotLeft"],e.noop=function(){},e.supportsPassiveEvents=function(){var t=!1;if(!e.isMS){var i=Object.defineProperty({},"passive",{get:function(){t=!0}});e.win.addEventListener&&e.win.removeEventListener&&(e.win.addEventListener("testPassive",e.noop,i),e.win.removeEventListener("testPassive",e.noop,i))}return t}(),e.charts=[],e.dateFormats={},e.seriesTypes={},e.symbolSizes={},e.chartCount=0,i}),e(i,"Core/Utilities.js",[i["Core/Globals.js"]],function(t){function e(i,r,n,o){var a=r?"Highcharts error":"Highcharts warning";32===i&&(i=a+": Deprecated member");var s=l(i),d=s?a+" #"+i+": www.highcharts.com/errors/"+i+"/":i.toString();if(void 0!==o){var c="";s&&(d+="?"),g(o,function(t,e){c+="\n - "+e+": "+t,s&&(d+=encodeURI(e)+"="+encodeURI(t))}),d+=c}v(t,"displayError",{chart:n,code:i,message:d,params:o},function(){if(r)throw Error(d);b.console&&-1===e.messages.indexOf(d)&&console.warn(d)}),e.messages.push(d)}function i(t,e){return parseInt(t,e||10)}function r(t){return"string"==typeof t}function n(t){return"[object Array]"===(t=Object.prototype.toString.call(t))||"[object Array Iterator]"===t}function o(t,e){return!!t&&"object"==typeof t&&(!e||!n(t))}function a(t){return o(t)&&"number"==typeof t.nodeType}function s(t){var e=t&&t.constructor;return!(!o(t,!0)||a(t)||!e||!e.name||"Object"===e.name)}function l(t){return"number"==typeof t&&!isNaN(t)&&1/0>t&&-1/0<t}function d(t){return null!=t}function c(t,e,i){var n;return r(e)?d(i)?t.setAttribute(e,i):t&&t.getAttribute&&((n=t.getAttribute(e))||"class"!==e||(n=t.getAttribute(e+"Name"))):g(e,function(e,i){t.setAttribute(i,e)}),n}function h(t,e){var i;for(i in t||(t={}),e)t[i]=e[i];return t}function u(){for(var t=arguments,e=t.length,i=0;i<e;i++){var r=t[i];if(null!=r)return r}}function p(e,i){t.isMS&&!t.svg&&i&&void 0!==i.opacity&&(i.filter="alpha(opacity="+100*i.opacity+")"),h(e.style,i)}function m(t,e,i,r,n){return t=x.createElement(t),e&&h(t,e),n&&p(t,{padding:"0",border:"none",margin:"0"}),i&&p(t,i),r&&r.appendChild(t),t}function f(t,e){return parseFloat(t.toPrecision(e||14))}function g(t,e,i){for(var r in t)Object.hasOwnProperty.call(t,r)&&e.call(i||t[r],t[r],r,t)}function y(e,i,r){function n(i,r){var n=e.removeEventListener||t.removeEventListenerPolyfill;n&&n.call(e,i,r,!1)}function o(t){var r;if(e.nodeName){if(i){var o={};o[i]=!0}else o=t;g(o,function(e,i){if(t[i])for(r=t[i].length;r--;)n(i,t[i][r].fn)})}}var a="function"==typeof e&&e.prototype||e;if(Object.hasOwnProperty.call(a,"hcEvents")){var s=a.hcEvents;i?(a=s[i]||[],r?(s[i]=a.filter(function(t){return r!==t.fn}),n(i,r)):(o(s),s[i]=[])):(o(s),delete a.hcEvents)}}function v(e,i,r,n){if(r=r||{},x.createEvent&&(e.dispatchEvent||e.fireEvent&&e!==t)){var o=x.createEvent("Events");o.initEvent(i,!0,!0),r=h(o,r),e.dispatchEvent?e.dispatchEvent(r):e.fireEvent(i,r)}else if(e.hcEvents){r.target||h(r,{preventDefault:function(){r.defaultPrevented=!0},target:e,type:i}),o=[];for(var a=e,s=!1;a.hcEvents;)Object.hasOwnProperty.call(a,"hcEvents")&&a.hcEvents[i]&&(o.length&&(s=!0),o.unshift.apply(o,a.hcEvents[i])),a=Object.getPrototypeOf(a);s&&o.sort(function(t,e){return t.order-e.order}),o.forEach(function(t){!1===t.fn.call(e,r)&&r.preventDefault()})}n&&!r.defaultPrevented&&n.call(e,r)}var I=t.charts,x=t.doc,b=t.win;(e||(e={})).messages=[],Math.easeInOutSine=function(t){return -.5*(Math.cos(Math.PI*t)-1)};var C=Array.prototype.find?function(t,e){return t.find(e)}:function(t,e){var i,r=t.length;for(i=0;i<r;i++)if(e(t[i],i))return t[i]};g({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(i,r){t[r]=function(t){var n;return e(32,!1,void 0,((n={})["Highcharts."+r]="use Array."+i,n)),Array.prototype[i].apply(t,[].slice.call(arguments,1))}});var T,$,w,S,A=(T=Math.random().toString(36).substring(2,9)+"-",$=0,function(){return"highcharts-"+(S?"":T)+$++});return b.jQuery&&(b.jQuery.fn.highcharts=function(){var e=[].slice.call(arguments);if(this[0])return e[0]?(new t[r(e[0])?e.shift():"Chart"](this[0],e[0],e[1]),this):I[c(this[0],"data-highcharts-chart")]}),C={addEvent:function(e,i,r,n){void 0===n&&(n={});var o="function"==typeof e&&e.prototype||e;Object.hasOwnProperty.call(o,"hcEvents")||(o.hcEvents={}),o=o.hcEvents,t.Point&&e instanceof t.Point&&e.series&&e.series.chart&&(e.series.chart.runTrackerClick=!0);var a=e.addEventListener||t.addEventListenerPolyfill;return a&&a.call(e,i,r,!!t.supportsPassiveEvents&&{passive:void 0===n.passive?-1!==i.indexOf("touch"):n.passive,capture:!1}),o[i]||(o[i]=[]),o[i].push({fn:r,order:"number"==typeof n.order?n.order:1/0}),o[i].sort(function(t,e){return t.order-e.order}),function(){y(e,i,r)}},arrayMax:function(t){for(var e=t.length,i=t[0];e--;)t[e]>i&&(i=t[e]);return i},arrayMin:function(t){for(var e=t.length,i=t[0];e--;)t[e]<i&&(i=t[e]);return i},attr:c,clamp:function(t,e,i){return t>e?t<i?t:i:e},cleanRecursively:function t(e,i){var r={};return g(e,function(n,a){o(e[a],!0)&&!e.nodeType&&i[a]?Object.keys(n=t(e[a],i[a])).length&&(r[a]=n):(o(e[a])||e[a]!==i[a])&&(r[a]=e[a])}),r},clearTimeout:function(t){d(t)&&clearTimeout(t)},correctFloat:f,createElement:m,css:p,defined:d,destroyObjectProperties:function(t,e){g(t,function(i,r){i&&i!==e&&i.destroy&&i.destroy(),delete t[r]})},discardElement:function(t){w||(w=m("div")),t&&w.appendChild(t),w.innerHTML=""},erase:function(t,e){for(var i=t.length;i--;)if(t[i]===e){t.splice(i,1);break}},error:e,extend:h,extendClass:function(t,e){var i=function(){};return i.prototype=new t,h(i.prototype,e),i},find:C,fireEvent:v,getMagnitude:function(t){return Math.pow(10,Math.floor(Math.log(t)/Math.LN10))},getNestedProperty:function(t,e){for(t=t.split(".");t.length&&d(e);){var i=t.shift();if(void 0===i||"__proto__"===i||!d(e=e[i])||"function"==typeof e||"number"==typeof e.nodeType||e===b)return}return e},getStyle:function r(n,o,a){var s=t.getStyle||r;if("width"===o)return o=Math.min(n.offsetWidth,n.scrollWidth),(a=n.getBoundingClientRect&&n.getBoundingClientRect().width)<o&&a>=o-1&&(o=Math.floor(a)),Math.max(0,o-(s(n,"padding-left",!0)||0)-(s(n,"padding-right",!0)||0));if("height"===o)return Math.max(0,Math.min(n.offsetHeight,n.scrollHeight)-(s(n,"padding-top",!0)||0)-(s(n,"padding-bottom",!0)||0));if(b.getComputedStyle||e(27,!0),n=b.getComputedStyle(n,void 0)){var l=n.getPropertyValue(o);u(a,"opacity"!==o)&&(l=i(l))}return l},inArray:function(t,i,r){return e(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"}),i.indexOf(t,r)},isArray:n,isClass:s,isDOMElement:a,isFunction:function(t){return"function"==typeof t},isNumber:l,isObject:o,isString:r,keys:function(t){return e(32,!1,void 0,{"Highcharts.keys":"use Object.keys"}),Object.keys(t)},merge:function(){var t,e=arguments,i={},r=function(t,e){return"object"!=typeof t&&(t={}),g(e,function(i,n){"__proto__"!==n&&"constructor"!==n&&(!o(i,!0)||s(i)||a(i)?t[n]=e[n]:t[n]=r(t[n]||{},i))}),t};!0===e[0]&&(i=e[1],e=Array.prototype.slice.call(e,2));var n=e.length;for(t=0;t<n;t++)i=r(i,e[t]);return i},normalizeTickInterval:function(t,e,i,r,n){var o=t,a=t/(i=u(i,1));for(e||(e=n?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===r&&(1===i?e=e.filter(function(t){return 0==t%1}):.1>=i&&(e=[1/i]))),r=0;r<e.length&&(o=e[r],(!n||!(o*i>=t))&&(n||!(a<=(e[r]+(e[r+1]||e[r]))/2)));r++);return f(o*i,-Math.round(Math.log(.001)/Math.LN10))},objectEach:g,offset:function(t){var e=x.documentElement;return{top:(t=t.parentElement||t.parentNode?t.getBoundingClientRect():{top:0,left:0,width:0,height:0}).top+(b.pageYOffset||e.scrollTop)-(e.clientTop||0),left:t.left+(b.pageXOffset||e.scrollLeft)-(e.clientLeft||0),width:t.width,height:t.height}},pad:function(t,e,i){return Array((e||2)+1-String(t).replace("-","").length).join(i||"0")+t},pick:u,pInt:i,relativeLength:function(t,e,i){return/%$/.test(t)?e*parseFloat(t)/100+(i||0):parseFloat(t)},removeEvent:y,splat:function(t){return n(t)?t:[t]},stableSort:function(t,e){var i,r,n=t.length;for(r=0;r<n;r++)t[r].safeI=r;for(t.sort(function(t,r){return 0===(i=e(t,r))?t.safeI-r.safeI:i}),r=0;r<n;r++)delete t[r].safeI},syncTimeout:function(t,e,i){return 0<e?setTimeout(t,e,i):(t.call(0,i),-1)},timeUnits:{millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:24192e5,year:314496e5},uniqueKey:A,useSerialIds:function(t){return S=u(t,S)},wrap:function(t,e,i){var r=t[e];t[e]=function(){var t=Array.prototype.slice.call(arguments),e=arguments,n=this;return n.proceed=function(){r.apply(n,arguments.length?arguments:e)},t.unshift(r),t=i.apply(this,t),n.proceed=null,t}}}}),e(i,"Core/Color/Palette.js",[],function(){return{colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),backgroundColor:"#ffffff",neutralColor100:"#000000",neutralColor80:"#333333",neutralColor60:"#666666",neutralColor40:"#999999",neutralColor20:"#cccccc",neutralColor10:"#e6e6e6",neutralColor5:"#f2f2f2",neutralColor3:"#f7f7f7",highlightColor100:"#003399",highlightColor80:"#335cad",highlightColor60:"#6685c2",highlightColor20:"#ccd6eb",highlightColor10:"#e6ebf5",positiveColor:"#06b535",negativeColor:"#f21313"}}),e(i,"Core/Chart/ChartDefaults.js",[i["Core/Color/Palette.js"]],function(t){return{panning:{enabled:!1,type:"x"},styledMode:!1,borderRadius:0,colorCount:10,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},zoomBySingleTouch:!1,width:null,height:null,borderColor:t.highlightColor80,backgroundColor:t.backgroundColor,plotBorderColor:t.neutralColor20}}),e(i,"Core/Color/Color.js",[i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,e){var i=e.isNumber,r=e.merge,n=e.pInt;function o(e){this.rgba=[0/0,0/0,0/0,0/0],this.input=e;var i=t.Color;return i&&i!==o?new i(e):this instanceof o?void this.init(e):new o(e)}return o.parse=function(t){return t?new o(t):o.None},o.prototype.init=function(t){var e;if("object"==typeof t&&void 0!==t.stops)this.stops=t.stops.map(function(t){return new o(t[1])});else if("string"==typeof t){if(this.input=t=o.names[t.toLowerCase()]||t,"#"===t.charAt(0)){var i=t.length,r=parseInt(t.substr(1),16);7===i?e=[(0xff0000&r)>>16,(65280&r)>>8,255&r,1]:4===i&&(e=[(3840&r)>>4|(3840&r)>>8,(240&r)>>4|240&r,(15&r)<<4|15&r,1])}if(!e)for(r=o.parsers.length;r--&&!e;){var n=o.parsers[r];(i=n.regex.exec(t))&&(e=n.parse(i))}}e&&(this.rgba=e)},o.prototype.get=function(t){var e=this.input,n=this.rgba;if("object"==typeof e&&void 0!==this.stops){var o=r(e);return o.stops=[].slice.call(o.stops),this.stops.forEach(function(e,i){o.stops[i]=[o.stops[i][0],e.get(t)]}),o}return n&&i(n[0])?"rgb"!==t&&(t||1!==n[3])?"a"===t?""+n[3]:"rgba("+n.join(",")+")":"rgb("+n[0]+","+n[1]+","+n[2]+")":e},o.prototype.brighten=function(t){var e=this.rgba;if(this.stops)this.stops.forEach(function(e){e.brighten(t)});else if(i(t)&&0!==t)for(var r=0;3>r;r++)e[r]+=n(255*t),0>e[r]&&(e[r]=0),255<e[r]&&(e[r]=255);return this},o.prototype.setOpacity=function(t){return this.rgba[3]=t,this},o.prototype.tweenTo=function(t,e){var r=this.rgba,n=t.rgba;return i(r[0])&&i(n[0])?((t=1!==n[3]||1!==r[3])?"rgba(":"rgb(")+Math.round(n[0]+(r[0]-n[0])*(1-e))+","+Math.round(n[1]+(r[1]-n[1])*(1-e))+","+Math.round(n[2]+(r[2]-n[2])*(1-e))+(t?","+(n[3]+(r[3]-n[3])*(1-e)):"")+")":t.input||"none"},o.names={white:"#ffffff",black:"#000000"},o.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(t){return[n(t[1]),n(t[2]),n(t[3]),parseFloat(t[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(t){return[n(t[1]),n(t[2]),n(t[3]),1]}}],o.None=new o(""),o}),e(i,"Core/Time.js",[i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,e){var i=t.win,r=e.defined,n=e.error,o=e.extend,a=e.isObject,s=e.merge,l=e.objectEach,d=e.pad,c=e.pick,h=e.splat,u=e.timeUnits,p=t.isSafari&&i.Intl&&i.Intl.DateTimeFormat.prototype.formatRange,m=t.isSafari&&i.Intl&&!i.Intl.DateTimeFormat.prototype.formatRange;function f(t){this.options={},this.variableTimezone=this.useUTC=!1,this.Date=i.Date,this.getTimezoneOffset=this.timezoneOffsetFunction(),this.update(t)}return f.prototype.get=function(t,e){if(this.variableTimezone||this.timezoneOffset){var i=e.getTime(),r=i-this.getTimezoneOffset(e);return e.setTime(r),t=e["getUTC"+t](),e.setTime(i),t}return this.useUTC?e["getUTC"+t]():e["get"+t]()},f.prototype.set=function(t,e,i){if(this.variableTimezone||this.timezoneOffset){if("Milliseconds"===t||"Seconds"===t||"Minutes"===t&&0==this.getTimezoneOffset(e)%36e5)return e["setUTC"+t](i);var r=this.getTimezoneOffset(e);return r=e.getTime()-r,e.setTime(r),e["setUTC"+t](i),t=this.getTimezoneOffset(e),r=e.getTime()+t,e.setTime(r)}return this.useUTC||p&&"FullYear"===t?e["setUTC"+t](i):e["set"+t](i)},f.prototype.update=function(t){var e=c(t&&t.useUTC,!0);this.options=t=s(!0,this.options||{},t),this.Date=t.Date||i.Date||Date,this.timezoneOffset=(this.useUTC=e)&&t.timezoneOffset,this.getTimezoneOffset=this.timezoneOffsetFunction(),this.variableTimezone=e&&!(!t.getTimezoneOffset&&!t.timezone)},f.prototype.makeTime=function(t,e,i,r,n,o){if(this.useUTC){var a=this.Date.UTC.apply(0,arguments),s=this.getTimezoneOffset(a);a+=s;var l=this.getTimezoneOffset(a);s!==l?a+=l-s:s-36e5!==this.getTimezoneOffset(a-36e5)||m||(a-=36e5)}else a=new this.Date(t,e,c(i,1),c(r,0),c(n,0),c(o,0)).getTime();return a},f.prototype.timezoneOffsetFunction=function(){var t=this,e=this.options,r=e.moment||i.moment;if(!this.useUTC)return function(t){return 6e4*new Date(t.toString()).getTimezoneOffset()};if(e.timezone){if(r)return function(t){return-(6e4*r.tz(t,e.timezone).utcOffset())};n(25)}return this.useUTC&&e.getTimezoneOffset?function(t){return 6e4*e.getTimezoneOffset(t.valueOf())}:function(){return 6e4*(t.timezoneOffset||0)}},f.prototype.dateFormat=function(e,i,n){if(!r(i)||isNaN(i))return t.defaultOptions.lang&&t.defaultOptions.lang.invalidDate||"";e=c(e,"%Y-%m-%d %H:%M:%S");var a=this,s=new this.Date(i),h=this.get("Hours",s),u=this.get("Day",s),p=this.get("Date",s),m=this.get("Month",s),f=this.get("FullYear",s),g=t.defaultOptions.lang,y=g&&g.weekdays,v=g&&g.shortWeekdays;return l(s=o({a:v?v[u]:y[u].substr(0,3),A:y[u],d:d(p),e:d(p,2," "),w:u,b:g.shortMonths[m],B:g.months[m],m:d(m+1),o:m+1,y:f.toString().substr(2,2),Y:f,H:d(h),k:h,I:d(h%12||12),l:h%12||12,M:d(this.get("Minutes",s)),p:12>h?"AM":"PM",P:12>h?"am":"pm",S:d(s.getSeconds()),L:d(Math.floor(i%1e3),3)},t.dateFormats),function(t,r){for(;-1!==e.indexOf("%"+r);)e=e.replace("%"+r,"function"==typeof t?t.call(a,i):t)}),n?e.substr(0,1).toUpperCase()+e.substr(1):e},f.prototype.resolveDTLFormat=function(t){return a(t,!0)?t:{main:(t=h(t))[0],from:t[1],to:t[2]}},f.prototype.getTimeTicks=function(t,e,i,n){var a,s=this,l=[],d={},h=new s.Date(e),p=t.unitRange,m=t.count||1;if(n=c(n,1),r(e)){if(s.set("Milliseconds",h,p>=u.second?0:m*Math.floor(s.get("Milliseconds",h)/m)),p>=u.second&&s.set("Seconds",h,p>=u.minute?0:m*Math.floor(s.get("Seconds",h)/m)),p>=u.minute&&s.set("Minutes",h,p>=u.hour?0:m*Math.floor(s.get("Minutes",h)/m)),p>=u.hour&&s.set("Hours",h,p>=u.day?0:m*Math.floor(s.get("Hours",h)/m)),p>=u.day&&s.set("Date",h,p>=u.month?1:Math.max(1,m*Math.floor(s.get("Date",h)/m))),p>=u.month){s.set("Month",h,p>=u.year?0:m*Math.floor(s.get("Month",h)/m));var f=s.get("FullYear",h)}p>=u.year&&s.set("FullYear",h,f-f%m),p===u.week&&(f=s.get("Day",h),s.set("Date",h,s.get("Date",h)-f+n+(f<n?-7:0))),f=s.get("FullYear",h),n=s.get("Month",h);var g=s.get("Date",h),y=s.get("Hours",h);for(e=h.getTime(),(s.variableTimezone||!s.useUTC)&&r(i)&&(a=i-e>4*u.month||s.getTimezoneOffset(e)!==s.getTimezoneOffset(i)),e=h.getTime(),h=1;e<i;)l.push(e),e=p===u.year?s.makeTime(f+h*m,0):p===u.month?s.makeTime(f,n+h*m):a&&(p===u.day||p===u.week)?s.makeTime(f,n,g+h*m*(p===u.day?1:7)):a&&p===u.hour&&1<m?s.makeTime(f,n,g,y+h*m):e+p*m,h++;l.push(e),p<=u.hour&&1e4>l.length&&l.forEach(function(t){0==t%18e5&&"000000000"===s.dateFormat("%H%M%S%L",t)&&(d[t]="day")})}return l.info=o(t,{higherRanks:d,totalRange:p*m}),l},f.prototype.getDateFormat=function(t,e,i,r){var n=this.dateFormat("%m-%d %H:%M:%S.%L",e),o={millisecond:15,second:12,minute:9,hour:6,day:3},a="millisecond";for(s in u){if(t===u.week&&+this.dateFormat("%w",e)===i&&"00:00:00.000"===n.substr(6)){var s="week";break}if(u[s]>t){s=a;break}if(o[s]&&n.substr(o[s])!=="01-01 00:00:00.000".substr(o[s]))break;"week"!==s&&(a=s)}if(s)var l=this.resolveDTLFormat(r[s]).main;return l},f}),e(i,"Core/DefaultOptions.js",[i["Core/Chart/ChartDefaults.js"],i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Color/Palette.js"],i["Core/Time.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o){e=e.parse;var a=o.merge,s={colors:r.colors,symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:t,title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},labels:{style:{position:"absolute",color:r.neutralColor80}},legend:{enabled:!0,align:"center",alignColumns:!0,className:"highcharts-no-tooltip",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:r.neutralColor40,borderRadius:0,navigation:{activeColor:r.highlightColor100,inactiveColor:r.neutralColor20},itemStyle:{color:r.neutralColor80,cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:r.neutralColor100},itemHiddenStyle:{color:r.neutralColor20},shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:r.backgroundColor,opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:i.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",headerShape:"callout",hideDelay:500,padding:8,shape:"callout",shared:!1,snap:i.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">●</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:e(r.neutralColor3).setOpacity(.85).get(),borderWidth:1,shadow:!0,stickOnContact:!1,style:{color:r.neutralColor80,cursor:"default",fontSize:"12px",whiteSpace:"nowrap"},useHTML:!1},credits:{enabled:!0,href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:r.neutralColor40,fontSize:"9px"},text:"Highcharts.com"}};s.chart.styledMode=!1;var l=new n(a(s.global,s.time));return{defaultOptions:s,defaultTime:l,getOptions:function(){return s},setOptions:function(t){return a(!0,s,t),(t.time||t.global)&&(i.time?i.time.update(a(s.global,s.time,t.global,t.time)):i.time=l),s}}}),e(i,"Core/Animation/Fx.js",[i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,e,i){var r=t.parse,n=e.win,o=i.isNumber,a=i.objectEach;function s(t,e,i){this.pos=0/0,this.options=e,this.elem=t,this.prop=i}return s.prototype.dSetter=function(){var t=this.paths,e=t&&t[0];t=t&&t[1];var i=this.now||0,r=[];if(1!==i&&e&&t)if(e.length===t.length&&1>i)for(var n=0;n<t.length;n++){for(var a=e[n],s=t[n],l=[],d=0;d<s.length;d++){var c=a[d],h=s[d];o(c)&&o(h)&&("A"!==s[0]||4!==d&&5!==d)?l[d]=c+i*(h-c):l[d]=h}r.push(l)}else r=t;else r=this.toD||[];this.elem.attr("d",r,void 0,!0)},s.prototype.update=function(){var t=this.elem,e=this.prop,i=this.now,r=this.options.step;this[e+"Setter"]?this[e+"Setter"]():t.attr?t.element&&t.attr(e,i,null,!0):t.style[e]=i+this.unit,r&&r.call(t,i,this)},s.prototype.run=function(t,e,i){var r=this,o=r.options,a=function(t){return!a.stopped&&r.step(t)},l=n.requestAnimationFrame||function(t){setTimeout(t,13)},d=function(){for(var t=0;t<s.timers.length;t++)s.timers[t]()||s.timers.splice(t--,1);s.timers.length&&l(d)};t!==e||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=t,this.end=e,this.unit=i,this.now=this.start,this.pos=0,a.elem=this.elem,a.prop=this.prop,a()&&1===s.timers.push(a)&&l(d)):(delete o.curAnim[this.prop],o.complete&&0===Object.keys(o.curAnim).length&&o.complete.call(this.elem))},s.prototype.step=function(t){var e=+new Date,i=this.options,r=this.elem,n=i.complete,o=i.duration,s=i.curAnim;if(r.attr&&!r.element)t=!1;else if(t||e>=o+this.startTime){this.now=this.end,this.pos=1,this.update();var l=s[this.prop]=!0;a(s,function(t){!0!==t&&(l=!1)}),l&&n&&n.call(r),t=!1}else this.pos=i.easing((e-this.startTime)/o),this.now=this.start+(this.end-this.start)*this.pos,this.update(),t=!0;return t},s.prototype.initPath=function(t,e,i){function r(t,e){for(;t.length<u;){var i=t[0],r=e[u-t.length];r&&"M"===i[0]&&(t[0]="C"===r[0]?["C",i[1],i[2],i[1],i[2],i[1],i[2]]:["L",i[1],i[2]]),t.unshift(i),l&&(i=t.pop(),t.push(t[t.length-1],i))}}function n(t,e){for(;t.length<u;)if("C"===(e=t[Math.floor(t.length/d)-1].slice())[0]&&(e[1]=e[5],e[2]=e[6]),l){var i=t[Math.floor(t.length/d)].slice();t.splice(t.length/2,0,e,i)}else t.push(e)}var a=t.startX,s=t.endX;i=i.slice();var l=t.isArea,d=l?2:1;if(!(e=e&&e.slice()))return[i,i];if(a&&s&&s.length){for(t=0;t<a.length;t++)if(a[t]===s[0]){var c=t;break}else if(a[0]===s[s.length-a.length+t]){c=t;var h=!0;break}else if(a[a.length-1]===s[s.length-a.length+t]){c=a.length-t;break}void 0===c&&(e=[])}if(e.length&&o(c)){var u=i.length+c*d;h?(r(e,i),n(i,e)):(r(i,e),n(e,i))}return[e,i]},s.prototype.fillSetter=function(){s.prototype.strokeSetter.apply(this,arguments)},s.prototype.strokeSetter=function(){this.elem.attr(this.prop,r(this.start).tweenTo(r(this.end),this.pos),null,!0)},s.timers=[],s}),e(i,"Core/Animation/AnimationUtilities.js",[i["Core/Animation/Fx.js"],i["Core/Utilities.js"]],function(t,e){function i(t){return l(t)?d({duration:500,defer:0},t):{duration:500*!!t,defer:0}}function r(e,i){for(var r=t.timers.length;r--;)t.timers[r].elem!==e||i&&i!==t.timers[r].prop||(t.timers[r].stopped=!0)}var n=e.defined,o=e.getStyle,a=e.isArray,s=e.isNumber,l=e.isObject,d=e.merge,c=e.objectEach,h=e.pick;return{animate:function(e,i,n){var h,u,p,m="";if(!l(n)){var f=arguments;n={duration:f[2],easing:f[3],complete:f[4]}}s(n.duration)||(n.duration=400),n.easing="function"==typeof n.easing?n.easing:Math[n.easing]||Math.easeInOutSine,n.curAnim=d(i),c(i,function(s,l){r(e,l),p=new t(e,n,l),u=void 0,"d"===l&&a(i.d)?(p.paths=p.initPath(e,e.pathArray,i.d),p.toD=i.d,h=0,u=1):e.attr?h=e.attr(l):(h=parseFloat(o(e,l))||0,"opacity"!==l&&(m="px")),u||(u=s),"string"==typeof u&&u.match("px")&&(u=u.replace(/px/g,"")),p.run(h,u,m)})},animObject:i,getDeferredAnimation:function(t,e,r){var o=i(e),a=0,s=0;return(r?[r]:t.series).forEach(function(t){t=i(t.options.animation),a=e&&n(e.defer)?o.defer:Math.max(a,t.duration+t.defer),s=Math.min(o.duration,t.duration)}),t.renderer.forExport&&(a=0),{defer:Math.max(0,a-s),duration:Math.min(a,s)}},setAnimation:function(t,e){e.renderer.globalAnimation=h(t,e.options.chart.animation,!0)},stop:r}}),e(i,"Core/Renderer/HTML/AST.js",[i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,e){var i=t.SVG_NS,r=e.attr,n=e.createElement,o=e.discardElement,a=e.error,s=e.isString,l=e.objectEach,d=e.splat;try{var c=!!(new DOMParser).parseFromString("","text/html")}catch(t){c=!1}function h(t){this.nodes="string"==typeof t?this.parseMarkup(t):t}return h.filterUserAttributes=function(t){return l(t,function(e,i){var r=!0;-1===h.allowedAttributes.indexOf(i)&&(r=!1),-1!==["background","dynsrc","href","lowsrc","src"].indexOf(i)&&(r=s(e)&&h.allowedReferences.some(function(t){return 0===e.indexOf(t)})),r||(a("Highcharts warning: Invalid attribute '"+i+"' in config"),delete t[i])}),t},h.setElementHTML=function(t,e){t.innerHTML="",e&&new h(e).addToDOM(t)},h.prototype.addToDOM=function(e){return function e(n,o){var s;return d(n).forEach(function(n){var d=n.tagName,c=n.textContent?t.doc.createTextNode(n.textContent):void 0;if(d)if("#text"===d)var u=c;else if(-1!==h.allowedTags.indexOf(d)){d=t.doc.createElementNS("svg"===d?i:o.namespaceURI||i,d);var p=n.attributes||{};l(n,function(t,e){"tagName"!==e&&"attributes"!==e&&"children"!==e&&"textContent"!==e&&(p[e]=t)}),r(d,h.filterUserAttributes(p)),c&&d.appendChild(c),e(n.children||[],d),u=d}else a("Highcharts warning: Invalid tagName '"+d+"' in config");u&&o.appendChild(u),s=u}),s}(this.nodes,e)},h.prototype.parseMarkup=function(t){var e=[];if(t=t.trim(),c)t=(new DOMParser).parseFromString(t,"text/html");else{var i=n("div");i.innerHTML=t,t={body:i}}var r=function(t,e){var i=t.nodeName.toLowerCase(),n={tagName:i};if("#text"===i&&(n.textContent=t.textContent||""),i=t.attributes){var o={};[].forEach.call(i,function(t){o[t.name]=t.value}),n.attributes=o}if(t.childNodes.length){var a=[];[].forEach.call(t.childNodes,function(t){r(t,a)}),a.length&&(n.children=a)}e.push(n)};return[].forEach.call(t.body.childNodes,function(t){return r(t,e)}),i&&o(i),e},h.allowedAttributes="aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(" "),h.allowedReferences="https:// http:// mailto: / ../ ./ #".split(" "),h.allowedTags="a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" "),h}),e(i,"Core/FormatUtilities.js",[i["Core/DefaultOptions.js"],i["Core/Utilities.js"]],function(t,e){function i(t,e,i,n){t=+t||0,e*=1;var o=r.lang,d=(t.toString().split(".")[1]||"").split("e")[0].length,c=t.toString().split("e"),h=e;if(-1===e)e=Math.min(d,20);else if(a(e)){if(e&&c[1]&&0>c[1]){var u=e+ +c[1];0<=u?(c[0]=(+c[0]).toExponential(u).split("e")[0],e=u):(c[0]=c[0].split(".")[0]||0,t=20>e?(c[0]*Math.pow(10,c[1])).toFixed(e):0,c[1]=0)}}else e=2;var p=3<(d=String(l(u=(Math.abs(c[1]?c[0]:t)+Math.pow(10,-Math.max(e,d)-1)).toFixed(e)))).length?d.length%3:0;return i=s(i,o.decimalPoint),n=s(n,o.thousandsSep),t=(0>t?"-":"")+(p?d.substr(0,p)+n:""),t=0>+c[1]&&!h?"0":t+d.substr(p).replace(/(\d{3})(?=\d)/g,"$1"+n),e&&(t+=i+u.slice(-e)),c[1]&&0!=+t&&(t+="e"+c[1]),t}var r=t.defaultOptions,n=t.defaultTime,o=e.getNestedProperty,a=e.isNumber,s=e.pick,l=e.pInt;return{dateFormat:function(t,e,i){return n.dateFormat(t,e,i)},format:function(t,e,a){var s="{",l=!1,d=/f$/,c=/\.([0-9])/,h=r.lang,u=a&&a.time||n;a=a&&a.numberFormatter||i;for(var p=[];t;){var m=t.indexOf(s);if(-1===m)break;var f=t.slice(0,m);if(l){if(s=o((f=f.split(":")).shift()||"",e),f.length&&"number"==typeof s)if(f=f.join(":"),d.test(f)){var g=parseInt((f.match(c)||["","-1"])[1],10);null!==s&&(s=a(s,g,h.decimalPoint,-1<f.indexOf(",")?h.thousandsSep:""))}else s=u.dateFormat(f,s);p.push(s)}else p.push(f);t=t.slice(m+1),s=(l=!l)?"}":"{"}return p.push(t),p.join("")},numberFormat:i}}),e(i,"Core/Renderer/RendererUtilities.js",[i["Core/Utilities.js"]],function(t){var e,i=t.clamp,r=t.pick,n=t.stableSort;return(e||(e={})).distribute=function t(e,o,a){var s,l=e,d=l.reducedLen||o,c=function(t,e){return(e.rank||0)-(t.rank||0)},h=function(t,e){return t.target-e.target},u=!0,p=[],m=0;for(s=e.length;s--;)m+=e[s].size;if(m>d){for(n(e,c),m=s=0;m<=d;)m+=e[s].size,s++;p=e.splice(s-1,e.length)}for(n(e,h),e=e.map(function(t){return{size:t.size,targets:[t.target],align:r(t.align,.5)}});u;){for(s=e.length;s--;)d=e[s],c=(Math.min.apply(0,d.targets)+Math.max.apply(0,d.targets))/2,d.pos=i(c-d.size*d.align,0,o-d.size);for(s=e.length,u=!1;s--;)0<s&&e[s-1].pos+e[s-1].size>e[s].pos&&(e[s-1].size+=e[s].size,e[s-1].targets=e[s-1].targets.concat(e[s].targets),e[s-1].align=.5,e[s-1].pos+e[s-1].size>o&&(e[s-1].pos=o-e[s-1].size),e.splice(s,1),u=!0)}return l.push.apply(l,p),s=0,e.some(function(e){var i=0;return(e.targets||[]).some(function(){return(l[s].pos=e.pos+i,void 0!==a&&Math.abs(l[s].pos-l[s].target)>a)?(l.slice(0,s+1).forEach(function(t){return delete t.pos}),l.reducedLen=(l.reducedLen||o)-.1*o,l.reducedLen>.1*o&&t(l,o,a),!0):(i+=l[s].size,s++,!1)})}),n(l,h),l},e}),e(i,"Core/Renderer/SVG/SVGElement.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Renderer/HTML/AST.js"],i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Color/Palette.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o){var a=t.animate,s=t.animObject,l=t.stop,d=r.deg2rad,c=r.doc,h=r.noop,u=r.svg,p=r.SVG_NS,m=r.win,f=o.addEvent,g=o.attr,y=o.createElement,v=o.css,I=o.defined,x=o.erase,b=o.extend,C=o.fireEvent,T=o.isArray,$=o.isFunction,w=o.isNumber,S=o.isString,A=o.merge,_=o.objectEach,P=o.pick,j=o.pInt,k=o.syncTimeout,O=o.uniqueKey;return(t=function(){function t(){this.element=void 0,this.onEvents={},this.opacity=1,this.renderer=void 0,this.SVG_NS=p,this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ")}return t.prototype._defaultGetter=function(t){return t=P(this[t+"Value"],this[t],this.element?this.element.getAttribute(t):null,0),/^[\-0-9\.]+$/.test(t)&&(t=parseFloat(t)),t},t.prototype._defaultSetter=function(t,e,i){i.setAttribute(e,t)},t.prototype.add=function(t){var e=this.renderer,i=this.element;if(t&&(this.parentGroup=t),this.parentInverted=t&&t.inverted,void 0!==this.textStr&&"text"===this.element.nodeName&&e.buildText(this),this.added=!0,!t||t.handleZ||this.zIndex)var r=this.zIndexSetter();return r||(t?t.element:e.box).appendChild(i),this.onAdd&&this.onAdd(),this},t.prototype.addClass=function(t,e){var i=e?"":this.attr("class")||"";return(t=(t||"").split(/ /g).reduce(function(t,e){return -1===i.indexOf(e)&&t.push(e),t},i?[i]:[]).join(" "))!==i&&this.attr("class",t),this},t.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)},t.prototype.align=function(t,e,i){var r,n,o,a={},s=this.renderer,l=s.alignedObjects;t?(this.alignOptions=t,this.alignByTranslate=e,(!i||S(i))&&(this.alignTo=r=i||"renderer",x(l,this),l.push(this),i=void 0)):(t=this.alignOptions,e=this.alignByTranslate,r=this.alignTo),i=P(i,s[r],"scrollablePlotBox"===r?s.plotBox:void 0,s),r=t.align;var d=t.verticalAlign;return s=(i.x||0)+(t.x||0),l=(i.y||0)+(t.y||0),"right"===r?n=1:"center"===r&&(n=2),n&&(s+=(i.width-(t.width||0))/n),a[e?"translateX":"x"]=Math.round(s),"bottom"===d?o=1:"middle"===d&&(o=2),o&&(l+=(i.height-(t.height||0))/o),a[e?"translateY":"y"]=Math.round(l),this[this.placed?"animate":"attr"](a),this.placed=!0,this.alignAttr=a,this},t.prototype.alignSetter=function(t){var e={left:"start",center:"middle",right:"end"};e[t]&&(this.alignValue=t,this.element.setAttribute("text-anchor",e[t]))},t.prototype.animate=function(t,e,i){var r=this,n=s(P(e,this.renderer.globalAnimation,!0));return e=n.defer,P(c.hidden,c.msHidden,c.webkitHidden,!1)&&(n.duration=0),0!==n.duration?(i&&(n.complete=i),k(function(){r.element&&a(r,t,n)},e)):(this.attr(t,void 0,i),_(t,function(t,e){n.step&&n.step.call(this,t,{prop:e,pos:1,elem:this})},this)),this},t.prototype.applyTextOutline=function(t){var e=this.element;-1!==t.indexOf("contrast")&&(t=t.replace(/contrast/g,this.renderer.getContrast(e.style.fill)));var i=t.split(" ");if(t=i[i.length-1],(i=i[0])&&"none"!==i&&r.svg){this.fakeTS=!0,this.ySetter=this.xSetter,i=i.replace(/(^[\d\.]+)(.*?)$/g,function(t,e,i){return 2*Number(e)+i}),this.removeTextOutline();var n=c.createElementNS(p,"tspan");g(n,{class:"highcharts-text-outline",fill:t,stroke:t,"stroke-width":i,"stroke-linejoin":"round"}),[].forEach.call(e.childNodes,function(t){var e=t.cloneNode(!0);e.removeAttribute&&["fill","stroke","stroke-width","stroke"].forEach(function(t){return e.removeAttribute(t)}),n.appendChild(e)});var o=c.createElementNS(p,"tspan");o.textContent="​",["x","y"].forEach(function(t){var i=e.getAttribute(t);i&&o.setAttribute(t,i)}),n.appendChild(o),e.insertBefore(n,e.firstChild)}},t.prototype.attr=function(t,e,i,r){var n,o,a,s=this.element,d=this.symbolCustomAttribs,c=this;if("string"==typeof t&&void 0!==e){var h=t;(t={})[h]=e}return"string"==typeof t?c=(this[t+"Getter"]||this._defaultGetter).call(this,t,s):(_(t,function(e,i){o=!1,r||l(this,i),this.symbolName&&-1!==d.indexOf(i)&&(n||(this.symbolAttr(t),n=!0),o=!0),this.rotation&&("x"===i||"y"===i)&&(this.doTransform=!0),o||((a=this[i+"Setter"]||this._defaultSetter).call(this,e,i,s),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(i)&&this.updateShadows(i,e,a))},this),this.afterSetters()),i&&i.call(this),c},t.prototype.clip=function(t){return this.attr("clip-path",t?"url("+this.renderer.url+"#"+t.id+")":"none")},t.prototype.crisp=function(t,e){var i=Math.round(e=e||t.strokeWidth||0)%2/2;return t.x=Math.floor(t.x||this.x||0)+i,t.y=Math.floor(t.y||this.y||0)+i,t.width=Math.floor((t.width||this.width||0)-2*i),t.height=Math.floor((t.height||this.height||0)-2*i),I(t.strokeWidth)&&(t.strokeWidth=e),t},t.prototype.complexColor=function(t,e,r){var n,o,a,s,l,d,c,h,u,p,m,f=this.renderer,g=[];C(this.renderer,"complexColor",{args:arguments},function(){if(t.radialGradient?o="radialGradient":t.linearGradient&&(o="linearGradient"),o){if(a=t[o],l=f.gradients,d=t.stops,u=r.radialReference,T(a)&&(t[o]=a={x1:a[0],y1:a[1],x2:a[2],y2:a[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===o&&u&&!I(a.gradientUnits)&&(s=a,a=A(a,f.getRadialAttr(u,s),{gradientUnits:"userSpaceOnUse"})),_(a,function(t,e){"id"!==e&&g.push(e,t)}),_(d,function(t){g.push(t)}),l[g=g.join(",")])p=l[g].attr("id");else{a.id=p=O();var y=l[g]=f.createElement(o).attr(a).add(f.defs);y.radAttr=s,y.stops=[],d.forEach(function(t){0===t[1].indexOf("rgba")?(c=(n=i.parse(t[1])).get("rgb"),h=n.get("a")):(c=t[1],h=1),t=f.createElement("stop").attr({offset:t[0],"stop-color":c,"stop-opacity":h}).add(y),y.stops.push(t)})}m="url("+f.url+"#"+p+")",r.setAttribute(e,m),r.gradient=g,t.toString=function(){return m}}})},t.prototype.css=function(t){var e=this.styles,i={},r=this.element,n=["textOutline","textOverflow","width"],o="",a=!e;if(t&&t.color&&(t.fill=t.color),e&&_(t,function(t,r){e&&e[r]!==t&&(i[r]=t,a=!0)}),a){if(e&&(t=b(e,i)),t){if(null===t.width||"auto"===t.width)delete this.textWidth;else if("text"===r.nodeName.toLowerCase()&&t.width)var s=this.textWidth=j(t.width)}if(this.styles=t,s&&!u&&this.renderer.forExport&&delete t.width,r.namespaceURI===this.SVG_NS){var l=function(t,e){return"-"+e.toLowerCase()};_(t,function(t,e){-1===n.indexOf(e)&&(o+=e.replace(/([A-Z])/g,l)+":"+t+";")}),o&&g(r,"style",o)}else v(r,t);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),t&&t.textOutline&&this.applyTextOutline(t.textOutline))}return this},t.prototype.dashstyleSetter=function(t){var e=this["stroke-width"];if("inherit"===e&&(e=1),t=t&&t.toLowerCase()){var i=t.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(t=i.length;t--;)i[t]=""+j(i[t])*P(e,0/0);t=i.join(",").replace(/NaN/g,"none"),this.element.setAttribute("stroke-dasharray",t)}},t.prototype.destroy=function(){var t=this,e=t.element||{},i=t.renderer,r=e.ownerSVGElement,n=i.isSVG&&"SPAN"===e.nodeName&&t.parentGroup||void 0;if(e.onclick=e.onmouseout=e.onmouseover=e.onmousemove=e.point=null,l(t),t.clipPath&&r){var o=t.clipPath;[].forEach.call(r.querySelectorAll("[clip-path],[CLIP-PATH]"),function(t){-1<t.getAttribute("clip-path").indexOf(o.element.id)&&t.removeAttribute("clip-path")}),t.clipPath=o.destroy()}if(t.stops){for(r=0;r<t.stops.length;r++)t.stops[r].destroy();t.stops.length=0,t.stops=void 0}for(t.safeRemoveChild(e),i.styledMode||t.destroyShadows();n&&n.div&&0===n.div.childNodes.length;)e=n.parentGroup,t.safeRemoveChild(n.div),delete n.div,n=e;t.alignTo&&x(i.alignedObjects,t),_(t,function(e,i){t[i]&&t[i].parentGroup===t&&t[i].destroy&&t[i].destroy(),delete t[i]})},t.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(t){this.safeRemoveChild(t)},this),this.shadows=void 0},t.prototype.destroyTextPath=function(t,e){var i=t.getElementsByTagName("text")[0];if(i){if(i.removeAttribute("dx"),i.removeAttribute("dy"),e.element.setAttribute("id",""),this.textPathWrapper&&i.getElementsByTagName("textPath").length){for(t=this.textPathWrapper.element.childNodes;t.length;)i.appendChild(t[0]);i.removeChild(this.textPathWrapper.element)}}else(t.getAttribute("dx")||t.getAttribute("dy"))&&(t.removeAttribute("dx"),t.removeAttribute("dy"));this.textPathWrapper&&(this.textPathWrapper=this.textPathWrapper.destroy())},t.prototype.dSetter=function(t,e,i){T(t)&&("string"==typeof t[0]&&(t=this.renderer.pathToSegments(t)),this.pathArray=t,t=t.reduce(function(t,e,i){return e&&e.join?(i?t+" ":"")+e.join(" "):(e||"").toString()},"")),/(NaN| {2}|^$)/.test(t)&&(t="M 0 0"),this[e]!==t&&(i.setAttribute(e,t),this[e]=t)},t.prototype.fadeOut=function(t){var e=this;e.animate({opacity:0},{duration:P(t,150),complete:function(){e.attr({y:-9999}).hide()}})},t.prototype.fillSetter=function(t,e,i){"string"==typeof t?i.setAttribute(e,t):t&&this.complexColor(t,e,i)},t.prototype.getBBox=function(e,i){var r=this.renderer,n=this.element,o=this.styles,a=this.textStr,s=r.cache,l=r.cacheKeys,c=n.namespaceURI===this.SVG_NS;i=P(i,this.rotation,0);var h,u=r.styledMode?n&&t.prototype.getStyle.call(n,"font-size"):o&&o.fontSize;if(I(a)){var p=a.toString();-1===p.indexOf("<")&&(p=p.replace(/[0-9]/g,"0")),p+=["",i,u,this.textWidth,o&&o.textOverflow,o&&o.fontWeight].join()}if(p&&!e&&(h=s[p]),!h){if(c||r.forExport){try{var m=this.fakeTS&&function(t){var e=n.querySelector(".highcharts-text-outline");e&&v(e,{display:t})};$(m)&&m("none"),h=n.getBBox?b({},n.getBBox()):{width:n.offsetWidth,height:n.offsetHeight},$(m)&&m("")}catch(t){}(!h||0>h.width)&&(h={width:0,height:0})}else h=this.htmlGetBBox();if(r.isSVG&&(e=h.width,r=h.height,c&&(h.height=r=({"11px,17":14,"13px,20":16})[o&&o.fontSize+","+Math.round(r)]||r),i&&(o=i*d,h.width=Math.abs(r*Math.sin(o))+Math.abs(e*Math.cos(o)),h.height=Math.abs(r*Math.cos(o))+Math.abs(e*Math.sin(o)))),p&&(""===a||0<h.height)){for(;250<l.length;)delete s[l.shift()];s[p]||l.push(p),s[p]=h}}return h},t.prototype.getStyle=function(t){return m.getComputedStyle(this.element||this,"").getPropertyValue(t)},t.prototype.hasClass=function(t){return -1!==(""+this.attr("class")).split(" ").indexOf(t)},t.prototype.hide=function(t){return t?this.attr({y:-9999}):this.attr({visibility:"hidden"}),this},t.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}},t.prototype.init=function(t,e){this.element="span"===e?y(e):c.createElementNS(this.SVG_NS,e),this.renderer=t,C(this,"afterInit")},t.prototype.invert=function(t){return this.inverted=t,this.updateTransform(),this},t.prototype.on=function(t,e){var i=this.onEvents;return i[t]&&i[t](),i[t]=f(this.element,t,e),this},t.prototype.opacitySetter=function(t,e,i){this.opacity=t=Number(Number(t).toFixed(3)),i.setAttribute(e,t)},t.prototype.removeClass=function(t){return this.attr("class",(""+this.attr("class")).replace(S(t)?RegExp("(^| )"+t+"( |$)"):t," ").replace(/ +/g," ").trim())},t.prototype.removeTextOutline=function(){var t=this.element.querySelector("tspan.highcharts-text-outline");t&&this.safeRemoveChild(t)},t.prototype.safeRemoveChild=function(t){var e=t.parentNode;e&&e.removeChild(t)},t.prototype.setRadialReference=function(t){var e=this.element.gradient&&this.renderer.gradients[this.element.gradient];return this.element.radialReference=t,e&&e.radAttr&&e.animate(this.renderer.getRadialAttr(t,e.radAttr)),this},t.prototype.setTextPath=function(t,i){var r=this.element,n=this.text?this.text.element:r,o={textAnchor:"text-anchor"},a=!1,s=this.textPathWrapper,l=!s;i=A(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},i);var d=e.filterUserAttributes(i.attributes);if(t&&i&&i.enabled){s&&null===s.element.parentNode?(l=!0,s=s.destroy()):s&&this.removeTextOutline.call(s.parentGroup),this.options&&this.options.padding&&(d.dx=-this.options.padding),s||(this.textPathWrapper=s=this.renderer.createElement("textPath"),a=!0);var c=s.element;if((i=t.element.getAttribute("id"))||t.element.setAttribute("id",i=O()),l)for(n.setAttribute("y",0),w(d.dx)&&n.setAttribute("x",-d.dx),t=[].slice.call(n.childNodes),l=0;l<t.length;l++){var u=t[l];u.nodeType!==Node.TEXT_NODE&&"tspan"!==u.nodeName||c.appendChild(u)}a&&s&&s.add({element:n}),c.setAttributeNS("http://www.w3.org/1999/xlink","href",this.renderer.url+"#"+i),I(d.dy)&&(c.parentNode.setAttribute("dy",d.dy),delete d.dy),I(d.dx)&&(c.parentNode.setAttribute("dx",d.dx),delete d.dx),_(d,function(t,e){c.setAttribute(o[e]||e,t)}),r.removeAttribute("transform"),this.removeTextOutline.call(s),this.text&&!this.renderer.styledMode&&this.attr({fill:"none","stroke-width":0}),this.applyTextOutline=this.updateTransform=h}else s&&(delete this.updateTransform,delete this.applyTextOutline,this.destroyTextPath(r,t),this.updateTransform(),this.options&&this.options.rotation&&this.applyTextOutline(this.options.style.textOutline));return this},t.prototype.shadow=function(t,e,i){var r,o=[],a=this.element,s=this.oldShadowOptions,l={color:n.neutralColor100,offsetX:this.parentInverted?-1:1,offsetY:this.parentInverted?-1:1,opacity:.15,width:3},d=!1;if(!0===t?r=l:"object"==typeof t&&(r=b(l,t)),r&&(r&&s&&_(r,function(t,e){t!==s[e]&&(d=!0)}),d&&this.destroyShadows(),this.oldShadowOptions=r),r){if(!this.shadows){var c=r.opacity/r.width,h=this.parentInverted?"translate("+r.offsetY+", "+r.offsetX+")":"translate("+r.offsetX+", "+r.offsetY+")";for(l=1;l<=r.width;l++){var u=a.cloneNode(!1),p=2*r.width+1-2*l;g(u,{stroke:t.color||n.neutralColor100,"stroke-opacity":c*l,"stroke-width":p,transform:h,fill:"none"}),u.setAttribute("class",(u.getAttribute("class")||"")+" highcharts-shadow"),i&&(g(u,"height",Math.max(g(u,"height")-p,0)),u.cutHeight=p),e?e.element.appendChild(u):a.parentNode&&a.parentNode.insertBefore(u,a),o.push(u)}this.shadows=o}}else this.destroyShadows();return this},t.prototype.show=function(t){return this.attr({visibility:t?"inherit":"visible"})},t.prototype.strokeSetter=function(e,i,r){this[i]=e,this.stroke&&this["stroke-width"]?(t.prototype.fillSetter.call(this,this.stroke,"stroke",r),r.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===i&&0===e&&this.hasStroke?(r.removeAttribute("stroke"),this.hasStroke=!1):this.renderer.styledMode&&this["stroke-width"]&&(r.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0)},t.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var t=this.getStyle("stroke-width"),e=0;if(t.indexOf("px")===t.length-2)e=j(t);else if(""!==t){var i=c.createElementNS(p,"rect");g(i,{width:t,"stroke-width":0}),this.element.parentNode.appendChild(i),e=i.getBBox().width,i.parentNode.removeChild(i)}return e},t.prototype.symbolAttr=function(t){var e=this;"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(i){e[i]=P(t[i],e[i])}),e.attr({d:e.renderer.symbols[e.symbolName](e.x,e.y,e.width,e.height,e)})},t.prototype.textSetter=function(t){t!==this.textStr&&(delete this.textPxLength,this.textStr=t,this.added&&this.renderer.buildText(this))},t.prototype.titleSetter=function(t){var e=this.element,i=e.getElementsByTagName("title")[0]||c.createElementNS(this.SVG_NS,"title");e.insertBefore?e.insertBefore(i,e.firstChild):e.appendChild(i),i.textContent=String(P(t,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")},t.prototype.toFront=function(){var t=this.element;return t.parentNode.appendChild(t),this},t.prototype.translate=function(t,e){return this.attr({translateX:t,translateY:e})},t.prototype.updateShadows=function(t,e,i){var r=this.shadows;if(r)for(var n=r.length;n--;)i.call(r[n],"height"===t?Math.max(e-(r[n].cutHeight||0),0):"d"===t?this.d:e,t,r[n])},t.prototype.updateTransform=function(){var t=this.scaleX,e=this.scaleY,i=this.inverted,r=this.rotation,n=this.matrix,o=this.element,a=this.translateX||0,s=this.translateY||0;i&&(a+=this.width,s+=this.height),a=["translate("+a+","+s+")"],I(n)&&a.push("matrix("+n.join(",")+")"),i?a.push("rotate(90) scale(-1,1)"):r&&a.push("rotate("+r+" "+P(this.rotationOriginX,o.getAttribute("x"),0)+" "+P(this.rotationOriginY,o.getAttribute("y")||0)+")"),(I(t)||I(e))&&a.push("scale("+P(t,1)+" "+P(e,1)+")"),a.length&&o.setAttribute("transform",a.join(" "))},t.prototype.visibilitySetter=function(t,e,i){"inherit"===t?i.removeAttribute(e):this[e]!==t&&i.setAttribute(e,t),this[e]=t},t.prototype.xGetter=function(t){return"circle"===this.element.nodeName&&("x"===t?t="cx":"y"===t&&(t="cy")),this._defaultGetter(t)},t.prototype.zIndexSetter=function(t,e){var i,r=this.renderer,n=this.parentGroup,o=(n||r).element||r.box,a=this.element;r=o===r.box;var s=!1,l=this.added;if(I(t)?(a.setAttribute("data-z-index",t),t*=1,this[e]===t&&(l=!1)):I(this[e])&&a.removeAttribute("data-z-index"),this[e]=t,l){for((t=this.zIndex)&&n&&(n.handleZ=!0),i=(e=o.childNodes).length-1;0<=i&&!s;i--){var d=!I(l=(n=e[i]).getAttribute("data-z-index"));n!==a&&(0>t&&d&&!r&&!i?(o.insertBefore(a,e[i]),s=!0):(j(l)<=t||d&&(!I(t)||0<=t))&&(o.insertBefore(a,e[i+1]||null),s=!0))}s||(o.insertBefore(a,e[3*!!r]||null),s=!0)}return s},t}()).prototype["stroke-widthSetter"]=t.prototype.strokeSetter,t.prototype.yGetter=t.prototype.xGetter,t.prototype.matrixSetter=t.prototype.rotationOriginXSetter=t.prototype.rotationOriginYSetter=t.prototype.rotationSetter=t.prototype.scaleXSetter=t.prototype.scaleYSetter=t.prototype.translateXSetter=t.prototype.translateYSetter=t.prototype.verticalAlignSetter=function(t,e){this[e]=t,this.doTransform=!0},t}),e(i,"Core/Renderer/RendererRegistry.js",[i["Core/Globals.js"]],function(t){var e,i,r;return(i=e||(e={})).rendererTypes={},i.getRendererType=function(t){return void 0===t&&(t=r),i.rendererTypes[t]||i.rendererTypes[r]},i.registerRendererType=function(e,n,o){i.rendererTypes[e]=n,(!r||o)&&(r=e,t.Renderer=n)},e}),e(i,"Core/Renderer/SVG/SVGLabel.js",[i["Core/Renderer/SVG/SVGElement.js"],i["Core/Utilities.js"]],function(t,e){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),n=e.defined,o=e.extend,a=e.isNumber,s=e.merge,l=e.pick,d=e.removeEvent;function c(e,i,r,n,o,a,s,l,d,h){var u,p=t.call(this)||this;return p.paddingLeftSetter=p.paddingSetter,p.paddingRightSetter=p.paddingSetter,p.init(e,"g"),p.textStr=i,p.x=r,p.y=n,p.anchorX=a,p.anchorY=s,p.baseline=d,p.className=h,p.addClass("button"===h?"highcharts-no-tooltip":"highcharts-label"),h&&p.addClass("highcharts-"+h),p.text=e.text(void 0,0,0,l).attr({zIndex:1}),"string"==typeof o&&((u=/^url\((.*?)\)$/.test(o))||p.renderer.symbols[o])&&(p.symbolKey=o),p.bBox=c.emptyBBox,p.padding=3,p.baselineOffset=0,p.needsBox=e.styledMode||u,p.deferredAttr={},p.alignFactor=0,p}return r(c,t),c.prototype.alignSetter=function(t){(t=({left:0,center:.5,right:1})[t])!==this.alignFactor&&(this.alignFactor=t,this.bBox&&a(this.xSetting)&&this.attr({x:this.xSetting}))},c.prototype.anchorXSetter=function(t,e){this.anchorX=t,this.boxAttr(e,Math.round(t)-this.getCrispAdjust()-this.xSetting)},c.prototype.anchorYSetter=function(t,e){this.anchorY=t,this.boxAttr(e,t-this.ySetting)},c.prototype.boxAttr=function(t,e){this.box?this.box.attr(t,e):this.deferredAttr[t]=e},c.prototype.css=function(e){if(e){var i={};e=s(e),c.textProps.forEach(function(t){void 0!==e[t]&&(i[t]=e[t],delete e[t])}),this.text.css(i);var r="width"in i;"fontSize"in i||"fontWeight"in i?this.updateTextPadding():r&&this.updateBoxSize()}return t.prototype.css.call(this,e)},c.prototype.destroy=function(){d(this.element,"mouseenter"),d(this.element,"mouseleave"),this.text&&this.text.destroy(),this.box&&(this.box=this.box.destroy()),t.prototype.destroy.call(this)},c.prototype.fillSetter=function(t,e){t&&(this.needsBox=!0),this.fill=t,this.boxAttr(e,t)},c.prototype.getBBox=function(){this.textStr&&0===this.bBox.width&&0===this.bBox.height&&this.updateBoxSize();var t=this.padding,e=l(this.paddingLeft,t);return{width:this.width,height:this.height,x:this.bBox.x-e,y:this.bBox.y-t}},c.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2},c.prototype.heightSetter=function(t){this.heightSetting=t},c.prototype.onAdd=function(){var t=this.textStr;this.text.add(this),this.attr({text:n(t)?t:"",x:this.x,y:this.y}),this.box&&n(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})},c.prototype.paddingSetter=function(t,e){a(t)?t!==this[e]&&(this[e]=t,this.updateTextPadding()):this[e]=void 0},c.prototype.rSetter=function(t,e){this.boxAttr(e,t)},c.prototype.shadow=function(t){return t&&!this.renderer.styledMode&&(this.updateBoxSize(),this.box&&this.box.shadow(t)),this},c.prototype.strokeSetter=function(t,e){this.stroke=t,this.boxAttr(e,t)},c.prototype["stroke-widthSetter"]=function(t,e){t&&(this.needsBox=!0),this["stroke-width"]=t,this.boxAttr(e,t)},c.prototype["text-alignSetter"]=function(t){this.textAlign=t},c.prototype.textSetter=function(t){void 0!==t&&this.text.attr({text:t}),this.updateTextPadding()},c.prototype.updateBoxSize=function(){var t=this.text.element.style,e={},i=this.padding,r=this.bBox=a(this.widthSetting)&&a(this.heightSetting)&&!this.textAlign||!n(this.text.textStr)?c.emptyBBox:this.text.getBBox();this.width=this.getPaddedWidth(),this.height=(this.heightSetting||r.height||0)+2*i,t=this.renderer.fontMetrics(t&&t.fontSize,this.text),this.baselineOffset=i+Math.min((this.text.firstLineMetrics||t).b,r.height||1/0),this.heightSetting&&(this.baselineOffset+=(this.heightSetting-t.h)/2),this.needsBox&&(this.box||((i=this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect()).addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),i.add(this)),e.x=i=this.getCrispAdjust(),e.y=(this.baseline?-this.baselineOffset:0)+i,e.width=Math.round(this.width),e.height=Math.round(this.height),this.box.attr(o(e,this.deferredAttr)),this.deferredAttr={})},c.prototype.updateTextPadding=function(){var t=this.text;this.updateBoxSize();var e=this.baseline?0:this.baselineOffset,i=l(this.paddingLeft,this.padding);n(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(i+=({center:.5,right:1})[this.textAlign]*(this.widthSetting-this.bBox.width)),(i!==t.x||e!==t.y)&&(t.attr("x",i),t.hasBoxWidthChanged&&(this.bBox=t.getBBox(!0)),void 0!==e&&t.attr("y",e)),t.x=i,t.y=e},c.prototype.widthSetter=function(t){this.widthSetting=a(t)?t:void 0},c.prototype.getPaddedWidth=function(){var t=this.padding,e=l(this.paddingLeft,t);return t=l(this.paddingRight,t),(this.widthSetting||this.bBox.width||0)+e+t},c.prototype.xSetter=function(t){this.x=t,this.alignFactor&&(t-=this.alignFactor*this.getPaddedWidth(),this["forceAnimate:x"]=!0),this.xSetting=Math.round(t),this.attr("translateX",this.xSetting)},c.prototype.ySetter=function(t){this.ySetting=this.y=Math.round(t),this.attr("translateY",this.ySetting)},c.emptyBBox={width:0,height:0,x:0,y:0},c.textProps="color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" "),c}),e(i,"Core/Renderer/SVG/Symbols.js",[i["Core/Utilities.js"]],function(t){function e(t,e,i,r,o){var s=[];if(o){var l=o.start||0,d=a(o.r,i);i=a(o.r,r||i);var c=(o.end||0)-.001;r=o.innerR;var h=a(o.open,.001>Math.abs((o.end||0)-l-2*Math.PI)),u=Math.cos(l),p=Math.sin(l),m=Math.cos(c),f=Math.sin(c);l=a(o.longArc,.001>c-l-Math.PI?0:1),s.push(["M",t+d*u,e+i*p],["A",d,i,0,l,a(o.clockwise,1),t+d*m,e+i*f]),n(r)&&s.push(h?["M",t+r*m,e+r*f]:["L",t+r*m,e+r*f],["A",r,r,0,l,n(o.clockwise)?1-o.clockwise:0,t+r*u,e+r*p]),h||s.push(["Z"])}return s}function i(t,e,i,n,o){return o&&o.r?r(t,e,i,n,o):[["M",t,e],["L",t+i,e],["L",t+i,e+n],["L",t,e+n],["Z"]]}function r(t,e,i,r,n){return[["M",t+(n=n&&n.r||0),e],["L",t+i-n,e],["C",t+i,e,t+i,e,t+i,e+n],["L",t+i,e+r-n],["C",t+i,e+r,t+i,e+r,t+i-n,e+r],["L",t+n,e+r],["C",t,e+r,t,e+r,t,e+r-n],["L",t,e+n],["C",t,e,t,e,t+n,e]]}var n=t.defined,o=t.isNumber,a=t.pick;return{arc:e,callout:function(t,e,i,n,a){var s=Math.min(a&&a.r||0,i,n),l=s+6,d=a&&a.anchorX;a=a&&a.anchorY||0;var c=r(t,e,i,n,{r:s});return o(d)&&(t+d>=i?a>e+l&&a<e+n-l?c.splice(3,1,["L",t+i,a-6],["L",t+i+6,a],["L",t+i,a+6],["L",t+i,e+n-s]):c.splice(3,1,["L",t+i,n/2],["L",d,a],["L",t+i,n/2],["L",t+i,e+n-s]):0>=t+d?a>e+l&&a<e+n-l?c.splice(7,1,["L",t,a+6],["L",t-6,a],["L",t,a-6],["L",t,e+s]):c.splice(7,1,["L",t,n/2],["L",d,a],["L",t,n/2],["L",t,e+s]):a&&a>n&&d>t+l&&d<t+i-l?c.splice(5,1,["L",d+6,e+n],["L",d,e+n+6],["L",d-6,e+n],["L",t+s,e+n]):a&&0>a&&d>t+l&&d<t+i-l&&c.splice(1,1,["L",d-6,e],["L",d,e-6],["L",d+6,e],["L",i-s,e])),c},circle:function(t,i,r,n){return e(t+r/2,i+n/2,r/2,n/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},diamond:function(t,e,i,r){return[["M",t+i/2,e],["L",t+i,e+r/2],["L",t+i/2,e+r],["L",t,e+r/2],["Z"]]},rect:i,roundedRect:r,square:i,triangle:function(t,e,i,r){return[["M",t+i/2,e],["L",t+i,e+r],["L",t,e+r],["Z"]]},"triangle-down":function(t,e,i,r){return[["M",t,e],["L",t+i,e],["L",t+i/2,e+r],["Z"]]}}}),e(i,"Core/Renderer/SVG/TextBuilder.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,e,i){var r=e.doc,n=e.SVG_NS,o=i.attr,a=i.isString,s=i.objectEach,l=i.pick;function d(t){var e=t.styles;this.renderer=t.renderer,this.svgElement=t,this.width=t.textWidth,this.textLineHeight=e&&e.lineHeight,this.textOutline=e&&e.textOutline,this.ellipsis=!(!e||"ellipsis"!==e.textOverflow),this.noWrap=!(!e||"nowrap"!==e.whiteSpace),this.fontSize=e&&e.fontSize}return d.prototype.buildSVG=function(){var e=this.svgElement,i=e.element,n=e.renderer,o=l(e.textStr,"").toString(),s=-1!==o.indexOf("<"),d=i.childNodes;n=this.width&&!e.added&&n.box;var c=[o,this.ellipsis,this.noWrap,this.textLineHeight,this.textOutline,this.fontSize,this.width].join();if(c!==e.textCache){for(e.textCache=c,delete e.actualWidth,c=d.length;c--;)i.removeChild(d[c]);s||this.ellipsis||this.width||-1!==o.indexOf(" ")&&(!this.noWrap||/<br.*?>/g.test(o))?""!==o&&(n&&n.appendChild(i),o=new t(o),this.modifyTree(o.nodes),o.addToDOM(e.element),this.modifyDOM(),this.ellipsis&&-1!==(i.textContent||"").indexOf("…")&&e.attr("title",this.unescapeEntities(e.textStr||"",["&lt;","&gt;"])),n&&n.removeChild(i)):i.appendChild(r.createTextNode(this.unescapeEntities(o))),a(this.textOutline)&&e.applyTextOutline&&e.applyTextOutline(this.textOutline)}},d.prototype.modifyDOM=function(){var t,e=this,i=this.svgElement,a=o(i.element,"x");for(i.firstLineMetrics=void 0;t=i.element.firstChild;)if(/^[\s\u200B]*$/.test(t.textContent||" "))i.element.removeChild(t);else break;[].forEach.call(i.element.querySelectorAll("tspan.highcharts-br"),function(t,r){t.nextSibling&&t.previousSibling&&(0===r&&1===t.previousSibling.nodeType&&(i.firstLineMetrics=i.renderer.fontMetrics(void 0,t.previousSibling)),o(t,{dy:e.getLineHeight(t.nextSibling),x:a}))});var s=this.width||0;if(s){var l=function(t,l){var d=t.textContent||"",c=d.replace(/([^\^])-/g,"$1- ").split(" "),h=!e.noWrap&&(1<c.length||1<i.element.childNodes.length),u=e.getLineHeight(l),p=0,m=i.actualWidth;if(e.ellipsis)d&&e.truncate(t,d,void 0,0,Math.max(0,s-parseInt(e.fontSize||12,10)),function(t,e){return t.substring(0,e)+"…"});else if(h){for(d=[],h=[];l.firstChild&&l.firstChild!==t;)h.push(l.firstChild),l.removeChild(l.firstChild);for(;c.length;)c.length&&!e.noWrap&&0<p&&(d.push(t.textContent||""),t.textContent=c.join(" ").replace(/- /g,"-")),e.truncate(t,void 0,c,0===p&&m||0,s,function(t,e){return c.slice(0,e).join(" ").replace(/- /g,"-")}),m=i.actualWidth,p++;h.forEach(function(e){l.insertBefore(e,t)}),d.forEach(function(e){l.insertBefore(r.createTextNode(e),t),(e=r.createElementNS(n,"tspan")).textContent="​",o(e,{dy:u,x:a}),l.insertBefore(e,t)})}},d=function(t){[].slice.call(t.childNodes).forEach(function(e){e.nodeType===Node.TEXT_NODE?l(e,t):(-1!==e.className.baseVal.indexOf("highcharts-br")&&(i.actualWidth=0),d(e))})};d(i.element)}},d.prototype.getLineHeight=function(t){var e;return t=t.nodeType===Node.TEXT_NODE?t.parentElement:t,this.renderer.styledMode||(e=t&&/(px|em)$/.test(t.style.fontSize)?t.style.fontSize:this.fontSize||this.renderer.style.fontSize||12),this.textLineHeight?parseInt(this.textLineHeight.toString(),10):this.renderer.fontMetrics(e,t||this.svgElement.element).h},d.prototype.modifyTree=function(t){var e=this,i=function(r,n){var o=r.tagName,s=e.renderer.styledMode,l=r.attributes||{};"b"===o||"strong"===o?s?l.class="highcharts-strong":l.style="font-weight:bold;"+(l.style||""):("i"===o||"em"===o)&&(s?l.class="highcharts-emphasized":l.style="font-style:italic;"+(l.style||"")),a(l.style)&&(l.style=l.style.replace(/(;| |^)color([ :])/,"$1fill$2")),"br"===o&&(l.class="highcharts-br",r.textContent="​",(n=t[n+1])&&n.textContent&&(n.textContent=n.textContent.replace(/^ +/gm,""))),"#text"!==o&&"a"!==o&&(r.tagName="tspan"),r.attributes=l,r.children&&r.children.filter(function(t){return"#text"!==t.tagName}).forEach(i)};t.forEach(i)},d.prototype.truncate=function(t,e,i,r,n,o){var a,s=this.svgElement,l=s.renderer,d=s.rotation,c=[],h=+!!i,u=(e||i||"").length,p=u,m=function(n,a){a=a||n;var d=t.parentNode;if(d&&void 0===c[a])if(d.getSubStringLength)try{c[a]=r+d.getSubStringLength(0,i?a+1:a)}catch(t){}else l.getSpanWidth&&(t.textContent=o(e||i,n),c[a]=r+l.getSpanWidth(s,t));return c[a]};s.rotation=0;var f=m(t.textContent.length);if(r+f>n){for(;h<=u;)p=Math.ceil((h+u)/2),i&&(a=o(i,p)),f=m(p,a&&a.length-1),h===u?h=u+1:f>n?u=p-1:h=p;0===u?t.textContent="":e&&u===e.length-1||(t.textContent=a||o(e||i,p))}i&&i.splice(0,p),s.actualWidth=f,s.rotation=d},d.prototype.unescapeEntities=function(t,e){return s(this.renderer.escapes,function(i,r){e&&-1!==e.indexOf(i)||(t=t.toString().replace(RegExp(i,"g"),r))}),t},d}),e(i,"Core/Renderer/SVG/SVGRenderer.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Color/Palette.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Renderer/SVG/SVGLabel.js"],i["Core/Renderer/SVG/Symbols.js"],i["Core/Renderer/SVG/TextBuilder.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o,a,s,l,d){var c,h=i.charts,u=i.deg2rad,p=i.doc,m=i.isFirefox,f=i.isMS,g=i.isWebKit,y=i.noop,v=i.SVG_NS,I=i.symbolSizes,x=i.win,b=d.addEvent,C=d.attr,T=d.createElement,$=d.css,w=d.defined,S=d.destroyObjectProperties,A=d.extend,_=d.isArray,P=d.isNumber,j=d.isObject,k=d.isString,O=d.merge,D=d.pick,M=d.pInt,L=d.uniqueKey;return i=function(){function i(t,e,i,r,n,o,a){this.width=this.url=this.style=this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0,this.init(t,e,i,r,n,o,a)}return i.prototype.init=function(t,e,i,r,n,o,a){var s,l=this.createElement("svg").attr({version:"1.1",class:"highcharts-root"}),d=l.element;a||l.css(this.getStyle(r)),t.appendChild(d),C(t,"dir","ltr"),-1===t.innerHTML.indexOf("xmlns")&&C(d,"xmlns",this.SVG_NS),this.isSVG=!0,this.box=d,this.boxWrapper=l,this.alignedObjects=[],this.url=this.getReferenceURL(),this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 9.2.2")),this.defs=this.createElement("defs").add(),this.allowHTML=o,this.forExport=n,this.styledMode=a,this.gradients={},this.cache={},this.cacheKeys=[],this.imgCount=0,this.setSize(e,i,!1),m&&t.getBoundingClientRect&&((e=function(){$(t,{left:0,top:0}),s=t.getBoundingClientRect(),$(t,{left:Math.ceil(s.left)-s.left+"px",top:Math.ceil(s.top)-s.top+"px"})})(),this.unSubPixelFix=b(x,"resize",e))},i.prototype.definition=function(e){return new t([e]).addToDOM(this.defs.element)},i.prototype.getReferenceURL=function(){if((m||g)&&p.getElementsByTagName("base").length){if(!w(c)){var e=L();$(e=new t([{tagName:"svg",attributes:{width:8,height:8},children:[{tagName:"defs",children:[{tagName:"clipPath",attributes:{id:e},children:[{tagName:"rect",attributes:{width:4,height:4}}]}]},{tagName:"rect",attributes:{id:"hitme",width:8,height:8,"clip-path":"url(#"+e+")",fill:"rgba(0,0,0,0.001)"}}]}]).addToDOM(p.body),{position:"fixed",top:0,left:0,zIndex:9e5});var i=p.elementFromPoint(6,6);c="hitme"===(i&&i.id),p.body.removeChild(e)}if(c)return x.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20")}return""},i.prototype.getStyle=function(t){return this.style=A({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},t)},i.prototype.setStyle=function(t){this.boxWrapper.css(this.getStyle(t))},i.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width},i.prototype.destroy=function(){var t=this.defs;return this.box=null,this.boxWrapper=this.boxWrapper.destroy(),S(this.gradients||{}),this.gradients=null,t&&(this.defs=t.destroy()),this.unSubPixelFix&&this.unSubPixelFix(),this.alignedObjects=null},i.prototype.createElement=function(t){var e=new this.Element;return e.init(this,t),e},i.prototype.getRadialAttr=function(t,e){return{cx:t[0]-t[2]/2+(e.cx||0)*t[2],cy:t[1]-t[2]/2+(e.cy||0)*t[2],r:(e.r||0)*t[2]}},i.prototype.buildText=function(t){new l(t).buildSVG()},i.prototype.getContrast=function(t){return t=e.parse(t).rgba,t[0]*=1,t[1]*=1.2,t[2]*=.5,459<t[0]+t[1]+t[2]?"#000000":"#FFFFFF"},i.prototype.button=function(e,i,n,o,a,s,l,d,c,h){var u=this.label(e,i,n,c,void 0,void 0,h,void 0,"button"),p=this.styledMode,m=0,g=a?O(a):{};if(e=g&&g.style||{},g=t.filterUserAttributes(g),u.attr(O({padding:8,r:2},g)),!p){var y=(g=O({fill:r.neutralColor3,stroke:r.neutralColor20,"stroke-width":1,style:{color:r.neutralColor80,cursor:"pointer",fontWeight:"normal"}},{style:e},g)).style;delete g.style;var v=(s=O(g,{fill:r.neutralColor10},t.filterUserAttributes(s||{}))).style;delete s.style;var I=(l=O(g,{fill:r.highlightColor10,style:{color:r.neutralColor100,fontWeight:"bold"}},t.filterUserAttributes(l||{}))).style;delete l.style;var x=(d=O(g,{style:{color:r.neutralColor20}},t.filterUserAttributes(d||{}))).style;delete d.style}return b(u.element,f?"mouseover":"mouseenter",function(){3!==m&&u.setState(1)}),b(u.element,f?"mouseout":"mouseleave",function(){3!==m&&u.setState(m)}),u.setState=function(t){1!==t&&(u.state=m=t),u.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][t||0]),p||u.attr([g,s,l,d][t||0]).css([y,v,I,x][t||0])},p||u.attr(g).css(A({cursor:"default"},y)),u.on("touchstart",function(t){return t.stopPropagation()}).on("click",function(t){3!==m&&o.call(u,t)})},i.prototype.crispLine=function(t,e,i){void 0===i&&(i="round");var r=t[0],n=t[1];return w(r[1])&&r[1]===n[1]&&(r[1]=n[1]=Math[i](r[1])-e%2/2),w(r[2])&&r[2]===n[2]&&(r[2]=n[2]=Math[i](r[2])+e%2/2),t},i.prototype.path=function(t){var e=this.styledMode?{}:{fill:"none"};return _(t)?e.d=t:j(t)&&A(e,t),this.createElement("path").attr(e)},i.prototype.circle=function(t,e,i){return t=j(t)?t:void 0===t?{}:{x:t,y:e,r:i},(e=this.createElement("circle")).xSetter=e.ySetter=function(t,e,i){i.setAttribute("c"+e,t)},e.attr(t)},i.prototype.arc=function(t,e,i,r,n,o){return j(t)?(e=(r=t).y,i=r.r,t=r.x):r={innerR:r,start:n,end:o},(t=this.symbol("arc",t,e,i,i,r)).r=i,t},i.prototype.rect=function(t,e,i,r,n,o){n=j(t)?t.r:n;var a=this.createElement("rect");return t=j(t)?t:void 0===t?{}:{x:t,y:e,width:Math.max(i,0),height:Math.max(r,0)},this.styledMode||(void 0!==o&&(t["stroke-width"]=o,t=a.crisp(t)),t.fill="none"),n&&(t.r=n),a.rSetter=function(t,e,i){a.r=t,C(i,{rx:t,ry:t})},a.rGetter=function(){return a.r||0},a.attr(t)},i.prototype.setSize=function(t,e,i){this.width=t,this.height=e,this.boxWrapper.animate({width:t,height:e},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:D(i,!0)?void 0:0}),this.alignElements()},i.prototype.g=function(t){var e=this.createElement("g");return t?e.attr({class:"highcharts-"+t}):e},i.prototype.image=function(t,e,i,r,n,o){var a={preserveAspectRatio:"none"},s=function(t,e){t.setAttributeNS?t.setAttributeNS("http://www.w3.org/1999/xlink","href",e):t.setAttribute("hc-svg-href",e)};1<arguments.length&&A(a,{x:e,y:i,width:r,height:n});var l=this.createElement("image").attr(a);if(a=function(e){s(l.element,t),o.call(l,e)},o){s(l.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");var d=new x.Image;b(d,"load",a),d.src=t,d.complete&&a({})}else s(l.element,t);return l},i.prototype.symbol=function(t,e,i,r,n,o){var a,s=this,l=/^url\((.*?)\)$/,d=l.test(t),c=!d&&(this.symbols[t]?t:"circle"),u=c&&this.symbols[c];if(u){"number"==typeof e&&(a=u.call(this.symbols,Math.round(e||0),Math.round(i||0),r||0,n||0,o));var m=this.path(a);s.styledMode||m.attr("fill","none"),A(m,{symbolName:c||void 0,x:e,y:i,width:r,height:n}),o&&A(m,o)}else if(d){var f=t.match(l)[1],g=m=this.image(f);g.imgwidth=D(I[f]&&I[f].width,o&&o.width),g.imgheight=D(I[f]&&I[f].height,o&&o.height);var y=function(t){return t.attr({width:t.width,height:t.height})};["width","height"].forEach(function(t){g[t+"Setter"]=function(t,e){var i=this["img"+e];this[e]=t,w(i)&&(o&&"within"===o.backgroundSize&&this.width&&this.height&&(i=Math.round(i*Math.min(this.width/this.imgwidth,this.height/this.imgheight))),this.element&&this.element.setAttribute(e,i),this.alignByTranslate||(t=((this[e]||0)-i)/2,this.attr("width"===e?{translateX:t}:{translateY:t})))}}),w(e)&&g.attr({x:e,y:i}),g.isImg=!0,w(g.imgwidth)&&w(g.imgheight)?y(g):(g.attr({width:0,height:0}),T("img",{onload:function(){var t=h[s.chartIndex];0===this.width&&($(this,{position:"absolute",top:"-999em"}),p.body.appendChild(this)),I[f]={width:this.width,height:this.height},g.imgwidth=this.width,g.imgheight=this.height,g.element&&y(g),this.parentNode&&this.parentNode.removeChild(this),s.imgCount--,s.imgCount||!t||t.hasLoaded||t.onload()},src:f}),this.imgCount++)}return m},i.prototype.clipRect=function(t,e,i,r){var n=L()+"-",o=this.createElement("clipPath").attr({id:n}).add(this.defs);return(t=this.rect(t,e,i,r,0).add(o)).id=n,t.clipPath=o,t.count=0,t},i.prototype.text=function(t,e,i,r){var n={};return r&&(this.allowHTML||!this.forExport)?this.html(t,e,i):(n.x=Math.round(e||0),i&&(n.y=Math.round(i)),w(t)&&(n.text=t),t=this.createElement("text").attr(n),r&&(!this.forExport||this.allowHTML)||(t.xSetter=function(t,e,i){for(var r,n=i.getElementsByTagName("tspan"),o=i.getAttribute(e),a=0;a<n.length;a++)(r=n[a]).getAttribute(e)===o&&r.setAttribute(e,t);i.setAttribute(e,t)}),t)},i.prototype.fontMetrics=function(t,e){return t=!this.styledMode&&/px/.test(t)||!x.getComputedStyle?t||e&&e.style&&e.style.fontSize||this.style&&this.style.fontSize:e&&o.prototype.getStyle.call(e,"font-size"),{h:e=24>(t=/px/.test(t)?M(t):12)?t+3:Math.round(1.2*t),b:Math.round(.8*e),f:t}},i.prototype.rotCorr=function(t,e,i){var r=t;return e&&i&&(r=Math.max(r*Math.cos(e*u),4)),{x:-t/3*Math.sin(e*u),y:r}},i.prototype.pathToSegments=function(t){for(var e=[],i=[],r={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},n=0;n<t.length;n++)k(i[0])&&P(t[n])&&i.length===r[i[0].toUpperCase()]&&t.splice(n,0,i[0].replace("M","L").replace("m","l")),"string"==typeof t[n]&&(i.length&&e.push(i.slice(0)),i.length=0),i.push(t[n]);return e.push(i.slice(0)),e},i.prototype.label=function(t,e,i,r,n,o,s,l,d){return new a(this,t,e,i,r,n,o,s,l,d)},i.prototype.alignElements=function(){this.alignedObjects.forEach(function(t){return t.align()})},i}(),A(i.prototype,{Element:o,SVG_NS:v,escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},symbols:s,draw:y}),n.registerRendererType("svg",i,!0),i}),e(i,"Core/Renderer/HTML/HTMLElement.js",[i["Core/Globals.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Utilities.js"]],function(t,e,i){var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),o=t.isFirefox,a=t.isMS,s=t.isWebKit,l=t.win,d=i.css,c=i.defined,h=i.extend,u=i.pick,p=i.pInt;function m(){return null!==e&&e.apply(this,arguments)||this}return n(m,e),m.compose=function(t){if(-1===m.composedClasses.indexOf(t)){m.composedClasses.push(t);var e=m.prototype,i=t.prototype;i.getSpanCorrection=e.getSpanCorrection,i.htmlCss=e.htmlCss,i.htmlGetBBox=e.htmlGetBBox,i.htmlUpdateTransform=e.htmlUpdateTransform,i.setSpanRotation=e.setSpanRotation}return t},m.prototype.getSpanCorrection=function(t,e,i){this.xCorr=-t*i,this.yCorr=-e},m.prototype.htmlCss=function(t){var e="SPAN"===this.element.tagName&&t&&"width"in t,i=u(e&&t.width,void 0);if(e){delete t.width,this.textWidth=i;var r=!0}return t&&"ellipsis"===t.textOverflow&&(t.whiteSpace="nowrap",t.overflow="hidden"),this.styles=h(this.styles,t),d(this.element,t),r&&this.htmlUpdateTransform(),this},m.prototype.htmlGetBBox=function(){var t=this.element;return{x:t.offsetLeft,y:t.offsetTop,width:t.offsetWidth,height:t.offsetHeight}},m.prototype.htmlUpdateTransform=function(){if(this.added){var t=this.renderer,e=this.element,i=this.translateX||0,r=this.translateY||0,n=this.x||0,o=this.y||0,a=this.textAlign||"left",s={left:0,center:.5,right:1}[a],l=this.styles;if(l=l&&l.whiteSpace,d(e,{marginLeft:i,marginTop:r}),!t.styledMode&&this.shadows&&this.shadows.forEach(function(t){d(t,{marginLeft:i+1,marginTop:r+1})}),this.inverted&&[].forEach.call(e.childNodes,function(i){t.invertChild(i,e)}),"SPAN"===e.tagName){var h=this.rotation,u=this.textWidth&&p(this.textWidth),m=[h,a,e.innerHTML,this.textWidth,this.textAlign].join(),f=void 0;(f=u!==this.oldTextWidth)&&!(f=u>this.oldTextWidth)&&((f=this.textPxLength)||(d(e,{width:"",whiteSpace:l||"nowrap"}),f=e.offsetWidth),f=f>u),f&&(/[ \-]/.test(e.textContent||e.innerText)||"ellipsis"===e.style.textOverflow)?(d(e,{width:u+"px",display:"block",whiteSpace:l||"normal"}),this.oldTextWidth=u,this.hasBoxWidthChanged=!0):this.hasBoxWidthChanged=!1,m!==this.cTT&&(f=t.fontMetrics(e.style.fontSize,e).b,c(h)&&(h!==(this.oldRotation||0)||a!==this.oldAlign)&&this.setSpanRotation(h,s,f),this.getSpanCorrection(!c(h)&&this.textPxLength||e.offsetWidth,f,s,h,a)),d(e,{left:n+(this.xCorr||0)+"px",top:o+(this.yCorr||0)+"px"}),this.cTT=m,this.oldRotation=h,this.oldAlign=a}}else this.alignOnAdd=!0},m.prototype.setSpanRotation=function(t,e,i){var r={},n=a&&!/Edge/.test(l.navigator.userAgent)?"-ms-transform":s?"-webkit-transform":o?"MozTransform":l.opera?"-o-transform":void 0;n&&(r[n]=r.transform="rotate("+t+"deg)",r[n+(o?"Origin":"-origin")]=r.transformOrigin=100*e+"% "+i+"px",d(this.element,r))},m.composedClasses=[],m}),e(i,"Core/Renderer/HTML/HTMLRenderer.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Renderer/SVG/SVGRenderer.js"],i["Core/Utilities.js"]],function(t,e,i,r){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=r.attr,s=r.createElement,l=r.extend,d=r.pick;function c(){return null!==i&&i.apply(this,arguments)||this}return o(c,i),c.compose=function(t){return -1===c.composedClasses.indexOf(t)&&(c.composedClasses.push(t),t.prototype.html=c.prototype.html),t},c.prototype.html=function(i,r,n){var o=this.createElement("span"),c=o.element,h=o.renderer,u=h.isSVG,p=function(t,i){["opacity","visibility"].forEach(function(r){t[r+"Setter"]=function(n,o,a){var s=t.div?t.div.style:i;e.prototype[r+"Setter"].call(this,n,o,a),s&&(s[o]=n)}}),t.addedSetters=!0};return o.textSetter=function(e){e!==this.textStr&&(delete this.bBox,delete this.oldTextWidth,t.setElementHTML(this.element,d(e,"")),this.textStr=e,o.doTransform=!0)},u&&p(o,o.element.style),o.xSetter=o.ySetter=o.alignSetter=o.rotationSetter=function(t,e){"align"===e?o.alignValue=o.textAlign=t:o[e]=t,o.doTransform=!0},o.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)},o.attr({text:i,x:Math.round(r),y:Math.round(n)}).css({position:"absolute"}),h.styledMode||o.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize}),c.style.whiteSpace="nowrap",o.css=o.htmlCss,u&&(o.add=function(t){var e=h.box.parentNode,i=[];if(this.parentGroup=t){var r=t.div;if(!r){for(;t;)i.push(t),t=t.parentGroup;i.reverse().forEach(function(t){function n(e,i){t[i]=e,"translateX"===i?u.left=e+"px":u.top=e+"px",t.doTransform=!0}var d,c=a(t.element,"class"),h=t.styles||{},u=(r=t.div=t.div||s("div",c?{className:c}:void 0,{position:"absolute",left:(t.translateX||0)+"px",top:(t.translateY||0)+"px",display:t.display,opacity:t.opacity,cursor:h.cursor,pointerEvents:h.pointerEvents,visibility:t.visibility},r||e)).style;l(t,{classSetter:(d=r,function(t){this.element.setAttribute("class",t),d.className=t}),on:function(){return i[0].div&&o.on.apply({element:i[0].div,onEvents:t.onEvents},arguments),t},translateXSetter:n,translateYSetter:n}),t.addedSetters||p(t)})}}else r=e;return r.appendChild(c),o.added=!0,o.alignOnAdd&&o.htmlUpdateTransform(),o}),o},c.composedClasses=[],c}),e(i,"Core/Axis/AxisDefaults.js",[i["Core/Color/Palette.js"]],function(t){var e,i;return(i=e||(e={})).defaultXAxisOptions={alignTicks:!0,allowDecimals:void 0,panningEnabled:!0,zIndex:2,zoomEnabled:!0,dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,gridLineDashStyle:"Solid",gridZIndex:1,labels:{autoRotation:void 0,autoRotationLimit:80,distance:void 0,enabled:!0,indentation:10,overflow:"justify",padding:5,reserveSpace:void 0,rotation:void 0,staggerLines:0,step:0,useHTML:!1,x:0,zIndex:7,style:{color:t.neutralColor60,cursor:"default",fontSize:"11px"}},maxPadding:.01,minorGridLineDashStyle:"Solid",minorTickLength:2,minorTickPosition:"outside",minPadding:.01,offset:void 0,opposite:!1,reversed:void 0,reversedStacks:!1,showEmpty:!0,showFirstLabel:!0,showLastLabel:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",rotation:0,useHTML:!1,x:0,y:0,style:{color:t.neutralColor60}},type:"linear",uniqueNames:!0,visible:!0,minorGridLineColor:t.neutralColor5,minorGridLineWidth:1,minorTickColor:t.neutralColor40,lineColor:t.highlightColor20,lineWidth:1,gridLineColor:t.neutralColor10,gridLineWidth:void 0,tickColor:t.highlightColor20},i.defaultYAxisOptions={reversedStacks:!0,endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){return(0,this.axis.chart.numberFormatter)(this.total,-1)},style:{color:t.neutralColor100,fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},i.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}},i.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}},i.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},i.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}},e}),e(i,"Core/Foundation.js",[i["Core/Utilities.js"]],function(t){var e=t.addEvent,i=t.isFunction,r=t.objectEach,n=t.removeEvent;return{registerEventOptions:function(t,o){t.eventOptions=t.eventOptions||{},r(o.events,function(r,o){t.eventOptions[o]!==r&&(t.eventOptions[o]&&(n(t,o,t.eventOptions[o]),delete t.eventOptions[o]),i(r)&&(t.eventOptions[o]=r,e(t,o,r)))})}}}),e(i,"Core/Axis/Tick.js",[i["Core/FormatUtilities.js"],i["Core/Globals.js"],i["Core/Utilities.js"]],function(t,e,i){var r=e.deg2rad,n=i.clamp,o=i.correctFloat,a=i.defined,s=i.destroyObjectProperties,l=i.extend,d=i.fireEvent,c=i.isNumber,h=i.merge,u=i.objectEach,p=i.pick;function m(t,e,i,r,n){this.isNewLabel=this.isNew=!0,this.axis=t,this.pos=e,this.type=i||"",this.parameters=n||{},this.tickmarkOffset=this.parameters.tickmarkOffset,this.options=this.parameters.options,d(this,"init"),i||r||this.addLabel()}return m.prototype.addLabel=function(){var e=this,i=e.axis,r=i.options,n=i.chart,s=i.categories,h=i.logarithmic,u=i.names,m=e.pos,f=p(e.options&&e.options.labels,r.labels),g=i.tickPositions,y=m===g[0],v=m===g[g.length-1],I=(!f.step||1===f.step)&&1===i.tickInterval;g=g.info;var x,b=e.label;if(s=this.parameters.category||(s?p(s[m],u[m],m):m),h&&c(s)&&(s=o(h.lin2log(s))),i.dateTime)if(g)var C=n.time.resolveDTLFormat(r.dateTimeLabelFormats[!r.grid&&g.higherRanks[m]||g.unitName]),T=C.main;else c(s)&&(T=i.dateTime.getXDateFormat(s,r.dateTimeLabelFormats||{}));e.isFirst=y,e.isLast=v;var $={axis:i,chart:n,dateTimeLabelFormat:T,isFirst:y,isLast:v,pos:m,tick:e,tickPositionInfo:g,value:s};d(this,"labelFormat",$);var w=function(e){return f.formatter?f.formatter.call(e,e):f.format?(e.text=i.defaultLabelFormatter.call(e),t.format(f.format,e,n)):i.defaultLabelFormatter.call(e,e)};r=w.call($,$);var S=C&&C.list;e.shortenLabel=S?function(){for(x=0;x<S.length;x++)if(l($,{dateTimeLabelFormat:S[x]}),b.attr({text:w.call($,$)}),b.getBBox().width<i.getSlotWidth(e)-2*f.padding)return;b.attr({text:""})}:void 0,I&&i._addedPlotLB&&e.moveLabel(r,f),a(b)||e.movedLabel?b&&b.textStr!==r&&!I&&(!b.textWidth||f.style.width||b.styles.width||b.css({width:null}),b.attr({text:r}),b.textPxLength=b.getBBox().width):(e.label=b=e.createLabel({x:0,y:0},r,f),e.rotation=0)},m.prototype.createLabel=function(t,e,i){var r=this.axis,n=r.chart;return(t=a(e)&&i.enabled?n.renderer.text(e,t.x,t.y,i.useHTML).add(r.labelGroup):null)&&(n.styledMode||t.css(h(i.style)),t.textPxLength=t.getBBox().width),t},m.prototype.destroy=function(){s(this,this.axis)},m.prototype.getPosition=function(t,e,i,r){var a=this.axis,s=a.chart,l=r&&s.oldChartHeight||s.chartHeight;return(t={x:t?o(a.translate(e+i,null,null,r)+a.transB):a.left+a.offset+(a.opposite?(r&&s.oldChartWidth||s.chartWidth)-a.right-a.left:0),y:t?l-a.bottom+a.offset-(a.opposite?a.height:0):o(l-a.translate(e+i,null,null,r)-a.transB)}).y=n(t.y,-1e5,1e5),d(this,"afterGetPosition",{pos:t}),t},m.prototype.getLabelPosition=function(t,e,i,n,o,s,l,c){var h=this.axis,u=h.transA,p=h.isLinked&&h.linkedParent?h.linkedParent.reversed:h.reversed,m=h.staggerLines,f=h.tickRotCorr||{x:0,y:0},g=n||h.reserveSpaceDefault?0:-h.labelOffset*("center"===h.labelAlign?.5:1),y={},v=o.y;return a(v)||(v=0===h.side?i.rotation?-8:-i.getBBox().height:2===h.side?f.y+8:Math.cos(i.rotation*r)*(f.y-i.getBBox(!1,0).height/2)),t=t+o.x+g+f.x-(s&&n?s*u*(p?-1:1):0),e=e+v-(s&&!n?s*u*(p?1:-1):0),m&&(i=l/(c||1)%m,h.opposite&&(i=m-i-1),e+=h.labelOffset/m*i),y.x=t,y.y=Math.round(e),d(this,"afterGetLabelPosition",{pos:y,tickmarkOffset:s,index:l}),y},m.prototype.getLabelSize=function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0},m.prototype.getMarkPath=function(t,e,i,r,n,o){return o.crispLine([["M",t,e],["L",t+(n?0:-i),e+(n?i:0)]],r)},m.prototype.handleOverflow=function(t){var e=this.axis,i=e.options.labels,n=t.x,o=e.chart.chartWidth,a=e.chart.spacing,s=p(e.labelLeft,Math.min(e.pos,a[3]));a=p(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,o-a[1]));var l,d=this.label,c=this.rotation,h={left:0,center:.5,right:1}[e.labelAlign||d.attr("align")],u=d.getBBox().width,m=e.getSlotWidth(this),f={},g=m,y=1;c||"justify"!==i.overflow?0>c&&n-h*u<s?l=Math.round(n/Math.cos(c*r)-s):0<c&&n+h*u>a&&(l=Math.round((o-n)/Math.cos(c*r))):(o=n+(1-h)*u,n-h*u<s?g=t.x+g*(1-h)-s:o>a&&(g=a-t.x+g*h,y=-1),(g=Math.min(m,g))<m&&"center"===e.labelAlign&&(t.x+=y*(m-g-h*(m-Math.min(u,g)))),(u>g||e.autoRotation&&(d.styles||{}).width)&&(l=g)),l&&(this.shortenLabel?this.shortenLabel():(f.width=Math.floor(l)+"px",(i.style||{}).textOverflow||(f.textOverflow="ellipsis"),d.css(f)))},m.prototype.moveLabel=function(t,e){var i=this,r=i.label,n=i.axis,o=n.reversed,a=!1;if(r&&r.textStr===t?(i.movedLabel=r,a=!0,delete i.label):u(n.ticks,function(e){a||e.isNew||e===i||!e.label||e.label.textStr!==t||(i.movedLabel=e.label,a=!0,e.labelPos=i.movedLabel.xy,delete e.label)}),!a&&(i.labelPos||r)){var s=i.labelPos||r.xy;r=n.horiz?o?0:n.width+n.left:s.x,n=n.horiz?s.y:o?n.width+n.left:0,i.movedLabel=i.createLabel({x:r,y:n},t,e),i.movedLabel&&i.movedLabel.attr({opacity:0})}},m.prototype.render=function(t,e,i){var r=this.axis,n=r.horiz,o=this.pos,a=p(this.tickmarkOffset,r.tickmarkOffset);a=(o=this.getPosition(n,o,a,e)).x;var s=o.y;r=n&&a===r.pos+r.len||!n&&s===r.pos?-1:1,n=p(i,this.label&&this.label.newOpacity,1),i=p(i,1),this.isActive=!0,this.renderGridLine(e,i,r),this.renderMark(o,i,r),this.renderLabel(o,e,n,t),this.isNew=!1,d(this,"afterRender")},m.prototype.renderGridLine=function(t,e,i){var r=this.axis,n=r.options,o={},a=this.pos,s=this.type,l=p(this.tickmarkOffset,r.tickmarkOffset),d=r.chart.renderer,c=this.gridLine,h=n.gridLineWidth,u=n.gridLineColor,m=n.gridLineDashStyle;"minor"===this.type&&(h=n.minorGridLineWidth,u=n.minorGridLineColor,m=n.minorGridLineDashStyle),c||(r.chart.styledMode||(o.stroke=u,o["stroke-width"]=h||0,o.dashstyle=m),s||(o.zIndex=1),t&&(e=0),this.gridLine=c=d.path().attr(o).addClass("highcharts-"+(s?s+"-":"")+"grid-line").add(r.gridGroup)),c&&(i=r.getPlotLinePath({value:a+l,lineWidth:c.strokeWidth()*i,force:"pass",old:t}))&&c[t||this.isNew?"attr":"animate"]({d:i,opacity:e})},m.prototype.renderMark=function(t,e,i){var r=this.axis,n=r.options,o=r.chart.renderer,a=this.type,s=r.tickSize(a?a+"Tick":"tick"),l=t.x;t=t.y;var d=p(n["minor"!==a?"tickWidth":"minorTickWidth"],!a&&r.isXAxis?1:0);n=n["minor"!==a?"tickColor":"minorTickColor"];var c=this.mark,h=!c;s&&(r.opposite&&(s[0]=-s[0]),c||(this.mark=c=o.path().addClass("highcharts-"+(a?a+"-":"")+"tick").add(r.axisGroup),r.chart.styledMode||c.attr({stroke:n,"stroke-width":d})),c[h?"attr":"animate"]({d:this.getMarkPath(l,t,s[0],c.strokeWidth()*i,r.horiz,o),opacity:e}))},m.prototype.renderLabel=function(t,e,i,r){var n=this.axis,o=n.horiz,a=n.options,s=this.label,l=a.labels,d=l.step;n=p(this.tickmarkOffset,n.tickmarkOffset);var h=t.x;t=t.y;var u=!0;s&&c(h)&&(s.xy=t=this.getLabelPosition(h,t,s,o,l,n,r,d),(!this.isFirst||this.isLast||a.showFirstLabel)&&(!this.isLast||this.isFirst||a.showLastLabel)?!o||l.step||l.rotation||e||0===i||this.handleOverflow(t):u=!1,d&&r%d&&(u=!1),u&&c(t.y)?(t.opacity=i,s[this.isNewLabel?"attr":"animate"](t),this.isNewLabel=!1):(s.attr("y",-9999),this.isNewLabel=!0))},m.prototype.replaceMovedLabel=function(){var t=this.label,e=this.axis,i=e.reversed;if(t&&!this.isNew){var r=e.horiz?i?e.left:e.width+e.left:t.xy.x;i=e.horiz?t.xy.y:i?e.width+e.top:e.top,t.animate({x:r,y:i,opacity:0},void 0,t.destroy),delete this.label}e.isDirty=!0,this.label=this.movedLabel,delete this.movedLabel},m}),e(i,"Core/Axis/Axis.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Axis/AxisDefaults.js"],i["Core/Color/Color.js"],i["Core/Color/Palette.js"],i["Core/DefaultOptions.js"],i["Core/Foundation.js"],i["Core/Globals.js"],i["Core/Axis/Tick.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o,a,s,l){var d=t.animObject,c=n.defaultOptions,h=o.registerEventOptions,u=a.deg2rad,p=l.arrayMax,m=l.arrayMin,f=l.clamp,g=l.correctFloat,y=l.defined,v=l.destroyObjectProperties,I=l.erase,x=l.error,b=l.extend,C=l.fireEvent,T=l.getMagnitude,$=l.isArray,w=l.isNumber,S=l.isString,A=l.merge,_=l.normalizeTickInterval,P=l.objectEach,j=l.pick,k=l.relativeLength,O=l.removeEvent,D=l.splat,M=l.syncTimeout;function L(t,e){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=this.options=this.offset=this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.eventOptions=this.coll=this.closestPointRange=this.chart=this.categories=this.bottom=this.alternateBands=void 0,this.init(t,e)}return L.prototype.init=function(t,e){var i=e.isX;this.chart=t,this.horiz=t.inverted&&!this.isZAxis?!i:i,this.isXAxis=i,this.coll=this.coll||(i?"xAxis":"yAxis"),C(this,"init",{userOptions:e}),this.opposite=j(e.opposite,this.opposite),this.side=j(e.side,this.side,this.horiz?2*!this.opposite:this.opposite?1:3),this.setOptions(e);var r=this.options,n=r.labels,o=r.type;this.userOptions=e,this.minPixelPadding=0,this.reversed=j(r.reversed,this.reversed),this.visible=r.visible,this.zoomEnabled=r.zoomEnabled,this.hasNames="category"===o||!0===r.categories,this.categories=r.categories||this.hasNames,this.names||(this.names=[],this.names.keys={}),this.plotLinesAndBandsGroups={},this.positiveValuesOnly=!!this.logarithmic,this.isLinked=y(r.linkedTo),this.ticks={},this.labelEdge=[],this.minorTicks={},this.plotLinesAndBands=[],this.alternateBands={},this.len=0,this.minRange=this.userMinRange=r.minRange||r.maxZoom,this.range=r.range,this.offset=r.offset||0,this.min=this.max=null,e=j(r.crosshair,D(t.options.tooltip.crosshairs)[+!i]),this.crosshair=!0===e?{}:e,-1===t.axes.indexOf(this)&&(i?t.axes.splice(t.xAxis.length,0,this):t.axes.push(this),t[this.coll].push(this)),this.series=this.series||[],t.inverted&&!this.isZAxis&&i&&void 0===this.reversed&&(this.reversed=!0),this.labelRotation=w(n.rotation)?n.rotation:void 0,h(this,r),C(this,"afterInit")},L.prototype.setOptions=function(t){this.options=A(e.defaultXAxisOptions,"yAxis"===this.coll&&e.defaultYAxisOptions,[e.defaultTopAxisOptions,e.defaultRightAxisOptions,e.defaultBottomAxisOptions,e.defaultLeftAxisOptions][this.side],A(c[this.coll],t)),C(this,"afterSetOptions",{userOptions:t})},L.prototype.defaultLabelFormatter=function(t){var e=this.axis;t=this.chart.numberFormatter;var i=w(this.value)?this.value:0/0,r=e.chart.time,n=this.dateTimeLabelFormat,o=c.lang,a=o.numericSymbols;o=o.numericSymbolMagnitude||1e3;var s=e.logarithmic?Math.abs(i):e.tickInterval,l=a&&a.length;if(e.categories)var d=""+this.value;else if(n)d=r.dateFormat(n,i);else if(l&&1e3<=s)for(;l--&&void 0===d;)s>=(e=Math.pow(o,l+1))&&0==10*i%e&&null!==a[l]&&0!==i&&(d=t(i/e,-1)+a[l]);return void 0===d&&(d=1e4<=Math.abs(i)?t(i,-1):t(i,-1,void 0,"")),d},L.prototype.getSeriesExtremes=function(){var t,e=this,i=e.chart;C(this,"getSeriesExtremes",null,function(){e.hasVisibleSeries=!1,e.dataMin=e.dataMax=e.threshold=null,e.softThreshold=!e.isXAxis,e.stacking&&e.stacking.buildStacks(),e.series.forEach(function(r){if(r.visible||!i.options.chart.ignoreHiddenSeries){var n=r.options,o=n.threshold;if(e.hasVisibleSeries=!0,e.positiveValuesOnly&&0>=o&&(o=null),e.isXAxis){if((n=r.xData).length){n=e.logarithmic?n.filter(e.validatePositiveValue):n;var a=(t=r.getXExtremes(n)).min,s=t.max;w(a)||a instanceof Date||(n=n.filter(w),a=(t=r.getXExtremes(n)).min,s=t.max),n.length&&(e.dataMin=Math.min(j(e.dataMin,a),a),e.dataMax=Math.max(j(e.dataMax,s),s))}}else w((r=r.applyExtremes()).dataMin)&&(a=r.dataMin,e.dataMin=Math.min(j(e.dataMin,a),a)),w(r.dataMax)&&(s=r.dataMax,e.dataMax=Math.max(j(e.dataMax,s),s)),y(o)&&(e.threshold=o),(!n.softThreshold||e.positiveValuesOnly)&&(e.softThreshold=!1)}})}),C(this,"afterGetSeriesExtremes")},L.prototype.translate=function(t,e,i,r,n,o){var a=this.linkedParent||this,s=r&&a.old?a.old.min:a.min,l=a.minPixelPadding;n=(a.isOrdinal||a.brokenAxis&&a.brokenAxis.hasBreaks||a.logarithmic&&n)&&a.lin2val;var d=1,c=0;return(r=r&&a.old?a.old.transA:a.transA)||(r=a.transA),i&&(d*=-1,c=a.len),a.reversed&&(d*=-1,c-=d*(a.sector||a.len)),e?(t=(t*d+c-l)/r+s,n&&(t=a.lin2val(t))):(n&&(t=a.val2lin(t)),t=w(s)?d*(t-s)*r+c+d*l+(w(o)?r*o:0):void 0),t},L.prototype.toPixels=function(t,e){return this.translate(t,!1,!this.horiz,null,!0)+(e?0:this.pos)},L.prototype.toValue=function(t,e){return this.translate(t-(e?0:this.pos),!0,!this.horiz,null,!0)},L.prototype.getPlotLinePath=function(t){function e(t,e,i){return("pass"!==I&&t<e||t>i)&&(I?t=f(t,e,i):a=!0),t}var i,r,n,o,a,s=this,l=s.chart,d=s.left,c=s.top,h=t.old,u=t.value,p=t.lineWidth,m=h&&l.oldChartHeight||l.chartHeight,g=h&&l.oldChartWidth||l.chartWidth,y=s.transB,v=t.translatedValue,I=t.force;return C(this,"getPlotLinePath",t={value:u,lineWidth:p,old:h,force:I,acrossPanes:t.acrossPanes,translatedValue:v},function(t){i=n=Math.round((v=f(v=j(v,s.translate(u,null,null,h)),-1e5,1e5))+y),r=o=Math.round(m-v-y),w(v)?s.horiz?(r=c,o=m-s.bottom,i=n=e(i,d,d+s.width)):(i=d,n=g-s.right,r=o=e(r,c,c+s.height)):(a=!0,I=!1),t.path=a&&!I?null:l.renderer.crispLine([["M",i,r],["L",n,o]],p||1)}),t.path},L.prototype.getLinearTickPositions=function(t,e,i){var r=g(Math.floor(e/t)*t);i=g(Math.ceil(i/t)*t);var n,o=[];if(g(r+t)===r&&(n=20),this.single)return[e];for(e=r;e<=i&&(o.push(e),(e=g(e+t,n))!==a);)var a=e;return o},L.prototype.getMinorTickInterval=function(){var t=this.options;return!0===t.minorTicks?j(t.minorTickInterval,"auto"):!1===t.minorTicks?null:t.minorTickInterval},L.prototype.getMinorTickPositions=function(){var t=this.options,e=this.tickPositions,i=this.minorTickInterval,r=this.pointRangePadding||0,n=this.min-r,o=(r=this.max+r)-n,a=[];if(o&&o/i<this.len/3){var s=this.logarithmic;if(s)this.paddedTicks.forEach(function(t,e,r){e&&a.push.apply(a,s.getLogTickPositions(i,r[e-1],r[e],!0))});else if(this.dateTime&&"auto"===this.getMinorTickInterval())a=a.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(i),n,r,t.startOfWeek));else for(t=n+(e[0]-n)%i;t<=r&&t!==a[0];t+=i)a.push(t)}return 0!==a.length&&this.trimTicks(a),a},L.prototype.adjustForMinRange=function(){var t,e,i,r,n=this.options,o=this.logarithmic,a=this.min,s=this.max,l=0;if(this.isXAxis&&void 0===this.minRange&&!o&&(y(n.min)||y(n.max)?this.minRange=null:(this.series.forEach(function(n){if(i=n.xData,r=n.xIncrement?1:i.length-1,1<i.length)for(t=r;0<t;t--)e=i[t]-i[t-1],(!l||e<l)&&(l=e)}),this.minRange=Math.min(5*l,this.dataMax-this.dataMin))),s-a<this.minRange){var d=this.dataMax-this.dataMin>=this.minRange,c=this.minRange,h=(c-s+a)/2;h=[a-h,j(n.min,a-h)],d&&(h[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin),s=[(a=p(h))+c,j(n.max,a+c)],d&&(s[2]=o?o.log2lin(this.dataMax):this.dataMax),(s=m(s))-a<c&&(h[0]=s-c,h[1]=j(n.min,s-c),a=p(h))}this.min=a,this.max=s},L.prototype.getClosest=function(){var t;return this.categories?t=1:this.series.forEach(function(e){var i=e.closestPointRange,r=e.visible||!e.chart.options.chart.ignoreHiddenSeries;!e.noSharedTooltip&&y(i)&&r&&(t=y(t)?Math.min(t,i):i)}),t},L.prototype.nameToX=function(t){var e=$(this.categories),i=e?this.categories:this.names,r=t.options.x;if(t.series.requireSorting=!1,y(r)||(r=this.options.uniqueNames?e?i.indexOf(t.name):j(i.keys[t.name],-1):t.series.autoIncrement()),-1===r){if(!e)var n=i.length}else n=r;return void 0!==n&&(this.names[n]=t.name,this.names.keys[t.name]=n),n},L.prototype.updateNames=function(){var t=this,e=this.names;0<e.length&&(Object.keys(e.keys).forEach(function(t){delete e.keys[t]}),e.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(e){e.xIncrement=null,(!e.points||e.isDirtyData)&&(t.max=Math.max(t.max,e.xData.length-1),e.processData(),e.generatePoints()),e.data.forEach(function(i,r){if(i&&i.options&&void 0!==i.name){var n=t.nameToX(i);void 0!==n&&n!==i.x&&(i.x=n,e.xData[r]=n)}})}))},L.prototype.setAxisTranslation=function(){var t=this,e=t.max-t.min,i=t.linkedParent,r=!!t.categories,n=t.isXAxis,o=t.axisPointRange||0,a=0,s=0,l=t.transA;if(n||r||o){var d=t.getClosest();i?(a=i.minPointOffset,s=i.pointRangePadding):t.series.forEach(function(e){var i=r?1:n?j(e.options.pointRange,d,0):t.axisPointRange||0,l=e.options.pointPlacement;o=Math.max(o,i),(!t.single||r)&&(e=e.is("xrange")?!n:n,a=Math.max(a,e&&S(l)?0:i/2),s=Math.max(s,e&&"on"===l?0:i))}),i=t.ordinal&&t.ordinal.slope&&d?t.ordinal.slope/d:1,t.minPointOffset=a*=i,t.pointRangePadding=s*=i,t.pointRange=Math.min(o,t.single&&r?1:e),n&&(t.closestPointRange=d)}t.translationSlope=t.transA=l=t.staticScale||t.len/(e+s||1),t.transB=t.horiz?t.left:t.bottom,t.minPixelPadding=l*a,C(this,"afterSetAxisTranslation")},L.prototype.minFromRange=function(){return this.max-this.range},L.prototype.setTickInterval=function(t){var e=this,i=e.chart,r=e.logarithmic,n=e.options,o=e.isXAxis,a=e.isLinked,s=n.tickPixelInterval,l=e.categories,d=e.softThreshold,c=n.maxPadding,h=n.minPadding,u=n.tickInterval,p=w(e.threshold)?e.threshold:null;e.dateTime||l||a||this.getTickAmount();var m=j(e.userMin,n.min),f=j(e.userMax,n.max);if(a){e.linkedParent=i[e.coll][n.linkedTo];var v=e.linkedParent.getExtremes();e.min=j(v.min,v.dataMin),e.max=j(v.max,v.dataMax),n.type!==e.linkedParent.options.type&&x(11,1,i)}else{if(d&&y(p)){if(e.dataMin>=p)v=p,h=0;else if(e.dataMax<=p){var I=p;c=0}}e.min=j(m,v,e.dataMin),e.max=j(f,I,e.dataMax)}r&&(e.positiveValuesOnly&&!t&&0>=Math.min(e.min,j(e.dataMin,e.min))&&x(10,1,i),e.min=g(r.log2lin(e.min),16),e.max=g(r.log2lin(e.max),16)),e.range&&y(e.max)&&(e.userMin=e.min=m=Math.max(e.dataMin,e.minFromRange()),e.userMax=f=e.max,e.range=null),C(e,"foundExtremes"),e.beforePadding&&e.beforePadding(),e.adjustForMinRange(),!(l||e.axisPointRange||e.stacking&&e.stacking.usePercentage||a)&&y(e.min)&&y(e.max)&&(i=e.max-e.min)&&(!y(m)&&h&&(e.min-=i*h),!y(f)&&c&&(e.max+=i*c)),w(e.userMin)||(w(n.softMin)&&n.softMin<e.min&&(e.min=m=n.softMin),w(n.floor)&&(e.min=Math.max(e.min,n.floor))),w(e.userMax)||(w(n.softMax)&&n.softMax>e.max&&(e.max=f=n.softMax),w(n.ceiling)&&(e.max=Math.min(e.max,n.ceiling))),d&&y(e.dataMin)&&(p=p||0,!y(m)&&e.min<p&&e.dataMin>=p?e.min=e.options.minRange?Math.min(p,e.max-e.minRange):p:!y(f)&&e.max>p&&e.dataMax<=p&&(e.max=e.options.minRange?Math.max(p,e.min+e.minRange):p)),w(e.min)&&w(e.max)&&!this.chart.polar&&e.min>e.max&&(y(e.options.min)?e.max=e.min:y(e.options.max)&&(e.min=e.max)),e.tickInterval=e.min===e.max||void 0===e.min||void 0===e.max?1:a&&e.linkedParent&&!u&&s===e.linkedParent.options.tickPixelInterval?u=e.linkedParent.tickInterval:j(u,this.tickAmount?(e.max-e.min)/Math.max(this.tickAmount-1,1):void 0,l?1:(e.max-e.min)*s/Math.max(e.len,s)),o&&!t&&(e.series.forEach(function(t){t.forceCrop=t.forceCropping&&t.forceCropping(),t.processData(e.min!==(e.old&&e.old.min)||e.max!==(e.old&&e.old.max))}),C(this,"postProcessData")),e.setAxisTranslation(),C(this,"initialAxisTranslation"),e.pointRange&&!u&&(e.tickInterval=Math.max(e.pointRange,e.tickInterval)),t=j(n.minTickInterval,e.dateTime&&!e.series.some(function(t){return t.noSharedTooltip})?e.closestPointRange:0),!u&&e.tickInterval<t&&(e.tickInterval=t),e.dateTime||e.logarithmic||u||(e.tickInterval=_(e.tickInterval,void 0,T(e.tickInterval),j(n.allowDecimals,.5>e.tickInterval||void 0!==this.tickAmount),!!this.tickAmount)),this.tickAmount||(e.tickInterval=e.unsquish()),this.setTickPositions()},L.prototype.setTickPositions=function(){var t=this.options,e=t.tickPositions,i=this.getMinorTickInterval(),r=this.hasVerticalPanning(),n="colorAxis"===this.coll,o=(n||!r)&&t.startOnTick;r=(n||!r)&&t.endOnTick,n=t.tickPositioner,this.tickmarkOffset=this.categories&&"between"===t.tickmarkPlacement&&1===this.tickInterval?.5:0,this.minorTickInterval="auto"===i&&this.tickInterval?this.tickInterval/5:i,this.single=this.min===this.max&&y(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==t.allowDecimals),this.tickPositions=i=e&&e.slice(),!i&&(this.ordinal&&this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200))?i=this.dateTime?this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,t.units),this.min,this.max,t.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0):this.logarithmic?this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max):(i=[this.min,this.max],x(19,!1,this.chart)),i.length>this.len&&(i=[i[0],i.pop()])[0]===i[1]&&(i.length=1),this.tickPositions=i,n&&(n=n.apply(this,[this.min,this.max])))&&(this.tickPositions=i=n),this.paddedTicks=i.slice(0),this.trimTicks(i,o,r),this.isLinked||(this.single&&2>i.length&&!this.categories&&!this.series.some(function(t){return t.is("heatmap")&&"between"===t.options.pointPlacement})&&(this.min-=.5,this.max+=.5),e||n||this.adjustTickAmount()),C(this,"afterSetTickPositions")},L.prototype.trimTicks=function(t,e,i){var r=t[0],n=t[t.length-1],o=!this.isOrdinal&&this.minPointOffset||0;if(C(this,"trimTicks"),!this.isLinked){if(e&&-1/0!==r)this.min=r;else for(;this.min-o>t[0];)t.shift();if(i)this.max=n;else for(;this.max+o<t[t.length-1];)t.pop();0===t.length&&y(r)&&!this.options.tickPositions&&t.push((n+r)/2)}},L.prototype.alignToOthers=function(){var t,e={},i=this.options;return!1!==this.chart.options.chart.alignTicks&&i.alignTicks&&!1!==i.startOnTick&&!1!==i.endOnTick&&!this.logarithmic&&this.chart[this.coll].forEach(function(i){var r=i.options;r=[i.horiz?r.left:r.top,r.width,r.height,r.pane].join(),i.series.length&&(e[r]?t=!0:e[r]=1)}),t},L.prototype.getTickAmount=function(){var t=this.options,e=t.tickPixelInterval,i=t.tickAmount;y(t.tickInterval)||i||!(this.len<e)||this.isRadial||this.logarithmic||!t.startOnTick||!t.endOnTick||(i=2),!i&&this.alignToOthers()&&(i=Math.ceil(this.len/e)+1),4>i&&(this.finalTickAmt=i,i=5),this.tickAmount=i},L.prototype.adjustTickAmount=function(){var t=this.options,e=this.tickInterval,i=this.tickPositions,r=this.tickAmount,n=this.finalTickAmt,o=i&&i.length,a=j(this.threshold,this.softThreshold?0:null);if(this.hasData()&&w(this.min)&&w(this.max)){if(o<r){for(;i.length<r;)i.length%2||this.min===a?i.push(g(i[i.length-1]+e)):i.unshift(g(i[0]-e));this.transA*=(o-1)/(r-1),this.min=t.startOnTick?i[0]:Math.min(this.min,i[0]),this.max=t.endOnTick?i[i.length-1]:Math.max(this.max,i[i.length-1])}else o>r&&(this.tickInterval*=2,this.setTickPositions());if(y(n)){for(e=t=i.length;e--;)(3===n&&1==e%2||2>=n&&0<e&&e<t-1)&&i.splice(e,1);this.finalTickAmt=void 0}}},L.prototype.setScale=function(){var t=!1,e=!1;this.series.forEach(function(i){t=t||i.isDirtyData||i.isDirty,e=e||i.xAxis&&i.xAxis.isDirty||!1}),this.setAxisSize();var i=this.len!==(this.old&&this.old.len);i||t||e||this.isLinked||this.forceRedraw||this.userMin!==(this.old&&this.old.userMin)||this.userMax!==(this.old&&this.old.userMax)||this.alignToOthers()?(this.stacking&&this.stacking.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.isDirty||(this.isDirty=i||this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max))):this.stacking&&this.stacking.cleanStacks(),t&&this.panningState&&(this.panningState.isDirty=!0),C(this,"afterSetScale")},L.prototype.setExtremes=function(t,e,i,r,n){var o=this,a=o.chart;i=j(i,!0),o.series.forEach(function(t){delete t.kdTree}),C(o,"setExtremes",n=b(n,{min:t,max:e}),function(){o.userMin=t,o.userMax=e,o.eventArgs=n,i&&a.redraw(r)})},L.prototype.zoom=function(t,e){var i=this,r=this.dataMin,n=this.dataMax,o=this.options,a=Math.min(r,j(o.min,r)),s=Math.max(n,j(o.max,n));return C(this,"zoom",t={newMin:t,newMax:e},function(t){var e=t.newMin,o=t.newMax;(e!==i.min||o!==i.max)&&(i.allowZoomOutside||(y(r)&&(e<a&&(e=a),e>s&&(e=s)),y(n)&&(o<a&&(o=a),o>s&&(o=s))),i.displayBtn=void 0!==e||void 0!==o,i.setExtremes(e,o,!1,void 0,{trigger:"zoom"})),t.zoomed=!0}),t.zoomed},L.prototype.setAxisSize=function(){var t=this.chart,e=this.options,i=e.offsets||[0,0,0,0],r=this.horiz,n=this.width=Math.round(k(j(e.width,t.plotWidth-i[3]+i[1]),t.plotWidth)),o=this.height=Math.round(k(j(e.height,t.plotHeight-i[0]+i[2]),t.plotHeight)),a=this.top=Math.round(k(j(e.top,t.plotTop+i[0]),t.plotHeight,t.plotTop));e=this.left=Math.round(k(j(e.left,t.plotLeft+i[3]),t.plotWidth,t.plotLeft)),this.bottom=t.chartHeight-o-a,this.right=t.chartWidth-n-e,this.len=Math.max(r?n:o,0),this.pos=r?e:a},L.prototype.getExtremes=function(){var t=this.logarithmic;return{min:t?g(t.lin2log(this.min)):this.min,max:t?g(t.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},L.prototype.getThreshold=function(t){var e=this.logarithmic,i=e?e.lin2log(this.min):this.min;return e=e?e.lin2log(this.max):this.max,null===t||-1/0===t?t=i:1/0===t?t=e:i>t?t=i:e<t&&(t=e),this.translate(t,0,1,0,1)},L.prototype.autoLabelAlign=function(t){var e=(j(t,0)-90*this.side+720)%360;return C(this,"autoLabelAlign",t={align:"center"},function(t){15<e&&165>e?t.align="right":195<e&&345>e&&(t.align="left")}),t.align},L.prototype.tickSize=function(t){var e=this.options,i=j(e["tick"===t?"tickWidth":"minorTickWidth"],"tick"===t&&this.isXAxis&&!this.categories?1:0),r=e["tick"===t?"tickLength":"minorTickLength"];if(i&&r){"inside"===e[t+"Position"]&&(r=-r);var n=[r,i]}return C(this,"afterTickSize",t={tickSize:n}),t.tickSize},L.prototype.labelMetrics=function(){var t=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,this.ticks[t]&&this.ticks[t].label)},L.prototype.unsquish=function(){var t,e,i=this.options.labels,r=this.horiz,n=this.tickInterval,o=this.len/((+!!this.categories+this.max-this.min)/n),a=i.rotation,s=this.labelMetrics(),l=Math.max(this.max-this.min,0),d=function(t){var e=t/(o||1);return(e=1<e?Math.ceil(e):1)*n>l&&1/0!==t&&1/0!==o&&l&&(e=Math.ceil(l/n)),g(e*n)},c=n,h=Number.MAX_VALUE;if(r){if(!i.staggerLines&&!i.step)if(w(a))var p=[a];else o<i.autoRotationLimit&&(p=i.autoRotation);p&&p.forEach(function(i){if(i===a||i&&-90<=i&&90>=i){var r=(e=d(Math.abs(s.h/Math.sin(u*i))))+Math.abs(i/360);r<h&&(h=r,t=i,c=e)}})}else i.step||(c=d(s.h));return this.autoRotation=p,this.labelRotation=j(t,w(a)?a:0),c},L.prototype.getSlotWidth=function(t){var e=this.chart,i=this.horiz,r=this.options.labels,n=Math.max(this.tickPositions.length-!this.categories,1),o=e.margin[3];if(t&&w(t.slotWidth))return t.slotWidth;if(i&&2>r.step)return r.rotation?0:(this.staggerLines||1)*this.len/n;if(!i){if(void 0!==(t=r.style.width))return parseInt(String(t),10);if(o)return o-e.spacing[3]}return .33*e.chartWidth},L.prototype.renderUnsquish=function(){var t=this.chart,e=t.renderer,i=this.tickPositions,r=this.ticks,n=this.options.labels,o=n.style,a=this.horiz,s=this.getSlotWidth(),l=Math.max(1,Math.round(s-2*n.padding)),d={},c=this.labelMetrics(),h=o.textOverflow,u=0;if(S(n.rotation)||(d.rotation=n.rotation||0),i.forEach(function(t){(t=r[t]).movedLabel&&t.replaceMovedLabel(),t&&t.label&&t.label.textPxLength>u&&(u=t.label.textPxLength)}),this.maxLabelLength=u,this.autoRotation)u>l&&u>c.h?d.rotation=this.labelRotation:this.labelRotation=0;else if(s){var p=l;if(!h){var m="clip";for(l=i.length;!a&&l--;){var f=i[l];(f=r[f].label)&&(f.styles&&"ellipsis"===f.styles.textOverflow?f.css({textOverflow:"clip"}):f.textPxLength>s&&f.css({width:s+"px"}),f.getBBox().height>this.len/i.length-(c.h-c.f)&&(f.specificTextOverflow="ellipsis"))}}}d.rotation&&(p=u>.5*t.chartHeight?.33*t.chartHeight:u,h||(m="ellipsis")),(this.labelAlign=n.align||this.autoLabelAlign(this.labelRotation))&&(d.align=this.labelAlign),i.forEach(function(t){var e=(t=r[t])&&t.label,i=o.width,n={};e&&(e.attr(d),t.shortenLabel?t.shortenLabel():p&&!i&&"nowrap"!==o.whiteSpace&&(p<e.textPxLength||"SPAN"===e.element.tagName)?(n.width=p+"px",h||(n.textOverflow=e.specificTextOverflow||m),e.css(n)):e.styles&&e.styles.width&&!n.width&&!i&&e.css({width:null}),delete e.specificTextOverflow,t.rotation=d.rotation)},this),this.tickRotCorr=e.rotCorr(c.b,this.labelRotation||0,0!==this.side)},L.prototype.hasData=function(){return this.series.some(function(t){return t.hasData()})||this.options.showEmpty&&y(this.min)&&y(this.max)},L.prototype.addTitle=function(t){var e,i=this.chart.renderer,r=this.horiz,n=this.opposite,o=this.options.title,a=this.chart.styledMode;this.axisTitle||((e=o.textAlign)||(e=(r?{low:"left",middle:"center",high:"right"}:{low:n?"right":"left",middle:"center",high:n?"left":"right"})[o.align]),this.axisTitle=i.text(o.text||"",0,0,o.useHTML).attr({zIndex:7,rotation:o.rotation,align:e}).addClass("highcharts-axis-title"),a||this.axisTitle.css(A(o.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0),a||o.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"}),this.axisTitle[t?"show":"hide"](t)},L.prototype.generateTick=function(t){var e=this.ticks;e[t]?e[t].addLabel():e[t]=new s(this,t)},L.prototype.getOffset=function(){var t=this,e=this,i=e.chart,r=i.renderer,n=e.options,o=e.tickPositions,a=e.ticks,s=e.horiz,l=e.side,d=i.inverted&&!e.isZAxis?[1,0,3,2][l]:l,c=e.hasData(),h=n.title,u=n.labels,p=i.axisOffset;i=i.clipOffset;var m,f=[-1,1,1,-1][l],g=n.className,v=e.axisParent,I=0,x=0,b=0;if(e.showAxis=m=c||n.showEmpty,e.staggerLines=e.horiz&&u.staggerLines||void 0,!e.axisGroup){var T=function(e,i,n){return r.g(e).attr({zIndex:n}).addClass("highcharts-"+t.coll.toLowerCase()+i+" "+(t.isRadial?"highcharts-radial-axis"+i+" ":"")+(g||"")).add(v)};e.gridGroup=T("grid","-grid",n.gridZIndex),e.axisGroup=T("axis","",n.zIndex),e.labelGroup=T("axis-labels","-labels",u.zIndex)}if(c||e.isLinked?(o.forEach(function(t){e.generateTick(t)}),e.renderUnsquish(),e.reserveSpaceDefault=0===l||2===l||({1:"left",3:"right"})[l]===e.labelAlign,j(u.reserveSpace,"center"===e.labelAlign||null,e.reserveSpaceDefault)&&o.forEach(function(t){b=Math.max(a[t].getLabelSize(),b)}),e.staggerLines&&(b*=e.staggerLines),e.labelOffset=b*(e.opposite?-1:1)):P(a,function(t,e){t.destroy(),delete a[e]}),h&&h.text&&!1!==h.enabled&&(e.addTitle(m),m&&!1!==h.reserveSpace)){e.titleOffset=I=e.axisTitle.getBBox()[s?"height":"width"];var $=h.offset;x=y($)?0:j(h.margin,s?5:10)}e.renderLine(),e.offset=f*j(n.offset,p[l]?p[l]+(n.margin||0):0),e.tickRotCorr=e.tickRotCorr||{x:0,y:0},h=0===l?-e.labelMetrics().h:2===l?e.tickRotCorr.y:0,c=Math.abs(b)+x,b&&(c=c-h+f*(s?j(u.y,e.tickRotCorr.y+8*f):u.x)),e.axisTitleMargin=j($,c),e.getMaxLabelDimensions&&(e.maxLabelDimensions=e.getMaxLabelDimensions(a,o)),s=this.tickSize("tick"),p[l]=Math.max(p[l],(e.axisTitleMargin||0)+I+f*e.offset,c,o&&o.length&&s?s[0]+f*e.offset:0),n=n.offset?0:2*Math.floor(e.axisLine.strokeWidth()/2),i[d]=Math.max(i[d],n),C(this,"afterGetOffset")},L.prototype.getLinePath=function(t){var e=this.chart,i=this.opposite,r=this.offset,n=this.horiz,o=this.left+(i?this.width:0)+r;return r=e.chartHeight-this.bottom-(i?this.height:0)+r,i&&(t*=-1),e.renderer.crispLine([["M",n?this.left:o,n?r:this.top],["L",n?e.chartWidth-this.right:o,n?r:e.chartHeight-this.bottom]],t)},L.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))},L.prototype.getTitlePosition=function(){var t=this.horiz,e=this.left,i=this.top,r=this.len,n=this.options.title,o=t?e:i,a=this.opposite,s=this.offset,l=n.x,d=n.y,c=this.axisTitle,h=this.chart.renderer.fontMetrics(n.style.fontSize,c);return c=Math.max(c.getBBox(null,0).height-h.h-1,0),r=({low:o+(t?0:r),middle:o+r/2,high:o+(t?r:0)})[n.align],e=(t?i+this.height:e)+(t?1:-1)*(a?-1:1)*this.axisTitleMargin+[-c,c,h.f,-c][this.side],C(this,"afterGetTitlePosition",{titlePosition:t={x:t?r+l:e+(a?this.width:0)+s+l,y:t?e+d-(a?this.height:0)+s:r+d}}),t},L.prototype.renderMinorTick=function(t,e){var i=this.minorTicks;i[t]||(i[t]=new s(this,t,"minor")),e&&i[t].isNew&&i[t].render(null,!0),i[t].render(null,!1,1)},L.prototype.renderTick=function(t,e,i){var r=this.ticks;(!this.isLinked||t>=this.min&&t<=this.max||this.grid&&this.grid.isColumn)&&(r[t]||(r[t]=new s(this,t)),i&&r[t].isNew&&r[t].render(e,!0,-1),r[t].render(e))},L.prototype.render=function(){var t,e,i=this,r=i.chart,n=i.logarithmic,o=i.options,l=i.isLinked,c=i.tickPositions,h=i.axisTitle,u=i.ticks,p=i.minorTicks,m=i.alternateBands,f=o.stackLabels,g=o.alternateGridColor,y=i.tickmarkOffset,v=i.axisLine,I=i.showAxis,x=d(r.renderer.globalAnimation);if(i.labelEdge.length=0,i.overlap=!1,[u,p,m].forEach(function(t){P(t,function(t){t.isActive=!1})}),i.hasData()||l){var b=i.chart.hasRendered&&i.old&&w(i.old.min);i.minorTickInterval&&!i.categories&&i.getMinorTickPositions().forEach(function(t){i.renderMinorTick(t,b)}),c.length&&(c.forEach(function(t,e){i.renderTick(t,e,b)}),y&&(0===i.min||i.single)&&(u[-1]||(u[-1]=new s(i,-1,null,!0)),u[-1].render(-1))),g&&c.forEach(function(o,s){e=void 0!==c[s+1]?c[s+1]+y:i.max-y,0==s%2&&o<i.max&&e<=i.max+(r.polar?-y:y)&&(m[o]||(m[o]=new a.PlotLineOrBand(i)),t=o+y,m[o].options={from:n?n.lin2log(t):t,to:n?n.lin2log(e):e,color:g,className:"highcharts-alternate-grid"},m[o].render(),m[o].isActive=!0)}),i._addedPlotLB||(i._addedPlotLB=!0,(o.plotLines||[]).concat(o.plotBands||[]).forEach(function(t){i.addPlotBandOrLine(t)}))}[u,p,m].forEach(function(t){var e=[],i=x.duration;P(t,function(t,i){t.isActive||(t.render(i,!1,0),t.isActive=!1,e.push(i))}),M(function(){for(var i=e.length;i--;)t[e[i]]&&!t[e[i]].isActive&&(t[e[i]].destroy(),delete t[e[i]])},t!==m&&r.hasRendered&&i?i:0)}),v&&(v[v.isPlaced?"animate":"attr"]({d:this.getLinePath(v.strokeWidth())}),v.isPlaced=!0,v[I?"show":"hide"](I)),h&&I&&(w((o=i.getTitlePosition()).y)?(h[h.isNew?"attr":"animate"](o),h.isNew=!1):(h.attr("y",-9999),h.isNew=!0)),f&&f.enabled&&i.stacking&&i.stacking.renderStackTotals(),i.old={len:i.len,max:i.max,min:i.min,transA:i.transA,userMax:i.userMax,userMin:i.userMin},i.isDirty=!1,C(this,"afterRender")},L.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(t){t.render()})),this.series.forEach(function(t){t.isDirty=!0})},L.prototype.getKeepProps=function(){return this.keepProps||L.keepProps},L.prototype.destroy=function(t){var e=this,i=e.plotLinesAndBands,r=this.eventOptions;if(C(this,"destroy",{keepEvents:t}),t||O(e),[e.ticks,e.minorTicks,e.alternateBands].forEach(function(t){v(t)}),i)for(t=i.length;t--;)i[t].destroy();for(var n in"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(t){e[t]&&(e[t]=e[t].destroy())}),e.plotLinesAndBandsGroups)e.plotLinesAndBandsGroups[n]=e.plotLinesAndBandsGroups[n].destroy();P(e,function(t,i){-1===e.getKeepProps().indexOf(i)&&delete e[i]}),this.eventOptions=r},L.prototype.drawCrosshair=function(t,e){var n,o=this.crosshair,a=j(o&&o.snap,!0),s=this.chart,l=this.cross;if(C(this,"drawCrosshair",{e:t,point:e}),t||(t=this.cross&&this.cross.e),o&&!1!==(y(e)||!a)){if(a?y(e)&&(n=j("colorAxis"!==this.coll?e.crosshairPos:null,this.isXAxis?e.plotX:this.len-e.plotY)):n=t&&(this.horiz?t.chartX-this.pos:this.len-t.chartY+this.pos),y(n)){var d={value:e&&(this.isXAxis?e.x:j(e.stackY,e.y)),translatedValue:n};s.polar&&b(d,{isCrosshair:!0,chartX:t&&t.chartX,chartY:t&&t.chartY,point:e}),d=this.getPlotLinePath(d)||null}if(!y(d))return void this.hideCrosshair();a=this.categories&&!this.isRadial,l||(this.cross=l=s.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+(a?"category ":"thin ")+(o.className||"")).attr({zIndex:j(o.zIndex,2)}).add(),s.styledMode||(l.attr({stroke:o.color||(a?i.parse(r.highlightColor20).setOpacity(.25).get():r.neutralColor20),"stroke-width":j(o.width,1)}).css({"pointer-events":"none"}),o.dashStyle&&l.attr({dashstyle:o.dashStyle}))),l.show().attr({d:d}),a&&!o.width&&l.attr({"stroke-width":this.transA}),this.cross.e=t}else this.hideCrosshair();C(this,"afterDrawCrosshair",{e:t,point:e})},L.prototype.hideCrosshair=function(){this.cross&&this.cross.hide(),C(this,"afterHideCrosshair")},L.prototype.hasVerticalPanning=function(){var t=this.chart.options.chart.panning;return!!(t&&t.enabled&&/y/.test(t.type))},L.prototype.validatePositiveValue=function(t){return w(t)&&0<t},L.prototype.update=function(t,e){var i=this.chart;t=A(this.userOptions,t),this.destroy(!0),this.init(i,t),i.isDirtyBox=!0,j(e,!0)&&i.redraw()},L.prototype.remove=function(t){for(var e=this.chart,i=this.coll,r=this.series,n=r.length;n--;)r[n]&&r[n].remove(!1);I(e.axes,this),I(e[i],this),e[i].forEach(function(t,e){t.options.index=t.userOptions.index=e}),this.destroy(),e.isDirtyBox=!0,j(t,!0)&&e.redraw()},L.prototype.setTitle=function(t,e){this.update({title:t},e)},L.prototype.setCategories=function(t,e){this.update({categories:t},e)},L.defaultOptions=e.defaultXAxisOptions,L.keepProps="extKey hcEvents names series userMax userMin".split(" "),L}),e(i,"Core/Axis/DateTimeAxis.js",[i["Core/Utilities.js"]],function(t){var e,i=t.addEvent,r=t.getMagnitude,n=t.normalizeTickInterval,o=t.timeUnits;return!function(t){function e(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)}function a(t){"datetime"!==t.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new l(this))}var s=[];t.compose=function(t){return -1===s.indexOf(t)&&(s.push(t),t.keepProps.push("dateTime"),t.prototype.getTimeTicks=e,i(t,"init",a)),t};var l=function(){function t(t){this.axis=t}return t.prototype.normalizeTimeTickInterval=function(t,e){var i,a=e||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]],s=o[(e=a[a.length-1])[0]],l=e[1];for(i=0;i<a.length&&(s=o[(e=a[i])[0]],l=e[1],!a[i+1]||!(t<=(s*l[l.length-1]+o[a[i+1][0]])/2));i++);return s===o.year&&t<5*s&&(l=[1,2,5]),t=n(t/s,l,"year"===e[0]?Math.max(r(t/s),1):1),{unitRange:s,count:t,unitName:e[0]}},t.prototype.getXDateFormat=function(t,e){var i=this.axis;return i.closestPointRange?i.chart.time.getDateFormat(i.closestPointRange,t,i.options.startOfWeek,e)||e.year:e.day},t}();t.Additions=l}(e||(e={})),e}),e(i,"Core/Axis/LogarithmicAxis.js",[i["Core/Utilities.js"]],function(t){var e,i=t.addEvent,r=t.getMagnitude,n=t.normalizeTickInterval,o=t.pick;return!function(t){function e(t){var e=this.logarithmic;"logarithmic"!==t.userOptions.type?this.logarithmic=void 0:e||(this.logarithmic=new l(this))}function a(){var t=this.logarithmic;t&&(this.lin2val=function(e){return t.lin2log(e)},this.val2lin=function(e){return t.log2lin(e)})}var s=[];t.compose=function(t){return -1===s.indexOf(t)&&(s.push(t),t.keepProps.push("logarithmic"),i(t,"init",e),i(t,"afterInit",a)),t};var l=function(){function t(t){this.axis=t}return t.prototype.getLogTickPositions=function(t,e,i,a){var s=this.axis,l=s.len,d=s.options,c=[];if(a||(this.minorAutoInterval=void 0),.5<=t)t=Math.round(t),c=s.getLinearTickPositions(t,e,i);else if(.08<=t){var h,u=Math.floor(e),p=d=void 0;for(l=.3<t?[1,2,4]:.15<t?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];u<i+1&&!p;u++){var m=l.length;for(h=0;h<m&&!p;h++){var f=this.log2lin(this.lin2log(u)*l[h]);f>e&&(!a||d<=i)&&void 0!==d&&c.push(d),d>i&&(p=!0),d=f}}}else e=this.lin2log(e),i=this.lin2log(i),t=n(t=o("auto"===(t=a?s.getMinorTickInterval():d.tickInterval)?null:t,this.minorAutoInterval,d.tickPixelInterval/(a?5:1)*(i-e)/((a?l/s.tickPositions.length:l)||1)),void 0,r(t)),c=s.getLinearTickPositions(t,e,i).map(this.log2lin),a||(this.minorAutoInterval=t/5);return a||(s.tickInterval=t),c},t.prototype.lin2log=function(t){return Math.pow(10,t)},t.prototype.log2lin=function(t){return Math.log(t)/Math.LN10},t}();t.Additions=l}(e||(e={})),e}),e(i,"Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",[i["Core/Utilities.js"]],function(t){var e,i,r,n,o=t.erase,a=t.extend,s=t.isNumber;return i=[],(n||(n={})).compose=function(t,n){return e||(e=t),-1===i.indexOf(n)&&(i.push(n),a(n.prototype,r.prototype)),n},r=function(){function t(){}return t.prototype.getPlotBandPath=function(t,e,i){void 0===i&&(i=this.options);var r=this.getPlotLinePath({value:e,force:!0,acrossPanes:i.acrossPanes}),n=[],o=this.horiz;if(e=!s(this.min)||!s(this.max)||t<this.min&&e<this.min||t>this.max&&e>this.max,t=this.getPlotLinePath({value:t,force:!0,acrossPanes:i.acrossPanes}),i=1,t&&r){if(e){var a=t.toString()===r.toString();i=0}for(e=0;e<t.length;e+=2){var l=t[e],d=t[e+1],c=r[e],h=r[e+1];"M"!==l[0]&&"L"!==l[0]||"M"!==d[0]&&"L"!==d[0]||"M"!==c[0]&&"L"!==c[0]||"M"!==h[0]&&"L"!==h[0]||(o&&c[1]===l[1]?(c[1]+=i,h[1]+=i):o||c[2]!==l[2]||(c[2]+=i,h[2]+=i),n.push(["M",l[1],l[2]],["L",d[1],d[2]],["L",h[1],h[2]],["L",c[1],c[2]],["Z"])),n.isFlat=a}}return n},t.prototype.addPlotBand=function(t){return this.addPlotBandOrLine(t,"plotBands")},t.prototype.addPlotLine=function(t){return this.addPlotBandOrLine(t,"plotLines")},t.prototype.addPlotBandOrLine=function(t,i){var r=this,n=this.userOptions,o=new e(this,t);if(this.visible&&(o=o.render()),o){if(this._addedPlotLB||(this._addedPlotLB=!0,(n.plotLines||[]).concat(n.plotBands||[]).forEach(function(t){r.addPlotBandOrLine(t)})),i){var a=n[i]||[];a.push(t),n[i]=a}this.plotLinesAndBands.push(o)}return o},t.prototype.removePlotBandOrLine=function(t){var e=this.plotLinesAndBands,i=this.options,r=this.userOptions;if(e){for(var n=e.length;n--;)e[n].id===t&&e[n].destroy();[i.plotLines||[],r.plotLines||[],i.plotBands||[],r.plotBands||[]].forEach(function(e){for(n=e.length;n--;)(e[n]||{}).id===t&&o(e,e[n])})}},t.prototype.removePlotBand=function(t){this.removePlotBandOrLine(t)},t.prototype.removePlotLine=function(t){this.removePlotBandOrLine(t)},t}(),n}),e(i,"Core/Axis/PlotLineOrBand/PlotLineOrBand.js",[i["Core/Color/Palette.js"],i["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],i["Core/Utilities.js"]],function(t,e,i){var r=i.arrayMax,n=i.arrayMin,o=i.defined,a=i.destroyObjectProperties,s=i.erase,l=i.fireEvent,d=i.merge,c=i.objectEach,h=i.pick;function u(t,e){this.axis=t,e&&(this.options=e,this.id=e.id)}return u.compose=function(t){return e.compose(u,t)},u.prototype.render=function(){l(this,"render");var e=this,i=e.axis,r=i.horiz,n=i.logarithmic,a=e.options,s=a.color,u=h(a.zIndex,0),p=a.events,m={},f=i.chart.renderer,g=a.label,y=e.label,v=a.to,I=a.from,x=a.value,b=e.svgElem,C=[],T=o(I)&&o(v);C=o(x);var $=!b,w={class:"highcharts-plot-"+(T?"band ":"line ")+(a.className||"")},S=T?"bands":"lines";if(n&&(I=n.log2lin(I),v=n.log2lin(v),x=n.log2lin(x)),i.chart.styledMode||(C?(w.stroke=s||t.neutralColor40,w["stroke-width"]=h(a.width,1),a.dashStyle&&(w.dashstyle=a.dashStyle)):T&&(w.fill=s||t.highlightColor10,a.borderWidth&&(w.stroke=a.borderColor,w["stroke-width"]=a.borderWidth))),m.zIndex=u,S+="-"+u,(n=i.plotLinesAndBandsGroups[S])||(i.plotLinesAndBandsGroups[S]=n=f.g("plot-"+S).attr(m).add()),$&&(e.svgElem=b=f.path().attr(w).add(n)),C)C=i.getPlotLinePath({value:x,lineWidth:b.strokeWidth(),acrossPanes:a.acrossPanes});else{if(!T)return;C=i.getPlotBandPath(I,v,a)}return!e.eventsAdded&&p&&(c(p,function(t,i){b.on(i,function(t){p[i].apply(e,[t])})}),e.eventsAdded=!0),($||!b.d)&&C&&C.length?b.attr({d:C}):b&&(C?(b.show(!0),b.animate({d:C})):b.d&&(b.hide(),y&&(e.label=y=y.destroy()))),g&&(o(g.text)||o(g.formatter))&&C&&C.length&&0<i.width&&0<i.height&&!C.isFlat?(g=d({align:r&&T&&"center",x:r?!T&&4:10,verticalAlign:!r&&T&&"middle",y:r?T?16:10:T?6:-4,rotation:r&&!T&&90},g),this.renderLabel(g,C,T,u)):y&&y.hide(),e},u.prototype.renderLabel=function(t,e,i,o){var a=this.axis,s=a.chart.renderer,l=this.label;l||(this.label=l=s.text(this.getLabelText(t),0,0,t.useHTML).attr({align:t.textAlign||t.align,rotation:t.rotation,class:"highcharts-plot-"+(i?"band":"line")+"-label "+(t.className||""),zIndex:o}).add(),a.chart.styledMode||l.css(d({textOverflow:"ellipsis"},t.style))),o=e.xBounds||[e[0][1],e[1][1],i?e[2][1]:e[0][1]],e=e.yBounds||[e[0][2],e[1][2],i?e[2][2]:e[0][2]],i=n(o),s=n(e),l.align(t,!1,{x:i,y:s,width:r(o)-i,height:r(e)-s}),l.alignValue&&"left"!==l.alignValue||l.css({width:(90===l.rotation?a.height-(l.alignAttr.y-a.top):a.width-(l.alignAttr.x-a.left))+"px"}),l.show(!0)},u.prototype.getLabelText=function(t){return o(t.formatter)?t.formatter.call(this):t.text},u.prototype.destroy=function(){s(this.axis.plotLinesAndBands,this),delete this.axis,a(this)},u}),e(i,"Core/Tooltip.js",[i["Core/FormatUtilities.js"],i["Core/Globals.js"],i["Core/Color/Palette.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o){var a=t.format,s=e.doc,l=r.distribute,d=o.addEvent,c=o.clamp,h=o.css,u=o.defined,p=o.discardElement,m=o.extend,f=o.fireEvent,g=o.isArray,y=o.isNumber,v=o.isString,I=o.merge,x=o.pick,b=o.splat,C=o.syncTimeout;function T(t,e){this.container=void 0,this.crosshairs=[],this.distance=0,this.isHidden=!0,this.isSticky=!1,this.now={},this.options={},this.outside=!1,this.chart=t,this.init(t,e)}return T.prototype.applyFilter=function(){var t=this.chart;t.renderer.definition({tagName:"filter",attributes:{id:"drop-shadow-"+t.index,opacity:.5},children:[{tagName:"feGaussianBlur",attributes:{in:"SourceAlpha",stdDeviation:1}},{tagName:"feOffset",attributes:{dx:1,dy:1}},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"linear",slope:.3}}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode",attributes:{in:"SourceGraphic"}}]}]})},T.prototype.bodyFormatter=function(t){return t.map(function(t){var e=t.series.tooltipOptions;return(e[(t.point.formatPrefix||"point")+"Formatter"]||t.point.tooltipFormatter).call(t.point,e[(t.point.formatPrefix||"point")+"Format"]||"")})},T.prototype.cleanSplit=function(t){this.chart.series.forEach(function(e){var i=e&&e.tt;i&&(!i.isActive||t?e.tt=i.destroy():i.isActive=!1)})},T.prototype.defaultFormatter=function(t){var e=this.points||b(this),i=[t.tooltipFooterHeaderFormatter(e[0])];return(i=i.concat(t.bodyFormatter(e))).push(t.tooltipFooterHeaderFormatter(e[0],!0)),i},T.prototype.destroy=function(){this.label&&(this.label=this.label.destroy()),this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy()),this.renderer&&(this.renderer=this.renderer.destroy(),p(this.container)),o.clearTimeout(this.hideTimer),o.clearTimeout(this.tooltipTimeout)},T.prototype.getAnchor=function(t,e){var i,r,n=this.chart,o=n.pointer,a=n.inverted,s=n.plotTop,l=n.plotLeft,d=0,c=0;return t=b(t),this.followPointer&&e?(void 0===e.chartX&&(e=o.normalize(e)),o=[e.chartX-l,e.chartY-s]):t[0].tooltipPos?o=t[0].tooltipPos:(t.forEach(function(t){i=t.series.yAxis,r=t.series.xAxis,d+=t.plotX||0,c+=t.plotLow?(t.plotLow+(t.plotHigh||0))/2:t.plotY||0,r&&i&&(a?(d+=s+n.plotHeight-r.len-r.pos,c+=l+n.plotWidth-i.len-i.pos):(d+=r.pos-l,c+=i.pos-s))}),d/=t.length,c/=t.length,o=[a?n.plotWidth-c:d,a?n.plotHeight-d:c],this.shared&&1<t.length&&e&&(a?o[0]=e.chartX-l:o[1]=e.chartY-s)),o.map(Math.round)},T.prototype.getLabel=function(){var t,i=this,r=this.chart.styledMode,o=this.options,a="tooltip"+(u(o.className)?" "+o.className:""),s=o.style.pointerEvents||(!this.followPointer&&o.stickOnContact?"auto":"none"),l=function(){i.inContact=!0},c=function(t){var e=i.chart.hoverSeries;i.inContact=i.shouldStickOnContact()&&i.chart.pointer.inClass(t.relatedTarget,"highcharts-tooltip"),!i.inContact&&e&&e.onMouseOut&&e.onMouseOut()},p=this.chart.renderer;if(!this.label){if(this.outside){var m=this.chart.options.chart.style,f=n.getRendererType();this.container=t=e.doc.createElement("div"),t.className="highcharts-tooltip-container",h(t,{position:"absolute",top:"1px",pointerEvents:s,zIndex:Math.max(this.options.style.zIndex||0,(m&&m.zIndex||0)+3)}),d(t,"mouseenter",l),d(t,"mouseleave",c),e.doc.body.appendChild(t),this.renderer=p=new f(t,0,0,m,void 0,void 0,p.styledMode)}if(this.split?this.label=p.g(a):(this.label=p.label("",0,0,o.shape,void 0,void 0,o.useHTML,void 0,a).attr({padding:o.padding,r:o.borderRadius}),r||this.label.attr({fill:o.backgroundColor,"stroke-width":o.borderWidth}).css(o.style).css({pointerEvents:s}).shadow(o.shadow)),r&&o.shadow&&(this.applyFilter(),this.label.attr({filter:"url(#drop-shadow-"+this.chart.index+")"})),i.outside&&!i.split){var g=this.label,y=g.xSetter,v=g.ySetter;g.xSetter=function(e){y.call(g,i.distance),t.style.left=e+"px"},g.ySetter=function(e){v.call(g,i.distance),t.style.top=e+"px"}}this.label.on("mouseenter",l).on("mouseleave",c).attr({zIndex:8}).add()}return this.label},T.prototype.getPosition=function(t,e,i){var r,n=this.chart,o=this.distance,a={},l=n.inverted&&i.h||0,d=this.outside,c=d?s.documentElement.clientWidth-2*o:n.chartWidth,h=d?Math.max(s.body.scrollHeight,s.documentElement.scrollHeight,s.body.offsetHeight,s.documentElement.offsetHeight,s.documentElement.clientHeight):n.chartHeight,u=n.pointer.getChartPosition(),p=function(r){var a="x"===r;return[r,a?c:h,a?t:e].concat(d?[a?t*u.scaleX:e*u.scaleY,a?u.left-o+(i.plotX+n.plotLeft)*u.scaleX:u.top-o+(i.plotY+n.plotTop)*u.scaleY,0,a?c:h]:[a?t:e,a?i.plotX+n.plotLeft:i.plotY+n.plotTop,a?n.plotLeft:n.plotTop,a?n.plotLeft+n.plotWidth:n.plotTop+n.plotHeight])},m=p("y"),f=p("x"),g=!this.followPointer&&x(i.ttBelow,!n.inverted==!!i.negative),y=function(t,e,i,r,n,s,c){var h=d?"y"===t?o*u.scaleY:o*u.scaleX:o,p=(i-r)/2,m=r<n-o,f=n+o+r<e,y=n-h-i+p;if(n=n+h-p,g&&f)a[t]=n;else if(!g&&m)a[t]=y;else if(m)a[t]=Math.min(c-r,0>y-l?y:y-l);else{if(!f)return!1;a[t]=Math.max(s,n+l+i>e?n:n+l)}},v=function(t,e,i,r,n){var s;return n<o||n>e-o?s=!1:a[t]=n<i/2?1:n>e-r/2?e-r-2:n-i/2,s},I=function(t){var e=m;m=f,f=e,r=t},b=function(){!1!==y.apply(0,m)?!1!==v.apply(0,f)||r||(I(!0),b()):r?a.x=a.y=0:(I(!0),b())};return(n.inverted||1<this.len)&&I(),b(),a},T.prototype.hide=function(t){var e=this;o.clearTimeout(this.hideTimer),t=x(t,this.options.hideDelay),this.isHidden||(this.hideTimer=C(function(){e.getLabel().fadeOut(t?void 0:t),e.isHidden=!0},t))},T.prototype.init=function(t,e){this.chart=t,this.options=e,this.crosshairs=[],this.now={x:0,y:0},this.isHidden=!0,this.split=e.split&&!t.inverted&&!t.polar,this.shared=e.shared||this.split,this.outside=x(e.outside,!(!t.scrollablePixelsX&&!t.scrollablePixelsY))},T.prototype.shouldStickOnContact=function(){return!(this.followPointer||!this.options.stickOnContact)},T.prototype.isStickyOnContact=function(){return!(!this.shouldStickOnContact()||!this.inContact)},T.prototype.move=function(t,e,i,r){var n=this,a=n.now,s=!1!==n.options.animation&&!n.isHidden&&(1<Math.abs(t-a.x)||1<Math.abs(e-a.y)),l=n.followPointer||1<n.len;m(a,{x:s?(2*a.x+t)/3:t,y:s?(a.y+e)/2:e,anchorX:l?void 0:s?(2*a.anchorX+i)/3:i,anchorY:l?void 0:s?(a.anchorY+r)/2:r}),n.getLabel().attr(a),n.drawTracker(),s&&(o.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){n&&n.move(t,e,i,r)},32))},T.prototype.refresh=function(t,e){var r=this.chart,n=this.options,a=b(t),s=a[0],l=[],d=n.formatter||this.defaultFormatter,c=this.shared,h=r.styledMode,u={};if(n.enabled){o.clearTimeout(this.hideTimer),this.followPointer=!this.split&&s.series.tooltipOptions.followPointer;var p=this.getAnchor(t,e),m=p[0],y=p[1];if(!c||!g(t)&&t.series&&t.series.noSharedTooltip?u=s.getLabelConfig():(r.pointer.applyInactiveState(a),a.forEach(function(t){t.setState("hover"),l.push(t.getLabelConfig())}),(u={x:s.category,y:s.y}).points=l),this.len=l.length,t=d.call(u,this),d=s.series,this.distance=x(d.tooltipOptions.distance,16),!1===t)this.hide();else{if(this.split)this.renderSplit(t,a);else{if(a=m,c=y,e&&r.pointer.isDirectTouch&&(a=e.chartX-r.plotLeft,c=e.chartY-r.plotTop),!(r.polar||!1===d.options.clip||d.shouldShowTooltip(a,c)))return void this.hide();e=this.getLabel(),n.style.width&&!h||e.css({width:this.chart.spacingBox.width+"px"}),e.attr({text:t&&t.join?t.join(""):t}),e.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+x(s.colorIndex,d.colorIndex)),h||e.attr({stroke:n.borderColor||s.color||d.color||i.neutralColor60}),this.updatePosition({plotX:m,plotY:y,negative:s.negative,ttBelow:s.ttBelow,h:p[2]||0})}this.isHidden&&this.label&&this.label.attr({opacity:1}).show(),this.isHidden=!1}f(this,"refresh")}},T.prototype.renderSplit=function(t,e){function r(t,e,i,r,o){return void 0===o&&(o=!0),i?(e=j?0:M,t=c(t-r/2,A.left,A.right-r-(n.outside?k:0))):(e-=O,t=c(t=o?t-r-$:t+$,o?t:A.left,A.right)),{x:t,y:e}}var n=this,o=n.chart,a=n.chart,d=a.chartWidth,h=a.chartHeight,u=a.plotHeight,p=a.plotLeft,f=a.plotTop,g=a.pointer,y=a.scrollablePixelsY;y=void 0===y?0:y;var I=a.scrollablePixelsX,b=a.scrollingContainer,C=(b=void 0===b?{scrollLeft:0,scrollTop:0}:b).scrollLeft;b=b.scrollTop;var T=a.styledMode,$=n.distance,w=n.options,S=n.options.positioner,A=n.outside&&"number"!=typeof I?s.documentElement.getBoundingClientRect():{left:C,right:C+d,top:b,bottom:b+h},_=n.getLabel(),P=this.renderer||o.renderer,j=!(!o.xAxis[0]||!o.xAxis[0].opposite),k=(o=g.getChartPosition()).left;o=o.top;var O=f+b,D=0,M=u-y;v(t)&&(t=[!1,t]),t=t.slice(0,e.length+1).reduce(function(t,o,a){if(!1!==o&&""!==o){var s=(a=e[a-1]||{isHeader:!0,plotX:e[0].plotX,plotY:u,series:{}}).isHeader,l=s?n:a.series;o=o.toString();var d=l.tt,h=a.isHeader,m=a.series,g="highcharts-color-"+x(a.colorIndex,m.colorIndex,"none");if(d||(d={padding:w.padding,r:w.borderRadius},T||(d.fill=w.backgroundColor,d["stroke-width"]=w.borderWidth),d=P.label("",0,0,w[h?"headerShape":"shape"],void 0,void 0,w.useHTML).addClass((h?"highcharts-tooltip-header ":"")+"highcharts-tooltip-box "+g).attr(d).add(_)),d.isActive=!0,d.attr({text:o}),T||d.css(w.style).shadow(w.shadow).attr({stroke:w.borderColor||a.color||m.color||i.neutralColor80}),o=(h=(l=l.tt=d).getBBox()).width+l.strokeWidth(),s&&(D=h.height,M+=D,j&&(O-=D)),m=void 0===(m=a.plotX)?0:m,g=void 0===(g=a.plotY)?0:g,d=a.series,a.isHeader){m=p+m;var y=f+u/2}else{var v=d.xAxis,I=d.yAxis;m=v.pos+c(m,-$,v.len+$),d.shouldShowTooltip(0,I.pos-f+g,{ignoreX:!0})&&(y=I.pos+g)}m=c(m,A.left-$,A.right+$),"number"==typeof y?(h=h.height+1,g=S?S.call(n,o,h,a):r(m,y,s,o),t.push({align:S?0:void 0,anchorX:m,anchorY:y,boxWidth:o,point:a,rank:x(g.rank,+!!s),size:h,target:g.y,tt:l,x:g.x})):l.isActive=!1}return t},[]),!S&&t.some(function(t){var e=(n.outside?k:0)+t.anchorX;return e<A.left&&e+t.boxWidth<A.right||e<k-A.left+t.boxWidth&&A.right-e>e})&&(t=t.map(function(t){var e=r(t.anchorX,t.anchorY,t.point.isHeader,t.boxWidth,!1);return m(t,{target:e.y,x:e.x})})),n.cleanSplit(),l(t,M);var L=k,E=k;t.forEach(function(t){var e=t.x,i=t.boxWidth;(t=t.isHeader)||(n.outside&&k+e<L&&(L=k+e),!t&&n.outside&&L+i>E&&(E=k+e))}),t.forEach(function(t){var e=t.x,i=t.anchorX,r=t.pos,o=t.point.isHeader;if(r={visibility:void 0===r?"hidden":"inherit",x:e,y:r+O,anchorX:i,anchorY:t.anchorY},n.outside&&e<i){var a=k-L;0<a&&(o||(r.x=e+a,r.anchorX=i+a),o&&(r.x=(E-L)/2,r.anchorX=i+a))}t.tt.attr(r)}),t=n.container,y=n.renderer,n.outside&&t&&y&&(a=_.getBBox(),y.setSize(a.width+a.x,a.height+a.y,!1),t.style.left=L+"px",t.style.top=o+"px")},T.prototype.drawTracker=function(){if(this.followPointer||!this.options.stickOnContact)this.tracker&&this.tracker.destroy();else{var t=this.chart,e=this.label,i=this.shared?t.hoverPoints:t.hoverPoint;if(e&&i){var r={x:0,y:0,width:0,height:0};i=this.getAnchor(i);var n=e.getBBox();i[0]+=t.plotLeft-e.translateX,i[1]+=t.plotTop-e.translateY,r.x=Math.min(0,i[0]),r.y=Math.min(0,i[1]),r.width=0>i[0]?Math.max(Math.abs(i[0]),n.width-i[0]):Math.max(Math.abs(i[0]),n.width),r.height=0>i[1]?Math.max(Math.abs(i[1]),n.height-Math.abs(i[1])):Math.max(Math.abs(i[1]),n.height),this.tracker?this.tracker.attr(r):(this.tracker=e.renderer.rect(r).addClass("highcharts-tracker").add(e),t.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}},T.prototype.styledModeFormat=function(t){return t.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex}"')},T.prototype.tooltipFooterHeaderFormatter=function(t,e){var i=t.series,r=i.tooltipOptions,n=i.xAxis,o=n&&n.dateTime;n={isFooter:e,labelConfig:t};var s=r.xDateFormat,l=r[e?"footerFormat":"headerFormat"];return f(this,"headerFormatter",n,function(e){o&&!s&&y(t.key)&&(s=o.getXDateFormat(t.key,r.dateTimeLabelFormats)),o&&s&&(t.point&&t.point.tooltipDateKeys||["key"]).forEach(function(t){l=l.replace("{point."+t+"}","{point."+t+":"+s+"}")}),i.chart.styledMode&&(l=this.styledModeFormat(l)),e.text=a(l,{point:t,series:i},this.chart)}),n.text},T.prototype.update=function(t){this.destroy(),I(!0,this.chart.options.tooltip.userOptions,t),this.init(this.chart,I(!0,this.options,t))},T.prototype.updatePosition=function(t){var e=this.chart,i=this.options,r=e.pointer,n=this.getLabel();r=r.getChartPosition();var o=(i.positioner||this.getPosition).call(this,n.width,n.height,t),a=t.plotX+e.plotLeft;t=t.plotY+e.plotTop,this.outside&&(i=i.borderWidth+2*this.distance,this.renderer.setSize(n.width+i,n.height+i,!1),(1!==r.scaleX||1!==r.scaleY)&&(h(this.container,{transform:"scale("+r.scaleX+", "+r.scaleY+")"}),a*=r.scaleX,t*=r.scaleY),a+=r.left-o.x,t+=r.top-o.y),this.move(Math.round(o.x),Math.round(o.y||0),a,t)},T}),e(i,"Core/Series/Point.js",[i["Core/Renderer/HTML/AST.js"],i["Core/Animation/AnimationUtilities.js"],i["Core/DefaultOptions.js"],i["Core/FormatUtilities.js"],i["Core/Utilities.js"]],function(t,e,i,r,n){var o=e.animObject,a=i.defaultOptions,s=r.format,l=n.addEvent,d=n.defined,c=n.erase,h=n.extend,u=n.fireEvent,p=n.getNestedProperty,m=n.isArray,f=n.isFunction,g=n.isNumber,y=n.isObject,v=n.merge,I=n.objectEach,x=n.pick,b=n.syncTimeout,C=n.removeEvent,T=n.uniqueKey;function $(){this.colorIndex=this.category=void 0,this.formatPrefix="point",this.id=void 0,this.isNull=!1,this.percentage=this.options=this.name=void 0,this.selected=!1,this.total=this.series=void 0,this.visible=!0,this.x=void 0}return $.prototype.animateBeforeDestroy=function(){var t=this,e={x:t.startXPos,opacity:0},i=t.getGraphicalProps();i.singular.forEach(function(i){t[i]=t[i].animate("dataLabel"===i?{x:t[i].startXPos,y:t[i].startYPos,opacity:0}:e)}),i.plural.forEach(function(e){t[e].forEach(function(e){e.element&&e.animate(h({x:t.startXPos},e.startYPos?{x:e.startXPos,y:e.startYPos}:{}))})})},$.prototype.applyOptions=function(t,e){var i=this.series,r=i.options.pointValKey||i.pointValKey;return h(this,t=$.prototype.optionsToObject.call(this,t)),this.options=this.options?h(this.options,t):t,t.group&&delete this.group,t.dataLabels&&delete this.dataLabels,r&&(this.y=$.prototype.getNestedProperty.call(this,r)),this.formatPrefix=(this.isNull=x(this.isValid&&!this.isValid(),null===this.x||!g(this.y)))?"null":"point",this.selected&&(this.state="select"),"name"in this&&void 0===e&&i.xAxis&&i.xAxis.hasNames&&(this.x=i.xAxis.nameToX(this)),void 0===this.x&&i?this.x=void 0===e?i.autoIncrement():e:g(t.x)&&i.options.relativeXValue&&(this.x=i.autoIncrement(t.x)),this},$.prototype.destroy=function(){function t(){for(n in(e.graphic||e.dataLabel||e.dataLabels)&&(C(e),e.destroyElements()),e)e[n]=null}var e=this,i=e.series,r=i.chart;i=i.options.dataSorting;var n,a=r.hoverPoints,s=o(e.series.chart.renderer.globalAnimation);e.legendItem&&r.legend.destroyItem(e),a&&(e.setState(),c(a,e),a.length||(r.hoverPoints=null)),e===r.hoverPoint&&e.onMouseOut(),i&&i.enabled?(this.animateBeforeDestroy(),b(t,s.duration)):t(),r.pointCount--},$.prototype.destroyElements=function(t){var e=this;(t=e.getGraphicalProps(t)).singular.forEach(function(t){e[t]=e[t].destroy()}),t.plural.forEach(function(t){e[t].forEach(function(t){t.element&&t.destroy()}),delete e[t]})},$.prototype.firePointEvent=function(t,e,i){var r=this,n=this.series.options;(n.point.events[t]||r.options&&r.options.events&&r.options.events[t])&&r.importEvents(),"click"===t&&n.allowPointSelect&&(i=function(t){r.select&&r.select(null,t.ctrlKey||t.metaKey||t.shiftKey)}),u(r,t,e,i)},$.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")},$.prototype.getGraphicalProps=function(t){var e,i=this,r=[],n={singular:[],plural:[]};for((t=t||{graphic:1,dataLabel:1}).graphic&&r.push("graphic","upperGraphic","shadowGroup"),t.dataLabel&&r.push("dataLabel","dataLabelUpper","connector"),e=r.length;e--;){var o=r[e];i[o]&&n.singular.push(o)}return["dataLabel","connector"].forEach(function(e){var r=e+"s";t[e]&&i[r]&&n.plural.push(r)}),n},$.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},$.prototype.getNestedProperty=function(t){if(t)return 0===t.indexOf("custom.")?p(t,this.options):this[t]},$.prototype.getZone=function(){var t=this.series,e=t.zones;t=t.zoneAxis||"y";var i,r=0;for(i=e[0];this[t]>=i.value;)i=e[++r];return this.nonZonedColor||(this.nonZonedColor=this.color),this.color=i&&i.color&&!this.options.color?i.color:this.nonZonedColor,i},$.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType},$.prototype.init=function(t,e,i){return this.series=t,this.applyOptions(e,i),this.id=d(this.id)?this.id:T(),this.resolveColor(),t.chart.pointCount++,u(this,"afterInit"),this},$.prototype.optionsToObject=function(t){var e=this.series,i=e.options.keys,r=i||e.pointArrayMap||["y"],n=r.length,o={},a=0,s=0;if(g(t)||null===t)o[r[0]]=t;else if(m(t))for(!i&&t.length>n&&("string"==(e=typeof t[0])?o.name=t[0]:"number"===e&&(o.x=t[0]),a++);s<n;)i&&void 0===t[a]||(0<r[s].indexOf(".")?$.prototype.setNestedProperty(o,t[a],r[s]):o[r[s]]=t[a]),a++,s++;else"object"==typeof t&&(o=t,t.dataLabels&&(e._hasPointLabels=!0),t.marker&&(e._hasPointMarkers=!0));return o},$.prototype.resolveColor=function(){var t=this.series,e=t.chart.styledMode,i=t.chart.options.chart.colorCount;if(delete this.nonZonedColor,t.options.colorByPoint){if(!e){var r=(i=t.options.colors||t.chart.options.colors)[t.colorCounter];i=i.length}e=t.colorCounter,t.colorCounter++,t.colorCounter===i&&(t.colorCounter=0)}else e||(r=t.color),e=t.colorIndex;this.colorIndex=x(this.options.colorIndex,e),this.color=x(this.options.color,r)},$.prototype.setNestedProperty=function(t,e,i){return i.split(".").reduce(function(t,i,r,n){return t[i]=n.length-1===r?e:y(t[i],!0)?t[i]:{},t[i]},t),t},$.prototype.tooltipFormatter=function(t){var e=this.series,i=e.tooltipOptions,r=x(i.valueDecimals,""),n=i.valuePrefix||"",o=i.valueSuffix||"";return e.chart.styledMode&&(t=e.chart.tooltip.styledModeFormat(t)),(e.pointArrayMap||["y"]).forEach(function(e){e="{point."+e,(n||o)&&(t=t.replace(RegExp(e+"}","g"),n+e+"}"+o)),t=t.replace(RegExp(e+"}","g"),e+":,."+r+"f}")}),s(t,{point:this,series:this.series},e.chart)},$.prototype.update=function(t,e,i,r){function n(){a.applyOptions(t);var r=l&&a.hasDummyGraphic;r=null===a.y?!r:r,l&&r&&(a.graphic=l.destroy(),delete a.hasDummyGraphic),y(t,!0)&&(l&&l.element&&t&&t.marker&&void 0!==t.marker.symbol&&(a.graphic=l.destroy()),t&&t.dataLabels&&a.dataLabel&&(a.dataLabel=a.dataLabel.destroy()),a.connector&&(a.connector=a.connector.destroy())),o=a.index,s.updateParallelArrays(a,o),c.data[o]=y(c.data[o],!0)||y(t,!0)?a.options:x(t,c.data[o]),s.isDirty=s.isDirtyData=!0,!s.fixedBox&&s.hasCartesianSeries&&(d.isDirtyBox=!0),"point"===c.legendType&&(d.isDirtyLegend=!0),e&&d.redraw(i)}var o,a=this,s=a.series,l=a.graphic,d=s.chart,c=s.options;e=x(e,!0),!1===r?n():a.firePointEvent("update",{options:t},n)},$.prototype.remove=function(t,e){this.series.removePoint(this.series.data.indexOf(this),t,e)},$.prototype.select=function(t,e){var i=this,r=i.series,n=r.chart;this.selectedStaging=t=x(t,!i.selected),i.firePointEvent(t?"select":"unselect",{accumulate:e},function(){i.selected=i.options.selected=t,r.options.data[r.data.indexOf(i)]=i.options,i.setState(t&&"select"),e||n.getSelectedPoints().forEach(function(t){var e=t.series;t.selected&&t!==i&&(t.selected=t.options.selected=!1,e.options.data[e.data.indexOf(t)]=t.options,t.setState(n.hoverPoints&&e.options.inactiveOtherPoints?"inactive":""),t.firePointEvent("unselect"))})}),delete this.selectedStaging},$.prototype.onMouseOver=function(t){var e=this.series.chart,i=e.pointer;t=t?i.normalize(t):i.getChartCoordinatesFromPoint(this,e.inverted),i.runPointActions(t,this)},$.prototype.onMouseOut=function(){var t=this.series.chart;this.firePointEvent("mouseOut"),this.series.options.inactiveOtherPoints||(t.hoverPoints||[]).forEach(function(t){t.setState()}),t.hoverPoints=t.hoverPoint=null},$.prototype.importEvents=function(){if(!this.hasImportedEvents){var t=this,e=v(t.series.options.point,t.options).events;t.events=e,I(e,function(e,i){f(e)&&l(t,i,e)}),this.hasImportedEvents=!0}},$.prototype.setState=function(e,i){var r,n=this.series,o=this.state,s=n.options.states[e||"normal"]||{},l=a.plotOptions[n.type].marker&&n.options.marker,d=l&&!1===l.enabled,c=l&&l.states&&l.states[e||"normal"]||{},p=!1===c.enabled,m=this.marker||{},f=n.chart,y=l&&n.markerAttribs,v=n.halo,I=n.stateMarkerGraphic;if(!((e=e||"")===this.state&&!i||this.selected&&"select"!==e||!1===s.enabled||e&&(p||d&&!1===c.enabled)||e&&m.states&&m.states[e]&&!1===m.states[e].enabled)){if(this.state=e,y&&(r=n.markerAttribs(this,e)),this.graphic&&!this.hasDummyGraphic){if(o&&this.graphic.removeClass("highcharts-point-"+o),e&&this.graphic.addClass("highcharts-point-"+e),!f.styledMode){var b=n.pointAttribs(this,e),C=x(f.options.chart.animation,s.animation);n.options.inactiveOtherPoints&&g(b.opacity)&&((this.dataLabels||[]).forEach(function(t){t&&t.animate({opacity:b.opacity},C)}),this.connector&&this.connector.animate({opacity:b.opacity},C)),this.graphic.animate(b,C)}r&&this.graphic.animate(r,x(f.options.chart.animation,c.animation,l.animation)),I&&I.hide()}else e&&c&&(o=m.symbol||n.symbol,I&&I.currentSymbol!==o&&(I=I.destroy()),r&&(I?I[i?"animate":"attr"]({x:r.x,y:r.y}):o&&(n.stateMarkerGraphic=I=f.renderer.symbol(o,r.x,r.y,r.width,r.height).add(n.markerGroup),I.currentSymbol=o)),!f.styledMode&&I&&I.attr(n.pointAttribs(this,e))),I&&(I[e&&this.isInside?"show":"hide"](),I.element.point=this,I.addClass(this.getClassName(),!0));s=s.halo,r=(I=this.graphic||I)&&I.visibility||"inherit",s&&s.size&&I&&"hidden"!==r&&!this.isCluster?(v||(n.halo=v=f.renderer.path().add(I.parentGroup)),v.show()[i?"animate":"attr"]({d:this.haloPath(s.size)}),v.attr({class:"highcharts-halo highcharts-color-"+x(this.colorIndex,n.colorIndex)+(this.className?" "+this.className:""),visibility:r,zIndex:-1}),v.point=this,f.styledMode||v.attr(h({fill:this.color||n.color,"fill-opacity":s.opacity},t.filterUserAttributes(s.attributes||{})))):v&&v.point&&v.point.haloPath&&v.animate({d:v.point.haloPath(0)},null,v.hide),u(this,"afterSetState",{state:e})}},$.prototype.haloPath=function(t){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-t,this.plotY-t,2*t,2*t)},$}),e(i,"Core/Pointer.js",[i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Color/Palette.js"],i["Core/Tooltip.js"],i["Core/Utilities.js"]],function(t,e,i,r,n){var o=t.parse,a=e.charts,s=e.noop,l=n.addEvent,d=n.attr,c=n.css,h=n.defined,u=n.extend,p=n.find,m=n.fireEvent,f=n.isNumber,g=n.isObject,y=n.objectEach,v=n.offset,I=n.pick,x=n.splat;function b(t,e){this.lastValidTouch={},this.pinchDown=[],this.runChartClick=!1,this.eventsToUnbind=[],this.chart=t,this.hasDragged=!1,this.options=e,this.init(t,e)}return b.prototype.applyInactiveState=function(t){var e,i=[];(t||[]).forEach(function(t){e=t.series,i.push(e),e.linkedParent&&i.push(e.linkedParent),e.linkedSeries&&(i=i.concat(e.linkedSeries)),e.navigatorSeries&&i.push(e.navigatorSeries)}),this.chart.series.forEach(function(t){-1===i.indexOf(t)?t.setState("inactive",!0):t.options.inactiveOtherPoints&&t.setAllPointsToState("inactive")})},b.prototype.destroy=function(){var t=this;this.eventsToUnbind.forEach(function(t){return t()}),this.eventsToUnbind=[],e.chartCount||(b.unbindDocumentMouseUp&&(b.unbindDocumentMouseUp=b.unbindDocumentMouseUp()),b.unbindDocumentTouchEnd&&(b.unbindDocumentTouchEnd=b.unbindDocumentTouchEnd())),clearInterval(t.tooltipTimeout),y(t,function(e,i){t[i]=void 0})},b.prototype.drag=function(t){var e=this.chart,r=e.options.chart,n=this.zoomHor,a=this.zoomVert,s=e.plotLeft,l=e.plotTop,d=e.plotWidth,c=e.plotHeight,h=this.mouseDownX||0,u=this.mouseDownY||0,p=g(r.panning)?r.panning&&r.panning.enabled:r.panning,m=r.panKey&&t[r.panKey+"Key"],f=t.chartX,y=t.chartY,v=this.selectionMarker;if((!v||!v.touch)&&(f<s?f=s:f>s+d&&(f=s+d),y<l?y=l:y>l+c&&(y=l+c),this.hasDragged=Math.sqrt(Math.pow(h-f,2)+Math.pow(u-y,2)),10<this.hasDragged)){var I=e.isInsidePlot(h-s,u-l,{visiblePlotOnly:!0});e.hasCartesianSeries&&(this.zoomX||this.zoomY)&&I&&!m&&!v&&(this.selectionMarker=v=e.renderer.rect(s,l,n?1:d,a?1:c,0).attr({class:"highcharts-selection-marker",zIndex:7}).add(),e.styledMode||v.attr({fill:r.selectionMarkerFill||o(i.highlightColor80).setOpacity(.25).get()})),v&&n&&(n=f-h,v.attr({width:Math.abs(n),x:(0<n?0:n)+h})),v&&a&&(n=y-u,v.attr({height:Math.abs(n),y:(0<n?0:n)+u})),I&&!v&&p&&e.pan(t,r.panning)}},b.prototype.dragStart=function(t){var e=this.chart;e.mouseIsDown=t.type,e.cancelClick=!1,e.mouseDownX=this.mouseDownX=t.chartX,e.mouseDownY=this.mouseDownY=t.chartY},b.prototype.drop=function(t){var e=this,i=this.chart,r=this.hasPinched;if(this.selectionMarker){var n,o={originalEvent:t,xAxis:[],yAxis:[]},a=this.selectionMarker,s=a.attr?a.attr("x"):a.x,l=a.attr?a.attr("y"):a.y,d=a.attr?a.attr("width"):a.width,p=a.attr?a.attr("height"):a.height;(this.hasDragged||r)&&(i.axes.forEach(function(i){if(i.zoomEnabled&&h(i.min)&&(r||e[({xAxis:"zoomX",yAxis:"zoomY"})[i.coll]])&&f(s)&&f(l)){var a=i.horiz,c="touchend"===t.type?i.minPixelPadding:0,u=i.toValue((a?s:l)+c);a=i.toValue((a?s+d:l+p)-c),o[i.coll].push({axis:i,min:Math.min(u,a),max:Math.max(u,a)}),n=!0}}),n&&m(i,"selection",o,function(t){i.zoom(u(t,r?{animation:!1}:null))})),f(i.index)&&(this.selectionMarker=this.selectionMarker.destroy()),r&&this.scaleGroups()}i&&f(i.index)&&(c(i.container,{cursor:i._cursor}),i.cancelClick=10<this.hasDragged,i.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},b.prototype.findNearestKDPoint=function(t,e,i){var r,n=this.chart,o=n.hoverPoint;return(n=n.tooltip,o&&n&&n.isStickyOnContact())?o:(t.forEach(function(t){var n=!(t.noSharedTooltip&&e)&&0>t.options.findNearestPointBy.indexOf("y");if((n=g(t=t.searchPoint(i,n),!0)&&t.series)&&!(n=!g(r,!0))){n=r.distX-t.distX;var o=r.dist-t.dist,a=(t.series.group&&t.series.group.zIndex)-(r.series.group&&r.series.group.zIndex);n=0<(0!==n&&e?n:0!==o?o:0!==a?a:r.series.index>t.series.index?-1:1)}n&&(r=t)}),r)},b.prototype.getChartCoordinatesFromPoint=function(t,e){var i=t.series,r=i.xAxis;i=i.yAxis;var n=t.shapeArgs;if(r&&i){var o=I(t.clientX,t.plotX),a=t.plotY||0;return t.isNode&&n&&f(n.x)&&f(n.y)&&(o=n.x,a=n.y),e?{chartX:i.len+i.pos-a,chartY:r.len+r.pos-o}:{chartX:o+r.pos,chartY:a+i.pos}}if(n&&n.x&&n.y)return{chartX:n.x,chartY:n.y}},b.prototype.getChartPosition=function(){if(this.chartPosition)return this.chartPosition;var t=this.chart.container,e=v(t);this.chartPosition={left:e.left,top:e.top,scaleX:1,scaleY:1};var i=t.offsetWidth;return t=t.offsetHeight,2<i&&2<t&&(this.chartPosition.scaleX=e.width/i,this.chartPosition.scaleY=e.height/t),this.chartPosition},b.prototype.getCoordinates=function(t){var e={xAxis:[],yAxis:[]};return this.chart.axes.forEach(function(i){e[i.isXAxis?"xAxis":"yAxis"].push({axis:i,value:i.toValue(t[i.horiz?"chartX":"chartY"])})}),e},b.prototype.getHoverData=function(t,e,i,r,n,o){var a=[];r=!(!r||!t);var s={chartX:o?o.chartX:void 0,chartY:o?o.chartY:void 0,shared:n};m(this,"beforeGetHoverData",s);var l=e&&!e.stickyTracking?[e]:i.filter(function(t){return s.filter?s.filter(t):t.visible&&!(!n&&t.directTouch)&&I(t.options.enableMouseTracking,!0)&&t.stickyTracking}),d=r||!o?t:this.findNearestKDPoint(l,n,o);return e=d&&d.series,d&&(n&&!e.noSharedTooltip?(l=i.filter(function(t){return s.filter?s.filter(t):t.visible&&!(!n&&t.directTouch)&&I(t.options.enableMouseTracking,!0)&&!t.noSharedTooltip})).forEach(function(t){var e=p(t.points,function(t){return t.x===d.x&&!t.isNull});g(e)&&(t.chart.isBoosting&&(e=t.getPoint(e)),a.push(e))}):a.push(d)),m(this,"afterGetHoverData",s={hoverPoint:d}),{hoverPoint:s.hoverPoint,hoverSeries:e,hoverPoints:a}},b.prototype.getPointFromEvent=function(t){t=t.target;for(var e;t&&!e;)e=t.point,t=t.parentNode;return e},b.prototype.onTrackerMouseOut=function(t){t=t.relatedTarget||t.toElement;var e=this.chart.hoverSeries;this.isDirectTouch=!1,!e||!t||e.stickyTracking||this.inClass(t,"highcharts-tooltip")||this.inClass(t,"highcharts-series-"+e.index)&&this.inClass(t,"highcharts-tracker")||e.onMouseOut()},b.prototype.inClass=function(t,e){for(var i;t;){if(i=d(t,"class")){if(-1!==i.indexOf(e))return!0;if(-1!==i.indexOf("highcharts-container"))return!1}t=t.parentNode}},b.prototype.init=function(t,e){this.options=e,this.chart=t,this.runChartClick=!(!e.chart.events||!e.chart.events.click),this.pinchDown=[],this.lastValidTouch={},r&&(t.tooltip=new r(t,e.tooltip),this.followTouchMove=I(e.tooltip.followTouchMove,!0)),this.setDOMEvents()},b.prototype.normalize=function(t,e){var i=t.touches,r=i?i.length?i.item(0):I(i.changedTouches,t.changedTouches)[0]:t;return e||(e=this.getChartPosition()),i=r.pageX-e.left,r=r.pageY-e.top,u(t,{chartX:Math.round(i/=e.scaleX),chartY:Math.round(r/=e.scaleY)})},b.prototype.onContainerClick=function(t){var e=this.chart,i=e.hoverPoint;t=this.normalize(t);var r=e.plotLeft,n=e.plotTop;e.cancelClick||(i&&this.inClass(t.target,"highcharts-tracker")?(m(i.series,"click",u(t,{point:i})),e.hoverPoint&&i.firePointEvent("click",t)):(u(t,this.getCoordinates(t)),e.isInsidePlot(t.chartX-r,t.chartY-n,{visiblePlotOnly:!0})&&m(e,"click",t)))},b.prototype.onContainerMouseDown=function(t){var i=1==(1&(t.buttons||t.button));t=this.normalize(t),e.isFirefox&&0!==t.button&&this.onContainerMouseMove(t),(void 0===t.button||i)&&(this.zoomOption(t),i&&t.preventDefault&&t.preventDefault(),this.dragStart(t))},b.prototype.onContainerMouseLeave=function(t){var e=a[I(b.hoverChartIndex,-1)],i=this.chart.tooltip;i&&i.shouldStickOnContact()&&this.inClass(t.relatedTarget,"highcharts-tooltip-container")||(t=this.normalize(t),e&&(t.relatedTarget||t.toElement)&&(e.pointer.reset(),e.pointer.chartPosition=void 0),i&&!i.isHidden&&this.reset())},b.prototype.onContainerMouseEnter=function(t){delete this.chartPosition},b.prototype.onContainerMouseMove=function(t){var e=this.chart;t=this.normalize(t),this.setHoverChartIndex(),t.preventDefault||(t.returnValue=!1),("mousedown"===e.mouseIsDown||this.touchSelect(t))&&this.drag(t),!e.openMenu&&(this.inClass(t.target,"highcharts-tracker")||e.isInsidePlot(t.chartX-e.plotLeft,t.chartY-e.plotTop,{visiblePlotOnly:!0}))&&(this.inClass(t.target,"highcharts-no-tooltip")?this.reset(!1,0):this.runPointActions(t))},b.prototype.onDocumentTouchEnd=function(t){var e=a[I(b.hoverChartIndex,-1)];e&&e.pointer.drop(t)},b.prototype.onContainerTouchMove=function(t){this.touchSelect(t)?this.onContainerMouseMove(t):this.touch(t)},b.prototype.onContainerTouchStart=function(t){this.touchSelect(t)?this.onContainerMouseDown(t):(this.zoomOption(t),this.touch(t,!0))},b.prototype.onDocumentMouseMove=function(t){var e=this.chart,i=this.chartPosition;t=this.normalize(t,i);var r=e.tooltip;!i||r&&r.isStickyOnContact()||e.isInsidePlot(t.chartX-e.plotLeft,t.chartY-e.plotTop,{visiblePlotOnly:!0})||this.inClass(t.target,"highcharts-tracker")||this.reset()},b.prototype.onDocumentMouseUp=function(t){var e=a[I(b.hoverChartIndex,-1)];e&&e.pointer.drop(t)},b.prototype.pinch=function(t){var e=this,i=e.chart,r=e.pinchDown,n=t.touches||[],o=n.length,a=e.lastValidTouch,l=e.hasZoom,d={},c=1===o&&(e.inClass(t.target,"highcharts-tracker")&&i.runTrackerClick||e.runChartClick),h={},p=e.selectionMarker;1<o?e.initiated=!0:1===o&&this.followTouchMove&&(e.initiated=!1),l&&e.initiated&&!c&&!1!==t.cancelable&&t.preventDefault(),[].map.call(n,function(t){return e.normalize(t)}),"touchstart"===t.type?([].forEach.call(n,function(t,e){r[e]={chartX:t.chartX,chartY:t.chartY}}),a.x=[r[0].chartX,r[1]&&r[1].chartX],a.y=[r[0].chartY,r[1]&&r[1].chartY],i.axes.forEach(function(t){if(t.zoomEnabled){var e=i.bounds[t.horiz?"h":"v"],r=t.minPixelPadding,n=t.toPixels(Math.min(I(t.options.min,t.dataMin),t.dataMin)),o=t.toPixels(Math.max(I(t.options.max,t.dataMax),t.dataMax)),a=Math.max(n,o);e.min=Math.min(t.pos,Math.min(n,o)-r),e.max=Math.max(t.pos+t.len,a+r)}}),e.res=!0):e.followTouchMove&&1===o?this.runPointActions(e.normalize(t)):r.length&&(p||(e.selectionMarker=p=u({destroy:s,touch:!0},i.plotBox)),e.pinchTranslate(r,n,d,p,h,a),e.hasPinched=l,e.scaleGroups(d,h),e.res&&(e.res=!1,this.reset(!1,0)))},b.prototype.pinchTranslate=function(t,e,i,r,n,o){this.zoomHor&&this.pinchTranslateDirection(!0,t,e,i,r,n,o),this.zoomVert&&this.pinchTranslateDirection(!1,t,e,i,r,n,o)},b.prototype.pinchTranslateDirection=function(t,e,i,r,n,o,a,s){var l=this.chart,d=t?"x":"y",c=t?"X":"Y",h="chart"+c,u=t?"width":"height",p=l["plot"+(t?"Left":"Top")],m=l.inverted,f=l.bounds[t?"h":"v"],g=1===e.length,y=e[0][h],v=!g&&e[1][h];e=function(){"number"==typeof T&&20<Math.abs(y-v)&&(b=s||Math.abs(C-T)/Math.abs(y-v)),x=(p-C)/b+y,I=l["plot"+(t?"Width":"Height")]/b};var I,x,b=s||1,C=i[0][h],T=!g&&i[1][h];if(e(),(i=x)<f.min){i=f.min;var $=!0}else i+I>f.max&&(i=f.max-I,$=!0);$?(C-=.8*(C-a[d][0]),"number"==typeof T&&(T-=.8*(T-a[d][1])),e()):a[d]=[C,T],m||(o[d]=x-p,o[u]=I),o=m?1/b:b,n[u]=I,n[d]=i,r[m?t?"scaleY":"scaleX":"scale"+c]=b,r["translate"+c]=o*p+(C-o*y)},b.prototype.reset=function(t,e){var i=this.chart,r=i.hoverSeries,n=i.hoverPoint,o=i.hoverPoints,a=i.tooltip,s=a&&a.shared?o:n;t&&s&&x(s).forEach(function(e){e.series.isCartesian&&void 0===e.plotX&&(t=!1)}),t?a&&s&&x(s).length&&(a.refresh(s),a.shared&&o?o.forEach(function(t){t.setState(t.state,!0),t.series.isCartesian&&(t.series.xAxis.crosshair&&t.series.xAxis.drawCrosshair(null,t),t.series.yAxis.crosshair&&t.series.yAxis.drawCrosshair(null,t))}):n&&(n.setState(n.state,!0),i.axes.forEach(function(t){t.crosshair&&n.series[t.coll]===t&&t.drawCrosshair(null,n)}))):(n&&n.onMouseOut(),o&&o.forEach(function(t){t.setState()}),r&&r.onMouseOut(),a&&a.hide(e),this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove()),i.axes.forEach(function(t){t.hideCrosshair()}),this.hoverX=i.hoverPoints=i.hoverPoint=null)},b.prototype.runPointActions=function(t,e){var i=this.chart,r=i.tooltip&&i.tooltip.options.enabled?i.tooltip:void 0,n=!!r&&r.shared,o=e||i.hoverPoint,s=o&&o.series||i.hoverSeries;o=(e=this.getHoverData(o,s,i.series,(!t||"touchmove"!==t.type)&&(!!e||s&&s.directTouch&&this.isDirectTouch),n,t)).hoverPoint,s=e.hoverSeries;var d=e.hoverPoints;if(e=s&&s.tooltipOptions.followPointer&&!s.tooltipOptions.split,n=n&&s&&!s.noSharedTooltip,o&&(o!==i.hoverPoint||r&&r.isHidden)){if((i.hoverPoints||[]).forEach(function(t){-1===d.indexOf(t)&&t.setState()}),i.hoverSeries!==s&&s.onMouseOver(),this.applyInactiveState(d),(d||[]).forEach(function(t){t.setState("hover")}),i.hoverPoint&&i.hoverPoint.firePointEvent("mouseOut"),!o.series)return;i.hoverPoints=d,i.hoverPoint=o,o.firePointEvent("mouseOver"),r&&r.refresh(n?d:o,t)}else e&&r&&!r.isHidden&&(o=r.getAnchor([{}],t),i.isInsidePlot(o[0],o[1],{visiblePlotOnly:!0})&&r.updatePosition({plotX:o[0],plotY:o[1]}));this.unDocMouseMove||(this.unDocMouseMove=l(i.container.ownerDocument,"mousemove",function(t){var e=a[b.hoverChartIndex];e&&e.pointer.onDocumentMouseMove(t)}),this.eventsToUnbind.push(this.unDocMouseMove)),i.axes.forEach(function(e){var r,n=I((e.crosshair||{}).snap,!0);n&&((r=i.hoverPoint)&&r.series[e.coll]===e||(r=p(d,function(t){return t.series[e.coll]===e}))),r||!n?e.drawCrosshair(t,r):e.hideCrosshair()})},b.prototype.scaleGroups=function(t,e){var i=this.chart;i.series.forEach(function(r){var n=t||r.getPlotBox();r.xAxis&&r.xAxis.zoomEnabled&&r.group&&(r.group.attr(n),r.markerGroup&&(r.markerGroup.attr(n),r.markerGroup.clip(e?i.clipRect:null)),r.dataLabelsGroup&&r.dataLabelsGroup.attr(n))}),i.clipRect.attr(e||i.clipBox)},b.prototype.setDOMEvents=function(){var t=this,i=this.chart.container,r=i.ownerDocument;i.onmousedown=this.onContainerMouseDown.bind(this),i.onmousemove=this.onContainerMouseMove.bind(this),i.onclick=this.onContainerClick.bind(this),this.eventsToUnbind.push(l(i,"mouseenter",this.onContainerMouseEnter.bind(this))),this.eventsToUnbind.push(l(i,"mouseleave",this.onContainerMouseLeave.bind(this))),b.unbindDocumentMouseUp||(b.unbindDocumentMouseUp=l(r,"mouseup",this.onDocumentMouseUp.bind(this)));for(var n=this.chart.renderTo.parentElement;n&&"BODY"!==n.tagName;)this.eventsToUnbind.push(l(n,"scroll",function(){delete t.chartPosition})),n=n.parentElement;e.hasTouch&&(this.eventsToUnbind.push(l(i,"touchstart",this.onContainerTouchStart.bind(this),{passive:!1})),this.eventsToUnbind.push(l(i,"touchmove",this.onContainerTouchMove.bind(this),{passive:!1})),b.unbindDocumentTouchEnd||(b.unbindDocumentTouchEnd=l(r,"touchend",this.onDocumentTouchEnd.bind(this),{passive:!1})))},b.prototype.setHoverChartIndex=function(){var t=this.chart,i=e.charts[I(b.hoverChartIndex,-1)];i&&i!==t&&i.pointer.onContainerMouseLeave({relatedTarget:!0}),i&&i.mouseIsDown||(b.hoverChartIndex=t.index)},b.prototype.touch=function(t,e){var i=this.chart;if(this.setHoverChartIndex(),1===t.touches.length)if(t=this.normalize(t),i.isInsidePlot(t.chartX-i.plotLeft,t.chartY-i.plotTop,{visiblePlotOnly:!0})&&!i.openMenu){if(e&&this.runPointActions(t),"touchmove"===t.type)var r=!!(e=this.pinchDown)[0]&&4<=Math.sqrt(Math.pow(e[0].chartX-t.chartX,2)+Math.pow(e[0].chartY-t.chartY,2));I(r,!0)&&this.pinch(t)}else e&&this.reset();else 2===t.touches.length&&this.pinch(t)},b.prototype.touchSelect=function(t){return!(!this.chart.options.chart.zoomBySingleTouch||!t.touches||1!==t.touches.length)},b.prototype.zoomOption=function(t){var e=this.chart,i=e.options.chart;e=e.inverted;var r=i.zoomType||"";/touch/.test(t.type)&&(r=I(i.pinchType,r)),this.zoomX=t=/x/.test(r),this.zoomY=i=/y/.test(r),this.zoomHor=t&&!e||i&&e,this.zoomVert=i&&!e||t&&e,this.hasZoom=t||i},b}),e(i,"Core/MSPointer.js",[i["Core/Globals.js"],i["Core/Pointer.js"],i["Core/Utilities.js"]],function(t,e,i){function r(t,i,r,n){var o,s=a[e.hoverChartIndex||0/0];("touch"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_TOUCH)&&s&&(s=s.pointer,n(t),s[i]({type:r,target:t.currentTarget,preventDefault:l,touches:((o=[]).item=function(t){return this[t]},u(m,function(t){o.push({pageX:t.pageX,pageY:t.pageY,target:t.target})}),o)}))}var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=t.charts,s=t.doc,l=t.noop,d=t.win,c=i.addEvent,h=i.css,u=i.objectEach,p=i.removeEvent,m={},f=!!d.PointerEvent;function g(){return null!==e&&e.apply(this,arguments)||this}return o(g,e),g.isRequired=function(){return!(t.hasTouch||!d.PointerEvent&&!d.MSPointerEvent)},g.prototype.batchMSEvents=function(t){t(this.chart.container,f?"pointerdown":"MSPointerDown",this.onContainerPointerDown),t(this.chart.container,f?"pointermove":"MSPointerMove",this.onContainerPointerMove),t(s,f?"pointerup":"MSPointerUp",this.onDocumentPointerUp)},g.prototype.destroy=function(){this.batchMSEvents(p),e.prototype.destroy.call(this)},g.prototype.init=function(t,i){e.prototype.init.call(this,t,i),this.hasZoom&&h(t.container,{"-ms-touch-action":"none","touch-action":"none"})},g.prototype.onContainerPointerDown=function(t){r(t,"onContainerTouchStart","touchstart",function(t){m[t.pointerId]={pageX:t.pageX,pageY:t.pageY,target:t.currentTarget}})},g.prototype.onContainerPointerMove=function(t){r(t,"onContainerTouchMove","touchmove",function(t){m[t.pointerId]={pageX:t.pageX,pageY:t.pageY},m[t.pointerId].target||(m[t.pointerId].target=t.currentTarget)})},g.prototype.onDocumentPointerUp=function(t){r(t,"onDocumentTouchEnd","touchend",function(t){delete m[t.pointerId]})},g.prototype.setDOMEvents=function(){e.prototype.setDOMEvents.call(this),(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(c)},g}),e(i,"Core/Legend/Legend.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/FormatUtilities.js"],i["Core/Globals.js"],i["Core/Series/Point.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o){var a=t.animObject,s=t.setAnimation,l=e.format;t=i.isFirefox;var d=i.marginNames;i=i.win;var c=n.distribute,h=o.addEvent,u=o.createElement,p=o.css,m=o.defined,f=o.discardElement,g=o.find,y=o.fireEvent,v=o.isNumber,I=o.merge,x=o.pick,b=o.relativeLength,C=o.stableSort,T=o.syncTimeout;return n=o.wrap,o=function(){function t(t,e){this.allItems=[],this.contentGroup=this.box=void 0,this.display=!1,this.group=void 0,this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=this.itemMarginBottom=this.itemHeight=this.initialItemY=0,this.options={},this.padding=0,this.pages=[],this.proximate=!1,this.scrollGroup=void 0,this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0,this.chart=t,this.init(t,e)}return t.prototype.init=function(t,e){this.chart=t,this.setOptions(e),e.enabled&&(this.render(),h(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=h(this.chart,"render",function(){this.legend.proximatePositions(),this.legend.positionItems()}):this.unchartrender&&this.unchartrender())},t.prototype.setOptions=function(t){var e=x(t.padding,8);this.options=t,this.chart.styledMode||(this.itemStyle=t.itemStyle,this.itemHiddenStyle=I(this.itemStyle,t.itemHiddenStyle)),this.itemMarginTop=t.itemMarginTop||0,this.itemMarginBottom=t.itemMarginBottom||0,this.padding=e,this.initialItemY=e-5,this.symbolWidth=x(t.symbolWidth,16),this.pages=[],this.proximate="proximate"===t.layout&&!this.chart.inverted,this.baseline=void 0},t.prototype.update=function(t,e){var i=this.chart;this.setOptions(I(!0,this.options,t)),this.destroy(),i.isDirtyLegend=i.isDirtyBox=!0,x(e,!0)&&i.redraw(),y(this,"afterUpdate")},t.prototype.colorizeItem=function(t,e){if(t.legendGroup[e?"removeClass":"addClass"]("highcharts-legend-item-hidden"),!this.chart.styledMode){var i=this.options,r=t.legendItem,n=t.legendLine,o=t.legendSymbol,a=this.itemHiddenStyle.color;i=e?i.itemStyle.color:a;var s=e&&t.color||a,l=t.options&&t.options.marker,d={fill:s};r&&r.css({fill:i,color:i}),n&&n.attr({stroke:s}),o&&(l&&o.isMarker&&(d=t.pointAttribs(),e||(d.stroke=d.fill=a)),o.attr(d))}y(this,"afterColorizeItem",{item:t,visible:e})},t.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this),this.chart.isResizing||this.positionCheckboxes()},t.prototype.positionItem=function(t){var e=this,i=this.options,r=i.symbolPadding,n=!i.rtl,o=t._legendItemPos;i=o[0],o=o[1];var a=t.checkbox,s=t.legendGroup;s&&s.element&&(r={translateX:n?i:this.legendWidth-i-2*r-4,translateY:o},n=function(){y(e,"afterPositionItem",{item:t})},m(s.translateY)?s.animate(r,void 0,n):(s.attr(r),n())),a&&(a.x=i,a.y=o)},t.prototype.destroyItem=function(t){var e=t.checkbox;["legendItem","legendLine","legendSymbol","legendGroup"].forEach(function(e){t[e]&&(t[e]=t[e].destroy())}),e&&f(t.checkbox)},t.prototype.destroy=function(){function t(t){this[t]&&(this[t]=this[t].destroy())}this.getAllItems().forEach(function(e){["legendItem","legendGroup"].forEach(t,e)}),"clipRect up down pager nav box title group".split(" ").forEach(t,this),this.display=null},t.prototype.positionCheckboxes=function(){var t=this.group&&this.group.alignAttr,e=this.clipHeight||this.legendHeight,i=this.titleHeight;if(t){var r=t.translateY;this.allItems.forEach(function(n){var o=n.checkbox;if(o){var a=r+i+o.y+(this.scrollOffset||0)+3;p(o,{left:t.translateX+n.checkboxOffset+o.x-20+"px",top:a+"px",display:this.proximate||a>r-6&&a<r+e-6?"":"none"})}},this)}},t.prototype.renderTitle=function(){var t=this.options,e=this.padding,i=t.title,r=0;i.text&&(this.title||(this.title=this.chart.renderer.label(i.text,e-3,e-4,null,null,null,t.useHTML,null,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(i.style),this.title.add(this.group)),i.width||this.title.css({width:this.maxLegendWidth+"px"}),r=(t=this.title.getBBox()).height,this.offsetWidth=t.width,this.contentGroup.attr({translateY:r})),this.titleHeight=r},t.prototype.setText=function(t){var e=this.options;t.legendItem.attr({text:e.labelFormat?l(e.labelFormat,t,this.chart):e.labelFormatter.call(t)})},t.prototype.renderItem=function(t){var e=this.chart,i=e.renderer,r=this.options,n=this.symbolWidth,o=r.symbolPadding||0,a=this.itemStyle,s=this.itemHiddenStyle,l="horizontal"===r.layout?x(r.itemDistance,20):0,d=!r.rtl,c=!t.series,h=!c&&t.series.drawLegendSymbol?t.series:t,u=h.options,p=this.createCheckboxForItem&&u&&u.showCheckbox,m=r.useHTML,f=t.options.className,g=t.legendItem;u=n+o+l+20*!!p,g||(t.legendGroup=i.g("legend-item").addClass("highcharts-"+h.type+"-series highcharts-color-"+t.colorIndex+(f?" "+f:"")+(c?" highcharts-series-"+t.index:"")).attr({zIndex:1}).add(this.scrollGroup),t.legendItem=g=i.text("",d?n+o:-o,this.baseline||0,m),e.styledMode||g.css(I(t.visible?a:s)),g.attr({align:d?"left":"right",zIndex:2}).add(t.legendGroup),this.baseline||(this.fontMetrics=i.fontMetrics(e.styledMode?12:a.fontSize,g),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,g.attr("y",this.baseline),this.symbolHeight=r.symbolHeight||this.fontMetrics.f,r.squareSymbol&&(this.symbolWidth=x(r.symbolWidth,Math.max(this.symbolHeight,16)),u=this.symbolWidth+o+l+20*!!p,d&&g.attr("x",this.symbolWidth+o))),h.drawLegendSymbol(this,t),this.setItemEvents&&this.setItemEvents(t,g,m)),p&&!t.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(t),this.colorizeItem(t,t.visible),!e.styledMode&&a.width||g.css({width:(r.itemWidth||this.widthOption||e.spacingBox.width)-u+"px"}),this.setText(t),e=g.getBBox(),t.itemWidth=t.checkboxOffset=r.itemWidth||t.legendItemWidth||e.width+u,this.maxItemWidth=Math.max(this.maxItemWidth,t.itemWidth),this.totalItemWidth+=t.itemWidth,this.itemHeight=t.itemHeight=Math.round(t.legendItemHeight||e.height||this.symbolHeight)},t.prototype.layoutItem=function(t){var e=this.options,i=this.padding,r="horizontal"===e.layout,n=t.itemHeight,o=this.itemMarginBottom,a=this.itemMarginTop,s=r?x(e.itemDistance,20):0,l=this.maxLegendWidth;e=e.alignColumns&&this.totalItemWidth>l?this.maxItemWidth:t.itemWidth,r&&this.itemX-i+e>l&&(this.itemX=i,this.lastLineHeight&&(this.itemY+=a+this.lastLineHeight+o),this.lastLineHeight=0),this.lastItemY=a+this.itemY+o,this.lastLineHeight=Math.max(n,this.lastLineHeight),t._legendItemPos=[this.itemX,this.itemY],r?this.itemX+=e:(this.itemY+=a+n+o,this.lastLineHeight=n),this.offsetWidth=this.widthOption||Math.max((r?this.itemX-i-(t.checkbox?0:s):e)+i,this.offsetWidth)},t.prototype.getAllItems=function(){var t=[];return this.chart.series.forEach(function(e){var i=e&&e.options;e&&x(i.showInLegend,!m(i.linkedTo)&&void 0,!0)&&(t=t.concat(e.legendItems||("point"===i.legendType?e.data:e)))}),y(this,"afterGetAllItems",{allItems:t}),t},t.prototype.getAlignment=function(){var t=this.options;return this.proximate?t.align.charAt(0)+"tv":t.floating?"":t.align.charAt(0)+t.verticalAlign.charAt(0)+t.layout.charAt(0)},t.prototype.adjustMargins=function(t,e){var i=this.chart,r=this.options,n=this.getAlignment();n&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(o,a){o.test(n)&&!m(t[a])&&(i[d[a]]=Math.max(i[d[a]],i.legend[(a+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][a]*r[a%2?"x":"y"]+x(r.margin,12)+e[a]+(i.titleOffset[a]||0)))})},t.prototype.proximatePositions=function(){var t=this.chart,e=[],i="left"===this.options.align;this.allItems.forEach(function(r){var n,o=i;if(r.yAxis){r.xAxis.options.reversed&&(o=!o),r.points&&(n=g(o?r.points:r.points.slice(0).reverse(),function(t){return v(t.plotY)})),o=this.itemMarginTop+r.legendItem.getBBox().height+this.itemMarginBottom;var a=r.yAxis.top-t.plotTop;n=r.visible?(n?n.plotY:r.yAxis.height)+(a-.3*o):a+r.yAxis.height,e.push({target:n,size:o,item:r})}},this),c(e,t.plotHeight).forEach(function(e){e.item._legendItemPos&&(e.item._legendItemPos[1]=t.plotTop-t.spacing[0]+e.pos)})},t.prototype.render=function(){var t=this.chart,e=t.renderer,i=this.options,r=this.padding,n=this.getAllItems(),o=this.group,a=this.box;this.itemX=r,this.itemY=this.initialItemY,this.lastItemY=this.offsetWidth=0,this.widthOption=b(i.width,t.spacingBox.width-r);var s=t.spacingBox.width-2*r-i.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(s/=2),this.maxLegendWidth=this.widthOption||s,o||(this.group=o=e.g("legend").addClass(i.className||"").attr({zIndex:7}).add(),this.contentGroup=e.g().attr({zIndex:1}).add(o),this.scrollGroup=e.g().add(this.contentGroup)),this.renderTitle(),C(n,function(t,e){return(t.options&&t.options.legendIndex||0)-(e.options&&e.options.legendIndex||0)}),i.reversed&&n.reverse(),this.allItems=n,this.display=s=!!n.length,this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0,n.forEach(this.renderItem,this),n.forEach(this.layoutItem,this),n=(this.widthOption||this.offsetWidth)+r;var l=this.lastItemY+this.lastLineHeight+this.titleHeight;l=this.handleOverflow(l)+r,a||(this.box=a=e.rect().addClass("highcharts-legend-box").attr({r:i.borderRadius}).add(o),a.isNew=!0),t.styledMode||a.attr({stroke:i.borderColor,"stroke-width":i.borderWidth||0,fill:i.backgroundColor||"none"}).shadow(i.shadow),0<n&&0<l&&(a[a.isNew?"attr":"animate"](a.crisp.call({},{x:0,y:0,width:n,height:l},a.strokeWidth())),a.isNew=!1),a[s?"show":"hide"](),t.styledMode&&"none"===o.getStyle("display")&&(n=l=0),this.legendWidth=n,this.legendHeight=l,s&&this.align(),this.proximate||this.positionItems(),y(this,"afterRender")},t.prototype.align=function(t){void 0===t&&(t=this.chart.spacingBox);var e=this.chart,i=this.options,r=t.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<e.titleOffset[0]?r+=e.titleOffset[0]:/(lbh|cb|rbh)/.test(this.getAlignment())&&0<e.titleOffset[2]&&(r-=e.titleOffset[2]),r!==t.y&&(t=I(t,{y:r})),this.group.align(I(i,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":i.verticalAlign}),!0,t)},t.prototype.handleOverflow=function(t){var e,i,r=this,n=this.chart,o=n.renderer,a=this.options,s=a.y,l="top"===a.verticalAlign,d=this.padding,c=a.maxHeight,h=a.navigation,u=x(h.animation,!0),p=h.arrowSize||12,m=this.pages,f=this.allItems,g=function(t){"number"==typeof t?I.attr({height:t}):I&&(r.clipRect=I.destroy(),r.contentGroup.clip()),r.contentGroup.div&&(r.contentGroup.div.style.clip=t?"rect("+d+"px,9999px,"+(d+t)+"px,0)":"auto")},y=function(t){return r[t]=o.circle(0,0,1.3*p).translate(p/2,p/2).add(v),n.styledMode||r[t].attr("fill","rgba(0,0,0,0.0001)"),r[t]};s=n.spacingBox.height+(l?-s:s)-d;var v=this.nav,I=this.clipRect;return"horizontal"!==a.layout||"middle"===a.verticalAlign||a.floating||(s/=2),c&&(s=Math.min(s,c)),m.length=0,t&&0<s&&t>s&&!1!==h.enabled?(this.clipHeight=e=Math.max(s-20-this.titleHeight-d,0),this.currentPage=x(this.currentPage,1),this.fullHeight=t,f.forEach(function(t,r){var n=t._legendItemPos[1],o=Math.round(t.legendItem.getBBox().height),a=m.length;(!a||n-m[a-1]>e&&(i||n)!==m[a-1])&&(m.push(i||n),a++),t.pageIx=a-1,i&&(f[r-1].pageIx=a-1),r===f.length-1&&n+o-m[a-1]>e&&n!==i&&(m.push(n),t.pageIx=a),n!==i&&(i=n)}),I||(I=r.clipRect=o.clipRect(0,d,9999,0),r.contentGroup.clip(I)),g(e),v||(this.nav=v=o.g().attr({zIndex:1}).add(this.group),this.up=o.symbol("triangle",0,0,p,p).add(v),y("upTracker").on("click",function(){r.scroll(-1,u)}),this.pager=o.text("",15,10).addClass("highcharts-legend-navigation"),n.styledMode||this.pager.css(h.style),this.pager.add(v),this.down=o.symbol("triangle-down",0,0,p,p).add(v),y("downTracker").on("click",function(){r.scroll(1,u)})),r.scroll(0),t=s):v&&(g(),this.nav=v.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0),t},t.prototype.scroll=function(t,e){var i=this,r=this.chart,n=this.pages,o=n.length,l=this.clipHeight,d=this.options.navigation,c=this.pager,h=this.padding,u=this.currentPage+t;u>o&&(u=o),0<u&&(void 0!==e&&s(e,r),this.nav.attr({translateX:h,translateY:l+this.padding+7+this.titleHeight,visibility:"visible"}),[this.up,this.upTracker].forEach(function(t){t.attr({class:1===u?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),c.attr({text:u+"/"+o}),[this.down,this.downTracker].forEach(function(t){t.attr({x:18+this.pager.getBBox().width,class:u===o?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),r.styledMode||(this.up.attr({fill:1===u?d.inactiveColor:d.activeColor}),this.upTracker.css({cursor:1===u?"default":"pointer"}),this.down.attr({fill:u===o?d.inactiveColor:d.activeColor}),this.downTracker.css({cursor:u===o?"default":"pointer"})),this.scrollOffset=-n[u-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=u,this.positionCheckboxes(),T(function(){y(i,"afterScroll",{currentPage:u})},(t=a(x(e,r.renderer.globalAnimation,!0))).duration))},t.prototype.setItemEvents=function(t,e,i){var n=this,o=n.chart.renderer.boxWrapper,a=t instanceof r,s="highcharts-legend-"+(a?"point":"series")+"-active",l=n.chart.styledMode,d=function(e){n.allItems.forEach(function(i){t!==i&&[i].concat(i.linkedSeries||[]).forEach(function(t){t.setState(e,!a)})})};(i?[e,t.legendSymbol]:[t.legendGroup]).forEach(function(i){i&&i.on("mouseover",function(){t.visible&&d("inactive"),t.setState("hover"),t.visible&&o.addClass(s),l||e.css(n.options.itemHoverStyle)}).on("mouseout",function(){n.chart.styledMode||e.css(I(t.visible?n.itemStyle:n.itemHiddenStyle)),d(""),o.removeClass(s),t.setState()}).on("click",function(e){var i=function(){t.setVisible&&t.setVisible(),d(t.visible?"inactive":"")};o.removeClass(s),e={browserEvent:e},t.firePointEvent?t.firePointEvent("legendItemClick",e,i):y(t,"legendItemClick",e,i)})})},t.prototype.createCheckboxForItem=function(t){t.checkbox=u("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:t.selected,defaultChecked:t.selected},this.options.itemCheckboxStyle,this.chart.container),h(t.checkbox,"click",function(e){y(t.series||t,"checkboxClick",{checked:e.target.checked,item:t},function(){t.select()})})},t}(),(/Trident\/7\.0/.test(i.navigator&&i.navigator.userAgent)||t)&&n(o.prototype,"positionItem",function(t,e){var i=this,r=function(){e._legendItemPos&&t.call(i,e)};r(),i.bubbleLegend||setTimeout(r)}),o}),e(i,"Core/Series/SeriesRegistry.js",[i["Core/Globals.js"],i["Core/DefaultOptions.js"],i["Core/Series/Point.js"],i["Core/Utilities.js"]],function(t,e,i,r){var n,o=e.defaultOptions,a=r.error,s=r.extendClass,l=r.merge,d=n||(n={});function c(t,e){var r=o.plotOptions||{},n=e.defaultOptions;e.prototype.pointClass||(e.prototype.pointClass=i),e.prototype.type=t,n&&(r[t]=n),d.seriesTypes[t]=e}return d.seriesTypes=t.seriesTypes,d.getSeries=function(t,e){void 0===e&&(e={});var i=t.options.chart;i=e.type||i.type||i.defaultSeriesType||"";var r=d.seriesTypes[i];return d||a(17,!0,t,{missingModuleFor:i}),"function"==typeof(i=new r).init&&i.init(t,e),i},d.registerSeriesType=c,d.seriesType=function(t,e,r,n,a){var h=o.plotOptions||{};return e=e||"",h[t]=l(h[e],r),c(t,s(d.seriesTypes[e]||function(){},n)),d.seriesTypes[t].prototype.type=t,a&&(d.seriesTypes[t].prototype.pointClass=s(i,a)),d.seriesTypes[t]},n}),e(i,"Core/Chart/Chart.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Axis/Axis.js"],i["Core/FormatUtilities.js"],i["Core/Foundation.js"],i["Core/Globals.js"],i["Core/Legend/Legend.js"],i["Core/MSPointer.js"],i["Core/DefaultOptions.js"],i["Core/Color/Palette.js"],i["Core/Pointer.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Renderer/SVG/SVGRenderer.js"],i["Core/Time.js"],i["Core/Utilities.js"],i["Core/Renderer/HTML/AST.js"]],function(t,e,i,r,n,o,a,s,l,d,c,h,u,p,m,f){var g=t.animate,y=t.animObject,v=t.setAnimation,I=i.numberFormat,x=r.registerEventOptions,b=n.charts,C=n.doc,T=n.marginNames,$=n.svg,w=n.win,S=s.defaultOptions,A=s.defaultTime,_=h.seriesTypes,P=m.addEvent,j=m.attr,k=m.cleanRecursively,O=m.createElement,D=m.css,M=m.defined,L=m.discardElement,E=m.erase,R=m.error,B=m.extend,F=m.find,z=m.fireEvent,N=m.getStyle,H=m.isArray,W=m.isNumber,G=m.isObject,X=m.isString,Y=m.merge,U=m.objectEach,V=m.pick,q=m.pInt,J=m.relativeLength,Q=m.removeEvent,K=m.splat,Z=m.syncTimeout,tt=m.uniqueKey;return t=function(){function t(t,e,i){this.series=this.renderTo=this.renderer=this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.eventOptions=this.container=this.colorCounter=this.clipBox=this.chartWidth=this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0,this.sharedClips={},this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=void 0,this.getArgs(t,e,i)}return t.chart=function(e,i,r){return new t(e,i,r)},t.prototype.getArgs=function(t,e,i){X(t)||t.nodeName?(this.renderTo=t,this.init(e,i)):this.init(t,e)},t.prototype.init=function(t,e){var i=t.plotOptions||{};z(this,"init",{args:arguments},function(){var r=Y(S,t),o=r.chart;U(r.plotOptions,function(t,e){G(t)&&(t.tooltip=i[e]&&Y(i[e].tooltip)||void 0)}),r.tooltip.userOptions=t.chart&&t.chart.forExport&&t.tooltip.userOptions||t.tooltip,this.userOptions=t,this.margin=[],this.spacing=[],this.bounds={h:{},v:{}},this.labelCollectors=[],this.callback=e,this.isResizing=0,this.options=r,this.axes=[],this.series=[],this.time=t.time&&Object.keys(t.time).length?new p(t.time):n.time,this.numberFormatter=o.numberFormatter||I,this.styledMode=o.styledMode,this.hasCartesianSeries=o.showAxes,this.index=b.length,b.push(this),n.chartCount++,x(this,o),this.xAxis=[],this.yAxis=[],this.pointCount=this.colorCounter=this.symbolCounter=0,z(this,"afterInit"),this.firstRender()})},t.prototype.initSeries=function(t){var e=this.options.chart,i=_[e=t.type||e.type||e.defaultSeriesType];return i||R(17,!0,this,{missingModuleFor:e}),"function"==typeof(e=new i).init&&e.init(this,t),e},t.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(t){t.points||t.data||!t.enabledDataSorting||t.setData(t.options.data,!1)})},t.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(t,e){return t.linkedSeries.length||e.linkedSeries.length?e.linkedSeries.length-t.linkedSeries.length:0})},t.prototype.orderSeries=function(t){var e=this.series;t=t||0;for(var i=e.length;t<i;++t)e[t]&&(e[t].index=t,e[t].name=e[t].getName())},t.prototype.isInsidePlot=function(t,e,i){void 0===i&&(i={});var r=this.inverted,n=this.plotBox,o=this.plotLeft,a=this.plotTop,s=this.scrollablePlotBox,l=0,d=0;i.visiblePlotOnly&&this.scrollingContainer&&(l=(d=this.scrollingContainer).scrollLeft,d=d.scrollTop);var c=i.series;if(n=i.visiblePlotOnly&&s||n,t={x:s=i.inverted?e:t,y:e=i.inverted?t:e,isInsidePlot:!0},!i.ignoreX){var h=c&&(r?c.yAxis:c.xAxis)||{pos:o,len:1/0};(s=i.paneCoordinates?h.pos+s:o+s)>=Math.max(l+o,h.pos)&&s<=Math.min(l+o+n.width,h.pos+h.len)||(t.isInsidePlot=!1)}return!i.ignoreY&&t.isInsidePlot&&(r=c&&(r?c.xAxis:c.yAxis)||{pos:a,len:1/0},(i=i.paneCoordinates?r.pos+e:a+e)>=Math.max(d+a,r.pos)&&i<=Math.min(d+a+n.height,r.pos+r.len)||(t.isInsidePlot=!1)),z(this,"afterIsInsidePlot",t),t.isInsidePlot},t.prototype.redraw=function(t){z(this,"beforeRedraw");var e=this.hasCartesianSeries?this.axes:this.colorAxis||[],i=this.series,r=this.pointer,n=this.legend,o=this.userOptions.legend,a=this.renderer,s=a.isHidden(),l=[],d=this.isDirtyBox,c=this.isDirtyLegend;for(this.setResponsive&&this.setResponsive(!1),v(!!this.hasRendered&&t,this),s&&this.temporaryDisplay(),this.layOutTitles(),t=i.length;t--;){var h=i[t];if(h.options.stacking||h.options.centerInCategory){var u=!0;if(h.isDirty){var p=!0;break}}}if(p)for(t=i.length;t--;)(h=i[t]).options.stacking&&(h.isDirty=!0);i.forEach(function(t){t.isDirty&&("point"===t.options.legendType?("function"==typeof t.updateTotals&&t.updateTotals(),c=!0):o&&(o.labelFormatter||o.labelFormat)&&(c=!0)),t.isDirtyData&&z(t,"updatedData")}),c&&n&&n.options.enabled&&(n.render(),this.isDirtyLegend=!1),u&&this.getStacks(),e.forEach(function(t){t.updateNames(),t.setScale()}),this.getMargins(),e.forEach(function(t){t.isDirty&&(d=!0)}),e.forEach(function(t){var e=t.min+","+t.max;t.extKey!==e&&(t.extKey=e,l.push(function(){z(t,"afterSetExtremes",B(t.eventArgs,t.getExtremes())),delete t.eventArgs})),(d||u)&&t.redraw()}),d&&this.drawChartBox(),z(this,"predraw"),i.forEach(function(t){(d||t.isDirty)&&t.visible&&t.redraw(),t.isDirtyData=!1}),r&&r.reset(!0),a.draw(),z(this,"redraw"),z(this,"render"),s&&this.temporaryDisplay(!0),l.forEach(function(t){t.call()})},t.prototype.get=function(t){function e(e){return e.id===t||e.options&&e.options.id===t}for(var i=this.series,r=F(this.axes,e)||F(this.series,e),n=0;!r&&n<i.length;n++)r=F(i[n].points||[],e);return r},t.prototype.getAxes=function(){var t=this,i=this.options,r=i.xAxis=K(i.xAxis||{});i=i.yAxis=K(i.yAxis||{}),z(this,"getAxes"),r.forEach(function(t,e){t.index=e,t.isX=!0}),i.forEach(function(t,e){t.index=e}),r.concat(i).forEach(function(i){new e(t,i)}),z(this,"afterGetAxes")},t.prototype.getSelectedPoints=function(){return this.series.reduce(function(t,e){return e.getPointsCollection().forEach(function(e){V(e.selectedStaging,e.selected)&&t.push(e)}),t},[])},t.prototype.getSelectedSeries=function(){return this.series.filter(function(t){return t.selected})},t.prototype.setTitle=function(t,e,i){this.applyDescription("title",t),this.applyDescription("subtitle",e),this.applyDescription("caption",void 0),this.layOutTitles(i)},t.prototype.applyDescription=function(t,e){var i=this,r="title"===t?{color:l.neutralColor80,fontSize:this.options.isStock?"16px":"18px"}:{color:l.neutralColor60};r=this.options[t]=Y(!this.styledMode&&{style:r},this.options[t],e);var n=this[t];n&&e&&(this[t]=n=n.destroy()),r&&!n&&((n=this.renderer.text(r.text,0,0,r.useHTML).attr({align:r.align,class:"highcharts-"+t,zIndex:r.zIndex||4}).add()).update=function(e){i[({title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"})[t]](e)},this.styledMode||n.css(r.style),this[t]=n)},t.prototype.layOutTitles=function(t){var e=[0,0,0],i=this.renderer,r=this.spacingBox;["title","subtitle","caption"].forEach(function(t){var n,o=this[t],a=this.options[t],s=a.verticalAlign||"top";if(t="title"===t?"top"===s?-3:0:"top"===s?e[0]+2:0,o){this.styledMode||(n=a.style&&a.style.fontSize),n=i.fontMetrics(n,o).b,o.css({width:(a.width||r.width+(a.widthAdjust||0))+"px"});var l=Math.round(o.getBBox(a.useHTML).height);o.align(B({y:"bottom"===s?n:t+n,height:l},a),!1,"spacingBox"),a.floating||("top"===s?e[0]=Math.ceil(e[0]+l):"bottom"===s&&(e[2]=Math.ceil(e[2]+l)))}},this),e[0]&&"top"===(this.options.title.verticalAlign||"top")&&(e[0]+=this.options.title.margin),e[2]&&"bottom"===this.options.caption.verticalAlign&&(e[2]+=this.options.caption.margin);var n=!this.titleOffset||this.titleOffset.join(",")!==e.join(",");this.titleOffset=e,z(this,"afterLayOutTitles"),!this.isDirtyBox&&n&&(this.isDirtyBox=this.isDirtyLegend=n,this.hasRendered&&V(t,!0)&&this.isDirtyBox&&this.redraw())},t.prototype.getChartSize=function(){var t=this.options.chart,e=t.width;t=t.height;var i=this.renderTo;M(e)||(this.containerWidth=N(i,"width")),M(t)||(this.containerHeight=N(i,"height")),this.chartWidth=Math.max(0,e||this.containerWidth||600),this.chartHeight=Math.max(0,J(t,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},t.prototype.temporaryDisplay=function(t){var e=this.renderTo;if(t)for(;e&&e.style;)e.hcOrigStyle&&(D(e,e.hcOrigStyle),delete e.hcOrigStyle),e.hcOrigDetached&&(C.body.removeChild(e),e.hcOrigDetached=!1),e=e.parentNode;else for(;e&&e.style&&(C.body.contains(e)||e.parentNode||(e.hcOrigDetached=!0,C.body.appendChild(e)),("none"===N(e,"display",!1)||e.hcOricDetached)&&(e.hcOrigStyle={display:e.style.display,height:e.style.height,overflow:e.style.overflow},t={display:"block",overflow:"hidden"},e!==this.renderTo&&(t.height=0),D(e,t),e.offsetWidth||e.style.setProperty("display","block","important")),(e=e.parentNode)!==C.body););},t.prototype.setClassName=function(t){this.container.className="highcharts-container "+(t||"")},t.prototype.getContainer=function(){var t,e=this.options,i=e.chart,r=tt(),n=this.renderTo;n||(this.renderTo=n=i.renderTo),X(n)&&(this.renderTo=n=C.getElementById(n)),n||R(13,!0,this);var o=q(j(n,"data-highcharts-chart"));W(o)&&b[o]&&b[o].hasRendered&&b[o].destroy(),j(n,"data-highcharts-chart",this.index),n.innerHTML="",i.skipClone||n.offsetWidth||this.temporaryDisplay(),this.getChartSize(),o=this.chartWidth;var a=this.chartHeight;if(D(n,{overflow:"hidden"}),this.styledMode||(t=B({position:"relative",overflow:"hidden",width:o+"px",height:a+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none","touch-action":"manipulation",outline:"none"},i.style||{})),this.container=r=O("div",{id:r},t,n),this._cursor=r.style.cursor,this.renderer=new(i.renderer||!$?c.getRendererType(i.renderer):u)(r,o,a,void 0,i.forExport,e.exporting&&e.exporting.allowHTML,this.styledMode),v(void 0,this),this.setClassName(i.className),this.styledMode)for(var s in e.defs)this.renderer.definition(e.defs[s]);else this.renderer.setStyle(i.style);this.renderer.chartIndex=this.index,z(this,"afterGetContainer")},t.prototype.getMargins=function(t){var e=this.spacing,i=this.margin,r=this.titleOffset;this.resetMargins(),r[0]&&!M(i[0])&&(this.plotTop=Math.max(this.plotTop,r[0]+e[0])),r[2]&&!M(i[2])&&(this.marginBottom=Math.max(this.marginBottom,r[2]+e[2])),this.legend&&this.legend.display&&this.legend.adjustMargins(i,e),z(this,"getMargins"),t||this.getAxisMargins()},t.prototype.getAxisMargins=function(){var t=this,e=t.axisOffset=[0,0,0,0],i=t.colorAxis,r=t.margin,n=function(t){t.forEach(function(t){t.visible&&t.getOffset()})};t.hasCartesianSeries?n(t.axes):i&&i.length&&n(i),T.forEach(function(i,n){M(r[n])||(t[i]+=e[n])}),t.setChartSize()},t.prototype.reflow=function(t){var e=this,i=e.options.chart,r=e.renderTo,n=M(i.width)&&M(i.height),o=i.width||N(r,"width");i=i.height||N(r,"height"),r=t?t.target:w,delete e.pointer.chartPosition,!n&&!e.isPrinting&&o&&i&&(r===w||r===C)&&((o!==e.containerWidth||i!==e.containerHeight)&&(m.clearTimeout(e.reflowTimeout),e.reflowTimeout=Z(function(){e.container&&e.setSize(void 0,void 0,!1)},100*!!t)),e.containerWidth=o,e.containerHeight=i)},t.prototype.setReflow=function(t){var e=this;!1===t||this.unbindReflow?!1===t&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=P(w,"resize",function(t){e.options&&e.reflow(t)}),P(this,"destroy",this.unbindReflow))},t.prototype.setSize=function(t,e,i){var r=this,n=r.renderer;r.isResizing+=1,v(i,r),i=n.globalAnimation,r.oldChartHeight=r.chartHeight,r.oldChartWidth=r.chartWidth,void 0!==t&&(r.options.chart.width=t),void 0!==e&&(r.options.chart.height=e),r.getChartSize(),r.styledMode||(i?g:D)(r.container,{width:r.chartWidth+"px",height:r.chartHeight+"px"},i),r.setChartSize(!0),n.setSize(r.chartWidth,r.chartHeight,i),r.axes.forEach(function(t){t.isDirty=!0,t.setScale()}),r.isDirtyLegend=!0,r.isDirtyBox=!0,r.layOutTitles(),r.getMargins(),r.redraw(i),r.oldChartHeight=null,z(r,"resize"),Z(function(){r&&z(r,"endResize",null,function(){--r.isResizing})},y(i).duration)},t.prototype.setChartSize=function(t){var e,i,r,n,o=this.inverted,a=this.renderer,s=this.chartWidth,l=this.chartHeight,d=this.options.chart,c=this.spacing,h=this.clipOffset;this.plotLeft=e=Math.round(this.plotLeft),this.plotTop=i=Math.round(this.plotTop),this.plotWidth=r=Math.max(0,Math.round(s-e-this.marginRight)),this.plotHeight=n=Math.max(0,Math.round(l-i-this.marginBottom)),this.plotSizeX=o?n:r,this.plotSizeY=o?r:n,this.plotBorderWidth=d.plotBorderWidth||0,this.spacingBox=a.spacingBox={x:c[3],y:c[0],width:s-c[3]-c[1],height:l-c[0]-c[2]},this.plotBox=a.plotBox={x:e,y:i,width:r,height:n},s=Math.ceil(Math.max(o=2*Math.floor(this.plotBorderWidth/2),h[3])/2),l=Math.ceil(Math.max(o,h[0])/2),this.clipBox={x:s,y:l,width:Math.floor(this.plotSizeX-Math.max(o,h[1])/2-s),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(o,h[2])/2-l))},t||(this.axes.forEach(function(t){t.setAxisSize(),t.setAxisTranslation()}),a.alignElements()),z(this,"afterSetChartSize",{skipAxes:t})},t.prototype.resetMargins=function(){z(this,"resetMargins");var t=this,e=t.options.chart;["margin","spacing"].forEach(function(i){var r=e[i],n=G(r)?r:[r,r,r,r];["Top","Right","Bottom","Left"].forEach(function(r,o){t[i][o]=V(e[i+r],n[o])})}),T.forEach(function(e,i){t[e]=V(t.margin[i],t.spacing[i])}),t.axisOffset=[0,0,0,0],t.clipOffset=[0,0,0,0]},t.prototype.drawChartBox=function(){var t,e=this.options.chart,i=this.renderer,r=this.chartWidth,n=this.chartHeight,o=this.styledMode,a=this.plotBGImage,s=e.backgroundColor,l=e.plotBackgroundColor,d=e.plotBackgroundImage,c=this.plotLeft,h=this.plotTop,u=this.plotWidth,p=this.plotHeight,m=this.plotBox,f=this.clipRect,g=this.clipBox,y=this.chartBackground,v=this.plotBackground,I=this.plotBorder,x="animate";if(y||(this.chartBackground=y=i.rect().addClass("highcharts-background").add(),x="attr"),o)var b=t=y.strokeWidth();else t=(b=e.borderWidth||0)+8*!!e.shadow,s={fill:s||"none"},(b||y["stroke-width"])&&(s.stroke=e.borderColor,s["stroke-width"]=b),y.attr(s).shadow(e.shadow);y[x]({x:t/2,y:t/2,width:r-t-b%2,height:n-t-b%2,r:e.borderRadius}),x="animate",v||(x="attr",this.plotBackground=v=i.rect().addClass("highcharts-plot-background").add()),v[x](m),o||(v.attr({fill:l||"none"}).shadow(e.plotShadow),d&&(a?(d!==a.attr("href")&&a.attr("href",d),a.animate(m)):this.plotBGImage=i.image(d,c,h,u,p).add())),f?f.animate({width:g.width,height:g.height}):this.clipRect=i.clipRect(g),x="animate",I||(x="attr",this.plotBorder=I=i.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add()),o||I.attr({stroke:e.plotBorderColor,"stroke-width":e.plotBorderWidth||0,fill:"none"}),I[x](I.crisp({x:c,y:h,width:u,height:p},-I.strokeWidth())),this.isDirtyBox=!1,z(this,"afterDrawChartBox")},t.prototype.propFromSeries=function(){var t,e,i,r=this,n=r.options.chart,o=r.options.series;["inverted","angular","polar"].forEach(function(a){for(e=_[n.type||n.defaultSeriesType],i=n[a]||e&&e.prototype[a],t=o&&o.length;!i&&t--;)(e=_[o[t].type])&&e.prototype[a]&&(i=!0);r[a]=i})},t.prototype.linkSeries=function(){var t=this,e=t.series;e.forEach(function(t){t.linkedSeries.length=0}),e.forEach(function(e){var i=e.options.linkedTo;X(i)&&(i=":previous"===i?t.series[e.index-1]:t.get(i))&&i.linkedParent!==e&&(i.linkedSeries.push(e),e.linkedParent=i,i.enabledDataSorting&&e.setDataSortingOptions(),e.visible=V(e.options.visible,i.options.visible,e.visible))}),z(this,"afterLinkSeries")},t.prototype.renderSeries=function(){this.series.forEach(function(t){t.translate(),t.render()})},t.prototype.renderLabels=function(){var t=this,e=t.options.labels;e.items&&e.items.forEach(function(i){var r=B(e.style,i.style),n=q(r.left)+t.plotLeft,o=q(r.top)+t.plotTop+12;delete r.left,delete r.top,t.renderer.text(i.html,n,o).attr({zIndex:2}).css(r).add()})},t.prototype.render=function(){var t=this.axes,e=this.colorAxis,i=this.renderer,r=this.options,n=function(t){t.forEach(function(t){t.visible&&t.render()})},a=0;this.setTitle(),this.legend=new o(this,r.legend),this.getStacks&&this.getStacks(),this.getMargins(!0),this.setChartSize(),r=this.plotWidth,t.some(function(t){if(t.horiz&&t.visible&&t.options.labels.enabled&&t.series.length)return a=21,!0});var s=this.plotHeight=Math.max(this.plotHeight-a,0);t.forEach(function(t){t.setScale()}),this.getAxisMargins();var l=1.1<r/this.plotWidth,d=1.05<s/this.plotHeight;(l||d)&&(t.forEach(function(t){(t.horiz&&l||!t.horiz&&d)&&t.setTickInterval(!0)}),this.getMargins()),this.drawChartBox(),this.hasCartesianSeries?n(t):e&&e.length&&n(e),this.seriesGroup||(this.seriesGroup=i.g("series-group").attr({zIndex:3}).add()),this.renderSeries(),this.renderLabels(),this.addCredits(),this.setResponsive&&this.setResponsive(),this.hasRendered=!0},t.prototype.addCredits=function(t){var e=this,i=Y(!0,this.options.credits,t);i.enabled&&!this.credits&&(this.credits=this.renderer.text(i.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){i.href&&(w.location.href=i.href)}).attr({align:i.position.align,zIndex:8}),e.styledMode||this.credits.css(i.style),this.credits.add().align(i.position),this.credits.update=function(t){e.credits=e.credits.destroy(),e.addCredits(t)})},t.prototype.destroy=function(){var t,e=this,i=e.axes,r=e.series,o=e.container,a=o&&o.parentNode;for(z(e,"destroy"),e.renderer.forExport?E(b,e):b[e.index]=void 0,n.chartCount--,e.renderTo.removeAttribute("data-highcharts-chart"),Q(e),t=i.length;t--;)i[t]=i[t].destroy();for(this.scroller&&this.scroller.destroy&&this.scroller.destroy(),t=r.length;t--;)r[t]=r[t].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(t){var i=e[t];i&&i.destroy&&(e[t]=i.destroy())}),o&&(o.innerHTML="",Q(o),a&&L(o)),U(e,function(t,i){delete e[i]})},t.prototype.firstRender=function(){var t=this,e=t.options;(!t.isReadyToRender||t.isReadyToRender())&&(t.getContainer(),t.resetMargins(),t.setChartSize(),t.propFromSeries(),t.getAxes(),(H(e.series)?e.series:[]).forEach(function(e){t.initSeries(e)}),t.linkSeries(),t.setSeriesData(),z(t,"beforeRender"),d&&(a.isRequired()?t.pointer=new a(t,e):t.pointer=new d(t,e)),t.render(),t.pointer.getChartPosition(),t.renderer.imgCount||t.hasLoaded||t.onload(),t.temporaryDisplay(!0))},t.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(t){t&&void 0!==this.index&&t.apply(this,[this])},this),z(this,"load"),z(this,"render"),M(this.index)&&this.setReflow(this.options.chart.reflow),this.hasLoaded=!0},t.prototype.addSeries=function(t,e,i){var r,n=this;return t&&(e=V(e,!0),z(n,"addSeries",{options:t},function(){r=n.initSeries(t),n.isDirtyLegend=!0,n.linkSeries(),r.enabledDataSorting&&r.setData(t.data,!1),z(n,"afterAddSeries",{series:r}),e&&n.redraw(i)})),r},t.prototype.addAxis=function(t,e,i,r){return this.createAxis(e?"xAxis":"yAxis",{axis:t,redraw:i,animation:r})},t.prototype.addColorAxis=function(t,e,i){return this.createAxis("colorAxis",{axis:t,redraw:e,animation:i})},t.prototype.createAxis=function(t,i){return t=new e(this,Y(i.axis,{index:this[t].length,isX:"xAxis"===t})),V(i.redraw,!0)&&this.redraw(i.animation),t},t.prototype.showLoading=function(t){var e=this,i=e.options,r=i.loading,n=function(){o&&D(o,{left:e.plotLeft+"px",top:e.plotTop+"px",width:e.plotWidth+"px",height:e.plotHeight+"px"})},o=e.loadingDiv,a=e.loadingSpan;o||(e.loadingDiv=o=O("div",{className:"highcharts-loading highcharts-loading-hidden"},null,e.container)),a||(e.loadingSpan=a=O("span",{className:"highcharts-loading-inner"},null,o),P(e,"redraw",n)),o.className="highcharts-loading",f.setElementHTML(a,V(t,i.lang.loading,"")),e.styledMode||(D(o,B(r.style,{zIndex:10})),D(a,r.labelStyle),e.loadingShown||(D(o,{opacity:0,display:""}),g(o,{opacity:r.style.opacity||.5},{duration:r.showDuration||0}))),e.loadingShown=!0,n()},t.prototype.hideLoading=function(){var t=this.options,e=this.loadingDiv;e&&(e.className="highcharts-loading highcharts-loading-hidden",this.styledMode||g(e,{opacity:0},{duration:t.loading.hideDuration||100,complete:function(){D(e,{display:"none"})}})),this.loadingShown=!1},t.prototype.update=function(t,e,i,r){var n,o,a=this,s={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},l=t.isResponsiveOptions,d=[];z(a,"update",{options:t}),l||a.setResponsive(!1,!0),t=k(t,a.options),a.userOptions=Y(a.userOptions,t);var c=t.chart;if(c){if(Y(!0,a.options.chart,c),"className"in c&&a.setClassName(c.className),"reflow"in c&&a.setReflow(c.reflow),"inverted"in c||"polar"in c||"type"in c){a.propFromSeries();var h=!0}"alignTicks"in c&&(h=!0),"events"in c&&x(this,c),U(c,function(t,e){-1!==a.propsRequireUpdateSeries.indexOf("chart."+e)&&(n=!0),-1!==a.propsRequireDirtyBox.indexOf(e)&&(a.isDirtyBox=!0),-1!==a.propsRequireReflow.indexOf(e)&&(l?a.isDirtyBox=!0:o=!0)}),!a.styledMode&&c.style&&a.renderer.setStyle(a.options.chart.style||{})}!a.styledMode&&t.colors&&(this.options.colors=t.colors),t.time&&(this.time===A&&(this.time=new p(t.time)),Y(!0,a.options.time,t.time)),U(t,function(e,i){a[i]&&"function"==typeof a[i].update?a[i].update(e,!1):"function"==typeof a[s[i]]?a[s[i]](e):"colors"!==i&&-1===a.collectionsWithUpdate.indexOf(i)&&Y(!0,a.options[i],t[i]),"chart"!==i&&-1!==a.propsRequireUpdateSeries.indexOf(i)&&(n=!0)}),this.collectionsWithUpdate.forEach(function(e){if(t[e]){var r=[];a[e].forEach(function(t,e){t.options.isInternal||r.push(V(t.options.index,e))}),K(t[e]).forEach(function(t,n){var o,s=M(t.id);s&&(o=a.get(t.id)),!o&&a[e]&&(o=a[e][r?r[n]:n])&&s&&M(o.options.id)&&(o=void 0),o&&o.coll===e&&(o.update(t,!1),i&&(o.touched=!0)),!o&&i&&a.collectionsWithInit[e]&&(a.collectionsWithInit[e][0].apply(a,[t].concat(a.collectionsWithInit[e][1]||[]).concat([!1])).touched=!0)}),i&&a[e].forEach(function(t){t.touched||t.options.isInternal?delete t.touched:d.push(t)})}}),d.forEach(function(t){t.chart&&t.remove&&t.remove(!1)}),h&&a.axes.forEach(function(t){t.update({},!1)}),n&&a.getSeriesOrderByLinks().forEach(function(t){t.chart&&t.update({},!1)},this),h=c&&c.width,c=c&&(X(c.height)?J(c.height,h||a.chartWidth):c.height),o||W(h)&&h!==a.chartWidth||W(c)&&c!==a.chartHeight?a.setSize(h,c,r):V(e,!0)&&a.redraw(r),z(a,"afterUpdate",{options:t,redraw:e,animation:r})},t.prototype.setSubtitle=function(t,e){this.applyDescription("subtitle",t),this.layOutTitles(e)},t.prototype.setCaption=function(t,e){this.applyDescription("caption",t),this.layOutTitles(e)},t.prototype.showResetZoom=function(){function t(){e.zoomOut()}var e=this,i=S.lang,r=e.options.chart.resetZoomButton,n=r.theme,o=n.states,a="chart"===r.relativeTo||"spacingBox"===r.relativeTo?null:"scrollablePlotBox";z(this,"beforeShowResetZoom",null,function(){e.resetZoomButton=e.renderer.button(i.resetZoom,null,null,t,n,o&&o.hover).attr({align:r.position.align,title:i.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(r.position,!1,a)}),z(this,"afterShowResetZoom")},t.prototype.zoomOut=function(){z(this,"selection",{resetSelection:!0},this.zoom)},t.prototype.zoom=function(t){var e,i=this,r=i.pointer,n=i.inverted?r.mouseDownX:r.mouseDownY,o=!1;!t||t.resetSelection?(i.axes.forEach(function(t){e=t.zoom()}),r.initiated=!1):t.xAxis.concat(t.yAxis).forEach(function(t){var a=t.axis,s=i.inverted?a.left:a.top,l=i.inverted?s+a.width:s+a.height,d=a.isXAxis,c=!1;(!d&&n>=s&&n<=l||d||!M(n))&&(c=!0),r[d?"zoomX":"zoomY"]&&c&&(e=a.zoom(t.min,t.max),a.displayBtn&&(o=!0))});var a=i.resetZoomButton;o&&!a?i.showResetZoom():!o&&G(a)&&(i.resetZoomButton=a.destroy()),e&&i.redraw(V(i.options.chart.animation,t&&t.animation,100>i.pointCount))},t.prototype.pan=function(t,e){var i=this,r=i.hoverPoints;e="object"==typeof e?e:{enabled:e,type:"x"};var n=i.options.chart,o=i.options.mapNavigation&&i.options.mapNavigation.enabled;n&&n.panning&&(n.panning=e);var a,s=e.type;z(this,"pan",{originalEvent:t},function(){r&&r.forEach(function(t){t.setState()});var e=i.xAxis;"xy"===s?e=e.concat(i.yAxis):"y"===s&&(e=i.yAxis);var n={};e.forEach(function(e){if(e.options.panningEnabled&&!e.options.isInternal){var r=e.horiz,l=t[r?"chartX":"chartY"],d=i[r=r?"mouseDownX":"mouseDownY"],c=e.minPointOffset||0,h=e.reversed&&!i.inverted||!e.reversed&&i.inverted?-1:1,u=e.getExtremes(),p=e.toValue(d-l,!0)+c*h,m=e.toValue(d+e.len-l,!0)-(c*h||e.isXAxis&&e.pointRangePadding||0),f=m<p;h=e.hasVerticalPanning(),d=f?m:p,p=f?p:m;var g=e.panningState;!h||e.isXAxis||g&&!g.isDirty||e.series.forEach(function(t){var e=t.getProcessedData(!0);e=t.getExtremes(e.yData,!0),g||(g={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE}),W(e.dataMin)&&W(e.dataMax)&&(g.startMin=Math.min(V(t.options.threshold,1/0),e.dataMin,g.startMin),g.startMax=Math.max(V(t.options.threshold,-1/0),e.dataMax,g.startMax))}),h=Math.min(V(g&&g.startMin,u.dataMin),c?u.min:e.toValue(e.toPixels(u.min)-e.minPixelPadding)),m=Math.max(V(g&&g.startMax,u.dataMax),c?u.max:e.toValue(e.toPixels(u.max)+e.minPixelPadding)),e.panningState=g,e.isOrdinal||(0<(c=h-d)&&(p+=c,d=h),0<(c=p-m)&&(p=m,d-=c),e.series.length&&d!==u.min&&p!==u.max&&d>=h&&p<=m&&(e.setExtremes(d,p,!1,!1,{trigger:"pan"}),i.resetZoomButton||o||d===h||p===m||!s.match("y")||(i.showResetZoom(),e.displayBtn=!1),a=!0),n[r]=l)}}),U(n,function(t,e){i[e]=t}),a&&i.redraw(!1),D(i.container,{cursor:"move"})})},t}(),B(t.prototype,{callbacks:[],collectionsWithInit:{xAxis:[t.prototype.addAxis,[!0]],yAxis:[t.prototype.addAxis,[!1]],series:[t.prototype.addSeries]},collectionsWithUpdate:["xAxis","yAxis","series"],propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")}),t}),e(i,"Core/Legend/LegendSymbol.js",[i["Core/Utilities.js"]],function(t){var e,i,r=t.merge,n=t.pick;return(e=i||(i={})).drawLineMarker=function(t){var e=this.options,i=t.symbolWidth,o=t.symbolHeight,a=o/2,s=this.chart.renderer,l=this.legendGroup;t=t.baseline-Math.round(.3*t.fontMetrics.b);var d={},c=e.marker;this.chart.styledMode||(d={"stroke-width":e.lineWidth||0},e.dashStyle&&(d.dashstyle=e.dashStyle)),this.legendLine=s.path([["M",0,t],["L",i,t]]).addClass("highcharts-graph").attr(d).add(l),c&&!1!==c.enabled&&i&&(e=Math.min(n(c.radius,a),a),0===this.symbol.indexOf("url")&&(c=r(c,{width:o,height:o}),e=0),this.legendSymbol=i=s.symbol(this.symbol,i/2-e,t-e,2*e,2*e,c).addClass("highcharts-point").add(l),i.isMarker=!0)},e.drawRectangle=function(t,e){var i=t.symbolHeight,r=t.options.squareSymbol;e.legendSymbol=this.chart.renderer.rect(r?(t.symbolWidth-i)/2:0,t.baseline-i+1,r?i:t.symbolWidth,i,n(t.options.symbolRadius,i/2)).addClass("highcharts-point").attr({zIndex:3}).add(e.legendGroup)},i}),e(i,"Core/Series/SeriesDefaults.js",[i["Core/Color/Palette.js"]],function(t){return{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1e3},events:{},marker:{enabledThreshold:2,lineColor:t.backgroundColor,lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:t.neutralColor20,lineColor:t.neutralColor100,lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},align:"center",defer:!0,formatter:function(){var t=this.series.chart.numberFormatter;return"number"!=typeof this.y?"":t(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1e3,findNearestPointBy:"x"}}),e(i,"Core/Series/Series.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/DefaultOptions.js"],i["Core/Foundation.js"],i["Core/Globals.js"],i["Core/Legend/LegendSymbol.js"],i["Core/Color/Palette.js"],i["Core/Series/Point.js"],i["Core/Series/SeriesDefaults.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o,a,s,l,d,c){var h=t.animObject,u=t.setAnimation,p=e.defaultOptions,m=i.registerEventOptions,f=r.hasTouch,g=r.svg,y=r.win,v=l.seriesTypes,I=c.addEvent,x=c.arrayMax,b=c.arrayMin,C=c.clamp,T=c.cleanRecursively,$=c.correctFloat,w=c.defined,S=c.erase,A=c.error,_=c.extend,P=c.find,j=c.fireEvent,k=c.getNestedProperty,O=c.isArray,D=c.isNumber,M=c.isString,L=c.merge,E=c.objectEach,R=c.pick,B=c.removeEvent,F=c.splat,z=c.syncTimeout;return t=function(){function t(){this.zones=this.yAxis=this.xAxis=this.userOptions=this.tooltipOptions=this.processedYData=this.processedXData=this.points=this.options=this.linkedSeries=this.index=this.eventsToUnbind=this.eventOptions=this.data=this.chart=this._i=void 0}return t.prototype.init=function(t,e){j(this,"init",{options:e});var i,r=this,n=t.series;this.eventsToUnbind=[],r.chart=t,r.options=r.setOptions(e),e=r.options,r.linkedSeries=[],r.bindAxes(),_(r,{name:e.name,state:"",visible:!1!==e.visible,selected:!0===e.selected}),m(this,e);var o=e.events;(o&&o.click||e.point&&e.point.events&&e.point.events.click||e.allowPointSelect)&&(t.runTrackerClick=!0),r.getColor(),r.getSymbol(),r.parallelArrays.forEach(function(t){r[t+"Data"]||(r[t+"Data"]=[])}),r.isCartesian&&(t.hasCartesianSeries=!0),n.length&&(i=n[n.length-1]),r._i=R(i&&i._i,-1)+1,r.opacity=r.options.opacity,t.orderSeries(this.insert(n)),e.dataSorting&&e.dataSorting.enabled?r.setDataSortingOptions():r.points||r.data||r.setData(e.data,!1),j(this,"afterInit")},t.prototype.is=function(t){return v[t]&&this instanceof v[t]},t.prototype.insert=function(t){var e,i=this.options.index;if(D(i)){for(e=t.length;e--;)if(i>=R(t[e].options.index,t[e]._i)){t.splice(e+1,0,this);break}-1===e&&t.unshift(this),e+=1}else t.push(this);return R(e,t.length-1)},t.prototype.bindAxes=function(){var t,e=this,i=e.options,r=e.chart;j(this,"bindAxes",null,function(){(e.axisTypes||[]).forEach(function(n){var o=0;r[n].forEach(function(r){t=r.options,(i[n]!==o||t.isInternal)&&(void 0===i[n]||i[n]!==t.id)&&(void 0!==i[n]||0!==t.index)||(e.insert(r.series),e[n]=r,r.isDirty=!0),t.isInternal||o++}),e[n]||e.optionalAxis===n||A(18,!0,r)})}),j(this,"afterBindAxes")},t.prototype.updateParallelArrays=function(t,e){var i=t.series,r=arguments,n=D(e)?function(r){var n="y"===r&&i.toYData?i.toYData(t):t[r];i[r+"Data"][e]=n}:function(t){Array.prototype[e].apply(i[t+"Data"],Array.prototype.slice.call(r,2))};i.parallelArrays.forEach(n)},t.prototype.hasData=function(){return this.visible&&void 0!==this.dataMax&&void 0!==this.dataMin||this.visible&&this.yData&&0<this.yData.length},t.prototype.autoIncrement=function(t){var e,i=this.options,r=i.pointIntervalUnit,n=i.relativeXValue,o=this.chart.time,a=this.xIncrement;return(a=R(a,i.pointStart,0),this.pointInterval=e=R(this.pointInterval,i.pointInterval,1),n&&D(t)&&(e*=t),r&&(i=new o.Date(a),"day"===r?o.set("Date",i,o.get("Date",i)+e):"month"===r?o.set("Month",i,o.get("Month",i)+e):"year"===r&&o.set("FullYear",i,o.get("FullYear",i)+e),e=i.getTime()-a),n&&D(t))?a+e:(this.xIncrement=a+e,a)},t.prototype.setDataSortingOptions=function(){var t=this.options;_(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1}),w(t.pointRange)||(t.pointRange=1)},t.prototype.setOptions=function(t){var e=this.chart,i=e.options,r=i.plotOptions,n=e.userOptions||{};t=L(t),e=e.styledMode;var o={plotOptions:r,userOptions:t};j(this,"setOptions",o);var a=o.plotOptions[this.type],s=n.plotOptions||{};return this.userOptions=o.userOptions,n=L(a,r.series,n.plotOptions&&n.plotOptions[this.type],t),this.tooltipOptions=L(p.tooltip,p.plotOptions.series&&p.plotOptions.series.tooltip,p.plotOptions[this.type].tooltip,i.tooltip.userOptions,r.series&&r.series.tooltip,r[this.type].tooltip,t.tooltip),this.stickyTracking=R(t.stickyTracking,s[this.type]&&s[this.type].stickyTracking,s.series&&s.series.stickyTracking,!!this.tooltipOptions.shared&&!this.noSharedTooltip||n.stickyTracking),null===a.marker&&delete n.marker,this.zoneAxis=n.zoneAxis,r=this.zones=(n.zones||[]).slice(),(n.negativeColor||n.negativeFillColor)&&!n.zones&&(i={value:n[this.zoneAxis+"Threshold"]||n.threshold||0,className:"highcharts-negative"},e||(i.color=n.negativeColor,i.fillColor=n.negativeFillColor),r.push(i)),r.length&&w(r[r.length-1].value)&&r.push(e?{}:{color:this.color,fillColor:this.fillColor}),j(this,"afterSetOptions",{options:n}),n},t.prototype.getName=function(){return R(this.options.name,"Series "+(this.index+1))},t.prototype.getCyclic=function(t,e,i){var r=this.chart,n=this.userOptions,o=t+"Index",a=t+"Counter",s=i?i.length:R(r.options.chart[t+"Count"],r[t+"Count"]);if(!e){var l=R(n[o],n["_"+o]);w(l)||(r.series.length||(r[a]=0),n["_"+o]=l=r[a]%s,r[a]+=1),i&&(e=i[l])}void 0!==l&&(this[o]=l),this[t]=e},t.prototype.getColor=function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.color=o.neutralColor20:this.getCyclic("color",this.options.color||p.plotOptions[this.type].color,this.chart.options.colors)},t.prototype.getPointsCollection=function(){return(this.hasGroupedData?this.points:this.data)||[]},t.prototype.getSymbol=function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},t.prototype.findPointIndex=function(t,e){var i,r,n=t.id,o=t.x,s=this.points,l=this.options.dataSorting;if(n)(l=this.chart.get(n))instanceof a&&(i=l);else if((this.linkedParent||this.enabledDataSorting||this.options.relativeXValue)&&(i=function(e){return!e.touched&&e.index===t.index},l&&l.matchByName?i=function(e){return!e.touched&&e.name===t.name}:this.options.relativeXValue&&(i=function(e){return!e.touched&&e.options.x===t.x}),!(i=P(s,i))))return;if(i){var d=i&&i.index;void 0!==d&&(r=!0)}return void 0===d&&D(o)&&(d=this.xData.indexOf(o,e)),-1!==d&&void 0!==d&&this.cropped&&(d=d>=this.cropStart?d-this.cropStart:d),!r&&D(d)&&s[d]&&s[d].touched&&(d=void 0),d},t.prototype.updateData=function(t,e){var i,r,n,o=this.options,a=o.dataSorting,s=this.points,l=[],d=this.requireSorting,c=t.length===s.length,h=!0;if(this.xIncrement=null,t.forEach(function(t,e){var r=w(t)&&this.pointClass.prototype.optionsToObject.call({series:this},t)||{},h=r.x;r.id||D(h)?(-1===(r=this.findPointIndex(r,n))||void 0===r?l.push(t):s[r]&&t!==o.data[r]?(s[r].update(t,!1,null,!1),s[r].touched=!0,d&&(n=r+1)):s[r]&&(s[r].touched=!0),(!c||e!==r||a&&a.enabled||this.hasDerivedData)&&(i=!0)):l.push(t)},this),i)for(t=s.length;t--;)(r=s[t])&&!r.touched&&r.remove&&r.remove(!1,e);else!c||a&&a.enabled?h=!1:(t.forEach(function(t,e){t!==s[e].y&&s[e].update&&s[e].update(t,!1,null,!1)}),l.length=0);return s.forEach(function(t){t&&(t.touched=!1)}),!!h&&(l.forEach(function(t){this.addPoint(t,!1,null,null,!1)},this),null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=x(this.xData),this.autoIncrement()),!0)},t.prototype.setData=function(t,e,i,r){var n=this,o=n.points,a=o&&o.length||0,s=n.options,l=n.chart,d=s.dataSorting,c=n.xAxis,h=s.turboThreshold,u=this.xData,p=this.yData,m=n.pointArrayMap;m=m&&m.length;var f,g=s.keys,y=0,v=1,I=null,x=(t=t||[]).length;if(e=R(e,!0),d&&d.enabled&&(t=this.sortData(t)),!1!==r&&x&&a&&!n.cropped&&!n.hasGroupedData&&n.visible&&!n.isSeriesBoosting&&(f=this.updateData(t,i)),!f){if(n.xIncrement=null,n.colorCounter=0,this.parallelArrays.forEach(function(t){n[t+"Data"].length=0}),h&&x>h)if(D(I=n.getFirstValidPoint(t)))for(i=0;i<x;i++)u[i]=this.autoIncrement(),p[i]=t[i];else if(O(I))if(m)for(i=0;i<x;i++)r=t[i],u[i]=r[0],p[i]=r.slice(1,m+1);else for(g&&(y=g.indexOf("x"),v=g.indexOf("y"),y=0<=y?y:0,v=0<=v?v:1),i=0;i<x;i++)r=t[i],u[i]=r[y],p[i]=r[v];else A(12,!1,l);else for(i=0;i<x;i++)void 0!==t[i]&&(r={series:n},n.pointClass.prototype.applyOptions.apply(r,[t[i]]),n.updateParallelArrays(r,i));for(p&&M(p[0])&&A(14,!0,l),n.data=[],n.options.data=n.userOptions.data=t,i=a;i--;)o[i]&&o[i].destroy&&o[i].destroy();c&&(c.minRange=c.userMinRange),n.isDirty=l.isDirtyBox=!0,n.isDirtyData=!!o,i=!1}"point"===s.legendType&&(this.processData(),this.generatePoints()),e&&l.redraw(i)},t.prototype.sortData=function(t){var e=this,i=e.options.dataSorting.sortKey||"y",r=function(t,e){return w(e)&&t.pointClass.prototype.optionsToObject.call({series:t},e)||{}};return t.forEach(function(i,n){t[n]=r(e,i),t[n].index=n},this),t.concat().sort(function(t,e){return t=k(i,t),(e=k(i,e))<t?-1:+(e>t)}).forEach(function(t,e){t.x=e},this),e.linkedSeries&&e.linkedSeries.forEach(function(e){var i=e.options,n=i.data;i.dataSorting&&i.dataSorting.enabled||!n||(n.forEach(function(i,o){n[o]=r(e,i),t[o]&&(n[o].x=t[o].x,n[o].index=o)}),e.setData(n,!1))}),t},t.prototype.getProcessedData=function(t){var e=this.xAxis,i=this.options,r=i.cropThreshold,n=t||this.getExtremesFromAll||i.getExtremesFromAll,o=this.isCartesian;t=e&&e.val2lin,i=!(!e||!e.logarithmic);var a=0,s=this.xData,l=this.yData,d=this.requireSorting,c=!1,h=s.length;if(e){var u=(c=e.getExtremes()).min,p=c.max;c=e.categories&&!e.names.length}if(o&&this.sorted&&!n&&(!r||h>r||this.forceCrop)){if(s[h-1]<u||s[0]>p)s=[],l=[];else if(this.yData&&(s[0]<u||s[h-1]>p)){var m=this.cropData(this.xData,this.yData,u,p);s=m.xData,l=m.yData,a=m.start,m=!0}}for(r=s.length||1;--r;)if(0<(e=i?t(s[r])-t(s[r-1]):s[r]-s[r-1])&&(void 0===f||e<f))var f=e;else 0>e&&d&&!c&&(A(15,!1,this.chart),d=!1);return{xData:s,yData:l,cropped:m,cropStart:a,closestPointRange:f}},t.prototype.processData=function(t){var e=this.xAxis;if(this.isCartesian&&!this.isDirty&&!e.isDirty&&!this.yAxis.isDirty&&!t)return!1;t=this.getProcessedData(),this.cropped=t.cropped,this.cropStart=t.cropStart,this.processedXData=t.xData,this.processedYData=t.yData,this.closestPointRange=this.basePointRange=t.closestPointRange},t.prototype.cropData=function(t,e,i,r,n){var o,a=t.length,s=0,l=a;for(n=R(n,this.cropShoulder),o=0;o<a;o++)if(t[o]>=i){s=Math.max(0,o-n);break}for(i=o;i<a;i++)if(t[i]>r){l=i+n;break}return{xData:t.slice(s,l),yData:e.slice(s,l),start:s,end:l}},t.prototype.generatePoints=function(){var t=this.options,e=t.data,i=this.processedXData,r=this.processedYData,n=this.pointClass,o=i.length,a=this.cropStart||0,s=this.hasGroupedData,l=t.keys,d=[];t=t.dataGrouping&&t.dataGrouping.groupAll?a:0;var c,h,u=this.data;if(!u&&!s){var p=[];p.length=e.length,u=this.data=p}for(l&&s&&(this.options.keys=!1),h=0;h<o;h++){if(p=a+h,s){var m=(new n).init(this,[i[h]].concat(F(r[h])));m.dataGroup=this.groupMap[t+h],m.dataGroup.options&&(m.options=m.dataGroup.options,_(m,m.dataGroup.options),delete m.dataLabels)}else(m=u[p])||void 0===e[p]||(u[p]=m=(new n).init(this,e[p],i[h]));m&&(m.index=s?t+h:p,d[h]=m)}if(this.options.keys=l,u&&(o!==(c=u.length)||s))for(h=0;h<c;h++)h!==a||s||(h+=o),u[h]&&(u[h].destroyElements(),u[h].plotX=void 0);this.data=u,this.points=d,j(this,"afterGeneratePoints")},t.prototype.getXExtremes=function(t){return{min:b(t),max:x(t)}},t.prototype.getExtremes=function(t,e){var i=this.xAxis,r=this.yAxis,n=this.processedXData||this.xData,o=[],a=this.requireSorting?this.cropShoulder:0;r=!!r&&r.positiveValuesOnly;var s,l=0,d=0,c=0,h=(t=t||this.stackedYData||this.processedYData||[]).length;if(i){var u=i.getExtremes();l=u.min,d=u.max}for(s=0;s<h;s++){var p=n[s],m=(D(u=t[s])||O(u))&&(u.length||0<u||!r);if(p=e||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!i||(n[s+a]||p)>=l&&(n[s-a]||p)<=d,m&&p)if(m=u.length)for(;m--;)D(u[m])&&(o[c++]=u[m]);else o[c++]=u}return j(this,"afterGetExtremes",{dataExtremes:t={dataMin:b(o),dataMax:x(o)}}),t},t.prototype.applyExtremes=function(){var t=this.getExtremes();return this.dataMin=t.dataMin,this.dataMax=t.dataMax,t},t.prototype.getFirstValidPoint=function(t){for(var e=t.length,i=0,r=null;null===r&&i<e;)r=t[i],i++;return r},t.prototype.translate=function(){this.processedXData||this.processData(),this.generatePoints();var t,e,i=this.options,r=i.stacking,n=this.xAxis,o=n.categories,a=this.enabledDataSorting,s=this.yAxis,l=this.points,d=l.length,c=!!this.modifyValue,h=this.pointPlacementToXValue(),u=!!h,p=i.threshold,m=i.startFromThreshold?p:0,f=this.zoneAxis||"y",g=Number.MAX_VALUE;for(t=0;t<d;t++){var y=l[t],v=y.x,I=void 0,x=void 0,b=y.y,T=y.low,S=r&&s.stacking&&s.stacking.stacks[(this.negStacks&&b<(m?0:p)?"-":"")+this.stackKey];if((s.positiveValuesOnly&&!s.validatePositiveValue(b)||n.positiveValuesOnly&&!n.validatePositiveValue(v))&&(y.isNull=!0),y.plotX=e=$(C(n.translate(v,0,0,0,1,h,"flags"===this.type),-1e5,1e5)),r&&this.visible&&S&&S[v]){var A=this.getStackIndicator(A,v,this.index);y.isNull||(x=(I=S[v]).points[A.key])}if(O(x)&&(T=x[0],b=x[1],T===m&&A.key===S[v].base&&(T=R(D(p)&&p,s.min)),s.positiveValuesOnly&&0>=T&&(T=null),y.total=y.stackTotal=I.total,y.percentage=I.total&&y.y/I.total*100,y.stackY=b,this.irregularWidths||I.setOffset(this.pointXOffset||0,this.barW||0)),y.yBottom=w(T)?C(s.translate(T,0,1,0,1),-1e5,1e5):null,c&&(b=this.modifyValue(b,y)),y.plotY=void 0,D(b)&&void 0!==(I=s.translate(b,!1,!0,!1,!0))&&(y.plotY=C(I,-1e5,1e5)),y.isInside=this.isPointInside(y),y.clientX=u?$(n.translate(v,0,0,0,1,h)):e,y.negative=y[f]<(i[f+"Threshold"]||p||0),y.category=o&&void 0!==o[y.x]?o[y.x]:y.x,!y.isNull&&!1!==y.visible){void 0!==_&&(g=Math.min(g,Math.abs(e-_)));var _=e}y.zone=this.zones.length&&y.getZone(),!y.graphic&&this.group&&a&&(y.isNew=!0)}this.closestPointRangePx=g,j(this,"afterTranslate")},t.prototype.getValidPoints=function(t,e,i){var r=this.chart;return(t||this.points||[]).filter(function(t){return(!e||!!r.isInsidePlot(t.plotX,t.plotY,{inverted:r.inverted}))&&!1!==t.visible&&(i||!t.isNull)})},t.prototype.getClipBox=function(t,e){var i=this.options,r=this.chart,n=r.inverted,o=this.xAxis,a=o&&this.yAxis,s=r.options.chart.scrollablePlotArea||{};return t&&!1===i.clip&&a?t=n?{y:-r.chartWidth+a.len+a.pos,height:r.chartWidth,width:r.chartHeight,x:-r.chartHeight+o.len+o.pos}:{y:-a.pos,height:r.chartHeight,width:r.chartWidth,x:-o.pos}:(t=this.clipBox||r.clipBox,e&&(t.width=r.plotSizeX,t.x=(r.scrollablePixelsX||0)*(s.scrollPositionX||0))),e?{width:t.width,x:t.x}:t},t.prototype.getSharedClipKey=function(t){if(this.sharedClipKey)return this.sharedClipKey;var e=[t&&t.duration,t&&t.easing,t&&t.defer,this.getClipBox(t).height,this.options.xAxis,this.options.yAxis].join();return(!1!==this.options.clip||t)&&(this.sharedClipKey=e),e},t.prototype.setClip=function(t){var e=this.chart,i=this.options,r=e.renderer,n=e.inverted,o=this.clipBox,a=this.getClipBox(t),s=this.getSharedClipKey(t),l=e.sharedClips[s],d=e.sharedClips[s+"m"];t&&(a.width=0,n&&(a.x=e.plotHeight+(!1!==i.clip?0:e.plotTop))),l?e.hasLoaded||l.attr(a):(t&&(e.sharedClips[s+"m"]=d=r.clipRect(n?(e.plotSizeX||0)+99:-99,n?-e.plotLeft:-e.plotTop,99,n?e.chartWidth:e.chartHeight)),e.sharedClips[s]=l=r.clipRect(a),l.count={length:0}),t&&!l.count[this.index]&&(l.count[this.index]=!0,l.count.length+=1),(!1!==i.clip||t)&&(this.group.clip(t||o?l:e.clipRect),this.markerGroup.clip(d)),t||(l.count[this.index]&&(delete l.count[this.index],--l.count.length),0===l.count.length&&(o||(e.sharedClips[s]=l.destroy()),d&&(e.sharedClips[s+"m"]=d.destroy())))},t.prototype.animate=function(t){var e=this.chart,i=h(this.options.animation),r=this.sharedClipKey;if(t)this.setClip(i);else if(r){t=e.sharedClips[r],r=e.sharedClips[r+"m"];var n=this.getClipBox(i,!0);t&&t.animate(n,i),r&&r.animate({width:n.width+99,x:n.x-99*!e.inverted},i)}},t.prototype.afterAnimate=function(){this.setClip(),j(this,"afterAnimate"),this.finishedAnimating=!0},t.prototype.drawPoints=function(){var t,e,i=this.points,r=this.chart,n=this.options.marker,o=this[this.specialGroup]||this.markerGroup,a=this.xAxis,s=R(n.enabled,!a||!!a.isRadial||null,this.closestPointRangePx>=n.enabledThreshold*n.radius);if(!1!==n.enabled||this._hasPointMarkers)for(t=0;t<i.length;t++){var l=i[t],d=(e=l.graphic)?"animate":"attr",c=l.marker||{},h=!!l.marker;if((s&&void 0===c.enabled||c.enabled)&&!l.isNull&&!1!==l.visible){var u=R(c.symbol,this.symbol,"rect"),p=this.markerAttribs(l,l.selected&&"select");this.enabledDataSorting&&(l.startXPos=a.reversed?-(p.width||0):a.width);var m=!1!==l.isInside;e?e[m?"show":"hide"](m).animate(p):m&&(0<(p.width||0)||l.hasImage)&&(l.graphic=e=r.renderer.symbol(u,p.x,p.y,p.width,p.height,h?c:n).add(o),this.enabledDataSorting&&r.hasRendered&&(e.attr({x:l.startXPos}),d="animate")),e&&"animate"===d&&e[m?"show":"hide"](m).animate(p),e&&!r.styledMode&&e[d](this.pointAttribs(l,l.selected&&"select")),e&&e.addClass(l.getClassName(),!0)}else e&&(l.graphic=e.destroy())}},t.prototype.markerAttribs=function(t,e){var i=this.options,r=i.marker,n=t.marker||{},o=n.symbol||r.symbol,a=R(n.radius,r.radius);return e&&(r=r.states[e],a=R((e=n.states&&n.states[e])&&e.radius,r&&r.radius,a+(r&&r.radiusPlus||0))),t.hasImage=o&&0===o.indexOf("url"),t.hasImage&&(a=0),t={x:i.crisp?Math.floor(t.plotX-a):t.plotX-a,y:t.plotY-a},a&&(t.width=t.height=2*a),t},t.prototype.pointAttribs=function(t,e){var i=this.options.marker,r=t&&t.options,n=r&&r.marker||{},o=r&&r.color,a=t&&t.color,s=t&&t.zone&&t.zone.color,l=this.color;return t=R(n.lineWidth,i.lineWidth),r=1,l=o||s||a||l,o=n.fillColor||i.fillColor||l,a=n.lineColor||i.lineColor||l,e=e||"normal",i=i.states[e],t=R((e=n.states&&n.states[e]||{}).lineWidth,i.lineWidth,t+R(e.lineWidthPlus,i.lineWidthPlus,0)),o=e.fillColor||i.fillColor||o,{stroke:a=e.lineColor||i.lineColor||a,"stroke-width":t,fill:o,opacity:r=R(e.opacity,i.opacity,r)}},t.prototype.destroy=function(t){var e,i,r,n=this,o=n.chart,a=/AppleWebKit\/533/.test(y.navigator.userAgent),s=n.data||[];for(j(n,"destroy"),this.removeEvents(t),(n.axisTypes||[]).forEach(function(t){(r=n[t])&&r.series&&(S(r.series,n),r.isDirty=r.forceRedraw=!0)}),n.legendItem&&n.chart.legend.destroyItem(n),e=s.length;e--;)(i=s[e])&&i.destroy&&i.destroy();n.clips&&n.clips.forEach(function(t){return t.destroy()}),c.clearTimeout(n.animationTimeout),E(n,function(t,e){t instanceof d&&!t.survive&&t[a&&"group"===e?"hide":"destroy"]()}),o.hoverSeries===n&&(o.hoverSeries=void 0),S(o.series,n),o.orderSeries(),E(n,function(e,i){t&&"hcEvents"===i||delete n[i]})},t.prototype.applyZones=function(){var t,e,i,r,n,o,a,s,l=this,d=this.chart,c=d.renderer,h=this.zones,u=this.clips||[],p=this.graph,m=this.area,f=Math.max(d.chartWidth,d.chartHeight),g=this[(this.zoneAxis||"y")+"Axis"],y=d.inverted,v=!1;if(h.length&&(p||m)&&g&&void 0!==g.min){var I=g.reversed,x=g.horiz;p&&!this.showLine&&p.hide(),m&&m.hide();var b=g.getExtremes();h.forEach(function(h,T){t=I?x?d.plotWidth:0:x?0:g.toPixels(b.min)||0,t=C(R(e,t),0,f),e=C(Math.round(g.toPixels(R(h.value,b.max),!0)||0),0,f),v&&(t=e=g.toPixels(b.max)),r=Math.abs(t-e),n=Math.min(t,e),o=Math.max(t,e),g.isXAxis?(i={x:y?o:n,y:0,width:r,height:f},x||(i.x=d.plotHeight-i.x)):(i={x:0,y:y?o:n,width:f,height:r},x&&(i.y=d.plotWidth-i.y)),y&&c.isVML&&(i=g.isXAxis?{x:0,y:I?n:o,height:i.width,width:d.chartWidth}:{x:i.y-d.plotLeft-d.spacingBox.x,y:0,width:i.height,height:d.chartHeight}),u[T]?u[T].animate(i):u[T]=c.clipRect(i),a=l["zone-area-"+T],s=l["zone-graph-"+T],p&&s&&s.clip(u[T]),m&&a&&a.clip(u[T]),v=h.value>b.max,l.resetZones&&0===e&&(e=void 0)}),this.clips=u}else l.visible&&(p&&p.show(!0),m&&m.show(!0))},t.prototype.invertGroups=function(t){function e(){["group","markerGroup"].forEach(function(e){i[e]&&(r.renderer.isVML&&i[e].attr({width:i.yAxis.len,height:i.xAxis.len}),i[e].width=i.yAxis.len,i[e].height=i.xAxis.len,i[e].invert(!i.isRadialSeries&&t))})}var i=this,r=i.chart;i.xAxis&&(i.eventsToUnbind.push(I(r,"resize",e)),e(),i.invertGroups=e)},t.prototype.plotGroup=function(t,e,i,r,n){var o=this[t],a=!o;return i={visibility:i,zIndex:r||.1},void 0===this.opacity||this.chart.styledMode||"inactive"===this.state||(i.opacity=this.opacity),a&&(this[t]=o=this.chart.renderer.g().add(n)),o.addClass("highcharts-"+e+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(w(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(o.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0),o.attr(i)[a?"attr":"animate"](this.getPlotBox()),o},t.prototype.getPlotBox=function(){var t=this.chart,e=this.xAxis,i=this.yAxis;return t.inverted&&(e=i,i=this.xAxis),{translateX:e?e.left:t.plotLeft,translateY:i?i.top:t.plotTop,scaleX:1,scaleY:1}},t.prototype.removeEvents=function(t){t||B(this),this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(t){t()}),this.eventsToUnbind.length=0)},t.prototype.render=function(){var t=this,e=t.chart,i=t.options,r=h(i.animation),n=t.visible?"inherit":"hidden",o=i.zIndex,a=t.hasRendered,s=e.seriesGroup,l=e.inverted,d=!t.finishedAnimating&&e.renderer.isSVG&&r.duration;j(this,"render");var c=t.plotGroup("group","series",n,o,s);t.markerGroup=t.plotGroup("markerGroup","markers",n,o,s),d&&t.animate&&t.animate(!0),c.inverted=!!R(t.invertible,t.isCartesian)&&l,t.drawGraph&&(t.drawGraph(),t.applyZones()),t.visible&&t.drawPoints(),t.drawDataLabels&&t.drawDataLabels(),t.redrawPoints&&t.redrawPoints(),t.drawTracker&&!1!==t.options.enableMouseTracking&&t.drawTracker(),t.invertGroups(l),!1===i.clip||t.sharedClipKey||a||c.clip(e.clipRect),d&&t.animate&&t.animate(),a||(d&&r.defer&&(d+=r.defer),t.animationTimeout=z(function(){t.afterAnimate()},d||0)),t.isDirty=!1,t.hasRendered=!0,j(t,"afterRender")},t.prototype.redraw=function(){var t=this.chart,e=this.isDirty||this.isDirtyData,i=this.group,r=this.xAxis,n=this.yAxis;i&&(t.inverted&&i.attr({width:t.plotWidth,height:t.plotHeight}),i.animate({translateX:R(r&&r.left,t.plotLeft),translateY:R(n&&n.top,t.plotTop)})),this.translate(),this.render(),e&&delete this.kdTree},t.prototype.searchPoint=function(t,e){var i=this.xAxis,r=this.yAxis,n=this.chart.inverted;return this.searchKDTree({clientX:n?i.len-t.chartY+i.pos:t.chartX-i.pos,plotY:n?r.len-t.chartX+r.pos:t.chartY-r.pos},e,t)},t.prototype.buildKDTree=function(t){this.buildingKdTree=!0;var e=this,i=-1<e.options.findNearestPointBy.indexOf("y")?2:1;delete e.kdTree,z(function(){e.kdTree=function t(i,r,n){var o=i&&i.length;if(o){var a=e.kdAxisArray[r%n];return i.sort(function(t,e){return t[a]-e[a]}),{point:i[o=Math.floor(o/2)],left:t(i.slice(0,o),r+1,n),right:t(i.slice(o+1),r+1,n)}}}(e.getValidPoints(null,!e.directTouch),i,i),e.buildingKdTree=!1},e.options.kdNow||t&&"touchstart"===t.type?0:1)},t.prototype.searchKDTree=function(t,e,i){var r=this,n=this.kdAxisArray[0],o=this.kdAxisArray[1],a=e?"distX":"dist";if(e=-1<r.options.findNearestPointBy.indexOf("y")?2:1,this.kdTree||this.buildingKdTree||this.buildKDTree(i),this.kdTree)return function t(e,i,s,l){var d=i.point,c=r.kdAxisArray[s%l],h=d,u=w(e[n])&&w(d[n])?Math.pow(e[n]-d[n],2):null,p=w(e[o])&&w(d[o])?Math.pow(e[o]-d[o],2):null;return d.dist=w(p=(u||0)+(p||0))?Math.sqrt(p):Number.MAX_VALUE,d.distX=w(u)?Math.sqrt(u):Number.MAX_VALUE,p=0>(c=e[c]-d[c])?"left":"right",u=0>c?"right":"left",i[p]&&(h=(p=t(e,i[p],s+1,l))[a]<h[a]?p:d),i[u]&&Math.sqrt(c*c)<h[a]&&(h=(e=t(e,i[u],s+1,l))[a]<h[a]?e:h),h}(t,this.kdTree,e,e)},t.prototype.pointPlacementToXValue=function(){var t=this.options,e=t.pointRange,i=this.xAxis;return"between"===(t=t.pointPlacement)&&(t=i.reversed?-.5:.5),D(t)?t*(e||i.pointRange):0},t.prototype.isPointInside=function(t){return void 0!==t.plotY&&void 0!==t.plotX&&0<=t.plotY&&t.plotY<=this.yAxis.len&&0<=t.plotX&&t.plotX<=this.xAxis.len},t.prototype.drawTracker=function(){var t=this,e=t.options,i=e.trackByArea,r=[].concat(i?t.areaPath:t.graphPath),n=t.chart,o=n.pointer,a=n.renderer,s=n.options.tooltip.snap,l=t.tracker,d=function(e){n.hoverSeries!==t&&t.onMouseOver()},c="rgba(192,192,192,"+(g?1e-4:.002)+")";l?l.attr({d:r}):t.graph&&(t.tracker=a.path(r).attr({visibility:t.visible?"visible":"hidden",zIndex:2}).addClass(i?"highcharts-tracker-area":"highcharts-tracker-line").add(t.group),n.styledMode||t.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:c,fill:i?c:"none","stroke-width":t.graph.strokeWidth()+(i?0:2*s)}),[t.tracker,t.markerGroup,t.dataLabelsGroup].forEach(function(t){t&&(t.addClass("highcharts-tracker").on("mouseover",d).on("mouseout",function(t){o.onTrackerMouseOut(t)}),e.cursor&&!n.styledMode&&t.css({cursor:e.cursor}),f)&&t.on("touchstart",d)})),j(this,"afterDrawTracker")},t.prototype.addPoint=function(t,e,i,r,n){var o=this.options,a=this.data,s=this.chart,l=this.xAxis;l=l&&l.hasNames&&l.names;var d,c=o.data,h=this.xData;e=R(e,!0);var u={series:this};this.pointClass.prototype.applyOptions.apply(u,[t]);var p=u.x,m=h.length;if(this.requireSorting&&p<h[m-1])for(d=!0;m&&h[m-1]>p;)m--;this.updateParallelArrays(u,"splice",m,0,0),this.updateParallelArrays(u,m),l&&u.name&&(l[p]=u.name),c.splice(m,0,t),d&&(this.data.splice(m,0,null),this.processData()),"point"===o.legendType&&this.generatePoints(),i&&(a[0]&&a[0].remove?a[0].remove(!1):(a.shift(),this.updateParallelArrays(u,"shift"),c.shift())),!1!==n&&j(this,"addPoint",{point:u}),this.isDirtyData=this.isDirty=!0,e&&s.redraw(r)},t.prototype.removePoint=function(t,e,i){var r=this,n=r.data,o=n[t],a=r.points,s=r.chart,l=function(){a&&a.length===n.length&&a.splice(t,1),n.splice(t,1),r.options.data.splice(t,1),r.updateParallelArrays(o||{series:r},"splice",t,1),o&&o.destroy(),r.isDirty=!0,r.isDirtyData=!0,e&&s.redraw()};u(i,s),e=R(e,!0),o?o.firePointEvent("remove",null,l):l()},t.prototype.remove=function(t,e,i,r){function n(){o.destroy(r),a.isDirtyLegend=a.isDirtyBox=!0,a.linkSeries(),R(t,!0)&&a.redraw(e)}var o=this,a=o.chart;!1!==i?j(o,"remove",null,n):n()},t.prototype.update=function(t,e){j(this,"update",{options:t=T(t,this.userOptions)});var i,r=this,n=r.chart,o=r.userOptions,a=r.initialType||r.type,s=n.options.plotOptions,l=v[a].prototype,d=r.finishedAnimating&&{animation:!1},c={},h=["eventOptions","navigatorSeries","baseSeries"],u=t.type||o.type||n.options.chart.type,p=!(this.hasDerivedData||u&&u!==this.type||void 0!==t.pointStart||void 0!==t.pointInterval||void 0!==t.relativeXValue||r.hasOptionChanged("dataGrouping")||r.hasOptionChanged("pointStart")||r.hasOptionChanged("pointInterval")||r.hasOptionChanged("pointIntervalUnit")||r.hasOptionChanged("keys"));if(u=u||a,p&&(h.push("data","isDirtyData","points","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","clips","nodes","layout","mapMap","mapData","minY","maxY","minX","maxX"),!1!==t.visible&&h.push("area","graph"),r.parallelArrays.forEach(function(t){h.push(t+"Data")}),t.data&&(t.dataSorting&&_(r.options.dataSorting,t.dataSorting),this.setData(t.data,!1))),t=L(o,d,{index:void 0===o.index?r.index:o.index,pointStart:R(s&&s.series&&s.series.pointStart,o.pointStart,r.xData[0])},!p&&{data:r.options.data},t),p&&t.data&&(t.data=r.options.data),(h=["group","markerGroup","dataLabelsGroup","transformGroup"].concat(h)).forEach(function(t){h[t]=r[t],delete r[t]}),s=!1,v[u]){if(s=u!==r.type,r.remove(!1,!1,!1,!0),s)if(Object.setPrototypeOf)Object.setPrototypeOf(r,v[u].prototype);else{for(i in d=Object.hasOwnProperty.call(r,"hcEvents")&&r.hcEvents,l)r[i]=void 0;_(r,v[u].prototype),d?r.hcEvents=d:delete r.hcEvents}}else A(17,!0,n,{missingModuleFor:u});if(h.forEach(function(t){r[t]=h[t]}),r.init(n,t),p&&this.points){var m=r.options;!1===m.visible?(c.graphic=1,c.dataLabel=1):r._hasPointLabels||(t=m.marker,l=m.dataLabels,t&&(!1===t.enabled||(o.marker&&o.marker.symbol)!==t.symbol)&&(c.graphic=1),l&&!1===l.enabled&&(c.dataLabel=1)),this.points.forEach(function(t){t&&t.series&&(t.resolveColor(),Object.keys(c).length&&t.destroyElements(c),!1===m.showInLegend&&t.legendItem&&n.legend.destroyItem(t))},this)}r.initialType=a,n.linkSeries(),s&&r.linkedSeries.length&&(r.isDirtyData=!0),j(this,"afterUpdate"),R(e,!0)&&n.redraw(!!p&&void 0)},t.prototype.setName=function(t){this.name=this.options.name=this.userOptions.name=t,this.chart.isDirtyLegend=!0},t.prototype.hasOptionChanged=function(t){var e=this.options[t],i=this.chart.options.plotOptions,r=this.userOptions[t];return r?e!==r:e!==R(i&&i[this.type]&&i[this.type][t],i&&i.series&&i.series[t],e)},t.prototype.onMouseOver=function(){var t=this.chart,e=t.hoverSeries;t.pointer.setHoverChartIndex(),e&&e!==this&&e.onMouseOut(),this.options.events.mouseOver&&j(this,"mouseOver"),this.setState("hover"),t.hoverSeries=this},t.prototype.onMouseOut=function(){var t=this.options,e=this.chart,i=e.tooltip,r=e.hoverPoint;e.hoverSeries=null,r&&r.onMouseOut(),this&&t.events.mouseOut&&j(this,"mouseOut"),!i||this.stickyTracking||i.shared&&!this.noSharedTooltip||i.hide(),e.series.forEach(function(t){t.setState("",!0)})},t.prototype.setState=function(t,e){var i=this,r=i.options,n=i.graph,o=r.inactiveOtherPoints,a=r.states,s=R(a[t||"normal"]&&a[t||"normal"].animation,i.chart.options.chart.animation),l=r.lineWidth,d=0,c=r.opacity;if(t=t||"",i.state!==t&&([i.group,i.markerGroup,i.dataLabelsGroup].forEach(function(e){e&&(i.state&&e.removeClass("highcharts-series-"+i.state),t&&e.addClass("highcharts-series-"+t))}),i.state=t,!i.chart.styledMode)){if(a[t]&&!1===a[t].enabled)return;if(t&&(l=a[t].lineWidth||l+(a[t].lineWidthPlus||0),c=R(a[t].opacity,c)),n&&!n.dashstyle)for(r={"stroke-width":l},n.animate(r,s);i["zone-graph-"+d];)i["zone-graph-"+d].animate(r,s),d+=1;o||[i.group,i.markerGroup,i.dataLabelsGroup,i.labelBySeries].forEach(function(t){t&&t.animate({opacity:c},s)})}e&&o&&i.points&&i.setAllPointsToState(t||void 0)},t.prototype.setAllPointsToState=function(t){this.points.forEach(function(e){e.setState&&e.setState(t)})},t.prototype.setVisible=function(t,e){var i=this,r=i.chart,n=i.legendItem,o=r.options.chart.ignoreHiddenSeries,a=i.visible,s=(i.visible=t=i.options.visible=i.userOptions.visible=void 0===t?!a:t)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(t){i[t]&&i[t][s]()}),(r.hoverSeries===i||(r.hoverPoint&&r.hoverPoint.series)===i)&&i.onMouseOut(),n&&r.legend.colorizeItem(i,t),i.isDirty=!0,i.options.stacking&&r.series.forEach(function(t){t.options.stacking&&t.visible&&(t.isDirty=!0)}),i.linkedSeries.forEach(function(e){e.setVisible(t,!1)}),o&&(r.isDirtyBox=!0),j(i,s),!1!==e&&r.redraw()},t.prototype.show=function(){this.setVisible(!0)},t.prototype.hide=function(){this.setVisible(!1)},t.prototype.select=function(t){this.selected=t=this.options.selected=void 0===t?!this.selected:t,this.checkbox&&(this.checkbox.checked=t),j(this,t?"select":"unselect")},t.prototype.shouldShowTooltip=function(t,e,i){return void 0===i&&(i={}),i.series=this,i.visiblePlotOnly=!0,this.chart.isInsidePlot(t,e,i)},t.defaultOptions=s,t}(),_(t.prototype,{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,drawLegendSymbol:n.drawLineMarker,isCartesian:!0,kdAxisArray:["clientX","plotY"],parallelArrays:["x","y"],pointClass:a,requireSorting:!0,sorted:!0}),l.series=t,t}),e(i,"Extensions/ScrollablePlotArea.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Axis/Axis.js"],i["Core/Chart/Chart.js"],i["Core/Series/Series.js"],i["Core/Renderer/RendererRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o){var a=t.stop,s=o.addEvent,l=o.createElement,d=o.merge,c=o.pick;s(i,"afterSetChartSize",function(t){var i=this.options.chart.scrollablePlotArea,r=i&&i.minWidth;if(i=i&&i.minHeight,!this.renderer.forExport){if(r){if(this.scrollablePixelsX=r=Math.max(0,r-this.chartWidth)){this.scrollablePlotBox=this.renderer.scrollablePlotBox=d(this.plotBox),this.plotBox.width=this.plotWidth+=r,this.inverted?this.clipBox.height+=r:this.clipBox.width+=r;var n={1:{name:"right",value:r}}}}else i&&(this.scrollablePixelsY=r=Math.max(0,i-this.chartHeight))&&(this.scrollablePlotBox=this.renderer.scrollablePlotBox=d(this.plotBox),this.plotBox.height=this.plotHeight+=r,this.inverted?this.clipBox.width+=r:this.clipBox.height+=r,n={2:{name:"bottom",value:r}});n&&!t.skipAxes&&this.axes.forEach(function(t){n[t.side]?t.getPlotLinePath=function(){var i=n[t.side].name,r=this[i];this[i]=r-n[t.side].value;var o=e.prototype.getPlotLinePath.apply(this,arguments);return this[i]=r,o}:(t.setAxisSize(),t.setAxisTranslation())})}}),s(i,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()}),i.prototype.setUpScrolling=function(){var t=this,e={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(e.overflowX="auto"),this.scrollablePixelsY&&(e.overflowY="auto"),this.scrollingParent=l("div",{className:"highcharts-scrolling-parent"},{position:"relative"},this.renderTo),this.scrollingContainer=l("div",{className:"highcharts-scrolling"},e,this.scrollingParent),s(this.scrollingContainer,"scroll",function(){t.pointer&&delete t.pointer.chartPosition}),this.innerContainer=l("div",{className:"highcharts-inner-container"},null,this.scrollingContainer),this.innerContainer.appendChild(this.container),this.setUpScrolling=null},i.prototype.moveFixedElements=function(){var t,e=this.container,i=this.fixedRenderer,r=".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" ");this.scrollablePixelsX&&!this.inverted?t=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted||this.scrollablePixelsY&&!this.inverted?t=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(t=".highcharts-yaxis"),t&&r.push(t+":not(.highcharts-radial-axis)",t+"-labels:not(.highcharts-radial-axis-labels)"),r.forEach(function(t){[].forEach.call(e.querySelectorAll(t),function(t){(t.namespaceURI===i.SVG_NS?i.box:i.box.parentNode).appendChild(t),t.style.pointerEvents="auto"})})},i.prototype.applyFixed=function(){var t=!this.fixedDiv,e=this.options.chart,i=e.scrollablePlotArea,r=n.getRendererType();t?(this.fixedDiv=l("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:(e.style&&e.style.zIndex||0)+2,top:0},null,!0),this.scrollingContainer&&this.scrollingContainer.parentNode.insertBefore(this.fixedDiv,this.scrollingContainer),this.renderTo.style.overflow="visible",this.fixedRenderer=e=new r(this.fixedDiv,this.chartWidth,this.chartHeight,this.options.chart.style),this.scrollableMask=e.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":c(i.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),s(this,"afterShowResetZoom",this.moveFixedElements),s(this,"afterDrilldown",this.moveFixedElements),s(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight),(this.scrollableDirty||t)&&(this.scrollableDirty=!1,this.moveFixedElements()),e=this.chartWidth+(this.scrollablePixelsX||0),r=this.chartHeight+(this.scrollablePixelsY||0),a(this.container),this.container.style.width=e+"px",this.container.style.height=r+"px",this.renderer.boxWrapper.attr({width:e,height:r,viewBox:["0 0",e,r].join(" ")}),this.chartBackground.attr({width:e,height:r}),this.scrollingContainer.style.height=this.chartHeight+"px",t&&(i.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*i.scrollPositionX),i.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*i.scrollPositionY)),r=this.axisOffset,t=this.plotTop-r[0]-1,i=this.plotLeft-r[3]-1,e=this.plotTop+this.plotHeight+r[2]+1,r=this.plotLeft+this.plotWidth+r[1]+1;var o=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),d=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);t=this.scrollablePixelsX?[["M",0,t],["L",this.plotLeft-1,t],["L",this.plotLeft-1,e],["L",0,e],["Z"],["M",o,t],["L",this.chartWidth,t],["L",this.chartWidth,e],["L",o,e],["Z"]]:this.scrollablePixelsY?[["M",i,0],["L",i,this.plotTop-1],["L",r,this.plotTop-1],["L",r,0],["Z"],["M",i,d],["L",i,this.chartHeight],["L",r,this.chartHeight],["L",r,d],["Z"]]:[["M",0,0]],"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:t})},s(e,"afterInit",function(){this.chart.scrollableDirty=!0}),s(r,"show",function(){this.chart.scrollableDirty=!0})}),e(i,"Core/Axis/StackingAxis.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Axis/Axis.js"],i["Core/Utilities.js"]],function(t,e,i){var r,n=t.getDeferredAnimation,o=i.addEvent,a=i.destroyObjectProperties,s=i.fireEvent,l=i.isNumber,d=i.objectEach;return!function(t){function e(){var t=this.stacking;if(t){var e=t.stacks;d(e,function(t,i){a(t),e[i]=null}),t&&t.stackTotalGroup&&t.stackTotalGroup.destroy()}}function i(){this.stacking||(this.stacking=new c(this))}var r=[];t.compose=function(t){return -1===r.indexOf(t)&&(r.push(t),o(t,"init",i),o(t,"destroy",e)),t};var c=function(){function t(t){this.oldStacks={},this.stacks={},this.stacksTouched=0,this.axis=t}return t.prototype.buildStacks=function(){var t,e=this.axis,i=e.series,r=e.options.reversedStacks,n=i.length;if(!e.isXAxis){for(this.usePercentage=!1,t=n;t--;){var o=i[r?t:n-t-1];o.setStackedPoints(),o.setGroupedPoints()}for(t=0;t<n;t++)i[t].modifyStacks();s(e,"afterBuildStacks")}},t.prototype.cleanStacks=function(){if(!this.axis.isXAxis){if(this.oldStacks)var t=this.stacks=this.oldStacks;d(t,function(t){d(t,function(t){t.cumulative=t.total})})}},t.prototype.resetStacks=function(){var t=this,e=t.stacks;t.axis.isXAxis||d(e,function(e){d(e,function(i,r){l(i.touched)&&i.touched<t.stacksTouched?(i.destroy(),delete e[r]):(i.total=null,i.cumulative=null)})})},t.prototype.renderStackTotals=function(){var t=this.axis,e=t.chart,i=e.renderer,r=this.stacks;t=n(e,t.options.stackLabels&&t.options.stackLabels.animation||!1);var o=this.stackTotalGroup=this.stackTotalGroup||i.g("stack-labels").attr({visibility:"visible",zIndex:6,opacity:0}).add();o.translate(e.plotLeft,e.plotTop),d(r,function(t){d(t,function(t){t.render(o)})}),o.animate({opacity:1},t)},t}();t.Additions=c}(r||(r={})),r}),e(i,"Extensions/Stacking.js",[i["Core/Axis/Axis.js"],i["Core/Chart/Chart.js"],i["Core/FormatUtilities.js"],i["Core/Globals.js"],i["Core/Series/Series.js"],i["Core/Axis/StackingAxis.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o,a){var s=i.format,l=a.correctFloat,d=a.defined,c=a.destroyObjectProperties,h=a.isArray,u=a.isNumber,p=a.objectEach,m=a.pick,f=function(){function t(t,e,i,r,n){var o=t.chart.inverted;this.axis=t,this.isNegative=i,this.options=e=e||{},this.x=r,this.total=null,this.points={},this.hasValidPoints=!1,this.stack=n,this.rightCliff=this.leftCliff=0,this.alignOptions={align:e.align||(o?i?"left":"right":"center"),verticalAlign:e.verticalAlign||(o?"middle":i?"bottom":"top"),y:e.y,x:e.x},this.textAlign=e.textAlign||(o?i?"right":"left":"center")}return t.prototype.destroy=function(){c(this,this.axis)},t.prototype.render=function(t){var e=this.axis.chart,i=this.options,r=i.format;r=r?s(r,this,e):i.formatter.call(this),this.label?this.label.attr({text:r,visibility:"hidden"}):(this.label=e.renderer.label(r,null,null,i.shape,null,null,i.useHTML,!1,"stack-labels"),r={r:i.borderRadius||0,text:r,rotation:i.rotation,padding:m(i.padding,5),visibility:"hidden"},e.styledMode||(r.fill=i.backgroundColor,r.stroke=i.borderColor,r["stroke-width"]=i.borderWidth,this.label.css(i.style)),this.label.attr(r),this.label.added||this.label.add(t)),this.label.labelrank=e.plotSizeY},t.prototype.setOffset=function(t,e,i,r,o){var a=this.axis,s=a.chart;r=a.translate(a.stacking.usePercentage?100:r||this.total,0,0,0,1),i=a.translate(i||0),i=d(r)&&Math.abs(r-i),t=m(o,s.xAxis[0].translate(this.x))+t,a=d(r)&&this.getStackBox(s,this,t,r,e,i,a),e=this.label,i=this.isNegative,t="justify"===m(this.options.overflow,"justify");var l=this.textAlign;e&&a&&(o=e.getBBox(),r=e.padding,l="left"===l?s.inverted?-r:r:"right"===l?o.width:s.inverted&&"center"===l?o.width/2:s.inverted?i?o.width+r:-r:o.width/2,i=s.inverted?o.height/2:i?-r:o.height,this.alignOptions.x=m(this.options.x,0),this.alignOptions.y=m(this.options.y,0),a.x-=l,a.y-=i,e.align(this.alignOptions,null,a),s.isInsidePlot(e.alignAttr.x+l-this.alignOptions.x,e.alignAttr.y+i-this.alignOptions.y)?e.show():(e.alignAttr.y=-9999,t=!1),t&&n.prototype.justifyDataLabel.call(this.axis,e,this.alignOptions,e.alignAttr,o,a),e.attr({x:e.alignAttr.x,y:e.alignAttr.y}),m(!t&&this.options.crop,!0)&&((s=u(e.x)&&u(e.y)&&s.isInsidePlot(e.x-r+e.width,e.y)&&s.isInsidePlot(e.x+r,e.y))||e.hide()))},t.prototype.getStackBox=function(t,e,i,r,n,o,a){var s=e.axis.reversed,l=t.inverted,d=a.height+a.pos-(l?t.plotLeft:t.plotTop);return e=e.isNegative&&!s||!e.isNegative&&s,{x:l?e?r-a.right:r-o+a.pos-t.plotLeft:i+t.xAxis[0].transB-t.plotLeft,y:l?a.height-i-n:e?d-r-o:d-r,width:l?o:n,height:l?n:o}},t}();return e.prototype.getStacks=function(){var t=this,e=t.inverted;t.yAxis.forEach(function(t){t.stacking&&t.stacking.stacks&&t.hasVisibleSeries&&(t.stacking.oldStacks=t.stacking.stacks)}),t.series.forEach(function(i){var r=i.xAxis&&i.xAxis.options||{};i.options.stacking&&(!0===i.visible||!1===t.options.chart.ignoreHiddenSeries)&&(i.stackKey=[i.type,m(i.options.stack,""),e?r.top:r.left,e?r.height:r.width].join())})},o.compose(t),n.prototype.setGroupedPoints=function(){var t=this.yAxis.stacking;this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length?n.prototype.setStackedPoints.call(this,"group"):t&&p(t.stacks,function(e,i){"group"===i.slice(-5)&&(p(e,function(t){return t.destroy()}),delete t.stacks[i])})},n.prototype.setStackedPoints=function(t){var e=t||this.options.stacking;if(e&&(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var i=this.processedXData,r=this.processedYData,n=[],o=r.length,a=this.options,s=a.threshold,c=m(a.startFromThreshold&&s,0);a=a.stack;var u,p,g="-"+(t=t?this.type+","+e:this.stackKey),y=this.negStacks,v=this.yAxis,I=v.stacking.stacks,x=v.stacking.oldStacks;for(v.stacking.stacksTouched+=1,p=0;p<o;p++){var b=i[p],C=r[p],T=this.getStackIndicator(T,b,this.index),$=T.key,w=(u=y&&C<(c?0:s))?g:t;I[w]||(I[w]={}),I[w][b]||(x[w]&&x[w][b]?(I[w][b]=x[w][b],I[w][b].total=null):I[w][b]=new f(v,v.options.stackLabels,u,b,a)),w=I[w][b],null!==C?(w.points[$]=w.points[this.index]=[m(w.cumulative,c)],d(w.cumulative)||(w.base=$),w.touched=v.stacking.stacksTouched,0<T.index&&!1===this.singleStacks&&(w.points[$][0]=w.points[this.index+","+b+",0"][0])):w.points[$]=w.points[this.index]=null,"percent"===e?(u=u?t:g,y&&I[u]&&I[u][b]?(u=I[u][b],w.total=u.total=Math.max(u.total,w.total)+Math.abs(C)||0):w.total=l(w.total+(Math.abs(C)||0))):"group"===e?(h(C)&&(C=C[0]),null!==C&&(w.total=(w.total||0)+1)):w.total=l(w.total+(C||0)),w.cumulative="group"===e?(w.total||1)-1:m(w.cumulative,c)+(C||0),null!==C&&(w.points[$].push(w.cumulative),n[p]=w.cumulative,w.hasValidPoints=!0)}"percent"===e&&(v.stacking.usePercentage=!0),"group"!==e&&(this.stackedYData=n),v.stacking.oldStacks={}}},n.prototype.modifyStacks=function(){var t,e=this,i=e.stackKey,r=e.yAxis.stacking.stacks,n=e.processedXData,o=e.options.stacking;e[o+"Stacker"]&&[i,"-"+i].forEach(function(i){for(var a,s,l=n.length;l--;)a=n[l],t=e.getStackIndicator(t,a,e.index,i),(s=(a=r[i]&&r[i][a])&&a.points[t.key])&&e[o+"Stacker"](s,a,l)})},n.prototype.percentStacker=function(t,e,i){e=e.total?100/e.total:0,t[0]=l(t[0]*e),t[1]=l(t[1]*e),this.stackedYData[i]=t[1]},n.prototype.getStackIndicator=function(t,e,i,r){return!d(t)||t.x!==e||r&&t.key!==r?t={x:e,index:0,key:r}:t.index++,t.key=[i,e,t.index].join(),t},r.StackItem=f,r.StackItem}),e(i,"Series/Line/LineSeries.js",[i["Core/Color/Palette.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=r.defined,s=r.merge;return r=function(i){function r(){var t=null!==i&&i.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return o(r,i),r.prototype.drawGraph=function(){var e=this,i=this.options,r=(this.gappedPath||this.getGraphPath).call(this),n=this.chart.styledMode,o=[["graph","highcharts-graph"]];n||o[0].push(i.lineColor||this.color||t.neutralColor20,i.dashStyle),(o=e.getZonesGraphs(o)).forEach(function(t,o){var a=t[0],s=e[a],l=s?"animate":"attr";s?(s.endX=e.preventGraphAnimation?null:r.xMap,s.animate({d:r})):r.length&&(e[a]=s=e.chart.renderer.path(r).addClass(t[1]).attr({zIndex:1}).add(e.group)),s&&!n&&(a={stroke:t[2],"stroke-width":i.lineWidth,fill:e.fillGraph&&e.color||"none"},t[3]?a.dashstyle=t[3]:"square"!==i.linecap&&(a["stroke-linecap"]=a["stroke-linejoin"]="round"),s[l](a).shadow(2>o&&i.shadow)),s&&(s.startX=r.xMap,s.isArea=r.isArea)})},r.prototype.getGraphPath=function(t,e,i){var r,n=this,o=n.options,s=[],l=[],d=o.step,c=(t=t||n.points).reversed;return c&&t.reverse(),(d=({right:1,center:2})[d]||d&&3)&&c&&(d=4-d),(t=this.getValidPoints(t,!1,!(o.connectNulls&&!e&&!i))).forEach(function(c,h){var u=c.plotX,p=c.plotY,m=t[h-1];(c.leftCliff||m&&m.rightCliff)&&!i&&(r=!0),c.isNull&&!a(e)&&0<h?r=!o.connectNulls:c.isNull&&!e?r=!0:(0===h||r?h=[["M",c.plotX,c.plotY]]:n.getPointSpline?h=[n.getPointSpline(t,c,h)]:d?(h=1===d?[["L",m.plotX,p]]:2===d?[["L",(m.plotX+u)/2,m.plotY],["L",(m.plotX+u)/2,p]]:[["L",u,m.plotY]]).push(["L",u,p]):h=[["L",u,p]],l.push(c.x),d&&(l.push(c.x),2===d&&l.push(c.x)),s.push.apply(s,h),r=!1)}),s.xMap=l,n.graphPath=s},r.prototype.getZonesGraphs=function(t){return this.zones.forEach(function(e,i){i=["zone-graph-"+i,"highcharts-graph highcharts-zone-graph-"+i+" "+(e.className||"")],this.chart.styledMode||i.push(e.color||this.color,e.dashStyle||this.options.dashStyle),t.push(i)},this),t},r.defaultOptions=s(e.defaultOptions,{}),r}(e),i.registerSeriesType("line",r),r}),e(i,"Series/Area/AreaSeries.js",[i["Core/Color/Color.js"],i["Core/Legend/LegendSymbol.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=t.parse,s=i.seriesTypes.line;t=r.extend;var l=r.merge,d=r.objectEach,c=r.pick;return t((r=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.options=void 0,e.points=void 0,e}return o(e,t),e.prototype.drawGraph=function(){this.areaPath=[],t.prototype.drawGraph.apply(this);var e=this,i=this.areaPath,r=this.options,n=[["area","highcharts-area",this.color,r.fillColor]];this.zones.forEach(function(t,i){n.push(["zone-area-"+i,"highcharts-area highcharts-zone-area-"+i+" "+t.className,t.color||e.color,t.fillColor||r.fillColor])}),n.forEach(function(t){var n=t[0],o=e[n],s=o?"animate":"attr",l={};o?(o.endX=e.preventGraphAnimation?null:i.xMap,o.animate({d:i})):(l.zIndex=0,(o=e[n]=e.chart.renderer.path(i).addClass(t[1]).add(e.group)).isArea=!0),e.chart.styledMode||(l.fill=c(t[3],a(t[2]).setOpacity(c(r.fillOpacity,.75)).get())),o[s](l),o.startX=i.xMap,o.shiftUnit=r.step?2:1})},e.prototype.getGraphPath=function(t){var e,i=s.prototype.getGraphPath,r=this.options,n=r.stacking,o=this.yAxis,a=[],l=[],d=this.index,h=o.stacking.stacks[this.stackKey],u=r.threshold,p=Math.round(o.getThreshold(r.threshold));r=c(r.connectNulls,"percent"===n);var m=function(e,i,r){var s=t[e];e=n&&h[s.x].points[d];var c=s[r+"Null"]||0;if(r=s[r+"Cliff"]||0,s=!0,r||c){var m=(c?e[0]:e[1])+r,f=e[0]+r;s=!!c}else!n&&t[i]&&t[i].isNull&&(m=f=u);void 0!==m&&(l.push({plotX:g,plotY:null===m?p:o.getThreshold(m),isNull:s,isCliff:!0}),a.push({plotX:g,plotY:null===f?p:o.getThreshold(f),doCurve:!1}))};for(t=t||this.points,n&&(t=this.getStackPoints(t)),e=0;e<t.length;e++){n||(t[e].leftCliff=t[e].rightCliff=t[e].leftNull=t[e].rightNull=void 0);var f=t[e].isNull,g=c(t[e].rectPlotX,t[e].plotX),y=n?c(t[e].yBottom,p):p;(!f||r)&&(r||m(e,e-1,"left"),f&&!n&&r||(l.push(t[e]),a.push({x:e,plotX:g,plotY:y})),r||m(e,e+1,"right"))}return e=i.call(this,l,!0,!0),a.reversed=!0,(y=(f=i.call(this,a,!0,!0))[0])&&"M"===y[0]&&(f[0]=["L",y[1],y[2]]),(f=e.concat(f)).length&&f.push(["Z"]),i=i.call(this,l,!1,r),f.xMap=e.xMap,this.areaPath=f,i},e.prototype.getStackPoints=function(t){var e=this,i=[],r=[],n=this.xAxis,o=this.yAxis,a=o.stacking.stacks[this.stackKey],s={},l=o.series,h=l.length,u=o.options.reversedStacks?1:-1,p=l.indexOf(e);if(t=t||this.points,this.options.stacking){for(var m=0;m<t.length;m++)t[m].leftNull=t[m].rightNull=void 0,s[t[m].x]=t[m];d(a,function(t,e){null!==t.total&&r.push(e)}),r.sort(function(t,e){return t-e});var f=l.map(function(t){return t.visible});r.forEach(function(t,d){var m,g,y=0;if(s[t]&&!s[t].isNull)i.push(s[t]),[-1,1].forEach(function(i){var n=1===i?"rightNull":"leftNull",o=0,c=a[r[d+i]];if(c)for(var y=p;0<=y&&y<h;){var v=l[y].index;(m=c.points[v])||(v===e.index?s[t][n]=!0:f[y]&&(g=a[t].points[v])&&(o-=g[1]-g[0])),y+=u}s[t][1===i?"rightCliff":"leftCliff"]=o});else{for(var v=p;0<=v&&v<h;){if(m=a[t].points[l[v].index]){y=m[1];break}v+=u}y=c(y,0),y=o.translate(y,0,1,0,1),i.push({isNull:!0,plotX:n.translate(t,0,0,0,1),x:t,plotY:y,yBottom:y})}})}return i},e.defaultOptions=l(s.defaultOptions,{threshold:0}),e}(s)).prototype,{singleStacks:!1,drawLegendSymbol:e.drawRectangle}),i.registerSeriesType("area",r),r}),e(i,"Series/Spline/SplineSeries.js",[i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),n=t.seriesTypes.line,o=e.merge,a=e.pick;return e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.options=void 0,e.points=void 0,e}return r(e,t),e.prototype.getPointSpline=function(t,e,i){var r=e.plotX||0,n=e.plotY||0,o=t[i-1];if(i=t[i+1],o&&!o.isNull&&!1!==o.doCurve&&!e.isCliff&&i&&!i.isNull&&!1!==i.doCurve&&!e.isCliff){t=o.plotY||0;var s=i.plotX||0;i=i.plotY||0;var l=0,d=(1.5*r+(o.plotX||0))/2.5,c=(1.5*n+t)/2.5,h=(1.5*n+i)/2.5;(s=(1.5*r+s)/2.5)!==d&&(l=(h-c)*(s-r)/(s-d)+n-h),c+=l,h+=l,c>t&&c>n?(c=Math.max(t,n),h=2*n-c):c<t&&c<n&&(c=Math.min(t,n),h=2*n-c),h>i&&h>n?(h=Math.max(i,n),c=2*n-h):h<i&&h<n&&(h=Math.min(i,n),c=2*n-h),e.rightContX=s,e.rightContY=h}return e=["C",a(o.rightContX,o.plotX,0),a(o.rightContY,o.plotY,0),a(d,r,0),a(c,n,0),r,n],o.rightContX=o.rightContY=void 0,e},e.defaultOptions=o(n.defaultOptions),e}(n),t.registerSeriesType("spline",e),e}),e(i,"Series/AreaSpline/AreaSplineSeries.js",[i["Series/Area/AreaSeries.js"],i["Series/Spline/SplineSeries.js"],i["Core/Legend/LegendSymbol.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r,n){var o,a=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),s=t.prototype,l=n.extend,d=n.merge;return l((n=function(i){function r(){var t=null!==i&&i.apply(this,arguments)||this;return t.data=void 0,t.points=void 0,t.options=void 0,t}return a(r,i),r.defaultOptions=d(e.defaultOptions,t.defaultOptions),r}(e)).prototype,{getGraphPath:s.getGraphPath,getStackPoints:s.getStackPoints,drawGraph:s.drawGraph,drawLegendSymbol:i.drawRectangle}),r.registerSeriesType("areaspline",n),n}),e(i,"Series/Column/ColumnSeries.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Color/Color.js"],i["Core/Globals.js"],i["Core/Legend/LegendSymbol.js"],i["Core/Color/Palette.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o,a,s){var l,d=this&&this.__extends||(l=function(t,e){return(l=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),c=t.animObject,h=e.parse,u=i.hasTouch;t=i.noop;var p=s.clamp,m=s.css,f=s.defined,g=s.extend,y=s.fireEvent,v=s.isArray,I=s.isNumber,x=s.merge,b=s.pick,C=s.objectEach;return s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.borderWidth=void 0,e.data=void 0,e.group=void 0,e.options=void 0,e.points=void 0,e}return d(e,t),e.prototype.animate=function(t){var e=this,i=this.yAxis,r=e.options,n=this.chart.inverted,o={},a=n?"translateX":"translateY";if(t)o.scaleY=.001,t=p(i.toPixels(r.threshold),i.pos,i.pos+i.len),n?o.translateX=t-i.len:o.translateY=t,e.clipBox&&e.setClip(),e.group.attr(o);else{var s=Number(e.group.attr(a));e.group.animate({scaleY:1},g(c(e.options.animation),{step:function(t,r){e.group&&(o[a]=s+r.pos*(i.pos-s),e.group.attr(o))}}))}},e.prototype.init=function(e,i){t.prototype.init.apply(this,arguments);var r=this;(e=r.chart).hasRendered&&e.series.forEach(function(t){t.type===r.type&&(t.isDirty=!0)})},e.prototype.getColumnMetrics=function(){var t=this,e=t.options,i=t.xAxis,r=t.yAxis,n=i.options.reversedStacks;n=i.reversed&&!n||!i.reversed&&n;var o,a={},s=0;!1===e.grouping?s=1:t.chart.series.forEach(function(e){var i=e.yAxis,n=e.options;if(e.type===t.type&&(e.visible||!t.chart.options.chart.ignoreHiddenSeries)&&r.len===i.len&&r.pos===i.pos){if(n.stacking&&"group"!==n.stacking){void 0===a[o=e.stackKey]&&(a[o]=s++);var l=a[o]}else!1!==n.grouping&&(l=s++);e.columnIndex=l}});var l=Math.min(Math.abs(i.transA)*(i.ordinal&&i.ordinal.slope||e.pointRange||i.closestPointRange||i.tickInterval||1),i.len),d=l*e.groupPadding,c=(l-2*d)/(s||1);return t.columnMetrics={width:e=Math.min(e.maxPointWidth||i.len,b(e.pointWidth,c*(1-2*e.pointPadding))),offset:(c-e)/2+(d+((t.columnIndex||0)+ +!!n)*c-l/2)*(n?-1:1),paddedWidth:c,columnCount:s},t.columnMetrics},e.prototype.crispCol=function(t,e,i,r){var n=this.chart,o=this.borderWidth,a=-(o%2?.5:0);return o=o%2?.5:1,n.inverted&&n.renderer.isVML&&(o+=1),this.options.crisp&&(i=Math.round(t+i)+a-(t=Math.round(t)+a)),r=Math.round(e+r)+o,a=.5>=Math.abs(e)&&.5<r,r-=e=Math.round(e)+o,a&&r&&(--e,r+=1),{x:t,y:e,width:i,height:r}},e.prototype.adjustForMissingColumns=function(t,e,i,r){var n=this,o=this.options.stacking;if(!i.isNull&&1<r.columnCount){var a=0,s=0;C(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(t){if("number"==typeof i.x&&(t=t[i.x.toString()])){var e=t.points[n.index],r=t.total;o?(e&&(a=s),t.hasValidPoints&&s++):v(e)&&(a=e[1],s=r||0)}}),t=(i.plotX||0)+((s-1)*r.paddedWidth+e)/2-e-a*r.paddedWidth}return t},e.prototype.translate=function(){var t=this,e=t.chart,i=t.options,r=t.dense=2>t.closestPointRange*t.xAxis.transA;r=t.borderWidth=b(i.borderWidth,+!r);var n=t.xAxis,a=t.yAxis,s=i.threshold,l=t.translatedThreshold=a.getThreshold(s),d=b(i.minPointLength,5),c=t.getColumnMetrics(),h=c.width,u=t.pointXOffset=c.offset,m=t.dataMin,g=t.dataMax,y=t.barW=Math.max(h,1+2*r);e.inverted&&(l-=.5),i.pointPadding&&(y=Math.ceil(y)),o.prototype.translate.apply(t),t.points.forEach(function(r){var o=b(r.yBottom,l),v=999+Math.abs(o),x=r.plotX||0,C=Math.min(v=p(r.plotY,-v,a.len+v),o),T=Math.max(v,o)-C,$=h,w=x+u,S=y;d&&Math.abs(T)<d&&(T=d,x=!a.reversed&&!r.negative||a.reversed&&r.negative,I(s)&&I(g)&&r.y===s&&g<=s&&(a.min||0)<s&&(m!==g||(a.max||0)<=s)&&(x=!x),C=Math.abs(C-l)>d?o-d:l-(x?d:0)),f(r.options.pointWidth)&&(w-=Math.round((($=S=Math.ceil(r.options.pointWidth))-h)/2)),i.centerInCategory&&(w=t.adjustForMissingColumns(w,$,r,c)),r.barX=w,r.pointWidth=$,r.tooltipPos=e.inverted?[p(a.len+a.pos-e.plotLeft-v,a.pos-e.plotLeft,a.len+a.pos-e.plotLeft),n.len+n.pos-e.plotTop-w-S/2,T]:[n.left-e.plotLeft+w+S/2,p(v+a.pos-e.plotTop,a.pos-e.plotTop,a.len+a.pos-e.plotTop),T],r.shapeType=t.pointClass.prototype.shapeType||"rect",r.shapeArgs=t.crispCol.apply(t,r.isNull?[w,l,S,0]:[w,C,S,T])})},e.prototype.drawGraph=function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},e.prototype.pointAttribs=function(t,e){var i=this.options,r=this.pointAttrToOptions||{},n=r.stroke||"borderColor",o=r["stroke-width"]||"borderWidth",a=t&&t.color||this.color,s=t&&t[n]||i[n]||a;r=t&&t.options.dashStyle||i.dashStyle;var l=t&&t[o]||i[o]||this[o]||0,d=b(t&&t.opacity,i.opacity,1);if(t&&this.zones.length){var c=t.getZone();a=t.options.color||c&&(c.color||t.nonZonedColor)||this.color,c&&(s=c.borderColor||s,r=c.dashStyle||r,l=c.borderWidth||l)}return e&&t&&(e=(t=x(i.states[e],t.options.states&&t.options.states[e]||{})).brightness,a=t.color||void 0!==e&&h(a).brighten(t.brightness).get()||a,s=t[n]||s,l=t[o]||l,r=t.dashStyle||r,d=b(t.opacity,d)),n={fill:a,stroke:s,"stroke-width":l,opacity:d},r&&(n.dashstyle=r),n},e.prototype.drawPoints=function(){var t,e=this,i=this.chart,r=e.options,n=i.renderer,o=r.animationLimit||250;e.points.forEach(function(a){var s=a.graphic,l=!!s,d=s&&i.pointCount<o?"animate":"attr";I(a.plotY)&&null!==a.y?(t=a.shapeArgs,s&&a.hasNewShapeType()&&(s=s.destroy()),e.enabledDataSorting&&(a.startXPos=e.xAxis.reversed?-(t&&t.width||0):e.xAxis.width),s||(a.graphic=s=n[a.shapeType](t).add(a.group||e.group))&&e.enabledDataSorting&&i.hasRendered&&i.pointCount<o&&(s.attr({x:a.startXPos}),l=!0,d="animate"),s&&l&&s[d](x(t)),r.borderRadius&&s[d]({r:r.borderRadius}),i.styledMode||s[d](e.pointAttribs(a,a.selected&&"select")).shadow(!1!==a.allowShadow&&r.shadow,null,r.stacking&&!r.borderRadius),s&&(s.addClass(a.getClassName(),!0),s.attr({visibility:a.visible?"inherit":"hidden"}))):s&&(a.graphic=s.destroy())})},e.prototype.drawTracker=function(){var t,e=this,i=e.chart,r=i.pointer,n=function(t){var e=r.getPointFromEvent(t);void 0!==e&&(r.isDirectTouch=!0,e.onMouseOver(t))};e.points.forEach(function(e){t=v(e.dataLabels)?e.dataLabels:e.dataLabel?[e.dataLabel]:[],e.graphic&&(e.graphic.element.point=e),t.forEach(function(t){t.div?t.div.point=e:t.element.point=e})}),e._hasTracking||(e.trackerGroups.forEach(function(t){e[t]&&(e[t].addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(t){r.onTrackerMouseOut(t)}),u&&e[t].on("touchstart",n),!i.styledMode&&e.options.cursor&&e[t].css(m).css({cursor:e.options.cursor}))}),e._hasTracking=!0),y(this,"afterDrawTracker")},e.prototype.remove=function(){var t=this,e=t.chart;e.hasRendered&&e.series.forEach(function(e){e.type===t.type&&(e.isDirty=!0)}),o.prototype.remove.apply(t,arguments)},e.defaultOptions=x(o.defaultOptions,{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:n.neutralColor20,borderColor:n.neutralColor100}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:n.backgroundColor}),e}(o),g(s.prototype,{cropShoulder:0,directTouch:!0,drawLegendSymbol:r.drawRectangle,getSymbol:t,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]}),a.registerSeriesType("column",s),s}),e(i,"Core/Series/DataLabel.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/FormatUtilities.js"],i["Core/Color/Palette.js"],i["Core/Utilities.js"]],function(t,e,i,r){var n,o=t.getDeferredAnimation,a=e.format,s=r.defined,l=r.extend,d=r.fireEvent,c=r.isArray,h=r.merge,u=r.objectEach,p=r.pick,m=r.splat;return!function(t){function e(t,e,i,r,n){var o=this,a=this.chart,s=this.isCartesian&&a.inverted,d=this.enabledDataSorting,c=p(t.dlBox&&t.dlBox.centerX,t.plotX,-9999),h=p(t.plotY,-9999),u=e.getBBox(),m=i.rotation,f=i.align,g=a.isInsidePlot(c,Math.round(h),{inverted:s,paneCoordinates:!0,series:o}),y=function(i){d&&o.xAxis&&!v&&o.setDataLabelStartPos(t,e,n,g,i)},v="justify"===p(i.overflow,d?"none":"justify"),I=this.visible&&!1!==t.visible&&(t.series.forceDL||d&&!v||g||p(i.inside,!!this.options.stacking)&&r&&a.isInsidePlot(c,s?r.x+1:r.y+r.height-1,{inverted:s,paneCoordinates:!0,series:o}));if(I){var x=a.renderer.fontMetrics(a.styledMode?void 0:i.style.fontSize,e).b;r=l({x:s?this.yAxis.len-h:c,y:Math.round(s?this.xAxis.len-c:h),width:0,height:0},r),l(i,{width:u.width,height:u.height}),m?(v=!1,c=a.renderer.rotCorr(x,m),y(c={x:r.x+(i.x||0)+r.width/2+c.x,y:r.y+(i.y||0)+({top:0,middle:.5,bottom:1})[i.verticalAlign]*r.height}),e[n?"attr":"animate"](c).attr({align:f}),y=180<(y=(m+720)%360)&&360>y,"left"===f?c.y-=y?u.height:0:"center"===f?(c.x-=u.width/2,c.y-=u.height/2):"right"===f&&(c.x-=u.width,c.y-=y?0:u.height),e.placed=!0,e.alignAttr=c):(y(r),e.align(i,void 0,r),c=e.alignAttr),v&&0<=r.height?this.justifyDataLabel(e,i,c,u,r,n):p(i.crop,!0)&&(I=a.isInsidePlot(c.x,c.y,{paneCoordinates:!0,series:o})&&a.isInsidePlot(c.x+u.width,c.y+u.height,{paneCoordinates:!0,series:o})),i.shape&&!m&&e[n?"attr":"animate"]({anchorX:s?a.plotWidth-t.plotY:t.plotX,anchorY:s?a.plotHeight-t.plotX:t.plotY})}n&&d&&(e.placed=!1),I||d&&!v||(e.hide(!0),e.placed=!1)}function r(){var t=this,e=t.chart,r=t.options,n=t.points,l=t.hasRendered||0,h=e.renderer,g=r.dataLabels,y=g.animation;if(y=g.defer?o(e,y,t):{defer:0,duration:0},g=f(f(e.options.plotOptions&&e.options.plotOptions.series&&e.options.plotOptions.series.dataLabels,e.options.plotOptions&&e.options.plotOptions[t.type]&&e.options.plotOptions[t.type].dataLabels),g),d(this,"drawDataLabels"),c(g)||g.enabled||t._hasPointLabels){var v=t.plotGroup("dataLabelsGroup","data-labels",l?"inherit":"hidden",g.zIndex||6);v.attr({opacity:+l}),!l&&(l=t.dataLabelsGroup)&&(t.visible&&v.show(!0),l[r.animation?"animate":"attr"]({opacity:1},y)),n.forEach(function(n){m(f(g,n.dlOptions||n.options&&n.options.dataLabels)).forEach(function(o,l){var d,c,m,f=o.enabled&&(!n.isNull||n.dataLabelOnNull)&&(d=n,!(m=(c=o).filter)||(c=m.operator,d=d[m.property],m=m.value,">"===c&&d>m||"<"===c&&d<m||">="===c&&d>=m||"<="===c&&d<=m||"=="===c&&d==m||"==="===c&&d===m||!1)),g=n.connectors?n.connectors[l]:n.connector,y=n.dataLabels?n.dataLabels[l]:n.dataLabel,I=p(o.distance,n.labelDistance),x=!y;if(f){var b=n.getLabelConfig(),C=p(o[n.formatPrefix+"Format"],o.format);b=s(C)?a(C,b,e):(o[n.formatPrefix+"Formatter"]||o.formatter).call(b,o),C=o.style;var T=o.rotation;e.styledMode||(C.color=p(o.color,C.color,t.color,i.neutralColor100),"contrast"===C.color?(n.contrastColor=h.getContrast(n.color||t.color),C.color=!s(I)&&o.inside||0>I||r.stacking?n.contrastColor:i.neutralColor100):delete n.contrastColor,r.cursor&&(C.cursor=r.cursor));var $={r:o.borderRadius||0,rotation:T,padding:o.padding,zIndex:1};e.styledMode||($.fill=o.backgroundColor,$.stroke=o.borderColor,$["stroke-width"]=o.borderWidth),u($,function(t,e){void 0===t&&delete $[e]})}!y||f&&s(b)?f&&s(b)&&(y?$.text=b:(n.dataLabels=n.dataLabels||[],y=n.dataLabels[l]=T?h.text(b,0,-9999,o.useHTML).addClass("highcharts-data-label"):h.label(b,0,-9999,o.shape,null,null,o.useHTML,null,"data-label"),l||(n.dataLabel=y),y.addClass(" highcharts-data-label-color-"+n.colorIndex+" "+(o.className||"")+(o.useHTML?" highcharts-tracker":""))),y.options=o,y.attr($),e.styledMode||y.css(C).shadow(o.shadow),y.added||y.add(v),o.textPath&&!o.useHTML&&(y.setTextPath(n.getDataLabelPath&&n.getDataLabelPath(y)||n.graphic,o.textPath),n.dataLabelPath&&!o.textPath.enabled&&(n.dataLabelPath=n.dataLabelPath.destroy())),t.alignDataLabel(n,y,o,null,x)):(n.dataLabel=n.dataLabel&&n.dataLabel.destroy(),n.dataLabels&&(1===n.dataLabels.length?delete n.dataLabels:delete n.dataLabels[l]),l||delete n.dataLabel,g&&(n.connector=n.connector.destroy(),n.connectors&&(1===n.connectors.length?delete n.connectors:delete n.connectors[l])))})})}d(this,"afterDrawDataLabels")}function n(t,e,i,r,n,o){var a=this.chart,s=e.align,l=e.verticalAlign,d=t.box?0:t.padding||0,c=e.x;c=void 0===c?0:c;var h=e.y;h=void 0===h?0:h;var u=(i.x||0)+d;if(0>u){"right"===s&&0<=c?(e.align="left",e.inside=!0):c-=u;var p=!0}return(u=(i.x||0)+r.width-d)>a.plotWidth&&("left"===s&&0>=c?(e.align="right",e.inside=!0):c+=a.plotWidth-u,p=!0),0>(u=i.y+d)&&("bottom"===l&&0<=h?(e.verticalAlign="top",e.inside=!0):h-=u,p=!0),(u=(i.y||0)+r.height-d)>a.plotHeight&&("top"===l&&0>=h?(e.verticalAlign="bottom",e.inside=!0):h+=a.plotHeight-u,p=!0),p&&(e.x=c,e.y=h,t.placed=!o,t.align(e,void 0,n)),p}function f(t,e){var i,r=[];if(c(t)&&!c(e))r=t.map(function(t){return h(t,e)});else if(c(e)&&!c(t))r=e.map(function(e){return h(t,e)});else if(c(t)||c(e))for(i=Math.max(t.length,e.length);i--;)r[i]=h(t[i],e[i]);else r=h(t,e);return r}function g(t,e,i,r,n){var o=this.chart,a=o.inverted,s=this.xAxis,l=s.reversed,d=a?e.height/2:e.width/2;t=(t=t.pointWidth)?t/2:0,e.startXPos=a?n.x:l?-d-t:s.width-d+t,e.startYPos=a?l?this.yAxis.height-d+t:-d-t:n.y,r?"hidden"===e.visibility&&(e.show(),e.attr({opacity:0}).animate({opacity:1})):e.attr({opacity:1}).animate({opacity:0},void 0,e.hide),o.hasRendered&&(i&&e.attr({x:e.startXPos,y:e.startYPos}),e.placed=!0)}var y=[];t.compose=function(t){if(-1===y.indexOf(t)){var i=t.prototype;y.push(t),i.alignDataLabel=e,i.drawDataLabels=r,i.justifyDataLabel=n,i.setDataLabelStartPos=g}}}(n||(n={})),n}),e(i,"Series/Column/ColumnDataLabel.js",[i["Core/Series/DataLabel.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i){var r,n=e.series,o=i.merge,a=i.pick;function s(t,e,i,r,s){var l=this.chart.inverted,d=t.series,c=t.dlBox||t.shapeArgs,h=a(t.below,t.plotY>a(this.translatedThreshold,d.yAxis.len)),u=a(i.inside,!!this.options.stacking);c&&(0>(r=o(c)).y&&(r.height+=r.y,r.y=0),0<(c=r.y+r.height-d.yAxis.len)&&c<r.height&&(r.height-=c),l&&(r={x:d.yAxis.len-r.y-r.height,y:d.xAxis.len-r.x-r.width,width:r.height,height:r.width}),u||(l?(r.x+=h?0:r.width,r.width=0):(r.y+=h?r.height:0,r.height=0))),i.align=a(i.align,!l||u?"center":h?"right":"left"),i.verticalAlign=a(i.verticalAlign,l||u?"middle":h?"top":"bottom"),n.prototype.alignDataLabel.call(this,t,e,i,r,s),i.inside&&t.contrastColor&&e.css({color:t.contrastColor})}var l=[];return(r||(r={})).compose=function(e){t.compose(n),-1===l.indexOf(e)&&(l.push(e),e.prototype.alignDataLabel=s)},r}),e(i,"Series/Bar/BarSeries.js",[i["Series/Column/ColumnSeries.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i){var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),o=i.extend,a=i.merge;return o((i=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.data=void 0,t.options=void 0,t.points=void 0,t}return n(i,e),i.defaultOptions=a(t.defaultOptions,{}),i}(t)).prototype,{inverted:!0}),e.registerSeriesType("bar",i),i}),e(i,"Series/Scatter/ScatterSeries.js",[i["Series/Column/ColumnSeries.js"],i["Series/Line/LineSeries.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r){var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=r.addEvent,s=r.extend,l=r.merge;return s((r=function(t){function i(){var e=null!==t&&t.apply(this,arguments)||this;return e.data=void 0,e.options=void 0,e.points=void 0,e}return o(i,t),i.prototype.applyJitter=function(){var t=this,e=this.options.jitter,i=this.points.length;e&&this.points.forEach(function(r,n){["x","y"].forEach(function(o,a){var s="plot"+o.toUpperCase();if(e[o]&&!r.isNull){var l=t[o+"Axis"],d=e[o]*l.transA;if(l&&!l.isLog){var c=Math.max(0,r[s]-d);l=Math.min(l.len,r[s]+d),a=1e4*Math.sin(n+a*i),r[s]=c+(l-c)*(a-Math.floor(a)),"x"===o&&(r.clientX=r.plotX)}}})})},i.prototype.drawGraph=function(){this.options.lineWidth?t.prototype.drawGraph.call(this):this.graph&&(this.graph=this.graph.destroy())},i.defaultOptions=l(e.defaultOptions,{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">●</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}}),i}(e)).prototype,{drawTracker:t.prototype.drawTracker,sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1}),a(r,"afterTranslate",function(){this.applyJitter()}),i.registerSeriesType("scatter",r),r}),e(i,"Mixins/CenteredSeries.js",[i["Core/Globals.js"],i["Core/Series/Series.js"],i["Core/Utilities.js"]],function(t,e,i){var r=i.isNumber,n=i.pick,o=i.relativeLength,a=t.deg2rad;return t.CenteredSeriesMixin={getCenter:function(){var t=this.options,i=this.chart,r=2*(t.slicedOffset||0),a=i.plotWidth-2*r,s=i.plotHeight-2*r,l=t.center,d=Math.min(a,s),c=t.size,h=t.innerSize||0;for("string"==typeof c&&(c=parseFloat(c)),"string"==typeof h&&(h=parseFloat(h)),t=[n(l[0],"50%"),n(l[1],"50%"),n(c&&0>c?void 0:t.size,"100%"),n(h&&0>h?void 0:t.innerSize||0,"0%")],!i.angular||this instanceof e||(t[3]=0),l=0;4>l;++l)c=t[l],i=2>l||2===l&&/%$/.test(c),t[l]=o(c,[a,s,d,t[2]][l])+(i?r:0);return t[3]>t[2]&&(t[3]=t[2]),t},getStartAndEndRadians:function(t,e){return t=r(t)?t:0,e=r(e)&&e>t&&360>e-t?e:t+360,{start:a*(t+-90),end:a*(e+-90)}}}}),e(i,"Series/Pie/PiePoint.js",[i["Core/Animation/AnimationUtilities.js"],i["Core/Series/Point.js"],i["Core/Utilities.js"]],function(t,e,i){var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),o=t.setAnimation,a=i.addEvent,s=i.defined;t=i.extend;var l=i.isNumber,d=i.pick,c=i.relativeLength;return t((e=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.labelDistance=void 0,e.options=void 0,e.series=void 0,e}return n(e,t),e.prototype.getConnectorPath=function(){var t=this.labelPosition,e=this.series.options.dataLabels,i=this.connectorShapes,r=e.connectorShape;return i[r]&&(r=i[r]),r.call(this,{x:t.final.x,y:t.final.y,alignment:t.alignment},t.connectorPosition,e)},e.prototype.getTranslate=function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},e.prototype.haloPath=function(t){var e=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(e.x,e.y,e.r+t,e.r+t,{innerR:e.r-1,start:e.start,end:e.end})},e.prototype.init=function(){var e=this;t.prototype.init.apply(this,arguments),this.name=d(this.name,"Slice");var i=function(t){e.slice("select"===t.type)};return a(this,"select",i),a(this,"unselect",i),this},e.prototype.isValid=function(){return l(this.y)&&0<=this.y},e.prototype.setVisible=function(t,e){var i=this,r=this.series,n=r.chart,o=r.options.ignoreHiddenPoint;e=d(e,o),t!==this.visible&&(this.visible=this.options.visible=t=void 0===t?!this.visible:t,r.options.data[r.data.indexOf(this)]=this.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(e){i[e]&&i[e][t?"show":"hide"](t)}),this.legendItem&&n.legend.colorizeItem(this,t),t||"hover"!==this.state||this.setState(""),o&&(r.isDirty=!0),e&&n.redraw())},e.prototype.slice=function(t,e,i){var r=this.series;o(i,r.chart),d(e,!0),this.sliced=this.options.sliced=s(t)?t:!this.sliced,r.options.data[r.data.indexOf(this)]=this.options,this.graphic&&this.graphic.animate(this.getTranslate()),this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},e}(e)).prototype,{connectorShapes:{fixedOffset:function(t,e,i){var r=e.breakAt;return e=e.touchingSliceAt,[["M",t.x,t.y],i.softConnector?["C",t.x+("left"===t.alignment?-5:5),t.y,2*r.x-e.x,2*r.y-e.y,r.x,r.y]:["L",r.x,r.y],["L",e.x,e.y]]},straight:function(t,e){return e=e.touchingSliceAt,[["M",t.x,t.y],["L",e.x,e.y]]},crookedLine:function(t,e,i){e=e.touchingSliceAt;var r=this.series,n=r.center[0],o=r.chart.plotWidth,a=r.chart.plotLeft;r=t.alignment;var s=this.shapeArgs.r;return i=c(i.crookDistance,1),i=["L",o="left"===r?n+s+(o+a-n-s)*(1-i):a+(n-s)*i,t.y],n=!0,("left"===r?o>t.x||o<e.x:o<t.x||o>e.x)&&(n=!1),t=[["M",t.x,t.y]],n&&t.push(i),t.push(["L",e.x,e.y]),t}}}),e}),e(i,"Series/Pie/PieSeries.js",[i["Mixins/CenteredSeries.js"],i["Series/Column/ColumnSeries.js"],i["Core/Globals.js"],i["Core/Legend/LegendSymbol.js"],i["Core/Color/Palette.js"],i["Series/Pie/PiePoint.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Renderer/SVG/Symbols.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o,a,s,l,d){var c,h=this&&this.__extends||(c=function(t,e){return(c=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)},function(t,e){function i(){this.constructor=t}c(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),u=t.getStartAndEndRadians;i=i.noop;var p=d.clamp,m=d.extend,f=d.fireEvent,g=d.merge,y=d.pick,v=d.relativeLength;return m((d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.center=void 0,e.data=void 0,e.maxLabelDistance=void 0,e.options=void 0,e.points=void 0,e}return h(e,t),e.prototype.animate=function(t){var e=this,i=e.points,r=e.startAngleRad;t||i.forEach(function(t){var i=t.graphic,n=t.shapeArgs;i&&n&&(i.attr({r:y(t.startR,e.center&&e.center[3]/2),start:r,end:r}),i.animate({r:n.r,start:n.start,end:n.end},e.options.animation))})},e.prototype.drawEmpty=function(){var t=this.startAngleRad,e=this.endAngleRad,i=this.options;if(0===this.total&&this.center){var r=this.center[0],o=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(r,o,this.center[1]/2,0,t,e).addClass("highcharts-empty-series").add(this.group)),this.graph.attr({d:l.arc(r,o,this.center[2]/2,0,{start:t,end:e,innerR:this.center[3]/2})}),this.chart.styledMode||this.graph.attr({"stroke-width":i.borderWidth,fill:i.fillColor||"none",stroke:i.color||n.neutralColor20})}else this.graph&&(this.graph=this.graph.destroy())},e.prototype.drawPoints=function(){var t=this.chart.renderer;this.points.forEach(function(e){e.graphic&&e.hasNewShapeType()&&(e.graphic=e.graphic.destroy()),e.graphic||(e.graphic=t[e.shapeType](e.shapeArgs).add(e.series.group),e.delayedRendering=!0)})},e.prototype.generatePoints=function(){t.prototype.generatePoints.call(this),this.updateTotals()},e.prototype.getX=function(t,e,i){var r=this.center,n=this.radii?this.radii[i.index]||0:r[2]/2;return t=Math.asin(p((t-r[1])/(n+i.labelDistance),-1,1)),r[0]+(e?-1:1)*Math.cos(t)*(n+i.labelDistance)+(0<i.labelDistance?(e?-1:1)*this.options.dataLabels.padding:0)},e.prototype.hasData=function(){return!!this.processedXData.length},e.prototype.redrawPoints=function(){var t,e,i,r,n=this,o=n.chart,a=o.renderer,s=n.options.shadow;this.drawEmpty(),!s||n.shadowGroup||o.styledMode||(n.shadowGroup=a.g("shadow").attr({zIndex:-1}).add(n.group)),n.points.forEach(function(l){var d={};if(e=l.graphic,!l.isNull&&e){var c=void 0;r=l.shapeArgs,t=l.getTranslate(),o.styledMode||(c=l.shadowGroup,s&&!c&&(c=l.shadowGroup=a.g("shadow").add(n.shadowGroup)),c&&c.attr(t),i=n.pointAttribs(l,l.selected&&"select")),l.delayedRendering?(e.setRadialReference(n.center).attr(r).attr(t),o.styledMode||e.attr(i).attr({"stroke-linejoin":"round"}).shadow(s,c),l.delayedRendering=!1):(e.setRadialReference(n.center),o.styledMode||g(!0,d,i),g(!0,d,r,t),e.animate(d)),e.attr({visibility:l.visible?"inherit":"hidden"}),e.addClass(l.getClassName(),!0)}else e&&(l.graphic=e.destroy())})},e.prototype.sortByAngle=function(t,e){t.sort(function(t,i){return void 0!==t.angle&&(i.angle-t.angle)*e})},e.prototype.translate=function(t){this.generatePoints();var e=this.options,i=e.slicedOffset,r=i+(e.borderWidth||0),n=u(e.startAngle,e.endAngle),o=this.startAngleRad=n.start;n=(this.endAngleRad=n.end)-o;var a=this.points,s=e.dataLabels.distance;e=e.ignoreHiddenPoint;var l,d=a.length,c=0;for(t||(this.center=t=this.getCenter()),l=0;l<d;l++){var h=a[l],p=o+c*n;h.isValid()&&(!e||h.visible)&&(c+=h.percentage/100);var m=o+c*n,g={x:t[0],y:t[1],r:t[2]/2,innerR:t[3]/2,start:Math.round(1e3*p)/1e3,end:Math.round(1e3*m)/1e3};h.shapeType="arc",h.shapeArgs=g,h.labelDistance=y(h.options.dataLabels&&h.options.dataLabels.distance,s),h.labelDistance=v(h.labelDistance,g.r),this.maxLabelDistance=Math.max(this.maxLabelDistance||0,h.labelDistance),(m=(m+p)/2)>1.5*Math.PI?m-=2*Math.PI:m<-Math.PI/2&&(m+=2*Math.PI),h.slicedTranslation={translateX:Math.round(Math.cos(m)*i),translateY:Math.round(Math.sin(m)*i)},g=Math.cos(m)*t[2]/2;var I=Math.sin(m)*t[2]/2;h.tooltipPos=[t[0]+.7*g,t[1]+.7*I],h.half=+(m<-Math.PI/2||m>Math.PI/2),h.angle=m,p=Math.min(r,h.labelDistance/5),h.labelPosition={natural:{x:t[0]+g+Math.cos(m)*h.labelDistance,y:t[1]+I+Math.sin(m)*h.labelDistance},final:{},alignment:0>h.labelDistance?"center":h.half?"right":"left",connectorPosition:{breakAt:{x:t[0]+g+Math.cos(m)*p,y:t[1]+I+Math.sin(m)*p},touchingSliceAt:{x:t[0]+g,y:t[1]+I}}}}f(this,"afterTranslate")},e.prototype.updateTotals=function(){var t,e=this.points,i=e.length,r=this.options.ignoreHiddenPoint,n=0;for(t=0;t<i;t++){var o=e[t];o.isValid()&&(!r||o.visible)&&(n+=o.y)}for(this.total=n,t=0;t<i;t++)(o=e[t]).percentage=0<n&&(o.visible||!r)?o.y/n*100:0,o.total=n},e.defaultOptions=g(a.defaultOptions,{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:n.backgroundColor,borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}}),e}(a)).prototype,{axisTypes:[],directTouch:!0,drawGraph:void 0,drawLegendSymbol:r.drawRectangle,drawTracker:e.prototype.drawTracker,getCenter:t.getCenter,getSymbol:i,isCartesian:!1,noSharedTooltip:!0,pointAttribs:e.prototype.pointAttribs,pointClass:o,requireSorting:!1,searchPoint:i,trackerGroups:["group","dataLabelsGroup"]}),s.registerSeriesType("pie",d),d}),e(i,"Series/Pie/PieDataLabel.js",[i["Core/Series/DataLabel.js"],i["Core/Globals.js"],i["Core/Color/Palette.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Series/SeriesRegistry.js"],i["Core/Utilities.js"]],function(t,e,i,r,n,o){var a,s=e.noop,l=r.distribute,d=n.series,c=o.arrayMax,h=o.clamp,u=o.defined,p=o.merge,m=o.pick,f=o.relativeLength;return!function(e){function r(){var t,e,r,n,o,a,s,h,f,g,y,v,I=this,x=I.data,b=I.chart,C=I.options.dataLabels||{},T=C.connectorPadding,$=b.plotWidth,w=b.plotHeight,S=b.plotLeft,A=Math.round(b.chartWidth/3),_=I.center,P=_[2]/2,j=_[1],k=[[],[]],O=[0,0,0,0],D=I.dataLabelPositioners;I.visible&&(C.enabled||I._hasPointLabels)&&(x.forEach(function(t){t.dataLabel&&t.visible&&t.dataLabel.shortened&&(t.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),t.dataLabel.shortened=!1)}),d.prototype.drawDataLabels.apply(I),x.forEach(function(t){t.dataLabel&&(t.visible?(k[t.half].push(t),t.dataLabel._pos=null,u(C.style.width)||u(t.options.dataLabels&&t.options.dataLabels.style&&t.options.dataLabels.style.width)||!(t.dataLabel.getBBox().width>A)||(t.dataLabel.css({width:Math.round(.7*A)+"px"}),t.dataLabel.shortened=!0)):(t.dataLabel=t.dataLabel.destroy(),t.dataLabels&&1===t.dataLabels.length&&delete t.dataLabels))}),k.forEach(function(e,i){var r,d=e.length,c=[];if(d){if(I.sortByAngle(e,i-.5),0<I.maxLabelDistance){var p=Math.max(0,j-P-I.maxLabelDistance),x=Math.min(j+P+I.maxLabelDistance,b.plotHeight);e.forEach(function(t){0<t.labelDistance&&t.dataLabel&&(t.top=Math.max(0,j-P-t.labelDistance),t.bottom=Math.min(j+P+t.labelDistance,b.plotHeight),r=t.dataLabel.getBBox().height||21,t.distributeBox={target:t.labelPosition.natural.y-t.top+r/2,size:r,rank:t.y},c.push(t.distributeBox))}),l(c,p=x+r-p,p/5)}for(y=0;y<d;y++){if(a=(t=e[y]).labelPosition,n=t.dataLabel,g=!1===t.visible?"hidden":"inherit",f=p=a.natural.y,c&&u(t.distributeBox)&&(void 0===t.distributeBox.pos?g="hidden":(s=t.distributeBox.size,f=D.radialDistributionY(t))),delete t.positionIndex,C.justify)h=D.justify(t,P,_);else switch(C.alignTo){case"connectors":h=D.alignToConnectors(e,i,$,S);break;case"plotEdges":h=D.alignToPlotEdges(n,i,$,S);break;default:h=D.radialDistributionX(I,t,f,p)}n._attr={visibility:g,align:a.alignment},v=t.options.dataLabels||{},n._pos={x:h+m(v.x,C.x)+(({left:T,right:-T})[a.alignment]||0),y:f+m(v.y,C.y)-10},a.final.x=h,a.final.y=f,m(C.crop,!0)&&(o=n.getBBox().width,p=null,h-o<T&&1===i?(p=Math.round(o-h+T),O[3]=Math.max(p,O[3])):h+o>$-T&&0===i&&(p=Math.round(h+o-$+T),O[1]=Math.max(p,O[1])),0>f-s/2?O[0]=Math.max(Math.round(-f+s/2),O[0]):f+s/2>w&&(O[2]=Math.max(Math.round(f+s/2-w),O[2])),n.sideOverflow=p)}}}),0===c(O)||this.verifyDataLabelOverflow(O))&&(this.placeDataLabels(),this.points.forEach(function(t){if(e=m((v=p(C,t.options.dataLabels)).connectorWidth,1)){var o;r=t.connector,(n=t.dataLabel)&&n._pos&&t.visible&&0<t.labelDistance?(g=n._attr.visibility,(o=!r)&&(t.connector=r=b.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+t.colorIndex+(t.className?" "+t.className:"")).add(I.dataLabelsGroup),b.styledMode||r.attr({"stroke-width":e,stroke:v.connectorColor||t.color||i.neutralColor60})),r[o?"attr":"animate"]({d:t.getConnectorPath()}),r.attr("visibility",g)):r&&(t.connector=r.destroy())}}))}function n(){this.points.forEach(function(t){var e,i=t.dataLabel;i&&t.visible&&((e=i._pos)?(i.sideOverflow&&(i._attr.width=Math.max(i.getBBox().width-i.sideOverflow,0),i.css({width:i._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),i.shortened=!0),i.attr(i._attr),i[i.moved?"animate":"attr"](e),i.moved=!0):i&&i.attr({y:-9999})),delete t.distributeBox},this)}function o(t){var e=this.center,i=this.options,r=i.center,n=i.minSize||80,o=null!==i.size;if(!o){if(null!==r[0])var a=Math.max(e[2]-Math.max(t[1],t[3]),n);else a=Math.max(e[2]-t[1]-t[3],n),e[0]+=(t[3]-t[1])/2;null!==r[1]?a=h(a,n,e[2]-Math.max(t[0],t[2])):(a=h(a,n,e[2]-t[0]-t[2]),e[1]+=(t[0]-t[2])/2),a<e[2]?(e[2]=a,e[3]=Math.min(f(i.innerSize||0,a),a),this.translate(e),this.drawDataLabels&&this.drawDataLabels()):o=!0}return o}var a=[],g={radialDistributionY:function(t){return t.top+t.distributeBox.pos},radialDistributionX:function(t,e,i,r){return t.getX(i<e.top+2||i>e.bottom-2?r:i,e.half,e)},justify:function(t,e,i){return i[0]+(t.half?-1:1)*(e+t.labelDistance)},alignToPlotEdges:function(t,e,i,r){return t=t.getBBox().width,e?t+r:i-t-r},alignToConnectors:function(t,e,i,r){var n,o=0;return t.forEach(function(t){(n=t.dataLabel.getBBox().width)>o&&(o=n)}),e?o+r:i-o-r}};e.compose=function(e){t.compose(d),-1===a.indexOf(e)&&(a.push(e),(e=e.prototype).dataLabelPositioners=g,e.alignDataLabel=s,e.drawDataLabels=r,e.placeDataLabels=n,e.verifyDataLabelOverflow=o)}}(a||(a={})),a}),e(i,"Extensions/OverlappingDataLabels.js",[i["Core/Chart/Chart.js"],i["Core/Utilities.js"]],function(t,e){function i(t,e){var i=!1;if(t){var r=t.newOpacity;t.oldOpacity!==r&&(t.alignAttr&&t.placed?(t[r?"removeClass":"addClass"]("highcharts-data-label-hidden"),i=!0,t.alignAttr.opacity=r,t[t.isOld?"animate":"attr"](t.alignAttr,null,function(){e.styledMode||t.css({pointerEvents:r?"auto":"none"})}),n(e,"afterHideOverlappingLabel")):t.attr({opacity:r})),t.isOld=!0}return i}var r=e.addEvent,n=e.fireEvent,o=e.isArray,a=e.isNumber,s=e.objectEach,l=e.pick;r(t,"render",function(){var t=this,e=[];(this.labelCollectors||[]).forEach(function(t){e=e.concat(t())}),(this.yAxis||[]).forEach(function(t){t.stacking&&t.options.stackLabels&&!t.options.stackLabels.allowOverlap&&s(t.stacking.stacks,function(t){s(t,function(t){t.label&&"hidden"!==t.label.visibility&&e.push(t.label)})})}),(this.series||[]).forEach(function(r){var n=r.options.dataLabels;r.visible&&(!1!==n.enabled||r._hasPointLabels)&&((n=function(r){return r.forEach(function(r){r.visible&&(o(r.dataLabels)?r.dataLabels:r.dataLabel?[r.dataLabel]:[]).forEach(function(n){var o=n.options;n.labelrank=l(o.labelrank,r.labelrank,r.shapeArgs&&r.shapeArgs.height),o.allowOverlap?(n.oldOpacity=n.opacity,n.newOpacity=1,i(n,t)):e.push(n)})})})(r.nodes||[]),n(r.points))}),this.hideOverlappingLabels(e)}),t.prototype.hideOverlappingLabels=function(t){var e,r,o,s=this,l=t.length,d=s.renderer,c=!1,h=function(t){var e,i,r=t.box?0:t.padding||0,n=e=0;if(t&&(!t.alignAttr||t.placed)){var o=t.alignAttr||{x:t.attr("x"),y:t.attr("y")},s=t.parentGroup;t.width||(e=t.getBBox(),t.width=e.width,t.height=e.height,e=d.fontMetrics(null,t.element).h);var l=t.width-2*r;return(i=({left:"0",center:"0.5",right:"1"})[t.alignValue])?n=i*l:a(t.x)&&Math.round(t.x)!==t.translateX&&(n=t.x-t.translateX),{x:o.x+(s.translateX||0)+r-(n||0),y:o.y+(s.translateY||0)+r-e,width:t.width-2*r,height:t.height-2*r}}};for(r=0;r<l;r++)(e=t[r])&&(e.oldOpacity=e.opacity,e.newOpacity=1,e.absoluteBox=h(e));for(t.sort(function(t,e){return(e.labelrank||0)-(t.labelrank||0)}),r=0;r<l;r++){var u=(h=t[r])&&h.absoluteBox;for(e=r+1;e<l;++e){var p=(o=t[e])&&o.absoluteBox;!u||!p||h===o||0===h.newOpacity||0===o.newOpacity||p.x>=u.x+u.width||p.x+p.width<=u.x||p.y>=u.y+u.height||p.y+p.height<=u.y||((h.labelrank<o.labelrank?h:o).newOpacity=0)}}t.forEach(function(t){i(t,s)&&(c=!0)}),c&&n(s,"afterHideAllOverlappingLabels")}}),e(i,"Core/Responsive.js",[i["Core/Utilities.js"]],function(t){var e,i,r,n=t.extend,o=t.find,a=t.isArray,s=t.isObject,l=t.merge,d=t.objectEach,c=t.pick,h=t.splat,u=t.uniqueKey;return e=[],(r||(r={})).compose=function(t){return -1===e.indexOf(t)&&(e.push(t),n(t.prototype,i.prototype)),t},i=function(){function t(){}return t.prototype.currentOptions=function(t){var e=this,i={};return!function t(i,r,n,o){var l;d(i,function(i,d){if(!o&&-1<e.collectionsWithUpdate.indexOf(d)&&r[d])for(i=h(i),n[d]=[],l=0;l<Math.max(i.length,r[d].length);l++)r[d][l]&&(void 0===i[l]?n[d][l]=r[d][l]:(n[d][l]={},t(i[l],r[d][l],n[d][l],o+1)));else s(i)?(n[d]=a(i)?[]:{},t(i,r[d]||{},n[d],o+1)):n[d]=void 0===r[d]?null:r[d]})}(t,this.options,i,0),i},t.prototype.matchResponsiveRule=function(t,e){var i=t.condition;(i.callback||function(){return this.chartWidth<=c(i.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=c(i.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=c(i.minWidth,0)&&this.chartHeight>=c(i.minHeight,0)}).call(this)&&e.push(t._id)},t.prototype.setResponsive=function(t,e){var i=this,r=this.options.responsive,n=this.currentResponsive,a=[];!e&&r&&r.rules&&r.rules.forEach(function(t){void 0===t._id&&(t._id=u()),i.matchResponsiveRule(t,a)},this),(e=l.apply(void 0,a.map(function(t){return o((r||{}).rules||[],function(e){return e._id===t})}).map(function(t){return t&&t.chartOptions}))).isResponsiveOptions=!0,(a=a.toString()||void 0)!==(n&&n.ruleIds)&&(n&&this.update(n.undoOptions,t,!0),a?((n=this.currentOptions(e)).isResponsiveOptions=!0,this.currentResponsive={ruleIds:a,mergedOptions:e,undoOptions:n},this.update(e,t,!0)):this.currentResponsive=void 0)},t}(),r}),e(i,"masters/highcharts.src.js",[i["Core/Globals.js"],i["Core/Utilities.js"],i["Core/DefaultOptions.js"],i["Core/Animation/Fx.js"],i["Core/Animation/AnimationUtilities.js"],i["Core/Renderer/HTML/AST.js"],i["Core/FormatUtilities.js"],i["Core/Renderer/RendererUtilities.js"],i["Core/Renderer/SVG/SVGElement.js"],i["Core/Renderer/SVG/SVGRenderer.js"],i["Core/Renderer/HTML/HTMLElement.js"],i["Core/Renderer/HTML/HTMLRenderer.js"],i["Core/Axis/Axis.js"],i["Core/Axis/DateTimeAxis.js"],i["Core/Axis/LogarithmicAxis.js"],i["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],i["Core/Axis/Tick.js"],i["Core/Tooltip.js"],i["Core/Series/Point.js"],i["Core/Pointer.js"],i["Core/MSPointer.js"],i["Core/Legend/Legend.js"],i["Core/Chart/Chart.js"],i["Core/Series/Series.js"],i["Core/Series/SeriesRegistry.js"],i["Series/Column/ColumnSeries.js"],i["Series/Column/ColumnDataLabel.js"],i["Series/Pie/PieSeries.js"],i["Series/Pie/PieDataLabel.js"],i["Core/Series/DataLabel.js"],i["Core/Responsive.js"],i["Core/Color/Color.js"],i["Core/Time.js"]],function(t,e,i,r,n,o,a,s,l,d,c,h,u,p,m,f,g,y,v,I,x,b,C,T,$,w,S,A,_,P,j,k,O){return t.animate=n.animate,t.animObject=n.animObject,t.getDeferredAnimation=n.getDeferredAnimation,t.setAnimation=n.setAnimation,t.stop=n.stop,t.timers=r.timers,t.AST=o,t.Axis=u,t.Chart=C,t.chart=C.chart,t.Fx=r,t.Legend=b,t.PlotLineOrBand=f,t.Point=v,t.Pointer=x.isRequired()?x:I,t.Series=T,t.SVGElement=l,t.SVGRenderer=d,t.Tick=g,t.Time=O,t.Tooltip=y,t.Color=k,t.color=k.parse,h.compose(d),c.compose(l),t.defaultOptions=i.defaultOptions,t.getOptions=i.getOptions,t.time=i.defaultTime,t.setOptions=i.setOptions,t.dateFormat=a.dateFormat,t.format=a.format,t.numberFormat=a.numberFormat,t.addEvent=e.addEvent,t.arrayMax=e.arrayMax,t.arrayMin=e.arrayMin,t.attr=e.attr,t.clearTimeout=e.clearTimeout,t.correctFloat=e.correctFloat,t.createElement=e.createElement,t.css=e.css,t.defined=e.defined,t.destroyObjectProperties=e.destroyObjectProperties,t.discardElement=e.discardElement,t.distribute=s.distribute,t.erase=e.erase,t.error=e.error,t.extend=e.extend,t.extendClass=e.extendClass,t.find=e.find,t.fireEvent=e.fireEvent,t.getMagnitude=e.getMagnitude,t.getStyle=e.getStyle,t.inArray=e.inArray,t.isArray=e.isArray,t.isClass=e.isClass,t.isDOMElement=e.isDOMElement,t.isFunction=e.isFunction,t.isNumber=e.isNumber,t.isObject=e.isObject,t.isString=e.isString,t.keys=e.keys,t.merge=e.merge,t.normalizeTickInterval=e.normalizeTickInterval,t.objectEach=e.objectEach,t.offset=e.offset,t.pad=e.pad,t.pick=e.pick,t.pInt=e.pInt,t.relativeLength=e.relativeLength,t.removeEvent=e.removeEvent,t.seriesType=$.seriesType,t.splat=e.splat,t.stableSort=e.stableSort,t.syncTimeout=e.syncTimeout,t.timeUnits=e.timeUnits,t.uniqueKey=e.uniqueKey,t.useSerialIds=e.useSerialIds,t.wrap=e.wrap,S.compose(w),P.compose(T),p.compose(u),m.compose(u),_.compose(A),f.compose(u),j.compose(C),t}),i["masters/highcharts.src.js"]._modules=i,i["masters/highcharts.src.js"]},e.exports?(n.default=n,e.exports=r.document?n(r):n):"function"==typeof define&&define.amd?(t.r,void 0!==(o=n(r))&&t.v(o)):(r.Highcharts&&r.Highcharts.error(16,!0),r.Highcharts=n(r))},712663,(t,e,i)=>{var r,n;r=function(t){function e(t,e,i,r){t.hasOwnProperty(e)||(t[e]=r.apply(null,i))}e(t=t?t._modules:{},"Extensions/FullScreen.js",[t["Core/Chart/Chart.js"],t["Core/Globals.js"],t["Core/Renderer/HTML/AST.js"],t["Core/Utilities.js"]],function(t,e,i,r){var n=r.addEvent;return e.Fullscreen=r=function(){function t(t){this.chart=t,this.isOpen=!1,t=t.renderTo,this.browserProps||("function"==typeof t.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:t.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:t.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:t.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}return t.prototype.close=function(){var t=this.chart,e=t.options.chart;this.isOpen&&this.browserProps&&t.container.ownerDocument instanceof Document&&t.container.ownerDocument[this.browserProps.exitFullscreen](),this.unbindFullscreenEvent&&(this.unbindFullscreenEvent=this.unbindFullscreenEvent()),t.setSize(this.origWidth,this.origHeight,!1),this.origHeight=this.origWidth=void 0,e.width=this.origWidthOption,e.height=this.origHeightOption,this.origHeightOption=this.origWidthOption=void 0,this.isOpen=!1,this.setButtonText()},t.prototype.open=function(){var t=this,e=t.chart,i=e.options.chart;if(i&&(t.origWidthOption=i.width,t.origHeightOption=i.height),t.origWidth=e.chartWidth,t.origHeight=e.chartHeight,t.browserProps){var r=n(e.container.ownerDocument,t.browserProps.fullscreenChange,function(){t.isOpen?(t.isOpen=!1,t.close()):(e.setSize(null,null,!1),t.isOpen=!0,t.setButtonText())}),o=n(e,"destroy",r);t.unbindFullscreenEvent=function(){r(),o()},(i=e.renderTo[t.browserProps.requestFullscreen]())&&i.catch(function(){alert("Full screen is not supported inside a frame.")})}},t.prototype.setButtonText=function(){var t=this.chart,e=t.exportDivElements,r=t.options.exporting,n=r&&r.buttons&&r.buttons.contextButton.menuItems;t=t.options.lang,r&&r.menuItemDefinitions&&t&&t.exitFullscreen&&t.viewFullscreen&&n&&e&&(e=e[n.indexOf("viewFullscreen")])&&i.setElementHTML(e,this.isOpen?t.exitFullscreen:r.menuItemDefinitions.viewFullscreen.text||t.viewFullscreen)},t.prototype.toggle=function(){this.isOpen?this.close():this.open()},t}(),n(t,"beforeRender",function(){this.fullscreen=new e.Fullscreen(this)}),e.Fullscreen}),e(t,"Mixins/Navigation.js",[],function(){return{initUpdate:function(t){t.navigation||(t.navigation={updates:[],update:function(t,e){this.updates.forEach(function(i){i.update.call(i.context,t,e)})}})},addUpdate:function(t,e){e.navigation||this.initUpdate(e),e.navigation.updates.push({update:t,context:e})}}}),e(t,"Extensions/Exporting/ExportingDefaults.js",[t["Core/Globals.js"],t["Core/Color/Palette.js"]],function(t,e){return{exporting:{type:"image/png",url:"https://export.highcharts.com/",printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:"viewFullscreen printChart separator downloadPNG downloadJPEG downloadPDF downloadSVG".split(" ")}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:12.5,symbolY:10.5,align:"right",buttonSpacing:3,height:22,verticalAlign:"top",width:24,symbolFill:e.neutralColor60,symbolStroke:e.neutralColor60,symbolStrokeWidth:3,theme:{padding:5}},menuStyle:{border:"1px solid "+e.neutralColor40,background:e.backgroundColor,padding:"5px 0"},menuItemStyle:{padding:"0.5em 1em",color:e.neutralColor80,background:"none",fontSize:t.isTouchDevice?"14px":"11px",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:e.highlightColor80,color:e.backgroundColor}}}}),e(t,"Extensions/Exporting/ExportingSymbols.js",[],function(){var t;return!function(t){function e(t,e,i,r){return[["M",t,e+2.5],["L",t+i,e+2.5],["M",t,e+r/2+.5],["L",t+i,e+r/2+.5],["M",t,e+r-1.5],["L",t+i,e+r-1.5]]}function i(t,e,i,r){return t=r/3-2,(r=[]).concat(this.circle(i-t,e,t,t),this.circle(i-t,e+t+4,t,t),this.circle(i-t,e+2*(t+4),t,t))}var r=[];t.compose=function(t){-1===r.indexOf(t)&&(r.push(t),(t=t.prototype.symbols).menu=e,t.menuball=i.bind(t))}}(t||(t={})),t}),e(t,"Core/HttpUtilities.js",[t["Core/Globals.js"],t["Core/Utilities.js"]],function(t,e){var i=t.doc,r=e.createElement,n=e.discardElement,o=e.merge,a=e.objectEach,s={ajax:function(t){var e=o(!0,{url:!1,type:"get",dataType:"json",success:!1,error:!1,data:!1,headers:{}},t);t={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"};var i=new XMLHttpRequest;if(!e.url)return!1;i.open(e.type.toUpperCase(),e.url,!0),e.headers["Content-Type"]||i.setRequestHeader("Content-Type",t[e.dataType]||t.text),a(e.headers,function(t,e){i.setRequestHeader(e,t)}),i.onreadystatechange=function(){if(4===i.readyState){if(200===i.status){var t=i.responseText;if("json"===e.dataType)try{t=JSON.parse(t)}catch(t){e.error&&e.error(i,t);return}return e.success&&e.success(t)}e.error&&e.error(i,i.responseText)}};try{e.data=JSON.stringify(e.data)}catch(t){}i.send(e.data||!0)},getJSON:function(t,e){s.ajax({url:t,success:e,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(t,e,s){var l=r("form",o({method:"post",action:t,enctype:"multipart/form-data"},s),{display:"none"},i.body);a(e,function(t,e){r("input",{type:"hidden",name:e,value:t},null,l)}),l.submit(),n(l)}};return s}),e(t,"Extensions/Exporting/Exporting.js",[t["Core/Renderer/HTML/AST.js"],t["Core/Chart/Chart.js"],t["Mixins/Navigation.js"],t["Core/DefaultOptions.js"],t["Extensions/Exporting/ExportingDefaults.js"],t["Extensions/Exporting/ExportingSymbols.js"],t["Core/Globals.js"],t["Core/HttpUtilities.js"],t["Core/Color/Palette.js"],t["Core/Utilities.js"]],function(t,e,i,r,n,o,a,s,l,d){r=r.defaultOptions;var c,h=a.doc,u=a.win,p=d.addEvent,m=d.css,f=d.createElement,g=d.discardElement,y=d.extend,v=d.find,I=d.fireEvent,x=d.isObject,b=d.merge,C=d.objectEach,T=d.pick,$=d.removeEvent,w=d.uniqueKey;return!function(r){function n(t){var e=this,i=e.renderer,r=b(e.options.navigation.buttonOptions,t),n=r.onclick,o=r.menuItems,a=r.symbolSize||12;if(e.btnCount||(e.btnCount=0),e.exportDivElements||(e.exportDivElements=[],e.exportSVGElements=[]),!1!==r.enabled&&r.theme){var s,d=r.theme,c=d.states,h=c&&c.hover;c=c&&c.select,e.styledMode||(d.fill=T(d.fill,l.backgroundColor),d.stroke=T(d.stroke,"none")),delete d.states,n?s=function(t){t&&t.stopPropagation(),n.call(e,t)}:o&&(s=function(t){t&&t.stopPropagation(),e.contextMenu(u.menuClassName,o,u.translateX,u.translateY,u.width,u.height,u),u.setState(2)}),r.text&&r.symbol?d.paddingLeft=T(d.paddingLeft,30):r.text||y(d,{width:r.width,height:r.height,padding:0}),e.styledMode||(d["stroke-linecap"]="round",d.fill=T(d.fill,l.backgroundColor),d.stroke=T(d.stroke,"none"));var u=i.button(r.text,0,0,s,d,h,c).addClass(t.className).attr({title:T(e.options.lang[r._titleKey||r.titleKey],"")});if(u.menuClassName=t.menuClassName||"highcharts-menu-"+e.btnCount++,r.symbol){var p=i.symbol(r.symbol,r.symbolX-a/2,r.symbolY-a/2,a,a,{width:a,height:a}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(u);e.styledMode||p.attr({stroke:r.symbolStroke,fill:r.symbolFill,"stroke-width":r.symbolStrokeWidth||1})}u.add(e.exportingGroup).align(y(r,{width:u.width,x:T(r.x,e.buttonOffset)}),!0,"spacingBox"),e.buttonOffset+=(u.width+r.buttonSpacing)*("right"===r.align?-1:1),e.exportSVGElements.push(u,p)}}function c(){if(this.printReverseInfo){var t=this.printReverseInfo,e=t.childNodes,i=t.origDisplay;t=t.resetParams,this.moveContainers(this.renderTo),[].forEach.call(e,function(t,e){1===t.nodeType&&(t.style.display=i[e]||"")}),this.isPrinting=!1,t&&this.setSize.apply(this,t),delete this.printReverseInfo,X=void 0,I(this,"afterPrint")}}function S(){var t=h.body,e=this.options.exporting.printMaxWidth,i={childNodes:t.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer.reset(null,0),I(this,"beforePrint"),e&&this.chartWidth>e&&(i.resetParams=[this.options.chart.width,void 0,!1],this.setSize(e,void 0,!1)),[].forEach.call(i.childNodes,function(t,e){1===t.nodeType&&(i.origDisplay[e]=t.style.display,t.style.display="none")}),this.moveContainers(t),this.printReverseInfo=i}function A(t){t.renderExporting(),p(t,"redraw",t.renderExporting),p(t,"destroy",t.destroyExport)}function _(e,i,r,n,o,a,s){var l=this,c=l.options.navigation,g=l.chartWidth,v=l.chartHeight,b="cache-"+e,C=Math.max(o,a),T=l[b];if(!T){l.exportContextMenu=l[b]=T=f("div",{className:e},{position:"absolute",zIndex:1e3,padding:C+"px",pointerEvents:"auto"},l.fixedDiv||l.container);var $=f("ul",{className:"highcharts-menu"},{listStyle:"none",margin:0,padding:0},T);l.styledMode||m($,y({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},c.menuStyle)),T.hideMenu=function(){m(T,{display:"none"}),s&&s.setState(0),l.openMenu=!1,m(l.renderTo,{overflow:"hidden"}),m(l.container,{overflow:"hidden"}),d.clearTimeout(T.hideTimer),I(l,"exportMenuHidden")},l.exportEvents.push(p(T,"mouseleave",function(){T.hideTimer=u.setTimeout(T.hideMenu,500)}),p(T,"mouseenter",function(){d.clearTimeout(T.hideTimer)}),p(h,"mouseup",function(t){l.pointer.inClass(t.target,e)||T.hideMenu()}),p(T,"click",function(){l.openMenu&&T.hideMenu()})),i.forEach(function(e){if("string"==typeof e&&(e=l.options.exporting.menuItemDefinitions[e]),x(e,!0)){var i=void 0;e.separator?i=f("hr",void 0,void 0,$):("viewData"===e.textKey&&l.isDataTableVisible&&(e.textKey="hideData"),i=f("li",{className:"highcharts-menu-item",onclick:function(t){t&&t.stopPropagation(),T.hideMenu(),e.onclick&&e.onclick.apply(l,arguments)}},void 0,$),t.setElementHTML(i,e.text||l.options.lang[e.textKey]),l.styledMode||(i.onmouseover=function(){m(this,c.menuItemHoverStyle)},i.onmouseout=function(){m(this,c.menuItemStyle)},m(i,y({cursor:"pointer"},c.menuItemStyle)))),l.exportDivElements.push(i)}}),l.exportDivElements.push($,T),l.exportMenuWidth=T.offsetWidth,l.exportMenuHeight=T.offsetHeight}i={display:"block"},r+l.exportMenuWidth>g?i.right=g-r-o-C+"px":i.left=r-C+"px",n+a+l.exportMenuHeight>v&&"top"!==s.alignOptions.verticalAlign?i.bottom=v-n-C+"px":i.top=n+a-C+"px",m(T,i),m(l.renderTo,{overflow:""}),m(l.container,{overflow:""}),l.openMenu=!0,I(l,"exportMenuShown")}function P(t){var e,i=t?t.target:this,r=i.exportSVGElements,n=i.exportDivElements;t=i.exportEvents,r&&(r.forEach(function(t,n){t&&(t.onclick=t.ontouchstart=null,i[e="cache-"+t.menuClassName]&&delete i[e],r[n]=t.destroy())}),r.length=0),i.exportingGroup&&(i.exportingGroup.destroy(),delete i.exportingGroup),n&&(n.forEach(function(t,e){t&&(d.clearTimeout(t.hideTimer),$(t,"mouseleave"),n[e]=t.onmouseout=t.onmouseover=t.ontouchstart=t.onclick=null,g(t))}),n.length=0),t&&(t.forEach(function(t){t()}),t.length=0)}function j(t,e){e=this.getSVGForExport(t,e),t=b(this.options.exporting,t),s.post(t.url,{filename:t.filename?t.filename.replace(/\//g,"-"):this.getFilename(),type:t.type,width:t.width||0,scale:t.scale,svg:e},t.formAttributes)}function k(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function O(){var t=this.userOptions.title&&this.userOptions.title.text,e=this.options.exporting.filename;return e?e.replace(/\//g,"-"):("string"==typeof t&&(e=t.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z0-9\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!e||5>e.length)&&(e="chart"),e)}function D(t){var i,r=b(this.options,t);r.plotOptions=b(this.userOptions.plotOptions,t&&t.plotOptions),r.time=b(this.userOptions.time,t&&t.time);var n=f("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},h.body),o=this.renderTo.style.width,a=this.renderTo.style.height;o=r.exporting.sourceWidth||r.chart.width||/px$/.test(o)&&parseInt(o,10)||(r.isGantt?800:600),a=r.exporting.sourceHeight||r.chart.height||/px$/.test(a)&&parseInt(a,10)||400,y(r.chart,{animation:!1,renderTo:n,forExport:!0,renderer:"SVGRenderer",width:o,height:a}),r.exporting.enabled=!1,delete r.data,r.series=[],this.series.forEach(function(t){(i=b(t.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:t.visible})).isInternal||r.series.push(i)});var s={};this.axes.forEach(function(t){t.userOptions.internalKey||(t.userOptions.internalKey=w()),t.options.isInternal||(s[t.coll]||(s[t.coll]=!0,r[t.coll]=[]),r[t.coll].push(b(t.userOptions,{visible:t.visible})))});var l=new e(r,this.callback);return t&&["xAxis","yAxis","series"].forEach(function(e){var i={};t[e]&&(i[e]=t[e],l.update(i))}),this.axes.forEach(function(t){var e=v(l.axes,function(e){return e.options.internalKey===t.userOptions.internalKey}),i=t.getExtremes(),r=i.userMin;i=i.userMax,e&&(void 0!==r&&r!==e.min||void 0!==i&&i!==e.max)&&e.setExtremes(r,i,!0,!1)}),a=l.getChartHTML(),I(this,"getSVG",{chartCopy:l}),a=this.sanitizeSVG(a,r),r=null,l.destroy(),g(n),a}function M(t,e){var i=this.options.exporting;return this.getSVG(b({chart:{borderRadius:0}},i.chartOptions,e,{exporting:{sourceWidth:t&&t.sourceWidth||i.sourceWidth,sourceHeight:t&&t.sourceHeight||i.sourceHeight}}))}function L(t){return t.replace(/([A-Z])/g,function(t,e){return"-"+e.toLowerCase()})}function E(){var t,e=r.inlineWhitelist,i={},n=h.createElement("iframe");m(n,{width:"1px",height:"1px",visibility:"hidden"}),h.body.appendChild(n);var o=n.contentWindow.document;o.open(),o.write('<svg xmlns="http://www.w3.org/2000/svg"></svg>'),o.close(),function r(n){function s(t,r){if(l=d=!1,e.length){for(c=e.length;c--&&!d;)d=e[c].test(r);l=!d}for("transform"===r&&"none"===t&&(l=!0),c=W.length;c--&&!l;)l=W[c].test(r)||"function"==typeof t;l||m[r]===t&&"svg"!==n.nodeName||i[n.nodeName][r]===t||(G&&-1===G.indexOf(r)?h+=L(r)+":"+t+";":t&&n.setAttribute(L(r),t))}var l,d,c,h="";if(1===n.nodeType&&-1===Y.indexOf(n.nodeName)){var p=u.getComputedStyle(n,null),m="svg"===n.nodeName?{}:u.getComputedStyle(n.parentNode,null);if(!i[n.nodeName]){t=o.getElementsByTagName("svg")[0];var f=o.createElementNS(n.namespaceURI,n.nodeName);t.appendChild(f),i[n.nodeName]=b(u.getComputedStyle(f,null)),"text"===n.nodeName&&delete i.text.fill,t.removeChild(f)}if(a.isFirefox||a.isMS)for(var g in p)s(p[g],g);else C(p,s);h&&(p=n.getAttribute("style"),n.setAttribute("style",(p?p+";":"")+h)),"svg"===n.nodeName&&n.setAttribute("stroke-width","1px"),"text"!==n.nodeName&&[].forEach.call(n.children||n.childNodes,r)}}(this.container.querySelector("svg")),t.parentNode.removeChild(t),n.parentNode.removeChild(n)}function R(t){(this.fixedDiv?[this.fixedDiv,this.scrollingContainer]:[this.container]).forEach(function(e){t.appendChild(e)})}function B(){var t=this;t.exporting={update:function(e,i){t.isDirtyExporting=!0,b(!0,t.options.exporting,e),T(i,!0)&&t.redraw()}},i.addUpdate(function(e,i){t.isDirtyExporting=!0,b(!0,t.options.navigation,e),T(i,!0)&&t.redraw()},t)}function F(){var t=this;t.isPrinting||(X=t,a.isSafari||t.beforePrint(),setTimeout(function(){u.focus(),u.print(),a.isSafari||setTimeout(function(){t.afterPrint()},1e3)},1))}function z(){var t=this,e=t.options.exporting,i=e.buttons,r=t.isDirtyExporting||!t.exportSVGElements;t.buttonOffset=0,t.isDirtyExporting&&t.destroyExport(),r&&!1!==e.enabled&&(t.exportEvents=[],t.exportingGroup=t.exportingGroup||t.renderer.g("exporting-group").attr({zIndex:3}).add(),C(i,function(e){t.addButton(e)}),t.isDirtyExporting=!1)}function N(t,e){var i=t.indexOf("</svg>")+6,r=t.substr(i);return t=t.substr(0,i),e&&e.exporting&&e.exporting.allowHTML&&r&&(r='<foreignObject x="0" y="0" width="'+e.chart.width+'" height="'+e.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+r.replace(/(<(?:img|br).*?(?=>))>/g,"$1 />")+"</body></foreignObject>",t=t.replace("</svg>",r+"</svg>")),t=t.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery[0-9]+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;);?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (|NS[0-9]+:)href=/g," xlink:href=").replace(/\n/," ").replace(/(fill|stroke)="rgba\(([ 0-9]+,[ 0-9]+,[ 0-9]+),([ 0-9\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­"),this.ieSanitizeSVG&&(t=this.ieSanitizeSVG(t)),t}var H=[],W=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/],G="fill stroke strokeLinecap strokeLinejoin strokeWidth textAnchor x y".split(" ");r.inlineWhitelist=[];var X,Y=["clipPath","defs","desc"];r.compose=function(t,e){o.compose(e),-1===H.indexOf(t)&&(H.push(t),(e=t.prototype).afterPrint=c,e.exportChart=j,e.inlineStyles=E,e.print=F,e.sanitizeSVG=N,e.getChartHTML=k,e.getSVG=D,e.getSVGForExport=M,e.getFilename=O,e.moveContainers=R,e.beforePrint=S,e.contextMenu=_,e.addButton=n,e.destroyExport=P,e.renderExporting=z,e.callbacks.push(A),p(t,"init",B),a.isSafari&&a.win.matchMedia("print").addListener(function(t){X&&(t.matches?X.beforePrint():X.afterPrint())}))}}(c||(c={})),r.exporting=b(n.exporting,r.exporting),r.lang=b(n.lang,r.lang),r.navigation=b(n.navigation,r.navigation),c}),e(t,"masters/modules/exporting.src.js",[t["Core/Globals.js"],t["Extensions/Exporting/Exporting.js"],t["Core/HttpUtilities.js"]],function(t,e,i){t.HttpUtilities=i,t.ajax=i.ajax,t.getJSON=i.getJSON,t.post=i.post,e.compose(t.Chart,t.Renderer)})},e.exports?(r.default=r,e.exports=r):"function"==typeof define&&define.amd?(r(n=t.r(498981)),r.Highcharts=n,void 0!==r&&t.v(r)):r("u">typeof Highcharts?Highcharts:void 0)},978444,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"DraggableCore",{enumerable:!0,get:function(){return c.default}}),i.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=p(void 0);if(e&&e.has(t))return e.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=r?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,e&&e.set(t,i),i}(t.r(191788)),n=u(t.r(691567)),o=u(t.r(730943)),a=u(t.r(753892)),s=t.r(976636),l=t.r(301461),d=t.r(431223),c=u(t.r(497840)),h=u(t.r(62029));function u(t){return t&&t.__esModule?t:{default:t}}function p(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(p=function(t){return t?i:e})(t)}function m(){return(m=Object.assign.bind()).apply(this,arguments)}function f(t,e,i){var r;return(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}class g extends r.Component{static getDerivedStateFromProps(t,e){let{position:i}=t,{prevPropsPosition:r}=e;return i&&(!r||i.x!==r.x||i.y!==r.y)?((0,h.default)("Draggable: getDerivedStateFromProps %j",{position:i,prevPropsPosition:r}),{x:i.x,y:i.y,prevPropsPosition:{...i}}):null}constructor(t){super(t),f(this,"onDragStart",(t,e)=>{if((0,h.default)("Draggable: onDragStart: %j",e),!1===this.props.onStart(t,(0,l.createDraggableData)(this,e)))return!1;this.setState({dragging:!0,dragged:!0})}),f(this,"onDrag",(t,e)=>{if(!this.state.dragging)return!1;(0,h.default)("Draggable: onDrag: %j",e);let i=(0,l.createDraggableData)(this,e),r={x:i.x,y:i.y,slackX:0,slackY:0};if(this.props.bounds){let{x:t,y:e}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;let[n,o]=(0,l.getBoundPosition)(this,r.x,r.y);r.x=n,r.y=o,r.slackX=this.state.slackX+(t-r.x),r.slackY=this.state.slackY+(e-r.y),i.x=r.x,i.y=r.y,i.deltaX=r.x-this.state.x,i.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(t,i))return!1;this.setState(r)}),f(this,"onDragStop",(t,e)=>{if(!this.state.dragging||!1===this.props.onStop(t,(0,l.createDraggableData)(this,e)))return!1;(0,h.default)("Draggable: onDragStop: %j",e);let i={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:t,y:e}=this.props.position;i.x=t,i.y=e}this.setState(i)}),this.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:{...t.position},slackX:0,slackY:0,isElementSVG:!1},t.position&&!(t.onDrag||t.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var t,e;return null!=(t=null==(e=this.props)||null==(e=e.nodeRef)?void 0:e.current)?t:o.default.findDOMNode(this)}render(){let{axis:t,bounds:e,children:i,defaultPosition:n,defaultClassName:o,defaultClassNameDragging:d,defaultClassNameDragged:h,position:u,positionOffset:p,scale:f,...g}=this.props,y={},v=null,I=!u||this.state.dragging,x=u||n,b={x:(0,l.canDragX)(this)&&I?this.state.x:x.x,y:(0,l.canDragY)(this)&&I?this.state.y:x.y};this.state.isElementSVG?v=(0,s.createSVGTransform)(b,p):y=(0,s.createCSSTransform)(b,p);let C=(0,a.default)(i.props.className||"",o,{[d]:this.state.dragging,[h]:this.state.dragged});return r.createElement(c.default,m({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),r.cloneElement(r.Children.only(i),{className:C,style:{...i.props.style,...y},transform:v}))}}i.default=g,f(g,"displayName","Draggable"),f(g,"propTypes",{...c.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),f(g,"defaultProps",{...c.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},497840,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=h(void 0);if(e&&e.has(t))return e.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=r?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,e&&e.set(t,i),i}(t.r(191788)),n=c(t.r(691567)),o=c(t.r(730943)),a=t.r(976636),s=t.r(301461),l=t.r(431223),d=c(t.r(62029));function c(t){return t&&t.__esModule?t:{default:t}}function h(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(h=function(t){return t?i:e})(t)}function u(t,e,i){var r;return(e="symbol"==typeof(r=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"))?r:String(r))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}let p={start:"touchstart",move:"touchmove",stop:"touchend"},m={start:"mousedown",move:"mousemove",stop:"mouseup"},f=m;class g extends r.Component{constructor(){super(...arguments),u(this,"dragging",!1),u(this,"lastX",0/0),u(this,"lastY",0/0),u(this,"touchIdentifier",null),u(this,"mounted",!1),u(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;let e=this.findDOMNode();if(!e||!e.ownerDocument||!e.ownerDocument.body)throw Error("<DraggableCore> not mounted on DragStart!");let{ownerDocument:i}=e;if(this.props.disabled||!(t.target instanceof i.defaultView.Node)||this.props.handle&&!(0,a.matchesSelectorAndParentsTo)(t.target,this.props.handle,e)||this.props.cancel&&(0,a.matchesSelectorAndParentsTo)(t.target,this.props.cancel,e))return;"touchstart"===t.type&&t.preventDefault();let r=(0,a.getTouchIdentifier)(t);this.touchIdentifier=r;let n=(0,s.getControlPosition)(t,r,this);if(null==n)return;let{x:o,y:l}=n,c=(0,s.createCoreData)(this,o,l);(0,d.default)("DraggableCore: handleDragStart: %j",c),(0,d.default)("calling",this.props.onStart),!1!==this.props.onStart(t,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,a.addUserSelectStyles)(i),this.dragging=!0,this.lastX=o,this.lastY=l,(0,a.addEvent)(i,f.move,this.handleDrag),(0,a.addEvent)(i,f.stop,this.handleDragStop))}),u(this,"handleDrag",t=>{let e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:i,y:r}=e;if(Array.isArray(this.props.grid)){let t=i-this.lastX,e=r-this.lastY;if([t,e]=(0,s.snapToGrid)(this.props.grid,t,e),!t&&!e)return;i=this.lastX+t,r=this.lastY+e}let n=(0,s.createCoreData)(this,i,r);if((0,d.default)("DraggableCore: handleDrag: %j",n),!1===this.props.onDrag(t,n)||!1===this.mounted){try{this.handleDragStop(new MouseEvent("mouseup"))}catch(e){let t=document.createEvent("MouseEvents");t.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(t)}return}this.lastX=i,this.lastY=r}),u(this,"handleDragStop",t=>{if(!this.dragging)return;let e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:i,y:r}=e;if(Array.isArray(this.props.grid)){let t=i-this.lastX||0,e=r-this.lastY||0;[t,e]=(0,s.snapToGrid)(this.props.grid,t,e),i=this.lastX+t,r=this.lastY+e}let n=(0,s.createCoreData)(this,i,r);if(!1===this.props.onStop(t,n)||!1===this.mounted)return!1;let o=this.findDOMNode();o&&this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(o.ownerDocument),(0,d.default)("DraggableCore: handleDragStop: %j",n),this.dragging=!1,this.lastX=0/0,this.lastY=0/0,o&&((0,d.default)("DraggableCore: Removing handlers"),(0,a.removeEvent)(o.ownerDocument,f.move,this.handleDrag),(0,a.removeEvent)(o.ownerDocument,f.stop,this.handleDragStop))}),u(this,"onMouseDown",t=>(f=m,this.handleDragStart(t))),u(this,"onMouseUp",t=>(f=m,this.handleDragStop(t))),u(this,"onTouchStart",t=>(f=p,this.handleDragStart(t))),u(this,"onTouchEnd",t=>(f=p,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;let t=this.findDOMNode();t&&(0,a.addEvent)(t,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;let t=this.findDOMNode();if(t){let{ownerDocument:e}=t;(0,a.removeEvent)(e,m.move,this.handleDrag),(0,a.removeEvent)(e,p.move,this.handleDrag),(0,a.removeEvent)(e,m.stop,this.handleDragStop),(0,a.removeEvent)(e,p.stop,this.handleDragStop),(0,a.removeEvent)(t,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,a.removeUserSelectStyles)(e)}}findDOMNode(){var t,e;return null!=(t=this.props)&&t.nodeRef?null==(e=this.props)||null==(e=e.nodeRef)?void 0:e.current:o.default.findDOMNode(this)}render(){return r.cloneElement(r.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}i.default=g,u(g,"displayName","DraggableCore"),u(g,"propTypes",{allowAnyClick:n.default.bool,children:n.default.node.isRequired,disabled:n.default.bool,enableUserSelectHack:n.default.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw Error("Draggable's offsetParent must be a DOM Node.")},grid:n.default.arrayOf(n.default.number),handle:n.default.string,cancel:n.default.string,nodeRef:n.default.object,onStart:n.default.func,onDrag:n.default.func,onStop:n.default.func,onMouseDown:n.default.func,scale:n.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),u(g,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},161565,(t,e,i)=>{let{default:r,DraggableCore:n}=t.r(978444);e.exports=r,e.exports.default=r,e.exports.DraggableCore=n},976636,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.addClassName=d,i.addEvent=function(t,e,i,r){if(!t)return;let n={capture:!0,...r};t.addEventListener?t.addEventListener(e,i,n):t.attachEvent?t.attachEvent("on"+e,i):t["on"+e]=i},i.addUserSelectStyles=function(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||((e=t.createElement("style")).type="text/css",e.id="react-draggable-style-el",e.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",e.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(e)),t.body&&d(t.body,"react-draggable-transparent-selection")},i.createCSSTransform=function(t,e){let i=l(t,e,"px");return{[(0,n.browserPrefixToKey)("transform",n.default)]:i}},i.createSVGTransform=function(t,e){return l(t,e,"")},i.getTouch=function(t,e){return t.targetTouches&&(0,r.findInArray)(t.targetTouches,t=>e===t.identifier)||t.changedTouches&&(0,r.findInArray)(t.changedTouches,t=>e===t.identifier)},i.getTouchIdentifier=function(t){return t.targetTouches&&t.targetTouches[0]?t.targetTouches[0].identifier:t.changedTouches&&t.changedTouches[0]?t.changedTouches[0].identifier:void 0},i.getTranslation=l,i.innerHeight=function(t){let e=t.clientHeight,i=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,r.int)(i.paddingTop),e-=(0,r.int)(i.paddingBottom)},i.innerWidth=function(t){let e=t.clientWidth,i=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,r.int)(i.paddingLeft),e-=(0,r.int)(i.paddingRight)},i.matchesSelector=s,i.matchesSelectorAndParentsTo=function(t,e,i){let r=t;do{if(s(r,e))return!0;if(r===i)break;r=r.parentNode}while(r)return!1},i.offsetXYFromParent=function(t,e,i){let r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect();return{x:(t.clientX+e.scrollLeft-r.left)/i,y:(t.clientY+e.scrollTop-r.top)/i}},i.outerHeight=function(t){let e=t.clientHeight,i=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,r.int)(i.borderTopWidth),e+=(0,r.int)(i.borderBottomWidth)},i.outerWidth=function(t){let e=t.clientWidth,i=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,r.int)(i.borderLeftWidth),e+=(0,r.int)(i.borderRightWidth)},i.removeClassName=c,i.removeEvent=function(t,e,i,r){if(!t)return;let n={capture:!0,...r};t.removeEventListener?t.removeEventListener(e,i,n):t.detachEvent?t.detachEvent("on"+e,i):t["on"+e]=null},i.removeUserSelectStyles=function(t){if(t)try{if(t.body&&c(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{let e=(t.defaultView||window).getSelection();e&&"Caret"!==e.type&&e.removeAllRanges()}}catch(t){}};var r=t.r(431223),n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=o(void 0);if(e&&e.has(t))return e.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var a=r?Object.getOwnPropertyDescriptor(t,n):null;a&&(a.get||a.set)?Object.defineProperty(i,n,a):i[n]=t[n]}return i.default=t,e&&e.set(t,i),i}(t.r(66228));function o(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(o=function(t){return t?i:e})(t)}let a="";function s(t,e){return a||(a=(0,r.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(e){return(0,r.isFunction)(t[e])})),!!(0,r.isFunction)(t[a])&&t[a](e)}function l(t,e,i){let{x:r,y:n}=t,o="translate(".concat(r).concat(i,",").concat(n).concat(i,")");if(e){let t="".concat("string"==typeof e.x?e.x:e.x+i),r="".concat("string"==typeof e.y?e.y:e.y+i);o="translate(".concat(t,", ").concat(r,")")+o}return o}function d(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function c(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}},66228,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.browserPrefixToKey=o,i.browserPrefixToStyle=function(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t},i.default=void 0,i.getPrefix=n;let r=["Moz","Webkit","O","ms"];function n(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("u"<typeof window)return"";let i=null==(t=window.document)||null==(t=t.documentElement)?void 0:t.style;if(!i||e in i)return"";for(let t=0;t<r.length;t++)if(o(e,r[t])in i)return r[t];return""}function o(t,e){return e?"".concat(e).concat(function(t){let e="",i=!0;for(let r=0;r<t.length;r++)i?(e+=t[r].toUpperCase(),i=!1):"-"===t[r]?i=!0:e+=t[r];return e}(t)):t}i.default=n()},62029,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(){}},301461,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.canDragX=function(t){return"both"===t.props.axis||"x"===t.props.axis},i.canDragY=function(t){return"both"===t.props.axis||"y"===t.props.axis},i.createCoreData=function(t,e,i){let n=!(0,r.isNum)(t.lastX),a=o(t);return n?{node:a,deltaX:0,deltaY:0,lastX:e,lastY:i,x:e,y:i}:{node:a,deltaX:e-t.lastX,deltaY:i-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:i}},i.createDraggableData=function(t,e){let i=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/i,y:t.state.y+e.deltaY/i,deltaX:e.deltaX/i,deltaY:e.deltaY/i,lastX:t.state.x,lastY:t.state.y}},i.getBoundPosition=function(t,e,i){var a;if(!t.props.bounds)return[e,i];let{bounds:s}=t.props;s="string"==typeof s?s:{left:(a=s).left,top:a.top,right:a.right,bottom:a.bottom};let l=o(t);if("string"==typeof s){let t,{ownerDocument:e}=l,i=e.defaultView;if(!((t="parent"===s?l.parentNode:e.querySelector(s))instanceof i.HTMLElement))throw Error('Bounds selector "'+s+'" could not find an element.');let o=i.getComputedStyle(l),a=i.getComputedStyle(t);s={left:-l.offsetLeft+(0,r.int)(a.paddingLeft)+(0,r.int)(o.marginLeft),top:-l.offsetTop+(0,r.int)(a.paddingTop)+(0,r.int)(o.marginTop),right:(0,n.innerWidth)(t)-(0,n.outerWidth)(l)-l.offsetLeft+(0,r.int)(a.paddingRight)-(0,r.int)(o.marginRight),bottom:(0,n.innerHeight)(t)-(0,n.outerHeight)(l)-l.offsetTop+(0,r.int)(a.paddingBottom)-(0,r.int)(o.marginBottom)}}return(0,r.isNum)(s.right)&&(e=Math.min(e,s.right)),(0,r.isNum)(s.bottom)&&(i=Math.min(i,s.bottom)),(0,r.isNum)(s.left)&&(e=Math.max(e,s.left)),(0,r.isNum)(s.top)&&(i=Math.max(i,s.top)),[e,i]},i.getControlPosition=function(t,e,i){let r="number"==typeof e?(0,n.getTouch)(t,e):null;if("number"==typeof e&&!r)return null;let a=o(i),s=i.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,n.offsetXYFromParent)(r||t,s,i.props.scale)},i.snapToGrid=function(t,e,i){return[Math.round(e/t[0])*t[0],Math.round(i/t[1])*t[1]]};var r=t.r(431223),n=t.r(976636);function o(t){let e=t.findDOMNode();if(!e)throw Error("<DraggableCore>: Unmounted during event!");return e}},431223,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.dontSetMe=function(t,e,i){if(t[e])return Error("Invalid prop ".concat(e," passed to ").concat(i," - do not set this, set it on the child."))},i.findInArray=function(t,e){for(let i=0,r=t.length;i<r;i++)if(e.apply(e,[t[i],i,t]))return t[i]},i.int=function(t){return parseInt(t,10)},i.isFunction=function(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)},i.isNum=function(t){return"number"==typeof t&&!isNaN(t)}},754975,(t,e,i)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=u(t.r(191788)),o=u(t.r(691567)),a=t.r(161565),s=t.r(250252),l=t.r(535264),d=t.r(439540),c=t.r(579125),h=u(t.r(479936));function u(t){return t&&t.__esModule?t:{default:t}}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach(function(e){v(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var I=function(t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");c.prototype=Object.create(t&&t.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),t&&f(c,t);var e,i,o=(e=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,i=y(c);return t=e?Reflect.construct(i,arguments,y(this).constructor):i.apply(this,arguments),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return g(t)}(this,t)});function c(){var t;if(!(this instanceof c))throw TypeError("Cannot call a class as a function");for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];return v(g(t=o.call.apply(o,[this].concat(i))),"state",{resizing:null,dragging:null,className:""}),v(g(t),"elementRef",n.default.createRef()),v(g(t),"onDragStart",function(e,i){var r=i.node,n=t.props,o=n.onDragStart,a=n.transformScale;if(o){var s={top:0,left:0},l=r.offsetParent;if(l){var c=l.getBoundingClientRect(),h=r.getBoundingClientRect(),u=h.left/a,p=c.left/a,m=h.top/a,f=c.top/a;s.left=u-p+l.scrollLeft,s.top=m-f+l.scrollTop,t.setState({dragging:s});var y=(0,d.calcXY)(t.getPositionParams(),s.top,s.left,t.props.w,t.props.h),v=y.x,I=y.y;return o.call(g(t),t.props.i,v,I,{e:e,node:r,newPosition:s})}}}),v(g(t),"onDrag",function(e,i){var r=i.node,n=i.deltaX,o=i.deltaY,a=t.props.onDrag;if(a){if(!t.state.dragging)throw Error("onDrag called before onDragStart.");var s=t.state.dragging.top+o,l=t.state.dragging.left+n,c=t.props,h=c.isBounded,u=c.i,p=c.w,m=c.h,f=c.containerWidth,y=t.getPositionParams();if(h){var v=r.offsetParent;if(v){var I=t.props,x=I.margin,b=I.rowHeight,C=v.clientHeight-(0,d.calcGridItemWHPx)(m,b,x[1]);s=(0,d.clamp)(s,0,C);var T=(0,d.calcGridColWidth)(y),$=f-(0,d.calcGridItemWHPx)(p,T,x[0]);l=(0,d.clamp)(l,0,$)}}var w={top:s,left:l};t.setState({dragging:w});var S=(0,d.calcXY)(y,s,l,p,m),A=S.x,_=S.y;return a.call(g(t),u,A,_,{e:e,node:r,newPosition:w})}}),v(g(t),"onDragStop",function(e,i){var r=i.node,n=t.props.onDragStop;if(n){if(!t.state.dragging)throw Error("onDragEnd called before onDragStart.");var o=t.props,a=o.w,s=o.h,l=o.i,c=t.state.dragging,h=c.left,u=c.top;t.setState({dragging:null});var p=(0,d.calcXY)(t.getPositionParams(),u,h,a,s),m=p.x,f=p.y;return n.call(g(t),l,m,f,{e:e,node:r,newPosition:{top:u,left:h}})}}),v(g(t),"onResizeStop",function(e,i){t.onResizeHandler(e,i,"onResizeStop")}),v(g(t),"onResizeStart",function(e,i){t.onResizeHandler(e,i,"onResizeStart")}),v(g(t),"onResize",function(e,i){t.onResizeHandler(e,i,"onResize")}),t}return i=[{key:"shouldComponentUpdate",value:function(t,e){if(this.props.children!==t.children||this.props.droppingPosition!==t.droppingPosition)return!0;var i=(0,d.calcGridItemPosition)(this.getPositionParams(this.props),this.props.x,this.props.y,this.props.w,this.props.h,this.state),r=(0,d.calcGridItemPosition)(this.getPositionParams(t),t.x,t.y,t.w,t.h,e);return!(0,l.fastPositionEqual)(i,r)||this.props.useCSSTransforms!==t.useCSSTransforms}},{key:"componentDidMount",value:function(){this.moveDroppingItem({})}},{key:"componentDidUpdate",value:function(t){this.moveDroppingItem(t)}},{key:"moveDroppingItem",value:function(t){var e=this.props.droppingPosition;if(e){var i=this.elementRef.current;if(i){var r=t.droppingPosition||{left:0,top:0},n=this.state.dragging,o=n&&e.left!==r.left||e.top!==r.top;if(n){if(o){var a=e.left-n.left,s=e.top-n.top;this.onDrag(e.e,{node:i,deltaX:a,deltaY:s})}}else this.onDragStart(e.e,{node:i,deltaX:e.left,deltaY:e.top})}}}},{key:"getPositionParams",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return{cols:t.cols,containerPadding:t.containerPadding,containerWidth:t.containerWidth,margin:t.margin,maxRows:t.maxRows,rowHeight:t.rowHeight}}},{key:"createStyle",value:function(t){var e,i=this.props,r=i.usePercentages,n=i.containerWidth;return i.useCSSTransforms?e=(0,l.setTransform)(t):(e=(0,l.setTopLeft)(t),r&&(e.left=(0,l.perc)(t.left/n),e.width=(0,l.perc)(t.width/n))),e}},{key:"mixinDraggable",value:function(t,e){return n.default.createElement(a.DraggableCore,{disabled:!e,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,handle:this.props.handle,cancel:".react-resizable-handle"+(this.props.cancel?","+this.props.cancel:""),scale:this.props.transformScale,nodeRef:this.elementRef},t)}},{key:"mixinResizable",value:function(t,e,i){var r=this.props,o=r.cols,a=r.x,l=r.minW,c=r.minH,h=r.maxW,u=r.maxH,p=r.transformScale,m=r.resizeHandles,f=r.resizeHandle,g=this.getPositionParams(),y=(0,d.calcGridItemPosition)(g,0,0,o-a,0).width,v=(0,d.calcGridItemPosition)(g,0,0,l,c),I=(0,d.calcGridItemPosition)(g,0,0,h,u),x=[v.width,v.height],b=[Math.min(I.width,y),Math.min(I.height,1/0)];return n.default.createElement(s.Resizable,{draggableOpts:{disabled:!i},className:i?void 0:"react-resizable-hide",width:e.width,height:e.height,minConstraints:x,maxConstraints:b,onResizeStop:this.onResizeStop,onResizeStart:this.onResizeStart,onResize:this.onResize,transformScale:p,resizeHandles:m,handle:f},t)}},{key:"onResizeHandler",value:function(t,e,i){var r=e.node,n=e.size,o=this.props[i];if(o){var a=this.props,s=a.cols,l=a.x,c=a.y,h=a.i,u=a.maxH,p=a.minH,m=this.props,f=m.minW,g=m.maxW,y=(0,d.calcWH)(this.getPositionParams(),n.width,n.height,l,c),v=y.w,I=y.h;f=Math.max(f,1),g=Math.min(g,s-l),v=(0,d.clamp)(v,f,g),I=(0,d.clamp)(I,p,u),this.setState({resizing:"onResizeStop"===i?null:n}),o.call(this,h,v,I,{e:t,node:r,size:n})}}},{key:"render",value:function(){var t=this.props,e=t.x,i=t.y,r=t.w,o=t.h,a=t.isDraggable,s=t.isResizable,l=t.droppingPosition,c=t.useCSSTransforms,u=(0,d.calcGridItemPosition)(this.getPositionParams(),e,i,r,o,this.state),p=n.default.Children.only(this.props.children),f=n.default.cloneElement(p,{ref:this.elementRef,className:(0,h.default)("react-grid-item",p.props.className,this.props.className,{static:this.props.static,resizing:!!this.state.resizing,"react-draggable":a,"react-draggable-dragging":!!this.state.dragging,dropping:!!l,cssTransforms:c}),style:m(m(m({},this.props.style),p.props.style),this.createStyle(u))});return f=this.mixinResizable(f,u,s),f=this.mixinDraggable(f,a)}}],function(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(c.prototype,i),c}(n.default.Component);i.default=I,v(I,"propTypes",{children:o.default.element,cols:o.default.number.isRequired,containerWidth:o.default.number.isRequired,rowHeight:o.default.number.isRequired,margin:o.default.array.isRequired,maxRows:o.default.number.isRequired,containerPadding:o.default.array.isRequired,x:o.default.number.isRequired,y:o.default.number.isRequired,w:o.default.number.isRequired,h:o.default.number.isRequired,minW:function(t,e){var i=t[e];return"number"!=typeof i?Error("minWidth not Number"):i>t.w||i>t.maxW?Error("minWidth larger than item width/maxWidth"):void 0},maxW:function(t,e){var i=t[e];return"number"!=typeof i?Error("maxWidth not Number"):i<t.w||i<t.minW?Error("maxWidth smaller than item width/minWidth"):void 0},minH:function(t,e){var i=t[e];return"number"!=typeof i?Error("minHeight not Number"):i>t.h||i>t.maxH?Error("minHeight larger than item height/maxHeight"):void 0},maxH:function(t,e){var i=t[e];return"number"!=typeof i?Error("maxHeight not Number"):i<t.h||i<t.minH?Error("maxHeight smaller than item height/minHeight"):void 0},i:o.default.string.isRequired,resizeHandles:c.resizeHandleAxesType,resizeHandle:c.resizeHandleType,onDragStop:o.default.func,onDragStart:o.default.func,onDrag:o.default.func,onResizeStop:o.default.func,onResizeStart:o.default.func,onResize:o.default.func,isDraggable:o.default.bool.isRequired,isResizable:o.default.bool.isRequired,isBounded:o.default.bool.isRequired,static:o.default.bool,useCSSTransforms:o.default.bool.isRequired,transformScale:o.default.number,className:o.default.string,handle:o.default.string,cancel:o.default.string,droppingPosition:o.default.shape({e:o.default.object.isRequired,left:o.default.number.isRequired,top:o.default.number.isRequired})}),v(I,"defaultProps",{className:"",cancel:"",handle:"",minH:1,minW:1,maxH:1/0,maxW:1/0,transformScale:1})},522579,(t,e,i)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=u(void 0);if(e&&e.has(t))return e.get(t);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=t[o]}return i.default=t,e&&e.set(t,i),i}(t.r(191788)),o=h(t.r(119134)),a=h(t.r(479936)),s=t.r(535264),l=t.r(439540),d=h(t.r(754975)),c=h(t.r(579125));function h(t){return t&&t.__esModule?t:{default:t}}function u(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(u=function(t){return t?i:e})(t)}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach(function(e){b(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function f(t,e){if(t){if("string"==typeof t)return g(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(t,e)}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=Array(e);i<e;i++)r[i]=t[i];return r}function y(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t,e){return(v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function I(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var C="react-grid-layout",T=!1;try{T=/firefox/i.test(navigator.userAgent)}catch(t){}var $=function(t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");u.prototype=Object.create(t&&t.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),t&&v(u,t);var e,i,c,h=(e=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,i=x(u);return t=e?Reflect.construct(i,arguments,x(this).constructor):i.apply(this,arguments),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return I(t)}(this,t)});function u(){var t;if(!(this instanceof u))throw TypeError("Cannot call a class as a function");for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];return b(I(t=h.call.apply(h,[this].concat(i))),"state",{activeDrag:null,layout:(0,s.synchronizeLayoutWithChildren)(t.props.layout,t.props.children,t.props.cols,(0,s.compactType)(t.props),t.props.allowOverlap),mounted:!1,oldDragItem:null,oldLayout:null,oldResizeItem:null,droppingDOMNode:null,children:[]}),b(I(t),"dragEnterCounter",0),b(I(t),"onDragStart",function(e,i,r,n){var o=n.e,a=n.node,l=t.state.layout,d=(0,s.getLayoutItem)(l,e);if(d)return t.setState({oldDragItem:(0,s.cloneLayoutItem)(d),oldLayout:t.state.layout}),t.props.onDragStart(l,d,d,null,o,a)}),b(I(t),"onDrag",function(e,i,r,n){var o=n.e,a=n.node,l=t.state.oldDragItem,d=t.state.layout,c=t.props,h=c.cols,u=c.allowOverlap,p=(0,s.getLayoutItem)(d,e);if(p){var m={w:p.w,h:p.h,x:p.x,y:p.y,placeholder:!0,i:e};d=(0,s.moveElement)(d,p,i,r,!0,t.props.preventCollision,(0,s.compactType)(t.props),h,u),t.props.onDrag(d,l,p,m,o,a),t.setState({layout:u?d:(0,s.compact)(d,(0,s.compactType)(t.props),h),activeDrag:m})}}),b(I(t),"onDragStop",function(e,i,r,n){var o=n.e,a=n.node;if(t.state.activeDrag){var l=t.state.oldDragItem,d=t.state.layout,c=t.props,h=c.cols,u=c.preventCollision,p=c.allowOverlap,m=(0,s.getLayoutItem)(d,e);if(m){d=(0,s.moveElement)(d,m,i,r,!0,u,(0,s.compactType)(t.props),h,p),t.props.onDragStop(d,l,m,null,o,a);var f=p?d:(0,s.compact)(d,(0,s.compactType)(t.props),h),g=t.state.oldLayout;t.setState({activeDrag:null,layout:f,oldDragItem:null,oldLayout:null}),t.onLayoutMaybeChanged(f,g)}}}),b(I(t),"onResizeStart",function(e,i,r,n){var o=n.e,a=n.node,l=t.state.layout,d=(0,s.getLayoutItem)(l,e);d&&(t.setState({oldResizeItem:(0,s.cloneLayoutItem)(d),oldLayout:t.state.layout}),t.props.onResizeStart(l,d,d,null,o,a))}),b(I(t),"onResize",function(e,i,r,n){var o,a=n.e,l=n.node,d=t.state,c=d.layout,h=d.oldResizeItem,u=t.props,p=u.cols,g=u.preventCollision,y=u.allowOverlap,v=function(t){if(Array.isArray(t))return t}(o=(0,s.withLayoutItem)(c,e,function(t){var e;if(g&&!y){var n=(0,s.getAllCollisions)(c,m(m({},t),{},{w:i,h:r})).filter(function(e){return e.i!==t.i});if(e=n.length>0){var o=1/0,a=1/0;n.forEach(function(e){e.x>t.x&&(o=Math.min(o,e.x)),e.y>t.y&&(a=Math.min(a,e.y))}),Number.isFinite(o)&&(t.w=o-t.x),Number.isFinite(a)&&(t.h=a-t.y)}}return e||(t.w=i,t.h=r),t}))||function(t){var e,i,r=null==t?null:"u">typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n=[],o=!0,a=!1;try{for(r=r.call(t);!(o=(e=r.next()).done)&&(n.push(e.value),2!==n.length);o=!0);}catch(t){a=!0,i=t}finally{try{o||null==r.return||r.return()}finally{if(a)throw i}}return n}}(o)||f(o,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),I=v[0],x=v[1];if(x){var b={w:x.w,h:x.h,x:x.x,y:x.y,static:!0,i:e};t.props.onResize(I,h,x,b,a,l),t.setState({layout:y?I:(0,s.compact)(I,(0,s.compactType)(t.props),p),activeDrag:b})}}),b(I(t),"onResizeStop",function(e,i,r,n){var o=n.e,a=n.node,l=t.state,d=l.layout,c=l.oldResizeItem,h=t.props,u=h.cols,p=h.allowOverlap,m=(0,s.getLayoutItem)(d,e);t.props.onResizeStop(d,c,m,null,o,a);var f=p?d:(0,s.compact)(d,(0,s.compactType)(t.props),u),g=t.state.oldLayout;t.setState({activeDrag:null,layout:f,oldResizeItem:null,oldLayout:null}),t.onLayoutMaybeChanged(f,g)}),b(I(t),"onDragOver",function(e){if(e.preventDefault(),e.stopPropagation(),T&&!(null!=(i=e.nativeEvent.target)&&i.classList.contains(C)))return!1;var i,r=t.props,o=r.droppingItem,a=r.onDropDragOver,s=r.margin,d=r.cols,c=r.rowHeight,h=r.maxRows,u=r.width,p=r.containerPadding,y=r.transformScale,v=null==a?void 0:a(e);if(!1===v)return t.state.droppingDOMNode&&t.removeDroppingPlaceholder(),!1;var I=m(m({},o),v),x=t.state.layout,b=e.nativeEvent,$=b.layerX,w=b.layerY,S={left:$/y,top:w/y,e:e};if(t.state.droppingDOMNode){if(t.state.droppingPosition){var A=t.state.droppingPosition,_=A.left,P=A.top;(_!=$||P!=w)&&t.setState({droppingPosition:S})}}else{var j=(0,l.calcXY)({cols:d,margin:s,maxRows:h,rowHeight:c,containerWidth:u,containerPadding:p||s},w,$,I.w,I.h);t.setState({droppingDOMNode:n.createElement("div",{key:I.i}),droppingPosition:S,layout:[].concat(function(t){if(Array.isArray(t))return g(t)}(x)||function(t){if("u">typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(x)||f(x)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[m(m({},I),{},{x:j.x,y:j.y,static:!1,isDraggable:!0})])})}}),b(I(t),"removeDroppingPlaceholder",function(){var e=t.props,i=e.droppingItem,r=e.cols,n=t.state.layout,o=(0,s.compact)(n.filter(function(t){return t.i!==i.i}),(0,s.compactType)(t.props),r);t.setState({layout:o,droppingDOMNode:null,activeDrag:null,droppingPosition:void 0})}),b(I(t),"onDragLeave",function(e){e.preventDefault(),t.dragEnterCounter--,0===t.dragEnterCounter&&t.removeDroppingPlaceholder()}),b(I(t),"onDragEnter",function(e){e.preventDefault(),t.dragEnterCounter++}),b(I(t),"onDrop",function(e){e.preventDefault();var i=t.props.droppingItem,r=t.state.layout,n=r.find(function(t){return t.i===i.i});t.dragEnterCounter=0,t.removeDroppingPlaceholder(),t.props.onDrop(r,n,e)}),t}return i=[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.onLayoutMaybeChanged(this.state.layout,this.props.layout)}},{key:"shouldComponentUpdate",value:function(t,e){return this.props.children!==t.children||!(0,s.fastRGLPropsEqual)(this.props,t,o.default)||this.state.activeDrag!==e.activeDrag||this.state.mounted!==e.mounted||this.state.droppingPosition!==e.droppingPosition}},{key:"componentDidUpdate",value:function(t,e){if(!this.state.activeDrag){var i=this.state.layout,r=e.layout;this.onLayoutMaybeChanged(i,r)}}},{key:"containerHeight",value:function(){if(this.props.autoSize){var t=(0,s.bottom)(this.state.layout),e=this.props.containerPadding?this.props.containerPadding[1]:this.props.margin[1];return t*this.props.rowHeight+(t-1)*this.props.margin[1]+2*e+"px"}}},{key:"onLayoutMaybeChanged",value:function(t,e){e||(e=this.state.layout),(0,o.default)(e,t)||this.props.onLayoutChange(t)}},{key:"placeholder",value:function(){var t=this.state.activeDrag;if(!t)return null;var e=this.props,i=e.width,r=e.cols,o=e.margin,a=e.containerPadding,s=e.rowHeight,l=e.maxRows,c=e.useCSSTransforms,h=e.transformScale;return n.createElement(d.default,{w:t.w,h:t.h,x:t.x,y:t.y,i:t.i,className:"react-grid-placeholder",containerWidth:i,cols:r,margin:o,containerPadding:a||o,maxRows:l,rowHeight:s,isDraggable:!1,isResizable:!1,isBounded:!1,useCSSTransforms:c,transformScale:h},n.createElement("div",null))}},{key:"processGridItem",value:function(t,e){if(t&&t.key){var i=(0,s.getLayoutItem)(this.state.layout,String(t.key));if(!i)return null;var r=this.props,o=r.width,a=r.cols,l=r.margin,c=r.containerPadding,h=r.rowHeight,u=r.maxRows,p=r.isDraggable,m=r.isResizable,f=r.isBounded,g=r.useCSSTransforms,y=r.transformScale,v=r.draggableCancel,I=r.draggableHandle,x=r.resizeHandles,b=r.resizeHandle,C=this.state,T=C.mounted,$=C.droppingPosition,w="boolean"==typeof i.isDraggable?i.isDraggable:!i.static&&p,S="boolean"==typeof i.isResizable?i.isResizable:!i.static&&m,A=i.resizeHandles||x,_=w&&f&&!1!==i.isBounded;return n.createElement(d.default,{containerWidth:o,cols:a,margin:l,containerPadding:c||l,maxRows:u,rowHeight:h,cancel:v,handle:I,onDragStop:this.onDragStop,onDragStart:this.onDragStart,onDrag:this.onDrag,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,isDraggable:w,isResizable:S,isBounded:_,useCSSTransforms:g&&T,usePercentages:!T,transformScale:y,w:i.w,h:i.h,x:i.x,y:i.y,i:i.i,minH:i.minH,minW:i.minW,maxH:i.maxH,maxW:i.maxW,static:i.static,droppingPosition:e?$:void 0,resizeHandles:A,resizeHandle:b},t)}}},{key:"render",value:function(){var t=this,e=this.props,i=e.className,r=e.style,o=e.isDroppable,l=e.innerRef,d=(0,a.default)(C,i),c=m({height:this.containerHeight()},r);return n.createElement("div",{ref:l,className:d,style:c,onDrop:o?this.onDrop:s.noop,onDragLeave:o?this.onDragLeave:s.noop,onDragEnter:o?this.onDragEnter:s.noop,onDragOver:o?this.onDragOver:s.noop},n.Children.map(this.props.children,function(e){return t.processGridItem(e)}),o&&this.state.droppingDOMNode&&this.processGridItem(this.state.droppingDOMNode,!0),this.placeholder())}}],c=[{key:"getDerivedStateFromProps",value:function(t,e){var i;return e.activeDrag?null:((0,o.default)(t.layout,e.propsLayout)&&t.compactType===e.compactType?(0,s.childrenEqual)(t.children,e.children)||(i=e.layout):i=t.layout,i)?{layout:(0,s.synchronizeLayoutWithChildren)(i,t.children,t.cols,(0,s.compactType)(t),t.allowOverlap),compactType:t.compactType,children:t.children,propsLayout:t.layout}:null}}],i&&y(u.prototype,i),c&&y(u,c),u}(n.Component);i.default=$,b($,"displayName","ReactGridLayout"),b($,"propTypes",c.default),b($,"defaultProps",{autoSize:!0,cols:12,className:"",style:{},draggableHandle:"",draggableCancel:"",containerPadding:null,rowHeight:150,maxRows:1/0,layout:[],margin:[10,10],isBounded:!1,isDraggable:!0,isResizable:!0,allowOverlap:!1,isDroppable:!1,useCSSTransforms:!0,transformScale:1,verticalCompact:!0,compactType:"vertical",preventCollision:!1,droppingItem:{i:"__dropping-elem__",h:1,w:1},resizeHandles:["se"],onLayoutChange:s.noop,onDragStart:s.noop,onDrag:s.noop,onDragStop:s.noop,onResizeStart:s.noop,onResize:s.noop,onResizeStop:s.noop,onDrop:s.noop,onDropDragOver:s.noop})},579125,(t,e,i)=>{t.i(350461),Object.defineProperty(i,"__esModule",{value:!0}),i.default=i.resizeHandleType=i.resizeHandleAxesType=void 0;var r=o(t.r(691567)),n=o(t.r(191788));function o(t){return t&&t.__esModule?t:{default:t}}var a=r.default.arrayOf(r.default.oneOf(["s","w","e","n","sw","nw","se","ne"]));i.resizeHandleAxesType=a;var s=r.default.oneOfType([r.default.node,r.default.func]);i.resizeHandleType=s,i.default={className:r.default.string,style:r.default.object,width:r.default.number,autoSize:r.default.bool,cols:r.default.number,draggableCancel:r.default.string,draggableHandle:r.default.string,verticalCompact:function(t){},compactType:r.default.oneOf(["vertical","horizontal"]),layout:function(e){var i=e.layout;void 0!==i&&t.r(535264).validateLayout(i,"layout")},margin:r.default.arrayOf(r.default.number),containerPadding:r.default.arrayOf(r.default.number),rowHeight:r.default.number,maxRows:r.default.number,isBounded:r.default.bool,isDraggable:r.default.bool,isResizable:r.default.bool,allowOverlap:r.default.bool,preventCollision:r.default.bool,useCSSTransforms:r.default.bool,transformScale:r.default.number,isDroppable:r.default.bool,resizeHandles:a,resizeHandle:s,onLayoutChange:r.default.func,onDragStart:r.default.func,onDrag:r.default.func,onDragStop:r.default.func,onResizeStart:r.default.func,onResize:r.default.func,onResizeStop:r.default.func,onDrop:r.default.func,droppingItem:r.default.shape({i:r.default.string.isRequired,w:r.default.number.isRequired,h:r.default.number.isRequired}),children:function(t,e){var i=t[e],r={};n.default.Children.forEach(i,function(t){if((null==t?void 0:t.key)!=null){if(r[t.key])throw Error('Duplicate child key "'+t.key+'" found! This will cause problems in ReactGridLayout.');r[t.key]=!0}})},innerRef:r.default.any}},583643,(t,e,i)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=u(void 0);if(e&&e.has(t))return e.get(t);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=t[o]}return i.default=t,e&&e.set(t,i),i}(t.r(191788)),o=h(t.r(691567)),a=h(t.r(119134)),s=t.r(535264),l=t.r(849853),d=h(t.r(522579)),c=["breakpoint","breakpoints","cols","layouts","margin","containerPadding","onBreakpointChange","onLayoutChange","onWidthChange"];function h(t){return t&&t.__esModule?t:{default:t}}function u(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(u=function(t){return t?i:e})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach(function(e){x(t,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function g(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I(t){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var b=function(t){return Object.prototype.toString.call(t)};function C(t,e){return null==t?null:Array.isArray(t)?t:t[e]}var T=function(t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");u.prototype=Object.create(t&&t.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),t&&y(u,t);var e,i,o,h=(e=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,i=I(u);return t=e?Reflect.construct(i,arguments,I(this).constructor):i.apply(this,arguments),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return v(t)}(this,t)});function u(){var t;if(!(this instanceof u))throw TypeError("Cannot call a class as a function");for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];return x(v(t=h.call.apply(h,[this].concat(i))),"state",t.generateInitialState()),x(v(t),"onLayoutChange",function(e){t.props.onLayoutChange(e,f(f({},t.props.layouts),{},x({},t.state.breakpoint,e)))}),t}return i=[{key:"generateInitialState",value:function(){var t=this.props,e=t.width,i=t.breakpoints,r=t.layouts,n=t.cols,o=(0,l.getBreakpointFromWidth)(i,e),a=(0,l.getColsFromBreakpoint)(o,n),s=!1===this.props.verticalCompact?null:this.props.compactType;return{layout:(0,l.findOrGenerateResponsiveLayout)(r,i,o,o,a,s),breakpoint:o,cols:a}}},{key:"componentDidUpdate",value:function(t){this.props.width==t.width&&this.props.breakpoint===t.breakpoint&&(0,a.default)(this.props.breakpoints,t.breakpoints)&&(0,a.default)(this.props.cols,t.cols)||this.onWidthChange(t)}},{key:"onWidthChange",value:function(t){var e=this.props,i=e.breakpoints,r=e.cols,n=e.layouts,o=e.compactType,a=this.props.breakpoint||(0,l.getBreakpointFromWidth)(this.props.breakpoints,this.props.width),d=this.state.breakpoint,c=(0,l.getColsFromBreakpoint)(a,r),h=f({},n);if(d!==a||t.breakpoints!==i||t.cols!==r){d in h||(h[d]=(0,s.cloneLayout)(this.state.layout));var u=(0,l.findOrGenerateResponsiveLayout)(h,i,a,d,c,o);u=(0,s.synchronizeLayoutWithChildren)(u,this.props.children,c,o,this.props.allowOverlap),h[a]=u,this.props.onLayoutChange(u,h),this.props.onBreakpointChange(a,c),this.setState({breakpoint:a,layout:u,cols:c})}var p=C(this.props.margin,a),m=C(this.props.containerPadding,a);this.props.onWidthChange(this.props.width,p,c,m)}},{key:"render",value:function(){var t=this.props,e=(t.breakpoint,t.breakpoints,t.cols,t.layouts,t.margin),i=t.containerPadding,r=(t.onBreakpointChange,t.onLayoutChange,t.onWidthChange,function(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(t,c));return n.createElement(d.default,p({},r,{margin:C(e,this.state.breakpoint),containerPadding:C(i,this.state.breakpoint),onLayoutChange:this.onLayoutChange,layout:this.state.layout,cols:this.state.cols}))}}],o=[{key:"getDerivedStateFromProps",value:function(t,e){if(!(0,a.default)(t.layouts,e.layouts)){var i=e.breakpoint,r=e.cols;return{layout:(0,l.findOrGenerateResponsiveLayout)(t.layouts,t.breakpoints,i,i,r,t.compactType),layouts:t.layouts}}return null}}],i&&g(u.prototype,i),o&&g(u,o),u}(n.Component);i.default=T,x(T,"propTypes",{breakpoint:o.default.string,breakpoints:o.default.object,allowOverlap:o.default.bool,cols:o.default.object,margin:o.default.oneOfType([o.default.array,o.default.object]),containerPadding:o.default.oneOfType([o.default.array,o.default.object]),layouts:function(t,e){if("[object Object]"!==b(t[e]))throw Error("Layout property must be an object. Received: "+b(t[e]));Object.keys(t[e]).forEach(function(e){if(!(e in t.breakpoints))throw Error("Each key in layouts must align with a key in breakpoints.");(0,s.validateLayout)(t.layouts[e],"layouts."+e)})},width:o.default.number.isRequired,onBreakpointChange:o.default.func,onLayoutChange:o.default.func,onWidthChange:o.default.func}),x(T,"defaultProps",{breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},containerPadding:{lg:null,md:null,sm:null,xs:null,xxs:null},layouts:{},margin:[10,10],allowOverlap:!1,onBreakpointChange:s.noop,onLayoutChange:s.noop,onWidthChange:s.noop})},439540,(t,e,i)=>{function r(t){var e=t.margin,i=t.containerPadding,r=t.containerWidth,n=t.cols;return(r-e[0]*(n-1)-2*i[0])/n}function n(t,e,i){return Number.isFinite(t)?Math.round(e*t+Math.max(0,t-1)*i):t}function o(t,e,i){return Math.max(Math.min(t,i),e)}Object.defineProperty(i,"__esModule",{value:!0}),i.calcGridColWidth=r,i.calcGridItemWHPx=n,i.calcGridItemPosition=function(t,e,i,o,a,s){var l=t.margin,d=t.containerPadding,c=t.rowHeight,h=r(t),u={};return s&&s.resizing?(u.width=Math.round(s.resizing.width),u.height=Math.round(s.resizing.height)):(u.width=n(o,h,l[0]),u.height=n(a,c,l[1])),s&&s.dragging?(u.top=Math.round(s.dragging.top),u.left=Math.round(s.dragging.left)):(u.top=Math.round((c+l[1])*i+d[1]),u.left=Math.round((h+l[0])*e+d[0])),u},i.calcXY=function(t,e,i,n,a){var s=t.margin,l=t.cols,d=t.rowHeight,c=t.maxRows,h=r(t),u=Math.round((i-s[0])/(h+s[0])),p=Math.round((e-s[1])/(d+s[1]));return{x:u=o(u,0,l-n),y:p=o(p,0,c-a)}},i.calcWH=function(t,e,i,n,a){var s=t.margin,l=t.maxRows,d=t.cols,c=t.rowHeight,h=r(t),u=Math.round((e+s[0])/(h+s[0])),p=Math.round((i+s[1])/(c+s[1]));return{w:u=o(u,0,d-n),h:p=o(p,0,l-a)}},i.clamp=o},787470,(t,e,i)=>{function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){var e,i;return i=e=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");d.prototype=Object.create(e&&e.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),e&&h(d,e);var i,o,l=(i=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e=p(d);return t=i?Reflect.construct(e,arguments,p(this).constructor):e.apply(this,arguments),function(t,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return u(t)}(this,t)});function d(){var t;if(!(this instanceof d))throw TypeError("Cannot call a class as a function");for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];return m(u(t=l.call.apply(l,[this].concat(i))),"state",{width:1280}),m(u(t),"elementRef",n.createRef()),m(u(t),"mounted",!1),m(u(t),"onWindowResize",function(){if(t.mounted){var e=t.elementRef.current;e instanceof HTMLElement&&e.offsetWidth&&t.setState({width:e.offsetWidth})}}),t}return o=[{key:"componentDidMount",value:function(){this.mounted=!0,window.addEventListener("resize",this.onWindowResize),this.onWindowResize()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var e=this.props,i=e.measureBeforeMount,r=function(t,e){if(null==t)return{};var i,r,n=function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(e,s);return i&&!this.mounted?n.createElement("div",{className:(0,a.default)(this.props.className,"react-grid-layout"),style:this.props.style,ref:this.elementRef}):n.createElement(t,c({innerRef:this.elementRef},r,this.state))}}],function(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(d.prototype,o),d}(n.Component),m(e,"defaultProps",{measureBeforeMount:!1}),m(e,"propTypes",{measureBeforeMount:o.default.bool}),i};var n=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=d(void 0);if(e&&e.has(t))return e.get(t);var i={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(i,o,a):i[o]=t[o]}return i.default=t,e&&e.set(t,i),i}(t.r(191788)),o=l(t.r(691567)),a=l(t.r(479936)),s=["measureBeforeMount"];function l(t){return t&&t.__esModule?t:{default:t}}function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(d=function(t){return t?i:e})(t)}function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},849853,(t,e,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.getBreakpointFromWidth=function(t,e){for(var i=n(t),r=i[0],o=1,a=i.length;o<a;o++){var s=i[o];e>t[s]&&(r=s)}return r},i.getColsFromBreakpoint=function(t,e){if(!e[t])throw Error("ResponsiveReactGridLayout: `cols` entry for breakpoint "+t+" is missing!");return e[t]},i.findOrGenerateResponsiveLayout=function(t,e,i,o,a,s){if(t[i])return(0,r.cloneLayout)(t[i]);for(var l=t[o],d=n(e),c=d.slice(d.indexOf(i)),h=0,u=c.length;h<u;h++){var p=c[h];if(t[p]){l=t[p];break}}return l=(0,r.cloneLayout)(l||[]),(0,r.compact)((0,r.correctBounds)(l,{cols:a}),s,a)},i.sortBreakpoints=n;var r=t.r(535264);function n(t){return Object.keys(t).sort(function(e,i){return t[e]-t[i]})}},535264,(t,e,i)=>{t.i(350461),Object.defineProperty(i,"__esModule",{value:!0}),i.bottom=l,i.cloneLayout=function(t){for(var e=Array(t.length),i=0,r=t.length;i<r;i++)e[i]=c(t[i]);return e},i.modifyLayout=d,i.withLayoutItem=function(t,e,i){var r=y(t,e);return r?[t=d(t,r=i(c(r))),r]:[t,null]},i.cloneLayoutItem=c,i.childrenEqual=function(t,e){return(0,r.default)(n.default.Children.map(t,function(t){return null==t?void 0:t.key}),n.default.Children.map(e,function(t){return null==t?void 0:t.key}))},i.fastPositionEqual=function(t,e){return t.left===e.left&&t.top===e.top&&t.width===e.width&&t.height===e.height},i.collides=h,i.compact=u,i.compactItem=f,i.correctBounds=g,i.getLayoutItem=y,i.getFirstCollision=v,i.getAllCollisions=I,i.getStatics=x,i.moveElement=b,i.moveElementAwayFromCollision=C,i.perc=function(t){return 100*t+"%"},i.setTransform=function(t){var e=t.top,i=t.left,r=t.width,n=t.height,o="translate(".concat(i,"px,").concat(e,"px)");return{transform:o,WebkitTransform:o,MozTransform:o,msTransform:o,OTransform:o,width:"".concat(r,"px"),height:"".concat(n,"px"),position:"absolute"}},i.setTopLeft=function(t){var e=t.top,i=t.left,r=t.width,n=t.height;return{top:"".concat(e,"px"),left:"".concat(i,"px"),width:"".concat(r,"px"),height:"".concat(n,"px"),position:"absolute"}},i.sortLayoutItems=T,i.sortLayoutItemsByRowCol=$,i.sortLayoutItemsByColRow=w,i.synchronizeLayoutWithChildren=function(t,e,i,r,o){t=t||[];var a=[];n.default.Children.forEach(e,function(e){if((null==e?void 0:e.key)!=null){var i=y(t,String(e.key));if(i)a.push(c(i));else{var r=e.props["data-grid"]||e.props._grid;r?a.push(c(s(s({},r),{},{i:e.key}))):a.push(c({w:1,h:1,x:0,y:l(a),i:String(e.key)}))}}});var d=g(a,{cols:i});return o?d:u(d,r,i)},i.validateLayout=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Layout",i=["x","y","w","h"];if(!Array.isArray(t))throw Error(e+" must be an array!");for(var r=0,n=t.length;r<n;r++){for(var o=t[r],a=0;a<i.length;a++)if("number"!=typeof o[i[a]])throw Error("ReactGridLayout: "+e+"["+r+"]."+i[a]+" must be a number!");if(o.i&&"string"!=typeof o.i)throw Error("ReactGridLayout: "+e+"["+r+"].i must be a string!");if(void 0!==o.static&&"boolean"!=typeof o.static)throw Error("ReactGridLayout: "+e+"["+r+"].static must be a boolean!")}},i.compactType=function(t){var e=t||{},i=e.verticalCompact,r=e.compactType;return!1===i?null:r},i.noop=i.fastRGLPropsEqual=void 0;var r=o(t.r(119134)),n=o(t.r(191788));function o(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach(function(e){var r,n,o;r=t,n=e,o=i[e],n in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function l(t){for(var e,i=0,r=0,n=t.length;r<n;r++)(e=t[r].y+t[r].h)>i&&(i=e);return i}function d(t,e){for(var i=Array(t.length),r=0,n=t.length;r<n;r++)e.i===t[r].i?i[r]=e:i[r]=t[r];return i}function c(t){return{w:t.w,h:t.h,x:t.x,y:t.y,i:t.i,minW:t.minW,maxW:t.maxW,minH:t.minH,maxH:t.maxH,moved:!!t.moved,static:!!t.static,isDraggable:t.isDraggable,isResizable:t.isResizable,resizeHandles:t.resizeHandles,isBounded:t.isBounded}}function h(t,e){return t.i!==e.i&&!(t.x+t.w<=e.x)&&!(t.x>=e.x+e.w)&&!(t.y+t.h<=e.y)&&!(t.y>=e.y+e.h)}function u(t,e,i){for(var r=x(t),n=T(t,e),o=Array(t.length),a=0,s=n.length;a<s;a++){var l=c(n[a]);l.static||(l=f(r,l,e,i,n),r.push(l)),o[t.indexOf(n[a])]=l,l.moved=!1}return o}i.fastRGLPropsEqual=t.r(793878);var p={x:"w",y:"h"};function m(t,e,i,r){var n=p[r];e[r]+=1;for(var o=t.map(function(t){return t.i}).indexOf(e.i),a=o+1;a<t.length;a++){var s=t[a];if(!s.static){if(s.y>e.y+e.h)break;h(e,s)&&m(t,s,i+e[n],r)}}e[r]=i}function f(t,e,i,r,n){var o,a="horizontal"===i;if("vertical"===i)for(e.y=Math.min(l(t),e.y);e.y>0&&!v(t,e);)e.y--;else if(a)for(;e.x>0&&!v(t,e);)e.x--;for(;o=v(t,e);)a?m(n,e,o.x+o.w,"x"):m(n,e,o.y+o.h,"y"),a&&e.x+e.w>r&&(e.x=r-e.w,e.y++);return e.y=Math.max(e.y,0),e.x=Math.max(e.x,0),e}function g(t,e){for(var i=x(t),r=0,n=t.length;r<n;r++){var o=t[r];if(o.x+o.w>e.cols&&(o.x=e.cols-o.w),o.x<0&&(o.x=0,o.w=e.cols),o.static)for(;v(i,o);)o.y++;else i.push(o)}return t}function y(t,e){for(var i=0,r=t.length;i<r;i++)if(t[i].i===e)return t[i]}function v(t,e){for(var i=0,r=t.length;i<r;i++)if(h(t[i],e))return t[i]}function I(t,e){return t.filter(function(t){return h(t,e)})}function x(t){return t.filter(function(t){return t.static})}function b(t,e,i,r,n,o,a,s,l){if(e.static&&!0!==e.isDraggable||e.y===r&&e.x===i)return t;S("Moving element ".concat(e.i," to [").concat(String(i),",").concat(String(r),"] from [").concat(e.x,",").concat(e.y,"]"));var d=e.x,c=e.y;"number"==typeof i&&(e.x=i),"number"==typeof r&&(e.y=r),e.moved=!0;var h=T(t,a);("vertical"===a&&"number"==typeof r?c>=r:"horizontal"===a&&"number"==typeof i&&d>=i)&&(h=h.reverse());var u=I(h,e);if(o&&u.length)return l||(S("Collision prevented on ".concat(e.i,", reverting.")),e.x=d,e.y=c,e.moved=!1),t;for(var p=0,m=u.length;p<m;p++){var f=u[p];S("Resolving collision between ".concat(e.i," at [").concat(e.x,",").concat(e.y,"] and ").concat(f.i," at [").concat(f.x,",").concat(f.y,"]")),f.moved||(t=f.static?C(t,f,e,n,a,s):C(t,e,f,n,a,s))}return t}function C(t,e,i,r,n,o){var a="horizontal"===n,s="horizontal"!==n,l=e.static;if(r){r=!1;var d={x:a?Math.max(e.x-i.w,0):i.x,y:s?Math.max(e.y-i.h,0):i.y,w:i.w,h:i.h,i:"-1"};if(!v(t,d))return S("Doing reverse collision on ".concat(i.i," up to [").concat(d.x,",").concat(d.y,"].")),b(t,i,a?d.x:void 0,s?d.y:void 0,r,l,n,o)}return b(t,i,a?i.x+1:void 0,s?i.y+1:void 0,r,l,n,o)}function T(t,e){return"horizontal"===e?w(t):"vertical"===e?$(t):t}function $(t){return t.slice(0).sort(function(t,e){return t.y>e.y||t.y===e.y&&t.x>e.x?1:t.y===e.y&&t.x===e.x?0:-1})}function w(t){return t.slice(0).sort(function(t,e){return t.x>e.x||t.x===e.x&&t.y>e.y?1:-1})}function S(){}i.noop=function(){}},716929,(t,e,i)=>{i.__esModule=!0,i.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=l(void 0);if(e&&e.has(t))return e.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=r?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,e&&e.set(t,i),i}(t.r(191788)),n=t.r(161565),o=t.r(500036),a=t.r(349687),s=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function l(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(l=function(t){return t?i:e})(t)}function d(){return(d=Object.assign.bind()).apply(this,arguments)}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach(function(e){var r,n,o;r=t,n=e,o=i[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){function e(){for(var e,i=arguments.length,r=Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).handleRefs={},e.lastHandleRect=null,e.slack=null,e}e.prototype=Object.create(t.prototype),e.prototype.constructor=e,u(e,t);var i=e.prototype;return i.componentWillUnmount=function(){this.resetData()},i.resetData=function(){this.lastHandleRect=this.slack=null},i.runConstraints=function(t,e){var i=this.props,r=i.minConstraints,n=i.maxConstraints,o=i.lockAspectRatio;if(!r&&!n&&!o)return[t,e];if(o){var a=this.props.width/this.props.height;Math.abs(t-this.props.width)>Math.abs((e-this.props.height)*a)?e=t/a:t=e*a}var s=t,l=e,d=this.slack||[0,0],c=d[0],h=d[1];return t+=c,e+=h,r&&(t=Math.max(r[0],t),e=Math.max(r[1],e)),n&&(t=Math.min(n[0],t),e=Math.min(n[1],e)),this.slack=[c+(s-t),h+(l-e)],[t,e]},i.resizeHandler=function(t,e){var i=this;return function(r,n){var o=n.node,a=n.deltaX,s=n.deltaY;"onResizeStart"===t&&i.resetData();var l=("both"===i.props.axis||"x"===i.props.axis)&&"n"!==e&&"s"!==e,d=("both"===i.props.axis||"y"===i.props.axis)&&"e"!==e&&"w"!==e;if(l||d){var c=e[0],h=e[e.length-1],u=o.getBoundingClientRect();null!=i.lastHandleRect&&("w"===h&&(a+=u.left-i.lastHandleRect.left),"n"===c&&(s+=u.top-i.lastHandleRect.top)),i.lastHandleRect=u,"w"===h&&(a=-a),"n"===c&&(s=-s);var p=i.props.width+(l?a/i.props.transformScale:0),m=i.props.height+(d?s/i.props.transformScale:0),f=i.runConstraints(p,m);p=f[0],m=f[1];var g=p!==i.props.width||m!==i.props.height,y="function"==typeof i.props[t]?i.props[t]:null;y&&!("onResize"===t&&!g)&&(null==r.persist||r.persist(),y(r,{node:o,size:{width:p,height:m},handle:e})),"onResizeStop"===t&&i.resetData()}}},i.renderResizeHandle=function(t,e){var i=this.props.handle;if(!i)return r.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+t,ref:e});if("function"==typeof i)return i(t,e);var n=h({ref:e},"string"==typeof i.type?{}:{handleAxis:t});return r.cloneElement(i,n)},i.render=function(){var t=this,e=this.props,i=e.children,a=e.className,l=e.draggableOpts,c=(e.width,e.height,e.handle,e.handleSize,e.lockAspectRatio,e.axis,e.minConstraints,e.maxConstraints,e.onResize,e.onResizeStop,e.onResizeStart,e.resizeHandles),u=(e.transformScale,function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(e,s));return(0,o.cloneElement)(i,h(h({},u),{},{className:(a?a+" ":"")+"react-resizable",children:[].concat(i.props.children,c.map(function(e){var i,o=null!=(i=t.handleRefs[e])?i:t.handleRefs[e]=r.createRef();return r.createElement(n.DraggableCore,d({},l,{nodeRef:o,key:"resizableHandle-"+e,onStop:t.resizeHandler("onResizeStop",e),onStart:t.resizeHandler("onResizeStart",e),onDrag:t.resizeHandler("onResize",e)}),t.renderResizeHandle(e,o))}))}))},e}(r.Component);i.default=p,p.propTypes=a.resizableProps,p.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1}},353875,(t,e,i)=>{i.__esModule=!0,i.default=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var e=d(void 0);if(e&&e.has(t))return e.get(t);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if("default"!==n&&Object.prototype.hasOwnProperty.call(t,n)){var o=r?Object.getOwnPropertyDescriptor(t,n):null;o&&(o.get||o.set)?Object.defineProperty(i,n,o):i[n]=t[n]}return i.default=t,e&&e.set(t,i),i}(t.r(191788)),n=l(t.r(691567)),o=l(t.r(716929)),a=t.r(349687),s=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function l(t){return t&&t.__esModule?t:{default:t}}function d(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,i=new WeakMap;return(d=function(t){return t?i:e})(t)}function c(){return(c=Object.assign.bind()).apply(this,arguments)}function h(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?h(Object(i),!0).forEach(function(e){var r,n,o;r=t,n=e,o=i[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}function p(t,e){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}var m=function(t){function e(){for(var e,i=arguments.length,r=Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))||this).state={width:e.props.width,height:e.props.height,propsWidth:e.props.width,propsHeight:e.props.height},e.onResize=function(t,i){var r=i.size;e.props.onResize?(null==t.persist||t.persist(),e.setState(r,function(){return e.props.onResize&&e.props.onResize(t,i)})):e.setState(r)},e}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,p(e,t),e.getDerivedStateFromProps=function(t,e){return e.propsWidth!==t.width||e.propsHeight!==t.height?{width:t.width,height:t.height,propsWidth:t.width,propsHeight:t.height}:null},e.prototype.render=function(){var t=this.props,e=t.handle,i=t.handleSize,n=(t.onResize,t.onResizeStart),a=t.onResizeStop,l=t.draggableOpts,d=t.minConstraints,h=t.maxConstraints,p=t.lockAspectRatio,m=t.axis,f=(t.width,t.height,t.resizeHandles),g=t.style,y=t.transformScale,v=function(t,e){if(null==t)return{};var i,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)i=o[r],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,s);return r.createElement(o.default,{axis:m,draggableOpts:l,handle:e,handleSize:i,height:this.state.height,lockAspectRatio:p,maxConstraints:h,minConstraints:d,onResizeStart:n,onResize:this.onResize,onResizeStop:a,resizeHandles:f,transformScale:y,width:this.state.width},r.createElement("div",c({},v,{style:u(u({},g),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},e}(r.Component);i.default=m,m.propTypes=u(u({},a.resizableProps),{},{children:n.default.element})},349687,(t,e,i)=>{i.__esModule=!0,i.resizableProps=void 0;var r,n=(r=t.r(691567))&&r.__esModule?r:{default:r};t.r(161565),i.resizableProps={axis:n.default.oneOf(["both","x","y","none"]),className:n.default.string,children:n.default.element.isRequired,draggableOpts:n.default.shape({allowAnyClick:n.default.bool,cancel:n.default.string,children:n.default.node,disabled:n.default.bool,enableUserSelectHack:n.default.bool,offsetParent:n.default.node,grid:n.default.arrayOf(n.default.number),handle:n.default.string,nodeRef:n.default.object,onStart:n.default.func,onDrag:n.default.func,onStop:n.default.func,onMouseDown:n.default.func,scale:n.default.number}),height:function(){for(var t,e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var o=i[0];return"both"===o.axis||"y"===o.axis?(t=n.default.number).isRequired.apply(t,i):n.default.number.apply(n.default,i)},handle:n.default.oneOfType([n.default.node,n.default.func]),handleSize:n.default.arrayOf(n.default.number),lockAspectRatio:n.default.bool,maxConstraints:n.default.arrayOf(n.default.number),minConstraints:n.default.arrayOf(n.default.number),onResizeStop:n.default.func,onResizeStart:n.default.func,onResize:n.default.func,resizeHandles:n.default.arrayOf(n.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:n.default.number,width:function(){for(var t,e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var o=i[0];return"both"===o.axis||"x"===o.axis?(t=n.default.number).isRequired.apply(t,i):n.default.number.apply(n.default,i)}}},500036,(t,e,i)=>{i.__esModule=!0,i.cloneElement=function(t,e){return e.style&&t.props.style&&(e.style=a(a({},t.props.style),e.style)),e.className&&t.props.className&&(e.className=t.props.className+" "+e.className),n.default.cloneElement(t,e)};var r,n=(r=t.r(191788))&&r.__esModule?r:{default:r};function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,r)}return i}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach(function(e){var r,n,o;r=t,n=e,o=i[e],(n=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var r=i.call(t,e||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))})}return t}},250252,(t,e,i)=>{e.exports=function(){throw Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},e.exports.Resizable=t.r(716929).default,e.exports.ResizableBox=t.r(353875).default},459971,t=>{var e=t.i(391398),i=t.i(115871),r=t.i(203828);let n={lg:[{i:"CustomerDebtTable",x:0,y:0,w:12,h:3,minW:6,maxW:12,minH:1,maxH:3},{i:"ReactiveAmountByMonth",x:0,y:5,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"NewCustomerAccountsChart",x:3,y:8,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"SpendFromNewCustomerAccountsChart",x:6,y:8,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"WorstCustomersByAgedReceivablesTable",x:9,y:8,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["customer",0,n],166188),t.i(166188);let o={lg:[{i:"JobsByMonth",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"JobsFinancialByDayLineChart",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["overview",0,o],923373),t.i(923373);let a={lg:[{i:"AverageAllocationTime",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"JobsByService",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"PercentageOfWorkOrdersByServiceLineTable",x:8,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["service",0,a],385116),t.i(385116);let s={lg:[{i:"jobsBySLA",x:0,y:0,w:4,h:3,minW:2,maxW:6,minH:2,maxH:6}]};t.s(["sla",0,s],168079),t.i(168079);let l={lg:[{i:"JobsByStatusPieChart",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["status",0,l],165035),t.i(165035);let d={lg:[{i:"SupplierDebtTable",x:0,y:0,w:12,h:3,minW:6,maxW:12,minH:1,maxH:3},{i:"LateAttendanceBySupplierChart",x:0,y:4,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["supplier",0,d],338400),t.i(338400);let c={lg:[{i:"TopPropertiesBySpendTable",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TopCustomersByNumberOfPropertiesTable",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["property",0,c],947478),t.i(947478);let h={lg:[{i:"TopAssetTypesBySpendTable",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TopAssetsBySpendTable",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TopAssetsByNumberOfJobsTable",x:0,y:4,w:12,h:3,minW:2,maxW:6,minH:2,maxH:6}]};t.s(["asset",0,h],428814),t.i(428814);let u={lg:[{i:"SpendByCoverageAreaTable",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["coverage",0,u],309479),t.i(309479);let p={lg:[{i:"TotalQuotesSent",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TotalQuotesReportSent",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TotalQuoteIvoiceSent",x:8,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"SumQuoteSent",x:0,y:5,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"SumQuoteAccepted",x:8,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};t.s(["quote",0,p],176063),t.i(176063),t.s(["asset",0,h,"coverage",0,u,"customer",0,n,"overview",0,o,"property",0,c,"quote",0,p,"service",0,a,"sla",0,s,"status",0,l,"supplier",0,d],394320);var m=t.i(394320),f=t.i(191788),g=t.i(84100),y=t.i(512527);let v=[{label:"Last Day",value:"-1"},{label:"Last 7 Days",value:"-7"},{label:"Last 30 Days",value:"-30",default:!0},{label:"Last 90 Days",value:"-90"},{label:"Custom",value:"custom"}],I=t=>{let e=new Date;return{startDate:(0,y.f)(e,t),endDate:e,intervals:t}};var x=t.i(443103),b=t.i(712663),C=t.i(432171),T=t.i(159080);let $=T.f`
  query GetDashboard_AllocationTime_By_Service(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    allocationByService: getDashboard_AllocationTime_By_Service(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { value: desc }
    ) {
      serviceId: id
      allocationInMinutes: value
      serviceName: name
    }
    meta: getDashboard_AllocationTime_By_Service_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          value
        }
      }
    }
  }
`;var w=t.i(498981),S=t.i(899164),A=t.i(978319),_=t.i(37463),P=t.i(220490),j=t.i(106850),k=t.i(119209),O=t.i(986351),D=t.i(773831),M=t.i(813843);let L=t=>{let{title:i,children:r,isTable:n,name:o,removeChart:a}=t,s=(0,e.jsxs)(M.f,{direction:"row",alignItems:"center",spacing:.5,children:[(0,e.jsx)(D.f,{onClick:t=>{t.stopPropagation(),a(t,o)},size:"small",title:"Delete",children:(0,e.jsx)(A.default,{color:"error",fontSize:"small"})}),(0,e.jsx)(O.f,{orientation:"vertical",flexItem:!0}),(0,e.jsx)(D.f,{className:"dragHandle",onClick:t=>t.stopPropagation(),size:"small",title:"Move",children:(0,e.jsx)(_.default,{fontSize:"small"})})]});return(0,e.jsxs)(P.f,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,e.jsx)(k.f,{action:s,title:i,titleTypographyProps:{variant:"h6"}}),(0,e.jsx)(j.f,{sx:{flex:1,minHeight:0,overflowX:n?"hidden":"unset"},children:r})]})},E=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{allocationByService:o,meta:a}={allocationByService:[],meta:{}}}=(0,C.t)($,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),s=a.aggregate?.avg.allocationInMinutes/60|0,l=a.aggregate?.avg.allocationInMinutes%60|0;return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"AverageAllocationTime",removeChart:n,title:`Average Allocation Time by Service Line (${s}:${l})`,children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column"},title:{text:null},series:[{data:o.map(t=>({name:t.serviceName,y:t.allocationInMinutes})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:i})})});t.s(["AverageAllocationTime",0,E],845966);let R=T.f`
  query GetTopLateSuppliers(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    attendanceBySupplier: getDashboard_AttendanceTime_By_Supplier(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { reactive_customer: asc }
      limit: 10
    ) {
      delayedJobs: intval_extra
      delayedJobsPercent: reactive_customer
      jobCount: count
      latencyInMinutes: value
      supplierName: name
    }
    meta: getDashboard_AttendanceTime_By_Supplier_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          latencyInMinutes: value
        }
      }
    }
  }
`,B=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{attendanceBySupplier:o}={attendanceBySupplier:[]}}=(0,C.t)(R,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"LateAttendanceBySupplierChart",removeChart:n,title:"Top 10 Late Suppliers",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column"},xAxis:{type:"category",title:null},yAxis:{stackLabels:{enabled:!0}},plotOptions:{column:{stacking:"normal",pointPadding:0,groupPadding:0,dataLabels:{enabled:!1}}},series:[{data:o.map(t=>({name:t.supplierName,y:-Math.round(t.delayedJobs/t.jobCount*100)})),showInLegend:!1},{data:o.map(t=>({name:t.supplierName,y:100-Math.round(t.delayedJobs/t.jobCount*100)})),showInLegend:!1}]},ref:i})})});t.s(["LateAttendanceBySupplierChart",0,B],581928);let F=T.f`
  query GetAverageOutstandingByDay(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageDaysOutstanding: getDashboard_Average_Outstanding_By_Day(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: value
    }
    meta: getDashboard_Average_Outstanding_By_Day_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`;var z=t.i(886748);let N=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{averageDaysOutstanding:o}={averageDaysOutstanding:[]}}=(0,C.t)(F,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"AverageDaysOutstandingChart",removeChart:n,title:"Average Days Outstanding",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.avg||0})),name:"Avg",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Days"}}},ref:i})})});t.s(["AverageDaysOutstandingChart",0,N],965507);let H=T.f`
  query GetAverageJobLength(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageJobLength: getDashboard_Average_Job_Length(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: value
    }
    meta: getDashboard_Average_Job_Length_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`;var W=t.i(332793),G=t.i(144097),X=t.i(760814),Y=t.i(738251),U=t.i(322135),V=t.i(683125);let q={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"40%",minHeight:"40%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function J(t){let{openModal:r,setOpenModal:n,children:o,title:a}=t;return(0,e.jsx)("div",{children:(0,e.jsx)(V.f,{open:r,onClose:()=>n(!1),children:(0,e.jsx)(Y.f,{sx:q,children:(0,e.jsxs)(i.f,{variant:"h6",component:"h2",sx:{fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:600,fontSize:"1rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.87)"},children:[a," Filters",o]})})})})}var Q=t.i(827010),K=t.i(851123),Z=t.i(362537);function tt(t){let{title:r,children:n,isTable:o,name:a,removeChart:s,filtersComponent:l,activeFiltersComponent:d,setOpenModal:c,openModal:h}=t,u=(t=>{switch(t){case"Average Job Revenue":return"The average revenue per completed job.";case"Average Job Length":return"The average time taken to complete a job.";case"Average Time To Accept Job":return"The average time taken for a job to be accepted once it has been offered. ";case"SLA Breach (Count)":return"The number of jobs where a relevant SLA has been.";case"SLA Breach (Percentage)":return"The percentage of jobs where the relevant SLA has been breached.";case"Average Time To Close Job":return"The average time taken to close down a job once completed.";case"Number Of Quotes":return"Number of quotes submitted during time period.";case"Average Quote Value":return"The average value of quotes submitted during time period. ";case"Quote Acceptance Rate":return"The percentage of quotes submitted that are accepted. ";default:return null}})(r);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J,{title:r,openModal:h,setOpenModal:c,children:l}),(0,e.jsxs)(P.f,{sx:{minWidth:300,border:"1px solid rgba(211,211,211,0.6)",height:"100%"},children:[(0,e.jsx)(k.f,{title:(0,e.jsxs)(M.f,{direction:"row",children:[(0,e.jsx)(i.f,{sx:{fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:500,fontSize:"1rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.87)"},children:r}),(0,e.jsx)(U.f,{placement:"right-start",title:u,children:(0,e.jsx)(G.default,{fontSize:"medium",sx:{color:"#2196F3",ml:"0.1rem",position:"relative"}})})]}),action:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(D.f,{onClick:()=>c(!0),size:"small",sx:{mr:"20px"},children:(0,e.jsx)(W.default,{sx:{color:"rgba(39, 39, 39, 0.7)"}})}),(0,e.jsx)(D.f,{onClick:t=>{t.stopPropagation(),s(t,a)},size:"small",sx:{mr:"20px"},children:(0,e.jsx)(A.default,{sx:{color:"rgba(39, 39, 39, 0.7)"}})}),(0,e.jsx)(D.f,{className:"dragHandle",onClick:t=>t.stopPropagation(),size:"small",sx:{mr:"20px"},children:(0,e.jsx)(_.default,{sx:{color:"rgba(39, 39, 39, 0.7)"}})})]})}),(0,e.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,e.jsx)(j.f,{sx:{borderBottom:"1px solid #E4E7EB"},children:(0,e.jsx)(te,{overflow:o,children:n})}),(0,e.jsx)(Y.f,{children:d})]})]})]})}let te=(0,X.U)(Y.f).withConfig({displayName:"chartWrapper__StyledChildren",componentId:"sc-44bd05c3-0"})`
  overflow-x: ${t=>{let{overflow:e}=t;return e?"hidden":"unset"}};
`;var ti=t.i(594301),tr=t.i(422411),tn=t.i(755548),to=t.i(98926),ta=t.i(691567),ts=t.i(652148),tl=t.i(515523);let td=(0,f.memo)(t=>{let{AddForm:i,accountId:r,area:n,assetCategoryId:o,entity:a,entityId:s,errors:l,id:d,isClearable:c=!0,isDisabled:h,label:u="Account",locationId:p,name:m="account",serviceId:g,taxonomyGroupType:y,customerId:v,customerRole:I,type:x="account",userId:b,onChange:C,control:T,filters:$,...w}=t,S=(0,to.f)(),[A,_]=(0,f.useState)(!1),[P,j]=(0,f.useState)([]),[k,O]=(0,f.useState)(!1),{hasRole:D}=(0,ti.f)(),[,M]=(0,f.useState)(!1);(0,f.useEffect)(()=>(M(!1),O(!1),()=>{}),[r,o,a,s,p,g,x,v,I,b]);let L=async()=>{if(k)return M(!0),null;_(!0);let{query:t,variables:e={}}=(t=>{let{accountId:e,area:i,assetCategoryId:r,entity:n,entityId:o,hasRole:a,id:s,locationId:l,serviceId:d,taxonomyGroupType:c,customerId:h,customerRole:u,type:p,userId:m}=t,f=p;switch(u&&(f=`${p}_${u}`),f){case"address":return{query:Q.i,variables:{entity:n,entityId:o}};case"asset":return{query:Q.B,variables:{categoryId:r,locationId:l}};case"assetBookable":return{query:Q.B,variables:{categoryId:r,locationId:l,bookable:"yes"}};case"assetCategory":return{query:Q.v,variables:{id:s}};case"coverage":return{query:Q.q};case"customer":return{query:Q.r};case"job":return{query:Q.$,variables:{locationId:l}};case"manager":return{query:Q.C,variables:{accountId:e}};case"product":return{query:Q.B,variables:{category:"product",locationId:l}};case"property":return{query:K.j,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:e}}}}};case"property_user":return{query:K.j,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:e},Account:{type:{_eq:"customer"},Account_Users:{role:{_eq:"user"},userId:{_eq:h}}},User_Account_Locations:{Account_User:{userId:{_eq:h},accountId:{_eq:e}}}}}}};case"sensor":return{query:Q.B,variables:{category:"sensor",locationId:l}};case"service":return{query:Q.Z};case"sla":return{query:Q.k,variables:{type:"priority",adminId:e}};case"sublocation":return{query:Q.B,variables:{category:"sublocation",adminId:e,locationId:l}};case"supplier":{let t={type:{_eq:"supplier"}};return i&&(t.PostcodeAreas={PostcodeArea:{area:{_eq:i}},entity:{_eq:"Account"},status:{_eq:"active"}}),d&&(t.Services={serviceId:{_eq:d},status:{_eq:"active"}}),{query:Q.U,variables:{where:t}}}case"user":return{query:Q.Q,variables:{accountId:e}};case"usersForBookings":return{query:Q.Q,variables:{accountId:m}};case"tenant":return{query:Q.p};case"taxonomyGroup":return{query:Q.J,variables:{type:c}};case"expenseCategory":return{query:Q.f};default:return{query:Q.V}}})({accountId:r,area:n,assetCategoryId:o,entity:a,entityId:s,hasRole:D,id:d,locationId:p,serviceId:g,taxonomyGroupType:y,customerId:v,customerRole:I,type:x,userId:b}),{data:{items:i}={items:[]}}=await S.query({query:t,variables:{...e}});j(i),_(!1),O(!0),M(!0)};return(0,e.jsx)(tr.e,{render:t=>(0,e.jsx)(tl.f,{...t,options:P,value:$[m],getOptionLabel:t=>t.label,sx:{width:"45%",mb:2,"& .MuiInputLabel-root":{lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.54)"}},onOpen:L,loading:A,renderInput:t=>(0,e.jsx)(ts.f,{...t,label:(t=>{switch(t){case"supplier":return"Select supplier";case"customer":return"Select customer";case"property":return"Select property";case"service":return"Select service";case"coverage":return"Select postcodes";case"sla":return"SLA";case"user":return"Assigned to";default:return""}})(x),variant:"standard",inputProps:{...t.inputProps,style:{lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.07875px",color:"rgba(0, 0, 0, 0.54)"}}}),onChange:(e,i)=>{t.onChange(i)}}),name:m,control:T})},(t,e)=>{let i=!0;return t.errors[t.name]?.message!==e.errors[e.name]?.message&&(i=!1),["accountId","assetCategoryId","entity","entityId","locationId","serviceId","type","value","customerId","customerRole"].forEach(r=>{t[r]!==e[r]&&(i=!1)}),i});td.propTypes={AddForm:ta.object,area:ta.string,accountId:ta.number,assetCategoryId:ta.number,control:ta.object.isRequired,errors:ta.object.isRequired,entity:ta.string,entityId:ta.number,id:ta.number,isClearable:ta.bool,label:ta.string,locationId:ta.number,name:ta.string,serviceId:ta.number,taxonomyGroupType:(0,ta.oneOf)(["expenseCategory","costCategory","jobTags"]),type:ta.string};var tc=t.i(130325),th=t.i(668921),tu=t.i(901004),tp=t.i(539117),tm=t.i(231637);let tf=t=>{let{name:i,label:r,control:n,defaultValue:o,children:a,options:s,variant:l,...d}=t;return(0,e.jsxs)(th.f,{sx:{width:r?"45%":"100%"},fullWidth:!0,children:[r&&(0,e.jsx)(tm.f,{sx:{"&.MuiInputLabel-root	":{lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.07875px",color:"rgba(0, 0, 0, 0.54)"},"&.MuiInputLabel-formControl":{left:"-13px",top:"5px"}},htmlFor:"select",children:r}),(0,e.jsx)(tr.e,{as:(0,e.jsx)(tp.f,{id:"select",...d,variant:l,sx:{mt:2,lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.54)"},children:s.map(t=>(0,e.jsx)(tu.f,{value:t.value,sx:{fontFamily:"Nunito-Regular",fontStyle:"normal",fontWeight:400,fontSize:"0.875rem",lineHeight:"24px",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.54)"},children:t.label},t.value))}),name:i,control:n,defaultValue:o})]})},tg=tc.f,ty=[{label:"All",value:"All"},{label:"PPM",value:1},{label:"Reactive",value:0}],tv=[{label:"All",value:"All"},{label:"Fixed",value:1},{label:"Time and material",value:0}],tI=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId,isPlanned:t.isPlanned,isFixed:t.isFixed}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tg,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tg,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"slaId",type:"sla",control:a}),(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(tf,{control:a,name:"isPlanned",options:ty,variant:"standard",label:"Schedule"}),(0,e.jsx)(tf,{control:a,name:"isFixed",options:tv,variant:"standard",label:"Price"})]}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})};var tx=t.i(740790);let tb=t=>{let{filters:i}=t,r=Object.keys(i).map(t=>{switch(t){case"managerId":return{label:"Assigned to",value:i[t]?.label||null};case"customerId":return{label:"Customer",value:i[t]?.label||null};case"isFixed":return{label:"Price",value:(t=>{switch(t){case 0:return"Time and materials";case 1:return"Fixed";case"All":return"All";default:return null}})(i[t])};case"isPlanned":return{label:"Schedule",value:(t=>{switch(t){case 0:return"Reactive";case 1:return"PPM";case"All":return"All";default:return null}})(i[t])};case"locationId":return{label:"Location",value:i[t]?.label||null};case"serviceId":return{label:"Service",value:i[t]?.label||null};case"slaId":return{label:"SLA",value:i[t]?.label||null};case"supplierId":return{label:"Supplier",value:i[t]?.label||null};case"intervals":return{label:"Time Slot",value:(t=>{switch(t){case"-1":return"Today";case"-30":return"Last 30 Days";case"-7":return"Last Week";case"custom":return"Custom";default:return null}})(i[t])};case"endDate":return{label:"End Date",value:(0,Z.default)(i[t]).format("DD MMM YYYY")};case"startDate":return{label:"Start Date",value:(0,Z.default)(i[t]).format("DD MMM YYYY")};default:return null}});return(0,e.jsx)(Y.f,{sx:{flexGrow:2,ml:6,mr:6,mb:4,mt:1},children:(0,e.jsx)(tx.f,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:r.map(t=>t&&t.value&&(0,e.jsx)(tC,{label:t.label,value:t.value},t.label))})})},tC=t=>{let{label:r,value:n}=t;return(0,e.jsxs)(tx.f,{item:!0,xs:3,children:[(0,e.jsx)(M.f,{direction:"row",children:(0,e.jsxs)(i.f,{sx:{fontFamily:"Nunito-Regular",fontSize:"0.625rem",fontStyle:"normal",fontWeight:400,lineHeight:"21px",color:"rgba(0, 0, 0, 0.87)",letterSpacing:"0.07875px",mr:"5px"},children:[r," :"]})}),(0,e.jsx)(M.f,{children:(0,e.jsx)(i.f,{sx:{fontFamily:"Nunito-Regular",fontSize:"0.75rem",fontStyle:"normal",fontWeight:400,lineHeight:"21px",color:"#2196F3",letterSpacing:"0.07875px"},children:n})})]})},tT=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null,isPlanned:null,isFixed:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{averageJobLength:c}={averageJobLength:[]}}=(0,C.t)(H,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,customerId:a.customerId?.value,endTime:a.endDate,startTime:a.startDate,isFixed:a.isFixed,isPlanned:a.isPlanned,locationId:a.locationId?.value,managerId:a.managerId?.value,serviceId:a.serviceId?.value,slaId:a.slaId?.value,supplierId:a.supplierId?.value}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"AverageJobLengthChart",removeChart:r,title:"Average Job Length",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(tI,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"AVG, hours",data:c.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Hours"}}},ref:i})})});t.s(["AverageJobLengthChart",0,tT],134800);let t$=T.f`
  query GetJobsFinancialByDay(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageJobRevenue: getDashboard_Financial_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      jobDate: date_val1_extra
      jobRevenue: ppm_revenue
    }
    meta: getDashboard_Financial_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          sumJobRevenue: ppm_revenue
        }
      }
    }
  }
`,tw=tc.f,tS=[{label:"All",value:"All"},{label:"PPM",value:1},{label:"Reactive",value:0}],tA=[{label:"All",value:"All"},{label:"Fixed",value:1},{label:"Time and material",value:0}],t_=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId,isPlanned:t.isPlanned,isFixed:t.isFixed}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tw,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tw,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"slaId",type:"sla",control:a}),(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(tf,{control:a,name:"isPlanned",options:tS,variant:"standard",label:"Schedule"}),(0,e.jsx)(tf,{control:a,name:"isFixed",options:tA,variant:"standard",label:"Price"})]}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",children:"Apply"})]})]})})})},tP=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null,isPlanned:null,isFixed:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{averageJobRevenue:c}={averageJobRevenue:[]}}=(0,C.t)(t$,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,startTime:a.startDate,endTime:a.endDate,customerId:a.customerId?.value,locationId:a.locationId?.value,managerId:a.managerId?.value,postCodeAreaId:a.postCodeAreaId?.value,serviceId:a.serviceId?.value,slaId:a.slaId?.value,supplierId:a.supplierId?.value,isFixed:"All"===a.isFixed?null:a.isFixed,isPlanned:"All"===a.isPlanned?null:a.isPlanned}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"AverageJobRevenueChart",removeChart:r,title:"Average Job Revenue",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(t_,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),tooltip:"",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"Revenue, £",data:c.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.jobRevenue})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:i})})});t.s(["AverageJobRevenueChart",0,tP],240033);let tj=T.f`
  query GetAvgPriceByMonth(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    priceByMonth: getDashboard_AvgPrice_By_Month(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { strval_extra: asc }
    ) {
      month: strval_extra
      avg: value
    }
    meta: getDashboard_AvgPrice_By_Month_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,tk=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{priceByMonth:o}={priceByMonth:[]}}=(0,C.t)(tj,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"AvgPriceChart",removeChart:n,title:"Average Job Price By Month ",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{name:"Ave",data:o.map(t=>({name:(0,Z.default)(t.month,"YYYY-M").format("MMM YYYY"),y:t.avg||0})),showInLegend:!1}]},ref:i})})});t.s(["AvgPriceChart",0,tk],545741);let tO=T.f`
  query GetAverageProfit(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageProfit: getDashboard_Customer_Profit(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: ppm_customer
    }
    meta: getDashboard_Customer_Profit_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,tD=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{averageProfit:o}={averageProfit:[]}}=(0,C.t)(tO,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"AverageProfitChart",removeChart:n,title:"Average Profit Margin",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.avg||0})),name:"average margin profit",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:i})})});t.s(["AverageProfitChart",0,tD],96722);let tM=T.f`
  query GetAverageQuoteValue(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageQuoteValue: getDashboard_Average_Quote(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      amount: reactive_customer
      date: date_val1_extra
    }
    meta: getDashboard_Average_Quote_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          sumJobRevenue: ppm_revenue
        }
      }
    }
  }
`,tL=tc.f,tE=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tL,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tL,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"slaId",type:"sla",control:a}),(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})]}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",children:"Apply"})]})]})})})},tR=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{averageQuoteValue:c}={averageQuoteValue:[]}}=(0,C.t)(tM,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,customerId:a.customerId?.value,endTime:a.endDate,locationId:a.locationId?.value,managerId:a.managerId?.value,serviceId:a.serviceId?.value,slaId:a.slaId,startTime:a.startDate,supplierId:a.supplierId}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"AverageQuoteValueChart",removeChart:r,title:"Average Quote Value",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(tE,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"AVG, £",data:c.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.amount})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:i})})});t.s(["AverageQuoteValueChart",0,tR],277431);let tB=T.f`
  query GetAverageTimeToAcceptByMinute(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageTimeToAcceptByMinute: getDashboard_Average_Time_To_Accept_By_minute(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: value
    }
    meta: getDashboard_Average_Time_To_Accept_By_minute_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,tF=tc.f,tz=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tF,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tF,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsx)(M.f,{direction:"row",justifyContent:"space-between",children:(0,e.jsx)(td,{...u,name:"slaId",type:"sla",control:a})}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},tN=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o=v.find(t=>t.default),a={...I(o.value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null})},[s,l]=(0,f.useState)(a),[d,c]=(0,f.useState)(!1),{data:{averageTimeToAcceptByMinute:h}={averageTimeToAcceptByMinute:[]}}=(0,C.t)(tB,{onCompleted:()=>{c(!1)},variables:{adminId:s.adminId,endTime:s.endDate,startTime:s.startDate,customerId:s.customerId?.value,locationId:s.locationId?.value,serviceId:s.serviceId?.value,slaId:s.slaId?.value,supplierId:s.supplierId?.value}});return(0,b.default)(w.default),h&&(0,e.jsx)(tt,{name:"AverageTimeToAcceptByMinuteChart",removeChart:r,title:"Average Time To Accept Job",openModal:d,setOpenModal:c,filtersComponent:(0,e.jsx)(tz,{filters:s,initialFilters:a,setFilters:l,defaultInterval:o}),activeFiltersComponent:(0,e.jsx)(tb,{filters:s}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"Avg, minutes",data:h.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Minutes"}}},ref:i})})});t.s(["AverageTimeToAcceptByMinuteChart",0,tN],777390);let tH=T.f`
  query GetAverageTimeToAttendance(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageTimeToAttendance: getDashboard_Average_Time_To_Attendance(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: value
    }
    meta: getDashboard_Average_Time_To_Attendance_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,tW=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{averageTimeToAttendance:o}={averageTimeToAttendance:[]}}=(0,C.t)(tH,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"AverageTimeToAttendanceChart",removeChart:n,title:"Average Time To Attendance",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.avg||0})),name:"Attendance",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Hours"}}},ref:i})})});t.s(["AverageTimeToAttendanceChart",0,tW],738056);let tG=T.f`
  query GetAverageTimeToSubmitJobReport(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageTimeToSubmitJobReport: getDashboard_Average_Time_To_Compelete_By_Hour(
      order_by: { date_val1_extra: asc }
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      count: value
      date: date_val1_extra
    }
    meta: getDashboard_Average_Time_To_Compelete_By_Hour_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        count
      }
    }
  }
`,tX=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{averageTimeToSubmitJobReport:o}={averageTimeToSubmitJobReport:[]}}=(0,C.t)(tG,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"AverageTimeToSubmitJobReportChart",removeChart:n,title:"Average Time To Submit Job",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.count})),name:"Avg",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Hours"}}},ref:i})})});t.s(["AverageTimeToSubmitJobReportChart",0,tX],163396);let tY=T.f`
  query GetAverageToCloseByHour(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageToCloseByHour: getDashboard_Average_To_Close_By_Hour(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: value
    }
    meta: getDashboard_Average_To_Close_By_Hour_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,tU=tc.f,tV=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tU,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(tU,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"slaId",type:"sla",control:a}),(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})]}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},tq=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{averageToCloseByHour:c}={averageToCloseByHour:[]}}=(0,C.t)(tY,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,customerId:a.customerId?.value,endTime:a.endDate,locationId:a.locationId?.value,managerId:a.managerId?.value,serviceId:a.serviceId?.value,slaId:a.slaId,startTime:a.startDate,supplierId:a.supplierId}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"AverageToCloseByHourChart",removeChart:r,title:"Average Time To Close Job",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(tV,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{data:c.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.avg||0})),name:"AVG, days",showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Days"}}},ref:i})})});t.s(["AverageToCloseByHourChart",0,tq],932347);let tJ=T.f`
  query GetCountByActiveAccount(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $postCodeAreaId: Int
    $serviceId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    countByActiveAccount: getDashboard_Count_By_Active_Account(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      count: count
      date: date_val1_extra
    }
    meta: getDashboard_Count_By_Active_Account_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        count
      }
    }
  }
`,tQ=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{countByActiveAccount:o}={countByActiveAccount:[]}}=(0,C.t)(tJ,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"CountByActiveAccountChart",removeChart:n,title:"Count By Active Account",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.count})),name:"Active account",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:i})})});t.s(["CountByActiveAccountChart",0,tQ],34831);let tK=T.f`
  query GetCountJobsEngagementRate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    CountJobsEngagementRate: getDashboard_Count_Jobs_Engagement_Rate(
      order_by: { date_val1_extra: asc }
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      count: count
      date: date_val1_extra
    }
    meta: getDashboard_Count_Jobs_Engagement_Rate_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        count
      }
    }
  }
`,tZ=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{CountJobsEngagementRate:o}={CountJobsEngagementRate:[]}}=(0,C.t)(tK,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"CountJobsEngagementRateChart",removeChart:n,title:"Engagement Rate",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.count})),name:"Count",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:i})})});t.s(["CountJobsEngagementRateChart",0,tZ],607499);let t0=T.f`
  query GetCountOpenJobByDate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    countOpenJobsByDate: getDashboard_Count_Open_Jobs_By_Date(
      order_by: { date_val1_extra: desc }
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      count: count
      date: date_val1_extra
    }
    meta: getDashboard_Count_Open_Jobs_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        count: count
      }
    }
  }
`,t1=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{countOpenJobsByDate:o}={countOpenJobsByDate:[]}}=(0,C.t)(t0,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"CountOpenJobsByDateChart",removeChart:n,title:"Number Of Open Jobs",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({type:"line",name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.count})),name:"Count",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:i})})});t.s(["CountOpenJobsByDateChart",0,t1],929147);let t2=T.f`
  query getDashboard_Financial_By_Month(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    financebymonth: getDashboard_Financial_By_Month(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { name: asc }
    ) {
      month: name
      ppm_supplier
      ppm_revenue
      ppm_customer
      reactive_customer
      reactive_revenue
      reactive_supplier
    }
  }
`,t3=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{financebymonth:o}={financebymonth:[]}}=(0,C.t)(t2,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"CustomerAndSupplierAmounts",removeChart:n,title:"Customer \\ Supplier Amounts By Month",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{title:{text:null},xAxis:{type:"category"},yAxis:{title:{text:"Amounts(£)"}},tooltip:{formatter:function(){return"<b>"+this.x+"</b><br/>"+this.series.name+": "+this.y+"<br/>Total: "+this.point.stackTotal}},plotOptions:{column:{stacking:"normal"}},series:[{type:"column",name:"Customer Amount",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.ppm_customer,stack:"customer"})),showInLegend:!1},{type:"column",name:"Customer Amount",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.reactive_customer,stack:"customer"})),showInLegend:!1},{type:"column",name:"PPM Supplier Amount",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.ppm_supplier,stack:"supplier"})),showInLegend:!1},{type:"column",name:"Supplier Amount",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.reactive_supplier,stack:"supplier"})),showInLegend:!1},{type:"spline",marker:{radius:4,lineWidth:1,symbol:"square"},name:"Revenue Amount",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.reactive_revenue})),showInLegend:!1},{type:"spline",marker:{radius:4,lineWidth:1,symbol:"diamond"},name:"Revenue Amount",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.ppm_revenue})),showInLegend:!1}]},ref:i})})});t.s(["CustomerAndSupplierAmounts",0,t3],368557);var t5=t.i(877341);let t9=T.f`
  query CustomerDebt(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_finance_debt_order_by!]
    $outstanding_levels: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    customers: getDashboard_Financial_Debt_By_Customer(
      limit: $limit
      offset: $offset
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        outstanding_levels: $outstanding_levels
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: $orderBy
    ) {
      customer: Account {
        id
        name
      }
      total_invoice_count
      total_invoice_amount
      outstanding_invoice_count
      outstanding_invoice_amount
      outstanding_0_30
      outstanding_31_60
      outstanding_61_90
      outstanding_91_x
    }
    meta: getDashboard_Financial_Debt_By_Customer_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        outstanding_levels: $outstanding_levels
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          total_invoice_count
          total_invoice_amount
          outstanding_invoice_count
          outstanding_invoice_amount
          outstanding_0_30
          outstanding_31_60
          outstanding_61_90
          outstanding_91_x
        }
        totalCount: count
      }
    }
  }
`;var t6=t.i(472552),t4=t.i(974261),t8=t.i(800884),t7=t.i(889231),et=t.i(60450),ee=t.i(836072),ei=t.i(98762),er=t.i(879436);let en=(t,e,i)=>t&&e?`${i?(0,er.f)(t):t||0} (${Math.round(t/e*100)}%)`:`${i?(0,er.f)(t):t||0}`;var eo=t.i(60903),ea=t.i(938504);let es={item:"outstanding_invoice_amount",order:"desc"},el=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:es}),[s,l]=(0,f.useState)(),{data:{customers:d,meta:c}={customers:[],meta:{aggregate:{}}},loading:h,refetch:u}=(0,C.t)(t9,{variables:{...o,outstanding_levels:s}}),[p]=(0,t5.f)(t9,{variables:{limit:t4.r.paginationSize,offset:(a.current?.currentPage-1||0)*t4.r.paginationSize,orderBy:{[a.current?.sort.item]:a.current?.sort.order},outstanding_levels:s},onCompleted:t=>{let e="data:application/octet-stream,"+encodeURIComponent(t6.default.unparse(t.customers.map(t=>({name:t.customer.name,totalInvoiceCount:t.total_invoice_count,outstanding_invoice_count:en(t.outstanding_invoice_count,t.total_invoice_count),outstanding_0_30:en(t.outstanding_0_30,t.outstanding_invoice_count),outstanding_31_60:en(t.outstanding_31_60,t.outstanding_invoice_count),outstanding_61_90:en(t.outstanding_61_90,t.outstanding_invoice_count),outstanding_91_x:en(t.outstanding_91_x,t.outstanding_invoice_count),totalInvoiceAmount:(0,er.f)(t.total_invoice_amount),outstanding_invoice_amount:en(t.outstanding_invoice_amount,t.total_invoice_amount,!0)})),{escapeFormulae:/^[=+@\t\r]/}));(0,eo.f)(e,"customer-debt.csv")}}),m=t=>{let{accountId:i,level:n,number:o}=t,a=`/dashboard/customers/view?id=${i}`,s=`&endDate=${(0,ea.f)(r.endDate)}`,l=`&startDate=${(0,ea.f)(r.startDate)}`;return(0,e.jsx)(t7.f,{href:`${a}&tab=finance&outstandingLevel=${n}${l}${s}`,children:o})},g=[{hidden:!0},{formatter:t=>{let{row:i}=t;return(0,e.jsx)(t7.f,{href:`/dashboard/customers/view?id=${i.accountId}&tab=finance`,children:i.name})},text:"Customer"},{sortable:!0,sortName:"total_invoice_count",text:"Invoice Count"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:0,number:e.outstanding_invoice_count})},sortable:!0,sortName:"outstanding_invoice_count",text:"Outstanding Invoices"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:1,number:e.outstanding_0_30})},sortable:!0,sortName:"outstanding_0_30",text:"Outstanding 1-30"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:31,number:e.outstanding_31_60})},sortable:!0,sortName:"outstanding_31_60",text:"Outstanding 31-60"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:61,number:e.outstanding_61_90})},sortable:!0,sortName:"outstanding_61_90",text:"Outstanding 61-90"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:91,number:e.outstanding_91_x})},sortable:!0,sortName:"outstanding_91_x",text:"Outstanding > 90"},{sortable:!0,sortName:"total_invoice_amount",text:"Total Invoice Amount"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:0,number:e.outstanding_invoice_amount})},sortable:!0,sortName:"outstanding_invoice_amount",text:"Outstanding Amount"}],y=t=>{l(t)};return(0,e.jsxs)(L,{isTable:!0,name:"CustomerDebtTable",removeChart:n,title:"Customer Debt",children:[(0,e.jsx)(M.f,{direction:"row",children:(0,e.jsx)(et.f,{loading:!1,onClick:()=>p()})}),c.aggregate.sum&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"flex-end",flexWrap:"wrap",gap:1,children:[(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Invoice Count: ",(0,e.jsx)("b",{children:c.aggregate.sum.total_invoice_count})]}),color:"secondary",onClick:()=>y(null),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding Invoices:",(0,e.jsx)("b",{children:en(c.aggregate.sum.outstanding_invoice_count,c.aggregate.sum.total_invoice_count)})]}),color:"secondary",variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding 1-30:",(0,e.jsx)("b",{children:en(c.aggregate.sum.outstanding_0_30,c.aggregate.sum.outstanding_invoice_count)})]}),color:1===s?"success":"secondary",onClick:()=>y(1),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding 31-60:",(0,e.jsx)("b",{children:en(c.aggregate.sum.outstanding_31_60,c.aggregate.sum.outstanding_invoice_count)})]}),color:31===s?"success":"secondary",onClick:()=>y(31),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding 61-90:",(0,e.jsx)("b",{children:en(c.aggregate.sum.outstanding_61_90,c.aggregate.sum.outstanding_invoice_count)})]}),color:61===s?"success":"secondary",onClick:()=>y(61),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding > 90:",(0,e.jsx)("b",{children:en(c.aggregate.sum.outstanding_91_x,c.aggregate.sum.outstanding_invoice_count)})]}),color:91===s?"success":"secondary",onClick:()=>y(91),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Total Invoice Amount: ",(0,e.jsx)("b",{children:(0,er.f)(c.aggregate.sum.total_invoice_amount)})]}),color:"secondary",variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding Amount:",(0,e.jsx)("b",{children:en(c.aggregate.sum.outstanding_invoice_amount,c.aggregate.sum.total_invoice_amount,!0)})]}),color:"secondary",variant:"outlined"})]}),(0,e.jsx)(ee.f,{columns:g,history:!1,initialSort:es,loading:h,meta:c,ref:a,refetch:u,rows:d.map(t=>({accountId:t.customer.id,name:t.customer.name,totalInvoiceCount:t.total_invoice_count,outstanding_invoice_count:en(t.outstanding_invoice_count,t.total_invoice_count),outstanding_0_30:en(t.outstanding_0_30,t.outstanding_invoice_count),outstanding_31_60:en(t.outstanding_31_60,t.outstanding_invoice_count),outstanding_61_90:en(t.outstanding_61_90,t.outstanding_invoice_count),outstanding_91_x:en(t.outstanding_91_x,t.outstanding_invoice_count),totalInvoiceAmount:(0,er.f)(t.total_invoice_amount),outstanding_invoice_amount:en(t.outstanding_invoice_amount,t.total_invoice_amount,!0)}))})]})});el.propTypes={filters:ta.object},t.s(["CustomerDebtTable",0,el],518665);let ed=T.f`
  query GetDisputeRateByMonth(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    disputeByMonth: getDashboard_DisputeRate_By_Month(
      order_by: { strval_extra: asc, count: desc }
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      month: strval_extra
      disputeRate: count
    }
    meta: getDashboard_DisputeRate_By_Month_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          disputeRate: count
        }
      }
    }
  }
`,ec=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{disputeByMonth:o,meta:a}={disputeByMonth:[],meta:{}}}=(0,C.t)(ed,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"DisputeRateChart",removeChart:n,title:`Average Dispute Rate By Month (${Number(a.aggregate?.avg.disputeRate).toFixed(2)})`,children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column"},title:{text:null},series:[{data:o.map(t=>({name:(0,Z.default)(t.month,"YYYY-M").format("MMM YYYY"),y:t.disputeRate||0})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:i})})});t.s(["DisputeRateChart",0,ec],673255);let eh=T.f`
  query GetJobsByDay(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    jobsByDay: getDashboard_Count_By_Date(
      order_by: { date_val1_extra: asc }
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      count: count
      jobDate: date_val1_extra
    }
    meta: getDashboard_Count_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        count
      }
    }
  }
`,eu=(0,f.forwardRef)((t,i)=>{let{filters:r}=t,{data:{jobsByDay:n}={jobsByDay:[]}}=(0,C.t)(eh,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),n&&(0,e.jsx)(L,{title:"Total bookings by Day",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}},series:[{name:"count",data:n.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.count})),showInLegend:!1}]},ref:i})})});t.s(["JobsByDayLineChart",0,eu],108603);let ep=T.f`
  query GetJobsByMonth(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    meta: getDashboard_Count_By_Month_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
    jobsByMonth: getDashboard_Count_By_Month(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { strval_extra: asc }
    ) {
      count: count
      month: strval_extra
    }
  }
`,em=(0,f.forwardRef)((t,i)=>{let r,{filters:n,removeChart:o}=t,{data:{meta:a,jobsByMonth:s}={meta:{},jobsByMonth:[]}}=(0,C.t)(ep,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(w.default),(0,e.jsx)(L,{name:"JobsByMonth",removeChart:o,title:`Total bookings by Month (${a.aggregate?.sum.count})`,children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{min:0,title:{text:"Counts"}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:"{point.name}</span>: <b>{point.y}</b> "},series:[{name:"Month",data:(r=[],s.forEach(t=>{try{r.push({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.count})}catch(t){}}),r),showInLegend:!1}]},ref:i})})});t.s(["JobsByMonth",0,em],810483);let ef=T.f`
  query GetJobsByService(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    jobsByService: getDashboard_Service(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { count: desc }
    ) {
      servicename: name
      count: count
      serviceid: id
    }
    meta: getDashboard_Service_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
  }
`,eg=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{meta:o,jobsByService:a}={meta:{},jobsByService:[]}}=(0,C.t)(ef,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),(0,e.jsx)(L,{name:"JobsByService",removeChart:n,title:`Total bookings by Service (${o.aggregate?.sum.count})`,children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"pie"},title:{text:null},series:[{data:a.map(t=>({name:t.servicename,y:t.count})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:i})})});t.s(["JobsByService",0,eg],9762);let ey=T.f`
  query GetDashboard_SlA(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    jobsla: getDashboard_SLA(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { name: asc }
    ) {
      count
      sla_name: name
    }
  }
`,ev=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{jobsla:o}={jobsla:[]}}=(0,C.t)(ey,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"jobsBySLA",removeChart:n,title:"Bookings By SLAs",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:"SLAs",align:"center",verticalAlign:"middle",y:60},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{dataLabels:{enabled:!0,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%","75%"],size:"110%"}},series:[{type:"pie",name:"SLA",innerSize:"50%",data:o.map(t=>({name:t.sla_name,y:t.count})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:i})})});t.s(["jobsBySLA",0,ev],90670);let eI=T.f`
  query GetJobsByStatus(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    jobsByStatus: getDashboard_Count_By_Status(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: {}
    ) {
      statusname: name
      count: count
    }
    meta: getDashboard_Count_By_Status_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { count: desc }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
  }
`,ex=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{meta:o,jobsByStatus:a}={meta:{},jobsByStatus:[]}}=(0,C.t)(eI,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),a&&(0,e.jsx)(L,{name:"JobsByStatusPieChart",removeChart:n,title:`Total bookings by Status (${o.aggregate?.sum.count})`,children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"pie"},title:{text:null},tooltip:{formatter:function(){return"<b>"+this.x+"</b><br/>"+this.series.name+": "+this.y}},series:[{data:a.map(t=>({name:t.statusname,y:t.count})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:i})})});t.s(["JobsByStatusPieChart",0,ex],408233);let eb=T.f`
  query GetJobsFinancialByDay(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    jobsFinancialByDay: getDashboard_Financial_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      customerAmount: reactive_customer
      supplierAmount: reactive_supplier
      jobDate: date_val1_extra
      jobRevenue: reactive_revenue
    }
    meta: getDashboard_Financial_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          sumJobRevenue: reactive_revenue
        }
      }
    }
  }
`,eC=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{jobsFinancialByDay:o}={jobsFinancialByDay:[]}}=(0,C.t)(eb,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"JobsFinancialByDayLineChart",removeChart:n,title:"Total Revenue by Day",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{type:"column",name:"Job Amount",data:o.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.customerAmount})),showInLegend:!1},{type:"column",name:"Revenu",data:o.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.jobRevenue})),showInLegend:!1}]},ref:i})})});t.s(["JobsFinancialByDayLineChart",0,eC],97806);let eT=T.f`
  query GetSLAJobsByMonth(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    jobSLAByMonth: getDashboard_SLA_By_Month(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { strval_extra: desc }
    ) {
      slaname: name
      count
      month: strval_extra
      p1: value
      p5: intval_extra
      p2: reactive_customer
      P3: ppm_customer
      P4: reactive_supplier
    }
  }
`,e$=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{jobSLAByMonth:o}={jobSLAByMonth:[]}}=(0,C.t)(eT,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"JobSLAByMonth",removeChart:n,title:"Monthly SLAs ",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"spline"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:null},tooltip:{headerFormat:"<b>{series.slaname}</b><br>",pointFormat:"{series.count}"},plotOptions:{series:{marker:{enabled:!0}}},series:[{name:"P1",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.P1}))},{name:"P2",data:o.map(t=>({nam:(0,z.f)(new Date(t.month),"LLL yyyy"),name:t.month,y:t.P2}))},{name:"P3",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.P3}))},{name:"P4",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.P4}))},{name:"P5",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.P5}))}]},ref:i})})});t.s(["JobSLAByMonth",0,e$],310791);let ew=T.f`
  query GetNewCustomerAccounts(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    newCustomerAccounts: getDashboard_Count_New_Customer_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: desc }
    ) {
      date: date_val1_extra
      count
    }
    meta: getDashboard_Count_New_Customer_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,eS=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{newCustomerAccounts:o}={newCustomerAccounts:[]}}=(0,C.t)(ew,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"NewCustomerAccountsChart",removeChart:n,title:"New Customer Accounts",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.count||0})),name:"Active Customer",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:i})})});t.s(["NewCustomerAccountsChart",0,eS],35348);let eA=T.f`
  query GetAverageProfit(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    quoteAcceptanceRate: getDashboard_Quote_Acceptance_Rate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      count: value
      date: date_val1_extra
    }
    meta: getDashboard_Quote_Acceptance_Rate_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,e_=tc.f,eP=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(e_,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(e_,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsx)(M.f,{direction:"row",justifyContent:"space-between",children:(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},ej=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{quoteAcceptanceRate:c}={quoteAcceptanceRate:[]}}=(0,C.t)(eA,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,customerId:a.customerId?.value,endTime:a.endDate,locationId:a.locationId?.value,managerId:a.managerId?.value,serviceId:a.serviceId?.value,startTime:a.startDate,supplierId:a.supplierId?.value}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"QuoteAcceptanceRateChart",removeChart:r,title:"Quote Acceptance Rate",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(eP,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{data:c.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.count||0})),name:"%",showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"%"}}},ref:i})})});t.s(["QuoteAcceptanceRateChart",0,ej],711835);let ek=T.f`
  query GetNewCustomerAccounts(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    newSupplierAccounts: getDashboard_Count_New_Supplier_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: desc }
    ) {
      date: date_val1_extra
      count
    }
    meta: getDashboard_Count_New_Supplier_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,eO=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{newSupplierAccounts:o}={newSupplierAccounts:[]}}=(0,C.t)(ek,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"NewSupplierAccountsChart",removeChart:n,title:"New Supplier Accounts",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.count||0})),name:"Active Supplier",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:i})})});t.s(["NewSupplierAccountsChart",0,eO],469845);let eD=T.f`
  query GetPercentageOfSpendByServiceLine(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    percentageOfSpendByServiceLine: getDashboard_Count_All_Job_by_Service(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      serviceName: strval_extra
      currentAmount: reactive_customer
      lastAmount: ppm_customer
    }
    meta: getDashboard_Count_All_Job_by_Service_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,eM={item:"reactive_customer",order:"desc"},eL=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:eM}),{data:{percentageOfSpendByServiceLine:s,meta:l}={percentageOfSpendByServiceLine:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(eD,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,e.jsx)(L,{isTable:!0,name:"PercentageOfSpendByServiceLineTable",removeChart:n,title:"% Of Spend By Service Line",children:(0,e.jsx)(ee.f,{columns:[{text:"Service Name"},{sortable:!0,sortName:"reactive_customer",text:"Current Amount"},{sortable:!0,sortName:"last_amount",text:"Last Amount"}],history:!1,initialSort:eM,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({serviceName:t.serviceName,currentAmount:t.currentAmount,lastAmount:t.lastAmount}))})})});eL.propTypes={filters:ta.object},t.s(["PercentageOfSpendByServiceLineTable",0,eL],366964);let eE=T.f`
  query GetPercentageOfWorkOrdersByServiceLine(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    percentageOfWorkOrdersByServiceLine: getDashboard_Count_Job_by_Service(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      countLastYear: value
      countJobIdCurrentYear: intval_extra
      serviceName: strval_extra
    }
    meta: getDashboard_Count_Job_by_Service_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { intval_extra: desc }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,eR={item:"intval_extra",order:"desc"},eB=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:eR}),{data:{percentageOfWorkOrdersByServiceLine:s,meta:l}={percentageOfWorkOrdersByServiceLine:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(eE,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,e.jsx)(L,{isTable:!0,name:"PercentageOfWorkOrdersByServiceLineTable",removeChart:n,title:"% Of Work Orders By Service Line",children:(0,e.jsx)(ee.f,{columns:[{text:"Service name"},{sortable:!0,sortName:"intval_extra",text:"current year"},{sortable:!0,sortName:"value",text:" last year"}],history:!1,initialSort:eR,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({serviceName:t.serviceName,countJobIdCurrentYear:t.countJobIdCurrentYear,countLastYear:t.countLastYear}))})})});eB.propTypes={filters:ta.object},t.s(["PercentageOfWorkOrdersByServiceLineTable",0,eB],175417);let eF=T.f`
  query getDashboard_Financial_By_Month(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    financebymonth: getDashboard_Financial_By_Month(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      month: name
      reactive_customer
      reactive_revenue
      reactive_supplier
    }
  }
`,ez=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{financebymonth:o}={financebymonth:[]}}=(0,C.t)(eF,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"ReactiveAmountByMonth",removeChart:n,title:"Supplier/Customer Amounts By Month",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amount(£)"}},labels:{items:[{style:{fontSize:"15px",left:"50px",top:"18px"}}]},series:[{type:"column",name:"Customer",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.reactive_customer}))},{type:"column",name:"supplier",data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.reactive_supplier}))},{type:"spline",name:"Revenue",marker:{lineWidth:2,fillColor:"white"},data:o.map(t=>({name:(0,z.f)(new Date(t.month),"LLL yyyy"),y:t.reactive_revenue}))}]},ref:i})})});t.s(["ReactiveAmountByMonth",0,ez],120247);let eN=T.f`
  query GetDashboard_SlA(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    sla: getDashboard_SLA(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { name: asc }
    ) {
      count
      sla_name: name
      Breached_Count: ppm_customer
      Live_Count: reactive_customer
    }
  }
`,eH=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{sla:o}={sla:[]}}=(0,C.t)(eN,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"ReactiveBySLA",removeChart:n,title:"Reactive By SLA",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"bar"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{min:0,labels:{overflow:"justify"}},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:80,floating:!0,borderWidth:1,shadow:!0},credits:{enabled:!1},series:[{name:"live jobs",data:o.map(t=>({name:t.sla_name,y:t.Live_Count})),showInLegend:!1},{name:"Breached jobs",data:o.map(t=>({name:t.sla_name,y:t.Breached_Count})),showInLegend:!1}]},ref:i})})});t.s(["ReactiveBySLA",0,eH],313910);let eW=T.f`
  query GetSpendByCoverageArea(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    spendByCoverageArea: getDashboard_Sum_CustomerAmount_By_Coverage(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      coverage: strval_extra
      total: reactive_customer
    }
    meta: getDashboard_Sum_CustomerAmount_By_Coverage_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,eG={item:"reactive_customer",order:"desc"},eX=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:eG}),{data:{spendByCoverageArea:s,meta:l}={spendByCoverageArea:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(eW,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,e.jsx)(L,{isTable:!0,name:"SpendByCoverageAreaTable",removeChart:n,title:"Spend By Coverage Area",children:(0,e.jsx)(ee.f,{columns:[{text:"coverage"},{sortable:!0,sortName:"reactive_customer",text:"Total"}],history:!1,initialSort:eG,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({coverage:t.coverage,total:t.total}))})})});eX.propTypes={filters:ta.object},t.s(["SpendByCoverageAreaTable",0,eX],220690);let eY=T.f`
  query GetNewCustomerAccounts(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    spendFromNewCustomerAccounts: getDashboard_Count_New_Customer_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      count: count
    }
    meta: getDashboard_Count_New_Customer_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,eU=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{spendFromNewCustomerAccounts:o}={spendFromNewCustomerAccounts:[]}}=(0,C.t)(eY,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"SpendFromNewCustomerAccountsChart",removeChart:n,title:"Spend From New Customer Accounts",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.count||0})),name:"Active Customer",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:i})})});t.s(["SpendFromNewCustomerAccountsChart",0,eU],495466);let eV=T.f`
  query GetSumQuoteAcceptedByDate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    meta: getDashboard_Sum_Quote_Accepted_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
    sumQuoteAccepted: getDashboard_Sum_Quote_Accepted_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      sum: reactive_customer
      jobDate: date_val1_extra
    }
  }
`,eq=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{sumQuoteAccepted:o}={sumQuoteAccepted:[]}}=(0,C.t)(eV,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"SumQuoteAccepted",removeChart:n,title:"Value of Quotes Accepted By Date",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{name:"sum",data:o.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.sum})),showInLegend:!1}]},ref:i})})});t.s(["SumQuoteAccepted",0,eq],822015);let eJ=T.f`
  query GetSumQuoteSendByDate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    meta: getDashboard_Sum_Quote_Quotations_Sent_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
    sumQuoteSent: getDashboard_Sum_Quote_Quotations_Sent_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      sum: reactive_customer
      jobDate: date_val1_extra
    }
  }
`,eQ=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{sumQuoteSent:o}={sumQuoteSent:[]}}=(0,C.t)(eJ,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"SumQuoteSent",removeChart:n,title:"Value Of Quotations Sent By Date",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{name:"sum",data:o.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.sum})),showInLegend:!1}]},ref:i})})});t.s(["SumQuoteSent",0,eQ],806897);let eK=T.f`
  query SupplierDebt(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_finance_debt_order_by!]
    $outstanding_levels: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    suppliers: getDashboard_Financial_Debt_By_Supplier(
      limit: $limit
      offset: $offset
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        outstanding_levels: $outstanding_levels
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: $orderBy
    ) {
      supplier: Account {
        id
        name
      }
      total_invoice_count
      total_invoice_amount
      outstanding_invoice_count
      outstanding_invoice_amount
      outstanding_0_30
      outstanding_31_60
      outstanding_61_90
      outstanding_91_x
    }
    meta: getDashboard_Financial_Debt_By_Supplier_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        outstanding_levels: $outstanding_levels
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          total_invoice_count
          total_invoice_amount
          outstanding_invoice_count
          outstanding_invoice_amount
          outstanding_0_30
          outstanding_31_60
          outstanding_61_90
          outstanding_91_x
        }
        totalCount: count
      }
    }
  }
`,eZ=(t,e,i)=>t&&e?`${i?(0,er.f)(t):t||0} (${Math.round(t/e*100)}%)`:`${i?(0,er.f)(t):t||0}`,e0={item:"outstanding_invoice_amount",order:"desc"},e1=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:e0}),[s,l]=(0,f.useState)(),{data:{suppliers:d,meta:c}={suppliers:[],meta:{aggregate:{}}},loading:h,refetch:u}=(0,C.t)(eK,{variables:{...o,outstanding_levels:s}}),[p]=(0,t5.f)(eK,{variables:{...o,limit:t4.r.paginationSize,offset:(a.current?.currentPage-1||0)*t4.r.paginationSize,orderBy:{[a.current?.sort.item]:a.current?.sort.order},outstanding_levels:s},onCompleted:t=>{let e="data:application/octet-stream,"+encodeURIComponent(t6.default.unparse(t.suppliers.map(t=>({name:t.customer.name,totalInvoiceCount:t.total_invoice_count,outstanding_invoice_count:eZ(t.outstanding_invoice_count,t.total_invoice_count),outstanding_0_30:eZ(t.outstanding_0_30,t.outstanding_invoice_count),outstanding_31_60:eZ(t.outstanding_31_60,t.outstanding_invoice_count),outstanding_61_90:eZ(t.outstanding_61_90,t.outstanding_invoice_count),outstanding_91_x:eZ(t.outstanding_91_x,t.outstanding_invoice_count),totalInvoiceAmount:(0,er.f)(t.total_invoice_amount),outstanding_invoice_amount:eZ(t.outstanding_invoice_amount,t.total_invoice_amount,!0)})),{escapeFormulae:/^[=+@\t\r]/}));(0,eo.f)(e,"customer-debt.csv")}}),m=t=>{let{accountId:i,level:n,number:o}=t,a=`/dashboard/suppliers/view?id=${i}`,s=`&endDate=${(0,ea.f)(r.endDate)}`,l=`&startDate=${(0,ea.f)(r.startDate)}`;return(0,e.jsx)(t7.f,{href:`${a}&tab=finance&outstandingLevel=${n}${l}${s}`,children:o})},g=[{hidden:!0},{formatter:t=>{let{row:i}=t;return(0,e.jsx)(t7.f,{href:`/dashboard/suppliers/view?id=${i.accountId}&tab=finance`,children:i.name})},text:"Supplier"},{sortable:!0,sortName:"total_invoice_count",text:"Invoice Count"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:0,number:e.outstanding_invoice_count})},sortable:!0,sortName:"outstanding_invoice_count",text:"Outstanding Invoices"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:1,number:e.outstanding_0_30})},sortable:!0,sortName:"outstanding_0_30",text:"Outstanding 1-30"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:31,number:e.outstanding_31_60})},sortable:!0,sortName:"outstanding_31_60",text:"Outstanding 31-60"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:61,number:e.outstanding_61_90})},sortable:!0,sortName:"outstanding_61_90",text:"Outstanding 61-90"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:91,number:e.outstanding_91_x})},sortable:!0,sortName:"outstanding_91_x",text:"Outstanding > 90"},{sortable:!0,sortName:"total_invoice_amount",text:"Total Invoice Amount"},{formatter:t=>{let{row:e}=t;return m({accountId:e.accountId,level:0,number:e.outstanding_invoice_amount})},sortable:!0,sortName:"outstanding_invoice_amount",text:"Outstanding Amount"}],y=t=>{l(t)};return(0,e.jsxs)(L,{isTable:!0,name:"SupplierDebtTable",removeChart:n,title:"Supplier Debt",children:[(0,e.jsx)(M.f,{direction:"row",children:(0,e.jsx)(et.f,{loading:!1,onClick:()=>p()})}),c.aggregate.sum&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"flex-end",flexWrap:"wrap",gap:1,children:[(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Invoice Count: ",(0,e.jsx)("b",{children:c.aggregate.sum.total_invoice_count})]}),color:"secondary",onClick:()=>y(null),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding Invoices:",(0,e.jsx)("b",{children:eZ(c.aggregate.sum.outstanding_invoice_count,c.aggregate.sum.total_invoice_count)})]}),color:"secondary",variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding 1-30:",(0,e.jsx)("b",{children:eZ(c.aggregate.sum.outstanding_0_30,c.aggregate.sum.outstanding_invoice_count)})]}),color:1===s?"success":"secondary",onClick:()=>y(1),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding 31-60:",(0,e.jsx)("b",{children:eZ(c.aggregate.sum.outstanding_31_60,c.aggregate.sum.outstanding_invoice_count)})]}),color:31===s?"success":"secondary",onClick:()=>y(31),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding 61-90:",(0,e.jsx)("b",{children:eZ(c.aggregate.sum.outstanding_61_90,c.aggregate.sum.outstanding_invoice_count)})]}),color:61===s?"success":"secondary",onClick:()=>y(61),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding > 90:",(0,e.jsx)("b",{children:eZ(c.aggregate.sum.outstanding_91_x,c.aggregate.sum.outstanding_invoice_count)})]}),color:91===s?"success":"secondary",onClick:()=>y(91),variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Total Invoice Amount: ",(0,e.jsx)("b",{children:(0,er.f)(c.aggregate.sum.total_invoice_amount)})]}),color:"secondary",variant:"outlined"}),(0,e.jsx)(t8.f,{label:(0,e.jsxs)(e.Fragment,{children:["Outstanding Amount:",(0,e.jsx)("b",{children:eZ(c.aggregate.sum.outstanding_invoice_amount,c.aggregate.sum.total_invoice_amount,!0)})]}),color:"secondary",variant:"outlined"})]}),(0,e.jsx)(ee.f,{columns:g,history:!1,initialSort:e0,loading:h,meta:c,ref:a,refetch:u,rows:d.map(t=>({accountId:t.supplier.id,name:t.supplier.name,totalInvoiceCount:t.total_invoice_count,outstanding_invoice_count:eZ(t.outstanding_invoice_count,t.total_invoice_count),outstanding_0_30:eZ(t.outstanding_0_30,t.outstanding_invoice_count),outstanding_31_60:eZ(t.outstanding_31_60,t.outstanding_invoice_count),outstanding_61_90:eZ(t.outstanding_61_90,t.outstanding_invoice_count),outstanding_91_x:eZ(t.outstanding_91_x,t.outstanding_invoice_count),totalInvoiceAmount:(0,er.f)(t.total_invoice_amount),outstanding_invoice_amount:eZ(t.outstanding_invoice_amount,t.total_invoice_amount,!0)}))})]})});e1.propTypes={filters:ta.object},t.s(["SupplierDebtTable",0,e1],468776);let e2=T.f`
  query GetTopAssetsByNumberOfJobs(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topAssetsByNumberOfJobs: getDashboard_Asset(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      assetName: strval_extra
      amount: ppm_customer
      countOfferedJob: count
    }
    meta: getDashboard_Asset_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,e3={item:"ppm_customer",order:"desc"},e5=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:e3}),{data:{topAssetsByNumberOfJobs:s,meta:l}={topAssetsByNumberOfJobs:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(e2,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Name"},{sortable:!0,sortName:"ppm_customer",text:"Amount",formatter:t=>{let{row:e}=t;return(0,er.f)(e.amount)}},{sortable:!0,sortName:"count",text:"Count Offered Job"}];return(0,e.jsx)(L,{isTable:!0,name:"TopAssetsByNumberOfJobsTable",removeChart:n,title:"Top Assets By Number Of Jobs",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:e3,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({assetName:t.assetName,amount:t.amount,countOfferedJob:t.countOfferedJob}))})})});e5.propTypes={filters:ta.object},t.s(["TopAssetsByNumberOfJobsTable",0,e5],255787);let e9=T.f`
  query GetTopAssetsBySpend(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topAssetsBySpend: getDashboard_Asset(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      assetName: strval_extra
      asset_id: intval_extra
      amount: reactive_customer
    }
    meta: getDashboard_Asset_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,e6={item:"reactive_customer",order:"desc"},e4=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:e6}),{data:{topAssetsBySpend:s,meta:l}={topAssetsBySpend:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(e9,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:t=>{let{row:e}=t;return(0,er.f)(e.amount)}}];return(0,e.jsx)(L,{isTable:!0,name:"TopAssetsBySpendTable",removeChart:n,title:"Top Assets By Spend",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:e6,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({assetName:t.assetName,amount:t.amount}))})})});e4.propTypes={filters:ta.object},t.s(["TopAssetsBySpendTable",0,e4],657830);let e8=T.f`
  query GetTopAssetTypesBySpend(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topAssetTypesBySpend: getDashboard_AssetTypes(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      amount: reactive_customer
      assetTypeName: strval_extra
      assetTypeID: intval_extra
    }
    meta: getDashboard_AssetTypes_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,e7={item:"reactive_customer",order:"desc"},it=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:e7}),{data:{topAssetTypesBySpend:s,meta:l}={topAssetTypesBySpend:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(e8,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:t=>{let{row:e}=t;return(0,er.f)(e.amount)}}];return(0,e.jsx)(L,{isTable:!0,name:"TopAssetTypesBySpendTable",removeChart:n,title:"Top Asset Types By Spend",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:e7,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({assetTypeName:t.assetTypeName,amount:t.amount}))})})});it.propTypes={filters:ta.object},t.s(["TopAssetTypesBySpendTable",0,it],897568);let ie=T.f`
  query GetTopCustomersByNumberOfProperties(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topCustomersByNumberOfProperties: getDashboard_Customers_By_Location(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      countLocationId: value
      accountName: strval_extra
      customerAmount: reactive_amount
    }

    meta: getDashboard_Customers_By_Location_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,ii={item:"reactive_customer",order:"desc"},ir=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:ii}),{data:{topCustomersByNumberOfProperties:s,meta:l}={topCustomersByNumberOfProperties:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(ie,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Account name"},{sortable:!0,sortName:"reactive_customer",text:"Count Location"},{text:"Customer amount",formatter:t=>{let{row:e}=t;return(0,er.f)(e.customerAmount)}}];return(0,e.jsx)(L,{isTable:!0,name:"TopCustomersByNumberOfPropertiesTable",removeChart:n,title:"Top Customers By Number Of Properties",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:ii,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({accountName:t.accountName,countLocationId:t.countLocationId,customerAmount:t.customerAmount}))})})});ir.propTypes={filters:ta.object},t.s(["TopCustomersByNumberOfPropertiesTable",0,ir],654063);let io=T.f`
  query GetTopCustomersByProfit(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topCustomersByProfit: getDashboard_Customer_Profit(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: reactive_customer
    }
    meta: getDashboard_Customer_Profit_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,ia=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{topCustomersByProfit:o}={topCustomersByProfit:[]}}=(0,C.t)(io,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"TopCustomersByProfitChart",removeChart:n,title:"Top Customers By Profit",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.avg||0})),name:"Amount",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amount(£)"}}},ref:i})})});t.s(["TopCustomersByProfitChart",0,ia],465607);let is=T.f`
  query GetTopPropertiesBySpend(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topPropertiesBySpend: getDashboard_Location(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      locationName: strval_extra
      locationId: intval_extra
      amount: reactive_customer
    }
    meta: getDashboard_Location_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,il={item:"reactive_customer",order:"desc"},id=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:il}),{data:{topPropertiesBySpend:s,meta:l}={topPropertiesBySpend:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(is,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:t=>{let{row:e}=t;return(0,er.f)(e.amount)}}];return(0,e.jsx)(L,{isTable:!0,name:"TopPropertiesBySpendTable",removeChart:n,title:"Top Properties By Spend",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:il,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({locationName:t.locationName,amount:t.amount}))})})});id.propTypes={filters:ta.object},t.s(["TopPropertiesBySpendTable",0,id],451508);let ic=T.f`
  query GetTopSuppliersByNumberOfJobs(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topSuppliersByNumberOfJobs: getDashboard_Supplier_To_Accept_Job(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      countAcceptedJob: count
      amountAcceptedJob: reactive_customer
      supplierName: strval_extra
    }
    meta: getDashboard_Supplier_To_Accept_Job_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,ih={item:"reactive_customer",order:"desc"},iu=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:ih}),{data:{topSuppliersByNumberOfJobs:s,meta:l}={topSuppliersByNumberOfJobs:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(ic,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Supplier Name"},{sortable:!0,sortName:"count",text:"Count Accepted Job"},{sortable:!0,sortName:"reactive_customer",text:"Amount Accepted Job",formatter:t=>{let{row:e}=t;return(0,er.f)(e.amountAcceptedJob)}}];return(0,e.jsx)(L,{isTable:!0,name:"TopSuppliersByNumberOfJobsTable",removeChart:n,title:"Top Suppliers By Number Of Jobs and Earnings",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:ih,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({supplierName:t.supplierName,countAcceptedJob:t.countAcceptedJob,amountAcceptedJob:t.amountAcceptedJob}))})})});iu.propTypes={filters:ta.object},t.s(["TopSuppliersByNumberOfJobsTable",0,iu],533010);let ip=T.f`
  query GetTopSuppliersByQuoteReturn(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topSuppliersByQuoteReturn: getDashboard_Suppliers_By_Quote_Return(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      reactiveAmount: reactive_supplier
      dayDifference: count
      supplierName: strval_extra
    }
    meta: getDashboard_Suppliers_By_Quote_Return_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,im={item:"reactive_supplier",order:"desc"},ig=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:im}),{data:{topSuppliersByQuoteReturn:s,meta:l}={topSuppliersByQuoteReturn:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(ip,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,e.jsx)(L,{isTable:!0,name:"TopSuppliersByQuoteReturnTable",removeChart:n,title:"Top Suppliers By Quote Return",children:(0,e.jsx)(ee.f,{columns:[{text:"Supplier Name"},{sortable:!0,sortName:"reactive_suppliers",text:"Reactive Amount"},{text:"Day Difference"}],history:!1,initialSort:im,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({supplierName:t.supplierName,reactiveAmount:t.reactiveAmount,dayDifference:t.dayDifference}))})})});ig.propTypes={filters:ta.object},t.s(["TopSuppliersByQuoteReturnTable",0,ig],467558);let iy=T.f`
  query GetTopSuppliersByTimeToSubmitJobReport(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    topSuppliersByTimeToSubmitJobReport: getDashboard_Supplier_To_Submit_Job(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      supplier_name: strval_extra
      supplier_id: value
      amount: reactive_customer
    }
    meta: getDashboard_Supplier_To_Submit_Job_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,iv={item:"reactive_customer",order:"desc"},iI=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:iv}),{data:{topSuppliersByTimeToSubmitJobReport:s,meta:l}={topSuppliersByTimeToSubmitJobReport:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(iy,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Supplier Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:t=>{let{row:e}=t;return(0,er.f)(e.amount)}}];return(0,e.jsx)(L,{isTable:!0,name:"TopSuppliersByTimeToSubmitJobReportTable",removeChart:n,title:"Top Suppliers By Time To Submit Job",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:iv,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({supplier_name:t.supplier_name,amount:t.amount}))})})});iI.propTypes={filters:ta.object},t.s(["TopSuppliersByTimeToSubmitJobReportTable",0,iI],548068);var ix=t.i(615198),ib=t.i(506656),iC=t.i(659587),iT=t.i(871931),i$=t.i(760981),iw=t.i(302966);let iS=(0,f.forwardRef)((t,i)=>{let r,n,{initialData:o,jobs:a=[]}=t;return(0,b.default)(w.default),(0,e.jsxs)(iT.f,{children:[(0,e.jsx)(iw.f,{expandIcon:(0,e.jsx)(iC.default,{}),children:"Total cost of ownership"}),(0,e.jsx)(i$.f,{children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:(n=(t=>{let{acquisitionCost:e,datePutInService:i,maintenanceSpend:r,residualValue:n,usefulLife:o}=t,a=parseInt(r)/12,s=(0,z.f)(new Date(i),"MMMM yyyy");return Array(parseInt(o)+1).fill({}).map((t,r)=>0===r?{name:s,y:(0,ib.f)(parseInt(e),2)}:r+1===parseInt(o)+1?{name:(0,z.f)((0,ix.f)(new Date(i),r),"MMMM yyyy"),y:(0,ib.f)(r*a+parseInt(e)-parseInt(n),2)}:{name:(0,z.f)((0,ix.f)(new Date(i),r),"MMMM yyyy"),y:(0,ib.f)(r*a+parseInt(e),2)})})(o),r=[],a.map(async t=>{let e=(0,z.f)(new Date(t.scheduledAt?t.scheduledAt:t.timingStart),"yyyy dd MMM");t.meta?.customerVATInvoice&&r.push({name:e,y:t.meta?.customerVATInvoice.expensesInfo.expensesTotal})}),{chart:{type:"line",zoomType:"x"},title:{text:"TCO"},series:[{data:n,showInLegend:!1},{data:Object.keys(r).map(t=>({name:t,y:r[t]})),name:"Total Costs ",showInLegend:!1,type:"column",visible:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"£"}}}),ref:i})})]})});t.s(["TotalCostOfOwnershipChart",0,iS],396753);let iA=T.f`
  query GetFinancialByDate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    averageJobLength: getDashboard_Financial_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: reactive_revenue
    }
    meta: getDashboard_Financial_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,i_=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{averageJobLength:o}={averageJobLength:[]}}=(0,C.t)(iA,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"TotalJobRevenueChart",removeChart:n,title:"Total Job Revenue",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{data:o.map(t=>({name:(0,z.f)(new Date(t.date),"yyyy dd MMM"),y:t.avg||0})),name:"Revenue",showInLegend:!1}]},ref:i})})});t.s(["TotalJobRevenueChart",0,i_],180779);let iP=T.f`
  query GetTotalQuotInvoiceSendByDate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    meta: getDashboard_Count_Quote_InvoiceSent_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
    totalQuoteInvoiceSent: getDashboard_Count_Quote_InvoiceSent_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      count: count
      jobDate: date_val1_extra
    }
  }
`,ij=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{totalQuoteInvoiceSent:o}={totalQuoteInvoiceSent:[]}}=(0,C.t)(iP,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"totalQuoteInvoiceSent",removeChart:n,title:"Total Quote Invoice Sent By Date",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}},series:[{name:"count",data:o.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.count})),showInLegend:!1}]},ref:i})})});t.s(["TotalQuoteInvoiceSent",0,ij],692976);let ik=T.f`
  query GetTotalQuoteReportSendByDate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    meta: getDashboard_Count_Quote_ReportSent_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
    totalQuoteReportSend: getDashboard_Count_Quote_ReportSent_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      count: count
      jobDate: date_val1_extra
    }
  }
`,iO=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{data:{totalQuoteReportSend:o}={totalQuoteReportSend:[]}}=(0,C.t)(ik,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(w.default),o&&(0,e.jsx)(L,{name:"TotalQuoteReportSent",removeChart:n,title:"Total Quote Report Sent by Date",children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}},series:[{name:"count",data:o.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.count})),showInLegend:!1}]},ref:i})})});t.s(["TotalQuoteReportSend",0,iO],775991);let iD=T.f`
  query GetTotalQuoteSendByDate(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    totalQuoteSent: getDashboard_Count_QuoteSent_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      count: count
      jobDate: date_val1_extra
    }
    meta: getDashboard_Count_QuoteSent_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        sum {
          count: count
        }
      }
    }
  }
`,iM=tc.f,iL=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(iM,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(iM,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsx)(M.f,{direction:"row",justifyContent:"space-between",children:(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},iE=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{totalQuoteSent:c}={totalQuoteSent:[]}}=(0,C.t)(iD,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,customerId:a.customerId?.value,endTime:a.endDate,locationId:a.locationId?.value,managerId:a.managerId?.value,serviceId:a.serviceId?.value,startTime:a.startDate,supplierId:a.supplierId?.value}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"TotalQuoteSentChart",removeChart:r,title:"Number Of Quotes",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(iL,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},xAxis:{type:"category",title:null},yAxis:{title:{text:"Count"}},series:[{name:"Count, quotes",data:c.map(t=>({name:(0,z.f)(new Date(t.jobDate),"dd LLL yyyy"),y:t.count})),showInLegend:!1,color:"#1E88E5"}]},ref:i})})});t.s(["TotalQuoteSentChart",0,iE],947082);let iR=T.f`
  query GetWorstCustomersByAgedReceivables(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $limit: Int
    $locationId: Int
    $managerId: Int
    $offset: Int
    $orderBy: [dashboard_main_order_by!]
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    worstCustomersByAgedReceivables: getDashboard_Customer_Aged_Receivables(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      customer_name: strval_extra
      amount: reactive_customer
      customer_id: value
    }
    meta: getDashboard_Customer_Aged_Receivables_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,iB={item:"reactive_customer",order:"desc"},iF=(0,f.forwardRef)((t,i)=>{let{filters:r,removeChart:n}=t,{initialData:o,ref:a}=(0,ei.f)({filters:r,initialSort:iB}),{data:{worstCustomersByAgedReceivables:s,meta:l}={worstCustomersByAgedReceivables:[],meta:{aggregate:{}}},loading:d,refetch:c}=(0,C.t)(iR,{variables:{...o,adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}}),h=[{text:"Customer Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:t=>{let{row:e}=t;return(0,er.f)(e.amount)}}];return(0,e.jsx)(L,{isTable:!0,name:"WorstCustomersByAgedReceivablesTable",removeChart:n,title:"Worst Customers By Aged Receivables",children:(0,e.jsx)(ee.f,{columns:h,history:!1,initialSort:iB,loading:d,meta:l,ref:a,refetch:c,rows:s.map(t=>({customer_name:t.customer_name,amount:t.amount}))})})});iF.propTypes={filters:ta.object},t.s(["WorstCustomersByAgedReceivablesTable",0,iF],224832);let iz=T.f`
  query GetSlaBreachCount(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    slaBreachCount: getDashboard_Count_SLA_Breach_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: value
    }
    meta: getDashboard_Count_SLA_Breach_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,iN=tc.f,iH=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(iN,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(iN,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"slaId",type:"sla",control:a}),(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})]}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},iW=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{slaBreachCount:c}={slaBreachCount:[]}}=(0,C.t)(iz,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,customerId:a.customerId?.value,endTime:a.endDate,locationId:a.locationId?.value,managerId:a.managerId?.value,serviceId:a.serviceId?.value,slaId:a.slaId?.value,startTime:a.startDate,supplierId:a.supplierId?.value}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"SlaBreachCountChart",removeChart:r,title:"SLA Breach (Count)",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(iH,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"Count, jobs",data:c.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Count"}}},ref:i})})});t.s(["SlaBreachCountChart",0,iW],747800);let iG=T.f`
  query GetSlaBreachPercentage(
    $adminId: Int
    $customerId: Int
    $endTime: timestamptz
    $isFixed: Int
    $isPlanned: Int
    $locationId: Int
    $managerId: Int
    $postCodeAreaId: Int
    $serviceId: Int
    $slaId: Int
    $startTime: timestamptz
    $supplierId: Int
  ) {
    slaBreachPercentage: getDashboard_SLA_Breach_Percentage_By_Date(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
      order_by: { date_val1_extra: asc }
    ) {
      date: date_val1_extra
      avg: value
    }
    meta: getDashboard_SLA_Breach_Percentage_By_Date_aggregate(
      args: {
        adminId: $adminId
        customerId: $customerId
        endTime: $endTime
        isFixed: $isFixed
        isPlanned: $isPlanned
        locationId: $locationId
        managerId: $managerId
        postCodeAreaId: $postCodeAreaId
        serviceId: $serviceId
        slaId: $slaId
        startTime: $startTime
        supplierId: $supplierId
      }
    ) {
      aggregate {
        avg {
          avg: value
        }
      }
    }
  }
`,iX=tc.f,iY=t=>{let{setFilters:i,initialFilters:r,filters:n}=t,{user:o}=(0,ti.f)(),{control:a,errors:s,handleSubmit:l,register:d,reset:c,watch:h}=(0,tr.G)({defaultValues:{...n}}),u={errors:s,register:d,control:a,reset:c,filters:n},p=h("intervals");return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("form",{onSubmit:l(t=>{let e="custom"===t.intervals?{startDate:t.startDate,endDate:t.endDate,intervals:t.intervals}:I(t.intervals),r=o.accountId,n=o.accountType;i({...e,...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:r,accountType:n}),...{customerId:t.customerId,locationId:t.locationId,serviceId:t.serviceId,slaId:t.slaId,supplierId:t.supplierId,managerId:t.managerId}})}),children:(0,e.jsxs)(M.f,{children:[(0,e.jsx)(tf,{sx:{mt:1,mb:.5},control:a,name:"intervals",options:v,variant:"standard"}),"custom"===p&&(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(iX,{...u,name:"startDate",placeholder:"Start Date"})}),(0,e.jsx)(Y.f,{sx:{mt:2,width:"45%"},children:(0,e.jsx)(iX,{...u,name:"endDate",placeholder:"End Date"})})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"customerId",type:"customer",control:a,textFieldValue:!0,setTextFieldValue:!0}),(0,e.jsx)(td,{...u,name:"supplierId",type:"supplier",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"locationId",type:"property",control:a}),(0,e.jsx)(td,{...u,name:"serviceId",type:"service",control:a})]}),(0,e.jsxs)(M.f,{direction:"row",justifyContent:"space-between",children:[(0,e.jsx)(td,{...u,name:"slaId",type:"sla",control:a}),(0,e.jsx)(td,{...u,name:"managerId",type:"user",control:a})]}),(0,e.jsxs)(M.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,e.jsx)(tn.f,{onClick:()=>{c({initialFilters:r}),i(r)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,e.jsx)(tn.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},iU=(0,f.forwardRef)((t,i)=>{let{removeChart:r}=t,{user:n}=(0,ti.f)(),o={...I(v.find(t=>t.default).value),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:n.accountId,accountType:n.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[a,s]=(0,f.useState)(o),[l,d]=(0,f.useState)(!1),{data:{slaBreachPercentage:c}={slaBreachPercentage:[]}}=(0,C.t)(iG,{onCompleted:()=>{d(!1)},variables:{adminId:a.adminId,customerId:a.customerId?.value,endTime:a.endDate,locationId:a.locationId?.value,managerId:a.managerId?.value,serviceId:a.serviceId?.value,slaId:a.slaId?.value,startTime:a.startDate,supplierId:a.supplierId?.value}});return(0,b.default)(w.default),c&&(0,e.jsx)(tt,{name:"SlaBreachPercentageChart",removeChart:r,title:"SLA Breach (Percentage)",openModal:l,setOpenModal:d,filtersComponent:(0,e.jsx)(iY,{filters:a,initialFilters:o,setFilters:s}),activeFiltersComponent:(0,e.jsx)(tb,{filters:a}),children:(0,e.jsx)(S.default,{callback:t=>{t.reflow()},constructorType:"chart",Highcharts:w.default,options:{chart:{type:"column"},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},title:{text:null},series:[{name:"%",data:c.map(t=>({name:(0,z.f)(new Date(t.date),"dd LLL yyyy"),y:t.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Percentage"}}},ref:i})})});t.s(["SlaBreachPercentageChart",0,iU],21364),t.i(845966),t.i(581928),t.i(965507),t.i(134800),t.i(240033),t.i(545741),t.i(96722),t.i(277431),t.i(777390),t.i(738056),t.i(163396),t.i(932347),t.i(34831),t.i(607499),t.i(929147),t.i(368557),t.i(518665),t.i(673255),t.i(108603),t.i(810483),t.i(9762),t.i(90670),t.i(408233),t.i(97806),t.i(310791),t.i(35348),t.i(711835),t.i(469845),t.i(366964),t.i(175417),t.i(120247),t.i(313910),t.i(220690),t.i(495466),t.i(822015),t.i(806897),t.i(468776),t.i(255787),t.i(657830),t.i(897568),t.i(654063),t.i(465607),t.i(451508),t.i(533010),t.i(467558),t.i(548068),t.i(396753),t.i(180779),t.i(692976),t.i(775991),t.i(947082),t.i(224832),t.i(747800),t.i(21364),t.s(["SlaBreachPercentageChart",0,iU],520419),t.i(520419),t.s(["AverageAllocationTime",0,E,"AverageDaysOutstandingChart",0,N,"AverageJobLengthChart",0,tT,"AverageJobRevenueChart",0,tP,"AverageProfitChart",0,tD,"AverageQuoteValueChart",0,tR,"AverageTimeToAcceptByMinuteChart",0,tN,"AverageTimeToAttendanceChart",0,tW,"AverageTimeToSubmitJobReportChart",0,tX,"AverageToCloseByHourChart",0,tq,"AvgPriceChart",0,tk,"CountByActiveAccountChart",0,tQ,"CountJobsEngagementRateChart",0,tZ,"CountOpenJobsByDateChart",0,t1,"CustomerAndSupplierAmounts",0,t3,"CustomerDebtTable",0,el,"DisputeRateChart",0,ec,"JobSLAByMonth",0,e$,"JobsByDayLineChart",0,eu,"JobsByMonth",0,em,"JobsByService",0,eg,"JobsByStatusPieChart",0,ex,"JobsFinancialByDayLineChart",0,eC,"LateAttendanceBySupplierChart",0,B,"NewCustomerAccountsChart",0,eS,"NewSupplierAccountsChart",0,eO,"PercentageOfSpendByServiceLineTable",0,eL,"PercentageOfWorkOrdersByServiceLineTable",0,eB,"QuoteAcceptanceRateChart",0,ej,"ReactiveAmountByMonth",0,ez,"ReactiveBySLA",0,eH,"SlaBreachCountChart",0,iW,"SlaBreachPercentageChart",0,iU,"SpendByCoverageAreaTable",0,eX,"SpendFromNewCustomerAccountsChart",0,eU,"SumQuoteAccepted",0,eq,"SumQuoteSent",0,eQ,"SupplierDebtTable",0,e1,"TopAssetTypesBySpendTable",0,it,"TopAssetsByNumberOfJobsTable",0,e5,"TopAssetsBySpendTable",0,e4,"TopCustomersByNumberOfPropertiesTable",0,ir,"TopCustomersByProfitChart",0,ia,"TopPropertiesBySpendTable",0,id,"TopSuppliersByNumberOfJobsTable",0,iu,"TopSuppliersByQuoteReturnTable",0,ig,"TopSuppliersByTimeToSubmitJobReportTable",0,iI,"TotalCostOfOwnershipChart",0,iS,"TotalJobRevenueChart",0,i_,"TotalQuoteInvoiceSent",0,ij,"TotalQuoteReportSend",0,iO,"TotalQuoteSentChart",0,iE,"WorstCustomersByAgedReceivablesTable",0,iF,"jobsBySLA",0,ev],998533);var iV=t.i(998533),iq=t.i(498681),iJ=t.i(799083),iQ=t.i(152078);let iK=t=>{let i,{layout:r,setLayout:n,onSuccess:o}=t,a=(0,iq.f)(),{control:s,handleSubmit:l}=(0,tr.G)({defaultValues:(i={},r?.lg?.map(t=>i={...i,[t.i]:!0}),i)}),d=a.admin?.availableCharts||[];return(0,e.jsx)("form",{id:"offCanvasForm",onSubmit:l(t=>{n({lg:(t=>{let{newLayout:e,preLayout:i}=t,{lg:r=[]}=i,n=r.filter(t=>e[t.i]),o=Object.keys(e).map(t=>({name:t,status:!!e[t]})).filter(t=>!n.find(e=>e.i===t.name)).filter(t=>t.status).map(t=>({i:t.name,w:4,h:4,x:0,y:0,minW:4,maxW:12,minH:4,maxH:4}));return[...n,...o]})({newLayout:t,preLayout:r})}),o()}),children:d.map(t=>(0,e.jsx)(P.f,{variant:"outlined",style:{marginBottom:"5px"},children:(0,e.jsx)(j.f,{children:(0,e.jsx)(M.f,{children:(0,e.jsx)(tr.e,{control:s,name:t.value,render:i=>{let{value:r,onChange:n}=i;return(0,e.jsx)(iQ.f,{label:t.label,control:(0,e.jsx)(iJ.f,{checked:r,color:"secondary",onChange:t=>n(t.target?.checked)})})}})})})},t.value))})};var iZ=t.i(411331);let i0=(0,f.memo)(t=>{let i,{category:r,supplierId:n=null,locationId:o=null}=t,a=(0,g.WidthProvider)(g.Responsive),s=(0,iZ.f)(),{user:l}=(0,ti.f)(),d=(0,f.useRef)([]),c=v.find(t=>t.default),h={...(i=new Date,{startDate:(0,y.f)(i,c.value),endDate:i}),...(t=>{let{accountId:e,accountType:i}=t;return"admin"===i?{adminId:e}:{accountId:e}})({accountId:l.accountId,accountType:l.accountType}),locationId:o,supplierId:n},[u]=(0,f.useState)(h),[p,I]=(0,f.useState)(()=>{let t=window.localStorage.getItem(`dashboardNewLayout_${r}`)||"";return t?JSON.parse(t):m[r]}),b=async t=>{window.localStorage.setItem(`dashboardNewLayout_${r}`,JSON.stringify(t))},C=t=>{I(t),window.localStorage.setItem(`dashboardNewLayout_${r}`,JSON.stringify(t))},T=()=>{s.close()};return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(tx.f,{container:!0,spacing:2,children:[(0,e.jsxs)(tx.f,{item:!0,md:6,p:0,children:[(0,e.jsx)(tn.f,{variant:"contained",color:"info",onClick:()=>{window.localStorage.removeItem(`dashboardNewLayout_${r}`),I(m[r])},sx:{alignSelf:"flex-end",marginRight:"10px"},children:"Reset Layout"}),(0,e.jsx)(tn.f,{variant:"contained",color:"secondary",onClick:()=>{s.show({content:(0,e.jsx)(iK,{layout:p,setLayout:C,onSuccess:T,category:r}),submit:!0,title:"View charts list"})},sx:{alignSelf:"flex-end"},children:"Add charts"})]}),(0,e.jsx)(tx.f,{item:!0,md:12,children:(0,e.jsx)(a,{breakpoints:{lg:1200,sm:768},cols:{lg:12,sm:6},className:"layout",draggableHandle:".dragHandle",layouts:p,onLayoutChange:(t,e)=>b(e),onResizeStop:(t,e)=>{let i=t.findIndex(t=>t.i===e.i),r=d.current[i]?.chart,n=d.current[i]?.container.current;if(r&&n?.parentElement){let{clientHeight:t,clientWidth:e}=n.parentElement;r.setSize(e,t)}},children:p?.lg?.filter(t=>iV[t.i]).map((t,i)=>{let n=iV[t.i];return(0,e.jsx)("div",{"data-key":t.i,children:(0,e.jsx)(n,{filters:u,ref:t=>d.current[i]=t,removeChart:(t,e)=>{let i;I(i={lg:x.reject(p.lg,{i:e})}),window.localStorage.setItem(`dashboardNewLayout_${r}`,JSON.stringify(i))}})},t.i)})})})]})})},(t,e)=>!0);var i1=t.i(388866),i2=t.i(715007);let i3=()=>{let t=(0,r.useRouter)(),i=t.query?.category?.toString(),n=i&&m[i]?i:"overview";return(0,e.jsxs)(tx.f,{container:!0,spacing:2,children:[(0,e.jsx)(tx.f,{item:!0,md:1,children:(0,e.jsx)(i1.f,{sx:{padding:0},children:(0,e.jsx)(i2.f,{sx:{pl:1,pr:1},children:(0,e.jsx)(t7.f,{href:"/dashboard/data/business?category=overview",children:"Overview"})})})}),(0,e.jsx)(tx.f,{item:!0,md:10,children:(0,e.jsx)(i0,{category:n})},n)]})};t.s(["default",0,()=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(i.f,{mb:2,variant:"h5",children:"Data - Charts"}),(0,e.jsx)(i3,{})]})],459971)}],960606,(t,e,i)=>{let r="/dashboard/data/business";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>t.r(459971)]),e.hot&&e.hot.dispose(function(){window.__NEXT_P.push([r])})},899164,(t,e,i)=>{"u">typeof self?self:t.e,e.exports=function(t,e){var i=[function(t,e,i){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t}).apply(this,arguments)}Object.defineProperty(e,"__esModule",{value:!0});var n=i(1),o=i.n(n),a=i(2),s=i.n(a),l="u">typeof window?n.useLayoutEffect:n.useEffect,d=Object(n.forwardRef)(function(t,e){var i=Object(n.useRef)(),a=Object(n.useRef)();return l(function(){function e(){var e=t.highcharts||s.a,r=t.constructorType||"chart";e?e[r]?t.options?a.current=e[r](i.current,t.options,t.callback?t.callback:void 0):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(a.current){if(!1!==t.allowChartUpdate)if(!t.immutable&&a.current){var r,n;(r=a.current).update.apply(r,[t.options].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(n=t.updateArgs||[!0,!0])||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()))}else e()}else e()}),l(function(){return function(){a.current&&(a.current.destroy(),a.current=null)}},[]),Object(n.useImperativeHandle)(e,function(){return{get chart(){return a.current},container:i}},[]),o.a.createElement("div",r({},t.containerProps,{ref:i}))});e.default=Object(n.memo)(d)},function(e,i){e.exports=t},function(t,i){t.exports=e}];function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n={};return r.m=i,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}(t.r(191788),t.r(498981))},119134,(t,e,i)=>{var r,n,o,a="__lodash_hash_undefined__",s="[object Arguments]",l="[object Array]",d="[object Boolean]",c="[object Date]",h="[object Error]",u="[object Function]",p="[object Map]",m="[object Number]",f="[object Object]",g="[object Promise]",y="[object RegExp]",v="[object Set]",I="[object String]",x="[object WeakMap]",b="[object ArrayBuffer]",C="[object DataView]",T=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,w={};w["[object Float32Array]"]=w["[object Float64Array]"]=w["[object Int8Array]"]=w["[object Int16Array]"]=w["[object Int32Array]"]=w["[object Uint8Array]"]=w["[object Uint8ClampedArray]"]=w["[object Uint16Array]"]=w["[object Uint32Array]"]=!0,w[s]=w[l]=w[b]=w[d]=w[C]=w[c]=w[h]=w[u]=w[p]=w[m]=w[f]=w[y]=w[v]=w[I]=w[x]=!1;var S=t.g&&t.g.Object===Object&&t.g,A="object"==typeof self&&self&&self.Object===Object&&self,_=S||A||Function("return this")(),P=i&&!i.nodeType&&i,j=P&&e&&!e.nodeType&&e,k=j&&j.exports===P,O=k&&S.process,D=function(){try{return O&&O.binding&&O.binding("util")}catch(t){}}(),M=D&&D.isTypedArray;function L(t){var e=-1,i=Array(t.size);return t.forEach(function(t,r){i[++e]=[r,t]}),i}function E(t){var e=-1,i=Array(t.size);return t.forEach(function(t){i[++e]=t}),i}var R=Array.prototype,B=Function.prototype,F=Object.prototype,z=_["__core-js_shared__"],N=B.toString,H=F.hasOwnProperty,W=(r=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",G=F.toString,X=RegExp("^"+N.call(H).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Y=k?_.Buffer:void 0,U=_.Symbol,V=_.Uint8Array,q=F.propertyIsEnumerable,J=R.splice,Q=U?U.toStringTag:void 0,K=Object.getOwnPropertySymbols,Z=Y?Y.isBuffer:void 0,tt=(n=Object.keys,o=Object,function(t){return n(o(t))}),te=tw(_,"DataView"),ti=tw(_,"Map"),tr=tw(_,"Promise"),tn=tw(_,"Set"),to=tw(_,"WeakMap"),ta=tw(Object,"create"),ts=t_(te),tl=t_(ti),td=t_(tr),tc=t_(tn),th=t_(to),tu=U?U.prototype:void 0,tp=tu?tu.valueOf:void 0;function tm(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function tf(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function tg(t){var e=-1,i=null==t?0:t.length;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function ty(t){var e=-1,i=null==t?0:t.length;for(this.__data__=new tg;++e<i;)this.add(t[e])}function tv(t){var e=this.__data__=new tf(t);this.size=e.size}function tI(t,e){for(var i=t.length;i--;)if(tP(t[i][0],e))return i;return -1}function tx(t){var e;return null==t?void 0===t?"[object Undefined]":"[object Null]":Q&&Q in Object(t)?function(t){var e=H.call(t,Q),i=t[Q];try{t[Q]=void 0;var r=!0}catch(t){}var n=G.call(t);return r&&(e?t[Q]=i:delete t[Q]),n}(t):(e=t,G.call(e))}function tb(t){return tE(t)&&tx(t)==s}function tC(t,e,i,r,n,o){var a=1&i,s=t.length,l=e.length;if(s!=l&&!(a&&l>s))return!1;var d=o.get(t);if(d&&o.get(e))return d==e;var c=-1,h=!0,u=2&i?new ty:void 0;for(o.set(t,e),o.set(e,t);++c<s;){var p=t[c],m=e[c];if(r)var f=a?r(m,p,c,e,t,o):r(p,m,c,t,e,o);if(void 0!==f){if(f)continue;h=!1;break}if(u){if(!function(t,e){for(var i=-1,r=null==t?0:t.length;++i<r;)if(e(t[i],i,t))return!0;return!1}(e,function(t,e){if(!u.has(e)&&(p===t||n(p,t,i,r,o)))return u.push(e)})){h=!1;break}}else if(!(p===m||n(p,m,i,r,o))){h=!1;break}}return o.delete(t),o.delete(e),h}function tT(t){var e;return e=tB(t),tk(t)?e:function(t,e){for(var i=-1,r=e.length,n=t.length;++i<r;)t[n+i]=e[i];return t}(e,tS(t))}function t$(t,e){var i,r,n=t.__data__;return("string"==(r=typeof(i=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==i:null===i)?n["string"==typeof e?"string":"hash"]:n.map}function tw(t,e){var i,r=null==t?void 0:t[e];return!(!tL(r)||(i=r,W&&W in i))&&(tD(r)?X:T).test(t_(r))?r:void 0}tm.prototype.clear=function(){this.__data__=ta?ta(null):{},this.size=0},tm.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=!!e,e},tm.prototype.get=function(t){var e=this.__data__;if(ta){var i=e[t];return i===a?void 0:i}return H.call(e,t)?e[t]:void 0},tm.prototype.has=function(t){var e=this.__data__;return ta?void 0!==e[t]:H.call(e,t)},tm.prototype.set=function(t,e){var i=this.__data__;return this.size+=+!this.has(t),i[t]=ta&&void 0===e?a:e,this},tf.prototype.clear=function(){this.__data__=[],this.size=0},tf.prototype.delete=function(t){var e=this.__data__,i=tI(e,t);return!(i<0)&&(i==e.length-1?e.pop():J.call(e,i,1),--this.size,!0)},tf.prototype.get=function(t){var e=this.__data__,i=tI(e,t);return i<0?void 0:e[i][1]},tf.prototype.has=function(t){return tI(this.__data__,t)>-1},tf.prototype.set=function(t,e){var i=this.__data__,r=tI(i,t);return r<0?(++this.size,i.push([t,e])):i[r][1]=e,this},tg.prototype.clear=function(){this.size=0,this.__data__={hash:new tm,map:new(ti||tf),string:new tm}},tg.prototype.delete=function(t){var e=t$(this,t).delete(t);return this.size-=!!e,e},tg.prototype.get=function(t){return t$(this,t).get(t)},tg.prototype.has=function(t){return t$(this,t).has(t)},tg.prototype.set=function(t,e){var i=t$(this,t),r=i.size;return i.set(t,e),this.size+=+(i.size!=r),this},ty.prototype.add=ty.prototype.push=function(t){return this.__data__.set(t,a),this},ty.prototype.has=function(t){return this.__data__.has(t)},tv.prototype.clear=function(){this.__data__=new tf,this.size=0},tv.prototype.delete=function(t){var e=this.__data__,i=e.delete(t);return this.size=e.size,i},tv.prototype.get=function(t){return this.__data__.get(t)},tv.prototype.has=function(t){return this.__data__.has(t)},tv.prototype.set=function(t,e){var i=this.__data__;if(i instanceof tf){var r=i.__data__;if(!ti||r.length<199)return r.push([t,e]),this.size=++i.size,this;i=this.__data__=new tg(r)}return i.set(t,e),this.size=i.size,this};var tS=K?function(t){return null==t?[]:function(t,e){for(var i=-1,r=null==t?0:t.length,n=0,o=[];++i<r;){var a=t[i];e(a,i,t)&&(o[n++]=a)}return o}(K(t=Object(t)),function(e){return q.call(t,e)})}:function(){return[]},tA=tx;function t_(t){if(null!=t){try{return N.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function tP(t,e){return t===e||t!=t&&e!=e}(te&&tA(new te(new ArrayBuffer(1)))!=C||ti&&tA(new ti)!=p||tr&&tA(tr.resolve())!=g||tn&&tA(new tn)!=v||to&&tA(new to)!=x)&&(tA=function(t){var e=tx(t),i=e==f?t.constructor:void 0,r=i?t_(i):"";if(r)switch(r){case ts:return C;case tl:return p;case td:return g;case tc:return v;case th:return x}return e});var tj=tb(function(){return arguments}())?tb:function(t){return tE(t)&&H.call(t,"callee")&&!q.call(t,"callee")},tk=Array.isArray,tO=Z||function(){return!1};function tD(t){if(!tL(t))return!1;var e=tx(t);return e==u||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function tM(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=0x1fffffffffffff}function tL(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function tE(t){return null!=t&&"object"==typeof t}var tR=M?function(t){return M(t)}:function(t){return tE(t)&&tM(t.length)&&!!w[tx(t)]};function tB(t){return null!=t&&tM(t.length)&&!tD(t)?function(t){var e,i,r=tk(t),n=!r&&tj(t),o=!r&&!n&&tO(t),a=!r&&!n&&!o&&tR(t),s=r||n||o||a,l=s?function(t,e){for(var i=-1,r=Array(t);++i<t;)r[i]=e(i);return r}(t.length,String):[],d=l.length;for(var c in t){H.call(t,c)&&!(s&&("length"==c||o&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||(e=c,(i=null==(i=d)?0x1fffffffffffff:i)&&("number"==typeof e||$.test(e))&&e>-1&&e%1==0&&e<i)))&&l.push(c)}return l}(t):function(t){if(i=(e=t)&&e.constructor,e!==("function"==typeof i&&i.prototype||F))return tt(t);var e,i,r=[];for(var n in Object(t))H.call(t,n)&&"constructor"!=n&&r.push(n);return r}(t)}e.exports=function(t,e){return function t(e,i,r,n,o){return e===i||(null!=e&&null!=i&&(tE(e)||tE(i))?function(t,e,i,r,n,o){var a=tk(t),u=tk(e),g=a?l:tA(t),x=u?l:tA(e);g=g==s?f:g,x=x==s?f:x;var T=g==f,$=x==f,w=g==x;if(w&&tO(t)){if(!tO(e))return!1;a=!0,T=!1}if(w&&!T)return o||(o=new tv),a||tR(t)?tC(t,e,i,r,n,o):function(t,e,i,r,n,o,a){switch(i){case C:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case b:if(t.byteLength!=e.byteLength||!o(new V(t),new V(e)))break;return!0;case d:case c:case m:return tP(+t,+e);case h:return t.name==e.name&&t.message==e.message;case y:case I:return t==e+"";case p:var s=L;case v:var l=1&r;if(s||(s=E),t.size!=e.size&&!l)break;var u=a.get(t);if(u)return u==e;r|=2,a.set(t,e);var f=tC(s(t),s(e),r,n,o,a);return a.delete(t),f;case"[object Symbol]":if(tp)return tp.call(t)==tp.call(e)}return!1}(t,e,g,i,r,n,o);if(!(1&i)){var S=T&&H.call(t,"__wrapped__"),A=$&&H.call(e,"__wrapped__");if(S||A){var _=S?t.value():t,P=A?e.value():e;return o||(o=new tv),n(_,P,i,r,o)}}return!!w&&(o||(o=new tv),function(t,e,i,r,n,o){var a=1&i,s=tT(t),l=s.length;if(l!=tT(e).length&&!a)return!1;for(var d=l;d--;){var c=s[d];if(!(a?c in e:H.call(e,c)))return!1}var h=o.get(t);if(h&&o.get(e))return h==e;var u=!0;o.set(t,e),o.set(e,t);for(var p=a;++d<l;){var m=t[c=s[d]],f=e[c];if(r)var g=a?r(f,m,c,e,t,o):r(m,f,c,t,e,o);if(!(void 0===g?m===f||n(m,f,i,r,o):g)){u=!1;break}p||(p="constructor"==c)}if(u&&!p){var y=t.constructor,v=e.constructor;y!=v&&"constructor"in t&&"constructor"in e&&!("function"==typeof y&&y instanceof y&&"function"==typeof v&&v instanceof v)&&(u=!1)}return o.delete(t),o.delete(e),u}(t,e,i,r,n,o))}(e,i,r,n,t,o):e!=e&&i!=i)}(t,e)}},793878,(t,e,i)=>{e.exports=function(t,e,i){return t===e||t.className===e.className&&i(t.style,e.style)&&t.width===e.width&&t.autoSize===e.autoSize&&t.cols===e.cols&&t.draggableCancel===e.draggableCancel&&t.draggableHandle===e.draggableHandle&&i(t.verticalCompact,e.verticalCompact)&&i(t.compactType,e.compactType)&&i(t.layout,e.layout)&&i(t.margin,e.margin)&&i(t.containerPadding,e.containerPadding)&&t.rowHeight===e.rowHeight&&t.maxRows===e.maxRows&&t.isBounded===e.isBounded&&t.isDraggable===e.isDraggable&&t.isResizable===e.isResizable&&t.allowOverlap===e.allowOverlap&&t.preventCollision===e.preventCollision&&t.useCSSTransforms===e.useCSSTransforms&&t.transformScale===e.transformScale&&t.isDroppable===e.isDroppable&&i(t.resizeHandles,e.resizeHandles)&&i(t.resizeHandle,e.resizeHandle)&&t.onLayoutChange===e.onLayoutChange&&t.onDragStart===e.onDragStart&&t.onDrag===e.onDrag&&t.onDragStop===e.onDragStop&&t.onResizeStart===e.onResizeStart&&t.onResize===e.onResize&&t.onResizeStop===e.onResizeStop&&t.onDrop===e.onDrop&&i(t.droppingItem,e.droppingItem)&&i(t.innerRef,e.innerRef)}},84100,(t,e,i)=>{e.exports=t.r(522579).default,e.exports.utils=t.r(535264),e.exports.Responsive=t.r(583643).default,e.exports.Responsive.utils=t.r(849853),e.exports.WidthProvider=t.r(787470).default},479936,(t,e,i)=>{!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)t.push(n);else if(Array.isArray(n)){if(n.length){var a=r.apply(null,n);a&&t.push(a)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var s in n)i.call(n,s)&&n[s]&&t.push(s);else t.push(n.toString())}}return t.join(" ")}if(e.exports)r.default=r,e.exports=r;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==r&&t.v(r);else window.classNames=r}()}]);