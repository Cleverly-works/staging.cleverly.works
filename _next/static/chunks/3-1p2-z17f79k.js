(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,772937,e=>{var t=e.i(391398),a=e.i(821627),i=e.i(849091),n=e.i(717803),r=e.i(605224),o=e.i(477882),l=e.i(886779),s=e.i(356119),u=e.i(706692),c=e.i(393172),d=e.i(586741),m=e.i(191788),p=e.i(280445),v=e.i(824451),b=e.i(917563),f=e.i(345837);let g=(0,m.createContext)({selectAll:!1,onToggleSelectAll:()=>{}}),y=e=>{let{children:a,...r}=e,{selectAll:l,onToggleSelectAll:s}=(0,m.useContext)(g);return(0,t.jsxs)(o.f,{...r,children:[(0,t.jsx)(b.f,{onMouseDown:e=>e.preventDefault(),pl:"25px",py:1,children:(0,t.jsx)(f.f,{label:"Select all",control:(0,t.jsx)(i.f,{color:"secondary",checked:l,onClick:e=>{e.preventDefault(),s()},style:{height:10,marginRight:8}})})}),(0,t.jsx)(n.f,{}),a]})},h="__customFieldsGroup__",j={value:h,label:"Custom fields",width:0},x=(0,p.f)(o.f)(e=>{let{theme:t,isScreen600pxOrLess:a}=e;return{maxWidth:"100vw",minWidth:a?"100%":500,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:`${t.spacing(2)} !important`}});e.s(["f",0,e=>{let{open:o,onClose:p,options:b,customFieldOptions:f=[],isCustomOption:_,value:A,onApply:w,notice:I}=e,S=(0,u.f)("(max-width: 600px)"),[C,N]=(0,m.useState)([]),[T,E]=(0,m.useState)(!1),[R,q]=(0,m.useState)(!1),[M,P]=(0,m.useState)(""),D=(0,m.useMemo)(()=>{if(_)return _;let e=new Set(f.map(e=>e.value));return t=>e.has(t)},[f,_]),k=(0,m.useCallback)(e=>b.length>0&&b.every(t=>e.some(e=>e.value===t.value)),[b]),O=(0,m.useMemo)(()=>f.length>0?[...b,j,...f]:b,[b,f]),$=(0,m.useCallback)(e=>{if(e.value===h)return!1;let t=M.trim().toLowerCase();return""!==t?e.label.toLowerCase().includes(t):R||!D(e.value)},[M,R,D]),V=(0,m.useMemo)(()=>C.filter(e=>D(e.value)),[C,D]),z=f.length>0&&f.every(e=>C.some(t=>t.value===e.value)),J=(0,m.useCallback)(()=>{N(e=>{let t=e.filter(e=>!b.some(t=>t.value===e.value));return T?t:[...b,...t]}),E(!T)},[T,b]),H=(0,m.useMemo)(()=>({selectAll:T,onToggleSelectAll:J}),[T,J]),L=(0,m.useRef)(!1),F=(0,m.useRef)(new Set);return(0,m.useEffect)(()=>{if(!o){L.current=!1,P(""),q(!1);return}L.current||(L.current=!0,F.current=new Set([...O.filter(e=>e.value!==h&&!D(e.value)),...A].map(e=>e.value)),N(A),E(k(A)))},[A,o,k,O,D]),(0,m.useEffect)(()=>{if(!o||!L.current)return;let e=F.current,t=A.filter(t=>!e.has(t.value));t.length&&(t.forEach(t=>e.add(t.value)),N(e=>[...e,...t.filter(t=>!e.some(e=>e.value===t.value))]))},[o,A]),(0,m.useEffect)(()=>{o&&L.current&&O.filter($).forEach(e=>F.current.add(e.value))},[o,O,$]),(0,t.jsx)(r.f,{open:o,onClose:p,children:(0,t.jsxs)(x,{isScreen600pxOrLess:S,children:[(0,t.jsx)(s.f,{variant:"h6",component:"h2",children:"Columns"}),(0,t.jsx)(s.f,{variant:"body2",sx:{fontSize:12,color:"text.secondary",mt:1},children:"Select the columns you would like to see in the table."}),I&&(0,t.jsx)(s.f,{variant:"caption",sx:{display:"block",color:"text.secondary",mt:.5},children:I}),(0,t.jsx)(n.f,{sx:{mt:2}}),(0,t.jsx)(g.Provider,{value:H,children:(0,t.jsx)(v.f,{multiple:!0,disableCloseOnSelect:!0,label:"Columns",variant:"standard",color:"secondary",options:O,value:C,onInputChange:(e,t)=>P(t),filterOptions:(e,t)=>{let a=t.inputValue.trim().toLowerCase(),i=e=>e.label.toLowerCase().includes(a),n=e.filter(e=>!D(e.value)&&e.value!==h),r=e.filter(e=>D(e.value)),o=n.filter(i);if(0===f.length)return o;if(""!==a){let e=r.filter(i);return e.length>0?[...o,j,...e]:o}return R?[...n,j,...r]:[...n,j]},onChange:(e,t,a)=>{"selectOption"===a&&t.some(e=>e.value===h)?q(e=>!e):(E(k(t)),N(t))},renderOption:(e,a)=>a.value===h?(0,t.jsxs)("li",{...e,"aria-label":`Custom fields, ${R?"expanded":"collapsed"}`,onMouseDown:e=>e.preventDefault(),onClick:e=>{e.preventDefault(),e.stopPropagation(),q(e=>!e)},children:[(0,t.jsx)(i.f,{color:"secondary",checked:z,indeterminate:V.length>0&&!z,onClick:e=>{e.preventDefault(),e.stopPropagation(),N(e=>{if(f.every(t=>e.some(e=>e.value===t.value))){let t=new Set(f.map(e=>e.value));return e.filter(e=>!t.has(e.value))}let t=f.filter(t=>!e.some(e=>e.value===t.value));return[...e,...t]})},style:{height:10,marginRight:8}}),(0,t.jsx)("span",{style:{flexGrow:1},children:a.label}),R?(0,t.jsx)(d.default,{fontSize:"small"}):(0,t.jsx)(c.default,{fontSize:"small"})]}):(0,t.jsxs)("li",{...e,style:D(a.value)?{paddingLeft:32}:void 0,children:[(0,t.jsx)(i.f,{color:"secondary",checked:C.some(e=>e.value===a.value),style:{height:10,marginRight:8}}),a.label]}),sx:{mt:1,mb:1},PaperComponent:y})}),(0,t.jsxs)(l.f,{direction:"row",justifyContent:"flex-end",gap:2,mt:2,children:[(0,t.jsx)(a.f,{variant:"contained",color:"danger",onClick:p,children:"Cancel"}),(0,t.jsx)(a.f,{variant:"contained",color:"secondary",onClick:()=>{w(C),p()},children:"Apply"})]})]})})}],772937)},218659,e=>{var t=e.i(391398),a=e.i(280445),i=e.i(115871),n=e.i(813843),r=e.i(755548),o=e.i(587369);let l=(0,a.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:a,sx:s={},imageSx:u={},title:c,titleSx:d={},subtitleFirstLine:m,subtitleFirstLineSx:p={},subtitleSecondLine:v,subtitleSecondLineSx:b={},buttonText:f,onAction:g}=e,y=(0,o.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...s,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(l,{src:a,sx:{...u,width:y?"250px":"300px"}}),(0,t.jsx)(i.f,{typography:"h5",sx:{...d},children:c}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(i.f,{sx:{...p},children:m}),(0,t.jsx)(i.f,{sx:{...b},children:v})]}),f&&g&&(0,t.jsx)(r.f,{variant:"contained",color:"secondary",onClick:g,children:f})]})}])},995197,e=>{var t=e.i(391398),a=e.i(280445),i=e.i(738251);let n={},r={},o=(0,a.f)(i.f)(()=>({"& .MuiTabs-root":{}}));e.s(["f",0,e=>{let{children:a,value:l,index:s,boxProps:u=n,boxSx:c=r,...d}=e;return(0,t.jsx)(o,{role:"tabpanel",hidden:l!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...d,children:l===s&&(0,t.jsx)(i.f,{...u,sx:{padding:"25px 0",...c},children:a})})}])},358369,936509,76698,442600,e=>{e.s(["d",0,[{id:"time-materials",label:"Time & Materials",value:"time-materials"},{id:"fixed",label:"Fixed",value:"fixed"}],"v",0,[{id:"complete",label:"Job complete",value:"complete"},{id:"completeCertificate",label:"Job complete, certificate to follow",value:"completeCertificate"},{id:"returnVisit",label:"Return visit required",value:"returnVisit"},{id:"returnVisitByAnother",label:"Visit required by another supplier",value:"returnVisitByAnother"},{id:"couldNotDo",label:"Could not do",value:"couldNotDo"}],"z",0,[{id:"at",label:"At",value:"at"},{id:"between",label:"Between",value:"between"}]],358369);var t=e.i(159080);let a=t.f`
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
`;e.s(["f",0,a],936509),t.f`
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
`;let i=t.f`
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
`,n=t.f`
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
`,r=t.f`
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
`;e.s(["U",0,i,"I",0,r,"g",0,n],76698),e.s([],442600)},52796,25246,e=>{let t="customField_",a=e=>e.startsWith(t);e.s(["a",0,e=>`${t}${e}`,"$",0,e=>{if(!a(e))return null;let i=e.slice(t.length);if(!/^\d+$/.test(i))return null;let n=Number(i);return n>0?n:null},"K",0,e=>({id:e.id,name:e.name,helpText:null,fieldSubtype:e.fieldSubtype??null,dataOwner:null,required:!1,defaultValue:null,config:null,options:(e.options??[]).map(e=>({...e,active:!0}))}),"I",0,a],52796);let i="Multiple",n=e=>null==e?[]:Array.isArray(e)?[...e]:[e];e.s(["R",0,"-","a",0,i,"B",0," / ","$",0,(e,t)=>{let a=n(e);if(!a.length)return"-";let r=[...new Set(a.map(e=>null==e?"-":t(e)))],[o]=r;return 1===r.length&&void 0!==o?o:[i,...r].join(" / ")},"j",0,e=>"object"==typeof e&&null!==e&&Array.isArray(e.__multiOwner),"L",0,n],25246)},100576,e=>{let t=[{op:"is_empty",label:"is empty",input:"none"},{op:"is_not_empty",label:"is not empty",input:"none"},{op:"contains",label:"contains",input:"text"},{op:"is_exactly",label:"is exactly",input:"text"},{op:"starts_with",label:"starts with",input:"text"}],a=[{op:"is_empty",label:"is empty",input:"none"},{op:"is_not_empty",label:"is not empty",input:"none"},{op:"equals",label:"equals",input:"number"},{op:"greater_than",label:"greater than",input:"number"},{op:"less_than",label:"less than",input:"number"},{op:"between",label:"between",input:"numberRange"}],i=[{op:"is_checked",label:"is checked",input:"none"},{op:"is_not_checked",label:"is not checked",input:"none"}],n={short_text:t,long_text:t,link:t,number:a,currency:a,range:a,date:[{op:"before",label:"before",input:"date"},{op:"after",label:"after",input:"date"},{op:"between",label:"between",input:"dateRange"},{op:"in_next_30_days",label:"in next 30 days",input:"none"}],dropdown:[{op:"is",label:"is",input:"optionSingle"},{op:"is_not",label:"is not",input:"optionSingle"},{op:"is_one_of",label:"is one of",input:"optionMulti"}],radio:[{op:"is",label:"is",input:"optionSingle"},{op:"is_not",label:"is not",input:"optionSingle"}],checkboxes:i,multi_select:i},r=e=>e?n[e]??[]:[],o=new Set(["is_empty","is_not_empty","in_next_30_days","is_checked","is_not_checked"]),l=e=>Array.isArray(e)?e.length>0:null!=e&&""!==e;e.s(["I",0,n,"_",0,e=>Object.values(e).filter(e=>e.active).length,"e",0,(e,t)=>r(e).find(e=>e.op===t),"p",0,r,"f",0,e=>Object.entries(e).filter(e=>{let[,t]=e;return t.active&&(o.has(t.op)||("between"===t.op?l(t.value)&&l(t.value2):l(t.value)))}).map(e=>{let[t,a]=e,i=Number(t);return"between"===a.op?{definitionId:i,op:a.op,value:[a.value,a.value2]}:{definitionId:i,op:a.op,value:a.value}})])},413696,e=>{var t=e.i(234383),a=e.i(190871);let i=async(e,i,n)=>{try{await (0,a.k)(e.query({query:t.m,variables:{id:n}}).then(e=>{let{data:{quote:t}}=e;return t?.quoteNumber?{type:"quote",number:t.quoteNumber,id:t.id}:null}))}catch(e){i.show({content:"Error downloading job quote",severity:"error"})}};e.s(["f",0,i])},675112,478940,77280,e=>{let t={jobNumber:"Job ID",jobType:"Job type",customerName:"Customer",supplierName:"Supplier",locationName:"Location",jobStatus:"Status",jobTotal:"Job total",supplierAmount:"Supplier total",jobServiceName:"Service line",jobDate:"Job date",jobTravelTime:"Travel time (minutes)",jobDescription:"Job description",jobTags:"Tags",invoiceNumber:"Invoice number",accountName:"Account name",numberOfJobs:"Number of jobs",numberOfQuotes:"Number of quotes",numberOfInvoices:"Number of invoices",numberOfLocations:"Number of locations",numberOfUsers:"Number of users",totalSpend:"Total spend",totalRevenues:"Total revenues",dateAccountCreated:"Date account created",coverageAreas:"Coverage areas",operatingAddress:"Operating address",registeredAddress:"Registered address",invoiceAddress:"Invoice address",assetName:"Asset name",sublocationName:"Sublocation",customerManagerFullName:"Account Manager",model:"Model",serialNumber:"Serial number",categoryName:"Category",datePutInService:"Date put in service",initialCost:"Initial cost",estimatedAnnualMaintenance:"Estimated annual maintenance",estimatedEndDate:"Estimated end date",residualValue:"Residual value",purchaseDate:"Purchase date",warrantyExpiry:"Warranty expiry",type:"Type",nextJobDate:"Next job date",lastJobDate:"Last job date"};e.s(["f",0,t],478940);let a=(e,a)=>({value:e,label:t[e],width:a}),i={workOrdersAndQuotes:[a("jobNumber",130),a("jobType",100),a("customerName",100),a("supplierName",100),a("locationName",100),a("jobStatus",100),a("jobTotal",100),a("supplierAmount",100),a("jobServiceName",100),a("jobDate",100),a("jobTravelTime",140),a("jobDescription",100),a("jobTags",180)],invoices:[a("invoiceNumber",100),a("jobNumber",100),a("jobType",100),a("customerName",100),a("supplierName",100),a("locationName",100),a("jobStatus",100),a("jobTotal",100),a("supplierAmount",100),a("jobServiceName",100),a("jobDate",100),a("jobTravelTime",140),a("jobDescription",100),a("jobTags",180)],customersAndSuppliers:[a("accountName",100),a("numberOfJobs",100),a("numberOfQuotes",100),a("numberOfInvoices",100),a("numberOfLocations",100),a("numberOfUsers",100),a("totalSpend",100),a("totalRevenues",100),a("dateAccountCreated",100),a("coverageAreas",100),a("operatingAddress",100),a("registeredAddress",100),a("invoiceAddress",100)],assets:[a("assetName",150),a("locationName",150),a("sublocationName",150),a("customerName",150),a("customerManagerFullName",150),a("model",100),a("serialNumber",100),a("categoryName",100),a("datePutInService",100),a("initialCost",100),a("estimatedAnnualMaintenance",100),a("estimatedEndDate",100),a("residualValue",100),a("purchaseDate",100),a("warrantyExpiry",100),a("type",100),a("nextJobDate",100),a("lastJobDate",100)]};e.s(["A",0,i,"k",0,e=>i[e]??[]],675112);var n=e.i(191788),r=e.i(185242);let o="saved-reports";e.s(["m",0,o,"K",0,function(){let{skip:e=!1,onError:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{data:a,isLoading:i,refetch:l}=(0,r.f)("/data/reports/saved",{queryKey:o,skip:e,onError:t});return{savedReports:(0,n.useMemo)(()=>a?{account:{dataReports:a.reports}}:void 0,[a]),loading:i,refetch:l}}],77280)},190871,179319,e=>{var t=e.i(203828),a=e.i(220303),i=e.i(93198),n=e.i(262887);let r=e=>{let{type:t,number:a,id:i}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:a,...i&&"job-report"!==t&&{id:String(i)}})}`};e.s(["$",0,r,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let a=Number(e.id);return{number:t,...Number.isSafeInteger(a)&&a>0&&{id:a}}}],179319);let o="This document could not be found",l="documentOpenedFromPortal",s=async e=>{let s=await e;if(!s)throw Error(o);if((0,i.Z)()&&"job-report"!==s.type){let e=await a.R.fetchQuery("/documents/:type/:number",{pathParams:{type:s.type,number:s.number},params:{id:s.id}});if(!("url"in e))throw Error(o);await (0,n.f)(e.url);return}let u=r(s);(e=>{try{return sessionStorage.setItem(l,e),!0}catch{return!1}})(u),await t.default.push(u)};e.s(["W",0,e=>{try{return sessionStorage.getItem(l)===r(e)}catch{return!1}},"k",0,s],190871)},48534,e=>{e.i(350461);var t=e.i(911383);let a={content:"Job report custom fields could not be loaded",severity:"warning"},i={content:"Some photos could not be added to the job report",severity:"warning"},n=async e=>{let{jobId:n,showSnackbar:r}=e,o=await (0,t.g)("/pdf/job-report/create",{job:{id:n}},{timeoutMs:18e4}),l=`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${o.key}`;return o.customFieldsLeftOut&&r(a),(0,t.G)(o)&&r(i),{blob:o,link:l}};e.s(["u",0,a,"q",0,{content:"Error downloading job report",severity:"error"},"a",0,i,"k",0,n])},234383,e=>{var t=e.i(159080);let a=t.f`
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
`,i=t.f`
  query GetQuoteNumber($id: Int!) {
    quote: SupplierQuote_by_pk(id: $id) {
      id
      quoteNumber
    }
  }
`;e.s(["w",0,a,"m",0,i])},118618,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)((0,r.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"}),"CalendarMonthOutlined")},858564,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)([(0,r.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},"0"),(0,r.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"},"1")],"ContentPasteSearchOutlined")},28980,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)((0,r.jsx)("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"}),"DownloadRounded")},724128,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)((0,r.jsx)("path",{d:"M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAltRounded")},586741,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)((0,r.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp")},810142,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(e.r(421506)),r=e.r(391398);a.default=(0,n.default)((0,r.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"StorageOutlined")},246896,680596,751107,e=>{var t=e.i(382161);e.s(["f",()=>t.f],246896);var a=e.i(77052);e.s(["f",()=>a.f],680596);var i=e.i(185758);e.s(["f",()=>i.f],751107)},717803,e=>{var t=e.i(986351);e.s(["f",()=>t.f])}])})();