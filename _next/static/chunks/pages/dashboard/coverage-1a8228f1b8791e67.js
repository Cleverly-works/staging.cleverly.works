(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7528],{39582:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/coverage",function(){return t(84236)}])},25742:function(e,n,t){"use strict";t.d(n,{H:function(){return c}});var r=t(26042),i=t(85893),o=t(45697),s=t(55377),a=t(16551),u=t(77439),c=function(e){var n=e.children,t=e.content,o=e.context,c=e.data,l=e.disabled,d=e.handleClick,f=e.size,v=e.type;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.Z,{size:"sm"}),(0,i.jsxs)(a.Z,{align:"flex-end",children:[n,(0,i.jsx)(u.Z,(0,r.Z)({content:t,context:o,disabled:l,onClick:d,size:f,type:v},c))]})]})};c.propTypes={children:o.node,content:o.string,context:o.string,data:o.object,disabled:o.bool,handleClick:o.func,size:o.string,type:o.string},c.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},64973:function(e,n,t){"use strict";t.d(n,{NG:function(){return f},NK:function(){return d},OW:function(){return v},sM:function(){return l}});var r=t(7297),i=t(75063);function o(){var e=(0,r.Z)(["\n  query GetPostcodeAreas(\n    $countryId: Int\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: PostcodeArea_order_by!\n  ) {\n    postcodeAreas: PostcodeArea(\n      limit: $limit\n      offset: $offset\n      where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }\n      order_by: [$orderBy]\n    ) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n    meta: PostcodeArea_aggregate(where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return o=function(){return e},e}function s(){var e=(0,r.Z)(["\n  query GetPostcodeArea($id: Int!) {\n    postcodeArea: PostcodeArea_by_pk(id: $id) {\n      id\n      area\n      name\n      status\n      country: Country {\n        id\n        name\n        code\n      }\n    }\n  }\n"]);return s=function(){return e},e}function a(){var e=(0,r.Z)(["\n  mutation AddPostcodeArea($areas: [PostcodeArea_insert_input!]!) {\n    insert_PostcodeArea(objects: $areas) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return a=function(){return e},e}function u(){var e=(0,r.Z)(["\n  mutation InsertPostCodeArea($objects: [PostcodeArea_Entity_insert_input!]!) {\n    insert_PostcodeArea_Entity(\n      objects: $objects\n      on_conflict: {\n        constraint: PostcodeArea_Entity_postcodeAreaId_entityId_entity_key\n        update_columns: status\n      }\n    ) {\n      returning {\n        id\n        status\n      }\n    }\n  }\n"]);return u=function(){return e},e}function c(){var e=(0,r.Z)(["\n  mutation UpdateEntityAssign($id: Int!, $changes: PostcodeArea_Entity_set_input) {\n    update_PostcodeArea_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n      status\n    }\n  }\n"]);return c=function(){return e},e}var l=(0,i.Ps)(o()),d=(0,i.Ps)(s());(0,i.Ps)(a());var f=(0,i.Ps)(u()),v=(0,i.Ps)(c())},91272:function(e,n,t){"use strict";t.d(n,{t:function(){return c}});var r=t(85893),i=t(67294),o=t(45697),s=t(11163),a=t(46003),u=t(8500),c=(0,i.forwardRef)(function(e,n){var t=e.columns,o=e.history,c=e.initialSort,l=e.loading,d=e.meta,f=e.paginationSize,v=e.refetch,p=e.submissionsRefetch,g=e.rowClick,m=e.rows,y=e.xeroPageSize,h=(0,s.useRouter)(),b=h.query,_=void 0===b?{}:b,S=(0,i.useState)(parseInt(null==_?void 0:_.page,10)||1),x=S[0],Z=S[1],j=(0,i.useState)(y||a.C1.paginationSize),C=j[0],P=j[1];c||(c={item:"createdAt",order:"desc"});var I=(0,i.useState)({item:c.item,order:c.order}),w=I[0],k=I[1],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=h.query,t=void 0===n?{}:n;if(e>1?t.page=e:delete t.page,!(Object.keys(t).length>0))return{};var r=Object.keys(t).map(function(n){return"page"===n?"".concat(n,"=").concat(e):"".concat(n,"=").concat(t[n])}).join("&");return"?".concat(r)},$=function(){k({item:c.item,order:c.order}),Z(1);var e=A();h.push(e),P(y||a.C1.paginationSize)};(0,i.useImperativeHandle)(n,function(){return{currentPage:x,pageSize:C,sort:w,resetPagination:function(){$()}}});var q=function(e){var n=A(e);o&&h.push(n),Z(e),!o&&v&&v()&&p&&p()},F=function(e){e!==a.C1.paginationSize&&(P(e),v&&v()&&p&&p())},z=function(e){var n;k({item:e.item,order:e.order}),v&&v()&&p&&p()};return(0,r.jsx)(u.Z,{columns:t,loading:l,paginationSize:f,pagination:d&&!0,paginationProps:d&&{currentPage:x,onPageChange:q,onPageSizeChange:F,pageCount:Math.ceil(d.aggregate.totalCount/C),perPage:C},rowClick:g,rows:m,sort:w,setSort:z})});c.propTypes={columns:o.array.isRequired,history:o.bool,initialSort:o.object,loading:o.bool,meta:o.object,refetch:o.func,submissionsRefetch:o.func,rowClick:o.func,rows:o.array.isRequired},c.defaultProps={history:!0,loading:!0,paginationSize:!1}},20705:function(e,n,t){"use strict";t.d(n,{x:function(){return l}});var r=t(14924),i=t(26042),o=t(69396),s=t(67294),a=t(96486),u=t(46003),c=function(e){try{return JSON.parse(e)}catch(n){return!1}},l=function(e){var n,t,l,d,f,v,p,g,m,y,h,b=e.filters,_=e.newFilters,S=e.initialSort,x=(0,s.useRef)(),Z=(0,s.useState)({}),j=Z[0],C=Z[1],P=(0,s.useState)({}),I=P[0],w=P[1],k=S||{item:"createdAt",order:"desc"},A=(0,r.Z)({},(null===(n=x.current)||void 0===n?void 0:n.sort.item)||k.item,k.inneritem?(0,r.Z)({},k.inneritem,(null===(t=x.current)||void 0===t?void 0:t.sort.order)||k.order):(null===(l=x.current)||void 0===l?void 0:l.sort.order)||k.order);return(0,s.useEffect)(function(){var e=!(0,a.isEqual)(j,b),n=!(0,a.isEqual)(I,_);if(e&&(C(b),null==x||null===(r=x.current)||void 0===r||r.resetPagination()),n&&(w(_),null==x||null===(i=x.current)||void 0===i||i.resetPagination()),(null==x?void 0:null===(t=x.current)||void 0===t?void 0:t.setSort)&&!(e||n)){var t,r,i,o,s,u,c,l,d,f,v,p=(null===(o=x.current)||void 0===o?void 0:null===(s=o.sort)||void 0===s?void 0:s.item)&&(null===(u=x.current)||void 0===u?void 0:null===(c=u.sort)||void 0===c?void 0:c.order)?{item:null===(l=x.current)||void 0===l?void 0:null===(d=l.sort)||void 0===d?void 0:d.item,order:null===(f=x.current)||void 0===f?void 0:null===(v=f.sort)||void 0===v?void 0:v.order}:A;x.current.setSort(p)}},[b,_]),{initialData:(0,o.Z)((0,i.Z)({},b),{newFilters:(null==_?void 0:_.length)>0?_:void 0,limit:(null===(d=x.current)||void 0===d?void 0:d.pageSize)==="Infinity"?null:parseInt(null===(f=x.current)||void 0===f?void 0:f.pageSize,10)||u.C1.paginationSize,offset:((null===(v=x.current)||void 0===v?void 0:v.currentPage)-1||0)*((null===(p=x.current)||void 0===p?void 0:p.pageSize)||u.C1.paginationSize),orderBy:c(null===(g=x.current)||void 0===g?void 0:null===(m=g.sort)||void 0===m?void 0:null===(y=m.item)||void 0===y?void 0:y.replace(/ORDER/i,null===(h=x.current)||void 0===h?void 0:h.sort.order))||A}),initialSort:S,ref:x}}},59938:function(e,n,t){"use strict";t.d(n,{X:function(){return p}});var r=t(14924),i=t(82670),o=t(828),s=t(7297),a=t(67294),u=t(6388),c=t(50319),l=t(75063),d=t(18586);function f(){var e=(0,s.Z)(["\n  query GetAccountUserFilters($accountUserId: Int!) {\n    accountUser: Account_User_by_pk(id: $accountUserId) {\n      filters\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=(0,s.Z)(["\n  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",s=(0,d.q)().user,l=(0,a.useState)(function(){try{switch(t){case"network":case"state":return n;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(e))||n}}catch(r){return n}}),f=l[0],v=l[1],p=function(n){try{var o=(0,i.Z)(n,Function)?n(f):n;switch(v(o),t){case"network":y({variables:{accountUserId:null==s?void 0:s.accountUserId,filters:(0,r.Z)({},e,o)}});break;case"sessionStorage":window.sessionStorage.setItem(e,JSON.stringify(o))}}catch(a){}};(0,u.aM)(g,{variables:{accountUserId:null==s?void 0:s.accountUserId},skip:"network"!==t,onCompleted:function(t){var r=t.accountUser;r&&v(r.filters[e]||n)}});var y=(0,o.Z)((0,c.D)(m),1)[0];return[f,p]}var g=(0,l.Ps)(f()),m=(0,l.Ps)(v())},73760:function(e,n,t){"use strict";t.d(n,{O:function(){return r},v:function(){return i}});var r=[{text:"Country",value:""},{text:"United Kingdom",value:1},{text:"Ireland",value:4}],i=[{label:"United Kingdom",value:1},{label:"Ireland",value:4}]},55862:function(e,n,t){"use strict";t.d(n,{J:function(){return x}});var r=t(26042),i=t(69396),o=t(99534),s=t(828),a=t(85893),u=t(11163),c=t(67294),l=t(45697),d=t(9270),f=t(62140),v=t(42283),p=t(76600),g=t(11585),m=t(49501),y=t(75903),h=t(77439),b=t(25742),_=t(59938),S=function(e){var n=e.initialValues,t=e.renderFilters,o=e.setFilters,u=e.lastQuery,l=e.filters,S=(0,s.Z)((0,_.X)("form_data_".concat(n.filterType),n),2),x=S[0],Z=S[1],j=(0,v.cI)({defaultValues:x||n}),C=j.control,P=j.errors,I=j.handleSubmit,w=j.register,k=j.reset,A=j.watch,$=j.setValue,q=A(),F=(0,i.Z)((0,r.Z)({},q),{filterType:n.filterType});(0,c.useEffect)(function(){k(F)},[k]),(0,c.useEffect)(function(){Z(F)},[l]);var z=function(e){var t=e.query;if(t!==u){var i={q:"%".concat(t,"%")||0},s=/^\d+$/.test(t);"id"in n&&(i.id=s?Number(t):null),"meta"in n&&(i.meta=s?{invoiceNumbers:[t]}:null),"jobNumber"in n&&(i.jobNumber=s?String(t):null,i.invoiceNumber=s?Number(t):null),o(function(e){return(0,r.Z)({},e,i)})}},E=function(e){Object.keys(n).map(function(e){return $(e,null)}),o(n),k(n),z("")};return(0,a.jsx)(p.Z,{handleSubmit:I(z),children:(0,a.jsxs)(g.Z,{title:"Filters",children:[(0,a.jsxs)(d.Z,{children:[(0,a.jsx)(f.Z,{sm:12,lg:12,children:(0,a.jsx)(m.Z,{label:"",children:(0,a.jsx)(y.Z,{errors:P,label:"Search",name:"email",placeholder:"Search...",prependSearchIcon:!0,register:w,type:"search"})})}),(0,a.jsx)(f.Z,{sm:12,lg:12,children:t({control:C,errors:P,initialValues:n,register:w,setFilters:o,watch:A,setValue:$,reset:k})})]}),(0,a.jsx)(b.H,{content:"Search",context:"secondary",handleClick:z,type:"submit",children:(0,a.jsx)(h.Z,{content:"Clear",context:"danger",onClick:E,size:"sm"})})]})})};S.propTypes={initialValues:l.object,renderFilters:l.func.isRequired,setFilters:l.func.isRequired};var x=function(e){var n=e.FiltersComp,t=e.initialFilters,l=e.TableComp,v=(0,o.Z)(e,["FiltersComp","initialFilters","TableComp"]),p=(0,s.Z)((0,_.X)("form_data_".concat(t.filterType),t),2),g=p[0],m=p[1],y=(0,c.useState)(g||t),h=y[0],b=y[1],x=(0,u.useRouter)().query.show;return(0,c.useEffect)(function(){m(h)},[h,m]),(0,a.jsx)(d.Z,{children:(0,a.jsxs)(f.Z,{sm:12,lg:12,children:[(0,a.jsx)(S,{initialValues:t,renderFilters:function(e){return(0,a.jsx)(n,(0,i.Z)((0,r.Z)({},e,v),{show:x}))},setFilters:b,filters:h}),(0,a.jsx)(l,(0,r.Z)({filters:h,initialFilters:t},v))]})})};x.propTypes={FiltersComp:l.func,initialFilters:l.object.isRequired,TableComp:l.func}},84236:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(85893),i=t(19076),o=t(55862),s=t(45697),a=t(11163),u=t.n(a),c=t(6388),l=t(64973),d=t(74297),f=t(11585),v=t(91272),p=t(20705),g={item:"area",order:"asc"},m=function(e){var n=e.filters,t=(0,p.x)({filters:n,initialSort:g}),i=t.initialData,o=t.ref,s=(0,c.aM)(l.sM,{variables:i}),a=s.data,m=void 0===a?{areas:[],meta:{aggregate:{totalCount:0}}}:a,y=m.postcodeAreas,h=m.meta,b=s.loading,_=s.refetch,S=function(e){u().push("".concat("/dashboard/coverage/","view?id=").concat(e.id))};return(0,r.jsx)(f.Z,{open:!0,title:"Coverage Areas",children:(0,r.jsx)(v.t,{columns:[{hidden:!0},{text:"Postcode"},{sortable:!0,sortName:"area",text:"Area"},{text:"Country"},{text:"# Services"},{text:"# Suppliers"},{text:"Status"}],initialSort:g,loading:b,meta:h,ref:o,refetch:_,rowClick:S,rows:y?y.map(function(e){var n,t,r;return{id:e.id,postcode:e.area,area:e.name,country:null===(n=e.country)||void 0===n?void 0:n.name,servicesCount:(null===(t=e.services)||void 0===t?void 0:t.length)||0,suppliersCount:(null===(r=e.suppliers)||void 0===r?void 0:r.length)||0,status:(0,d.Z)(e.status)}}):[]})})};m.propTypes={filters:s.object};var y=t(26042),h=t(69396),b=t(9270),_=t(62140),S=t(95103),x=t(73760),Z=function(e){var n=e.errors,t=e.register,i=e.setFilters;return(0,r.jsx)(b.Z,{children:(0,r.jsx)(_.Z,{md:6,children:(0,r.jsx)(S.Z,{errors:n,name:"countryId",onChange:function(e){return i(function(n){return(0,h.Z)((0,y.Z)({},n),{countryId:e.target.value||null})})},options:x.O,register:t})})})};Z.propTypes={errors:s.object.isRequired,register:s.func.isRequired,setFilters:s.func.isRequired};var j={countryId:null,q:null,filterType:"coverage_table"},C=function(){return(0,r.jsx)(o.J,{FiltersComp:Z,initialFilters:j,TableComp:m})},P=function(){return(0,r.jsx)(i.Z,{pageHeading:{heading:"Coverage"},View:(0,r.jsx)(C,{})})}}},function(e){e.O(0,[3662,2283,1838,3054,8500,4259,9774,2888,179],function(){return e(e.s=39582)}),_N_E=e.O()}]);