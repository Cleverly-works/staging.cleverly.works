(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[824451,e=>{var t=e.i(391398),a=e.i(800884),r=e.i(76381),i=e.i(515523),n=e.i(652148),s=e.i(191788);e.s(["f",0,e=>{let{color:l,variant:o,label:u,placeholder:d,error:c,helperText:m,size:f,loading:p,onSearchChange:$,onAddNew:g,textFieldProps:y={},disableClearable:_,onChange:h,onInputChange:b,...v}=e,[q,I]=(0,s.useState)(""),x=(0,s.useRef)("input");return(0,s.useEffect)(()=>{if(!$)return;if("reset"===x.current||"clear"===x.current)return void $(q,x.current);let e=setTimeout(()=>{$(q,x.current)},500);return()=>clearTimeout(e)},[q,$]),(0,t.jsx)(i.f,{disableClearable:_,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:p,filterOptions:(e,t)=>{let a=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return g&&""!==t.inputValue.trim()&&(a.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||a.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),a},onInputChange:(e,t,a)=>{x.current=a,I(t),b?.(e,t,a)},onChange:async(e,t,a)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&g){let r=t.value,i=await g(r);if(!i)return;h?.(e,i,a),I("");return}h?.(e,t,a)},renderTags:(e,r)=>e.map((e,i)=>(0,t.jsx)(a.f,{size:"small",label:e.label,...r({index:i})})),renderOption:(e,a,r)=>{let i=q||"",n="string"==typeof a?a:a?.label||"";if("object"==typeof a&&"isAddNew"in a&&a.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:n})});let s=((e,t)=>{let a=t?.trim()||"";if(!a||!e||a.length<3)return e;let r=[],i=a.toLowerCase(),n=e.toLowerCase(),s=0,l=n.indexOf(i);for(;-1!==l;)l>s&&r.push({text:e.substring(s,l),highlight:!1}),r.push({text:e.substring(l,l+a.length),highlight:!0}),s=l+a.length,l=n.indexOf(i,s);return s<e.length&&r.push({text:e.substring(s),highlight:!1}),r})(n,i);return(0,t.jsx)("li",{...e,children:Array.isArray(s)?(0,t.jsx)("span",{children:s.map((e,a)=>e.highlight?(0,t.jsx)("strong",{children:e.text},a):(0,t.jsx)("span",{children:e.text},a))}):n})},renderInput:e=>(0,t.jsx)(n.f,{label:u,placeholder:d,color:l,variant:o,error:c,helperText:m,...e,...y,inputProps:{...e.inputProps,...y.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...y.InputLabelProps||{}},InputProps:{...e.InputProps,...y.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[p?(0,t.jsx)(r.f,{color:"inherit",size:20}):null,y.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...v})}])},851123,e=>{var t=e.i(159080);let a=t.f`
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
`,r=t.f`
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
`,i=t.f`
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
`,n=t.f`
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
`;let d=t.f`
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
`;let c=t.f`
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
`,p=t.f`
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
`,g=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,y=t.f`
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
`,_=t.f`
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
`,b=t.f`
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
`,v=t.f`
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
`,A=t.f`
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
`,j=t.f`
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
`,L=t.f`
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
`;e.s(["V",0,m,"M",0,f,"J",0,T,"c",0,y,"m",0,o,"_",0,n,"W",0,s,"B",0,l,"a",0,L,"v",0,x,"S",0,j,"Z",0,C,"X",0,a,"D",0,q,"Y",0,d,"g",0,_,"b",0,$,"h",0,p,"o",0,g,"j",0,S,"O",0,b,"d",0,v,"T",0,h,"U",0,w,"i",0,r,"e",0,i,"z",0,I,"A",0,A,"p",0,c,"P",0,u])},374979,e=>{var t=e.i(159080);let a=t.f`
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
      services: ServiceSchedule(
        where: { entity: { _eq: "Supplier" }, status: { _eq: "active" } }
        distinct_on: serviceId
        order_by: { serviceId: asc }
      ) {
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
`,r=t.f`
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
      services: ServiceSchedule(
        where: { entity: { _eq: "Supplier" } }
        order_by: { createdAt: asc }
        limit: 1
      ) {
        serviceId
        createdAt
      }
    }
    compliance: Compliance(
      where: { supplierId: { _eq: $id } }
      order_by: { createdAt: asc }
      limit: 1
    ) {
      id
      createdAt
    }
  }
`,i=t.f`
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
`;t.f`
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
`,s=t.f`
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
`,l=t.f`
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
`,e.s(["q",0,s,"Z",0,l,"C",0,r,"o",0,a,"d",0,n,"Y",0,i])},536422,e=>{e.s(["f",0,e=>"string"==typeof e&&""!==e.trim()&&e.toLowerCase().replace("gb","").length>=9])},228526,e=>{e.s(["G",0,[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}],"h",0,[{label:"Sole trader",value:"soleTrader"},{label:"Limited company",value:"limitedCompany"},{label:"Partnership",value:"partnership"},{label:"LLP",value:"llp"},{label:"PLC",value:"plc"}]])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},284642,e=>{var t=e.i(391398),a=e.i(813843),r=e.i(422411),i=e.i(356119),n=e.i(824451),s=e.i(191788),l=e.i(834862),o=e.i(886779);let u=e=>{let{control:a,...u}=e,{authStatus:d,tenantId:c,getXeroContacts:m}=(0,l.f)(),[f,p]=(0,s.useState)(!1),[$,g]=(0,s.useState)([]),[y,_]=(0,s.useState)(!1),h=(0,s.useRef)(null),b=(0,s.useRef)(0),v=(0,s.useCallback)(async e=>{if("authorized"!==d||h.current===e)return;h.current=e;let t=++b.current;p(!0);try{let a=await m(e);if(t!==b.current)return;if(!a){h.current=null;return}g(a.reduce((e,t)=>(t.contactID&&t.name&&e.push({label:t.name,value:t.contactID}),e),[]))}finally{t===b.current&&p(!1)}},[m,d]);(0,s.useEffect)(()=>{b.current+=1,h.current=null,g([]),p(!1)},[c]);let q=(0,s.useCallback)((e,t)=>{y&&"reset"!==t&&v(e)},[v,y]),I=(0,s.useCallback)(()=>{_(!0),v("")},[v]),x=(0,s.useCallback)(()=>{_(!1),h.current=null},[]);return(0,t.jsx)(r.e,{control:a,defaultValue:null,name:"xeroContact",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{loading:f,variant:"standard",color:"secondary",label:"Xero contact",value:a,options:$,filterOptions:e=>e,onChange:(e,t)=>r(t),open:y,onOpen:I,onClose:x,onSearchChange:q,getOptionLabel:e=>"string"==typeof e?e:e?.label??"",renderOption:(e,a)=>(0,t.jsx)("li",{...e,children:(0,t.jsxs)(o.f,{children:[(0,t.jsx)(i.f,{variant:"body2",children:a.label}),(0,t.jsx)(i.f,{variant:"caption",color:"text.secondary",children:a.value})]})}),...u})}})};e.s(["f",0,e=>{let{displayXero:n=!1}=e,{control:s}=(0,r.M)();return n?(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(i.f,{variant:"h6",textAlign:"center",children:"Xero user sync"}),(0,t.jsx)(u,{control:s,variant:"standard"})]}):null}],284642)},251680,353807,863160,373889,955314,884750,114277,682e3,e=>{var t=e.i(391398),a=e.i(813843),r=e.i(422411),i=e.i(164056),n=e.i(658524),s=e.i(159974),l=e.i(589200),o=e.i(524057),u=e.i(356119),d=e.i(207646),c=e.i(255419);e.s(["f",0,e=>{let{disabled:m=!1,refusal:f,emailDisabled:p=!1,emailRefusal:$}=e,{control:g,formState:{errors:y}}=(0,r.M)(),_=m?void 0:$;return(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Contact user"}),f&&(0,t.jsx)(u.f,{variant:"body2",color:"text.secondary",textAlign:"center",children:f}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"nameFirst",control:g,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"First name",value:a,onChange:r,disabled:m,error:!!y?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"nameLast",control:g,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Last name",value:a,onChange:r,disabled:m,error:!!y?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"email",control:g,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:a,onChange:r,disabled:m||p,error:!!y?.email,helperText:_,FormHelperTextProps:c.f,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"phone",control:g,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Mobile",value:a,onChange:r,disabled:m,error:!!y?.phone,fullWidth:!0})}})]}),(0,t.jsx)(r.e,{name:"statusUser",control:g,defaultValue:"active",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsxs)(l.f,{variant:"standard",color:"secondary",fullWidth:!0,disabled:m,children:[(0,t.jsx)(o.f,{children:"Status"}),(0,t.jsx)(n.f,{color:"secondary",value:a,onChange:r,error:!!y?.status,children:d.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(r.e,{name:"userId",control:g,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})}),(0,t.jsx)(r.e,{name:"contactUser",control:g,defaultValue:!0,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})}],353807);var m=e.i(405167),f=e.i(498681);let p="Only your account manager can change this";e.s(["f",0,()=>{let{control:e,formState:{errors:$}}=(0,r.M)(),{can:g}=(0,f.f)(),y=g("linkedAccount.administer");return(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Company"}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"name",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Name",value:a,onChange:r,error:!!$?.name,helperText:$?.name?.message,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"website",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Website",value:a,onChange:r,error:!!$?.website,helperText:$?.website?.message,fullWidth:!0})}})]}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"companyNumber",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Company number",value:a,onChange:r,error:!!$?.companyNumber,helperText:$?.companyNumber?.message,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"vatId",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"VAT ID",value:a,onChange:r,error:!!$?.vatId,helperText:$?.vatId?.message,fullWidth:!0})}})]}),(0,t.jsx)(r.e,{name:"status",control:e,defaultValue:"active",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsxs)(l.f,{variant:"standard",color:"secondary",fullWidth:!0,disabled:!y,children:[(0,t.jsx)(o.f,{children:"Status"}),(0,t.jsx)(n.f,{value:a,onChange:r,error:!!$?.status,children:d.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))}),!y&&(0,t.jsx)(m.f,{...c.f,children:p})]})}})]})}],863160);var $=e.i(191788),g=e.i(877341),y=e.i(594301),_=e.i(824451),h=e.i(851123);let b={FormHelperTextProps:c.f};e.s(["f",0,e=>{let{type:i}=e,{user:n}=(0,y.f)(),{can:s}=(0,f.f)(),l=s("linkedAccount.administer"),[o,d]=(0,$.useState)(""),{control:c,formState:{errors:m},watch:v}=(0,r.M)(),[q,{loading:I,data:{items:x}={items:[]}}]=(0,g.f)(h.P,{variables:{q:""!==o?`%${o}%`:null,accountId:n?.adminId,limit:50,offset:0}}),A=v("account")||{};return A?.type==="superadmin"?null:(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Manager"}),(0,t.jsx)(r.e,{name:"managerSelected",control:c,defaultValue:null,render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(_.f,{variant:"standard",color:"secondary",label:"supplier"===i?"Assigned to":"Account manager",options:x,onSearchChange:d,onOpen:()=>q(),loading:I,value:a,onChange:(e,t)=>r(t),disabled:!l,textFieldProps:b,error:!!m?.managerSelected,helperText:m?.managerSelected?.message??(l?void 0:p)})}})]})}],373889),e.s([],251680);let v=/^[^\s@,;:<>()[\]\\"]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;e.s(["z",0,"Xero will not accept this email address. It must be a valid address of at most 255 characters, with no accented or non-ASCII characters.","M",0,e=>{let t=(e??"").trim();return!t||!(t.length>255)&&!!(e=>{for(let t=0;t<e.length;t++){let a=e.codePointAt(t);if(void 0===a||a<32||a>126)return!1}return!0})(t)&&v.test(t)}],955314);var q=e.i(426778);e.s(["f",0,e=>(0,q.t)({label:(0,q.x)().required(),value:(0,q.H)().required()}).default(void 0).when("$administers",{is:!0,then:t=>t.required(e),otherwise:e=>e.nullable().optional()})],884750),e.s(["f",0,e=>{let{canLinkXero:t,xeroContact:a,xeroAuthStatus:r,xeroTenantId:i}=e;return t&&"authorized"===r&&i?{xeroContact:a?.value?{id:a.value,name:a.label||a.value}:null}:{}}],114277),e.s(["f",0,e=>{let{editMode:t,xeroAuthStatus:a,xeroTenantId:r,selectedContactId:i}=e;return t&&"authorized"===a&&!!r&&!!i}],682e3)},145420,e=>{var t=e.i(511667),a=e.i(21557),r=e.i(974261);e.s(["f",0,e=>{let{show:i}=(0,a.f)(),n=e=>i({content:e.message,severity:"error"}),[s]=(0,t.f)(`/account/${e}`,{queryKey:`${e}-account-create`,method:"POST",baseUrl:r.M,onError:n}),[l]=(0,t.f)(`/account/${e}/:accountId`,{queryKey:`${e}-account-update`,method:"PUT",baseUrl:r.M,onError:n});return{create:s,update:l}}])},335744,e=>{var t=e.i(391398),a=e.i(813843),r=e.i(422411),i=e.i(824451),n=e.i(164056),s=e.i(356119),l=e.i(228526);e.s(["f",0,()=>{let{control:e,formState:{errors:o}}=(0,r.M)();return(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(s.f,{variant:"h6",textAlign:"center",children:"Supplier"}),(0,t.jsx)(r.e,{name:"typeOfOrganisation",control:e,defaultValue:null,render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Type of organisation",options:l.h,value:a,onChange:(e,t)=>r(t),error:!!o?.clientType,helperText:o?.clientType?.message})}}),(0,t.jsx)(r.e,{name:"quotingEmail",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Quoting email",type:"email",value:a,onChange:r,error:!!o?.quotingEmail,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"utrNumber",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"UTR Number",value:a,onChange:r,error:!!o?.quotingEmail,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"cisRegistered",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"CIS registration number",value:a,onChange:r,error:!!o?.quotingEmail,fullWidth:!0})}})]})}])},188811,e=>{var t=e.i(511667),a=e.i(974261),r=e.i(21557);e.s(["f",0,()=>{let{show:e}=(0,r.f)();return(0,t.f)("/xero/push-contact",{queryKey:"xero-push-contact",method:"POST",baseUrl:a.M,onCompleted:t=>{if(!t?.updated)return;let a=Array.isArray(t.changed)?t.changed:[];e({content:a.length?`Xero contact updated: ${a.join(", ")}`:"Xero contact updated.",severity:"success"})},onError:t=>{e({content:`Saved, but the Xero contact was not updated: ${t.message}`,severity:"error"})}})}])},991063,333513,e=>{let t=e=>{let{meta:t,xeroTenantId:a}=e,r=t?.xeroContactId;if(!r)return null;let i=t?.xeroAssignedCompanyId;return i&&i!==a?null:{value:r,label:t?.xeroContactName||r}};e.s(["f",0,t],991063);var a=e.i(191788);e.s(["f",0,(e,r,i)=>{let n=(0,a.useRef)(void 0),s=!!e.formState.dirtyFields.xeroContact;(0,a.useEffect)(()=>{if(!i||n.current===i)return;let a=n.current;if(n.current=i,s&&!a)return;let l=t({meta:r,xeroTenantId:i})??void 0,o=e.getValues("xeroContact");(l?.value!==o?.value||l?.label!==o?.label)&&e.setValue("xeroContact",l)},[e,s,r,i])}],333513)},684779,e=>{var t=e.i(553875);e.s(["f",()=>t.f])},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},974266,e=>{var t=e.i(76381);e.s(["f",()=>t.f])},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},405167,e=>{var t=e.i(471973);e.s(["f",()=>t.f])},658524,524057,255419,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var a=e.i(231637);e.s(["f",()=>a.f],524057),e.s(["f",0,{disabled:!1}],255419)},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])},576337,e=>{var t=e.i(391398),a=e.i(191788),r=e.i(203828),i=e.i(432171),n=e.i(813843),s=e.i(115871),l=e.i(280445),o=e.i(424894),u=e.i(422411),d=e.i(684779),c=e.i(974266),m=e.i(821627),f=e.i(917563),p=e.i(21557),$=e.i(335744);e.i(251680);var g=e.i(863160),y=e.i(353807),_=e.i(373889),h=e.i(426778),b=e.i(955314),v=e.i(884750);let q=(0,h.t)().shape({managerSelected:(0,v.f)("Assigned to is a required field"),name:(0,h.x)().required(),website:(0,h.x)().nullable(),companyNumber:(0,h.x)().nullable(),vatId:(0,h.x)().nullable(),status:(0,h.x)().oneOf(["active","inactive"]).required(),typeOfOrganisation:(0,h.t)({label:(0,h.x)().required(),value:(0,h.x)().required()}),quotingEmail:(0,h.x)(),utrNumber:(0,h.x)().nullable(),cisRegistered:(0,h.x)().nullable(),userId:(0,h.H)().nullable(),email:(0,h.x)().required().test("xero-acceptable",b.z,b.M),nameFirst:(0,h.x)().required(),nameLast:(0,h.x)().required(),phone:(0,h.x)().required(),statusUser:(0,h.x)().required(),xeroContact:(0,h.t)({label:(0,h.x)(),value:(0,h.x)()}).nullable()}),I=(0,h.t)().shape({managerSelected:(0,v.f)("Assigned to is a required field"),name:(0,h.x)().required(),website:(0,h.x)().nullable(),companyNumber:(0,h.x)().nullable(),vatId:(0,h.x)().nullable(),status:(0,h.x)().oneOf(["active","inactive"]).required(),typeOfOrganisation:(0,h.t)({label:(0,h.x)().required(),value:(0,h.x)().required()}),quotingEmail:(0,h.x)().nullable(),utrNumber:(0,h.x)().nullable(),cisRegistered:(0,h.x)().nullable(),xeroContact:(0,h.t)({label:(0,h.x)(),value:(0,h.x)()}).nullable()});var x=e.i(498681);e.i(443645);var A=e.i(648116),S=e.i(755548),w=e.i(88152);let C=e=>{let{onCancel:a,onConfirm:r}=e;return(0,t.jsx)(w.f,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",padding:"24px !important",borderRadius:"8px"},children:(0,t.jsxs)(n.f,{spacing:2,children:[(0,t.jsx)(s.f,{variant:"h6",children:"VAT number?"}),(0,t.jsxs)(s.f,{children:["VAT Number This supplier does not appear to have a valid VAT number supplied.",(0,t.jsx)("br",{}),"Please note that no VAT will be charged for this supplier without a valid VAT number."]}),(0,t.jsxs)(n.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,t.jsx)(S.f,{variant:"contained",color:"danger",onClick:a,children:"Cancel"}),(0,t.jsx)(S.f,{variant:"contained",color:"secondary",onClick:r,children:"Confirm"})]})]})})};var j=e.i(536422),T=e.i(114277),L=e.i(682e3),F=e.i(284642),k=e.i(145420),P=e.i(228526),N=e.i(834862),U=e.i(188811),G=e.i(991063),O=e.i(333513);let M="/dashboard/suppliers/",V=e=>{let{account:i,loading:l=!1,setLoading:h}=e,[b,v]=(0,A.f)(),[S,w]=(0,a.useState)(!1),V=(0,p.f)(),{can:D}=(0,x.f)(),R=D("linkedAccount.administer"),{authStatus:z,tenantId:W}=(0,N.f)(),B=!!i?.id,X=(0,a.useMemo)(()=>"authorized"===z&&R,[R,z]),J={...i,cisRegistered:i?.supplierDetails?.cisRegistered,quotingEmail:i?.supplierDetails?.quotingEmail,typeOfOrganisation:P.h?.find?.(e=>e?.value===i?.supplierDetails?.typeOfOrganisation),utrNumber:i?.supplierDetails?.utrNumber,managerSelected:i?.managerSelected?{label:i.managerSelected.label,value:i.managerSelected.value}:void 0,status:i?.status==="inactive"?"inactive":"active",clientType:i?.clientType?{label:i?.clientType?.label,value:i?.clientType?.id}:null,xeroContact:(0,G.f)({meta:i?.meta,xeroTenantId:W})??void 0},Z=(0,u.G)({defaultValues:J,resolver:(0,o.yupResolver)(B?I:q),context:{administers:R},mode:"onChange",reValidateMode:"onChange"});(0,O.f)(Z,i?.meta,W);let{create:K,update:Q}=(0,k.f)("supplier"),[H,{isLoading:Y}]=(0,U.f)(),ee=async e=>{try{if(!(0,j.f)(e.vatId)&&!S)return v({content:e=>{let{onClose:a}=e;return(0,t.jsx)(C,{onCancel:a,onConfirm:()=>{w(!0),a()}})}});h(!0);let a=(e=>{let{form:t,editMode:a,account:r,xeroAuthStatus:i,xeroTenantId:n,administers:s,canLinkXero:l}=e;if("authorized"===i&&!n&&t.xeroContact?.value)throw Error("The connected Xero organisation could not be resolved, so the selected contact was not saved. Reload the page and try again.");let o={managerId:s?t.managerSelected?.value:void 0,name:t.name,website:t.website||null,companyNumber:t.companyNumber||null,vatId:t.vatId||null,status:t.status,typeOfOrganisation:t.typeOfOrganisation?.value||null,quotingEmail:t.quotingEmail||null,utrNumber:t.utrNumber||null,cisRegistered:t.cisRegistered||null,...(0,T.f)({canLinkXero:l,xeroContact:t.xeroContact,xeroAuthStatus:i,xeroTenantId:n})};return a&&r?{type:"update",pushXeroContact:(0,L.f)({editMode:a,xeroAuthStatus:i,xeroTenantId:n,selectedContactId:t.xeroContact?.value}),supplierId:r.id,details:o}:{type:"create",body:{...o,contact:{email:t.email,nameFirst:t.nameFirst,nameLast:t.nameLast,phone:t.phone||null,status:t.statusUser}}}})({form:e,editMode:B,account:i,xeroAuthStatus:z,xeroTenantId:W,administers:R,canLinkXero:X});if("create"===a.type){let e=await K({body:a.body});e&&r.default.push(`${M}view?id=${e.id}`);return}let{supplierId:n,details:s}=a;if(!await Q({pathParams:{accountId:n},body:s}))return;X&&a.pushXeroContact&&await H({body:{accountId:n}}),r.default.push(`${M}view?id=${n}`)}catch(e){V.show({content:`Error: ${e instanceof Error?e.message:"Unknown error"}`,severity:"error"})}finally{h(!1)}};return(0,t.jsxs)(t.Fragment,{children:[b,(0,t.jsxs)(u.p,{...Z,children:[(0,t.jsx)(d.f,{open:l||Y,sx:{zIndex:1e5},children:(0,t.jsx)(c.f,{color:"secondary"})}),(0,t.jsx)("form",{onSubmit:Z.handleSubmit(ee,e=>{Object.keys(e).forEach(t=>{let a=e[t],r="object"==typeof a&&a&&"message"in a?a.message:"Invalid field";V.show({content:`${t}: ${r}`,severity:"error"})})}),children:(0,t.jsxs)(E,{alignItems:"center",spacing:4,px:4,children:[(0,t.jsx)(s.f,{variant:"h5",children:"Suppliers - Manage"}),(0,t.jsxs)(n.f,{width:"100%",spacing:2,children:[(0,t.jsx)(_.f,{type:"supplier"}),(0,t.jsx)(g.f,{}),(0,t.jsx)($.f,{}),(0,t.jsx)(F.f,{displayXero:X}),!B&&(0,t.jsx)(y.f,{})]}),(0,t.jsx)(f.f,{sx:{display:"flex",justifyContent:"center",mt:3},children:(0,t.jsx)(m.f,{type:"submit",variant:"contained",color:"secondary",disabled:l||Y,children:B?"Update supplier":"Create supplier"})})]})})]})]})},E=(0,l.f)(n.f)(e=>{let{theme:t}=e;return{width:"100%",maxWidth:800,margin:"0 auto",color:t.palette.text.primary}});var D=e.i(374979);let R=()=>{let{query:e}=(0,r.useRouter)(),[n,s]=(0,a.useState)(!1),{loading:l,data:{supplier:o}={supplier:null}}=(0,i.t)(D.Y,{skip:!e.id,variables:{id:e.id}});return(!l||!e.id)&&(0,t.jsx)(V,{account:o?.id?o:void 0,loading:n,setLoading:s})};var z=e.i(293965);let W=()=>(0,t.jsx)(R,{});W.getLayout=function(e){return(0,t.jsx)(z.f,{children:e})},e.s(["default",0,W],576337)}],592865,(e,t,a)=>{let r="/dashboard/suppliers/manage";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(576337)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);