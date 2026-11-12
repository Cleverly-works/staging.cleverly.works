(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,122989,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(668921),s=e.i(231637),n=e.i(901004),a=e.i(539117),o=e.i(471973);let l=(0,i.f)(r.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),d=(0,i.f)(s.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:r,label:s,options:c,value:u,onChange:m,helperText:f,error:y,hideLabel:$,renderOption:p,...h}=e;return(0,t.jsxs)(l,{variant:r,fullWidth:i,error:y,hiddenLabel:$,children:[!$&&(0,t.jsx)(d,{variant:r,children:s}),(0,t.jsx)(a.f,{fullWidth:i,displayEmpty:!0,value:u||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=c.find(e=>e.value===u);return e?e.label:""},error:y,...h,children:c.length?c.map(e=>(0,t.jsx)(n.f,{value:e.value,disabled:e.disabled,children:p?p(e):e.label},e.value)):(0,t.jsx)(n.f,{disabled:!0,value:"",children:"No options"})}),f&&(0,t.jsx)(o.f,{error:y,children:f})]})}])},185242,e=>{var t=e.i(191788),i=e.i(190077),r=e.i(631328),s=e.i(105118),n=e.i(3878);e.s(["f",0,function(e,a){let{queryKey:o,method:l="GET",headers:d,body:c,params:u,pathParams:m,baseUrl:f,skip:y=!1,pollInterval:$,stopPollingOnError:p=!0,onCompleted:h,onError:_}=a,g=(0,n.r)(),v=(0,t.useRef)(null),b=(0,t.useRef)(!0),{fetchQuery:q,unregisterQuery:I,registerQuery:x}=g,w=(0,t.useMemo)(()=>(0,i.f)(),[]),[S,A]=(0,t.useState)(void 0),[k,C]=(0,t.useState)(null),[L,j]=(0,t.useState)(!1),[F,E]=(0,t.useState)(0),T=(0,r.s)(y),G=(0,r.s)(c),R=(0,r.s)(u),W=(0,r.s)(m),U=(0,r.s)(F),N=(0,t.useRef)(0),B=(0,t.useRef)(null),M=(0,t.useRef)(h),O=(0,t.useRef)(_);(0,t.useEffect)(()=>{M.current=h,O.current=_});let z=(0,t.useCallback)(async()=>{v.current?.abort();let t=new AbortController;v.current=t,C(null),j(!0);let i=++N.current,r=!1;try{let r=await q(e,{baseUrl:f,method:l,headers:d,body:c,params:u,pathParams:m,signal:t.signal});i===N.current&&(A(r),M.current?.(r))}catch(s){if(s instanceof Error&&"AbortError"===s.name){r=!0,v.current===t&&j(!1);return}let e=s instanceof Error?s:Error("An unknown error occurred");i===N.current&&(C(e),O.current?.(e))}finally{r||i!==N.current||j(!1)}},[f,c,q,d,l,u,m,e]),P=(0,t.useRef)(z);(0,t.useEffect)(()=>{P.current=z}),(0,t.useEffect)(()=>(x(o,w,()=>E(e=>e+1),l),()=>{I(o,w)}),[w,l,o,x,I]),(0,t.useEffect)(()=>{if(B.current&&(clearTimeout(B.current),B.current=null,b.current=!1),y){T!==y&&(v.current?.abort(),j(!1));return}!b.current&&(0,s.f)(G,c)&&(0,s.f)(R,u)&&(0,s.f)(W,m)&&U===F&&T===y||(z(),b.current=!1)},[c,z,u,m,G,R,W,U,T,F,y]),(0,t.useEffect)(()=>()=>{B.current=setTimeout(()=>{B.current=null,v.current?.abort()}),b.current=!0},[]);let H=!!($&&$>0&&!y&&!(p&&k));return(0,t.useEffect)(()=>{if(!H)return;let e=setInterval(()=>{P.current()},$);return()=>{clearInterval(e)}},[H,$]),{data:S,error:k,isLoading:L,isError:!!k,refetch:()=>E(e=>e+1)}}])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,s=t.f`
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
`,p=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,h=t.f`
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
`,g=t.f`
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
`,v=t.f`
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
`,C=t.f`
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
`,j=t.f`
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
`;e.s(["V",0,m,"M",0,f,"J",0,L,"c",0,h,"m",0,l,"_",0,n,"W",0,a,"B",0,o,"a",0,j,"v",0,x,"S",0,C,"Z",0,k,"X",0,i,"D",0,q,"Y",0,c,"g",0,_,"b",0,$,"h",0,y,"o",0,p,"j",0,S,"O",0,v,"d",0,b,"T",0,g,"U",0,A,"i",0,r,"e",0,s,"z",0,I,"A",0,w,"p",0,u,"P",0,d])},842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,i=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),r=e=>{let t=e?.address||e;return t&&i(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,i,"Q",0,r],964919);let s=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},n=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let i=s(t[0]),r=s(t[1]);return null==r||null==i||r<-90||r>90||i<-180||i>180?null:{lat:r,lng:i}},a=e=>n(e?.geo),o=async e=>{let t=r(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var i=await e.json();if(!i)return null;let r=i.coordinates?.lat??i.lat;return a({geo:{coordinates:[i.coordinates?.lng??i.lng,r]}})}catch{return null}},l=async(e,t)=>{let i=a(e?.address||e);if(i)return i;let[r,s]=t?.coordinates??[],n=a({geo:{coordinates:[r,s]}});return n||o(e)};e.s(["g",0,n,"Z",0,a,"t",0,l,"l",0,(e,t)=>{let i=a(e?.address||e);if(i)return i;let[r,s]=t?.coordinates??[];return a({geo:{coordinates:[r,s]}})},"a",0,s],842088)},123518,e=>{e.s(["f",0,[{label:"United Kingdom",value:1},{label:"Ireland",value:4}]])},410355,e=>{var t=e.i(391398),i=e.i(422411),r=e.i(424894),s=e.i(426778);let n=(0,s.t)().shape({id:(0,s.H)().nullable(),name:(0,s.x)(),invoicingEntity:(0,s.x)(),invoicingEmail:(0,s.x)(),addressLine1:(0,s.x)().required(),addressLine2:(0,s.x)(),addressLine3:(0,s.x)(),city:(0,s.x)().required(),postCode:(0,s.x)().required().matches("^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$|^([AC-FHKNPRTV-Y]\\d{2}|D6W)\\s[0-9AC-FHKNPRTV-Y]{4}$","Invalid Post Code"),county:(0,s.x)(),countryId:(0,s.H)().required()});var a=e.i(123518),o=e.i(755548),l=e.i(813843),d=e.i(652148),c=e.i(115871),u=e.i(122989);let m={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{defaultValues:s,onSubmit:f,type:y}=e,{control:$,errors:p,handleSubmit:h,register:_}=(0,i.G)({defaultValues:{...s},resolver:(0,r.yupResolver)(n)});return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:h(f),children:[(0,t.jsxs)(l.f,{spacing:2,children:[(0,t.jsx)(c.f,{sx:m,children:"Address Form"}),(0,t.jsx)(d.f,{fullWidth:!0,name:"name",inputRef:_,label:"Address name",variant:"standard",color:"secondary",error:!!p.name}),"invoice"===y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"invoicingEmail",inputRef:_,label:"Invoicing email",type:"email",variant:"standard",color:"secondary",error:!!p.invoicingEmail}),(0,t.jsx)(d.f,{fullWidth:!0,name:"invoicingEntity",inputRef:_,label:"Invoicing entity",multiline:!0,rows:4,variant:"filled",color:"secondary",error:!!p.invoicingEntity})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine1",inputRef:_,label:"Address Line 1*",variant:"standard",color:"secondary",error:!!p.addressLine1}),(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine2",inputRef:_,label:"Address Line 2",variant:"standard",color:"secondary",error:!!p.addressLine2})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine3",inputRef:_,label:"Address Line 3",variant:"standard",color:"secondary",error:!!p.addressLine3}),(0,t.jsx)(d.f,{fullWidth:!0,name:"city",inputRef:_,label:"City*",variant:"standard",color:"secondary",error:!!p.city})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"postCode",inputRef:_,label:"Post Code*",variant:"standard",color:"secondary",error:!!p.postCode}),(0,t.jsx)(d.f,{fullWidth:!0,name:"county",inputRef:_,label:"County",variant:"standard",color:"secondary",error:!!p.county})]}),(0,t.jsx)(l.f,{marginBottom:4,children:(0,t.jsx)(i.e,{name:"countryId",control:$,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(u.f,{value:i,onChange:r,options:a.f,label:"Country*",fullWidth:!0,error:!!p.countryId,variant:"standard",color:"secondary"})}})})]}),(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-end",marginTop:3,spacing:2,children:(0,t.jsx)(o.f,{variant:"contained",color:"secondary",type:"submit",children:"Submit"})}),s?.id&&(0,t.jsx)("input",{ref:_,name:"id",type:"hidden"})]})}],410355)},362407,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(776204),s=e.i(432171),n=e.i(990071),a=e.i(410355),o=e.i(74633),l=e.i(411331),d=e.i(755548),c=e.i(813843),u=e.i(4142),m=e.i(115871),f=e.i(497844);let y=e=>{let{addresses:i=[],entity:s,entityId:y,loading:$,onSelected:p,refetch:h,selectable:_=!1,selected:g,type:v,editable:b}=e,q=(0,l.f)(),[I]=(0,r.f)(n.g,{onCompleted:()=>{q.close(),h()}}),[x]=(0,r.f)(n.h,{onCompleted:()=>{q.close(),h()}}),w=async e=>{e.countryId||(e.countryId=1);let t=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:e})}).then(e=>e.json());e.id?e.meta={invoicingEmail:e.invoicingEmail,...e.meta}:e.meta={invoicingEmail:e.invoicingEmail},delete e.invoicingEmail;let i=t?.coordinates||null;if(i?.lat&&i?.lng&&(e.geo={type:"Point",coordinates:[i.lng,i.lat]}),e.id){let t=parseInt(e.id);await x({variables:{id:t,changes:e}})}else e.Address_Entities={data:{entity:s,entityId:y,status:"active"}},await I({variables:{objects:[e]}})},S=e=>{let r=i.find(t=>t.id===e.id),s=r?r.address:null,n=s&&{id:s.id,invoicingEmail:s.meta?.invoicingEmail,invoicingEntity:s.invoicingEntity,name:s.name,addressLine1:s.addressLine1,addressLine2:s.addressLine2,addressLine3:s.addressLine3,city:s.city,postCode:s.postCode,county:s.county,countryId:s.country?.id};q.show({content:(0,t.jsx)(a.f,{defaultValues:n,onSubmit:w,type:v}),title:s?"Edit address":"invoice"===v?"Add new invoice address":"Add new address",submit:!1})},A=[{field:"id",headerName:"ID",sortable:!1},{field:"select",headerName:"Select",sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsx)(u.f,{checked:Number(g)===i.select,onChange:e=>{p(i.select,e.target.checked)},size:"small",color:"secondary"})},maxWidth:65},{field:"address",headerName:"Address",flex:1,sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsxs)(c.f,{children:[(0,t.jsx)(m.f,{children:i.address?.name}),(0,t.jsx)(m.f,{children:i.address.country?.name||""}),(0,t.jsx)(m.f,{children:i.address.addressLine1}),(0,t.jsx)(m.f,{children:i.address.city})]})}},{field:"email",headerName:"Email",sortable:!1},{field:"actions",headerName:"Actions",sortable:!1,renderCell(e){let{row:i}=e;return(0,t.jsx)(f.f,{actions:[{icon:"edit",tooltip:"Edit",onClick:()=>{S(i)}}]})}}],k=i?.map(e=>{let t=e.address;return{id:e.id,select:t.id,address:t,email:t.meta?.invoicingEmail||"-",actions:""}})||[];return(0,t.jsxs)(t.Fragment,{children:[b&&(0,t.jsx)(c.f,{marginBottom:3,justifyContent:"flex-start",flexDirection:"row",children:(0,t.jsx)(d.f,{variant:"contained",color:"secondary",onClick:S,children:"Add new address"})}),(0,t.jsx)(o.s,{columns:A,rowHeight:100,columnVisibilityModel:{id:!1,select:_&&!!b,address:!0,email:"invoice"===v,action:!!b},loading:$,paginationSize:50,rows:k,autoHeight:!0})]})};var $=e.i(795617),p=e.i(594301),h=e.i(936641),_=e.i(652148);let g={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{addressId:a,entity:o,entityId:l,id:c,onSubmit:u,type:f,showAccessInformation:v=!1,accessInformation:b}=e,[q,I]=(0,i.useState)(a||null),[x,w]=(0,i.useState)(!1),[S,A]=(0,i.useState)(!1),[k,C]=(0,i.useState)(!1),[L,j]=(0,i.useState)(b??""),F=(0,$.N)(f),E=(0,$.p)(o),{hasRole:T}=(0,p.f)(),G=T("customer"),{loading:R,data:{item:W}={item:null},refetch:U}=(0,s.t)(E,{variables:{id:l}}),[N]=(0,r.f)(n.H,{onCompleted:e=>{u&&u(e)}}),[B]=(0,r.f)(n.I,{onCompleted:e=>{u&&u(e)}}),M=[];if(W){W.addresses&&M.push(...W.addresses);let e=W.accounts?.find(e=>"primary"===e.linkType)?.account;e?.addresses&&e?.addresses.forEach(e=>{M.find(t=>t.address.id===e.address.id)||M.push(e)})}let O=async(e,t)=>{A(!1),w(!1),t?(I(parseInt(e)),await z(parseInt(e))):(I(null),w(!0))},z=async e=>{if(q!==e){let t=null,i=null;if(M.forEach(r=>{r.address.id===e&&(t=r.entity,i=r.id)}),i&&t===o){let e={id:parseInt(i),changes:{[f]:!0},whereOld:{entityId:{_eq:l},[f]:{_eq:!0}},changesOld:{[f]:!1}};await B({variables:e}),A(!0)}else{let t=[{addressId:parseInt(e),entity:o,entityId:l,status:"active",[f]:!0}];await N({variables:{objects:t,whereOld:{entityId:{_eq:l},[f]:{_eq:!0}},changesOld:{[f]:!1}}}),A(!0)}}else u&&u(null)},P=async()=>{C(!1),await u?.({access:L}),C(!0)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.f,{sx:g,children:F}),S&&(0,t.jsx)(h.f,{severity:"success",sx:{marginBottom:3},children:"Selection saved."}),x&&(0,t.jsx)(h.f,{severity:"info",sx:{marginBottom:3},children:"You should select at least one address."}),k&&(0,t.jsx)(h.f,{severity:"success",sx:{marginBottom:3},children:"Access information saved."}),(0,t.jsx)(y,{addresses:M,entity:o,entityId:l,id:c,loading:R,refetch:U,selectable:!0,selected:q,type:f,onSelected:O,editable:!G}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",label:"Access information",value:L,onChange:e=>j(e.target.value),sx:{mt:2}}),(0,t.jsx)(d.f,{variant:"contained",color:"secondary",sx:{mt:2},onClick:P,children:"Save"})]})]})}],362407)},795617,e=>{var t=e.i(990071),i=e.i(842088);let r=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:i,type:r="inline",hideinvoicingEntity:s=!1}=e;if(!t)return"";let n="",a=i?.name?` (${i.name})`:"";return"stacked"===r?(n+=!s&&t.invoicingEntity?t.invoicingEntity+"\n":"",n+=t.addressLine1?t.addressLine1+a+"\n":a,n+=t.addressLine2?t.addressLine2+"\n":"",n+=t.addressLine3?t.addressLine3+"\n":"",n+=t.city?t.city+"\n":"",n+=t.county?t.county+"\n":""):(n+=!s&&t.invoicingEntity?t.invoicingEntity+" ":"",n+=t.addressLine1?t.addressLine1+a+" ":a,n+=t.addressLine2?t.addressLine2+" ":"",n+=t.addressLine3?t.addressLine3+" ":"",n+=t.city?t.city+" ":"",n+=t.county?t.county+" ":""),(n+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,r,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let i=null;switch(e){case"Account":i=t.A;break;case"Location":i=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!i)throw Error("Query cannot be null");return i},"u",0,(e,t)=>{let i=null;return"customer"===t?i=r(e.location,"invoice")||r(e.customer,"invoice")||r(e.location,"registered"):"supplier"===t&&(i=r(e.supplier,"invoice")||r(e.supplier,"registered")),i},"D",0,e=>{let t=(0,i.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let i=t.f`
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
`,s=t.f`
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
`,n=t.f`
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
`;e.s(["S",0,r,"a",0,i,"g",0,a,"H",0,l,"A",0,s,"R",0,n,"h",0,o,"I",0,d])},834744,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),s=e.i(954624),n=e.i(46739),a=e.i(600961),o=e.i(70376),l=e.i(806830),d=e.i(332330),c=e.i(347539),u=e.i(391398);let m=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,c.f)(),y=(0,d.f)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,o.f)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),$=e=>(0,l.f)({props:e,name:"MuiContainer",defaultTheme:f});var p=e.i(464107),h=e.i(396851),_=e.i(395724);let g=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{createStyledComponent:l=y,useThemeProps:d=$,componentName:c="MuiContainer"}=e,f=l(e=>{let{theme:t,ownerState:r}=e;return(0,i.f)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!r.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}})},e=>{let{theme:t,ownerState:i}=e;return i.fixed&&Object.keys(t.breakpoints.values).reduce((e,i)=>{let r=t.breakpoints.values[i];return 0!==r&&(e[t.breakpoints.up(i)]={maxWidth:`${r}${t.breakpoints.unit}`}),e},{})},e=>{let{theme:t,ownerState:r}=e;return(0,i.f)({},"xs"===r.maxWidth&&{[t.breakpoints.up("xs")]:{maxWidth:Math.max(t.breakpoints.values.xs,444)}},r.maxWidth&&"xs"!==r.maxWidth&&{[t.breakpoints.up(r.maxWidth)]:{maxWidth:`${t.breakpoints.values[r.maxWidth]}${t.breakpoints.unit}`}})});return r.forwardRef(function(e,r){let l=d(e),{className:y,component:$="div",disableGutters:p=!1,fixed:h=!1,maxWidth:_="lg"}=l,g=(0,t.f)(l,m),v=(0,i.f)({},l,{component:$,disableGutters:p,fixed:h,maxWidth:_}),b=((e,t)=>{let{classes:i,fixed:r,disableGutters:s,maxWidth:l}=e,d={root:["root",l&&`maxWidth${(0,o.f)(String(l))}`,r&&"fixed",s&&"disableGutters"]};return(0,a.f)(d,e=>(0,n.f)(t,e),i)})(v,c);return(0,u.jsx)(f,(0,i.f)({as:$,ownerState:v,className:(0,s.f)(b.root,y),ref:r},g))})}({createStyledComponent:(0,h.f)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[`maxWidth${(0,p.f)(String(i.maxWidth))}`],i.fixed&&t.fixed,i.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,_.f)({props:e,name:"MuiContainer"})});e.s(["f",0,g],834744)},4142,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),s=e.i(889878),n=e.i(600961),a=e.i(477366),o=e.i(464107),l=e.i(272932),d=e.i(280445),c=e.i(395724),u=e.i(713149),m=e.i(46739);function f(e){return(0,m.f)("MuiSwitch",e)}let y=(0,u.f)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var $=e.i(391398);let p=["className","color","edge","size","sx"],h=(0,d.f)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.edge&&t[`edge${(0,o.f)(i.edge)}`],t[`size${(0,o.f)(i.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${y.thumb}`]:{width:16,height:16},[`& .${y.switchBase}`]:{padding:4,[`&.${y.checked}`]:{transform:"translateX(16px)"}}}}]}),_=(0,d.f)(l.f,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.switchBase,{[`& .${y.input}`]:t.input},"default"!==i.color&&t[`color${(0,o.f)(i.color)}`]]}})(e=>{let{theme:t}=e;return{position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${"light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${y.checked}`]:{transform:"translateX(20px)"},[`&.${y.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${y.checked} + .${y.track}`]:{opacity:.5},[`&.${y.disabled} + .${y.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${"light"===t.palette.mode?.12:.2}`},[`& .${y.input}`]:{left:"-100%",width:"300%"}}},e=>{let{theme:t}=e;return{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.alpha)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(e=>{let[,t]=e;return t.main&&t.light}).map(e=>{let[i]=e;return{props:{color:i},style:{[`&.${y.checked}`]:{color:(t.vars||t).palette[i].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.alpha)(t.palette[i].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${i}DisabledColor`]:`${"light"===t.palette.mode?(0,a.lighten)(t.palette[i].main,.62):(0,a.darken)(t.palette[i].main,.55)}`}},[`&.${y.checked} + .${y.track}`]:{backgroundColor:(t.vars||t).palette[i].main}}}})]}}),g=(0,d.f)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(e=>{let{theme:t}=e;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${"light"===t.palette.mode?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${"light"===t.palette.mode?.38:.3}`}}),v=(0,d.f)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(e=>{let{theme:t}=e;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}),b=r.forwardRef(function(e,r){let a=(0,c.f)({props:e,name:"MuiSwitch"}),{className:l,color:d="primary",edge:u=!1,size:m="medium",sx:y}=a,b=(0,t.f)(a,p),q=(0,i.f)({},a,{color:d,edge:u,size:m}),I=(e=>{let{classes:t,edge:r,size:s,color:a,checked:l,disabled:d}=e,c={root:["root",r&&`edge${(0,o.f)(r)}`,`size${(0,o.f)(s)}`],switchBase:["switchBase",`color${(0,o.f)(a)}`,l&&"checked",d&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,n.f)(c,f,t);return(0,i.f)({},t,u)})(q),x=(0,$.jsx)(v,{className:I.thumb,ownerState:q});return(0,$.jsxs)(h,{className:(0,s.f)(I.root,l),sx:y,ownerState:q,children:[(0,$.jsx)(_,(0,i.f)({type:"checkbox",icon:x,checkedIcon:x,ref:r,ownerState:q},b,{classes:(0,i.f)({},I,{root:I.switchBase})})),(0,$.jsx)(g,{className:I.track,ownerState:q})]})});e.s(["f",0,b],4142)}])})();