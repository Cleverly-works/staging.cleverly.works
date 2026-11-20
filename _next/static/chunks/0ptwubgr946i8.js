(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,913758,e=>{var t=e.i(159080),r=e.i(987123);let i=t.f`
  query GetEvents($where: Job_bool_exp) {
    events: Job(where: $where) {
      id
      number
      type
      description
      timingEnd
      scheduledAt
      siteVisitStart
      timingStart
      status
      title
      quoteDue
      estimatedDuration
      estimatedDurationUnit
      anyTimeOption
      hourStart
      hourEnd
      shortJobDesc: Taxonomy(
        where: { entity: { _eq: "Job" }, Taxonomy: { type: { _eq: "jobTags" } } }
      ) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
        }
      }
      quoteSummary: Taxonomy(
        where: { entity: { _eq: "Job" }, Taxonomy: { type: { _eq: "quoteSummary" } } }
      ) {
        taxonomy: Taxonomy {
          name
        }
      }
      supplierQuotes: SupplierQuotes(
        where: {
          siteVisitAt: { _is_null: false }
          status: { _neq: "cancelled" }
          type: { _eq: "quote" }
        }
      ) {
        siteVisitAt
        quoteNumber
      }
      location: Location {
        id
        access
        createdAt
        name
        contactUserId
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
          }
        }
      }
      supplier: Supplier {
        addresses: Addresses(where: { entity: { _eq: "Account" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
          }
        }
      }
      supplierUser: SupplierUser {
        id
        fullName
      }
      supplierOffers: SupplierOffers(where: { status: { _neq: "cancelled" } }) {
        id
        accountId
        status
        statusLog
        meta: clientMeta
        heldSupplierUserId
        heldScheduledAt
        heldAt
        heldByUserId
      }
    }
  }
  ${r.a}
  ${r.S}
`,a=t.f`
  query GetCalendarTasks($where: Task_bool_exp!) {
    tasks: Task(where: $where) {
      id
      title
      status
      dueDate
      completion_by_customer
      job: Job {
        number
        type
        quoted
      }
      location: Location {
        name
      }
    }
  }
`,s=t.f`
  query GetCompliancesCalendar(
    $locationId: Int
    $customerId: Int
    $start: date
    $end: date
    $supplierId: Int
  ) {
    compliances: Compliance(
      where: {
        locationId: { _eq: $locationId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        expiryDate: { _gte: $start, _lte: $end }
      }
    ) {
      id
      name
      expiryDate
    }
  }
`,n=t.f`
  query GetSupplierOfferByJobAndAccount($jobId: Int!, $accountId: Int!) {
    SupplierOffer(
      where: {
        jobId: { _eq: $jobId }
        accountId: { _eq: $accountId }
        status: { _neq: "cancelled" }
      }
      limit: 1
      order_by: { id: desc }
    ) {
      id
      accountId
      statusLog
    }
  }
`,o=t.f`
  query CheckSupplierUserOverlap(
    $supplierUserId: Int!
    $excludeJobId: Int!
    $start: timestamptz!
    $end: timestamptz!
  ) {
    overlaps: Job(
      where: {
        id: { _neq: $excludeJobId }
        status: { _neq: "canceled" }
        _and: [
          {
            _or: [
              { supplierUserId: { _eq: $supplierUserId } }
              { JobOperatives: { userId: { _eq: $supplierUserId } } }
            ]
          }
          {
            _or: [
              {
                _and: [
                  { scheduledAt: { _is_null: false } }
                  { scheduledAt: { _lt: $end } }
                  { scheduledAt: { _gte: $start } }
                ]
              }
              {
                _and: [
                  { scheduledAt: { _is_null: true } }
                  { timingStart: { _is_null: false } }
                  { timingEnd: { _is_null: false } }
                  { timingStart: { _lt: $end } }
                  { timingEnd: { _gt: $start } }
                ]
              }
            ]
          }
        ]
      }
      limit: 1
    ) {
      id
    }
    heldOffers: SupplierOffer(
      where: {
        status: { _eq: "offered" }
        jobId: { _neq: $excludeJobId }
        heldSupplierUserId: { _eq: $supplierUserId }
        Job: { status: { _neq: "canceled" } }
      }
    ) {
      id
      jobId
      meta: clientMeta
      heldSupplierUserId
      heldScheduledAt
      heldAt
      heldByUserId
    }
  }
`,l=t.f`
  query GetCalendarBlockEvents($userIds: [Int!], $start: timestamptz!, $end: timestamptz!) {
    events: Holiday(
      where: {
        status: { _eq: "active" }
        userId: { _in: $userIds }
        _and: [{ startDate: { _lt: $end } }, { endDate: { _gt: $start } }]
      }
    ) {
      id
      userId
      startDate
      endDate
      notes
      meta
      User {
        id
        fullName
      }
    }
  }
`,u=t.f`
  query CheckUserBlockOverlap($userId: Int!, $start: timestamptz!, $end: timestamptz!) {
    overlaps: Holiday(
      where: {
        status: { _eq: "active" }
        userId: { _eq: $userId }
        _and: [{ startDate: { _lt: $end } }, { endDate: { _gt: $start } }]
      }
      limit: 1
    ) {
      id
    }
  }
`,d=t.f`
  query GetBlockEventDetails($id: Int!) {
    event: Holiday_by_pk(id: $id) {
      id
      notes
      meta
      startDate
      endDate
    }
  }
`,c=t.f`
  query GetJobEventDetails($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      access
      costCategory
      description
      quoteDue
      quoteNumber
      id
      number
      meta: clientMeta
      paymentMethod
      reference
      status
      title
      type
      quoted
      sublocation: Sublocation {
        name
      }
      invoices: Invoices(order_by: { createdAt: desc }) {
        id
        invoiceNumber
      }
      admin: Admin {
        id
        name
      }
      service: Service {
        id
        name
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      customer: Customer {
        id
        name
        website
        slas: SLAs(where: { entity: { _eq: "Account" } }) {
          id
          entity
          entityId
          onSite
          onSiteUnit
          jobReport
          jobReportUnit
          completion
          completionUnit
          notes
          inUse
          normalRate
          oohRate
          premiumRate
          minimumInterval
          minimumLength
          slaId
          sla: SLA {
            id
            name
            notes
            normalRate
            oohRate
            premiumRate
            onSite
            onSiteUnit
            jobReport
            jobReportUnit
            completion
            completionUnit
            minimumInterval
            minimumLength
          }
        }
      }
      customerUser: CustomerUser {
        id
        nameFirst
        nameLast
        fullName
        email
        phone
      }
      supplier: Supplier {
        id
        name
        contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
          id
          role
          position
          isContact
          lastSignInAt
          userId
          user: User {
            id
            fullName
            nameFirst
            nameLast
            email
            phone
          }
        }
      }
      supplierUser: SupplierUser {
        id
        fullName
        nameFirst
        nameLast
        email
        phone
      }
      location: Location {
        id
        name
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            country: Country {
              id
              name
            }
          }
        }
        slas: SLAs(where: { entity: { _eq: "Location" } }) {
          id
          entity
          entityId
          onSite
          onSiteUnit
          jobReport
          jobReportUnit
          completion
          completionUnit
          notes
          inUse
          normalRate
          oohRate
          premiumRate
          minimumInterval
          minimumLength
          slaId
          sla: SLA {
            id
            name
            notes
            normalRate
            oohRate
            premiumRate
            onSite
            onSiteUnit
            jobReport
            jobReportUnit
            completion
            completionUnit
            minimumInterval
            minimumLength
          }
        }
      }
      sla: SLA {
        id
        name
        notes
        normalRate
        oohRate
        premiumRate
        onSite
        onSiteUnit
        jobReport
        jobReportUnit
        completion
        completionUnit
        minimumInterval
        minimumLength
      }
      costCategoryTaxonomy: CostCategory {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
        }
      }
      quoteSummary: Taxonomy(
        where: { entity: { _eq: "Job" }, Taxonomy: { type: { _eq: "quoteSummary" } } }
      ) {
        taxonomy: Taxonomy {
          name
        }
      }
      compliance: Compliance {
        id
        name
        complianceCategory: ComplianceCategory {
          id
          name
        }
        parentCompliance: ParentCompliance {
          id
          name
        }
      }
    }
  }
  ${r.a}
  ${r.S}
`,m=t.f`
  query GetComplianceEventDetails($id: Int!) {
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
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
          }
        }
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
      supplier: Supplier {
        id
        name
        accountUsers: Account_Users(where: { isContact: { _eq: true } }) {
          user: User {
            id
            fullName
          }
        }
      }
      customer: Customer {
        id
        name
        accountUsers: Account_Users(where: { isContact: { _eq: true } }) {
          user: User {
            id
            fullName
          }
        }
      }
    }
  }
  ${r.a}
  ${r.S}
`;e.s(["x",0,o,"d",0,u,"o",0,d,"G",0,l,"E",0,a,"u",0,s,"P",0,m,"m",0,i,"U",0,c,"b",0,n])},549384,e=>{var t=e.i(391398),r=e.i(587369),i=e.i(280445),a=e.i(773831),s=e.i(738251),n=e.i(734787);let o=e=>{let{icon:r,children:i,expanded:a,height:o,onOpen:m}=e;return(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(l,{open:a,children:[(0,t.jsx)(u,{onClick:m,children:r}),a&&(0,t.jsx)(c,{children:(0,t.jsx)(n.default,{sx:{height:"32px",width:"32px",color:"#FFFFFF"}})})]}),(0,t.jsx)(s.f,{sx:{height:o||"300px"},children:a&&(0,t.jsx)(d,{open:a,icon:!!r,children:i})})]})},l=(0,i.f)(s.f)(e=>{let{open:t,theme:r}=e;return{display:"flex",alignItems:"center",borderRadius:"10px",flexDirection:"row",height:"fit-content",width:t?"80px":"42px",backgroundColor:r.palette.secondary.main,transition:"width 400ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}}),u=(0,i.f)(s.f)(e=>{let{theme:t}=e;return{display:"flex",width:"42px",height:"42px",borderRadius:"8px",backgroundColor:t.palette.secondary.main,justifyContent:"center",alignItems:"center"}}),d=(0,i.f)(s.f)(e=>{let{open:t,theme:r,icon:i}=e;return{position:"absolute",top:50*!!i,left:i?-2:0,borderRadius:"10px",display:t?"block":"none",marginTop:i?"15px":0,backgroundColor:r.palette.secondary.main}}),c=(0,i.f)(a.f)(e=>{let{open:t}=e;return{height:"36px",width:"36px",transform:t?"rotate(180deg)":"rotate(0deg)",transition:"transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}});var m=e.i(813843),f=e.i(191788),p=e.i(631328);let h=e=>{let{icon:r,children:i,expanded:a=!1,onOpen:s,spacing:o=2}=e,[l,u]=(0,f.useState)(a),[d,c]=(0,f.useState)(!1),[m,h]=(0,f.useState)(!1),j=(0,f.useRef)(null),q=(0,p.y)(l);(0,f.useEffect)(()=>{u(a),c(!1)},[a]);let I=()=>{j.current&&h(j.current.scrollHeight>=69)};return(0,f.useEffect)(()=>(I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)),[i]),(0,t.jsxs)(b,{open:l,children:[(0,t.jsx)(y,{open:l,onClick:()=>{u(!0),s&&s()},children:r}),(0,t.jsxs)(v,{open:l,wasOpen:!!q,more:d,direction:"row",alignItems:"center",justifyContent:"space-between",onTransitionEnd:()=>{I()},children:[(0,t.jsx)(x,{ref:j,open:l,more:d,direction:"row",spacebetween:o,children:i}),m&&(0,t.jsx)(g,{open:d,color:"white",onClick:()=>{c(!d)},children:(0,t.jsx)(n.default,{sx:{height:"32px",width:"32px"}})})]})]})},b=(0,i.f)(s.f)(e=>{let{open:t}=e;return{display:"flex",flexDirection:"row",width:t?"100%":"42px",transition:"width 400ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}}),y=(0,i.f)(s.f)(e=>{let{open:t,theme:r}=e;return{display:t?"none":"flex",width:"42px",height:"42px",borderRadius:"8px",backgroundColor:r.palette.secondary.main,justifyContent:"center",alignItems:"center"}}),v=(0,i.f)(m.f)(e=>{let{open:t,wasOpen:r,more:i,theme:a}=e;return{width:t?"100%":"0px",overflow:"hidden",display:!t&&r?"none":"flex",height:i?"100%":"42px",borderRadius:"8px",backgroundColor:a.palette.secondary.main,transition:`width 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms,
  height 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms`,...t&&{paddingLeft:"8px",paddingRight:"8px"}}}),x=(0,i.f)(m.f)(e=>{let{open:t,more:r,spacebetween:i}=e;return{alignItems:"center",flexWrap:"wrap",height:r?"auto":"42px",overflow:"hidden",...t&&{paddingTop:"10px",paddingBottom:"10px",rowGap:"10px","&>:not(style):not(style)":{marginRight:8*i+"px"}}}}),g=(0,i.f)(a.f)(e=>{let{open:t}=e;return{height:"36px",width:"36px",transform:t?"rotate(180deg)":"rotate(0deg)",transition:"transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}});e.s(["f",0,e=>(0,r.f)("(max-width: 600px)")?(0,t.jsx)(o,{...e}):(0,t.jsx)(h,{...e})],549384)},694508,2261,e=>{var t,r,i=((t={}).WEEKLY="Weekly",t.MONTHLY="Monthly",t.QUARTERLY="Quarterly",t.EVERY_SIX_MONTH="6 monthly",t.ANNUALLY="Annually",t.EVERY_THREE_YEARS="Every 3 years",t.EVERY_FIVE_YEARS="Every 5 years",t.EVERY_TEN_YEARS="Every 10 years",t),a=((r={}).ACTIVE="active",r.INACTIVE="inactive",r);e.s(["D",()=>i,"N",()=>a],2261);let s=[{label:"Active",value:a.ACTIVE},{label:"Inactive",value:a.INACTIVE}],n=[{label:i.WEEKLY,value:i.WEEKLY},{label:i.MONTHLY,value:i.MONTHLY},{label:i.QUARTERLY,value:i.QUARTERLY},{label:i.EVERY_SIX_MONTH,value:i.EVERY_SIX_MONTH},{label:i.ANNUALLY,value:i.ANNUALLY},{label:i.EVERY_THREE_YEARS,value:i.EVERY_THREE_YEARS},{label:i.EVERY_FIVE_YEARS,value:i.EVERY_FIVE_YEARS},{label:i.EVERY_TEN_YEARS,value:i.EVERY_TEN_YEARS}];e.s(["X",0,n,"d",0,{active:"success",inactive:"danger"},"G",0,s],694508)},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,r)=>{if(!r)return null;let i=(0,t.default)(r);if(!i.isValid())return null;let a=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),s=i.clone().add(a,"minutes");return{start:i.toISOString(),end:s.toISOString()}}])},544005,e=>{e.s(["f",0,(e,t)=>{let r={...e};return Object.entries(t).forEach(e=>{let[t,i]=e;void 0===r[t]&&(r[t]=i)}),r}])},562367,e=>{var t=e.i(391398),r=e.i(738251),i=e.i(755548),a=e.i(986351),s=e.i(813843),n=e.i(115871),o=e.i(280445),l=e.i(691567),u=e.i(74633),d=e.i(683125),c=e.i(88152),m=e.i(4142),f=e.i(652148),p=e.i(432171),h=e.i(159080);h.f`
  query GetEntityPostcodeAreas(
    $entityId: Int!
    $entity: String!
    $limit: Int = 50
    $offset: Int = 0
  ) {
    postcodeAreas: PostcodeArea_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        PostcodeArea: { status: { _eq: "active" } }
      }
      limit: $limit
      offset: $offset
      order_by: { PostcodeArea: { name: asc } }
    ) {
      id
      postcode: PostcodeArea {
        id
        name
        area
      }
    }
  }
`;let b=h.f`
  query GetPostcodeAreasForEntity($q: String, $limit: Int = 50, $offset: Int = 0) {
    postcodeAreas: PostcodeArea(
      where: {
        _or: [{ name: { _ilike: $q } }, { area: { _ilike: $q } }]
        status: { _eq: "active" }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      id
      name
      area
    }
    meta: PostcodeArea_aggregate(
      where: {
        _or: [{ name: { _ilike: $q } }, { area: { _ilike: $q } }]
        status: { _eq: "active" }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var y=e.i(191788),v=e.i(98762),x=e.i(890854);let g=e=>{let{open:r,setOpen:i,values:o=[],setValues:l}=e,[u,c]=(0,y.useState)(o||[]),[h,g]=(0,y.useState)("");(0,y.useEffect)(()=>{c(o||[])},[o]);let{initialData:q,ref:I}=(0,v.f)({filters:{}}),{data:{postcodeAreas:T}={postcodeAreas:[],meta:{aggregate:{totalCount:0}}},loading:A}=(0,p.t)(b,{variables:{...q,q:null,limit:null}}),w=(0,y.useMemo)(()=>T.filter(e=>!h||RegExp(`${h}`,"gmi").test(e.name??"")||RegExp(`${h}`,"gmi").test(e.area??"")).map(e=>({id:e.id,name:e.name,area:e.area})),[T,h]),C=(0,y.useCallback)(e=>{e.target.checked?c([...w]):c([])},[w]),H=(0,y.useCallback)(e=>u.some(t=>t.id===e.id),[u]),S=(0,y.useCallback)((e,t)=>{e?c([...u,t]):c(u.filter(e=>e.id!==t.id))},[u,c]),_=w.length>0&&w.every(H),E=(0,y.useMemo)(()=>[{flex:1,field:"name",headerName:"Area",sortable:!1},{flex:1,field:"area",headerName:"Postcode",sortable:!1},{width:80,field:"select",headerName:"",sortable:!1,renderHeader:()=>(0,t.jsx)(m.f,{color:"secondary",checked:_,onChange:C}),renderCell:e=>{let{row:r}=e;return(0,t.jsx)(m.f,{color:"secondary",checked:H(r),onChange:(e,t)=>S(t,r)})}}],[_,S,C,H]);return(0,t.jsx)(d.f,{open:r,onClose:()=>{l(u),i(!1)},children:(0,t.jsx)(j,{children:(0,t.jsxs)(s.f,{children:[(0,t.jsx)(s.f,{direction:"row",justifyContent:"space-between",children:(0,t.jsx)(n.f,{variant:"h6",fontWeight:700,children:"Add postcode area"})}),(0,t.jsx)(a.f,{sx:{mb:.5}}),(0,t.jsx)(f.f,{label:"Search",color:"secondary",variant:"standard",value:h,onChange:e=>g(e.target.value),sx:{mb:1}}),(0,t.jsx)(x.f,{disableRowSelectionOnClick:!0,autoHeight:!1,hideFooter:!1,loading:A,ref:I,columns:E,rows:w,pagination:!0,sortingMode:"client",paginationSize:50,initialState:{pagination:{paginationModel:{pageSize:50}}},containerHeight:"calc(90vh - 120px)"})]})})})},j=(0,o.f)(c.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"500px",height:"90vh",padding:"16px 27px 16px 27px",borderRadius:"8px"})),q=[],I=e=>{let{editable:r,paginationSize:o=5,name:l,values:d=q,setValue:c,fillHeight:m}=e,[f,p]=(0,y.useState)(!1),[h,b]=(0,y.useState)({currentPage:0,pageSize:o,sorting:[]}),[v,x]=(0,y.useState)(o),j=(0,y.useRef)(null);(0,y.useEffect)(()=>{let e=j.current;if(!m||!e)return;let t=new ResizeObserver(()=>{x(Math.max(1,Math.floor((e.clientHeight-56-48)/52)))});return t.observe(e),()=>t.disconnect()},[m]);let I=m?v:o,w=(0,y.useMemo)(()=>d.slice(h.currentPage*I,(h.currentPage+1)*I),[d,h.currentPage,I]),C=(0,y.useMemo)(()=>[{flex:1,minWidth:0,field:"name",headerName:"Area",sortable:!1},{flex:1,minWidth:0,field:"area",headerName:"Postcode",sortable:!1}],[]),H=(0,y.useCallback)(e=>{c(l,e,{shouldDirty:!0})},[l,c]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g,{open:f,setOpen:p,values:d,setValues:H}),(0,t.jsxs)(T,{fillHeight:m,children:[(0,t.jsxs)(s.f,{direction:"row",justifyContent:"space-between",mb:1,flexShrink:0,children:[(0,t.jsx)(n.f,{variant:"h6",fontWeight:700,children:"Coverage areas"}),r&&(0,t.jsx)(i.f,{color:"secondary",variant:"contained",size:"small",onClick:e=>{e.stopPropagation(),p(!0)},children:"Add"})]}),(0,t.jsx)(a.f,{}),(0,t.jsx)(A,{ref:j,fillHeight:m,children:(0,t.jsx)(u.s,{autoHeight:!1,rowSelection:!1,columns:C,rows:w,totalCount:d.length,paginationSize:I,currentPage:h.currentPage,onTableStateChange:b,rowHeight:52,columnHeaderHeight:56,containerHeight:m?"100%":void 0})})]})]})},T=(0,o.f)(s.f,{shouldForwardProp:e=>"fillHeight"!==e})(e=>{let{fillHeight:t}=e;return{...t&&{flex:1,minHeight:0,overflow:"hidden"}}}),A=(0,o.f)(r.f,{shouldForwardProp:e=>"fillHeight"!==e})(e=>{let{fillHeight:t}=e;return{...t&&{flex:1,minHeight:0,overflow:"hidden"}}});I.propTypes={editable:l.default.bool,paginationSize:l.default.number,setValue:l.default.func,values:l.default.array,name:l.default.string,fillHeight:l.default.bool},e.s(["f",0,I],562367)},353069,e=>{var t=e.i(159080);let r=t.f`
  query GetSuppliersForAssign($jobId: Int!) {
    data: getSuppliersForAssign(jobId: $jobId) {
      job
      customerRates
      suppliers
      hasArea
      hasActiveOffer
    }
  }
`,i=t.f`
  mutation AcceptJob($object: AcceptJobOfferInput!) {
    acceptJobOffer(acceptOfferInput: $object) {
      data
      success
    }
  }
`;e.s(["J",0,i,"z",0,r])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},49408,400171,e=>{var t=e.i(362537);e.s(["f",0,(e,r)=>{let i=(0,t.default)(),a=(0,t.default)(e);switch(r){case"Weekly":if(i.isAfter(a))return"warning";if(i.isAfter(a.clone().subtract(2,"days")))return"warning";if(i.isAfter(a.clone().subtract(4,"days")))return"info";return"success";case"Monthly":if(i.isAfter(a))return"warning";if(i.isAfter(a.clone().subtract(5,"days")))return"warning";if(i.isAfter(a.clone().subtract(10,"days")))return"info";return"success";case"Quarterly":case"6 monthly":case"Annually":case"Every 3 years":case"Every 5 years":case"Every 10 years":if(i.isAfter(a))return"warning";if(i.isAfter(a.clone().subtract(5,"days")))return"warning";if(i.isAfter(a.clone().subtract(30,"days")))return"info";return"success";default:throw Error("Unsupported frequency")}}],49408);var r=e.i(159080);let i=r.f`
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
`;r.f`
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
`;let a=r.f`
  mutation ComplianceMediaAttached($id: Int!) {
    complianceMediaAttached(id: $id) {
      message
    }
  }
`;e.s(["Z",0,a,"s",0,i],400171)},290516,e=>{var t=e.i(159080);let r=t.f`
  mutation CreateCompliance($data: jsonb!) {
    createCompliance(data: $data) {
      id
      message
    }
  }
`,i=t.f`
  mutation UpdateCompliance($data: jsonb!) {
    updateCompliance(data: $data) {
      message
    }
  }
`;e.s(["R",0,r,"m",0,i])},796460,e=>{var t=e.i(391398),r=e.i(813843),i=e.i(280445),a=e.i(587369),s=e.i(191788),n=e.i(115871),o=e.i(734787),l=e.i(432171),u=e.i(549384),d=e.i(529292),c=e.i(522507);let m=e=>{let{children:r,popover:i,onOpen:a,clickOnly:n}=e,[o,l]=(0,s.useState)(null),u=!!o,d=u?"ribbon-select-button-popover":void 0;return(0,t.jsxs)("div",{children:[(0,t.jsx)(f,{"aria-describedby":d,onClick:e=>{n||l(e.currentTarget),a&&a(e)},children:r}),(0,t.jsx)(c.U,{id:d,open:u,anchorEl:o,onClose:()=>{l(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},sx:{zIndex:1200},children:i})]})},f=(0,i.f)("button")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",border:"none",borderRadius:"4px",color:t.palette.white.main,backgroundColor:"#1394FF",fontSize:"0.875rem",lineHeight:1.25,padding:"2px 4px 2px 4px",cursor:"pointer","&:hover":{backgroundColor:(0,d.J)("#1394FF",.1)}}});var p=e.i(411331);e.i(981683);var h=e.i(104868),b=e.i(328186),y=e.i(738251),v=e.i(800884),x=e.i(76381),g=e.i(715007),j=e.i(34121),q=e.i(519088),I=e.i(624841);let T=e=>{let{jobs:i,hasMore:s,handleFetchMore:o=()=>{},onItemClick:l}=e,u=(0,a.f)("(max-width:600px)");return(0,t.jsx)(y.f,{id:"scrollableDiv",sx:{display:"flex",flexDirection:"column",pt:1,overflowY:"scroll",maxHeight:u?"80vh":"50vh",width:"200px"},children:(0,t.jsx)(q.f,{dataLength:i.length,next:o,hasMore:s,loader:(0,t.jsx)(x.f,{color:"secondary"}),scrollableTarget:"scrollableDiv",children:i.map(e=>(0,t.jsx)(g.f,{component:"div",disablePadding:!0,onClick:t=>l(t,e),children:(0,t.jsxs)(j.f,{sx:{flexDirection:"column",alignItems:"flex-start"},children:[(0,t.jsxs)(r.f,{direction:"row",width:"100%",spacing:2,children:[(0,t.jsx)(v.f,{label:e.number,color:"primary",size:"small",sx:{borderRadius:1}}),(0,t.jsx)(I.f,{value:e.status,sx:{borderRadius:1}})]}),e.title&&(0,t.jsx)(n.f,{mt:1,children:e.title})," "]})},e.number))})})};var A=e.i(506656),w=e.i(104050),C=e.i(362537),H=e.i(119068),S=e.i(322135),_=e.i(889231),E=e.i(879436);let k=e=>{let{expanded:i,handleOpen:d,locationId:c,supplierId:f}=e,y=(0,p.f)(),[v,x]=(0,s.useState)(!1),g=(0,a.f)("(max-width: 600px)"),j=(0,s.useMemo)(()=>(0,C.default)().toISOString(),[]),{data:{nextJob:q}={nextJob:[]}}=(0,l.t)(b.O,{skip:!i||!c,variables:{locationId:c,now:j}}),{data:{total:I,overdueTotal:k}={}}=(0,l.t)(c?b.B:b.Z,{skip:!i,variables:{type:c?"location":f?"supplier":null,locationId:c,supplierId:f,now:j}}),{data:{totals:{ltmTotal:F,ytdTotal:N}}={totals:{ltmTotal:0,ytdTotal:0}}}=(0,l.t)(b.q,{skip:!i||!c,variables:{locationId:c}}),D=(I?.aggregate?.count||0)-(k?.aggregate?.count||0),O=(0,A.f)(D/(I?.aggregate?.count||1)*100,2),U=(0,w.f)(O);return(0,t.jsxs)(u.f,{icon:null,expanded:i,onOpen:d,height:"214px",spacing:3,children:[!!c&&(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:$.mobileItem(g),children:[(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:"Next Job:"}),(0,t.jsxs)(m,{popover:(0,t.jsx)(T,{onItemClick:(e,r)=>{let{id:i}=r;e.stopPropagation(),y.show({content:(0,t.jsx)(h.f,{jobId:i,toggleShow:y.close}),submit:!1,title:"Job details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},jobs:q,hasMore:!1}),children:[q[0]?.title||"N/A",(0,t.jsx)(o.default,{sx:{height:"14px"}})]})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:$.mobileItem(g),children:[(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:"Compliance items:"}),(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:I?.aggregate?.count||"N/A"})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:$.mobileItem(g),children:[(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:"Overdue items:"}),(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:k?.aggregate?.count||"N/A"})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:$.mobileItem(g),children:[(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:"Compliance score:"}),(0,t.jsxs)(n.f,{fontWeight:700,mr:1,children:[O,"%"]}),(0,t.jsx)(R,{bgcolor:`${U}.main`}),(0,t.jsx)(S.f,{arrow:!0,open:v,onClose:()=>x(!1),disableFocusListener:!0,disableTouchListener:!0,title:`The compliance score represents the percentage of compliance items that are still valid,
             calculated as the number of items for which the expiry date has not been reached divided
             by the total number of compliance items for the location.`,children:(0,t.jsx)(H.default,{onClick:()=>x(!v),onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),sx:{cursor:"pointer"}})})]}),!!c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:$.mobileItem(g),children:[(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:"Compliance Spend (Net)(LTM):"}),(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:(0,E.f)(F)}),(0,t.jsx)(S.f,{title:(0,t.jsxs)(t.Fragment,{children:["This amount reflects the amount that has been invoiced for compliance-related items in the last 12 months. If you require more detailed information use the"," ",(0,t.jsx)(_.f,{href:"/dashboard/data/reports",color:"secondary",children:"Reports"})," ","functionality"]}),children:(0,t.jsx)(H.default,{})})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:$.mobileItem(g),children:[(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:"Compliance Spend (Net)(YTD):"}),(0,t.jsx)(n.f,{fontWeight:700,mr:1,children:(0,E.f)(N)}),(0,t.jsx)(S.f,{title:(0,t.jsxs)(t.Fragment,{children:["This amount reflects the amount that has been invoiced for compliance-related items in the year to date. If you require more detailed information use the"," ",(0,t.jsx)(_.f,{href:"/dashboard/data/reports",color:"secondary",children:"Reports"})," ","functionality"]}),children:(0,t.jsx)(H.default,{})})]})]})]})},$={mobileItem:e=>e?{width:"calc(100vw - 40px)",padding:"6px",borderBottom:"1px solid #FFFFFF"}:{}},R=(0,i.f)(y.f)(()=>({width:"12px",height:"12px",borderRadius:"6px",marginRight:"8px"})),F=(0,i.f)(r.f)(()=>({position:"relative",color:"#BEEFFF"}));e.s(["f",0,e=>{let{locationId:r,supplierId:i,defaultExpanded:n="info"}=e,[o,l]=(0,s.useState)(n),u=(0,a.f)("(max-width: 600px)");return(0,t.jsx)(F,{direction:"row",justifyContent:u?"flex-start":"flex-end",width:"100%",spacing:1,children:(0,t.jsx)(k,{expanded:"info"===o,handleOpen:()=>{l("info")},locationId:r,supplierId:i})})}],796460)},127342,e=>{var t=e.i(191788),r=e.i(511667),i=e.i(21557);e.s(["f",0,e=>{let a=(0,i.f)(),[s,{isLoading:n}]=(0,r.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{a.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return s({body:t,pathParams:{offerId:e}})},[s,e]),isLoading:n}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,r=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let r=t.timeHold;if(!r?.scheduledAt)return null;let i=Number(r.supplierUserId);return Number.isFinite(i)?{...r,supplierUserId:i}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let r=Number(e.heldSupplierUserId);if(Number.isFinite(r))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:r,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return r(e.meta)}return r(e)}])},534971,699737,468156,441353,e=>{let t=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}];e.s(["v",0,"Default rates must be set for this service before they can be specified for an engineer","e",0,{status:"active",service:void 0,coverageAreas:[],minimumDuration:0,minimumIncrement:0,includeTravelTime:!1,normal:{firstHour:null,subsequentHours:null},ooh:{firstHour:null,subsequentHours:null},premium:{firstHour:null,subsequentHours:null},oohTimes:{},premiumTimes:{},days:[],engineer:null},"s",0,[{value:"monday",label:"Monday"},{value:"tuesday",label:"Tuesday"},{value:"wednesday",label:"Wednesday"},{value:"thursday",label:"Thursday"},{value:"friday",label:"Friday"},{value:"saturday",label:"Saturday"},{value:"sunday",label:"Sunday"}],"P",0,t],534971);var r=e.i(391398),i=e.i(740790),a=e.i(813843),s=e.i(322135),n=e.i(115871),o=e.i(250990),l=e.i(422411),u=e.i(362537);let d=e=>{let t=(0,u.default)(e,"HH:mm",!0);return t.isValid()?t:null};e.s(["f",0,e=>{let{control:t,error:u,name:c,day:m}=e,f=e=>e?d(e):null,p=e=>e?.isValid()?e.format("HH:mm"):null,h="Are you sure you mean 23:59? The last minute of the day will not be included — use 00:00 to run the window to midnight.";return(0,r.jsxs)(i.f,{container:!0,children:[(0,r.jsx)(i.f,{item:!0,xs:2,children:(0,r.jsx)(n.f,{children:m})}),(0,r.jsx)(i.f,{item:!0,xs:10,children:(0,r.jsxs)(a.f,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,r.jsx)(l.e,{control:t,name:`${c}.firstFrom`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,r.jsx)(n.f,{children:"to"}),(0,r.jsx)(l.e,{control:t,name:`${c}.firstTo`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(s.f,{open:"23:59"===t,title:h,arrow:!0,placement:"top",children:(0,r.jsx)("span",{children:(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}}),(0,r.jsx)(n.f,{children:"and"}),(0,r.jsx)(l.e,{control:t,name:`${c}.secondFrom`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,r.jsx)(n.f,{children:"to"}),(0,r.jsx)(l.e,{control:t,name:`${c}.secondTo`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(s.f,{open:"23:59"===t,title:h,arrow:!0,placement:"top",children:(0,r.jsx)("span",{children:(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}})]})})]})}],699737);var c=e.i(280445),m=e.i(498681);let f=(0,c.f)(n.f)(e=>{let{theme:t}=e;return{color:t.palette.text.secondary,backgroundColor:t.palette.action.hover,borderRadius:t.shape.borderRadius,padding:t.spacing(.5,1)}});e.s(["f",0,()=>{let e,t,i=(e=(0,m.f)(),t=e?.admin?.timeZone,{value:"string"==typeof t?.value?t.value:"Europe/London",label:"string"==typeof t?.label?t.label:"Europe/London +00:00"});return(0,r.jsxs)(f,{variant:"body2",children:["Times are in the account timezone (",i.label,")"]})}],468156);var p=e.i(426778);let h=p.x().nullable().test("time-format","Invalid time",e=>!e||null!==d(e)),b=(e,t)=>{let r=d(t);return r&&"00:00"===t&&e&&"00:00"!==e?r.add(1,"day"):r},y=(e,t)=>!!(e.from&&e.to&&t.from&&t.to&&e.from.isBefore(t.to)&&t.from.isBefore(e.to)),v=p.t().shape({firstFrom:h,firstTo:h,secondFrom:h,secondTo:h}),x=p.t().shape({monday:v.nullable(),tuesday:v.nullable(),wednesday:v.nullable(),thursday:v.nullable(),friday:v.nullable(),saturday:v.nullable(),sunday:v.nullable()}),g=p.t().shape({status:p.x().oneOf(t.map(e=>e.value)).required("Status is required"),service:p.t({label:p.x().required("Service is required"),value:p.H().integer().required("Service is required")}).required("Service is required").typeError("Service is required"),priority:p.k().of(p.t({label:p.x().required("Priority is required"),value:p.H().integer().required("Priority is required")}).required("Priority is required").typeError("Priority is required")).required("Priority is required").typeError("Priority is required"),minimumDuration:p.H().integer().min(0).required("Minimum duration is required").typeError("Minimum duration is required"),minimumIncrement:p.H().integer().min(0).required("Minimum increment is required").typeError("Minimum increment is required"),includeTravelTime:p.g().default(!1),normal:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),ooh:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),premium:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),oohTimes:x,premiumTimes:x,days:p.k().of(p.c())}),j=(e,t)=>{let{oohTimes:r,premiumTimes:i}=e;if(!r||!i)return!0;let a=Object.keys(r),s=Object.keys(i);for(let e of a)if(s.includes(e)){let a=r[e],s=i[e];if(a||s){let r=a?.firstFrom?d(a.firstFrom):null,i=a?.firstTo?b(a.firstFrom,a.firstTo):null,n=a?.secondFrom?d(a.secondFrom):null,o=a?.secondTo?b(a.secondFrom,a.secondTo):null,l=s?.firstFrom?d(s.firstFrom):null,u=s?.firstTo?b(s.firstFrom,s.firstTo):null,c=s?.secondFrom?d(s.secondFrom):null,m=s?.secondTo?b(s.secondFrom,s.secondTo):null;if((r||i)&&!(r&&i)||(n||o)&&!(n&&o))return t({path:`oohTimes.${e}`,message:"Incomplete time range"});if((l||u)&&!(l&&u)||(c||m)&&!(c&&m))return t({path:`premiumTimes.${e}`,message:"Incomplete time range"});if(r&&i&&r.isAfter(i)||n&&o&&n.isAfter(o))return t({path:`oohTimes.${e}`,message:"Invalid time range"});if(l&&u&&l.isAfter(u)||c&&m&&c.isAfter(m))return t({path:`premiumTimes.${e}`,message:"Invalid time range"});let f={from:r,to:i},p={from:n,to:o},h={from:l,to:u},v={from:c,to:m};if(y(f,p))return t({path:`oohTimes.${e}`,message:"hours overlap"});if(y(h,v))return t({path:`premiumTimes.${e}`,message:"hours overlap"});if([f,p].some(e=>[h,v].some(t=>y(e,t))))return t({path:`oohTimes.${e}`,message:"hours overlap"})}}return!0},q=p.t().shape({scheduleName:p.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(g).test("no-overlap","hours overlap",function(e){return j(e,this.createError)}),I=p.t().shape({scheduleName:p.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(g).test("no-overlap","hours overlap",function(e){return j(e,this.createError)}),T=p.t().shape({schedule:p.t().shape({label:p.x().required("Schedule is required"),value:p.H().integer().required("Schedule is required"),inputValue:p.x().nullable()}).required("Schedule is required").typeError("Schedule is required"),location:p.k().of(p.t({label:p.x().required("Location is required"),value:p.H().integer().required("Location is required")})).required("Location is required").typeError("Location is required")}).concat(g).test("no-overlap","hours overlap",function(e){return j(e,this.createError)}),A=p.t().shape({scheduleName:p.x().when("$isEdit",{is:!0,then:e=>e.required("Schedule name is required"),otherwise:e=>e.nullable()}),schedule:p.t().when("$isEdit",{is:!1,then:e=>e.shape({label:p.x().required("Schedule is required"),value:p.H().integer().required("Schedule is required"),inputValue:p.x().nullable(),fromSupplierDefaults:p.g()}).required("Schedule is required").typeError("Schedule is required"),otherwise:e=>e.nullable()}),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required").typeError("Coverage areas are required"),engineer:p.t({label:p.x().required(),value:p.H().integer().required()}).nullable()}).concat(g).test("no-overlap","hours overlap",function(e){return j(e,this.createError)});e.s(["h",0,T,"x",0,I,"M",0,A,"_",0,q],441353)},928382,37332,e=>{var t=e.i(391398),r=e.i(799083),i=e.i(152078),a=e.i(813843),s=e.i(422411),n=e.i(813762);e.s(["f",0,e=>{let{control:o}=e;return(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",spacing:.5,mt:1,children:[(0,t.jsx)(s.e,{name:"includeTravelTime",control:o,render:e=>{let{value:a,onChange:s}=e;return(0,t.jsx)(i.f,{control:(0,t.jsx)(r.f,{color:"secondary",checked:!!a,onChange:e=>s(e.target.checked)}),label:"Include travel time"})}}),(0,t.jsx)(n.p,{title:"Selecting this will mean that travel time is included in calculating job duration for charging purposes.",iconSx:{color:"gray",fontSize:18}})]})}],928382);var o=e.i(98926),l=e.i(511667),u=e.i(21557);e.s(["f",0,e=>{let{refetchQueries:t,onSaved:r}=e,i=(0,o.f)(),a=(0,u.f)(),s=e=>a.show({content:e,severity:"error"}),n=e=>s(e.message||"Unable to save the service schedule"),d=e=>()=>{a.show({content:e,severity:"success"}),i.refetchQueries({include:t}),r()},[c,{isLoading:m}]=(0,l.f)("/service-schedule",{queryKey:"create-service-schedule",method:"POST",onError:n,onCompleted:d("Service schedule was created")}),[f,{isLoading:p}]=(0,l.f)("/service-schedule/:serviceScheduleId",{queryKey:"update-service-schedule",method:"PUT",onError:n,onCompleted:d("Service schedule was updated")});return{createSchedule:e=>c({body:e}),updateSchedule:async(e,t)=>e?f({pathParams:{serviceScheduleId:e},body:t}):void s("Service schedule not found"),isSaving:m||p}}],37332)},639907,e=>{e.s(["b",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"m",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"M",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[],engineer:e.userId?{value:e.userId,label:e.user?.fullName??"Unknown engineer"}:null}},"T",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}}])},933129,e=>{e.s(["l",0,e=>{let{form:t,entityId:r}=e;return{entity:"Customer",entityId:r,serviceId:t.service.value,schedule:t.schedule.label,status:t.status,priority:t.priority.map(e=>e.value),minimumDuration:t.minimumDuration,minimumIncrement:t.minimumIncrement,includeTravelTime:t.includeTravelTime??!1,location:t.location?.map(e=>e.value),normal:{firstHour:t.normal.firstHour,subsequentHours:t.normal.subsequentHours},ooh:{firstHour:t.ooh.firstHour,subsequentHours:t.ooh.subsequentHours},premium:{firstHour:t.premium.firstHour,subsequentHours:t.premium.subsequentHours},oohTimes:t.oohTimes,premiumTimes:t.premiumTimes,days:t.days,parentId:t.schedule.value}},"Z",0,e=>{let{form:t,entityId:r}=e;return{entity:"Location",entityId:r,serviceId:t.service.value,schedule:t.scheduleName,status:t.status,priority:t.priority.map(e=>e.value),minimumDuration:t.minimumDuration,minimumIncrement:t.minimumIncrement,includeTravelTime:t.includeTravelTime??!1,coverageAreas:t.coverageAreas?.length?t.coverageAreas.map(e=>e.id):null,normal:{firstHour:t.normal.firstHour,subsequentHours:t.normal.subsequentHours},ooh:{firstHour:t.ooh.firstHour,subsequentHours:t.ooh.subsequentHours},premium:{firstHour:t.premium.firstHour,subsequentHours:t.premium.subsequentHours},oohTimes:t.oohTimes,premiumTimes:t.premiumTimes,days:t.days}},"d",0,e=>{let t,{form:r,entityId:i}=e,a=null;return!r.schedule?.inputValue&&r.schedule?.value&&(t=r.schedule.label,a=r.schedule.fromSupplierDefaults?null:r.schedule.value),r.schedule?.inputValue&&(t=r.schedule.inputValue),r.scheduleName&&(t=r.scheduleName),{entity:"Supplier",entityId:i,serviceId:r.service.value,schedule:t,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,coverageAreas:r.coverageAreas?.length?r.coverageAreas.map(e=>e.id):null,normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days,parentId:a,userId:r.engineer?.value??null}},"_",0,e=>{let{form:t,entity:r,entityId:i}=e;return{entity:r,entityId:i,serviceId:t.service.value,schedule:t.scheduleName,status:t.status,priority:t.priority.map(e=>e.value),minimumDuration:t.minimumDuration,minimumIncrement:t.minimumIncrement,includeTravelTime:t.includeTravelTime??!1,coverageAreas:t.coverageAreas?.length?t.coverageAreas.map(e=>e.id):null,normal:{firstHour:t.normal.firstHour,subsequentHours:t.normal.subsequentHours},ooh:{firstHour:t.ooh.firstHour,subsequentHours:t.ooh.subsequentHours},premium:{firstHour:t.premium.firstHour,subsequentHours:t.premium.subsequentHours},oohTimes:t.oohTimes,premiumTimes:t.premiumTimes,days:t.days}}])},335453,e=>{var t=e.i(391398),r=e.i(755548),i=e.i(683125),a=e.i(88152),s=e.i(813843),n=e.i(652148),o=e.i(587369),l=e.i(691567),u=e.i(422411),d=e.i(514707),c=e.i(10945),m=e.i(849091),f=e.i(345837),p=e.i(824451),h=e.i(851123),b=e.i(877341),y=e.i(191788);let v={search:"",status:"active",engineer:null},x=()=>{},g={},j=()=>{},q=e=>{let{open:a=!1,close:l=x,initialFilters:d=g,setFilters:q=j,supplierAccountId:T}=e,A=(0,o.f)("(max-width: 600px)"),[w,C]=(0,y.useState)(""),[H,S]=(0,c.f)({key:T?`service_schedule_${d.filterType}_${T}`:`service_schedule_${d.filterType}`,initialValue:d}),[_,{data:{items:E}={items:[]},loading:k}]=(0,b.f)(h.P,{variables:{accountId:T,q:""!==w?`%${w}%`:null,limit:50,offset:0}}),{control:$,handleSubmit:R,reset:F,getValues:N}=(0,u.G)({defaultValues:{statusInactive:!1,...v,...d,...H}});return(0,t.jsx)(i.f,{keepMounted:!0,open:a,onClose:l,children:(0,t.jsx)("form",{onSubmit:R(e=>{try{let t={q:e.search?`%${e.search}%`:null,status:e.statusInactive?"inactive":"active",engineerId:e.engineer?.value??null};q(e=>({...e,...t}));let r=N();S(e=>({...e,...r}))}finally{l()}}),children:(0,t.jsxs)(I,{is600pxOrLess:A,children:[(0,t.jsx)(s.f,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:(0,t.jsx)(u.e,{control:$,name:"search",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(n.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search schedule or service",value:r,onChange:i})}})}),T&&(0,t.jsx)(s.f,{mt:2,children:(0,t.jsx)(u.e,{control:$,name:"engineer",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(p.f,{fullWidth:!0,color:"secondary",variant:"standard",label:"Engineer",placeholder:"All engineers",loading:k,options:E,value:r||null,onChange:(e,t)=>i(t),onOpen:()=>_(),onSearchChange:C})}})}),(0,t.jsx)(s.f,{mt:2,children:(0,t.jsx)(u.e,{name:"statusInactive",control:$,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(f.f,{control:(0,t.jsx)(m.f,{color:"secondary",checked:r,onChange:e=>i(e.target.checked)}),label:"Show inactive services"})}})}),(0,t.jsxs)(s.f,{width:"100%",direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,mt:3,children:[(0,t.jsx)(r.f,{variant:"contained",color:"danger",onClick:()=>{let e;F(e={...v,...d}),S(e),q({status:"active"}),l()},children:"Cancel"}),(0,t.jsx)(r.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})};q.propTypes={open:l.default.bool,close:l.default.func,initialFilters:l.default.object,setFilters:l.default.func};let I=(0,d.f)(a.f)(e=>{let{is600pxOrLess:t}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:t?"100vw":"500px",height:"auto",padding:"16px 27px 16px 27px",borderRadius:"8px"}});e.s(["f",0,q])},1893,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(776204),a=e.i(432171),s=e.i(362537),n=e.i(936641),o=e.i(755548),l=e.i(800884),u=e.i(76381),d=e.i(986351),c=e.i(740790),m=e.i(813843),f=e.i(115871),p=e.i(587369),h=e.i(422411),b=e.i(159080);let y=b.f`
  query GetCustomerTaskDetails($id: Int!) {
    task: Task_by_pk(id: $id) {
      id
      status
      priority
      statusLog
      meta
      relatedLinks
      title
      content
      editorState
      dueDate
      createdAt
      updatedAt
      adminId
      archived
      userId
      assignedAccountId
      customerId
      supplierId
      locationId
      completion_by_customer
      assignedUser: AssignedUser {
        id
        fullName
      }
      customer: Customer {
        id
        name
      }
      jobId
      workflowId
      form: FormSubmissions(
        where: { entity: { _eq: "Task" } }
        order_by: { updatedAt: desc }
        limit: 1
      ) {
        id
        formId
        formFields
        submissionData
        entity
        entityId
        type
        updatedAt
        pdfGenerationStatus
        pdfGenerationId
        user: FormSubmissionsUser {
          id
          fullName
        }
        form: FormSubmissionsForm {
          name
          status
          description
          settings
          updatedAt
        }
      }
      job: Job {
        id
        number
        type
        quoted

        customer: Customer {
          id
          name
        }

        supplier: Supplier {
          id
          name
        }

        location: Location {
          id
          name
        }
      }
    }
  }
`;var v=e.i(230512),x=e.i(428424),g=e.i(824451),j=e.i(714119),q=e.i(594301),I=e.i(21557),T=e.i(411331),A=e.i(498681),w=e.i(511667),C=e.i(974261),H=e.i(299796),S=e.i(53182),_=e.i(382161),E=e.i(77052),k=e.i(185758),$=e.i(556918);let R={fontFamily:e.i(494575).f.THEME_TYPOGRAPHY.newFont},F=e=>{let{open:r,onClose:i,onConfirm:a,loading:s}=e;return(0,t.jsxs)(_.f,{open:r,onClose:i,PaperProps:{sx:R},children:[(0,t.jsx)($.f,{sx:R,children:"Mark Completed"}),(0,t.jsx)(k.f,{children:(0,t.jsx)(f.f,{sx:R,children:"Mark this task complete? You won't be able to undo this."})}),(0,t.jsxs)(E.f,{children:[(0,t.jsx)(o.f,{variant:"contained",color:"danger",onClick:i,children:"Cancel"}),(0,t.jsx)(o.f,{color:"secondary",variant:"contained",onClick:a,disabled:s,children:"Confirm"})]})]})};var N=e.i(889231);let D=x.j.filter(e=>e.value!==x.k.DONE&&e.value!==x.k.BLOCKED);e.s(["f",0,e=>{let{id:b,onUpdated:_}=e,E=(0,p.f)("(max-width: 900px)"),{user:k}=(0,q.f)(),$=(0,I.f)(),R=(0,T.f)(),O=(0,A.f)(),U=O?.admin?.modules?.formBuilder||!1,[P,L]=(0,r.useState)(!1),{data:{task:M}={task:null},loading:V,refetch:Y}=(0,a.t)(y,{variables:{id:b}}),{control:z,reset:W}=(0,h.G)({defaultValues:{status:x.k.NEW}});(0,r.useEffect)(()=>{M?.status&&W({status:M.status})},[M?.status,W]);let G=(0,r.useMemo)(()=>M?.form?.[0],[M?.form]),[J,{loading:B}]=(0,i.f)(v.Q,{refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{$.show({content:"Task updated successfully",severity:"success"}),_?.()},onError:()=>{$.show({content:"Failed to update task",severity:"error"})}}),[Q,{isLoading:K}]=(0,w.f)(`/task/${b}`,{queryKey:`complete-customer-task-${b}`,method:"PUT",baseUrl:C.M,params:{scope:"this"},refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{$.show({content:"Task completed successfully",severity:"success"}),_?.()},onError:e=>{$.show({content:e.message||"Failed to complete task",severity:"error"})}}),X=B||K,Z=(0,r.useCallback)(()=>{let e=Array.isArray(G?.formFields)?G.formFields:[],t=G?.submissionData;return!e.length||!!t&&e.filter(e=>e?.required).every(e=>{var r;let i=e?.stateName;return!i||null!=(r=t[i])&&("string"==typeof r?r.trim().length>0:Array.isArray(r)?r.length>0:"object"!=typeof r||Object.keys(r).length>0)})},[G?.formFields,G?.submissionData])(),ee=!!Array.isArray(G?.formFields)&&G.formFields.some(e=>e?.required),et=async()=>{await Q({body:{status:x.k.DONE,completion_by_customer:!0}}),L(!1),R.close()},er=(0,r.useMemo)(()=>{if(!M)return[];let e=[];return M.job?.number&&e.push({label:`${(0,H.f)(M.job.type)} ${"quote"!==M.job.type&&M.job.quoted?"Q":""} ${M.job.number}`.trim(),href:`${C.r.portalUrl}/dashboard/issues/view?id=${M.job.number}`}),e},[M]);if(V)return(0,t.jsx)(m.f,{width:"100%",justifyContent:"center",alignItems:"center",sx:{minHeight:200},children:(0,t.jsx)(u.f,{color:"secondary"})});if(!M)return(0,t.jsx)(n.f,{severity:"error",children:"Task is not found"});let ei=x.j.find(e=>e.value===M.status)?.label??M.status;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.f,{container:!0,spacing:3,sx:{minHeight:"calc(100vh - 128px)"},children:[(0,t.jsx)(c.f,{item:!0,xs:12,md:5,children:(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(f.f,{variant:"h6",fontWeight:700,children:M.title}),M.content&&(0,t.jsx)(f.f,{variant:"body2",color:"text.secondary",children:M.content}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Due date:"}),(0,t.jsx)(f.f,{fontWeight:600,children:M.dueDate?(0,s.default)(M.dueDate).format("Do MMM YYYY"):"—"})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Status:"}),(0,t.jsx)(l.f,{size:"small",label:ei})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Assignee:"}),(0,t.jsx)(f.f,{fontWeight:600,children:M.assignedUser?.fullName??"—"})]}),er.length>0&&(0,t.jsxs)(m.f,{spacing:.5,children:[(0,t.jsx)(f.f,{children:"Linked entity:"}),er.map(e=>(0,t.jsx)(N.f,{href:e.href,children:e.label},e.href))]}),U&&G?.id&&(0,t.jsx)(S.f,{taskId:b,form:G,onFormUpdated:()=>Y()}),(0,t.jsx)(d.f,{}),(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(h.e,{control:z,name:"status",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(g.f,{label:"Status",variant:"standard",color:"secondary",fullWidth:!0,disableClearable:!0,disabled:X,value:D.find(e=>e.value===r)??D[0],options:D,onChange:(e,t)=>{t&&(i(t.value),J({variables:{id:b,object:{status:t.value}}}))}})}}),(0,t.jsx)(o.f,{variant:"contained",color:"secondary",disabled:!Z||M.status===x.k.DONE||X,onClick:()=>L(!0),sx:{alignSelf:"flex-start"},children:"Mark Completed"})]}),ee&&!Z&&(0,t.jsx)(f.f,{variant:"body2",color:"error",children:"Complete the required form fields before marking this task done."})]})}),!E&&(0,t.jsx)(c.f,{item:!0,xs:12,md:.5,display:"flex",justifyContent:"center",children:(0,t.jsx)(d.f,{orientation:"vertical"})}),(0,t.jsx)(c.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(j.f,{elevation:0,maxHeight:"800px",title:"Activity",id:b,adminId:k.adminId,scope:"task",expanded:!0,hideExpandIcon:!0})})]}),(0,t.jsx)(F,{open:P,onClose:()=>L(!1),onConfirm:et,loading:X})]})}],1893)},868450,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),s=e.r(391398);r.default=(0,a.default)((0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"AccessTimeRounded")},546924,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),s=e.r(391398);r.default=(0,a.default)((0,s.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutlineRounded")},119068,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),s=e.r(391398);r.default=(0,a.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z"}),"InfoRounded")},891723,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),s=e.r(391398);r.default=(0,a.default)((0,s.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},25932,715479,e=>{var t=e.i(75907),r=e.i(191788),i=e.i(691567),a=e.i(358024),s=e.i(138504),n=e.i(460997),o=e.i(33424),l=e.i(280445),u=e.i(226458),d=e.i(5366),c=e.i(754344),m=e.i(243239),f=e.i(391398);let p=["props","ref"],h=(0,l.f)(c.V)(e=>{let{theme:t}=e;return{overflow:"hidden",minWidth:m._,backgroundColor:(t.vars||t).palette.background.paper}});var b=e.i(685448),y=e.i(454311);let v=r.forwardRef(function(e,r){let i=(0,a.f)(e,"MuiStaticDatePicker"),l=i.displayStaticWrapperAs??"mobile",c=(0,t.f)({day:s.f,month:s.f,year:s.f},i.viewRenderers),{renderPicker:m}=(e=>{let{props:r,ref:i}=e,a=(0,n.f)(e,p),{localeText:s,slots:l,slotProps:c,className:m,sx:b,displayStaticWrapperAs:y,autoFocus:v}=r,{layoutProps:x,renderCurrentView:g}=(0,u.f)((0,t.f)({},a,{props:r,autoFocusView:v??!1,additionalViewProps:{},wrapperVariant:y})),j=l?.layout??h;return{renderPicker:()=>(0,f.jsx)(d.N,{localeText:s,children:(0,f.jsx)(j,(0,t.f)({},x,c?.layout,{slots:l,slotProps:c,sx:[...Array.isArray(b)?b:[b],...Array.isArray(c?.layout?.sx)?c.layout.sx:[c?.layout?.sx]],className:(0,o.f)(m,c?.layout?.className),ref:i,children:g()}))})}})({props:(0,t.f)({},i,{viewRenderers:c,displayStaticWrapperAs:l,yearsPerRow:i.yearsPerRow??("mobile"===l?3:4),slotProps:(0,t.f)({},i.slotProps,{toolbar:(0,t.f)({hidden:"desktop"===l},i.slotProps?.toolbar)})}),valueManager:y.X,valueType:"date",validator:b.f,ref:r});return m()});v.propTypes={autoFocus:i.default.bool,className:i.default.string,dayOfWeekFormatter:i.default.func,defaultValue:i.default.object,disabled:i.default.bool,disableFuture:i.default.bool,disableHighlightToday:i.default.bool,disablePast:i.default.bool,displayStaticWrapperAs:i.default.oneOf(["desktop","mobile"]),displayWeekNumber:i.default.bool,fixedWeekNumber:i.default.number,loading:i.default.bool,localeText:i.default.object,maxDate:i.default.object,minDate:i.default.object,monthsPerRow:i.default.oneOf([3,4]),onAccept:i.default.func,onChange:i.default.func,onClose:i.default.func,onError:i.default.func,onMonthChange:i.default.func,onViewChange:i.default.func,onYearChange:i.default.func,openTo:i.default.oneOf(["day","month","year"]),orientation:i.default.oneOf(["landscape","portrait"]),readOnly:i.default.bool,reduceAnimations:i.default.bool,referenceDate:i.default.object,renderLoading:i.default.func,shouldDisableDate:i.default.func,shouldDisableMonth:i.default.func,shouldDisableYear:i.default.func,showDaysOutsideCurrentMonth:i.default.bool,slotProps:i.default.object,slots:i.default.object,sx:i.default.oneOfType([i.default.arrayOf(i.default.oneOfType([i.default.func,i.default.object,i.default.bool])),i.default.func,i.default.object]),timezone:i.default.string,value:i.default.object,view:i.default.oneOf(["day","month","year"]),viewRenderers:i.default.shape({day:i.default.func,month:i.default.func,year:i.default.func}),views:i.default.arrayOf(i.default.oneOf(["day","month","year"]).isRequired),yearsOrder:i.default.oneOf(["asc","desc"]),yearsPerRow:i.default.oneOf([3,4])},e.s(["f",0,v],25932);var x=e.i(800884),g=e.i(813843);let j=()=>{},q=e=>{let{filtersChips:t,onRemove:r=j}=e;return(0,f.jsx)(g.f,{direction:"row",sx:{overflowX:"auto"},alignItems:"center",spacing:1,children:t.map(e=>(0,f.jsx)(x.f,{label:e.label,onDelete:()=>r(e.key)},e.key))})};q.propTypes={filtersChips:i.default.array,onRemove:i.default.func,filters:i.default.array},e.s(["f",0,q],715479)}])})();