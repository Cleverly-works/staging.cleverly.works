(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[218659,e=>{var t=e.i(391398),i=e.i(280445),a=e.i(115871),r=e.i(813843),s=e.i(755548),n=e.i(587369);let l=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:d={},imageSx:o={},title:c,titleSx:u={},subtitleFirstLine:p,subtitleFirstLineSx:f={},subtitleSecondLine:m,subtitleSecondLineSx:h={},buttonText:b,onAction:v}=e,g=(0,n.f)("(max-width: 400px)");return(0,t.jsxs)(r.f,{sx:{...d,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(l,{src:i,sx:{...o,width:g?"250px":"300px"}}),(0,t.jsx)(a.f,{typography:"h5",sx:{...u},children:c}),(0,t.jsxs)(r.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(a.f,{sx:{...f},children:p}),(0,t.jsx)(a.f,{sx:{...h},children:m})]}),b&&v&&(0,t.jsx)(s.f,{variant:"contained",color:"secondary",onClick:v,children:b})]})}])},258877,777513,e=>{var t,i=e.i(391398),a=e.i(203828),r=e.i(755548),s=e.i(220490),n=e.i(106850),l=e.i(813843),d=e.i(280445),o=e.i(115871),c=e.i(191788);function u(){return(u=Object.assign.bind()).apply(null,arguments)}let p=e=>c.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 23 22",width:"1em",height:"1em"},e),t||(t=c.createElement("path",{fill:"#C1C1C1",d:"M10.504.223a2.35 2.35 0 0 1 1.994 0l9.277 4.34c.36.168.59.533.59.937s-.23.769-.59.937l-9.277 4.34a2.35 2.35 0 0 1-1.994 0l-9.277-4.34a1.04 1.04 0 0 1-.59-.937c0-.4.229-.77.59-.937zm9.013 8.783 2.258 1.057c.36.168.59.533.59.937s-.23.769-.59.937l-9.277 4.34a2.35 2.35 0 0 1-1.994 0l-9.277-4.34A1.04 1.04 0 0 1 .637 11c0-.4.229-.77.59-.937l2.257-1.057 6.45 3.017a3.7 3.7 0 0 0 3.133 0zm-6.45 8.517 6.45-3.017 2.258 1.057c.36.168.59.533.59.937s-.23.769-.59.937l-9.277 4.34a2.35 2.35 0 0 1-1.994 0l-9.277-4.34a1.04 1.04 0 0 1-.59-.937c0-.4.229-.77.59-.937l2.257-1.057 6.45 3.017a3.7 3.7 0 0 0 3.133 0"})));var f=e.i(757436),m=e.i(594301),h=e.i(184696),b=e.i(48441),v=e.i(285835);let g={color:"#5C5C5C",fontSize:"14px",marginBottom:"12px"},x={maxHeight:"45px",overflow:"auto"},y={fontWeight:"600"},j={fontWeight:"300",whiteSpace:"nowrap"},A=(0,d.f)(s.f)(e=>{let{selected:t}=e;return{position:"relative",width:"calc(100% - 60px)",display:"flex",flexDirection:"column",justifyContent:"center",height:"140px",backgroundColor:"#F9F9F9",...!t&&{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-10px)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)"}},...t&&{width:"100%",border:"1px solid #50AEFC"}}}),S=(0,d.f)("div")({position:"relative",width:"12px",marginLeft:"0px !important","&:after":{content:'""',position:"absolute",bottom:"50%",left:"-6px",width:0,height:0,borderLeft:"12px solid transparent",borderRight:"0px solid transparent",borderBottom:"12px solid #50AEFC",transform:"rotate(-45deg)"}}),I=(0,d.f)(s.f)(()=>({width:"60px",display:"flex",justifyContent:"center",alignItems:"center",height:"140px",backgroundColor:"#F9F9F9",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-10px)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)"},"& .MuiCardContent-root":{padding:"0px",display:"flex",justifyContent:"center",alignItems:"center"},"& .stacked-layers":{fontSize:"24px"}}));e.s(["f",0,e=>{let{id:t,number:s,status:d,description:c,supplierId:u,supplierName:E,onSelectJob:w,selected:$,onClose:C}=e,{hasRole:_}=(0,m.f)(),T=_("supplier"),Y=_("customer"),O=_("tenant"),R=(0,h.M)(d),{text:N}=[...b.o,...b.w,...b.y].find(e=>{let{value:t}=e;return t===d})||{statusText:""};return(0,i.jsxs)(l.f,{direction:"row",width:"100%",spacing:1,onClick:()=>w({id:t,number:s}),children:[(0,i.jsx)(A,{selected:$,children:(0,i.jsxs)(n.f,{children:[(0,i.jsxs)(l.f,{direction:"row",alignItems:"center",columnGap:2,mb:1.5,children:[(0,i.jsx)(r.f,{onClick:e=>{e.stopPropagation(),a.default.push(`/dashboard/issues/view?id=${s}`).then(()=>C())},color:R,variant:"contained",size:"small",endIcon:(0,i.jsx)(f.default,{}),children:s}),(0,i.jsx)(o.f,{sx:y,variant:"subtitle1",children:N})]}),(0,i.jsx)(l.f,{sx:x,children:(0,i.jsx)(v.f,{maxLength:50,sx:g,children:c})}),!Y&&!O&&(0,i.jsxs)(l.f,{children:[(0,i.jsx)(o.f,{variant:"subtitle2",sx:j,children:"Assigned to: "}),(0,i.jsx)(v.f,{maxLength:24,variant:"subtitle2",...u&&!T&&{href:`/dashboard/suppliers/view?id=${u}`,color:"secondary",sx:{"& .MuiTypography-root":{fontSize:"12px"},"&:hover":{cursor:"pointer"}}},children:E||"-"})]})]})}),$&&(0,i.jsx)(S,{}),!$&&(0,i.jsx)(I,{children:(0,i.jsx)(n.f,{children:(0,i.jsx)(p,{className:"stacked-layers"})})})]})}],258877);var E=e.i(58945),w=e.i(648065),$=e.i(942446),C=e.i(44165),_=e.i(199525),T=e.i(362537),Y=e.i(879436);let O=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.find(e=>"reportSentSupplier"===e.status);return t&&`Report Sent by ${t?.user?.fullName||""}`},R=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e?.find(e=>"invoiceSent"===e.status);return t&&`Invoice sent by ${t?.user?.fullName||""}`};e.s(["f",0,e=>{let{supplier:t,supplierUser:i,timings:a=[],timingStatus:r,correctStart:s,correctEnd:n,scheduledAt:l,arrivalAnytime:d,compliance:o,supplierOffers:c=[],amountOutstanding:u,reconciledAmount:p,amountOutstandingSupplier:f,reconciledAmountSupplier:h,additionalOperatives:b=E.Z,supplierUserId:v}=e,{hasRole:g}=(0,m.f)(),x=g("customer"),y=g("tenant"),j=g("supplier"),A="onHold"===(0,w.f)(a),S=(0,$.f)({timings:a},"accepted"),I=(0,$.f)({timings:a},"closed"),N="incorrect"===r?n:(0,$.f)({timings:a},"completed"),M=(0,$.f)({timings:a},"complianceRejected"),U=(0,$.f)({timings:a},"complianceApproved"),k=(0,$.f)({timings:a},"customerPaid"),L=!!o,q="incorrect"===r?s:(0,$.f)({timings:a},"inProgress"),F=(0,$.f)({timings:a},"invoiceSent"),H=(0,$.f)({timings:a},"offered"),J=(0,$.f)({timings:a},"pricingChanged"),P=(0,$.f)({timings:a},"quoteAccepted"),W=(0,$.f)({timings:a},"rejected"),V=(0,$.f)({timings:a},"reportSent"),D=(0,$.f)({timings:a},"reportSentSupplier"),B=(0,$.f)({timings:a},"supplierPaid"),z=(0,$.f)({timings:a},"timingChanged"),G=(0,$.f)({timings:a},"validated"),Q=(0,$.f)({timings:a},"updateAcceptOfferInput"),X=(0,$.f)({timings:a},"supplierCancel"),K=(0,$.f)({timings:a},"expensesPendingAmount"),Z=(0,$.f)({timings:a},"expensesPendingAmountResolved"),ee=l?d?`${(0,T.default)(l).format("D MMM YYYY")} (anytime)`:(0,T.default)(l).format("D MMM YYYY HH:mm"):(0,T.default)(P||S).format("D MMM YYYY HH:mm"),et=c.filter(e=>"cancelled"!==e.status).length,ei=(0,C.$)("adminInvoice",a),ea=(0,C.B)(["adminUplift","adminInvoice"],a),er=(0,C.n)("adminInvoice",a),es=p??0,en=h??0,el=(0,E.G)(b),ed=(0,E.T)({supplierUser:i,supplierUserId:v},b);return[{id:1,active:!0,label:"Job raised",date:(0,$.f)({timings:a},["raised","quoteNew"]),content:[{id:1,active:!0,data:`Created By ${a[0]?.user?.fullName||""}`}]},{id:2,active:!0,label:"Job offered",info:"no assigned suppliers",date:H,content:[{id:1,active:!!(!A&&H&&!q&&!S&&!z&&!J&&c&&c.length>0),data:`Offered to ${et} suppliers`},{id:2,active:!!(!A&&W),data:"Job rejected by supplier"}]},{id:3,active:!0,label:"Accepted",info:"waiting for supplier to accept",date:(0,$.f)({timings:a},"accepted"),content:[{id:1,active:!!((S||P||z||J)&&t&&!x&&!y),data:`Assigned to ${t?.name}`},{id:2,active:!!((S||P)&&i&&!x&&!y),data:`Primary operative: ${i?.fullName}`},...b.length>0?[{id:31,active:!!((S||P)&&!x&&!y),data:`Additional operatives: ${el}`}]:[],{id:3,active:!!(S||P),data:`Arrival time: ${ee}`},{id:4,active:!!(z&&!S&&t),data:`Job timing has changed, supplier needs to Accept the job again and set new
          attendance time`},{id:5,active:!!(J&&!S&&t),data:`Job service or pricing has changed, supplier needs to Accept the job again and
          confirm attendance and operative`},{id:6,active:!!Q,data:`Attendance and operative has changed by ${(0,_.f)({timings:a},"updateAcceptOfferInput")}`},{id:7,active:!!X,data:`Job canceled by ${(0,_.f)({timings:a},"supplierCancel")}`}]},{id:4,active:!0,label:"In progress",info:"waiting for supplier to start",date:q},{id:5,active:!0,label:"Complete",info:"waiting for supplier to complete",date:N},{id:6,active:!0,label:"Report sent",info:"after job complete",date:V,content:[{id:1,active:!!D,data:"Report submitted by supplier"},{id:2,active:!0,data:O(a)||""}]},{id:7,label:"Customer Sign Off",info:"",date:L&&(U||M),active:L,content:[{id:1,active:!!U,data:`Compliance sing off by ${(0,_.f)({timings:a},"complianceApproved")}`},{id:2,active:!!M,data:`Compliance rejected by ${(0,_.f)({timings:a},"complianceRejected")}`}]},{id:8,label:"Threshold approval",info:"",date:ea?.createdAt||er?.createdAt,active:!!(ei||ea||er),content:[{id:1,active:ei&&!ea&&!er,data:"Awaiting threshold approval"},{id:2,active:!!ea,data:`Threshold approved by ${ea?.user?.fullName}`},{id:3,active:!!er,data:`Threshold rejected by ${er?.user?.fullName}`}]},{id:11,label:"Awaiting expenses pricing",info:"",date:Z,active:!!(K||Z)},{id:12,active:!0,label:"Invoices sent",info:"after validation",date:F,content:[{id:1,active:!!G,data:"Job validated"},{id:2,active:!0,data:R(a)||""},{id:3,active:ed&&!x&&!y&&!j,data:E.v}]},{id:13,label:`Customer ${!k?es?"partially paid":"not paid":"paid"}`,date:k,active:!j,content:[{id:1,active:!k&&!!es,data:`Reconciled amount ${(0,Y.f)(es)}`},{id:2,active:!k&&!!es,data:`Amount outstanding ${(0,Y.f)(u??0)}`}]},{id:14,label:`Supplier ${!B?en?"partially paid":"not paid":"paid"}`,date:B,active:!x&&!y,content:[{id:1,active:!B&&!!en,data:`Reconciled amount ${(0,Y.f)(en)}`},{id:2,active:!B&&!!en,data:`Amount outstanding ${(0,Y.f)(f??0)}`}]},{id:15,active:!0,label:"Closed",info:"automatically after steps complete",date:I}]}],777513)},173575,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(432171),r=e.i(740790),s=e.i(813843),n=e.i(115871),l=e.i(871931),d=e.i(302966),o=e.i(760981),c=e.i(738251),u=e.i(587369),p=e.i(76381),f=e.i(755548),m=e.i(110579),h=e.i(362537),b=e.i(889231),v=e.i(285835),g=e.i(218659),x=e.i(258877),y=e.i(624841),j=e.i(115126),A=e.i(777513),S=e.i(594301),I=e.i(184696),E=e.i(824451),w=e.i(38461),$=e.i(877341),C=e.i(827010);let _=e=>{let{hideFilters:a={},defaultFilters:r={},filters:n,setFilters:l}=e,d=(0,u.f)("(max-width: 600px)"),[o,c]=(0,i.useState)(""),[p,{loading:f,data:{items:m}={items:[]}}]=(0,$.f)(C.U,{variables:{where:{name:{_ilike:""!==o?`%${o}%`:null},type:{_eq:"supplier"}}}}),h=(0,i.useCallback)(e=>e?.reduce((e,t)=>{let i=w.f.find(e=>e.value===t);return i?[...e,{value:i.value,label:i.label}]:e},[]),[]);return(0,t.jsxs)(s.f,{direction:"row",spacing:1,children:[!a.status&&(0,t.jsx)(E.f,{multiple:!0,limitTags:1,variant:"standard",color:"secondary",label:"Select status",value:h(n.status)||[],sx:T.selector(d),onChange:(e,t)=>{t.length?l(e=>({...e,status:[...t.map(e=>e.value)]})):l(e=>({...e,status:r.status}))},options:w.f}),!a.supplier&&(0,t.jsx)(E.f,{variant:"standard",color:"secondary",label:"Select supplier",value:n.supplier,sx:T.selector(d),onSearchChange:c,onChange:(e,t)=>{t?.value&&t?.label?l(e=>({...e,supplier:t})):l(e=>({...e,supplier:r.supplier}))},loading:f,onOpen:()=>p(),options:m})]})},T={selector:e=>({width:e?"100%":"300px"})};var Y=e.i(159080),O=e.i(315560);let R=Y.f`
  query WorkOrdersListWithCompliance($complianceId: Int!, $supplierId: Int, $status: [String]) {
    jobs: Job(
      where: {
        Compliance: { id: { _eq: $complianceId } }
        status: { _in: $status, _neq: "canceled" }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { accountId: { _eq: $supplierId } }, status: { _eq: "offered" } }
        ]
      }
      order_by: { id: asc }
    ) {
      id
      number
      status
      description
      supplier: Supplier {
        id
        name
      }
    }
  }
