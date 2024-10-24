"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6465],{56465:function(e,t,n){n.r(t),n.d(t,{default:function(){return eo}});var a=n(47568),r=n(14924),o=n(26042),s=n(69396),i=n(828),d=n(7297),c=n(97582),u=n(85893),l=n(67294),m=n(45697),p=n(66252),h=n(6388),f=n(50319),y=n(11163),v=n.n(y),g=n(83894),b=n(23855),I=n(43703),Z=n(69119),w=n(38148),x=n(74975),T=n(10367),S=[{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"reactiveJobsToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"plannedJobsToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"complianceJobToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"inprogressJobs",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"liveP1Jobs",greaterIsBetter:!0},{type:"chart",name:"chartJobMetrics"}],C=n(5616),k=n(98456),B=n(86886),j=n(5339),J=n(98572),$=n(67868),D=n(83537),A=n(6425),P=n(75327),M=n(30734),z=n(75063);function N(){var e=(0,d.Z)(["\n  query GetDashboard(\n    $accountId: Int\n    $adminId: Int\n    $timezone: String\n    $asAt: timestamptz\n    $monthStart: timestamptz\n    $dayStart: timestamptz\n    $userId: Int\n    $currentUserId: Int\n    $yearStart: timestamptz\n  ) {\n    dashboardTilesData: getDashboard_HomeTiles(\n      args: {\n        adminId: $adminId\n        asAt: $asAt\n        accountId: $accountId\n        monthStart: $monthStart\n        dayStart: $dayStart\n        userId: $userId\n        yearStart: $yearStart\n      }\n    ) {\n      reactiveJobsToday\n      plannedJobsToday\n      complianceJobToday\n      liveP1Jobs\n      inprogressJobs\n    }\n    chartJobsPerDay: getDashboard_HomeTiles_Jobs_perDay(\n      args: {\n        adminId: $adminId\n        timeZone: $timezone\n        asAt: $asAt\n        accountId: $accountId\n        monthStart: $monthStart\n        dayStart: $dayStart\n        userId: $userId\n        yearStart: $yearStart\n      }\n    ) {\n      jobsOnThisMonth\n    }\n  }\n"]);return N=function(){return e},e}function _(){var e=(0,d.Z)(["\n  query GetDashboard(\n    $accountId: Int\n    $adminId: Int\n    $asAt: timestamptz\n    $monthStart: timestamptz\n    $dayStart: timestamptz\n    $userId: Int\n    $yearStart: timestamptz\n  ) {\n    ",": getDashboard_HomeTiles_","(\n      args: {\n        adminId: $adminId\n        asAt: $asAt\n        accountId: $accountId\n        monthStart: $monthStart\n        dayStart: $dayStart\n        userId: $userId\n        yearStart: $yearStart\n      }\n    ) {\n      sum\n    }\n  }\n"]);return _=function(){return e},e}var q=(0,z.Ps)(N()),E=function(e){var t=e.prevData,n=e.data,a=e.type;return Object.keys(n).reduce(function(e,i){return(0,s.Z)((0,o.Z)({},e),(0,r.Z)({},i,(0,s.Z)((0,o.Z)({},(null==t?void 0:t[i])||{}),(0,r.Z)({},a,n[i]))))},{})},L=function(e){var t,n=e.name,a=e.asAt,r=e.userId,o=e.adminId,s=e.accountId,i=e.time,d=(0,z.Ps)(_(),n,n),c=null;switch(i){case"week":c=(0,M.Z)(a,{weeks:1});break;case"month":c=(0,M.Z)(a,{months:1});break;case"threeMonth":c=(0,M.Z)(a,{months:3});break;case"year":c=(0,M.Z)(a,{years:1})}return{query:d,variables:{adminId:o,accountId:s,asAt:c,dayStart:(0,Z.Z)(c),monthStart:(0,I.Z)(c),userId:r,yearStart:(0,w.Z)(c)}}},R=n(29815),O=n(7069),U=n(77349),H=n(29383),V=n(96486),F="/dashboard",G=function(e){var t,n,a,r,i,d,c=e.asAt,u=e.userTiles,l=e.dashboardTilesData,m=e.userId,p=e.accountId,h=l||{},f=h.complianceJobToday,y=h.inprogressJobs,v=h.liveP1Jobs,g=h.plannedJobsToday,b=h.reactiveJobsToday,I=h.jobsOnThisMonth,Z=[],w=[],T=[],S=[],C=[],k=[];I&&I.length>0&&I.forEach(function(e,t){var n=e.date,a=e.ppmJobsOnThisMonth,r=e.reactiveJobsOnThisMonth,o=new Date(c),s=new Date(n);if(s>=(0,O.Z)(o,8)&&s<=(0,U.Z)(o,7)){if(I[t-1])for(var i=I[t-1].date,d=(0,H.Z)(s,new Date(i)),u=1;u<d;u++)Z.push({date:(0,O.Z)(s,u),values:[]}),S.push({date:(0,O.Z)(s,u),values:[]});Z.push({date:s,values:a}),S.push({date:s,values:r})}if(s>=(0,O.Z)(o,15)&&s<=(0,U.Z)(o,14)){if(I[t-1])for(var l=I[t-1].date,m=(0,H.Z)(s,new Date(l)),p=1;p<m;p++)w.push({date:(0,O.Z)(s,p),values:[]}),C.push({date:(0,O.Z)(s,p),values:[]});w.push({date:s,values:a}),C.push({date:s,values:r})}if(s>=(0,O.Z)(o,31)&&s<=(0,U.Z)(o,30)){if(I[t-1])for(var h=I[t-1].date,f=(0,H.Z)(s,new Date(h)),y=1;y<f;y++)T.push({date:(0,O.Z)(s,y),values:[]}),k.push({date:(0,O.Z)(s,y),values:[]});T.push({date:s,values:a}),k.push({date:s,values:r})}});var B=c?(0,x.Z)(c,"yyyy-MM-dd"):"",j=[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},title:"Reactive jobs today",description:"Reactive jobs scheduled to happen today",name:"reactiveJobsToday",to:"".concat(F,"/issues?asAt=").concat(B,"&tileName=reactiveJobsToday").concat(m?"&userId=".concat(m):"").concat(p?"&accountId=".concat(p):""),values:{today:(null==b?void 0:b.today)||0,week:(null==b?void 0:b.week)||0,month:(null==b?void 0:b.month)||0,threeMonth:(null==b?void 0:b.threeMonth)||0,year:(null==b?void 0:b.year)||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"PPM jobs today",description:"Planned maintenance jobs scheduled to happen today",name:"plannedJobsToday",to:"".concat(F,"/issues?type=ppm&asAt=").concat(B,"&tileName=plannedJobsToday").concat(m?"&userId=".concat(m):"").concat(p?"&accountId=".concat(p):""),values:{today:(null==g?void 0:g.today)||0,week:(null==g?void 0:g.week)||0,month:(null==g?void 0:g.month)||0,threeMonth:(null==g?void 0:g.threeMonth)||0,year:(null==g?void 0:g.year)||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Live P1 jobs",description:"Jobs with P1 status scheduled for today but not completed",name:"liveP1Jobs",to:"".concat(F,"/issues?asAt=").concat(B,"&tileName=liveP1Jobs").concat(m?"&userId=".concat(m):"").concat(p?"&accountId=".concat(p):""),values:{today:(null==v?void 0:v.today)||0,week:(null==v?void 0:v.week)||0,month:(null==v?void 0:v.month)||0,threeMonth:(null==v?void 0:v.threeMonth)||0,year:(null==v?void 0:v.year)||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Compliance jobs today",description:"Compliance work orders that are scheduled to take place today",name:"complianceJobToday",to:"".concat(F,"/issues?asAt=").concat(B,"&tileName=complianceJobToday").concat(m?"&userId=".concat(m):"").concat(p?"&accountId=".concat(p):""),values:{today:(null==f?void 0:f.today)||0,week:(null==f?void 0:f.week)||0,month:(null==f?void 0:f.month)||0,threeMonth:(null==f?void 0:f.threeMonth)||0,year:(null==f?void 0:f.year)||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,20],danger:[21,40],warning:[41,null]},title:"Jobs in progress",description:"Jobs currently in progress",name:"inprogressJobs",to:"".concat(F,"/issues?asAt=").concat(B,"&tileName=inprogressJobs").concat(m?"&userId=".concat(m):"").concat(p?"&accountId=".concat(p):""),values:{today:(null==y?void 0:y.today)||0,week:(null==y?void 0:y.week)||0,month:(null==y?void 0:y.month)||0,threeMonth:(null==y?void 0:y.threeMonth)||0,year:(null==y?void 0:y.year)||0},greaterIsBetter:!0},{type:"chart",size:[2,1],title:"Jobs metrics",name:"chartJobMetrics",values:{week:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:null!==(t=(0,V.orderBy)(Z,"date","asc"))&&void 0!==t?t:[]},{label:"Reactive",color:"#cfd9e0",data:null!==(n=(0,V.orderBy)(S,"date","asc"))&&void 0!==n?n:[]}]}],twoWeeks:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:null!==(a=(0,V.orderBy)(w,"date","asc"))&&void 0!==a?a:[]},{label:"Reactive",color:"#cfd9e0",data:null!==(r=(0,V.orderBy)(C,"date","asc"))&&void 0!==r?r:[]}]}],month:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:null!==(i=(0,V.orderBy)(T,"date","asc"))&&void 0!==i?i:[]},{label:"Reactive",color:"#cfd9e0",data:null!==(d=(0,V.orderBy)(k,"date","asc"))&&void 0!==d?d:[]}]}]}}],J=j.map(function(e){return e.name}),$={success:[0,10],danger:[11,20],warning:[21,null]},D=u.reduce(function(e,t){var n,a=t.colourConfig,r=t.pinned,i=t.greaterIsBetter,d=t.name,c=j.find(function(e){return e.name===d});return c?(0,R.Z)(e).concat([(0,s.Z)((0,o.Z)({},c),{pinned:null!==(n=null!=r?r:c.pinned)&&void 0!==n&&n,colourConfig:void 0===a?$:a,greaterIsBetter:void 0===i||i})]):e},[]).sort(function(e,t){return J.indexOf(e)-J.indexOf(t)});return{fullTilesList:j,userTilesList:D}};function W(){var e=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n\n  .firstBlock {\n    margin: 0;\n    flex-basis: 50% !important;\n    max-width: 50% !important;\n    min-width: auto;\n  }\n\n  .firstBlockItem {\n    padding-left: 24px;\n    padding-top: 24px;\n  }\n\n  .bigTile {\n    flex-basis: 50% !important;\n    max-width: 50%;\n  }\n\n  .secondBlock {\n    margin: 0;\n    flex-basis: 50% !important;\n    min-width: auto;\n  }\n\n  .secondBlockItem {\n    flex-basis: 50% !important;\n    max-width: 50% !important;\n    padding-left: 24px;\n    padding-top: 24px;\n  }\n\n  @media (max-width: 1550px) {\n    .firstBlock {\n      margin: 0;\n      flex-basis: 100% !important;\n      max-width: 100% !important;\n    }\n\n    .bigTile {\n      flex-basis: 100% !important;\n      max-width: 100%;\n    }\n\n    .secondBlock {\n      flex-basis: 100% !important;\n    }\n    .restTilesBoxItem {\n      flex-basis: 100% !important;\n    }\n  }\n\n  @media (max-width: 800px) {\n    .secondBlock {\n      flex-basis: 100% !important;\n    }\n    .secondBlockItem {\n      flex-basis: 100% !important;\n      max-width: 100% !important;\n  }\n"]);return W=function(){return e},e}function K(){var e=(0,d.Z)(["\n  align-content: flex-start;\n  height: auto;\n  min-height: 400px;\n  justify-content: space-between;\n"]);return K=function(){return e},e}function Q(){var e=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  min-width: 824px;\n\n  justify-content: space-between;\n  align-content: space-between;\n"]);return Q=function(){return e},e}function X(){var e=(0,d.Z)(["\n  justify-content: space-between;\n"]);return X=function(){return e},e}var Y=(0,g.Z)(new Date),ee=function(e){var t,n,d=e.user;e.theme;var m=(0,y.useRouter)(),T=(0,p.x)(),M=(0,l.useState)(!1),z=M[0],N=M[1],_=(0,l.useState)({}),R=_[0],O=_[1],U=(0,l.useState)(S),H=U[0],V=U[1],F=(0,l.useState)([]),W=F[0],K=F[1],Q=(0,l.useState)([]),X=Q[0],ee=Q[1],eo=(0,l.useState)(m.query.asAt?(0,g.Z)((0,b.Z)(m.query.asAt)):Y)[0],es=(0,l.useState)({monthStart:(0,I.Z)(eo),todayEnd:(0,g.Z)(eo),todayStart:(0,Z.Z)(eo),yearStart:(0,w.Z)(eo)})[0],ei=(0,l.useState)(m.query.userId?m.query.userId:d.id)[0];(0,l.useEffect)(function(){"/dashboard"===v().pathname&&v().push({pathname:"/dashboard",query:(0,s.Z)((0,o.Z)({},m.query),{asAt:(0,x.Z)(eo,"yyyy-MM-dd"),userId:ei})})},[eo,ei]);var ed=(0,h.aM)(P.iM,{variables:{userId:d.id,accountId:d.accountId}}),ec=ed.data,eu=ed.refetch,el=(null==ec?void 0:null===(t=ec.accountUser)||void 0===t?void 0:null===(n=t[0])||void 0===n?void 0:n.meta)||{},em=(0,i.Z)((0,f.D)(P.fA),1)[0];(0,l.useEffect)(function(){(null==el?void 0:el.dashboard)&&V(el.dashboard)},[el]),(0,l.useEffect)(function(){var e=G({asAt:eo,dashboardTilesData:(0,o.Z)({},R),userTiles:H,accountId:d.accountId,userId:ei}),t=e.userTilesList,n=e.fullTilesList;ee(t),K(n)},[R]);var ep,eh,ef=(0,h.aM)(q,{variables:{accountId:d.accountId,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,adminId:d.adminId,asAt:eo,currentUserId:d.id,dayStart:es.todayStart,monthStart:es.monthStart,userId:ei,yearStart:es.yearStart},onCompleted:function(e){O(function(t){var n,a;return(0,s.Z)((0,o.Z)({},t,E({prevData:t,data:null==e?void 0:null===(n=e.dashboardTilesData)||void 0===n?void 0:n[0],type:"today"})),{jobsOnThisMonth:null==e?void 0:null===(a=e.chartJobsPerDay)||void 0===a?void 0:a.jobsOnThisMonth})}),eg()}}),ey=ef.loading,ev=ef.refetch,eg=(ep=(0,a.Z)(function(){var e,t;return(0,c.__generator)(this,function(e){switch(e.label){case 0:var n;return[4,Promise.all(H.map((n=(0,a.Z)(function(e){var t,n,a,o,s,u,l,m,p,h;return(0,c.__generator)(this,function(n){switch(n.label){case 0:if(t=e.name,"tile"!==e.type)return[2,{}];return o=(a=L({name:t,asAt:eo,adminId:d.adminId,accountId:d.accountId,userId:ei,time:"week"})).query,s=a.variables,[4,T.query({query:o,variables:s})];case 1:return m=void 0===(l=n.sent().data)?(0,r.Z)({},t,[{sum:0}]):l,h=(0,i.Z)(m[t],1)[0].sum,[2,(0,r.Z)({},t,h||0)]}})}),function(e){return n.apply(this,arguments)})))];case 1:return t=e.sent().reduce(function(e,t){return(0,o.Z)({},e,t)},{}),O(function(e){return(0,o.Z)({},e,E({prevData:e,data:t,type:"week"}))}),[2]}})}),function(){return ep.apply(this,arguments)}),eb=function(e){var t=e.tiles,n=e.skipRefetch,a=e.skipRefetchMeta;em({variables:{userId:d.id,accountId:d.accountId,changes:{meta:(0,s.Z)((0,o.Z)({},el),{dashboard:t})}}}).then(function(){n||ev(),a||eu()})},eI=function(e){eb({tiles:H.filter(function(t){return t.name!==e})})},eZ=function(e,t){eb({tiles:H.map(function(n){return n.name===e?(0,s.Z)((0,o.Z)({},n),{colourConfig:t}):n}),skipRefetch:!0})},ew=(eh=(0,a.Z)(function(e,t){var n,a,u,l,m,p,h,f;return(0,c.__generator)(this,function(c){switch(c.label){case 0:return a=(n=L({name:e,asAt:eo,adminId:d.adminId,accountId:d.accountId,userId:ei,time:t})).query,u=n.variables,[4,T.query({query:a,variables:u})];case 1:return p=void 0===(m=c.sent().data)?(0,r.Z)({},e,[{sum:0}]):m,f=(0,i.Z)(p[e],1)[0].sum,O(function(n){return(0,s.Z)((0,o.Z)({},n),(0,r.Z)({},e,(0,s.Z)((0,o.Z)({},n[e]||{}),(0,r.Z)({},t,f||0))))}),[2]}})}),function(e,t){return eh.apply(this,arguments)}),ex=(0,l.useCallback)(function(){var e=[],t=[],n=[],a=[];if(X.forEach(function(e){"tile"===e.type&&e.pinned?t.push(e):"mapChart"===e.type||"chart"===e.type?n.push(e):a.push(e)}),t.length){var r=(0,u.jsx)(ea,{container:!0,spacing:3,className:"firstBlock",children:t.map(function(e,t){var n=e.title,a=e.subtitle,r=e.name,o=e.description,s=e.colourConfig,i=e.values,d=e.valueType,c=e.size,l=e.to,m=e.greaterIsBetter;return(0,u.jsx)(J.Z,{name:r,asAt:eo,className:"firstBlockItem",xs:12,sm3:6,colourConfig:s,title:n,subtitle:a,description:o,to:l,values:i,valueType:d,size:c,greaterIsBetter:m,editable:!0,onEdit:function(){return N(!0)},onVersusChange:ew,onConfigChange:eZ})})});e.push(r)}if(n.length){var o=n.map(function(e){var t=e.type,n=e.title,a=e.description,r=e.name,o=e.values,s=e.size;return"chart"===t?(0,u.jsx)(B.ZP,{item:!0,className:"bigTile",children:(0,u.jsx)($.Z,{asAt:eo,title:n,description:a,showLegend:!0,name:r,data:o,size:s})}):"mapChart"===t?(0,u.jsx)(B.ZP,{item:!0,className:"bigTile",children:(0,u.jsx)(D.Z,{asAt:eo,title:n,description:a,showLegend:!0,name:r,data:o,size:s})}):null});e.push(o)}if(n.length%2==0){var s=a.splice(0,4),i=(0,u.jsx)(ea,{container:!0,spacing:3,className:"secondBlock",children:s.slice(0,4).map(function(e,t){var n=e.title,a=e.subtitle,r=e.name,o=e.description,i=e.colourConfig,d=e.values,c=e.valueType,l=e.size,m=e.to,p=e.greaterIsBetter;return(0,u.jsx)(J.Z,{name:r,asAt:eo,className:"secondBlockItem",sm:12,lg:6,xl:t===s.length-4?12:4,colourConfig:i,title:n,subtitle:a,description:o,to:m,values:d,valueType:c,size:l,greaterIsBetter:p,onVersusChange:ew,onConfigChange:eZ})})});e.push(i)}var d=a.map(function(e){var t=e.name,n=e.title,a=e.subtitle,r=e.description,o=e.colourConfig,s=e.values,i=e.valueType,d=e.size,c=e.to,l=e.greaterIsBetter;return(0,u.jsx)(J.Z,{asAt:eo,xs:12,sm3:6,xl:3,className:"restTilesBoxItem",colourConfig:o,name:t,title:n,subtitle:a,description:r,to:c,values:s,valueType:i,size:d,greaterIsBetter:l,editable:!0,onEdit:function(){return N(!0)},deletable:!0,onDelete:eI,onVersusChange:ew,onConfigChange:eZ})});W.length>X.length&&d.push((0,u.jsx)(j.Z,{width:"100%",xs:12,sm3:6,xl:3,onAddCard:function(){return N(!0)}}));var c=(0,u.jsx)(er,{container:!0,spacing:3,m:0,sx:{justifyContent:"flex-start"},children:d});return e.push(c),(0,u.jsx)(en,{container:!0,spacing:3,children:e})},[X]);return(0,u.jsxs)(C.Z,{sx:{width:"100%",height:"100%"},children:[(0,u.jsx)(et,{children:ey?(0,u.jsx)(C.Z,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,u.jsx)(k.Z,{})}):ex()}),(0,u.jsx)(A.Z,{open:z,fullTilesList:W,selectedTiles:H,onSaveTilesList:function(e){return eb({tiles:e})},onClose:function(){return N(!1)}})]})},et=(0,T.ZP)(C.Z).withConfig({displayName:"dashboard__DashboardBox",componentId:"sc-254de95-0"})(W()),en=(0,T.ZP)(B.ZP).withConfig({displayName:"dashboard__SecondRowBox",componentId:"sc-254de95-1"})(K()),ea=(0,T.ZP)(B.ZP).withConfig({displayName:"dashboard__FirstBox",componentId:"sc-254de95-2"})(Q()),er=(0,T.ZP)(B.ZP).withConfig({displayName:"dashboard__RestTilesBox",componentId:"sc-254de95-3"})(X());ee.propTypes={user:m.object.isRequired};var eo=(0,T.Zz)(ee)}}]);