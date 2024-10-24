(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1079],{55843:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i,a,r,o,d,c=t(39725),l=t(51174),g=t(67294),m=t(45697),p=t(10367),s=t(66349),u=t(55255),f={xxsSize:"0.25rem",xsSize:"0.5rem",smSize:"0.75rem",mdSize:"1rem",lgSize:"1.5rem",xlSize:"2rem",xxlSize:"2.5rem",xxxlSize:"3rem"},v=function(e){var n="",t=0;return(e.forEach(function(e){e.v&&(t++,n+="".concat(e.k,": ").concat(f[e.v+"Size"],";\n      ").concat(u.Z.desktop(i||(i=(0,l.Z)(["\n        ",": calc("," * 2);"])),e.k,f[e.v+"Size"]),"\n      "))}),0===t)?(0,p.iv)(a||(a=(0,l.Z)(["\n      margin-bottom: ",";\n      ","\n    "])),f.mdSize,u.Z.desktop(r||(r=(0,l.Z)(["\n        margin-bottom: calc("," * 2);"])),f.mdSize)):(0,p.iv)(o||(o=(0,l.Z)(["\n    ","\n  "])),n)},Z=function(e){var n=e.children,t=e.className,i=e.content,a=e.margin,r=e.marginX,o=e.marginY,d=e.marginTop,c=e.marginRight,l=e.marginBottom,m=e.marginLeft,p=e.padding,s=e.paddingX,u=e.paddingY,f=e.paddingTop,v=e.paddingRight,Z=e.paddingBottom,b=e.paddingLeft;return g.createElement(h,{className:t,margin:a,marginX:r,marginY:o,marginTop:d,marginRight:c,marginBottom:l,marginLeft:m,padding:p,paddingX:s,paddingY:u,paddingTop:f,paddingRight:v,paddingBottom:Z,paddingLeft:b},i||n)};Z.displayName="Space";var h=p.ZP.div(d||(d=(0,l.Z)(["\n  margin: 0;\n  padding: 0;\n  ","\n"])),function(e){var n=e.margin,t=e.marginBottom,i=e.marginTop,a=e.marginLeft,r=e.marginRight,o=e.marginX,d=e.marginY,l=e.padding,g=e.paddingBottom,m=e.paddingLeft,p=e.paddingRight,s=e.paddingTop,u=e.paddingX,f=e.paddingY;return v([{k:"margin",v:n},{k:"margin-bottom",v:t},{k:"margin-left",v:a},{k:"margin-right",v:r},{k:"margin-top",v:i},{k:"padding",v:l},{k:"padding-bottom",v:g},{k:"padding-left",v:m},{k:"padding-right",v:p},{k:"padding-top",v:s}].concat((0,c.Z)(d?[{k:"margin-top",v:d},{k:"margin-bottom",v:d}]:[]),(0,c.Z)(o?[{k:"margin-left",v:o},{k:"margin-right",v:o}]:[]),(0,c.Z)(f?[{k:"padding-top",v:f},{k:"padding-bottom",v:f}]:[]),(0,c.Z)(u?[{k:"padding-left",v:u},{k:"padding-right",v:u}]:[])))});Z.propTypes={children:m.node,content:m.string,margin:(0,m.oneOf)(Object.values(s.Z)),marginY:(0,m.oneOf)(Object.values(s.Z)),marginX:(0,m.oneOf)(Object.values(s.Z)),marginTop:(0,m.oneOf)(Object.values(s.Z)),marginRight:(0,m.oneOf)(Object.values(s.Z)),marginBottom:(0,m.oneOf)(Object.values(s.Z)),marginLeft:(0,m.oneOf)(Object.values(s.Z)),padding:(0,m.oneOf)(Object.values(s.Z)),paddingY:(0,m.oneOf)(Object.values(s.Z)),paddingX:(0,m.oneOf)(Object.values(s.Z)),paddingTop:(0,m.oneOf)(Object.values(s.Z)),paddingRight:(0,m.oneOf)(Object.values(s.Z)),paddingBottom:(0,m.oneOf)(Object.values(s.Z)),paddingLeft:(0,m.oneOf)(Object.values(s.Z))};var b=Z},17813:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var i,a=t(51174),r=t(67294),o=t(45697),d=t(10367),c=t(94303),l=t(74147),g=t(9008),m=t.n(g),p=function(e){var n=e.canonical,t=e.brand,i=e.meta,a=i.description,o=i.path,d=i.title;return r.createElement(m(),null,r.createElement("title",null,d," | ",t),r.createElement("meta",{name:"description",content:a,key:"description"}),r.createElement("meta",{rel:"canonical",href:n+o,key:"canonical"}),r.createElement("meta",{property:"og:title",content:d}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:url",content:n+o}),r.createElement("meta",{name:"twitter:url",content:n+o}),r.createElement("meta",{name:"twitter:title",content:d}),r.createElement("meta",{name:"twitter:description",content:a}))};p.displayName="MetaHead",p.propTypes={brand:o.string.isRequired,meta:o.object.isRequired};var s=t(35599),u=t(55843),f=t(28368),v=t(66349),Z=function(e){var n=e.children,t=e.fluid,i=e.meta,a=e.padding,o=e.pageHeading,d=(0,r.useContext)(c.Z).config,g=d.Brand,m=d.Canonical;return r.createElement(h,null,a&&r.createElement(u.Z,{paddingTop:a}),i&&r.createElement(p,{canonical:m,brand:g.name,meta:i}),r.createElement(l.Z,{fluid:t},o&&r.createElement(s.Z,o),n),a&&r.createElement(u.Z,{paddingBottom:a}))};Z.displayName="Page";var h=d.ZP.div(i||(i=(0,a.Z)(["\n  background-color: ",";\n"])),function(e){return e.theme.PAGE.backGroundColour});Z.propTypes={children:o.node.isRequired,fluid:o.bool,meta:(0,o.shape)({description:o.string.isRequired,path:o.string,title:o.string.isRequired}),padding:(0,o.oneOfType)([o.bool,(0,o.oneOf)(Object.values(v.Z))]),pageHeading:(0,o.shape)({center:o.bool,context:(0,o.oneOf)(Object.values(f.Z)),divider:o.bool,heading:o.any.isRequired,help:o.bool,helpContent:o.any,strapline:o.string})},Z.defaultProps={fluid:!1,padding:"md"};var b=Z},35599:function(e,n,t){"use strict";var i,a,r,o,d,c=t(51174),l=t(67294),g=t(45697),m=t(10367),p=t(55377),s=t(33006),u=t(28368),f=function(e){var n=e.center,t=e.children,i=e.context,a=e.divider,r=e.heading,o=e.help,d=e.helpContent,c=e.strapline;return l.createElement(v,{center:n,divider:a},l.createElement(Z,null,l.createElement(b,{content:r,context:i,pageHeading:!0}),c&&l.createElement("div",null,c)),(t||o)&&l.createElement(h,null,t||d),a&&l.createElement(O,{size:"md"}))};f.displayName="PageHeading";var v=m.ZP.header(i||(i=(0,c.Z)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ",";\n  text-align: ",";\n"])),function(e){return!e.divider&&"2rem"},function(e){return e.center&&"center"}),Z=m.ZP.span(a||(a=(0,c.Z)(["\n  flex: 1;\n"]))),h=m.ZP.span(r||(r=(0,c.Z)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]))),b=(0,m.ZP)(s.Z)(o||(o=(0,c.Z)(["\n  margin-bottom: ",";\n"])),function(e){return e.divider?"0.5rem":"0"}),O=(0,m.ZP)(p.Z)(d||(d=(0,c.Z)(["\n  width: 100%;\n"])));f.propTypes={center:g.bool,children:g.element,context:(0,g.oneOf)(Object.values(u.Z)),divider:g.bool,heading:g.any.isRequired,help:g.bool,helpContent:g.any,strapline:g.string},f.defaultProps={center:!1,context:"primary",divider:!0,help:!1,helpContent:"",strapline:""},n.Z=f},29848:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/policies/site-map",function(){return t(13926)}])},13926:function(e,n,t){"use strict";t.r(n);var i=t(85893),a=t(17813),r=t(88826),o=t(54542),d=t(97303),c=function(){return(0,i.jsx)(a.Z,{pageHeading:{heading:"Site Map"},children:(0,i.jsxs)(r.Z,{children:[(0,i.jsx)(o.Z,{children:(0,i.jsx)(d.Z,{to:"/account/forgot-details",children:"Forgot Details"})}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(d.Z,{to:"/account/forgot-details/reset",children:"Forgot Details Reset"})}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(d.Z,{to:"/account/sign-in",children:"Sign In"})}),(0,i.jsx)(o.Z,{children:(0,i.jsx)(d.Z,{to:{as:"/account/sign-up",href:"/account/sign-up/template"},children:"Sign Up"})})]})})};n.default=c}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=29848)}),_N_E=e.O()}]);