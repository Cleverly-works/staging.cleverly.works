(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,215843,e=>{var t=e.i(391398),n=e.i(222351),a=e.i(377198);e.s(["f",0,e=>{let{file:o,...r}=e,s=(0,a.f)(o);return(0,t.jsx)(n.f,{src:s,...r})}])},122989,e=>{var t=e.i(391398),n=e.i(280445),a=e.i(668921),o=e.i(231637),r=e.i(901004),s=e.i(539117),i=e.i(471973);let l=(0,n.f)(a.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),c=(0,n.f)(o.f)(e=>{let{theme:t,variant:n}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===n&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:n,variant:a,label:o,options:u,value:d,onChange:m,helperText:p,error:h,hideLabel:f,renderOption:_,...g}=e;return(0,t.jsxs)(l,{variant:a,fullWidth:n,error:h,hiddenLabel:f,children:[!f&&(0,t.jsx)(c,{variant:a,children:o}),(0,t.jsx)(s.f,{fullWidth:n,displayEmpty:!0,value:d||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=u.find(e=>e.value===d);return e?e.label:""},error:h,...g,children:u.length?u.map(e=>(0,t.jsx)(r.f,{value:e.value,disabled:e.disabled,children:_?_(e):e.label},e.value)):(0,t.jsx)(r.f,{disabled:!0,value:"",children:"No options"})}),p&&(0,t.jsx)(i.f,{error:h,children:p})]})}])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let n=t?.medium?.meta?.thumbnails,a=n?.find?.(e=>"small"===e.name);return a?.relativePath||t.medium.filename||null}])},588964,e=>{var t=e.i(391398),n=e.i(691567),a=e.i(668921),o=e.i(152078),r=e.i(471973),s=e.i(606255),i=e.i(984636),l=e.i(530252),c=e.i(813843),u=e.i(115871),d=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},p=e=>{let n=(0,d.f)(e,m),{label:p,options:f,error:_,helperText:g,stackProps:I={},formControlProps:b={},labelLeft:$}=n,x=e=>{let{children:n}=e;return(0,t.jsx)(t.Fragment,{children:n})};return(0,t.jsxs)(a.f,{sx:{m:3},error:_,variant:"standard",...b,children:[(0,t.jsxs)(c.f,{...$&&h,children:[p&&(0,t.jsx)(s.f,{id:"radio-group",color:"secondary",children:p}),(0,t.jsx)(i.f,{...n,"aria-labelledby":"radio-group",children:(0,t.jsx)(c.f,{...I,children:f.map(e=>{let{value:n,label:a,icon:r,ParentComponent:s=x}=e;return(0,t.jsx)(s,{children:(0,t.jsx)(o.f,{value:n,control:(0,t.jsx)(l.f,{color:"secondary"}),label:(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r,(0,t.jsx)(u.f,{children:a})]})})})})})})]}),(0,t.jsx)(r.f,{children:g})]})};p.propTypes={label:n.default.string,options:n.default.arrayOf(n.default.shape({label:n.default.string.isRequired,value:n.default.any.isRequired,ParentComponent:n.default.elementType})),error:n.default.bool,helperText:n.default.string,stackProps:n.default.object,formControlProps:n.default.object,labelLeft:n.default.bool};let h={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,p])},399942,e=>{var t=e.i(39059);let n=async function(e,n){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{let{data:{users:o}}=await e.query({query:t.e,variables:{email:n}});if(o&&o.length>0)return!!a&&o[0];return!a||null}catch(e){return!0}};e.s(["f",0,n])},219281,e=>{var t=e.i(948574);e.s(["G",0,(e,n)=>"customer"!==e&&"supplier"!==e||n([...t.x,...t.H,...t.z,...t.Q]),"u",0,e=>{let{accountType:t,role:n,hasRole:a}=e;return a(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${n}`):a(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${n}`):!!a(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${n}`)},"y",0,(e,t,n)=>{let a={};return e.id?(a.id=parseInt(e.id),a.changes={nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,meta:{...t},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null,status:e.status},e.accountUserId?(a.updateAccountUser=!0,a.accountUserId=parseInt(e.accountUserId),a.accountUserChanges={role:e.role?.value,position:e.position,isContact:"yes"===e.isContact,status:e.status},a.accountUserModules=e.modules??{}):(a.accountUserId=0,a.updateAccountUser=!1)):(a.role=e.role?.value||"user",a.position=e.position,a.isContact="yes"===e.isContact,a.status=e.status,a.accountId=e.accountId,a.modules=e.modules,n?a.userId=n.id:a.User={data:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,status:e.status,meta:{sendDefaultWelcomeEmail:!0,notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null}}),a},"b",0,e=>({accountUserId:e.accountUserId,objects:e.location.map(t=>({accountUserId:e.accountUserId,accountLocationId:t}))}),"c",0,e=>({accountUserId:e.accountUserId,objects:(e.location??[]).map(t=>({accountUserId:e.accountUserId,locationId:t}))})])},39059,e=>{var t=e.i(159080);let n=t.f`
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
`,r=t.f`
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
`,u=t.f`
  mutation signoutMS($id: Int!, $type: String!, $email: String!) {
    signoutMS(id: $id, type: $type, email: $email) {
      error
      msId
      success
    }
  }
`,d=t.f`
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
`,p=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,h=t.f`
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
`,f=t.f`
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
`,g=t.f`
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
`,I=t.f`
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
`,b=t.f`
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
`;e.s(["e",0,s,"d",0,c,"u",0,g,"q",0,d,"_",0,p,"x",0,r,"k",0,o,"f",0,m,"U",0,I,"I",0,n,"s",0,b,"c",0,l,"S",0,u,"o",0,f,"l",0,h,"V",0,a,"J",0,_,"W",0,i])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),n=e.i(191788),a=e.i(432171),o=e.i(422411),r=e.i(424894),s=e.i(738251),i=e.i(799083),l=e.i(76381),c=e.i(813843),u=e.i(652148),d=e.i(115871),m=e.i(56271),p=e.i(577372),h=e.i(403901),f=e.i(588964),_=e.i(546788),g=e.i(594301),I=e.i(494575),b=e.i(498813),$=e.i(39059),x=e.i(219281),y=e.i(824451),v=e.i(292802),j=e.i(74633),q=e.i(889231),U=e.i(164056),A=e.i(658524),L=e.i(159974),C=e.i(589200),w=e.i(524057),k=e.i(207646),S=e.i(948574);let T=()=>{let{hasRole:e}=(0,g.f)(),{control:n,formState:{errors:a}}=(0,o.M)();return(0,t.jsxs)(c.f,{width:"100%",gap:1,children:[(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"nameFirst",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"First name",value:n,onChange:o,error:!!a?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"nameLast",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Last name",value:n,onChange:o,error:!!a?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"email",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:n,onChange:o,error:!!a?.email,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"phone",control:n,defaultValue:"",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Mobile",value:n,onChange:o,error:!!a?.phone,fullWidth:!0})}})]}),e([...S.x,...S.H,...S.z,...S.Q])&&(0,t.jsx)(o.e,{name:"status",control:n,defaultValue:"active",render:e=>{let{value:n,onChange:o}=e;return(0,t.jsxs)(C.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(w.f,{children:"Status"}),(0,t.jsx)(A.f,{value:n,onChange:o,error:!!a?.status,children:k.f.map(e=>(0,t.jsx)(L.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(o.e,{name:"userId",control:n,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var F=e.i(122965),M=e.i(159080);let R=M.f`
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
`,G=M.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,H=["customer_user","admin_user"],W=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],O={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:I.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:I,accountId:U,accountType:A,submit:L}=e,{hasRole:C,user:w}=(0,g.f)(),{reference:k,pagination:S}=(0,F.f)(),M=C(["admin_owner","admin_manager"]),B=!(C("admin_user")&&"admin"===A),[E,N]=(0,n.useState)(!0),[V,z]=(0,n.useState)(""),[J,Q]=(0,n.useState)(!1),[D,K]=(0,n.useState)(!1),[Y,X]=(0,n.useState)(""),[Z,ee]=(0,n.useState)(null),[et,en]=(0,n.useState)(!1),ea=(0,n.useRef)(!1),eo=[...v.f];switch(A){case"supplier":eo.push({label:"Operative",value:"contractor"});break;case"admin":eo.push({label:"Helpdesk",value:"helpdesk"})}let er=!U||"customer"!==A,{data:es,loading:ei}=(0,a.t)(b.a,{skip:er,variables:{accountId:U,excludeUserId:I??-1}}),el="customer"===A&&!!U&&!er&&!ei&&!((es?.accountUsers?.length??0)>0),ec="customer"===A&&!!U,eu=(0,o.G)({defaultValues:{id:I,accountId:U,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,r.yupResolver)(_.f),context:{hasRole:(0,x.G)(A,C)&&!!U,hasLocation:!H.includes(w.role)&&H.includes(V),adminImplicitLocations:"admin"===A&&"admin_user"===V&&!I&&!et,hasOneOwner:E,isCustomerAccount:ec,mustKeepContactUser:el,contactRulesStillLoading:ec&&ei}}),{control:ed,errors:em,handleSubmit:ep,watch:eh,reset:ef,setValue:e_}=eu,eg=eh("role"),eI=eh("location");(0,n.useEffect)(()=>{eg?.value&&z(`${A}_${eg?.value}`)},[A,eg?.value]);let{data:{user:eb}={user:null},loading:e$}=(0,a.t)(b.E,{skip:!I,variables:{userId:I,accountId:U,includeAccount:!!U},onCompleted:e=>{let{user:t}=e;if(!t)return;let n=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(U)}),a={id:t.id,accountId:n?.account.id||U||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...n?{accountUserId:n.id,accountId:n.account.id,role:eo?.find?.(e=>e?.value===n?.role),position:n.position||null,isContact:!0===n.isContact?"yes":"no",status:n.status,location:"admin"===A&&"user"===n.role?void 0:n.userLocations.map(e=>e.accountLocationId),modules:n.modules}:{}};Q(!0),ef(a),z(`${A}_${a.role?.value||""}`),ee(a.accountUserId||null)}});(0,a.t)(b.R,{skip:!U,variables:{accountId:U,userId:I},onCompleted:e=>{let{accountUsers:t}=e;N(!(t.length>0))}});let ex="admin_user"===V,ey=null!=p.f[V]&&I!==w.id&&B,{data:ev}=(0,a.t)(P,{skip:!ex||null==U,variables:{accountId:U}}),ej=(0,n.useMemo)(()=>ev?.location?.map(e=>e.id)??[],[ev]),{data:{restrictedLocations:eq=[]}={restrictedLocations:[]},loading:eU}=(0,a.t)(G,{skip:!ex||!Z,variables:{accountUserId:Z}});(0,n.useEffect)(()=>{ex?!Z||eU||D||(e_("location",eq.map(e=>e.locationId)),K(!0)):K(!1)},[Z,D,ex,eq,eU,e_]),(0,n.useEffect)(()=>{!ea.current||ex||I||(e_("location",void 0),en(!1)),ea.current=ex},[ex,e_,I]);let{data:{location:eA,meta:eL}={location:[],meta:{aggregate:{totalCount:0}}},loading:eC}=(0,a.t)($.u,{skip:ex||!U,variables:{accountId:U,...S}}),{data:{location:ew,meta:ek}={location:[],meta:{aggregate:{totalCount:0}}},loading:eS}=(0,a.t)(R,{skip:!ex||!U,variables:{accountId:U,q:""!==Y?`%${Y}%`:null,...S}}),eT=ex?ew:eA,eF=ex?ek:eL,eM=ex?eS:eC,eR="admin"===A&&ex&&!I&&!et,eP=(0,n.useCallback)(e=>t=>{ex&&en(!0),t.target.checked?e_("location",[...new Set([...eI??[],e])]):e_("location",(eI??[]).filter(t=>t!==e))},[ex,eI,e_]),eG=(0,n.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!ex||0===ej.length)return null;let e=Array.isArray(eI)?eI:[],n=ej.length>0&&ej.every(t=>e.includes(t)),a=e.length>0;return eR?(0,t.jsx)(i.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(en(!0),e_("location",[...ej]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(i.f,{color:"secondary",checked:n,indeterminate:a&&!n,onChange:e=>{en(!0),e.target.checked?e_("location",[...ej]):e_("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:n}=e;return n.id?(0,t.jsx)(i.f,{color:"secondary",checked:!eR&&!!eI?.includes(n.id),onChange:eP(n.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:n}=e;return n.address?(0,t.jsxs)(c.f,{children:[(0,t.jsx)(d.f,{children:n.address.addressLine1}),(0,t.jsx)(d.f,{children:n.address.postCode})]}):(0,t.jsx)(d.f,{children:"Please add"})}},...ex?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:n}=e;return n.customerId&&n.customer?(0,t.jsx)(q.f,{color:"secondary",href:`/dashboard/customers/view?id=${n.customerId}`,onClick:e=>e.stopPropagation(),children:n.customer}):null}}]:[]],[ej,eR,ex,eI,eP,en,e_]),eH=(0,n.useMemo)(()=>(eT??[]).map(e=>({id:ex?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[ex,eT]);if(e$)return(0,t.jsx)(c.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eW={id:(0,x.G)(A,C)};return(0,t.jsx)(o.p,{...eu,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:ep(e=>{let t="admin"===A&&ex&&!I&&!et&&ej.length>0?{...e,location:[...ej]}:e,n=ey?(0,h.f)(e.modules,p.f[V]?.map(e=>e.name)??[]):void 0;L(n?{...t,modules:n}:t,eb?.meta)}),children:[(0,t.jsx)(T,{}),U&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{paddingTop:1,children:[(0,x.G)(A,C)&&(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"role",control:ed,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(y.f,{value:n,onChange:(e,t)=>a(t),label:"Role",options:eo,variant:"standard",color:"secondary",error:!!em?.role,helperText:em?.role?.message||em?.role?.value?.message})}},J?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"position",control:ed,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:n||"",onChange:e=>a(e.target.value||null),InputLabelProps:{shrink:!!n},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,x.u)({accountType:A,role:eg?.value,hasRole:C})&&eb?.id!==w.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"invoiceThreshold",control:ed,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:n,onChange:a,InputLabelProps:{shrink:!!n},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"quoteThreshold",control:ed,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:n,onChange:a,InputLabelProps:{shrink:!!n},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(c.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(d.f,{sx:O.title,children:"Contact user"}),(0,t.jsx)(o.e,{name:"isContact",control:ed,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(f.f,{formControlProps:{sx:{m:0}},stackProps:em.isContact?O.radioGroupError:O.radioGroup,error:!!em.isContact,value:n,onChange:a,options:W,labelLeft:!0,helperText:em.isContact?.message})}},J?"contact-edit-mode":"contact-create-mode")]}),ey&&(0,t.jsx)(m.f,{role:V})]}),H.includes(V)&&I!==w.id&&B&&(0,t.jsxs)(s.f,{sx:em.location?O.locationError:{},children:[(0,t.jsx)(d.f,{sx:O.title,children:"Locations"}),ex&&M&&(0,t.jsx)(u.f,{fullWidth:!0,value:Y,onChange:e=>{X(e.target.value),k.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!Y},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)(j.s,{...k,columnVisibilityModel:eW,totalCount:eF.aggregate.totalCount,columns:eG,loading:eM,rows:eH,autoHeight:!0}),(0,t.jsx)(o.e,{control:ed,name:"location",render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:a})}})]})]}),I&&(0,t.jsx)(o.e,{control:ed,name:"id",render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:a})}}),U&&(0,t.jsx)(o.e,{control:ed,name:"accountId",render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:a})}}),Z&&(0,t.jsx)(o.e,{control:ed,name:"accountUserId",render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)("input",{type:"hidden",value:n,onChange:a})}})]})})}],697871)},56271,577372,403901,546788,498813,e=>{var t=e.i(391398),n=e.i(813843),a=e.i(115871);let o=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],r=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],s={customer_user:o,admin_user:o,supplier_owner:r,supplier_manager:r,supplier_user:r,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...r]};e.s(["f",0,s],577372);var i=e.i(191788),l=e.i(422411),c=e.i(152078),u=e.i(799083),d=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:o}=e,{control:r,watch:p,setValue:h}=(0,l.M)(),f=!!p("modules.jobHistoryAll"),_=(0,i.useMemo)(()=>s[o]||[],[o]);return(0,i.useEffect)(()=>{f&&h("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[f,h]),(0,t.jsxs)(d.f,{children:[(0,t.jsx)(a.f,{sx:m,children:"Permissions"}),(0,t.jsx)(n.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:_.map(e=>{let n="jobHistorySupplier"===e.name&&f;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:r,render:a=>{let{value:o,onChange:r}=a;return(0,t.jsx)(c.f,{disabled:n,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(u.f,{color:"secondary",checked:!!o,disabled:n,onChange:e=>r(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let p=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let n=e??{};return Object.fromEntries(p.map(e=>[e,t.includes(e)&&!0===n[e]]))}],403901);var h=e.i(426778);let f="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",_=(0,h.t)().shape({id:(0,h.H)().nullable().optional(),accountId:(0,h.H)().nullable().optional(),nameFirst:(0,h.x)().required(),nameLast:(0,h.x)().required(),email:(0,h.x)().required().email(),phone:(0,h.x)().required(),status:(0,h.x)().when("$hasRole",(e,t)=>{let[n]=e;return n?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,h.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,h.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,h.t)().nullable().shape({label:(0,h.x)(),value:(0,h.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[n,a,o]=e;return n?a?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):o&&"number"==typeof o&&o>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[n,a]=e;return n&&a&&"number"==typeof a&&a>0?t.required("Role is required"):t.nullable()}),userId:(0,h.H)().nullable().optional(),accountUserId:(0,h.H)().nullable().optional(),position:(0,h.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,h.x)().nullable(),otherwise:()=>(0,h.x)().nullable()}),isContact:(0,h.x)().when("accountId",{is:e=>!!e,then:()=>(0,h.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[n,a,o]=e;return o?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):n&&a?t.oneOf(["yes"],f).required(f):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,h.x)().nullable().optional()}),location:(0,h.k)().of((0,h.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[n,a]=e;return!n||a?t.nullable().optional():t.required()})});e.s(["f",0,_],546788);var g=e.i(159080);let I=g.f`
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
`,b=g.f`
  query FindOwnersByAccount($accountId: Int, $userId: Int) {
    accountUsers: Account_User(
      where: { role: { _eq: "owner" }, accountId: { _eq: $accountId }, userId: { _neq: $userId } }
    ) {
      id
      role
    }
  }
`,$=g.f`
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
`;e.s(["a",0,$,"R",0,b,"E",0,I],498813)},920475,(e,t,n)=>{var a=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e.r(421506)),r=e.r(391398);n.default=(0,o.default)((0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var n=e.i(231637);e.s(["f",()=>n.f],524057)}])})();