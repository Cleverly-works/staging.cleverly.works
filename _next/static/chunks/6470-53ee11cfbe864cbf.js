(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6470],{34193:function(e,t,n){"use strict";var r=n(64836);t.Z=void 0;var i=r(n(64938)),s=n(85893);t.Z=(0,i.default)((0,s.jsx)("path",{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"}),"HomeOutlined")},58951:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(63366),i=n(87462),s=n(67294),o=n(63961),a=n(58510),l=n(90948),u=n(14136),c=n(71657),d=n(15861),h=n(1977),f=n(8027);function p(e){return(0,f.ZP)("MuiDialogContentText",e)}(0,h.Z)("MuiDialogContentText",["root"]);var g=n(85893);let m=["children","className"],v=e=>{let{classes:t}=e,n=(0,a.Z)({root:["root"]},p,t);return(0,i.Z)({},t,n)},y=(0,l.ZP)(d.Z,{shouldForwardProp:e=>(0,u.Z)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),b=s.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiDialogContentText"}),{className:s}=n,a=(0,r.Z)(n,m),l=v(a);return(0,g.jsx)(y,(0,i.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:a,className:(0,o.Z)(l.root,s)},n,{classes:l}))});var _=b},37645:function(e,t,n){"use strict";var r=n(87462),i=n(63366),s=n(67294),o=n(63961),a=n(58510),l=n(15861),u=n(90948),c=n(71657),d=n(4472),h=n(34182),f=n(85893);let p=["className","id"],g=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},d.a,t)},m=(0,u.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),v=s.forwardRef(function(e,t){let n=(0,c.Z)({props:e,name:"MuiDialogTitle"}),{className:a,id:l}=n,u=(0,i.Z)(n,p),d=g(n),{titleId:v=l}=s.useContext(h.Z);return(0,f.jsx)(m,(0,r.Z)({component:"h2",className:(0,o.Z)(d.root,a),ownerState:n,ref:t,variant:"h6",id:null!=l?l:v},u))});t.Z=v},11587:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,i,s,o=n(51174),a=n(67294),l=n(10367),u=n(40826),c=n(82664),d=n(52292),h=n(45697),f=n(28368),p=n(66349),g={children:h.node,className:h.string,content:h.string.isRequired,context:(0,h.oneOf)(Object.values(f.Z)),icon:h.string,iconPrefix:h.string,shape:(0,h.oneOf)(["round","square"]),size:(0,h.oneOf)(Object.values(p.Z)),style:h.object,to:h.string},m=function(e){var t=e.children,n=e.className,r=e.content,i=e.context,s=e.icon,o=e.iconPrefix,l=e.shape,u=e.size,c=e.style,d=e.to;return a.createElement(v,{className:n,context:i,href:d,itemProp:"keywords",shape:l,size:u,style:c},s&&a.createElement(y,{icon:s,prefix:o}),r||t)};m.displayName="Badge";var v=l.ZP.a(r||(r=(0,o.Z)(["\n  ","\n  ","\n  border: ",";\n  border-radius: ",";\n  color: ",";\n  display: inline-block;\n  line-height: 1;\n  margin: 0 0.5em 0.5em 0;\n  padding: ",";\n  font-size: ",";\n  text-align: center;\n  vertical-align: baseline;\n  white-space: nowrap;\n  transition: all 0.1s ease-in-out;\n  text-decoration: none;\n  cursor: default;\n\n  ","\n\n  &:empty {\n    display: none;\n  }\n"])),function(e){return(0,c.Z)(e)},function(e){return(0,d.Z)(e)},function(e){var t=e.context,n=e.theme;return"white"!==t?"none":"1px solid "+n.COLOUR.dark},function(e){var t=e.shape;return e.theme.BADGE.BORDER_RADIUS[t]},function(e){var t=e.theme;return"white"!==e.context?t.COLOUR.white:t.COLOUR.black},function(e){var t=e.size;return e.theme.BADGE.PADDING[t]},function(e){var t=e.size;return e.theme.BADGE.FONT_SIZE[t]},function(e){return e.href&&(0,l.iv)(i||(i=(0,o.Z)(["\n      &:hover {\n        opacity: 0.7;\n        cursor: pointer;\n      }\n    "])))}),y=(0,l.ZP)(u.Z)(s||(s=(0,o.Z)(["\n  margin-right: 5px;\n"])));m.propTypes=g,m.defaultProps={context:"primary",shape:"square",size:"md"};var b=m},62047:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r,i,s,o,a,l,u,c,d,h=n(51174),f=n(76702),p=n(67294),g=n(45697),m=n(10367),v=function(e){var t=e.context,n=e.disabled,r=e.handleToggle,i=e.size,s=e.toggled;return p.createElement(y,{context:t,disabled:n,onClick:!0!==n?r:function(){},size:i,toggled:s},p.createElement(b,{size:i,toggled:s}))};v.displayName="Switch";var y=m.ZP.div(r||(r=(0,h.Z)(["\n  align-items: center;\n  background-color: ",";\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  opacity: ",";\n  position: relative;\n  transition: background-color 0.2s;\n\n  ","\n\n  ","\n\n  ","\n"])),function(e){var t=e.context,n=e.theme;return e.toggled?n.COLOUR[t]:"#cbd5e0"},function(e){return e.disabled?"not-allowed":"pointer"},function(e){return e.disabled?.5:1},function(e){return"sm"===e.size&&(0,m.iv)(i||(i=(0,h.Z)(["\n      border-radius: 40px;\n      height: 20px;\n      width: 40px;\n    "])))},function(e){return"md"===e.size&&(0,m.iv)(s||(s=(0,h.Z)(["\n      border-radius: 60px;\n      height: 30px;\n      width: 60px;\n    "])))},function(e){return"lg"===e.size&&(0,m.iv)(o||(o=(0,h.Z)(["\n      border-radius: 100px;\n      height: 50px;\n      width: 100px;\n    "])))}),b=m.ZP.span(a||(a=(0,h.Z)(["\n  background: #fff;\n  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);\n  left: 2px;\n  position: absolute;\n  top: 2px;\n  transition: left 0.2s, transform 0.2s;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n"])),function(e){return e.toggled&&"\n      left: calc(100% - 2px);\n      transform: translateX(-100%);\n    "},function(e){return"sm"===e.size&&(0,m.iv)(l||(l=(0,h.Z)(["\n      border-radius: 16px;\n      height: 16px;\n      width: 16px;\n    "])))},function(e){return"md"===e.size&&(0,m.iv)(u||(u=(0,h.Z)(["\n      border-radius: 26px;\n      height: 26px;\n      width: 26px;\n    "])))},function(e){return"lg"===e.size&&(0,m.iv)(c||(c=(0,h.Z)(["\n      border-radius: 46px;\n      height: 46px;\n      width: 46px;\n    "])))});v.propTypes={handleToggle:g.func,size:(0,g.oneOf)(["sm","md","lg"]),toggled:g.bool};var _=n(28368),x=function(e){var t=e.context,n=e.disabled,r=e.onToggle,i=e.size,s=e.toggled,o=(0,p.useState)(s),a=(0,f.Z)(o,2),l=a[0],u=a[1];(0,p.useEffect)(function(){u(s)},[s]);var c=function(){r&&r(!l),u(!l)};return p.createElement(E,null,p.createElement(v,{context:t,disabled:n,handleToggle:!n&&c,size:i,toggled:l}))};x.displayName="Toggle";var E=m.ZP.div(d||(d=(0,h.Z)(["\n  display: inline-block;\n  position: relative;\n"])));x.propTypes={context:(0,g.oneOf)(Object.values(_.Z)),disabled:g.bool,onToggle:g.func,size:(0,g.oneOf)(["sm","md","lg"]),toggled:g.bool},x.defaultProps={context:"success",size:"md",toggled:!1};var k=x},55563:function(e,t,n){"use strict";var r=n(18391),i=n(76702),s=n(66080),o=n(67294),a=n(45697),l=n(64522),u=n(66349),c=n(55334),d=["disabled","errors","helperMessage","name","placeholder","readOnly","regExp","register","size","validate","withAddon"],h=function(e){var t=e.disabled,n=e.errors,a=e.helperMessage,u=e.name,h=e.placeholder,f=e.readOnly,p=(e.regExp,e.register),g=e.size,m=(e.validate,e.withAddon),v=(0,s.Z)(e,d),y=(0,o.useState)(!1),b=(0,i.Z)(y,2),_=b[0],x=b[1];return o.createElement(l.Z,(0,r.Z)({"aria-label":u,component:c.Z,disabled:t,helperMessage:a,onKeyDown:function(e){x(!0)},onBlur:function(){x(!1)},errors:n[u],isTyping:_,key:u,name:u,placeholder:h,readOnly:f,register:p,size:g,withAddon:m},v))};h.displayName="FormField",h.propTypes={accept:a.string,autoComplete:(0,a.oneOfType)([a.bool,a.string]),autoFocus:a.bool,disabled:a.bool,errors:a.object.isRequired,helperMessage:a.string,label:a.string,name:a.string.isRequired,placeholder:a.string,readOnly:a.bool,register:a.func.isRequired,size:(0,a.oneOf)([u.Z.SM,u.Z.MD,u.Z.LG]),style:a.object,textAlign:a.string,type:a.string,value:(0,a.oneOfType)([a.string,a.number,a.bool,(0,a.arrayOf)((0,a.oneOfType)([a.string,a.number,a.bool]))])},h.defaultProps={autoComplete:"off",autoFocus:!1,disabled:!1,errors:{},readOnly:!1,type:"text"},t.Z=h},19076:function(e,t,n){"use strict";var r=n(21614),i=n(67294),s=n(45697),o=n(15214),a=n(76312),l=n(17813),u=n(18645),c=n(55843),d=n(28368);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=function(e){var t=e.children,n=e.meta,r=e.pageHeading,s=e.resultAlert,d=e.View,h=s.context,p=s.message,g=f(f({},{description:"Admin",path:"/",title:"Admin"}),n);return i.createElement(i.Suspense,{fallback:i.createElement(u.Z,{indicator:i.createElement(a.Z,null)})},i.createElement(l.Z,{fluid:!0,meta:g,pageHeading:r},d||t,p&&i.createElement(i.Fragment,null,i.createElement(c.Z,null),i.createElement(o.Z,{content:p,context:h}))))};p.displayName="Dashboard",p.propTypes={children:s.node,meta:(0,s.shape)({description:s.string,path:s.string,title:s.string}),pageHeading:(0,s.shape)({center:s.bool,context:(0,s.oneOf)(Object.values(d.Z)),divider:s.bool,heading:s.any.isRequired,help:s.bool,helpContent:s.any,strapline:s.string}),resultAlert:(0,s.shape)({context:s.string,message:s.string}),View:s.node},p.defaultProps={resultAlert:{context:"success",message:""}},t.Z=p},17813:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,i=n(51174),s=n(67294),o=n(45697),a=n(10367),l=n(94303),u=n(74147),c=n(9008),d=n.n(c),h=function(e){var t=e.canonical,n=e.brand,r=e.meta,i=r.description,o=r.path,a=r.title;return s.createElement(d(),null,s.createElement("title",null,a," | ",n),s.createElement("meta",{name:"description",content:i,key:"description"}),s.createElement("meta",{rel:"canonical",href:t+o,key:"canonical"}),s.createElement("meta",{property:"og:title",content:a}),s.createElement("meta",{property:"og:description",content:i}),s.createElement("meta",{property:"og:url",content:t+o}),s.createElement("meta",{name:"twitter:url",content:t+o}),s.createElement("meta",{name:"twitter:title",content:a}),s.createElement("meta",{name:"twitter:description",content:i}))};h.displayName="MetaHead",h.propTypes={brand:o.string.isRequired,meta:o.object.isRequired};var f=n(35599),p=n(55843),g=n(28368),m=n(66349),v=function(e){var t=e.children,n=e.fluid,r=e.meta,i=e.padding,o=e.pageHeading,a=(0,s.useContext)(l.Z).config,c=a.Brand,d=a.Canonical;return s.createElement(y,null,i&&s.createElement(p.Z,{paddingTop:i}),r&&s.createElement(h,{canonical:d,brand:c.name,meta:r}),s.createElement(u.Z,{fluid:n},o&&s.createElement(f.Z,o),t),i&&s.createElement(p.Z,{paddingBottom:i}))};v.displayName="Page";var y=a.ZP.div(r||(r=(0,i.Z)(["\n  background-color: ",";\n"])),function(e){return e.theme.PAGE.backGroundColour});v.propTypes={children:o.node.isRequired,fluid:o.bool,meta:(0,o.shape)({description:o.string.isRequired,path:o.string,title:o.string.isRequired}),padding:(0,o.oneOfType)([o.bool,(0,o.oneOf)(Object.values(m.Z))]),pageHeading:(0,o.shape)({center:o.bool,context:(0,o.oneOf)(Object.values(g.Z)),divider:o.bool,heading:o.any.isRequired,help:o.bool,helpContent:o.any,strapline:o.string})},v.defaultProps={fluid:!1,padding:"md"};var b=v},35599:function(e,t,n){"use strict";var r,i,s,o,a,l=n(51174),u=n(67294),c=n(45697),d=n(10367),h=n(55377),f=n(33006),p=n(28368),g=function(e){var t=e.center,n=e.children,r=e.context,i=e.divider,s=e.heading,o=e.help,a=e.helpContent,l=e.strapline;return u.createElement(m,{center:t,divider:i},u.createElement(v,null,u.createElement(b,{content:s,context:r,pageHeading:!0}),l&&u.createElement("div",null,l)),(n||o)&&u.createElement(y,null,n||a),i&&u.createElement(_,{size:"md"}))};g.displayName="PageHeading";var m=d.ZP.header(r||(r=(0,l.Z)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ",";\n  text-align: ",";\n"])),function(e){return!e.divider&&"2rem"},function(e){return e.center&&"center"}),v=d.ZP.span(i||(i=(0,l.Z)(["\n  flex: 1;\n"]))),y=d.ZP.span(s||(s=(0,l.Z)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]))),b=(0,d.ZP)(f.Z)(o||(o=(0,l.Z)(["\n  margin-bottom: ",";\n"])),function(e){return e.divider?"0.5rem":"0"}),_=(0,d.ZP)(h.Z)(a||(a=(0,l.Z)(["\n  width: 100%;\n"])));g.propTypes={center:c.bool,children:c.element,context:(0,c.oneOf)(Object.values(p.Z)),divider:c.bool,heading:c.any.isRequired,help:c.bool,helpContent:c.any,strapline:c.string},g.defaultProps={center:!1,context:"primary",divider:!0,help:!1,helpContent:"",strapline:""},t.Z=g},68956:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r,i,s=n(67294),o=n(45697),a=n(16551),l=n(28368),u=n(41564),c=function(e){var t=e.children,n=e.tooltip;return s.createElement(u.Z,{content:n},t)};c.displayName="TableActionsTooltip",c.propTypes={children:o.node.isRequired,tooltip:o.string.isRequired};var d=n(51174),h=n(11163),f=n.n(h),p=n(10367),g=n(77439),m=n(40826),v=(0,s.forwardRef)(function(e,t){var n,r=e.context,i=e.disabled,o=e.icon,a=e.numberOverlay,l=e.onClick,u=e.overlayCustom,c=e.row,d=e.to,h=Array.isArray(o),p=c[a]||u,g=l?function(e){return l(e,c)}:(n="".concat(d,"?id=").concat(c.id),function(e){e.preventDefault(),e.stopPropagation(),f().push(n)});return s.createElement(y,{forwardedAs:"a",context:r,disabled:i,itemCount:p,onClick:g,ref:t,size:"sm"},s.createElement(b,{icon:o?h?o[1]:o:null,prefix:o&&h&&o[0]}))}),y=(0,p.ZP)(g.Z)(r||(r=(0,d.Z)(["\n  font-size: 14px;\n  padding: 0.5rem;\n  position: relative;\n"]))),b=(0,p.ZP)(m.Z)(i||(i=(0,d.Z)(["\n  pointer-events: 'none';\n"])));v.propTypes={context:(0,o.oneOf)(Object.values(l.Z)),disabled:o.bool,icon:(0,o.oneOfType)([o.array,o.string]),numberOverlay:o.string,onClick:o.func,overlayCustom:o.string,row:o.object.isRequired,to:o.string};var _=function(e){var t,n=e.align,r=e.data,i=e.row;return t="function"==typeof r?r()(i):r,s.createElement(a.Z,{align:n},t.map(function(e,t){var n=e.context,r=e.disabled,o=e.icon,a=e.numberOverlay,l=e.onClick,u=e.overlayCustom,d=e.to,h=e.tooltip;return s.createElement(c,{key:t,tooltip:h},s.createElement(v,{context:n,disabled:r,icon:o,numberOverlay:a,onClick:l,overlayCustom:u,row:i,to:d}))}))};_.displayName="TableActions",_.propTypes={align:o.string,data:(0,o.arrayOf)((0,o.shape)({content:o.string,context:(0,o.oneOf)(Object.values(l.Z)),disabled:o.bool,icon:(0,o.oneOfType)([o.array,o.string]),numberOverlay:o.string,onClick:o.func,overlayCustom:o.string,to:o.string,tooltip:o.string})).isRequired,row:o.object.isRequired},_.defaultProps={align:"flex-start"};var x=_},11082:function(e,t){"use strict";var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:t,currencyDisplay:"symbol",style:"currency"}).format(e)};t.Z=n},57460:function(e,t){var n,r,i,s; /* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/ s=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},n=!t.document&&!!t.postMessage,r=n&&/blob:/i.test((t.location||{}).protocol),i={},s=0,o={parse:function(n,r){var a=(r=r||{}).dynamicTyping||!1;if(x(a)&&(r.dynamicTypingFunction=a,a={}),r.dynamicTyping=a,r.transform=!!x(r.transform)&&r.transform,r.worker&&o.WORKERS_SUPPORTED){var l=function(){if(!o.WORKERS_SUPPORTED)return!1;var n,r,a=(n=t.URL||t.webkitURL||null,r=e.toString(),o.BLOB_URL||(o.BLOB_URL=n.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),l=new t.Worker(a);return l.onmessage=m,l.id=s++,i[l.id]=l}();return l.userStep=r.step,l.userChunk=r.chunk,l.userComplete=r.complete,l.userError=r.error,r.step=x(r.step),r.chunk=x(r.chunk),r.complete=x(r.complete),r.error=x(r.error),delete r.worker,void l.postMessage({input:n,config:r,workerId:l.id})}var f=null;return o.NODE_STREAM_INPUT,"string"==typeof n?f=r.download?new u(r):new d(r):!0===n.readable&&x(n.read)&&x(n.on)?f=new h(r):(t.File&&n instanceof File||n instanceof Object)&&(f=new c(r)),f.stream(n)},unparse:function(e,t){var n=!1,r=!0,i=",",s="\r\n",a='"',l=a+a,u=!1,c=null,d=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(i=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+a),"boolean"==typeof t.escapeFormulae&&(d=t.escapeFormulae)}}();var h=RegExp(p(a),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return g(null,e,u);if("object"==typeof e[0])return g(c||f(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:f(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),g(e.fields||[],e.data||[],u);throw Error("Unable to serialize unrecognized input");function f(e){if("object"!=typeof e)return[];var t=[];for(var n in e)t.push(n);return t}function g(e,t,n){var o="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var a=Array.isArray(e)&&0<e.length,l=!Array.isArray(t[0]);if(a&&r){for(var u=0;u<e.length;u++)0<u&&(o+=i),o+=m(e[u],u);0<t.length&&(o+=s)}for(var c=0;c<t.length;c++){var d=a?e.length:t[c].length,h=!1,f=a?0===Object.keys(t[c]).length:0===t[c].length;if(n&&!a&&(h="greedy"===n?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===n&&a){for(var p=[],g=0;g<d;g++){var v=l?e[g]:g;p.push(t[c][v])}h=""===p.join("").trim()}if(!h){for(var y=0;y<d;y++){0<y&&!f&&(o+=i);var b=a&&l?e[y]:y;o+=m(t[c][b],y)}c<t.length-1&&(!n||0<d&&!f)&&(o+=s)}}return o}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===d&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var r=e.toString().replace(h,l);return"boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1}(r,o.BAD_DELIMITERS)||-1<r.indexOf(i)||" "===r.charAt(0)||" "===r.charAt(r.length-1)?a+r+a:r}}};if(o.RECORD_SEP="\x1e",o.UNIT_SEP="\x1f",o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!n&&!!t.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=g,o.ParserHandle=f,o.NetworkStreamer=u,o.FileStreamer=c,o.StringStreamer=d,o.ReadableStreamStreamer=h,t.jQuery){var a=t.jQuery;a.fn.parse=function(e){var n=e.config||{},r=[];return this.each(function(e){if(!("INPUT"===a(this).prop("tagName").toUpperCase()&&"file"===a(this).attr("type").toLowerCase()&&t.FileReader)||!this.files||0===this.files.length)return!0;for(var i=0;i<this.files.length;i++)r.push({file:this.files[i],inputElem:this,instanceConfig:a.extend({},n)})}),i(),this;function i(){if(0!==r.length){var t,n,i,l,u=r[0];if(x(e.before)){var c=e.before(u.file,u.inputElem);if("object"==typeof c){if("abort"===c.action)return t="AbortError",n=u.file,i=u.inputElem,l=c.reason,void(x(e.error)&&e.error({name:t},n,i,l));if("skip"===c.action)return void s();"object"==typeof c.config&&(u.instanceConfig=a.extend(u.instanceConfig,c.config))}else if("skip"===c)return void s()}var d=u.instanceConfig.complete;u.instanceConfig.complete=function(e){x(d)&&d(e,u.file,u.inputElem),s()},o.parse(u.file,u.instanceConfig)}else x(e.complete)&&e.complete()}function s(){r.splice(0,1),i()}}}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,n){if(this.isFirstChunk&&x(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var a=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=a.meta.cursor;this._finished||(this._partialLine=s.substring(l-this._baseIndex),this._baseIndex=l),a&&a.data&&(this._rowCount+=a.data.length);var u=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(r)t.postMessage({results:a,workerId:o.WORKER_ID,finished:u});else if(x(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);a=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!u||!x(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),u||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){x(this._config.error)?this._config.error(e):r&&this._config.error&&t.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),l.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=_(this._chunkLoaded,this),t.onerror=_(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)t.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{t.send(this._config.downloadRequestBody)}catch(s){this._chunkError(s.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){var e,n;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(n=(e=t).getResponseHeader("Content-Range"))?-1:parseInt(n.substring(n.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(e){var n=t.statusText||e;this._sendError(Error(n))}}function c(e){(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),l.call(this,e);var t,n,r="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=_(this._chunkLoaded,this),t.onerror=_(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var i=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,i)}var s=t.readAsText(e,this._config.encoding);r||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function d(e){var t;l.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,n=this._config.chunkSize;return n?(e=t.substring(0,n),t=t.substring(n)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function h(e){l.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=_(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(r){this._streamError(r)}},this),this._streamError=_(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=_(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=_(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function f(e){var t,n,r,i=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,s=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,a=this,l=0,u=0,c=!1,d=!1,h=[],f={data:[],errors:[],meta:{}};if(x(e.step)){var m=e.step;e.step=function(t){if(f=t,_())y();else{if(y(),0===f.data.length)return;l+=t.data.length,e.preview&&l>e.preview?n.abort():(f.data=f.data[0],m(f,a))}}}function v(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function y(){if(f&&r&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),r=!1),e.skipEmptyLines)for(var t=0;t<f.data.length;t++)v(f.data[t])&&f.data.splice(t--,1);return _()&&function(){if(f){if(Array.isArray(f.data[0])){for(var t=0;_()&&t<f.data.length;t++)f.data[t].forEach(n);f.data.splice(0,1)}else f.data.forEach(n)}function n(t,n){x(e.transformHeader)&&(t=e.transformHeader(t,n)),h.push(t)}}(),function(){if(!f||!e.header&&!e.dynamicTyping&&!e.transform)return f;function t(t,n){var r,i=e.header?{}:[];for(r=0;r<t.length;r++){var s=r,o=t[r];e.header&&(s=r>=h.length?"__parsed_extra":h[r]),e.transform&&(o=e.transform(o,s)),o=E(s,o),"__parsed_extra"===s?(i[s]=i[s]||[],i[s].push(o)):i[s]=o}return e.header&&(r>h.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+h.length+" fields but parsed "+r,u+n):r<h.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+h.length+" fields but parsed "+r,u+n)),i}var n=1;return!f.data.length||Array.isArray(f.data[0])?(f.data=f.data.map(t),n=f.data.length):f.data=t(f.data,0),e.header&&f.meta&&(f.meta.fields=h),u+=n,f}()}function _(){return e.header&&0===h.length}function E(t,n){return e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(!function(e){if(i.test(e)){var t=parseFloat(e);if(-9007199254740992<t&&t<9007199254740992)return!0}return!1}(n)?s.test(n)?new Date(n):""===n?null:n:parseFloat(n)):n}function k(e,t,n,r){var i={type:e,code:t,message:n};void 0!==r&&(i.row=r),f.errors.push(i)}this.parse=function(i,s,a){var l=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var n=RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),s=1<i.length&&i[0].length<r[0].length;if(1===r.length||s)return"\n";for(var o=0,a=0;a<r.length;a++)"\n"===r[a][0]&&o++;return o>=r.length/2?"\r\n":"\r"}(i,l)),r=!1,e.delimiter)x(e.delimiter)&&(e.delimiter=e.delimiter(i),f.meta.delimiter=e.delimiter);else{var u=function(t,n,r,i,s){var a,l,u,c;s=s||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var d=0;d<s.length;d++){var h=s[d],f=0,p=0,m=0;u=void 0;for(var y=new g({comments:i,delimiter:h,newline:n,preview:10}).parse(t),b=0;b<y.data.length;b++)if(r&&v(y.data[b]))m++;else{var _=y.data[b].length;p+=_,void 0!==u?0<_&&(f+=Math.abs(_-u),u=_):u=_}0<y.data.length&&(p/=y.data.length-m),(void 0===l||f<=l)&&(void 0===c||c<p)&&1.99<p&&(l=f,a=h,c=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}}(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);u.successful?e.delimiter=u.bestDelimiter:(r=!0,e.delimiter=o.DefaultDelimiter),f.meta.delimiter=e.delimiter}var d=b(e);return e.preview&&e.header&&d.preview++,t=i,f=(n=new g(d)).parse(t,s,a),y(),c?{meta:{paused:!0}}:f||{meta:{paused:!1}}},this.paused=function(){return c},this.pause=function(){c=!0,n.abort(),t=x(e.chunk)?"":t.substring(n.getCharIndex())},this.resume=function(){a.streamer._halted?(c=!1,a.streamer.parseChunk(t,!0)):setTimeout(a.resume,3)},this.aborted=function(){return d},this.abort=function(){d=!0,n.abort(),f.meta.aborted=!0,x(e.complete)&&e.complete(f),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t,n=(e=e||{}).delimiter,r=e.newline,i=e.comments,s=e.step,a=e.preview,l=e.fastMode,u=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof n||-1<o.BAD_DELIMITERS.indexOf(n))&&(n=","),i===n)throw Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var c=0,d=!1;this.parse=function(e,o,h){if("string"!=typeof e)throw Error("Input must be a string");var f=e.length,g=n.length,m=r.length,v=i.length,y=x(s),b=[],_=[],E=[],k=c=0;if(!e)return L();if(l||!1!==l&&-1===e.indexOf(t)){for(var O=e.split(r),w=0;w<O.length;w++){if(c+=(E=O[w]).length,w!==O.length-1)c+=r.length;else if(h)break;if(!i||E.substring(0,v)!==i){if(y){if(b=[],P(E.split(n)),F(),d)return L()}else P(E.split(n));if(a&&a<=w)return b=b.slice(0,a),L(!0)}}return L()}for(var Z=e.indexOf(n,c),C=e.indexOf(r,c),R=RegExp(p(u)+p(t),"g"),T=e.indexOf(t,c);;)if(e[c]!==t){if(i&&0===E.length&&e.substring(c,c+v)===i){if(-1===C)return L();c=C+m,C=e.indexOf(r,c),Z=e.indexOf(n,c)}else{if(-1!==Z&&(Z<C||-1===C)){if(!(Z<T)){E.push(e.substring(c,Z)),c=Z+g,Z=e.indexOf(n,c);continue}var S=q(Z,T,C);if(S&&void 0!==S.nextDelim){Z=S.nextDelim,T=S.quoteSearch,E.push(e.substring(c,Z)),c=Z+g,Z=e.indexOf(n,c);continue}}if(-1===C)break;if(E.push(e.substring(c,C)),I(C+m),y&&(F(),d))return L();if(a&&b.length>=a)return L(!0)}}else for(T=c,c++;;){if(-1===(T=e.indexOf(t,T+1)))return h||_.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:b.length,index:c}),z();if(T===f-1)return z(e.substring(c,T).replace(R,t));if(t!==u||e[T+1]!==u){if(t===u||0===T||e[T-1]!==u){-1!==Z&&Z<T+1&&(Z=e.indexOf(n,T+1)),-1!==C&&C<T+1&&(C=e.indexOf(r,T+1));var D=j(-1===C?Z:Math.min(Z,C));if(e[T+1+D]===n){E.push(e.substring(c,T).replace(R,t)),e[c=T+1+D+g]!==t&&(T=e.indexOf(t,c)),Z=e.indexOf(n,c),C=e.indexOf(r,c);break}var A=j(C);if(e.substring(T+1+A,T+1+A+m)===r){if(E.push(e.substring(c,T).replace(R,t)),I(T+1+A+m),Z=e.indexOf(n,c),T=e.indexOf(t,c),y&&(F(),d))return L();if(a&&b.length>=a)return L(!0);break}_.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:b.length,index:c}),T++}}else T++}return z();function P(e){b.push(e),k=c}function j(t){var n=0;if(-1!==t){var r=e.substring(T+1,t);r&&""===r.trim()&&(n=r.length)}return n}function z(t){return h||(void 0===t&&(t=e.substring(c)),E.push(t),c=f,P(E),y&&F()),L()}function I(t){c=t,P(E),E=[],C=e.indexOf(r,c)}function L(e){return{data:b,errors:_,meta:{delimiter:n,linebreak:r,aborted:d,truncated:!!e,cursor:k+(o||0)}}}function F(){s(L()),b=[],_=[]}function q(r,i,s){var o={nextDelim:void 0,quoteSearch:void 0},a=e.indexOf(t,i+1);if(i<r&&r<a&&(a<s||-1===s)){var l=e.indexOf(n,a);if(-1===l)return o;a<l&&(a=e.indexOf(t,a+1)),o=q(l,a,s)}else o={nextDelim:r,quoteSearch:i};return o}},this.abort=function(){d=!0},this.getCharIndex=function(){return c}}function m(e){var t=e.data,n=i[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(x(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},s),!r);o++);delete t.results}else x(n.userChunk)&&(n.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=i[e];x(n.userComplete)&&n.userComplete(t),n.terminate(),delete i[e]}function y(){throw Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=b(e[n]);return t}function _(e,t){return function(){e.apply(t,arguments)}}function x(e){return"function"==typeof e}return r&&(t.onmessage=function(e){var n=e.data;if(void 0===o.WORKER_ID&&n&&(o.WORKER_ID=n.workerId),"string"==typeof n.input)t.postMessage({workerId:o.WORKER_ID,results:o.parse(n.input,n.config),finished:!0});else if(t.File&&n.input instanceof File||n.input instanceof Object){var r=o.parse(n.input,n.config);r&&t.postMessage({workerId:o.WORKER_ID,results:r,finished:!0})}}),(u.prototype=Object.create(l.prototype)).constructor=u,(c.prototype=Object.create(l.prototype)).constructor=c,(d.prototype=Object.create(d.prototype)).constructor=d,(h.prototype=Object.create(l.prototype)).constructor=h,o},void 0!==(i=s.apply(t,[]))&&(e.exports=i)},40872:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(){return r.apply(this,arguments)}n.d(t,{Z:function(){return i}})}}]);