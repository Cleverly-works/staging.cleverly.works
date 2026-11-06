(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[667986,e=>{var t=e.i(191788),r=e.i(203828);e.s(["f",0,function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"create",{query:i,isReady:n}=(0,r.useRouter)(),a=(0,t.useRef)(!1),o=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{if(!n)return;let t=!!i[s];!t||a.current||o.current||(e(null),a.current=!0),t||(a.current=!1,o.current=!1)},[e,i,s,n]),{open:(0,t.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o.current=!0,e(t)},[e])}}])},1893,e=>{var t=e.i(391398),r=e.i(191788),s=e.i(776204),i=e.i(432171),n=e.i(362537),a=e.i(936641),o=e.i(755548),l=e.i(800884),d=e.i(76381),c=e.i(986351),u=e.i(740790),m=e.i(813843),f=e.i(115871),h=e.i(587369),p=e.i(422411),x=e.i(159080);let g=x.f`
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
`;var j=e.i(230512),y=e.i(428424),b=e.i(824451),v=e.i(714119),k=e.i(594301),_=e.i(21557),C=e.i(411331),w=e.i(498681),I=e.i(511667),T=e.i(974261),D=e.i(299796),S=e.i(53182),A=e.i(382161),$=e.i(77052),q=e.i(185758),U=e.i(556918);let M={fontFamily:e.i(494575).f.THEME_TYPOGRAPHY.newFont},N=e=>{let{open:r,onClose:s,onConfirm:i,loading:n}=e;return(0,t.jsxs)(A.f,{open:r,onClose:s,PaperProps:{sx:M},children:[(0,t.jsx)(U.f,{sx:M,children:"Mark Completed"}),(0,t.jsx)(q.f,{children:(0,t.jsx)(f.f,{sx:M,children:"Mark this task complete? You won't be able to undo this."})}),(0,t.jsxs)($.f,{children:[(0,t.jsx)(o.f,{variant:"contained",color:"danger",onClick:s,children:"Cancel"}),(0,t.jsx)(o.f,{color:"secondary",variant:"contained",onClick:i,disabled:n,children:"Confirm"})]})]})};var E=e.i(889231);let F=y.j.filter(e=>e.value!==y.k.DONE&&e.value!==y.k.BLOCKED);e.s(["f",0,e=>{let{id:x,onUpdated:A}=e,$=(0,h.f)("(max-width: 900px)"),{user:q}=(0,k.f)(),U=(0,_.f)(),M=(0,C.f)(),Y=(0,w.f)(),O=Y?.admin?.modules?.formBuilder||!1,[G,P]=(0,r.useState)(!1),{data:{task:W}={task:null},loading:R,refetch:V}=(0,i.t)(g,{variables:{id:x}}),{control:L,reset:B}=(0,p.G)({defaultValues:{status:y.k.NEW}});(0,r.useEffect)(()=>{W?.status&&B({status:W.status})},[W?.status,B]);let H=(0,r.useMemo)(()=>W?.form?.[0],[W?.form]),[z,{loading:Q}]=(0,s.f)(j.Q,{refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{U.show({content:"Task updated successfully",severity:"success"}),A?.()},onError:()=>{U.show({content:"Failed to update task",severity:"error"})}}),[K,{isLoading:X}]=(0,I.f)(`/task/${x}`,{queryKey:`complete-customer-task-${x}`,method:"PUT",baseUrl:T.M,params:{scope:"this"},refetchQueries:["GetCustomerTaskDetails","GetCustomerTasksTable","GetCustomerOpenTasksCount"],onCompleted:()=>{U.show({content:"Task completed successfully",severity:"success"}),A?.()},onError:e=>{U.show({content:e.message||"Failed to complete task",severity:"error"})}}),J=Q||X,Z=(0,r.useCallback)(()=>{let e=Array.isArray(H?.formFields)?H.formFields:[],t=H?.submissionData;return!e.length||!!t&&e.filter(e=>e?.required).every(e=>{var r;let s=e?.stateName;return!s||null!=(r=t[s])&&("string"==typeof r?r.trim().length>0:Array.isArray(r)?r.length>0:"object"!=typeof r||Object.keys(r).length>0)})},[H?.formFields,H?.submissionData])(),ee=!!Array.isArray(H?.formFields)&&H.formFields.some(e=>e?.required),et=async()=>{await K({body:{status:y.k.DONE,completion_by_customer:!0}}),P(!1),M.close()},er=(0,r.useMemo)(()=>{if(!W)return[];let e=[];return W.job?.number&&e.push({label:`${(0,D.f)(W.job.type)} ${"quote"!==W.job.type&&W.job.quoted?"Q":""} ${W.job.number}`.trim(),href:`${T.r.portalUrl}/dashboard/issues/view?id=${W.job.number}`}),e},[W]);if(R)return(0,t.jsx)(m.f,{width:"100%",justifyContent:"center",alignItems:"center",sx:{minHeight:200},children:(0,t.jsx)(d.f,{color:"secondary"})});if(!W)return(0,t.jsx)(a.f,{severity:"error",children:"Task is not found"});let es=y.j.find(e=>e.value===W.status)?.label??W.status;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.f,{container:!0,spacing:3,sx:{minHeight:"calc(100vh - 128px)"},children:[(0,t.jsx)(u.f,{item:!0,xs:12,md:5,children:(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(f.f,{variant:"h6",fontWeight:700,children:W.title}),W.content&&(0,t.jsx)(f.f,{variant:"body2",color:"text.secondary",children:W.content}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Due date:"}),(0,t.jsx)(f.f,{fontWeight:600,children:W.dueDate?(0,n.default)(W.dueDate).format("Do MMM YYYY"):"—"})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Status:"}),(0,t.jsx)(l.f,{size:"small",label:es})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:1,alignItems:"center",children:[(0,t.jsx)(f.f,{children:"Assignee:"}),(0,t.jsx)(f.f,{fontWeight:600,children:W.assignedUser?.fullName??"—"})]}),er.length>0&&(0,t.jsxs)(m.f,{spacing:.5,children:[(0,t.jsx)(f.f,{children:"Linked entity:"}),er.map(e=>(0,t.jsx)(E.f,{href:e.href,children:e.label},e.href))]}),O&&H?.id&&(0,t.jsx)(S.f,{taskId:x,form:H,onFormUpdated:()=>V()}),(0,t.jsx)(c.f,{}),(0,t.jsxs)(m.f,{spacing:2,children:[(0,t.jsx)(p.e,{control:L,name:"status",render:e=>{let{value:r,onChange:s}=e;return(0,t.jsx)(b.f,{label:"Status",variant:"standard",color:"secondary",fullWidth:!0,disableClearable:!0,disabled:J,value:F.find(e=>e.value===r)??F[0],options:F,onChange:(e,t)=>{t&&(s(t.value),z({variables:{id:x,object:{status:t.value}}}))}})}}),(0,t.jsx)(o.f,{variant:"contained",color:"secondary",disabled:!Z||W.status===y.k.DONE||J,onClick:()=>P(!0),sx:{alignSelf:"flex-start"},children:"Mark Completed"})]}),ee&&!Z&&(0,t.jsx)(f.f,{variant:"body2",color:"error",children:"Complete the required form fields before marking this task done."})]})}),!$&&(0,t.jsx)(u.f,{item:!0,xs:12,md:.5,display:"flex",justifyContent:"center",children:(0,t.jsx)(c.f,{orientation:"vertical"})}),(0,t.jsx)(u.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(v.f,{elevation:0,maxHeight:"800px",title:"Activity",id:x,adminId:q.adminId,scope:"task",expanded:!0,hideExpandIcon:!0})})]}),(0,t.jsx)(N,{open:G,onClose:()=>P(!1),onConfirm:et,loading:J})]})}],1893)},946008,e=>{var t,r=e.i(391398),s=e.i(293965),i=e.i(191788),n=e.i(362537),a=e.i(203828),o=e.i(512057),l=e.i(891723),d=e.i(755548),c=e.i(800884),u=e.i(84961),m=e.i(88152),f=e.i(813843),h=e.i(76381),p=e.i(115871),x=e.i(432171),g=e.i(776204),j=e.i(159080);let y=j.f`
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
`,b=j.f`
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
`;var k=e.i(382461),_=e.i(239964),C=e.i(360364),w=e.i(740790),I=e.i(683125),T=e.i(652148),D=e.i(587369),S=e.i(515523),A=e.i(901004),$=e.i(152078),q=e.i(799083),U=e.i(824451),M=e.i(422411),N=e.i(877341),E=e.i(514707),F=e.i(594301),Y=e.i(722394),O=e.i(428424),G=e.i(655477),P=e.i(827010),W=e.i(106997),R=e.i(867586),V=e.i(593626);let L=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],B=[{label:"Recurring only",value:"recurring"},{label:"Non-recurring",value:"non-recurring"}],H=w.f,z=e=>{let{open:t=!1,setOpen:s,filterForm:n,setFilterForm:a,customerView:o=!1}=e,{user:l}=(0,F.f)(),u=4*!!(0,D.f)("(max-width: 400px)"),[m,h]=(0,i.useState)(""),{control:x,handleSubmit:g,register:j,reset:y,setValue:b,watch:v}=(0,M.G)({defaultValues:n}),k=v("customerAccount"),[_,{loading:C,data:{items:w}={items:[]}}]=(0,N.f)(P.h,{variables:{accountId:l.adminId,limit:50,offset:0,q:""!==m?`%${m}%`:null}});return(0,i.useEffect)(()=>{t&&y(n)},[t,n,y]),(0,r.jsx)(Q,{keepMounted:!0,open:t,onClose:()=>s(!1),children:(0,r.jsx)("form",{onSubmit:g(e=>{a(e),s(!1)}),children:(0,r.jsx)(K,{children:(0,r.jsxs)(H,{container:!0,rowGap:4,children:[(0,r.jsx)(H,{container:!0,children:(0,r.jsx)(H,{item:!0,xs:12,children:(0,r.jsx)(T.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"search",inputRef:j})})}),(0,r.jsxs)(H,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{control:x,name:"status",render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)(S.f,{multiple:!0,limitTags:1,color:"secondary",options:O.j,value:t||[],onChange:(e,t)=>{s(t)},renderOption:(e,t)=>(0,r.jsx)(A.f,{...e,children:(0,r.jsx)(c.f,{size:"small",label:t.label,icon:t.icon,sx:{color:t.color,bgcolor:t.bgcolor}})}),renderTags:(e,t)=>e.map((e,s)=>(0,r.jsx)(c.f,{size:"small",label:e.label,icon:e.icon,sx:{color:e.color,bgcolor:e.bgcolor},...t({index:s})})),renderInput:e=>(0,r.jsx)(T.f,{...e,variant:"standard",color:"secondary",label:"Select status"})})}})}),!o&&(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{name:"assignedUser",control:x,render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)(W.f,{value:t||null,onChange:(e,t)=>s(t),onOpen:()=>_(),loading:C,options:w,setSearch:h,isOptionEqualToValue:(e,t)=>e.value===t.value,textFieldProps:{color:"secondary",variant:"standard",label:"Assigned to"}})}})})]}),(0,r.jsxs)(H,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{control:x,name:"priority",render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)(S.f,{multiple:!0,limitTags:1,color:"secondary",options:O.s,value:t||[],onChange:(e,t)=>{s(t)},renderOption:(e,t)=>(0,r.jsx)(A.f,{...e,children:(0,r.jsxs)(f.f,{direction:"row",alignItems:"center",spacing:1,children:[t.icon,(0,r.jsxs)(p.f,{children:[" ",t.label]})]})}),renderTags:e=>e.map(e=>(0,r.jsxs)(f.f,{direction:"row",alignItems:"center",spacing:1,mr:1,children:[e.icon,(0,r.jsxs)(p.f,{children:[" ",e.label]})]})),renderInput:e=>(0,r.jsx)(T.f,{...e,variant:"standard",color:"secondary",label:"Select priority"})})}})}),(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{control:x,name:"dueDate",defaultValue:null,render:e=>(0,r.jsx)(Y.f,{...e,label:"Due date",format:"Do MMM YYYY",slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary"}}})})})]}),!o&&(0,r.jsxs)(H,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(G.f,{control:x})}),(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{name:"customerAccount",control:x,defaultValue:null,render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)(R.f,{value:t||null,onChange:e=>{e?.value!==t?.value&&b("customerUser",null),s(e)}})}})})]}),!o&&(0,r.jsx)(H,{container:!0,columnSpacing:4,rowGap:u,children:(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{name:"customerUser",control:x,defaultValue:null,render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)(V.f,{customerAccountId:k?.value,value:t||null,onChange:s,helperText:""})}})})}),!o&&(0,r.jsxs)(H,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{name:"completionByCustomer",control:x,defaultValue:null,render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)(U.f,{label:"Completed by customer",variant:"standard",color:"secondary",fullWidth:!0,options:[...L],value:L.find(e=>e.value===t)??null,onChange:(e,t)=>s(t?.value??null),disableClearable:!1})}})}),(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{name:"recurring",control:x,defaultValue:null,render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)(U.f,{label:"Recurrence",variant:"standard",color:"secondary",fullWidth:!0,options:[...B],value:B.find(e=>e.value===t)??null,onChange:(e,t)=>s(t?.value??null),disableClearable:!1})}})})]}),!o&&(0,r.jsxs)(H,{container:!0,columnSpacing:4,rowGap:u,children:[(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{name:"assignedToMe",control:x,render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)($.f,{control:(0,r.jsx)(q.f,{color:"secondary",checked:t,onChange:e=>s(e.target.checked)}),label:"Assigned to me"})}})}),(0,r.jsx)(H,{item:!0,xs:12,xs2:6,children:(0,r.jsx)(M.e,{name:"archived",control:x,render:e=>{let{value:t,onChange:s}=e;return(0,r.jsx)($.f,{control:(0,r.jsx)(q.f,{color:"secondary",checked:t,onChange:e=>s(e.target.checked)}),label:"Show archived tasks"})}})})]}),(0,r.jsx)(H,{container:!0,item:!0,xs:12,children:(0,r.jsxs)(f.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,r.jsx)(d.f,{variant:"contained",color:"danger",onClick:()=>void(a({}),y({}),s(!1)),children:"Cancel"}),(0,r.jsx)(d.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})})]})})})})},Q=(0,E.f)(I.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),K=(0,E.f)(m.f)(()=>({padding:"24px",maxWidth:"700px",maxHeight:"100vh",overflowY:"scroll"}));var X=e.i(265387),J=e.i(811179),Z=e.i(411331);let ee=(e,t)=>{let{q:r,archived:s,status:i,priority:a,dueDate:o,assignedUserId:l,customerId:d,customerUserId:c,tags:u,recurring:m,completionByCustomer:f,recurrenceSeriesId:h}=e,p=!t?.customerView,x=null!=l&&null!=c&&l!==c,g=x?{assignedUserId:{_in:[]}}:null!=l?{assignedUserId:{_eq:l}}:null!=c?{assignedUserId:{_eq:c},AssignedUser:{Account_Users:{status:{_eq:"active"},Account:{type:{_eq:"customer"}},...null!=d&&{accountId:{_eq:d}}}}}:{};return{where:{_or:r?[{title:{_ilike:r}},{content:{_ilike:r}}]:void 0,archived:{_eq:s},...i?{status:{_in:i}}:null==f?{status:{_nin:[O.k.DONE]}}:{},priority:a?.length?{_in:a}:void 0,dueDate:o?{_gte:(0,n.default)(o).startOf("day").utc().toISOString(),_lte:(0,n.default)(o).endOf("day").utc().toISOString()}:void 0,...g,...null!=d&&!x&&{customerId:{_eq:d}},...null!=f&&{completion_by_customer:{_eq:f}},...p&&"recurring"===m&&{recurrence_series_id:{_is_null:!1}},...p&&"non-recurring"===m&&{recurrence_series_id:{_is_null:!0}},...p&&h&&{recurrence_series_id:{_eq:h}},...u&&u.length>0&&{Taxonomy:{Taxonomy:{id:{_in:u}}}},...t?.customerView&&null!=t.customerUserId&&null!=t.customerAccountId&&{assignedUserId:{_eq:t.customerUserId},customerId:{_eq:t.customerAccountId},archived:{_eq:!1}}}}},et={yes:!0,no:!1};var er=e.i(128662),es=e.i(398038),ei=e.i(667986),en=e.i(122965),ea=e.i(10945),eo=e.i(74633),el=e.i(505962),ed=e.i(511667),ec=e.i(974261),eu=e.i(604265);let em=["GetTasksTable","GetCustomerTasksTable","GetTaskDetails"];var ef=e.i(1893),eh=e.i(57538),ep=((t=ep||{}).CreatedAt="{'id': 'ORDER'}",t.Customer="{'Customer': {'name': 'ORDER'}}",t.AssignedTo="{'AssignedUser': {'nameFirst': 'ORDER'}}",t);let ex=e=>{let{initialFilters:t={archived:!1}}=e,s=(0,Z.f)(),j=(0,a.useRouter)(),{user:w}=(0,F.f)(),I=w?.accountType==="customer",T=!!(w?.id&&w?.accountType),D=I&&!!(w?.id&&w?.accountId),S=I?D:T,A=I?"customer_task_table":t.filterType??"task_table",[$,q]=(0,i.useState)(!1),[U,M]=(0,ea.f)({key:`filter-form-tasks-${A}`+(t.customerId?"-"+t.customerId:""),initialValue:{archived:!!t.archived},storageType:"sessionStorage"}),E=!I&&"string"==typeof j.query.recurrence_series_id&&j.query.recurrence_series_id||void 0,Y=(0,i.useMemo)(()=>({...((e,t)=>{let r,s,{customerView:i,userId:n}=t,a=i||e.assignedToMe?n:e.assignedUser?.value;return{status:e.status?.length?e.status.map(e=>{let{value:t}=e;return t}):null,priority:e.priority?.length?e.priority.map(e=>{let{value:t}=e;return t}):null,tags:e.tags?.length?e.tags.map(e=>{let{value:t}=e;return t}):null,assignedUserId:a,dueDate:e.dueDate??null,archived:!i&&!!e.archived,completionByCustomer:i?null:"string"==typeof(r=e.completionByCustomer)&&r in et?et[r]??null:null,recurring:"recurring"===(s=e.recurring)||"non-recurring"===s?s:null,customerId:e.customerAccount?.value??null,customerUserId:e.customerUser?.value??null,q:e.search?`%${e.search}%`:null}})(U,{customerView:I,userId:w?.id}),recurrenceSeriesId:E}),[U,I,w?.id,E]),{reference:G,pagination:P,order:W}=(0,en.f)({initialSort:[{item:"id",order:"desc"}]}),R=(0,i.useMemo)(()=>S?D&&w?.id!=null&&w?.accountId!=null?ee(Y,{customerView:!0,customerUserId:w.id,customerAccountId:w.accountId}):ee(Y,{customerView:!1}):{where:{}},[S,Y,D,w?.accountId,w?.id]),V=(0,i.useMemo)(()=>({...R,offset:P.offset,limit:P.limit,orderBy:W.length?W:[{id:"desc"}]}),[R,P.offset,P.limit,W]),L=(0,x.t)(y,{skip:!T||I,variables:V,fetchPolicy:"cache-and-network"}),B=(0,x.t)(b,{skip:!D,variables:V,fetchPolicy:"cache-and-network"}),H={aggregate:{totalCount:0}},Q=I?B.data?.meta??H:L.data?.meta??H,K=I?B.loading:L.loading,ep=I?B.refetch:L.refetch,ex=!S||K,[eg]=(0,g.f)(v,{refetchQueries:["GetTasksTable"]}),{scopeDialogOpen:ej,futureSiblingCount:ey,deletingScope:eb,archiveTask:ev,confirmArchiveScope:ek,closeScopeDialog:e_}=function(e){let[t,r]=(0,i.useState)(!1),[s,n]=(0,i.useState)(0),[a,o]=(0,i.useState)(null),[l]=(0,N.f)(eu.Z),[d,{isLoading:c}]=(0,ed.f)(`/task/${a?.id??0}`,{queryKey:"recurring-task-archive-delete",method:"DELETE",baseUrl:ec.M,refetchQueries:em,onCompleted:()=>{r(!1),o(null),e?.()}}),u=(0,i.useCallback)(async e=>{if(!e.recurrence_series_id)return!1;let{data:t}=await l({variables:{seriesId:e.recurrence_series_id,dueDate:e.dueDate}}),s=t?.siblingsAfter?.aggregate?.totalCount??0;return s>0&&(n(s),o(e),r(!0),!0)},[l]);return{scopeDialogOpen:t,futureSiblingCount:s,deletingScope:c,archiveTask:u,confirmArchiveScope:(0,i.useCallback)(async e=>{a&&await d({params:{scope:e}})},[d,a]),closeScopeDialog:(0,i.useCallback)(()=>{r(!1),o(null)},[])}}(()=>{ep()}),eC=(0,i.useCallback)(e=>{let{id:t}=e;s.show({content:I?(0,r.jsx)(ef.f,{id:t,onUpdated:()=>ep()}):(0,r.jsx)(J.DetailsTaskForm,{id:t}),title:"Task Details",submitForm:I?void 0:"taskDetailsForm",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw",query:{id:t.toString()}})},[I,s,ep]),{open:ew}=(0,es.f)(eC,"id"),eI=(0,i.useCallback)(e=>{I||(e?.stopPropagation(),s.show({content:(0,r.jsx)(X.f,{close:e=>{s.close(),ep(),ew({id:e})}}),title:"Create Task",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"50vw",lg2:"40vw",query:{create:"true"}}))},[I,s,ew,ep]),{open:eT}=(0,ei.f)(eI),eD=(0,i.useCallback)(e=>t=>{t.stopPropagation();let r=t.target;eg({variables:{id:e.id,object:{priority:r.value}}})},[eg]),eS=(0,i.useCallback)(e=>t=>{t.stopPropagation();let r=t.target;eg({variables:{id:e.id,object:{status:r.value}}})},[eg]),eA=(0,i.useCallback)(async(e,t)=>{t&&e.recurrence_series_id&&await ev(e)||eg({variables:{id:e.id,object:{archived:t}}})},[ev,eg]),e$=(0,i.useMemo)(()=>[{minWidth:120,field:"priority",headerName:"Priority",sortable:!0,renderCell:e=>{let t,{row:s}=e;return I?(t=O.s.find(e=>e.value===s.priority),(0,r.jsxs)(f.f,{direction:"row",alignItems:"center",spacing:1,children:[t?.icon,(0,r.jsx)(p.f,{children:t?.label})]})):(0,r.jsx)(k.f,{selectProps:{input:(0,r.jsx)(u.V,{})},withoutSelectIcon:!0,inputComponent:"textWithIcon",selectComponent:"textWithIcon",options:O.s,value:s.priority,onChange:eD(s)})}},{minWidth:200,flex:1,field:"title",headerName:"Task",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsxs)(f.f,{direction:"row",alignItems:"center",children:[(0,r.jsx)(p.f,{mr:1,children:t.title}),I?t.tags?.map(e=>{let{tag:t}=e;return(0,r.jsx)(c.f,{size:"small",label:t.name,sx:{mr:.5}},t.id)}):(0,r.jsx)(C.f,{row:t,entity:"Task",refetchQueries:["GetTasksTable"]})]})}},{minWidth:160,field:"{'id': 'ORDER'}",headerName:"Created date",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,n.default)(t.createdAt).format("YYYY-MM-DD")}},{minWidth:160,field:"dueDate",headerName:"Due date",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,n.default)(t.dueDate).isSame((0,n.default)(),"day")?(0,r.jsx)(p.f,{sx:{color:"info.main"},children:(0,n.default)(t.dueDate).format("YYYY-MM-DD")}):(0,n.default)(t.dueDate).isBefore((0,n.default)(),"day")?(0,r.jsx)(p.f,{sx:{color:"danger.main"},children:(0,n.default)(t.dueDate).format("YYYY-MM-DD")}):(0,r.jsx)(p.f,{children:(0,n.default)(t.dueDate).format("YYYY-MM-DD")})}},...I?[]:[{minWidth:160,field:"{'Customer': {'name': 'ORDER'}}",headerName:"Customer",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(p.f,{children:t.customer})}},{minWidth:160,field:"customerUserName",headerName:"Customer user",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(p.f,{children:t.customerUserName})}}],{minWidth:120,field:"{'AssignedUser': {'nameFirst': 'ORDER'}}",headerName:"Assigned to",sortable:!0,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(p.f,{children:t.assignedTo})}},{minWidth:120,field:"status",headerName:"Status",sortable:!0,renderCell:e=>{let t,{row:s}=e;return(0,r.jsxs)(f.f,{direction:"row",alignItems:"center",sx:{gap:.5,width:"fit-content",maxWidth:"100%"},children:[I?(t=O.j.find(e=>e.value===s.status))?(0,r.jsx)(c.f,{size:"small",label:t.label,icon:t.icon,sx:{color:t.color,bgcolor:t.bgcolor}}):(0,r.jsx)(p.f,{children:s.status}):(0,r.jsx)(k.f,{formControl:{sx:{width:"auto",minWidth:0,flexShrink:0,"& .MuiInputBase-root":{width:"auto"},"& .MuiSelect-select":{display:"flex",alignItems:"center",py:0,pr:"0 !important"}}},selectProps:{input:(0,r.jsx)(u.V,{})},withoutSelectIcon:!0,inputComponent:"chip",selectComponent:"chip",options:O.j,value:s.status,onChange:eS(s)}),!I&&s.completion_by_customer&&s.status===O.k.DONE&&(0,r.jsx)(c.f,{size:"small",label:"COMPLETED BY CUSTOMER",sx:{flexShrink:0,bgcolor:"#1565C0",color:"#fff",fontWeight:700,fontSize:"0.65rem"}})]})}},{width:50,field:"actions",headerName:"Actions",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(_.f,{row:t,actionsData:e=>{let t=[];return t.push({icon:"info",onClick:t=>{t.stopPropagation(),ew({id:e.id})},tooltip:"Info"}),I||(e.archived?t.push({icon:"unarchive",onClick:t=>{t.stopPropagation(),eA(e,!1)},tooltip:"Unarchive"}):t.push({icon:"archive",onClick:t=>{t.stopPropagation(),eA(e,!0)},tooltip:"Archive"})),t}})}}],[eD,eA,eS,I,ew]),eq=(0,i.useMemo)(()=>I?(B.data?.tasks??[]).map(e=>({id:e.id,archived:!1,priority:e.priority,title:e.title,createdAt:e.createdAt,dueDate:e.dueDate,assignedTo:e.assignedUser?.fullName,status:e.status,completion_by_customer:e.completion_by_customer})):(L.data?.tasks??[]).map(e=>({id:e.id,archived:!!e.archived,priority:e.priority,title:e.title,createdAt:e.createdAt,dueDate:e.dueDate,customer:e.customer?.name,customerUserName:(0,eh.f)(e)?e.assignedUser?.fullName:void 0,assignedTo:e.assignedUser?.fullName,status:e.status,completion_by_customer:e.completion_by_customer,recurrence_series_id:e.recurrence_series_id,tags:e.tags})),[L.data?.tasks,B.data?.tasks,I]),eU=(0,i.useMemo)(()=>!eq.length&&(Y?.q||!I&&Y?.assignedUserId||!I&&Y?.customerId||!I&&Y?.customerUserId||Y?.status?.length||Y?.priority?.length||Y?.dueDate||Y?.tags?.length||!I&&Y?.archived)?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:I?{title:"No tasks for you yet.",subtitleFirstLine:"When an admin assigns you a task it will show up here."}:{title:"No tasks to do!",subtitleFirstLine:"Congratulations! You don't have any tasks to complete.",subtitleSecondLine:"To create task for you or someone else, click the button below.",buttonText:"Create a task",onAction:eT},[Y,I,eT,eq]);return(0,r.jsxs)(f.f,{width:"100%",spacing:2,sx:{height:"calc(100% - 58px)"},children:[(0,r.jsxs)(f.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(d.f,{variant:"contained",startIcon:(0,r.jsx)(l.default,{}),onClick:()=>q(!0),children:"Filters"}),(0,r.jsx)(f.f,{direction:"row",spacing:2,children:!I&&(0,r.jsx)(d.f,{variant:"contained",color:"secondary",onClick:eT,children:"Create Task"})})]}),(0,r.jsxs)(m.f,{sx:{paddingTop:"16px",paddingBottom:"16px",height:"100%"},children:[(0,r.jsxs)(f.f,{direction:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:1,children:[(0,r.jsx)(p.f,{ml:2,variant:"h5",sx:{fontWeight:600},children:"Tasks"}),Y.recurrenceSeriesId&&!I&&(0,r.jsx)(c.f,{label:`Series: ${Y.recurrenceSeriesId.slice(0,8)}`,onDelete:()=>{let{recurrence_series_id:e,...t}=j.query;j.replace({pathname:j.pathname,query:t},void 0,{shallow:!0})},deleteIcon:(0,r.jsx)(o.default,{}),sx:{mr:2}})]}),(0,r.jsx)(z,{filterForm:U,setFilterForm:M,open:$,setOpen:q,customerView:I}),ex?(0,r.jsx)(f.f,{alignItems:"center",justifyContent:"center",sx:{py:6},children:(0,r.jsx)(h.f,{color:"secondary"})}):eq.length?(0,r.jsx)(eo.s,{...G,stateKey:`tasks-${A}`,autoHeight:!1,columns:e$,rows:eq,totalCount:Q.aggregate.totalCount,onRowClick:e=>{let{row:t}=e;return ew({id:t.id})},containerHeight:"calc(100% - 32px)",columnVisibilityModel:{}}):(0,r.jsx)(er.f,{imageSrc:"/static/icons/no_tasks_found.svg",...eU})]}),(0,r.jsx)(el.f,{open:!I&&ej,mode:"archive",futureSiblingCount:ey,onClose:e_,onConfirm:ek,loading:eb})]})},eg=()=>(0,r.jsx)(ex,{initialFilters:{archived:!1,filterType:"task_table"}});eg.getLayout=function(e){return(0,r.jsx)(s.f,{children:e})},e.s(["default",0,eg],946008)}],485773,(e,t,r)=>{let s="/dashboard/tasks";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(946008)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})}]);