(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,277063,e=>{var t=e.i(159080);let n=t.f`
  fragment QuoteFields on Job {
    quoteNumber
    quoteDue
    quoteCharge
  }
`;t.f`
  query Quote($id: Int!) {
    job: Job_by_pk(id: $id) {
      id
      title
      description
      costCategory
      status
      workStatus
      scheduledAt
      createdAt
      customerId
      customerUserId
      locationId
      managerId
      parentId
      serviceId
      slaId
      tenantId
      reference
      amount
      accountByTenantid {
        id
        companyNumber
        createdAt
        name
        status
        type
        updatedAt
        website
        clientType
        managerId
        vatId
        meta
        media: Media {
          id
          medium: Medium {
            id
            category
            filename
            meta
            type
          }
        }
        manager: Manager {
          id
          fullName
        }
      }
      customer: Account {
        id
        companyNumber
        createdAt
        name
        status
        type
        updatedAt
        website
        clientType
        managerId
        vatId
        meta
        media: Media {
          id
          medium: Medium {
            id
            category
            filename
            meta
            type
          }
        }
        manager: Manager {
          id
          fullName
        }
      }
      customerUser: CustomerUser {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
        accounts: Account_Users {
          id
          role
          position
          isContact
          status
          account: Account {
            id
            name
            type
          }
        }
      }
      expenses: Expenses {
        id
        paid
        description
        amount
        markup
        vat
      }
      location: Location {
        id
        access
        createdAt
        name
        contactUserId
      }
      messages: Messages {
        id
        message
        priority
        taskId
        jobId
        locationId
        description
      }
      service: Service {
        id
        name
        countryId
        currencyId
      }
      supplier: Suplier {
        id
        companyNumber
        createdAt
        name
        status
        type
        updatedAt
        website
        clientType
        managerId
        vatId
        meta
        media: Media {
          id
          medium: Medium {
            id
            category
            filename
            meta
            type
          }
        }
        manager: Manager {
          id
          fullName
        }
      }
      manager: Manager {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
        accounts: Account_Users {
          id
          role
          position
          isContact
          status
          account: Account {
            id
            name
            type
          }
        }
      }
      timings: JobTimings {
        id
        status
        createdAt
      }
    }
  }
`,e.s(["f",0,n])},521039,498922,e=>{var t=e.i(391398),n=e.i(362537),i=e.i(191788),a=e.i(871931),r=e.i(760981),o=e.i(302966),s=e.i(115871),l=e.i(747112),d=e.i(280445),u=e.i(432171),c=e.i(328186),m=e.i(506656),p=e.i(104050);let f=(0,d.f)(a.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{customerId:a,locationId:d}=e,h=(0,i.useMemo)(()=>(0,n.default)().toISOString(),[]),{data:{total:g,overdueTotal:x}={}}=(0,u.t)(c.B,{skip:!a&&!d,variables:{customerId:a,locationId:d,now:h}}),{data:{nextJob:b}={nextJob:[]}}=(0,u.t)(c.O,{skip:!d,variables:{locationId:d,now:h}});if(!a&&!d)return null;let j=g?.aggregate?.count||0,y=j-(x?.aggregate?.count||0),v=(0,m.f)(y/Math.max(j,1)*100,2),S=(0,p.f)(v);return(0,t.jsxs)(f,{defaultExpanded:!0,children:[(0,t.jsx)(o.f,{expandIcon:(0,t.jsx)(l.f,{}),children:(0,t.jsx)(s.f,{typography:"h6",children:"Compliance score"})}),(0,t.jsxs)(r.f,{sx:{pt:0},children:[(0,t.jsxs)(s.f,{children:["Compliance rating:"," ",(0,t.jsxs)(s.f,{component:"span",color:S,children:[v,"%"]})]}),d&&(0,t.jsxs)(s.f,{sx:{mt:.5},children:["Next compliance job: ",b[0]?.title||"N/A"]})]})]})}],521039);var h=e.i(203828),g=e.i(472552),x=e.i(443103),b=e.i(755548),j=e.i(88152),y=e.i(813843),v=e.i(76381),S=e.i(891723),q=e.i(877341),I=e.i(594301),w=e.i(498681),R=e.i(48441),C=e.i(694923),U=e.i(624841),_=e.i(834035),$=e.i(799083),A=e.i(152078),k=e.i(683125),N=e.i(652148),M=e.i(740790),L=e.i(422411),E=e.i(514707),T=e.i(722394),W=e.i(824451),D=e.i(10945),F=e.i(655477),P=e.i(827010),O=e.i(851123);let Q={q:"",startDate:null,endDate:null,accountManagerId:null,locationManagerId:null,customerUserId:null,locationId:null,customerId:null,supplierId:null,slaId:null,tags:null,status:null,showCanceled:!1},V=e=>{let n,{open:a=!1,close:r=()=>{},filterType:o,initialFilters:s,filtersVisibilityModel:l={},setFilters:d=()=>{}}=e,{hasRole:u}=(0,I.f)(),c=u("admin"),m=u("customer"),[p,f]=(0,D.f)({key:`form_data_${o}`,initialValue:{...Q}}),{control:h,handleSubmit:g,register:x,reset:j,getValues:v}=(0,L.G)({defaultValues:p}),{supplierValues:S,userValues:w,propertyValues:C,slaValues:U,accountManagerValues:_}=(e=>{let{initialFilters:t}=e,{user:n,hasRole:a}=(0,I.f)(),r=a("admin"),[o,s]=(0,i.useState)(""),[l,d]=(0,i.useState)(""),[u,c]=(0,i.useState)(""),[m,p]=(0,i.useState)(""),[f,h]=(0,i.useState)(""),[g,{loading:x,data:{items:b}={items:[]}}]=(0,q.f)(P.U,{variables:{where:{type:{_eq:"supplier"},name:{_ilike:""!==o?`%${o}%`:null}},limit:50,offset:0,skip:!r}}),[j,{loading:y,data:{items:v}={items:[]}}]=(0,q.f)(P.Q,{fetchPolicy:"network-only",variables:{accountId:t.customerId,limit:50,offset:0,q:""!==l?`%${l}%`:null}}),[S,{loading:w,data:{items:R}={items:[]}}]=(0,q.f)(O.j,{variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:t.customerId}},name:{_ilike:""!==u?`%${u}%`:null}},limit:50,offset:0}}),[C,{data:{items:U}={items:[]},loading:_}]=(0,q.f)(P.O,{variables:{accountId:n.accountId,limit:50,offset:0,q:""!==f?`%${f}%`:null}}),[$,{loading:A,data:{items:k}={items:[]}}]=(0,q.f)(P.k,{fetchPolicy:"network-only",variables:{adminId:n.adminId,subtype:"quote",limit:50,offset:0,q:""!==m?`%${m}%`:null}});return{supplierValues:{loading:x,options:b,onOpen:()=>g(),onSearchChange:s},userValues:{loading:y,options:v,onOpen:()=>j(),onSearchChange:d},propertyValues:{loading:w,options:R,onOpen:()=>S(),onSearchChange:c},slaValues:{loading:A,options:k,onOpen:()=>$(),onSearchChange:p},accountManagerValues:{loading:_,options:U,onOpen:()=>C(),onSearchChange:h}}})({initialFilters:s});(0,i.useEffect)(()=>{let e={filterType:s.filterType,id:s.id,customerUserId:p.customerUserId?.value||null,accountManagerId:p.accountManagerId?.value||null,locationManagerId:p.locationManagerId?.value||null,customerId:p.customerId?.value||null,locationId:p.locationId?.value||null,endDate:p?.endDate,startDate:p?.startDate,slaId:p.slaId&&p.slaId.length>0?p.slaId.map(e=>{let{value:t}=e;return t}):null,tags:p.tags&&p.tags.length>0?p.tags.map(e=>{let{value:t}=e;return t}):null,status:p.status&&p.status.length>0?p.status.map(e=>{let{value:t}=e;return t}):null,supplierId:p.supplierId?.value||null,showCanceled:p?.showCanceled??!1,q:p?.q?`%${p.q}%`:null};j({...p}),d(t=>({...t,...e}))},[p,s.filterType,s.id,j,d]);let k=(0,i.useMemo)(()=>R.p.map(e=>u("supplier")?{label:e.supplierText,value:e.value}:u("customer")?{label:e.customerText,value:e.value}:{label:e.text,value:e.value}).filter(e=>null!==e.label),[u]);return(0,t.jsx)(G,{keepMounted:!0,open:a,onClose:r,sx:Y.modal,children:(0,t.jsx)(B,{onSubmit:g(()=>{try{let e=v();f(e)}finally{r()}}),children:(0,t.jsx)(H,{children:(0,t.jsxs)(M.f,{container:!0,rowSpacing:2,columnSpacing:2,children:[(0,t.jsx)(M.f,{item:!0,xs:12,children:(0,t.jsx)(N.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:x})}),(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"startDate",control:h,render:e=>(0,t.jsx)(J,{...e,label:"Quote offered date",slotProps:{textField:{fullWidth:!0,variant:"standard"}}})})}),(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"endDate",control:h,render:e=>(0,t.jsx)(J,{...e,label:"Quote due date",slotProps:{textField:{variant:"standard"}}})})}),c&&(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"supplierId",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(W.f,{...S,fullWidth:!0,value:n,onChange:(e,t)=>i(t),label:"Select supplier",variant:"standard",color:"secondary"})}})}),m&&(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"customerUserId",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(W.f,{...w,value:n,onChange:(e,t)=>i(t),label:"Select user",variant:"standard",color:"secondary",fullWidth:!0})}})}),(n=!0,"location"in l&&!l.location&&(n=!1),n&&(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"locationId",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(W.f,{...C,value:n,onChange:(e,t)=>i(t),label:"Select location",variant:"standard",color:"secondary",fullWidth:!0})}})})),c&&(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(F.f,{control:h})}),c&&(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"accountManagerId",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(W.f,{..._,value:n,onChange:(e,t)=>i(t),color:"secondary",variant:"standard",label:"Select account manager",fullWidth:!0})}})}),(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"slaId",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(W.f,{...U,multiple:!0,value:n||[],onChange:(e,t)=>i(t),label:"Select priority",variant:"standard",color:"secondary",fullWidth:!0})}})}),(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"status",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(W.f,{fullWidth:!0,value:n||[],onChange:(e,t)=>i(t),multiple:!0,limitTags:1,label:"Select status",options:k,variant:"standard",color:"secondary"})}})}),(0,t.jsx)(M.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(L.e,{name:"showCanceled",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(A.f,{control:(0,t.jsx)($.f,{color:"secondary",checked:n,onChange:e=>i(e.target.checked)}),label:"Show canceled quotes"})}})}),(0,t.jsxs)(y.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:Y.bottomButtons,children:[(0,t.jsx)(b.f,{variant:"contained",color:"danger",onClick:()=>void(f({...Q}),r()),children:"Cancel"}),(0,t.jsx)(b.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})})},Y={modal:{width:"40%"},bottomButtons:{marginTop:"20px"}},G=(0,E.f)(k.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),B=(0,E.f)("form")(()=>({width:"100%",maxWidth:"600px",maxHeight:"100vh"})),H=(0,E.f)(j.f)(()=>({width:"100%",padding:"24px",overflowY:"scroll"})),J=(0,E.f)(T.f)(()=>({"&.MuiFormControl-root.MuiTextField-root":{width:"100%"}}));var z=e.i(529422),K=e.i(60903),X=e.i(65295),Z=e.i(951510),ee=e.i(93198),et=e.i(889231),en=e.i(218659),ei=e.i(74633),ea=e.i(497844),er=e.i(122965),eo=e.i(159080),es=e.i(39059),el=e.i(284661),ed=e.i(892904),eu=e.i(990071),ec=e.i(277063);let em=eo.f`
  query GetQuotes($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    quotes: Job(limit: $limit, offset: $offset, where: $where, order_by: $order) {
      ...JobFields
      ...JobAdminFields
      ...QuoteFields
      statusLog
      quotations: SupplierQuotes {
        id
        createdAt
        jobId
        methodStatement
        notes
        quoteNumber
        startDate
        status
        totalDuration
        totalDurationUnit
        updatedAt
        siteVisitAt
        supplier: Supplier {
          ...AccountFields
        }
        lineItems: SupplierQuoteLineItems {
          id
          customerTotal
        }
      }
      supplier: Supplier {
        ...AccountFields
      }
      admin: Admin {
        id
        name
      }
      customer: Customer {
        ...AccountFields
        manager: Manager {
          id
          fullName
        }
      }
      location: Location {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      manager: Manager {
        ...UserFields
      }
      service: Service {
        id
        name
      }
      timings: JobTimings {
        id
        status
        notes
        createdAt
        user: User {
          ...UserFields
        }
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: { _and: [{ status: { _eq: "active" } }, { type: { _eq: "tags" } }] }
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
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
  ${el.f}
  ${eu.a}
  ${ed.r}
  ${ed.O}
  ${ec.f}
  ${es.W}
`;var ep=e.i(360364),ef=e.i(879436);let eh='{"Supplier": {"name": "ORDER"}}',eg='{"Customer": {"name": "ORDER"}}',ex='{"Customer": {"Manager": {"fullName": "ORDER"}}}',eb={width:"100%",height:"100%"},ej={padding:"16px 0px",height:"calc(100vh - 180px)"},ey={fontWeight:600,marginBottom:"15px"};e.s(["f",0,e=>{let{initialFilters:a,filtersVisibilityModel:r={},defaultFilters:o={}}=e,{hasRole:l}=(0,I.f)(),d=(0,w.f)(),c=d.admin.jobSetting?.jobNumberPrefix||"",m=d.admin.jobSetting?.jobNumberSuffix||"",[p,f]=(0,i.useState)(!1),[$,A]=(0,i.useState)(!1),[k,N]=(0,i.useState)({...a}),M=(0,ee.r)(),L=l("admin"),E=l("tenant"),T=l("admin_user")&&!d.hasUserModule("finances"),{reference:W,pagination:D,order:F}=(0,er.f)(),P=(0,i.useMemo)(()=>(e=>{let{filters:t,defaultFilters:n}=e,i=[],a=[],r=t.status?.includes("quoteAccepted");return(t.q||n.q)&&i.push({_or:[{description:{_ilike:t.q||n.q}},{reference:{_ilike:t.q||n.q}},{title:{_ilike:t.q||n.q}},{number:{_ilike:t.q||n.q}},{Customer:{name:{_ilike:t.q||n.q}}},{CustomerUser:{email:{_ilike:t.q||n.q}}},{Supplier:{name:{_ilike:t.q||n.q}}},{SupplierUser:{email:{_ilike:t.q||n.q}}},{Location:{name:{_ilike:t.q||n.q}}},{Taxonomy:{Taxonomy:{name:{_ilike:t.q||n.q}}}}]}),(t.startDate||n.startDate)&&i.push({createdAt:{_gte:t.startDate||n.startDate}}),(t.endDate||n.endDate)&&i.push({quoteDue:{_lte:t.endDate||n.endDate}}),t.status?.length&&a.push({status:{_in:t.status}}),t.slaId?.length&&t.slaId?.length&&i.push({slaId:{_in:t.slaId}}),(t.accountManagerId||n.accountManagerId)&&i.push({Customer:{Manager:{id:{_eq:t.accountManagerId||n.accountManagerId}}}}),(t.locationManagerId||n.locationManagerId)&&i.push({Location:{managerId:{_eq:t.locationManagerId||n.locationManagerId}}}),(t.customerUserId||n.customerUserId)&&i.push({customerUserId:{_eq:t.customerUserId||n.customerUserId}}),(t.customerId||n.customerId)&&i.push({customerId:{_eq:t.customerId||n.customerId}}),(t.locationId||n.locationId)&&i.push({locationId:{_eq:t.locationId||n.locationId}}),(t.supplierId||n.supplierId)&&i.push({SupplierQuotes:{Supplier:{id:{_eq:t.supplierId||n.supplierId}}}}),t.tags?.length&&t.tags?.length&&i.push({Taxonomy:{_and:[{entity:{_eq:"Job"}},{Taxonomy:{status:{_eq:"active"},_and:[{id:{_in:t.tags||n.tags}},{type:{_eq:"tags"}}]}}]}}),r&&a.push({type:{_eq:"reactive"}}),a.length>0&&i.push({_or:a}),(t.showCanceled??n.showCanceled)||i.push({status:{_neq:"canceled"}}),{quoted:{_eq:!0},_and:i}})({filters:k,defaultFilters:o}),[k,o]),{data:{quotes:O,meta:Q}={quotes:[],meta:{aggregate:{totalCount:0}}},loading:Y}=(0,u.t)(em,{variables:{where:P,...D,order:F}}),[G]=(0,q.f)(em,{variables:{where:P,order:F},onCompleted:e=>{let{quotes:t}=e;if(p){let e="data:application/octet-stream,"+encodeURIComponent(g.default.unparse(eu(t),{escapeFormulae:/^[=+@\t\r]/}));(0,K.f)(e,"quotes.csv"),f(!1)}}}),B=(0,i.useCallback)(e=>{e.stopPropagation(),G(),f(!0)},[G,f]),H=(0,i.useCallback)(e=>{h.default.push(`/dashboard/issues/view?id=${e.number}`)},[]),J=(0,i.useCallback)(e=>{h.default.push(`/dashboard/issues/manage?id=${e.number}&quoted=1`)},[]),eo=(0,i.useCallback)(e=>d.can("quote.update")?[{icon:"info",tooltip:"Info",onClick:()=>H(e)},{icon:"edit",tooltip:"Edit",onClick:()=>J(e)}]:[{icon:"info",tooltip:"Info",onClick:()=>H(e)}],[d,J,H]),es=(0,i.useMemo)(()=>[{sortable:!0,minWidth:80,field:"id",headerName:"ID",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(z.f,{id:n.id,number:n.number,numberPrefix:c,numberSuffix:m,openCanvas:!0,type:n.type,isQuote:n.quoted})}},{minWidth:300,field:"tags",headerName:"Tags",sortable:!1,flex:1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(ep.f,{row:{id:n.id,tags:n.tags,onSiteTimingEnd:n.onSiteTimingEnd,jobReportTimingEnd:n.jobReportTimingEnd,quoteReturnedTimingEnd:n.quoteReturnedTimingEnd},refetchQueries:["GetQuotes"],entity:"Job",removeTagTarget:"quote"})}},{sortable:!0,flex:1,minWidth:200,field:"description",headerName:"Description"},{sortable:!0,flex:1,minWidth:80,field:"type",headerName:"Type"},{sortable:!0,flex:1,minWidth:200,field:'{"Manager": {"nameFirst": "ORDER"}}',headerName:"Assigned to",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(t.Fragment,{children:n?.managerId?(0,t.jsx)(et.f,{color:"secondary",href:`/dashboard/users/view?id=${n.managerId}`,children:n.manager}):n.manager})}},{sortable:!0,flex:1,minWidth:180,field:'{"Location": {"name": "ORDER"}}',headerName:"Location",renderCell:e=>{let{row:n}=e;return n?.propertyId?(0,t.jsx)(et.f,{color:"secondary",href:`/dashboard/properties/view?id=${n.propertyId}`,children:n.location}):n.location}},{sortable:!0,flex:1,minWidth:180,field:eg,headerName:"Customer",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(et.f,{color:"secondary",href:`/dashboard/customers/view?id=${n.customerId}`,children:n.customer})}},{minWidth:180,flex:1,field:ex,headerName:"Account Manager",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(et.f,{noWrap:!n.customerManagerId,color:"secondary",href:`/dashboard/users/view?id=${n.customerManagerId}`,children:n.customerManager})}},{sortable:!0,flex:1,minWidth:180,field:eh,headerName:"Accepted Supplier",renderCell:e=>{let{row:n}=e;return n.supplierId?(0,t.jsx)(et.f,{color:"secondary",href:`/dashboard/suppliers/view?id=${n.supplierId}`,children:n.acceptSupplier}):n.acceptSupplier}},{sortable:!1,flex:1,minWidth:180,field:"offeredSupplier",headerName:"Offered Supplier",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(t.Fragment,{children:(n?.offeredSupplier?.length||0)>0&&"string"!=typeof n?.offeredSupplier?(0,t.jsx)(y.f,{children:n?.offeredSupplier?.map(e=>(0,t.jsx)(et.f,{color:"secondary",href:`/dashboard/suppliers/view?id=${e?.supplier?.id}`,children:e?.supplier?.name}))}):"-"})}},{sortable:!1,flex:1,minWidth:200,field:"quotations",headerName:"Quotations (Received)",renderCell:e=>{let{row:n}=e;return(0,t.jsxs)(y.f,{children:[(0,t.jsx)(s.f,{sx:{whiteSpace:"nowrap"},children:n.quotations}),(0,t.jsxs)(s.f,{sx:{whiteSpace:"nowrap"},children:["(",n.received,")"]})]})}},{sortable:!1,flex:1,minWidth:140,field:"range",headerName:"Quotations Range",renderCell:e=>{let{row:n}=e,i=n.range;return i&&"string"!=typeof i?(0,t.jsxs)(y.f,{children:[(0,t.jsxs)(s.f,{sx:{whiteSpace:"nowrap"},children:["high: ",(0,ef.f)(i.high)]}),(0,t.jsxs)(s.f,{sx:{whiteSpace:"nowrap"},children:["low: ",(0,ef.f)(i.low)]})]}):"N/A"}},{sortable:!0,headerName:"Quote Due",flex:1,minWidth:120,field:"quoteDue",renderCell:e=>{let{row:i}=e,a=(0,n.default)(i.due,"DD/MM/YYYY",!0),r="Quote"===i.type,o=i.status?.includes("quoteSent");if(r&&a.isValid()&&a.isBefore((0,n.default)(),"day")&&!o)return(0,t.jsxs)(y.f,{alignItems:"center",children:[(0,t.jsx)(_.default,{color:"error",sx:{height:"20px"}}),(0,t.jsx)(s.f,{children:i.due})]})}},{flex:1,minWidth:120,field:"scheduledAt",renderCell:e=>{let{row:t}=e;return t.scheduleDate},headerName:"Scheduled",sortable:!0},{flex:1,minWidth:120,field:"createdAt",renderCell:e=>{let{row:t}=e;return t.date},headerName:"Created",sortable:!0},{flex:1,minWidth:140,field:"status",headerName:"Status",sortable:!0,renderCell:e=>{let{row:n}=e,i=null;return i=(n?.offeredSupplier?.length||0)>0&&"string"!=typeof n?.offeredSupplier&&n?.offeredSupplier?.every(e=>"quotationRejected"===e.status)?"rejected":n?.status||i,(0,t.jsx)(U.f,{value:i})}},{sortable:!1,flex:1,field:"actions",headerName:"",maxWidth:50,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(ea.f,{actions:eo(n)})}}],[eo,c,m]),el=e=>{let t=null;if(e.length>1){let n=e.map(e=>e.lineItems?.reduce((e,t)=>e+t.customerTotal,0)??0);t={high:Math.max(...n),low:Math.min(...n)}}return t},ed=(0,i.useCallback)(e=>{let{text:t,supplierText:n,customerText:i}=[...R.p].find(t=>t.value===e.status)||{text:"Accepted"},a=e?.quotations?.length>0?e.quotations:[];if(a?.every(e=>"quotationRejected"===e.status))return"Quotation Rejected";if(l("admin"));else if(l("supplier"))return n||"Accepted";else if(l("customer"))return i||"Accepted";return t},[l]),eu=(0,i.useCallback)(e=>e.map(e=>{let{text:t}=[...C.f].find(t=>t.value===e.type)||{text:"Quote"},i=e.manager?`${e.manager.nameFirst} ${e.manager.nameLast}`:"Unassigned",a=e.scheduledAt?(0,n.default)(e.scheduledAt).format("YYYY-MM-DD"):"-",r=e?.tags?.map(e=>e?.tag?.name),o=el(e.quotations);return{...L&&{tags:r},description:e?.description?e?.description:"",number:e.number,type:t,manager:i,location:e.location?.name||"-",customer:e.customer?.name||"-",customerManager:e.customer?.manager?.fullName||"-",...L&&!T?{quotationReceived:`${e.quotations?.length||0}/${e.quoteNumber}`}:{},status:ed(e),...L&&!T&&o?{range:`high: ${o.high}, low: ${o.low}`}:L&&!T?{range:"N/A"}:{},due:(0,X.f)(e.quoteDue)||"-",scheduleDate:a,date:(0,n.default)(e.createdAt).format("DD/MM/YYYY")}}),[ed,T,L]),ec=(0,i.useMemo)(()=>O.map(e=>{let{text:t}=[...C.f].find(t=>t.value===e.type)||{text:"Quote"},i=e.manager?`${e.manager.nameFirst} ${e.manager.nameLast}`:"Unassigned",a=e.scheduledAt?(0,n.default)(e.scheduledAt).format("YYYY-MM-DD"):"-",r=el(e.quotations);return{id:e.id,tags:e?.tags,description:e?.description?e?.description:"",number:e.number,type:t,status:e.status,propertyId:e.location?.id,managerId:e.manager?.id,customerId:e.customer?.id,supplierId:e.supplier?e.supplier.id:"",manager:i,location:e.location?.name||"-",customer:e.customer?.name||"-",customerManager:e.customer?.manager?.fullName||"-",customerManagerId:e.customer?.manager?.id,acceptSupplier:e.supplier?e.supplier.name:"-",offeredSupplier:e?.quotations?.length>0?e.quotations:[],quotations:`${e.quotations?.length||0}/${e.quoteNumber}`,received:`${(e.quotations||[])?.reduce((e,t)=>"supplierQuoteComplete"===t.status?e+1:e,0)}/${e.quotations?.length||0}`,range:r,due:(0,X.f)(e.quoteDue)||"-",scheduleDate:a,date:(0,n.default)(e.createdAt).format("DD/MM/YYYY"),statusText:ed(e),quoted:e.quoted||!1,quotationsId:e.quotations[0]&&e.quotations[0].id,actions:"",onSiteTimingEnd:e.onSiteTimingEnd,jobReportTimingEnd:e.jobReportTimingEnd,quoteReturnedTimingEnd:e.quoteReturnedTimingEnd}}),[ed,O]),ev=(0,i.useCallback)(e=>{e.stopPropagation();let t=(0,Z.W)(k);h.default.push(`/dashboard/issues/manage${t}`)},[k]),eS=(0,i.useMemo)(()=>x.isEqual(k,a)?{title:"No work orders",subtitleFirstLine:"You currently have no work orders set up in the system",subtitleSecondLine:"Click create work orders to get started building.",buttonText:"Create work orders",onAction:ev}:{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."},[k,ev,a]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(V,{open:$,close:()=>A(!1),filterType:a.filterType,initialFilters:a,setFilters:N,filtersVisibilityModel:r}),(0,t.jsxs)(y.f,{spacing:2,sx:eb,children:[(0,t.jsxs)(y.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(b.f,{variant:"contained",startIcon:(0,t.jsx)(S.default,{}),onClick:()=>A(!0),children:"Filters"}),(0,t.jsxs)(y.f,{direction:"row",spacing:2,children:[d.can("quote.create")&&(0,t.jsx)(b.f,{variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation();let t=(0,Z.W)({customerId:a.customerId,locationId:a.locationId});h.default.push(`/dashboard/issues/manage${t}&quoted=1`)},children:"Add Quote"}),!M&&!E&&(0,t.jsx)(b.f,{startIcon:!p&&(0,t.jsx)("img",{src:"/static/icons/csv.svg"}),disabled:p,variant:"contained",color:"success",onClick:B,children:p?(0,t.jsx)(v.f,{size:20,color:"secondary"}):"Export"})]})]}),(0,t.jsxs)(j.f,{sx:ej,children:[(0,t.jsx)(s.f,{ml:2,variant:"h5",sx:ey,children:"Quotes"}),(O?.length||Y)&&(0,t.jsx)(ei.s,{...W,loading:Y,columns:es,rows:ec,totalCount:Q?.aggregate?.totalCount,columnVisibilityModel:{tags:L,[eg]:L,[ex]:L,[eh]:L,offeredSupplier:L,quotations:L&&!T,range:L&&!T,received:L&&!T},autoHeight:!1,onRowClick:e=>{e?.row?.number&&h.default.push(`/dashboard/issues/view?id=${e.row.number}`)},containerHeight:"calc(100% - 60px)"}),!O?.length&&!Y&&(0,t.jsx)(en.f,{imageSrc:"/static/icons/no_locations_found.svg",...eS})]})]})]})}],498922)},577579,e=>{var t=e.i(391398);e.i(443645);var n=e.i(648116),i=e.i(21557),a=e.i(88152),r=e.i(813843),o=e.i(115871),s=e.i(755548),l=e.i(529422),d=e.i(280445),u=e.i(191788),c=e.i(74633),m=e.i(936641),p=e.i(498681);let f=e=>{let{errors:n,onClose:i}=e,{admin:a}=(0,p.f)(),d=a.jobSetting.jobNumberPrefix,f=a.jobSetting.jobNumberSuffix,g=(0,u.useMemo)(()=>[{flex:1,minWidth:100,field:"job",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(l.f,{id:n.job.id,number:n.job.number,type:n.job.type,numberPrefix:d,numberSuffix:f,isBlank:!0,isHref:!0})}},{flex:1,minWidth:200,field:"customerError",headerName:"Customer Error",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(o.f,{variant:"body1",children:n.customerError?.message})}},{flex:1,minWidth:200,field:"supplierError",headerName:"Supplier Error",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(o.f,{variant:"body1",children:n.supplierError?.message})}}],[d,f]),x=(0,u.useMemo)(()=>n.sort((e,t)=>t.job.id-e.job.id),[n]);return(0,t.jsx)(h,{sx:{padding:4},children:(0,t.jsxs)(r.f,{direction:"column",alignItems:"center",spacing:2,children:[(0,t.jsx)(m.f,{variant:"filled",severity:"error",sx:{width:"100%"},children:"Some errors occurred while recalculating the finances."}),(0,t.jsx)(r.f,{height:"100%",width:"100%",sx:{overflow:"auto"},children:(0,t.jsx)(c.s,{autoHeight:!1,columns:g,rows:x,getRowId:e=>e.job.id,containerHeight:"calc(80vh - 200px)"})}),(0,t.jsx)(s.f,{fullWidth:!0,variant:"contained",color:"secondary",onClick:i,children:"Ok"})]})})},h=(0,d.f)(a.f)(e=>{let{theme:t}=e;return{padding:`${t.spacing(4)} !important`,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"600px",maxHeight:"80vh"}});e.s(["S",0,()=>{let[e,i]=(0,n.f)();return{recalcModal:e,showRecalcErrors:async e=>{let n=e?.errors;return!!Array.isArray(n)&&0!==n.length&&(await i({content:e=>{let{onClose:i}=e;return(0,t.jsx)(f,{errors:n,onClose:i})}}),!0)}}},"H",0,()=>{let e=(0,i.f)();return{showRecalcErrorsSnackbar:t=>{let n=t?.errors;if(!Array.isArray(n)||0===n.length)return!1;let[i]=n,a=[i?.customerError?.message,i?.supplierError?.message].filter(e=>!!e);for(let t of a.length>0?a:["Saved, but the job finances could not be recalculated. Re-open the job to refresh them."])e.show({content:t,severity:"warning"});return!0}}}],577579)},359786,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(877341),a=e.i(432171),r=e.i(422411),o=e.i(424894),s=e.i(799083),l=e.i(322135),d=e.i(720676),u=e.i(152078),c=e.i(13558),m=e.i(631328),p=e.i(813843),f=e.i(827010),h=e.i(824451),g=e.i(115871);let x=e=>{let{propertyOwner:a,canSelectAccount:o,control:s,errors:l,setValue:d}=e,[u,c]=(0,n.useState)(""),[x,j]=(0,n.useState)(""),y=(0,m.y)(a);(0,n.useEffect)(()=>{a?.value!==y?.value&&y&&d("contactUser",null)},[y,a,d]);let[v,{loading:S,data:{items:q}={items:[]}}]=(0,i.f)(f.r,{variables:{limit:50,q:""!==u?`%${u}%`:null}}),[I,{loading:w,data:{items:R}={items:[]}}]=(0,i.f)(f.Q,{variables:{limit:50,accountId:a?.value||null,q:""!==x?`%${x}%`:null}});return(0,t.jsxs)(p.f,{direction:"row",spacing:2,children:[(0,t.jsxs)(p.f,{mb:2,width:"50%",children:[(0,t.jsx)(g.f,{sx:b.title,children:"Client"}),(0,t.jsx)(r.e,{defaultValue:null,name:"propertyOwner",control:s,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(h.f,{value:n,fullWidth:!0,disabled:!o,onChange:(e,t)=>i(t),onSearchChange:c,loading:S,onOpen:()=>v(),options:q,variant:"standard",color:"secondary",placeholder:"Client",error:!!l.propertyOwner,helperText:l.propertyOwner?.message})}})]}),(0,t.jsxs)(p.f,{mb:2,width:"50%",children:[(0,t.jsx)(g.f,{sx:b.title,children:"Contact Name"}),(0,t.jsx)(r.e,{defaultValue:null,name:"contactUser",control:s,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(h.f,{fullWidth:!0,value:n,disabled:!a,onChange:(e,t)=>i(t),onSearchChange:j,loading:w,onOpen:()=>I(),options:R,variant:"standard",color:"secondary",placeholder:"Contact Name",error:!!l.contactUser,helperText:l.contactUser?.message})}})]})]})},b={title:{fontSize:"18px",marginBottom:"10px",fontWeight:300,color:"gray"}},j=e=>{if(!e||0===e.length)return{primaryCustomer:null,relatedPartyCustomers:[]};let t=e.findIndex(e=>"primary"===e.linkType),n=t>=0?t:0;return{primaryCustomer:e[n]??null,relatedPartyCustomers:e.filter((e,t)=>t!==n)}};var y=e.i(426778);let v=(0,y.t)({value:(0,y.H)().required(),label:(0,y.x)().required()}),S=(0,y.t)().shape({access:(0,y.x)().required(),contactUser:v.required(),manager:v.required(),name:(0,y.x)().required(),propertyOwner:v.required(),status:(0,y.x)().when(["$isAdmin"],(e,t)=>{let[n]=e;return n?t.required():t}),permitsRequired:(0,y.g)(),users:(0,y.k)().of((0,y.H)().required()).ensure()});var q=e.i(411331),I=e.i(594301),w=e.i(159080);let R=w.f`
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
`,C=w.f`
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
`;w.f`
  mutation UpdateAccount($id: Int!, $changes: Account_set_input) {
    update_Account_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,w.f`
  query GetAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      id
      meta
    }
  }
`;let U=w.f`
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
`;var _=e.i(207646),$=e.i(410355),A=e.i(652148),k=e.i(936641),N=e.i(280445),M=e.i(122989),L=e.i(74633),E=e.i(851123),T=e.i(148310),W=e.i(755548),D=e.i(800884);let F=e=>{let{existingAccountIds:a,onSave:r,onCancel:o}=e,[s,l]=(0,n.useState)(""),[d,u]=(0,n.useState)(null),[c,{loading:m,data:{items:g}={items:[]}}]=(0,i.f)(f.r,{variables:{limit:50,q:""!==s?`%${s}%`:null}}),x=(0,n.useMemo)(()=>g.filter(e=>!a.includes(e.value)),[g,a]);return(0,t.jsxs)(p.f,{spacing:3,sx:{minWidth:320,pt:1},children:[(0,t.jsx)(h.f,{value:d,onChange:(e,t)=>u(t),onOpen:()=>c(),onSearchChange:l,loading:m,options:x,label:"Customer company",variant:"standard",color:"secondary"}),(0,t.jsxs)(p.f,{direction:"row",spacing:1,justifyContent:"flex-end",children:[(0,t.jsx)(W.f,{variant:"contained",color:"danger",onClick:o,children:"Cancel"}),(0,t.jsx)(W.f,{variant:"contained",color:"secondary",disabled:!d,onClick:()=>d&&r(d),children:"Save"})]})]})},P=e=>{let{value:i,onChange:a,excludeAccountIds:r=[]}=e,o=(0,q.f)(),s=i.length>=2,l=(0,n.useMemo)(()=>i.map(e=>e.value).concat(r),[i,r]),d=(0,n.useCallback)(()=>{o.show({title:"Add related party",submit:!1,content:(0,t.jsx)(F,{existingAccountIds:l,onCancel:()=>o.close(),onSave:e=>{a([...i,e]),o.close()}})})},[l,o,a,i]),u=(0,n.useCallback)(e=>{a(i.filter(t=>t.value!==e))},[a,i]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(p.f,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:1,children:[(0,t.jsx)(g.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Related party"}),(0,t.jsx)(W.f,{size:"small",color:"secondary",variant:"contained",startIcon:(0,t.jsx)(T.default,{}),onClick:d,disabled:s,sx:{minWidth:"auto"},children:"Add"})]}),i.length>0&&(0,t.jsx)(p.f,{direction:"row",flexWrap:"wrap",gap:1,children:i.map(e=>(0,t.jsx)(D.f,{label:e.label,onDelete:()=>u(e.value),color:"secondary",variant:"outlined"},e.value))}),s&&(0,t.jsxs)(g.f,{sx:{fontSize:13,color:"gray",mt:1,ml:1},children:["*Maximum of ",2," related parties"]})]})};var O=e.i(511667),Q=e.i(21557),V=e.i(920475),Y=e.i(684779),G=e.i(974266);let B=(0,N.f)(e=>{let{className:n,...i}=e;return(0,t.jsx)(l.f,{...i,classes:{popper:n}})})(e=>{let{theme:t}=e;return{[`& .${d.f.tooltip}`]:{backgroundColor:t?.palette.dark.main,boxShadow:t?.shadows[1],fontSize:13}}});e.s(["f",0,e=>{let{accountId:l,accountName:d,locationId:m,refetch:f,onSubmit:b,close:y}=e,v=(0,q.f)(),w=(0,Q.f)(),{user:N,hasRole:T}=(0,I.f)(),[W,D]=(0,n.useState)(null),[F,H]=(0,n.useState)(""),J=(0,n.useRef)(null),z=T("admin"),{control:K,errors:X,handleSubmit:Z,setValue:ee,watch:et,reset:en}=(0,r.G)({defaultValues:{...d&&l&&{propertyOwner:{label:d,value:l}}},resolver:(0,o.yupResolver)(S),context:{isAdmin:z}}),{data:{property:ei}={property:null}}=(0,a.t)(R,{skip:!m,variables:{id:m},onCompleted:e=>{let{property:t}=e,{primaryCustomer:n}=j(t?.accountLocations??[]);en({...(e=>{let{property:t,customer:n}=e,i=t?.status==="active"||t?.status==="inactive"?t.status:void 0;return{...t?.access&&{access:t?.access},...t?.contactUser&&{contactUser:{value:t?.contactUser?.id,label:t?.contactUser?.fullName}},...t?.manager&&{manager:{value:t?.manager?.id,label:t?.manager?.fullName}},...t?.name&&{name:t?.name},...n&&{propertyOwner:{value:n?.id,label:n?.name}},...i&&{status:i},...t?.permitsRequired&&{permitsRequired:t?.permitsRequired}}})({property:t,customer:n?.account})})}}),ea=et("users")??[],er=et("propertyOwner"),[eo,es]=(0,n.useState)([]);(0,n.useEffect)(()=>{if(!ei)return;let{relatedPartyCustomers:e}=j(ei.accountLocations??[]);es(e.map(e=>({value:e.accountId,label:e.account?.name??""})))},[ei]);let{data:{jobs:el}={jobs:[]}}=(0,a.t)(C,{variables:{propertyId:m},skip:!m}),[ed,{isLoading:eu}]=(0,O.f)("/location/create",{queryKey:"location-create",method:"POST",onError:e=>{w.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{b?.(e),w.show({content:"Location was created"}),f?.(),y?.()}}),[ec,{isLoading:em}]=(0,O.f)("/location/update",{queryKey:"location-update",method:"PUT",onError:e=>{w.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{b?.(e),w.show({content:"Location was created"}),f?.(),y?.()}}),ep=(0,n.useCallback)(async()=>new Promise((e,n)=>{v.show({title:"Add new address",content:(0,t.jsx)($.f,{onSubmit:async t=>{e(t),y?.()}}),onClose:()=>n(),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw"})}),[y,v]),[ef,{loading:eh,data:{items:eg}={items:[]}}]=(0,i.f)(E.P,{variables:{limit:50,accountId:N.adminId,q:""!==F?`%${F}%`:null}}),ex=async e=>{D(null);let t=e.users??[],n=er?.value,i=t.filter(e=>ej.find(t=>t.id===e)?.account?.id===n),a=eo.map(e=>({accountId:e.value,userAccountIds:t.filter(t=>ej.find(e=>e.id===t)?.account?.id===e.value)}));if(m){if("inactive"===e.status&&el.length>0)return void D("This location cannot be made inactive, it has active jobs.");let t=(e=>{let{locationId:t,propertyForm:n,primaryUserAccountIds:i,relatedParties:a}=e;return{locationId:t,access:n.access,primaryUserAccountIds:i,relatedParties:a??[],name:n.name,status:n.status??"active",permitsRequired:!!n.permitsRequired,contactUserId:n.contactUser.value,managerId:n.manager.value,accountId:n.propertyOwner.value}})({locationId:m,propertyForm:e,primaryUserAccountIds:i,relatedParties:a});await ec({body:t})}else{J.current||(J.current=await ep());let t=(e=>{let{propertyForm:t,addressForm:n,primaryUserAccountIds:i,relatedParties:a}=e;return{access:t.access,primaryUserAccountIds:i,relatedParties:a??[],name:t.name,status:t.status??"active",permitsRequired:!!t.permitsRequired,contactUserId:t.contactUser.value,managerId:t.manager.value,accountId:t.propertyOwner.value,address:{name:n.name,addressLine2:n.addressLine2,addressLine3:n.addressLine3,county:n.county,addressLine1:n.addressLine1,city:n.city,postCode:n.postCode,countryId:n.countryId}}})({propertyForm:e,addressForm:J.current,primaryUserAccountIds:i,relatedParties:a});await ed({body:t})}},eb=[...er?.value?[er.value]:[],...eo.map(e=>e.value)],{data:{users:ej}={users:[]},loading:ey}=(0,a.t)(U,{variables:{accountIds:eb,role:"user"},skip:!Array.isArray(eb)||eb.length<0||!z,onCompleted:e=>{let{users:t}=e;ee("users",(t?.map?.(e=>({id:e.id,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[]}))||[]).filter(e=>m&&e.locations.includes(m)).map(e=>e?.id)||[])}}),ev=[{sortable:!1,flex:1,field:"account",headerName:"Company name",minWidth:160,renderCell:e=>{let{row:t}=e;return t.account.name}},{sortable:!1,flex:1,field:"fullName",headerName:"Name",minWidth:160},{sortable:!1,flex:1,field:"email",headerName:"Email address",minWidth:260},{sortable:!1,flex:1,field:"contact",headerName:"Contact user",minWidth:160,renderCell:e=>{let{row:n}=e;if(n.isContact)return(0,t.jsx)(p.f,{direction:"row",width:"100%",alignItems:"center",justifyContent:"flex-start",children:(0,t.jsx)(V.default,{color:"error"})})}},{sortable:!1,flex:1,field:"phone",minWidth:160,headerName:"Phone"},{sortable:!1,flex:1,field:"position",minWidth:160,headerName:"Position"},{sortable:!1,flex:1,width:15,field:"role",minWidth:160,headerName:"Role"}],eS=(0,n.useMemo)(()=>ej.map(e=>({...e.user,id:e.id,position:e.position,isContact:e?.isContact,role:e?.role,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[],account:e.account})),[ej]);return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:Z(ex),children:[(0,t.jsx)(Y.f,{sx:{zIndex:1e5},open:eu||em,children:(0,t.jsx)(G.f,{color:"secondary"})}),!!W&&(0,t.jsx)(k.f,{variant:"filled",severity:"info",color:"info",sx:{marginBottom:2},children:W}),(0,t.jsx)(p.f,{mb:3,children:(0,t.jsx)(x,{control:K,errors:X,propertyOwner:er,canSelectAccount:!l,setValue:ee})}),(0,t.jsx)(p.f,{mb:3,children:(0,t.jsx)(r.e,{defaultValue:null,name:"manager",control:K,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(h.f,{value:n,onChange:(e,t)=>i(t),label:"Select manager",loading:eh,onOpen:()=>ef(),onSearchChange:H,options:eg,error:!!X?.manager,helperText:X?.manager?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsx)(p.f,{mb:3,children:(0,t.jsx)(r.e,{defaultValue:null,name:"name",control:K,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(A.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",value:n,onChange:i,error:!!X.name,helperText:X.name?.message,InputLabelProps:{shrink:!!n}})}})}),(0,t.jsx)(p.f,{mb:3,children:(0,t.jsx)(r.e,{defaultValue:null,name:"access",control:K,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(A.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",placeholder:"Access information",sx:{"& .MuiFilledInput-root":{paddingTop:1}},value:n,onChange:i,error:!!X.access,helperText:X.access?.message})}})}),z&&(0,t.jsx)(p.f,{mb:2,children:(0,t.jsx)(r.e,{name:"status",control:K,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(M.f,{value:n||"",onChange:i,options:_.f,label:"Status",fullWidth:!0,error:!!X.status,helperText:X.status?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsxs)(p.f,{children:[(0,t.jsx)(r.e,{name:"permitsRequired",control:K,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(u.f,{control:(0,t.jsx)(s.f,{color:"secondary",checked:n||!1,onChange:e=>i(e.target.checked)}),label:"Permits required"})}}),(0,t.jsx)(k.f,{severity:"info",sx:{marginY:1,backgroundColor:"rgba(30, 136, 229, 0.1)","& .MuiAlert-icon":{color:"secondary.main"},"& .MuiAlert-message":{color:"secondary.main"}},children:"Please indicate whether permits are required for this site. This can then be used to prompt reminders to upload permits for work orders at this site."})]}),z&&(0,t.jsx)(p.f,{mt:3,children:(0,t.jsx)(P,{value:eo,onChange:es,excludeAccountIds:er?.value?[er?.value]:void 0})}),z&&ej.length>0&&(0,t.jsxs)(p.f,{mb:2,mt:2,children:[(0,t.jsxs)(p.f,{direction:"row",alignItems:"center",mb:1,children:[(0,t.jsx)(g.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Customer users"}),(0,t.jsx)(B,{title:"Please select the users you would like to link to this site by checking\n                the box beside their name. This will then allow you to assign work\n                orders to them for this site.",children:(0,t.jsx)(c.default,{sx:{fontSize:22,marginLeft:1,color:"gray"}})})]}),(0,t.jsx)(L.s,{columns:ev,loading:ey,rows:eS,checkboxSelection:!0,rowSelectionModel:ea,onRowSelectionModelChange:e=>{ee("users",e)},sx:{"& .MuiCheckbox-root":{"&.Mui-checked":{color:"secondary.main"}}}}),(0,t.jsx)(r.e,{name:"users",control:K,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)("input",{value:n,onChange:i,type:"hidden"})}})]})]})}],359786)},765099,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(432171),a=e.i(776204),r=e.i(159080);let o=r.f`
  query GetSlas(
    $subtype: sla_subtype
    $entity: String
    $entityId: Int
    $isEntity: Boolean!
    $isLocation: Boolean!
    $customerId: Int
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: SLA_order_by!
  ) {
    slas: SLA(
      limit: $limit
      offset: $offset
      where: { subtype: { _eq: $subtype }, name: { _ilike: $q } }
      order_by: [$orderBy]
    ) {
      id
      subtype
      name
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
      customerSla: SLA_Entities(
        where: { entity: { _eq: "Account" }, entityId: { _eq: $customerId } }
      ) @include(if: $isLocation) {
        status
        id
        entity
        entityId
        quoteReturned
        quoteReturnedUnit
        onSite
        onSiteUnit
        jobReport
        jobReportUnit
        completion
        completionUnit
        notes
        inUse
        normalRate
        oohRate
        premiumRate
        minimumInterval
        minimumLength
        slaId
      }
      entities: SLA_Entities(
        where: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
        order_by: { slaId: asc }
      ) @include(if: $isEntity) {
        status
        id
        entity
        entityId
        quoteReturned
        quoteReturnedUnit
        onSite
        onSiteUnit
        jobReport
        jobReportUnit
        completion
        completionUnit
        notes
        inUse
        normalRate
        oohRate
        premiumRate
        minimumInterval
        minimumLength
        slaId
      }
    }
    meta: SLA_aggregate(where: { subtype: { _eq: $subtype }, name: { _ilike: $q } }) {
      aggregate {
        totalCount: count
      }
    }
  }
`,s=r.f`
  query GetSla($id: Int!) {
    sla: SLA_by_pk(id: $id) {
      id
      subtype
      name
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
  }
`,l=r.f`
  mutation AddSla($objects: [SLA_insert_input!]!) {
    insert_SLA(objects: $objects) {
      returning {
        id
      }
    }
  }
`,d=r.f`
  mutation UpdateSla($id: Int!, $changes: SLA_set_input) {
    update_SLA_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,u=r.f`
  query GetSlaEntity($id: Int!, $slaEntityId: Int, $hasEntity: Boolean!) {
    sla: SLA_by_pk(id: $id) {
      id
      subtype
      name
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
      slaEntity: SLA_Entities(where: { id: { _eq: $slaEntityId } }) @include(if: $hasEntity) {
        id
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
      }
    }
  }
`,c=r.f`
  mutation addSla($objects: [SLA_Entity_insert_input!]!) {
    insert_SLA_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,m=r.f`
  mutation UpdateSla($id: Int!, $changes: SLA_Entity_set_input) {
    update_SLA_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;var p=e.i(98762),f=e.i(936641),h=e.i(755548),g=e.i(88152),x=e.i(813843),b=e.i(4142),j=e.i(115871),y=e.i(890854),v=e.i(411331),S=e.i(239964),q=e.i(594301),I=e.i(320861),w=e.i(21557),R=e.i(422411),C=e.i(424894),U=e.i(426778);let _=[...I.b,I.F],$=(e,t)=>(0,U.H)().nullable().transform((e,t)=>""===t||Number.isNaN(e)?null:e).when(["$subtype",t],(t,n)=>{let i=t[0],a=t[1];return i!==e||a===I.F?n.nullable():n.min(0).required()}),A=e=>(0,U.x)().nullable().when("$subtype",{is:t=>t===e,then:e=>e.oneOf([..._]).required(),otherwise:e=>e.nullable()}),k=(0,U.t)().shape({name:(0,U.x)().required(),status:(0,U.x)().oneOf(["active","inactive"]).required(),isDefault:(0,U.g)(),notes:(0,U.x)(),onSite:$("reactive","onSiteUnit"),onSiteUnit:A("reactive"),jobReport:$("reactive","jobReportUnit"),jobReportUnit:A("reactive"),completion:$("reactive","completionUnit"),completionUnit:A("reactive"),quoteReturned:$("quote","quoteReturnedUnit"),quoteReturnedUnit:A("quote")}),N=(0,U.t)().shape({status:(0,U.x)().oneOf(["active","inactive"]).required(),notes:(0,U.x)(),onSite:$("reactive","onSiteUnit"),onSiteUnit:A("reactive"),jobReport:$("reactive","jobReportUnit"),jobReportUnit:A("reactive"),completion:$("reactive","completionUnit"),completionUnit:A("reactive"),quoteReturned:$("quote","quoteReturnedUnit"),quoteReturnedUnit:A("quote")}),M=(e,t,n)=>{if("quote"===t){let i=(0,I.r)(e.quoteReturned,e.quoteReturnedUnit);return{type:"priority",subtype:t,name:e.name,status:e.status,notes:e.notes,quoteReturned:i.time,quoteReturnedUnit:i.unit,adminId:n}}let i=(0,I.r)(e.onSite,e.onSiteUnit),a=(0,I.r)(e.jobReport,e.jobReportUnit),r=(0,I.r)(e.completion,e.completionUnit);return{type:"priority",subtype:t,name:e.name,status:e.status,notes:e.notes,isDefault:e.isDefault,normalRate:0,oohRate:0,premiumRate:0,onSite:i.time,onSiteUnit:i.unit,jobReport:a.time,jobReportUnit:a.unit,completion:r.time,completionUnit:r.unit,adminId:n}};var L=e.i(207646),E=e.i(76381),T=e.i(652148),W=e.i(152078),D=e.i(122989),F=e.i(740790),P=e.i(799083),O=e.i(587369);let Q="The deadline for the job to be marked as in progress, either by starting the timer or manually updating the job’s start time.",V="The deadline for the job report to be sent to the customer after the job has been marked as completed.";var Y=e.i(471973),G=e.i(813762);let B=e=>{let{name:n,nameUnit:i,label:a,tooltip:r,control:o,register:s,errors:l,setValue:d,watch:u}=e,c=u(i),m=u(n),p=c===I.F,f=!p&&""!==m&&null!=m&&0===Number(m);return(0,t.jsxs)(x.f,{children:[(0,t.jsxs)(j.f,{sx:H.title,children:[a,r&&(0,t.jsx)(G.p,{title:r,iconSx:{fontSize:16}})]}),(0,t.jsxs)(x.f,{direction:"row",spacing:1,alignItems:"flex-end",children:[(0,t.jsx)(x.f,{marginBottom:1,children:(0,t.jsx)(T.f,{name:n,inputRef:s,type:"number",variant:"standard",color:"secondary",disabled:p,inputProps:{min:0},error:!!l[n]})}),(0,t.jsx)(R.e,{name:i,control:o,render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(D.f,{value:a||"",onChange:e=>{let t=e.target.value;r(t),t===I.F&&d(n,null)},options:[...I.c],label:"Unit",fullWidth:!0,variant:"standard",color:"secondary",error:!!l[i]})}})]}),f&&(0,t.jsx)(Y.f,{children:"Choosing 0 means that action must be taken immediately or the SLA is breached. If you would like there to be no time limits associated with SLA breaches, please choose N/A."})]})},H={title:{fontSize:"16px",fontWeight:300,marginBottom:"5px",color:"gray",display:"flex",alignItems:"center",gap:1}},J=e=>{let{id:n,subtype:r,isEntity:o,close:u=()=>{},slas:c}=e,{user:m}=(0,q.f)(),p=(0,w.f)(),f=(0,O.f)("(max-width: 1200px)"),{control:h,handleSubmit:g,reset:b,register:y,errors:v,watch:S,setValue:I}=(0,R.G)({defaultValues:{status:"active"},context:{subtype:r},resolver:(0,C.yupResolver)(k)}),{loading:U}=(0,i.t)(s,{skip:!n,variables:{id:n},onCompleted:function(){let{sla:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sla:null};e&&b(e)}}),[_,{loading:$}]=(0,a.f)(l,{refetchQueries:["GetSla","GetSlas"],onCompleted:()=>{p.show({content:"SLA created successfully."}),u&&u()},onError:e=>{p.show({content:`Error:${e.message}`})}}),[A,{loading:N}]=(0,a.f)(d,{refetchQueries:["GetSla","GetSlas"],onCompleted:()=>{p.show({content:"SLA updated successfully."}),u&&u()},onError:e=>{p.show({content:`Error:${e.message}`})}}),Y=async e=>{let t=c.find(e=>{let{isDefault:t}=e;return t})??null;t&&A({variables:{id:t.id,changes:{...M(t,"reactive",m.adminId),isDefault:!1}}}),n?await A({variables:{id:n,changes:M(e,r,m.adminId)}}):await _({variables:{objects:[M(e,r,m.adminId)]}})};if(U||$||N)return(0,t.jsx)(x.f,{alignItems:"center",children:(0,t.jsx)(E.f,{color:"secondary"})});let G=(e,n,i,a)=>(0,t.jsx)(B,{name:e,nameUnit:n,label:i,tooltip:a,control:h,register:y,errors:v,setValue:I,watch:S});return"quote"===r?(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:g(Y),children:(0,t.jsxs)(x.f,{gap:3,children:[(0,t.jsxs)(F.f,{container:!0,alignItems:"flex-start",spacing:2,children:[(0,t.jsx)(F.f,{item:!0,xs:12,md:4,children:(0,t.jsx)(x.f,{spacing:2,children:(0,t.jsx)(T.f,{inputRef:y,name:"name",label:"Priority name",variant:"standard",color:"secondary",fullWidth:!0,error:!!v.name})})}),(0,t.jsx)(F.f,{item:!0,xs:12,md:8,children:(0,t.jsx)(x.f,{spacing:2,children:(0,t.jsx)(T.f,{inputRef:y,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0})})})]}),(0,t.jsx)(j.f,{variant:"h6",children:"Timings"}),G("quoteReturned","quoteReturnedUnit","Quote returned","This is the time by which the quote should have been completed and sent to the customer."),(0,t.jsx)(R.e,{name:"status",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(D.f,{value:n||"",onChange:i,options:L.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:g(Y),children:(0,t.jsxs)(x.f,{gap:3,children:[(0,t.jsxs)(F.f,{container:!0,alignItems:"flex-start",spacing:2,children:[(0,t.jsx)(F.f,{item:!0,xs:12,md:4,height:"100%",children:(0,t.jsx)(x.f,{children:(0,t.jsx)(T.f,{inputRef:y,name:"name",label:"Priority name",variant:"standard",color:"secondary",fullWidth:!0,error:!!v.name,InputLabelProps:{shrink:!0}})})}),(0,t.jsx)(F.f,{item:!0,xs:12,md:8,children:(0,t.jsx)(x.f,{spacing:2,children:(0,t.jsx)(T.f,{inputRef:y,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0,InputLabelProps:{shrink:!0}})})})]}),!o&&(0,t.jsx)(R.e,{control:h,name:"isDefault",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(W.f,{label:"Select as default SLA",sx:{userSelect:"none"},control:(0,t.jsx)(P.f,{checked:!!n,color:"secondary",onChange:e=>i(e.target?.checked)})})}}),(0,t.jsx)(j.f,{variant:"h6",children:"Timings"}),(0,t.jsxs)(x.f,{gap:f?3:1,direction:f?"column":"row",justifyContent:f?"flex-start":"space-between",children:[G("onSite","onSiteUnit","On site",Q),G("jobReport","jobReportUnit","Job report",V),G("completion","completionUnit","Completion",`This is the time by which the job should be completed,
              defined as the report having been sent & the job is currently not
              in progress or on hold.`)]}),(0,t.jsx)(R.e,{name:"status",control:h,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(D.f,{value:n||"",onChange:i,options:L.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})})};var z=e.i(706692);let K=e=>{let{subtype:r,id:o,slaEntityId:s,entity:l,entityId:d,close:p=()=>{}}=e,f=(0,w.f)(),h=(0,z.f)("(max-width: 1200px)"),{control:g,handleSubmit:b,reset:y,register:v,errors:S,watch:q,setValue:U}=(0,R.G)({defaultValues:{status:"active"},context:{subtype:r},resolver:(0,C.yupResolver)(N)}),{data:{sla:_}={sla:{}},loading:$}=(0,i.t)(u,{variables:{id:o,slaEntityId:s,hasEntity:!!s}});(0,n.useEffect)(()=>{s&&_.slaEntity?.[0]&&y(_.slaEntity[0])},[y,_,s]);let[A,{loading:k}]=(0,a.f)(c,{refetchQueries:["GetSlaEntity","GetSlas"],onCompleted:()=>{f.show({content:"SLA entity created successfully."}),p&&p()},onError:e=>{f.show({content:`Error:${e.message}`})}}),[M,{loading:W}]=(0,a.f)(m,{refetchQueries:["GetSlaEntity","GetSlas"],onCompleted:()=>{f.show({content:"SLA entity updated successfully."}),p&&p()},onError:e=>{f.show({content:`Error:${e.message}`})}}),F=async e=>{let t=((e,t)=>{if("quote"===t){let t=(0,I.r)(e.quoteReturned,e.quoteReturnedUnit);return{inUse:"active"===e.status,status:e.status,notes:e.notes,quoteReturned:t.time,quoteReturnedUnit:t.unit}}let n=(0,I.r)(e.onSite,e.onSiteUnit),i=(0,I.r)(e.jobReport,e.jobReportUnit),a=(0,I.r)(e.completion,e.completionUnit);return{inUse:"active"===e.status,status:e.status,notes:e.notes,normalRate:0,oohRate:0,premiumRate:0,onSite:n.time,onSiteUnit:n.unit,jobReport:i.time,jobReportUnit:i.unit,completion:a.time,completionUnit:a.unit}})(e,r);s?await M({variables:{id:s,changes:t}}):await A({variables:{objects:[{...t,slaId:o,entity:l,entityId:d}]}})};if($||k||W)return(0,t.jsx)(x.f,{alignItems:"center",children:(0,t.jsx)(E.f,{color:"secondary"})});let P=(e,n,i,a)=>(0,t.jsx)(B,{name:e,nameUnit:n,label:i,tooltip:a,control:g,register:v,errors:S,setValue:U,watch:q});return"quote"===r?(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:b(F),children:(0,t.jsxs)(x.f,{spacing:3,children:[(0,t.jsx)(j.f,{variant:"h5",children:`SLA: ${_.name}`}),(0,t.jsx)(T.f,{inputRef:v,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0}),(0,t.jsx)(j.f,{variant:"h6",children:"Timings"}),P("quoteReturned","quoteReturnedUnit","Quote returned","This is the time by which the quote should have been completed and sent to the customer."),(0,t.jsx)(R.e,{name:"status",control:g,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(D.f,{value:n||"",onChange:i,options:L.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:b(F),children:(0,t.jsxs)(x.f,{spacing:3,children:[(0,t.jsx)(j.f,{variant:"h5",children:`SLA: ${_.name}`}),(0,t.jsx)(T.f,{inputRef:v,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0}),(0,t.jsx)(j.f,{variant:"h6",children:"Timings"}),(0,t.jsxs)(x.f,{gap:h?3:1,direction:h?"column":"row",justifyContent:h?"flex-start":"space-between",children:[P("onSite","onSiteUnit","On site",Q),P("jobReport","jobReportUnit","Job report",V),P("completion","completionUnit","Completion",`This is the time by which the job should be completed,
              defined as the report having been sent & the job is currently not
              in progress or on hold.`)]}),(0,t.jsx)(R.e,{name:"status",control:g,render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(D.f,{value:n||"",onChange:i,options:L.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})})},X={item:"name",order:"asc"};e.s(["f",0,e=>{let{title:r,subtype:s,isEntity:l=!1,isLocation:d=!1,customerId:u,entity:R,entityId:C,tableHeight:U="calc(100% - 32px)",containerHeight:_="calc(100vh - 100px)"}=e,$=(0,w.f)(),A=(0,v.f)(),{hasRole:k}=(0,q.f)(),N=k("admin"),{initialData:M,ref:L}=(0,p.f)({filters:{},initialSort:X}),{data:{slas:E,meta:T}={slas:[],meta:{aggregate:{totalCount:0}}},loading:W,refetch:D}=(0,i.t)(o,{variables:{...M,subtype:s,isEntity:l,isLocation:d,customerId:u,entity:R,entityId:C}}),[F,{loading:P}]=(0,a.f)(c,{refetchQueries:["GetSlas"],onError:e=>{$.show({content:`Error:${e.message}`})}}),[O,{loading:Y}]=(0,a.f)(m,{refetchQueries:["GetSlas"],onError:e=>{$.show({content:`Error:${e.message}`})}}),B=(0,n.useCallback)((e,n)=>{n&&n.stopPropagation(),l&&R&&C?A.show({content:(0,t.jsx)(K,{subtype:s,id:e.id,slaEntityId:e.entity?.id,entity:R,entityId:C,close:A.close}),title:"Edit SLA & Priority level",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"}):A.show({content:(0,t.jsx)(J,{subtype:s,id:e.id,isEntity:l,close:A.close,slas:E}),title:"Edit SLA & Priority level",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"})},[R,C,l,A,s,E]),H=(0,n.useCallback)(e=>[{icon:"edit",onClick:t=>{t.stopPropagation(),B(e)},tooltip:"Edit"}],[B]),z=(0,n.useCallback)(async(e,t,n)=>{e.stopPropagation();let i=n.entity,a=(e=>{let{row:t,item:n,subtype:i,checked:a}=e;if("quote"===i){let e=(0,I.r)(n?.quoteReturnedUnit===I.F?null:n?.quoteReturned??t.quoteReturned,n?.quoteReturnedUnit||t.quoteReturnedUnit);return{inUse:a,status:a?"active":"inactive",notes:n?.notes||t.notes,quoteReturned:e.time,quoteReturnedUnit:e.unit}}let r=(0,I.r)(n?.onSiteUnit===I.F?null:n?.onSite??t.onSite,n?.onSiteUnit||t.onSiteUnit),o=(0,I.r)(n?.jobReportUnit===I.F?null:n?.jobReport??t.jobReport,n?.jobReportUnit||t.jobReportUnit),s=(0,I.r)(n?.completionUnit===I.F?null:n?.completion??t.completion,n?.completionUnit||t.completionUnit);return{inUse:a,status:a?"active":"inactive",notes:n?.notes||t.notes,normalRate:0,oohRate:0,premiumRate:0,onSite:r.time,onSiteUnit:r.unit,jobReport:o.time,jobReportUnit:o.unit,completion:s.time,completionUnit:s.unit}})({row:n,item:i,subtype:s,entity:R,entityId:C,checked:t});i?await O({variables:{id:i.id,changes:a}}):await F({variables:{objects:[{...a,slaId:n.id,entity:R,entityId:C}]}})},[F,R,C,s,O]),Z=(0,n.useCallback)(e=>{let{row:n}=e,i="boolean"!=typeof n.entity?.inUse||n.entity?.inUse,a=!!d&&!n.customerEntity?.[0]?.inUse;return(0,t.jsx)(b.f,{color:"secondary",disabled:a,checked:i,onChange:(e,t)=>z(e,t,n)})},[z,d]),ee=(0,n.useMemo)(()=>[{flex:1,field:"name",headerName:"Name"},{flex:1,headerName:"Is default SLA",field:"isDefault",valueFormatter:e=>e?"Yes":"No"},{flex:1,field:"inUse",headerName:"In use",renderCell:Z},{flex:1,field:"quoteReturned",headerName:"Quote returned",renderCell:e=>{let{row:t}=e;return(0,I.u)(t.quoteReturned,t.quoteReturnedUnit)}},{flex:1,minWidth:140,field:"onSite",headerName:"On site",sortable:!1,renderHeader:e=>{let{colDef:n}=e;return(0,t.jsxs)(x.f,{direction:"row",alignItems:"center",spacing:.5,children:[(0,t.jsx)(j.f,{fontWeight:"bold",children:n.headerName}),(0,t.jsx)(G.p,{title:Q,iconSx:{fontSize:16,color:"action.active"}})]})},renderCell:e=>{let{row:t}=e;return(0,I.u)(t.onSite,t.onSiteUnit)}},{flex:1,minWidth:140,field:"jobReport",headerName:"Job report",sortable:!1,renderHeader:e=>{let{colDef:n}=e;return(0,t.jsxs)(x.f,{direction:"row",alignItems:"center",spacing:.5,children:[(0,t.jsx)(j.f,{fontWeight:"bold",children:n.headerName}),(0,t.jsx)(G.p,{title:V,iconSx:{fontSize:16,color:"action.active"}})]})},renderCell:e=>{let{row:t}=e;return(0,I.u)(t.jobReport,t.jobReportUnit)}},{flex:1,field:"completion",headerName:"Completion",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,I.u)(t.completion,t.completionUnit)}},{flex:1,field:"status",headerName:"Status",sortable:!1},{flex:1,field:"notes",headerName:"Notes",sortable:!1},{width:80,field:"actions",headerName:"Actions",sortable:!1,renderCell:e=>{let{row:n}=e,i=!!d&&!n.customerEntity?.[0]?.inUse;return(0,t.jsx)(S.f,{disabled:i,row:n,actionsData:H})}}],[H,d,Z]),et=(0,n.useMemo)(()=>E.map(e=>{if(l&&e.entities?.[0]){let t=e.entities[0];return{id:e.id,name:e.name,quoteReturned:t.quoteReturned,quoteReturnedUnit:t.quoteReturnedUnit,onSite:t.onSite,onSiteUnit:t.onSiteUnit,jobReport:t.jobReport,jobReportUnit:t.jobReportUnit,completion:t.completion,completionUnit:t.completionUnit,status:t.status,notes:t.notes||"-",entity:t,customerEntity:e.customerSla,actions:""}}let t=e.customerSla?.[0],n=(0,I.H)(void 0,{time:t?.quoteReturned,unit:t?.quoteReturnedUnit},{time:e.quoteReturned,unit:e.quoteReturnedUnit}),i=(0,I.H)(void 0,{time:t?.onSite,unit:t?.onSiteUnit},{time:e.onSite,unit:e.onSiteUnit}),a=(0,I.H)(void 0,{time:t?.jobReport,unit:t?.jobReportUnit},{time:e.jobReport,unit:e.jobReportUnit}),r=(0,I.H)(void 0,{time:t?.completion,unit:t?.completionUnit},{time:e.completion,unit:e.completionUnit});return{id:e.id,name:e.name,quoteReturned:n.time,quoteReturnedUnit:n.unit,onSite:i.time,onSiteUnit:i.unit,jobReport:a.time,jobReportUnit:a.unit,completion:r.time,completionUnit:r.unit,status:t?.status||e.status,notes:t?.notes||e.notes||"-",entity:null,customerEntity:e.customerSla,actions:"",isDefault:e.isDefault}}),[l,E]);return(0,t.jsxs)(g.f,{sx:{paddingTop:"16px",paddingBottom:"16px",height:_},children:[d&&(0,t.jsx)(f.f,{color:"info",variant:"filled",sx:{ml:2,mr:2,mb:2},children:"In order to set up location SLAs, you must first add or confirm the appropriate customer SLA for that priority level."}),(0,t.jsxs)(x.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(j.f,{ml:2,variant:"h5",sx:{fontWeight:600},children:r}),!l&&(0,t.jsx)(h.f,{sx:{mr:2},variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),A.show({content:(0,t.jsx)(J,{subtype:s,close:A.close,slas:E}),title:"Create priority level & SLA",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"})},children:"Create SLA"})]}),(0,t.jsx)(y.f,{autoHeight:!1,loading:W||P||Y,ref:L,columns:ee,rows:et,meta:T,refetch:D,initialSort:X,containerHeight:U,columnVisibilityModel:{name:!0,isDefault:!l&&"reactive"===s,inUse:N&&l,quoteReturned:"quote"===s,onSite:"reactive"===s,jobReport:"reactive"===s,completion:"reactive"===s,status:l,notes:!0,actions:N}})]})}],765099)},320861,e=>{let t=["minutes","hours","days"],n=e=>e?"n/a"===e.unit?{time:null,unit:"n/a"}:null!=e.time||e.unit?{time:e.time??null,unit:e.unit??null}:null:null;e.s(["b",0,t,"F",0,"n/a","u",0,(e,t)=>"n/a"===t?"N/A":null!=e&&t?`${e} ${t}`:"-","p",0,e=>t.some(t=>t===e),"L",0,e=>"n/a"===e,"r",0,(e,t)=>"n/a"===t?{time:null,unit:"n/a"}:{time:e??null,unit:t??null},"H",0,(e,t,i)=>n(e)??n(t)??n(i)??{time:null,unit:null},"c",0,[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"},{label:"N/A",value:"n/a"}]])},920475,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e.r(421506)),r=e.r(391398);n.default=(0,a.default)((0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},834035,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e.r(421506)),r=e.r(391398);n.default=(0,a.default)((0,r.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"Notifications")},262999,e=>{var t=e.i(936641);e.s(["f",()=>t.f])}])})();