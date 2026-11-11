(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,122989,e=>{var t=e.i(391398),i=e.i(280445),a=e.i(668921),o=e.i(231637),r=e.i(901004),s=e.i(539117),l=e.i(471973);let n=(0,i.f)(a.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),c=(0,i.f)(o.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:a,label:o,options:u,value:d,onChange:m,helperText:_,error:f,hideLabel:$,renderOption:y,...q}=e;return(0,t.jsxs)(n,{variant:a,fullWidth:i,error:f,hiddenLabel:$,children:[!$&&(0,t.jsx)(c,{variant:a,children:o}),(0,t.jsx)(s.f,{fullWidth:i,displayEmpty:!0,value:d||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=u.find(e=>e.value===d);return e?e.label:""},error:f,...q,children:u.length?u.map(e=>(0,t.jsx)(r.f,{value:e.value,disabled:e.disabled,children:y?y(e):e.label},e.value)):(0,t.jsx)(r.f,{disabled:!0,value:"",children:"No options"})}),_&&(0,t.jsx)(l.f,{error:f,children:_})]})}])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,o=t.f`
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
`,r=t.f`
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
`,n=t.f`
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
`,_=t.f`
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
`,f=t.f`
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
`,y=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,q=t.f`
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
`,b=t.f`
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
`,p=t.f`
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
`,g=t.f`
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
`,w=t.f`
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
`,h=t.f`
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
`,S=t.f`
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
`,k=t.f`
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
`,A=t.f`
  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
    }
  }
`,T=t.f`
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
`,x=t.f`
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
`,F=t.f`
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
`,C=t.f`
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
`;e.s(["V",0,m,"M",0,_,"J",0,F,"c",0,q,"m",0,n,"_",0,r,"W",0,s,"B",0,l,"a",0,C,"v",0,h,"S",0,x,"Z",0,T,"X",0,i,"D",0,g,"Y",0,u,"g",0,b,"b",0,$,"h",0,f,"o",0,y,"j",0,k,"O",0,I,"d",0,v,"T",0,p,"U",0,A,"i",0,a,"e",0,o,"z",0,w,"A",0,S,"p",0,d,"P",0,c])},827010,e=>{var t=e.i(159080);e.i(851123);let i=t.f`
  query GetAddressForSelect($q: String, $entity: String!, $entityId: Int!) {
    items: Address(
      where: {
        Address_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
        _or: [
          { addressLine1: { _eq: $q } }
          { addressLine2: { _eq: $q } }
          { addressLine3: { _eq: $q } }
          { county: { _eq: $q } }
          { postCode: { _eq: $q } }
          { city: { _eq: $q } }
        ]
      }
    ) {
      label: addressLine1
      value: id
      id
      name
      addressLine1
      addressLine2
      addressLine3
      postCode
      county
      country: Country {
        name
      }
      city
      Address_Entities {
        invoice
      }
    }
  }
`,a=t.f`
  query GetAccountsForSelect($q: String, $type: String, $limit: Int, $offset: Int) {
    items: Account(
      where: { name: { _ilike: $q }, type: { _eq: $type } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,o=t.f`
  query GetTaxonomy($q: String, $id: Int) {
    items: Taxonomy(
      where: { type: { _eq: "assetCategory" }, status: { _eq: "active" } }
      order_by: { name: asc }
    ) {
      label: name
      options: Taxonomies(
        where: {
          type: { _eq: "assetCategory" }
          name: { _ilike: $q }
          id: { _eq: $id }
          status: { _eq: "active" }
        }
        order_by: { name: asc }
      ) {
        value: id
        label: name
      }
    }
  }
`,r=t.f`
  query GetAssetsForSelect(
    $locationId: Int
    $q: String
    $categoryId: Int
    $bookable: String
    $limit: Int
    $offset: Int
  ) {
    items: Asset(
      where: {
        categoryId: { _eq: $categoryId }
        locationId: { _eq: $locationId }
        name: { _ilike: $q }
        bookable: { _eq: $bookable }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
      sublocation: Sublocation {
        name
      }
    }
  }
`,s=t.f`
  query GetCustomersForSelect($q: String, $limit: Int, $offset: Int) {
    items: Account(
      where: { name: { _ilike: $q }, type: { _eq: "customer" } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      admin: Admins {
        id: adminId
      }
      label: name
      spendThreshold: meta(path: "$.finance.spendThreshold")
      rateType: meta(path: "$.finance.rateType")
      value: id
    }
  }
`,l=t.f`
  query GetJobsForSelect($q: String, $limit: Int = 50, $locationId: Int, $ids: [Int!] = []) {
    items: Job(
      where: {
        Location: { id: { _eq: $locationId } }
        number: { _ilike: $q }
        _not: { id: { _in: $ids } }
      }
      order_by: { title: asc }
      limit: $limit
    ) {
      label: number
      value: id
      number
      createdAt
      description
      status
      timingStart
      title
      type
      Location {
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
    }
  }
`,n=t.f`
  query GetManagersForSelect($userId: Int, $accountId: Int!, $q: String) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          role: { _in: ["owner", "manager"] }
          status: { _eq: "active" }
          Account: { id: { _eq: $accountId } }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        id: { _neq: $userId }
      }
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`,c=t.f`
  query GetManagersForSelect(
    $userId: Int
    $accountId: Int!
    $q: String
    $invoiceThreshold: numeric
    $quoteThreshold: numeric
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          role: { _in: ["owner", "manager"] }
          status: { _eq: "active" }
          Account: { id: { _eq: $accountId } }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        id: { _neq: $userId }
        _and: [
          {
            _or: [
              { invoiceThreshold: { _gt: $invoiceThreshold } }
              { invoiceThreshold: { _is_null: true } }
            ]
          }
          {
            _or: [
              { quoteThreshold: { _gt: $quoteThreshold } }
              { quoteThreshold: { _is_null: true } }
            ]
          }
        ]
      }
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`,u=t.f`
  query GetPostCodeAreaForSelect($countryId: Int, $q: String) {
    items: PostcodeArea(
      where: { name: { _ilike: $q }, countryId: { _eq: $countryId } }
      order_by: { name: asc }
    ) {
      area
      label: name
      value: id
    }
  }
`,d=t.f`
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
`,m=t.f`
  query GetSlasForSelect(
    $q: String
    $adminId: Int
    $type: String
    $subtype: sla_subtype
    $limit: Int
    $offset: Int
  ) {
    items: SLA(
      where: {
        name: { _ilike: $q }
        type: { _eq: $type }
        adminId: { _eq: $adminId }
        subtype: { _eq: $subtype }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,_=t.f`
  query GetSuppliersForSelect($where: Account_bool_exp, $limit: Int, $offset: Int) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,f=t.f`
  query GetUsersForSelect(
    $accountId: Int
    $q: String
    $limit: Int
    $offset: Int
    $userIds: [Int!] = []
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          accountId: { _eq: $accountId }
          isContact: { _eq: true }
          status: { _eq: "active" }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        _not: { id: { _in: $userIds } }
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
      email
      phone
    }
  }
`,$=t.f`
  query GetSupplierUsersForCalendarFilter($q: String, $supplierId: Int, $limit: Int, $offset: Int) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          status: { _eq: "active" }
          accountId: { _eq: $supplierId }
          Account: { type: { _eq: "supplier" } }
        }
        _or: [
          { fullName: { _ilike: $q } }
          {
            Account_Users: {
              status: { _eq: "active" }
              accountId: { _eq: $supplierId }
              Account: { type: { _eq: "supplier" }, name: { _ilike: $q } }
            }
          }
        ]
      }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      fullName
      accountUsers: Account_Users(
        where: { status: { _eq: "active" }, Account: { type: { _eq: "supplier" } } }
        order_by: { Account: { name: asc } }
      ) {
        Account {
          id
          name
        }
      }
    }
  }
`,y=t.f`
  query GetSupplierUsersForCalendarFilterGlobal($q: String, $limit: Int, $offset: Int) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { status: { _eq: "active" }, Account: { type: { _eq: "supplier" } } }
        _or: [
          { fullName: { _ilike: $q } }
          {
            Account_Users: {
              status: { _eq: "active" }
              Account: { type: { _eq: "supplier" }, name: { _ilike: $q } }
            }
          }
        ]
      }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      fullName
      accountUsers: Account_Users(
        where: { status: { _eq: "active" }, Account: { type: { _eq: "supplier" } } }
        order_by: { Account: { name: asc } }
      ) {
        Account {
          id
          name
        }
      }
    }
  }
