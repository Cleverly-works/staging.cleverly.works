(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[443919,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(280445),o=e.i(222351),a=e.i(738251),i=e.i(115871),s=e.i(755548),l=e.i(813843),c=e.i(741850),u=e.i(376733),d=e.i(411331),f=e.i(377198);let m=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var p=e.i(889231),h=e.i(396413);let x=(0,n.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,g=(0,n.f)("div")`
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
`,b=(0,n.f)("div")`
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
`;e.s(["f",0,e=>{let{avatar:n,editable:_=!0,entity:v,entityName:j,linkTitleTo:y,relatedParties:$,onEdit:I,refetch:w}=e,A=(0,d.f)(),[U,q]=(0,r.useState)(null),[C,L]=(0,r.useState)(!1),k=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!m.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),r=(t=t.replace(/^www\./,"")).split("/")[0];return r?.split(":")[0]||null}catch(e){return null}})(e);let r="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!r)return null;let n=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:r});return`https://img.logo.dev/${encodeURIComponent(t)}?${n.toString()}`})(v.website||v.manager?.email),S=$&&$.length>0,M=(0,f.f)(U);(0,r.useEffect)(()=>{n?(q(n),L(!1)):k?(q(k),L(!0)):(q(null),L(!1))},[n,k]);let T=e=>{let[t]=e;A.close(),q(t?.filename||null)};return(0,t.jsx)(x,{children:(0,t.jsxs)(l.f,{px:1.5,direction:"row",children:[(0,t.jsx)(l.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(g,{logoUrl:C,children:[(0,t.jsx)(o.f,{content:v?.name,src:M,onClick:_?()=>{A.show({content:(0,t.jsx)(h.f,{category:"avatar",entity:j,entityId:v?.id,filters:{category:"avatar"},onMediaAdd:T,refetch:w,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:_?"pointer":"default"}}),_&&(0,t.jsx)(b,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(l.f,{pl:1.5,flex:S?1:void 0,minWidth:S?0:void 0,children:[(0,t.jsxs)(i.f,{color:"text.primary",fontSize:17,children:[y?(0,t.jsx)(p.f,{href:y,sx:{color:"secondary.main"},children:v?.name}):v?.name,v?.description&&(v?.descriptionLink?(0,t.jsx)(p.f,{href:v?.descriptionLink,target:"_blank",underline:"none",children:(0,t.jsx)(i.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:v?.description})}):(0,t.jsx)(i.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:v?.description})),v?.website&&(0,t.jsx)(p.f,{href:v?.website.startsWith("http")?v?.website:`http://${v?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(c.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),S&&(0,t.jsxs)(l.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(i.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(a.f,{component:"span",children:"Related party: "}),$.map((e,r)=>(0,t.jsxs)("span",{children:[r>0&&", ",(0,t.jsx)(p.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),_&&!!I&&(0,t.jsxs)(s.f,{onClick:I,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(u.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),_&&!S&&(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-start",children:!!I&&(0,t.jsxs)(s.f,{onClick:I,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(u.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},938504,e=>{let t=e=>String(e).padStart(2,"0");e.s(["f",0,function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new Date(e),o=`${n.getFullYear()}-${t(n.getMonth()+1)}-${t(n.getDate())}`;return r?`${o} ${t(n.getHours())}:${t(n.getMinutes())}`:o}])},544005,e=>{e.s(["f",0,(e,t)=>{let r={...e};return Object.entries(t).forEach(e=>{let[t,n]=e;void 0===r[t]&&(r[t]=n)}),r}])},239964,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(691567),o=e.i(773831),a=e.i(33670),i=e.i(901004),s=e.i(509790),l=e.i(692113),c=e.i(137995),u=e.i(817581),d=e.i(420),f=e.i(870307),m=e.i(407329),p=e.i(390536),h=e.i(978319),x=e.i(376733),g=e.i(13558),b=e.i(562673),_=e.i(339909),v=e.i(89029),j=e.i(129503),y=e.i(213419),$=e.i(12028),I=e.i(813843),w=e.i(115871);let A={add:(0,t.jsx)(u.default,{}),archive:(0,t.jsx)(l.default,{}),avatar:(0,t.jsx)($.default,{}),check:(0,t.jsx)(d.default,{}),clock:(0,t.jsx)(f.default,{}),delete:(0,t.jsx)(h.default,{}),description:(0,t.jsx)(m.default,{}),download:(0,t.jsx)(p.default,{}),info:(0,t.jsx)(g.default,{}),edit:(0,t.jsx)(x.default,{}),location:(0,t.jsx)(v.default,{}),unarchive:(0,t.jsx)(c.default,{}),uploadFile:(0,t.jsx)(b.default,{}),receipt:(0,t.jsx)(_.default,{}),visibility:(0,t.jsx)(y.default,{})},U={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(j.default,{}),description:(0,t.jsx)(m.default,{})},q=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],C=e=>{let{actionsData:n=q,icon:s="default",row:l,disabled:c=!1}=e,[u,d]=(0,r.useState)(null),f=()=>{d(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:c,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),d(e.currentTarget)},children:U[s]}),(0,t.jsx)(a.f,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:!!u,onClose:f,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:n(l).map((e,r)=>(0,t.jsx)(i.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),f()},sx:{pl:3,pr:4},children:(0,t.jsxs)(I.f,{direction:"row",alignItems:"center",spacing:2,children:[A?.[e.icon]||null,(0,t.jsx)(w.f,{children:e.tooltip})]})},r))})]})};C.propTypes={actionsData:n.default.func,icon:n.default.oneOf(["default","description"]),row:n.default.any.isRequired,disabled:n.default.bool},e.s(["f",0,C])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let r=t?.medium?.meta?.thumbnails,n=r?.find?.(e=>"small"===e.name);return n?.relativePath||t.medium.filename||null}])},588964,e=>{var t=e.i(391398),r=e.i(691567),n=e.i(668921),o=e.i(152078),a=e.i(471973),i=e.i(606255),s=e.i(984636),l=e.i(530252),c=e.i(813843),u=e.i(115871),d=e.i(544005);let f={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},m=e=>{let r=(0,d.f)(e,f),{label:m,options:h,error:x,helperText:g,stackProps:b={},formControlProps:_={},labelLeft:v}=r,j=e=>{let{children:r}=e;return(0,t.jsx)(t.Fragment,{children:r})};return(0,t.jsxs)(n.f,{sx:{m:3},error:x,variant:"standard",..._,children:[(0,t.jsxs)(c.f,{...v&&p,children:[m&&(0,t.jsx)(i.f,{id:"radio-group",color:"secondary",children:m}),(0,t.jsx)(s.f,{...r,"aria-labelledby":"radio-group",children:(0,t.jsx)(c.f,{...b,children:h.map(e=>{let{value:r,label:n,icon:a,ParentComponent:i=j}=e;return(0,t.jsx)(i,{children:(0,t.jsx)(o.f,{value:r,control:(0,t.jsx)(l.f,{color:"secondary"}),label:(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[a,(0,t.jsx)(u.f,{children:n})]})})})})})})]}),(0,t.jsx)(a.f,{children:g})]})};m.propTypes={label:r.default.string,options:r.default.arrayOf(r.default.shape({label:r.default.string.isRequired,value:r.default.any.isRequired,ParentComponent:r.default.elementType})),error:r.default.bool,helperText:r.default.string,stackProps:r.default.object,formControlProps:r.default.object,labelLeft:r.default.bool};let p={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,m])},98762,e=>{var t=e.i(191788),r=e.i(949125),n=e.i(974261),o=e.i(491230);e.s(["f",0,e=>{let{filters:a,newFilters:i,initialSort:s}=e,l=(0,t.useRef)(void 0),[c,u]=(0,t.useState)({}),[d,f]=(0,t.useState)({}),m=s||{item:"createdAt",order:"desc"},p={[l.current?.sort.item||m.item]:m.inneritem?{[m.inneritem]:l.current?.sort.order||m.order}:l.current?.sort.order||m.order};return(0,t.useEffect)(()=>{let e=!(0,r.default)(c,a),t=!(0,r.default)(d,i);if(e&&(u(a),l?.current?.resetPagination()),t&&(f(i),l?.current?.resetPagination()),l?.current?.setSort&&!(e||t)){let e=l.current?.sort?.item&&l.current?.sort?.order?{item:l.current?.sort?.item,order:l.current?.sort?.order}:p;l.current.setSort(e)}},[a,i]),{initialData:{...a,newFilters:i?.length>0?i:void 0,limit:l.current?.pageSize==="Infinity"?null:parseInt(l.current?.pageSize,10)||n.r.paginationSize,offset:(l.current?.currentPage-1||0)*(l.current?.pageSize||n.r.paginationSize),orderBy:(0,o.f)(l.current?.sort?.item?.replace(/ORDER/i,l.current?.sort.order))||p},initialSort:s,ref:l}}])},399942,e=>{var t=e.i(39059);let r=async function(e,r){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{let{data:{users:o}}=await e.query({query:t.e,variables:{email:r}});if(o&&o.length>0)return!!n&&o[0];return!n||null}catch(e){return!0}};e.s(["f",0,r])},219281,e=>{var t=e.i(948574);e.s(["G",0,(e,r)=>"customer"!==e&&"supplier"!==e||r([...t.x,...t.H,...t.z,...t.Q]),"u",0,e=>{let{accountType:t,role:r,hasRole:n}=e;return n(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${r}`):n(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${r}`):!!n(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${r}`)},"y",0,(e,t,r)=>{let n={};return e.id?(n.id=parseInt(e.id),n.changes={nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,meta:{...t},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null,status:e.status},e.accountUserId?(n.updateAccountUser=!0,n.accountUserId=parseInt(e.accountUserId),n.accountUserChanges={role:e.role?.value,position:e.position,isContact:"yes"===e.isContact,status:e.status},n.accountUserModules=e.modules??{}):(n.accountUserId=0,n.updateAccountUser=!1)):(n.role=e.role?.value||"user",n.position=e.position,n.isContact="yes"===e.isContact,n.status=e.status,n.accountId=e.accountId,n.modules=e.modules,r?n.userId=r.id:n.User={data:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,status:e.status,meta:{sendDefaultWelcomeEmail:!0,notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}},invoiceThreshold:e.invoiceThreshold||null,quoteThreshold:e.quoteThreshold||null}}),n},"b",0,e=>({accountUserId:e.accountUserId,objects:e.location.map(t=>({accountUserId:e.accountUserId,accountLocationId:t}))}),"c",0,e=>({accountUserId:e.accountUserId,objects:(e.location??[]).map(t=>({accountUserId:e.accountUserId,locationId:t}))})])},39059,e=>{var t=e.i(159080);let r=t.f`
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
`,i=t.f`
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
`,f=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,m=t.f`
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
`,h=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,x=t.f`
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
`,b=t.f`
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
`,_=t.f`
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
`;e.s(["e",0,i,"d",0,c,"u",0,g,"q",0,d,"_",0,m,"x",0,a,"k",0,o,"f",0,f,"U",0,b,"I",0,r,"s",0,_,"c",0,l,"S",0,u,"o",0,h,"l",0,p,"V",0,n,"J",0,x,"W",0,s])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(432171),o=e.i(422411),a=e.i(424894),i=e.i(738251),s=e.i(799083),l=e.i(76381),c=e.i(813843),u=e.i(652148),d=e.i(115871),f=e.i(56271),m=e.i(577372),p=e.i(403901),h=e.i(588964),x=e.i(546788),g=e.i(594301),b=e.i(494575),_=e.i(498813),v=e.i(39059),j=e.i(219281),y=e.i(824451),$=e.i(292802),I=e.i(74633),w=e.i(889231),A=e.i(164056),U=e.i(658524),q=e.i(159974),C=e.i(589200),L=e.i(524057),k=e.i(207646),S=e.i(948574);let M=()=>{let{hasRole:e}=(0,g.f)(),{control:r,formState:{errors:n}}=(0,o.M)();return(0,t.jsxs)(c.f,{width:"100%",gap:1,children:[(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"nameFirst",control:r,defaultValue:"",render:e=>{let{value:r,onChange:o}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"First name",value:r,onChange:o,error:!!n?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"nameLast",control:r,defaultValue:"",render:e=>{let{value:r,onChange:o}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Last name",value:r,onChange:o,error:!!n?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(c.f,{direction:"row",spacing:2,children:[(0,t.jsx)(o.e,{name:"email",control:r,defaultValue:"",render:e=>{let{value:r,onChange:o}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:r,onChange:o,error:!!n?.email,fullWidth:!0})}}),(0,t.jsx)(o.e,{name:"phone",control:r,defaultValue:"",render:e=>{let{value:r,onChange:o}=e;return(0,t.jsx)(A.f,{variant:"standard",color:"secondary",label:"Mobile",value:r,onChange:o,error:!!n?.phone,fullWidth:!0})}})]}),e([...S.x,...S.H,...S.z,...S.Q])&&(0,t.jsx)(o.e,{name:"status",control:r,defaultValue:"active",render:e=>{let{value:r,onChange:o}=e;return(0,t.jsxs)(C.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(L.f,{children:"Status"}),(0,t.jsx)(U.f,{value:r,onChange:o,error:!!n?.status,children:k.f.map(e=>(0,t.jsx)(q.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(o.e,{name:"userId",control:r,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var T=e.i(122965),O=e.i(159080);let P=O.f`
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
`,R=O.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,F=O.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,z=["customer_user","admin_user"],E=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],H={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:b.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:b,accountId:A,accountType:U,submit:q}=e,{hasRole:C,user:L}=(0,g.f)(),{reference:k,pagination:S}=(0,T.f)(),O=C(["admin_owner","admin_manager"]),G=!(C("admin_user")&&"admin"===U),[W,B]=(0,r.useState)(!0),[D,N]=(0,r.useState)(""),[V,Q]=(0,r.useState)(!1),[J,K]=(0,r.useState)(!1),[Y,X]=(0,r.useState)(""),[Z,ee]=(0,r.useState)(null),[et,er]=(0,r.useState)(!1),en=(0,r.useRef)(!1),eo=[...$.f];switch(U){case"supplier":eo.push({label:"Operative",value:"contractor"});break;case"admin":eo.push({label:"Helpdesk",value:"helpdesk"})}let ea=!A||"customer"!==U,{data:ei,loading:es}=(0,n.t)(_.a,{skip:ea,variables:{accountId:A,excludeUserId:b??-1}}),el="customer"===U&&!!A&&!ea&&!es&&!((ei?.accountUsers?.length??0)>0),ec="customer"===U&&!!A,eu=(0,o.G)({defaultValues:{id:b,accountId:A,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,a.yupResolver)(x.f),context:{hasRole:(0,j.G)(U,C)&&!!A,hasLocation:!z.includes(L.role)&&z.includes(D),adminImplicitLocations:"admin"===U&&"admin_user"===D&&!b&&!et,hasOneOwner:W,isCustomerAccount:ec,mustKeepContactUser:el,contactRulesStillLoading:ec&&es}}),{control:ed,errors:ef,handleSubmit:em,watch:ep,reset:eh,setValue:ex}=eu,eg=ep("role"),eb=ep("location");(0,r.useEffect)(()=>{eg?.value&&N(`${U}_${eg?.value}`)},[U,eg?.value]);let{data:{user:e_}={user:null},loading:ev}=(0,n.t)(_.E,{skip:!b,variables:{userId:b,accountId:A,includeAccount:!!A},onCompleted:e=>{let{user:t}=e;if(!t)return;let r=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(A)}),n={id:t.id,accountId:r?.account.id||A||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...r?{accountUserId:r.id,accountId:r.account.id,role:eo?.find?.(e=>e?.value===r?.role),position:r.position||null,isContact:!0===r.isContact?"yes":"no",status:r.status,location:"admin"===U&&"user"===r.role?void 0:r.userLocations.map(e=>e.accountLocationId),modules:r.modules}:{}};Q(!0),eh(n),N(`${U}_${n.role?.value||""}`),ee(n.accountUserId||null)}});(0,n.t)(_.R,{skip:!A,variables:{accountId:A,userId:b},onCompleted:e=>{let{accountUsers:t}=e;B(!(t.length>0))}});let ej="admin_user"===D,ey=null!=m.f[D]&&b!==L.id&&G,{data:e$}=(0,n.t)(R,{skip:!ej||null==A,variables:{accountId:A}}),eI=(0,r.useMemo)(()=>e$?.location?.map(e=>e.id)??[],[e$]),{data:{restrictedLocations:ew=[]}={restrictedLocations:[]},loading:eA}=(0,n.t)(F,{skip:!ej||!Z,variables:{accountUserId:Z}});(0,r.useEffect)(()=>{ej?!Z||eA||J||(ex("location",ew.map(e=>e.locationId)),K(!0)):K(!1)},[Z,J,ej,ew,eA,ex]),(0,r.useEffect)(()=>{!en.current||ej||b||(ex("location",void 0),er(!1)),en.current=ej},[ej,ex,b]);let{data:{location:eU,meta:eq}={location:[],meta:{aggregate:{totalCount:0}}},loading:eC}=(0,n.t)(v.u,{skip:ej||!A,variables:{accountId:A,...S}}),{data:{location:eL,meta:ek}={location:[],meta:{aggregate:{totalCount:0}}},loading:eS}=(0,n.t)(P,{skip:!ej||!A,variables:{accountId:A,q:""!==Y?`%${Y}%`:null,...S}}),eM=ej?eL:eU,eT=ej?ek:eq,eO=ej?eS:eC,eP="admin"===U&&ej&&!b&&!et,eR=(0,r.useCallback)(e=>t=>{ej&&er(!0),t.target.checked?ex("location",[...new Set([...eb??[],e])]):ex("location",(eb??[]).filter(t=>t!==e))},[ej,eb,ex]),eF=(0,r.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!ej||0===eI.length)return null;let e=Array.isArray(eb)?eb:[],r=eI.length>0&&eI.every(t=>e.includes(t)),n=e.length>0;return eP?(0,t.jsx)(s.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(er(!0),ex("location",[...eI]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(s.f,{color:"secondary",checked:r,indeterminate:n&&!r,onChange:e=>{er(!0),e.target.checked?ex("location",[...eI]):ex("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:r}=e;return r.id?(0,t.jsx)(s.f,{color:"secondary",checked:!eP&&!!eb?.includes(r.id),onChange:eR(r.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:r}=e;return r.address?(0,t.jsxs)(c.f,{children:[(0,t.jsx)(d.f,{children:r.address.addressLine1}),(0,t.jsx)(d.f,{children:r.address.postCode})]}):(0,t.jsx)(d.f,{children:"Please add"})}},...ej?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:r}=e;return r.customerId&&r.customer?(0,t.jsx)(w.f,{color:"secondary",href:`/dashboard/customers/view?id=${r.customerId}`,onClick:e=>e.stopPropagation(),children:r.customer}):null}}]:[]],[eI,eP,ej,eb,eR,er,ex]),ez=(0,r.useMemo)(()=>(eM??[]).map(e=>({id:ej?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[ej,eM]);if(ev)return(0,t.jsx)(c.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(l.f,{color:"secondary"})});let eE={id:(0,j.G)(U,C)};return(0,t.jsx)(o.p,{...eu,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:em(e=>{let t="admin"===U&&ej&&!b&&!et&&eI.length>0?{...e,location:[...eI]}:e,r=ey?(0,p.f)(e.modules,m.f[D]?.map(e=>e.name)??[]):void 0;q(r?{...t,modules:r}:t,e_?.meta)}),children:[(0,t.jsx)(M,{}),A&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.f,{paddingTop:1,children:[(0,j.G)(U,C)&&(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"role",control:ed,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(y.f,{value:r,onChange:(e,t)=>n(t),label:"Role",options:eo,variant:"standard",color:"secondary",error:!!ef?.role,helperText:ef?.role?.message||ef?.role?.value?.message})}},V?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"position",control:ed,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:r||"",onChange:e=>n(e.target.value||null),InputLabelProps:{shrink:!!r},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,j.u)({accountType:U,role:eg?.value,hasRole:C})&&e_?.id!==L.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"invoiceThreshold",control:ed,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:r,onChange:n,InputLabelProps:{shrink:!!r},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(c.f,{marginBottom:1,children:(0,t.jsx)(o.e,{name:"quoteThreshold",control:ed,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(u.f,{fullWidth:!0,value:r,onChange:n,InputLabelProps:{shrink:!!r},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(c.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(d.f,{sx:H.title,children:"Contact user"}),(0,t.jsx)(o.e,{name:"isContact",control:ed,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(h.f,{formControlProps:{sx:{m:0}},stackProps:ef.isContact?H.radioGroupError:H.radioGroup,error:!!ef.isContact,value:r,onChange:n,options:E,labelLeft:!0,helperText:ef.isContact?.message})}},V?"contact-edit-mode":"contact-create-mode")]}),ey&&(0,t.jsx)(f.f,{role:D})]}),z.includes(D)&&b!==L.id&&G&&(0,t.jsxs)(i.f,{sx:ef.location?H.locationError:{},children:[(0,t.jsx)(d.f,{sx:H.title,children:"Locations"}),ej&&O&&(0,t.jsx)(u.f,{fullWidth:!0,value:Y,onChange:e=>{X(e.target.value),k.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!Y},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)(I.s,{...k,columnVisibilityModel:eE,totalCount:eT.aggregate.totalCount,columns:eF,loading:eO,rows:ez,autoHeight:!0}),(0,t.jsx)(o.e,{control:ed,name:"location",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}})]})]}),b&&(0,t.jsx)(o.e,{control:ed,name:"id",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}}),A&&(0,t.jsx)(o.e,{control:ed,name:"accountId",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}}),Z&&(0,t.jsx)(o.e,{control:ed,name:"accountUserId",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}})]})})}],697871)},56271,577372,403901,546788,498813,e=>{var t=e.i(391398),r=e.i(813843),n=e.i(115871);let o=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],a=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],i={customer_user:o,admin_user:o,supplier_owner:a,supplier_manager:a,supplier_user:a,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...a]};e.s(["f",0,i],577372);var s=e.i(191788),l=e.i(422411),c=e.i(152078),u=e.i(799083),d=e.i(738251);let f={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:o}=e,{control:a,watch:m,setValue:p}=(0,l.M)(),h=!!m("modules.jobHistoryAll"),x=(0,s.useMemo)(()=>i[o]||[],[o]);return(0,s.useEffect)(()=>{h&&p("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[h,p]),(0,t.jsxs)(d.f,{children:[(0,t.jsx)(n.f,{sx:f,children:"Permissions"}),(0,t.jsx)(r.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:x.map(e=>{let r="jobHistorySupplier"===e.name&&h;return(0,t.jsx)(l.e,{name:`modules.${e.name}`,control:a,render:n=>{let{value:o,onChange:a}=n;return(0,t.jsx)(c.f,{disabled:r,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(u.f,{color:"secondary",checked:!!o,disabled:r,onChange:e=>a(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let m=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let r=e??{};return Object.fromEntries(m.map(e=>[e,t.includes(e)&&!0===r[e]]))}],403901);var p=e.i(426778);let h="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",x=(0,p.t)().shape({id:(0,p.H)().nullable().optional(),accountId:(0,p.H)().nullable().optional(),nameFirst:(0,p.x)().required(),nameLast:(0,p.x)().required(),email:(0,p.x)().required().email(),phone:(0,p.x)().required(),status:(0,p.x)().when("$hasRole",(e,t)=>{let[r]=e;return r?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,p.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,p.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,p.t)().nullable().shape({label:(0,p.x)(),value:(0,p.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[r,n,o]=e;return r?n?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):o&&"number"==typeof o&&o>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[r,n]=e;return r&&n&&"number"==typeof n&&n>0?t.required("Role is required"):t.nullable()}),userId:(0,p.H)().nullable().optional(),accountUserId:(0,p.H)().nullable().optional(),position:(0,p.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,p.x)().nullable(),otherwise:()=>(0,p.x)().nullable()}),isContact:(0,p.x)().when("accountId",{is:e=>!!e,then:()=>(0,p.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[r,n,o]=e;return o?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):r&&n?t.oneOf(["yes"],h).required(h):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,p.x)().nullable().optional()}),location:(0,p.k)().of((0,p.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[r,n]=e;return!r||n?t.nullable().optional():t.required()})});e.s(["f",0,x],546788);var g=e.i(159080);let b=g.f`
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
`,_=g.f`
  query FindOwnersByAccount($accountId: Int, $userId: Int) {
    accountUsers: Account_User(
      where: { role: { _eq: "owner" }, accountId: { _eq: $accountId }, userId: { _neq: $userId } }
    ) {
      id
      role
    }
  }
`,v=g.f`
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
`;e.s(["a",0,v,"R",0,_,"E",0,b],498813)},920475,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),a=e.r(391398);r.default=(0,o.default)((0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},659587,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),a=e.r(391398);r.default=(0,o.default)((0,a.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},741850,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),a=e.r(391398);r.default=(0,o.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},870307,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),a=e.r(391398);r.default=(0,o.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var r=e.i(231637);e.s(["f",()=>r.f],524057)}],625106,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,r)=>{var n=e.r(933571),o=e.r(729549),a=e.r(630357);function i(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new n;++t<r;)this.add(e[t])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},278166,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=0,a=[];++r<n;){var i=e[r];t(i,r,e)&&(a[o++]=i)}return a}},576723,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}},297560,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}},538916,(e,t,r)=>{var n=e.r(576723),o=e.r(448684);t.exports=function(e,t,r){var a=t(e);return o(e)?a:n(a,r(e))}},190835,(e,t,r)=>{var n=e.r(858056),o=e.r(432836);t.exports=function e(t,r,a,i,s){return t===r||(null!=t&&null!=r&&(o(t)||o(r))?n(t,r,a,i,e,s):t!=t&&r!=r)}},858056,(e,t,r)=>{var n=e.r(698620),o=e.r(536712),a=e.r(317744),i=e.r(804191),s=e.r(268829),l=e.r(448684),c=e.r(613272),u=e.r(75299),d="[object Arguments]",f="[object Array]",m="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,h,x,g){var b=l(e),_=l(t),v=b?f:s(e),j=_?f:s(t);v=v==d?m:v,j=j==d?m:j;var y=v==m,$=j==m,I=v==j;if(I&&c(e)){if(!c(t))return!1;b=!0,y=!1}if(I&&!y)return g||(g=new n),b||u(e)?o(e,t,r,h,x,g):a(e,t,v,r,h,x,g);if(!(1&r)){var w=y&&p.call(e,"__wrapped__"),A=$&&p.call(t,"__wrapped__");if(w||A){var U=w?e.value():e,q=A?t.value():t;return g||(g=new n),x(U,q,r,h,g)}}return!!I&&(g||(g=new n),i(e,t,r,h,x,g))}},758629,(e,t,r)=>{var n=e.r(734274),o=e.r(517059),a=Object.prototype.hasOwnProperty;t.exports=function(e){if(!n(e))return o(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},33483,(e,t,r)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,r)=>{var n=e.r(650119),o=e.r(297560),a=e.r(33483);t.exports=function(e,t,r,i,s,l){var c=1&r,u=e.length,d=t.length;if(u!=d&&!(c&&d>u))return!1;var f=l.get(e),m=l.get(t);if(f&&m)return f==t&&m==e;var p=-1,h=!0,x=2&r?new n:void 0;for(l.set(e,t),l.set(t,e);++p<u;){var g=e[p],b=t[p];if(i)var _=c?i(b,g,p,t,e,l):i(g,b,p,e,t,l);if(void 0!==_){if(_)continue;h=!1;break}if(x){if(!o(t,function(e,t){if(!a(x,t)&&(g===e||s(g,e,r,i,l)))return x.push(t)})){h=!1;break}}else if(!(g===b||s(g,b,r,i,l))){h=!1;break}}return l.delete(e),l.delete(t),h}},317744,(e,t,r)=>{var n=e.r(889239),o=e.r(84742),a=e.r(198373),i=e.r(536712),s=e.r(692152),l=e.r(231853),c=n?n.prototype:void 0,u=c?c.valueOf:void 0;t.exports=function(e,t,r,n,c,d,f){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!d(new o(e),new o(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var m=s;case"[object Set]":var p=1&n;if(m||(m=l),e.size!=t.size&&!p)break;var h=f.get(e);if(h)return h==t;n|=2,f.set(e,t);var x=i(m(e),m(t),n,c,d,f);return f.delete(e),x;case"[object Symbol]":if(u)return u.call(e)==u.call(t)}return!1}},804191,(e,t,r)=>{var n=e.r(577256),o=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,a,i,s){var l=1&r,c=n(e),u=c.length;if(u!=n(t).length&&!l)return!1;for(var d=u;d--;){var f=c[d];if(!(l?f in t:o.call(t,f)))return!1}var m=s.get(e),p=s.get(t);if(m&&p)return m==t&&p==e;var h=!0;s.set(e,t),s.set(t,e);for(var x=l;++d<u;){var g=e[f=c[d]],b=t[f];if(a)var _=l?a(b,g,f,t,e,s):a(g,b,f,e,t,s);if(!(void 0===_?g===b||i(g,b,r,a,s):_)){h=!1;break}x||(x="constructor"==f)}if(h&&!x){var v=e.constructor,j=t.constructor;v!=j&&"constructor"in e&&"constructor"in t&&!("function"==typeof v&&v instanceof v&&"function"==typeof j&&j instanceof j)&&(h=!1)}return s.delete(e),s.delete(t),h}},577256,(e,t,r)=>{var n=e.r(538916),o=e.r(40811),a=e.r(622335);t.exports=function(e){return n(e,a,o)}},40811,(e,t,r)=>{var n=e.r(856408),o=e.r(1107),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols;t.exports=i?function(e){return null==e?[]:n(i(e=Object(e)),function(t){return a.call(e,t)})}:o},268829,(e,t,r)=>{var n=e.r(625106),o=e.r(696138),a=e.r(441298),i=e.r(340682),s=e.r(278166),l=e.r(912904),c=e.r(742186),u="[object Map]",d="[object Promise]",f="[object Set]",m="[object WeakMap]",p="[object DataView]",h=c(n),x=c(o),g=c(a),b=c(i),_=c(s),v=l;(n&&v(new n(new ArrayBuffer(1)))!=p||o&&v(new o)!=u||a&&v(a.resolve())!=d||i&&v(new i)!=f||s&&v(new s)!=m)&&(v=function(e){var t=l(e),r="[object Object]"==t?e.constructor:void 0,n=r?c(r):"";if(n)switch(n){case h:return p;case x:return u;case g:return d;case b:return f;case _:return m}return t}),t.exports=v},692152,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,n){r[++t]=[n,e]}),r}},517059,(e,t,r)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,r)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},949125,(e,t,r)=>{var n=e.r(190835);t.exports=function(e,t){return n(e,t)}},622335,(e,t,r)=>{var n=e.r(419188),o=e.r(758629),a=e.r(379858);t.exports=function(e){return a(e)?n(e):o(e)}},1107,(e,t,r)=>{t.exports=function(){return[]}}]);