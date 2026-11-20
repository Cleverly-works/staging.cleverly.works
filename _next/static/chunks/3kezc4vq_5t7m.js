(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,218659,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(115871),a=e.i(813843),s=e.i(755548),n=e.i(587369);let l=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:o={},imageSx:d={},title:p,titleSx:u={},subtitleFirstLine:c,subtitleFirstLineSx:f={},subtitleSecondLine:m,subtitleSecondLineSx:h={},buttonText:x,onAction:v}=e,b=(0,n.f)("(max-width: 400px)");return(0,t.jsxs)(a.f,{sx:{...o,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(l,{src:i,sx:{...d,width:b?"250px":"300px"}}),(0,t.jsx)(r.f,{typography:"h5",sx:{...u},children:p}),(0,t.jsxs)(a.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(r.f,{sx:{...f},children:c}),(0,t.jsx)(r.f,{sx:{...h},children:m})]}),x&&v&&(0,t.jsx)(s.f,{variant:"contained",color:"secondary",onClick:v,children:x})]})}])},258877,777513,e=>{var t,i=e.i(391398),r=e.i(203828),a=e.i(755548),s=e.i(220490),n=e.i(106850),l=e.i(813843),o=e.i(280445),d=e.i(115871),p=e.i(191788);function u(){return(u=Object.assign.bind()).apply(null,arguments)}let c=e=>p.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 23 22",width:"1em",height:"1em"},e),t||(t=p.createElement("path",{fill:"#C1C1C1",d:"M10.504.223a2.35 2.35 0 0 1 1.994 0l9.277 4.34c.36.168.59.533.59.937s-.23.769-.59.937l-9.277 4.34a2.35 2.35 0 0 1-1.994 0l-9.277-4.34a1.04 1.04 0 0 1-.59-.937c0-.4.229-.77.59-.937zm9.013 8.783 2.258 1.057c.36.168.59.533.59.937s-.23.769-.59.937l-9.277 4.34a2.35 2.35 0 0 1-1.994 0l-9.277-4.34A1.04 1.04 0 0 1 .637 11c0-.4.229-.77.59-.937l2.257-1.057 6.45 3.017a3.7 3.7 0 0 0 3.133 0zm-6.45 8.517 6.45-3.017 2.258 1.057c.36.168.59.533.59.937s-.23.769-.59.937l-9.277 4.34a2.35 2.35 0 0 1-1.994 0l-9.277-4.34a1.04 1.04 0 0 1-.59-.937c0-.4.229-.77.59-.937l2.257-1.057 6.45 3.017a3.7 3.7 0 0 0 3.133 0"})));var f=e.i(757436),m=e.i(594301),h=e.i(184696),x=e.i(48441),v=e.i(285835);let b={color:"#5C5C5C",fontSize:"14px",marginBottom:"12px"},g={maxHeight:"45px",overflow:"auto"},j={fontWeight:"600"},y={fontWeight:"300",whiteSpace:"nowrap"},S=(0,o.f)(s.f)(e=>{let{selected:t}=e;return{position:"relative",width:"calc(100% - 60px)",display:"flex",flexDirection:"column",justifyContent:"center",height:"140px",backgroundColor:"#F9F9F9",...!t&&{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-10px)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)"}},...t&&{width:"100%",border:"1px solid #50AEFC"}}}),$=(0,o.f)("div")({position:"relative",width:"12px",marginLeft:"0px !important","&:after":{content:'""',position:"absolute",bottom:"50%",left:"-6px",width:0,height:0,borderLeft:"12px solid transparent",borderRight:"0px solid transparent",borderBottom:"12px solid #50AEFC",transform:"rotate(-45deg)"}}),C=(0,o.f)(s.f)(()=>({width:"60px",display:"flex",justifyContent:"center",alignItems:"center",height:"140px",backgroundColor:"#F9F9F9",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, box-shadow 0.3s ease","&:hover":{transform:"translateY(-10px)",boxShadow:"0 8px 16px rgba(0, 0, 0, 0.2)"},"& .MuiCardContent-root":{padding:"0px",display:"flex",justifyContent:"center",alignItems:"center"},"& .stacked-layers":{fontSize:"24px"}}));e.s(["f",0,e=>{let{id:t,number:s,status:o,description:p,supplierId:u,supplierName:I,onSelectJob:A,selected:w,onClose:M}=e,{hasRole:O}=(0,m.f)(),_=O("supplier"),T=O("customer"),U=O("tenant"),N=(0,h.M)(o),{text:R}=[...x.o,...x.w,...x.y].find(e=>{let{value:t}=e;return t===o})||{statusText:""};return(0,i.jsxs)(l.f,{direction:"row",width:"100%",spacing:1,onClick:()=>A({id:t,number:s}),children:[(0,i.jsx)(S,{selected:w,children:(0,i.jsxs)(n.f,{children:[(0,i.jsxs)(l.f,{direction:"row",alignItems:"center",columnGap:2,mb:1.5,children:[(0,i.jsx)(a.f,{onClick:e=>{e.stopPropagation(),r.default.push(`/dashboard/issues/view?id=${s}`).then(()=>M())},color:N,variant:"contained",size:"small",endIcon:(0,i.jsx)(f.default,{}),children:s}),(0,i.jsx)(d.f,{sx:j,variant:"subtitle1",children:R})]}),(0,i.jsx)(l.f,{sx:g,children:(0,i.jsx)(v.f,{maxLength:50,sx:b,children:p})}),!T&&!U&&(0,i.jsxs)(l.f,{children:[(0,i.jsx)(d.f,{variant:"subtitle2",sx:y,children:"Assigned to: "}),(0,i.jsx)(v.f,{maxLength:24,variant:"subtitle2",...u&&!_&&{href:`/dashboard/suppliers/view?id=${u}`,color:"secondary",sx:{"& .MuiTypography-root":{fontSize:"12px"},"&:hover":{cursor:"pointer"}}},children:I||"-"})]})]})}),w&&(0,i.jsx)($,{}),!w&&(0,i.jsx)(C,{children:(0,i.jsx)(n.f,{children:(0,i.jsx)(c,{className:"stacked-layers"})})})]})}],258877);var I=e.i(58945),A=e.i(648065),w=e.i(942446),M=e.i(44165),O=e.i(199525),_=e.i(362537),T=e.i(879436);let U=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.find(e=>"reportSentSupplier"===e.status);return t&&`Report Sent by ${t?.user?.fullName||""}`},N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e?.find(e=>"invoiceSent"===e.status);return t&&`Invoice sent by ${t?.user?.fullName||""}`};e.s(["f",0,e=>{let{supplier:t,supplierUser:i,timings:r=[],timingStatus:a,correctStart:s,correctEnd:n,scheduledAt:l,arrivalAnytime:o,compliance:d,supplierOffers:p=[],amountOutstanding:u,reconciledAmount:c,amountOutstandingSupplier:f,reconciledAmountSupplier:h,additionalOperatives:x=I.Z,supplierUserId:v}=e,{hasRole:b}=(0,m.f)(),g=b("customer"),j=b("tenant"),y=b("supplier"),S="onHold"===(0,A.f)(r),$=(0,w.f)({timings:r},"accepted"),C=(0,w.f)({timings:r},"closed"),R="incorrect"===a?n:(0,w.f)({timings:r},"completed"),k=(0,w.f)({timings:r},"complianceRejected"),Y=(0,w.f)({timings:r},"complianceApproved"),J=(0,w.f)({timings:r},"customerPaid"),q=!!d,P="incorrect"===a?s:(0,w.f)({timings:r},"inProgress"),F=(0,w.f)({timings:r},"invoiceSent"),H=(0,w.f)({timings:r},"offered"),W=(0,w.f)({timings:r},"pricingChanged"),E=(0,w.f)({timings:r},"quoteAccepted"),L=(0,w.f)({timings:r},"rejected"),D=(0,w.f)({timings:r},"reportSent"),z=(0,w.f)({timings:r},"reportSentSupplier"),B=(0,w.f)({timings:r},"supplierPaid"),G=(0,w.f)({timings:r},"timingChanged"),Q=(0,w.f)({timings:r},"validated"),K=(0,w.f)({timings:r},"updateAcceptOfferInput"),V=(0,w.f)({timings:r},"supplierCancel"),Z=(0,w.f)({timings:r},"expensesPendingAmount"),X=(0,w.f)({timings:r},"expensesPendingAmountResolved"),ee=l?o?`${(0,_.default)(l).format("D MMM YYYY")} (anytime)`:(0,_.default)(l).format("D MMM YYYY HH:mm"):(0,_.default)(E||$).format("D MMM YYYY HH:mm"),et=p.filter(e=>"cancelled"!==e.status).length,ei=(0,M.$)("adminInvoice",r),er=(0,M.B)(["adminUplift","adminInvoice"],r),ea=(0,M.n)("adminInvoice",r),es=c??0,en=h??0,el=(0,I.G)(x),eo=(0,I.T)({supplierUser:i,supplierUserId:v},x);return[{id:1,active:!0,label:"Job raised",date:(0,w.f)({timings:r},["raised","quoteNew"]),content:[{id:1,active:!0,data:`Created By ${r[0]?.user?.fullName||""}`}]},{id:2,active:!0,label:"Job offered",info:"no assigned suppliers",date:H,content:[{id:1,active:!!(!S&&H&&!P&&!$&&!G&&!W&&p&&p.length>0),data:`Offered to ${et} suppliers`},{id:2,active:!!(!S&&L),data:"Job rejected by supplier"}]},{id:3,active:!0,label:"Accepted",info:"waiting for supplier to accept",date:(0,w.f)({timings:r},"accepted"),content:[{id:1,active:!!(($||E||G||W)&&t&&!g&&!j),data:`Assigned to ${t?.name}`},{id:2,active:!!(($||E)&&i&&!g&&!j),data:`Primary operative: ${i?.fullName}`},...x.length>0?[{id:31,active:!!(($||E)&&!g&&!j),data:`Additional operatives: ${el}`}]:[],{id:3,active:!!($||E),data:`Arrival time: ${ee}`},{id:4,active:!!(G&&!$&&t),data:`Job timing has changed, supplier needs to Accept the job again and set new
          attendance time`},{id:5,active:!!(W&&!$&&t),data:`Job service or pricing has changed, supplier needs to Accept the job again and
          confirm attendance and operative`},{id:6,active:!!K,data:`Attendance and operative has changed by ${(0,O.f)({timings:r},"updateAcceptOfferInput")}`},{id:7,active:!!V,data:`Job canceled by ${(0,O.f)({timings:r},"supplierCancel")}`}]},{id:4,active:!0,label:"In progress",info:"waiting for supplier to start",date:P},{id:5,active:!0,label:"Complete",info:"waiting for supplier to complete",date:R},{id:6,active:!0,label:"Report sent",info:"after job complete",date:D,content:[{id:1,active:!!z,data:"Report submitted by supplier"},{id:2,active:!0,data:U(r)||""}]},{id:7,label:"Customer Sign Off",info:"",date:q&&(Y||k),active:q,content:[{id:1,active:!!Y,data:`Compliance sing off by ${(0,O.f)({timings:r},"complianceApproved")}`},{id:2,active:!!k,data:`Compliance rejected by ${(0,O.f)({timings:r},"complianceRejected")}`}]},{id:8,label:"Threshold approval",info:"",date:er?.createdAt||ea?.createdAt,active:!!(ei||er||ea),content:[{id:1,active:ei&&!er&&!ea,data:"Awaiting threshold approval"},{id:2,active:!!er,data:`Threshold approved by ${er?.user?.fullName}`},{id:3,active:!!ea,data:`Threshold rejected by ${ea?.user?.fullName}`}]},{id:11,label:"Awaiting expenses pricing",info:"",date:X,active:!!(Z||X)},{id:12,active:!0,label:"Invoices sent",info:"after validation",date:F,content:[{id:1,active:!!Q,data:"Job validated"},{id:2,active:!0,data:N(r)||""},{id:3,active:eo&&!g&&!j&&!y,data:I.v}]},{id:13,label:`Customer ${!J?es?"partially paid":"not paid":"paid"}`,date:J,active:!y,content:[{id:1,active:!J&&!!es,data:`Reconciled amount ${(0,T.f)(es)}`},{id:2,active:!J&&!!es,data:`Amount outstanding ${(0,T.f)(u??0)}`}]},{id:14,label:`Supplier ${!B?en?"partially paid":"not paid":"paid"}`,date:B,active:!g&&!j,content:[{id:1,active:!B&&!!en,data:`Reconciled amount ${(0,T.f)(en)}`},{id:2,active:!B&&!!en,data:`Amount outstanding ${(0,T.f)(f??0)}`}]},{id:15,active:!0,label:"Closed",info:"automatically after steps complete",date:C}]}],777513)},173575,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(432171),a=e.i(740790),s=e.i(813843),n=e.i(115871),l=e.i(871931),o=e.i(302966),d=e.i(760981),p=e.i(738251),u=e.i(587369),c=e.i(76381),f=e.i(755548),m=e.i(110579),h=e.i(362537),x=e.i(889231),v=e.i(285835),b=e.i(218659),g=e.i(258877),j=e.i(624841),y=e.i(115126),S=e.i(777513),$=e.i(594301),C=e.i(184696),I=e.i(824451),A=e.i(38461),w=e.i(877341),M=e.i(827010);let O=e=>{let{hideFilters:r={},defaultFilters:a={},filters:n,setFilters:l}=e,o=(0,u.f)("(max-width: 600px)"),[d,p]=(0,i.useState)(""),[c,{loading:f,data:{items:m}={items:[]}}]=(0,w.f)(M.U,{variables:{where:{name:{_ilike:""!==d?`%${d}%`:null},type:{_eq:"supplier"}}}}),h=(0,i.useCallback)(e=>e?.reduce((e,t)=>{let i=A.f.find(e=>e.value===t);return i?[...e,{value:i.value,label:i.label}]:e},[]),[]);return(0,t.jsxs)(s.f,{direction:"row",spacing:1,children:[!r.status&&(0,t.jsx)(I.f,{multiple:!0,limitTags:1,variant:"standard",color:"secondary",label:"Select status",value:h(n.status)||[],sx:_.selector(o),onChange:(e,t)=>{t.length?l(e=>({...e,status:[...t.map(e=>e.value)]})):l(e=>({...e,status:a.status}))},options:A.f}),!r.supplier&&(0,t.jsx)(I.f,{variant:"standard",color:"secondary",label:"Select supplier",value:n.supplier,sx:_.selector(o),onSearchChange:p,onChange:(e,t)=>{t?.value&&t?.label?l(e=>({...e,supplier:t})):l(e=>({...e,supplier:a.supplier}))},loading:f,onOpen:()=>c(),options:m})]})},_={selector:e=>({width:e?"100%":"300px"})};var T=e.i(159080),U=e.i(315560);let N=T.f`
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
`,R=T.f`
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
`,k=T.f`
  ${U.P}
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
`,Y=T.f`
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
      arrivalAnytime: clientMeta(path: "arrivalAnytime")
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
        quoteId
        createdAt
        user: User {
          id
          fullName
        }
      }
    }
  }
