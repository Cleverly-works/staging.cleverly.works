(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[890350,e=>{var t,i,o,n=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),a=((i={}).VERIFIED="verified",i.UNVERIFIED="unverified",i),l=((o={}).CLEVERLY="cleverly",o.XERO="xero",o.BIDIRECTIONAL="bidirectional",o.NONE="none",o);e.s(["d",()=>n,"T",()=>a,"$",()=>l])},544005,e=>{e.s(["f",0,(e,t)=>{let i={...e};return Object.entries(t).forEach(e=>{let[t,o]=e;void 0===i[t]&&(i[t]=o)}),i}])},693001,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),a=e.r(391398);i.default=(0,n.default)((0,a.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"}),"CheckBoxOutlined")},891723,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),a=e.r(391398);i.default=(0,n.default)((0,a.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},241129,e=>{var t=e.i(523042);e.s(["f",()=>t.f])},806402,e=>{var t=e.i(391398),i=e.i(776204),o=e.i(432171),n=e.i(577529),a=e.i(122965),l=e.i(191788),r=e.i(411331),s=e.i(362537),d=e.i(813843),c=e.i(755548),u=e.i(115871),f=e.i(88152),h=e.i(891723),m=e.i(74633),p=e.i(740790),v=e.i(683125),x=e.i(280445),b=e.i(652148),j=e.i(422411),w=e.i(426778);w.t().shape({search:w.x().optional().nullable()});let g={search:""};var I=e.i(10945),_=e.i(706692);let $=e=>{let{open:i,close:o,setFilters:n}=e,[a,r]=(0,I.f)({key:"notification_filters",initialValue:g}),{control:s,handleSubmit:u,reset:f}=(0,j.G)({defaultValues:{...g,...a}}),h=(0,_.f)("(max-width: 600px)");return(0,l.useEffect)(()=>{let e={q:a.search?`%${a.search}%`:null};f({...g,...a}),n(t=>({...t,...e}))},[a,f,n]),(0,t.jsx)(v.f,{keepMounted:!0,open:i,onClose:o,children:(0,t.jsx)("form",{onSubmit:u(e=>{r(e),o()}),children:(0,t.jsxs)(k,{is600pxOrLess:h,children:[(0,t.jsx)(p.f,{container:!0,columnSpacing:2,rowSpacing:2,children:(0,t.jsx)(p.f,{item:!0,xs:12,children:(0,t.jsx)(j.e,{control:s,name:"search",render:e=>{let{value:i,onChange:o}=e;return(0,t.jsx)(b.f,{multiline:!0,fullWidth:!0,variant:"standard",color:"secondary",label:"Search notifications",value:i,onChange:o})}})})}),(0,t.jsxs)(d.f,{width:"100%",direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,mt:3,children:[(0,t.jsx)(c.f,{variant:"contained",color:"danger",onClick:()=>{let e;f(e={...g}),r(e),o()},children:"Cancel"}),(0,t.jsx)(c.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},k=(0,x.f)(f.f)(e=>{let{is600pxOrLess:t}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:t?"100vw":"600px",height:t?"100vh":"auto",padding:"16px 27px 16px 27px",borderRadius:"8px",overflowY:"auto"}});var N=e.i(693001),C=e.i(594301),y=e.i(890350),S=e.i(159080);let T=S.f`
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
`,E=S.f`
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
`,A=S.f`
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
`;var M=e.i(21557),q=e.i(111341),R=e.i(241129),O=e.i(886779),D=e.i(356119),H=e.i(635657);e.i(981683);var P=e.i(104868),L=e.i(811179),B=e.i(203828);let V=e=>{let{id:i}=e,n=(0,B.useRouter)(),a=(0,r.f)(),{hasRole:s}=(0,C.f)(),d=s("admin"),c=s("customer"),{data:{notification:u}={notification:null},loading:f}=(0,o.t)(A,{variables:{id:i,includeLocationId:d||c,includeSupplierId:d}}),h=(0,H.f)(u?.job?.sla?.name),m=(0,l.useCallback)(e=>{let{jobId:i,taskId:o,jobScheduleIds:l,compliance:r}=e;i&&a.show({title:"Job details",content:(0,t.jsx)(P.f,{jobId:i,toggleShow:a.closeAll}),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"}),o&&a.show({title:"Task Details",content:(0,t.jsx)(L.DetailsTaskForm,{id:o,close:a.closeAll}),xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw"}),l&&l?.length>0&&n.push(`/dashboard/scheduledjob?scheduledTab=calendar&viewTab=items&jobScheduleIds=${l.join(",")}`),r?.id&&(r.locationId&&(a.closeAll(),n.push(`/dashboard/properties/view?id=${r.locationId}&tab=compliance`)),r.supplierId&&(a.closeAll(),n.push(`/dashboard/suppliers/view?id=${r.supplierId}&tab=compliance`)))},[a,n]);return f?(0,t.jsx)(O.f,{width:"100%",children:(0,t.jsx)(R.f,{variant:"rounded",height:"160px"})}):u?(0,t.jsx)(O.f,{width:"100%",children:(0,t.jsx)(q.f,{fullWidth:!0,title:u.title||"",editorState:u.editorState,color:h,onOpen:()=>m(u),notificationId:u.id})}):(0,t.jsx)(O.f,{width:"100%",children:(0,t.jsx)(D.f,{variant:"h6",children:"Notification not found"})})},z=()=>{let{user:e}=(0,C.f)(),p=(0,M.f)(),{reference:v,pagination:x,order:b}=(0,a.f)(),[j,w]=(0,l.useState)(!1),[g,I]=(0,l.useState)({q:null}),_=(0,r.f)(),{loading:k,data:{notifications:S,meta:A}={notifications:[],meta:{aggregate:{totalCount:0}}},refetch:q}=(0,o.t)(e.accountType===y.d.ADMIN?T:E,{variables:{...g,order:b,...x}}),[R]=(0,i.f)(n.Z,{refetchQueries:["GetNotifications"]}),[O]=(0,i.f)(n.B,{refetchQueries:["GetNotifications"],onCompleted:()=>{p.show({content:"All notifications marked as read",severity:"success"})},onError:()=>{p.show({content:"Failed to mark all notifications as read",severity:"error"})}}),D=(0,l.useMemo)(()=>S.map(e=>({id:e.id,status:e.status,title:e.title,content:e.content,date:(0,s.default)(e.createdAt).format("YYYY-MM-DD HH:mm"),jobId:e.job?.id,taskId:e.task?.id})),[S]),H=(0,l.useMemo)(()=>[{sortable:!1,field:"title",headerName:"Title",flex:1,minWidth:180,renderCell:e=>{let{row:i}=e;return"unread"===i.status?(0,t.jsx)("strong",{children:i.title}):(0,t.jsx)("span",{children:i.title})}},{sortable:!1,field:"content",headerName:"Content",flex:1,minWidth:180,renderCell:e=>{let{row:i}=e;return(0,t.jsx)("span",{children:i.content})}},{sortable:!1,field:"date",headerName:"Date",minWidth:180}],[]),P=(0,l.useCallback)(e=>{let{row:i}=e;"unread"===i.status&&R({variables:{id:i.id,changes:{status:"read"}}}).then(()=>{q()}),_.show({title:"Notification",content:(0,t.jsx)(V,{id:i.id}),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"80vw",md2:"80vw",lg:"80vw",lg2:"80vw"})},[R,_,q]),L=(0,l.useCallback)(()=>{O({variables:{userId:e.id,accountId:e.accountId}}).then(()=>{q()})},[O,q,e.id,e.accountId]);return(0,t.jsxs)(d.f,{width:"100%",spacing:2,children:[(0,t.jsxs)(d.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(c.f,{variant:"contained",startIcon:(0,t.jsx)(h.default,{}),onClick:()=>w(!0),children:"Filters"}),(0,t.jsx)(c.f,{variant:"contained",color:"danger",startIcon:(0,t.jsx)(N.default,{}),onClick:L,children:"Mark all as read"}),(0,t.jsx)($,{open:j,close:()=>w(!1),setFilters:I})]}),(0,t.jsxs)(f.f,{sx:{paddingTop:"16px",paddingBottom:"16px",height:"calc(100vh - 120px)"},children:[!!D?.length&&(0,t.jsx)(d.f,{direction:"row",justifyContent:"space-between",children:(0,t.jsx)(u.f,{ml:2,variant:"h5",sx:{fontWeight:600},children:"Notifications"})}),(0,t.jsx)(m.s,{...v,history:!0,autoHeight:!1,loading:k,columns:H,rows:D,totalCount:A.aggregate.totalCount,onRowClick:P,containerHeight:"calc(100% - 40px)"})]})]})};var F=e.i(293965);let G=()=>(0,t.jsx)(z,{});G.getLayout=e=>(0,t.jsx)(F.f,{children:e}),e.s(["default",0,G],806402)}],465494,(e,t,i)=>{let o="/dashboard/notifications";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(806402)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},795640,e=>{e.v(t=>Promise.all(["static/chunks/0r015bydn99_l.js"].map(t=>e.l(t))).then(()=>t(594366)))}]);