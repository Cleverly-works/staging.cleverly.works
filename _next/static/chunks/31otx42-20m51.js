(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[218659,e=>{var t=e.i(391398),r=e.i(280445),i=e.i(115871),n=e.i(813843),a=e.i(755548),o=e.i(587369);let s=(0,r.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:r,sx:d={},imageSx:c={},title:l,titleSx:u={},subtitleFirstLine:p,subtitleFirstLineSx:h={},subtitleSecondLine:f,subtitleSecondLineSx:m={},buttonText:g,onAction:y}=e,v=(0,o.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...d,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(s,{src:r,sx:{...c,width:v?"250px":"300px"}}),(0,t.jsx)(i.f,{typography:"h5",sx:{...u},children:l}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(i.f,{sx:{...h},children:p}),(0,t.jsx)(i.f,{sx:{...m},children:f})]}),g&&y&&(0,t.jsx)(a.f,{variant:"contained",color:"secondary",onClick:y,children:g})]})}])},842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,r=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),i=e=>{let t=e?.address||e;return t&&r(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,r,"Q",0,i],964919);let n=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},a=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let r=n(t[0]),i=n(t[1]);return null==i||null==r||i<-90||i>90||r<-180||r>180?null:{lat:i,lng:r}},o=e=>a(e?.geo),s=async e=>{let t=i(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var r=await e.json();if(!r)return null;let i=r.coordinates?.lat??r.lat;return o({geo:{coordinates:[r.coordinates?.lng??r.lng,i]}})}catch{return null}},d=async(e,t)=>{let r=o(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[],a=o({geo:{coordinates:[i,n]}});return a||s(e)};e.s(["g",0,a,"Z",0,o,"t",0,d,"l",0,(e,t)=>{let r=o(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[];return o({geo:{coordinates:[i,n]}})},"a",0,n],842088)},128662,e=>{var t=e.i(391398),r=e.i(691567),i=e.i(280445),n=e.i(115871),a=e.i(813843),o=e.i(755548),s=e.i(587369);let d=(0,i.f)("img")({width:"300px",height:"250px"}),c={},l={},u={},p={},h={},f=e=>{let{imageSrc:r,sx:i=c,imageSx:f=l,title:m="",titleSx:g=u,subtitleFirstLine:y="",subtitleFirstLineSx:v=p,subtitleSecondLine:_="",subtitleSecondLineSx:b=h,buttonText:S,onAction:x=null}=e,$=(0,s.f)("(max-width: 400px)");return(0,t.jsxs)(a.f,{sx:{...i,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(d,{src:r,sx:{...f,width:$?"250px":"300px"}}),(0,t.jsx)(n.f,{typography:"h5",sx:{...g},children:m}),(0,t.jsxs)(a.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(n.f,{sx:{...v},children:y}),(0,t.jsx)(n.f,{sx:{...b},children:_})]}),S&&x&&(0,t.jsx)(o.f,{variant:"contained",color:"secondary",onClick:x,children:S})]})};f.propTypes={imageSrc:r.string,title:r.string,subtitleFirstLine:r.string,subtitleSecondLine:r.string,onAction:r.func,sx:r.object,imageSx:r.object,titleSx:r.object,subtitleFirstLineSx:r.object,subtitleSecondLineSx:r.object},e.s(["f",0,f])},995197,e=>{var t=e.i(391398),r=e.i(280445),i=e.i(738251);let n={},a={},o=(0,r.f)(i.f)(()=>({"& .MuiTabs-root":{}}));e.s(["f",0,e=>{let{children:r,value:s,index:d,boxProps:c=n,boxSx:l=a,...u}=e;return(0,t.jsx)(o,{role:"tabpanel",hidden:s!==d,id:`simple-tabpanel-${d}`,"aria-labelledby":`simple-tab-${d}`,...u,children:s===d&&(0,t.jsx)(i.f,{...c,sx:{padding:"25px 0",...l},children:r})})}])},890854,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(203828),n=e.i(691567),a=e.i(920235),o=e.i(738251),s=e.i(813843),d=e.i(115871),c=e.i(529292),l=e.i(280445),u=e.i(449587),p=e.i(317536),h=e.i(974261),f=e.i(332789),m=e.i(340569),g=e.i(749231),y=e.i(845825),v=e.i(587369);let _=()=>{},b=e=>{let{currentPage:r=1,totalCount:i=0,pageSize:n=50,onPageChange:a=_}=e,o=(0,v.f)("(max-width:400px)"),s=(0,v.f)("(max-width:500px)");return(0,t.jsx)(S,{mb:2,page:r,count:Math.ceil(i/n),onChange:(e,t)=>a(t),variant:"outlined",shape:"rounded",size:o?"small":"medium",hidePrevButton:1===r,hideNextButton:r===Math.ceil(i/n),siblingCount:+!s,renderItem:e=>(0,t.jsx)(y.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})};b.propTypes={currentPage:n.default.number,totalCount:n.default.number,pageSize:n.default.number,onPageChange:n.default.func};let S=(0,l.f)(g.f)(e=>{let{hidePrevButton:t,hideNextButton:r,theme:i}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px"},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:i.palette.white.main,backgroundColor:i.palette.secondary.main,...r?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}});var x=e.i(544005);let $={columns:[],history:!1,loading:!1,rows:[],noResultsMessage:"There are no results.",autoHeight:!0},j=(0,r.forwardRef)((e,n)=>{let a=(0,x.f)(e,$),{columns:o,history:c,initialSort:l,meta:g,refetch:y,paginationSize:v,containerHeight:_,containerMaxHeight:S,noResultsMessage:j,autoHeight:I,stateKey:k,onColumnOrderChange:C,onColumnWidthChange:M,slotProps:L}=a,q=(0,i.useRouter)(),{query:O={}}=q,{apiRef:E,displayColumns:P,persistColumnOrder:D,persistColumnWidth:G}=(0,f.f)({stateKey:k,columns:o});(0,m.f)(E,!a.disableColumnReorder);let H=(0,r.useMemo)(()=>({...L,baseTooltip:{disableTouchListener:!0,...L?.baseTooltip}}),[L]),B=(0,r.useCallback)((e,t,r)=>{C?.(e,t,r),D()},[C,D]),F=(0,r.useCallback)((e,t,r)=>{M?.(e,t,r),G(e)},[M,G]),[R,T]=(0,r.useState)(parseInt(O?.page,10)||1),[z,N]=(0,r.useState)(v||h.r.paginationSize),U=l;U||(U={item:"createdAt",order:"desc"});let[W,V]=(0,r.useState)({item:U.item,order:U.order}),J=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,{query:t={}}=q;if(e>1?t.page=e:delete t.page,!(Object.keys(t).length>0))return{};{let r=Object.keys(t).map(r=>"page"===r?`${r}=${e}`:`${r}=${t[r]}`).join("&");return`?${r}`}};return(0,r.useImperativeHandle)(n,()=>({currentPage:R,pageSize:z,sort:W,resetPagination(){let e;V({item:U.item,order:U.order}),T(1),e=J(),q.push(e),N(v||h.r.paginationSize)}})),(0,t.jsxs)(A,{containerHeight:_,containerMaxHeight:S,children:[(0,t.jsx)(w,{hideFooter:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:I,sortingMode:"server",onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?V({item:o.find(e=>{let{field:r}=e;return r===t.field}).sortName||t.field||t.item||U.item,order:t.sort||t.order||U.order}):V({item:U.item,order:U.order}),y&&y()},pageSize:z,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(u.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(p.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(s.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(u.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(p.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:j})}),noRowsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:j})})},...a,apiRef:E,slotProps:H,columns:P,onColumnOrderChange:B,onColumnWidthChange:F}),g&&Math.ceil(g.aggregate.totalCount/z)>1&&(0,t.jsx)(b,{currentPage:R,totalCount:g.aggregate.totalCount,pageSize:z,onPageChange:e=>{let t=J(e);c&&q.push(t),T(e),!c&&y&&y()}})]})});j.propTypes={history:n.default.bool,initialSort:n.default.object,loading:n.default.bool,meta:n.default.object,refetch:n.default.func,paginationSize:n.default.number,noResultsMessage:n.default.string,columns:n.default.array,rows:n.default.array,autoHeight:n.default.bool};let A=(0,l.f)(o.f)(e=>{let{containerHeight:t,containerMaxHeight:r}=e;return{height:t,maxHeight:r,display:"flex",flexDirection:"column"}}),w=(0,l.f)(a.f)(e=>{let{theme:t,hideHeader:r,rows:i,loading:n,rowHeight:a,isPdf:o}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",...o&&{"@media print":{display:"block"}}},"& .MuiDataGrid-main":{...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-columnHeaders":{...r&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...r&&{marginTop:"0 !important"},...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-iconSeparator":{opacity:0},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-virtualScrollerContent":{...o&&{height:"initial !important",minHeight:"initial !important"}},"& .MuiDataGrid-virtualScrollerRenderZone":{...o&&{position:"relative"}},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-row > .MuiDataGrid-cell":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-columnHeaderCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row > .MuiDataGrid-cellCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,c._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,c._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,c._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,c._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["f",0,j],890854)},98762,e=>{var t=e.i(191788),r=e.i(949125),i=e.i(974261),n=e.i(491230);e.s(["f",0,e=>{let{filters:a,newFilters:o,initialSort:s}=e,d=(0,t.useRef)(void 0),[c,l]=(0,t.useState)({}),[u,p]=(0,t.useState)({}),h=s||{item:"createdAt",order:"desc"},f={[d.current?.sort.item||h.item]:h.inneritem?{[h.inneritem]:d.current?.sort.order||h.order}:d.current?.sort.order||h.order};return(0,t.useEffect)(()=>{let e=!(0,r.default)(c,a),t=!(0,r.default)(u,o);if(e&&(l(a),d?.current?.resetPagination()),t&&(p(o),d?.current?.resetPagination()),d?.current?.setSort&&!(e||t)){let e=d.current?.sort?.item&&d.current?.sort?.order?{item:d.current?.sort?.item,order:d.current?.sort?.order}:f;d.current.setSort(e)}},[a,o]),{initialData:{...a,newFilters:o?.length>0?o:void 0,limit:d.current?.pageSize==="Infinity"?null:parseInt(d.current?.pageSize,10)||i.r.paginationSize,offset:(d.current?.currentPage-1||0)*(d.current?.pageSize||i.r.paginationSize),orderBy:(0,n.f)(d.current?.sort?.item?.replace(/ORDER/i,d.current?.sort.order))||f},initialSort:s,ref:d}}])},60903,e=>{e.s(["f",0,(e,t)=>{let r=document.createElement("a");"string"==typeof r.download?(document.body.appendChild(r),r.download=t,r.href=e,r.click(),document.body.removeChild(r)):location.replace(e)}])},795617,e=>{var t=e.i(990071),r=e.i(842088);let i=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:r,type:i="inline",hideinvoicingEntity:n=!1}=e;if(!t)return"";let a="",o=r?.name?` (${r.name})`:"";return"stacked"===i?(a+=!n&&t.invoicingEntity?t.invoicingEntity+"\n":"",a+=t.addressLine1?t.addressLine1+o+"\n":o,a+=t.addressLine2?t.addressLine2+"\n":"",a+=t.addressLine3?t.addressLine3+"\n":"",a+=t.city?t.city+"\n":"",a+=t.county?t.county+"\n":""):(a+=!n&&t.invoicingEntity?t.invoicingEntity+" ":"",a+=t.addressLine1?t.addressLine1+o+" ":o,a+=t.addressLine2?t.addressLine2+" ":"",a+=t.addressLine3?t.addressLine3+" ":"",a+=t.city?t.city+" ":"",a+=t.county?t.county+" ":""),(a+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,i,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let r=null;switch(e){case"Account":r=t.A;break;case"Location":r=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!r)throw Error("Query cannot be null");return r},"u",0,(e,t)=>{let r=null;return"customer"===t?r=i(e.location,"invoice")||i(e.customer,"invoice")||i(e.location,"registered"):"supplier"===t&&(r=i(e.supplier,"invoice")||i(e.supplier,"registered")),r},"D",0,e=>{let t=(0,r.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let r=t.f`
  fragment AddressFields on Address {
    id
    invoicingEntity
    name
    addressLine1
    addressLine2
    addressLine3
    postCode
    city
    county
    geo
    createdAt
    meta
  }
`,i=t.f`
  fragment AddressEntityFields on Address_Entity {
    id
    entity
    entityId
    status
    registered
    operating
    trading
    invoice
    createdAt
  }
`,n=t.f`
  query GetAddresses($id: Int!) {
    item: Account_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Account" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
    }
  }
  ${r}
  ${i}
`,a=t.f`
  query GetAddresses($id: Int!) {
    item: Location_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
      accounts: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          addresses: Addresses(where: { entity: { _eq: "Account" } }) {
            ...AddressEntityFields
            address: Address {
              ...AddressFields
            }
          }
        }
      }
    }
  }
  ${r}
  ${i}
`,o=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${r}
`,s=t.f`
  mutation UpdateAddress($id: Int!, $changes: Address_set_input!) {
    update_Address_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,d=t.f`
  mutation AddUpdateAddress_Entity(
    $objects: [Address_Entity_insert_input!]!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    insert_Address_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,c=t.f`
  mutation UpdateAddress_Entities(
    $id: Int!
    $changes: Address_Entity_set_input!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    updateNew: update_Address_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["S",0,i,"a",0,r,"g",0,o,"H",0,d,"A",0,n,"R",0,a,"h",0,s,"I",0,c])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=r.currencySymbol??"£",i="number"==typeof e?e.toFixed(2):String(e);return`${t}${i}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let r=t.options.find(t=>t.value===e);return r?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let r=t.options.find(t=>t.value===e);return r?.label??e}).join(", ");default:return String(e)}}])},996706,e=>{var t=e.i(159080);let r=t.f`
  fragment ServiceScheduleFields on ServiceSchedule {
    id
    name
    status
    entity
    entityId
    userId
    serviceId
    minimumDuration
    minimumIncrement
    includeTravelTime
    normal
    ooh
    premium
    oohTimes
    premiumTimes
    days
    adminId
    createdAt
    updatedAt
  }
`,i=t.f`
  query GetServiceSchedule($serviceScheduleId: Int!) {
    serviceSchedule: ServiceSchedule_by_pk(id: $serviceScheduleId) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        location: Location {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
    }
  }

  ${r}
`,n=t.f`
  query GetServiceSchedules(
    $q: String
    $status: service_schedule_status
    $entity: service_schedule_entity!
    $entityId: Int
    $offset: Int = 0
    $limit: Int = 50
    $order: [ServiceSchedule_order_by!]
    $engineerFilter: ServiceSchedule_bool_exp = {}
  ) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        status: { _eq: $status }
        _and: [
          $engineerFilter
          { _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }] }
        ]
      }
      offset: $offset
      limit: $limit
      order_by: $order
    ) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
      user: User {
        id
        fullName
      }
    }
    meta: ServiceSchedule_aggregate(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        status: { _eq: $status }
        _and: [
          $engineerFilter
          { _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }] }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${r}
