(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[218659,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(115871),a=e.i(813843),n=e.i(755548),o=e.i(587369);let s=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:d={},imageSx:l={},title:u,titleSx:c={},subtitleFirstLine:m,subtitleFirstLineSx:p={},subtitleSecondLine:_,subtitleSecondLineSx:f={},buttonText:$,onAction:g}=e,h=(0,o.f)("(max-width: 400px)");return(0,t.jsxs)(a.f,{sx:{...d,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(s,{src:i,sx:{...l,width:h?"250px":"300px"}}),(0,t.jsx)(r.f,{typography:"h5",sx:{...c},children:u}),(0,t.jsxs)(a.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(r.f,{sx:{...p},children:m}),(0,t.jsx)(r.f,{sx:{...f},children:_})]}),$&&g&&(0,t.jsx)(n.f,{variant:"contained",color:"secondary",onClick:g,children:$})]})}])},360364,e=>{var t=e.i(391398),i=e.i(738251),r=e.i(813843),a=e.i(59626),n=e.i(552987),o=e.i(526374),s=e.i(879572);e.s(["f",0,e=>{let{row:d,refetchQueries:l,entity:u,removeTagTarget:c}=e,{removeLink:m}=(0,a.f)({refetchQueries:["GetTaskTags",...l]}),p=async e=>{if(!await m(e))throw Error("Tag could not be removed")},_={onSiteTimingEnd:d.onSiteTimingEnd,jobReportTimingEnd:d.jobReportTimingEnd,quoteReturnedTimingEnd:d.quoteReturnedTimingEnd},f=null!=d.parentJobNumber&&""!==d.parentJobNumber?{parentJobType:d.parentJobType??null,parentJobNumber:d.parentJobNumber}:null,$=null!=c?c:"Task"===u?"task":"Workflow"===u?"workflow":"Asset"===u?"asset":(0,s.p)(d.type);return(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:{minWidth:0,width:"100%",columnGap:2},children:[(0,t.jsx)(i.f,{sx:{flex:"1 1 0%",minWidth:0,overflow:"hidden",pr:.5,direction:"ltr"},children:(0,t.jsx)(n.f,{expandToContainer:!0,tags:d.tags||[],handleDeleteTagEntity:p,slaJobTimings:_,ppmLinkRowFallback:f,removeTagTarget:$,listSx:{whiteSpace:"nowrap"}})}),(0,t.jsx)(i.f,{sx:{flexShrink:0,display:"flex",alignItems:"center",direction:"ltr"},children:(0,t.jsx)(o.f,{hideTagsList:!0,entityId:d.id,refetchQueries:l,entity:u})})]})}])},655477,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(422411),a=e.i(877341),n=e.i(515523),o=e.i(76381),s=e.i(652148),d=e.i(800884),l=e.i(886292),u=e.i(175872);let c=[];e.s(["f",0,e=>{let{control:m}=e,[p,_]=(0,i.useState)(""),[f,{loading:$,data:{items:g}={items:[]}}]=(0,a.f)(l.T,{variables:{q:""!==p?`%${p}%`:null}}),h=(0,u.f)(e=>_(e),500);return(0,t.jsx)(r.e,{control:m,name:"tags",render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(n.f,{multiple:!0,limitTags:6,color:"secondary",onOpen:()=>f(),options:g,value:i||c,onChange:(e,t)=>{r(t)},onInputChange:(e,t)=>{h(t)},getOptionLabel:e=>e.label,renderTags:(e,i)=>e.map((e,r)=>(0,t.jsx)(d.f,{size:"small",label:e.label,...i({index:r})})),isOptionEqualToValue:(e,t)=>e.value===t.value,renderInput:e=>(0,t.jsx)(s.f,{...e,variant:"standard",color:"secondary",label:"Select tags",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[$?(0,t.jsx)(o.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})}})}])},842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,i=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),r=e=>{let t=e?.address||e;return t&&i(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,i,"Q",0,r],964919);let a=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},n=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let i=a(t[0]),r=a(t[1]);return null==r||null==i||r<-90||r>90||i<-180||i>180?null:{lat:r,lng:i}},o=e=>n(e?.geo),s=async e=>{let t=r(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var i=await e.json();if(!i)return null;let r=i.coordinates?.lat??i.lat;return o({geo:{coordinates:[i.coordinates?.lng??i.lng,r]}})}catch{return null}},d=async(e,t)=>{let i=o(e?.address||e);if(i)return i;let[r,a]=t?.coordinates??[],n=o({geo:{coordinates:[r,a]}});return n||s(e)};e.s(["g",0,n,"Z",0,o,"t",0,d,"l",0,(e,t)=>{let i=o(e?.address||e);if(i)return i;let[r,a]=t?.coordinates??[];return o({geo:{coordinates:[r,a]}})},"a",0,a],842088)},284661,e=>{var t=e.i(159080);let i=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,i])},239964,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(691567),a=e.i(773831),n=e.i(33670),o=e.i(901004),s=e.i(509790),d=e.i(692113),l=e.i(137995),u=e.i(817581),c=e.i(420),m=e.i(870307),p=e.i(407329),_=e.i(390536),f=e.i(978319),$=e.i(376733),g=e.i(13558),h=e.i(562673),y=e.i(339909),b=e.i(89029),I=e.i(129503),S=e.i(213419),v=e.i(12028),q=e.i(813843),x=e.i(115871);let A={add:(0,t.jsx)(u.default,{}),archive:(0,t.jsx)(d.default,{}),avatar:(0,t.jsx)(v.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(f.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(_.default,{}),info:(0,t.jsx)(g.default,{}),edit:(0,t.jsx)($.default,{}),location:(0,t.jsx)(b.default,{}),unarchive:(0,t.jsx)(l.default,{}),uploadFile:(0,t.jsx)(h.default,{}),receipt:(0,t.jsx)(y.default,{}),visibility:(0,t.jsx)(S.default,{})},k={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(I.default,{}),description:(0,t.jsx)(p.default,{})},w=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],j=e=>{let{actionsData:r=w,icon:s="default",row:d,disabled:l=!1}=e,[u,c]=(0,i.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(a.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:l,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:k[s]}),(0,t.jsx)(n.f,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:!!u,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:r(d).map((e,i)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(q.f,{direction:"row",alignItems:"center",spacing:2,children:[A?.[e.icon]||null,(0,t.jsx)(x.f,{children:e.tooltip})]})},i))})]})};j.propTypes={actionsData:r.default.func,icon:r.default.oneOf(["default","description"]),row:r.default.any.isRequired,disabled:r.default.bool},e.s(["f",0,j])},951510,832790,269610,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`;e.s(["k",0,e=>{let{tagsWhere:i,parentChildWhere:r="",flagsWhere:a=""}=e;return t.f`
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
          ${r}
          ${a}
        ]
        ${i}
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
          ${r}
          ${a}
        ]
        ${i}
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
`},"C",0,r,"F",0,i],832790);var a=e.i(284661),n=e.i(987123),o=e.i(39059);e.s(["f",0,e=>{let{tagsWhere:i,parentChildWhere:r="",flagsWhere:s=""}=e;return t.f`
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
          ${r}
          ${s}
        ]
        ${i}
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
          ${r}
          ${s}
        ]
        ${i}
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
  ${a.f}
  ${n.a}
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
  ${a.f}
  ${n.a}
  ${s.r}
  ${s.H}
  ${s.O}
  ${o.V}
