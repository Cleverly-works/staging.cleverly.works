(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[394989,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(773831),s=e.i(813843),n=e.i(115871),a=e.i(322135),l=e.i(148310),o=e.i(889231),d=e.i(422411),c=e.i(424894),u=e.i(755548),f=e.i(652148),m=e.i(376733),h=e.i(978319),x=e.i(426778);let p=x.t({name:x.x().required("Name is required"),url:x.x().url().required("URL is required")}),g=e=>{let{noEdit:n=!1,noDelete:l=!1,isAdded:x=!1,id:g,url:j="",name:b="",onSave:y=()=>{},onCancel:v=()=>{},onDelete:k=()=>{}}=e,[C,_]=(0,r.useState)(x),{control:w,handleSubmit:I,errors:T}=(0,d.G)({resolver:(0,c.yupResolver)(p)});return(0,t.jsx)("form",{children:C?(0,t.jsxs)(s.f,{children:[(0,t.jsxs)(s.f,{spacing:1,children:[(0,t.jsx)(d.e,{control:w,name:"name",defaultValue:b,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!T.name,helperText:T.name?.message})}),(0,t.jsx)(d.e,{control:w,name:"url",defaultValue:j,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!T.url,helperText:T.url?.message})})]}),(0,t.jsxs)(s.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),_(!1),v(g)},children:"Cancel"}),(0,t.jsx)(u.f,{variant:"contained",size:"small",onClick:I(e=>{y(e),_(!1)}),children:"Save"})]})]}):(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(o.f,{target:"_blank",variant:"body1",color:"secondary",href:j,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:b}),!n&&(0,t.jsx)(a.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),_(!0)},children:(0,t.jsx)(m.default,{sx:{fontSize:"16px"}})})}),!l&&(0,t.jsx)(a.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>k(g),children:(0,t.jsx)(h.default,{sx:{fontSize:"16px"}})})})]})})};var j=e.i(594301);let b=[];e.s(["f",0,e=>{let{values:o=b,setValue:d=()=>{},name:c,title:u="Related links",displayMode:f=!1,noDeleteEdit:m=!1,titleSx:h={}}=e,[x,p]=(0,r.useState)([]),{hasRole:y}=(0,j.f)(),v=y("tenant");(0,r.useEffect)(()=>{Array.isArray(o)&&p((o??[]).map(e=>({...e,id:e?.id||Date.now()})))},[o]);let k=e=>{p(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(s.f,{children:[(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(n.f,{sx:h,children:[u,":"]}),!f&&!v&&(0,t.jsx)(a.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),p(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(l.default,{})})})]}),(0,t.jsx)(s.f,{pl:2,spacing:.8,children:x?.length?x.map(e=>{let t;return(0,r.createElement)(g,{...e,key:e.id,onCancel:k,noEdit:m||f,noDelete:m||f,onDelete:(t=e.id,()=>{if(!c)return;let e=x.filter(e=>e.id!==t);d?.(c,e),p(e)}),onSave:t=>((e,t)=>{if(!c)return;let r=[...x],i=r.findIndex(t=>t.id===e);-1!==i&&r.splice(i,1,{...t,isAdded:!1,id:e}),d?.(c,r)})(e.id,t)})}):(0,t.jsx)(n.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},667986,e=>{var t=e.i(191788),r=e.i(203828);e.s(["f",0,function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"create",{query:s,isReady:n}=(0,r.useRouter)(),a=(0,t.useRef)(!1),l=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{if(!n)return;let t=!!s[i];!t||a.current||l.current||(e(null),a.current=!0),t||(a.current=!1,l.current=!1)},[e,s,i,n]),{open:(0,t.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;l.current=!0,e(t)},[e])}}])},544005,e=>{e.s(["f",0,(e,t)=>{let r={...e};return Object.entries(t).forEach(e=>{let[t,i]=e;void 0===r[t]&&(r[t]=i)}),r}])},382461,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(514707),s=e.i(691567),n=e.i(668921),a=e.i(231637),l=e.i(901004),o=e.i(539117),d=e.i(471973),c=e.i(813843),u=e.i(115871),f=e.i(738251),m=e.i(800884),h=e.i(799083),x=e.i(544005);let p={text:e=>{let{option:t,multiple:r,index:i}=e;return r&&i>0?`, ${t.label}`:t.label},textWithIcon:e=>{let{option:r}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r.icon,(0,t.jsxs)(u.f,{children:[" ",r.label]})]})},chip:e=>{let{chipProps:t,option:i}=e;return(0,r.createElement)(m.f,{...t,key:i.value,label:i.label,icon:i.icon,sx:{color:i.color,bgcolor:i.bgcolor}})}},g={text:e=>{let{option:t}=e;return t.label},textWithIcon:e=>{let{option:r}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r.icon,(0,t.jsxs)(u.f,{children:[" ",r.label]})]})},chip:e=>{let{chipProps:t,option:i}=e;return(0,r.createElement)(m.f,{...t,key:i.value,label:i.label,icon:i.icon,sx:{color:i.color,bgcolor:i.bgcolor}})},checkbox:e=>{let{option:r,value:i}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(h.f,{color:"secondary",sx:{height:"10px"},checked:i.indexOf(r.value)>-1}),(0,t.jsxs)(u.f,{children:[" ",r.label]})]})}},j={label:"",onChange:()=>{},leftSideLabel:!1,options:[],inputComponent:"text",selectComponent:"text",withoutSelectIcon:!1,formControl:{error:!1,helperText:""},chipProps:{size:"small"},selectProps:{}},b=e=>{let{label:r,value:i,onChange:s,leftSideLabel:n,options:a,inputComponent:c,selectComponent:m,withoutSelectIcon:h,formControl:b,chipProps:k,selectProps:C}=(0,x.f)(e,j),_=e=>a.find(t=>t.value===e);return(0,t.jsxs)(y,{...b,leftSideLabel:n,withoutSelectIcon:h,children:[r&&n&&(0,t.jsx)(u.f,{children:r}),r&&!n&&(0,t.jsx)(v,{shrink:""!==i&&void 0!==i,children:r}),(0,t.jsx)(o.f,{displayEmpty:!0,...C,value:i,onChange:s,inputProps:{shrink:!0},renderValue:()=>{if(Array.isArray(i))return(0,t.jsx)(f.f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:i.map((e,t)=>{let r=_(e);return r?p[c]({chipProps:k,option:r,multiple:!0,index:t}):""})});let e=_(i);return e?(0,t.jsx)(f.f,{children:p[c]({chipProps:k,option:e})}):""},children:a.map(e=>(0,t.jsx)(l.f,{value:e.value,children:g[m]({chipProps:k,option:e,value:i})},e.value))}),b?.helperText&&(0,t.jsx)(d.f,{children:b.helperText})]})};b.propTypes={label:s.default.string,value:s.default.oneOfType([s.default.string,s.default.array]),onChange:s.default.func,leftSideLabel:s.default.bool,options:s.default.arrayOf(s.default.shape({label:s.default.string,value:s.default.string.isRequired,color:s.default.string,bgcolor:s.default.string,icon:s.default.node}).isRequired),inputComponent:s.default.oneOf(["text","textWithIcon","chip"]),selectComponent:s.default.oneOf(["text","textWithIcon","chip","checkbox"]),withoutSelectIcon:s.default.bool,formControl:s.default.object,chipProps:s.default.object,selectProps:s.default.object};let y=(0,i.f)(n.f)(e=>{let{theme:t,leftSideLabel:r,withoutSelectIcon:i}=e;return{"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start",...r&&{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}},"& .MuiSelect-icon":{...i&&{display:"none"}}}}),v=(0,i.f)(a.f)(e=>{let{theme:t}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main}}});e.s(["f",0,b])},1893,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(776204),s=e.i(432171),n=e.i(362537),a=e.i(936641),l=e.i(755548),o=e.i(800884),d=e.i(76381),c=e.i(986351),u=e.i(740790),f=e.i(813843),m=e.i(115871),h=e.i(587369),x=e.i(422411),p=e.i(159080);let g=p.f`
  query GetCustomerTaskDetails($id: Int!) {
    task: Task_by_pk(id: $id) {
      id
      status
      priority
      statusLog
      meta
      relatedLinks
      title
      content
      editorState
      dueDate
      createdAt
      updatedAt
      adminId
      archived
      userId
      assignedAccountId
      customerId
      supplierId
      locationId
      completion_by_customer
      assignedUser: AssignedUser {
        id
        fullName
      }
      customer: Customer {
        id
        name
      }
      jobId
      workflowId
      form: FormSubmissions(
        where: { entity: { _eq: "Task" } }
        order_by: { updatedAt: desc }
        limit: 1
      ) {
        id
        formId
        formFields
        submissionData
        entity
        entityId
        type
        updatedAt
        pdfGenerationStatus
        pdfGenerationId
        user: FormSubmissionsUser {
          id
          fullName
        }
        form: FormSubmissionsForm {
          name
          status
          description
          settings
          updatedAt
        }
      }
      job: Job {
        id
        number
        type
        quoted

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
        }
      }
    }
  }
`;var j=e.i(230512),b=e.i(428424),y=e.i(824451),v=e.i(714119),k=e.i(594301),C=e.i(21557),_=e.i(411331),w=e.i(498681),I=e.i(511667),T=e.i(974261),D=e.i(299796),S=e.i(53182),A=e.i(382161),M=e.i(77052),q=e.i(185758),$=e.i(556918);let U={fontFamily:e.i(494575).f.THEME_TYPOGRAPHY.newFont},E=e=>{let{open:r,onClose:i,onConfirm:s,loading:n}=e;return(0,t.jsxs)(A.f,{open:r,onClose:i,PaperProps:{sx:U},children:[(0,t.jsx)($.f,{sx:U,children:"Mark Completed"}),(0,t.jsx)(q.f,{children:(0,t.jsx)(m.f,{sx:U,children:"Mark this task complete? You won't be able to undo this."})}),(0,t.jsxs)(M.f,{children:[(0,t.jsx)(l.f,{variant:"contained",color:"danger",onClick:i,children:"Cancel"}),(0,t.jsx)(l.f,{color:"secondary",variant:"contained",onClick:s,disabled:n,children:"Confirm"})]})]})};var O=e.i(889231);let N=b.j.filter(e=>e.value!==b.k.DONE&&e.value!==b.k.BLOCKED);e.s(["f",0,e=>{let{id:p,onUpdated:A}=e,M=(0,h.f)("(max-width: 900px)"),{user:q}=(0,k.f)(),$=(0,C.f)(),U=(0,_.f)(),P=(0,w.f)(),F=P?.admin?.modules?.formBuilder||!1,[W,Y]=(0,r.useState)(!1),{data:{task:R}={task:null},loading:G,refetch:L}=(0,s.t)(g,{variables:{id:p}}),{control:z,reset:V}=(0,x.G)({defaultValues:{status:b.k.NEW}});(0,r.useEffect)(()=>{R?.status&&V({status:R.status})},[R?.status,V]);let B=(0,r.useMemo)(()=>R?.form?.[0],[R?.form]),[H,{loading:K}]=(0,i.f)(j.Q,{refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{$.show({content:"Task updated successfully",severity:"success"}),A?.()},onError:()=>{$.show({content:"Failed to update task",severity:"error"})}}),[Q,{isLoading:X}]=(0,I.f)(`/task/${p}`,{queryKey:`complete-customer-task-${p}`,method:"PUT",baseUrl:T.M,params:{scope:"this"},refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{$.show({content:"Task completed successfully",severity:"success"}),A?.()},onError:e=>{$.show({content:e.message||"Failed to complete task",severity:"error"})}}),J=K||X,Z=(0,r.useCallback)(()=>{let e=Array.isArray(B?.formFields)?B.formFields:[],t=B?.submissionData;return!e.length||!!t&&e.filter(e=>e?.required).every(e=>{var r;let i=e?.stateName;return!i||null!=(r=t[i])&&("string"==typeof r?r.trim().length>0:Array.isArray(r)?r.length>0:"object"!=typeof r||Object.keys(r).length>0)})},[B?.formFields,B?.submissionData])(),ee=!!Array.isArray(B?.formFields)&&B.formFields.some(e=>e?.required),et=async()=>{await Q({body:{status:b.k.DONE,completion_by_customer:!0}}),Y(!1),U.close()},er=(0,r.useMemo)(()=>{if(!R)return[];let e=[];return R.job?.number&&e.push({label:`${(0,D.f)(R.job.type)} ${"quote"!==R.job.type&&R.job.quoted?"Q":""} ${R.job.number}`.trim(),href:`${T.r.portalUrl}/dashboard/issues/view?id=${R.job.number}`}),e},[R]);if(G)return(0,t.jsx)(f.f,{width:"100%",justifyContent:"center",alignItems:"center",sx:{minHeight:200},children:(0,t.jsx)(d.f,{color:"secondary"})});if(!R)return(0,t.jsx)(a.f,{severity:"error",children:"Task is not found"});let ei=b.j.find(e=>e.value===R.status)?.label??R.status;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.f,{container:!0,spacing:3,sx:{minHeight:"calc(100vh - 128px)"},children:[(0,t.jsx)(u.f,{item:!0,xs:12,md:5,children:(0,t.jsxs)(f.f,{spacing:2,children:[(0,t.jsx)(m.f,{variant:"h6",fontWeight:700,children:R.title}),R.content&&(0,t.jsx)(m.f,{variant:"body2",color:"text.secondary",children:R.content}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(m.f,{children:"Due date:"}),(0,t.jsx)(m.f,{fontWeight:600,children:R.dueDate?(0,n.default)(R.dueDate).format("Do MMM YYYY"):"—"})]}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(m.f,{children:"Status:"}),(0,t.jsx)(o.f,{size:"small",label:ei})]}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(m.f,{children:"Assignee:"}),(0,t.jsx)(m.f,{fontWeight:600,children:R.assignedUser?.fullName??"—"})]}),er.length>0&&(0,t.jsxs)(f.f,{spacing:.5,children:[(0,t.jsx)(m.f,{children:"Linked entity:"}),er.map(e=>(0,t.jsx)(O.f,{href:e.href,children:e.label},e.href))]}),F&&B?.id&&(0,t.jsx)(S.f,{taskId:p,form:B,onFormUpdated:()=>L()}),(0,t.jsx)(c.f,{}),(0,t.jsxs)(f.f,{spacing:2,children:[(0,t.jsx)(x.e,{control:z,name:"status",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(y.f,{label:"Status",variant:"standard",color:"secondary",fullWidth:!0,disableClearable:!0,disabled:J,value:N.find(e=>e.value===r)??N[0],options:N,onChange:(e,t)=>{t&&(i(t.value),H({variables:{id:p,object:{status:t.value}}}))}})}}),(0,t.jsx)(l.f,{variant:"contained",color:"secondary",disabled:!Z||R.status===b.k.DONE||J,onClick:()=>Y(!0),sx:{alignSelf:"flex-start"},children:"Mark Completed"})]}),ee&&!Z&&(0,t.jsx)(m.f,{variant:"body2",color:"error",children:"Complete the required form fields before marking this task done."})]})}),!M&&(0,t.jsx)(u.f,{item:!0,xs:12,md:.5,display:"flex",justifyContent:"center",children:(0,t.jsx)(c.f,{orientation:"vertical"})}),(0,t.jsx)(u.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(v.f,{elevation:0,maxHeight:"800px",title:"Activity",id:p,adminId:q.adminId,scope:"task",expanded:!0,hideExpandIcon:!0})})]}),(0,t.jsx)(E,{open:W,onClose:()=>Y(!1),onConfirm:et,loading:J})]})}],1893)},393172,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=i(e.r(421506)),n=e.r(391398);r.default=(0,s.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},474829,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=i(e.r(421506)),n=e.r(391398);r.default=(0,s.default)((0,n.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutline")},896490,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=i(e.r(421506)),n=e.r(391398);r.default=(0,s.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},891723,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var s=i(e.r(421506)),n=e.r(391398);r.default=(0,s.default)((0,n.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},946008,e=>{var t,r=e.i(391398),i=e.i(293965),s=e.i(191788),n=e.i(362537),a=e.i(203828),l=e.i(512057),o=e.i(891723),d=e.i(755548),c=e.i(800884),u=e.i(84961),f=e.i(88152),m=e.i(813843),h=e.i(76381),x=e.i(115871),p=e.i(432171),g=e.i(776204),j=e.i(159080);let b=j.f`
  query GetTasksTable(
    $where: Task_bool_exp
    $limit: Int! = 50
    $offset: Int
    $orderBy: [Task_order_by!]
  ) {
    tasks: Task(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
      id
      archived
      status
      priority
      statusLog
      meta
      relatedLinks
      title
      content
      dueDate
      createdAt
      updatedAt
      adminId
      userId
      assignedAccountId
      customerId
      supplierId
      locationId
      completion_by_customer
      recurrence_series_id
      recurrence_rule
      recurrence_modified
      assignedUser: AssignedUser {
        id
        fullName
      }
      customer: Customer {
        id
        name
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Task" }
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
        }
      }
      jobId
    }
    meta: Task_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,y=j.f`
  query GetCustomerTasksTable(
    $where: Task_bool_exp
    $limit: Int! = 50
    $offset: Int
    $orderBy: [Task_order_by!]
  ) {
    tasks: Task(where: $where, limit: $limit, offset: $offset, order_by: $orderBy) {
      id
      status
      priority
      title
      dueDate
      createdAt
      completion_by_customer
      assignedUser: AssignedUser {
        id
        fullName
      }
    }
    meta: Task_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,v=j.f`
  mutation TaskPartialUpdate($id: Int!, $object: Task_set_input!) {
    update_Task_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
      status
      priority
    }
  }
`;j.f`
  query GetTagsForTask($taskId: Int!, $q: String!, $limit: Int = 50, $offset: Int = 0) {
    tags: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "tags" }
        _not: { Taxonomy_Entities: { entity: { _eq: "Task" }, entityId: { _eq: $taskId } } }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      name
      meta
    }
  }
