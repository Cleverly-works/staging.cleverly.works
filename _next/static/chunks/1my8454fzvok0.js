(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,122989,e=>{var t=e.i(391398),r=e.i(280445),i=e.i(668921),a=e.i(231637),n=e.i(901004),o=e.i(539117),l=e.i(471973);let s=(0,r.f)(i.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),u=(0,r.f)(a.f)(e=>{let{theme:t,variant:r}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===r&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:r,variant:i,label:a,options:c,value:d,onChange:f,helperText:m,error:_,hideLabel:y,renderOption:p,...$}=e;return(0,t.jsxs)(s,{variant:i,fullWidth:r,error:_,hiddenLabel:y,children:[!y&&(0,t.jsx)(u,{variant:i,children:a}),(0,t.jsx)(o.f,{fullWidth:r,displayEmpty:!0,value:d||"",onChange:f,sx:{position:"relative"},renderValue:()=>{let e=c.find(e=>e.value===d);return e?e.label:""},error:_,...$,children:c.length?c.map(e=>(0,t.jsx)(n.f,{value:e.value,disabled:e.disabled,children:p?p(e):e.label},e.value)):(0,t.jsx)(n.f,{disabled:!0,value:"",children:"No options"})}),m&&(0,t.jsx)(l.f,{error:_,children:m})]})}])},59626,694426,e=>{var t=e.i(159080),r=e.i(98926),i=e.i(511667);let a=function(){let{onError:e,refetchQueries:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=(0,r.f)(),[n,{isLoading:o}]=(0,i.f)("/taxonomy",{queryKey:"taxonomy-create",method:"POST",onError:e}),[l,{isLoading:s}]=(0,i.f)("/taxonomy/:taxonomyId",{queryKey:"taxonomy-update",method:"PUT",onError:e}),u=async e=>(e&&t?.length&&await a.refetchQueries({include:t}),e);return{createTaxonomy:async e=>u(await n({body:e})),updateTaxonomy:async(e,t)=>u(await l({body:t,pathParams:{taxonomyId:e}})),creating:o,updating:s}};e.s(["f",0,a],694426);let n=t.f`
  fragment TagWriteFields on Taxonomy {
    name
    meta
    clientMeta
  }
`,o=e=>{let{id:t,name:r,meta:i}=e;return{id:t,name:r,meta:i}};e.s(["f",0,function(){let{onError:e,refetchQueries:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=(0,r.f)(),{createTaxonomy:s,updateTaxonomy:u,creating:c,updating:d}=a({onError:e,refetchQueries:t}),[f,{isLoading:m}]=(0,i.f)("/taxonomy/tags/attach",{queryKey:"tag-attach",method:"POST",onError:e}),[_]=(0,i.f)("/taxonomy/tags/detach",{queryKey:"tag-detach",method:"POST",onError:e}),[y,{isLoading:p}]=(0,i.f)("/taxonomy/tags/links/:linkId",{queryKey:"tag-link-remove",method:"DELETE",onError:e}),$=async e=>(e&&t?.length&&await l.refetchQueries({include:t}),e);return{createTag:async e=>{let t=await s({type:"tags",status:"active",name:e,meta:{color:"#0679d8"},isGroup:!1});return t&&o(t)},updateTag:async(e,t)=>{let r=await u(e,t);if(r)return l.writeFragment({id:l.cache.identify({__typename:"Taxonomy",id:e}),fragment:n,data:{name:r.name,meta:r.meta,clientMeta:r.meta}}),o(r)},attachTag:async(e,t)=>$(await f({body:{taxonomyId:e,targets:t}})),detachTag:async(e,t)=>$(await _({body:{taxonomyId:e,targets:t}})),removeLink:async e=>$(await y({pathParams:{linkId:e}})),creating:c,updating:d,attaching:m,removing:p}}],59626)},851123,e=>{var t=e.i(159080);let r=t.f`
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
`,i=t.f`
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
`,o=t.f`
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
`,s=t.f`
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
`,_=t.f`
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
`,p=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,$=t.f`
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
`,v=t.f`
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
`,w=t.f`
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
`,k=t.f`
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
`;e.s(["V",0,f,"M",0,m,"J",0,j,"c",0,$,"m",0,s,"_",0,n,"W",0,o,"B",0,l,"a",0,C,"v",0,w,"S",0,A,"Z",0,T,"X",0,r,"D",0,g,"Y",0,c,"g",0,b,"b",0,y,"h",0,_,"o",0,p,"j",0,S,"O",0,q,"d",0,h,"T",0,v,"U",0,k,"i",0,i,"e",0,a,"z",0,I,"A",0,x,"p",0,d,"P",0,u])},827010,e=>{var t=e.i(159080);e.i(851123);let r=t.f`
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
`,i=t.f`
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
`,o=t.f`
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
`,s=t.f`
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
`,c=t.f`
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
`,f=t.f`
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
`,_=t.f`
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
`,p=t.f`
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
`,$=t.f`
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
`,v=t.f`
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
`,q=t.f`
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
`;let I=t.f`
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
`,w=t.f`
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
`,S=t.f`
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
`,k=t.f`
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
`;e.s(["V",0,i,"i",0,r,"_",0,g,"B",0,n,"v",0,a,"d",0,S,"r",0,o,"O",0,I,"f",0,q,"$",0,l,"C",0,s,"o",0,u,"q",0,c,"g",0,x,"Z",0,d,"Y",0,w,"k",0,f,"j",0,h,"U",0,m,"N",0,$,"T",0,y,"P",0,p,"h",0,k,"J",0,v,"p",0,b,"Q",0,_])},418630,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(813843),a=e.i(68881),n=e.i(21557),o=e.i(594301),l=e.i(331150),s=e.i(936641),u=e.i(738251),c=e.i(40057),d=e.i(731800);let f=e=>{let{alerts:r}=e;return(0,t.jsx)(i.f,{gap:1,children:r.map(e=>{var r;let i=c.w[e.alertSeverity];return(0,t.jsx)(s.f,{variant:"filled",severity:"critical"===(r=e.alertSeverity)?"error":"warning"===r||"success"===r||"info"===r?r:"info",icon:(0,t.jsx)(d.f,{severity:e.alertSeverity,sx:{color:"inherit"}}),sx:e=>({background:e.palette[i].main,color:e.palette[i].contrastText,borderRadius:1,"& .MuiAlert-icon":{color:"inherit",opacity:1},"& .MuiAlert-message":{width:"100%"}}),children:(0,t.jsx)(u.f,{sx:{fontSize:14,lineHeight:1.5,fontWeight:600},children:e.alertText})},e.id)})})};var m=e.i(760981),_=e.i(302966),y=e.i(115871),p=e.i(162440),$=e.i(40511),b=e.i(407784),v=e.i(271621),q=e.i(280445),h=e.i(871931);let g=(0,q.f)(h.f)(e=>{let{theme:t}=e;return{backgroundColor:t.palette.background.paper,boxShadow:"rgba(53, 64, 82, 0.05) 0 0 14px 0",borderRadius:5,border:"none",marginBottom:"0.5rem","&:before":{display:"none"}}}),I=e=>{let{fields:r,surface:o,resolveOwner:s,surfaceOwner:u,readOnly:c,deferred:d,showDeferredCaption:f,sectionTitle:q,inline:h,forceShowErrors:I,onValueSaved:w,onReload:x,onLocalChange:S}=e,k=(0,n.f)(),T=async(e,t)=>{let r=s(e);if(null==r.dataOwnerId)return void k.show({content:"Save failed — this entity does not exist yet",severity:"error"});try{await (0,a.B)({definitionId:e.definition.id,dataOwnerType:r.dataOwnerType,dataOwnerId:r.dataOwnerId,sourceSurface:o,value:t}),w(e,t),k.show({content:`${e.definition.name} saved`,severity:"success"})}catch(t){let e=t instanceof a.b?t.message:"Save failed";k.show({content:e,severity:"error"}),x()}},A=(0,t.jsxs)(y.f,{variant:"caption",sx:{color:"text.secondary",display:"block",mb:1},children:["These answers are saved when the ",(e=>{switch(e){case"work_order":return"work order";case"expense":return"expense";case"ppm_item":return"PPM item";case"job_report":return"job report";default:return"record"}})(u)," is created."]}),j=(0,t.jsxs)(t.Fragment,{children:[f&&A,(0,t.jsx)(i.f,{gap:h?1.5:2,children:r.map(e=>(0,t.jsxs)(i.f,{gap:.5,children:[e.ownerLabel&&(0,t.jsx)(y.f,{variant:"caption",sx:{color:"text.secondary",fontWeight:600},children:e.ownerLabel}),(0,t.jsx)(v.f,{field:e,readOnly:c||"read_only"===e.permission,deferred:d,inline:h,forceShowErrors:I,onSave:t=>T(e,t),onLocalChange:t=>S?.(e,t)})]},(0,l.L)(e)))})]});return h?j:q?(0,t.jsx)(b.f,{title:q,children:j}):(0,t.jsxs)(g,{defaultExpanded:!0,children:[(0,t.jsx)(_.f,{expandIcon:(0,t.jsx)(p.default,{}),children:(0,t.jsxs)(i.f,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)($.default,{fontSize:"small",sx:{color:"text.secondary"}}),(0,t.jsx)(y.f,{typography:"h6",sx:{fontSize:16,fontWeight:700},children:"Custom fields"}),(0,t.jsxs)(y.f,{variant:"caption",sx:{color:"text.secondary"},children:["· ",r.length]})]})}),(0,t.jsx)(m.f,{sx:{pt:0},children:j})]})},w=(0,r.forwardRef)(function(e,s){let{surface:u,customerId:c,locationId:d,supplierId:m,assetId:_,assetIds:y,workOrderId:p,jobReportId:$,expenseId:b,ppmItemId:v,quoteId:q,invoiceId:h,sectionTitle:g,alertsOnly:w,fieldsOnly:S,inline:k,forceShowErrors:U,parentManaged:O,onPendingChange:P,readOnly:M}=e,[N,W]=(0,r.useState)(null),[B,R]=(0,r.useState)(!0),[E,z]=(0,r.useState)(0),[D,J]=(0,r.useState)(!1),V=(0,r.useRef)(new Map),Q=(0,r.useRef)(!0),K=(0,r.useRef)(0),H=T(y),X=(0,r.useMemo)(()=>A(H),[H]),{show:Y}=(0,n.f)(),{user:Z}=(0,o.f)(),ee=M||j(Z?.role,u),et=(0,r.useMemo)(()=>x(N?.alerts??[]),[N?.alerts]),er=N?.fields??[],ei=(0,r.useCallback)(e=>{let t=e.definition.dataOwner??F(u)??"work_order",r=e.ownerId??L(t,{customerId:c,locationId:d,supplierId:m,assetId:_,workOrderId:p,jobReportId:$,expenseId:b,ppmItemId:v,quoteId:q,invoiceId:h});return{dataOwnerType:t,dataOwnerId:r}},[u,c,d,m,_,p,$,b,v,q,h]),ea=(0,r.useRef)({data:N,onPendingChange:P,resolveFieldOwner:ei,surface:u,effectiveReadOnly:ee});ea.current={data:N,onPendingChange:P,resolveFieldOwner:ei,surface:u,effectiveReadOnly:ee};let en=(0,r.useCallback)(()=>{let{data:e,onPendingChange:t,resolveFieldOwner:r,surface:i,effectiveReadOnly:a}=ea.current;if(!t)return;let n=e?.fields??[],o=F(i),s=n.filter(e=>!C(e,a)),u=e=>(0,l.M)(V.current.get((0,l.L)(e)),e.definition.fieldSubtype),c=s.filter(e=>u(e)&&!(e.definition.required&&(0,l.N)(V.current.get((0,l.L)(e)),e.definition.fieldSubtype))).map(G),d=s.filter(e=>!u(e)).map(e=>{let t=r(e),a=V.current.get((0,l.L)(e));return{definitionId:e.definition.id,value:(0,l.N)(a,e.definition.fieldSubtype)?null:a,dataOwnerType:t.dataOwnerType,sourceSurface:i,dataOwnerId:t.dataOwnerId,hadStoredValue:!(0,l.N)(e.value,e.definition.fieldSubtype),required:e.definition.required}}),f=n.filter(e=>{if(!e.definition.required||C(e,a))return!1;if((0,l.N)(V.current.get((0,l.L)(e)),e.definition.fieldSubtype))return!0;let t=r(e);return null==t.dataOwnerId&&t.dataOwnerType!==o}).map(G);t({values:d,hasRequiredGap:f.length>0,missingRequiredFieldNames:f,invalidFieldNames:c,stale:Q.current})},[]);if((0,r.useEffect)(()=>{let e=!1,t=++K.current;return R(!0),Q.current=!0,en(),(0,a.C)({surface:u,customerId:c,locationId:d,supplierId:m,assetId:_,assetIds:X,workOrderId:p,jobReportId:$,expenseId:b,ppmItemId:v,quoteId:q,invoiceId:h}).then(t=>{if(!e){if(!t?.fields)throw Error("Malformed render response");W(t)}}).catch(t=>{e||Y({content:t instanceof a.b?t.message:"Failed to load custom items",severity:"error"})}).finally(()=>{e||t!==K.current||(R(!1),Q.current=!1,en())}),()=>{e=!0,Q.current&&(Q.current=!1,en())}},[u,c,d,m,_,X,p,$,b,v,q,h,E,Y,en]),(0,r.useEffect)(()=>{if(!N)return;let e=V.current,t=new Map;for(let r of N.fields){let i=(0,l.L)(r);t.set(i,e.has(i)?e.get(i):r.value??r.definition.defaultValue??(0,l.F)(r.definition.fieldSubtype))}V.current=t,en()},[N,en]),(0,r.useImperativeHandle)(s,()=>({validate(){J(!0);let e=N?.fields??[],t=F(u);for(let r of e){if(C(r,ee))continue;let e=V.current.get((0,l.L)(r));if((0,l.M)(e,r.definition.fieldSubtype))return!1;if(!r.definition.required)continue;if((0,l.N)(e,r.definition.fieldSubtype))return!1;let i=ei(r);if(null==i.dataOwnerId&&i.dataOwnerType!==t)return!1}return!0},getPendingValues:()=>(N?.fields??[]).filter(e=>!C(e,ee)).filter(e=>!(0,l.M)(V.current.get((0,l.L)(e)),e.definition.fieldSubtype)).map(e=>{let t=ei(e),r=V.current.get((0,l.L)(e));return{definitionId:e.definition.id,value:(0,l.N)(r,e.definition.fieldSubtype)?null:r,dataOwnerType:t.dataOwnerType,sourceSurface:u,dataOwnerId:t.dataOwnerId,hadStoredValue:!(0,l.N)(e.value,e.definition.fieldSubtype),required:e.definition.required}})})),B&&!N||0===et.length&&0===er.length)return null;let eo=F(u),el=eo?L(eo,{customerId:c,locationId:d,supplierId:m,assetId:_,workOrderId:p,jobReportId:$,expenseId:b,ppmItemId:v,quoteId:q,invoiceId:h}):null,es=null==eo,eu=!w&&er.length>0,ec=!S&&et.length>0;return(0,t.jsxs)(i.f,{gap:1,sx:{mb:1,width:"100%"},children:[ec&&(0,t.jsx)(f,{alerts:et}),eu&&(0,t.jsx)(I,{fields:er,surface:u,resolveOwner:ei,surfaceOwner:eo,readOnly:ee||es,deferred:O||null==el,showDeferredCaption:!es&&null==el,sectionTitle:g,inline:k,forceShowErrors:U||D,onValueSaved:(e,t)=>{let r=(0,l.L)(e);W(e=>e?{...e,fields:e.fields.map(e=>(0,l.L)(e)===r?{...e,value:t}:e)}:e)},onReload:()=>z(e=>e+1),onLocalChange:(e,t)=>{V.current.set((0,l.L)(e),t),en()}})]})}),x=e=>{let t={critical:0,warning:1,success:2,info:3};return[...e].sort((e,r)=>t[e.alertSeverity]-t[r.alertSeverity])},S="absent",k="ids:",T=e=>null==e?S:`${k}${e.join(",")}`,A=e=>{if(e===S)return;let t=e.slice(k.length);return t?t.split(",").map(Number):[]},j=(e,t)=>!!e&&!!("job_report"===t&&e.startsWith("customer_")),C=(e,t)=>t||"read_only"===e.permission,F=e=>"customer_details"===e||"customer_banner"===e?"customer":"location_details"===e||"location_banner"===e?"location":"supplier_details"===e||"supplier_banner"===e?"supplier":"asset_details"===e||"asset_custom_fields"===e||"asset_banner"===e?"asset":"job_report"===e?"job_report":"expense"===e?"expense":"ppm_item"===e?"ppm_item":"invoice"===e?null:e.startsWith("quote_")?"quote":e.startsWith("wo_")||"create_wo"===e||"create_wo_banner"===e?"work_order":null,L=(e,t)=>{switch(e){case"customer":return t.customerId??null;case"location":return t.locationId??null;case"supplier":return t.supplierId??null;case"asset":return t.assetId??null;case"work_order":return t.workOrderId??null;case"job_report":return t.jobReportId??null;case"expense":return t.expenseId??null;case"ppm_item":return t.ppmItemId??null;case"quote":return t.quoteId??null;default:return null}},G=e=>e.ownerLabel?`${e.definition.name} (${e.ownerLabel})`:e.definition.name;e.s(["f",0,w],418630)},271621,331150,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(738251),a=e.i(755548),n=e.i(813843),o=e.i(799083),l=e.i(668921),s=e.i(152078),u=e.i(632784),c=e.i(606255),d=e.i(530252),f=e.i(984636),m=e.i(652148),_=e.i(115871),y=e.i(824451),p=e.i(881128);let $=e=>"checkboxes"===e||"multi_select"===e?[]:"time_range"===e?{start:"",end:""}:"",b=(e,t)=>null==e||("string"==typeof e?0===e.trim().length:Array.isArray(e)?0===e.length:"number"==typeof e?!Number.isFinite(e):"time_range"===t&&(!e.start||!e.end)),v=(e,t)=>e===t||(Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,r)=>e===t[r]):"object"==typeof e&&"object"==typeof t&&!!e&&!!t&&JSON.stringify(e)===JSON.stringify(t)),q=["http:","https:","mailto:","tel:"],h=e=>{if(""===e)return!0;try{return q.includes(new URL(e).protocol)}catch{return!1}},g="End time must be after the start time",I="Enter a valid link (https://…, mailto: or tel:)",w=(e,t)=>{if("link"===t)return h("string"==typeof e?e:"")?null:I;if("time_range"===t){let t=e??{};if(!!t.start!=!!t.end)return"Enter both a start and an end time";if(t.start&&t.end&&t.start>t.end)return g}return null};e.s(["g",0,I,"W",0,g,"p",0,w,"F",0,$,"L",0,e=>`${e.definition.id}:${e.ownerId??"primary"}`,"o",0,h,"M",0,(e,t)=>null!=w(e,t),"N",0,b,"u",0,v],331150);let x=e=>{let{field:r,value:a,onChange:$,error:b,helper:v,inline:q}=e,{definition:w}=r,x=w.config??null,S=(0,p.f)(),k=(0,t.jsxs)(t.Fragment,{children:[w.name,w.required&&(0,t.jsx)(i.f,{component:"sup",sx:{color:"error.main",ml:"2px"},children:"*"})]}),T=q?"standard":"outlined";switch(w.fieldSubtype){case"long_text":{let e=x?.long_text?.maxLength;return(0,t.jsx)(m.f,{fullWidth:!0,multiline:!0,minRows:1,maxRows:8,size:"small",variant:T,color:"secondary",label:k,value:a??"",inputProps:null!=e?{maxLength:e}:void 0,onChange:t=>{let r=t.target.value;null!=e&&r.length>e||$(r)},error:b,helperText:v||(null!=e?`${(a??"").length}/${e}`:"")})}case"number":{let{min:e,max:r,integerOnly:i}=x?.number??{};return(0,t.jsx)(m.f,{fullWidth:!0,type:"number",size:"small",variant:T,color:"secondary",label:k,value:a??"",inputProps:{...null!=e&&{min:e},...null!=r&&{max:r},...i&&{step:1}},onChange:t=>{if(""===t.target.value)return $(null);let a=Number(t.target.value);Number.isFinite(a)&&(i&&(a=Math.trunc(a)),null!=e&&a<e&&(a=e),null!=r&&a>r&&(a=r),$(a))},error:b,helperText:v})}case"range":{let{min:e=0,max:r=100,step:i=1}=x?.range??{};return(0,t.jsx)(m.f,{fullWidth:!0,type:"number",size:"small",variant:T,color:"secondary",label:k,value:a??"",inputProps:{min:e,max:r,step:i},onChange:t=>{if(""===t.target.value)return $(null);let a=Number(t.target.value);Number.isFinite(a)&&(a<e&&(a=e),a>r&&(a=r),i>0&&i<=r-e&&((a=Math.round((a-e)/i)*i+e)<e&&(a=e),a>r&&(a=r)),$(a))},error:b,helperText:v||`${e}–${r}, in steps of ${i}`})}case"currency":return(0,t.jsx)(m.f,{fullWidth:!0,type:"number",size:"small",variant:T,color:"secondary",label:k,value:a??"",onChange:e=>{if(""===e.target.value)return $(null);let t=Number(e.target.value);$(Number.isFinite(t)?t:null)},error:b,helperText:v,InputProps:{startAdornment:(0,t.jsx)(i.f,{sx:{mr:1},children:S})}});case"date":return(0,t.jsx)(m.f,{fullWidth:!0,type:"date",size:"small",variant:T,color:"secondary",label:k,value:a??"",onChange:e=>$(e.target.value||null),InputLabelProps:{shrink:!0},error:b,helperText:v});case"time":return(0,t.jsx)(m.f,{fullWidth:!0,type:"time",size:"small",variant:T,color:"secondary",label:k,value:a??"",onChange:e=>$(e.target.value||null),InputLabelProps:{shrink:!0},error:b,helperText:v});case"time_range":{let e=a??{},r=!!(e.start&&e.end&&e.start>e.end);return(0,t.jsxs)(n.f,{direction:"row",gap:1,children:[(0,t.jsx)(m.f,{type:"time",size:"small",variant:T,color:"secondary",label:k,InputLabelProps:{shrink:!0},value:e.start??"",onChange:t=>$({start:t.target.value,end:e.end??""}),error:b||r,helperText:r?g:v}),(0,t.jsx)(m.f,{type:"time",size:"small",variant:T,color:"secondary",label:"To",InputLabelProps:{shrink:!0},value:e.end??"",onChange:t=>$({start:e.start??"",end:t.target.value}),error:b||r,helperText:r?g:v})]})}case"link":{let e=a??"",r=!h(e);return(0,t.jsx)(m.f,{fullWidth:!0,type:"url",size:"small",variant:T,color:"secondary",label:k,value:e,onChange:e=>$(e.target.value),error:b||r,helperText:r?I:v||"https://…"})}case"dropdown":{let e=w.options.filter(e=>e.active||e.value===a).map(e=>({value:e.value,label:e.active?e.label:`${e.label} (inactive)`})),r=e.find(e=>e.value===a)??null;return(0,t.jsx)(y.f,{size:"small",variant:T,color:"secondary",label:k,options:e,value:r,onChange:(e,t)=>$(t?t.value:""),error:b,helperText:v})}case"radio":return(0,t.jsxs)(l.f,{error:b,children:[k&&(0,t.jsx)(c.f,{sx:{fontSize:12,fontWeight:700,color:"text.secondary",mb:.5,"&.Mui-focused":{color:"text.secondary"}},children:k}),(0,t.jsx)(f.f,{value:a??"",onChange:e=>$(e.target.value),children:w.options.filter(e=>e.active||e.value===a).map(e=>(0,t.jsx)(s.f,{value:e.value,control:(0,t.jsx)(d.f,{size:"small"}),label:e.active?e.label:`${e.label} (inactive)`},e.value))}),v&&(0,t.jsx)(_.f,{variant:"caption",sx:{color:b?"error.main":"text.secondary"},children:v})]});case"checkboxes":case"multi_select":{let e=Array.isArray(a)?a:[];return(0,t.jsxs)(l.f,{error:b,children:[k&&(0,t.jsx)(c.f,{sx:{fontSize:12,fontWeight:700,color:"text.secondary",mb:.5,"&.Mui-focused":{color:"text.secondary"}},children:k}),(0,t.jsx)(u.f,{children:w.options.filter(t=>t.active||e.includes(t.value)).map(r=>(0,t.jsx)(s.f,{control:(0,t.jsx)(o.f,{size:"small",checked:e.includes(r.value),onChange:()=>{let t;return t=r.value,$(e.includes(t)?e.filter(e=>e!==t):[...e,t])}}),label:r.active?r.label:`${r.label} (inactive)`},r.value))}),v&&(0,t.jsx)(_.f,{variant:"caption",sx:{color:b?"error.main":"text.secondary"},children:v})]})}default:return(0,t.jsx)(m.f,{fullWidth:!0,size:"small",variant:T,color:"secondary",label:k,value:a??"",onChange:e=>$(e.target.value),error:b,helperText:v})}};var S=e.i(569373);let k=e=>{let{field:r}=e,{definition:i,value:a}=r,o=(0,p.f)(),l=(0,S.r)(a,i,{currencySymbol:o});return(0,t.jsxs)(n.f,{gap:.5,sx:{minWidth:0},children:[(0,t.jsx)(_.f,{variant:"caption",sx:{color:"text.secondary",fontWeight:600},children:i.name}),(0,t.jsx)(_.f,{variant:"body2",sx:{color:l===S.W?"text.disabled":"text.primary",whiteSpace:"pre-wrap",wordBreak:"break-word"},children:l}),i.helpText&&(0,t.jsx)(_.f,{variant:"caption",sx:{color:"text.secondary"},children:i.helpText})]})},T=(e,t,r)=>e??t??$(r);e.s(["f",0,e=>{let{field:o,readOnly:l,deferred:s,inline:u,forceShowErrors:c,onLocalChange:d,onSave:f}=e,{definition:m,value:_}=o,y=T(_,m.defaultValue,m.fieldSubtype),[p,$]=(0,r.useState)(y),[q,h]=(0,r.useState)(!1),[g,I]=(0,r.useState)(!1),S=(0,r.useRef)(y),A=(0,r.useRef)(y),j=(0,r.useRef)(d);if(j.current=d,(0,r.useEffect)(()=>{let e=!v(S.current,A.current),t=T(_,m.defaultValue,m.fieldSubtype);A.current=t,e||(S.current=t,$(t),j.current?.(t))},[_,m.defaultValue,m.fieldSubtype]),l)return(0,t.jsx)(k,{field:o});let C=!v(p,y),F=m.required&&b(p,m.fieldSubtype),L=w(p,m.fieldSubtype),G=null!=L,U=async()=>{if(C&&!F&&!G){h(!0);try{let e=b(p,m.fieldSubtype)?null:p;await f(e)}finally{h(!1)}}},O=g||c?F?`${m.name} is required.`:L:null,P=O??m.helpText??"";return(0,t.jsx)(i.f,{onBlur:()=>I(!0),children:(0,t.jsxs)(n.f,{direction:"row",gap:2,alignItems:"flex-start",children:[(0,t.jsx)(i.f,{sx:{flex:1,minWidth:0},children:(0,t.jsx)(x,{field:o,value:p,onChange:e=>{S.current=e,$(e),d?.(e)},error:!!O,helper:P,inline:u})}),!s&&(0,t.jsx)(a.f,{variant:C?"contained":"outlined",size:"small",disabled:!C||F||G||q,onClick:U,sx:{flexShrink:0,mt:.5*!u},children:q?"Saving…":C?"Save":"Saved"})]})})}],271621)},68881,e=>{var t=e.i(587882),r=e.i(303983),i=e.i(974261);let a=()=>`${i.M}/custom-fields`;class n extends Error{status;field;constructor(e,t,r){super(r),this.status=e,this.field=t,this.name="CustomFieldsApiError"}}async function o(e){let t={};try{t=await e.json()}catch{}throw new n(e.status,t.field??null,t.message??`Request failed with HTTP ${e.status}`)}async function l(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{method:"GET"},a=await fetch(e,{method:i.method,headers:(0,r.f)((0,t.f)()),body:void 0===i.body?void 0:JSON.stringify(i.body)});return a.ok?await a.json():o(a)}async function s(e){return l(`${a()}/definitions`,{method:"POST",body:e})}async function u(e,t){return l(`${a()}/definitions/${e}`,{method:"PATCH",body:t})}async function c(e,t){return l(`${a()}/definitions/${e}/publish`,{method:"POST",body:t})}async function d(e){return l(`${a()}/definitions/${e}/deactivate`,{method:"POST"})}async function f(e){return l(`${a()}/definitions/${e}/reactivate`,{method:"POST"})}async function m(e){return l(`${a()}/definitions/${e}/draft`,{method:"POST"})}async function _(e){return l(`${a()}/definitions/${e}/duplicate`,{method:"POST"})}async function y(e){return l(`${a()}/values`,{method:"POST",body:e})}async function p(e){return l(`${a()}/values/batch`,{method:"POST",body:{values:e}})}async function $(e,t){let r=[],i=[];for(let a of e){if(null==a.value&&(!a.hadStoredValue||a.required))continue;let e=a.dataOwnerId??t[a.dataOwnerType]??null;if(null==e){r.push(a.definitionId);continue}i.push({definitionId:a.definitionId,dataOwnerType:a.dataOwnerType,dataOwnerId:e,sourceSurface:a.sourceSurface,value:a.value})}return i.length>0&&await p(i),{skippedDefinitionIds:r}}async function b(e){let t=new URLSearchParams({surface:e.surface});return e.customerId&&t.set("customerId",String(e.customerId)),e.locationId&&t.set("locationId",String(e.locationId)),e.supplierId&&t.set("supplierId",String(e.supplierId)),e.assetId&&t.set("assetId",String(e.assetId)),null!=e.assetIds&&t.set("assetIds",e.assetIds.join(",")),e.workOrderId&&t.set("workOrderId",String(e.workOrderId)),e.jobReportId&&t.set("jobReportId",String(e.jobReportId)),e.expenseId&&t.set("expenseId",String(e.expenseId)),e.ppmItemId&&t.set("ppmItemId",String(e.ppmItemId)),e.quoteId&&t.set("quoteId",String(e.quoteId)),e.invoiceId&&t.set("invoiceId",String(e.invoiceId)),l(`${a()}/render?${t.toString()}`,{method:"GET"})}e.s(["b",0,n,"K",0,s,"m",0,d,"A",0,_,"r",0,c,"s",0,f,"C",0,b,"x",0,m,"q",0,u,"u",0,$,"B",0,y])},40057,731800,e=>{let t=["short_text","long_text","number","currency","dropdown","radio","checkboxes","multi_select","date","time","time_range","range","link"],r=["work_order","customer","location","supplier","asset","job_report","expense","ppm_item","quote"],i=["info","warning","critical","success"],a=["draft","active","inactive"],n=["create_wo","create_wo_banner","wo_overview","wo_job_details","wo_issue_reported","customer_details","location_details","supplier_details","asset_details","job_report","expense","ppm_item","wo_details","wo_custom_fields","wo_banner","quote_overview","quote_details","quote_custom_fields","quote_banner","invoice","customer_banner","supplier_banner","location_banner","asset_custom_fields","asset_banner"],o=["always","customer","location","supplier","asset","has_asset"],l=[{value:"work_order",label:"Work order"},{value:"work_order_creation",label:"Work order creation"},{value:"quote",label:"Quote"},{value:"job_report",label:"Job report"},{value:"invoice",label:"Invoice"},{value:"customer",label:"Customer"},{value:"supplier",label:"Supplier"},{value:"location",label:"Location"},{value:"asset",label:"Asset"},{value:"expense",label:"Job expense"},{value:"ppm_item",label:"PPM item"}],s={work_order_creation:[{location:"details",label:"Details",surface:"create_wo"},{location:"banner",label:"Banner",surface:"create_wo_banner"}],work_order:[{location:"overview",label:"Overview",surface:"wo_overview"},{location:"details",label:"Details",surface:"wo_details"},{location:"custom_fields",label:"Custom Fields",surface:"wo_custom_fields"},{location:"banner",label:"Banner",surface:"wo_banner"},{location:"job_details",label:"Job details",surface:"wo_job_details",hiddenFromNewPlacement:!0},{location:"issue_reported",label:"Issue reported",surface:"wo_issue_reported",hiddenFromNewPlacement:!0}],quote:[{location:"overview",label:"Overview",surface:"quote_overview"},{location:"details",label:"Details",surface:"quote_details"},{location:"custom_fields",label:"Custom Fields",surface:"quote_custom_fields"},{location:"banner",label:"Banner",surface:"quote_banner"}],job_report:[{location:"section",label:"Report section",surface:"job_report"}],invoice:[{location:"section",label:"Invoice",surface:"invoice"}],customer:[{location:"details",label:"Details",surface:"customer_details"},{location:"banner",label:"Banner",surface:"customer_banner"}],supplier:[{location:"details",label:"Details",surface:"supplier_details"},{location:"banner",label:"Banner",surface:"supplier_banner"}],location:[{location:"details",label:"Details",surface:"location_details"},{location:"banner",label:"Banner",surface:"location_banner"}],asset:[{location:"details",label:"Details",surface:"asset_details"},{location:"custom_fields",label:"Custom Fields",surface:"asset_custom_fields"},{location:"banner",label:"Banner",surface:"asset_banner"}],expense:[{location:"section",label:"Expense",surface:"expense"}],ppm_item:[{location:"section",label:"PPM item",surface:"ppm_item"}]},u={work_order:["work_order","work_order_creation","job_report","invoice"],quote:["quote","work_order","work_order_creation","invoice"],customer:["customer","work_order","work_order_creation","quote","job_report","invoice","location","asset"],location:["location","work_order","work_order_creation","quote","job_report","asset","invoice"],supplier:["supplier","work_order","work_order_creation","quote","job_report","invoice"],asset:["asset","work_order","work_order_creation","quote","job_report","invoice"],job_report:["job_report"],expense:["expense"],ppm_item:["ppm_item","work_order"]},c=Object.fromEntries(Object.entries(s).flatMap(e=>{let[t,r]=e;return r.map(e=>[e.surface,t])}));e.s(["s",0,[{value:"admin",label:"Administrators"},{value:"customer",label:"Customers"},{value:"supplier",label:"Suppliers"}],"M",0,[{value:"work_order",label:"Work order"},{value:"quote",label:"Quote"},{value:"customer",label:"Customer"},{value:"location",label:"Location"},{value:"supplier",label:"Supplier"},{value:"asset",label:"Asset"},{value:"job_report",label:"Job report"},{value:"expense",label:"Job expense"},{value:"ppm_item",label:"PPM item"}],"f",0,c,"q",0,s,"l",0,l,"u",0,[{value:"read_only",label:"Read only"},{value:"edit",label:"Edit the value"}],"h",0,[{value:"info",label:"Info"},{value:"warning",label:"Warning"},{value:"critical",label:"Critical"},{value:"success",label:"Success"}],"F",0,{info:{bg:"#0288d1",fg:"#fff",label:"Info"},warning:{bg:"#ed6c02",fg:"#fff",label:"Warning"},critical:{bg:"#d32f2f",fg:"#fff",label:"Critical"},success:{bg:"#2e7d32",fg:"#fff",label:"Success"}},"_",0,[{value:"draft",label:"Draft"},{value:"active",label:"Active"},{value:"inactive",label:"Archived"}],"j",0,[{value:"short_text",label:"Short text",category:"text"},{value:"long_text",label:"Long text",category:"text"},{value:"link",label:"Link",category:"text"},{value:"number",label:"Number",category:"numeric"},{value:"currency",label:"Currency",category:"numeric"},{value:"range",label:"Range",category:"numeric"},{value:"dropdown",label:"Dropdown",category:"choice"},{value:"radio",label:"Radio buttons",category:"choice"},{value:"checkboxes",label:"Checkboxes",category:"choice"},{value:"multi_select",label:"Multi-select",category:"choice"},{value:"date",label:"Date",category:"datetime"},{value:"time",label:"Time",category:"datetime"},{value:"time_range",label:"Time range",category:"datetime"}],"X",0,[{value:"create_wo",label:"Work order creation (Details)",group:"work_order"},{value:"create_wo_banner",label:"Work order creation (Banner)",group:"work_order"},{value:"wo_overview",label:"Work order (Overview)",group:"work_order"},{value:"wo_job_details",label:"Work order (Job details)",group:"work_order"},{value:"wo_issue_reported",label:"Work order (Issue reported)",group:"work_order"},{value:"customer_details",label:"Customer (Details)",group:"entity"},{value:"location_details",label:"Location (Details)",group:"entity"},{value:"supplier_details",label:"Supplier (Details)",group:"entity"},{value:"asset_details",label:"Asset (Details)",group:"entity"},{value:"job_report",label:"Job report",group:"work_order"},{value:"expense",label:"Job expense",group:"work_order"},{value:"ppm_item",label:"PPM item",group:"work_order"},{value:"wo_details",label:"Work order (Details)",group:"work_order"},{value:"wo_custom_fields",label:"Work order (Custom Fields)",group:"work_order"},{value:"wo_banner",label:"Work order (Banner)",group:"work_order"},{value:"quote_overview",label:"Quote (Overview)",group:"work_order"},{value:"quote_details",label:"Quote (Details)",group:"work_order"},{value:"quote_custom_fields",label:"Quote (Custom Fields)",group:"work_order"},{value:"quote_banner",label:"Quote (Banner)",group:"work_order"},{value:"invoice",label:"Invoice",group:"work_order"},{value:"customer_banner",label:"Customer (Banner)",group:"entity"},{value:"supplier_banner",label:"Supplier (Banner)",group:"entity"},{value:"location_banner",label:"Location (Banner)",group:"entity"},{value:"asset_custom_fields",label:"Asset (Custom Fields)",group:"entity"},{value:"asset_banner",label:"Asset (Banner)",group:"entity"}],"W",0,(e,t)=>"ppm_item"===e&&"work_order_creation"===c[t],"c",0,(e,t)=>(u[e]??[]).includes(c[t]),"$",0,e=>"string"==typeof e&&i.includes(e),"N",0,e=>"string"==typeof e&&r.includes(e),"k",0,e=>"string"==typeof e&&t.includes(e),"P",0,e=>"string"==typeof e&&o.includes(e),"i",0,e=>"string"==typeof e&&a.includes(e),"I",0,e=>"string"==typeof e&&n.includes(e),"o",0,e=>{let t=c[e];if(!t)return null;let r=s[t],i=r?.find(t=>t.surface===e);return{page:t,location:i?.location??r[0]?.location??"section"}},"A",0,e=>{if(!e)return l;let t=u[e]??[];return l.filter(e=>t.includes(e.value))},"t",0,e=>{let t=s[e],r=t.find(e=>"details"===e.location)??t[0];return{surface:r?.surface??"wo_overview",permission:"edit"}},"w",0,{info:"info",warning:"warning",critical:"error",success:"success"},"T",0,(e,t)=>s[e]?.find(e=>e.location===t)?.surface??null],40057);var d=e.i(391398),f=e.i(13558),m=e.i(484098),_=e.i(588212),y=e.i(251825);let p={info:f.default,warning:m.default,critical:_.default,success:y.default};e.s(["f",0,e=>{let{severity:t,...r}=e,i=p[t];return(0,d.jsx)(i,{...r})}],731800)},588212,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),n=e.r(391398);r.default=(0,a.default)((0,n.jsx)("path",{d:"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3m1-4.3h-2V7h2z"}),"Report")},484098,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),n=e.r(391398);r.default=(0,a.default)([(0,n.jsx)("path",{d:"M12 5.99 19.53 19H4.47zM12 2 1 21h22z"},"0"),(0,n.jsx)("path",{d:"M13 16h-2v2h2zm0-6h-2v5h2z"},"1")],"WarningAmber")}])})();