`,e.i(925527),e.i(684034);var d=e.i(48441);e.s(["D",0,e=>{let t=["completed","inDispute","disputeResolved","reportSent","invoiceSent","customerPaid","supplierPaid","closed"],i=["offered","completed","reportSent","invoiceSent","customerPaid","supplierPaid","closed","raised","paused","continued","accepted","onMyWay","inProgress","pending","onHold"];switch(e){case"offered":return d.e.filter(e=>"offered"===e.value);case"current":return d.e.filter(e=>{let{value:t}=e;return i.includes(t)});case"openJobs":return d.e.filter(e=>{let{value:t}=e;return"raised"===t||"pending"===t});case"raised":return d.e.filter(e=>{let{value:t}=e;return"raised"===t});case"pending":return d.e.filter(e=>{let{value:t}=e;return"pending"===t});case"past":return d.e.filter(e=>{let{value:i}=e;return t.includes(i)});default:return d.e}},"W",0,e=>{let t=["locationId","sublocationId","customerId","assetId"],i="";return e&&e.constructor===Object&&Object.keys(e).length>0&&(i="?",Object.entries(e).map(e=>{let[r,a]=e;return a&&t.includes(r)&&(i+=`${[r]}=${a}&`),0}),i=i.substring(0,i.length-1)),i}],951510)},892904,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
  fragment JobQuoteFields on Job {
    quoted
    quoteNumber
    quoteDue
    quoteDueSupplier
  }
`,a=t.f`
  fragment JobAdminFinanceFields on Job {
    meta
    pricing
    supplierPricing
    supplierLabourAmount
    supplierMaterialsAmount
    amount
    quoteCharge
  }
`,n=t.f`
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
`;e.s(["O",0,s,"U",0,a,"H",0,n,"r",0,i,"Z",0,r,"q",0,d,"C",0,o])},128662,e=>{var t=e.i(391398),i=e.i(691567),r=e.i(280445),a=e.i(115871),n=e.i(813843),o=e.i(755548),s=e.i(587369);let d=(0,r.f)("img")({width:"300px",height:"250px"}),l={},u={},c={},m={},p={},_=e=>{let{imageSrc:i,sx:r=l,imageSx:_=u,title:f="",titleSx:$=c,subtitleFirstLine:g="",subtitleFirstLineSx:h=m,subtitleSecondLine:y="",subtitleSecondLineSx:b=p,buttonText:I,onAction:S=null}=e,v=(0,s.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...r,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(d,{src:i,sx:{..._,width:v?"250px":"300px"}}),(0,t.jsx)(a.f,{typography:"h5",sx:{...$},children:f}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(a.f,{sx:{...h},children:g}),(0,t.jsx)(a.f,{sx:{...b},children:y})]}),I&&S&&(0,t.jsx)(o.f,{variant:"contained",color:"secondary",onClick:S,children:I})]})};_.propTypes={imageSrc:i.string,title:i.string,subtitleFirstLine:i.string,subtitleSecondLine:i.string,onAction:i.func,sx:i.object,imageSx:i.object,titleSx:i.object,subtitleFirstLineSx:i.object,subtitleSecondLineSx:i.object},e.s(["f",0,_])},995197,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(738251);let a={},n={},o=(0,i.f)(r.f)(()=>({"& .MuiTabs-root":{}}));e.s(["f",0,e=>{let{children:i,value:s,index:d,boxProps:l=a,boxSx:u=n,...c}=e;return(0,t.jsx)(o,{role:"tabpanel",hidden:s!==d,id:`simple-tabpanel-${d}`,"aria-labelledby":`simple-tab-${d}`,...c,children:s===d&&(0,t.jsx)(r.f,{...l,sx:{padding:"25px 0",...u},children:i})})}])},890854,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(203828),a=e.i(691567),n=e.i(920235),o=e.i(738251),s=e.i(813843),d=e.i(115871),l=e.i(529292),u=e.i(280445),c=e.i(449587),m=e.i(317536),p=e.i(974261),_=e.i(332789),f=e.i(340569),$=e.i(749231),g=e.i(845825),h=e.i(587369);let y=()=>{},b=e=>{let{currentPage:i=1,totalCount:r=0,pageSize:a=50,onPageChange:n=y}=e,o=(0,h.f)("(max-width:400px)"),s=(0,h.f)("(max-width:500px)");return(0,t.jsx)(I,{mb:2,page:i,count:Math.ceil(r/a),onChange:(e,t)=>n(t),variant:"outlined",shape:"rounded",size:o?"small":"medium",hidePrevButton:1===i,hideNextButton:i===Math.ceil(r/a),siblingCount:+!s,renderItem:e=>(0,t.jsx)(g.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})};b.propTypes={currentPage:a.default.number,totalCount:a.default.number,pageSize:a.default.number,onPageChange:a.default.func};let I=(0,u.f)($.f)(e=>{let{hidePrevButton:t,hideNextButton:i,theme:r}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px"},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:r.palette.white.main,backgroundColor:r.palette.secondary.main,...i?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}});var S=e.i(544005);let v={columns:[],history:!1,loading:!1,rows:[],noResultsMessage:"There are no results.",autoHeight:!0},q=(0,i.forwardRef)((e,a)=>{let n=(0,S.f)(e,v),{columns:o,history:l,initialSort:u,meta:$,refetch:g,paginationSize:h,containerHeight:y,containerMaxHeight:I,noResultsMessage:q,autoHeight:k,stateKey:w,onColumnOrderChange:j,onColumnWidthChange:T,slotProps:C}=n,D=(0,r.useRouter)(),{query:M={}}=D,{apiRef:L,displayColumns:F,persistColumnOrder:N,persistColumnWidth:E}=(0,_.f)({stateKey:w,columns:o});(0,f.f)(L,!n.disableColumnReorder);let O=(0,i.useMemo)(()=>({...C,baseTooltip:{disableTouchListener:!0,...C?.baseTooltip}}),[C]),U=(0,i.useCallback)((e,t,i)=>{j?.(e,t,i),N()},[j,N]),J=(0,i.useCallback)((e,t,i)=>{T?.(e,t,i),E(e)},[T,E]),[R,P]=(0,i.useState)(parseInt(M?.page,10)||1),[H,B]=(0,i.useState)(h||p.r.paginationSize),z=u;z||(z={item:"createdAt",order:"desc"});let[G,V]=(0,i.useState)({item:z.item,order:z.order}),W=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,{query:t={}}=D;if(e>1?t.page=e:delete t.page,!(Object.keys(t).length>0))return{};{let i=Object.keys(t).map(i=>"page"===i?`${i}=${e}`:`${i}=${t[i]}`).join("&");return`?${i}`}};return(0,i.useImperativeHandle)(a,()=>({currentPage:R,pageSize:H,sort:G,resetPagination(){let e;V({item:z.item,order:z.order}),P(1),e=W(),D.push(e),B(h||p.r.paginationSize)}})),(0,t.jsxs)(x,{containerHeight:y,containerMaxHeight:I,children:[(0,t.jsx)(A,{hideFooter:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:k,sortingMode:"server",onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?V({item:o.find(e=>{let{field:i}=e;return i===t.field}).sortName||t.field||t.item||z.item,order:t.sort||t.order||z.order}):V({item:z.item,order:z.order}),g&&g()},pageSize:H,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(c.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(m.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(s.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(c.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(m.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:q})}),noRowsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:q})})},...n,apiRef:L,slotProps:O,columns:F,onColumnOrderChange:U,onColumnWidthChange:J}),$&&Math.ceil($.aggregate.totalCount/H)>1&&(0,t.jsx)(b,{currentPage:R,totalCount:$.aggregate.totalCount,pageSize:H,onPageChange:e=>{let t=W(e);l&&D.push(t),P(e),!l&&g&&g()}})]})});q.propTypes={history:a.default.bool,initialSort:a.default.object,loading:a.default.bool,meta:a.default.object,refetch:a.default.func,paginationSize:a.default.number,noResultsMessage:a.default.string,columns:a.default.array,rows:a.default.array,autoHeight:a.default.bool};let x=(0,u.f)(o.f)(e=>{let{containerHeight:t,containerMaxHeight:i}=e;return{height:t,maxHeight:i,display:"flex",flexDirection:"column"}}),A=(0,u.f)(n.f)(e=>{let{theme:t,hideHeader:i,rows:r,loading:a,rowHeight:n,isPdf:o}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",...o&&{"@media print":{display:"block"}}},"& .MuiDataGrid-main":{...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-columnHeaders":{...i&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...i&&{marginTop:"0 !important"},...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-iconSeparator":{opacity:0},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-virtualScrollerContent":{...o&&{height:"initial !important",minHeight:"initial !important"}},"& .MuiDataGrid-virtualScrollerRenderZone":{...o&&{position:"relative"}},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row":{...o&&{minHeight:`${n}cm !important`,maxHeight:`${n}cm !important`}},"& .MuiDataGrid-row > .MuiDataGrid-cell":{...o&&{minHeight:`${n}cm !important`,maxHeight:`${n}cm !important`}},"& .MuiDataGrid-columnHeaderCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row > .MuiDataGrid-cellCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["f",0,q],890854)},98762,e=>{var t=e.i(191788),i=e.i(949125),r=e.i(974261),a=e.i(491230);e.s(["f",0,e=>{let{filters:n,newFilters:o,initialSort:s}=e,d=(0,t.useRef)(void 0),[l,u]=(0,t.useState)({}),[c,m]=(0,t.useState)({}),p=s||{item:"createdAt",order:"desc"},_={[d.current?.sort.item||p.item]:p.inneritem?{[p.inneritem]:d.current?.sort.order||p.order}:d.current?.sort.order||p.order};return(0,t.useEffect)(()=>{let e=!(0,i.default)(l,n),t=!(0,i.default)(c,o);if(e&&(u(n),d?.current?.resetPagination()),t&&(m(o),d?.current?.resetPagination()),d?.current?.setSort&&!(e||t)){let e=d.current?.sort?.item&&d.current?.sort?.order?{item:d.current?.sort?.item,order:d.current?.sort?.order}:_;d.current.setSort(e)}},[n,o]),{initialData:{...n,newFilters:o?.length>0?o:void 0,limit:d.current?.pageSize==="Infinity"?null:parseInt(d.current?.pageSize,10)||r.r.paginationSize,offset:(d.current?.currentPage-1||0)*(d.current?.pageSize||r.r.paginationSize),orderBy:(0,a.f)(d.current?.sort?.item?.replace(/ORDER/i,d.current?.sort.order))||_},initialSort:s,ref:d}}])},39059,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`,a=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,n=t.f`
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
`;e.s(["u",0,l,"q",0,n,"_",0,s,"x",0,r,"k",0,i,"f",0,o,"l",0,d,"V",0,a])},60903,e=>{e.s(["f",0,(e,t)=>{let i=document.createElement("a");"string"==typeof i.download?(document.body.appendChild(i),i.download=t,i.href=e,i.click(),document.body.removeChild(i)):location.replace(e)}])},506656,e=>{e.s(["f",0,(e,t)=>{let i=Math.pow(10,t);return Math.round(e*i)/i}])},795617,e=>{var t=e.i(990071),i=e.i(842088);let r=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:i,type:r="inline",hideinvoicingEntity:a=!1}=e;if(!t)return"";let n="",o=i?.name?` (${i.name})`:"";return"stacked"===r?(n+=!a&&t.invoicingEntity?t.invoicingEntity+"\n":"",n+=t.addressLine1?t.addressLine1+o+"\n":o,n+=t.addressLine2?t.addressLine2+"\n":"",n+=t.addressLine3?t.addressLine3+"\n":"",n+=t.city?t.city+"\n":"",n+=t.county?t.county+"\n":""):(n+=!a&&t.invoicingEntity?t.invoicingEntity+" ":"",n+=t.addressLine1?t.addressLine1+o+" ":o,n+=t.addressLine2?t.addressLine2+" ":"",n+=t.addressLine3?t.addressLine3+" ":"",n+=t.city?t.city+" ":"",n+=t.county?t.county+" ":""),(n+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,r,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let i=null;switch(e){case"Account":i=t.A;break;case"Location":i=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!i)throw Error("Query cannot be null");return i},"u",0,(e,t)=>{let i=null;return"customer"===t?i=r(e.location,"invoice")||r(e.customer,"invoice")||r(e.location,"registered"):"supplier"===t&&(i=r(e.supplier,"invoice")||r(e.supplier,"registered")),i},"D",0,e=>{let t=(0,i.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let i=t.f`
  fragment AddressFields on Address {
    id
    invoicingEntity
    name
    addressLine1
    addressLine2
    addressLine3
    postCode
    city
    county
    geo
    createdAt
    meta
  }
`,r=t.f`
  fragment AddressEntityFields on Address_Entity {
    id
    entity
    entityId
    status
    registered
    operating
    trading
    invoice
    createdAt
  }
`,a=t.f`
  query GetAddresses($id: Int!) {
    item: Account_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Account" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
    }
  }
  ${i}
  ${r}
`,n=t.f`
  query GetAddresses($id: Int!) {
    item: Location_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
      accounts: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          addresses: Addresses(where: { entity: { _eq: "Account" } }) {
            ...AddressEntityFields
            address: Address {
              ...AddressFields
            }
          }
        }
      }
    }
  }
  ${i}
  ${r}
