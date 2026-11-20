(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,886292,e=>{var t=e.i(159080);let i=t.f`
  query GetTagsForEntity(
    $entityId: Int!
    $entity: String!
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    tags: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "tags" }
        _not: {
          _or: [
            { clientMeta: { _contains: { isSystemTag: true } } }
            { name: { _eq: "Follow on job" } }
            { name: { _eq: "Remedial quote" } }
            { name: { _eq: "On hold" } }
            { name: { _eq: "Time held" } }
            { clientMeta: { _has_key: "systemTagKey" } }
            { Taxonomy_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } } }
          ]
        }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      name
      meta: clientMeta
    }
  }
`,r=t.f`
  query GetEntityTags($entityId: Int!, $entity: String!) {
    tags: Taxonomy_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Taxonomy: { status: { _eq: "active" }, type: { _eq: "tags" } }
      }
      order_by: { id: desc }
    ) {
      id
      createdAt
      meta
      tag: Taxonomy {
        id
        name
        meta: clientMeta
      }
    }
  }
`,a=t.f`
  query GetTagsForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { name: { _ilike: $q }, status: { _eq: "active" }, type: { _eq: "tags" } }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      value: id
      label: name
    }
  }
`;e.s(["J",0,r,"r",0,i,"T",0,a])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`;let m=t.f`
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
`,d=t.f`
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
`,h=t.f`
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
`,g=t.f`
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
`,A=t.f`
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
`,T=t.f`
  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
    }
  }
`,w=t.f`
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
`,k=t.f`
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
`;e.s(["V",0,d,"M",0,f,"J",0,F,"c",0,q,"m",0,o,"_",0,n,"W",0,s,"B",0,l,"a",0,C,"v",0,S,"S",0,k,"Z",0,w,"X",0,i,"D",0,h,"Y",0,u,"g",0,I,"b",0,_,"h",0,$,"o",0,y,"j",0,A,"O",0,b,"d",0,v,"T",0,p,"U",0,T,"i",0,r,"e",0,a,"z",0,g,"A",0,x,"p",0,m,"P",0,c])},827010,e=>{var t=e.i(159080);e.i(851123);let i=t.f`
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
`,r=t.f`
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
`,a=t.f`
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
`,n=t.f`
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
`,o=t.f`
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
`,m=t.f`
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
`,d=t.f`
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
`,f=t.f`
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
`,_=t.f`
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
`,I=t.f`
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
`,b=t.f`
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
`,h=t.f`
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
      meta: clientMeta
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
        meta: clientMeta
      }
    }
  }
