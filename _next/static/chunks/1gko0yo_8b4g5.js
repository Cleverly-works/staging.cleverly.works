(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,824451,e=>{var t=e.i(391398),r=e.i(800884),a=e.i(76381),n=e.i(515523),i=e.i(652148),s=e.i(191788);e.s(["f",0,e=>{let{color:o,variant:l,label:c,placeholder:u,error:d,helperText:m,size:f,loading:$,onSearchChange:_,onAddNew:y,textFieldProps:p={},disableClearable:I,onChange:h,onInputChange:q,...g}=e,[b,v]=(0,s.useState)(""),A=(0,s.useRef)("input");return(0,s.useEffect)(()=>{if(!_)return;if("reset"===A.current||"clear"===A.current)return void _(b,A.current);let e=setTimeout(()=>{_(b,A.current)},500);return()=>clearTimeout(e)},[b,_]),(0,t.jsx)(n.f,{disableClearable:I,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:$,filterOptions:(e,t)=>{let r=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return y&&""!==t.inputValue.trim()&&(r.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||r.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),r},onInputChange:(e,t,r)=>{A.current=r,v(t),q?.(e,t,r)},onChange:async(e,t,r)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&y){let a=t.value,n=await y(a);if(!n)return;h?.(e,n,r),v("");return}h?.(e,t,r)},renderTags:(e,a)=>e.map((e,n)=>(0,t.jsx)(r.f,{size:"small",label:e.label,...a({index:n})})),renderOption:(e,r,a)=>{let n=b||"",i="string"==typeof r?r:r?.label||"";if("object"==typeof r&&"isAddNew"in r&&r.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:i})});let s=((e,t)=>{let r=t?.trim()||"";if(!r||!e||r.length<3)return e;let a=[],n=r.toLowerCase(),i=e.toLowerCase(),s=0,o=i.indexOf(n);for(;-1!==o;)o>s&&a.push({text:e.substring(s,o),highlight:!1}),a.push({text:e.substring(o,o+r.length),highlight:!0}),s=o+r.length,o=i.indexOf(n,s);return s<e.length&&a.push({text:e.substring(s),highlight:!1}),a})(i,n);return(0,t.jsx)("li",{...e,children:Array.isArray(s)?(0,t.jsx)("span",{children:s.map((e,r)=>e.highlight?(0,t.jsx)("strong",{children:e.text},r):(0,t.jsx)("span",{children:e.text},r))}):i})},renderInput:e=>(0,t.jsx)(i.f,{label:c,placeholder:u,color:o,variant:l,error:d,helperText:m,...e,...p,inputProps:{...e.inputProps,...p.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...p.InputLabelProps||{}},InputProps:{...e.InputProps,...p.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[$?(0,t.jsx)(a.f,{color:"inherit",size:20}):null,p.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...g})}])},851123,e=>{var t=e.i(159080);let r=t.f`
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
`,o=t.f`
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
`,l=t.f`
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
`,c=t.f`
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
`;let u=t.f`
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
`,m=t.f`
  query GetAccountsForSelect($where: Account_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,f=t.f`
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
`,$=t.f`
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
`,_=t.f`
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
`,y=t.f`
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
`,I=t.f`
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
`,h=t.f`
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
`,q=t.f`
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
`,b=t.f`
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
`,v=t.f`
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
`,A=t.f`
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
`,x=t.f`
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
`,w=t.f`
  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
    }
  }
`,C=t.f`
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
`,U=t.f`
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
`,j=t.f`
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
`,L=t.f`
  query GetAssignableTagsForSelect($q: String!, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "tags" }
        _or: [
          { meta: { _is_null: true } }
          {
            _not: {
              _or: [
                { meta: { _contains: { isSystemTag: true } } }
                { meta: { _has_key: "systemTagKey" } }
              ]
            }
          }
        ]
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
      meta
    }
  }
