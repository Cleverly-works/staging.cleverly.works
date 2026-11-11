(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[864883,e=>{var t=e.i(890350);let r=[{value:t.T.VERIFIED,label:"Verified",color:"success"},{value:t.T.UNVERIFIED,label:"Unverified",color:"danger"}];e.s(["f",0,r])},690374,e=>{let t=(e,t)=>{let r=document.createElement("a");"string"==typeof r.download?(document.body.appendChild(r),r.download=t,r.href=e,r.click(),document.body.removeChild(r)):location.replace(e)};e.s(["h",0,(e,r)=>{let n=URL.createObjectURL(e);try{t(n,r)}finally{window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}},"f",0,t])},162854,e=>{var t=e.i(391398),r=e.i(432171),n=e.i(159080);let i=n.f`
  query GetFinance($accountId: Int!) {
    financial: Account_by_pk(id: $accountId) {
      name
      website
      reverseCharge
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
      bankAccounts: BankAccounts {
        id
        stripeId
        bank
        accountNumber
        routingNumber
        bic
        iban
        status
        default
        createdAt
        meta
      }
    }
  }
`;n.f`
  mutation AddPaymentReceipt($data: jsonb!) {
    addPaymentReceived(data: $data) {
      success
      data
    }
  }
`,n.f`
  mutation UpdateAccountEntry($id: Int!, $changes: AccountEntry_set_input!) {
    update_AccountEntry_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      meta
      outstandingAmount
      balance
    }
  }
`,n.f`
  query GetAccoutEntrySumByAccounntInJob($jobId: Int!, $accountId: Int!) {
    accountEntryAggregate: AccountEntry_aggregate(
      where: { Invoices: { Job: { id: { _eq: $jobId } } }, accountId: { _eq: $accountId } }
    ) {
      aggregate {
        sum {
          outstandingAmount
        }
      }
    }
  }
`,n.f`
  query GetJobMeta($id: Int!) {
    job: Job(where: { id: { _eq: $id } }) {
      id
      meta
    }
  }
`,n.f`
  mutation UpdateJob($changes: Job_set_input, $ids: [Int]) {
    update_Job(where: { id: { _in: $ids } }, _set: $changes) {
      affected_rows
    }
  }
`,n.f`
  mutation UpdateJob(
    $id: Int!
    $changes: Job_set_input
    $timing: [JobTiming_insert_input!]!
    $insertTiming: Boolean!
  ) {
    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    insert_JobTiming(objects: $timing) @include(if: $insertTiming) {
      returning {
        id
        status
        createdAt
      }
    }
  }
`,n.f`
  query GetCalendarJobs($customerId: Int!) {
    jobs: Job(
      order_by: { timingStart: asc }
      where: {
        customerId: { _eq: $customerId }
        jobScheduleId: { _is_null: false }
        status: { _neq: "canceled" }
      }
    ) {
      id
      number
      title
      description
      quoted
      reference
      timingStart
      timingEnd
      createdAt
      status
      jobScheduleId
      supplierNotes
      amount
      supplierLabourAmount
      rag
      type
      timings: JobTimings {
        id
        status
        createdAt
      }
      supplier: Supplier {
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
    }
  }
`;var a=e.i(594301),s=e.i(411331),o=e.i(776204),l=e.i(98926),c=e.i(422411),d=e.i(424894),u=e.i(426778),f=e.i(239189);let h=(0,u.t)().shape({rateType:(0,u.x)().oneOf(f.N).nullable(),serviceRateType:(0,u.x)().oneOf(f.e).when("rateType",{is:"serviceRate",then:e=>e.required("This field is required!"),otherwise:e=>e.nullable()}),serviceRateLabour:(0,u.H)().min(0).nullable().typeError("This field is required!").when("rateType",{is:"serviceRate",then:e=>e.required("This field is required!"),otherwise:e=>e.nullable()}).typeError("This field is required!"),serviceRateExpenses:(0,u.H)().min(0).nullable().typeError("This field is required!").when("rateType",{is:"serviceRate",then:e=>e.required("This field is required!"),otherwise:e=>e.nullable()}),arrangementFee:(0,u.H)().min(0).lessThan(100,"Rebate can`t be more than 99.99%").nullable().typeError("This field is required!").when("rateType",{is:"rebate",then:e=>e.required("This field is required!"),otherwise:e=>e.nullable()}),approvalThreshold:(0,u.H)().min(0).nullable().transform(e=>isNaN(e)?null:e),spendThreshold:(0,u.H)().min(0).nullable().transform(e=>isNaN(e)?null:e),invoiceDueDate:(0,u.H)().min(0).nullable().typeError("This field is required!")});var m=e.i(322135),p=e.i(720676),g=e.i(738251),x=e.i(514707);let b=n.f`
  query GetAccountEntriesTotals($where: AccountEntry_bool_exp, $locationId: Int) {
    meta: getDashboard_AccountEntry_calculatebalance_aggregate(
      where: $where
      args: { location_id: $locationId }
    ) {
      aggregate {
        debitTotal: sum {
          debit
        }
        creditTotal: sum {
          credit
        }
      }
    }
  }
`,y=n.f`
  mutation UpdateCustomerFinances($customerId: Int!, $customer: Account_set_input) {
    update_Account_by_pk(pk_columns: { id: $customerId }, _set: $customer) {
      id
    }
  }
`;var v=e.i(520561),j=e.i(964770),I=e.i(140021),w=e.i(813843),C=e.i(115871),_=e.i(553875),S=e.i(76381),T=e.i(88152),$=e.i(4142),k=e.i(799083),R=e.i(471973),P=e.i(191788),A=e.i(577579);let q=e=>{let r,{accountId:n,meta:i,refetch:a,toggleShow:s}=e,u=(0,l.f)(),{recalcModal:f,showRecalcErrors:m}=(0,A.S)(),[p,x]=(0,P.useState)(!1),{errors:b,handleSubmit:q,watch:D,control:E}=(0,c.G)({defaultValues:(r=i||{},{approvalThreshold:r?.finance?.approvalThreshold,arrangementFee:r?.finance?.arrangementFee,serviceRateLabour:r?.finance?.serviceRateLabour,serviceRateExpenses:r?.finance?.serviceRateExpenses,spendThreshold:r?.finance?.spendThreshold,invoiceDueDate:r?.finance?.invoiceDueDate,rateType:r?.finance?.rateType,serviceRateType:r?.finance?.serviceRateType||void 0}),resolver:(0,d.yupResolver)(h)}),[L,{loading:B}]=(0,o.f)(y),J=async e=>{try{x(!0);let t={meta:{...i||{},finance:{...i?.finance||{},rateType:e.rateType??null,serviceRateType:e.serviceRateType??null,serviceRateLabour:e.serviceRateLabour??null,serviceRateExpenses:e.serviceRateExpenses??null,arrangementFee:e.arrangementFee??null,approvalThreshold:e.approvalThreshold??null,spendThreshold:e.spendThreshold??null,invoiceDueDate:e.invoiceDueDate??null}}};await L({variables:{customerId:n,customer:t}});let r=await (0,v.L)({client:u,customerId:n,skipErrors:!0});await m({errors:r?.data?.calculateJobFinance?.data?.errors}),s(),a()}finally{x(!1)}},V=D("rateType");return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:q(J),children:[f,(0,t.jsx)(_.f,{open:B||p,sx:{zIndex:1e5},children:(0,t.jsx)(T.f,{sx:{padding:4},children:(0,t.jsxs)(w.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(S.f,{color:"secondary"}),(0,t.jsx)(C.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(C.f,{variant:"h6",fontWeight:500,children:"We are recalculating your job's finances..."})]})})}),(0,t.jsx)(g.f,{children:(0,t.jsx)(c.e,{name:"rateType",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsxs)(w.f,{direction:"row",width:"100%",spacing:2,children:[[{label:"Service Rate",value:"serviceRate"},{label:"Rebate",value:"rebate"}].map(e=>(0,t.jsxs)(w.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)($.f,{color:"secondary",checked:r===e.value,onChange:t=>n(t.target.checked?e.value:null)}),(0,t.jsx)(C.f,{variant:"body2",children:e.label})]})),b.rateType?.message&&(0,t.jsx)(R.f,{error:!0,children:b.rateType.message})]})}})}),"serviceRate"===V&&(0,t.jsxs)(g.f,{children:[(0,t.jsx)(c.e,{name:"serviceRateType",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsxs)(g.f,{children:[(0,t.jsx)(w.f,{direction:"row",width:"100%",spacing:5,children:[{value:"grossPercent",label:"% of Gross",tooltip:`This will calculate your service rate as a % of the customer invoice e.g.
                             if this is 5%, you will earn \xa35 on a \xa3100 customer invoice.`},{value:"costPlus",label:"Cost plus",tooltip:`Cost plus will add the percentage indicated to the supplier amount e.g.
                             if this is 5% on a \xa3100 supplier invoice, customer invoice will be \xa3105.`}].map(e=>(0,t.jsx)(W,{title:e.tooltip,children:(0,t.jsxs)(w.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(k.f,{checked:r===e.value,onChange:t=>n(t.target.checked?e.value:null),color:"secondary"}),(0,t.jsx)(C.f,{variant:"body2",children:e.label})]})},e.value))}),b.serviceRateType?.message&&(0,t.jsx)(R.f,{error:!0,children:b.serviceRateType.message})]})}}),(0,t.jsxs)(w.f,{marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...N.title,marginBottom:1},children:"Service Rate"}),(0,t.jsxs)(w.f,{width:"100%",marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...N.subtitle,marginBottom:1},children:"Labour:"}),(0,t.jsx)(c.e,{name:"serviceRateLabour",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),rightLabel:"%",sx:{width:"100%"},type:"number",inputMode:"decimal",InputProps:{inputProps:{min:0,step:.01}},value:r,onChange:n,error:!!b.serviceRateLabour,helperText:b.serviceRateLabour?.message})}})]}),(0,t.jsxs)(w.f,{marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...N.subtitle,marginBottom:1},children:"Expenses and Materials:"}),(0,t.jsx)(c.e,{name:"serviceRateExpenses",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),rightLabel:"%",sx:{width:"100%"},type:"number",inputMode:"decimal",InputProps:{inputProps:{min:0,step:.01}},value:r,onChange:n,error:!!b.serviceRateExpenses,helperText:b.serviceRateExpenses?.message})}})]})]})]}),"rebate"===V&&(0,t.jsxs)(w.f,{marginBottom:3,width:"100%",children:[(0,t.jsx)(C.f,{sx:{...N.subtitle,marginBottom:1},children:"Rebate:"}),(0,t.jsx)(c.e,{name:"arrangementFee",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),rightLabel:"%",sx:{width:"100%"},type:"number",inputMode:"decimal",InputProps:{inputProps:{min:0,step:.01}},value:r,onChange:n,error:!!b.arrangementFee,helperText:b.arrangementFee?.message})}})]}),(0,t.jsxs)(w.f,{marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...N.subtitle,marginBottom:1},children:"Approval threshold:"}),(0,t.jsx)(c.e,{name:"approvalThreshold",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),rightLabel:"Incl VAT",sx:{width:"100%"},type:"number",inputMode:"decimal",InputProps:{inputProps:{min:0,step:.01}},value:r,onChange:n,error:!!b.approvalThreshold,helperText:b.approvalThreshold?.message})}})]}),(0,t.jsxs)(w.f,{marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...N.subtitle,marginBottom:1},children:"Spend threshold:"}),(0,t.jsx)(c.e,{name:"spendThreshold",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),rightLabel:"Incl VAT",sx:{width:"100%"},type:"number",inputMode:"decimal",InputProps:{inputProps:{min:0,step:.01}},value:r,onChange:n,error:!!b.spendThreshold,helperText:b.spendThreshold?.message})}})]}),(0,t.jsxs)(w.f,{marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...N.subtitle,marginBottom:1},children:"Invoice terms"}),(0,t.jsx)(c.e,{name:"invoiceDueDate",control:E,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{rightLabel:"Days",sx:{width:"100%"},type:"number",InputProps:{inputProps:{min:0}},value:r,onChange:n,error:!!b.invoiceDueDate,helperText:b.invoiceDueDate?.message})}})]})]})},N={title:{fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"},subtitle:{fontSize:"14px",lineHeight:"24px",marginBottom:"10px",fontWeight:300,color:"gray"}},W=(0,x.f)(e=>{let{className:r,...n}=e;return(0,t.jsx)(m.f,{...n,classes:{popper:r}})})(e=>{let{theme:t}=e;return{[`& .${p.f.tooltip}`]:{backgroundColor:t?.palette.dark.main,boxShadow:t?.shadows[1],fontSize:13}}});var D=e.i(877341),E=e.i(824451);e.i(827010);var L=e.i(851123);let B=(0,u.t)().shape({creditLimit:(0,u.H)().nullable().transform((e,t)=>""===t?null:e),creditRating:(0,u.t)().shape({value:(0,u.x)().required("Please select a credit rating"),label:(0,u.x)()}).nullable().transform((e,t)=>t&&t.value&&t.label?e:null)}),J=e=>{let{accountId:r,meta:n,refetch:i,toggleShow:a}=e,[s,l]=(0,P.useState)(""),u={...n?.finance},{control:f,handleSubmit:h}=(0,c.G)({defaultValues:{creditLimit:u?.creditLimit||0,creditRating:u?.creditRating},resolver:(0,d.yupResolver)(B)}),[m]=(0,o.f)(y),p=async e=>{m({variables:{customerId:r,customer:v(e)}}).then(()=>{i(),a()})},[g,{loading:x,data:{items:b}={items:[]}}]=(0,D.f)(L.A,{variables:{where:{type:{_eq:"creditRating"},status:{_eq:"active"},name:{_ilike:""!==s?`%${s}%`:null}},type:"creditRating",offset:0,orderBy:{name:"asc"}}}),v=e=>{let t=u||{};return{meta:{...n,finance:{...t,creditLimit:Number(e.creditLimit),creditRating:e.creditRating}}}};return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:h(p),children:[(0,t.jsxs)(w.f,{marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...V.subtitle,marginBottom:1},children:"Credit limit:"}),(0,t.jsx)(c.e,{name:"creditLimit",control:f,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{leftLabel:(0,t.jsx)(I.default,{sx:{height:"18px"}}),rightLabel:"Incl VAT",sx:{width:"100%"},type:"number",inputMode:"decimal",InputProps:{inputProps:{min:0,step:.01}},value:r??"",onChange:n})}})]}),(0,t.jsxs)(w.f,{marginBottom:3,children:[(0,t.jsx)(C.f,{sx:{...V.subtitle,marginBottom:1},children:"Credit rating:"}),(0,t.jsx)(c.e,{name:"creditRating",control:f,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(E.f,{value:r||"",onChange:(e,t)=>n(t),placeholder:"Credit rating",onSearchChange:l,limitTags:1,variant:"standard",color:"secondary",loading:x,onOpen:()=>g(),options:b})}})]})]})},V={subtitle:{fontSize:"14px",lineHeight:"24px",marginBottom:"10px",fontWeight:300,color:"gray"}};var F=e.i(506656),H=e.i(800884),O=e.i(587369),M=e.i(396413);class U{filters;constructor(e){this.filters=e}getLocation(){let{locationId:e}=this.filters;return e?{_or:[{locationId:{_eq:e}},{PaymentReconciliations:{locationId:{_eq:e}}}]}:null}getAccount(){let{accountId:e}=this.filters;return e?{accountId:{_eq:e}}:null}getType(){let{creditNote:e,paymentReceipt:t,proformaInvoice:r,unpaid:n,partiallyPaid:i,paid:a}=this.filters.type,s=[];return(e&&s.push("creditNote"),t&&s.push("paymentReceipt"),r&&s.push("proformaInvoice"),n&&s.push("unpaid"),i&&s.push("partial"),a&&s.push("paid"),0===s.length)?{type:{_in:[]},paymentStatus:{_in:[]}}:{type:{_in:[...s,"customerPpmInvoice","supplierPpmInvoice","invoice","customerGroupInvoice"]},paymentStatus:{_in:[...s]}}}getOutstandingLevel(){let{outstandingLevel:e}=this.filters;return e?{outstandingdays:{_gte:e.split("-")[0]||null,_lte:e.split("-")[1]||null}}:null}getTime(){let{startDate:e,endDate:t}=this.filters;return e||t?{_and:[{_or:[{_and:[{createdAt:{_gte:e}},{createdAt:{_lte:t}}]}]}]}:null}getInvoiceNumber(){let{invoiceNumber:e}=this.filters;return e?{_or:[{Invoices:{invoiceNumber:{_ilike:`%${e}%`}}},{Invoices:{Job:{number:{_ilike:`%${e}%`}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{invoiceNumber:{_ilike:`%${e}%`}}}}},{PaymentReconciliations:{InvoiceEntry:{Invoices:{Job:{number:{_ilike:`%${e}%`}}}}}}]}:null}build(){let e=[this.getLocation(),this.getAccount(),this.getType(),this.getOutstandingLevel(),this.getTime(),this.getInvoiceNumber()].filter(e=>null!==e);return e.length>0?{_and:e}:{}}}var z=e.i(879436);let G=e=>{let{accountId:n,locationId:i,edit:a=!0,meta:s,offCanvas:o,refetch:l}=e,[c,d]=(0,P.useState)(!0),u=(0,O.f)("(max-width: 600px)"),f=s?.finance||{},{data:h}=(0,r.t)(b,{variables:{locationId:i,where:new U({accountId:n,locationId:i,type:{creditNote:!0,paymentReceipt:!0,proformaInvoice:!0,unpaid:!0,partiallyPaid:!0,paid:!0}}).build()}}),m=(h?.aggregate?.debitTotal?.debit??0)-(h?.aggregate?.creditTotal?.credit??0),p=m>0&&f?.creditLimit?(0,F.f)(m/f.creditLimit*100,0):0;return(0,t.jsx)(M.f,{carousel:!1,category:"finance",entity:"CustomerCreditReport",entityId:i??n,title:"Credit report",showActionButtons:a,showItemActions:a,expanded:c,onEdit:a?e=>{e.stopPropagation(),o.show({title:"Edit credit details",content:(0,t.jsx)(J,{accountId:n,meta:s,refetch:l,toggleShow:o.close})})}:null,onChangeExpanded:(e,t)=>d(t),children:(0,t.jsxs)(w.f,{direction:u?"column":"row",justifyContent:u?"flex-start":"space-between",gap:1,pl:1,pr:u?1:4.5,children:[(0,t.jsxs)(w.f,{children:[(0,t.jsx)(C.f,{sx:{fontSize:12},children:"Balance"}),(0,t.jsx)(C.f,{children:(0,z.f)(m??0)})]}),(0,t.jsxs)(w.f,{direction:"row",gap:1.5,alignItems:"center",children:[(0,t.jsxs)(w.f,{children:[(0,t.jsx)(C.f,{sx:{fontSize:12},children:"Credit limit"}),(0,t.jsx)(C.f,{children:f?.creditLimit?(0,z.f)(f.creditLimit):"None set"})]}),!!f?.creditLimit&&(0,t.jsx)(H.f,{sx:{borderRadius:1},label:`${p}%`,size:"small",color:(e=>{let{percent:t,breakPoints:r=[]}=e,[n,i]=r.length>=2?r:[50,75];return t<=n?"success":t<=i?"info":"error"})({percent:p})})]}),(0,t.jsxs)(w.f,{children:[(0,t.jsx)(C.f,{sx:{fontSize:12},children:"Credit rating"}),(0,t.jsx)(C.f,{children:f?.creditRating?.label||"None set"})]})]})})};var Y=e.i(871931),K=e.i(760981),Z=e.i(302966),Q=e.i(755548),X=e.i(890854),ee=e.i(362537),et=e.i(51196),er=e.i(152658),en=e.i(652148),ei=e.i(152078);let ea=e=>{let{accountId:r,data:n,refetch:i,toggleShow:a}=e,{errors:s,handleSubmit:l,register:u,control:f}=(0,c.G)({defaultValues:n,resolver:(0,d.yupResolver)(er.f)}),[h]=(0,o.f)(et.R,{onCompleted:()=>{i(),a()}}),[m]=(0,o.f)(et.b,{onCompleted:()=>{i(),a()}}),p=async e=>{let t={bank:e.bank,accountNumber:e.accountNumber,bic:e.bic,iban:e.iban,routingNumber:e.routingNumber,stripeId:"ba_42g2s45sh46jl46h",accountId:r,status:"active",countryId:1,currencyId:1,meta:{showInInvoice:!!e.showInInvoice}};n?.id?await m({variables:{id:n.id,changes:t}}):await h({variables:{objects:[t]}})};return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:l(p),children:[(0,t.jsx)(w.f,{marginBottom:2,children:(0,t.jsx)(en.f,{name:"bank",label:"Bank name",inputRef:u,color:"secondary",variant:"standard",error:!!s.bank})}),(0,t.jsx)(w.f,{marginBottom:2,children:(0,t.jsx)(en.f,{name:"accountNumber",label:"Account number",inputRef:u,color:"secondary",variant:"standard",error:!!s.accountNumber})}),(0,t.jsx)(w.f,{marginBottom:2,children:(0,t.jsx)(en.f,{name:"routingNumber",label:"Routing number",inputRef:u,color:"secondary",variant:"standard",error:!!s.routingNumber})}),(0,t.jsx)(w.f,{marginBottom:2,children:(0,t.jsx)(en.f,{name:"bic",label:"BIC",inputRef:u,color:"secondary",variant:"standard",error:!!s.bic})}),(0,t.jsx)(w.f,{marginBottom:2,children:(0,t.jsx)(en.f,{name:"iban",label:"IBAN",inputRef:u,color:"secondary",variant:"standard",error:!!s.iban})}),(0,t.jsx)(c.e,{control:f,name:"showInInvoice",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(ei.f,{label:"Show in invoice",control:(0,t.jsx)(k.f,{checked:r||"",color:"secondary",onChange:e=>n(e.target?.checked)})})}})]})};var es=e.i(497844);let eo=e=>{let{accountId:r,data:n=[],edit:i=!0,refetch:a}=e,o=(0,s.f)(),l=[{field:"bank",headerName:"Bank",sortable:!1,minWidth:120,flex:1},{field:"accountNumber",headerName:"Account Number",minWidth:150,flex:1,sortable:!1},{field:"routingNumber",headerName:"Routing",minWidth:100,flex:1,sortable:!1},{field:"bic",headerName:"BIC",flex:1,sortable:!1},{field:"iban",headerName:"IBAN",minWidth:70,flex:1,sortable:!1},{field:"createdAt",headerName:"Date Added",minWidth:150,flex:1,sortable:!1,valueFormatter:e=>(0,ee.default)(e).format("DD-MM-YYYY")},{field:"showInInvoice",headerName:"Show In Invoice",minWidth:150,flex:1,sortable:!1,renderCell:e=>{let{value:t}=e;return t?"True":"False"}},{field:"actions",headerName:"Actions",sortable:!1,flex:1,minWidth:80,renderCell(e){let{row:r}=e;return(0,t.jsx)(es.f,{actions:[{icon:"edit",tooltip:"Edit",onClick:e=>{e.stopPropagation(),d(e,r)}}]})}}],c=e=>{e.stopPropagation(),o.show({content:(0,t.jsx)(ea,{accountId:r,refetch:a,toggleShow:o.close}),title:"Add Bank Account"})},d=(e,n)=>{e.stopPropagation(),o.show({content:(0,t.jsx)(ea,{accountId:r,data:n,refetch:a,toggleShow:o.close}),title:"Edit Bank Account"})};return(0,t.jsxs)(Y.f,{defaultExpanded:!0,children:[(0,t.jsxs)(Z.f,{children:[(0,t.jsx)(C.f,{flexShrink:0,variant:"h6",children:"Bank Accounts"}),i&&(0,t.jsx)(()=>(0,t.jsx)(w.f,{direction:"row",alignItems:"center",justifyContent:"flex-end",width:"100%",children:(0,t.jsx)(Q.f,{color:"secondary",variant:"contained",onClick:c,children:"Edit"})}),{})]}),(0,t.jsx)(K.f,{children:(0,t.jsx)(X.f,{columns:l,rows:n.map(e=>({id:e.id,bank:e?.bank,accountNumber:e?.accountNumber,routingNumber:e?.routingNumber,bic:e?.bic,iban:e?.iban,stripeId:e.stripeId,createdAt:e.createdAt,showInInvoice:!!e.meta?.showInInvoice&&e.meta?.showInInvoice,actions:""}))})})]})};var el=e.i(974266),ec=e.i(162440);let ed=n.f`
  query GetSupplierCIS($supplierId: Int!) {
    account: Account_by_pk(id: $supplierId) {
      id
      cis
      cisPercentage
      cisStatus
      cisVerifiedDate
      cisVerifiedUser: CisVerifiedUser {
        id
        fullName
      }
    }
  }
`,eu=n.f`
  query GetSupplierJobsForCIS($supplierId: Int!, $limit: Int! = 50, $offset: Int! = 0) {
    jobs: Job(
      where: {
        supplierId: { _eq: $supplierId }
        type: { _eq: "reactive" }
        statusData: { _has_key: "accepted" }
        _not: { statusData: { _has_key: "validated" } }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      number
      type
      status
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
    }
    meta: Job_aggregate(
      where: {
        supplierId: { _eq: $supplierId }
        type: { _eq: "reactive" }
        statusData: { _has_key: "accepted" }
        _not: { statusData: { _has_key: "validated" } }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;var ef=e.i(74633),eh=e.i(65295),em=e.i(219295),ep=e.i(21557),eg=e.i(511667),ex=e.i(890350),eb=e.i(631328),ey=e.i(864883),ev=e.i(684779),ej=e.i(16135),eI=e.i(477882),ew=e.i(356119),eC=e.i(122989);e.i(443645);var e_=e.i(648116),eS=e.i(529422),eT=e.i(498681),e$=e.i(122965),ek=e.i(688870),eR=e.i(280445);let eP=e=>{let{supplierId:n,openJobCanvas:i=!1,onConfirm:a,onCancel:s}=e,o=(0,eT.f)(),l=o.admin.jobSetting.jobNumberPrefix,c=o.admin.jobSetting.jobNumberSuffix,{reference:d,pagination:u}=(0,e$.f)({pageFromUrl:!1}),{data:{jobs:f,meta:h}={jobs:[],meta:{aggregate:{count:0}}},loading:m}=(0,r.t)(eu,{variables:{supplierId:n,...u}}),p=(0,P.useMemo)(()=>[{minWidth:60,field:"id",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(eS.f,{id:r.id,number:r.number,openCanvas:i,isBlank:!i,isHref:!i,type:r.type,numberPrefix:l,numberSuffix:c})}},{maxWidth:80,field:"priority",headerName:"Priority",sortable:!1},{minWidth:150,flex:1,field:"service",headerName:"Service",sortable:!1},{minWidth:80,field:"type",headerName:"Type",sortable:!1},{minWidth:150,flex:1,field:"description",headerName:"Description",sortable:!1}],[l,c,i]),g=(0,P.useMemo)(()=>f.map(e=>({id:e.id,type:e.type,number:e.number,priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.shortJobDesc?.[0]?.taxonomy.name||"-"})),[f]);return(0,t.jsxs)(eA,{component:T.f,centered:!0,fullscreenBelow:600,initialWidth:800,minWidth:320,minHeight:200,sides:["right","bottom","top-left","top-right","bottom-left","bottom-right"],children:[(0,t.jsx)(C.f,{variant:"h6",sx:{paddingBottom:2,flexShrink:0},children:"Some job finances will be affected"}),(0,t.jsxs)(eq,{children:[(0,t.jsx)(C.f,{sx:{textAlign:"left"},children:"Please note that by enabling CIS deductions, work order finances that are not already in a validated status will be updated to reflect this change. Please de-select CIS deductions at work order level as appropriate."}),!m&&g.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.f,{sx:{fontWeight:"bold",padding:"16px 0 0 0"},children:"Affected jobs:"}),(0,t.jsx)(ef.s,{autoHeight:!0,columns:p,rows:g,loading:m,totalCount:h.aggregate.count,...d})]})]}),(0,t.jsxs)(eN,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,t.jsx)(Q.f,{onClick:s,color:"danger",variant:"contained",children:"Cancel"}),(0,t.jsx)(Q.f,{onClick:a,color:"secondary",variant:"contained",children:"Confirm"})]})]})},eA=(0,eR.f)(ek.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.spacing(2)} !important`,borderRadius:"8px",overflow:"hidden"}}),eq=(0,eR.f)(w.f)({flex:"1 1 auto",minHeight:0,overflow:"auto"}),eN=(0,eR.f)(w.f)(e=>{let{theme:t}=e;return{flexShrink:0,paddingTop:t.spacing(2)}}),eW=e=>{let{supplierId:r,defaultValues:n,close:i}=e,[a,s]=(0,e_.f)(),o=(0,ep.f)(),{recalcModal:d,showRecalcErrors:u}=(0,A.S)(),f=(0,l.f)(),[h,m]=(0,P.useState)(!1),{control:p,handleSubmit:g,errors:x,watch:b,setValue:y}=(0,c.G)({resolver:(0,em.yupResolver)(eD),defaultValues:n}),v=b("cisStatus"),j=b("cisPercentage"),I=(0,P.useRef)(j),C=(0,eb.s)(v);(0,P.useEffect)(()=>{C!==v&&(v===ex.T.UNVERIFIED?(y("cisPercentage",30),I.current=j):y("cisPercentage",I.current))},[v,y,j,C]);let[_,{isLoading:S}]=(0,eg.f)("/supplier/cis/manage",{queryKey:"supplier-cis-manage",method:"POST",onCompleted:async e=>{o.show({content:"Supplier CIS was updated successfully.",severity:"success"}),f.refetchQueries({include:["GetSupplierCIS"]}),await u(e)||i?.()},onError:e=>{o.show({content:`Error: ${e.message}`,severity:"error"})}}),T=async e=>{let n=!1;await s({content:e=>{let{onClose:i}=e;return(0,t.jsx)(eP,{supplierId:r,onConfirm:()=>{n=!0,i()},onCancel:()=>{i()}})}}),n&&await _({body:{supplierId:r,cis:e.cis,cisPercentage:e.cisPercentage,cisStatus:e.cisStatus}})};return(0,t.jsxs)(t.Fragment,{children:[a,d,(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:g(T),children:[(0,t.jsx)(ev.f,{open:S,sx:{zIndex:1e5},children:(0,t.jsx)(eI.f,{sx:{padding:4},children:(0,t.jsxs)(w.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(el.f,{color:"secondary"}),(0,t.jsx)(ew.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(ew.f,{variant:"h6",fontWeight:500,children:"We are recalculating your job's finances..."})]})})}),(0,t.jsxs)(w.f,{spacing:2,children:[(0,t.jsx)(c.e,{control:p,name:"cisStatus",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(eC.f,{fullWidth:!0,value:r,onChange:n,options:ey.f,label:"CIS status",variant:"standard",color:"secondary",renderValue:e=>{let r=ey.f.find(t=>t.value===e);return r?(0,t.jsx)(ej.f,{label:r.label,color:r.color,size:"small"}):""},renderOption:e=>(0,t.jsx)(ej.f,{label:e.label,color:e.color,size:"small"}),error:!!x.cisStatus,helperText:x.cisStatus?.message})}}),(0,t.jsx)(c.e,{control:p,name:"cis",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(en.f,{value:r,onChange:n,label:"CIS number",fullWidth:!0,variant:"standard",color:"secondary",error:!!x.cis,helperText:x.cis?.message})}}),(0,t.jsx)(c.e,{control:p,name:"cisPercentage",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(en.f,{value:r,onChange:n,label:"Percentage withheld",fullWidth:!0,variant:"standard",color:"secondary",type:"number",onFocus:()=>m(!0),onBlur:()=>m(!1),InputLabelProps:{shrink:h||""!==r&&null!=r},inputProps:{min:0,max:100,step:.1},error:!!x.cisPercentage,helperText:x.cisPercentage?.message})}})," "]})]})]})},eD=u.t().shape({cis:u.x().matches(/^\d{10}$/,"CIS must be a number with 10 digits").required("CIS is required"),cisStatus:u.x().oneOf(Object.values(ex.T)).required("CIS status is required"),cisPercentage:u.H().min(0,"Percentage withheld must be 0 or greater").max(100,"Percentage withheld must be 100 or less").required("Percentage withheld is required").typeError("Percentage withheld is required")}),eE=e=>{let{supplierId:n,defaultExpanded:i=!0}=e,[a,o]=(0,e_.f)(),l=(0,s.f)(),c=(0,ep.f)(),{recalcModal:d,showRecalcErrors:u}=(0,A.S)(),{data:f,loading:h,refetch:m}=(0,r.t)(ed,{variables:{supplierId:n}}),[p,{isLoading:g}]=(0,eg.f)(`/supplier/cis/delete/${n}`,{queryKey:"supplier-cis-delete",method:"DELETE",onCompleted:e=>{c.show({content:"Supplier CIS was deleted successfully.",severity:"success"}),m(),u(e)},onError:e=>{c.show({content:`Error: ${e.message}`,severity:"error"})}}),x=(0,P.useCallback)(e=>{e.stopPropagation();let r=(e=>{if(e?.cis&&e?.cisPercentage&&e?.cisStatus)return{cis:e.cis,cisStatus:e.cisStatus,cisPercentage:e.cisPercentage}})(f?.account);l.show({content:(0,t.jsx)(eW,{supplierId:n,defaultValues:r,close:l.close}),title:"Manage CIS"})},[f?.account,l,n]),b=(0,P.useCallback)(async()=>{let e=!1;await o({sx:{zIndex:1199},content:r=>{let{onClose:i}=r;return(0,t.jsx)(eP,{supplierId:n,openJobCanvas:!0,onConfirm:()=>{e=!0,i()},onCancel:i})}}),e&&await p()},[p,o,n]),y=(0,P.useCallback)(e=>{let t=[{tooltip:e.cis?"Edit":"Add",icon:"edit",onClick:x}];return e.cis&&t.push({tooltip:"Delete",icon:"delete",onClick:b}),t},[b,x]),v=(0,P.useMemo)(()=>[{field:"cis",headerName:"Verification number",flex:1,minWidth:150,renderCell:e=>{let{row:t}=e;return t.cis?t.cis:"-"}},{field:"cisPercentage",headerName:"Percentage withheld",flex:1,minWidth:150,renderCell:e=>{let{row:t}=e;return t.cisPercentage?`${t.cisPercentage}%`:"-"}},{field:"cisStatus",headerName:"CIS Status",flex:1,minWidth:150,renderCell:e=>{let{row:r}=e,n=ey.f.find(e=>e.value===r.cisStatus);return n?(0,t.jsx)(H.f,{label:n.label,color:n.color}):"N/A"}},{field:"cisVerifiedUser",headerName:"User",flex:1,minWidth:150,renderCell:e=>{let{row:t}=e;return t.cisVerifiedUser?t.cisVerifiedUser.fullName:"-"}},{field:"cisVerifiedDate",headerName:"Verified on",flex:1,minWidth:150,renderCell:e=>{let{row:r}=e;return r.cisVerifiedDate?(0,t.jsx)(C.f,{children:(0,eh.f)(r.cisVerifiedDate,!0)}):"-"}},{field:"actions",headerName:"Actions",flex:1,minWidth:100,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(es.f,{actions:y(r)})}}],[y]),j=(0,P.useMemo)(()=>f?.account?[f.account]:[],[f]);return(0,t.jsxs)("div",{children:[a,(0,t.jsx)(ev.f,{open:g,sx:{zIndex:1e5},children:(0,t.jsx)(eI.f,{sx:{padding:4},children:(0,t.jsxs)(w.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(el.f,{color:"secondary"}),(0,t.jsx)(C.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(C.f,{variant:"h6",fontWeight:500,children:"We are recalculating your job's finances..."})]})})}),(0,t.jsxs)(Y.f,{defaultExpanded:i,children:[(0,t.jsx)(Z.f,{expandIcon:(0,t.jsx)(ec.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,t.jsxs)(w.f,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,t.jsx)(C.f,{variant:"h6",children:"CIS"}),(0,t.jsx)(Q.f,{variant:"contained",color:"secondary",onClick:x,sx:{mr:2},children:f?.account?.cis?"Edit":"Add"})]})}),(0,t.jsx)(K.f,{children:(0,t.jsx)(ef.s,{loading:h,columns:v,rows:j})})]}),d]})},eL=n.f`
  query GetSupplierReverseCharge($supplierId: Int!) {
    account: Account_by_pk(id: $supplierId) {
      reverseCharge
    }
  }