`,q=t.f`
  query GetSupplierUsersByAccountForCalendar(
    $accountId: Int!
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        fullName: { _ilike: $q }
        Account_Users: {
          accountId: { _eq: $accountId }
          status: { _eq: "active" }
          Account: { type: { _eq: "supplier" } }
        }
      }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: fullName
    }
  }
`,b=t.f`
  query GetUsersForSelect($q: String) {
    items: User(
      where: {
        status: { _eq: "active" }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
      email
      phone
    }
  }
`,p=t.f`
  query GetTaxonomyGroupForSelect($q: String, $type: String!, $limit: Int, $offset: Int) {
    items: Taxonomy(
      where: { isGroup: { _eq: true }, name: { _ilike: $q }, type: { _eq: $type } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,I=t.f`
  query GetTaxonomy($q: String) {
    items: Taxonomy(where: { type: { _eq: "expenseCategoryGroup" } }, order_by: { name: asc }) {
      label: name
      options: Taxonomies(
        where: { type: { _eq: "expenseCategory" }, name: { _ilike: $q } }
        order_by: { name: asc }
      ) {
        value: id
        label: name
      }
    }
  }
`;t.f`
  query GetUserRole($userId: Int!, $accountId: Int!) {
    accountUsers: Account_User(
      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }
    ) {
      role
    }
  }
`;let v=t.f`
  query GetSublocationsForSelect($locationId: Int!, $q: String, $limit: Int, $offset: Int) {
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
`,g=t.f`
  query GetTaxonomy($q: String, $limit: Int, $offset: Int) {
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
`;t.f`
  query GetTagsForTask($q: String!, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { name: { _ilike: $q }, status: { _eq: "active" }, type: { _eq: "taskTags" } }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      value: id
      label: name
    }
  }
`,t.f`
  query GetTagsForTaskEntity(
    $entityId: Int
    $entity: String!
    $q: String!
    $limit: Int = 50
    $offset: Int = 0
  ) {
    tags: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "taskTags" }
        _not: { Taxonomy_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } } }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      name
      meta
    }
  }
`,t.f`
  query GetTaskEntityTags($entityId: Int!, $entity: String!) {
    tags: Taxonomy_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Taxonomy: { status: { _eq: "active" }, type: { _eq: "taskTags" } }
      }
      order_by: { id: desc }
    ) {
      id
      createdAt
      tag: Taxonomy {
        id
        name
        meta
      }
    }
  }
`;let w=t.f`
  query GetCustomerManagers($accountId: Int, $q: String, $limit: Int, $offset: Int) {
    items: User(
      where: { Account_Users: { accountId: { _eq: $accountId } }, fullName: { _ilike: $q } }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
    }
  }
`,h=t.f`
  query GetServiceSchedulesForSelect(
    $q: String
    $serviceId: Int
    $entity: service_schedule_entity
    $entityId: Int
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: ServiceSchedule(
      where: {
        name: { _ilike: $q }
        serviceId: { _eq: $serviceId }
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        userId: { _is_null: true }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,S=t.f`
  query GetPropertyById($id: Int!) {
    item: Location_by_pk(id: $id) {
      label: name
      value: id
      access
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
            code
          }
          postCode
          city
        }
      }
    }
  }
`,k=t.f`
  query GetCompliancesForSelectNew($q: String, $locationId: Int, $limit: Int, $offset: Int) {
    items: Compliance(
      where: { name: { _ilike: $q }, locationId: { _eq: $locationId } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
      registeredNumber
      category: ComplianceCategory {
        label: name
      }
      assets: Assets {
        asset: Asset {
          value: id
          label: name
        }
      }
      sublocation: Sublocation {
        value: id
        label: name
      }
    }
  }
`,A=t.f`
  query GetTaskAssignedToForSelect(
    $accountId: Int
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }
        _or: [{ fullName: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`;e.s(["V",0,a,"i",0,i,"_",0,g,"B",0,r,"v",0,o,"d",0,k,"r",0,s,"O",0,w,"f",0,I,"$",0,l,"C",0,n,"o",0,c,"q",0,u,"g",0,S,"Z",0,d,"Y",0,h,"k",0,m,"j",0,v,"U",0,_,"N",0,q,"T",0,$,"P",0,y,"h",0,A,"J",0,p,"p",0,b,"Q",0,f])},881128,e=>{e.s(["f",0,()=>"£"])},68881,e=>{var t=e.i(587882),i=e.i(303983),a=e.i(974261);let o=()=>`${a.M}/custom-fields`;class r extends Error{status;field;constructor(e,t,i){super(i),this.status=e,this.field=t,this.name="CustomFieldsApiError"}}async function s(e){let t={};try{t=await e.json()}catch{}throw new r(e.status,t.field??null,t.message??`Request failed with HTTP ${e.status}`)}async function l(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET"},o=await fetch(e,{method:a.method,headers:(0,i.f)((0,t.f)()),body:void 0===a.body?void 0:JSON.stringify(a.body)});return o.ok?await o.json():s(o)}async function n(e){return l(`${o()}/definitions`,{method:"POST",body:e})}async function c(e,t){return l(`${o()}/definitions/${e}`,{method:"PATCH",body:t})}async function u(e,t){return l(`${o()}/definitions/${e}/publish`,{method:"POST",body:t})}async function d(e){return l(`${o()}/definitions/${e}/deactivate`,{method:"POST"})}async function m(e){return l(`${o()}/definitions/${e}/reactivate`,{method:"POST"})}async function _(e){return l(`${o()}/definitions/${e}/draft`,{method:"POST"})}async function f(e){return l(`${o()}/definitions/${e}/duplicate`,{method:"POST"})}async function $(e){return l(`${o()}/values`,{method:"POST",body:e})}async function y(e){return l(`${o()}/values/batch`,{method:"POST",body:{values:e}})}async function q(e,t){let i=[],a=[];for(let o of e){if(null==o.value&&(!o.hadStoredValue||o.required))continue;let e=o.dataOwnerId??t[o.dataOwnerType]??null;if(null==e){i.push(o.definitionId);continue}a.push({definitionId:o.definitionId,dataOwnerType:o.dataOwnerType,dataOwnerId:e,sourceSurface:o.sourceSurface,value:o.value})}return a.length>0&&await y(a),{skippedDefinitionIds:i}}async function b(e){let t=new URLSearchParams({surface:e.surface});return e.customerId&&t.set("customerId",String(e.customerId)),e.locationId&&t.set("locationId",String(e.locationId)),e.supplierId&&t.set("supplierId",String(e.supplierId)),e.assetId&&t.set("assetId",String(e.assetId)),null!=e.assetIds&&t.set("assetIds",e.assetIds.join(",")),e.workOrderId&&t.set("workOrderId",String(e.workOrderId)),e.jobReportId&&t.set("jobReportId",String(e.jobReportId)),e.expenseId&&t.set("expenseId",String(e.expenseId)),e.ppmItemId&&t.set("ppmItemId",String(e.ppmItemId)),e.quoteId&&t.set("quoteId",String(e.quoteId)),e.invoiceId&&t.set("invoiceId",String(e.invoiceId)),l(`${o()}/render?${t.toString()}`,{method:"GET"})}e.s(["b",0,r,"K",0,n,"m",0,d,"A",0,f,"r",0,u,"s",0,m,"C",0,b,"x",0,_,"q",0,c,"u",0,q,"B",0,$])},40057,731800,e=>{let t=["short_text","long_text","number","currency","dropdown","radio","checkboxes","multi_select","date","time","time_range","range","link"],i=["work_order","customer","location","supplier","asset","job_report","expense","ppm_item","quote"],a=["info","warning","critical","success"],o=["draft","active","inactive"],r=["create_wo","create_wo_banner","wo_overview","wo_job_details","wo_issue_reported","customer_details","location_details","supplier_details","asset_details","job_report","expense","ppm_item","wo_details","wo_custom_fields","wo_banner","quote_overview","quote_details","quote_custom_fields","quote_banner","invoice","customer_banner","supplier_banner","location_banner","asset_custom_fields","asset_banner"],s=["always","customer","location","supplier","asset","has_asset"],l=[{value:"work_order",label:"Work order"},{value:"work_order_creation",label:"Work order creation"},{value:"quote",label:"Quote"},{value:"job_report",label:"Job report"},{value:"invoice",label:"Invoice"},{value:"customer",label:"Customer"},{value:"supplier",label:"Supplier"},{value:"location",label:"Location"},{value:"asset",label:"Asset"},{value:"expense",label:"Job expense"},{value:"ppm_item",label:"PPM item"}],n={work_order_creation:[{location:"details",label:"Details",surface:"create_wo"},{location:"banner",label:"Banner",surface:"create_wo_banner"}],work_order:[{location:"overview",label:"Overview",surface:"wo_overview"},{location:"details",label:"Details",surface:"wo_details"},{location:"custom_fields",label:"Custom Fields",surface:"wo_custom_fields"},{location:"banner",label:"Banner",surface:"wo_banner"},{location:"job_details",label:"Job details",surface:"wo_job_details",hiddenFromNewPlacement:!0},{location:"issue_reported",label:"Issue reported",surface:"wo_issue_reported",hiddenFromNewPlacement:!0}],quote:[{location:"overview",label:"Overview",surface:"quote_overview"},{location:"details",label:"Details",surface:"quote_details"},{location:"custom_fields",label:"Custom Fields",surface:"quote_custom_fields"},{location:"banner",label:"Banner",surface:"quote_banner"}],job_report:[{location:"section",label:"Report section",surface:"job_report"}],invoice:[{location:"section",label:"Invoice",surface:"invoice"}],customer:[{location:"details",label:"Details",surface:"customer_details"},{location:"banner",label:"Banner",surface:"customer_banner"}],supplier:[{location:"details",label:"Details",surface:"supplier_details"},{location:"banner",label:"Banner",surface:"supplier_banner"}],location:[{location:"details",label:"Details",surface:"location_details"},{location:"banner",label:"Banner",surface:"location_banner"}],asset:[{location:"details",label:"Details",surface:"asset_details"},{location:"custom_fields",label:"Custom Fields",surface:"asset_custom_fields"},{location:"banner",label:"Banner",surface:"asset_banner"}],expense:[{location:"section",label:"Expense",surface:"expense"}],ppm_item:[{location:"section",label:"PPM item",surface:"ppm_item"}]},c={work_order:["work_order","work_order_creation","job_report","invoice"],quote:["quote","work_order","work_order_creation","invoice"],customer:["customer","work_order","work_order_creation","quote","job_report","invoice","location","asset"],location:["location","work_order","work_order_creation","quote","job_report","asset","invoice"],supplier:["supplier","work_order","work_order_creation","quote","job_report","invoice"],asset:["asset","work_order","work_order_creation","quote","job_report","invoice"],job_report:["job_report"],expense:["expense"],ppm_item:["ppm_item","work_order"]},u=Object.fromEntries(Object.entries(n).flatMap(e=>{let[t,i]=e;return i.map(e=>[e.surface,t])}));e.s(["s",0,[{value:"admin",label:"Administrators"},{value:"customer",label:"Customers"},{value:"supplier",label:"Suppliers"}],"M",0,[{value:"work_order",label:"Work order"},{value:"quote",label:"Quote"},{value:"customer",label:"Customer"},{value:"location",label:"Location"},{value:"supplier",label:"Supplier"},{value:"asset",label:"Asset"},{value:"job_report",label:"Job report"},{value:"expense",label:"Job expense"},{value:"ppm_item",label:"PPM item"}],"f",0,u,"q",0,n,"l",0,l,"u",0,[{value:"read_only",label:"Read only"},{value:"edit",label:"Edit the value"}],"h",0,[{value:"info",label:"Info"},{value:"warning",label:"Warning"},{value:"critical",label:"Critical"},{value:"success",label:"Success"}],"F",0,{info:{bg:"#0288d1",fg:"#fff",label:"Info"},warning:{bg:"#ed6c02",fg:"#fff",label:"Warning"},critical:{bg:"#d32f2f",fg:"#fff",label:"Critical"},success:{bg:"#2e7d32",fg:"#fff",label:"Success"}},"_",0,[{value:"draft",label:"Draft"},{value:"active",label:"Active"},{value:"inactive",label:"Archived"}],"j",0,[{value:"short_text",label:"Short text",category:"text"},{value:"long_text",label:"Long text",category:"text"},{value:"link",label:"Link",category:"text"},{value:"number",label:"Number",category:"numeric"},{value:"currency",label:"Currency",category:"numeric"},{value:"range",label:"Range",category:"numeric"},{value:"dropdown",label:"Dropdown",category:"choice"},{value:"radio",label:"Radio buttons",category:"choice"},{value:"checkboxes",label:"Checkboxes",category:"choice"},{value:"multi_select",label:"Multi-select",category:"choice"},{value:"date",label:"Date",category:"datetime"},{value:"time",label:"Time",category:"datetime"},{value:"time_range",label:"Time range",category:"datetime"}],"X",0,[{value:"create_wo",label:"Work order creation (Details)",group:"work_order"},{value:"create_wo_banner",label:"Work order creation (Banner)",group:"work_order"},{value:"wo_overview",label:"Work order (Overview)",group:"work_order"},{value:"wo_job_details",label:"Work order (Job details)",group:"work_order"},{value:"wo_issue_reported",label:"Work order (Issue reported)",group:"work_order"},{value:"customer_details",label:"Customer (Details)",group:"entity"},{value:"location_details",label:"Location (Details)",group:"entity"},{value:"supplier_details",label:"Supplier (Details)",group:"entity"},{value:"asset_details",label:"Asset (Details)",group:"entity"},{value:"job_report",label:"Job report",group:"work_order"},{value:"expense",label:"Job expense",group:"work_order"},{value:"ppm_item",label:"PPM item",group:"work_order"},{value:"wo_details",label:"Work order (Details)",group:"work_order"},{value:"wo_custom_fields",label:"Work order (Custom Fields)",group:"work_order"},{value:"wo_banner",label:"Work order (Banner)",group:"work_order"},{value:"quote_overview",label:"Quote (Overview)",group:"work_order"},{value:"quote_details",label:"Quote (Details)",group:"work_order"},{value:"quote_custom_fields",label:"Quote (Custom Fields)",group:"work_order"},{value:"quote_banner",label:"Quote (Banner)",group:"work_order"},{value:"invoice",label:"Invoice",group:"work_order"},{value:"customer_banner",label:"Customer (Banner)",group:"entity"},{value:"supplier_banner",label:"Supplier (Banner)",group:"entity"},{value:"location_banner",label:"Location (Banner)",group:"entity"},{value:"asset_custom_fields",label:"Asset (Custom Fields)",group:"entity"},{value:"asset_banner",label:"Asset (Banner)",group:"entity"}],"W",0,(e,t)=>"ppm_item"===e&&"work_order_creation"===u[t],"c",0,(e,t)=>(c[e]??[]).includes(u[t]),"$",0,e=>"string"==typeof e&&a.includes(e),"N",0,e=>"string"==typeof e&&i.includes(e),"k",0,e=>"string"==typeof e&&t.includes(e),"P",0,e=>"string"==typeof e&&s.includes(e),"i",0,e=>"string"==typeof e&&o.includes(e),"I",0,e=>"string"==typeof e&&r.includes(e),"o",0,e=>{let t=u[e];if(!t)return null;let i=n[t],a=i?.find(t=>t.surface===e);return{page:t,location:a?.location??i[0]?.location??"section"}},"A",0,e=>{if(!e)return l;let t=c[e]??[];return l.filter(e=>t.includes(e.value))},"t",0,e=>{let t=n[e],i=t.find(e=>"details"===e.location)??t[0];return{surface:i?.surface??"wo_overview",permission:"edit"}},"w",0,{info:"info",warning:"warning",critical:"error",success:"success"},"T",0,(e,t)=>n[e]?.find(e=>e.location===t)?.surface??null],40057);var d=e.i(391398),m=e.i(13558),_=e.i(484098),f=e.i(588212),$=e.i(251825);let y={info:m.default,warning:_.default,critical:f.default,success:$.default};e.s(["f",0,e=>{let{severity:t,...i}=e,a=y[t];return(0,d.jsx)(a,{...i})}],731800)},588212,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e.r(421506)),r=e.r(391398);i.default=(0,o.default)((0,r.jsx)("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3m1-4.3h-2V7h2z"}),"Report")},484098,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e.r(421506)),r=e.r(391398);i.default=(0,o.default)([(0,r.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),(0,r.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber")}])})();