`;e.s(["V",0,m,"M",0,f,"J",0,j,"c",0,p,"m",0,l,"_",0,i,"W",0,s,"B",0,o,"a",0,L,"v",0,A,"S",0,U,"Z",0,C,"X",0,r,"D",0,b,"Y",0,u,"g",0,I,"b",0,_,"h",0,$,"o",0,y,"j",0,S,"O",0,q,"d",0,g,"T",0,h,"U",0,w,"i",0,a,"e",0,n,"z",0,v,"A",0,x,"p",0,d,"P",0,c])},399942,e=>{var t=e.i(39059);let r=async function(e,r){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{let{data:{users:n}}=await e.query({query:t.e,variables:{email:r}});if(n&&n.length>0)return!!a&&n[0];return!a||null}catch(e){return!0}};e.s(["f",0,r])},39059,e=>{var t=e.i(159080);let r=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,a=t.f`
  mutation UpdateUser(
    $id: Int!
    $accountUserId: Int!
    $accountUserChanges: Account_User_set_input
    $accountUserModules: jsonb = {}
    $changes: User_set_input
    $updateAccountUser: Boolean!
  ) {
    update_Account_User_by_pk(
      pk_columns: { id: $accountUserId }
      _set: $accountUserChanges
      _append: { modules: $accountUserModules }
    ) @include(if: $updateAccountUser) {
      id
    }
    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,n=t.f`
  query GetUsers(
    $accountId: Int
    $accountType: String
    $date: timestamptz
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: User_order_by!
    $status: String
  ) {
    users: User(
      limit: $limit
      offset: $offset
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [
          { email: { _ilike: $q } }
          { nameFirst: { _ilike: $q } }
          { nameLast: { _ilike: $q } }
        ]
        status: { _eq: $status }
      }
      order_by: [$orderBy]
    ) {
      id
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
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
        userLocations: User_Account_Locations {
          accountLocationId
        }
      }
    }
    meta: User_aggregate(
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        status: { _eq: $status }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  query GetUser($id: Int!) {
    user: User_by_pk(id: $id) {
      id
      fullName
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
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
`,s=t.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,o=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,l=t.f`
  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {
    createGoogleToken(code: $code, id: $id, type: $type) {
      success
      tokens
      error
    }
  }
`,c=t.f`
  mutation GenerateMSURL($type: String!, $id: Int!) {
    genenrateMSURL(id: $id, type: $type) {
      url
    }
  }
`,u=t.f`
  mutation signoutMS($id: Int!, $type: String!, $email: String!) {
    signoutMS(id: $id, type: $type, email: $email) {
      error
      msId
      success
    }
  }
`,d=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,m=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,f=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,$=t.f`
  mutation UpdateAccountUserByUserIdAccoutId(
    $userId: Int!
    $accountId: Int!
    $changes: Account_User_set_input!
  ) {
    update_Account_User(
      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }
      _set: $changes
    ) {
      returning {
        id
      }
    }
  }
`,_=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,y=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,p=t.f`
  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {
    location: Location(
      offset: $offset
      limit: $limit
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      id
      name
      accountLocations: Account_Locations {
        id
      }
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
    }
    meta: Location_aggregate(
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,I=t.f`
  mutation InsertUserAccountLocations(
    $accountUserId: Int!
    $objects: [User_Account_Location_insert_input!]!
  ) {
    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_User_Account_Location(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`,h=t.f`
  mutation ReplaceAccountRestrictedLocations(
    $accountUserId: Int!
    $objects: [Location_Account_User_insert_input!]!
  ) {
    delete_Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_Location_Account_User(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`;e.s(["e",0,s,"d",0,c,"u",0,p,"q",0,d,"_",0,f,"x",0,i,"k",0,n,"f",0,m,"U",0,I,"I",0,r,"s",0,h,"c",0,l,"S",0,u,"o",0,_,"l",0,$,"V",0,a,"J",0,y,"W",0,o])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},284642,e=>{var t=e.i(391398),r=e.i(813843),a=e.i(422411),n=e.i(356119),i=e.i(824451),s=e.i(191788),o=e.i(834862),l=e.i(886779);let c=e=>{let{control:r,...c}=e,{authStatus:u,tenantId:d,getXeroContacts:m}=(0,o.f)(),[f,$]=(0,s.useState)(!1),[_,y]=(0,s.useState)([]),[p,I]=(0,s.useState)(!1),h=(0,s.useRef)(null),q=(0,s.useRef)(0),g=(0,s.useCallback)(async e=>{if("authorized"!==u||h.current===e)return;h.current=e;let t=++q.current;$(!0);try{let r=await m(e);if(t!==q.current)return;if(!r){h.current=null;return}y(r.reduce((e,t)=>(t.contactID&&t.name&&e.push({label:t.name,value:t.contactID}),e),[]))}finally{t===q.current&&$(!1)}},[m,u]);(0,s.useEffect)(()=>{q.current+=1,h.current=null,y([]),$(!1)},[d]);let b=(0,s.useCallback)((e,t)=>{p&&"reset"!==t&&g(e)},[g,p]),v=(0,s.useCallback)(()=>{I(!0),g("")},[g]),A=(0,s.useCallback)(()=>{I(!1),h.current=null},[]);return(0,t.jsx)(a.e,{control:r,defaultValue:null,name:"xeroContact",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(i.f,{loading:f,variant:"standard",color:"secondary",label:"Xero contact",value:r,options:_,filterOptions:e=>e,onChange:(e,t)=>a(t),open:p,onOpen:v,onClose:A,onSearchChange:b,getOptionLabel:e=>"string"==typeof e?e:e?.label??"",renderOption:(e,r)=>(0,t.jsx)("li",{...e,children:(0,t.jsxs)(l.f,{children:[(0,t.jsx)(n.f,{variant:"body2",children:r.label}),(0,t.jsx)(n.f,{variant:"caption",color:"text.secondary",children:r.value})]})}),...c})}})};e.s(["f",0,e=>{let{displayXero:i=!1}=e,{control:s}=(0,a.M)();return i?(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(n.f,{variant:"h6",textAlign:"center",children:"Xero user sync"}),(0,t.jsx)(c,{control:s,variant:"standard"})]}):null}],284642)},251680,353807,863160,373889,955314,93284,682e3,991063,333513,e=>{var t=e.i(391398),r=e.i(813843),a=e.i(422411),n=e.i(164056),i=e.i(658524),s=e.i(159974),o=e.i(589200),l=e.i(524057),c=e.i(356119),u=e.i(207646),d=e.i(594301),m=e.i(948574);e.s(["f",0,()=>{let{control:e,formState:{errors:f}}=(0,a.M)(),{hasRole:$}=(0,d.f)();return(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(c.f,{variant:"h6",textAlign:"center",children:"Contact user"}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"nameFirst",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"First name",value:r,onChange:a,error:!!f?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"nameLast",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Last name",value:r,onChange:a,error:!!f?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"email",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:r,onChange:a,error:!!f?.email,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"phone",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Mobile",value:r,onChange:a,error:!!f?.phone,fullWidth:!0})}})]}),$([...m.x,...m.H,...m.z,...m.Q])&&(0,t.jsx)(a.e,{name:"statusUser",control:e,defaultValue:"active",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsxs)(o.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(l.f,{children:"Status"}),(0,t.jsx)(i.f,{value:r,onChange:a,error:!!f?.status,children:u.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(a.e,{name:"userId",control:e,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})}),(0,t.jsx)(a.e,{name:"contactUser",control:e,defaultValue:!0,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})}],353807),e.s(["f",0,()=>{let{control:e,formState:{errors:d}}=(0,a.M)();return(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(c.f,{variant:"h6",textAlign:"center",children:"Company"}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"name",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Name",value:r,onChange:a,error:!!d?.name,helperText:d?.name?.message,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"website",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Website",value:r,onChange:a,error:!!d?.website,helperText:d?.website?.message,fullWidth:!0})}})]}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"companyNumber",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Company number",value:r,onChange:a,error:!!d?.companyNumber,helperText:d?.companyNumber?.message,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"vatId",control:e,defaultValue:"",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"VAT ID",value:r,onChange:a,error:!!d?.vatId,helperText:d?.vatId?.message,fullWidth:!0})}})]}),(0,t.jsx)(a.e,{name:"status",control:e,defaultValue:"active",render:e=>{let{value:r,onChange:a}=e;return(0,t.jsxs)(o.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(l.f,{children:"Status"}),(0,t.jsx)(i.f,{value:r,onChange:a,error:!!d?.status,children:u.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))})]})}})]})}],863160);var f=e.i(191788),$=e.i(877341),_=e.i(824451),y=e.i(851123);e.s(["f",0,e=>{let{type:n}=e,{user:i}=(0,d.f)(),[s,o]=(0,f.useState)(""),{control:l,formState:{errors:u},watch:m}=(0,a.M)(),[p,{loading:I,data:{items:h}={items:[]}}]=(0,$.f)(y.P,{variables:{q:""!==s?`%${s}%`:null,accountId:i?.adminId,limit:50,offset:0}}),q=m("account")||{};return q?.type==="superadmin"?null:(0,t.jsxs)(r.f,{width:"100%",spacing:1,children:[(0,t.jsx)(c.f,{variant:"h6",textAlign:"center",children:"Manager"}),(0,t.jsx)(a.e,{name:"managerSelected",control:l,defaultValue:null,render:e=>{let{value:r,onChange:a}=e;return(0,t.jsx)(_.f,{variant:"standard",color:"secondary",label:"supplier"===n?"Assigned to":"Account manager",options:h,onSearchChange:o,onOpen:()=>p(),loading:I,value:r,onChange:(e,t)=>a(t),error:!!u?.managerSelected,helperText:u?.managerSelected?.message})}})]})}],373889),e.s([],251680);let p=/^[^\s@,;:<>()[\]\\"]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;e.s(["z",0,"Xero will not accept this email address. It must be a valid address of at most 255 characters, with no accented or non-ASCII characters.","M",0,e=>{let t=(e??"").trim();return!t||!(t.length>255)&&!!(e=>{for(let t=0;t<e.length;t++){let r=e.codePointAt(t);if(void 0===r||r<32||r>126)return!1}return!0})(t)&&p.test(t)}],955314),e.s(["f",0,e=>{let{xeroContact:t,xeroAuthStatus:r,xeroTenantId:a,storedTenantId:n}=e;if("authorized"!==r||!a||n&&n!==a&&!t?.value)return{};let i=t?.value||null;return{xeroContactId:i,xeroContactName:i&&t?.label||null,xeroAssignedCompanyId:i?a:null}}],93284),e.s(["f",0,e=>{let{editMode:t,xeroAuthStatus:r,xeroTenantId:a,selectedContactId:n}=e;return t&&"authorized"===r&&!!a&&!!n}],682e3);let I=e=>{let{meta:t,xeroTenantId:r}=e,a=t?.xeroContactId;if(!a)return null;let n=t?.xeroAssignedCompanyId;return n&&n!==r?null:{value:a,label:t?.xeroContactName||a}};e.s(["f",0,I],991063),e.s(["f",0,(e,t,r)=>{let a=(0,f.useRef)(void 0),n=!!e.formState.dirtyFields.xeroContact;(0,f.useEffect)(()=>{if(!r||a.current===r)return;let i=a.current;if(a.current=r,n&&!i)return;let s=I({meta:t,xeroTenantId:r})??void 0,o=e.getValues("xeroContact");(s?.value!==o?.value||s?.label!==o?.label)&&e.setValue("xeroContact",s)},[e,n,t,r])}],333513)},188811,e=>{var t=e.i(511667),r=e.i(974261),a=e.i(21557);e.s(["f",0,()=>{let{show:e}=(0,a.f)();return(0,t.f)("/xero/push-contact",{queryKey:"xero-push-contact",method:"POST",baseUrl:r.M,onCompleted:t=>{if(!t?.updated)return;let r=Array.isArray(t.changed)?t.changed:[];e({content:r.length?`Xero contact updated: ${r.join(", ")}`:"Xero contact updated.",severity:"success"})},onError:t=>{e({content:`Saved, but the Xero contact was not updated: ${t.message}`,severity:"error"})}})}])},684779,e=>{var t=e.i(553875);e.s(["f",()=>t.f])},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},974266,e=>{var t=e.i(76381);e.s(["f",()=>t.f])},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var r=e.i(231637);e.s(["f",()=>r.f],524057)},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])}])})();