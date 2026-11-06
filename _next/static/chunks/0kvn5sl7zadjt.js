(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,851123,e=>{var t=e.i(159080);let i=t.f`
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
`,s=t.f`
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
`,r=t.f`
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
`;let f=t.f`
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
`,c=t.f`
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
`,y=t.f`
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
`,_=t.f`
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
`,I=t.f`
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
`,p=t.f`
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
`,h=t.f`
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
`,S=t.f`
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
`,T=t.f`
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
`,w=t.f`
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
`,k=t.f`
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
`,F=t.f`
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
`,x=t.f`
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
`;e.s(["V",0,c,"M",0,m,"J",0,x,"c",0,q,"m",0,n,"_",0,s,"W",0,r,"B",0,l,"a",0,C,"v",0,S,"S",0,F,"Z",0,k,"X",0,i,"D",0,g,"Y",0,f,"g",0,b,"b",0,y,"h",0,$,"o",0,_,"j",0,w,"O",0,p,"d",0,h,"T",0,I,"U",0,A,"i",0,a,"e",0,o,"z",0,v,"A",0,T,"p",0,d,"P",0,u])},879436,e=>{e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:t,currencyDisplay:"symbol",style:"currency"}).format(e)}])},130325,e=>{var t=e.i(391398),i=e.i(362537),a=e.i(422411),o=e.i(738251),s=e.i(722394);e.s(["f",0,e=>{let{control:r,errors:l={},minDate:n,name:u,onChange:f,placeholder:d,space:c=!0,value:m}=e,$=(e,a)=>(0,t.jsx)(s.f,{format:"D MMM YYYY",minDate:n?(0,i.default)(n):void 0,onChange:e=>a(e?.isValid()?e.toDate():null),slotProps:{field:{clearable:!0},textField:{color:"secondary",error:!!l[u],fullWidth:!0,placeholder:d,size:"small"}},value:e?(0,i.default)(e):null});return(0,t.jsxs)(t.Fragment,{children:[f?$(m,f):(0,t.jsx)(a.e,{control:r,name:u,render:e=>$(e.value,e.onChange)}),c&&(0,t.jsx)(o.f,{mb:1.5})]})}])},827010,e=>{var t=e.i(159080);e.i(851123);let i=t.f`
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
`,s=t.f`
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
`,r=t.f`
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
`,u=t.f`
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
`,f=t.f`
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
`,c=t.f`
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
`,m=t.f`
  query GetSuppliersForSelect($where: Account_bool_exp, $limit: Int, $offset: Int) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,$=t.f`
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
`,y=t.f`
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
`,_=t.f`
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
`,I=t.f`
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
`,p=t.f`
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
`;let h=t.f`
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
`;let v=t.f`
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
`,S=t.f`
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
`,T=t.f`
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
`,w=t.f`
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
`;e.s(["V",0,a,"i",0,i,"_",0,g,"B",0,s,"v",0,o,"d",0,w,"r",0,r,"O",0,v,"f",0,p,"$",0,l,"C",0,n,"o",0,u,"q",0,f,"g",0,T,"Z",0,d,"Y",0,S,"k",0,c,"j",0,h,"U",0,m,"N",0,q,"T",0,y,"P",0,_,"h",0,A,"J",0,I,"p",0,b,"Q",0,$])},491230,e=>{e.s(["f",0,e=>{try{return JSON.parse(e)}catch(e){return!1}}])},978319,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=a(e.r(421506)),s=e.r(391398);i.default=(0,o.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},722394,e=>{e.i(350461);var t=e.i(75907),i=e.i(460997),a=e.i(191788),o=e.i(587369),s=e.i(240816),r=e.i(496170),l=e.i(220200),n=e.i(680204),u=e.i(391398);let f=["desktopModeMediaQuery"],d=a.forwardRef(function(e,a){let d=(0,s.f)({props:e,name:"MuiDatePicker"}),{desktopModeMediaQuery:c=n.X}=d,m=(0,i.f)(d,f);return(0,o.f)(c,{defaultMatches:!0})?(0,u.jsx)(r.f,(0,t.f)({ref:a},m)):(0,u.jsx)(l.f,(0,t.f)({ref:a},m))});e.s(["f",0,d])},358024,254802,e=>{var t=e.i(75907),i=e.i(191788),a=e.i(240816),o=e.i(612838),s=e.i(415896),r=e.i(32760),l=e.i(460997),n=e.i(33424),u=e.i(115871),f=e.i(280445),d=e.i(600961),c=e.i(443782),m=e.i(459241),$=e.i(199188);function y(e){return(0,$.f)("MuiDatePickerToolbar",e)}(0,e.i(162720).f)("MuiDatePickerToolbar",["root","title"]);var _=e.i(391398);let q=["value","isLandscape","onChange","toolbarFormat","toolbarPlaceholder","views","className","onViewChange","view"],b=(0,f.f)(c.f,{name:"MuiDatePickerToolbar",slot:"Root",overridesResolver:(e,t)=>t.root})({}),I=(0,f.f)(u.f,{name:"MuiDatePickerToolbar",slot:"Title",overridesResolver:(e,t)=>t.title})({variants:[{props:{isLandscape:!0},style:{margin:"auto 16px auto auto"}}]}),p=i.forwardRef(function(e,s){let u=(0,a.f)({props:e,name:"MuiDatePickerToolbar"}),{value:f,isLandscape:c,toolbarFormat:$,toolbarPlaceholder:p="––",views:h,className:g}=u,v=(0,l.f)(u,q),S=(0,o.Q)(),T=(0,m.f)(),w=(e=>{let{classes:t}=e;return(0,d.f)({root:["root"],title:["title"]},y,t)})(u),A=i.useMemo(()=>{if(!f)return p;let e=(0,r.a)(S,{format:$,views:h},!0);return S.formatByString(f,e)},[f,$,p,S,h]);return(0,_.jsx)(b,(0,t.f)({ref:s,toolbarTitle:T.datePickerToolbarTitle,isLandscape:c,className:(0,n.f)(w.root,g)},v,{children:(0,_.jsx)(I,{variant:"h4",align:c?"left":"center",ownerState:u,className:w.title,children:A})}))});e.s(["f",0,function(e,l){let n=(0,o.Q)(),u=(0,o.T)(),f=(0,a.f)({props:e,name:l}),d=i.useMemo(()=>f.localeText?.toolbarTitle==null?f.localeText:(0,t.f)({},f.localeText,{datePickerToolbarTitle:f.localeText.toolbarTitle}),[f.localeText]);return(0,t.f)({},f,{localeText:d},(0,s.g)({views:f.views,openTo:f.openTo,defaultViews:["year","day"],defaultOpenTo:"day"}),{disableFuture:f.disableFuture??!1,disablePast:f.disablePast??!1,minDate:(0,r.c)(n,f.minDate,u.minDate),maxDate:(0,r.c)(n,f.maxDate,u.maxDate),slots:(0,t.f)({toolbar:p},f.slots)})}],358024);var h=e.i(652148),g=e.i(525918),v=e.i(454311),S=e.i(592462),T=e.i(685448),w=e.i(623741),A=e.i(459362),k=e.i(955200),F=e.i(1297),x=e.i(346704);let C=["slots","slotProps","InputProps","inputProps"],G=i.forwardRef(function(e,i){let o=(0,a.f)({props:e,name:"MuiDateField"}),{slots:s,slotProps:r,InputProps:n,inputProps:u}=o,f=(0,l.f)(o,C),d=s?.textField??(e.enableAccessibleFieldDOMStructure?F.f:h.f),c=(0,g.f)({elementType:d,externalSlotProps:r?.textField,externalForwardedProps:f,additionalProps:{ref:i},ownerState:o});c.inputProps=(0,t.f)({},u,c.inputProps),c.InputProps=(0,t.f)({},n,c.InputProps);let m=(e=>{let t=(0,A.l)(e),{forwardedProps:i,internalProps:a}=(0,w.f)(t,"date");return(0,S.f)({forwardedProps:i,internalProps:a,valueManager:v.X,fieldValueManager:v.t,validator:T.f,valueType:"date"})})(c),$=(0,x.f)(m),y=(0,k.f)((0,t.f)({},$,{slots:s,slotProps:r}));return(0,_.jsx)(d,(0,t.f)({},y))});e.s(["f",0,G],254802)},496170,e=>{var t=e.i(75907),i=e.i(191788),a=e.i(691567),o=e.i(352262),s=e.i(820367),r=e.i(454311),l=e.i(358024),n=e.i(459241),u=e.i(612838),f=e.i(685448),d=e.i(226210),c=e.i(805910),m=e.i(752727),$=e.i(254802),y=e.i(138504),_=e.i(32760),q=e.i(309236);let b=i.forwardRef(function(e,i){let a=(0,n.f)(),s=(0,u.Q)(),b=(0,l.f)(e,"MuiDesktopDatePicker"),I=(0,t.f)({day:y.f,month:y.f,year:y.f},b.viewRenderers),p=(0,t.f)({},b,{viewRenderers:I,format:(0,_.a)(s,b,!1),yearsPerRow:b.yearsPerRow??4,slots:(0,t.f)({openPickerIcon:m.a,field:$.f},b.slots),slotProps:(0,t.f)({},b.slotProps,{field:e=>(0,t.f)({},(0,o.f)(b.slotProps?.field,e),(0,d.b)(b),{ref:i}),toolbar:(0,t.f)({hidden:!0},b.slotProps?.toolbar)})}),{renderPicker:h}=(0,c.f)({props:p,valueManager:r.X,valueType:"date",getOpenDialogAriaText:(0,q.K)({utils:s,formatKey:"fullDate",contextTranslation:a.openDatePickerDialogue,propsTranslation:p.localeText?.openDatePickerDialogue}),validator:f.f});return h()});b.propTypes={autoFocus:a.default.bool,className:a.default.string,closeOnSelect:a.default.bool,dayOfWeekFormatter:a.default.func,defaultValue:a.default.object,disabled:a.default.bool,disableFuture:a.default.bool,disableHighlightToday:a.default.bool,disableOpenPicker:a.default.bool,disablePast:a.default.bool,displayWeekNumber:a.default.bool,enableAccessibleFieldDOMStructure:a.default.any,fixedWeekNumber:a.default.number,format:a.default.string,formatDensity:a.default.oneOf(["dense","spacious"]),inputRef:s.f,label:a.default.node,loading:a.default.bool,localeText:a.default.object,maxDate:a.default.object,minDate:a.default.object,monthsPerRow:a.default.oneOf([3,4]),name:a.default.string,onAccept:a.default.func,onChange:a.default.func,onClose:a.default.func,onError:a.default.func,onMonthChange:a.default.func,onOpen:a.default.func,onSelectedSectionsChange:a.default.func,onViewChange:a.default.func,onYearChange:a.default.func,open:a.default.bool,openTo:a.default.oneOf(["day","month","year"]),orientation:a.default.oneOf(["landscape","portrait"]),readOnly:a.default.bool,reduceAnimations:a.default.bool,referenceDate:a.default.object,renderLoading:a.default.func,selectedSections:a.default.oneOfType([a.default.oneOf(["all","day","empty","hours","meridiem","minutes","month","seconds","weekDay","year"]),a.default.number]),shouldDisableDate:a.default.func,shouldDisableMonth:a.default.func,shouldDisableYear:a.default.func,showDaysOutsideCurrentMonth:a.default.bool,slotProps:a.default.object,slots:a.default.object,sx:a.default.oneOfType([a.default.arrayOf(a.default.oneOfType([a.default.func,a.default.object,a.default.bool])),a.default.func,a.default.object]),timezone:a.default.string,value:a.default.object,view:a.default.oneOf(["day","month","year"]),viewRenderers:a.default.shape({day:a.default.func,month:a.default.func,year:a.default.func}),views:a.default.arrayOf(a.default.oneOf(["day","month","year"]).isRequired),yearsOrder:a.default.oneOf(["asc","desc"]),yearsPerRow:a.default.oneOf([3,4])},e.s(["f",0,b])},220200,e=>{var t=e.i(75907),i=e.i(191788),a=e.i(691567),o=e.i(352262),s=e.i(820367),r=e.i(156240),l=e.i(358024),n=e.i(459241),u=e.i(612838),f=e.i(226210),d=e.i(685448),c=e.i(254802),m=e.i(454311),$=e.i(138504),y=e.i(32760),_=e.i(309236);let q=i.forwardRef(function(e,i){let a=(0,n.f)(),s=(0,u.Q)(),q=(0,l.f)(e,"MuiMobileDatePicker"),b=(0,t.f)({day:$.f,month:$.f,year:$.f},q.viewRenderers),I=(0,t.f)({},q,{viewRenderers:b,format:(0,y.a)(s,q,!1),slots:(0,t.f)({field:c.f},q.slots),slotProps:(0,t.f)({},q.slotProps,{field:e=>(0,t.f)({},(0,o.f)(q.slotProps?.field,e),(0,f.b)(q),{ref:i}),toolbar:(0,t.f)({hidden:!1},q.slotProps?.toolbar)})}),{renderPicker:p}=(0,r.f)({props:I,valueManager:m.X,valueType:"date",getOpenDialogAriaText:(0,_.K)({utils:s,formatKey:"fullDate",contextTranslation:a.openDatePickerDialogue,propsTranslation:I.localeText?.openDatePickerDialogue}),validator:d.f});return p()});q.propTypes={autoFocus:a.default.bool,className:a.default.string,closeOnSelect:a.default.bool,dayOfWeekFormatter:a.default.func,defaultValue:a.default.object,disabled:a.default.bool,disableFuture:a.default.bool,disableHighlightToday:a.default.bool,disableOpenPicker:a.default.bool,disablePast:a.default.bool,displayWeekNumber:a.default.bool,enableAccessibleFieldDOMStructure:a.default.any,fixedWeekNumber:a.default.number,format:a.default.string,formatDensity:a.default.oneOf(["dense","spacious"]),inputRef:s.f,label:a.default.node,loading:a.default.bool,localeText:a.default.object,maxDate:a.default.object,minDate:a.default.object,monthsPerRow:a.default.oneOf([3,4]),name:a.default.string,onAccept:a.default.func,onChange:a.default.func,onClose:a.default.func,onError:a.default.func,onMonthChange:a.default.func,onOpen:a.default.func,onSelectedSectionsChange:a.default.func,onViewChange:a.default.func,onYearChange:a.default.func,open:a.default.bool,openTo:a.default.oneOf(["day","month","year"]),orientation:a.default.oneOf(["landscape","portrait"]),readOnly:a.default.bool,reduceAnimations:a.default.bool,referenceDate:a.default.object,renderLoading:a.default.func,selectedSections:a.default.oneOfType([a.default.oneOf(["all","day","empty","hours","meridiem","minutes","month","seconds","weekDay","year"]),a.default.number]),shouldDisableDate:a.default.func,shouldDisableMonth:a.default.func,shouldDisableYear:a.default.func,showDaysOutsideCurrentMonth:a.default.bool,slotProps:a.default.object,slots:a.default.object,sx:a.default.oneOfType([a.default.arrayOf(a.default.oneOfType([a.default.func,a.default.object,a.default.bool])),a.default.func,a.default.object]),timezone:a.default.string,value:a.default.object,view:a.default.oneOf(["day","month","year"]),viewRenderers:a.default.shape({day:a.default.func,month:a.default.func,year:a.default.func}),views:a.default.arrayOf(a.default.oneOf(["day","month","year"]).isRequired),yearsOrder:a.default.oneOf(["asc","desc"]),yearsPerRow:a.default.oneOf([3,4])},e.s(["f",0,q])}])})();