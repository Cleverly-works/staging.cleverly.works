(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[394989,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(773831),o=e.i(813843),n=e.i(115871),s=e.i(322135),a=e.i(148310),l=e.i(889231),c=e.i(422411),d=e.i(424894),u=e.i(755548),f=e.i(652148),m=e.i(376733),p=e.i(978319),h=e.i(426778);let y=h.t({name:h.x().required("Name is required"),url:h.x().url().required("URL is required")}),$=e=>{let{noEdit:n=!1,noDelete:a=!1,isAdded:h=!1,id:$,url:_="",name:q="",onSave:g=()=>{},onCancel:v=()=>{},onDelete:b=()=>{}}=e,[I,x]=(0,i.useState)(h),{control:S,handleSubmit:w,errors:T}=(0,c.G)({resolver:(0,d.yupResolver)(y)});return(0,t.jsx)("form",{children:I?(0,t.jsxs)(o.f,{children:[(0,t.jsxs)(o.f,{spacing:1,children:[(0,t.jsx)(c.e,{control:S,name:"name",defaultValue:q,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!T.name,helperText:T.name?.message})}),(0,t.jsx)(c.e,{control:S,name:"url",defaultValue:_,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!T.url,helperText:T.url?.message})})]}),(0,t.jsxs)(o.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),x(!1),v($)},children:"Cancel"}),(0,t.jsx)(u.f,{variant:"contained",size:"small",onClick:w(e=>{g(e),x(!1)}),children:"Save"})]})]}):(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(l.f,{target:"_blank",variant:"body1",color:"secondary",href:_,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:q}),!n&&(0,t.jsx)(s.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),x(!0)},children:(0,t.jsx)(m.default,{sx:{fontSize:"16px"}})})}),!a&&(0,t.jsx)(s.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>b($),children:(0,t.jsx)(p.default,{sx:{fontSize:"16px"}})})})]})})};var _=e.i(594301);let q=[];e.s(["f",0,e=>{let{values:l=q,setValue:c=()=>{},name:d,title:u="Related links",displayMode:f=!1,noDeleteEdit:m=!1,titleSx:p={}}=e,[h,y]=(0,i.useState)([]),{hasRole:g}=(0,_.f)(),v=g("tenant");(0,i.useEffect)(()=>{Array.isArray(l)&&y((l??[]).map(e=>({...e,id:e?.id||Date.now()})))},[l]);let b=e=>{y(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(o.f,{children:[(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(n.f,{sx:p,children:[u,":"]}),!f&&!v&&(0,t.jsx)(s.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),y(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(a.default,{})})})]}),(0,t.jsx)(o.f,{pl:2,spacing:.8,children:h?.length?h.map(e=>{let t;return(0,i.createElement)($,{...e,key:e.id,onCancel:b,noEdit:m||f,noDelete:m||f,onDelete:(t=e.id,()=>{if(!d)return;let e=h.filter(e=>e.id!==t);c?.(d,e),y(e)}),onSave:t=>((e,t)=>{if(!d)return;let i=[...h],r=i.findIndex(t=>t.id===e);-1!==r&&i.splice(r,1,{...t,isAdded:!1,id:e}),c?.(d,i)})(e.id,t)})}):(0,t.jsx)(n.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},851123,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`,h=t.f`
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
`,T=t.f`
  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
    }
  }
`,A=t.f`
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
`;e.s(["V",0,f,"M",0,m,"J",0,F,"c",0,$,"m",0,l,"_",0,n,"W",0,s,"B",0,a,"a",0,C,"v",0,x,"S",0,k,"Z",0,A,"X",0,i,"D",0,b,"Y",0,d,"g",0,_,"b",0,h,"h",0,p,"o",0,y,"j",0,w,"O",0,g,"d",0,v,"T",0,q,"U",0,T,"i",0,r,"e",0,o,"z",0,I,"A",0,S,"p",0,u,"P",0,c])},911383,e=>{var t=e.i(220303);let i=async function(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=await t.R.fetchQuery(e,{method:"POST",body:i,...r});if("string"!=typeof o?.url||!o.url||"string"!=typeof o.key||!o.key)throw Error("The server did not return a PDF");return o};e.s(["G",0,e=>{let{refused:t=[],unavailable:i=[]}=e;return t.length>0||i.length>0},"g",0,i])},806430,343598,303828,150524,e=>{var t=e.i(391398),i=e.i(356119),r=e.i(121432),o=e.i(605224),n=e.i(477882),s=e.i(917563),a=e.i(440726),l=e.i(652002),c=e.i(67267),d=e.i(738251),u=e.i(813843),f=e.i(115871),m=e.i(926021);let p="Job reference, date and customer reference appear here on work order reports",h="Company name · registered office · company and VAT numbers · contact details",y="+ accreditation logos";e.s(["K",0,h,"o",0,y,"W",0,p],343598);let $={details:{variant:"body2",color:"textSecondary"},logos:{variant:"body2",color:"textSecondary"},text:{variant:"body2"}},_=e=>{let{formatting:i,footerText:r,typography:o=$}=e;return(0,t.jsxs)(u.f,{direction:"row",justifyContent:"space-between",alignItems:"flex-end",gap:1.5,children:[(0,t.jsxs)(d.f,{sx:{flex:1,minWidth:0},children:[(0,m.o)(i)&&(0,t.jsx)(f.f,{...o.details,children:h}),r&&(0,t.jsx)(f.f,{...o.text,noWrap:!0,sx:{...o.text.sx,maxWidth:"60%"},children:r}),(0,m._)(i)&&(0,t.jsx)(f.f,{...o.logos,children:y})]}),(0,m.V)(i)&&(0,t.jsx)(f.f,{...o.details,children:"1"})]})};e.s(["f",0,_],303828);var q=e.i(336276),g=e.i(498681),v=e.i(377198);let b={location:"1 High Street London SW1A 1AA",customer:"Customer name",supplier:"Supplier name",date:"01/01/2026",jobId:"WO-0001"};e.s(["f",0,b],150524);var I=e.i(399627);let x={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"14px 16px",marginBottom:"14px",textAlign:"right"},S={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"10px 16px",marginTop:"14px"},w={details:{sx:{fontSize:"10px",color:"#666666",fontFamily:"Nunito-Regular"}},logos:{sx:{fontSize:"10px",color:"#999999",fontFamily:"Nunito-Regular"}},text:{sx:{fontSize:"11px",color:"#666666"}}},T={border:"none",backgroundColor:"#FFFFFF",highlighted:""},A={pointerEvents:"none"},k={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"650px",height:"600px",padding:"10px",overflowY:"auto",borderRadius:"12px",backgroundColor:"#FFFFFF"},F={position:"sticky",top:0,height:"44px",backgroundColor:"#F5F5F5",borderRadius:"12px",zIndex:1,fontFamily:"Nunito-Regular",padding:"15px",display:"flex",alignItems:"center",justifyContent:"space-between"};e.s(["f",0,e=>{let{selectedForm:d,open:u,onClose:f,formatting:h}=e,{admin:y}=(0,g.f)(),$=y?.media?.find(e=>{let{item:t}=e;return"themeLogo"===t.category}),C=(0,v.f)($?.item.filename)??null,L=(0,I.f)(h?.header?.text,b),j=(0,I.f)(h?.footer?.text,b),E=!h||(0,m.S)(h,b);return(0,t.jsx)(t.Fragment,{children:d&&(0,t.jsx)(o.f,{open:u,onClose:f,style:{zIndex:"9999"},slotProps:{backdrop:{sx:{backgroundColor:"rgba(0, 0, 0, 0.7)"}}},children:(0,t.jsxs)(n.f,{sx:k,children:[(0,t.jsxs)(s.f,{sx:F,marginBottom:1,children:[(0,t.jsx)(i.f,{variant:"h6",sx:{fontFamily:"Nunito-Regular",fontSize:"16px",paddingLeft:"10px"},children:"Form preview"}),(0,t.jsx)(r.f,{color:"secondary",onClick:f,sx:{marginLeft:"10px"},children:(0,t.jsx)(l.default,{sx:{fontSize:20}})})]}),(0,t.jsxs)("div",{style:A,children:[h&&(0,m.d)(h)&&(0,t.jsxs)(s.f,{sx:x,children:[(0,t.jsx)(i.f,{sx:{fontWeight:700,fontSize:"18px",color:"#666666"},children:L.trim()||d?.name||"Form name"}),(0,t.jsx)(i.f,{sx:{fontSize:"11px",color:"#999999",fontFamily:"Nunito-Regular"},children:p})]}),h&&(0,m.Y)(h)&&(0,t.jsx)(c.f,{formatting:h,formName:d?.name??null,logoUrl:C,templateVariables:b}),(0,t.jsx)(q.f,{name:E?d?.name:null,description:d?.description}),(0,t.jsx)(a.f,{scheme:d?.formFields,submissionData:d?.submissionData,blockStyle:T}),h&&(0,m.W)(h)&&(0,t.jsx)(s.f,{sx:S,children:(0,t.jsx)(_,{formatting:h,footerText:j,typography:w})})]})]})})})}],806430)},827010,e=>{var t=e.i(159080);e.i(851123);let i=t.f`
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
`,a=t.f`
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
`,p=t.f`
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
`,h=t.f`
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
`,_=t.f`
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
`,q=t.f`
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
`;e.s(["V",0,r,"i",0,i,"_",0,b,"B",0,n,"v",0,o,"d",0,w,"r",0,s,"O",0,I,"f",0,g,"$",0,a,"C",0,l,"o",0,c,"q",0,d,"g",0,S,"Z",0,u,"Y",0,x,"k",0,f,"j",0,v,"U",0,m,"N",0,$,"T",0,h,"P",0,y,"h",0,T,"J",0,q,"p",0,_,"Q",0,p])},382461,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(514707),o=e.i(691567),n=e.i(668921),s=e.i(231637),a=e.i(901004),l=e.i(539117),c=e.i(471973),d=e.i(813843),u=e.i(115871),f=e.i(738251),m=e.i(800884),p=e.i(799083),h=e.i(544005);let y={text:e=>{let{option:t,multiple:i,index:r}=e;return i&&r>0?`, ${t.label}`:t.label},textWithIcon:e=>{let{option:i}=e;return(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:1,children:[i.icon,(0,t.jsxs)(u.f,{children:[" ",i.label]})]})},chip:e=>{let{chipProps:t,option:r}=e;return(0,i.createElement)(m.f,{...t,key:r.value,label:r.label,icon:r.icon,sx:{color:r.color,bgcolor:r.bgcolor}})}},$={text:e=>{let{option:t}=e;return t.label},textWithIcon:e=>{let{option:i}=e;return(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:1,children:[i.icon,(0,t.jsxs)(u.f,{children:[" ",i.label]})]})},chip:e=>{let{chipProps:t,option:r}=e;return(0,i.createElement)(m.f,{...t,key:r.value,label:r.label,icon:r.icon,sx:{color:r.color,bgcolor:r.bgcolor}})},checkbox:e=>{let{option:i,value:r}=e;return(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(p.f,{color:"secondary",sx:{height:"10px"},checked:r.indexOf(i.value)>-1}),(0,t.jsxs)(u.f,{children:[" ",i.label]})]})}},_={label:"",onChange:()=>{},leftSideLabel:!1,options:[],inputComponent:"text",selectComponent:"text",withoutSelectIcon:!1,formControl:{error:!1,helperText:""},chipProps:{size:"small"},selectProps:{}},q=e=>{let{label:i,value:r,onChange:o,leftSideLabel:n,options:s,inputComponent:d,selectComponent:m,withoutSelectIcon:p,formControl:q,chipProps:b,selectProps:I}=(0,h.f)(e,_),x=e=>s.find(t=>t.value===e);return(0,t.jsxs)(g,{...q,leftSideLabel:n,withoutSelectIcon:p,children:[i&&n&&(0,t.jsx)(u.f,{children:i}),i&&!n&&(0,t.jsx)(v,{shrink:""!==r&&void 0!==r,children:i}),(0,t.jsx)(l.f,{displayEmpty:!0,...I,value:r,onChange:o,inputProps:{shrink:!0},renderValue:()=>{if(Array.isArray(r))return(0,t.jsx)(f.f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map((e,t)=>{let i=x(e);return i?y[d]({chipProps:b,option:i,multiple:!0,index:t}):""})});let e=x(r);return e?(0,t.jsx)(f.f,{children:y[d]({chipProps:b,option:e})}):""},children:s.map(e=>(0,t.jsx)(a.f,{value:e.value,children:$[m]({chipProps:b,option:e,value:r})},e.value))}),q?.helperText&&(0,t.jsx)(c.f,{children:q.helperText})]})};q.propTypes={label:o.default.string,value:o.default.oneOfType([o.default.string,o.default.array]),onChange:o.default.func,leftSideLabel:o.default.bool,options:o.default.arrayOf(o.default.shape({label:o.default.string,value:o.default.string.isRequired,color:o.default.string,bgcolor:o.default.string,icon:o.default.node}).isRequired),inputComponent:o.default.oneOf(["text","textWithIcon","chip"]),selectComponent:o.default.oneOf(["text","textWithIcon","chip","checkbox"]),withoutSelectIcon:o.default.bool,formControl:o.default.object,chipProps:o.default.object,selectProps:o.default.object};let g=(0,r.f)(n.f)(e=>{let{theme:t,leftSideLabel:i,withoutSelectIcon:r}=e;return{"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start",...i&&{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}},"& .MuiSelect-icon":{...r&&{display:"none"}}}}),v=(0,r.f)(s.f)(e=>{let{theme:t}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main}}});e.s(["f",0,q])},856688,e=>{var t=e.i(432171),i=e.i(170582),r=e.i(511667),o=e.i(886143),n=e.i(191788);e.s(["w",0,e=>(e?.Media_Entity.data??[]).flatMap(e=>{let{Medium:{data:t}}=e;return t.filename&&t.type?[{filename:t.filename,type:t.type,caption:t.caption,category:t.category,extension:t.extension,meta:t.meta}]:[]}),"t",0,function(e,s,a,l){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[d,u]=(0,n.useState)(!1),{data:{items:f}={items:[]},loading:m}=(0,t.t)(o.A,{variables:{entity:e,entityId:l,category:c,adminId:s},skip:!l}),[p,{isLoading:h}]=(0,r.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),y=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{u(!0);let r=[];for(let o of t)if(!o.mediaId){let t,n=await $(o),l=null;if("image"===o.type){let e=n.key,i=n.data.find(e=>"large"===e.name);t=i?i.relativePath:e,l={original:{relativePath:e},thumbnails:n.data||null}}else t=n.key;r.push({entity:e,Medium:{data:{adminId:s,caption:o?.caption??null,extension:o?.media?.name?.split(".").pop(),userId:a,category:i,filename:t,type:o.type,meta:l??void 0}}})}return{Media_Entity:{data:r}}}finally{u(!1)}},$=async e=>{let t,r=new window.FormData;switch(e.media&&r.append("file",e.media,e.media.name),e.type){case"image":t=i.G;break;case"document":case"audio":t=i.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let o=window.localStorage.getItem("bearerToken"),n={};o&&(n.Authorization=`Bearer ${o}`);let s=await window.fetch(t,{method:"POST",body:r,headers:n}),a=await s.json();if(!s.ok)throw Error(a?.message||`Upload failed with status ${s.status}`);return a};return{uploadMediaToS3:$,createMediaInput:y,deleteMediaByEntity:e=>p({body:{mediaId:e}}),loadingAddMedia:d,loadingDeleteMedia:h,preloadedMediaLoading:m,preloadedMedia:f?.length?f:[]}}])},816037,e=>{e.s(["f",0,(e,t)=>{let i={};for(let r of t)r.stateName&&("fileUpload"===r.type&&(i[r.stateName]=e),"repeatableBlock"===r.type&&t.some(e=>void 0!==e.id&&"fileUpload"===e.type&&!!e.stateName&&r.memberIds?.includes(String(e.id)))&&(i[r.stateName]=e));return{entityId:e,entityIdByStateName:i}}])},652002,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded")},863838,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description")},393172,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},474829,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutline")},896490,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")},238802,e=>{var t=e.i(515523);e.s(["f",()=>t.f])},519088,e=>{var t=e.i(191788),i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},r=function(){return(r=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o="Pixel",n="Percent",s={unit:n,value:.8};function a(e){return"number"==typeof e?{unit:n,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:o,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:n,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),s):(console.warn("scrollThreshold should be string or number"),s)}var l=function(e){function n(){this.constructor=s}function s(t){var i=e.call(this,t)||this;return i.lastScrollTop=0,i.actionTriggered=!1,i.startY=0,i.currentY=0,i.dragging=!1,i.maxPullDownDistance=0,i.getScrollableTarget=function(){return i.props.scrollableTarget instanceof HTMLElement?i.props.scrollableTarget:"string"==typeof i.props.scrollableTarget?document.getElementById(i.props.scrollableTarget):(null===i.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},i.onStart=function(e){!i.lastScrollTop&&(i.dragging=!0,e instanceof MouseEvent?i.startY=e.pageY:e instanceof TouchEvent&&(i.startY=e.touches[0].pageY),i.currentY=i.startY,i._infScroll&&(i._infScroll.style.willChange="transform",i._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},i.onMove=function(e){!i.dragging||(e instanceof MouseEvent?i.currentY=e.pageY:e instanceof TouchEvent&&(i.currentY=e.touches[0].pageY),i.currentY<i.startY||(i.currentY-i.startY>=Number(i.props.pullDownToRefreshThreshold)&&i.setState({pullToRefreshThresholdBreached:!0}),!(i.currentY-i.startY>1.5*i.maxPullDownDistance)&&i._infScroll&&(i._infScroll.style.overflow="visible",i._infScroll.style.transform="translate3d(0px, "+(i.currentY-i.startY)+"px, 0px)")))},i.onEnd=function(){i.startY=0,i.currentY=0,i.dragging=!1,i.state.pullToRefreshThresholdBreached&&(i.props.refreshFunction&&i.props.refreshFunction(),i.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){i._infScroll&&(i._infScroll.style.overflow="auto",i._infScroll.style.transform="none",i._infScroll.style.willChange="unset")})},i.onScrollListener=function(e){"function"==typeof i.props.onScroll&&setTimeout(function(){return i.props.onScroll&&i.props.onScroll(e)},0);var t=i.props.height||i._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;i.actionTriggered||((i.props.inverse?i.isElementAtTop(t,i.props.scrollThreshold):i.isElementAtBottom(t,i.props.scrollThreshold))&&i.props.hasMore&&(i.actionTriggered=!0,i.setState({showLoader:!0}),i.props.next&&i.props.next()),i.lastScrollTop=t.scrollTop)},i.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},i.throttledOnScrollListener=(function(e,t,i){var r,o=!1,n=0;function s(){r&&clearTimeout(r)}function a(){var a=this,l=Date.now()-n,c=arguments;function d(){n=Date.now(),t.apply(a,c)}o||(i&&!r&&d(),s(),void 0===i&&l>150?d():!0!==e&&(r=setTimeout(i?function(){r=void 0}:d,void 0===i?150-l:150)))}return"boolean"!=typeof e&&(i=t,t=e,e=void 0),a.cancel=function(){s(),o=!0},a})(i.onScrollListener).bind(i),i.onStart=i.onStart.bind(i),i.onMove=i.onMove.bind(i),i.onEnd=i.onEnd.bind(i),i}return i(s,e),s.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n),s.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},s.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},s.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},s.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?r(r({},t),{prevDataLength:e.dataLength}):null},s.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=a(t);return r.unit===o?e.scrollTop<=r.value+i-e.scrollHeight+1:e.scrollTop<=r.value/100+i-e.scrollHeight+1},s.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=a(t);return r.unit===o?e.scrollTop+i>=e.scrollHeight-r.value:e.scrollTop+i>=r.value/100*e.scrollHeight},s.prototype.render=function(){var e=this,i=r({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return t.default.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},t.default.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:i},this.props.pullDownToRefresh&&t.default.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},t.default.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},s}(t.Component);e.s(["f",0,l])}],648346,(e,t,i)=>{t.exports=function(e,t){for(var i=-1,r=null==e?0:e.length,o=Array(r);++i<r;)o[i]=t(e[i],i,e);return o}},925055,(e,t,i)=>{var r=e.r(889239),o=e.r(648346),n=e.r(448684),s=e.r(849057),a=r?r.prototype:void 0,l=a?a.toString:void 0;t.exports=function e(t){if("string"==typeof t)return t;if(n(t))return o(t,e)+"";if(s(t))return l?l.call(t):"";var i=t+"";return"0"==i&&1/t==-1/0?"-0":i}},478969,(e,t,i)=>{var r=e.r(448684),o=e.r(970923),n=e.r(542774),s=e.r(782346);t.exports=function(e,t){return r(e)?e:o(e,t)?[e]:n(s(e))}},970923,(e,t,i)=>{var r=e.r(448684),o=e.r(849057),n=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(e,t){if(r(e))return!1;var i=typeof e;return!!("number"==i||"symbol"==i||"boolean"==i||null==e||o(e))||s.test(e)||!n.test(e)||null!=t&&e in Object(t)}},759762,(e,t,i)=>{var r=e.r(476116);t.exports=function(e){var t=r(e,function(e){return 500===i.size&&i.clear(),e}),i=t.cache;return t}},542774,(e,t,i)=>{var r=e.r(759762),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n=/\\(\\)?/g;t.exports=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,function(e,i,r,o){t.push(r?o.replace(n,"$1"):i||e)}),t})},598921,(e,t,i)=>{var r=e.r(849057);t.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},849057,(e,t,i)=>{var r=e.r(912904),o=e.r(432836);t.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},476116,(e,t,i)=>{var r=e.r(933571);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var i=function(){var r=arguments,o=t?t.apply(this,r):r[0],n=i.cache;if(n.has(o))return n.get(o);var s=e.apply(this,r);return i.cache=n.set(o,s)||n,s};return i.cache=new(o.Cache||r),i}o.Cache=r,t.exports=o},782346,(e,t,i)=>{var r=e.r(925055);t.exports=function(e){return null==e?"":r(e)}}]);