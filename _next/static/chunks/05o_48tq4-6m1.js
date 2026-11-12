(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,239964,e=>{var t=e.i(391398),a=e.i(191788),n=e.i(691567),o=e.i(773831),r=e.i(33670),s=e.i(901004),i=e.i(509790),l=e.i(692113),c=e.i(137995),d=e.i(817581),u=e.i(420),m=e.i(870307),p=e.i(407329),f=e.i(390536),h=e.i(978319),_=e.i(376733),g=e.i(13558),x=e.i(562673),b=e.i(339909),I=e.i(89029),j=e.i(129503),$=e.i(213419),v=e.i(12028),y=e.i(813843),q=e.i(115871);let U={add:(0,t.jsx)(d.default,{}),archive:(0,t.jsx)(l.default,{}),avatar:(0,t.jsx)(v.default,{}),check:(0,t.jsx)(u.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(h.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(f.default,{}),info:(0,t.jsx)(g.default,{}),edit:(0,t.jsx)(_.default,{}),location:(0,t.jsx)(I.default,{}),unarchive:(0,t.jsx)(c.default,{}),uploadFile:(0,t.jsx)(x.default,{}),receipt:(0,t.jsx)(b.default,{}),visibility:(0,t.jsx)($.default,{})},A={default:(0,t.jsx)(i.default,{}),defaultHoriz:(0,t.jsx)(j.default,{}),description:(0,t.jsx)(p.default,{})},C=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],L=e=>{let{actionsData:n=C,icon:i="default",row:l,disabled:c=!1}=e,[d,u]=(0,a.useState)(null),m=()=>{u(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:c,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),u(e.currentTarget)},children:A[i]}),(0,t.jsx)(r.f,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:!!d,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:n(l).map((e,a)=>(0,t.jsx)(s.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(y.f,{direction:"row",alignItems:"center",spacing:2,children:[U?.[e.icon]||null,(0,t.jsx)(q.f,{children:e.tooltip})]})},a))})]})};L.propTypes={actionsData:n.default.func,icon:n.default.oneOf(["default","description"]),row:n.default.any.isRequired,disabled:n.default.bool},e.s(["f",0,L])},588964,e=>{var t=e.i(391398),a=e.i(691567),n=e.i(668921),o=e.i(152078),r=e.i(471973),s=e.i(606255),i=e.i(984636),l=e.i(530252),c=e.i(813843),d=e.i(115871),u=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},p=e=>{let a=(0,u.f)(e,m),{label:p,options:h,error:_,helperText:g,stackProps:x={},formControlProps:b={},labelLeft:I}=a,j=e=>{let{children:a}=e;return(0,t.jsx)(t.Fragment,{children:a})};return(0,t.jsxs)(n.f,{sx:{m:3},error:_,variant:"standard",...b,children:[(0,t.jsxs)(c.f,{...I&&f,children:[p&&(0,t.jsx)(s.f,{id:"radio-group",color:"secondary",children:p}),(0,t.jsx)(i.f,{...a,"aria-labelledby":"radio-group",children:(0,t.jsx)(c.f,{...x,children:h.map(e=>{let{value:a,label:n,icon:r,ParentComponent:s=j}=e;return(0,t.jsx)(s,{children:(0,t.jsx)(o.f,{value:a,control:(0,t.jsx)(l.f,{color:"secondary"}),label:(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r,(0,t.jsx)(d.f,{children:n})]})})})})})})]}),(0,t.jsx)(r.f,{children:g})]})};p.propTypes={label:a.default.string,options:a.default.arrayOf(a.default.shape({label:a.default.string.isRequired,value:a.default.any.isRequired,ParentComponent:a.default.elementType})),error:a.default.bool,helperText:a.default.string,stackProps:a.default.object,formControlProps:a.default.object,labelLeft:a.default.bool};let f={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,p])},399942,e=>{var t=e.i(39059);let a=async function(e,a){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{let{data:{users:o}}=await e.query({query:t.e,variables:{email:a}});if(o&&o.length>0)return!!n&&o[0];return!n||null}catch(e){return!0}};e.s(["f",0,a])},219281,e=>{var t=e.i(948574);e.s(["G",0,(e,a)=>"customer"!==e&&"supplier"!==e||a([...t.x,...t.H,...t.z,...t.Q]),"u",0,e=>{let{accountType:t,role:a,hasRole:n}=e;return n(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${a}`):n(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${a}`):!!n(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${a}`)},"y",0,(e,t,a)=>{let n={};return e.id?(n.id=parseInt(e.id),n.changes={nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,meta:{...t},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null,status:e.status},e.accountUserId?(n.updateAccountUser=!0,n.accountUserId=parseInt(e.accountUserId),n.accountUserChanges={role:e.role?.value,position:e.position,isContact:"yes"===e.isContact,status:e.status},n.accountUserModules=e.modules??{}):(n.accountUserId=0,n.updateAccountUser=!1)):(n.role=e.role?.value||"user",n.position=e.position,n.isContact="yes"===e.isContact,n.status=e.status,n.accountId=e.accountId,n.modules=e.modules,a?n.userId=a.id:n.User={data:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,status:e.status,meta:{sendDefaultWelcomeEmail:!0,notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null}}),n},"b",0,e=>({accountUserId:e.accountUserId,objects:e.location.map(t=>({accountUserId:e.accountUserId,accountLocationId:t}))}),"c",0,e=>({accountUserId:e.accountUserId,objects:(e.location??[]).map(t=>({accountUserId:e.accountUserId,locationId:t}))})])},39059,e=>{var t=e.i(159080);let a=t.f`
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
`;e.s(["e",0,s,"u",0,p,"q",0,l,"_",0,d,"x",0,r,"k",0,o,"f",0,c,"U",0,f,"I",0,a,"s",0,h,"l",0,u,"V",0,n,"J",0,m,"W",0,i])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),a=e.i(191788),n=e.i(432171),o=e.i(422411),r=e.i(424894),s=e.i(738251),i=e.i(799083),l=e.i(76381),c=e.i(813843),d=e.i(652148),u=e.i(115871),m=e.i(56271),p=e.i(577372),f=e.i(403901),h=e.i(588964),_=e.i(546788),g=e.i(594301),x=e.i(494575),b=e.i(498813),I=e.i(39059),j=e.i(219281),$=e.i(824451),v=e.i(292802),y=e.i(74633),q=e.i(889231),U=e.i(164056),A=e.i(658524),C=e.i(159974),L=e.i(589200),w=e.i(524057),k=e.i(207646),T=e.i(948574);let S=()=>{let{hasRole:e}=(0,g.f)(),{control:a,formState:{errors:n}}=(0,o.M)();return(0,t.jsxs)(c.f,{width:"100%",gap:1,children:[(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"nameFirst",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"First name",value:a,onChange:o,error:!!n?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"nameLast",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Last name",value:a,onChange:o,error:!!n?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"email",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:a,onChange:o,error:!!n?.email,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"phone",control:a,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(U.f,{variant:"standard",color:"secondary",label:"Mobile",value:a,onChange:o,error:!!n?.phone,fullWidth:!0})}})]}),e([...T.x,...T.H,...T.z,...T.Q])&&(0,t.jsx)(o.e,{name:"status",control:a,defaultValue:"active",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsxs)(L.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(w.f,{children:"Status"}),(0,t.jsx)(A.f,{value:a,onChange:o,error:!!n?.status,children:k.f.map(e=>(0,t.jsx)(C.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(o.e,{name:"userId",control:a,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var F=e.i(122965),P=e.i(159080);let M=P.f`
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
`,R=P.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,H=P.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,O=["customer_user","admin_user"],G=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],E={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:x.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:x,accountId:U,accountType:A,submit:C}=e,{hasRole:L,user:w}=(0,g.f)(),{reference:k,pagination:T}=(0,F.f)(),P=L(["admin_owner","admin_manager"]),B=!(L("admin_user")&&"admin"===A),[W,N]=(0,a.useState)(!0),[D,V]=(0,a.useState)(""),[z,J]=(0,a.useState)(!1),[Q,K]=(0,a.useState)(!1),[Y,X]=(0,a.useState)(""),[Z,ee]=(0,a.useState)(null),[et,ea]=(0,a.useState)(!1),en=(0,a.useRef)(!1),eo=[...v.f];switch(A){case"supplier":eo.push({label:"Operative",value:"contractor"});break;case"admin":eo.push({label:"Helpdesk",value:"helpdesk"})}let er=!U||"customer"!==A,{data:es,loading:ei}=(0,n.t)(b.a,{skip:er,variables:{accountId:U,excludeUserId:x??-1}}),el="customer"===A&&!!U&&!er&&!ei&&!((es?.accountUsers?.length??0)>0),ec="customer"===A&&!!U,ed=(0,o.G)({defaultValues:{id:x,accountId:U,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,r.yupResolver)(_.f),context:{hasRole:(0,j.G)(A,L)&&!!U,hasLocation:!O.includes(w.role)&&O.includes(D),adminImplicitLocations:"admin"===A&&"admin_user"===D&&!x&&!et,hasOneOwner:W,isCustomerAccount:ec,mustKeepContactUser:el,contactRulesStillLoading:ec&&ei}}),{control:eu,errors:em,handleSubmit:ep,watch:ef,reset:eh,setValue:e_}=ed,eg=ef("role"),ex=ef("location");(0,a.useEffect)(()=>{eg?.value&&V(`${A}_${eg?.value}`)},[A,eg?.value]);let{data:{user:eb}={user:null},loading:eI}=(0,n.t)(b.E,{skip:!x,variables:{userId:x,accountId:U,includeAccount:!!U},onCompleted:e=>{let{user:t}=e;if(!t)return;let a=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(U)}),n={id:t.id,accountId:a?.account.id||U||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...a?{accountUserId:a.id,accountId:a.account.id,role:eo?.find?.(e=>e?.value===a?.role),position:a.position||null,isContact:!0===a.isContact?"yes":"no",status:a.status,location:"admin"===A&&"user"===a.role?void 0:a.userLocations.map(e=>e.accountLocationId),modules:a.modules}:{}};J(!0),eh(n),V(`${A}_${n.role?.value||""}`),ee(n.accountUserId||null)}});(0,n.t)(b.R,{skip:!U,variables:{accountId:U,userId:x},onCompleted:e=>{let{accountUsers:t}=e;N(!(t.length>0))}});let ej="admin_user"===D,e$=null!=p.f[D]&&x!==w.id&&B,{data:ev}=(0,n.t)(R,{skip:!ej||null==U,variables:{accountId:U}}),ey=(0,a.useMemo)(()=>ev?.location?.map(e=>e.id)??[],[ev]),{data:{restrictedLocations:eq=[]}={restrictedLocations:[]},loading:eU}=(0,n.t)(H,{skip:!ej||!Z,variables:{accountUserId:Z}});(0,a.useEffect)(()=>{ej?!Z||eU||Q||(e_("location",eq.map(e=>e.locationId)),K(!0)):K(!1)},[Z,Q,ej,eq,eU,e_]),(0,a.useEffect)(()=>{!en.current||ej||x||(e_("location",void 0),ea(!1)),en.current=ej},[ej,e_,x]);let{data:{location:eA,meta:eC}={location:[],meta:{aggregate:{totalCount:0}}},loading:eL}=(0,n.t)(I.u,{skip:ej||!U,variables:{accountId:U,...T}}),{data:{location:ew,meta:ek}={location:[],meta:{aggregate:{totalCount:0}}},loading:eT}=(0,n.t)(M,{skip:!ej||!U,variables:{accountId:U,q:""!==Y?`%${Y}%`:null,...T}}),eS=ej?ew:eA,eF=ej?ek:eC,eP=ej?eT:eL,eM="admin"===A&&ej&&!x&&!et,eR=(0,a.useCallback)(e=>t=>{ej&&ea(!0),t.target.checked?e_("location",[...new Set([...ex??[],e])]):e_("location",(ex??[]).filter(t=>t!==e))},[ej,ex,e_]),eH=(0,a.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!ej||0===ey.length)return null;let e=Array.isArray(ex)?ex:[],a=ey.length>0&&ey.every(t=>e.includes(t)),n=e.length>0;return eM?(0,t.jsx)(i.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(ea(!0),e_("location",[...ey]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(i.f,{color:"secondary",checked:a,indeterminate:n&&!a,onChange:e=>{ea(!0),e.target.checked?e_("location",[...ey]):e_("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:a}=e;return a.id?(0,t.jsx)(i.f,{color:"secondary",checked:!eM&&!!ex?.includes(a.id),onChange:eR(a.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:a}=e;return a.address?(0,t.jsxs)(c.f,{children:[(0,t.jsx)(u.f,{children:a.address.addressLine1}),(0,t.jsx)(u.f,{children:a.address.postCode})]}):(0,t.jsx)(u.f,{children:"Please add"})}},...ej?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:a}=e;return a.customerId&&a.customer?(0,t.jsx)(q.f,{color:"secondary",href:`/dashboard/customers/view?id=${a.customerId}`,onClick:e=>e.stopPropagation(),children:a.customer}):null}}]:[]],[ey,eM,ej,ex,eR,ea,e_]),eO=(0,a.useMemo)(()=>(eS??[]).map(e=>({id:ej?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[ej,eS]);if(eI)return(0,t.jsx)(c.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eG={id:(0,j.G)(A,L)};return(0,t.jsx)(o.p,{...ed,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:ep(e=>{let t="admin"===A&&ej&&!x&&!et&&ey.length>0?{...e,location:[...ey]}:e,a=e$?(0,f.f)(e.modules,p.f[D]?.map(e=>e.name)??[]):void 0;C(a?{...t,modules:a}:t,eb?.meta)}),children:[(0,t.jsx)(S,{}),U&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{paddingTop:1,children:[(0,j.G)(A,L)&&(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"role",control:eu,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)($.f,{value:a,onChange:(e,t)=>n(t),label:"Role",options:eo,variant:"standard",color:"secondary",error:!!em?.role,helperText:em?.role?.message||em?.role?.value?.message})}},z?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"position",control:eu,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:a||"",onChange:e=>n(e.target.value||null),InputLabelProps:{shrink:!!a},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,j.u)({accountType:A,role:eg?.value,hasRole:L})&&eb?.id!==w.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"invoiceThreshold",control:eu,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:a,onChange:n,InputLabelProps:{shrink:!!a},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"quoteThreshold",control:eu,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:a,onChange:n,InputLabelProps:{shrink:!!a},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(c.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(u.f,{sx:E.title,children:"Contact user"}),(0,t.jsx)(o.e,{name:"isContact",control:eu,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(h.f,{formControlProps:{sx:{m:0}},stackProps:em.isContact?E.radioGroupError:E.radioGroup,error:!!em.isContact,value:a,onChange:n,options:G,labelLeft:!0,helperText:em.isContact?.message})}},z?"contact-edit-mode":"contact-create-mode")]}),e$&&(0,t.jsx)(m.f,{role:D})]}),O.includes(D)&&x!==w.id&&B&&(0,t.jsxs)(s.f,{sx:em.location?E.locationError:{},children:[(0,t.jsx)(u.f,{sx:E.title,children:"Locations"}),ej&&P&&(0,t.jsx)(d.f,{fullWidth:!0,value:Y,onChange:e=>{X(e.target.value),k.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!Y},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)(y.s,{...k,columnVisibilityModel:eG,totalCount:eF.aggregate.totalCount,columns:eH,loading:eP,rows:eO,autoHeight:!0}),(0,t.jsx)(o.e,{control:eu,name:"location",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}})]})]}),x&&(0,t.jsx)(o.e,{control:eu,name:"id",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}}),U&&(0,t.jsx)(o.e,{control:eu,name:"accountId",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}}),Z&&(0,t.jsx)(o.e,{control:eu,name:"accountUserId",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}})]})})}],697871)},56271,577372,403901,546788,498813,e=>{var t=e.i(391398),a=e.i(813843),n=e.i(115871);let o=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],r=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],s={customer_user:o,admin_user:o,supplier_owner:r,supplier_manager:r,supplier_user:r,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...r]};e.s(["f",0,s],577372);var i=e.i(191788),l=e.i(422411),c=e.i(152078),d=e.i(799083),u=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:o}=e,{control:r,watch:p,setValue:f}=(0,l.M)(),h=!!p("modules.jobHistoryAll"),_=(0,i.useMemo)(()=>s[o]||[],[o]);return(0,i.useEffect)(()=>{h&&f("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[h,f]),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(n.f,{sx:m,children:"Permissions"}),(0,t.jsx)(a.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:_.map(e=>{let a="jobHistorySupplier"===e.name&&h;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:r,render:n=>{let{value:o,onChange:r}=n;return(0,t.jsx)(c.f,{disabled:a,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(d.f,{color:"secondary",checked:!!o,disabled:a,onChange:e=>r(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let p=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let a=e??{};return Object.fromEntries(p.map(e=>[e,t.includes(e)&&!0===a[e]]))}],403901);var f=e.i(426778);let h="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",_=(0,f.t)().shape({id:(0,f.H)().nullable().optional(),accountId:(0,f.H)().nullable().optional(),nameFirst:(0,f.x)().required(),nameLast:(0,f.x)().required(),email:(0,f.x)().required().email(),phone:(0,f.x)().required(),status:(0,f.x)().when("$hasRole",(e,t)=>{let[a]=e;return a?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,f.t)().nullable().shape({label:(0,f.x)(),value:(0,f.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[a,n,o]=e;return a?n?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):o&&"number"==typeof o&&o>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[a,n]=e;return a&&n&&"number"==typeof n&&n>0?t.required("Role is required"):t.nullable()}),userId:(0,f.H)().nullable().optional(),accountUserId:(0,f.H)().nullable().optional(),position:(0,f.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,f.x)().nullable(),otherwise:()=>(0,f.x)().nullable()}),isContact:(0,f.x)().when("accountId",{is:e=>!!e,then:()=>(0,f.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[a,n,o]=e;return o?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):a&&n?t.oneOf(["yes"],h).required(h):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,f.x)().nullable().optional()}),location:(0,f.k)().of((0,f.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[a,n]=e;return!a||n?t.nullable().optional():t.required()})});e.s(["f",0,_],546788);var g=e.i(159080);let x=g.f`
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
`,I=g.f`
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
`;e.s(["a",0,I,"R",0,b,"E",0,x],498813)},920475,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e.r(421506)),r=e.r(391398);a.default=(0,o.default)((0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},870307,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e.r(421506)),r=e.r(391398);a.default=(0,o.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var a=e.i(231637);e.s(["f",()=>a.f],524057)}])})();