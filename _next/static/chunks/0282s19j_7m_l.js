(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,443919,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(280445),o=e.i(222351),a=e.i(738251),n=e.i(115871),s=e.i(755548),l=e.i(813843),d=e.i(741850),c=e.i(376733),f=e.i(411331),m=e.i(377198);let u=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var $=e.i(889231),y=e.i(396413);let p=(0,r.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,_=(0,r.f)("div")`
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
`,h=(0,r.f)("div")`
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
`;e.s(["f",0,e=>{let{avatar:r,editable:q=!0,avatarEditable:g=q,entity:I,entityName:v,linkTitleTo:b,relatedParties:x,onEdit:S,refetch:w}=e,k=(0,f.f)(),[C,j]=(0,i.useState)(null),[A,M]=(0,i.useState)(!1),F=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!u.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),i=(t=t.replace(/^www\./,"")).split("/")[0];return i?.split(":")[0]||null}catch(e){return null}})(e);let i="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!i)return null;let r=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:i});return`https://img.logo.dev/${encodeURIComponent(t)}?${r.toString()}`})(I.website||I.manager?.email),T=x&&x.length>0,G=(0,m.f)(C);(0,i.useEffect)(()=>{r?(j(r),M(!1)):F?(j(F),M(!0)):(j(null),M(!1))},[r,F]);let L=e=>{let[t]=e;k.close(),j(t?.filename||null)};return(0,t.jsx)(p,{children:(0,t.jsxs)(l.f,{px:1.5,direction:"row",children:[(0,t.jsx)(l.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(_,{logoUrl:A,children:[(0,t.jsx)(o.f,{content:I?.name,src:G,onClick:g?()=>{k.show({content:(0,t.jsx)(y.f,{category:"avatar",entity:v,entityId:I?.id,filters:{category:"avatar"},onMediaAdd:L,refetch:w,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:g?"pointer":"default"}}),g&&(0,t.jsx)(h,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(l.f,{pl:1.5,flex:T?1:void 0,minWidth:T?0:void 0,children:[(0,t.jsxs)(n.f,{color:"text.primary",fontSize:17,children:[b?(0,t.jsx)($.f,{href:b,sx:{color:"secondary.main"},children:I?.name}):I?.name,I?.description&&(I?.descriptionLink?(0,t.jsx)($.f,{href:I?.descriptionLink,target:"_blank",underline:"none",rel:"noopener noreferrer",children:(0,t.jsx)(n.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:I?.description})}):(0,t.jsx)(n.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:I?.description})),I?.website&&(0,t.jsx)($.f,{href:I?.website.startsWith("http")?I?.website:`http://${I?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(d.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),T&&(0,t.jsxs)(l.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(n.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(a.f,{component:"span",children:"Related party: "}),x.map((e,i)=>(0,t.jsxs)("span",{children:[i>0&&", ",(0,t.jsx)($.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),q&&!!S&&(0,t.jsxs)(s.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),q&&!T&&(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-start",children:!!S&&(0,t.jsxs)(s.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},122989,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(668921),o=e.i(231637),a=e.i(901004),n=e.i(539117),s=e.i(471973);let l=(0,i.f)(r.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),d=(0,i.f)(o.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:r,label:o,options:c,value:f,onChange:m,helperText:u,error:$,hideLabel:y,renderOption:p,..._}=e;return(0,t.jsxs)(l,{variant:r,fullWidth:i,error:$,hiddenLabel:y,children:[!y&&(0,t.jsx)(d,{variant:r,children:o}),(0,t.jsx)(n.f,{fullWidth:i,displayEmpty:!0,value:f||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=c.find(e=>e.value===f);return e?e.label:""},error:$,..._,children:c.length?c.map(e=>(0,t.jsx)(a.f,{value:e.value,disabled:e.disabled,children:p?p(e):e.label},e.value)):(0,t.jsx)(a.f,{disabled:!0,value:"",children:"No options"})}),u&&(0,t.jsx)(s.f,{error:$,children:u})]})}])},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`;let f=t.f`
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
`,p=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,_=t.f`
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
`,h=t.f`
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
`,v=t.f`
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
`,b=t.f`
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
`,k=t.f`
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
`,A=t.f`
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
`,M=t.f`
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
`;e.s(["V",0,m,"M",0,u,"J",0,A,"c",0,_,"m",0,l,"_",0,a,"W",0,n,"B",0,s,"a",0,M,"v",0,x,"S",0,j,"Z",0,C,"X",0,i,"D",0,v,"Y",0,c,"g",0,h,"b",0,y,"h",0,$,"o",0,p,"j",0,w,"O",0,g,"d",0,I,"T",0,q,"U",0,k,"i",0,r,"e",0,o,"z",0,b,"A",0,S,"p",0,f,"P",0,d])},544005,e=>{e.s(["f",0,(e,t)=>{let i={...e};return Object.entries(t).forEach(e=>{let[t,r]=e;void 0===i[t]&&(i[t]=r)}),i}])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let i=t?.medium?.meta?.thumbnails,r=i?.find?.(e=>"small"===e.name);return r?.relativePath||t.medium.filename||null}])},886143,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`;e.s(["o",0,i,"A",0,r])},588964,e=>{var t=e.i(391398),i=e.i(691567),r=e.i(668921),o=e.i(152078),a=e.i(471973),n=e.i(606255),s=e.i(984636),l=e.i(530252),d=e.i(813843),c=e.i(115871),f=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},u=e=>{let i=(0,f.f)(e,m),{label:u,options:y,error:p,helperText:_,stackProps:h={},formControlProps:q={},labelLeft:g}=i,I=e=>{let{children:i}=e;return(0,t.jsx)(t.Fragment,{children:i})};return(0,t.jsxs)(r.f,{sx:{m:3},error:p,variant:"standard",...q,children:[(0,t.jsxs)(d.f,{...g&&$,children:[u&&(0,t.jsx)(n.f,{id:"radio-group",color:"secondary",children:u}),(0,t.jsx)(s.f,{...i,"aria-labelledby":"radio-group",children:(0,t.jsx)(d.f,{...h,children:y.map(e=>{let{value:i,label:r,icon:a,ParentComponent:n=I}=e;return(0,t.jsx)(n,{children:(0,t.jsx)(o.f,{value:i,control:(0,t.jsx)(l.f,{color:"secondary"}),label:(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:1,children:[a,(0,t.jsx)(c.f,{children:r})]})})})})})})]}),(0,t.jsx)(a.f,{children:_})]})};u.propTypes={label:i.default.string,options:i.default.arrayOf(i.default.shape({label:i.default.string.isRequired,value:i.default.any.isRequired,ParentComponent:i.default.elementType})),error:i.default.bool,helperText:i.default.string,stackProps:i.default.object,formControlProps:i.default.object,labelLeft:i.default.bool};let $={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,u])},856688,e=>{var t=e.i(432171),i=e.i(170582),r=e.i(511667),o=e.i(886143),a=e.i(191788);e.s(["w",0,e=>(e?.Media_Entity.data??[]).flatMap(e=>{let{Medium:{data:t}}=e;return t.filename&&t.type?[{filename:t.filename,type:t.type,caption:t.caption,category:t.category,extension:t.extension,meta:t.meta}]:[]}),"t",0,function(e,n,s,l){let d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[c,f]=(0,a.useState)(!1),{data:{items:m}={items:[]},loading:u}=(0,t.t)(o.A,{variables:{entity:e,entityId:l,category:d,adminId:n},skip:!l}),[$,{isLoading:y}]=(0,r.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),p=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{f(!0);let r=[];for(let o of t)if(!o.mediaId){let t,a=await _(o),l=null;if("image"===o.type){let e=a.key,i=a.data.find(e=>"large"===e.name);t=i?i.relativePath:e,l={original:{relativePath:e},thumbnails:a.data||null}}else t=a.key;r.push({entity:e,Medium:{data:{adminId:n,caption:o?.caption??null,extension:o?.media?.name?.split(".").pop(),userId:s,category:i,filename:t,type:o.type,meta:l??void 0}}})}return{Media_Entity:{data:r}}}finally{f(!1)}},_=async e=>{let t,r=new window.FormData;switch(e.media&&r.append("file",e.media,e.media.name),e.type){case"image":t=i.G;break;case"document":case"audio":t=i.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let o=window.localStorage.getItem("bearerToken"),a={};o&&(a.Authorization=`Bearer ${o}`);let n=await window.fetch(t,{method:"POST",body:r,headers:a}),s=await n.json();if(!n.ok)throw Error(s?.message||`Upload failed with status ${n.status}`);return s};return{uploadMediaToS3:_,createMediaInput:p,deleteMediaByEntity:e=>$({body:{mediaId:e}}),loadingAddMedia:c,loadingDeleteMedia:y,preloadedMediaLoading:u,preloadedMedia:m?.length?m:[]}}])},741850,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),a=e.r(391398);i.default=(0,o.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},632784,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),o=e.i(889878),a=e.i(600961),n=e.i(396851),s=e.i(395724),l=e.i(713149),d=e.i(46739);function c(e){return(0,d.f)("MuiFormGroup",e)}(0,l.f)("MuiFormGroup",["root","row","error"]);var f=e.i(225730),m=e.i(180730),u=e.i(391398);let $=["className","row"],y=(0,n.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,i.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),p=r.forwardRef(function(e,r){let n=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:l,row:d=!1}=n,p=(0,t.f)(n,$),_=(0,f.f)(),h=(0,m.f)({props:n,muiFormControl:_,states:["error"]}),q=(0,i.f)({},n,{row:d,error:h.error}),g=(e=>{let{classes:t,row:i,error:r}=e;return(0,a.f)({root:["root",i&&"row",r&&"error"]},c,t)})(q);return(0,u.jsx)(y,(0,i.f)({className:(0,o.f)(g.root,l),ownerState:q,ref:r},p))});e.s(["f",0,p],632784)},530252,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),o=e.i(889878),a=e.i(600961),n=e.i(477366),s=e.i(272932),l=e.i(395724),d=e.i(727529),c=e.i(464107),f=e.i(938785),m=e.i(166822),u=e.i(713149),$=e.i(46739);function y(e){return(0,$.f)("MuiRadio",e)}let p=(0,u.f)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);var _=e.i(396851),h=e.i(896994),q=e.i(391398);let g=["checked","checkedIcon","color","icon","name","onChange","size","className"],I=(0,_.f)(s.f,{shouldForwardProp:e=>(0,h.f)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"medium"!==i.size&&t[`size${(0,c.f)(i.size)}`],t[`color${(0,c.f)(i.color)}`]]}})(e=>{let{theme:t,ownerState:r}=e;return(0,i.f)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,n.alpha)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${p.checked}`]:{color:(t.vars||t).palette[r.color].main}},{[`&.${p.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}),v=(0,q.jsx)(d.f,{checked:!0}),b=(0,q.jsx)(d.f,{}),x=r.forwardRef(function(e,n){var s,d,u,$;let p=(0,l.f)({props:e,name:"MuiRadio"}),{checked:_,checkedIcon:h=v,color:x="primary",icon:S=b,name:w,onChange:k,size:C="medium",className:j}=p,A=(0,t.f)(p,g),M=(0,i.f)({},p,{color:x,size:C}),F=(e=>{let{classes:t,color:r,size:o}=e,n={root:["root",`color${(0,c.f)(r)}`,"medium"!==o&&`size${(0,c.f)(o)}`]};return(0,i.f)({},t,(0,a.f)(n,y,t))})(M),T=r.useContext(m.f),G=_,L=(0,f.f)(k,T&&T.onChange),U=w;return T&&(void 0===G&&(u=T.value,G="object"==typeof($=p.value)&&null!==$?u===$:String(u)===String($)),void 0===U&&(U=T.name)),(0,q.jsx)(I,(0,i.f)({type:"radio",icon:r.cloneElement(S,{fontSize:null!=(s=b.props.fontSize)?s:C}),checkedIcon:r.cloneElement(h,{fontSize:null!=(d=v.props.fontSize)?d:C}),ownerState:M,classes:F,name:U,checked:G,onChange:L,ref:n,className:(0,o.f)(F.root,j)},A))});e.s(["f",0,x],530252)},727529,e=>{var t=e.i(75907);e.i(191788);var i=e.i(59540),r=e.i(391398);let o=(0,i.f)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),a=(0,i.f)((0,r.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var n=e.i(396851),s=e.i(896994);let l=(0,n.f)("span",{name:"MuiRadioButtonIcon",shouldForwardProp:s.f})({position:"relative",display:"flex"}),d=(0,n.f)(o,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),c=(0,n.f)(a,{name:"MuiRadioButtonIcon"})(e=>{let{theme:i,ownerState:r}=e;return(0,t.f)({left:0,position:"absolute",transform:"scale(0)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeIn,duration:i.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.shortest})})});e.s(["f",0,function(e){let{checked:i=!1,classes:o={},fontSize:a}=e,n=(0,t.f)({},e,{checked:i});return(0,r.jsxs)(l,{className:o.root,ownerState:n,children:[(0,r.jsx)(d,{fontSize:a,className:o.background,ownerState:n}),(0,r.jsx)(c,{fontSize:a,className:o.dot,ownerState:n})]})}],727529)},984636,e=>{e.i(350461);var t=e.i(75907),i=e.i(460997),r=e.i(191788),o=e.i(889878),a=e.i(600961),n=e.i(632784),s=e.i(258559),l=e.i(75136),d=e.i(324382),c=e.i(166822),f=e.i(701806),m=e.i(391398);let u=["actions","children","className","defaultValue","name","onChange","value"],$=r.forwardRef(function(e,$){let{actions:y,children:p,className:_,defaultValue:h,name:q,onChange:g,value:I}=e,v=(0,i.f)(e,u),b=r.useRef(null),x=(e=>{let{classes:t,row:i,error:r}=e;return(0,a.f)({root:["root",i&&"row",r&&"error"]},s.f,t)})(e),[S,w]=(0,d.f)({controlled:I,default:h,name:"RadioGroup"});r.useImperativeHandle(y,()=>({focus:()=>{let e=b.current.querySelector("input:not(:disabled):checked");e||(e=b.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let k=(0,l.f)($,b),C=(0,f.f)(q),j=r.useMemo(()=>({name:C,onChange(e){w(e.target.value),g&&g(e,e.target.value)},value:S}),[C,g,w,S]);return(0,m.jsx)(c.f.Provider,{value:j,children:(0,m.jsx)(n.f,(0,t.f)({role:"radiogroup",ref:k,className:(0,o.f)(x.root,_)},v,{children:p}))})});e.s(["f",0,$])},166822,e=>{e.i(350461);let t=e.i(191788).createContext(void 0);e.s(["f",0,t])},258559,e=>{var t=e.i(713149),i=e.i(46739);(0,t.f)("MuiRadioGroup",["root","row","error"]),e.s(["f",0,function(e){return(0,i.f)("MuiRadioGroup",e)}])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])}])})();