`,N=Y.f`
  query WorkOrdersListWithSchedule(
    $jobScheduleId: Int!
    $supplierId: Int
    $status: [String]
    $startDate: timestamptz
    $endDate: timestamptz
    $excludedStatuses: [String!]! = ["canceled"]
  ) {
    jobs: Job(
      where: {
        jobScheduleId: { _eq: $jobScheduleId }
        status: { _in: $status, _nin: $excludedStatuses }
        timingStart: { _gte: $startDate, _lte: $endDate }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { accountId: { _eq: $supplierId } }, status: { _eq: "offered" } }
        ]
      }
      order_by: { id: asc }
    ) {
      id
      number
      status
      description
      supplier: Supplier {
        id
        name
      }
    }
  }
`,M=Y.f`
  ${O.P}
  query GetJobFromWorkOrdersListWithStepperAdmin($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      id
      status
      type
      description
      timingStatus
      correctStart
      correctEnd
      timingStart
      timingEnd
      scheduledAt
      number
      amountOutstanding
      invoicedToDate
      reconciledAmount
      amountToBeInvoiced
      amountOutstandingSupplier
      invoicedToDateSupplier
      reconciledAmountSupplier
      amountToBeInvoicedSupplier
      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")
      arrivalAnytime: meta(path: "arrivalAnytime")
      supplier: Supplier {
        id
        name
      }
      supplierUser: SupplierUser {
        id
        fullName
      }
      ...JobOperativesFields
      supplierOffers: SupplierOffers {
        id
        status
      }
      compliance: Compliance {
        id
      }
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        notes
        meta
        quoteId
        createdAt
        user: User {
          id
          fullName
        }
      }
    }
  }