`,eB=n.f`
  query GetSupplierJobsForReverseCharge($supplierId: Int!, $limit: Int! = 50, $offset: Int! = 0) {
    jobs: Job(
      where: {
        supplierId: { _eq: $supplierId }
        type: { _eq: "reactive" }
        statusData: { _has_key: "accepted" }
        _not: { statusData: { _has_key: "validated" } }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      number
      type
      status
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
    }
    meta: Job_aggregate(
      where: {
        supplierId: { _eq: $supplierId }
        type: { _eq: "reactive" }
        statusData: { _has_key: "accepted" }
        _not: { statusData: { _has_key: "validated" } }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;var eJ=e.i(886779);let eV=e=>{let{supplierId:n,onConfirm:i,onCancel:a}=e,s=(0,eT.f)(),o=s.admin.jobSetting.jobNumberPrefix,l=s.admin.jobSetting.jobNumberSuffix,{reference:c,pagination:d}=(0,e$.f)({pageFromUrl:!1}),{data:{jobs:u,meta:f}={jobs:[],meta:{aggregate:{count:0}}},loading:h}=(0,r.t)(eB,{variables:{supplierId:n,...d}}),m=(0,P.useMemo)(()=>[{minWidth:60,field:"id",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(eS.f,{id:r.id,number:r.number,openCanvas:!0,type:r.type,numberPrefix:o,numberSuffix:l})}},{maxWidth:80,field:"priority",headerName:"Priority",sortable:!1},{minWidth:150,flex:1,field:"service",headerName:"Service",sortable:!1},{minWidth:80,field:"type",headerName:"Type",sortable:!1},{minWidth:150,flex:1,field:"description",headerName:"Description",sortable:!1}],[o,l]),p=(0,P.useMemo)(()=>u.map(e=>({id:e.id,type:e.type,number:e.number,priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.shortJobDesc?.[0]?.taxonomy.name||"-"})),[u]);return(0,t.jsxs)(eF,{component:T.f,centered:!0,fullscreenBelow:600,initialWidth:800,minWidth:320,minHeight:200,sides:["right","bottom","top-left","top-right","bottom-left","bottom-right"],children:[(0,t.jsx)(C.f,{variant:"h6",sx:{paddingBottom:2,flexShrink:0},children:"Some job finances will be affected"}),(0,t.jsxs)(eH,{children:[(0,t.jsx)(C.f,{sx:{textAlign:"left"},children:"Please note that by enabling reverse charge functionality, work order finances that are not validated will be updated to reflect this change. Please de-select reverse charge invoicing at work order level as appropriate."}),!h&&p.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.f,{sx:{fontWeight:"bold",padding:"16px 0 0 0"},children:"Affected jobs:"}),(0,t.jsx)(ef.s,{autoHeight:!0,columns:m,rows:p,loading:h,totalCount:f.aggregate.count,...c})]})]}),(0,t.jsxs)(eO,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,t.jsx)(Q.f,{onClick:a,color:"danger",variant:"contained",children:"Cancel"}),(0,t.jsx)(Q.f,{onClick:i,color:"secondary",variant:"contained",children:"Confirm"})]})]})},eF=(0,eR.f)(ek.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.spacing(2)} !important`,borderRadius:"8px",overflow:"hidden"}}),eH=(0,eR.f)(w.f)({flex:"1 1 auto",minHeight:0,overflow:"auto"}),eO=(0,eR.f)(w.f)(e=>{let{theme:t}=e;return{flexShrink:0,paddingTop:t.spacing(2)}}),eM=e=>{let{defaultExpanded:n=!0,supplierId:i}=e,[a,s]=(0,e_.f)(),o=(0,ep.f)(),{recalcModal:l,showRecalcErrors:c}=(0,A.S)(),{data:d,refetch:u}=(0,r.t)(eL,{variables:{supplierId:i}}),[f,{isLoading:h}]=(0,eg.f)("/supplier/reverse-charge",{queryKey:"supplier-reverse-charge",method:"POST",onCompleted:e=>{o.show({content:"Supplier reverse charge updated successfully.",severity:"success"}),u(),c(e)},onError:e=>{o.show({content:`Error: ${e.message}`,severity:"error"})}}),m=async(e,r)=>{let n=!1;await s({sx:{zIndex:1199},content:e=>{let{onClose:r}=e;return(0,t.jsx)(eV,{supplierId:i,onConfirm:()=>{n=!0,r()},onCancel:()=>{r()}})}}),n&&await f({body:{supplierId:i,reverseCharge:r}})};return(0,t.jsxs)("div",{children:[a,(0,t.jsx)(ev.f,{open:h,sx:{zIndex:1e5},children:(0,t.jsx)(eI.f,{sx:{padding:4},children:(0,t.jsxs)(eJ.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(el.f,{color:"secondary"}),(0,t.jsx)(ew.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(ew.f,{variant:"h6",fontWeight:500,children:"We are recalculating your job's finances..."})]})})}),(0,t.jsxs)(Y.f,{defaultExpanded:n,children:[(0,t.jsx)(Z.f,{expandIcon:(0,t.jsx)(ec.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:"Reverse charge"}),(0,t.jsx)(K.f,{children:(0,t.jsx)(ei.f,{control:(0,t.jsx)(k.f,{color:"secondary",checked:d?.account?.reverseCharge,onChange:m}),label:"Apply reverse charge",color:"secondary"})})]}),l]})},eU=n.f`
  query GetCustomerCIS($customerId: Int!) {
    account: Account_by_pk(id: $customerId) {
      id
      vatId
      cisPercentage
      cis
    }
  }
