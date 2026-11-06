(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,239189,e=>{e.s(["N",0,["serviceRate","rebate"],"O",0,{serviceRate:"Service Rate",rebate:"Rebate"},"e",0,["grossPercent","costPlus"]])},239964,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(691567),n=e.i(773831),r=e.i(33670),s=e.i(901004),o=e.i(509790),d=e.i(692113),u=e.i(137995),l=e.i(817581),c=e.i(420),m=e.i(870307),p=e.i(407329),f=e.i(390536),y=e.i(978319),b=e.i(376733),h=e.i(13558),g=e.i(562673),I=e.i(339909),j=e.i(89029),v=e.i(129503),x=e.i(213419),_=e.i(12028),A=e.i(813843),T=e.i(115871);let R={add:(0,t.jsx)(l.default,{}),archive:(0,t.jsx)(d.default,{}),avatar:(0,t.jsx)(_.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(y.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(f.default,{}),info:(0,t.jsx)(h.default,{}),edit:(0,t.jsx)(b.default,{}),location:(0,t.jsx)(j.default,{}),unarchive:(0,t.jsx)(u.default,{}),uploadFile:(0,t.jsx)(g.default,{}),receipt:(0,t.jsx)(I.default,{}),visibility:(0,t.jsx)(x.default,{})},$={default:(0,t.jsx)(o.default,{}),defaultHoriz:(0,t.jsx)(v.default,{}),description:(0,t.jsx)(p.default,{})},S=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],w=e=>{let{actionsData:a=S,icon:o="default",row:d,disabled:u=!1}=e,[l,c]=(0,i.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:u,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:$[o]}),(0,t.jsx)(r.f,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:!!l,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:a(d).map((e,i)=>(0,t.jsx)(s.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(A.f,{direction:"row",alignItems:"center",spacing:2,children:[R?.[e.icon]||null,(0,t.jsx)(T.f,{children:e.tooltip})]})},i))})]})};w.propTypes={actionsData:a.default.func,icon:a.default.oneOf(["default","description"]),row:a.default.any.isRequired,disabled:a.default.bool},e.s(["f",0,w])},209906,e=>{var t=e.i(159080),i=e.i(987123);let a=t.f`
  query GetJob($adminId: Int!, $number: String!) {
    job: Job(where: { adminId: { _eq: $adminId }, number: { _eq: $number } }) {
      id
      issueReportedDescription
      number
      invoiceNumber
      adminId
      title
      description
      reference
      referenceSupplier
      access
      aiSummary
      costCategory
      pricing
      supplierPricing
      timing
      timingStart
      timingEnd
      timingNormalHours
      paymentMethod
      customerSpendThreshold
      supplierSpendThreshold
      thresholdInformation
      time
      amount
      amountOutstanding
      invoicedToDate
      reconciledAmount
      amountToBeInvoiced
      amountOutstandingSupplier
      invoicedToDateSupplier
      reconciledAmountSupplier
      amountToBeInvoicedSupplier
      supplierLabourAmount
      supplierMaterialsAmount
      source
      discount
      timingStatus
      correctDuration
      correctStart
      correctEnd
      reportPassFail
      reportPassFailTitle
      requireReportRecommendations
      estimatedDuration
      estimatedDurationUnit
      anyTimeOption
      hourStart
      hourEnd
      onSiteTimingEnd
      jobReportTimingEnd
      quoteReturnedTimingEnd
      issueReportedDescription
      permitsLinks
      relatedLinks
      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")
      reverseCharge
      cisPercentage
      assetCategory: AssetCategory {
        name
        id
      }
      assets: Assets(where: { entity: { _eq: "Job" } }) {
        id
        status
        entityId
        asset: Asset {
          id
          name
        }
      }
      issueTypes: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: { status: { _eq: "active" }, type: { _eq: "issueType" } }
        }
      ) {
        id
        issue: Taxonomy {
          id
          name
        }
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: { status: { _eq: "active" }, type: { _eq: "tags" } }
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
      customerCustomVat: meta(path: "customerCustomVat")
      customer: Customer {
        meta
        defaultVatRate
      }
      supplierDeposit
      rebate
      status
      workStatus
      supplierNotes
      ppm
      quoted
      quoteNumber
      quoteDue
      quoteDueSupplier
      statusData
      scheduledAt
      createdAt
      updatedAt
      supplierId
      supplierUserId
      customerId
      customerUserId
      locationId
      managerId
      parentId
      serviceId
      slaId
      siteVisitStart
      siteVisitEnd
      siteVisitWeekends
      tenantId
      quoteCharge
      quoteChargeAmount
      jobScheduleId
      type
      meta
      jobMap
      assetsMap
      customerFinances
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

      admin: Admin {
        id
        name
        meta
        bankAccounts: BankAccounts {
          id
          bank
          stripeId
          accountNumber
          routingNumber
          bic
          iban
          status
          default
          createdAt
          meta
        }
        addresses: Addresses {
          id
          registered
          operating
          trading
          invoice
          status
          createdAt
          address: Address {
            id
            name
            addressLine1
            addressLine2
            addressLine3
            city
            county
            geo
            postCode
            country: Country {
              id
              name
            }
          }
        }
      }
      customer: Customer {
        id
        companyNumber
        createdAt
        name
        status
        type
        updatedAt
        website
        clientType
        managerId
        vatId
        defaultVatRate
        meta
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
        manager: Manager {
          id
          fullName
        }
        financial: Financial {
          id
          amountOutstanding
          approvalThreshold
          arrangementFee
          createdAt
          creditLimit
          creditRating
          defaultPaymentMethod
          invoicing
          serviceRate
          spendThreshold
          stripeId
          totalRevenue
          unpaidInvoices
        }
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
        services: Services(where: { entity: { _eq: "Account" } }) {
          id
          dayRate
          dayRateOOH
          dayRatePremium
          hourRate
          hourRateOOH
          hourRatePremium
          meta
          minimumInterval
          minimumLength
          callOutHourRate
          callOutHourRateOOH
          callOutHourRatePremium
          notes
          delivery
          createdAt
          updatedAt
          entity
          entityId
          serviceId
        }
        addresses: Addresses(where: { entity: { _eq: "Account" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            country: Country {
              id
              name
            }
          }
        }
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
      }
      customerUser: CustomerUser {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
        meta
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
      expenses: Expenses {
        id
        amount
        description
        markup
        total
        unit
        vat
        paid
      }
      sublocation: Sublocation {
        id
        name
      }
      location: Location {
        id
        access
        createdAt
        name
        contactUserId
        permitsRequired
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            countryId
            country: Country {
              id
              name
              code
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
        services: Services(where: { entity: { _eq: "Location" } }) {
          id
          dayRate
          dayRateOOH
          dayRatePremium
          hourRate
          hourRateOOH
          hourRatePremium
          meta
          minimumInterval
          minimumLength
          callOutHourRate
          callOutHourRateOOH
          callOutHourRatePremium
          notes
          delivery
          createdAt
          updatedAt
          entity
          entityId
          serviceId
        }
      }
      financeLogs: JobFinanceLogs(order_by: { createdAt: desc }) {
        id
        type
        value
        difference
        createdAt
      }
      manager: Manager {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
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
      quotations: SupplierQuotes(
        where: { status: { _neq: "cancelled" } }
        order_by: { quoteNumber: asc }
      ) {
        id
        createdAt
        jobId
        methodStatement
        notes
        quoteNumber
        startDate
        rebate
        recommended
        status
        totalDuration
        totalDurationUnit
        durationPrefix
        noticePeriod
        noticePeriodUnit
        meta
        updatedAt
        siteVisitAt
        type
        accountId
        lineItems: SupplierQuoteLineItems {
          id
          description
          item
          qty
          qtyUnit
          quoteId
          supplierTotal
          customerTotal
          type
          unitRate
          customerUnitRate
        }
        supplier: Supplier {
          id
          companyNumber
          createdAt
          name
          status
          type
          updatedAt
          website
          clientType
          managerId
          vatId
          meta
          accountUsers: Account_Users {
            user: User {
              id
              fullName
              nameFirst
              nameLast
              phone
              email
            }
          }
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
          manager: Manager {
            id
            fullName
          }
        }
        media: Media(where: { entity: { _eq: "Quotation" } }) {
          id
        }
      }
      report: JobReport {
        id
        completion
        meta
        notes
        timing
        passFailStatus
        recommendations
        comments
        createdAt
        updatedAt
      }
      service: Service {
        id
        name
        countryId
        currencyId
        customerDayRate
        customerDayRateOOH
        customerDayRatePremium
        customerHourRate
        customerHourRateOOH
        customerHourRatePremium
        supplierDayRate
        supplierDayRateOOH
        supplierDayRatePremium
        supplierHourRate
        supplierHourRateOOH
        supplierHourRatePremium
        minimumInterval
        minimumLength
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
      media: Media(where: { entity: { _eq: "Job" } }) {
        id
        item: Medium {
          id
          name
          type
          filename
          category
          meta
        }
      }
      relatedCustomers: JobRelatedCustomers {
        id
        accountId
      }
      supplier: Supplier {
        id
        companyNumber
        createdAt
        name
        status
        type
        updatedAt
        website
        clientType
        managerId
        vatId
        meta
        reverseCharge
        cisStatus
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
        manager: Manager {
          id
          fullName
        }
        contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
          role
          position
          isContact
          lastSignInAt
          userId
          user: User {
            id
            name: nameFirst
            nameFirst
            nameLast
            phone
            status
            email
            createdAt
            fullName
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
        addresses: Addresses(where: { entity: { _eq: "Account" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            country: Country {
              id
              name
            }
          }
        }
        services: Services(where: { entity: { _eq: "Account" } }) {
          id
          dayRate
          dayRateOOH
          dayRatePremium
          hourRate
          hourRateOOH
          hourRatePremium
          meta
          minimumInterval
          minimumLength
          callOutHourRate
          callOutHourRateOOH
          callOutHourRatePremium
          notes
          delivery
          createdAt
          updatedAt
          entity
          entityId
          serviceId
        }
      }
      supplierUser: SupplierUser {
        id
        meta
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
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
      supplierOffers: SupplierOffers {
        id
        status
        rate
        dayRate
        meta
        heldSupplierUserId
        heldScheduledAt
        heldAt
        heldByUserId
        notes
        statusLog
        accountId
        account: Supplier {
          id
          companyNumber
          createdAt
          name
          status
          type
          updatedAt
          website
          clientType
          managerId
          vatId
          meta
          serviceSchedules: ServiceSchedule(
            where: { status: { _eq: "active" }, entity: { _eq: "Supplier" } }
          ) {
            id
            serviceId
            normal
            ooh
            premium
          }
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
          manager: Manager {
            id
            fullName
          }
        }
      }
      tenant: Tenant {
        id
        companyNumber
        createdAt
        name
        status
        type
        updatedAt
        website
        clientType
        managerId
        vatId
        meta
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
        manager: Manager {
          id
          fullName
        }
      }
      tenantUser: TenantUser {
        id
        fullName
        nameFirst
        nameLast
        email
        phone
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
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
          meta
        }
      }
      quoteSummary: Taxonomy(where: { Taxonomy: { type: { _eq: "quoteSummary" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
          meta
        }
      }
      answers: Taxonomy(
        where: { Taxonomy: { type: { _eq: "jobQuestion" } } }
        order_by: { taxonomyId: asc }
      ) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
        }
      }
      costCategoryTaxonomy: CostCategory {
        id
        name
      }
      parentJob: ParentJob {
        createdAt
        id
        number
        reference
        status
        title
        type
      }
      childJobs: Jobs {
        createdAt
        id
        number
        reference
        status
        title
        type
      }
      compliance: Compliance {
        id
      }
      form: FormSubmissions(where: { entity: { _in: ["Job", "Ppm"] } }) {
        id
        formId
        formFields
        submissionData
        entity
        entityId
        type
        pdfGenerationStatus
        pdfGenerationId
        form: FormSubmissionsForm {
          name
          status
          description
          settings
          updatedAt
        }
      }
    }
  }
  ${i.a}
  ${i.S}
`;t.f`
  mutation MyMutation($objects: [CreateJobInput]!, $adminId: Int!) {
    createJob(adminId: $adminId, objects: $objects) {
      data
    }
  }
`;let n=t.f`
  mutation UpdateJob($id: Int!, $changes: Job_set_input) {
    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      status
    }
  }
`;t.f`
  query GetIssueTypesForSelect {
    issueTypes: Taxonomy(where: { type: { _eq: "issueType" } }) {
      value: id
      label: name
    }
  }
`,t.f`
  mutation UpdateJob(
    $jobId: Int!
    $changes: Job_set_input
    $deletedAssetIds: [Int!]
    $assets: [Asset_Entity_insert_input!]!
    $questions: [Taxonomy_Entity_insert_input!]!
    $hasQuestions: Boolean!
    $media: [Media_Entity_insert_input!]!
  ) {
    update_Job_by_pk(pk_columns: { id: $jobId }, _set: $changes) {
      id
      status
      number
    }
    insert_Media_Entity(objects: $media) {
      returning {
        id
      }
    }
    insert_Asset_Entity(objects: $assets) {
      returning {
        id
      }
    }
    delete_Asset_Entity(where: { id: { _in: $deletedAssetIds } }) {
      returning {
        id
      }
    }
    delete_Taxonomy_Entity(where: { entityId: { _eq: $jobId }, entity: { _eq: "Job" } }) {
      returning {
        id
      }
    }
    insert_Taxonomy_Entity(objects: $questions) @include(if: $hasQuestions) {
      returning {
        id
      }
    }
  }
`;let r=t.f`
  mutation AddJob($objects: [JobTiming_insert_input!]!) {
    insert_JobTiming(objects: $objects) {
      returning {
        id
        status
        notes
        createdAt
      }
    }
  }
`,s=t.f`
  mutation DeleteJobTiming($id: Int!, $quoteId: Int, $status: String) {
    delete_JobTiming(
      where: { jobId: { _eq: $id }, quoteId: { _eq: $quoteId }, status: { _eq: $status } }
    ) {
      returning {
        jobId
        status
      }
    }
  }
`,o=t.f`
  query GetSLAsForJobManage($customerId: Int!, $locationId: Int!) {
    customerSlas: SLA_Entity(
      where: { entityId: { _eq: $customerId }, entity: { _eq: "Account" } }
    ) {
      sla: SLA {
        name
      }
      id
      inUse
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      notes
      slaId
    }
    locationSlas: SLA_Entity(
      where: { entityId: { _eq: $locationId }, entity: { _eq: "Location" } }
    ) {
      sla: SLA {
        name
      }
      id
      inUse
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      notes
      slaId
      entity
    }
    slas: SLA(where: { status: { _eq: "active" } }, order_by: { name: asc }) {
      id
      label: name
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      type
      subtype
    }
  }
`,d=t.f`
  query GetJobFinanceLogs($jobId: Int!) {
    logs: JobFinanceLog(where: { jobId: { _eq: $jobId } }, order_by: { createdAt: desc }) {
      id
      type
      value
      difference
      createdAt
      meta
    }
    jobInfo: Job_by_pk(id: $jobId) {
      id
      type
      statusData
      pricing
      supplierPricing
      invoiceAmountCustomer
      invoiceAmountSupplier
      markupSupplierCost: meta(path: "markupSupplierCost")
      invoices: Invoices(where: { entity: { _eq: "Job" } }) {
        invoiceType
      }
      customerCustomVat: meta(path: "customerCustomVat")
      jobSchedule: JobSchedule {
        invoiceBasis
      }
      customer: Customer {
        rateType: meta(path: "$.finance.rateType")
        serviceRateType: meta(path: "$.finance.serviceRateType")
        serviceRateLabour: meta(path: "$.finance.serviceRateLabour")
        serviceRateExpenses: meta(path: "$.finance.serviceRateExpenses")
        defaultVatRate
      }
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        createdAt
      }
    }
  }
`,u=t.f`
  mutation AddJobFinanceLog($objects: [JobFinanceLog_insert_input!]!) {
    insert_JobFinanceLog(objects: $objects) {
      returning {
        id
      }
    }
  }
`,l=t.f`
  mutation AddJob(
    $timing: [JobTiming_insert_input!]!
    $financeLog: [JobFinanceLog_insert_input!]!
    $hasFinanceLog: Boolean!
    $jobId: Int!
    $jobChange: Job_set_input
  ) {
    insert_JobTiming(objects: $timing) {
      returning {
        id
        status
        notes
        createdAt
      }
    }
    insert_JobFinanceLog(objects: $financeLog) @include(if: $hasFinanceLog) {
      returning {
        id
      }
    }
    update_Job_by_pk(pk_columns: { id: $jobId }, _set: $jobChange) @include(if: $hasFinanceLog) {
      id
      status
    }
  }
`,c=t.f`
  mutation calculateJobFinance(
    $jobId: Int
    $invoiceType: String
    $customerId: Int
    $scheduleId: Int
    $locationId: Int
    $skipErrors: Boolean
  ) {
    calculateJobFinance(
      jobId: $jobId
      invoiceType: $invoiceType
      customerId: $customerId
      scheduleId: $scheduleId
      locationId: $locationId
      skipErrors: $skipErrors
    ) {
      data
    }
  }
`,m=t.f`
  subscription GetJobTimings($adminId: Int!, $number: String!) {
    timings: JobTiming(
      where: { Job: { adminId: { _eq: $adminId }, number: { _eq: $number } } }
      order_by: { id: desc }
    ) {
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
`;e.s(["u",0,r,"B",0,u,"_",0,l,"T",0,c,"s",0,s,"D",0,a,"E",0,d,"W",0,o,"U",0,m,"x",0,n])},588964,e=>{var t=e.i(391398),i=e.i(691567),a=e.i(668921),n=e.i(152078),r=e.i(471973),s=e.i(606255),o=e.i(984636),d=e.i(530252),u=e.i(813843),l=e.i(115871),c=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},p=e=>{let i=(0,c.f)(e,m),{label:p,options:y,error:b,helperText:h,stackProps:g={},formControlProps:I={},labelLeft:j}=i,v=e=>{let{children:i}=e;return(0,t.jsx)(t.Fragment,{children:i})};return(0,t.jsxs)(a.f,{sx:{m:3},error:b,variant:"standard",...I,children:[(0,t.jsxs)(u.f,{...j&&f,children:[p&&(0,t.jsx)(s.f,{id:"radio-group",color:"secondary",children:p}),(0,t.jsx)(o.f,{...i,"aria-labelledby":"radio-group",children:(0,t.jsx)(u.f,{...g,children:y.map(e=>{let{value:i,label:a,icon:r,ParentComponent:s=v}=e;return(0,t.jsx)(s,{children:(0,t.jsx)(n.f,{value:i,control:(0,t.jsx)(d.f,{color:"secondary"}),label:(0,t.jsxs)(u.f,{direction:"row",alignItems:"center",spacing:1,children:[r,(0,t.jsx)(l.f,{children:a})]})})})})})})]}),(0,t.jsx)(r.f,{children:h})]})};p.propTypes={label:i.default.string,options:i.default.arrayOf(i.default.shape({label:i.default.string.isRequired,value:i.default.any.isRequired,ParentComponent:i.default.elementType})),error:i.default.bool,helperText:i.default.string,stackProps:i.default.object,formControlProps:i.default.object,labelLeft:i.default.bool};let f={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,p])},510123,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(362537),n=e.i(432171),r=e.i(773412),s=e.i(159080);let o=s.f`
  fragment TaskFields on Task {
    id
    status
    priority
    title
    content
    dueDate
    assignedUser: AssignedUser {
      id
      fullName
    }
  }
`,d=s.f`
  query GetTasks(
    $jobId: Int
    $customerId: Int
    $supplierId: Int
    $locationId: Int
    $assignedUserId: Int
    $limit: Int
    $offset: Int
    $orderBy: Task_order_by!
  ) {
    tasks: Task(
      where: {
        jobId: { _eq: $jobId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        locationId: { _eq: $locationId }
        assignedUserId: { _eq: $assignedUserId }
      }
      limit: $limit
      offset: $offset
      order_by: [$orderBy]
    ) {
      ...TaskFields
    }
    meta: Task_aggregate(
      where: {
        jobId: { _eq: $jobId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        locationId: { _eq: $locationId }
        assignedUserId: { _eq: $assignedUserId }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${o}
`,u=s.f`
  subscription GetTasks(
    $jobId: Int
    $customerId: Int
    $supplierId: Int
    $locationId: Int
    $assignedUserId: Int
    $limit: Int
    $offset: Int
    $orderBy: Task_order_by!
  ) {
    tasks: Task(
      where: {
        jobId: { _eq: $jobId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        locationId: { _eq: $locationId }
        assignedUserId: { _eq: $assignedUserId }
      }
      limit: $limit
      offset: $offset
      order_by: [$orderBy]
    ) {
      ...TaskFields
    }
  }
  ${o}
`;var l=e.i(594301),c=e.i(98762),m=e.i(871931),p=e.i(760981),f=e.i(302966),y=e.i(738251),b=e.i(755548),h=e.i(799083),g=e.i(76381),I=e.i(152078),j=e.i(813843),v=e.i(115871),x=e.i(747112),_=e.i(220490),A=e.i(101934),T=e.i(106850),R=e.i(280445),$=e.i(529292),S=e.i(885783),w=e.i(337089);let C=e=>{let{title:i="",dueDate:a,priority:n,status:r,content:s,assigned:o,onView:d=()=>{}}=e;return(0,t.jsxs)(q,{variant:"outlined",children:[(0,t.jsxs)(T.f,{sx:{padding:1},children:[(0,t.jsxs)(j.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(S.f,{priority:n}),(0,t.jsx)(w.f,{status:r})]}),(0,t.jsxs)(v.f,{mt:1,variant:"h6",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[i,"  "]}),(0,t.jsx)(v.f,{mt:1,sx:{height:"63px",overflow:"hidden"},children:s}),o&&(0,t.jsxs)(v.f,{variant:"subtitle2",children:["Assigned by ",o]})]}),(0,t.jsxs)(A.f,{sx:{display:"flex",justifyContent:"space-between",pt:0},children:[(0,t.jsx)(b.f,{variant:"contained",color:"secondary",onClick:d,sx:{height:"30px"},children:"View"}),(0,t.jsx)(k,{variant:"subtitle2",children:a})]})]})},q=(0,R.f)(_.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",justifyContent:"space-between",maxHeight:"210px",minWidth:"280px",backgroundColor:t.palette.muiCardGray.main}}),k=(0,R.f)(v.f)(e=>{let{theme:t}=e;return{alignSelf:"flex-end",fontWeight:700,color:(0,$.V)(t.palette.black.main,.46)}});var U=e.i(811179),D=e.i(411331),L=e.i(265387),F=e.i(398038);let O={item:"dueDate",order:"desc"};e.s(["f",0,e=>{let{jobId:s,customerId:o,supplierId:_,locationId:A,subscription:T,accordionSx:R,expanded:$,showMyTaskButton:S=!1,onChangeExpanded:w=()=>{}}=e,q=(0,D.f)(),{user:k}=(0,l.f)(),{initialData:J}=(0,c.f)({filters:{jobId:s,customerId:o,supplierId:_,locationId:A},initialSort:O}),[M,P]=(0,i.useState)(!1),E={...J,assignedUserId:M?k.id:J.userId},{loading:N,data:{tasks:H}={tasks:[],meta:{aggregate:{totalCount:0}}}}=(0,n.t)(d,{variables:{...E},skip:T}),{loading:V,data:{tasks:Y}={tasks:[]}}=(0,r.f)(u,{variables:{...E},skip:!T}),B=(0,i.useCallback)(e=>{let{id:i}=e;q.show({content:(0,t.jsx)(U.DetailsTaskForm,{id:i}),title:"Task Details",submitForm:"taskDetailsForm",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw",query:{task_id:i.toString()},keepPrevQueryOnOpen:!0})},[q]),{open:G}=(0,F.f)(B,"task_id"),Q=(T?Y:H).map(e=>({id:e.id,status:e.status,priority:e.priority,title:e.title,content:e.content,dueDate:(0,a.default)(e.dueDate).format("YYYY-MM-DD"),assignedUser:e.assignedUser?.fullName,item:e,actions:""}));return(0,t.jsx)(y.f,{children:(0,t.jsxs)(m.f,{expanded:$,onChange:w,sx:R,defaultExpanded:!0,children:[(0,t.jsx)(f.f,{expandIcon:(0,t.jsx)(x.f,{}),children:(0,t.jsx)(v.f,{variant:"h6",children:"Tasks"})}),(0,t.jsx)(p.f,{sx:{paddingTop:0},children:(0,t.jsxs)(j.f,{width:"100%",spacing:1,children:[(0,t.jsxs)(j.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(v.f,{children:"Current task in progress"}),S&&(0,t.jsx)(I.f,{control:(0,t.jsx)(h.f,{color:"secondary",checked:M,onChange:e=>{e.stopPropagation(),P(e=>!e)}}),label:"My Tasks"})]}),(0,t.jsx)(j.f,{width:"100%",direction:"row",spacing:2,pb:1,sx:{overflowX:"scroll"},children:N||V?(0,t.jsx)(j.f,{width:"100%",direction:"row",justifyContent:"center",children:(0,t.jsx)(g.f,{color:"secondary"})}):Q.map(e=>(0,t.jsx)(C,{dueDate:e.dueDate,priority:e.priority,status:e.status,title:e.title,content:e.content,assigned:e.assignedUser,onView:t=>G({id:e.id})}))}),(0,t.jsx)(j.f,{direction:"row",justifyContent:"center",children:(0,t.jsx)(b.f,{variant:"contained",color:"secondary",onClick:e=>{e.preventDefault(),e.stopPropagation(),q.show({content:(0,t.jsx)(L.f,{jobId:s,customerId:o,supplierId:_,locationId:A,close:e=>{q.close(),G({id:e})}}),title:"Create Task",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"50vw",lg2:"40vw",keepPrevQueryOnOpen:!0})},children:"Add new task"})})]})})]})})}],510123)},265387,398038,e=>{var t=e.i(391398),i=e.i(362537),a=e.i(98926),n=e.i(776204),r=e.i(511667),s=e.i(974261),o=e.i(422411),d=e.i(424894),u=e.i(428424),l=e.i(76381),c=e.i(813843),m=e.i(652148),p=e.i(588964),f=e.i(722394),y=e.i(962379),b=e.i(230512),h=e.i(594301),g=e.i(394989),I=e.i(941062);e.i(864980);var j=e.i(790388),v=e.i(856688),x=e.i(191788),_=e.i(54100),A=e.i(21557),T=e.i(896657),R=e.i(738251),$=e.i(341056),S=e.i(498681),w=e.i(620291),C=e.i(867586),q=e.i(593626),k=e.i(885549),U=e.i(116823),D=e.i(877602),L=e.i(271775),F=e.i(144634),O=e.i(441625);async function J(e,t,i,a){if(i.value&&i.formFields){var n;await e.mutate({mutation:O.O,variables:{formId:Number(i.value),userId:i.userId||a,submissionData:(e=>{if(e)return{...e}})(i.submissionData),formFields:(n=i.formFields)?Array.isArray(n)?n:[n]:[],entity:"Task",entityId:t}})}}e.i(604265);let M=x.default.memo(_.f);e.s(["f",0,e=>{let{jobId:_,customerId:O,supplierId:P,locationId:E,close:N}=e,{user:H}=(0,h.f)(),V=(0,a.f)(),Y=(0,S.f)(),B=Y?.admin?.modules?.formBuilder||!1,G=(0,A.f)(),{createMediaInput:Q,loadingAddMedia:W}=(0,v.f)("Task",H.adminId,H.id),{handleSubmit:K,watch:z,setValue:X,control:Z,errors:ee,register:et,formState:ei,setError:ea,clearErrors:en}=(0,o.G)({defaultValues:{priority:"urgent",relatedLinks:[],customerAccount:null,assignedCustomer:null},resolver:(0,d.yupResolver)(I.f)}),er=z("customerAccount"),es=z("relatedLinks"),eo=z("attachments"),ed=z("formSubmission"),eu=z("dueDate"),[el,ec]=(0,x.useState)(!1),[em,ep]=(0,x.useState)(!1),[ef,ey]=(0,x.useState)(""),[eb,eh]=(0,x.useState)(""),eg=(0,x.useRef)(ef);(0,x.useEffect)(()=>{eg.current=ef},[ef]);let eI=(0,L.f)(ef),ej=eu&&el?eI?(0,i.default)(eu).format("YYYY-MM-DD-HH-mm"):(0,i.default)(eu).format("YYYY-MM-DD"):null;(0,x.useEffect)(()=>{O&&X("customerAccount",{value:O,label:""},{shouldDirty:!1})},[O,X]),(0,x.useEffect)(()=>{if(!el||!eu)return;let e=(0,F.v)(eu,eg.current,{syncStartToDueDate:!0});e.rruleString&&(ey(e.rruleString),eh(e.rruleText))},[ej,el,eI,eu]);let[ev,{isLoading:ex}]=(0,r.f)("/task",{queryKey:"create-task-rest",method:"POST",baseUrl:s.M,onError:e=>{G.show({content:e.message||D.G,severity:"error"})}}),[e_,{loading:eA}]=(0,n.f)(b.A,{refetchQueries:["GetTasksTable"],onCompleted:()=>{G.show({content:"Task created successfully",severity:"success"})},onError:()=>{G.show({content:"Failed to create task",severity:"error"})}}),eT=(0,x.useCallback)(e=>{X("content",e.textContent),X("editorState",e.json)},[X]),eR=(0,x.useCallback)((e,t)=>{ey(e),eh(t)},[]),e$=async e=>{let t;if(el){if(!e.dueDate)return void G.show({content:"Set a due date before enabling recurrence.",severity:"error"});if(em)return void G.show({content:"Check the recurrence end date.",severity:"error"});if(!ef)return void G.show({content:D.G,severity:"error"})}let i=await Q(e.attachments),a=(0,T.U)(e.relatedLinks),n=(0,T.n)(e.relatedLinks),r=(0,T.V)(e.relatedLinks),s=(0,k.D)(e,O||a),o={status:u.k.NEW,priority:e.priority,relatedLinks:e.relatedLinks,title:e.title,content:e.content,editorState:e.editorState,dueDate:e.dueDate,adminId:H.adminId,userId:H.id,assignedAccountId:(0,k.E)(e,H.adminId),assignedUserId:(0,k.w)(e),jobId:_,customerId:s,supplierId:P||n,locationId:E||r,...i||{}},d=ed?.value&&ed?.formFields?{formId:Number(ed.value),userId:ed.userId||H.id,formFields:Array.isArray(ed.formFields)?ed.formFields:[ed.formFields],submissionData:ed.submissionData??null}:void 0,l=!1;if(el&&ef){l=!0;let e=await ev({body:{...o,recurrence_rule:ef,recurrence_description:eb,...d?{form:d}:{}}});if(!(t=e?.id))return;await V.refetchQueries({include:["GetTasksTable","GetCustomerTasksTable"]}),G.show({content:"Task created successfully",severity:"success"})}else{let{data:e}=await e_({variables:{objects:[o]}});if(!e||!e.insert_Task?.returning?.[0]?.id)return;t=e.insert_Task.returning[0].id}if(t){if(!l&&ed?.value&&ed?.formFields)try{await J(V,t,ed,H.id)}catch{G.show({content:"Task created but the form could not be linked.",severity:"warning"})}N?.(t)}};return eA||ex||W?(0,t.jsx)(c.f,{width:"100%",direction:"column",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(l.f,{color:"secondary"})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:K(e$),children:(0,t.jsxs)(c.f,{direction:"column",spacing:3,children:[(0,t.jsx)(o.e,{control:Z,name:"title",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(m.f,{variant:"standard",color:"secondary",label:"Title",value:i,onChange:a,error:!!ee.title,helperText:ee.title?.message})}}),(0,t.jsx)(M,{handleChange:eT}),(0,t.jsx)(o.e,{control:Z,name:"priority",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(p.f,{label:"Priority:",labelLeft:!0,stackProps:{direction:"row",flexWrap:"wrap"},options:u.s,value:i,onChange:a,error:ee.priority,helperText:ee.priority?.message})}}),(0,t.jsx)(o.e,{control:Z,name:"dueDate",defaultValue:null,render:e=>{let{value:a,onChange:n}=e;return eI?(0,t.jsx)(y.f,{label:"Due date",format:"Do MMM YYYY HH:mm",ampm:!1,minutesStep:15,minDateTime:(0,i.default)(),value:a?(0,i.default)(a):null,onChange:e=>{n(e&&(0,i.default)(e).isValid()?(0,i.default)(e).toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!ee.dueDate,helperText:ee.dueDate?.message}}}):(0,t.jsx)(f.f,{label:"Due date",format:"Do MMM YYYY",minDate:(0,i.default)().startOf("day"),value:a?(0,i.default)(a):null,onChange:e=>{let t=(0,F.p)(e);n(t?t.toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!ee.dueDate,helperText:ee.dueDate?.message}}})}}),(0,t.jsx)(o.e,{name:"assignedUser",control:Z,defaultValue:null,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(w.f,{value:i,onChange:a,error:!!ee.assignedUser,helperText:ee.assignedUser?.value?.message})}}),(0,t.jsx)(o.e,{name:"customerAccount",control:Z,defaultValue:null,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(C.f,{value:i,onChange:e=>{a(e),X("assignedCustomer",null)},error:!!ee.customerAccount,helperText:ee.customerAccount?.message})}}),(0,t.jsx)(o.e,{name:"assignedCustomer",control:Z,defaultValue:null,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(q.f,{customerAccountId:er?.value??null,value:i,onChange:a,error:!!ee.assignedCustomer,helperText:ee.assignedCustomer?.message})}}),(0,t.jsx)(g.f,{values:es,setValue:X,name:"relatedLinks"}),(0,t.jsx)(U.f,{dueDate:eu?(0,i.default)(eu):null,frequency:ef,onRecurrenceEnabledChange:ec,onFrequencyChange:eR,onFrequencyErrorChange:ep,setValue:X}),(0,t.jsx)(j.f,{values:eo,setValue:X}),(0,t.jsx)(o.e,{name:"content",control:Z,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{value:i,onChange:a,type:"hidden"})}}),(0,t.jsx)(o.e,{name:"editorState",control:Z,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{value:i,onChange:a,type:"hidden"})}}),(0,t.jsx)(o.e,{name:"relatedLinks",control:Z,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{value:i,onChange:a,type:"hidden"})}}),(0,t.jsx)(o.e,{name:"attachments",control:Z,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{value:i,onChange:a,type:"hidden"})}}),B&&(0,t.jsx)(R.f,{children:(0,t.jsx)($.f,{control:Z,errors:ee,register:et,setValue:X,formState:ei,setError:ea,clearErrors:en,hasPreview:!0,entity:"Task",entityId:null})})]})})}],265387);var P=e.i(203828);e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",{query:i}=(0,P.useRouter)(),a=(0,x.useRef)(!1);return(0,x.useEffect)(()=>{let n=i[t],r=Number(n);a.current||!n||isNaN(r)||e({id:r}),a.current=!0},[e,i,t]),{open:(0,x.useCallback)(t=>{let{id:i}=t;e({id:i})},[e])}}],398038)},520561,e=>{var t=e.i(209906);let i=async(e,i,a)=>{let n=null,r=null,s=null,o=null,d=[];return a&&"supplier"!==a||d.push(e.mutate({mutation:t.T,variables:{jobId:i,invoiceType:"supplier"}}).then(e=>{n=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{s=e})),a&&"supplier"===a||d.push(e.mutate({mutation:t.T,variables:{jobId:i,invoiceType:"customerVat"}}).then(e=>{r=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{o=e})),await Promise.all(d),{financeSupplier:n,financeCustomer:r,supplierError:s,customerError:o}},a=async e=>{let{client:i,customerId:a,scheduleId:n,locationId:r,skipErrors:s=!1}=e;return i.mutate({mutation:t.T,variables:{customerId:a,scheduleId:n,locationId:r,skipErrors:s}})};e.s(["L",0,a,"f",0,i])},785744,581384,e=>{e.s(["f",0,20],581384);let t=e=>{if(null==e||"string"==typeof e&&""===e.trim())return null;let t="string"==typeof e?Number(e):e;return"number"!=typeof t||!Number.isFinite(t)||t<0||t>100?null:t};e.s(["u",0,e=>{if(e.jobCustomVat?.enabled){let i=t(e.jobCustomVat.rate);if(null!==i)return i}let i=t(e.customerDefaultVatRate);return null!==i?i:20},"H",0,t],785744)},995070,e=>{e.s(["i",0,"VAT rate must be between 0 and 100, to a maximum of 2 decimal places.","r",0,"Enter a VAT rate.","b",0,e=>{if(null==e||Number.isNaN(e))return!0;let t=100*e;return Math.abs(t-Math.round(t))<=1e-9*Math.max(1,Math.abs(t))},"H",0,e=>{let{value:t,validity:i}=e.target;return i.badInput?0/0:""===t?null:Number(t)}])},870307,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")}])})();