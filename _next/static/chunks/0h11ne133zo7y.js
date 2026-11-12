(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60450,e=>{var t=e.i(391398),a=e.i(28980),n=e.i(631635);e.s(["f",0,e=>{let{label:r="Export",loading:i,onClick:o}=e;return(0,t.jsx)(n.f,{variant:"contained",color:"success",label:r,icon:(0,t.jsx)(a.default,{}),startIcon:(0,t.jsx)("img",{src:"/static/icons/csv.svg",alt:"",width:20,height:20}),loading:i,onClick:o})}])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},338553,e=>{var t,a=e.i(391398),n=e.i(191788),r=e.i(203828),i=e.i(362537),o=e.i(472552),s=e.i(877341),l=e.i(432171),d=e.i(159080);let c=d.f`
  query GetLocations(
    $withMetrics: Boolean = false
    $withMetricMoney: Boolean = false
    $accountId: Int
    $managerId: Int
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: Location_order_by!
    $now: timestamptz
  ) {
    properties: Location(
      limit: $limit
      offset: $offset
      order_by: [$orderBy]
      where: {
        managerId: { _eq: $managerId }
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
        _or: [
          { name: { _ilike: $q } }
          { Addresses: { Address: { city: { _ilike: $q } }, entity: { _eq: "Location" } } }
          { Addresses: { Address: { postCode: { _ilike: $q } }, entity: { _eq: "Location" } } }
        ]
      }
    ) {
      id
      access
      bookingCount
      totalSpent
      customer: Customer {
        id
        name
      }
      contactUserId
      createdAt
      name
      status
      permitsRequired
      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {
        id
        status
        address: Address {
          id
          name
          addressLine1
          postCode
        }
      }
      invoiceAddresses: Addresses(where: { entity: { _eq: "Location" }, invoice: { _eq: true } }) {
        id
        invoice
        address: Address {
          id
          name
          addressLine1
        }
      }
      quotesAggregate: Jobs_aggregate(where: { type: { _eq: "quote" } }) {
        aggregate {
          count
        }
      }
      nextJob: Jobs_aggregate(
        where: {
          type: { _in: ["reactive", "ppm"] }
          status: { _neq: "canceled" }
          timingStart: { _gte: $now }
        }
      ) {
        aggregate {
          min {
            timingStart
          }
        }
      }
      lastJob: Jobs_aggregate(
        where: {
          type: { _in: ["reactive", "ppm"] }
          status: { _neq: "canceled" }
          timingStart: { _lt: $now }
        }
      ) {
        aggregate {
          max {
            timingStart
          }
        }
      }
      listMetrics: LocationListMetrics @include(if: $withMetrics) {
        total12mNet @include(if: $withMetricMoney)
        total12mGross @include(if: $withMetricMoney)
        numberOfInvoices
        invoicesOutstanding @include(if: $withMetricMoney)
      }
      manager: Manager {
        id
        fullName
      }
      user: User {
        id
        fullName
      }
      mainPhoto: Media(where: { Medium: { category: { _eq: "locationMainPhoto" } } }) {
        id
        item: Medium {
          filename
        }
      }
    }
    meta: Location_aggregate(
      where: {
        managerId: { _eq: $managerId }
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
        _or: [
          { name: { _ilike: $q } }
          { Addresses: { Address: { city: { _ilike: $q } }, entity: { _eq: "Location" } } }
          { Addresses: { Address: { postCode: { _ilike: $q } }, entity: { _eq: "Location" } } }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var u=e.i(88152),m=e.i(115871),f=e.i(813843),h=e.i(773831),g=e.i(738251),p=e.i(683125),x=e.i(6837),v=e.i(587369),b=e.i(13558),y=e.i(411331),C=e.i(93198),j=e.i(60903),w=e.i(359786),I=e.i(889231),q=e.i(422411),L=e.i(280445),S=e.i(652148),_=e.i(755548),M=e.i(827010),A=e.i(824451),O=e.i(594301),R=e.i(413452);let N=e=>{let{filterForm:t,setFilterForm:r,filtersVisibilityModel:i={},open:o=!1,onClose:l,onTableStateChange:d}=e,{user:c}=(0,O.f)(),m=(0,v.f)("(max-width: 400px)"),[h,g]=(0,n.useState)(""),[p,x]=(0,n.useState)(""),{control:b,handleSubmit:y,register:C,reset:j,errors:w}=(0,q.G)({defaultValues:t}),I=(0,R.f)(i),[L,{loading:N,data:{items:$}={items:[]}}]=(0,s.f)(M.r,{variables:{q:""!==h?`%${h}%`:null,limit:50,offset:0}}),[P,{data:{items:W}={items:[]},loading:D}]=(0,s.f)(M.Q,{variables:{accountId:c.adminId,limit:50,offset:0,q:""!==p?`%${p}%`:null}}),E=()=>d(e=>({...e,currentPage:0}));return(0,a.jsx)(k,{open:o,onClose:l,children:(0,a.jsx)(u.f,{sx:{minWidth:m?"300px":"400px",padding:"20px 40px"},children:(0,a.jsxs)("form",{onSubmit:y(e=>{r(e),E(),l()}),children:[(0,a.jsxs)(f.f,{gap:2,children:[(0,a.jsx)(S.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:C}),I("customer")&&(0,a.jsx)(q.e,{name:"customer",control:b,render:e=>{let{value:t,onChange:n}=e;return(0,a.jsx)(A.f,{limitTags:6,color:"secondary",value:t||null,onChange:(e,t)=>n(t),label:"Select customer",loading:N,onOpen:()=>L(),options:$,onSearchChange:g,variant:"standard",error:!!w.customer,helperText:w.customer?.message})}}),I("locationManager")&&(0,a.jsx)(q.e,{name:"locationManager",control:b,render:e=>{let{value:t,onChange:n}=e;return(0,a.jsx)(A.f,{value:t||null,onChange:(e,t)=>n(t),loading:D,onOpen:()=>P(),options:W,onSearchChange:x,color:"secondary",variant:"standard",label:"Select location manager"})}})]}),(0,a.jsxs)(f.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,a.jsx)(_.f,{variant:"contained",color:"danger",onClick:()=>void(r({}),j({}),E(),l()),children:"Cancel"}),(0,a.jsx)(_.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},k=(0,L.f)(p.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}));var $=e.i(128662),P=e.i(667986),W=e.i(65295),D=e.i(74633),E=e.i(122965),T=e.i(10945),U=e.i(21557),F=e.i(600744),G=e.i(444158),J=e.i(300052),B=e.i(793391),V=e.i(60450),Y=e.i(772937),z=e.i(284699),H=e.i(795617),K=e.i(879436),Q=((t=Q||{}).Customer="{'Customer': {'name': 'ORDER'}}",t.LocationManager="{'Manager': {'fullName': 'ORDER'}}",t.TotalSpend12mNet="{'LocationListMetrics': {'total12mNet': 'ORDER'}}",t.TotalSpend12mGross="{'LocationListMetrics': {'total12mGross': 'ORDER'}}",t.NumberOfInvoices="{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}",t.InvoicesOutstanding="{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}",t);let X=["mainPhoto","name","address","bookingCount","{'Manager': {'fullName': 'ORDER'}}","totalSpent","createdAt"],Z=e=>null==e?"-":(0,K.f)(e),ee=new Set(["{'LocationListMetrics': {'total12mNet': 'ORDER'}}","{'LocationListMetrics': {'total12mGross': 'ORDER'}}","{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}","{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}"]);e.s(["f",0,e=>{let{accountId:t,accountName:d,initialFilters:q,columnVisibilityModel:L={},tableContainerHeight:S}=e,{hasRole:_}=(0,O.f)(),M=_("admin"),A=M&&L?.totalSpent!==!1,[R,k]=(0,n.useState)(!1),Q=(0,U.f)(),[et,ea]=(0,n.useState)(!1),[en,er]=(0,n.useState)(!1),[ei,eo]=(0,n.useState)(null),[es]=(0,n.useState)(()=>(0,i.default)().toISOString()),[el,ed]=(0,T.f)({key:"filter-form-locations"+(t?"-"+t:""),initialValue:{q:q.q??null},storageType:"sessionStorage"}),ec=null!=t,eu=(0,n.useMemo)(()=>((e,t)=>{let{accountId:a}=t;return{accountId:a??e.customer?.value??null,managerId:e.locationManager?.value??null,q:e.q?`%${e.q}%`:null}})(el,{accountId:t}),[el,t]),{reference:em,pagination:ef,order:eh}=(0,E.f)(),eg=(0,y.f)(),ep=(0,v.f)("(max-width: 400px)"),ex=(0,C.r)(),{data:{properties:ev,meta:eb}={properties:[],meta:{aggregate:{totalCount:0}}},loading:ey,refetch:eC}=(0,l.t)(c,{variables:{...eu,...ef,now:es,orderBy:eh?.[0],withMetrics:R,withMetricMoney:A}}),[ej]=(0,s.f)(c,{fetchPolicy:"no-cache",variables:{accountId:eu.accountId,managerId:eu?.managerId,q:eu.q,now:es,orderBy:eh?.[0]},onCompleted:e=>{try{let t=o.default.unparse(eS(e.properties),{escapeFormulae:/^[=+@\t\r]/}),a="data:application/octet-stream,"+encodeURIComponent(t);(0,j.f)(a,"locations.csv")}finally{er(!1)}},onError:()=>{er(!1),Q.show({content:"Error exporting locations",severity:"error"})}}),ew=(0,n.useCallback)(e=>{e?.stopPropagation(),eg.show({content:(0,a.jsx)(w.f,{accountId:t,accountName:d,refetch:eC,close:eg.close}),title:"Create location",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw",query:{create:"true"},keepPrevQueryOnOpen:!0})},[eg,t,d,eC]),{open:eI}=(0,P.f)(e=>ew(e)),eq=e=>{let{row:t}=e;r.default.push(`/dashboard/properties/view?id=${t.data.id}&tab=details`)},eL=(0,n.useMemo)(()=>[{field:"mainPhoto",headerName:"Main photo",minWidth:120,sortable:!1,renderCell:e=>{let{row:t}=e;return t.mainPhoto?(0,a.jsx)(x.f,{file:t.mainPhoto.filename,loading:"lazy",onClick:e=>{e.stopPropagation(),eo(t.mainPhoto?.filename??null)},sx:{width:"70px",height:"50px"},alt:"mainPhoto"}):null}},{headerName:"Name",field:"name",minWidth:370,flex:1},{headerName:"Address",field:"address",minWidth:300,flex:1,sortable:!1},{headerName:"Customer",field:"{'Customer': {'name': 'ORDER'}}",sortable:!0,flex:1,minWidth:ep?100:130,renderCell:e=>{let{row:{customer:t,customerId:n}}=e;return(0,a.jsx)(I.f,{color:"secondary",href:`/dashboard/customers/view?id=${n}`,children:t})}},{headerName:"Work Orders",field:"bookingCount",sortable:!0,minWidth:ep?100:130,renderCell:e=>{let{row:{workOrders:t}}=e;return(0,a.jsx)(g.f,{sx:{marginLeft:"3em"},children:t})},flex:1},{minWidth:180,flex:1,field:"{'Manager': {'fullName': 'ORDER'}}",sortable:!0,headerName:"Location Manager",renderCell:e=>{let{row:t}=e;return(0,a.jsx)(I.f,{noWrap:!t.managerId,color:"secondary",href:`/dashboard/users/view?id=${t.managerId}`,children:t.manager})}},{headerName:"Total Spent",field:"totalSpent",sortable:!0,minWidth:140,renderCell:e=>{let{row:{totalSpent:t}}=e;return t},flex:1},{field:"createdAt",headerName:"Created At",minWidth:ep?200:130,flex:1,sortable:!0},{headerName:"Invoice address",field:"invoiceAddress",minWidth:200,flex:1,sortable:!1},{headerName:"Number of quotes",field:"numberOfQuotes",minWidth:130,flex:1,sortable:!1},{headerName:"Next job date",field:"nextJobDate",minWidth:130,flex:1,sortable:!1},{headerName:"Last job date",field:"lastJobDate",minWidth:130,flex:1,sortable:!1},{headerName:"Permits required",field:"permitsRequired",minWidth:130,flex:1,sortable:!0},{headerName:"Total spend ex-VAT (12M)",field:"{'LocationListMetrics': {'total12mNet': 'ORDER'}}",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalSpend12mNet}},{headerName:"Total spend inc-VAT (12M)",field:"{'LocationListMetrics': {'total12mGross': 'ORDER'}}",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalSpend12mGross}},{headerName:"Number of invoices",field:"{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}",minWidth:140,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.numberOfInvoices}},{headerName:"Total invoices outstanding",field:"{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}",minWidth:170,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.invoicesOutstanding}},{field:"actions",headerName:"Actions",sortable:!1,minWidth:80,renderCell:e=>{let{row:t}=e;return(0,a.jsx)(h.f,{sx:{marginLeft:"1em"},onClick:()=>eq({row:t}),children:(0,a.jsx)(b.default,{})})},flex:1}],[ep]),eS=e=>e.map(e=>{let t=e?.addresses[0]?.address;return{name:e.name||"Not Specified",customer:e.customer?.name,address:t?`${t.addressLine1} - ${t.postCode}`:"",bookings:e.bookingCount,totalSpent:(0,K.f)(e.totalSpent??0),createdAt:(0,W.f)(e.createdAt)}}),e_=(0,n.useCallback)(()=>ev.map(e=>({id:e.id,data:e,name:e.name||"Not Specified",address:e.addresses[0]?.address?`
            ${e.addresses[0]?.address.addressLine1} -
            ${e.addresses[0]?.address.postCode}`:"Please Add",mainPhoto:e.mainPhoto?.[0]?.item??null,customer:e.customer?.name,customerId:e.customer?.id,managerId:e.manager?.id,manager:e.manager?.fullName,workOrders:e.bookingCount,totalSpent:(0,K.f)(e.totalSpent??0),createdAt:(0,W.f)(e.createdAt),status:e.status,invoiceAddress:(0,H.H)((0,H.w)({addresses:e.invoiceAddresses},"invoice")?.address),numberOfQuotes:e.quotesAggregate?.aggregate?.count??0,nextJobDate:e.nextJob?.aggregate?.min?.timingStart?(0,i.default)(e.nextJob.aggregate.min.timingStart).format("YYYY-MM-DD"):"-",lastJobDate:e.lastJob?.aggregate?.max?.timingStart?(0,i.default)(e.lastJob.aggregate.max.timingStart).format("YYYY-MM-DD"):"-",permitsRequired:null==e.permitsRequired?"-":e.permitsRequired?"Yes":"No",totalSpend12mNet:Z(e.listMetrics?.total12mNet),totalSpend12mGross:Z(e.listMetrics?.total12mGross),numberOfInvoices:"number"==typeof e.listMetrics?.numberOfInvoices?e.listMetrics.numberOfInvoices:"-",invoicesOutstanding:Z(e.listMetrics?.invoicesOutstanding),actions:""})),[ev]),eM=(0,n.useMemo)(()=>!ev.length&&eu?.q?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No locations",subtitleFirstLine:"You currently have no locations set up in the system",subtitleSecondLine:"Click create location to get started building.",buttonText:"Create location",onAction:eI},[eI,eu?.q,ev]),eA=(0,n.useMemo)(()=>ev.map(e=>e.id),[ev]),{defaultFields:eO,hiddenFields:eR}=(0,n.useMemo)(()=>{let e={"{'Customer': {'name': 'ORDER'}}":L?.customer!==!1,totalSpent:L?.totalSpent!==!1,"{'LocationListMetrics': {'total12mNet': 'ORDER'}}":A,"{'LocationListMetrics': {'total12mGross': 'ORDER'}}":A,"{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}":M,"{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}":A};return{defaultFields:X.filter(t=>!1!==e[t]),hiddenFields:new Set(Object.keys(e).filter(t=>!e[t]))}},[L,M,A]),{gridColumns:eN,visibleFields:ek,modalProps:e$,buttonProps:eP}=(0,z.f)({stateKey:ec?"locations-customer":"locations",columns:eL,defaultFields:eO,hiddenFields:eR,customFields:{dataOwner:"location",rowIds:eA,skip:!_("admin")}}),eW=ek.some(e=>ee.has(e));return(0,n.useEffect)(()=>k(eW),[eW]),(0,a.jsxs)(a.Fragment,{children:[et&&(0,a.jsx)(N,{...em,open:et,filterForm:el,setFilterForm:ed,filtersVisibilityModel:{customer:!ec,locationManager:ec},onClose:()=>ea(!1)}),(0,a.jsx)(Y.f,{...e$}),(0,a.jsxs)(f.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,a.jsxs)(G.f,{children:[(0,a.jsxs)(f.f,{direction:"row",spacing:2,children:[(0,a.jsx)(J.f,{onClick:()=>ea(!0)}),(0,a.jsx)(F.f,{...eP})]}),(0,a.jsxs)(f.f,{direction:"row",spacing:2,children:[_("admin")&&(0,a.jsx)(B.f,{label:"Create Location",onClick:eI}),!ex&&(0,a.jsx)(V.f,{loading:en,onClick:e=>{e.stopPropagation(),er(!0),ej()}})]})]}),(0,a.jsxs)(u.f,{sx:{padding:"16px 0px",...S?{height:S}:{flex:1,minHeight:0}},children:[(0,a.jsx)(m.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Locations"}),(ev?.length||ey)&&(0,a.jsx)(D.s,{...em,loading:ey,columns:eN,rows:e_(),totalCount:eb?.aggregate?.totalCount,stateKey:ec?"locations-customer":"locations",autoHeight:!1,containerHeight:"calc(100% - 52px)",onRowClick:eq}),!ev?.length&&!ey&&(0,a.jsx)($.f,{imageSrc:"/static/icons/no_locations_found.svg",...eM})]})]}),ei&&(0,a.jsx)(p.f,{open:!!ei,onClose:()=>eo(null),sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:(0,a.jsx)(x.f,{file:ei,sx:{width:"500px",height:"500px"},alt:"mainPhoto"})})]})}],338553)},359786,e=>{var t=e.i(391398),a=e.i(191788),n=e.i(877341),r=e.i(432171),i=e.i(422411),o=e.i(424894),s=e.i(799083),l=e.i(322135),d=e.i(720676),c=e.i(152078),u=e.i(13558),m=e.i(631328),f=e.i(813843),h=e.i(827010),g=e.i(824451),p=e.i(115871);let x=e=>{let{propertyOwner:r,canSelectAccount:o,control:s,errors:l,setValue:d}=e,[c,u]=(0,a.useState)(""),[x,b]=(0,a.useState)(""),y=(0,m.y)(r);(0,a.useEffect)(()=>{r?.value!==y?.value&&y&&d("contactUser",null)},[y,r,d]);let[C,{loading:j,data:{items:w}={items:[]}}]=(0,n.f)(h.r,{variables:{limit:50,q:""!==c?`%${c}%`:null}}),[I,{loading:q,data:{items:L}={items:[]}}]=(0,n.f)(h.Q,{variables:{limit:50,accountId:r?.value||null,q:""!==x?`%${x}%`:null}});return(0,t.jsxs)(f.f,{direction:"row",spacing:2,children:[(0,t.jsxs)(f.f,{mb:2,width:"50%",children:[(0,t.jsx)(p.f,{sx:v.title,children:"Client"}),(0,t.jsx)(i.e,{defaultValue:null,name:"propertyOwner",control:s,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(g.f,{value:a,fullWidth:!0,disabled:!o,onChange:(e,t)=>n(t),onSearchChange:u,loading:j,onOpen:()=>C(),options:w,variant:"standard",color:"secondary",placeholder:"Client",error:!!l.propertyOwner,helperText:l.propertyOwner?.message})}})]}),(0,t.jsxs)(f.f,{mb:2,width:"50%",children:[(0,t.jsx)(p.f,{sx:v.title,children:"Contact Name"}),(0,t.jsx)(i.e,{defaultValue:null,name:"contactUser",control:s,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(g.f,{fullWidth:!0,value:a,disabled:!r,onChange:(e,t)=>n(t),onSearchChange:b,loading:q,onOpen:()=>I(),options:L,variant:"standard",color:"secondary",placeholder:"Contact Name",error:!!l.contactUser,helperText:l.contactUser?.message})}})]})]})},v={title:{fontSize:"18px",marginBottom:"10px",fontWeight:300,color:"gray"}},b=e=>{if(!e||0===e.length)return{primaryCustomer:null,relatedPartyCustomers:[]};let t=e.findIndex(e=>"primary"===e.linkType),a=t>=0?t:0;return{primaryCustomer:e[a]??null,relatedPartyCustomers:e.filter((e,t)=>t!==a)}};var y=e.i(426778);let C=(0,y.t)({value:(0,y.H)().required(),label:(0,y.x)().required()}),j=(0,y.t)().shape({access:(0,y.x)().required(),contactUser:C.required(),manager:C.required(),name:(0,y.x)().required(),propertyOwner:C.required(),status:(0,y.x)().when(["$isAdmin"],(e,t)=>{let[a]=e;return a?t.required():t}),permitsRequired:(0,y.g)(),users:(0,y.k)().of((0,y.H)().required()).ensure()});var w=e.i(411331),I=e.i(594301),q=e.i(159080);let L=q.f`
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
`,S=q.f`
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
`;q.f`
  mutation UpdateAccount($id: Int!, $changes: Account_set_input) {
    update_Account_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,q.f`
  query GetAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      id
      meta
    }
  }
`;let _=q.f`
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
`;var M=e.i(207646),A=e.i(410355),O=e.i(652148),R=e.i(936641),N=e.i(280445),k=e.i(122989),$=e.i(74633),P=e.i(851123),W=e.i(148310),D=e.i(755548),E=e.i(800884);let T=e=>{let{existingAccountIds:r,onSave:i,onCancel:o}=e,[s,l]=(0,a.useState)(""),[d,c]=(0,a.useState)(null),[u,{loading:m,data:{items:p}={items:[]}}]=(0,n.f)(h.r,{variables:{limit:50,q:""!==s?`%${s}%`:null}}),x=(0,a.useMemo)(()=>p.filter(e=>!r.includes(e.value)),[p,r]);return(0,t.jsxs)(f.f,{spacing:3,sx:{minWidth:320,pt:1},children:[(0,t.jsx)(g.f,{value:d,onChange:(e,t)=>c(t),onOpen:()=>u(),onSearchChange:l,loading:m,options:x,label:"Customer company",variant:"standard",color:"secondary"}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,justifyContent:"flex-end",children:[(0,t.jsx)(D.f,{variant:"contained",color:"danger",onClick:o,children:"Cancel"}),(0,t.jsx)(D.f,{variant:"contained",color:"secondary",disabled:!d,onClick:()=>d&&i(d),children:"Save"})]})]})},U=e=>{let{value:n,onChange:r,excludeAccountIds:i=[]}=e,o=(0,w.f)(),s=n.length>=2,l=(0,a.useMemo)(()=>n.map(e=>e.value).concat(i),[n,i]),d=(0,a.useCallback)(()=>{o.show({title:"Add related party",submit:!1,content:(0,t.jsx)(T,{existingAccountIds:l,onCancel:()=>o.close(),onSave:e=>{r([...n,e]),o.close()}})})},[l,o,r,n]),c=(0,a.useCallback)(e=>{r(n.filter(t=>t.value!==e))},[r,n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:1,children:[(0,t.jsx)(p.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Related party"}),(0,t.jsx)(D.f,{size:"small",color:"secondary",variant:"contained",startIcon:(0,t.jsx)(W.default,{}),onClick:d,disabled:s,sx:{minWidth:"auto"},children:"Add"})]}),n.length>0&&(0,t.jsx)(f.f,{direction:"row",flexWrap:"wrap",gap:1,children:n.map(e=>(0,t.jsx)(E.f,{label:e.label,onDelete:()=>c(e.value),color:"secondary",variant:"outlined"},e.value))}),s&&(0,t.jsxs)(p.f,{sx:{fontSize:13,color:"gray",mt:1,ml:1},children:["*Maximum of ",2," related parties"]})]})};var F=e.i(511667),G=e.i(21557),J=e.i(920475),B=e.i(684779),V=e.i(974266);let Y=(0,N.f)(e=>{let{className:a,...n}=e;return(0,t.jsx)(l.f,{...n,classes:{popper:a}})})(e=>{let{theme:t}=e;return{[`& .${d.f.tooltip}`]:{backgroundColor:t?.palette.dark.main,boxShadow:t?.shadows[1],fontSize:13}}});e.s(["f",0,e=>{let{accountId:l,accountName:d,locationId:m,refetch:h,onSubmit:v,close:y}=e,C=(0,w.f)(),q=(0,G.f)(),{user:N,hasRole:W}=(0,I.f)(),[D,E]=(0,a.useState)(null),[T,z]=(0,a.useState)(""),H=(0,a.useRef)(null),K=W("admin"),{control:Q,errors:X,handleSubmit:Z,setValue:ee,watch:et,reset:ea}=(0,i.G)({defaultValues:{...d&&l&&{propertyOwner:{label:d,value:l}}},resolver:(0,o.yupResolver)(j),context:{isAdmin:K}}),{data:{property:en}={property:null}}=(0,r.t)(L,{skip:!m,variables:{id:m},onCompleted:e=>{let{property:t}=e,{primaryCustomer:a}=b(t?.accountLocations??[]);ea({...(e=>{let{property:t,customer:a}=e,n=t?.status==="active"||t?.status==="inactive"?t.status:void 0;return{...t?.access&&{access:t?.access},...t?.contactUser&&{contactUser:{value:t?.contactUser?.id,label:t?.contactUser?.fullName}},...t?.manager&&{manager:{value:t?.manager?.id,label:t?.manager?.fullName}},...t?.name&&{name:t?.name},...a&&{propertyOwner:{value:a?.id,label:a?.name}},...n&&{status:n},...t?.permitsRequired&&{permitsRequired:t?.permitsRequired}}})({property:t,customer:a?.account})})}}),er=et("users")??[],ei=et("propertyOwner"),[eo,es]=(0,a.useState)([]);(0,a.useEffect)(()=>{if(!en)return;let{relatedPartyCustomers:e}=b(en.accountLocations??[]);es(e.map(e=>({value:e.accountId,label:e.account?.name??""})))},[en]);let{data:{jobs:el}={jobs:[]}}=(0,r.t)(S,{variables:{propertyId:m},skip:!m}),[ed,{isLoading:ec}]=(0,F.f)("/location/create",{queryKey:"location-create",method:"POST",onError:e=>{q.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{v?.(e),q.show({content:"Location was created"}),h?.(),y?.()}}),[eu,{isLoading:em}]=(0,F.f)("/location/update",{queryKey:"location-update",method:"PUT",onError:e=>{q.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{v?.(e),q.show({content:"Location was created"}),h?.(),y?.()}}),ef=(0,a.useCallback)(async()=>new Promise((e,a)=>{C.show({title:"Add new address",content:(0,t.jsx)(A.f,{onSubmit:async t=>{e(t),y?.()}}),onClose:()=>a(),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw"})}),[y,C]),[eh,{loading:eg,data:{items:ep}={items:[]}}]=(0,n.f)(P.P,{variables:{limit:50,accountId:N.adminId,q:""!==T?`%${T}%`:null}}),ex=async e=>{E(null);let t=e.users??[],a=ei?.value,n=t.filter(e=>eb.find(t=>t.id===e)?.account?.id===a),r=eo.map(e=>({accountId:e.value,userAccountIds:t.filter(t=>eb.find(e=>e.id===t)?.account?.id===e.value)}));if(m){if("inactive"===e.status&&el.length>0)return void E("This location cannot be made inactive, it has active jobs.");let t=(e=>{let{locationId:t,propertyForm:a,primaryUserAccountIds:n,relatedParties:r}=e;return{locationId:t,access:a.access,primaryUserAccountIds:n,relatedParties:r??[],name:a.name,status:a.status??"active",permitsRequired:!!a.permitsRequired,contactUserId:a.contactUser.value,managerId:a.manager.value,accountId:a.propertyOwner.value}})({locationId:m,propertyForm:e,primaryUserAccountIds:n,relatedParties:r});await eu({body:t})}else{H.current||(H.current=await ef());let t=(e=>{let{propertyForm:t,addressForm:a,primaryUserAccountIds:n,relatedParties:r}=e;return{access:t.access,primaryUserAccountIds:n,relatedParties:r??[],name:t.name,status:t.status??"active",permitsRequired:!!t.permitsRequired,contactUserId:t.contactUser.value,managerId:t.manager.value,accountId:t.propertyOwner.value,address:{name:a.name,addressLine2:a.addressLine2,addressLine3:a.addressLine3,county:a.county,addressLine1:a.addressLine1,city:a.city,postCode:a.postCode,countryId:a.countryId}}})({propertyForm:e,addressForm:H.current,primaryUserAccountIds:n,relatedParties:r});await ed({body:t})}},ev=[...ei?.value?[ei.value]:[],...eo.map(e=>e.value)],{data:{users:eb}={users:[]},loading:ey}=(0,r.t)(_,{variables:{accountIds:ev,role:"user"},skip:!Array.isArray(ev)||ev.length<0||!K,onCompleted:e=>{let{users:t}=e;ee("users",(t?.map?.(e=>({id:e.id,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[]}))||[]).filter(e=>m&&e.locations.includes(m)).map(e=>e?.id)||[])}}),eC=[{sortable:!1,flex:1,field:"account",headerName:"Company name",minWidth:160,renderCell:e=>{let{row:t}=e;return t.account.name}},{sortable:!1,flex:1,field:"fullName",headerName:"Name",minWidth:160},{sortable:!1,flex:1,field:"email",headerName:"Email address",minWidth:260},{sortable:!1,flex:1,field:"contact",headerName:"Contact user",minWidth:160,renderCell:e=>{let{row:a}=e;if(a.isContact)return(0,t.jsx)(f.f,{direction:"row",width:"100%",alignItems:"center",justifyContent:"flex-start",children:(0,t.jsx)(J.default,{color:"error"})})}},{sortable:!1,flex:1,field:"phone",minWidth:160,headerName:"Phone"},{sortable:!1,flex:1,field:"position",minWidth:160,headerName:"Position"},{sortable:!1,flex:1,width:15,field:"role",minWidth:160,headerName:"Role"}],ej=(0,a.useMemo)(()=>eb.map(e=>({...e.user,id:e.id,position:e.position,isContact:e?.isContact,role:e?.role,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[],account:e.account})),[eb]);return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:Z(ex),children:[(0,t.jsx)(B.f,{sx:{zIndex:1e5},open:ec||em,children:(0,t.jsx)(V.f,{color:"secondary"})}),!!D&&(0,t.jsx)(R.f,{variant:"filled",severity:"info",color:"info",sx:{marginBottom:2},children:D}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(x,{control:Q,errors:X,propertyOwner:ei,canSelectAccount:!l,setValue:ee})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(i.e,{defaultValue:null,name:"manager",control:Q,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(g.f,{value:a,onChange:(e,t)=>n(t),label:"Select manager",loading:eg,onOpen:()=>eh(),onSearchChange:z,options:ep,error:!!X?.manager,helperText:X?.manager?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(i.e,{defaultValue:null,name:"name",control:Q,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(O.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",value:a,onChange:n,error:!!X.name,helperText:X.name?.message,InputLabelProps:{shrink:!!a}})}})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(i.e,{defaultValue:null,name:"access",control:Q,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(O.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",placeholder:"Access information",sx:{"& .MuiFilledInput-root":{paddingTop:1}},value:a,onChange:n,error:!!X.access,helperText:X.access?.message})}})}),K&&(0,t.jsx)(f.f,{mb:2,children:(0,t.jsx)(i.e,{name:"status",control:Q,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(k.f,{value:a||"",onChange:n,options:M.f,label:"Status",fullWidth:!0,error:!!X.status,helperText:X.status?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsxs)(f.f,{children:[(0,t.jsx)(i.e,{name:"permitsRequired",control:Q,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(c.f,{control:(0,t.jsx)(s.f,{color:"secondary",checked:a||!1,onChange:e=>n(e.target.checked)}),label:"Permits required"})}}),(0,t.jsx)(R.f,{severity:"info",sx:{marginY:1,backgroundColor:"rgba(30, 136, 229, 0.1)","& .MuiAlert-icon":{color:"secondary.main"},"& .MuiAlert-message":{color:"secondary.main"}},children:"Please indicate whether permits are required for this site. This can then be used to prompt reminders to upload permits for work orders at this site."})]}),K&&(0,t.jsx)(f.f,{mt:3,children:(0,t.jsx)(U,{value:eo,onChange:es,excludeAccountIds:ei?.value?[ei?.value]:void 0})}),K&&eb.length>0&&(0,t.jsxs)(f.f,{mb:2,mt:2,children:[(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",mb:1,children:[(0,t.jsx)(p.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Customer users"}),(0,t.jsx)(Y,{title:"Please select the users you would like to link to this site by checking\n                the box beside their name. This will then allow you to assign work\n                orders to them for this site.",children:(0,t.jsx)(u.default,{sx:{fontSize:22,marginLeft:1,color:"gray"}})})]}),(0,t.jsx)($.s,{columns:eC,loading:ey,rows:ej,checkboxSelection:!0,rowSelectionModel:er,onRowSelectionModelChange:e=>{ee("users",e)},sx:{"& .MuiCheckbox-root":{"&.Mui-checked":{color:"secondary.main"}}}}),(0,t.jsx)(i.e,{name:"users",control:Q,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{value:a,onChange:n,type:"hidden"})}})]})]})}],359786)},920475,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e.r(421506)),i=e.r(391398);a.default=(0,r.default)((0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")}])})();