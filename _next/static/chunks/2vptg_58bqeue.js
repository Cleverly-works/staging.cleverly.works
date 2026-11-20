(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,600744,444158,300052,793391,284699,e=>{var t=e.i(391398),i=e.i(810142),a=e.i(280445),n=e.i(631635);let r=(0,a.f)(n.f)(e=>{let{theme:t}=e;return{backgroundColor:t.palette.common.white,color:t.palette.primary.main,borderColor:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.common.white,borderColor:t.palette.primary.dark,color:t.palette.primary.dark}}}),l=(0,a.f)("span")({opacity:.75,marginLeft:"0.35em",fontWeight:"inherit"});e.s(["f",0,e=>{let{count:a,disabled:n,onClick:o}=e,s=null!=a;return(0,t.jsxs)(r,{variant:"outlined",label:s?`Columns \xb7 ${a}`:"Columns",icon:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{}),s&&(0,t.jsx)(l,{children:a})]}),startIcon:(0,t.jsx)(i.default,{}),disabled:n,onClick:o,children:["Columns",s&&(0,t.jsxs)(l,{children:["· ",a]})]})}],600744);let o=(0,a.f)("div")(e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:t.spacing(2),width:"100%","& > :not(:first-child)":{marginLeft:"auto"}}});e.s(["f",0,o],444158);var s=e.i(724128);e.s(["f",0,e=>{let{onClick:i}=e;return(0,t.jsx)(n.f,{variant:"contained",label:"Filters",icon:(0,t.jsx)(s.default,{}),startIcon:(0,t.jsx)(s.default,{}),onClick:i})}],300052);var d=e.i(49077);e.s(["f",0,e=>{let{label:i,onClick:a}=e;return(0,t.jsx)(n.f,{variant:"contained",color:"secondary",label:i,icon:(0,t.jsx)(d.default,{}),onClick:a})}],793391);var c=e.i(191788),u=e.i(10945);let m=[];var f=e.i(21557),h=e.i(432171),p=e.i(594301),g=e.i(569373),v=e.i(881128),x=e.i(52796),b=e.i(25246),y=e.i(159080);let C=y.f`
  query GetCustomFieldsForTable(
    $accountId: Int!
    $dataOwner: String!
    $limit: Int = 200
    $optionsLimit: Int = 200
  ) {
    fields: CustomItemDefinition(
      where: {
        accountId: { _eq: $accountId }
        kind: { _eq: "field" }
        status: { _eq: "active" }
        dataOwner: { _eq: $dataOwner }
        audiences: { audience: { _eq: "admin" } }
      }
      order_by: { name: asc }
      limit: $limit
    ) {
      id
      name
      internalName
      fieldSubtype
      options(order_by: { ordinal: asc }, limit: $optionsLimit) {
        label
        value
      }
    }
  }
`,w=y.f`
  query GetCustomFieldValuesForRows(
    $accountId: Int!
    $dataOwner: String!
    $rowIds: [Int!]!
    $definitionIds: [Int!]!
    $limit: Int!
  ) {
    values: CustomFieldValue(
      limit: $limit
      where: {
        accountId: { _eq: $accountId }
        dataOwnerType: { _eq: $dataOwner }
        dataOwnerId: { _in: $rowIds }
        definitionId: { _in: $definitionIds }
      }
    ) {
      definitionId
      dataOwnerId
      value
    }
  }
`,j=x.I,M=["actions"],S=new Set;e.s(["f",0,e=>{let{stateKey:t,columns:i,defaultFields:a,lockedFields:n=M,hiddenFields:r=S,customFields:l}=e,[o,s]=(0,c.useState)(!1),d=(0,f.f)(),{definitions:y,columns:I,truncated:O}=(e=>{let{dataOwner:t,skip:i}=e,{user:a}=(0,p.f)(),{data:n,loading:r}=(0,h.t)(C,{variables:{accountId:a?.accountId,dataOwner:t,limit:200,optionsLimit:200},skip:i||!a?.accountId});return(0,c.useMemo)(()=>{let e=(n?.fields??[]).slice().sort((e,t)=>(e.internalName||e.name).localeCompare(t.internalName||t.name,void 0,{sensitivity:"base"})),t=e.map(e=>({field:(0,x.a)(e.id),headerName:e.internalName||e.name,width:160,sortable:!1})),i=t.map(e=>({value:e.field,label:e.headerName||"",width:e.width||160}));return{definitions:e,columns:t,options:i,loading:r,truncated:(n?.fields?.length??0)>=200}},[n,r])})({dataOwner:l.dataOwner,skip:l.skip}),{visibleColumns:L,pickerOptions:$,selectedOptions:R,applySelection:_,canPersist:k,isCustomized:q,visibleCount:N}=(e=>{let{stateKey:t,catalog:i,defaultFields:a,lockedFields:n=m}=e,r=!!t,[l,o,s]=(0,u.f)({key:t?`table-columns-${t}`:"table-columns-inactive",initialValue:{fields:a},storageType:r?"network":"state"}),d=!r||s,f=Array.isArray(l?.fields)&&l.fields.every(e=>"string"==typeof e)?l.fields:a,{visibleColumns:h,selectedOptions:p,pickerOptions:g,visibleCount:v,isCustomized:x}=(0,c.useMemo)(()=>{let e=new Set(n),t=new Set(f),r=i.filter(i=>e.has(i.field)||t.has(i.field)),l=e=>({value:e.field,label:e.headerName||"",width:e.width||100}),o=i.filter(t=>!e.has(t.field)),s=o.filter(e=>t.has(e.field)),d=new Set(a),c=f.length!==a.length||f.some(e=>!d.has(e));return{visibleColumns:r,selectedOptions:s.map(l),pickerOptions:o.map(l),visibleCount:s.length,isCustomized:c}},[i,f,a,n]);return{visibleColumns:h,pickerOptions:g,selectedOptions:p,applySelection:(0,c.useCallback)(e=>{if(!d)return;let t=new Set(i.map(e=>e.field));o({fields:[...f.filter(e=>!t.has(e)),...e.map(e=>e.value)]})},[d,i,f,o]),canPersist:d,isCustomized:x,visibleCount:v}})({stateKey:t,catalog:(0,c.useMemo)(()=>{let e=i.filter(e=>!r.has(e.field));return[...e.filter(e=>!n.includes(e.field)),...I,...e.filter(e=>n.includes(e.field))]},[i,I,r,n]),defaultFields:a,lockedFields:n}),A=(0,c.useMemo)(()=>L.map(e=>e.field),[L]),{columns:D,error:E}=(e=>{let{dataOwner:t,definitions:i,rowIds:a,visibleFields:n,ownerIdsByRow:r,skip:l}=e,{user:o}=(0,p.f)(),s=(0,v.f)(),d=(0,c.useMemo)(()=>{let e=new Set(n.filter(j));return i.filter(t=>e.has((0,x.a)(t.id)))},[i,n]),{data:u,loading:m,error:f}=(0,h.t)(w,{fetchPolicy:"cache-and-network",variables:{accountId:o?.accountId,dataOwner:t,rowIds:a,definitionIds:d.map(e=>e.id),limit:a.length*d.length},skip:l||!o?.accountId||0===d.length||0===a.length});return(0,c.useMemo)(()=>{let e=new Map((u?.values??[]).map(e=>[`${e.definitionId}:${e.dataOwnerId}`,e.value])),t=!u&&!f;return{columns:d.map(i=>{let a=(0,x.K)(i);return{field:(0,x.a)(i.id),headerName:i.internalName||i.name,width:160,sortable:!1,renderCell:n=>{let{row:l}=n;if(t||f)return"";let o=(r?r[l.id]??[]:[l.id]).map(t=>(0,g.r)(e.get(`${i.id}:${t}`),a,{currencySymbol:s})).filter(e=>e!==g.W);return o.length?1===o.length?o[0]:`${b.a}${b.B}${o.join(b.B)}`:g.W}}}),loading:m,error:f}},[d,u,m,f,s,r])})({...l,definitions:y,visibleFields:A});(0,c.useEffect)(()=>{E&&d.show({content:"Custom field values could not be loaded",severity:"error"})},[E,d]);let P=(0,c.useMemo)(()=>{let e=new Map(D.map(e=>[e.field,e.renderCell]));return L.map(t=>{let i=e.get(t.field);return i?{...t,renderCell:i}:t})},[L,D]),{nativeOptions:W,customFieldOptions:T}=(0,c.useMemo)(()=>({nativeOptions:$.filter(e=>!j(e.value)),customFieldOptions:$.filter(e=>j(e.value))}),[$]);return{gridColumns:P,visibleFields:A,modalProps:{open:o,onClose:()=>s(!1),options:W,customFieldOptions:T,isCustomOption:j,value:R,onApply:_,notice:O&&T.length>0?"Showing the first 200 custom fields.":void 0},buttonProps:{count:q?N:null,disabled:!k,onClick:()=>s(!0)}}}],284699)},772937,e=>{var t=e.i(391398),i=e.i(821627),a=e.i(849091),n=e.i(717803),r=e.i(605224),l=e.i(477882),o=e.i(886779),s=e.i(356119),d=e.i(706692),c=e.i(393172),u=e.i(586741),m=e.i(191788),f=e.i(280445),h=e.i(824451),p=e.i(917563),g=e.i(345837);let v=(0,m.createContext)({selectAll:!1,onToggleSelectAll:()=>{}}),x=e=>{let{children:i,...r}=e,{selectAll:o,onToggleSelectAll:s}=(0,m.useContext)(v);return(0,t.jsxs)(l.f,{...r,children:[(0,t.jsx)(p.f,{onMouseDown:e=>e.preventDefault(),pl:"25px",py:1,children:(0,t.jsx)(g.f,{label:"Select all",control:(0,t.jsx)(a.f,{color:"secondary",checked:o,onClick:e=>{e.preventDefault(),s()},style:{height:10,marginRight:8}})})}),(0,t.jsx)(n.f,{}),i]})},b="__customFieldsGroup__",y={value:b,label:"Custom fields",width:0},C=(0,f.f)(l.f)(e=>{let{theme:t,isScreen600pxOrLess:i}=e;return{maxWidth:"100vw",minWidth:i?"100%":500,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:`${t.spacing(2)} !important`}});e.s(["f",0,e=>{let{open:l,onClose:f,options:p,customFieldOptions:g=[],isCustomOption:w,value:j,onApply:M,notice:S}=e,I=(0,d.f)("(max-width: 600px)"),[O,L]=(0,m.useState)([]),[$,R]=(0,m.useState)(!1),[_,k]=(0,m.useState)(!1),[q,N]=(0,m.useState)(""),A=(0,m.useMemo)(()=>{if(w)return w;let e=new Set(g.map(e=>e.value));return t=>e.has(t)},[g,w]),D=(0,m.useCallback)(e=>p.length>0&&p.every(t=>e.some(e=>e.value===t.value)),[p]),E=(0,m.useMemo)(()=>g.length>0?[...p,y,...g]:p,[p,g]),P=(0,m.useCallback)(e=>{if(e.value===b)return!1;let t=q.trim().toLowerCase();return""!==t?e.label.toLowerCase().includes(t):_||!A(e.value)},[q,_,A]),W=(0,m.useMemo)(()=>O.filter(e=>A(e.value)),[O,A]),T=g.length>0&&g.every(e=>O.some(t=>t.value===e.value)),F=(0,m.useCallback)(()=>{L(e=>{let t=e.filter(e=>!p.some(t=>t.value===e.value));return $?t:[...p,...t]}),R(!$)},[$,p]),z=(0,m.useMemo)(()=>({selectAll:$,onToggleSelectAll:F}),[$,F]),G=(0,m.useRef)(!1),J=(0,m.useRef)(new Set);return(0,m.useEffect)(()=>{if(!l){G.current=!1,N(""),k(!1);return}G.current||(G.current=!0,J.current=new Set([...E.filter(e=>e.value!==b&&!A(e.value)),...j].map(e=>e.value)),L(j),R(D(j)))},[j,l,D,E,A]),(0,m.useEffect)(()=>{if(!l||!G.current)return;let e=J.current,t=j.filter(t=>!e.has(t.value));t.length&&(t.forEach(t=>e.add(t.value)),L(e=>[...e,...t.filter(t=>!e.some(e=>e.value===t.value))]))},[l,j]),(0,m.useEffect)(()=>{l&&G.current&&E.filter(P).forEach(e=>J.current.add(e.value))},[l,E,P]),(0,t.jsx)(r.f,{open:l,onClose:f,children:(0,t.jsxs)(C,{isScreen600pxOrLess:I,children:[(0,t.jsx)(s.f,{variant:"h6",component:"h2",children:"Columns"}),(0,t.jsx)(s.f,{variant:"body2",sx:{fontSize:12,color:"text.secondary",mt:1},children:"Select the columns you would like to see in the table."}),S&&(0,t.jsx)(s.f,{variant:"caption",sx:{display:"block",color:"text.secondary",mt:.5},children:S}),(0,t.jsx)(n.f,{sx:{mt:2}}),(0,t.jsx)(v.Provider,{value:z,children:(0,t.jsx)(h.f,{multiple:!0,disableCloseOnSelect:!0,label:"Columns",variant:"standard",color:"secondary",options:E,value:O,onInputChange:(e,t)=>N(t),filterOptions:(e,t)=>{let i=t.inputValue.trim().toLowerCase(),a=e=>e.label.toLowerCase().includes(i),n=e.filter(e=>!A(e.value)&&e.value!==b),r=e.filter(e=>A(e.value)),l=n.filter(a);if(0===g.length)return l;if(""!==i){let e=r.filter(a);return e.length>0?[...l,y,...e]:l}return _?[...n,y,...r]:[...n,y]},onChange:(e,t,i)=>{"selectOption"===i&&t.some(e=>e.value===b)?k(e=>!e):(R(D(t)),L(t))},renderOption:(e,i)=>i.value===b?(0,t.jsxs)("li",{...e,"aria-label":`Custom fields, ${_?"expanded":"collapsed"}`,onMouseDown:e=>e.preventDefault(),onClick:e=>{e.preventDefault(),e.stopPropagation(),k(e=>!e)},children:[(0,t.jsx)(a.f,{color:"secondary",checked:T,indeterminate:W.length>0&&!T,onClick:e=>{e.preventDefault(),e.stopPropagation(),L(e=>{if(g.every(t=>e.some(e=>e.value===t.value))){let t=new Set(g.map(e=>e.value));return e.filter(e=>!t.has(e.value))}let t=g.filter(t=>!e.some(e=>e.value===t.value));return[...e,...t]})},style:{height:10,marginRight:8}}),(0,t.jsx)("span",{style:{flexGrow:1},children:i.label}),_?(0,t.jsx)(u.default,{fontSize:"small"}):(0,t.jsx)(c.default,{fontSize:"small"})]}):(0,t.jsxs)("li",{...e,style:A(i.value)?{paddingLeft:32}:void 0,children:[(0,t.jsx)(a.f,{color:"secondary",checked:O.some(e=>e.value===i.value),style:{height:10,marginRight:8}}),i.label]}),sx:{mt:1,mb:1},PaperComponent:x})}),(0,t.jsxs)(o.f,{direction:"row",justifyContent:"flex-end",gap:2,mt:2,children:[(0,t.jsx)(i.f,{variant:"contained",color:"danger",onClick:f,children:"Cancel"}),(0,t.jsx)(i.f,{variant:"contained",color:"secondary",onClick:()=>{M(O),f()},children:"Apply"})]})]})})}],772937)},631635,e=>{var t=e.i(391398),i=e.i(755548),a=e.i(76381),n=e.i(322135),r=e.i(587369),l=e.i(280445),o=e.i(451221);let s=(0,l.f)(i.f)({"& .MuiSvgIcon-root":{fontSize:20}});e.s(["f",0,e=>{let{label:l,icon:d,loading:c=!1,disabled:u,startIcon:m,children:f,...h}=e,p=(0,o.f)(),g=(0,r.f)(p.breakpoints.down("sm")),v=(0,t.jsx)(a.f,{size:20,color:"secondary"}),x=u||c;if(!g)return(0,t.jsx)(i.f,{...h,disabled:x,startIcon:c?void 0:m,children:c?v:f??l});let b=(0,t.jsx)(s,{...h,disabled:x,"aria-label":l,children:c?v:d});return x?b:(0,t.jsx)(n.f,{title:l,children:b})}])},667986,e=>{var t=e.i(191788),i=e.i(203828);e.s(["f",0,function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"create",{query:n,isReady:r}=(0,i.useRouter)(),l=(0,t.useRef)(!1),o=(0,t.useRef)(!1);return(0,t.useEffect)(()=>{if(!r)return;let t=!!n[a];!t||l.current||o.current||(e(null),l.current=!0),t||(l.current=!1,o.current=!1)},[e,n,a,r]),{open:(0,t.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;o.current=!0,e(t)},[e])}}])},413452,e=>{e.s(["f",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=>!0===e[t]}])},52796,25246,e=>{let t="customField_",i=e=>e.startsWith(t);e.s(["a",0,e=>`${t}${e}`,"$",0,e=>{if(!i(e))return null;let a=e.slice(t.length);if(!/^\d+$/.test(a))return null;let n=Number(a);return n>0?n:null},"K",0,e=>({id:e.id,name:e.name,helpText:null,fieldSubtype:e.fieldSubtype??null,dataOwner:null,required:!1,defaultValue:null,config:null,options:(e.options??[]).map(e=>({...e,active:!0}))}),"I",0,i],52796);let a="Multiple",n=e=>null==e?[]:Array.isArray(e)?[...e]:[e];e.s(["R",0,"-","a",0,a,"B",0," / ","$",0,(e,t)=>{let i=n(e);if(!i.length)return"-";let r=[...new Set(i.map(e=>null==e?"-":t(e)))],[l]=r;return 1===r.length&&void 0!==l?l:[a,...r].join(" / ")},"j",0,e=>"object"==typeof e&&null!==e&&Array.isArray(e.__multiOwner),"L",0,n],25246)},338553,e=>{var t,i=e.i(391398),a=e.i(191788),n=e.i(203828),r=e.i(362537),l=e.i(472552),o=e.i(877341),s=e.i(432171),d=e.i(159080);let c=d.f`
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
`;var u=e.i(88152),m=e.i(115871),f=e.i(813843),h=e.i(773831),p=e.i(738251),g=e.i(683125),v=e.i(6837),x=e.i(587369),b=e.i(13558),y=e.i(411331),C=e.i(93198),w=e.i(60903),j=e.i(359786),M=e.i(889231),S=e.i(422411),I=e.i(280445),O=e.i(652148),L=e.i(755548),$=e.i(827010),R=e.i(824451),_=e.i(594301),k=e.i(413452);let q=e=>{let{filterForm:t,setFilterForm:n,filtersVisibilityModel:r={},open:l=!1,onClose:s,onTableStateChange:d}=e,{user:c}=(0,_.f)(),m=(0,x.f)("(max-width: 400px)"),[h,p]=(0,a.useState)(""),[g,v]=(0,a.useState)(""),{control:b,handleSubmit:y,register:C,reset:w,errors:j}=(0,S.G)({defaultValues:t}),M=(0,k.f)(r),[I,{loading:q,data:{items:A}={items:[]}}]=(0,o.f)($.r,{variables:{q:""!==h?`%${h}%`:null,limit:50,offset:0}}),[D,{data:{items:E}={items:[]},loading:P}]=(0,o.f)($.Q,{variables:{accountId:c.adminId,limit:50,offset:0,q:""!==g?`%${g}%`:null}}),W=()=>d(e=>({...e,currentPage:0}));return(0,i.jsx)(N,{open:l,onClose:s,children:(0,i.jsx)(u.f,{sx:{minWidth:m?"300px":"400px",padding:"20px 40px"},children:(0,i.jsxs)("form",{onSubmit:y(e=>{n(e),W(),s()}),children:[(0,i.jsxs)(f.f,{gap:2,children:[(0,i.jsx)(O.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:C}),M("customer")&&(0,i.jsx)(S.e,{name:"customer",control:b,render:e=>{let{value:t,onChange:a}=e;return(0,i.jsx)(R.f,{limitTags:6,color:"secondary",value:t||null,onChange:(e,t)=>a(t),label:"Select customer",loading:q,onOpen:()=>I(),options:A,onSearchChange:p,variant:"standard",error:!!j.customer,helperText:j.customer?.message})}}),M("locationManager")&&(0,i.jsx)(S.e,{name:"locationManager",control:b,render:e=>{let{value:t,onChange:a}=e;return(0,i.jsx)(R.f,{value:t||null,onChange:(e,t)=>a(t),loading:P,onOpen:()=>D(),options:E,onSearchChange:v,color:"secondary",variant:"standard",label:"Select location manager"})}})]}),(0,i.jsxs)(f.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,i.jsx)(L.f,{variant:"contained",color:"danger",onClick:()=>void(n({}),w({}),W(),s()),children:"Cancel"}),(0,i.jsx)(L.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},N=(0,I.f)(g.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}));var A=e.i(128662),D=e.i(667986),E=e.i(65295),P=e.i(74633),W=e.i(122965),T=e.i(10945),F=e.i(21557),z=e.i(600744),G=e.i(444158),J=e.i(300052),B=e.i(793391),V=e.i(60450),H=e.i(772937),Y=e.i(284699),K=e.i(795617),U=e.i(879436),Q=((t=Q||{}).Customer="{'Customer': {'name': 'ORDER'}}",t.LocationManager="{'Manager': {'fullName': 'ORDER'}}",t.TotalSpend12mNet="{'LocationListMetrics': {'total12mNet': 'ORDER'}}",t.TotalSpend12mGross="{'LocationListMetrics': {'total12mGross': 'ORDER'}}",t.NumberOfInvoices="{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}",t.InvoicesOutstanding="{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}",t);let X=["mainPhoto","name","address","bookingCount","{'Manager': {'fullName': 'ORDER'}}","totalSpent","createdAt"],Z=e=>null==e?"-":(0,U.f)(e),ee=new Set(["{'LocationListMetrics': {'total12mNet': 'ORDER'}}","{'LocationListMetrics': {'total12mGross': 'ORDER'}}","{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}","{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}"]);e.s(["f",0,e=>{let{accountId:t,accountName:d,initialFilters:S,columnVisibilityModel:I={},tableContainerHeight:O}=e,{hasRole:L}=(0,_.f)(),$=L("admin"),R=$&&I?.totalSpent!==!1,[k,N]=(0,a.useState)(!1),Q=(0,F.f)(),[et,ei]=(0,a.useState)(!1),[ea,en]=(0,a.useState)(!1),[er,el]=(0,a.useState)(null),[eo]=(0,a.useState)(()=>(0,r.default)().toISOString()),[es,ed]=(0,T.f)({key:"filter-form-locations"+(t?"-"+t:""),initialValue:{q:S.q??null},storageType:"sessionStorage"}),ec=null!=t,eu=(0,a.useMemo)(()=>((e,t)=>{let{accountId:i}=t;return{accountId:i??e.customer?.value??null,managerId:e.locationManager?.value??null,q:e.q?`%${e.q}%`:null}})(es,{accountId:t}),[es,t]),{reference:em,pagination:ef,order:eh}=(0,W.f)(),ep=(0,y.f)(),eg=(0,x.f)("(max-width: 400px)"),ev=(0,C.r)(),{data:{properties:ex,meta:eb}={properties:[],meta:{aggregate:{totalCount:0}}},loading:ey,refetch:eC}=(0,s.t)(c,{variables:{...eu,...ef,now:eo,orderBy:eh?.[0],withMetrics:k,withMetricMoney:R}}),[ew]=(0,o.f)(c,{fetchPolicy:"no-cache",variables:{accountId:eu.accountId,managerId:eu?.managerId,q:eu.q,now:eo,orderBy:eh?.[0]},onCompleted:e=>{try{let t=l.default.unparse(eO(e.properties),{escapeFormulae:/^[=+@\t\r]/}),i="data:application/octet-stream,"+encodeURIComponent(t);(0,w.f)(i,"locations.csv")}finally{en(!1)}},onError:()=>{en(!1),Q.show({content:"Error exporting locations",severity:"error"})}}),ej=(0,a.useCallback)(e=>{e?.stopPropagation(),ep.show({content:(0,i.jsx)(j.f,{accountId:t,accountName:d,refetch:eC,close:ep.close}),title:"Create location",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw",query:{create:"true"},keepPrevQueryOnOpen:!0})},[ep,t,d,eC]),{open:eM}=(0,D.f)(e=>ej(e)),eS=e=>{let{row:t}=e;n.default.push(`/dashboard/properties/view?id=${t.data.id}&tab=details`)},eI=(0,a.useMemo)(()=>[{field:"mainPhoto",headerName:"Main photo",minWidth:120,sortable:!1,renderCell:e=>{let{row:t}=e;return t.mainPhoto?(0,i.jsx)(v.f,{file:t.mainPhoto.filename,loading:"lazy",onClick:e=>{e.stopPropagation(),el(t.mainPhoto?.filename??null)},sx:{width:"70px",height:"50px"},alt:"mainPhoto"}):null}},{headerName:"Name",field:"name",minWidth:370,flex:1},{headerName:"Address",field:"address",minWidth:300,flex:1,sortable:!1},{headerName:"Customer",field:"{'Customer': {'name': 'ORDER'}}",sortable:!0,flex:1,minWidth:eg?100:130,renderCell:e=>{let{row:{customer:t,customerId:a}}=e;return(0,i.jsx)(M.f,{color:"secondary",href:`/dashboard/customers/view?id=${a}`,children:t})}},{headerName:"Work Orders",field:"bookingCount",sortable:!0,minWidth:eg?100:130,renderCell:e=>{let{row:{workOrders:t}}=e;return(0,i.jsx)(p.f,{sx:{marginLeft:"3em"},children:t})},flex:1},{minWidth:180,flex:1,field:"{'Manager': {'fullName': 'ORDER'}}",sortable:!0,headerName:"Location Manager",renderCell:e=>{let{row:t}=e;return(0,i.jsx)(M.f,{noWrap:!t.managerId,color:"secondary",href:`/dashboard/users/view?id=${t.managerId}`,children:t.manager})}},{headerName:"Total Spent",field:"totalSpent",sortable:!0,minWidth:140,renderCell:e=>{let{row:{totalSpent:t}}=e;return t},flex:1},{field:"createdAt",headerName:"Created At",minWidth:eg?200:130,flex:1,sortable:!0},{headerName:"Invoice address",field:"invoiceAddress",minWidth:200,flex:1,sortable:!1},{headerName:"Number of quotes",field:"numberOfQuotes",minWidth:130,flex:1,sortable:!1},{headerName:"Next job date",field:"nextJobDate",minWidth:130,flex:1,sortable:!1},{headerName:"Last job date",field:"lastJobDate",minWidth:130,flex:1,sortable:!1},{headerName:"Permits required",field:"permitsRequired",minWidth:130,flex:1,sortable:!0},{headerName:"Total spend ex-VAT (12M)",field:"{'LocationListMetrics': {'total12mNet': 'ORDER'}}",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalSpend12mNet}},{headerName:"Total spend inc-VAT (12M)",field:"{'LocationListMetrics': {'total12mGross': 'ORDER'}}",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalSpend12mGross}},{headerName:"Number of invoices",field:"{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}",minWidth:140,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.numberOfInvoices}},{headerName:"Total invoices outstanding",field:"{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}",minWidth:170,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.invoicesOutstanding}},{field:"actions",headerName:"Actions",sortable:!1,minWidth:80,renderCell:e=>{let{row:t}=e;return(0,i.jsx)(h.f,{sx:{marginLeft:"1em"},onClick:()=>eS({row:t}),children:(0,i.jsx)(b.default,{})})},flex:1}],[eg]),eO=e=>e.map(e=>{let t=e?.addresses[0]?.address;return{name:e.name||"Not Specified",customer:e.customer?.name,address:t?`${t.addressLine1} - ${t.postCode}`:"",bookings:e.bookingCount,totalSpent:(0,U.f)(e.totalSpent??0),createdAt:(0,E.f)(e.createdAt)}}),eL=(0,a.useCallback)(()=>ex.map(e=>({id:e.id,data:e,name:e.name||"Not Specified",address:e.addresses[0]?.address?`
            ${e.addresses[0]?.address.addressLine1} -
            ${e.addresses[0]?.address.postCode}`:"Please Add",mainPhoto:e.mainPhoto?.[0]?.item??null,customer:e.customer?.name,customerId:e.customer?.id,managerId:e.manager?.id,manager:e.manager?.fullName,workOrders:e.bookingCount,totalSpent:(0,U.f)(e.totalSpent??0),createdAt:(0,E.f)(e.createdAt),status:e.status,invoiceAddress:(0,K.H)((0,K.w)({addresses:e.invoiceAddresses},"invoice")?.address),numberOfQuotes:e.quotesAggregate?.aggregate?.count??0,nextJobDate:e.nextJob?.aggregate?.min?.timingStart?(0,r.default)(e.nextJob.aggregate.min.timingStart).format("YYYY-MM-DD"):"-",lastJobDate:e.lastJob?.aggregate?.max?.timingStart?(0,r.default)(e.lastJob.aggregate.max.timingStart).format("YYYY-MM-DD"):"-",permitsRequired:null==e.permitsRequired?"-":e.permitsRequired?"Yes":"No",totalSpend12mNet:Z(e.listMetrics?.total12mNet),totalSpend12mGross:Z(e.listMetrics?.total12mGross),numberOfInvoices:"number"==typeof e.listMetrics?.numberOfInvoices?e.listMetrics.numberOfInvoices:"-",invoicesOutstanding:Z(e.listMetrics?.invoicesOutstanding),actions:""})),[ex]),e$=(0,a.useMemo)(()=>!ex.length&&eu?.q?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No locations",subtitleFirstLine:"You currently have no locations set up in the system",subtitleSecondLine:"Click create location to get started building.",buttonText:"Create location",onAction:eM},[eM,eu?.q,ex]),eR=(0,a.useMemo)(()=>ex.map(e=>e.id),[ex]),{defaultFields:e_,hiddenFields:ek}=(0,a.useMemo)(()=>{let e={"{'Customer': {'name': 'ORDER'}}":I?.customer!==!1,totalSpent:I?.totalSpent!==!1,"{'LocationListMetrics': {'total12mNet': 'ORDER'}}":R,"{'LocationListMetrics': {'total12mGross': 'ORDER'}}":R,"{'LocationListMetrics': {'numberOfInvoices': 'ORDER'}}":$,"{'LocationListMetrics': {'invoicesOutstanding': 'ORDER'}}":R};return{defaultFields:X.filter(t=>!1!==e[t]),hiddenFields:new Set(Object.keys(e).filter(t=>!e[t]))}},[I,$,R]),{gridColumns:eq,visibleFields:eN,modalProps:eA,buttonProps:eD}=(0,Y.f)({stateKey:ec?"locations-customer":"locations",columns:eI,defaultFields:e_,hiddenFields:ek,customFields:{dataOwner:"location",rowIds:eR,skip:!L("admin")}}),eE=eN.some(e=>ee.has(e));return(0,a.useEffect)(()=>N(eE),[eE]),(0,i.jsxs)(i.Fragment,{children:[et&&(0,i.jsx)(q,{...em,open:et,filterForm:es,setFilterForm:ed,filtersVisibilityModel:{customer:!ec,locationManager:ec},onClose:()=>ei(!1)}),(0,i.jsx)(H.f,{...eA}),(0,i.jsxs)(f.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,i.jsxs)(G.f,{children:[(0,i.jsxs)(f.f,{direction:"row",spacing:2,children:[(0,i.jsx)(J.f,{onClick:()=>ei(!0)}),(0,i.jsx)(z.f,{...eD})]}),(0,i.jsxs)(f.f,{direction:"row",spacing:2,children:[L("admin")&&(0,i.jsx)(B.f,{label:"Create Location",onClick:eM}),!ev&&(0,i.jsx)(V.f,{loading:ea,onClick:e=>{e.stopPropagation(),en(!0),ew()}})]})]}),(0,i.jsxs)(u.f,{sx:{padding:"16px 0px",...O?{height:O}:{flex:1,minHeight:0}},children:[(0,i.jsx)(m.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Locations"}),(ex?.length||ey)&&(0,i.jsx)(P.s,{...em,loading:ey,columns:eq,rows:eL(),totalCount:eb?.aggregate?.totalCount,stateKey:ec?"locations-customer":"locations",autoHeight:!1,containerHeight:"calc(100% - 52px)",onRowClick:eS}),!ex?.length&&!ey&&(0,i.jsx)(A.f,{imageSrc:"/static/icons/no_locations_found.svg",...e$})]})]}),er&&(0,i.jsx)(g.f,{open:!!er,onClose:()=>el(null),sx:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},children:(0,i.jsx)(v.f,{file:er,sx:{width:"500px",height:"500px"},alt:"mainPhoto"})})]})}],338553)},724128,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAltRounded")},586741,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp")},810142,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"StorageOutlined")},717803,e=>{var t=e.i(986351);e.s(["f",()=>t.f])}])})();