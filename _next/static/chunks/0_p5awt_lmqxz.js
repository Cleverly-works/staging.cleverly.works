(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[394989,e=>{var t=e.i(391398),i=e.i(191788),l=e.i(773831),r=e.i(813843),n=e.i(115871),o=e.i(322135),a=e.i(148310),s=e.i(889231),d=e.i(422411),c=e.i(424894),f=e.i(755548),u=e.i(652148),h=e.i(376733),p=e.i(978319),x=e.i(426778);let m=x.t({name:x.x().required("Name is required"),url:x.x().url().required("URL is required")}),v=e=>{let{noEdit:n=!1,noDelete:a=!1,isAdded:x=!1,id:v,url:j="",name:b="",onSave:g=()=>{},onCancel:w=()=>{},onDelete:I=()=>{}}=e,[y,C]=(0,i.useState)(x),{control:k,handleSubmit:_,errors:S}=(0,d.G)({resolver:(0,c.yupResolver)(m)});return(0,t.jsx)("form",{children:y?(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{spacing:1,children:[(0,t.jsx)(d.e,{control:k,name:"name",defaultValue:b,render:e=>(0,t.jsx)(u.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!S.name,helperText:S.name?.message})}),(0,t.jsx)(d.e,{control:k,name:"url",defaultValue:j,render:e=>(0,t.jsx)(u.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!S.url,helperText:S.url?.message})})]}),(0,t.jsxs)(r.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(f.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),C(!1),w(v)},children:"Cancel"}),(0,t.jsx)(f.f,{variant:"contained",size:"small",onClick:_(e=>{g(e),C(!1)}),children:"Save"})]})]}):(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(s.f,{target:"_blank",variant:"body1",color:"secondary",href:j,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:b}),!n&&(0,t.jsx)(o.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(l.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),C(!0)},children:(0,t.jsx)(h.default,{sx:{fontSize:"16px"}})})}),!a&&(0,t.jsx)(o.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(l.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>I(v),children:(0,t.jsx)(p.default,{sx:{fontSize:"16px"}})})})]})})};var j=e.i(594301);let b=[];e.s(["f",0,e=>{let{values:s=b,setValue:d=()=>{},name:c,title:f="Related links",displayMode:u=!1,noDeleteEdit:h=!1,titleSx:p={}}=e,[x,m]=(0,i.useState)([]),{hasRole:g}=(0,j.f)(),w=g("tenant");(0,i.useEffect)(()=>{Array.isArray(s)&&m((s??[]).map(e=>({...e,id:e?.id||Date.now()})))},[s]);let I=e=>{m(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(n.f,{sx:p,children:[f,":"]}),!u&&!w&&(0,t.jsx)(o.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(l.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),m(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(a.default,{})})})]}),(0,t.jsx)(r.f,{pl:2,spacing:.8,children:x?.length?x.map(e=>{let t;return(0,i.createElement)(v,{...e,key:e.id,onCancel:I,noEdit:h||u,noDelete:h||u,onDelete:(t=e.id,()=>{if(!c)return;let e=x.filter(e=>e.id!==t);d?.(c,e),m(e)}),onSave:t=>((e,t)=>{if(!c)return;let i=[...x],l=i.findIndex(t=>t.id===e);-1!==l&&i.splice(l,1,{...t,isAdded:!1,id:e}),d?.(c,i)})(e.id,t)})}):(0,t.jsx)(n.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},890350,e=>{var t,i,l,r=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),n=((i={}).VERIFIED="verified",i.UNVERIFIED="unverified",i),o=((l={}).CLEVERLY="cleverly",l.XERO="xero",l.BIDIRECTIONAL="bidirectional",l.NONE="none",l);e.s(["d",()=>r,"T",()=>n,"$",()=>o])},544005,e=>{e.s(["f",0,(e,t)=>{let i={...e};return Object.entries(t).forEach(e=>{let[t,l]=e;void 0===i[t]&&(i[t]=l)}),i}])},382461,e=>{var t=e.i(391398),i=e.i(191788),l=e.i(514707),r=e.i(691567),n=e.i(668921),o=e.i(231637),a=e.i(901004),s=e.i(539117),d=e.i(471973),c=e.i(813843),f=e.i(115871),u=e.i(738251),h=e.i(800884),p=e.i(799083),x=e.i(544005);let m={text:e=>{let{option:t,multiple:i,index:l}=e;return i&&l>0?`, ${t.label}`:t.label},textWithIcon:e=>{let{option:i}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[i.icon,(0,t.jsxs)(f.f,{children:[" ",i.label]})]})},chip:e=>{let{chipProps:t,option:l}=e;return(0,i.createElement)(h.f,{...t,key:l.value,label:l.label,icon:l.icon,sx:{color:l.color,bgcolor:l.bgcolor}})}},v={text:e=>{let{option:t}=e;return t.label},textWithIcon:e=>{let{option:i}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[i.icon,(0,t.jsxs)(f.f,{children:[" ",i.label]})]})},chip:e=>{let{chipProps:t,option:l}=e;return(0,i.createElement)(h.f,{...t,key:l.value,label:l.label,icon:l.icon,sx:{color:l.color,bgcolor:l.bgcolor}})},checkbox:e=>{let{option:i,value:l}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(p.f,{color:"secondary",sx:{height:"10px"},checked:l.indexOf(i.value)>-1}),(0,t.jsxs)(f.f,{children:[" ",i.label]})]})}},j={label:"",onChange:()=>{},leftSideLabel:!1,options:[],inputComponent:"text",selectComponent:"text",withoutSelectIcon:!1,formControl:{error:!1,helperText:""},chipProps:{size:"small"},selectProps:{}},b=e=>{let{label:i,value:l,onChange:r,leftSideLabel:n,options:o,inputComponent:c,selectComponent:h,withoutSelectIcon:p,formControl:b,chipProps:I,selectProps:y}=(0,x.f)(e,j),C=e=>o.find(t=>t.value===e);return(0,t.jsxs)(g,{...b,leftSideLabel:n,withoutSelectIcon:p,children:[i&&n&&(0,t.jsx)(f.f,{children:i}),i&&!n&&(0,t.jsx)(w,{shrink:""!==l&&void 0!==l,children:i}),(0,t.jsx)(s.f,{displayEmpty:!0,...y,value:l,onChange:r,inputProps:{shrink:!0},renderValue:()=>{if(Array.isArray(l))return(0,t.jsx)(u.f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:l.map((e,t)=>{let i=C(e);return i?m[c]({chipProps:I,option:i,multiple:!0,index:t}):""})});let e=C(l);return e?(0,t.jsx)(u.f,{children:m[c]({chipProps:I,option:e})}):""},children:o.map(e=>(0,t.jsx)(a.f,{value:e.value,children:v[h]({chipProps:I,option:e,value:l})},e.value))}),b?.helperText&&(0,t.jsx)(d.f,{children:b.helperText})]})};b.propTypes={label:r.default.string,value:r.default.oneOfType([r.default.string,r.default.array]),onChange:r.default.func,leftSideLabel:r.default.bool,options:r.default.arrayOf(r.default.shape({label:r.default.string,value:r.default.string.isRequired,color:r.default.string,bgcolor:r.default.string,icon:r.default.node}).isRequired),inputComponent:r.default.oneOf(["text","textWithIcon","chip"]),selectComponent:r.default.oneOf(["text","textWithIcon","chip","checkbox"]),withoutSelectIcon:r.default.bool,formControl:r.default.object,chipProps:r.default.object,selectProps:r.default.object};let g=(0,l.f)(n.f)(e=>{let{theme:t,leftSideLabel:i,withoutSelectIcon:l}=e;return{"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start",...i&&{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}},"& .MuiSelect-icon":{...l&&{display:"none"}}}}),w=(0,l.f)(o.f)(e=>{let{theme:t}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main}}});e.s(["f",0,b])},693001,(e,t,i)=>{var l=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=l(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"}),"CheckBoxOutlined")},393172,(e,t,i)=>{var l=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=l(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},474829,(e,t,i)=>{var l=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=l(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutline")},896490,(e,t,i)=>{var l=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=l(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},891723,(e,t,i)=>{var l=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=l(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},241129,e=>{var t=e.i(523042);e.s(["f",()=>t.f])},806402,e=>{var t=e.i(391398),i=e.i(776204),l=e.i(432171),r=e.i(577529),n=e.i(122965),o=e.i(191788),a=e.i(411331),s=e.i(362537),d=e.i(813843),c=e.i(755548),f=e.i(115871),u=e.i(88152),h=e.i(891723),p=e.i(74633),x=e.i(740790),m=e.i(683125),v=e.i(280445),j=e.i(652148),b=e.i(422411),g=e.i(426778);g.t().shape({search:g.x().optional().nullable()});let w={search:""};var I=e.i(10945),y=e.i(706692);let C=e=>{let{open:i,close:l,setFilters:r}=e,[n,a]=(0,I.f)({key:"notification_filters",initialValue:w}),{control:s,handleSubmit:f,reset:u}=(0,b.G)({defaultValues:{...w,...n}}),h=(0,y.f)("(max-width: 600px)");return(0,o.useEffect)(()=>{let e={q:n.search?`%${n.search}%`:null};u({...w,...n}),r(t=>({...t,...e}))},[n,u,r]),(0,t.jsx)(m.f,{keepMounted:!0,open:i,onClose:l,children:(0,t.jsx)("form",{onSubmit:f(e=>{a(e),l()}),children:(0,t.jsxs)(k,{is600pxOrLess:h,children:[(0,t.jsx)(x.f,{container:!0,columnSpacing:2,rowSpacing:2,children:(0,t.jsx)(x.f,{item:!0,xs:12,children:(0,t.jsx)(b.e,{control:s,name:"search",render:e=>{let{value:i,onChange:l}=e;return(0,t.jsx)(j.f,{multiline:!0,fullWidth:!0,variant:"standard",color:"secondary",label:"Search notifications",value:i,onChange:l})}})})}),(0,t.jsxs)(d.f,{width:"100%",direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,mt:3,children:[(0,t.jsx)(c.f,{variant:"contained",color:"danger",onClick:()=>{let e;u(e={...w}),a(e),l()},children:"Cancel"}),(0,t.jsx)(c.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},k=(0,v.f)(u.f)(e=>{let{is600pxOrLess:t}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:t?"100vw":"600px",height:t?"100vh":"auto",padding:"16px 27px 16px 27px",borderRadius:"8px",overflowY:"auto"}});var _=e.i(693001),S=e.i(594301),D=e.i(890350),$=e.i(159080);let N=$.f`
  query GetNotifications(
    $q: String
    $limit: Int = 50
    $offset: Int = 0
    $order: [Notification_order_by]
  ) {
    notifications: Notification(
      limit: $limit
      offset: $offset
      where: { _or: [{ title: { _ilike: $q } }, { content: { _ilike: $q } }] }
      order_by: $order
    ) {
      id
      status
      title
      content
      createdAt

      job: Job {
        id
      }

      task: Task {
        id
      }
    }
    meta: Notification_aggregate(
      where: { _or: [{ title: { _ilike: $q } }, { content: { _ilike: $q } }] }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,M=$.f`
  query GetNotifications(
    $q: String
    $limit: Int = 50
    $offset: Int = 0
    $order: [Notification_order_by]
  ) {
    notifications: Notification(
      limit: $limit
      offset: $offset
      where: { _or: [{ title: { _ilike: $q } }, { content: { _ilike: $q } }] }
      order_by: $order
    ) {
      id
      status
      title
      content
      createdAt

      job: Job {
        id
      }
    }
    meta: Notification_aggregate(
      where: { _or: [{ title: { _ilike: $q } }, { content: { _ilike: $q } }] }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,E=$.f`
  query GetNotificationById($id: Int!, $includeLocationId: Boolean!, $includeSupplierId: Boolean!) {
    notification: Notification_by_pk(id: $id) {
      id
      status
      title
      editorState
      content
      createdAt
      jobId
      taskId
      compliance: Compliance {
        id
        locationId @include(if: $includeLocationId)
        supplierId @include(if: $includeSupplierId)
      }
      jobScheduleIds

      job: Job {
        id
        number
        sla: SLA {
          id
          name
        }
      }
    }
  }
`;var T=e.i(21557),A=e.i(111341),P=e.i(241129),q=e.i(886779),L=e.i(356119),O=e.i(635657);e.i(981683);var z=e.i(104868),R=e.i(811179),V=e.i(203828);let W=e=>{let{id:i}=e,r=(0,V.useRouter)(),n=(0,a.f)(),{hasRole:s}=(0,S.f)(),d=s("admin"),c=s("customer"),{data:{notification:f}={notification:null},loading:u}=(0,l.t)(E,{variables:{id:i,includeLocationId:d||c,includeSupplierId:d}}),h=(0,O.f)(f?.job?.sla?.name),p=(0,o.useCallback)(e=>{let{jobId:i,taskId:l,jobScheduleIds:o,compliance:a}=e;i&&n.show({title:"Job details",content:(0,t.jsx)(z.f,{jobId:i,toggleShow:n.closeAll}),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"}),l&&n.show({title:"Task Details",content:(0,t.jsx)(R.DetailsTaskForm,{id:l,close:n.closeAll}),xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw"}),o&&o?.length>0&&r.push(`/dashboard/scheduledjob?scheduledTab=calendar&viewTab=items&jobScheduleIds=${o.join(",")}`),a?.id&&(a.locationId&&(n.closeAll(),r.push(`/dashboard/properties/view?id=${a.locationId}&tab=compliance`)),a.supplierId&&(n.closeAll(),r.push(`/dashboard/suppliers/view?id=${a.supplierId}&tab=compliance`)))},[n,r]);return u?(0,t.jsx)(q.f,{width:"100%",children:(0,t.jsx)(P.f,{variant:"rounded",height:"160px"})}):f?(0,t.jsx)(q.f,{width:"100%",children:(0,t.jsx)(A.f,{fullWidth:!0,title:f.title||"",editorState:f.editorState,color:h,onOpen:()=>p(f),notificationId:f.id})}):(0,t.jsx)(q.f,{width:"100%",children:(0,t.jsx)(L.f,{variant:"h6",children:"Notification not found"})})},H=()=>{let{user:e}=(0,S.f)(),x=(0,T.f)(),{reference:m,pagination:v,order:j}=(0,n.f)(),[b,g]=(0,o.useState)(!1),[w,I]=(0,o.useState)({q:null}),y=(0,a.f)(),{loading:k,data:{notifications:$,meta:E}={notifications:[],meta:{aggregate:{totalCount:0}}},refetch:A}=(0,l.t)(e.accountType===D.d.ADMIN?N:M,{variables:{...w,order:j,...v}}),[P]=(0,i.f)(r.Z,{refetchQueries:["GetNotifications"]}),[q]=(0,i.f)(r.B,{refetchQueries:["GetNotifications"],onCompleted:()=>{x.show({content:"All notifications marked as read",severity:"success"})},onError:()=>{x.show({content:"Failed to mark all notifications as read",severity:"error"})}}),L=(0,o.useMemo)(()=>$.map(e=>({id:e.id,status:e.status,title:e.title,content:e.content,date:(0,s.default)(e.createdAt).format("YYYY-MM-DD HH:mm"),jobId:e.job?.id,taskId:e.task?.id})),[$]),O=(0,o.useMemo)(()=>[{sortable:!1,field:"title",headerName:"Title",flex:1,minWidth:180,renderCell:e=>{let{row:i}=e;return"unread"===i.status?(0,t.jsx)("strong",{children:i.title}):(0,t.jsx)("span",{children:i.title})}},{sortable:!1,field:"content",headerName:"Content",flex:1,minWidth:180,renderCell:e=>{let{row:i}=e;return(0,t.jsx)("span",{children:i.content})}},{sortable:!1,field:"date",headerName:"Date",minWidth:180}],[]),z=(0,o.useCallback)(e=>{let{row:i}=e;"unread"===i.status&&P({variables:{id:i.id,changes:{status:"read"}}}).then(()=>{A()}),y.show({title:"Notification",content:(0,t.jsx)(W,{id:i.id}),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"80vw",md2:"80vw",lg:"80vw",lg2:"80vw"})},[P,y,A]),R=(0,o.useCallback)(()=>{q({variables:{userId:e.id,accountId:e.accountId}}).then(()=>{A()})},[q,A,e.id,e.accountId]);return(0,t.jsxs)(d.f,{width:"100%",spacing:2,children:[(0,t.jsxs)(d.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(c.f,{variant:"contained",startIcon:(0,t.jsx)(h.default,{}),onClick:()=>g(!0),children:"Filters"}),(0,t.jsx)(c.f,{variant:"contained",color:"danger",startIcon:(0,t.jsx)(_.default,{}),onClick:R,children:"Mark all as read"}),(0,t.jsx)(C,{open:b,close:()=>g(!1),setFilters:I})]}),(0,t.jsxs)(u.f,{sx:{paddingTop:"16px",paddingBottom:"16px",height:"calc(100vh - 120px)"},children:[!!L?.length&&(0,t.jsx)(d.f,{direction:"row",justifyContent:"space-between",children:(0,t.jsx)(f.f,{ml:2,variant:"h5",sx:{fontWeight:600},children:"Notifications"})}),(0,t.jsx)(p.s,{...m,history:!0,autoHeight:!1,loading:k,columns:O,rows:L,totalCount:E.aggregate.totalCount,onRowClick:z,containerHeight:"calc(100% - 40px)"})]})]})};var B=e.i(293965);let F=()=>(0,t.jsx)(H,{});F.getLayout=e=>(0,t.jsx)(B.f,{children:e}),e.s(["default",0,F],806402)}],465494,(e,t,i)=>{let l="/dashboard/notifications";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(806402)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([l])})},795640,e=>{e.v(t=>Promise.all(["static/chunks/0r015bydn99_l.js"].map(t=>e.l(t))).then(()=>t(594366)))}]);