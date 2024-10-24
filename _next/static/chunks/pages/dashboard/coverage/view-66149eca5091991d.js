(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3249],{19076:function(e,n,t){"use strict";var r=t(21614),a=t(67294),o=t(45697),i=t(15214),c=t(76312),s=t(17813),u=t(18645),l=t(55843),d=t(28368);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach(function(n){(0,r.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var f=function(e){var n=e.children,t=e.meta,r=e.pageHeading,o=e.resultAlert,d=e.View,p=o.context,f=o.message,y=m(m({},{description:"Admin",path:"/",title:"Admin"}),t);return a.createElement(a.Suspense,{fallback:a.createElement(u.Z,{indicator:a.createElement(c.Z,null)})},a.createElement(s.Z,{fluid:!0,meta:y,pageHeading:r},d||n,f&&a.createElement(a.Fragment,null,a.createElement(l.Z,null),a.createElement(i.Z,{content:f,context:p}))))};f.displayName="Dashboard",f.propTypes={children:o.node,meta:(0,o.shape)({description:o.string,path:o.string,title:o.string}),pageHeading:(0,o.shape)({center:o.bool,context:(0,o.oneOf)(Object.values(d.Z)),divider:o.bool,heading:o.any.isRequired,help:o.bool,helpContent:o.any,strapline:o.string}),resultAlert:(0,o.shape)({context:o.string,message:o.string}),View:o.node},f.defaultProps={resultAlert:{context:"success",message:""}},n.Z=f},17813:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var r,a=t(51174),o=t(67294),i=t(45697),c=t(10367),s=t(94303),u=t(74147),l=t(9008),d=t.n(l),p=function(e){var n=e.canonical,t=e.brand,r=e.meta,a=r.description,i=r.path,c=r.title;return o.createElement(d(),null,o.createElement("title",null,c," | ",t),o.createElement("meta",{name:"description",content:a,key:"description"}),o.createElement("meta",{rel:"canonical",href:n+i,key:"canonical"}),o.createElement("meta",{property:"og:title",content:c}),o.createElement("meta",{property:"og:description",content:a}),o.createElement("meta",{property:"og:url",content:n+i}),o.createElement("meta",{name:"twitter:url",content:n+i}),o.createElement("meta",{name:"twitter:title",content:c}),o.createElement("meta",{name:"twitter:description",content:a}))};p.displayName="MetaHead",p.propTypes={brand:i.string.isRequired,meta:i.object.isRequired};var m=t(35599),f=t(55843),y=t(28368),g=t(66349),v=function(e){var n=e.children,t=e.fluid,r=e.meta,a=e.padding,i=e.pageHeading,c=(0,o.useContext)(s.Z).config,l=c.Brand,d=c.Canonical;return o.createElement(b,null,a&&o.createElement(f.Z,{paddingTop:a}),r&&o.createElement(p,{canonical:d,brand:l.name,meta:r}),o.createElement(u.Z,{fluid:t},i&&o.createElement(m.Z,i),n),a&&o.createElement(f.Z,{paddingBottom:a}))};v.displayName="Page";var b=c.ZP.div(r||(r=(0,a.Z)(["\n  background-color: ",";\n"])),function(e){return e.theme.PAGE.backGroundColour});v.propTypes={children:i.node.isRequired,fluid:i.bool,meta:(0,i.shape)({description:i.string.isRequired,path:i.string,title:i.string.isRequired}),padding:(0,i.oneOfType)([i.bool,(0,i.oneOf)(Object.values(g.Z))]),pageHeading:(0,i.shape)({center:i.bool,context:(0,i.oneOf)(Object.values(y.Z)),divider:i.bool,heading:i.any.isRequired,help:i.bool,helpContent:i.any,strapline:i.string})},v.defaultProps={fluid:!1,padding:"md"};var h=v},35599:function(e,n,t){"use strict";var r,a,o,i,c,s=t(51174),u=t(67294),l=t(45697),d=t(10367),p=t(55377),m=t(33006),f=t(28368),y=function(e){var n=e.center,t=e.children,r=e.context,a=e.divider,o=e.heading,i=e.help,c=e.helpContent,s=e.strapline;return u.createElement(g,{center:n,divider:a},u.createElement(v,null,u.createElement(h,{content:o,context:r,pageHeading:!0}),s&&u.createElement("div",null,s)),(t||i)&&u.createElement(b,null,t||c),a&&u.createElement(_,{size:"md"}))};y.displayName="PageHeading";var g=d.ZP.header(r||(r=(0,s.Z)(["\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  margin-bottom: ",";\n  text-align: ",";\n"])),function(e){return!e.divider&&"2rem"},function(e){return e.center&&"center"}),v=d.ZP.span(a||(a=(0,s.Z)(["\n  flex: 1;\n"]))),b=d.ZP.span(o||(o=(0,s.Z)(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-end;\n"]))),h=(0,d.ZP)(m.Z)(i||(i=(0,s.Z)(["\n  margin-bottom: ",";\n"])),function(e){return e.divider?"0.5rem":"0"}),_=(0,d.ZP)(p.Z)(c||(c=(0,s.Z)(["\n  width: 100%;\n"])));y.propTypes={center:l.bool,children:l.element,context:(0,l.oneOf)(Object.values(f.Z)),divider:l.bool,heading:l.any.isRequired,help:l.bool,helpContent:l.any,strapline:l.string},y.defaultProps={center:!1,context:"primary",divider:!0,help:!1,helpContent:"",strapline:""},n.Z=y},74297:function(e,n){"use strict";var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};n.Z=t},14259:function(e){e.exports=function(e,n,t){var r=-1,a=e.length;n<0&&(n=-n>a?0:a+n),(t=t>a?a:t)<0&&(t+=a),a=n>t?0:t-n>>>0,n>>>=0;for(var o=Array(a);++r<a;)o[r]=e[r+n];return o}},33448:function(e,n,t){var r=t(44239),a=t(37005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},23332:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/coverage/view",function(){return t(92882)}])},64973:function(e,n,t){"use strict";t.d(n,{NG:function(){return p},NK:function(){return d},OW:function(){return m},sM:function(){return l}});var r=t(7297),a=t(75063);function o(){var e=(0,r.Z)(["\n  query GetPostcodeAreas(\n    $countryId: Int\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: PostcodeArea_order_by!\n  ) {\n    postcodeAreas: PostcodeArea(\n      limit: $limit\n      offset: $offset\n      where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }\n      order_by: [$orderBy]\n    ) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n    meta: PostcodeArea_aggregate(where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return o=function(){return e},e}function i(){var e=(0,r.Z)(["\n  query GetPostcodeArea($id: Int!) {\n    postcodeArea: PostcodeArea_by_pk(id: $id) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n  }\n"]);return i=function(){return e},e}function c(){var e=(0,r.Z)(["\n  mutation AddPostcodeArea($areas: [PostcodeArea_insert_input!]!) {\n    insert_PostcodeArea(objects: $areas) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return c=function(){return e},e}function s(){var e=(0,r.Z)(["\n  mutation InsertPostCodeArea($objects: [PostcodeArea_Entity_insert_input!]!) {\n    insert_PostcodeArea_Entity(\n      objects: $objects\n      on_conflict: {\n        constraint: PostcodeArea_Entity_postcodeAreaId_entityId_entity_key\n        update_columns: status\n      }\n    ) {\n      returning {\n        id\n        status\n      }\n    }\n  }\n"]);return s=function(){return e},e}function u(){var e=(0,r.Z)(["\n  mutation UpdateEntityAssign($id: Int!, $changes: PostcodeArea_Entity_set_input) {\n    update_PostcodeArea_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      status\n    }\n  }\n"]);return u=function(){return e},e}var l=(0,a.Ps)(o()),d=(0,a.Ps)(i());(0,a.Ps)(c());var p=(0,a.Ps)(s()),m=(0,a.Ps)(u())},92882:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return b}});var r=t(26042),a=t(85893),o=t(11163),i=t.n(o),c=t(19076),s=t(6388),u=t(64973),l=t(9270),d=t(62140),p=t(45697),m=t(74297),f=t(11585),y=t(8500),g=function(e){var n,t=e.area,r=[{key:"Postcode",value:t.area},{key:"Area",value:t.name},{key:"Country",value:null===(n=t.country)||void 0===n?void 0:n.name},{key:"Status",value:(0,m.Z)(t.status)}];return(0,a.jsx)(f.Z,{open:!0,title:"Area",children:(0,a.jsx)(y.Z,{rows:r})})};g.propTypes={area:p.object.isRequired};var v=function(e){var n=e.id,t=(0,s.aM)(u.NK,{variables:{id:n}}),r=t.data,o=(void 0===r?{area:null}:r).postcodeArea,c=t.loading;return c||o?!c&&(0,a.jsx)(l.Z,{children:(0,a.jsx)(d.Z,{md:4,children:(0,a.jsx)(g,{area:o})})}):(i().push("/404"),!1)},b=function(){var e=(0,o.useRouter)().query;return(0,a.jsx)(c.Z,{View:(0,a.jsx)(v,(0,r.Z)({},e))})}}},function(e){e.O(0,[1838,3054,8500,9774,2888,179],function(){return e(e.s=23332)}),_N_E=e.O()}]);