`,J=T.f`
  ${U.P}
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
      arrivalAnytime: clientMeta(path: "arrivalAnytime")
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
        quoteId
        createdAt
        user: User {
          id
          fullName
        }
      }
    }
  }
`;var q=e.i(58945);let P={marginBottom:"10px"},F={fontWeight:"300"},H={fontWeight:"300"},W={borderTop:"0px",boxShadow:"none"};e.s(["f",0,e=>{let{type:I,jobScheduleId:A,complianceId:w,defaultFilters:M={},startDate:_,endDate:T,showCanceled:U,onClose:E,hideFilters:L}=e,{hasRole:D,user:z}=(0,$.f)(),B=D("supplier"),G=D("customer"),Q=D("tenant"),[K,V]=(0,i.useState)(null),[Z,X]=(0,i.useState)(M),ee=(0,u.f)("(max-width: 600px)"),{query:et,variables:ei}=(e=>{let{type:t,jobScheduleId:i,complianceId:r,startDate:a,endDate:s,showCanceled:n,filters:l}=e;switch(t){case"Compliance":return{query:N,variables:{complianceId:r,supplierId:l.supplier?.value,status:!l.status||l.status?.includes?.("all")?null:l.status}};case"JobSchedule":return{query:R,variables:{jobScheduleId:i,supplierId:l.supplier?.value,status:!l.status||l.status?.includes?.("all")?null:l.status,startDate:a,endDate:s,excludedStatuses:n?[]:["canceled"]}}}})({type:I,jobScheduleId:A,complianceId:w,startDate:_,endDate:T,showCanceled:U,filters:Z}),{data:{jobs:er}={jobs:[]},loading:ea}=(0,r.t)(et,{variables:ei}),es=(e=>{switch(e){case"admin":return k;case"customer":case"tenant":return Y;case"supplier":return J;default:return null}})(z.accountType),{data:{job:en}={job:null},loading:el}=(0,r.t)(es,{skip:!K||!es,variables:{jobId:K?.id}}),eo=er.length;return ea?(0,t.jsx)(s.f,{height:"100%",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(c.f,{color:"secondary"})}):(0,t.jsxs)(s.f,{children:[(0,t.jsxs)(s.f,{direction:ee?"column":"row",alignItems:ee?"space-between":"flex-end",spacing:1,children:[(0,t.jsx)(O,{hideFilters:L,defaultFilters:M,filters:Z,setFilters:X}),(0,t.jsxs)(n.f,{typography:"subtitle2",sx:H,mt:2*!!ee,children:["Item has ",eo," scheduled jobs"]})]}),er?.length?(0,t.jsxs)(a.f,{container:!0,mt:3,children:[(0,t.jsx)(a.f,{item:!0,xs:12,md:5,lg:5,sx:{height:ee?"auto":"750px",padding:"15px 10px",overflow:"scroll"},children:(0,t.jsx)(s.f,{rowGap:2,children:er?.map(e=>(0,t.jsx)(g.f,{id:e.id,number:e.number,status:e.status,description:e.description,supplierId:e.supplier?.id,supplierName:e.supplier?.name,onSelectJob:V,selected:K?.id===e.id,onClose:E}))})}),(0,t.jsx)(a.f,{item:!0,xs:12,md:6,lg:6,ml:3,children:K&&!el&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{sx:P,spacing:1,children:[(0,t.jsx)(x.f,{href:`/dashboard/issues/view?id=${K?.number}`,children:(0,t.jsx)(f.f,{color:(0,C.M)(en?.status),variant:"contained",size:"small",endIcon:(0,t.jsx)(m.default,{}),children:en?.number})}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Description"}),(0,t.jsx)(v.f,{maxLength:40,sx:{wordBreak:"break-all"},children:en?.description})]}),!G&&!Q&&(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Supplier"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:(0,t.jsx)(x.f,{color:"secondary",href:`/dashboard/suppliers/view?id=${en?.supplier?.id}`,noWrap:!en?.supplier?.id||B,sx:{fontSize:"12px"},children:en?.supplier?.name||"-"})})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Scheduled start"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:en?.timingStart?(0,h.default)(en?.timingStart).format("D MMM YYYY HH:mm"):"-"})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Scheduled End"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:en?.timingEnd?(0,h.default)(en?.timingEnd).format("D MMM YYYY HH:mm"):"-"})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(n.f,{typography:"subtitle2",sx:F,children:"Supplier arrival"}),(0,t.jsx)(n.f,{typography:"subtitle2",children:en?.scheduledAt?`${(0,h.default)(en?.scheduledAt).format("D MMM YYYY")} ${en?.arrivalAnytime?"(anytime)":""}`:"-"})]})]}),(0,t.jsxs)(l.f,{sx:W,expanded:!0,children:[(0,t.jsx)(o.f,{children:(0,t.jsxs)(s.f,{direction:"row",spacing:3,children:[(0,t.jsx)(n.f,{variant:"h6",children:"Workflow"}),(0,t.jsx)(j.f,{value:en?.status})]})}),(0,t.jsx)(d.f,{children:(0,t.jsx)(y.f,{steps:(0,S.f)({supplier:en?.supplier,supplierUser:en?.supplierUser,timings:en?.timings,timingStatus:en?.timingStatus,correctStart:en?.correctStart,correctEnd:en?.correctEnd,scheduledAt:en?.scheduledAt,arrivalAnytime:en?.arrivalAnytime,compliance:en?.compliance,supplierOffers:en?.supplierOffers,amountOutstanding:en?.amountOutstanding,reconciledAmount:en?.reconciledAmount,amountOutstandingSupplier:en?.amountOutstandingSupplier,reconciledAmountSupplier:en?.reconciledAmountSupplier,additionalOperatives:(0,q.a)(en),supplierUserId:en?.supplierUserId})})})]})]})})]}):(0,t.jsx)(p.f,{sx:{height:"calc(100vh - 180px)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,t.jsx)(b.f,{imageSrc:"/static/icons/no_locations_found.svg",title:"No PPM jobs found",subtitleFirstLine:"Jobs for applied filters was not found or wasn`t created",subtitleSecondLine:"Please click Create jobs on PPM item or amend filters"})})]})}],173575)},648065,e=>{e.s(["f",0,e=>{let t=null,i=[...e||[]].sort((e,t)=>Number(e.id)-Number(t.id));for(let e=i.length-1;e>=0;e--){let r=i[e]?.status;if(r&&["onHold","resumed","paused","continued","onMyWayPaused","onMyWayResumed"].includes(r)){t=r;break}}return t}])},44165,e=>{e.s(["$",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);return i?.find(t=>t.status===`${e}ThresholdApproval`)},"B",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);if(Array.isArray(e)){let t;return e.forEach(e=>{t=i?.find(t=>t.status===`${e}ThresholdApproved`)||t}),t}return i?.find(t=>t.status===`${e}ThresholdApproved`)},"n",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);return i?.find(t=>t.status===`${e}ThresholdRejected`)},"t",0,(e,t,i)=>{let r=t?.slice()?.sort((e,t)=>t.id-e.id);return r?.find(t=>t.status===`${e}QuoteThresholdApproval`&&i===t.quoteId)},"D",0,(e,t,i)=>{let r=t?.slice()?.sort((e,t)=>t.id-e.id);return r?.find(t=>t.status===`${e}QuoteThresholdApproved`&&i===t.quoteId)},"k",0,(e,t,i)=>{let r=t?.slice()?.sort((e,t)=>t.id-e.id);return r?.find(t=>t.status===`${e}QuoteThresholdRejected`&&i===t.quoteId)}])},115126,e=>{var t=e.i(391398),i=e.i(420),r=e.i(202246),a=e.i(738251),s=e.i(755548),n=e.i(551918),l=e.i(813843),o=e.i(566118),d=e.i(687722),p=e.i(145018),p=p,u=e.i(460997),c=e.i(75907),f=e.i(191788),m=e.i(889878),h=e.i(600961),x=e.i(396851),v=e.i(395724),b=e.i(631269),g=e.i(425577),j=e.i(432484),y=e.i(713149),S=e.i(46739);function $(e){return(0,S.f)("MuiStepContent",e)}let C=(0,y.f)("MuiStepContent",["root","last","transition"]),I=["children","className","TransitionComponent","transitionDuration","TransitionProps"],A=(0,x.f)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.last&&t.last]}})(e=>{let{ownerState:t,theme:i}=e;return(0,c.f)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:i.vars?`1px solid ${i.vars.palette.StepContent.border}`:`1px solid ${"light"===i.palette.mode?i.palette.grey[400]:i.palette.grey[600]}`},t.last&&{borderLeft:"none"})}),w=(0,x.f)(b.f,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),M=f.forwardRef(function(e,i){let r=(0,v.f)({props:e,name:"MuiStepContent"}),{children:a,className:s,TransitionComponent:n=b.f,transitionDuration:l="auto",TransitionProps:o}=r,d=(0,u.f)(r,I),{orientation:p}=f.useContext(g.f),{active:x,last:y,expanded:S}=f.useContext(j.f),C=(0,c.f)({},r,{last:y}),M=(e=>{let{classes:t,last:i}=e;return(0,h.f)({root:["root",i&&"last"],transition:["transition"]},$,t)})(C),O=l;return"auto"!==l||n.muiSupportAuto||(O=void 0),(0,t.jsx)(A,(0,c.f)({className:(0,m.f)(M.root,s),ref:i,ownerState:C},d,{children:(0,t.jsx)(w,(0,c.f)({as:n,in:x||S,className:M.transition,ownerState:C,timeout:O,unmountOnExit:!0},o,{children:a}))}))});var O=e.i(280875),_=e.i(860387),_=_,T=e.i(115871),U=e.i(889231),N=e.i(280445),R=e.i(362537);let k=(0,N.f)(d.f)(e=>{let{theme:t}=e;return{[`&.${p.U.active}`]:{[`& .${p.U.line}`]:{borderColor:t.palette.primary.main}},[`&.${p.U.completed}`]:{[`& .${p.U.line}`]:{borderColor:t.palette.primary.main}},[`& .${p.U.line}`]:{borderColor:t.palette.primary.main,borderLeftWidth:4,borderRadius:1,marginLeft:"-2px",minHeight:"15px"}}}),Y=(0,N.f)(M)(e=>{let{theme:t}=e;return{[`&.${C.root}`]:{paddingLeft:"38px",paddingRight:"5px",borderColor:t.palette.primary.main,borderLeftWidth:4,marginLeft:"10px"}}}),J=(0,N.f)(O.f)(()=>({[`&.${_.U.root}`]:{padding:0},[`& .${_.U.labelContainer}`]:{color:"inherit"},[`& .${_.U.label}`]:{display:"flex",alignItems:"center",color:"inherit"}}));e.s(["f",0,e=>{let{steps:d,summary:p,enableBorder:u=!1}=e;return(0,t.jsxs)(a.f,{children:[(0,t.jsx)(n.f,{orientation:"vertical",connector:(0,t.jsx)(k,{}),children:d.filter(e=>{let{active:t}=e;return void 0===t||t}).map((e,n)=>{let{id:p,label:c,info:f,date:m,content:h,actions:x}=e,v=!!m,b=h?.filter(e=>{let{active:t,data:i}=e;return!!t&&!!i})||[],g=x?.filter(e=>{let{active:t}=e;return!!t})||[],j=v?(0,t.jsx)(i.default,{color:"primary"}):(0,t.jsx)(r.default,{color:"primary"});return(0,t.jsxs)(o.f,{completed:v,expanded:!0,children:[(0,t.jsxs)(J,{icon:j,children:[(0,t.jsx)(T.f,{sx:{fontSize:"13px",fontWeight:600,ml:"20px"},children:c}),(0,t.jsx)(T.f,{sx:{fontSize:"10px",fontWeight:400,ml:"auto",mr:"5px",opacity:.6},children:m?(0,R.default)(m).format("D MMM YYYY HH:mm"):""})]}),(0,t.jsx)(Y,{children:(0,t.jsxs)(a.f,{sx:u&&n!==d.length-1?{pb:"15px",borderBottom:"1px solid #E0E0E0"}:void 0,children:[(0,t.jsx)(a.f,{children:v||b?.length>0?b.map(e=>"function"==typeof e.data?e.data():(0,t.jsx)(T.f,{sx:{fontSize:"10px",pl:"4px"},children:e.data})):(0,t.jsx)(T.f,{sx:{fontSize:"10px"},children:f})}),g?.length>0&&(0,t.jsx)(l.f,{mt:.5,spacing:.5,children:g.map(e=>"button"!==e.type?null:(0,t.jsx)(a.f,{children:(0,t.jsx)(s.f,{color:e.context,variant:"contained",size:"small",onClick:e.handleClick,children:e.content})}))})]})})]},`${c}-${p}`)})}),p&&p?.length>0&&(0,t.jsx)(a.f,{mt:2,children:p.map(e=>{let{label:i,value:r,link:a}=e;return(0,t.jsxs)(T.f,{mt:.75,children:[i,":"," ",a?(0,t.jsx)(U.f,{color:"secondary",underline:"none",href:a,children:r}):r]},i)})})]})}],115126)},38461,e=>{e.s(["f",0,[{label:"All jobs",value:"all"},{label:"Raised jobs",value:"raised"},{label:"Offered jobs",value:"offered"},{label:"Accepted jobs",value:"accepted"},{label:"In progress jobs",value:"inProgress"},{label:"Completed jobs",value:"completed"},{label:"Report sent jobs",value:"reportSent"},{label:"Follow on jobs",value:"followOn"}]])},315560,e=>{var t=e.i(159080);let i=t.f`
  fragment JobOperativesFields on Job {
    jobOperatives: JobOperatives(order_by: { id: asc }) {
      userId
      user: User {
        id
        fullName
      }
    }
  }
