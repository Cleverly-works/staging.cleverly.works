(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[900356,e=>{e.s(["f",0,[{label:"Call",value:"call"},{label:"Email",value:"email"},{label:"Portal",value:"portal"},{label:"Other",value:"other"}]])},287723,e=>{e.s(["f",0,function e(t,i){return!0===t||Array.isArray(t)||null==i||"object"!=typeof i?i:Object.fromEntries(Object.keys(t).map(n=>[n,e(t[n]??!1,i[n])]))}])},600504,711636,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(738251),r=e.i(551918),o=e.i(566118),a=e.i(280875),s=e.i(755548),l=e.i(280445),d=e.i(687722),c=e.i(813843),u=e.i(706692);let p=(0,l.f)(a.f)(e=>{let{theme:t}=e;return{"& .MuiSvgIcon-root.MuiStepIcon-root.Mui-active":{color:t.palette.secondary.main},"& .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed":{color:t.palette.secondary.main}}}),m=(0,l.f)(d.f)(e=>{let{theme:t}=e;return{"&.Mui-active":{"& .MuiStepConnector-line":{borderColor:t.palette.secondary.main}},"&.Mui-completed":{"& .MuiStepConnector-line":{borderColor:t.palette.secondary.main}},"& .MuiStepConnector-line":{borderColor:t.palette.grey[300],borderTopWidth:4,borderRadius:1,marginTop:"-2px"}}}),h=(0,l.f)(c.f)(()=>({padding:"16px 72px","@media (max-width: 600px)":{padding:"16px 0px"}})),f=(0,l.f)(c.f,{shouldForwardProp:e=>"isColumn"!==e})(e=>{let{isColumn:t}=e;return{flexDirection:"row",...t&&{flexDirection:"column","&.MuiStack-root>:not(style):not(style)":{width:"100%",maxWidth:"100%"},"&.MuiStack-root>:not(style)~:not(style)":{width:"100%",maxWidth:"100%",marginTop:"16px",marginLeft:"0px"}}}});e.s(["f",0,e=>{let{activeStep:a,steps:l,canMoveToReview:d=!1,canCancel:y=!1,onCancel:x,onNext:b,onBack:I,onReview:v,children:j}=e,g=(0,u.f)("(max-width: 800px)"),w=i.useMemo(()=>{let e=0;return y&&e++,0!==a&&e++,a!==l.length-1&&e++,d&&a!==l.length-1&&e++,a===l.length-1&&e++,e},[a,y,d,l.length]);return(0,t.jsxs)(n.f,{sx:{width:"100%"},children:[(0,t.jsx)(r.f,{activeStep:a,alternativeLabel:!0,connector:(0,t.jsx)(m,{}),children:l.map(e=>(0,t.jsx)(o.f,{...{},children:(0,t.jsx)(p,{children:e})},e))}),(0,t.jsxs)(h,{width:"100%",children:[j,(0,t.jsxs)(f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:4,mt:2,isColumn:g&&w>2,children:[y&&(0,t.jsx)(c.f,{width:"100%",children:(0,t.jsx)(s.f,{color:"danger",variant:"contained",onClick:x,sx:{maxWidth:g&&w>2?"100%":120},children:"Cancel"})}),0!==a&&(0,t.jsx)(s.f,{color:"muiGray",variant:"outlined",disabled:0===a,onClick:I,sx:{minWidth:120},children:"Back"}),a!==l.length-1&&(0,t.jsx)(s.f,{color:"success",variant:"contained",onClick:b,sx:{minWidth:130},children:"Next"}),d&&a!==l.length-1&&(0,t.jsx)(s.f,{color:"secondary",variant:"contained",onClick:v,sx:{minWidth:130},children:"Go to review"}),a===l.length-1&&(0,t.jsx)(s.f,{color:"secondary",variant:"contained",type:"submit",sx:{minWidth:130},children:"Submit"})]})]})]})}],600504);var y=e.i(115871),x=e.i(871931),b=e.i(302966),I=e.i(760981),v=e.i(162440);let j=(0,l.f)(x.f)(e=>{let{theme:t,transparent:i,isHighlighted:n,displayNone:r}=e;return{...r&&{display:"none"},backgroundColor:i?"transparent":t.palette.background.paper,transition:"background-color 0.3s ease-in-out, border 0.3s ease-in-out",...n&&{backgroundColor:t.palette.info.main,border:`2px solid ${t.palette.info.main}`},...i&&{border:"none",boxShadow:"none"},"& .MuiAccordionDetails-root":{...i&&{paddingTop:0}},"& .MuiAccordionSummary-root":{...i&&{minHeight:0}},"& .MuiAccordionSummary-content":{width:"100%",alignItems:"center",justifyContent:"center",...i&&{margin:0}}}});e.s(["f",0,e=>{let{title:n,transparent:r,defaultExpanded:o,allowExpand:a,children:s,displayNone:l=!1}=e,d=(0,i.useMemo)(()=>n.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,function(e,t){return 0==+e?"":0===t?e.toLowerCase():e.toUpperCase()}),[n]),[u,p]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=null,t=()=>{window.location.hash===`#${d}`&&p(!0),e&&clearTimeout(e),e=setTimeout(()=>{window.location.hash="",p(!1)},2e3)};return window.addEventListener("hashchange",t),()=>{window.removeEventListener("hashchange",t),e&&clearTimeout(e)}},[d]),(0,t.jsxs)(j,{id:d,isHighlighted:u,transparent:r,defaultExpanded:o,displayNone:l,...r&&!a&&{expanded:!0},children:[(0,t.jsx)(b.f,{expandIcon:(!r||a)&&(0,t.jsx)(v.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,t.jsx)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:(0,t.jsx)(y.f,{variant:"h6",children:n})})}),(0,t.jsx)(I.f,{children:s})]})}],711636)},720847,e=>{var t=e.i(391398),i=e.i(262999),n=e.i(974266),r=e.i(405167),o=e.i(405765),a=e.i(886779),s=e.i(917563),l=e.i(345837),d=e.i(491171),c=e.i(589200),u=e.i(422411),p=e.i(280445);let m=(0,p.f)(c.f)(()=>({"& .MuiFormHelperText-root.Mui-error":{marginLeft:"0px"}})),h=(0,p.f)(s.f)(()=>({position:"relative"}));e.s(["f",0,e=>{let{name:s,control:c,options:p,errors:f,optionDescription:y,loading:x=!1,handleChange:b}=e;return x?(0,t.jsx)(a.f,{width:"100%",spacing:1,children:(0,t.jsx)(n.f,{color:"secondary"})}):(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.e,{name:s,control:c,defaultValue:null,render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(h,{children:(0,t.jsxs)(m,{color:"secondary",error:!!f?.[s],children:[(0,t.jsx)(d.f,{"aria-labelledby":"priority",name:"priority",color:"secondary",value:i?.value,onChange:e=>{let t=e.target.value,i=p.find(e=>e.value===Number(t));n(i),b?.(i)},sx:{flexDirection:"row"},children:p.map(e=>(0,t.jsx)(l.f,{value:e.value,control:(0,t.jsx)(o.f,{color:"secondary"}),label:e.label},e.value))}),f?.[s]&&"message"in f[s]&&(0,t.jsx)(r.f,{error:!0,children:f[s]?.message}),(0,t.jsx)("input",{type:"hidden",value:i})]})})}}),y&&(0,t.jsx)(i.f,{variant:"filled",severity:"info",sx:{backgroundColor:"muiGray.main"},children:y})]})}])},181881,e=>{var t=e.i(432171),i=e.i(35818),n=e.i(695567);e.s(["f",0,e=>{let{subtype:r,customerId:o,locationId:a}=e,{data:s,loading:l}=(0,t.t)(i.o,{skip:!o||!a,variables:{customerId:o,locationId:a}});return{priority:{options:(0,n.f)({subtype:r,slas:s?.slas||[],customerSlas:s?.customerSlas||[],locationSlas:s?.locationSlas||[]}),loading:l}}}])},576323,e=>{var t=e.i(391398),i=e.i(284501),n=e.i(900356),r=e.i(302415),o=e.i(203828),a=e.i(191788),s=e.i(750276),l=e.i(454684);let d=()=>{let{query:e,events:d}=(0,o.useRouter)(),c=(0,i.f)(e),[u,p]=(0,a.useState)(0),m=JSON.stringify(c),h=(0,a.useMemo)(()=>(e=>{let t={};if(null!=e.parentId&&(t.parentId=e.parentId),null!=e.locationId&&(t.location={value:e.locationId,label:""}),null!=e.sublocationId&&(t.sublocation={value:e.sublocationId,label:""}),null!=e.customerId&&(t.customer={value:e.customerId,label:""}),null!=e.customerUserId&&(t.customerUser={value:e.customerUserId,label:""}),null!=e.source){let i=n.f.find(t=>t.value===e.source);i&&(t.source={...i})}if(null!=e.assetCategoryId&&(t.assetCategory={value:e.assetCategoryId,label:""}),null!=e.assetIds&&e.assetIds.length>0&&(t.assets=e.assetIds.map(e=>({value:e,label:""}))),null!=e.access&&(t.access=e.access),null!=e.shortJobDescriptionId&&(t.shortJobDescription={value:e.shortJobDescriptionId,label:""}),null!=e.description&&(t.description=e.description),null!=e.reference&&(t.reference=e.reference),null!=e.costCategoryId&&(t.costCategory={value:e.costCategoryId,label:""}),null!=e.serviceId&&(t.service={value:e.serviceId,label:""}),null!=e.pricing){let i=r.f.find(t=>t.value===e.pricing);i&&(t.pricing=i.value)}return null!=e.spendThreshold&&(t.spendThreshold=e.spendThreshold),null!=e.supplierSpendThreshold&&(t.supplierSpendThreshold=e.supplierSpendThreshold),null!=e.customerAmount&&(t.customerAmount=e.customerAmount),null!=e.supplierLabourAmount&&(t.supplierLabourAmount=e.supplierLabourAmount),null!=e.supplierMaterialsAmount&&(t.supplierMaterialsAmount=e.supplierMaterialsAmount),null!=e.slaId&&(t.priority={value:e.slaId,label:""}),t})(JSON.parse(m)),[m]),f=(0,a.useRef)(!1),y=(0,a.useCallback)(e=>{f.current=e},[]),x=(0,l.f)(f);return(0,a.useEffect)(()=>{let e=e=>{"/dashboard/issues/manage"===e&&p(e=>e+1)};return d.on("routeChangeComplete",e),()=>{d.off("routeChangeComplete",e)}},[d]),(0,t.jsxs)(t.Fragment,{children:[x,(0,t.jsx)(s.f,{jobNumber:c.jobNumber,shouldPrepareFromDefaultValues:!0,defaultValues:h,onUnsavedChanges:y},u)]})};e.s(["ManageWorkOrderView",0,d,"default",0,d],576323)},98982,532827,340680,268602,682685,423187,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["f",0,i],98982);var n=e.i(391398),r=e.i(886779),o=e.i(871931),a=e.i(760981),s=e.i(302966),l=e.i(115871),d=e.i(752727);e.s(["f",0,e=>{let{title:t,children:i}=e;return(0,n.jsxs)(o.f,{sx:{backgroundColor:"transparent",borderTop:"0 !important"},children:[(0,n.jsx)(s.f,{sx:{"& .MuiAccordionSummary-content":{justifyContent:"space-between"},padding:0},expandIcon:(0,n.jsx)(d.P,{}),"aria-controls":"mark-on-map-content",id:"mark-on-map-header",children:(0,n.jsx)(l.f,{color:"#626262",children:t})}),(0,n.jsx)(a.f,{sx:{padding:0},children:(0,n.jsx)(r.f,{mt:1.5,children:i})})]})}],532827);var c=e.i(813843),u=e.i(936641),p=e.i(394989);e.i(864980);var m=e.i(790388);let h={width:"100%"};e.s(["f",0,e=>{let{setValue:t,permitsLinks:i,attachmentsPermits:r,showWarning:o=!0,onDeleteExistingMedia:a}=e;return(0,n.jsxs)(c.f,{sx:h,children:[o&&(0,n.jsx)(u.f,{variant:"filled",severity:"error",sx:{mb:2,mt:2},children:"Warning: This site requires a permit for attendance"}),(0,n.jsx)(p.f,{name:"permitsLinks",setValue:t,values:i,title:"Permits links"}),(0,n.jsx)(m.f,{setValue:t,values:r,onDeleteExistingMedia:a,name:"permitsAttachments",title:"Permits attachments"})]})}],340680);var f=e.i(162440),y=e.i(986351),x=e.i(821627),b=e.i(555588);e.s(["f",0,e=>{let{title:t,fields:i,onEdit:r}=e;return(0,n.jsxs)(o.f,{defaultExpanded:!0,children:[(0,n.jsx)(s.f,{expandIcon:(0,n.jsx)(f.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,n.jsxs)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:[(0,n.jsx)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:(0,n.jsx)(l.f,{variant:"h6",sx:{mr:"-60px"},children:t})}),(0,n.jsx)(x.f,{color:"secondary",variant:"contained",disableMinWidth:!0,size:"small",sx:{mr:2},onClick:r,children:(0,n.jsx)(b.default,{sx:{fontSize:18}})})]})}),(0,n.jsx)(a.f,{sx:{padding:0},children:(0,n.jsx)(c.f,{width:"100%",spacing:0,children:i.map(e=>e.render?(0,n.jsxs)(c.f,{width:"100%",children:[(0,n.jsxs)(c.f,{direction:"row",width:"100%",padding:2,alignItems:"center",children:[(0,n.jsx)(l.f,{variant:"body1",width:"30%",color:"text.secondary",fontWeight:600,children:e.label}),(0,n.jsx)(c.f,{width:"70%",children:e.render()})]}),(0,n.jsx)(y.f,{})]},e.label):(0,n.jsxs)(c.f,{width:"100%",children:[(0,n.jsxs)(c.f,{direction:"row",width:"100%",padding:2,alignItems:"center",children:[(0,n.jsx)(l.f,{variant:"body1",width:"30%",color:"text.secondary",fontWeight:600,children:e.label}),(0,n.jsx)(l.f,{variant:"body1",width:"70%",color:"text.primary",children:e.value||"-"})]}),(0,n.jsx)(y.f,{})]},e.label))})})]})}],268602);let I=t.f`
  query GetAssetsByIds($ids: [Int!]!) {
    assets: Asset(where: { id: { _in: $ids } }) {
      id
      name
    }
  }
`;e.s(["f",0,I],682685);let v=t.f`
  query GetUserById($id: Int!) {
    user: User_by_pk(id: $id) {
      id
      fullName
    }
  }
`;e.s(["f",0,v],423187)},669839,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["_",0,i,"P",0,n])},35818,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["U",0,n,"o",0,i])},176278,e=>{var t=e.i(159080);let i=t.f`
  query GetTaxonomyById($id: Int!) {
    taxonomy: Taxonomy_by_pk(id: $id) {
      id
      name
      meta
    }
  }
`;e.s(["f",0,i])},284501,e=>{e.s(["f",0,e=>{let t,i=t=>{let i=Number(e[t]);return isNaN(i)?null:i},n=t=>{let i=e[t];return Array.isArray(i)?null:i};return{parentId:i("parentId"),jobNumber:"string"!=typeof e.id?null:e.id,locationId:i("locationId"),sublocationId:i("sublocationId"),customerId:i("customerId"),customerUserId:i("customerUserId"),source:n("source"),assetCategoryId:i("assetCategoryId"),assetIds:Array.isArray(t=e.assetId)?t.filter(e=>Number.isNaN(e)).map(e=>Number(e)):Number.isNaN(t)?null:[Number(t)],access:n("access"),shortJobDescriptionId:i("shortJobDescriptionId"),description:n("description"),reference:n("reference"),costCategoryId:i("costCategoryId"),serviceId:i("serviceId"),pricing:n("pricing"),spendThreshold:i("spendThreshold"),supplierSpendThreshold:i("supplierSpendThreshold"),customerAmount:i("customerAmount"),supplierLabourAmount:i("supplierLabourAmount"),supplierMaterialsAmount:i("supplierMaterialsAmount"),slaId:i("slaId")}}])},215574,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined")},405167,e=>{var t=e.i(471973);e.s(["f",()=>t.f])},405765,491171,e=>{var t=e.i(530252);e.s(["f",()=>t.f],405765);var i=e.i(984636);e.s(["f",()=>i.f],491171)}],445853,function(e){e.n(e.i(576323))}]);