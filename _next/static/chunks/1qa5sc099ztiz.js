(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,358369,936509,76698,442600,e=>{e.s(["d",0,[{id:"time-materials",label:"Time & Materials",value:"time-materials"},{id:"fixed",label:"Fixed",value:"fixed"}],"v",0,[{id:"complete",label:"Job complete",value:"complete"},{id:"completeCertificate",label:"Job complete, certificate to follow",value:"completeCertificate"},{id:"returnVisit",label:"Return visit required",value:"returnVisit"},{id:"returnVisitByAnother",label:"Visit required by another supplier",value:"returnVisitByAnother"},{id:"couldNotDo",label:"Could not do",value:"couldNotDo"}],"z",0,[{id:"at",label:"At",value:"at"},{id:"between",label:"Between",value:"between"}]],358369);var t=e.i(159080);let o=t.f`
  query GetJobForAddInvoiceForm($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      id
      locationId
      customerId
      supplierId
      reverseCharge
      cisPercentage
      customerReverseCharge
      customerCisPercentage
      customerCustomVat: meta(path: "customerCustomVat")
      supplier: Supplier {
        reverseCharge
        cisStatus
        vatId
      }
      customer: Customer {
        id
        vatId
        reverseCharge
        cisPercentage
        defaultVatRate
        meta
      }
      relatedCustomers: JobRelatedCustomers {
        accountId
        account: Account {
          id
          defaultVatRate
        }
      }
      admin: Admin {
        meta
      }
    }
  }
`;e.s(["f",0,o],936509);let i=t.f`
  query getInvoiceForPdf($id: Int!) {
    invoice: Invoice_by_pk(id: $id) {
      id
      entityId
      invoiceType
      accountEntry: AccountEntry {
        id
        type
        invoiceNumber
      }
      amountPaid: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "PaymentReceipt" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      amountDeducted: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "CreditNote" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      reconciledAmount: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    }
  }
`,a=t.f`
  query getInvoiceForPdfByTypes($jobId: Int!, $invoiceTypes: [String!]!) {
    invoices: Invoice(
      where: {
        entityId: { _eq: $jobId }
        entity: { _eq: "Job" }
        invoiceType: { _in: $invoiceTypes }
      }
      order_by: { createdAt: desc }
    ) {
      id
      invoiceType
      accountEntry: AccountEntry {
        id
        type
        invoiceNumber
      }
      amountPaid: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "PaymentReceipt" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      amountDeducted: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "CreditNote" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      reconciledAmount: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    }
  }
`,n=t.f`
  query getInvoiceForPdfByType($jobId: Int!, $invoiceType: String!) {
    invoices: Invoice(
      where: {
        entityId: { _eq: $jobId }
        entity: { _eq: "Job" }
        invoiceType: { _eq: $invoiceType }
      }
      order_by: { createdAt: desc }
    ) {
      id
      invoiceType
      accountEntry: AccountEntry {
        id
        type
        invoiceNumber
      }
      amountPaid: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "PaymentReceipt" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      amountDeducted: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "CreditNote" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      reconciledAmount: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    }
  }
`;e.s(["U",0,i,"I",0,n,"g",0,a],76698),e.s([],442600)},100576,e=>{let t=[{op:"is_empty",label:"is empty",input:"none"},{op:"is_not_empty",label:"is not empty",input:"none"},{op:"contains",label:"contains",input:"text"},{op:"is_exactly",label:"is exactly",input:"text"},{op:"starts_with",label:"starts with",input:"text"}],o=[{op:"is_empty",label:"is empty",input:"none"},{op:"is_not_empty",label:"is not empty",input:"none"},{op:"equals",label:"equals",input:"number"},{op:"greater_than",label:"greater than",input:"number"},{op:"less_than",label:"less than",input:"number"},{op:"between",label:"between",input:"numberRange"}],i=[{op:"is_checked",label:"is checked",input:"none"},{op:"is_not_checked",label:"is not checked",input:"none"}],a={short_text:t,long_text:t,link:t,number:o,currency:o,range:o,date:[{op:"before",label:"before",input:"date"},{op:"after",label:"after",input:"date"},{op:"between",label:"between",input:"dateRange"},{op:"in_next_30_days",label:"in next 30 days",input:"none"}],dropdown:[{op:"is",label:"is",input:"optionSingle"},{op:"is_not",label:"is not",input:"optionSingle"},{op:"is_one_of",label:"is one of",input:"optionMulti"}],radio:[{op:"is",label:"is",input:"optionSingle"},{op:"is_not",label:"is not",input:"optionSingle"}],checkboxes:i,multi_select:i},n=e=>e?a[e]??[]:[],r=new Set(["is_empty","is_not_empty","in_next_30_days","is_checked","is_not_checked"]),u=e=>Array.isArray(e)?e.length>0:null!=e&&""!==e;e.s(["I",0,a,"_",0,e=>Object.values(e).filter(e=>e.active).length,"e",0,(e,t)=>n(e).find(e=>e.op===t),"p",0,n,"f",0,e=>Object.entries(e).filter(e=>{let[,t]=e;return t.active&&(r.has(t.op)||("between"===t.op?u(t.value)&&u(t.value2):u(t.value)))}).map(e=>{let[t,o]=e,i=Number(t);return"between"===o.op?{definitionId:i,op:o.op,value:[o.value,o.value2]}:{definitionId:i,op:o.op,value:o.value}})])},413696,e=>{var t=e.i(234383),o=e.i(190871);let i=async(e,i,a)=>{try{await (0,o.k)(e.query({query:t.m,variables:{id:a}}).then(e=>{let{data:{quote:t}}=e;return t?.quoteNumber?{type:"quote",number:t.quoteNumber,id:t.id}:null}))}catch(e){i.show({content:"Error downloading job quote",severity:"error"})}};e.s(["f",0,i])},675112,478940,77280,e=>{let t={jobNumber:"Job ID",jobType:"Job type",customerName:"Customer",supplierName:"Supplier",locationName:"Location",jobStatus:"Status",jobTotal:"Job total",supplierAmount:"Supplier total",jobServiceName:"Service line",jobDate:"Job date",jobTravelTime:"Travel time (minutes)",jobDescription:"Job description",jobTags:"Tags",invoiceNumber:"Invoice number",accountName:"Account name",numberOfJobs:"Number of jobs",numberOfQuotes:"Number of quotes",numberOfInvoices:"Number of invoices",numberOfLocations:"Number of locations",numberOfUsers:"Number of users",totalSpend:"Total spend",totalRevenues:"Total revenues",dateAccountCreated:"Date account created",coverageAreas:"Coverage areas",operatingAddress:"Operating address",registeredAddress:"Registered address",invoiceAddress:"Invoice address",assetName:"Asset name",sublocationName:"Sublocation",customerManagerFullName:"Account Manager",model:"Model",serialNumber:"Serial number",categoryName:"Category",datePutInService:"Date put in service",initialCost:"Initial cost",estimatedAnnualMaintenance:"Estimated annual maintenance",estimatedEndDate:"Estimated end date",residualValue:"Residual value",purchaseDate:"Purchase date",warrantyExpiry:"Warranty expiry",type:"Type",nextJobDate:"Next job date",lastJobDate:"Last job date"};e.s(["f",0,t],478940);let o=(e,o)=>({value:e,label:t[e],width:o}),i={workOrdersAndQuotes:[o("jobNumber",130),o("jobType",100),o("customerName",100),o("supplierName",100),o("locationName",100),o("jobStatus",100),o("jobTotal",100),o("supplierAmount",100),o("jobServiceName",100),o("jobDate",100),o("jobTravelTime",140),o("jobDescription",100),o("jobTags",180)],invoices:[o("invoiceNumber",100),o("jobNumber",100),o("jobType",100),o("customerName",100),o("supplierName",100),o("locationName",100),o("jobStatus",100),o("jobTotal",100),o("supplierAmount",100),o("jobServiceName",100),o("jobDate",100),o("jobTravelTime",140),o("jobDescription",100),o("jobTags",180)],customersAndSuppliers:[o("accountName",100),o("numberOfJobs",100),o("numberOfQuotes",100),o("numberOfInvoices",100),o("numberOfLocations",100),o("numberOfUsers",100),o("totalSpend",100),o("totalRevenues",100),o("dateAccountCreated",100),o("coverageAreas",100),o("operatingAddress",100),o("registeredAddress",100),o("invoiceAddress",100)],assets:[o("assetName",150),o("locationName",150),o("sublocationName",150),o("customerName",150),o("customerManagerFullName",150),o("model",100),o("serialNumber",100),o("categoryName",100),o("datePutInService",100),o("initialCost",100),o("estimatedAnnualMaintenance",100),o("estimatedEndDate",100),o("residualValue",100),o("purchaseDate",100),o("warrantyExpiry",100),o("type",100),o("nextJobDate",100),o("lastJobDate",100)]};e.s(["A",0,i,"k",0,e=>i[e]??[]],675112);var a=e.i(191788),n=e.i(185242);let r="saved-reports";e.s(["m",0,r,"K",0,function(){let{skip:e=!1,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{data:o,isLoading:i,refetch:u}=(0,n.f)("/data/reports/saved",{queryKey:r,skip:e,onError:t});return{savedReports:(0,a.useMemo)(()=>o?{account:{dataReports:o.reports}}:void 0,[o]),loading:i,refetch:u}}],77280)},48534,e=>{e.i(350461);var t=e.i(911383);let o={content:"Job report custom fields could not be loaded",severity:"warning"},i={content:"Some photos could not be added to the job report",severity:"warning"},a=async e=>{let{jobId:a,showSnackbar:n}=e,r=await (0,t.g)("/pdf/job-report/create",{job:{id:a}},{timeoutMs:18e4}),u=`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${r.key}`;return r.customFieldsLeftOut&&n(o),(0,t.G)(r)&&n(i),{blob:r,link:u}};e.s(["u",0,o,"q",0,{content:"Error downloading job report",severity:"error"},"a",0,i,"k",0,a])},234383,e=>{var t=e.i(159080);let o=t.f`
  fragment QuotationFields on SupplierQuote {
    id
    createdAt
    jobId
    methodStatement
    notes
    quoteNumber
    startDate
    status
    totalDuration
    totalDurationUnit
    durationPrefix
    noticePeriod
    noticePeriodUnit
    updatedAt
    siteVisitAt
    job: Job {
      id
      status
      type
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        notes
        userId
        quoteId
        createdAt
      }
    }
    lineItems: SupplierQuoteLineItems {
      id
      description
      item
      qty
      qtyUnit
      quoteId
      type
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
`,i=t.f`
  query GetQuotation($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      ...QuotationFields
      meta
      rebate
      job: Job {
        customer: Customer {
          id
          meta
        }
      }
      lineItems: SupplierQuoteLineItems {
        id
        supplierTotal
        customerTotal
        unitRate
        customerUnitRate
      }
    }
  }
  ${o}
`,a=t.f`
  query GetQuotationCustomer($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      ...QuotationFields
      job: Job {
        customer: Customer {
          id
          meta
        }
      }
      lineItems: SupplierQuoteLineItems {
        id
        customerTotal
        customerUnitRate
      }
    }
  }
  ${o}
`,n=t.f`
  query GetQuotationSupplier($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      ...QuotationFields
      rebate
      lineItems: SupplierQuoteLineItems {
        id
        supplierTotal
        unitRate
      }
    }
  }
  ${o}
`,r=t.f`
  query GetQuoteNumber($id: Int!) {
    quote: SupplierQuote_by_pk(id: $id) {
      id
      quoteNumber
    }
  }
`;e.s(["w",0,i,"J",0,a,"E",0,n,"m",0,r])},858564,(e,t,o)=>{var i=e.r(978509);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=i(e.r(421506)),n=e.r(391398);o.default=(0,a.default)([(0,n.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},"0"),(0,n.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"},"1")],"ContentPasteSearchOutlined")},246896,680596,751107,e=>{var t=e.i(382161);e.s(["f",()=>t.f],246896);var o=e.i(77052);e.s(["f",()=>o.f],680596);var i=e.i(185758);e.s(["f",()=>i.f],751107)}])})();