`,a=t.f`
  query GetServiceScheduleForEntity($serviceScheduleId: Int!, $includeParent: Boolean!) {
    serviceSchedule: ServiceSchedule_by_pk(id: $serviceScheduleId) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        location: Location {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
      user: User {
        id
        fullName
      }
      parent: ParentServiceSchedule @include(if: $includeParent) {
        postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
          id
          postcode: PostcodeArea {
            id
            area
            name
          }
        }
      }
    }
  }

  ${r}
`,o=t.f`
  query GetServiceSchedulesForEntity(
    $q: String
    $status: service_schedule_status
    $entity: service_schedule_entity!
    $childEntityId: Int
    $childEntity: service_schedule_entity!
    $offset: Int = 0
    $limit: Int = 50
    $order: [ServiceSchedule_order_by!]
    $includeLocations: Boolean! = false
  ) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: $entity }
        status: { _eq: $status }
        _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }]
      }
      offset: $offset
      limit: $limit
      order_by: $order
    ) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }

      service: Service {
        id
        name
      }
      childSchedules: ServiceSchedules(
        where: { entity: { _eq: $childEntity }, entityId: { _eq: $childEntityId } }
      ) {
        ...ServiceScheduleFields
        locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } })
          @include(if: $includeLocations) {
          id
          location: Location {
            id
            name
          }
        }
      }
    }
    meta: ServiceSchedule_aggregate(
      where: {
        entity: { _eq: $entity }
        status: { _eq: $status }
        _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${r}
`,s=t.f`
  query HasDefaultSupplierSchedule($entityId: Int!, $serviceId: Int!, $excludeIds: [Int!] = []) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: "Supplier" }
        entityId: { _eq: $entityId }
        serviceId: { _eq: $serviceId }
        userId: { _is_null: true }
        status: { _eq: "active" }
        id: { _nin: $excludeIds }
      }
      limit: 1
    ) {
      id
    }
  }
