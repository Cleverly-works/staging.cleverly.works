(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[215843,e=>{var t=e.i(391398),r=e.i(222351),n=e.i(377198);e.s(["f",0,e=>{let{file:a,...o}=e,i=(0,n.f)(a);return(0,t.jsx)(r.f,{src:i,...o})}])},864883,e=>{var t=e.i(890350);let r=[{value:t.T.VERIFIED,label:"Verified",color:"success"},{value:t.T.UNVERIFIED,label:"Unverified",color:"danger"}];e.s(["f",0,r])},690374,e=>{let t=(e,t)=>{let r=document.createElement("a");"string"==typeof r.download?(document.body.appendChild(r),r.download=t,r.href=e,r.click(),document.body.removeChild(r)):location.replace(e)};e.s(["h",0,(e,r)=>{let n=URL.createObjectURL(e);try{t(n,r)}finally{window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}},"f",0,t])},894842,e=>{e.s(["f",0,e=>e&&!e.allowed?e.reason:void 0])},667585,270070,728707,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(203828),a=e.i(362537),o=e.i(813843),i=e.i(88152),s=e.i(755548),l=e.i(115871),u=e.i(215843),c=e.i(432171),d=e.i(920475),m=e.i(239964),f=e.i(890854),h=e.i(128662),p=e.i(396413),g=e.i(39059),v=e.i(98762),b=e.i(498681),x=e.i(594301),y=e.i(411331),I=e.i(436703),_=e.i(697871),C=e.i(834862),j=e.i(188811),w=e.i(884288),$=e.i(510447);let q={width:"100%",height:"100%"},A={margin:"1em 0",paddingRight:"1em"},S={padding:"16px 0px",height:"calc(80vh - 22px)"},L={fontWeight:600,marginBottom:"15px"};e.s(["f",0,e=>{let{accountType:U,filters:k}=e,{initialData:T,ref:N}=(0,v.f)({filters:k}),M=(0,y.f)(),{user:R,hasRole:O}=(0,x.f)(),{can:F}=(0,b.f)(),{saveUser:E}=(0,w.f)(),{authStatus:D,tenantId:P}=(0,C.f)(),[H]=(0,j.f)(),{data:{users:W,meta:B}={users:[],meta:{aggregate:{totalCount:0}}},loading:G,refetch:V}=(0,c.t)(g.k,{variables:T}),Y=(0,r.useMemo)(()=>W.map(e=>{let{id:t}=e;return t}),[W]),{mayEditLink:z,refetch:K}=(0,$.f)(Y),Q=(0,r.useCallback)(async()=>{if("customer"!==U&&"supplier"!==U||!O("admin")||"authorized"!==D||!P)return;let e=Number(k.accountId);Number.isFinite(e)&&await H({body:{accountId:e}})},[U,k.accountId,O,H,D,P]),Z=e=>[...z(e.id,e.accountId)?[{context:"secondary",icon:"edit",onClick:er(e),tooltip:"Edit"}]:[],...e.id===R.id||F("media.attachUser")?[{context:"secondary",icon:"avatar",onClick:et(e),tooltip:"Avatar"}]:[]],J=[{headerName:"",field:"avatar",maxWidth:60,sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(u.f,{file:(0,I.f)(r.media),sx:{marginLeft:"15px",width:"24px",height:"24px"}})}},{flex:1,headerName:"Name",field:"name",minWidth:150,sortName:'{"nameFirst": "ORDER"}'},{flex:1,headerName:"Email address",field:"email",minWidth:250},{flex:1,headerName:"Contact user",field:"contactUser",sortable:!1,renderCell:e=>{let{row:r}=e;if(r.accountUser.isContact)return(0,t.jsx)(o.f,{direction:"row",width:"100%",alignItems:"center",justifyContent:"flex-start",children:(0,t.jsx)(d.default,{color:"error"})})}},{flex:1,headerName:"Phone",field:"phone",minWidth:100,sortable:!1},{flex:1,headerName:"Position",field:"position",minWidth:100,sortable:!1},{flex:1,headerName:"Role",field:"role",minWidth:110,sortable:!1},{flex:1,headerName:"Status",field:"status",minWidth:110,sortable:!1},{flex:1,headerName:"Date added",field:"createdAt",minWidth:130},...O(["admin","customer","supplier"])?[{headerName:"Actions",field:"actions",minWidth:100,sortable:!1,renderCell:e=>{let{row:r}=e;return Z(r).length>0&&(0,t.jsx)(m.f,{actionsData:Z,row:r})}}]:[]],X=(0,r.useMemo)(()=>{let e=[];return W.forEach(t=>{let r=null;r=k.accountId?t.accounts.find(e=>e.account?.id===parseInt(k.accountId)):t.accounts.find(e=>null!==e.account);let n={id:t.id,name:`${t.nameFirst} ${t.nameLast}`,nameFirst:t.nameFirst,nameLast:t.nameLast,accountId:r&&r.account.id,type:r&&r.account.type,email:t.email,account:r?`${r.account.name} (${r.account.type})`:"-",phone:t.phone,position:r?.position?r.position:"N/A",accountUser:r,role:r?.role,status:r?r.status:t.status,createdAt:(0,a.default)(t.createdAt).format("YYYY-MM-DD"),media:t.media};e.push(n)}),e},[k.accountId,W]),ee=(0,r.useCallback)(async e=>{await E(e)&&(M.close(),V(),K(),await Q())},[M,V,K,E,Q]),et=e=>r=>{r.stopPropagation(),M.show({content:(0,t.jsx)(p.f,{category:"avatar",entity:"User",entityId:e.id,type:"image"}),submit:!1,title:"Upload avatar"})},er=(0,r.useCallback)(e=>r=>{r.stopPropagation(),M.show({content:(0,t.jsx)(_.f,{accountType:U,userId:e?.id??null,submit:ee,accountId:Number.isNaN(k.accountId)?null:Number(k.accountId)}),title:e?"Edit user":"Add user",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"60vw",lg2:"50vw"})},[U,M,ee,k.accountId]),en=(0,r.useMemo)(()=>X.length?{}:{title:"No users",subtitleFirstLine:"You currently have users set up in the system",...F("user.manage")&&{subtitleSecondLine:"Click create user to get started building.",buttonText:"Create user",onAction:er(null)}},[F,er,X]);return(0,t.jsxs)(o.f,{spacing:2,sx:q,children:[(0,t.jsx)(o.f,{width:"100%",direction:"row",sx:A,justifyContent:"flex-end",children:F("user.manage")&&(0,t.jsx)(s.f,{variant:"contained",color:"secondary",onClick:er(null),children:"Create user"})}),(0,t.jsxs)(i.f,{sx:S,children:[(0,t.jsx)(l.f,{ml:2,variant:"h5",sx:L,children:"Users"}),X?.length?(0,t.jsx)(f.f,{ref:N,loading:G,columns:J,rows:X,meta:B,refetch:V,autoHeight:!1,onRowClick:e=>{n.default.push(`/dashboard/users/view?id=${e.id}`)},containerHeight:"calc(100% - 52px)"}):!G&&(0,t.jsx)(h.f,{imageSrc:"/static/icons/no_locations_found.svg",...en})]})]})}],667585);var U=e.i(827010),k=e.i(851123),T=e.i(877341);let N=e=>{let{entity:t,entityId:r,editMode:n=!1}=e;if("Customer"===t)if(n)return{entity:"Customer",entityId:r};else return{entity:"System-Customer"};if("Supplier"===t)if(n)return{entity:"Supplier",entityId:r};else return{entity:"System-Supplier"};return{}};e.s(["E",0,e=>{let{serviceWatch:t,entityId:n,editMode:a,areas:o}=e,[i,s]=(0,r.useState)(""),[l,u]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[f,{loading:h,data:{items:p}={items:[]}}]=(0,T.f)(U.Z,{variables:{q:""!==i?`%${i}%`:null,limit:50,offset:0}}),[g,{loading:v,data:{items:b}={items:[]}}]=(0,T.f)(U.Y,{variables:{...N({entity:"Customer",entityId:n,editMode:a}),serviceId:t?.value,q:""!==l?`%${l}%`:null,limit:50,offset:0}}),[x,{loading:y,data:{items:I}={items:[]}}]=(0,T.f)(k.U,{variables:{where:{name:{_eq:""!==d?`%${d}%`:null},subtype:{_eq:"reactive"}},limit:50,offset:0}}),{loading:_,data:{items:C}={items:[]}}=(0,c.t)(k.j,{variables:{where:{...(e=>{let{areas:t=[]}=e;return t?.length?{Addresses:{registered:{_eq:!0},Address:{_or:t.map(e=>({postCode:{_iregex:`^${e}([0-9]+).*?[A-Z0-9]{3}`}}))}}}:{}})({areas:o}),status:{_eq:"active"},Account_Locations:{accountId:{_eq:n}}},offset:0}});return{service:{options:p,loading:h,onOpen:()=>f(),onSearchChange:s},serviceSchedule:{disabled:!t?.value,options:b,loading:v,onOpen:()=>g(),onSearchChange:u},sla:{options:I,loading:y,onOpen:()=>x(),onSearchChange:m},property:{options:C,loading:_}}},"W",0,e=>{let{serviceWatch:t,entityId:n,editMode:a,copyFromSupplierDefaults:o=!1}=e,[i,s]=(0,r.useState)(""),[l,u]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[m,f]=(0,r.useState)(""),h=o&&!a,[p,{loading:g,data:{items:v}={items:[]}}]=(0,T.f)(U.Z,{variables:{q:""!==i?`%${i}%`:null,limit:50,offset:0}}),[b,{loading:x,data:{items:y}={items:[]}}]=(0,T.f)(U.Y,{variables:{...h?{entity:"Supplier",entityId:n}:N({entity:"Supplier",entityId:n,editMode:a}),serviceId:t?.value,q:""!==l?`%${l}%`:null,limit:50,offset:0}}),[I,{loading:_,data:{items:C}={items:[]}}]=(0,T.f)(k.U,{variables:{where:{name:{_eq:""!==c?`%${c}%`:null},subtype:{_eq:"reactive"}},limit:50,offset:0}}),[j,{loading:w,data:{items:$}={items:[]}}]=(0,T.f)(k.P,{variables:{accountId:n,q:""!==m?`%${m}%`:null,limit:50,offset:0}}),q=(0,r.useMemo)(()=>h?y.map(e=>({...e,fromSupplierDefaults:!0})):y,[h,y]);return{service:{options:v,loading:g,onOpen:()=>p(),onSearchChange:s},serviceSchedule:{disabled:!t?.value,options:q,loading:x,onOpen:()=>b(),onSearchChange:u},sla:{options:C,loading:_,onOpen:()=>I(),onSearchChange:d},engineer:{options:$,loading:w,onOpen:()=>j(),onSearchChange:f}}}],270070);var M=e.i(652148),R=e.i(515523),O=e.i(987171),F=e.i(175872);let E=(0,O.t)();e.s(["f",0,e=>{let{value:r,options:n,onChange:a,color:o,variant:i,label:s,placeholder:l,error:u,helperText:c,onSearchChange:d,disableFreeSolo:m,...f}=e,h=(0,F.f)(e=>{d?.(e)},500);return(0,t.jsx)(R.f,{value:r,onInputChange:(e,t)=>{h(t)},onChange:(e,t)=>{"string"==typeof t?a(e,{label:t,value:0}):t&&t.inputValue?a(e,{inputValue:t.inputValue,label:t.inputValue,value:0}):a(e,t)},filterOptions:(e,t)=>{let r=E(e,t),{inputValue:n}=t,a=e.some(e=>n===String(e.value));return""===n||a||m||r.push({inputValue:n,label:`Add "${n}"`,value:0}),r},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,id:"free-solo-with-text-demo",options:n,getOptionLabel:e=>"string"==typeof e?e:e.inputValue?e.inputValue:e.label,renderOption:(e,r)=>(0,t.jsx)("li",{...e,children:"string"==typeof r?r:r.label}),sx:{width:300},freeSolo:!0,renderInput:e=>(0,t.jsx)(M.f,{...e,color:o,variant:i,label:s,placeholder:l,error:u,helperText:c}),...f})}],728707)},39059,e=>{var t=e.i(159080);let r=t.f`
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
`,a=t.f`
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
`,i=t.f`
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
`,u=t.f`
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
`;e.s(["u",0,u,"q",0,o,"_",0,s,"x",0,n,"k",0,r,"f",0,i,"l",0,l,"V",0,a])},506656,e=>{e.s(["f",0,(e,t)=>{let r=Math.pow(10,t);return Math.round(e*r)/r}])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},51196,152658,e=>{var t=e.i(159080);let r=t.f`
  mutation AddBankAccount($objects: [BankAccount_insert_input!]!) {
    insert_BankAccount(objects: $objects) {
      returning {
        id
        stripeId
        accountNumber
        routingNumber
        bic
        iban
        status
        createdAt
      }
    }
  }
`,n=t.f`
  mutation UpdateBankAccount($id: Int!, $changes: BankAccount_set_input) {
    update_BankAccount_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["R",0,r,"b",0,n],51196);var a=e.i(426778);let o=(0,a.t)().shape({bank:(0,a.x)().required(),accountNumber:(0,a.x)().required(),bic:(0,a.x)().required(),iban:(0,a.x)().required(),routingNumber:(0,a.x)().required(),showInInvoice:(0,a.g)()});e.s(["f",0,o],152658)},577579,e=>{var t=e.i(391398);e.i(443645);var r=e.i(648116),n=e.i(21557),a=e.i(88152),o=e.i(813843),i=e.i(115871),s=e.i(755548),l=e.i(529422),u=e.i(280445),c=e.i(191788),d=e.i(74633),m=e.i(936641),f=e.i(498681);let h=e=>{let{errors:r,onClose:n}=e,{admin:a}=(0,f.f)(),u=a.jobSetting.jobNumberPrefix,h=a.jobSetting.jobNumberSuffix,g=(0,c.useMemo)(()=>[{flex:1,minWidth:100,field:"job",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(l.f,{id:r.job.id,number:r.job.number,type:r.job.type,numberPrefix:u,numberSuffix:h,isBlank:!0,isHref:!0})}},{flex:1,minWidth:200,field:"customerError",headerName:"Customer Error",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(i.f,{variant:"body1",children:r.customerError?.message})}},{flex:1,minWidth:200,field:"supplierError",headerName:"Supplier Error",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(i.f,{variant:"body1",children:r.supplierError?.message})}}],[u,h]),v=(0,c.useMemo)(()=>r.sort((e,t)=>t.job.id-e.job.id),[r]);return(0,t.jsx)(p,{sx:{padding:4},children:(0,t.jsxs)(o.f,{direction:"column",alignItems:"center",spacing:2,children:[(0,t.jsx)(m.f,{variant:"filled",severity:"error",sx:{width:"100%"},children:"Some errors occurred while recalculating the finances."}),(0,t.jsx)(o.f,{height:"100%",width:"100%",sx:{overflow:"auto"},children:(0,t.jsx)(d.s,{autoHeight:!1,columns:g,rows:v,getRowId:e=>e.job.id,containerHeight:"calc(80vh - 200px)"})}),(0,t.jsx)(s.f,{fullWidth:!0,variant:"contained",color:"secondary",onClick:n,children:"Ok"})]})})},p=(0,u.f)(a.f)(e=>{let{theme:t}=e;return{padding:`${t.spacing(4)} !important`,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"600px",maxHeight:"80vh"}});e.s(["S",0,()=>{let[e,n]=(0,r.f)();return{recalcModal:e,showRecalcErrors:async e=>{let r=e?.errors;return!!Array.isArray(r)&&0!==r.length&&(await n({content:e=>{let{onClose:n}=e;return(0,t.jsx)(h,{errors:r,onClose:n})}}),!0)}}},"H",0,()=>{let e=(0,n.f)();return{showRecalcErrorsSnackbar:t=>{let r=t?.errors;if(!Array.isArray(r)||0===r.length)return!1;let[n]=r,a=[n?.customerError?.message,n?.supplierError?.message].filter(e=>!!e);for(let t of a.length>0?a:["Saved, but the job finances could not be recalculated. Re-open the job to refresh them."])e.show({content:t,severity:"warning"});return!0}}}],577579)},697871,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(432171),a=e.i(422411),o=e.i(424894),i=e.i(738251),s=e.i(799083),l=e.i(76381),u=e.i(813843),c=e.i(652148),d=e.i(115871),m=e.i(56271),f=e.i(577372),h=e.i(403901),p=e.i(588964),g=e.i(546788),v=e.i(594301),b=e.i(510447),x=e.i(894842),y=e.i(494575),I=e.i(498813),_=e.i(39059),C=e.i(219281),j=e.i(824451),w=e.i(292802),$=e.i(74633),q=e.i(889231),A=e.i(164056),S=e.i(658524),L=e.i(159974),U=e.i(589200),k=e.i(524057),T=e.i(207646),N=e.i(255419),M=e.i(948574);let R=e=>{let{emailDisabled:r=!1,emailRefusal:n}=e,{hasRole:o}=(0,v.f)(),{control:i,formState:{errors:s}}=(0,a.M)();return(0,t.jsxs)(u.f,{width:"100%",gap:1,children:[(0,t.jsxs)(u.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"nameFirst",control:i,defaultValue:"",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"First name",value:r,onChange:n,error:!!s?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"nameLast",control:i,defaultValue:"",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Last name",value:r,onChange:n,error:!!s?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(u.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"email",control:i,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:a,onChange:o,disabled:r,error:!!s?.email,helperText:n,FormHelperTextProps:N.f,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"phone",control:i,defaultValue:"",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Mobile",value:r,onChange:n,error:!!s?.phone,fullWidth:!0})}})]}),o([...M.x,...M.H,...M.z,...M.Q])&&(0,t.jsx)(a.e,{name:"status",control:i,defaultValue:"active",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsxs)(U.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(k.f,{children:"Status"}),(0,t.jsx)(S.f,{value:r,onChange:n,error:!!s?.status,children:T.f.map(e=>(0,t.jsx)(L.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(a.e,{name:"userId",control:i,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var O=e.i(122965),F=e.i(159080);let E=F.f`
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
`,D=F.f`
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
`,P=F.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,H=F.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,W=["customer_user","admin_user"],B=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],G=[],V={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:y.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:y,accountId:A,accountType:S,submit:L}=e,{hasRole:U,user:k}=(0,v.f)(),T=(0,r.useMemo)(()=>y?[y]:G,[y]),{emailOf:N}=(0,b.f)(T),M=y?N(y):void 0,{reference:F,pagination:Y}=(0,O.f)(),z=U(["admin_owner","admin_manager"]),K=!(U("admin_user")&&"admin"===S),[Q,Z]=(0,r.useState)(!0),[J,X]=(0,r.useState)(""),[ee,et]=(0,r.useState)(!1),[er,en]=(0,r.useState)(!1),[ea,eo]=(0,r.useState)(""),[ei,es]=(0,r.useState)(null),[el,eu]=(0,r.useState)(!1),ec=(0,r.useRef)(!1),ed=[...w.f];switch(S){case"supplier":ed.push({label:"Operative",value:"contractor"});break;case"admin":ed.push({label:"Helpdesk",value:"helpdesk"})}let em=!A||"customer"!==S,{data:ef,loading:eh}=(0,n.t)(I.a,{skip:em,variables:{accountId:A,excludeUserId:y??-1}}),ep="customer"===S&&!!A&&!em&&!eh&&!((ef?.accountUsers?.length??0)>0),eg="customer"===S&&!!A,ev=(0,a.G)({defaultValues:{id:y,accountId:A,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,o.yupResolver)(g.f),context:{hasRole:(0,C.G)(S,U)&&!!A,hasLocation:!W.includes(k.role)&&W.includes(J),adminImplicitLocations:"admin"===S&&"admin_user"===J&&!y&&!el,hasOneOwner:Q,isCustomerAccount:eg,mustKeepContactUser:ep,contactRulesStillLoading:eg&&eh}}),{control:eb,errors:ex,handleSubmit:ey,watch:eI,reset:e_,setValue:eC}=ev,ej=eI("role"),ew=eI("location");(0,r.useEffect)(()=>{ej?.value&&X(`${S}_${ej?.value}`)},[S,ej?.value]);let{data:{user:e$}={user:null},loading:eq}=(0,n.t)(E,{skip:!y,variables:{userId:y,accountId:A,includeAccount:!!A},onCompleted:e=>{let{user:t}=e;if(!t)return;let r=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(A)}),n={id:t.id,accountId:r?.account.id||A||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...r?{accountUserId:r.id,accountId:r.account.id,role:ed?.find?.(e=>e?.value===r?.role),position:r.position||null,isContact:!0===r.isContact?"yes":"no",status:r.status,location:"admin"===S&&"user"===r.role?void 0:r.userLocations.map(e=>e.accountLocationId),modules:r.modules}:{}};et(!0),e_(n),X(`${S}_${n.role?.value||""}`),es(n.accountUserId||null)}});(0,n.t)(I.R,{skip:!A,variables:{accountId:A,userId:y},onCompleted:e=>{let{accountUsers:t}=e;Z(!(t.length>0))}});let eA="admin_user"===J,eS=null!=f.f[J]&&y!==k.id&&K,{data:eL}=(0,n.t)(P,{skip:!eA||null==A,variables:{accountId:A}}),eU=(0,r.useMemo)(()=>eL?.location?.map(e=>e.id)??[],[eL]),{data:{restrictedLocations:ek=[]}={restrictedLocations:[]},loading:eT}=(0,n.t)(H,{skip:!eA||!ei,variables:{accountUserId:ei}});(0,r.useEffect)(()=>{eA?!ei||eT||er||(eC("location",ek.map(e=>e.locationId)),en(!0)):en(!1)},[ei,er,eA,ek,eT,eC]),(0,r.useEffect)(()=>{!ec.current||eA||y||(eC("location",void 0),eu(!1)),ec.current=eA},[eA,eC,y]);let{data:{location:eN,meta:eM}={location:[],meta:{aggregate:{totalCount:0}}},loading:eR}=(0,n.t)(_.u,{skip:eA||!A,variables:{accountId:A,...Y}}),{data:{location:eO,meta:eF}={location:[],meta:{aggregate:{totalCount:0}}},loading:eE}=(0,n.t)(D,{skip:!eA||!A,variables:{accountId:A,q:""!==ea?`%${ea}%`:null,...Y}}),eD=eA?eO:eN,eP=eA?eF:eM,eH=eA?eE:eR,eW="admin"===S&&eA&&!y&&!el,eB=(0,r.useCallback)(e=>t=>{eA&&eu(!0),t.target.checked?eC("location",[...new Set([...ew??[],e])]):eC("location",(ew??[]).filter(t=>t!==e))},[eA,ew,eC]),eG=(0,r.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!eA||0===eU.length)return null;let e=Array.isArray(ew)?ew:[],r=eU.length>0&&eU.every(t=>e.includes(t)),n=e.length>0;return eW?(0,t.jsx)(s.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(eu(!0),eC("location",[...eU]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(s.f,{color:"secondary",checked:r,indeterminate:n&&!r,onChange:e=>{eu(!0),e.target.checked?eC("location",[...eU]):eC("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:r}=e;return r.id?(0,t.jsx)(s.f,{color:"secondary",checked:!eW&&!!ew?.includes(r.id),onChange:eB(r.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:r}=e;return r.address?(0,t.jsxs)(u.f,{children:[(0,t.jsx)(d.f,{children:r.address.addressLine1}),(0,t.jsx)(d.f,{children:r.address.postCode})]}):(0,t.jsx)(d.f,{children:"Please add"})}},...eA?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:r}=e;return r.customerId&&r.customer?(0,t.jsx)(q.f,{color:"secondary",href:`/dashboard/customers/view?id=${r.customerId}`,onClick:e=>e.stopPropagation(),children:r.customer}):null}}]:[]],[eU,eW,eA,ew,eB,eu,eC]),eV=(0,r.useMemo)(()=>(eD??[]).map(e=>({id:eA?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[eA,eD]);if(eq)return(0,t.jsx)(u.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eY={id:(0,C.G)(S,U)};return(0,t.jsx)(a.p,{...ev,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:ey(e=>{let t="admin"===S&&eA&&!y&&!el&&K&&eU.length>0?{...e,location:[...eU]}:e,r=eS?(0,h.f)(e.modules,f.f[J]?.map(e=>e.name)??[]):void 0;L(r?{...t,modules:r}:t)}),children:[(0,t.jsx)(R,{emailDisabled:!!y&&M?.allowed!==!0,emailRefusal:(0,x.f)(M)}),A&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.f,{paddingTop:1,children:[(0,C.G)(S,U)&&(0,t.jsx)(u.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"role",control:eb,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(j.f,{value:r,onChange:(e,t)=>n(t),label:"Role",options:ed,variant:"standard",color:"secondary",error:!!ex?.role,helperText:ex?.role?.message||ex?.role?.value?.message})}},ee?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(u.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"position",control:eb,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(c.f,{fullWidth:!0,value:r||"",onChange:e=>n(e.target.value||null),InputLabelProps:{shrink:!!r},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,C.u)({accountType:S,role:ej?.value,hasRole:U})&&e$?.id!==k.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"invoiceThreshold",control:eb,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(c.f,{fullWidth:!0,value:r,onChange:n,InputLabelProps:{shrink:!!r},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(u.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"quoteThreshold",control:eb,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(c.f,{fullWidth:!0,value:r,onChange:n,InputLabelProps:{shrink:!!r},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(u.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(d.f,{sx:V.title,children:"Contact user"}),(0,t.jsx)(a.e,{name:"isContact",control:eb,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(p.f,{formControlProps:{sx:{m:0}},stackProps:ex.isContact?V.radioGroupError:V.radioGroup,error:!!ex.isContact,value:r,onChange:n,options:B,labelLeft:!0,helperText:ex.isContact?.message})}},ee?"contact-edit-mode":"contact-create-mode")]}),eS&&(0,t.jsx)(m.f,{role:J})]}),W.includes(J)&&y!==k.id&&K&&(0,t.jsxs)(i.f,{sx:ex.location?V.locationError:{},children:[(0,t.jsx)(d.f,{sx:V.title,children:"Locations"}),eA&&z&&(0,t.jsx)(c.f,{fullWidth:!0,value:ea,onChange:e=>{eo(e.target.value),F.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!ea},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)($.s,{...F,columnVisibilityModel:eY,totalCount:eP.aggregate.totalCount,columns:eG,loading:eH,rows:eV,autoHeight:!0}),(0,t.jsx)(a.e,{control:eb,name:"location",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}})]})]}),y&&(0,t.jsx)(a.e,{control:eb,name:"id",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}}),A&&(0,t.jsx)(a.e,{control:eb,name:"accountId",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}}),ei&&(0,t.jsx)(a.e,{control:eb,name:"accountUserId",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}})]})})}],697871)},56271,577372,403901,546788,498813,219281,e=>{var t=e.i(391398),r=e.i(813843),n=e.i(115871);let a=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],o=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],i={customer_user:a,admin_user:a,supplier_owner:o,supplier_manager:o,supplier_user:o,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...o]};e.s(["f",0,i],577372);var s=e.i(191788),l=e.i(422411),u=e.i(152078),c=e.i(799083),d=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:a}=e,{control:o,watch:f,setValue:h}=(0,l.M)(),p=!!f("modules.jobHistoryAll"),g=(0,s.useMemo)(()=>i[a]||[],[a]);return(0,s.useEffect)(()=>{p&&h("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[p,h]),(0,t.jsxs)(d.f,{children:[(0,t.jsx)(n.f,{sx:m,children:"Permissions"}),(0,t.jsx)(r.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:g.map(e=>{let r="jobHistorySupplier"===e.name&&p;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:o,render:n=>{let{value:a,onChange:o}=n;return(0,t.jsx)(u.f,{disabled:r,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(c.f,{color:"secondary",checked:!!a,disabled:r,onChange:e=>o(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let f=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let r=e??{};return Object.fromEntries(f.map(e=>[e,t.includes(e)&&!0===r[e]]))}],403901);var h=e.i(426778);let p="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",g=(0,h.t)().shape({id:(0,h.H)().nullable().optional(),accountId:(0,h.H)().nullable().optional(),nameFirst:(0,h.x)().required(),nameLast:(0,h.x)().required(),email:(0,h.x)().required().email(),phone:(0,h.x)().required(),status:(0,h.x)().when("$hasRole",(e,t)=>{let[r]=e;return r?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,h.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,h.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,h.t)().nullable().shape({label:(0,h.x)(),value:(0,h.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[r,n,a]=e;return r?n?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):a&&"number"==typeof a&&a>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[r,n]=e;return r&&n&&"number"==typeof n&&n>0?t.required("Role is required"):t.nullable()}),userId:(0,h.H)().nullable().optional(),accountUserId:(0,h.H)().nullable().optional(),position:(0,h.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,h.x)().nullable(),otherwise:()=>(0,h.x)().nullable()}),isContact:(0,h.x)().when("accountId",{is:e=>!!e,then:()=>(0,h.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[r,n,a]=e;return a?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):r&&n?t.oneOf(["yes"],p).required(p):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,h.x)().nullable().optional()}),location:(0,h.k)().of((0,h.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[r,n]=e;return!r||n?t.nullable().optional():t.required()})});e.s(["f",0,g],546788);var v=e.i(159080);let b=v.f`
  query FindOwnersByAccount($accountId: Int, $userId: Int) {
    accountUsers: Account_User(
      where: { role: { _eq: "owner" }, accountId: { _eq: $accountId }, userId: { _neq: $userId } }
    ) {
      id
      role
    }
  }
`,x=v.f`
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
`;e.s(["a",0,x,"R",0,b],498813);var y=e.i(948574);e.s(["G",0,(e,t)=>"customer"!==e&&"supplier"!==e||t([...y.x,...y.H,...y.z,...y.Q]),"u",0,e=>{let{accountType:t,role:r,hasRole:n}=e;return n(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${r}`):n(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${r}`):!!n(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${r}`)}],219281)},510447,e=>{var t=e.i(191788),r=e.i(185242);let n=[],a={},o={},i=e=>e.length?[...new Set(e)].sort((e,t)=>e-t).join(","):null;e.s(["f",0,function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,l=(0,t.useMemo)(()=>i(e),[e]),u=(0,t.useMemo)(()=>i(s),[s]),c=(0,t.useMemo)(()=>({ids:l,accountIds:u}),[l,u]),{data:d,refetch:m}=(0,r.f)("/user/actions",{queryKey:`user-actions-${l??""}-${u??""}`,params:c,skip:!l&&!u}),f=d?.users??a,h=d?.accounts??o,p=(0,t.useCallback)(e=>f[e]?.editDetails,[f]),g=(0,t.useCallback)(e=>f[e]?.editEmail,[f]),v=(0,t.useCallback)(e=>p(e)?.allowed===!0,[p]);return{detailsOf:p,emailOf:g,mayEditDetails:v,mayEditLink:(0,t.useCallback)((e,t)=>null!=t&&f[e]?.editLink[t]?.allowed===!0,[f]),mayAddUser:(0,t.useCallback)((e,t)=>{let r=h[e]?.addUser;return!!r&&(t?r[t]?.allowed===!0:Object.values(r).some(e=>{let{allowed:t}=e;return t}))},[h]),refetch:m}}])},884288,e=>{var t=e.i(191788),r=e.i(511667),n=e.i(21557),a=e.i(974261),o=e.i(220303);let i=e=>void 0===e?void 0:e||null,s=e=>({position:e.position,isContact:"yes"===e.isContact,modules:e.modules,locationIds:e.location??void 0}),l=e=>({nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email,phone:e.phone,invoiceThreshold:i(e.invoiceThreshold),quoteThreshold:i(e.quoteThreshold)});e.s(["f",0,function(){let{failurePrefix:e=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{show:i}=(0,n.f)(),u=t=>{i({content:`${e}${t instanceof o.Q&&t.status<500?t.message:"The user could not be saved"}`,severity:t instanceof o.Q&&403===t.status?"warning":"error"})},[c]=(0,r.f)("/user",{queryKey:"user-add",method:"POST",baseUrl:a.M,onError:u}),[d]=(0,r.f)("/user/:userId",{queryKey:"user-edit",method:"PUT",baseUrl:a.M,onError:u}),m=(0,t.useCallback)(async e=>!!await c({body:e}),[c]),f=(0,t.useCallback)(async(e,t)=>!!await d({pathParams:{userId:e},body:t}),[d]),h=(0,t.useCallback)(e=>e.id?f(e.id,{...l(e),status:e.accountUserId?void 0:e.status,...e.accountUserId&&{link:{...s(e),id:e.accountUserId,role:e.role?.value,status:e.status}}}):m({...l(e),...s(e),accountId:e.accountId,role:e.role?.value||"user",status:e.status||"active"}),[m,f]);return{addUser:m,editUser:f,saveUser:h}}],884288)},188811,e=>{var t=e.i(511667),r=e.i(974261),n=e.i(21557);e.s(["f",0,()=>{let{show:e}=(0,n.f)();return(0,t.f)("/xero/push-contact",{queryKey:"xero-push-contact",method:"POST",baseUrl:r.M,onCompleted:t=>{if(!t?.updated)return;let r=Array.isArray(t.changed)?t.changed:[];e({content:r.length?`Xero contact updated: ${r.join(", ")}`:"Xero contact updated.",severity:"success"})},onError:t=>{e({content:`Saved, but the Xero contact was not updated: ${t.message}`,severity:"error"})}})}])},920475,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(e.r(421506)),o=e.r(391398);r.default=(0,a.default)((0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},262999,e=>{var t=e.i(936641);e.s(["f",()=>t.f])},220490,e=>{var t=e.i(75907),r=e.i(460997),n=e.i(191788),a=e.i(889878),o=e.i(600961),i=e.i(396851),s=e.i(395724),l=e.i(88152),u=e.i(713149),c=e.i(46739);function d(e){return(0,c.f)("MuiCard",e)}(0,u.f)("MuiCard",["root"]);var m=e.i(391398);let f=["className","raised"],h=(0,i.f)(l.f,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),p=n.forwardRef(function(e,n){let i=(0,s.f)({props:e,name:"MuiCard"}),{className:l,raised:u=!1}=i,c=(0,r.f)(i,f),p=(0,t.f)({},i,{raised:u}),g=(e=>{let{classes:t}=e;return(0,o.f)({root:["root"]},d,t)})(p);return(0,m.jsx)(h,(0,t.f)({className:(0,a.f)(g.root,l),elevation:u?8:void 0,ref:n,ownerState:p},c))});e.s(["f",0,p],220490)},101934,e=>{var t=e.i(460997),r=e.i(75907),n=e.i(191788),a=e.i(889878),o=e.i(600961),i=e.i(396851),s=e.i(395724),l=e.i(713149),u=e.i(46739);function c(e){return(0,u.f)("MuiCardActions",e)}(0,l.f)("MuiCardActions",["root","spacing"]);var d=e.i(391398);let m=["disableSpacing","className"],f=(0,i.f)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(e=>{let{ownerState:t}=e;return(0,r.f)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),h=n.forwardRef(function(e,n){let i=(0,s.f)({props:e,name:"MuiCardActions"}),{disableSpacing:l=!1,className:u}=i,h=(0,t.f)(i,m),p=(0,r.f)({},i,{disableSpacing:l}),g=(e=>{let{classes:t,disableSpacing:r}=e;return(0,o.f)({root:["root",!r&&"spacing"]},c,t)})(p);return(0,d.jsx)(f,(0,r.f)({className:(0,a.f)(g.root,u),ownerState:p,ref:n},h))});e.s(["f",0,h],101934)},106850,e=>{var t=e.i(75907),r=e.i(460997),n=e.i(191788),a=e.i(889878),o=e.i(600961),i=e.i(396851),s=e.i(395724),l=e.i(713149),u=e.i(46739);function c(e){return(0,u.f)("MuiCardContent",e)}(0,l.f)("MuiCardContent",["root"]);var d=e.i(391398);let m=["className","component"],f=(0,i.f)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),h=n.forwardRef(function(e,n){let i=(0,s.f)({props:e,name:"MuiCardContent"}),{className:l,component:u="div"}=i,h=(0,r.f)(i,m),p=(0,t.f)({},i,{component:u}),g=(e=>{let{classes:t}=e;return(0,o.f)({root:["root"]},c,t)})(p);return(0,d.jsx)(f,(0,t.f)({as:u,className:(0,a.f)(g.root,l),ownerState:p,ref:n},h))});e.s(["f",0,h],106850)},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,255419,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var r=e.i(231637);e.s(["f",()=>r.f],524057),e.s(["f",0,{disabled:!1}],255419)},799306,e=>{e.s(["f",0,function(e){if(null===e||!0===e||!1===e)return 0/0;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}])},925527,389849,e=>{var t=e.i(623886),r=e.i(699213);e.s(["f",0,function(e){(0,r.f)(1,arguments);var n=(0,t.f)(e);return n.setHours(23,59,59,999),n}],925527);var n=e.i(926638),a=e.i(799306),o=/[T ]/,i=/[Z ]/i,s=/([Z+-].*)$/,l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400==0||e%4==0&&e%100!=0}e.s(["f",0,function(e,t){(0,r.f)(1,arguments);var p,g,v,b=(0,a.f)(null!=(p=null==t?void 0:t.additionalDigits)?p:2);if(2!==b&&1!==b&&0!==b)throw RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(0/0);var x=function(e){var t,r={},n=e.split(o);if(n.length>2)return r;if(/:/.test(n[0])?t=n[0]:(r.date=n[0],t=n[1],i.test(r.date)&&(r.date=e.split(i)[0],t=e.substr(r.date.length,e.length))),t){var a=s.exec(t);a?(r.time=t.replace(a[1],""),r.timezone=a[1]):r.time=t}return r}(e);if(x.date){var y=function(e,t){var r=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(r);if(!n)return{year:0/0,restDateString:""};var a=n[1]?parseInt(n[1]):null,o=n[2]?parseInt(n[2]):null;return{year:null===o?a:100*o,restDateString:e.slice((n[1]||n[2]).length)}}(x.date,b);g=function(e,t){if(null===t)return new Date(0/0);var r,n,a,o,i,s,u,c,m,p,g,v,b=e.match(l);if(!b)return new Date(0/0);var x=!!b[4],y=d(b[1]),I=d(b[2])-1,_=d(b[3]),C=d(b[4]),j=d(b[5])-1;if(x){return(r=C,n=j,r>=1&&r<=53&&n>=0&&n<=6)?(a=t,o=C,i=j,(s=new Date(0)).setUTCFullYear(a,0,4),u=s.getUTCDay()||7,s.setUTCDate(s.getUTCDate()+((o-1)*7+i+1-u)),s):new Date(0/0)}var w=new Date(0);return(c=t,m=I,p=_,m>=0&&m<=11&&p>=1&&p<=(f[m]||(h(c)?29:28))&&(g=t,(v=y)>=1&&v<=(h(g)?366:365)))?(w.setUTCFullYear(t,I,Math.max(y,_)),w):new Date(0/0)}(y.restDateString,y.year)}if(!g||isNaN(g.getTime()))return new Date(0/0);var I=g.getTime(),_=0;if(x.time&&isNaN(_=function(e){var t,r,a,o=e.match(u);if(!o)return 0/0;var i=m(o[1]),s=m(o[2]),l=m(o[3]);return(t=i,r=s,a=l,24===t?0===r&&0===a:a>=0&&a<60&&r>=0&&r<60&&t>=0&&t<25)?i*n.r+s*n.z+1e3*l:0/0}(x.time)))return new Date(0/0);if(x.timezone){if(isNaN(v=function(e){if("Z"===e)return 0;var t,r=e.match(c);if(!r)return 0;var a="+"===r[1]?-1:1,o=parseInt(r[2]),i=r[3]&&parseInt(r[3])||0;return(t=i)>=0&&t<=59?a*(o*n.r+i*n.z):0/0}(x.timezone)))return new Date(0/0)}else{var C=new Date(I+_),j=new Date(0);return j.setFullYear(C.getUTCFullYear(),C.getUTCMonth(),C.getUTCDate()),j.setHours(C.getUTCHours(),C.getUTCMinutes(),C.getUTCSeconds(),C.getUTCMilliseconds()),j}return new Date(I+_+v)}],389849)},684034,e=>{var t=e.i(389849);e.s(["f",()=>t.f])}],171764,(e,t,r)=>{t.exports=function(e,t,r,n){for(var a=-1,o=null==e?0:e.length;++a<o;){var i=e[a];t(n,i,r(i),e)}return n}},299177,(e,t,r)=>{var n=e.r(885049);t.exports=function(e,t,r,a){return n(e,function(e,n,o){t(a,e,r(e),o)}),a}},885049,(e,t,r)=>{var n=e.r(733991);t.exports=e.r(8331)(n)},733991,(e,t,r)=>{var n=e.r(864353),a=e.r(622335);t.exports=function(e,t){return e&&n(e,t,a)}},928267,(e,t,r)=>{var n=e.r(478969),a=e.r(598921);t.exports=function(e,t){t=n(t,e);for(var r=0,o=t.length;null!=e&&r<o;)e=e[a(t[r++])];return r&&r==o?e:void 0}},980171,(e,t,r)=>{t.exports=function(e,t){return null!=e&&t in Object(e)}},305001,(e,t,r)=>{var n=e.r(698620),a=e.r(190835);t.exports=function(e,t,r,o){var i=r.length,s=i,l=!o;if(null==e)return!s;for(e=Object(e);i--;){var u=r[i];if(l&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++i<s;){var c=(u=r[i])[0],d=e[c],m=u[1];if(l&&u[2]){if(void 0===d&&!(c in e))return!1}else{var f=new n;if(o)var h=o(d,m,c,e,t,f);if(!(void 0===h?a(m,d,3,o,f):h))return!1}}return!0}},305792,(e,t,r)=>{var n=e.r(708554),a=e.r(792384),o=e.r(625975),i=e.r(448684),s=e.r(122025);t.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?i(e)?a(e[0],e[1]):n(e):s(e)}},708554,(e,t,r)=>{var n=e.r(305001),a=e.r(461994),o=e.r(19939);t.exports=function(e){var t=a(e);return 1==t.length&&t[0][2]?o(t[0][0],t[0][1]):function(r){return r===e||n(r,e,t)}}},792384,(e,t,r)=>{var n=e.r(190835),a=e.r(758568),o=e.r(517217),i=e.r(970923),s=e.r(81673),l=e.r(19939),u=e.r(598921);t.exports=function(e,t){return i(e)&&s(t)?l(u(e),t):function(r){var i=a(r,e);return void 0===i&&i===t?o(r,e):n(t,i,3)}}},343054,(e,t,r)=>{t.exports=function(e){return function(t){return null==t?void 0:t[e]}}},502503,(e,t,r)=>{var n=e.r(928267);t.exports=function(e){return function(t){return n(t,e)}}},316666,(e,t,r)=>{var n=e.r(171764),a=e.r(299177),o=e.r(305792),i=e.r(448684);t.exports=function(e,t){return function(r,s){var l=i(r)?n:a,u=t?t():{};return l(r,e,o(s,2),u)}}},8331,(e,t,r)=>{var n=e.r(379858);t.exports=function(e,t){return function(r,a){if(null==r)return r;if(!n(r))return e(r,a);for(var o=r.length,i=t?o:-1,s=Object(r);(t?i--:++i<o)&&!1!==a(s[i],i,s););return r}}},461994,(e,t,r)=>{var n=e.r(81673),a=e.r(622335);t.exports=function(e){for(var t=a(e),r=t.length;r--;){var o=t[r],i=e[o];t[r]=[o,i,n(i)]}return t}},877697,(e,t,r)=>{var n=e.r(478969),a=e.r(713266),o=e.r(448684),i=e.r(805251),s=e.r(457279),l=e.r(598921);t.exports=function(e,t,r){t=n(t,e);for(var u=-1,c=t.length,d=!1;++u<c;){var m=l(t[u]);if(!(d=null!=e&&r(e,m)))break;e=e[m]}return d||++u!=c?d:!!(c=null==e?0:e.length)&&s(c)&&i(m,c)&&(o(e)||a(e))}},81673,(e,t,r)=>{var n=e.r(903275);t.exports=function(e){return e==e&&!n(e)}},19939,(e,t,r)=>{t.exports=function(e,t){return function(r){return null!=r&&r[e]===t&&(void 0!==t||e in Object(r))}}},758568,(e,t,r)=>{var n=e.r(928267);t.exports=function(e,t,r){var a=null==e?void 0:n(e,t);return void 0===a?r:a}},320037,(e,t,r)=>{var n=e.r(398629),a=e.r(316666),o=Object.prototype.hasOwnProperty;t.exports=a(function(e,t,r){o.call(e,r)?e[r].push(t):n(e,r,[t])})},517217,(e,t,r)=>{var n=e.r(980171),a=e.r(877697);t.exports=function(e,t){return null!=e&&a(e,t,n)}},122025,(e,t,r)=>{var n=e.r(343054),a=e.r(502503),o=e.r(970923),i=e.r(598921);t.exports=function(e){return o(e)?n(i(e)):a(e)}}]);