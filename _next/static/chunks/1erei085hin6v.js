(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,651648,e=>{"use strict";var t=e.i(391398),a=e.i(191788),o=e.i(691567),s=e.i(98926),r=e.i(776204),n=e.i(432171),i=e.i(159080);let d=i.f`
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
      outstandingInvoices
      outstandingInvoicesValues
      invoiceUnsent
      reactiveJobsToday
      plannedJobsToday
      complianceJobToday
      liveP1Jobs
      liveP2Jobs
      liveP3Jobs
      liveP4Jobs
      liveP5Jobs
      offeredJobs
      loggedJobs
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
      imminentJobSlaBreaches
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
    complianceExpiredTilesData: getDashboard_HomeTiles_complianceExpiredItems(
      args: { adminId: $adminId, accountId: $accountId, asAt: $asAt }
    ) {
      sum
      expiredItems
    }
    complianceUpcomingExpiredTilesData: getDashboard_HomeTiles_complianceUpcomingExpiredItems(
      args: { adminId: $adminId, accountId: $accountId, asAt: $asAt }
    ) {
      sum
      upcomingExpiredItems
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
    chartTimeToSendReportCustomer: getDashboard_KPI_TimeToSendReportCustomer(
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
`,c=i.f`
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
`;var u=e.i(203828),h=e.i(925527),m=e.i(55261),p=e.i(684034),y=e.i(828521),g=e.i(303493),b=e.i(495143),f=e.i(760814);let $=[{type:"tile",pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},name:"reactiveJobsToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},name:"plannedJobsToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},name:"quotesToday",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},name:"liveP1Jobs",greaterIsBetter:!0},{type:"tile",pinned:!0,colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},name:"offeredJobs",greaterIsBetter:!0},{type:"chart",name:"chartJobMetrics"},{type:"mapChart",name:"mapChart"},{type:"chart",name:"numberOfNotifications"}];var I=e.i(510364),w=e.i(751874),v=e.i(261539),k=e.i(919358),S=e.i(993993),J=e.i(718003);let T="/dashboard";var M=e.i(738251),j=e.i(76381),x=e.i(740790),A=e.i(63196),D=e.i(698114),C=e.i(156612),B=e.i(331387),_=e.i(755691),P=e.i(39059),N=e.i(247095),z=e.i(380771);let L=e=>{let{prevData:t,data:a,type:o}=e;return Object.keys(a).reduce((e,s)=>({...e,[s]:{...t?.[s]||{},[o]:a[s]}}),{})},q=e=>{let{name:t,asAt:a,userId:o,adminId:s,accountId:r,time:n}=e,d=i.f`
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
`,l=null;switch(n){case"week":l=(0,N.f)(a,{weeks:1});break;case"month":l=(0,N.f)(a,{months:1});break;case"threeMonth":l=(0,N.f)(a,{months:3});break;case"year":l=(0,N.f)(a,{years:1})}return{query:d,variables:{adminId:s,accountId:r,asAt:l,dayStart:(0,y.f)(l),monthStart:(0,g.f)(l),userId:o,yearStart:(0,b.f)(l)}}};var R=e.i(498681),E=e.i(594301);let O=(0,h.f)(new Date),U=e=>{let{user:o,theme:i}=e,{hasUserModule:f}=(0,R.f)(),{hasRole:U}=(0,E.f)(),Y=(0,u.useRouter)(),K=(0,s.f)(),Z=U("customer_user"),G=U("admin_user"),F=f("quotes"),X=f("finances"),[ee,et]=(0,a.useState)(!1),[ea,eo]=(0,a.useState)({}),[es,er]=(0,a.useState)($),[en,ei]=(0,a.useState)([]),[ed,el]=(0,a.useState)([]),[ec]=(0,a.useState)(Y.query.asAt?(0,h.f)((0,p.f)(Y.query.asAt)):O),[eu]=(0,a.useState)({monthStart:(0,g.f)(ec),todayEnd:(0,h.f)(ec),todayStart:(0,y.f)(ec),yearStart:(0,b.f)(ec)}),[eh]=(0,a.useState)(Y.query.userId?Y.query.userId:o.id);(0,a.useEffect)(()=>{u.default.push({pathname:"/dashboard",query:{asAt:(0,m.f)(ec,"yyyy-MM-dd"),userId:eh}})},[ec,eh]);let{data:em,refetch:ep}=(0,n.t)(P._,{variables:{userId:o.id,accountId:o.accountId}}),ey=em?.accountUser?.[0]?.meta||{},[eg]=(0,r.f)(P.l);(0,a.useEffect)(()=>{ey?.dashboard&&er(ey.dashboard)},[ey]),(0,a.useEffect)(()=>{let{userTilesList:e,fullTilesList:t}=(e=>{let{isCustomerUser:t,hasQuotesModule:a,hasFinancesModule:o,asAt:s,userTiles:r,dashboardTilesData:n,userId:i,accountId:d}=e,{thresholdApprovals:l,outstandingInvoices:c,outstandingInvoicesValues:u,complianceJobToday:h,complianceExpiredItems:p,complianceUpcomingExpiredItems:y,inprogressJobs:g,liveP1Jobs:b,liveP2Jobs:f,liveP3Jobs:$,liveP4Jobs:M,liveP5Jobs:j,offeredJobs:x,loggedJobs:A,plannedJobsToday:D,quotesDueThisWeek:C,quotesToday:B,reactiveJobsToday:_,upliftRequested:P,worksValueMTD:N,worksValueYTD:z,jobsOnThisMonth:L,revenuesOnThisMonth:q,revenuesOnThisYear:R,jobsLocation:E,failedJobs:O,imminentJobSlaBreaches:U,openRemedialQuotes:V,openQuotes:Q,imminentQuoteSlaBreaches:W,quoteSlaBreached:H,jobSlaBreachedOnSite:Y,jobSlaBreachedJobReport:K,averageTimeToAttendSite:Z,averageTimeToSendReportCustomer:G,incompleteJobsPpm:F,incompleteJobsReactive:X,openJobsReactive:ee,openJobsPpm:et}=n||{},ea=[],eo=[],es=[],er=[],en=[],ei=[],ed=[],el=[],ec=[],eu=[],eh=[],em=[],ep=[],ey=[],eg=[],eb=[];if(Z?.period30d&&Z.period30d.length>0){let e="dd/MM";Z.period30d.forEach(t=>{let{date:a,avgPlanned:o,avgReactive:r}=t,n=new Date(a),i=new Date(s),d={date:n,avgPlanned:(0,I.y)(o),avgReactive:(0,I.y)(r),formatDate:e,actualDate:(0,m.f)(n,e)};ep.push(d),n>=(0,k.f)(i,15)&&n<=(0,w.f)(i,14)&&em.push(d),n>=(0,k.f)(i,8)&&n<=(0,w.f)(i,7)&&eh.push(d)})}if(G?.period30d&&G.period30d.length>0){let e="dd/MM";G.period30d.forEach(t=>{let{date:a,avgPlanned:o,avgReactive:r}=t,n=new Date(a),i=new Date(s),d={date:n,avgPlanned:(0,I.y)(o),avgReactive:(0,I.y)(r),formatDate:e,actualDate:(0,m.f)(n,e)};eb.push(d),n>=(0,k.f)(i,15)&&n<=(0,w.f)(i,14)&&eg.push(d),n>=(0,k.f)(i,8)&&n<=(0,w.f)(i,7)&&ey.push(d)})}if(L&&L.length>0&&L.forEach((e,t)=>{let{date:a,ppmJobsOnThisMonth:o,reactiveJobsOnThisMonth:r}=e,n=new Date(s),i=new Date(a);if(i>=(0,k.f)(n,8)&&i<=(0,w.f)(n,7)){if(L[t-1]){let{date:e}=L[t-1],a=(0,v.f)(i,new Date(e));for(let e=1;e<a;e++)ea.push({date:(0,k.f)(i,e),values:[]}),er.push({date:(0,k.f)(i,e),values:[]})}ea.push({date:i,values:o}),er.push({date:i,values:r})}if(i>=(0,k.f)(n,15)&&i<=(0,w.f)(n,14)){if(L[t-1]){let{date:e}=L[t-1],a=(0,v.f)(i,new Date(e));for(let e=1;e<a;e++)eo.push({date:(0,k.f)(i,e),values:[]}),en.push({date:(0,k.f)(i,e),values:[]})}eo.push({date:i,values:o}),en.push({date:i,values:r})}if(i>=(0,k.f)(n,31)&&i<=(0,w.f)(n,30)){if(L[t-1]){let{date:e}=L[t-1],a=(0,v.f)(i,new Date(e));for(let e=1;e<a;e++)es.push({date:(0,k.f)(i,e),values:[]}),ei.push({date:(0,k.f)(i,e),values:[]})}es.push({date:i,values:o}),ei.push({date:i,values:r})}}),q&&q.length>0){let e="dd/MM";q.forEach((t,a)=>{let{date:o,revenuesOnThisDay:r}=t,n=new Date(s),i=new Date(o);if(i>=(0,k.f)(n,8)){if(q[a-1]){let{date:e}=q[a-1],t=(0,v.f)(new Date(e),i);for(let e=1;e<t;e++)ed.push({date:(0,w.f)(i,e),sum:[]})}ed.push({date:i,sum:r,formatDate:e})}if(i>=(0,k.f)(n,15)){if(q[a-1]){let{date:e}=q[a-1],t=(0,v.f)(new Date(e),i);for(let e=1;e<t;e++)el.push({date:(0,w.f)(i,e),sum:[]})}el.push({date:i,sum:r,formatDate:e})}if(i>=(0,k.f)(n,31)){if(q[a-1]){let{date:e}=q[a-1],t=(0,v.f)(new Date(e),i);for(let e=1;e<t;e++)ec.push({date:(0,w.f)(i,e),sum:[]})}ec.push({date:i,sum:r,formatDate:e})}})}R&&R.length>0&&R.forEach(e=>{let{date:t,revenuesOnThisMonth:a}=e;eu.push({date:t,sum:a,formatDate:"MM/yyyy"})});let ef=s?(0,m.f)(s,"yyyy-MM-dd"):"",e$=(0,J.f)([{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,15],danger:[16,30],warning:[30,null]},title:"Reactive jobs today",description:"Reactive jobs scheduled to happen today",name:"reactiveJobsToday",to:`${T}/issues?asAt=${ef}&tileName=reactiveJobsToday${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:_?.today||0,week:_?.week||0,month:_?.month||0,threeMonth:_?.threeMonth||0,year:_?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Unallocated jobs",description:`These are jobs that have been allocated to the relevant pool of engineers or
      operatives - they are currently in a Job offered status - and they are awaiting assignment
      to the relevant attending engineer`,name:"offeredJobs",to:`${T}/issues?asAt=${ef}&tileName=offeredJobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:x?.today||0,week:x?.week||0,month:x?.month||0,threeMonth:x?.threeMonth||0,year:x?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Logged jobs",description:`These are jobs that have been logged on the system - they are currently in a Job raised
        status - but have not yet been assigned to the relevant engineers or operatives`,name:"loggedJobs",to:`${T}/issues?asAt=${ef}&tileName=loggedJobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:A?.today||0,week:A?.week||0,month:A?.month||0,threeMonth:A?.threeMonth||0,year:A?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"PPM jobs today",description:"Planned maintenance jobs scheduled to happen today",name:"plannedJobsToday",to:`${T}/issues?type=ppm&asAt=${ef}&tileName=plannedJobsToday${i?`&userId=${i}`:""}`,values:{today:D?.today||0,week:D?.week||0,month:D?.month||0,threeMonth:D?.threeMonth||0,year:D?.year||0},greaterIsBetter:!0},{hide:!a&&t,type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},title:"Quotes today",description:"Quotes where due date is today",name:"quotesToday",to:`${T}/quotes?asAt=${ef}&tileName=quotesToday${i?`&userId=${i}`:""}`,values:{today:B?.today||0,week:B?.week||0,month:B?.month||0,threeMonth:B?.threeMonth||0,year:B?.year||0},greaterIsBetter:!0},{type:"chart",size:[2,1],title:"Jobs metrics",name:"chartJobMetrics",values:{week:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,S.default)(ea,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,S.default)(er,"date","asc")??[]}]},{hide:t&&!o,groupLabel:"Spend per day",groupName:"revenuesPerUnit",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(ed,"date","asc")??[]}]}],twoWeeks:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,S.default)(eo,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,S.default)(en,"date","asc")??[]}]},{hide:t&&!o,groupLabel:"Spend per day",groupName:"revenuesPerUnit",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(el,"date","asc")??[]}]}],month:[{groupLabel:"Jobs per day",groupName:"jobsPerUnit",groupDescription:"Number of jobs currently in the system for selected time range",chartData:[{label:"Planned",color:"#1E88E5",data:(0,S.default)(es,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",data:(0,S.default)(ei,"date","asc")??[]}]},{hide:t&&!o,groupLabel:"Spend per day",groupName:"revenuesPerUnit",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(ec,"date","asc")??[]}]}],year:[{hide:t&&!o,groupLabel:"Monthly job spend",groupName:"revenuesPerYear",groupDescription:"Sum of all job totals by day for selected time range",chartData:[{label:"Revenue",color:"#1E88E5",data:(0,S.default)(eu,"date","asc")??[]}]}]}},{type:"chart",size:[2,1],title:"Average time to attend site",name:"chartAverageTimeToAttendSite",values:{week:[{groupLabel:"Average time to attend site",groupName:"averageTimeToAttendSite",groupDescription:"Average time to attend site over the last 30 days",chartData:[{label:"Planned",color:"#1E88E5",valueKey:"avgPlanned",data:(0,S.default)(ep,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",valueKey:"avgReactive",data:(0,S.default)(ep,"date","asc")??[]}]}]},historicalComparison:{enabled:!0,defaultOption:"",options:[{value:"",label:"Compare with"},{value:"earlier30d",label:"30 days earlier"},{value:"earlier90d",label:"90 days earlier"},{value:"earlier1y",label:"1 year earlier"}]}},{type:"chart",size:[2,1],title:"Average time to send job report to customer",name:"chartAverageTimeToSendReportCustomer",values:{week:[{groupLabel:"Average time to send job report to customer",groupName:"averageTimeToSendReportCustomer",groupDescription:"Average time to send job report to customer over the last 30 days",chartData:[{label:"Planned",color:"#1E88E5",valueKey:"avgPlanned",data:(0,S.default)(eb,"date","asc")??[]},{label:"Reactive",color:"#cfd9e0",valueKey:"avgReactive",data:(0,S.default)(eb,"date","asc")??[]}]}]},historicalComparison:{enabled:!0,defaultOption:"",options:[{value:"",label:"Compare with"},{value:"earlier30d",label:"30 days earlier"},{value:"earlier90d",label:"90 days earlier"},{value:"earlier1y",label:"1 year earlier"}]}},{type:"mapChart",size:[2,1],title:"Geolocation info",name:"mapChart",values:{month:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.month||[]}]}],threeMonth:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.threeMonth||[]}]}],tomorrow:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.tomorrow||[]}]}],today:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.today||[]}]}],nextWeek:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.nextWeek||[]}]}],nextTwoWeeks:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.nextTwoWeeks||[]}]}],nextMonth:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.nextMonth||[]}]}],week:[{groupLabel:"Job location by post-code",groupName:"jobsLocation",groupDescription:"Job location by post-code",chartData:[{label:"Job location by post-code",markerIcon:"job",data:E?.week||[]}]}]}},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Live P1 jobs",description:"Jobs with P1 status scheduled for today but not completed",name:"liveP1Jobs",to:`${T}/issues?asAt=${ef}&tileName=liveP1Jobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:b?.today||0,week:b?.week||0,month:b?.month||0,threeMonth:b?.threeMonth||0,year:b?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P2 jobs today",description:"Jobs with P2 status scheduled for today but not completed",name:"liveP2Jobs",to:`${T}/issues?asAt=${ef}&tileName=liveP2Jobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:f?.today||0,week:f?.week||0,month:f?.month||0,threeMonth:f?.threeMonth||0,year:f?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P3 jobs today",description:"Jobs with P3 status scheduled for today but not completed",name:"liveP3Jobs",to:`${T}/issues?asAt=${ef}&tileName=liveP3Jobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:$?.today||0,week:$?.week||0,month:$?.month||0,threeMonth:$?.threeMonth||0,year:$?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P4 jobs today",description:"Jobs with P4 status scheduled for today but not completed",name:"liveP4Jobs",to:`${T}/issues?asAt=${ef}&tileName=liveP4Jobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:M?.today||0,week:M?.week||0,month:M?.month||0,threeMonth:M?.threeMonth||0,year:M?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"P5 jobs today",description:"Jobs with P5 status scheduled for today but not completed",name:"liveP5Jobs",to:`${T}/issues?asAt=${ef}&tileName=liveP5Jobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:j?.today||0,week:j?.week||0,month:j?.month||0,threeMonth:j?.threeMonth||0,year:j?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Compliance jobs today",description:"Compliance work orders that are scheduled to take place today",name:"complianceJobToday",to:`${T}/issues?asAt=${ef}&tileName=complianceJobToday${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:h?.today||0,week:h?.week||0,month:h?.month||0,threeMonth:h?.threeMonth||0,year:h?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Non-compliant items",description:"Here you can see the list of all compliance items which are past their expiry date.",name:"complianceExpiredItems",to:`${T}/compliances?complianceExpiredItems=true${d?`&customerId=${d}`:""}`,values:{today:p?.today||0,week:p?.week||0,month:p?.month||0,threeMonth:p?.threeMonth||0,year:p?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Upcoming compliance expiries",description:`This is a list of all the items that are marked as compliance
        requirements and where the expiry date is within the next 30 days.`,name:"complianceUpcomingExpiredItems",to:`${T}/compliances?complianceUpcomingExpiredItems=true${d?`&customerId=${d}`:""}`,values:{today:y?.today||0,week:y?.week||0,month:y?.month||0,threeMonth:y?.threeMonth||0,year:y?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,20],danger:[21,40],warning:[41,null]},title:"Jobs in progress",description:"Jobs currently in progress",name:"inprogressJobs",to:`${T}/issues?asAt=${ef}&tileName=inprogressJobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:g?.today||0,week:g?.week||0,month:g?.month||0,threeMonth:g?.threeMonth||0,year:g?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,4],danger:[5,5],warning:[6,null]},title:"Uplift requests",description:"Jobs where an uplift has been requested but not yet approved or rejected",name:"upliftRequested",to:`${T}/issues?asAt=${ef}&tileName=upliftRequested${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:P?.today||0,week:P?.week||0,month:P?.month||0,threeMonth:P?.threeMonth||0,year:P?.year||0},greaterIsBetter:!0},{hide:!o&&t,type:"tile",size:[1,1],colourConfig:{success:[0,9],danger:[10,10],warning:[11,null]},title:"Work order value (MTD)",description:"Value of jobs completed in the month to date",name:"worksValueMTD",to:`${T}/issues?asAt=${ef}&tileName=worksValueMTD${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:N?.today||0,week:N?.week||0,month:N?.month||0,threeMonth:N?.threeMonth||0,year:N?.year||0},greaterIsBetter:!0,valueType:"price",hiddenVersusOptions:["week"]},{hide:!o&&t,type:"tile",size:[1,1],colourConfig:{success:[0,9],danger:[10,10],warning:[11,null]},title:"Work order value (YTD)",description:"Value of jobs completed in the year to date",name:"worksValueYTD",to:`${T}/issues?asAt=${ef}&tileName=worksValueYTD${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:z?.today||0,week:z?.week||0,month:z?.month||0,threeMonth:z?.threeMonth||0,year:z?.year||0},greaterIsBetter:!0,valueType:"price",hiddenVersusOptions:["week","month","threeMonth"]},{hide:!a&&t,type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Quotes due this week",description:"Quotes where due date is within next 7 days",name:"quotesDueThisWeek",to:`${T}/quotes?asAt=${ef}&tileName=quotesDueThisWeek${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:C?.today||0,week:C?.week||0,month:C?.month||0,threeMonth:C?.threeMonth||0,year:C?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Outstanding invoices",description:"The number of invoices that have been sent to customers but not reconciled",name:"outstandingInvoices",to:`${T}/issues?asAt=${ef}&tileName=outstandingInvoices${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:c?.today||0,week:c?.week||0,month:c?.month||0,threeMonth:c?.threeMonth||0,year:c?.year||0},greaterIsBetter:!0},{hide:!o&&t,type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Value of outstanding invoices",description:"The value of invoices that have been sent to customers but not reconciled",name:"outstandingInvoicesValues",to:`${T}/issues?asAt=${ef}&tileName=outstandingInvoices${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:u?.today||0,week:u?.week||0,month:u?.month||0,threeMonth:u?.threeMonth||0,year:u?.year||0},greaterIsBetter:!0,valueType:"price"},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Threshold approvals outstanding",description:"Work orders and quotes where approval is required based on threshold levels",name:"thresholdApprovals",to:`${T}/issues?asAt=${ef}&tileName=thresholdApprovals${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:l?.today||0,week:l?.week||0,month:l?.month||0,threeMonth:l?.threeMonth||0,year:l?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Failed jobs",description:"Jobs where supplier has reported failures and these have not been resolved.",name:"failedJobs",to:`${T}/issues?asAt=${ef}&tileName=failedJobs${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:O?.today||0,week:O?.week||0,month:O?.month||0,threeMonth:O?.threeMonth||0,year:O?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Imminent job SLA breaches",description:"These are jobs where there is a potential SLA breach in 1 hour or less.",name:"imminentJobSlaBreaches",to:`${T}/issues?asAt=${ef}&tileName=imminentJobSlaBreaches${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:U?.today||0,week:U?.week||0,month:U?.month||0,threeMonth:U?.threeMonth||0,year:U?.year||0},greaterIsBetter:!0},{hide:!a&&t,type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},title:"Open remedial quotes",description:`These are remedial quotes that have not yet been resolved -
        for example, accepted or rejected by the customer or closed.`,name:"openRemedialQuotes",to:`${T}/quotes?asAt=${ef}&tileName=openRemedialQuotes${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:V?.today||0,week:V?.week||0,month:V?.month||0,threeMonth:V?.threeMonth||0,year:V?.year||0},greaterIsBetter:!0},{hide:!a&&t,type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,5],danger:[6,10],warning:[11,null]},title:"Open quotes",description:`These are quotes that have not yet been resolved -
      for example, accepted or rejected by the customer or closed.`,name:"openQuotes",to:`${T}/quotes?asAt=${ef}&tileName=openQuotes${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:Q?.today||0,week:Q?.week||0,month:Q?.month||0,threeMonth:Q?.threeMonth||0,year:Q?.year||0},greaterIsBetter:!0},{hide:!a&&t,type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Imminent quote SLA breaches",description:"These are quotes where there is a potential SLA breach in 1 day or less.",name:"imminentQuoteSlaBreaches",to:`${T}/quotes?asAt=${ef}&tileName=imminentQuoteSlaBreaches${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:W?.today||0,week:W?.week||0,month:W?.month||0,threeMonth:W?.threeMonth||0,year:W?.year||0},greaterIsBetter:!0},{hide:!a&&t,type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"SLA breaches",subtitle:"Quotes - Quote return time",description:"These are quotes where the SLA was not returned within the relevant timeframe.",name:"quoteSlaBreached",to:`${T}/quotes?asAt=${ef}&tileName=quoteSlaBreached${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:H?.today||0,week:H?.week||0,month:H?.month||0,threeMonth:H?.threeMonth||0,year:H?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"SLA breaches",subtitle:"Work orders - On site time",description:`These are jobs where the time taken for the engineer /
       operative to arrive on site was beyond the relevant SLA. `,name:"jobSlaBreachedOnSite",to:`${T}/issues?asAt=${ef}&tileName=jobSlaBreachedOnSite${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:Y?.today||0,week:Y?.week||0,month:Y?.month||0,threeMonth:Y?.threeMonth||0,year:Y?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],pinned:!0,colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"SLA breaches",subtitle:"Work orders - Report submission time",description:`These are jobs where the time taken to submit the report
        to the customer was more than the relevant SL.A.`,name:"jobSlaBreachedJobReport",to:`${T}/issues?asAt=${ef}&tileName=jobSlaBreachedJobReport${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:K?.today||0,week:K?.week||0,month:K?.month||0,threeMonth:K?.threeMonth||0,year:K?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Incomplete PPM jobs",description:"PPM jobs scheduled for a date prior to today but that are not in a Complete status (or later).",name:"incompleteJobsPpm",to:`${T}/issues?type=ppm&asAt=${ef}&tileName=incompleteJobsPpm${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:F?.today||0,week:F?.week||0,month:F?.month||0,threeMonth:F?.threeMonth||0,year:F?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Incomplete reactive jobs",description:"Reactive jobs scheduled for a date prior to today but that are not in a Complete status (or later)",name:"incompleteJobsReactive",to:`${T}/issues?asAt=${ef}&tileName=incompleteJobsReactive${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:X?.today||0,week:X?.week||0,month:X?.month||0,threeMonth:X?.threeMonth||0,year:X?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Open PPM jobs",description:"PPM jobs scheduled for a date prior to today but that are not in a Closed status.",name:"openJobsPpm",to:`${T}/issues?type=ppm&asAt=${ef}&tileName=openJobsPpm${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:et?.today||0,week:et?.week||0,month:et?.month||0,threeMonth:et?.threeMonth||0,year:et?.year||0},greaterIsBetter:!0},{type:"tile",size:[1,1],colourConfig:{success:[0,10],danger:[11,20],warning:[21,null]},title:"Open reactive jobs",description:"Reactive jobs scheduled for a date prior to today but that are not in a Closed status.",name:"openJobsReactive",to:`${T}/issues?asAt=${ef}&tileName=openJobsReactive${i?`&userId=${i}`:""}${d?`&accountId=${d}`:""}`,values:{today:ee?.today||0,week:ee?.week||0,month:ee?.month||0,threeMonth:ee?.threeMonth||0,year:ee?.year||0},greaterIsBetter:!0}]),eI=e$.map(e=>e.name),ew={success:[0,10],danger:[11,20],warning:[21,null]},ev=r.reduce((e,t)=>{let{colourConfig:a=ew,pinned:o,greaterIsBetter:s=!0,name:r}=t,n=e$.find(e=>e.name===r);return n?[...e,{...n,pinned:o??n.pinned??!1,colourConfig:a,greaterIsBetter:s}]:e},[]).sort((e,t)=>eI.indexOf(e)-eI.indexOf(t));return{fullTilesList:e$,userTilesList:ev}})({isCustomerUser:Z,isAdminUser:G,hasQuotesModule:F,hasFinancesModule:X,asAt:ec,dashboardTilesData:{...ea},userTiles:es,accountId:o.accountId,userId:eh});el(e),ei(t)},[ec,ea,F,X,G,Z,o.accountId,eh,es]);let{loading:eb,refetch:ef}=(0,n.t)(d,{variables:{accountId:o.accountId,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,adminId:o.adminId,asAt:ec,currentUserId:o.id,dayStart:eu.todayStart,monthStart:eu.monthStart,userId:eh,yearStart:eu.yearStart},onCompleted:e=>{let t={period30d:e?.chartTimeToAttendSite?.[0]?.data||[]},a={period30d:e?.chartTimeToSendReportCustomer?.[0]?.data||[]},o={...e?.dashboardTilesData?.[0],complianceExpiredItems:e?.complianceExpiredTilesData?.[0]?.expiredItems||0,complianceUpcomingExpiredItems:e?.complianceUpcomingExpiredTilesData?.[0]?.upcomingExpiredItems||0,averageTimeToAttendSite:t,averageTimeToSendReportCustomer:a};eo(s=>({...s,...L({prevData:s,data:o,type:"today"}),jobsOnThisMonth:e.chartJobsPerDay.jobsOnThisMonth,averageTimeToAttendSite:t,averageTimeToSendReportCustomer:a,...e.chartRevenuesPerDay[0],...e.chartRevenuesPerYear[0]})),e$()}}),e$=async()=>{let e=(await Promise.all(es.map(async e=>{let{name:t,type:a}=e;if("tile"!==a)return{};let{query:s,variables:r}=q({name:t,asAt:ec,adminId:o.adminId,accountId:o.accountId,userId:eh,time:"week"});try{let{data:{[t]:[{sum:e}]}={[t]:[{sum:0}]}}=await K.query({query:s,variables:r});return{[t]:e||0}}catch(e){return console.error(`Dashboard comparison failed for tile "${t}"`,e),{}}}))).reduce((e,t)=>({...e,...t}),{});eo(t=>({...t,...L({prevData:t,data:e,type:"week"})}))},eI=e=>{let{tiles:t,skipRefetch:a,skipRefetchMeta:s}=e;eg({variables:{userId:o.id,accountId:o.accountId,changes:{meta:{...ey,dashboard:t}}}}).then(()=>{a||ef(),s||ep()})},ew=e=>{eI({tiles:es.filter(t=>t.name!==e)})},ev=(e,t)=>{eI({tiles:es.map(a=>a.name===e?{...a,colourConfig:t}:a),skipRefetch:!0})},ek=async(e,t)=>{let{query:a,variables:s}=q({name:e,asAt:ec,adminId:o.adminId,accountId:o.accountId,userId:eh,time:t}),{data:{[e]:[{sum:r}]}={[e]:[{sum:0}]}}=await K.query({query:a,variables:s});eo(a=>({...a,[e]:{...a[e]||{},[t]:r||0}}))},eS=(0,a.useCallback)(async(e,t)=>{let{query:a,variables:o}=(e=>{let{groupName:t,time:a,asAt:o}=e,s=null,r={};switch(t){case"jobsLocation":s=c;break;case"suppliersLocation":s=l}if("jobsLocation"===t)switch(r.Location={Addresses:{registered:{_eq:!0},entity:{_eq:"Location"},Address:{geo:{_is_null:!1}}}},a){case"today":r._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,y.f)(o)}}];break;case"tomorrow":r._and=[{timingStart:{_lte:(0,z.f)(o,{days:1})}},{timingStart:{_gte:(0,z.f)((0,y.f)(o),{days:1})}}];break;case"nextWeek":r._and=[{timingStart:{_lte:(0,z.f)(o,{weeks:1})}},{timingStart:{_gte:(0,z.f)((0,y.f)(o),{days:1})}}];break;case"nextTwoWeeks":r._and=[{timingStart:{_lte:(0,z.f)(o,{weeks:2})}},{timingStart:{_gte:(0,z.f)((0,y.f)(o),{days:1})}}];break;case"nextMonth":r._and=[{timingStart:{_lte:(0,z.f)(o,{months:1})}},{timingStart:{_gte:(0,z.f)((0,y.f)(o),{days:1})}}];break;case"week":r._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,N.f)(o,{weeks:1})}}];break;case"month":r._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,N.f)(o,{months:1})}}];break;case"threeMonth":r._and=[{timingStart:{_lte:o}},{timingStart:{_gte:(0,N.f)(o,{months:3})}}]}else r.geo={_is_null:!1},"month"===a&&(r._and=[{createdAt:{_lte:o}},{createdAt:{_gte:(0,N.f)(o,{months:1})}}]);return{query:s,variables:{where:r}}})({groupName:e,time:t,asAt:ec}),{data:s}=await K.query({query:a,variables:o});eo(a=>({...a,[e]:(e=>{let{state:t,data:a,groupName:o,time:s}=e,r={};if("suppliersLocation"===o)r={...t[o]||{},[s]:a[o].map(e=>{let{id:t,geo:a,account:o,user:s}=e;return{id:t,account:o,user:s,position:{lat:a.coordinates?.[1],lng:a.coordinates?.[0]}}})};else{let e=a[o].map(e=>{let{id:t,number:a,type:o,location:s,supplier:r,service:n}=e;return{id:t,number:a,type:o,location:s,supplier:r,service:n,position:{lat:s.addresses[0].address.geo?.coordinates?.[1],lng:s.addresses[0].address.geo?.coordinates?.[0]}}});r={...t[o]||{},[s]:e}}return r})({state:a,data:s,groupName:e,time:t})}))},[K,ec]),eJ=(0,a.useCallback)(()=>{let e=[],a=[],s=[],r=[];if(ed.forEach(e=>{"tile"===e.type&&e.pinned?a.push(e):"mapChart"===e.type||"chart"===e.type?s.push(e):r.push(e)}),a.length){let o=(0,t.jsx)(W,{container:!0,spacing:3,className:"firstBlock",children:a.map(e=>{let{title:a,subtitle:o,name:s,description:r,colourConfig:n,values:i,valueType:d,size:l,to:c,greaterIsBetter:u,hiddenVersusOptions:h}=e;return(0,t.jsx)(D.f,{name:s,asAt:ec,className:"firstBlockItem",xs:12,sm3:6,colourConfig:n,title:a,subtitle:o,description:r,to:c,values:i,valueType:d,size:l,greaterIsBetter:u,editable:!0,onEdit:()=>et(!0),onVersusChange:ek,onConfigChange:ev,hiddenVersusOptions:h})})});e.push(o)}if(s.length){let a=s.map(e=>{let{type:a,title:s,description:r,name:n,values:i,size:d,historicalComparison:l}=e;return"chart"===a?(0,t.jsx)(x.f,{item:!0,className:"bigTile",children:(0,t.jsx)(C.f,{asAt:ec,title:s,description:r,showLegend:!0,name:n,data:i,size:d,historicalComparison:l,queryParams:{adminId:o.adminId,accountId:o.accountId,userId:eh,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone}})}):"mapChart"===a?(0,t.jsx)(x.f,{item:!0,className:"bigTile",children:(0,t.jsx)(B.f,{asAt:ec,title:s,description:r,showLegend:!0,name:n,data:i,size:d,onChangeChartGroup:eS})}):null});e.push(a)}if(s.length%2==0){let a=r.splice(0,4),o=(0,t.jsx)(W,{container:!0,spacing:3,className:"secondBlock",children:a.slice(0,4).map((e,o)=>{let{title:s,subtitle:r,name:n,description:i,colourConfig:d,values:l,valueType:c,size:u,to:h,greaterIsBetter:m,hiddenVersusOptions:p}=e;return(0,t.jsx)(D.f,{name:n,asAt:ec,className:"secondBlockItem",sm:12,lg:6,xl:o===a.length-4?12:4,colourConfig:d,title:s,subtitle:r,description:i,to:h,values:l,valueType:c,size:u,greaterIsBetter:m,onVersusChange:ek,onConfigChange:ev,hiddenVersusOptions:p})})});e.push(o)}let n=r.map(e=>{let{name:a,subtitle:o,title:s,description:r,colourConfig:n,values:i,valueType:d,size:l,to:c,greaterIsBetter:u,hiddenVersusOptions:h}=e;return(0,t.jsx)(D.f,{asAt:ec,xs:12,sm3:6,xl:3,className:"restTilesBoxItem",colourConfig:n,name:a,title:s,subtitle:o,description:r,to:c,values:i,valueType:d,size:l,greaterIsBetter:u,editable:!0,onEdit:()=>et(!0),deletable:!0,onDelete:ew,onVersusChange:ek,onConfigChange:ev,hiddenVersusOptions:h})});en.length>ed.length&&n.push((0,t.jsx)(A.f,{width:"100%",xs:12,sm3:6,xl:3,onAddCard:()=>et(!0)}));let i=(0,t.jsx)(H,{container:!0,spacing:3,m:0,sx:{justifyContent:"flex-start"},children:n});return e.push(i),(0,t.jsx)(Q,{container:!0,spacing:3,children:e})},[ed]);return(0,t.jsxs)(M.f,{sx:{width:"100%",height:"100%"},children:[(0,t.jsx)(V,{children:eb?(0,t.jsx)(M.f,{sx:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(j.f,{})}):eJ()}),(0,t.jsx)(_.f,{open:ee,fullTilesList:en,selectedTiles:es,onSaveTilesList:e=>eI({tiles:e}),onClose:()=>et(!1)})]})},V=(0,f.U)(M.f).withConfig({displayName:"dashboard__DashboardBox",componentId:"sc-d4d59d1e-0"})`
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
`,Q=(0,f.U)(x.f).withConfig({displayName:"dashboard__SecondRowBox",componentId:"sc-d4d59d1e-1"})`
  align-content: flex-start;
  height: auto;
  min-height: 400px;
  justify-content: space-between;
`,W=(0,f.U)(x.f).withConfig({displayName:"dashboard__FirstBox",componentId:"sc-d4d59d1e-2"})`
  display: flex;
  flex-wrap: wrap;

  min-width: 824px;

  justify-content: space-between;
  align-content: space-between;
`,H=(0,f.U)(x.f).withConfig({displayName:"dashboard__RestTilesBox",componentId:"sc-d4d59d1e-3"})`
  justify-content: space-between;
`;U.propTypes={user:o.object.isRequired};let Y=(0,f.n)(U);e.s(["default",0,Y],651648)},953017,function(e){e.n(e.i(651648))}]);