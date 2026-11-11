(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,908759,(e,t,a)=>{let r="/dashboard/quotes";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(717445)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},717445,e=>{"use strict";var t,a=e.i(391398),r=e.i(203828),i=e.i(293965),n=e.i(191788),o=e.i(98926),s=e.i(432171),l=e.i(877341),d=e.i(88152),u=e.i(813843),m=e.i(115871),c=e.i(834035),p=e.i(362537),f=e.i(472552),g=e.i(498681),h=e.i(594301),$=e.i(60903),_=e.i(755548),q=e.i(683125),I=e.i(652148),b=e.i(799083),y=e.i(152078),x=e.i(422411),S=e.i(280445),j=e.i(722394),C=e.i(827010),v=e.i(851123),D=e.i(824451),w=e.i(655477),k=e.i(413452);let M=e=>{let{open:t=!1,setOpen:r,filterForm:i,setFilterForm:o,statusOptions:s,filtersVisibilityModel:d={}}=e,{user:m}=(0,h.f)(),{control:c,handleSubmit:p,register:f,reset:g,watch:$,setValue:q}=(0,x.G)({defaultValues:{showCanceled:!1,...i}}),y=$("startDate"),[S,j]=(0,n.useState)(""),[D,M]=(0,n.useState)(""),[E,W]=(0,n.useState)(""),[J,Q]=(0,n.useState)(""),[L,U]=(0,n.useState)(""),[Y,P]=(0,n.useState)(""),[B,H]=(0,n.useState)(""),V=(0,k.f)(d),[z,{loading:G,data:{items:K}={items:[]}}]=(0,l.f)(C.Q,{variables:{limit:50,offset:0,q:""!==S?`%${S}%`:null}}),[X,{loading:Z,data:{items:ee}={items:[]}}]=(0,l.f)(C.k,{variables:{subtype:"quote",adminId:m.adminId,limit:50,offset:0,q:""!==D?`%${D}%`:null}}),[et,{loading:ea,data:{items:er}={items:[]}}]=(0,l.f)(C.r,{variables:{limit:50,offset:0,q:""!==E?`%${E}%`:null}}),[ei,{loading:en,data:{items:eo}={items:[]}}]=(0,l.f)(v.j,{variables:{where:{name:{_ilike:""!==J?`%${J}%`:null}},limit:50,offset:0}}),[es,{loading:el,data:{items:ed}={items:[]}}]=(0,l.f)(C.U,{variables:{where:{type:{_eq:"supplier"},name:{_ilike:""!==L?`%${L}%`:null}},limit:50,offset:0}}),[eu,{data:{items:em}={items:[]},loading:ec}]=(0,l.f)(C.O,{variables:{accountId:m.accountId,limit:50,offset:0,q:""!==Y?`%${Y}%`:null}}),[ep,{data:{items:ef}={items:[]},loading:eg}]=(0,l.f)(C.Q,{variables:{accountId:m.adminId,limit:50,offset:0,q:""!==B?`%${B}%`:null}}),eh=(0,n.useRef)(!1);return(0,n.useEffect)(()=>{if(!eh.current){eh.current=!0;return}let e=s.filter(e=>"quoteOffered"===e.value);q("status",y?e:[])},[y,q,s]),(0,a.jsx)(N,{keepMounted:!0,open:t,onClose:()=>r(!1),children:(0,a.jsx)("form",{onSubmit:p(e=>{o(e),r(!1)}),children:(0,a.jsxs)(R,{children:[(0,a.jsx)(I.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:f}),(0,a.jsx)(x.e,{name:"startDate",control:c,render:e=>(0,a.jsx)(A,{...e,label:"Quote offered date",slotProps:{textField:{variant:"standard"}}})}),(0,a.jsx)(x.e,{name:"endDate",control:c,render:e=>(0,a.jsx)(A,{...e,label:"Quote due date",slotProps:{textField:{variant:"standard"}}})}),(0,a.jsx)(x.e,{name:"status",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{disabled:!!y,multiple:!0,limitTags:1,value:t||[],onChange:(e,t)=>r(t),label:"Select status",color:"secondary",variant:"standard",options:s})}}),V("customer")&&(0,a.jsx)(x.e,{name:"customerId",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{value:t||null,onChange:(e,t)=>r(t),label:"Select customer",color:"secondary",variant:"standard",loading:ea,onOpen:()=>et(),options:er,onSearchChange:W})}}),V("user")&&(0,a.jsx)(x.e,{name:"userId",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{value:t||null,onChange:(e,t)=>r(t),label:"Select user",color:"secondary",variant:"standard",loading:G,onOpen:()=>z(),options:K,onSearchChange:j})}}),V("location")&&(0,a.jsx)(x.e,{name:"location",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{value:t||null,onChange:(e,t)=>r(t),label:"Select location",color:"secondary",variant:"standard",loading:en,onOpen:()=>ei(),options:eo,onSearchChange:Q})}}),V("tags")&&(0,a.jsx)(O,{children:(0,a.jsx)(w.f,{control:c})}),V("supplier")&&(0,a.jsx)(x.e,{name:"supplierId",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{disabled:!!y,value:t||null,onChange:(e,t)=>r(t),label:"Select supplier",color:"secondary",variant:"standard",loading:el,onOpen:()=>es(),options:ed,onSearchChange:U})}}),V("customerManager")&&(0,a.jsx)(x.e,{name:"customerManager",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{value:t||null,onChange:(e,t)=>r(t),loading:ec,onOpen:()=>eu(),options:em,onSearchChange:P,color:"secondary",variant:"standard",label:"Select account manager"})}}),V("locationManager")&&(0,a.jsx)(x.e,{name:"locationManager",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{value:t||null,onChange:(e,t)=>r(t),loading:eg,onOpen:()=>ep(),options:ef,onSearchChange:H,color:"secondary",variant:"standard",label:"Select location manager"})}}),(0,a.jsx)(x.e,{name:"slaId",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(T,{disabled:!!y,multiple:!0,limitTags:1,value:t||[],onChange:(e,t)=>r(t),label:"Select priority",color:"secondary",variant:"standard",loading:Z,onOpen:()=>X(),options:ee,onSearchChange:M})}}),(0,a.jsx)(x.e,{name:"showCanceled",control:c,render:e=>{let{value:t,onChange:r}=e;return(0,a.jsx)(F,{control:(0,a.jsx)(b.f,{color:"secondary",checked:t,onChange:e=>r(e.target.checked)}),label:"Show canceled quotes"})}}),(0,a.jsxs)(u.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,a.jsx)(_.f,{variant:"contained",color:"danger",onClick:()=>{let e;o(e={showCanceled:!1}),g(e),r(!1)},children:"Cancel"}),(0,a.jsx)(_.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},N=(0,S.f)(q.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),R=(0,S.f)(d.f)(()=>({padding:"24px",maxWidth:"700px",maxHeight:"100vh",overflowY:"scroll",display:"flex",flexDirection:"row",flexWrap:"wrap",rowGap:"16px",columnGap:"16px","@media (max-width: 600px)":{flexDirection:"column",flexWrap:"nowrap",columnGap:0,width:"100vw",height:"100vh"}})),A=(0,S.f)(j.f)(()=>({"&.MuiFormControl-root.MuiTextField-root":{width:"calc(50% - 8px)","@media (max-width: 600px)":{width:"100%"}}})),T=(0,S.f)(D.f)(()=>({"&.MuiAutocomplete-root":{width:"calc(50% - 8px)","@media (max-width: 600px)":{width:"100%"}}})),O=(0,S.f)("div")(()=>({width:"calc(50% - 8px)","@media (max-width: 600px)":{width:"100%"},"& .MuiAutocomplete-root":{width:"100%"}})),F=(0,S.f)(y.f)(()=>({width:"calc(50% - 8px)","@media (max-width: 600px)":{width:"100%"}}));var E=e.i(668056),W=e.i(247300),J=e.i(97969),Q=e.i(694923),L=e.i(48441),U=e.i(159080),Y=e.i(284661),P=e.i(892904),B=e.i(987123),H=e.i(39059),V=e.i(277063);let z=U.f`
  query GetQuotes(
    $endDate: timestamptz
    $limit: Int
    $offset: Int
    $orderBy: Job_order_by!
    $q: String
    $startDate: timestamptz
    $status: [String!]
    $excludeStatus: [String!]
    $type: String
    $slaId: [Int!]
  ) {
    quotes: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { description: { _ilike: $q } }
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
            ]
          }
        ]
        createdAt: { _gte: $startDate }
        quoteDue: { _lte: $endDate }
        status: { _in: $status, _nin: $excludeStatus }
        quoted: { _eq: true }
        type: { _eq: $type }
        slaId: { _in: $slaId }
      }
      order_by: [$orderBy]
    ) {
      ...JobFields
      ...JobSupplierFields
      ...QuoteFields
      referenceSupplier
      quotations: SupplierQuotes(order_by: { id: asc }) {
        id
        type
        createdAt
        jobId
        methodStatement
        notes
        quoteNumber
        startDate
        status
        totalDuration
        totalDurationUnit
        updatedAt
        siteVisitAt
        supplier: Supplier {
          ...AccountFields
        }
      }
      location: Location {
        id
        name
      }
      service: Service {
        id
        name
      }
      timings: JobTimings {
        id
        status
        notes
        createdAt
        user: User {
          ...UserFields
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { description: { _ilike: $q } }
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
            ]
          }
        ]
        createdAt: { _gte: $startDate }
        quoteDue: { _lte: $endDate }
        status: { _in: $status, _nin: $excludeStatus }
        quoted: { _eq: true }
        type: { _eq: $type }
        slaId: { _in: $slaId }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
  ${Y.f}
  ${P.r}
  ${V.f}
  ${P.q}
  ${H.W}
`;var G=e.i(948574);let K=(e,t)=>(0,W.f)("filter-form-quotes",e,t);var X=e.i(529422),Z=e.i(74633),ee=e.i(239964),et=e.i(93198),ea=e.i(889231),er=e.i(360364),ei=e.i(357969),en=e.i(624841),eo=e.i(122965),es=e.i(218659),el=e.i(10945),ed=e.i(21557),eu=e.i(600744),em=e.i(444158),ec=e.i(300052),ep=e.i(793391),ef=e.i(60450),eg=e.i(772937),eh=e.i(284699),e$=e.i(413696),e_=e.i(879436),eq=((t=eq||{}).Manager="{'Manager': {'nameFirst': 'ORDER'}}",t.Location="{'Location': {'name': 'ORDER'}}",t.Customer="{'Customer': {'name': 'ORDER'}}",t.CustomerManager="{'Customer': {'Manager': {'fullName': 'ORDER'}}}",t.LocationManager="{'Location': {'Manager': {'fullName': 'ORDER'}}}",t.Supplier="{'Supplier': {'name': 'ORDER'}}",t);let eI=["id","type","tags","description","{'Manager': {'nameFirst': 'ORDER'}}","{'Location': {'name': 'ORDER'}}","{'Customer': {'name': 'ORDER'}}","{'Customer': {'Manager': {'fullName': 'ORDER'}}}","{'Location': {'Manager': {'fullName': 'ORDER'}}}","{'Supplier': {'name': 'ORDER'}}","offeredSupplier","quotations","received","range","quoteDue","scheduledAt","createdAt","status"],eb=e=>{let{title:t="",subtitle:i="",initialFilters:_={}}=e,q=(0,g.f)(),{hasRole:I,user:b}=(0,h.f)(),{query:y}=(0,r.useRouter)(),x=!("tileName"in y),S=(0,ed.f)(),j=(0,o.f)(),[C,v]=(0,el.f)({key:K(_.filterType,y),initialValue:{showCanceled:!1},storageType:"sessionStorage"}),D=(0,n.useMemo)(()=>({..._,...((e,t)=>{let{initialFilters:a}=t,r="string"==typeof e.q&&e.q?e.q:null,i=r&&/^\d+$/.test(r)&&Number.isFinite(Number(r))?Number(r):null,n=(0,E.o)(e.status)??[],o={slaId:(0,E.o)(e.slaId),locationId:(0,E._)(e.location),startDate:e.startDate??null,endDate:e.endDate??null,status:n,customerId:(0,E._)(e.customerId),supplierId:(0,E._)(e.supplierId),userId:(0,E._)(e.userId),tags:(0,E.o)(e.tags),customerManagerId:(0,E._)(e.customerManager),locationManagerId:(0,E._)(e.locationManager),showCanceled:!!e.showCanceled,q:r?`%${r}%`:null,isChangedStatusSelect:n.length>0};return"id"in a&&(o.id=i),"meta"in a&&(o.meta=null!==i?{invoiceNumbers:[r]}:null),"jobNumber"in a&&(o.jobNumber=null!==i?String(r):null,o.invoiceNumber=i),o})(C,{initialFilters:_})}),[C,_]),[w,k]=(0,n.useState)(!1),[N,R]=(0,n.useState)(!1),A=q.admin?.jobSetting?.jobNumberPrefix,T=q.admin?.jobSetting?.jobNumberSuffix,O=I("admin"),F=q.can("quote.update"),W=q.can("quote.create"),eq=I("customer"),eb=I("supplier"),ey=I([...G.O]),ex=I([...G.I]),eS=I("tenant"),ej={customer:!I(["customer","supplier","tenant"]),user:I([...G.z]),location:!eS,tags:O,supplier:O,customerManager:O,locationManager:O},eC=(0,n.useMemo)(()=>L.p.flatMap(e=>{let t=eb?e.supplierText:eq?e.customerText:e.text;return null!==t?[{label:t,value:e.value}]:[]}),[eq,eb]),ev=I(["admin","supplier"]),eD=I("admin_user")&&!q.hasUserModule("finances"),{reference:ew,pagination:ek,order:eM}=(0,eo.f)({initialSort:[{item:"createdAt",order:"desc"}]}),{query:eN,variables:eR}=(e=>{let{variables:t,user:a,queryParams:r,hasRole:i}=e,{limit:n,offset:o,orderBy:s,q:l,status:d,showCanceled:u,userId:m,asAt:c,locationId:p,managerId:f,customerManagerId:g,locationManagerId:h,tagsWhere:$,slaId:_}=t,q=u?null:["canceled"],I=r.hasOwnProperty("tileName"),b=i([...G.I]);if(!t.isChangedStatusSelect)switch(r.show){case"unsent":t.status=["quoteOffered","quoteNew"];break;case"unsentQuote":t.status=["quoteOffered","quoteReceived"];break;case"overdueQuote":t.status=["quoteNew","quoteOffered","quoteReceived","quoteSent"];break;default:t.status=r.show}if(I){let e=m||+r.userId,n=+r.accountId;return i(["customer","supplier"])&&(e=a.id,n=a.accountId),{query:(e=>{let{tagsWhere:t}=e;return U.f`
  query GetDashboardList(
    $accountId: Int
    $adminId: Int
    $customerId: Int
    $supplierId: Int
    $locationId: Int
    $managerId: Int
    $number: String
    $asAt: timestamptz
    $jobHoldReasonId: Int
    $limit: Int
    $monthStart: timestamptz
    $offset: Int
    $orderBy: dashboard_home_details_order_by!
    $q: String
    $tileName: String
    $dayStart: timestamptz
    $userId: Int
    $status: [String!]
    $excludeStatus: [String!]
    $yearStart: timestamptz
    $type: String
    $slaId: [Int!]
    $withSupplierReference: Boolean = false
  ) {
    quotes: getDashboard_HomeTile_Details(
      args: {
        accountId: $accountId
        adminId: $adminId
        asAt: $asAt
        jobHoldReasonId: $jobHoldReasonId
        monthStart: $monthStart
        tileName: $tileName
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
      }
      where: {
        _and: [
          {
            _or: [
              { number: { _eq: $number } }
              { reference: { _ilike: $q } }
              { description: { _ilike: $q } }
              { customerName: { _ilike: $q } }
              { serviceName: { _ilike: $q } }
              { assignedTo: { _ilike: $q } }
              { supplierName: { _ilike: $q } }
              { location: { _ilike: $q } }
              { number: { _ilike: $q } }
            ]
          }
        ]
        ${t}
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        status: { _in: $status, _nin: $excludeStatus }
        Job: { type: { _eq: $type } }
        locationId: { _eq: $locationId }
        managerId: { _eq: $managerId }
        slaId: { _in: $slaId }
      }
      order_by: [$orderBy]
      limit: $limit
      offset: $offset
    ) {
      Assets(where: { entity: { _eq: "Job" } }) {
        id
        assetId
        __typename
      }
      ...JobFields
      ...JobAdminFields
      admin: Admin {
        id
        name
        __typename
      }
      customer: Customer {
        ...AccountFields
        __typename
      }
      location: Location {
        id
        name
        __typename
      }
      manager: Manager {
        ...UserFields
        __typename
      }
      service: Service {
        id
        name
        __typename
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
          __typename
        }
        __typename
      }
      parentId
      parentJob: ParentJob {
        id
        type
        number
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: {
            _and: [
              {status: { _eq: "active" }}
              {type: { _eq: "tags" }}
            ]
          }
        }
      ) {
        id
        createdAt
        meta
        tag: Taxonomy {
          id
          name
          meta
          type
        }
      }
      sla: SLA {
        id
        name
        __typename
      }
      supplier: Supplier {
        ...AccountFields
        __typename
      }
      supplierOffers: SupplierOffers {
        status
        rate
        supplier: Supplier {
          ...AccountFields
          __typename
        }
        __typename
      }
      job: Job {
        type
        referenceSupplier @include(if: $withSupplierReference)
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        id
        status
        createdAt
        user: User {
          ...UserFields
          __typename
        }
        __typename
      }
      quotations: SupplierQuotes(order_by: { id: asc }) {
        id
        type
        createdAt
        jobId
        methodStatement
        notes
        quoteNumber
        startDate
        status
        totalDuration
        totalDurationUnit
        updatedAt
        siteVisitAt
        supplier: Supplier {
          ...AccountFields
        }
      }
      id: jobId
      number
      # location
      priority
      scheduledAt
      assignedTo
      jobHoldReason
      locationId
      meta
      managerId
      description
      customerName
      customerId
      reference
      serviceName
      status
      supplierId
      supplierName
      timingStart
      type
      quoteNumber
      quoteDue
      createdAt
    }
    meta: getDashboard_HomeTile_Details_aggregate(
      args: {
        accountId: $accountId
        adminId: $adminId
        asAt: $asAt
        jobHoldReasonId: $jobHoldReasonId
        monthStart: $monthStart
        tileName: $tileName
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { description: { _ilike: $q } }
              { customerName: { _ilike: $q } }
              { serviceName: { _ilike: $q } }
              { assignedTo: { _ilike: $q } }
              { supplierName: { _ilike: $q } }
              { location: { _ilike: $q } }
              { number: { _ilike: $q } }
            ]
          }
        ]
        ${t}
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        number: { _eq: $number }
        status: { _in: $status, _nin: $excludeStatus }
        Job: { type: { _eq: $type } }
        locationId: { _eq: $locationId }
        managerId: { _eq: $managerId }
        slaId: { _in: $slaId }
      }
    ) {
      aggregate {
        totalCount: count
        __typename
      }
      __typename
    }
  }
  ${Y.f}
  ${B.a}
  ${P.r}
  ${P.O}
  ${H.W}
`})({tagsWhere:$}),variables:{...t,excludeStatus:q,accountId:n,locationId:p||r.locationId,managerId:f||r.managerId,customerManagerId:g||+r.customerManagerId,locationManagerId:h||+r.locationManagerId,asAt:c,tileName:r?.tileName,withSupplierReference:b,monthStart:t.monthStart,dayStart:t.todayStart,yearStart:t.yearStart,adminId:a?.adminId,userId:e,slaId:_}}}if("supplier"===a.accountType)return{query:z,variables:{limit:n,offset:o,orderBy:s,q:l,status:d,excludeStatus:q,slaId:_,...t}};{let e=[{status:{_in:t.status}},...t.status?.includes("quoteAccepted")?[{type:{_eq:"reactive"}}]:[]];return{query:(e=>{let{tagsWhere:t}=e;return U.f`
  query GetQuotes(
    $customerId: Int
    $date: timestamptz
    $endDate: timestamptz
    $limit: Int
    $locationId: Int
    $managerId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $offset: Int
    $orderBy: Job_order_by!
    $q: String
    $startDate: timestamptz
    $status: [Job_bool_exp!]
    $excludeStatus: [String!]
    $supplierId: Int
    $type: String
    $userId: Int
    $slaId: [Int!]
    $withSupplierReference: Boolean = false
  ) {
    quotes: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { description: { _ilike: $q } }
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
            ]
          },
          { _or: $status }
        ]
        ${t}
        createdAt: { _gte: $startDate }
        quoteDue: { _lte: $endDate }
        status: { _nin: $excludeStatus }
        type: { _eq: $type }
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        slaId: {_in: $slaId}
        managerId: { _eq: $managerId }
        Customer: { managerId: { _eq: $customerManagerId } }
        Location: { managerId: { _eq: $locationManagerId } }
        supplierId: { _eq: $supplierId }
        quoted: { _eq: true }
        customerUserId: { _eq: $userId }
      }
      order_by: [$orderBy]
    ) {
      ...JobFields
      ...JobAdminFields
      ...QuoteFields
      referenceSupplier @include(if: $withSupplierReference)
      statusLog
      quotations: SupplierQuotes(order_by: { id: asc }) {
        id
        type
        createdAt
        jobId
        methodStatement
        notes
        quoteNumber
        startDate
        status
        totalDuration
        totalDurationUnit
        updatedAt
        siteVisitAt
        supplier: Supplier {
          ...AccountFields
        }
        lineItems: SupplierQuoteLineItems {
          id
          customerTotal
        }
      }
      supplier: Supplier {
        ...AccountFields
      }
      admin: Admin {
        id
        name
      }
      customer: Customer {
        ...AccountFields
        manager: Manager {
          id
          fullName
        }
      }
      location: Location {
        id
        name
        manager: Manager {
          id
          fullName
        }
      }
      sublocation: Sublocation {
        id
        name
      }
      manager: Manager {
        ...UserFields
      }
      service: Service {
        id
        name
      }
      timings: JobTimings {
        id
        status
        notes
        createdAt
        user: User {
          ...UserFields
        }
      }
      parentId
      parentJob: ParentJob {
        id
        type
        number
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: {
            _and: [
              {status: { _eq: "active" }}
              {type: { _eq: "tags" }}
            ]
          }
        }
      ) {
        id
        createdAt
        meta
        tag: Taxonomy {
          id
          name
          meta
          type
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { description: { _ilike: $q } }
              { number: { _ilike: $q } }
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
            ]
          },
          { _or: $status }
        ]
        ${t}
        createdAt: { _gte: $startDate }
        quoteDue: { _lte: $endDate }
        status: { _nin: $excludeStatus }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        managerId: { _eq: $managerId }
        Customer: { managerId: { _eq: $customerManagerId } }
        Location: { managerId: { _eq: $locationManagerId } }
        _or: [
          { supplierId: { _eq: $supplierId }},
          {
            SupplierOffers: {
              accountId: { _eq: $supplierId }, status: { _eq: "offered" }
            }
          }
        ]
        quoted: { _eq: true }
        type: { _eq: $type }
        customerUserId: { _eq: $userId }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
  ${Y.f}
  ${B.a}
  ${P.r}
  ${P.O}
  ${V.f}
  ${H.W}
`})({tagsWhere:$}),variables:{...t,withSupplierReference:b,excludeStatus:q,status:e}}}})({variables:{...D,showCanceled:D.showCanceled??!1,monthStart:(0,p.default)(y.asAt).startOf("month"),todayEnd:(0,p.default)(y.asAt).endOf("day"),todayStart:(0,p.default)(y.asAt).startOf("day"),yearStart:(0,p.default)(y.asAt).startOf("year"),asAt:(0,p.default)(y.asAt).endOf("day"),tagsWhere:(0,ei.f)(D.tags),...ek,orderBy:eM?.[0]},user:b,queryParams:y,hasRole:I});"Accepted"===eR.status?(eR.type="reactive",delete eR.status):delete eR.type;let{data:{quotes:eA,meta:eT}={quotes:[],meta:{aggregate:{totalCount:0}}},loading:eO}=(0,s.t)(eN,{variables:eR}),[eF]=(0,l.f)(eN,{variables:{...eR,limit:eT?.aggregate?.totalCount||150},onCompleted:e=>{let{quotes:t}=e;try{let e=f.default.unparse(eQ(t,!0),{escapeFormulae:/^[=+@\t\r]/}),a="data:application/octet-stream,"+encodeURIComponent(e);(0,$.f)(a,"quotes.csv")}finally{R(!1)}}}),eE=(0,n.useCallback)(e=>[...F?[{context:"secondary",icon:"edit",onClick:()=>r.default.push(`/dashboard/issues/manage?id=${e.number}&quoted=1`),tooltip:"Edit"}]:[],{context:"secondary",icon:"info",onClick:()=>r.default.push(`/dashboard/issues/view?id=${e.number}`),tooltip:"Info"}],[F]),eW=(0,n.useMemo)(()=>[{sortable:!0,minWidth:100,field:"id",headerName:"ID",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(X.f,{id:t.id,number:t.number,numberPrefix:A,numberSuffix:T,openCanvas:!0,type:t.type,isQuote:t.quoted})}},{sortable:!0,flex:1,minWidth:80,field:"type",headerName:"Type"},{minWidth:300,field:"tags",headerName:"Tags",sortable:!1,flex:1,renderCell:e=>{let{row:t}=e;return(0,a.jsx)(er.f,{row:t,refetchQueries:["GetQuotes","GetDashboardList"],entity:"Job",removeTagTarget:"quote"})}},{sortable:!0,flex:1,minWidth:180,field:"description",headerName:"Scope of works"},{sortable:!0,flex:1,minWidth:180,field:"{'Manager': {'nameFirst': 'ORDER'}}",headerName:"Assigned to",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(ea.f,{color:"secondary",href:`/dashboard/users/view?id=${t.managerId}`,children:t.manager})}},{sortable:!0,flex:1,minWidth:180,field:"{'Location': {'name': 'ORDER'}}",headerName:"Location",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(ea.f,{noWrap:eb,color:"secondary",href:`/dashboard/properties/view?id=${t.propertyId}`,children:t.location})}},{sortable:!0,flex:1,minWidth:180,field:"{'Customer': {'name': 'ORDER'}}",headerName:"Customer",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(ea.f,{color:"secondary",href:`/dashboard/customers/view?id=${t.customerId}`,children:t.customer})}},{minWidth:180,flex:1,field:"{'Customer': {'Manager': {'fullName': 'ORDER'}}}",headerName:"Account Manager",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(ea.f,{noWrap:!t.customerManagerId,color:"secondary",href:`/dashboard/users/view?id=${t.customerManagerId}`,children:t.customerManager})}},{minWidth:180,flex:1,field:"{'Location': {'Manager': {'fullName': 'ORDER'}}}",headerName:"Location Manager",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(ea.f,{noWrap:!t.locationManagerId,color:"secondary",href:`/dashboard/users/view?id=${t.locationManagerId}`,children:t.locationManager})}},{sortable:!0,flex:1,minWidth:180,field:"{'Supplier': {'name': 'ORDER'}}",headerName:"Accepted Supplier",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(ea.f,{color:"secondary",href:`/dashboard/suppliers/view?id=${t.supplierId}`,children:t.acceptSupplier})}},{sortable:!1,flex:1,minWidth:180,field:"offeredSupplier",headerName:"Offered Supplier",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(a.Fragment,{children:t?.offeredSupplier?.length>0?(0,a.jsx)(u.f,{children:(t?.offeredSupplier||[]).map(e=>(0,a.jsx)(ea.f,{color:"secondary",href:`/dashboard/suppliers/view?id=${e?.supplier?.id}`,children:e?.supplier?.name},e.id))}):"-"})}},{sortable:!1,flex:1,minWidth:100,field:"quotations",headerName:"Quotations"},{sortable:!1,flex:1,minWidth:80,field:"received",headerName:"Quotations (Received)"},{sortable:!1,flex:1,minWidth:140,field:"range",headerName:"Quotations Range",renderCell:e=>{let{row:t}=e,r=t.range;return r?(0,a.jsxs)(u.f,{children:[(0,a.jsxs)(m.f,{sx:{whiteSpace:"nowrap"},children:["high: ",(0,e_.f)(r.high)]}),(0,a.jsxs)(m.f,{sx:{whiteSpace:"nowrap"},children:["low: ",(0,e_.f)(r.low)]})]}):"N/A"}},{sortable:!0,headerName:"Quote Due",flex:1,minWidth:120,field:"quoteDue",renderCell:e=>{let{row:t}=e,r=(0,p.default)().format("YYYY-MM-DD"),i="Quote"===t.type,n=t.status.includes("quoteSent");if(i&&t.due<r&&!n)return(0,a.jsxs)(u.f,{alignItems:"center",children:[(0,a.jsx)(c.default,{color:"error",sx:{height:"20px"}}),(0,a.jsx)(m.f,{children:t.due})]})}},{flex:1,minWidth:120,field:"scheduledAt",headerName:"Scheduled",sortable:!0,renderCell:e=>{let{row:t}=e;return t.scheduleDate}},{flex:1,minWidth:120,field:"createdAt",headerName:"Created",sortable:!0,renderCell:e=>{let{row:t}=e;return t.date}},{flex:1,minWidth:140,field:"status",headerName:"Status",sortable:!0,renderCell:e=>{let{row:t}=e,r=null;return r=t?.offeredSupplier?.length>0&&t?.offeredSupplier.every(e=>"quotationRejected"===e.status)?"rejected":t.status,(0,a.jsx)(en.f,{value:r})}},{sortable:!0,flex:1,minWidth:160,field:"reference",headerName:"Customer reference"},{sortable:x,flex:1,minWidth:160,field:"referenceSupplier",headerName:"Supplier reference"},{sortable:!1,flex:1,minWidth:100,field:"quoteDocument",headerName:"Quote",renderCell:e=>{let{row:t}=e;return t.quoteDocumentId?(0,a.jsx)(ea.f,{color:"secondary",component:"button",type:"button",sx:{cursor:"pointer"},onClick:e=>{e.stopPropagation(),(0,e$.f)(j,S,t.quoteDocumentId)},children:"Quote"}):"-"}},{sortable:!1,flex:1,field:"actions",headerName:"",maxWidth:50,renderCell:e=>{let{row:t}=e;return(0,a.jsx)(ee.f,{actionsData:eE,row:t})}}],[eE,j,eb,A,T,S,x]),eJ=e=>{e.stopPropagation(),r.default.push("/dashboard/issues/manage?quoted=1")},eQ=(0,n.useCallback)((e,t)=>(e=>{let{data:t,isCSV:a,hasRole:r,hideQuotationsFinanceColumns:i=!1}=e,n=r("admin"),o=r("customer"),s=r("supplier");return t.map(e=>{let t,{text:r,supplierText:l,customerText:d}=[...L.p].find(t=>t.value===e.status)||{text:"Accepted",supplierText:"Accepted",customerText:"Accepted"},u=r;o?u=d:s&&(u=l);let{text:m}=[...Q.f].find(t=>t.value===e.type)||{text:"Quote"},c=e.manager?`${e.manager.nameFirst} ${e.manager.nameLast}`:"Unassigned",f=e.scheduledAt?(0,p.default)(e.scheduledAt).format("YYYY-MM-DD"):null,g=e.timingStart?(0,p.default)(e.timingStart).format("YYYY-MM-DD"):null,h=a&&(n||o)?e.sublocation?.name||"-":void 0,$=(0,J.w)(e),_=a?(0,J.T)(e?.tags,$):e?.tags,q=n?(e.quotations||[]).filter(e=>e?.type!=="uplift"&&["supplierQuoteSent","quotationAccepted"].includes(e.status)):[],I=q.find(e=>"quotationAccepted"===e.status)??q[0];return{id:e.id,description:e?.description?e?.description:"-",number:e.number,type:m,status:e.status,propertyId:e.location?.id,managerId:e.manager?.id,...(n||o)&&{customerId:e.customer?.id},...(n||s)&&{supplierId:e.supplier?e.supplier.id:""},siteVisitStart:e.siteVisitStart,siteVisitEnd:e.siteVisitEnd,siteVisitWeekends:e.siteVisitWeekends,service:e.service?.name||"-",manager:c,location:e.location?.name||"-",property:e.location?.name||"-",sublocation:h,tags:_,parentJobType:$?.parentJobType??null,parentJobNumber:$?.parentJobNumber??null,onSiteTimingEnd:e.onSiteTimingEnd,jobReportTimingEnd:e.jobReportTimingEnd,quoteReturnedTimingEnd:e.quoteReturnedTimingEnd,...(n||o)&&{customer:e.customer?.name||"-"},...(n||o)&&{customerManager:e.customer?.manager?.fullName||"-"},...!a&&{customerManagerId:e.customer?.manager?.id},locationManager:e.location?.manager?.fullName||"-",...!a&&{locationManagerId:e.location?.manager?.id},...(n||s)&&{acceptSupplier:e.supplier?e.supplier.name:"-"},...(n||s)&&!a&&{offeredSupplier:e?.quotations?.length>0?(t=e.quotations,a?t.map(e=>e?.supplier?.name).join(" / "):t):[]},...!i&&{quotations:`${e.quotations?.length||0}/${e.quoteNumber}`,received:`${(e.quotations||[])?.reduce((e,t)=>"supplierQuoteComplete"===t.status?e+1:e,0)}/${e.quotations?.length||0}`,range:(e=>{let t=null;if(e.length>1){let a=e.map(e=>e.lineItems?.reduce((e,t)=>e+(t.customerTotal||0),0)??0);t={high:Math.max(...a||[]),low:Math.min(...a||[])}}return t})(e.quotations)},...!a&&{reference:e.reference||"-",...(n||s)&&{referenceSupplier:e.referenceSupplier||e.job?.referenceSupplier||"-"},...n&&{quoteDocumentId:I?.id},...n&&{quotationIds:(e.quotations||[]).filter(e=>e?.type!=="uplift").map(e=>Number(e.id)).filter(e=>Number.isFinite(e))}},due:e.quoteDue?(0,p.default)(e.quoteDue).format("YYYY-MM-DD"):"-",scheduleDate:f||g||"-",date:(0,p.default)(e.createdAt).format("YYYY-MM-DD"),statusText:u,quoted:e.quoted||!1,quotationsId:e.quotations[0]&&e.quotations[0].id,actions:""}})})({data:e,isCSV:t,hasRole:I,hideQuotationsFinanceColumns:eD}),[I,eD]),{defaultFields:eL,hiddenFields:eU}=(0,n.useMemo)(()=>{let e={"{'Manager': {'nameFirst': 'ORDER'}}":O,"{'Customer': {'name': 'ORDER'}}":O,"{'Customer': {'Manager': {'fullName': 'ORDER'}}}":O,"{'Supplier': {'name': 'ORDER'}}":ev,offeredSupplier:ev,quotations:O&&!eD,received:!eb&&!eD,range:O&&!eD,reference:ey,referenceSupplier:ex,quoteDocument:O,actions:F,tags:O};return{defaultFields:eI.filter(t=>!1!==e[t]),hiddenFields:new Set(Object.keys(e).filter(t=>!e[t]))}},[O,F,ev,eb,eD,ey,ex]),eY=(0,n.useMemo)(()=>eQ(eA,!1),[eQ,eA]),{byRow:eP,ids:eB}=(0,n.useMemo)(()=>{let e;return e={},eY.forEach(t=>{e[Number(t.id)]=t.quotationIds??[]}),{byRow:e,ids:Array.from(new Set(Object.values(e).flat()))}},[eY]),{gridColumns:eH,modalProps:eV,buttonProps:ez}=(0,eh.f)({stateKey:"quotes",columns:eW,defaultFields:eL,hiddenFields:eU,customFields:{dataOwner:"quote",rowIds:eB,ownerIdsByRow:eP,skip:!O}}),eG=(0,n.useMemo)(()=>!eA.length&&(D?.q||D?.customerId||D?.supplierId||D?.userId||D?.customerManager||D?.locationManager||D?.startDate||D?.endDate||D?.tags?.length||D?.status?.length)?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No quotes",subtitleFirstLine:"You currently have no quotes set up in the system",...W?{buttonText:"Create a quote",onAction:eJ}:{}},[D,eA,W]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(eg.f,{...eV}),(0,a.jsxs)(u.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,a.jsxs)(em.f,{children:[(0,a.jsxs)(u.f,{direction:"row",spacing:2,children:[(0,a.jsx)(ec.f,{onClick:()=>k(!0)}),(0,a.jsx)(eu.f,{...ez})]}),(0,a.jsxs)(u.f,{direction:"row",spacing:2,children:[W&&(0,a.jsx)(ep.f,{label:"Create Quote",onClick:eJ}),!(0,et.r)()&&!eS&&(0,a.jsx)(ef.f,{label:"Export Quote",loading:N,onClick:e=>{e.stopPropagation(),R(!0),eF()}})]})]}),(0,a.jsxs)(d.f,{sx:{py:2,flex:1,minHeight:0},children:[(0,a.jsxs)(u.f,{children:[(0,a.jsx)(m.f,{ml:2,variant:"h5",sx:{fontWeight:600},children:t}),i&&(0,a.jsx)(m.f,{typography:"subtitle1",ml:2,children:i})]}),(0,a.jsx)(M,{open:w,setOpen:k,filterForm:C,setFilterForm:v,filtersVisibilityModel:ej,statusOptions:eC}),(eA?.length||eO)&&(0,a.jsx)(Z.s,{...ew,stateKey:"quotes",autoHeight:!1,loading:eO,columns:eH,rows:eY,totalCount:eT.aggregate.totalCount,containerHeight:`calc(100% - ${i?52:32}px)`}),!eA?.length&&!eO&&(0,a.jsx)(es.f,{imageSrc:"/static/icons/no_locations_found.svg",...eG})]})]})]})},ey={id:null,q:null,startDate:null,endDate:null,status:[],customerId:null,supplierId:null,userId:null,isChangedStatusSelect:!1,customerManager:null,filterType:"quotes_table"},ex=()=>{let{query:e}=(0,r.useRouter)();return(0,a.jsx)(eb,{title:e?.title?.toString()??"Quotes",subtitle:e?.subtitle?.toString()??"",initialFilters:ey},K(ey.filterType,e))};ex.getLayout=function(e){return(0,a.jsx)(i.f,{children:e})},e.s(["default",0,ex],717445)}]);