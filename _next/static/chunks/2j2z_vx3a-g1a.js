(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[74633,e=>{var t=e.i(391398),i=e.i(191788),o=e.i(920235),r=e.i(738251),a=e.i(813843),n=e.i(115871),s=e.i(529292),l=e.i(280445),d=e.i(449587),c=e.i(317536),p=e.i(974261),u=e.i(749231),f=e.i(845825),m=e.i(587369),g=e.i(332789),h=e.i(340569),y=e.i(203828);let v=e=>{let{disabled:i,currentPage:o,totalCount:r,pageSize:a,onPageChange:n}=e,s=(0,m.f)("(max-width:400px)"),l=(0,m.f)("(max-width:500px)");return(0,t.jsx)(b,{disabled:i,page:o,count:Math.ceil(r/a),onChange:(e,t)=>n(t),variant:"outlined",shape:"rounded",size:s?"small":"medium",hidePrevButton:1===o,hideNextButton:o===Math.ceil(r/a),siblingCount:+!l,renderItem:e=>(0,t.jsx)(f.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})},b=(0,l.f)(u.f)(e=>{let{hidePrevButton:t,hideNextButton:i,theme:o}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px",flexShrink:0},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:o.palette.white.main,backgroundColor:o.palette.secondary.main,...i?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}}),w={item:"id",order:"desc"},x=(0,l.f)(r.f)(e=>{let{containerHeight:t,containerMaxHeight:i}=e;return{height:t,maxHeight:i,minHeight:0,display:"flex",flexDirection:"column"}}),k=(0,l.f)(o.f)(e=>{let{theme:t,hideHeader:i}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",flex:1,minHeight:0},"& .MuiDataGrid-columnHeaders":{...i&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...i&&{marginTop:"0 !important"}},"& .MuiDataGrid-iconSeparator":{opacity:1},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["B",0,v,"s",0,e=>{let{hideHeader:o,columns:r,history:s,totalCount:l,paginationSize:u,containerHeight:f,containerMaxHeight:m,autoHeight:b,currentPage:j=0,onTableStateChange:_,initialSort:C=[w],noRowsOverlay:T,loading:M,stateKey:S,onColumnOrderChange:I,onColumnWidthChange:W,slotProps:$,...B}=e,P=(0,y.useRouter)(),A=u||p.r.paginationSize,{apiRef:R,displayColumns:D,persistColumnOrder:O,persistColumnWidth:q}=(0,g.f)({stateKey:S,columns:r});(0,h.f)(R,!B.disableColumnReorder);let L=(0,i.useMemo)(()=>({...$,baseTooltip:{disableTouchListener:!0,...$?.baseTooltip}}),[$]),N=(0,i.useCallback)((e,t,i)=>{I?.(e,t,i),O()},[I,O]),z=(0,i.useCallback)((e,t,i)=>{W?.(e,t,i),q(e)},[W,q]),F=(0,i.useCallback)(e=>{P.push({query:{...P.query,page:e}},void 0,{shallow:!0})},[P]),U=(0,i.useCallback)(e=>{s&&F(e),_?.(t=>({...t,currentPage:e-1,pageSize:A}))},[F,s,_,A]),V=(0,i.useMemo)(()=>({sorting:{sortModel:C.map(e=>({field:e.item,sort:e.order}))}}),[C]);return(0,i.useEffect)(()=>{!l||l>j*A||U(1)},[j,U,A,l]),(0,t.jsxs)(x,{containerHeight:f,containerMaxHeight:m,children:[(0,t.jsx)(k,{hideHeader:o,hideFooter:!0,disableColumnMenu:!0,disableRowSelectionOnClick:!0,autoHeight:b,sortingMode:"server",filterMode:"server",apiRef:R,onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?_?.(e=>({...e,sorting:[{item:t.field.replace(/'/g,'"'),order:t.sort}]})):_?.(e=>({...e,sorting:C}))},onColumnOrderChange:N,onColumnWidthChange:z,columns:D,initialState:V,loading:M,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(d.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(c.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(a.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(d.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(c.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(a.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(n.f,{children:"There are no results."})}),noRowsOverlay:()=>T?(0,t.jsx)(a.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:T()}):(0,t.jsx)(a.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(n.f,{children:"There are no results."})})},slotProps:L,...B}),l&&Math.ceil(l/A)>1?(0,t.jsx)(v,{disabled:M,currentPage:j+1,totalCount:l,pageSize:A,onPageChange:U}):null]})}])},453809,580841,e=>{var t=e.i(391398),i=e.i(191788),o=e.i(98926),r=e.i(280445),a=e.i(382161),n=e.i(556918),s=e.i(185758),l=e.i(77052),d=e.i(755548),c=e.i(652148),p=e.i(813843),u=e.i(115871),f=e.i(936641),m=e.i(76381),g=e.i(71446),h=e.i(3878),y=e.i(3143);let v=e=>({title:e,description:null,status:"draft",rerunPolicy:"one_active",trigger:{type:"jobEventOccurs"},conditions:[],steps:[{localId:"step-1",position:1,name:"First step",actionType:"create_task",actionConfig:{},timing:{mode:"immediate"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0}]});e.s(["s",0,"Void works readiness sequence","b",0,v,"_",0,e=>({title:e,description:"End-to-end void turnaround — pre-void inspection, securing, schedule of works, clearance, repairs, compliance testing and re-let — to minimise key-to-key time.",status:"draft",rerunPolicy:"one_active",trigger:{},conditions:[],steps:[{localId:"void-step-1",position:1,name:"Pre-void inspection",actionType:"create_task",actionConfig:{title:"Pre-void inspection",description:"Inspect the property while the tenant is still in situ — log major damage, abandoned items and any tenant recharges."},timing:{mode:"immediate"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-2",position:2,name:"Secure property & change locks",actionType:"create_job",actionConfig:{title:"Secure void property",description:"Gain entry, change locks or fit a key safe, and apply emergency boarding or glazing if the property is unsecured."},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-3",position:3,name:"Notify voids manager",actionType:"create_notification",actionConfig:{message:"Property {{property}} is now void and secured — void works underway."},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_silently",enabled:!0},{localId:"void-step-4",position:4,name:"Schedule of works survey",actionType:"create_task",actionConfig:{title:"Void survey — schedule of works",description:"Assess the empty property against the Lettable Standard (structure, damp/mould, pests) and scope the works against the Schedule of Rates."},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-5",position:5,name:"Clearance & deep clean",actionType:"create_job",actionConfig:{title:"Void clearance & deep clean",description:"Remove bulk rubbish and abandoned items, then deep clean throughout."},timing:{mode:"delay_after_step",delayValue:1,delayUnit:"working_days",dependsOnLocalId:"void-step-4"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-6",position:6,name:"Multi-trade repairs & upgrades",actionType:"create_job",actionConfig:{title:"Void repairs & upgrades",description:"Plastering, joinery and painting, plus any kitchen or bathroom replacement scoped in the survey."},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-7",position:7,name:"Wait for works to complete",actionType:"wait_until",actionConfig:{timeoutValue:10,timeoutUnit:"working_days"},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-8",position:8,name:"Safety & compliance checks",actionType:"create_job",actionConfig:{title:"Void compliance checks",description:"Complete water hygiene, gas safety and electrical tests; service extractor fans and verify fire safety compliance."},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-9",position:9,name:"QA void survey & sign-off",actionType:"create_task",actionConfig:{title:"Post-works QA void survey",description:"Confirm the property meets the agreed Lettable Standard before re-let."},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_notify_owner",enabled:!0},{localId:"void-step-10",position:10,name:"Handover to lettings team",actionType:"create_notification",actionConfig:{message:"The post-works QA survey for {{property}} has been raised. Lettings team: confirm its result before re-letting."},timing:{mode:"after_prev"},runConditions:[],condNotMetBehaviour:"skip",failureBehaviour:"stop_silently",enabled:!0}]})],580841);let b=(0,r.f)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"flex-start",gap:t.spacing(1),padding:t.spacing(1.25,1.5),borderRadius:t.shape.borderRadius,background:t.palette.action.hover,color:t.palette.text.secondary,fontSize:13,lineHeight:1.5}});e.s(["f",0,e=>{let{open:r,onClose:w,onCreated:x,template:k=null}=e,{fetchQuery:j}=(0,h.r)(),_=(0,o.f)(),[C,T]=(0,i.useState)(k?.defaultTitle??""),[M,S]=(0,i.useState)(!1),[I,W]=(0,i.useState)(null);(0,i.useEffect)(()=>{r&&(T(k?.defaultTitle??""),W(null))},[r,k]);let $=async()=>{let e=C.trim();if(!e)return void W("Give your workflow a title.");W(null),S(!0);try{let t=k?k.buildPayload(e):v(e),i=await j("/v2/workflow",{method:"POST",body:{...t}});await _.refetchQueries({include:[y.I]}),x(i.id)}catch(t){let e=t instanceof Error?t.message:"Could not create the workflow. Please try again.";W(e)}finally{S(!1)}},B=()=>{M||(W(null),w())},P=k?`Use ${k.defaultTitle}`:"New workflow";return(0,t.jsxs)(a.f,{open:r,onClose:B,maxWidth:"sm",fullWidth:!0,"data-testid":"create-automation-modal",children:[(0,t.jsx)(n.f,{children:P}),(0,t.jsx)(s.f,{children:(0,t.jsxs)(p.f,{spacing:2.5,sx:{pt:1},children:[(0,t.jsx)(c.f,{color:"secondary",label:"Title",value:C,onChange:e=>T(e.target.value),fullWidth:!0,autoFocus:!0,disabled:M,inputProps:{"data-testid":"create-automation-title"},placeholder:k?k.defaultTitle:"My workflow"}),k&&(0,t.jsxs)(b,{children:[(0,t.jsx)(g.default,{fontSize:"small",sx:{mt:.25}}),(0,t.jsxs)(p.f,{spacing:.5,children:[(0,t.jsxs)(u.f,{variant:"body2",sx:{color:"text.primary"},children:["This template seeds ",k.stepPreview.length," steps:"," ",k.stepPreview.join(" → "),"."]}),(0,t.jsx)(u.f,{variant:"caption",sx:{color:"text.secondary"},children:"The builder will let you change every step, the trigger, and the start conditions before publishing."})]})]}),I&&(0,t.jsx)(f.f,{severity:"error",children:I})]})}),(0,t.jsxs)(l.f,{sx:{px:3,pb:2},children:[(0,t.jsx)(d.f,{variant:"contained",color:"danger",onClick:B,disabled:M,children:"Cancel"}),(0,t.jsx)(d.f,{onClick:()=>void $(),variant:"contained",color:"secondary",disabled:M,startIcon:M?(0,t.jsx)(m.f,{size:14,color:"inherit"}):null,"data-testid":"create-automation-submit",children:M?"Creating…":"Create workflow"})]})]})}],453809)},3143,e=>{var t=e.i(159080),i=e.i(988204);let o=t.f`
  fragment WorkflowStepDefinitionFields on WorkflowStepDefinition {
    id
    workflowId
    position
    name
    actionType
    actionConfig
    sendTo
    timingMode
    timingDelayValue
    timingDelayUnit
    timingDependsOnStepId
    timingSpecificTime
    timingMeta
    runConditions
    condNotMetBehaviour
    completionRule
    failureBehaviour
    enabled
    createdAt
    updatedAt
  }
`,r=t.f`
  fragment WorkflowRunFields on WorkflowRun {
    id
    workflowId
    workflowVersionId
    adminId
    status
    triggerEventName
    entityRefs
    summary
    startedAt
    finishedAt
    error
    cancelledAt
    cancelledByUserId
    createdAt
    updatedAt
  }
`,a=t.f`
  fragment WorkflowStepRunFields on WorkflowStepRun {
    id
    workflowRunId
    stepDefinitionId
    position
    status
    scheduledFor
    dispatchedAt
    completedAt
    timedOutAt
    actionMessageId
    output
    error
    attempts
    skipReason
    createdAt
    updatedAt
  }
`,n=t.f`
  query GetAutomationOwners($where: Workflow_bool_exp = {}, $q: String = "%%", $limit: Int = 50) {
    owners: Workflow(
      where: {
        _and: [
          $where
          {
            AutomationOwner: { _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }] }
          }
        ]
      }
      distinct_on: automationOwnerUserId
      order_by: { automationOwnerUserId: asc }
      limit: $limit
    ) {
      id
      user: AutomationOwner {
        id
        nameFirst
        nameLast
      }
    }
    creators: Workflow(
      where: {
        _and: [
          $where
          { automationOwnerUserId: { _is_null: true } }
          { User: { _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }] } }
        ]
      }
      distinct_on: userId
      order_by: { userId: asc }
      limit: $limit
    ) {
      id
      user: User {
        id
        nameFirst
        nameLast
      }
    }
  }
`,s=t.f`
  query GetAutomationsV2(
    $where: Workflow_bool_exp
    $limit: Int = 50
    $offset: Int = 0
    $order: [Workflow_order_by!] = [{ updatedAt: desc }]
  ) {
    automations: Workflow(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      ...WorkflowFields
      schemaVersion
      description
      rerunPolicy
      currentVersionId
      archivedAt
      automationOwnerUserId
      fired
      owner: AutomationOwner {
        id
        nameFirst
        nameLast
      }
      creator: User {
        id
        nameFirst
        nameLast
      }
      stepCount: Steps_aggregate(where: { position: { _gte: 1 } }) {
        aggregate {
          count
        }
      }
      lastRun: Runs(limit: 1, order_by: { createdAt: desc }) {
        id
        status
        createdAt
        finishedAt
        summary
      }
    }
    meta: Workflow_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
  ${i.U}
`,l=t.f`
  query GetAutomationV2($id: Int!) {
    automations: Workflow(where: { id: { _eq: $id }, schemaVersion: { _eq: 2 } }) {
      ...WorkflowFields
      schemaVersion
      description
      rerunPolicy
      currentVersionId
      archivedAt
      automationOwnerUserId
      unpublishedChanges
      steps: Steps(where: { position: { _gte: 1 } }, order_by: { position: asc }) {
        ...WorkflowStepDefinitionFields
      }
      conditions: WorkflowConditions {
        id
        isTrigger
        trigger
        condition
      }
    }
  }
  ${i.U}
  ${o}
`,d=t.f`
  query GetWorkflowRuns(
    $where: WorkflowRun_bool_exp
    $limit: Int = 50
    $offset: Int = 0
    $order: [WorkflowRun_order_by!] = [{ createdAt: desc }, { id: desc }]
  ) {
    runs: WorkflowRun(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      ...WorkflowRunFields
      workflow: Workflow {
        id
        title
      }
    }
    meta: WorkflowRun_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
  ${r}
`,c=t.f`
  query GetWorkflowRun($id: bigint!) {
    run: WorkflowRun_by_pk(id: $id) {
      ...WorkflowRunFields
      workflow: Workflow {
        id
        title
      }
      stepRuns: StepRuns(order_by: { position: asc }) {
        ...WorkflowStepRunFields
        stepDefinition: StepDefinition {
          id
          name
          actionType
          position
        }
      }
    }
  }
  ${r}
  ${a}
`,p=t.f`
  query GetAutomationOptions($where: Workflow_bool_exp = {}, $q: String = "%%", $limit: Int = 50) {
    automations: Workflow(
      where: { _and: [$where, { title: { _ilike: $q } }] }
      order_by: { title: asc }
      limit: $limit
    ) {
      id
      title
    }
  }
`;e.s(["I",0,s,"l",0,p,"h",0,n,"X",0,l,"G",0,c,"V",0,d],3143)},458144,e=>{let t=e=>null!=e&&e>1?{page:e}:{};e.s(["V",0,e=>({pathname:"/dashboard/automations/view",query:{id:e}}),"T",0,(e,i,o)=>({pathname:"/dashboard/automations/runs/view",query:{id:e,runId:i,...t(o)}}),"o",0,(e,i)=>({pathname:"/dashboard/automations/runs",query:{id:e,...t(i)}}),"x",0,e=>({pathname:"/dashboard/automations/test",query:{id:e}})])},988204,e=>{var t=e.i(159080);let i=t.f`
  fragment WorkflowFields on Workflow {
    id
    status
    title
    actions
    fired
    sendTo
    taskTemplate
    emailTemplate
    browserNotification
    contextWindowComment
    pushNotification
    meta
    createdAt
    updatedAt
    adminId
    userId
  }
`,o=t.f`
  fragment WorkflowConditionFields on WorkflowCondition {
    id
    isTrigger
    trigger
    condition
    meta
    createdAt
    updatedAt
    workflowId
  }
`;e.s(["R",0,o,"U",0,i])},724427,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("path",{d:"m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"}),"AutoAwesome")},71446,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("path",{d:"M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21"}),"Bolt")},519529,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("path",{d:"M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"}),"KeyboardArrowLeft")},624700,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("path",{d:"M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"}),"KeyboardArrowRight")},891723,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},582098,e=>{var t=e.i(391398),i=e.i(293965),o=e.i(191788),r=e.i(203828),a=e.i(755548),n=e.i(813843),s=e.i(115871),l=e.i(891723),d=e.i(280445),c=e.i(773831),p=e.i(800884),u=e.i(88152),f=e.i(724427),m=e.i(519529),g=e.i(624700),h=e.i(580841);let y=e=>{let t;return{id:e.id,defaultTitle:e.defaultTitle,category:e.category,shortDescription:e.shortDescription,longDescription:e.longDescription,stepPreview:e.spec.steps.map(e=>e.name),buildPayload:(t=e.spec,e=>({title:e,description:t.description??null,status:"draft",rerunPolicy:t.rerunPolicy??"one_active",trigger:t.trigger,conditions:[],steps:t.steps.map((e,t)=>{let i;return{localId:`step-${String(t+1)}`,position:t+1,name:e.name,actionType:e.actionType,actionConfig:e.actionConfig??{},timing:"immediate"===(i=e.timing)?{mode:"immediate"}:"after_prev"===i?{mode:"after_prev"}:{mode:"delay_after_step",delayValue:i.delayAfter,delayUnit:i.unit,dependsOnLocalId:`step-${String(i.stepIndex)}`},runConditions:(e.runConditions??[]).map((e,i)=>({id:`rc-${String(t+1)}-${String(i+1)}`,subject:e.subject,op:e.op,value:e.value})),condNotMetBehaviour:"skip",failureBehaviour:e.failureBehaviour??"stop_notify_owner",enabled:!0}})}))}},v=y({id:"reactive-job-triage",defaultTitle:"Reactive job triage",category:"Maintenance",shortDescription:"Tag new reactive jobs, notify the on-call engineer and wait for them to acknowledge.",longDescription:"Triggered when a job is created (reactive). Tags the job by service line, sends an app notification to the on-call engineer, and waits for the engineer to acknowledge the job.",spec:{description:"Tags new reactive jobs, notifies the on-call engineer and waits for an acknowledgement.",trigger:{type:"jobEventOccurs"},steps:[{name:"Tag job by service line",actionType:"add_tag",timing:"immediate"},{name:"Notify on-call engineer",actionType:"create_notification",timing:"after_prev",actionConfig:{channel:"push",message:"New reactive job for {{property}} — please acknowledge."}},{name:"Wait for engineer acknowledgement",actionType:"wait_until",timing:"after_prev",actionConfig:{object:"job",field:"status",op:"equals",value:"accepted",timeoutValue:5,timeoutUnit:"working_days"}}]}}),b=y({id:"new-supplier-onboarding",defaultTitle:"New supplier onboarding",category:"Operations",shortDescription:"A task to verify a new supplier and collect their documents.",longDescription:"Triggered when a new supplier account is added. Files a task for the operations team to check the supplier's registration, insurance and trade accreditations, and to ask the supplier for any documents that are missing.",spec:{description:"Verifies a new supplier and collects their onboarding documents.",trigger:{type:"accountEventOccurs"},steps:[{name:"Create supplier verification task",actionType:"create_task",timing:"immediate",actionConfig:{title:"Verify new supplier",description:"Check supplier registration, insurance certificates, and trade accreditations, and ask the supplier for any that are missing."}}]}}),w=y({id:"ooh-emergency-cover",defaultTitle:"Out-of-hours emergency cover",category:"Maintenance",shortDescription:"Tag an emergency job, notify on-call, acknowledge the customer, await the engineer.",longDescription:"Starts on the job event you pick. Tags the job as an out-of-hours emergency, notifies the on-call engineer, sends the customer a reassurance acknowledgement email, and waits up to 30 minutes for the engineer to accept the job. It does not check the time of day: add start conditions, such as the job's priority, to choose which jobs it covers.",spec:{description:"Tags an emergency job, notifies the on-call engineer, acknowledges the customer and waits for the engineer to accept.",trigger:{type:"jobEventOccurs"},steps:[{name:"Tag job as out-of-hours emergency",actionType:"add_tag",timing:"immediate"},{name:"Notify on-call engineer",actionType:"create_notification",timing:"after_prev",actionConfig:{channel:"push",message:"Out-of-hours emergency at {{property}} — please respond within 30 minutes."}},{name:"Send acknowledgement email to customer",actionType:"send_email",timing:"after_prev",actionConfig:{subject:"We have received your out-of-hours request"}},{name:"Wait for engineer to accept",actionType:"wait_until",timing:"after_prev",actionConfig:{object:"job",field:"status",op:"equals",value:"accepted",timeoutValue:30,timeoutUnit:"minutes"}}]}}),x=y({id:"issue-triage-job-raise",defaultTitle:"Issue triage & job raise",category:"Maintenance",shortDescription:"Triage a reported issue, tag it, raise the repair job, and notify the coordinator.",longDescription:"Triggered when an issue is reported. Files a triage task to confirm priority and service line, tags the job accordingly, raises the repair work order, and notifies the coordinator that a new job is ready to allocate.",spec:{description:"Triages reported issues and raises the repair job so nothing is missed.",trigger:{type:"jobEventOccurs"},steps:[{name:"Triage reported issue",actionType:"create_task",timing:"immediate",actionConfig:{title:"Triage reported issue",description:"Review the reported issue, confirm priority and the correct service line."}},{name:"Tag by service line",actionType:"add_tag",timing:"after_prev"},{name:"Raise repair job",actionType:"create_job",timing:"after_prev",actionConfig:{title:"Repair",description:"Raise the repair work order for the triaged issue."}},{name:"Notify coordinator",actionType:"create_notification",timing:"after_prev",failureBehaviour:"stop_silently",actionConfig:{message:"New issue triaged for {{property}} — repair job raised and ready to allocate."}}]}}),k=y({id:"job-approval-confirmation",defaultTitle:"Job approval confirmation",category:"Maintenance",shortDescription:"Confirm an approved job to the customer and queue it for coordination.",longDescription:"Triggered when a job is approved. Emails the customer to confirm the job is going ahead, files a task for the coordinator to assign a supplier and schedule, and tags the job as approved.",spec:{description:"Confirms approved jobs to the customer and queues them for coordination.",trigger:{type:"jobEventOccurs"},steps:[{name:"Email customer confirmation",actionType:"send_email",timing:"immediate",actionConfig:{subject:"Your job has been approved"}},{name:"Create coordination task",actionType:"create_task",timing:"after_prev",actionConfig:{title:"Coordinate approved job",description:"Assign a supplier and confirm scheduling for the approved job."}},{name:"Tag as approved",actionType:"add_tag",timing:"after_prev",failureBehaviour:"stop_silently"}]}}),j=y({id:"job-completion-report",defaultTitle:"Job completion report & feedback",category:"Maintenance",shortDescription:"Send a completion report on job close, then request feedback a few days later.",longDescription:"Triggered when a job is completed. Emails the customer a summary report, waits five working days, then sends a short feedback request so service quality is tracked without manual chasing.",spec:{description:"Sends the completion report and follows up for customer feedback.",trigger:{type:"jobEventOccurs"},steps:[{name:"Send completion report to customer",actionType:"send_email",timing:"immediate",actionConfig:{subject:"Your job is complete — summary report"}},{name:"Wait before feedback request",actionType:"wait_time",timing:"after_prev",actionConfig:{delay:5,unit:"working_days"}},{name:"Request customer feedback",actionType:"send_email",timing:"after_prev",failureBehaviour:"skip_notify_owner",actionConfig:{subject:"How did we do? Your feedback"}}]}}),_=y({id:"quote-accepted-mobilise",defaultTitle:"Quote accepted → mobilise works",category:"Operations",shortDescription:"Turn an accepted quote into scheduled works the moment the customer says yes.",longDescription:"Triggered when a quote is accepted. Notifies the operations team, files a mobilisation task to convert the quote into scheduled works and assign resources, and tags the quote as accepted.",spec:{description:"Mobilises works as soon as a quote is accepted.",trigger:{type:"quoteEventOccurs"},steps:[{name:"Notify operations team",actionType:"create_notification",timing:"immediate",actionConfig:{message:"Quote accepted for {{property}} — please mobilise the works."}},{name:"Create mobilisation task",actionType:"create_task",timing:"after_prev",actionConfig:{title:"Mobilise accepted quote",description:"Convert the accepted quote into scheduled works and assign resources."}},{name:"Tag as accepted",actionType:"add_tag",timing:"after_prev"}]}}),C=["Lettings","Maintenance","Operations"],T={Lettings:{bg:"#f1c40f",fg:"#1a1a1a"},Maintenance:{bg:"#e67e22",fg:"#ffffff"},Operations:{bg:"#7f8c8d",fg:"#ffffff"}},M=[{id:"void-works-readiness",defaultTitle:h.s,category:"Lettings",shortDescription:"Run the full void turnaround end to end — inspection, clearance, repairs, compliance and re-let.",longDescription:'Starts from the trigger you pick; its Create job steps publish only on "Issue reported" or "Quote raised". Walks the whole six-phase turnaround: pre-void inspection, securing the property, the schedule-of-works survey to Lettable Standard, clearance and deep clean, multi-trade repairs, safety and compliance testing, then the QA survey and handover to lettings, who confirm its result before re-letting — to minimise key-to-key time.',stepPreview:["Pre-void inspection","Secure property & change locks","Notify voids manager","Schedule of works survey","Clearance & deep clean","Multi-trade repairs & upgrades","Wait for works to complete","Safety & compliance checks","QA void survey & sign-off","Handover to lettings team"],buildPayload:h._},v,w,b,x,k,j,_];var S=e.i(514707),I=e.i(515523),W=e.i(738251),$=e.i(740790),B=e.i(901004),P=e.i(683125),A=e.i(652148);let R={categories:[],stepBucket:null,keyword:""},D=[{value:"<3",label:"Less than 3"},{value:"3-5",label:"3 to 5"},{value:"5-10",label:"5 to 10"},{value:">10",label:"More than 10"}],O=e=>{let{open:i,onClose:r,current:l,onApply:d}=e,[c,p]=(0,o.useState)(l);return(0,o.useEffect)(()=>{i&&p(l)},[i,l]),(0,t.jsx)(q,{keepMounted:!0,open:i,onClose:r,children:(0,t.jsx)("form",{onSubmit:e=>{e.preventDefault(),d(c),r()},children:(0,t.jsx)(L,{children:(0,t.jsx)(W.f,{sx:{p:"24px",pb:"40px"},children:(0,t.jsxs)($.f,{container:!0,rowSpacing:3,sx:{width:"100%"},children:[(0,t.jsxs)($.f,{item:!0,xs:12,children:[(0,t.jsx)(s.f,{variant:"h6",sx:{fontWeight:700,mb:.25},children:"Filter library"}),(0,t.jsx)(s.f,{variant:"body2",sx:{color:"text.secondary"},children:"Use filters to find the workflows you need."})]}),(0,t.jsx)($.f,{item:!0,xs:12,children:(0,t.jsx)(I.f,{multiple:!0,options:[...C],value:c.categories,onChange:(e,t)=>p(e=>({...e,categories:t})),disableCloseOnSelect:!0,ChipProps:{size:"small",color:"secondary"},renderInput:e=>(0,t.jsx)(A.f,{...e,color:"secondary",variant:"standard",label:"Category",margin:"normal",InputLabelProps:{shrink:!0},sx:{"& .MuiInputBase-input":{paddingBottom:"7px"}},placeholder:0===c.categories.length?"Select one or more":""}),"data-testid":"library-filters-category"})}),(0,t.jsx)($.f,{item:!0,xs:12,children:(0,t.jsxs)($.f,{container:!0,columnSpacing:4,rowSpacing:3,alignItems:"flex-start",children:[(0,t.jsx)($.f,{item:!0,xs:12,sm:6,children:(0,t.jsxs)(A.f,{select:!0,fullWidth:!0,color:"secondary",variant:"standard",label:"Number of steps",margin:"normal",InputLabelProps:{shrink:!0},sx:{"& .MuiInputBase-input":{paddingBottom:"7px"}},value:c.stepBucket??"",onChange:e=>p(t=>({...t,stepBucket:e.target.value||null})),children:[(0,t.jsx)(B.f,{value:"",children:"Any"}),D.map(e=>(0,t.jsx)(B.f,{value:e.value,children:e.label},e.value))]})}),(0,t.jsx)($.f,{item:!0,xs:12,sm:6,children:(0,t.jsx)(A.f,{fullWidth:!0,color:"secondary",variant:"standard",label:"Search",margin:"normal",InputLabelProps:{shrink:!0},sx:{"& .MuiInputBase-input":{paddingBottom:"7px"}},placeholder:"Search by name, description, or step",value:c.keyword,onChange:e=>p(t=>({...t,keyword:e.target.value}))})})]})}),(0,t.jsx)($.f,{item:!0,xs:12,children:(0,t.jsxs)(n.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,t.jsx)(a.f,{variant:"contained",color:"danger",onClick:()=>{p(R),d(R),r()},"data-testid":"library-filters-cancel",children:"Cancel"}),(0,t.jsx)(a.f,{variant:"contained",color:"secondary",type:"submit","data-testid":"library-filters-submit",children:"Apply"})]})})]})})})})})},q=(0,S.f)(P.f)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,L=(0,S.f)(u.f)`
  width: 700px;
  max-width: 700px;
  max-height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
`;var N=e.i(74633);let z=(0,d.f)("div")(e=>{let{theme:t}=e;return{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:t.spacing(2)}}),F=(0,d.f)(u.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",padding:t.spacing(2.5),height:"100%",border:`1px solid ${t.palette.divider}`,borderRadius:2*t.shape.borderRadius,transition:"border-color 120ms ease, box-shadow 120ms ease","&:hover":{borderColor:t.palette.secondary.main,boxShadow:`0 6px 24px ${t.palette.action.hover}`}}}),U=(0,d.f)("ol")(e=>{let{theme:t}=e;return{listStyle:"none",margin:0,padding:0,display:"flex",flexDirection:"column",gap:t.spacing(.5),"& li":{fontSize:12,color:t.palette.text.secondary,paddingLeft:t.spacing(2),position:"relative","&::before":{content:'""',position:"absolute",left:4,top:7,width:6,height:6,borderRadius:"50%",backgroundColor:t.palette.secondary.main}}}}),V=e=>{let{template:i,onUseTemplate:r}=e,[l,d]=(0,o.useState)(0),u=i.stepPreview.length,h=Math.ceil(u/5),y=5*l,v=i.stepPreview.slice(y,y+5),b=h>1;return(0,t.jsxs)(F,{elevation:0,"data-testid":`library-card-${i.id}`,children:[(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",spacing:1,sx:{mb:1},children:[(0,t.jsx)(f.default,{fontSize:"small",color:"secondary"}),(0,t.jsx)(p.f,{label:i.category,size:"small",sx:{backgroundColor:T[i.category].bg,color:T[i.category].fg,fontWeight:600,"& .MuiChip-label":{color:T[i.category].fg}}})]}),(0,t.jsx)(s.f,{variant:"h6",sx:{fontWeight:700,mb:.5},children:i.defaultTitle}),(0,t.jsx)(s.f,{variant:"body2",sx:{color:"text.secondary",mb:2,lineHeight:1.5},children:i.shortDescription}),(0,t.jsxs)(s.f,{variant:"body2",sx:{color:"text.primary",fontWeight:700,mb:.75},children:[u," step",1===u?"":"s"]}),(0,t.jsx)(U,{sx:b?{minHeight:110}:void 0,children:v.map((e,o)=>(0,t.jsx)("li",{children:e},`${i.id}-step-${String(y+o)}`))}),b&&(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mt:.5},children:[(0,t.jsxs)(s.f,{variant:"caption",sx:{color:"text.secondary"},children:["Steps ",y+1,"–",Math.min(y+5,u)," of ",u]}),(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",spacing:.5,children:[(0,t.jsx)(c.f,{size:"small",color:"secondary",disabled:0===l,onClick:()=>d(e=>Math.max(0,e-1)),"aria-label":"Previous steps","data-testid":`library-steps-prev-${i.id}`,children:(0,t.jsx)(m.default,{fontSize:"small"})}),(0,t.jsx)(c.f,{size:"small",color:"secondary",disabled:l>=h-1,onClick:()=>d(e=>Math.min(h-1,e+1)),"aria-label":"More steps","data-testid":`library-steps-next-${i.id}`,children:(0,t.jsx)(g.default,{fontSize:"small"})})]})]}),(0,t.jsx)(n.f,{sx:{mt:"auto",pt:2},children:(0,t.jsx)(a.f,{variant:"contained",color:"secondary",onClick:()=>r(i),"data-testid":`library-use-${i.id}`,fullWidth:!0,children:"Use this template"})})]})},G=e=>{let{onUseTemplate:i,filters:r=R,onClearFilters:l}=e,d=(0,o.useMemo)(()=>M.filter(e=>(!(r.categories.length>0)||!!r.categories.includes(e.category))&&(!r.stepBucket||!!((e,t)=>{switch(e){case"<3":return t<3;case"3-5":return t>=3&&t<=5;case"5-10":return t>5&&t<=10;case">10":return t>10}})(r.stepBucket,e.stepPreview.length))&&!!((e,t)=>{if(!t)return!0;let i=t.toLowerCase().trim();return!i||[e.defaultTitle,e.shortDescription,e.longDescription,e.category,...e.stepPreview].join(" ").toLowerCase().includes(i)})(e,r.keyword)),[r]),[c,p]=(0,o.useState)(1);(0,o.useEffect)(()=>p(1),[r]);let f=Math.min(c,Math.max(1,Math.ceil(d.length/8))),m=d.slice((f-1)*8,8*f);return 0===M.length?(0,t.jsx)(u.f,{sx:{p:6,textAlign:"center",border:"1px dashed",borderColor:"divider",color:"text.secondary"},children:(0,t.jsx)(s.f,{variant:"body1",sx:{fontWeight:600},children:"No templates available yet."})}):0===d.length?(0,t.jsxs)(u.f,{sx:{p:6,textAlign:"center",border:"1px dashed",borderColor:"divider",color:"text.secondary"},"data-testid":"library-empty-filtered",children:[(0,t.jsx)(s.f,{variant:"body1",sx:{fontWeight:600,mb:.5},children:"No templates match these filters."}),(0,t.jsx)(s.f,{variant:"body2",sx:{mb:2},children:"Try removing a category or widening the step range."}),l&&(0,t.jsx)(a.f,{variant:"outlined",color:"secondary",onClick:l,children:"Clear filters"})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(z,{"data-testid":"library-grid",children:m.map(e=>(0,t.jsx)(V,{template:e,onUseTemplate:i},e.id))}),d.length>8&&(0,t.jsx)(n.f,{direction:"row",justifyContent:"flex-end",sx:{mt:2},children:(0,t.jsx)(N.B,{currentPage:f,totalCount:d.length,pageSize:8,onPageChange:p})})]})};var H=e.i(453809),E=e.i(458144);let Q=()=>{let[e,i]=(0,o.useState)(null),[d,c]=(0,o.useState)(R),[p,u]=(0,o.useState)(!1);return(0,t.jsxs)(n.f,{spacing:2,sx:{width:"100%"},children:[(0,t.jsx)(n.f,{alignItems:"flex-start",children:(0,t.jsx)(a.f,{variant:"contained",startIcon:(0,t.jsx)(l.default,{}),onClick:()=>u(!0),"data-testid":"library-filters-open",children:"Filters"})}),(0,t.jsxs)(n.f,{spacing:.25,children:[(0,t.jsx)(s.f,{variant:"h5",sx:{fontWeight:700,color:"text.primary"},children:"Workflow library"}),(0,t.jsx)(s.f,{variant:"body2",sx:{color:"text.secondary"},children:"Start from a pre-built workflow and edit it in the builder."})]}),(0,t.jsx)(G,{onUseTemplate:e=>i(e),filters:d,onClearFilters:()=>c(R)}),(0,t.jsx)(O,{open:p,onClose:()=>u(!1),current:d,onApply:e=>c(e)}),(0,t.jsx)(H.f,{open:null!==e,onClose:()=>i(null),onCreated:e=>{i(null),r.default.push((0,E.V)(e))},template:e})]})},X=()=>(0,t.jsx)(Q,{});X.getLayout=function(e){return(0,t.jsx)(i.f,{children:e})},e.s(["default",0,X],582098)}],420561,(e,t,i)=>{let o="/dashboard/automations/library";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(582098)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);