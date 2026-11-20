(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,218659,e=>{var t=e.i(391398),a=e.i(280445),i=e.i(115871),n=e.i(813843),r=e.i(755548),o=e.i(587369);let s=(0,a.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:a,sx:d={},imageSx:l={},title:u,titleSx:c={},subtitleFirstLine:m,subtitleFirstLineSx:p={},subtitleSecondLine:$,subtitleSecondLineSx:_={},buttonText:g,onAction:f}=e,I=(0,o.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...d,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(s,{src:a,sx:{...l,width:I?"250px":"300px"}}),(0,t.jsx)(i.f,{typography:"h5",sx:{...c},children:u}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(i.f,{sx:{...p},children:m}),(0,t.jsx)(i.f,{sx:{..._},children:$})]}),g&&f&&(0,t.jsx)(r.f,{variant:"contained",color:"secondary",onClick:f,children:g})]})}])},360364,e=>{var t=e.i(391398),a=e.i(738251),i=e.i(813843),n=e.i(59626),r=e.i(552987),o=e.i(526374),s=e.i(879572);e.s(["f",0,e=>{let{row:d,refetchQueries:l,entity:u,removeTagTarget:c}=e,{removeLink:m}=(0,n.f)({refetchQueries:["GetTaskTags",...l]}),p=async e=>{if(!await m(e))throw Error("Tag could not be removed")},$={onSiteTimingEnd:d.onSiteTimingEnd,jobReportTimingEnd:d.jobReportTimingEnd,quoteReturnedTimingEnd:d.quoteReturnedTimingEnd},_=null!=d.parentJobNumber&&""!==d.parentJobNumber?{parentJobType:d.parentJobType??null,parentJobNumber:d.parentJobNumber}:null,g=null!=c?c:"Task"===u?"task":"Workflow"===u?"workflow":"Asset"===u?"asset":(0,s.p)(d.type);return(0,t.jsxs)(i.f,{direction:"row",alignItems:"center",sx:{minWidth:0,width:"100%",columnGap:2},children:[(0,t.jsx)(a.f,{sx:{flex:"1 1 0%",minWidth:0,overflow:"hidden",pr:.5,direction:"ltr"},children:(0,t.jsx)(r.f,{expandToContainer:!0,tags:d.tags||[],handleDeleteTagEntity:p,slaJobTimings:$,ppmLinkRowFallback:_,removeTagTarget:g,listSx:{whiteSpace:"nowrap"}})}),(0,t.jsx)(a.f,{sx:{flexShrink:0,display:"flex",alignItems:"center",direction:"ltr"},children:(0,t.jsx)(o.f,{hideTagsList:!0,entityId:d.id,refetchQueries:l,entity:u})})]})}])},655477,e=>{var t=e.i(391398),a=e.i(191788),i=e.i(422411),n=e.i(877341),r=e.i(515523),o=e.i(76381),s=e.i(652148),d=e.i(800884),l=e.i(886292),u=e.i(175872);let c=[];e.s(["f",0,e=>{let{control:m}=e,[p,$]=(0,a.useState)(""),[_,{loading:g,data:{items:f}={items:[]}}]=(0,n.f)(l.T,{variables:{q:""!==p?`%${p}%`:null}}),I=(0,u.f)(e=>$(e),500);return(0,t.jsx)(i.e,{control:m,name:"tags",render:e=>{let{value:a,onChange:i}=e;return(0,t.jsx)(r.f,{multiple:!0,limitTags:6,color:"secondary",onOpen:()=>_(),options:f,value:a||c,onChange:(e,t)=>{i(t)},onInputChange:(e,t)=>{I(t)},getOptionLabel:e=>e.label,renderTags:(e,a)=>e.map((e,i)=>(0,t.jsx)(d.f,{size:"small",label:e.label,...a({index:i})})),isOptionEqualToValue:(e,t)=>e.value===t.value,renderInput:e=>(0,t.jsx)(s.f,{...e,variant:"standard",color:"secondary",label:"Select tags",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[g?(0,t.jsx)(o.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})}})}])},284661,e=>{var t=e.i(159080);let a=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,a])},239964,e=>{var t=e.i(391398),a=e.i(191788),i=e.i(691567),n=e.i(773831),r=e.i(33670),o=e.i(901004),s=e.i(509790),d=e.i(692113),l=e.i(137995),u=e.i(817581),c=e.i(420),m=e.i(870307),p=e.i(407329),$=e.i(390536),_=e.i(978319),g=e.i(376733),f=e.i(13558),I=e.i(562673),b=e.i(339909),y=e.i(89029),q=e.i(129503),h=e.i(213419),S=e.i(12028),x=e.i(813843),T=e.i(115871);let k={add:(0,t.jsx)(u.default,{}),archive:(0,t.jsx)(d.default,{}),avatar:(0,t.jsx)(S.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(_.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)($.default,{}),info:(0,t.jsx)(f.default,{}),edit:(0,t.jsx)(g.default,{}),location:(0,t.jsx)(y.default,{}),unarchive:(0,t.jsx)(l.default,{}),uploadFile:(0,t.jsx)(I.default,{}),receipt:(0,t.jsx)(b.default,{}),visibility:(0,t.jsx)(h.default,{})},v={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(q.default,{}),description:(0,t.jsx)(p.default,{})},A=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],D=e=>{let{actionsData:i=A,icon:s="default",row:d,disabled:l=!1}=e,[u,c]=(0,a.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:l,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:v[s]}),(0,t.jsx)(r.f,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:!!u,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:i(d).map((e,a)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(x.f,{direction:"row",alignItems:"center",spacing:2,children:[k?.[e.icon]||null,(0,t.jsx)(T.f,{children:e.tooltip})]})},a))})]})};D.propTypes={actionsData:i.default.func,icon:i.default.oneOf(["default","description"]),row:i.default.any.isRequired,disabled:i.default.bool},e.s(["f",0,D])},951510,832790,269610,e=>{var t=e.i(159080);let a=t.f`
  query GetJobs(
    $endDate: timestamptz
    $number: String
    $limit: Int
    $offset: Int
    $orderBy: [Job_order_by!]
    $q: String
    $startDate: timestamptz
    $status: [String!]
    $excludeStatus: [String!]
    $type: String
    $userId: Int
    $slaId: [Int!]
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        type: { _eq: $type }
        slaId: { _in: $slaId }
        _or: [{ supplierUserId: { _eq: $userId } }, { JobOperatives: { userId: { _eq: $userId } } }]
      }
      order_by: $orderBy
    ) {
      id
      type
      number
      status
      scheduledAt
      timingStart
      createdAt
      invoiceNumber
      description
      referenceSupplier

      customer: Customer {
        id
        type
        name
        status
        vatId
      }
      location: Location {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
      supplier: Supplier {
        id
        name
      }
      supplierUser: SupplierUser {
        id
        fullName
      }
      supplierOffers: SupplierOffers {
        supplier: Supplier {
          id
          name
        }
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        user: User {
          fullName
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        type: { _eq: $type }
        slaId: { _in: $slaId }
        _or: [{ supplierUserId: { _eq: $userId } }, { JobOperatives: { userId: { _eq: $userId } } }]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  query GetJobs(
    $endDate: timestamptz
    $number: String
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: [Job_order_by!]
    $startDate: timestamptz
    $status: [String!]
    $excludeStatus: [String!]
    $type: [String!]
    $userId: Int
    $locationId: Int
    $locationManagerId: Int
    $slaId: [Int!]
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        type: { _in: $type }
        customerUserId: { _eq: $userId }
        locationId: { _eq: $locationId }
        Location: { managerId: { _eq: $locationManagerId } }
        slaId: { _in: $slaId }
      }
      order_by: $orderBy
    ) {
      id
      type
      number
      status
      scheduledAt
      timingStart
      createdAt
      invoiceNumber
      description
      reference

      customer: Customer {
        id
        type
        name
        status
        vatId
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
        id
        nameFirst
        nameLast
      }
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
      supplier: Supplier {
        id
        name
      }
      supplierOffers: SupplierOffers {
        supplier: Supplier {
          id
          name
        }
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        user: User {
          fullName
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        slaId: { _in: $slaId }
        type: { _in: $type }
        customerUserId: { _eq: $userId }
        locationId: { _eq: $locationId }
        Location: { managerId: { _eq: $locationManagerId } }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;e.s(["k",0,e=>{let{tagsWhere:a,parentChildWhere:i="",flagsWhere:n=""}=e;return t.f`
  query GetJobs(
    $withTableExtras: Boolean = false
    $withFinances: Boolean = false
    $assetId: Int
    $customerId: Int
    $endDate: timestamptz
    $number: String
    $limit: Int
    $locationId: Int
    $sublocationId: Int
    $managerId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $offset: Int
    $orderBy: [Job_order_by!]
    $paid: Boolean
    $type: [String!]
    $q: String
    $startDate: timestamptz
    $status: [String!]
    $excludeStatus: [String!]
    $tags: [Int!]
    $supplierId: Int
    $slaId: [Int!]
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${i}
          ${n}
        ]
        ${a}
        assetId: { _eq: $assetId }
        status: { _in: $status, _nin: $excludeStatus }
        type: { _in: $type }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        sublocationId: { _eq: $sublocationId }
        managerId: { _eq: $managerId }
        Customer: { managerId: { _eq: $customerManagerId } }
        Location: { managerId: { _eq: $locationManagerId } }
        paid: { _eq: $paid }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { Supplier: { id: { _eq: $supplierId } } } }
        ]
      }
      order_by: $orderBy
    ) {
      id
      type
      number
      status
      scheduledAt
      timingStart
      createdAt
      onSiteTimingEnd
      jobReportTimingEnd
      quoteReturnedTimingEnd
      parentId
      description
      issueReportedDescription
      reference
      referenceSupplier

      customerTotal: customerFinances(path: "amountInfo.total") @include(if: $withFinances)
      supplierTotal: supplierFinances(path: "amountInfo.total") @include(if: $withFinances)
      customerVatTotal: customerFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)
      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)

      assets: Assets(where: { entity: { _eq: "Job" } }) @include(if: $withTableExtras) {
        id
        asset: Asset {
          id
          name
        }
      }
      report: JobReport @include(if: $withTableExtras) {
        id
        completion
      }
      parentJob: ParentJob {
        id
        type
        number
      }
      childJobs: Jobs(limit: 2) @include(if: $withTableExtras) {
        id
      }
      validatedAt: statusData(path: "validated")
      supplierInvoiceMedia: Media(
        where: { entity: { _eq: "Job" }, Medium: { category: { _eq: "invoice" } } }
        limit: 1
      ) @include(if: $withTableExtras) {
        id
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: {
            _and: [
              {status: { _eq: "active" }},
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
      invoiceNumber
      customer: Customer {
        id
        type
        name
        status
        vatId

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
        id
        nameFirst
        nameLast
      }
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
      supplier: Supplier {
        id
        name
      }
      supplierOffers: SupplierOffers {
        supplier: Supplier {
          id
          name
        }
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        user: User {
          fullName
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${i}
          ${n}
        ]
        ${a}
        assetId: { _eq: $assetId }
        status: { _in: $status, _nin: $excludeStatus }
        type: { _in: $type }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        sublocationId: { _eq: $sublocationId }
        managerId: { _eq: $managerId }
        Customer: { managerId: { _eq: $customerManagerId } }
        Location: { managerId: { _eq: $locationManagerId } }
        paid: { _eq: $paid }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { Supplier: { id: { _eq: $supplierId } } } }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`},"C",0,i,"F",0,a],832790);var n=e.i(284661),r=e.i(987123),o=e.i(39059);e.s(["f",0,e=>{let{tagsWhere:a,parentChildWhere:i="",flagsWhere:s=""}=e;return t.f`
  query GetDashboardList(
    $withTableExtras: Boolean = false
    $withFinances: Boolean = false
    $withSupplierReference: Boolean = false
    $accountId: Int
    $customerId: Int
    $supplierId: Int
    $locationId: Int
    $managerId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $adminId: Int
    $startDate: timestamptz
    $endDate: timestamptz
    $asAt: timestamptz
    $jobHoldReasonId: Int
    $limit: Int
    $monthStart: timestamptz
    $offset: Int
    $orderBy: [dashboard_home_details_order_by!]
    $q: String
    $tileName: String
    $dayStart: timestamptz
    $userId: Int
    $yearStart: timestamptz
    $number: String
    $status: [String!]
    $excludeStatus: [String!]
    $slaId: [Int!]
  ) {
    jobs: getDashboard_HomeTile_Details(
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
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
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
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${i}
          ${s}
        ]
        ${a}
        status: { _in: $status, _nin: $excludeStatus }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        managerId: { _eq: $managerId }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { Supplier: { id: { _eq: $supplierId } } } }
        ]
      }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      Assets(where: { entity: { _eq: "Job" } }) {
        id
        assetId
        __typename
      }
      admin: Admin {
        id
        name
        __typename
      }
      customer: Customer {
        ...AccountFields
        manager: Manager {
          id
          fullName
        }
        __typename
      }
      location: Location {
        id
        name
        manager: Manager {
          ...UserFields
          __typename
        }
        __typename
      }
      job: Job {
        id
        status
        issueReportedDescription
        reference
        referenceSupplier @include(if: $withSupplierReference)
        validatedAt: statusData(path: "validated")
        supplierInvoiceMedia: Media(
          where: { entity: { _eq: "Job" }, Medium: { category: { _eq: "invoice" } } }
          limit: 1
        ) @include(if: $withTableExtras) {
          id
        }
        customerTotal: customerFinances(path: "amountInfo.total") @include(if: $withFinances)
        supplierTotal: supplierFinances(path: "amountInfo.total") @include(if: $withFinances)
        customerVatTotal: customerFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)
        supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)
        sublocation: Sublocation {
          id
          name
        }
        assets: Assets(where: { entity: { _eq: "Job" } }) @include(if: $withTableExtras) {
          id
          asset: Asset {
            id
            name
          }
        }
        report: JobReport @include(if: $withTableExtras) {
          id
          completion
        }
        childJobs: Jobs(limit: 2) @include(if: $withTableExtras) {
          id
        }
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
            status: { _eq: "active" }
            type: { _eq: "tags" }
          }
        }
      ) {
        id
        createdAt
        meta
        tag: Taxonomy {
          id
          name
          meta: clientMeta
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
        supplier: Supplier {
          ...AccountFields
          __typename
        }
        __typename
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
      id: jobId
      number
      # location
      priority
      scheduledAt
      assignedTo
      jobHoldReason
      locationId
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
        locationId: $locationId
        managerId: $managerId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
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
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${i}
          ${s}
        ]
        ${a}
        status: { _in: $status, _nin: $excludeStatus }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        managerId: { _eq: $managerId }
        supplierId: { _eq: $supplierId }
      }
    ) {
      aggregate {
        totalCount: count
        __typename
      }
      __typename
    }
  }
  ${n.f}
  ${r.a}
  ${o.V}