`,U=Y.f`
  query GetJobFromWorkOrdersListWithStepperCustomer($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      id
      status
      type
      description
      timingStatus
      correctStart
      correctEnd
      timingStart
      timingEnd
      scheduledAt
      number
      amountOutstanding
      invoicedToDate
      reconciledAmount
      amountToBeInvoiced
      arrivalAnytime: meta(path: "arrivalAnytime")
      supplier: Supplier {
        id
        name
      }
      supplierUser: SupplierUser {
        id
        fullName
      }
      supplierOffers: SupplierOffers {
        id
        status
      }
      compliance: Compliance {
        id
      }
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        notes
        meta
        quoteId
        createdAt
        user: User {
          id
          fullName
        }
      }
    }
  }
`,k=Y.f`
  ${O.P}
  query GetJobFromWorkOrdersListWithStepperSupplier($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      id
      status
      type
      description
      timingStatus
      correctStart
      correctEnd
      timingStart
      timingEnd
      scheduledAt
      number
      amountOutstandingSupplier
      invoicedToDateSupplier
      reconciledAmountSupplier
      amountToBeInvoicedSupplier
      arrivalAnytime: meta(path: "arrivalAnytime")
      supplier: Supplier {
        id
        name
      }
      supplierUser: SupplierUser {
        id
        fullName
      }
      ...JobOperativesFields
      supplierOffers: SupplierOffers {
        id
        status
      }
      compliance: Compliance {
        id
      }
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        notes
        meta
        quoteId
        createdAt
        user: User {
          id
          fullName
        }
      }
    }
  }
