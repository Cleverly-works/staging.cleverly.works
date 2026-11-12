(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[824451,e=>{var t=e.i(391398),a=e.i(800884),r=e.i(76381),i=e.i(515523),n=e.i(652148),s=e.i(191788);e.s(["f",0,e=>{let{color:o,variant:l,label:u,placeholder:c,error:d,helperText:m,size:f,loading:p,onSearchChange:_,onAddNew:$,textFieldProps:g={},disableClearable:y,onChange:h,onInputChange:I,...b}=e,[q,v]=(0,s.useState)(""),x=(0,s.useRef)("input");return(0,s.useEffect)(()=>{if(!_)return;if("reset"===x.current||"clear"===x.current)return void _(q,x.current);let e=setTimeout(()=>{_(q,x.current)},500);return()=>clearTimeout(e)},[q,_]),(0,t.jsx)(i.f,{disableClearable:y,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:p,filterOptions:(e,t)=>{let a=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return $&&""!==t.inputValue.trim()&&(a.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||a.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),a},onInputChange:(e,t,a)=>{x.current=a,v(t),I?.(e,t,a)},onChange:async(e,t,a)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&$){let r=t.value,i=await $(r);if(!i)return;h?.(e,i,a),v("");return}h?.(e,t,a)},renderTags:(e,r)=>e.map((e,i)=>(0,t.jsx)(a.f,{size:"small",label:e.label,...r({index:i})})),renderOption:(e,a,r)=>{let i=q||"",n="string"==typeof a?a:a?.label||"";if("object"==typeof a&&"isAddNew"in a&&a.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:n})});let s=((e,t)=>{let a=t?.trim()||"";if(!a||!e||a.length<3)return e;let r=[],i=a.toLowerCase(),n=e.toLowerCase(),s=0,o=n.indexOf(i);for(;-1!==o;)o>s&&r.push({text:e.substring(s,o),highlight:!1}),r.push({text:e.substring(o,o+a.length),highlight:!0}),s=o+a.length,o=n.indexOf(i,s);return s<e.length&&r.push({text:e.substring(s),highlight:!1}),r})(n,i);return(0,t.jsx)("li",{...e,children:Array.isArray(s)?(0,t.jsx)("span",{children:s.map((e,a)=>e.highlight?(0,t.jsx)("strong",{children:e.text},a):(0,t.jsx)("span",{children:e.text},a))}):n})},renderInput:e=>(0,t.jsx)(n.f,{label:u,placeholder:c,color:o,variant:l,error:d,helperText:m,...e,...g,inputProps:{...e.inputProps,...g.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...g.InputLabelProps||{}},InputProps:{...e.InputProps,...g.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[p?(0,t.jsx)(r.f,{color:"inherit",size:20}):null,g.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...b})}])},851123,e=>{var t=e.i(159080);let a=t.f`
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
`,$=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,g=t.f`
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
`,y=t.f`
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
`,I=t.f`
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
`,b=t.f`
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
`,L=t.f`
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
`,U=t.f`
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
`;e.s(["V",0,m,"M",0,f,"J",0,L,"c",0,g,"m",0,l,"_",0,n,"W",0,s,"B",0,o,"a",0,U,"v",0,x,"S",0,j,"Z",0,C,"X",0,a,"D",0,q,"Y",0,c,"g",0,y,"b",0,_,"h",0,p,"o",0,$,"j",0,S,"O",0,I,"d",0,b,"T",0,h,"U",0,w,"i",0,r,"e",0,i,"z",0,v,"A",0,A,"p",0,d,"P",0,u])},374979,e=>{var t=e.i(159080);let a=t.f`
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
`,n=t.f`
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
`;let s=t.f`
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
`,o=t.f`
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
`,e.s(["W",0,n,"q",0,o,"Z",0,l,"C",0,r,"o",0,a,"d",0,s,"Y",0,i])},399942,e=>{var t=e.i(39059);let a=async function(e,a){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{let{data:{users:i}}=await e.query({query:t.e,variables:{email:a}});if(i&&i.length>0)return!!r&&i[0];return!r||null}catch(e){return!0}};e.s(["f",0,a])},39059,e=>{var t=e.i(159080);let a=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,r=t.f`
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
`,i=t.f`
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
`,n=t.f`
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
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,u=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,c=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,d=t.f`
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
`,m=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,f=t.f`
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
`,p=t.f`
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
`,_=t.f`
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
`;e.s(["e",0,s,"u",0,f,"q",0,l,"_",0,c,"x",0,n,"k",0,i,"f",0,u,"U",0,p,"I",0,a,"s",0,_,"l",0,d,"V",0,r,"J",0,m,"W",0,o])},536422,e=>{e.s(["f",0,e=>"string"==typeof e&&""!==e.trim()&&e.toLowerCase().replace("gb","").length>=9])},228526,e=>{e.s(["G",0,[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}],"h",0,[{label:"Sole trader",value:"soleTrader"},{label:"Limited company",value:"limitedCompany"},{label:"Partnership",value:"partnership"},{label:"LLP",value:"llp"},{label:"PLC",value:"plc"}]])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},284642,e=>{var t=e.i(391398),a=e.i(813843),r=e.i(422411),i=e.i(356119),n=e.i(824451),s=e.i(191788),o=e.i(834862),l=e.i(886779);let u=e=>{let{control:a,...u}=e,{authStatus:c,tenantId:d,getXeroContacts:m}=(0,o.f)(),[f,p]=(0,s.useState)(!1),[_,$]=(0,s.useState)([]),[g,y]=(0,s.useState)(!1),h=(0,s.useRef)(null),I=(0,s.useRef)(0),b=(0,s.useCallback)(async e=>{if("authorized"!==c||h.current===e)return;h.current=e;let t=++I.current;p(!0);try{let a=await m(e);if(t!==I.current)return;if(!a){h.current=null;return}$(a.reduce((e,t)=>(t.contactID&&t.name&&e.push({label:t.name,value:t.contactID}),e),[]))}finally{t===I.current&&p(!1)}},[m,c]);(0,s.useEffect)(()=>{I.current+=1,h.current=null,$([]),p(!1)},[d]);let q=(0,s.useCallback)((e,t)=>{g&&"reset"!==t&&b(e)},[b,g]),v=(0,s.useCallback)(()=>{y(!0),b("")},[b]),x=(0,s.useCallback)(()=>{y(!1),h.current=null},[]);return(0,t.jsx)(r.e,{control:a,defaultValue:null,name:"xeroContact",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{loading:f,variant:"standard",color:"secondary",label:"Xero contact",value:a,options:_,filterOptions:e=>e,onChange:(e,t)=>r(t),open:g,onOpen:v,onClose:x,onSearchChange:q,getOptionLabel:e=>"string"==typeof e?e:e?.label??"",renderOption:(e,a)=>(0,t.jsx)("li",{...e,children:(0,t.jsxs)(l.f,{children:[(0,t.jsx)(i.f,{variant:"body2",children:a.label}),(0,t.jsx)(i.f,{variant:"caption",color:"text.secondary",children:a.value})]})}),...u})}})};e.s(["f",0,e=>{let{displayXero:n=!1}=e,{control:s}=(0,r.M)();return n?(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(i.f,{variant:"h6",textAlign:"center",children:"Xero user sync"}),(0,t.jsx)(u,{control:s,variant:"standard"})]}):null}],284642)},251680,353807,863160,373889,955314,93284,682e3,991063,333513,e=>{var t=e.i(391398),a=e.i(813843),r=e.i(422411),i=e.i(164056),n=e.i(658524),s=e.i(159974),o=e.i(589200),l=e.i(524057),u=e.i(356119),c=e.i(207646),d=e.i(594301),m=e.i(948574);e.s(["f",0,()=>{let{control:e,formState:{errors:f}}=(0,r.M)(),{hasRole:p}=(0,d.f)();return(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Contact user"}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"nameFirst",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"First name",value:a,onChange:r,error:!!f?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"nameLast",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Last name",value:a,onChange:r,error:!!f?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"email",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:a,onChange:r,error:!!f?.email,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"phone",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Mobile",value:a,onChange:r,error:!!f?.phone,fullWidth:!0})}})]}),p([...m.x,...m.H,...m.z,...m.Q])&&(0,t.jsx)(r.e,{name:"statusUser",control:e,defaultValue:"active",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsxs)(o.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(l.f,{children:"Status"}),(0,t.jsx)(n.f,{value:a,onChange:r,error:!!f?.status,children:c.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(r.e,{name:"userId",control:e,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})}),(0,t.jsx)(r.e,{name:"contactUser",control:e,defaultValue:!0,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})}],353807),e.s(["f",0,()=>{let{control:e,formState:{errors:d}}=(0,r.M)();return(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Company"}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"name",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Name",value:a,onChange:r,error:!!d?.name,helperText:d?.name?.message,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"website",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Website",value:a,onChange:r,error:!!d?.website,helperText:d?.website?.message,fullWidth:!0})}})]}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"companyNumber",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Company number",value:a,onChange:r,error:!!d?.companyNumber,helperText:d?.companyNumber?.message,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"vatId",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"VAT ID",value:a,onChange:r,error:!!d?.vatId,helperText:d?.vatId?.message,fullWidth:!0})}})]}),(0,t.jsx)(r.e,{name:"status",control:e,defaultValue:"active",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsxs)(o.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(l.f,{children:"Status"}),(0,t.jsx)(n.f,{value:a,onChange:r,error:!!d?.status,children:c.f.map(e=>(0,t.jsx)(s.f,{value:e.value,children:e.label},e.value))})]})}})]})}],863160);var f=e.i(191788),p=e.i(877341),_=e.i(824451),$=e.i(851123);e.s(["f",0,e=>{let{type:i}=e,{user:n}=(0,d.f)(),[s,o]=(0,f.useState)(""),{control:l,formState:{errors:c},watch:m}=(0,r.M)(),[g,{loading:y,data:{items:h}={items:[]}}]=(0,p.f)($.P,{variables:{q:""!==s?`%${s}%`:null,accountId:n?.adminId,limit:50,offset:0}}),I=m("account")||{};return I?.type==="superadmin"?null:(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.f,{variant:"h6",textAlign:"center",children:"Manager"}),(0,t.jsx)(r.e,{name:"managerSelected",control:l,defaultValue:null,render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(_.f,{variant:"standard",color:"secondary",label:"supplier"===i?"Assigned to":"Account manager",options:h,onSearchChange:o,onOpen:()=>g(),loading:y,value:a,onChange:(e,t)=>r(t),error:!!c?.managerSelected,helperText:c?.managerSelected?.message})}})]})}],373889),e.s([],251680);let g=/^[^\s@,;:<>()[\]\\"]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*\.[A-Za-z]{2,}$/;e.s(["z",0,"Xero will not accept this email address. It must be a valid address of at most 255 characters, with no accented or non-ASCII characters.","M",0,e=>{let t=(e??"").trim();return!t||!(t.length>255)&&!!(e=>{for(let t=0;t<e.length;t++){let a=e.codePointAt(t);if(void 0===a||a<32||a>126)return!1}return!0})(t)&&g.test(t)}],955314),e.s(["f",0,e=>{let{xeroContact:t,xeroAuthStatus:a,xeroTenantId:r,storedTenantId:i}=e;if("authorized"!==a||!r||i&&i!==r&&!t?.value)return{};let n=t?.value||null;return{xeroContactId:n,xeroContactName:n&&t?.label||null,xeroAssignedCompanyId:n?r:null}}],93284),e.s(["f",0,e=>{let{editMode:t,xeroAuthStatus:a,xeroTenantId:r,selectedContactId:i}=e;return t&&"authorized"===a&&!!r&&!!i}],682e3);let y=e=>{let{meta:t,xeroTenantId:a}=e,r=t?.xeroContactId;if(!r)return null;let i=t?.xeroAssignedCompanyId;return i&&i!==a?null:{value:r,label:t?.xeroContactName||r}};e.s(["f",0,y],991063),e.s(["f",0,(e,t,a)=>{let r=(0,f.useRef)(void 0),i=!!e.formState.dirtyFields.xeroContact;(0,f.useEffect)(()=>{if(!a||r.current===a)return;let n=r.current;if(r.current=a,i&&!n)return;let s=y({meta:t,xeroTenantId:a})??void 0,o=e.getValues("xeroContact");(s?.value!==o?.value||s?.label!==o?.label)&&e.setValue("xeroContact",s)},[e,i,t,a])}],333513)},335744,e=>{var t=e.i(391398),a=e.i(813843),r=e.i(422411),i=e.i(824451),n=e.i(164056),s=e.i(356119),o=e.i(228526);e.s(["f",0,()=>{let{control:e,formState:{errors:l}}=(0,r.M)();return(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(s.f,{variant:"h6",textAlign:"center",children:"Supplier"}),(0,t.jsx)(r.e,{name:"typeOfOrganisation",control:e,defaultValue:null,render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(i.f,{variant:"standard",color:"secondary",label:"Type of organisation",options:o.h,value:a,onChange:(e,t)=>r(t),error:!!l?.clientType,helperText:l?.clientType?.message})}}),(0,t.jsx)(r.e,{name:"quotingEmail",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"Quoting email",type:"email",value:a,onChange:r,error:!!l?.quotingEmail,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"utrNumber",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"UTR Number",value:a,onChange:r,error:!!l?.quotingEmail,fullWidth:!0})}}),(0,t.jsx)(r.e,{name:"cisRegistered",control:e,defaultValue:"",render:e=>{let{value:a,onChange:r}=e;return(0,t.jsx)(n.f,{variant:"standard",color:"secondary",label:"CIS registration number",value:a,onChange:r,error:!!l?.quotingEmail,fullWidth:!0})}})]})}])},188811,e=>{var t=e.i(511667),a=e.i(974261),r=e.i(21557);e.s(["f",0,()=>{let{show:e}=(0,r.f)();return(0,t.f)("/xero/push-contact",{queryKey:"xero-push-contact",method:"POST",baseUrl:a.M,onCompleted:t=>{if(!t?.updated)return;let a=Array.isArray(t.changed)?t.changed:[];e({content:a.length?`Xero contact updated: ${a.join(", ")}`:"Xero contact updated.",severity:"success"})},onError:t=>{e({content:`Saved, but the Xero contact was not updated: ${t.message}`,severity:"error"})}})}])},684779,e=>{var t=e.i(553875);e.s(["f",()=>t.f])},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},974266,e=>{var t=e.i(76381);e.s(["f",()=>t.f])},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var a=e.i(231637);e.s(["f",()=>a.f],524057)},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])},576337,e=>{var t=e.i(391398),a=e.i(191788),r=e.i(203828),i=e.i(432171),n=e.i(813843),s=e.i(115871),o=e.i(280445),l=e.i(424894),u=e.i(422411),c=e.i(684779),d=e.i(974266),m=e.i(821627),f=e.i(917563),p=e.i(21557),_=e.i(335744);e.i(251680);var $=e.i(863160),g=e.i(353807),y=e.i(373889),h=e.i(426778),I=e.i(955314);let b=(0,h.t)().shape({managerSelected:(0,h.t)({label:(0,h.x)().required(),value:(0,h.H)().required()}).required("Assigned to is a required field"),name:(0,h.x)().required(),website:(0,h.x)().nullable(),companyNumber:(0,h.x)().nullable(),vatId:(0,h.x)().nullable(),status:(0,h.x)().oneOf(["active","inactive"]).required(),typeOfOrganisation:(0,h.t)({label:(0,h.x)().required(),value:(0,h.x)().required()}),quotingEmail:(0,h.x)(),utrNumber:(0,h.x)().nullable(),cisRegistered:(0,h.x)().nullable(),userId:(0,h.H)().nullable(),email:(0,h.x)().required().test("xero-acceptable",I.z,I.M),nameFirst:(0,h.x)().required(),nameLast:(0,h.x)().required(),phone:(0,h.x)().required(),statusUser:(0,h.x)().required(),xeroContact:(0,h.t)({label:(0,h.x)(),value:(0,h.x)()}).nullable()}),q=(0,h.t)().shape({managerSelected:(0,h.t)({label:(0,h.x)().required(),value:(0,h.H)().required()}).required("Assigned to is a required field"),name:(0,h.x)().required(),website:(0,h.x)().nullable(),companyNumber:(0,h.x)().nullable(),vatId:(0,h.x)().nullable(),status:(0,h.x)().oneOf(["active","inactive"]).required(),typeOfOrganisation:(0,h.t)({label:(0,h.x)().required(),value:(0,h.x)().required()}),quotingEmail:(0,h.x)().nullable(),utrNumber:(0,h.x)().nullable(),cisRegistered:(0,h.x)().nullable(),xeroContact:(0,h.t)({label:(0,h.x)(),value:(0,h.x)()}).nullable()});var v=e.i(98926),x=e.i(776204),A=e.i(594301),S=e.i(374979),w=e.i(257267);e.i(443645);var C=e.i(648116),j=e.i(755548),L=e.i(88152);let U=e=>{let{onCancel:a,onConfirm:r}=e;return(0,t.jsx)(L.f,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",padding:"24px !important",borderRadius:"8px"},children:(0,t.jsxs)(n.f,{spacing:2,children:[(0,t.jsx)(s.f,{variant:"h6",children:"VAT number?"}),(0,t.jsxs)(s.f,{children:["VAT Number This supplier does not appear to have a valid VAT number supplied.",(0,t.jsx)("br",{}),"Please note that no VAT will be charged for this supplier without a valid VAT number."]}),(0,t.jsxs)(n.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,children:[(0,t.jsx)(j.f,{variant:"contained",color:"danger",onClick:a,children:"Cancel"}),(0,t.jsx)(j.f,{variant:"contained",color:"secondary",onClick:r,children:"Confirm"})]})]})})};var T=e.i(536422),k=e.i(399942),F=e.i(93284),N=e.i(682e3);let G=async e=>{let{form:t,user:a,editMode:r,client:i,account:n,xeroAuthStatus:s,xeroTenantId:o}=e;if("authorized"===s&&!o&&t.xeroContact?.value)throw Error("The connected Xero organisation could not be resolved, so the selected contact was not saved. Reload the page and try again.");let l=await (0,k.f)(i,t.email,!0),u=(0,F.f)({xeroContact:t.xeroContact,xeroAuthStatus:s,xeroTenantId:o,storedTenantId:n?.meta?.xeroAssignedCompanyId});if(r&&n){let e={supplierId:n.id,supplier:{managerId:t.managerSelected.value,name:t.name,website:t.website||null,companyNumber:t.companyNumber||null,vatId:t.vatId||null,status:t.status},supplierDetails:{typeOfOrganisation:t.typeOfOrganisation?.value||null,quotingEmail:t.quotingEmail||null,utrNumber:t.utrNumber||null,cisRegistered:t.cisRegistered||null},meta:u};return{type:"update",pushXeroContact:(0,N.f)({editMode:r,xeroAuthStatus:s,xeroTenantId:o,selectedContactId:t.xeroContact?.value}),variables:e}}return{type:"create",variables:{objects:{...{managerId:t.managerSelected?.value,name:t.name,website:t.website||null,companyNumber:t.companyNumber||null,vatId:t.vatId||null,status:t.status,type:"supplier",meta:u,SupplierDetails:{data:{typeOfOrganisation:t?.typeOfOrganisation?.value||null,quotingEmail:t?.quotingEmail||null,utrNumber:t?.utrNumber||null,cisRegistered:t?.cisRegistered||null}},Admins:{data:[{adminId:a.accountId,status:t.status}]},Account_Users:{data:[{isContact:!0,role:"owner",status:t.statusUser,...l?{userId:l.id}:{User:{data:{nameFirst:t.nameFirst,nameLast:t.nameLast,email:t.email,phone:t.phone,status:"active",meta:{notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}}}}}}]}}}}}};var O=e.i(284642),P=e.i(228526),M=e.i(834862),V=e.i(188811),E=e.i(991063),D=e.i(333513);let R="/dashboard/suppliers/",z=e=>{let{account:i,loading:o=!1,setLoading:h}=e,[I,j]=(0,C.f)(),[L,k]=(0,a.useState)(!1),F=(0,p.f)(),N=(0,v.f)(),{user:z,hasRole:W}=(0,A.f)(),{authStatus:X,tenantId:J}=(0,M.f)(),Z=!!i?.id,Q=(0,a.useMemo)(()=>"authorized"===X&&W("admin"),[W,X]),K={...i,cisRegistered:i?.supplierDetails?.cisRegistered,quotingEmail:i?.supplierDetails?.quotingEmail,typeOfOrganisation:P.h?.find?.(e=>e?.value===i?.supplierDetails?.typeOfOrganisation),utrNumber:i?.supplierDetails?.utrNumber,managerSelected:i?.managerSelected?{label:i.managerSelected.label,value:i.managerSelected.value}:void 0,status:i?.status==="inactive"?"inactive":"active",clientType:i?.clientType?{label:i?.clientType?.label,value:i?.clientType?.id}:null,xeroContact:(0,E.f)({meta:i?.meta,xeroTenantId:J})??void 0},H=(0,u.G)({defaultValues:K,resolver:(0,l.yupResolver)(Z?q:b),mode:"onChange",reValidateMode:"onChange"});(0,D.f)(H,i?.meta,J);let[Y]=(0,x.f)(S.W,{onCompleted:e=>{let{id:t}=e.insert_Account.returning[0];r.default.push(`${R}view?id=${t}`)}}),[ee]=(0,x.f)(w.B),[et,{isLoading:ea}]=(0,V.f)(),er=async e=>{try{if(!(0,T.f)(e.vatId)&&!L)return j({content:e=>{let{onClose:a}=e;return(0,t.jsx)(U,{onCancel:a,onConfirm:()=>{k(!0),a()}})}});h(!0);let a=await G({form:e,user:z,editMode:Z,account:i,client:N,xeroAuthStatus:X,xeroTenantId:J});if("update"===a.type){let{data:e}=await ee({variables:a.variables}),t=e?.update_Account_by_pk?.id;if(null==t)throw Error("Supplier was not updated");Q&&a.pushXeroContact&&await et({body:{accountId:t}}),r.default.push(`${R}view?id=${t}`)}else await Y({variables:a.variables})}catch(e){F.show({content:`Error: ${e instanceof Error?e.message:"Unknown error"}`,severity:"error"})}finally{h(!1)}};return(0,t.jsxs)(t.Fragment,{children:[I,(0,t.jsxs)(u.p,{...H,children:[(0,t.jsx)(c.f,{open:o||ea,sx:{zIndex:1e5},children:(0,t.jsx)(d.f,{color:"secondary"})}),(0,t.jsx)("form",{onSubmit:H.handleSubmit(er,e=>{Object.keys(e).forEach(t=>{let a=e[t],r="object"==typeof a&&a&&"message"in a?a.message:"Invalid field";F.show({content:`${t}: ${r}`,severity:"error"})})}),children:(0,t.jsxs)(B,{alignItems:"center",spacing:4,px:4,children:[(0,t.jsx)(s.f,{variant:"h5",children:"Suppliers - Manage"}),(0,t.jsxs)(n.f,{width:"100%",spacing:2,children:[(0,t.jsx)(y.f,{type:"supplier"}),(0,t.jsx)($.f,{}),(0,t.jsx)(_.f,{}),(0,t.jsx)(O.f,{displayXero:Q}),!Z&&(0,t.jsx)(g.f,{})]}),(0,t.jsx)(f.f,{sx:{display:"flex",justifyContent:"center",mt:3},children:(0,t.jsx)(m.f,{type:"submit",variant:"contained",color:"secondary",disabled:o||ea,children:Z?"Update supplier":"Create supplier"})})]})})]})]})},B=(0,o.f)(n.f)(e=>{let{theme:t}=e;return{width:"100%",maxWidth:800,margin:"0 auto",color:t.palette.text.primary}}),W=()=>{let{query:e}=(0,r.useRouter)(),[n,s]=(0,a.useState)(!1),{loading:o,data:{supplier:l}={supplier:null}}=(0,i.t)(S.Y,{skip:!e.id,variables:{id:e.id}});return(!o||!e.id)&&(0,t.jsx)(z,{account:l?.id?l:void 0,loading:n,setLoading:s})};var X=e.i(293965);let J=()=>(0,t.jsx)(W,{});J.getLayout=function(e){return(0,t.jsx)(X.f,{children:e})},e.s(["default",0,J],576337)}],592865,(e,t,a)=>{let r="/dashboard/suppliers/manage";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(576337)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);