`,o=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${i}
`,s=t.f`
  mutation UpdateAddress($id: Int!, $changes: Address_set_input!) {
    update_Address_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,d=t.f`
  mutation AddUpdateAddress_Entity(
    $objects: [Address_Entity_insert_input!]!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    insert_Address_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,l=t.f`
  mutation UpdateAddress_Entities(
    $id: Int!
    $changes: Address_Entity_set_input!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    updateNew: update_Address_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["S",0,r,"a",0,i,"g",0,o,"H",0,d,"A",0,a,"R",0,n,"h",0,s,"I",0,l])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=i.currencySymbol??"£",r="number"==typeof e?e.toFixed(2):String(e);return`${t}${r}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let i=t.options.find(t=>t.value===e);return i?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let i=t.options.find(t=>t.value===e);return i?.label??e}).join(", ");default:return String(e)}}])},190871,179319,e=>{var t=e.i(203828),i=e.i(220303),r=e.i(93198),a=e.i(262887);let n=e=>{let{type:t,number:i,id:r}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:i,...r&&"job-report"!==t&&{id:String(r)}})}`};e.s(["$",0,n,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let i=Number(e.id);return{number:t,...Number.isSafeInteger(i)&&i>0&&{id:i}}}],179319);let o="This document could not be found",s="documentOpenedFromPortal",d=async e=>{let d=await e;if(!d)throw Error(o);if((0,r.Z)()&&"job-report"!==d.type){let e=await i.R.fetchQuery("/documents/:type/:number",{pathParams:{type:d.type,number:d.number},params:{id:d.id}});if(!("url"in e))throw Error(o);await (0,a.f)(e.url);return}let l=n(d);(e=>{try{return sessionStorage.setItem(s,e),!0}catch{return!1}})(l),await t.default.push(l)};e.s(["W",0,e=>{try{return sessionStorage.getItem(s)===n(e)}catch{return!1}},"k",0,d],190871)},996706,e=>{var t=e.i(159080);let i=t.f`
  fragment ServiceScheduleFields on ServiceSchedule {
    id
    name
    status
    entity
    entityId
    userId
    serviceId
    minimumDuration
    minimumIncrement
    includeTravelTime
    normal
    ooh
    premium
    oohTimes
    premiumTimes
    days
    adminId
    createdAt
    updatedAt
  }