`;var L=e.i(58945);let q={marginBottom:"10px"},F={fontWeight:"300"},H={fontWeight:"300"},J={borderTop:"0px",boxShadow:"none"};e.s(["f",0,e=>{let{type:E,jobScheduleId:w,complianceId:$,defaultFilters:C={},startDate:T,endDate:Y,showCanceled:O,onClose:P,hideFilters:W}=e,{hasRole:V,user:D}=(0,S.f)(),B=V("supplier"),z=V("customer"),G=V("tenant"),[Q,X]=(0,i.useState)(null),[K,Z]=(0,i.useState)(C),ee=(0,u.f)("(max-width: 600px)"),{query:et,variables:ei}=(e=>{let{type:t,jobScheduleId:i,complianceId:a,startDate:r,endDate:s,showCanceled:n,filters:l}=e;switch(t){case"Compliance":return{query:R,variables:{complianceId:a,supplierId:l.supplier?.value,status:!l.status||l.status?.includes?.("all")?null:l.status}};case"JobSchedule":return{query:N,variables:{jobScheduleId:i,supplierId:l.supplier?.value,status:!l.status||l.status?.includes?.("all")?null:l.status,startDate:r,endDate:s,excludedStatuses:n?[]:["canceled"]}}}})({type:E,jobScheduleId:w,complianceId:$,startDate:T,endDate:Y,showCanceled:O,filters:K}),{data:{jobs:ea}={jobs:[]},loading:er}=(0,a.t)(et,{variables:ei}),es=(e=>{switch(e){case"admin":return M;case"customer":case"tenant":return U;case"supplier":return k;default:return null}})(D.accountType),{data:{job:en}={job:null},loading:el}=(0,a.t)(es,{skip:!Q||!es,variables:{jobId:Q?.id}}),ed=ea.length;return er?(0,t.jsx)(s.f,{height:"100%",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(p.f,{color:"secondary"})}):(0,t.jsxs)(s.f,{children:[(0,t.jsxs)(s.f,{direction:ee?"column":"row",alignItems:ee?"space-between":"flex-end",spacing:1,children:[(0,t.jsx)(_,{hideFilters:W,defaultFilters:C,filters:K,setFilters:Z}),(0,t.jsxs)(n.f,{typography:"subtitle2",sx:H,mt:2*!!ee,children:["Item has ",ed," scheduled jobs"]})]}),ea?.length?(0,t.jsxs)(r.f,{container:!0,mt:3,children:[(0,t.jsx)(r.f,{item:!0,xs:12,md:5,lg:5,sx:{height:ee?"auto":"750px",padding:"15px 10px",overflow:"scroll"},children:(0,t.jsx)(s.f,{rowGap:2,children:ea?.map(e=>(0,t.jsx)(x.f,{id:e.id,number:e.number,status:e.status,description:e.description,supplierId:e.supplier?.id,supplierName:e.supplier?.name,onSelectJob:X,selected:Q?.id===e.id,onClose:P}))})}),(0,t.jsx)(r.f,{item:!0,xs:12,md:6,lg:6,ml:3,children:Q&&!el&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{sx:q,spacing:1,children:[(0,t.jsx)(b.f,{href:`/dashboard/issues/view?id=${Q?.number}`,children:(0,t.jsx)(f.f,{color:(0,I.M)(en?.status),variant:"contained",size:"small",endIcon:(0,t.jsx)(m.default,{}),children:en?.number})}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Description"}),(0,t.jsx)(v.f,{maxLength:40,sx:{wordBreak:"break-all"},children:en?.description})]}),!z&&!G&&(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Supplier"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:(0,t.jsx)(b.f,{color:"secondary",href:`/dashboard/suppliers/view?id=${en?.supplier?.id}`,noWrap:!en?.supplier?.id||B,sx:{fontSize:"12px"},children:en?.supplier?.name||"-"})})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Scheduled start"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:en?.timingStart?(0,h.default)(en?.timingStart).format("D MMM YYYY HH:mm"):"-"})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Scheduled End"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:en?.timingEnd?(0,h.default)(en?.timingEnd).format("D MMM YYYY HH:mm"):"-"})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Supplier arrival"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:en?.scheduledAt?`${(0,h.default)(en?.scheduledAt).format("D MMM YYYY")} ${en?.arrivalAnytime?"(anytime)":""}`:"-"})]})]}),(0,t.jsxs)(l.f,{sx:J,expanded:!0,children:[(0,t.jsx)(d.f,{children:(0,t.jsxs)(s.f,{direction:"row",spacing:3,children:[(0,t.jsx)(n.f,{variant:"h6",children:"Workflow"}),(0,t.jsx)(y.f,{value:en?.status})]})}),(0,t.jsx)(o.f,{children:(0,t.jsx)(j.f,{steps:(0,A.f)({supplier:en?.supplier,supplierUser:en?.supplierUser,timings:en?.timings,timingStatus:en?.timingStatus,correctStart:en?.correctStart,correctEnd:en?.correctEnd,scheduledAt:en?.scheduledAt,arrivalAnytime:en?.arrivalAnytime,compliance:en?.compliance,supplierOffers:en?.supplierOffers,amountOutstanding:en?.amountOutstanding,reconciledAmount:en?.reconciledAmount,amountOutstandingSupplier:en?.amountOutstandingSupplier,reconciledAmountSupplier:en?.reconciledAmountSupplier,additionalOperatives:(0,L.a)(en),supplierUserId:en?.supplierUserId})})})]})]})})]}):(0,t.jsx)(c.f,{sx:{height:"calc(100vh - 180px)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(g.f,{imageSrc:"/static/icons/no_locations_found.svg",title:"No PPM jobs found",subtitleFirstLine:"Jobs for applied filters was not found or wasn`t created",subtitleSecondLine:"Please click Create jobs on PPM item or amend filters"})})]})}],173575)},694508,2261,e=>{var t,i,a=((t={}).WEEKLY="Weekly",t.MONTHLY="Monthly",t.QUARTERLY="Quarterly",t.EVERY_SIX_MONTH="6 monthly",t.ANNUALLY="Annually",t.EVERY_THREE_YEARS="Every 3 years",t.EVERY_FIVE_YEARS="Every 5 years",t.EVERY_TEN_YEARS="Every 10 years",t),r=((i={}).ACTIVE="active",i.INACTIVE="inactive",i);e.s(["D",()=>a,"N",()=>r],2261);let s=[{label:"Active",value:r.ACTIVE},{label:"Inactive",value:r.INACTIVE}],n=[{label:a.WEEKLY,value:a.WEEKLY},{label:a.MONTHLY,value:a.MONTHLY},{label:a.QUARTERLY,value:a.QUARTERLY},{label:a.EVERY_SIX_MONTH,value:a.EVERY_SIX_MONTH},{label:a.ANNUALLY,value:a.ANNUALLY},{label:a.EVERY_THREE_YEARS,value:a.EVERY_THREE_YEARS},{label:a.EVERY_FIVE_YEARS,value:a.EVERY_FIVE_YEARS},{label:a.EVERY_TEN_YEARS,value:a.EVERY_TEN_YEARS}];e.s(["X",0,n,"d",0,{active:"success",inactive:"danger"},"G",0,s],694508)},690374,e=>{let t=(e,t)=>{let i=document.createElement("a");"string"==typeof i.download?(document.body.appendChild(i),i.download=t,i.href=e,i.click(),document.body.removeChild(i)):location.replace(e)};e.s(["h",0,(e,i)=>{let a=URL.createObjectURL(e);try{t(a,i)}finally{window.setTimeout(()=>URL.revokeObjectURL(a),1e3)}},"f",0,t])},648065,e=>{e.s(["f",0,e=>{let t=null,i=[...e||[]].sort((e,t)=>Number(e.id)-Number(t.id));for(let e=i.length-1;e>=0;e--){let a=i[e]?.status;if(a&&["onHold","resumed","paused","continued","onMyWayPaused","onMyWayResumed"].includes(a)){t=a;break}}return t}])},44165,e=>{e.s(["$",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);return i?.find(t=>t.status===`${e}ThresholdApproval`)},"B",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);if(Array.isArray(e)){let t;return e.forEach(e=>{t=i?.find(t=>t.status===`${e}ThresholdApproved`)||t}),t}return i?.find(t=>t.status===`${e}ThresholdApproved`)},"n",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);return i?.find(t=>t.status===`${e}ThresholdRejected`)},"t",0,(e,t,i)=>{let a=t?.slice()?.sort((e,t)=>t.id-e.id);return a?.find(t=>t.status===`${e}QuoteThresholdApproval`&&i===t.quoteId)},"D",0,(e,t,i)=>{let a=t?.slice()?.sort((e,t)=>t.id-e.id);return a?.find(t=>t.status===`${e}QuoteThresholdApproved`&&i===t.quoteId)},"k",0,(e,t,i)=>{let a=t?.slice()?.sort((e,t)=>t.id-e.id);return a?.find(t=>t.status===`${e}QuoteThresholdRejected`&&i===t.quoteId)}])},38461,e=>{e.s(["f",0,[{label:"All jobs",value:"all"},{label:"Raised jobs",value:"raised"},{label:"Offered jobs",value:"offered"},{label:"Accepted jobs",value:"accepted"},{label:"In progress jobs",value:"inProgress"},{label:"Completed jobs",value:"completed"},{label:"Report sent jobs",value:"reportSent"},{label:"Follow on jobs",value:"followOn"}]])},49408,400171,e=>{var t=e.i(362537);e.s(["f",0,(e,i)=>{let a=(0,t.default)(),r=(0,t.default)(e);switch(i){case"Weekly":if(a.isAfter(r))return"warning";if(a.isAfter(r.clone().subtract(2,"days")))return"warning";if(a.isAfter(r.clone().subtract(4,"days")))return"info";return"success";case"Monthly":if(a.isAfter(r))return"warning";if(a.isAfter(r.clone().subtract(5,"days")))return"warning";if(a.isAfter(r.clone().subtract(10,"days")))return"info";return"success";case"Quarterly":case"6 monthly":case"Annually":case"Every 3 years":case"Every 5 years":case"Every 10 years":if(a.isAfter(r))return"warning";if(a.isAfter(r.clone().subtract(5,"days")))return"warning";if(a.isAfter(r.clone().subtract(30,"days")))return"info";return"success";default:throw Error("Unsupported frequency")}}],49408);var i=e.i(159080);let a=i.f`
  query GetCompliance($id: Int!) {
    compliance: Compliance_by_pk(id: $id) {
      id
      name
      registeredNumber
      repeat
      status
      expiryDate

      location: Location {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      assetCategory: AssetCategory {
        id
        name
      }
      complianceCategory: ComplianceCategory {
        id
        name
      }
      parentCompliance: ParentCompliance {
        id
        name
      }
      assets: Assets(where: { entity: { _eq: "Compliance" } }) {
        id
        entity
        entityId
        assetId
        asset: Asset {
          id
          name
        }
      }
    }
  }
`;i.f`
  query GetComplianceFromSettings($id: Int!) {
    compliance: Compliance_by_pk(id: $id) {
      id
      name
      status

      complianceCategory: ComplianceCategory {
        id
        name
      }
    }
  }
`;let r=i.f`
  mutation ComplianceMediaAttached($id: Int!) {
    complianceMediaAttached(id: $id) {
      message
    }
  }
`;e.s(["Z",0,r,"s",0,a],400171)},290516,e=>{var t=e.i(159080);let i=t.f`
  mutation CreateCompliance($data: jsonb!) {
    createCompliance(data: $data) {
      id
      message
    }
  }
`,a=t.f`
  mutation UpdateCompliance($data: jsonb!) {
    updateCompliance(data: $data) {
      message
    }
  }
`;e.s(["R",0,i,"m",0,a])},315560,e=>{var t=e.i(159080);let i=t.f`
  fragment JobOperativesFields on Job {
    jobOperatives: JobOperatives(order_by: { id: asc }) {
      userId
      user: User {
        id
        fullName
      }
    }
  }
`,a=t.f`
  ${i}
  query GetJobOperatives($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      id
      supplierUserId
      supplierUser: SupplierUser {
        id
        fullName
      }
      ...JobOperativesFields
    }
  }