`,d=t.f`
  query ActiveEngineerSupplierSchedules($entityId: Int!, $serviceId: Int!) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: "Supplier" }
        entityId: { _eq: $entityId }
        serviceId: { _eq: $serviceId }
        userId: { _is_null: false }
        status: { _eq: "active" }
      }
    ) {
      id
      user: User {
        id
        fullName
      }
    }
  }
`,c=t.f`
  query GetLocationCustomerReferences(
    $locationId: Int!
    $customerId: Int!
    $q: String = "%"
    $limit: Int = 50
  ) {
    references: JobSchedule(
      limit: $limit
      where: {
        locationId: { _eq: $locationId }
        customerId: { _eq: $customerId }
        reference: { _is_null: false, _neq: "", _ilike: $q }
      }
      distinct_on: reference
      order_by: { reference: asc }
    ) {
      reference
    }
  }
`;e.s(["c",0,d,"f",0,c,"O",0,i,"n",0,n,"y",0,o,"k",0,a,"i",0,s])},28980,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"}),"DownloadRounded")},953116,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2m4 1H4V5h2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4z"}),"StorageRounded")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}],625106,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,r)=>{var i=e.r(933571),n=e.r(729549),a=e.r(630357);function o(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new i;++t<r;)this.add(e[t])}o.prototype.add=o.prototype.push=n,o.prototype.has=a,t.exports=o},278166,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length,n=0,a=[];++r<i;){var o=e[r];t(o,r,e)&&(a[n++]=o)}return a}},576723,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=t.length,n=e.length;++r<i;)e[n+r]=t[r];return e}},297560,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}},538916,(e,t,r)=>{var i=e.r(576723),n=e.r(448684);t.exports=function(e,t,r){var a=t(e);return n(e)?a:i(a,r(e))}},190835,(e,t,r)=>{var i=e.r(858056),n=e.r(432836);t.exports=function e(t,r,a,o,s){return t===r||(null!=t&&null!=r&&(n(t)||n(r))?i(t,r,a,o,e,s):t!=t&&r!=r)}},858056,(e,t,r)=>{var i=e.r(698620),n=e.r(536712),a=e.r(317744),o=e.r(804191),s=e.r(268829),d=e.r(448684),c=e.r(613272),l=e.r(75299),u="[object Arguments]",p="[object Array]",h="[object Object]",f=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,m,g,y){var v=d(e),_=d(t),b=v?p:s(e),S=_?p:s(t);b=b==u?h:b,S=S==u?h:S;var x=b==h,$=S==h,j=b==S;if(j&&c(e)){if(!c(t))return!1;v=!0,x=!1}if(j&&!x)return y||(y=new i),v||l(e)?n(e,t,r,m,g,y):a(e,t,b,r,m,g,y);if(!(1&r)){var A=x&&f.call(e,"__wrapped__"),w=$&&f.call(t,"__wrapped__");if(A||w){var I=A?e.value():e,k=w?t.value():t;return y||(y=new i),g(I,k,r,m,y)}}return!!j&&(y||(y=new i),o(e,t,r,m,g,y))}},758629,(e,t,r)=>{var i=e.r(734274),n=e.r(517059),a=Object.prototype.hasOwnProperty;t.exports=function(e){if(!i(e))return n(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},33483,(e,t,r)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,r)=>{var i=e.r(650119),n=e.r(297560),a=e.r(33483);t.exports=function(e,t,r,o,s,d){var c=1&r,l=e.length,u=t.length;if(l!=u&&!(c&&u>l))return!1;var p=d.get(e),h=d.get(t);if(p&&h)return p==t&&h==e;var f=-1,m=!0,g=2&r?new i:void 0;for(d.set(e,t),d.set(t,e);++f<l;){var y=e[f],v=t[f];if(o)var _=c?o(v,y,f,t,e,d):o(y,v,f,e,t,d);if(void 0!==_){if(_)continue;m=!1;break}if(g){if(!n(t,function(e,t){if(!a(g,t)&&(y===e||s(y,e,r,o,d)))return g.push(t)})){m=!1;break}}else if(!(y===v||s(y,v,r,o,d))){m=!1;break}}return d.delete(e),d.delete(t),m}},317744,(e,t,r)=>{var i=e.r(889239),n=e.r(84742),a=e.r(198373),o=e.r(536712),s=e.r(692152),d=e.r(231853),c=i?i.prototype:void 0,l=c?c.valueOf:void 0;t.exports=function(e,t,r,i,c,u,p){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!u(new n(e),new n(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var h=s;case"[object Set]":var f=1&i;if(h||(h=d),e.size!=t.size&&!f)break;var m=p.get(e);if(m)return m==t;i|=2,p.set(e,t);var g=o(h(e),h(t),i,c,u,p);return p.delete(e),g;case"[object Symbol]":if(l)return l.call(e)==l.call(t)}return!1}},804191,(e,t,r)=>{var i=e.r(577256),n=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,a,o,s){var d=1&r,c=i(e),l=c.length;if(l!=i(t).length&&!d)return!1;for(var u=l;u--;){var p=c[u];if(!(d?p in t:n.call(t,p)))return!1}var h=s.get(e),f=s.get(t);if(h&&f)return h==t&&f==e;var m=!0;s.set(e,t),s.set(t,e);for(var g=d;++u<l;){var y=e[p=c[u]],v=t[p];if(a)var _=d?a(v,y,p,t,e,s):a(y,v,p,e,t,s);if(!(void 0===_?y===v||o(y,v,r,a,s):_)){m=!1;break}g||(g="constructor"==p)}if(m&&!g){var b=e.constructor,S=t.constructor;b!=S&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof S&&S instanceof S)&&(m=!1)}return s.delete(e),s.delete(t),m}},577256,(e,t,r)=>{var i=e.r(538916),n=e.r(40811),a=e.r(622335);t.exports=function(e){return i(e,a,n)}},40811,(e,t,r)=>{var i=e.r(856408),n=e.r(1107),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;t.exports=o?function(e){return null==e?[]:i(o(e=Object(e)),function(t){return a.call(e,t)})}:n},268829,(e,t,r)=>{var i=e.r(625106),n=e.r(696138),a=e.r(441298),o=e.r(340682),s=e.r(278166),d=e.r(912904),c=e.r(742186),l="[object Map]",u="[object Promise]",p="[object Set]",h="[object WeakMap]",f="[object DataView]",m=c(i),g=c(n),y=c(a),v=c(o),_=c(s),b=d;(i&&b(new i(new ArrayBuffer(1)))!=f||n&&b(new n)!=l||a&&b(a.resolve())!=u||o&&b(new o)!=p||s&&b(new s)!=h)&&(b=function(e){var t=d(e),r="[object Object]"==t?e.constructor:void 0,i=r?c(r):"";if(i)switch(i){case m:return f;case g:return l;case y:return u;case v:return p;case _:return h}return t}),t.exports=b},692152,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,i){r[++t]=[i,e]}),r}},517059,(e,t,r)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,r)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},949125,(e,t,r)=>{var i=e.r(190835);t.exports=function(e,t){return i(e,t)}},622335,(e,t,r)=>{var i=e.r(419188),n=e.r(758629),a=e.r(379858);t.exports=function(e){return a(e)?i(e):n(e)}},1107,(e,t,r)=>{t.exports=function(){return[]}}]);