(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[60450,e=>{var t=e.i(391398),i=e.i(28980),a=e.i(631635);e.s(["f",0,e=>{let{label:n="Export",loading:o,onClick:s}=e;return(0,t.jsx)(a.f,{variant:"contained",color:"success",label:n,icon:(0,t.jsx)(i.default,{}),startIcon:(0,t.jsx)("img",{src:"/static/icons/csv.svg",alt:"",width:20,height:20}),loading:o,onClick:s})}])},338553,e=>{var t,i=e.i(391398),a=e.i(191788),n=e.i(203828),o=e.i(362537),s=e.i(472552),r=e.i(877341),l=e.i(432171),d=e.i(159080);let c=d.f`
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
`;var m=e.i(88152),u=e.i(115871),f=e.i(813843),g=e.i(773831),h=e.i(738251),p=e.i(683125),x=e.i(6837),b=e.i(587369),v=e.i(13558),M=e.i(411331),L=e.i(93198),y=e.i(60903),C=e.i(359786),w=e.i(889231),O=e.i(422411),R=e.i(280445),_=e.i(652148),S=e.i(755548),q=e.i(827010),j=e.i(824451),N=e.i(594301),I=e.i(413452);let A=e=>{let{filterForm:t,setFilterForm:n,filtersVisibilityModel:o={},open:s=!1,onClose:l,onTableStateChange:d}=e,{user:c}=(0,N.f)(),u=(0,b.f)("(max-width: 400px)"),[g,h]=(0,a.useState)(""),[p,x]=(0,a.useState)(""),{control:v,handleSubmit:M,register:L,reset:y,errors:C}=(0,O.G)({defaultValues:t}),w=(0,I.f)(o),[R,{loading:A,data:{items:D}={items:[]}}]=(0,r.f)(q.r,{variables:{q:""!==g?`%${g}%`:null,limit:50,offset:0}}),[k,{data:{items:E}={items:[]},loading:P}]=(0,r.f)(q.Q,{variables:{accountId:c.adminId,limit:50,offset:0,q:""!==p?`%${p}%`:null}}),W=()=>d(e=>({...e,currentPage:0}));return(0,i.jsx)($,{open:s,onClose:l,children:(0,i.jsx)(m.f,{sx:{minWidth:u?"300px":"400px",padding:"20px 40px"},children:(0,i.jsxs)("form",{onSubmit:M(e=>{n(e),W(),l()}),children:[(0,i.jsxs)(f.f,{gap:2,children:[(0,i.jsx)(_.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:L}),w("customer")&&(0,i.jsx)(O.e,{name:"customer",control:v,render:e=>{let{value:t,onChange:a}=e;return(0,i.jsx)(j.f,{limitTags:6,color:"secondary",value:t||null,onChange:(e,t)=>a(t),label:"Select customer",loading:A,onOpen:()=>R(),options:D,onSearchChange:h,variant:"standard",error:!!C.customer,helperText:C.customer?.message})}}),w("locationManager")&&(0,i.jsx)(O.e,{name:"locationManager",control:v,render:e=>{let{value:t,onChange:a}=e;return(0,i.jsx)(j.f,{value:t||null,onChange:(e,t)=>a(t),loading:P,onOpen:()=>k(),options:E,onSearchChange:x,color:"secondary",variant:"standard",label:"Select location manager"})}})]}),(0,i.jsxs)(f.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,i.jsx)(S.f,{variant:"contained",color:"danger",onClick:()=>void(n({}),y({}),W(),l()),children:"Cancel"}),(0,i.jsx)(S.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},$=(0,R.f)(p.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}));var D=e.i(128662),k=e.i(667986),E=e.i(65295),P=e.i(74633),W=e.i(122965),T=e.i(10945),J=e.i(21557),F=e.i(600744),G=e.i(444158),Y=e.i(300052),B=e.i(793391),V=e.i(60450),U=e.i(772937),H=e.i(284699),K=e.i(795617),Q=e.i(879436),X=((t=X||{}).Customer="{'Customer': {'name': 'ORDER'}}",t.LocationManager="{'Manager': {'fullName': 'ORDER'}}",t.TotalSpend12mNet="{'LocationListMetrics': {'total12mNet': 'ORDER'}}",t.TotalSpend12mGross="{'LocationListMetrics': {'total12mGross': 'ORDER'}}",t.NumberOfInvoices="{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}",t.InvoicesOutstanding="{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}",t);let z=["mainPhoto","name","address","bookingCount","{'Manager': {'fullName': 'ORDER'}}","totalSpent","createdAt"],Z=e=>null==e?"-":(0,Q.f)(e),ee=new Set(["{'LocationListMetrics': {'total12mNet': 'ORDER'}}","{'LocationListMetrics': {'total12mGross': 'ORDER'}}","{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}","{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}"]);e.s(["f",0,e=>{let{accountId:t,accountName:d,initialFilters:O,columnVisibilityModel:R={},tableContainerHeight:_}=e,{hasRole:S}=(0,N.f)(),q=S("admin"),j=q&&R?.totalSpent!==!1,[I,$]=(0,a.useState)(!1),X=(0,J.f)(),[et,ei]=(0,a.useState)(!1),[ea,en]=(0,a.useState)(!1),[eo,es]=(0,a.useState)(null),[er]=(0,a.useState)(()=>(0,o.default)().toISOString()),[el,ed]=(0,T.f)({key:"filter-form-locations"+(t?"-"+t:""),initialValue:{q:O.q??null},storageType:"sessionStorage"}),ec=null!=t,em=(0,a.useMemo)(()=>((e,t)=>{let{accountId:i}=t;return{accountId:i??e.customer?.value??null,managerId:e.locationManager?.value??null,q:e.q?`%${e.q}%`:null}})(el,{accountId:t}),[el,t]),{reference:eu,pagination:ef,order:eg}=(0,W.f)(),eh=(0,M.f)(),ep=(0,b.f)("(max-width: 400px)"),ex=(0,L.r)(),{data:{properties:eb,meta:ev}={properties:[],meta:{aggregate:{totalCount:0}}},loading:eM,refetch:eL}=(0,l.t)(c,{variables:{...em,...ef,now:er,orderBy:eg?.[0],withMetrics:I,withMetricMoney:j}}),[ey]=(0,r.f)(c,{fetchPolicy:"no-cache",variables:{accountId:em.accountId,managerId:em?.managerId,q:em.q,now:er,orderBy:eg?.[0]},onCompleted:e=>{try{let t=s.default.unparse(e_(e.properties),{escapeFormulae:/^[=+@\t\r]/}),i="data:application/octet-stream,"+encodeURIComponent(t);(0,y.f)(i,"locations.csv")}finally{en(!1)}},onError:()=>{en(!1),X.show({content:"Error exporting locations",severity:"error"})}}),eC=(0,a.useCallback)(e=>{e?.stopPropagation(),eh.show({content:(0,i.jsx)(C.f,{accountId:t,accountName:d,refetch:eL,close:eh.close}),title:"Create location",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw",query:{create:"true"},keepPrevQueryOnOpen:!0})},[eh,t,d,eL]),{open:ew}=(0,k.f)(e=>eC(e)),eO=e=>{let{row:t}=e;n.default.push(`/dashboard/properties/view?id=${t.data.id}&tab=details`)},eR=(0,a.useMemo)(()=>[{field:"mainPhoto",headerName:"Main photo",minWidth:120,sortable:!1,renderCell:e=>{let{row:t}=e;return t.mainPhoto?(0,i.jsx)(x.f,{file:t.mainPhoto.filename,loading:"lazy",onClick:e=>{e.stopPropagation(),es(t.mainPhoto?.filename??null)},sx:{width:"70px",height:"50px"},alt:"mainPhoto"}):null}},{headerName:"Name",field:"name",minWidth:370,flex:1},{headerName:"Address",field:"address",minWidth:300,flex:1,sortable:!1},{headerName:"Customer",field:"{'Customer': {'name': 'ORDER'}}",sortable:!0,flex:1,minWidth:ep?100:130,renderCell:e=>{let{row:{customer:t,customerId:a}}=e;return(0,i.jsx)(w.f,{color:"secondary",href:`/dashboard/customers/view?id=${a}`,children:t})}},{headerName:"Work Orders",field:"bookingCount",sortable:!0,minWidth:ep?100:130,renderCell:e=>{let{row:{workOrders:t}}=e;return(0,i.jsx)(h.f,{sx:{marginLeft:"3em"},children:t})},flex:1},{minWidth:180,flex:1,field:"{'Manager': {'fullName': 'ORDER'}}",sortable:!0,headerName:"Location Manager",renderCell:e=>{let{row:t}=e;return(0,i.jsx)(w.f,{noWrap:!t.managerId,color:"secondary",href:`/dashboard/users/view?id=${t.managerId}`,children:t.manager})}},{headerName:"Total Spent",field:"totalSpent",sortable:!0,minWidth:140,renderCell:e=>{let{row:{totalSpent:t}}=e;return t},flex:1},{field:"createdAt",headerName:"Created At",minWidth:ep?200:130,flex:1,sortable:!0},{headerName:"Invoice address",field:"invoiceAddress",minWidth:200,flex:1,sortable:!1},{headerName:"Number of quotes",field:"numberOfQuotes",minWidth:130,flex:1,sortable:!1},{headerName:"Next job date",field:"nextJobDate",minWidth:130,flex:1,sortable:!1},{headerName:"Last job date",field:"lastJobDate",minWidth:130,flex:1,sortable:!1},{headerName:"Permits required",field:"permitsRequired",minWidth:130,flex:1,sortable:!0},{headerName:"Total spend ex-VAT (12M)",field:"{'LocationListMetrics': {'total12mNet': 'ORDER'}}",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalSpend12mNet}},{headerName:"Total spend inc-VAT (12M)",field:"{'LocationListMetrics': {'total12mGross': 'ORDER'}}",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalSpend12mGross}},{headerName:"Number of invoices",field:"{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}",minWidth:140,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.numberOfInvoices}},{headerName:"Total invoices outstanding",field:"{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}",minWidth:170,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.invoicesOutstanding}},{field:"actions",headerName:"Actions",sortable:!1,minWidth:80,renderCell:e=>{let{row:t}=e;return(0,i.jsx)(g.f,{sx:{marginLeft:"1em"},onClick:()=>eO({row:t}),children:(0,i.jsx)(v.default,{})})},flex:1}],[ep]),e_=e=>e.map(e=>{let t=e?.addresses[0]?.address;return{name:e.name||"Not Specified",customer:e.customer?.name,address:t?`${t.addressLine1} - ${t.postCode}`:"",bookings:e.bookingCount,totalSpent:(0,Q.f)(e.totalSpent??0),createdAt:(0,E.f)(e.createdAt)}}),eS=(0,a.useCallback)(()=>eb.map(e=>({id:e.id,data:e,name:e.name||"Not Specified",address:e.addresses[0]?.address?`
            ${e.addresses[0]?.address.addressLine1} -
            ${e.addresses[0]?.address.postCode}`:"Please Add",mainPhoto:e.mainPhoto?.[0]?.item??null,customer:e.customer?.name,customerId:e.customer?.id,managerId:e.manager?.id,manager:e.manager?.fullName,workOrders:e.bookingCount,totalSpent:(0,Q.f)(e.totalSpent??0),createdAt:(0,E.f)(e.createdAt),status:e.status,invoiceAddress:(0,K.H)((0,K.w)({addresses:e.invoiceAddresses},"invoice")?.address),numberOfQuotes:e.quotesAggregate?.aggregate?.count??0,nextJobDate:e.nextJob?.aggregate?.min?.timingStart?(0,o.default)(e.nextJob.aggregate.min.timingStart).format("YYYY-MM-DD"):"-",lastJobDate:e.lastJob?.aggregate?.max?.timingStart?(0,o.default)(e.lastJob.aggregate.max.timingStart).format("YYYY-MM-DD"):"-",permitsRequired:null==e.permitsRequired?"-":e.permitsRequired?"Yes":"No",totalSpend12mNet:Z(e.listMetrics?.total12mNet),totalSpend12mGross:Z(e.listMetrics?.total12mGross),numberOfInvoices:"number"==typeof e.listMetrics?.numberOfInvoices?e.listMetrics.numberOfInvoices:"-",invoicesOutstanding:Z(e.listMetrics?.invoicesOutstanding),actions:""})),[eb]),eq=(0,a.useMemo)(()=>!eb.length&&em?.q?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No locations",subtitleFirstLine:"You currently have no locations set up in the system",subtitleSecondLine:"Click create location to get started building.",buttonText:"Create location",onAction:ew},[ew,em?.q,eb]),ej=(0,a.useMemo)(()=>eb.map(e=>e.id),[eb]),{defaultFields:eN,hiddenFields:eI}=(0,a.useMemo)(()=>{let e={"{'Customer': {'name': 'ORDER'}}":R?.customer!==!1,totalSpent:R?.totalSpent!==!1,"{'LocationListMetrics': {'total12mNet': 'ORDER'}}":j,"{'LocationListMetrics': {'total12mGross': 'ORDER'}}":j,"{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}":q,"{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}":j};return{defaultFields:z.filter(t=>!1!==e[t]),hiddenFields:new Set(Object.keys(e).filter(t=>!e[t]))}},[R,q,j]),{gridColumns:eA,visibleFields:e$,modalProps:eD,buttonProps:ek}=(0,H.f)({stateKey:ec?"locations-customer":"locations",columns:eR,defaultFields:eN,hiddenFields:eI,customFields:{dataOwner:"location",rowIds:ej,skip:!S("admin")}}),eE=e$.some(e=>ee.has(e));return(0,a.useEffect)(()=>$(eE),[eE]),(0,i.jsxs)(i.Fragment,{children:[et&&(0,i.jsx)(A,{...eu,open:et,filterForm:el,setFilterForm:ed,filtersVisibilityModel:{customer:!ec,locationManager:ec},onClose:()=>ei(!1)}),(0,i.jsx)(U.f,{...eD}),(0,i.jsxs)(f.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,i.jsxs)(G.f,{children:[(0,i.jsxs)(f.f,{direction:"row",spacing:2,children:[(0,i.jsx)(Y.f,{onClick:()=>ei(!0)}),(0,i.jsx)(F.f,{...ek})]}),(0,i.jsxs)(f.f,{direction:"row",spacing:2,children:[S("admin")&&(0,i.jsx)(B.f,{label:"Create Location",onClick:ew}),!ex&&(0,i.jsx)(V.f,{loading:ea,onClick:e=>{e.stopPropagation(),en(!0),ey()}})]})]}),(0,i.jsxs)(m.f,{sx:{padding:"16px 0px",..._?{height:_}:{flex:1,minHeight:0}},children:[(0,i.jsx)(u.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Locations"}),(eb?.length||eM)&&(0,i.jsx)(P.s,{...eu,loading:eM,columns:eA,rows:eS(),totalCount:ev?.aggregate?.totalCount,stateKey:ec?"locations-customer":"locations",autoHeight:!1,containerHeight:"calc(100% - 52px)",onRowClick:eO}),!eb?.length&&!eM&&(0,i.jsx)(D.f,{imageSrc:"/static/icons/no_locations_found.svg",...eq})]})]}),eo&&(0,i.jsx)(p.f,{open:!!eo,onClose:()=>es(null),sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:(0,i.jsx)(x.f,{file:eo,sx:{width:"500px",height:"500px"},alt:"mainPhoto"})})]})}],338553)},384033,e=>{var t=e.i(391398),i=e.i(338553),a=e.i(498681),n=e.i(594301),o=e.i(293965);let s={accountId:null,q:null,filterType:"locations_table"},r=()=>{let{hasUserModule:e}=(0,a.f)(),{hasRole:o}=(0,n.f)(),r=o("customer_user"),l=o("admin_user"),d=e("finances");return(0,t.jsx)(i.f,{initialFilters:s,columnVisibilityModel:{totalSpent:!r&&!l||d}})};r.getLayout=function(e){return(0,t.jsxs)(o.f,{children:[e," "]})},e.s(["default",0,r])}],349510,(e,t,i)=>{let a="/dashboard/properties";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(384033)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);