`;let g=t.f`
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
`,x=t.f`
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
`,A=t.f`
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
`,T=t.f`
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
`;e.s(["V",0,r,"i",0,i,"_",0,h,"B",0,n,"v",0,a,"d",0,A,"r",0,s,"O",0,g,"f",0,b,"$",0,l,"C",0,o,"o",0,c,"q",0,u,"g",0,x,"Z",0,m,"Y",0,S,"k",0,d,"j",0,v,"U",0,f,"N",0,q,"T",0,_,"P",0,y,"h",0,T,"J",0,p,"p",0,I,"Q",0,$])},271621,331150,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(738251),a=e.i(755548),n=e.i(813843),s=e.i(799083),l=e.i(668921),o=e.i(152078),c=e.i(632784),u=e.i(606255),m=e.i(530252),d=e.i(984636),f=e.i(652148),$=e.i(115871),_=e.i(824451),y=e.i(881128);let q=e=>"checkboxes"===e||"multi_select"===e?[]:"time_range"===e?{start:"",end:""}:"",I=(e,t)=>null==e||("string"==typeof e?0===e.trim().length:Array.isArray(e)?0===e.length:"number"==typeof e?!Number.isFinite(e):"time_range"===t&&(!e.start||!e.end)),p=(e,t)=>e===t||(Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,i)=>e===t[i]):"object"==typeof e&&"object"==typeof t&&!!e&&!!t&&JSON.stringify(e)===JSON.stringify(t)),b=["http:","https:","mailto:","tel:"],v=e=>{if(""===e)return!0;try{return b.includes(new URL(e).protocol)}catch{return!1}},h="End time must be after the start time",g="Enter a valid link (https://…, mailto: or tel:)",S=(e,t)=>{if("link"===t)return v("string"==typeof e?e:"")?null:g;if("time_range"===t){let t=e??{};if(!!t.start!=!!t.end)return"Enter both a start and an end time";if(t.start&&t.end&&t.start>t.end)return h}return null};e.s(["g",0,g,"W",0,h,"p",0,S,"F",0,q,"L",0,e=>`${e.definition.id}:${e.ownerId??"primary"}`,"o",0,v,"M",0,(e,t)=>null!=S(e,t),"N",0,I,"u",0,p],331150);let x=e=>{let{field:i,value:a,onChange:q,error:I,helper:p,inline:b}=e,{definition:S}=i,x=S.config??null,A=(0,y.f)(),T=(0,t.jsxs)(t.Fragment,{children:[S.name,S.required&&(0,t.jsx)(r.f,{component:"sup",sx:{color:"error.main",ml:"2px"},children:"*"})]}),w=b?"standard":"outlined";switch(S.fieldSubtype){case"long_text":{let e=x?.long_text?.maxLength;return(0,t.jsx)(f.f,{fullWidth:!0,multiline:!0,minRows:1,maxRows:8,size:"small",variant:w,color:"secondary",label:T,value:a??"",inputProps:null!=e?{maxLength:e}:void 0,onChange:t=>{let i=t.target.value;null!=e&&i.length>e||q(i)},error:I,helperText:p||(null!=e?`${(a??"").length}/${e}`:"")})}case"number":{let{min:e,max:i,integerOnly:r}=x?.number??{};return(0,t.jsx)(f.f,{fullWidth:!0,type:"number",size:"small",variant:w,color:"secondary",label:T,value:a??"",inputProps:{...null!=e&&{min:e},...null!=i&&{max:i},...r&&{step:1}},onChange:t=>{if(""===t.target.value)return q(null);let a=Number(t.target.value);Number.isFinite(a)&&(r&&(a=Math.trunc(a)),null!=e&&a<e&&(a=e),null!=i&&a>i&&(a=i),q(a))},error:I,helperText:p})}case"range":{let{min:e=0,max:i=100,step:r=1}=x?.range??{};return(0,t.jsx)(f.f,{fullWidth:!0,type:"number",size:"small",variant:w,color:"secondary",label:T,value:a??"",inputProps:{min:e,max:i,step:r},onChange:t=>{if(""===t.target.value)return q(null);let a=Number(t.target.value);Number.isFinite(a)&&(a<e&&(a=e),a>i&&(a=i),r>0&&r<=i-e&&((a=Math.round((a-e)/r)*r+e)<e&&(a=e),a>i&&(a=i)),q(a))},error:I,helperText:p||`${e}–${i}, in steps of ${r}`})}case"currency":return(0,t.jsx)(f.f,{fullWidth:!0,type:"number",size:"small",variant:w,color:"secondary",label:T,value:a??"",onChange:e=>{if(""===e.target.value)return q(null);let t=Number(e.target.value);q(Number.isFinite(t)?t:null)},error:I,helperText:p,InputProps:{startAdornment:(0,t.jsx)(r.f,{sx:{mr:1},children:A})}});case"date":return(0,t.jsx)(f.f,{fullWidth:!0,type:"date",size:"small",variant:w,color:"secondary",label:T,value:a??"",onChange:e=>q(e.target.value||null),InputLabelProps:{shrink:!0},error:I,helperText:p});case"time":return(0,t.jsx)(f.f,{fullWidth:!0,type:"time",size:"small",variant:w,color:"secondary",label:T,value:a??"",onChange:e=>q(e.target.value||null),InputLabelProps:{shrink:!0},error:I,helperText:p});case"time_range":{let e=a??{},i=!!(e.start&&e.end&&e.start>e.end);return(0,t.jsxs)(n.f,{direction:"row",gap:1,children:[(0,t.jsx)(f.f,{type:"time",size:"small",variant:w,color:"secondary",label:T,InputLabelProps:{shrink:!0},value:e.start??"",onChange:t=>q({start:t.target.value,end:e.end??""}),error:I||i,helperText:i?h:p}),(0,t.jsx)(f.f,{type:"time",size:"small",variant:w,color:"secondary",label:"To",InputLabelProps:{shrink:!0},value:e.end??"",onChange:t=>q({start:e.start??"",end:t.target.value}),error:I||i,helperText:i?h:p})]})}case"link":{let e=a??"",i=!v(e);return(0,t.jsx)(f.f,{fullWidth:!0,type:"url",size:"small",variant:w,color:"secondary",label:T,value:e,onChange:e=>q(e.target.value),error:I||i,helperText:i?g:p||"https://…"})}case"dropdown":{let e=S.options.filter(e=>e.active||e.value===a).map(e=>({value:e.value,label:e.active?e.label:`${e.label} (inactive)`})),i=e.find(e=>e.value===a)??null;return(0,t.jsx)(_.f,{size:"small",variant:w,color:"secondary",label:T,options:e,value:i,onChange:(e,t)=>q(t?t.value:""),error:I,helperText:p})}case"radio":return(0,t.jsxs)(l.f,{error:I,children:[T&&(0,t.jsx)(u.f,{sx:{fontSize:12,fontWeight:700,color:"text.secondary",mb:.5,"&.Mui-focused":{color:"text.secondary"}},children:T}),(0,t.jsx)(d.f,{value:a??"",onChange:e=>q(e.target.value),children:S.options.filter(e=>e.active||e.value===a).map(e=>(0,t.jsx)(o.f,{value:e.value,control:(0,t.jsx)(m.f,{size:"small"}),label:e.active?e.label:`${e.label} (inactive)`},e.value))}),p&&(0,t.jsx)($.f,{variant:"caption",sx:{color:I?"error.main":"text.secondary"},children:p})]});case"checkboxes":case"multi_select":{let e=Array.isArray(a)?a:[];return(0,t.jsxs)(l.f,{error:I,children:[T&&(0,t.jsx)(u.f,{sx:{fontSize:12,fontWeight:700,color:"text.secondary",mb:.5,"&.Mui-focused":{color:"text.secondary"}},children:T}),(0,t.jsx)(c.f,{children:S.options.filter(t=>t.active||e.includes(t.value)).map(i=>(0,t.jsx)(o.f,{control:(0,t.jsx)(s.f,{size:"small",checked:e.includes(i.value),onChange:()=>{let t;return t=i.value,q(e.includes(t)?e.filter(e=>e!==t):[...e,t])}}),label:i.active?i.label:`${i.label} (inactive)`},i.value))}),p&&(0,t.jsx)($.f,{variant:"caption",sx:{color:I?"error.main":"text.secondary"},children:p})]})}default:return(0,t.jsx)(f.f,{fullWidth:!0,size:"small",variant:w,color:"secondary",label:T,value:a??"",onChange:e=>q(e.target.value),error:I,helperText:p})}};var A=e.i(569373);let T=e=>{let{field:i}=e,{definition:r,value:a}=i,s=(0,y.f)(),l=(0,A.r)(a,r,{currencySymbol:s});return(0,t.jsxs)(n.f,{gap:.5,sx:{minWidth:0},children:[(0,t.jsx)($.f,{variant:"caption",sx:{color:"text.secondary",fontWeight:600},children:r.name}),(0,t.jsx)($.f,{variant:"body2",sx:{color:l===A.W?"text.disabled":"text.primary",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:l}),r.helpText&&(0,t.jsx)($.f,{variant:"caption",sx:{color:"text.secondary"},children:r.helpText})]})},w=(e,t,i)=>e??t??q(i);e.s(["f",0,e=>{let{field:s,readOnly:l,deferred:o,inline:c,forceShowErrors:u,onLocalChange:m,onSave:d}=e,{definition:f,value:$}=s,_=w($,f.defaultValue,f.fieldSubtype),[y,q]=(0,i.useState)(_),[b,v]=(0,i.useState)(!1),[h,g]=(0,i.useState)(!1),A=(0,i.useRef)(_),k=(0,i.useRef)(_),F=(0,i.useRef)(m);if(F.current=m,(0,i.useEffect)(()=>{let e=!p(A.current,k.current),t=w($,f.defaultValue,f.fieldSubtype);k.current=t,e||(A.current=t,q(t),F.current?.(t))},[$,f.defaultValue,f.fieldSubtype]),l)return(0,t.jsx)(T,{field:s});let C=!p(y,_),G=f.required&&I(y,f.fieldSubtype),L=S(y,f.fieldSubtype),U=null!=L,j=async()=>{if(C&&!G&&!U){v(!0);try{let e=I(y,f.fieldSubtype)?null:y;await d(e)}finally{v(!1)}}},N=h||u?G?`${f.name} is required.`:L:null,M=N??f.helpText??"";return(0,t.jsx)(r.f,{onBlur:()=>g(!0),children:(0,t.jsxs)(n.f,{direction:"row",gap:2,alignItems:"flex-start",children:[(0,t.jsx)(r.f,{sx:{flex:1,minWidth:0},children:(0,t.jsx)(x,{field:s,value:y,onChange:e=>{A.current=e,q(e),m?.(e)},error:!!N,helper:M,inline:c})}),!o&&(0,t.jsx)(a.f,{variant:C?"contained":"outlined",size:"small",disabled:!C||G||U||b,onClick:j,sx:{flexShrink:0,mt:.5*!c},children:b?"Saving…":C?"Save":"Saved"})]})})}],271621)},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=i.currencySymbol??"£",r="number"==typeof e?e.toFixed(2):String(e);return`${t}${r}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let i=t.options.find(t=>t.value===e);return i?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let i=t.options.find(t=>t.value===e);return i?.label??e}).join(", ");default:return String(e)}}])},247297,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),n=e.r(391398);i.default=(0,a.default)([(0,n.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,n.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}])})();