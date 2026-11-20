(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,920973,e=>{"use strict";var t=e.i(391398),a=e.i(191788),o=e.i(691567),r=e.i(98926),s=e.i(776204),n=e.i(432171),i=e.i(159080);let d=i.f`
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
      thresholdApprovals
      quotesNotSubmitted
      reactiveJobsToday
      plannedJobsToday
      complianceJobToday
      reportUnsent
      liveP1Jobs
      liveP2Jobs
      liveP3Jobs
      liveP4Jobs
      liveP5Jobs
      offeredJobs
      quotesToday
      quotesNotSent
      quotesOverdue
      quotesDueThisWeek
      inprogressJobs
      numberOfOpenJobs
      jobsInDispute
      worksValueMTD
      worksValueYTD
      overdueComplianceJobs
      onHold
      upliftRequested
      ppmOverdue
      reactiveOverdue
      failedJobs
      jobsWithTimeNotConfirmed
      jobsRequiringExpenseAmount
      imminentJobSlaBreaches
      jobsWithTimeNotConfirmedNext7days
      jobsWithTimeNotConfirmedCurrentMonth
      openRemedialQuotes
      openQuotes
      imminentQuoteSlaBreaches
      quoteSlaBreached
      jobSlaBreachedOnSite
      jobSlaBreachedJobReport
      incompleteJobsPpm
      incompleteJobsReactive
      openJobsReactive
      openJobsPpm
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
    chartTimeToAttendSite: getDashboard_KPI_TimeToAttendSite(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        period: "period30d"
      }
    ) {
      data
    }
    chartTimeToReceiveReport: getDashboard_KPI_TimeToReceiveReport(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        period: "period30d"
      }
    ) {
      data
    }
    chartRevenuesPerDay: getDashboard_HomeTiles_Revenues_perDay(
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
      revenuesOnThisMonth
    }
    chartRevenuesPerYear: getDashboard_HomeTiles_Revenues_perYear(
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
      revenuesOnThisYear
    }
  }
`,l=i.f`
  query GetSuppliersLocation($where: UserLocation_bool_exp) {
    suppliersLocation: UserLocation(distinct_on: userId, where: $where) {
      id
      geo
      account: Account {
        id
        name
      }
      user: User {
        id
        fullName
      }
    }
  }
`,u=i.f`
  query GetJobsLocation($where: Job_bool_exp) {
    jobsLocation: Job(where: $where, order_by: { createdAt: desc }) {
      id
      number
      type
      location: Location {
        id
        name
        addresses: Addresses(
          where: { registered: { _eq: true }, entity: { _eq: "Location" } }
          order_by: { createdAt: desc }
        ) {
          address: Address {
            addressLine1
            addressLine2
            addressLine3
            postCode
            name
            geo
          }
        }
      }
      supplier: Supplier {
        id
        name
      }
      service: Service {
        id
        name
      }
    }
  }
`;var c=e.i(203828),h=e.i(925527),m=e.i(55261),p=e.i(684034),y=e.i(828521),b=e.i(303493),g=e.i(495143),f=e.i(760814);let $=[{pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"reactiveJobsToday",greaterIsBetter:!0},{pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},name:"plannedJobsToday",greaterIsBetter:!0},{pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},name:"quotesToday",greaterIsBetter:!0},{pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},name:"liveP1Jobs",greaterIsBetter:!0},{name:"chartJobMetrics"},{name:"mapChart"},{name:"numberOfNotifications"}];var w=e.i(510364),v=e.i(751874),I=e.i(261539),k=e.i(919358),S=e.i(993993);let j="/dashboard";var M=e.i(738251),J=e.i(76381),C=e.i(740790),A=e.i(63196),T=e.i(698114),D=e.i(156612),x=e.i(331387),N=e.i(755691),B=e.i(39059),P=e.i(247095),_=e.i(380771);let z=e=>{let{prevData:t,data:a,type:o}=e;return Object.keys(a).reduce((e,r)=>({...e,[r]:{...t?.[r]||{},[o]:a[r]}}),{})},R=e=>{let{name:t,asAt:a,userId:o,adminId:r,accountId:s,time:n}=e,d=i.f`
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
`,l=null;switch(n){case"week":l=(0,P.f)(a,{weeks:1});break;case"month":l=(0,P.f)(a,{months:1});break;case"threeMonth":l=(0,P.f)(a,{months:3});break;case"year":l=(0,P.f)(a,{years:1})}return{query:d,variables:{adminId:r,accountId:s,asAt:l,dayStart:(0,y.f)(l),monthStart:(0,b.f)(l),userId:o,yearStart:(0,g.f)(l)}}};var L=e.i(498681),q=e.i(594301);let O=(0,h.f)(new Date),E=e=>{let{user:o,theme:i}=e,f=(0,c.useRouter)(),{hasUserModule:E}=(0,L.f)(),{hasRole:Y}=(0,q.f)(),H=(0,r.f)(),[K,Z]=(0,a.useState)(!1),[G,F]=(0,a.useState)({}),[X,ee]=(0,a.useState)($),[et,ea]=(0,a.useState)([]),[eo,er]=(0,a.useState)([]),[es]=(0,a.useState)(f.query.asAt?(0,h.f)((0,p.f)(f.query.asAt)):O),[en]=(0,a.useState)({monthStart:(0,b.f)(es),todayEnd:(0,h.f)(es),todayStart:(0,y.f)(es),yearStart:(0,g.f)(es)}),[ei]=(0,a.useState)(f.query.userId?f.query.userId:o.id);(0,a.useEffect)(()=>{c.default.push({pathname:"/dashboard",query:{asAt:(0,m.f)(es,"yyyy-MM-dd"),userId:ei}})},[es,ei]);let{data:ed,refetch:el}=(0,n.t)(B._,{variables:{userId:o.id,accountId:o.accountId}}),eu=ed?.accountUser?.[0]?.meta||{},[ec]=(0,s.f)(B.l);(0,a.useEffect)(()=>{eu?.dashboard&&ee(eu.dashboard)},[eu]),(0,a.useEffect)(()=>{let{userTilesList:e,fullTilesList:t}=(e=>{let{asAt:t,userTiles:a,dashboardTilesData:o,userId:r,accountId:s,hasUserModule:n,hasRole:i}=e,{thresholdApprovals:d,quotesNotSubmitted:l,complianceJobToday:u,inprogressJobs:c,liveP1Jobs:h,liveP2Jobs:p,liveP3Jobs:y,liveP4Jobs:b,liveP5Jobs:g,offeredJobs:f,onHold:$,overdueComplianceJobs:M,plannedJobsToday:J,ppmOverdue:C,quotesDueThisWeek:A,quotesOverdue:T,quotesToday:D,reactiveJobsToday:x,reportUnsent:N,reactiveOverdue:B,upliftRequested:P,worksValueMTD:_,worksValueYTD:z,jobsOnThisMonth:R,revenuesOnThisMonth:L,revenuesOnThisYear:q,suppliersLocation:O,jobsLocation:E,failedJobs:W,jobsWithTimeNotConfirmed:U,jobsRequiringExpenseAmount:Q,imminentJobSlaBreaches:V,jobsWithTimeNotConfirmedCurrentMonth:Y,jobsWithTimeNotConfirmedNext7days:H,openRemedialQuotes:K,openQuotes:Z,imminentQuoteSlaBreaches:G,quoteSlaBreached:F,jobSlaBreachedOnSite:X,jobSlaBreachedJobReport:ee,averageTimeToAttendSite:et,averageTimeToReceiveReport:ea,incompleteJobsPpm:eo,incompleteJobsReactive:er,openJobsReactive:es,openJobsPpm:en}=o||{},ei=!i("supplier_contractor")||n("quotes"),ed=!i("supplier_contractor")||n("finances"),el=[],eu=[],ec=[],eh=[],em=[],ep=[],ey=[],eb=[],eg=[],ef=[],e$=[],ew=[],ev=[],eI=[],ek=[],eS=[];if(et?.period30d&&et.period30d.length>0){let e="dd/MM";et.period30d.forEach(a=>{let{date:o,avgPlanned:r,avgReactive:s}=a,n=new Date(o),i=new Date(t),d={date:n,avgPlanned:(0,w.y)(r),avgReactive:(0,w.y)(s),formatDate:e,actualDate:(0,m.f)(n,e)};ev.push(d),n>=(0,k.f)(i,15)&&n<=(0,v.f)(i,14)&&ew.push(d),n>=(0,k.f)(i,8)&&n<=(0,v.f)(i,7)&&e$.push(d)})}if(ea?.period30d&&ea.period30d.length>0){let e="dd/MM";ea.period30d.forEach(a=>{let{date:o,avgPlanned:r,avgReactive:s}=a,n=new Date(o),i=new Date(t),d={date:n,avgPlanned:(0,w.y)(r),avgReactive:(0,w.y)(s),formatDate:e,actualDate:(0,m.f)(n,e)};eS.push(d),n>=(0,k.f)(i,15)&&n<=(0,v.f)(i,14)&&ek.push(d),n>=(0,k.f)(i,8)&&n<=(0,v.f)(i,7)&&eI.push(d)})}if(R&&R.length>0&&R.forEach((e,a)=>{let{date:o,ppmJobsOnThisMonth:r,reactiveJobsOnThisMonth:s}=e,n=new Date(t),i=new Date(o);if(i>=(0,k.f)(n,8)&&i<=(0,v.f)(n,7)){if(R[a-1]){let{date:e}=R[a-1],t=(0,I.f)(i,new Date(e));for(let e=1;e<t;e++)el.push({date:(0,k.f)(i,e),values:[]}),eh.push({date:(0,k.f)(i,e),values:[]})}el.push({date:i,values:r}),eh.push({date:i,values:s})}if(i>=(0,k.f)(n,15)&&i<=(0,v.f)(n,14)){if(R[a-1]){let{date:e}=R[a-1],t=(0,I.f)(i,new Date(e));for(let e=1;e<t;e++)eu.push({date:(0,k.f)(i,e),values:[]}),em.push({date:(0,k.f)(i,e),values:[]})}eu.push({date:i,values:r}),em.push({date:i,values:s})}if(i>=(0,k.f)(n,31)&&i<=(0,v.f)(n,30)){if(R[a-1]){let{date:e}=R[a-1],t=(0,I.f)(i,new Date(e));for(let e=1;e<t;e++)ec.push({date:(0,k.f)(i,e),values:[]}),ep.push({date:(0,k.f)(i,e),values:[]})}ec.push({date:i,values:r}),ep.push({date:i,values:s})}}),L&&L.length>0){let e="dd/MM";L.forEach((a,o)=>{let{date:r,revenuesOnThisDay:s}=a,n=new Date(t),i=new Date(r);if(i>=(0,k.f)(n,8)){if(L[o-1]){let{date:e}=L[o-1],t=(0,I.f)(new Date(e),i);for(let e=1;e<t;e++)ey.push({date:(0,v.f)(i,e),sum:[]})}ey.push({date:i,sum:s,formatDate:e})}if(i>=(0,k.f)(n,15)){if(L[o-1]){let{date:e}=L[o-1],t=(0,I.f)(new Date(e),i);for(let e=1;e<t;e++)eb.push({date:(0,v.f)(i,e),sum:[]})}eb.push({date:i,sum:s,formatDate:e})}if(i>=(0,k.f)(n,31)){if(L[o-1]){let{date:e}=L[o-1],t=(0,I.f)(new Date(e),i);for(let e=1;e<t;e++)eg.push({date:(0,v.f)(i,e),sum:[]})}eg.push({date:i,sum:s,formatDate:e})}})}q&&q.length>0&&q.forEach(e=>{let{date:t,revenuesOnThisMonth:a}=e;ef.push({date:t,sum:a,formatDate:"MM/yyyy"})});let ej=t?(0,m.f)(t,"yyyy-MM-dd"):"",eM=[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},title:"Reactive jobs today",description:"Reactive jobs scheduled to happen today",name:"reactiveJobsToday",to:`${j}/issues?asAt=${ej}&tileName=reactiveJobsToday${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:x?.today||0,week:x?.week||0,month:x?.month||0,threeMonth:x?.threeMonth||0,year:x?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"PPM jobs today",description:"Planned maintenance jobs scheduled to happen today",name:"plannedJobsToday",to:`${j}/issues?type=ppm&asAt=${ej}&tileName=plannedJobsToday${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:J?.today||0,week:J?.week||0,month:J?.month||0,threeMonth:J?.threeMonth||0,year:J?.year||0},greaterIsBetter:!0},...ei?[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},title:"Quotes today",description:"Quotes where due date is today",name:"quotesToday",to:`${j}/quotes?asAt=${ej}&tileName=quotesToday${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:D?.today||0,week:D?.week||0,month:D?.month||0,threeMonth:D?.threeMonth||0,year:D?.year||0},greaterIsBetter:!0}]:[],...ei?[{type:"chart",size:[2,1],title:"Jobs metrics",name:"chartJobMetrics",values:{week:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,S.default)(el,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,S.default)(eh,"date","asc")??[]}]},{groupLabel:"Revenue per day",groupName:"revenuesPerUnit",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(ey,"date","asc")??[]}]}],twoWeeks:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,S.default)(eu,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,S.default)(em,"date","asc")??[]}]},{groupLabel:"Revenue per day",groupName:"revenuesPerUnit",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(eb,"date","asc")??[]}]}],month:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,S.default)(ec,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,S.default)(ep,"date","asc")??[]}]},{groupLabel:"Revenue per day",groupName:"revenuesPerUnit",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(eg,"date","asc")??[]}]}],year:[{groupLabel:"Monthly job revenue",groupName:"revenuesPerYear",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(ef,"date","asc")??[]}]}]}}]:[],{type:"chart",size:[2,1],title:"Average time to attend site",name:"chartAverageTimeToAttendSite",values:{week:[{groupLabel:"Average time to attend site",groupName:"averageTimeToAttendSite",groupDescription:"Average time to attend site over the last 30 days",chartData:[{label:"Planned",color:"#1E88E5",valueKey:"avgPlanned",data:(0,S.default)(ev,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",valueKey:"avgReactive",data:(0,S.default)(ev,"date","asc")??[]}]}]},historicalComparison:{enabled:!0,defaultOption:"",options:[{value:"",label:"Compare with"},{value:"earlier30d",label:"30 days earlier"},{value:"earlier90d",label:"90 days earlier"},{value:"earlier1y",label:"1 year earlier"}]}},{type:"chart",size:[2,1],title:"Average time to receive job report",name:"chartAverageTimeToReceiveReport",values:{week:[{groupLabel:"Average time to receive job report",groupName:"averageTimeToReceiveReport",groupDescription:"Average time to receive job report over the last 30 days",chartData:[{label:"Planned",color:"#1E88E5",valueKey:"avgPlanned",data:(0,S.default)(eS,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",valueKey:"avgReactive",data:(0,S.default)(eS,"date","asc")??[]}]}]},historicalComparison:{enabled:!0,defaultOption:"",options:[{value:"",label:"Compare with"},{value:"earlier30d",label:"30 days earlier"},{value:"earlier90d",label:"90 days earlier"},{value:"earlier1y",label:"1 year earlier"}]}},{type:"mapChart",size:[2,1],title:"Geolocation info",name:"mapChart",values:{month:[{groupLabel:"Last supplier location",groupName:"suppliersLocation",groupDescription:"Last supplier location",chartData:[{label:"Last supplier location",markerIcon:"supplier",data:O?.month||[]}]},{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.month||[]}]}],threeMonth:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.threeMonth||[]}]}],tomorrow:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.tomorrow||[]}]}],today:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.today||[]}]}],nextWeek:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.nextWeek||[]}]}],nextTwoWeeks:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.nextTwoWeeks||[]}]}],nextMonth:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.nextMonth||[]}]}],week:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.week||[]}]}]}},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Live P1 jobs",description:"Jobs with P1 status scheduled for today but not completed",name:"liveP1Jobs",to:`${j}/issues?asAt=${ej}&tileName=liveP1Jobs${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:h?.today||0,week:h?.week||0,month:h?.month||0,threeMonth:h?.threeMonth||0,year:h?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P2 jobs today",description:"Jobs with P2 status scheduled for today but not completed",name:"liveP2Jobs",to:`${j}/issues?asAt=${ej}&tileName=liveP2Jobs${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:p?.today||0,week:p?.week||0,month:p?.month||0,threeMonth:p?.threeMonth||0,year:p?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P3 jobs today",description:"Jobs with P3 status scheduled for today but not completed",name:"liveP3Jobs",to:`${j}/issues?asAt=${ej}&tileName=liveP3Jobs${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:y?.today||0,week:y?.week||0,month:y?.month||0,threeMonth:y?.threeMonth||0,year:y?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P4 jobs today",description:"Jobs with P4 status scheduled for today but not completed",name:"liveP4Jobs",to:`${j}/issues?asAt=${ej}&tileName=liveP4Jobs${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:b?.today||0,week:b?.week||0,month:b?.month||0,threeMonth:b?.threeMonth||0,year:b?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P5 jobs today",description:"Jobs with P5 status scheduled for today but not completed",name:"liveP5Jobs",to:`${j}/issues?asAt=${ej}&tileName=liveP5Jobs${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:g?.today||0,week:g?.week||0,month:g?.month||0,threeMonth:g?.threeMonth||0,year:g?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Overdue reactive jobs",description:"Reactive jobs that have not yet been started or completed 24 hours after scheduled time",name:"reactiveOverdue",to:`${j}/issues?asAt=${ej}&tileName=reactiveOverdue${r?`&userId=${r}`:""}`,values:{today:B?.today||0,week:B?.week||0,month:B?.month||0,threeMonth:B?.threeMonth||0,year:B?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Overdue PPM",description:"Planned maintenance jobs that have not yet been started or completed 24 hours after scheduled time",name:"ppmOverdue",to:`${j}/issues?type=ppm&asAt=${ej}&tileName=ppmOverdue${r?`&userId=${r}`:""}`,values:{today:C?.today||0,week:C?.week||0,month:C?.month||0,threeMonth:C?.threeMonth||0,year:C?.year||0},greaterIsBetter:!0},...ei?[{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Quotes overdue",description:"Quotes which are past due date but have not had resolution.",name:"quotesOverdue",to:`${j}/quotes?asAt=${ej}&tileName=quotesOverdue${r?`&userId=${r}`:""}`,values:{today:T?.today||0,week:T?.week||0,month:T?.month||0,threeMonth:T?.threeMonth||0,year:T?.year||0},greaterIsBetter:!0}]:[],{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Compliance jobs today",description:"Compliance work orders that are scheduled to take place today",name:"complianceJobToday",to:`${j}/issues?asAt=${ej}&tileName=complianceJobToday${r?`&userId=${r}`:""}`,values:{today:u?.today||0,week:u?.week||0,month:u?.month||0,threeMonth:u?.threeMonth||0,year:u?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Overdue compliance jobs",description:"Compliance jobs that have not yet been started or completed 24 hours after scheduled time",name:"overdueComplianceJobs",to:`${j}/issues?asAt=${ej}&tileName=overdueComplianceJobs${r?`&userId=${r}`:""}`,values:{today:M?.today||0,week:M?.week||0,month:M?.month||0,threeMonth:M?.threeMonth||0,year:M?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,20],danger:[21,40],warning:[41,null]},title:"Jobs in progress",description:"Jobs currently in progress",name:"inprogressJobs",to:`${j}/issues?asAt=${ej}&tileName=inprogressJobs${r?`&userId=${r}`:""}`,values:{today:c?.today||0,week:c?.week||0,month:c?.month||0,threeMonth:c?.threeMonth||0,year:c?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},title:"Reports unsent",description:"Jobs that have been completed but where a report has not been sent within 24 hours",name:"reportUnsent",to:`${j}/issues?asAt=${ej}&tileName=reportUnsent${r?`&userId=${r}`:""}`,values:{today:N?.today||0,week:N?.week||0,month:N?.month||0,threeMonth:N?.threeMonth||0,year:N?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Jobs on hold",description:"Jobs currently marked as on hold",name:"onHold",to:`${j}/issues?asAt=${ej}&tileName=onHold${r?`&userId=${r}`:""}`,values:{today:$?.today||0,week:$?.week||0,month:$?.month||0,threeMonth:$?.threeMonth||0,year:$?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Uplift requests",description:"Jobs where an uplift has been requested but not yet approved or rejected",name:"upliftRequested",to:`${j}/issues?asAt=${ej}&tileName=upliftRequested${r?`&userId=${r}`:""}`,values:{today:P?.today||0,week:P?.week||0,month:P?.month||0,threeMonth:P?.threeMonth||0,year:P?.year||0},greaterIsBetter:!0},...ei?[{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Quotes due this week",description:"Quotes where due date is within next 7 days",name:"quotesDueThisWeek",to:`${j}/quotes?asAt=${ej}&tileName=quotesDueThisWeek${r?`&userId=${r}`:""}`,values:{today:A?.today||0,week:A?.week||0,month:A?.month||0,threeMonth:A?.threeMonth||0,year:A?.year||0},greaterIsBetter:!0}]:[],...ei?[{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Quotes not submitted",description:"Quotes that have not yet been submitted",name:"quotesNotSubmitted",to:`${j}/quotes?asAt=${ej}&tileName=quotesNotSubmitted${r?`&userId=${r}`:""}`,values:{today:l?.today||0,week:l?.week||0,month:l?.month||0,threeMonth:l?.threeMonth||0,year:l?.year||0},greaterIsBetter:!0}]:[],...ed?[{type:"tile",size:[1,1],colourConfig:{success:[0,9],danger:[10,10],warning:[11,null]},title:"Work order value (MTD)",description:"Value of jobs completed in the month to date",name:"worksValueMTD",to:`${j}/issues?asAt=${ej}&tileName=worksValueMTD${r?`&userId=${r}`:""}`,values:{today:_?.today||0,week:_?.week||0,month:_?.month||0,threeMonth:_?.threeMonth||0,year:_?.year||0},greaterIsBetter:!0,valueType:"price",hiddenVersusOptions:["week"]}]:[],...ed?[{type:"tile",size:[1,1],colourConfig:{success:[0,9],danger:[10,10],warning:[11,null]},title:"Work order value (YTD)",description:"Value of jobs completed in the year to date",name:"worksValueYTD",to:`${j}/issues?asAt=${ej}&tileName=worksValueYTD${r?`&userId=${r}`:""}`,values:{today:z?.today||0,week:z?.week||0,month:z?.month||0,threeMonth:z?.threeMonth||0,year:z?.year||0},greaterIsBetter:!0,valueType:"price",hiddenVersusOptions:["week","month","threeMonth"]}]:[],{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Threshold approvals outstanding",description:"Work orders and quotes where approval is required based on threshold levels",name:"thresholdApprovals",to:`${j}/issues?asAt=${ej}&tileName=thresholdApprovals${r?`&userId=${r}`:""}`,values:{today:d?.today||0,week:d?.week||0,month:d?.month||0,threeMonth:d?.threeMonth||0,year:d?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Failed jobs",description:"Jobs where supplier has reported failures and these have not been resolved.",name:"failedJobs",to:`${j}/issues?asAt=${ej}&tileName=failedJobs${r?`&userId=${r}`:""}`,values:{today:W?.today||0,week:W?.week||0,month:W?.month||0,threeMonth:W?.threeMonth||0,year:W?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Jobs with time not confirmed",description:"Scheduled jobs where an attendance time has not been specified by supplier.",name:"jobsWithTimeNotConfirmed",to:`${j}/issues?asAt=${ej}&tileName=jobsWithTimeNotConfirmed${r?`&userId=${r}`:""}`,values:{today:U?.today||0,week:U?.week||0,month:U?.month||0,threeMonth:U?.threeMonth||0,year:U?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Jobs requiring expense amounts",description:"Jobs where expenses have amount expense pending.",name:"jobsRequiringExpenseAmount",to:`${j}/issues?asAt=${ej}&tileName=jobsRequiringExpenseAmount${r?`&userId=${r}`:""}`,values:{today:Q?.today||0,week:Q?.week||0,month:Q?.month||0,threeMonth:Q?.threeMonth||0,year:Q?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Imminent job SLA breaches",description:"These are jobs where there is a potential SLA breach in 1 hour or less.",name:"imminentJobSlaBreaches",to:`${j}/issues?asAt=${ej}&tileName=imminentJobSlaBreaches${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:V?.today||0,week:V?.week||0,month:V?.month||0,threeMonth:V?.threeMonth||0,year:V?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Jobs with time not confirmed.",subtitle:"Current month",description:"Scheduled jobs that are due to be completed in the current calendar month but where no attendance time has been specified by the supplier.",name:"jobsWithTimeNotConfirmedCurrentMonth",to:`${j}/issues?asAt=${ej}&tileName=jobsWithTimeNotConfirmedCurrentMonth${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:Y?.today||0,week:Y?.week||0,month:Y?.month||0,threeMonth:Y?.threeMonth||0,year:Y?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Jobs with time not confirmed",subtitle:"Next 7 days",description:"Scheduled jobs that are due to be completed within the next 7 days but where no attendance time has been specified by the supplier.",name:"jobsWithTimeNotConfirmedNext7days",to:`${j}/issues?asAt=${ej}&tileName=jobsWithTimeNotConfirmedNext7days${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:H?.today||0,week:H?.week||0,month:H?.month||0,threeMonth:H?.threeMonth||0,year:H?.year||0},greaterIsBetter:!0},...ei?[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},title:"Open remedial quotes",description:`These are remedial quotes that have not yet been resolved -
        for example, accepted or rejected by the customer or closed.`,name:"openRemedialQuotes",to:`${j}/quotes?asAt=${ej}&tileName=openRemedialQuotes${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:K?.today||0,week:K?.week||0,month:K?.month||0,threeMonth:K?.threeMonth||0,year:K?.year||0},greaterIsBetter:!0}]:[],...ei?[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},title:"Open quotes",description:`These are quotes that have not yet been resolved -
      for example, accepted or rejected by the customer or closed.`,name:"openQuotes",to:`${j}/quotes?asAt=${ej}&tileName=openQuotes${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:Z?.today||0,week:Z?.week||0,month:Z?.month||0,threeMonth:Z?.threeMonth||0,year:Z?.year||0},greaterIsBetter:!0}]:[],...ei?[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Imminent quote SLA breaches",description:"These are quotes where there is a potential SLA breach in 1 day or less.",name:"imminentQuoteSlaBreaches",to:`${j}/quotes?asAt=${ej}&tileName=imminentQuoteSlaBreaches${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:G?.today||0,week:G?.week||0,month:G?.month||0,threeMonth:G?.threeMonth||0,year:G?.year||0},greaterIsBetter:!0}]:[],...ei?[{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"SLA breaches",subtitle:"Quotes - Quote return time",description:"These are quotes where the SLA was not returned within the relevant timeframe.",name:"quoteSlaBreached",to:`${j}/quotes?asAt=${ej}&tileName=quoteSlaBreached${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:F?.today||0,week:F?.week||0,month:F?.month||0,threeMonth:F?.threeMonth||0,year:F?.year||0},greaterIsBetter:!0}]:[],{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"SLA breaches",subtitle:"Work orders - On site time",description:`These are jobs where the time taken for the engineer /
       operative to arrive on site was beyond the relevant SLA. `,name:"jobSlaBreachedOnSite",to:`${j}/issues?asAt=${ej}&tileName=jobSlaBreachedOnSite${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:X?.today||0,week:X?.week||0,month:X?.month||0,threeMonth:X?.threeMonth||0,year:X?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"SLA breaches",subtitle:"Work orders - Report submission time",description:`These are jobs where the time taken to submit the report
        to the customer was more than the relevant SL.A.`,name:"jobSlaBreachedJobReport",to:`${j}/issues?asAt=${ej}&tileName=jobSlaBreachedJobReport${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:ee?.today||0,week:ee?.week||0,month:ee?.month||0,threeMonth:ee?.threeMonth||0,year:ee?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Live job offers",description:`These are jobs that have been assigned to you but where no attendance time
        has been confirmed. Please note that if the job was sent to multiple suppliers, jobs may
        no longer be visible or able to be confirmed if allocated to another supplier.`,name:"offeredJobs",to:`${j}/issues?asAt=${ej}&tileName=offeredJobs&show=offered${s?`&accountId=${s}`:""}`,values:{today:f?.today||0,week:f?.week||0,month:f?.month||0,threeMonth:f?.threeMonth||0,year:f?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Incomplete PPM jobs",description:"PPM jobs scheduled for a date prior to today but that are not in a Complete status (or later).",name:"incompleteJobsPpm",to:`${j}/issues?type=ppm&asAt=${ej}&tileName=incompleteJobsPpm${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:eo?.today||0,week:eo?.week||0,month:eo?.month||0,threeMonth:eo?.threeMonth||0,year:eo?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Incomplete reactive jobs",description:"Reactive jobs scheduled for a date prior to today but that are not in a Complete status (or later)",name:"incompleteJobsReactive",to:`${j}/issues?asAt=${ej}&tileName=incompleteJobsReactive${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:er?.today||0,week:er?.week||0,month:er?.month||0,threeMonth:er?.threeMonth||0,year:er?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Open PPM jobs",description:"PPM jobs scheduled for a date prior to today but that are not in a Closed status.",name:"openJobsPpm",to:`${j}/issues?type=ppm&asAt=${ej}&tileName=openJobsPpm${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:en?.today||0,week:en?.week||0,month:en?.month||0,threeMonth:en?.threeMonth||0,year:en?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Open reactive jobs",description:"Reactive jobs scheduled for a date prior to today but that are not in a Closed status.",name:"openJobsReactive",to:`${j}/issues?asAt=${ej}&tileName=openJobsReactive${r?`&userId=${r}`:""}${s?`&accountId=${s}`:""}`,values:{today:es?.today||0,week:es?.week||0,month:es?.month||0,threeMonth:es?.threeMonth||0,year:es?.year||0},greaterIsBetter:!0}],eJ=eM.map(e=>e.name),eC={success:[0,10],danger:[11,20],warning:[21,null]},eA=a.reduce((e,t)=>{let{colourConfig:a=eC,pinned:o,greaterIsBetter:r=!0,name:s}=t,n=eM.find(e=>e.name===s);return n?[...e,{...n,pinned:o??n.pinned??!1,colourConfig:a,greaterIsBetter:r}]:e},[]).sort((e,t)=>eJ.indexOf(e)-eJ.indexOf(t));return{fullTilesList:eM,userTilesList:eA}})({asAt:es,dashboardTilesData:{...G},userTiles:X,accountId:o.accountId,userId:ei,hasUserModule:E,hasRole:Y});er(e),ea(t)},[G]);let{loading:eh,refetch:em}=(0,n.t)(d,{variables:{accountId:o.accountId,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,adminId:o.adminId,asAt:es,currentUserId:o.id,dayStart:en.todayStart,monthStart:en.monthStart,userId:ei,yearStart:en.yearStart},onCompleted:e=>{let t={period30d:e?.chartTimeToAttendSite?.[0]?.data||[]},a={period30d:e?.chartTimeToReceiveReport?.[0]?.data||[]};F(o=>({...o,...z({prevData:o,data:e.dashboardTilesData[0],type:"today"}),jobsOnThisMonth:e.chartJobsPerDay.jobsOnThisMonth,averageTimeToAttendSite:t,averageTimeToReceiveReport:a,...e.chartRevenuesPerDay[0],...e.chartRevenuesPerYear[0]})),ep()}}),ep=async()=>{let e=(await Promise.all(X.map(async e=>{let{name:t,type:a}=e;if("tile"!==a)return{};let{query:r,variables:s}=R({name:t,asAt:es,adminId:o.adminId,accountId:o.accountId,userId:ei,time:"week"});try{let{data:{[t]:[{sum:e}]}={[t]:[{sum:0}]}}=await H.query({query:r,variables:s});return{[t]:e||0}}catch(e){return console.error(`Dashboard comparison failed for tile "${t}"`,e),{}}}))).reduce((e,t)=>({...e,...t}),{});F(t=>({...t,...z({prevData:t,data:e,type:"week"})}))},ey=(0,a.useCallback)(e=>{let{tiles:t,skipRefetch:a,skipRefetchMeta:r}=e;ec({variables:{userId:o.id,accountId:o.accountId,changes:{meta:{...eu,dashboard:t}}}}).then(()=>{a||em(),r||el()})},[eu,em,el,ec,o.accountId,o.id]),eb=(0,a.useCallback)(e=>{ey({tiles:X.filter(t=>t.name!==e)})},[ey,X]),eg=(0,a.useCallback)((e,t)=>{ey({tiles:X.map(a=>a.name===e?{...a,colourConfig:t}:a),skipRefetch:!0})},[ey,X]),ef=(0,a.useCallback)(async(e,t)=>{let{query:a,variables:r}=R({name:e,asAt:es,adminId:o.adminId,accountId:o.accountId,userId:ei,time:t}),{data:{[e]:[{sum:s}]}={[e]:[{sum:0}]}}=await H.query({query:a,variables:r});F(a=>({...a,[e]:{...a[e]||{},[t]:s||0}}))},[es,H,o.accountId,o.adminId,ei]),e$=(0,a.useCallback)(async(e,t)=>{let{query:a,variables:o}=(e=>{let{groupName:t,time:a,asAt:o}=e,r=null,s={};switch(t){case"jobsLocation":r=u;break;case"suppliersLocation":r=l}if("jobsLocation"===t)switch(s.Location={Addresses:{registered:{_eq:!0},entity:{_eq:"Location"},Address:{geo:{_is_null:!1}}}},a){case"today":s._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,y.f)(o)}}];break;case"tomorrow":s._and=[{timingStart:{_lte:(0,_.f)(o,{days:1})}},{timingStart:{_gte:(0,_.f)((0,y.f)(o),{days:1})}}];break;case"nextWeek":s._and=[{timingStart:{_lte:(0,_.f)(o,{weeks:1})}},{timingStart:{_gte:(0,_.f)((0,y.f)(o),{days:1})}}];break;case"nextTwoWeeks":s._and=[{timingStart:{_lte:(0,_.f)(o,{weeks:2})}},{timingStart:{_gte:(0,_.f)((0,y.f)(o),{days:1})}}];break;case"nextMonth":s._and=[{timingStart:{_lte:(0,_.f)(o,{months:1})}},{timingStart:{_gte:(0,_.f)((0,y.f)(o),{days:1})}}];break;case"week":s._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,P.f)(o,{weeks:1})}}];break;case"month":s._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,P.f)(o,{months:1})}}];break;case"threeMonth":s._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,P.f)(o,{months:3})}}]}else s.geo={_is_null:!1},"month"===a&&(s._and=[{createdAt:{_lte:o}},{createdAt:{_gte:(0,P.f)(o,{months:1})}}]);return{query:r,variables:{where:s}}})({groupName:e,time:t,asAt:es}),{data:r}=await H.query({query:a,variables:o});F(a=>({...a,[e]:(e=>{let{state:t,data:a,groupName:o,time:r}=e,s={};if("suppliersLocation"===o)s={...t[o]||{},[r]:a[o].map(e=>{let{id:t,geo:a,account:o,user:r}=e;return{id:t,account:o,user:r,position:{lat:a.coordinates?.[1],lng:a.coordinates?.[0]}}})};else{let e=a[o].map(e=>{let{id:t,number:a,type:o,location:r,supplier:s,service:n}=e;return{id:t,number:a,type:o,location:r,supplier:s,service:n,position:{lat:r.addresses[0].address.geo?.coordinates?.[1],lng:r.addresses[0].address.geo?.coordinates?.[0]}}});s={...t[o]||{},[r]:e}}return s})({state:a,data:r,groupName:e,time:t})}))},[es,H]),ew=(0,a.useCallback)(()=>{let e=[],a=[],r=[],s=[];if(eo.forEach(e=>{"tile"===e.type&&e.pinned?a.push(e):"mapChart"===e.type||"chart"===e.type?r.push(e):s.push(e)}),a.length){let o=(0,t.jsx)(Q,{container:!0,spacing:3,className:"firstBlock",children:a.map(e=>{let{title:a,subtitle:o,name:r,description:s,colourConfig:n,values:i,valueType:d,size:l,to:u,greaterIsBetter:c,hiddenVersusOptions:h}=e;return(0,t.jsx)(T.f,{name:r,asAt:es,className:"firstBlockItem",xs:12,sm3:6,colourConfig:n,title:a,subtitle:o,description:s,to:u,values:i,valueType:d,size:l,greaterIsBetter:c,editable:!0,onEdit:()=>Z(!0),onVersusChange:ef,onConfigChange:eg,hiddenVersusOptions:h})})});e.push(o)}if(r.length){let a=r.map(e=>{let{type:a,title:r,description:s,name:n,values:i,size:d,historicalComparison:l}=e;return"chart"===a?(0,t.jsx)(C.f,{item:!0,className:"bigTile",children:(0,t.jsx)(D.f,{asAt:es,title:r,description:s,showLegend:!0,name:n,data:i,size:d,historicalComparison:l,queryParams:{adminId:o.adminId,accountId:o.accountId,userId:ei,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}})}):"mapChart"===a?(0,t.jsx)(C.f,{item:!0,className:"bigTile",children:(0,t.jsx)(x.f,{asAt:es,title:r,description:s,showLegend:!0,name:n,data:i,size:d,onChangeChartGroup:e$})}):null});e.push(a)}if(r.length%2==0){let a=s.splice(0,4),o=(0,t.jsx)(Q,{container:!0,spacing:3,className:"secondBlock",children:a.slice(0,4).map((e,o)=>{let{title:r,subtitle:s,name:n,description:i,colourConfig:d,values:l,valueType:u,size:c,to:h,greaterIsBetter:m,hiddenVersusOptions:p}=e;return(0,t.jsx)(T.f,{name:n,asAt:es,className:"secondBlockItem",sm:12,lg:6,xl:o===a.length-4?12:4,colourConfig:d,title:r,subtitle:s,description:i,to:h,values:l,valueType:u,size:c,greaterIsBetter:m,onVersusChange:ef,onConfigChange:eg,hiddenVersusOptions:p})})});e.push(o)}let n=s.map(e=>{let{name:a,title:o,subtitle:r,description:s,colourConfig:n,values:i,valueType:d,size:l,to:u,greaterIsBetter:c,hiddenVersusOptions:h}=e;return(0,t.jsx)(T.f,{asAt:es,xs:12,sm3:6,xl:3,className:"restTilesBoxItem",colourConfig:n,name:a,title:o,subtitle:r,description:s,to:u,values:i,valueType:d,size:l,greaterIsBetter:c,editable:!0,onEdit:()=>Z(!0),deletable:!0,onDelete:eb,onVersusChange:ef,onConfigChange:eg,hiddenVersusOptions:h})});et.length>eo.length&&n.push((0,t.jsx)(A.f,{width:"100%",xs:12,sm3:6,xl:3,onAddCard:()=>Z(!0)}));let i=(0,t.jsx)(V,{container:!0,spacing:3,m:0,sx:{justifyContent:"flex-start"},children:n});return e.push(i),(0,t.jsx)(U,{container:!0,spacing:3,children:e})},[es,eo,et.length,eg,eb,ef,e$,o.accountId,o.adminId,ei]);return(0,t.jsxs)(M.f,{sx:{width:"100%",height:"100%"},children:[(0,t.jsx)(W,{children:eh?(0,t.jsx)(M.f,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(J.f,{})}):ew()}),(0,t.jsx)(N.f,{open:K,fullTilesList:et,selectedTiles:X,onSaveTilesList:e=>ey({tiles:e}),onClose:()=>Z(!1)})]})},W=(0,f.U)(M.f).withConfig({displayName:"dashboard__DashboardBox",componentId:"sc-b990af83-0"})`
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
`,U=(0,f.U)(C.f).withConfig({displayName:"dashboard__SecondRowBox",componentId:"sc-b990af83-1"})`
  align-content: flex-start;
  height: auto;
  min-height: 400px;
  justify-content: space-between;
`,Q=(0,f.U)(C.f).withConfig({displayName:"dashboard__FirstBox",componentId:"sc-b990af83-2"})`
  display: flex;
  flex-wrap: wrap;

  min-width: 824px;

  justify-content: space-between;
  align-content: space-between;
`,V=(0,f.U)(C.f).withConfig({displayName:"dashboard__RestTilesBox",componentId:"sc-b990af83-3"})`
  justify-content: space-between;
`;E.propTypes={user:o.object.isRequired};let Y=(0,f.n)(E);e.s(["default",0,Y],920973)},64852,function(e){e.n(e.i(920973))}]);