(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,215843,e=>{var t=e.i(391398),a=e.i(222351),n=e.i(377198);e.s(["f",0,e=>{let{file:o,...r}=e,s=(0,n.f)(o);return(0,t.jsx)(a.f,{src:s,...r})}])},122989,e=>{var t=e.i(391398),a=e.i(280445),n=e.i(668921),o=e.i(231637),r=e.i(901004),s=e.i(539117),i=e.i(471973);let l=(0,a.f)(n.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),c=(0,a.f)(o.f)(e=>{let{theme:t,variant:a}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===a&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:a,variant:n,label:o,options:u,value:d,onChange:m,helperText:h,error:f,hideLabel:p,renderOption:_,...g}=e;return(0,t.jsxs)(l,{variant:n,fullWidth:a,error:f,hiddenLabel:p,children:[!p&&(0,t.jsx)(c,{variant:n,children:o}),(0,t.jsx)(s.f,{fullWidth:a,displayEmpty:!0,value:d||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=u.find(e=>e.value===d);return e?e.label:""},error:f,...g,children:u.length?u.map(e=>(0,t.jsx)(r.f,{value:e.value,disabled:e.disabled,children:_?_(e):e.label},e.value)):(0,t.jsx)(r.f,{disabled:!0,value:"",children:"No options"})}),h&&(0,t.jsx)(i.f,{error:f,children:h})]})}])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let a=t?.medium?.meta?.thumbnails,n=a?.find?.(e=>"small"===e.name);return n?.relativePath||t.medium.filename||null}])},588964,e=>{var t=e.i(391398),a=e.i(691567),n=e.i(668921),o=e.i(152078),r=e.i(471973),s=e.i(606255),i=e.i(984636),l=e.i(530252),c=e.i(813843),u=e.i(115871),d=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},h=e=>{let a=(0,d.f)(e,m),{label:h,options:p,error:_,helperText:g,stackProps:I={},formControlProps:b={},labelLeft:x}=a,$=e=>{let{children:a}=e;return(0,t.jsx)(t.Fragment,{children:a})};return(0,t.jsxs)(n.f,{sx:{m:3},error:_,variant:"standard",...b,children:[(0,t.jsxs)(c.f,{...x&&f,children:[h&&(0,t.jsx)(s.f,{id:"radio-group",color:"secondary",children:h}),(0,t.jsx)(i.f,{...a,"aria-labelledby":"radio-group",children:(0,t.jsx)(c.f,{...I,children:p.map(e=>{let{value:a,label:n,icon:r,ParentComponent:s=$}=e;return(0,t.jsx)(s,{children:(0,t.jsx)(o.f,{value:a,control:(0,t.jsx)(l.f,{color:"secondary"}),label:(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r,(0,t.jsx)(u.f,{children:n})]})})})})})})]}),(0,t.jsx)(r.f,{children:g})]})};h.propTypes={label:a.default.string,options:a.default.arrayOf(a.default.shape({label:a.default.string.isRequired,value:a.default.any.isRequired,ParentComponent:a.default.elementType})),error:a.default.bool,helperText:a.default.string,stackProps:a.default.object,formControlProps:a.default.object,labelLeft:a.default.bool};let f={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,h])},399942,e=>{var t=e.i(39059);let a=async function(e,a){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{let{data:{users:o}}=await e.query({query:t.e,variables:{email:a}});if(o&&o.length>0)return!!n&&o[0];return!n||null}catch(e){return!0}};e.s(["f",0,a])},219281,e=>{var t=e.i(948574);e.s(["G",0,(e,a)=>"customer"!==e&&"supplier"!==e||a([...t.x,...t.H,...t.z,...t.Q]),"u",0,e=>{let{accountType:t,role:a,hasRole:n}=e;return n(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${a}`):n(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${a}`):!!n(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${a}`)},"y",0,(e,t,a)=>{let n={};return e.id?(n.id=parseInt(e.id),n.changes={nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,meta:{...t},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null,status:e.status},e.accountUserId?(n.updateAccountUser=!0,n.accountUserId=parseInt(e.accountUserId),n.accountUserChanges={role:e.role?.value,position:e.position,isContact:"yes"===e.isContact,status:e.status},n.accountUserModules=e.modules??{}):(n.accountUserId=0,n.updateAccountUser=!1)):(n.role=e.role?.value||"user",n.position=e.position,n.isContact="yes"===e.isContact,n.status=e.status,n.accountId=e.accountId,n.modules=e.modules,a?n.userId=a.id:n.User={data:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,status:e.status,meta:{sendDefaultWelcomeEmail:!0,notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null}}),n},"b",0,e=>({accountUserId:e.accountUserId,objects:e.location.map(t=>({accountUserId:e.accountUserId,accountLocationId:t}))}),"c",0,e=>({accountUserId:e.accountUserId,objects:(e.location??[]).map(t=>({accountUserId:e.accountUserId,locationId:t}))})])},39059,e=>{var t=e.i(159080);let a=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,n=t.f`
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
`,u=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,d=t.f`
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
`,p=t.f`
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
`;e.s(["e",0,s,"u",0,h,"q",0,l,"_",0,u,"x",0,r,"k",0,o,"f",0,c,"U",0,f,"I",0,a,"s",0,p,"l",0,d,"V",0,n,"J",0,m,"W",0,i])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),a=e.i(191788),n=e.i(432171),o=e.i(422411),r=e.i(424894),s=e.i(738251),i=e.i(799083),l=e.i(76381),c=e.i(813843),u=e.i(652148),d=e.i(115871),m=e.i(56271),h=e.i(577372),f=e.i(403901),p=e.i(588964),_=e.i(546788),g=e.i(594301),I=e.i(494575),b=e.i(498813),x=e.i(39059),$=e.i(219281),v=e.i(824451),y=e.i(292802),j=e.i(74633),q=e.i(889231),U=e.i(164056),A=e.i(658524),L=e.i(159974),C=e.i(589200),w=e.i(524057),k=e.i(207646),T=e.i(948574);let S=()=>{let{hasRole:e}=(0,g.f)(),{control:a,formState:{errors:n}}=(0,o.M)();return(0,t.jsxs)(c.f,{width:"100%",gap:1,children:[(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"nameFirst",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"First name",value:a,onChange:o,error:!!n?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"nameLast",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Last name",value:a,onChange:o,error:!!n?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"email",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:a,onChange:o,error:!!n?.email,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"phone",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Mobile",value:a,onChange:o,error:!!n?.phone,fullWidth:!0})}})]}),e([...T.x,...T.H,...T.z,...T.Q])&&(0,t.jsx)(o.e,{name:"status",control:a,defaultValue:"active",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsxs)(C.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(w.f,{children:"Status"}),(0,t.jsx)(A.f,{value:a,onChange:o,error:!!n?.status,children:k.f.map(e=>(0,t.jsx)(L.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(o.e,{name:"userId",control:a,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var F=e.i(122965),M=e.i(159080);let P=M.f`
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
`,R=M.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,H=M.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,G=["customer_user","admin_user"],W=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],O={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:I.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:I,accountId:U,accountType:A,submit:L}=e,{hasRole:C,user:w}=(0,g.f)(),{reference:k,pagination:T}=(0,F.f)(),M=C(["admin_owner","admin_manager"]),B=!(C("admin_user")&&"admin"===A),[E,N]=(0,a.useState)(!0),[V,z]=(0,a.useState)(""),[J,Q]=(0,a.useState)(!1),[D,K]=(0,a.useState)(!1),[Y,X]=(0,a.useState)(""),[Z,ee]=(0,a.useState)(null),[et,ea]=(0,a.useState)(!1),en=(0,a.useRef)(!1),eo=[...y.f];switch(A){case"supplier":eo.push({label:"Operative",value:"contractor"});break;case"admin":eo.push({label:"Helpdesk",value:"helpdesk"})}let er=!U||"customer"!==A,{data:es,loading:ei}=(0,n.t)(b.a,{skip:er,variables:{accountId:U,excludeUserId:I??-1}}),el="customer"===A&&!!U&&!er&&!ei&&!((es?.accountUsers?.length??0)>0),ec="customer"===A&&!!U,eu=(0,o.G)({defaultValues:{id:I,accountId:U,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,r.yupResolver)(_.f),context:{hasRole:(0,$.G)(A,C)&&!!U,hasLocation:!G.includes(w.role)&&G.includes(V),adminImplicitLocations:"admin"===A&&"admin_user"===V&&!I&&!et,hasOneOwner:E,isCustomerAccount:ec,mustKeepContactUser:el,contactRulesStillLoading:ec&&ei}}),{control:ed,errors:em,handleSubmit:eh,watch:ef,reset:ep,setValue:e_}=eu,eg=ef("role"),eI=ef("location");(0,a.useEffect)(()=>{eg?.value&&z(`${A}_${eg?.value}`)},[A,eg?.value]);let{data:{user:eb}={user:null},loading:ex}=(0,n.t)(b.E,{skip:!I,variables:{userId:I,accountId:U,includeAccount:!!U},onCompleted:e=>{let{user:t}=e;if(!t)return;let a=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(U)}),n={id:t.id,accountId:a?.account.id||U||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...a?{accountUserId:a.id,accountId:a.account.id,role:eo?.find?.(e=>e?.value===a?.role),position:a.position||null,isContact:!0===a.isContact?"yes":"no",status:a.status,location:"admin"===A&&"user"===a.role?void 0:a.userLocations.map(e=>e.accountLocationId),modules:a.modules}:{}};Q(!0),ep(n),z(`${A}_${n.role?.value||""}`),ee(n.accountUserId||null)}});(0,n.t)(b.R,{skip:!U,variables:{accountId:U,userId:I},onCompleted:e=>{let{accountUsers:t}=e;N(!(t.length>0))}});let e$="admin_user"===V,ev=null!=h.f[V]&&I!==w.id&&B,{data:ey}=(0,n.t)(R,{skip:!e$||null==U,variables:{accountId:U}}),ej=(0,a.useMemo)(()=>ey?.location?.map(e=>e.id)??[],[ey]),{data:{restrictedLocations:eq=[]}={restrictedLocations:[]},loading:eU}=(0,n.t)(H,{skip:!e$||!Z,variables:{accountUserId:Z}});(0,a.useEffect)(()=>{e$?!Z||eU||D||(e_("location",eq.map(e=>e.locationId)),K(!0)):K(!1)},[Z,D,e$,eq,eU,e_]),(0,a.useEffect)(()=>{!en.current||e$||I||(e_("location",void 0),ea(!1)),en.current=e$},[e$,e_,I]);let{data:{location:eA,meta:eL}={location:[],meta:{aggregate:{totalCount:0}}},loading:eC}=(0,n.t)(x.u,{skip:e$||!U,variables:{accountId:U,...T}}),{data:{location:ew,meta:ek}={location:[],meta:{aggregate:{totalCount:0}}},loading:eT}=(0,n.t)(P,{skip:!e$||!U,variables:{accountId:U,q:""!==Y?`%${Y}%`:null,...T}}),eS=e$?ew:eA,eF=e$?ek:eL,eM=e$?eT:eC,eP="admin"===A&&e$&&!I&&!et,eR=(0,a.useCallback)(e=>t=>{e$&&ea(!0),t.target.checked?e_("location",[...new Set([...eI??[],e])]):e_("location",(eI??[]).filter(t=>t!==e))},[e$,eI,e_]),eH=(0,a.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!e$||0===ej.length)return null;let e=Array.isArray(eI)?eI:[],a=ej.length>0&&ej.every(t=>e.includes(t)),n=e.length>0;return eP?(0,t.jsx)(i.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(ea(!0),e_("location",[...ej]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(i.f,{color:"secondary",checked:a,indeterminate:n&&!a,onChange:e=>{ea(!0),e.target.checked?e_("location",[...ej]):e_("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:a}=e;return a.id?(0,t.jsx)(i.f,{color:"secondary",checked:!eP&&!!eI?.includes(a.id),onChange:eR(a.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:a}=e;return a.address?(0,t.jsxs)(c.f,{children:[(0,t.jsx)(d.f,{children:a.address.addressLine1}),(0,t.jsx)(d.f,{children:a.address.postCode})]}):(0,t.jsx)(d.f,{children:"Please add"})}},...e$?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:a}=e;return a.customerId&&a.customer?(0,t.jsx)(q.f,{color:"secondary",href:`/dashboard/customers/view?id=${a.customerId}`,onClick:e=>e.stopPropagation(),children:a.customer}):null}}]:[]],[ej,eP,e$,eI,eR,ea,e_]),eG=(0,a.useMemo)(()=>(eS??[]).map(e=>({id:e$?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[e$,eS]);if(ex)return(0,t.jsx)(c.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eW={id:(0,$.G)(A,C)};return(0,t.jsx)(o.p,{...eu,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:eh(e=>{let t="admin"===A&&e$&&!I&&!et&&ej.length>0?{...e,location:[...ej]}:e,a=ev?(0,f.f)(e.modules,h.f[V]?.map(e=>e.name)??[]):void 0;L(a?{...t,modules:a}:t,eb?.meta)}),children:[(0,t.jsx)(S,{}),U&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{paddingTop:1,children:[(0,$.G)(A,C)&&(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"role",control:ed,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(v.f,{value:a,onChange:(e,t)=>n(t),label:"Role",options:eo,variant:"standard",color:"secondary",error:!!em?.role,helperText:em?.role?.message||em?.role?.value?.message})}},J?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"position",control:ed,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:a||"",onChange:e=>n(e.target.value||null),InputLabelProps:{shrink:!!a},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,$.u)({accountType:A,role:eg?.value,hasRole:C})&&eb?.id!==w.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"invoiceThreshold",control:ed,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:a,onChange:n,InputLabelProps:{shrink:!!a},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"quoteThreshold",control:ed,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:a,onChange:n,InputLabelProps:{shrink:!!a},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(c.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(d.f,{sx:O.title,children:"Contact user"}),(0,t.jsx)(o.e,{name:"isContact",control:ed,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(p.f,{formControlProps:{sx:{m:0}},stackProps:em.isContact?O.radioGroupError:O.radioGroup,error:!!em.isContact,value:a,onChange:n,options:W,labelLeft:!0,helperText:em.isContact?.message})}},J?"contact-edit-mode":"contact-create-mode")]}),ev&&(0,t.jsx)(m.f,{role:V})]}),G.includes(V)&&I!==w.id&&B&&(0,t.jsxs)(s.f,{sx:em.location?O.locationError:{},children:[(0,t.jsx)(d.f,{sx:O.title,children:"Locations"}),e$&&M&&(0,t.jsx)(u.f,{fullWidth:!0,value:Y,onChange:e=>{X(e.target.value),k.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!Y},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)(j.s,{...k,columnVisibilityModel:eW,totalCount:eF.aggregate.totalCount,columns:eH,loading:eM,rows:eG,autoHeight:!0}),(0,t.jsx)(o.e,{control:ed,name:"location",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}})]})]}),I&&(0,t.jsx)(o.e,{control:ed,name:"id",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}}),U&&(0,t.jsx)(o.e,{control:ed,name:"accountId",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}}),Z&&(0,t.jsx)(o.e,{control:ed,name:"accountUserId",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}})]})})}],697871)},56271,577372,403901,546788,498813,e=>{var t=e.i(391398),a=e.i(813843),n=e.i(115871);let o=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],r=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],s={customer_user:o,admin_user:o,supplier_owner:r,supplier_manager:r,supplier_user:r,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...r]};e.s(["f",0,s],577372);var i=e.i(191788),l=e.i(422411),c=e.i(152078),u=e.i(799083),d=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:o}=e,{control:r,watch:h,setValue:f}=(0,l.M)(),p=!!h("modules.jobHistoryAll"),_=(0,i.useMemo)(()=>s[o]||[],[o]);return(0,i.useEffect)(()=>{p&&f("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[p,f]),(0,t.jsxs)(d.f,{children:[(0,t.jsx)(n.f,{sx:m,children:"Permissions"}),(0,t.jsx)(a.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:_.map(e=>{let a="jobHistorySupplier"===e.name&&p;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:r,render:n=>{let{value:o,onChange:r}=n;return(0,t.jsx)(c.f,{disabled:a,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(u.f,{color:"secondary",checked:!!o,disabled:a,onChange:e=>r(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let h=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let a=e??{};return Object.fromEntries(h.map(e=>[e,t.includes(e)&&!0===a[e]]))}],403901);var f=e.i(426778);let p="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",_=(0,f.t)().shape({id:(0,f.H)().nullable().optional(),accountId:(0,f.H)().nullable().optional(),nameFirst:(0,f.x)().required(),nameLast:(0,f.x)().required(),email:(0,f.x)().required().email(),phone:(0,f.x)().required(),status:(0,f.x)().when("$hasRole",(e,t)=>{let[a]=e;return a?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,f.t)().nullable().shape({label:(0,f.x)(),value:(0,f.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[a,n,o]=e;return a?n?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):o&&"number"==typeof o&&o>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[a,n]=e;return a&&n&&"number"==typeof n&&n>0?t.required("Role is required"):t.nullable()}),userId:(0,f.H)().nullable().optional(),accountUserId:(0,f.H)().nullable().optional(),position:(0,f.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,f.x)().nullable(),otherwise:()=>(0,f.x)().nullable()}),isContact:(0,f.x)().when("accountId",{is:e=>!!e,then:()=>(0,f.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[a,n,o]=e;return o?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):a&&n?t.oneOf(["yes"],p).required(p):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,f.x)().nullable().optional()}),location:(0,f.k)().of((0,f.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[a,n]=e;return!a||n?t.nullable().optional():t.required()})});e.s(["f",0,_],546788);var g=e.i(159080);let I=g.f`
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
`,x=g.f`
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
`;e.s(["a",0,x,"R",0,b,"E",0,I],498813)},920475,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e.r(421506)),r=e.r(391398);a.default=(0,o.default)((0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var a=e.i(231637);e.s(["f",()=>a.f],524057)}])})();