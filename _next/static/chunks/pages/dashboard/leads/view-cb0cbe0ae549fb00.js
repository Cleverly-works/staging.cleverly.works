(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1762],{86036:function(e,t,n){"use strict";var r=n(67294),a=n(45697),i=n(55843),o=n(51466),c=function(e){var t=e.content,n=e.text;return r.createElement(r.Fragment,null,r.createElement(i.Z,{marginBottom:"sm"}),r.createElement(o.Z,{content:t,context:"dark",size:"sm"}),r.createElement(o.Z,null,n))};c.propTypes={content:a.string.isRequired,text:(0,a.oneOfType)([a.node,a.string]).isRequired},t.Z=c},55843:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r,a,i,o,c,d=n(39725),l=n(51174),s=n(67294),p=n(45697),m=n(10367),u=n(66349),g=n(55255),f={xxsSize:"0.25rem",xsSize:"0.5rem",smSize:"0.75rem",mdSize:"1rem",lgSize:"1.5rem",xlSize:"2rem",xxlSize:"2.5rem",xxxlSize:"3rem"},v=function(e){var t="",n=0;return(e.forEach(function(e){e.v&&(n++,t+="".concat(e.k,": ").concat(f[e.v+"Size"],";\n      ").concat(g.Z.desktop(r||(r=(0,l.Z)(["\n        ",": calc("," * 2);"])),e.k,f[e.v+"Size"]),"\n      "))}),0===n)?(0,m.iv)(a||(a=(0,l.Z)(["\n      margin-bottom: ",";\n      ","\n    "])),f.mdSize,g.Z.desktop(i||(i=(0,l.Z)(["\n        margin-bottom: calc("," * 2);"])),f.mdSize)):(0,m.iv)(o||(o=(0,l.Z)(["\n    ","\n  "])),t)},Z=function(e){var t=e.children,n=e.className,r=e.content,a=e.margin,i=e.marginX,o=e.marginY,c=e.marginTop,d=e.marginRight,l=e.marginBottom,p=e.marginLeft,m=e.padding,u=e.paddingX,g=e.paddingY,f=e.paddingTop,v=e.paddingRight,Z=e.paddingBottom,h=e.paddingLeft;return s.createElement(b,{className:n,margin:a,marginX:i,marginY:o,marginTop:c,marginRight:d,marginBottom:l,marginLeft:p,padding:m,paddingX:u,paddingY:g,paddingTop:f,paddingRight:v,paddingBottom:Z,paddingLeft:h},r||t)};Z.displayName="Space";var b=m.ZP.div(c||(c=(0,l.Z)(["\n  margin: 0;\n  padding: 0;\n  ","\n"])),function(e){var t=e.margin,n=e.marginBottom,r=e.marginTop,a=e.marginLeft,i=e.marginRight,o=e.marginX,c=e.marginY,l=e.padding,s=e.paddingBottom,p=e.paddingLeft,m=e.paddingRight,u=e.paddingTop,g=e.paddingX,f=e.paddingY;return v([{k:"margin",v:t},{k:"margin-bottom",v:n},{k:"margin-left",v:a},{k:"margin-right",v:i},{k:"margin-top",v:r},{k:"padding",v:l},{k:"padding-bottom",v:s},{k:"padding-left",v:p},{k:"padding-right",v:m},{k:"padding-top",v:u}].concat((0,d.Z)(c?[{k:"margin-top",v:c},{k:"margin-bottom",v:c}]:[]),(0,d.Z)(o?[{k:"margin-left",v:o},{k:"margin-right",v:o}]:[]),(0,d.Z)(f?[{k:"padding-top",v:f},{k:"padding-bottom",v:f}]:[]),(0,d.Z)(g?[{k:"padding-left",v:g},{k:"padding-right",v:g}]:[])))});Z.propTypes={children:p.node,content:p.string,margin:(0,p.oneOf)(Object.values(u.Z)),marginY:(0,p.oneOf)(Object.values(u.Z)),marginX:(0,p.oneOf)(Object.values(u.Z)),marginTop:(0,p.oneOf)(Object.values(u.Z)),marginRight:(0,p.oneOf)(Object.values(u.Z)),marginBottom:(0,p.oneOf)(Object.values(u.Z)),marginLeft:(0,p.oneOf)(Object.values(u.Z)),padding:(0,p.oneOf)(Object.values(u.Z)),paddingY:(0,p.oneOf)(Object.values(u.Z)),paddingX:(0,p.oneOf)(Object.values(u.Z)),paddingTop:(0,p.oneOf)(Object.values(u.Z)),paddingRight:(0,p.oneOf)(Object.values(u.Z)),paddingBottom:(0,p.oneOf)(Object.values(u.Z)),paddingLeft:(0,p.oneOf)(Object.values(u.Z))};var h=Z},19076:function(e,t,n){"use strict";var r=n(21614),a=n(67294),i=n(45697),o=n(15214),c=n(76312),d=n(17813),l=n(18645),s=n(55843),p=n(28368);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var g=function(e){var t=e.children,n=e.meta,r=e.pageHeading,i=e.resultAlert,p=e.View,m=i.context,g=i.message,f=u(u({},{description:"Admin",path:"/",title:"Admin"}),n);return a.createElement(a.Suspense,{fallback:a.createElement(l.Z,{indicator:a.createElement(c.Z,null)})},a.createElement(d.Z,{fluid:!0,meta:f,pageHeading:r},p||t,g&&a.createElement(a.Fragment,null,a.createElement(s.Z,null),a.createElement(o.Z,{content:g,context:m}))))};g.displayName="Dashboard",g.propTypes={children:i.node,meta:(0,i.shape)({description:i.string,path:i.string,title:i.string}),pageHeading:(0,i.shape)({center:i.bool,context:(0,i.oneOf)(Object.values(p.Z)),divider:i.bool,heading:i.any.isRequired,help:i.bool,helpContent:i.any,strapline:i.string}),resultAlert:(0,i.shape)({context:i.string,message:i.string}),View:i.node},g.defaultProps={resultAlert:{context:"success",message:""}},t.Z=g},17813:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r,a=n(51174),i=n(67294),o=n(45697),c=n(10367),d=n(94303),l=n(74147),s=n(9008),p=n.n(s),m=function(e){var t=e.canonical,n=e.brand,r=e.meta,a=r.description,o=r.path,c=r.title;return i.createElement(p(),null,i.createElement("title",null,c," | ",n),i.createElement("meta",{name:"description",content:a,key:"description"}),i.createElement("meta",{rel:"canonical",href:t+o,key:"canonical"}),i.createElement("meta",{property:"og:title",content:c}),i.createElement("meta",{property:"og:description",content:a}),i.createElement("meta",{property:"og:url",content:t+o}),i.createElement("meta",{name:"twitter:url",content:t+o}),i.createElement("meta",{name:"twitter:title",content:c}),i.createElement("meta",{name:"twitter:description",content:a}))};m.displayName="MetaHead",m.propTypes={brand:o.string.isRequired,meta:o.object.isRequired};var u=n(35599),g=n(55843),f=n(28368),v=n(66349),Z=function(e){var t=e.children,n=e.fluid,r=e.meta,a=e.padding,o=e.pageHeading,c=(0,i.useContext)(d.Z).config,s=c.Brand,p=c.Canonical;return i.createElement(b,null,a&&i.createElement(g.Z,{paddingTop:a}),r&&i.createElement(m,{canonical:p,brand:s.name,meta:r}),i.createElement(l.Z,{fluid:n},o&&i.createElement(u.Z,o),t),a&&i.createElement(g.Z,{paddingBottom:a}))};Z.displayName="Page";var b=c.ZP.div(r||(r=(0,a.Z)(["\n  background-color: ",";\n"])),function(e){return e.theme.PAGE.backGroundColour});Z.propTypes={children:o.node.isRequired,fluid:o.bool,meta:(0,o.shape)({description:o.string.isRequired,path:o.string,title:o.string.isRequired}),padding:(0,o.oneOfType)([o.bool,(0,o.oneOf)(Object.values(v.Z))]),pageHeading:(0,o.shape)({center:o.bool,context:(0,o.oneOf)(Object.values(f.Z)),divider:o.bool,heading:o.any.isRequired,help:o.bool,helpContent:o.any,strapline:o.string})},Z.defaultProps={fluid:!1,padding:"md"};var h=Z},35599:function(e,t,n){"use strict";var r,a,i,o,c,d=n(51174),l=n(67294),s=n(45697),p=n(10367),m=n(55377),u=n(33006),g=n(28368),f=function(e){var t=e.center,n=e.children,r=e.context,a=e.divider,i=e.heading,o=e.help,c=e.helpContent,d=e.strapline;return l.createElement(v,{center:t,divider:a},l.createElement(Z,null,l.createElement(h,{content:i,context:r,pageHeading:!0}),d&&l.createElement("div",null,d)),(n||o)&&l.createElement(b,null,n||c),a&&l.createElement(y,{size:"md"}))};f.displayName="PageHeading";var v=p.ZP.header(r||(r=(0,d.Z)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ",";\n  text-align: ",";\n"])),function(e){return!e.divider&&"2rem"},function(e){return e.center&&"center"}),Z=p.ZP.span(a||(a=(0,d.Z)(["\n  flex: 1;\n"]))),b=p.ZP.span(i||(i=(0,d.Z)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]))),h=(0,p.ZP)(u.Z)(o||(o=(0,d.Z)(["\n  margin-bottom: ",";\n"])),function(e){return e.divider?"0.5rem":"0"}),y=(0,p.ZP)(m.Z)(c||(c=(0,d.Z)(["\n  width: 100%;\n"])));f.propTypes={center:s.bool,children:s.element,context:(0,s.oneOf)(Object.values(g.Z)),divider:s.bool,heading:s.any.isRequired,help:s.bool,helpContent:s.any,strapline:s.string},f.defaultProps={center:!1,context:"primary",divider:!0,help:!1,helpContent:"",strapline:""},t.Z=f},26186:function(e,t,n){"use strict";var r=n(34613),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),a=n.getFullYear(),i=""+(n.getMonth()+1),o=""+n.getDate();i.length<2&&(i="0"+i),o.length<2&&(o="0"+o);var c=[a,i,o].join("-");return t?c+" "+(0,r.Z)(e):c};t.Z=a},34613:function(e,t){"use strict";var n=function(e){var t=new Date(e),n=""+t.getHours(),r=""+t.getMinutes();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),"".concat(n,":").concat(r)};t.Z=n},61925:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/leads/view",function(){return n(85480)}])},95641:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=[{disabled:!0,text:"Lead category",value:""},{text:"Contractor",value:"contractor"},{text:"Contact",value:"contact"}]},85480:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r,a,i,o,c,d=n(85893),l=n(19076),s=n(46171),p=n(7297),m=n(75063);function u(){var e=(0,p.Z)(["\n  subscription GetLead($id: Int!) {\n    lead: Lead_by_pk(id: $id) {\n      id\n      type\n      meta\n      createdAt\n      updatedAt\n    }\n  }\n"]);return u=function(){return e},e}var g=(0,m.Ps)(u()),f=n(11163),v=n(9270),Z=n(62140),b=n(45697),h=n(11585),y=n(86036),x=n(26186),O=n(34613),j=n(95641),E=function(e){var t=e.lead,n=(j.L.find(function(e){return e.value===t.type})||{text:""}).text;return(0,d.jsxs)(h.Z,{open:!0,title:"Details",children:[(0,d.jsx)(y.Z,{content:"Type",text:n}),(0,d.jsx)(y.Z,{content:"Date created",text:"".concat((0,x.Z)(t.createdAt)," - ").concat((0,O.Z)(t.createdAt))})]})};E.propTypes={lead:b.object.isRequired};var k=n(10367),w=n(51174),P=n(18391),T=n(66080),R=n(67294),S=n(77439),A=n(28368),C={children:b.node.isRequired,context:(0,b.oneOf)(Object.values(A.Z)),dataSet:b.object,open:b.bool,summary:b.string.isRequired,SummaryActionsComponent:b.node,style:b.any,Toolbar:b.func},z=["children","context","dataSet","open","summary","SummaryActionsComponent","style","Toolbar"],_=function(e){var t=e.children,n=e.context,r=e.dataSet,a=e.open,i=e.summary,o=e.SummaryActionsComponent,c=e.style,d=e.Toolbar,l=(0,T.Z)(e,z);return R.createElement(L,(0,P.Z)({context:n,open:a},r),R.createElement(N,null,i,l.button&&R.createElement(D,{content:l.button||"Add New",context:"secondary",onClick:l.handleClick,size:"sm"}),o&&R.createElement(q,null,o),d&&R.createElement(d,null)),R.createElement(B,{style:c},t))};_.displayName="Details";var q=k.ZP.div(r||(r=(0,w.Z)(["\n  float: right;\n  width: fit-content;\n"]))),L=k.ZP.details(a||(a=(0,w.Z)(["\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-bottom: 1px solid ",";\n  box-shadow: rgba(45, 62, 80, 0.12) 0 1px 5px 0;\n  margin-bottom: 0.5rem;\n"])),function(e){var t=e.context;return e.theme.COLOUR[t]}),N=k.ZP.summary(i||(i=(0,w.Z)(["\n  cursor: pointer;\n  font-weight: bold;\n  outline: none;\n  padding: 1rem;\n  position: relative;\n"]))),D=(0,k.ZP)(S.Z)(o||(o=(0,w.Z)(["\n  float: right;\n"]))),B=k.ZP.div(c||(c=(0,w.Z)(["\n  font-size: 1rem;\n  padding: 0 1rem 1rem;\n"])));function H(){var e=(0,p.Z)(["\n  summary,\n  div + p {\n    text-transform: capitalize;\n  }\n"]);return H=function(){return e},e}_.propTypes=C,_.defaultProps={context:"primary",dataSet:{"data-cy":"details"},open:!1};var X=function(e){return e.split(/(?=[A-Z])/).join(" ")},Y=function(e){var t=e.lead.meta;return Object.keys(t).map(function(e){return(0,d.jsx)($,{open:!0,summary:X(e),children:Object.keys(t[e]).map(function(n){var r;return(0,d.jsx)(y.Z,{content:X(n),text:(r=t[e][n])==={}||r===[]?"-":"string"==typeof r&&/^(https?):\/\/[^\s$.?#].[^\s]*$/.test(r)?(0,d.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",children:r}):"object"!=typeof r||Array.isArray(r)?Array.isArray(r)?r.join(", "):r||"-":Object.keys(r).map(function(e){return"".concat(e,": ").concat(r[e]||"-")}).join(", ")},"".concat(e,"-").concat(n))})},e)})};Y.propTypes={lead:b.object.isRequired};var $=(0,k.ZP)(_).withConfig({displayName:"meta__StyledDetails",componentId:"sc-55b603ad-0"})(H()),F=function(){var e=(0,f.useRouter)().query,t=(0,s.m)(g,{variables:{id:e.id}}),n=t.loading,r=t.data,a=(void 0===r?{lead:null}:r).lead;return!n&&(0,d.jsxs)(v.Z,{children:[(0,d.jsx)(Z.Z,{md:3,children:(0,d.jsx)(E,{lead:a})}),(0,d.jsx)(Z.Z,{md:9,children:(0,d.jsx)(Y,{lead:a})})]})},G=function(){return(0,d.jsx)(l.Z,{pageHeading:{heading:"Lead"},View:(0,d.jsx)(F,{})})}}},function(e){e.O(0,[3054,9774,2888,179],function(){return e(e.s=61925)}),_N_E=e.O()}]);