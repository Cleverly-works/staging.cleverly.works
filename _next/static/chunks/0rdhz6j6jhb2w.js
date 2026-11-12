(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,900356,e=>{e.s(["f",0,[{label:"Call",value:"call"},{label:"Email",value:"email"},{label:"Portal",value:"portal"},{label:"Other",value:"other"}]])},287723,e=>{e.s(["f",0,function e(t,r){return!0===t||Array.isArray(t)||null==r||"object"!=typeof r?r:Object.fromEntries(Object.keys(t).map(n=>[n,e(t[n]??!1,r[n])]))}])},577579,e=>{var t=e.i(391398);e.i(443645);var r=e.i(648116),n=e.i(21557),i=e.i(88152),a=e.i(813843),o=e.i(115871),s=e.i(755548),l=e.i(529422),d=e.i(280445),c=e.i(191788),u=e.i(74633),m=e.i(936641),f=e.i(498681);let h=e=>{let{errors:r,onClose:n}=e,{admin:i}=(0,f.f)(),d=i.jobSetting.jobNumberPrefix,h=i.jobSetting.jobNumberSuffix,x=(0,c.useMemo)(()=>[{flex:1,minWidth:100,field:"job",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(l.f,{id:r.job.id,number:r.job.number,type:r.job.type,numberPrefix:d,numberSuffix:h,isBlank:!0,isHref:!0})}},{flex:1,minWidth:200,field:"customerError",headerName:"Customer Error",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(o.f,{variant:"body1",children:r.customerError?.message})}},{flex:1,minWidth:200,field:"supplierError",headerName:"Supplier Error",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(o.f,{variant:"body1",children:r.supplierError?.message})}}],[d,h]),y=(0,c.useMemo)(()=>r.sort((e,t)=>t.job.id-e.job.id),[r]);return(0,t.jsx)(p,{sx:{padding:4},children:(0,t.jsxs)(a.f,{direction:"column",alignItems:"center",spacing:2,children:[(0,t.jsx)(m.f,{variant:"filled",severity:"error",sx:{width:"100%"},children:"Some errors occurred while recalculating the finances."}),(0,t.jsx)(a.f,{height:"100%",width:"100%",sx:{overflow:"auto"},children:(0,t.jsx)(u.s,{autoHeight:!1,columns:x,rows:y,getRowId:e=>e.job.id,containerHeight:"calc(80vh - 200px)"})}),(0,t.jsx)(s.f,{fullWidth:!0,variant:"contained",color:"secondary",onClick:n,children:"Ok"})]})})},p=(0,d.f)(i.f)(e=>{let{theme:t}=e;return{padding:`${t.spacing(4)} !important`,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"600px",maxHeight:"80vh"}});e.s(["S",0,()=>{let[e,n]=(0,r.f)();return{recalcModal:e,showRecalcErrors:async e=>{let r=e?.errors;return!!Array.isArray(r)&&0!==r.length&&(await n({content:e=>{let{onClose:n}=e;return(0,t.jsx)(h,{errors:r,onClose:n})}}),!0)}}},"H",0,()=>{let e=(0,n.f)();return{showRecalcErrorsSnackbar:t=>{let r=t?.errors;if(!Array.isArray(r)||0===r.length)return!1;let[n]=r,i=[n?.customerError?.message,n?.supplierError?.message].filter(e=>!!e);for(let t of i.length>0?i:["Saved, but the job finances could not be recalculated. Re-open the job to refresh them."])e.show({content:t,severity:"warning"});return!0}}}],577579)},600504,711636,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(738251),i=e.i(551918),a=e.i(566118),o=e.i(280875),s=e.i(755548),l=e.i(280445),d=e.i(687722),c=e.i(813843),u=e.i(706692);let m=(0,l.f)(o.f)(e=>{let{theme:t}=e;return{"& .MuiSvgIcon-root.MuiStepIcon-root.Mui-active":{color:t.palette.secondary.main},"& .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed":{color:t.palette.secondary.main}}}),f=(0,l.f)(d.f)(e=>{let{theme:t}=e;return{"&.Mui-active":{"& .MuiStepConnector-line":{borderColor:t.palette.secondary.main}},"&.Mui-completed":{"& .MuiStepConnector-line":{borderColor:t.palette.secondary.main}},"& .MuiStepConnector-line":{borderColor:t.palette.grey[300],borderTopWidth:4,borderRadius:1,marginTop:"-2px"}}}),h=(0,l.f)(c.f)(()=>({padding:"16px 72px","@media (max-width: 600px)":{padding:"16px 0px"}})),p=(0,l.f)(c.f,{shouldForwardProp:e=>"isColumn"!==e})(e=>{let{isColumn:t}=e;return{flexDirection:"row",...t&&{flexDirection:"column","&.MuiStack-root>:not(style):not(style)":{width:"100%",maxWidth:"100%"},"&.MuiStack-root>:not(style)~:not(style)":{width:"100%",maxWidth:"100%",marginTop:"16px",marginLeft:"0px"}}}});e.s(["f",0,e=>{let{activeStep:o,steps:l,canMoveToReview:d=!1,canCancel:x=!1,onCancel:y,onNext:v,onBack:b,onReview:g,children:j}=e,w=(0,u.f)("(max-width: 800px)"),I=r.useMemo(()=>{let e=0;return x&&e++,0!==o&&e++,o!==l.length-1&&e++,d&&o!==l.length-1&&e++,o===l.length-1&&e++,e},[o,x,d,l.length]);return(0,t.jsxs)(n.f,{sx:{width:"100%"},children:[(0,t.jsx)(i.f,{activeStep:o,alternativeLabel:!0,connector:(0,t.jsx)(f,{}),children:l.map(e=>(0,t.jsx)(a.f,{...{},children:(0,t.jsx)(m,{children:e})},e))}),(0,t.jsxs)(h,{width:"100%",children:[j,(0,t.jsxs)(p,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:4,mt:2,isColumn:w&&I>2,children:[x&&(0,t.jsx)(c.f,{width:"100%",children:(0,t.jsx)(s.f,{color:"danger",variant:"contained",onClick:y,sx:{maxWidth:w&&I>2?"100%":120},children:"Cancel"})}),0!==o&&(0,t.jsx)(s.f,{color:"muiGray",variant:"outlined",disabled:0===o,onClick:b,sx:{minWidth:120},children:"Back"}),o!==l.length-1&&(0,t.jsx)(s.f,{color:"success",variant:"contained",onClick:v,sx:{minWidth:130},children:"Next"}),d&&o!==l.length-1&&(0,t.jsx)(s.f,{color:"secondary",variant:"contained",onClick:g,sx:{minWidth:130},children:"Go to review"}),o===l.length-1&&(0,t.jsx)(s.f,{color:"secondary",variant:"contained",type:"submit",sx:{minWidth:130},children:"Submit"})]})]})]})}],600504);var x=e.i(115871),y=e.i(871931),v=e.i(302966),b=e.i(760981),g=e.i(162440);let j=(0,l.f)(y.f)(e=>{let{theme:t,transparent:r,isHighlighted:n,displayNone:i}=e;return{...i&&{display:"none"},backgroundColor:r?"transparent":t.palette.background.paper,transition:"background-color 0.3s ease-in-out, border 0.3s ease-in-out",...n&&{backgroundColor:t.palette.info.main,border:`2px solid ${t.palette.info.main}`},...r&&{border:"none",boxShadow:"none"},"& .MuiAccordionDetails-root":{...r&&{paddingTop:0}},"& .MuiAccordionSummary-root":{...r&&{minHeight:0}},"& .MuiAccordionSummary-content":{width:"100%",alignItems:"center",justifyContent:"center",...r&&{margin:0}}}});e.s(["f",0,e=>{let{title:n,transparent:i,defaultExpanded:a,allowExpand:o,children:s,displayNone:l=!1}=e,d=(0,r.useMemo)(()=>n.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,function(e,t){return 0==+e?"":0===t?e.toLowerCase():e.toUpperCase()}),[n]),[u,m]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=null,t=()=>{window.location.hash===`#${d}`&&m(!0),e&&clearTimeout(e),e=setTimeout(()=>{window.location.hash="",m(!1)},2e3)};return window.addEventListener("hashchange",t),()=>{window.removeEventListener("hashchange",t),e&&clearTimeout(e)}},[d]),(0,t.jsxs)(j,{id:d,isHighlighted:u,transparent:i,defaultExpanded:a,displayNone:l,...i&&!o&&{expanded:!0},children:[(0,t.jsx)(v.f,{expandIcon:(!i||o)&&(0,t.jsx)(g.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,t.jsx)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:(0,t.jsx)(x.f,{variant:"h6",children:n})})}),(0,t.jsx)(b.f,{children:s})]})}],711636)},720847,e=>{var t=e.i(391398),r=e.i(262999),n=e.i(974266),i=e.i(405167),a=e.i(405765),o=e.i(886779),s=e.i(917563),l=e.i(345837),d=e.i(491171),c=e.i(589200),u=e.i(422411),m=e.i(280445);let f=(0,m.f)(c.f)(()=>({"& .MuiFormHelperText-root.Mui-error":{marginLeft:"0px"}})),h=(0,m.f)(s.f)(()=>({position:"relative"}));e.s(["f",0,e=>{let{name:s,control:c,options:m,errors:p,optionDescription:x,loading:y=!1,handleChange:v}=e;return y?(0,t.jsx)(o.f,{width:"100%",spacing:1,children:(0,t.jsx)(n.f,{color:"secondary"})}):(0,t.jsxs)(o.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.e,{name:s,control:c,defaultValue:null,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(h,{children:(0,t.jsxs)(f,{color:"secondary",error:!!p?.[s],children:[(0,t.jsx)(d.f,{"aria-labelledby":"priority",name:"priority",color:"secondary",value:r?.value,onChange:e=>{let t=e.target.value,r=m.find(e=>e.value===Number(t));n(r),v?.(r)},sx:{flexDirection:"row"},children:m.map(e=>(0,t.jsx)(l.f,{value:e.value,control:(0,t.jsx)(a.f,{color:"secondary"}),label:e.label},e.value))}),p?.[s]&&"message"in p[s]&&(0,t.jsx)(i.f,{error:!0,children:p[s]?.message}),(0,t.jsx)("input",{type:"hidden",value:r})]})})}}),x&&(0,t.jsx)(r.f,{variant:"filled",severity:"info",sx:{backgroundColor:"muiGray.main"},children:x})]})}])},181881,e=>{var t=e.i(432171),r=e.i(35818),n=e.i(695567);e.s(["f",0,e=>{let{subtype:i,customerId:a,locationId:o}=e,{data:s,loading:l}=(0,t.t)(r.o,{skip:!a||!o,variables:{customerId:a,locationId:o}});return{priority:{options:(0,n.f)({subtype:i,slas:s?.slas||[],customerSlas:s?.customerSlas||[],locationSlas:s?.locationSlas||[]}),loading:l}}}])},98982,532827,340680,268602,682685,423187,e=>{var t=e.i(159080);let r=t.f`
  query GetCustomer($id: Int!) {
    customer: Account_by_pk(id: $id) {
      id
      name
      rateType: meta(path: "finance.rateType")
      serviceRateType: meta(path: "finance.serviceRateType")
      serviceRateLabour: meta(path: "finance.serviceRateLabour")
      manager: Manager {
        id
        fullName
      }
    }
  }
`;e.s(["f",0,r],98982);var n=e.i(391398),i=e.i(886779),a=e.i(871931),o=e.i(760981),s=e.i(302966),l=e.i(115871),d=e.i(752727);e.s(["f",0,e=>{let{title:t,children:r}=e;return(0,n.jsxs)(a.f,{sx:{backgroundColor:"transparent",borderTop:"0 !important"},children:[(0,n.jsx)(s.f,{sx:{"& .MuiAccordionSummary-content":{justifyContent:"space-between"},padding:0},expandIcon:(0,n.jsx)(d.P,{}),"aria-controls":"mark-on-map-content",id:"mark-on-map-header",children:(0,n.jsx)(l.f,{color:"#626262",children:t})}),(0,n.jsx)(o.f,{sx:{padding:0},children:(0,n.jsx)(i.f,{mt:1.5,children:r})})]})}],532827);var c=e.i(813843),u=e.i(936641),m=e.i(394989);e.i(864980);var f=e.i(790388);let h={width:"100%"};e.s(["f",0,e=>{let{setValue:t,permitsLinks:r,attachmentsPermits:i,showWarning:a=!0,onDeleteExistingMedia:o}=e;return(0,n.jsxs)(c.f,{sx:h,children:[a&&(0,n.jsx)(u.f,{variant:"filled",severity:"error",sx:{mb:2,mt:2},children:"Warning: This site requires a permit for attendance"}),(0,n.jsx)(m.f,{name:"permitsLinks",setValue:t,values:r,title:"Permits links"}),(0,n.jsx)(f.f,{setValue:t,values:i,onDeleteExistingMedia:o,name:"permitsAttachments",title:"Permits attachments"})]})}],340680);var p=e.i(162440),x=e.i(986351),y=e.i(821627),v=e.i(555588);e.s(["f",0,e=>{let{title:t,fields:r,onEdit:i}=e;return(0,n.jsxs)(a.f,{defaultExpanded:!0,children:[(0,n.jsx)(s.f,{expandIcon:(0,n.jsx)(p.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,n.jsxs)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:[(0,n.jsx)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:(0,n.jsx)(l.f,{variant:"h6",sx:{mr:"-60px"},children:t})}),(0,n.jsx)(y.f,{color:"secondary",variant:"contained",disableMinWidth:!0,size:"small",sx:{mr:2},onClick:i,children:(0,n.jsx)(v.default,{sx:{fontSize:18}})})]})}),(0,n.jsx)(o.f,{sx:{padding:0},children:(0,n.jsx)(c.f,{width:"100%",spacing:0,children:r.map(e=>e.render?(0,n.jsxs)(c.f,{width:"100%",children:[(0,n.jsxs)(c.f,{direction:"row",width:"100%",padding:2,alignItems:"center",children:[(0,n.jsx)(l.f,{variant:"body1",width:"30%",color:"text.secondary",fontWeight:600,children:e.label}),(0,n.jsx)(c.f,{width:"70%",children:e.render()})]}),(0,n.jsx)(x.f,{})]},e.label):(0,n.jsxs)(c.f,{width:"100%",children:[(0,n.jsxs)(c.f,{direction:"row",width:"100%",padding:2,alignItems:"center",children:[(0,n.jsx)(l.f,{variant:"body1",width:"30%",color:"text.secondary",fontWeight:600,children:e.label}),(0,n.jsx)(l.f,{variant:"body1",width:"70%",color:"text.primary",children:e.value||"-"})]}),(0,n.jsx)(x.f,{})]},e.label))})})]})}],268602);let b=t.f`
  query GetAssetsByIds($ids: [Int!]!) {
    assets: Asset(where: { id: { _in: $ids } }) {
      id
      name
    }
  }
`;e.s(["f",0,b],682685);let g=t.f`
  query GetUserById($id: Int!) {
    user: User_by_pk(id: $id) {
      id
      fullName
    }
  }
`;e.s(["f",0,g],423187)},669839,e=>{var t=e.i(159080);let r=t.f`
  query GetLocationById($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      name
      access
      permitsRequired
      contactUser: User {
        id
        fullName
        accountUser: Account_Users {
          id
          role
          userAccountLocations: User_Account_Locations(where: { accountLocationId: { _eq: $id } }) {
            id
            accountUserId
            accountLocationId
          }
        }
      }
      accountLocations: Account_Locations {
        linkType
        account: Account {
          id
          name
          rateType: meta(path: "finance.rateType")
          serviceRateType: meta(path: "finance.serviceRateType")
          serviceRateLabour: meta(path: "finance.serviceRateLabour")
          manager: Manager {
            id
            fullName
          }
        }
      }
    }
  }
`,n=t.f`
  query GetSublocationById($id: Int!) {
    sublocation: Sublocation_by_pk(id: $id) {
      id
      name
    }
  }
`;e.s(["_",0,r,"P",0,n])},35818,e=>{var t=e.i(159080);let r=t.f`
  query GetPriorityForWorkOrder($customerId: Int!, $locationId: Int!) {
    slas: SLA(where: { status: { _eq: "active" } }, order_by: { name: asc }) {
      id
      name
      subtype
      label: name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
    }
    customerSlas: SLA_Entity(
      where: { entityId: { _eq: $customerId }, entity: { _eq: "Account" } }
    ) {
      id
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      slaId
      inUse
      entity
      entityId
    }
    locationSlas: SLA_Entity(
      where: { entityId: { _eq: $locationId }, entity: { _eq: "Location" } }
    ) {
      id
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      slaId
      inUse
      entity
      entityId
    }
  }
`,n=t.f`
  query GetPriorityById($id: Int!, $customerId: Int!, $locationId: Int!) {
    priority: SLA_by_pk(id: $id) {
      id
      name
      subtype
      label: name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
      customerSlas: SLA_Entities(
        where: { entity: { _eq: "Account" }, entityId: { _eq: $customerId } }
      ) {
        id
        notes
        onSite
        onSiteUnit
        quoteReturned
        quoteReturnedUnit
        jobReport
        jobReportUnit
        createdAt
        updatedAt
        slaId
        inUse
        entity
        entityId
      }
      locationSlas: SLA_Entities(
        where: { entity: { _eq: "Location" }, entityId: { _eq: $locationId } }
      ) {
        id
        notes
        onSite
        onSiteUnit
        quoteReturned
        quoteReturnedUnit
        jobReport
        jobReportUnit
        createdAt
        updatedAt
        slaId
        inUse
        entity
        entityId
      }
    }
  }
`;e.s(["U",0,n,"o",0,r])},176278,e=>{var t=e.i(159080);let r=t.f`
  query GetTaxonomyById($id: Int!) {
    taxonomy: Taxonomy_by_pk(id: $id) {
      id
      name
      meta
    }
  }
`;e.s(["f",0,r])},359786,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(877341),i=e.i(432171),a=e.i(422411),o=e.i(424894),s=e.i(799083),l=e.i(322135),d=e.i(720676),c=e.i(152078),u=e.i(13558),m=e.i(631328),f=e.i(813843),h=e.i(827010),p=e.i(824451),x=e.i(115871);let y=e=>{let{propertyOwner:i,canSelectAccount:o,control:s,errors:l,setValue:d}=e,[c,u]=(0,r.useState)(""),[y,b]=(0,r.useState)(""),g=(0,m.y)(i);(0,r.useEffect)(()=>{i?.value!==g?.value&&g&&d("contactUser",null)},[g,i,d]);let[j,{loading:w,data:{items:I}={items:[]}}]=(0,n.f)(h.r,{variables:{limit:50,q:""!==c?`%${c}%`:null}}),[C,{loading:S,data:{items:A}={items:[]}}]=(0,n.f)(h.Q,{variables:{limit:50,accountId:i?.value||null,q:""!==y?`%${y}%`:null}});return(0,t.jsxs)(f.f,{direction:"row",spacing:2,children:[(0,t.jsxs)(f.f,{mb:2,width:"50%",children:[(0,t.jsx)(x.f,{sx:v.title,children:"Client"}),(0,t.jsx)(a.e,{defaultValue:null,name:"propertyOwner",control:s,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(p.f,{value:r,fullWidth:!0,disabled:!o,onChange:(e,t)=>n(t),onSearchChange:u,loading:w,onOpen:()=>j(),options:I,variant:"standard",color:"secondary",placeholder:"Client",error:!!l.propertyOwner,helperText:l.propertyOwner?.message})}})]}),(0,t.jsxs)(f.f,{mb:2,width:"50%",children:[(0,t.jsx)(x.f,{sx:v.title,children:"Contact Name"}),(0,t.jsx)(a.e,{defaultValue:null,name:"contactUser",control:s,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(p.f,{fullWidth:!0,value:r,disabled:!i,onChange:(e,t)=>n(t),onSearchChange:b,loading:S,onOpen:()=>C(),options:A,variant:"standard",color:"secondary",placeholder:"Contact Name",error:!!l.contactUser,helperText:l.contactUser?.message})}})]})]})},v={title:{fontSize:"18px",marginBottom:"10px",fontWeight:300,color:"gray"}},b=e=>{if(!e||0===e.length)return{primaryCustomer:null,relatedPartyCustomers:[]};let t=e.findIndex(e=>"primary"===e.linkType),r=t>=0?t:0;return{primaryCustomer:e[r]??null,relatedPartyCustomers:e.filter((e,t)=>t!==r)}};var g=e.i(426778);let j=(0,g.t)({value:(0,g.H)().required(),label:(0,g.x)().required()}),w=(0,g.t)().shape({access:(0,g.x)().required(),contactUser:j.required(),manager:j.required(),name:(0,g.x)().required(),propertyOwner:j.required(),status:(0,g.x)().when(["$isAdmin"],(e,t)=>{let[r]=e;return r?t.required():t}),permitsRequired:(0,g.g)(),users:(0,g.k)().of((0,g.H)().required()).ensure()});var I=e.i(411331),C=e.i(594301),S=e.i(159080);let A=S.f`
  query GetManageProperty($id: Int!) {
    property: Location_by_pk(id: $id) {
      id
      access
      name
      status
      permitsRequired
      manager: Manager {
        id
        fullName
      }
      contactUser: User {
        id
        fullName
      }
      accountLocations: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        id
        accountId
        locationId
        linkType
        createdAt
        account: Account {
          id
          name
          meta
        }
        createdByUser: CreatedByUser {
          id
          fullName
        }
      }
    }
  }
`,_=S.f`
  query GetPropertyNotFinishedJobs($propertyId: Int!) {
    jobs: Job(
      where: {
        locationId: { _eq: $propertyId }
        _and: [
          { _not: { type: { _in: ["reactive", "ppm"] }, statusData: { _has_key: "completed" } } }
          { _not: { type: { _in: ["reactive", "ppm"] }, statusData: { _has_key: "closed" } } }
          { _not: { type: { _eq: "quote" }, statusData: { _has_key: "quoteClosed" } } }
        ]
      }
      limit: 1
      order_by: { id: desc }
    ) {
      id
      number
    }
  }
`;S.f`
  mutation UpdateAccount($id: Int!, $changes: Account_set_input) {
    update_Account_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,S.f`
  query GetAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      id
      meta
    }
  }