`,ez=n.f`
  query GetCustomerJobsForCIS($customerId: Int!, $limit: Int! = 50, $offset: Int! = 0) {
    jobs: Job(
      where: {
        customerId: { _eq: $customerId }
        type: { _eq: "reactive" }
        _not: { statusData: { _has_key: "validated" } }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      number
      type
      status
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
    }
    meta: Job_aggregate(
      where: {
        customerId: { _eq: $customerId }
        type: { _eq: "reactive" }
        _not: { statusData: { _has_key: "validated" } }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`,eG=e=>{let{customerId:n,openJobCanvas:i=!1,isEnabling:a=!1,onConfirm:s,onCancel:o}=e,l=(0,eT.f)(),c=l.admin.jobSetting.jobNumberPrefix,d=l.admin.jobSetting.jobNumberSuffix,{reference:u,pagination:f}=(0,e$.f)({pageFromUrl:!1}),{data:{jobs:h,meta:m}={jobs:[],meta:{aggregate:{count:0}}},loading:p}=(0,r.t)(ez,{variables:{customerId:n,...f}}),g=(0,P.useMemo)(()=>[{minWidth:60,field:"id",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(eS.f,{id:r.id,number:r.number,openCanvas:i,isBlank:!i,isHref:!i,type:r.type,numberPrefix:c,numberSuffix:d})}},{maxWidth:80,field:"priority",headerName:"Priority",sortable:!1},{minWidth:150,flex:1,field:"service",headerName:"Service",sortable:!1},{minWidth:80,field:"type",headerName:"Type",sortable:!1},{minWidth:150,flex:1,field:"description",headerName:"Description",sortable:!1}],[c,d,i]),x=(0,P.useMemo)(()=>h.map(e=>({id:e.id,type:e.type,number:e.number,priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.shortJobDesc?.[0]?.taxonomy.name||"-"})),[h]);return(0,t.jsxs)(eY,{component:T.f,centered:!0,fullscreenBelow:600,initialWidth:800,minWidth:320,minHeight:200,sides:["right","bottom","top-left","top-right","bottom-left","bottom-right"],children:[(0,t.jsx)(C.f,{variant:"h6",sx:{paddingBottom:2,flexShrink:0},children:"Some job finances will be affected"}),(0,t.jsxs)(eK,{children:[(0,t.jsxs)(C.f,{sx:{textAlign:"left"},children:["Please note that by ",a?"enabling":"removing"," CIS deductions, work order finances that are not already in a validated status will be updated to reflect this change.",a&&" Please de-select CIS deductions at work order level as appropriate."]}),!p&&x.length>0&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.f,{sx:{fontWeight:"bold",padding:"16px 0 0 0"},children:"Affected jobs:"}),(0,t.jsx)(ef.s,{autoHeight:!0,columns:g,rows:x,loading:p,totalCount:m.aggregate.count,...u})]})]}),(0,t.jsxs)(eZ,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,t.jsx)(Q.f,{onClick:o,color:"danger",variant:"contained",children:"Cancel"}),(0,t.jsx)(Q.f,{onClick:s,color:"secondary",variant:"contained",children:"Confirm"})]})]})},eY=(0,eR.f)(ek.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.spacing(2)} !important`,borderRadius:"8px",overflow:"hidden"}}),eK=(0,eR.f)(w.f)({flex:"1 1 auto",minHeight:0,overflow:"auto"}),eZ=(0,eR.f)(w.f)(e=>{let{theme:t}=e;return{flexShrink:0,paddingTop:t.spacing(2)}}),eQ=e=>{let{customerId:r,defaultValues:n,close:i}=e,[a,s]=(0,e_.f)(),{recalcModal:o,showRecalcErrors:d}=(0,A.S)(),u=(0,ep.f)(),f=(0,l.f)(),[h,m]=(0,P.useState)(!1),{control:p,handleSubmit:g,errors:x}=(0,c.G)({resolver:(0,em.yupResolver)(eX),defaultValues:n}),[b,{isLoading:y}]=(0,eg.f)("/customer/cis/manage",{queryKey:"customer-cis-manage",method:"POST",onCompleted:async e=>{u.show({content:"Customer CIS was updated successfully.",severity:"success"}),f.refetchQueries({include:["GetCustomerCIS"]}),!await d(e)&&i&&i()},onError:e=>{u.show({content:`Error: ${e.message}`,severity:"error"})}}),v=async e=>{let n=!1;await s({content:e=>{let{onClose:i}=e;return(0,t.jsx)(eG,{customerId:r,isEnabling:!0,onConfirm:()=>{n=!0,i()},onCancel:()=>{i()}})}}),n&&await b({body:{customerId:r,cisPercentage:e.cisPercentage,cis:e.cis}})};return(0,t.jsxs)(t.Fragment,{children:[a,o,(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:g(v),children:[(0,t.jsx)(ev.f,{open:y,sx:{zIndex:1e5},children:(0,t.jsx)(eI.f,{sx:{padding:4},children:(0,t.jsxs)(w.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(el.f,{color:"secondary"}),(0,t.jsx)(ew.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(ew.f,{variant:"h6",fontWeight:500,children:"We are recalculating your job's finances..."})]})})}),(0,t.jsxs)(w.f,{spacing:2,children:[(0,t.jsx)(c.e,{control:p,name:"cis",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(en.f,{value:r,onChange:n,label:"CIS number",fullWidth:!0,variant:"standard",color:"secondary",error:!!x.cis,helperText:x.cis?.message})}}),(0,t.jsx)(c.e,{control:p,name:"cisPercentage",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(en.f,{value:r,onChange:n,label:"Percentage withheld",fullWidth:!0,variant:"standard",color:"secondary",type:"number",onFocus:()=>m(!0),onBlur:()=>m(!1),InputLabelProps:{shrink:h||""!==r&&null!=r},inputProps:{min:0,max:100,step:.1},error:!!x.cisPercentage,helperText:x.cisPercentage?.message})}})]})]})]})},eX=u.t().shape({cis:u.x().matches(/^\d{10}$/,"CIS must be a number with 10 digits").required("CIS is required"),cisPercentage:u.H().min(0,"Percentage withheld must be 0 or greater").max(100,"Percentage withheld must be 100 or less").required("Percentage withheld is required").typeError("Percentage withheld is required")}),e0=e=>e?.cisPercentage!==null&&e?.cisPercentage!==void 0,e1=e=>{let{customerId:n,defaultExpanded:i=!0}=e,[a,o]=(0,e_.f)(),{recalcModal:l,showRecalcErrors:c}=(0,A.S)(),d=(0,s.f)(),u=(0,ep.f)(),{data:f,loading:h,refetch:m}=(0,r.t)(eU,{variables:{customerId:n}}),[p,{isLoading:g}]=(0,eg.f)(`/customer/cis/delete/${n}`,{queryKey:"customer-cis-delete",method:"DELETE",onCompleted:e=>{u.show({content:"Customer CIS was deleted successfully.",severity:"success"}),m(),c(e)},onError:e=>{u.show({content:`Error: ${e.message}`,severity:"error"})}}),x=(0,P.useCallback)(e=>{e.stopPropagation();let r=(e=>{let t=e?.cisPercentage;if(null!=t)return{cisPercentage:t,cis:e?.cis??""}})(f?.account);d.show({content:(0,t.jsx)(eQ,{customerId:n,defaultValues:r,close:d.close}),title:"Manage CIS"})},[f?.account,d,n]),b=(0,P.useCallback)(async()=>{let e=!1;await o({sx:{zIndex:1199},content:r=>{let{onClose:i}=r;return(0,t.jsx)(eG,{customerId:n,openJobCanvas:!0,onConfirm:()=>{e=!0,i()},onCancel:i})}}),e&&await p()},[p,o,n]),y=(0,P.useCallback)(e=>{let t=[{tooltip:e0(e)?"Edit":"Add",icon:"edit",onClick:x}];return e0(e)&&t.push({tooltip:"Delete",icon:"delete",onClick:b}),t},[b,x]),v=(0,P.useMemo)(()=>[{field:"cis",headerName:"CIS number",flex:1,minWidth:150,renderCell:e=>{let{row:t}=e;return t.cis?t.cis:"-"}},{field:"cisPercentage",headerName:"Percentage withheld",flex:1,minWidth:150,renderCell:e=>{let{row:t}=e,r=t.cisPercentage;return null==r?"-":`${r}%`}},{field:"actions",headerName:"Actions",minWidth:50,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(es.f,{actions:y(r)})}}],[y]),j=(0,P.useMemo)(()=>f?.account?[f.account]:[],[f]);return(0,t.jsxs)("div",{children:[a,l,(0,t.jsx)(ev.f,{open:g,sx:{zIndex:1e5},children:(0,t.jsx)(eI.f,{sx:{padding:4},children:(0,t.jsxs)(w.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(el.f,{color:"secondary"}),(0,t.jsx)(C.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(C.f,{variant:"h6",fontWeight:500,children:"We are recalculating your job's finances..."})]})})}),(0,t.jsxs)(Y.f,{defaultExpanded:i,children:[(0,t.jsx)(Z.f,{expandIcon:(0,t.jsx)(ec.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,t.jsxs)(w.f,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",children:[(0,t.jsx)(C.f,{variant:"h6",children:"CIS"}),(0,t.jsx)(Q.f,{variant:"contained",color:"secondary",onClick:x,sx:{mr:2},children:e0(f?.account)?"Edit":"Add"})]})}),(0,t.jsx)(K.f,{children:(0,t.jsx)(ef.s,{loading:h,columns:v,rows:j})})]})]})},e5=n.f`
  query GetCustomerReverseCharge($customerId: Int!) {
    account: Account_by_pk(id: $customerId) {
      id
      vatId
      reverseCharge
      defaultVatRate
    }
  }
`,e2=n.f`
  query GetCustomerJobsForReverseCharge($customerId: Int!, $limit: Int! = 50, $offset: Int! = 0) {
    jobs: Job(
      where: {
        customerId: { _eq: $customerId }
        type: { _eq: "reactive" }
        _not: { statusData: { _has_key: "validated" } }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      number
      type
      status
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
    }
    meta: Job_aggregate(
      where: {
        customerId: { _eq: $customerId }
        type: { _eq: "reactive" }
        _not: { statusData: { _has_key: "validated" } }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`;var e6=e.i(262999),e8=e.i(936641),e4=e.i(218659);let e3=e=>{let{customerId:n,isEnabling:i=!1,onConfirm:a,onCancel:s}=e,o=(0,eT.f)(),l=o.admin.jobSetting.jobNumberPrefix,c=o.admin.jobSetting.jobNumberSuffix,{reference:d,pagination:u}=(0,e$.f)({pageFromUrl:!1}),{data:{jobs:f,meta:h}={jobs:[],meta:{aggregate:{count:0}}},loading:m,error:p}=(0,r.t)(e2,{variables:{customerId:n,...u}}),x=m||!!p,b=h.aggregate.count,y=!m&&!p&&b>0,v=!m&&!p&&0===b,j=(0,P.useMemo)(()=>[{minWidth:60,field:"id",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(eS.f,{id:r.id,number:r.number,openCanvas:!0,type:r.type,numberPrefix:l,numberSuffix:c})}},{maxWidth:80,field:"priority",headerName:"Priority",sortable:!1},{minWidth:150,flex:1,field:"service",headerName:"Service",sortable:!1},{minWidth:80,field:"type",headerName:"Type",sortable:!1},{minWidth:150,flex:1,field:"description",headerName:"Description",sortable:!1}],[l,c]),I=(0,P.useMemo)(()=>f.map(e=>({id:e.id,type:e.type,number:e.number,priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.shortJobDesc?.[0]?.taxonomy.name||"-"})),[f]);return(0,t.jsxs)(e9,{component:T.f,centered:!0,fullscreenBelow:600,initialWidth:800,initialHeight:560,minWidth:320,minHeight:200,sides:["right","bottom","top-left","top-right","bottom-left","bottom-right"],children:[(0,t.jsx)(C.f,{variant:"h6",sx:{paddingBottom:2,flexShrink:0},children:v?"Confirm reverse charge change":"Some job finances will be affected"}),(0,t.jsxs)(e7,{children:[i&&(0,t.jsx)(e8.f,{severity:"warning",sx:{mb:2,flexShrink:0},children:"Customer VAT registration has not been confirmed. Please ensure the customer is VAT registered before enabling reverse charge invoicing."}),(0,t.jsx)(C.f,{sx:{textAlign:"left",flexShrink:0},children:"Please note that by enabling reverse charge functionality, work order finances that are not validated will be updated to reflect this change. Please de-select reverse charge invoicing at work order level as appropriate."}),p&&(0,t.jsx)(e8.f,{severity:"error",sx:{mt:2,flexShrink:0},children:"Could not load affected jobs. Cancel and try again."}),m&&(0,t.jsx)(w.f,{flex:1,alignItems:"center",justifyContent:"center",sx:{minHeight:180},children:(0,t.jsx)(S.f,{color:"secondary"})}),y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.f,{sx:{fontWeight:"bold",padding:"16px 0 0 0",flexShrink:0},children:"Affected jobs:"}),(0,t.jsx)(ef.s,{autoHeight:!0,columns:j,rows:I,loading:m,totalCount:h.aggregate.count,...d})]}),v&&(0,t.jsx)(g.f,{sx:{flex:1,minHeight:0,pt:1},children:(0,t.jsx)(e4.f,{imageSrc:"/static/icons/no_locations_found.svg",imageSx:{width:220,height:180},title:"No jobs affected",subtitleFirstLine:"No work order finances will be recalculated for this change.",subtitleSecondLine:"You can still confirm to save the reverse charge setting."})})]}),(0,t.jsxs)(te,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,t.jsx)(Q.f,{onClick:s,color:"danger",variant:"contained",children:"Cancel"}),(0,t.jsx)(Q.f,{onClick:a,color:"secondary",variant:"contained",disabled:x,children:"Confirm"})]})]})},e9=(0,eR.f)(ek.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.spacing(2)} !important`,borderRadius:"8px",overflow:"hidden"}}),e7=(0,eR.f)(w.f)({flex:"1 1 auto",minHeight:0,overflow:"auto"}),te=(0,eR.f)(w.f)(e=>{let{theme:t}=e;return{flexShrink:0,paddingTop:t.spacing(2)}});var tt=e.i(536422),tr=e.i(995070);let tn=(0,u.t)().shape({defaultVatRate:(0,u.H)().nullable().transform((e,t)=>""===t||null==t?null:e).typeError(tr.i).min(0,tr.i).max(100,tr.i).test("max-two-decimals",tr.i,tr.b)});var ti=e.i(917569);let ta=n.f`
  query GetCustomerJobsForDefaultVat($where: Job_bool_exp!, $limit: Int! = 50, $offset: Int! = 0) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: { id: desc }) {
      id
      number
      type
      status
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;var ts=e.i(581384),to=e.i(946028);let tl=e=>`${e??ts.f}%`,tc=e=>{let{customerId:n,previousRate:i,nextRate:a,onConfirm:s,onCancel:o}=e,l=(0,eT.f)(),c=l.admin.jobSetting.jobNumberPrefix,d=l.admin.jobSetting.jobNumberSuffix,u=i===a,{reference:f,pagination:h}=(0,e$.f)({pageFromUrl:!1}),m=(0,P.useMemo)(()=>({customerId:{_eq:n},type:{_in:["reactive","ppm"]},status:{_neq:"canceled"},_and:[{_or:[{meta:{_is_null:!0}},{_not:{meta:{_contains:{customerCustomVat:{enabled:!0}}}}}]},{_not:{statusData:{_has_key:"validated"}}}]}),[n]),{data:{jobs:p,meta:x}={jobs:[],meta:{aggregate:{count:0}}},loading:b,error:y}=(0,r.t)(ta,{variables:{where:m,...h}}),v=b||!!y,j=!b&&!y&&p.length>0,I=!b&&!y&&0===p.length,_=(0,P.useMemo)(()=>[{minWidth:60,field:"id",headerName:"Job ID",sortable:!1,renderCell:e=>{let r,n,{row:i}=e;return(0,t.jsx)(ti.f,{href:`/dashboard/issues/view?id=${i.number}`,target:"_blank",rel:"noopener noreferrer",underline:"hover",color:"secondary",onClick:e=>e.stopPropagation(),children:(r=i.type,n=i.number,[(0,to.f)(r),c,n,d].filter(e=>null!=e&&""!==e).join(" "))})}},{maxWidth:80,field:"priority",headerName:"Priority",sortable:!1},{minWidth:150,flex:1,field:"service",headerName:"Service",sortable:!1},{minWidth:80,field:"type",headerName:"Type",sortable:!1},{minWidth:150,flex:1,field:"description",headerName:"Description",sortable:!1}],[c,d]),$=(0,P.useMemo)(()=>p.map(e=>({id:e.id,type:e.type,number:e.number,priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.shortJobDesc?.[0]?.taxonomy.name||"-"})),[p]);return(0,t.jsxs)(td,{component:T.f,centered:!0,fullscreenBelow:600,initialWidth:800,initialHeight:560,minWidth:320,minHeight:200,sides:["right","bottom","top-left","top-right","bottom-left","bottom-right"],children:[(0,t.jsx)(C.f,{variant:"h6",sx:{paddingBottom:2,flexShrink:0},children:I?"Confirm default VAT change":"Some job finances will be affected"}),(0,t.jsxs)(tu,{children:[(0,t.jsxs)(C.f,{sx:{textAlign:"left",flexShrink:0},children:[u?(0,t.jsxs)(t.Fragment,{children:["Re-saving the customer default VAT of ",(0,t.jsx)("strong",{children:tl(a)}),". The rate itself does not change."]}):(0,t.jsxs)(t.Fragment,{children:["Changing the customer default VAT from"," ",(0,t.jsx)("strong",{children:tl(i)})," to"," ",(0,t.jsx)("strong",{children:tl(a)}),"."]})," ","Jobs that do not have a specific VAT rate set will use this customer default. Finances for the affected jobs will be updated to reflect this change."," ",(0,t.jsx)("strong",{children:"Invoices that have already been issued will not be affected by this change."})]}),y&&(0,t.jsx)(e8.f,{severity:"error",sx:{mt:2,flexShrink:0},children:"Could not load affected jobs. Cancel and try again."}),b&&(0,t.jsx)(w.f,{flex:1,alignItems:"center",justifyContent:"center",sx:{minHeight:180},children:(0,t.jsx)(S.f,{color:"secondary"})}),j&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C.f,{sx:{fontWeight:"bold",padding:"16px 0 0 0",flexShrink:0},children:"Affected jobs:"}),(0,t.jsx)(g.f,{sx:{flex:1,minHeight:0},children:(0,t.jsx)(ef.s,{columns:_,rows:$,loading:b,totalCount:x.aggregate.count,containerHeight:"100%",...f})})]}),I&&(0,t.jsx)(g.f,{sx:{flex:1,minHeight:0,pt:1},children:(0,t.jsx)(e4.f,{imageSrc:"/static/icons/no_locations_found.svg",imageSx:{width:220,height:180},title:"No jobs affected",subtitleFirstLine:"No work order finances will be recalculated for this change.",subtitleSecondLine:"You can still confirm to save the new customer default VAT rate."})})]}),(0,t.jsxs)(tf,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,t.jsx)(Q.f,{onClick:o,color:"danger",variant:"contained",children:"Cancel"}),(0,t.jsx)(Q.f,{onClick:s,color:"secondary",variant:"contained",disabled:v,children:"Confirm"})]})]})},td=(0,eR.f)(ek.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",padding:`${t.spacing(2)} !important`,borderRadius:"8px",overflow:"hidden"}}),tu=(0,eR.f)(w.f)({flex:"1 1 auto",minHeight:0,overflow:"hidden"}),tf=(0,eR.f)(w.f)(e=>{let{theme:t}=e;return{flexShrink:0,paddingTop:t.spacing(2)}});var th=e.i(785744),tm=e.i(948574);let tp=e=>{let{customerId:r,defaultVatRate:n,onSaveComplete:i}=e,{hasRole:s}=(0,a.f)(),o=s([...tm.f]),[l,u]=(0,e_.f)(),{recalcModal:f,showRecalcErrors:h}=(0,A.S)(),m=(0,ep.f)(),{errors:p,handleSubmit:g,control:x}=(0,c.G)({defaultValues:{defaultVatRate:(0,th.H)(n)},resolver:(0,d.yupResolver)(tn)}),[b,{isLoading:y}]=(0,eg.f)("/customer/default-vat-rate",{queryKey:"customer-default-vat-rate",method:"POST",onError:e=>{m.show({content:`Error: ${e.message}`,severity:"error"})}}),v=async(e,n)=>{let a=!1;if(await u({sx:{zIndex:1199},content:i=>{let{onClose:s}=i;return(0,t.jsx)(tc,{customerId:r,previousRate:n,nextRate:e,onConfirm:()=>{a=!0,s()},onCancel:()=>{s()}})}}),!a)return;let s=await b({body:{customerId:r,defaultVatRate:e}});if(!s)return;let o=!!s.errors?.length,l=o||"number"!=typeof s.jobsAffected?"":` ${s.jobsAffected} job${1===s.jobsAffected?"":"s"} recalculated.`;!0===s.updated?m.show({content:o?"Customer default VAT rate updated, but some job finances could not be recalculated.":`Customer default VAT rate updated successfully.${l}`,severity:o?"warning":"success"}):!1===s.updated?m.show({content:o?"This default VAT rate is already saved, but some job finances could not be recalculated.":`This default VAT rate is already saved.${l}`,severity:o?"warning":"info"}):m.show({content:o?"The request completed, but some job finances could not be recalculated. Refresh to confirm the saved rate.":"The request completed. Refresh to confirm the saved rate.",severity:"warning"}),await h(s),i()},I=async e=>{if(!o)return;let t=(0,th.H)(e.defaultVatRate),r=(0,th.H)(n);await v(t,r)},_=(0,th.H)(n),S=async()=>{o&&null!==_&&await v(null,_)};return(0,t.jsxs)(w.f,{spacing:1.5,mt:3,children:[l,f,(0,t.jsx)(ev.f,{open:y,sx:{zIndex:1e5},children:(0,t.jsx)(eI.f,{sx:{padding:4},children:(0,t.jsxs)(w.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(el.f,{color:"secondary"}),(0,t.jsx)(C.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(C.f,{variant:"h6",fontWeight:500,children:"Saving the customer default VAT rate..."})]})})}),(0,t.jsx)(C.f,{variant:"subtitle1",fontWeight:600,children:"Default VAT %"}),(0,t.jsxs)(C.f,{variant:"body2",color:"text.secondary",children:["Applied to jobs for this customer unless a job-specific VAT rate is set. Leave empty to use the standard ",ts.f,"% rate."]}),(0,t.jsxs)(w.f,{spacing:.5,children:[(0,t.jsxs)(w.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(c.e,{name:"defaultVatRate",control:x,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{color:"secondary",rightLabel:"%",rightLabelTypography:{fontWeight:700},sx:{width:"128px"},type:"number",inputMode:"decimal",disabled:!o,InputProps:{inputProps:{min:0,max:100,step:.01}},value:Number.isNaN(r)?"":r??"",onChange:e=>n((0,tr.H)(e)),error:!!p.defaultVatRate})}}),o&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Q.f,{size:"small",variant:"contained",color:"secondary",disabled:y,onClick:g(I),children:"Save"}),(0,t.jsx)(Q.f,{size:"small",variant:"contained",color:"danger",disabled:y||null===_,onClick:S,children:"Reset"})]})]}),p.defaultVatRate?.message&&(0,t.jsx)(C.f,{variant:"caption",color:"error",children:p.defaultVatRate.message})]})]})},tg=e=>{let{defaultExpanded:n=!0,customerId:i}=e,[a,s]=(0,e_.f)(),{recalcModal:o,showRecalcErrors:l}=(0,A.S)(),c=(0,ep.f)(),{data:d,refetch:u}=(0,r.t)(e5,{variables:{customerId:i}}),f=(0,tt.f)(d?.account?.vatId),[h,{isLoading:m}]=(0,eg.f)("/customer/reverse-charge",{queryKey:"customer-reverse-charge",method:"POST",onCompleted:e=>{c.show({content:"Customer reverse charge updated successfully.",severity:"success"}),u(),l(e)},onError:e=>{c.show({content:`Error: ${e.message}`,severity:"error"})}}),p=async(e,r)=>{let n=!1;await s({sx:{zIndex:1199},content:e=>{let{onClose:a}=e;return(0,t.jsx)(e3,{customerId:i,isEnabling:r,onConfirm:()=>{n=!0,a()},onCancel:()=>{a()}})}}),n&&await h({body:{customerId:i,reverseCharge:r}})};return(0,t.jsxs)("div",{children:[a,o,(0,t.jsx)(ev.f,{open:m,sx:{zIndex:1e5},children:(0,t.jsx)(eI.f,{sx:{padding:4},children:(0,t.jsxs)(eJ.f,{direction:"column",alignItems:"center",children:[(0,t.jsx)(el.f,{color:"secondary"}),(0,t.jsx)(ew.f,{variant:"h6",mt:2,fontWeight:500,children:"Please do not close this page."}),(0,t.jsx)(ew.f,{variant:"h6",fontWeight:500,children:"We are recalculating your job's finances..."})]})})}),(0,t.jsxs)(Y.f,{defaultExpanded:n,children:[(0,t.jsx)(Z.f,{expandIcon:(0,t.jsx)(ec.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,t.jsx)(ew.f,{variant:"h6",children:"VAT settings"})}),(0,t.jsxs)(K.f,{children:[(0,t.jsx)(ew.f,{variant:"subtitle1",fontWeight:600,mb:1,children:"Reverse charge"}),(0,t.jsx)(ei.f,{control:(0,t.jsx)(k.f,{color:"secondary",disabled:!f&&!d?.account?.reverseCharge,checked:!!d?.account?.reverseCharge,onChange:p}),label:"Apply reverse charge"}),!f&&(0,t.jsx)(e6.f,{variant:"filled",severity:"info",color:"info",sx:{mt:1},children:"A valid customer VAT ID is required to enable reverse charge."}),(0,t.jsx)(tp,{customerId:i,defaultVatRate:d?.account?.defaultVatRate??null,onSaveComplete:u},String(d?.account?.defaultVatRate??"none"))]})]})]})};var tx=e.i(732106),tb=e.i(834862);e.s(["f",0,e=>{let{type:n,accountId:o,relatedCustomerIds:l,accountRefetch:c,locationId:d,meta:u}=e,{hasRole:h}=(0,a.f)(),{authStatus:m}=(0,tb.f)(),p=(0,O.f)("(max-width: 1080px)"),g=(0,O.f)("(max-width:600px)"),x=(0,s.f)(),b=h("admin"),y="authorized"===m&&b,{data:{financial:v}={financial:{}},loading:j,refetch:I}=(0,r.t)(i,{variables:{accountId:o}}),_=u?.finance||{},{bankAccounts:S}=v,T=[{label:"Rate Type",value:_.rateType?f.O[_.rateType]:"None set"},{label:"Service Rate Labour",value:"number"==typeof _.serviceRateLabour?`${_.serviceRateLabour}%`:"None set"},{label:"Service Rate Expenses and Materials",value:"number"==typeof _.serviceRateExpenses?`${_.serviceRateExpenses}%`:"None set"},{label:"Rebate",value:"number"==typeof _.arrangementFee?`${_.arrangementFee}%`:"None set"},{label:"Approval Threshold",value:"number"==typeof _?.approvalThreshold?(0,z.f)(_?.approvalThreshold):"None set"},{label:"Spend Threshold",value:"number"==typeof _?.spendThreshold?(0,z.f)(_?.spendThreshold):"None set"},{label:"Stripe ID",value:_.stripeId||"-"},{label:"Invoice Due Date",value:_.invoiceDueDate||"-"}].map((e,t)=>({...e,id:t})),$=e=>{e.stopPropagation(),x.show({content:(0,t.jsx)(q,{accountId:o,meta:u??{},refetch:c,toggleShow:x.close}),title:"Edit overview"})};return j?(0,t.jsx)(w.f,{alignItems:"center",justifyContent:"center",height:"100%",width:"100%",children:(0,t.jsx)(el.f,{color:"secondary"})}):(0,t.jsxs)(w.f,{spacing:3,children:[(0,t.jsx)(w.f,{children:(0,t.jsx)(tx.f,{type:n,accountId:[o,...l??[]],locationId:d,columnVisibility:{xeroSync:y,accountName:y,accountType:y,xeroStatus:y,xeroReference:y,balance:!0},filterVisibility:{dateType:b},showAddButtons:!0,showTotalChips:!0,showCSVdownload:!0,showFilters:!0,showXeroBulkSync:y,tableContainerMaxHeight:g?"682px":"530px"})}),h("admin")&&(0,t.jsxs)(w.f,{direction:"row",flexWrap:"wrap",width:"100%",gap:4,children:[(0,t.jsxs)(w.f,{width:"customer"!==n||p?"100%":"calc(50% - 16px)",gap:3,children:["customer"===n&&(0,t.jsxs)(Y.f,{defaultExpanded:!0,children:[(0,t.jsxs)(Z.f,{children:[(0,t.jsx)(C.f,{variant:"h6",children:"Overview"}),b&&(0,t.jsx)(()=>(0,t.jsx)(w.f,{direction:"row",alignItems:"center",justifyContent:"flex-end",width:"100%",children:(0,t.jsx)(Q.f,{color:"secondary",variant:"contained",onClick:$,children:"Edit"})}),{})]}),(0,t.jsx)(K.f,{children:(0,t.jsx)(X.f,{columns:[{field:"label",headerName:"",sortable:!1,minWidth:320},{field:"value",headerName:"",sortable:!1}],rows:T,hideHeader:!0})})]}),(0,t.jsx)(eo,{accountId:o,data:S,edit:b,refetch:()=>{c(),I()}})]}),"customer"===n&&(0,t.jsx)(w.f,{width:p?"100%":"calc(50% - 16px)",children:(0,t.jsx)(G,{accountId:o,locationId:d,edit:b,meta:u??{},offCanvas:x,refetch:c})})]}),h("admin")&&"supplier"===n&&(0,t.jsx)(eM,{supplierId:o}),h("admin")&&"supplier"===n&&(0,t.jsx)(eE,{supplierId:o}),h("admin")&&"customer"===n&&(0,t.jsx)(tg,{customerId:o}),h("admin")&&"customer"===n&&(0,t.jsx)(e1,{customerId:o})]})}],162854)},51196,152658,e=>{var t=e.i(159080);let r=t.f`
  mutation AddBankAccount($objects: [BankAccount_insert_input!]!) {
    insert_BankAccount(objects: $objects) {
      returning {
        id
        stripeId
        accountNumber
        routingNumber
        bic
        iban
        status
        createdAt
      }
    }
  }
`,n=t.f`
  mutation UpdateBankAccount($id: Int!, $changes: BankAccount_set_input) {
    update_BankAccount_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["R",0,r,"b",0,n],51196);var i=e.i(426778);let a=(0,i.t)().shape({bank:(0,i.x)().required(),accountNumber:(0,i.x)().required(),bic:(0,i.x)().required(),iban:(0,i.x)().required(),routingNumber:(0,i.x)().required(),showInInvoice:(0,i.g)()});e.s(["f",0,a],152658)},328186,104050,e=>{var t=e.i(159080);let r=t.f`
  query GetNextJob($locationId: Int, $now: timestamptz!) {
    nextJob: Job(
      where: {
        type: { _eq: "ppm" }
        status: { _nin: ["closed", "canceled"] }
        locationId: { _eq: $locationId }
        timingStart: { _gt: $now }
        Compliance: { type: { _eq: "location" }, locationId: { _eq: $locationId } }
      }
      order_by: { timingStart: asc }
      limit: 1
    ) {
      id
      number
      title
      status
      scheduledAt
    }
  }
`,n=t.f`
  query GetTotalCompliancesBySupplier(
    $type: compliance_type
    $locationId: Int
    $supplierId: Int
    $now: date
  ) {
    total: Compliance_aggregate(
      where: {
        type: { _eq: $type }
        status: { _eq: "active" }
        locationId: { _eq: $locationId }
        supplierId: { _eq: $supplierId }
      }
    ) {
      aggregate {
        count
      }
    }
    overdueTotal: Compliance_aggregate(
      where: {
        type: { _eq: $type }
        status: { _eq: "active" }
        locationId: { _eq: $locationId }
        supplierId: { _eq: $supplierId }
        expiryDate: { _lte: $now }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`,i=t.f`
  query GetTotalCompliances(
    $type: compliance_type
    $locationId: Int
    $customerId: Int
    $now: date
  ) {
    total: Compliance_aggregate(
      where: {
        type: { _eq: $type }
        status: { _eq: "active" }
        locationId: { _eq: $locationId }
        customerId: { _eq: $customerId }
      }
    ) {
      aggregate {
        count
      }
    }
    overdueTotal: Compliance_aggregate(
      where: {
        type: { _eq: $type }
        status: { _eq: "active" }
        locationId: { _eq: $locationId }
        customerId: { _eq: $customerId }
        expiryDate: { _lte: $now }
      }
    ) {
      aggregate {
        count
      }
    }
  }
`,a=t.f`
  query GetComplianceSpend($locationId: Int!) {
    totals: getComplianceTotals(locationId: $locationId) {
      ltmTotal
      ytdTotal
    }
  }
`;e.s(["q",0,a,"O",0,r,"B",0,i,"Z",0,n],328186);var s=e.i(494575);e.s(["f",0,e=>e>=80?s.f.COLOUR.success:e<80&&e>=50?s.f.COLOUR.info:s.f.COLOUR.warning],104050)},986846,e=>{var t=e.i(391398),r=e.i(740472),n=e.i(645691),i=e.i(813843),a=e.i(115871),s=e.i(539117),o=e.i(901004),l=e.i(738251),c=e.i(514707),d=e.i(494575),u=e.i(362537),f=e.i(879436);let h="The last 12 months";r.J.register(r.i,r.z,r.h,r.Z,r.W,r.E);let m=(0,c.f)(i.f)`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;
  padding: 1rem 1.5rem;
`;e.s(["f",0,e=>{let r,{invoicesTotalByMonths:c,selectedYear:p,entity:g,setSelectedYear:x}=e,b=(()=>{let e=[];for(let t=0;t<=4;t++)e.push((0,u.default)().subtract(t,"years").year().toString());return[h,...e]})(),y=(e=>{if(e===h){let e=new Date,t=[];for(let r=11;r>=0;r--){let n=new Date(e.getFullYear(),e.getMonth()-r,1),i=(n.getMonth()+1).toString().padStart(2,"0"),a=n.getFullYear().toString();t.push(`${i}.${a}`)}return t}return e?Array.from({length:12},(t,r)=>`${(r+1).toString().padStart(2,"0")}.${e}`):[]})(p),v=(r=y.map(e=>c[e]??0),{labels:y,datasets:[{label:"The total amount spent",data:r,backgroundColor:d.f.COLOUR.secondary}]});return(0,t.jsxs)(m,{children:[(0,t.jsxs)(i.f,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"wrap",gap:2,children:[(0,t.jsx)(a.f,{typography:"h6",color:"text.primary",children:"supplier"===g?"Revenues":"Total spend"}),(0,t.jsx)(s.f,{value:p,onChange:e=>x(e.target.value),onClick:e=>e.stopPropagation(),size:"small",variant:"standard",color:"secondary",sx:{width:160},children:b.map(e=>(0,t.jsx)(o.f,{value:e,children:e},e))})]}),(0,t.jsx)(i.f,{children:(0,t.jsx)(i.f,{columnGap:2,sx:{width:"100%"},children:(0,t.jsx)(l.f,{sx:{width:"100%",height:300},children:(0,t.jsx)(n.e,{data:v,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:function(e){return`Amount: ${(0,f.f)(e.raw)}`}}}},scales:{y:{beginAtZero:!0,ticks:{stepSize:1}}}}})})})})]})}],986846)},714467,862152,e=>{var t=e.i(391398),r=e.i(740472),n=e.i(645691),i=e.i(813843),a=e.i(115871),s=e.i(539117),o=e.i(901004),l=e.i(738251),c=e.i(514707),d=e.i(494575),u=e.i(362537);let f="The last 12 months",h=()=>{let e=[];for(let t=0;t<=4;t++)e.push((0,u.default)().subtract(t,"years").year().toString());return[f,...e]},m=e=>{if(e===f){let e=new Date,t=[];for(let r=11;r>=0;r--){let n=new Date(e.getFullYear(),e.getMonth()-r,1),i=(n.getMonth()+1).toString().padStart(2,"0"),a=n.getFullYear().toString();t.push(`${i}.${a}`)}return t}return e?Array.from({length:12},(t,r)=>`${(r+1).toString().padStart(2,"0")}.${e}`):[]},p=(e,t,r)=>{let n=r.map(t=>e[t]??0),i=r.map(e=>t[e]??0);return{labels:r,datasets:[{label:"Reactive jobs",data:n,backgroundColor:d.f.COLOUR.secondary},{label:"PPM jobs",data:i,backgroundColor:d.f.COLOUR.muiLightGray}]}},g=()=>({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"top"},tooltip:{callbacks:{label:function(e){let t=e.dataset.label||"";return`${t}: ${e.raw}`}}}},scales:{y:{beginAtZero:!0,ticks:{stepSize:1}}}});e.s(["y",0,f,"N",0,g,"t",0,e=>{if(e===f){let e=(0,u.default)().endOf("day").toISOString();return{startDate:(0,u.default)().subtract(11,"months").startOf("month").toISOString(),endDate:e}}let t=parseInt(e,10);return{startDate:(0,u.default)().year(t).startOf("year").toISOString(),endDate:(0,u.default)().year(t).endOf("year").toISOString()}},"i",0,m,"O",0,h,"b",0,p],862152),r.J.register(r.i,r.z,r.h,r.Z,r.W,r.E);let x=(0,c.f)(i.f)`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;
  padding: 1rem 1.5rem;
`;e.s(["f",0,e=>{let{reactiveJobsCountByMonths:r,ppmJobsCountByMonths:c,selectedYear:d,setSelectedYear:u}=e,f=h(),b=p(r,c,m(d)),y=g();return(0,t.jsxs)(x,{children:[(0,t.jsx)(i.f,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",flexWrap:"wrap",gap:2,children:(0,t.jsxs)(i.f,{direction:"row",justifyContent:"space-between",alignItems:"center",width:"100%",gap:2,children:[(0,t.jsx)(a.f,{typography:"h6",color:"text.primary",children:"Bookings per month"}),(0,t.jsx)(s.f,{value:d,onChange:e=>u(e.target.value),onClick:e=>e.stopPropagation(),size:"small",variant:"standard",color:"secondary",sx:{width:160},children:f.map(e=>(0,t.jsx)(o.f,{value:e,children:e},e))})]})}),(0,t.jsx)(i.f,{children:(0,t.jsx)(i.f,{columnGap:2,sx:{width:"100%"},children:(0,t.jsx)(l.f,{sx:{width:"100%",height:300},children:(0,t.jsx)(n.e,{data:b,options:y})})})})]})}],714467)}],171764,(e,t,r)=>{t.exports=function(e,t,r,n){for(var i=-1,a=null==e?0:e.length;++i<a;){var s=e[i];t(n,s,r(s),e)}return n}},299177,(e,t,r)=>{var n=e.r(885049);t.exports=function(e,t,r,i){return n(e,function(e,n,a){t(i,e,r(e),a)}),i}},316666,(e,t,r)=>{var n=e.r(171764),i=e.r(299177),a=e.r(305792),s=e.r(448684);t.exports=function(e,t){return function(r,o){var l=s(r)?n:i,c=t?t():{};return l(r,e,a(o,2),c)}}},320037,(e,t,r)=>{var n=e.r(398629),i=e.r(316666),a=Object.prototype.hasOwnProperty;t.exports=i(function(e,t,r){a.call(e,r)?e[r].push(t):n(e,r,[t])})}]);