(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[824451,e=>{var t=e.i(391398),r=e.i(800884),a=e.i(76381),n=e.i(515523),i=e.i(652148),s=e.i(191788);e.s(["f",0,e=>{let{color:l,variant:o,label:u,placeholder:c,error:d,helperText:f,size:m,loading:y,onSearchChange:$,onAddNew:h,textFieldProps:p={},disableClearable:v,onChange:b,onInputChange:_,...g}=e,[q,I]=(0,s.useState)(""),x=(0,s.useRef)("input");return(0,s.useEffect)(()=>{if(!$)return;if("reset"===x.current||"clear"===x.current)return void $(q,x.current);let e=setTimeout(()=>{$(q,x.current)},500);return()=>clearTimeout(e)},[q,$]),(0,t.jsx)(n.f,{disableClearable:v,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:y,filterOptions:(e,t)=>{let r=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return h&&""!==t.inputValue.trim()&&(r.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||r.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),r},onInputChange:(e,t,r)=>{x.current=r,I(t),_?.(e,t,r)},onChange:async(e,t,r)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&h){let a=t.value,n=await h(a);if(!n)return;b?.(e,n,r),I("");return}b?.(e,t,r)},renderTags:(e,a)=>e.map((e,n)=>(0,t.jsx)(r.f,{size:"small",label:e.label,...a({index:n})})),renderOption:(e,r,a)=>{let n=q||"",i="string"==typeof r?r:r?.label||"";if("object"==typeof r&&"isAddNew"in r&&r.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:i})});let s=((e,t)=>{let r=t?.trim()||"";if(!r||!e||r.length<3)return e;let a=[],n=r.toLowerCase(),i=e.toLowerCase(),s=0,l=i.indexOf(n);for(;-1!==l;)l>s&&a.push({text:e.substring(s,l),highlight:!1}),a.push({text:e.substring(l,l+r.length),highlight:!0}),s=l+r.length,l=i.indexOf(n,s);return s<e.length&&a.push({text:e.substring(s),highlight:!1}),a})(i,n);return(0,t.jsx)("li",{...e,children:Array.isArray(s)?(0,t.jsx)("span",{children:s.map((e,r)=>e.highlight?(0,t.jsx)("strong",{children:e.text},r):(0,t.jsx)("span",{children:e.text},r))}):i})},renderInput:e=>(0,t.jsx)(i.f,{label:u,placeholder:c,color:l,variant:o,error:d,helperText:f,...e,...p,inputProps:{...e.inputProps,...p.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...p.InputLabelProps||{}},InputProps:{...e.InputProps,...p.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[y?(0,t.jsx)(a.f,{color:"inherit",size:20}):null,p.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...g})}])},185242,e=>{var t=e.i(191788),r=e.i(190077),a=e.i(631328),n=e.i(105118),i=e.i(3878);e.s(["f",0,function(e,s){let{queryKey:l,method:o="GET",headers:u,body:c,params:d,pathParams:f,baseUrl:m,skip:y=!1,pollInterval:$,stopPollingOnError:h=!0,onCompleted:p,onError:v}=s,b=(0,i.r)(),_=(0,t.useRef)(null),g=(0,t.useRef)(!0),{fetchQuery:q,unregisterQuery:I,registerQuery:x}=b,w=(0,t.useMemo)(()=>(0,r.f)(),[]),[S,C]=(0,t.useState)(void 0),[j,A]=(0,t.useState)(null),[T,k]=(0,t.useState)(!1),[F,L]=(0,t.useState)(0),U=(0,a.s)(y),G=(0,a.s)(c),M=(0,a.s)(d),P=(0,a.s)(f),E=(0,a.s)(F),V=(0,t.useRef)(0),N=(0,t.useRef)(null),O=(0,t.useRef)(p),R=(0,t.useRef)(v);(0,t.useEffect)(()=>{O.current=p,R.current=v});let z=(0,t.useCallback)(async()=>{_.current?.abort();let t=new AbortController;_.current=t,A(null),k(!0);let r=++V.current,a=!1;try{let a=await q(e,{baseUrl:m,method:o,headers:u,body:c,params:d,pathParams:f,signal:t.signal});r===V.current&&(C(a),O.current?.(a))}catch(n){if(n instanceof Error&&"AbortError"===n.name){a=!0,_.current===t&&k(!1);return}let e=n instanceof Error?n:Error("An unknown error occurred");r===V.current&&(A(e),R.current?.(e))}finally{a||r!==V.current||k(!1)}},[m,c,q,u,o,d,f,e]),W=(0,t.useRef)(z);(0,t.useEffect)(()=>{W.current=z}),(0,t.useEffect)(()=>(x(l,w,()=>L(e=>e+1),o),()=>{I(l,w)}),[w,o,l,x,I]),(0,t.useEffect)(()=>{if(N.current&&(clearTimeout(N.current),N.current=null,g.current=!1),y){U!==y&&(_.current?.abort(),k(!1));return}!g.current&&(0,n.f)(G,c)&&(0,n.f)(M,d)&&(0,n.f)(P,f)&&E===F&&U===y||(z(),g.current=!1)},[c,z,d,f,G,M,P,E,U,F,y]),(0,t.useEffect)(()=>()=>{N.current=setTimeout(()=>{N.current=null,_.current?.abort()}),g.current=!0},[]);let X=!!($&&$>0&&!y&&!(h&&j));return(0,t.useEffect)(()=>{if(!X)return;let e=setInterval(()=>{W.current()},$);return()=>{clearInterval(e)}},[X,$]),{data:S,error:j,isLoading:T,isError:!!j,refetch:()=>L(e=>e+1)}}])},851123,e=>{var t=e.i(159080);let r=t.f`
  query GetComplianceCategoriesForSelect(
    $q: String
    $type: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Taxonomy(
      where: { type: { _eq: $type }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,a=t.f`
  query GetSublocationsForSelect($locationId: Int, $q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Sublocation(
      where: { name: { _ilike: $q }, locationId: { _eq: $locationId }, active: { _eq: true } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      value: id
      label: name
    }
  }
`,n=t.f`
  query GetSublocationsForSelectMultipleLocation(
    $locationIds: [Int]
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Sublocation(
      where: { name: { _ilike: $q }, locationId: { _in: $locationIds }, active: { _eq: true } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      value: id
      label: name
    }
  }
`,i=t.f`
  query GetAssetsCategoryForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: {
        type: { _eq: "assetCategory" }
        isGroup: { _eq: false }
        status: { _eq: "active" }
        name: { _ilike: $q }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,s=t.f`
  query GetAssetsCategoryWithWhere($where: Taxonomy_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,l=t.f`
  query GetAssetsForSelect(
    $locationId: Int
    $sublocationId: Int
    $categoryId: Int
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Asset(
      where: {
        categoryId: { _eq: $categoryId }
        locationId: { _eq: $locationId }
        sublocationId: { _eq: $sublocationId }
        name: { _ilike: $q }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,o=t.f`
  query GetAdminCompliancesForSelect(
    $q: String
    $type: String = "complianceCategory"
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Compliance(
      where: {
        name: { _ilike: $q }
        locationId: { _is_null: true }
        supplierId: { _is_null: true }
        status: { _eq: "active" }
        type: { _eq: "admin" }
        ComplianceCategory: { type: { _eq: $type } }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
      category: ComplianceCategory {
        value: id
        label: name
      }
    }
  }
`,u=t.f`
  query GetUsersForSelect($accountId: Int, $q: String, $limit: Int = 50, $offset: Int = 0) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          accountId: { _eq: $accountId }
          isContact: { _eq: true }
          status: { _eq: "active" }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
    }
  }
`;t.f`
  query GetUsersForSelectMultiple(
    $accountIds: [Int]
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          accountId: { _in: $accountIds }
          isContact: { _eq: true }
          status: { _eq: "active" }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
    }
  }
`;let c=t.f`
  query GetCounterpartyUsersForSendTo(
    $accountType: String!
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        meta: { _contains: { notificationSettings: { email: true } } }
        Account_Users: {
          status: { _eq: "active" }
          isContact: { _eq: true }
          Account: { type: { _eq: $accountType }, status: { _eq: "active" } }
        }
        _or: [
          { fullName: { _ilike: $q } }
          { nameFirst: { _ilike: $q } }
          { nameLast: { _ilike: $q } }
          { email: { _ilike: $q } }
        ]
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
      email
    }
  }
`;t.f`
  query GetTenantsForSelect($q: String, $locationId: Int, $limit: Int = 50, $offset: Int = 0) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { Account: { type: { _eq: "tenant" } }, status: { _eq: "active" } }
        TenantBookings: { locationId: { _eq: $locationId } }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`;let d=t.f`
  query GetTenantsForSelectMultiple(
    $q: String
    $locationIds: [Int]
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { Account: { type: { _eq: "tenant" } }, status: { _eq: "active" } }
        TenantBookings: { locationId: { _in: $locationIds } }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`,f=t.f`
  query GetAccountsForSelect($where: Account_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,m=t.f`
  query GetAccountsForSendTo($where: Account_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
      usersMeta: Account_Users_aggregate(
        where: {
          status: { _eq: "active" }
          User: { meta: { _contains: { notificationSettings: { email: true } } } }
        }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`,y=t.f`
  query GetLocationsForSelect($q: String, $customerId: Int, $limit: Int = 50, $offset: Int = 0) {
    items: Location(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        Account_Locations: { accountId: { _eq: $customerId } }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
      registeredAddress: Addresses(
        where: { entity: { _eq: "Location" }, registered: { _eq: true } }
      ) {
        address: Address {
          id
          addressLine1
          addressLine2
          addressLine3
          county
          country: Country {
            name
          }
          postCode
          city
        }
      }
    }
  }
`,$=t.f`
  query GetLocationsForCustomerUserForSelect(
    $q: String
    $customerId: Int
    $customerUserId: Int
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Location(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        _or: [
          {
            Account_Locations: {
              accountId: { _eq: $customerId }
              Account: {
                type: { _eq: "customer" }
                Account_Users: { role: { _neq: "user" }, userId: { _eq: $customerUserId } }
              }
            }
          }
          {
            Account_Locations: {
              accountId: { _eq: $customerId }
              Account: {
                type: { _eq: "customer" }
                Account_Users: { role: { _eq: "user" }, userId: { _eq: $customerUserId } }
              }
              User_Account_Locations: {
                Account_User: { userId: { _eq: $customerUserId }, accountId: { _eq: $customerId } }
              }
            }
          }
        ]
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
      registeredAddress: Addresses(
        where: { entity: { _eq: "Location" }, registered: { _eq: true } }
      ) {
        address: Address {
          id
          addressLine1
          addressLine2
          addressLine3
          county
          country: Country {
            name
          }
          postCode
          city
        }
      }
    }
  }
`,h=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,p=t.f`
  query GetAddressesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Address(
      where: {
        _or: [{ name: { _ilike: $q } }, { addressLine1: { _ilike: $q } }, { city: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      value: id
      name
      addressLine1
      city
    }
  }
`,v=t.f`
  query GetIssueTypesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { type: { _eq: "issueType" }, name: { _ilike: $q } }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
    }
  }
`,b=t.f`
  query GetShortJobDescriptionForSelect(
    $q: String
    $limit: Int = 50
    $offset: Int = 0
    $orderBy: [Taxonomy_order_by!]
  ) {
    items: Taxonomy(
      where: { type: { _eq: "jobTags" }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,_=t.f`
  query GetQuoteSummaryForSelect(
    $q: String
    $limit: Int = 50
    $offset: Int = 0
    $orderBy: [Taxonomy_order_by!]
  ) {
    items: Taxonomy(
      where: { type: { _eq: "quoteSummary" }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,g=t.f`
  query GetServicesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
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
`,q=t.f`
  query GetCostCategoriesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { type: { _eq: "costCategory" }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,I=t.f`
  query GetTaxonomyChildrenForSelect(
    $q: String
    $parentId: Int!
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Taxonomy(
      where: { status: { _eq: "active" }, name: { _ilike: $q }, parentId: { _eq: $parentId } }
      order_by: { id: desc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,x=t.f`
  query GetClientTypesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: {
        type: { _eq: "clientType" }
        status: { _eq: "active" }
        name: { _ilike: $q }
        isGroup: { _eq: false }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,w=t.f`
  query GetTaxonomyForSelect(
    $where: Taxonomy_bool_exp
    $limit: Int
    $offset: Int
    $orderBy: Taxonomy_order_by!
    $includeMeta: Boolean! = false
  ) {
    items: Taxonomy(where: $where, limit: $limit, offset: $offset, order_by: [$orderBy]) {
      value: id
      label: name
      meta @include(if: $includeMeta)
    }
  }
`,S=t.f`
  query GetPropertiesForSelect($where: Location_bool_exp, $limit: Int, $offset: Int) {
    items: Location(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
      access
      permitsRequired
      registeredAddress: Addresses(
        where: { entity: { _eq: "Location" }, registered: { _eq: true } }
      ) {
        address: Address {
          id
          addressLine1
          addressLine2
          addressLine3
          county
          country: Country {
            name
          }
          postCode
          city
        }
      }
    }
  }
`,C=t.f`
  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
    }
  }
`,j=t.f`
  query GetCompliancesCategoryParentForSelect($q: String, $limit: Int, $offset: Int) {
    items: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "complianceCategory" }
        isGroup: { _eq: false }
      }
      order_by: [{ id: desc }]
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
    }
  }
`,A=t.f`
  query GetCompliancesCategoryForSelect($q: String, $limit: Int, $offset: Int) {
    items: Compliance(
      where: { name: { _ilike: $q }, status: { _eq: "active" } }
      order_by: [{ id: desc }]
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
    }
  }
`,T=t.f`
  query GetActiveFormsForSelect($q: String!, $limit: Int = 50, $offset: Int = 0) {
    items: Form(
      where: { status: { _eq: true }, name: { _ilike: $q } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,k=t.f`
  query GetAssignableTagsForSelect($q: String!, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "tags" }
        _not: {
          _or: [
            { clientMeta: { _contains: { isSystemTag: true } } }
            { clientMeta: { _has_key: "systemTagKey" } }
          ]
        }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
      meta: clientMeta
    }
  }
`;e.s(["V",0,f,"M",0,m,"J",0,T,"c",0,p,"m",0,o,"_",0,i,"W",0,s,"B",0,l,"a",0,k,"v",0,x,"S",0,A,"Z",0,j,"X",0,r,"D",0,q,"Y",0,c,"g",0,v,"b",0,$,"h",0,y,"o",0,h,"j",0,S,"O",0,_,"d",0,g,"T",0,b,"U",0,C,"i",0,a,"e",0,n,"z",0,I,"A",0,w,"p",0,d,"P",0,u])},894842,e=>{e.s(["f",0,e=>e&&!e.allowed?e.reason:void 0])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},284642,e=>{var t=e.i(391398),r=e.i(813843),a=e.i(422411),n=e.i(356119),i=e.i(824451),s=e.i(191788),l=e.i(834862),o=e.i(886779);let u=e=>{let{control:r,...u}=e,{authStatus:c,tenantId:d,getXeroContacts:f}=(0,l.f)(),[m,y]=(0,s.useState)(!1),[$,h]=(0,s.useState)([]),[p,v]=(0,s.useState)(!1),b=(0,s.useRef)(null),_=(0,s.useRef)(0),g=(0,s.useCallback)(async e=>{if("authorized"!==c||b.current===e)return;b.current=e;let t=++_.current;y(!0);try{let r=await f(e);if(t!==_.current)return;if(!r){b.current=null;return}h(r.reduce((e,t)=>(t.contactID&&t.name&&e.push({label:t.name,value:t.contactID}),e),[]))}finally{t===_.current&&y(!1)}},[f,c]);(0,s.useEffect)(()=>{_.current+=1,b.current=null,h([]),y(!1)},[d]);let q=(0,s.useCallback)((e,t)=>{p&&"reset"!==t&&g(e)},[g,p]),I=(0,s.useCallback)(()=>{v(!0),g("")},[g]),x=(0,s.useCallback)(()=>{v(!1),b.current=null},[]);return(0,t.jsx)(a.e,{control:r,defaultValue:null,name:"xeroContact",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(i.f,{loading:m,variant:"standard",color:"secondary",label:"Xero contact",value:r,options:$,filterOptions:e=>e,onChange:(e,t)=>a(t),open:p,onOpen:I,onClose:x,onSearchChange:q,getOptionLabel:e=>"string"==typeof e?e:e?.label??"",renderOption:(e,r)=>(0,t.jsx)("li",{...e,children:(0,t.jsxs)(o.f,{children:[(0,t.jsx)(n.f,{variant:"body2",children:r.label}),(0,t.jsx)(n.f,{variant:"caption",color:"text.secondary",children:r.value})]})}),...u})}})};e.s(["f",0,e=>{let{displayXero:i=!1}=e,{control:s}=(0,a.M)();return i?(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(n.f,{variant:"h6",textAlign:"center",children:"Xero user sync"}),(0,t.jsx)(u,{control:s,variant:"standard"})]}):null}],284642)},251680,353807,863160,373889,955314,884750,114277,682e3,e=>{var t=e.i(391398),r=e.i(813843),a=e.i(422411),n=e.i(164056),i=e.i(658524),s=e.i(159974),l=e.i(589200),o=e.i(524057),u=e.i(356119),c=e.i(207646),d=e.i(255419);e.s(["f",0,e=>{let{disabled:f=!1,refusal:m,emailDisabled:y=!1,emailRefusal:$}=e,{control:h,formState:{errors:p}}=(0,a.M)(),v=f?void 0:$;return(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Contact user"}),m&&(0,t.jsx)(u.f,{variant:"body2",color:"text.secondary",textAlign:"center",children:m}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"nameFirst",control:h,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"First name",value:r,onChange:a,disabled:f,error:!!p?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"nameLast",control:h,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Last name",value:r,onChange:a,disabled:f,error:!!p?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"email",control:h,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:r,onChange:a,disabled:f||y,error:!!p?.email,helperText:v,FormHelperTextProps:d.f,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"phone",control:h,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Mobile",value:r,onChange:a,disabled:f,error:!!p?.phone,fullWidth:!0})}})]}),(0,t.jsx)(a.e,{name:"statusUser",control:h,defaultValue:"active",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsxs)(l.f,{variant:"standard",color:"secondary",fullWidth:!0,disabled:f,children:[(0,t.jsx)(o.f,{children:"Status"}),(0,t.jsx)(i.f,{color:"secondary",value:r,onChange:a,error:!!p?.status,children:c.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(a.e,{name:"userId",control:h,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})}),(0,t.jsx)(a.e,{name:"contactUser",control:h,defaultValue:!0,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})}],353807);var f=e.i(405167),m=e.i(498681);let y="Only your account manager can change this";e.s(["f",0,()=>{let{control:e,formState:{errors:$}}=(0,a.M)(),{can:h}=(0,m.f)(),p=h("linkedAccount.administer");return(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Company"}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"name",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Name",value:r,onChange:a,error:!!$?.name,helperText:$?.name?.message,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"website",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Website",value:r,onChange:a,error:!!$?.website,helperText:$?.website?.message,fullWidth:!0})}})]}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"companyNumber",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Company number",value:r,onChange:a,error:!!$?.companyNumber,helperText:$?.companyNumber?.message,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"vatId",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"VAT ID",value:r,onChange:a,error:!!$?.vatId,helperText:$?.vatId?.message,fullWidth:!0})}})]}),(0,t.jsx)(a.e,{name:"status",control:e,defaultValue:"active",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsxs)(l.f,{variant:"standard",color:"secondary",fullWidth:!0,disabled:!p,children:[(0,t.jsx)(o.f,{children:"Status"}),(0,t.jsx)(i.f,{value:r,onChange:a,error:!!$?.status,children:c.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))}),!p&&(0,t.jsx)(f.f,{...d.f,children:y})]})}})]})}],863160);var $=e.i(191788),h=e.i(877341),p=e.i(594301),v=e.i(824451),b=e.i(851123);let _={FormHelperTextProps:d.f};e.s(["f",0,e=>{let{type:n}=e,{user:i}=(0,p.f)(),{can:s}=(0,m.f)(),l=s("linkedAccount.administer"),[o,c]=(0,$.useState)(""),{control:d,formState:{errors:f},watch:g}=(0,a.M)(),[q,{loading:I,data:{items:x}={items:[]}}]=(0,h.f)(b.P,{variables:{q:""!==o?`%${o}%`:null,accountId:i?.adminId,limit:50,offset:0}}),w=g("account")||{};return w?.type==="superadmin"?null:(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Manager"}),(0,t.jsx)(a.e,{name:"managerSelected",control:d,defaultValue:null,render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(v.f,{variant:"standard",color:"secondary",label:"supplier"===n?"Assigned to":"Account manager",options:x,onSearchChange:c,onOpen:()=>q(),loading:I,value:r,onChange:(e,t)=>a(t),disabled:!l,textFieldProps:_,error:!!f?.managerSelected,helperText:f?.managerSelected?.message??(l?void 0:y)})}})]})}],373889),e.s([],251680);let g=/^[^\s@,;:<>()[\]\\"]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;e.s(["z",0,"Xero will not accept this email address. It must be a valid address of at most 255 characters, with no accented or non-ASCII characters.","M",0,e=>{let t=(e??"").trim();return!t||!(t.length>255)&&!!(e=>{for(let t=0;t<e.length;t++){let r=e.codePointAt(t);if(void 0===r||r<32||r>126)return!1}return!0})(t)&&g.test(t)}],955314);var q=e.i(426778);e.s(["f",0,e=>(0,q.t)({label:(0,q.x)().required(),value:(0,q.H)().required()}).default(void 0).when("$administers",{is:!0,then:t=>t.required(e),otherwise:e=>e.nullable().optional()})],884750),e.s(["f",0,e=>{let{canLinkXero:t,xeroContact:r,xeroAuthStatus:a,xeroTenantId:n}=e;return t&&"authorized"===a&&n?{xeroContact:r?.value?{id:r.value,name:r.label||r.value}:null}:{}}],114277),e.s(["f",0,e=>{let{editMode:t,xeroAuthStatus:r,xeroTenantId:a,selectedContactId:n}=e;return t&&"authorized"===r&&!!a&&!!n}],682e3)},145420,e=>{var t=e.i(511667),r=e.i(21557),a=e.i(974261);e.s(["f",0,e=>{let{show:n}=(0,r.f)(),i=e=>n({content:e.message,severity:"error"}),[s]=(0,t.f)(`/account/${e}`,{queryKey:`${e}-account-create`,method:"POST",baseUrl:a.M,onError:i}),[l]=(0,t.f)(`/account/${e}/:accountId`,{queryKey:`${e}-account-update`,method:"PUT",baseUrl:a.M,onError:i});return{create:s,update:l}}])},510447,e=>{var t=e.i(191788),r=e.i(185242);let a=[],n={},i={},s=e=>e.length?[...new Set(e)].sort((e,t)=>e-t).join(","):null;e.s(["f",0,function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,o=(0,t.useMemo)(()=>s(e),[e]),u=(0,t.useMemo)(()=>s(l),[l]),c=(0,t.useMemo)(()=>({ids:o,accountIds:u}),[o,u]),{data:d,refetch:f}=(0,r.f)("/user/actions",{queryKey:`user-actions-${o??""}-${u??""}`,params:c,skip:!o&&!u}),m=d?.users??n,y=d?.accounts??i,$=(0,t.useCallback)(e=>m[e]?.editDetails,[m]),h=(0,t.useCallback)(e=>m[e]?.editEmail,[m]),p=(0,t.useCallback)(e=>$(e)?.allowed===!0,[$]);return{detailsOf:$,emailOf:h,mayEditDetails:p,mayEditLink:(0,t.useCallback)((e,t)=>null!=t&&m[e]?.editLink[t]?.allowed===!0,[m]),mayAddUser:(0,t.useCallback)((e,t)=>{let r=y[e]?.addUser;return!!r&&(t?r[t]?.allowed===!0:Object.values(r).some(e=>{let{allowed:t}=e;return t}))},[y]),refetch:f}}])},884288,e=>{var t=e.i(191788),r=e.i(511667),a=e.i(21557),n=e.i(974261),i=e.i(220303);let s=e=>void 0===e?void 0:e||null,l=e=>({position:e.position,isContact:"yes"===e.isContact,modules:e.modules,locationIds:e.location??void 0}),o=e=>({nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email,phone:e.phone,invoiceThreshold:s(e.invoiceThreshold),quoteThreshold:s(e.quoteThreshold)});e.s(["f",0,function(){let{failurePrefix:e=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{show:s}=(0,a.f)(),u=t=>{s({content:`${e}${t instanceof i.Q&&t.status<500?t.message:"The user could not be saved"}`,severity:t instanceof i.Q&&403===t.status?"warning":"error"})},[c]=(0,r.f)("/user",{queryKey:"user-add",method:"POST",baseUrl:n.M,onError:u}),[d]=(0,r.f)("/user/:userId",{queryKey:"user-edit",method:"PUT",baseUrl:n.M,onError:u}),f=(0,t.useCallback)(async e=>!!await c({body:e}),[c]),m=(0,t.useCallback)(async(e,t)=>!!await d({pathParams:{userId:e},body:t}),[d]),y=(0,t.useCallback)(e=>e.id?m(e.id,{...o(e),status:e.accountUserId?void 0:e.status,...e.accountUserId&&{link:{...l(e),id:e.accountUserId,role:e.role?.value,status:e.status}}}):f({...o(e),...l(e),accountId:e.accountId,role:e.role?.value||"user",status:e.status||"active"}),[f,m]);return{addUser:f,editUser:m,saveUser:y}}],884288)},188811,e=>{var t=e.i(511667),r=e.i(974261),a=e.i(21557);e.s(["f",0,()=>{let{show:e}=(0,a.f)();return(0,t.f)("/xero/push-contact",{queryKey:"xero-push-contact",method:"POST",baseUrl:r.M,onCompleted:t=>{if(!t?.updated)return;let r=Array.isArray(t.changed)?t.changed:[];e({content:r.length?`Xero contact updated: ${r.join(", ")}`:"Xero contact updated.",severity:"success"})},onError:t=>{e({content:`Saved, but the Xero contact was not updated: ${t.message}`,severity:"error"})}})}])},991063,333513,e=>{let t=e=>{let{meta:t,xeroTenantId:r}=e,a=t?.xeroContactId;if(!a)return null;let n=t?.xeroAssignedCompanyId;return n&&n!==r?null:{value:a,label:t?.xeroContactName||a}};e.s(["f",0,t],991063);var r=e.i(191788);e.s(["f",0,(e,a,n)=>{let i=(0,r.useRef)(void 0),s=!!e.formState.dirtyFields.xeroContact;(0,r.useEffect)(()=>{if(!n||i.current===n)return;let r=i.current;if(i.current=n,s&&!r)return;let l=t({meta:a,xeroTenantId:n})??void 0,o=e.getValues("xeroContact");(l?.value!==o?.value||l?.label!==o?.label)&&e.setValue("xeroContact",l)},[e,s,a,n])}],333513)},684779,e=>{var t=e.i(553875);e.s(["f",()=>t.f])},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},974266,e=>{var t=e.i(76381);e.s(["f",()=>t.f])},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},405167,e=>{var t=e.i(471973);e.s(["f",()=>t.f])},658524,524057,255419,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var r=e.i(231637);e.s(["f",()=>r.f],524057),e.s(["f",0,{disabled:!1}],255419)},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])},668943,e=>{var t=e.i(391398),r=e.i(191788),a=e.i(203828),n=e.i(432171),i=e.i(598536),s=e.i(813843),l=e.i(115871),o=e.i(280445),u=e.i(424894),c=e.i(422411),d=e.i(684779),f=e.i(974266),m=e.i(821627),y=e.i(917563),$=e.i(21557),h=e.i(824451),p=e.i(356119),v=e.i(877341),b=e.i(851123);let _=()=>{let[e,a]=(0,r.useState)(""),{control:n,formState:{errors:i}}=(0,c.M)(),[l,{loading:o,data:{items:u}={items:[]}}]=(0,v.f)(b.v,{variables:{q:""!==e?`%${e}%`:null,limit:50,offset:0}});return(0,t.jsxs)(s.f,{width:"100%",spacing:1,children:[(0,t.jsx)(p.f,{variant:"h6",textAlign:"center",children:"Customer type"}),(0,t.jsx)(c.e,{name:"clientType",control:n,defaultValue:null,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(h.f,{variant:"standard",color:"secondary",label:"Customer type",options:u,onSearchChange:a,onOpen:()=>l(),loading:o,value:r,onChange:(e,t)=>n(t),error:!!i?.clientType,helperText:i?.clientType?.message})}})]})};e.i(251680);var g=e.i(353807),q=e.i(373889),I=e.i(863160),x=e.i(426778),w=e.i(955314),S=e.i(884750);let C=()=>(0,x.x)().when("$contactEditable",{is:!0,then:e=>e.required(),otherwise:e=>e.nullable()}),j=(0,x.t)().shape({managerSelected:(0,S.f)("Account manager is a required field"),name:(0,x.x)().required(),website:(0,x.x)().nullable(),companyNumber:(0,x.x)().nullable(),vatId:(0,x.x)().nullable(),status:(0,x.x)().oneOf(["active","inactive"]).required(),userId:(0,x.H)().nullable(),email:(0,x.x)().when("$emailEditable",{is:!0,then:e=>e.required().test("xero-acceptable",w.z,w.M),otherwise:e=>e.strip()}),nameFirst:C(),nameLast:C(),phone:(0,x.x)(),statusUser:C(),clientType:(0,x.t)({label:(0,x.x)().required(),value:(0,x.H)().required()}).nullable(),xeroContact:(0,x.t)({label:(0,x.x)(),value:(0,x.x)()}).nullable()});var A=e.i(894842),T=e.i(510447),k=e.i(498681),F=e.i(114277),L=e.i(682e3),U=e.i(884288),G=e.i(834862),M=e.i(188811),P=e.i(991063),E=e.i(472083);let V=[E.f.OWNER,E.f.MANAGER],N=(e,t)=>(e.user?.id??0)-(t.user?.id??0);var O=e.i(333513),R=e.i(284642),z=e.i(145420);let W="/dashboard/customers/",X=[],B=e=>{let n,{account:i,loading:o=!1,setLoading:h}=e,p=(0,$.f)(),{can:v}=(0,k.f)(),{authStatus:b,tenantId:x}=(0,G.f)(),w=!!i?.id,S=(n=[...i?.contactUsers??[]].sort(N)).find(e=>V.includes(e.role??""))??n[0],C=v("linkedAccount.administer"),E=S?.user?.id??null,B=i?.id??null,Z=(0,r.useMemo)(()=>w&&E?[E]:X,[E,w]),D=(0,r.useMemo)(()=>w&&!E&&B?[B]:X,[B,E,w]),{detailsOf:H,emailOf:Q,mayAddUser:J}=(0,T.f)(Z,D),Y=E?H(E):void 0,ee=!w||(E?Y?.allowed===!0:!!B&&J(B,"owner")),et=E?Q(E):void 0,er=ee&&(!E||et?.allowed===!0),ea={...i,managerSelected:i?.managerSelected?{label:i.managerSelected.label,value:i.managerSelected.value}:void 0,nameFirst:S?.user?.nameFirst||"",nameLast:S?.user?.nameLast||"",email:S?.user?.email||"",phone:S?.user?.phone||"",statusUser:S?.user?.status||"active",userId:S?.user?.id||null,contactUser:"true",status:i?.status==="inactive"?"inactive":"active",clientType:i?.clientType?{label:i?.clientType?.label,value:i?.clientType?.id}:null,xeroContact:(0,P.f)({meta:i?.meta,xeroTenantId:x})??void 0},en=(0,r.useMemo)(()=>"authorized"===b&&C,[C,b]),ei=(0,c.G)({defaultValues:ea,resolver:(0,u.yupResolver)(j),context:{administers:C,contactEditable:ee,emailEditable:er},mode:"onChange",reValidateMode:"onChange"});(0,O.f)(ei,i?.meta,x);let{create:es,update:el}=(0,z.f)("customer"),{addUser:eo,editUser:eu}=(0,U.f)({failurePrefix:"The customer was saved, but its contact was not: "}),[ec,{isLoading:ed}]=(0,M.f)(),ef=async e=>{try{h(!0);let t=(e=>{let{form:t,customerId:r,xeroAuthStatus:a,xeroTenantId:n,editMode:i,administers:s,canLinkXero:l}=e;if("authorized"===a&&!n&&t.xeroContact?.value)throw Error("The connected Xero organisation could not be resolved, so the selected contact was not saved. Reload the page and try again.");let o={managerId:s?t.managerSelected?.value:void 0,name:t.name,website:t.website||null,companyNumber:t.companyNumber||null,vatId:t.vatId||null,status:t.status,...t.clientType?{clientTypeId:t.clientType.value}:{},...(0,F.f)({canLinkXero:l,xeroContact:t.xeroContact,xeroAuthStatus:a,xeroTenantId:n})},u={nameFirst:t.nameFirst,nameLast:t.nameLast,email:t.email,phone:t.phone||null,status:t.statusUser};return i?{type:"update",contact:u,contactUserId:t.userId??null,pushXeroContact:(0,L.f)({editMode:i,xeroAuthStatus:a,xeroTenantId:n,selectedContactId:t.xeroContact?.value}),customerId:r,details:o}:{type:"create",body:{...o,contact:u}}})({form:e,xeroAuthStatus:b,xeroTenantId:x,editMode:w,administers:C,canLinkXero:en,customerId:i?.id});if("create"===t.type){let e=await es({body:t.body});e&&a.default.push(`${W}view?id=${e.id}`);return}let{customerId:r,details:n,contact:s,contactUserId:l}=t;if(!await el({pathParams:{accountId:r},body:n}))return;ee&&null!=l?await eu(l,s):ee&&await eo({...s,accountId:r,role:"owner",isContact:!0}),en&&t.pushXeroContact&&await ec({body:{accountId:r}}),a.default.push(`${W}view?id=${r}`)}catch(e){p.show({content:`Error: ${e instanceof Error?e.message:"Unknown error"}`,severity:"error"})}finally{h(!1)}};return(0,t.jsxs)(c.p,{...ei,children:[(0,t.jsx)(d.f,{open:o||ed,sx:{zIndex:1e5},children:(0,t.jsx)(f.f,{color:"secondary"})}),(0,t.jsx)("form",{onSubmit:ei.handleSubmit(ef,e=>{Object.keys(e).forEach(t=>{let r=e[t],a="object"==typeof r&&r&&"message"in r?r.message:"Invalid field";p.show({content:`${t}: ${a}`,severity:"error"})})}),children:(0,t.jsxs)(K,{alignItems:"center",spacing:4,px:4,children:[(0,t.jsx)(l.f,{variant:"h5",children:"Customers - Manage"}),(0,t.jsxs)(s.f,{width:"100%",spacing:2,children:[(0,t.jsx)(q.f,{type:"customer"}),(0,t.jsx)(I.f,{}),(0,t.jsx)(_,{}),(0,t.jsx)(R.f,{displayXero:en}),(ee||E)&&(0,t.jsx)(g.f,{disabled:!ee,refusal:(0,A.f)(Y),emailDisabled:!er,emailRefusal:(0,A.f)(et)})]}),(0,t.jsx)(y.f,{sx:{display:"flex",justifyContent:"center",mt:3},children:(0,t.jsx)(m.f,{type:"submit",variant:"contained",color:"secondary",disabled:o||ed,children:w?"Update customer":"Create customer"})})]})})]})},K=(0,o.f)(s.f)(e=>{let{theme:t}=e;return{width:"100%",maxWidth:800,margin:"0 auto",color:t.palette.text.primary}}),Z=()=>{let{query:e}=(0,a.useRouter)(),[s,l]=(0,r.useState)(!1),{loading:o,data:{customer:u}={customer:null}}=(0,n.t)(i.t,{skip:!e.id,variables:{id:e.id}});return(!o||!e.id)&&(0,t.jsx)(B,{account:u?.id?u:void 0,loading:s,setLoading:l})};var D=e.i(293965);let H=()=>(0,t.jsx)(Z,{});H.getLayout=function(e){return(0,t.jsx)(D.f,{children:e})},e.s(["default",0,H],668943)}],136087,(e,t,r)=>{let a="/dashboard/customers/manage";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(668943)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);