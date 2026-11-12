(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[332793,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e.r(421506)),i=e.r(391398);a.default=(0,r.default)((0,i.jsx)("path",{d:"M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAlt")},37463,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e.r(421506)),i=e.r(391398);a.default=(0,r.default)((0,i.jsx)("path",{d:"M10 9h4V6h3l-5-5-5 5h3zm-1 1H6V7l-5 5 5 5v-3h3zm14 2-5-5v3h-3v4h3v3zm-9 3h-4v3H7l5 5 5-5h-3z"}),"OpenWith")},753892,e=>{function t(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=function e(t){var a,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(a=0;a<t.length;a++)t[a]&&(n=e(t[a]))&&(r&&(r+=" "),r+=n);else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}(e))&&(n&&(n+=" "),n+=t);return n}e.s(["clsx",0,t,"default",0,t])},978444,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"DraggableCore",{enumerable:!0,get:function(){return u.default}}),a.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p(void 0);if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}(e.r(191788)),r=m(e.r(691567)),i=m(e.r(730943)),o=m(e.r(753892)),s=e.r(976636),d=e.r(301461),l=e.r(431223),u=m(e.r(497840)),c=m(e.r(62029));function m(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}function I(){return(I=Object.assign.bind()).apply(this,arguments)}function f(e,t,a){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class g extends n.Component{static getDerivedStateFromProps(e,t){let{position:a}=e,{prevPropsPosition:n}=t;return a&&(!n||a.x!==n.x||a.y!==n.y)?((0,c.default)("Draggable: getDerivedStateFromProps %j",{position:a,prevPropsPosition:n}),{x:a.x,y:a.y,prevPropsPosition:{...a}}):null}constructor(e){super(e),f(this,"onDragStart",(e,t)=>{if((0,c.default)("Draggable: onDragStart: %j",t),!1===this.props.onStart(e,(0,d.createDraggableData)(this,t)))return!1;this.setState({dragging:!0,dragged:!0})}),f(this,"onDrag",(e,t)=>{if(!this.state.dragging)return!1;(0,c.default)("Draggable: onDrag: %j",t);let a=(0,d.createDraggableData)(this,t),n={x:a.x,y:a.y,slackX:0,slackY:0};if(this.props.bounds){let{x:e,y:t}=n;n.x+=this.state.slackX,n.y+=this.state.slackY;let[r,i]=(0,d.getBoundPosition)(this,n.x,n.y);n.x=r,n.y=i,n.slackX=this.state.slackX+(e-n.x),n.slackY=this.state.slackY+(t-n.y),a.x=n.x,a.y=n.y,a.deltaX=n.x-this.state.x,a.deltaY=n.y-this.state.y}if(!1===this.props.onDrag(e,a))return!1;this.setState(n)}),f(this,"onDragStop",(e,t)=>{if(!this.state.dragging||!1===this.props.onStop(e,(0,d.createDraggableData)(this,t)))return!1;(0,c.default)("Draggable: onDragStop: %j",t);let a={dragging:!1,slackX:0,slackY:0};if(this.props.position){let{x:e,y:t}=this.props.position;a.x=e,a.y=t}this.setState(a)}),this.state={dragging:!1,dragged:!1,x:e.position?e.position.x:e.defaultPosition.x,y:e.position?e.position.y:e.defaultPosition.y,prevPropsPosition:{...e.position},slackX:0,slackY:0,isElementSVG:!1},e.position&&!(e.onDrag||e.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var e,t;return null!=(e=null==(t=this.props)||null==(t=t.nodeRef)?void 0:t.current)?e:i.default.findDOMNode(this)}render(){let{axis:e,bounds:t,children:a,defaultPosition:r,defaultClassName:i,defaultClassNameDragging:l,defaultClassNameDragged:c,position:m,positionOffset:p,scale:f,...g}=this.props,h={},y=null,v=!m||this.state.dragging,$=m||r,b={x:(0,d.canDragX)(this)&&v?this.state.x:$.x,y:(0,d.canDragY)(this)&&v?this.state.y:$.y};this.state.isElementSVG?y=(0,s.createSVGTransform)(b,p):h=(0,s.createCSSTransform)(b,p);let x=(0,o.default)(a.props.className||"",i,{[l]:this.state.dragging,[c]:this.state.dragged});return n.createElement(u.default,I({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),n.cloneElement(n.Children.only(a),{className:x,style:{...a.props.style,...h},transform:y}))}}a.default=g,f(g,"displayName","Draggable"),f(g,"propTypes",{...u.default.propTypes,axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),f(g,"defaultProps",{...u.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})},497840,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c(void 0);if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}(e.r(191788)),r=u(e.r(691567)),i=u(e.r(730943)),o=e.r(976636),s=e.r(301461),d=e.r(431223),l=u(e.r(62029));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function m(e,t,a){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let p={start:"touchstart",move:"touchmove",stop:"touchend"},I={start:"mousedown",move:"mousemove",stop:"mouseup"},f=I;class g extends n.Component{constructor(){super(...arguments),m(this,"dragging",!1),m(this,"lastX",0/0),m(this,"lastY",0/0),m(this,"touchIdentifier",null),m(this,"mounted",!1),m(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&"number"==typeof e.button&&0!==e.button)return!1;let t=this.findDOMNode();if(!t||!t.ownerDocument||!t.ownerDocument.body)throw Error("<DraggableCore> not mounted on DragStart!");let{ownerDocument:a}=t;if(this.props.disabled||!(e.target instanceof a.defaultView.Node)||this.props.handle&&!(0,o.matchesSelectorAndParentsTo)(e.target,this.props.handle,t)||this.props.cancel&&(0,o.matchesSelectorAndParentsTo)(e.target,this.props.cancel,t))return;"touchstart"===e.type&&e.preventDefault();let n=(0,o.getTouchIdentifier)(e);this.touchIdentifier=n;let r=(0,s.getControlPosition)(e,n,this);if(null==r)return;let{x:i,y:d}=r,u=(0,s.createCoreData)(this,i,d);(0,l.default)("DraggableCore: handleDragStart: %j",u),(0,l.default)("calling",this.props.onStart),!1!==this.props.onStart(e,u)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,o.addUserSelectStyles)(a),this.dragging=!0,this.lastX=i,this.lastY=d,(0,o.addEvent)(a,f.move,this.handleDrag),(0,o.addEvent)(a,f.stop,this.handleDragStop))}),m(this,"handleDrag",e=>{let t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:a,y:n}=t;if(Array.isArray(this.props.grid)){let e=a-this.lastX,t=n-this.lastY;if([e,t]=(0,s.snapToGrid)(this.props.grid,e,t),!e&&!t)return;a=this.lastX+e,n=this.lastY+t}let r=(0,s.createCoreData)(this,a,n);if((0,l.default)("DraggableCore: handleDrag: %j",r),!1===this.props.onDrag(e,r)||!1===this.mounted){try{this.handleDragStop(new MouseEvent("mouseup"))}catch(t){let e=document.createEvent("MouseEvents");e.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(e)}return}this.lastX=a,this.lastY=n}),m(this,"handleDragStop",e=>{if(!this.dragging)return;let t=(0,s.getControlPosition)(e,this.touchIdentifier,this);if(null==t)return;let{x:a,y:n}=t;if(Array.isArray(this.props.grid)){let e=a-this.lastX||0,t=n-this.lastY||0;[e,t]=(0,s.snapToGrid)(this.props.grid,e,t),a=this.lastX+e,n=this.lastY+t}let r=(0,s.createCoreData)(this,a,n);if(!1===this.props.onStop(e,r)||!1===this.mounted)return!1;let i=this.findDOMNode();i&&this.props.enableUserSelectHack&&(0,o.removeUserSelectStyles)(i.ownerDocument),(0,l.default)("DraggableCore: handleDragStop: %j",r),this.dragging=!1,this.lastX=0/0,this.lastY=0/0,i&&((0,l.default)("DraggableCore: Removing handlers"),(0,o.removeEvent)(i.ownerDocument,f.move,this.handleDrag),(0,o.removeEvent)(i.ownerDocument,f.stop,this.handleDragStop))}),m(this,"onMouseDown",e=>(f=I,this.handleDragStart(e))),m(this,"onMouseUp",e=>(f=I,this.handleDragStop(e))),m(this,"onTouchStart",e=>(f=p,this.handleDragStart(e))),m(this,"onTouchEnd",e=>(f=p,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;let e=this.findDOMNode();e&&(0,o.addEvent)(e,p.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;let e=this.findDOMNode();if(e){let{ownerDocument:t}=e;(0,o.removeEvent)(t,I.move,this.handleDrag),(0,o.removeEvent)(t,p.move,this.handleDrag),(0,o.removeEvent)(t,I.stop,this.handleDragStop),(0,o.removeEvent)(t,p.stop,this.handleDragStop),(0,o.removeEvent)(e,p.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,o.removeUserSelectStyles)(t)}}findDOMNode(){var e,t;return null!=(e=this.props)&&e.nodeRef?null==(t=this.props)||null==(t=t.nodeRef)?void 0:t.current:i.default.findDOMNode(this)}render(){return n.cloneElement(n.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}a.default=g,m(g,"displayName","DraggableCore"),m(g,"propTypes",{allowAnyClick:r.default.bool,children:r.default.node.isRequired,disabled:r.default.bool,enableUserSelectHack:r.default.bool,offsetParent:function(e,t){if(e[t]&&1!==e[t].nodeType)throw Error("Draggable's offsetParent must be a DOM Node.")},grid:r.default.arrayOf(r.default.number),handle:r.default.string,cancel:r.default.string,nodeRef:r.default.object,onStart:r.default.func,onDrag:r.default.func,onStop:r.default.func,onMouseDown:r.default.func,scale:r.default.number,className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),m(g,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1})},161565,(e,t,a)=>{let{default:n,DraggableCore:r}=e.r(978444);t.exports=n,t.exports.default=n,t.exports.DraggableCore=r},976636,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.addClassName=l,a.addEvent=function(e,t,a,n){if(!e)return;let r={capture:!0,...n};e.addEventListener?e.addEventListener(t,a,r):e.attachEvent?e.attachEvent("on"+t,a):e["on"+t]=a},a.addUserSelectStyles=function(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||((t=e.createElement("style")).type="text/css",t.id="react-draggable-style-el",t.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",t.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",e.getElementsByTagName("head")[0].appendChild(t)),e.body&&l(e.body,"react-draggable-transparent-selection")},a.createCSSTransform=function(e,t){let a=d(e,t,"px");return{[(0,r.browserPrefixToKey)("transform",r.default)]:a}},a.createSVGTransform=function(e,t){return d(e,t,"")},a.getTouch=function(e,t){return e.targetTouches&&(0,n.findInArray)(e.targetTouches,e=>t===e.identifier)||e.changedTouches&&(0,n.findInArray)(e.changedTouches,e=>t===e.identifier)},a.getTouchIdentifier=function(e){return e.targetTouches&&e.targetTouches[0]?e.targetTouches[0].identifier:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].identifier:void 0},a.getTranslation=d,a.innerHeight=function(e){let t=e.clientHeight,a=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,n.int)(a.paddingTop),t-=(0,n.int)(a.paddingBottom)},a.innerWidth=function(e){let t=e.clientWidth,a=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,n.int)(a.paddingLeft),t-=(0,n.int)(a.paddingRight)},a.matchesSelector=s,a.matchesSelectorAndParentsTo=function(e,t,a){let n=e;do{if(s(n,t))return!0;if(n===a)break;n=n.parentNode}while(n)return!1},a.offsetXYFromParent=function(e,t,a){let n=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect();return{x:(e.clientX+t.scrollLeft-n.left)/a,y:(e.clientY+t.scrollTop-n.top)/a}},a.outerHeight=function(e){let t=e.clientHeight,a=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,n.int)(a.borderTopWidth),t+=(0,n.int)(a.borderBottomWidth)},a.outerWidth=function(e){let t=e.clientWidth,a=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,n.int)(a.borderLeftWidth),t+=(0,n.int)(a.borderRightWidth)},a.removeClassName=u,a.removeEvent=function(e,t,a,n){if(!e)return;let r={capture:!0,...n};e.removeEventListener?e.removeEventListener(t,a,r):e.detachEvent?e.detachEvent("on"+t,a):e["on"+t]=null},a.removeUserSelectStyles=function(e){if(e)try{if(e.body&&u(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{let t=(e.defaultView||window).getSelection();t&&"Caret"!==t.type&&t.removeAllRanges()}}catch(e){}};var n=e.r(431223),r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=i(void 0);if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}(e.r(66228));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}let o="";function s(e,t){return o||(o=(0,n.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(t){return(0,n.isFunction)(e[t])})),!!(0,n.isFunction)(e[o])&&e[o](t)}function d(e,t,a){let{x:n,y:r}=e,i="translate(".concat(n).concat(a,",").concat(r).concat(a,")");if(t){let e="".concat("string"==typeof t.x?t.x:t.x+a),n="".concat("string"==typeof t.y?t.y:t.y+a);i="translate(".concat(e,", ").concat(n,")")+i}return i}function l(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function u(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}},66228,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.browserPrefixToKey=i,a.browserPrefixToStyle=function(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e},a.default=void 0,a.getPrefix=r;let n=["Moz","Webkit","O","ms"];function r(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("u"<typeof window)return"";let a=null==(e=window.document)||null==(e=e.documentElement)?void 0:e.style;if(!a||t in a)return"";for(let e=0;e<n.length;e++)if(i(t,n[e])in a)return n[e];return""}function i(e,t){return t?"".concat(t).concat(function(e){let t="",a=!0;for(let n=0;n<e.length;n++)a?(t+=e[n].toUpperCase(),a=!1):"-"===e[n]?a=!0:t+=e[n];return t}(e)):e}a.default=r()},62029,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){}},301461,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.canDragX=function(e){return"both"===e.props.axis||"x"===e.props.axis},a.canDragY=function(e){return"both"===e.props.axis||"y"===e.props.axis},a.createCoreData=function(e,t,a){let r=!(0,n.isNum)(e.lastX),o=i(e);return r?{node:o,deltaX:0,deltaY:0,lastX:t,lastY:a,x:t,y:a}:{node:o,deltaX:t-e.lastX,deltaY:a-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:a}},a.createDraggableData=function(e,t){let a=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/a,y:e.state.y+t.deltaY/a,deltaX:t.deltaX/a,deltaY:t.deltaY/a,lastX:e.state.x,lastY:e.state.y}},a.getBoundPosition=function(e,t,a){var o;if(!e.props.bounds)return[t,a];let{bounds:s}=e.props;s="string"==typeof s?s:{left:(o=s).left,top:o.top,right:o.right,bottom:o.bottom};let d=i(e);if("string"==typeof s){let e,{ownerDocument:t}=d,a=t.defaultView;if(!((e="parent"===s?d.parentNode:t.querySelector(s))instanceof a.HTMLElement))throw Error('Bounds selector "'+s+'" could not find an element.');let i=a.getComputedStyle(d),o=a.getComputedStyle(e);s={left:-d.offsetLeft+(0,n.int)(o.paddingLeft)+(0,n.int)(i.marginLeft),top:-d.offsetTop+(0,n.int)(o.paddingTop)+(0,n.int)(i.marginTop),right:(0,r.innerWidth)(e)-(0,r.outerWidth)(d)-d.offsetLeft+(0,n.int)(o.paddingRight)-(0,n.int)(i.marginRight),bottom:(0,r.innerHeight)(e)-(0,r.outerHeight)(d)-d.offsetTop+(0,n.int)(o.paddingBottom)-(0,n.int)(i.marginBottom)}}return(0,n.isNum)(s.right)&&(t=Math.min(t,s.right)),(0,n.isNum)(s.bottom)&&(a=Math.min(a,s.bottom)),(0,n.isNum)(s.left)&&(t=Math.max(t,s.left)),(0,n.isNum)(s.top)&&(a=Math.max(a,s.top)),[t,a]},a.getControlPosition=function(e,t,a){let n="number"==typeof t?(0,r.getTouch)(e,t):null;if("number"==typeof t&&!n)return null;let o=i(a),s=a.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,r.offsetXYFromParent)(n||e,s,a.props.scale)},a.snapToGrid=function(e,t,a){return[Math.round(t/e[0])*e[0],Math.round(a/e[1])*e[1]]};var n=e.r(431223),r=e.r(976636);function i(e){let t=e.findDOMNode();if(!t)throw Error("<DraggableCore>: Unmounted during event!");return t}},431223,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.dontSetMe=function(e,t,a){if(e[t])return Error("Invalid prop ".concat(t," passed to ").concat(a," - do not set this, set it on the child."))},a.findInArray=function(e,t){for(let a=0,n=e.length;a<n;a++)if(t.apply(t,[e[a],a,e]))return e[a]},a.int=function(e){return parseInt(e,10)},a.isFunction=function(e){return"function"==typeof e||"[object Function]"===Object.prototype.toString.call(e)},a.isNum=function(e){return"number"==typeof e&&!isNaN(e)}},754975,(e,t,a)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=m(e.r(191788)),i=m(e.r(691567)),o=e.r(161565),s=e.r(250252),d=e.r(535264),l=e.r(439540),u=e.r(579125),c=m(e.r(479936));function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){y(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");u.prototype=Object.create(e&&e.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),e&&f(u,e);var t,a,i=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=h(u);return e=t?Reflect.construct(a,arguments,h(this).constructor):a.apply(this,arguments),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return g(e)}(this,e)});function u(){var e;if(!(this instanceof u))throw TypeError("Cannot call a class as a function");for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];return y(g(e=i.call.apply(i,[this].concat(a))),"state",{resizing:null,dragging:null,className:""}),y(g(e),"elementRef",r.default.createRef()),y(g(e),"onDragStart",function(t,a){var n=a.node,r=e.props,i=r.onDragStart,o=r.transformScale;if(i){var s={top:0,left:0},d=n.offsetParent;if(d){var u=d.getBoundingClientRect(),c=n.getBoundingClientRect(),m=c.left/o,p=u.left/o,I=c.top/o,f=u.top/o;s.left=m-p+d.scrollLeft,s.top=I-f+d.scrollTop,e.setState({dragging:s});var h=(0,l.calcXY)(e.getPositionParams(),s.top,s.left,e.props.w,e.props.h),y=h.x,v=h.y;return i.call(g(e),e.props.i,y,v,{e:t,node:n,newPosition:s})}}}),y(g(e),"onDrag",function(t,a){var n=a.node,r=a.deltaX,i=a.deltaY,o=e.props.onDrag;if(o){if(!e.state.dragging)throw Error("onDrag called before onDragStart.");var s=e.state.dragging.top+i,d=e.state.dragging.left+r,u=e.props,c=u.isBounded,m=u.i,p=u.w,I=u.h,f=u.containerWidth,h=e.getPositionParams();if(c){var y=n.offsetParent;if(y){var v=e.props,$=v.margin,b=v.rowHeight,x=y.clientHeight-(0,l.calcGridItemWHPx)(I,b,$[1]);s=(0,l.clamp)(s,0,x);var _=(0,l.calcGridColWidth)(h),T=f-(0,l.calcGridItemWHPx)(p,_,$[0]);d=(0,l.clamp)(d,0,T)}}var C={top:s,left:d};e.setState({dragging:C});var w=(0,l.calcXY)(h,s,d,p,I),j=w.x,A=w.y;return o.call(g(e),m,j,A,{e:t,node:n,newPosition:C})}}),y(g(e),"onDragStop",function(t,a){var n=a.node,r=e.props.onDragStop;if(r){if(!e.state.dragging)throw Error("onDragEnd called before onDragStart.");var i=e.props,o=i.w,s=i.h,d=i.i,u=e.state.dragging,c=u.left,m=u.top;e.setState({dragging:null});var p=(0,l.calcXY)(e.getPositionParams(),m,c,o,s),I=p.x,f=p.y;return r.call(g(e),d,I,f,{e:t,node:n,newPosition:{top:m,left:c}})}}),y(g(e),"onResizeStop",function(t,a){e.onResizeHandler(t,a,"onResizeStop")}),y(g(e),"onResizeStart",function(t,a){e.onResizeHandler(t,a,"onResizeStart")}),y(g(e),"onResize",function(t,a){e.onResizeHandler(t,a,"onResize")}),e}return a=[{key:"shouldComponentUpdate",value:function(e,t){if(this.props.children!==e.children||this.props.droppingPosition!==e.droppingPosition)return!0;var a=(0,l.calcGridItemPosition)(this.getPositionParams(this.props),this.props.x,this.props.y,this.props.w,this.props.h,this.state),n=(0,l.calcGridItemPosition)(this.getPositionParams(e),e.x,e.y,e.w,e.h,t);return!(0,d.fastPositionEqual)(a,n)||this.props.useCSSTransforms!==e.useCSSTransforms}},{key:"componentDidMount",value:function(){this.moveDroppingItem({})}},{key:"componentDidUpdate",value:function(e){this.moveDroppingItem(e)}},{key:"moveDroppingItem",value:function(e){var t=this.props.droppingPosition;if(t){var a=this.elementRef.current;if(a){var n=e.droppingPosition||{left:0,top:0},r=this.state.dragging,i=r&&t.left!==n.left||t.top!==n.top;if(r){if(i){var o=t.left-r.left,s=t.top-r.top;this.onDrag(t.e,{node:a,deltaX:o,deltaY:s})}}else this.onDragStart(t.e,{node:a,deltaX:t.left,deltaY:t.top})}}}},{key:"getPositionParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return{cols:e.cols,containerPadding:e.containerPadding,containerWidth:e.containerWidth,margin:e.margin,maxRows:e.maxRows,rowHeight:e.rowHeight}}},{key:"createStyle",value:function(e){var t,a=this.props,n=a.usePercentages,r=a.containerWidth;return a.useCSSTransforms?t=(0,d.setTransform)(e):(t=(0,d.setTopLeft)(e),n&&(t.left=(0,d.perc)(e.left/r),t.width=(0,d.perc)(e.width/r))),t}},{key:"mixinDraggable",value:function(e,t){return r.default.createElement(o.DraggableCore,{disabled:!t,onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop,handle:this.props.handle,cancel:".react-resizable-handle"+(this.props.cancel?","+this.props.cancel:""),scale:this.props.transformScale,nodeRef:this.elementRef},e)}},{key:"mixinResizable",value:function(e,t,a){var n=this.props,i=n.cols,o=n.x,d=n.minW,u=n.minH,c=n.maxW,m=n.maxH,p=n.transformScale,I=n.resizeHandles,f=n.resizeHandle,g=this.getPositionParams(),h=(0,l.calcGridItemPosition)(g,0,0,i-o,0).width,y=(0,l.calcGridItemPosition)(g,0,0,d,u),v=(0,l.calcGridItemPosition)(g,0,0,c,m),$=[y.width,y.height],b=[Math.min(v.width,h),Math.min(v.height,1/0)];return r.default.createElement(s.Resizable,{draggableOpts:{disabled:!a},className:a?void 0:"react-resizable-hide",width:t.width,height:t.height,minConstraints:$,maxConstraints:b,onResizeStop:this.onResizeStop,onResizeStart:this.onResizeStart,onResize:this.onResize,transformScale:p,resizeHandles:I,handle:f},e)}},{key:"onResizeHandler",value:function(e,t,a){var n=t.node,r=t.size,i=this.props[a];if(i){var o=this.props,s=o.cols,d=o.x,u=o.y,c=o.i,m=o.maxH,p=o.minH,I=this.props,f=I.minW,g=I.maxW,h=(0,l.calcWH)(this.getPositionParams(),r.width,r.height,d,u),y=h.w,v=h.h;f=Math.max(f,1),g=Math.min(g,s-d),y=(0,l.clamp)(y,f,g),v=(0,l.clamp)(v,p,m),this.setState({resizing:"onResizeStop"===a?null:r}),i.call(this,c,y,v,{e:e,node:n,size:r})}}},{key:"render",value:function(){var e=this.props,t=e.x,a=e.y,n=e.w,i=e.h,o=e.isDraggable,s=e.isResizable,d=e.droppingPosition,u=e.useCSSTransforms,m=(0,l.calcGridItemPosition)(this.getPositionParams(),t,a,n,i,this.state),p=r.default.Children.only(this.props.children),f=r.default.cloneElement(p,{ref:this.elementRef,className:(0,c.default)("react-grid-item",p.props.className,this.props.className,{static:this.props.static,resizing:!!this.state.resizing,"react-draggable":o,"react-draggable-dragging":!!this.state.dragging,dropping:!!d,cssTransforms:u}),style:I(I(I({},this.props.style),p.props.style),this.createStyle(m))});return f=this.mixinResizable(f,m,s),f=this.mixinDraggable(f,o)}}],function(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(u.prototype,a),u}(r.default.Component);a.default=v,y(v,"propTypes",{children:i.default.element,cols:i.default.number.isRequired,containerWidth:i.default.number.isRequired,rowHeight:i.default.number.isRequired,margin:i.default.array.isRequired,maxRows:i.default.number.isRequired,containerPadding:i.default.array.isRequired,x:i.default.number.isRequired,y:i.default.number.isRequired,w:i.default.number.isRequired,h:i.default.number.isRequired,minW:function(e,t){var a=e[t];return"number"!=typeof a?Error("minWidth not Number"):a>e.w||a>e.maxW?Error("minWidth larger than item width/maxWidth"):void 0},maxW:function(e,t){var a=e[t];return"number"!=typeof a?Error("maxWidth not Number"):a<e.w||a<e.minW?Error("maxWidth smaller than item width/minWidth"):void 0},minH:function(e,t){var a=e[t];return"number"!=typeof a?Error("minHeight not Number"):a>e.h||a>e.maxH?Error("minHeight larger than item height/maxHeight"):void 0},maxH:function(e,t){var a=e[t];return"number"!=typeof a?Error("maxHeight not Number"):a<e.h||a<e.minH?Error("maxHeight smaller than item height/minHeight"):void 0},i:i.default.string.isRequired,resizeHandles:u.resizeHandleAxesType,resizeHandle:u.resizeHandleType,onDragStop:i.default.func,onDragStart:i.default.func,onDrag:i.default.func,onResizeStop:i.default.func,onResizeStart:i.default.func,onResize:i.default.func,isDraggable:i.default.bool.isRequired,isResizable:i.default.bool.isRequired,isBounded:i.default.bool.isRequired,static:i.default.bool,useCSSTransforms:i.default.bool.isRequired,transformScale:i.default.number,className:i.default.string,handle:i.default.string,cancel:i.default.string,droppingPosition:i.default.shape({e:i.default.object.isRequired,left:i.default.number.isRequired,top:i.default.number.isRequired})}),y(v,"defaultProps",{className:"",cancel:"",handle:"",minH:1,minW:1,maxH:1/0,maxW:1/0,transformScale:1})},522579,(e,t,a)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=m(void 0);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(e.r(191788)),i=c(e.r(119134)),o=c(e.r(479936)),s=e.r(535264),d=e.r(439540),l=c(e.r(754975)),u=c(e.r(579125));function c(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){b(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function f(e,t){if(e){if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if("Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var x="react-grid-layout",_=!1;try{_=/firefox/i.test(navigator.userAgent)}catch(e){}var T=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");m.prototype=Object.create(e&&e.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),e&&y(m,e);var t,a,u,c=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=$(m);return e=t?Reflect.construct(a,arguments,$(this).constructor):a.apply(this,arguments),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function m(){var e;if(!(this instanceof m))throw TypeError("Cannot call a class as a function");for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];return b(v(e=c.call.apply(c,[this].concat(a))),"state",{activeDrag:null,layout:(0,s.synchronizeLayoutWithChildren)(e.props.layout,e.props.children,e.props.cols,(0,s.compactType)(e.props),e.props.allowOverlap),mounted:!1,oldDragItem:null,oldLayout:null,oldResizeItem:null,droppingDOMNode:null,children:[]}),b(v(e),"dragEnterCounter",0),b(v(e),"onDragStart",function(t,a,n,r){var i=r.e,o=r.node,d=e.state.layout,l=(0,s.getLayoutItem)(d,t);if(l)return e.setState({oldDragItem:(0,s.cloneLayoutItem)(l),oldLayout:e.state.layout}),e.props.onDragStart(d,l,l,null,i,o)}),b(v(e),"onDrag",function(t,a,n,r){var i=r.e,o=r.node,d=e.state.oldDragItem,l=e.state.layout,u=e.props,c=u.cols,m=u.allowOverlap,p=(0,s.getLayoutItem)(l,t);if(p){var I={w:p.w,h:p.h,x:p.x,y:p.y,placeholder:!0,i:t};l=(0,s.moveElement)(l,p,a,n,!0,e.props.preventCollision,(0,s.compactType)(e.props),c,m),e.props.onDrag(l,d,p,I,i,o),e.setState({layout:m?l:(0,s.compact)(l,(0,s.compactType)(e.props),c),activeDrag:I})}}),b(v(e),"onDragStop",function(t,a,n,r){var i=r.e,o=r.node;if(e.state.activeDrag){var d=e.state.oldDragItem,l=e.state.layout,u=e.props,c=u.cols,m=u.preventCollision,p=u.allowOverlap,I=(0,s.getLayoutItem)(l,t);if(I){l=(0,s.moveElement)(l,I,a,n,!0,m,(0,s.compactType)(e.props),c,p),e.props.onDragStop(l,d,I,null,i,o);var f=p?l:(0,s.compact)(l,(0,s.compactType)(e.props),c),g=e.state.oldLayout;e.setState({activeDrag:null,layout:f,oldDragItem:null,oldLayout:null}),e.onLayoutMaybeChanged(f,g)}}}),b(v(e),"onResizeStart",function(t,a,n,r){var i=r.e,o=r.node,d=e.state.layout,l=(0,s.getLayoutItem)(d,t);l&&(e.setState({oldResizeItem:(0,s.cloneLayoutItem)(l),oldLayout:e.state.layout}),e.props.onResizeStart(d,l,l,null,i,o))}),b(v(e),"onResize",function(t,a,n,r){var i,o=r.e,d=r.node,l=e.state,u=l.layout,c=l.oldResizeItem,m=e.props,p=m.cols,g=m.preventCollision,h=m.allowOverlap,y=function(e){if(Array.isArray(e))return e}(i=(0,s.withLayoutItem)(u,t,function(e){var t;if(g&&!h){var r=(0,s.getAllCollisions)(u,I(I({},e),{},{w:a,h:n})).filter(function(t){return t.i!==e.i});if(t=r.length>0){var i=1/0,o=1/0;r.forEach(function(t){t.x>e.x&&(i=Math.min(i,t.x)),t.y>e.y&&(o=Math.min(o,t.y))}),Number.isFinite(i)&&(e.w=i-e.x),Number.isFinite(o)&&(e.h=o-e.y)}}return t||(e.w=a,e.h=n),e}))||function(e){var t,a,n=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(r.push(t.value),2!==r.length);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return r}}(i)||f(i,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),v=y[0],$=y[1];if($){var b={w:$.w,h:$.h,x:$.x,y:$.y,static:!0,i:t};e.props.onResize(v,c,$,b,o,d),e.setState({layout:h?v:(0,s.compact)(v,(0,s.compactType)(e.props),p),activeDrag:b})}}),b(v(e),"onResizeStop",function(t,a,n,r){var i=r.e,o=r.node,d=e.state,l=d.layout,u=d.oldResizeItem,c=e.props,m=c.cols,p=c.allowOverlap,I=(0,s.getLayoutItem)(l,t);e.props.onResizeStop(l,u,I,null,i,o);var f=p?l:(0,s.compact)(l,(0,s.compactType)(e.props),m),g=e.state.oldLayout;e.setState({activeDrag:null,layout:f,oldResizeItem:null,oldLayout:null}),e.onLayoutMaybeChanged(f,g)}),b(v(e),"onDragOver",function(t){if(t.preventDefault(),t.stopPropagation(),_&&!(null!=(a=t.nativeEvent.target)&&a.classList.contains(x)))return!1;var a,n=e.props,i=n.droppingItem,o=n.onDropDragOver,s=n.margin,l=n.cols,u=n.rowHeight,c=n.maxRows,m=n.width,p=n.containerPadding,h=n.transformScale,y=null==o?void 0:o(t);if(!1===y)return e.state.droppingDOMNode&&e.removeDroppingPlaceholder(),!1;var v=I(I({},i),y),$=e.state.layout,b=t.nativeEvent,T=b.layerX,C=b.layerY,w={left:T/h,top:C/h,e:t};if(e.state.droppingDOMNode){if(e.state.droppingPosition){var j=e.state.droppingPosition,A=j.left,S=j.top;(A!=T||S!=C)&&e.setState({droppingPosition:w})}}else{var D=(0,d.calcXY)({cols:l,margin:s,maxRows:c,rowHeight:u,containerWidth:m,containerPadding:p||s},C,T,v.w,v.h);e.setState({droppingDOMNode:r.createElement("div",{key:v.i}),droppingPosition:w,layout:[].concat(function(e){if(Array.isArray(e))return g(e)}($)||function(e){if("u">typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}($)||f($)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[I(I({},v),{},{x:D.x,y:D.y,static:!1,isDraggable:!0})])})}}),b(v(e),"removeDroppingPlaceholder",function(){var t=e.props,a=t.droppingItem,n=t.cols,r=e.state.layout,i=(0,s.compact)(r.filter(function(e){return e.i!==a.i}),(0,s.compactType)(e.props),n);e.setState({layout:i,droppingDOMNode:null,activeDrag:null,droppingPosition:void 0})}),b(v(e),"onDragLeave",function(t){t.preventDefault(),e.dragEnterCounter--,0===e.dragEnterCounter&&e.removeDroppingPlaceholder()}),b(v(e),"onDragEnter",function(t){t.preventDefault(),e.dragEnterCounter++}),b(v(e),"onDrop",function(t){t.preventDefault();var a=e.props.droppingItem,n=e.state.layout,r=n.find(function(e){return e.i===a.i});e.dragEnterCounter=0,e.removeDroppingPlaceholder(),e.props.onDrop(n,r,t)}),e}return a=[{key:"componentDidMount",value:function(){this.setState({mounted:!0}),this.onLayoutMaybeChanged(this.state.layout,this.props.layout)}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.children!==e.children||!(0,s.fastRGLPropsEqual)(this.props,e,i.default)||this.state.activeDrag!==t.activeDrag||this.state.mounted!==t.mounted||this.state.droppingPosition!==t.droppingPosition}},{key:"componentDidUpdate",value:function(e,t){if(!this.state.activeDrag){var a=this.state.layout,n=t.layout;this.onLayoutMaybeChanged(a,n)}}},{key:"containerHeight",value:function(){if(this.props.autoSize){var e=(0,s.bottom)(this.state.layout),t=this.props.containerPadding?this.props.containerPadding[1]:this.props.margin[1];return e*this.props.rowHeight+(e-1)*this.props.margin[1]+2*t+"px"}}},{key:"onLayoutMaybeChanged",value:function(e,t){t||(t=this.state.layout),(0,i.default)(t,e)||this.props.onLayoutChange(e)}},{key:"placeholder",value:function(){var e=this.state.activeDrag;if(!e)return null;var t=this.props,a=t.width,n=t.cols,i=t.margin,o=t.containerPadding,s=t.rowHeight,d=t.maxRows,u=t.useCSSTransforms,c=t.transformScale;return r.createElement(l.default,{w:e.w,h:e.h,x:e.x,y:e.y,i:e.i,className:"react-grid-placeholder",containerWidth:a,cols:n,margin:i,containerPadding:o||i,maxRows:d,rowHeight:s,isDraggable:!1,isResizable:!1,isBounded:!1,useCSSTransforms:u,transformScale:c},r.createElement("div",null))}},{key:"processGridItem",value:function(e,t){if(e&&e.key){var a=(0,s.getLayoutItem)(this.state.layout,String(e.key));if(!a)return null;var n=this.props,i=n.width,o=n.cols,d=n.margin,u=n.containerPadding,c=n.rowHeight,m=n.maxRows,p=n.isDraggable,I=n.isResizable,f=n.isBounded,g=n.useCSSTransforms,h=n.transformScale,y=n.draggableCancel,v=n.draggableHandle,$=n.resizeHandles,b=n.resizeHandle,x=this.state,_=x.mounted,T=x.droppingPosition,C="boolean"==typeof a.isDraggable?a.isDraggable:!a.static&&p,w="boolean"==typeof a.isResizable?a.isResizable:!a.static&&I,j=a.resizeHandles||$,A=C&&f&&!1!==a.isBounded;return r.createElement(l.default,{containerWidth:i,cols:o,margin:d,containerPadding:u||d,maxRows:m,rowHeight:c,cancel:y,handle:v,onDragStop:this.onDragStop,onDragStart:this.onDragStart,onDrag:this.onDrag,onResizeStart:this.onResizeStart,onResize:this.onResize,onResizeStop:this.onResizeStop,isDraggable:C,isResizable:w,isBounded:A,useCSSTransforms:g&&_,usePercentages:!_,transformScale:h,w:a.w,h:a.h,x:a.x,y:a.y,i:a.i,minH:a.minH,minW:a.minW,maxH:a.maxH,maxW:a.maxW,static:a.static,droppingPosition:t?T:void 0,resizeHandles:j,resizeHandle:b},e)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.style,i=t.isDroppable,d=t.innerRef,l=(0,o.default)(x,a),u=I({height:this.containerHeight()},n);return r.createElement("div",{ref:d,className:l,style:u,onDrop:i?this.onDrop:s.noop,onDragLeave:i?this.onDragLeave:s.noop,onDragEnter:i?this.onDragEnter:s.noop,onDragOver:i?this.onDragOver:s.noop},r.Children.map(this.props.children,function(t){return e.processGridItem(t)}),i&&this.state.droppingDOMNode&&this.processGridItem(this.state.droppingDOMNode,!0),this.placeholder())}}],u=[{key:"getDerivedStateFromProps",value:function(e,t){var a;return t.activeDrag?null:((0,i.default)(e.layout,t.propsLayout)&&e.compactType===t.compactType?(0,s.childrenEqual)(e.children,t.children)||(a=t.layout):a=e.layout,a)?{layout:(0,s.synchronizeLayoutWithChildren)(a,e.children,e.cols,(0,s.compactType)(e),e.allowOverlap),compactType:e.compactType,children:e.children,propsLayout:e.layout}:null}}],a&&h(m.prototype,a),u&&h(m,u),m}(r.Component);a.default=T,b(T,"displayName","ReactGridLayout"),b(T,"propTypes",u.default),b(T,"defaultProps",{autoSize:!0,cols:12,className:"",style:{},draggableHandle:"",draggableCancel:"",containerPadding:null,rowHeight:150,maxRows:1/0,layout:[],margin:[10,10],isBounded:!1,isDraggable:!0,isResizable:!0,allowOverlap:!1,isDroppable:!1,useCSSTransforms:!0,transformScale:1,verticalCompact:!0,compactType:"vertical",preventCollision:!1,droppingItem:{i:"__dropping-elem__",h:1,w:1},resizeHandles:["se"],onLayoutChange:s.noop,onDragStart:s.noop,onDrag:s.noop,onDragStop:s.noop,onResizeStart:s.noop,onResize:s.noop,onResizeStop:s.noop,onDrop:s.noop,onDropDragOver:s.noop})},579125,(e,t,a)=>{e.i(350461),Object.defineProperty(a,"__esModule",{value:!0}),a.default=a.resizeHandleType=a.resizeHandleAxesType=void 0;var n=i(e.r(691567)),r=i(e.r(191788));function i(e){return e&&e.__esModule?e:{default:e}}var o=n.default.arrayOf(n.default.oneOf(["s","w","e","n","sw","nw","se","ne"]));a.resizeHandleAxesType=o;var s=n.default.oneOfType([n.default.node,n.default.func]);a.resizeHandleType=s,a.default={className:n.default.string,style:n.default.object,width:n.default.number,autoSize:n.default.bool,cols:n.default.number,draggableCancel:n.default.string,draggableHandle:n.default.string,verticalCompact:function(e){},compactType:n.default.oneOf(["vertical","horizontal"]),layout:function(t){var a=t.layout;void 0!==a&&e.r(535264).validateLayout(a,"layout")},margin:n.default.arrayOf(n.default.number),containerPadding:n.default.arrayOf(n.default.number),rowHeight:n.default.number,maxRows:n.default.number,isBounded:n.default.bool,isDraggable:n.default.bool,isResizable:n.default.bool,allowOverlap:n.default.bool,preventCollision:n.default.bool,useCSSTransforms:n.default.bool,transformScale:n.default.number,isDroppable:n.default.bool,resizeHandles:o,resizeHandle:s,onLayoutChange:n.default.func,onDragStart:n.default.func,onDrag:n.default.func,onDragStop:n.default.func,onResizeStart:n.default.func,onResize:n.default.func,onResizeStop:n.default.func,onDrop:n.default.func,droppingItem:n.default.shape({i:n.default.string.isRequired,w:n.default.number.isRequired,h:n.default.number.isRequired}),children:function(e,t){var a=e[t],n={};r.default.Children.forEach(a,function(e){if((null==e?void 0:e.key)!=null){if(n[e.key])throw Error('Duplicate child key "'+e.key+'" found! This will cause problems in ReactGridLayout.');n[e.key]=!0}})},innerRef:n.default.any}},583643,(e,t,a)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=m(void 0);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(e.r(191788)),i=c(e.r(691567)),o=c(e.r(119134)),s=e.r(535264),d=e.r(849853),l=c(e.r(522579)),u=["breakpoint","breakpoints","cols","layouts","margin","containerPadding","onBreakpointChange","onLayoutChange","onWidthChange"];function c(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach(function(t){$(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function g(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=function(e){return Object.prototype.toString.call(e)};function x(e,t){return null==e?null:Array.isArray(e)?e:e[t]}var _=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");m.prototype=Object.create(e&&e.prototype,{constructor:{value:m,writable:!0,configurable:!0}}),e&&h(m,e);var t,a,i,c=(t=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=v(m);return e=t?Reflect.construct(a,arguments,v(this).constructor):a.apply(this,arguments),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return y(e)}(this,e)});function m(){var e;if(!(this instanceof m))throw TypeError("Cannot call a class as a function");for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];return $(y(e=c.call.apply(c,[this].concat(a))),"state",e.generateInitialState()),$(y(e),"onLayoutChange",function(t){e.props.onLayoutChange(t,f(f({},e.props.layouts),{},$({},e.state.breakpoint,t)))}),e}return a=[{key:"generateInitialState",value:function(){var e=this.props,t=e.width,a=e.breakpoints,n=e.layouts,r=e.cols,i=(0,d.getBreakpointFromWidth)(a,t),o=(0,d.getColsFromBreakpoint)(i,r),s=!1===this.props.verticalCompact?null:this.props.compactType;return{layout:(0,d.findOrGenerateResponsiveLayout)(n,a,i,i,o,s),breakpoint:i,cols:o}}},{key:"componentDidUpdate",value:function(e){this.props.width==e.width&&this.props.breakpoint===e.breakpoint&&(0,o.default)(this.props.breakpoints,e.breakpoints)&&(0,o.default)(this.props.cols,e.cols)||this.onWidthChange(e)}},{key:"onWidthChange",value:function(e){var t=this.props,a=t.breakpoints,n=t.cols,r=t.layouts,i=t.compactType,o=this.props.breakpoint||(0,d.getBreakpointFromWidth)(this.props.breakpoints,this.props.width),l=this.state.breakpoint,u=(0,d.getColsFromBreakpoint)(o,n),c=f({},r);if(l!==o||e.breakpoints!==a||e.cols!==n){l in c||(c[l]=(0,s.cloneLayout)(this.state.layout));var m=(0,d.findOrGenerateResponsiveLayout)(c,a,o,l,u,i);m=(0,s.synchronizeLayoutWithChildren)(m,this.props.children,u,i,this.props.allowOverlap),c[o]=m,this.props.onLayoutChange(m,c),this.props.onBreakpointChange(o,u),this.setState({breakpoint:o,layout:m,cols:u})}var p=x(this.props.margin,o),I=x(this.props.containerPadding,o);this.props.onWidthChange(this.props.width,p,u,I)}},{key:"render",value:function(){var e=this.props,t=(e.breakpoint,e.breakpoints,e.cols,e.layouts,e.margin),a=e.containerPadding,n=(e.onBreakpointChange,e.onLayoutChange,e.onWidthChange,function(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,u));return r.createElement(l.default,p({},n,{margin:x(t,this.state.breakpoint),containerPadding:x(a,this.state.breakpoint),onLayoutChange:this.onLayoutChange,layout:this.state.layout,cols:this.state.cols}))}}],i=[{key:"getDerivedStateFromProps",value:function(e,t){if(!(0,o.default)(e.layouts,t.layouts)){var a=t.breakpoint,n=t.cols;return{layout:(0,d.findOrGenerateResponsiveLayout)(e.layouts,e.breakpoints,a,a,n,e.compactType),layouts:e.layouts}}return null}}],a&&g(m.prototype,a),i&&g(m,i),m}(r.Component);a.default=_,$(_,"propTypes",{breakpoint:i.default.string,breakpoints:i.default.object,allowOverlap:i.default.bool,cols:i.default.object,margin:i.default.oneOfType([i.default.array,i.default.object]),containerPadding:i.default.oneOfType([i.default.array,i.default.object]),layouts:function(e,t){if("[object Object]"!==b(e[t]))throw Error("Layout property must be an object. Received: "+b(e[t]));Object.keys(e[t]).forEach(function(t){if(!(t in e.breakpoints))throw Error("Each key in layouts must align with a key in breakpoints.");(0,s.validateLayout)(e.layouts[t],"layouts."+t)})},width:i.default.number.isRequired,onBreakpointChange:i.default.func,onLayoutChange:i.default.func,onWidthChange:i.default.func}),$(_,"defaultProps",{breakpoints:{lg:1200,md:996,sm:768,xs:480,xxs:0},cols:{lg:12,md:10,sm:6,xs:4,xxs:2},containerPadding:{lg:null,md:null,sm:null,xs:null,xxs:null},layouts:{},margin:[10,10],allowOverlap:!1,onBreakpointChange:s.noop,onLayoutChange:s.noop,onWidthChange:s.noop})},439540,(e,t,a)=>{function n(e){var t=e.margin,a=e.containerPadding,n=e.containerWidth,r=e.cols;return(n-t[0]*(r-1)-2*a[0])/r}function r(e,t,a){return Number.isFinite(e)?Math.round(t*e+Math.max(0,e-1)*a):e}function i(e,t,a){return Math.max(Math.min(e,a),t)}Object.defineProperty(a,"__esModule",{value:!0}),a.calcGridColWidth=n,a.calcGridItemWHPx=r,a.calcGridItemPosition=function(e,t,a,i,o,s){var d=e.margin,l=e.containerPadding,u=e.rowHeight,c=n(e),m={};return s&&s.resizing?(m.width=Math.round(s.resizing.width),m.height=Math.round(s.resizing.height)):(m.width=r(i,c,d[0]),m.height=r(o,u,d[1])),s&&s.dragging?(m.top=Math.round(s.dragging.top),m.left=Math.round(s.dragging.left)):(m.top=Math.round((u+d[1])*a+l[1]),m.left=Math.round((c+d[0])*t+l[0])),m},a.calcXY=function(e,t,a,r,o){var s=e.margin,d=e.cols,l=e.rowHeight,u=e.maxRows,c=n(e),m=Math.round((a-s[0])/(c+s[0])),p=Math.round((t-s[1])/(l+s[1]));return{x:m=i(m,0,d-r),y:p=i(p,0,u-o)}},a.calcWH=function(e,t,a,r,o){var s=e.margin,d=e.maxRows,l=e.cols,u=e.rowHeight,c=n(e),m=Math.round((t+s[0])/(c+s[0])),p=Math.round((a+s[1])/(u+s[1]));return{w:m=i(m,0,l-r),h:p=i(p,0,d-o)}},a.clamp=i},787470,(e,t,a)=>{function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){var t,a;return a=t=function(t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");l.prototype=Object.create(t&&t.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),t&&c(l,t);var a,i,d=(a=function(){if("u"<typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=p(l);return e=a?Reflect.construct(t,arguments,p(this).constructor):t.apply(this,arguments),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return m(e)}(this,e)});function l(){var e;if(!(this instanceof l))throw TypeError("Cannot call a class as a function");for(var t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];return I(m(e=d.call.apply(d,[this].concat(a))),"state",{width:1280}),I(m(e),"elementRef",r.createRef()),I(m(e),"mounted",!1),I(m(e),"onWindowResize",function(){if(e.mounted){var t=e.elementRef.current;t instanceof HTMLElement&&t.offsetWidth&&e.setState({width:t.offsetWidth})}}),e}return i=[{key:"componentDidMount",value:function(){this.mounted=!0,window.addEventListener("resize",this.onWindowResize),this.onWindowResize()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,window.removeEventListener("resize",this.onWindowResize)}},{key:"render",value:function(){var t=this.props,a=t.measureBeforeMount,n=function(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(t,s);return a&&!this.mounted?r.createElement("div",{className:(0,o.default)(this.props.className,"react-grid-layout"),style:this.props.style,ref:this.elementRef}):r.createElement(e,u({innerRef:this.elementRef},n,this.state))}}],function(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(l.prototype,i),l}(r.Component),I(t,"defaultProps",{measureBeforeMount:!1}),I(t,"propTypes",{measureBeforeMount:i.default.bool}),a};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=l(void 0);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}(e.r(191788)),i=d(e.r(691567)),o=d(e.r(479936)),s=["measureBeforeMount"];function d(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(l=function(e){return e?a:t})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},849853,(e,t,a)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.getBreakpointFromWidth=function(e,t){for(var a=r(e),n=a[0],i=1,o=a.length;i<o;i++){var s=a[i];t>e[s]&&(n=s)}return n},a.getColsFromBreakpoint=function(e,t){if(!t[e])throw Error("ResponsiveReactGridLayout: `cols` entry for breakpoint "+e+" is missing!");return t[e]},a.findOrGenerateResponsiveLayout=function(e,t,a,i,o,s){if(e[a])return(0,n.cloneLayout)(e[a]);for(var d=e[i],l=r(t),u=l.slice(l.indexOf(a)),c=0,m=u.length;c<m;c++){var p=u[c];if(e[p]){d=e[p];break}}return d=(0,n.cloneLayout)(d||[]),(0,n.compact)((0,n.correctBounds)(d,{cols:o}),s,o)},a.sortBreakpoints=r;var n=e.r(535264);function r(e){return Object.keys(e).sort(function(t,a){return e[t]-e[a]})}},535264,(e,t,a)=>{e.i(350461),Object.defineProperty(a,"__esModule",{value:!0}),a.bottom=d,a.cloneLayout=function(e){for(var t=Array(e.length),a=0,n=e.length;a<n;a++)t[a]=u(e[a]);return t},a.modifyLayout=l,a.withLayoutItem=function(e,t,a){var n=h(e,t);return n?[e=l(e,n=a(u(n))),n]:[e,null]},a.cloneLayoutItem=u,a.childrenEqual=function(e,t){return(0,n.default)(r.default.Children.map(e,function(e){return null==e?void 0:e.key}),r.default.Children.map(t,function(e){return null==e?void 0:e.key}))},a.fastPositionEqual=function(e,t){return e.left===t.left&&e.top===t.top&&e.width===t.width&&e.height===t.height},a.collides=c,a.compact=m,a.compactItem=f,a.correctBounds=g,a.getLayoutItem=h,a.getFirstCollision=y,a.getAllCollisions=v,a.getStatics=$,a.moveElement=b,a.moveElementAwayFromCollision=x,a.perc=function(e){return 100*e+"%"},a.setTransform=function(e){var t=e.top,a=e.left,n=e.width,r=e.height,i="translate(".concat(a,"px,").concat(t,"px)");return{transform:i,WebkitTransform:i,MozTransform:i,msTransform:i,OTransform:i,width:"".concat(n,"px"),height:"".concat(r,"px"),position:"absolute"}},a.setTopLeft=function(e){var t=e.top,a=e.left,n=e.width,r=e.height;return{top:"".concat(t,"px"),left:"".concat(a,"px"),width:"".concat(n,"px"),height:"".concat(r,"px"),position:"absolute"}},a.sortLayoutItems=_,a.sortLayoutItemsByRowCol=T,a.sortLayoutItemsByColRow=C,a.synchronizeLayoutWithChildren=function(e,t,a,n,i){e=e||[];var o=[];r.default.Children.forEach(t,function(t){if((null==t?void 0:t.key)!=null){var a=h(e,String(t.key));if(a)o.push(u(a));else{var n=t.props["data-grid"]||t.props._grid;n?o.push(u(s(s({},n),{},{i:t.key}))):o.push(u({w:1,h:1,x:0,y:d(o),i:String(t.key)}))}}});var l=g(o,{cols:a});return i?l:m(l,n,a)},a.validateLayout=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Layout",a=["x","y","w","h"];if(!Array.isArray(e))throw Error(t+" must be an array!");for(var n=0,r=e.length;n<r;n++){for(var i=e[n],o=0;o<a.length;o++)if("number"!=typeof i[a[o]])throw Error("ReactGridLayout: "+t+"["+n+"]."+a[o]+" must be a number!");if(i.i&&"string"!=typeof i.i)throw Error("ReactGridLayout: "+t+"["+n+"].i must be a string!");if(void 0!==i.static&&"boolean"!=typeof i.static)throw Error("ReactGridLayout: "+t+"["+n+"].static must be a boolean!")}},a.compactType=function(e){var t=e||{},a=t.verticalCompact,n=t.compactType;return!1===a?null:n},a.noop=a.fastRGLPropsEqual=void 0;var n=i(e.r(119134)),r=i(e.r(191788));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach(function(t){var n,r,i;n=e,r=t,i=a[t],r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function d(e){for(var t,a=0,n=0,r=e.length;n<r;n++)(t=e[n].y+e[n].h)>a&&(a=t);return a}function l(e,t){for(var a=Array(e.length),n=0,r=e.length;n<r;n++)t.i===e[n].i?a[n]=t:a[n]=e[n];return a}function u(e){return{w:e.w,h:e.h,x:e.x,y:e.y,i:e.i,minW:e.minW,maxW:e.maxW,minH:e.minH,maxH:e.maxH,moved:!!e.moved,static:!!e.static,isDraggable:e.isDraggable,isResizable:e.isResizable,resizeHandles:e.resizeHandles,isBounded:e.isBounded}}function c(e,t){return e.i!==t.i&&!(e.x+e.w<=t.x)&&!(e.x>=t.x+t.w)&&!(e.y+e.h<=t.y)&&!(e.y>=t.y+t.h)}function m(e,t,a){for(var n=$(e),r=_(e,t),i=Array(e.length),o=0,s=r.length;o<s;o++){var d=u(r[o]);d.static||(d=f(n,d,t,a,r),n.push(d)),i[e.indexOf(r[o])]=d,d.moved=!1}return i}a.fastRGLPropsEqual=e.r(793878);var p={x:"w",y:"h"};function I(e,t,a,n){var r=p[n];t[n]+=1;for(var i=e.map(function(e){return e.i}).indexOf(t.i),o=i+1;o<e.length;o++){var s=e[o];if(!s.static){if(s.y>t.y+t.h)break;c(t,s)&&I(e,s,a+t[r],n)}}t[n]=a}function f(e,t,a,n,r){var i,o="horizontal"===a;if("vertical"===a)for(t.y=Math.min(d(e),t.y);t.y>0&&!y(e,t);)t.y--;else if(o)for(;t.x>0&&!y(e,t);)t.x--;for(;i=y(e,t);)o?I(r,t,i.x+i.w,"x"):I(r,t,i.y+i.h,"y"),o&&t.x+t.w>n&&(t.x=n-t.w,t.y++);return t.y=Math.max(t.y,0),t.x=Math.max(t.x,0),t}function g(e,t){for(var a=$(e),n=0,r=e.length;n<r;n++){var i=e[n];if(i.x+i.w>t.cols&&(i.x=t.cols-i.w),i.x<0&&(i.x=0,i.w=t.cols),i.static)for(;y(a,i);)i.y++;else a.push(i)}return e}function h(e,t){for(var a=0,n=e.length;a<n;a++)if(e[a].i===t)return e[a]}function y(e,t){for(var a=0,n=e.length;a<n;a++)if(c(e[a],t))return e[a]}function v(e,t){return e.filter(function(e){return c(e,t)})}function $(e){return e.filter(function(e){return e.static})}function b(e,t,a,n,r,i,o,s,d){if(t.static&&!0!==t.isDraggable||t.y===n&&t.x===a)return e;w("Moving element ".concat(t.i," to [").concat(String(a),",").concat(String(n),"] from [").concat(t.x,",").concat(t.y,"]"));var l=t.x,u=t.y;"number"==typeof a&&(t.x=a),"number"==typeof n&&(t.y=n),t.moved=!0;var c=_(e,o);("vertical"===o&&"number"==typeof n?u>=n:"horizontal"===o&&"number"==typeof a&&l>=a)&&(c=c.reverse());var m=v(c,t);if(i&&m.length)return d||(w("Collision prevented on ".concat(t.i,", reverting.")),t.x=l,t.y=u,t.moved=!1),e;for(var p=0,I=m.length;p<I;p++){var f=m[p];w("Resolving collision between ".concat(t.i," at [").concat(t.x,",").concat(t.y,"] and ").concat(f.i," at [").concat(f.x,",").concat(f.y,"]")),f.moved||(e=f.static?x(e,f,t,r,o,s):x(e,t,f,r,o,s))}return e}function x(e,t,a,n,r,i){var o="horizontal"===r,s="horizontal"!==r,d=t.static;if(n){n=!1;var l={x:o?Math.max(t.x-a.w,0):a.x,y:s?Math.max(t.y-a.h,0):a.y,w:a.w,h:a.h,i:"-1"};if(!y(e,l))return w("Doing reverse collision on ".concat(a.i," up to [").concat(l.x,",").concat(l.y,"].")),b(e,a,o?l.x:void 0,s?l.y:void 0,n,d,r,i)}return b(e,a,o?a.x+1:void 0,s?a.y+1:void 0,n,d,r,i)}function _(e,t){return"horizontal"===t?C(e):"vertical"===t?T(e):e}function T(e){return e.slice(0).sort(function(e,t){return e.y>t.y||e.y===t.y&&e.x>t.x?1:e.y===t.y&&e.x===t.x?0:-1})}function C(e){return e.slice(0).sort(function(e,t){return e.x>t.x||e.x===t.x&&e.y>t.y?1:-1})}function w(){}a.noop=function(){}},716929,(e,t,a)=>{a.__esModule=!0,a.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=d(void 0);if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}(e.r(191788)),r=e.r(161565),i=e.r(500036),o=e.r(349687),s=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}function l(){return(l=Object.assign.bind()).apply(this,arguments)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach(function(t){var n,r,i;n=e,r=t,i=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){for(var t,a=arguments.length,n=Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleRefs={},t.lastHandleRect=null,t.slack=null,t}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,m(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.resetData()},a.resetData=function(){this.lastHandleRect=this.slack=null},a.runConstraints=function(e,t){var a=this.props,n=a.minConstraints,r=a.maxConstraints,i=a.lockAspectRatio;if(!n&&!r&&!i)return[e,t];if(i){var o=this.props.width/this.props.height;Math.abs(e-this.props.width)>Math.abs((t-this.props.height)*o)?t=e/o:e=t*o}var s=e,d=t,l=this.slack||[0,0],u=l[0],c=l[1];return e+=u,t+=c,n&&(e=Math.max(n[0],e),t=Math.max(n[1],t)),r&&(e=Math.min(r[0],e),t=Math.min(r[1],t)),this.slack=[u+(s-e),c+(d-t)],[e,t]},a.resizeHandler=function(e,t){var a=this;return function(n,r){var i=r.node,o=r.deltaX,s=r.deltaY;"onResizeStart"===e&&a.resetData();var d=("both"===a.props.axis||"x"===a.props.axis)&&"n"!==t&&"s"!==t,l=("both"===a.props.axis||"y"===a.props.axis)&&"e"!==t&&"w"!==t;if(d||l){var u=t[0],c=t[t.length-1],m=i.getBoundingClientRect();null!=a.lastHandleRect&&("w"===c&&(o+=m.left-a.lastHandleRect.left),"n"===u&&(s+=m.top-a.lastHandleRect.top)),a.lastHandleRect=m,"w"===c&&(o=-o),"n"===u&&(s=-s);var p=a.props.width+(d?o/a.props.transformScale:0),I=a.props.height+(l?s/a.props.transformScale:0),f=a.runConstraints(p,I);p=f[0],I=f[1];var g=p!==a.props.width||I!==a.props.height,h="function"==typeof a.props[e]?a.props[e]:null;h&&!("onResize"===e&&!g)&&(null==n.persist||n.persist(),h(n,{node:i,size:{width:p,height:I},handle:t})),"onResizeStop"===e&&a.resetData()}}},a.renderResizeHandle=function(e,t){var a=this.props.handle;if(!a)return n.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+e,ref:t});if("function"==typeof a)return a(e,t);var r=c({ref:t},"string"==typeof a.type?{}:{handleAxis:e});return n.cloneElement(a,r)},a.render=function(){var e=this,t=this.props,a=t.children,o=t.className,d=t.draggableOpts,u=(t.width,t.height,t.handle,t.handleSize,t.lockAspectRatio,t.axis,t.minConstraints,t.maxConstraints,t.onResize,t.onResizeStop,t.onResizeStart,t.resizeHandles),m=(t.transformScale,function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(t,s));return(0,i.cloneElement)(a,c(c({},m),{},{className:(o?o+" ":"")+"react-resizable",children:[].concat(a.props.children,u.map(function(t){var a,i=null!=(a=e.handleRefs[t])?a:e.handleRefs[t]=n.createRef();return n.createElement(r.DraggableCore,l({},d,{nodeRef:i,key:"resizableHandle-"+t,onStop:e.resizeHandler("onResizeStop",t),onStart:e.resizeHandler("onResizeStart",t),onDrag:e.resizeHandler("onResize",t)}),e.renderResizeHandle(t,i))}))}))},t}(n.Component);a.default=p,p.propTypes=o.resizableProps,p.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1}},353875,(e,t,a)=>{a.__esModule=!0,a.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=l(void 0);if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=n?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,t&&t.set(e,a),a}(e.r(191788)),r=d(e.r(691567)),i=d(e.r(716929)),o=e.r(349687),s=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function d(e){return e&&e.__esModule?e:{default:e}}function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(l=function(e){return e?a:t})(e)}function u(){return(u=Object.assign.bind()).apply(this,arguments)}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach(function(t){var n,r,i;n=e,r=t,i=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function p(e,t){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(){for(var t,a=arguments.length,n=Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height},t.onResize=function(e,a){var n=a.size;t.props.onResize?(null==e.persist||e.persist(),t.setState(n,function(){return t.props.onResize&&t.props.onResize(e,a)})):t.setState(n)},t}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,p(t,e),t.getDerivedStateFromProps=function(e,t){return t.propsWidth!==e.width||t.propsHeight!==e.height?{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}:null},t.prototype.render=function(){var e=this.props,t=e.handle,a=e.handleSize,r=(e.onResize,e.onResizeStart),o=e.onResizeStop,d=e.draggableOpts,l=e.minConstraints,c=e.maxConstraints,p=e.lockAspectRatio,I=e.axis,f=(e.width,e.height,e.resizeHandles),g=e.style,h=e.transformScale,y=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,s);return n.createElement(i.default,{axis:I,draggableOpts:d,handle:t,handleSize:a,height:this.state.height,lockAspectRatio:p,maxConstraints:c,minConstraints:l,onResizeStart:r,onResize:this.onResize,onResizeStop:o,resizeHandles:f,transformScale:h,width:this.state.width},n.createElement("div",u({},y,{style:m(m({},g),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},t}(n.Component);a.default=I,I.propTypes=m(m({},o.resizableProps),{},{children:r.default.element})},349687,(e,t,a)=>{a.__esModule=!0,a.resizableProps=void 0;var n,r=(n=e.r(691567))&&n.__esModule?n:{default:n};e.r(161565),a.resizableProps={axis:r.default.oneOf(["both","x","y","none"]),className:r.default.string,children:r.default.element.isRequired,draggableOpts:r.default.shape({allowAnyClick:r.default.bool,cancel:r.default.string,children:r.default.node,disabled:r.default.bool,enableUserSelectHack:r.default.bool,offsetParent:r.default.node,grid:r.default.arrayOf(r.default.number),handle:r.default.string,nodeRef:r.default.object,onStart:r.default.func,onDrag:r.default.func,onStop:r.default.func,onMouseDown:r.default.func,scale:r.default.number}),height:function(){for(var e,t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];var i=a[0];return"both"===i.axis||"y"===i.axis?(e=r.default.number).isRequired.apply(e,a):r.default.number.apply(r.default,a)},handle:r.default.oneOfType([r.default.node,r.default.func]),handleSize:r.default.arrayOf(r.default.number),lockAspectRatio:r.default.bool,maxConstraints:r.default.arrayOf(r.default.number),minConstraints:r.default.arrayOf(r.default.number),onResizeStop:r.default.func,onResizeStart:r.default.func,onResize:r.default.func,resizeHandles:r.default.arrayOf(r.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:r.default.number,width:function(){for(var e,t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];var i=a[0];return"both"===i.axis||"x"===i.axis?(e=r.default.number).isRequired.apply(e,a):r.default.number.apply(r.default,a)}}},500036,(e,t,a)=>{a.__esModule=!0,a.cloneElement=function(e,t){return t.style&&e.props.style&&(t.style=o(o({},e.props.style),t.style)),t.className&&e.props.className&&(t.className=e.props.className+" "+t.className),r.default.cloneElement(e,t)};var n,r=(n=e.r(191788))&&n.__esModule?n:{default:n};function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach(function(t){var n,r,i;n=e,r=t,i=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(r))in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}},250252,(e,t,a)=>{t.exports=function(){throw Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")},t.exports.Resizable=e.r(716929).default,t.exports.ResizableBox=e.r(353875).default},459971,e=>{var t=e.i(391398),a=e.i(115871),n=e.i(203828);let r={lg:[{i:"CustomerDebtTable",x:0,y:0,w:12,h:3,minW:6,maxW:12,minH:1,maxH:3},{i:"ReactiveAmountByMonth",x:0,y:5,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"NewCustomerAccountsChart",x:3,y:8,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"SpendFromNewCustomerAccountsChart",x:6,y:8,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"WorstCustomersByAgedReceivablesTable",x:9,y:8,w:3,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["customer",0,r],166188),e.i(166188);let i={lg:[{i:"JobsByMonth",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"JobsFinancialByDayLineChart",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["overview",0,i],923373),e.i(923373);let o={lg:[{i:"AverageAllocationTime",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"JobsByService",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"PercentageOfWorkOrdersByServiceLineTable",x:8,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["service",0,o],385116),e.i(385116);let s={lg:[{i:"jobsBySLA",x:0,y:0,w:4,h:3,minW:2,maxW:6,minH:2,maxH:6}]};e.s(["sla",0,s],168079),e.i(168079);let d={lg:[{i:"JobsByStatusPieChart",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["status",0,d],165035),e.i(165035);let l={lg:[{i:"SupplierDebtTable",x:0,y:0,w:12,h:3,minW:6,maxW:12,minH:1,maxH:3},{i:"LateAttendanceBySupplierChart",x:0,y:4,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["supplier",0,l],338400),e.i(338400);let u={lg:[{i:"TopPropertiesBySpendTable",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TopCustomersByNumberOfPropertiesTable",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["property",0,u],947478),e.i(947478);let c={lg:[{i:"TopAssetTypesBySpendTable",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TopAssetsBySpendTable",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TopAssetsByNumberOfJobsTable",x:0,y:4,w:12,h:3,minW:2,maxW:6,minH:2,maxH:6}]};e.s(["asset",0,c],428814),e.i(428814);let m={lg:[{i:"SpendByCoverageAreaTable",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["coverage",0,m],309479),e.i(309479);let p={lg:[{i:"TotalQuotesSent",x:0,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TotalQuotesReportSent",x:4,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"TotalQuoteIvoiceSent",x:8,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"SumQuoteSent",x:0,y:5,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6},{i:"SumQuoteAccepted",x:8,y:0,w:4,h:3,minW:2,maxW:12,minH:2,maxH:6}]};e.s(["quote",0,p],176063),e.i(176063),e.s(["asset",0,c,"coverage",0,m,"customer",0,r,"overview",0,i,"property",0,u,"quote",0,p,"service",0,o,"sla",0,s,"status",0,d,"supplier",0,l],394320);var I=e.i(394320),f=e.i(191788),g=e.i(84100),h=e.i(512527);let y=[{label:"Last Day",value:"-1"},{label:"Last 7 Days",value:"-7"},{label:"Last 30 Days",value:"-30",default:!0},{label:"Last 90 Days",value:"-90"},{label:"Custom",value:"custom"}],v=e=>{let t=new Date;return{startDate:(0,h.f)(t,e),endDate:t,intervals:e}};var $=e.i(443103),b=e.i(712663),x=e.i(432171),_=e.i(159080);let T=_.f`
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
`;var C=e.i(498981),w=e.i(899164),j=e.i(978319),A=e.i(37463),S=e.i(220490),D=e.i(106850),P=e.i(119209),O=e.i(986351),F=e.i(773831),R=e.i(813843);let B=e=>{let{title:a,children:n,isTable:r,name:i,removeChart:o}=e,s=(0,t.jsxs)(R.f,{direction:"row",alignItems:"center",spacing:.5,children:[(0,t.jsx)(F.f,{onClick:e=>{e.stopPropagation(),o(e,i)},size:"small",title:"Delete",children:(0,t.jsx)(j.default,{color:"error",fontSize:"small"})}),(0,t.jsx)(O.f,{orientation:"vertical",flexItem:!0}),(0,t.jsx)(F.f,{className:"dragHandle",onClick:e=>e.stopPropagation(),size:"small",title:"Move",children:(0,t.jsx)(A.default,{fontSize:"small"})})]});return(0,t.jsxs)(S.f,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[(0,t.jsx)(P.f,{action:s,title:a,titleTypographyProps:{variant:"h6"}}),(0,t.jsx)(D.f,{sx:{flex:1,minHeight:0,overflowX:r?"hidden":"unset"},children:n})]})},z=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{allocationByService:i,meta:o}={allocationByService:[],meta:{}}}=(0,x.t)(T,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),s=o.aggregate?.avg.allocationInMinutes/60|0,d=o.aggregate?.avg.allocationInMinutes%60|0;return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"AverageAllocationTime",removeChart:r,title:`Average Allocation Time by Service Line (${s}:${d})`,children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column"},title:{text:null},series:[{data:i.map(e=>({name:e.serviceName,y:e.allocationInMinutes})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:a})})});e.s(["AverageAllocationTime",0,z],845966);let L=_.f`
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
`,M=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{attendanceBySupplier:i}={attendanceBySupplier:[]}}=(0,x.t)(L,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"LateAttendanceBySupplierChart",removeChart:r,title:"Top 10 Late Suppliers",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column"},xAxis:{type:"category",title:null},yAxis:{stackLabels:{enabled:!0}},plotOptions:{column:{stacking:"normal",pointPadding:0,groupPadding:0,dataLabels:{enabled:!1}}},series:[{data:i.map(e=>({name:e.supplierName,y:-Math.round(e.delayedJobs/e.jobCount*100)})),showInLegend:!1},{data:i.map(e=>({name:e.supplierName,y:100-Math.round(e.delayedJobs/e.jobCount*100)})),showInLegend:!1}]},ref:a})})});e.s(["LateAttendanceBySupplierChart",0,M],581928);let k=_.f`
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
`;var E=e.i(886748);let H=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{averageDaysOutstanding:i}={averageDaysOutstanding:[]}}=(0,x.t)(k,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"AverageDaysOutstandingChart",removeChart:r,title:"Average Days Outstanding",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.avg||0})),name:"Avg",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Days"}}},ref:a})})});e.s(["AverageDaysOutstandingChart",0,H],965507);let N=_.f`
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
`;var W=e.i(332793),q=e.i(144097),J=e.i(760814),G=e.i(738251),V=e.i(322135),Q=e.i(683125);let Y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"40%",minHeight:"40%",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};function U(e){let{openModal:n,setOpenModal:r,children:i,title:o}=e;return(0,t.jsx)("div",{children:(0,t.jsx)(Q.f,{open:n,onClose:()=>r(!1),children:(0,t.jsx)(G.f,{sx:Y,children:(0,t.jsxs)(a.f,{variant:"h6",component:"h2",sx:{fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:600,fontSize:"1rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.87)"},children:[o," Filters",i]})})})})}var X=e.i(827010),K=e.i(851123),Z=e.i(362537);function ee(e){let{title:n,children:r,isTable:i,name:o,removeChart:s,filtersComponent:d,activeFiltersComponent:l,setOpenModal:u,openModal:c}=e,m=(e=>{switch(e){case"Average Job Revenue":return"The average revenue per completed job.";case"Average Job Length":return"The average time taken to complete a job.";case"Average Time To Accept Job":return"The average time taken for a job to be accepted once it has been offered. ";case"SLA Breach (Count)":return"The number of jobs where a relevant SLA has been.";case"SLA Breach (Percentage)":return"The percentage of jobs where the relevant SLA has been breached.";case"Average Time To Close Job":return"The average time taken to close down a job once completed.";case"Number Of Quotes":return"Number of quotes submitted during time period.";case"Average Quote Value":return"The average value of quotes submitted during time period. ";case"Quote Acceptance Rate":return"The percentage of quotes submitted that are accepted. ";default:return null}})(n);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U,{title:n,openModal:c,setOpenModal:u,children:d}),(0,t.jsxs)(S.f,{sx:{minWidth:300,border:"1px solid rgba(211,211,211,0.6)",height:"100%"},children:[(0,t.jsx)(P.f,{title:(0,t.jsxs)(R.f,{direction:"row",children:[(0,t.jsx)(a.f,{sx:{fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:500,fontSize:"1rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.87)"},children:n}),(0,t.jsx)(V.f,{placement:"right-start",title:m,children:(0,t.jsx)(q.default,{fontSize:"medium",sx:{color:"#2196F3",ml:"0.1rem",position:"relative"}})})]}),action:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F.f,{onClick:()=>u(!0),size:"small",sx:{mr:"20px"},children:(0,t.jsx)(W.default,{sx:{color:"rgba(39, 39, 39, 0.7)"}})}),(0,t.jsx)(F.f,{onClick:e=>{e.stopPropagation(),s(e,o)},size:"small",sx:{mr:"20px"},children:(0,t.jsx)(j.default,{sx:{color:"rgba(39, 39, 39, 0.7)"}})}),(0,t.jsx)(F.f,{className:"dragHandle",onClick:e=>e.stopPropagation(),size:"small",sx:{mr:"20px"},children:(0,t.jsx)(A.default,{sx:{color:"rgba(39, 39, 39, 0.7)"}})})]})}),(0,t.jsxs)("div",{style:{backgroundColor:"white"},children:[(0,t.jsx)(D.f,{sx:{borderBottom:"1px solid #E4E7EB"},children:(0,t.jsx)(et,{overflow:i,children:r})}),(0,t.jsx)(G.f,{children:l})]})]})]})}let et=(0,J.U)(G.f).withConfig({displayName:"chartWrapper__StyledChildren",componentId:"sc-44bd05c3-0"})`
  overflow-x: ${e=>{let{overflow:t}=e;return t?"hidden":"unset"}};
`;var ea=e.i(594301),en=e.i(422411),er=e.i(755548),ei=e.i(98926),eo=e.i(691567),es=e.i(652148),ed=e.i(515523);let el=(0,f.memo)(e=>{let{AddForm:a,accountId:n,area:r,assetCategoryId:i,entity:o,entityId:s,errors:d,id:l,isClearable:u=!0,isDisabled:c,label:m="Account",locationId:p,name:I="account",serviceId:g,taxonomyGroupType:h,customerId:y,customerRole:v,type:$="account",userId:b,onChange:x,control:_,filters:T,...C}=e,w=(0,ei.f)(),[j,A]=(0,f.useState)(!1),[S,D]=(0,f.useState)([]),[P,O]=(0,f.useState)(!1),{hasRole:F}=(0,ea.f)(),[,R]=(0,f.useState)(!1);(0,f.useEffect)(()=>(R(!1),O(!1),()=>{}),[n,i,o,s,p,g,$,y,v,b]);let B=async()=>{if(P)return R(!0),null;A(!0);let{query:e,variables:t={}}=(e=>{let{accountId:t,area:a,assetCategoryId:n,entity:r,entityId:i,hasRole:o,id:s,locationId:d,serviceId:l,taxonomyGroupType:u,customerId:c,customerRole:m,type:p,userId:I}=e,f=p;switch(m&&(f=`${p}_${m}`),f){case"address":return{query:X.i,variables:{entity:r,entityId:i}};case"asset":return{query:X.B,variables:{categoryId:n,locationId:d}};case"assetBookable":return{query:X.B,variables:{categoryId:n,locationId:d,bookable:"yes"}};case"assetCategory":return{query:X.v,variables:{id:s}};case"coverage":return{query:X.q};case"customer":return{query:X.r};case"job":return{query:X.$,variables:{locationId:d}};case"manager":return{query:X.C,variables:{accountId:t}};case"product":return{query:X.B,variables:{category:"product",locationId:d}};case"property":return{query:K.j,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:t}}}}};case"property_user":return{query:K.j,variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:t},Account:{type:{_eq:"customer"},Account_Users:{role:{_eq:"user"},userId:{_eq:c}}},User_Account_Locations:{Account_User:{userId:{_eq:c},accountId:{_eq:t}}}}}}};case"sensor":return{query:X.B,variables:{category:"sensor",locationId:d}};case"service":return{query:X.Z};case"sla":return{query:X.k,variables:{type:"priority",adminId:t}};case"sublocation":return{query:X.B,variables:{category:"sublocation",adminId:t,locationId:d}};case"supplier":{let e={type:{_eq:"supplier"}};return a&&(e.PostcodeAreas={PostcodeArea:{area:{_eq:a}},entity:{_eq:"Account"},status:{_eq:"active"}}),l&&(e.Services={serviceId:{_eq:l},status:{_eq:"active"}}),{query:X.U,variables:{where:e}}}case"user":return{query:X.Q,variables:{accountId:t}};case"usersForBookings":return{query:X.Q,variables:{accountId:I}};case"tenant":return{query:X.p};case"taxonomyGroup":return{query:X.J,variables:{type:u}};case"expenseCategory":return{query:X.f};default:return{query:X.V}}})({accountId:n,area:r,assetCategoryId:i,entity:o,entityId:s,hasRole:F,id:l,locationId:p,serviceId:g,taxonomyGroupType:h,customerId:y,customerRole:v,type:$,userId:b}),{data:{items:a}={items:[]}}=await w.query({query:e,variables:{...t}});D(a),A(!1),O(!0),R(!0)};return(0,t.jsx)(en.e,{render:e=>(0,t.jsx)(ed.f,{...e,options:S,value:T[I],getOptionLabel:e=>e.label,sx:{width:"45%",mb:2,"& .MuiInputLabel-root":{lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.54)"}},onOpen:B,loading:j,renderInput:e=>(0,t.jsx)(es.f,{...e,label:(e=>{switch(e){case"supplier":return"Select supplier";case"customer":return"Select customer";case"property":return"Select property";case"service":return"Select service";case"coverage":return"Select postcodes";case"sla":return"SLA";case"user":return"Assigned to";default:return""}})($),variant:"standard",inputProps:{...e.inputProps,style:{lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.07875px",color:"rgba(0, 0, 0, 0.54)"}}}),onChange:(t,a)=>{e.onChange(a)}}),name:I,control:_})},(e,t)=>{let a=!0;return e.errors[e.name]?.message!==t.errors[t.name]?.message&&(a=!1),["accountId","assetCategoryId","entity","entityId","locationId","serviceId","type","value","customerId","customerRole"].forEach(n=>{e[n]!==t[n]&&(a=!1)}),a});el.propTypes={AddForm:eo.object,area:eo.string,accountId:eo.number,assetCategoryId:eo.number,control:eo.object.isRequired,errors:eo.object.isRequired,entity:eo.string,entityId:eo.number,id:eo.number,isClearable:eo.bool,label:eo.string,locationId:eo.number,name:eo.string,serviceId:eo.number,taxonomyGroupType:(0,eo.oneOf)(["expenseCategory","costCategory","jobTags"]),type:eo.string};var eu=e.i(130325),ec=e.i(668921),em=e.i(901004),ep=e.i(539117),eI=e.i(231637);let ef=e=>{let{name:a,label:n,control:r,defaultValue:i,children:o,options:s,variant:d,...l}=e;return(0,t.jsxs)(ec.f,{sx:{width:n?"45%":"100%"},fullWidth:!0,children:[n&&(0,t.jsx)(eI.f,{sx:{"&.MuiInputLabel-root	":{lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.07875px",color:"rgba(0, 0, 0, 0.54)"},"&.MuiInputLabel-formControl":{left:"-13px",top:"5px"}},htmlFor:"select",children:n}),(0,t.jsx)(en.e,{as:(0,t.jsx)(ep.f,{id:"select",...l,variant:d,sx:{mt:2,lineHeight:"1.4375em",fontFamily:"Nunito-SemiBold",fontStyle:"normal",fontWeight:700,fontSize:"0.875rem",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.54)"},children:s.map(e=>(0,t.jsx)(em.f,{value:e.value,sx:{fontFamily:"Nunito-Regular",fontStyle:"normal",fontWeight:400,fontSize:"0.875rem",lineHeight:"24px",letterSpacing:"0.0595px",color:"rgba(0, 0, 0, 0.54)"},children:e.label},e.value))}),name:a,control:r,defaultValue:i})]})},eg=eu.f,eh=[{label:"All",value:"All"},{label:"PPM",value:1},{label:"Reactive",value:0}],ey=[{label:"All",value:"All"},{label:"Fixed",value:1},{label:"Time and material",value:0}],ev=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId,isPlanned:e.isPlanned,isFixed:e.isFixed}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eg,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eg,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"slaId",type:"sla",control:o}),(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(ef,{control:o,name:"isPlanned",options:eh,variant:"standard",label:"Schedule"}),(0,t.jsx)(ef,{control:o,name:"isFixed",options:ey,variant:"standard",label:"Price"})]}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})};var e$=e.i(740790);let eb=e=>{let{filters:a}=e,n=Object.keys(a).map(e=>{switch(e){case"managerId":return{label:"Assigned to",value:a[e]?.label||null};case"customerId":return{label:"Customer",value:a[e]?.label||null};case"isFixed":return{label:"Price",value:(e=>{switch(e){case 0:return"Time and materials";case 1:return"Fixed";case"All":return"All";default:return null}})(a[e])};case"isPlanned":return{label:"Schedule",value:(e=>{switch(e){case 0:return"Reactive";case 1:return"PPM";case"All":return"All";default:return null}})(a[e])};case"locationId":return{label:"Location",value:a[e]?.label||null};case"serviceId":return{label:"Service",value:a[e]?.label||null};case"slaId":return{label:"SLA",value:a[e]?.label||null};case"supplierId":return{label:"Supplier",value:a[e]?.label||null};case"intervals":return{label:"Time Slot",value:(e=>{switch(e){case"-1":return"Today";case"-30":return"Last 30 Days";case"-7":return"Last Week";case"custom":return"Custom";default:return null}})(a[e])};case"endDate":return{label:"End Date",value:(0,Z.default)(a[e]).format("DD MMM YYYY")};case"startDate":return{label:"Start Date",value:(0,Z.default)(a[e]).format("DD MMM YYYY")};default:return null}});return(0,t.jsx)(G.f,{sx:{flexGrow:2,ml:6,mr:6,mb:4,mt:1},children:(0,t.jsx)(e$.f,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:n.map(e=>e&&e.value&&(0,t.jsx)(ex,{label:e.label,value:e.value},e.label))})})},ex=e=>{let{label:n,value:r}=e;return(0,t.jsxs)(e$.f,{item:!0,xs:3,children:[(0,t.jsx)(R.f,{direction:"row",children:(0,t.jsxs)(a.f,{sx:{fontFamily:"Nunito-Regular",fontSize:"0.625rem",fontStyle:"normal",fontWeight:400,lineHeight:"21px",color:"rgba(0, 0, 0, 0.87)",letterSpacing:"0.07875px",mr:"5px"},children:[n," :"]})}),(0,t.jsx)(R.f,{children:(0,t.jsx)(a.f,{sx:{fontFamily:"Nunito-Regular",fontSize:"0.75rem",fontStyle:"normal",fontWeight:400,lineHeight:"21px",color:"#2196F3",letterSpacing:"0.07875px"},children:r})})]})},e_=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null,isPlanned:null,isFixed:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{averageJobLength:u}={averageJobLength:[]}}=(0,x.t)(N,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,customerId:o.customerId?.value,endTime:o.endDate,startTime:o.startDate,isFixed:o.isFixed,isPlanned:o.isPlanned,locationId:o.locationId?.value,managerId:o.managerId?.value,serviceId:o.serviceId?.value,slaId:o.slaId?.value,supplierId:o.supplierId?.value}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"AverageJobLengthChart",removeChart:n,title:"Average Job Length",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(ev,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"AVG, hours",data:u.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Hours"}}},ref:a})})});e.s(["AverageJobLengthChart",0,e_],134800);let eT=_.f`
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
`,eC=eu.f,ew=[{label:"All",value:"All"},{label:"PPM",value:1},{label:"Reactive",value:0}],ej=[{label:"All",value:"All"},{label:"Fixed",value:1},{label:"Time and material",value:0}],eA=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId,isPlanned:e.isPlanned,isFixed:e.isFixed}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eC,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eC,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"slaId",type:"sla",control:o}),(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(ef,{control:o,name:"isPlanned",options:ew,variant:"standard",label:"Schedule"}),(0,t.jsx)(ef,{control:o,name:"isFixed",options:ej,variant:"standard",label:"Price"})]}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",children:"Apply"})]})]})})})},eS=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null,isPlanned:null,isFixed:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{averageJobRevenue:u}={averageJobRevenue:[]}}=(0,x.t)(eT,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,startTime:o.startDate,endTime:o.endDate,customerId:o.customerId?.value,locationId:o.locationId?.value,managerId:o.managerId?.value,postCodeAreaId:o.postCodeAreaId?.value,serviceId:o.serviceId?.value,slaId:o.slaId?.value,supplierId:o.supplierId?.value,isFixed:"All"===o.isFixed?null:o.isFixed,isPlanned:"All"===o.isPlanned?null:o.isPlanned}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"AverageJobRevenueChart",removeChart:n,title:"Average Job Revenue",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(eA,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),tooltip:"",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"Revenue, £",data:u.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.jobRevenue})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:a})})});e.s(["AverageJobRevenueChart",0,eS],240033);let eD=_.f`
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
`,eP=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{priceByMonth:i}={priceByMonth:[]}}=(0,x.t)(eD,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"AvgPriceChart",removeChart:r,title:"Average Job Price By Month ",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{name:"Ave",data:i.map(e=>({name:(0,Z.default)(e.month,"YYYY-M").format("MMM YYYY"),y:e.avg||0})),showInLegend:!1}]},ref:a})})});e.s(["AvgPriceChart",0,eP],545741);let eO=_.f`
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
`,eF=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{averageProfit:i}={averageProfit:[]}}=(0,x.t)(eO,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"AverageProfitChart",removeChart:r,title:"Average Profit Margin",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.avg||0})),name:"average margin profit",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:a})})});e.s(["AverageProfitChart",0,eF],96722);let eR=_.f`
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
`,eB=eu.f,ez=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eB,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eB,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"slaId",type:"sla",control:o}),(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})]}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",children:"Apply"})]})]})})})},eL=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{averageQuoteValue:u}={averageQuoteValue:[]}}=(0,x.t)(eR,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,customerId:o.customerId?.value,endTime:o.endDate,locationId:o.locationId?.value,managerId:o.managerId?.value,serviceId:o.serviceId?.value,slaId:o.slaId,startTime:o.startDate,supplierId:o.supplierId}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"AverageQuoteValueChart",removeChart:n,title:"Average Quote Value",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(ez,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"AVG, £",data:u.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.amount})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:a})})});e.s(["AverageQuoteValueChart",0,eL],277431);let eM=_.f`
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
`,ek=eu.f,eE=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(ek,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(ek,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsx)(R.f,{direction:"row",justifyContent:"space-between",children:(0,t.jsx)(el,{...m,name:"slaId",type:"sla",control:o})}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},eH=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i=y.find(e=>e.default),o={...v(i.value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null})},[s,d]=(0,f.useState)(o),[l,u]=(0,f.useState)(!1),{data:{averageTimeToAcceptByMinute:c}={averageTimeToAcceptByMinute:[]}}=(0,x.t)(eM,{onCompleted:()=>{u(!1)},variables:{adminId:s.adminId,endTime:s.endDate,startTime:s.startDate,customerId:s.customerId?.value,locationId:s.locationId?.value,serviceId:s.serviceId?.value,slaId:s.slaId?.value,supplierId:s.supplierId?.value}});return(0,b.default)(C.default),c&&(0,t.jsx)(ee,{name:"AverageTimeToAcceptByMinuteChart",removeChart:n,title:"Average Time To Accept Job",openModal:l,setOpenModal:u,filtersComponent:(0,t.jsx)(eE,{filters:s,initialFilters:o,setFilters:d,defaultInterval:i}),activeFiltersComponent:(0,t.jsx)(eb,{filters:s}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"Avg, minutes",data:c.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Minutes"}}},ref:a})})});e.s(["AverageTimeToAcceptByMinuteChart",0,eH],777390);let eN=_.f`
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
`,eW=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{averageTimeToAttendance:i}={averageTimeToAttendance:[]}}=(0,x.t)(eN,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"AverageTimeToAttendanceChart",removeChart:r,title:"Average Time To Attendance",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.avg||0})),name:"Attendance",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Hours"}}},ref:a})})});e.s(["AverageTimeToAttendanceChart",0,eW],738056);let eq=_.f`
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
`,eJ=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{averageTimeToSubmitJobReport:i}={averageTimeToSubmitJobReport:[]}}=(0,x.t)(eq,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"AverageTimeToSubmitJobReportChart",removeChart:r,title:"Average Time To Submit Job",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.count})),name:"Avg",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Hours"}}},ref:a})})});e.s(["AverageTimeToSubmitJobReportChart",0,eJ],163396);let eG=_.f`
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
`,eV=eu.f,eQ=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eV,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(eV,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"slaId",type:"sla",control:o}),(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})]}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},eY=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{averageToCloseByHour:u}={averageToCloseByHour:[]}}=(0,x.t)(eG,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,customerId:o.customerId?.value,endTime:o.endDate,locationId:o.locationId?.value,managerId:o.managerId?.value,serviceId:o.serviceId?.value,slaId:o.slaId,startTime:o.startDate,supplierId:o.supplierId}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"AverageToCloseByHourChart",removeChart:n,title:"Average Time To Close Job",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(eQ,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{data:u.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.avg||0})),name:"AVG, days",showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Days"}}},ref:a})})});e.s(["AverageToCloseByHourChart",0,eY],932347);let eU=_.f`
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
`,eX=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{countByActiveAccount:i}={countByActiveAccount:[]}}=(0,x.t)(eU,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"CountByActiveAccountChart",removeChart:r,title:"Count By Active Account",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.count})),name:"Active account",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:a})})});e.s(["CountByActiveAccountChart",0,eX],34831);let eK=_.f`
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
`,eZ=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{CountJobsEngagementRate:i}={CountJobsEngagementRate:[]}}=(0,x.t)(eK,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"CountJobsEngagementRateChart",removeChart:r,title:"Engagement Rate",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.count})),name:"Count",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:a})})});e.s(["CountJobsEngagementRateChart",0,eZ],607499);let e0=_.f`
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
`,e1=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{countOpenJobsByDate:i}={countOpenJobsByDate:[]}}=(0,x.t)(e0,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"CountOpenJobsByDateChart",removeChart:r,title:"Number Of Open Jobs",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({type:"line",name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.count})),name:"Count",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:a})})});e.s(["CountOpenJobsByDateChart",0,e1],929147);let e3=_.f`
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
`,e6=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{financebymonth:i}={financebymonth:[]}}=(0,x.t)(e3,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"CustomerAndSupplierAmounts",removeChart:r,title:"Customer \\ Supplier Amounts By Month",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{title:{text:null},xAxis:{type:"category"},yAxis:{title:{text:"Amounts(£)"}},tooltip:{formatter:function(){return"<b>"+this.x+"</b><br/>"+this.series.name+": "+this.y+"<br/>Total: "+this.point.stackTotal}},plotOptions:{column:{stacking:"normal"}},series:[{type:"column",name:"Customer Amount",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.ppm_customer,stack:"customer"})),showInLegend:!1},{type:"column",name:"Customer Amount",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.reactive_customer,stack:"customer"})),showInLegend:!1},{type:"column",name:"PPM Supplier Amount",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.ppm_supplier,stack:"supplier"})),showInLegend:!1},{type:"column",name:"Supplier Amount",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.reactive_supplier,stack:"supplier"})),showInLegend:!1},{type:"spline",marker:{radius:4,lineWidth:1,symbol:"square"},name:"Revenue Amount",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.reactive_revenue})),showInLegend:!1},{type:"spline",marker:{radius:4,lineWidth:1,symbol:"diamond"},name:"Revenue Amount",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.ppm_revenue})),showInLegend:!1}]},ref:a})})});e.s(["CustomerAndSupplierAmounts",0,e6],368557);var e2=e.i(877341);let e5=_.f`
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
`;var e9=e.i(472552),e4=e.i(974261),e8=e.i(800884),e7=e.i(889231),te=e.i(60450),tt=e.i(836072),ta=e.i(98762),tn=e.i(879436);let tr=(e,t,a)=>e&&t?`${a?(0,tn.f)(e):e||0} (${Math.round(e/t*100)}%)`:`${a?(0,tn.f)(e):e||0}`;var ti=e.i(60903),to=e.i(938504);let ts={item:"outstanding_invoice_amount",order:"desc"},td=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:ts}),[s,d]=(0,f.useState)(),{data:{customers:l,meta:u}={customers:[],meta:{aggregate:{}}},loading:c,refetch:m}=(0,x.t)(e5,{variables:{...i,outstanding_levels:s}}),[p]=(0,e2.f)(e5,{variables:{limit:e4.r.paginationSize,offset:(o.current?.currentPage-1||0)*e4.r.paginationSize,orderBy:{[o.current?.sort.item]:o.current?.sort.order},outstanding_levels:s},onCompleted:e=>{let t="data:application/octet-stream,"+encodeURIComponent(e9.default.unparse(e.customers.map(e=>({name:e.customer.name,totalInvoiceCount:e.total_invoice_count,outstanding_invoice_count:tr(e.outstanding_invoice_count,e.total_invoice_count),outstanding_0_30:tr(e.outstanding_0_30,e.outstanding_invoice_count),outstanding_31_60:tr(e.outstanding_31_60,e.outstanding_invoice_count),outstanding_61_90:tr(e.outstanding_61_90,e.outstanding_invoice_count),outstanding_91_x:tr(e.outstanding_91_x,e.outstanding_invoice_count),totalInvoiceAmount:(0,tn.f)(e.total_invoice_amount),outstanding_invoice_amount:tr(e.outstanding_invoice_amount,e.total_invoice_amount,!0)})),{escapeFormulae:/^[=+@\t\r]/}));(0,ti.f)(t,"customer-debt.csv")}}),I=e=>{let{accountId:a,level:r,number:i}=e,o=`/dashboard/customers/view?id=${a}`,s=`&endDate=${(0,to.f)(n.endDate)}`,d=`&startDate=${(0,to.f)(n.startDate)}`;return(0,t.jsx)(e7.f,{href:`${o}&tab=finance&outstandingLevel=${r}${d}${s}`,children:i})},g=[{hidden:!0},{formatter:e=>{let{row:a}=e;return(0,t.jsx)(e7.f,{href:`/dashboard/customers/view?id=${a.accountId}&tab=finance`,children:a.name})},text:"Customer"},{sortable:!0,sortName:"total_invoice_count",text:"Invoice Count"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:0,number:t.outstanding_invoice_count})},sortable:!0,sortName:"outstanding_invoice_count",text:"Outstanding Invoices"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:1,number:t.outstanding_0_30})},sortable:!0,sortName:"outstanding_0_30",text:"Outstanding 1-30"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:31,number:t.outstanding_31_60})},sortable:!0,sortName:"outstanding_31_60",text:"Outstanding 31-60"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:61,number:t.outstanding_61_90})},sortable:!0,sortName:"outstanding_61_90",text:"Outstanding 61-90"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:91,number:t.outstanding_91_x})},sortable:!0,sortName:"outstanding_91_x",text:"Outstanding > 90"},{sortable:!0,sortName:"total_invoice_amount",text:"Total Invoice Amount"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:0,number:t.outstanding_invoice_amount})},sortable:!0,sortName:"outstanding_invoice_amount",text:"Outstanding Amount"}],h=e=>{d(e)};return(0,t.jsxs)(B,{isTable:!0,name:"CustomerDebtTable",removeChart:r,title:"Customer Debt",children:[(0,t.jsx)(R.f,{direction:"row",children:(0,t.jsx)(te.f,{loading:!1,onClick:()=>p()})}),u.aggregate.sum&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"flex-end",flexWrap:"wrap",gap:1,children:[(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Invoice Count: ",(0,t.jsx)("b",{children:u.aggregate.sum.total_invoice_count})]}),color:"secondary",onClick:()=>h(null),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding Invoices:",(0,t.jsx)("b",{children:tr(u.aggregate.sum.outstanding_invoice_count,u.aggregate.sum.total_invoice_count)})]}),color:"secondary",variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding 1-30:",(0,t.jsx)("b",{children:tr(u.aggregate.sum.outstanding_0_30,u.aggregate.sum.outstanding_invoice_count)})]}),color:1===s?"success":"secondary",onClick:()=>h(1),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding 31-60:",(0,t.jsx)("b",{children:tr(u.aggregate.sum.outstanding_31_60,u.aggregate.sum.outstanding_invoice_count)})]}),color:31===s?"success":"secondary",onClick:()=>h(31),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding 61-90:",(0,t.jsx)("b",{children:tr(u.aggregate.sum.outstanding_61_90,u.aggregate.sum.outstanding_invoice_count)})]}),color:61===s?"success":"secondary",onClick:()=>h(61),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding > 90:",(0,t.jsx)("b",{children:tr(u.aggregate.sum.outstanding_91_x,u.aggregate.sum.outstanding_invoice_count)})]}),color:91===s?"success":"secondary",onClick:()=>h(91),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Total Invoice Amount: ",(0,t.jsx)("b",{children:(0,tn.f)(u.aggregate.sum.total_invoice_amount)})]}),color:"secondary",variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding Amount:",(0,t.jsx)("b",{children:tr(u.aggregate.sum.outstanding_invoice_amount,u.aggregate.sum.total_invoice_amount,!0)})]}),color:"secondary",variant:"outlined"})]}),(0,t.jsx)(tt.f,{columns:g,history:!1,initialSort:ts,loading:c,meta:u,ref:o,refetch:m,rows:l.map(e=>({accountId:e.customer.id,name:e.customer.name,totalInvoiceCount:e.total_invoice_count,outstanding_invoice_count:tr(e.outstanding_invoice_count,e.total_invoice_count),outstanding_0_30:tr(e.outstanding_0_30,e.outstanding_invoice_count),outstanding_31_60:tr(e.outstanding_31_60,e.outstanding_invoice_count),outstanding_61_90:tr(e.outstanding_61_90,e.outstanding_invoice_count),outstanding_91_x:tr(e.outstanding_91_x,e.outstanding_invoice_count),totalInvoiceAmount:(0,tn.f)(e.total_invoice_amount),outstanding_invoice_amount:tr(e.outstanding_invoice_amount,e.total_invoice_amount,!0)}))})]})});td.propTypes={filters:eo.object},e.s(["CustomerDebtTable",0,td],518665);let tl=_.f`
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
`,tu=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{disputeByMonth:i,meta:o}={disputeByMonth:[],meta:{}}}=(0,x.t)(tl,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"DisputeRateChart",removeChart:r,title:`Average Dispute Rate By Month (${Number(o.aggregate?.avg.disputeRate).toFixed(2)})`,children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column"},title:{text:null},series:[{data:i.map(e=>({name:(0,Z.default)(e.month,"YYYY-M").format("MMM YYYY"),y:e.disputeRate||0})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:a})})});e.s(["DisputeRateChart",0,tu],673255);let tc=_.f`
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
`,tm=(0,f.forwardRef)((e,a)=>{let{filters:n}=e,{data:{jobsByDay:r}={jobsByDay:[]}}=(0,x.t)(tc,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),r&&(0,t.jsx)(B,{title:"Total bookings by Day",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}},series:[{name:"count",data:r.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.count})),showInLegend:!1}]},ref:a})})});e.s(["JobsByDayLineChart",0,tm],108603);let tp=_.f`
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
`,tI=(0,f.forwardRef)((e,a)=>{let n,{filters:r,removeChart:i}=e,{data:{meta:o,jobsByMonth:s}={meta:{},jobsByMonth:[]}}=(0,x.t)(tp,{variables:{adminId:r.adminId,customerId:r.customerId,endTime:r.endDate,isFixed:r.isFixed,isPlanned:r.isPlanned,locationId:r.locationId,managerId:r.managerId,postCodeAreaId:r.postCodeAreaId,serviceId:r.serviceId,slaId:r.slaId,startTime:r.startDate,supplierId:r.supplierId}});return(0,b.default)(C.default),(0,t.jsx)(B,{name:"JobsByMonth",removeChart:i,title:`Total bookings by Month (${o.aggregate?.sum.count})`,children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{min:0,title:{text:"Counts"}},tooltip:{headerFormat:'<span style="font-size:11px">{series.name}</span><br>',pointFormat:"{point.name}</span>: <b>{point.y}</b> "},series:[{name:"Month",data:(n=[],s.forEach(e=>{try{n.push({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.count})}catch(e){}}),n),showInLegend:!1}]},ref:a})})});e.s(["JobsByMonth",0,tI],810483);let tf=_.f`
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
`,tg=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{meta:i,jobsByService:o}={meta:{},jobsByService:[]}}=(0,x.t)(tf,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),(0,t.jsx)(B,{name:"JobsByService",removeChart:r,title:`Total bookings by Service (${i.aggregate?.sum.count})`,children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"pie"},title:{text:null},series:[{data:o.map(e=>({name:e.servicename,y:e.count})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:a})})});e.s(["JobsByService",0,tg],9762);let th=_.f`
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
`,ty=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{jobsla:i}={jobsla:[]}}=(0,x.t)(th,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"jobsBySLA",removeChart:r,title:"Bookings By SLAs",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{plotBackgroundColor:null,plotBorderWidth:0,plotShadow:!1},title:{text:"SLAs",align:"center",verticalAlign:"middle",y:60},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},accessibility:{point:{valueSuffix:"%"}},plotOptions:{pie:{dataLabels:{enabled:!0,distance:-50,style:{fontWeight:"bold",color:"white"}},startAngle:-90,endAngle:90,center:["50%","75%"],size:"110%"}},series:[{type:"pie",name:"SLA",innerSize:"50%",data:i.map(e=>({name:e.sla_name,y:e.count})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:a})})});e.s(["jobsBySLA",0,ty],90670);let tv=_.f`
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
`,t$=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{meta:i,jobsByStatus:o}={meta:{},jobsByStatus:[]}}=(0,x.t)(tv,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),o&&(0,t.jsx)(B,{name:"JobsByStatusPieChart",removeChart:r,title:`Total bookings by Status (${i.aggregate?.sum.count})`,children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"pie"},title:{text:null},tooltip:{formatter:function(){return"<b>"+this.x+"</b><br/>"+this.series.name+": "+this.y}},series:[{data:o.map(e=>({name:e.statusname,y:e.count})),showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:null}},ref:a})})});e.s(["JobsByStatusPieChart",0,t$],408233);let tb=_.f`
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
`,tx=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{jobsFinancialByDay:i}={jobsFinancialByDay:[]}}=(0,x.t)(tb,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"JobsFinancialByDayLineChart",removeChart:r,title:"Total Revenue by Day",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{type:"column",name:"Job Amount",data:i.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.customerAmount})),showInLegend:!1},{type:"column",name:"Revenu",data:i.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.jobRevenue})),showInLegend:!1}]},ref:a})})});e.s(["JobsFinancialByDayLineChart",0,tx],97806);let t_=_.f`
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
`,tT=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{jobSLAByMonth:i}={jobSLAByMonth:[]}}=(0,x.t)(t_,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"JobSLAByMonth",removeChart:r,title:"Monthly SLAs ",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"spline"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:null},tooltip:{headerFormat:"<b>{series.slaname}</b><br>",pointFormat:"{series.count}"},plotOptions:{series:{marker:{enabled:!0}}},series:[{name:"P1",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.P1}))},{name:"P2",data:i.map(e=>({nam:(0,E.f)(new Date(e.month),"LLL yyyy"),name:e.month,y:e.P2}))},{name:"P3",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.P3}))},{name:"P4",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.P4}))},{name:"P5",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.P5}))}]},ref:a})})});e.s(["JobSLAByMonth",0,tT],310791);let tC=_.f`
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
`,tw=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{newCustomerAccounts:i}={newCustomerAccounts:[]}}=(0,x.t)(tC,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"NewCustomerAccountsChart",removeChart:r,title:"New Customer Accounts",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.count||0})),name:"Active Customer",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:a})})});e.s(["NewCustomerAccountsChart",0,tw],35348);let tj=_.f`
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
`,tA=eu.f,tS=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(tA,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(tA,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsx)(R.f,{direction:"row",justifyContent:"space-between",children:(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},tD=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{quoteAcceptanceRate:u}={quoteAcceptanceRate:[]}}=(0,x.t)(tj,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,customerId:o.customerId?.value,endTime:o.endDate,locationId:o.locationId?.value,managerId:o.managerId?.value,serviceId:o.serviceId?.value,startTime:o.startDate,supplierId:o.supplierId?.value}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"QuoteAcceptanceRateChart",removeChart:n,title:"Quote Acceptance Rate",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(tS,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"spline",zoomType:"x"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{data:u.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.count||0})),name:"%",showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"%"}}},ref:a})})});e.s(["QuoteAcceptanceRateChart",0,tD],711835);let tP=_.f`
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
`,tO=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{newSupplierAccounts:i}={newSupplierAccounts:[]}}=(0,x.t)(tP,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"NewSupplierAccountsChart",removeChart:r,title:"New Supplier Accounts",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.count||0})),name:"Active Supplier",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}}},ref:a})})});e.s(["NewSupplierAccountsChart",0,tO],469845);let tF=_.f`
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
`,tR={item:"reactive_customer",order:"desc"},tB=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:tR}),{data:{percentageOfSpendByServiceLine:s,meta:d}={percentageOfSpendByServiceLine:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(tF,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,t.jsx)(B,{isTable:!0,name:"PercentageOfSpendByServiceLineTable",removeChart:r,title:"% Of Spend By Service Line",children:(0,t.jsx)(tt.f,{columns:[{text:"Service Name"},{sortable:!0,sortName:"reactive_customer",text:"Current Amount"},{sortable:!0,sortName:"last_amount",text:"Last Amount"}],history:!1,initialSort:tR,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({serviceName:e.serviceName,currentAmount:e.currentAmount,lastAmount:e.lastAmount}))})})});tB.propTypes={filters:eo.object},e.s(["PercentageOfSpendByServiceLineTable",0,tB],366964);let tz=_.f`
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
`,tL={item:"intval_extra",order:"desc"},tM=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:tL}),{data:{percentageOfWorkOrdersByServiceLine:s,meta:d}={percentageOfWorkOrdersByServiceLine:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(tz,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,t.jsx)(B,{isTable:!0,name:"PercentageOfWorkOrdersByServiceLineTable",removeChart:r,title:"% Of Work Orders By Service Line",children:(0,t.jsx)(tt.f,{columns:[{text:"Service name"},{sortable:!0,sortName:"intval_extra",text:"current year"},{sortable:!0,sortName:"value",text:" last year"}],history:!1,initialSort:tL,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({serviceName:e.serviceName,countJobIdCurrentYear:e.countJobIdCurrentYear,countLastYear:e.countLastYear}))})})});tM.propTypes={filters:eo.object},e.s(["PercentageOfWorkOrdersByServiceLineTable",0,tM],175417);let tk=_.f`
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
`,tE=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{financebymonth:i}={financebymonth:[]}}=(0,x.t)(tk,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"ReactiveAmountByMonth",removeChart:r,title:"Supplier/Customer Amounts By Month",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amount(£)"}},labels:{items:[{style:{fontSize:"15px",left:"50px",top:"18px"}}]},series:[{type:"column",name:"Customer",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.reactive_customer}))},{type:"column",name:"supplier",data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.reactive_supplier}))},{type:"spline",name:"Revenue",marker:{lineWidth:2,fillColor:"white"},data:i.map(e=>({name:(0,E.f)(new Date(e.month),"LLL yyyy"),y:e.reactive_revenue}))}]},ref:a})})});e.s(["ReactiveAmountByMonth",0,tE],120247);let tH=_.f`
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
`,tN=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{sla:i}={sla:[]}}=(0,x.t)(tH,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"ReactiveBySLA",removeChart:r,title:"Reactive By SLA",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"bar"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{min:0,labels:{overflow:"justify"}},plotOptions:{bar:{dataLabels:{enabled:!0}}},legend:{layout:"vertical",align:"right",verticalAlign:"top",x:-40,y:80,floating:!0,borderWidth:1,shadow:!0},credits:{enabled:!1},series:[{name:"live jobs",data:i.map(e=>({name:e.sla_name,y:e.Live_Count})),showInLegend:!1},{name:"Breached jobs",data:i.map(e=>({name:e.sla_name,y:e.Breached_Count})),showInLegend:!1}]},ref:a})})});e.s(["ReactiveBySLA",0,tN],313910);let tW=_.f`
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
`,tq={item:"reactive_customer",order:"desc"},tJ=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:tq}),{data:{spendByCoverageArea:s,meta:d}={spendByCoverageArea:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(tW,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,t.jsx)(B,{isTable:!0,name:"SpendByCoverageAreaTable",removeChart:r,title:"Spend By Coverage Area",children:(0,t.jsx)(tt.f,{columns:[{text:"coverage"},{sortable:!0,sortName:"reactive_customer",text:"Total"}],history:!1,initialSort:tq,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({coverage:e.coverage,total:e.total}))})})});tJ.propTypes={filters:eo.object},e.s(["SpendByCoverageAreaTable",0,tJ],220690);let tG=_.f`
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
`,tV=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{spendFromNewCustomerAccounts:i}={spendFromNewCustomerAccounts:[]}}=(0,x.t)(tG,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"SpendFromNewCustomerAccountsChart",removeChart:r,title:"Spend From New Customer Accounts",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.count||0})),name:"Active Customer",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}}},ref:a})})});e.s(["SpendFromNewCustomerAccountsChart",0,tV],495466);let tQ=_.f`
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
`,tY=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{sumQuoteAccepted:i}={sumQuoteAccepted:[]}}=(0,x.t)(tQ,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"SumQuoteAccepted",removeChart:r,title:"Value of Quotes Accepted By Date",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{name:"sum",data:i.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.sum})),showInLegend:!1}]},ref:a})})});e.s(["SumQuoteAccepted",0,tY],822015);let tU=_.f`
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
`,tX=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{sumQuoteSent:i}={sumQuoteSent:[]}}=(0,x.t)(tU,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"SumQuoteSent",removeChart:r,title:"Value Of Quotations Sent By Date",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{name:"sum",data:i.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.sum})),showInLegend:!1}]},ref:a})})});e.s(["SumQuoteSent",0,tX],806897);let tK=_.f`
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
`,tZ=(e,t,a)=>e&&t?`${a?(0,tn.f)(e):e||0} (${Math.round(e/t*100)}%)`:`${a?(0,tn.f)(e):e||0}`,t0={item:"outstanding_invoice_amount",order:"desc"},t1=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:t0}),[s,d]=(0,f.useState)(),{data:{suppliers:l,meta:u}={suppliers:[],meta:{aggregate:{}}},loading:c,refetch:m}=(0,x.t)(tK,{variables:{...i,outstanding_levels:s}}),[p]=(0,e2.f)(tK,{variables:{...i,limit:e4.r.paginationSize,offset:(o.current?.currentPage-1||0)*e4.r.paginationSize,orderBy:{[o.current?.sort.item]:o.current?.sort.order},outstanding_levels:s},onCompleted:e=>{let t="data:application/octet-stream,"+encodeURIComponent(e9.default.unparse(e.suppliers.map(e=>({name:e.customer.name,totalInvoiceCount:e.total_invoice_count,outstanding_invoice_count:tZ(e.outstanding_invoice_count,e.total_invoice_count),outstanding_0_30:tZ(e.outstanding_0_30,e.outstanding_invoice_count),outstanding_31_60:tZ(e.outstanding_31_60,e.outstanding_invoice_count),outstanding_61_90:tZ(e.outstanding_61_90,e.outstanding_invoice_count),outstanding_91_x:tZ(e.outstanding_91_x,e.outstanding_invoice_count),totalInvoiceAmount:(0,tn.f)(e.total_invoice_amount),outstanding_invoice_amount:tZ(e.outstanding_invoice_amount,e.total_invoice_amount,!0)})),{escapeFormulae:/^[=+@\t\r]/}));(0,ti.f)(t,"customer-debt.csv")}}),I=e=>{let{accountId:a,level:r,number:i}=e,o=`/dashboard/suppliers/view?id=${a}`,s=`&endDate=${(0,to.f)(n.endDate)}`,d=`&startDate=${(0,to.f)(n.startDate)}`;return(0,t.jsx)(e7.f,{href:`${o}&tab=finance&outstandingLevel=${r}${d}${s}`,children:i})},g=[{hidden:!0},{formatter:e=>{let{row:a}=e;return(0,t.jsx)(e7.f,{href:`/dashboard/suppliers/view?id=${a.accountId}&tab=finance`,children:a.name})},text:"Supplier"},{sortable:!0,sortName:"total_invoice_count",text:"Invoice Count"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:0,number:t.outstanding_invoice_count})},sortable:!0,sortName:"outstanding_invoice_count",text:"Outstanding Invoices"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:1,number:t.outstanding_0_30})},sortable:!0,sortName:"outstanding_0_30",text:"Outstanding 1-30"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:31,number:t.outstanding_31_60})},sortable:!0,sortName:"outstanding_31_60",text:"Outstanding 31-60"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:61,number:t.outstanding_61_90})},sortable:!0,sortName:"outstanding_61_90",text:"Outstanding 61-90"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:91,number:t.outstanding_91_x})},sortable:!0,sortName:"outstanding_91_x",text:"Outstanding > 90"},{sortable:!0,sortName:"total_invoice_amount",text:"Total Invoice Amount"},{formatter:e=>{let{row:t}=e;return I({accountId:t.accountId,level:0,number:t.outstanding_invoice_amount})},sortable:!0,sortName:"outstanding_invoice_amount",text:"Outstanding Amount"}],h=e=>{d(e)};return(0,t.jsxs)(B,{isTable:!0,name:"SupplierDebtTable",removeChart:r,title:"Supplier Debt",children:[(0,t.jsx)(R.f,{direction:"row",children:(0,t.jsx)(te.f,{loading:!1,onClick:()=>p()})}),u.aggregate.sum&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"flex-end",flexWrap:"wrap",gap:1,children:[(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Invoice Count: ",(0,t.jsx)("b",{children:u.aggregate.sum.total_invoice_count})]}),color:"secondary",onClick:()=>h(null),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding Invoices:",(0,t.jsx)("b",{children:tZ(u.aggregate.sum.outstanding_invoice_count,u.aggregate.sum.total_invoice_count)})]}),color:"secondary",variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding 1-30:",(0,t.jsx)("b",{children:tZ(u.aggregate.sum.outstanding_0_30,u.aggregate.sum.outstanding_invoice_count)})]}),color:1===s?"success":"secondary",onClick:()=>h(1),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding 31-60:",(0,t.jsx)("b",{children:tZ(u.aggregate.sum.outstanding_31_60,u.aggregate.sum.outstanding_invoice_count)})]}),color:31===s?"success":"secondary",onClick:()=>h(31),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding 61-90:",(0,t.jsx)("b",{children:tZ(u.aggregate.sum.outstanding_61_90,u.aggregate.sum.outstanding_invoice_count)})]}),color:61===s?"success":"secondary",onClick:()=>h(61),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding > 90:",(0,t.jsx)("b",{children:tZ(u.aggregate.sum.outstanding_91_x,u.aggregate.sum.outstanding_invoice_count)})]}),color:91===s?"success":"secondary",onClick:()=>h(91),variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Total Invoice Amount: ",(0,t.jsx)("b",{children:(0,tn.f)(u.aggregate.sum.total_invoice_amount)})]}),color:"secondary",variant:"outlined"}),(0,t.jsx)(e8.f,{label:(0,t.jsxs)(t.Fragment,{children:["Outstanding Amount:",(0,t.jsx)("b",{children:tZ(u.aggregate.sum.outstanding_invoice_amount,u.aggregate.sum.total_invoice_amount,!0)})]}),color:"secondary",variant:"outlined"})]}),(0,t.jsx)(tt.f,{columns:g,history:!1,initialSort:t0,loading:c,meta:u,ref:o,refetch:m,rows:l.map(e=>({accountId:e.supplier.id,name:e.supplier.name,totalInvoiceCount:e.total_invoice_count,outstanding_invoice_count:tZ(e.outstanding_invoice_count,e.total_invoice_count),outstanding_0_30:tZ(e.outstanding_0_30,e.outstanding_invoice_count),outstanding_31_60:tZ(e.outstanding_31_60,e.outstanding_invoice_count),outstanding_61_90:tZ(e.outstanding_61_90,e.outstanding_invoice_count),outstanding_91_x:tZ(e.outstanding_91_x,e.outstanding_invoice_count),totalInvoiceAmount:(0,tn.f)(e.total_invoice_amount),outstanding_invoice_amount:tZ(e.outstanding_invoice_amount,e.total_invoice_amount,!0)}))})]})});t1.propTypes={filters:eo.object},e.s(["SupplierDebtTable",0,t1],468776);let t3=_.f`
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
`,t6={item:"ppm_customer",order:"desc"},t2=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:t6}),{data:{topAssetsByNumberOfJobs:s,meta:d}={topAssetsByNumberOfJobs:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(t3,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Name"},{sortable:!0,sortName:"ppm_customer",text:"Amount",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.amount)}},{sortable:!0,sortName:"count",text:"Count Offered Job"}];return(0,t.jsx)(B,{isTable:!0,name:"TopAssetsByNumberOfJobsTable",removeChart:r,title:"Top Assets By Number Of Jobs",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:t6,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({assetName:e.assetName,amount:e.amount,countOfferedJob:e.countOfferedJob}))})})});t2.propTypes={filters:eo.object},e.s(["TopAssetsByNumberOfJobsTable",0,t2],255787);let t5=_.f`
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
`,t9={item:"reactive_customer",order:"desc"},t4=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:t9}),{data:{topAssetsBySpend:s,meta:d}={topAssetsBySpend:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(t5,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.amount)}}];return(0,t.jsx)(B,{isTable:!0,name:"TopAssetsBySpendTable",removeChart:r,title:"Top Assets By Spend",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:t9,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({assetName:e.assetName,amount:e.amount}))})})});t4.propTypes={filters:eo.object},e.s(["TopAssetsBySpendTable",0,t4],657830);let t8=_.f`
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
`,t7={item:"reactive_customer",order:"desc"},ae=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:t7}),{data:{topAssetTypesBySpend:s,meta:d}={topAssetTypesBySpend:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(t8,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.amount)}}];return(0,t.jsx)(B,{isTable:!0,name:"TopAssetTypesBySpendTable",removeChart:r,title:"Top Asset Types By Spend",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:t7,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({assetTypeName:e.assetTypeName,amount:e.amount}))})})});ae.propTypes={filters:eo.object},e.s(["TopAssetTypesBySpendTable",0,ae],897568);let at=_.f`
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
`,aa={item:"reactive_customer",order:"desc"},an=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:aa}),{data:{topCustomersByNumberOfProperties:s,meta:d}={topCustomersByNumberOfProperties:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(at,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Account name"},{sortable:!0,sortName:"reactive_customer",text:"Count Location"},{text:"Customer amount",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.customerAmount)}}];return(0,t.jsx)(B,{isTable:!0,name:"TopCustomersByNumberOfPropertiesTable",removeChart:r,title:"Top Customers By Number Of Properties",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:aa,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({accountName:e.accountName,countLocationId:e.countLocationId,customerAmount:e.customerAmount}))})})});an.propTypes={filters:eo.object},e.s(["TopCustomersByNumberOfPropertiesTable",0,an],654063);let ar=_.f`
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
`,ai=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{topCustomersByProfit:i}={topCustomersByProfit:[]}}=(0,x.t)(ar,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"TopCustomersByProfitChart",removeChart:r,title:"Top Customers By Profit",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.avg||0})),name:"Amount",showInLegend:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Amount(£)"}}},ref:a})})});e.s(["TopCustomersByProfitChart",0,ai],465607);let ao=_.f`
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
`,as={item:"reactive_customer",order:"desc"},ad=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:as}),{data:{topPropertiesBySpend:s,meta:d}={topPropertiesBySpend:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(ao,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.amount)}}];return(0,t.jsx)(B,{isTable:!0,name:"TopPropertiesBySpendTable",removeChart:r,title:"Top Properties By Spend",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:as,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({locationName:e.locationName,amount:e.amount}))})})});ad.propTypes={filters:eo.object},e.s(["TopPropertiesBySpendTable",0,ad],451508);let al=_.f`
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
`,au={item:"reactive_customer",order:"desc"},ac=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:au}),{data:{topSuppliersByNumberOfJobs:s,meta:d}={topSuppliersByNumberOfJobs:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(al,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Supplier Name"},{sortable:!0,sortName:"count",text:"Count Accepted Job"},{sortable:!0,sortName:"reactive_customer",text:"Amount Accepted Job",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.amountAcceptedJob)}}];return(0,t.jsx)(B,{isTable:!0,name:"TopSuppliersByNumberOfJobsTable",removeChart:r,title:"Top Suppliers By Number Of Jobs and Earnings",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:au,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({supplierName:e.supplierName,countAcceptedJob:e.countAcceptedJob,amountAcceptedJob:e.amountAcceptedJob}))})})});ac.propTypes={filters:eo.object},e.s(["TopSuppliersByNumberOfJobsTable",0,ac],533010);let am=_.f`
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
`,ap={item:"reactive_supplier",order:"desc"},aI=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:ap}),{data:{topSuppliersByQuoteReturn:s,meta:d}={topSuppliersByQuoteReturn:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(am,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,t.jsx)(B,{isTable:!0,name:"TopSuppliersByQuoteReturnTable",removeChart:r,title:"Top Suppliers By Quote Return",children:(0,t.jsx)(tt.f,{columns:[{text:"Supplier Name"},{sortable:!0,sortName:"reactive_suppliers",text:"Reactive Amount"},{text:"Day Difference"}],history:!1,initialSort:ap,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({supplierName:e.supplierName,reactiveAmount:e.reactiveAmount,dayDifference:e.dayDifference}))})})});aI.propTypes={filters:eo.object},e.s(["TopSuppliersByQuoteReturnTable",0,aI],467558);let af=_.f`
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
`,ag={item:"reactive_customer",order:"desc"},ah=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:ag}),{data:{topSuppliersByTimeToSubmitJobReport:s,meta:d}={topSuppliersByTimeToSubmitJobReport:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(af,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Supplier Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.amount)}}];return(0,t.jsx)(B,{isTable:!0,name:"TopSuppliersByTimeToSubmitJobReportTable",removeChart:r,title:"Top Suppliers By Time To Submit Job",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:ag,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({supplier_name:e.supplier_name,amount:e.amount}))})})});ah.propTypes={filters:eo.object},e.s(["TopSuppliersByTimeToSubmitJobReportTable",0,ah],548068);var ay=e.i(615198),av=e.i(506656),a$=e.i(659587),ab=e.i(871931),ax=e.i(760981),a_=e.i(302966);let aT=(0,f.forwardRef)((e,a)=>{let n,r,{initialData:i,jobs:o=[]}=e;return(0,b.default)(C.default),(0,t.jsxs)(ab.f,{children:[(0,t.jsx)(a_.f,{expandIcon:(0,t.jsx)(a$.default,{}),children:"Total cost of ownership"}),(0,t.jsx)(ax.f,{children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:(r=(e=>{let{acquisitionCost:t,datePutInService:a,maintenanceSpend:n,residualValue:r,usefulLife:i}=e,o=parseInt(n)/12,s=(0,E.f)(new Date(a),"MMMM yyyy");return Array(parseInt(i)+1).fill({}).map((e,n)=>0===n?{name:s,y:(0,av.f)(parseInt(t),2)}:n+1===parseInt(i)+1?{name:(0,E.f)((0,ay.f)(new Date(a),n),"MMMM yyyy"),y:(0,av.f)(n*o+parseInt(t)-parseInt(r),2)}:{name:(0,E.f)((0,ay.f)(new Date(a),n),"MMMM yyyy"),y:(0,av.f)(n*o+parseInt(t),2)})})(i),n=[],o.map(async e=>{let t=(0,E.f)(new Date(e.scheduledAt?e.scheduledAt:e.timingStart),"yyyy dd MMM");e.meta?.customerVATInvoice&&n.push({name:t,y:e.meta?.customerVATInvoice.expensesInfo.expensesTotal})}),{chart:{type:"line",zoomType:"x"},title:{text:"TCO"},series:[{data:r,showInLegend:!1},{data:Object.keys(n).map(e=>({name:e,y:n[e]})),name:"Total Costs ",showInLegend:!1,type:"column",visible:!1}],xAxis:{type:"category",title:null},yAxis:{title:{text:"£"}}}),ref:a})})]})});e.s(["TotalCostOfOwnershipChart",0,aT],396753);let aC=_.f`
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
`,aw=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{averageJobLength:i}={averageJobLength:[]}}=(0,x.t)(aC,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"TotalJobRevenueChart",removeChart:r,title:"Total Job Revenue",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Amounts(£)"}},series:[{data:i.map(e=>({name:(0,E.f)(new Date(e.date),"yyyy dd MMM"),y:e.avg||0})),name:"Revenue",showInLegend:!1}]},ref:a})})});e.s(["TotalJobRevenueChart",0,aw],180779);let aj=_.f`
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
`,aA=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{totalQuoteInvoiceSent:i}={totalQuoteInvoiceSent:[]}}=(0,x.t)(aj,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"totalQuoteInvoiceSent",removeChart:r,title:"Total Quote Invoice Sent By Date",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}},series:[{name:"count",data:i.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.count})),showInLegend:!1}]},ref:a})})});e.s(["TotalQuoteInvoiceSent",0,aA],692976);let aS=_.f`
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
`,aD=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{data:{totalQuoteReportSend:i}={totalQuoteReportSend:[]}}=(0,x.t)(aS,{variables:{adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}});return(0,b.default)(C.default),i&&(0,t.jsx)(B,{name:"TotalQuoteReportSent",removeChart:r,title:"Total Quote Report Sent by Date",children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"line",zoomType:"x"},title:{text:null},xAxis:{type:"category",title:null},yAxis:{title:{text:"Counts"}},series:[{name:"count",data:i.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.count})),showInLegend:!1}]},ref:a})})});e.s(["TotalQuoteReportSend",0,aD],775991);let aP=_.f`
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
`,aO=eu.f,aF=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(aO,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(aO,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsx)(R.f,{direction:"row",justifyContent:"space-between",children:(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},aR=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{totalQuoteSent:u}={totalQuoteSent:[]}}=(0,x.t)(aP,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,customerId:o.customerId?.value,endTime:o.endDate,locationId:o.locationId?.value,managerId:o.managerId?.value,serviceId:o.serviceId?.value,startTime:o.startDate,supplierId:o.supplierId?.value}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"TotalQuoteSentChart",removeChart:n,title:"Number Of Quotes",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(aF,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},xAxis:{type:"category",title:null},yAxis:{title:{text:"Count"}},series:[{name:"Count, quotes",data:u.map(e=>({name:(0,E.f)(new Date(e.jobDate),"dd LLL yyyy"),y:e.count})),showInLegend:!1,color:"#1E88E5"}]},ref:a})})});e.s(["TotalQuoteSentChart",0,aR],947082);let aB=_.f`
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
`,az={item:"reactive_customer",order:"desc"},aL=(0,f.forwardRef)((e,a)=>{let{filters:n,removeChart:r}=e,{initialData:i,ref:o}=(0,ta.f)({filters:n,initialSort:az}),{data:{worstCustomersByAgedReceivables:s,meta:d}={worstCustomersByAgedReceivables:[],meta:{aggregate:{}}},loading:l,refetch:u}=(0,x.t)(aB,{variables:{...i,adminId:n.adminId,customerId:n.customerId,endTime:n.endDate,isFixed:n.isFixed,isPlanned:n.isPlanned,locationId:n.locationId,managerId:n.managerId,postCodeAreaId:n.postCodeAreaId,serviceId:n.serviceId,slaId:n.slaId,startTime:n.startDate,supplierId:n.supplierId}}),c=[{text:"Customer Name"},{sortable:!0,sortName:"reactive_customer",text:"Amount",formatter:e=>{let{row:t}=e;return(0,tn.f)(t.amount)}}];return(0,t.jsx)(B,{isTable:!0,name:"WorstCustomersByAgedReceivablesTable",removeChart:r,title:"Worst Customers By Aged Receivables",children:(0,t.jsx)(tt.f,{columns:c,history:!1,initialSort:az,loading:l,meta:d,ref:o,refetch:u,rows:s.map(e=>({customer_name:e.customer_name,amount:e.amount}))})})});aL.propTypes={filters:eo.object},e.s(["WorstCustomersByAgedReceivablesTable",0,aL],224832);let aM=_.f`
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
`,ak=eu.f,aE=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(ak,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(ak,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"slaId",type:"sla",control:o}),(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})]}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},aH=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{slaBreachCount:u}={slaBreachCount:[]}}=(0,x.t)(aM,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,customerId:o.customerId?.value,endTime:o.endDate,locationId:o.locationId?.value,managerId:o.managerId?.value,serviceId:o.serviceId?.value,slaId:o.slaId?.value,startTime:o.startDate,supplierId:o.supplierId?.value}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"SlaBreachCountChart",removeChart:n,title:"SLA Breach (Count)",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(aE,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column"},title:{text:null},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},series:[{name:"Count, jobs",data:u.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Count"}}},ref:a})})});e.s(["SlaBreachCountChart",0,aH],747800);let aN=_.f`
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
`,aW=eu.f,aq=e=>{let{setFilters:a,initialFilters:n,filters:r}=e,{user:i}=(0,ea.f)(),{control:o,errors:s,handleSubmit:d,register:l,reset:u,watch:c}=(0,en.G)({defaultValues:{...r}}),m={errors:s,register:l,control:o,reset:u,filters:r},p=c("intervals");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("form",{onSubmit:d(e=>{let t="custom"===e.intervals?{startDate:e.startDate,endDate:e.endDate,intervals:e.intervals}:v(e.intervals),n=i.accountId,r=i.accountType;a({...t,...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:n,accountType:r}),...{customerId:e.customerId,locationId:e.locationId,serviceId:e.serviceId,slaId:e.slaId,supplierId:e.supplierId,managerId:e.managerId}})}),children:(0,t.jsxs)(R.f,{children:[(0,t.jsx)(ef,{sx:{mt:1,mb:.5},control:o,name:"intervals",options:y,variant:"standard"}),"custom"===p&&(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(aW,{...m,name:"startDate",placeholder:"Start Date"})}),(0,t.jsx)(G.f,{sx:{mt:2,width:"45%"},children:(0,t.jsx)(aW,{...m,name:"endDate",placeholder:"End Date"})})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"customerId",type:"customer",control:o,textFieldValue:!0,setTextFieldValue:!0}),(0,t.jsx)(el,{...m,name:"supplierId",type:"supplier",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"locationId",type:"property",control:o}),(0,t.jsx)(el,{...m,name:"serviceId",type:"service",control:o})]}),(0,t.jsxs)(R.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(el,{...m,name:"slaId",type:"sla",control:o}),(0,t.jsx)(el,{...m,name:"managerId",type:"user",control:o})]}),(0,t.jsxs)(R.f,{mt:10,spacing:2,direction:"row",justifyContent:"flex-end",children:[(0,t.jsx)(er.f,{onClick:()=>{u({initialFilters:n}),a(n)},variant:"outlined",style:{textTransform:"none"},children:"Reset filters"}),(0,t.jsx)(er.f,{type:"submit",variant:"contained",style:{textTransform:"none"},children:"Apply"})]})]})})})},aJ=(0,f.forwardRef)((e,a)=>{let{removeChart:n}=e,{user:r}=(0,ea.f)(),i={...v(y.find(e=>e.default).value),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:r.accountId,accountType:r.accountType,customerId:null,supplierId:null,locationId:null,serviceId:null,slaId:null,managerId:null})},[o,s]=(0,f.useState)(i),[d,l]=(0,f.useState)(!1),{data:{slaBreachPercentage:u}={slaBreachPercentage:[]}}=(0,x.t)(aN,{onCompleted:()=>{l(!1)},variables:{adminId:o.adminId,customerId:o.customerId?.value,endTime:o.endDate,locationId:o.locationId?.value,managerId:o.managerId?.value,serviceId:o.serviceId?.value,slaId:o.slaId?.value,startTime:o.startDate,supplierId:o.supplierId?.value}});return(0,b.default)(C.default),u&&(0,t.jsx)(ee,{name:"SlaBreachPercentageChart",removeChart:n,title:"SLA Breach (Percentage)",openModal:d,setOpenModal:l,filtersComponent:(0,t.jsx)(aq,{filters:o,initialFilters:i,setFilters:s}),activeFiltersComponent:(0,t.jsx)(eb,{filters:o}),children:(0,t.jsx)(w.default,{callback:e=>{e.reflow()},constructorType:"chart",Highcharts:C.default,options:{chart:{type:"column"},exporting:{buttons:{contextButton:{align:"right",x:0,y:5,verticalAlign:"top",symbol:"menuball"}}},title:{text:null},series:[{name:"%",data:u.map(e=>({name:(0,E.f)(new Date(e.date),"dd LLL yyyy"),y:e.avg||0})),showInLegend:!1,color:"#1E88E5"}],xAxis:{type:"category",title:null},yAxis:{title:{text:"Percentage"}}},ref:a})})});e.s(["SlaBreachPercentageChart",0,aJ],21364),e.i(845966),e.i(581928),e.i(965507),e.i(134800),e.i(240033),e.i(545741),e.i(96722),e.i(277431),e.i(777390),e.i(738056),e.i(163396),e.i(932347),e.i(34831),e.i(607499),e.i(929147),e.i(368557),e.i(518665),e.i(673255),e.i(108603),e.i(810483),e.i(9762),e.i(90670),e.i(408233),e.i(97806),e.i(310791),e.i(35348),e.i(711835),e.i(469845),e.i(366964),e.i(175417),e.i(120247),e.i(313910),e.i(220690),e.i(495466),e.i(822015),e.i(806897),e.i(468776),e.i(255787),e.i(657830),e.i(897568),e.i(654063),e.i(465607),e.i(451508),e.i(533010),e.i(467558),e.i(548068),e.i(396753),e.i(180779),e.i(692976),e.i(775991),e.i(947082),e.i(224832),e.i(747800),e.i(21364),e.s(["SlaBreachPercentageChart",0,aJ],520419),e.i(520419),e.s(["AverageAllocationTime",0,z,"AverageDaysOutstandingChart",0,H,"AverageJobLengthChart",0,e_,"AverageJobRevenueChart",0,eS,"AverageProfitChart",0,eF,"AverageQuoteValueChart",0,eL,"AverageTimeToAcceptByMinuteChart",0,eH,"AverageTimeToAttendanceChart",0,eW,"AverageTimeToSubmitJobReportChart",0,eJ,"AverageToCloseByHourChart",0,eY,"AvgPriceChart",0,eP,"CountByActiveAccountChart",0,eX,"CountJobsEngagementRateChart",0,eZ,"CountOpenJobsByDateChart",0,e1,"CustomerAndSupplierAmounts",0,e6,"CustomerDebtTable",0,td,"DisputeRateChart",0,tu,"JobSLAByMonth",0,tT,"JobsByDayLineChart",0,tm,"JobsByMonth",0,tI,"JobsByService",0,tg,"JobsByStatusPieChart",0,t$,"JobsFinancialByDayLineChart",0,tx,"LateAttendanceBySupplierChart",0,M,"NewCustomerAccountsChart",0,tw,"NewSupplierAccountsChart",0,tO,"PercentageOfSpendByServiceLineTable",0,tB,"PercentageOfWorkOrdersByServiceLineTable",0,tM,"QuoteAcceptanceRateChart",0,tD,"ReactiveAmountByMonth",0,tE,"ReactiveBySLA",0,tN,"SlaBreachCountChart",0,aH,"SlaBreachPercentageChart",0,aJ,"SpendByCoverageAreaTable",0,tJ,"SpendFromNewCustomerAccountsChart",0,tV,"SumQuoteAccepted",0,tY,"SumQuoteSent",0,tX,"SupplierDebtTable",0,t1,"TopAssetTypesBySpendTable",0,ae,"TopAssetsByNumberOfJobsTable",0,t2,"TopAssetsBySpendTable",0,t4,"TopCustomersByNumberOfPropertiesTable",0,an,"TopCustomersByProfitChart",0,ai,"TopPropertiesBySpendTable",0,ad,"TopSuppliersByNumberOfJobsTable",0,ac,"TopSuppliersByQuoteReturnTable",0,aI,"TopSuppliersByTimeToSubmitJobReportTable",0,ah,"TotalCostOfOwnershipChart",0,aT,"TotalJobRevenueChart",0,aw,"TotalQuoteInvoiceSent",0,aA,"TotalQuoteReportSend",0,aD,"TotalQuoteSentChart",0,aR,"WorstCustomersByAgedReceivablesTable",0,aL,"jobsBySLA",0,ty],998533);var aG=e.i(998533),aV=e.i(498681),aQ=e.i(799083),aY=e.i(152078);let aU=e=>{let a,{layout:n,setLayout:r,onSuccess:i}=e,o=(0,aV.f)(),{control:s,handleSubmit:d}=(0,en.G)({defaultValues:(a={},n?.lg?.map(e=>a={...a,[e.i]:!0}),a)}),l=o.admin?.availableCharts||[];return(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:d(e=>{r({lg:(e=>{let{newLayout:t,preLayout:a}=e,{lg:n=[]}=a,r=n.filter(e=>t[e.i]),i=Object.keys(t).map(e=>({name:e,status:!!t[e]})).filter(e=>!r.find(t=>t.i===e.name)).filter(e=>e.status).map(e=>({i:e.name,w:4,h:4,x:0,y:0,minW:4,maxW:12,minH:4,maxH:4}));return[...r,...i]})({newLayout:e,preLayout:n})}),i()}),children:l.map(e=>(0,t.jsx)(S.f,{variant:"outlined",style:{marginBottom:"5px"},children:(0,t.jsx)(D.f,{children:(0,t.jsx)(R.f,{children:(0,t.jsx)(en.e,{control:s,name:e.value,render:a=>{let{value:n,onChange:r}=a;return(0,t.jsx)(aY.f,{label:e.label,control:(0,t.jsx)(aQ.f,{checked:n,color:"secondary",onChange:e=>r(e.target?.checked)})})}})})})},e.value))})};var aX=e.i(411331);let aK=(0,f.memo)(e=>{let a,{category:n,supplierId:r=null,locationId:i=null}=e,o=(0,g.WidthProvider)(g.Responsive),s=(0,aX.f)(),{user:d}=(0,ea.f)(),l=(0,f.useRef)([]),u=y.find(e=>e.default),c={...(a=new Date,{startDate:(0,h.f)(a,u.value),endDate:a}),...(e=>{let{accountId:t,accountType:a}=e;return"admin"===a?{adminId:t}:{accountId:t}})({accountId:d.accountId,accountType:d.accountType}),locationId:i,supplierId:r},[m]=(0,f.useState)(c),[p,v]=(0,f.useState)(()=>{let e=window.localStorage.getItem(`dashboardNewLayout_${n}`)||"";return e?JSON.parse(e):I[n]}),b=async e=>{window.localStorage.setItem(`dashboardNewLayout_${n}`,JSON.stringify(e))},x=e=>{v(e),window.localStorage.setItem(`dashboardNewLayout_${n}`,JSON.stringify(e))},_=()=>{s.close()};return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(e$.f,{container:!0,spacing:2,children:[(0,t.jsxs)(e$.f,{item:!0,md:6,p:0,children:[(0,t.jsx)(er.f,{variant:"contained",color:"info",onClick:()=>{window.localStorage.removeItem(`dashboardNewLayout_${n}`),v(I[n])},sx:{alignSelf:"flex-end",marginRight:"10px"},children:"Reset Layout"}),(0,t.jsx)(er.f,{variant:"contained",color:"secondary",onClick:()=>{s.show({content:(0,t.jsx)(aU,{layout:p,setLayout:x,onSuccess:_,category:n}),submit:!0,title:"View charts list"})},sx:{alignSelf:"flex-end"},children:"Add charts"})]}),(0,t.jsx)(e$.f,{item:!0,md:12,children:(0,t.jsx)(o,{breakpoints:{lg:1200,sm:768},cols:{lg:12,sm:6},className:"layout",draggableHandle:".dragHandle",layouts:p,onLayoutChange:(e,t)=>b(t),onResizeStop:(e,t)=>{let a=e.findIndex(e=>e.i===t.i),n=l.current[a]?.chart,r=l.current[a]?.container.current;if(n&&r?.parentElement){let{clientHeight:e,clientWidth:t}=r.parentElement;n.setSize(t,e)}},children:p?.lg?.filter(e=>aG[e.i]).map((e,a)=>{let r=aG[e.i];return(0,t.jsx)("div",{"data-key":e.i,children:(0,t.jsx)(r,{filters:m,ref:e=>l.current[a]=e,removeChart:(e,t)=>{let a;v(a={lg:$.reject(p.lg,{i:t})}),window.localStorage.setItem(`dashboardNewLayout_${n}`,JSON.stringify(a))}})},e.i)})})})]})})},(e,t)=>!0);var aZ=e.i(388866),a0=e.i(715007);let a1=()=>{let e=(0,n.useRouter)(),a=e.query?.category?.toString(),r=a&&I[a]?a:"overview";return(0,t.jsxs)(e$.f,{container:!0,spacing:2,children:[(0,t.jsx)(e$.f,{item:!0,md:1,children:(0,t.jsx)(aZ.f,{sx:{padding:0},children:(0,t.jsx)(a0.f,{sx:{pl:1,pr:1},children:(0,t.jsx)(e7.f,{href:"/dashboard/data/business?category=overview",children:"Overview"})})})}),(0,t.jsx)(e$.f,{item:!0,md:10,children:(0,t.jsx)(aK,{category:r})},r)]})};e.s(["default",0,()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.f,{mb:2,variant:"h5",children:"Data - Charts"}),(0,t.jsx)(a1,{})]})],459971)}],960606,(e,t,a)=>{let n="/dashboard/data/business";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(459971)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},899164,(e,t,a)=>{"u">typeof self?self:e.e,t.exports=function(e,t){var a=[function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),i=a.n(r),o=a(2),s=a.n(o),d="u">typeof window?r.useLayoutEffect:r.useEffect,l=Object(r.forwardRef)(function(e,t){var a=Object(r.useRef)(),o=Object(r.useRef)();return d(function(){function t(){var t=e.highcharts||s.a,n=e.constructorType||"chart";t?t[n]?e.options?o.current=t[n](a.current,e.options,e.callback?e.callback:void 0):console.warn('The "options" property was not passed.'):console.warn('The "constructorType" property is incorrect or some required module is not imported.'):console.warn('The "highcharts" property was not passed.')}if(o.current){if(!1!==e.allowChartUpdate)if(!e.immutable&&o.current){var n,r;(n=o.current).update.apply(n,[e.options].concat(function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(r=e.updateArgs||[!0,!0])||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance")}()))}else t()}else t()}),d(function(){return function(){o.current&&(o.current.destroy(),o.current=null)}},[]),Object(r.useImperativeHandle)(t,function(){return{get chart(){return o.current},container:a}},[]),i.a.createElement("div",n({},e.containerProps,{ref:a}))});t.default=Object(r.memo)(l)},function(t,a){t.exports=e},function(e,a){e.exports=t}];function n(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var r={};return n.m=a,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}(e.r(191788),e.r(498981))},712663,(e,t,a)=>{var n,r;n=function(e){"use strict";var t=e?e._modules:{};function a(t,a,n,r){t.hasOwnProperty(a)||(t[a]=r.apply(null,n),"function"==typeof CustomEvent&&e.win.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:a,module:t[a]}})))}a(t,"Core/Chart/ChartNavigationComposition.js",[],function(){var e;return function(e){e.compose=function(e){return e.navigation||(e.navigation=new t(e)),e};class t{constructor(e){this.updates=[],this.chart=e}addUpdate(e){this.chart.navigation.updates.push(e)}update(e,t){this.updates.forEach(a=>{a.call(this.chart,e,t)})}}e.Additions=t}(e||(e={})),e}),a(t,"Extensions/Exporting/ExportingDefaults.js",[t["Core/Globals.js"]],function(e){let{isTouchDevice:t}=e;return{exporting:{allowTableSorting:!0,type:"image/png",url:"https://export.highcharts.com/",pdfFont:{normal:void 0,bold:void 0,bolditalic:void 0,italic:void 0},printMaxWidth:780,scale:2,buttons:{contextButton:{className:"highcharts-contextbutton",menuClassName:"highcharts-contextmenu",symbol:"menu",titleKey:"contextButtonTitle",menuItems:["viewFullscreen","printChart","separator","downloadPNG","downloadJPEG","downloadPDF","downloadSVG"]}},menuItemDefinitions:{viewFullscreen:{textKey:"viewFullscreen",onclick:function(){this.fullscreen&&this.fullscreen.toggle()}},printChart:{textKey:"printChart",onclick:function(){this.print()}},separator:{separator:!0},downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChart()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChart({type:"image/jpeg"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChart({type:"application/pdf"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChart({type:"image/svg+xml"})}}}},lang:{viewFullscreen:"View in full screen",exitFullscreen:"Exit from full screen",printChart:"Print chart",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",contextButtonTitle:"Chart context menu"},navigation:{buttonOptions:{symbolSize:14,symbolX:14.5,symbolY:13.5,align:"right",buttonSpacing:3,height:28,verticalAlign:"top",width:28,symbolFill:"#666666",symbolStroke:"#666666",symbolStrokeWidth:3,theme:{fill:"#ffffff",padding:5,stroke:"none","stroke-linecap":"round"}},menuStyle:{border:"none",borderRadius:"3px",background:"#ffffff",padding:"0.5em"},menuItemStyle:{background:"none",borderRadius:"3px",color:"#333333",padding:"0.5em",fontSize:t?"0.9em":"0.8em",transition:"background 250ms, color 250ms"},menuItemHoverStyle:{background:"#f2f2f2"}}}}),a(t,"Extensions/Exporting/ExportingSymbols.js",[],function(){var e;return function(e){let t=[];function a(e,t,a,n){return[["M",e,t+2.5],["L",e+a,t+2.5],["M",e,t+n/2+.5],["L",e+a,t+n/2+.5],["M",e,t+n-1.5],["L",e+a,t+n-1.5]]}function n(e,t,a,n){let r=n/3-2;return[].concat(this.circle(a-r,t,r,r),this.circle(a-r,t+r+4,r,r),this.circle(a-r,t+2*(r+4),r,r))}e.compose=function(e){if(-1===t.indexOf(e)){t.push(e);let r=e.prototype.symbols;r.menu=a,r.menuball=n.bind(r)}}}(e||(e={})),e}),a(t,"Extensions/Exporting/Fullscreen.js",[t["Core/Renderer/HTML/AST.js"],t["Core/Globals.js"],t["Core/Utilities.js"]],function(e,t,a){let{composed:n}=t,{addEvent:r,fireEvent:i,pushUnique:o}=a;function s(){this.fullscreen=new d(this)}class d{static compose(e){o(n,"Fullscreen")&&r(e,"beforeRender",s)}constructor(e){this.chart=e,this.isOpen=!1;let t=e.renderTo;!this.browserProps&&("function"==typeof t.requestFullscreen?this.browserProps={fullscreenChange:"fullscreenchange",requestFullscreen:"requestFullscreen",exitFullscreen:"exitFullscreen"}:t.mozRequestFullScreen?this.browserProps={fullscreenChange:"mozfullscreenchange",requestFullscreen:"mozRequestFullScreen",exitFullscreen:"mozCancelFullScreen"}:t.webkitRequestFullScreen?this.browserProps={fullscreenChange:"webkitfullscreenchange",requestFullscreen:"webkitRequestFullScreen",exitFullscreen:"webkitExitFullscreen"}:t.msRequestFullscreen&&(this.browserProps={fullscreenChange:"MSFullscreenChange",requestFullscreen:"msRequestFullscreen",exitFullscreen:"msExitFullscreen"}))}close(){let e=this,t=e.chart,a=t.options.chart;i(t,"fullscreenClose",null,function(){e.isOpen&&e.browserProps&&t.container.ownerDocument instanceof Document&&t.container.ownerDocument[e.browserProps.exitFullscreen](),e.unbindFullscreenEvent&&(e.unbindFullscreenEvent=e.unbindFullscreenEvent()),t.setSize(e.origWidth,e.origHeight,!1),e.origWidth=void 0,e.origHeight=void 0,a.width=e.origWidthOption,a.height=e.origHeightOption,e.origWidthOption=void 0,e.origHeightOption=void 0,e.isOpen=!1,e.setButtonText()})}open(){let e=this,t=e.chart,a=t.options.chart;i(t,"fullscreenOpen",null,function(){if(a&&(e.origWidthOption=a.width,e.origHeightOption=a.height),e.origWidth=t.chartWidth,e.origHeight=t.chartHeight,e.browserProps){let a=r(t.container.ownerDocument,e.browserProps.fullscreenChange,function(){e.isOpen?(e.isOpen=!1,e.close()):(t.setSize(null,null,!1),e.isOpen=!0,e.setButtonText())}),n=r(t,"destroy",a);e.unbindFullscreenEvent=()=>{a(),n()};let i=t.renderTo[e.browserProps.requestFullscreen]();i&&i.catch(function(){alert("Full screen is not supported inside a frame.")})}})}setButtonText(){let t=this.chart,a=t.exportDivElements,n=t.options.exporting,r=n&&n.buttons&&n.buttons.contextButton.menuItems,i=t.options.lang;if(n&&n.menuItemDefinitions&&i&&i.exitFullscreen&&i.viewFullscreen&&r&&a){let t=a[r.indexOf("viewFullscreen")];t&&e.setElementHTML(t,this.isOpen?i.exitFullscreen:n.menuItemDefinitions.viewFullscreen.text||i.viewFullscreen)}}toggle(){this.isOpen?this.close():this.open()}}return d}),a(t,"Core/HttpUtilities.js",[t["Core/Globals.js"],t["Core/Utilities.js"]],function(e,t){let{win:a}=e,{discardElement:n,objectEach:r}=t,i={ajax:function(e){let t={json:"application/json",xml:"application/xml",text:"text/plain",octet:"application/octet-stream"},a=new XMLHttpRequest;function n(t,a){e.error&&e.error(t,a)}if(!e.url)return!1;a.open((e.type||"get").toUpperCase(),e.url,!0),e.headers&&e.headers["Content-Type"]||a.setRequestHeader("Content-Type",t[e.dataType||"json"]||t.text),r(e.headers,function(e,t){a.setRequestHeader(t,e)}),e.responseType&&(a.responseType=e.responseType),a.onreadystatechange=function(){let t;if(4===a.readyState){if(200===a.status){if("blob"!==e.responseType&&(t=a.responseText,"json"===e.dataType))try{t=JSON.parse(t)}catch(e){if(e instanceof Error)return n(a,e)}return e.success&&e.success(t,a)}n(a,a.responseText)}},e.data&&"string"!=typeof e.data&&(e.data=JSON.stringify(e.data)),a.send(e.data)},getJSON:function(e,t){i.ajax({url:e,success:t,dataType:"json",headers:{"Content-Type":"text/plain"}})},post:function(e,t,i){let o=new a.FormData;r(t,function(e,t){o.append(t,e)}),o.append("b64","true");let{filename:s,type:d}=t;return a.fetch(e,{method:"POST",body:o,...i}).then(e=>{e.ok&&e.text().then(e=>{let t=document.createElement("a");t.href=`data:${d};base64,${e}`,t.download=s,t.click(),n(t)})})}};return i}),a(t,"Extensions/Exporting/Exporting.js",[t["Core/Renderer/HTML/AST.js"],t["Core/Chart/Chart.js"],t["Core/Chart/ChartNavigationComposition.js"],t["Core/Defaults.js"],t["Extensions/Exporting/ExportingDefaults.js"],t["Extensions/Exporting/ExportingSymbols.js"],t["Extensions/Exporting/Fullscreen.js"],t["Core/Globals.js"],t["Core/HttpUtilities.js"],t["Core/Utilities.js"]],function(e,t,a,n,r,i,o,s,d,l){var u;let{defaultOptions:c}=n,{doc:m,SVG_NS:p,win:I}=s,{addEvent:f,css:g,createElement:h,discardElement:y,extend:v,find:$,fireEvent:b,isObject:x,merge:_,objectEach:T,pick:C,removeEvent:w,uniqueKey:j}=l;return function(t){let n,u=[/-/,/^(clipPath|cssText|d|height|width)$/,/^font$/,/[lL]ogical(Width|Height)$/,/^parentRule$/,/^(cssRules|ownerRules)$/,/perspective/,/TapHighlightColor/,/^transition/,/^length$/,/^\d+$/],A=["fill","stroke","strokeLinecap","strokeLinejoin","strokeWidth","textAnchor","x","y"];t.inlineAllowlist=[];let S=["clipPath","defs","desc"];function D(e){let t,a,n=this,r=n.renderer,i=_(n.options.navigation.buttonOptions,e),o=i.onclick,s=i.menuItems,d=i.symbolSize||12;if(n.btnCount||(n.btnCount=0),n.exportDivElements||(n.exportDivElements=[],n.exportSVGElements=[]),!1===i.enabled||!i.theme)return;let l=n.styledMode?{}:i.theme;o?a=function(e){e&&e.stopPropagation(),o.call(n,e)}:s&&(a=function(e){e&&e.stopPropagation(),n.contextMenu(u.menuClassName,s,u.translateX||0,u.translateY||0,u.width||0,u.height||0,u),u.setState(2)}),i.text&&i.symbol?l.paddingLeft=C(l.paddingLeft,30):i.text||v(l,{width:i.width,height:i.height,padding:0});let u=r.button(i.text,0,0,a,l,void 0,void 0,void 0,void 0,i.useHTML).addClass(e.className).attr({title:C(n.options.lang[i._titleKey||i.titleKey],"")});u.menuClassName=e.menuClassName||"highcharts-menu-"+n.btnCount++,i.symbol&&(t=r.symbol(i.symbol,Math.round((i.symbolX||0)-d/2),Math.round((i.symbolY||0)-d/2),d,d,{width:d,height:d}).addClass("highcharts-button-symbol").attr({zIndex:1}).add(u),n.styledMode||t.attr({stroke:i.symbolStroke,fill:i.symbolFill,"stroke-width":i.symbolStrokeWidth||1})),u.add(n.exportingGroup).align(v(i,{width:u.width,x:C(i.x,n.buttonOffset)}),!0,"spacingBox"),n.buttonOffset+=((u.width||0)+i.buttonSpacing)*("right"===i.align?-1:1),n.exportSVGElements.push(u,t)}function P(){if(!this.printReverseInfo)return;let{childNodes:e,origDisplay:t,resetParams:a}=this.printReverseInfo;this.moveContainers(this.renderTo),[].forEach.call(e,function(e,a){1===e.nodeType&&(e.style.display=t[a]||"")}),this.isPrinting=!1,a&&this.setSize.apply(this,a),delete this.printReverseInfo,n=void 0,b(this,"afterPrint")}function O(){let e=m.body,t=this.options.exporting.printMaxWidth,a={childNodes:e.childNodes,origDisplay:[],resetParams:void 0};this.isPrinting=!0,this.pointer?.reset(void 0,0),b(this,"beforePrint"),t&&this.chartWidth>t&&(a.resetParams=[this.options.chart.width,void 0,!1],this.setSize(t,void 0,!1)),[].forEach.call(a.childNodes,function(e,t){1===e.nodeType&&(a.origDisplay[t]=e.style.display,e.style.display="none")}),this.moveContainers(e),this.printReverseInfo=a}function F(e){e.renderExporting(),f(e,"redraw",e.renderExporting),f(e,"destroy",e.destroyExport)}function R(t,a,n,r,i,o,s){let d=this,u=d.options.navigation,c=d.chartWidth,p=d.chartHeight,y="cache-"+t,$=Math.max(i,o),_,T=d[y];T||(d.exportContextMenu=d[y]=T=h("div",{className:t},{position:"absolute",zIndex:1e3,padding:$+"px",pointerEvents:"auto",...d.renderer.style},d.scrollablePlotArea?.fixedDiv||d.container),_=h("ul",{className:"highcharts-menu"},d.styledMode?{}:{listStyle:"none",margin:0,padding:0},T),d.styledMode||g(_,v({MozBoxShadow:"3px 3px 10px #888",WebkitBoxShadow:"3px 3px 10px #888",boxShadow:"3px 3px 10px #888"},u.menuStyle)),T.hideMenu=function(){g(T,{display:"none"}),s&&s.setState(0),d.openMenu=!1,g(d.renderTo,{overflow:"hidden"}),g(d.container,{overflow:"hidden"}),l.clearTimeout(T.hideTimer),b(d,"exportMenuHidden")},d.exportEvents.push(f(T,"mouseleave",function(){T.hideTimer=I.setTimeout(T.hideMenu,500)}),f(T,"mouseenter",function(){l.clearTimeout(T.hideTimer)}),f(m,"mouseup",function(e){d.pointer?.inClass(e.target,t)||T.hideMenu()}),f(T,"click",function(){d.openMenu&&T.hideMenu()})),a.forEach(function(t){if("string"==typeof t&&(t=d.options.exporting.menuItemDefinitions[t]),x(t,!0)){let a;t.separator?a=h("hr",void 0,void 0,_):("viewData"===t.textKey&&d.isDataTableVisible&&(t.textKey="hideData"),a=h("li",{className:"highcharts-menu-item",onclick:function(e){e&&e.stopPropagation(),T.hideMenu(),"string"!=typeof t&&t.onclick&&t.onclick.apply(d,arguments)}},void 0,_),e.setElementHTML(a,t.text||d.options.lang[t.textKey]),d.styledMode||(a.onmouseover=function(){g(this,u.menuItemHoverStyle)},a.onmouseout=function(){g(this,u.menuItemStyle)},g(a,v({cursor:"pointer"},u.menuItemStyle||{})))),d.exportDivElements.push(a)}}),d.exportDivElements.push(_,T),d.exportMenuWidth=T.offsetWidth,d.exportMenuHeight=T.offsetHeight);let C={display:"block"};n+(d.exportMenuWidth||0)>c?C.right=c-n-i-$+"px":C.left=n-$+"px",r+o+(d.exportMenuHeight||0)>p&&s.alignOptions?.verticalAlign!=="top"?C.bottom=p-r-$+"px":C.top=r+o-$+"px",g(T,C),g(d.renderTo,{overflow:""}),g(d.container,{overflow:""}),d.openMenu=!0,b(d,"exportMenuShown")}function B(e){let t,a=e?e.target:this,n=a.exportSVGElements,r=a.exportDivElements,i=a.exportEvents;n&&(n.forEach((e,r)=>{e&&(e.onclick=e.ontouchstart=null,a[t="cache-"+e.menuClassName]&&delete a[t],n[r]=e.destroy())}),n.length=0),a.exportingGroup&&(a.exportingGroup.destroy(),delete a.exportingGroup),r&&(r.forEach(function(e,t){e&&(l.clearTimeout(e.hideTimer),w(e,"mouseleave"),r[t]=e.onmouseout=e.onmouseover=e.ontouchstart=e.onclick=null,y(e))}),r.length=0),i&&(i.forEach(function(e){e()}),i.length=0)}function z(e,t){let a=this.getSVGForExport(e,t);e=_(this.options.exporting,e),d.post(e.url,{filename:e.filename?e.filename.replace(/\//g,"-"):this.getFilename(),type:e.type,width:e.width,scale:e.scale,svg:a},e.fetchOptions)}function L(){return this.styledMode&&this.inlineStyles(),this.container.innerHTML}function M(){let e=this.userOptions.title&&this.userOptions.title.text,t=this.options.exporting.filename;return t?t.replace(/\//g,"-"):("string"==typeof e&&(t=e.toLowerCase().replace(/<\/?[^>]+(>|$)/g,"").replace(/[\s_]+/g,"-").replace(/[^a-z\d\-]/g,"").replace(/^[\-]+/g,"").replace(/[\-]+/g,"-").substr(0,24).replace(/[\-]+$/g,"")),(!t||t.length<5)&&(t="chart"),t)}function k(e){let t,a,n=_(this.options,e);n.plotOptions=_(this.userOptions.plotOptions,e&&e.plotOptions),n.time=_(this.userOptions.time,e&&e.time);let r=h("div",null,{position:"absolute",top:"-9999em",width:this.chartWidth+"px",height:this.chartHeight+"px"},m.body),i=this.renderTo.style.width,o=this.renderTo.style.height,s=n.exporting.sourceWidth||n.chart.width||/px$/.test(i)&&parseInt(i,10)||(n.isGantt?800:600),d=n.exporting.sourceHeight||n.chart.height||/px$/.test(o)&&parseInt(o,10)||400;v(n.chart,{animation:!1,renderTo:r,forExport:!0,renderer:"SVGRenderer",width:s,height:d}),n.exporting.enabled=!1,delete n.data,n.series=[],this.series.forEach(function(e){(a=_(e.userOptions,{animation:!1,enableMouseTracking:!1,showCheckbox:!1,visible:e.visible})).isInternal||n.series.push(a)});let l={};this.axes.forEach(function(e){e.userOptions.internalKey||(e.userOptions.internalKey=j()),e.options.isInternal||(l[e.coll]||(l[e.coll]=!0,n[e.coll]=[]),n[e.coll].push(_(e.userOptions,{visible:e.visible,type:e.type,uniqueNames:e.uniqueNames})))}),n.colorAxis=this.userOptions.colorAxis;let u=new this.constructor(n,this.callback);return e&&["xAxis","yAxis","series"].forEach(function(t){let a={};e[t]&&(a[t]=e[t],u.update(a))}),this.axes.forEach(function(e){let t=$(u.axes,function(t){return t.options.internalKey===e.userOptions.internalKey}),a=e.getExtremes(),n=a.userMin,r=a.userMax;t&&(void 0!==n&&n!==t.min||void 0!==r&&r!==t.max)&&t.setExtremes(n,r,!0,!1)}),t=u.getChartHTML(),b(this,"getSVG",{chartCopy:u}),t=this.sanitizeSVG(t,n),n=null,u.destroy(),y(r),t}function E(e,t){let a=this.options.exporting;return this.getSVG(_({chart:{borderRadius:0}},a.chartOptions,t,{exporting:{sourceWidth:e&&e.sourceWidth||a.sourceWidth,sourceHeight:e&&e.sourceHeight||a.sourceHeight}}))}function H(){let e,a=t.inlineAllowlist,n={},r=m.createElement("iframe");g(r,{width:"1px",height:"1px",visibility:"hidden"}),m.body.appendChild(r);let i=r.contentWindow&&r.contentWindow.document;i&&i.body.appendChild(i.createElementNS(p,"svg")),function t(r){let o,d,l,c,m,p,f={};if(i&&1===r.nodeType&&-1===S.indexOf(r.nodeName)){if(o=I.getComputedStyle(r,null),d="svg"===r.nodeName?{}:I.getComputedStyle(r.parentNode,null),!n[r.nodeName]){e=i.getElementsByTagName("svg")[0],l=i.createElementNS(r.namespaceURI,r.nodeName),e.appendChild(l);let t=I.getComputedStyle(l,null),a={};for(let e in t)e.length<1e3&&"string"==typeof t[e]&&!/^\d+$/.test(e)&&(a[e]=t[e]);n[r.nodeName]=a,"text"===r.nodeName&&delete n.text.fill,e.removeChild(l)}for(let e in o)(s.isFirefox||s.isMS||s.isSafari||Object.hasOwnProperty.call(o,e))&&function(e,t){if(c=m=!1,a.length){for(p=a.length;p--&&!m;)m=a[p].test(t);c=!m}for("transform"===t&&"none"===e&&(c=!0),p=u.length;p--&&!c;){if(t.length>1e3)throw Error("Input too long");c=u[p].test(t)||"function"==typeof e}!c&&(d[t]!==e||"svg"===r.nodeName)&&n[r.nodeName][t]!==e&&(A&&-1===A.indexOf(t)?f[t]=e:e&&r.setAttribute(t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),e))}(o[e],e);if(g(r,f),"svg"===r.nodeName&&r.setAttribute("stroke-width","1px"),"text"===r.nodeName)return;[].forEach.call(r.children||r.childNodes,t)}}(this.container.querySelector("svg")),e.parentNode.removeChild(e),r.parentNode.removeChild(r)}function N(e){let{scrollablePlotArea:t}=this;(t?[t.fixedDiv,t.scrollingContainer]:[this.container]).forEach(function(t){e.appendChild(t)})}function W(){let e=this,t=(t,a,n)=>{e.isDirtyExporting=!0,_(!0,e.options[t],a),C(n,!0)&&e.redraw()};e.exporting={update:function(e,a){t("exporting",e,a)}},a.compose(e).navigation.addUpdate((e,a)=>{t("navigation",e,a)})}function q(){let e=this;e.isPrinting||(n=e,s.isSafari||e.beforePrint(),setTimeout(()=>{I.focus(),I.print(),s.isSafari||setTimeout(()=>{e.afterPrint()},1e3)},1))}function J(){let e=this,t=e.options.exporting,a=t.buttons,n=e.isDirtyExporting||!e.exportSVGElements;e.buttonOffset=0,e.isDirtyExporting&&e.destroyExport(),n&&!1!==t.enabled&&(e.exportEvents=[],e.exportingGroup=e.exportingGroup||e.renderer.g("exporting-group").attr({zIndex:3}).add(),T(a,function(t){e.addButton(t)}),e.isDirtyExporting=!1)}function G(e,t){let a=e.indexOf("</svg>")+6,n=e.substr(a);return e=e.substr(0,a),t&&t.exporting&&t.exporting.allowHTML&&n&&(n='<foreignObject x="0" y="0" width="'+t.chart.width+'" height="'+t.chart.height+'"><body xmlns="http://www.w3.org/1999/xhtml">'+n.replace(/(<(?:img|br).*?(?=\>))>/g,"$1 />")+"</body></foreignObject>",e=e.replace("</svg>",n+"</svg>")),e=e.replace(/zIndex="[^"]+"/g,"").replace(/symbolName="[^"]+"/g,"").replace(/jQuery\d+="[^"]+"/g,"").replace(/url\(("|&quot;)(.*?)("|&quot;)\;?\)/g,"url($2)").replace(/url\([^#]+#/g,"url(#").replace(/<svg /,'<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ (NS\d+\:)?href=/g," xlink:href=").replace(/\n+/g," ").replace(/(fill|stroke)="rgba\(([ \d]+,[ \d]+,[ \d]+),([ \d\.]+)\)"/g,'$1="rgb($2)" $1-opacity="$3"').replace(/&nbsp;/g," ").replace(/&shy;/g,"­")}t.compose=function(e,t){i.compose(t),o.compose(e);let a=e.prototype;a.exportChart||(a.afterPrint=P,a.exportChart=z,a.inlineStyles=H,a.print=q,a.sanitizeSVG=G,a.getChartHTML=L,a.getSVG=k,a.getSVGForExport=E,a.getFilename=M,a.moveContainers=N,a.beforePrint=O,a.contextMenu=R,a.addButton=D,a.destroyExport=B,a.renderExporting=J,a.callbacks.push(F),f(e,"init",W),s.isSafari&&I.matchMedia("print").addListener(function(e){n&&(e.matches?n.beforePrint():n.afterPrint())}),c.exporting=_(r.exporting,c.exporting),c.lang=_(r.lang,c.lang),c.navigation=_(r.navigation,c.navigation))}}(u||(u={})),u}),a(t,"masters/modules/exporting.src.js",[t["Core/Globals.js"],t["Extensions/Exporting/Exporting.js"],t["Core/HttpUtilities.js"]],function(e,t,a){return e.HttpUtilities=e.HttpUtilities||a,e.ajax=e.HttpUtilities.ajax,e.getJSON=e.HttpUtilities.getJSON,e.post=e.HttpUtilities.post,t.compose(e.Chart,e.Renderer),e})},t.exports?(n.default=n,t.exports=n):"function"==typeof define&&define.amd?(n(r=e.r(498981)),n.Highcharts=r,void 0!==n&&e.v(n)):n("u">typeof Highcharts?Highcharts:void 0)},119134,(e,t,a)=>{var n,r,i,o="__lodash_hash_undefined__",s="[object Arguments]",d="[object Array]",l="[object Boolean]",u="[object Date]",c="[object Error]",m="[object Function]",p="[object Map]",I="[object Number]",f="[object Object]",g="[object Promise]",h="[object RegExp]",y="[object Set]",v="[object String]",$="[object WeakMap]",b="[object ArrayBuffer]",x="[object DataView]",_=/^\[object .+?Constructor\]$/,T=/^(?:0|[1-9]\d*)$/,C={};C["[object Float32Array]"]=C["[object Float64Array]"]=C["[object Int8Array]"]=C["[object Int16Array]"]=C["[object Int32Array]"]=C["[object Uint8Array]"]=C["[object Uint8ClampedArray]"]=C["[object Uint16Array]"]=C["[object Uint32Array]"]=!0,C[s]=C[d]=C[b]=C[l]=C[x]=C[u]=C[c]=C[m]=C[p]=C[I]=C[f]=C[h]=C[y]=C[v]=C[$]=!1;var w=e.g&&e.g.Object===Object&&e.g,j="object"==typeof self&&self&&self.Object===Object&&self,A=w||j||Function("return this")(),S=a&&!a.nodeType&&a,D=S&&t&&!t.nodeType&&t,P=D&&D.exports===S,O=P&&w.process,F=function(){try{return O&&O.binding&&O.binding("util")}catch(e){}}(),R=F&&F.isTypedArray;function B(e){var t=-1,a=Array(e.size);return e.forEach(function(e,n){a[++t]=[n,e]}),a}function z(e){var t=-1,a=Array(e.size);return e.forEach(function(e){a[++t]=e}),a}var L=Array.prototype,M=Function.prototype,k=Object.prototype,E=A["__core-js_shared__"],H=M.toString,N=k.hasOwnProperty,W=(n=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",q=k.toString,J=RegExp("^"+H.call(N).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=P?A.Buffer:void 0,V=A.Symbol,Q=A.Uint8Array,Y=k.propertyIsEnumerable,U=L.splice,X=V?V.toStringTag:void 0,K=Object.getOwnPropertySymbols,Z=G?G.isBuffer:void 0,ee=(r=Object.keys,i=Object,function(e){return r(i(e))}),et=eC(A,"DataView"),ea=eC(A,"Map"),en=eC(A,"Promise"),er=eC(A,"Set"),ei=eC(A,"WeakMap"),eo=eC(Object,"create"),es=eA(et),ed=eA(ea),el=eA(en),eu=eA(er),ec=eA(ei),em=V?V.prototype:void 0,ep=em?em.valueOf:void 0;function eI(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}function ef(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}function eg(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var n=e[t];this.set(n[0],n[1])}}function eh(e){var t=-1,a=null==e?0:e.length;for(this.__data__=new eg;++t<a;)this.add(e[t])}function ey(e){var t=this.__data__=new ef(e);this.size=t.size}function ev(e,t){for(var a=e.length;a--;)if(eS(e[a][0],t))return a;return -1}function e$(e){var t;return null==e?void 0===e?"[object Undefined]":"[object Null]":X&&X in Object(e)?function(e){var t=N.call(e,X),a=e[X];try{e[X]=void 0;var n=!0}catch(e){}var r=q.call(e);return n&&(t?e[X]=a:delete e[X]),r}(e):(t=e,q.call(t))}function eb(e){return ez(e)&&e$(e)==s}function ex(e,t,a,n,r,i){var o=1&a,s=e.length,d=t.length;if(s!=d&&!(o&&d>s))return!1;var l=i.get(e);if(l&&i.get(t))return l==t;var u=-1,c=!0,m=2&a?new eh:void 0;for(i.set(e,t),i.set(t,e);++u<s;){var p=e[u],I=t[u];if(n)var f=o?n(I,p,u,t,e,i):n(p,I,u,e,t,i);if(void 0!==f){if(f)continue;c=!1;break}if(m){if(!function(e,t){for(var a=-1,n=null==e?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}(t,function(e,t){if(!m.has(t)&&(p===e||r(p,e,a,n,i)))return m.push(t)})){c=!1;break}}else if(!(p===I||r(p,I,a,n,i))){c=!1;break}}return i.delete(e),i.delete(t),c}function e_(e){var t;return t=eM(e),eP(e)?t:function(e,t){for(var a=-1,n=t.length,r=e.length;++a<n;)e[r+a]=t[a];return e}(t,ew(e))}function eT(e,t){var a,n,r=e.__data__;return("string"==(n=typeof(a=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==a:null===a)?r["string"==typeof t?"string":"hash"]:r.map}function eC(e,t){var a,n=null==e?void 0:e[t];return!(!eB(n)||(a=n,W&&W in a))&&(eF(n)?J:_).test(eA(n))?n:void 0}eI.prototype.clear=function(){this.__data__=eo?eo(null):{},this.size=0},eI.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=!!t,t},eI.prototype.get=function(e){var t=this.__data__;if(eo){var a=t[e];return a===o?void 0:a}return N.call(t,e)?t[e]:void 0},eI.prototype.has=function(e){var t=this.__data__;return eo?void 0!==t[e]:N.call(t,e)},eI.prototype.set=function(e,t){var a=this.__data__;return this.size+=+!this.has(e),a[e]=eo&&void 0===t?o:t,this},ef.prototype.clear=function(){this.__data__=[],this.size=0},ef.prototype.delete=function(e){var t=this.__data__,a=ev(t,e);return!(a<0)&&(a==t.length-1?t.pop():U.call(t,a,1),--this.size,!0)},ef.prototype.get=function(e){var t=this.__data__,a=ev(t,e);return a<0?void 0:t[a][1]},ef.prototype.has=function(e){return ev(this.__data__,e)>-1},ef.prototype.set=function(e,t){var a=this.__data__,n=ev(a,e);return n<0?(++this.size,a.push([e,t])):a[n][1]=t,this},eg.prototype.clear=function(){this.size=0,this.__data__={hash:new eI,map:new(ea||ef),string:new eI}},eg.prototype.delete=function(e){var t=eT(this,e).delete(e);return this.size-=!!t,t},eg.prototype.get=function(e){return eT(this,e).get(e)},eg.prototype.has=function(e){return eT(this,e).has(e)},eg.prototype.set=function(e,t){var a=eT(this,e),n=a.size;return a.set(e,t),this.size+=+(a.size!=n),this},eh.prototype.add=eh.prototype.push=function(e){return this.__data__.set(e,o),this},eh.prototype.has=function(e){return this.__data__.has(e)},ey.prototype.clear=function(){this.__data__=new ef,this.size=0},ey.prototype.delete=function(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a},ey.prototype.get=function(e){return this.__data__.get(e)},ey.prototype.has=function(e){return this.__data__.has(e)},ey.prototype.set=function(e,t){var a=this.__data__;if(a instanceof ef){var n=a.__data__;if(!ea||n.length<199)return n.push([e,t]),this.size=++a.size,this;a=this.__data__=new eg(n)}return a.set(e,t),this.size=a.size,this};var ew=K?function(e){return null==e?[]:function(e,t){for(var a=-1,n=null==e?0:e.length,r=0,i=[];++a<n;){var o=e[a];t(o,a,e)&&(i[r++]=o)}return i}(K(e=Object(e)),function(t){return Y.call(e,t)})}:function(){return[]},ej=e$;function eA(e){if(null!=e){try{return H.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function eS(e,t){return e===t||e!=e&&t!=t}(et&&ej(new et(new ArrayBuffer(1)))!=x||ea&&ej(new ea)!=p||en&&ej(en.resolve())!=g||er&&ej(new er)!=y||ei&&ej(new ei)!=$)&&(ej=function(e){var t=e$(e),a=t==f?e.constructor:void 0,n=a?eA(a):"";if(n)switch(n){case es:return x;case ed:return p;case el:return g;case eu:return y;case ec:return $}return t});var eD=eb(function(){return arguments}())?eb:function(e){return ez(e)&&N.call(e,"callee")&&!Y.call(e,"callee")},eP=Array.isArray,eO=Z||function(){return!1};function eF(e){if(!eB(e))return!1;var t=e$(e);return t==m||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}function eR(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=0x1fffffffffffff}function eB(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ez(e){return null!=e&&"object"==typeof e}var eL=R?function(e){return R(e)}:function(e){return ez(e)&&eR(e.length)&&!!C[e$(e)]};function eM(e){return null!=e&&eR(e.length)&&!eF(e)?function(e){var t,a,n=eP(e),r=!n&&eD(e),i=!n&&!r&&eO(e),o=!n&&!r&&!i&&eL(e),s=n||r||i||o,d=s?function(e,t){for(var a=-1,n=Array(e);++a<e;)n[a]=t(a);return n}(e.length,String):[],l=d.length;for(var u in e){N.call(e,u)&&!(s&&("length"==u||i&&("offset"==u||"parent"==u)||o&&("buffer"==u||"byteLength"==u||"byteOffset"==u)||(t=u,(a=null==(a=l)?0x1fffffffffffff:a)&&("number"==typeof t||T.test(t))&&t>-1&&t%1==0&&t<a)))&&d.push(u)}return d}(e):function(e){if(a=(t=e)&&t.constructor,t!==("function"==typeof a&&a.prototype||k))return ee(e);var t,a,n=[];for(var r in Object(e))N.call(e,r)&&"constructor"!=r&&n.push(r);return n}(e)}t.exports=function(e,t){return function e(t,a,n,r,i){return t===a||(null!=t&&null!=a&&(ez(t)||ez(a))?function(e,t,a,n,r,i){var o=eP(e),m=eP(t),g=o?d:ej(e),$=m?d:ej(t);g=g==s?f:g,$=$==s?f:$;var _=g==f,T=$==f,C=g==$;if(C&&eO(e)){if(!eO(t))return!1;o=!0,_=!1}if(C&&!_)return i||(i=new ey),o||eL(e)?ex(e,t,a,n,r,i):function(e,t,a,n,r,i,o){switch(a){case x:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case b:if(e.byteLength!=t.byteLength||!i(new Q(e),new Q(t)))break;return!0;case l:case u:case I:return eS(+e,+t);case c:return e.name==t.name&&e.message==t.message;case h:case v:return e==t+"";case p:var s=B;case y:var d=1&n;if(s||(s=z),e.size!=t.size&&!d)break;var m=o.get(e);if(m)return m==t;n|=2,o.set(e,t);var f=ex(s(e),s(t),n,r,i,o);return o.delete(e),f;case"[object Symbol]":if(ep)return ep.call(e)==ep.call(t)}return!1}(e,t,g,a,n,r,i);if(!(1&a)){var w=_&&N.call(e,"__wrapped__"),j=T&&N.call(t,"__wrapped__");if(w||j){var A=w?e.value():e,S=j?t.value():t;return i||(i=new ey),r(A,S,a,n,i)}}return!!C&&(i||(i=new ey),function(e,t,a,n,r,i){var o=1&a,s=e_(e),d=s.length;if(d!=e_(t).length&&!o)return!1;for(var l=d;l--;){var u=s[l];if(!(o?u in t:N.call(t,u)))return!1}var c=i.get(e);if(c&&i.get(t))return c==t;var m=!0;i.set(e,t),i.set(t,e);for(var p=o;++l<d;){var I=e[u=s[l]],f=t[u];if(n)var g=o?n(f,I,u,t,e,i):n(I,f,u,e,t,i);if(!(void 0===g?I===f||r(I,f,a,n,i):g)){m=!1;break}p||(p="constructor"==u)}if(m&&!p){var h=e.constructor,y=t.constructor;h!=y&&"constructor"in e&&"constructor"in t&&!("function"==typeof h&&h instanceof h&&"function"==typeof y&&y instanceof y)&&(m=!1)}return i.delete(e),i.delete(t),m}(e,t,a,n,r,i))}(t,a,n,r,e,i):t!=t&&a!=a)}(e,t)}},793878,(e,t,a)=>{t.exports=function(e,t,a){return e===t||e.className===t.className&&a(e.style,t.style)&&e.width===t.width&&e.autoSize===t.autoSize&&e.cols===t.cols&&e.draggableCancel===t.draggableCancel&&e.draggableHandle===t.draggableHandle&&a(e.verticalCompact,t.verticalCompact)&&a(e.compactType,t.compactType)&&a(e.layout,t.layout)&&a(e.margin,t.margin)&&a(e.containerPadding,t.containerPadding)&&e.rowHeight===t.rowHeight&&e.maxRows===t.maxRows&&e.isBounded===t.isBounded&&e.isDraggable===t.isDraggable&&e.isResizable===t.isResizable&&e.allowOverlap===t.allowOverlap&&e.preventCollision===t.preventCollision&&e.useCSSTransforms===t.useCSSTransforms&&e.transformScale===t.transformScale&&e.isDroppable===t.isDroppable&&a(e.resizeHandles,t.resizeHandles)&&a(e.resizeHandle,t.resizeHandle)&&e.onLayoutChange===t.onLayoutChange&&e.onDragStart===t.onDragStart&&e.onDrag===t.onDrag&&e.onDragStop===t.onDragStop&&e.onResizeStart===t.onResizeStart&&e.onResize===t.onResize&&e.onResizeStop===t.onResizeStop&&e.onDrop===t.onDrop&&a(e.droppingItem,t.droppingItem)&&a(e.innerRef,t.innerRef)}},84100,(e,t,a)=>{t.exports=e.r(522579).default,t.exports.utils=e.r(535264),t.exports.Responsive=e.r(583643).default,t.exports.Responsive.utils=e.r(849853),t.exports.WidthProvider=e.r(787470).default},479936,(e,t,a)=>{!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var o=n.apply(null,r);o&&e.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)a.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}if(t.exports)n.default=n,t.exports=n;else if("function"==typeof define&&"object"==typeof define.amd&&define.amd)void 0!==n&&e.v(n);else window.classNames=n}()}]);