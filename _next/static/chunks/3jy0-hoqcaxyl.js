(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,122989,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(668921),n=e.i(231637),s=e.i(901004),a=e.i(539117),o=e.i(471973);let l=(0,i.f)(r.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),d=(0,i.f)(n.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:r,label:n,options:c,value:u,onChange:m,helperText:f,error:y,hideLabel:$,renderOption:_,...p}=e;return(0,t.jsxs)(l,{variant:r,fullWidth:i,error:y,hiddenLabel:$,children:[!$&&(0,t.jsx)(d,{variant:r,children:n}),(0,t.jsx)(a.f,{fullWidth:i,displayEmpty:!0,value:u||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=c.find(e=>e.value===u);return e?e.label:""},error:y,...p,children:c.length?c.map(e=>(0,t.jsx)(s.f,{value:e.value,disabled:e.disabled,children:_?_(e):e.label},e.value)):(0,t.jsx)(s.f,{disabled:!0,value:"",children:"No options"})}),f&&(0,t.jsx)(o.f,{error:y,children:f})]})}])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`,d=t.f`
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
`;let u=t.f`
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
`,_=t.f`
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
`,q=t.f`
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
`,g=t.f`
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
`,I=t.f`
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
`;e.s(["V",0,m,"M",0,f,"J",0,j,"c",0,p,"m",0,l,"_",0,s,"W",0,a,"B",0,o,"a",0,L,"v",0,x,"S",0,k,"Z",0,C,"X",0,i,"D",0,b,"Y",0,c,"g",0,q,"b",0,$,"h",0,y,"o",0,_,"j",0,S,"O",0,g,"d",0,I,"T",0,h,"U",0,w,"i",0,r,"e",0,n,"z",0,v,"A",0,A,"p",0,u,"P",0,d])},842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,i=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),r=e=>{let t=e?.address||e;return t&&i(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,i,"Q",0,r],964919);let n=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},s=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let i=n(t[0]),r=n(t[1]);return null==r||null==i||r<-90||r>90||i<-180||i>180?null:{lat:r,lng:i}},a=e=>s(e?.geo),o=async e=>{let t=r(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var i=await e.json();if(!i)return null;let r=i.coordinates?.lat??i.lat;return a({geo:{coordinates:[i.coordinates?.lng??i.lng,r]}})}catch{return null}},l=async(e,t)=>{let i=a(e?.address||e);if(i)return i;let[r,n]=t?.coordinates??[],s=a({geo:{coordinates:[r,n]}});return s||o(e)};e.s(["g",0,s,"Z",0,a,"t",0,l,"l",0,(e,t)=>{let i=a(e?.address||e);if(i)return i;let[r,n]=t?.coordinates??[];return a({geo:{coordinates:[r,n]}})},"a",0,n],842088)},879436,e=>{e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:t,currencyDisplay:"symbol",style:"currency"}).format(e)}])},128662,e=>{var t=e.i(391398),i=e.i(691567),r=e.i(280445),n=e.i(115871),s=e.i(813843),a=e.i(755548),o=e.i(587369);let l=(0,r.f)("img")({width:"300px",height:"250px"}),d={},c={},u={},m={},f={},y=e=>{let{imageSrc:i,sx:r=d,imageSx:y=c,title:$="",titleSx:_=u,subtitleFirstLine:p="",subtitleFirstLineSx:q=m,subtitleSecondLine:h="",subtitleSecondLineSx:g=f,buttonText:I,onAction:b=null}=e,v=(0,o.f)("(max-width: 400px)");return(0,t.jsxs)(s.f,{sx:{...r,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(l,{src:i,sx:{...y,width:v?"250px":"300px"}}),(0,t.jsx)(n.f,{typography:"h5",sx:{..._},children:$}),(0,t.jsxs)(s.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(n.f,{sx:{...q},children:p}),(0,t.jsx)(n.f,{sx:{...g},children:h})]}),I&&b&&(0,t.jsx)(a.f,{variant:"contained",color:"secondary",onClick:b,children:I})]})};y.propTypes={imageSrc:i.string,title:i.string,subtitleFirstLine:i.string,subtitleSecondLine:i.string,onAction:i.func,sx:i.object,imageSx:i.object,titleSx:i.object,subtitleFirstLineSx:i.object,subtitleSecondLineSx:i.object},e.s(["f",0,y])},827010,e=>{var t=e.i(159080);e.i(851123);let i=t.f`
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
`,n=t.f`
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
`,a=t.f`
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
`,o=t.f`
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
`,l=t.f`
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
`,d=t.f`
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
`,u=t.f`
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
`,f=t.f`
  query GetSuppliersForSelect($where: Account_bool_exp, $limit: Int, $offset: Int) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,y=t.f`
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
`,p=t.f`
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
`,q=t.f`
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
`,h=t.f`
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
`,g=t.f`
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
`;let I=t.f`
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
`,b=t.f`
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
`,x=t.f`
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
`,A=t.f`
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
`,w=t.f`
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
`;e.s(["V",0,r,"i",0,i,"_",0,b,"B",0,s,"v",0,n,"d",0,S,"r",0,a,"O",0,v,"f",0,g,"$",0,o,"C",0,l,"o",0,d,"q",0,c,"g",0,A,"Z",0,u,"Y",0,x,"k",0,m,"j",0,I,"U",0,f,"N",0,p,"T",0,$,"P",0,_,"h",0,w,"J",0,h,"p",0,q,"Q",0,y])},60903,e=>{e.s(["f",0,(e,t)=>{let i=document.createElement("a");"string"==typeof i.download?(document.body.appendChild(i),i.download=t,i.href=e,i.click(),document.body.removeChild(i)):location.replace(e)}])},123518,e=>{e.s(["f",0,[{label:"United Kingdom",value:1},{label:"Ireland",value:4}]])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},410355,e=>{var t=e.i(391398),i=e.i(422411),r=e.i(424894),n=e.i(426778);let s=(0,n.t)().shape({id:(0,n.H)().nullable(),name:(0,n.x)(),invoicingEntity:(0,n.x)(),invoicingEmail:(0,n.x)(),addressLine1:(0,n.x)().required(),addressLine2:(0,n.x)(),addressLine3:(0,n.x)(),city:(0,n.x)().required(),postCode:(0,n.x)().required().matches("^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$|^([AC-FHKNPRTV-Y]\\d{2}|D6W)\\s[0-9AC-FHKNPRTV-Y]{4}$","Invalid Post Code"),county:(0,n.x)(),countryId:(0,n.H)().required()});var a=e.i(123518),o=e.i(755548),l=e.i(813843),d=e.i(652148),c=e.i(115871),u=e.i(122989);let m={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{defaultValues:n,onSubmit:f,type:y}=e,{control:$,errors:_,handleSubmit:p,register:q}=(0,i.G)({defaultValues:{...n},resolver:(0,r.yupResolver)(s)});return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:p(f),children:[(0,t.jsxs)(l.f,{spacing:2,children:[(0,t.jsx)(c.f,{sx:m,children:"Address Form"}),(0,t.jsx)(d.f,{fullWidth:!0,name:"name",inputRef:q,label:"Address name",variant:"standard",color:"secondary",error:!!_.name}),"invoice"===y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"invoicingEmail",inputRef:q,label:"Invoicing email",type:"email",variant:"standard",color:"secondary",error:!!_.invoicingEmail}),(0,t.jsx)(d.f,{fullWidth:!0,name:"invoicingEntity",inputRef:q,label:"Invoicing entity",multiline:!0,rows:4,variant:"filled",color:"secondary",error:!!_.invoicingEntity})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine1",inputRef:q,label:"Address Line 1*",variant:"standard",color:"secondary",error:!!_.addressLine1}),(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine2",inputRef:q,label:"Address Line 2",variant:"standard",color:"secondary",error:!!_.addressLine2})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine3",inputRef:q,label:"Address Line 3",variant:"standard",color:"secondary",error:!!_.addressLine3}),(0,t.jsx)(d.f,{fullWidth:!0,name:"city",inputRef:q,label:"City*",variant:"standard",color:"secondary",error:!!_.city})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"postCode",inputRef:q,label:"Post Code*",variant:"standard",color:"secondary",error:!!_.postCode}),(0,t.jsx)(d.f,{fullWidth:!0,name:"county",inputRef:q,label:"County",variant:"standard",color:"secondary",error:!!_.county})]}),(0,t.jsx)(l.f,{marginBottom:4,children:(0,t.jsx)(i.e,{name:"countryId",control:$,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(u.f,{value:i,onChange:r,options:a.f,label:"Country*",fullWidth:!0,error:!!_.countryId,variant:"standard",color:"secondary"})}})})]}),(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-end",marginTop:3,spacing:2,children:(0,t.jsx)(o.f,{variant:"contained",color:"secondary",type:"submit",children:"Submit"})}),n?.id&&(0,t.jsx)("input",{ref:q,name:"id",type:"hidden"})]})}],410355)},795617,e=>{var t=e.i(990071),i=e.i(842088);let r=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:i,type:r="inline",hideinvoicingEntity:n=!1}=e;if(!t)return"";let s="",a=i?.name?` (${i.name})`:"";return"stacked"===r?(s+=!n&&t.invoicingEntity?t.invoicingEntity+"\n":"",s+=t.addressLine1?t.addressLine1+a+"\n":a,s+=t.addressLine2?t.addressLine2+"\n":"",s+=t.addressLine3?t.addressLine3+"\n":"",s+=t.city?t.city+"\n":"",s+=t.county?t.county+"\n":""):(s+=!n&&t.invoicingEntity?t.invoicingEntity+" ":"",s+=t.addressLine1?t.addressLine1+a+" ":a,s+=t.addressLine2?t.addressLine2+" ":"",s+=t.addressLine3?t.addressLine3+" ":"",s+=t.city?t.city+" ":"",s+=t.county?t.county+" ":""),(s+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,r,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let i=null;switch(e){case"Account":i=t.A;break;case"Location":i=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!i)throw Error("Query cannot be null");return i},"u",0,(e,t)=>{let i=null;return"customer"===t?i=r(e.location,"invoice")||r(e.customer,"invoice")||r(e.location,"registered"):"supplier"===t&&(i=r(e.supplier,"invoice")||r(e.supplier,"registered")),i},"D",0,e=>{let t=(0,i.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let i=t.f`
  fragment AddressFields on Address {
    id
    invoicingEntity
    name
    addressLine1
    addressLine2
    addressLine3
    postCode
    city
    county
    geo
    createdAt
    meta
  }
`,r=t.f`
  fragment AddressEntityFields on Address_Entity {
    id
    entity
    entityId
    status
    registered
    operating
    trading
    invoice
    createdAt
  }
`,n=t.f`
  query GetAddresses($id: Int!) {
    item: Account_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Account" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
    }
  }
  ${i}
  ${r}
`,s=t.f`
  query GetAddresses($id: Int!) {
    item: Location_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
      accounts: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          addresses: Addresses(where: { entity: { _eq: "Account" } }) {
            ...AddressEntityFields
            address: Address {
              ...AddressFields
            }
          }
        }
      }
    }
  }
  ${i}
  ${r}
`,a=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${i}
`,o=t.f`
  mutation UpdateAddress($id: Int!, $changes: Address_set_input!) {
    update_Address_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,l=t.f`
  mutation AddUpdateAddress_Entity(
    $objects: [Address_Entity_insert_input!]!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    insert_Address_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,d=t.f`
  mutation UpdateAddress_Entities(
    $id: Int!
    $changes: Address_Entity_set_input!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    updateNew: update_Address_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["S",0,r,"a",0,i,"g",0,a,"H",0,l,"A",0,n,"R",0,s,"h",0,o,"I",0,d])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=i.currencySymbol??"£",r="number"==typeof e?e.toFixed(2):String(e);return`${t}${r}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let i=t.options.find(t=>t.value===e);return i?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let i=t.options.find(t=>t.value===e);return i?.label??e}).join(", ");default:return String(e)}}])},359786,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(877341),n=e.i(432171),s=e.i(422411),a=e.i(424894),o=e.i(799083),l=e.i(322135),d=e.i(720676),c=e.i(152078),u=e.i(13558),m=e.i(631328),f=e.i(813843),y=e.i(827010),$=e.i(824451),_=e.i(115871);let p=e=>{let{propertyOwner:n,canSelectAccount:a,control:o,errors:l,setValue:d}=e,[c,u]=(0,i.useState)(""),[p,h]=(0,i.useState)(""),g=(0,m.y)(n);(0,i.useEffect)(()=>{n?.value!==g?.value&&g&&d("contactUser",null)},[g,n,d]);let[I,{loading:b,data:{items:v}={items:[]}}]=(0,r.f)(y.r,{variables:{limit:50,q:""!==c?`%${c}%`:null}}),[x,{loading:A,data:{items:S}={items:[]}}]=(0,r.f)(y.Q,{variables:{limit:50,accountId:n?.value||null,q:""!==p?`%${p}%`:null}});return(0,t.jsxs)(f.f,{direction:"row",spacing:2,children:[(0,t.jsxs)(f.f,{mb:2,width:"50%",children:[(0,t.jsx)(_.f,{sx:q.title,children:"Client"}),(0,t.jsx)(s.e,{defaultValue:null,name:"propertyOwner",control:o,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)($.f,{value:i,fullWidth:!0,disabled:!a,onChange:(e,t)=>r(t),onSearchChange:u,loading:b,onOpen:()=>I(),options:v,variant:"standard",color:"secondary",placeholder:"Client",error:!!l.propertyOwner,helperText:l.propertyOwner?.message})}})]}),(0,t.jsxs)(f.f,{mb:2,width:"50%",children:[(0,t.jsx)(_.f,{sx:q.title,children:"Contact Name"}),(0,t.jsx)(s.e,{defaultValue:null,name:"contactUser",control:o,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)($.f,{fullWidth:!0,value:i,disabled:!n,onChange:(e,t)=>r(t),onSearchChange:h,loading:A,onOpen:()=>x(),options:S,variant:"standard",color:"secondary",placeholder:"Contact Name",error:!!l.contactUser,helperText:l.contactUser?.message})}})]})]})},q={title:{fontSize:"18px",marginBottom:"10px",fontWeight:300,color:"gray"}},h=e=>{if(!e||0===e.length)return{primaryCustomer:null,relatedPartyCustomers:[]};let t=e.findIndex(e=>"primary"===e.linkType),i=t>=0?t:0;return{primaryCustomer:e[i]??null,relatedPartyCustomers:e.filter((e,t)=>t!==i)}};var g=e.i(426778);let I=(0,g.t)({value:(0,g.H)().required(),label:(0,g.x)().required()}),b=(0,g.t)().shape({access:(0,g.x)().required(),contactUser:I.required(),manager:I.required(),name:(0,g.x)().required(),propertyOwner:I.required(),status:(0,g.x)().when(["$isAdmin"],(e,t)=>{let[i]=e;return i?t.required():t}),permitsRequired:(0,g.g)(),users:(0,g.k)().of((0,g.H)().required()).ensure()});var v=e.i(411331),x=e.i(594301),A=e.i(159080);let S=A.f`
  query GetManageProperty($id: Int!) {
    property: Location_by_pk(id: $id) {
      id
      access
      name
      status
      permitsRequired
      manager: Manager {
        id
        fullName
      }
      contactUser: User {
        id
        fullName
      }
      accountLocations: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        id
        accountId
        locationId
        linkType
        createdAt
        account: Account {
          id
          name
          meta
        }
        createdByUser: CreatedByUser {
          id
          fullName
        }
      }
    }
  }
`,w=A.f`
  query GetPropertyNotFinishedJobs($propertyId: Int!) {
    jobs: Job(
      where: {
        locationId: { _eq: $propertyId }
        _and: [
          { _not: { type: { _in: ["reactive", "ppm"] }, statusData: { _has_key: "completed" } } }
          { _not: { type: { _in: ["reactive", "ppm"] }, statusData: { _has_key: "closed" } } }
          { _not: { type: { _eq: "quote" }, statusData: { _has_key: "quoteClosed" } } }
        ]
      }
      limit: 1
      order_by: { id: desc }
    ) {
      id
      number
    }
  }
`;A.f`
  mutation UpdateAccount($id: Int!, $changes: Account_set_input) {
    update_Account_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,A.f`
  query GetAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      id
      meta
    }
  }
`;let C=A.f`
  query GetUsers($accountIds: [Int], $role: String) {
    users: Account_User(
      where: {
        Account: { id: { _in: $accountIds } }
        role: { _eq: $role }
        status: { _eq: "active" }
      }
    ) {
      id
      role
      position
      isContact
      status
      user: User {
        id
        nameFirst
        nameLast
        fullName
        phone
        status
        email
        createdAt
      }
      account: Account {
        id
        name
        type
      }
      userAccountLocations: User_Account_Locations {
        accountLocationId
        location: Account_Location {
          locationId
        }
      }
    }
  }
`;var k=e.i(207646),j=e.i(410355),L=e.i(652148),F=e.i(936641),T=e.i(280445),U=e.i(122989),G=e.i(74633),N=e.i(851123),E=e.i(148310),P=e.i(755548),W=e.i(800884);let R=e=>{let{existingAccountIds:n,onSave:s,onCancel:a}=e,[o,l]=(0,i.useState)(""),[d,c]=(0,i.useState)(null),[u,{loading:m,data:{items:_}={items:[]}}]=(0,r.f)(y.r,{variables:{limit:50,q:""!==o?`%${o}%`:null}}),p=(0,i.useMemo)(()=>_.filter(e=>!n.includes(e.value)),[_,n]);return(0,t.jsxs)(f.f,{spacing:3,sx:{minWidth:320,pt:1},children:[(0,t.jsx)($.f,{value:d,onChange:(e,t)=>c(t),onOpen:()=>u(),onSearchChange:l,loading:m,options:p,label:"Customer company",variant:"standard",color:"secondary"}),(0,t.jsxs)(f.f,{direction:"row",spacing:1,justifyContent:"flex-end",children:[(0,t.jsx)(P.f,{variant:"contained",color:"danger",onClick:a,children:"Cancel"}),(0,t.jsx)(P.f,{variant:"contained",color:"secondary",disabled:!d,onClick:()=>d&&s(d),children:"Save"})]})]})},O=e=>{let{value:r,onChange:n,excludeAccountIds:s=[]}=e,a=(0,v.f)(),o=r.length>=2,l=(0,i.useMemo)(()=>r.map(e=>e.value).concat(s),[r,s]),d=(0,i.useCallback)(()=>{a.show({title:"Add related party",submit:!1,content:(0,t.jsx)(R,{existingAccountIds:l,onCancel:()=>a.close(),onSave:e=>{n([...r,e]),a.close()}})})},[l,a,n,r]),c=(0,i.useCallback)(e=>{n(r.filter(t=>t.value!==e))},[n,r]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:1,children:[(0,t.jsx)(_.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Related party"}),(0,t.jsx)(P.f,{size:"small",color:"secondary",variant:"contained",startIcon:(0,t.jsx)(E.default,{}),onClick:d,disabled:o,sx:{minWidth:"auto"},children:"Add"})]}),r.length>0&&(0,t.jsx)(f.f,{direction:"row",flexWrap:"wrap",gap:1,children:r.map(e=>(0,t.jsx)(W.f,{label:e.label,onDelete:()=>c(e.value),color:"secondary",variant:"outlined"},e.value))}),o&&(0,t.jsxs)(_.f,{sx:{fontSize:13,color:"gray",mt:1,ml:1},children:["*Maximum of ",2," related parties"]})]})};var M=e.i(511667),B=e.i(21557),z=e.i(920475),V=e.i(684779),H=e.i(974266);let D=(0,T.f)(e=>{let{className:i,...r}=e;return(0,t.jsx)(l.f,{...r,classes:{popper:i}})})(e=>{let{theme:t}=e;return{[`& .${d.f.tooltip}`]:{backgroundColor:t?.palette.dark.main,boxShadow:t?.shadows[1],fontSize:13}}});e.s(["f",0,e=>{let{accountId:l,accountName:d,locationId:m,refetch:y,onSubmit:q,close:g}=e,I=(0,v.f)(),A=(0,B.f)(),{user:T,hasRole:E}=(0,x.f)(),[P,W]=(0,i.useState)(null),[R,J]=(0,i.useState)(""),Z=(0,i.useRef)(null),K=E("admin"),{control:Y,errors:Q,handleSubmit:X,setValue:ee,watch:et,reset:ei}=(0,s.G)({defaultValues:{...d&&l&&{propertyOwner:{label:d,value:l}}},resolver:(0,a.yupResolver)(b),context:{isAdmin:K}}),{data:{property:er}={property:null}}=(0,n.t)(S,{skip:!m,variables:{id:m},onCompleted:e=>{let{property:t}=e,{primaryCustomer:i}=h(t?.accountLocations??[]);ei({...(e=>{let{property:t,customer:i}=e,r=t?.status==="active"||t?.status==="inactive"?t.status:void 0;return{...t?.access&&{access:t?.access},...t?.contactUser&&{contactUser:{value:t?.contactUser?.id,label:t?.contactUser?.fullName}},...t?.manager&&{manager:{value:t?.manager?.id,label:t?.manager?.fullName}},...t?.name&&{name:t?.name},...i&&{propertyOwner:{value:i?.id,label:i?.name}},...r&&{status:r},...t?.permitsRequired&&{permitsRequired:t?.permitsRequired}}})({property:t,customer:i?.account})})}}),en=et("users")??[],es=et("propertyOwner"),[ea,eo]=(0,i.useState)([]);(0,i.useEffect)(()=>{if(!er)return;let{relatedPartyCustomers:e}=h(er.accountLocations??[]);eo(e.map(e=>({value:e.accountId,label:e.account?.name??""})))},[er]);let{data:{jobs:el}={jobs:[]}}=(0,n.t)(w,{variables:{propertyId:m},skip:!m}),[ed,{isLoading:ec}]=(0,M.f)("/location/create",{queryKey:"location-create",method:"POST",onError:e=>{A.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{q?.(e),A.show({content:"Location was created"}),y?.(),g?.()}}),[eu,{isLoading:em}]=(0,M.f)("/location/update",{queryKey:"location-update",method:"PUT",onError:e=>{A.show({content:`Error: ${e.message}`,color:"error"})},onCompleted:e=>{q?.(e),A.show({content:"Location was created"}),y?.(),g?.()}}),ef=(0,i.useCallback)(async()=>new Promise((e,i)=>{I.show({title:"Add new address",content:(0,t.jsx)(j.f,{onSubmit:async t=>{e(t),g?.()}}),onClose:()=>i(),submit:!1,xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw"})}),[g,I]),[ey,{loading:e$,data:{items:e_}={items:[]}}]=(0,r.f)(N.P,{variables:{limit:50,accountId:T.adminId,q:""!==R?`%${R}%`:null}}),ep=async e=>{W(null);let t=e.users??[],i=es?.value,r=t.filter(e=>eh.find(t=>t.id===e)?.account?.id===i),n=ea.map(e=>({accountId:e.value,userAccountIds:t.filter(t=>eh.find(e=>e.id===t)?.account?.id===e.value)}));if(m){if("inactive"===e.status&&el.length>0)return void W("This location cannot be made inactive, it has active jobs.");let t=(e=>{let{locationId:t,propertyForm:i,primaryUserAccountIds:r,relatedParties:n}=e;return{locationId:t,access:i.access,primaryUserAccountIds:r,relatedParties:n??[],name:i.name,status:i.status??"active",permitsRequired:!!i.permitsRequired,contactUserId:i.contactUser.value,managerId:i.manager.value,accountId:i.propertyOwner.value}})({locationId:m,propertyForm:e,primaryUserAccountIds:r,relatedParties:n});await eu({body:t})}else{Z.current||(Z.current=await ef());let t=(e=>{let{propertyForm:t,addressForm:i,primaryUserAccountIds:r,relatedParties:n}=e;return{access:t.access,primaryUserAccountIds:r,relatedParties:n??[],name:t.name,status:t.status??"active",permitsRequired:!!t.permitsRequired,contactUserId:t.contactUser.value,managerId:t.manager.value,accountId:t.propertyOwner.value,address:{name:i.name,addressLine2:i.addressLine2,addressLine3:i.addressLine3,county:i.county,addressLine1:i.addressLine1,city:i.city,postCode:i.postCode,countryId:i.countryId}}})({propertyForm:e,addressForm:Z.current,primaryUserAccountIds:r,relatedParties:n});await ed({body:t})}},eq=[...es?.value?[es.value]:[],...ea.map(e=>e.value)],{data:{users:eh}={users:[]},loading:eg}=(0,n.t)(C,{variables:{accountIds:eq,role:"user"},skip:!Array.isArray(eq)||eq.length<0||!K,onCompleted:e=>{let{users:t}=e;ee("users",(t?.map?.(e=>({id:e.id,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[]}))||[]).filter(e=>m&&e.locations.includes(m)).map(e=>e?.id)||[])}}),eI=[{sortable:!1,flex:1,field:"account",headerName:"Company name",minWidth:160,renderCell:e=>{let{row:t}=e;return t.account.name}},{sortable:!1,flex:1,field:"fullName",headerName:"Name",minWidth:160},{sortable:!1,flex:1,field:"email",headerName:"Email address",minWidth:260},{sortable:!1,flex:1,field:"contact",headerName:"Contact user",minWidth:160,renderCell:e=>{let{row:i}=e;if(i.isContact)return(0,t.jsx)(f.f,{direction:"row",width:"100%",alignItems:"center",justifyContent:"flex-start",children:(0,t.jsx)(z.default,{color:"error"})})}},{sortable:!1,flex:1,field:"phone",minWidth:160,headerName:"Phone"},{sortable:!1,flex:1,field:"position",minWidth:160,headerName:"Position"},{sortable:!1,flex:1,width:15,field:"role",minWidth:160,headerName:"Role"}],eb=(0,i.useMemo)(()=>eh.map(e=>({...e.user,id:e.id,position:e.position,isContact:e?.isContact,role:e?.role,locations:e?.userAccountLocations?.map(e=>e?.location?.locationId)||[],account:e.account})),[eh]);return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:X(ep),children:[(0,t.jsx)(V.f,{sx:{zIndex:1e5},open:ec||em,children:(0,t.jsx)(H.f,{color:"secondary"})}),!!P&&(0,t.jsx)(F.f,{variant:"filled",severity:"info",color:"info",sx:{marginBottom:2},children:P}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(p,{control:Y,errors:Q,propertyOwner:es,canSelectAccount:!l,setValue:ee})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(s.e,{defaultValue:null,name:"manager",control:Y,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)($.f,{value:i,onChange:(e,t)=>r(t),label:"Select manager",loading:e$,onOpen:()=>ey(),onSearchChange:J,options:e_,error:!!Q?.manager,helperText:Q?.manager?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(s.e,{defaultValue:null,name:"name",control:Y,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(L.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",value:i,onChange:r,error:!!Q.name,helperText:Q.name?.message,InputLabelProps:{shrink:!!i}})}})}),(0,t.jsx)(f.f,{mb:3,children:(0,t.jsx)(s.e,{defaultValue:null,name:"access",control:Y,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(L.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",placeholder:"Access information",sx:{"& .MuiFilledInput-root":{paddingTop:1}},value:i,onChange:r,error:!!Q.access,helperText:Q.access?.message})}})}),K&&(0,t.jsx)(f.f,{mb:2,children:(0,t.jsx)(s.e,{name:"status",control:Y,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(U.f,{value:i||"",onChange:r,options:k.f,label:"Status",fullWidth:!0,error:!!Q.status,helperText:Q.status?.message,variant:"standard",color:"secondary"})}})}),(0,t.jsxs)(f.f,{children:[(0,t.jsx)(s.e,{name:"permitsRequired",control:Y,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(c.f,{control:(0,t.jsx)(o.f,{color:"secondary",checked:i||!1,onChange:e=>r(e.target.checked)}),label:"Permits required"})}}),(0,t.jsx)(F.f,{severity:"info",sx:{marginY:1,backgroundColor:"rgba(30, 136, 229, 0.1)","& .MuiAlert-icon":{color:"secondary.main"},"& .MuiAlert-message":{color:"secondary.main"}},children:"Please indicate whether permits are required for this site. This can then be used to prompt reminders to upload permits for work orders at this site."})]}),K&&(0,t.jsx)(f.f,{mt:3,children:(0,t.jsx)(O,{value:ea,onChange:eo,excludeAccountIds:es?.value?[es?.value]:void 0})}),K&&eh.length>0&&(0,t.jsxs)(f.f,{mb:2,mt:2,children:[(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",mb:1,children:[(0,t.jsx)(_.f,{sx:{fontSize:18,fontWeight:300,color:"gray"},children:"Customer users"}),(0,t.jsx)(D,{title:"Please select the users you would like to link to this site by checking\n                the box beside their name. This will then allow you to assign work\n                orders to them for this site.",children:(0,t.jsx)(u.default,{sx:{fontSize:22,marginLeft:1,color:"gray"}})})]}),(0,t.jsx)(G.s,{columns:eI,loading:eg,rows:eb,checkboxSelection:!0,rowSelectionModel:en,onRowSelectionModelChange:e=>{ee("users",e)},sx:{"& .MuiCheckbox-root":{"&.Mui-checked":{color:"secondary.main"}}}}),(0,t.jsx)(s.e,{name:"users",control:Y,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)("input",{value:i,onChange:r,type:"hidden"})}})]})]})}],359786)},920475,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},28980,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"}),"DownloadRounded")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])},720676,e=>{var t=e.i(172694);e.s(["f",()=>t.U])}])})();