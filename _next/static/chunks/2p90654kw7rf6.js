(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[219281,e=>{var t=e.i(948574);e.s(["G",0,(e,n)=>"customer"!==e&&"supplier"!==e||n([...t.x,...t.H,...t.z,...t.Q]),"u",0,e=>{let{accountType:t,role:n,hasRole:r}=e;return r(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${n}`):r(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${n}`):!!r(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${n}`)},"y",0,(e,t,n)=>{let r={};return e.id?(r.id=parseInt(e.id),r.changes={nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,meta:{...t},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null,status:e.status},e.accountUserId?(r.updateAccountUser=!0,r.accountUserId=parseInt(e.accountUserId),r.accountUserChanges={role:e.role?.value,position:e.position,isContact:"yes"===e.isContact,status:e.status},r.accountUserModules=e.modules??{}):(r.accountUserId=0,r.updateAccountUser=!1)):(r.role=e.role?.value||"user",r.position=e.position,r.isContact="yes"===e.isContact,r.status=e.status,r.accountId=e.accountId,r.modules=e.modules,n?r.userId=n.id:r.User={data:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,status:e.status,meta:{sendDefaultWelcomeEmail:!0,notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null}}),r},"b",0,e=>({accountUserId:e.accountUserId,objects:e.location.map(t=>({accountUserId:e.accountUserId,accountLocationId:t}))}),"c",0,e=>({accountUserId:e.accountUserId,objects:(e.location??[]).map(t=>({accountUserId:e.accountUserId,locationId:t}))})])},39059,e=>{var t=e.i(159080);let n=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,r=t.f`
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
`,o=t.f`
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
`,s=t.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,i=t.f`
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
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,c=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,d=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,u=t.f`
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
`,m=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,p=t.f`
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
`,f=t.f`
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
`,h=t.f`
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
`;e.s(["e",0,s,"u",0,p,"q",0,l,"_",0,d,"x",0,a,"k",0,o,"f",0,c,"U",0,f,"I",0,n,"s",0,h,"l",0,u,"V",0,r,"J",0,m,"W",0,i])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),n=e.i(191788),r=e.i(432171),o=e.i(422411),a=e.i(424894),s=e.i(738251),i=e.i(799083),l=e.i(76381),c=e.i(813843),d=e.i(652148),u=e.i(115871),m=e.i(56271),p=e.i(577372),f=e.i(403901),h=e.i(588964),x=e.i(546788),g=e.i(594301),b=e.i(494575),j=e.i(498813),y=e.i(39059),_=e.i(219281),v=e.i(824451),I=e.i(292802),$=e.i(74633),C=e.i(889231),w=e.i(164056),A=e.i(658524),U=e.i(159974),q=e.i(589200),k=e.i(524057),L=e.i(207646),S=e.i(948574);let T=()=>{let{hasRole:e}=(0,g.f)(),{control:n,formState:{errors:r}}=(0,o.M)();return(0,t.jsxs)(c.f,{width:"100%",gap:1,children:[(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"nameFirst",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"First name",value:n,onChange:o,error:!!r?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"nameLast",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"Last name",value:n,onChange:o,error:!!r?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"email",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:n,onChange:o,error:!!r?.email,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"phone",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(w.f,{variant:"standard",color:"secondary",label:"Mobile",value:n,onChange:o,error:!!r?.phone,fullWidth:!0})}})]}),e([...S.x,...S.H,...S.z,...S.Q])&&(0,t.jsx)(o.e,{name:"status",control:n,defaultValue:"active",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsxs)(q.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(k.f,{children:"Status"}),(0,t.jsx)(A.f,{value:n,onChange:o,error:!!r?.status,children:L.f.map(e=>(0,t.jsx)(U.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(o.e,{name:"userId",control:n,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var F=e.i(122965),N=e.i(159080);let E=N.f`
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
`,M=N.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,P=N.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,z=["customer_user","admin_user"],R=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],O={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:b.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:b,accountId:w,accountType:A,submit:U}=e,{hasRole:q,user:k}=(0,g.f)(),{reference:L,pagination:S}=(0,F.f)(),N=q(["admin_owner","admin_manager"]),B=!(q("admin_user")&&"admin"===A),[G,W]=(0,n.useState)(!0),[H,D]=(0,n.useState)(""),[V,Q]=(0,n.useState)(!1),[J,K]=(0,n.useState)(!1),[Y,X]=(0,n.useState)(""),[Z,ee]=(0,n.useState)(null),[et,en]=(0,n.useState)(!1),er=(0,n.useRef)(!1),eo=[...I.f];switch(A){case"supplier":eo.push({label:"Operative",value:"contractor"});break;case"admin":eo.push({label:"Helpdesk",value:"helpdesk"})}let ea=!w||"customer"!==A,{data:es,loading:ei}=(0,r.t)(j.a,{skip:ea,variables:{accountId:w,excludeUserId:b??-1}}),el="customer"===A&&!!w&&!ea&&!ei&&!((es?.accountUsers?.length??0)>0),ec="customer"===A&&!!w,ed=(0,o.G)({defaultValues:{id:b,accountId:w,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,a.yupResolver)(x.f),context:{hasRole:(0,_.G)(A,q)&&!!w,hasLocation:!z.includes(k.role)&&z.includes(H),adminImplicitLocations:"admin"===A&&"admin_user"===H&&!b&&!et,hasOneOwner:G,isCustomerAccount:ec,mustKeepContactUser:el,contactRulesStillLoading:ec&&ei}}),{control:eu,errors:em,handleSubmit:ep,watch:ef,reset:eh,setValue:ex}=ed,eg=ef("role"),eb=ef("location");(0,n.useEffect)(()=>{eg?.value&&D(`${A}_${eg?.value}`)},[A,eg?.value]);let{data:{user:ej}={user:null},loading:ey}=(0,r.t)(j.E,{skip:!b,variables:{userId:b,accountId:w,includeAccount:!!w},onCompleted:e=>{let{user:t}=e;if(!t)return;let n=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(w)}),r={id:t.id,accountId:n?.account.id||w||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...n?{accountUserId:n.id,accountId:n.account.id,role:eo?.find?.(e=>e?.value===n?.role),position:n.position||null,isContact:!0===n.isContact?"yes":"no",status:n.status,location:"admin"===A&&"user"===n.role?void 0:n.userLocations.map(e=>e.accountLocationId),modules:n.modules}:{}};Q(!0),eh(r),D(`${A}_${r.role?.value||""}`),ee(r.accountUserId||null)}});(0,r.t)(j.R,{skip:!w,variables:{accountId:w,userId:b},onCompleted:e=>{let{accountUsers:t}=e;W(!(t.length>0))}});let e_="admin_user"===H,ev=null!=p.f[H]&&b!==k.id&&B,{data:eI}=(0,r.t)(M,{skip:!e_||null==w,variables:{accountId:w}}),e$=(0,n.useMemo)(()=>eI?.location?.map(e=>e.id)??[],[eI]),{data:{restrictedLocations:eC=[]}={restrictedLocations:[]},loading:ew}=(0,r.t)(P,{skip:!e_||!Z,variables:{accountUserId:Z}});(0,n.useEffect)(()=>{e_?!Z||ew||J||(ex("location",eC.map(e=>e.locationId)),K(!0)):K(!1)},[Z,J,e_,eC,ew,ex]),(0,n.useEffect)(()=>{!er.current||e_||b||(ex("location",void 0),en(!1)),er.current=e_},[e_,ex,b]);let{data:{location:eA,meta:eU}={location:[],meta:{aggregate:{totalCount:0}}},loading:eq}=(0,r.t)(y.u,{skip:e_||!w,variables:{accountId:w,...S}}),{data:{location:ek,meta:eL}={location:[],meta:{aggregate:{totalCount:0}}},loading:eS}=(0,r.t)(E,{skip:!e_||!w,variables:{accountId:w,q:""!==Y?`%${Y}%`:null,...S}}),eT=e_?ek:eA,eF=e_?eL:eU,eN=e_?eS:eq,eE="admin"===A&&e_&&!b&&!et,eM=(0,n.useCallback)(e=>t=>{e_&&en(!0),t.target.checked?ex("location",[...new Set([...eb??[],e])]):ex("location",(eb??[]).filter(t=>t!==e))},[e_,eb,ex]),eP=(0,n.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!e_||0===e$.length)return null;let e=Array.isArray(eb)?eb:[],n=e$.length>0&&e$.every(t=>e.includes(t)),r=e.length>0;return eE?(0,t.jsx)(i.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(en(!0),ex("location",[...e$]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(i.f,{color:"secondary",checked:n,indeterminate:r&&!n,onChange:e=>{en(!0),e.target.checked?ex("location",[...e$]):ex("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:n}=e;return n.id?(0,t.jsx)(i.f,{color:"secondary",checked:!eE&&!!eb?.includes(n.id),onChange:eM(n.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:n}=e;return n.address?(0,t.jsxs)(c.f,{children:[(0,t.jsx)(u.f,{children:n.address.addressLine1}),(0,t.jsx)(u.f,{children:n.address.postCode})]}):(0,t.jsx)(u.f,{children:"Please add"})}},...e_?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:n}=e;return n.customerId&&n.customer?(0,t.jsx)(C.f,{color:"secondary",href:`/dashboard/customers/view?id=${n.customerId}`,onClick:e=>e.stopPropagation(),children:n.customer}):null}}]:[]],[e$,eE,e_,eb,eM,en,ex]),ez=(0,n.useMemo)(()=>(eT??[]).map(e=>({id:e_?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[e_,eT]);if(ey)return(0,t.jsx)(c.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eR={id:(0,_.G)(A,q)};return(0,t.jsx)(o.p,{...ed,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:ep(e=>{let t="admin"===A&&e_&&!b&&!et&&e$.length>0?{...e,location:[...e$]}:e,n=ev?(0,f.f)(e.modules,p.f[H]?.map(e=>e.name)??[]):void 0;U(n?{...t,modules:n}:t,ej?.meta)}),children:[(0,t.jsx)(T,{}),w&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{paddingTop:1,children:[(0,_.G)(A,q)&&(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"role",control:eu,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(v.f,{value:n,onChange:(e,t)=>r(t),label:"Role",options:eo,variant:"standard",color:"secondary",error:!!em?.role,helperText:em?.role?.message||em?.role?.value?.message})}},V?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"position",control:eu,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:n||"",onChange:e=>r(e.target.value||null),InputLabelProps:{shrink:!!n},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,_.u)({accountType:A,role:eg?.value,hasRole:q})&&ej?.id!==k.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"invoiceThreshold",control:eu,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:n,onChange:r,InputLabelProps:{shrink:!!n},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"quoteThreshold",control:eu,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:n,onChange:r,InputLabelProps:{shrink:!!n},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(c.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(u.f,{sx:O.title,children:"Contact user"}),(0,t.jsx)(o.e,{name:"isContact",control:eu,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(h.f,{formControlProps:{sx:{m:0}},stackProps:em.isContact?O.radioGroupError:O.radioGroup,error:!!em.isContact,value:n,onChange:r,options:R,labelLeft:!0,helperText:em.isContact?.message})}},V?"contact-edit-mode":"contact-create-mode")]}),ev&&(0,t.jsx)(m.f,{role:H})]}),z.includes(H)&&b!==k.id&&B&&(0,t.jsxs)(s.f,{sx:em.location?O.locationError:{},children:[(0,t.jsx)(u.f,{sx:O.title,children:"Locations"}),e_&&N&&(0,t.jsx)(d.f,{fullWidth:!0,value:Y,onChange:e=>{X(e.target.value),L.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!Y},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)($.s,{...L,columnVisibilityModel:eR,totalCount:eF.aggregate.totalCount,columns:eP,loading:eN,rows:ez,autoHeight:!0}),(0,t.jsx)(o.e,{control:eu,name:"location",render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:r})}})]})]}),b&&(0,t.jsx)(o.e,{control:eu,name:"id",render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:r})}}),w&&(0,t.jsx)(o.e,{control:eu,name:"accountId",render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:r})}}),Z&&(0,t.jsx)(o.e,{control:eu,name:"accountUserId",render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:r})}})]})})}],697871)},56271,577372,403901,546788,498813,e=>{var t=e.i(391398),n=e.i(813843),r=e.i(115871);let o=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],a=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],s={customer_user:o,admin_user:o,supplier_owner:a,supplier_manager:a,supplier_user:a,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...a]};e.s(["f",0,s],577372);var i=e.i(191788),l=e.i(422411),c=e.i(152078),d=e.i(799083),u=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:o}=e,{control:a,watch:p,setValue:f}=(0,l.M)(),h=!!p("modules.jobHistoryAll"),x=(0,i.useMemo)(()=>s[o]||[],[o]);return(0,i.useEffect)(()=>{h&&f("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[h,f]),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(r.f,{sx:m,children:"Permissions"}),(0,t.jsx)(n.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:x.map(e=>{let n="jobHistorySupplier"===e.name&&h;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:a,render:r=>{let{value:o,onChange:a}=r;return(0,t.jsx)(c.f,{disabled:n,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(d.f,{color:"secondary",checked:!!o,disabled:n,onChange:e=>a(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let p=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let n=e??{};return Object.fromEntries(p.map(e=>[e,t.includes(e)&&!0===n[e]]))}],403901);var f=e.i(426778);let h="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",x=(0,f.t)().shape({id:(0,f.H)().nullable().optional(),accountId:(0,f.H)().nullable().optional(),nameFirst:(0,f.x)().required(),nameLast:(0,f.x)().required(),email:(0,f.x)().required().email(),phone:(0,f.x)().required(),status:(0,f.x)().when("$hasRole",(e,t)=>{let[n]=e;return n?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,f.t)().nullable().shape({label:(0,f.x)(),value:(0,f.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[n,r,o]=e;return n?r?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):o&&"number"==typeof o&&o>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[n,r]=e;return n&&r&&"number"==typeof r&&r>0?t.required("Role is required"):t.nullable()}),userId:(0,f.H)().nullable().optional(),accountUserId:(0,f.H)().nullable().optional(),position:(0,f.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,f.x)().nullable(),otherwise:()=>(0,f.x)().nullable()}),isContact:(0,f.x)().when("accountId",{is:e=>!!e,then:()=>(0,f.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[n,r,o]=e;return o?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):n&&r?t.oneOf(["yes"],h).required(h):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,f.x)().nullable().optional()}),location:(0,f.k)().of((0,f.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[n,r]=e;return!n||r?t.nullable().optional():t.required()})});e.s(["f",0,x],546788);var g=e.i(159080);let b=g.f`
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
`,j=g.f`
  query FindOwnersByAccount($accountId: Int, $userId: Int) {
    accountUsers: Account_User(
      where: { role: { _eq: "owner" }, accountId: { _eq: $accountId }, userId: { _neq: $userId } }
    ) {
      id
      role
    }
  }
`,y=g.f`
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
`;e.s(["a",0,y,"R",0,j,"E",0,b],498813)},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var n=e.i(231637);e.s(["f",()=>n.f],524057)},76753,e=>{var t=e.i(464107);e.s(["f",()=>t.f])},863618,e=>{var t=e.i(391398),n=e.i(293965),r=e.i(203828),o=e.i(432171),a=e.i(39059),s=e.i(436703),i=e.i(159080);let l=i.f`
  query GetLogs($id: Int!, $limit: Int!, $offset: Int!) {
    logs: audit_Session(
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
      where: { userId: { _eq: $id } }
    ) {
      id
      app
      appVersion
      createdAt
      userAgent
    }
    meta: audit_Session_aggregate(where: { userId: { _eq: $id } }) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var c=e.i(691567),d=e.i(813843),u=e.i(115871);let m=e=>{let{log:n}=e;return(0,t.jsx)("form",{id:"offCanvasForm",children:(0,t.jsx)(d.f,{spacing:1,children:[["App",n.app],["Date",n.createdAt],["App version",n.appVersion],["User agent",n.userAgent]].map(e=>{let[n,r]=e;return(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{variant:"subtitle2",children:n}),(0,t.jsx)(u.f,{children:r})]},n)})})})};m.propTypes={log:c.object};var p=e.i(411331),f=e.i(65295),h=e.i(871931),x=e.i(302966),g=e.i(747112),b=e.i(280445),j=e.i(760981),y=e.i(191788),_=e.i(74633),v=e.i(122965);let I=e=>{let{userId:n}=e,r=(0,p.f)(),{reference:a,pagination:s}=(0,v.f)({initialSort:[{item:"createdAt",order:"desc"}],initialPageSize:10}),{data:{logs:i,meta:c}={logs:[],meta:{aggregate:{totalCount:0}}},loading:d}=(0,o.t)(l,{skip:!n,variables:{id:n,...s}}),h=(0,y.useMemo)(()=>i.map(e=>({id:e.id,app:e.app,createdAt:(0,f.f)(e.createdAt,!0),userAgent:e.userAgent,appVersion:e.appVersion})),[i]),b=(0,y.useMemo)(()=>[{flex:1,sortable:!1,field:"app",headerName:"App"},{flex:1,sortable:!1,field:"createdAt",headerName:"Date"},{flex:1,sortable:!1,field:"appVersion",headerName:"App version"}],[]);return(0,t.jsxs)($,{defaultExpanded:!0,children:[(0,t.jsx)(x.f,{expandIcon:(0,t.jsx)(g.f,{}),children:(0,t.jsx)(u.f,{typography:"h6",children:"User logs"})}),(0,t.jsx)(j.f,{sx:{pt:0},children:(0,t.jsx)(_.s,{...a,stateKey:"users-log",columns:b,loading:d,totalCount:c?.aggregate?.totalCount||0,onRowClick:e=>{var n;return n=e.row,void r.show({content:(0,t.jsx)(m,{log:n}),submit:!1,title:"Log Details"})},rows:h})})]})},$=(0,b.f)(h.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;var C=e.i(443919),w=e.i(877341),A=e.i(776204);let U=i.f`
  mutation addAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,q=i.f`
  mutation UpdateAccountUser($id: Int!, $changes: Account_User_set_input) {
    update_Account_User_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;var k=e.i(21557),L=e.i(422411),S=e.i(424894),T=e.i(292802),F=e.i(426778);let N=(0,F.t)().shape({id:(0,F.H)().nullable().optional(),accountSelected:(0,F.t)({account:(0,F.t)({type:(0,F.x)().oneOf(["superadmin","admin","customer","supplier","tenant"])}).nullable().optional(),type:(0,F.x)().oneOf(["superadmin","admin","customer","supplier","tenant"]),label:(0,F.x)(),value:(0,F.H)()}).required(),position:(0,F.x)().required(),role:(0,F.t)({label:(0,F.x)(),value:(0,F.x)()}).required(),isContact:(0,F.x)().oneOf(["yes","no"]).required(),status:(0,F.x)().oneOf(["active","inactive"]).required()});var E=e.i(851123),M=e.i(824451),P=e.i(652148),z=e.i(588964),R=e.i(122989),O=e.i(207646);let B=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],G=e=>{let{defaultValues:n,onSuccess:r}=e,o=(0,k.f)(),{control:a,errors:s,handleSubmit:i,watch:l}=(0,L.G)({defaultValues:n,resolver:(0,S.yupResolver)(N)}),[c,m]=(0,y.useState)(""),[p,{data:{items:f}={items:[]},loading:h}]=(0,w.f)(E.V,{variables:{where:{status:{_eq:"active"},...c&&{name:{_ilike:`%${c}%`}}}}}),[x]=(0,A.f)(U,{onCompleted:e=>{let{id:t}=e.insert_Account_User.returning[0];o.show({content:"Account user added successfully",severity:"success"}),r&&r(t)},onError:()=>{o.show({content:"Error while adding account user",severity:"error"})}}),[g]=(0,A.f)(q,{onCompleted:e=>{let{id:t}=e.update_Account_User_by_pk;o.show({content:"Account user updated successfully",severity:"success"}),r&&r(t)},onError:()=>{o.show({content:"Error while updating account user",severity:"error"})}}),b=l("accountSelected"),j=async e=>{let{accountSelected:t,role:r,...o}=e,a={...o,role:r.value,accountId:t.value,isContact:"yes"===o.isContact};n.id?await g({variables:{id:n.id,changes:a}}):await x({variables:{objects:[a]}})},_="supplier"===(b?.type||b?.account?.type)?[...T.f,{text:"Operative",value:"contractor"}]:T.f;return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:i(j),children:[(0,t.jsx)(d.f,{marginBottom:1,children:(0,t.jsx)(L.e,{name:"accountSelected",control:a,defaultValue:null,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(M.f,{options:f,loading:h,onOpen:()=>p(),onSearchChange:m,variant:"standard",color:"secondary",label:"Account",value:n||"",onChange:(e,t)=>r(t),error:!!s?.accountSelected})}})}),!!b&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.f,{marginBottom:1,children:(0,t.jsx)(L.e,{name:"role",control:a,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(M.f,{value:n,onChange:(e,t)=>r(t),label:"Role",options:_,variant:"standard",color:"secondary",error:!!s?.role,helperText:s?.role?.value?.message})}})}),(0,t.jsx)(d.f,{marginBottom:1,children:(0,t.jsx)(L.e,{name:"position",control:a,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(P.f,{fullWidth:!0,value:n,onChange:r,InputLabelProps:{shrink:!!n},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,t.jsxs)(d.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(u.f,{sx:W.title,children:"Contact user"}),(0,t.jsx)(L.e,{name:"isContact",control:a,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(z.f,{formControlProps:{sx:{m:0}},stackProps:{direction:"row",spacing:0,m:0},value:n,onChange:r,options:B,labelLeft:!0})}})]}),(0,t.jsx)(d.f,{marginBottom:1,paddingTop:1,children:(0,t.jsx)(L.e,{name:"status",control:a,render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)(R.f,{value:n||"",onChange:r,options:O.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})}),n.id?(0,t.jsx)(L.e,{control:a,name:"id",render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:r})}}):(0,t.jsx)(L.e,{control:a,name:"userId",render:e=>{let{value:n,onChange:r}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:r})}})]})]})},W={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"}};var H=e.i(594301),D=e.i(76753),V=e.i(755548),Q=e.i(889231),J=e.i(497844);let K=e=>{let{refetch:n,user:r}=e,{hasRole:o}=(0,H.f)(),a=(0,p.f)(),s=()=>{n(),a.close()},i=(e,n)=>{e.stopPropagation();let o=n?.id?{...n,isContact:n?.isContact==="Yes"?"yes":"no",role:{label:n?.role,value:n?.role?.toLowerCase?.()||""},status:n?.status?.toLowerCase?.()}:{isContact:"no",status:"active",userId:r.id};a.show({content:(0,t.jsx)(G,{defaultValues:o,onSuccess:s}),title:n?.id?"Edit":"Assign account"})},l=[{field:"name",headerName:"Account",sortable:!1,flex:1,renderCell:e=>{let{row:n}=e;return n.url?(0,t.jsx)(Q.f,{href:`${n.url}?id=${n.accountId}`,color:"secondary",children:n.name}):(0,t.jsx)(u.f,{children:n.name})}},{field:"type",headerName:"Type",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(u.f,{children:n.type})}},{field:"role",headerName:"Role",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(u.f,{children:n.role})}},{field:"position",headerName:"Position",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(u.f,{children:n.position})}},{field:"isContact",headerName:"Contact",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(u.f,{children:n.isContact})}},{field:"status",headerName:"Status",sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(u.f,{children:n.status})}},...o("admin")?[{field:"actions",headerName:"Actions",renderCell:e=>{let{row:n}=e;return(0,t.jsx)(J.f,{actions:[{icon:"edit",tooltip:"Edit",onClick:e=>i(e,n)}]})}}]:[]],c=(0,y.useMemo)(()=>r.accounts.filter(e=>null!==e.account).map(e=>({id:e.id,name:e.account.name,type:(0,D.f)(e.account.type),role:(0,D.f)(e.role||""),position:e.position||"N/A",isContact:e.isContact?"Yes":"No",status:e.status?.toLowerCase()==="active"?"Active":"Inactive",accountId:e.account.id,actions:"",url:"tenant"===e.account.type.toLowerCase()?"":`/dashboard/${e.account.type.toLowerCase()}s/view`,accountSelected:{label:e.account.name,type:e.account.type,value:e.account.id}})),[r]);return(0,t.jsxs)(Y,{defaultExpanded:!0,children:[(0,t.jsx)(x.f,{expandIcon:(0,t.jsx)(g.f,{}),children:(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",children:[(0,t.jsx)(u.f,{typography:"h6",children:"Accounts"}),o("admin")&&(0,t.jsx)(V.f,{sx:{mr:2},variant:"contained",color:"secondary",onClick:i,size:"small",children:"Assign account"})]})}),(0,t.jsx)(j.f,{sx:{pt:0},children:(0,t.jsx)(_.s,{columns:l,rows:c,totalCount:c.length,autoHeight:!0})})]})},Y=(0,b.f)(h.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;var X=e.i(697871);let Z=[],ee=e=>{let{user:n,refetch:r}=e,o=(0,p.f)(),s=(0,k.f)(),{hasRole:i}=(0,H.f)(),l=i(["superadmin","admin"]),c=(0,y.useMemo)(()=>(n?.accounts??Z).filter(e=>null!==e.account),[n?.accounts]),[m]=(0,A.f)(a.V,{onCompleted:()=>{s.show({content:"User updated successfully",severity:"success"}),o.close(),r()},onError:e=>{let t=e?.graphQLErrors?.[0]?.extensions?.code.includes("constraint-violation")?"Error: a user with this e-mail address already exists":"Error while updating user";s.show({content:t,severity:"error"})}}),h=e=>{let{id:t,userId:n,role:r,...o}=e;m({variables:{accountUserId:0,changes:o,id:t,updateAccountUser:!1}})};return(0,t.jsxs)(et,{defaultExpanded:!0,children:[(0,t.jsx)(x.f,{expandIcon:(0,t.jsx)(g.f,{}),children:(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",children:[(0,t.jsx)(u.f,{typography:"h6",children:"Details"}),(0,t.jsx)(V.f,{sx:{mr:2},variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),o.show({content:(0,t.jsx)(X.f,{accountType:n.accounts[0]?.account?.type||"",userId:n?.id??null,submit:h}),title:"Edit user"})},size:"small",children:"Edit"})]})}),(0,t.jsx)(j.f,{sx:{pt:0},children:(0,t.jsxs)(d.f,{spacing:2,sx:{width:"100%"},children:[n?.fullName&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Name"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:n?.fullName})]}),n?.email&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Email"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:n?.email})]}),(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Position"}),c.length>1?c.map(e=>(0,t.jsxs)(u.f,{fontSize:"0.875rem",children:[e.account.name,": ",e.position||"N/A"]},e.id)):(0,t.jsx)(u.f,{fontSize:"0.875rem",children:c[0]?.position||"N/A"})]}),l&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Phone"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:n?.phone})]}),(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Status"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:(0,D.f)(n?.status||"")})]}),(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Date added"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:(0,f.f)(n?.createdAt)})]})]})})]})},et=(0,b.f)(h.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`,en=()=>(0,t.jsxs)(er,{defaultExpanded:!0,children:[(0,t.jsx)(x.f,{expandIcon:(0,t.jsx)(g.f,{}),children:(0,t.jsx)(d.f,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",children:(0,t.jsx)(u.f,{typography:"h6",children:"Integrations"})})}),(0,t.jsxs)(j.f,{sx:{pt:0},children:[(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:2,sx:{mb:2},children:[(0,t.jsx)(d.f,{sx:{minWidth:"90px"},children:(0,t.jsx)("img",{alt:"Microsoft Outlook",src:"/static/logo/Microsoft_Outlook-Logo.svg",width:"50px",style:{marginLeft:"15px"}})}),(0,t.jsxs)(d.f,{flex:1,children:[(0,t.jsx)(u.f,{variant:"body2",children:"Microsoft Outlook"}),(0,t.jsx)(u.f,{variant:"subtitle2",children:"Add asset bookings to your calendar"})]}),(0,t.jsx)(d.f,{mr:1,children:(0,t.jsx)(V.f,{type:"button",variant:"contained",color:"secondary",size:"small",children:"Sign in"})})]}),(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:2,children:[(0,t.jsx)(d.f,{sx:{minWidth:"90px"},children:(0,t.jsx)("img",{alt:"Google Calendar",src:"/static/logo/Google_Calendar-Logo.svg",width:"90px"})}),(0,t.jsxs)(d.f,{flex:1,children:[(0,t.jsx)(u.f,{variant:"body2",children:"Google Calendar"}),(0,t.jsx)(u.f,{variant:"subtitle2",children:"Add asset bookings to your calendar"})]}),(0,t.jsx)(d.f,{mr:1,children:(0,t.jsx)(V.f,{type:"button",variant:"contained",color:"secondary",size:"small",children:"Sign in"})})]})]})]}),er=(0,b.f)(h.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`,eo=(0,F.t)().shape({dropzone:(0,F.D)().required()});var ea=e.i(856688),es=e.i(738251),ei=e.i(936641),el=e.i(76381),ec=e.i(827594);let ed=e=>{let{userId:n,onSuccess:r,userMeta:o,documentSide:s}=e,{user:i}=(0,H.f)(),l="documentFrontSide"===s?"identityDocumentFront":"identityDocumentBack",{uploadMediaToS3:c,deleteMediaByEntity:d,preloadedMedia:m,preloadedMediaLoading:p,loadingDeleteMedia:f}=(0,ea.t)("User",i.adminId,i.id,n,l),[h,x]=(0,y.useState)(!1),[g,b]=(0,y.useState)(""),{control:j,errors:_,handleSubmit:v}=(0,L.G)({resolver:(0,S.yupResolver)(eo)}),[I,{loading:$}]=(0,A.f)(a.J,{onCompleted:r,update(e,t){let{data:r}=t,o=r?.update_User_by_pk?.meta;if(!o)return;let s=e.readQuery({query:a.x,variables:{id:n}});s?.user&&e.writeQuery({query:a.x,variables:{id:n},data:{user:{...s.user,meta:o}}})}}),C=async e=>{let{dropzone:t}=e;try{x(!0);let e=t[0];if(e){let t=await c({caption:"",media:e,type:"image"});if(!t.success)return void b(t.message);let{meta:r}=(e=>{let t,{userMeta:n,data:r,documentSide:o}=e,a=null,s={...n};s?.identityDocument||(s={...s,identityDocument:{}});let i=r.key,l=r.data.find(e=>"large"===e.name);a=l?l.relativePath:i;let c={key:r.key,extension:a?.split(".").pop(),thumbnails:r.data||null};switch(o){case"documentFrontSide":t=s.identityDocument?.front?.key,s.identityDocument={...s.identityDocument,front:c};break;case"documentBackSide":t=s.identityDocument?.back?.key,s.identityDocument={...s.identityDocument,back:c}}return{meta:s,key:t}})({userMeta:o,data:t,documentSide:s}),a=m?.[0]?.mediaId;a&&d(a),await I({variables:{userId:n,meta:r}})}}catch(e){b(e instanceof Error?e.message:"Unknown error")}finally{x(!1)}};return h||$||p||f?(0,t.jsx)(es.f,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:(0,t.jsx)(el.f,{})}):(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:v(C),children:[g.length>0&&(0,t.jsx)(ei.f,{severity:"warning",color:"error",variant:"filled",sx:{mb:2},children:g}),(0,t.jsx)(u.f,{mb:1,children:"Media"}),(0,t.jsx)(L.e,{control:j,name:"dropzone",render:e=>{let{value:n,onChange:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ec.f,{accept:"image/*, .heic",multiple:!1,onFilesSelected:r}),n?.[0]&&(0,t.jsx)(u.f,{mt:1,variant:"body2",children:n[0].name}),_.dropzone&&(0,t.jsx)(u.f,{color:"error",mt:1,variant:"body2",children:"Choose a file to upload"})]})}})]})},eu=e=>{let{userId:n,userMeta:r}=e,o=(0,p.f)(),a=e=>{let a="documentFrontSide"===e?"front":"back";o.show({content:(0,t.jsx)(ed,{userId:n,userMeta:r,onSuccess:o.close,documentSide:e}),title:`Upload identity document ${a}`})},s=[{field:"front",headerName:"Identity card - Front",sortable:!1,flex:1,renderCell:()=>(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",width:"100%",spacing:1,pr:2,minWidth:0,children:[(0,t.jsx)(u.f,{fontSize:"14px",title:"Upload copy of identity card",sx:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"Upload copy of identity card"}),(0,t.jsx)(V.f,{variant:"contained",color:"secondary",onClick:()=>a("documentFrontSide"),size:"small",sx:{flexShrink:0},children:"Upload"})]})},{field:"back",headerName:"Identity card - Back",sortable:!1,flex:1,renderCell:()=>(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",width:"100%",spacing:1,pr:2,minWidth:0,children:[(0,t.jsx)(u.f,{fontSize:"14px",title:"Upload copy of identity card",sx:{flex:1,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:"Upload copy of identity card"}),(0,t.jsx)(V.f,{variant:"contained",color:"secondary",onClick:()=>a("documentBackSide"),size:"small",sx:{flexShrink:0},children:"Upload"})]})}],i=(0,y.useMemo)(()=>[{id:1,front:"Upload copy of identity card",back:"Upload copy of identity card"}],[]);return(0,t.jsxs)(em,{defaultExpanded:!0,children:[(0,t.jsx)(x.f,{expandIcon:(0,t.jsx)(g.f,{}),children:(0,t.jsx)(u.f,{typography:"h6",children:"Identity document"})}),(0,t.jsx)(j.f,{sx:{pt:0},children:(0,t.jsx)(_.s,{rows:i,columns:s,totalCount:i?.length,autoHeight:!0})})]})},em=(0,b.f)(h.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;var ep=e.i(740790);let ef=()=>{let{hasRole:e}=(0,H.f)(),{query:n}=(0,r.useRouter)(),i=e("admin"),l=e("supplier"),{data:{user:c}={user:null},loading:d,refetch:u}=(0,o.t)(a.x,{skip:Number.isNaN(parseInt(n.id)),variables:{id:parseInt(n.id)}}),m=(0,y.useMemo)(()=>({...c,name:`${c?.nameFirst} ${c?.nameLast}`,description:c?.accounts?.filter(e=>null!=e.account).map(e=>e.account.name).join(", ")}),[c]);return!c||d?null:(0,t.jsxs)(ep.f,{container:!0,spacing:2,children:[(0,t.jsxs)(ep.f,{item:!0,xs:12,md:6,children:[(0,t.jsx)(C.f,{avatar:(0,s.f)(c.media),editable:i,entity:m,entityName:"User",refetch:u}),(0,t.jsx)(ee,{refetch:u,user:c}),l&&(0,t.jsx)(eu,{userId:Number(n.id),userMeta:c.meta}),i&&(0,t.jsx)(I,{userId:Number(n.id)})]}),(0,t.jsxs)(ep.f,{item:!0,xs:12,md:6,children:[(0,t.jsx)(K,{refetch:u,user:c}),i&&(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(en,{})})]})]})},eh=()=>(0,t.jsx)(ef,{});eh.getLayout=function(e){return(0,t.jsx)(n.f,{children:e})},e.s(["default",0,eh],863618)}],51989,(e,t,n)=>{let r="/dashboard/users/view";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(863618)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);