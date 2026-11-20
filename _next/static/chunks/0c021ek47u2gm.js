(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[824451,e=>{var t=e.i(391398),r=e.i(800884),i=e.i(76381),n=e.i(515523),s=e.i(652148),a=e.i(191788);e.s(["f",0,e=>{let{color:o,variant:d,label:l,placeholder:u,error:c,helperText:p,size:g,loading:h,onSearchChange:m,onAddNew:f,textFieldProps:y={},disableClearable:x,onChange:b,onInputChange:v,...A}=e,[_,C]=(0,a.useState)(""),j=(0,a.useRef)("input");return(0,a.useEffect)(()=>{if(!m)return;if("reset"===j.current||"clear"===j.current)return void m(_,j.current);let e=setTimeout(()=>{m(_,j.current)},500);return()=>clearTimeout(e)},[_,m]),(0,t.jsx)(n.f,{disableClearable:x,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:h,filterOptions:(e,t)=>{let r=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return f&&""!==t.inputValue.trim()&&(r.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||r.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),r},onInputChange:(e,t,r)=>{j.current=r,C(t),v?.(e,t,r)},onChange:async(e,t,r)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&f){let i=t.value,n=await f(i);if(!n)return;b?.(e,n,r),C("");return}b?.(e,t,r)},renderTags:(e,i)=>e.map((e,n)=>(0,t.jsx)(r.f,{size:"small",label:e.label,...i({index:n})})),renderOption:(e,r,i)=>{let n=_||"",s="string"==typeof r?r:r?.label||"";if("object"==typeof r&&"isAddNew"in r&&r.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:s})});let a=((e,t)=>{let r=t?.trim()||"";if(!r||!e||r.length<3)return e;let i=[],n=r.toLowerCase(),s=e.toLowerCase(),a=0,o=s.indexOf(n);for(;-1!==o;)o>a&&i.push({text:e.substring(a,o),highlight:!1}),i.push({text:e.substring(o,o+r.length),highlight:!0}),a=o+r.length,o=s.indexOf(n,a);return a<e.length&&i.push({text:e.substring(a),highlight:!1}),i})(s,n);return(0,t.jsx)("li",{...e,children:Array.isArray(a)?(0,t.jsx)("span",{children:a.map((e,r)=>e.highlight?(0,t.jsx)("strong",{children:e.text},r):(0,t.jsx)("span",{children:e.text},r))}):s})},renderInput:e=>(0,t.jsx)(s.f,{label:l,placeholder:u,color:o,variant:d,error:c,helperText:p,...e,...y,inputProps:{...e.inputProps,...y.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...y.InputLabelProps||{}},InputProps:{...e.InputProps,...y.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[h?(0,t.jsx)(i.f,{color:"inherit",size:20}):null,y.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...A})}])},218659,e=>{var t=e.i(391398),r=e.i(280445),i=e.i(115871),n=e.i(813843),s=e.i(755548),a=e.i(587369);let o=(0,r.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:r,sx:d={},imageSx:l={},title:u,titleSx:c={},subtitleFirstLine:p,subtitleFirstLineSx:g={},subtitleSecondLine:h,subtitleSecondLineSx:m={},buttonText:f,onAction:y}=e,x=(0,a.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...d,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(o,{src:r,sx:{...l,width:x?"250px":"300px"}}),(0,t.jsx)(i.f,{typography:"h5",sx:{...c},children:u}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(i.f,{sx:{...g},children:p}),(0,t.jsx)(i.f,{sx:{...m},children:h})]}),f&&y&&(0,t.jsx)(s.f,{variant:"contained",color:"secondary",onClick:y,children:f})]})}])},74633,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(920235),n=e.i(738251),s=e.i(813843),a=e.i(115871),o=e.i(529292),d=e.i(280445),l=e.i(449587),u=e.i(317536),c=e.i(974261),p=e.i(749231),g=e.i(845825),h=e.i(587369),m=e.i(332789),f=e.i(340569),y=e.i(203828);let x=e=>{let{disabled:r,currentPage:i,totalCount:n,pageSize:s,onPageChange:a}=e,o=(0,h.f)("(max-width:400px)"),d=(0,h.f)("(max-width:500px)");return(0,t.jsx)(b,{disabled:r,page:i,count:Math.ceil(n/s),onChange:(e,t)=>a(t),variant:"outlined",shape:"rounded",size:o?"small":"medium",hidePrevButton:1===i,hideNextButton:i===Math.ceil(n/s),siblingCount:+!d,renderItem:e=>(0,t.jsx)(g.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})},b=(0,d.f)(p.f)(e=>{let{hidePrevButton:t,hideNextButton:r,theme:i}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px",flexShrink:0},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:i.palette.white.main,backgroundColor:i.palette.secondary.main,...r?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}}),v={item:"id",order:"desc"},A=(0,d.f)(n.f)(e=>{let{containerHeight:t,containerMaxHeight:r}=e;return{height:t,maxHeight:r,minHeight:0,display:"flex",flexDirection:"column"}}),_=(0,d.f)(i.f)(e=>{let{theme:t,hideHeader:r}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",flex:1,minHeight:0},"& .MuiDataGrid-columnHeaders":{...r&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...r&&{marginTop:"0 !important"}},"& .MuiDataGrid-iconSeparator":{opacity:1},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["B",0,x,"s",0,e=>{let{hideHeader:i,columns:n,history:o,totalCount:d,paginationSize:p,containerHeight:g,containerMaxHeight:h,autoHeight:b,currentPage:C=0,onTableStateChange:j,initialSort:w=[v],noRowsOverlay:$,loading:L,stateKey:S,onColumnOrderChange:M,onColumnWidthChange:k,slotProps:I,...T}=e,E=(0,y.useRouter)(),P=p||c.r.paginationSize,{apiRef:O,displayColumns:N,persistColumnOrder:R,persistColumnWidth:q}=(0,m.f)({stateKey:S,columns:n});(0,f.f)(O,!T.disableColumnReorder);let D=(0,r.useMemo)(()=>({...I,baseTooltip:{disableTouchListener:!0,...I?.baseTooltip}}),[I]),H=(0,r.useCallback)((e,t,r)=>{M?.(e,t,r),R()},[M,R]),G=(0,r.useCallback)((e,t,r)=>{k?.(e,t,r),q(e)},[k,q]),W=(0,r.useCallback)(e=>{E.push({query:{...E.query,page:e}},void 0,{shallow:!0})},[E]),B=(0,r.useCallback)(e=>{o&&W(e),j?.(t=>({...t,currentPage:e-1,pageSize:P}))},[W,o,j,P]),F=(0,r.useMemo)(()=>({sorting:{sortModel:w.map(e=>({field:e.item,sort:e.order}))}}),[w]);return(0,r.useEffect)(()=>{!d||d>C*P||B(1)},[C,B,P,d]),(0,t.jsxs)(A,{containerHeight:g,containerMaxHeight:h,children:[(0,t.jsx)(_,{hideHeader:i,hideFooter:!0,disableColumnMenu:!0,disableRowSelectionOnClick:!0,autoHeight:b,sortingMode:"server",filterMode:"server",apiRef:O,onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?j?.(e=>({...e,sorting:[{item:t.field.replace(/'/g,'"'),order:t.sort}]})):j?.(e=>({...e,sorting:w}))},onColumnOrderChange:H,onColumnWidthChange:G,columns:N,initialState:F,loading:L,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(l.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(u.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(s.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(l.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(u.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(a.f,{children:"There are no results."})}),noRowsOverlay:()=>$?(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:$()}):(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(a.f,{children:"There are no results."})})},slotProps:D,...T}),d&&Math.ceil(d/P)>1?(0,t.jsx)(x,{disabled:L,currentPage:C+1,totalCount:d,pageSize:P,onPageChange:B}):null]})}])},122965,e=>{var t=e.i(491230),r=e.i(203828),i=e.i(191788);let n=[{item:"id",order:"desc"}];e.s(["f",0,function(){let{initialSort:e=n,initialPageSize:s=50,options:a={},pageFromUrl:o=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=(0,r.useRouter)(),l=isNaN(Number(d.query.page))?0:Number(d.query.page)-1,[u,c]=(0,i.useState)({currentPage:o?l:0,pageSize:s,sorting:e||[]}),p=(0,i.useMemo)(()=>u.sorting.reduce((e,r)=>{let i=a.orderType,n=(0,t.f)(r.item.replaceAll(/ORDER/gi,`${r.order}${i?`_${i}`:""}`));return Array.isArray(n)?[...e,...n]:n?[...e,n]:[...e,{[r.item]:`${r.order}${i?`_${i}`:""}`}]},[]),[a.orderType,u.sorting]);return{reference:{currentPage:u.currentPage,paginationSize:u.pageSize,onTableStateChange:c,initialSort:e},pagination:{offset:u.currentPage*u.pageSize,limit:u.pageSize},order:p}}])},842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,r=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),i=e=>{let t=e?.address||e;return t&&r(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,r,"Q",0,i],964919);let n=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},s=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let r=n(t[0]),i=n(t[1]);return null==i||null==r||i<-90||i>90||r<-180||r>180?null:{lat:i,lng:r}},a=e=>s(e?.geo),o=async e=>{let t=i(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var r=await e.json();if(!r)return null;let i=r.coordinates?.lat??r.lat;return a({geo:{coordinates:[r.coordinates?.lng??r.lng,i]}})}catch{return null}},d=async(e,t)=>{let r=a(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[],s=a({geo:{coordinates:[i,n]}});return s||o(e)};e.s(["g",0,s,"Z",0,a,"t",0,d,"l",0,(e,t)=>{let r=a(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[];return a({geo:{coordinates:[i,n]}})},"a",0,n],842088)},175872,e=>{var t=e.i(191788);e.s(["f",0,(e,r)=>{let i=(0,t.useRef)(null),n=(0,t.useRef)(e),s=(0,t.useRef)(r);return(0,t.useEffect)(()=>{n.current=e},[e]),(0,t.useEffect)(()=>{s.current=r,i.current&&(clearTimeout(i.current),i.current=null)},[r]),(0,t.useEffect)(()=>()=>{i.current&&clearTimeout(i.current)},[]),(0,t.useCallback)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{n.current(...t)},s.current)},[])}])},65295,e=>{var t=e.i(362537);e.s(["f",0,function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?(0,t.default)(e).format(r?"DD/MM/YYYY HH:mm:ss":"DD/MM/YYYY"):""}])},491230,e=>{e.s(["f",0,e=>{try{return JSON.parse(e)}catch(e){return!1}}])},795617,e=>{var t=e.i(990071),r=e.i(842088);let i=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:r,type:i="inline",hideinvoicingEntity:n=!1}=e;if(!t)return"";let s="",a=r?.name?` (${r.name})`:"";return"stacked"===i?(s+=!n&&t.invoicingEntity?t.invoicingEntity+"\n":"",s+=t.addressLine1?t.addressLine1+a+"\n":a,s+=t.addressLine2?t.addressLine2+"\n":"",s+=t.addressLine3?t.addressLine3+"\n":"",s+=t.city?t.city+"\n":"",s+=t.county?t.county+"\n":""):(s+=!n&&t.invoicingEntity?t.invoicingEntity+" ":"",s+=t.addressLine1?t.addressLine1+a+" ":a,s+=t.addressLine2?t.addressLine2+" ":"",s+=t.addressLine3?t.addressLine3+" ":"",s+=t.city?t.city+" ":"",s+=t.county?t.county+" ":""),(s+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,i,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let r=null;switch(e){case"Account":r=t.A;break;case"Location":r=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!r)throw Error("Query cannot be null");return r},"u",0,(e,t)=>{let r=null;return"customer"===t?r=i(e.location,"invoice")||i(e.customer,"invoice")||i(e.location,"registered"):"supplier"===t&&(r=i(e.supplier,"invoice")||i(e.supplier,"registered")),r},"D",0,e=>{let t=(0,r.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let r=t.f`
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
`,s=t.f`
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
`,a=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${r}
`,o=t.f`
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
`,l=t.f`
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
`;e.s(["S",0,i,"a",0,r,"g",0,a,"H",0,d,"A",0,n,"R",0,s,"h",0,o,"I",0,l])},497280,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(432171),n=e.i(936641),s=e.i(738251),a=e.i(755548),o=e.i(88152),d=e.i(813843),l=e.i(652148),u=e.i(115871),c=e.i(824451),p=e.i(74633),g=e.i(218659),h=e.i(122965),m=e.i(175872),f=e.i(594301),y=e.i(65295),x=e.i(795617),b=e.i(159080);let v=b.f`
  query AccountsLog(
    $limit: Int
    $offset: Int
    $order: [Account_order_by!]
    $q: String
    $status: String
    $type: String
  ) {
    accounts: Account(
      limit: $limit
      offset: $offset
      where: { name: { _ilike: $q }, status: { _eq: $status }, type: { _eq: $type } }
      order_by: $order
    ) {
      id
      name
      type
      createdAt
      status
      addresses: Addresses(where: { entity: { _eq: "Account" } }) {
        id
        registered
        operating
        trading
        invoice
        status
        createdAt
        address: Address {
          id
          city
        }
      }
    }
    meta: Account_aggregate(
      where: { name: { _ilike: $q }, status: { _eq: $status }, type: { _eq: $type } }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var A=e.i(889231);let _=e=>e?e.charAt(0).toUpperCase()+e.slice(1):"-",C=[{label:"All statuses",value:"all"},{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],j=[{label:"All account types",value:"all"},{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"},{label:"Tenant",value:"tenant"}],w=()=>{let{hasRole:e,user:b}=(0,f.f)(),w=b?.accountType==="superadmin"||e("superadmin"),[$,L]=(0,r.useState)(""),[S,M]=(0,r.useState)(""),[k,I]=(0,r.useState)("active"),[T,E]=(0,r.useState)(w?"admin":"all"),{pagination:P,reference:O,order:N}=(0,h.f)({initialSort:[{item:"createdAt",order:"desc"}]}),R=(0,m.f)(e=>L(e),500),{data:{accounts:q,meta:D}={accounts:[],meta:{aggregate:{totalCount:0}}},loading:H,error:G,refetch:W}=(0,i.t)(v,{variables:{q:$?`%${$}%`:null,status:"all"===k?null:k,type:"all"===T?null:T,...P,order:N}}),B=(0,r.useMemo)(()=>q.map(e=>{let t=(0,x.w)(e,"registered");return{id:e.id,name:e.name,type:_(e.type),city:t?.address?.city||"",createdAt:(0,y.f)(e.createdAt),status:_(e.status),url:["superadmin","tenant"].includes(e.type.toLowerCase())?"":`/dashboard/${e.type.toLowerCase()}s/view?id=${e.id}`}}),[q]),F=(0,r.useMemo)(()=>[{field:"name",headerName:"Name",flex:2,minWidth:180,sortable:!1,renderCell:e=>{let{row:r}=e;return r.url?(0,t.jsx)(A.f,{href:r.url,color:"secondary",children:r.name}):(0,t.jsx)("span",{children:r.name})}},{field:"type",headerName:"Type",flex:1,minWidth:110,sortable:!1},{field:"city",headerName:"City",flex:1,minWidth:130,sortable:!1},{field:"createdAt",headerName:"Created",flex:1,minWidth:120},{field:"status",headerName:"Status",flex:1,minWidth:100,sortable:!1}],[]);return(0,t.jsxs)(s.f,{sx:{flex:1,overflow:"auto",p:2,marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 210px)"},transition:"margin-left 0.5s ease"},children:[(0,t.jsxs)(s.f,{sx:{mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,t.jsx)(u.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600,mb:1},children:"Accounts"}),(0,t.jsx)(u.f,{variant:"body2",color:"text.secondary",children:"All accounts registered on the platform."})]}),(0,t.jsxs)(d.f,{direction:{xs:"column",sm:"row"},spacing:2,sx:{mb:2,maxWidth:720},children:[(0,t.jsx)(l.f,{fullWidth:!0,size:"small",color:"secondary",label:"Search accounts",value:S,onChange:e=>{M(e.target.value),R(e.target.value)}}),(0,t.jsxs)(d.f,{direction:"row",spacing:2,children:[(0,t.jsx)(s.f,{sx:{flex:{xs:1,sm:"initial"},minWidth:{xs:0,sm:170}},children:(0,t.jsx)(c.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Status",options:C,value:C.find(e=>e.value===k)??null,onChange:(e,t)=>I(t?t.value:"all")})}),!w&&(0,t.jsx)(s.f,{sx:{flex:{xs:1,sm:"initial"},minWidth:{xs:0,sm:190}},children:(0,t.jsx)(c.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Account type",options:j,value:j.find(e=>e.value===T)??null,onChange:(e,t)=>E(t?t.value:"all")})})]})]}),G&&(0,t.jsx)(n.f,{severity:"error",sx:{mb:2},onClose:()=>W(),action:(0,t.jsx)(a.f,{size:"small",onClick:()=>W(),children:"Retry"}),children:G.message}),(0,t.jsxs)(o.f,{sx:{p:1,mt:2,minHeight:400},children:[(B.length>0||H)&&(0,t.jsx)(p.s,{...O,loading:H,columns:F,rows:B,totalCount:D.aggregate.totalCount,autoHeight:!1,containerHeight:"calc(100vh - 340px)"}),!B.length&&!H&&(0,t.jsx)(g.f,{imageSrc:"/static/icons/no_locations_found.svg",title:"No accounts found",subtitleFirstLine:"There are no accounts matching your filters.",subtitleSecondLine:"Adjust the search or filters to see more results."})]})]})};var $=e.i(293965);let L=()=>(0,t.jsx)(w,{});L.getLayout=e=>(0,t.jsx)($.f,{children:e}),e.s(["default",0,L],497280)}],49204,(e,t,r)=>{let i="/dashboard/account";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(497280)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);