(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5886],{91250:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/leads",function(){return n(63102)}])},25742:function(e,t,n){"use strict";n.d(t,{H:function(){return c}});var r=n(26042),i=n(85893),o=n(45697),a=n(55377),s=n(16551),u=n(77439),c=function(e){var t=e.children,n=e.content,o=e.context,c=e.data,l=e.disabled,d=e.handleClick,f=e.size,v=e.type;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{size:"sm"}),(0,i.jsxs)(s.Z,{align:"flex-end",children:[t,(0,i.jsx)(u.Z,(0,r.Z)({content:n,context:o,disabled:l,onClick:d,size:f,type:v},c))]})]})};c.propTypes={children:o.node,content:o.string,context:o.string,data:o.object,disabled:o.bool,handleClick:o.func,size:o.string,type:o.string},c.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},91272:function(e,t,n){"use strict";n.d(t,{t:function(){return c}});var r=n(85893),i=n(67294),o=n(45697),a=n(11163),s=n(46003),u=n(8500),c=(0,i.forwardRef)(function(e,t){var n=e.columns,o=e.history,c=e.initialSort,l=e.loading,d=e.meta,f=e.paginationSize,v=e.refetch,p=e.submissionsRefetch,g=e.rowClick,m=e.rows,h=e.xeroPageSize,y=(0,a.useRouter)(),b=y.query,S=void 0===b?{}:b,Z=(0,i.useState)(parseInt(null==S?void 0:S.page,10)||1),j=Z[0],x=Z[1],w=(0,i.useState)(h||s.C1.paginationSize),C=w[0],_=w[1];c||(c={item:"createdAt",order:"desc"});var F=(0,i.useState)({item:c.item,order:c.order}),k=F[0],q=F[1],z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=y.query,n=void 0===t?{}:t;if(e>1?n.page=e:delete n.page,!(Object.keys(n).length>0))return{};var r=Object.keys(n).map(function(t){return"page"===t?"".concat(t,"=").concat(e):"".concat(t,"=").concat(n[t])}).join("&");return"?".concat(r)},I=function(){q({item:c.item,order:c.order}),x(1);var e=z();y.push(e),_(h||s.C1.paginationSize)};(0,i.useImperativeHandle)(t,function(){return{currentPage:j,pageSize:C,sort:k,resetPagination:function(){I()}}});var P=function(e){var t=z(e);o&&y.push(t),x(e),!o&&v&&v()&&p&&p()},$=function(e){e!==s.C1.paginationSize&&(_(e),v&&v()&&p&&p())},A=function(e){var t;q({item:e.item,order:e.order}),v&&v()&&p&&p()};return(0,r.jsx)(u.Z,{columns:n,loading:l,paginationSize:f,pagination:d&&!0,paginationProps:d&&{currentPage:j,onPageChange:P,onPageSizeChange:$,pageCount:Math.ceil(d.aggregate.totalCount/C),perPage:C},rowClick:g,rows:m,sort:k,setSort:A})});c.propTypes={columns:o.array.isRequired,history:o.bool,initialSort:o.object,loading:o.bool,meta:o.object,refetch:o.func,submissionsRefetch:o.func,rowClick:o.func,rows:o.array.isRequired},c.defaultProps={history:!0,loading:!0,paginationSize:!1}},20705:function(e,t,n){"use strict";n.d(t,{x:function(){return l}});var r=n(14924),i=n(26042),o=n(69396),a=n(67294),s=n(96486),u=n(46003),c=function(e){try{return JSON.parse(e)}catch(t){return!1}},l=function(e){var t,n,l,d,f,v,p,g,m,h,y,b=e.filters,S=e.newFilters,Z=e.initialSort,j=(0,a.useRef)(),x=(0,a.useState)({}),w=x[0],C=x[1],_=(0,a.useState)({}),F=_[0],k=_[1],q=Z||{item:"createdAt",order:"desc"},z=(0,r.Z)({},(null===(t=j.current)||void 0===t?void 0:t.sort.item)||q.item,q.inneritem?(0,r.Z)({},q.inneritem,(null===(n=j.current)||void 0===n?void 0:n.sort.order)||q.order):(null===(l=j.current)||void 0===l?void 0:l.sort.order)||q.order);return(0,a.useEffect)(function(){var e=!(0,s.isEqual)(w,b),t=!(0,s.isEqual)(F,S);if(e&&(C(b),null==j||null===(r=j.current)||void 0===r||r.resetPagination()),t&&(k(S),null==j||null===(i=j.current)||void 0===i||i.resetPagination()),(null==j?void 0:null===(n=j.current)||void 0===n?void 0:n.setSort)&&!(e||t)){var n,r,i,o,a,u,c,l,d,f,v,p=(null===(o=j.current)||void 0===o?void 0:null===(a=o.sort)||void 0===a?void 0:a.item)&&(null===(u=j.current)||void 0===u?void 0:null===(c=u.sort)||void 0===c?void 0:c.order)?{item:null===(l=j.current)||void 0===l?void 0:null===(d=l.sort)||void 0===d?void 0:d.item,order:null===(f=j.current)||void 0===f?void 0:null===(v=f.sort)||void 0===v?void 0:v.order}:z;j.current.setSort(p)}},[b,S]),{initialData:(0,o.Z)((0,i.Z)({},b),{newFilters:(null==S?void 0:S.length)>0?S:void 0,limit:(null===(d=j.current)||void 0===d?void 0:d.pageSize)==="Infinity"?null:parseInt(null===(f=j.current)||void 0===f?void 0:f.pageSize,10)||u.C1.paginationSize,offset:((null===(v=j.current)||void 0===v?void 0:v.currentPage)-1||0)*((null===(p=j.current)||void 0===p?void 0:p.pageSize)||u.C1.paginationSize),orderBy:c(null===(g=j.current)||void 0===g?void 0:null===(m=g.sort)||void 0===m?void 0:null===(h=m.item)||void 0===h?void 0:h.replace(/ORDER/i,null===(y=j.current)||void 0===y?void 0:y.sort.order))||z}),initialSort:Z,ref:j}}},59938:function(e,t,n){"use strict";n.d(t,{X:function(){return p}});var r=n(14924),i=n(82670),o=n(828),a=n(7297),s=n(67294),u=n(6388),c=n(50319),l=n(75063),d=n(18586);function f(){var e=(0,a.Z)(["\n  query GetAccountUserFilters($accountUserId: Int!) {\n    accountUser: Account_User_by_pk(id: $accountUserId) {\n      filters\n    }\n  }\n"]);return f=function(){return e},e}function v(){var e=(0,a.Z)(["\n  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {\n      id\n    }\n  }\n"]);return v=function(){return e},e}function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",a=(0,d.q)().user,l=(0,s.useState)(function(){try{switch(n){case"network":case"state":return t;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(e))||t}}catch(r){return t}}),f=l[0],v=l[1],p=function(t){try{var o=(0,i.Z)(t,Function)?t(f):t;switch(v(o),n){case"network":h({variables:{accountUserId:null==a?void 0:a.accountUserId,filters:(0,r.Z)({},e,o)}});break;case"sessionStorage":window.sessionStorage.setItem(e,JSON.stringify(o))}}catch(s){}};(0,u.aM)(g,{variables:{accountUserId:null==a?void 0:a.accountUserId},skip:"network"!==n,onCompleted:function(n){var r=n.accountUser;r&&v(r.filters[e]||t)}});var h=(0,o.Z)((0,c.D)(m),1)[0];return[f,p]}var g=(0,l.Ps)(f()),m=(0,l.Ps)(v())},95641:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});var r=[{disabled:!0,text:"Lead category",value:""},{text:"Contractor",value:"contractor"},{text:"Contact",value:"contact"}]},55862:function(e,t,n){"use strict";n.d(t,{J:function(){return j}});var r=n(26042),i=n(69396),o=n(99534),a=n(828),s=n(85893),u=n(11163),c=n(67294),l=n(45697),d=n(9270),f=n(62140),v=n(42283),p=n(76600),g=n(11585),m=n(49501),h=n(75903),y=n(77439),b=n(25742),S=n(59938),Z=function(e){var t=e.initialValues,n=e.renderFilters,o=e.setFilters,u=e.lastQuery,l=e.filters,Z=(0,a.Z)((0,S.X)("form_data_".concat(t.filterType),t),2),j=Z[0],x=Z[1],w=(0,v.cI)({defaultValues:j||t}),C=w.control,_=w.errors,F=w.handleSubmit,k=w.register,q=w.reset,z=w.watch,I=w.setValue,P=z(),$=(0,i.Z)((0,r.Z)({},P),{filterType:t.filterType});(0,c.useEffect)(function(){q($)},[q]),(0,c.useEffect)(function(){x($)},[l]);var A=function(e){var n=e.query;if(n!==u){var i={q:"%".concat(n,"%")||0},a=/^\d+$/.test(n);"id"in t&&(i.id=a?Number(n):null),"meta"in t&&(i.meta=a?{invoiceNumbers:[n]}:null),"jobNumber"in t&&(i.jobNumber=a?String(n):null,i.invoiceNumber=a?Number(n):null),o(function(e){return(0,r.Z)({},e,i)})}},T=function(e){Object.keys(t).map(function(e){return I(e,null)}),o(t),q(t),A("")};return(0,s.jsx)(p.Z,{handleSubmit:F(A),children:(0,s.jsxs)(g.Z,{title:"Filters",children:[(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(f.Z,{sm:12,lg:12,children:(0,s.jsx)(m.Z,{label:"",children:(0,s.jsx)(h.Z,{errors:_,label:"Search",name:"email",placeholder:"Search...",prependSearchIcon:!0,register:k,type:"search"})})}),(0,s.jsx)(f.Z,{sm:12,lg:12,children:n({control:C,errors:_,initialValues:t,register:k,setFilters:o,watch:z,setValue:I,reset:q})})]}),(0,s.jsx)(b.H,{content:"Search",context:"secondary",handleClick:A,type:"submit",children:(0,s.jsx)(y.Z,{content:"Clear",context:"danger",onClick:T,size:"sm"})})]})})};Z.propTypes={initialValues:l.object,renderFilters:l.func.isRequired,setFilters:l.func.isRequired};var j=function(e){var t=e.FiltersComp,n=e.initialFilters,l=e.TableComp,v=(0,o.Z)(e,["FiltersComp","initialFilters","TableComp"]),p=(0,a.Z)((0,S.X)("form_data_".concat(n.filterType),n),2),g=p[0],m=p[1],h=(0,c.useState)(g||n),y=h[0],b=h[1],j=(0,u.useRouter)().query.show;return(0,c.useEffect)(function(){m(y)},[y,m]),(0,s.jsx)(d.Z,{children:(0,s.jsxs)(f.Z,{sm:12,lg:12,children:[(0,s.jsx)(Z,{initialValues:n,renderFilters:function(e){return(0,s.jsx)(t,(0,i.Z)((0,r.Z)({},e,v),{show:j}))},setFilters:b,filters:y}),(0,s.jsx)(l,(0,r.Z)({filters:y,initialFilters:n},v))]})})};j.propTypes={FiltersComp:l.func,initialFilters:l.object.isRequired,TableComp:l.func}},63102:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(85893),i=n(19076),o=n(55862),a=n(45697),s=n(11163),u=n.n(s),c=n(6388),l=n(7297),d=n(75063);function f(){var e=(0,l.Z)(["\n  query GetLeads(\n    $type: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $orderBy: Lead_order_by!\n  ) {\n    leads: Lead(\n      limit: $limit\n      offset: $offset\n      where: { type: { _eq: $type }, createdAt: { _eq: $date } }\n      order_by: [$orderBy]\n    ) {\n      id\n      type\n      meta\n      createdAt\n      updatedAt\n    }\n    meta: Lead_aggregate(where: { type: { _eq: $type }, createdAt: { _eq: $date } }) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return f=function(){return e},e}var v=(0,d.Ps)(f()),p=n(26186),g=n(34613),m=n(11585),h=n(91272),y=n(20705),b=n(95641),S=function(e){var t=e.filters;e.formData,e.showActionButton;var n=(0,y.x)({filters:t}),i=n.initialData,o=n.ref,a=(0,c.aM)(v,{variables:i}),s=a.data,l=void 0===s?{leads:[],meta:{aggregate:{totalCount:0}}}:s,d=l.leads,f=l.meta,S=a.loading,Z=a.refetch,j=function(e){u().push("".concat("/dashboard/leads/","view?id=").concat(e.id))};return(0,r.jsx)(m.Z,{open:!0,title:"Leads",children:(0,r.jsx)(h.t,{columns:[{hidden:!0},{hidden:!0},{text:"Type"},{sortable:!0,sortName:"createdAt",text:"Created"}],loading:S,meta:f,ref:o,refetch:Z,rowClick:j,rows:d.map(function(e){var t;return{data:e,id:e.id,type:null===(t=b.L.find(function(t){return t.value===e.type}))||void 0===t?void 0:t.text,createdAt:"".concat((0,p.Z)(e.createdAt)," - ").concat((0,g.Z)(e.createdAt))}})})})};S.propTypes={filters:a.object,formData:a.object,showActionButton:a.bool},S.defaultProps={showActionButton:!0};var Z=n(26042),j=n(69396),x=n(9270),w=n(62140),C=n(95103),_=function(e){var t=e.control,n=e.errors,i=e.register,o=e.setFilters;return(0,r.jsx)(x.Z,{children:(0,r.jsx)(w.Z,{md:6,children:(0,r.jsx)(C.Z,(0,j.Z)((0,Z.Z)({},{control:t,errors:n,register:i}),{name:"type",onChange:function(e){return o(function(t){return(0,j.Z)((0,Z.Z)({},t),{type:e.target.value||null})})},options:b.L}))})})};_.propTypes={control:a.object.isRequired,errors:a.object.isRequired,register:a.func.isRequired,setFilters:a.func.isRequired};var F={type:null,filterType:"leads_table"},k=function(){return(0,r.jsx)(o.J,{FiltersComp:_,initialFilters:F,TableComp:S})},q=function(){return(0,r.jsx)(i.Z,{pageHeading:{heading:"Leads"},View:(0,r.jsx)(k,{})})}}},function(e){e.O(0,[3662,2283,1838,3054,8500,7831,9774,2888,179],function(){return e(e.s=91250)}),_N_E=e.O()}]);