`}],269610);var s=e.i(892904);t.f`
  query GetDashboardList(
    $accountId: Int
    $adminId: Int
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
    $yearStart: timestamptz
  ) {
    jobs: getDashboard_HomeTile_Details(
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
      ...JobCustomerFinanceFields
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
      }
    ) {
      aggregate {
        totalCount: count
        __typename
      }
      __typename
    }
  }
  ${n.f}
  ${r.a}
  ${s.r}
  ${s.H}
  ${s.O}
  ${o.V}
`,e.i(925527),e.i(684034);var d=e.i(48441);e.s(["D",0,e=>{let t=["completed","inDispute","disputeResolved","reportSent","invoiceSent","customerPaid","supplierPaid","closed"],a=["offered","completed","reportSent","invoiceSent","customerPaid","supplierPaid","closed","raised","paused","continued","accepted","onMyWay","inProgress","pending","onHold"];switch(e){case"offered":return d.e.filter(e=>"offered"===e.value);case"current":return d.e.filter(e=>{let{value:t}=e;return a.includes(t)});case"openJobs":return d.e.filter(e=>{let{value:t}=e;return"raised"===t||"pending"===t});case"raised":return d.e.filter(e=>{let{value:t}=e;return"raised"===t});case"pending":return d.e.filter(e=>{let{value:t}=e;return"pending"===t});case"past":return d.e.filter(e=>{let{value:a}=e;return t.includes(a)});default:return d.e}},"W",0,e=>{let t=["locationId","sublocationId","customerId","assetId"],a="";return e&&e.constructor===Object&&Object.keys(e).length>0&&(a="?",Object.entries(e).map(e=>{let[i,n]=e;return n&&t.includes(i)&&(a+=`${[i]}=${n}&`),0}),a=a.substring(0,a.length-1)),a}],951510)},892904,e=>{var t=e.i(159080);let a=t.f`
  fragment JobFields on Job {
    access
    issueReportedDescription
    adminId
    costCategory
    createdAt
    description
    id
    reference
    scheduledAt
    status
    timing
    timingEnd
    timingNormalHours
    timingStart
    title
    type
    siteVisitStart
    siteVisitEnd
    siteVisitWeekends
    number
    quoted
    timingStatus
    statusData
    correctDuration
    correctStart
    correctEnd
    onSiteTimingEnd
    jobReportTimingEnd
    quoteReturnedTimingEnd
  }
