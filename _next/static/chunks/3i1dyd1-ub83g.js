(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[201894,989373,e=>{var t,n=((t={}).ACTIVE="active",t.INACTIVE="inactive",t);e.s(["f",()=>n],989373);let a=[{label:"Active",value:n.ACTIVE},{label:"Inactive",value:n.INACTIVE}];e.s(["h",0,[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"},{label:"Tenant",value:"tenant"}],"d",0,{active:"success",inactive:"danger"},"P",0,a],201894)},544005,e=>{e.s(["f",0,(e,t)=>{let n={...e};return Object.entries(t).forEach(e=>{let[t,a]=e;void 0===n[t]&&(n[t]=a)}),n}])},239964,e=>{var t=e.i(391398),n=e.i(191788),a=e.i(691567),r=e.i(773831),o=e.i(33670),s=e.i(901004),i=e.i(509790),l=e.i(692113),c=e.i(137995),d=e.i(817581),u=e.i(420),m=e.i(870307),f=e.i(407329),p=e.i(390536),h=e.i(978319),x=e.i(376733),g=e.i(13558),b=e.i(562673),v=e.i(339909),y=e.i(89029),j=e.i(129503),C=e.i(213419),w=e.i(12028),k=e.i(813843),_=e.i(115871);let I={add:(0,t.jsx)(d.default,{}),archive:(0,t.jsx)(l.default,{}),avatar:(0,t.jsx)(w.default,{}),check:(0,t.jsx)(u.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(h.default,{}),description:(0,t.jsx)(f.default,{}),download:(0,t.jsx)(p.default,{}),info:(0,t.jsx)(g.default,{}),edit:(0,t.jsx)(x.default,{}),location:(0,t.jsx)(y.default,{}),unarchive:(0,t.jsx)(c.default,{}),uploadFile:(0,t.jsx)(b.default,{}),receipt:(0,t.jsx)(v.default,{}),visibility:(0,t.jsx)(C.default,{})},$={default:(0,t.jsx)(i.default,{}),defaultHoriz:(0,t.jsx)(j.default,{}),description:(0,t.jsx)(f.default,{})},S=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],T=e=>{let{actionsData:a=S,icon:i="default",row:l,disabled:c=!1}=e,[d,u]=(0,n.useState)(null),m=()=>{u(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(r.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:c,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),u(e.currentTarget)},children:$[i]}),(0,t.jsx)(o.f,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:!!d,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:a(l).map((e,n)=>(0,t.jsx)(s.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(k.f,{direction:"row",alignItems:"center",spacing:2,children:[I?.[e.icon]||null,(0,t.jsx)(_.f,{children:e.tooltip})]})},n))})]})};T.propTypes={actionsData:a.default.func,icon:a.default.oneOf(["default","description"]),row:a.default.any.isRequired,disabled:a.default.bool},e.s(["f",0,T])},128662,e=>{var t=e.i(391398),n=e.i(691567),a=e.i(280445),r=e.i(115871),o=e.i(813843),s=e.i(755548),i=e.i(587369);let l=(0,a.f)("img")({width:"300px",height:"250px"}),c={},d={},u={},m={},f={},p=e=>{let{imageSrc:n,sx:a=c,imageSx:p=d,title:h="",titleSx:x=u,subtitleFirstLine:g="",subtitleFirstLineSx:b=m,subtitleSecondLine:v="",subtitleSecondLineSx:y=f,buttonText:j,onAction:C=null}=e,w=(0,i.f)("(max-width: 400px)");return(0,t.jsxs)(o.f,{sx:{...a,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(l,{src:n,sx:{...p,width:w?"250px":"300px"}}),(0,t.jsx)(r.f,{typography:"h5",sx:{...x},children:h}),(0,t.jsxs)(o.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(r.f,{sx:{...b},children:g}),(0,t.jsx)(r.f,{sx:{...y},children:v})]}),j&&C&&(0,t.jsx)(s.f,{variant:"contained",color:"secondary",onClick:C,children:j})]})};p.propTypes={imageSrc:n.string,title:n.string,subtitleFirstLine:n.string,subtitleSecondLine:n.string,onAction:n.func,sx:n.object,imageSx:n.object,titleSx:n.object,subtitleFirstLineSx:n.object,subtitleSecondLineSx:n.object},e.s(["f",0,p])},60903,e=>{e.s(["f",0,(e,t)=>{let n=document.createElement("a");"string"==typeof n.download?(document.body.appendChild(n),n.download=t,n.href=e,n.click(),document.body.removeChild(n)):location.replace(e)}])},637129,e=>{var t=e.i(191788),n=e.i(159080),a=e.i(776204),r=e.i(432171),o=e.i(498681);let s=n.f`
  query GetAccountUserFilters($accountUserId: Int!) {
    accountUser: Account_User_by_pk(id: $accountUserId) {
      filters
    }
  }
`,i=n.f`
  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {
    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {
      id
    }
  }
`;e.s(["f",0,function(e,n){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",{user:c}=(0,o.f)(),[d,u]=(0,t.useState)(()=>{try{switch(l){case"network":case"state":return n;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(e))||n}}catch(e){return n}});(0,r.t)(s,{variables:{accountUserId:c?.accountUserId},skip:"network"!==l,onCompleted:t=>{let{accountUser:a}=t;a&&u(a.filters[e]||n)}});let[m]=(0,a.f)(i);return[d,t=>{try{let n=t instanceof Function?t(d):t;switch(u(n),l){case"network":m({variables:{accountUserId:c?.accountUserId,filters:{[e]:n}}});break;case"sessionStorage":window.sessionStorage.setItem(e,JSON.stringify(n))}}catch(e){}}]}])},686255,530568,e=>{var t=e.i(391398),n=e.i(362537),a=e.i(191788),r=e.i(422411),o=e.i(424894),s=e.i(21557),i=e.i(813843),l=e.i(115871),c=e.i(652148),d=e.i(122989),u=e.i(722394),m=e.i(426778);let f=(0,m.t)().shape({id:(0,m.H)().nullable(),nameFirst:(0,m.x)().required(),nameLast:(0,m.x)().required(),email:(0,m.x)().email().required(),phone:(0,m.x)().required(),bookingStart:(0,m.c)().transform((e,t)=>t?(0,n.default)(t).utc(!0).startOf("day").toDate():e).typeError("Invalid date").required(),bookingEnd:(0,m.c)().transform((e,t)=>t?(0,n.default)(t).utc(!0).startOf("day").toDate():e).typeError("Invalid date").required("").when("bookingStart",(e,t)=>{let[n]=e;return n?t.min(n,"Access end date must be on or after start date."):t}),notes:(0,m.x)(),userId:(0,m.H)().nullable(),locationId:(0,m.H)().nullable(),modules:(0,m.t)().nullable(),status:(0,m.x)().oneOf(["active","inactive"]).required()});var p=e.i(207646);let h=[{label:"Job reports",name:"jobReports"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}];var x=e.i(152078),g=e.i(799083);let b=e=>{let{name:n,control:a,permissions:o=[]}=e;return(0,t.jsxs)(i.f,{sx:{marginBottom:2},children:[(0,t.jsx)(l.f,{variant:"h6",color:"dark.main",sx:v.title,children:"Permissions"}),(0,t.jsx)(i.f,{gap:1,direction:"row",flexWrap:"wrap",children:o.map(e=>(0,t.jsx)(r.e,{name:`${n?n+".":""}${e.name}`,control:a,render:n=>{let{value:a,onChange:r}=n;return(0,t.jsx)(x.f,{color:"dark.main",control:(0,t.jsx)(g.f,{color:"secondary",checked:a,onChange:e=>r(e.target.checked)}),label:e.label})}}))})]})},v={title:{fontSize:"20px",fontWeight:300,marginBottom:1,color:"gray"}};var y=e.i(776204),j=e.i(159080);let C=j.f`
  mutation AddTenantBooking(
    $nameFirst: String
    $nameLast: String
    $email: String
    $phone: String
    $bookingStart: timestamptz
    $bookingEnd: timestamptz
    $notes: String
    $status: String
    $locationId: Int!
    $userId: Int
    $modules: jsonb
  ) {
    createTenant(
      nameFirst: $nameFirst
      nameLast: $nameLast
      email: $email
      phone: $phone
      bookingStart: $bookingStart
      bookingEnd: $bookingEnd
      notes: $notes
      status: $status
      locationId: $locationId
      userId: $userId
      modules: $modules
    ) {
      data
      success
    }
  }
`,w=j.f`
  mutation UpdateTenantBooking(
    $id: Int!
    $changes: TenantBooking_set_input
    $userId: Int!
    $accountUser: Account_User_set_input
    $user: User_set_input
  ) {
    update_TenantBooking_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
    update_Account_User(
      where: { userId: { _eq: $userId }, Account: { type: { _eq: "tenant" } } }
      _set: $accountUser
    ) {
      returning {
        id
      }
    }
    update_User_by_pk(pk_columns: { id: $userId }, _set: $user) {
      id
    }
  }
`;j.f`
  mutation DeleteTenantBooking($id: Int!) {
    delete_TenantBooking_by_pk(id: $id) {
      id
    }
  }
`;let k={marginBottom:2,fontSize:"20px",fontWeight:300,color:"gray"},_={fontSize:"14px",fontWeight:400,color:"text.secondary",marginBottom:1};e.s(["f",0,e=>{let{defaultValues:m,offCanvas:x,refetch:g}=e,v=(0,s.f)(),{control:j,errors:I,handleSubmit:$,register:S}=(0,r.G)({defaultValues:m,resolver:(0,o.yupResolver)(f)}),[T]=(0,y.f)(C,{onCompleted:()=>{x.close(),g()},onError:e=>{v.show({content:`Error: ${e.message}`,severity:"error"})}}),[A]=(0,y.f)(w,{onCompleted:()=>{x.close(),g()},onError:e=>{v.show({content:`Error: ${e.message}`,severity:"error"})}}),E=(0,a.useCallback)(e=>{e.id?A({variables:{id:e.id,changes:{bookingStart:e.bookingStart,bookingEnd:e.bookingEnd,notes:e.notes,status:e.status},userId:e.userId,accountUser:{modules:e.modules},user:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone}}}):T({variables:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,bookingStart:e.bookingStart,bookingEnd:e.bookingEnd,notes:e.notes,status:e.status,locationId:e.locationId,userId:e.userId,modules:e.modules}})},[T,A]);return(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:$(E),children:(0,t.jsxs)(i.f,{gap:3,children:[(0,t.jsxs)(i.f,{children:[(0,t.jsx)(l.f,{sx:k,children:"Tenant information"}),(0,t.jsxs)(i.f,{spacing:1,children:[(0,t.jsxs)(i.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"nameFirst",control:j,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(c.f,{fullWidth:!0,label:"First name",value:n||"",onChange:a,variant:"standard",color:"secondary",error:!!I.nameFirst})}}),(0,t.jsx)(r.e,{name:"nameLast",control:j,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(c.f,{fullWidth:!0,label:"Last name",value:n||"",onChange:a,variant:"standard",color:"secondary",error:!!I.nameLast})}})]}),(0,t.jsxs)(i.f,{direction:"row",spacing:2,children:[(0,t.jsx)(r.e,{name:"email",control:j,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(c.f,{fullWidth:!0,label:"Email",type:"email",value:n||"",onChange:a,variant:"standard",color:"secondary",error:!!I.email})}}),(0,t.jsx)(r.e,{name:"phone",control:j,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(c.f,{fullWidth:!0,label:"Mobile",value:n||"",onChange:a,variant:"standard",color:"secondary",error:!!I.phone})}})]})]})]}),(0,t.jsxs)(i.f,{children:[(0,t.jsx)(l.f,{sx:k,children:"Access information"}),(0,t.jsxs)(i.f,{spacing:3,children:[(0,t.jsxs)(i.f,{direction:"row",spacing:2,children:[(0,t.jsxs)(i.f,{sx:{flex:1},children:[(0,t.jsx)(l.f,{sx:_,children:"Booked from"}),(0,t.jsx)(r.e,{name:"bookingStart",control:j,render:e=>{let{onChange:a,value:r}=e;return(0,t.jsx)(u.f,{value:r?(0,n.default)(r):null,onChange:a,format:"DD MMM YYYY",slotProps:{textField:{fullWidth:!0,autoComplete:"off",color:"secondary",variant:"standard",placeholder:"Click to select date",error:!!I.bookingStart}}})}})]}),(0,t.jsxs)(i.f,{sx:{flex:1},children:[(0,t.jsx)(l.f,{sx:_,children:"Booked to"}),(0,t.jsx)(r.e,{name:"bookingEnd",control:j,render:e=>{let{onChange:a,value:r}=e;return(0,t.jsx)(u.f,{value:r?(0,n.default)(r):null,onChange:a,format:"DD MMM YYYY",slotProps:{textField:{fullWidth:!0,autoComplete:"off",color:"secondary",variant:"standard",placeholder:"Click to select date",error:!!I.bookingEnd,helperText:I.bookingEnd?.message}}})}})]})]}),(0,t.jsx)(r.e,{name:"notes",control:j,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(c.f,{multiline:!0,fullWidth:!0,rows:4,color:"secondary",variant:"filled",label:"Notes",value:n,onChange:a,error:!!I.notes,helperText:I.notes?.message})}}),(0,t.jsx)(r.e,{name:"status",control:j,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(d.f,{value:n||"",onChange:a,options:p.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary",error:!!I.status,helperText:I.status?.message})}})]})]}),(0,t.jsx)(b,{name:"modules",control:j,permissions:h}),m?.id&&(0,t.jsx)("input",{name:"id",ref:S,type:"hidden",value:m.id}),m?.userId&&(0,t.jsx)("input",{name:"userId",ref:S,type:"hidden",value:m.userId}),m?.locationId&&(0,t.jsx)("input",{name:"locationId",ref:S,type:"hidden",value:m.locationId})]})})}],686255),e.s(["f",0,(e,t)=>{let n={id:e?.id||void 0,bookingStart:e?.bookingStart?new Date(e.bookingStart):void 0,bookingEnd:e?.bookingEnd?new Date(e.bookingEnd):void 0,notes:e?.notes||"",locationId:t,status:e?.status||"active"};return e?.id&&e?.user?{...n,userId:e.user.id,modules:e.user.accountUsers?.[0]?.modules||{},nameFirst:e.user.nameFirst,nameLast:e.user.nameLast,email:e.user.email,phone:e.user.phone}:{...n,email:"",nameFirst:"",nameLast:"",phone:""}}],530568)},870307,(e,t,n)=>{var a=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e.r(421506)),o=e.r(391398);n.default=(0,r.default)([(0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,o.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},891723,(e,t,n)=>{var a=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},373398,e=>{var t=e.i(391398),n=e.i(738251),a=e.i(115871),r=e.i(191788),o=e.i(203828),s=e.i(362537),i=e.i(98926),l=e.i(877341),c=e.i(776204),d=e.i(432171),u=e.i(215843),m=e.i(920475),f=e.i(755548),p=e.i(800884),h=e.i(76381),x=e.i(917569),g=e.i(88152),b=e.i(813843),v=e.i(451221),y=e.i(891723),j=e.i(74633),C=e.i(239964),w=e.i(128662),k=e.i(396413),_=e.i(697871),I=e.i(686255),$=e.i(530568),S=e.i(594301),T=e.i(411331),A=e.i(21557),E=e.i(436703),U=e.i(399942),F=e.i(219281),N=e.i(39059),q=e.i(60903),L=e.i(93198),B=e.i(422411),P=e.i(683125),W=e.i(280445),M=e.i(652148),D=e.i(587369),H=e.i(106997),O=e.i(637129),Y=e.i(201894);let z=f.f,V=e=>{let{initialFilters:n,filters:a,setFilters:r,open:o,onClose:s}=e,i=(0,D.f)("(max-width: 400px)"),[l,c]=(0,O.f)(`form_data_${n.filterType}`,n),d={q:l.q||"",status:l.status?{label:"active"===l.status?"Active":"Inactive",value:l.status}:null,accountType:((e,t)=>{if(!t)return null;let n=e.find(e=>String(e.value)===t);return n?{label:n.label,value:String(n.value)}:null})(Y.h,l.accountType),isContact:l.isContact?{label:"yes"===l.isContact?"Yes":"No",value:l.isContact}:null},{control:u,handleSubmit:m,register:f,reset:p,errors:h}=(0,B.G)({defaultValues:d});return(0,t.jsx)(R,{open:o,onClose:s,children:(0,t.jsx)(g.f,{sx:{minWidth:i?"300px":"400px",padding:"20px 40px"},children:(0,t.jsxs)("form",{onSubmit:m(e=>{let t={...a,q:e.q||"",status:e.status?.value||null,accountType:e.accountType?.value||null,isContact:e.isContact?.value||null};r(t),c(t),p(e),s()}),children:[(0,t.jsxs)(b.f,{spacing:4,children:[(0,t.jsx)(M.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:f}),(0,t.jsx)(B.e,{name:"accountType",control:u,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(H.f,{color:"secondary",value:n,onChange:(e,t)=>a(t),options:Y.h,textFieldProps:{label:"Select account type",variant:"standard",color:"secondary",error:h.accountType,helperText:h.accountType?.message}})}}),(0,t.jsx)(B.e,{name:"status",control:u,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(H.f,{color:"secondary",value:n,onChange:(e,t)=>a(t),options:Y.P,textFieldProps:{label:"Select status",variant:"standard",color:"secondary"}})}}),(0,t.jsx)(B.e,{name:"isContact",control:u,render:e=>{let{value:n,onChange:a}=e;return(0,t.jsx)(H.f,{color:"secondary",value:n,onChange:(e,t)=>a(t),options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],textFieldProps:{label:"Contact user",variant:"standard",color:"secondary"}})}})]}),(0,t.jsxs)(b.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,t.jsx)(z,{variant:"contained",color:"danger",onClick:()=>{r(n),p(d),s(),c(n)},children:"Cancel"}),(0,t.jsx)(z,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},R=(0,W.f)(P.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}));var G=e.i(159080);let J=G.f`
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
`,Q=G.f`
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
          modules
        }
      }
    }
  }
`,X=e=>[{email:{_ilike:e}},{nameFirst:{_ilike:e}},{nameLast:{_ilike:e}},{fullName:{_ilike:e}}],K=e=>"active"===e||"inactive"===e?e:"inactive";var Z=e.i(122965),ee=e.i(472552);let et={filterType:"users_table_v2",q:"",status:"active",accountType:null,isContact:null},en={admin:"admins",customer:"customers",supplier:"suppliers"},ea=e=>{let{initialFilters:n}=e,B=(0,v.f)(),P=(0,r.useMemo)(()=>({admin:{borderColor:B.palette.danger.main,color:B.palette.danger.main},customer:{borderColor:B.palette.secondary.main,color:B.palette.secondary.main},supplier:{borderColor:B.palette.success.main,color:B.palette.success.main},tenant:{borderColor:B.palette.info.main,color:B.palette.info.main}}),[B]),W=(0,i.f)(),M=(0,T.f)(),D=(0,A.f)(),{user:H,hasRole:O}=(0,S.f)(),z=O("admin_user"),R=(0,L.r)(),{reference:G,pagination:ea,order:er}=(0,Z.f)({initialSort:[{item:"createdAt",order:"desc"}]}),eo=n??et,[es,ei]=(0,r.useState)(eo),[el,ec]=(0,r.useState)(!1),[ed,eu]=(0,r.useState)(!1),{accountUsersNestedWhere:em,usersWhere:ef}=(0,r.useMemo)(()=>(e=>{let{accountType:t,isContact:n,status:a,q:r}=e,o={};t&&(o.Account={type:{_eq:t}}),n&&(o.isContact={_eq:"yes"===n});let s={...o},i={},l=(e=>{let t=e.trim();if(!t)return null;let n=t.split(/\s+/).filter(Boolean);return n.length<=1?{_or:X(`%${t}%`)}:{_and:n.map(e=>({_or:X(`%${e}%`)}))}})(r.trim());if(a)if("tenant"===t)i.TenantBookings={status:{_eq:a}};else if(t)s.status={_eq:a};else{let e=[{Account_Users:{...s,status:{_eq:a},Account:{...s.Account,type:{_neq:"tenant"}}}},{TenantBookings:{status:{_eq:a}},Account_Users:{...s,Account:{...s.Account,type:{_eq:"tenant"}}}}];return l?i._and=[{_or:e},l]:i._or=e,{accountUsersNestedWhere:o,usersWhere:i}}return Object.keys(s).length>0&&(i.Account_Users=s),l&&(i._and?i._and=[...i._and,l]:Object.keys(i).length>0?(i._and=[{...i},l],Object.keys(i).forEach(e=>{"_and"!==e&&delete i[e]})):Object.assign(i,l)),{accountUsersNestedWhere:o,usersWhere:i}})({accountType:es.accountType,isContact:es.isContact,status:es.status,q:es.q}),[es.accountType,es.isContact,es.q,es.status]),ep=(0,r.useMemo)(()=>({...ea,orderBy:er?.[0]}),[ea,er]),{data:{users:eh,meta:ex}={users:[],meta:{aggregate:{totalCount:0}}},loading:eg,refetch:eb}=(0,d.t)(J,{variables:{where:ef,accountUsersNestedWhere:em,...ep}}),ev=(0,r.useCallback)(e=>e.map(e=>{let t=e.accounts.find(e=>null!=e.account&&(!es.accountType||e.account.type===es.accountType))||e.accounts.find(e=>null!=e.account);if(!t)return null;let n=t.account?.type||null;return{id:e.id,name:`${e.nameFirst} ${e.nameLast}`,nameFirst:e.nameFirst,accountId:t.account?.id||null,accountType:n,accountName:t.account?.name||null,email:e.email,phone:e.phone||"",role:t.role||"",status:(e=>{let{accountType:t,accountUserStatus:n,tenantBookingStatus:a}=e;return"tenant"===t?K(a):K(n)})({accountType:n,accountUserStatus:t.status,tenantBookingStatus:e.tenantBookings?.[0]?.status}),position:t.position||"N/A",isContact:!!t.isContact,createdAt:(0,s.default)(e.createdAt).format("YYYY-MM-DD"),media:e.media}}).filter(Boolean),[es.accountType]),ey=(0,r.useCallback)(e=>ev(e).map(e=>({name:e.name,accountType:e.accountType||"",accountName:"tenant"===e.accountType?"":e.accountName||"",email:e.email,phone:e.phone,role:e.role,position:e.position,contactUser:e.isContact?"Yes":"No",status:e.status,createdAt:e.createdAt})),[ev]),[ej]=(0,l.f)(J,{fetchPolicy:"no-cache",onCompleted:e=>{let{users:t}=e;try{let e=ee.default.unparse(ey(t),{escapeFormulae:/^[=+@\t\r]/}),n="data:application/octet-stream,"+encodeURIComponent(e);(0,q.f)(n,"users.csv")}finally{eu(!1)}},onError:()=>{eu(!1),D.show({content:"Error while exporting users CSV",severity:"error"})}}),[eC]=(0,c.f)(N.I,{onCompleted:()=>{M.close(),eb()},onError:e=>{let t=e?.graphQLErrors?.[0]?.extensions?.code.includes("constraint-violation")?`A user with this email address already exists.
        Each user must have a unique email address.
        Please amend the current user or enter a new email address.`:"Error while creating user";D.show({content:t,severity:"error"})}}),[ew]=(0,c.f)(N.V,{onCompleted:()=>{M.close(),eb()},onError:e=>{let t=e?.graphQLErrors?.[0]?.extensions?.code.includes("constraint-violation")?`A user with this email address already exists.
        Each user must have a unique email address.
        Please amend the current user or enter a new email address.`:"Error while updating user";D.show({content:t,severity:"error"})}}),[ek]=(0,c.f)(N.U,{onCompleted:()=>{eb()},onError:()=>{D.show({content:"Error getting user`s locations",severity:"error"})}}),[e_]=(0,c.f)(N.s,{onCompleted:()=>{eb()},onError:()=>{D.show({content:"Error updating user restricted locations",severity:"error"})}}),eI=(0,r.useMemo)(()=>ev(eh),[ev,eh]),e$=(0,r.useCallback)(async(e,t,n)=>{let a=await (0,U.f)(W,e.email,!0),r=(0,F.y)({...e},t,a),o="admin"===n&&e.role?.value==="user";if(e.id)await ew({variables:{...r}}),e.location&&(o?await e_({variables:{...(0,F.c)({accountUserId:e.accountUserId,location:e.location})}}):await ek({variables:{...(0,F.b)(e)}}));else{let t=await eC({variables:{objects:r}}),n=t?.data?.insert_Account_User?.returning?.[0]?.id;e.location&&n&&(o?await e_({variables:{...(0,F.c)({location:e.location,accountUserId:n})}}):await ek({variables:{...(0,F.b)({location:e.location,accountUserId:n})}}))}},[ek,W,eC,e_,ew]),[eS]=(0,l.f)(Q,{fetchPolicy:"network-only",onCompleted:e=>{let n=e?.tenantBookings?.[0];n?M.show({title:"Edit tenant",content:(0,t.jsx)(I.f,{defaultValues:(0,$.f)(n,n.locationId),refetch:eb,offCanvas:M})}):D.show({content:"Tenant booking not found",severity:"error"})},onError:()=>{D.show({content:"Failed to load tenant details",severity:"error"})}}),eT=(0,r.useCallback)(e=>{let{row:n,accountId:a,accountType:r}=e,o=r||n?.accountType||es.accountType||"customer",s=a??n?.accountId??null;if(n&&"tenant"===o)return void eS({variables:{userId:n.id}});let i="admin"===o?"Add user":"Create user";M.show({content:(0,t.jsx)(_.f,{userId:n?.id??null,accountId:s,accountType:o,submit:(e,t)=>e$(e,t,o)}),title:n?"Edit user":i,xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"60vw",lg2:"50vw"})},[eS,es.accountType,M,e$]),eA=(0,r.useCallback)(e=>{(e?.stopPropagation(),H?.accountId)?eT({accountId:H.accountId,accountType:"admin"}):D.show({content:"Current admin account is not available",severity:"error"})},[eT,D,H?.accountId]),eE=(0,r.useCallback)(e=>{e.stopPropagation(),eu(!0);let t=ex?.aggregate?.totalCount;ej({variables:{where:ef,accountUsersNestedWhere:em,..."number"==typeof t?{limit:t}:{},offset:0,orderBy:er?.[0]||{createdAt:"desc"}}})},[em,ej,ex?.aggregate?.totalCount,er,ef]),eU=e=>[...z&&"admin"===(e.accountType?.toLowerCase?.()||"")?[]:[{context:"secondary",icon:"edit",onClick:t=>{t.stopPropagation(),eT({row:e})},tooltip:"Edit"}],{context:"secondary",icon:"avatar",onClick:n=>{n.stopPropagation(),M.show({content:(0,t.jsx)(k.f,{category:"avatar",entity:"User",entityId:e.id,type:"image",refetch:eb}),submit:!1,title:"Upload avatar"})},tooltip:"Avatar"}],eF=[{headerName:"",field:"avatar",maxWidth:60,sortable:!1,renderCell:e=>{let{row:n}=e;return(0,t.jsx)(u.f,{file:(0,E.f)(n.media),sx:{marginLeft:"15px",width:"24px",height:"24px"}})}},{flex:1,headerName:"Name",field:"nameFirst",minWidth:160,renderCell:e=>{let{row:t}=e;return t.name}},{flex:1,headerName:"Account type",field:"accountType",minWidth:150,sortable:!1,renderCell:e=>{let{row:n}=e;if(!n.accountType)return null;let a=n.accountType.toLowerCase(),r=P[a];return r?(0,t.jsx)(p.f,{variant:"outlined",label:`${a.charAt(0).toUpperCase()}${a.slice(1)}`,sx:{borderColor:r.borderColor,color:r.color,backgroundColor:"transparent"}}):null}},{flex:1,headerName:"Account name",field:"accountName",minWidth:170,sortable:!1,renderCell:e=>{let{row:n}=e,a=n.accountType?.toLowerCase()||"",r=en[a],o=r&&n.accountId?`/dashboard/${r}/view?id=${n.accountId}`:"";return"tenant"!==a&&n.accountName?o?(0,t.jsx)(x.f,{color:"secondary",href:o,onClick:e=>e.stopPropagation(),underline:"hover",children:n.accountName}):n.accountName:""}},{flex:1,headerName:"Email address",field:"email",minWidth:220},{flex:1,headerName:"Contact user",field:"isContact",sortable:!1,renderCell:e=>{let{row:n}=e;return n.isContact?(0,t.jsx)(b.f,{direction:"row",width:"100%",alignItems:"center",justifyContent:"flex-start",children:(0,t.jsx)(m.default,{color:"error"})}):null}},{flex:1,headerName:"Phone",field:"phone",minWidth:120,sortable:!1},{flex:1,headerName:"Position",field:"position",minWidth:120,sortable:!1},{flex:1,headerName:"Role",field:"role",minWidth:120,sortable:!1,renderCell:e=>{let{row:t}=e;return t.role?`${t.role.charAt(0).toUpperCase()}${t.role.slice(1)}`:"-"}},{flex:1,headerName:"Status",field:"status",minWidth:120,sortable:!1,renderCell:e=>{let{row:n}=e,a="active"===n.status||"inactive"===n.status?n.status:"inactive";return(0,t.jsx)(p.f,{label:`${a.charAt(0).toUpperCase()}${a.slice(1)}`,color:Y.d[a]})}},{flex:1,headerName:"Date added",field:"createdAt",minWidth:130},...O(["admin","customer","supplier"])?[{headerName:"Actions",field:"actions",minWidth:100,sortable:!1,renderCell:e=>{let{row:n}=e;return O(["customer_user","supplier_user"])?n.id===H.id&&(0,t.jsx)(C.f,{actionsData:eU,row:n}):(0,t.jsx)(C.f,{actionsData:eU,row:n})}}]:[]],eN=!z;return(0,t.jsxs)(b.f,{spacing:2,sx:{width:"100%",height:"100%",minHeight:0},children:[el&&(0,t.jsx)(V,{initialFilters:eo,filters:es,setFilters:ei,open:el,onClose:()=>ec(!1)}),(0,t.jsxs)(b.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(f.f,{variant:"contained",startIcon:(0,t.jsx)(y.default,{}),onClick:()=>ec(!0),children:"Filters"}),(0,t.jsxs)(b.f,{direction:"row",spacing:2,children:[eN&&(0,t.jsx)(f.f,{variant:"contained",color:"secondary",onClick:eA,children:"Add new admin user"}),!R&&(0,t.jsx)(f.f,{startIcon:!ed&&(0,t.jsx)("img",{src:"/static/icons/csv.svg"}),disabled:ed,variant:"contained",color:"success",onClick:eE,children:ed?(0,t.jsx)(h.f,{size:20,color:"secondary"}):"Export"})]})]}),(0,t.jsxs)(g.f,{sx:{p:"16px 0px",height:"calc(100% - 52px)",minHeight:0},children:[(0,t.jsx)(a.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Users"}),(eI?.length||eg)&&(0,t.jsx)(j.s,{...G,loading:eg,columns:eF,rows:eI,totalCount:ex.aggregate.totalCount,autoHeight:!1,onRowClick:e=>{o.default.push(`/dashboard/users/view?id=${e.row.id}`)},containerHeight:"calc(100% - 52px)"}),!eI?.length&&!eg&&(0,t.jsx)(w.f,{imageSrc:"/static/icons/no_locations_found.svg",title:"No users",subtitleFirstLine:"No users found for selected filters.",subtitleSecondLine:"Adjust filters or create a new user.",buttonText:eN?"Add new admin user":void 0,onAction:eN?eA:void 0})]})]})},er={filterType:"users_table_v2",q:"",status:"active",accountType:null,isContact:null},eo=()=>(0,t.jsxs)(n.f,{sx:{p:3,height:"100%",minHeight:0,display:"flex",flexDirection:"column",overflow:"hidden",marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 258px)"},transition:"margin-left 0.5s ease"},children:[(0,t.jsxs)(n.f,{sx:{mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,t.jsx)(a.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600,mb:1},children:"Users"}),(0,t.jsx)(a.f,{variant:"body2",color:"text.secondary",children:"Manage all users across customers, suppliers, and admin company."})]}),(0,t.jsx)(n.f,{sx:{flex:1,minHeight:0},children:(0,t.jsx)(ea,{initialFilters:er})})]});var es=e.i(293965);let ei=()=>(0,t.jsx)(eo,{});ei.getLayout=function(e){return(0,t.jsx)(es.f,{children:e})},e.s(["default",0,ei],373398)}],315204,(e,t,n)=>{let a="/dashboard/users";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(373398)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})}]);