`,r=t.f`
  query GetServiceSchedule($serviceScheduleId: Int!) {
    serviceSchedule: ServiceSchedule_by_pk(id: $serviceScheduleId) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        location: Location {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
    }
  }

  ${i}
`,a=t.f`
  query GetServiceSchedules(
    $q: String
    $status: service_schedule_status
    $entity: service_schedule_entity!
    $entityId: Int
    $offset: Int = 0
    $limit: Int = 50
    $order: [ServiceSchedule_order_by!]
    $engineerFilter: ServiceSchedule_bool_exp = {}
  ) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        status: { _eq: $status }
        _and: [
          $engineerFilter
          { _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }] }
        ]
      }
      offset: $offset
      limit: $limit
      order_by: $order
    ) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
      user: User {
        id
        fullName
      }
    }
    meta: ServiceSchedule_aggregate(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        status: { _eq: $status }
        _and: [
          $engineerFilter
          { _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }] }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${i}
`,n=t.f`
  query GetServiceScheduleForEntity($serviceScheduleId: Int!, $includeParent: Boolean!) {
    serviceSchedule: ServiceSchedule_by_pk(id: $serviceScheduleId) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        location: Location {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
      user: User {
        id
        fullName
      }
      parent: ParentServiceSchedule @include(if: $includeParent) {
        postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
          id
          postcode: PostcodeArea {
            id
            area
            name
          }
        }
      }
    }
  }

  ${i}
