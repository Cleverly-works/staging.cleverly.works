(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,938504,e=>{let t=e=>String(e).padStart(2,"0");e.s(["f",0,function(e){let n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=new Date(e),r=`${a.getFullYear()}-${t(a.getMonth()+1)}-${t(a.getDate())}`;return n?`${r} ${t(a.getHours())}:${t(a.getMinutes())}`:r}])},681700,201609,642546,e=>{var t,n=e.i(391398),a=e.i(432171),r=e.i(159080);let o=r.f`
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
`,i=r.f`
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
`,s=r.f`
  mutation UpdateNote($id: Int!, $change: Note_set_input) {
    update_Note_by_pk(pk_columns: { id: $id }, _set: $change) {
      id
      comments
    }
  }
`;var l=e.i(422411),d=e.i(424894),u=e.i(813843),c=e.i(115871),m=e.i(652148),p=e.i(426778);let f=(0,p.t)().shape({comments:(0,p.x)().required()});var h=e.i(776204),g=e.i(21557),b=e.i(594301);let x=e=>{let{defaultValues:t,refetchQueries:a,noteId:r,entity:o,entityId:p,close:x}=e,I=(0,g.f)(),{user:y}=(0,b.f)(),{errors:j,handleSubmit:$,register:C}=(0,l.G)({defaultValues:{...t},resolver:(0,d.yupResolver)(f)}),[S]=(0,h.f)(i,{refetchQueries:a,onCompleted:()=>{I.show({content:"Note added successfully",severity:"success"}),x()},onError:e=>{I.show({content:`Error: ${e.message}`,severity:"error"})}}),[_]=(0,h.f)(s,{refetchQueries:a,onCompleted:()=>{I.show({content:"Note updated successfully",severity:"success"}),x()},onError:e=>{I.show({content:`Error: ${e.message}`,severity:"error"})}}),T=async e=>{r?await _({variables:{id:r,change:{...e,accountId:y.accountId,userId:y.id}}}):await S({variables:{accountId:y.accountId,comments:e.comments,entity:o,entityId:p,userId:y.id}})};return(0,n.jsx)("form",{id:"offCanvasForm",onSubmit:$(T),children:(0,n.jsxs)(u.f,{marginBottom:3,children:[(0,n.jsx)(c.f,{sx:{...v.title,marginBottom:2},children:"Title"}),(0,n.jsx)(m.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",placeholder:"Comments",name:"comments",inputRef:C,error:!!j.comments,helperText:j.comments?.message})]})})},v={title:{fontSize:"16px",fontWeight:300,marginBottom:"15px",color:"gray"}};var I=e.i(74633),y=e.i(362537),j=e.i(497844),$=e.i(285835);let C=e=>{let{note:t=[],loading:a,handleClick:r,userId:o,reference:i}=e,s=[{field:"comments",headerName:"Title",flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(u.f,{direction:"row",overflow:"auto",height:"100%",paddingTop:2,children:(0,n.jsx)(u.f,{overflow:"auto",children:(0,n.jsx)($.f,{maxLength:10,children:t.comments})})})}},{field:"user",headerName:"By",flex:1,sortable:!1},{field:"date",headerName:"Created",flex:1,sortable:!1},{field:"actions",headerName:"",width:50,sortable:!1,renderCell:e=>{let{row:t}=e;return o===t.userId?(0,n.jsx)(j.f,{actions:[{icon:"edit",onClick:e=>{e.stopPropagation(),r(e,t)},tooltip:"Edit"}]}):null}}];return(0,n.jsx)(I.s,{...i,columns:s,loading:a,rows:t.map(e=>({id:e.id,userId:e.userId,comments:e.comments,user:`${e.user?.nameFirst} ${e.user?.nameLast}`,date:(0,y.default)(e.createdAt).format("DD/MM/YYYY"),actions:""})),autoHeight:!0})};var S=e.i(411331),_=e.i(871931),T=e.i(760981),w=e.i(302966),N=e.i(886779),q=e.i(356119),R=e.i(747112),E=e.i(280445),M=e.i(755548),D=e.i(122965);let F=(0,E.f)(_.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{entity:t,entityId:r,title:i="Note"}=e,s=(0,S.f)(),{user:l}=(0,b.f)(),{reference:d,pagination:u}=(0,D.f)({initialSort:[{item:"createdAt",order:"desc"}]}),{loading:c,data:{note:m}={note:[]}}=(0,a.t)(o,{variables:{entity:t,entityId:r,...u},skip:!r}),p=(e,a)=>{e.preventDefault(),e.stopPropagation();let o={...a};s.show({content:(0,n.jsx)(x,{defaultValues:o,noteId:a?.id,entity:t,entityId:r,close:s.close,refetchQueries:["GetNotes"]}),title:a?.id?"Edit note":"Add note"})};return(0,n.jsxs)(F,{defaultExpanded:!0,children:[(0,n.jsx)(w.f,{expandIcon:(0,n.jsx)(R.f,{}),children:(0,n.jsx)(N.f,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",pr:1,children:(0,n.jsx)(q.f,{typography:"h6",children:i})})}),(0,n.jsxs)(T.f,{sx:{pt:0},children:[(0,n.jsx)(C,{note:m,reference:d,loading:c,handleClick:p,userId:l.id}),(0,n.jsx)(()=>(0,n.jsx)(N.f,{width:"100%",pt:2,justifyContent:"center",alignItems:"center",children:(0,n.jsx)(M.f,{variant:"contained",color:"secondary",onClick:e=>p(e),size:"small",children:"Add"})}),{})]})]})}],681700);var A=e.i(191788),k=e.i(203828),O=e.i(472552),W=e.i(443103),L=e.i(88152),P=e.i(76381),J=e.i(891723),V=e.i(877341),Y=e.i(890350);let U=`
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
      meta: clientMeta
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
`,G=r.f`
  query GetFinancialJob($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      amountOutstanding
      revenue
      customerTotal: customerFinances(path: "amountInfo.total")
      supplierTotal: supplierFinances(path: "amountInfo.total")
      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")
      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")
      customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")
      supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")
      customerRebateAmount: customerFinances(path: "rebate.amount")
      ${U}
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,B=r.f`
  query GetFinancialJobCustomer($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      amountOutstanding
      customerTotal
      customerVatTotal
      customerExpensesTotal
      ${U}
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,z=r.f`
  query GetFinancialJobSupplier($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      amountOutstandingSupplier
      supplierTotal
      ${U}
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,H=["GetFinancialJob","GetFinancialJobCustomer","GetFinancialJobSupplier"];var Q=e.i(948574),K=e.i(498681),X=e.i(218659),Z=e.i(529422),ee=e.i(60903),et=e.i(951510),en=e.i(879436),ea=e.i(938504);let er=e=>void 0!==e&&Number.isFinite(Number(e))?(0,en.f)(e):"-",eo=function(e,t){let{numberPrefix:n="",numberSuffix:a="",omitFinancialColumnsFromExport:r=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o="customer"===t||"tenant"===t,i="supplier"===t;return e.map(e=>{let t=e.manager?`${e.manager.nameFirst} ${e.manager.nameLast}`:"Unassigned",s=e.scheduledAt?(0,ea.f)(e.scheduledAt,!0):e.timingStart?(0,ea.f)(e.timingStart,!0):"-",l=e.customerRebateAmount>0?e.customerVatTotal-e.customerRebateAmount-e.supplierTotal:e.customerTotal-e.supplierTotal;return i?{id:`${n} ${e.number} ${a}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",scheduleDate:s,created:(0,ea.f)(e.createdAt),status:e.status}:o?{id:`${n} ${e.number} ${a}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",ref:e.reference,...r?{}:{jobTotal:er(e.customerVatTotal),expensesAmountCustomer:er(e.customerExpensesTotal)},priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",manager:t,location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",scheduleDate:s,created:(0,ea.f)(e.createdAt),status:e.status}:{id:`${n} ${e.number} ${a}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",ref:e.reference,...r?{}:{jobTotal:er(e.customerVatTotal),expensesAmountCustomer:er(e.customerExpensesTotal),supplierAmount:er(e.supplierVatTotal),expensesAmountSupplier:er(e.supplierExpensesTotal),revenue:er(l)},priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",manager:t,location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",supplier:e.supplier?.name||"-",scheduleDate:s,created:(0,ea.f)(e.createdAt),status:e.status}})};var ei=e.i(93198),es=e.i(889231),el=e.i(360364),ed=e.i(624841),eu=e.i(799083),ec=e.i(152078),em=e.i(683125),ep=e.i(740790),ef=e.i(514707),eh=e.i(722394),eg=e.i(10945),eb=e.i(824451),ex=e.i(655477);let ev={customerId:null,endDate:null,slaId:null,locationId:null,sublocationId:null,managerId:null,tags:null,startDate:null,status:null,supplierId:null,userId:null,customerManager:null,customerManagerId:null,locationManager:null,locationManagerId:null,showCanceled:!1,q:null,id:null,meta:null,jobNumber:null,invoiceNumber:null,isChangedStatusSelect:null,noAssignToMeFilter:null},eI=e=>{let{filters:t,defaultFilters:n}=e,a=[];return(t.q||n.q)&&a.push({_or:[{reference:{_ilike:t.q||n.q}},{title:{_ilike:t.q||n.q}},{number:{_ilike:t.q||n.q}},{Invoices:{invoiceNumber:{_ilike:t.q||n.q}}}]}),(t.startDate||t.endDate||n.startDate||n.endDate)&&a.push({_or:[{_and:[{timingStart:{_gte:t.startDate||n.startDate}},{timingStart:{_lte:t.endDate||n.endDate}}]},{_and:[{scheduledAt:{_gte:t.startDate||n.startDate}},{scheduledAt:{_lte:t.endDate||n.endDate}}]}]}),(t.status?.length||n.status?.length)&&a.push({status:{_in:t.status||n.status}}),(t.customerId||n.customerId)&&a.push({customerId:{_eq:t.customerId||n.customerId}}),(t.supplierId||n.supplierId)&&a.push({supplierId:{_eq:t.supplierId||n.supplierId}}),(t.managerId||n.managerId)&&a.push({managerId:{_eq:t.managerId||n.managerId}}),(t.locationId||n.locationId)&&a.push({locationId:{_eq:t.locationId||n.locationId}}),(t.sublocationId||n.sublocationId)&&a.push({sublocationId:{_eq:t.sublocationId||n.sublocationId}}),(t.locationManagerId||n.locationManagerId)&&a.push({Location:{managerId:{_eq:t.locationManagerId||n.locationManagerId}}}),(t.userId||n.userId)&&a.push({_or:[{customerUserId:{_eq:t.userId||n.userId}},{supplierUserId:{_eq:t.userId||n.userId}}]}),(t.tags||n.tags)&&a.push({Taxonomy:{_and:[{entity:{_eq:"Job"}},{Taxonomy:{status:{_eq:"active"},_and:[{id:{_in:t.tags||n.tags}},{type:{_eq:"tags"}}]}}]}}),(t.showCanceled??n.showCanceled)||a.push({status:{_neq:"canceled"}}),{type:{_in:["reactive","ppm"]},_and:a}},ey=(e,t)=>t?e.map(e=>{if("amountOutstanding"in e){let{amountOutstanding:t}=e;return{amountOutstandingSupplier:t}}return e}):e;e.s(["P",0,ev,"m",0,ey,"N",0,eI],201609);var ej=e.i(827010),e$=e.i(851123);let eC=e=>{let{open:t=!1,close:a=()=>{},filterType:r="",setFilters:o=()=>{},initialFilters:i={...ev,filterType:""},filtersVisibilityModel:s={}}=e,{hasRole:d,user:c}=(0,b.f)(),{query:p}=(0,k.useRouter)(),[f,h]=(0,eg.f)({key:`form_data_issues_${r}`,initialValue:{...ev}}),{control:g,handleSubmit:x,register:v,reset:I,watch:y,getValues:j}=(0,l.G)({defaultValues:f}),$=y("locationId"),{customerValues:C,userValues:S,supplierValues:_,slaValues:T,sublocationValues:w,customerManagerValues:N,locationManagerValues:q,propertyValues:R}=(e=>{let{initialFilters:t,locationIdWatch:n}=e,{user:a}=(0,b.f)(),[r,o]=(0,A.useState)(""),[i,s]=(0,A.useState)(""),[l,d]=(0,A.useState)(""),[u,c]=(0,A.useState)(""),[m,p]=(0,A.useState)(""),[f,h]=(0,A.useState)(""),[g,x]=(0,A.useState)(""),[v,I]=(0,A.useState)(""),[y,{loading:j,data:{items:$}={items:[]}}]=(0,V.f)(ej.Q,{fetchPolicy:"network-only",variables:{accountId:a.accountId,limit:50,offset:0,q:""!==l?`%${l}%`:null}}),[C,{loading:S,data:{items:_}={items:[]}}]=(0,V.f)(ej.k,{fetchPolicy:"network-only",variables:{adminId:a.adminId,subtype:"reactive",limit:50,offset:0,q:""!==f?`%${f}%`:null}}),[T,{loading:w,data:{items:N}={items:[]}}]=(0,V.f)(ej.r,{variables:{limit:50,offset:0,q:""!==u?`%${u}%`:null}}),[q,{loading:R,data:{items:E}={items:[]}}]=(0,V.f)(e$.j,{variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:t.customerId}},name:{_ilike:""!==m?`%${m}%`:null}},limit:50,offset:0}}),[M,{loading:D,data:{items:F}={items:[]}}]=(0,V.f)(ej.j,{variables:{locationId:n?.value,limit:50,offset:0,q:""!==g?`%${g}%`:null}}),[k,{loading:O,data:{items:W}={items:[]}}]=(0,V.f)(ej.U,{variables:{where:{type:{_eq:"supplier"},name:{_ilike:""!==v?`%${v}%`:null}},limit:50,offset:0}}),[L,{data:{items:P}={items:[]},loading:J}]=(0,V.f)(ej.O,{variables:{accountId:a.accountId,limit:50,offset:0,q:""!==r?`%${r}%`:null}}),[Y,{data:{items:U}={items:[]},loading:G}]=(0,V.f)(ej.Q,{variables:{accountId:a.adminId,limit:50,offset:0,q:""!==i?`%${i}%`:null}});return{customerManagerValues:{loading:J,onOpen:()=>L(),options:P,onSearchChange:o},locationManagerValues:{loading:G,onOpen:()=>Y(),options:U,onSearchChange:s},userValues:{loading:j,onOpen:()=>y(),options:$,onSearchChange:d},customerValues:{loading:w,onOpen:()=>T(),options:N,onSearchChange:c},propertyValues:{loading:R,onOpen:()=>q(),options:E,onSearchChange:p},slaValues:{loading:S,onOpen:()=>C(),options:_,onSearchChange:h},sublocationValues:{loading:D,onOpen:()=>M(),options:F,onSearchChange:x},supplierValues:{loading:O,onOpen:()=>k(),options:W,onSearchChange:I}}})({initialFilters:i,locationIdWatch:$});(0,A.useEffect)(()=>{let e={filterType:i.filterType,customerId:f?.customerId?.value||null,endDate:f?.endDate||null,slaId:f?.slaId?.map(e=>{let{value:t}=e;return t})||null,locationId:f?.locationId?.value||null,sublocationId:f?.sublocationId?.value||null,managerId:f?.managerId?c.id:null,tags:f?.tags?.map(e=>{let{value:t}=e;return t})||null,startDate:f?.startDate||null,status:f?.status&&f?.status?.length>0?f.status.map(e=>{let{value:t}=e;return t}):null,supplierId:f.supplierId?.value||null,userId:f?.userId?.value||null,customerManagerId:f?.customerManager?.value||null,locationManagerId:f?.locationManager?.value||null,showCanceled:f?.showCanceled??!1,q:f?.q?`%${f.q}%`:null,id:f?.q&&"id"in i&&/^\d+$/.test(f.q)?Number(f.q):null,meta:f?.q&&"meta"in i&&/^\d+$/.test(f.q)?{invoiceNumbers:[f.q]}:null,jobNumber:f?.q&&"jobNumber"in i&&/^\d+$/.test(f.q)?String(f.q):null,invoiceNumber:f?.q&&"jobNumber"in i&&/^\d+$/.test(f.q)?Number(f.q):null,isChangedStatusSelect:!!f.status?.length||null};I({...f}),o(e)},[f,i,I,o,c.id]);let E=e=>{let t=!0;return e in s&&!s[e]&&(t=!1),t};return(0,n.jsx)(e_,{keepMounted:!0,open:t,onClose:a,sx:eS.modal,children:(0,n.jsx)("form",{onSubmit:x(()=>{try{let e=j();h(e)}finally{a()}}),children:(0,n.jsx)(eT,{children:(0,n.jsxs)(ep.f,{container:!0,rowSpacing:2,columnSpacing:2,children:[(0,n.jsx)(ep.f,{item:!0,xs:12,children:(0,n.jsx)(m.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:v})}),E("status")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"status",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{value:t||[],onChange:(e,t)=>a(t),multiple:!0,limitTags:1,label:"Select status",options:(0,et.D)(p.show),variant:"standard",color:"secondary",fullWidth:!0})}})}),d(["supplier",...Q.z])&&E("user")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"userId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{...S,value:t,onChange:(e,t)=>a(t),label:"Select user",variant:"standard",color:"secondary",fullWidth:!0})}})}),d("admin")&&E("tags")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(ex.f,{control:g})}),d("admin")&&E("customer")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"customerId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{...C,value:t,onChange:(e,t)=>a(t),label:"Select customer",variant:"standard",color:"secondary",fullWidth:!0})}})}),d(["admin","customer"])&&E("location")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"locationId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{...R,value:t,onChange:(e,t)=>a(t),label:"Select location",variant:"standard",color:"secondary",fullWidth:!0})}})}),d("admin")&&E("supplier")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"supplierId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{..._,value:t,onChange:(e,t)=>a(t),label:"Select supplier",variant:"standard",color:"secondary",fullWidth:!0})}})}),E("sla")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"slaId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{...T,multiple:!0,limitTags:1,value:t||[],onChange:(e,t)=>a(t),label:"Select priority",variant:"standard",color:"secondary",fullWidth:!0})}})}),$&&d("admin")&&E("sublocation")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"sublocationId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{...w,value:t,onChange:(e,t)=>a(t),label:"Select sublocation",variant:"standard",color:"secondary",fullWidth:!0})}})}),d([...Q.f,...Q.G])&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"locationManager",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{...q,value:t,onChange:(e,t)=>a(t),color:"secondary",variant:"standard",label:"Select location manager",fullWidth:!0})}})}),(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"startDate",control:g,render:e=>(0,n.jsx)(ew,{...e,label:"Start date",slotProps:{textField:{variant:"standard"}}})})}),(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"endDate",control:g,render:e=>(0,n.jsx)(ew,{...e,label:"End date",slotProps:{textField:{variant:"standard"}}})})}),d([...Q.f])&&E("customerManager")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"customerManager",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(eb.f,{...N,value:t,onChange:(e,t)=>a(t),color:"secondary",variant:"standard",label:"Select account manager",fullWidth:!0})}})}),d([...Q.f,...Q.z,...Q.Q])&&E("manager")&&(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"managerId",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ec.f,{control:(0,n.jsx)(eu.f,{color:"secondary",checked:t,onChange:e=>a(e.target.checked)}),label:"Assigned to me"})}})}),(0,n.jsx)(ep.f,{item:!0,xs:12,md:6,children:(0,n.jsx)(l.e,{name:"showCanceled",control:g,render:e=>{let{value:t,onChange:a}=e;return(0,n.jsx)(ec.f,{control:(0,n.jsx)(eu.f,{color:"secondary",checked:t,onChange:e=>a(e.target.checked)}),label:"Include canceled jobs"})}})}),(0,n.jsxs)(u.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:eS.bottomButtons,children:[(0,n.jsx)(M.f,{variant:"contained",color:"danger",onClick:()=>void(h({...ev}),a()),children:"Cancel"}),(0,n.jsx)(M.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})})},eS={modal:{width:"40%"},bottomButtons:{marginTop:"20px"}},e_=(0,ef.f)(em.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),eT=(0,ef.f)(L.f)(()=>({padding:"24px",maxWidth:"700px",maxHeight:"100vh",overflowY:"scroll"})),ew=(0,ef.f)(eh.f)(()=>({"&.MuiFormControl-root.MuiTextField-root":{width:"100%"}}));var eN=((t=eN||{}).Service="{'Service': {'name': 'ORDER'}}",t.SLA="{'SLA': {'name': 'ORDER'}}",t.Customer="{'Customer': {'name': 'ORDER'}}",t.Location="{'Location': {'name': 'ORDER'}}",t.LocationManager="{'Location': {'Manager': {'fullName': 'ORDER'}}}",t.Supplier="{'Supplier': {'name': 'ORDER'}}",t);let eq={width:"100%",height:"100%"},eR={padding:"16px 0px",height:"calc(80vh - 22px)"},eE={fontWeight:600,marginBottom:"15px"};e.s(["f",0,e=>{let{initialFilters:t,defaultFilters:r={},filtersVisibilityModel:o,columnVisibilityModel:i={}}=e,{user:s,hasRole:l}=(0,b.f)(),d=(0,K.f)(),m=d.admin.jobSetting?.jobNumberPrefix||"",p=d.admin.jobSetting?.jobNumberSuffix||"",{pathname:f}=(0,k.useRouter)(),[h,g]=(0,A.useState)(!1),[x,v]=(0,A.useState)({...t}),$=(0,ei.r)(),C=l("admin_user"),S=s.accountType===Y.d.SUPPLIER,_=d.hasUserModule("finances"),T=(0,A.useMemo)(()=>(e=>{switch(e){case Y.d.ADMIN:return G;case Y.d.SUPPLIER:return z;default:return B}})(s.accountType),[s.accountType]),w=l("admin")&&!C||l("customer")&&(!l("customer_user")||_)||C&&_,N=l("admin")&&!C||l(["supplier_owner","supplier_manager","supplier_user"])||l("supplier_contractor")&&_||C&&_,q=l("admin")&&(!C||_),R=(0,A.useRef)({numberPrefix:m,numberSuffix:p,accountType:s.accountType,omitFinancialColumnsFromExport:!1});R.current={numberPrefix:m,numberSuffix:p,accountType:s.accountType,omitFinancialColumnsFromExport:C&&!_};let{reference:E,pagination:F,order:U}=(0,D.f)(),en=(0,A.useMemo)(()=>eI({filters:x,defaultFilters:r}),[x,r]),ea=(0,A.useMemo)(()=>ey(U,S),[S,U]),{data:{jobs:er,meta:eu}={jobs:[],meta:{aggregate:{totalCount:0}}},loading:ec}=(0,a.t)(T,{variables:{where:en,...F,order:ea}}),[em,{loading:ep}]=(0,V.f)(T,{variables:{where:en,order:ea},onCompleted:e=>{let t=R.current,n=eo(e.jobs,t.accountType,{numberPrefix:t.numberPrefix,numberSuffix:t.numberSuffix,omitFinancialColumnsFromExport:t.omitFinancialColumnsFromExport}),a=e.jobs[0]?.id||"New-report",r="data:application/octet-stream,"+encodeURIComponent(O.default.unparse(n,{escapeFormulae:/^[=+@\t\r]/}));(0,ee.f)(r,`${a}-work-orders.csv`)}}),ef=(0,A.useCallback)(e=>{k.default.push(`/dashboard/issues/manage?id=${e.number}`)},[]),eh=(0,A.useCallback)(e=>{e?.number&&k.default.push(`/dashboard/issues/view?id=${e.number}`)},[]),eg=(0,A.useCallback)(e=>l("admin")?[{icon:"info",tooltip:"Info",onClick:()=>eh(e)},{icon:"edit",tooltip:"Edit",onClick:()=>ef(e)}]:[{icon:"info",tooltip:"Info",onClick:()=>eh(e)}],[eh,ef,l]),eb=(0,A.useMemo)(()=>[{headerName:"Job ID",field:"number",sortable:!0,flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(Z.f,{id:t.id,number:t.number,openCanvas:!0,type:t.type,numberPrefix:m,numberSuffix:p})}},{headerName:"Invoice number",field:"invoiceNumber",sortable:!0,flex:1,minWidth:100},{headerName:"Reference",field:"ref",sortable:!1,flex:1,minWidth:100},{minWidth:300,field:"tags",headerName:"Tags",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(el.f,{row:t,refetchQueries:H,entity:"Job"})}},{headerName:"Service",field:"{'Service': {'name': 'ORDER'}}",sortable:!0,flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return t.service}},{headerName:"Priority",field:"{'SLA': {'name': 'ORDER'}}",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return t.priority}},{headerName:"Customer",field:"{'Customer': {'name': 'ORDER'}}",minWidth:200,flex:1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(es.f,{color:"secondary",href:`/dashboard/customers/view?id=${t.customer?.id}`,noWrap:!t.customer,children:t.customer?.name||"-"})}},{headerName:"Location",field:"{'Location': {'name': 'ORDER'}}",minWidth:300,flex:1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(es.f,{color:"secondary",href:`/dashboard/properties/view?id=${t.location?.id}`,noWrap:!t.location||l(["supplier","tenant"]),children:t.location?.name||"-"})}},{minWidth:180,flex:1,field:"{'Location': {'Manager': {'fullName': 'ORDER'}}}",headerName:"Location Manager",renderCell:e=>{let{row:t}=e;return(0,n.jsx)(es.f,{noWrap:!t.location?.manager?.id,color:"secondary",href:`/dashboard/users/view?id=${t.location?.manager?.id}`,children:t.location?.manager?.fullName})}},{headerName:"Customer (NET)",field:"customerTotal",minWidth:150,sortable:!0,flex:1,renderCell:e=>{let{row:t}=e;return`\xa3${(+(t.customerNet??0)).toFixed(2)}`}},{headerName:"Amount Outstanding",field:"amountOutstanding",sortable:!0,minWidth:150,flex:1,valueFormatter:e=>`\xa3${(+(e??0)).toFixed(2)}`},{headerName:"Supplier (NET)",field:"supplierTotal",minWidth:150,sortable:!0,flex:1,renderCell:e=>{let{row:t}=e;return`\xa3${(+(t.supplierNet??0)).toFixed(2)}`}},{headerName:l("admin")?"Net Revenue":"Revenue",field:"revenue",minWidth:150,sortable:!0,flex:1,valueFormatter:e=>`\xa3${(+(e??0)).toFixed(2)}`},{headerName:"Scheduled",field:"scheduledAt",minWidth:130,flex:1},{headerName:"Created",field:"createdAt",flex:1,minWidth:100},{headerName:"Supplier",field:"{'Supplier': {'name': 'ORDER'}}",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(es.f,{color:"secondary",noWrap:!l("admin")||!t.supplier,href:`/dashboard/suppliers/view?id=${t.supplier?.id}`,children:t.supplier?.name||""})}},{headerName:"Status",field:"status",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(ed.f,{value:t.status})}},{headerName:"Actions",field:"actions",sortable:!1,minWidth:130,flex:1,renderCell:e=>{let{row:t}=e;return(0,n.jsx)(j.f,{actions:eg(t)})}}],[eg,l,m,p]),ex=(0,A.useMemo)(()=>er.map(e=>{let t=e.scheduledAt?(0,y.default)(e.scheduledAt).format("YYYY-MM-DD"):e.timingStart?(0,y.default)(e.timingStart).format("YYYY-MM-DD"):"-";return{id:e.id,jobId:`J ${e.number} `,type:e.type,number:e.number,invoiceNumber:e.invoiceNumber||"-",amountOutstanding:e.amountOutstanding??e.amountOutstandingSupplier??0,ref:e.reference||"-",description:e.description||"-",service:e.service?.name||"-",priority:e.sla?.name||"-",location:e?.location,customerNet:e?.customerTotal,supplierNet:e?.supplierTotal,supplier:e?.supplier,tags:e.tags,onSiteTimingEnd:e.onSiteTimingEnd,jobReportTimingEnd:e.jobReportTimingEnd,quoteReturnedTimingEnd:e.quoteReturnedTimingEnd,revenue:e.revenue||0,scheduledAt:t,customer:e?.customer,createdAt:(0,y.default)(e.createdAt).format("YYYY-MM-DD"),status:e.status}}),[er]),ev=(0,A.useCallback)(e=>{e.stopPropagation();let n=(0,et.W)({...x,customerId:t.customerId,locationId:t.locationId});k.default.push(`/dashboard/issues/manage${n}`)},[x,t]),ej=(0,A.useMemo)(()=>({ref:l([...Q.O]),"{'Service': {'name': 'ORDER'}}":l(["admin","customer"]),customerTotal:w,supplierTotal:N,revenue:q,"{'Supplier': {'name': 'ORDER'}}":l("admin"),tags:l("admin"),"{'Customer': {'name': 'ORDER'}}":f.includes("suppliers")&&l("admin"),"{'Location': {'Manager': {'fullName': 'ORDER'}}}":l(["admin","customer"]),...i,...Object.fromEntries((e=>{switch(e){case Y.d.ADMIN:return[];case Y.d.SUPPLIER:return["customerTotal","revenue"];default:return["supplierTotal","revenue"]}})(s.accountType).map(e=>[e,!1]))}),[i,l,f,w,q,N,s.accountType]),e$=(0,A.useMemo)(()=>W.isEqual(x,t)?{title:"No work orders",subtitleFirstLine:"You currently have no work orders set up in the system",subtitleSecondLine:"Click create work orders to get started building.",buttonText:"Create work orders",onAction:ev}:{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."},[x,ev,t]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(eC,{open:h,close:()=>g(!1),initialFilters:t,filterType:t.filterType,setFilters:v,filtersVisibilityModel:o}),(0,n.jsxs)(u.f,{spacing:2,sx:eq,children:[(0,n.jsxs)(u.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,n.jsx)(M.f,{variant:"contained",startIcon:(0,n.jsx)(J.default,{}),onClick:()=>g(!0),children:"Filters"}),(0,n.jsxs)(u.f,{direction:"row",spacing:2,children:[!l(["supplier","tenant"])&&(0,n.jsx)(M.f,{variant:"contained",color:"secondary",onClick:ev,children:"Create Work Order"}),!$&&(0,n.jsx)(M.f,{startIcon:!ep&&(0,n.jsx)("img",{src:"/static/icons/csv.svg"}),disabled:ep,variant:"contained",color:"success",onClick:e=>{e.stopPropagation(),em()},children:ep?(0,n.jsx)(P.f,{size:20,color:"secondary"}):"Export"})]})]}),(0,n.jsxs)(L.f,{sx:eR,children:[(0,n.jsx)(c.f,{ml:2,variant:"h5",sx:eE,children:"Work Orders"}),(ex?.length||ec)&&(0,n.jsx)(I.s,{...E,loading:ec,columns:eb,rows:ex,totalCount:eu?.aggregate?.totalCount,columnVisibilityModel:ej,autoHeight:!1,onRowClick:e=>eh(e.row),containerHeight:"calc(100% - 52px)"}),!ex?.length&&!ec&&(0,n.jsx)(X.f,{imageSrc:"/static/icons/no_locations_found.svg",...e$})]})]})]})}],642546)},659587,(e,t,n)=>{var a=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")}])})();