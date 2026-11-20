(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,919380,e=>{"use strict";var t=e.i(391398),a=e.i(191788),s=e.i(691567),o=e.i(98926),n=e.i(776204),r=e.i(432171),i=e.i(203828),d=e.i(925527),l=e.i(55261),c=e.i(684034),u=e.i(828521),m=e.i(303493),h=e.i(495143),p=e.i(760814);let y=[{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"reactiveJobsToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"plannedJobsToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"complianceJobToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"inprogressJobs",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"liveP1Jobs",greaterIsBetter:!0},{type:"chart",name:"chartJobMetrics"}];var f=e.i(738251),b=e.i(76381),g=e.i(740790),I=e.i(63196),$=e.i(698114),w=e.i(156612),v=e.i(331387),x=e.i(755691),J=e.i(39059),S=e.i(247095),j=e.i(159080);let k=j.f`
  query GetDashboard(
    $accountId: Int
    $adminId: Int
    $timezone: String
    $asAt: timestamptz
    $monthStart: timestamptz
    $dayStart: timestamptz
    $userId: Int
    $currentUserId: Int
    $yearStart: timestamptz
  ) {
    dashboardTilesData: getDashboard_HomeTiles(
      args: {
        adminId: $adminId
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
    ) {
      reactiveJobsToday
      plannedJobsToday
      complianceJobToday
      liveP1Jobs
      liveP2Jobs
      liveP3Jobs
      liveP4Jobs
      liveP5Jobs
      inprogressJobs
    }
    chartJobsPerDay: getDashboard_HomeTiles_Jobs_perDay(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
    ) {
      jobsOnThisMonth
    }
  }
`,C=e=>{let{prevData:t,data:a,type:s}=e;return Object.keys(a).reduce((e,o)=>({...e,[o]:{...t?.[o]||{},[s]:a[o]}}),{})},P=e=>{let{name:t,asAt:a,userId:s,adminId:o,accountId:n,time:r}=e,i=j.f`
  query GetDashboard(
    $accountId: Int
    $adminId: Int
    $asAt: timestamptz
    $monthStart: timestamptz
    $dayStart: timestamptz
    $userId: Int
    $yearStart: timestamptz
  ) {
    ${t}: getDashboard_HomeTiles_${t}(
      args: {
        adminId: $adminId
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
    ) {
      sum
    }
  }
`,d=null;switch(r){case"week":d=(0,S.f)(a,{weeks:1});break;case"month":d=(0,S.f)(a,{months:1});break;case"threeMonth":d=(0,S.f)(a,{months:3});break;case"year":d=(0,S.f)(a,{years:1})}return{query:i,variables:{adminId:o,accountId:n,asAt:d,dayStart:(0,u.f)(d),monthStart:(0,m.f)(d),userId:s,yearStart:(0,h.f)(d)}}};var T=e.i(751874),B=e.i(261539),A=e.i(919358),D=e.i(993993);let M="/dashboard",z=(0,d.f)(new Date),N=e=>{let{user:s}=e,p=(0,i.useRouter)(),S=(0,o.f)(),[j,N]=(0,a.useState)(!1),[q,O]=(0,a.useState)({}),[L,H]=(0,a.useState)(y),[V,F]=(0,a.useState)([]),[G,K]=(0,a.useState)([]),[Z]=(0,a.useState)(p.query.asAt?(0,d.f)((0,c.f)(p.query.asAt)):z),[W]=(0,a.useState)({monthStart:(0,m.f)(Z),todayEnd:(0,d.f)(Z),todayStart:(0,u.f)(Z),yearStart:(0,h.f)(Z)}),[Q]=(0,a.useState)(p.query.userId?p.query.userId:s.id);(0,a.useEffect)(()=>{i.default.push({pathname:"/dashboard",query:{asAt:(0,l.f)(Z,"yyyy-MM-dd"),userId:Q}})},[Z,Q]);let{data:X,refetch:Y}=(0,r.t)(J._,{variables:{userId:s.id,accountId:s.accountId}}),ee=X?.accountUser?.[0]?.meta||{},[et]=(0,n.f)(J.l);(0,a.useEffect)(()=>{ee?.dashboard&&H(ee.dashboard)},[ee]),(0,a.useEffect)(()=>{let{userTilesList:e,fullTilesList:t}=(e=>{let{asAt:t,userTiles:a,dashboardTilesData:s,userId:o,accountId:n}=e,{complianceJobToday:r,inprogressJobs:i,liveP1Jobs:d,liveP2Jobs:c,liveP3Jobs:u,liveP4Jobs:m,liveP5Jobs:h,plannedJobsToday:p,reactiveJobsToday:y,jobsOnThisMonth:f}=s||{},b=[],g=[],I=[],$=[],w=[],v=[];f&&f.length>0&&f.forEach((e,a)=>{let{date:s,ppmJobsOnThisMonth:o,reactiveJobsOnThisMonth:n}=e,r=new Date(t),i=new Date(s);if(i>=(0,A.f)(r,8)&&i<=(0,T.f)(r,7)){if(f[a-1]){let{date:e}=f[a-1],t=(0,B.f)(i,new Date(e));for(let e=1;e<t;e++)b.push({date:(0,A.f)(i,e),values:[]}),$.push({date:(0,A.f)(i,e),values:[]})}b.push({date:i,values:o}),$.push({date:i,values:n})}if(i>=(0,A.f)(r,15)&&i<=(0,T.f)(r,14)){if(f[a-1]){let{date:e}=f[a-1],t=(0,B.f)(i,new Date(e));for(let e=1;e<t;e++)g.push({date:(0,A.f)(i,e),values:[]}),w.push({date:(0,A.f)(i,e),values:[]})}g.push({date:i,values:o}),w.push({date:i,values:n})}if(i>=(0,A.f)(r,31)&&i<=(0,T.f)(r,30)){if(f[a-1]){let{date:e}=f[a-1],t=(0,B.f)(i,new Date(e));for(let e=1;e<t;e++)I.push({date:(0,A.f)(i,e),values:[]}),v.push({date:(0,A.f)(i,e),values:[]})}I.push({date:i,values:o}),v.push({date:i,values:n})}});let x=t?(0,l.f)(t,"yyyy-MM-dd"):"",J=[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},title:"Reactive jobs today",description:"Reactive jobs scheduled to happen today",name:"reactiveJobsToday",to:`${M}/issues?asAt=${x}&tileName=reactiveJobsToday${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:y?.today||0,week:y?.week||0,month:y?.month||0,threeMonth:y?.threeMonth||0,year:y?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"PPM jobs today",description:"Planned maintenance jobs scheduled to happen today",name:"plannedJobsToday",to:`${M}/issues?type=ppm&asAt=${x}&tileName=plannedJobsToday${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:p?.today||0,week:p?.week||0,month:p?.month||0,threeMonth:p?.threeMonth||0,year:p?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Live P1 jobs",description:"Jobs with P1 status scheduled for today but not completed",name:"liveP1Jobs",to:`${M}/issues?asAt=${x}&tileName=liveP1Jobs${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:d?.today||0,week:d?.week||0,month:d?.month||0,threeMonth:d?.threeMonth||0,year:d?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P2 jobs today",description:"Jobs with P2 status scheduled for today but not completed",name:"liveP2Jobs",to:`${M}/issues?asAt=${x}&tileName=liveP2Jobs${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:c?.today||0,week:c?.week||0,month:c?.month||0,threeMonth:c?.threeMonth||0,year:c?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P3 jobs today",description:"Jobs with P3 status scheduled for today but not completed",name:"liveP3Jobs",to:`${M}/issues?asAt=${x}&tileName=liveP3Jobs${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:u?.today||0,week:u?.week||0,month:u?.month||0,threeMonth:u?.threeMonth||0,year:u?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P4 jobs today",description:"Jobs with P4 status scheduled for today but not completed",name:"liveP4Jobs",to:`${M}/issues?asAt=${x}&tileName=liveP4Jobs${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:m?.today||0,week:m?.week||0,month:m?.month||0,threeMonth:m?.threeMonth||0,year:m?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P5 jobs today",description:"Jobs with P5 status scheduled for today but not completed",name:"liveP5Jobs",to:`${M}/issues?asAt=${x}&tileName=liveP5Jobs${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:h?.today||0,week:h?.week||0,month:h?.month||0,threeMonth:h?.threeMonth||0,year:h?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Compliance jobs today",description:"Compliance work orders that are scheduled to take place today",name:"complianceJobToday",to:`${M}/issues?asAt=${x}&tileName=complianceJobToday${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:r?.today||0,week:r?.week||0,month:r?.month||0,threeMonth:r?.threeMonth||0,year:r?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,20],danger:[21,40],warning:[41,null]},title:"Jobs in progress",description:"Jobs currently in progress",name:"inprogressJobs",to:`${M}/issues?asAt=${x}&tileName=inprogressJobs${o?`&userId=${o}`:""}${n?`&accountId=${n}`:""}`,values:{today:i?.today||0,week:i?.week||0,month:i?.month||0,threeMonth:i?.threeMonth||0,year:i?.year||0},greaterIsBetter:!0},{type:"chart",size:[2,1],title:"Jobs metrics",name:"chartJobMetrics",values:{week:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,D.default)(b,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,D.default)($,"date","asc")??[]}]}],twoWeeks:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,D.default)(g,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,D.default)(w,"date","asc")??[]}]}],month:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,D.default)(I,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,D.default)(v,"date","asc")??[]}]}]}}],S=J.map(e=>e.name),j={success:[0,10],danger:[11,20],warning:[21,null]},k=a.reduce((e,t)=>{let{colourConfig:a=j,pinned:s,greaterIsBetter:o=!0,name:n}=t,r=J.find(e=>e.name===n);return r?[...e,{...r,pinned:s??r.pinned??!1,colourConfig:a,greaterIsBetter:o}]:e},[]).sort((e,t)=>S.indexOf(e)-S.indexOf(t));return{fullTilesList:J,userTilesList:k}})({asAt:Z,dashboardTilesData:{...q},userTiles:L,accountId:s.accountId,userId:Q});K(e),F(t)},[q]);let{loading:ea,refetch:es}=(0,r.t)(k,{variables:{accountId:s.accountId,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,adminId:s.adminId,asAt:Z,currentUserId:s.id,dayStart:W.todayStart,monthStart:W.monthStart,userId:Q,yearStart:W.yearStart},onCompleted:e=>{O(t=>({...t,...C({prevData:t,data:e?.dashboardTilesData?.[0],type:"today"}),jobsOnThisMonth:e?.chartJobsPerDay?.jobsOnThisMonth})),eo()}}),eo=async()=>{let e=(await Promise.all(L.map(async e=>{let{name:t,type:a}=e;if("tile"!==a)return{};let{query:o,variables:n}=P({name:t,asAt:Z,adminId:s.adminId,accountId:s.accountId,userId:Q,time:"week"});try{let{data:{[t]:[{sum:e}]}={[t]:[{sum:0}]}}=await S.query({query:o,variables:n});return{[t]:e||0}}catch(e){return console.error(`Dashboard comparison failed for tile "${t}"`,e),{}}}))).reduce((e,t)=>({...e,...t}),{});O(t=>({...t,...C({prevData:t,data:e,type:"week"})}))},en=e=>{let{tiles:t,skipRefetch:a,skipRefetchMeta:o}=e;et({variables:{userId:s.id,accountId:s.accountId,changes:{meta:{...ee,dashboard:t}}}}).then(()=>{a||es(),o||Y()})},er=e=>{en({tiles:L.filter(t=>t.name!==e)})},ei=(e,t)=>{en({tiles:L.map(a=>a.name===e?{...a,colourConfig:t}:a),skipRefetch:!0})},ed=async(e,t)=>{let{query:a,variables:o}=P({name:e,asAt:Z,adminId:s.adminId,accountId:s.accountId,userId:Q,time:t}),{data:{[e]:[{sum:n}]}={[e]:[{sum:0}]}}=await S.query({query:a,variables:o});O(a=>({...a,[e]:{...a[e]||{},[t]:n||0}}))},el=(0,a.useCallback)(()=>{let e=[],a=[],s=[],o=[];if(G.forEach(e=>{"tile"===e.type&&e.pinned?a.push(e):"mapChart"===e.type||"chart"===e.type?s.push(e):o.push(e)}),a.length){let s=(0,t.jsx)(R,{container:!0,spacing:3,className:"firstBlock",children:a.map(e=>{let{title:a,subtitle:s,name:o,description:n,colourConfig:r,values:i,valueType:d,size:l,to:c,greaterIsBetter:u}=e;return(0,t.jsx)($.f,{name:o,asAt:Z,className:"firstBlockItem",xs:12,sm3:6,colourConfig:r,title:a,subtitle:s,description:n,to:c,values:i,valueType:d,size:l,greaterIsBetter:u,editable:!0,onEdit:()=>N(!0),onVersusChange:ed,onConfigChange:ei})})});e.push(s)}if(s.length){let a=s.map(e=>{let{type:a,title:s,description:o,name:n,values:r,size:i}=e;return"chart"===a?(0,t.jsx)(g.f,{item:!0,className:"bigTile",children:(0,t.jsx)(w.f,{asAt:Z,title:s,description:o,showLegend:!0,name:n,data:r,size:i})}):"mapChart"===a?(0,t.jsx)(g.f,{item:!0,className:"bigTile",children:(0,t.jsx)(v.f,{asAt:Z,title:s,description:o,showLegend:!0,name:n,data:r,size:i})}):null});e.push(a)}if(s.length%2==0){let a=o.splice(0,4),s=(0,t.jsx)(R,{container:!0,spacing:3,className:"secondBlock",children:a.slice(0,4).map((e,s)=>{let{title:o,subtitle:n,name:r,description:i,colourConfig:d,values:l,valueType:c,size:u,to:m,greaterIsBetter:h}=e;return(0,t.jsx)($.f,{name:r,asAt:Z,className:"secondBlockItem",sm:12,lg:6,xl:s===a.length-4?12:4,colourConfig:d,title:o,subtitle:n,description:i,to:m,values:l,valueType:c,size:u,greaterIsBetter:h,onVersusChange:ed,onConfigChange:ei})})});e.push(s)}let n=o.map(e=>{let{name:a,title:s,subtitle:o,description:n,colourConfig:r,values:i,valueType:d,size:l,to:c,greaterIsBetter:u}=e;return(0,t.jsx)($.f,{asAt:Z,xs:12,sm3:6,xl:3,className:"restTilesBoxItem",colourConfig:r,name:a,title:s,subtitle:o,description:n,to:c,values:i,valueType:d,size:l,greaterIsBetter:u,editable:!0,onEdit:()=>N(!0),deletable:!0,onDelete:er,onVersusChange:ed,onConfigChange:ei})});V.length>G.length&&n.push((0,t.jsx)(I.f,{width:"100%",xs:12,sm3:6,xl:3,onAddCard:()=>N(!0)}));let r=(0,t.jsx)(U,{container:!0,spacing:3,m:0,sx:{justifyContent:"flex-start"},children:n});return e.push(r),(0,t.jsx)(E,{container:!0,spacing:3,children:e})},[G]);return(0,t.jsxs)(f.f,{sx:{width:"100%",height:"100%"},children:[(0,t.jsx)(_,{children:ea?(0,t.jsx)(f.f,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(b.f,{})}):el()}),(0,t.jsx)(x.f,{open:j,fullTilesList:V,selectedTiles:L,onSaveTilesList:e=>en({tiles:e}),onClose:()=>N(!1)})]})},_=(0,p.U)(f.f).withConfig({displayName:"dashboard__DashboardBox",componentId:"sc-c473799c-0"})`
  width: 100%;
  height: 100%;

  .firstBlock {
    margin: 0;
    flex-basis: 50% !important;
    max-width: 50% !important;
    min-width: auto;
  }

  .firstBlockItem {
    padding-left: 24px;
    padding-top: 24px;
  }

  .bigTile {
    flex-basis: 50% !important;
    max-width: 50%;
  }

  .secondBlock {
    margin: 0;
    flex-basis: 50% !important;
    min-width: auto;
  }

  .secondBlockItem {
    flex-basis: 50% !important;
    max-width: 50% !important;
    padding-left: 24px;
    padding-top: 24px;
  }

  @media (max-width: 1550px) {
    .firstBlock {
      margin: 0;
      flex-basis: 100% !important;
      max-width: 100% !important;
    }

    .bigTile {
      flex-basis: 100% !important;
      max-width: 100%;
    }

    .secondBlock {
      flex-basis: 100% !important;
    }
    .restTilesBoxItem {
      flex-basis: 100% !important;
    }
  }

  @media (max-width: 800px) {
    .secondBlock {
      flex-basis: 100% !important;
    }
    .secondBlockItem {
      flex-basis: 100% !important;
      max-width: 100% !important;
  }
`,E=(0,p.U)(g.f).withConfig({displayName:"dashboard__SecondRowBox",componentId:"sc-c473799c-1"})`
  align-content: flex-start;
  height: auto;
  min-height: 400px;
  justify-content: space-between;
`,R=(0,p.U)(g.f).withConfig({displayName:"dashboard__FirstBox",componentId:"sc-c473799c-2"})`
  display: flex;
  flex-wrap: wrap;

  min-width: 824px;

  justify-content: space-between;
  align-content: space-between;
`,U=(0,p.U)(g.f).withConfig({displayName:"dashboard__RestTilesBox",componentId:"sc-c473799c-3"})`
  justify-content: space-between;
`;N.propTypes={user:s.object.isRequired};let q=(0,p.n)(N);e.s(["default",0,q],919380)},903470,function(e){e.n(e.i(919380))}]);