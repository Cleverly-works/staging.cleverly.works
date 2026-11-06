(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,443919,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(280445),n=e.i(222351),o=e.i(738251),r=e.i(115871),s=e.i(755548),l=e.i(813843),c=e.i(741850),d=e.i(376733),u=e.i(411331),m=e.i(377198);let f=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var p=e.i(889231),$=e.i(396413);let _=(0,a.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,h=(0,a.f)("div")`
  position: relative;
  display: inline-block;
  border-radius: ${e=>{let{logoUrl:t}=e;return t?"2px":"50%"}};
  overflow: hidden;

  .edit-text {
    width: 100%;
    text-align: center;
    border-radius: ${e=>{let{logoUrl:t}=e;return t?"0px 0px 2px 2px":"0"}};
  }

  &:hover .edit-text {
    opacity: 1;
  }

  & .MuiAvatar-root {
    overflow: hidden;
    border-radius: ${e=>{let{logoUrl:t}=e;return t?"2px":"50%"}};
    ${e=>{let{logoUrl:t}=e;return t?"height: 55px; width: auto; min-width: 55px;":"height: 55px; width: 55px;"}}
  }
`,y=(0,a.f)("div")`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2px 10px;
  font-size: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
`;e.s(["f",0,e=>{let{avatar:a,editable:I=!0,entity:g,entityName:q,linkTitleTo:b,relatedParties:x,onEdit:v,refetch:A}=e,w=(0,u.f)(),[S,j]=(0,i.useState)(null),[C,U]=(0,i.useState)(!1),L=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!f.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),i=(t=t.replace(/^www\./,"")).split("/")[0];return i?.split(":")[0]||null}catch(e){return null}})(e);let i="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!i)return null;let a=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:i});return`https://img.logo.dev/${encodeURIComponent(t)}?${a.toString()}`})(g.website||g.manager?.email),k=x&&x.length>0,T=(0,m.f)(S);(0,i.useEffect)(()=>{a?(j(a),U(!1)):L?(j(L),U(!0)):(j(null),U(!1))},[a,L]);let F=e=>{let[t]=e;w.close(),j(t?.filename||null)};return(0,t.jsx)(_,{children:(0,t.jsxs)(l.f,{px:1.5,direction:"row",children:[(0,t.jsx)(l.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(h,{logoUrl:C,children:[(0,t.jsx)(n.f,{content:g?.name,src:T,onClick:I?()=>{w.show({content:(0,t.jsx)($.f,{category:"avatar",entity:q,entityId:g?.id,filters:{category:"avatar"},onMediaAdd:F,refetch:A,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:I?"pointer":"default"}}),I&&(0,t.jsx)(y,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(l.f,{pl:1.5,flex:k?1:void 0,minWidth:k?0:void 0,children:[(0,t.jsxs)(r.f,{color:"text.primary",fontSize:17,children:[b?(0,t.jsx)(p.f,{href:b,sx:{color:"secondary.main"},children:g?.name}):g?.name,g?.description&&(g?.descriptionLink?(0,t.jsx)(p.f,{href:g?.descriptionLink,target:"_blank",underline:"none",children:(0,t.jsx)(r.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:g?.description})}):(0,t.jsx)(r.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:g?.description})),g?.website&&(0,t.jsx)(p.f,{href:g?.website.startsWith("http")?g?.website:`http://${g?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(c.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),k&&(0,t.jsxs)(l.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(r.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(o.f,{component:"span",children:"Related party: "}),x.map((e,i)=>(0,t.jsxs)("span",{children:[i>0&&", ",(0,t.jsx)(p.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),I&&!!v&&(0,t.jsxs)(s.f,{onClick:v,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(d.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),I&&!k&&(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-start",children:!!v&&(0,t.jsxs)(s.f,{onClick:v,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(d.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},122989,e=>{var t=e.i(391398),i=e.i(280445),a=e.i(668921),n=e.i(231637),o=e.i(901004),r=e.i(539117),s=e.i(471973);let l=(0,i.f)(a.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),c=(0,i.f)(n.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:a,label:n,options:d,value:u,onChange:m,helperText:f,error:p,hideLabel:$,renderOption:_,...h}=e;return(0,t.jsxs)(l,{variant:a,fullWidth:i,error:p,hiddenLabel:$,children:[!$&&(0,t.jsx)(c,{variant:a,children:n}),(0,t.jsx)(r.f,{fullWidth:i,displayEmpty:!0,value:u||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=d.find(e=>e.value===u);return e?e.label:""},error:p,...h,children:d.length?d.map(e=>(0,t.jsx)(o.f,{value:e.value,disabled:e.disabled,children:_?_(e):e.label},e.value)):(0,t.jsx)(o.f,{disabled:!0,value:"",children:"No options"})}),f&&(0,t.jsx)(s.f,{error:p,children:f})]})}])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,q=t.f`
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
`,x=t.f`
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
`,v=t.f`
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
`,S=t.f`
  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
    }
  }
`,j=t.f`
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
`,U=t.f`
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
`;e.s(["V",0,m,"M",0,f,"J",0,U,"c",0,h,"m",0,l,"_",0,o,"W",0,r,"B",0,s,"a",0,L,"v",0,v,"S",0,C,"Z",0,j,"X",0,i,"D",0,b,"Y",0,d,"g",0,y,"b",0,$,"h",0,p,"o",0,_,"j",0,w,"O",0,g,"d",0,q,"T",0,I,"U",0,S,"i",0,a,"e",0,n,"z",0,x,"A",0,A,"p",0,u,"P",0,c])},544005,e=>{e.s(["f",0,(e,t)=>{let i={...e};return Object.entries(t).forEach(e=>{let[t,a]=e;void 0===i[t]&&(i[t]=a)}),i}])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let i=t?.medium?.meta?.thumbnails,a=i?.find?.(e=>"small"===e.name);return a?.relativePath||t.medium.filename||null}])},886143,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["o",0,i,"A",0,a])},588964,e=>{var t=e.i(391398),i=e.i(691567),a=e.i(668921),n=e.i(152078),o=e.i(471973),r=e.i(606255),s=e.i(984636),l=e.i(530252),c=e.i(813843),d=e.i(115871),u=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},f=e=>{let i=(0,u.f)(e,m),{label:f,options:$,error:_,helperText:h,stackProps:y={},formControlProps:I={},labelLeft:g}=i,q=e=>{let{children:i}=e;return(0,t.jsx)(t.Fragment,{children:i})};return(0,t.jsxs)(a.f,{sx:{m:3},error:_,variant:"standard",...I,children:[(0,t.jsxs)(c.f,{...g&&p,children:[f&&(0,t.jsx)(r.f,{id:"radio-group",color:"secondary",children:f}),(0,t.jsx)(s.f,{...i,"aria-labelledby":"radio-group",children:(0,t.jsx)(c.f,{...y,children:$.map(e=>{let{value:i,label:a,icon:o,ParentComponent:r=q}=e;return(0,t.jsx)(r,{children:(0,t.jsx)(n.f,{value:i,control:(0,t.jsx)(l.f,{color:"secondary"}),label:(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[o,(0,t.jsx)(d.f,{children:a})]})})})})})})]}),(0,t.jsx)(o.f,{children:h})]})};f.propTypes={label:i.default.string,options:i.default.arrayOf(i.default.shape({label:i.default.string.isRequired,value:i.default.any.isRequired,ParentComponent:i.default.elementType})),error:i.default.bool,helperText:i.default.string,stackProps:i.default.object,formControlProps:i.default.object,labelLeft:i.default.bool};let p={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,f])},219281,e=>{var t=e.i(948574);e.s(["G",0,(e,i)=>"customer"!==e&&"supplier"!==e||i([...t.x,...t.H,...t.z,...t.Q]),"u",0,e=>{let{accountType:t,role:i,hasRole:a}=e;return a(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${i}`):a(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${i}`):!!a(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${i}`)},"y",0,(e,t,i)=>{let a={};return e.id?(a.id=parseInt(e.id),a.changes={nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,meta:{...t},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null,status:e.status},e.accountUserId?(a.updateAccountUser=!0,a.accountUserId=parseInt(e.accountUserId),a.accountUserChanges={role:e.role?.value,position:e.position,isContact:"yes"===e.isContact,status:e.status},a.accountUserModules=e.modules??{}):(a.accountUserId=0,a.updateAccountUser=!1)):(a.role=e.role?.value||"user",a.position=e.position,a.isContact="yes"===e.isContact,a.status=e.status,a.accountId=e.accountId,a.modules=e.modules,i?a.userId=i.id:a.User={data:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,status:e.status,meta:{sendDefaultWelcomeEmail:!0,notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null}}),a},"b",0,e=>({accountUserId:e.accountUserId,objects:e.location.map(t=>({accountUserId:e.accountUserId,accountLocationId:t}))}),"c",0,e=>({accountUserId:e.accountUserId,objects:(e.location??[]).map(t=>({accountUserId:e.accountUserId,locationId:t}))})])},39059,e=>{var t=e.i(159080);let i=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,a=t.f`
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
`,n=t.f`
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
`,o=t.f`
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
`,r=t.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,s=t.f`
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
  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {
    createGoogleToken(code: $code, id: $id, type: $type) {
      success
      tokens
      error
    }
  }
`,c=t.f`
  mutation GenerateMSURL($type: String!, $id: Int!) {
    genenrateMSURL(id: $id, type: $type) {
      url
    }
  }
`,d=t.f`
  mutation signoutMS($id: Int!, $type: String!, $email: String!) {
    signoutMS(id: $id, type: $type, email: $email) {
      error
      msId
      success
    }
  }
`,u=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,m=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,f=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,p=t.f`
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
`,$=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,_=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,h=t.f`
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
`,y=t.f`
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
`,I=t.f`
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
`;e.s(["e",0,r,"d",0,c,"u",0,h,"q",0,u,"_",0,f,"x",0,o,"k",0,n,"f",0,m,"U",0,y,"I",0,i,"s",0,I,"c",0,l,"S",0,d,"o",0,$,"l",0,p,"V",0,a,"J",0,_,"W",0,s])},856688,e=>{var t=e.i(776204),i=e.i(432171),a=e.i(170582),n=e.i(511667),o=e.i(886143),r=e.i(327682),s=e.i(191788);e.s(["f",0,function(e,l,c,d){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[m,f]=(0,s.useState)(!1),{data:{items:p}={items:[]},loading:$}=(0,i.t)(o.A,{variables:{entity:e,entityId:d,category:u,adminId:l},skip:!d}),[_,{isLoading:h}]=(0,n.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),[y]=(0,t.f)(r.p,{refetchQueries:["MEDIAS"]}),I=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{f(!0);let a=[];for(let n of t)if(!n.mediaId){let t,o=await g(n),r=null;if("image"===n.type){let e=o.key,i=o.data.find(e=>"large"===e.name);t=i?i.relativePath:e,r={original:{relativePath:e},thumbnails:o.data||null}}else t=o.key;a.push({entity:e,Medium:{data:{adminId:l,caption:n?.caption??null,extension:n?.media?.name?.split(".").pop(),userId:c,category:i,filename:t,type:n.type,meta:r??void 0}}})}return{Media_Entity:{data:a}}}finally{f(!1)}},g=async e=>{let t,i=new window.FormData;switch(e.media&&i.append("file",e.media,e.media.name),e.type){case"image":t=a.G;break;case"document":case"audio":t=a.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let n=window.localStorage.getItem("bearerToken"),o={};n&&(o.Authorization=`Bearer ${n}`);let r=await window.fetch(t,{method:"POST",body:i,headers:o}),s=await r.json();if(!r.ok)throw Error(s?.message||`Upload failed with status ${r.status}`);return s};return{uploadMedia:async(t,i)=>{try{if(f(!0),i){let a=await g(i),n={adminId:l,caption:i.caption,expiryAt:null,extension:i.media.name.split(".").pop(),userId:c,filename:a.key,type:i.type,Media_Entities:{data:[{entity:e,entityId:t}]}};await y({variables:{objects:n}})}}finally{f(!1)}},uploadMediaToS3:g,createMediaInput:I,deleteMediaByEntity:e=>_({body:{mediaId:e}}),loadingAddMedia:m,loadingDeleteMedia:h,preloadedMediaLoading:$,preloadedMedia:p?.length?p:[]}}])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(432171),n=e.i(422411),o=e.i(424894),r=e.i(738251),s=e.i(799083),l=e.i(76381),c=e.i(813843),d=e.i(652148),u=e.i(115871),m=e.i(56271),f=e.i(577372),p=e.i(403901),$=e.i(588964),_=e.i(546788),h=e.i(594301),y=e.i(494575),I=e.i(498813),g=e.i(39059),q=e.i(219281),b=e.i(824451),x=e.i(292802),v=e.i(74633),A=e.i(889231),w=e.i(164056),S=e.i(658524),j=e.i(159974),C=e.i(589200),U=e.i(524057),L=e.i(207646),k=e.i(948574);let T=()=>{let{hasRole:e}=(0,h.f)(),{control:i,formState:{errors:a}}=(0,n.M)();return(0,t.jsxs)(c.f,{width:"100%",gap:1,children:[(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(n.e,{name:"nameFirst",control:i,defaultValue:"",render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"First name",value:i,onChange:n,error:!!a?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(n.e,{name:"nameLast",control:i,defaultValue:"",render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"Last name",value:i,onChange:n,error:!!a?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(n.e,{name:"email",control:i,defaultValue:"",render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:i,onChange:n,error:!!a?.email,fullWidth:!0})}}),(0,t.jsx)(n.e,{name:"phone",control:i,defaultValue:"",render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"Mobile",value:i,onChange:n,error:!!a?.phone,fullWidth:!0})}})]}),e([...k.x,...k.H,...k.z,...k.Q])&&(0,t.jsx)(n.e,{name:"status",control:i,defaultValue:"active",render:e=>{let{value:i,onChange:n}=e;return(0,t.jsxs)(C.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(U.f,{children:"Status"}),(0,t.jsx)(S.f,{value:i,onChange:n,error:!!a?.status,children:L.f.map(e=>(0,t.jsx)(j.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(n.e,{name:"userId",control:i,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var F=e.i(122965),M=e.i(159080);let G=M.f`
  query GetAdminUserLocations($accountId: Int, $q: String, $limit: Int, $offset: Int) {
    location: Location(
      offset: $offset
      limit: $limit
      where: {
        Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } }
        _or: [
          { name: { _ilike: $q } }
          { Customer: { name: { _ilike: $q } } }
          { Addresses: { Address: { city: { _ilike: $q } }, entity: { _eq: "Location" } } }
          { Addresses: { Address: { postCode: { _ilike: $q } }, entity: { _eq: "Location" } } }
        ]
      }
    ) {
      id
      name
      customer: Customer {
        id
        name
      }
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
        Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } }
        _or: [
          { name: { _ilike: $q } }
          { Customer: { name: { _ilike: $q } } }
          { Addresses: { Address: { city: { _ilike: $q } }, entity: { _eq: "Location" } } }
          { Addresses: { Address: { postCode: { _ilike: $q } }, entity: { _eq: "Location" } } }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,P=M.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,E=M.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,R=["customer_user","admin_user"],B=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],W={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:y.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:y,accountId:w,accountType:S,submit:j}=e,{hasRole:C,user:U}=(0,h.f)(),{reference:L,pagination:k}=(0,F.f)(),M=C(["admin_owner","admin_manager"]),z=!(C("admin_user")&&"admin"===S),[N,H]=(0,i.useState)(!0),[O,V]=(0,i.useState)(""),[D,Q]=(0,i.useState)(!1),[J,K]=(0,i.useState)(!1),[X,Y]=(0,i.useState)(""),[Z,ee]=(0,i.useState)(null),[et,ei]=(0,i.useState)(!1),ea=(0,i.useRef)(!1),en=[...x.f];switch(S){case"supplier":en.push({label:"Operative",value:"contractor"});break;case"admin":en.push({label:"Helpdesk",value:"helpdesk"})}let eo=!w||"customer"!==S,{data:er,loading:es}=(0,a.t)(I.a,{skip:eo,variables:{accountId:w,excludeUserId:y??-1}}),el="customer"===S&&!!w&&!eo&&!es&&!((er?.accountUsers?.length??0)>0),ec="customer"===S&&!!w,ed=(0,n.G)({defaultValues:{id:y,accountId:w,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,o.yupResolver)(_.f),context:{hasRole:(0,q.G)(S,C)&&!!w,hasLocation:!R.includes(U.role)&&R.includes(O),adminImplicitLocations:"admin"===S&&"admin_user"===O&&!y&&!et,hasOneOwner:N,isCustomerAccount:ec,mustKeepContactUser:el,contactRulesStillLoading:ec&&es}}),{control:eu,errors:em,handleSubmit:ef,watch:ep,reset:e$,setValue:e_}=ed,eh=ep("role"),ey=ep("location");(0,i.useEffect)(()=>{eh?.value&&V(`${S}_${eh?.value}`)},[S,eh?.value]);let{data:{user:eI}={user:null},loading:eg}=(0,a.t)(I.E,{skip:!y,variables:{userId:y,accountId:w,includeAccount:!!w},onCompleted:e=>{let{user:t}=e;if(!t)return;let i=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(w)}),a={id:t.id,accountId:i?.account.id||w||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...i?{accountUserId:i.id,accountId:i.account.id,role:en?.find?.(e=>e?.value===i?.role),position:i.position||null,isContact:!0===i.isContact?"yes":"no",status:i.status,location:"admin"===S&&"user"===i.role?void 0:i.userLocations.map(e=>e.accountLocationId),modules:i.modules}:{}};Q(!0),e$(a),V(`${S}_${a.role?.value||""}`),ee(a.accountUserId||null)}});(0,a.t)(I.R,{skip:!w,variables:{accountId:w,userId:y},onCompleted:e=>{let{accountUsers:t}=e;H(!(t.length>0))}});let eq="admin_user"===O,eb=null!=f.f[O]&&y!==U.id&&z,{data:ex}=(0,a.t)(P,{skip:!eq||null==w,variables:{accountId:w}}),ev=(0,i.useMemo)(()=>ex?.location?.map(e=>e.id)??[],[ex]),{data:{restrictedLocations:eA=[]}={restrictedLocations:[]},loading:ew}=(0,a.t)(E,{skip:!eq||!Z,variables:{accountUserId:Z}});(0,i.useEffect)(()=>{eq?!Z||ew||J||(e_("location",eA.map(e=>e.locationId)),K(!0)):K(!1)},[Z,J,eq,eA,ew,e_]),(0,i.useEffect)(()=>{!ea.current||eq||y||(e_("location",void 0),ei(!1)),ea.current=eq},[eq,e_,y]);let{data:{location:eS,meta:ej}={location:[],meta:{aggregate:{totalCount:0}}},loading:eC}=(0,a.t)(g.u,{skip:eq||!w,variables:{accountId:w,...k}}),{data:{location:eU,meta:eL}={location:[],meta:{aggregate:{totalCount:0}}},loading:ek}=(0,a.t)(G,{skip:!eq||!w,variables:{accountId:w,q:""!==X?`%${X}%`:null,...k}}),eT=eq?eU:eS,eF=eq?eL:ej,eM=eq?ek:eC,eG="admin"===S&&eq&&!y&&!et,eP=(0,i.useCallback)(e=>t=>{eq&&ei(!0),t.target.checked?e_("location",[...new Set([...ey??[],e])]):e_("location",(ey??[]).filter(t=>t!==e))},[eq,ey,e_]),eE=(0,i.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!eq||0===ev.length)return null;let e=Array.isArray(ey)?ey:[],i=ev.length>0&&ev.every(t=>e.includes(t)),a=e.length>0;return eG?(0,t.jsx)(s.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(ei(!0),e_("location",[...ev]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(s.f,{color:"secondary",checked:i,indeterminate:a&&!i,onChange:e=>{ei(!0),e.target.checked?e_("location",[...ev]):e_("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:i}=e;return i.id?(0,t.jsx)(s.f,{color:"secondary",checked:!eG&&!!ey?.includes(i.id),onChange:eP(i.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:i}=e;return i.address?(0,t.jsxs)(c.f,{children:[(0,t.jsx)(u.f,{children:i.address.addressLine1}),(0,t.jsx)(u.f,{children:i.address.postCode})]}):(0,t.jsx)(u.f,{children:"Please add"})}},...eq?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:i}=e;return i.customerId&&i.customer?(0,t.jsx)(A.f,{color:"secondary",href:`/dashboard/customers/view?id=${i.customerId}`,onClick:e=>e.stopPropagation(),children:i.customer}):null}}]:[]],[ev,eG,eq,ey,eP,ei,e_]),eR=(0,i.useMemo)(()=>(eT??[]).map(e=>({id:eq?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[eq,eT]);if(eg)return(0,t.jsx)(c.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eB={id:(0,q.G)(S,C)};return(0,t.jsx)(n.p,{...ed,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:ef(e=>{let t="admin"===S&&eq&&!y&&!et&&ev.length>0?{...e,location:[...ev]}:e,i=eb?(0,p.f)(e.modules,f.f[O]?.map(e=>e.name)??[]):void 0;j(i?{...t,modules:i}:t,eI?.meta)}),children:[(0,t.jsx)(T,{}),w&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.f,{paddingTop:1,children:[(0,q.G)(S,C)&&(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(n.e,{name:"role",control:eu,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(b.f,{value:i,onChange:(e,t)=>a(t),label:"Role",options:en,variant:"standard",color:"secondary",error:!!em?.role,helperText:em?.role?.message||em?.role?.value?.message})}},D?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(n.e,{name:"position",control:eu,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:i||"",onChange:e=>a(e.target.value||null),InputLabelProps:{shrink:!!i},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,q.u)({accountType:S,role:eh?.value,hasRole:C})&&eI?.id!==U.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(n.e,{name:"invoiceThreshold",control:eu,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:i,onChange:a,InputLabelProps:{shrink:!!i},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(n.e,{name:"quoteThreshold",control:eu,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:i,onChange:a,InputLabelProps:{shrink:!!i},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(c.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(u.f,{sx:W.title,children:"Contact user"}),(0,t.jsx)(n.e,{name:"isContact",control:eu,render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)($.f,{formControlProps:{sx:{m:0}},stackProps:em.isContact?W.radioGroupError:W.radioGroup,error:!!em.isContact,value:i,onChange:a,options:B,labelLeft:!0,helperText:em.isContact?.message})}},D?"contact-edit-mode":"contact-create-mode")]}),eb&&(0,t.jsx)(m.f,{role:O})]}),R.includes(O)&&y!==U.id&&z&&(0,t.jsxs)(r.f,{sx:em.location?W.locationError:{},children:[(0,t.jsx)(u.f,{sx:W.title,children:"Locations"}),eq&&M&&(0,t.jsx)(d.f,{fullWidth:!0,value:X,onChange:e=>{Y(e.target.value),L.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!X},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)(v.s,{...L,columnVisibilityModel:eB,totalCount:eF.aggregate.totalCount,columns:eE,loading:eM,rows:eR,autoHeight:!0}),(0,t.jsx)(n.e,{control:eu,name:"location",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:i,onChange:a})}})]})]}),y&&(0,t.jsx)(n.e,{control:eu,name:"id",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:i,onChange:a})}}),w&&(0,t.jsx)(n.e,{control:eu,name:"accountId",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:i,onChange:a})}}),Z&&(0,t.jsx)(n.e,{control:eu,name:"accountUserId",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:i,onChange:a})}})]})})}],697871)},56271,577372,403901,546788,498813,e=>{var t=e.i(391398),i=e.i(813843),a=e.i(115871);let n=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],o=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],r={customer_user:n,admin_user:n,supplier_owner:o,supplier_manager:o,supplier_user:o,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...o]};e.s(["f",0,r],577372);var s=e.i(191788),l=e.i(422411),c=e.i(152078),d=e.i(799083),u=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:n}=e,{control:o,watch:f,setValue:p}=(0,l.M)(),$=!!f("modules.jobHistoryAll"),_=(0,s.useMemo)(()=>r[n]||[],[n]);return(0,s.useEffect)(()=>{$&&p("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[$,p]),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(a.f,{sx:m,children:"Permissions"}),(0,t.jsx)(i.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:_.map(e=>{let i="jobHistorySupplier"===e.name&&$;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:o,render:a=>{let{value:n,onChange:o}=a;return(0,t.jsx)(c.f,{disabled:i,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(d.f,{color:"secondary",checked:!!n,disabled:i,onChange:e=>o(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let f=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let i=e??{};return Object.fromEntries(f.map(e=>[e,t.includes(e)&&!0===i[e]]))}],403901);var p=e.i(426778);let $="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",_=(0,p.t)().shape({id:(0,p.H)().nullable().optional(),accountId:(0,p.H)().nullable().optional(),nameFirst:(0,p.x)().required(),nameLast:(0,p.x)().required(),email:(0,p.x)().required().email(),phone:(0,p.x)().required(),status:(0,p.x)().when("$hasRole",(e,t)=>{let[i]=e;return i?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,p.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,p.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,p.t)().nullable().shape({label:(0,p.x)(),value:(0,p.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[i,a,n]=e;return i?a?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):n&&"number"==typeof n&&n>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[i,a]=e;return i&&a&&"number"==typeof a&&a>0?t.required("Role is required"):t.nullable()}),userId:(0,p.H)().nullable().optional(),accountUserId:(0,p.H)().nullable().optional(),position:(0,p.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,p.x)().nullable(),otherwise:()=>(0,p.x)().nullable()}),isContact:(0,p.x)().when("accountId",{is:e=>!!e,then:()=>(0,p.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[i,a,n]=e;return n?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):i&&a?t.oneOf(["yes"],$).required($):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,p.x)().nullable().optional()}),location:(0,p.k)().of((0,p.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[i,a]=e;return!i||a?t.nullable().optional():t.required()})});e.s(["f",0,_],546788);var h=e.i(159080);let y=h.f`
  query GetUserEditOffCanvas($userId: Int!, $accountId: Int, $includeAccount: Boolean!) {
    user: User_by_pk(id: $userId) {
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
      accounts: Account_Users(where: { accountId: { _eq: $accountId } })
        @include(if: $includeAccount) {
        id
        role
        position
        isContact
        status
        modules
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
  }
`,I=h.f`
  query FindOwnersByAccount($accountId: Int, $userId: Int) {
    accountUsers: Account_User(
      where: { role: { _eq: "owner" }, accountId: { _eq: $accountId }, userId: { _neq: $userId } }
    ) {
      id
      role
    }
  }
`,g=h.f`
  query FindOtherContactsByAccount($accountId: Int, $excludeUserId: Int!) {
    accountUsers: Account_User(
      where: {
        isContact: { _eq: true }
        accountId: { _eq: $accountId }
        userId: { _neq: $excludeUserId }
      }
      order_by: { id: asc }
      limit: 1
    ) {
      id
    }
  }
`;e.s(["a",0,g,"R",0,I,"E",0,y],498813)},741850,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),o=e.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var i=e.i(231637);e.s(["f",()=>i.f],524057)}])})();