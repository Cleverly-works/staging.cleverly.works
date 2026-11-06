(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,938504,e=>{let t=e=>String(e).padStart(2,"0");e.s(["f",0,function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Date(e),r=`${a.getFullYear()}-${t(a.getMonth()+1)}-${t(a.getDate())}`;return n?`${r} ${t(a.getHours())}:${t(a.getMinutes())}`:r}])},681700,201609,642546,e=>{var t,n=e.i(391398),a=e.i(432171),r=e.i(159080);let i=r.f`
  query GetNotes($entity: String!, $entityId: Int!, $limit: Int, $offset: Int) {
    note: Note(
      where: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
      order_by: { createdAt: desc }
      limit: $limit
      offset: $offset
    ) {
      accountId
      comments
      createdAt
      id
      userId
      user: User {
        nameFirst
        nameLast
      }
    }
  }
`,o=r.f`
  mutation AddNote(
    $accountId: Int
    $comments: String
    $entity: String
    $entityId: Int
    $userId: Int
  ) {
    insert_Note(
      objects: {
        accountId: $accountId
        comments: $comments
        entity: $entity
        entityId: $entityId
        userId: $userId
      }
    ) {
      returning {
        id
        comments
      }
    }
  }
`,l=r.f`
  mutation UpdateNote($id: Int!, $change: Note_set_input) {
    update_Note_by_pk(pk_columns: { id: $id }, _set: $change) {
      id
      comments
    }
  }
`;var s=e.i(422411),d=e.i(424894),u=e.i(813843),c=e.i(115871),m=e.i(652148),p=e.i(426778);let f=(0,p.t)().shape({comments:(0,p.x)().required()});var h=e.i(776204),g=e.i(21557),x=e.i(594301);let b=e=>{let{defaultValues:t,refetchQueries:a,noteId:r,entity:i,entityId:p,close:b}=e,I=(0,g.f)(),{user:j}=(0,x.f)(),{errors:y,handleSubmit:C,register:S}=(0,s.G)({defaultValues:{...t},resolver:(0,d.yupResolver)(f)}),[$]=(0,h.f)(o,{refetchQueries:a,onCompleted:()=>{I.show({content:"Note added successfully",severity:"success"}),b()},onError:e=>{I.show({content:`Error: ${e.message}`,severity:"error"})}}),[_]=(0,h.f)(l,{refetchQueries:a,onCompleted:()=>{I.show({content:"Note updated successfully",severity:"success"}),b()},onError:e=>{I.show({content:`Error: ${e.message}`,severity:"error"})}}),N=async e=>{r?await _({variables:{id:r,change:{...e,accountId:j.accountId,userId:j.id}}}):await $({variables:{accountId:j.accountId,comments:e.comments,entity:i,entityId:p,userId:j.id}})};return(0,n.jsx)("form",{id:"offCanvasForm",onSubmit:C(N),children:(0,n.jsxs)(u.f,{marginBottom:3,children:[(0,n.jsx)(c.f,{sx:{...v.title,marginBottom:2},children:"Title"}),(0,n.jsx)(m.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",placeholder:"Comments",name:"comments",inputRef:S,error:!!y.comments,helperText:y.comments?.message})]})})},v={title:{fontSize:"16px",fontWeight:300,marginBottom:"15px",color:"gray"}};var I=e.i(74633),j=e.i(362537),y=e.i(497844),C=e.i(285835);let S=e=>{let{note:t=[],loading:a,handleClick:r,userId:i,reference:o}=e,l=[{field:"comments",headerName:"Title",flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(u.f,{direction:"row",overflow:"auto",height:"100%",paddingTop:2,children:(0,n.jsx)(u.f,{overflow:"auto",children:(0,n.jsx)(C.f,{maxLength:10,children:t.comments})})})}},{field:"user",headerName:"By",flex:1,sortable:!1},{field:"date",headerName:"Created",flex:1,sortable:!1},{field:"actions",headerName:"",width:50,sortable:!1,renderCell:e=>{let{row:t}=e;return i===t.userId?(0,n.jsx)(y.f,{actions:[{icon:"edit",onClick:e=>{e.stopPropagation(),r(e,t)},tooltip:"Edit"}]}):null}}];return(0,n.jsx)(I.s,{...o,columns:l,loading:a,rows:t.map(e=>({id:e.id,userId:e.userId,comments:e.comments,user:`${e.user?.nameFirst} ${e.user?.nameLast}`,date:(0,j.default)(e.createdAt).format("DD/MM/YYYY"),actions:""})),autoHeight:!0})};var $=e.i(411331),_=e.i(871931),N=e.i(760981),T=e.i(302966),w=e.i(886779),q=e.i(356119),R=e.i(747112),E=e.i(280445),M=e.i(755548),D=e.i(122965);let k=(0,E.f)(_.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{entity:t,entityId:r,title:o="Note"}=e,l=(0,$.f)(),{user:s}=(0,x.f)(),{reference:d,pagination:u}=(0,D.f)({initialSort:[{item:"createdAt",order:"desc"}]}),{loading:c,data:{note:m}={note:[]}}=(0,a.t)(i,{variables:{entity:t,entityId:r,...u},skip:!r}),p=(e,a)=>{e.preventDefault(),e.stopPropagation();let i={...a};l.show({content:(0,n.jsx)(b,{defaultValues:i,noteId:a?.id,entity:t,entityId:r,close:l.close,refetchQueries:["GetNotes"]}),title:a?.id?"Edit note":"Add note"})};return(0,n.jsxs)(k,{defaultExpanded:!0,children:[(0,n.jsx)(T.f,{expandIcon:(0,n.jsx)(R.f,{}),children:(0,n.jsx)(w.f,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",pr:1,children:(0,n.jsx)(q.f,{typography:"h6",children:o})})}),(0,n.jsxs)(N.f,{sx:{pt:0},children:[(0,n.jsx)(S,{note:m,reference:d,loading:c,handleClick:p,userId:s.id}),(0,n.jsx)(()=>(0,n.jsx)(w.f,{width:"100%",pt:2,justifyContent:"center",alignItems:"center",children:(0,n.jsx)(M.f,{variant:"contained",color:"secondary",onClick:e=>p(e),size:"small",children:"Add"})}),{})]})]})}],681700);var A=e.i(191788),F=e.i(203828),O=e.i(472552),W=e.i(443103),L=e.i(88152),P=e.i(76381),V=e.i(891723),Y=e.i(877341),J=e.i(890350);let U=`
  id
  invoiceNumber
  type
  number
  status
  description
  reference
  timingStart
  scheduledAt
  createdAt
  onSiteTimingEnd
  jobReportTimingEnd
  quoteReturnedTimingEnd
  revenue
  customerTotal: customerFinances(path: "amountInfo.total")
  supplierTotal: supplierFinances(path: "amountInfo.total")
  customerVatTotal: customerFinances(path: "amountInfo.vatTotal")
  supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")
  customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")
  supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")
  customerRebateAmount: customerFinances(path: "rebate.amount")
  slaId
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
  invoiceNumber
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
    manager: Manager {
      id
      fullName
    }
  }
  sublocation: Sublocation {
    id
    name
  }
  sla: SLA {
    name
  }
  manager: Manager {
    fullName
    nameLast
    nameFirst
    id
  }
  service: Service {
    id
    name
  }
`,B=r.f`
  query GetFinancialJob($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      amountOutstanding
      ${U}
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,G=r.f`
  query GetFinancialJobSupplier($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      amountOutstandingSupplier
      ${U}
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var z=e.i(948574),H=e.i(498681),Q=e.i(218659),K=e.i(529422),X=e.i(60903),Z=e.i(951510),ee=e.i(879436),et=e.i(938504);let en=function(e,t){let{numberPrefix:n="",numberSuffix:a="",omitFinancialColumnsFromExport:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i="customer"===t||"tenant"===t,o="supplier"===t;return e.map(e=>{let t=e.manager?`${e.manager.nameFirst} ${e.manager.nameLast}`:"Unassigned",l=e.scheduledAt?(0,et.f)(e.scheduledAt,!0):e.timingStart?(0,et.f)(e.timingStart,!0):"-",s=e.customerRebateAmount>0?e.customerVatTotal-e.customerRebateAmount-e.supplierTotal:e.customerTotal-e.supplierTotal;return o?{id:`${n} ${e.number} ${a}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",scheduleDate:l,created:(0,et.f)(e.createdAt),status:e.status}:i?{id:`${n} ${e.number} ${a}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",ref:e.reference,...r?{}:{jobTotal:(0,ee.f)(e.customerVatTotal)||0,expensesAmountCustomer:(0,ee.f)(e.customerExpensesTotal)||0},priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",manager:t,location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",scheduleDate:l,created:(0,et.f)(e.createdAt),status:e.status}:{id:`${n} ${e.number} ${a}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",ref:e.reference,...r?{}:{jobTotal:(0,ee.f)(e.customerVatTotal)||0,expensesAmountCustomer:(0,ee.f)(e.customerExpensesTotal)||0,supplierAmount:(0,ee.f)(e.supplierVatTotal)||0,expensesAmountSupplier:(0,ee.f)(e.supplierExpensesTotal)||0,revenue:(0,ee.f)(s)||0},priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",manager:t,location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",supplier:e.supplier?.name||"-",scheduleDate:l,created:(0,et.f)(e.createdAt),status:e.status}})};var ea=e.i(93198),er=e.i(889231),ei=e.i(360364),eo=e.i(624841),el=e.i(799083),es=e.i(152078),ed=e.i(683125),eu=e.i(740790),ec=e.i(514707),em=e.i(722394),ep=e.i(10945),ef=e.i(824451),eh=e.i(655477);let eg={customerId:null,endDate:null,slaId:null,locationId:null,sublocationId:null,managerId:null,tags:null,startDate:null,status:null,supplierId:null,userId:null,customerManager:null,customerManagerId:null,locationManager:null,locationManagerId:null,showCanceled:!1,q:null,id:null,meta:null,jobNumber:null,invoiceNumber:null,isChangedStatusSelect:null,noAssignToMeFilter:null},ex=e=>{let{filters:t,defaultFilters:n}=e,a=[];return(t.q||n.q)&&a.push({_or:[{reference:{_ilike:t.q||n.q}},{title:{_ilike:t.q||n.q}},{number:{_ilike:t.q||n.q}},{Invoices:{invoiceNumber:{_ilike:t.q||n.q}}}]}),(t.startDate||t.endDate||n.startDate||n.endDate)&&a.push({_or:[{_and:[{timingStart:{_gte:t.startDate||n.startDate}},{timingStart:{_lte:t.endDate||n.endDate}}]},{_and:[{scheduledAt:{_gte:t.startDate||n.startDate}},{scheduledAt:{_lte:t.endDate||n.endDate}}]}]}),(t.status?.length||n.status?.length)&&a.push({status:{_in:t.status||n.status}}),(t.customerId||n.customerId)&&a.push({customerId:{_eq:t.customerId||n.customerId}}),(t.supplierId||n.supplierId)&&a.push({supplierId:{_eq:t.supplierId||n.supplierId}}),(t.managerId||n.managerId)&&a.push({managerId:{_eq:t.managerId||n.managerId}}),(t.locationId||n.locationId)&&a.push({locationId:{_eq:t.locationId||n.locationId}}),(t.sublocationId||n.sublocationId)&&a.push({sublocationId:{_eq:t.sublocationId||n.sublocationId}}),(t.locationManagerId||n.locationManagerId)&&a.push({Location:{managerId:{_eq:t.locationManagerId||n.locationManagerId}}}),(t.userId||n.userId)&&a.push({_or:[{customerUserId:{_eq:t.userId||n.userId}},{supplierUserId:{_eq:t.userId||n.userId}}]}),(t.tags||n.tags)&&a.push({Taxonomy:{_and:[{entity:{_eq:"Job"}},{Taxonomy:{status:{_eq:"active"},_and:[{id:{_in:t.tags||n.tags}},{type:{_eq:"tags"}}]}}]}}),(t.showCanceled??n.showCanceled)||a.push({status:{_neq:"canceled"}}),{type:{_in:["reactive","ppm"]},_and:a}},eb=(e,t)=>t?e.map(e=>{if("amountOutstanding"in e){let{amountOutstanding:t}=e;return{amountOutstandingSupplier:t}}return e}):e;e.s(["P",0,eg,"m",0,eb,"N",0,ex],201609);var ev=e.i(827010),eI=e.i(851123);let ej=e=>{let{open:t=!1,close:a=()=>{},filterType:r="",setFilters:i=()=>{},initialFilters:o={...eg,filterType:""},filtersVisibilityModel:l={}}=e,{hasRole:d,user:c}=(0,x.f)(),{query:p}=(0,F.useRouter)(),[f,h]=(0,ep.f)({key:`form_data_issues_${r}`,initialValue:{...eg}}),{control:g,handleSubmit:b,register:v,reset:I,watch:j,getValues:y}=(0,s.G)({defaultValues:f}),C=j("locationId"),{customerValues:S,userValues:$,supplierValues:_,slaValues:N,sublocationValues:T,customerManagerValues:w,locationManagerValues:q,propertyValues:R}=(e=>{let{initialFilters:t,locationIdWatch:n}=e,{user:a}=(0,x.f)(),[r,i]=(0,A.useState)(""),[o,l]=(0,A.useState)(""),[s,d]=(0,A.useState)(""),[u,c]=(0,A.useState)(""),[m,p]=(0,A.useState)(""),[f,h]=(0,A.useState)(""),[g,b]=(0,A.useState)(""),[v,I]=(0,A.useState)(""),[j,{loading:y,data:{items:C}={items:[]}}]=(0,Y.f)(ev.Q,{fetchPolicy:"network-only",variables:{accountId:a.accountId,limit:50,offset:0,q:""!==s?`%${s}%`:null}}),[S,{loading:$,data:{items:_}={items:[]}}]=(0,Y.f)(ev.k,{fetchPolicy:"network-only",variables:{adminId:a.adminId,subtype:"reactive",limit:50,offset:0,q:""!==f?`%${f}%`:null}}),[N,{loading:T,data:{items:w}={items:[]}}]=(0,Y.f)(ev.r,{variables:{limit:50,offset:0,q:""!==u?`%${u}%`:null}}),[q,{loading:R,data:{items:E}={items:[]}}]=(0,Y.f)(eI.j,{variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:t.customerId}},name:{_ilike:""!==m?`%${m}%`:null}},limit:50,offset:0}}),[M,{loading:D,data:{items:k}={items:[]}}]=(0,Y.f)(ev.j,{variables:{locationId:n?.value,limit:50,offset:0,q:""!==g?`%${g}%`:null}}),[F,{loading:O,data:{items:W}={items:[]}}]=(0,Y.f)(ev.U,{variables:{where:{type:{_eq:"supplier"},name:{_ilike:""!==v?`%${v}%`:null}},limit:50,offset:0}}),[L,{data:{items:P}={items:[]},loading:V}]=(0,Y.f)(ev.O,{variables:{accountId:a.accountId,limit:50,offset:0,q:""!==r?`%${r}%`:null}}),[J,{data:{items:U}={items:[]},loading:B}]=(0,Y.f)(ev.Q,{variables:{accountId:a.adminId,limit:50,offset:0,q:""!==o?`%${o}%`:null}});return{customerManagerValues:{loading:V,onOpen:()=>L(),options:P,onSearchChange:i},locationManagerValues:{loading:B,onOpen:()=>J(),options:U,onSearchChange:l},userValues:{loading:y,onOpen:()=>j(),options:C,onSearchChange:d},customerValues:{loading:T,onOpen:()=>N(),options:w,onSearchChange:c},propertyValues:{loading:R,onOpen:()=>q(),options:E,onSearchChange:p},slaValues:{loading:$,onOpen:()=>S(),options:_,onSearchChange:h},sublocationValues:{loading:D,onOpen:()=>M(),options:k,onSearchChange:b},supplierValues:{loading:O,onOpen:()=>F(),options:W,onSearchChange:I}}})({initialFilters:o,locationIdWatch:C});(0,A.useEffect)(()=>{let e={filterType:o.filterType,customerId:f?.customerId?.value||null,endDate:f?.endDate||null,slaId:f?.slaId?.map(e=>{let{value:t}=e;return t})||null,locationId:f?.locationId?.value||null,sublocationId:f?.sublocationId?.value||null,managerId:f?.managerId?c.id:null,tags:f?.tags?.map(e=>{let{value:t}=e;return t})||null,startDate:f?.startDate||null,status:f?.status&&f?.status?.length>0?f.status.map(e=>{let{value:t}=e;return t}):null,supplierId:f.supplierId?.value||null,userId:f?.userId?.value||null,customerManagerId:f?.customerManager?.value||null,locationManagerId:f?.locationManager?.value||null,showCanceled:f?.showCanceled??!1,q:f?.q?`%${f.q}%`:null,id:f?.q&&"id"in o&&/^\d+$/.test(f.q)?Number(f.q):null,meta:f?.q&&"meta"in o&&/^\d+$/.test(f.q)?{invoiceNumbers:[f.q]}:null,jobNumber:f?.q&&"jobNumber"in o&&/^\d+$/.test(f.q)?String(f.q):null,invoiceNumber:f?.q&&"jobNumber"in o&&/^\d+$/.test(f.q)?Number(f.q):null,isChangedStatusSelect:!!f.status?.length||null};I({...f}),i(e)},[f,o,I,i,c.id]);let E=e=>{let t=!0;return e in l&&!l[e]&&(t=!1),t};return(0,n.jsx)(eC,{keepMounted:!0,open:t,onClose:a,sx:ey.modal,children:(0,n.jsx)("form",{onSubmit:b(()=>{try{let e=y();h(e)}finally{a()}}),children:(0,n.jsx)(eS,{children:(0,n.jsxs)(eu.f,{container:!0,rowSpacing:2,columnSpacing:2,children:[(0,n.jsx)(eu.f,{item:!0,xs:12,children:(0,n.jsx)(m.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:v})}),E("status")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"status",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{value:t||[],onChange:(e,t)=>a(t),multiple:!0,limitTags:1,label:"Select status",options:(0,Z.D)(p.show),variant:"standard",color:"secondary",fullWidth:!0})}})}),d(["supplier",...z.z])&&E("user")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"userId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{...$,value:t,onChange:(e,t)=>a(t),label:"Select user",variant:"standard",color:"secondary",fullWidth:!0})}})}),d("admin")&&E("tags")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(eh.f,{control:g})}),d("admin")&&E("customer")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"customerId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{...S,value:t,onChange:(e,t)=>a(t),label:"Select customer",variant:"standard",color:"secondary",fullWidth:!0})}})}),d(["admin","customer"])&&E("location")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"locationId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{...R,value:t,onChange:(e,t)=>a(t),label:"Select location",variant:"standard",color:"secondary",fullWidth:!0})}})}),d("admin")&&E("supplier")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"supplierId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{..._,value:t,onChange:(e,t)=>a(t),label:"Select supplier",variant:"standard",color:"secondary",fullWidth:!0})}})}),E("sla")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"slaId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{...N,multiple:!0,limitTags:1,value:t||[],onChange:(e,t)=>a(t),label:"Select priority",variant:"standard",color:"secondary",fullWidth:!0})}})}),C&&d("admin")&&E("sublocation")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"sublocationId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{...T,value:t,onChange:(e,t)=>a(t),label:"Select sublocation",variant:"standard",color:"secondary",fullWidth:!0})}})}),d([...z.f,...z.G])&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"locationManager",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{...q,value:t,onChange:(e,t)=>a(t),color:"secondary",variant:"standard",label:"Select location manager",fullWidth:!0})}})}),(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"startDate",control:g,render:e=>(0,n.jsx)(e$,{...e,label:"Start date",slotProps:{textField:{variant:"standard"}}})})}),(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"endDate",control:g,render:e=>(0,n.jsx)(e$,{...e,label:"End date",slotProps:{textField:{variant:"standard"}}})})}),d([...z.f])&&E("customerManager")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"customerManager",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ef.f,{...w,value:t,onChange:(e,t)=>a(t),color:"secondary",variant:"standard",label:"Select account manager",fullWidth:!0})}})}),d([...z.f,...z.z,...z.Q])&&E("manager")&&(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"managerId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(es.f,{control:(0,n.jsx)(el.f,{color:"secondary",checked:t,onChange:e=>a(e.target.checked)}),label:"Assigned to me"})}})}),(0,n.jsx)(eu.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(s.e,{name:"showCanceled",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(es.f,{control:(0,n.jsx)(el.f,{color:"secondary",checked:t,onChange:e=>a(e.target.checked)}),label:"Include canceled jobs"})}})}),(0,n.jsxs)(u.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:ey.bottomButtons,children:[(0,n.jsx)(M.f,{variant:"contained",color:"danger",onClick:()=>void(h({...eg}),a()),children:"Cancel"}),(0,n.jsx)(M.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})})},ey={modal:{width:"40%"},bottomButtons:{marginTop:"20px"}},eC=(0,ec.f)(ed.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),eS=(0,ec.f)(L.f)(()=>({padding:"24px",maxWidth:"700px",maxHeight:"100vh",overflowY:"scroll"})),e$=(0,ec.f)(em.f)(()=>({"&.MuiFormControl-root.MuiTextField-root":{width:"100%"}}));var e_=((t=e_||{}).Service="{'Service': {'name': 'ORDER'}}",t.SLA="{'SLA': {'name': 'ORDER'}}",t.Customer="{'Customer': {'name': 'ORDER'}}",t.Location="{'Location': {'name': 'ORDER'}}",t.LocationManager="{'Location': {'Manager': {'fullName': 'ORDER'}}}",t.Supplier="{'Supplier': {'name': 'ORDER'}}",t);let eN={width:"100%",height:"100%"},eT={padding:"16px 0px",height:"calc(80vh - 22px)"},ew={fontWeight:600,marginBottom:"15px"};e.s(["f",0,e=>{let{initialFilters:t,defaultFilters:r={},filtersVisibilityModel:i,columnVisibilityModel:o={}}=e,{user:l,hasRole:s}=(0,x.f)(),d=(0,H.f)(),m=d.admin.jobSetting?.jobNumberPrefix||"",p=d.admin.jobSetting?.jobNumberSuffix||"",{pathname:f}=(0,F.useRouter)(),[h,g]=(0,A.useState)(!1),[b,v]=(0,A.useState)({...t}),C=(0,ea.r)(),S=s("admin_user"),$=l.accountType===J.d.SUPPLIER,_=d.hasUserModule("finances"),N=(0,A.useMemo)(()=>l.accountType===J.d.SUPPLIER?G:B,[l.accountType]),T=s("admin")&&!S||s("customer")&&(!s("customer_user")||_)||S&&_,w=s("admin")&&!S||s(["supplier_owner","supplier_manager","supplier_user"])||s("supplier_contractor")&&_||S&&_,q=s("admin")&&(!S||_),R=(0,A.useRef)({numberPrefix:m,numberSuffix:p,accountType:l.accountType,omitFinancialColumnsFromExport:!1});R.current={numberPrefix:m,numberSuffix:p,accountType:l.accountType,omitFinancialColumnsFromExport:S&&!_};let{reference:E,pagination:k,order:U}=(0,D.f)(),ee=(0,A.useMemo)(()=>ex({filters:b,defaultFilters:r}),[b,r]),et=(0,A.useMemo)(()=>eb(U,$),[$,U]),{data:{jobs:el,meta:es}={jobs:[],meta:{aggregate:{totalCount:0}}},loading:ed}=(0,a.t)(N,{variables:{where:ee,...k,order:et}}),[eu,{loading:ec}]=(0,Y.f)(N,{variables:{where:ee,order:et},onCompleted:e=>{let t=R.current,n=en(e.jobs,t.accountType,{numberPrefix:t.numberPrefix,numberSuffix:t.numberSuffix,omitFinancialColumnsFromExport:t.omitFinancialColumnsFromExport}),a=e.jobs[0]?.id||"New-report",r="data:application/octet-stream,"+encodeURIComponent(O.default.unparse(n,{escapeFormulae:/^[=+@\t\r]/}));(0,X.f)(r,`${a}-work-orders.csv`)}}),em=(0,A.useCallback)(e=>{F.default.push(`/dashboard/issues/manage?id=${e.number}`)},[]),ep=(0,A.useCallback)(e=>{e?.number&&F.default.push(`/dashboard/issues/view?id=${e.number}`)},[]),ef=(0,A.useCallback)(e=>s("admin")?[{icon:"info",tooltip:"Info",onClick:()=>ep(e)},{icon:"edit",tooltip:"Edit",onClick:()=>em(e)}]:[{icon:"info",tooltip:"Info",onClick:()=>ep(e)}],[ep,em,s]),eh=(0,A.useMemo)(()=>[{headerName:"Job ID",field:"number",sortable:!0,flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(K.f,{id:t.id,number:t.number,openCanvas:!0,type:t.type,numberPrefix:m,numberSuffix:p})}},{headerName:"Invoice number",field:"invoiceNumber",sortable:!0,flex:1,minWidth:100},{headerName:"Reference",field:"ref",sortable:!1,flex:1,minWidth:100},{minWidth:300,field:"tags",headerName:"Tags",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(ei.f,{row:t,refetchQueries:["GetFinancialJob","GetFinancialJobSupplier"],entity:"Job"})}},{headerName:"Service",field:"{'Service': {'name': 'ORDER'}}",sortable:!0,flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return t.service}},{headerName:"Priority",field:"{'SLA': {'name': 'ORDER'}}",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return t.priority}},{headerName:"Customer",field:"{'Customer': {'name': 'ORDER'}}",minWidth:200,flex:1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(er.f,{color:"secondary",href:`/dashboard/customers/view?id=${t.customer?.id}`,noWrap:!t.customer,children:t.customer?.name||"-"})}},{headerName:"Location",field:"{'Location': {'name': 'ORDER'}}",minWidth:300,flex:1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(er.f,{color:"secondary",href:`/dashboard/properties/view?id=${t.location?.id}`,noWrap:!t.location||s(["supplier","tenant"]),children:t.location?.name||"-"})}},{minWidth:180,flex:1,field:"{'Location': {'Manager': {'fullName': 'ORDER'}}}",headerName:"Location Manager",renderCell:e=>{let{row:t}=e;return(0,n.jsx)(er.f,{noWrap:!t.location?.manager?.id,color:"secondary",href:`/dashboard/users/view?id=${t.location?.manager?.id}`,children:t.location?.manager?.fullName})}},{headerName:"Customer (NET)",field:"customerTotal",minWidth:150,sortable:!0,flex:1,renderCell:e=>{let{row:t}=e;return`\xa3${(+(t.customerNet??0)).toFixed(2)}`}},{headerName:"Amount Outstanding",field:"amountOutstanding",sortable:!0,minWidth:150,flex:1,valueFormatter:e=>`\xa3${(+(e??0)).toFixed(2)}`},{headerName:"Supplier (NET)",field:"supplierTotal",minWidth:150,sortable:!0,flex:1,renderCell:e=>{let{row:t}=e;return`\xa3${(+(t.supplierNet??0)).toFixed(2)}`}},{headerName:s("admin")?"Net Revenue":"Revenue",field:"revenue",minWidth:150,sortable:!0,flex:1,valueFormatter:e=>`\xa3${(+(e??0)).toFixed(2)}`},{headerName:"Scheduled",field:"scheduledAt",minWidth:130,flex:1},{headerName:"Created",field:"createdAt",flex:1,minWidth:100},{headerName:"Supplier",field:"{'Supplier': {'name': 'ORDER'}}",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(er.f,{color:"secondary",noWrap:!s("admin")||!t.supplier,href:`/dashboard/suppliers/view?id=${t.supplier?.id}`,children:t.supplier?.name||""})}},{headerName:"Status",field:"status",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(eo.f,{value:t.status})}},{headerName:"Actions",field:"actions",sortable:!1,minWidth:130,flex:1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(y.f,{actions:ef(t)})}}],[ef,s,m,p]),eg=(0,A.useMemo)(()=>el.map(e=>{let t=e.scheduledAt?(0,j.default)(e.scheduledAt).format("YYYY-MM-DD"):e.timingStart?(0,j.default)(e.timingStart).format("YYYY-MM-DD"):"-";return{id:e.id,jobId:`J ${e.number} `,type:e.type,number:e.number,invoiceNumber:e.invoiceNumber||"-",amountOutstanding:e.amountOutstanding??e.amountOutstandingSupplier??0,ref:e.reference||"-",description:e.description||"-",service:e.service?.name||"-",priority:e.sla?.name||"-",location:e?.location,customerNet:e?.customerTotal,supplierNet:e?.supplierTotal,supplier:e?.supplier,tags:e.tags,onSiteTimingEnd:e.onSiteTimingEnd,jobReportTimingEnd:e.jobReportTimingEnd,quoteReturnedTimingEnd:e.quoteReturnedTimingEnd,revenue:e.revenue||0,scheduledAt:t,customer:e?.customer,createdAt:(0,j.default)(e.createdAt).format("YYYY-MM-DD"),status:e.status}}),[el]),ev=(0,A.useCallback)(e=>{e.stopPropagation();let n=(0,Z.W)({...b,customerId:t.customerId,locationId:t.locationId});F.default.push(`/dashboard/issues/manage${n}`)},[b,t]),eI=(0,A.useMemo)(()=>({ref:s([...z.O]),"{'Service': {'name': 'ORDER'}}":s(["admin","customer"]),customerTotal:T,supplierTotal:w,revenue:q,"{'Supplier': {'name': 'ORDER'}}":s("admin"),tags:s("admin"),"{'Customer': {'name': 'ORDER'}}":f.includes("suppliers")&&s("admin"),"{'Location': {'Manager': {'fullName': 'ORDER'}}}":s(["admin","customer"]),...o}),[o,s,f,T,q,w]),ey=(0,A.useMemo)(()=>W.isEqual(b,t)?{title:"No work orders",subtitleFirstLine:"You currently have no work orders set up in the system",subtitleSecondLine:"Click create work orders to get started building.",buttonText:"Create work orders",onAction:ev}:{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."},[b,ev,t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ej,{open:h,close:()=>g(!1),initialFilters:t,filterType:t.filterType,setFilters:v,filtersVisibilityModel:i}),(0,n.jsxs)(u.f,{spacing:2,sx:eN,children:[(0,n.jsxs)(u.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,n.jsx)(M.f,{variant:"contained",startIcon:(0,n.jsx)(V.default,{}),onClick:()=>g(!0),children:"Filters"}),(0,n.jsxs)(u.f,{direction:"row",spacing:2,children:[!s(["supplier","tenant"])&&(0,n.jsx)(M.f,{variant:"contained",color:"secondary",onClick:ev,children:"Create Work Order"}),!C&&(0,n.jsx)(M.f,{startIcon:!ec&&(0,n.jsx)("img",{src:"/static/icons/csv.svg"}),disabled:ec,variant:"contained",color:"success",onClick:e=>{e.stopPropagation(),eu()},children:ec?(0,n.jsx)(P.f,{size:20,color:"secondary"}):"Export"})]})]}),(0,n.jsxs)(L.f,{sx:eT,children:[(0,n.jsx)(c.f,{ml:2,variant:"h5",sx:ew,children:"Work Orders"}),(eg?.length||ed)&&(0,n.jsx)(I.s,{...E,loading:ed,columns:eh,rows:eg,totalCount:es?.aggregate?.totalCount,columnVisibilityModel:eI,autoHeight:!1,onRowClick:e=>ep(e.row),containerHeight:"calc(100% - 52px)"}),!eg?.length&&!ed&&(0,n.jsx)(Q.f,{imageSrc:"/static/icons/no_locations_found.svg",...ey})]})]})]})}],642546)},659587,(e,t,n)=>{var a=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e.r(421506)),i=e.r(391398);n.default=(0,r.default)((0,i.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")}])})();