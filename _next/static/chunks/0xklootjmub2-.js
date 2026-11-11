(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,732106,e=>{"use strict";e.s(["f",()=>eT],732106);var t=e.i(391398),n=e.i(191788),i=e.i(432171),o=e.i(877341),a=e.i(472552),r=e.i(871931),l=e.i(760981),s=e.i(302966),d=e.i(115871),c=e.i(813843),u=e.i(755548),m=e.i(986351),p=e.i(800884),f=e.i(659587),y=e.i(587369),b=e.i(498681),h=e.i(594301),v=e.i(411331),g=e.i(834862),x=e.i(122965),I=e.i(10945),j=e.i(74633),N=e.i(690374),C=e.i(302876),E=e.i(98926),A=e.i(159080);let P=A.f`
  query GetCreditNoteEntries(
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
`;var _=e.i(76381),w=e.i(21557),R=e.i(740790),T=e.i(652148),S=e.i(722394),O=e.i(553875),$=e.i(426778);let M=$.t().shape({dateReceived:$.c().required("Date Received is required").typeError("Date Received is required"),amount:$.H().positive("Amount must be positive").required("Amount is required").typeError("Amount is required").test("more-than-one-payment","Credit notes can only be raised against a single invoice",function(){return!((this.parent.payments||[]).filter(e=>e.amount>0).length>1)}).test("sum-of-payments","The sum of the reconciled amounts does not match the credit note amount",function(e){let t=(this.parent.payments||[]).filter(e=>e.amount>0).reduce((e,t)=>e+t.amount,0);return null==e||e===t}).test("sum-of-outstanding-amounts","Credit amount is greater than the outstanding amount (net)",function(e){return e<=(this.parent.payments||[]).filter(e=>e.amount>0).reduce((e,t)=>e+t.outstandingAmountNet,0)}),reason:$.x().nullable(),payments:$.k().of($.t().shape({outstandingAmount:$.H().required("Outstanding Amount  is required").typeError("Outstanding Amount  is required"),outstandingAmountNet:$.H().required("Outstanding Amount Net is required").typeError("Outstanding Amount Net is required"),accountEntryId:$.H().required("Account Entry ID is required").typeError("Account Entry ID is required"),amount:$.H().nullable().test("sum-of-outstanding-amounts","Credit amount is greater than the outstanding amount (net)",function(e){let t=this.parent.outstandingAmountNet;return null==e||e<=t})})).required("Payments are required")});var D=e.i(964770),k=e.i(140021),V=e.i(422411),W=e.i(424894),U=e.i(443103),q=e.i(506656),L=e.i(262999),B=e.i(356119),G=e.i(65295),F=e.i(511667),J=e.i(773831),X=e.i(591394),H=e.i(529422),Y=e.i(879436);let Q=e=>{let{accountId:o,locationId:a,jobId:r,refetchGraphQLQueries:l,refetchFetchQueries:s,close:d}=e,u=(0,E.f)(),m=(0,w.f)(),p=(0,b.f)(),f=p.admin?.jobSetting?.jobNumberPrefix,y=p.admin?.jobSetting?.jobNumberSuffix,[h,v]=(0,n.useState)([]),{errors:g,control:I,watch:N,setValue:C,handleSubmit:A,getValues:$,trigger:Q}=(0,V.G)({resolver:(0,W.yupResolver)(M),shouldUnregister:!1,mode:"onChange",reValidateMode:"onChange"}),{append:z,remove:K}=(0,V.v)({control:I,name:"payments"}),Z=N("amount"),ee=N("payments"),et=(0,n.useMemo)(()=>ee??[],[ee]),{activeAccountId:en,isMultiAccount:ei}=(e=>{let{accountId:t,rowItems:n,payments:i}=e,o=Array.isArray(t)&&t.length>1;return{activeAccountId:(()=>{if(Array.isArray(t)&&1===t.length)return t[0]??null;if(!Array.isArray(t))return t;let e=i.findIndex(e=>null!=e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0);return -1===e?null:n[e]?.accountId??null})(),isMultiAccount:o}})({accountId:o,rowItems:h,payments:et}),eo=(0,n.useMemo)(()=>et.filter(e=>Number(e?.amount)>0).length>1,[et]),{reference:ea,pagination:er,order:el}=(0,x.f)({options:{orderType:"nulls_last"}}),es=(0,n.useMemo)(()=>(e=>{let{accountId:t,locationId:n,jobId:i}=e,o=[];o.push(n?{locationId:{_eq:n}}:{}),o.push(Array.isArray(t)?t.length>0?{accountId:{_in:t}}:{}:t?{accountId:{_eq:t}}:{}),o.push(i?{Invoices:{entityId:{_eq:i}}}:{}),o.push({type:{_in:["proformaInvoice","customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"]},paymentStatus:{_in:["unpaid","partial"]}});let a=o.filter(e=>!U.isEmpty(e));return{...a.length>0&&{_and:a}}})({accountId:o,locationId:a,jobId:r}),[o,r,a]),{data:{meta:ed}={meta:{aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0}}}},loading:ec}=(0,i.t)(P,{variables:{...er,accountId:o,locationId:a,orderBy:el,where:es},onCompleted:e=>{let t=e?.accountEntries?.map((e,t)=>{let n=e.invoices?.[0];return{index:t,id:e.id,type:e.type,jobId:n?.Job?.id,locationId:e.locationId,jobNumber:n?.Job?.number,jobType:n?.Job?.type,invoiceNumber:e.invoiceNumber,createdAt:(0,G.f)(e.createdAt),outstandingdays:e.outstandingdays,outstandingAmount:e.outstandingAmount,outstandingAmountNet:e.outstandingAmountNet,amount:0,invoiceId:n?.id,meta:e.meta,accountId:e.accountId}});K(),z(t.map(e=>({outstandingAmount:e.outstandingAmount,outstandingAmountNet:e.outstandingAmountNet,accountEntryId:e.id,amount:0}))),v(t)}}),[eu,{isLoading:em}]=(0,F.f)("/account-entry/credit-note/create",{queryKey:"account-entry-credit-note-create",method:"POST",refetchQueries:s,onCompleted:()=>{m.show({severity:"success",content:"Credit note was added successfully."}),d(),u.refetchQueries({include:l})},onError:e=>{m.show({severity:"error",content:`Error: ${e.message}`})}}),ep=(0,n.useCallback)(e=>{let t=$("payments")[e]?.outstandingAmountNet??null;C(`payments.${e}.amount`,t),Q("amount"),Q("payments")},[$,C,Q]),ef=(0,n.useMemo)(()=>(e=>{let{numberPrefix:n,numberSuffix:i,control:o,errors:a,isMultiAccount:r,activeAccountId:l,moreThanOnePayment:s,handleAmountChange:d,trigger:u}=e;return[{minWidth:140,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:o}=e;return["customerPpmInvoice","supplierPpmInvoice"].includes(o.type)?`PM ${o.invoiceNumber}`:["customerGroupInvoice"].includes(o.type)?`Multiple / ${o.invoiceNumber}`:o.jobId&&o.jobNumber&&o.jobType?(0,t.jsx)(H.f,{id:o.jobId,number:o.jobNumber,invoiceNumber:o.invoiceNumber,numberPrefix:n,numberSuffix:i,openCanvas:!0,type:o.jobType}):o.invoiceNumber??"N/A"}},{minWidth:120,sortable:!0,headerName:"Date",field:"createdAt"},{flex:1,sortable:!0,headerName:"Days Outstanding",field:"outstandingdays"},{flex:1,minWidth:160,sortable:!0,headerName:"Amount Outstanding (Vat)",field:"outstandingAmount",renderCell:e=>{let{row:t}=e;return(0,Y.f)(t.outstandingAmount)}},{flex:1,minWidth:160,sortable:!0,headerName:"Amount Outstanding (Net)",field:"outstandingAmountNet",renderCell:e=>{let{row:t}=e;return(0,Y.f)(t.outstandingAmountNet)}},{flex:1,minWidth:250,sortable:!1,headerName:"Reconciled Amount",field:"amount",renderCell:e=>{let{row:n}=e,i=r&&null!==l&&n.accountId!==l;return(0,t.jsxs)(c.f,{direction:"row",sx:i?{opacity:.4}:void 0,children:[(0,t.jsx)(V.e,{control:o,defaultValue:n.id,name:`payments.${n.index}.accountEntryId`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(V.e,{control:o,defaultValue:n.outstandingAmount,name:`payments.${n.index}.outstandingAmount`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(V.e,{control:o,defaultValue:n.outstandingAmountNet,name:`payments.${n.index}.outstandingAmountNet`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(V.e,{control:o,defaultValue:null,name:`payments.${n.index}.amount`,render:e=>{let{value:o,onChange:r}=e;return(0,t.jsx)(D.f,{disabled:i,leftLabel:(0,t.jsx)(k.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",inputProps:{min:0,step:.01},value:o,onChange:e=>{""===e.target.value?r(null):r(e),u("amount")},fullWidth:!0,error:!!a?.payments?.[n.index]?.amount||o>0&&s})}}),(0,t.jsx)(J.f,{onClick:()=>d(n.index),disabled:i,children:(0,t.jsx)(X.default,{})})]})}}]})({numberPrefix:f,numberSuffix:y,control:I,errors:g,isMultiAccount:ei,activeAccountId:en,moreThanOnePayment:eo,handleAmountChange:ep,trigger:Q}),[f,y,I,g,ei,en,eo,ep,Q]),ey=(0,n.useMemo)(()=>{let e=et.findIndex(e=>Number(e?.amount)>0);return -1===e?null:h[e]??null},[et,h]),eb=(0,n.useMemo)(()=>{var e;let t,n;return null===ey?null:(e=ey.meta,t=e?.amountInfo?.total??e?.amounts?.total,n=e?.amountInfo?.vatAmount??e?.amounts?.vatPDF,!Number.isFinite(t)||!Number.isFinite(n)||t<=0||n<0?null:n/t)},[ey]),eh=(0,n.useMemo)(()=>{var e,t;return null===ey||null===eb?null:(e=ey.outstandingAmount,t=ey.outstandingAmountNet,e>0&&t>0?Math.min(e/t,1+eb):null)},[ey,eb]),ev=(0,n.useMemo)(()=>null===eb?null:Number(Z)*eb,[Z,eb]),eg=(0,n.useMemo)(()=>null===eh?null:Number(Z)*eh,[Z,eh]),ex=(0,n.useMemo)(()=>null===ev||null===eg?null:Number(Z)+ev-eg,[Z,ev,eg]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.f,{sx:{zIndex:1e5},open:em,children:(0,t.jsx)(_.f,{color:"secondary"})}),(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:A(e=>{en&&eu({body:((e,t)=>{let n=e.payments.find(e=>e.amount&&e.amount>0);if(!n||!n.amount||!n.accountEntryId)throw Error("Payment is required");return{dateReceived:e.dateReceived,amount:e.amount,reason:e.reason,payment:{amount:n.amount,accountEntryId:n.accountEntryId},accountId:t}})(e,en)})}),children:(0,t.jsxs)(c.f,{width:"100%",children:[(0,t.jsx)(L.f,{color:"info",severity:"info",variant:"filled",sx:{color:"text.primary",mb:2},children:"Credit notes can only be raised against a single invoice. If a credit amount needs to be applied across multiple invoices, you will need to create a credit note for each invoice for the relevant amount."}),(0,t.jsxs)(R.f,{container:!0,columnSpacing:2,rowSpacing:2,children:[(0,t.jsx)(R.f,{item:!0,xs:12,children:(0,t.jsx)(V.e,{control:I,defaultValue:null,name:"dateReceived",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(S.f,{format:"DD/MM/YYYY",value:n,onChange:e=>i(e),label:"Date Created",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0,error:!!g?.dateReceived,helperText:g?.dateReceived?.message}}})}})}),(0,t.jsx)(R.f,{item:!0,xs:12,children:(0,t.jsx)(V.e,{control:I,name:"reason",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(T.f,{multiline:!0,rows:4,label:"Reason",variant:"filled",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!g?.reason,helperText:g?.reason?.message})}})}),(0,t.jsx)(R.f,{item:!0,xs:12,mb:0,mt:2,children:(0,t.jsx)(V.e,{control:I,defaultValue:null,name:"amount",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(D.f,{height:"53px",leftLabel:(0,t.jsx)(k.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",label:"Amount",inputProps:{min:0,step:.01},value:n,onChange:i,fullWidth:!0,error:!!g?.amount})}})}),(0,t.jsx)(R.f,{item:!0,xs:12,children:(0,t.jsxs)(c.f,{alignItems:"flex-end",children:[(0,t.jsxs)(B.f,{children:["Net total: ",(0,Y.f)(Z)]}),(0,t.jsxs)(B.f,{children:["VAT total",` (${(0,q.f)((eb??0)*100,2)}%)`,":"," ",(0,Y.f)(ev??0)]}),null!==ex&&ex>0&&(0,t.jsxs)(B.f,{children:["less: CIS deduction: ",(0,Y.f)(ex)]}),(0,t.jsxs)(B.f,{children:["Gross: ",(0,Y.f)(eg??0)]})]})}),g?.amount&&(0,t.jsx)(R.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(L.f,{severity:"error",variant:"filled",children:g?.amount?.message})})]}),(0,t.jsx)(j.s,{...ea,columns:ef,loading:ec,history:!1,totalCount:ed.aggregate.totalCount,rows:h})]})})]})};var z=e.i(54348),K=e.i(152078),Z=e.i(4142),ee=e.i(122989),et=e.i(824451);let en=(0,$.t)().shape({startDate:(0,$.c)().nullable(),endDate:(0,$.c)().nullable().when("startDate",(e,t)=>{let[n]=e;return n?t.min(n,"End date must be on or after start date"):t}),invoiceNumber:(0,$.x)().nullable(),outstandingLevel:(0,$.x)().nullable(),dateType:(0,$.x)().nullable(),creditNote:(0,$.g)(),paymentReceipt:(0,$.g)(),proformaInvoice:(0,$.g)(),unpaid:(0,$.g)(),partiallyPaid:(0,$.g)(),paid:(0,$.g)(),synced:(0,$.g)()}),ei=[{text:"All work orders",value:null,label:"All work orders"},{text:"All outstanding invoices",value:"0-",label:"All outstanding invoices"},{text:"1 - 30",value:"1-30",label:"1 - 30"},{text:"31 - 60",value:"31-60",label:"31 - 60"},{text:"61 - 90",value:"61-90",label:"61 - 90"},{text:"> 90",value:"90-",label:"> 90"}],eo={startDate:null,endDate:null,invoiceNumber:"",outstandingLevel:null,creditNote:!0,paymentReceipt:!0,proformaInvoice:!0,unpaid:!0,partiallyPaid:!0,paid:!0,synced:!1,dateType:"created"},ea=e=>e?new Date(e):null,er=[{value:"created",label:"Created date"},{value:"issued",label:"Issue date"}],el=e=>{let{visibility:i,filters:o,setFilters:a}=e,r=(0,y.f)("(max-width:800px)"),{control:l,handleSubmit:s,watch:d}=(0,V.G)({resolver:(0,W.yupResolver)(en),defaultValues:{...eo,...o,startDate:ea(o.startDate),endDate:ea(o.endDate)}}),m=d("creditNote"),p=d("paymentReceipt"),f=d("proformaInvoice"),b=d("unpaid"),h=d("partiallyPaid"),v=d("paid"),g=d("synced");return(0,n.useEffect)(()=>{a(e=>({...e,creditNote:m,paymentReceipt:p,proformaInvoice:f,unpaid:b,partiallyPaid:h,paid:v,synced:g}))},[m,v,h,p,f,a,g,b]),(0,t.jsx)("form",{onSubmit:s(e=>{a(e)}),children:(0,t.jsxs)(c.f,{width:"100%",spacing:1,children:[(0,t.jsxs)(c.f,{direction:r?"column":"row",alignItems:"center",width:"100%",spacing:2,children:[(0,t.jsx)(V.e,{name:"startDate",control:l,render:e=>(0,t.jsx)(S.f,{...e,label:"Start date",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0}}})}),(0,t.jsx)(V.e,{name:"endDate",control:l,render:e=>(0,t.jsx)(S.f,{...e,label:"End date",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0}}})}),i?.dateType&&(0,t.jsx)(V.e,{name:"dateType",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(et.f,{options:er,value:er.find(e=>e.value===n)??er[0],onChange:(e,t)=>i(t?.value??"created"),disableClearable:!0,label:"Filter dates by",fullWidth:!0,variant:"outlined",color:"secondary"})}}),(0,t.jsx)(V.e,{name:"invoiceNumber",control:l,render:e=>(0,t.jsx)(T.f,{...e,fullWidth:!0,label:"Id / Invoice",variant:"outlined",color:"secondary"})}),(0,t.jsx)(V.e,{name:"outstandingLevel",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(ee.f,{label:"Outstanding Level",value:n,onChange:i,options:ei.map(e=>({value:null===e.value?"":e.value,label:e.label})),fullWidth:!0,variant:"outlined",color:"secondary"})}}),(0,t.jsx)(u.f,{variant:"contained",color:"secondary",type:"submit",size:"medium",sx:{height:"36px",minWidth:"auto",width:"100%",maxWidth:"120px"},children:"Filter"})]}),(0,t.jsxs)(c.f,{direction:"row",width:"100%",justifyContent:"space-between",flexWrap:"wrap",children:[(0,t.jsx)(K.f,{control:(0,t.jsx)(V.e,{name:"creditNote",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"dark"})}}),label:"Credit Note"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(V.e,{name:"paymentReceipt",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"black"})}}),label:"Payment"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(V.e,{name:"proformaInvoice",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"danger"})}}),label:"Proforma Invoice"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(V.e,{name:"unpaid",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"danger"})}}),label:"Unpaid"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(V.e,{name:"partiallyPaid",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"pink"})}}),label:"Partially Paid"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(V.e,{name:"paid",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"success"})}}),label:"Paid"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(V.e,{name:"synced",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"success"})}}),sx:{...!i?.synced&&{display:"none"}},label:"Synced"})]})]})})};var es=e.i(28980),ed=e.i(93198);let ec=e=>{let{showCSVdownload:n,showXeroBulkSync:i,downloadCsv:o,csvDownloading:a,xeroBulkSync:r}=e,l=(0,ed.r)();return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:2,children:[i&&(0,t.jsx)(u.f,{disableMinWidth:!0,variant:"contained",color:"info",onClick:e=>{e.stopPropagation(),r()},children:"Xero Bulk Sync"}),!l&&n&&(0,t.jsx)(u.f,{disabled:a,disableMinWidth:!0,variant:"contained",color:"success",onClick:e=>{e.stopPropagation(),o()},children:a?(0,t.jsx)(_.f,{size:30,color:"success"}):(0,t.jsx)(es.default,{})})]})};var eu=e.i(624841),em=e.i(277984),ep=e.i(890350),ef=e.i(497844),ey=e.i(529069),eb=e.i(841879),eh=e.i(190871);let ev=async e=>{let t=(0,eb.f)(e,e.invoiceType);if(!t)throw Error("This entry has no PDF to download");await (0,eh.k)(t)};var eg=e.i(362537),ex=e.i(766413);class eI{filters;constructor(e){this.filters=e}getLocation(){let{locationId:e}=this.filters;return e?{_or:[{locationId:{_eq:e}},{PaymentReconciliations:{locationId:{_eq:e}}}]}:null}getAccount(){let{accountId:e}=this.filters;return e?Array.isArray(e)?e.length>0?{accountId:{_in:e}}:null:{accountId:{_eq:e}}:null}getType(){let{creditNote:e,paymentReceipt:t,invoice:n,proformaInvoice:i,customerPpmInvoice:o,supplierPpmInvoice:a,unpaid:r,partiallyPaid:l,paid:s}=this.filters.type,d=[],c=[];return(e&&(d.push("creditNote"),c.push("creditNote")),t&&(d.push("paymentReceipt"),c.push("paymentReceipt")),n&&d.push("invoice","customerGroupInvoice"),i&&d.push("proformaInvoice"),o&&d.push("customerPpmInvoice"),a&&d.push("supplierPpmInvoice"),r&&c.push("unpaid"),l&&c.push("partial"),s&&c.push("paid"),(r||l||s)&&(1!==d.length||"proformaInvoice"!==d[0])&&d.push("customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"),0===d.length)?{type:{_in:[]},paymentStatus:{_in:[]}}:{type:{_in:[...d]},paymentStatus:{_in:[...c]}}}getOutstandingLevel(){let{outstandingLevel:e}=this.filters;return e?{outstandingdays:{_gte:e.split("-")[0]||null,_lte:e.split("-")[1]||null}}:null}getTime(){let{startDate:e,endDate:t,dateField:n}=this.filters;if(!e&&!t)return null;let i={...e&&{_gte:e},...t&&{_lt:(0,eg.default)(t).add(1,"day").startOf("day").toISOString()}};return"issueDate"!==n?{createdAt:i}:{_or:[{invoicedDate:i},{dateReceived:i}]}}getInvoiceNumber(){let{invoiceNumber:e}=this.filters;return e?{_or:[{Invoices:{invoiceNumber:{_ilike:`%${e}%`}}},{Invoices:{Job:{number:{_ilike:`%${e}%`}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{invoiceNumber:{_ilike:`%${e}%`}}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{Job:{number:{_ilike:`%${e}%`}}}}}}]}:null}build(){let e=[this.getLocation(),this.getAccount(),this.getType(),this.getOutstandingLevel(),this.getTime(),this.getInvoiceNumber()].filter(e=>null!==e);return e.length>0?{_and:e}:{}}}var ej=e.i(299796),eN=e.i(252647);let eC=A.f`
  query GetAccountEntries(
    $where: AccountEntry_bool_exp
    $limit: Int
    $offset: Int
    $accountId: Int
    $locationId: Int
    $orderBy: [AccountEntry_order_by!]
    $showTotalChips: Boolean = false
    $showBalance: Boolean = false
    $xeroSync: Boolean = false
  ) {
    accountEntries: getDashboard_AccountEntry_calculatebalance(
      limit: $limit
      offset: $offset
      order_by: $orderBy
      where: $where
      args: { location_id: $locationId, show_balance: $showBalance, xero_sync: $xeroSync }
    ) {
      id
      outstandingAmount
      outstandingdays
      type
      entryId
      jobId
      locationId
      currencyId
      createdAt
      dateReceived
      invoicedDate
      balance: balance @include(if: $showBalance)
      debit
      credit
      accountId
      updatedAt
      status
      paymentStatus
      meta
      invoiceNumber
      account: Account {
        id
        name
        type
      }
      invoices: Invoices {
        id
        invoiceType
        invoiceNumber

        job: Job {
          id
          number
          type
          status

          location: Location {
            id
            name
          }
          service: Service {
            id
            name
          }
        }
      }
      paymentReconciliations: PaymentReconciliations {
        id
        creditEntity
        meta
        accountEntry: InvoiceEntry {
          type
          invoices: Invoices {
            job: Job {
              id
              type
              number
              quoted
            }
          }
        }
      }
    }
    meta: getDashboard_AccountEntry_calculatebalance_aggregate(
      where: $where
      args: { location_id: $locationId, show_balance: $showBalance, xero_sync: $xeroSync }
    ) {
      aggregate {
        debitTotal: sum @include(if: $showTotalChips) {
          debit
        }
        creditTotal: sum @include(if: $showTotalChips) {
          credit
        }
        totalCount: count
      }
    }
  }
`,eE=A.f`
  query GetAccountEntriesCsv($where: AccountEntry_bool_exp, $accountId: Int, $locationId: Int) {
    accountEntries: getDashboard_AccountEntry_calculatebalance(
      where: $where
      args: { location_id: $locationId }
      order_by: { createdAt: desc }
    ) {
      id
      outstandingAmount
      outstandingdays
      type
      entryId
      jobId
      locationId
      currencyId
      createdAt
      dateReceived
      invoicedDate
      balance
      debit
      credit
      accountId
      updatedAt
      status
      paymentStatus
      meta
      invoiceNumber
      invoices: Invoices {
        id
        invoiceType
        invoiceNumber

        job: Job {
          id
          reference
          type
          number
          status

          location: Location {
            id
            name
          }
          sublocation: Sublocation {
            id
            name
          }
          service: Service {
            id
            name
          }
        }
      }
      reconciliations: InvoiceReconciliations_aggregate {
        aggregate {
          sum {
            amount
          }
        }
      }
    }
  }
`;var eA=e.i(684779),eP=e.i(974266);let e_=e=>{let{type:n,accountId:i,locationId:o}=e;return(0,t.jsx)(eT,{title:"Xero",type:n,accountId:i,locationId:o,showXeroBulkSyncColumnHeader:!0,columnVisibility:{balance:!1},defaultFilters:{creditNote:!1,paymentReceipt:!1,invoice:!0,proformaInvoice:!0,customerPpmInvoice:!0,supplierPpmInvoice:!0,unpaid:!0,partiallyPaid:!0,paid:!0},filterVisibility:{synced:!0},tableContainerHeight:"calc(100vh - 210px)",tableContainerMaxHeight:"calc(100vh - 210px)"})};var ew=e.i(948574);let eR={aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0},balance:{balance:0}}},eT=e=>{let E,{title:A="Account Entries",type:P,accountId:_,locationId:R=null,showTotalChips:T,showAddButtons:S,showCSVdownload:O,showXeroBulkSync:$,showXeroBulkSyncColumnHeader:M,showFilters:D,defaultFilters:k,filterVisibility:V,columnVisibility:W,tableContainerHeight:U,tableContainerMaxHeight:q,tableHistory:L}=e,B=(0,b.f)(),F=(0,w.f)(),{hasRole:J}=(0,h.f)(),X=J([...ew.d]),K=(0,v.f)(),{sendEntitiesToXero:Z}=(0,g.f)(),ee=(0,y.f)("(max-width:600px)"),[et,en]=(0,n.useState)(!1),[ei,eo]=(0,n.useState)([]),ea=Array.isArray(_)?[..._].sort().join("_"):_,er=["filter-form-xero-account-entries",P,null!=R?`loc-${R}`:"",null!=ea?String(ea):""].filter(Boolean).join("-"),[es,ed]=(0,I.f)({key:er,initialValue:{},storageType:D?"sessionStorage":"state"}),eb=B.admin?.jobSetting?.jobNumberPrefix,eh=B.admin?.jobSetting?.jobNumberSuffix,{reference:eT,pagination:eS,order:eO}=(0,x.f)(),e$=!!W?.balance,eM=(0,n.useMemo)(()=>X?W:{...W,date:!1},[W,X]),{getActions:eD}=(E=(0,w.f)(),{getActions:(0,n.useCallback)(e=>[{icon:"download",onClick:async t=>{t.preventDefault(),t.stopPropagation();try{await ev(e)}catch(e){E.show({content:`Error: ${e instanceof Error?e.message:"Error downloading invoice"}`,severity:"error"})}},tooltip:"Download",disabled:e.type===em.f.PAYMENT_RECEIPT}],[E])}),ek=(0,n.useMemo)(()=>new eI({accountId:_,locationId:R,startDate:es?.startDate,endDate:es?.endDate,dateField:X&&es?.dateType!=="issued"?"createdAt":"issueDate",invoiceNumber:es?.invoiceNumber,outstandingLevel:es?.outstandingLevel,type:{creditNote:k?.creditNote??es?.creditNote,paymentReceipt:k?.paymentReceipt??es?.paymentReceipt,invoice:k?.invoice,proformaInvoice:k?.proformaInvoice??es?.proformaInvoice,customerPpmInvoice:k?.customerPpmInvoice,supplierPpmInvoice:k?.supplierPpmInvoice,unpaid:k?.unpaid??es?.unpaid,partiallyPaid:k?.partiallyPaid??es?.partiallyPaid,paid:k?.paid??es?.paid}}).build(),[_,R,es?.startDate,es?.endDate,es?.dateType,X,es?.invoiceNumber,es?.outstandingLevel,es?.creditNote,es?.paymentReceipt,es?.proformaInvoice,es?.unpaid,es?.partiallyPaid,es?.paid,k?.creditNote,k?.paymentReceipt,k?.invoice,k?.proformaInvoice,k?.customerPpmInvoice,k?.supplierPpmInvoice,k?.unpaid,k?.partiallyPaid,k?.paid]),{data:{accountEntries:eV=[],meta:eW=eR}={},loading:eU,refetch:eq}=(0,i.t)(eC,{variables:{...eS,accountId:_,locationId:R,orderBy:eO,where:ek,showTotalChips:T,showBalance:e$,xeroSync:!!es.synced}}),[eL,{loading:eB}]=(0,o.f)(eE,{variables:{limit:null,offset:0,accountId:_,locationId:R,orderBy:eO,where:ek},onCompleted:e=>{let t=((e,t)=>{let{numberPrefix:n="",numberSuffix:i="",seesCreatedDate:o}=t;return e.map(e=>{let t=e?.reconciliations?.aggregate?.sum?.amount||null,a=e.invoices?.[0],r=null;return e.type===em.f.CUSTOMER_GROUP_INVOICE?r=`Multiple / ${e.invoiceNumber??""}`:a?.job?.type&&["invoice","proformaInvoice"].includes(e.type)?r=`${(0,ej.f)(a?.job?.type)} ${n} ${a?.job?.number} ${i} / ${a?.invoiceNumber}`:a?.invoiceType&&eN._.includes(a?.invoiceType)&&(r=`PM / ${a?.invoiceNumber||""}`),{itemType:String(e.type).toLocaleUpperCase(),invoice:r,reference:"paymentReference"in e.meta?e.meta.paymentReference:"reference"in e.meta?e.meta.reference:a?.job?.reference,...o&&{date:(0,G.f)(e.createdAt)},issueDate:(0,G.f)((0,ex.l)(e)),daysOutstanding:e?.outstandingdays,status:a?.job?.status,service:a?.job?.service?.name,address:a?.job?.location?.name,sublocation:a?.job?.sublocation?.name,debit:e.debit,credit:e.credit,balance:e.balance,reconciledAmount:t??0,amountOutstanding:e.outstandingAmount,paymentStatus:e.paymentStatus,comment:"comment"in e.meta?e.meta.comment:""}})})(e.accountEntries,{numberPrefix:eb,numberSuffix:eh,seesCreatedDate:X}),n="data:application/octet-stream,"+encodeURIComponent(a.default.unparse(t,{escapeFormulae:/^[=+@\t\r]/}));(0,N.f)(n,"account-entries.csv")}}),eG=eW.aggregate.debitTotal?.debit??0,eF=eW.aggregate.creditTotal?.credit??0,eJ=eG-eF,eX=(0,n.useMemo)(()=>eV.map(e=>{let t="creditNote"!==e.type&&"paymentReceipt"!==e.type?e.outstandingdays:"-",n=e.invoices?.[0],i=e.paymentReconciliations?.[0]?.accountEntry,o=i?.invoices?.[0]?.job,a=e.type===em.f.CUSTOMER_GROUP_INVOICE,r=e.type===em.f.CREDIT_NOTE&&i?.type===em.f.CUSTOMER_GROUP_INVOICE,l=(e.paymentReconciliations??[]).filter(e=>"CreditNote"===e.creditEntity),s=(e.paymentReconciliations??[]).filter(e=>"PaymentReceipt"===e.creditEntity),d=l.map(e=>e.meta&&"xeroCreditNoteId"in e.meta?e.meta?.xeroCreditNoteId:null).filter(e=>!!e),c=s.map(e=>e.meta&&"xeroPaymentId"in e.meta?e.meta?.xeroPaymentId:null).filter(e=>!!e);return{id:e.id,type:e.type,account:e.account,jobId:n?.job?.id,jobNumber:n?.job?.number,jobType:n?.job?.type,isGrouped:a,invoiceNumber:e.invoiceNumber,invoiceType:n?.invoiceType,reference:"reference"in e.meta?e.meta.reference:"",comment:"comment"in e.meta?e.meta.comment:"",date:(0,eg.default)(e.createdAt).format("YYYY-MM-DD"),issueDate:(0,ex.p)((0,ex.l)(e)),outstandingDays:t??"-",outstandingAmount:e.outstandingAmount,status:n?.job?.status,debit:e.debit,credit:e.credit,balance:e.balance,paymentStatus:e.paymentStatus,meta:e.meta,creditNodeJob:o,creditsGroupedInvoice:r,syncedWithXero:"syncedWithXero"in e.meta?e.meta.syncedWithXero:null,xeroInvoiceId:"xeroInvoiceId"in e.meta?e.meta.xeroInvoiceId:null,xeroCreditNoteIds:d,xeroPaymentIds:c,actions:""}}),[eV]),eH=(0,n.useMemo)(()=>{let e=eX.filter(e=>[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(e.type)&&e.xeroInvoiceId);return ei.length+e.length===eX.length},[ei.length,eX]),eY=(0,n.useCallback)(async()=>{try{if(!ei.length)return void F.show({content:"All visible items are synced. Check your filters or other pages.",severity:"success"});en(!0),await Z({entities:ei}),eo([]),eq()}finally{en(!1)}},[eq,ei,Z,F]),eQ=(0,n.useCallback)(async e=>{try{en(!0),await Z(e),eq()}finally{en(!1)}},[eq,Z]),ez=(0,n.useCallback)((e,t)=>{t?eo(t=>[...t,e]):eo(t=>[...t].filter(t=>t!==e))},[eo]),eK=(0,n.useCallback)(e=>{e?eo(eX.filter(e=>[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(e.type)&&!e.xeroInvoiceId).map(e=>e.id)):eo([])},[eo,eX]),eZ=(0,n.useMemo)(()=>(e=>{let{numberPrefix:n,numberSuffix:i,showXeroBulkSyncColumnHeader:o,getActions:a,xeroSyncedAllItems:r,sendEntitiesToXero:l,checkedIds:s,handleSetCheckedIds:d,handleSetCheckedIdsAll:c}=e;return[{sortable:!1,flex:1,minWidth:100,headerName:"Xero Sync",field:"xeroSync",...o&&{renderHeader:()=>(0,t.jsx)(ey.f,{checked:r,onClick:e=>{e.stopPropagation()},onChange:async(e,t)=>{e.stopPropagation(),c(t)},color:"success"})},renderCell:e=>{let{row:n}=e;return[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(n.type)&&(0,t.jsx)(ey.f,{disabled:!!n.xeroInvoiceId,checked:!!n.xeroInvoiceId||s.includes(n.id),onClick:e=>{e.stopPropagation()},onChange:async(e,t)=>{(e.stopPropagation(),!o&&t)?await l({entities:[n.id]}):d(n.id,t)},color:"success"})}},{sortable:!1,flex:1,minWidth:180,headerName:"Type",field:"type",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(p.f,{label:n.type,color:(e=>{let{type:t,paymentStatus:n}=e;return"paymentReceipt"===t?"black":"creditNote"===t?"dark":"paid"===n?"success":"partial"===n?"pink":"warning"})({type:n.type,paymentStatus:n.paymentStatus}),size:"small",sx:{borderRadius:1}})}},{sortable:!1,flex:1,minWidth:180,headerName:"Account",field:"accountName",renderCell:e=>{let{row:t}=e;return t.account.name}},{sortable:!1,flex:1,minWidth:180,headerName:"Account Type",field:"accountType",renderCell:e=>{let{row:t}=e;return t.account.type===ep.d.SUPPLIER?"supplier":"customer"}},{sortable:!1,flex:1,minWidth:180,headerName:"Number",field:"number",renderCell:e=>{let{row:o}=e;return o.type===em.f.CREDIT_NOTE&&o.creditsGroupedInvoice?`Multiple / ${o.id}`:o.type===em.f.CREDIT_NOTE&&o.creditNodeJob?(0,t.jsx)(H.f,{id:o.creditNodeJob?.id,number:o.creditNodeJob?.number,invoiceNumber:o?.id,numberPrefix:n,numberSuffix:i,openCanvas:!!o.creditNodeJob?.id,type:o.creditNodeJob?.type}):em.f.CUSTOMER_PPM_INVOICE===o.type||em.f.SUPPLIER_PPM_INVOICE===o.type?`PM ${o?.invoiceNumber}`:o.isGrouped?`Multiple / ${o.invoiceNumber}`:o.jobId&&o.jobNumber&&o?.invoiceNumber&&o.jobType?(0,t.jsx)(H.f,{id:o.jobId,number:o.jobNumber,invoiceNumber:o?.invoiceNumber,numberPrefix:n,numberSuffix:i,openCanvas:!!o.jobId,type:o.jobType}):"-"}},{sortable:!1,flex:1,minWidth:180,headerName:"Reference",field:"reference"},{sortable:!1,flex:1,minWidth:180,headerName:"Date",field:"date"},{sortable:!1,flex:1,minWidth:180,headerName:"Issue date",field:"issueDate"},{sortable:!1,flex:1,minWidth:120,headerName:"Days Outstanding",field:"outstandingDays"},{sortable:!1,flex:1,minWidth:120,headerName:"Amount Outstanding",field:"outstandingAmount",renderCell:e=>{let{row:t}=e;return t.type===em.f.CREDIT_NOTE||t.type===em.f.PAYMENT_RECEIPT?"-":(0,Y.f)(t.outstandingAmount)}},{sortable:!1,flex:1,minWidth:140,headerName:"Status",field:"status",renderCell:e=>{let{row:n}=e;return n.status?(0,t.jsx)(eu.f,{value:n.status}):""}},{sortable:!1,flex:1,minWidth:120,headerName:"Debit",field:"debit",renderCell:e=>{let{row:t}=e;return t.debit?(0,Y.f)(t.debit):"-"}},{sortable:!1,flex:1,minWidth:120,headerName:"Credit",field:"credit",renderCell:e=>{let{row:t}=e;return t.credit?(0,Y.f)(t.credit):"-"}},{sortable:!1,flex:1,minWidth:120,headerName:"Balance",field:"balance",renderCell:e=>{let{row:t}=e;return(0,Y.f)(t.balance)}},{sortable:!1,flex:1,minWidth:120,headerName:"Xero status",field:"xeroStatus",renderCell:e=>{let{row:t}=e;return em.f.CREDIT_NOTE===t.type||em.f.PAYMENT_RECEIPT===t.type?"-":t.syncedWithXero?"Synced":"Not synced"}},{sortable:!1,flex:1,minWidth:210,headerName:"Xero reference",field:"xeroReference",renderCell:e=>{let{row:t}=e;return[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(t.type)?t.xeroInvoiceId:em.f.CREDIT_NOTE===t.type?t.xeroCreditNoteIds.join(", "):em.f.PAYMENT_RECEIPT===t.type?t.xeroPaymentIds.join(", "):"-"}},{sortable:!1,minWidth:120,headerName:"Actions",field:"actions",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(ef.f,{actions:a(n)})}}]})({numberPrefix:eb??"",numberSuffix:eh??"",getActions:eD,showXeroBulkSyncColumnHeader:M,xeroSyncedAllItems:eH,sendEntitiesToXero:eQ,checkedIds:ei,handleSetCheckedIds:ez,handleSetCheckedIdsAll:eK}),[ei,eD,eQ,ez,eK,eb,eh,M,eH]),e0=(0,n.useCallback)(()=>{_&&K.show({content:(0,t.jsx)(z.f,{accountId:_,locationId:R,refetchGraphQLQueries:["GetAccountEntries"],close:K.close}),title:"Add Payment Received",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"80vw",md2:"80vw",lg:"80vw",lg2:"80vw"})},[_,R,K]),e1=(0,n.useCallback)(()=>{_&&K.show({content:(0,t.jsx)(Q,{accountId:_,locationId:R,refetchGraphQLQueries:["GetAccountEntries"],close:K.close}),title:"Add credit note",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"80vw",md2:"80vw",lg:"80vw",lg2:"80vw"})},[_,R,K]),e2=(0,n.useCallback)(()=>{K.show({content:(0,t.jsx)(e_,{type:P,accountId:_,locationId:R}),title:"Xero Bulk Sync",xs3:"100vw",sm:"90vw",sm2:"80vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},[_,P,R,K]),e8=(0,n.useCallback)(e=>{let{row:n}=e;K.show({content:(0,t.jsx)(C.f,{accountEntryId:n.id,close:K.close}),title:"Account Entry Details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},[K]);return(0,t.jsxs)(t.Fragment,{children:[M&&(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:e=>{e.preventDefault(),eY()}}),(0,t.jsx)(eA.f,{sx:{zIndex:1e5},open:et,children:(0,t.jsx)(eP.f,{color:"secondary"})}),(0,t.jsxs)(r.f,{defaultExpanded:!0,children:[(0,t.jsx)(s.f,{expandIcon:(0,t.jsx)(f.default,{}),children:(0,t.jsxs)(c.f,{direction:"row",justifyContent:"space-between",width:"100%",pr:2,children:[(0,t.jsx)(d.f,{variant:"h6",children:A}),(0,t.jsx)(ec,{showCSVdownload:O,showXeroBulkSync:$,downloadCsv:eL,csvDownloading:eB,xeroBulkSync:e2})]})}),(0,t.jsxs)(l.f,{children:[D&&(0,t.jsx)(el,{visibility:V,filters:es,setFilters:ed},er),(0,t.jsx)(j.s,{...eT,stateKey:`xero-account-entries-${P??"all"}${D?"":"-embedded"}`,history:L,autoHeight:!1,columns:eZ,rows:eX,totalCount:eW?.aggregate?.totalCount??0,loading:eU,onRowClick:e8,columnVisibilityModel:eM,containerHeight:U,containerMaxHeight:q}),(T||S)&&(0,t.jsxs)(c.f,{width:"100%",mt:2,spacing:2,children:[T&&(0,t.jsxs)(c.f,{direction:ee?"column":"row",width:"100%",justifyContent:"flex-end",spacing:1,children:[(0,t.jsx)(p.f,{label:`Total Debit: ${(0,Y.f)(eG)}`,color:"info"}),(0,t.jsx)(p.f,{label:`Total Credit: ${(0,Y.f)(eF)}`,color:"info"}),(0,t.jsx)(p.f,{label:`Balance: ${(0,Y.f)(eJ)}`,color:eJ<0?"warning":"success"})]}),(0,t.jsx)(m.f,{}),S&&(0,t.jsxs)(c.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"secondary",onClick:e0,children:"Add Payment Received"}),"customer"===P&&(0,t.jsx)(u.f,{variant:"contained",color:"secondary",onClick:e1,children:"Add Credit note"})]})]})]})]})]})}}]);