(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,358369,936509,76698,442600,e=>{e.s(["d",0,[{id:"time-materials",label:"Time & Materials",value:"time-materials"},{id:"fixed",label:"Fixed",value:"fixed"}],"v",0,[{id:"complete",label:"Job complete",value:"complete"},{id:"completeCertificate",label:"Job complete, certificate to follow",value:"completeCertificate"},{id:"returnVisit",label:"Return visit required",value:"returnVisit"},{id:"returnVisitByAnother",label:"Visit required by another supplier",value:"returnVisitByAnother"},{id:"couldNotDo",label:"Could not do",value:"couldNotDo"}],"z",0,[{id:"at",label:"At",value:"at"},{id:"between",label:"Between",value:"between"}]],358369);var t=e.i(159080);let i=t.f`
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
`;e.s(["f",0,i],936509),t.f`
  query getInvoices($id: Int!) {
    invoice: Invoice_by_pk(id: $id) {
      id
      accountEntry: AccountEntry {
        id
        paymentStatus
      }
      items
      status
      createdAt
      rebate
      meta
      totals
      invoiceType
      invoiceNumber
      invoiceDate
      expenses
      entityId
      configs
      amounts
      addendum
      addresses
      adminId
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
`;let n=t.f`
  query getInvoiceForPdf($id: Int!) {
    invoice: Invoice_by_pk(id: $id) {
      id
      entityId
      invoiceType
      accountEntry: AccountEntry {
        id
        type
        invoiceNumber
        meta
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
        meta
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
`,o=t.f`
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
        meta
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
`;e.s(["U",0,n,"I",0,o,"g",0,a],76698),e.s([],442600)},100576,e=>{let t=[{op:"is_empty",label:"is empty",input:"none"},{op:"is_not_empty",label:"is not empty",input:"none"},{op:"contains",label:"contains",input:"text"},{op:"is_exactly",label:"is exactly",input:"text"},{op:"starts_with",label:"starts with",input:"text"}],i=[{op:"is_empty",label:"is empty",input:"none"},{op:"is_not_empty",label:"is not empty",input:"none"},{op:"equals",label:"equals",input:"number"},{op:"greater_than",label:"greater than",input:"number"},{op:"less_than",label:"less than",input:"number"},{op:"between",label:"between",input:"numberRange"}],n=[{op:"is_checked",label:"is checked",input:"none"},{op:"is_not_checked",label:"is not checked",input:"none"}],a={short_text:t,long_text:t,link:t,number:i,currency:i,range:i,date:[{op:"before",label:"before",input:"date"},{op:"after",label:"after",input:"date"},{op:"between",label:"between",input:"dateRange"},{op:"in_next_30_days",label:"in next 30 days",input:"none"}],dropdown:[{op:"is",label:"is",input:"optionSingle"},{op:"is_not",label:"is not",input:"optionSingle"},{op:"is_one_of",label:"is one of",input:"optionMulti"}],radio:[{op:"is",label:"is",input:"optionSingle"},{op:"is_not",label:"is not",input:"optionSingle"}],checkboxes:n,multi_select:n},o=e=>e?a[e]??[]:[],r=new Set(["is_empty","is_not_empty","in_next_30_days","is_checked","is_not_checked"]),s=e=>Array.isArray(e)?e.length>0:null!=e&&""!==e;e.s(["I",0,a,"_",0,e=>Object.values(e).filter(e=>e.active).length,"e",0,(e,t)=>o(e).find(e=>e.op===t),"p",0,o,"f",0,e=>Object.entries(e).filter(e=>{let[,t]=e;return t.active&&(r.has(t.op)||("between"===t.op?s(t.value)&&s(t.value2):s(t.value)))}).map(e=>{let[t,i]=e,n=Number(t);return"between"===i.op?{definitionId:n,op:i.op,value:[i.value,i.value2]}:{definitionId:n,op:i.op,value:i.value}})])},413696,e=>{var t=e.i(234383),i=e.i(190871);let n=async(e,n,a)=>{try{await (0,i.k)(e.query({query:t.m,variables:{id:a}}).then(e=>{let{data:{quote:t}}=e;return t?.quoteNumber?{type:"quote",number:t.quoteNumber,id:t.id}:null}))}catch(e){n.show({content:"Error downloading job quote",severity:"error"})}};e.s(["f",0,n])},675112,478940,77280,e=>{let t={jobNumber:"Job ID",jobType:"Job type",customerName:"Customer",supplierName:"Supplier",locationName:"Location",jobStatus:"Status",jobTotal:"Job total",supplierAmount:"Supplier total",jobServiceName:"Service line",jobDate:"Job date",jobTravelTime:"Travel time (minutes)",jobDescription:"Job description",jobTags:"Tags",invoiceNumber:"Invoice number",accountName:"Account name",numberOfJobs:"Number of jobs",numberOfQuotes:"Number of quotes",numberOfInvoices:"Number of invoices",numberOfLocations:"Number of locations",numberOfUsers:"Number of users",totalSpend:"Total spend",totalRevenues:"Total revenues",dateAccountCreated:"Date account created",coverageAreas:"Coverage areas",operatingAddress:"Operating address",registeredAddress:"Registered address",invoiceAddress:"Invoice address",assetName:"Asset name",sublocationName:"Sublocation",customerManagerFullName:"Account Manager",model:"Model",serialNumber:"Serial number",categoryName:"Category",datePutInService:"Date put in service",initialCost:"Initial cost",estimatedAnnualMaintenance:"Estimated annual maintenance",estimatedEndDate:"Estimated end date",residualValue:"Residual value",purchaseDate:"Purchase date",warrantyExpiry:"Warranty expiry",type:"Type",nextJobDate:"Next job date",lastJobDate:"Last job date"};e.s(["f",0,t],478940);let i=(e,i)=>({value:e,label:t[e],width:i}),n={workOrdersAndQuotes:[i("jobNumber",130),i("jobType",100),i("customerName",100),i("supplierName",100),i("locationName",100),i("jobStatus",100),i("jobTotal",100),i("supplierAmount",100),i("jobServiceName",100),i("jobDate",100),i("jobTravelTime",140),i("jobDescription",100),i("jobTags",180)],invoices:[i("invoiceNumber",100),i("jobNumber",100),i("jobType",100),i("customerName",100),i("supplierName",100),i("locationName",100),i("jobStatus",100),i("jobTotal",100),i("supplierAmount",100),i("jobServiceName",100),i("jobDate",100),i("jobTravelTime",140),i("jobDescription",100),i("jobTags",180)],customersAndSuppliers:[i("accountName",100),i("numberOfJobs",100),i("numberOfQuotes",100),i("numberOfInvoices",100),i("numberOfLocations",100),i("numberOfUsers",100),i("totalSpend",100),i("totalRevenues",100),i("dateAccountCreated",100),i("coverageAreas",100),i("operatingAddress",100),i("registeredAddress",100),i("invoiceAddress",100)],assets:[i("assetName",150),i("locationName",150),i("sublocationName",150),i("customerName",150),i("customerManagerFullName",150),i("model",100),i("serialNumber",100),i("categoryName",100),i("datePutInService",100),i("initialCost",100),i("estimatedAnnualMaintenance",100),i("estimatedEndDate",100),i("residualValue",100),i("purchaseDate",100),i("warrantyExpiry",100),i("type",100),i("nextJobDate",100),i("lastJobDate",100)]};e.s(["A",0,n,"k",0,e=>n[e]??[]],675112);var a=e.i(191788),o=e.i(185242);let r="saved-reports";e.s(["m",0,r,"K",0,function(){let{skip:e=!1,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{data:i,isLoading:n,refetch:s}=(0,o.f)("/data/reports/saved",{queryKey:r,skip:e,onError:t});return{savedReports:(0,a.useMemo)(()=>i?{account:{dataReports:i.reports}}:void 0,[i]),loading:n,refetch:s}}],77280)},48534,828892,e=>{var t=e.i(221168),i=e.i(795617),n=e.i(942446),a=e.i(199525),o=e.i(26133),r=e.i(393788);let s=["onMyWay","onMyWayResumed"],u=["onMyWayPaused","inProgress","onHold"],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,r.W)(e,s,u)},c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return(0,r.P)(l(e),t)};e.s(["G",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return(0,o.f)(c(e,t))},"W",0,c,"M",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null!=l(e).openStartMs},"Z",0,l],828892);var d=e.i(68881);e.i(271621);var m=e.i(569373),p=e.i(48441),b=e.i(93198),g=e.i(911383);let y={content:"Job report custom fields could not be loaded",severity:"warning"},v={content:"Some photos could not be added to the job report",severity:"warning"},f={content:"Allow pop-ups for this site to open the job report",severity:"warning"},h=()=>{if((0,b.Z)())return null;let e=window.open("/download","_blank");return e&&(e.opener=null),e},S=async e=>{let{adminId:o,job:r,showSnackbar:s}=e,u=Array.isArray(r.media)?r.media:[],l=(0,i.w)(r.location,"registered"),b=p.o.find(e=>e.value===r.report?.completion),f=[];try{f=(await (0,d.C)({surface:"job_report",workOrderId:r.id,jobReportId:r.report?.id??null})).fields.map(e=>({label:e.definition.name,value:(0,m.r)(e.value,e.definition)}))}catch{f=[],s(y)}let h={job:{assets:r.assets,assetCategory:r.assetCategory?.name??null,address:l?.address,sublocation:r.sublocation,contractor:r.supplier?.name,completedAt:"incorrect"===r.timingStatus?r.correctEnd:(0,n.f)(r,"completed"),customer:r.customer?.name,description:r.description?t.Buffer.from(r.description).toString("base64"):"",expenses:r.expenses?.map(e=>e.description),further:b?.text||null,id:r.id,notes:r.report?.notes?t.Buffer.from(r?.report?.notes).toString("base64"):"",number:r.number,raisedBy:(0,a.f)(r,"pending"),reference:r.reference,service:r.service?.name,dateStart:"incorrect"===r.timingStatus?r.correctStart:(0,n.f)(r,"inProgress"),dateEnd:"incorrect"===r.timingStatus?r.correctEnd:(0,n.f)(r,"completed"),travelTime:(e=>{if(e?.timingStatus==="incorrect")return null;let t="number"==typeof e?.travelTimeMinutes?e.travelTimeMinutes:e?.meta?.travelTimeMinutes;if("number"==typeof t&&Number.isFinite(t)&&t>0)return t;let i=Math.floor(c(e?.timings??[])/60);return i>0?i:null})(r),priority:r.sla?.name,passFailStatus:r.report?.passFailStatus,customerSignature:r.report?.meta?.customerSignatureName?{name:r.report?.meta.customerSignatureName,data:r.report?.meta.customerSignatureTime}:null,supplierSignature:r.report?.meta?.supplierSignatureName?{name:r.report?.meta.supplierSignatureName,data:r.report?.meta.supplierSignatureTime}:null,recommendations:r.report?.recommendations?t.Buffer.from(r.report?.recommendations).toString("base64"):""},jobReportId:r.report?.id??null,adminId:o,media:u.filter(e=>"image"===e.item.type&&!e.item.meta?.adminOnly).map(e=>{if(e.item?.meta?.thumbnails){let t=e.item.meta.thumbnails.find(e=>"small"===e.name);if(t)return{filename:t.relativePath}}return{filename:e.item.filename}}),customFields:f},S=await (0,g.g)("/pdf/job-report/create",h,{timeoutMs:18e4}),A=`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${S.key}`;return(0,g.G)(S)&&s(v),{blob:S,link:A}},A=async e=>{let{downloadTab:t=null,...i}=e,n=t??h();try{let{blob:e}=await S(i);window?.Capacitor?.Plugins?.Browser?await window.Capacitor.Plugins.Browser.open({url:e.url}):n?.location?n.location.assign(e.url):(0,b.Z)()||i.showSnackbar(f)}catch(e){throw n?.close(),e}};e.s(["q",0,{content:"Error downloading job report",severity:"error"},"m",0,A,"O",0,h,"k",0,S],48534)},26133,e=>{var t=e.i(362537);e.s(["f",0,e=>{let i=Math.max(0,Math.floor(e)),n=t.default.duration(1e3*i),a=Math.floor(n.asHours()),o=n.minutes().toString().padStart(2,"0"),r=n.seconds().toString().padStart(2,"0");return`${a}:${o}:${r}`}])},942446,199525,e=>{e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let n=e?.timings?.find(e=>e.status===t);i=n?.createdAt||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.createdAt||null}],942446),e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let n=e?.timings?.find(e=>e.status===t);i=n?.user?.fullName||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.user?.fullName||null}],199525)},393788,e=>{var t=e.i(362537);let i=(e,i)=>{let n=(0,t.default)(e.createdAt).diff((0,t.default)(i.createdAt));if(0!==n)return n;if(null==e.id||null==i.id)return 0;let a=Number(e.id),o=Number(i.id);return Number.isFinite(a)&&Number.isFinite(o)&&a!==o?a-o:String(e.id).localeCompare(String(i.id))},n=(e,i)=>{let n=(0,t.default)(i).diff((0,t.default)(e),"seconds");return Number.isFinite(n)?{startDate:(0,t.default)(e).toISOString(),endDate:(0,t.default)(i).toISOString(),durationSeconds:Math.max(0,n)}:null};e.s(["s",0,i,"P",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return null==e.openStartMs?e.closedSeconds:e.closedSeconds+Math.max(0,Math.floor((t-e.openStartMs)/1e3))},"W",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,s=[...e].sort(i),u=s;if(r?.requireStartStatus){let e=s.findIndex(e=>e.status===r.requireStartStatus);if(-1===e)return{closedSeconds:0,openStartMs:null,closedIntervals:[]};let t=s.length-1;if(r.clipEndStatus){let i=s.findIndex((t,i)=>i>=e&&t.status===r.clipEndStatus);-1!==i&&(t=i)}u=s.slice(e,t+1)}let l=null,c=0,d=[];for(let e of u){if(a.includes(e.status)&&e.createdAt){l=e.createdAt;continue}if(o.includes(e.status)&&l&&e.createdAt){let t=n(l,e.createdAt);t&&(c+=t.durationSeconds,d.push(t)),l=null}}let m=l?(0,t.default)(l).valueOf():null;return{closedSeconds:c,openStartMs:Number.isFinite(m)?m:null,closedIntervals:d}}])},234383,e=>{var t=e.i(159080);let i=t.f`
  query GetQuotation($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      id
      createdAt
      jobId
      methodStatement
      notes
      quoteNumber
      startDate
      rebate
      status
      totalDuration
      totalDurationUnit
      durationPrefix
      noticePeriod
      noticePeriodUnit
      meta
      updatedAt
      siteVisitAt
      job: Job {
        id
        status
        type
        customer: Customer {
          id
          meta
        }
        timings: JobTimings(order_by: { id: desc }) {
          id
          status
          notes
          meta
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
  }
`,n=t.f`
  query GetQuoteNumber($id: Int!) {
    quote: SupplierQuote_by_pk(id: $id) {
      id
      quoteNumber
    }
  }
`;e.s(["w",0,i,"m",0,n])},858564,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e.r(421506)),o=e.r(391398);i.default=(0,a.default)([(0,o.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},"0"),(0,o.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"},"1")],"ContentPasteSearchOutlined")},246896,680596,751107,e=>{var t=e.i(382161);e.s(["f",()=>t.f],246896);var i=e.i(77052);e.s(["f",()=>i.f],680596);var n=e.i(185758);e.s(["f",()=>n.f],751107)}])})();