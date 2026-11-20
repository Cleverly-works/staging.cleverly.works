(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[373379,564927,e=>{var t=e.i(391398),i=e.i(203828),r=e.i(891962),o=e.i(570112),n=e.i(458144);let a={builder:n.V,test:n.x,history:n.o};e.s(["f",0,e=>{let{automationId:n,active:s}=e,l=(0,i.useRouter)();return(0,t.jsxs)(r.f,{value:Object.keys(a).indexOf(s),onChange:(e,t)=>{let i="number"==typeof t?t:parseInt(t,10),r=Object.keys(a)[i];r&&l.push(a[r](n))},"aria-label":"Workflow views","data-testid":"automation-view-tabs",children:[(0,t.jsx)(o.f,{label:"Builder"}),(0,t.jsx)(o.f,{label:"Test preview"}),(0,t.jsx)(o.f,{label:"Run history"})]})}],373379);var s=e.i(936641),l=e.i(738251);e.s(["f",0,e=>{let{what:i}=e;return(0,t.jsx)(l.f,{p:3,children:(0,t.jsxs)(s.f,{severity:"error",children:[i," not found. Check the link, or open it from Workflows."]})})}],564927)},495185,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(800884),o=e.i(492448);let n=(0,i.f)(r.f,{shouldForwardProp:e=>"kind"!==e})(e=>{let{theme:t,kind:i}=e,r=(0,o.Z)(t,i);return{backgroundColor:r.background,color:r.text,fontWeight:700,borderRadius:6,height:24,textTransform:"uppercase",letterSpacing:"0.04em",fontSize:11}});e.s(["f",0,e=>{let{kind:i,label:r,size:o="small"}=e;return(0,t.jsx)(n,{kind:i,label:r,size:o,"data-testid":"status-badge"})}])},3143,e=>{var t=e.i(159080),i=e.i(988204);let r=t.f`
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
`,o=t.f`
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
`,n=t.f`
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
`,a=t.f`
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
  ${r}
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
  ${o}
`,u=t.f`
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
  ${o}
  ${n}
`,f=t.f`
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
`;e.s(["I",0,s,"l",0,f,"h",0,a,"X",0,l,"G",0,u,"V",0,d],3143)},900693,e=>{let t={pending:{kind:"neutral",label:"Pending"},running:{kind:"progress",label:"Running"},completed:{kind:"success",label:"Completed"},partially_completed:{kind:"warning",label:"Completed with errors"},stopped:{kind:"neutral",label:"Stopped"},failed:{kind:"danger",label:"Failed"},cancelled:{kind:"neutral",label:"Cancelled"}},i={pending:{kind:"neutral",label:"Pending"},scheduled:{kind:"progress",label:"Scheduled"},waiting_dependency:{kind:"progress",label:"Waiting on previous step"},waiting_condition:{kind:"progress",label:"Waiting on condition"},waiting_object:{kind:"progress",label:"Waiting on update"},dispatched:{kind:"progress",label:"Dispatched"},in_progress:{kind:"progress",label:"In progress"},completed:{kind:"success",label:"Completed"},skipped:{kind:"neutral",label:"Skipped"},failed:{kind:"danger",label:"Failed"},cancelled:{kind:"neutral",label:"Cancelled"},timed_out:{kind:"danger",label:"Timed out"}};e.s(["r",0,e=>0===e.length?{content:"Workflow published"}:{severity:"warning",color:"info",duration:12e3,content:`Workflow published. Check: ${e.map(e=>e.message).join(" ")}`},"K",0,e=>{let{status:t,hasUnpublishedChanges:i}=e;if(i)return"Workflow saved. Publish to start running these changes.";switch(t){case"draft":return"Workflow saved as draft";case"active":return"Workflow saved and still active";case"paused":return"Workflow saved and still paused";default:return"Workflow saved"}},"Q",0,e=>{switch(e){case"active":return"success";case"paused":return"warning";default:return"neutral"}},"Y",0,e=>t[e]??{kind:"neutral",label:e},"d",0,e=>i[e]??{kind:"neutral",label:e}])},988204,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`;e.s(["R",0,r,"U",0,i])},144627,e=>{var t=e.i(391398),i=e.i(203828),r=e.i(293965),o=e.i(738251),n=e.i(373379),a=e.i(841166),s=e.i(191788),l=e.i(813843),d=e.i(755548),u=e.i(76381),f=e.i(936641),c=e.i(163202),m=e.i(39056),p=e.i(718119),w=e.i(296618),g=e.i(480525),k=e.i(424896),h=e.i(627657),b=e.i(955379),_=e.i(23593);let W=e=>{let{workflowId:i}=e,[r,n]=(0,s.useState)(30),{data:a,error:W,refetch:y}=(0,c.f)({workflowId:i,days:r});if(W)return(0,t.jsxs)(f.f,{severity:"error",sx:{mb:3},action:(0,t.jsx)(d.f,{color:"secondary",onClick:y,children:"Try again"}),children:["Failed to load run analytics: ",W.message]});if(!a)return(0,t.jsx)(l.f,{alignItems:"center",py:4,children:(0,t.jsx)(u.f,{color:"secondary",size:24})});if(0===a.overview.totalRuns)return null;let{overview:x,completionTrend:v,runsPerDay:$,byStage:R,outcomes:j}=a;return(0,t.jsxs)(l.f,{spacing:2,sx:{mb:3},"data-testid":"automation-run-stats",children:[(0,t.jsxs)(o.f,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr 1fr",md:"repeat(4, 1fr)"},gap:2},children:[(0,t.jsx)(w.f,{title:"Times run",value:String(x.totalRuns)}),(0,t.jsx)(w.f,{title:"Avg time to completion",value:(0,m.M)(x.avgDurationMs)}),(0,t.jsx)(w.f,{title:"Success rate",value:(0,b.f)(x.successRate)}),(0,t.jsx)(w.f,{title:"Last run",value:(0,m.C)(x.lastRunAt)})]}),(0,t.jsxs)(o.f,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr"},gap:2},children:[(0,t.jsx)(k.f,{title:"Time to completion over time",labels:v.map(e=>(0,m._)(e.date)),data:v.map(e=>e.avgDurationMs),color:p.p,valueFormatter:m.M}),(0,t.jsx)(k.f,{title:"Runs over time",labels:$.map(e=>e.date.slice(5)),data:$.map(e=>e.count),color:p.p,action:(0,t.jsx)(_.f,{days:r,onChange:n})}),(0,t.jsx)(g.f,{title:"Average time per stage",labels:R.map(e=>e.name),data:R.map(e=>e.avgMs),horizontal:!0,color:p.l,valueFormatter:m.M,height:Math.max(300,38*R.length)}),(0,t.jsx)(h.f,{title:"Run outcomes",labels:j.map(e=>p.n[e.status]??e.status),data:j.map(e=>e.count),colors:j.map(e=>p.m[e.status]??p.p)})]})]})};var y=e.i(458144),x=e.i(448601);let v=e=>{let{automationId:r}=e,s=(0,x.f)((0,i.useRouter)().query.page);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.f,{automationId:r,active:"history"}),(0,t.jsxs)(o.f,{p:3,children:[(0,t.jsx)(W,{workflowId:r}),(0,t.jsx)(a.f,{workflowId:r,onRowClick:e=>{i.default.push((0,y.T)(r,e,s))}})]})]})};var $=e.i(564927);let R=()=>{let{query:e,isReady:r}=(0,i.useRouter)();if(!r)return null;let o=(0,x.f)(e.id);return null===o?(0,t.jsx)($.f,{what:"Workflow"}):(0,t.jsx)(v,{automationId:o})};R.getLayout=function(e){return(0,t.jsx)(r.f,{children:e})},e.s(["default",0,R],144627)}],883544,(e,t,i)=>{let r="/dashboard/automations/runs";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(144627)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);