`;var k=e.i(382461),C=e.i(239964),_=e.i(360364),w=e.i(740790),I=e.i(683125),T=e.i(652148),D=e.i(587369),S=e.i(515523),A=e.i(901004),M=e.i(152078),q=e.i(799083),$=e.i(824451),U=e.i(422411),E=e.i(877341),O=e.i(514707),N=e.i(594301),P=e.i(722394),F=e.i(428424),W=e.i(655477),Y=e.i(827010),R=e.i(106997),G=e.i(867586),L=e.i(593626);let z=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],V=[{label:"Recurring only",value:"recurring"},{label:"Non-recurring",value:"non-recurring"}],B=w.f,H=e=>{let{open:t=!1,setOpen:i,filterForm:n,setFilterForm:a,customerView:l=!1}=e,{user:o}=(0,N.f)(),u=4*!!(0,D.f)("(max-width: 400px)"),[f,h]=(0,s.useState)(""),{control:p,handleSubmit:g,register:j,reset:b,setValue:y,watch:v}=(0,U.G)({defaultValues:n}),k=v("customerAccount"),[C,{loading:_,data:{items:w}={items:[]}}]=(0,E.f)(Y.h,{variables:{accountId:o.adminId,limit:50,offset:0,q:""!==f?`%${f}%`:null}});return(0,s.useEffect)(()=>{t&&b(n)},[t,n,b]),(0,r.jsx)(K,{keepMounted:!0,open:t,onClose:()=>i(!1),children:(0,r.jsx)("form",{onSubmit:g(e=>{a(e),i(!1)}),children:(0,r.jsx)(Q,{children:(0,r.jsxs)(B,{container:!0,rowGap:4,children:[(0,r.jsx)(B,{container:!0,children:(0,r.jsx)(B,{item:!0,xs:12,children:(0,r.jsx)(T.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"search",inputRef:j})})}),(0,r.jsxs)(B,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{control:p,name:"status",render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(S.f,{multiple:!0,limitTags:1,color:"secondary",options:F.j,value:t||[],onChange:(e,t)=>{i(t)},renderOption:(e,t)=>(0,r.jsx)(A.f,{...e,children:(0,r.jsx)(c.f,{size:"small",label:t.label,icon:t.icon,sx:{color:t.color,bgcolor:t.bgcolor}})}),renderTags:(e,t)=>e.map((e,i)=>(0,r.jsx)(c.f,{size:"small",label:e.label,icon:e.icon,sx:{color:e.color,bgcolor:e.bgcolor},...t({index:i})})),renderInput:e=>(0,r.jsx)(T.f,{...e,variant:"standard",color:"secondary",label:"Select status"})})}})}),!l&&(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{name:"assignedUser",control:p,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(R.f,{value:t||null,onChange:(e,t)=>i(t),onOpen:()=>C(),loading:_,options:w,setSearch:h,isOptionEqualToValue:(e,t)=>e.value===t.value,textFieldProps:{color:"secondary",variant:"standard",label:"Assigned to"}})}})})]}),(0,r.jsxs)(B,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{control:p,name:"priority",render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(S.f,{multiple:!0,limitTags:1,color:"secondary",options:F.s,value:t||[],onChange:(e,t)=>{i(t)},renderOption:(e,t)=>(0,r.jsx)(A.f,{...e,children:(0,r.jsxs)(m.f,{direction:"row",alignItems:"center",spacing:1,children:[t.icon,(0,r.jsxs)(x.f,{children:[" ",t.label]})]})}),renderTags:e=>e.map(e=>(0,r.jsxs)(m.f,{direction:"row",alignItems:"center",spacing:1,mr:1,children:[e.icon,(0,r.jsxs)(x.f,{children:[" ",e.label]})]})),renderInput:e=>(0,r.jsx)(T.f,{...e,variant:"standard",color:"secondary",label:"Select priority"})})}})}),(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{control:p,name:"dueDate",defaultValue:null,render:e=>(0,r.jsx)(P.f,{...e,label:"Due date",format:"Do MMM YYYY",slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary"}}})})})]}),!l&&(0,r.jsxs)(B,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(W.f,{control:p})}),(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{name:"customerAccount",control:p,defaultValue:null,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(G.f,{value:t||null,onChange:e=>{e?.value!==t?.value&&y("customerUser",null),i(e)}})}})})]}),!l&&(0,r.jsx)(B,{container:!0,columnSpacing:4,rowGap:u,children:(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{name:"customerUser",control:p,defaultValue:null,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(L.f,{customerAccountId:k?.value,value:t||null,onChange:i,helperText:""})}})})}),!l&&(0,r.jsxs)(B,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{name:"completionByCustomer",control:p,defaultValue:null,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)($.f,{label:"Completed by customer",variant:"standard",color:"secondary",fullWidth:!0,options:[...z],value:z.find(e=>e.value===t)??null,onChange:(e,t)=>i(t?.value??null),disableClearable:!1})}})}),(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{name:"recurring",control:p,defaultValue:null,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)($.f,{label:"Recurrence",variant:"standard",color:"secondary",fullWidth:!0,options:[...V],value:V.find(e=>e.value===t)??null,onChange:(e,t)=>i(t?.value??null),disableClearable:!1})}})})]}),!l&&(0,r.jsxs)(B,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{name:"assignedToMe",control:p,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(M.f,{control:(0,r.jsx)(q.f,{color:"secondary",checked:t,onChange:e=>i(e.target.checked)}),label:"Assigned to me"})}})}),(0,r.jsx)(B,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(U.e,{name:"archived",control:p,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(M.f,{control:(0,r.jsx)(q.f,{color:"secondary",checked:t,onChange:e=>i(e.target.checked)}),label:"Show archived tasks"})}})})]}),(0,r.jsx)(B,{container:!0,item:!0,xs:12,children:(0,r.jsxs)(m.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,r.jsx)(d.f,{variant:"contained",color:"danger",onClick:()=>void(a({}),b({}),i(!1)),children:"Cancel"}),(0,r.jsx)(d.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})})]})})})})},K=(0,O.f)(I.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),Q=(0,O.f)(f.f)(()=>({padding:"24px",maxWidth:"700px",maxHeight:"100vh",overflowY:"scroll"}));var X=e.i(265387),J=e.i(811179),Z=e.i(411331);let ee=(e,t)=>{let{q:r,archived:i,status:s,priority:a,dueDate:l,assignedUserId:o,customerId:d,customerUserId:c,tags:u,recurring:f,completionByCustomer:m,recurrenceSeriesId:h}=e,x=!t?.customerView,p=null!=o&&null!=c&&o!==c,g=p?{assignedUserId:{_in:[]}}:null!=o?{assignedUserId:{_eq:o}}:null!=c?{assignedUserId:{_eq:c},AssignedUser:{Account_Users:{status:{_eq:"active"},Account:{type:{_eq:"customer"}},...null!=d&&{accountId:{_eq:d}}}}}:{};return{where:{_or:r?[{title:{_ilike:r}},{content:{_ilike:r}}]:void 0,archived:{_eq:i},...s?{status:{_in:s}}:null==m?{status:{_nin:[F.k.DONE]}}:{},priority:a?.length?{_in:a}:void 0,dueDate:l?{_gte:(0,n.default)(l).startOf("day").utc().toISOString(),_lte:(0,n.default)(l).endOf("day").utc().toISOString()}:void 0,...g,...null!=d&&!p&&{customerId:{_eq:d}},...null!=m&&{completion_by_customer:{_eq:m}},...x&&"recurring"===f&&{recurrence_series_id:{_is_null:!1}},...x&&"non-recurring"===f&&{recurrence_series_id:{_is_null:!0}},...x&&h&&{recurrence_series_id:{_eq:h}},...u&&u.length>0&&{Taxonomy:{Taxonomy:{id:{_in:u}}}},...t?.customerView&&null!=t.customerUserId&&null!=t.customerAccountId&&{assignedUserId:{_eq:t.customerUserId},customerId:{_eq:t.customerAccountId},archived:{_eq:!1}}}}},et={yes:!0,no:!1};var er=e.i(128662),ei=e.i(398038),es=e.i(667986),en=e.i(122965),ea=e.i(10945),el=e.i(74633),eo=e.i(505962),ed=e.i(511667),ec=e.i(974261),eu=e.i(604265);let ef=["GetTasksTable","GetCustomerTasksTable","GetTaskDetails"];var em=e.i(1893),eh=e.i(57538),ex=((t=ex||{}).CreatedAt="{'id': 'ORDER'}",t.Customer="{'Customer': {'name': 'ORDER'}}",t.AssignedTo="{'AssignedUser': {'nameFirst': 'ORDER'}}",t);let ep=e=>{let{initialFilters:t={archived:!1}}=e,i=(0,Z.f)(),j=(0,a.useRouter)(),{user:w}=(0,N.f)(),I=w?.accountType==="customer",T=!!(w?.id&&w?.accountType),D=I&&!!(w?.id&&w?.accountId),S=I?D:T,A=I?"customer_task_table":t.filterType??"task_table",[M,q]=(0,s.useState)(!1),[$,U]=(0,ea.f)({key:`filter-form-tasks-${A}`+(t.customerId?"-"+t.customerId:""),initialValue:{archived:!!t.archived},storageType:"sessionStorage"}),O=!I&&"string"==typeof j.query.recurrence_series_id&&j.query.recurrence_series_id||void 0,P=(0,s.useMemo)(()=>({...((e,t)=>{let r,i,{customerView:s,userId:n}=t,a=s||e.assignedToMe?n:e.assignedUser?.value;return{status:e.status?.length?e.status.map(e=>{let{value:t}=e;return t}):null,priority:e.priority?.length?e.priority.map(e=>{let{value:t}=e;return t}):null,tags:e.tags?.length?e.tags.map(e=>{let{value:t}=e;return t}):null,assignedUserId:a,dueDate:e.dueDate??null,archived:!s&&!!e.archived,completionByCustomer:s?null:"string"==typeof(r=e.completionByCustomer)&&r in et?et[r]??null:null,recurring:"recurring"===(i=e.recurring)||"non-recurring"===i?i:null,customerId:e.customerAccount?.value??null,customerUserId:e.customerUser?.value??null,q:e.search?`%${e.search}%`:null}})($,{customerView:I,userId:w?.id}),recurrenceSeriesId:O}),[$,I,w?.id,O]),{reference:W,pagination:Y,order:R}=(0,en.f)({initialSort:[{item:"id",order:"desc"}]}),G=(0,s.useMemo)(()=>S?D&&w?.id!=null&&w?.accountId!=null?ee(P,{customerView:!0,customerUserId:w.id,customerAccountId:w.accountId}):ee(P,{customerView:!1}):{where:{}},[S,P,D,w?.accountId,w?.id]),L=(0,s.useMemo)(()=>({...G,offset:Y.offset,limit:Y.limit,orderBy:R.length?R:[{id:"desc"}]}),[G,Y.offset,Y.limit,R]),z=(0,p.t)(b,{skip:!T||I,variables:L,fetchPolicy:"cache-and-network"}),V=(0,p.t)(y,{skip:!D,variables:L,fetchPolicy:"cache-and-network"}),B={aggregate:{totalCount:0}},K=I?V.data?.meta??B:z.data?.meta??B,Q=I?V.loading:z.loading,ex=I?V.refetch:z.refetch,ep=!S||Q,[eg]=(0,g.f)(v,{refetchQueries:["GetTasksTable"]}),{scopeDialogOpen:ej,futureSiblingCount:eb,deletingScope:ey,archiveTask:ev,confirmArchiveScope:ek,closeScopeDialog:eC}=function(e){let[t,r]=(0,s.useState)(!1),[i,n]=(0,s.useState)(0),[a,l]=(0,s.useState)(null),[o]=(0,E.f)(eu.Z),[d,{isLoading:c}]=(0,ed.f)(`/task/${a?.id??0}`,{queryKey:"recurring-task-archive-delete",method:"DELETE",baseUrl:ec.M,refetchQueries:ef,onCompleted:()=>{r(!1),l(null),e?.()}}),u=(0,s.useCallback)(async e=>{if(!e.recurrence_series_id)return!1;let{data:t}=await o({variables:{seriesId:e.recurrence_series_id,dueDate:e.dueDate}}),i=t?.siblingsAfter?.aggregate?.totalCount??0;return i>0&&(n(i),l(e),r(!0),!0)},[o]);return{scopeDialogOpen:t,futureSiblingCount:i,deletingScope:c,archiveTask:u,confirmArchiveScope:(0,s.useCallback)(async e=>{a&&await d({params:{scope:e}})},[d,a]),closeScopeDialog:(0,s.useCallback)(()=>{r(!1),l(null)},[])}}(()=>{ex()}),e_=(0,s.useCallback)(e=>{let{id:t}=e;i.show({content:I?(0,r.jsx)(em.f,{id:t,onUpdated:()=>ex()}):(0,r.jsx)(J.DetailsTaskForm,{id:t}),title:"Task Details",submitForm:I?void 0:"taskDetailsForm",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw",query:{id:t.toString()}})},[I,i,ex]),{open:ew}=(0,ei.f)(e_,"id"),eI=(0,s.useCallback)(e=>{I||(e?.stopPropagation(),i.show({content:(0,r.jsx)(X.f,{close:e=>{i.close(),ex(),ew({id:e})}}),title:"Create Task",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"50vw",lg2:"40vw",query:{create:"true"}}))},[I,i,ew,ex]),{open:eT}=(0,es.f)(eI),eD=(0,s.useCallback)(e=>t=>{t.stopPropagation();let r=t.target;eg({variables:{id:e.id,object:{priority:r.value}}})},[eg]),eS=(0,s.useCallback)(e=>t=>{t.stopPropagation();let r=t.target;eg({variables:{id:e.id,object:{status:r.value}}})},[eg]),eA=(0,s.useCallback)(async(e,t)=>{t&&e.recurrence_series_id&&await ev(e)||eg({variables:{id:e.id,object:{archived:t}}})},[ev,eg]),eM=(0,s.useMemo)(()=>[{minWidth:120,field:"priority",headerName:"Priority",sortable:!0,renderCell:e=>{let t,{row:i}=e;return I?(t=F.s.find(e=>e.value===i.priority),(0,r.jsxs)(m.f,{direction:"row",alignItems:"center",spacing:1,children:[t?.icon,(0,r.jsx)(x.f,{children:t?.label})]})):(0,r.jsx)(k.f,{selectProps:{input:(0,r.jsx)(u.V,{})},withoutSelectIcon:!0,inputComponent:"textWithIcon",selectComponent:"textWithIcon",options:F.s,value:i.priority,onChange:eD(i)})}},{minWidth:200,flex:1,field:"title",headerName:"Task",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsxs)(m.f,{direction:"row",alignItems:"center",children:[(0,r.jsx)(x.f,{mr:1,children:t.title}),I?t.tags?.map(e=>{let{tag:t}=e;return(0,r.jsx)(c.f,{size:"small",label:t.name,sx:{mr:.5}},t.id)}):(0,r.jsx)(_.f,{row:t,entity:"Task",refetchQueries:["GetTasksTable"]})]})}},{minWidth:160,field:"{'id': 'ORDER'}",headerName:"Created date",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,n.default)(t.createdAt).format("YYYY-MM-DD")}},{minWidth:160,field:"dueDate",headerName:"Due date",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,n.default)(t.dueDate).isSame((0,n.default)(),"day")?(0,r.jsx)(x.f,{sx:{color:"info.main"},children:(0,n.default)(t.dueDate).format("YYYY-MM-DD")}):(0,n.default)(t.dueDate).isBefore((0,n.default)(),"day")?(0,r.jsx)(x.f,{sx:{color:"danger.main"},children:(0,n.default)(t.dueDate).format("YYYY-MM-DD")}):(0,r.jsx)(x.f,{children:(0,n.default)(t.dueDate).format("YYYY-MM-DD")})}},...I?[]:[{minWidth:160,field:"{'Customer': {'name': 'ORDER'}}",headerName:"Customer",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(x.f,{children:t.customer})}},{minWidth:160,field:"customerUserName",headerName:"Customer user",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(x.f,{children:t.customerUserName})}}],{minWidth:120,field:"{'AssignedUser': {'nameFirst': 'ORDER'}}",headerName:"Assigned to",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(x.f,{children:t.assignedTo})}},{minWidth:120,field:"status",headerName:"Status",sortable:!0,renderCell:e=>{let t,{row:i}=e;return(0,r.jsxs)(m.f,{direction:"row",alignItems:"center",sx:{gap:.5,width:"fit-content",maxWidth:"100%"},children:[I?(t=F.j.find(e=>e.value===i.status))?(0,r.jsx)(c.f,{size:"small",label:t.label,icon:t.icon,sx:{color:t.color,bgcolor:t.bgcolor}}):(0,r.jsx)(x.f,{children:i.status}):(0,r.jsx)(k.f,{formControl:{sx:{width:"auto",minWidth:0,flexShrink:0,"& .MuiInputBase-root":{width:"auto"},"& .MuiSelect-select":{display:"flex",alignItems:"center",py:0,pr:"0 !important"}}},selectProps:{input:(0,r.jsx)(u.V,{})},withoutSelectIcon:!0,inputComponent:"chip",selectComponent:"chip",options:F.j,value:i.status,onChange:eS(i)}),!I&&i.completion_by_customer&&i.status===F.k.DONE&&(0,r.jsx)(c.f,{size:"small",label:"COMPLETED BY CUSTOMER",sx:{flexShrink:0,bgcolor:"#1565C0",color:"#fff",fontWeight:700,fontSize:"0.65rem"}})]})}},{width:50,field:"actions",headerName:"Actions",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(C.f,{row:t,actionsData:e=>{let t=[];return t.push({icon:"info",onClick:t=>{t.stopPropagation(),ew({id:e.id})},tooltip:"Info"}),I||(e.archived?t.push({icon:"unarchive",onClick:t=>{t.stopPropagation(),eA(e,!1)},tooltip:"Unarchive"}):t.push({icon:"archive",onClick:t=>{t.stopPropagation(),eA(e,!0)},tooltip:"Archive"})),t}})}}],[eD,eA,eS,I,ew]),eq=(0,s.useMemo)(()=>I?(V.data?.tasks??[]).map(e=>({id:e.id,archived:!1,priority:e.priority,title:e.title,createdAt:e.createdAt,dueDate:e.dueDate,assignedTo:e.assignedUser?.fullName,status:e.status,completion_by_customer:e.completion_by_customer})):(z.data?.tasks??[]).map(e=>({id:e.id,archived:!!e.archived,priority:e.priority,title:e.title,createdAt:e.createdAt,dueDate:e.dueDate,customer:e.customer?.name,customerUserName:(0,eh.f)(e)?e.assignedUser?.fullName:void 0,assignedTo:e.assignedUser?.fullName,status:e.status,completion_by_customer:e.completion_by_customer,recurrence_series_id:e.recurrence_series_id,tags:e.tags})),[z.data?.tasks,V.data?.tasks,I]),e$=(0,s.useMemo)(()=>!eq.length&&(P?.q||!I&&P?.assignedUserId||!I&&P?.customerId||!I&&P?.customerUserId||P?.status?.length||P?.priority?.length||P?.dueDate||P?.tags?.length||!I&&P?.archived)?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:I?{title:"No tasks for you yet.",subtitleFirstLine:"When an admin assigns you a task it will show up here."}:{title:"No tasks to do!",subtitleFirstLine:"Congratulations! You don't have any tasks to complete.",subtitleSecondLine:"To create task for you or someone else, click the button below.",buttonText:"Create a task",onAction:eT},[P,I,eT,eq]);return(0,r.jsxs)(m.f,{width:"100%",spacing:2,sx:{height:"calc(100% - 58px)"},children:[(0,r.jsxs)(m.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(d.f,{variant:"contained",startIcon:(0,r.jsx)(o.default,{}),onClick:()=>q(!0),children:"Filters"}),(0,r.jsx)(m.f,{direction:"row",spacing:2,children:!I&&(0,r.jsx)(d.f,{variant:"contained",color:"secondary",onClick:eT,children:"Create Task"})})]}),(0,r.jsxs)(f.f,{sx:{paddingTop:"16px",paddingBottom:"16px",height:"100%"},children:[(0,r.jsxs)(m.f,{direction:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:1,children:[(0,r.jsx)(x.f,{ml:2,variant:"h5",sx:{fontWeight:600},children:"Tasks"}),P.recurrenceSeriesId&&!I&&(0,r.jsx)(c.f,{label:`Series: ${P.recurrenceSeriesId.slice(0,8)}`,onDelete:()=>{let{recurrence_series_id:e,...t}=j.query;j.replace({pathname:j.pathname,query:t},void 0,{shallow:!0})},deleteIcon:(0,r.jsx)(l.default,{}),sx:{mr:2}})]}),(0,r.jsx)(H,{filterForm:$,setFilterForm:U,open:M,setOpen:q,customerView:I}),ep?(0,r.jsx)(m.f,{alignItems:"center",justifyContent:"center",sx:{py:6},children:(0,r.jsx)(h.f,{color:"secondary"})}):eq.length?(0,r.jsx)(el.s,{...W,stateKey:`tasks-${A}`,autoHeight:!1,columns:eM,rows:eq,totalCount:K.aggregate.totalCount,onRowClick:e=>{let{row:t}=e;return ew({id:t.id})},containerHeight:"calc(100% - 32px)",columnVisibilityModel:{}}):(0,r.jsx)(er.f,{imageSrc:"/static/icons/no_tasks_found.svg",...e$})]}),(0,r.jsx)(eo.f,{open:!I&&ej,mode:"archive",futureSiblingCount:eb,onClose:eC,onConfirm:ek,loading:ey})]})},eg=()=>(0,r.jsx)(ep,{initialFilters:{archived:!1,filterType:"task_table"}});eg.getLayout=function(e){return(0,r.jsx)(i.f,{children:e})},e.s(["default",0,eg],946008)}],485773,(e,t,r)=>{let i="/dashboard/tasks";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(946008)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);