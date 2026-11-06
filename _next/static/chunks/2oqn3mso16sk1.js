(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[913758,e=>{var t=e.i(159080),a=e.i(987123);let s=t.f`
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
`,r=t.f`
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
  ${a.a}
  ${a.S}
`;e.s(["x",0,l,"d",0,u,"o",0,c,"G",0,d,"E",0,i,"u",0,r,"P",0,f,"m",0,s,"U",0,m,"b",0,o,"T",0,n])},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,a)=>{if(!a)return null;let s=(0,t.default)(a);if(!s.isValid())return null;let i=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),r=s.clone().add(i,"minutes");return{start:s.toISOString(),end:r.toISOString()}}])},878718,e=>{var t=e.i(391398),a=e.i(728011);e.s(["default",0,()=>(0,t.jsx)(a.f,{type:"admin"})])},353069,e=>{var t=e.i(159080);let a=t.f`
  query GetSuppliersForAssign($jobId: Int!) {
    data: getSuppliersForAssign(jobId: $jobId) {
      job
      customerRates
      suppliers
      hasArea
      hasActiveOffer
    }
  }
`,s=t.f`
  mutation AcceptJob($object: AcceptJobOfferInput!) {
    acceptJobOffer(acceptOfferInput: $object) {
      data
      success
    }
  }
`;e.s(["J",0,s,"z",0,a])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},127342,e=>{var t=e.i(191788),a=e.i(511667),s=e.i(21557);e.s(["f",0,e=>{let i=(0,s.f)(),[r,{isLoading:n}]=(0,a.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{i.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return r({body:t,pathParams:{offerId:e}})},[r,e]),isLoading:n}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,a=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let a=t.timeHold;if(!a?.scheduledAt)return null;let s=Number(a.supplierUserId);return Number.isFinite(s)?{...a,supplierUserId:s}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let a=Number(e.heldSupplierUserId);if(Number.isFinite(a))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:a,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return a(e.meta)}return a(e)}])},1893,e=>{var t=e.i(391398),a=e.i(191788),s=e.i(776204),i=e.i(432171),r=e.i(362537),n=e.i(936641),o=e.i(755548),l=e.i(800884),d=e.i(76381),u=e.i(986351),c=e.i(740790),m=e.i(813843),f=e.i(115871),p=e.i(587369),h=e.i(422411),y=e.i(159080);let b=y.f`
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
`;var I=e.i(230512),x=e.i(428424),_=e.i(824451),g=e.i(714119),j=e.i(594301),A=e.i(21557),v=e.i(411331),S=e.i(498681),C=e.i(511667),$=e.i(974261),q=e.i(299796),U=e.i(53182),k=e.i(382161),w=e.i(77052),T=e.i(185758),O=e.i(556918);let D={fontFamily:e.i(494575).f.THEME_TYPOGRAPHY.newFont},F=e=>{let{open:a,onClose:s,onConfirm:i,loading:r}=e;return(0,t.jsxs)(k.f,{open:a,onClose:s,PaperProps:{sx:D},children:[(0,t.jsx)(O.f,{sx:D,children:"Mark Completed"}),(0,t.jsx)(T.f,{children:(0,t.jsx)(f.f,{sx:D,children:"Mark this task complete? You won't be able to undo this."})}),(0,t.jsxs)(w.f,{children:[(0,t.jsx)(o.f,{variant:"contained",color:"danger",onClick:s,children:"Cancel"}),(0,t.jsx)(o.f,{color:"secondary",variant:"contained",onClick:i,disabled:r,children:"Confirm"})]})]})};var R=e.i(889231);let L=x.j.filter(e=>e.value!==x.k.DONE&&e.value!==x.k.BLOCKED);e.s(["f",0,e=>{let{id:y,onUpdated:k}=e,w=(0,p.f)("(max-width: 900px)"),{user:T}=(0,j.f)(),O=(0,A.f)(),D=(0,v.f)(),N=(0,S.f)(),E=N?.admin?.modules?.formBuilder||!1,[J,P]=(0,a.useState)(!1),{data:{task:G}={task:null},loading:M,refetch:B}=(0,i.t)(b,{variables:{id:y}}),{control:V,reset:W}=(0,h.G)({defaultValues:{status:x.k.NEW}});(0,a.useEffect)(()=>{G?.status&&W({status:G.status})},[G?.status,W]);let H=(0,a.useMemo)(()=>G?.form?.[0],[G?.form]),[z,{loading:Y}]=(0,s.f)(I.Q,{refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{O.show({content:"Task updated successfully",severity:"success"}),k?.()},onError:()=>{O.show({content:"Failed to update task",severity:"error"})}}),[Q,{isLoading:K}]=(0,C.f)(`/task/${y}`,{queryKey:`complete-customer-task-${y}`,method:"PUT",baseUrl:$.M,params:{scope:"this"},refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{O.show({content:"Task completed successfully",severity:"success"}),k?.()},onError:e=>{O.show({content:e.message||"Failed to complete task",severity:"error"})}}),X=Y||K,Z=(0,a.useCallback)(()=>{let e=Array.isArray(H?.formFields)?H.formFields:[],t=H?.submissionData;return!e.length||!!t&&e.filter(e=>e?.required).every(e=>{var a;let s=e?.stateName;return!s||null!=(a=t[s])&&("string"==typeof a?a.trim().length>0:Array.isArray(a)?a.length>0:"object"!=typeof a||Object.keys(a).length>0)})},[H?.formFields,H?.submissionData])(),ee=!!Array.isArray(H?.formFields)&&H.formFields.some(e=>e?.required),et=async()=>{await Q({body:{status:x.k.DONE,completion_by_customer:!0}}),P(!1),D.close()},ea=(0,a.useMemo)(()=>{if(!G)return[];let e=[];return G.job?.number&&e.push({label:`${(0,q.f)(G.job.type)} ${"quote"!==G.job.type&&G.job.quoted?"Q":""} ${G.job.number}`.trim(),href:`${$.r.portalUrl}/dashboard/issues/view?id=${G.job.number}`}),e},[G]);if(M)return(0,t.jsx)(m.f,{width:"100%",justifyContent:"center",alignItems:"center",sx:{minHeight:200},children:(0,t.jsx)(d.f,{color:"secondary"})});if(!G)return(0,t.jsx)(n.f,{severity:"error",children:"Task is not found"});let es=x.j.find(e=>e.value===G.status)?.label??G.status;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.f,{container:!0,spacing:3,sx:{minHeight:"calc(100vh - 128px)"},children:[(0,t.jsx)(c.f,{item:!0,xs:12,md:5,children:(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(f.f,{variant:"h6",fontWeight:700,children:G.title}),G.content&&(0,t.jsx)(f.f,{variant:"body2",color:"text.secondary",children:G.content}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Due date:"}),(0,t.jsx)(f.f,{fontWeight:600,children:G.dueDate?(0,r.default)(G.dueDate).format("Do MMM YYYY"):"—"})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Status:"}),(0,t.jsx)(l.f,{size:"small",label:es})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Assignee:"}),(0,t.jsx)(f.f,{fontWeight:600,children:G.assignedUser?.fullName??"—"})]}),ea.length>0&&(0,t.jsxs)(m.f,{spacing:.5,children:[(0,t.jsx)(f.f,{children:"Linked entity:"}),ea.map(e=>(0,t.jsx)(R.f,{href:e.href,children:e.label},e.href))]}),E&&H?.id&&(0,t.jsx)(U.f,{taskId:y,form:H,onFormUpdated:()=>B()}),(0,t.jsx)(u.f,{}),(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(h.e,{control:V,name:"status",render:e=>{let{value:a,onChange:s}=e;return(0,t.jsx)(_.f,{label:"Status",variant:"standard",color:"secondary",fullWidth:!0,disableClearable:!0,disabled:X,value:L.find(e=>e.value===a)??L[0],options:L,onChange:(e,t)=>{t&&(s(t.value),z({variables:{id:y,object:{status:t.value}}}))}})}}),(0,t.jsx)(o.f,{variant:"contained",color:"secondary",disabled:!Z||G.status===x.k.DONE||X,onClick:()=>P(!0),sx:{alignSelf:"flex-start"},children:"Mark Completed"})]}),ee&&!Z&&(0,t.jsx)(f.f,{variant:"body2",color:"error",children:"Complete the required form fields before marking this task done."})]})}),!w&&(0,t.jsx)(c.f,{item:!0,xs:12,md:.5,display:"flex",justifyContent:"center",children:(0,t.jsx)(u.f,{orientation:"vertical"})}),(0,t.jsx)(c.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(g.f,{elevation:0,maxHeight:"800px",title:"Activity",id:y,adminId:T.adminId,scope:"task",expanded:!0,hideExpandIcon:!0})})]}),(0,t.jsx)(F,{open:J,onClose:()=>P(!1),onConfirm:et,loading:X})]})}],1893)},25932,715479,e=>{var t=e.i(75907),a=e.i(191788),s=e.i(691567),i=e.i(358024),r=e.i(138504),n=e.i(460997),o=e.i(33424),l=e.i(280445),d=e.i(226458),u=e.i(5366),c=e.i(754344),m=e.i(243239),f=e.i(391398);let p=["props","ref"],h=(0,l.f)(c.V)(e=>{let{theme:t}=e;return{overflow:"hidden",minWidth:m._,backgroundColor:(t.vars||t).palette.background.paper}});var y=e.i(685448),b=e.i(454311);let I=a.forwardRef(function(e,a){let s=(0,i.f)(e,"MuiStaticDatePicker"),l=s.displayStaticWrapperAs??"mobile",c=(0,t.f)({day:r.f,month:r.f,year:r.f},s.viewRenderers),{renderPicker:m}=(e=>{let{props:a,ref:s}=e,i=(0,n.f)(e,p),{localeText:r,slots:l,slotProps:c,className:m,sx:y,displayStaticWrapperAs:b,autoFocus:I}=a,{layoutProps:x,renderCurrentView:_}=(0,d.f)((0,t.f)({},i,{props:a,autoFocusView:I??!1,additionalViewProps:{},wrapperVariant:b})),g=l?.layout??h;return{renderPicker:()=>(0,f.jsx)(u.N,{localeText:r,children:(0,f.jsx)(g,(0,t.f)({},x,c?.layout,{slots:l,slotProps:c,sx:[...Array.isArray(y)?y:[y],...Array.isArray(c?.layout?.sx)?c.layout.sx:[c?.layout?.sx]],className:(0,o.f)(m,c?.layout?.className),ref:s,children:_()}))})}})({props:(0,t.f)({},s,{viewRenderers:c,displayStaticWrapperAs:l,yearsPerRow:s.yearsPerRow??("mobile"===l?3:4),slotProps:(0,t.f)({},s.slotProps,{toolbar:(0,t.f)({hidden:"desktop"===l},s.slotProps?.toolbar)})}),valueManager:b.X,valueType:"date",validator:y.f,ref:a});return m()});I.propTypes={autoFocus:s.default.bool,className:s.default.string,dayOfWeekFormatter:s.default.func,defaultValue:s.default.object,disabled:s.default.bool,disableFuture:s.default.bool,disableHighlightToday:s.default.bool,disablePast:s.default.bool,displayStaticWrapperAs:s.default.oneOf(["desktop","mobile"]),displayWeekNumber:s.default.bool,fixedWeekNumber:s.default.number,loading:s.default.bool,localeText:s.default.object,maxDate:s.default.object,minDate:s.default.object,monthsPerRow:s.default.oneOf([3,4]),onAccept:s.default.func,onChange:s.default.func,onClose:s.default.func,onError:s.default.func,onMonthChange:s.default.func,onViewChange:s.default.func,onYearChange:s.default.func,openTo:s.default.oneOf(["day","month","year"]),orientation:s.default.oneOf(["landscape","portrait"]),readOnly:s.default.bool,reduceAnimations:s.default.bool,referenceDate:s.default.object,renderLoading:s.default.func,shouldDisableDate:s.default.func,shouldDisableMonth:s.default.func,shouldDisableYear:s.default.func,showDaysOutsideCurrentMonth:s.default.bool,slotProps:s.default.object,slots:s.default.object,sx:s.default.oneOfType([s.default.arrayOf(s.default.oneOfType([s.default.func,s.default.object,s.default.bool])),s.default.func,s.default.object]),timezone:s.default.string,value:s.default.object,view:s.default.oneOf(["day","month","year"]),viewRenderers:s.default.shape({day:s.default.func,month:s.default.func,year:s.default.func}),views:s.default.arrayOf(s.default.oneOf(["day","month","year"]).isRequired),yearsOrder:s.default.oneOf(["asc","desc"]),yearsPerRow:s.default.oneOf([3,4])},e.s(["f",0,I],25932);var x=e.i(800884),_=e.i(813843);let g=()=>{},j=e=>{let{filtersChips:t,onRemove:a=g}=e;return(0,f.jsx)(_.f,{direction:"row",sx:{overflowX:"auto"},alignItems:"center",spacing:1,children:t.map(e=>(0,f.jsx)(x.f,{label:e.label,onDelete:()=>a(e.key)},e.key))})};j.propTypes={filtersChips:s.default.array,onRemove:s.default.func,filters:s.default.array},e.s(["f",0,j],715479)}],795640,e=>{e.v(t=>Promise.all(["static/chunks/0r015bydn99_l.js"].map(t=>e.l(t))).then(()=>t(594366)))},655718,function(e){e.n(e.i(878718))}]);