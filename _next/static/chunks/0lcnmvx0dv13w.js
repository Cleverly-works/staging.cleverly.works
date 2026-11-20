(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6837,e=>{var t=e.i(391398),i=e.i(738251),a=e.i(377198);e.s(["f",0,e=>{let{file:n,embeddedIn:o,...r}=e,s=(0,a.f)(n,o);return(0,t.jsx)(i.f,{component:"img",src:s,...r})}])},122989,e=>{var t=e.i(391398),i=e.i(280445),a=e.i(668921),n=e.i(231637),o=e.i(901004),r=e.i(539117),s=e.i(471973);let l=(0,i.f)(a.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),d=(0,i.f)(n.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:a,label:n,options:c,value:m,onChange:u,helperText:f,error:y,hideLabel:$,renderOption:_,...h}=e;return(0,t.jsxs)(l,{variant:a,fullWidth:i,error:y,hiddenLabel:$,children:[!$&&(0,t.jsx)(d,{variant:a,children:n}),(0,t.jsx)(r.f,{fullWidth:i,displayEmpty:!0,value:m||"",onChange:u,sx:{position:"relative"},renderValue:()=>{let e=c.find(e=>e.value===m);return e?e.label:""},error:y,...h,children:c.length?c.map(e=>(0,t.jsx)(o.f,{value:e.value,disabled:e.disabled,children:_?_(e):e.label},e.value)):(0,t.jsx)(o.f,{disabled:!0,value:"",children:"No options"})}),f&&(0,t.jsx)(s.f,{error:y,children:f})]})}])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,o=t.f`
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
`,s=t.f`
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
`,u=t.f`
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
`,p=t.f`
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
`,q=t.f`
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
`,M=t.f`
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
`;e.s(["V",0,u,"M",0,f,"J",0,M,"c",0,h,"m",0,l,"_",0,o,"W",0,r,"B",0,s,"a",0,k,"v",0,x,"S",0,j,"Z",0,C,"X",0,i,"D",0,b,"Y",0,c,"g",0,p,"b",0,$,"h",0,y,"o",0,_,"j",0,A,"O",0,I,"d",0,g,"T",0,q,"U",0,w,"i",0,a,"e",0,n,"z",0,v,"A",0,S,"p",0,m,"P",0,d])},544005,e=>{e.s(["f",0,(e,t)=>{let i={...e};return Object.entries(t).forEach(e=>{let[t,a]=e;void 0===i[t]&&(i[t]=a)}),i}])},396413,719588,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(432171),n=e.i(511667),o=e.i(21557),r=e.i(159080);let s=r.f`
  query MEDIAS(
    $where: Media_Entity_bool_exp!
    $orderBy: [Media_Entity_order_by!]
    $limit: Int
    $offset: Int
  ) {
    items: Media_Entity(limit: $limit, offset: $offset, where: $where, order_by: $orderBy) {
      id
      entity
      entityId
      mediaId
      item: Medium {
        id
        visibility
        caption
        category
        createdAt
        expiryAt
        filename
        name
        type
        meta
        userId
        user: User {
          id
          nameFirst
          nameLast
        }
      }
    }
    meta: Media_Entity_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var l=e.i(98926),d=e.i(553875),c=e.i(755548),m=e.i(76381),u=e.i(813843),f=e.i(115871);let y=e=>{let{mediaId:i,onSuccess:a}=e,o=(0,l.f)(),[r,{isLoading:s}]=(0,n.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST",body:{mediaId:i},onCompleted:()=>{o.refetchQueries({include:["MEDIAS"]}),a(i)}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.f,{sx:{zIndex:1e5},open:s,children:(0,t.jsx)(m.f,{color:"secondary"})}),(0,t.jsx)(f.f,{children:"Are you sure you want to delete this?"}),(0,t.jsx)(u.f,{alignItems:"flex-end",children:(0,t.jsx)(c.f,{variant:"contained",color:"danger",disabled:s,onClick:()=>r(),children:"Delete"})})]})};e.s(["f",0,y],719588);var $=e.i(443103),_=e.i(46587),h=e.i(422411),p=e.i(106997),q=e.i(498681),I=e.i(594301),g=e.i(65295);e.i(936641);var b=e.i(6837);let v=e=>{let{media:a,editable:r,toggleShow:s}=e,[c,y]=(0,i.useState)(!1),v=(0,l.f)(),x=(0,o.f)(),S=(0,q.f)(),{user:A}=(0,I.f)(),{mediaVisibility:w=[]}=S.user,{caption:C,createdAt:j,filename:M,mediaId:k,meta:T,name:F,id:L,visibility:U,type:G,user:P}=a,{control:E,handleSubmit:z}=(0,h.G)({defaultValues:{visibility:(e=>{let{selected:t,accountType:i}=e;return _.f[i].find(e=>$.isEqual(e.value,t))})({selected:U,accountType:A.accountType})}}),[N,{error:B}]=(0,n.f)("/media/:mediaId/visibility",{queryKey:"updateMediaVisibility",method:"POST",onError:e=>{x.show({content:e.message,severity:"error"})}}),D=async e=>{y(!0);let t=await N({pathParams:{mediaId:L},body:{visibility:e.visibility.value}});y(!1),t&&(await v.refetchQueries({include:["MEDIAS"]}),s())};return c?(0,t.jsx)(d.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(m.f,{color:"secondary"})}):(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:z(D),children:["image"===G&&(0,t.jsx)(u.f,{sx:{mb:2},children:(0,t.jsx)(b.f,{file:M,alt:C||M})}),(0,t.jsxs)(u.f,{spacing:1,children:[(0,t.jsxs)(u.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",fontSize:"0.875rem",children:"Name"}),(0,t.jsx)(f.f,{fontSize:"0.875rem",children:F||M||"-"})]}),(0,t.jsxs)(u.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",fontSize:"0.875rem",children:"Visible to"}),(0,t.jsx)(f.f,{fontSize:"0.875rem",children:U?.join(", ")||"-"})]}),C&&(0,t.jsxs)(u.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",fontSize:"0.875rem",children:"Caption"}),(0,t.jsx)(f.f,{fontSize:"0.875rem",children:C})]}),(0,t.jsxs)(u.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",fontSize:"0.875rem",children:"Type"}),(0,t.jsx)(f.f,{fontSize:"0.875rem",children:G||"-"})]}),P&&(0,t.jsxs)(u.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",fontSize:"0.875rem",children:"Uploaded by"}),(0,t.jsx)(f.f,{fontSize:"0.875rem",children:`${P?.nameFirst||""} ${P?.nameLast||""}`.trim()||"-"})]}),(0,t.jsxs)(u.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",fontSize:"0.875rem",children:"Created at"}),(0,t.jsx)(f.f,{fontSize:"0.875rem",children:(0,g.f)(j)||"-"})]})]}),r&&(0,t.jsx)(u.f,{mt:2,children:(0,t.jsx)(h.e,{name:"visibility",control:E,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(p.f,{value:i,disableClearable:!0,textFieldProps:{color:"secondary",variant:"standard",label:"Select media visibility"},onChange:(e,t)=>a(t),options:w})}})}),!1]})};var x=e.i(704129),S=e.i(171817),A=e.i(512057),w=e.i(128519);let C=e=>`${e?.toLowerCase?.()}MainPhoto`;var j=e.i(185242);let M={},k=function(e){let{skip:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=(0,i.useMemo)(()=>[...new Set(e)].sort((e,t)=>e-t).join(","),[e]),n=(0,i.useMemo)(()=>({ids:a}),[a]),{data:o}=(0,j.f)("/media/actions",{queryKey:`media-actions-${a}`,params:n,skip:t||!a}),r=o?.actions??M;return{mayChange:(0,i.useCallback)(e=>null!=e&&r[e]?.change.allowed===!0,[r])}};var T=e.i(871931),F=e.i(760981),L=e.i(302966),U=e.i(749231),G=e.i(845825),P=e.i(280445),E=e.i(691567);let z=[],N=e=>{let{images:a=z,showPagination:n=!0,height:o}=e,[r,s]=(0,i.useState)(0),l=(0,i.useRef)(null);return(0,i.useEffect)(()=>{s(e=>e<a.length?e:0)},[a.length]),(0,i.useEffect)(()=>{if(a.length<2)return;let e=setTimeout(()=>s(e=>(e+1)%a.length),1e4);return()=>clearTimeout(e)},[r,a.length]),(0,t.jsxs)(u.f,{width:"100%",alignItems:"center",children:[(0,t.jsx)(B,{onPointerDown:e=>{l.current=e.clientX,e.currentTarget.setPointerCapture(e.pointerId)},onPointerUp:e=>{if(null===l.current)return;let t=e.clientX-l.current;l.current=null;let i=r+(t<0?1:-1);Math.abs(t)>=50&&i>=0&&i<a.length&&s(i)},onPointerCancel:()=>{l.current=null},children:(0,t.jsx)(D,{activeStep:r,children:a.map(e=>(0,t.jsx)(b.f,{file:e.filename,draggable:!1,sx:{height:o,display:"block",flexShrink:0,overflow:"hidden",width:"100%",objectFit:"cover"},alt:e.caption},e.filename))})}),n&&a.length>1&&(0,t.jsx)(O,{page:r+1,count:a.length,onChange:(e,t)=>{s(t-1)},variant:"outlined",shape:"rounded",renderItem:e=>(0,t.jsx)(G.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})]})};N.propTypes={height:E.default.oneOfType([E.default.string,E.default.number]),images:E.default.arrayOf(E.default.shape({caption:E.default.string,filename:E.default.string.isRequired}).isRequired),showPagination:E.default.bool};let B=(0,P.f)("div")({width:"100%",overflow:"hidden",touchAction:"pan-y"}),D=(0,P.f)("div",{shouldForwardProp:e=>"activeStep"!==e})(e=>{let{activeStep:t}=e;return{display:"flex",transform:`translateX(-${100*t}%)`,transition:"transform 0.35s ease-out"}}),O=(0,P.f)(U.f)(e=>{let{hidePrevButton:t,hideNextButton:i,theme:a}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px"},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:a.palette.white.main,backgroundColor:a.palette.secondary.main}}});var R=e.i(747112),K=e.i(889231),V=e.i(411331),W=e.i(447090),Q=e.i(74633),X=e.i(122965),J=e.i(170582),Y=e.i(497844);let H=["Account","Asset","Location","Sublocation"];e.s(["f",0,e=>{let{carousel:r=!0,category:l="media",data:d=[],entity:m,entityId:$,filters:_={},listView:h=!1,mediaMeta:p=null,onMediaAdd:g,onMediaRemove:b,onEdit:j,hideVisibleToColumn:M=!1,showActionButtons:U=!0,showEntityColumn:G=!1,showItemActions:P=!0,title:E="Media",type:z,expanded:B,defaultExpanded:D,onChangeExpanded:O=()=>{},hideExpandIcon:Z=!1,mediaFormProps:ee={},offCanvasProps:et={},onlySingleMedia:ei=!1,elevation:ea=1,accordionSx:en={},refetch:eo=()=>{},withMainPhoto:er=!1,children:es}=e,{reference:el,pagination:ed}=(0,X.f)({}),{hasRole:ec,user:em}=(0,I.f)(),{can:eu}=(0,q.f)(),ef=(0,V.f)(),ey=(0,o.f)(),e$=(0,W.f)(),e_=!H.includes(m)||eu("media.attachOwnerRecord"),[eh]=(0,n.f)("/media/:mediaId/main-photo",{queryKey:"makeMainPhoto",method:"POST",onError:e=>{ey.show({content:e.message,severity:"error"})}}),ep=(0,i.useMemo)(()=>(e=>{let{entity:t,entityId:i,adminId:a,q:n,type:o,meta:r,category:s,withMainPhoto:l}=e,d={entity:{_eq:t},entityId:{_eq:i},Medium:{adminId:{_eq:a}}};if(n&&(d.Medium.caption={_ilike:n}),o&&(d.Medium.type={_eq:o}),r&&(d.Medium.meta={_contains:r}),l){let e=C(t);d.Medium._or=s?[{category:{_eq:s}},{category:{_eq:e}}]:[{category:{_is_null:!0}},{category:{_eq:e}}]}else d.Medium.category=s?{_eq:s}:{_is_null:!0};return d})({entity:m,entityId:$,adminId:em.adminId,q:_.q,type:_.type||z,meta:p,category:l,withMainPhoto:er}),[m,$,em.adminId,_.q,_.type,z,p,l,er]),eq=(0,i.useMemo)(()=>(e=>{let{withMainPhoto:t}=e;return t?[{Medium:{category:"asc"}},{Medium:{createdAt:"desc"}}]:[{Medium:{createdAt:"desc"}}]})({withMainPhoto:er}),[er]),{data:{items:eI,meta:eg}={items:[],meta:{aggregate:{totalCount:0}}},loading:eb,refetch:ev}=(0,a.t)(s,{variables:{where:ep,orderBy:eq,...ed}}),{mayChange:ex}=k((0,i.useMemo)(()=>eI.flatMap(e=>{let{item:t}=e;return t?[t.id]:[]}),[eI]),{skip:!P}),eS=e=>{ef.close(),d.length||ev();let t=e.map(e=>({...e,link:`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${e.filename}`}));g&&g(t),eo&&eo()},eA=e=>{ef.close(),d?.length||ev(),b&&b(e),eo&&eo()},ew=async e=>{await eh({pathParams:{mediaId:e.data.id},body:{entity:m,entityId:$}})&&(ev(),eo())},eC=[{field:"file",headerName:"File",flex:1,sortable:!1,renderCell:e=>{let{row:i,value:a}=e;return(0,t.jsx)(K.f,{color:"secondary",onClick:e=>{e.preventDefault(),e$(i.filename)},children:a})}},{field:"visibility",headerName:"Visible to",flex:1,sortable:!1},{field:"entity",headerName:"Entity",flex:1,sortable:!1},{field:"uploaded",headerName:"Uploaded by",flex:1,sortable:!1},{field:"thumbnails",headerName:"Thumbnails",flex:1,sortable:!1,renderCell:e=>{let{value:t}=e;return"function"==typeof t?t():t}},{field:"actions",headerName:"Actions",width:50,sortable:!1,renderCell:e=>{let i,a,n,{row:o}=e;return(0,t.jsx)(Y.f,{actions:(i=C(m),a=ex(o.data.id),n=[],er&&e_&&a&&n.push({icon:"uploadFile",onClick:()=>ew(o),tooltip:"Make main photo",disabled:o?.data?.category===i}),n.push({icon:"info",onClick:()=>{let e;return e=ex(o.data.id),void ef.show({content:(0,t.jsx)(v,{media:o.data,editable:e,toggleShow:ef.close}),submit:e,title:"Media details"})},tooltip:"Details"}),a&&n.push({icon:"delete",onClick:()=>{ef.show({content:(0,t.jsx)(y,{mediaId:o.data.id,onSuccess:eA}),submit:!1,title:"Delete media"})},tooltip:"Delete"}),n)})}}],ej=[],eM=eI.filter(e=>{let{item:t}=e;return t?.visibility&&ec(t?.visibility)}).map(e=>{let{entity:i,entityId:a,id:n,item:o}=e,{caption:r,filename:s,meta:l,name:d,type:c,user:m,visibility:u}=o;return{data:o,id:n,userId:m?.id,filename:s,visibility:u.join(", "),file:r||d||s,entity:i&&`${i}#${a}`,authority:l,uploaded:`${m?.nameFirst} ${m?.nameLast}`,thumbnails:"image"===c?l?.thumbnails&&l?.thumbnails.length?()=>(0,t.jsx)(S.default,{color:"success",fontSize:"small",titleAccess:"Yes"}):()=>(0,t.jsx)(A.default,{color:"error",fontSize:"small",titleAccess:"No"}):()=>(0,t.jsx)(w.default,{fontSize:"small",titleAccess:"Unavailable"}),actions:""}}),ek=(eI.filter(e=>{let{item:t}=e;return t?.visibility&&ec(t?.visibility)}).forEach(e=>{let{item:t}=e,{caption:i,filename:a,type:n}=t;"image"===n&&ej.push({caption:i,filename:a})}),ej),eT=ek.length;return(0,t.jsxs)(T.f,{elevation:ea,expanded:B,onChange:O,sx:en,defaultExpanded:D,children:[(0,t.jsxs)(L.f,{...!Z?{expandIcon:(0,t.jsx)(R.f,{})}:{},children:[(0,t.jsx)(f.f,{variant:"h6",sx:{flexShrink:0},children:E}),!!j&&(0,t.jsx)(u.f,{direction:"row",alignItems:"center",justifyContent:"flex-end",width:"100%",pr:+!Z,children:(0,t.jsx)(c.f,{onClick:j,variant:"contained",color:"secondary",children:"Edit"})})]}),(0,t.jsx)(F.f,{children:es}),(0,t.jsxs)(F.f,{children:[r&&eT>0&&(0,t.jsx)(N,{height:"200px",images:ek}),(0,t.jsx)(Q.s,{...el,columns:eC,rows:eM,loading:eb,totalCount:eg.aggregate.totalCount,columnVisibilityModel:{entity:G,thumbnails:h,actions:P,visibility:!M}}),U&&e_&&!(ei&&eM.length>0)&&(0,t.jsxs)(u.f,{direction:"row",justifyContent:"center",spacing:2,mt:2,children:[!z&&(0,t.jsx)(c.f,{variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),m&&ef.show({content:(0,t.jsx)(x.f,{accept:J.s,category:l,entity:m,entityId:$,expiryShow:!1,maxFiles:J.t,mediaMeta:p,multiple:!0,onSuccess:eS,...ee}),title:"Upload files",...et})},children:"Add File"}),"document"===z&&(0,t.jsx)(c.f,{variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),m&&ef.show({content:(0,t.jsx)(x.f,{accept:J.f,category:l,entity:m,entityId:$,expiryShow:!1,mediaMeta:p,onSuccess:eS,type:"document",...ee}),title:"Upload documents",...et})},children:"Add Document"}),("image"===z||"avatar"===z)&&(0,t.jsxs)(c.f,{variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),m&&ef.show({content:(0,t.jsx)(x.f,{accept:J.m,category:l,entity:m,entityId:$,expiryShow:!1,maxFiles:J.t,mediaMeta:p,multiple:!0,onSuccess:eS,type:"image",...ee}),title:"Upload photos",...et})},children:["Add ",z.charAt(0).toUpperCase()+z.slice(1)]})]})]})]})}],396413)},886143,e=>{var t=e.i(159080);let i=t.f`
  query MEDIAS(
    $category: String
    $entity: String
    $entityId: Int
    $limit: Int
    $offset: Int
    $q: String
    $type: String
    $adminId: Int
    $meta: jsonb
  ) {
    items: Media_Entity(
      limit: $limit
      offset: $offset
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: {
          adminId: { _eq: $adminId }
          caption: { _ilike: $q }
          category: { _eq: $category }
          type: { _eq: $type }
          meta: { _contains: $meta }
        }
      }
      order_by: { Medium: { createdAt: desc } }
    ) {
      id
      entity
      entityId
      mediaId
      item: Medium {
        id
        visibility
        caption
        category
        createdAt
        expiryAt
        filename
        name
        type
        meta
        userId
        user: User {
          id
          nameFirst
          nameLast
        }
      }
    }
    meta: Media_Entity_aggregate(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: {
          adminId: { _eq: $adminId }
          caption: { _ilike: $q }
          category: { _eq: $category }
          type: { _eq: $type }
          meta: { _contains: $meta }
        }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,a=t.f`
  query GetPreloadedMediaByEntity(
    $category: String
    $entity: String
    $entityId: Int
    $adminId: Int
  ) {
    items: Media_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: { adminId: { _eq: $adminId }, category: { _eq: $category } }
      }
    ) {
      mediaId
      media: Medium {
        id
        filename
        caption
      }
    }
  }
`;e.s(["o",0,i,"A",0,a])},39059,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`,n=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,o=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,r=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,s=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,l=t.f`
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
`,d=t.f`
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
      accountLocations: Account_Locations(where: { accountId: { _eq: $accountId } }) {
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
`;e.s(["u",0,d,"q",0,o,"_",0,s,"x",0,a,"k",0,i,"f",0,r,"l",0,l,"V",0,n])},856688,e=>{var t=e.i(432171),i=e.i(170582),a=e.i(511667),n=e.i(886143),o=e.i(191788);e.s(["w",0,e=>(e?.Media_Entity.data??[]).flatMap(e=>{let{Medium:{data:t}}=e;return t.filename&&t.type?[{filename:t.filename,type:t.type,caption:t.caption,category:t.category,extension:t.extension,meta:t.meta}]:[]}),"t",0,function(e,r,s,l){let d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[c,m]=(0,o.useState)(!1),{data:{items:u}={items:[]},loading:f}=(0,t.t)(n.A,{variables:{entity:e,entityId:l,category:d,adminId:r},skip:!l}),[y,{isLoading:$}]=(0,a.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),_=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{m(!0);let a=[];for(let n of t)if(!n.mediaId){let t,o=await h(n),l=null;if("image"===n.type){let e=o.key,i=o.data.find(e=>"large"===e.name);t=i?i.relativePath:e,l={original:{relativePath:e},thumbnails:o.data||null}}else t=o.key;a.push({entity:e,Medium:{data:{adminId:r,caption:n?.caption??null,extension:n?.media?.name?.split(".").pop(),userId:s,category:i,filename:t,type:n.type,meta:l??void 0}}})}return{Media_Entity:{data:a}}}finally{m(!1)}},h=async e=>{let t,a=new window.FormData;switch(e.media&&a.append("file",e.media,e.media.name),e.type){case"image":t=i.G;break;case"document":case"audio":t=i.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let n=window.localStorage.getItem("bearerToken"),o={};n&&(o.Authorization=`Bearer ${n}`);let r=await window.fetch(t,{method:"POST",body:a,headers:o}),s=await r.json();if(!r.ok)throw Error(s?.message||`Upload failed with status ${r.status}`);return s};return{uploadMediaToS3:h,createMediaInput:_,deleteMediaByEntity:e=>y({body:{mediaId:e}}),loadingAddMedia:c,loadingDeleteMedia:$,preloadedMediaLoading:f,preloadedMedia:u?.length?u:[]}}])},46587,e=>{let t=["admin","customer","supplier","tenant"],i=["admin","customer"],a=["admin","supplier"],n=["admin","customer","tenant"],o=["customer","tenant"];e.s(["f",0,{admin:[{label:"All",value:t},{label:"Admin + Supplier",value:a},{label:"Admin + Customer",value:i},{label:"Admin + Customer + Tenant",value:n},{label:"Internal",value:["admin"]}],customer:[{label:"All",value:t},{label:"Admin + Customer",value:i},{label:"Admin + Customer + Tenant",value:n},{label:"Customer + Tenant",value:o},{label:"Internal",value:["customer"]}],supplier:[{label:"All",value:t},{label:"Admin + Supplier",value:a},{label:"Internal",value:["supplier"]}],tenant:[{label:"All",value:t},{label:"Admin + Customer + Tenant",value:n},{label:"Customer + Tenant",value:o}]}])},171817,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),o=e.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},128519,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),o=e.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove")},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])}])})();