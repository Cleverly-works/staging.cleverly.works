(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,239189,e=>{e.s(["N",0,["serviceRate","rebate"],"O",0,{serviceRate:"Service Rate",rebate:"Rebate"},"e",0,["grossPercent","costPlus"]])},890350,e=>{var t,n,i,r=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),a=((n={}).VERIFIED="verified",n.UNVERIFIED="unverified",n),o=((i={}).CLEVERLY="cleverly",i.XERO="xero",i.BIDIRECTIONAL="bidirectional",i.NONE="none",i);e.s(["d",()=>r,"T",()=>a,"$",()=>o])},518566,277984,841879,e=>{var t,n,i=((t={}).CustomerGroupInvoice="customerGroupInvoice",t.CustomerPpmInvoice="customerPpmInvoice",t.CustomerVat="customerVat",t.ProformaInvoiceCustomer="ProformaInvoiceCustomer",t.ProformaInvoiceSupplier="ProformaInvoiceSupplier",t.Supplier="supplier",t.SupplierPpmInvoice="supplierPpmInvoice",t);e.s(["f",()=>i],518566);var r=((n={}).INVOICE="invoice",n.PROFORMA_INVOICE="proformaInvoice",n.CREDIT_NOTE="creditNote",n.PAYMENT_RECEIPT="paymentReceipt",n.CUSTOMER_PPM_INVOICE="customerPpmInvoice",n.CUSTOMER_GROUP_INVOICE="customerGroupInvoice",n.SUPPLIER_PPM_INVOICE="supplierPpmInvoice",n);e.s(["f",()=>r],277984);let a={[r.CREDIT_NOTE]:"credit-note",[r.CUSTOMER_GROUP_INVOICE]:"customer-group",[r.CUSTOMER_PPM_INVOICE]:"customer-ppm",[r.SUPPLIER_PPM_INVOICE]:"supplier-ppm",[r.PROFORMA_INVOICE]:"proforma"},o={[i.CustomerVat]:"customer-vat",[i.Supplier]:"supplier"};e.s(["f",0,(e,t)=>{let n=e.type===r.INVOICE?o[t]:a[e.type],i="credit-note"===n?String(e.id):e.invoiceNumber;return n&&i?{type:n,number:i,id:e.id}:null}],841879)},239964,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(691567),r=e.i(773831),a=e.i(33670),o=e.i(901004),s=e.i(509790),d=e.i(692113),u=e.i(137995),l=e.i(817581),c=e.i(420),m=e.i(870307),p=e.i(407329),f=e.i(390536),y=e.i(978319),b=e.i(376733),h=e.i(13558),I=e.i(562673),v=e.i(339909),g=e.i(89029),x=e.i(129503),j=e.i(213419),A=e.i(12028),C=e.i(813843),R=e.i(115871);let T={add:(0,t.jsx)(l.default,{}),archive:(0,t.jsx)(d.default,{}),avatar:(0,t.jsx)(A.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(y.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(f.default,{}),info:(0,t.jsx)(h.default,{}),edit:(0,t.jsx)(b.default,{}),location:(0,t.jsx)(g.default,{}),unarchive:(0,t.jsx)(u.default,{}),uploadFile:(0,t.jsx)(I.default,{}),receipt:(0,t.jsx)(v.default,{}),visibility:(0,t.jsx)(j.default,{})},_={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(x.default,{}),description:(0,t.jsx)(p.default,{})},S=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],N=e=>{let{actionsData:i=S,icon:s="default",row:d,disabled:u=!1}=e,[l,c]=(0,n.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(r.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:u,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:_[s]}),(0,t.jsx)(a.f,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:!!l,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:i(d).map((e,n)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(C.f,{direction:"row",alignItems:"center",spacing:2,children:[T?.[e.icon]||null,(0,t.jsx)(R.f,{children:e.tooltip})]})},n))})]})};N.propTypes={actionsData:i.default.func,icon:i.default.oneOf(["default","description"]),row:i.default.any.isRequired,disabled:i.default.bool},e.s(["f",0,N])},209906,e=>{var t=e.i(159080),n=e.i(987123);let i=t.f`
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
  ${n.a}
  ${n.S}
`;t.f`
  mutation MyMutation($objects: [CreateJobInput]!, $adminId: Int!) {
    createJob(adminId: $adminId, objects: $objects) {
      data
    }
  }
`;let r=t.f`
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
`;let a=t.f`
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
`,o=t.f`
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
`,s=t.f`
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
`;e.s(["u",0,a,"B",0,u,"_",0,l,"T",0,c,"s",0,o,"D",0,i,"E",0,d,"W",0,s,"U",0,m,"x",0,r])},588964,e=>{var t=e.i(391398),n=e.i(691567),i=e.i(668921),r=e.i(152078),a=e.i(471973),o=e.i(606255),s=e.i(984636),d=e.i(530252),u=e.i(813843),l=e.i(115871),c=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},p=e=>{let n=(0,c.f)(e,m),{label:p,options:y,error:b,helperText:h,stackProps:I={},formControlProps:v={},labelLeft:g}=n,x=e=>{let{children:n}=e;return(0,t.jsx)(t.Fragment,{children:n})};return(0,t.jsxs)(i.f,{sx:{m:3},error:b,variant:"standard",...v,children:[(0,t.jsxs)(u.f,{...g&&f,children:[p&&(0,t.jsx)(o.f,{id:"radio-group",color:"secondary",children:p}),(0,t.jsx)(s.f,{...n,"aria-labelledby":"radio-group",children:(0,t.jsx)(u.f,{...I,children:y.map(e=>{let{value:n,label:i,icon:a,ParentComponent:o=x}=e;return(0,t.jsx)(o,{children:(0,t.jsx)(r.f,{value:n,control:(0,t.jsx)(d.f,{color:"secondary"}),label:(0,t.jsxs)(u.f,{direction:"row",alignItems:"center",spacing:1,children:[a,(0,t.jsx)(l.f,{children:i})]})})})})})})]}),(0,t.jsx)(a.f,{children:h})]})};p.propTypes={label:n.default.string,options:n.default.arrayOf(n.default.shape({label:n.default.string.isRequired,value:n.default.any.isRequired,ParentComponent:n.default.elementType})),error:n.default.bool,helperText:n.default.string,stackProps:n.default.object,formControlProps:n.default.object,labelLeft:n.default.bool};let f={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,p])},510123,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(362537),r=e.i(432171),a=e.i(773412),o=e.i(159080);let s=o.f`
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
`,d=o.f`
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

  ${s}
`,u=o.f`
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
  ${s}
`;var l=e.i(594301),c=e.i(98762),m=e.i(871931),p=e.i(760981),f=e.i(302966),y=e.i(738251),b=e.i(755548),h=e.i(799083),I=e.i(76381),v=e.i(152078),g=e.i(813843),x=e.i(115871),j=e.i(747112),A=e.i(220490),C=e.i(101934),R=e.i(106850),T=e.i(280445),_=e.i(529292),S=e.i(885783),N=e.i(337089);let E=e=>{let{title:n="",dueDate:i,priority:r,status:a,content:o,assigned:s,onView:d=()=>{}}=e;return(0,t.jsxs)(w,{variant:"outlined",children:[(0,t.jsxs)(R.f,{sx:{padding:1},children:[(0,t.jsxs)(g.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(S.f,{priority:r}),(0,t.jsx)(N.f,{status:a})]}),(0,t.jsxs)(x.f,{mt:1,variant:"h6",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[n,"  "]}),(0,t.jsx)(x.f,{mt:1,sx:{height:"63px",overflow:"hidden"},children:o}),s&&(0,t.jsxs)(x.f,{variant:"subtitle2",children:["Assigned by ",s]})]}),(0,t.jsxs)(C.f,{sx:{display:"flex",justifyContent:"space-between",pt:0},children:[(0,t.jsx)(b.f,{variant:"contained",color:"secondary",onClick:d,sx:{height:"30px"},children:"View"}),(0,t.jsx)($,{variant:"subtitle2",children:i})]})]})},w=(0,T.f)(A.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",justifyContent:"space-between",maxHeight:"210px",minWidth:"280px",backgroundColor:t.palette.muiCardGray.main}}),$=(0,T.f)(x.f)(e=>{let{theme:t}=e;return{alignSelf:"flex-end",fontWeight:700,color:(0,_.V)(t.palette.black.main,.46)}});var P=e.i(811179),q=e.i(411331),D=e.i(265387),k=e.i(398038);let O={item:"dueDate",order:"desc"};e.s(["f",0,e=>{let{jobId:o,customerId:s,supplierId:A,locationId:C,subscription:R,accordionSx:T,expanded:_,showMyTaskButton:S=!1,onChangeExpanded:N=()=>{}}=e,w=(0,q.f)(),{user:$}=(0,l.f)(),{initialData:U}=(0,c.f)({filters:{jobId:o,customerId:s,supplierId:A,locationId:C},initialSort:O}),[M,L]=(0,n.useState)(!1),F={...U,assignedUserId:M?$.id:U.userId},{loading:V,data:{tasks:J}={tasks:[],meta:{aggregate:{totalCount:0}}}}=(0,r.t)(d,{variables:{...F},skip:R}),{loading:H,data:{tasks:Y}={tasks:[]}}=(0,a.f)(u,{variables:{...F},skip:!R}),G=(0,n.useCallback)(e=>{let{id:n}=e;w.show({content:(0,t.jsx)(P.DetailsTaskForm,{id:n}),title:"Task Details",submitForm:"taskDetailsForm",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw",query:{task_id:n.toString()},keepPrevQueryOnOpen:!0})},[w]),{open:B}=(0,k.f)(G,"task_id"),W=(R?Y:J).map(e=>({id:e.id,status:e.status,priority:e.priority,title:e.title,content:e.content,dueDate:(0,i.default)(e.dueDate).format("YYYY-MM-DD"),assignedUser:e.assignedUser?.fullName,item:e,actions:""}));return(0,t.jsx)(y.f,{children:(0,t.jsxs)(m.f,{expanded:_,onChange:N,sx:T,defaultExpanded:!0,children:[(0,t.jsx)(f.f,{expandIcon:(0,t.jsx)(j.f,{}),children:(0,t.jsx)(x.f,{variant:"h6",children:"Tasks"})}),(0,t.jsx)(p.f,{sx:{paddingTop:0},children:(0,t.jsxs)(g.f,{width:"100%",spacing:1,children:[(0,t.jsxs)(g.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(x.f,{children:"Current task in progress"}),S&&(0,t.jsx)(v.f,{control:(0,t.jsx)(h.f,{color:"secondary",checked:M,onChange:e=>{e.stopPropagation(),L(e=>!e)}}),label:"My Tasks"})]}),(0,t.jsx)(g.f,{width:"100%",direction:"row",spacing:2,pb:1,sx:{overflowX:"scroll"},children:V||H?(0,t.jsx)(g.f,{width:"100%",direction:"row",justifyContent:"center",children:(0,t.jsx)(I.f,{color:"secondary"})}):W.map(e=>(0,t.jsx)(E,{dueDate:e.dueDate,priority:e.priority,status:e.status,title:e.title,content:e.content,assigned:e.assignedUser,onView:t=>B({id:e.id})}))}),(0,t.jsx)(g.f,{direction:"row",justifyContent:"center",children:(0,t.jsx)(b.f,{variant:"contained",color:"secondary",onClick:e=>{e.preventDefault(),e.stopPropagation(),w.show({content:(0,t.jsx)(D.f,{jobId:o,customerId:s,supplierId:A,locationId:C,close:e=>{w.close(),B({id:e})}}),title:"Create Task",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"50vw",lg2:"40vw",keepPrevQueryOnOpen:!0})},children:"Add new task"})})]})})]})})}],510123)},265387,398038,e=>{var t=e.i(391398),n=e.i(362537),i=e.i(98926),r=e.i(776204),a=e.i(511667),o=e.i(974261),s=e.i(422411),d=e.i(424894),u=e.i(428424),l=e.i(76381),c=e.i(813843),m=e.i(652148),p=e.i(588964),f=e.i(722394),y=e.i(962379),b=e.i(230512),h=e.i(594301),I=e.i(394989),v=e.i(941062);e.i(864980);var g=e.i(790388),x=e.i(856688),j=e.i(640859),A=e.i(191788),C=e.i(54100),R=e.i(21557),T=e.i(202711),_=e.i(280321),S=e.i(738251),N=e.i(341056),E=e.i(498681),w=e.i(620291),$=e.i(867586),P=e.i(593626),q=e.i(885549),D=e.i(116823),k=e.i(877602),O=e.i(271775),U=e.i(144634),M=e.i(441625);async function L(e,t,n,i){if(n.value&&n.formFields){var r;await e.mutate({mutation:M.O,variables:{formId:Number(n.value),userId:n.userId||i,submissionData:(e=>{if(e)return{...e}})(n.submissionData),formFields:(r=n.formFields)?Array.isArray(r)?r:[r]:[],entity:"Task",entityId:t}})}}e.i(604265);let F=A.default.memo(C.f);e.s(["f",0,e=>{let{jobId:C,customerId:M,supplierId:V,locationId:J,close:H}=e,{user:Y}=(0,h.f)(),G=(0,i.f)(),B=(0,E.f)(),W=B?.admin?.modules?.formBuilder||!1,Q=(0,R.f)(),z=(0,j.f)(),{createMediaInput:X,loadingAddMedia:K}=(0,x.t)("Task",Y.adminId,Y.id),{handleSubmit:Z,watch:ee,setValue:et,control:en,errors:ei,register:er,formState:ea,setError:eo,clearErrors:es}=(0,s.G)({defaultValues:{priority:"urgent",relatedLinks:[],customerAccount:null,assignedCustomer:null},resolver:(0,d.yupResolver)(v.f)}),ed=ee("customerAccount"),eu=ee("relatedLinks"),el=ee("attachments"),ec=ee("formSubmission"),em=ee("dueDate"),[ep,ef]=(0,A.useState)(!1),[ey,eb]=(0,A.useState)(!1),[eh,eI]=(0,A.useState)(""),[ev,eg]=(0,A.useState)(""),ex=(0,A.useRef)(eh);(0,A.useEffect)(()=>{ex.current=eh},[eh]);let ej=(0,O.f)(eh),eA=em&&ep?ej?(0,n.default)(em).format("YYYY-MM-DD-HH-mm"):(0,n.default)(em).format("YYYY-MM-DD"):null;(0,A.useEffect)(()=>{M&&et("customerAccount",{value:M,label:""},{shouldDirty:!1})},[M,et]),(0,A.useEffect)(()=>{if(!ep||!em)return;let e=(0,U.v)(em,ex.current,{syncStartToDueDate:!0});e.rruleString&&(eI(e.rruleString),eg(e.rruleText))},[eA,ep,ej,em]);let[eC,{isLoading:eR}]=(0,a.f)("/task",{queryKey:"create-task-rest",method:"POST",baseUrl:o.M,onError:e=>{Q.show({content:e.message||k.G,severity:"error"})}}),[eT,{loading:e_}]=(0,r.f)(b.A,{refetchQueries:["GetTasksTable"],onError:()=>{Q.show({content:"Failed to create task",severity:"error"})}}),eS=(0,A.useCallback)(e=>{et("content",e.textContent),et("editorState",e.json)},[et]),eN=(0,A.useCallback)((e,t)=>{eI(e),eg(t)},[]),eE=async e=>{let t;if(ep){if(!e.dueDate)return void Q.show({content:"Set a due date before enabling recurrence.",severity:"error"});if(ey)return void Q.show({content:"Check the recurrence end date.",severity:"error"});if(!eh)return void Q.show({content:k.G,severity:"error"})}let n=await X(e.attachments),i=(0,T.f)(e.relatedLinks),r=(0,_.n)(e.relatedLinks),a=(0,_.U)(e.relatedLinks),o=(0,q.D)(e,M||i),s={status:u.k.NEW,priority:e.priority,relatedLinks:e.relatedLinks,title:e.title,content:e.content,editorState:e.editorState,dueDate:e.dueDate,adminId:Y.adminId,userId:Y.id,assignedAccountId:(0,q.E)(e,Y.adminId),assignedUserId:(0,q.w)(e),jobId:C,customerId:o,supplierId:V||r,locationId:J||a},d=ec?.value&&ec?.formFields?{formId:Number(ec.value),userId:ec.userId||Y.id,formFields:Array.isArray(ec.formFields)?ec.formFields:[ec.formFields],submissionData:ec.submissionData??null}:void 0,l=!1;if(ep&&eh){l=!0;let e=await eC({body:{...s,recurrence_rule:eh,recurrence_description:ev,...d?{form:d}:{}}});if(!(t=e?.id))return;await G.refetchQueries({include:["GetTasksTable","GetCustomerTasksTable"]})}else{let{data:e}=await eT({variables:{objects:[s]}});if(!e||!e.insert_Task?.returning?.[0]?.id)return;t=e.insert_Task.returning[0].id}if(!t)return;let c=!0,m=(0,x.w)(n);if(m.length>0)try{await z({entity:"Task",entityId:t,files:m})}catch{c=!1,Q.show({content:"Task created but its files could not be attached.",severity:"warning",color:"info"})}if(!l&&ec?.value&&ec?.formFields)try{await L(G,t,ec,Y.id)}catch{c=!1,Q.show({content:"Task created but the form could not be linked.",severity:"warning",color:"info"})}c&&Q.show({content:"Task created successfully",severity:"success"}),H?.(t)};return e_||eR||K?(0,t.jsx)(c.f,{width:"100%",direction:"column",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(l.f,{color:"secondary"})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:Z(eE),children:(0,t.jsxs)(c.f,{direction:"column",spacing:3,children:[(0,t.jsx)(s.e,{control:en,name:"title",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{variant:"standard",color:"secondary",label:"Title",value:n,onChange:i,error:!!ei.title,helperText:ei.title?.message})}}),(0,t.jsx)(F,{handleChange:eS}),(0,t.jsx)(s.e,{control:en,name:"priority",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(p.f,{label:"Priority:",labelLeft:!0,stackProps:{direction:"row",flexWrap:"wrap"},options:u.s,value:n,onChange:i,error:ei.priority,helperText:ei.priority?.message})}}),(0,t.jsx)(s.e,{control:en,name:"dueDate",defaultValue:null,render:e=>{let{value:i,onChange:r}=e;return ej?(0,t.jsx)(y.f,{label:"Due date",format:"Do MMM YYYY HH:mm",ampm:!1,minutesStep:15,minDateTime:(0,n.default)(),value:i?(0,n.default)(i):null,onChange:e=>{r(e&&(0,n.default)(e).isValid()?(0,n.default)(e).toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!ei.dueDate,helperText:ei.dueDate?.message}}}):(0,t.jsx)(f.f,{label:"Due date",format:"Do MMM YYYY",minDate:(0,n.default)().startOf("day"),value:i?(0,n.default)(i):null,onChange:e=>{let t=(0,U.p)(e);r(t?t.toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!ei.dueDate,helperText:ei.dueDate?.message}}})}}),(0,t.jsx)(s.e,{name:"assignedUser",control:en,defaultValue:null,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(w.f,{value:n,onChange:i,error:!!ei.assignedUser,helperText:ei.assignedUser?.value?.message})}}),(0,t.jsx)(s.e,{name:"customerAccount",control:en,defaultValue:null,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)($.f,{value:n,onChange:e=>{i(e),et("assignedCustomer",null)},error:!!ei.customerAccount,helperText:ei.customerAccount?.message})}}),(0,t.jsx)(s.e,{name:"assignedCustomer",control:en,defaultValue:null,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(P.f,{customerAccountId:ed?.value??null,value:n,onChange:i,error:!!ei.assignedCustomer,helperText:ei.assignedCustomer?.message})}}),(0,t.jsx)(I.f,{values:eu,setValue:et,name:"relatedLinks"}),(0,t.jsx)(D.f,{dueDate:em?(0,n.default)(em):null,frequency:eh,onRecurrenceEnabledChange:ef,onFrequencyChange:eN,onFrequencyErrorChange:eb,setValue:et}),(0,t.jsx)(g.f,{values:el,setValue:et}),(0,t.jsx)(s.e,{name:"content",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),(0,t.jsx)(s.e,{name:"editorState",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),(0,t.jsx)(s.e,{name:"relatedLinks",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),(0,t.jsx)(s.e,{name:"attachments",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),W&&(0,t.jsx)(S.f,{children:(0,t.jsx)(N.f,{control:en,errors:ei,register:er,setValue:et,formState:ea,setError:eo,clearErrors:es,hasPreview:!0,entity:"Task",entityId:null})})]})})}],265387);var V=e.i(203828);e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",{query:n}=(0,V.useRouter)(),i=(0,A.useRef)(!1);return(0,A.useEffect)(()=>{let r=n[t],a=Number(r);i.current||!r||isNaN(a)||e({id:a}),i.current=!0},[e,n,t]),{open:(0,A.useCallback)(t=>{let{id:n}=t;e({id:n})},[e])}}],398038)},520561,e=>{var t=e.i(209906);let n=async(e,n,i)=>{let r=null,a=null,o=null,s=null,d=[];return i&&"supplier"!==i||d.push(e.mutate({mutation:t.T,variables:{jobId:n,invoiceType:"supplier"}}).then(e=>{r=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{o=e})),i&&"supplier"===i||d.push(e.mutate({mutation:t.T,variables:{jobId:n,invoiceType:"customerVat"}}).then(e=>{a=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{s=e})),await Promise.all(d),{financeSupplier:r,financeCustomer:a,supplierError:o,customerError:s}},i=async e=>{let{client:n,customerId:i,scheduleId:r,locationId:a,skipErrors:o=!1}=e;return n.mutate({mutation:t.T,variables:{customerId:i,scheduleId:r,locationId:a,skipErrors:o}})};e.s(["L",0,i,"f",0,n])},252647,766413,e=>{var t=e.i(518566);t.f.CustomerVat,t.f.Supplier;let n=[t.f.ProformaInvoiceCustomer,t.f.ProformaInvoiceSupplier],i=[t.f.CustomerPpmInvoice,t.f.SupplierPpmInvoice],r={customer:[t.f.CustomerVat,t.f.ProformaInvoiceCustomer,t.f.CustomerPpmInvoice,t.f.CustomerGroupInvoice],supplier:[t.f.Supplier,t.f.ProformaInvoiceSupplier,t.f.SupplierPpmInvoice]},a={[t.f.CustomerVat]:"Customer VAT Invoice",[t.f.Supplier]:"Supplier Invoice",[t.f.ProformaInvoiceCustomer]:"Customer ad-hoc Invoice",[t.f.ProformaInvoiceSupplier]:"Supplier ad-hoc Invoice",[t.f.CustomerPpmInvoice]:"PPM Customer Invoice",[t.f.SupplierPpmInvoice]:"PPM Supplier Invoice",[t.f.CustomerGroupInvoice]:"Customer group invoice"};e.s(["B",0,r,"z",0,a,"_",0,i,"D",0,n],252647);var o=e.i(362537);e.s(["p",0,e=>e?(0,o.default)(e).format("YYYY-MM-DD"):"-","l",0,e=>e.invoicedDate??e.dateReceived??null],766413)},302876,e=>{var t=e.i(391398),n=e.i(98926),i=e.i(776204),r=e.i(432171),a=e.i(975569),o=e.i(594301),s=e.i(871931),d=e.i(760981),u=e.i(302966),l=e.i(115871),c=e.i(813843),m=e.i(553875),p=e.i(76381),f=e.i(659587),y=e.i(191788),b=e.i(362537),h=e.i(936641),I=e.i(755548),v=e.i(498681),g=e.i(21557),x=e.i(252647),j=e.i(529422),A=e.i(624841),C=e.i(74633),R=e.i(277984),T=e.i(834862),_=e.i(766413),S=e.i(948574),N=e.i(879436);e.s(["f",0,e=>{let E,{accountEntryId:w,close:$}=e,{authStatus:P,receiveUpdatesFromXero:q}=(0,T.f)(),D=(0,g.f)(),k=(0,v.f)(),O=(0,n.f)(),U=k.admin?.jobSetting?.jobNumberPrefix,M=k.admin?.jobSetting?.jobNumberSuffix,[L,F]=(0,y.useState)(!1),{hasRole:V}=(0,o.f)(),J=V("admin"),H=V([...S.d]),[Y,{loading:G}]=(0,i.f)(a.p,{refetchQueries:["GetAccountEntries"],onCompleted:()=>{D.show({content:"Account Entry was successfully deleted",severity:"success"}),$&&$()},onError:e=>{D.show({content:`Error: ${e.message}`,severity:"error"})}}),{data:{accountEntry:B}={accountEntry:{}},loading:W}=(0,r.t)(a.H,{variables:{accountEntryId:w}}),{data:{reconciliations:Q}={reconciliations:[]},loading:z}=(0,r.t)(a.D,{variables:{accountEntryId:B.id,skip:!B.id||!["paymentReceipt","creditNote"].includes(B.type)}}),{data:{invoices:X}={invoices:[]},loading:K}=(0,r.t)(a.k,{variables:{accountEntryId:B.id,skip:!B.id||![...x._,R.f.CUSTOMER_GROUP_INVOICE].includes(B.type)}}),Z=[{flex:1,sortable:!1,headerName:"Number",field:"jobNumber",renderCell:e=>{let{row:n}=e;return n.invoiceType===R.f.CUSTOMER_GROUP_INVOICE?`Multiple / ${n.invoiceNumber}`:x._.includes(n.invoiceType)?`PM ${n.invoiceNumber}`:(0,t.jsx)(j.f,{id:n.jobId,number:n.jobNumber,invoiceNumber:n.invoiceNumber,numberPrefix:U,numberSuffix:M,openCanvas:!0,type:n.jobType})}},{flex:1,sortable:!1,headerName:"Date",field:"date"},{flex:1,sortable:!1,headerName:"Reconciled Amount",field:"reconciledAmount"}],ee=(0,y.useMemo)(()=>Q.map(e=>{let t=e.accountEntryInvoice?.invoices?.[0];return[...x._,R.f.CUSTOMER_GROUP_INVOICE].includes(e.type)?{id:e.id,jobNumber:null,invoiceNumber:e.accountEntryInvoice.invoiceNumber,invoiceType:e.accountEntryInvoice.type,date:(0,b.default)(e.createdAt).format("YYYY-MM-DD"),reconciledAmount:(0,N.f)(e.amount),jobType:"ppm",jobId:null}:{id:e.id,jobNumber:t?.job?.number,invoiceNumber:t?.invoiceNumber,invoiceType:t?.invoiceType,date:(0,b.default)(e.createdAt).format("YYYY-MM-DD"),reconciledAmount:(0,N.f)(e.amount),jobType:t?.job?.type,jobId:t?.job?.id}}),[Q]),et=[{flex:1,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(j.f,{id:n.id,number:n.number,invoiceNumber:n.invoiceNumber,numberPrefix:U,numberSuffix:M,openCanvas:!0,type:n.jobType,toggleShow:()=>{$&&$()}})}},{flex:1,sortable:!1,headerName:"Status",field:"status",renderCell:e=>{let{row:n}=e;return n.status?(0,t.jsx)(A.f,{value:n.status}):""}}],en=(0,y.useMemo)(()=>X.map(e=>({id:e?.Job?.id,number:e?.Job?.number,status:e?.Job?.status,invoiceNumber:e?.invoiceNumber,jobType:e?.Job?.type})),[X]),ei=[R.f.INVOICE,R.f.PROFORMA_INVOICE,R.f.CUSTOMER_PPM_INVOICE,R.f.SUPPLIER_PPM_INVOICE,R.f.CUSTOMER_GROUP_INVOICE].includes(B.type),er=B.xeroSyncError?.message?.split(";")??[];return(0,t.jsxs)(c.f,{spacing:2,children:[(0,t.jsx)(m.f,{sx:{zIndex:1e5},open:W||G||L,children:(0,t.jsx)(p.f,{color:"secondary"})}),(0,t.jsxs)(s.f,{defaultExpanded:!0,children:[(0,t.jsx)(u.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Account Entry Details"}),(0,t.jsx)(d.f,{children:(0,t.jsxs)(c.f,{spacing:1,children:[H&&(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Date"}),(0,t.jsx)(l.f,{children:(0,b.default)(B.createdAt).format("YYYY-MM-DD")})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Issue date"}),(0,t.jsx)(l.f,{children:(0,_.p)((0,_.l)(B))})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Type"}),(0,t.jsx)(l.f,{children:B.type})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Reference"}),(0,t.jsx)(l.f,{children:B.reference||"-"})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Comment"}),(0,t.jsx)(l.f,{children:B.comment||"-"})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Debit"}),(0,t.jsx)(l.f,{children:(0,N.f)(B.debit)})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Credit"}),(0,t.jsx)(l.f,{children:(0,N.f)(B.credit)})]})]})})]}),"authorized"===P&&ei&&er.length>0&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(h.f,{variant:"filled",severity:"error",sx:{marginTop:"16px"},children:["Xero Error:",1===er.length?er[0]:(0,t.jsx)(c.f,{children:er.map(e=>(0,t.jsx)(l.f,{children:e.trim()}))})]})}),"authorized"===P&&ei&&B.xeroInvoiceId&&(0,t.jsxs)(c.f,{width:"100%",children:[(0,t.jsx)(I.f,{fullWidth:!0,variant:"contained",color:"danger",sx:{marginTop:"16px"},onClick:(E=B.id,async e=>{try{F(!0),e.stopPropagation(),await q(E),O.refetchQueries({include:["GetAccountEntryDetails","GetAccountEntries"]})}finally{F(!1)}}),children:"Manual Xero webhook sync"}),(0,t.jsx)(h.f,{variant:"filled",severity:"info",sx:{marginTop:"16px"},children:"This will manually trigger a sync with Xero to update the account entry data. Use this if the entry is not reflecting the latest changes from Xero."})]}),["paymentReceipt","creditNote"].includes(B.type)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{defaultExpanded:!0,children:[(0,t.jsx)(u.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Related Invoices"}),(0,t.jsx)(d.f,{children:(0,t.jsx)(C.s,{loading:z,columns:Z,rows:ee})})]}),J&&"paymentReceipt"===B.type&&(0,t.jsx)(I.f,{fullWidth:!0,variant:"contained",color:"danger",sx:{marginTop:"16px"},onClick:e=>{e.stopPropagation(),Y({variables:{id:B.id}})},children:"Delete"}),J&&"paymentReceipt"===B.type&&Q.length>0&&(0,t.jsx)(h.f,{variant:"filled",severity:"info",sx:{marginTop:"16px"},children:"Deleting this receipt will potentially remove other reconciled entries."})]}),[...x._,R.f.CUSTOMER_GROUP_INVOICE].includes(B.type)&&(0,t.jsxs)(s.f,{defaultExpanded:!0,children:[(0,t.jsx)(u.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Related Jobs"}),(0,t.jsx)(d.f,{children:(0,t.jsx)(C.s,{loading:K,columns:et,rows:en})})]})]})}])},975569,e=>{var t=e.i(159080);let n=t.f`
  mutation DeleteAccountEntry($id: Int!) {
    deleteAccountEntry(id: $id) {
      success
      data
    }
  }
`,i=t.f`
  query GetRelatedAccountEntries($accountEntryId: Int!) {
    reconciliations: Reconciliation(
      where: {
        creditEntityId: { _eq: $accountEntryId }
        creditEntity: { _in: ["PaymentReceipt", "CreditNote"] }
      }
    ) {
      id
      amount
      createdAt
      accountEntryInvoice: InvoiceEntry {
        id
        type
        invoiceNumber
        invoices: Invoices {
          id
          invoiceType
          invoiceNumber
          job: Job {
            id
            number
            type
            status
            timings: JobTimings(order_by: { createdAt: desc }) {
              id
              status
              createdAt
            }
          }
        }
      }
    }
  }
`,r=t.f`
  query GetRelatedInvoces($accountEntryId: Int!) {
    invoices: Invoice(where: { accountEntryId: { _eq: $accountEntryId } }) {
      id
      invoiceNumber
      Job {
        id
        number
        type
        status
      }
    }
  }
`,a=t.f`
  query GetAccountEntryDetails($accountEntryId: Int!) {
    accountEntry: AccountEntry_by_pk(id: $accountEntryId) {
      id
      type
      debit
      credit
      reference: meta(path: "reference")
      comment: meta(path: "comment")
      xeroInvoiceId: meta(path: "xeroInvoiceId")
      syncedWithXero: meta(path: "syncedWithXero")
      xeroSyncError: meta(path: "xeroSyncError")
      createdAt
      dateReceived
      invoicedDate
    }
  }
`;e.s(["p",0,n,"H",0,a,"D",0,i,"k",0,r])},785744,581384,e=>{e.s(["f",0,20],581384);let t=e=>{if(null==e||"string"==typeof e&&""===e.trim())return null;let t="string"==typeof e?Number(e):e;return"number"!=typeof t||!Number.isFinite(t)||t<0||t>100?null:t};e.s(["u",0,e=>{if(e.jobCustomVat?.enabled){let n=t(e.jobCustomVat.rate);if(null!==n)return n}let n=t(e.customerDefaultVatRate);return null!==n?n:20},"H",0,t],785744)},995070,e=>{e.s(["i",0,"VAT rate must be between 0 and 100, to a maximum of 2 decimal places.","r",0,"Enter a VAT rate.","b",0,e=>{if(null==e||Number.isNaN(e))return!0;let t=100*e;return Math.abs(t-Math.round(t))<=1e-9*Math.max(1,Math.abs(t))},"H",0,e=>{let{value:t,validity:n}=e.target;return n.badInput?0/0:""===t?null:Number(t)}])},54348,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(98926),r=e.i(432171),a=e.i(159080);let o=a.f`
  query GetPaymentReceivedEntries(
    $where: AccountEntry_bool_exp
    $limit: Int
    $offset: Int
    $accountId: Int
    $locationId: Int
    $orderBy: [AccountEntry_order_by!]
  ) {
    accountEntries: getDashboard_AccountEntry_calculatebalance(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      where: $where
      args: { location_id: $locationId }
    ) {
      id
      type
      locationId
      invoiceNumber
      createdAt
      outstandingdays
      outstandingAmount
      outstandingAmountNet
      meta
      accountId
      invoices: Invoices {
        id
        Job {
          id
          number
          type
        }
      }
    }
    meta: getDashboard_AccountEntry_calculatebalance_aggregate(
      where: $where
      args: { location_id: $locationId }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var s=e.i(76381),d=e.i(498681),u=e.i(21557),l=e.i(813843),c=e.i(740790),m=e.i(652148),p=e.i(722394),f=e.i(553875),y=e.i(506656),b=e.i(426778);let h=b.t().shape({dateReceived:b.c().required("Date Received is required").typeError("Date Received is required"),amount:b.H().positive("Amount Received must be positive").required("Amount Received is required").typeError("Amount Received is required").test("sum-of-payments","The sum of the reconciled amounts does not match the amount received",function(e){let t=(this.parent.payments||[]).filter(e=>null!=e.amount&&!Number.isNaN(e.amount)&&+e.amount>0).reduce((e,t)=>(0,y.f)(e+ +t.amount,2),0);return null==e||e===t}).test("sum-of-outstanding-amounts","The sum of the outstanding amounts does not match the amount received",function(e){return e<=(this.parent.payments||[]).filter(e=>null!=e.amount&&!Number.isNaN(e.amount)&&+e.amount>0).reduce((e,t)=>(0,y.f)(e+t.outstandingAmount,2),0)}),paymentReference:b.x().required("Payment Reference is required").typeError("Payment Reference is required"),comment:b.x().nullable(),payments:b.k().of(b.t().shape({outstandingAmount:b.H().required("Outstanding Amount is required").typeError("Outstanding Amount is required"),accountEntryId:b.H().required("Account Entry ID is required").typeError("Account Entry ID is required"),amount:b.D().nullable().test("sum-of-outstanding-amounts","The sum of the outstanding amounts does not match the amount received",function(e){let t=this.parent.outstandingAmount;return null==e||""===e||Number(e)<=t})})).required("Payments are required")});var I=e.i(964770),v=e.i(140021),g=e.i(422411),x=e.i(424894),j=e.i(443103),A=e.i(122965),C=e.i(74633),R=e.i(262999),T=e.i(16135),_=e.i(345837),S=e.i(529069),N=e.i(65295),E=e.i(511667),w=e.i(362537),$=e.i(773831),P=e.i(591394),q=e.i(529422),D=e.i(879436);e.s(["f",0,e=>{let{accountId:a,locationId:b,jobId:k,refetchGraphQLQueries:O,refetchFetchQueries:U,refetch:M,close:L}=e,F=(0,i.f)(),V=(0,u.f)(),J=(0,d.f)(),H=J.admin?.jobSetting?.jobNumberPrefix,Y=J.admin?.jobSetting?.jobNumberSuffix,[G,B]=(0,n.useState)([]),{errors:W,control:Q,watch:z,setValue:X,handleSubmit:K,trigger:Z,getValues:ee}=(0,g.G)({resolver:(0,x.yupResolver)(h),shouldUnregister:!1,mode:"onChange",reValidateMode:"onChange"});(0,g.v)({control:Q,name:"payments"});let et=z("amount"),en=z("payments"),{activeAccountId:ei,isMultiAccount:er}=(e=>{let{accountId:t,rowItems:n,payments:i}=e,r=Array.isArray(t)&&t.length>1;return{activeAccountId:(()=>{if(Array.isArray(t)&&1===t.length)return t[0]??null;if(!Array.isArray(t))return t;let e=i.findIndex(e=>null!=e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0);return -1===e?null:n[e]?.accountId??null})(),isMultiAccount:r}})({accountId:a,rowItems:G,payments:en}),{autoReconcile:ea,setAutoReconcile:eo,handleAmountReceivedChange:es,handleAutoReconcileChange:ed}=(e=>{let{setValue:t,trigger:i,getValues:r,rowItems:a,isMultiAccount:o,activeAccountId:s}=e,[d,u]=(0,n.useState)(!1),l=(0,n.useCallback)(e=>{let n=r("payments")??[];if(!e)return void n.forEach((e,n)=>{t(`payments.${n}.amount`,"")});let d=e,u=s??a[0]?.accountId??null;n.forEach((e,n)=>{o&&null!==u&&a[n]?.accountId!==u?t(`payments.${n}.amount`,""):(d>e.outstandingAmount?t(`payments.${n}.amount`,e.outstandingAmount):d>0?t(`payments.${n}.amount`,d):t(`payments.${n}.amount`,""),d=(0,y.f)(d-e.outstandingAmount,2))}),i("amount"),i("payments")},[r,t,i,o,s,a]),c=(0,n.useCallback)(e=>{d&&l(Number.isNaN(Number(e.target.value))?null:Number(e.target.value))},[d,l]);return{autoReconcile:d,setAutoReconcile:u,handleAmountReceivedChange:c,handleAutoReconcileChange:(0,n.useCallback)(e=>{if(!e)return;let t=r("amount");l(Number.isNaN(Number(t))?null:Number(t))},[r,l])}})({setValue:X,trigger:Z,getValues:ee,rowItems:G,isMultiAccount:er,activeAccountId:ei}),{reference:eu,pagination:el,order:ec}=(0,A.f)({options:{orderType:"nulls_last"}}),em=(0,n.useMemo)(()=>(e=>{let{accountId:t,locationId:n,jobId:i}=e,r=[];r.push(n?{locationId:{_eq:n}}:{}),r.push(t&&Array.isArray(t)?{accountId:{_in:t}}:t?{accountId:{_eq:t}}:{}),r.push(i?{Invoices:{entityId:{_eq:i}}}:{}),r.push({type:{_in:["proformaInvoice","customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"]},paymentStatus:{_in:["unpaid","partial"]}});let a=r.filter(e=>!j.isEmpty(e));return{...a.length>0&&{_and:a}}})({accountId:a,locationId:b,jobId:k}),[a,k,b]),{data:{meta:ep}={meta:{aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0}}}},loading:ef}=(0,r.t)(o,{variables:{...el,accountId:a,locationId:b,orderBy:ec,where:em},onCompleted:e=>{let t=e?.accountEntries?.map((e,t)=>{let n=e.invoices?.[0];return{index:t,id:e.id,type:e.type,jobId:n?.Job?.id,locationId:e.locationId,jobNumber:n?.Job?.number,jobType:n?.Job?.type,invoiceNumber:e.invoiceNumber,createdAt:(0,N.f)(e.createdAt),outstandingdays:e.outstandingdays,outstandingAmount:e.outstandingAmount,amount:0,invoiceId:n?.id,meta:e.meta,accountId:e.accountId}});X("payments",t.map(e=>({outstandingAmount:e.outstandingAmount,accountEntryId:e.id,amount:0}))),B(t)}}),[ey,{isLoading:eb}]=(0,E.f)("/account-entry/payment-received/create",{queryKey:"account-entry-payment-received-create",method:"POST",refetchQueries:U,onCompleted:()=>{V.show({severity:"success",content:"Payment received was added successfully."}),L(),F.refetchQueries({include:O}),M?.()},onError:e=>{V.show({severity:"error",content:`Error: ${e.message}`})}}),eh=(0,n.useCallback)(e=>{let t=ee("payments");X(`payments.${e}.amount`,t[e]?.outstandingAmount??null),Z("amount")},[X,ee,Z]),eI=(0,n.useMemo)(()=>(e=>{let{numberPrefix:n,numberSuffix:i,control:r,errors:a,handleAmountChange:o,trigger:s,isMultiAccount:d,activeAccountId:u}=e;return[{minWidth:140,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:r}=e;return["customerPpmInvoice","supplierPpmInvoice"].includes(r.type)?`PM ${r.invoiceNumber}`:["customerGroupInvoice"].includes(r.type)?`Multiple / ${r.invoiceNumber}`:r.jobId&&r.jobNumber&&r.jobType?(0,t.jsx)(q.f,{id:r.jobId,number:r.jobNumber,invoiceNumber:r.invoiceNumber,numberPrefix:n,numberSuffix:i,openCanvas:!0,type:r.jobType}):r.invoiceNumber??"N/A"}},{minWidth:120,sortable:!0,headerName:"Date",field:"createdAt"},{flex:1,sortable:!0,headerName:"Days Outstanding",field:"outstandingdays"},{flex:1,minWidth:160,sortable:!0,headerName:"Amount Outstanding",field:"outstandingAmount",renderCell:e=>{let{row:t}=e;return(0,D.f)(t.outstandingAmount)}},{flex:1,minWidth:250,sortable:!1,headerName:"Reconciled Amount",field:"amount",renderCell:e=>{let{row:n}=e,i=d&&null!==u&&n.accountId!==u;return(0,t.jsxs)(l.f,{direction:"row",sx:i?{opacity:.4}:void 0,children:[(0,t.jsx)(g.e,{control:r,defaultValue:n.id,name:`payments.${n.index}.accountEntryId`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(g.e,{control:r,defaultValue:n.outstandingAmount,name:`payments.${n.index}.outstandingAmount`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(g.e,{control:r,defaultValue:null,name:`payments.${n.index}.amount`,render:e=>{let{value:r,onChange:o}=e;return(0,t.jsx)(I.f,{leftLabel:(0,t.jsx)(v.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",inputProps:{min:0,step:.01},value:r,disabled:i,onChange:e=>{""===e.target.value?o(null):o(e),s("amount")},fullWidth:!0,error:!!a?.payments?.[n.index]?.amount})}}),(0,t.jsx)($.f,{onClick:()=>o(n.index),disabled:i,children:(0,t.jsx)(P.default,{})})]})}}]})({numberPrefix:H,numberSuffix:Y,control:Q,errors:W,handleAmountChange:eh,trigger:Z,isMultiAccount:er,activeAccountId:ei}),[H,Y,Q,W,eh,Z,er,ei]),ev=(0,n.useMemo)(()=>en.reduce((e,t)=>e+(Number.isNaN(t?.amount)?0:Number(t?.amount)),0),[en]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.f,{sx:{zIndex:1e5},open:eb,children:(0,t.jsx)(s.f,{color:"secondary"})}),(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:K(e=>{ei&&ey({body:{dateReceived:e.dateReceived,amount:e.amount,paymentReference:e.paymentReference,comment:e.comment,payments:e.payments.filter(e=>e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0).map(e=>({amount:Number(e.amount),accountEntryId:e.accountEntryId})),accountId:ei}})}),children:(0,t.jsxs)(l.f,{width:"100%",children:[(0,t.jsxs)(c.f,{container:!0,columnSpacing:2,rowSpacing:2,children:[(0,t.jsx)(c.f,{item:!0,xs:6,children:(0,t.jsx)(g.e,{control:Q,defaultValue:(0,w.default)(),name:"dateReceived",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(p.f,{format:"DD/MM/YYYY",value:n,onChange:e=>i(e),label:"Date Received",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0,error:!!W?.dateReceived,helperText:W?.dateReceived?.message}}})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,children:(0,t.jsx)(g.e,{control:Q,name:"paymentReference",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{label:"Payment Reference",variant:"outlined",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!W?.paymentReference,helperText:W?.paymentReference?.message})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,mt:1,children:(0,t.jsx)(g.e,{control:Q,defaultValue:null,name:"amount",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(I.f,{height:"53px",leftLabel:(0,t.jsx)(v.default,{sx:{height:"18px"}}),type:"number",label:"Amount Received",inputProps:{min:0,step:.01},value:n,onChange:e=>{""===e.target.value?i(null):i(e),es(e)},fullWidth:!0,error:!!W?.amount})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,mt:1,children:(0,t.jsx)(g.e,{control:Q,name:"comment",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{multiline:!0,rows:4,label:"Comment",variant:"filled",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!W?.comment,helperText:W?.comment?.message})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,children:(0,t.jsx)(l.f,{alignItems:"flex-start",children:(0,t.jsx)(_.f,{control:(0,t.jsx)(S.f,{color:"success",checked:ea,onChange:(e,t)=>{eo(t),ed(t)}}),label:"Auto Reconcile"})})}),W?.amount&&(0,t.jsx)(c.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(R.f,{severity:"error",variant:"filled",children:W?.amount?.message})}),er&&null!==ei&&(0,t.jsx)(c.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(R.f,{variant:"filled",severity:"info",children:"A payment may only be reconciled against invoices belonging to a single customer. Invoices associated with other customers have been disabled and cannot be selected."})})]}),(0,t.jsx)(C.s,{...eu,columns:eI,loading:ef,history:!1,totalCount:ep.aggregate.totalCount,rows:G}),(0,t.jsx)(l.f,{width:"100%",direction:"row",justifyContent:"flex-end",children:(0,t.jsx)(T.f,{label:`Sum: ${(0,D.f)((0,y.f)(ev,2))}`,color:(0,y.f)(ev,2)===(0,y.f)(et,2)?"success":"danger"})})]})})]})}],54348)},591394,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),a=e.r(391398);n.default=(0,r.default)((0,a.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded")},870307,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),a=e.r(391398);n.default=(0,r.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},16135,e=>{var t=e.i(800884);e.s(["f",()=>t.f])}])})();