(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,443919,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(280445),r=e.i(222351),a=e.i(738251),o=e.i(115871),s=e.i(755548),d=e.i(813843),u=e.i(741850),l=e.i(376733),c=e.i(411331),m=e.i(377198);let p=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var f=e.i(889231),y=e.i(396413);let h=(0,i.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,b=(0,i.f)("div")`
  position: relative;
  display: inline-block;
  border-radius: ${e=>{let{logoUrl:t}=e;return t?"2px":"50%"}};
  overflow: hidden;

  .edit-text {
    width: 100%;
    text-align: center;
    border-radius: ${e=>{let{logoUrl:t}=e;return t?"0px 0px 2px 2px":"0"}};
  }

  &:hover .edit-text {
    opacity: 1;
  }

  & .MuiAvatar-root {
    overflow: hidden;
    border-radius: ${e=>{let{logoUrl:t}=e;return t?"2px":"50%"}};
    ${e=>{let{logoUrl:t}=e;return t?"height: 55px; width: auto; min-width: 55px;":"height: 55px; width: 55px;"}}
  }
`,v=(0,i.f)("div")`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2px 10px;
  font-size: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
`;e.s(["f",0,e=>{let{avatar:i,editable:I=!0,avatarEditable:g=I,entity:x,entityName:j,linkTitleTo:A,relatedParties:C,onEdit:R,refetch:_}=e,S=(0,c.f)(),[T,w]=(0,n.useState)(null),[N,E]=(0,n.useState)(!1),$=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!p.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),n=(t=t.replace(/^www\./,"")).split("/")[0];return n?.split(":")[0]||null}catch(e){return null}})(e);let n="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!n)return null;let i=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:n});return`https://img.logo.dev/${encodeURIComponent(t)}?${i.toString()}`})(x.website||x.manager?.email),P=C&&C.length>0,q=(0,m.f)(T);(0,n.useEffect)(()=>{i?(w(i),E(!1)):$?(w($),E(!0)):(w(null),E(!1))},[i,$]);let k=e=>{let[t]=e;S.close(),w(t?.filename||null)};return(0,t.jsx)(h,{children:(0,t.jsxs)(d.f,{px:1.5,direction:"row",children:[(0,t.jsx)(d.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(b,{logoUrl:N,children:[(0,t.jsx)(r.f,{content:x?.name,src:q,onClick:g?()=>{S.show({content:(0,t.jsx)(y.f,{category:"avatar",entity:j,entityId:x?.id,filters:{category:"avatar"},onMediaAdd:k,refetch:_,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:g?"pointer":"default"}}),g&&(0,t.jsx)(v,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(d.f,{pl:1.5,flex:P?1:void 0,minWidth:P?0:void 0,children:[(0,t.jsxs)(o.f,{color:"text.primary",fontSize:17,children:[A?(0,t.jsx)(f.f,{href:A,sx:{color:"secondary.main"},children:x?.name}):x?.name,x?.description&&(x?.descriptionLink?(0,t.jsx)(f.f,{href:x?.descriptionLink,target:"_blank",underline:"none",rel:"noopener noreferrer",children:(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:x?.description})}):(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:x?.description})),x?.website&&(0,t.jsx)(f.f,{href:x?.website.startsWith("http")?x?.website:`http://${x?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(u.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),P&&(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(a.f,{component:"span",children:"Related party: "}),C.map((e,n)=>(0,t.jsxs)("span",{children:[n>0&&", ",(0,t.jsx)(f.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),I&&!!R&&(0,t.jsxs)(s.f,{onClick:R,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(l.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),I&&!P&&(0,t.jsx)(d.f,{direction:"row",justifyContent:"flex-start",children:!!R&&(0,t.jsxs)(s.f,{onClick:R,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(l.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},239189,e=>{e.s(["N",0,["serviceRate","rebate"],"O",0,{serviceRate:"Service Rate",rebate:"Rebate"},"e",0,["grossPercent","costPlus"]])},890350,e=>{var t,n,i,r=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),a=((n={}).VERIFIED="verified",n.UNVERIFIED="unverified",n),o=((i={}).CLEVERLY="cleverly",i.XERO="xero",i.BIDIRECTIONAL="bidirectional",i.NONE="none",i);e.s(["d",()=>r,"T",()=>a,"$",()=>o])},518566,277984,841879,e=>{var t,n,i=((t={}).CustomerGroupInvoice="customerGroupInvoice",t.CustomerPpmInvoice="customerPpmInvoice",t.CustomerVat="customerVat",t.ProformaInvoiceCustomer="ProformaInvoiceCustomer",t.ProformaInvoiceSupplier="ProformaInvoiceSupplier",t.Supplier="supplier",t.SupplierPpmInvoice="supplierPpmInvoice",t);e.s(["f",()=>i],518566);var r=((n={}).INVOICE="invoice",n.PROFORMA_INVOICE="proformaInvoice",n.CREDIT_NOTE="creditNote",n.PAYMENT_RECEIPT="paymentReceipt",n.CUSTOMER_PPM_INVOICE="customerPpmInvoice",n.CUSTOMER_GROUP_INVOICE="customerGroupInvoice",n.SUPPLIER_PPM_INVOICE="supplierPpmInvoice",n);e.s(["f",()=>r],277984);let a={[r.CREDIT_NOTE]:"credit-note",[r.CUSTOMER_GROUP_INVOICE]:"customer-group",[r.CUSTOMER_PPM_INVOICE]:"customer-ppm",[r.SUPPLIER_PPM_INVOICE]:"supplier-ppm",[r.PROFORMA_INVOICE]:"proforma"},o={[i.CustomerVat]:"customer-vat",[i.Supplier]:"supplier"};e.s(["f",0,(e,t)=>{let n=e.type===r.INVOICE?o[t]:a[e.type],i="credit-note"===n?String(e.id):e.invoiceNumber;return n&&i?{type:n,number:i,id:e.id}:null}],841879)},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let n=t?.medium?.meta?.thumbnails,i=n?.find?.(e=>"small"===e.name);return i?.relativePath||t.medium.filename||null}])},209906,e=>{var t=e.i(159080),n=e.i(987123);let i=t.f`
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
`;e.s(["u",0,a,"B",0,u,"_",0,l,"T",0,c,"s",0,o,"D",0,i,"E",0,d,"W",0,s,"U",0,m,"x",0,r])},588964,e=>{var t=e.i(391398),n=e.i(691567),i=e.i(668921),r=e.i(152078),a=e.i(471973),o=e.i(606255),s=e.i(984636),d=e.i(530252),u=e.i(813843),l=e.i(115871),c=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},p=e=>{let n=(0,c.f)(e,m),{label:p,options:y,error:h,helperText:b,stackProps:v={},formControlProps:I={},labelLeft:g}=n,x=e=>{let{children:n}=e;return(0,t.jsx)(t.Fragment,{children:n})};return(0,t.jsxs)(i.f,{sx:{m:3},error:h,variant:"standard",...I,children:[(0,t.jsxs)(u.f,{...g&&f,children:[p&&(0,t.jsx)(o.f,{id:"radio-group",color:"secondary",children:p}),(0,t.jsx)(s.f,{...n,"aria-labelledby":"radio-group",children:(0,t.jsx)(u.f,{...v,children:y.map(e=>{let{value:n,label:i,icon:a,ParentComponent:o=x}=e;return(0,t.jsx)(o,{children:(0,t.jsx)(r.f,{value:n,control:(0,t.jsx)(d.f,{color:"secondary"}),label:(0,t.jsxs)(u.f,{direction:"row",alignItems:"center",spacing:1,children:[a,(0,t.jsx)(l.f,{children:i})]})})})})})})]}),(0,t.jsx)(a.f,{children:b})]})};p.propTypes={label:n.default.string,options:n.default.arrayOf(n.default.shape({label:n.default.string.isRequired,value:n.default.any.isRequired,ParentComponent:n.default.elementType})),error:n.default.bool,helperText:n.default.string,stackProps:n.default.object,formControlProps:n.default.object,labelLeft:n.default.bool};let f={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,p])},510123,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(362537),r=e.i(432171),a=e.i(773412),o=e.i(159080);let s=o.f`
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
`;var l=e.i(594301),c=e.i(98762),m=e.i(871931),p=e.i(760981),f=e.i(302966),y=e.i(738251),h=e.i(755548),b=e.i(799083),v=e.i(76381),I=e.i(152078),g=e.i(813843),x=e.i(115871),j=e.i(747112),A=e.i(220490),C=e.i(101934),R=e.i(106850),_=e.i(280445),S=e.i(529292),T=e.i(885783),w=e.i(337089);let N=e=>{let{title:n="",dueDate:i,priority:r,status:a,content:o,assigned:s,onView:d=()=>{}}=e;return(0,t.jsxs)(E,{variant:"outlined",children:[(0,t.jsxs)(R.f,{sx:{padding:1},children:[(0,t.jsxs)(g.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(T.f,{priority:r}),(0,t.jsx)(w.f,{status:a})]}),(0,t.jsxs)(x.f,{mt:1,variant:"h6",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[n,"  "]}),(0,t.jsx)(x.f,{mt:1,sx:{height:"63px",overflow:"hidden"},children:o}),s&&(0,t.jsxs)(x.f,{variant:"subtitle2",children:["Assigned by ",s]})]}),(0,t.jsxs)(C.f,{sx:{display:"flex",justifyContent:"space-between",pt:0},children:[(0,t.jsx)(h.f,{variant:"contained",color:"secondary",onClick:d,sx:{height:"30px"},children:"View"}),(0,t.jsx)($,{variant:"subtitle2",children:i})]})]})},E=(0,_.f)(A.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",justifyContent:"space-between",maxHeight:"210px",minWidth:"280px",backgroundColor:t.palette.muiCardGray.main}}),$=(0,_.f)(x.f)(e=>{let{theme:t}=e;return{alignSelf:"flex-end",fontWeight:700,color:(0,S.V)(t.palette.black.main,.46)}});var P=e.i(811179),q=e.i(411331),k=e.i(265387),D=e.i(398038);let U={item:"dueDate",order:"desc"};e.s(["f",0,e=>{let{jobId:o,customerId:s,supplierId:A,locationId:C,subscription:R,accordionSx:_,expanded:S,showMyTaskButton:T=!1,onChangeExpanded:w=()=>{}}=e,E=(0,q.f)(),{user:$}=(0,l.f)(),{initialData:O}=(0,c.f)({filters:{jobId:o,customerId:s,supplierId:A,locationId:C},initialSort:U}),[M,L]=(0,n.useState)(!1),F={...O,assignedUserId:M?$.id:O.userId},{loading:V,data:{tasks:J}={tasks:[],meta:{aggregate:{totalCount:0}}}}=(0,r.t)(d,{variables:{...F},skip:R}),{loading:H,data:{tasks:Y}={tasks:[]}}=(0,a.f)(u,{variables:{...F},skip:!R}),G=(0,n.useCallback)(e=>{let{id:n}=e;E.show({content:(0,t.jsx)(P.DetailsTaskForm,{id:n}),title:"Task Details",submitForm:"taskDetailsForm",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw",query:{task_id:n.toString()},keepPrevQueryOnOpen:!0})},[E]),{open:z}=(0,D.f)(G,"task_id"),W=(R?Y:J).map(e=>({id:e.id,status:e.status,priority:e.priority,title:e.title,content:e.content,dueDate:(0,i.default)(e.dueDate).format("YYYY-MM-DD"),assignedUser:e.assignedUser?.fullName,item:e,actions:""}));return(0,t.jsx)(y.f,{children:(0,t.jsxs)(m.f,{expanded:S,onChange:w,sx:_,defaultExpanded:!0,children:[(0,t.jsx)(f.f,{expandIcon:(0,t.jsx)(j.f,{}),children:(0,t.jsx)(x.f,{variant:"h6",children:"Tasks"})}),(0,t.jsx)(p.f,{sx:{paddingTop:0},children:(0,t.jsxs)(g.f,{width:"100%",spacing:1,children:[(0,t.jsxs)(g.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(x.f,{children:"Current task in progress"}),T&&(0,t.jsx)(I.f,{control:(0,t.jsx)(b.f,{color:"secondary",checked:M,onChange:e=>{e.stopPropagation(),L(e=>!e)}}),label:"My Tasks"})]}),(0,t.jsx)(g.f,{width:"100%",direction:"row",spacing:2,pb:1,sx:{overflowX:"scroll"},children:V||H?(0,t.jsx)(g.f,{width:"100%",direction:"row",justifyContent:"center",children:(0,t.jsx)(v.f,{color:"secondary"})}):W.map(e=>(0,t.jsx)(N,{dueDate:e.dueDate,priority:e.priority,status:e.status,title:e.title,content:e.content,assigned:e.assignedUser,onView:t=>z({id:e.id})}))}),(0,t.jsx)(g.f,{direction:"row",justifyContent:"center",children:(0,t.jsx)(h.f,{variant:"contained",color:"secondary",onClick:e=>{e.preventDefault(),e.stopPropagation(),E.show({content:(0,t.jsx)(k.f,{jobId:o,customerId:s,supplierId:A,locationId:C,close:e=>{E.close(),z({id:e})}}),title:"Create Task",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"50vw",lg2:"40vw",keepPrevQueryOnOpen:!0})},children:"Add new task"})})]})})]})})}],510123)},265387,398038,e=>{var t=e.i(391398),n=e.i(362537),i=e.i(98926),r=e.i(776204),a=e.i(511667),o=e.i(974261),s=e.i(422411),d=e.i(424894),u=e.i(428424),l=e.i(76381),c=e.i(813843),m=e.i(652148),p=e.i(588964),f=e.i(722394),y=e.i(962379),h=e.i(230512),b=e.i(594301),v=e.i(394989),I=e.i(941062);e.i(864980);var g=e.i(790388),x=e.i(856688),j=e.i(640859),A=e.i(191788),C=e.i(54100),R=e.i(21557),_=e.i(202711),S=e.i(280321),T=e.i(738251),w=e.i(341056),N=e.i(498681),E=e.i(620291),$=e.i(867586),P=e.i(593626),q=e.i(885549),k=e.i(116823),D=e.i(877602),U=e.i(271775),O=e.i(144634),M=e.i(441625);async function L(e,t,n,i){if(n.value&&n.formFields){var r;await e.mutate({mutation:M.O,variables:{formId:Number(n.value),userId:n.userId||i,submissionData:(e=>{if(e)return{...e}})(n.submissionData),formFields:(r=n.formFields)?Array.isArray(r)?r:[r]:[],entity:"Task",entityId:t}})}}e.i(604265);let F=A.default.memo(C.f);e.s(["f",0,e=>{let{jobId:C,customerId:M,supplierId:V,locationId:J,close:H}=e,{user:Y}=(0,b.f)(),G=(0,i.f)(),z=(0,N.f)(),W=z?.admin?.modules?.formBuilder||!1,B=(0,R.f)(),Q=(0,j.f)(),{createMediaInput:X,loadingAddMedia:K}=(0,x.t)("Task",Y.adminId,Y.id),{handleSubmit:Z,watch:ee,setValue:et,control:en,errors:ei,register:er,formState:ea,setError:eo,clearErrors:es}=(0,s.G)({defaultValues:{priority:"urgent",relatedLinks:[],customerAccount:null,assignedCustomer:null},resolver:(0,d.yupResolver)(I.f)}),ed=ee("customerAccount"),eu=ee("relatedLinks"),el=ee("attachments"),ec=ee("formSubmission"),em=ee("dueDate"),[ep,ef]=(0,A.useState)(!1),[ey,eh]=(0,A.useState)(!1),[eb,ev]=(0,A.useState)(""),[eI,eg]=(0,A.useState)(""),ex=(0,A.useRef)(eb);(0,A.useEffect)(()=>{ex.current=eb},[eb]);let ej=(0,U.f)(eb),eA=em&&ep?ej?(0,n.default)(em).format("YYYY-MM-DD-HH-mm"):(0,n.default)(em).format("YYYY-MM-DD"):null;(0,A.useEffect)(()=>{M&&et("customerAccount",{value:M,label:""},{shouldDirty:!1})},[M,et]),(0,A.useEffect)(()=>{if(!ep||!em)return;let e=(0,O.v)(em,ex.current,{syncStartToDueDate:!0});e.rruleString&&(ev(e.rruleString),eg(e.rruleText))},[eA,ep,ej,em]);let[eC,{isLoading:eR}]=(0,a.f)("/task",{queryKey:"create-task-rest",method:"POST",baseUrl:o.M,onError:e=>{B.show({content:e.message||D.G,severity:"error"})}}),[e_,{loading:eS}]=(0,r.f)(h.A,{refetchQueries:["GetTasksTable"],onError:()=>{B.show({content:"Failed to create task",severity:"error"})}}),eT=(0,A.useCallback)(e=>{et("content",e.textContent),et("editorState",e.json)},[et]),ew=(0,A.useCallback)((e,t)=>{ev(e),eg(t)},[]),eN=async e=>{let t;if(ep){if(!e.dueDate)return void B.show({content:"Set a due date before enabling recurrence.",severity:"error"});if(ey)return void B.show({content:"Check the recurrence end date.",severity:"error"});if(!eb)return void B.show({content:D.G,severity:"error"})}let n=await X(e.attachments),i=(0,_.f)(e.relatedLinks),r=(0,S.n)(e.relatedLinks),a=(0,S.U)(e.relatedLinks),o=(0,q.D)(e,M||i),s={status:u.k.NEW,priority:e.priority,relatedLinks:e.relatedLinks,title:e.title,content:e.content,editorState:e.editorState,dueDate:e.dueDate,adminId:Y.adminId,userId:Y.id,assignedAccountId:(0,q.E)(e,Y.adminId),assignedUserId:(0,q.w)(e),jobId:C,customerId:o,supplierId:V||r,locationId:J||a},d=ec?.value&&ec?.formFields?{formId:Number(ec.value),userId:ec.userId||Y.id,formFields:Array.isArray(ec.formFields)?ec.formFields:[ec.formFields],submissionData:ec.submissionData??null}:void 0,l=!1;if(ep&&eb){l=!0;let e=await eC({body:{...s,recurrence_rule:eb,recurrence_description:eI,...d?{form:d}:{}}});if(!(t=e?.id))return;await G.refetchQueries({include:["GetTasksTable","GetCustomerTasksTable"]})}else{let{data:e}=await e_({variables:{objects:[s]}});if(!e||!e.insert_Task?.returning?.[0]?.id)return;t=e.insert_Task.returning[0].id}if(!t)return;let c=!0,m=(0,x.w)(n);if(m.length>0)try{await Q({entity:"Task",entityId:t,files:m})}catch{c=!1,B.show({content:"Task created but its files could not be attached.",severity:"warning",color:"info"})}if(!l&&ec?.value&&ec?.formFields)try{await L(G,t,ec,Y.id)}catch{c=!1,B.show({content:"Task created but the form could not be linked.",severity:"warning",color:"info"})}c&&B.show({content:"Task created successfully",severity:"success"}),H?.(t)};return eS||eR||K?(0,t.jsx)(c.f,{width:"100%",direction:"column",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(l.f,{color:"secondary"})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:Z(eN),children:(0,t.jsxs)(c.f,{direction:"column",spacing:3,children:[(0,t.jsx)(s.e,{control:en,name:"title",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{variant:"standard",color:"secondary",label:"Title",value:n,onChange:i,error:!!ei.title,helperText:ei.title?.message})}}),(0,t.jsx)(F,{handleChange:eT}),(0,t.jsx)(s.e,{control:en,name:"priority",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(p.f,{label:"Priority:",labelLeft:!0,stackProps:{direction:"row",flexWrap:"wrap"},options:u.s,value:n,onChange:i,error:ei.priority,helperText:ei.priority?.message})}}),(0,t.jsx)(s.e,{control:en,name:"dueDate",defaultValue:null,render:e=>{let{value:i,onChange:r}=e;return ej?(0,t.jsx)(y.f,{label:"Due date",format:"Do MMM YYYY HH:mm",ampm:!1,minutesStep:15,minDateTime:(0,n.default)(),value:i?(0,n.default)(i):null,onChange:e=>{r(e&&(0,n.default)(e).isValid()?(0,n.default)(e).toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!ei.dueDate,helperText:ei.dueDate?.message}}}):(0,t.jsx)(f.f,{label:"Due date",format:"Do MMM YYYY",minDate:(0,n.default)().startOf("day"),value:i?(0,n.default)(i):null,onChange:e=>{let t=(0,O.p)(e);r(t?t.toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!ei.dueDate,helperText:ei.dueDate?.message}}})}}),(0,t.jsx)(s.e,{name:"assignedUser",control:en,defaultValue:null,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(E.f,{value:n,onChange:i,error:!!ei.assignedUser,helperText:ei.assignedUser?.value?.message})}}),(0,t.jsx)(s.e,{name:"customerAccount",control:en,defaultValue:null,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)($.f,{value:n,onChange:e=>{i(e),et("assignedCustomer",null)},error:!!ei.customerAccount,helperText:ei.customerAccount?.message})}}),(0,t.jsx)(s.e,{name:"assignedCustomer",control:en,defaultValue:null,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(P.f,{customerAccountId:ed?.value??null,value:n,onChange:i,error:!!ei.assignedCustomer,helperText:ei.assignedCustomer?.message})}}),(0,t.jsx)(v.f,{values:eu,setValue:et,name:"relatedLinks"}),(0,t.jsx)(k.f,{dueDate:em?(0,n.default)(em):null,frequency:eb,onRecurrenceEnabledChange:ef,onFrequencyChange:ew,onFrequencyErrorChange:eh,setValue:et}),(0,t.jsx)(g.f,{values:el,setValue:et}),(0,t.jsx)(s.e,{name:"content",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),(0,t.jsx)(s.e,{name:"editorState",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),(0,t.jsx)(s.e,{name:"relatedLinks",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),(0,t.jsx)(s.e,{name:"attachments",control:en,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}}),W&&(0,t.jsx)(T.f,{children:(0,t.jsx)(w.f,{control:en,errors:ei,register:er,setValue:et,formState:ea,setError:eo,clearErrors:es,hasPreview:!0,entity:"Task",entityId:null})})]})})}],265387);var V=e.i(203828);e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",{query:n}=(0,V.useRouter)(),i=(0,A.useRef)(!1);return(0,A.useEffect)(()=>{let r=n[t],a=Number(r);i.current||!r||isNaN(a)||e({id:a}),i.current=!0},[e,n,t]),{open:(0,A.useCallback)(t=>{let{id:n}=t;e({id:n})},[e])}}],398038)},520561,e=>{var t=e.i(209906);let n=async(e,n,i)=>{let r=null,a=null,o=null,s=null,d=[];return i&&"supplier"!==i||d.push(e.mutate({mutation:t.T,variables:{jobId:n,invoiceType:"supplier"}}).then(e=>{r=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{o=e})),i&&"supplier"===i||d.push(e.mutate({mutation:t.T,variables:{jobId:n,invoiceType:"customerVat"}}).then(e=>{a=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{s=e})),await Promise.all(d),{financeSupplier:r,financeCustomer:a,supplierError:o,customerError:s}},i=async e=>{let{client:n,customerId:i,scheduleId:r,locationId:a,skipErrors:o=!1}=e;return n.mutate({mutation:t.T,variables:{customerId:i,scheduleId:r,locationId:a,skipErrors:o}})};e.s(["L",0,i,"f",0,n])},252647,766413,e=>{var t=e.i(518566);t.f.CustomerVat,t.f.Supplier;let n=[t.f.ProformaInvoiceCustomer,t.f.ProformaInvoiceSupplier],i=[t.f.CustomerPpmInvoice,t.f.SupplierPpmInvoice],r={customer:[t.f.CustomerVat,t.f.ProformaInvoiceCustomer,t.f.CustomerPpmInvoice,t.f.CustomerGroupInvoice],supplier:[t.f.Supplier,t.f.ProformaInvoiceSupplier,t.f.SupplierPpmInvoice]},a={[t.f.CustomerVat]:"Customer VAT Invoice",[t.f.Supplier]:"Supplier Invoice",[t.f.ProformaInvoiceCustomer]:"Customer ad-hoc Invoice",[t.f.ProformaInvoiceSupplier]:"Supplier ad-hoc Invoice",[t.f.CustomerPpmInvoice]:"PPM Customer Invoice",[t.f.SupplierPpmInvoice]:"PPM Supplier Invoice",[t.f.CustomerGroupInvoice]:"Customer group invoice"};e.s(["B",0,r,"z",0,a,"_",0,i,"D",0,n],252647);var o=e.i(362537);e.s(["p",0,e=>e?(0,o.default)(e).format("YYYY-MM-DD"):"-","l",0,e=>e.invoicedDate??e.dateReceived??null],766413)},302876,e=>{var t=e.i(391398),n=e.i(98926),i=e.i(776204),r=e.i(432171),a=e.i(975569),o=e.i(594301),s=e.i(871931),d=e.i(760981),u=e.i(302966),l=e.i(115871),c=e.i(813843),m=e.i(553875),p=e.i(76381),f=e.i(659587),y=e.i(191788),h=e.i(362537),b=e.i(936641),v=e.i(755548),I=e.i(498681),g=e.i(21557),x=e.i(252647),j=e.i(529422),A=e.i(624841),C=e.i(74633),R=e.i(277984),_=e.i(834862),S=e.i(766413),T=e.i(948574),w=e.i(879436);e.s(["f",0,e=>{let N,{accountEntryId:E,close:$}=e,{authStatus:P,receiveUpdatesFromXero:q}=(0,_.f)(),k=(0,g.f)(),D=(0,I.f)(),U=(0,n.f)(),O=D.admin?.jobSetting?.jobNumberPrefix,M=D.admin?.jobSetting?.jobNumberSuffix,[L,F]=(0,y.useState)(!1),{hasRole:V}=(0,o.f)(),J=V("admin"),H=V([...T.d]),[Y,{loading:G}]=(0,i.f)(a.p,{refetchQueries:["GetAccountEntries"],onCompleted:()=>{k.show({content:"Account Entry was successfully deleted",severity:"success"}),$&&$()},onError:e=>{k.show({content:`Error: ${e.message}`,severity:"error"})}}),{data:{accountEntry:z}={accountEntry:{}},loading:W}=(0,r.t)(a.H,{variables:{accountEntryId:E}}),{data:{reconciliations:B}={reconciliations:[]},loading:Q}=(0,r.t)(a.D,{variables:{accountEntryId:z.id,skip:!z.id||!["paymentReceipt","creditNote"].includes(z.type)}}),{data:{invoices:X}={invoices:[]},loading:K}=(0,r.t)(a.k,{variables:{accountEntryId:z.id,skip:!z.id||![...x._,R.f.CUSTOMER_GROUP_INVOICE].includes(z.type)}}),Z=[{flex:1,sortable:!1,headerName:"Number",field:"jobNumber",renderCell:e=>{let{row:n}=e;return n.invoiceType===R.f.CUSTOMER_GROUP_INVOICE?`Multiple / ${n.invoiceNumber}`:x._.includes(n.invoiceType)?`PM ${n.invoiceNumber}`:(0,t.jsx)(j.f,{id:n.jobId,number:n.jobNumber,invoiceNumber:n.invoiceNumber,numberPrefix:O,numberSuffix:M,openCanvas:!0,type:n.jobType})}},{flex:1,sortable:!1,headerName:"Date",field:"date"},{flex:1,sortable:!1,headerName:"Reconciled Amount",field:"reconciledAmount"}],ee=(0,y.useMemo)(()=>B.map(e=>{let t=e.accountEntryInvoice?.invoices?.[0];return[...x._,R.f.CUSTOMER_GROUP_INVOICE].includes(e.type)?{id:e.id,jobNumber:null,invoiceNumber:e.accountEntryInvoice.invoiceNumber,invoiceType:e.accountEntryInvoice.type,date:(0,h.default)(e.createdAt).format("YYYY-MM-DD"),reconciledAmount:(0,w.f)(e.amount),jobType:"ppm",jobId:null}:{id:e.id,jobNumber:t?.job?.number,invoiceNumber:t?.invoiceNumber,invoiceType:t?.invoiceType,date:(0,h.default)(e.createdAt).format("YYYY-MM-DD"),reconciledAmount:(0,w.f)(e.amount),jobType:t?.job?.type,jobId:t?.job?.id}}),[B]),et=[{flex:1,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(j.f,{id:n.id,number:n.number,invoiceNumber:n.invoiceNumber,numberPrefix:O,numberSuffix:M,openCanvas:!0,type:n.jobType,toggleShow:()=>{$&&$()}})}},{flex:1,sortable:!1,headerName:"Status",field:"status",renderCell:e=>{let{row:n}=e;return n.status?(0,t.jsx)(A.f,{value:n.status}):""}}],en=(0,y.useMemo)(()=>X.map(e=>({id:e?.Job?.id,number:e?.Job?.number,status:e?.Job?.status,invoiceNumber:e?.invoiceNumber,jobType:e?.Job?.type})),[X]),ei=[R.f.INVOICE,R.f.PROFORMA_INVOICE,R.f.CUSTOMER_PPM_INVOICE,R.f.SUPPLIER_PPM_INVOICE,R.f.CUSTOMER_GROUP_INVOICE].includes(z.type),er=z.xeroSyncError?.message?.split(";")??[];return(0,t.jsxs)(c.f,{spacing:2,children:[(0,t.jsx)(m.f,{sx:{zIndex:1e5},open:W||G||L,children:(0,t.jsx)(p.f,{color:"secondary"})}),(0,t.jsxs)(s.f,{defaultExpanded:!0,children:[(0,t.jsx)(u.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Account Entry Details"}),(0,t.jsx)(d.f,{children:(0,t.jsxs)(c.f,{spacing:1,children:[H&&(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Date"}),(0,t.jsx)(l.f,{children:(0,h.default)(z.createdAt).format("YYYY-MM-DD")})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Issue date"}),(0,t.jsx)(l.f,{children:(0,S.p)((0,S.l)(z))})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Type"}),(0,t.jsx)(l.f,{children:z.type})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Reference"}),(0,t.jsx)(l.f,{children:z.reference||"-"})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Comment"}),(0,t.jsx)(l.f,{children:z.comment||"-"})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Debit"}),(0,t.jsx)(l.f,{children:(0,w.f)(z.debit)})]}),(0,t.jsxs)(c.f,{children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Credit"}),(0,t.jsx)(l.f,{children:(0,w.f)(z.credit)})]})]})})]}),"authorized"===P&&ei&&er.length>0&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(b.f,{variant:"filled",severity:"error",sx:{marginTop:"16px"},children:["Xero Error:",1===er.length?er[0]:(0,t.jsx)(c.f,{children:er.map(e=>(0,t.jsx)(l.f,{children:e.trim()}))})]})}),"authorized"===P&&ei&&z.xeroInvoiceId&&(0,t.jsxs)(c.f,{width:"100%",children:[(0,t.jsx)(v.f,{fullWidth:!0,variant:"contained",color:"danger",sx:{marginTop:"16px"},onClick:(N=z.id,async e=>{try{F(!0),e.stopPropagation(),await q(N),U.refetchQueries({include:["GetAccountEntryDetails","GetAccountEntries"]})}finally{F(!1)}}),children:"Manual Xero webhook sync"}),(0,t.jsx)(b.f,{variant:"filled",severity:"info",sx:{marginTop:"16px"},children:"This will manually trigger a sync with Xero to update the account entry data. Use this if the entry is not reflecting the latest changes from Xero."})]}),["paymentReceipt","creditNote"].includes(z.type)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{defaultExpanded:!0,children:[(0,t.jsx)(u.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Related Invoices"}),(0,t.jsx)(d.f,{children:(0,t.jsx)(C.s,{loading:Q,columns:Z,rows:ee})})]}),J&&"paymentReceipt"===z.type&&(0,t.jsx)(v.f,{fullWidth:!0,variant:"contained",color:"danger",sx:{marginTop:"16px"},onClick:e=>{e.stopPropagation(),Y({variables:{id:z.id}})},children:"Delete"}),J&&"paymentReceipt"===z.type&&B.length>0&&(0,t.jsx)(b.f,{variant:"filled",severity:"info",sx:{marginTop:"16px"},children:"Deleting this receipt will potentially remove other reconciled entries."})]}),[...x._,R.f.CUSTOMER_GROUP_INVOICE].includes(z.type)&&(0,t.jsxs)(s.f,{defaultExpanded:!0,children:[(0,t.jsx)(u.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Related Jobs"}),(0,t.jsx)(d.f,{children:(0,t.jsx)(C.s,{loading:K,columns:et,rows:en})})]})]})}])},975569,e=>{var t=e.i(159080);let n=t.f`
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
`;var s=e.i(76381),d=e.i(498681),u=e.i(21557),l=e.i(813843),c=e.i(740790),m=e.i(652148),p=e.i(722394),f=e.i(553875),y=e.i(506656),h=e.i(426778);let b=h.t().shape({dateReceived:h.c().required("Date Received is required").typeError("Date Received is required"),amount:h.H().positive("Amount Received must be positive").required("Amount Received is required").typeError("Amount Received is required").test("sum-of-payments","The sum of the reconciled amounts does not match the amount received",function(e){let t=(this.parent.payments||[]).filter(e=>null!=e.amount&&!Number.isNaN(e.amount)&&+e.amount>0).reduce((e,t)=>(0,y.f)(e+ +t.amount,2),0);return null==e||e===t}).test("sum-of-outstanding-amounts","The sum of the outstanding amounts does not match the amount received",function(e){return e<=(this.parent.payments||[]).filter(e=>null!=e.amount&&!Number.isNaN(e.amount)&&+e.amount>0).reduce((e,t)=>(0,y.f)(e+t.outstandingAmount,2),0)}),paymentReference:h.x().required("Payment Reference is required").typeError("Payment Reference is required"),comment:h.x().nullable(),payments:h.k().of(h.t().shape({outstandingAmount:h.H().required("Outstanding Amount is required").typeError("Outstanding Amount is required"),accountEntryId:h.H().required("Account Entry ID is required").typeError("Account Entry ID is required"),amount:h.D().nullable().test("sum-of-outstanding-amounts","The sum of the outstanding amounts does not match the amount received",function(e){let t=this.parent.outstandingAmount;return null==e||""===e||Number(e)<=t})})).required("Payments are required")});var v=e.i(964770),I=e.i(140021),g=e.i(422411),x=e.i(424894),j=e.i(443103),A=e.i(122965),C=e.i(74633),R=e.i(262999),_=e.i(16135),S=e.i(345837),T=e.i(529069),w=e.i(65295),N=e.i(511667),E=e.i(362537),$=e.i(773831),P=e.i(591394),q=e.i(529422),k=e.i(879436);e.s(["f",0,e=>{let{accountId:a,locationId:h,jobId:D,refetchGraphQLQueries:U,refetchFetchQueries:O,refetch:M,close:L}=e,F=(0,i.f)(),V=(0,u.f)(),J=(0,d.f)(),H=J.admin?.jobSetting?.jobNumberPrefix,Y=J.admin?.jobSetting?.jobNumberSuffix,[G,z]=(0,n.useState)([]),{errors:W,control:B,watch:Q,setValue:X,handleSubmit:K,trigger:Z,getValues:ee}=(0,g.G)({resolver:(0,x.yupResolver)(b),shouldUnregister:!1,mode:"onChange",reValidateMode:"onChange"});(0,g.v)({control:B,name:"payments"});let et=Q("amount"),en=Q("payments"),{activeAccountId:ei,isMultiAccount:er}=(e=>{let{accountId:t,rowItems:n,payments:i}=e,r=Array.isArray(t)&&t.length>1;return{activeAccountId:(()=>{if(Array.isArray(t)&&1===t.length)return t[0]??null;if(!Array.isArray(t))return t;let e=i.findIndex(e=>null!=e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0);return -1===e?null:n[e]?.accountId??null})(),isMultiAccount:r}})({accountId:a,rowItems:G,payments:en}),{autoReconcile:ea,setAutoReconcile:eo,handleAmountReceivedChange:es,handleAutoReconcileChange:ed}=(e=>{let{setValue:t,trigger:i,getValues:r,rowItems:a,isMultiAccount:o,activeAccountId:s}=e,[d,u]=(0,n.useState)(!1),l=(0,n.useCallback)(e=>{let n=r("payments")??[];if(!e)return void n.forEach((e,n)=>{t(`payments.${n}.amount`,"")});let d=e,u=s??a[0]?.accountId??null;n.forEach((e,n)=>{o&&null!==u&&a[n]?.accountId!==u?t(`payments.${n}.amount`,""):(d>e.outstandingAmount?t(`payments.${n}.amount`,e.outstandingAmount):d>0?t(`payments.${n}.amount`,d):t(`payments.${n}.amount`,""),d=(0,y.f)(d-e.outstandingAmount,2))}),i("amount"),i("payments")},[r,t,i,o,s,a]),c=(0,n.useCallback)(e=>{d&&l(Number.isNaN(Number(e.target.value))?null:Number(e.target.value))},[d,l]);return{autoReconcile:d,setAutoReconcile:u,handleAmountReceivedChange:c,handleAutoReconcileChange:(0,n.useCallback)(e=>{if(!e)return;let t=r("amount");l(Number.isNaN(Number(t))?null:Number(t))},[r,l])}})({setValue:X,trigger:Z,getValues:ee,rowItems:G,isMultiAccount:er,activeAccountId:ei}),{reference:eu,pagination:el,order:ec}=(0,A.f)({options:{orderType:"nulls_last"}}),em=(0,n.useMemo)(()=>(e=>{let{accountId:t,locationId:n,jobId:i}=e,r=[];r.push(n?{locationId:{_eq:n}}:{}),r.push(t&&Array.isArray(t)?{accountId:{_in:t}}:t?{accountId:{_eq:t}}:{}),r.push(i?{Invoices:{entityId:{_eq:i}}}:{}),r.push({type:{_in:["proformaInvoice","customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"]},paymentStatus:{_in:["unpaid","partial"]}});let a=r.filter(e=>!j.isEmpty(e));return{...a.length>0&&{_and:a}}})({accountId:a,locationId:h,jobId:D}),[a,D,h]),{data:{meta:ep}={meta:{aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0}}}},loading:ef}=(0,r.t)(o,{variables:{...el,accountId:a,locationId:h,orderBy:ec,where:em},onCompleted:e=>{let t=e?.accountEntries?.map((e,t)=>{let n=e.invoices?.[0];return{index:t,id:e.id,type:e.type,jobId:n?.Job?.id,locationId:e.locationId,jobNumber:n?.Job?.number,jobType:n?.Job?.type,invoiceNumber:e.invoiceNumber,createdAt:(0,w.f)(e.createdAt),outstandingdays:e.outstandingdays,outstandingAmount:e.outstandingAmount,amount:0,invoiceId:n?.id,meta:e.meta,accountId:e.accountId}});X("payments",t.map(e=>({outstandingAmount:e.outstandingAmount,accountEntryId:e.id,amount:0}))),z(t)}}),[ey,{isLoading:eh}]=(0,N.f)("/account-entry/payment-received/create",{queryKey:"account-entry-payment-received-create",method:"POST",refetchQueries:O,onCompleted:()=>{V.show({severity:"success",content:"Payment received was added successfully."}),L(),F.refetchQueries({include:U}),M?.()},onError:e=>{V.show({severity:"error",content:`Error: ${e.message}`})}}),eb=(0,n.useCallback)(e=>{let t=ee("payments");X(`payments.${e}.amount`,t[e]?.outstandingAmount??null),Z("amount")},[X,ee,Z]),ev=(0,n.useMemo)(()=>(e=>{let{numberPrefix:n,numberSuffix:i,control:r,errors:a,handleAmountChange:o,trigger:s,isMultiAccount:d,activeAccountId:u}=e;return[{minWidth:140,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:r}=e;return["customerPpmInvoice","supplierPpmInvoice"].includes(r.type)?`PM ${r.invoiceNumber}`:["customerGroupInvoice"].includes(r.type)?`Multiple / ${r.invoiceNumber}`:r.jobId&&r.jobNumber&&r.jobType?(0,t.jsx)(q.f,{id:r.jobId,number:r.jobNumber,invoiceNumber:r.invoiceNumber,numberPrefix:n,numberSuffix:i,openCanvas:!0,type:r.jobType}):r.invoiceNumber??"N/A"}},{minWidth:120,sortable:!0,headerName:"Date",field:"createdAt"},{flex:1,sortable:!0,headerName:"Days Outstanding",field:"outstandingdays"},{flex:1,minWidth:160,sortable:!0,headerName:"Amount Outstanding",field:"outstandingAmount",renderCell:e=>{let{row:t}=e;return(0,k.f)(t.outstandingAmount)}},{flex:1,minWidth:250,sortable:!1,headerName:"Reconciled Amount",field:"amount",renderCell:e=>{let{row:n}=e,i=d&&null!==u&&n.accountId!==u;return(0,t.jsxs)(l.f,{direction:"row",sx:i?{opacity:.4}:void 0,children:[(0,t.jsx)(g.e,{control:r,defaultValue:n.id,name:`payments.${n.index}.accountEntryId`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(g.e,{control:r,defaultValue:n.outstandingAmount,name:`payments.${n.index}.outstandingAmount`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(g.e,{control:r,defaultValue:null,name:`payments.${n.index}.amount`,render:e=>{let{value:r,onChange:o}=e;return(0,t.jsx)(v.f,{leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",inputProps:{min:0,step:.01},value:r,disabled:i,onChange:e=>{""===e.target.value?o(null):o(e),s("amount")},fullWidth:!0,error:!!a?.payments?.[n.index]?.amount})}}),(0,t.jsx)($.f,{onClick:()=>o(n.index),disabled:i,children:(0,t.jsx)(P.default,{})})]})}}]})({numberPrefix:H,numberSuffix:Y,control:B,errors:W,handleAmountChange:eb,trigger:Z,isMultiAccount:er,activeAccountId:ei}),[H,Y,B,W,eb,Z,er,ei]),eI=(0,n.useMemo)(()=>en.reduce((e,t)=>e+(Number.isNaN(t?.amount)?0:Number(t?.amount)),0),[en]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.f,{sx:{zIndex:1e5},open:eh,children:(0,t.jsx)(s.f,{color:"secondary"})}),(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:K(e=>{ei&&ey({body:{dateReceived:e.dateReceived,amount:e.amount,paymentReference:e.paymentReference,comment:e.comment,payments:e.payments.filter(e=>e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0).map(e=>({amount:Number(e.amount),accountEntryId:e.accountEntryId})),accountId:ei}})}),children:(0,t.jsxs)(l.f,{width:"100%",children:[(0,t.jsxs)(c.f,{container:!0,columnSpacing:2,rowSpacing:2,children:[(0,t.jsx)(c.f,{item:!0,xs:6,children:(0,t.jsx)(g.e,{control:B,defaultValue:(0,E.default)(),name:"dateReceived",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(p.f,{format:"DD/MM/YYYY",value:n,onChange:e=>i(e),label:"Date Received",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0,error:!!W?.dateReceived,helperText:W?.dateReceived?.message}}})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,children:(0,t.jsx)(g.e,{control:B,name:"paymentReference",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{label:"Payment Reference",variant:"outlined",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!W?.paymentReference,helperText:W?.paymentReference?.message})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,mt:1,children:(0,t.jsx)(g.e,{control:B,defaultValue:null,name:"amount",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(v.f,{height:"53px",leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),type:"number",label:"Amount Received",inputProps:{min:0,step:.01},value:n,onChange:e=>{""===e.target.value?i(null):i(e),es(e)},fullWidth:!0,error:!!W?.amount})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,mt:1,children:(0,t.jsx)(g.e,{control:B,name:"comment",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{multiline:!0,rows:4,label:"Comment",variant:"filled",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!W?.comment,helperText:W?.comment?.message})}})}),(0,t.jsx)(c.f,{item:!0,xs:6,children:(0,t.jsx)(l.f,{alignItems:"flex-start",children:(0,t.jsx)(S.f,{control:(0,t.jsx)(T.f,{color:"success",checked:ea,onChange:(e,t)=>{eo(t),ed(t)}}),label:"Auto Reconcile"})})}),W?.amount&&(0,t.jsx)(c.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(R.f,{severity:"error",variant:"filled",children:W?.amount?.message})}),er&&null!==ei&&(0,t.jsx)(c.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(R.f,{variant:"filled",severity:"info",children:"A payment may only be reconciled against invoices belonging to a single customer. Invoices associated with other customers have been disabled and cannot be selected."})})]}),(0,t.jsx)(C.s,{...eu,columns:ev,loading:ef,history:!1,totalCount:ep.aggregate.totalCount,rows:G}),(0,t.jsx)(l.f,{width:"100%",direction:"row",justifyContent:"flex-end",children:(0,t.jsx)(_.f,{label:`Sum: ${(0,k.f)((0,y.f)(eI,2))}`,color:(0,y.f)(eI,2)===(0,y.f)(et,2)?"success":"danger"})})]})})]})}],54348)},591394,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),a=e.r(391398);n.default=(0,r.default)((0,a.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded")},741850,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),a=e.r(391398);n.default=(0,r.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},16135,e=>{var t=e.i(800884);e.s(["f",()=>t.f])}])})();