`,i=t.f`
  fragment JobQuoteFields on Job {
    quoted
    quoteNumber
    quoteDue
    quoteDueSupplier
  }
`,n=t.f`
  fragment JobAdminFinanceFields on Job {
    meta
    pricing
    supplierPricing
    supplierLabourAmount
    supplierMaterialsAmount
    amount
    quoteCharge
  }
`,r=t.f`
  fragment JobCustomerFinanceFields on Job {
    meta: clientMeta
    pricing
    amount
    quoteCharge
  }
`,o=t.f`
  fragment JobSupplierFinanceFields on Job {
    meta: clientMeta
    supplierPricing
    supplierLabourAmount
    supplierMaterialsAmount
  }
`,s=t.f`
  fragment JobAdminFields on Job {
    supplierId
    supplierUserId
  }
`,d=t.f`
  fragment JobSupplierFields on Job {
    supplierId
    supplierUserId
  }
`;e.s(["O",0,s,"U",0,n,"H",0,r,"r",0,a,"Z",0,i,"q",0,d,"C",0,o])},39059,e=>{var t=e.i(159080);let a=t.f`
  query GetUsers(
    $accountId: Int
    $accountType: String
    $date: timestamptz
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: User_order_by!
    $status: String
  ) {
    users: User(
      limit: $limit
      offset: $offset
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [
          { email: { _ilike: $q } }
          { nameFirst: { _ilike: $q } }
          { nameLast: { _ilike: $q } }
        ]
        status: { _eq: $status }
      }
      order_by: [$orderBy]
    ) {
      id
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
      media: Media {
        id
        medium: Medium {
          id
          category
          filename
          meta
          type
        }
      }
      accounts: Account_Users {
        id
        role
        position
        isContact
        status
        account: Account {
          id
          name
          type
        }
        userLocations: User_Account_Locations {
          accountLocationId
        }
      }
    }
    meta: User_aggregate(
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        status: { _eq: $status }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  query GetUser($id: Int!) {
    user: User_by_pk(id: $id) {
      id
      fullName
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
      media: Media {
        id
        medium: Medium {
          id
          category
          filename
          meta
          type
        }
      }
      accounts: Account_Users {
        id
        role
        position
        isContact
        status
        account: Account {
          id
          name
          type
        }
      }
    }
  }
`,n=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,r=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,o=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,s=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,d=t.f`
  mutation UpdateAccountUserByUserIdAccoutId(
    $userId: Int!
    $accountId: Int!
    $changes: Account_User_set_input!
  ) {
    update_Account_User(
      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }
      _set: $changes
    ) {
      returning {
        id
      }
    }
  }