`;let q=S.f`
  query GetUsers($accountIds: [Int], $role: String) {
    users: Account_User(
      where: {
        Account: { id: { _in: $accountIds } }
        role: { _eq: $role }
        status: { _eq: "active" }
      }
    ) {
      id
      role
      position
      isContact
      status
      user: User {
        id
        nameFirst
        nameLast
        fullName
        phone
        status
        email
        createdAt
      }
      account: Account {
        id
        name
        type
      }
      userAccountLocations: User_Account_Locations {
        accountLocationId
        location: Account_Location {
          locationId
        }
      }
    }
  }
`;var k=e.i(207646),R=e.i(410355),U=e.i(652148),L=e.i(936641),$=e.i(280445),M=e.i(122989),T=e.i(74633),W=e.i(851123),N=e.i(148310),P=e.i(755548),E=e.i(800884);let O=e=>{let{existingAccountIds:i,onSave:a,onCancel:o}=e,[s,l]=(0,r.useState)(""),[d,c]=(0,r.useState)(null),[u,{loading:m,data:{items:x}={items:[]}}]=(0,n.f)(h.r,{variables:{limit:50,q:""!==s?`%${s}%`:null}}),y=(0,r.useMemo)(()=>x.filter(e=>!i.includes(e.value)),[x,i]);return(0,t.jsxs)(f.f,{spacing:3,sx:{minWidth:320,pt:1},children:[(0,t.jsx)(p.f,{value:d,onChange:(e,t)=>c(t),onOpen:()=>u(),onSearchChange:l,loading:m,options:y,label:"Customer company",variant:"standard",color:"secondary"}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,justifyContent:"flex-end",children:[(0,t.jsx)(P.f,{variant:"contained",color:"danger",onClick:o,children:"Cancel"}),(0,t.jsx)(P.f,{variant:"contained",color:"secondary",disabled:!d,onClick:()=>d&&a(d),children:"Save"})]})]})},G=e=>{let{value:n,onChange:i,excludeAccountIds:a=[]}=e,o=(0,I.f)(),s=n.length>=2,l=(0,r.useMemo)(()=>n.map(e=>e.value).concat(a),[n,a]),d=(0,r.useCallback)(()=>{o.show({title:"Add related party",submit:!1,content:(0,t.jsx)(O,{existingAccountIds:l,onCancel:()=>o.close(),onSave:e=>{i([...n,e]),o.close()}})})},[l,o,i,n]),c=(0,r.useCallback)(e=>{i(n.filter(t=>t.value!==e))},[i,n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:1,children:[(0,t.jsx)(x.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Related party"}),(0,t.jsx)(P.f,{size:"small",color:"secondary",variant:"contained",startIcon:(0,t.jsx)(N.default,{}),onClick:d,disabled:s,sx:{minWidth:"auto"},children:"Add"})]}),n.length>0&&(0,t.jsx)(f.f,{direction:"row",flexWrap:"wrap",gap:1,children:n.map(e=>(0,t.jsx)(E.f,{label:e.label,onDelete:()=>c(e.value),color:"secondary",variant:"outlined"},e.value))}),s&&(0,t.jsxs)(x.f,{sx:{fontSize:13,color:"gray",mt:1,ml:1},children:["*Maximum of ",2," related parties"]})]})};var B=e.i(511667),D=e.i(21557),H=e.i(920475),z=e.i(684779),V=e.i(974266);let F=(0,$.f)(e=>{let{className:r,...n}=e;return(0,t.jsx)(l.f,{...n,classes:{popper:r}})})(e=>{let{theme:t}=e;return{[`& .${d.f.tooltip}`]:{backgroundColor:t?.palette.dark.main,boxShadow:t?.shadows[1],fontSize:13}}});e.s(["f",0,e=>{let{accountId:l,accountName:d,locationId:m,refetch:h,onSubmit:v,close:g}=e,j=(0,I.f)(),S=(0,D.f)(),{user:$,hasRole:N}=(0,C.f)(),[P,E]=(0,r.useState)(null),[O,K]=(0,r.useState)(""),J=(0,r.useRef)(null),Q=N("admin"),{control:Y,errors:Z,handleSubmit:X,setValue:ee,watch:et,reset:er}=(0,a.G)({defaultValues:{...d&&l&&{propertyOwner:{label:d,value:l}}},resolver:(0,o.yupResolver)(w),context:{isAdmin:Q}}),{data:{property:en}={property:null}}=(0,i.t)(A,{skip:!m,variables:{id:m},onCompleted:e=>{let{property:t}=e,{primaryCustomer:r}=b(t?.accountLocations??[]);er({...(e=>{let{property:t,customer:r}=e,n=t?.status==="active"||t?.status==="inactive"?t.status:void 0;return{...t?.access&&{access:t?.access},...t?.contactUser&&{contactUser:{value:t?.contactUser?.id,label:t?.contactUser?.fullName}},...t?.manager&&{manager:{value:t?.manager?.id,label:t?.manager?.fullName}},...t?.name&&{name:t?.name},...r&&{propertyOwner:{value:r?.id,label:r?.name}},...n&&{status:n},...t?.permitsRequired&&{permitsRequired:t?.permitsRequired}}})({property:t,customer:r?.account})})}}),ei=et("users")??[],ea=et("propertyOwner"),[eo,es]=(0,r.useState)([]);(0,r.useEffect)(()=>{if(!en)return;let{relatedPartyCustomers:e}=b(en.accountLocations??[]);es(e.map(e=>({value:e.accountId,label:e.account?.name??""})))},[en]);let{data:{jobs:el}={jobs:[]}}=(0,i.t)(_,{variables:{propertyId:m},skip:!m}),[ed,{isLoading:ec}]=(0,B.f)("/location/create",{queryKey:"location-create",method:"POST",onError:e=>{S.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{v?.(e),S.show({content:"Location was created"}),h?.(),g?.()}}),[eu,{isLoading:em}]=(0,B.f)("/location/update",{queryKey:"location-update",method:"PUT",onError:e=>{S.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{v?.(e),S.show({content:"Location was created"}),h?.(),g?.()}}),ef=(0,r.useCallback)(async()=>new Promise((e,r)=>{j.show({title:"Add new address",content:(0,t.jsx)(R.f,{onSubmit:async t=>{e(t),g?.()}}),onClose:()=>r(),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw"})}),[g,j]),[eh,{loading:ep,data:{items:ex}={items:[]}}]=(0,n.f)(W.P,{variables:{limit:50,accountId:$.adminId,q:""!==O?`%${O}%`:null}}),ey=async e=>{E(null);let t=e.users??[],r=ea?.value,n=t.filter(e=>eb.find(t=>t.id===e)?.account?.id===r),i=eo.map(e=>({accountId:e.value,userAccountIds:t.filter(t=>eb.find(e=>e.id===t)?.account?.id===e.value)}));if(m){if("inactive"===e.status&&el.length>0)return void E("This location cannot be made inactive, it has active jobs.");let t=(e=>{let{locationId:t,propertyForm:r,primaryUserAccountIds:n,relatedParties:i}=e;return{locationId:t,access:r.access,primaryUserAccountIds:n,relatedParties:i??[],name:r.name,status:r.status??"active",permitsRequired:!!r.permitsRequired,contactUserId:r.contactUser.value,managerId:r.manager.value,accountId:r.propertyOwner.value}})({locationId:m,propertyForm:e,primaryUserAccountIds:n,relatedParties:i});await eu({body:t})}else{J.current||(J.current=await ef());let t=(e=>{let{propertyForm:t,addressForm:r,primaryUserAccountIds:n,relatedParties:i}=e;return{access:t.access,primaryUserAccountIds:n,relatedParties:i??[],name:t.name,status:t.status??"active",permitsRequired:!!t.permitsRequired,contactUserId:t.contactUser.value,managerId:t.manager.value,accountId:t.propertyOwner.value,address:{name:r.name,addressLine2:r.addressLine2,addressLine3:r.addressLine3,county:r.county,addressLine1:r.addressLine1,city:r.city,postCode:r.postCode,countryId:r.countryId}}})({propertyForm:e,addressForm:J.current,primaryUserAccountIds:n,relatedParties:i});await ed({body:t})}},ev=[...ea?.value?[ea.value]:[],...eo.map(e=>e.value)],{data:{users:eb}={users:[]},loading:eg}=(0,i.t)(q,{variables:{accountIds:ev,role:"user"},skip:!Array.isArray(ev)||ev.length<0||!Q,onCompleted:e=>{let{users:t}=e;ee("users",(t?.map?.(e=>({id:e.id,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[]}))||[]).filter(e=>m&&e.locations.includes(m)).map(e=>e?.id)||[])}}),ej=[{sortable:!1,flex:1,field:"account",headerName:"Company name",minWidth:160,renderCell:e=>{let{row:t}=e;return t.account.name}},{sortable:!1,flex:1,field:"fullName",headerName:"Name",minWidth:160},{sortable:!1,flex:1,field:"email",headerName:"Email address",minWidth:260},{sortable:!1,flex:1,field:"contact",headerName:"Contact user",minWidth:160,renderCell:e=>{let{row:r}=e;if(r.isContact)return(0,t.jsx)(f.f,{direction:"row",width:"100%",alignItems:"center",justifyContent:"flex-start",children:(0,t.jsx)(H.default,{color:"error"})})}},{sortable:!1,flex:1,field:"phone",minWidth:160,headerName:"Phone"},{sortable:!1,flex:1,field:"position",minWidth:160,headerName:"Position"},{sortable:!1,flex:1,width:15,field:"role",minWidth:160,headerName:"Role"}],ew=(0,r.useMemo)(()=>eb.map(e=>({...e.user,id:e.id,position:e.position,isContact:e?.isContact,role:e?.role,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[],account:e.account})),[eb]);return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:X(ey),children:[(0,t.jsx)(z.f,{sx:{zIndex:1e5},open:ec||em,children:(0,t.jsx)(V.f,{color:"secondary"})}),!!P&&(0,t.jsx)(L.f,{variant:"filled",severity:"info",color:"info",sx:{marginBottom:2},children:P}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(y,{control:Y,errors:Z,propertyOwner:ea,canSelectAccount:!l,setValue:ee})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(a.e,{defaultValue:null,name:"manager",control:Y,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(p.f,{value:r,onChange:(e,t)=>n(t),label:"Select manager",loading:ep,onOpen:()=>eh(),onSearchChange:K,options:ex,error:!!Z?.manager,helperText:Z?.manager?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(a.e,{defaultValue:null,name:"name",control:Y,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(U.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",value:r,onChange:n,error:!!Z.name,helperText:Z.name?.message,InputLabelProps:{shrink:!!r}})}})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(a.e,{defaultValue:null,name:"access",control:Y,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(U.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",placeholder:"Access information",sx:{"& .MuiFilledInput-root":{paddingTop:1}},value:r,onChange:n,error:!!Z.access,helperText:Z.access?.message})}})}),Q&&(0,t.jsx)(f.f,{mb:2,children:(0,t.jsx)(a.e,{name:"status",control:Y,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(M.f,{value:r||"",onChange:n,options:k.f,label:"Status",fullWidth:!0,error:!!Z.status,helperText:Z.status?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsxs)(f.f,{children:[(0,t.jsx)(a.e,{name:"permitsRequired",control:Y,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(c.f,{control:(0,t.jsx)(s.f,{color:"secondary",checked:r||!1,onChange:e=>n(e.target.checked)}),label:"Permits required"})}}),(0,t.jsx)(L.f,{severity:"info",sx:{marginY:1,backgroundColor:"rgba(30, 136, 229, 0.1)","& .MuiAlert-icon":{color:"secondary.main"},"& .MuiAlert-message":{color:"secondary.main"}},children:"Please indicate whether permits are required for this site. This can then be used to prompt reminders to upload permits for work orders at this site."})]}),Q&&(0,t.jsx)(f.f,{mt:3,children:(0,t.jsx)(G,{value:eo,onChange:es,excludeAccountIds:ea?.value?[ea?.value]:void 0})}),Q&&eb.length>0&&(0,t.jsxs)(f.f,{mb:2,mt:2,children:[(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",mb:1,children:[(0,t.jsx)(x.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Customer users"}),(0,t.jsx)(F,{title:"Please select the users you would like to link to this site by checking\n                the box beside their name. This will then allow you to assign work\n                orders to them for this site.",children:(0,t.jsx)(u.default,{sx:{fontSize:22,marginLeft:1,color:"gray"}})})]}),(0,t.jsx)(T.s,{columns:ej,loading:eg,rows:ew,checkboxSelection:!0,rowSelectionModel:ei,onRowSelectionModelChange:e=>{ee("users",e)},sx:{"& .MuiCheckbox-root":{"&.Mui-checked":{color:"secondary.main"}}}}),(0,t.jsx)(a.e,{name:"users",control:Y,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{value:r,onChange:n,type:"hidden"})}})]})]})}],359786)},320861,e=>{let t=["minutes","hours","days"],r=e=>e?"n/a"===e.unit?{time:null,unit:"n/a"}:null!=e.time||e.unit?{time:e.time??null,unit:e.unit??null}:null:null;e.s(["b",0,t,"F",0,"n/a","u",0,(e,t)=>"n/a"===t?"N/A":null!=e&&t?`${e} ${t}`:"-","p",0,e=>t.some(t=>t===e),"L",0,e=>"n/a"===e,"r",0,(e,t)=>"n/a"===t?{time:null,unit:"n/a"}:{time:e??null,unit:t??null},"H",0,(e,t,n)=>r(e)??r(t)??r(n)??{time:null,unit:null},"c",0,[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"},{label:"N/A",value:"n/a"}]])},215574,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e.r(421506)),a=e.r(391398);r.default=(0,i.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined")},920475,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e.r(421506)),a=e.r(391398);r.default=(0,i.default)((0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},262999,e=>{var t=e.i(936641);e.s(["f",()=>t.f])},405167,e=>{var t=e.i(471973);e.s(["f",()=>t.f])},405765,491171,e=>{var t=e.i(530252);e.s(["f",()=>t.f],405765);var r=e.i(984636);e.s(["f",()=>r.f],491171)}])})();