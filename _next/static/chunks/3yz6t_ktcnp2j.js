(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[600744,444158,300052,793391,284699,e=>{var t=e.i(391398),a=e.i(810142),i=e.i(280445),r=e.i(631635);let s=(0,i.f)(r.f)(e=>{let{theme:t}=e;return{backgroundColor:t.palette.common.white,color:t.palette.primary.main,borderColor:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.common.white,borderColor:t.palette.primary.dark,color:t.palette.primary.dark}}}),n=(0,i.f)("span")({opacity:.75,marginLeft:"0.35em",fontWeight:"inherit"});e.s(["f",0,e=>{let{count:i,disabled:r,onClick:l}=e,o=null!=i;return(0,t.jsxs)(s,{variant:"outlined",label:o?`Columns \xb7 ${i}`:"Columns",icon:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{}),o&&(0,t.jsx)(n,{children:i})]}),startIcon:(0,t.jsx)(a.default,{}),disabled:r,onClick:l,children:["Columns",o&&(0,t.jsxs)(n,{children:["· ",i]})]})}],600744);let l=(0,i.f)("div")(e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:t.spacing(2),width:"100%","& > :not(:first-child)":{marginLeft:"auto"}}});e.s(["f",0,l],444158);var o=e.i(724128);e.s(["f",0,e=>{let{onClick:a}=e;return(0,t.jsx)(r.f,{variant:"contained",label:"Filters",icon:(0,t.jsx)(o.default,{}),startIcon:(0,t.jsx)(o.default,{}),onClick:a})}],300052);var d=e.i(49077);e.s(["f",0,e=>{let{label:a,onClick:i}=e;return(0,t.jsx)(r.f,{variant:"contained",color:"secondary",label:a,icon:(0,t.jsx)(d.default,{}),onClick:i})}],793391);var u=e.i(191788),c=e.i(10945);let m=[];var p=e.i(21557),f=e.i(432171),g=e.i(594301),h=e.i(569373),v=e.i(881128),b=e.i(52796),x=e.i(25246),y=e.i(159080);let _=y.f`
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
`,$=y.f`
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
`,I=b.I,A=["actions"],j=new Set;e.s(["f",0,e=>{let{stateKey:t,columns:a,defaultFields:i,lockedFields:r=A,hiddenFields:s=j,customFields:n}=e,[l,o]=(0,u.useState)(!1),d=(0,p.f)(),{definitions:y,columns:w,truncated:S}=(e=>{let{dataOwner:t,skip:a}=e,{user:i}=(0,g.f)(),{data:r,loading:s}=(0,f.t)(_,{variables:{accountId:i?.accountId,dataOwner:t,limit:200,optionsLimit:200},skip:a||!i?.accountId});return(0,u.useMemo)(()=>{let e=(r?.fields??[]).slice().sort((e,t)=>(e.internalName||e.name).localeCompare(t.internalName||t.name,void 0,{sensitivity:"base"})),t=e.map(e=>({field:(0,b.a)(e.id),headerName:e.internalName||e.name,width:160,sortable:!1})),a=t.map(e=>({value:e.field,label:e.headerName||"",width:e.width||160}));return{definitions:e,columns:t,options:a,loading:s,truncated:(r?.fields?.length??0)>=200}},[r,s])})({dataOwner:n.dataOwner,skip:n.skip}),{visibleColumns:C,pickerOptions:q,selectedOptions:N,applySelection:O,canPersist:k,isCustomized:M,visibleCount:T}=(e=>{let{stateKey:t,catalog:a,defaultFields:i,lockedFields:r=m}=e,s=!!t,[n,l,o]=(0,c.f)({key:t?`table-columns-${t}`:"table-columns-inactive",initialValue:{fields:i},storageType:s?"network":"state"}),d=!s||o,p=Array.isArray(n?.fields)&&n.fields.every(e=>"string"==typeof e)?n.fields:i,{visibleColumns:f,selectedOptions:g,pickerOptions:h,visibleCount:v,isCustomized:b}=(0,u.useMemo)(()=>{let e=new Set(r),t=new Set(p),s=a.filter(a=>e.has(a.field)||t.has(a.field)),n=e=>({value:e.field,label:e.headerName||"",width:e.width||100}),l=a.filter(t=>!e.has(t.field)),o=l.filter(e=>t.has(e.field)),d=new Set(i),u=p.length!==i.length||p.some(e=>!d.has(e));return{visibleColumns:s,selectedOptions:o.map(n),pickerOptions:l.map(n),visibleCount:o.length,isCustomized:u}},[a,p,i,r]);return{visibleColumns:f,pickerOptions:h,selectedOptions:g,applySelection:(0,u.useCallback)(e=>{if(!d)return;let t=new Set(a.map(e=>e.field));l({fields:[...p.filter(e=>!t.has(e)),...e.map(e=>e.value)]})},[d,a,p,l]),canPersist:d,isCustomized:b,visibleCount:v}})({stateKey:t,catalog:(0,u.useMemo)(()=>{let e=a.filter(e=>!s.has(e.field));return[...e.filter(e=>!r.includes(e.field)),...w,...e.filter(e=>r.includes(e.field))]},[a,w,s,r]),defaultFields:i,lockedFields:r}),D=(0,u.useMemo)(()=>C.map(e=>e.field),[C]),{columns:L,error:F}=(e=>{let{dataOwner:t,definitions:a,rowIds:i,visibleFields:r,ownerIdsByRow:s,skip:n}=e,{user:l}=(0,g.f)(),o=(0,v.f)(),d=(0,u.useMemo)(()=>{let e=new Set(r.filter(I));return a.filter(t=>e.has((0,b.a)(t.id)))},[a,r]),{data:c,loading:m,error:p}=(0,f.t)($,{fetchPolicy:"cache-and-network",variables:{accountId:l?.accountId,dataOwner:t,rowIds:i,definitionIds:d.map(e=>e.id),limit:i.length*d.length},skip:n||!l?.accountId||0===d.length||0===i.length});return(0,u.useMemo)(()=>{let e=new Map((c?.values??[]).map(e=>[`${e.definitionId}:${e.dataOwnerId}`,e.value])),t=!c&&!p;return{columns:d.map(a=>{let i=(0,b.K)(a);return{field:(0,b.a)(a.id),headerName:a.internalName||a.name,width:160,sortable:!1,renderCell:r=>{let{row:n}=r;if(t||p)return"";let l=(s?s[n.id]??[]:[n.id]).map(t=>(0,h.r)(e.get(`${a.id}:${t}`),i,{currencySymbol:o})).filter(e=>e!==h.W);return l.length?1===l.length?l[0]:`${x.a}${x.B}${l.join(x.B)}`:h.W}}}),loading:m,error:p}},[d,c,m,p,o,s])})({...n,definitions:y,visibleFields:D});(0,u.useEffect)(()=>{F&&d.show({content:"Custom field values could not be loaded",severity:"error"})},[F,d]);let R=(0,u.useMemo)(()=>{let e=new Map(L.map(e=>[e.field,e.renderCell]));return C.map(t=>{let a=e.get(t.field);return a?{...t,renderCell:a}:t})},[C,L]),{nativeOptions:E,customFieldOptions:P}=(0,u.useMemo)(()=>({nativeOptions:q.filter(e=>!I(e.value)),customFieldOptions:q.filter(e=>I(e.value))}),[q]);return{gridColumns:R,visibleFields:D,modalProps:{open:l,onClose:()=>o(!1),options:E,customFieldOptions:P,isCustomOption:I,value:N,onApply:O,notice:S&&P.length>0?"Showing the first 200 custom fields.":void 0},buttonProps:{count:M?T:null,disabled:!k,onClick:()=>o(!0)}}}],284699)},772937,e=>{var t=e.i(391398),a=e.i(821627),i=e.i(849091),r=e.i(717803),s=e.i(605224),n=e.i(477882),l=e.i(886779),o=e.i(356119),d=e.i(706692),u=e.i(393172),c=e.i(586741),m=e.i(191788),p=e.i(280445),f=e.i(824451),g=e.i(917563),h=e.i(345837);let v=(0,m.createContext)({selectAll:!1,onToggleSelectAll:()=>{}}),b=e=>{let{children:a,...s}=e,{selectAll:l,onToggleSelectAll:o}=(0,m.useContext)(v);return(0,t.jsxs)(n.f,{...s,children:[(0,t.jsx)(g.f,{onMouseDown:e=>e.preventDefault(),pl:"25px",py:1,children:(0,t.jsx)(h.f,{label:"Select all",control:(0,t.jsx)(i.f,{color:"secondary",checked:l,onClick:e=>{e.preventDefault(),o()},style:{height:10,marginRight:8}})})}),(0,t.jsx)(r.f,{}),a]})},x="__customFieldsGroup__",y={value:x,label:"Custom fields",width:0},_=(0,p.f)(n.f)(e=>{let{theme:t,isScreen600pxOrLess:a}=e;return{maxWidth:"100vw",minWidth:a?"100%":500,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:`${t.spacing(2)} !important`}});e.s(["f",0,e=>{let{open:n,onClose:p,options:g,customFieldOptions:h=[],isCustomOption:$,value:I,onApply:A,notice:j}=e,w=(0,d.f)("(max-width: 600px)"),[S,C]=(0,m.useState)([]),[q,N]=(0,m.useState)(!1),[O,k]=(0,m.useState)(!1),[M,T]=(0,m.useState)(""),D=(0,m.useMemo)(()=>{if($)return $;let e=new Set(h.map(e=>e.value));return t=>e.has(t)},[h,$]),L=(0,m.useCallback)(e=>g.length>0&&g.every(t=>e.some(e=>e.value===t.value)),[g]),F=(0,m.useMemo)(()=>h.length>0?[...g,y,...h]:g,[g,h]),R=(0,m.useCallback)(e=>{if(e.value===x)return!1;let t=M.trim().toLowerCase();return""!==t?e.label.toLowerCase().includes(t):O||!D(e.value)},[M,O,D]),E=(0,m.useMemo)(()=>S.filter(e=>D(e.value)),[S,D]),P=h.length>0&&h.every(e=>S.some(t=>t.value===e.value)),U=(0,m.useCallback)(()=>{C(e=>{let t=e.filter(e=>!g.some(t=>t.value===e.value));return q?t:[...g,...t]}),N(!q)},[q,g]),W=(0,m.useMemo)(()=>({selectAll:q,onToggleSelectAll:U}),[q,U]),J=(0,m.useRef)(!1),G=(0,m.useRef)(new Set);return(0,m.useEffect)(()=>{if(!n){J.current=!1,T(""),k(!1);return}J.current||(J.current=!0,G.current=new Set([...F.filter(e=>e.value!==x&&!D(e.value)),...I].map(e=>e.value)),C(I),N(L(I)))},[I,n,L,F,D]),(0,m.useEffect)(()=>{if(!n||!J.current)return;let e=G.current,t=I.filter(t=>!e.has(t.value));t.length&&(t.forEach(t=>e.add(t.value)),C(e=>[...e,...t.filter(t=>!e.some(e=>e.value===t.value))]))},[n,I]),(0,m.useEffect)(()=>{n&&J.current&&F.filter(R).forEach(e=>G.current.add(e.value))},[n,F,R]),(0,t.jsx)(s.f,{open:n,onClose:p,children:(0,t.jsxs)(_,{isScreen600pxOrLess:w,children:[(0,t.jsx)(o.f,{variant:"h6",component:"h2",children:"Columns"}),(0,t.jsx)(o.f,{variant:"body2",sx:{fontSize:12,color:"text.secondary",mt:1},children:"Select the columns you would like to see in the table."}),j&&(0,t.jsx)(o.f,{variant:"caption",sx:{display:"block",color:"text.secondary",mt:.5},children:j}),(0,t.jsx)(r.f,{sx:{mt:2}}),(0,t.jsx)(v.Provider,{value:W,children:(0,t.jsx)(f.f,{multiple:!0,disableCloseOnSelect:!0,label:"Columns",variant:"standard",color:"secondary",options:F,value:S,onInputChange:(e,t)=>T(t),filterOptions:(e,t)=>{let a=t.inputValue.trim().toLowerCase(),i=e=>e.label.toLowerCase().includes(a),r=e.filter(e=>!D(e.value)&&e.value!==x),s=e.filter(e=>D(e.value)),n=r.filter(i);if(0===h.length)return n;if(""!==a){let e=s.filter(i);return e.length>0?[...n,y,...e]:n}return O?[...r,y,...s]:[...r,y]},onChange:(e,t,a)=>{"selectOption"===a&&t.some(e=>e.value===x)?k(e=>!e):(N(L(t)),C(t))},renderOption:(e,a)=>a.value===x?(0,t.jsxs)("li",{...e,"aria-label":`Custom fields, ${O?"expanded":"collapsed"}`,onMouseDown:e=>e.preventDefault(),onClick:e=>{e.preventDefault(),e.stopPropagation(),k(e=>!e)},children:[(0,t.jsx)(i.f,{color:"secondary",checked:P,indeterminate:E.length>0&&!P,onClick:e=>{e.preventDefault(),e.stopPropagation(),C(e=>{if(h.every(t=>e.some(e=>e.value===t.value))){let t=new Set(h.map(e=>e.value));return e.filter(e=>!t.has(e.value))}let t=h.filter(t=>!e.some(e=>e.value===t.value));return[...e,...t]})},style:{height:10,marginRight:8}}),(0,t.jsx)("span",{style:{flexGrow:1},children:a.label}),O?(0,t.jsx)(c.default,{fontSize:"small"}):(0,t.jsx)(u.default,{fontSize:"small"})]}):(0,t.jsxs)("li",{...e,style:D(a.value)?{paddingLeft:32}:void 0,children:[(0,t.jsx)(i.f,{color:"secondary",checked:S.some(e=>e.value===a.value),style:{height:10,marginRight:8}}),a.label]}),sx:{mt:1,mb:1},PaperComponent:b})}),(0,t.jsxs)(l.f,{direction:"row",justifyContent:"flex-end",gap:2,mt:2,children:[(0,t.jsx)(a.f,{variant:"contained",color:"danger",onClick:p,children:"Cancel"}),(0,t.jsx)(a.f,{variant:"contained",color:"secondary",onClick:()=>{A(S),p()},children:"Apply"})]})]})})}],772937)},60450,e=>{var t=e.i(391398),a=e.i(28980),i=e.i(631635);e.s(["f",0,e=>{let{label:r="Export",loading:s,onClick:n}=e;return(0,t.jsx)(i.f,{variant:"contained",color:"success",label:r,icon:(0,t.jsx)(a.default,{}),startIcon:(0,t.jsx)("img",{src:"/static/icons/csv.svg",alt:"",width:20,height:20}),loading:s,onClick:n})}])},631635,e=>{var t=e.i(391398),a=e.i(755548),i=e.i(76381),r=e.i(322135),s=e.i(587369),n=e.i(280445),l=e.i(451221);let o=(0,n.f)(a.f)({"& .MuiSvgIcon-root":{fontSize:20}});e.s(["f",0,e=>{let{label:n,icon:d,loading:u=!1,disabled:c,startIcon:m,children:p,...f}=e,g=(0,l.f)(),h=(0,s.f)(g.breakpoints.down("sm")),v=(0,t.jsx)(i.f,{size:20,color:"secondary"}),b=c||u;if(!h)return(0,t.jsx)(a.f,{...f,disabled:b,startIcon:u?void 0:m,children:u?v:p??n});let x=(0,t.jsx)(o,{...f,disabled:b,"aria-label":n,children:u?v:d});return b?x:(0,t.jsx)(r.f,{title:n,children:x})}])},374979,e=>{var t=e.i(159080);let a=t.f`
  query GetSuppliers(
    $limit: Int
    $offset: Int
    $orderBy: Account_order_by!
    $where: Account_bool_exp
    $now: timestamptz
    $withMetrics: Boolean = false
  ) {
    suppliers: Account(limit: $limit, offset: $offset, where: $where, order_by: [$orderBy]) {
      id
      createdAt
      name
      status
      companyNumber
      vatId
      website
      jobs: SupplierJobs_aggregate {
        aggregate {
          count
          max {
            scheduledAt
          }
          sum {
            amount
          }
        }
      }
      jobList: SupplierJobs(order_by: { createdAt: desc }) {
        id
      }
      services: Services(where: { entity: { _eq: "Account" } }) {
        id
        service: Service {
          id
          name
        }
      }
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
          name
          addressLine1
          addressLine2
          addressLine3
          city
          county
          geo
          postCode
          country: Country {
            id
            name
          }
        }
      }
      listMetrics: AccountListMetrics @include(if: $withMetrics) {
        supplierTotal12mNet
        supplierTotal12mGross
        invoicesOutstanding
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
        id
        role
        position
        isContact
        lastSignInAt
        userId
        user: User {
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
      }
      usersAggregate: Account_Users_aggregate {
        aggregate {
          count
        }
      }
      quotesAggregate: SupplierQuotes_aggregate(
        where: {
          type: { _eq: "quote" }
          status: {
            _in: [
              "supplierQuoteRequested"
              "supplierQuoteComplete"
              "supplierQuoteDraft"
              "waitingThresholdApproval"
            ]
          }
        }
      ) {
        aggregate {
          count
        }
      }
      invoicesAggregate: AccountEntries_aggregate(
        where: { type: { _in: ["invoice", "proformaInvoice", "supplierPpmInvoice"] } }
      ) {
        aggregate {
          count
        }
      }
      nextJob: SupplierJobs_aggregate(
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
    }
    meta: Account_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  query GetSupplier($id: Int!) {
    supplier: Account_by_pk(id: $id) {
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
      statusLogs: StatusLog(where: { entity: { _eq: "Account" } }) {
        id
        status
        createdAt
      }
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
          name
          addressLine1
          addressLine2
          addressLine3
          city
          county
          geo
          postCode
          country: Country {
            id
            name
          }
        }
      }

      details: SupplierDetail {
        cisRegistered
        quotingEmail
        typeOfOrganisation
        utrNumber
        accountId
      }

      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
        role
        position
        isContact
        lastSignInAt
        userId
        user: User {
          id
          name: nameFirst
          nameFirst
          nameLast
          phone
          status
          email
          createdAt
          fullName
        }
      }
      usersMeta: Account_Users_aggregate {
        aggregate {
          count
        }
      }

      coverage: PostcodeAreas(where: { entity: { _eq: "Account" }, status: { _eq: "active" } }) {
        id
        status
        createdAt
        area: PostcodeArea {
          id
          name
          area
        }
      }
      services: Services {
        serviceId
        createdAt
      }
      references: References {
        id
        createdAt
      }
    }
  }
`,r=t.f`
  query GetSupplierManage($id: Int!) {
    supplier: Account_by_pk(id: $id) {
      id
      name
      website
      companyNumber
      vatId
      status
      meta
      managerSelected: Manager {
        id
        label: fullName
        value: id
      }
      supplierDetails: SupplierDetail {
        id
        cisRegistered
        quotingEmail
        typeOfOrganisation
        utrNumber
      }
    }
  }
`,s=t.f`
  mutation AddSupplier($objects: [Account_insert_input!]!) {
    insert_Account(objects: $objects) {
      returning {
        id
      }
    }
  }
`;t.f`
  mutation AddSupplierDetail($objects: [SupplierDetail_insert_input!]!) {
    insert_SupplierDetail(objects: $objects) {
      returning {
        id
        accountId
      }
    }
  }
`,t.f`
  mutation AddSupplierOffer($objects: [SupplierOffer_insert_input!]!) {
    insert_SupplierOffer(objects: $objects) {
      returning {
        id
      }
    }
  }
`;let n=t.f`
  query GetPostCodeAreas(
    $limit: Int
    $offset: Int
    $q: String
    $supplierId: Int
    $status: String = "active"
  ) {
    coverage: PostcodeArea_Entity(
      where: {
        entity: { _eq: "Account" }
        entityId: { _eq: $supplierId }
        status: { _eq: $status }
        PostcodeArea: { name: { _ilike: $q } }
      }
      order_by: { PostcodeArea: { name: asc } }
      limit: $limit
      offset: $offset
    ) {
      id
      status
      createdAt
      area: PostcodeArea {
        id
        name
        area
      }
    }
    meta: PostcodeArea_Entity_aggregate(
      where: {
        entity: { _eq: "Account" }
        entityId: { _eq: $supplierId }
        status: { _eq: $status }
        PostcodeArea: { name: { _ilike: $q } }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,l=t.f`
  query GetPostCodeAreaForSelect($countryId: Int, $q: String, $limit: Int, $offset: Int) {
    items: PostcodeArea(
      where: { name: { _ilike: $q }, countryId: { _eq: $countryId } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      area
      label: name
      value: id
    }
  }
`,o=t.f`
  query GetServicesForSelect($q: String, $limit: Int, $offset: Int) {
    items: Service(
      where: { name: { _ilike: $q }, status: { _eq: "active" } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`;t.f`
  query GetFinancialJob(
    $adminId: Int
    $customerId: Int
    $endDate: timestamptz
    $startDate: timestamptz
    $limit: Int
    $status: [String]
    $managerId: Int
    $locationId: Int
    $offset: Int
    $supplierId: Int
    $q: String
    $orderBy: Job_order_by!
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        type: { _in: ["reactive", "ppm"] }
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { number: { _ilike: $q } }
              { Invoices: { invoiceNumber: { _ilike: $q } } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        managerId: { _eq: $managerId }
        adminId: { _eq: $adminId }
        locationId: { _eq: $locationId }
      }
      order_by: [$orderBy]
    ) {
      id
      type
      number
      status
      description
      reference
      timingStart
      scheduledAt
      createdAt

      customerTotal: customerFinances(path: "amountInfo.total")
      supplierTotal: supplierFinances(path: "amountInfo.total")
      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")
      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")
      customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")
      supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")
      customerRebateAmount: customerFinances(path: "rebate.amount")

      slaId
      invoices: Invoices(order_by: { createdAt: desc }) {
        invoiceNumber
      }
      customer: Customer {
        id
        name
      }
      supplier: Supplier {
        id
        name
      }
      location: Location {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      sla: SLA {
        name
      }
      manager: Manager {
        fullName
        nameLast
        nameFirst
        id
      }
      service: Service {
        id
        name
      }
    }
    meta: Job_aggregate(
      where: {
        type: { _in: ["reactive", "ppm"] }
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { number: { _ilike: $q } }
              { Invoices: { invoiceNumber: { _ilike: $q } } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        managerId: { _eq: $managerId }
        adminId: { _eq: $adminId }
        locationId: { _eq: $locationId }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,e.s(["W",0,s,"q",0,l,"Z",0,o,"C",0,i,"o",0,a,"d",0,n,"Y",0,r])},52796,25246,e=>{let t="customField_",a=e=>e.startsWith(t);e.s(["a",0,e=>`${t}${e}`,"$",0,e=>{if(!a(e))return null;let i=e.slice(t.length);if(!/^\d+$/.test(i))return null;let r=Number(i);return r>0?r:null},"K",0,e=>({id:e.id,name:e.name,helpText:null,fieldSubtype:e.fieldSubtype??null,dataOwner:null,required:!1,defaultValue:null,config:null,options:(e.options??[]).map(e=>({...e,active:!0}))}),"I",0,a],52796);let i="Multiple",r=e=>null==e?[]:Array.isArray(e)?[...e]:[e];e.s(["R",0,"-","a",0,i,"B",0," / ","$",0,(e,t)=>{let a=r(e);if(!a.length)return"-";let s=[...new Set(a.map(e=>null==e?"-":t(e)))],[n]=s;return 1===s.length&&void 0!==n?n:[i,...s].join(" / ")},"j",0,e=>"object"==typeof e&&null!==e&&Array.isArray(e.__multiOwner),"L",0,r],25246)},724128,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(e.r(421506)),s=e.r(391398);a.default=(0,r.default)((0,s.jsx)("path",{d:"M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAltRounded")},586741,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(e.r(421506)),s=e.r(391398);a.default=(0,r.default)((0,s.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp")},810142,(e,t,a)=>{var i=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(e.r(421506)),s=e.r(391398);a.default=(0,r.default)((0,s.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"StorageOutlined")},717803,e=>{var t=e.i(986351);e.s(["f",()=>t.f])},340346,e=>{var t,a=e.i(391398),i=e.i(203828),r=e.i(293965),s=e.i(191788),n=e.i(691567),l=e.i(362537),o=e.i(432171),d=e.i(877341),u=e.i(374979),c=e.i(472552),m=e.i(813843),p=e.i(88152),f=e.i(115871),g=e.i(128662),h=e.i(74633),v=e.i(847474),b=e.i(795617),x=e.i(122965),y=e.i(93198),_=e.i(60903),$=e.i(594301),I=e.i(498681),A=e.i(10945),j=e.i(21557),w=e.i(600744),S=e.i(444158),C=e.i(300052),q=e.i(793391),N=e.i(60450),O=e.i(772937),k=e.i(284699),M=e.i(239964),T=e.i(422411),D=e.i(683125),L=e.i(280445),F=e.i(652148),R=e.i(755548),E=e.i(587369),P=e.i(106997),U=e.i(849091),W=e.i(345837);let J=e=>{let{initialFilters:t,filterForm:i,setFilterForm:r,open:n=!1,onClose:l}=e,o=(0,E.f)("(max-width: 400px)"),[c,f]=(0,s.useState)(""),[g,h]=(0,s.useState)(""),{control:v,handleSubmit:b,register:x,reset:y,errors:_}=(0,T.G)({defaultValues:i}),[$,{loading:I,data:{items:A}={items:[]}}]=(0,d.f)(u.q,{variables:{q:""!==c?`%${c}%`:null,limit:50,offset:0}}),[j,{loading:w,data:{items:S}={items:[]}}]=(0,d.f)(u.Z,{variables:{q:""!==g?`%${g}%`:null,limit:50,offset:0}});return(0,a.jsx)(G,{open:n,onClose:l,children:(0,a.jsx)(p.f,{sx:{minWidth:o?"300px":"400px",padding:"20px 40px"},children:(0,a.jsxs)("form",{onSubmit:b(e=>{r(e),l()}),children:[(0,a.jsxs)(m.f,{spacing:4,children:[(0,a.jsx)(F.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:x}),(0,a.jsx)(T.e,{name:"coverage",control:v,render:e=>{let{value:t,onChange:i}=e;return(0,a.jsx)(P.f,{limitTags:6,color:"secondary",value:t||null,onChange:(e,t)=>i(t),loading:I,onOpen:()=>$(),options:A,setSearch:f,textFieldProps:{label:"Select coverage",variant:"standard",color:"secondary",error:!!_.coverage,helperText:_.coverage?.message}})}}),(0,a.jsx)(T.e,{name:"service",control:v,render:e=>{let{value:t,onChange:i}=e;return(0,a.jsx)(P.f,{limitTags:6,color:"secondary",value:t||null,onChange:(e,t)=>i(t),loading:w,onOpen:()=>j(),options:S,setSearch:h,textFieldProps:{label:"Select service",variant:"standard",color:"secondary",error:!!_.service,helperText:_.service?.message}})}}),(0,a.jsx)(T.e,{name:"status",control:v,render:e=>{let{value:t,onChange:i}=e;return(0,a.jsx)(P.f,{limitTags:6,color:"secondary",value:t||null,onChange:(e,t)=>i(t),options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],textFieldProps:{label:"Select status",variant:"standard",color:"secondary",error:!!_.status,helperText:_.status?.message}})}}),(0,a.jsx)(T.e,{name:"assignedUser",control:v,render:e=>{let{value:t,onChange:i}=e;return(0,a.jsx)(W.f,{color:"secondary",control:(0,a.jsx)(U.f,{color:"secondary",checked:t,onChange:e=>i(e.target.checked)}),label:"Assigned to me"})}})]}),(0,a.jsxs)(m.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,a.jsx)(R.f,{variant:"contained",color:"danger",onClick:()=>void(r(t),y(t),l()),children:"Cancel"}),(0,a.jsx)(R.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},G=(0,L.f)(D.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}));var Y=e.i(889231),z=e.i(879436);let B="/dashboard/suppliers/";var V=((t=V||{}).JobsCount="{'SupplierJobs_aggregate': {'count': 'ORDER'}}",t.LastJob="{'SupplierJobs_aggregate': {'max': {'scheduledAt': 'ORDER'}}}",t);let H=["name","{'SupplierJobs_aggregate': {'count': 'ORDER'}}","{'SupplierJobs_aggregate': {'max': {'scheduledAt': 'ORDER'}}}","contactName","city","createdAt","status"],K=e=>null==e?"-":(0,z.f)(e),Q=new Set(['{"AccountListMetrics": {"supplierTotal12mNet": "ORDER"}}','{"AccountListMetrics": {"supplierTotal12mGross": "ORDER"}}','{"AccountListMetrics": {"invoicesOutstanding": "ORDER"}}']),X=new Set,Z=e=>{let{initialFilters:t}=e,{user:r,hasRole:n}=(0,$.f)(),{can:T}=(0,I.f)(),D=T("admin.finances.view"),[L,F]=(0,s.useState)(!1),R=(0,y.r)(),[E,P]=(0,A.f)({key:"filter-form-suppliers",initialValue:{q:t.q??null,status:t.status??null,assignedUser:t.assignedUser??!1},storageType:"sessionStorage"}),U=(0,s.useMemo)(()=>({q:E.q?`%${E.q}%`:null,coverage:E.coverage??null,service:E.service??null,status:E.status??null,assignedUser:E.assignedUser??!1}),[E]),{reference:W,pagination:G,order:z}=(0,x.f)({initialSort:[{item:"createdAt",order:"desc"}]}),V=(0,s.useMemo)(()=>((e,t)=>{let{assignedUser:a,coverage:i,service:r,status:s,q:n}=e;return{type:{_eq:"supplier"},...a&&{managerId:{_eq:t.id}},...r&&{_or:[{Services:{Service:{id:{_eq:r.value}}}},{ServiceSchedule:{Service:{id:{_eq:r.value}}}}]},...i&&{PostcodeAreas:{postcodeAreaId:{_eq:i.value}}},...s&&{status:{_eq:s.value}},...n&&{name:{_ilike:n}}}})(U,r),[U,r]),[Z,ee]=(0,s.useState)(!1),[et,ea]=(0,s.useState)(!1),ei=(0,j.f)(),[er]=(0,s.useState)(()=>(0,l.default)().toISOString()),{data:{suppliers:es,meta:en}={suppliers:[],meta:{aggregate:{totalCount:0}}},loading:el}=(0,o.t)(u.o,{variables:{where:V,...G,orderBy:z?.[0],now:er,withMetrics:L}}),[eo]=(0,d.f)(u.o,{fetchPolicy:"no-cache",variables:{where:V,orderBy:z?.[0],offset:0,now:er,limit:en?.aggregate?.totalCount||150},onCompleted:e=>{try{let t=c.default.unparse(ev(e.suppliers),{escapeFormulae:/^[=+@\t\r]/}),a="data:application/octet-stream,"+encodeURIComponent(t);(0,_.f)(a,"suppliers.csv")}finally{ea(!1)}},onError:()=>{ea(!1),ei.show({content:"Error exporting suppliers",severity:"error"})}}),ed=(0,s.useCallback)(e=>[{context:"secondary",icon:"edit",onClick:t=>e$(t)(e),tooltip:"Edit"}],[]),eu=(0,s.useMemo)(()=>[{field:"name",headerName:"Name",minWidth:130,flex:1},{field:"{'SupplierJobs_aggregate': {'count': 'ORDER'}}",headerName:"Number of jobs",minWidth:130,flex:1,renderCell:e=>{let{row:t}=e;return t.jobsCount}},{field:"{'SupplierJobs_aggregate': {'max': {'scheduledAt': 'ORDER'}}}",headerName:"Last job",minWidth:130,flex:1,renderCell:e=>{let{row:t}=e;return t.lastJob}},{field:"contactName",headerName:"Contact",minWidth:130,flex:1,sortable:!1,renderCell:e=>{let{row:{contactName:t,contactId:i}}=e;return(0,a.jsx)(Y.f,{color:"secondary",href:`/dashboard/users/view?id=${i}`,children:t})}},{field:"city",headerName:"City",minWidth:130,flex:1,sortable:!1},{field:"createdAt",headerName:"Created",minWidth:130,flex:1},{field:"status",headerName:"Status",minWidth:130,flex:1,sortable:!1},{field:"numberOfUsers",headerName:"Number of users",minWidth:130,flex:1,sortable:!1},{field:"numberOfQuotes",headerName:"Number of quotes",minWidth:130,flex:1,sortable:!1},{field:"numberOfInvoices",headerName:"Number of invoices",minWidth:140,flex:1,sortable:!1},{field:"operatingAddress",headerName:"Operating address",minWidth:200,flex:1,sortable:!1},{field:"registeredAddress",headerName:"Registered address",minWidth:200,flex:1,sortable:!1},{field:"invoiceAddress",headerName:"Invoice address",minWidth:200,flex:1,sortable:!1},{field:"nextJobDate",headerName:"Next job date",minWidth:130,flex:1,sortable:!1},{field:'{"AccountListMetrics": {"supplierTotal12mNet": "ORDER"}}',headerName:"Total earnings ex-VAT (12M)",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalEarnings12mNet}},{field:'{"AccountListMetrics": {"supplierTotal12mGross": "ORDER"}}',headerName:"Total earnings inc-VAT (12M)",minWidth:180,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalEarnings12mGross}},{field:'{"AccountListMetrics": {"invoicesOutstanding": "ORDER"}}',headerName:"Total invoices outstanding",minWidth:170,flex:1,sortable:!0,renderCell:e=>{let{row:t}=e;return t.invoicesOutstanding}},{field:"actions",headerName:"Actions",minWidth:130,flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,a.jsx)(M.f,{actionsData:ed,row:t})}}],[ed]),ec=(0,s.useMemo)(()=>es.map(e=>e.id),[es]),{gridColumns:em,visibleFields:ep,modalProps:ef,buttonProps:eg}=(0,k.f)({stateKey:"suppliers",columns:eu,defaultFields:H,hiddenFields:D?X:Q,customFields:{dataOwner:"supplier",rowIds:ec,skip:!n("admin")}}),eh=ep.some(e=>Q.has(e));(0,s.useEffect)(()=>F(eh),[eh]);let ev=e=>e.map(e=>({name:e.name,companyNumber:e.companyNumber,vatId:e.vatId,website:e.website,status:e.status,createdAt:(0,l.default)(e.createdAt).format("YYYY-MM-DD"),jobsCount:e.jobs?.aggregate?.count,email:e.contactUsers?.length?e.contactUsers[0].user?.email:"",phoneNumber:e.contactUsers?.length?e.contactUsers[0].user?.phone:"",contactName:e.contactUsers?.length?e.contactUsers[0].user?.fullName:"",lastJob:e.jobList?.length?e.jobList[0].id:"",earnings:e.jobs?.aggregate?.sum?.amount,services:e.services?.map(e=>e.service?.name).join(", ")})),eb=(0,s.useMemo)(()=>es.map(e=>{let t=(0,v.w)(e,"registered"),a=t?.address?.city,i=e.jobs?.aggregate?.max?.scheduledAt&&(0,l.default)(e.jobs?.aggregate?.max?.scheduledAt).format("YYYY-MM-DD");return{id:e.id,managerId:e?.manager?.id,name:e.name,jobsCount:e.jobs?.aggregate?.count,lastJob:i,contactName:e.contactUsers?.length?`${e.contactUsers[0].user.nameFirst} ${e.contactUsers[0].user.nameLast}`:"Unassigned",contactId:e.contactUsers?.length&&e.contactUsers[0].user.id,city:a||"",createdAt:(0,l.default)(e.createdAt).format("YYYY-MM-DD"),status:e.status.charAt(0).toUpperCase()+e.status.slice(1,e.status.length),numberOfUsers:e.usersAggregate?.aggregate?.count??0,numberOfQuotes:e.quotesAggregate?.aggregate?.count??0,numberOfInvoices:e.invoicesAggregate?.aggregate?.count??0,operatingAddress:(0,b.H)((0,v.w)(e,"operating")?.address),registeredAddress:(0,b.H)(t?.address),invoiceAddress:(0,b.H)((0,v.w)(e,"invoice")?.address),nextJobDate:e.nextJob?.aggregate?.min?.timingStart?(0,l.default)(e.nextJob.aggregate.min.timingStart).format("YYYY-MM-DD"):"-",totalEarnings12mNet:K(e.listMetrics?.supplierTotal12mNet),totalEarnings12mGross:K(e.listMetrics?.supplierTotal12mGross),invoicesOutstanding:K(e.listMetrics?.invoicesOutstanding),actions:""}}),[es]),ex=!!(U.q||U.coverage||U.service||U.status||U.assignedUser),ey=(0,s.useCallback)(()=>{i.default.push(`${B}manage`)},[]),e_=(0,s.useMemo)(()=>!eb.length&&ex?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No suppliers",subtitleFirstLine:"You currently have no suppliers set up in the system",subtitleSecondLine:"Click create supplier to get started building.",buttonText:"Create supplier",onAction:ey},[ex,eb,ey]),e$=e=>(e.stopPropagation(),e=>{i.default.push(`${B}manage?id=${e.id}`)});return(0,a.jsxs)(a.Fragment,{children:[Z&&(0,a.jsx)(J,{initialFilters:t,open:Z,filterForm:E,setFilterForm:P,onClose:()=>ee(!1)}),(0,a.jsx)(O.f,{...ef}),(0,a.jsxs)(m.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,a.jsxs)(S.f,{children:[(0,a.jsxs)(m.f,{direction:"row",spacing:2,children:[(0,a.jsx)(C.f,{onClick:()=>ee(!0)}),(0,a.jsx)(w.f,{...eg})]}),(0,a.jsxs)(m.f,{direction:"row",spacing:2,children:[(0,a.jsx)(q.f,{label:"Create supplier",onClick:ey}),!R&&(0,a.jsx)(N.f,{loading:et,onClick:e=>{e.stopPropagation(),ea(!0),eo()}})]})]}),(0,a.jsxs)(p.f,{sx:{padding:"16px 0px",flex:1,minHeight:0},children:[(0,a.jsx)(f.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Suppliers"}),eb.length?(0,a.jsx)(h.s,{...W,stateKey:"suppliers",loading:el,columns:em,rows:eb,totalCount:en?.aggregate?.totalCount,autoHeight:!1,containerHeight:"calc(100% - 52px)",onRowClick:e=>{i.default.push(`${B}view?id=${e.id}`)}}):!el&&(0,a.jsx)(g.f,{imageSrc:"/static/icons/no_locations_found.svg",...e_})]})]})]})};Z.propTypes={filters:n.object};let ee={assignedUser:!1,coverageId:null,q:null,status:{label:"Active",value:"active"},serviceId:null,filterType:"suppliers_table"},et=()=>{let{user:e}=(0,$.f)();return e?(0,a.jsx)(r.f,{children:(0,a.jsx)(Z,{initialFilters:ee})}):(i.default.replace("/account/sign-in"),null)};et.getLayout=function(e){return e},e.s(["default",0,et],340346)}],649800,(e,t,a)=>{let i="/dashboard/suppliers";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(340346)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);