`;e.s(["Q",0,a,"P",0,i])},58945,e=>{let t=[],i=[],a=e=>e.supplierUserId??e.supplierUser?.id,r=e=>{if(!e?.jobOperatives?.length)return i;let t=a(e),r=e.jobOperatives.map(e=>({id:e.userId,name:e.user?.fullName})).filter(e=>e.id!==t);return r.length?r:i};e.s(["Z",0,i,"P",0,[],"v",0,"Warning: This work order has multiple engineers attached. Please adjust the finances accordingly before invoicing.","G",0,e=>e.map(e=>e.name||`User #${e.id}`).join(", "),"a",0,r,"F",0,a,"T",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r(e);return!!a(e)&&t.length>0},"K",0,(e,i,a)=>!Number.isFinite(i)||e.some(e=>e.value===i)?e:[{value:i,label:((e,i)=>{if(i.supplierUser?.id===e&&i.supplierUser.fullName)return i.supplierUser.fullName;let a=(i.jobOperatives??t).find(t=>t.userId===e);return a?.user?.fullName||`Operative #${e}`})(i,a)},...e]])},942446,e=>{e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let a=e?.timings?.find(e=>e.status===t);i=a?.createdAt||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.createdAt||null}])},199525,e=>{e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let a=e?.timings?.find(e=>e.status===t);i=a?.user?.fullName||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.user?.fullName||null}])},110579,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),s=e.r(391398);i.default=(0,r.default)((0,s.jsx)("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5m-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1m2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1"}),"LinkRounded")},953116,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),s=e.r(391398);i.default=(0,r.default)((0,s.jsx)("path",{d:"M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2m4 1H4V5h2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4z"}),"StorageRounded")},757436,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),s=e.r(391398);i.default=(0,r.default)((0,s.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"VisibilityRounded")},417758,e=>{var t=e.i(391398),i=e.i(293965),a=e.i(813843),r=e.i(370569),s=e.i(594301);let n=()=>{let{user:e}=(0,s.f)();return(0,t.jsx)(a.f,{children:(0,t.jsx)(r.f,{linkToCompliance:!0,viewOnly:!0,adminId:e.adminId,showFiltersInTable:!1,hideFilters:{status:!0,hideExpiredCompliance:!0}})})},l=()=>(0,t.jsx)(n,{});l.getLayout=function(e){return(0,t.jsx)(i.f,{children:e})},e.s(["default",0,l],417758)}],668121,(e,t,i)=>{let a="/dashboard/compliances";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(417758)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);