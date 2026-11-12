(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,913758,e=>{var t=e.i(159080),a=e.i(987123);let i=t.f`
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
  ${a.a}
  ${a.S}
`,r=t.f`
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
`,n=t.f`
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
`,o=t.f`
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
`,s=t.f`
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
`,d=t.f`
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
  ${a.a}
  ${a.S}
`,p=t.f`
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
  ${a.a}
  ${a.S}
`;e.s(["x",0,l,"d",0,u,"o",0,c,"G",0,d,"E",0,r,"u",0,n,"P",0,p,"m",0,i,"U",0,m,"b",0,s,"T",0,o])},694508,2261,e=>{var t,a,i=((t={}).WEEKLY="Weekly",t.MONTHLY="Monthly",t.QUARTERLY="Quarterly",t.EVERY_SIX_MONTH="6 monthly",t.ANNUALLY="Annually",t.EVERY_THREE_YEARS="Every 3 years",t.EVERY_FIVE_YEARS="Every 5 years",t.EVERY_TEN_YEARS="Every 10 years",t),r=((a={}).ACTIVE="active",a.INACTIVE="inactive",a);e.s(["D",()=>i,"N",()=>r],2261);let n=[{label:"Active",value:r.ACTIVE},{label:"Inactive",value:r.INACTIVE}],o=[{label:i.WEEKLY,value:i.WEEKLY},{label:i.MONTHLY,value:i.MONTHLY},{label:i.QUARTERLY,value:i.QUARTERLY},{label:i.EVERY_SIX_MONTH,value:i.EVERY_SIX_MONTH},{label:i.ANNUALLY,value:i.ANNUALLY},{label:i.EVERY_THREE_YEARS,value:i.EVERY_THREE_YEARS},{label:i.EVERY_FIVE_YEARS,value:i.EVERY_FIVE_YEARS},{label:i.EVERY_TEN_YEARS,value:i.EVERY_TEN_YEARS}];e.s(["X",0,o,"d",0,{active:"success",inactive:"danger"},"G",0,n],694508)},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,a)=>{if(!a)return null;let i=(0,t.default)(a);if(!i.isValid())return null;let r=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),n=i.clone().add(r,"minutes");return{start:i.toISOString(),end:n.toISOString()}}])},353069,e=>{var t=e.i(159080);let a=t.f`
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
`;e.s(["J",0,i,"z",0,a])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},49408,400171,e=>{var t=e.i(362537);e.s(["f",0,(e,a)=>{let i=(0,t.default)(),r=(0,t.default)(e);switch(a){case"Weekly":if(i.isAfter(r))return"warning";if(i.isAfter(r.clone().subtract(2,"days")))return"warning";if(i.isAfter(r.clone().subtract(4,"days")))return"info";return"success";case"Monthly":if(i.isAfter(r))return"warning";if(i.isAfter(r.clone().subtract(5,"days")))return"warning";if(i.isAfter(r.clone().subtract(10,"days")))return"info";return"success";case"Quarterly":case"6 monthly":case"Annually":case"Every 3 years":case"Every 5 years":case"Every 10 years":if(i.isAfter(r))return"warning";if(i.isAfter(r.clone().subtract(5,"days")))return"warning";if(i.isAfter(r.clone().subtract(30,"days")))return"info";return"success";default:throw Error("Unsupported frequency")}}],49408);var a=e.i(159080);let i=a.f`
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
`;a.f`
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
`;let r=a.f`
  mutation ComplianceMediaAttached($id: Int!) {
    complianceMediaAttached(id: $id) {
      message
    }
  }
`;e.s(["Z",0,r,"s",0,i],400171)},290516,e=>{var t=e.i(159080);let a=t.f`
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
`;e.s(["R",0,a,"m",0,i])},796460,e=>{var t=e.i(391398),a=e.i(813843),i=e.i(280445),r=e.i(587369),n=e.i(191788),o=e.i(115871),s=e.i(734787),l=e.i(432171),d=e.i(549384),u=e.i(529292),c=e.i(522507);let m=e=>{let{children:a,popover:i,onOpen:r,clickOnly:o}=e,[s,l]=(0,n.useState)(null),d=!!s,u=d?"ribbon-select-button-popover":void 0;return(0,t.jsxs)("div",{children:[(0,t.jsx)(p,{"aria-describedby":u,onClick:e=>{o||l(e.currentTarget),r&&r(e)},children:a}),(0,t.jsx)(c.U,{id:u,open:d,anchorEl:s,onClose:()=>{l(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},sx:{zIndex:1200},children:i})]})},p=(0,i.f)("button")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",border:"none",borderRadius:"4px",color:t.palette.white.main,backgroundColor:"#1394FF",fontSize:"0.875rem",lineHeight:1.25,padding:"2px 4px 2px 4px",cursor:"pointer","&:hover":{backgroundColor:(0,u.J)("#1394FF",.1)}}});var f=e.i(411331);e.i(981683);var h=e.i(104868),y=e.i(328186),b=e.i(738251),x=e.i(800884),g=e.i(76381),I=e.i(715007),_=e.i(34121),v=e.i(519088),A=e.i(624841);let j=e=>{let{jobs:i,hasMore:n,handleFetchMore:s=()=>{},onItemClick:l}=e,d=(0,r.f)("(max-width:600px)");return(0,t.jsx)(b.f,{id:"scrollableDiv",sx:{display:"flex",flexDirection:"column",pt:1,overflowY:"scroll",maxHeight:d?"80vh":"50vh",width:"200px"},children:(0,t.jsx)(v.f,{dataLength:i.length,next:s,hasMore:n,loader:(0,t.jsx)(g.f,{color:"secondary"}),scrollableTarget:"scrollableDiv",children:i.map(e=>(0,t.jsx)(I.f,{component:"div",disablePadding:!0,onClick:t=>l(t,e),children:(0,t.jsxs)(_.f,{sx:{flexDirection:"column",alignItems:"flex-start"},children:[(0,t.jsxs)(a.f,{direction:"row",width:"100%",spacing:2,children:[(0,t.jsx)(x.f,{label:e.number,color:"primary",size:"small",sx:{borderRadius:1}}),(0,t.jsx)(A.f,{value:e.status,sx:{borderRadius:1}})]}),e.title&&(0,t.jsx)(o.f,{mt:1,children:e.title})," "]})},e.number))})})};var S=e.i(506656),C=e.i(104050),w=e.i(362537),E=e.i(119068),$=e.i(322135),R=e.i(889231),q=e.i(879436);let U=e=>{let{expanded:i,handleOpen:u,locationId:c,supplierId:p}=e,b=(0,f.f)(),[x,g]=(0,n.useState)(!1),I=(0,r.f)("(max-width: 600px)"),_=(0,n.useMemo)(()=>(0,w.default)().toISOString(),[]),{data:{nextJob:v}={nextJob:[]}}=(0,l.t)(y.O,{skip:!i||!c,variables:{locationId:c,now:_}}),{data:{total:A,overdueTotal:U}={}}=(0,l.t)(c?y.B:y.Z,{skip:!i,variables:{type:c?"location":p?"supplier":null,locationId:c,supplierId:p,now:_}}),{data:{totals:{ltmTotal:N,ytdTotal:L}}={totals:{ltmTotal:0,ytdTotal:0}}}=(0,l.t)(y.q,{skip:!i||!c,variables:{locationId:c}}),F=(A?.aggregate?.count||0)-(U?.aggregate?.count||0),D=(0,S.f)(F/(A?.aggregate?.count||1)*100,2),k=(0,C.f)(D);return(0,t.jsxs)(d.f,{icon:null,expanded:i,onOpen:u,height:"214px",spacing:3,children:[!!c&&(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:T.mobileItem(I),children:[(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:"Next Job:"}),(0,t.jsxs)(m,{popover:(0,t.jsx)(j,{onItemClick:(e,a)=>{let{id:i}=a;e.stopPropagation(),b.show({content:(0,t.jsx)(h.f,{jobId:i,toggleShow:b.close}),submit:!1,title:"Job details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},jobs:v,hasMore:!1}),children:[v[0]?.title||"N/A",(0,t.jsx)(s.default,{sx:{height:"14px"}})]})]}),(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:T.mobileItem(I),children:[(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:"Compliance items:"}),(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:A?.aggregate?.count||"N/A"})]}),(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:T.mobileItem(I),children:[(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:"Overdue items:"}),(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:U?.aggregate?.count||"N/A"})]}),(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:T.mobileItem(I),children:[(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:"Compliance score:"}),(0,t.jsxs)(o.f,{fontWeight:700,mr:1,children:[D,"%"]}),(0,t.jsx)(O,{bgcolor:`${k}.main`}),(0,t.jsx)($.f,{arrow:!0,open:x,onClose:()=>g(!1),disableFocusListener:!0,disableTouchListener:!0,title:`The compliance score represents the percentage of compliance items that are still valid,
             calculated as the number of items for which the expiry date has not been reached divided
             by the total number of compliance items for the location.`,children:(0,t.jsx)(E.default,{onClick:()=>g(!x),onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),sx:{cursor:"pointer"}})})]}),!!c&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:T.mobileItem(I),children:[(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:"Compliance Spend (Net)(LTM):"}),(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:(0,q.f)(N)}),(0,t.jsx)($.f,{title:(0,t.jsxs)(t.Fragment,{children:["This amount reflects the amount that has been invoiced for compliance-related items in the last 12 months. If you require more detailed information use the"," ",(0,t.jsx)(R.f,{href:"/dashboard/data/reports",color:"secondary",children:"Reports"})," ","functionality"]}),children:(0,t.jsx)(E.default,{})})]}),(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:T.mobileItem(I),children:[(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:"Compliance Spend (Net)(YTD):"}),(0,t.jsx)(o.f,{fontWeight:700,mr:1,children:(0,q.f)(L)}),(0,t.jsx)($.f,{title:(0,t.jsxs)(t.Fragment,{children:["This amount reflects the amount that has been invoiced for compliance-related items in the year to date. If you require more detailed information use the"," ",(0,t.jsx)(R.f,{href:"/dashboard/data/reports",color:"secondary",children:"Reports"})," ","functionality"]}),children:(0,t.jsx)(E.default,{})})]})]})]})},T={mobileItem:e=>e?{width:"calc(100vw - 40px)",padding:"6px",borderBottom:"1px solid #FFFFFF"}:{}},O=(0,i.f)(b.f)(()=>({width:"12px",height:"12px",borderRadius:"6px",marginRight:"8px"})),N=(0,i.f)(a.f)(()=>({position:"relative",color:"#BEEFFF"}));e.s(["f",0,e=>{let{locationId:a,supplierId:i,defaultExpanded:o="info"}=e,[s,l]=(0,n.useState)(o),d=(0,r.f)("(max-width: 600px)");return(0,t.jsx)(N,{direction:"row",justifyContent:d?"flex-start":"flex-end",width:"100%",spacing:1,children:(0,t.jsx)(U,{expanded:"info"===s,handleOpen:()=>{l("info")},locationId:a,supplierId:i})})}],796460)},127342,e=>{var t=e.i(191788),a=e.i(511667),i=e.i(21557);e.s(["f",0,e=>{let r=(0,i.f)(),[n,{isLoading:o}]=(0,a.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{r.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return n({body:t,pathParams:{offerId:e}})},[n,e]),isLoading:o}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,a=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let a=t.timeHold;if(!a?.scheduledAt)return null;let i=Number(a.supplierUserId);return Number.isFinite(i)?{...a,supplierUserId:i}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let a=Number(e.heldSupplierUserId);if(Number.isFinite(a))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:a,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return a(e.meta)}return a(e)}])},546924,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(e.r(421506)),n=e.r(391398);a.default=(0,r.default)((0,n.jsx)("path",{d:"M12 7c-.55 0-1 .45-1 1v3H8c-.55 0-1 .45-1 1s.45 1 1 1h3v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V8c0-.55-.45-1-1-1m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutlineRounded")},25932,715479,e=>{var t=e.i(75907),a=e.i(191788),i=e.i(691567),r=e.i(358024),n=e.i(138504),o=e.i(460997),s=e.i(33424),l=e.i(280445),d=e.i(226458),u=e.i(5366),c=e.i(754344),m=e.i(243239),p=e.i(391398);let f=["props","ref"],h=(0,l.f)(c.V)(e=>{let{theme:t}=e;return{overflow:"hidden",minWidth:m._,backgroundColor:(t.vars||t).palette.background.paper}});var y=e.i(685448),b=e.i(454311);let x=a.forwardRef(function(e,a){let i=(0,r.f)(e,"MuiStaticDatePicker"),l=i.displayStaticWrapperAs??"mobile",c=(0,t.f)({day:n.f,month:n.f,year:n.f},i.viewRenderers),{renderPicker:m}=(e=>{let{props:a,ref:i}=e,r=(0,o.f)(e,f),{localeText:n,slots:l,slotProps:c,className:m,sx:y,displayStaticWrapperAs:b,autoFocus:x}=a,{layoutProps:g,renderCurrentView:I}=(0,d.f)((0,t.f)({},r,{props:a,autoFocusView:x??!1,additionalViewProps:{},wrapperVariant:b})),_=l?.layout??h;return{renderPicker:()=>(0,p.jsx)(u.N,{localeText:n,children:(0,p.jsx)(_,(0,t.f)({},g,c?.layout,{slots:l,slotProps:c,sx:[...Array.isArray(y)?y:[y],...Array.isArray(c?.layout?.sx)?c.layout.sx:[c?.layout?.sx]],className:(0,s.f)(m,c?.layout?.className),ref:i,children:I()}))})}})({props:(0,t.f)({},i,{viewRenderers:c,displayStaticWrapperAs:l,yearsPerRow:i.yearsPerRow??("mobile"===l?3:4),slotProps:(0,t.f)({},i.slotProps,{toolbar:(0,t.f)({hidden:"desktop"===l},i.slotProps?.toolbar)})}),valueManager:b.X,valueType:"date",validator:y.f,ref:a});return m()});x.propTypes={autoFocus:i.default.bool,className:i.default.string,dayOfWeekFormatter:i.default.func,defaultValue:i.default.object,disabled:i.default.bool,disableFuture:i.default.bool,disableHighlightToday:i.default.bool,disablePast:i.default.bool,displayStaticWrapperAs:i.default.oneOf(["desktop","mobile"]),displayWeekNumber:i.default.bool,fixedWeekNumber:i.default.number,loading:i.default.bool,localeText:i.default.object,maxDate:i.default.object,minDate:i.default.object,monthsPerRow:i.default.oneOf([3,4]),onAccept:i.default.func,onChange:i.default.func,onClose:i.default.func,onError:i.default.func,onMonthChange:i.default.func,onViewChange:i.default.func,onYearChange:i.default.func,openTo:i.default.oneOf(["day","month","year"]),orientation:i.default.oneOf(["landscape","portrait"]),readOnly:i.default.bool,reduceAnimations:i.default.bool,referenceDate:i.default.object,renderLoading:i.default.func,shouldDisableDate:i.default.func,shouldDisableMonth:i.default.func,shouldDisableYear:i.default.func,showDaysOutsideCurrentMonth:i.default.bool,slotProps:i.default.object,slots:i.default.object,sx:i.default.oneOfType([i.default.arrayOf(i.default.oneOfType([i.default.func,i.default.object,i.default.bool])),i.default.func,i.default.object]),timezone:i.default.string,value:i.default.object,view:i.default.oneOf(["day","month","year"]),viewRenderers:i.default.shape({day:i.default.func,month:i.default.func,year:i.default.func}),views:i.default.arrayOf(i.default.oneOf(["day","month","year"]).isRequired),yearsOrder:i.default.oneOf(["asc","desc"]),yearsPerRow:i.default.oneOf([3,4])},e.s(["f",0,x],25932);var g=e.i(800884),I=e.i(813843);let _=()=>{},v=e=>{let{filtersChips:t,onRemove:a=_}=e;return(0,p.jsx)(I.f,{direction:"row",sx:{overflowX:"auto"},alignItems:"center",spacing:1,children:t.map(e=>(0,p.jsx)(g.f,{label:e.label,onDelete:()=>a(e.key)},e.key))})};v.propTypes={filtersChips:i.default.array,onRemove:i.default.func,filters:i.default.array},e.s(["f",0,v],715479)}])})();