`,o=t.f`
  query GetServiceSchedulesForEntity(
    $q: String
    $status: service_schedule_status
    $entity: service_schedule_entity!
    $childEntityId: Int
    $childEntity: service_schedule_entity!
    $offset: Int = 0
    $limit: Int = 50
    $order: [ServiceSchedule_order_by!]
    $includeLocations: Boolean! = false
  ) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: $entity }
        status: { _eq: $status }
        _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }]
      }
      offset: $offset
      limit: $limit
      order_by: $order
    ) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }

      service: Service {
        id
        name
      }
      childSchedules: ServiceSchedules(
        where: { entity: { _eq: $childEntity }, entityId: { _eq: $childEntityId } }
      ) {
        ...ServiceScheduleFields
        locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } })
          @include(if: $includeLocations) {
          id
          location: Location {
            id
            name
          }
        }
      }
    }
    meta: ServiceSchedule_aggregate(
      where: {
        entity: { _eq: $entity }
        status: { _eq: $status }
        _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${i}
`,s=t.f`
  query HasDefaultSupplierSchedule($entityId: Int!, $serviceId: Int!, $excludeIds: [Int!] = []) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: "Supplier" }
        entityId: { _eq: $entityId }
        serviceId: { _eq: $serviceId }
        userId: { _is_null: true }
        status: { _eq: "active" }
        id: { _nin: $excludeIds }
      }
      limit: 1
    ) {
      id
    }
  }
