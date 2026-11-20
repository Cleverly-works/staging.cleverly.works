(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,864980,790388,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(115871),r=e.i(773831),o=e.i(813843),n=e.i(322135),l=e.i(148310),s=e.i(170582),c=e.i(424894),d=e.i(652148),m=e.i(755548),f=e.i(280445),u=e.i(422411),$=e.i(978319),y=e.i(494575),_=e.i(426778);let p=_.t().shape({caption:_.x().required("Caption is required")}),q=m.f,I=(0,f.f)(a.f)({backgroundColor:y.f.COLOUR.secondary,color:y.f.COLOUR.white,textAlign:"center",minWidth:"64px",borderRadius:"4px",margin:"10px 0",padding:"4px 10px",boxShadow:`0px 3px 1px -2px rgba(0,0,0,0.2),
    0px 2px 2px 0px rgba(0,0,0,0.14),
    0px 1px 5px 0px rgba(0,0,0,0.12)`}),b=(0,f.f)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),v=e=>{let{noDelete:l,onDelete:m,isAdded:f,media:_,caption:v,onSave:h}=e,[g,S]=(0,i.useState)(null),[x,w]=(0,i.useState)(""),[A,C]=(0,i.useState)(f),{register:L,errors:k,handleSubmit:T,reset:F,setValue:G,control:j}=(0,u.G)({resolver:(0,c.yupResolver)(p)}),U=(0,i.useCallback)(e=>t=>{t.stopPropagation();let i=t.target.files?.[0];i&&(w(e),S(i),G("caption",i.name))},[S,G]);return(0,t.jsx)("form",{children:A?(0,t.jsx)(o.f,{children:(0,t.jsxs)(o.f,{rowGap:2,children:[(0,t.jsx)(u.e,{control:j,defaultValue:null,name:"caption",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(d.f,{fullWidth:!0,label:"Caption",variant:"standard",color:"secondary",name:"caption",value:i,onChange:a,InputLabelProps:{shrink:!!i},error:!!k.caption,helperText:k.caption?.message})}}),g?(0,t.jsxs)(o.f,{rowGap:3,children:[(0,t.jsxs)(o.f,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(a.f,{sx:{color:y.f.COLOUR.secondary,fontWeight:600,pointerEvents:"none"},children:g.name}),(0,t.jsx)(n.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),S(null),F()},children:(0,t.jsx)($.default,{})})})]}),(0,t.jsxs)(o.f,{direction:"row",columnGap:3,justifyContent:"flex-end",children:[(0,t.jsx)(q,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),C(!1),m()},children:"Cancel"}),(0,t.jsx)(q,{variant:"contained",size:"small",onClick:T(e=>{g&&(h({...e,media:g,type:x}),C(!1))}),children:"Save"})]})]}):(0,t.jsxs)(o.f,{direction:"row",columnGap:3,justifyContent:"flex-end",children:[(0,t.jsxs)(I,{component:"label",children:["Add image ",(0,t.jsx)(b,{onChange:U("image"),type:"file",accept:s.m})]}),(0,t.jsxs)(I,{component:"label",children:["Add document ",(0,t.jsx)(b,{onChange:U("document"),type:"file",accept:s.f,multiple:!0})]})]})]})}):(0,t.jsxs)(o.f,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.f,{sx:{color:y.f.COLOUR.secondary,fontWeight:600,pointerEvents:"none"},children:v||_?.name||"No caption"}),!l&&(0,t.jsx)(n.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:m,children:(0,t.jsx)($.default,{sx:{fontSize:"16px"}})})})]})})};e.s(["f",0,e=>{let{values:s,setValue:c,name:d="attachments",title:m="Attachments",titleSx:f={},onDeleteExistingMedia:u}=e,[$,y]=(0,i.useState)([]);return(0,i.useEffect)(()=>{Array.isArray(s)&&y(s)},[s]),(0,t.jsxs)(o.f,{children:[(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(a.f,{sx:f,children:m?m+":":""}),(0,t.jsx)(n.f,{title:"Add new attachment",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),y(e=>[...e,{mediaId:null,caption:"",media:null,type:"",isAdded:!0}])},children:(0,t.jsx)(l.default,{})})})]}),(0,t.jsx)(o.f,{pl:2,spacing:.8,children:$?.length?$.map((e,i)=>(0,t.jsx)(v,{...e,onDelete:()=>{u&&$[i]?.mediaId&&u($[i].mediaId);let e=$.filter((e,t)=>t!==i&&null!==e.media);c(d,e),y(e)},onSave:e=>{let t;(t=[...$]).splice(i,1,e),c(d,t.filter(e=>null!==e.media))}},(e?.caption??"")+i)):(0,t.jsx)(a.f,{typography:"subtitle2",children:"No data"})})]})}],790388),e.s([],864980)},122989,e=>{var t=e.i(391398),i=e.i(280445),a=e.i(668921),r=e.i(231637),o=e.i(901004),n=e.i(539117),l=e.i(471973);let s=(0,i.f)(a.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),c=(0,i.f)(r.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:a,label:r,options:d,value:m,onChange:f,helperText:u,error:$,hideLabel:y,renderOption:_,...p}=e;return(0,t.jsxs)(s,{variant:a,fullWidth:i,error:$,hiddenLabel:y,children:[!y&&(0,t.jsx)(c,{variant:a,children:r}),(0,t.jsx)(n.f,{fullWidth:i,displayEmpty:!0,value:m||"",onChange:f,sx:{position:"relative"},renderValue:()=>{let e=d.find(e=>e.value===m);return e?e.label:""},error:$,...p,children:d.length?d.map(e=>(0,t.jsx)(o.f,{value:e.value,disabled:e.disabled,children:_?_(e):e.label},e.value)):(0,t.jsx)(o.f,{disabled:!0,value:"",children:"No options"})}),u&&(0,t.jsx)(l.f,{error:$,children:u})]})}])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`,n=t.f`
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
`,f=t.f`
  query GetAccountsForSelect($where: Account_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,u=t.f`
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
`,L=t.f`
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
`,k=t.f`
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
`,T=t.f`
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
`;e.s(["V",0,f,"M",0,u,"J",0,k,"c",0,p,"m",0,s,"_",0,o,"W",0,n,"B",0,l,"a",0,T,"v",0,S,"S",0,L,"Z",0,C,"X",0,i,"D",0,h,"Y",0,d,"g",0,q,"b",0,y,"h",0,$,"o",0,_,"j",0,w,"O",0,b,"d",0,v,"T",0,I,"U",0,A,"i",0,a,"e",0,r,"z",0,g,"A",0,x,"p",0,m,"P",0,c])},827010,e=>{var t=e.i(159080);e.i(851123);let i=t.f`
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
`,r=t.f`
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
`,o=t.f`
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
`,n=t.f`
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
`,d=t.f`
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
`,u=t.f`
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
`;e.s(["V",0,a,"i",0,i,"_",0,h,"B",0,o,"v",0,r,"d",0,w,"r",0,n,"O",0,g,"f",0,b,"$",0,l,"C",0,s,"o",0,c,"q",0,d,"g",0,x,"Z",0,m,"Y",0,S,"k",0,f,"j",0,v,"U",0,u,"N",0,p,"T",0,y,"P",0,_,"h",0,A,"J",0,I,"p",0,q,"Q",0,$])},856688,e=>{var t=e.i(432171),i=e.i(170582),a=e.i(511667),r=e.i(886143),o=e.i(191788);e.s(["w",0,e=>(e?.Media_Entity.data??[]).flatMap(e=>{let{Medium:{data:t}}=e;return t.filename&&t.type?[{filename:t.filename,type:t.type,caption:t.caption,category:t.category,extension:t.extension,meta:t.meta}]:[]}),"t",0,function(e,n,l,s){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[d,m]=(0,o.useState)(!1),{data:{items:f}={items:[]},loading:u}=(0,t.t)(r.A,{variables:{entity:e,entityId:s,category:c,adminId:n},skip:!s}),[$,{isLoading:y}]=(0,a.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),_=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{m(!0);let a=[];for(let r of t)if(!r.mediaId){let t,o=await p(r),s=null;if("image"===r.type){let e=o.key,i=o.data.find(e=>"large"===e.name);t=i?i.relativePath:e,s={original:{relativePath:e},thumbnails:o.data||null}}else t=o.key;a.push({entity:e,Medium:{data:{adminId:n,caption:r?.caption??null,extension:r?.media?.name?.split(".").pop(),userId:l,category:i,filename:t,type:r.type,meta:s??void 0}}})}return{Media_Entity:{data:a}}}finally{m(!1)}},p=async e=>{let t,a=new window.FormData;switch(e.media&&a.append("file",e.media,e.media.name),e.type){case"image":t=i.G;break;case"document":case"audio":t=i.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let r=window.localStorage.getItem("bearerToken"),o={};r&&(o.Authorization=`Bearer ${r}`);let n=await window.fetch(t,{method:"POST",body:a,headers:o}),l=await n.json();if(!n.ok)throw Error(l?.message||`Upload failed with status ${n.status}`);return l};return{uploadMediaToS3:p,createMediaInput:_,deleteMediaByEntity:e=>$({body:{mediaId:e}}),loadingAddMedia:d,loadingDeleteMedia:y,preloadedMediaLoading:u,preloadedMedia:f?.length?f:[]}}])},551918,425577,432484,145018,687722,566118,860387,280875,e=>{var t,i=e.i(460997),a=e.i(75907),r=e.i(191788),o=e.i(889878),n=e.i(600961),l=e.i(395724),s=e.i(396851),c=e.i(713149),d=e.i(46739);function m(e){return(0,d.f)("MuiStepper",e)}(0,c.f)("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);var f=e.i(464107);let u=r.createContext({});e.s(["f",0,u],425577);let $=r.createContext({});function y(e){return(0,d.f)("MuiStepConnector",e)}e.s(["f",0,$],432484);let _=(0,c.f)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);e.s(["U",0,_,"c",0,y],145018);var p=e.i(391398);let q=["className"],I=(0,s.f)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation],i.alternativeLabel&&t.alternativeLabel,i.completed&&t.completed]}})(e=>{let{ownerState:t}=e;return(0,a.f)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})}),b=(0,s.f)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.line,t[`line${(0,f.f)(i.orientation)}`]]}})(e=>{let{ownerState:t,theme:i}=e,r="light"===i.palette.mode?i.palette.grey[400]:i.palette.grey[600];return(0,a.f)({display:"block",borderColor:i.vars?i.vars.palette.StepConnector.border:r},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),v=r.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStepConnector"}),{className:c}=s,d=(0,i.f)(s,q),{alternativeLabel:m,orientation:_="horizontal"}=r.useContext(u),{active:v,disabled:h,completed:g}=r.useContext($),S=(0,a.f)({},s,{alternativeLabel:m,orientation:_,active:v,completed:g,disabled:h}),x=(e=>{let{classes:t,orientation:i,alternativeLabel:a,active:r,completed:o,disabled:l}=e,s={root:["root",i,a&&"alternativeLabel",r&&"active",o&&"completed",l&&"disabled"],line:["line",`line${(0,f.f)(i)}`]};return(0,n.f)(s,y,t)})(S);return(0,p.jsx)(I,(0,a.f)({className:(0,o.f)(x.root,c),ref:t,ownerState:S},d,{children:(0,p.jsx)(b,{className:x.line,ownerState:S})}))});e.s(["f",0,v],687722);let h=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],g=(0,s.f)("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation],i.alternativeLabel&&t.alternativeLabel,i.nonLinear&&t.nonLinear]}})(e=>{let{ownerState:t}=e;return(0,a.f)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})}),S=(0,p.jsx)(v,{}),x=r.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStepper"}),{activeStep:c=0,alternativeLabel:d=!1,children:f,className:$,component:y="div",connector:_=S,nonLinear:q=!1,orientation:I="horizontal"}=s,b=(0,i.f)(s,h),v=(0,a.f)({},s,{nonLinear:q,alternativeLabel:d,orientation:I,component:y}),x=(e=>{let{orientation:t,nonLinear:i,alternativeLabel:a,classes:r}=e;return(0,n.f)({root:["root",t,i&&"nonLinear",a&&"alternativeLabel"]},m,r)})(v),w=r.Children.toArray(f).filter(Boolean),A=w.map((e,t)=>r.cloneElement(e,(0,a.f)({index:t,last:t+1===w.length},e.props))),C=r.useMemo(()=>({activeStep:c,alternativeLabel:d,connector:_,nonLinear:q,orientation:I}),[c,d,_,q,I]);return(0,p.jsx)(u.Provider,{value:C,children:(0,p.jsx)(g,(0,a.f)({as:y,ownerState:v,className:(0,o.f)(x.root,$),ref:t},b,{children:A}))})});function w(e){return(0,d.f)("MuiStep",e)}e.s(["f",0,x],551918),(0,c.f)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);let A=["active","children","className","component","completed","disabled","expanded","index","last"],C=(0,s.f)("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation],i.alternativeLabel&&t.alternativeLabel,i.completed&&t.completed]}})(e=>{let{ownerState:t}=e;return(0,a.f)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})}),L=r.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStep"}),{active:c,children:d,className:m,component:f="div",completed:y,disabled:_,expanded:q=!1,index:I,last:b}=s,v=(0,i.f)(s,A),{activeStep:h,connector:g,alternativeLabel:S,orientation:x,nonLinear:L}=r.useContext(u),[k=!1,T=!1,F=!1]=[c,y,_];h===I?k=void 0===c||c:!L&&h>I?T=void 0===y||y:!L&&h<I&&(F=void 0===_||_);let G=r.useMemo(()=>({index:I,last:b,expanded:q,icon:I+1,active:k,completed:T,disabled:F}),[I,b,q,k,T,F]),j=(0,a.f)({},s,{active:k,orientation:x,alternativeLabel:S,completed:T,disabled:F,expanded:q,component:f}),U=(e=>{let{classes:t,orientation:i,alternativeLabel:a,completed:r}=e;return(0,n.f)({root:["root",i,a&&"alternativeLabel",r&&"completed"]},w,t)})(j),M=(0,p.jsxs)(C,(0,a.f)({as:f,className:(0,o.f)(U.root,m),ref:t,ownerState:j},v,{children:[g&&S&&0!==I?g:null,d]}));return(0,p.jsx)($.Provider,{value:G,children:g&&!S&&0!==I?(0,p.jsxs)(r.Fragment,{children:[g,M]}):M})});e.s(["f",0,L],566118);var k=e.i(59540);let T=(0,k.f)((0,p.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),F=(0,k.f)((0,p.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var G=e.i(308277);function j(e){return(0,d.f)("MuiStepIcon",e)}let U=(0,c.f)("MuiStepIcon",["root","active","completed","error","text"]),M=["active","className","completed","error","icon"],N=(0,s.f)(G.f,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(e=>{let{theme:t}=e;return{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${U.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${U.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${U.error}`]:{color:(t.vars||t).palette.error.main}}}),R=(0,s.f)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(e=>{let{theme:t}=e;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}}),D=r.forwardRef(function(e,r){let s=(0,l.f)({props:e,name:"MuiStepIcon"}),{active:c=!1,className:d,completed:m=!1,error:f=!1,icon:u}=s,$=(0,i.f)(s,M),y=(0,a.f)({},s,{active:c,completed:m,error:f}),_=(e=>{let{classes:t,active:i,completed:a,error:r}=e;return(0,n.f)({root:["root",i&&"active",a&&"completed",r&&"error"],text:["text"]},j,t)})(y);if("number"==typeof u||"string"==typeof u){let e=(0,o.f)(d,_.root);return f?(0,p.jsx)(N,(0,a.f)({as:F,className:e,ref:r,ownerState:y},$)):m?(0,p.jsx)(N,(0,a.f)({as:T,className:e,ref:r,ownerState:y},$)):(0,p.jsxs)(N,(0,a.f)({className:e,ref:r,ownerState:y},$,{children:[t||(t=(0,p.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,p.jsx)(R,{className:_.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:y,children:u})]}))}return u});function P(e){return(0,d.f)("MuiStepLabel",e)}let z=(0,c.f)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);e.s(["U",0,z,"L",0,P],860387);let B=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],E=(0,s.f)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation]]}})(e=>{let{ownerState:t}=e;return(0,a.f)({display:"flex",alignItems:"center",[`&.${z.alternativeLabel}`]:{flexDirection:"column"},[`&.${z.disabled}`]:{cursor:"default"}},"vertical"===t.orientation&&{textAlign:"left",padding:"8px 0"})}),O=(0,s.f)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(e=>{let{theme:t}=e;return(0,a.f)({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${z.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${z.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${z.alternativeLabel}`]:{marginTop:16},[`&.${z.error}`]:{color:(t.vars||t).palette.error.main}})}),W=(0,s.f)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${z.alternativeLabel}`]:{paddingRight:0}})),J=(0,s.f)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(e=>{let{theme:t}=e;return{width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${z.alternativeLabel}`]:{textAlign:"center"}}}),V=r.forwardRef(function(e,t){var s;let c=(0,l.f)({props:e,name:"MuiStepLabel"}),{children:d,className:m,componentsProps:f={},error:y=!1,icon:_,optional:q,slotProps:I={},StepIconComponent:b,StepIconProps:v}=c,h=(0,i.f)(c,B),{alternativeLabel:g,orientation:S}=r.useContext(u),{active:x,disabled:w,completed:A,icon:C}=r.useContext($),L=_||C,k=b;L&&!k&&(k=D);let T=(0,a.f)({},c,{active:x,alternativeLabel:g,completed:A,disabled:w,error:y,orientation:S}),F=(e=>{let{classes:t,orientation:i,active:a,completed:r,error:o,disabled:l,alternativeLabel:s}=e;return(0,n.f)({root:["root",i,o&&"error",l&&"disabled",s&&"alternativeLabel"],label:["label",a&&"active",r&&"completed",o&&"error",l&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",a&&"active",r&&"completed",o&&"error",l&&"disabled",s&&"alternativeLabel"],labelContainer:["labelContainer",s&&"alternativeLabel"]},P,t)})(T),G=null!=(s=I.label)?s:f.label;return(0,p.jsxs)(E,(0,a.f)({className:(0,o.f)(F.root,m),ref:t,ownerState:T},h,{children:[L||k?(0,p.jsx)(W,{className:F.iconContainer,ownerState:T,children:(0,p.jsx)(k,(0,a.f)({completed:A,active:x,error:y,icon:L},v))}):null,(0,p.jsxs)(J,{className:F.labelContainer,ownerState:T,children:[d?(0,p.jsx)(O,(0,a.f)({ownerState:T},G,{className:(0,o.f)(F.label,null==G?void 0:G.className),children:d})):null,q]})]}))});V.muiName="StepLabel",e.s(["f",0,V],280875)}])})();