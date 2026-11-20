(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[215843,e=>{var t=e.i(391398),a=e.i(222351),n=e.i(377198);e.s(["f",0,e=>{let{file:o,...r}=e,s=(0,n.f)(o);return(0,t.jsx)(a.f,{src:s,...r})}])},122989,e=>{var t=e.i(391398),a=e.i(280445),n=e.i(668921),o=e.i(231637),r=e.i(901004),s=e.i(539117),i=e.i(471973);let l=(0,a.f)(n.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),c=(0,a.f)(o.f)(e=>{let{theme:t,variant:a}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===a&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:a,variant:n,label:o,options:d,value:u,onChange:m,helperText:f,error:h,hideLabel:p,renderOption:x,...g}=e;return(0,t.jsxs)(l,{variant:n,fullWidth:a,error:h,hiddenLabel:p,children:[!p&&(0,t.jsx)(c,{variant:n,children:o}),(0,t.jsx)(s.f,{fullWidth:a,displayEmpty:!0,value:u||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=d.find(e=>e.value===u);return e?e.label:""},error:h,...g,children:d.length?d.map(e=>(0,t.jsx)(r.f,{value:e.value,disabled:e.disabled,children:x?x(e):e.label},e.value)):(0,t.jsx)(r.f,{disabled:!0,value:"",children:"No options"})}),f&&(0,t.jsx)(i.f,{error:h,children:f})]})}])},894842,e=>{e.s(["f",0,e=>e&&!e.allowed?e.reason:void 0])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let a=t?.medium?.meta?.thumbnails,n=a?.find?.(e=>"small"===e.name);return n?.relativePath||t.medium.filename||null}])},588964,e=>{var t=e.i(391398),a=e.i(691567),n=e.i(668921),o=e.i(152078),r=e.i(471973),s=e.i(606255),i=e.i(984636),l=e.i(530252),c=e.i(813843),d=e.i(115871),u=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},f=e=>{let a=(0,u.f)(e,m),{label:f,options:p,error:x,helperText:g,stackProps:y={},formControlProps:b={},labelLeft:v}=a,_=e=>{let{children:a}=e;return(0,t.jsx)(t.Fragment,{children:a})};return(0,t.jsxs)(n.f,{sx:{m:3},error:x,variant:"standard",...b,children:[(0,t.jsxs)(c.f,{...v&&h,children:[f&&(0,t.jsx)(s.f,{id:"radio-group",color:"secondary",children:f}),(0,t.jsx)(i.f,{...a,"aria-labelledby":"radio-group",children:(0,t.jsx)(c.f,{...y,children:p.map(e=>{let{value:a,label:n,icon:r,ParentComponent:s=_}=e;return(0,t.jsx)(s,{children:(0,t.jsx)(o.f,{value:a,control:(0,t.jsx)(l.f,{color:"secondary"}),label:(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r,(0,t.jsx)(d.f,{children:n})]})})})})})})]}),(0,t.jsx)(r.f,{children:g})]})};f.propTypes={label:a.default.string,options:a.default.arrayOf(a.default.shape({label:a.default.string.isRequired,value:a.default.any.isRequired,ParentComponent:a.default.elementType})),error:a.default.bool,helperText:a.default.string,stackProps:a.default.object,formControlProps:a.default.object,labelLeft:a.default.bool};let h={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,f])},39059,e=>{var t=e.i(159080);let a=t.f`
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
`,n=t.f`
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
`,o=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,r=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,s=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,i=t.f`
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
`,c=t.f`
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
`;e.s(["u",0,c,"q",0,r,"_",0,i,"x",0,n,"k",0,a,"f",0,s,"l",0,l,"V",0,o])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),a=e.i(191788),n=e.i(432171),o=e.i(422411),r=e.i(424894),s=e.i(738251),i=e.i(799083),l=e.i(76381),c=e.i(813843),d=e.i(652148),u=e.i(115871),m=e.i(56271),f=e.i(577372),h=e.i(403901),p=e.i(588964),x=e.i(546788),g=e.i(594301),y=e.i(510447),b=e.i(894842),v=e.i(494575),_=e.i(498813),C=e.i(39059),j=e.i(219281),I=e.i(824451),$=e.i(292802),w=e.i(74633),q=e.i(889231),A=e.i(164056),k=e.i(658524),L=e.i(159974),T=e.i(589200),U=e.i(524057),S=e.i(207646),F=e.i(255419),N=e.i(948574);let P=e=>{let{emailDisabled:a=!1,emailRefusal:n}=e,{hasRole:r}=(0,g.f)(),{control:s,formState:{errors:i}}=(0,o.M)();return(0,t.jsxs)(c.f,{width:"100%",gap:1,children:[(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"nameFirst",control:s,defaultValue:"",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"First name",value:a,onChange:n,error:!!i?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"nameLast",control:s,defaultValue:"",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Last name",value:a,onChange:n,error:!!i?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"email",control:s,defaultValue:"",render:e=>{let{value:o,onChange:r}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:o,onChange:r,disabled:a,error:!!i?.email,helperText:n,FormHelperTextProps:F.f,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"phone",control:s,defaultValue:"",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Mobile",value:a,onChange:n,error:!!i?.phone,fullWidth:!0})}})]}),r([...N.x,...N.H,...N.z,...N.Q])&&(0,t.jsx)(o.e,{name:"status",control:s,defaultValue:"active",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsxs)(T.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(U.f,{children:"Status"}),(0,t.jsx)(k.f,{value:a,onChange:n,error:!!i?.status,children:S.f.map(e=>(0,t.jsx)(L.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(o.e,{name:"userId",control:s,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var M=e.i(122965),B=e.i(159080);let W=B.f`
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
        userLocations: User_Account_Locations(
          where: { Account_Location: { accountId: { _eq: $accountId } } }
        ) {
          accountLocationId
        }
      }
    }
  }
`,E=B.f`
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
`,R=B.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,H=B.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,O=["customer_user","admin_user"],G=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],V=[],D={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:v.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:v,accountId:A,accountType:k,submit:L}=e,{hasRole:T,user:U}=(0,g.f)(),S=(0,a.useMemo)(()=>v?[v]:V,[v]),{emailOf:F}=(0,y.f)(S),N=v?F(v):void 0,{reference:B,pagination:Y}=(0,M.f)(),Q=T(["admin_owner","admin_manager"]),z=!(T("admin_user")&&"admin"===k),[K,J]=(0,a.useState)(!0),[X,Z]=(0,a.useState)(""),[ee,et]=(0,a.useState)(!1),[ea,en]=(0,a.useState)(!1),[eo,er]=(0,a.useState)(""),[es,ei]=(0,a.useState)(null),[el,ec]=(0,a.useState)(!1),ed=(0,a.useRef)(!1),eu=[...$.f];switch(k){case"supplier":eu.push({label:"Operative",value:"contractor"});break;case"admin":eu.push({label:"Helpdesk",value:"helpdesk"})}let em=!A||"customer"!==k,{data:ef,loading:eh}=(0,n.t)(_.a,{skip:em,variables:{accountId:A,excludeUserId:v??-1}}),ep="customer"===k&&!!A&&!em&&!eh&&!((ef?.accountUsers?.length??0)>0),ex="customer"===k&&!!A,eg=(0,o.G)({defaultValues:{id:v,accountId:A,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,r.yupResolver)(x.f),context:{hasRole:(0,j.G)(k,T)&&!!A,hasLocation:!O.includes(U.role)&&O.includes(X),adminImplicitLocations:"admin"===k&&"admin_user"===X&&!v&&!el,hasOneOwner:K,isCustomerAccount:ex,mustKeepContactUser:ep,contactRulesStillLoading:ex&&eh}}),{control:ey,errors:eb,handleSubmit:ev,watch:e_,reset:eC,setValue:ej}=eg,eI=e_("role"),e$=e_("location");(0,a.useEffect)(()=>{eI?.value&&Z(`${k}_${eI?.value}`)},[k,eI?.value]);let{data:{user:ew}={user:null},loading:eq}=(0,n.t)(W,{skip:!v,variables:{userId:v,accountId:A,includeAccount:!!A},onCompleted:e=>{let{user:t}=e;if(!t)return;let a=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(A)}),n={id:t.id,accountId:a?.account.id||A||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...a?{accountUserId:a.id,accountId:a.account.id,role:eu?.find?.(e=>e?.value===a?.role),position:a.position||null,isContact:!0===a.isContact?"yes":"no",status:a.status,location:"admin"===k&&"user"===a.role?void 0:a.userLocations.map(e=>e.accountLocationId),modules:a.modules}:{}};et(!0),eC(n),Z(`${k}_${n.role?.value||""}`),ei(n.accountUserId||null)}});(0,n.t)(_.R,{skip:!A,variables:{accountId:A,userId:v},onCompleted:e=>{let{accountUsers:t}=e;J(!(t.length>0))}});let eA="admin_user"===X,ek=null!=f.f[X]&&v!==U.id&&z,{data:eL}=(0,n.t)(R,{skip:!eA||null==A,variables:{accountId:A}}),eT=(0,a.useMemo)(()=>eL?.location?.map(e=>e.id)??[],[eL]),{data:{restrictedLocations:eU=[]}={restrictedLocations:[]},loading:eS}=(0,n.t)(H,{skip:!eA||!es,variables:{accountUserId:es}});(0,a.useEffect)(()=>{eA?!es||eS||ea||(ej("location",eU.map(e=>e.locationId)),en(!0)):en(!1)},[es,ea,eA,eU,eS,ej]),(0,a.useEffect)(()=>{!ed.current||eA||v||(ej("location",void 0),ec(!1)),ed.current=eA},[eA,ej,v]);let{data:{location:eF,meta:eN}={location:[],meta:{aggregate:{totalCount:0}}},loading:eP}=(0,n.t)(C.u,{skip:eA||!A,variables:{accountId:A,...Y}}),{data:{location:eM,meta:eB}={location:[],meta:{aggregate:{totalCount:0}}},loading:eW}=(0,n.t)(E,{skip:!eA||!A,variables:{accountId:A,q:""!==eo?`%${eo}%`:null,...Y}}),eE=eA?eM:eF,eR=eA?eB:eN,eH=eA?eW:eP,eO="admin"===k&&eA&&!v&&!el,eG=(0,a.useCallback)(e=>t=>{eA&&ec(!0),t.target.checked?ej("location",[...new Set([...e$??[],e])]):ej("location",(e$??[]).filter(t=>t!==e))},[eA,e$,ej]),eV=(0,a.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!eA||0===eT.length)return null;let e=Array.isArray(e$)?e$:[],a=eT.length>0&&eT.every(t=>e.includes(t)),n=e.length>0;return eO?(0,t.jsx)(i.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(ec(!0),ej("location",[...eT]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(i.f,{color:"secondary",checked:a,indeterminate:n&&!a,onChange:e=>{ec(!0),e.target.checked?ej("location",[...eT]):ej("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:a}=e;return a.id?(0,t.jsx)(i.f,{color:"secondary",checked:!eO&&!!e$?.includes(a.id),onChange:eG(a.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:a}=e;return a.address?(0,t.jsxs)(c.f,{children:[(0,t.jsx)(u.f,{children:a.address.addressLine1}),(0,t.jsx)(u.f,{children:a.address.postCode})]}):(0,t.jsx)(u.f,{children:"Please add"})}},...eA?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:a}=e;return a.customerId&&a.customer?(0,t.jsx)(q.f,{color:"secondary",href:`/dashboard/customers/view?id=${a.customerId}`,onClick:e=>e.stopPropagation(),children:a.customer}):null}}]:[]],[eT,eO,eA,e$,eG,ec,ej]),eD=(0,a.useMemo)(()=>(eE??[]).map(e=>({id:eA?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[eA,eE]);if(eq)return(0,t.jsx)(c.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eY={id:(0,j.G)(k,T)};return(0,t.jsx)(o.p,{...eg,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:ev(e=>{let t="admin"===k&&eA&&!v&&!el&&z&&eT.length>0?{...e,location:[...eT]}:e,a=ek?(0,h.f)(e.modules,f.f[X]?.map(e=>e.name)??[]):void 0;L(a?{...t,modules:a}:t)}),children:[(0,t.jsx)(P,{emailDisabled:!!v&&N?.allowed!==!0,emailRefusal:(0,b.f)(N)}),A&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.f,{paddingTop:1,children:[(0,j.G)(k,T)&&(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"role",control:ey,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(I.f,{value:a,onChange:(e,t)=>n(t),label:"Role",options:eu,variant:"standard",color:"secondary",error:!!eb?.role,helperText:eb?.role?.message||eb?.role?.value?.message})}},ee?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"position",control:ey,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:a||"",onChange:e=>n(e.target.value||null),InputLabelProps:{shrink:!!a},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,j.u)({accountType:k,role:eI?.value,hasRole:T})&&ew?.id!==U.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"invoiceThreshold",control:ey,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:a,onChange:n,InputLabelProps:{shrink:!!a},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"quoteThreshold",control:ey,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,value:a,onChange:n,InputLabelProps:{shrink:!!a},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(c.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(u.f,{sx:D.title,children:"Contact user"}),(0,t.jsx)(o.e,{name:"isContact",control:ey,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(p.f,{formControlProps:{sx:{m:0}},stackProps:eb.isContact?D.radioGroupError:D.radioGroup,error:!!eb.isContact,value:a,onChange:n,options:G,labelLeft:!0,helperText:eb.isContact?.message})}},ee?"contact-edit-mode":"contact-create-mode")]}),ek&&(0,t.jsx)(m.f,{role:X})]}),O.includes(X)&&v!==U.id&&z&&(0,t.jsxs)(s.f,{sx:eb.location?D.locationError:{},children:[(0,t.jsx)(u.f,{sx:D.title,children:"Locations"}),eA&&Q&&(0,t.jsx)(d.f,{fullWidth:!0,value:eo,onChange:e=>{er(e.target.value),B.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!eo},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)(w.s,{...B,columnVisibilityModel:eY,totalCount:eR.aggregate.totalCount,columns:eV,loading:eH,rows:eD,autoHeight:!0}),(0,t.jsx)(o.e,{control:ey,name:"location",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}})]})]}),v&&(0,t.jsx)(o.e,{control:ey,name:"id",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}}),A&&(0,t.jsx)(o.e,{control:ey,name:"accountId",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}}),es&&(0,t.jsx)(o.e,{control:ey,name:"accountUserId",render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:a,onChange:n})}})]})})}],697871)},56271,577372,403901,546788,498813,219281,e=>{var t=e.i(391398),a=e.i(813843),n=e.i(115871);let o=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],r=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],s={customer_user:o,admin_user:o,supplier_owner:r,supplier_manager:r,supplier_user:r,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...r]};e.s(["f",0,s],577372);var i=e.i(191788),l=e.i(422411),c=e.i(152078),d=e.i(799083),u=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:o}=e,{control:r,watch:f,setValue:h}=(0,l.M)(),p=!!f("modules.jobHistoryAll"),x=(0,i.useMemo)(()=>s[o]||[],[o]);return(0,i.useEffect)(()=>{p&&h("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[p,h]),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(n.f,{sx:m,children:"Permissions"}),(0,t.jsx)(a.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:x.map(e=>{let a="jobHistorySupplier"===e.name&&p;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:r,render:n=>{let{value:o,onChange:r}=n;return(0,t.jsx)(c.f,{disabled:a,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(d.f,{color:"secondary",checked:!!o,disabled:a,onChange:e=>r(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let f=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let a=e??{};return Object.fromEntries(f.map(e=>[e,t.includes(e)&&!0===a[e]]))}],403901);var h=e.i(426778);let p="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",x=(0,h.t)().shape({id:(0,h.H)().nullable().optional(),accountId:(0,h.H)().nullable().optional(),nameFirst:(0,h.x)().required(),nameLast:(0,h.x)().required(),email:(0,h.x)().required().email(),phone:(0,h.x)().required(),status:(0,h.x)().when("$hasRole",(e,t)=>{let[a]=e;return a?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,h.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,h.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,h.t)().nullable().shape({label:(0,h.x)(),value:(0,h.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[a,n,o]=e;return a?n?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):o&&"number"==typeof o&&o>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[a,n]=e;return a&&n&&"number"==typeof n&&n>0?t.required("Role is required"):t.nullable()}),userId:(0,h.H)().nullable().optional(),accountUserId:(0,h.H)().nullable().optional(),position:(0,h.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,h.x)().nullable(),otherwise:()=>(0,h.x)().nullable()}),isContact:(0,h.x)().when("accountId",{is:e=>!!e,then:()=>(0,h.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[a,n,o]=e;return o?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):a&&n?t.oneOf(["yes"],p).required(p):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,h.x)().nullable().optional()}),location:(0,h.k)().of((0,h.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[a,n]=e;return!a||n?t.nullable().optional():t.required()})});e.s(["f",0,x],546788);var g=e.i(159080);let y=g.f`
  query FindOwnersByAccount($accountId: Int, $userId: Int) {
    accountUsers: Account_User(
      where: { role: { _eq: "owner" }, accountId: { _eq: $accountId }, userId: { _neq: $userId } }
    ) {
      id
      role
    }
  }
`,b=g.f`
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
`;e.s(["a",0,b,"R",0,y],498813);var v=e.i(948574);e.s(["G",0,(e,t)=>"customer"!==e&&"supplier"!==e||t([...v.x,...v.H,...v.z,...v.Q]),"u",0,e=>{let{accountType:t,role:a,hasRole:n}=e;return n(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${a}`):n(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${a}`):!!n(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${a}`)}],219281)},510447,e=>{var t=e.i(191788),a=e.i(185242);let n=[],o={},r={},s=e=>e.length?[...new Set(e)].sort((e,t)=>e-t).join(","):null;e.s(["f",0,function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,l=(0,t.useMemo)(()=>s(e),[e]),c=(0,t.useMemo)(()=>s(i),[i]),d=(0,t.useMemo)(()=>({ids:l,accountIds:c}),[l,c]),{data:u,refetch:m}=(0,a.f)("/user/actions",{queryKey:`user-actions-${l??""}-${c??""}`,params:d,skip:!l&&!c}),f=u?.users??o,h=u?.accounts??r,p=(0,t.useCallback)(e=>f[e]?.editDetails,[f]),x=(0,t.useCallback)(e=>f[e]?.editEmail,[f]),g=(0,t.useCallback)(e=>p(e)?.allowed===!0,[p]);return{detailsOf:p,emailOf:x,mayEditDetails:g,mayEditLink:(0,t.useCallback)((e,t)=>null!=t&&f[e]?.editLink[t]?.allowed===!0,[f]),mayAddUser:(0,t.useCallback)((e,t)=>{let a=h[e]?.addUser;return!!a&&(t?a[t]?.allowed===!0:Object.values(a).some(e=>{let{allowed:t}=e;return t}))},[h]),refetch:m}}])},884288,e=>{var t=e.i(191788),a=e.i(511667),n=e.i(21557),o=e.i(974261),r=e.i(220303);let s=e=>void 0===e?void 0:e||null,i=e=>({position:e.position,isContact:"yes"===e.isContact,modules:e.modules,locationIds:e.location??void 0}),l=e=>({nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email,phone:e.phone,invoiceThreshold:s(e.invoiceThreshold),quoteThreshold:s(e.quoteThreshold)});e.s(["f",0,function(){let{failurePrefix:e=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{show:s}=(0,n.f)(),c=t=>{s({content:`${e}${t instanceof r.Q&&t.status<500?t.message:"The user could not be saved"}`,severity:t instanceof r.Q&&403===t.status?"warning":"error"})},[d]=(0,a.f)("/user",{queryKey:"user-add",method:"POST",baseUrl:o.M,onError:c}),[u]=(0,a.f)("/user/:userId",{queryKey:"user-edit",method:"PUT",baseUrl:o.M,onError:c}),m=(0,t.useCallback)(async e=>!!await d({body:e}),[d]),f=(0,t.useCallback)(async(e,t)=>!!await u({pathParams:{userId:e},body:t}),[u]),h=(0,t.useCallback)(e=>e.id?f(e.id,{...l(e),status:e.accountUserId?void 0:e.status,...e.accountUserId&&{link:{...i(e),id:e.accountUserId,role:e.role?.value,status:e.status}}}):m({...l(e),...i(e),accountId:e.accountId,role:e.role?.value||"user",status:e.status||"active"}),[m,f]);return{addUser:m,editUser:f,saveUser:h}}],884288)},920475,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=n(e.r(421506)),r=e.r(391398);a.default=(0,o.default)((0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,255419,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var a=e.i(231637);e.s(["f",()=>a.f],524057),e.s(["f",0,{disabled:!1}],255419)},373398,e=>{var t=e.i(391398),a=e.i(738251),n=e.i(115871),o=e.i(191788),r=e.i(203828),s=e.i(362537),i=e.i(877341),l=e.i(432171),c=e.i(215843),d=e.i(920475),u=e.i(755548),m=e.i(800884),f=e.i(76381),h=e.i(917569),p=e.i(88152),x=e.i(813843),g=e.i(451221),y=e.i(891723),b=e.i(74633),v=e.i(239964),_=e.i(128662),C=e.i(396413),j=e.i(697871),I=e.i(686255),$=e.i(530568),w=e.i(594301),q=e.i(411331),A=e.i(21557),k=e.i(436703),L=e.i(60903),T=e.i(93198),U=e.i(422411),S=e.i(683125),F=e.i(280445),N=e.i(652148),P=e.i(587369),M=e.i(106997),B=e.i(637129),W=e.i(201894);let E=u.f,R=e=>{let{initialFilters:a,filters:n,setFilters:o,open:r,onClose:s}=e,i=(0,P.f)("(max-width: 400px)"),[l,c]=(0,B.f)(`form_data_${a.filterType}`,a),d={q:l.q||"",status:l.status?{label:"active"===l.status?"Active":"Inactive",value:l.status}:null,accountType:((e,t)=>{if(!t)return null;let a=e.find(e=>String(e.value)===t);return a?{label:a.label,value:String(a.value)}:null})(W.h,l.accountType),isContact:l.isContact?{label:"yes"===l.isContact?"Yes":"No",value:l.isContact}:null},{control:u,handleSubmit:m,register:f,reset:h,errors:g}=(0,U.G)({defaultValues:d});return(0,t.jsx)(H,{open:r,onClose:s,children:(0,t.jsx)(p.f,{sx:{minWidth:i?"300px":"400px",padding:"20px 40px"},children:(0,t.jsxs)("form",{onSubmit:m(e=>{let t={...n,q:e.q||"",status:e.status?.value||null,accountType:e.accountType?.value||null,isContact:e.isContact?.value||null};o(t),c(t),h(e),s()}),children:[(0,t.jsxs)(x.f,{spacing:4,children:[(0,t.jsx)(N.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:f}),(0,t.jsx)(U.e,{name:"accountType",control:u,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(M.f,{color:"secondary",value:a,onChange:(e,t)=>n(t),options:W.h,textFieldProps:{label:"Select account type",variant:"standard",color:"secondary",error:g.accountType,helperText:g.accountType?.message}})}}),(0,t.jsx)(U.e,{name:"status",control:u,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(M.f,{color:"secondary",value:a,onChange:(e,t)=>n(t),options:W.P,textFieldProps:{label:"Select status",variant:"standard",color:"secondary"}})}}),(0,t.jsx)(U.e,{name:"isContact",control:u,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(M.f,{color:"secondary",value:a,onChange:(e,t)=>n(t),options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],textFieldProps:{label:"Contact user",variant:"standard",color:"secondary"}})}})]}),(0,t.jsxs)(x.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,t.jsx)(E,{variant:"contained",color:"danger",onClick:()=>{o(a),h(d),s(),c(a)},children:"Cancel"}),(0,t.jsx)(E,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},H=(0,F.f)(S.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}));var O=e.i(159080);let G=O.f`
  query GetUsersV2(
    $where: User_bool_exp!
    $accountUsersNestedWhere: Account_User_bool_exp!
    $limit: Int
    $offset: Int
    $orderBy: User_order_by!
  ) {
    users: User(where: $where, limit: $limit, offset: $offset, order_by: [$orderBy]) {
      id
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
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
      tenantBookings: TenantBookings(order_by: [{ id: desc }], limit: 1) {
        id
        status
      }
      accounts: Account_Users(where: $accountUsersNestedWhere, order_by: [{ id: asc }]) {
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
    meta: User_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,V=O.f`
  query GetTenantBookingByUserId($userId: Int!) {
    tenantBookings: TenantBooking(
      where: { userId: { _eq: $userId } }
      order_by: [{ id: desc }]
      limit: 1
    ) {
      id
      bookingStart
      bookingEnd
      notes
      status
      createdAt
      locationId
      user: User {
        id
        fullName
        nameFirst
        nameLast
        email
        phone
        accountUsers: Account_Users(where: { Account: { type: { _eq: "tenant" } } }) {
          id
          modules
        }
      }
    }
  }
`,D=e=>[{email:{_ilike:e}},{nameFirst:{_ilike:e}},{nameLast:{_ilike:e}},{fullName:{_ilike:e}}],Y=e=>"active"===e||"inactive"===e?e:"inactive";var Q=e.i(884288),z=e.i(510447),K=e.i(122965),J=e.i(472552);let X={filterType:"users_table_v2",q:"",status:"active",accountType:null,isContact:null},Z={admin:"admins",customer:"customers",supplier:"suppliers"},ee=e=>{let{initialFilters:a}=e,U=(0,g.f)(),S=(0,o.useMemo)(()=>({admin:{borderColor:U.palette.danger.main,color:U.palette.danger.main},customer:{borderColor:U.palette.secondary.main,color:U.palette.secondary.main},supplier:{borderColor:U.palette.success.main,color:U.palette.success.main},tenant:{borderColor:U.palette.info.main,color:U.palette.info.main}}),[U]),F=(0,q.f)(),N=(0,A.f)(),{user:P,hasRole:M}=(0,w.f)(),{saveUser:B}=(0,Q.f)(),E=(0,T.r)(),{reference:H,pagination:O,order:ee}=(0,K.f)({initialSort:[{item:"createdAt",order:"desc"}]}),et=a??X,[ea,en]=(0,o.useState)(et),[eo,er]=(0,o.useState)(!1),[es,ei]=(0,o.useState)(!1),{accountUsersNestedWhere:el,usersWhere:ec}=(0,o.useMemo)(()=>(e=>{let{accountType:t,isContact:a,status:n,q:o}=e,r={};t&&(r.Account={type:{_eq:t}}),a&&(r.isContact={_eq:"yes"===a});let s={...r},i={},l=(e=>{let t=e.trim();if(!t)return null;let a=t.split(/\s+/).filter(Boolean);return a.length<=1?{_or:D(`%${t}%`)}:{_and:a.map(e=>({_or:D(`%${e}%`)}))}})(o.trim());if(n)if("tenant"===t)i.TenantBookings={status:{_eq:n}};else if(t)s.status={_eq:n};else{let e=[{Account_Users:{...s,status:{_eq:n},Account:{...s.Account,type:{_neq:"tenant"}}}},{TenantBookings:{status:{_eq:n}},Account_Users:{...s,Account:{...s.Account,type:{_eq:"tenant"}}}}];return l?i._and=[{_or:e},l]:i._or=e,{accountUsersNestedWhere:r,usersWhere:i}}return Object.keys(s).length>0&&(i.Account_Users=s),l&&(i._and?i._and=[...i._and,l]:Object.keys(i).length>0?(i._and=[{...i},l],Object.keys(i).forEach(e=>{"_and"!==e&&delete i[e]})):Object.assign(i,l)),{accountUsersNestedWhere:r,usersWhere:i}})({accountType:ea.accountType,isContact:ea.isContact,status:ea.status,q:ea.q}),[ea.accountType,ea.isContact,ea.q,ea.status]),ed=(0,o.useMemo)(()=>({...O,orderBy:ee?.[0]}),[O,ee]),{data:{users:eu,meta:em}={users:[],meta:{aggregate:{totalCount:0}}},loading:ef,refetch:eh}=(0,l.t)(G,{variables:{where:ec,accountUsersNestedWhere:el,...ed}}),ep=(0,o.useCallback)(e=>e.map(e=>{let t=e.accounts.find(e=>null!=e.account&&(!ea.accountType||e.account.type===ea.accountType))||e.accounts.find(e=>null!=e.account);if(!t)return null;let a=t.account?.type||null;return{id:e.id,name:`${e.nameFirst} ${e.nameLast}`,nameFirst:e.nameFirst,accountId:t.account?.id||null,accountType:a,accountName:t.account?.name||null,email:e.email,phone:e.phone||"",role:t.role||"",status:(e=>{let{accountType:t,accountUserStatus:a,tenantBookingStatus:n}=e;return"tenant"===t?Y(n):Y(a)})({accountType:a,accountUserStatus:t.status,tenantBookingStatus:e.tenantBookings?.[0]?.status}),position:t.position||"N/A",isContact:!!t.isContact,createdAt:(0,s.default)(e.createdAt).format("YYYY-MM-DD"),media:e.media}}).filter(Boolean),[ea.accountType]),ex=(0,o.useCallback)(e=>ep(e).map(e=>({name:e.name,accountType:e.accountType||"",accountName:"tenant"===e.accountType?"":e.accountName||"",email:e.email,phone:e.phone,role:e.role,position:e.position,contactUser:e.isContact?"Yes":"No",status:e.status,createdAt:e.createdAt})),[ep]),[eg]=(0,i.f)(G,{fetchPolicy:"no-cache",onCompleted:e=>{let{users:t}=e;try{let e=J.default.unparse(ex(t),{escapeFormulae:/^[=+@\t\r]/}),a="data:application/octet-stream,"+encodeURIComponent(e);(0,L.f)(a,"users.csv")}finally{ei(!1)}},onError:()=>{ei(!1),N.show({content:"Error while exporting users CSV",severity:"error"})}}),ey=(0,o.useMemo)(()=>ep(eu),[ep,eu]),eb=(0,o.useMemo)(()=>ey.map(e=>{let{id:t}=e;return t}),[ey]),ev=(0,o.useMemo)(()=>P?.accountId?[P.accountId]:[],[P?.accountId]),{mayEditLink:e_,mayAddUser:eC,refetch:ej}=(0,z.f)(eb,ev),eI=(0,o.useCallback)(async e=>{await B(e)&&(F.close(),eh(),ej())},[F,eh,ej,B]),[e$]=(0,i.f)(V,{fetchPolicy:"network-only",onCompleted:e=>{let a=e?.tenantBookings?.[0];a?F.show({title:"Edit tenant",content:(0,t.jsx)(I.f,{defaultValues:(0,$.f)(a,a.locationId),refetch:eh,offCanvas:F})}):N.show({content:"Tenant booking not found",severity:"error"})},onError:()=>{N.show({content:"Failed to load tenant details",severity:"error"})}}),ew=(0,o.useCallback)(e=>{let{row:a,accountId:n,accountType:o}=e,r=o||a?.accountType||ea.accountType||"customer",s=n??a?.accountId??null;a&&"tenant"===r?e$({variables:{userId:a.id}}):F.show({content:(0,t.jsx)(j.f,{userId:a?.id??null,accountId:s,accountType:r,submit:eI}),title:a?"Edit user":"admin"===r?"Add user":"Create user",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"60vw",lg2:"50vw"})},[e$,ea.accountType,F,eI]),eq=(0,o.useCallback)(e=>{(e?.stopPropagation(),P?.accountId)?ew({accountId:P.accountId,accountType:"admin"}):N.show({content:"Current admin account is not available",severity:"error"})},[ew,N,P?.accountId]),eA=(0,o.useCallback)(e=>{e.stopPropagation(),ei(!0);let t=em?.aggregate?.totalCount;eg({variables:{where:ec,accountUsersNestedWhere:el,..."number"==typeof t?{limit:t}:{},offset:0,orderBy:ee?.[0]||{createdAt:"desc"}}})},[el,eg,em?.aggregate?.totalCount,ee,ec]),ek=e=>[..."tenant"===e.accountType||e_(e.id,e.accountId)?[{context:"secondary",icon:"edit",onClick:t=>{t.stopPropagation(),ew({row:e})},tooltip:"Edit"}]:[],{context:"secondary",icon:"avatar",onClick:a=>{a.stopPropagation(),F.show({content:(0,t.jsx)(C.f,{category:"avatar",entity:"User",entityId:e.id,type:"image",refetch:eh}),submit:!1,title:"Upload avatar"})},tooltip:"Avatar"}],eL=[{headerName:"",field:"avatar",maxWidth:60,sortable:!1,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(c.f,{file:(0,k.f)(a.media),sx:{marginLeft:"15px",width:"24px",height:"24px"}})}},{flex:1,headerName:"Name",field:"nameFirst",minWidth:160,renderCell:e=>{let{row:t}=e;return t.name}},{flex:1,headerName:"Account type",field:"accountType",minWidth:150,sortable:!1,renderCell:e=>{let{row:a}=e;if(!a.accountType)return null;let n=a.accountType.toLowerCase(),o=S[n];return o?(0,t.jsx)(m.f,{variant:"outlined",label:`${n.charAt(0).toUpperCase()}${n.slice(1)}`,sx:{borderColor:o.borderColor,color:o.color,backgroundColor:"transparent"}}):null}},{flex:1,headerName:"Account name",field:"accountName",minWidth:170,sortable:!1,renderCell:e=>{let{row:a}=e,n=a.accountType?.toLowerCase()||"",o=Z[n],r=o&&a.accountId?`/dashboard/${o}/view?id=${a.accountId}`:"";return"tenant"!==n&&a.accountName?r?(0,t.jsx)(h.f,{color:"secondary",href:r,onClick:e=>e.stopPropagation(),underline:"hover",children:a.accountName}):a.accountName:""}},{flex:1,headerName:"Email address",field:"email",minWidth:220},{flex:1,headerName:"Contact user",field:"isContact",sortable:!1,renderCell:e=>{let{row:a}=e;return a.isContact?(0,t.jsx)(x.f,{direction:"row",width:"100%",alignItems:"center",justifyContent:"flex-start",children:(0,t.jsx)(d.default,{color:"error"})}):null}},{flex:1,headerName:"Phone",field:"phone",minWidth:120,sortable:!1},{flex:1,headerName:"Position",field:"position",minWidth:120,sortable:!1},{flex:1,headerName:"Role",field:"role",minWidth:120,sortable:!1,renderCell:e=>{let{row:t}=e;return t.role?`${t.role.charAt(0).toUpperCase()}${t.role.slice(1)}`:"-"}},{flex:1,headerName:"Status",field:"status",minWidth:120,sortable:!1,renderCell:e=>{let{row:a}=e,n="active"===a.status||"inactive"===a.status?a.status:"inactive";return(0,t.jsx)(m.f,{label:`${n.charAt(0).toUpperCase()}${n.slice(1)}`,color:W.d[n]})}},{flex:1,headerName:"Date added",field:"createdAt",minWidth:130},...M(["admin","customer","supplier"])?[{headerName:"Actions",field:"actions",minWidth:100,sortable:!1,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(v.f,{actionsData:ek,row:a})}}]:[]],eT=!!P?.accountId&&eC(P.accountId);return(0,t.jsxs)(x.f,{spacing:2,sx:{width:"100%",height:"100%",minHeight:0},children:[eo&&(0,t.jsx)(R,{initialFilters:et,filters:ea,setFilters:en,open:eo,onClose:()=>er(!1)}),(0,t.jsxs)(x.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(u.f,{variant:"contained",startIcon:(0,t.jsx)(y.default,{}),onClick:()=>er(!0),children:"Filters"}),(0,t.jsxs)(x.f,{direction:"row",spacing:2,children:[eT&&(0,t.jsx)(u.f,{variant:"contained",color:"secondary",onClick:eq,children:"Add new admin user"}),!E&&(0,t.jsx)(u.f,{startIcon:!es&&(0,t.jsx)("img",{src:"/static/icons/csv.svg"}),disabled:es,variant:"contained",color:"success",onClick:eA,children:es?(0,t.jsx)(f.f,{size:20,color:"secondary"}):"Export"})]})]}),(0,t.jsxs)(p.f,{sx:{p:"16px 0px",height:"calc(100% - 52px)",minHeight:0},children:[(0,t.jsx)(n.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Users"}),(ey?.length||ef)&&(0,t.jsx)(b.s,{...H,loading:ef,columns:eL,rows:ey,totalCount:em.aggregate.totalCount,autoHeight:!1,onRowClick:e=>{r.default.push(`/dashboard/users/view?id=${e.row.id}`)},containerHeight:"calc(100% - 52px)"}),!ey?.length&&!ef&&(0,t.jsx)(_.f,{imageSrc:"/static/icons/no_locations_found.svg",title:"No users",subtitleFirstLine:"No users found for selected filters.",subtitleSecondLine:"Adjust filters or create a new user.",buttonText:eT?"Add new admin user":void 0,onAction:eT?eq:void 0})]})]})},et={filterType:"users_table_v2",q:"",status:"active",accountType:null,isContact:null},ea=()=>(0,t.jsxs)(a.f,{sx:{p:3,height:"100%",minHeight:0,display:"flex",flexDirection:"column",overflow:"hidden",marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 258px)"},transition:"margin-left 0.5s ease"},children:[(0,t.jsxs)(a.f,{sx:{mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,t.jsx)(n.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600,mb:1},children:"Users"}),(0,t.jsx)(n.f,{variant:"body2",color:"text.secondary",children:"Manage all users across customers, suppliers, and admin company."})]}),(0,t.jsx)(a.f,{sx:{flex:1,minHeight:0},children:(0,t.jsx)(ee,{initialFilters:et})})]});var en=e.i(293965);let eo=()=>(0,t.jsx)(ea,{});eo.getLayout=function(e){return(0,t.jsx)(en.f,{children:e})},e.s(["default",0,eo],373398)}],315204,(e,t,a)=>{let n="/dashboard/users";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(373398)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);