`,r=t.f`
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
`;e.s(["Q",0,r,"P",0,i])},58945,e=>{let t=[],i=[],r=e=>e.supplierUserId??e.supplierUser?.id,a=e=>{if(!e?.jobOperatives?.length)return i;let t=r(e),a=e.jobOperatives.map(e=>({id:e.userId,name:e.user?.fullName})).filter(e=>e.id!==t);return a.length?a:i};e.s(["Z",0,i,"P",0,[],"v",0,"Warning: This work order has multiple engineers attached. Please adjust the finances accordingly before invoicing.","G",0,e=>e.map(e=>e.name||`User #${e.id}`).join(", "),"a",0,a,"F",0,r,"T",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a(e);return!!r(e)&&t.length>0},"K",0,(e,i,r)=>!Number.isFinite(i)||e.some(e=>e.value===i)?e:[{value:i,label:((e,i)=>{if(i.supplierUser?.id===e&&i.supplierUser.fullName)return i.supplierUser.fullName;let r=(i.jobOperatives??t).find(t=>t.userId===e);return r?.user?.fullName||`Operative #${e}`})(i,r)},...e]])},942446,e=>{e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let r=e?.timings?.find(e=>e.status===t);i=r?.createdAt||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.createdAt||null}])},199525,e=>{e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let r=e?.timings?.find(e=>e.status===t);i=r?.user?.fullName||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.user?.fullName||null}])},110579,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),s=e.r(391398);i.default=(0,a.default)((0,s.jsx)("path",{d:"M17 7h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c2.76 0 5-2.24 5-5s-2.24-5-5-5m-9 5c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1m2 3H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h3c.55 0 1-.45 1-1s-.45-1-1-1H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1"}),"LinkRounded")},202246,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),s=e.r(391398);i.default=(0,a.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked")},953116,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),s=e.r(391398);i.default=(0,a.default)((0,s.jsx)("path",{d:"M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2m4 1H4V5h2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4z"}),"StorageRounded")},757436,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),s=e.r(391398);i.default=(0,a.default)((0,s.jsx)("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"VisibilityRounded")},220490,e=>{var t=e.i(75907),i=e.i(460997),r=e.i(191788),a=e.i(889878),s=e.i(600961),n=e.i(396851),l=e.i(395724),o=e.i(88152),d=e.i(713149),p=e.i(46739);function u(e){return(0,p.f)("MuiCard",e)}(0,d.f)("MuiCard",["root"]);var c=e.i(391398);let f=["className","raised"],m=(0,n.f)(o.f,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),h=r.forwardRef(function(e,r){let n=(0,l.f)({props:e,name:"MuiCard"}),{className:o,raised:d=!1}=n,p=(0,i.f)(n,f),h=(0,t.f)({},n,{raised:d}),x=(e=>{let{classes:t}=e;return(0,s.f)({root:["root"]},u,t)})(h);return(0,c.jsx)(m,(0,t.f)({className:(0,a.f)(x.root,o),elevation:d?8:void 0,ref:r,ownerState:h},p))});e.s(["f",0,h],220490)},106850,e=>{var t=e.i(75907),i=e.i(460997),r=e.i(191788),a=e.i(889878),s=e.i(600961),n=e.i(396851),l=e.i(395724),o=e.i(713149),d=e.i(46739);function p(e){return(0,d.f)("MuiCardContent",e)}(0,o.f)("MuiCardContent",["root"]);var u=e.i(391398);let c=["className","component"],f=(0,n.f)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),m=r.forwardRef(function(e,r){let n=(0,l.f)({props:e,name:"MuiCardContent"}),{className:o,component:d="div"}=n,m=(0,i.f)(n,c),h=(0,t.f)({},n,{component:d}),x=(e=>{let{classes:t}=e;return(0,s.f)({root:["root"]},p,t)})(h);return(0,u.jsx)(f,(0,t.f)({as:d,className:(0,a.f)(x.root,o),ownerState:h,ref:r},m))});e.s(["f",0,m],106850)}])})();