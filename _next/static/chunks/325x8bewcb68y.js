(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,913758,e=>{var t=e.i(159080),r=e.i(987123);let a=t.f`
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
`,i=t.f`
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
`,f=t.f`
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
`;e.s(["x",0,l,"d",0,u,"o",0,c,"G",0,d,"E",0,i,"u",0,n,"P",0,m,"m",0,a,"U",0,f,"b",0,o,"T",0,s])},394989,e=>{var t=e.i(391398),r=e.i(191788),a=e.i(773831),i=e.i(813843),n=e.i(115871),s=e.i(322135),o=e.i(148310),l=e.i(889231),d=e.i(422411),u=e.i(424894),c=e.i(755548),f=e.i(652148),m=e.i(376733),p=e.i(978319),h=e.i(426778);let y=h.t({name:h.x().required("Name is required"),url:h.x().url().required("URL is required")}),b=e=>{let{noEdit:n=!1,noDelete:o=!1,isAdded:h=!1,id:b,url:x="",name:j="",onSave:g=()=>{},onCancel:v=()=>{},onDelete:I=()=>{}}=e,[_,C]=(0,r.useState)(h),{control:A,handleSubmit:S,errors:k}=(0,d.G)({resolver:(0,u.yupResolver)(y)});return(0,t.jsx)("form",{children:_?(0,t.jsxs)(i.f,{children:[(0,t.jsxs)(i.f,{spacing:1,children:[(0,t.jsx)(d.e,{control:A,name:"name",defaultValue:j,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!k.name,helperText:k.name?.message})}),(0,t.jsx)(d.e,{control:A,name:"url",defaultValue:x,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!k.url,helperText:k.url?.message})})]}),(0,t.jsxs)(i.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(c.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),C(!1),v(b)},children:"Cancel"}),(0,t.jsx)(c.f,{variant:"contained",size:"small",onClick:S(e=>{g(e),C(!1)}),children:"Save"})]})]}):(0,t.jsxs)(i.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(l.f,{target:"_blank",variant:"body1",color:"secondary",href:x,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:j}),!n&&(0,t.jsx)(s.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(a.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),C(!0)},children:(0,t.jsx)(m.default,{sx:{fontSize:"16px"}})})}),!o&&(0,t.jsx)(s.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(a.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>I(b),children:(0,t.jsx)(p.default,{sx:{fontSize:"16px"}})})})]})})};var x=e.i(594301);let j=[];e.s(["f",0,e=>{let{values:l=j,setValue:d=()=>{},name:u,title:c="Related links",displayMode:f=!1,noDeleteEdit:m=!1,titleSx:p={}}=e,[h,y]=(0,r.useState)([]),{hasRole:g}=(0,x.f)(),v=g("tenant");(0,r.useEffect)(()=>{Array.isArray(l)&&y((l??[]).map(e=>({...e,id:e?.id||Date.now()})))},[l]);let I=e=>{y(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(i.f,{children:[(0,t.jsxs)(i.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(n.f,{sx:p,children:[c,":"]}),!f&&!v&&(0,t.jsx)(s.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(a.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),y(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(o.default,{})})})]}),(0,t.jsx)(i.f,{pl:2,spacing:.8,children:h?.length?h.map(e=>{let t;return(0,r.createElement)(b,{...e,key:e.id,onCancel:I,noEdit:m||f,noDelete:m||f,onDelete:(t=e.id,()=>{if(!u)return;let e=h.filter(e=>e.id!==t);d?.(u,e),y(e)}),onSave:t=>((e,t)=>{if(!u)return;let r=[...h],a=r.findIndex(t=>t.id===e);-1!==a&&r.splice(a,1,{...t,isAdded:!1,id:e}),d?.(u,r)})(e.id,t)})}):(0,t.jsx)(n.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,r)=>{if(!r)return null;let a=(0,t.default)(r);if(!a.isValid())return null;let i=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),n=a.clone().add(i,"minutes");return{start:a.toISOString(),end:n.toISOString()}}])},544005,e=>{e.s(["f",0,(e,t)=>{let r={...e};return Object.entries(t).forEach(e=>{let[t,a]=e;void 0===r[t]&&(r[t]=a)}),r}])},353069,e=>{var t=e.i(159080);let r=t.f`
  query GetSuppliersForAssign($jobId: Int!) {
    data: getSuppliersForAssign(jobId: $jobId) {
      job
      customerRates
      suppliers
      hasArea
      hasActiveOffer
    }
  }
`,a=t.f`
  mutation AcceptJob($object: AcceptJobOfferInput!) {
    acceptJobOffer(acceptOfferInput: $object) {
      data
      success
    }
  }
`;e.s(["J",0,a,"z",0,r])},382461,e=>{var t=e.i(391398),r=e.i(191788),a=e.i(514707),i=e.i(691567),n=e.i(668921),s=e.i(231637),o=e.i(901004),l=e.i(539117),d=e.i(471973),u=e.i(813843),c=e.i(115871),f=e.i(738251),m=e.i(800884),p=e.i(799083),h=e.i(544005);let y={text:e=>{let{option:t,multiple:r,index:a}=e;return r&&a>0?`, ${t.label}`:t.label},textWithIcon:e=>{let{option:r}=e;return(0,t.jsxs)(u.f,{direction:"row",alignItems:"center",spacing:1,children:[r.icon,(0,t.jsxs)(c.f,{children:[" ",r.label]})]})},chip:e=>{let{chipProps:t,option:a}=e;return(0,r.createElement)(m.f,{...t,key:a.value,label:a.label,icon:a.icon,sx:{color:a.color,bgcolor:a.bgcolor}})}},b={text:e=>{let{option:t}=e;return t.label},textWithIcon:e=>{let{option:r}=e;return(0,t.jsxs)(u.f,{direction:"row",alignItems:"center",spacing:1,children:[r.icon,(0,t.jsxs)(c.f,{children:[" ",r.label]})]})},chip:e=>{let{chipProps:t,option:a}=e;return(0,r.createElement)(m.f,{...t,key:a.value,label:a.label,icon:a.icon,sx:{color:a.color,bgcolor:a.bgcolor}})},checkbox:e=>{let{option:r,value:a}=e;return(0,t.jsxs)(u.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(p.f,{color:"secondary",sx:{height:"10px"},checked:a.indexOf(r.value)>-1}),(0,t.jsxs)(c.f,{children:[" ",r.label]})]})}},x={label:"",onChange:()=>{},leftSideLabel:!1,options:[],inputComponent:"text",selectComponent:"text",withoutSelectIcon:!1,formControl:{error:!1,helperText:""},chipProps:{size:"small"},selectProps:{}},j=e=>{let{label:r,value:a,onChange:i,leftSideLabel:n,options:s,inputComponent:u,selectComponent:m,withoutSelectIcon:p,formControl:j,chipProps:I,selectProps:_}=(0,h.f)(e,x),C=e=>s.find(t=>t.value===e);return(0,t.jsxs)(g,{...j,leftSideLabel:n,withoutSelectIcon:p,children:[r&&n&&(0,t.jsx)(c.f,{children:r}),r&&!n&&(0,t.jsx)(v,{shrink:""!==a&&void 0!==a,children:r}),(0,t.jsx)(l.f,{displayEmpty:!0,..._,value:a,onChange:i,inputProps:{shrink:!0},renderValue:()=>{if(Array.isArray(a))return(0,t.jsx)(f.f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:a.map((e,t)=>{let r=C(e);return r?y[u]({chipProps:I,option:r,multiple:!0,index:t}):""})});let e=C(a);return e?(0,t.jsx)(f.f,{children:y[u]({chipProps:I,option:e})}):""},children:s.map(e=>(0,t.jsx)(o.f,{value:e.value,children:b[m]({chipProps:I,option:e,value:a})},e.value))}),j?.helperText&&(0,t.jsx)(d.f,{children:j.helperText})]})};j.propTypes={label:i.default.string,value:i.default.oneOfType([i.default.string,i.default.array]),onChange:i.default.func,leftSideLabel:i.default.bool,options:i.default.arrayOf(i.default.shape({label:i.default.string,value:i.default.string.isRequired,color:i.default.string,bgcolor:i.default.string,icon:i.default.node}).isRequired),inputComponent:i.default.oneOf(["text","textWithIcon","chip"]),selectComponent:i.default.oneOf(["text","textWithIcon","chip","checkbox"]),withoutSelectIcon:i.default.bool,formControl:i.default.object,chipProps:i.default.object,selectProps:i.default.object};let g=(0,a.f)(n.f)(e=>{let{theme:t,leftSideLabel:r,withoutSelectIcon:a}=e;return{"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start",...r&&{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}},"& .MuiSelect-icon":{...a&&{display:"none"}}}}),v=(0,a.f)(s.f)(e=>{let{theme:t}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main}}});e.s(["f",0,j])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},127342,e=>{var t=e.i(191788),r=e.i(511667),a=e.i(21557);e.s(["f",0,e=>{let i=(0,a.f)(),[n,{isLoading:s}]=(0,r.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{i.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return n({body:t,pathParams:{offerId:e}})},[n,e]),isLoading:s}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,r=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let r=t.timeHold;if(!r?.scheduledAt)return null;let a=Number(r.supplierUserId);return Number.isFinite(a)?{...r,supplierUserId:a}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let r=Number(e.heldSupplierUserId);if(Number.isFinite(r))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:r,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return r(e.meta)}return r(e)}])},1893,e=>{var t=e.i(391398),r=e.i(191788),a=e.i(776204),i=e.i(432171),n=e.i(362537),s=e.i(936641),o=e.i(755548),l=e.i(800884),d=e.i(76381),u=e.i(986351),c=e.i(740790),f=e.i(813843),m=e.i(115871),p=e.i(587369),h=e.i(422411),y=e.i(159080);let b=y.f`
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
`;var x=e.i(230512),j=e.i(428424),g=e.i(824451),v=e.i(714119),I=e.i(594301),_=e.i(21557),C=e.i(411331),A=e.i(498681),S=e.i(511667),k=e.i(974261),w=e.i(299796),q=e.i(53182),$=e.i(382161),D=e.i(77052),U=e.i(185758),O=e.i(556918);let T={fontFamily:e.i(494575).f.THEME_TYPOGRAPHY.newFont},R=e=>{let{open:r,onClose:a,onConfirm:i,loading:n}=e;return(0,t.jsxs)($.f,{open:r,onClose:a,PaperProps:{sx:T},children:[(0,t.jsx)(O.f,{sx:T,children:"Mark Completed"}),(0,t.jsx)(U.f,{children:(0,t.jsx)(m.f,{sx:T,children:"Mark this task complete? You won't be able to undo this."})}),(0,t.jsxs)(D.f,{children:[(0,t.jsx)(o.f,{variant:"contained",color:"danger",onClick:a,children:"Cancel"}),(0,t.jsx)(o.f,{color:"secondary",variant:"contained",onClick:i,disabled:n,children:"Confirm"})]})]})};var L=e.i(889231);let F=j.j.filter(e=>e.value!==j.k.DONE&&e.value!==j.k.BLOCKED);e.s(["f",0,e=>{let{id:y,onUpdated:$}=e,D=(0,p.f)("(max-width: 900px)"),{user:U}=(0,I.f)(),O=(0,_.f)(),T=(0,C.f)(),E=(0,A.f)(),P=E?.admin?.modules?.formBuilder||!1,[M,N]=(0,r.useState)(!1),{data:{task:J}={task:null},loading:z,refetch:G}=(0,i.t)(b,{variables:{id:y}}),{control:W,reset:V}=(0,h.G)({defaultValues:{status:j.k.NEW}});(0,r.useEffect)(()=>{J?.status&&V({status:J.status})},[J?.status,V]);let H=(0,r.useMemo)(()=>J?.form?.[0],[J?.form]),[B,{loading:Y}]=(0,a.f)(x.Q,{refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{O.show({content:"Task updated successfully",severity:"success"}),$?.()},onError:()=>{O.show({content:"Failed to update task",severity:"error"})}}),[Q,{isLoading:K}]=(0,S.f)(`/task/${y}`,{queryKey:`complete-customer-task-${y}`,method:"PUT",baseUrl:k.M,params:{scope:"this"},refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{O.show({content:"Task completed successfully",severity:"success"}),$?.()},onError:e=>{O.show({content:e.message||"Failed to complete task",severity:"error"})}}),X=Y||K,Z=(0,r.useCallback)(()=>{let e=Array.isArray(H?.formFields)?H.formFields:[],t=H?.submissionData;return!e.length||!!t&&e.filter(e=>e?.required).every(e=>{var r;let a=e?.stateName;return!a||null!=(r=t[a])&&("string"==typeof r?r.trim().length>0:Array.isArray(r)?r.length>0:"object"!=typeof r||Object.keys(r).length>0)})},[H?.formFields,H?.submissionData])(),ee=!!Array.isArray(H?.formFields)&&H.formFields.some(e=>e?.required),et=async()=>{await Q({body:{status:j.k.DONE,completion_by_customer:!0}}),N(!1),T.close()},er=(0,r.useMemo)(()=>{if(!J)return[];let e=[];return J.job?.number&&e.push({label:`${(0,w.f)(J.job.type)} ${"quote"!==J.job.type&&J.job.quoted?"Q":""} ${J.job.number}`.trim(),href:`${k.r.portalUrl}/dashboard/issues/view?id=${J.job.number}`}),e},[J]);if(z)return(0,t.jsx)(f.f,{width:"100%",justifyContent:"center",alignItems:"center",sx:{minHeight:200},children:(0,t.jsx)(d.f,{color:"secondary"})});if(!J)return(0,t.jsx)(s.f,{severity:"error",children:"Task is not found"});let ea=j.j.find(e=>e.value===J.status)?.label??J.status;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.f,{container:!0,spacing:3,sx:{minHeight:"calc(100vh - 128px)"},children:[(0,t.jsx)(c.f,{item:!0,xs:12,md:5,children:(0,t.jsxs)(f.f,{spacing:2,children:[(0,t.jsx)(m.f,{variant:"h6",fontWeight:700,children:J.title}),J.content&&(0,t.jsx)(m.f,{variant:"body2",color:"text.secondary",children:J.content}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(m.f,{children:"Due date:"}),(0,t.jsx)(m.f,{fontWeight:600,children:J.dueDate?(0,n.default)(J.dueDate).format("Do MMM YYYY"):"—"})]}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(m.f,{children:"Status:"}),(0,t.jsx)(l.f,{size:"small",label:ea})]}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(m.f,{children:"Assignee:"}),(0,t.jsx)(m.f,{fontWeight:600,children:J.assignedUser?.fullName??"—"})]}),er.length>0&&(0,t.jsxs)(f.f,{spacing:.5,children:[(0,t.jsx)(m.f,{children:"Linked entity:"}),er.map(e=>(0,t.jsx)(L.f,{href:e.href,children:e.label},e.href))]}),P&&H?.id&&(0,t.jsx)(q.f,{taskId:y,form:H,onFormUpdated:()=>G()}),(0,t.jsx)(u.f,{}),(0,t.jsxs)(f.f,{spacing:2,children:[(0,t.jsx)(h.e,{control:W,name:"status",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(g.f,{label:"Status",variant:"standard",color:"secondary",fullWidth:!0,disableClearable:!0,disabled:X,value:F.find(e=>e.value===r)??F[0],options:F,onChange:(e,t)=>{t&&(a(t.value),B({variables:{id:y,object:{status:t.value}}}))}})}}),(0,t.jsx)(o.f,{variant:"contained",color:"secondary",disabled:!Z||J.status===j.k.DONE||X,onClick:()=>N(!0),sx:{alignSelf:"flex-start"},children:"Mark Completed"})]}),ee&&!Z&&(0,t.jsx)(m.f,{variant:"body2",color:"error",children:"Complete the required form fields before marking this task done."})]})}),!D&&(0,t.jsx)(c.f,{item:!0,xs:12,md:.5,display:"flex",justifyContent:"center",children:(0,t.jsx)(u.f,{orientation:"vertical"})}),(0,t.jsx)(c.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(v.f,{elevation:0,maxHeight:"800px",title:"Activity",id:y,adminId:U.adminId,scope:"task",expanded:!0,hideExpandIcon:!0})})]}),(0,t.jsx)(R,{open:M,onClose:()=>N(!1),onConfirm:et,loading:X})]})}],1893)},393172,(e,t,r)=>{var a=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=a(e.r(421506)),n=e.r(391398);r.default=(0,i.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},474829,(e,t,r)=>{var a=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=a(e.r(421506)),n=e.r(391398);r.default=(0,i.default)((0,n.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutline")},896490,(e,t,r)=>{var a=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=a(e.r(421506)),n=e.r(391398);r.default=(0,i.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},891723,(e,t,r)=>{var a=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=a(e.r(421506)),n=e.r(391398);r.default=(0,i.default)((0,n.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},25932,715479,e=>{var t=e.i(75907),r=e.i(191788),a=e.i(691567),i=e.i(358024),n=e.i(138504),s=e.i(460997),o=e.i(33424),l=e.i(280445),d=e.i(226458),u=e.i(5366),c=e.i(754344),f=e.i(243239),m=e.i(391398);let p=["props","ref"],h=(0,l.f)(c.V)(e=>{let{theme:t}=e;return{overflow:"hidden",minWidth:f._,backgroundColor:(t.vars||t).palette.background.paper}});var y=e.i(685448),b=e.i(454311);let x=r.forwardRef(function(e,r){let a=(0,i.f)(e,"MuiStaticDatePicker"),l=a.displayStaticWrapperAs??"mobile",c=(0,t.f)({day:n.f,month:n.f,year:n.f},a.viewRenderers),{renderPicker:f}=(e=>{let{props:r,ref:a}=e,i=(0,s.f)(e,p),{localeText:n,slots:l,slotProps:c,className:f,sx:y,displayStaticWrapperAs:b,autoFocus:x}=r,{layoutProps:j,renderCurrentView:g}=(0,d.f)((0,t.f)({},i,{props:r,autoFocusView:x??!1,additionalViewProps:{},wrapperVariant:b})),v=l?.layout??h;return{renderPicker:()=>(0,m.jsx)(u.N,{localeText:n,children:(0,m.jsx)(v,(0,t.f)({},j,c?.layout,{slots:l,slotProps:c,sx:[...Array.isArray(y)?y:[y],...Array.isArray(c?.layout?.sx)?c.layout.sx:[c?.layout?.sx]],className:(0,o.f)(f,c?.layout?.className),ref:a,children:g()}))})}})({props:(0,t.f)({},a,{viewRenderers:c,displayStaticWrapperAs:l,yearsPerRow:a.yearsPerRow??("mobile"===l?3:4),slotProps:(0,t.f)({},a.slotProps,{toolbar:(0,t.f)({hidden:"desktop"===l},a.slotProps?.toolbar)})}),valueManager:b.X,valueType:"date",validator:y.f,ref:r});return f()});x.propTypes={autoFocus:a.default.bool,className:a.default.string,dayOfWeekFormatter:a.default.func,defaultValue:a.default.object,disabled:a.default.bool,disableFuture:a.default.bool,disableHighlightToday:a.default.bool,disablePast:a.default.bool,displayStaticWrapperAs:a.default.oneOf(["desktop","mobile"]),displayWeekNumber:a.default.bool,fixedWeekNumber:a.default.number,loading:a.default.bool,localeText:a.default.object,maxDate:a.default.object,minDate:a.default.object,monthsPerRow:a.default.oneOf([3,4]),onAccept:a.default.func,onChange:a.default.func,onClose:a.default.func,onError:a.default.func,onMonthChange:a.default.func,onViewChange:a.default.func,onYearChange:a.default.func,openTo:a.default.oneOf(["day","month","year"]),orientation:a.default.oneOf(["landscape","portrait"]),readOnly:a.default.bool,reduceAnimations:a.default.bool,referenceDate:a.default.object,renderLoading:a.default.func,shouldDisableDate:a.default.func,shouldDisableMonth:a.default.func,shouldDisableYear:a.default.func,showDaysOutsideCurrentMonth:a.default.bool,slotProps:a.default.object,slots:a.default.object,sx:a.default.oneOfType([a.default.arrayOf(a.default.oneOfType([a.default.func,a.default.object,a.default.bool])),a.default.func,a.default.object]),timezone:a.default.string,value:a.default.object,view:a.default.oneOf(["day","month","year"]),viewRenderers:a.default.shape({day:a.default.func,month:a.default.func,year:a.default.func}),views:a.default.arrayOf(a.default.oneOf(["day","month","year"]).isRequired),yearsOrder:a.default.oneOf(["asc","desc"]),yearsPerRow:a.default.oneOf([3,4])},e.s(["f",0,x],25932);var j=e.i(800884),g=e.i(813843);let v=()=>{},I=e=>{let{filtersChips:t,onRemove:r=v}=e;return(0,m.jsx)(g.f,{direction:"row",sx:{overflowX:"auto"},alignItems:"center",spacing:1,children:t.map(e=>(0,m.jsx)(j.f,{label:e.label,onDelete:()=>r(e.key)},e.key))})};I.propTypes={filtersChips:a.default.array,onRemove:a.default.func,filters:a.default.array},e.s(["f",0,I],715479)}])})();