`,l=t.f`
  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {
    location: Location(
      offset: $offset
      limit: $limit
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      id
      name
      accountLocations: Account_Locations(where: { accountId: { _eq: $accountId } }) {
        id
      }
      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {
        id
        status
        address: Address {
          id
          name
          addressLine1
          postCode
        }
      }
    }
    meta: Location_aggregate(
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;e.s(["u",0,l,"q",0,r,"_",0,s,"x",0,i,"k",0,a,"f",0,o,"l",0,d,"V",0,n])},60903,e=>{e.s(["f",0,(e,t)=>{let a=document.createElement("a");"string"==typeof a.download?(document.body.appendChild(a),a.download=t,a.href=e,a.click(),document.body.removeChild(a)):location.replace(e)}])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=a.currencySymbol??"£",i="number"==typeof e?e.toFixed(2):String(e);return`${t}${i}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let a=t.options.find(t=>t.value===e);return a?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let a=t.options.find(t=>t.value===e);return a?.label??e}).join(", ");default:return String(e)}}])},190871,179319,e=>{var t=e.i(203828),a=e.i(220303),i=e.i(93198),n=e.i(262887);let r=e=>{let{type:t,number:a,id:i}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:a,...i&&"job-report"!==t&&{id:String(i)}})}`};e.s(["$",0,r,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let a=Number(e.id);return{number:t,...Number.isSafeInteger(a)&&a>0&&{id:a}}}],179319);let o="This document could not be found",s="documentOpenedFromPortal",d=async e=>{let d=await e;if(!d)throw Error(o);if((0,i.Z)()&&"job-report"!==d.type){let e=await a.R.fetchQuery("/documents/:type/:number",{pathParams:{type:d.type,number:d.number},params:{id:d.id}});if(!("url"in e))throw Error(o);await (0,n.f)(e.url);return}let l=r(d);(e=>{try{return sessionStorage.setItem(s,e),!0}catch{return!1}})(l),await t.default.push(l)};e.s(["W",0,e=>{try{return sessionStorage.getItem(s)===r(e)}catch{return!1}},"k",0,d],190871)},28980,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)((0,r.jsx)("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"}),"DownloadRounded")},870307,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])},799306,e=>{e.s(["f",0,function(e){if(null===e||!0===e||!1===e)return 0/0;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}])},925527,389849,e=>{var t=e.i(623886),a=e.i(699213);e.s(["f",0,function(e){(0,a.f)(1,arguments);var i=(0,t.f)(e);return i.setHours(23,59,59,999),i}],925527);var i=e.i(926638),n=e.i(799306),r=/[T ]/,o=/[Z ]/i,s=/([Z+-].*)$/,d=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var p=[31,null,31,30,31,30,31,31,30,31,30,31];function $(e){return e%400==0||e%4==0&&e%100!=0}e.s(["f",0,function(e,t){(0,a.f)(1,arguments);var _,g,f,I=(0,n.f)(null!=(_=null==t?void 0:t.additionalDigits)?_:2);if(2!==I&&1!==I&&0!==I)throw RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(0/0);var b=function(e){var t,a={},i=e.split(r);if(i.length>2)return a;if(/:/.test(i[0])?t=i[0]:(a.date=i[0],t=i[1],o.test(a.date)&&(a.date=e.split(o)[0],t=e.substr(a.date.length,e.length))),t){var n=s.exec(t);n?(a.time=t.replace(n[1],""),a.timezone=n[1]):a.time=t}return a}(e);if(b.date){var y=function(e,t){var a=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),i=e.match(a);if(!i)return{year:0/0,restDateString:""};var n=i[1]?parseInt(i[1]):null,r=i[2]?parseInt(i[2]):null;return{year:null===r?n:100*r,restDateString:e.slice((i[1]||i[2]).length)}}(b.date,I);g=function(e,t){if(null===t)return new Date(0/0);var a,i,n,r,o,s,l,u,m,_,g,f,I=e.match(d);if(!I)return new Date(0/0);var b=!!I[4],y=c(I[1]),q=c(I[2])-1,h=c(I[3]),S=c(I[4]),x=c(I[5])-1;if(b){return(a=S,i=x,a>=1&&a<=53&&i>=0&&i<=6)?(n=t,r=S,o=x,(s=new Date(0)).setUTCFullYear(n,0,4),l=s.getUTCDay()||7,s.setUTCDate(s.getUTCDate()+((r-1)*7+o+1-l)),s):new Date(0/0)}var T=new Date(0);return(u=t,m=q,_=h,m>=0&&m<=11&&_>=1&&_<=(p[m]||($(u)?29:28))&&(g=t,(f=y)>=1&&f<=($(g)?366:365)))?(T.setUTCFullYear(t,q,Math.max(y,h)),T):new Date(0/0)}(y.restDateString,y.year)}if(!g||isNaN(g.getTime()))return new Date(0/0);var q=g.getTime(),h=0;if(b.time&&isNaN(h=function(e){var t,a,n,r=e.match(l);if(!r)return 0/0;var o=m(r[1]),s=m(r[2]),d=m(r[3]);return(t=o,a=s,n=d,24===t?0===a&&0===n:n>=0&&n<60&&a>=0&&a<60&&t>=0&&t<25)?o*i.r+s*i.z+1e3*d:0/0}(b.time)))return new Date(0/0);if(b.timezone){if(isNaN(f=function(e){if("Z"===e)return 0;var t,a=e.match(u);if(!a)return 0;var n="+"===a[1]?-1:1,r=parseInt(a[2]),o=a[3]&&parseInt(a[3])||0;return(t=o)>=0&&t<=59?n*(r*i.r+o*i.z):0/0}(b.timezone)))return new Date(0/0)}else{var S=new Date(q+h),x=new Date(0);return x.setFullYear(S.getUTCFullYear(),S.getUTCMonth(),S.getUTCDate()),x.setHours(S.getUTCHours(),S.getUTCMinutes(),S.getUTCSeconds(),S.getUTCMilliseconds()),x}return new Date(q+h+f)}],389849)},684034,e=>{var t=e.i(389849);e.s(["f",()=>t.f])}])})();