`,d=t.f`
  query ActiveEngineerSupplierSchedules($entityId: Int!, $serviceId: Int!) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: "Supplier" }
        entityId: { _eq: $entityId }
        serviceId: { _eq: $serviceId }
        userId: { _is_null: false }
        status: { _eq: "active" }
      }
    ) {
      id
      user: User {
        id
        fullName
      }
    }
  }
`,l=t.f`
  query GetLocationCustomerReferences(
    $locationId: Int!
    $customerId: Int!
    $q: String = "%"
    $limit: Int = 50
  ) {
    references: JobSchedule(
      limit: $limit
      where: {
        locationId: { _eq: $locationId }
        customerId: { _eq: $customerId }
        reference: { _is_null: false, _neq: "", _ilike: $q }
      }
      distinct_on: reference
      order_by: { reference: asc }
    ) {
      reference
    }
  }
`;e.s(["c",0,d,"f",0,l,"O",0,r,"n",0,a,"y",0,o,"k",0,n,"i",0,s])},28980,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),n=e.r(391398);i.default=(0,a.default)((0,n.jsx)("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"}),"DownloadRounded")},870307,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),n=e.r(391398);i.default=(0,a.default)([(0,n.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,n.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},953116,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),n=e.r(391398);i.default=(0,a.default)((0,n.jsx)("path",{d:"M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2m4 1H4V5h2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4z"}),"StorageRounded")},220490,e=>{var t=e.i(75907),i=e.i(460997),r=e.i(191788),a=e.i(889878),n=e.i(600961),o=e.i(396851),s=e.i(395724),d=e.i(88152),l=e.i(713149),u=e.i(46739);function c(e){return(0,u.f)("MuiCard",e)}(0,l.f)("MuiCard",["root"]);var m=e.i(391398);let p=["className","raised"],_=(0,o.f)(d.f,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),f=r.forwardRef(function(e,r){let o=(0,s.f)({props:e,name:"MuiCard"}),{className:d,raised:l=!1}=o,u=(0,i.f)(o,p),f=(0,t.f)({},o,{raised:l}),$=(e=>{let{classes:t}=e;return(0,n.f)({root:["root"]},c,t)})(f);return(0,m.jsx)(_,(0,t.f)({className:(0,a.f)($.root,d),elevation:l?8:void 0,ref:r,ownerState:f},u))});e.s(["f",0,f],220490)},106850,e=>{var t=e.i(75907),i=e.i(460997),r=e.i(191788),a=e.i(889878),n=e.i(600961),o=e.i(396851),s=e.i(395724),d=e.i(713149),l=e.i(46739);function u(e){return(0,l.f)("MuiCardContent",e)}(0,d.f)("MuiCardContent",["root"]);var c=e.i(391398);let m=["className","component"],p=(0,o.f)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),_=r.forwardRef(function(e,r){let o=(0,s.f)({props:e,name:"MuiCardContent"}),{className:d,component:l="div"}=o,_=(0,i.f)(o,m),f=(0,t.f)({},o,{component:l}),$=(e=>{let{classes:t}=e;return(0,n.f)({root:["root"]},u,t)})(f);return(0,c.jsx)(p,(0,t.f)({as:l,className:(0,a.f)($.root,d),ownerState:f,ref:r},_))});e.s(["f",0,_],106850)},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])},799306,e=>{e.s(["f",0,function(e){if(null===e||!0===e||!1===e)return 0/0;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}])},925527,389849,e=>{var t=e.i(623886),i=e.i(699213);e.s(["f",0,function(e){(0,i.f)(1,arguments);var r=(0,t.f)(e);return r.setHours(23,59,59,999),r}],925527);var r=e.i(926638),a=e.i(799306),n=/[T ]/,o=/[Z ]/i,s=/([Z+-].*)$/,d=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var p=[31,null,31,30,31,30,31,31,30,31,30,31];function _(e){return e%400==0||e%4==0&&e%100!=0}e.s(["f",0,function(e,t){(0,i.f)(1,arguments);var f,$,g,h=(0,a.f)(null!=(f=null==t?void 0:t.additionalDigits)?f:2);if(2!==h&&1!==h&&0!==h)throw RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(0/0);var y=function(e){var t,i={},r=e.split(n);if(r.length>2)return i;if(/:/.test(r[0])?t=r[0]:(i.date=r[0],t=r[1],o.test(i.date)&&(i.date=e.split(o)[0],t=e.substr(i.date.length,e.length))),t){var a=s.exec(t);a?(i.time=t.replace(a[1],""),i.timezone=a[1]):i.time=t}return i}(e);if(y.date){var b=function(e,t){var i=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(i);if(!r)return{year:0/0,restDateString:""};var a=r[1]?parseInt(r[1]):null,n=r[2]?parseInt(r[2]):null;return{year:null===n?a:100*n,restDateString:e.slice((r[1]||r[2]).length)}}(y.date,h);$=function(e,t){if(null===t)return new Date(0/0);var i,r,a,n,o,s,l,u,m,f,$,g,h=e.match(d);if(!h)return new Date(0/0);var y=!!h[4],b=c(h[1]),I=c(h[2])-1,S=c(h[3]),v=c(h[4]),q=c(h[5])-1;if(y){return(i=v,r=q,i>=1&&i<=53&&r>=0&&r<=6)?(a=t,n=v,o=q,(s=new Date(0)).setUTCFullYear(a,0,4),l=s.getUTCDay()||7,s.setUTCDate(s.getUTCDate()+((n-1)*7+o+1-l)),s):new Date(0/0)}var x=new Date(0);return(u=t,m=I,f=S,m>=0&&m<=11&&f>=1&&f<=(p[m]||(_(u)?29:28))&&($=t,(g=b)>=1&&g<=(_($)?366:365)))?(x.setUTCFullYear(t,I,Math.max(b,S)),x):new Date(0/0)}(b.restDateString,b.year)}if(!$||isNaN($.getTime()))return new Date(0/0);var I=$.getTime(),S=0;if(y.time&&isNaN(S=function(e){var t,i,a,n=e.match(l);if(!n)return 0/0;var o=m(n[1]),s=m(n[2]),d=m(n[3]);return(t=o,i=s,a=d,24===t?0===i&&0===a:a>=0&&a<60&&i>=0&&i<60&&t>=0&&t<25)?o*r.r+s*r.z+1e3*d:0/0}(y.time)))return new Date(0/0);if(y.timezone){if(isNaN(g=function(e){if("Z"===e)return 0;var t,i=e.match(u);if(!i)return 0;var a="+"===i[1]?-1:1,n=parseInt(i[2]),o=i[3]&&parseInt(i[3])||0;return(t=o)>=0&&t<=59?a*(n*r.r+o*r.z):0/0}(y.timezone)))return new Date(0/0)}else{var v=new Date(I+S),q=new Date(0);return q.setFullYear(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate()),q.setHours(v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds()),q}return new Date(I+S+g)}],389849)},684034,e=>{var t=e.i(389849);e.s(["f",()=>t.f])}],625106,(e,t,i)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,i)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,i)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,i)=>{var r=e.r(933571),a=e.r(729549),n=e.r(630357);function o(e){var t=-1,i=null==e?0:e.length;for(this.__data__=new r;++t<i;)this.add(e[t])}o.prototype.add=o.prototype.push=a,o.prototype.has=n,t.exports=o},278166,(e,t,i)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,i)=>{t.exports=function(e,t){for(var i=-1,r=null==e?0:e.length,a=0,n=[];++i<r;){var o=e[i];t(o,i,e)&&(n[a++]=o)}return n}},576723,(e,t,i)=>{t.exports=function(e,t){for(var i=-1,r=t.length,a=e.length;++i<r;)e[a+i]=t[i];return e}},297560,(e,t,i)=>{t.exports=function(e,t){for(var i=-1,r=null==e?0:e.length;++i<r;)if(t(e[i],i,e))return!0;return!1}},538916,(e,t,i)=>{var r=e.r(576723),a=e.r(448684);t.exports=function(e,t,i){var n=t(e);return a(e)?n:r(n,i(e))}},190835,(e,t,i)=>{var r=e.r(858056),a=e.r(432836);t.exports=function e(t,i,n,o,s){return t===i||(null!=t&&null!=i&&(a(t)||a(i))?r(t,i,n,o,e,s):t!=t&&i!=i)}},858056,(e,t,i)=>{var r=e.r(698620),a=e.r(536712),n=e.r(317744),o=e.r(804191),s=e.r(268829),d=e.r(448684),l=e.r(613272),u=e.r(75299),c="[object Arguments]",m="[object Array]",p="[object Object]",_=Object.prototype.hasOwnProperty;t.exports=function(e,t,i,f,$,g){var h=d(e),y=d(t),b=h?m:s(e),I=y?m:s(t);b=b==c?p:b,I=I==c?p:I;var S=b==p,v=I==p,q=b==I;if(q&&l(e)){if(!l(t))return!1;h=!0,S=!1}if(q&&!S)return g||(g=new r),h||u(e)?a(e,t,i,f,$,g):n(e,t,b,i,f,$,g);if(!(1&i)){var x=S&&_.call(e,"__wrapped__"),A=v&&_.call(t,"__wrapped__");if(x||A){var k=x?e.value():e,w=A?t.value():t;return g||(g=new r),$(k,w,i,f,g)}}return!!q&&(g||(g=new r),o(e,t,i,f,$,g))}},758629,(e,t,i)=>{var r=e.r(734274),a=e.r(517059),n=Object.prototype.hasOwnProperty;t.exports=function(e){if(!r(e))return a(e);var t=[];for(var i in Object(e))n.call(e,i)&&"constructor"!=i&&t.push(i);return t}},33483,(e,t,i)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,i)=>{var r=e.r(650119),a=e.r(297560),n=e.r(33483);t.exports=function(e,t,i,o,s,d){var l=1&i,u=e.length,c=t.length;if(u!=c&&!(l&&c>u))return!1;var m=d.get(e),p=d.get(t);if(m&&p)return m==t&&p==e;var _=-1,f=!0,$=2&i?new r:void 0;for(d.set(e,t),d.set(t,e);++_<u;){var g=e[_],h=t[_];if(o)var y=l?o(h,g,_,t,e,d):o(g,h,_,e,t,d);if(void 0!==y){if(y)continue;f=!1;break}if($){if(!a(t,function(e,t){if(!n($,t)&&(g===e||s(g,e,i,o,d)))return $.push(t)})){f=!1;break}}else if(!(g===h||s(g,h,i,o,d))){f=!1;break}}return d.delete(e),d.delete(t),f}},317744,(e,t,i)=>{var r=e.r(889239),a=e.r(84742),n=e.r(198373),o=e.r(536712),s=e.r(692152),d=e.r(231853),l=r?r.prototype:void 0,u=l?l.valueOf:void 0;t.exports=function(e,t,i,r,l,c,m){switch(i){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!c(new a(e),new a(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return n(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var p=s;case"[object Set]":var _=1&r;if(p||(p=d),e.size!=t.size&&!_)break;var f=m.get(e);if(f)return f==t;r|=2,m.set(e,t);var $=o(p(e),p(t),r,l,c,m);return m.delete(e),$;case"[object Symbol]":if(u)return u.call(e)==u.call(t)}return!1}},804191,(e,t,i)=>{var r=e.r(577256),a=Object.prototype.hasOwnProperty;t.exports=function(e,t,i,n,o,s){var d=1&i,l=r(e),u=l.length;if(u!=r(t).length&&!d)return!1;for(var c=u;c--;){var m=l[c];if(!(d?m in t:a.call(t,m)))return!1}var p=s.get(e),_=s.get(t);if(p&&_)return p==t&&_==e;var f=!0;s.set(e,t),s.set(t,e);for(var $=d;++c<u;){var g=e[m=l[c]],h=t[m];if(n)var y=d?n(h,g,m,t,e,s):n(g,h,m,e,t,s);if(!(void 0===y?g===h||o(g,h,i,n,s):y)){f=!1;break}$||($="constructor"==m)}if(f&&!$){var b=e.constructor,I=t.constructor;b!=I&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof I&&I instanceof I)&&(f=!1)}return s.delete(e),s.delete(t),f}},577256,(e,t,i)=>{var r=e.r(538916),a=e.r(40811),n=e.r(622335);t.exports=function(e){return r(e,n,a)}},40811,(e,t,i)=>{var r=e.r(856408),a=e.r(1107),n=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;t.exports=o?function(e){return null==e?[]:r(o(e=Object(e)),function(t){return n.call(e,t)})}:a},268829,(e,t,i)=>{var r=e.r(625106),a=e.r(696138),n=e.r(441298),o=e.r(340682),s=e.r(278166),d=e.r(912904),l=e.r(742186),u="[object Map]",c="[object Promise]",m="[object Set]",p="[object WeakMap]",_="[object DataView]",f=l(r),$=l(a),g=l(n),h=l(o),y=l(s),b=d;(r&&b(new r(new ArrayBuffer(1)))!=_||a&&b(new a)!=u||n&&b(n.resolve())!=c||o&&b(new o)!=m||s&&b(new s)!=p)&&(b=function(e){var t=d(e),i="[object Object]"==t?e.constructor:void 0,r=i?l(i):"";if(r)switch(r){case f:return _;case $:return u;case g:return c;case h:return m;case y:return p}return t}),t.exports=b},692152,(e,t,i)=>{t.exports=function(e){var t=-1,i=Array(e.size);return e.forEach(function(e,r){i[++t]=[r,e]}),i}},517059,(e,t,i)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,i)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,i)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,i)=>{t.exports=function(e){var t=-1,i=Array(e.size);return e.forEach(function(e){i[++t]=e}),i}},949125,(e,t,i)=>{var r=e.r(190835);t.exports=function(e,t){return r(e,t)}},622335,(e,t,i)=>{var r=e.r(419188),a=e.r(758629),n=e.r(379858);t.exports=function(e){return n(e)?r(e):a(e)}},1107,(e,t,i)=>{t.exports=function(){return[]}}]);