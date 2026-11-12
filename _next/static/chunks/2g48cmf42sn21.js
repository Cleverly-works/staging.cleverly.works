(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,890350,e=>{var t,n,i,r=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),o=((n={}).VERIFIED="verified",n.UNVERIFIED="unverified",n),a=((i={}).CLEVERLY="cleverly",i.XERO="xero",i.BIDIRECTIONAL="bidirectional",i.NONE="none",i);e.s(["d",()=>r,"T",()=>o,"$",()=>a])},518566,277984,841879,e=>{var t,n,i=((t={}).CustomerGroupInvoice="customerGroupInvoice",t.CustomerPpmInvoice="customerPpmInvoice",t.CustomerVat="customerVat",t.ProformaInvoiceCustomer="ProformaInvoiceCustomer",t.ProformaInvoiceSupplier="ProformaInvoiceSupplier",t.Supplier="supplier",t.SupplierPpmInvoice="supplierPpmInvoice",t);e.s(["f",()=>i],518566);var r=((n={}).INVOICE="invoice",n.PROFORMA_INVOICE="proformaInvoice",n.CREDIT_NOTE="creditNote",n.PAYMENT_RECEIPT="paymentReceipt",n.CUSTOMER_PPM_INVOICE="customerPpmInvoice",n.CUSTOMER_GROUP_INVOICE="customerGroupInvoice",n.SUPPLIER_PPM_INVOICE="supplierPpmInvoice",n);e.s(["f",()=>r],277984);let o={[r.CREDIT_NOTE]:"credit-note",[r.CUSTOMER_GROUP_INVOICE]:"customer-group",[r.CUSTOMER_PPM_INVOICE]:"customer-ppm",[r.SUPPLIER_PPM_INVOICE]:"supplier-ppm",[r.PROFORMA_INVOICE]:"proforma"},a={[i.CustomerVat]:"customer-vat",[i.Supplier]:"supplier"};e.s(["f",0,(e,t)=>{let n=e.type===r.INVOICE?a[t]:o[e.type],i="credit-note"===n?String(e.id):e.invoiceNumber;return n&&i?{type:n,number:i,id:e.id}:null}],841879)},252647,766413,e=>{var t=e.i(518566);t.f.CustomerVat,t.f.Supplier;let n=[t.f.ProformaInvoiceCustomer,t.f.ProformaInvoiceSupplier],i=[t.f.CustomerPpmInvoice,t.f.SupplierPpmInvoice],r={customer:[t.f.CustomerVat,t.f.ProformaInvoiceCustomer,t.f.CustomerPpmInvoice,t.f.CustomerGroupInvoice],supplier:[t.f.Supplier,t.f.ProformaInvoiceSupplier,t.f.SupplierPpmInvoice]},o={[t.f.CustomerVat]:"Customer VAT Invoice",[t.f.Supplier]:"Supplier Invoice",[t.f.ProformaInvoiceCustomer]:"Customer ad-hoc Invoice",[t.f.ProformaInvoiceSupplier]:"Supplier ad-hoc Invoice",[t.f.CustomerPpmInvoice]:"PPM Customer Invoice",[t.f.SupplierPpmInvoice]:"PPM Supplier Invoice",[t.f.CustomerGroupInvoice]:"Customer group invoice"};e.s(["B",0,r,"z",0,o,"_",0,i,"D",0,n],252647);var a=e.i(362537);e.s(["p",0,e=>e?(0,a.default)(e).format("YYYY-MM-DD"):"-","l",0,e=>e.invoicedDate??e.dateReceived??null],766413)},302876,e=>{var t=e.i(391398),n=e.i(98926),i=e.i(776204),r=e.i(432171),o=e.i(975569),a=e.i(594301),l=e.i(871931),s=e.i(760981),c=e.i(302966),d=e.i(115871),u=e.i(813843),m=e.i(553875),p=e.i(76381),f=e.i(659587),y=e.i(191788),b=e.i(362537),h=e.i(936641),v=e.i(755548),x=e.i(498681),I=e.i(21557),g=e.i(252647),j=e.i(529422),N=e.i(624841),C=e.i(74633),E=e.i(277984),P=e.i(834862),A=e.i(766413),_=e.i(948574),R=e.i(879436);e.s(["f",0,e=>{let w,{accountEntryId:T,close:S}=e,{authStatus:O,receiveUpdatesFromXero:M}=(0,P.f)(),$=(0,I.f)(),D=(0,x.f)(),V=(0,n.f)(),k=D.admin?.jobSetting?.jobNumberPrefix,U=D.admin?.jobSetting?.jobNumberSuffix,[q,W]=(0,y.useState)(!1),{hasRole:G}=(0,a.f)(),L=G("admin"),Y=G([..._.d]),[F,{loading:B}]=(0,i.f)(o.p,{refetchQueries:["GetAccountEntries"],onCompleted:()=>{$.show({content:"Account Entry was successfully deleted",severity:"success"}),S&&S()},onError:e=>{$.show({content:`Error: ${e.message}`,severity:"error"})}}),{data:{accountEntry:J}={accountEntry:{}},loading:H}=(0,r.t)(o.H,{variables:{accountEntryId:T}}),{data:{reconciliations:X}={reconciliations:[]},loading:z}=(0,r.t)(o.D,{variables:{accountEntryId:J.id,skip:!J.id||!["paymentReceipt","creditNote"].includes(J.type)}}),{data:{invoices:Q}={invoices:[]},loading:K}=(0,r.t)(o.k,{variables:{accountEntryId:J.id,skip:!J.id||![...g._,E.f.CUSTOMER_GROUP_INVOICE].includes(J.type)}}),Z=[{flex:1,sortable:!1,headerName:"Number",field:"jobNumber",renderCell:e=>{let{row:n}=e;return n.invoiceType===E.f.CUSTOMER_GROUP_INVOICE?`Multiple / ${n.invoiceNumber}`:g._.includes(n.invoiceType)?`PM ${n.invoiceNumber}`:(0,t.jsx)(j.f,{id:n.jobId,number:n.jobNumber,invoiceNumber:n.invoiceNumber,numberPrefix:k,numberSuffix:U,openCanvas:!0,type:n.jobType})}},{flex:1,sortable:!1,headerName:"Date",field:"date"},{flex:1,sortable:!1,headerName:"Reconciled Amount",field:"reconciledAmount"}],ee=(0,y.useMemo)(()=>X.map(e=>{let t=e.accountEntryInvoice?.invoices?.[0];return[...g._,E.f.CUSTOMER_GROUP_INVOICE].includes(e.type)?{id:e.id,jobNumber:null,invoiceNumber:e.accountEntryInvoice.invoiceNumber,invoiceType:e.accountEntryInvoice.type,date:(0,b.default)(e.createdAt).format("YYYY-MM-DD"),reconciledAmount:(0,R.f)(e.amount),jobType:"ppm",jobId:null}:{id:e.id,jobNumber:t?.job?.number,invoiceNumber:t?.invoiceNumber,invoiceType:t?.invoiceType,date:(0,b.default)(e.createdAt).format("YYYY-MM-DD"),reconciledAmount:(0,R.f)(e.amount),jobType:t?.job?.type,jobId:t?.job?.id}}),[X]),et=[{flex:1,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(j.f,{id:n.id,number:n.number,invoiceNumber:n.invoiceNumber,numberPrefix:k,numberSuffix:U,openCanvas:!0,type:n.jobType,toggleShow:()=>{S&&S()}})}},{flex:1,sortable:!1,headerName:"Status",field:"status",renderCell:e=>{let{row:n}=e;return n.status?(0,t.jsx)(N.f,{value:n.status}):""}}],en=(0,y.useMemo)(()=>Q.map(e=>({id:e?.Job?.id,number:e?.Job?.number,status:e?.Job?.status,invoiceNumber:e?.invoiceNumber,jobType:e?.Job?.type})),[Q]),ei=[E.f.INVOICE,E.f.PROFORMA_INVOICE,E.f.CUSTOMER_PPM_INVOICE,E.f.SUPPLIER_PPM_INVOICE,E.f.CUSTOMER_GROUP_INVOICE].includes(J.type),er=J.xeroSyncError?.message?.split(";")??[];return(0,t.jsxs)(u.f,{spacing:2,children:[(0,t.jsx)(m.f,{sx:{zIndex:1e5},open:H||B||q,children:(0,t.jsx)(p.f,{color:"secondary"})}),(0,t.jsxs)(l.f,{defaultExpanded:!0,children:[(0,t.jsx)(c.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Account Entry Details"}),(0,t.jsx)(s.f,{children:(0,t.jsxs)(u.f,{spacing:1,children:[Y&&(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{variant:"subtitle2",children:"Date"}),(0,t.jsx)(d.f,{children:(0,b.default)(J.createdAt).format("YYYY-MM-DD")})]}),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{variant:"subtitle2",children:"Issue date"}),(0,t.jsx)(d.f,{children:(0,A.p)((0,A.l)(J))})]}),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{variant:"subtitle2",children:"Type"}),(0,t.jsx)(d.f,{children:J.type})]}),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{variant:"subtitle2",children:"Reference"}),(0,t.jsx)(d.f,{children:J.reference||"-"})]}),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{variant:"subtitle2",children:"Comment"}),(0,t.jsx)(d.f,{children:J.comment||"-"})]}),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{variant:"subtitle2",children:"Debit"}),(0,t.jsx)(d.f,{children:(0,R.f)(J.debit)})]}),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{variant:"subtitle2",children:"Credit"}),(0,t.jsx)(d.f,{children:(0,R.f)(J.credit)})]})]})})]}),"authorized"===O&&ei&&er.length>0&&(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(h.f,{variant:"filled",severity:"error",sx:{marginTop:"16px"},children:["Xero Error:",1===er.length?er[0]:(0,t.jsx)(u.f,{children:er.map(e=>(0,t.jsx)(d.f,{children:e.trim()}))})]})}),"authorized"===O&&ei&&J.xeroInvoiceId&&(0,t.jsxs)(u.f,{width:"100%",children:[(0,t.jsx)(v.f,{fullWidth:!0,variant:"contained",color:"danger",sx:{marginTop:"16px"},onClick:(w=J.id,async e=>{try{W(!0),e.stopPropagation(),await M(w),V.refetchQueries({include:["GetAccountEntryDetails","GetAccountEntries"]})}finally{W(!1)}}),children:"Manual Xero webhook sync"}),(0,t.jsx)(h.f,{variant:"filled",severity:"info",sx:{marginTop:"16px"},children:"This will manually trigger a sync with Xero to update the account entry data. Use this if the entry is not reflecting the latest changes from Xero."})]}),["paymentReceipt","creditNote"].includes(J.type)&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.f,{defaultExpanded:!0,children:[(0,t.jsx)(c.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Related Invoices"}),(0,t.jsx)(s.f,{children:(0,t.jsx)(C.s,{loading:z,columns:Z,rows:ee})})]}),L&&"paymentReceipt"===J.type&&(0,t.jsx)(v.f,{fullWidth:!0,variant:"contained",color:"danger",sx:{marginTop:"16px"},onClick:e=>{e.stopPropagation(),F({variables:{id:J.id}})},children:"Delete"}),L&&"paymentReceipt"===J.type&&X.length>0&&(0,t.jsx)(h.f,{variant:"filled",severity:"info",sx:{marginTop:"16px"},children:"Deleting this receipt will potentially remove other reconciled entries."})]}),[...g._,E.f.CUSTOMER_GROUP_INVOICE].includes(J.type)&&(0,t.jsxs)(l.f,{defaultExpanded:!0,children:[(0,t.jsx)(c.f,{expandIcon:(0,t.jsx)(f.default,{}),children:"Related Jobs"}),(0,t.jsx)(s.f,{children:(0,t.jsx)(C.s,{loading:K,columns:et,rows:en})})]})]})}])},975569,e=>{var t=e.i(159080);let n=t.f`
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
`,o=t.f`
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
`;e.s(["p",0,n,"H",0,o,"D",0,i,"k",0,r])},732106,e=>{e.s(["f",()=>eT],732106);var t=e.i(391398),n=e.i(191788),i=e.i(432171),r=e.i(877341),o=e.i(472552),a=e.i(871931),l=e.i(760981),s=e.i(302966),c=e.i(115871),d=e.i(813843),u=e.i(755548),m=e.i(986351),p=e.i(800884),f=e.i(659587),y=e.i(587369),b=e.i(498681),h=e.i(594301),v=e.i(411331),x=e.i(834862),I=e.i(122965),g=e.i(10945),j=e.i(74633),N=e.i(690374),C=e.i(302876),E=e.i(98926),P=e.i(159080);let A=P.f`
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
`;var _=e.i(76381),R=e.i(21557),w=e.i(740790),T=e.i(652148),S=e.i(722394),O=e.i(553875),M=e.i(426778);let $=M.t().shape({dateReceived:M.c().required("Date Received is required").typeError("Date Received is required"),amount:M.H().positive("Amount must be positive").required("Amount is required").typeError("Amount is required").test("more-than-one-payment","Credit notes can only be raised against a single invoice",function(){return!((this.parent.payments||[]).filter(e=>e.amount>0).length>1)}).test("sum-of-payments","The sum of the reconciled amounts does not match the credit note amount",function(e){let t=(this.parent.payments||[]).filter(e=>e.amount>0).reduce((e,t)=>e+t.amount,0);return null==e||e===t}).test("sum-of-outstanding-amounts","Credit amount is greater than the outstanding amount (net)",function(e){return e<=(this.parent.payments||[]).filter(e=>e.amount>0).reduce((e,t)=>e+t.outstandingAmountNet,0)}),reason:M.x().nullable(),payments:M.k().of(M.t().shape({outstandingAmount:M.H().required("Outstanding Amount  is required").typeError("Outstanding Amount  is required"),outstandingAmountNet:M.H().required("Outstanding Amount Net is required").typeError("Outstanding Amount Net is required"),accountEntryId:M.H().required("Account Entry ID is required").typeError("Account Entry ID is required"),amount:M.H().nullable().test("sum-of-outstanding-amounts","Credit amount is greater than the outstanding amount (net)",function(e){let t=this.parent.outstandingAmountNet;return null==e||e<=t})})).required("Payments are required")});var D=e.i(964770),V=e.i(140021),k=e.i(422411),U=e.i(424894),q=e.i(443103),W=e.i(506656),G=e.i(262999),L=e.i(356119),Y=e.i(65295),F=e.i(511667),B=e.i(773831),J=e.i(591394),H=e.i(529422),X=e.i(879436);let z=e=>{let{accountId:r,locationId:o,jobId:a,refetchGraphQLQueries:l,refetchFetchQueries:s,close:c}=e,u=(0,E.f)(),m=(0,R.f)(),p=(0,b.f)(),f=p.admin?.jobSetting?.jobNumberPrefix,y=p.admin?.jobSetting?.jobNumberSuffix,[h,v]=(0,n.useState)([]),{errors:x,control:g,watch:N,setValue:C,handleSubmit:P,getValues:M,trigger:z}=(0,k.G)({resolver:(0,U.yupResolver)($),shouldUnregister:!1,mode:"onChange",reValidateMode:"onChange"}),{append:Q,remove:K}=(0,k.v)({control:g,name:"payments"}),Z=N("amount"),ee=N("payments"),et=(0,n.useMemo)(()=>ee??[],[ee]),{activeAccountId:en,isMultiAccount:ei}=(e=>{let{accountId:t,rowItems:n,payments:i}=e,r=Array.isArray(t)&&t.length>1;return{activeAccountId:(()=>{if(Array.isArray(t)&&1===t.length)return t[0]??null;if(!Array.isArray(t))return t;let e=i.findIndex(e=>null!=e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0);return -1===e?null:n[e]?.accountId??null})(),isMultiAccount:r}})({accountId:r,rowItems:h,payments:et}),er=(0,n.useMemo)(()=>et.filter(e=>Number(e?.amount)>0).length>1,[et]),{reference:eo,pagination:ea,order:el}=(0,I.f)({options:{orderType:"nulls_last"}}),es=(0,n.useMemo)(()=>(e=>{let{accountId:t,locationId:n,jobId:i}=e,r=[];r.push(n?{locationId:{_eq:n}}:{}),r.push(Array.isArray(t)?t.length>0?{accountId:{_in:t}}:{}:t?{accountId:{_eq:t}}:{}),r.push(i?{Invoices:{entityId:{_eq:i}}}:{}),r.push({type:{_in:["proformaInvoice","customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"]},paymentStatus:{_in:["unpaid","partial"]}});let o=r.filter(e=>!q.isEmpty(e));return{...o.length>0&&{_and:o}}})({accountId:r,locationId:o,jobId:a}),[r,a,o]),{data:{meta:ec}={meta:{aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0}}}},loading:ed}=(0,i.t)(A,{variables:{...ea,accountId:r,locationId:o,orderBy:el,where:es},onCompleted:e=>{let t=e?.accountEntries?.map((e,t)=>{let n=e.invoices?.[0];return{index:t,id:e.id,type:e.type,jobId:n?.Job?.id,locationId:e.locationId,jobNumber:n?.Job?.number,jobType:n?.Job?.type,invoiceNumber:e.invoiceNumber,createdAt:(0,Y.f)(e.createdAt),outstandingdays:e.outstandingdays,outstandingAmount:e.outstandingAmount,outstandingAmountNet:e.outstandingAmountNet,amount:0,invoiceId:n?.id,meta:e.meta,accountId:e.accountId}});K(),Q(t.map(e=>({outstandingAmount:e.outstandingAmount,outstandingAmountNet:e.outstandingAmountNet,accountEntryId:e.id,amount:0}))),v(t)}}),[eu,{isLoading:em}]=(0,F.f)("/account-entry/credit-note/create",{queryKey:"account-entry-credit-note-create",method:"POST",refetchQueries:s,onCompleted:()=>{m.show({severity:"success",content:"Credit note was added successfully."}),c(),u.refetchQueries({include:l})},onError:e=>{m.show({severity:"error",content:`Error: ${e.message}`})}}),ep=(0,n.useCallback)(e=>{let t=M("payments")[e]?.outstandingAmountNet??null;C(`payments.${e}.amount`,t),z("amount"),z("payments")},[M,C,z]),ef=(0,n.useMemo)(()=>(e=>{let{numberPrefix:n,numberSuffix:i,control:r,errors:o,isMultiAccount:a,activeAccountId:l,moreThanOnePayment:s,handleAmountChange:c,trigger:u}=e;return[{minWidth:140,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:r}=e;return["customerPpmInvoice","supplierPpmInvoice"].includes(r.type)?`PM ${r.invoiceNumber}`:["customerGroupInvoice"].includes(r.type)?`Multiple / ${r.invoiceNumber}`:r.jobId&&r.jobNumber&&r.jobType?(0,t.jsx)(H.f,{id:r.jobId,number:r.jobNumber,invoiceNumber:r.invoiceNumber,numberPrefix:n,numberSuffix:i,openCanvas:!0,type:r.jobType}):r.invoiceNumber??"N/A"}},{minWidth:120,sortable:!0,headerName:"Date",field:"createdAt"},{flex:1,sortable:!0,headerName:"Days Outstanding",field:"outstandingdays"},{flex:1,minWidth:160,sortable:!0,headerName:"Amount Outstanding (Vat)",field:"outstandingAmount",renderCell:e=>{let{row:t}=e;return(0,X.f)(t.outstandingAmount)}},{flex:1,minWidth:160,sortable:!0,headerName:"Amount Outstanding (Net)",field:"outstandingAmountNet",renderCell:e=>{let{row:t}=e;return(0,X.f)(t.outstandingAmountNet)}},{flex:1,minWidth:250,sortable:!1,headerName:"Reconciled Amount",field:"amount",renderCell:e=>{let{row:n}=e,i=a&&null!==l&&n.accountId!==l;return(0,t.jsxs)(d.f,{direction:"row",sx:i?{opacity:.4}:void 0,children:[(0,t.jsx)(k.e,{control:r,defaultValue:n.id,name:`payments.${n.index}.accountEntryId`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(k.e,{control:r,defaultValue:n.outstandingAmount,name:`payments.${n.index}.outstandingAmount`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(k.e,{control:r,defaultValue:n.outstandingAmountNet,name:`payments.${n.index}.outstandingAmountNet`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(k.e,{control:r,defaultValue:null,name:`payments.${n.index}.amount`,render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(D.f,{disabled:i,leftLabel:(0,t.jsx)(V.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",inputProps:{min:0,step:.01},value:r,onChange:e=>{""===e.target.value?a(null):a(e),u("amount")},fullWidth:!0,error:!!o?.payments?.[n.index]?.amount||r>0&&s})}}),(0,t.jsx)(B.f,{onClick:()=>c(n.index),disabled:i,children:(0,t.jsx)(J.default,{})})]})}}]})({numberPrefix:f,numberSuffix:y,control:g,errors:x,isMultiAccount:ei,activeAccountId:en,moreThanOnePayment:er,handleAmountChange:ep,trigger:z}),[f,y,g,x,ei,en,er,ep,z]),ey=(0,n.useMemo)(()=>{let e=et.findIndex(e=>Number(e?.amount)>0);return -1===e?null:h[e]??null},[et,h]),eb=(0,n.useMemo)(()=>{var e;let t,n;return null===ey?null:(e=ey.meta,t=e?.amountInfo?.total??e?.amounts?.total,n=e?.amountInfo?.vatAmount??e?.amounts?.vatPDF,!Number.isFinite(t)||!Number.isFinite(n)||t<=0||n<0?null:n/t)},[ey]),eh=(0,n.useMemo)(()=>{var e,t;return null===ey||null===eb?null:(e=ey.outstandingAmount,t=ey.outstandingAmountNet,e>0&&t>0?Math.min(e/t,1+eb):null)},[ey,eb]),ev=(0,n.useMemo)(()=>null===eb?null:Number(Z)*eb,[Z,eb]),ex=(0,n.useMemo)(()=>null===eh?null:Number(Z)*eh,[Z,eh]),eI=(0,n.useMemo)(()=>null===ev||null===ex?null:Number(Z)+ev-ex,[Z,ev,ex]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.f,{sx:{zIndex:1e5},open:em,children:(0,t.jsx)(_.f,{color:"secondary"})}),(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:P(e=>{en&&eu({body:((e,t)=>{let n=e.payments.find(e=>e.amount&&e.amount>0);if(!n||!n.amount||!n.accountEntryId)throw Error("Payment is required");return{dateReceived:e.dateReceived,amount:e.amount,reason:e.reason,payment:{amount:n.amount,accountEntryId:n.accountEntryId},accountId:t}})(e,en)})}),children:(0,t.jsxs)(d.f,{width:"100%",children:[(0,t.jsx)(G.f,{color:"info",severity:"info",variant:"filled",sx:{color:"text.primary",mb:2},children:"Credit notes can only be raised against a single invoice. If a credit amount needs to be applied across multiple invoices, you will need to create a credit note for each invoice for the relevant amount."}),(0,t.jsxs)(w.f,{container:!0,columnSpacing:2,rowSpacing:2,children:[(0,t.jsx)(w.f,{item:!0,xs:12,children:(0,t.jsx)(k.e,{control:g,defaultValue:null,name:"dateReceived",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(S.f,{format:"DD/MM/YYYY",value:n,onChange:e=>i(e),label:"Date Created",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0,error:!!x?.dateReceived,helperText:x?.dateReceived?.message}}})}})}),(0,t.jsx)(w.f,{item:!0,xs:12,children:(0,t.jsx)(k.e,{control:g,name:"reason",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(T.f,{multiline:!0,rows:4,label:"Reason",variant:"filled",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!x?.reason,helperText:x?.reason?.message})}})}),(0,t.jsx)(w.f,{item:!0,xs:12,mb:0,mt:2,children:(0,t.jsx)(k.e,{control:g,defaultValue:null,name:"amount",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(D.f,{height:"53px",leftLabel:(0,t.jsx)(V.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",label:"Amount",inputProps:{min:0,step:.01},value:n,onChange:i,fullWidth:!0,error:!!x?.amount})}})}),(0,t.jsx)(w.f,{item:!0,xs:12,children:(0,t.jsxs)(d.f,{alignItems:"flex-end",children:[(0,t.jsxs)(L.f,{children:["Net total: ",(0,X.f)(Z)]}),(0,t.jsxs)(L.f,{children:["VAT total",` (${(0,W.f)((eb??0)*100,2)}%)`,":"," ",(0,X.f)(ev??0)]}),null!==eI&&eI>0&&(0,t.jsxs)(L.f,{children:["less: CIS deduction: ",(0,X.f)(eI)]}),(0,t.jsxs)(L.f,{children:["Gross: ",(0,X.f)(ex??0)]})]})}),x?.amount&&(0,t.jsx)(w.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(G.f,{severity:"error",variant:"filled",children:x?.amount?.message})})]}),(0,t.jsx)(j.s,{...eo,columns:ef,loading:ed,history:!1,totalCount:ec.aggregate.totalCount,rows:h})]})})]})};var Q=e.i(54348),K=e.i(152078),Z=e.i(4142),ee=e.i(122989),et=e.i(824451);let en=(0,M.t)().shape({startDate:(0,M.c)().nullable(),endDate:(0,M.c)().nullable().when("startDate",(e,t)=>{let[n]=e;return n?t.min(n,"End date must be on or after start date"):t}),invoiceNumber:(0,M.x)().nullable(),outstandingLevel:(0,M.x)().nullable(),dateType:(0,M.x)().nullable(),creditNote:(0,M.g)(),paymentReceipt:(0,M.g)(),proformaInvoice:(0,M.g)(),unpaid:(0,M.g)(),partiallyPaid:(0,M.g)(),paid:(0,M.g)(),synced:(0,M.g)()}),ei=[{text:"All work orders",value:null,label:"All work orders"},{text:"All outstanding invoices",value:"0-",label:"All outstanding invoices"},{text:"1 - 30",value:"1-30",label:"1 - 30"},{text:"31 - 60",value:"31-60",label:"31 - 60"},{text:"61 - 90",value:"61-90",label:"61 - 90"},{text:"> 90",value:"90-",label:"> 90"}],er={startDate:null,endDate:null,invoiceNumber:"",outstandingLevel:null,creditNote:!0,paymentReceipt:!0,proformaInvoice:!0,unpaid:!0,partiallyPaid:!0,paid:!0,synced:!1,dateType:"created"},eo=e=>e?new Date(e):null,ea=[{value:"created",label:"Created date"},{value:"issued",label:"Issue date"}],el=e=>{let{visibility:i,filters:r,setFilters:o}=e,a=(0,y.f)("(max-width:800px)"),{control:l,handleSubmit:s,watch:c}=(0,k.G)({resolver:(0,U.yupResolver)(en),defaultValues:{...er,...r,startDate:eo(r.startDate),endDate:eo(r.endDate)}}),m=c("creditNote"),p=c("paymentReceipt"),f=c("proformaInvoice"),b=c("unpaid"),h=c("partiallyPaid"),v=c("paid"),x=c("synced");return(0,n.useEffect)(()=>{o(e=>({...e,creditNote:m,paymentReceipt:p,proformaInvoice:f,unpaid:b,partiallyPaid:h,paid:v,synced:x}))},[m,v,h,p,f,o,x,b]),(0,t.jsx)("form",{onSubmit:s(e=>{o(e)}),children:(0,t.jsxs)(d.f,{width:"100%",spacing:1,children:[(0,t.jsxs)(d.f,{direction:a?"column":"row",alignItems:"center",width:"100%",spacing:2,children:[(0,t.jsx)(k.e,{name:"startDate",control:l,render:e=>(0,t.jsx)(S.f,{...e,label:"Start date",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0}}})}),(0,t.jsx)(k.e,{name:"endDate",control:l,render:e=>(0,t.jsx)(S.f,{...e,label:"End date",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0}}})}),i?.dateType&&(0,t.jsx)(k.e,{name:"dateType",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(et.f,{options:ea,value:ea.find(e=>e.value===n)??ea[0],onChange:(e,t)=>i(t?.value??"created"),disableClearable:!0,label:"Filter dates by",fullWidth:!0,variant:"outlined",color:"secondary"})}}),(0,t.jsx)(k.e,{name:"invoiceNumber",control:l,render:e=>(0,t.jsx)(T.f,{...e,fullWidth:!0,label:"Id / Invoice",variant:"outlined",color:"secondary"})}),(0,t.jsx)(k.e,{name:"outstandingLevel",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(ee.f,{label:"Outstanding Level",value:n,onChange:i,options:ei.map(e=>({value:null===e.value?"":e.value,label:e.label})),fullWidth:!0,variant:"outlined",color:"secondary"})}}),(0,t.jsx)(u.f,{variant:"contained",color:"secondary",type:"submit",size:"medium",sx:{height:"36px",minWidth:"auto",width:"100%",maxWidth:"120px"},children:"Filter"})]}),(0,t.jsxs)(d.f,{direction:"row",width:"100%",justifyContent:"space-between",flexWrap:"wrap",children:[(0,t.jsx)(K.f,{control:(0,t.jsx)(k.e,{name:"creditNote",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"dark"})}}),label:"Credit Note"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(k.e,{name:"paymentReceipt",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"black"})}}),label:"Payment"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(k.e,{name:"proformaInvoice",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"danger"})}}),label:"Proforma Invoice"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(k.e,{name:"unpaid",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"danger"})}}),label:"Unpaid"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(k.e,{name:"partiallyPaid",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"pink"})}}),label:"Partially Paid"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(k.e,{name:"paid",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"success"})}}),label:"Paid"}),(0,t.jsx)(K.f,{control:(0,t.jsx)(k.e,{name:"synced",control:l,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(Z.f,{checked:n,onChange:(e,t)=>i(t),color:"success"})}}),sx:{...!i?.synced&&{display:"none"}},label:"Synced"})]})]})})};var es=e.i(28980),ec=e.i(93198);let ed=e=>{let{showCSVdownload:n,showXeroBulkSync:i,downloadCsv:r,csvDownloading:o,xeroBulkSync:a}=e,l=(0,ec.r)();return(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:2,children:[i&&(0,t.jsx)(u.f,{disableMinWidth:!0,variant:"contained",color:"info",onClick:e=>{e.stopPropagation(),a()},children:"Xero Bulk Sync"}),!l&&n&&(0,t.jsx)(u.f,{disabled:o,disableMinWidth:!0,variant:"contained",color:"success",onClick:e=>{e.stopPropagation(),r()},children:o?(0,t.jsx)(_.f,{size:30,color:"success"}):(0,t.jsx)(es.default,{})})]})};var eu=e.i(624841),em=e.i(277984),ep=e.i(890350),ef=e.i(497844),ey=e.i(529069),eb=e.i(841879),eh=e.i(190871);let ev=async e=>{let t=(0,eb.f)(e,e.invoiceType);if(!t)throw Error("This entry has no PDF to download");await (0,eh.k)(t)};var ex=e.i(362537),eI=e.i(766413);class eg{filters;constructor(e){this.filters=e}getLocation(){let{locationId:e}=this.filters;return e?{_or:[{locationId:{_eq:e}},{PaymentReconciliations:{locationId:{_eq:e}}}]}:null}getAccount(){let{accountId:e}=this.filters;return e?Array.isArray(e)?e.length>0?{accountId:{_in:e}}:null:{accountId:{_eq:e}}:null}getType(){let{creditNote:e,paymentReceipt:t,invoice:n,proformaInvoice:i,customerPpmInvoice:r,supplierPpmInvoice:o,unpaid:a,partiallyPaid:l,paid:s}=this.filters.type,c=[],d=[];return(e&&(c.push("creditNote"),d.push("creditNote")),t&&(c.push("paymentReceipt"),d.push("paymentReceipt")),n&&c.push("invoice","customerGroupInvoice"),i&&c.push("proformaInvoice"),r&&c.push("customerPpmInvoice"),o&&c.push("supplierPpmInvoice"),a&&d.push("unpaid"),l&&d.push("partial"),s&&d.push("paid"),(a||l||s)&&(1!==c.length||"proformaInvoice"!==c[0])&&c.push("customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"),0===c.length)?{type:{_in:[]},paymentStatus:{_in:[]}}:{type:{_in:[...c]},paymentStatus:{_in:[...d]}}}getOutstandingLevel(){let{outstandingLevel:e}=this.filters;return e?{outstandingdays:{_gte:e.split("-")[0]||null,_lte:e.split("-")[1]||null}}:null}getTime(){let{startDate:e,endDate:t,dateField:n}=this.filters;if(!e&&!t)return null;let i={...e&&{_gte:e},...t&&{_lt:(0,ex.default)(t).add(1,"day").startOf("day").toISOString()}};return"issueDate"!==n?{createdAt:i}:{_or:[{invoicedDate:i},{dateReceived:i}]}}getInvoiceNumber(){let{invoiceNumber:e}=this.filters;return e?{_or:[{Invoices:{invoiceNumber:{_ilike:`%${e}%`}}},{Invoices:{Job:{number:{_ilike:`%${e}%`}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{invoiceNumber:{_ilike:`%${e}%`}}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{Job:{number:{_ilike:`%${e}%`}}}}}}]}:null}build(){let e=[this.getLocation(),this.getAccount(),this.getType(),this.getOutstandingLevel(),this.getTime(),this.getInvoiceNumber()].filter(e=>null!==e);return e.length>0?{_and:e}:{}}}var ej=e.i(299796),eN=e.i(252647);let eC=P.f`
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
`,eE=P.f`
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
`;var eP=e.i(684779),eA=e.i(974266);let e_=e=>{let{type:n,accountId:i,locationId:r}=e;return(0,t.jsx)(eT,{title:"Xero",type:n,accountId:i,locationId:r,showXeroBulkSyncColumnHeader:!0,columnVisibility:{balance:!1},defaultFilters:{creditNote:!1,paymentReceipt:!1,invoice:!0,proformaInvoice:!0,customerPpmInvoice:!0,supplierPpmInvoice:!0,unpaid:!0,partiallyPaid:!0,paid:!0},filterVisibility:{synced:!0},tableContainerHeight:"calc(100vh - 210px)",tableContainerMaxHeight:"calc(100vh - 210px)"})};var eR=e.i(948574);let ew={aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0},balance:{balance:0}}},eT=e=>{let E,{title:P="Account Entries",type:A,accountId:_,locationId:w=null,showTotalChips:T,showAddButtons:S,showCSVdownload:O,showXeroBulkSync:M,showXeroBulkSyncColumnHeader:$,showFilters:D,defaultFilters:V,filterVisibility:k,columnVisibility:U,tableContainerHeight:q,tableContainerMaxHeight:W,tableHistory:G}=e,L=(0,b.f)(),F=(0,R.f)(),{hasRole:B}=(0,h.f)(),J=B([...eR.d]),K=(0,v.f)(),{sendEntitiesToXero:Z}=(0,x.f)(),ee=(0,y.f)("(max-width:600px)"),[et,en]=(0,n.useState)(!1),[ei,er]=(0,n.useState)([]),eo=Array.isArray(_)?[..._].sort().join("_"):_,ea=["filter-form-xero-account-entries",A,null!=w?`loc-${w}`:"",null!=eo?String(eo):""].filter(Boolean).join("-"),[es,ec]=(0,g.f)({key:ea,initialValue:{},storageType:D?"sessionStorage":"state"}),eb=L.admin?.jobSetting?.jobNumberPrefix,eh=L.admin?.jobSetting?.jobNumberSuffix,{reference:eT,pagination:eS,order:eO}=(0,I.f)(),eM=!!U?.balance,e$=(0,n.useMemo)(()=>J?U:{...U,date:!1},[U,J]),{getActions:eD}=(E=(0,R.f)(),{getActions:(0,n.useCallback)(e=>[{icon:"download",onClick:async t=>{t.preventDefault(),t.stopPropagation();try{await ev(e)}catch(e){E.show({content:`Error: ${e instanceof Error?e.message:"Error downloading invoice"}`,severity:"error"})}},tooltip:"Download",disabled:e.type===em.f.PAYMENT_RECEIPT}],[E])}),eV=(0,n.useMemo)(()=>new eg({accountId:_,locationId:w,startDate:es?.startDate,endDate:es?.endDate,dateField:J&&es?.dateType!=="issued"?"createdAt":"issueDate",invoiceNumber:es?.invoiceNumber,outstandingLevel:es?.outstandingLevel,type:{creditNote:V?.creditNote??es?.creditNote,paymentReceipt:V?.paymentReceipt??es?.paymentReceipt,invoice:V?.invoice,proformaInvoice:V?.proformaInvoice??es?.proformaInvoice,customerPpmInvoice:V?.customerPpmInvoice,supplierPpmInvoice:V?.supplierPpmInvoice,unpaid:V?.unpaid??es?.unpaid,partiallyPaid:V?.partiallyPaid??es?.partiallyPaid,paid:V?.paid??es?.paid}}).build(),[_,w,es?.startDate,es?.endDate,es?.dateType,J,es?.invoiceNumber,es?.outstandingLevel,es?.creditNote,es?.paymentReceipt,es?.proformaInvoice,es?.unpaid,es?.partiallyPaid,es?.paid,V?.creditNote,V?.paymentReceipt,V?.invoice,V?.proformaInvoice,V?.customerPpmInvoice,V?.supplierPpmInvoice,V?.unpaid,V?.partiallyPaid,V?.paid]),{data:{accountEntries:ek=[],meta:eU=ew}={},loading:eq,refetch:eW}=(0,i.t)(eC,{variables:{...eS,accountId:_,locationId:w,orderBy:eO,where:eV,showTotalChips:T,showBalance:eM,xeroSync:!!es.synced}}),[eG,{loading:eL}]=(0,r.f)(eE,{variables:{limit:null,offset:0,accountId:_,locationId:w,orderBy:eO,where:eV},onCompleted:e=>{let t=((e,t)=>{let{numberPrefix:n="",numberSuffix:i="",seesCreatedDate:r}=t;return e.map(e=>{let t=e?.reconciliations?.aggregate?.sum?.amount||null,o=e.invoices?.[0],a=null;return e.type===em.f.CUSTOMER_GROUP_INVOICE?a=`Multiple / ${e.invoiceNumber??""}`:o?.job?.type&&["invoice","proformaInvoice"].includes(e.type)?a=`${(0,ej.f)(o?.job?.type)} ${n} ${o?.job?.number} ${i} / ${o?.invoiceNumber}`:o?.invoiceType&&eN._.includes(o?.invoiceType)&&(a=`PM / ${o?.invoiceNumber||""}`),{itemType:String(e.type).toLocaleUpperCase(),invoice:a,reference:"paymentReference"in e.meta?e.meta.paymentReference:"reference"in e.meta?e.meta.reference:o?.job?.reference,...r&&{date:(0,Y.f)(e.createdAt)},issueDate:(0,Y.f)((0,eI.l)(e)),daysOutstanding:e?.outstandingdays,status:o?.job?.status,service:o?.job?.service?.name,address:o?.job?.location?.name,sublocation:o?.job?.sublocation?.name,debit:e.debit,credit:e.credit,balance:e.balance,reconciledAmount:t??0,amountOutstanding:e.outstandingAmount,paymentStatus:e.paymentStatus,comment:"comment"in e.meta?e.meta.comment:""}})})(e.accountEntries,{numberPrefix:eb,numberSuffix:eh,seesCreatedDate:J}),n="data:application/octet-stream,"+encodeURIComponent(o.default.unparse(t,{escapeFormulae:/^[=+@\t\r]/}));(0,N.f)(n,"account-entries.csv")}}),eY=eU.aggregate.debitTotal?.debit??0,eF=eU.aggregate.creditTotal?.credit??0,eB=eY-eF,eJ=(0,n.useMemo)(()=>ek.map(e=>{let t="creditNote"!==e.type&&"paymentReceipt"!==e.type?e.outstandingdays:"-",n=e.invoices?.[0],i=e.paymentReconciliations?.[0]?.accountEntry,r=i?.invoices?.[0]?.job,o=e.type===em.f.CUSTOMER_GROUP_INVOICE,a=e.type===em.f.CREDIT_NOTE&&i?.type===em.f.CUSTOMER_GROUP_INVOICE,l=(e.paymentReconciliations??[]).filter(e=>"CreditNote"===e.creditEntity),s=(e.paymentReconciliations??[]).filter(e=>"PaymentReceipt"===e.creditEntity),c=l.map(e=>e.meta&&"xeroCreditNoteId"in e.meta?e.meta?.xeroCreditNoteId:null).filter(e=>!!e),d=s.map(e=>e.meta&&"xeroPaymentId"in e.meta?e.meta?.xeroPaymentId:null).filter(e=>!!e);return{id:e.id,type:e.type,account:e.account,jobId:n?.job?.id,jobNumber:n?.job?.number,jobType:n?.job?.type,isGrouped:o,invoiceNumber:e.invoiceNumber,invoiceType:n?.invoiceType,reference:"reference"in e.meta?e.meta.reference:"",comment:"comment"in e.meta?e.meta.comment:"",date:(0,ex.default)(e.createdAt).format("YYYY-MM-DD"),issueDate:(0,eI.p)((0,eI.l)(e)),outstandingDays:t??"-",outstandingAmount:e.outstandingAmount,status:n?.job?.status,debit:e.debit,credit:e.credit,balance:e.balance,paymentStatus:e.paymentStatus,meta:e.meta,creditNodeJob:r,creditsGroupedInvoice:a,syncedWithXero:"syncedWithXero"in e.meta?e.meta.syncedWithXero:null,xeroInvoiceId:"xeroInvoiceId"in e.meta?e.meta.xeroInvoiceId:null,xeroCreditNoteIds:c,xeroPaymentIds:d,actions:""}}),[ek]),eH=(0,n.useMemo)(()=>{let e=eJ.filter(e=>[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(e.type)&&e.xeroInvoiceId);return ei.length+e.length===eJ.length},[ei.length,eJ]),eX=(0,n.useCallback)(async()=>{try{if(!ei.length)return void F.show({content:"All visible items are synced. Check your filters or other pages.",severity:"success"});en(!0),await Z({entities:ei}),er([]),eW()}finally{en(!1)}},[eW,ei,Z,F]),ez=(0,n.useCallback)(async e=>{try{en(!0),await Z(e),eW()}finally{en(!1)}},[eW,Z]),eQ=(0,n.useCallback)((e,t)=>{t?er(t=>[...t,e]):er(t=>[...t].filter(t=>t!==e))},[er]),eK=(0,n.useCallback)(e=>{e?er(eJ.filter(e=>[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(e.type)&&!e.xeroInvoiceId).map(e=>e.id)):er([])},[er,eJ]),eZ=(0,n.useMemo)(()=>(e=>{let{numberPrefix:n,numberSuffix:i,showXeroBulkSyncColumnHeader:r,getActions:o,xeroSyncedAllItems:a,sendEntitiesToXero:l,checkedIds:s,handleSetCheckedIds:c,handleSetCheckedIdsAll:d}=e;return[{sortable:!1,flex:1,minWidth:100,headerName:"Xero Sync",field:"xeroSync",...r&&{renderHeader:()=>(0,t.jsx)(ey.f,{checked:a,onClick:e=>{e.stopPropagation()},onChange:async(e,t)=>{e.stopPropagation(),d(t)},color:"success"})},renderCell:e=>{let{row:n}=e;return[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(n.type)&&(0,t.jsx)(ey.f,{disabled:!!n.xeroInvoiceId,checked:!!n.xeroInvoiceId||s.includes(n.id),onClick:e=>{e.stopPropagation()},onChange:async(e,t)=>{(e.stopPropagation(),!r&&t)?await l({entities:[n.id]}):c(n.id,t)},color:"success"})}},{sortable:!1,flex:1,minWidth:180,headerName:"Type",field:"type",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(p.f,{label:n.type,color:(e=>{let{type:t,paymentStatus:n}=e;return"paymentReceipt"===t?"black":"creditNote"===t?"dark":"paid"===n?"success":"partial"===n?"pink":"warning"})({type:n.type,paymentStatus:n.paymentStatus}),size:"small",sx:{borderRadius:1}})}},{sortable:!1,flex:1,minWidth:180,headerName:"Account",field:"accountName",renderCell:e=>{let{row:t}=e;return t.account.name}},{sortable:!1,flex:1,minWidth:180,headerName:"Account Type",field:"accountType",renderCell:e=>{let{row:t}=e;return t.account.type===ep.d.SUPPLIER?"supplier":"customer"}},{sortable:!1,flex:1,minWidth:180,headerName:"Number",field:"number",renderCell:e=>{let{row:r}=e;return r.type===em.f.CREDIT_NOTE&&r.creditsGroupedInvoice?`Multiple / ${r.id}`:r.type===em.f.CREDIT_NOTE&&r.creditNodeJob?(0,t.jsx)(H.f,{id:r.creditNodeJob?.id,number:r.creditNodeJob?.number,invoiceNumber:r?.id,numberPrefix:n,numberSuffix:i,openCanvas:!!r.creditNodeJob?.id,type:r.creditNodeJob?.type}):em.f.CUSTOMER_PPM_INVOICE===r.type||em.f.SUPPLIER_PPM_INVOICE===r.type?`PM ${r?.invoiceNumber}`:r.isGrouped?`Multiple / ${r.invoiceNumber}`:r.jobId&&r.jobNumber&&r?.invoiceNumber&&r.jobType?(0,t.jsx)(H.f,{id:r.jobId,number:r.jobNumber,invoiceNumber:r?.invoiceNumber,numberPrefix:n,numberSuffix:i,openCanvas:!!r.jobId,type:r.jobType}):"-"}},{sortable:!1,flex:1,minWidth:180,headerName:"Reference",field:"reference"},{sortable:!1,flex:1,minWidth:180,headerName:"Date",field:"date"},{sortable:!1,flex:1,minWidth:180,headerName:"Issue date",field:"issueDate"},{sortable:!1,flex:1,minWidth:120,headerName:"Days Outstanding",field:"outstandingDays"},{sortable:!1,flex:1,minWidth:120,headerName:"Amount Outstanding",field:"outstandingAmount",renderCell:e=>{let{row:t}=e;return t.type===em.f.CREDIT_NOTE||t.type===em.f.PAYMENT_RECEIPT?"-":(0,X.f)(t.outstandingAmount)}},{sortable:!1,flex:1,minWidth:140,headerName:"Status",field:"status",renderCell:e=>{let{row:n}=e;return n.status?(0,t.jsx)(eu.f,{value:n.status}):""}},{sortable:!1,flex:1,minWidth:120,headerName:"Debit",field:"debit",renderCell:e=>{let{row:t}=e;return t.debit?(0,X.f)(t.debit):"-"}},{sortable:!1,flex:1,minWidth:120,headerName:"Credit",field:"credit",renderCell:e=>{let{row:t}=e;return t.credit?(0,X.f)(t.credit):"-"}},{sortable:!1,flex:1,minWidth:120,headerName:"Balance",field:"balance",renderCell:e=>{let{row:t}=e;return(0,X.f)(t.balance)}},{sortable:!1,flex:1,minWidth:120,headerName:"Xero status",field:"xeroStatus",renderCell:e=>{let{row:t}=e;return em.f.CREDIT_NOTE===t.type||em.f.PAYMENT_RECEIPT===t.type?"-":t.syncedWithXero?"Synced":"Not synced"}},{sortable:!1,flex:1,minWidth:210,headerName:"Xero reference",field:"xeroReference",renderCell:e=>{let{row:t}=e;return[em.f.INVOICE,em.f.PROFORMA_INVOICE,em.f.CUSTOMER_PPM_INVOICE,em.f.SUPPLIER_PPM_INVOICE,em.f.CUSTOMER_GROUP_INVOICE].includes(t.type)?t.xeroInvoiceId:em.f.CREDIT_NOTE===t.type?t.xeroCreditNoteIds.join(", "):em.f.PAYMENT_RECEIPT===t.type?t.xeroPaymentIds.join(", "):"-"}},{sortable:!1,minWidth:120,headerName:"Actions",field:"actions",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(ef.f,{actions:o(n)})}}]})({numberPrefix:eb??"",numberSuffix:eh??"",getActions:eD,showXeroBulkSyncColumnHeader:$,xeroSyncedAllItems:eH,sendEntitiesToXero:ez,checkedIds:ei,handleSetCheckedIds:eQ,handleSetCheckedIdsAll:eK}),[ei,eD,ez,eQ,eK,eb,eh,$,eH]),e0=(0,n.useCallback)(()=>{_&&K.show({content:(0,t.jsx)(Q.f,{accountId:_,locationId:w,refetchGraphQLQueries:["GetAccountEntries"],close:K.close}),title:"Add Payment Received",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"80vw",md2:"80vw",lg:"80vw",lg2:"80vw"})},[_,w,K]),e1=(0,n.useCallback)(()=>{_&&K.show({content:(0,t.jsx)(z,{accountId:_,locationId:w,refetchGraphQLQueries:["GetAccountEntries"],close:K.close}),title:"Add credit note",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"80vw",md2:"80vw",lg:"80vw",lg2:"80vw"})},[_,w,K]),e2=(0,n.useCallback)(()=>{K.show({content:(0,t.jsx)(e_,{type:A,accountId:_,locationId:w}),title:"Xero Bulk Sync",xs3:"100vw",sm:"90vw",sm2:"80vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},[_,A,w,K]),e4=(0,n.useCallback)(e=>{let{row:n}=e;K.show({content:(0,t.jsx)(C.f,{accountEntryId:n.id,close:K.close}),title:"Account Entry Details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},[K]);return(0,t.jsxs)(t.Fragment,{children:[$&&(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:e=>{e.preventDefault(),eX()}}),(0,t.jsx)(eP.f,{sx:{zIndex:1e5},open:et,children:(0,t.jsx)(eA.f,{color:"secondary"})}),(0,t.jsxs)(a.f,{defaultExpanded:!0,children:[(0,t.jsx)(s.f,{expandIcon:(0,t.jsx)(f.default,{}),children:(0,t.jsxs)(d.f,{direction:"row",justifyContent:"space-between",width:"100%",pr:2,children:[(0,t.jsx)(c.f,{variant:"h6",children:P}),(0,t.jsx)(ed,{showCSVdownload:O,showXeroBulkSync:M,downloadCsv:eG,csvDownloading:eL,xeroBulkSync:e2})]})}),(0,t.jsxs)(l.f,{children:[D&&(0,t.jsx)(el,{visibility:k,filters:es,setFilters:ec},ea),(0,t.jsx)(j.s,{...eT,stateKey:`xero-account-entries-${A??"all"}${D?"":"-embedded"}`,history:G,autoHeight:!1,columns:eZ,rows:eJ,totalCount:eU?.aggregate?.totalCount??0,loading:eq,onRowClick:e4,columnVisibilityModel:e$,containerHeight:q,containerMaxHeight:W}),(T||S)&&(0,t.jsxs)(d.f,{width:"100%",mt:2,spacing:2,children:[T&&(0,t.jsxs)(d.f,{direction:ee?"column":"row",width:"100%",justifyContent:"flex-end",spacing:1,children:[(0,t.jsx)(p.f,{label:`Total Debit: ${(0,X.f)(eY)}`,color:"info"}),(0,t.jsx)(p.f,{label:`Total Credit: ${(0,X.f)(eF)}`,color:"info"}),(0,t.jsx)(p.f,{label:`Balance: ${(0,X.f)(eB)}`,color:eB<0?"warning":"success"})]}),(0,t.jsx)(m.f,{}),S&&(0,t.jsxs)(d.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"secondary",onClick:e0,children:"Add Payment Received"}),"customer"===A&&(0,t.jsx)(u.f,{variant:"contained",color:"secondary",onClick:e1,children:"Add Credit note"})]})]})]})]})]})}},54348,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(98926),r=e.i(432171),o=e.i(159080);let a=o.f`
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
`;var l=e.i(76381),s=e.i(498681),c=e.i(21557),d=e.i(813843),u=e.i(740790),m=e.i(652148),p=e.i(722394),f=e.i(553875),y=e.i(506656),b=e.i(426778);let h=b.t().shape({dateReceived:b.c().required("Date Received is required").typeError("Date Received is required"),amount:b.H().positive("Amount Received must be positive").required("Amount Received is required").typeError("Amount Received is required").test("sum-of-payments","The sum of the reconciled amounts does not match the amount received",function(e){let t=(this.parent.payments||[]).filter(e=>null!=e.amount&&!Number.isNaN(e.amount)&&+e.amount>0).reduce((e,t)=>(0,y.f)(e+ +t.amount,2),0);return null==e||e===t}).test("sum-of-outstanding-amounts","The sum of the outstanding amounts does not match the amount received",function(e){return e<=(this.parent.payments||[]).filter(e=>null!=e.amount&&!Number.isNaN(e.amount)&&+e.amount>0).reduce((e,t)=>(0,y.f)(e+t.outstandingAmount,2),0)}),paymentReference:b.x().required("Payment Reference is required").typeError("Payment Reference is required"),comment:b.x().nullable(),payments:b.k().of(b.t().shape({outstandingAmount:b.H().required("Outstanding Amount is required").typeError("Outstanding Amount is required"),accountEntryId:b.H().required("Account Entry ID is required").typeError("Account Entry ID is required"),amount:b.D().nullable().test("sum-of-outstanding-amounts","The sum of the outstanding amounts does not match the amount received",function(e){let t=this.parent.outstandingAmount;return null==e||""===e||Number(e)<=t})})).required("Payments are required")});var v=e.i(964770),x=e.i(140021),I=e.i(422411),g=e.i(424894),j=e.i(443103),N=e.i(122965),C=e.i(74633),E=e.i(262999),P=e.i(16135),A=e.i(345837),_=e.i(529069),R=e.i(65295),w=e.i(511667),T=e.i(362537),S=e.i(773831),O=e.i(591394),M=e.i(529422),$=e.i(879436);e.s(["f",0,e=>{let{accountId:o,locationId:b,jobId:D,refetchGraphQLQueries:V,refetchFetchQueries:k,refetch:U,close:q}=e,W=(0,i.f)(),G=(0,c.f)(),L=(0,s.f)(),Y=L.admin?.jobSetting?.jobNumberPrefix,F=L.admin?.jobSetting?.jobNumberSuffix,[B,J]=(0,n.useState)([]),{errors:H,control:X,watch:z,setValue:Q,handleSubmit:K,trigger:Z,getValues:ee}=(0,I.G)({resolver:(0,g.yupResolver)(h),shouldUnregister:!1,mode:"onChange",reValidateMode:"onChange"});(0,I.v)({control:X,name:"payments"});let et=z("amount"),en=z("payments"),{activeAccountId:ei,isMultiAccount:er}=(e=>{let{accountId:t,rowItems:n,payments:i}=e,r=Array.isArray(t)&&t.length>1;return{activeAccountId:(()=>{if(Array.isArray(t)&&1===t.length)return t[0]??null;if(!Array.isArray(t))return t;let e=i.findIndex(e=>null!=e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0);return -1===e?null:n[e]?.accountId??null})(),isMultiAccount:r}})({accountId:o,rowItems:B,payments:en}),{autoReconcile:eo,setAutoReconcile:ea,handleAmountReceivedChange:el,handleAutoReconcileChange:es}=(e=>{let{setValue:t,trigger:i,getValues:r,rowItems:o,isMultiAccount:a,activeAccountId:l}=e,[s,c]=(0,n.useState)(!1),d=(0,n.useCallback)(e=>{let n=r("payments")??[];if(!e)return void n.forEach((e,n)=>{t(`payments.${n}.amount`,"")});let s=e,c=l??o[0]?.accountId??null;n.forEach((e,n)=>{a&&null!==c&&o[n]?.accountId!==c?t(`payments.${n}.amount`,""):(s>e.outstandingAmount?t(`payments.${n}.amount`,e.outstandingAmount):s>0?t(`payments.${n}.amount`,s):t(`payments.${n}.amount`,""),s=(0,y.f)(s-e.outstandingAmount,2))}),i("amount"),i("payments")},[r,t,i,a,l,o]),u=(0,n.useCallback)(e=>{s&&d(Number.isNaN(Number(e.target.value))?null:Number(e.target.value))},[s,d]);return{autoReconcile:s,setAutoReconcile:c,handleAmountReceivedChange:u,handleAutoReconcileChange:(0,n.useCallback)(e=>{if(!e)return;let t=r("amount");d(Number.isNaN(Number(t))?null:Number(t))},[r,d])}})({setValue:Q,trigger:Z,getValues:ee,rowItems:B,isMultiAccount:er,activeAccountId:ei}),{reference:ec,pagination:ed,order:eu}=(0,N.f)({options:{orderType:"nulls_last"}}),em=(0,n.useMemo)(()=>(e=>{let{accountId:t,locationId:n,jobId:i}=e,r=[];r.push(n?{locationId:{_eq:n}}:{}),r.push(t&&Array.isArray(t)?{accountId:{_in:t}}:t?{accountId:{_eq:t}}:{}),r.push(i?{Invoices:{entityId:{_eq:i}}}:{}),r.push({type:{_in:["proformaInvoice","customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"]},paymentStatus:{_in:["unpaid","partial"]}});let o=r.filter(e=>!j.isEmpty(e));return{...o.length>0&&{_and:o}}})({accountId:o,locationId:b,jobId:D}),[o,D,b]),{data:{meta:ep}={meta:{aggregate:{totalCount:0,debitTotal:{debit:0},creditTotal:{credit:0}}}},loading:ef}=(0,r.t)(a,{variables:{...ed,accountId:o,locationId:b,orderBy:eu,where:em},onCompleted:e=>{let t=e?.accountEntries?.map((e,t)=>{let n=e.invoices?.[0];return{index:t,id:e.id,type:e.type,jobId:n?.Job?.id,locationId:e.locationId,jobNumber:n?.Job?.number,jobType:n?.Job?.type,invoiceNumber:e.invoiceNumber,createdAt:(0,R.f)(e.createdAt),outstandingdays:e.outstandingdays,outstandingAmount:e.outstandingAmount,amount:0,invoiceId:n?.id,meta:e.meta,accountId:e.accountId}});Q("payments",t.map(e=>({outstandingAmount:e.outstandingAmount,accountEntryId:e.id,amount:0}))),J(t)}}),[ey,{isLoading:eb}]=(0,w.f)("/account-entry/payment-received/create",{queryKey:"account-entry-payment-received-create",method:"POST",refetchQueries:k,onCompleted:()=>{G.show({severity:"success",content:"Payment received was added successfully."}),q(),W.refetchQueries({include:V}),U?.()},onError:e=>{G.show({severity:"error",content:`Error: ${e.message}`})}}),eh=(0,n.useCallback)(e=>{let t=ee("payments");Q(`payments.${e}.amount`,t[e]?.outstandingAmount??null),Z("amount")},[Q,ee,Z]),ev=(0,n.useMemo)(()=>(e=>{let{numberPrefix:n,numberSuffix:i,control:r,errors:o,handleAmountChange:a,trigger:l,isMultiAccount:s,activeAccountId:c}=e;return[{minWidth:140,sortable:!1,headerName:"Number",field:"number",renderCell:e=>{let{row:r}=e;return["customerPpmInvoice","supplierPpmInvoice"].includes(r.type)?`PM ${r.invoiceNumber}`:["customerGroupInvoice"].includes(r.type)?`Multiple / ${r.invoiceNumber}`:r.jobId&&r.jobNumber&&r.jobType?(0,t.jsx)(M.f,{id:r.jobId,number:r.jobNumber,invoiceNumber:r.invoiceNumber,numberPrefix:n,numberSuffix:i,openCanvas:!0,type:r.jobType}):r.invoiceNumber??"N/A"}},{minWidth:120,sortable:!0,headerName:"Date",field:"createdAt"},{flex:1,sortable:!0,headerName:"Days Outstanding",field:"outstandingdays"},{flex:1,minWidth:160,sortable:!0,headerName:"Amount Outstanding",field:"outstandingAmount",renderCell:e=>{let{row:t}=e;return(0,$.f)(t.outstandingAmount)}},{flex:1,minWidth:250,sortable:!1,headerName:"Reconciled Amount",field:"amount",renderCell:e=>{let{row:n}=e,i=s&&null!==c&&n.accountId!==c;return(0,t.jsxs)(d.f,{direction:"row",sx:i?{opacity:.4}:void 0,children:[(0,t.jsx)(I.e,{control:r,defaultValue:n.id,name:`payments.${n.index}.accountEntryId`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(I.e,{control:r,defaultValue:n.outstandingAmount,name:`payments.${n.index}.outstandingAmount`,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:i})}}),(0,t.jsx)(I.e,{control:r,defaultValue:null,name:`payments.${n.index}.amount`,render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(v.f,{leftLabel:(0,t.jsx)(x.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",inputProps:{min:0,step:.01},value:r,disabled:i,onChange:e=>{""===e.target.value?a(null):a(e),l("amount")},fullWidth:!0,error:!!o?.payments?.[n.index]?.amount})}}),(0,t.jsx)(S.f,{onClick:()=>a(n.index),disabled:i,children:(0,t.jsx)(O.default,{})})]})}}]})({numberPrefix:Y,numberSuffix:F,control:X,errors:H,handleAmountChange:eh,trigger:Z,isMultiAccount:er,activeAccountId:ei}),[Y,F,X,H,eh,Z,er,ei]),ex=(0,n.useMemo)(()=>en.reduce((e,t)=>e+(Number.isNaN(t?.amount)?0:Number(t?.amount)),0),[en]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.f,{sx:{zIndex:1e5},open:eb,children:(0,t.jsx)(l.f,{color:"secondary"})}),(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:K(e=>{ei&&ey({body:{dateReceived:e.dateReceived,amount:e.amount,paymentReference:e.paymentReference,comment:e.comment,payments:e.payments.filter(e=>e.amount&&!Number.isNaN(Number(e.amount))&&Number(e.amount)>0).map(e=>({amount:Number(e.amount),accountEntryId:e.accountEntryId})),accountId:ei}})}),children:(0,t.jsxs)(d.f,{width:"100%",children:[(0,t.jsxs)(u.f,{container:!0,columnSpacing:2,rowSpacing:2,children:[(0,t.jsx)(u.f,{item:!0,xs:6,children:(0,t.jsx)(I.e,{control:X,defaultValue:(0,T.default)(),name:"dateReceived",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(p.f,{format:"DD/MM/YYYY",value:n,onChange:e=>i(e),label:"Date Received",slotProps:{textField:{variant:"outlined",color:"secondary",fullWidth:!0,error:!!H?.dateReceived,helperText:H?.dateReceived?.message}}})}})}),(0,t.jsx)(u.f,{item:!0,xs:6,children:(0,t.jsx)(I.e,{control:X,name:"paymentReference",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{label:"Payment Reference",variant:"outlined",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!H?.paymentReference,helperText:H?.paymentReference?.message})}})}),(0,t.jsx)(u.f,{item:!0,xs:6,mt:1,children:(0,t.jsx)(I.e,{control:X,defaultValue:null,name:"amount",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(v.f,{height:"53px",leftLabel:(0,t.jsx)(x.default,{sx:{height:"18px"}}),type:"number",label:"Amount Received",inputProps:{min:0,step:.01},value:n,onChange:e=>{""===e.target.value?i(null):i(e),el(e)},fullWidth:!0,error:!!H?.amount})}})}),(0,t.jsx)(u.f,{item:!0,xs:6,mt:1,children:(0,t.jsx)(I.e,{control:X,name:"comment",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(m.f,{multiline:!0,rows:4,label:"Comment",variant:"filled",color:"secondary",value:n,onChange:i,sx:{width:"100%"},error:!!H?.comment,helperText:H?.comment?.message})}})}),(0,t.jsx)(u.f,{item:!0,xs:6,children:(0,t.jsx)(d.f,{alignItems:"flex-start",children:(0,t.jsx)(A.f,{control:(0,t.jsx)(_.f,{color:"success",checked:eo,onChange:(e,t)=>{ea(t),es(t)}}),label:"Auto Reconcile"})})}),H?.amount&&(0,t.jsx)(u.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(E.f,{severity:"error",variant:"filled",children:H?.amount?.message})}),er&&null!==ei&&(0,t.jsx)(u.f,{item:!0,xs:12,mb:2,children:(0,t.jsx)(E.f,{variant:"filled",severity:"info",children:"A payment may only be reconciled against invoices belonging to a single customer. Invoices associated with other customers have been disabled and cannot be selected."})})]}),(0,t.jsx)(C.s,{...ec,columns:ev,loading:ef,history:!1,totalCount:ep.aggregate.totalCount,rows:B}),(0,t.jsx)(d.f,{width:"100%",direction:"row",justifyContent:"flex-end",children:(0,t.jsx)(P.f,{label:`Sum: ${(0,$.f)((0,y.f)(ex,2))}`,color:(0,y.f)(ex,2)===(0,y.f)(et,2)?"success":"danger"})})]})})]})}],54348)},591394,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1m5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2m-2 0H9V4h9z"}),"ContentCopyRounded")},16135,e=>{var t=e.i(800884);e.s(["f",()=>t.f])}])})();