(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[913758,e=>{var t=e.i(159080),r=e.i(987123);let i=t.f`
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
        meta
        heldSupplierUserId
        heldScheduledAt
        heldAt
        heldByUserId
      }
    }
  }
  ${r.a}
  ${r.S}
`,n=t.f`
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
`,a=t.f`
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
`,s=t.f`
  mutation UpdateCalendarJobAssignment(
    $id: Int!
    $changes: Job_set_input!
    $timing: [JobTiming_insert_input!]!
    $cancelOtherOffers: Boolean!
    $acceptedSupplierOfferId: Int
  ) {
    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      supplierId
      supplierUserId
      scheduledAt
      timingStart
    }
    insert_JobTiming(objects: $timing) {
      affected_rows
    }
    update_SupplierOffer(
      where: {
        jobId: { _eq: $id }
        id: { _neq: $acceptedSupplierOfferId }
        status: { _neq: "cancelled" }
      }
      _set: { status: "cancelled" }
    ) @include(if: $cancelOtherOffers) {
      affected_rows
    }
  }
`,o=t.f`
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
`,l=t.f`
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
      meta
      heldSupplierUserId
      heldScheduledAt
      heldAt
      heldByUserId
    }
  }
`,u=t.f`
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
`,d=t.f`
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
`,c=t.f`
  query GetBlockEventDetails($id: Int!) {
    event: Holiday_by_pk(id: $id) {
      id
      notes
      meta
      startDate
      endDate
    }
  }
`,m=t.f`
  query GetJobEventDetails($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      access
      costCategory
      customerSpendThreshold
      description
      supplierLabourAmount
      supplierMaterialsAmount
      quoteDue
      quoteNumber
      id
      number
      meta
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
`,f=t.f`
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
`;e.s(["x",0,l,"d",0,d,"o",0,c,"G",0,u,"E",0,n,"u",0,a,"P",0,f,"m",0,i,"U",0,m,"b",0,o,"T",0,s])},549384,e=>{var t=e.i(391398),r=e.i(587369),i=e.i(280445),n=e.i(773831),a=e.i(738251),s=e.i(734787);let o=e=>{let{icon:r,children:i,expanded:n,height:o,onOpen:m}=e;return(0,t.jsxs)(t.Fragment,{children:[r&&(0,t.jsxs)(l,{open:n,children:[(0,t.jsx)(u,{onClick:m,children:r}),n&&(0,t.jsx)(c,{children:(0,t.jsx)(s.default,{sx:{height:"32px",width:"32px",color:"#FFFFFF"}})})]}),(0,t.jsx)(a.f,{sx:{height:o||"300px"},children:n&&(0,t.jsx)(d,{open:n,icon:!!r,children:i})})]})},l=(0,i.f)(a.f)(e=>{let{open:t,theme:r}=e;return{display:"flex",alignItems:"center",borderRadius:"10px",flexDirection:"row",height:"fit-content",width:t?"80px":"42px",backgroundColor:r.palette.secondary.main,transition:"width 400ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}}),u=(0,i.f)(a.f)(e=>{let{theme:t}=e;return{display:"flex",width:"42px",height:"42px",borderRadius:"8px",backgroundColor:t.palette.secondary.main,justifyContent:"center",alignItems:"center"}}),d=(0,i.f)(a.f)(e=>{let{open:t,theme:r,icon:i}=e;return{position:"absolute",top:50*!!i,left:i?-2:0,borderRadius:"10px",display:t?"block":"none",marginTop:i?"15px":0,backgroundColor:r.palette.secondary.main}}),c=(0,i.f)(n.f)(e=>{let{open:t}=e;return{height:"36px",width:"36px",transform:t?"rotate(180deg)":"rotate(0deg)",transition:"transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}});var m=e.i(813843),f=e.i(191788),p=e.i(631328);let h=e=>{let{icon:r,children:i,expanded:n=!1,onOpen:a,spacing:o=2}=e,[l,u]=(0,f.useState)(n),[d,c]=(0,f.useState)(!1),[m,h]=(0,f.useState)(!1),j=(0,f.useRef)(null),_=(0,p.y)(l);(0,f.useEffect)(()=>{u(n),c(!1)},[n]);let I=()=>{j.current&&h(j.current.scrollHeight>=69)};return(0,f.useEffect)(()=>(I(),window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)),[i]),(0,t.jsxs)(b,{open:l,children:[(0,t.jsx)(v,{open:l,onClick:()=>{u(!0),a&&a()},children:r}),(0,t.jsxs)(g,{open:l,wasOpen:!!_,more:d,direction:"row",alignItems:"center",justifyContent:"space-between",onTransitionEnd:()=>{I()},children:[(0,t.jsx)(y,{ref:j,open:l,more:d,direction:"row",spacebetween:o,children:i}),m&&(0,t.jsx)(x,{open:d,color:"white",onClick:()=>{c(!d)},children:(0,t.jsx)(s.default,{sx:{height:"32px",width:"32px"}})})]})]})},b=(0,i.f)(a.f)(e=>{let{open:t}=e;return{display:"flex",flexDirection:"row",width:t?"100%":"42px",transition:"width 400ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}}),v=(0,i.f)(a.f)(e=>{let{open:t,theme:r}=e;return{display:t?"none":"flex",width:"42px",height:"42px",borderRadius:"8px",backgroundColor:r.palette.secondary.main,justifyContent:"center",alignItems:"center"}}),g=(0,i.f)(m.f)(e=>{let{open:t,wasOpen:r,more:i,theme:n}=e;return{width:t?"100%":"0px",overflow:"hidden",display:!t&&r?"none":"flex",height:i?"100%":"42px",borderRadius:"8px",backgroundColor:n.palette.secondary.main,transition:`width 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms,
  height 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms`,...t&&{paddingLeft:"8px",paddingRight:"8px"}}}),y=(0,i.f)(m.f)(e=>{let{open:t,more:r,spacebetween:i}=e;return{alignItems:"center",flexWrap:"wrap",height:r?"auto":"42px",overflow:"hidden",...t&&{paddingTop:"10px",paddingBottom:"10px",rowGap:"10px","&>:not(style):not(style)":{marginRight:8*i+"px"}}}}),x=(0,i.f)(n.f)(e=>{let{open:t}=e;return{height:"36px",width:"36px",transform:t?"rotate(180deg)":"rotate(0deg)",transition:"transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 100ms"}});e.s(["f",0,e=>(0,r.f)("(max-width: 600px)")?(0,t.jsx)(o,{...e}):(0,t.jsx)(h,{...e})],549384)},864883,e=>{var t=e.i(890350);let r=[{value:t.T.VERIFIED,label:"Verified",color:"success"},{value:t.T.UNVERIFIED,label:"Unverified",color:"danger"}];e.s(["f",0,r])},694508,2261,e=>{var t,r,i=((t={}).WEEKLY="Weekly",t.MONTHLY="Monthly",t.QUARTERLY="Quarterly",t.EVERY_SIX_MONTH="6 monthly",t.ANNUALLY="Annually",t.EVERY_THREE_YEARS="Every 3 years",t.EVERY_FIVE_YEARS="Every 5 years",t.EVERY_TEN_YEARS="Every 10 years",t),n=((r={}).ACTIVE="active",r.INACTIVE="inactive",r);e.s(["D",()=>i,"N",()=>n],2261);let a=[{label:"Active",value:n.ACTIVE},{label:"Inactive",value:n.INACTIVE}],s=[{label:i.WEEKLY,value:i.WEEKLY},{label:i.MONTHLY,value:i.MONTHLY},{label:i.QUARTERLY,value:i.QUARTERLY},{label:i.EVERY_SIX_MONTH,value:i.EVERY_SIX_MONTH},{label:i.ANNUALLY,value:i.ANNUALLY},{label:i.EVERY_THREE_YEARS,value:i.EVERY_THREE_YEARS},{label:i.EVERY_FIVE_YEARS,value:i.EVERY_FIVE_YEARS},{label:i.EVERY_TEN_YEARS,value:i.EVERY_TEN_YEARS}];e.s(["X",0,s,"d",0,{active:"success",inactive:"danger"},"G",0,a],694508)},690374,e=>{let t=(e,t)=>{let r=document.createElement("a");"string"==typeof r.download?(document.body.appendChild(r),r.download=t,r.href=e,r.click(),document.body.removeChild(r)):location.replace(e)};e.s(["h",0,(e,r)=>{let i=URL.createObjectURL(e);try{t(i,r)}finally{window.setTimeout(()=>URL.revokeObjectURL(i),1e3)}},"f",0,t])},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,r)=>{if(!r)return null;let i=(0,t.default)(r);if(!i.isValid())return null;let n=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),a=i.clone().add(n,"minutes");return{start:i.toISOString(),end:a.toISOString()}}])},562367,e=>{var t=e.i(391398),r=e.i(738251),i=e.i(755548),n=e.i(986351),a=e.i(813843),s=e.i(115871),o=e.i(280445),l=e.i(691567),u=e.i(74633),d=e.i(683125),c=e.i(88152),m=e.i(4142),f=e.i(652148),p=e.i(432171),h=e.i(159080);h.f`
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
`;var v=e.i(191788),g=e.i(98762),y=e.i(890854);let x=e=>{let{open:r,setOpen:i,values:o=[],setValues:l}=e,[u,c]=(0,v.useState)(o||[]),[h,x]=(0,v.useState)("");(0,v.useEffect)(()=>{c(o||[])},[o]);let{initialData:_,ref:I}=(0,g.f)({filters:{}}),{data:{postcodeAreas:q}={postcodeAreas:[],meta:{aggregate:{totalCount:0}}},loading:A}=(0,p.t)(b,{variables:{..._,q:null,limit:null}}),w=(0,v.useMemo)(()=>q.filter(e=>!h||RegExp(`${h}`,"gmi").test(e.name??"")||RegExp(`${h}`,"gmi").test(e.area??"")).map(e=>({id:e.id,name:e.name,area:e.area})),[q,h]),$=(0,v.useCallback)(e=>{e.target.checked?c([...w]):c([])},[w]),C=(0,v.useCallback)(e=>u.some(t=>t.id===e.id),[u]),T=(0,v.useCallback)((e,t)=>{e?c([...u,t]):c(u.filter(e=>e.id!==t.id))},[u,c]),S=w.length>0&&w.every(C),H=(0,v.useMemo)(()=>[{flex:1,field:"name",headerName:"Area",sortable:!1},{flex:1,field:"area",headerName:"Postcode",sortable:!1},{width:80,field:"select",headerName:"",sortable:!1,renderHeader:()=>(0,t.jsx)(m.f,{color:"secondary",checked:S,onChange:$}),renderCell:e=>{let{row:r}=e;return(0,t.jsx)(m.f,{color:"secondary",checked:C(r),onChange:(e,t)=>T(t,r)})}}],[S,T,$,C]);return(0,t.jsx)(d.f,{open:r,onClose:()=>{l(u),i(!1)},children:(0,t.jsx)(j,{children:(0,t.jsxs)(a.f,{children:[(0,t.jsx)(a.f,{direction:"row",justifyContent:"space-between",children:(0,t.jsx)(s.f,{variant:"h6",fontWeight:700,children:"Add postcode area"})}),(0,t.jsx)(n.f,{sx:{mb:.5}}),(0,t.jsx)(f.f,{label:"Search",color:"secondary",variant:"standard",value:h,onChange:e=>x(e.target.value),sx:{mb:1}}),(0,t.jsx)(y.f,{disableRowSelectionOnClick:!0,autoHeight:!1,hideFooter:!1,loading:A,ref:I,columns:H,rows:w,pagination:!0,sortingMode:"client",paginationSize:50,initialState:{pagination:{paginationModel:{pageSize:50}}},containerHeight:"calc(90vh - 120px)"})]})})})},j=(0,o.f)(c.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"500px",height:"90vh",padding:"16px 27px 16px 27px",borderRadius:"8px"})),_=[],I=e=>{let{editable:r,paginationSize:o=5,name:l,values:d=_,setValue:c,fillHeight:m}=e,[f,p]=(0,v.useState)(!1),[h,b]=(0,v.useState)({currentPage:0,pageSize:o,sorting:[]}),[g,y]=(0,v.useState)(o),j=(0,v.useRef)(null);(0,v.useEffect)(()=>{let e=j.current;if(!m||!e)return;let t=new ResizeObserver(()=>{y(Math.max(1,Math.floor((e.clientHeight-56-48)/52)))});return t.observe(e),()=>t.disconnect()},[m]);let I=m?g:o,w=(0,v.useMemo)(()=>d.slice(h.currentPage*I,(h.currentPage+1)*I),[d,h.currentPage,I]),$=(0,v.useMemo)(()=>[{flex:1,minWidth:0,field:"name",headerName:"Area",sortable:!1},{flex:1,minWidth:0,field:"area",headerName:"Postcode",sortable:!1}],[]),C=(0,v.useCallback)(e=>{c(l,e,{shouldDirty:!0})},[l,c]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x,{open:f,setOpen:p,values:d,setValues:C}),(0,t.jsxs)(q,{fillHeight:m,children:[(0,t.jsxs)(a.f,{direction:"row",justifyContent:"space-between",mb:1,flexShrink:0,children:[(0,t.jsx)(s.f,{variant:"h6",fontWeight:700,children:"Coverage areas"}),r&&(0,t.jsx)(i.f,{color:"secondary",variant:"contained",size:"small",onClick:e=>{e.stopPropagation(),p(!0)},children:"Add"})]}),(0,t.jsx)(n.f,{}),(0,t.jsx)(A,{ref:j,fillHeight:m,children:(0,t.jsx)(u.s,{autoHeight:!1,rowSelection:!1,columns:$,rows:w,totalCount:d.length,paginationSize:I,currentPage:h.currentPage,onTableStateChange:b,rowHeight:52,columnHeaderHeight:56,containerHeight:m?"100%":void 0})})]})]})},q=(0,o.f)(a.f,{shouldForwardProp:e=>"fillHeight"!==e})(e=>{let{fillHeight:t}=e;return{...t&&{flex:1,minHeight:0,overflow:"hidden"}}}),A=(0,o.f)(r.f,{shouldForwardProp:e=>"fillHeight"!==e})(e=>{let{fillHeight:t}=e;return{...t&&{flex:1,minHeight:0,overflow:"hidden"}}});I.propTypes={editable:l.default.bool,paginationSize:l.default.number,setValue:l.default.func,values:l.default.array,name:l.default.string,fillHeight:l.default.bool},e.s(["f",0,I],562367)},353069,e=>{var t=e.i(159080);let r=t.f`
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
`;e.s(["J",0,i,"z",0,r])},39059,e=>{var t=e.i(159080);let r=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,i=t.f`
  mutation UpdateUser(
    $id: Int!
    $accountUserId: Int!
    $accountUserChanges: Account_User_set_input
    $accountUserModules: jsonb = {}
    $changes: User_set_input
    $updateAccountUser: Boolean!
  ) {
    update_Account_User_by_pk(
      pk_columns: { id: $accountUserId }
      _set: $accountUserChanges
      _append: { modules: $accountUserModules }
    ) @include(if: $updateAccountUser) {
      id
    }
    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,n=t.f`
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
`,a=t.f`
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
`,s=t.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,o=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,l=t.f`
  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {
    createGoogleToken(code: $code, id: $id, type: $type) {
      success
      tokens
      error
    }
  }
`,u=t.f`
  mutation GenerateMSURL($type: String!, $id: Int!) {
    genenrateMSURL(id: $id, type: $type) {
      url
    }
  }
`,d=t.f`
  mutation signoutMS($id: Int!, $type: String!, $email: String!) {
    signoutMS(id: $id, type: $type, email: $email) {
      error
      msId
      success
    }
  }
`,c=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,m=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,f=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,p=t.f`
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
`,h=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,b=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,v=t.f`
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
      accountLocations: Account_Locations {
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
`,g=t.f`
  mutation InsertUserAccountLocations(
    $accountUserId: Int!
    $objects: [User_Account_Location_insert_input!]!
  ) {
    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_User_Account_Location(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`,y=t.f`
  mutation ReplaceAccountRestrictedLocations(
    $accountUserId: Int!
    $objects: [Location_Account_User_insert_input!]!
  ) {
    delete_Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_Location_Account_User(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`;e.s(["e",0,s,"d",0,u,"u",0,v,"q",0,c,"_",0,f,"x",0,a,"k",0,n,"f",0,m,"U",0,g,"I",0,r,"s",0,y,"c",0,l,"S",0,d,"o",0,h,"l",0,p,"V",0,i,"J",0,b,"W",0,o])},506656,e=>{e.s(["f",0,(e,t)=>{let r=Math.pow(10,t);return Math.round(e*r)/r}])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},51196,152658,e=>{var t=e.i(159080);let r=t.f`
  mutation AddBankAccount($objects: [BankAccount_insert_input!]!) {
    insert_BankAccount(objects: $objects) {
      returning {
        id
        stripeId
        accountNumber
        routingNumber
        bic
        iban
        status
        createdAt
      }
    }
  }
`,i=t.f`
  mutation UpdateBankAccount($id: Int!, $changes: BankAccount_set_input) {
    update_BankAccount_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["R",0,r,"b",0,i],51196);var n=e.i(426778);let a=(0,n.t)().shape({bank:(0,n.x)().required(),accountNumber:(0,n.x)().required(),bic:(0,n.x)().required(),iban:(0,n.x)().required(),routingNumber:(0,n.x)().required(),showInInvoice:(0,n.g)()});e.s(["f",0,a],152658)},49408,400171,e=>{var t=e.i(362537);e.s(["f",0,(e,r)=>{let i=(0,t.default)(),n=(0,t.default)(e);switch(r){case"Weekly":if(i.isAfter(n))return"warning";if(i.isAfter(n.clone().subtract(2,"days")))return"warning";if(i.isAfter(n.clone().subtract(4,"days")))return"info";return"success";case"Monthly":if(i.isAfter(n))return"warning";if(i.isAfter(n.clone().subtract(5,"days")))return"warning";if(i.isAfter(n.clone().subtract(10,"days")))return"info";return"success";case"Quarterly":case"6 monthly":case"Annually":case"Every 3 years":case"Every 5 years":case"Every 10 years":if(i.isAfter(n))return"warning";if(i.isAfter(n.clone().subtract(5,"days")))return"warning";if(i.isAfter(n.clone().subtract(30,"days")))return"info";return"success";default:throw Error("Unsupported frequency")}}],49408);var r=e.i(159080);let i=r.f`
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
`;let n=r.f`
  mutation ComplianceMediaAttached($id: Int!) {
    complianceMediaAttached(id: $id) {
      message
    }
  }
`;e.s(["Z",0,n,"s",0,i],400171)},290516,e=>{var t=e.i(159080);let r=t.f`
  mutation CreateCompliance($data: jsonb!) {
    createCompliance(data: $data) {
      message
    }
  }
`,i=t.f`
  mutation UpdateCompliance($data: jsonb!) {
    updateCompliance(data: $data) {
      message
    }
  }
`;e.s(["R",0,r,"m",0,i])},796460,e=>{var t=e.i(391398),r=e.i(813843),i=e.i(280445),n=e.i(587369),a=e.i(191788),s=e.i(115871),o=e.i(734787),l=e.i(432171),u=e.i(549384),d=e.i(529292),c=e.i(522507);let m=e=>{let{children:r,popover:i,onOpen:n,clickOnly:s}=e,[o,l]=(0,a.useState)(null),u=!!o,d=u?"ribbon-select-button-popover":void 0;return(0,t.jsxs)("div",{children:[(0,t.jsx)(f,{"aria-describedby":d,onClick:e=>{s||l(e.currentTarget),n&&n(e)},children:r}),(0,t.jsx)(c.U,{id:d,open:u,anchorEl:o,onClose:()=>{l(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},sx:{zIndex:1200},children:i})]})},f=(0,i.f)("button")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",border:"none",borderRadius:"4px",color:t.palette.white.main,backgroundColor:"#1394FF",fontSize:"0.875rem",lineHeight:1.25,padding:"2px 4px 2px 4px",cursor:"pointer","&:hover":{backgroundColor:(0,d.J)("#1394FF",.1)}}});var p=e.i(411331);e.i(981683);var h=e.i(104868),b=e.i(328186),v=e.i(738251),g=e.i(800884),y=e.i(76381),x=e.i(715007),j=e.i(34121),_=e.i(519088),I=e.i(624841);let q=e=>{let{jobs:i,hasMore:a,handleFetchMore:o=()=>{},onItemClick:l}=e,u=(0,n.f)("(max-width:600px)");return(0,t.jsx)(v.f,{id:"scrollableDiv",sx:{display:"flex",flexDirection:"column",pt:1,overflowY:"scroll",maxHeight:u?"80vh":"50vh",width:"200px"},children:(0,t.jsx)(_.f,{dataLength:i.length,next:o,hasMore:a,loader:(0,t.jsx)(y.f,{color:"secondary"}),scrollableTarget:"scrollableDiv",children:i.map(e=>(0,t.jsx)(x.f,{component:"div",disablePadding:!0,onClick:t=>l(t,e),children:(0,t.jsxs)(j.f,{sx:{flexDirection:"column",alignItems:"flex-start"},children:[(0,t.jsxs)(r.f,{direction:"row",width:"100%",spacing:2,children:[(0,t.jsx)(g.f,{label:e.number,color:"primary",size:"small",sx:{borderRadius:1}}),(0,t.jsx)(I.f,{value:e.status,sx:{borderRadius:1}})]}),e.title&&(0,t.jsx)(s.f,{mt:1,children:e.title})," "]})},e.number))})})};var A=e.i(506656),w=e.i(104050),$=e.i(362537),C=e.i(119068),T=e.i(322135),S=e.i(889231),H=e.i(879436);let k=e=>{let{expanded:i,handleOpen:d,locationId:c,supplierId:f}=e,v=(0,p.f)(),[g,y]=(0,a.useState)(!1),x=(0,n.f)("(max-width: 600px)"),j=(0,a.useMemo)(()=>(0,$.default)().toISOString(),[]),{data:{nextJob:_}={nextJob:[]}}=(0,l.t)(b.O,{skip:!i||!c,variables:{locationId:c,now:j}}),{data:{total:I,overdueTotal:k}={}}=(0,l.t)(c?b.B:b.Z,{skip:!i,variables:{type:c?"location":f?"supplier":null,locationId:c,supplierId:f,now:j}}),{data:{totals:{ltmTotal:R,ytdTotal:N}}={totals:{ltmTotal:0,ytdTotal:0}}}=(0,l.t)(b.q,{skip:!i||!c,variables:{locationId:c}}),F=(I?.aggregate?.count||0)-(k?.aggregate?.count||0),D=(0,A.f)(F/(I?.aggregate?.count||1)*100,2),L=(0,w.f)(D);return(0,t.jsxs)(u.f,{icon:null,expanded:i,onOpen:d,height:"214px",spacing:3,children:[!!c&&(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:E.mobileItem(x),children:[(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:"Next Job:"}),(0,t.jsxs)(m,{popover:(0,t.jsx)(q,{onItemClick:(e,r)=>{let{id:i}=r;e.stopPropagation(),v.show({content:(0,t.jsx)(h.f,{jobId:i,toggleShow:v.close}),submit:!1,title:"Job details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},jobs:_,hasMore:!1}),children:[_[0]?.title||"N/A",(0,t.jsx)(o.default,{sx:{height:"14px"}})]})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:E.mobileItem(x),children:[(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:"Compliance items:"}),(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:I?.aggregate?.count||"N/A"})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:E.mobileItem(x),children:[(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:"Overdue items:"}),(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:k?.aggregate?.count||"N/A"})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:E.mobileItem(x),children:[(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:"Compliance score:"}),(0,t.jsxs)(s.f,{fontWeight:700,mr:1,children:[D,"%"]}),(0,t.jsx)(U,{bgcolor:`${L}.main`}),(0,t.jsx)(T.f,{arrow:!0,open:g,onClose:()=>y(!1),disableFocusListener:!0,disableTouchListener:!0,title:`The compliance score represents the percentage of compliance items that are still valid,
             calculated as the number of items for which the expiry date has not been reached divided
             by the total number of compliance items for the location.`,children:(0,t.jsx)(C.default,{onClick:()=>y(!g),onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),sx:{cursor:"pointer"}})})]}),!!c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:E.mobileItem(x),children:[(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:"Compliance Spend (Net)(LTM):"}),(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:(0,H.f)(R)}),(0,t.jsx)(T.f,{title:(0,t.jsxs)(t.Fragment,{children:["This amount reflects the amount that has been invoiced for compliance-related items in the last 12 months. If you require more detailed information use the"," ",(0,t.jsx)(S.f,{href:"/dashboard/data/reports",color:"secondary",children:"Reports"})," ","functionality"]}),children:(0,t.jsx)(C.default,{})})]}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:E.mobileItem(x),children:[(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:"Compliance Spend (Net)(YTD):"}),(0,t.jsx)(s.f,{fontWeight:700,mr:1,children:(0,H.f)(N)}),(0,t.jsx)(T.f,{title:(0,t.jsxs)(t.Fragment,{children:["This amount reflects the amount that has been invoiced for compliance-related items in the year to date. If you require more detailed information use the"," ",(0,t.jsx)(S.f,{href:"/dashboard/data/reports",color:"secondary",children:"Reports"})," ","functionality"]}),children:(0,t.jsx)(C.default,{})})]})]})]})},E={mobileItem:e=>e?{width:"calc(100vw - 40px)",padding:"6px",borderBottom:"1px solid #FFFFFF"}:{}},U=(0,i.f)(v.f)(()=>({width:"12px",height:"12px",borderRadius:"6px",marginRight:"8px"})),R=(0,i.f)(r.f)(()=>({position:"relative",color:"#BEEFFF"}));e.s(["f",0,e=>{let{locationId:r,supplierId:i,defaultExpanded:s="info"}=e,[o,l]=(0,a.useState)(s),u=(0,n.f)("(max-width: 600px)");return(0,t.jsx)(R,{direction:"row",justifyContent:u?"flex-start":"flex-end",width:"100%",spacing:1,children:(0,t.jsx)(k,{expanded:"info"===o,handleOpen:()=>{l("info")},locationId:r,supplierId:i})})}],796460)},577579,e=>{var t=e.i(391398);e.i(443645);var r=e.i(648116),i=e.i(21557),n=e.i(88152),a=e.i(813843),s=e.i(115871),o=e.i(755548),l=e.i(529422),u=e.i(280445),d=e.i(191788),c=e.i(74633),m=e.i(936641),f=e.i(498681);let p=e=>{let{errors:r,onClose:i}=e,{admin:n}=(0,f.f)(),u=n.jobSetting.jobNumberPrefix,p=n.jobSetting.jobNumberSuffix,b=(0,d.useMemo)(()=>[{flex:1,minWidth:100,field:"job",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(l.f,{id:r.job.id,number:r.job.number,type:r.job.type,numberPrefix:u,numberSuffix:p,isBlank:!0,isHref:!0})}},{flex:1,minWidth:200,field:"customerError",headerName:"Customer Error",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(s.f,{variant:"body1",children:r.customerError?.message})}},{flex:1,minWidth:200,field:"supplierError",headerName:"Supplier Error",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(s.f,{variant:"body1",children:r.supplierError?.message})}}],[u,p]),v=(0,d.useMemo)(()=>r.sort((e,t)=>t.job.id-e.job.id),[r]);return(0,t.jsx)(h,{sx:{padding:4},children:(0,t.jsxs)(a.f,{direction:"column",alignItems:"center",spacing:2,children:[(0,t.jsx)(m.f,{variant:"filled",severity:"error",sx:{width:"100%"},children:"Some errors occurred while recalculating the finances."}),(0,t.jsx)(a.f,{height:"100%",width:"100%",sx:{overflow:"auto"},children:(0,t.jsx)(c.s,{autoHeight:!1,columns:b,rows:v,getRowId:e=>e.job.id,containerHeight:"calc(80vh - 200px)"})}),(0,t.jsx)(o.f,{fullWidth:!0,variant:"contained",color:"secondary",onClick:i,children:"Ok"})]})})},h=(0,u.f)(n.f)(e=>{let{theme:t}=e;return{padding:`${t.spacing(4)} !important`,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"600px",maxHeight:"80vh"}});e.s(["S",0,()=>{let[e,i]=(0,r.f)();return{recalcModal:e,showRecalcErrors:async e=>{let r=e?.errors;return!!Array.isArray(r)&&0!==r.length&&(await i({content:e=>{let{onClose:i}=e;return(0,t.jsx)(p,{errors:r,onClose:i})}}),!0)}}},"H",0,()=>{let e=(0,i.f)();return{showRecalcErrorsSnackbar:t=>{let r=t?.errors;if(!Array.isArray(r)||0===r.length)return!1;let[i]=r,n=[i?.customerError?.message,i?.supplierError?.message].filter(e=>!!e);for(let t of n.length>0?n:["Saved, but the job finances could not be recalculated. Re-open the job to refresh them."])e.show({content:t,severity:"warning"});return!0}}}],577579)},127342,e=>{var t=e.i(191788),r=e.i(511667),i=e.i(21557);e.s(["f",0,e=>{let n=(0,i.f)(),[a,{isLoading:s}]=(0,r.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{n.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return a({body:t,pathParams:{offerId:e}})},[a,e]),isLoading:s}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,r=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let r=t.timeHold;if(!r?.scheduledAt)return null;let i=Number(r.supplierUserId);return Number.isFinite(i)?{...r,supplierUserId:i}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let r=Number(e.heldSupplierUserId);if(Number.isFinite(r))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:r,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return r(e.meta)}return r(e)}])},534971,699737,468156,441353,e=>{let t=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}];e.s(["v",0,"Default rates must be set for this service before they can be specified for an engineer","e",0,{status:"active",service:void 0,coverageAreas:[],minimumDuration:0,minimumIncrement:0,includeTravelTime:!1,normal:{firstHour:null,subsequentHours:null},ooh:{firstHour:null,subsequentHours:null},premium:{firstHour:null,subsequentHours:null},oohTimes:{},premiumTimes:{},days:[],engineer:null},"s",0,[{value:"monday",label:"Monday"},{value:"tuesday",label:"Tuesday"},{value:"wednesday",label:"Wednesday"},{value:"thursday",label:"Thursday"},{value:"friday",label:"Friday"},{value:"saturday",label:"Saturday"},{value:"sunday",label:"Sunday"}],"P",0,t],534971);var r=e.i(391398),i=e.i(740790),n=e.i(813843),a=e.i(322135),s=e.i(115871),o=e.i(250990),l=e.i(422411),u=e.i(362537);let d=e=>{let t=(0,u.default)(e,"HH:mm",!0);return t.isValid()?t:null};e.s(["f",0,e=>{let{control:t,error:u,name:c,day:m}=e,f=e=>e?d(e):null,p=e=>e?.isValid()?e.format("HH:mm"):null,h="Are you sure you mean 23:59? The last minute of the day will not be included — use 00:00 to run the window to midnight.";return(0,r.jsxs)(i.f,{container:!0,children:[(0,r.jsx)(i.f,{item:!0,xs:2,children:(0,r.jsx)(s.f,{children:m})}),(0,r.jsx)(i.f,{item:!0,xs:10,children:(0,r.jsxs)(n.f,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,r.jsx)(l.e,{control:t,name:`${c}.firstFrom`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,r.jsx)(s.f,{children:"to"}),(0,r.jsx)(l.e,{control:t,name:`${c}.firstTo`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(a.f,{open:"23:59"===t,title:h,arrow:!0,placement:"top",children:(0,r.jsx)("span",{children:(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}}),(0,r.jsx)(s.f,{children:"and"}),(0,r.jsx)(l.e,{control:t,name:`${c}.secondFrom`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,r.jsx)(s.f,{children:"to"}),(0,r.jsx)(l.e,{control:t,name:`${c}.secondTo`,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(a.f,{open:"23:59"===t,title:h,arrow:!0,placement:"top",children:(0,r.jsx)("span",{children:(0,r.jsx)(o.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(t),onChange:e=>i(p(e)),slotProps:{textField:{error:!!u,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}})]})})]})}],699737);var c=e.i(280445),m=e.i(498681);let f=(0,c.f)(s.f)(e=>{let{theme:t}=e;return{color:t.palette.text.secondary,backgroundColor:t.palette.action.hover,borderRadius:t.shape.borderRadius,padding:t.spacing(.5,1)}});e.s(["f",0,()=>{let e,t,i=(e=(0,m.f)(),t=e?.admin?.timeZone,{value:"string"==typeof t?.value?t.value:"Europe/London",label:"string"==typeof t?.label?t.label:"Europe/London +00:00"});return(0,r.jsxs)(f,{variant:"body2",children:["Times are in the account timezone (",i.label,")"]})}],468156);var p=e.i(426778);let h=p.x().nullable().test("time-format","Invalid time",e=>!e||null!==d(e)),b=(e,t)=>{let r=d(t);return r&&"00:00"===t&&e&&"00:00"!==e?r.add(1,"day"):r},v=(e,t)=>!!(e.from&&e.to&&t.from&&t.to&&e.from.isBefore(t.to)&&t.from.isBefore(e.to)),g=p.t().shape({firstFrom:h,firstTo:h,secondFrom:h,secondTo:h}),y=p.t().shape({monday:g.nullable(),tuesday:g.nullable(),wednesday:g.nullable(),thursday:g.nullable(),friday:g.nullable(),saturday:g.nullable(),sunday:g.nullable()}),x=p.t().shape({status:p.x().oneOf(t.map(e=>e.value)).required("Status is required"),service:p.t({label:p.x().required("Service is required"),value:p.H().integer().required("Service is required")}).required("Service is required").typeError("Service is required"),priority:p.k().of(p.t({label:p.x().required("Priority is required"),value:p.H().integer().required("Priority is required")}).required("Priority is required").typeError("Priority is required")).required("Priority is required").typeError("Priority is required"),minimumDuration:p.H().integer().min(0).required("Minimum duration is required").typeError("Minimum duration is required"),minimumIncrement:p.H().integer().min(0).required("Minimum increment is required").typeError("Minimum increment is required"),includeTravelTime:p.g().default(!1),normal:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),ooh:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),premium:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),oohTimes:y,premiumTimes:y,days:p.k().of(p.c())}),j=(e,t)=>{let{oohTimes:r,premiumTimes:i}=e;if(!r||!i)return!0;let n=Object.keys(r),a=Object.keys(i);for(let e of n)if(a.includes(e)){let n=r[e],a=i[e];if(n||a){let r=n?.firstFrom?d(n.firstFrom):null,i=n?.firstTo?b(n.firstFrom,n.firstTo):null,s=n?.secondFrom?d(n.secondFrom):null,o=n?.secondTo?b(n.secondFrom,n.secondTo):null,l=a?.firstFrom?d(a.firstFrom):null,u=a?.firstTo?b(a.firstFrom,a.firstTo):null,c=a?.secondFrom?d(a.secondFrom):null,m=a?.secondTo?b(a.secondFrom,a.secondTo):null;if((r||i)&&!(r&&i)||(s||o)&&!(s&&o))return t({path:`oohTimes.${e}`,message:"Incomplete time range"});if((l||u)&&!(l&&u)||(c||m)&&!(c&&m))return t({path:`premiumTimes.${e}`,message:"Incomplete time range"});if(r&&i&&r.isAfter(i)||s&&o&&s.isAfter(o))return t({path:`oohTimes.${e}`,message:"Invalid time range"});if(l&&u&&l.isAfter(u)||c&&m&&c.isAfter(m))return t({path:`premiumTimes.${e}`,message:"Invalid time range"});let f={from:r,to:i},p={from:s,to:o},h={from:l,to:u},g={from:c,to:m};if(v(f,p))return t({path:`oohTimes.${e}`,message:"hours overlap"});if(v(h,g))return t({path:`premiumTimes.${e}`,message:"hours overlap"});if([f,p].some(e=>[h,g].some(t=>v(e,t))))return t({path:`oohTimes.${e}`,message:"hours overlap"})}}return!0},_=p.t().shape({scheduleName:p.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(x).test("no-overlap","hours overlap",function(e){return j(e,this.createError)}),I=p.t().shape({scheduleName:p.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(x).test("no-overlap","hours overlap",function(e){return j(e,this.createError)}),q=p.t().shape({schedule:p.t().shape({label:p.x().required("Schedule is required"),value:p.H().integer().required("Schedule is required"),inputValue:p.x().nullable()}).required("Schedule is required").typeError("Schedule is required"),location:p.k().of(p.t({label:p.x().required("Location is required"),value:p.H().integer().required("Location is required")})).required("Location is required").typeError("Location is required")}).concat(x).test("no-overlap","hours overlap",function(e){return j(e,this.createError)}),A=p.t().shape({scheduleName:p.x().when("$isEdit",{is:!0,then:e=>e.required("Schedule name is required"),otherwise:e=>e.nullable()}),schedule:p.t().when("$isEdit",{is:!1,then:e=>e.shape({label:p.x().required("Schedule is required"),value:p.H().integer().required("Schedule is required"),inputValue:p.x().nullable(),fromSupplierDefaults:p.g()}).required("Schedule is required").typeError("Schedule is required"),otherwise:e=>e.nullable()}),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required").typeError("Coverage areas are required"),engineer:p.t({label:p.x().required(),value:p.H().integer().required()}).nullable()}).concat(x).test("no-overlap","hours overlap",function(e){return j(e,this.createError)});e.s(["h",0,q,"x",0,I,"M",0,A,"_",0,_],441353)},928382,37332,e=>{var t=e.i(391398),r=e.i(799083),i=e.i(152078),n=e.i(813843),a=e.i(422411),s=e.i(813762);e.s(["f",0,e=>{let{control:o}=e;return(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",spacing:.5,mt:1,children:[(0,t.jsx)(a.e,{name:"includeTravelTime",control:o,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(i.f,{control:(0,t.jsx)(r.f,{color:"secondary",checked:!!n,onChange:e=>a(e.target.checked)}),label:"Include travel time"})}}),(0,t.jsx)(s.p,{title:"Selecting this will mean that travel time is included in calculating job duration for charging purposes.",iconSx:{color:"gray",fontSize:18}})]})}],928382);var o=e.i(98926),l=e.i(511667),u=e.i(21557);e.s(["f",0,e=>{let{refetchQueries:t,onSaved:r}=e,i=(0,o.f)(),n=(0,u.f)(),a=e=>n.show({content:e,severity:"error"}),s=e=>a(e.message||"Unable to save the service schedule"),d=e=>()=>{n.show({content:e,severity:"success"}),i.refetchQueries({include:t}),r()},[c,{isLoading:m}]=(0,l.f)("/service-schedule",{queryKey:"create-service-schedule",method:"POST",onError:s,onCompleted:d("Service schedule was created")}),[f,{isLoading:p}]=(0,l.f)("/service-schedule/:serviceScheduleId",{queryKey:"update-service-schedule",method:"PUT",onError:s,onCompleted:d("Service schedule was updated")});return{createSchedule:e=>c({body:e}),updateSchedule:async(e,t)=>e?f({pathParams:{serviceScheduleId:e},body:t}):void a("Service schedule not found"),isSaving:m||p}}],37332)},639907,e=>{e.s(["b",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"m",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"M",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[],engineer:e.userId?{value:e.userId,label:e.user?.fullName??"Unknown engineer"}:null}},"T",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}}])},933129,e=>{e.s(["l",0,e=>{let{form:t,entityId:r}=e;return{entity:"Customer",entityId:r,serviceId:t.service.value,schedule:t.schedule.label,status:t.status,priority:t.priority.map(e=>e.value),minimumDuration:t.minimumDuration,minimumIncrement:t.minimumIncrement,includeTravelTime:t.includeTravelTime??!1,location:t.location?.map(e=>e.value),normal:{firstHour:t.normal.firstHour,subsequentHours:t.normal.subsequentHours},ooh:{firstHour:t.ooh.firstHour,subsequentHours:t.ooh.subsequentHours},premium:{firstHour:t.premium.firstHour,subsequentHours:t.premium.subsequentHours},oohTimes:t.oohTimes,premiumTimes:t.premiumTimes,days:t.days,parentId:t.schedule.value}},"Z",0,e=>{let{form:t,entityId:r}=e;return{entity:"Location",entityId:r,serviceId:t.service.value,schedule:t.scheduleName,status:t.status,priority:t.priority.map(e=>e.value),minimumDuration:t.minimumDuration,minimumIncrement:t.minimumIncrement,includeTravelTime:t.includeTravelTime??!1,coverageAreas:t.coverageAreas?.length?t.coverageAreas.map(e=>e.id):null,normal:{firstHour:t.normal.firstHour,subsequentHours:t.normal.subsequentHours},ooh:{firstHour:t.ooh.firstHour,subsequentHours:t.ooh.subsequentHours},premium:{firstHour:t.premium.firstHour,subsequentHours:t.premium.subsequentHours},oohTimes:t.oohTimes,premiumTimes:t.premiumTimes,days:t.days}},"d",0,e=>{let t,{form:r,entityId:i}=e,n=null;return!r.schedule?.inputValue&&r.schedule?.value&&(t=r.schedule.label,n=r.schedule.fromSupplierDefaults?null:r.schedule.value),r.schedule?.inputValue&&(t=r.schedule.inputValue),r.scheduleName&&(t=r.scheduleName),{entity:"Supplier",entityId:i,serviceId:r.service.value,schedule:t,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,coverageAreas:r.coverageAreas?.length?r.coverageAreas.map(e=>e.id):null,normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days,parentId:n,userId:r.engineer?.value??null}},"_",0,e=>{let{form:t,entity:r,entityId:i}=e;return{entity:r,entityId:i,serviceId:t.service.value,schedule:t.scheduleName,status:t.status,priority:t.priority.map(e=>e.value),minimumDuration:t.minimumDuration,minimumIncrement:t.minimumIncrement,includeTravelTime:t.includeTravelTime??!1,coverageAreas:t.coverageAreas?.length?t.coverageAreas.map(e=>e.id):null,normal:{firstHour:t.normal.firstHour,subsequentHours:t.normal.subsequentHours},ooh:{firstHour:t.ooh.firstHour,subsequentHours:t.ooh.subsequentHours},premium:{firstHour:t.premium.firstHour,subsequentHours:t.premium.subsequentHours},oohTimes:t.oohTimes,premiumTimes:t.premiumTimes,days:t.days}}])},335453,e=>{var t=e.i(391398),r=e.i(755548),i=e.i(683125),n=e.i(88152),a=e.i(813843),s=e.i(652148),o=e.i(587369),l=e.i(691567),u=e.i(422411),d=e.i(514707),c=e.i(10945),m=e.i(849091),f=e.i(345837),p=e.i(824451),h=e.i(851123),b=e.i(877341),v=e.i(191788);let g={search:"",status:"active",engineer:null},y=()=>{},x={},j=()=>{},_=e=>{let{open:n=!1,close:l=y,initialFilters:d=x,setFilters:_=j,supplierAccountId:q}=e,A=(0,o.f)("(max-width: 600px)"),[w,$]=(0,v.useState)(""),[C,T]=(0,c.f)({key:q?`service_schedule_${d.filterType}_${q}`:`service_schedule_${d.filterType}`,initialValue:d}),[S,{data:{items:H}={items:[]},loading:k}]=(0,b.f)(h.P,{variables:{accountId:q,q:""!==w?`%${w}%`:null,limit:50,offset:0}}),{control:E,handleSubmit:U,reset:R,getValues:N}=(0,u.G)({defaultValues:{statusInactive:!1,...g,...d,...C}});return(0,t.jsx)(i.f,{keepMounted:!0,open:n,onClose:l,children:(0,t.jsx)("form",{onSubmit:U(e=>{try{let t={q:e.search?`%${e.search}%`:null,status:e.statusInactive?"inactive":"active",engineerId:e.engineer?.value??null};_(e=>({...e,...t}));let r=N();T(e=>({...e,...r}))}finally{l()}}),children:(0,t.jsxs)(I,{is600pxOrLess:A,children:[(0,t.jsx)(a.f,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:(0,t.jsx)(u.e,{control:E,name:"search",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(s.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search schedule or service",value:r,onChange:i})}})}),q&&(0,t.jsx)(a.f,{mt:2,children:(0,t.jsx)(u.e,{control:E,name:"engineer",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(p.f,{fullWidth:!0,color:"secondary",variant:"standard",label:"Engineer",placeholder:"All engineers",loading:k,options:H,value:r||null,onChange:(e,t)=>i(t),onOpen:()=>S(),onSearchChange:$})}})}),(0,t.jsx)(a.f,{mt:2,children:(0,t.jsx)(u.e,{name:"statusInactive",control:E,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(f.f,{control:(0,t.jsx)(m.f,{color:"secondary",checked:r,onChange:e=>i(e.target.checked)}),label:"Show inactive services"})}})}),(0,t.jsxs)(a.f,{width:"100%",direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,mt:3,children:[(0,t.jsx)(r.f,{variant:"contained",color:"danger",onClick:()=>{let e;R(e={...g,...d}),T(e),_({status:"active"}),l()},children:"Cancel"}),(0,t.jsx)(r.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})};_.propTypes={open:l.default.bool,close:l.default.func,initialFilters:l.default.object,setFilters:l.default.func};let I=(0,d.f)(n.f)(e=>{let{is600pxOrLess:t}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:t?"100vw":"500px",height:"auto",padding:"16px 27px 16px 27px",borderRadius:"8px"}});e.s(["f",0,_])},1893,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(776204),n=e.i(432171),a=e.i(362537),s=e.i(936641),o=e.i(755548),l=e.i(800884),u=e.i(76381),d=e.i(986351),c=e.i(740790),m=e.i(813843),f=e.i(115871),p=e.i(587369),h=e.i(422411),b=e.i(159080);let v=b.f`
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
`;var g=e.i(230512),y=e.i(428424),x=e.i(824451),j=e.i(714119),_=e.i(594301),I=e.i(21557),q=e.i(411331),A=e.i(498681),w=e.i(511667),$=e.i(974261),C=e.i(299796),T=e.i(53182),S=e.i(382161),H=e.i(77052),k=e.i(185758),E=e.i(556918);let U={fontFamily:e.i(494575).f.THEME_TYPOGRAPHY.newFont},R=e=>{let{open:r,onClose:i,onConfirm:n,loading:a}=e;return(0,t.jsxs)(S.f,{open:r,onClose:i,PaperProps:{sx:U},children:[(0,t.jsx)(E.f,{sx:U,children:"Mark Completed"}),(0,t.jsx)(k.f,{children:(0,t.jsx)(f.f,{sx:U,children:"Mark this task complete? You won't be able to undo this."})}),(0,t.jsxs)(H.f,{children:[(0,t.jsx)(o.f,{variant:"contained",color:"danger",onClick:i,children:"Cancel"}),(0,t.jsx)(o.f,{color:"secondary",variant:"contained",onClick:n,disabled:a,children:"Confirm"})]})]})};var N=e.i(889231);let F=y.j.filter(e=>e.value!==y.k.DONE&&e.value!==y.k.BLOCKED);e.s(["f",0,e=>{let{id:b,onUpdated:S}=e,H=(0,p.f)("(max-width: 900px)"),{user:k}=(0,_.f)(),E=(0,I.f)(),U=(0,q.f)(),D=(0,A.f)(),L=D?.admin?.modules?.formBuilder||!1,[M,O]=(0,r.useState)(!1),{data:{task:P}={task:null},loading:V,refetch:Y}=(0,n.t)(v,{variables:{id:b}}),{control:W,reset:z}=(0,h.G)({defaultValues:{status:y.k.NEW}});(0,r.useEffect)(()=>{P?.status&&z({status:P.status})},[P?.status,z]);let G=(0,r.useMemo)(()=>P?.form?.[0],[P?.form]),[J,{loading:B}]=(0,i.f)(g.Q,{refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{E.show({content:"Task updated successfully",severity:"success"}),S?.()},onError:()=>{E.show({content:"Failed to update task",severity:"error"})}}),[Q,{isLoading:K}]=(0,w.f)(`/task/${b}`,{queryKey:`complete-customer-task-${b}`,method:"PUT",baseUrl:$.M,params:{scope:"this"},refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{E.show({content:"Task completed successfully",severity:"success"}),S?.()},onError:e=>{E.show({content:e.message||"Failed to complete task",severity:"error"})}}),Z=B||K,X=(0,r.useCallback)(()=>{let e=Array.isArray(G?.formFields)?G.formFields:[],t=G?.submissionData;return!e.length||!!t&&e.filter(e=>e?.required).every(e=>{var r;let i=e?.stateName;return!i||null!=(r=t[i])&&("string"==typeof r?r.trim().length>0:Array.isArray(r)?r.length>0:"object"!=typeof r||Object.keys(r).length>0)})},[G?.formFields,G?.submissionData])(),ee=!!Array.isArray(G?.formFields)&&G.formFields.some(e=>e?.required),et=async()=>{await Q({body:{status:y.k.DONE,completion_by_customer:!0}}),O(!1),U.close()},er=(0,r.useMemo)(()=>{if(!P)return[];let e=[];return P.job?.number&&e.push({label:`${(0,C.f)(P.job.type)} ${"quote"!==P.job.type&&P.job.quoted?"Q":""} ${P.job.number}`.trim(),href:`${$.r.portalUrl}/dashboard/issues/view?id=${P.job.number}`}),e},[P]);if(V)return(0,t.jsx)(m.f,{width:"100%",justifyContent:"center",alignItems:"center",sx:{minHeight:200},children:(0,t.jsx)(u.f,{color:"secondary"})});if(!P)return(0,t.jsx)(s.f,{severity:"error",children:"Task is not found"});let ei=y.j.find(e=>e.value===P.status)?.label??P.status;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.f,{container:!0,spacing:3,sx:{minHeight:"calc(100vh - 128px)"},children:[(0,t.jsx)(c.f,{item:!0,xs:12,md:5,children:(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(f.f,{variant:"h6",fontWeight:700,children:P.title}),P.content&&(0,t.jsx)(f.f,{variant:"body2",color:"text.secondary",children:P.content}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Due date:"}),(0,t.jsx)(f.f,{fontWeight:600,children:P.dueDate?(0,a.default)(P.dueDate).format("Do MMM YYYY"):"—"})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Status:"}),(0,t.jsx)(l.f,{size:"small",label:ei})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Assignee:"}),(0,t.jsx)(f.f,{fontWeight:600,children:P.assignedUser?.fullName??"—"})]}),er.length>0&&(0,t.jsxs)(m.f,{spacing:.5,children:[(0,t.jsx)(f.f,{children:"Linked entity:"}),er.map(e=>(0,t.jsx)(N.f,{href:e.href,children:e.label},e.href))]}),L&&G?.id&&(0,t.jsx)(T.f,{taskId:b,form:G,onFormUpdated:()=>Y()}),(0,t.jsx)(d.f,{}),(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(h.e,{control:W,name:"status",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(x.f,{label:"Status",variant:"standard",color:"secondary",fullWidth:!0,disableClearable:!0,disabled:Z,value:F.find(e=>e.value===r)??F[0],options:F,onChange:(e,t)=>{t&&(i(t.value),J({variables:{id:b,object:{status:t.value}}}))}})}}),(0,t.jsx)(o.f,{variant:"contained",color:"secondary",disabled:!X||P.status===y.k.DONE||Z,onClick:()=>O(!0),sx:{alignSelf:"flex-start"},children:"Mark Completed"})]}),ee&&!X&&(0,t.jsx)(f.f,{variant:"body2",color:"error",children:"Complete the required form fields before marking this task done."})]})}),!H&&(0,t.jsx)(c.f,{item:!0,xs:12,md:.5,display:"flex",justifyContent:"center",children:(0,t.jsx)(d.f,{orientation:"vertical"})}),(0,t.jsx)(c.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(j.f,{elevation:0,maxHeight:"800px",title:"Activity",id:b,adminId:k.adminId,scope:"task",expanded:!0,hideExpandIcon:!0})})]}),(0,t.jsx)(R,{open:M,onClose:()=>O(!1),onConfirm:et,loading:Z})]})}],1893)},868450,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"AccessTimeRounded")},546924,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutlineRounded")},920475,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},119068,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1-8h-2V7h2z"}),"InfoRounded")},262999,e=>{var t=e.i(936641);e.s(["f",()=>t.f])},220490,e=>{var t=e.i(75907),r=e.i(460997),i=e.i(191788),n=e.i(889878),a=e.i(600961),s=e.i(396851),o=e.i(395724),l=e.i(88152),u=e.i(713149),d=e.i(46739);function c(e){return(0,d.f)("MuiCard",e)}(0,u.f)("MuiCard",["root"]);var m=e.i(391398);let f=["className","raised"],p=(0,s.f)(l.f,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),h=i.forwardRef(function(e,i){let s=(0,o.f)({props:e,name:"MuiCard"}),{className:l,raised:u=!1}=s,d=(0,r.f)(s,f),h=(0,t.f)({},s,{raised:u}),b=(e=>{let{classes:t}=e;return(0,a.f)({root:["root"]},c,t)})(h);return(0,m.jsx)(p,(0,t.f)({className:(0,n.f)(b.root,l),elevation:u?8:void 0,ref:i,ownerState:h},d))});e.s(["f",0,h],220490)},101934,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),n=e.i(889878),a=e.i(600961),s=e.i(396851),o=e.i(395724),l=e.i(713149),u=e.i(46739);function d(e){return(0,u.f)("MuiCardActions",e)}(0,l.f)("MuiCardActions",["root","spacing"]);var c=e.i(391398);let m=["disableSpacing","className"],f=(0,s.f)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(e=>{let{ownerState:t}=e;return(0,r.f)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),p=i.forwardRef(function(e,i){let s=(0,o.f)({props:e,name:"MuiCardActions"}),{disableSpacing:l=!1,className:u}=s,p=(0,t.f)(s,m),h=(0,r.f)({},s,{disableSpacing:l}),b=(e=>{let{classes:t,disableSpacing:r}=e;return(0,a.f)({root:["root",!r&&"spacing"]},d,t)})(h);return(0,c.jsx)(f,(0,r.f)({className:(0,n.f)(b.root,u),ownerState:h,ref:i},p))});e.s(["f",0,p],101934)},106850,e=>{var t=e.i(75907),r=e.i(460997),i=e.i(191788),n=e.i(889878),a=e.i(600961),s=e.i(396851),o=e.i(395724),l=e.i(713149),u=e.i(46739);function d(e){return(0,u.f)("MuiCardContent",e)}(0,l.f)("MuiCardContent",["root"]);var c=e.i(391398);let m=["className","component"],f=(0,s.f)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),p=i.forwardRef(function(e,i){let s=(0,o.f)({props:e,name:"MuiCardContent"}),{className:l,component:u="div"}=s,p=(0,r.f)(s,m),h=(0,t.f)({},s,{component:u}),b=(e=>{let{classes:t}=e;return(0,a.f)({root:["root"]},d,t)})(h);return(0,c.jsx)(f,(0,t.f)({as:u,className:(0,n.f)(b.root,l),ownerState:h,ref:i},p))});e.s(["f",0,p],106850)},25932,715479,e=>{var t=e.i(75907),r=e.i(191788),i=e.i(691567),n=e.i(358024),a=e.i(138504),s=e.i(460997),o=e.i(33424),l=e.i(280445),u=e.i(226458),d=e.i(5366),c=e.i(754344),m=e.i(243239),f=e.i(391398);let p=["props","ref"],h=(0,l.f)(c.V)(e=>{let{theme:t}=e;return{overflow:"hidden",minWidth:m._,backgroundColor:(t.vars||t).palette.background.paper}});var b=e.i(685448),v=e.i(454311);let g=r.forwardRef(function(e,r){let i=(0,n.f)(e,"MuiStaticDatePicker"),l=i.displayStaticWrapperAs??"mobile",c=(0,t.f)({day:a.f,month:a.f,year:a.f},i.viewRenderers),{renderPicker:m}=(e=>{let{props:r,ref:i}=e,n=(0,s.f)(e,p),{localeText:a,slots:l,slotProps:c,className:m,sx:b,displayStaticWrapperAs:v,autoFocus:g}=r,{layoutProps:y,renderCurrentView:x}=(0,u.f)((0,t.f)({},n,{props:r,autoFocusView:g??!1,additionalViewProps:{},wrapperVariant:v})),j=l?.layout??h;return{renderPicker:()=>(0,f.jsx)(d.N,{localeText:a,children:(0,f.jsx)(j,(0,t.f)({},y,c?.layout,{slots:l,slotProps:c,sx:[...Array.isArray(b)?b:[b],...Array.isArray(c?.layout?.sx)?c.layout.sx:[c?.layout?.sx]],className:(0,o.f)(m,c?.layout?.className),ref:i,children:x()}))})}})({props:(0,t.f)({},i,{viewRenderers:c,displayStaticWrapperAs:l,yearsPerRow:i.yearsPerRow??("mobile"===l?3:4),slotProps:(0,t.f)({},i.slotProps,{toolbar:(0,t.f)({hidden:"desktop"===l},i.slotProps?.toolbar)})}),valueManager:v.X,valueType:"date",validator:b.f,ref:r});return m()});g.propTypes={autoFocus:i.default.bool,className:i.default.string,dayOfWeekFormatter:i.default.func,defaultValue:i.default.object,disabled:i.default.bool,disableFuture:i.default.bool,disableHighlightToday:i.default.bool,disablePast:i.default.bool,displayStaticWrapperAs:i.default.oneOf(["desktop","mobile"]),displayWeekNumber:i.default.bool,fixedWeekNumber:i.default.number,loading:i.default.bool,localeText:i.default.object,maxDate:i.default.object,minDate:i.default.object,monthsPerRow:i.default.oneOf([3,4]),onAccept:i.default.func,onChange:i.default.func,onClose:i.default.func,onError:i.default.func,onMonthChange:i.default.func,onViewChange:i.default.func,onYearChange:i.default.func,openTo:i.default.oneOf(["day","month","year"]),orientation:i.default.oneOf(["landscape","portrait"]),readOnly:i.default.bool,reduceAnimations:i.default.bool,referenceDate:i.default.object,renderLoading:i.default.func,shouldDisableDate:i.default.func,shouldDisableMonth:i.default.func,shouldDisableYear:i.default.func,showDaysOutsideCurrentMonth:i.default.bool,slotProps:i.default.object,slots:i.default.object,sx:i.default.oneOfType([i.default.arrayOf(i.default.oneOfType([i.default.func,i.default.object,i.default.bool])),i.default.func,i.default.object]),timezone:i.default.string,value:i.default.object,view:i.default.oneOf(["day","month","year"]),viewRenderers:i.default.shape({day:i.default.func,month:i.default.func,year:i.default.func}),views:i.default.arrayOf(i.default.oneOf(["day","month","year"]).isRequired),yearsOrder:i.default.oneOf(["asc","desc"]),yearsPerRow:i.default.oneOf([3,4])},e.s(["f",0,g],25932);var y=e.i(800884),x=e.i(813843);let j=()=>{},_=e=>{let{filtersChips:t,onRemove:r=j}=e;return(0,f.jsx)(x.f,{direction:"row",sx:{overflowX:"auto"},alignItems:"center",spacing:1,children:t.map(e=>(0,f.jsx)(y.f,{label:e.label,onDelete:()=>r(e.key)},e.key))})};_.propTypes={filtersChips:i.default.array,onRemove:i.default.func,filters:i.default.array},e.s(["f",0,_],715479)},799306,e=>{e.s(["f",0,function(e){if(null===e||!0===e||!1===e)return 0/0;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}])},925527,389849,e=>{var t=e.i(623886),r=e.i(699213);e.s(["f",0,function(e){(0,r.f)(1,arguments);var i=(0,t.f)(e);return i.setHours(23,59,59,999),i}],925527);var i=e.i(926638),n=e.i(799306),a=/[T ]/,s=/[Z ]/i,o=/([Z+-].*)$/,l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,d=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function p(e){return e%400==0||e%4==0&&e%100!=0}e.s(["f",0,function(e,t){(0,r.f)(1,arguments);var h,b,v,g=(0,n.f)(null!=(h=null==t?void 0:t.additionalDigits)?h:2);if(2!==g&&1!==g&&0!==g)throw RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(0/0);var y=function(e){var t,r={},i=e.split(a);if(i.length>2)return r;if(/:/.test(i[0])?t=i[0]:(r.date=i[0],t=i[1],s.test(r.date)&&(r.date=e.split(s)[0],t=e.substr(r.date.length,e.length))),t){var n=o.exec(t);n?(r.time=t.replace(n[1],""),r.timezone=n[1]):r.time=t}return r}(e);if(y.date){var x=function(e,t){var r=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),i=e.match(r);if(!i)return{year:0/0,restDateString:""};var n=i[1]?parseInt(i[1]):null,a=i[2]?parseInt(i[2]):null;return{year:null===a?n:100*a,restDateString:e.slice((i[1]||i[2]).length)}}(y.date,g);b=function(e,t){if(null===t)return new Date(0/0);var r,i,n,a,s,o,u,d,m,h,b,v,g=e.match(l);if(!g)return new Date(0/0);var y=!!g[4],x=c(g[1]),j=c(g[2])-1,_=c(g[3]),I=c(g[4]),q=c(g[5])-1;if(y){return(r=I,i=q,r>=1&&r<=53&&i>=0&&i<=6)?(n=t,a=I,s=q,(o=new Date(0)).setUTCFullYear(n,0,4),u=o.getUTCDay()||7,o.setUTCDate(o.getUTCDate()+((a-1)*7+s+1-u)),o):new Date(0/0)}var A=new Date(0);return(d=t,m=j,h=_,m>=0&&m<=11&&h>=1&&h<=(f[m]||(p(d)?29:28))&&(b=t,(v=x)>=1&&v<=(p(b)?366:365)))?(A.setUTCFullYear(t,j,Math.max(x,_)),A):new Date(0/0)}(x.restDateString,x.year)}if(!b||isNaN(b.getTime()))return new Date(0/0);var j=b.getTime(),_=0;if(y.time&&isNaN(_=function(e){var t,r,n,a=e.match(u);if(!a)return 0/0;var s=m(a[1]),o=m(a[2]),l=m(a[3]);return(t=s,r=o,n=l,24===t?0===r&&0===n:n>=0&&n<60&&r>=0&&r<60&&t>=0&&t<25)?s*i.r+o*i.z+1e3*l:0/0}(y.time)))return new Date(0/0);if(y.timezone){if(isNaN(v=function(e){if("Z"===e)return 0;var t,r=e.match(d);if(!r)return 0;var n="+"===r[1]?-1:1,a=parseInt(r[2]),s=r[3]&&parseInt(r[3])||0;return(t=s)>=0&&t<=59?n*(a*i.r+s*i.z):0/0}(y.timezone)))return new Date(0/0)}else{var I=new Date(j+_),q=new Date(0);return q.setFullYear(I.getUTCFullYear(),I.getUTCMonth(),I.getUTCDate()),q.setHours(I.getUTCHours(),I.getUTCMinutes(),I.getUTCSeconds(),I.getUTCMilliseconds()),q}return new Date(j+_+v)}],389849)},684034,e=>{var t=e.i(389849);e.s(["f",()=>t.f])}],171764,(e,t,r)=>{t.exports=function(e,t,r,i){for(var n=-1,a=null==e?0:e.length;++n<a;){var s=e[n];t(i,s,r(s),e)}return i}},299177,(e,t,r)=>{var i=e.r(885049);t.exports=function(e,t,r,n){return i(e,function(e,i,a){t(n,e,r(e),a)}),n}},885049,(e,t,r)=>{var i=e.r(733991);t.exports=e.r(8331)(i)},733991,(e,t,r)=>{var i=e.r(864353),n=e.r(622335);t.exports=function(e,t){return e&&i(e,t,n)}},928267,(e,t,r)=>{var i=e.r(478969),n=e.r(598921);t.exports=function(e,t){t=i(t,e);for(var r=0,a=t.length;null!=e&&r<a;)e=e[n(t[r++])];return r&&r==a?e:void 0}},980171,(e,t,r)=>{t.exports=function(e,t){return null!=e&&t in Object(e)}},305001,(e,t,r)=>{var i=e.r(698620),n=e.r(190835);t.exports=function(e,t,r,a){var s=r.length,o=s,l=!a;if(null==e)return!o;for(e=Object(e);s--;){var u=r[s];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++s<o;){var d=(u=r[s])[0],c=e[d],m=u[1];if(l&&u[2]){if(void 0===c&&!(d in e))return!1}else{var f=new i;if(a)var p=a(c,m,d,e,t,f);if(!(void 0===p?n(m,c,3,a,f):p))return!1}}return!0}},305792,(e,t,r)=>{var i=e.r(708554),n=e.r(792384),a=e.r(625975),s=e.r(448684),o=e.r(122025);t.exports=function(e){return"function"==typeof e?e:null==e?a:"object"==typeof e?s(e)?n(e[0],e[1]):i(e):o(e)}},708554,(e,t,r)=>{var i=e.r(305001),n=e.r(461994),a=e.r(19939);t.exports=function(e){var t=n(e);return 1==t.length&&t[0][2]?a(t[0][0],t[0][1]):function(r){return r===e||i(r,e,t)}}},792384,(e,t,r)=>{var i=e.r(190835),n=e.r(758568),a=e.r(517217),s=e.r(970923),o=e.r(81673),l=e.r(19939),u=e.r(598921);t.exports=function(e,t){return s(e)&&o(t)?l(u(e),t):function(r){var s=n(r,e);return void 0===s&&s===t?a(r,e):i(t,s,3)}}},343054,(e,t,r)=>{t.exports=function(e){return function(t){return null==t?void 0:t[e]}}},502503,(e,t,r)=>{var i=e.r(928267);t.exports=function(e){return function(t){return i(t,e)}}},316666,(e,t,r)=>{var i=e.r(171764),n=e.r(299177),a=e.r(305792),s=e.r(448684);t.exports=function(e,t){return function(r,o){var l=s(r)?i:n,u=t?t():{};return l(r,e,a(o,2),u)}}},8331,(e,t,r)=>{var i=e.r(379858);t.exports=function(e,t){return function(r,n){if(null==r)return r;if(!i(r))return e(r,n);for(var a=r.length,s=t?a:-1,o=Object(r);(t?s--:++s<a)&&!1!==n(o[s],s,o););return r}}},461994,(e,t,r)=>{var i=e.r(81673),n=e.r(622335);t.exports=function(e){for(var t=n(e),r=t.length;r--;){var a=t[r],s=e[a];t[r]=[a,s,i(s)]}return t}},877697,(e,t,r)=>{var i=e.r(478969),n=e.r(713266),a=e.r(448684),s=e.r(805251),o=e.r(457279),l=e.r(598921);t.exports=function(e,t,r){t=i(t,e);for(var u=-1,d=t.length,c=!1;++u<d;){var m=l(t[u]);if(!(c=null!=e&&r(e,m)))break;e=e[m]}return c||++u!=d?c:!!(d=null==e?0:e.length)&&o(d)&&s(m,d)&&(a(e)||n(e))}},81673,(e,t,r)=>{var i=e.r(903275);t.exports=function(e){return e==e&&!i(e)}},19939,(e,t,r)=>{t.exports=function(e,t){return function(r){return null!=r&&r[e]===t&&(void 0!==t||e in Object(r))}}},758568,(e,t,r)=>{var i=e.r(928267);t.exports=function(e,t,r){var n=null==e?void 0:i(e,t);return void 0===n?r:n}},320037,(e,t,r)=>{var i=e.r(398629),n=e.r(316666),a=Object.prototype.hasOwnProperty;t.exports=n(function(e,t,r){a.call(e,r)?e[r].push(t):i(e,r,[t])})},517217,(e,t,r)=>{var i=e.r(980171),n=e.r(877697);t.exports=function(e,t){return null!=e&&n(e,t,i)}},122025,(e,t,r)=>{var i=e.r(343054),n=e.r(502503),a=e.r(970923),s=e.r(598921);t.exports=function(e){return a(e)?i(s(e)):n(e)}}]);