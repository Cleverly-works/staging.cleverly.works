(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[201894,989373,e=>{var t,a=((t={}).ACTIVE="active",t.INACTIVE="inactive",t);e.s(["f",()=>a],989373);let n=[{label:"Active",value:a.ACTIVE},{label:"Inactive",value:a.INACTIVE}];e.s(["h",0,[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"},{label:"Tenant",value:"tenant"}],"d",0,{active:"success",inactive:"danger"},"P",0,n],201894)},39059,e=>{var t=e.i(159080);let a=t.f`
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
`,i=t.f`
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
`,o=t.f`
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
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,d=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,c=t.f`
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
`,f=t.f`
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
`,h=t.f`
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
`;e.s(["e",0,o,"u",0,f,"q",0,l,"_",0,c,"x",0,r,"k",0,i,"f",0,d,"U",0,h,"I",0,a,"s",0,p,"l",0,u,"V",0,n,"J",0,m,"W",0,s])},506656,e=>{e.s(["f",0,(e,t)=>{let a=Math.pow(10,t);return Math.round(e*a)/a}])},686255,530568,e=>{var t=e.i(391398),a=e.i(362537),n=e.i(191788),i=e.i(422411),r=e.i(424894),o=e.i(21557),s=e.i(813843),l=e.i(115871),d=e.i(652148),c=e.i(122989),u=e.i(722394),m=e.i(426778);let f=(0,m.t)().shape({id:(0,m.H)().nullable(),nameFirst:(0,m.x)().required(),nameLast:(0,m.x)().required(),email:(0,m.x)().email().required(),phone:(0,m.x)().required(),bookingStart:(0,m.c)().transform((e,t)=>t?(0,a.default)(t).utc(!0).startOf("day").toDate():e).typeError("Invalid date").required(),bookingEnd:(0,m.c)().transform((e,t)=>t?(0,a.default)(t).utc(!0).startOf("day").toDate():e).typeError("Invalid date").required("").when("bookingStart",(e,t)=>{let[a]=e;return a?t.min(a,"Access end date must be on or after start date."):t}),notes:(0,m.x)(),userId:(0,m.H)().nullable(),locationId:(0,m.H)().nullable(),modules:(0,m.t)().nullable(),status:(0,m.x)().oneOf(["active","inactive"]).required()});var h=e.i(207646);let p=[{label:"Job reports",name:"jobReports"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}];var x=e.i(152078),g=e.i(799083);let b=e=>{let{name:a,control:n,permissions:r=[]}=e;return(0,t.jsxs)(s.f,{sx:{marginBottom:2},children:[(0,t.jsx)(l.f,{variant:"h6",color:"dark.main",sx:v.title,children:"Permissions"}),(0,t.jsx)(s.f,{gap:1,direction:"row",flexWrap:"wrap",children:r.map(e=>(0,t.jsx)(i.e,{name:`${a?a+".":""}${e.name}`,control:n,render:a=>{let{value:n,onChange:i}=a;return(0,t.jsx)(x.f,{color:"dark.main",control:(0,t.jsx)(g.f,{color:"secondary",checked:n,onChange:e=>i(e.target.checked)}),label:e.label})}}))})]})},v={title:{fontSize:"20px",fontWeight:300,marginBottom:1,color:"gray"}};var j=e.i(776204),y=e.i(159080);let I=y.f`
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
`,w=y.f`
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
`;y.f`
  mutation DeleteTenantBooking($id: Int!) {
    delete_TenantBooking_by_pk(id: $id) {
      id
    }
  }
`;let C={marginBottom:2,fontSize:"20px",fontWeight:300,color:"gray"},$={fontSize:"14px",fontWeight:400,color:"text.secondary",marginBottom:1};e.s(["f",0,e=>{let{defaultValues:m,offCanvas:x,refetch:g}=e,v=(0,o.f)(),{control:y,errors:_,handleSubmit:S,register:A}=(0,i.G)({defaultValues:m,resolver:(0,r.yupResolver)(f)}),[D]=(0,j.f)(I,{onCompleted:()=>{x.close(),g()},onError:e=>{v.show({content:`Error: ${e.message}`,severity:"error"})}}),[M]=(0,j.f)(w,{onCompleted:()=>{x.close(),g()},onError:e=>{v.show({content:`Error: ${e.message}`,severity:"error"})}}),k=(0,n.useCallback)(e=>{e.id?M({variables:{id:e.id,changes:{bookingStart:e.bookingStart,bookingEnd:e.bookingEnd,notes:e.notes,status:e.status},userId:e.userId,accountUser:{modules:e.modules},user:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone}}}):D({variables:{nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email?.trim().toLowerCase(),phone:e.phone,bookingStart:e.bookingStart,bookingEnd:e.bookingEnd,notes:e.notes,status:e.status,locationId:e.locationId,userId:e.userId,modules:e.modules}})},[D,M]);return(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:S(k),children:(0,t.jsxs)(s.f,{gap:3,children:[(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{sx:C,children:"Tenant information"}),(0,t.jsxs)(s.f,{spacing:1,children:[(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(i.e,{name:"nameFirst",control:y,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,label:"First name",value:a||"",onChange:n,variant:"standard",color:"secondary",error:!!_.nameFirst})}}),(0,t.jsx)(i.e,{name:"nameLast",control:y,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,label:"Last name",value:a||"",onChange:n,variant:"standard",color:"secondary",error:!!_.nameLast})}})]}),(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(i.e,{name:"email",control:y,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,label:"Email",type:"email",value:a||"",onChange:n,variant:"standard",color:"secondary",error:!!_.email})}}),(0,t.jsx)(i.e,{name:"phone",control:y,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,label:"Mobile",value:a||"",onChange:n,variant:"standard",color:"secondary",error:!!_.phone})}})]})]})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{sx:C,children:"Access information"}),(0,t.jsxs)(s.f,{spacing:3,children:[(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsxs)(s.f,{sx:{flex:1},children:[(0,t.jsx)(l.f,{sx:$,children:"Booked from"}),(0,t.jsx)(i.e,{name:"bookingStart",control:y,render:e=>{let{onChange:n,value:i}=e;return(0,t.jsx)(u.f,{value:i?(0,a.default)(i):null,onChange:n,format:"DD MMM YYYY",slotProps:{textField:{fullWidth:!0,autoComplete:"off",color:"secondary",variant:"standard",placeholder:"Click to select date",error:!!_.bookingStart}}})}})]}),(0,t.jsxs)(s.f,{sx:{flex:1},children:[(0,t.jsx)(l.f,{sx:$,children:"Booked to"}),(0,t.jsx)(i.e,{name:"bookingEnd",control:y,render:e=>{let{onChange:n,value:i}=e;return(0,t.jsx)(u.f,{value:i?(0,a.default)(i):null,onChange:n,format:"DD MMM YYYY",slotProps:{textField:{fullWidth:!0,autoComplete:"off",color:"secondary",variant:"standard",placeholder:"Click to select date",error:!!_.bookingEnd,helperText:_.bookingEnd?.message}}})}})]})]}),(0,t.jsx)(i.e,{name:"notes",control:y,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(d.f,{multiline:!0,fullWidth:!0,rows:4,color:"secondary",variant:"filled",label:"Notes",value:a,onChange:n,error:!!_.notes,helperText:_.notes?.message})}}),(0,t.jsx)(i.e,{name:"status",control:y,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(c.f,{value:a||"",onChange:n,options:h.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary",error:!!_.status,helperText:_.status?.message})}})]})]}),(0,t.jsx)(b,{name:"modules",control:y,permissions:p}),m?.id&&(0,t.jsx)("input",{name:"id",ref:A,type:"hidden",value:m.id}),m?.userId&&(0,t.jsx)("input",{name:"userId",ref:A,type:"hidden",value:m.userId}),m?.locationId&&(0,t.jsx)("input",{name:"locationId",ref:A,type:"hidden",value:m.locationId})]})})}],686255),e.s(["f",0,(e,t)=>{let a={id:e?.id||void 0,bookingStart:e?.bookingStart?new Date(e.bookingStart):void 0,bookingEnd:e?.bookingEnd?new Date(e.bookingEnd):void 0,notes:e?.notes||"",locationId:t,status:e?.status||"active"};return e?.id&&e?.user?{...a,userId:e.user.id,modules:e.user.accountUsers?.[0]?.modules||{},nameFirst:e.user.nameFirst,nameLast:e.user.nameLast,email:e.user.email,phone:e.user.phone}:{...a,email:"",nameFirst:"",nameLast:"",phone:""}}],530568)},329904,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e.r(421506)),r=e.r(391398);a.default=(0,i.default)([(0,r.jsx)("path",{d:"M17 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM1 11v10h6v-5h2v5h6V11L8 6zm12 8h-2v-5H5v5H3v-7l5-3.5 5 3.5z"},"0"),(0,r.jsx)("path",{d:"M10 3v1.97l2 1.43V5h9v14h-4v2h6V3z"},"1")],"MapsHomeWorkOutlined")},220490,e=>{var t=e.i(75907),a=e.i(460997),n=e.i(191788),i=e.i(889878),r=e.i(600961),o=e.i(396851),s=e.i(395724),l=e.i(88152),d=e.i(713149),c=e.i(46739);function u(e){return(0,c.f)("MuiCard",e)}(0,d.f)("MuiCard",["root"]);var m=e.i(391398);let f=["className","raised"],h=(0,o.f)(l.f,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),p=n.forwardRef(function(e,n){let o=(0,s.f)({props:e,name:"MuiCard"}),{className:l,raised:d=!1}=o,c=(0,a.f)(o,f),p=(0,t.f)({},o,{raised:d}),x=(e=>{let{classes:t}=e;return(0,r.f)({root:["root"]},u,t)})(p);return(0,m.jsx)(h,(0,t.f)({className:(0,i.f)(x.root,l),elevation:d?8:void 0,ref:n,ownerState:p},c))});e.s(["f",0,p],220490)},627242,201084,e=>{var t=e.i(220490);e.s(["f",()=>t.f],627242);var a=e.i(106850);e.s(["f",()=>a.f],201084)},101934,e=>{var t=e.i(460997),a=e.i(75907),n=e.i(191788),i=e.i(889878),r=e.i(600961),o=e.i(396851),s=e.i(395724),l=e.i(713149),d=e.i(46739);function c(e){return(0,d.f)("MuiCardActions",e)}(0,l.f)("MuiCardActions",["root","spacing"]);var u=e.i(391398);let m=["disableSpacing","className"],f=(0,o.f)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,!a.disableSpacing&&t.spacing]}})(e=>{let{ownerState:t}=e;return(0,a.f)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),h=n.forwardRef(function(e,n){let o=(0,s.f)({props:e,name:"MuiCardActions"}),{disableSpacing:l=!1,className:d}=o,h=(0,t.f)(o,m),p=(0,a.f)({},o,{disableSpacing:l}),x=(e=>{let{classes:t,disableSpacing:a}=e;return(0,r.f)({root:["root",!a&&"spacing"]},c,t)})(p);return(0,u.jsx)(f,(0,a.f)({className:(0,i.f)(x.root,d),ownerState:p,ref:n},h))});e.s(["f",0,h],101934)},106850,e=>{var t=e.i(75907),a=e.i(460997),n=e.i(191788),i=e.i(889878),r=e.i(600961),o=e.i(396851),s=e.i(395724),l=e.i(713149),d=e.i(46739);function c(e){return(0,d.f)("MuiCardContent",e)}(0,l.f)("MuiCardContent",["root"]);var u=e.i(391398);let m=["className","component"],f=(0,o.f)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),h=n.forwardRef(function(e,n){let o=(0,s.f)({props:e,name:"MuiCardContent"}),{className:l,component:d="div"}=o,h=(0,a.f)(o,m),p=(0,t.f)({},o,{component:d}),x=(e=>{let{classes:t}=e;return(0,r.f)({root:["root"]},c,t)})(p);return(0,u.jsx)(f,(0,t.f)({as:d,className:(0,i.f)(x.root,l),ownerState:p,ref:n},h))});e.s(["f",0,h],106850)},241129,e=>{var t=e.i(523042);e.s(["f",()=>t.f])},799306,e=>{e.s(["f",0,function(e){if(null===e||!0===e||!1===e)return 0/0;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}])},925527,389849,e=>{var t=e.i(623886),a=e.i(699213);e.s(["f",0,function(e){(0,a.f)(1,arguments);var n=(0,t.f)(e);return n.setHours(23,59,59,999),n}],925527);var n=e.i(926638),i=e.i(799306),r=/[T ]/,o=/[Z ]/i,s=/([Z+-].*)$/,l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function u(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function h(e){return e%400==0||e%4==0&&e%100!=0}e.s(["f",0,function(e,t){(0,a.f)(1,arguments);var p,x,g,b=(0,i.f)(null!=(p=null==t?void 0:t.additionalDigits)?p:2);if(2!==b&&1!==b&&0!==b)throw RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(0/0);var v=function(e){var t,a={},n=e.split(r);if(n.length>2)return a;if(/:/.test(n[0])?t=n[0]:(a.date=n[0],t=n[1],o.test(a.date)&&(a.date=e.split(o)[0],t=e.substr(a.date.length,e.length))),t){var i=s.exec(t);i?(a.time=t.replace(i[1],""),a.timezone=i[1]):a.time=t}return a}(e);if(v.date){var j=function(e,t){var a=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:0/0,restDateString:""};var i=n[1]?parseInt(n[1]):null,r=n[2]?parseInt(n[2]):null;return{year:null===r?i:100*r,restDateString:e.slice((n[1]||n[2]).length)}}(v.date,b);x=function(e,t){if(null===t)return new Date(0/0);var a,n,i,r,o,s,d,c,m,p,x,g,b=e.match(l);if(!b)return new Date(0/0);var v=!!b[4],j=u(b[1]),y=u(b[2])-1,I=u(b[3]),w=u(b[4]),C=u(b[5])-1;if(v){return(a=w,n=C,a>=1&&a<=53&&n>=0&&n<=6)?(i=t,r=w,o=C,(s=new Date(0)).setUTCFullYear(i,0,4),d=s.getUTCDay()||7,s.setUTCDate(s.getUTCDate()+((r-1)*7+o+1-d)),s):new Date(0/0)}var $=new Date(0);return(c=t,m=y,p=I,m>=0&&m<=11&&p>=1&&p<=(f[m]||(h(c)?29:28))&&(x=t,(g=j)>=1&&g<=(h(x)?366:365)))?($.setUTCFullYear(t,y,Math.max(j,I)),$):new Date(0/0)}(j.restDateString,j.year)}if(!x||isNaN(x.getTime()))return new Date(0/0);var y=x.getTime(),I=0;if(v.time&&isNaN(I=function(e){var t,a,i,r=e.match(d);if(!r)return 0/0;var o=m(r[1]),s=m(r[2]),l=m(r[3]);return(t=o,a=s,i=l,24===t?0===a&&0===i:i>=0&&i<60&&a>=0&&a<60&&t>=0&&t<25)?o*n.r+s*n.z+1e3*l:0/0}(v.time)))return new Date(0/0);if(v.timezone){if(isNaN(g=function(e){if("Z"===e)return 0;var t,a=e.match(c);if(!a)return 0;var i="+"===a[1]?-1:1,r=parseInt(a[2]),o=a[3]&&parseInt(a[3])||0;return(t=o)>=0&&t<=59?i*(r*n.r+o*n.z):0/0}(v.timezone)))return new Date(0/0)}else{var w=new Date(y+I),C=new Date(0);return C.setFullYear(w.getUTCFullYear(),w.getUTCMonth(),w.getUTCDate()),C.setHours(w.getUTCHours(),w.getUTCMinutes(),w.getUTCSeconds(),w.getUTCMilliseconds()),C}return new Date(y+I+g)}],389849)},684034,e=>{var t=e.i(389849);e.s(["f",()=>t.f])},30256,e=>{var t=e.i(391398),a=e.i(191788),n=e.i(432171),i=e.i(203828),r=e.i(738251),o=e.i(76381),s=e.i(813843),l=e.i(115871),d=e.i(587369),c=e.i(498681),u=e.i(159080);let m=u.f`
  query GetProperty($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      name
    }
  }
`;var f=e.i(191214),h=e.i(891962),p=e.i(570112),x=e.i(995197),g=e.i(445011);let b=e=>{let{propertyId:u}=e,b=(0,d.f)("(max-width:600px)"),{can:j}=(0,c.f)(),y=j("scheduledJob.view"),{query:I}=(0,i.useRouter)(),w=(0,a.useMemo)(()=>I.tab||"planned-maintenance",[I.tab]),[C,$]=(0,a.useState)(w),{loading:_,data:{location:S}={location:{}}}=(0,n.t)(m,{variables:{id:u}});if(_)return(0,t.jsx)(s.f,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(o.f,{color:"secondary"})});if(!S)return i.default.push("/404"),!1;let A={maxWidth:b?"100%":"calc(100vw - 280px)","& .MuiTabs-flexContainer>.MuiTab-root:first-child":{...!b&&{borderTopLeftRadius:0,borderBottomLeftRadius:0}}};return(0,t.jsxs)(r.f,{sx:{width:"100%",height:"100%"},children:[(0,t.jsxs)(s.f,{direction:b?"column":"row",children:[(0,t.jsx)(f.f,{withoutRightBorderRadius:!b,fullWidth:b,locationId:S.id,locationName:S.name}),y&&(0,t.jsx)(h.f,{value:C,onChange:(e,t)=>{$(t)},changeQuery:!0,sx:A,children:(0,t.jsx)(p.f,{value:"planned-maintenance",label:"Planned Maintenance"})})]}),!y&&(0,t.jsx)(l.f,{sx:{p:2},children:"PPM Schedules is not enabled for your account. Ask your account owner to turn it on."}),y&&(0,t.jsx)(x.f,{value:C,index:"planned-maintenance",...v,children:(0,t.jsx)(g.f,{locationId:S.id,locationName:S.name,calendarInitialFilters:{filterType:`location_${S.id}`,locationId:S.id},hideCalendarFilters:["location"],tableInitialFilters:{filterType:`location_${S.id}`,locationId:S.id},hideTableFilters:["location"],itemsInitialFilters:{locationId:S.id,filterType:`location_${S.id}`},hideItemsFilters:["location","complianceCategory"]})})]})},v={sx:{height:"calc(100% - 32px)"},boxSx:{height:"100%"}};var j=e.i(594301),y=e.i(293965);let I=u.f`
  query GetProperty($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      access
      createdAt
      name
      contactUserId
      status
      meta
      permitsRequired
      manager: Manager {
        id
        fullName
      }
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        id
        registered
        operating
        trading
        invoice
        status
        createdAt
        address: Address {
          id
          name
          addressLine1
          addressLine2
          addressLine3
          city
          county
          geo
          postCode
          country: Country {
            id
            name
            code
          }
        }
      }
      bookings: Jobs(order_by: { id: asc }, limit: 1) {
        id
        createdAt
      }
      customer: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          companyNumber
          createdAt
          name
          status
          type
          updatedAt
          website
          clientType
          managerId
          vatId
          meta

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
          manager: Manager {
            id
            fullName
          }
        }
      }
      user: User {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
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
      assets: Assets(order_by: { id: asc }, limit: 1) {
        id
        createdAt
      }
    }
  }
`,w=u.f`
  query GetLocationInvoices($locationId: Int!, $startDate: timestamptz, $endDate: timestamptz) {
    invoices: AccountEntry(
      where: {
        locationId: { _eq: $locationId }
        Account: { type: { _eq: "customer" } }
        type: { _in: ["invoice", "customerPpmInvoice", "proformaInvoice", "customerGroupInvoice"] }
        createdAt: { _gte: $startDate, _lte: $endDate }
      }
    ) {
      total: meta(path: "amountInfo.total")
      totalAdHoc: meta(path: "amounts.total")
      createdAt
    }
  }
`,C=u.f`
  query GetLocationReactiveJobs($locationId: Int!, $startDate: timestamptz, $endDate: timestamptz) {
    jobs: Job(
      where: {
        locationId: { _eq: $locationId }
        status: { _neq: "cancelled" }
        type: { _eq: "reactive" }
        _or: [
          { timingStart: { _gte: $startDate, _lte: $endDate } }
          { scheduledAt: { _gte: $startDate, _lte: $endDate } }
        ]
      }
    ) {
      timingStart
      scheduledAt
    }
  }
`,$=u.f`
  query GetLocationPpmJobs($locationId: Int!, $startDate: timestamptz, $endDate: timestamptz) {
    jobs: Job(
      where: {
        locationId: { _eq: $locationId }
        status: { _neq: "cancelled" }
        type: { _eq: "ppm" }
        _or: [
          { timingStart: { _gte: $startDate, _lte: $endDate } }
          { scheduledAt: { _gte: $startDate, _lte: $endDate } }
        ]
      }
    ) {
      timingStart
      scheduledAt
    }
  }
`;var _=e.i(740790),S=e.i(320037),A=e.i(362537),D=e.i(921451);function M(e){return Object.entries((0,S.default)(e.filter(e=>{let t=e.scheduledAt||e.timingStart;return(0,A.default)(t).isValid()}).map(e=>({...e,date:(0,A.default)(e.scheduledAt||e.timingStart).format("MM.YYYY")})),"date")).reduce((e,t)=>{let[a,n]=t;return{...e,[a]:n.length}},{})}var k=e.i(847474),q=e.i(436703),T=e.i(871931),L=e.i(760981),N=e.i(302966),U=e.i(411331),W=e.i(362407),F=e.i(795617),B=e.i(280445),E=e.i(747112),P=e.i(115126);let R=e=>{let{location:a,refetch:n}=e,r=(e=>{let{property:a,offCanvas:n,refetch:r}=e,{hasRole:o}=(0,j.f)(),s=o("admin"),l=(0,F.w)(a,"registered"),d=(0,F.w)(a,"invoice"),c=e=>{e&&r()};return[{id:1,label:"Create location",active:!0,date:a?.createdAt||null,content:[{id:1,active:!!(a.createdAt&&a.name),data:`Name: ${a.name}`},{id:2,active:!!a.createdAt,data:`Access: ${a.access}`}]},{id:2,label:"Complete profile",info:"",active:!0,date:l?.createdAt||null,actions:[{id:1,active:s,content:"Main address",context:"secondary",handleClick:()=>{n.show({content:(0,t.jsx)(W.f,{addressId:l?.address?.id||null,entity:"Location",entityId:a.id,id:l?.id||null,onSubmit:c,type:"registered"}),submit:!1,title:"Manage addresses"})},type:"button"},{id:2,active:s,content:"Invoice address",context:"secondary",handleClick:()=>{n.show({content:(0,t.jsx)(W.f,{addressId:d?.address?.id||null,entity:"Location",entityId:a.id,id:d?.id||null,onSubmit:c,type:"invoice"}),submit:!1,title:"Manage addresses"})},type:"button"}]},{id:3,label:"Add assets",active:!0,info:"",date:a?.assets?.[0]?.createdAt||null,actions:[{id:1,active:s,content:"Add asset",context:"secondary",handleClick:()=>{i.default.push("/dashboard/assets?create=true")},type:"button"}]},{id:6,label:"Start issuing work orders",date:a.bookings?.length&&a.bookings?.[0]?String(a.bookings[0].createdAt):null,active:!0}]})({property:a,offCanvas:(0,U.f)(),refetch:n}),o=[{label:"Location manager",value:a?.manager?.fullName?`${a?.manager?.fullName} `:"Unassigned",link:a?.manager?.id?`/dashboard/users/view?id=${a?.manager?.id}`:void 0}];return(0,t.jsxs)(O,{defaultExpanded:!0,children:[(0,t.jsx)(N.f,{expandIcon:(0,t.jsx)(E.f,{}),children:(0,t.jsx)(l.f,{typography:"h6",children:"Profile"})}),(0,t.jsx)(L.f,{sx:{pt:0},children:(0,t.jsx)(P.f,{enableBorder:!0,steps:r,summary:o},`stepper-${a.id}`)})]})},O=(0,B.f)(T.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0 !important;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;var Y=e.i(396413);e.i(98824);var H=e.i(54635),V=e.i(714119),z=e.i(359786),G=e.i(443919),Q=e.i(63886),J=e.i(521039),K=e.i(681700),Z=e.i(757157),X=e.i(418630),ee=e.i(510123),et=e.i(755548),ea=e.i(74633),en=e.i(591003),ei=e.i(704129),er=e.i(195952),eo=e.i(497844),es=e.i(719588),el=e.i(511667);let ed=e=>{let{locationId:a,editable:i,expanded:o,onChangeExpanded:d}=e,c=(0,U.f)(),{user:u,hasRole:m}=(0,j.f)(),f=m("tenant"),h=m("customer"),{data:{items:p}={items:[]},loading:x,refetch:g}=(0,n.t)(er.J,{variables:{adminId:u.adminId,entityId:a,entity:"Location",category:"locationFloorplan",type:"image"}}),[b]=(0,el.f)("/media/delete-media",{queryKey:"deleteMediaFloorplan",method:"POST",onCompleted:()=>g()}),v=e=>{e?.stopPropagation(),c.show({content:(0,t.jsx)(ei.f,{accept:"image/*",category:"locationFloorplan",entity:"Location",entityId:a,expiryShow:!1,mediaMeta:null,multiple:!1,showVisibility:!1,onSuccess:()=>{c.close(),p?.[0]?.item?.id&&b({body:{mediaId:p[0].item.id}})},type:"image"}),title:e?"Upload location map":"Replace location map"})},y=p?.[0]?.item?.filename,I=[{field:"uploadedBy",headerName:"Uploaded by",flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return t?.item?.user?.fullName}},{field:"uploadedAt",headerName:"Uploaded on",flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,A.default)(t?.item?.createdAt).format("DD/MM/YYYY")}},{field:"actions",headerName:"",width:50,sortable:!1,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(eo.f,{actions:[{icon:"edit",tooltip:"Replace",onClick:()=>v(null),disabled:f},{icon:"delete",tooltip:"Delete",disabled:f||h&&a?.item?.user?.accountUsers?.some(e=>e.accountId!==u.accountId),onClick:()=>{c.show({content:(0,t.jsx)(es.f,{mediaId:a.item.id,onSuccess:()=>{c.close(),g()}}),submit:!1,title:"Delete location map"})}}]})}}];return(0,t.jsx)(r.f,{children:(0,t.jsxs)(T.f,{expanded:o,onChange:d,sx:ec,children:[(0,t.jsx)(N.f,{expandIcon:(0,t.jsx)(E.f,{}),children:(0,t.jsx)(s.f,{width:"100%",direction:"row",alignItems:"center",justifyContent:"space-between",children:(0,t.jsx)(l.f,{variant:"h6",children:"Location map"})})}),(0,t.jsxs)(L.f,{children:[(0,t.jsx)(s.f,{alignItems:"center",children:p?.[0]?.item?.filename?(0,t.jsx)(en.f,{editable:!1,filename:y,showMarker:!1}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.f,{color:"muiGray.main",children:"Give users and engineers a visual guide for more accurate issue reporting and faster on-site navigation."}),i&&(0,t.jsx)(et.f,{disableMinWidth:!0,size:"small",color:"secondary",variant:"contained",onClick:v,sx:{mt:2,alignSelf:"flex-end"},children:"Upload map"})]})}),p?.length===1&&(0,t.jsx)(ea.s,{totalCount:p.length,autoHeight:!1,loading:x,columns:I,rows:p,containerHeight:"calc(100% - 32px)"})]})]})})},ec={backgroundColor:"#fff",boxShadow:"rgba(53, 64, 82, 0.05) 0 0 14px 0",borderRadius:"5px",border:"none !important",marginBottom:"0.5rem"};var eu=e.i(986846),em=e.i(714467),ef=e.i(862152);let eh=e=>{let{location:i,primaryCustomer:r,relatedCustomers:o=[],refetch:l}=e,d=(0,c.f)(),u=(0,U.f)(),{user:m,hasRole:f}=(0,j.f)(),[h,p]=(0,a.useState)(ef.y),[x,g]=(0,a.useState)(ef.y),b=(0,a.useMemo)(()=>(0,ef.t)(x),[x]),v=(0,a.useMemo)(()=>(0,ef.t)(h),[h]),y=f("admin"),I=f("customer"),T=f("admin_user"),L=f("customer_user"),N=d.hasUserModule("finances"),W=(y||I)&&(N||!T&&!L),F=d.admin.nonLoggedUserUrl,B=d?.admin?.modules?.nonLoggedUser&&F?.status==="active",E=(0,a.useMemo)(()=>{if(!B||!F?.fqdn)return"";let e=new URLSearchParams;return d.admin?.id&&d.admin?.name&&(e.set("companyId",String(d.admin?.id)),e.set("companyName",String(d.admin?.name))),i?.id&&i?.name&&(e.set("locationId",String(i.id)),e.set("locationName",String(i.name))),r?.id&&r?.name&&(e.set("customerId",String(r.id)),e.set("customerName",String(r.name))),`https://${F?.fqdn}?${e.toString()}`},[d.admin?.id,d.admin?.name,r,i.id,i.name,B,F?.fqdn]),{data:{jobs:P}={jobs:[]}}=(0,n.t)(C,{skip:!W,variables:{locationId:i.id,...b}}),{data:{jobs:O}={jobs:[]}}=(0,n.t)($,{skip:!W,variables:{locationId:i.id,...b}}),{data:{invoices:et}={invoices:[]}}=(0,n.t)(w,{skip:!W,variables:{locationId:i.id,...v}}),ea=Object.entries((0,S.default)(et.map(e=>({...e,date:(0,A.default)(e.createdAt).format("MM.YYYY")})),"date")).reduce((e,t)=>{let[a,n]=t,i=n.reduce((e,t)=>{let a=t.totalAdHoc??t.total??0;return(0,D.U)(e+a,2)},0);return{...e,[a]:i}},{}),en=M(P),ei=M(O),{createdAt:er,id:eo,user:es}=i,el=(0,k.w)(i,"registered"),ec=(0,k.w)(i,"invoice"),eh={accountName:r?.name,country:el?.address?.country?.name,createdAt:er,fullName:es?.fullName,position:es?.accounts?.[0]?.position,phone:es?.phone,permitsRequired:i?.permitsRequired,xeroContactId:r?.meta?.xeroContactId};return(0,t.jsxs)(_.f,{container:!0,spacing:2,children:[(0,t.jsxs)(_.f,{item:!0,xs:12,md:6,md2:4,children:[(0,t.jsx)(G.f,{avatar:(0,q.f)(r?.media),entity:{id:i.id,description:r?.name,descriptionLink:`/dashboard/customers/view?id=${r?.id}`,name:i.name||"Not Specified",accountUsers:r?.accountUsers||[],meta:{}},entityName:"Location",editable:f("admin"),relatedParties:o,onEdit:()=>void u.show({content:(0,t.jsx)(z.f,{locationId:i.id,refetch:l,close:u.close}),title:"Edit property",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw"})}),(0,t.jsx)(X.f,{surface:"location_details",locationId:i.id}),W&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(em.f,{reactiveJobsCountByMonths:en,ppmJobsCountByMonths:ei,selectedYear:x,setSelectedYear:g}),(0,t.jsx)(eu.f,{invoicesTotalByMonths:ea,selectedYear:h,setSelectedYear:p,entity:"location"})]}),(0,t.jsx)(Z.f,{contactUser:eh})]}),(0,t.jsxs)(_.f,{item:!0,xs:12,md:6,md2:4,children:[(0,t.jsx)(R,{refetch:l,location:i}),el&&(0,t.jsx)(Q.f,{address:el.address,entity:"Location",entityId:i.id,id:el.id,refetch:l,showMap:!0,title:"Site address",type:"registered"}),ec&&(0,t.jsx)(Q.f,{address:ec.address,entity:"Location",entityId:i.id,id:ec.id,refetch:l,title:"Invoice address",type:"invoice"}),(0,t.jsx)(J.f,{locationId:i.id})]}),(0,t.jsx)(_.f,{item:!0,xs:12,md:12,md2:4,children:(0,t.jsxs)(s.f,{gap:.5,children:[f("admin")&&f("customer")&&(0,t.jsx)(ee.f,{subscription:!0,showMyTaskButton:!0,locationId:i.id,accordionSx:ep}),(0,t.jsx)(ed,{locationId:i.id,editable:f("admin")}),f("admin")&&(0,t.jsx)(K.f,{entity:"Location",entityId:i.id,title:"Notes"}),(0,t.jsx)(Y.f,{entity:"Location",category:null,entityId:eo,showActionButtons:!0,accordionSx:ep,withMainPhoto:!0,defaultExpanded:!0}),(0,t.jsx)(V.f,{id:i.id,adminId:m.adminId,title:"Chat",scope:"location",maxHeight:"1000px",accordionSx:ep,customerId:r?.id,defaultExpanded:!0}),B&&(0,t.jsx)(H.f,{id:`location-qr-${i.id}`,value:E,isExpandedByDefault:!0})]})})]})},ep={backgroundColor:"#fff",boxShadow:"rgba(53, 64, 82, 0.05) 0 0 14px 0",borderRadius:"5px",border:"none !important",marginBottom:"0.5rem"},ex=e=>{let{location:n,primaryCustomer:i,refetch:r}=e,o=(0,c.f)(),l=(0,U.f)(),{user:u}=(0,j.f)(),m=(0,d.f)("(max-width: 1080px)"),f=o?.admin?.nonLoggedUserUrl,h=o?.admin?.modules?.nonLoggedUser&&f?.status==="active",p=(0,a.useMemo)(()=>{if(!h||!f?.fqdn)return"";let e=new URLSearchParams;return o.admin?.id&&o.admin?.name&&(e.set("companyId",String(o.admin?.id)),e.set("companyName",String(o.admin?.name))),n?.id&&n?.name&&(e.set("locationId",String(n.id)),e.set("locationName",String(n.name))),i?.id&&i?.name&&(e.set("customerId",String(i.id)),e.set("customerName",String(i.name))),`https://${f?.fqdn}?${e.toString()}`},[o.admin?.id,o.admin?.name,i,n.id,n.name,h,f?.fqdn]),{createdAt:x,id:g,user:b}=n,v=(0,k.w)(n,"registered"),y={accountName:i?.name,country:v?.address?.country?.name,createdAt:x,fullName:b?.fullName,position:b?.accounts?.[0]?.position,phone:b?.phone,permitsRequired:n?.permitsRequired,xeroContactId:i?.meta?.xeroContactId};return(0,t.jsxs)(_.f,{container:!0,spacing:2,children:[(0,t.jsxs)(_.f,{item:!0,xs:12,md:6,md2:4,children:[(0,t.jsx)(G.f,{avatar:(0,q.f)(i?.media),entity:{id:n.id,description:i?.name,descriptionLink:`/dashboard/customers/view?id=${i?.id}`,name:n.name||"Not Specified",accountUsers:i?.accountUsers||[],meta:{}},entityName:"Location",editable:!1,onEdit:()=>void l.show({content:(0,t.jsx)(z.f,{locationId:n.id,refetch:r,close:l.close}),title:"Edit property",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"75vw",lg:"60vw",lg2:"60vw"})}),(0,t.jsx)(Z.f,{contactUser:y})]}),(0,t.jsx)(_.f,{item:!0,xs:12,md:6,md2:4,children:(0,t.jsxs)(s.f,{gap:.5,children:[(0,t.jsx)(ed,{locationId:n.id,editable:!1}),(0,t.jsx)(Y.f,{entity:"Location",category:null,entityId:g,showActionButtons:!1,accordionSx:eg,defaultExpanded:!0}),m&&(0,t.jsx)(V.f,{id:n.id,adminId:u.adminId,title:"Chat",scope:"location",maxHeight:"1000px",accordionSx:eg,customerId:i?.id,defaultExpanded:!0}),h&&m&&(0,t.jsx)(H.f,{id:`location-qr-${n.id}`,value:p,isExpandedByDefault:!0})]})}),!m&&(0,t.jsx)(_.f,{item:!0,md2:4,children:(0,t.jsxs)(s.f,{gap:.5,children:[(0,t.jsx)(V.f,{id:n.id,adminId:u.adminId,title:"Chat",scope:"location",maxHeight:"1000px",accordionSx:eg,customerId:i?.id,defaultExpanded:!0}),h&&(0,t.jsx)(H.f,{id:`location-qr-${n.id}`,value:p,isExpandedByDefault:!0})]})})]})},eg={backgroundColor:"#fff",boxShadow:"rgba(53, 64, 82, 0.05) 0 0 14px 0",borderRadius:"5px",border:"none !important",marginBottom:"0.5rem"};var eb=e.i(162854);let ev=e=>{let{locationId:a,primaryCustomerId:n,primaryCustomerMeta:i,relatedCustomerIds:r,refetch:o}=e;return(0,t.jsx)(eb.f,{type:"customer",accountId:n,relatedCustomerIds:r,locationId:a,meta:i??{},accountRefetch:o})};var ej=e.i(422411),ey=e.i(88152),eI=e.i(322135),ew=e.i(889231),eC=e.i(106997),e$=e.i(424894),e_=e.i(776204),eS=e.i(426778);let eA=eS.t({id:eS.H(),name:eS.x().required(),description:eS.x(),status:eS.x().oneOf(["active","inactive"]).required(),locationId:eS.H().required(),customerId:eS.H().required()}),eD=u.f`
  mutation UpsertSublocation($objects: [Sublocation_insert_input!]!) {
    insert_Sublocation(
      objects: $objects
      on_conflict: {
        constraint: Sublocation_pkey
        update_columns: [name, description, active, locationId]
      }
    ) {
      returning {
        id
      }
    }
  }
`;u.f`
  mutation UpdateSublocation($id: Int!, $changes: Sublocation_set_input) {
    update_Sublocation_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;var eM=e.i(652148),ek=e.i(824451),eq=e.i(207646),eT=e.i(122989),eL=e.i(684779);let eN=e=>{let{defaultValues:a,offCanvas:i,refetchList:r=()=>{}}=e,{user:d}=(0,j.f)(),{control:c,errors:u,register:m,handleSubmit:f}=(0,ej.G)({defaultValues:{...a,status:a?.active},resolver:(0,e$.yupResolver)(eA)}),h=a?.id,p=!!h,{data:{items:x}={items:[]},loading:g,refetch:b}=(0,n.t)(er.J,{variables:{adminId:d.adminId,entityId:h,entity:"Sublocation",category:"sublocationFloorplan",type:"image"},skip:!p}),v=x?.[0]?.item?.filename,[y,{loading:I}]=(0,e_.f)(eD,{refetchQueries:["GetSublocations"],onCompleted:()=>{i&&i.close()}}),[w]=(0,el.f)("/media/delete-media",{queryKey:"deleteMediaSublocation",method:"POST",onCompleted:()=>{b(),r()}}),C=()=>{i.show({content:(0,t.jsx)(ei.f,{accept:"image/*",category:"sublocationFloorplan",entity:"Sublocation",entityId:h,expiryShow:!1,mediaMeta:null,multiple:!1,showVisibility:!1,onSuccess:()=>{b(),x?.[0]?.item?.id&&w({body:{mediaId:x[0].item.id}}),i.close()},type:"image"}),title:"Upload sublocation map"})},$=[{field:"uploadedBy",headerName:"Uploaded by",flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return t?.item?.user?.fullName}},{field:"uploadedAt",headerName:"Uploaded on",flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,A.default)(t?.item?.createdAt).format("DD/MM/YYYY")}},{field:"actions",headerName:"",width:50,sortable:!1,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(eo.f,{actions:[{icon:"edit",tooltip:"Replace",onClick:()=>C()},{icon:"delete",tooltip:"Delete",disabled:a?.item?.user?.accountUsers?.some(e=>e.accountId!==d.accountId),onClick:()=>{i.show({content:(0,t.jsx)(es.f,{mediaId:a.item?.id,onSuccess:()=>{i.close(),b()}}),submit:!1,title:"Delete sublocation map"})}}]})}}];return(0,t.jsxs)("form",{id:"sublocationFrom",onSubmit:f(e=>{let{customerId:t,status:a,...n}=e;y({variables:{objects:[{...n,active:"active"===a}]}})}),children:[(0,t.jsx)(eL.f,{sx:{zIndex:1e5},open:I,children:(0,t.jsx)(o.f,{color:"secondary"})}),!!a?.id&&(0,t.jsx)(eM.f,{name:"id",type:"hidden",sx:{display:"none"},inputRef:m,defaultValue:a?.id}),(0,t.jsx)(s.f,{marginBottom:3,children:(0,t.jsx)(ej.e,{name:"customerId",control:c,render:e=>{let{value:n}=e;return(0,t.jsx)(ek.f,{value:a?.customerOptions?.find(e=>e.value===n)||null,limitTags:1,label:"Customer",variant:"standard",color:"secondary",fullWidth:!0,options:a?.customerOptions||[],disabled:!0,error:!!u.customerId,helperText:u.customerId?.message})}})}),(0,t.jsx)(s.f,{marginBottom:3,children:(0,t.jsx)(ej.e,{name:"locationId",control:c,render:e=>{let{value:n}=e;return(0,t.jsx)(ek.f,{value:a?.locationOptions?.find(e=>e.value===n)||null,limitTags:1,label:"Property",variant:"standard",color:"secondary",fullWidth:!0,disabled:!0,options:a?.locationOptions||[],error:!!u.locationId,helperText:u.locationId?.message})}})}),(0,t.jsx)(s.f,{marginBottom:3,children:(0,t.jsx)(eM.f,{name:"name",placeholder:"Name",fullWidth:!0,variant:"standard",color:"secondary",inputRef:m,error:!!u.name,helperText:u.name?.message})}),(0,t.jsx)(s.f,{marginBottom:3,children:(0,t.jsx)(eM.f,{name:"description",placeholder:"Description",fullWidth:!0,variant:"standard",color:"secondary",inputRef:m,error:!!u.description,helperText:u.description?.message})}),(0,t.jsx)(s.f,{marginBottom:3,children:(0,t.jsx)(ej.e,{name:"status",control:c,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(eT.f,{value:a||"",onChange:n,options:eq.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary",error:!!u.status,helperText:u.status?.message})}})}),p&&(0,t.jsxs)(s.f,{marginBottom:3,children:[(0,t.jsx)(l.f,{sx:eU.title,children:"Sublocation Map"}),(0,t.jsx)(s.f,{children:x?.[0]?.item?.filename?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(en.f,{editable:!1,showMarker:!1,filename:v}),x?.length===1&&(0,t.jsx)(ea.s,{totalCount:x.length,autoHeight:!1,loading:g,columns:$,rows:x,containerHeight:"calc(100% - 32px)"})]}):(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{sx:eU.description,children:"Give users and engineers a visual guide for more accurate issue reporting and faster on-site navigation."}),(0,t.jsx)(et.f,{disableMinWidth:!0,size:"small",color:"secondary",variant:"contained",onClick:C,sx:{mt:2,alignSelf:"flex-end"},children:"Upload map"})]})})]})]})},eU={title:{fontSize:"14px",marginBottom:"15px",color:"gray"},description:{fontSize:"12px",color:"gray"}};var eW=e.i(128662),eF=e.i(329904);let eB=u.f`
  query GetSublocations(
    $locationId: Int!
    $active: Boolean
    $limit: Int = 50
    $offset: Int = 0
    $orderBy: [Sublocation_order_by!]
  ) {
    sublocations: Sublocation(
      where: { locationId: { _eq: $locationId }, active: { _eq: $active } }
      limit: $limit
      offset: $offset
      order_by: $orderBy
    ) {
      id
      name
      description
      active
      createdAt
      updatedAt
      meta
      media: Media {
        id
        entity
        mediaId
      }
      location: Location {
        id
        name
        manager: Manager {
          id
          fullName
        }
      }
    }
    meta: Sublocation_aggregate(where: { locationId: { _eq: $locationId } }) {
      aggregate {
        count
      }
    }
  }
`;u.f`
  query GetSublocationMeta($id: Int!) {
    sublocation: Sublocation_by_pk(id: $id) {
      meta
    }
  }
`;var eE=e.i(239964);u.f`
  query GetSublocations($locationId: Int!, $active: Boolean, $limit: Int = 50, $offset: Int = 0) {
    sublocations: Sublocation(
      where: { locationId: { _eq: $locationId }, active: { _eq: $active } }
    ) {
      id
      name
      description
      active
      createdAt
      updatedAt
      location: Location {
        id
        name
      }
    }
    meta: Sublocation_aggregate(where: { locationId: { _eq: $locationId } }) {
      aggregate {
        count
      }
    }
  }
`;let eP=u.f`
  query GetSublocationDataForQrCode($sublocationId: Int!) {
    sublocation: Sublocation_by_pk(id: $sublocationId) {
      id
      name
      location: Location {
        id
        name
        customer: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
          linkType
          account: Account {
            id
            name
          }
        }
      }
    }
  }
`;u.f`
  mutation UpsertSublocation($objects: [Sublocation_insert_input!]!) {
    insert_Sublocation(
      objects: $objects
      on_conflict: {
        constraint: Sublocation_pkey
        update_columns: [name, description, active, locationId]
      }
    ) {
      returning {
        id
      }
    }
  }
`;let eR=e=>{let{sublocationId:i}=e,{admin:r}=(0,c.f)(),o=r.nonLoggedUserUrl,l=r?.modules?.nonLoggedUser&&o?.status==="active",{data:{sublocation:d}={sublocation:null}}=(0,n.t)(eP,{variables:{sublocationId:i}}),u=(0,a.useMemo)(()=>{if(!l||!o?.fqdn||!d)return"";let e=new URLSearchParams,t=d?.location,a=t?.customer?.find(e=>"primary"===e.linkType)?.account;return r?.id&&r?.name&&(e.set("companyId",String(r?.id)),e.set("companyName",String(r?.name))),t?.id&&t?.name&&(e.set("locationId",String(t.id)),e.set("locationName",String(t.name))),a?.id&&a?.name&&(e.set("customerId",String(a.id)),e.set("customerName",String(a.name))),`https://${o?.fqdn}?${e.toString()}`},[r?.id,r?.name,d,l,o?.fqdn]);return(0,t.jsx)(s.f,{children:(0,t.jsx)(H.f,{id:`new-sublocation-qr-${i}`,value:u,collapsible:!1})})};var eO=e.i(122965);let eY=e=>{let{location:i,customer:r}=e,o=(0,U.f)(),d=(0,c.f)(),{hasRole:u}=(0,j.f)(),[m,f]=(0,a.useState)(null),h=u("tenant"),p=d?.admin?.nonLoggedUserUrl,x=d?.admin?.modules?.nonLoggedUser&&p?.status==="active",{control:g,watch:b}=(0,ej.G)({defaultValues:{status:{label:"Active",value:"active"}}}),{reference:v,pagination:y,order:I}=(0,eO.f)({}),[w,C]=(0,a.useState)({active:!0}),$=b("status"),{data:{sublocations:_,meta:S}={sublocations:[],meta:{aggregate:{totalCount:0}}},loading:A,refetch:D}=(0,n.t)(eB,{variables:{...w,locationId:i.id,...y,orderBy:I}});(0,a.useEffect)(()=>{C({active:$?.value==="active"})},[$?.value]);let M=e=>{e.stopPropagation();let a={customerOptions:[{value:r.id,label:r.name}],locationOptions:[{value:i.id,label:i.name}],customerId:r.id,locationId:i.id};o.show({content:(0,t.jsx)(eN,{defaultValues:a,offCanvas:o,refetchList:D}),submitForm:"sublocationFrom",title:"Add sublocation"})},k=(e,a)=>{e.stopPropagation();let n={id:a.id,name:a.name,description:a.description,meta:a.meta,active:a.item.active?"active":"inactive",customerOptions:[{value:r.id,label:r.name}],locationOptions:[{value:i.id,label:i.name}],customerId:r.id,locationId:i.id};o.show({content:(0,t.jsx)(eN,{defaultValues:n,offCanvas:o,refetchList:D}),submitForm:"sublocationFrom",title:"Edit sublocation"})},[q]=(0,el.f)("/media/delete-media",{queryKey:"deleteMediaSublocationTable",method:"POST",onCompleted:()=>D()}),T=e=>[...u("admin")||u("customer")?[{context:"secondary",icon:"uploadFile",onClick:a=>{let n;return a.stopPropagation(),n=e.item.media?.find(e=>"Sublocation"===e.entity),void o.show({content:(0,t.jsx)(ei.f,{accept:"image/*",category:"sublocationFloorplan",entity:"Sublocation",entityId:e.id,expiryShow:!1,mediaMeta:null,multiple:!1,showVisibility:!1,onSuccess:()=>{D(),n?.mediaId&&q({body:{mediaId:n.mediaId}}),o.close(),k(a,e)},type:"image"}),title:"Upload sublocation map"})},tooltip:"Upload map"}]:[],...u("tenant")?[]:[{context:"secondary",icon:"edit",onClick:t=>k(t,e),tooltip:"Edit"}],...x?[{context:"secondary",icon:"info",onClick:a=>{a.stopPropagation(),o.show({content:(0,t.jsx)(eR,{sublocationId:e.id}),title:"Sublocation info",submit:!1})},tooltip:"Info"}]:[]],L=[{headerName:"Name",field:"name",flex:1,minWidth:100},{headerName:"Location",field:"{'Location': {'name': 'ORDER'}}",flex:1,minWidth:150,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(ew.f,{color:"secondary",noWrap:!a?.locationId,children:a?.locationName||"-"})}},{minWidth:180,flex:1,field:"{'Location': {'Manager': {'fullName': 'ORDER'}}}",headerName:"Location Manager",renderCell:e=>{let{row:a}=e;return(0,t.jsx)(ew.f,{noWrap:!a.locationManagerId,color:"secondary",href:`/dashboard/users/view?id=${a.locationManagerId}`,children:a.locationManagerName})}},{headerName:"Description",field:"description",flex:1,minWidth:100},{headerName:"Status",field:"active",flex:1,minWidth:80},{headerName:"Map",field:"hasMedia",flex:1,sortable:!1,renderCell:e=>{let{row:a}=e,n=m===a.id,i=()=>{f(m===a.id?null:a.id)},r=()=>{f(a.id)},o=()=>{f(null)};return(0,t.jsx)(s.f,{onClick:e=>e.stopPropagation(),onMouseEnter:e=>e.stopPropagation(),onMouseLeave:e=>e.stopPropagation(),children:a.hasMedia?(0,t.jsx)(eI.f,{arrow:!0,open:n,onClose:o,disableFocusListener:!0,disableTouchListener:!0,title:"Map has been uploaded for this sublocation.",children:(0,t.jsx)(eF.default,{color:"secondary",onClick:i,onMouseEnter:r,onMouseLeave:o,sx:{cursor:"pointer"}})}):(0,t.jsx)(eI.f,{arrow:!0,open:n,onClose:o,disableFocusListener:!0,disableTouchListener:!0,title:"No map has been uploaded for this sublocation.",children:(0,t.jsx)(eF.default,{color:"disabled",onClick:i,onMouseEnter:r,onMouseLeave:o,sx:{cursor:"pointer"}})})})}},{headerName:"Actions",field:"actions",flex:1,minWidth:80,sortable:!1,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(eE.f,{row:a,actionsData:T})}}];return(0,t.jsxs)(s.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,t.jsxs)(s.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(ej.e,{name:"status",control:g,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(eC.f,{value:a,disableClearable:!0,textFieldProps:{color:"secondary",variant:"standard",label:"Select status"},sx:{width:"200px"},onChange:(e,t)=>n(t),options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]})}}),!u("tenant")&&(0,t.jsx)(et.f,{variant:"contained",color:"secondary",onClick:M,children:"Create Sublocation"})]}),(0,t.jsxs)(ey.f,{sx:{padding:"16px 0px",height:"calc(90vh - 52px)"},children:[(0,t.jsx)(l.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Sublocations"}),(_?.length||A)&&(0,t.jsx)(ea.s,{...v,loading:A,columns:L,rows:_.map(e=>({name:e.name,locationName:e.location.name,description:e.description,active:e.active?"Active":"Inactive",meta:e.meta,hasMedia:e.media?.some?.(e=>"Sublocation"===e.entity)||!1,actions:"",id:e.id,locationId:e.location.id,locationManagerId:e.location.manager?.id,locationManagerName:e.location.manager?.fullName,item:e})),totalCount:S.aggregate.totalCount,autoHeight:!1,containerHeight:"calc(100% - 52px)"}),!_?.length&&!A&&(0,t.jsx)(eW.f,{imageSrc:"/static/icons/no_locations_found.svg",title:"No sublocations",subtitleFirstLine:"You currently have no sublocations set up in the system",subtitleSecondLine:"Click create sublocation to get started building.",buttonText:h?null:"Create sublocation",onAction:h?null:M})]})]})};var eH=e.i(22024),eV=e.i(765099),ez=e.i(522054),eG=e.i(800884),eQ=e.i(996706);e.i(443645);var eJ=e.i(648116),eK=e.i(335453),eZ=e.i(953116),eX=e.i(218659),e0=e.i(553875),e1=e.i(986351),e2=e.i(964770),e5=e.i(140021),e6=e.i(534971),e9=e.i(699737),e3=e.i(468156),e8=e.i(562367),e7=e.i(441353),e4=e.i(722394),te=e.i(49077),tt=e.i(559868),ta=e.i(868450),tn=e.i(933129),ti=e.i(639907),tr=e.i(827010),to=e.i(851123),ts=e.i(877341),tl=e.i(928382),td=e.i(37332);let tc=["GetServiceSchedules"],tu=e=>{let{scheduleId:i,entityId:r,close:c}=e,u=(0,d.f)("(max-width: 600px)"),[m,f]=(0,eJ.f)(),[h,p]=(0,a.useState)(i||null),[x,g]=(0,a.useState)(null),{handleSubmit:b,control:v,errors:j,watch:y,setValue:I,reset:w}=(0,ej.G)({defaultValues:{status:"active",coverageAreas:[],includeTravelTime:!1},context:{scheduleId:h,defaultScheduleId:i},resolver:(0,e$.yupResolver)(e7.x)}),C=(0,ej.v)({control:v,name:"days"}),$=y("coverageAreas"),{loading:S}=(0,n.t)(eQ.O,{skip:!h,variables:{serviceScheduleId:h},onCompleted:e=>{let{serviceSchedule:t}=e;w({...(0,ti.m)(t)})}}),{service:D,sla:M}=(()=>{let[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)(""),[r,{loading:o,data:{items:s}={items:[]}}]=(0,ts.f)(tr.Z,{variables:{q:""!==e?`%${e}%`:null,limit:50,offset:0}}),[l,{loading:d,data:{items:c}={items:[]}}]=(0,ts.f)(to.U,{variables:{where:{name:{_eq:""!==n?`%${n}%`:null},subtype:{_eq:"reactive"}},limit:50,offset:0}});return{service:{options:s,loading:o,onOpen:()=>r(),onSearchChange:t},sla:{options:c,loading:d,onOpen:()=>l(),onSearchChange:i}}})(),{createSchedule:k,updateSchedule:q,isSaving:T}=(0,td.f)({refetchQueries:tc,onSaved:c}),L=(0,a.useMemo)(()=>h||i?"Edit location schedule":"Create location schedule",[i,h]);return(0,t.jsxs)("form",{onSubmit:b(e=>{let t=(0,tn.Z)({form:e,entityId:r});h||i?q(h,t):k(t)}),children:[m,S&&(0,t.jsx)(e0.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(o.f,{color:"secondary"})}),(0,t.jsx)(tm,{is600pxOrLess:u,children:(0,t.jsxs)(s.f,{height:"100%",width:"100%",children:[(0,t.jsx)(s.f,{children:(0,t.jsx)(l.f,{variant:"h5",fontWeight:700,children:L})}),(0,t.jsx)(s.f,{height:"100%",pt:2,pr:2,sx:{overflowY:"scroll"},children:(0,t.jsxs)(_.f,{container:!0,columnSpacing:2,children:[(0,t.jsxs)(_.f,{container:!0,item:!0,xs:12,md2:7,columnSpacing:2,rowSpacing:2,children:[(0,t.jsxs)(_.f,{item:!0,xs:12,sm2:6,children:[(0,t.jsxs)(s.f,{spacing:2,mb:2,children:[(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",width:"100%",children:[(0,t.jsx)(l.f,{mr:"29px",children:"Service"}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",width:"100%",spacing:1,children:[(0,t.jsx)(ej.e,{name:"service",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(ek.f,{...D,fullWidth:!0,filterSelectedOptions:!0,isOptionEqualToValue:(e,t)=>e.value===t.value,value:a||null,onChange:(e,t)=>{t?.value?n(t):(p(null),w({...e6.e}))},color:"secondary",variant:"standard",placeholder:"Service",error:!!j.service,helperText:j.service?.message})}}),(0,t.jsx)(eI.f,{title:"Add service",children:(0,t.jsx)(et.f,{disableMinWidth:!0,color:"secondary",variant:"contained",size:"small",onClick:e=>{e.stopPropagation(),f({content:e=>{let{onClose:a}=e;return(0,t.jsx)(tt.f,{close:a})}})},children:"+"})})]})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",width:"100%",spacing:2,children:[(0,t.jsx)(l.f,{children:"Schedule"}),(0,t.jsx)(ej.e,{name:"scheduleName",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(eM.f,{fullWidth:!0,color:"secondary",variant:"standard",placeholder:"Schedule name",value:a,onChange:n,error:!!j.scheduleName,helperText:j.scheduleName?.message})}})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",width:"100%",children:[(0,t.jsx)(l.f,{mr:"34px",children:"Status"}),(0,t.jsx)(ej.e,{name:"status",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(eT.f,{fullWidth:!0,variant:"standard",color:"secondary",error:!!j.status,helperText:j.status?.message,value:a,onChange:n,options:[...e6.P]})}})]})]}),(0,t.jsxs)(s.f,{width:"100%",mb:2,children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"Priority"}),(0,t.jsx)(ej.e,{name:"priority",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(ek.f,{...M,multiple:!0,fullWidth:!0,color:"secondary",filterSelectedOptions:!0,value:a||[],onChange:(e,t)=>{n(t)},placeholder:"Select priority",variant:"standard",error:!!j.priority,helperText:j.priority?.message})}})]}),(0,t.jsxs)(_.f,{container:!0,item:!0,columnSpacing:2,rowSpacing:2,children:[(0,t.jsxs)(_.f,{item:!0,xs:12,md:6,md2:12,lg2:6,children:[(0,t.jsx)(l.f,{children:"Minimum duration"}),(0,t.jsx)(ej.e,{name:"minimumDuration",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(ta.default,{sx:{height:"18px"}}),rightLabel:"Mins",sx:{width:"120px"},type:"number",value:a,onChange:n,error:!!j.minimumDuration,helperText:j.minimumDuration?.message})}})]}),(0,t.jsxs)(_.f,{item:!0,xs:12,md:6,md2:12,lg2:6,children:[(0,t.jsx)(l.f,{children:"Minimum increment"}),(0,t.jsx)(ej.e,{name:"minimumIncrement",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(ta.default,{sx:{height:"18px"}}),rightLabel:"Mins",sx:{width:"120px"},type:"number",value:a,onChange:n,error:!!j.minimumIncrement,helperText:j.minimumIncrement?.message})}})]})]})]}),(0,t.jsxs)(_.f,{item:!0,xs:12,sm2:6,children:[(0,t.jsx)(e8.f,{editable:!0,paginationSize:4,name:"coverageAreas",values:$||[],setValue:I}),(0,t.jsx)(ej.e,{name:"coverageAreas",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)("input",{value:a,onChange:n,type:"hidden"})}})]}),(0,t.jsxs)(_.f,{width:"100%",container:!0,item:!0,xs:12,columnSpacing:2,children:[(0,t.jsxs)(_.f,{item:!0,xs:12,width:"100%",pr:2,mb:1,children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"Rates"}),(0,t.jsx)(e1.f,{})]}),(0,t.jsx)(_.f,{item:!0,xs:12,sm3:4,children:(0,t.jsxs)(s.f,{spacing:1,width:"100%",children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"Normal"}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{children:"First hour"}),(0,t.jsx)(ej.e,{name:"normal.firstHour",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",sx:{minWidth:"80px"},inputProps:{min:0,step:.01},type:"number",value:a,onChange:n,error:!!j.normal?.firstHour,helperText:j.normal?.firstHour?.message})}})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{children:"Subsequent hours"}),(0,t.jsx)(ej.e,{name:"normal.subsequentHours",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",sx:{minWidth:"80px"},inputProps:{min:0,step:.01},type:"number",value:a,onChange:n,error:!!j.normal?.subsequentHours,helperText:j.normal?.subsequentHours?.message})}})]})]})}),(0,t.jsx)(_.f,{item:!0,xs:12,sm3:4,children:(0,t.jsxs)(s.f,{spacing:1,width:"100%",children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"OOH"}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{children:"First hour"}),(0,t.jsx)(ej.e,{name:"ooh.firstHour",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",sx:{minWidth:"80px"},inputProps:{min:0,step:.01},type:"number",value:a,onChange:n,error:!!j.ooh?.firstHour,helperText:j.ooh?.firstHour?.message})}})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{children:"Subsequent hours"}),(0,t.jsx)(ej.e,{name:"ooh.subsequentHours",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",sx:{minWidth:"80px"},inputProps:{min:0,step:.01},type:"number",value:a,onChange:n,error:!!j.ooh?.subsequentHours,helperText:j.ooh?.subsequentHours?.message})}})]})]})}),(0,t.jsx)(_.f,{item:!0,xs:12,sm3:4,children:(0,t.jsxs)(s.f,{spacing:1,width:"100%",children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"Premium"}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{children:"First hour"}),(0,t.jsx)(ej.e,{name:"premium.firstHour",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",sx:{minWidth:"80px"},inputProps:{min:0,step:.01},type:"number",value:a,onChange:n,error:!!j.premium?.firstHour,helperText:j.premium?.firstHour?.message})}})]}),(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{children:"Subsequent hours"}),(0,t.jsx)(ej.e,{name:"premium.subsequentHours",control:v,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{fullWidth:!0,leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",sx:{minWidth:"80px"},inputProps:{min:0,step:.01},type:"number",value:a,onChange:n,error:!!j.premium?.subsequentHours,helperText:j.premium?.subsequentHours?.message})}})]})]})}),(0,t.jsx)(_.f,{item:!0,xs:12,children:(0,t.jsx)(tl.f,{control:v})})]})]}),(0,t.jsx)(_.f,{item:!0,xs:12,md2:5,children:(0,t.jsxs)(s.f,{spacing:1,children:[(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,mb:1,children:"Times"}),(0,t.jsx)(e1.f,{})]}),(0,t.jsx)(e3.f,{}),(0,t.jsxs)(s.f,{spacing:.5,children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"OOH"}),(0,t.jsx)(s.f,{spacing:1,children:e6.s.map(e=>(0,t.jsx)(e9.f,{control:v,name:`oohTimes.${e.value}`,day:e.label,error:j.oohTimes?.[e.value]}))})]}),(0,t.jsxs)(s.f,{spacing:.5,children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"Premium"}),(0,t.jsx)(s.f,{spacing:1,children:e6.s.map(e=>(0,t.jsx)(e9.f,{control:v,name:`premiumTimes.${e.value}`,day:e.label,error:j.premiumTimes?.[e.value]}))})]})]})}),(0,t.jsxs)(_.f,{container:!0,item:!0,xs:12,mt:2,columnSpacing:2,children:[(0,t.jsx)(_.f,{item:!0,xs:0,md2:7}),(0,t.jsx)(_.f,{item:!0,xs:12,md2:5,children:(0,t.jsxs)(s.f,{children:[(0,t.jsx)(l.f,{variant:"h6",fontWeight:700,children:"Days"}),(0,t.jsx)(s.f,{direction:"row",spacing:1,flexWrap:"wrap",children:C.fields.map((e,a)=>(0,t.jsx)(eG.f,{label:(0,A.default)(e).format("YYYY-MM-DD"),size:"small",onDelete:()=>C.remove(a)}))}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:2,children:[(0,t.jsx)(e4.f,{format:"YYYY-MM-DD",value:(0,A.default)(x),onChange:e=>{g(e)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",placeholder:"Select days"}}}),(0,t.jsx)(et.f,{disableMinWidth:!0,color:"secondary",variant:"contained",size:"small",onClick:()=>C.append(x),children:(0,t.jsx)(te.default,{})})]})]})})]}),(0,t.jsx)(_.f,{item:!0,xs:12,sx:{display:"flex",justifyContent:"center"},mt:2,children:(0,t.jsx)(l.f,{color:"muiGray.main",children:"All job start times occurring outside times specified above will be charged based on Normal rates."})})]})}),(0,t.jsxs)(s.f,{width:"100%",direction:"row",justifyContent:"center",spacing:2,children:[(0,t.jsx)(et.f,{color:"danger",variant:"contained",onClick:c,children:"Cancel"}),(0,t.jsx)(et.f,{color:"secondary",variant:"contained",type:"submit",disabled:T,children:h||i?"Save":"Add schedule"})]})]})})]})},tm=(0,B.f)(ey.f)(e=>{let{is600pxOrLess:t}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:t?"100vw":"90vw",height:t?"100vh":"90vh",padding:"16px 27px 16px 27px",borderRadius:"8px"}});var tf=e.i(546924),th=e.i(706692);let tp=e=>{let{editable:i=!1,initialFilters:r,entityId:o,tableHeight:d="calc(100% - 42px)",paperHeight:c="calc(100vh - 90px)"}=e,u=(0,th.f)("(max-width: 600px)"),[m,f]=(0,eJ.f)(),[h,p]=(0,a.useState)({status:"active"}),[x,g]=(0,a.useState)(!1),{reference:b,pagination:v,order:j}=(0,eO.f)(),{data:{schedules:y,meta:I}={schedules:[],meta:{aggregate:{totalCount:0}}},loading:w}=(0,n.t)(eQ.n,{variables:{...h,...v,order:j,entity:"Location",entityId:o}}),C=(0,a.useCallback)(e=>{e.stopPropagation(),f({content:e=>{let{onClose:a}=e;return(0,t.jsx)(tu,{entityId:o,close:a})}})},[f,o]),$=(0,a.useCallback)(e=>{i&&f({content:a=>{let{onClose:n}=a;return(0,t.jsx)(tu,{scheduleId:e,entityId:o,close:n})}})},[o,i,f]),_=(0,a.useCallback)(e=>[{icon:"edit",onClick:t=>{t.stopPropagation(),$(e.id)},tooltip:"Edit Schedule"}],[$]),S=(0,a.useMemo)(()=>y.map(e=>({id:e.id,serviceLine:e.service?.name,schedule:e.name,rate:e.normal,rateOOH:e.ooh,ratePremium:e.premium,coverageArea:e.postcodeAreas?.map(e=>e?.postcode?.area).join(", "),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,status:e.status,serviceId:e.serviceId})),[y]),A=(0,a.useMemo)(()=>[{sortable:!0,flex:1,minWidth:180,field:'{"Service": {"name": "ORDER"}}',headerName:"Service line",renderCell:e=>{let{row:t}=e;return t.serviceLine??"-"}},{sortable:!0,flex:1,minWidth:180,field:"name",headerName:"Schedule",renderCell:e=>{let{row:t}=e;return t.schedule??"-"}},{sortable:!1,flex:1,minWidth:180,field:"rate",headerName:"£/H",renderCell:e=>{let{row:a}=e;return(0,t.jsxs)(s.f,{children:[(0,t.jsxs)(l.f,{children:["First hour: £ ",a.rate.firstHour??"-"]}),(0,t.jsxs)(l.f,{children:["Subsequent hours: £ ",a.rate.subsequentHours??"-"]})]})}},{sortable:!1,flex:1,minWidth:180,field:"rateOOH",headerName:"£/H OOH",renderCell:e=>{let{row:a}=e;return(0,t.jsxs)(s.f,{children:[(0,t.jsxs)(l.f,{children:["First hour: £ ",a.rateOOH.firstHour??"-"]}),(0,t.jsxs)(l.f,{children:["Subsequent hours: £ ",a.rateOOH.subsequentHours??"-"]})]})}},{sortable:!1,flex:1,minWidth:180,field:"ratePremium",headerName:"£/H Premium",renderCell:e=>{let{row:a}=e;return(0,t.jsxs)(s.f,{children:[(0,t.jsxs)(l.f,{children:["First hour: £ ",a.ratePremium.firstHour??"-"]}),(0,t.jsxs)(l.f,{children:["Subsequent hours: £ ",a.ratePremium.subsequentHours??"-"]})]})}},{sortable:!1,flex:1,minWidth:150,field:"coverageArea",headerName:"Coverage area"},{sortable:!0,flex:1,field:"minimumDuration",headerName:"Min duration",renderCell:e=>{let{row:t}=e;return t.minimumDuration??"-"}},{sortable:!0,flex:1,field:"minimumIncrement",headerName:"Min increment",renderCell:e=>{let{row:t}=e;return t.minimumIncrement??"-"}},{sortable:!1,flex:1,minWidth:100,field:"status",headerName:"Status",renderCell:e=>{let{row:a}=e;return(0,t.jsx)(eG.f,{label:"active"===a.status?"Active":"Inactive",color:"active"===a.status?"success":"danger",size:"small"})}},{sortable:!1,width:100,field:"actions",headerName:"Actions",renderCell:e=>{let{row:a}=e;return(0,t.jsx)(eo.f,{actions:_(a)})}}],[_]),D=(0,a.useMemo)(()=>h?.q?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No schedules",subtitleFirstLine:"You currently have no schedules set up in the system",...i?{buttonText:"Add schedule",onAction:C}:{}},[C,h,i]);return(0,t.jsxs)(t.Fragment,{children:[m,(0,t.jsx)(eK.f,{open:x,close:()=>g(!1),initialFilters:r,setFilters:p}),(0,t.jsx)(s.f,{width:"100%",spacing:2,children:(0,t.jsxs)(ey.f,{sx:{paddingTop:"16px",paddingBottom:"16px",height:c},children:[(0,t.jsxs)(s.f,{direction:"row",justifyContent:"space-between",pl:2,pr:2,children:[(0,t.jsx)(l.f,{variant:"h5",sx:{fontWeight:600},children:"Services"}),(0,t.jsxs)(ez.f,{children:[i&&(0,t.jsx)(et.f,{color:"secondary",variant:"contained",onClick:C,children:u?(0,t.jsx)(tf.default,{}):"Add schedule"}),(0,t.jsx)(et.f,{startIcon:!u&&(0,t.jsx)(eZ.default,{}),variant:"contained",onClick:()=>g(!0),children:u?(0,t.jsx)(eZ.default,{}):"Filters"})]})]}),(S?.length||w)&&(0,t.jsx)(ea.s,{...b,autoHeight:!1,loading:w,columns:A,rows:S,totalCount:I.aggregate.totalCount,containerHeight:d,columnVisibilityModel:{actions:i},onRowClick:e=>{let{row:t}=e;return $(t.id)}}),!S?.length&&!w&&(0,t.jsx)(eX.f,{imageSrc:"/static/icons/no_locations_found.svg",...D})]})})]})},tx=u.f`
  query GetTenantBookings(
    $limit: Int
    $locationId: Int
    $offset: Int
    $orderBy: TenantBooking_order_by!
    $q: Int
    $userId: Int
  ) {
    tenantBookings: TenantBooking(
      limit: $limit
      offset: $offset
      where: { id: { _eq: $q }, locationId: { _eq: $locationId }, userId: { _eq: $userId } }
      order_by: [$orderBy]
    ) {
      id
      bookingStart
      bookingEnd
      notes
      status
      createdAt
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
    meta: TenantBooking_aggregate(
      where: { id: { _eq: $q }, locationId: { _eq: $locationId }, userId: { _eq: $userId } }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var tg=e.i(686255),tb=e.i(530568);let tv=e=>{let{filters:i}=e,r=(0,U.f)(),{locationId:o}=i,{reference:d,pagination:c,order:u}=(0,eO.f)({initialSort:[{item:"createdAt",order:"desc"}]}),{data:{tenantBookings:m,meta:f}={tenantBookings:[],meta:{aggregate:{totalCount:0}}},loading:h,refetch:p}=(0,n.t)(tx,{variables:{...i,...c,orderBy:u?.[0]||{createdAt:"desc"}}}),x=(0,a.useCallback)((e,a)=>{e?.stopPropagation();let n=a?m.find(e=>e.id===Number(a.id)):void 0,i=(0,tb.f)(n,o);r.show({title:a?"Edit tenant":"Add tenant",content:(0,t.jsx)(tg.f,{defaultValues:i,refetch:p,offCanvas:r})})},[m,o,r,p]),g=(0,a.useCallback)(e=>{x(null,e)},[x]),b=(0,a.useCallback)(e=>[{icon:"edit",tooltip:"Edit",onClick:()=>g(e)}],[g]),v=(0,a.useMemo)(()=>[{headerName:"Name",field:"tenantName",sortable:!1,flex:1,minWidth:150,renderCell:e=>{let{row:t}=e;return t.user?.fullName||"-"}},{headerName:"Email address",field:"email",sortable:!1,flex:1,minWidth:200,renderCell:e=>{let{row:t}=e;return t.user?.email||"-"}},{headerName:"Phone",field:"phone",sortable:!1,flex:1,minWidth:200,renderCell:e=>{let{row:t}=e;return t.user?.phone||"-"}},{headerName:"Booked from",field:"bookingStart",sortable:!1,flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return(0,A.default)(t.bookingStart).format("DD/MM/YYYY")}},{headerName:"Booked to",field:"bookingEnd",sortable:!1,flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return t.bookingEnd?(0,A.default)(t.bookingEnd).format("DD/MM/YYYY"):"-"}},{headerName:"Date added",field:"createdAt",sortable:!0,flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return(0,A.default)(t.createdAt).format("DD/MM/YYYY")}},{headerName:"Status",field:"status",sortable:!1,flex:1,minWidth:100,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(eG.f,{label:"active"===a.status?"Active":"Inactive",color:"active"===a.status?"success":"danger"})}},{headerName:"Actions",field:"actions",sortable:!1,minWidth:100,flex:1,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(eo.f,{actions:b(a)})}}],[b]),j=(0,a.useMemo)(()=>m.map(e=>({id:e.id,user:e?.user,bookingStart:e.bookingStart,bookingEnd:e.bookingEnd,status:e.status,createdAt:e.createdAt})),[m]),y=(0,a.useCallback)(e=>{e.stopPropagation(),x(e)},[x]),I=(0,a.useMemo)(()=>o?{title:"No tenant bookings",subtitleFirstLine:"You currently have no tenant bookings set up in the system",subtitleSecondLine:'Click "Add tenant" to get started.',buttonText:"Add tenant",onAction:y}:{title:"No location selected",subtitleFirstLine:"Please select a location to view tenant bookings",subtitleSecondLine:"or add new tenants to the system."},[o,y]);return(0,t.jsxs)(ey.f,{sx:tj.tableContainer,children:[(0,t.jsxs)(s.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(l.f,{variant:"h5",ml:2,sx:tj.title,children:"Tenant bookings"}),o&&(0,t.jsx)(et.f,{sx:{mr:2,alignSelf:"flex-start"},variant:"contained",color:"secondary",onClick:y,children:"Add tenant"})]}),(j?.length||h)&&(0,t.jsx)(ea.s,{...d,stateKey:"tenants",loading:h,columns:v,rows:j,totalCount:f?.aggregate?.totalCount,autoHeight:!1,containerHeight:"calc(100% - 52px)"}),!j?.length&&!h&&(0,t.jsx)(eX.f,{imageSrc:"/static/icons/no_locations_found.svg",...I})]})},tj={tableContainer:{padding:"16px 0px",height:"calc(80vh - 22px)"},title:{fontWeight:600,marginBottom:"15px"}};var ty=e.i(960254),tI=e.i(191579),tw=e.i(370569),tC=e.i(504764),t$=e.i(728011),t_=e.i(796460);let tS=["compliance","items","calendar"],tA=e=>{let{location:n}=e,r=(0,d.f)("(max-width:600px)"),{hasRole:o}=(0,j.f)(),{hasUserModule:l}=(0,c.f)(),u=(0,i.useRouter)(),m=o("admin_user"),f=l("ppmSchedules"),h=!m||f,[p,g]=(0,a.useState)(()=>{var e;return e=u.query.viewTab,Array.isArray(e)||!e?"compliance":(h?tS:tS.filter(e=>"items"!==e)).includes(e)?e:"compliance"});return(0,t.jsxs)(s.f,{children:[(0,t.jsx)(t_.f,{locationId:n.id}),(0,t.jsxs)(tk,{value:p,is600pxOrLess:r,children:[(0,t.jsxs)(tM,{value:p,onChange:(e,t)=>{g(t),i.default.push({query:{...u.query,viewTab:t}})},"aria-label":"basic tabs example",children:[(0,t.jsx)(tI.f,{label:"Compliance",value:"compliance"}),h&&(0,t.jsx)(tI.f,{label:"Items",value:"items"}),(0,t.jsx)(tI.f,{label:"Calendar",value:"calendar"})]}),(0,t.jsx)(x.f,{value:p,index:"compliance",boxSx:tD.tabPanelBoxSx,children:(0,t.jsx)(tw.f,{location:n,hideFilters:{supplier:!o("admin"),customer:!0,accountManager:!0},editable:o("admin"),creatable:o("admin"),viewOnly:o("customer"),columnVisibility:{location:!1,customer:!1,manager:!1}})}),h&&(0,t.jsx)(x.f,{value:p,index:"items",boxSx:tD.tabPanelBoxSx,children:(0,t.jsx)(tC.f,{hideAddAction:!0,hideCopyItems:!0,canToggleStatus:!1,locationId:n.id,locationName:n.name,initialFilters:{locationId:n.id,complianceOnly:!0,filterType:`location_compliance_${n.id}`},hideFilters:["location","tags","allItems","allJobs","customerId","customerManagerId"],columnVisibilityModel:{invoicePeriod:!1,invoiceBasis:!1,invoiceAmount:!1,actions:!1},containerHeight:"calc(100vh - 120px)",tableHeight:"calc(100% - 180px)"})}),(0,t.jsx)(x.f,{value:p,index:"calendar",boxSx:tD.tabPanelBoxSx,children:(0,t.jsx)(t$.f,{defaultFilters:["ppm","cppm"],locationId:n.id,hideFilters:["siteVisit","reactive","ppm","cppm","quote"],hideCreateWorkOrder:!0,complianceOnly:!0,type:"property"})})]})]})},tD={tabPanelBoxSx:{padding:"0px 0px 0px 0px"}},tM=(0,B.f)(ty.f)(e=>{let{theme:t}=e;return{"&.MuiTabs-root":{paddingLeft:"16px",minHeight:"auto"},"& .MuiTabs-scroller":{minHeight:"auto"},"& .MuiTab-root":{fontSize:"18px",textTransform:"none",padding:"12px 0px",minWidth:"auto",minHeight:"auto",marginRight:"50px",color:t.palette.black.main},"& .MuiTab-root.Mui-selected":{color:t.palette.black.main},"& .MuiTabs-indicator":{bottom:"8px",backgroundColor:t.palette.black.main}}}),tk=(0,B.f)(ey.f)(()=>({height:"calc(100vh - 120px)",marginTop:"25px"}));var tq=e.i(642546),tT=e.i(498922),tL=e.i(201609),tN=e.i(523042),tU=e.i(549384),tW=e.i(308277),tF=e.i(775668),tB=e.i(879436);let tE=e=>{let{expanded:a,handleOpen:n,budgetReactiveAmount:i,budgetQuoteAmount:r,budgetPpmAmount:o,totalReactiveWorks:c,totalQuotedWorks:u,totalPpmWorks:m,invoicedAmount:f,paidAmount:h,amountLeftToPay:p}=e,x=(0,d.f)("(max-width: 600px)"),g=c&&i?c/i*100:0,b=u&&r?u/r*100:0,v=m&&o?m/o*100:0;return(0,t.jsxs)(tU.f,{icon:(0,t.jsx)(tW.f,{component:tF.f,inheritViewBox:!0,sx:{"& path":{fill:"#82E1FF"}}}),expanded:a,onOpen:n,spacing:3,children:[(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:tR.mobileItem(x),children:[(0,t.jsx)(l.f,{fontWeight:700,mr:1,children:"Total reactive works (Net):"}),(0,t.jsx)(l.f,{color:"white.main",mr:1,children:"number"==typeof c?(0,tB.f)(c):"-"}),(0,t.jsx)(tP,{percentage:g,size:"small",label:`${g.toFixed(2)}%`})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:tR.mobileItem(x),children:[(0,t.jsx)(l.f,{fontWeight:700,mr:1,children:"Total quoted works (Net):"}),(0,t.jsx)(l.f,{color:"white.main",mr:1,children:"number"==typeof u?(0,tB.f)(u):"-"}),(0,t.jsx)(tP,{percentage:b,size:"small",label:`${b.toFixed(2)}%`})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:tR.mobileItem(x),children:[(0,t.jsx)(l.f,{fontWeight:700,mr:1,children:"Total ppm spend (Net):"}),(0,t.jsx)(l.f,{color:"white.main",mr:1,children:"number"==typeof m?(0,tB.f)(m):"-"}),(0,t.jsx)(tP,{percentage:v,size:"small",label:`${v.toFixed(2)}%`})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:tR.mobileItem(x),children:[(0,t.jsx)(l.f,{fontWeight:700,mr:1,children:"Invoiced amount:"}),(0,t.jsx)(l.f,{color:"white.main",mr:1,children:"number"==typeof f?(0,tB.f)(f):"-"})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:tR.mobileItem(x),children:[(0,t.jsx)(l.f,{fontWeight:700,mr:1,children:"Paid amount:"}),(0,t.jsx)(l.f,{color:"white.main",mr:1,children:"number"==typeof h?(0,tB.f)(h):"-"})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:tR.mobileItem(x),children:[(0,t.jsx)(l.f,{fontWeight:700,mr:1,children:"Amount left to pay:"}),(0,t.jsx)(l.f,{color:"white.main",mr:1,children:"number"==typeof p?(0,tB.f)(p):"-"})]})]})},tP=(0,B.f)(eG.f)(e=>{let{percentage:t,theme:a}=e;return{backgroundColor:t>90?a.palette.danger.main:t>75?a.palette.info.main:a.palette.success.main,color:t>90?a.palette.danger.contrastText:t>75?a.palette.info.contrastText:a.palette.success.contrastText,borderRadius:6}}),tR={mobileItem:e=>e?{width:"calc(100vw - 40px)",padding:"6px",borderBottom:"1px solid #FFFFFF"}:{}};var tO=e.i(185242),tY=e.i(21557);let tH=e=>{let{locationId:a,reactiveAmount:n,quoteAmount:i,ppmAmount:r}=e,o=(0,tY.f)(),{data:l,isLoading:d}=(0,tO.f)(`/location/${a}/budget/ribbon-panel-totals`,{queryKey:"location-budget-ribbon-panel-totals",method:"GET",onError:e=>{o.show({content:`Error: ${e.message}`,color:"error"})}});return d?(0,t.jsx)(s.f,{height:"100%",spacing:2,children:(0,t.jsx)(tN.f,{animation:"wave",variant:"rounded",height:"42px",width:"100%"})}):(0,t.jsx)(tV,{children:(0,t.jsx)(tE,{expanded:!0,handleOpen:()=>{},budgetReactiveAmount:n,budgetQuoteAmount:i,budgetPpmAmount:r,totalReactiveWorks:l?.totalReactiveWorks,totalQuotedWorks:l?.totalQuotedWorks,totalPpmWorks:l?.totalPpmWorks,invoicedAmount:l?.invoicedAmount,paidAmount:l?.paidAmount,amountLeftToPay:l?.amountLeftToPay})})},tV=(0,B.f)(s.f)(()=>({position:"relative",color:"#BEEFFF"}));var tz=e.i(683125),tG=e.i(891723),tQ=e.i(10945);let tJ={jobType:[],costCategoryId:null,sublocationId:null,startDate:null,endDate:null},tK={jobType:"Job type",costCategoryId:"Cost category",sublocationId:"Sublocation",startDate:"Start date",endDate:"End date"},tZ=e=>{let{filters:a,onClear:n,sx:i={}}=e,r=Object.entries(a).map(e=>{let[a,i]=e,r=((e,t)=>!t||Array.isArray(t)&&0===t.length?null:`${tK[e]} is ${Array.isArray(t)?t.map(e=>e.label).join(", "):("object"!=typeof t||t instanceof Date||A.default.isMoment(t))&&("startDate"===e||"endDate"===e)?(0,A.default)(t).format("DD/MM/YYYY"):"object"==typeof t&&"label"in t&&"value"in t?t.label:t}`)(a,i);return r?(0,t.jsx)(eG.f,{label:r,size:"small",onDelete:()=>n(a)},a):null});return(0,t.jsx)(s.f,{direction:"row",width:"100%",spacing:1,sx:{overflow:"auto",...i},children:r})},tX=e=>{let{locationId:n,startDate:i,endDate:r,setFilters:o,chipContainerSx:l,filterButtonSx:c,mobileFilterButton:u=!1}=e,m=(0,d.f)("(max-width: 600px)"),[f,h]=(0,a.useState)(!1),p=(0,a.useMemo)(()=>{let e;return e={startDate:i,endDate:r},{jobType:[],costCategoryId:null,sublocationId:null,startDate:e?.startDate?(0,A.default)(e.startDate).startOf("day").toISOString():(0,A.default)().startOf("year").toISOString(),endDate:e?.endDate?(0,A.default)(e.endDate).endOf("day").toISOString():(0,A.default)().endOf("year").toISOString()}},[i,r]),[x,g]=(0,tQ.f)({storageType:"state",key:`location-budget-${n}`,initialValue:p}),b=(0,ej.G)({defaultValues:p}),{reset:v}=b,{costCategory:j,sublocation:y}=(e=>{let{locationId:t}=e,[n,i]=(0,a.useState)(""),[r,o]=(0,a.useState)(""),[s,{data:{items:l}={items:[]},loading:d}]=(0,ts.f)(to.A,{variables:{where:{status:{_eq:"active"},type:{_eq:"costCategory"},name:{_ilike:""!==n?`%${n}%`:null}},limit:50,offset:0,orderBy:{name:"asc"}}}),[c,{data:{items:u}={items:[]},loading:m}]=(0,ts.f)(to.i,{variables:{locationId:t,q:""!==r?`%${r}%`:null}});return{costCategory:{options:l,loading:d,onOpen:()=>s(),onSearchChange:e=>i(e)},sublocation:{options:u,loading:m,onOpen:()=>c(),onSearchChange:e=>o(e)}}})({locationId:n});return(0,a.useEffect)(()=>{let e={jobType:x?.jobType?.length?x.jobType?.map(e=>e.value):null,costCategoryId:x.costCategoryId?.value,sublocationId:x.sublocationId?.value,startDate:x.startDate?(0,A.default)(x.startDate).startOf("day").toISOString():null,endDate:x.endDate?(0,A.default)(x.endDate).endOf("day").toISOString():null};v(x),o(t=>({...t,...e}))},[x,v,o]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(tZ,{filters:x,onClear:e=>{g(t=>{let a={...t};return a[e]=tJ[e],a})},sx:l}),(0,t.jsx)(et.f,{variant:"contained",startIcon:(0,t.jsx)(tG.default,{}),onClick:()=>h(!0),sx:c,children:u?"":"Filter"}),(0,t.jsx)(tz.f,{keepMounted:!0,open:f,onClose:()=>h(!1),children:(0,t.jsx)(t0,{is600pxOrLess:m,children:(0,t.jsxs)("form",{onSubmit:b.handleSubmit(e=>{g(e),h(!1)}),children:[(0,t.jsxs)(_.f,{container:!0,spacing:2,children:[(0,t.jsx)(_.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(ej.e,{name:"jobType",control:b.control,defaultValue:[],render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(ek.f,{multiple:!0,options:[{label:"Quote",value:"quote"},{label:"Reactive",value:"reactive"},{label:"Planned Maintenance",value:"ppm"}],value:a,onChange:(e,t)=>n(t),variant:"standard",color:"secondary",label:"Job type"})}})}),(0,t.jsx)(_.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(ej.e,{name:"costCategoryId",control:b.control,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(ek.f,{...j,value:a,onChange:(e,t)=>n(t),variant:"standard",color:"secondary",label:"Cost category"})}})}),(0,t.jsx)(_.f,{container:!0,item:!0,xs:12,spacing:2,children:(0,t.jsx)(_.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(ej.e,{name:"sublocationId",control:b.control,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(ek.f,{...y,value:a,onChange:(e,t)=>n(t),variant:"standard",color:"secondary",label:"Sublocation"})}})})}),(0,t.jsx)(_.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(ej.e,{name:"startDate",control:b.control,defaultValue:null,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e4.f,{value:a?(0,A.default)(a):null,onChange:n,label:"Start date",format:"Do MMM YYYY",slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary"}}})}})}),(0,t.jsx)(_.f,{item:!0,xs:12,md:6,children:(0,t.jsx)(ej.e,{name:"endDate",control:b.control,defaultValue:null,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e4.f,{value:a?(0,A.default)(a):null,onChange:n,label:"End date",format:"Do MMM YYYY",slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary"}}})}})})]}),(0,t.jsxs)(s.f,{direction:"row",justifyContent:"flex-end",spacing:2,mt:2,children:[(0,t.jsx)(et.f,{variant:"contained",color:"danger",onClick:()=>{v(tJ),o({}),g(tJ),h(!1)},children:"Clear"}),(0,t.jsx)(et.f,{variant:"contained",color:"secondary",type:"submit",children:"Apply"})]})]})})})]})},t0=(0,B.f)(ey.f)(e=>{let{is600pxOrLess:t}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:t?"100vw":"600px",height:t?"100vh":"auto",borderRadius:t?"0px":"8px",padding:"16px 27px 16px 27px !important",overflowY:"auto"}});var t1=e.i(65295);let t2=u.f`
  fragment BudgetFields on Budget {
    id
    locationId
    userId
    startDate
    endDate
    reactiveAmount
    quoteAmount
    ppmAmount
    totalAmount
    createdAt
    updatedAt
  }
`,t5=u.f`
  query GetLocationBudget($locationId: Int!) {
    budget: Budget(where: { locationId: { _eq: $locationId } }, order_by: { id: desc }, limit: 1) {
      ...BudgetFields
    }
  }
  ${t2}
`,t6=u.f`
  mutation InsertBudget($budgets: [Budget_insert_input!]!) {
    insert_Budget(objects: $budgets) {
      returning {
        id
      }
    }
  }
`,t9=u.f`
  query GetLocationBudgets($locationId: Int!) {
    budgets: Budget(where: { locationId: { _eq: $locationId } }, order_by: { id: desc }) {
      ...BudgetFields
      user: User {
        id
        fullName
      }
    }
  }
  ${t2}
`;var t3=e.i(190077);let t8=e=>{let{locationId:i}=e,{data:{budgets:r}={budgets:[]},loading:o}=(0,n.t)(t9,{variables:{locationId:i}}),s=(0,a.useMemo)(()=>[{field:"type",headerName:"Type",flex:1,minWidth:120,sortable:!1},{field:"oldValue",headerName:"Old value",flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return t.oldValue},sortable:!1},{field:"newValue",headerName:"New value",flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return t.newValue},sortable:!1},{field:"user",headerName:"User",flex:1,minWidth:190,renderCell:e=>{let{row:t}=e;return t.user.fullName},sortable:!1},{field:"createdAt",headerName:"Date",flex:1,minWidth:190,renderCell:e=>{let{row:t}=e;return(0,t1.f)(t.createdAt,!0)},sortable:!1}],[]),l=(0,a.useMemo)(()=>{let e;return e=[],r.forEach((t,a)=>{let n,i,o,s=r[a+1];s&&e.push(...(n={reactiveAmount:"Reactive works",quoteAmount:"Quoted works",ppmAmount:"PPM",startDate:"Start date",endDate:"End date"},i={reactiveAmount:"number",quoteAmount:"number",ppmAmount:"number",startDate:"date",endDate:"date"},o=[],["reactiveAmount","quoteAmount","ppmAmount","startDate","endDate"].forEach(e=>{if(t[e]!==s[e])switch(i[e]){case"number":o.push({id:(0,t3.f)(),type:n[e],oldValue:(0,tB.f)(s[e]),newValue:(0,tB.f)(t[e]),user:t.user,createdAt:t.createdAt});break;case"date":o.push({id:(0,t3.f)(),type:n[e],oldValue:(0,t1.f)(s[e]),newValue:(0,t1.f)(t[e]),user:t.user,createdAt:t.createdAt})}}),o))}),e},[r]);return(0,t.jsx)(ea.s,{loading:o,rows:l,columns:s})},t7=eS.t().shape({reactiveAmount:eS.H().required("Reactive amount is required").typeError("Reactive amount must be a number"),quoteAmount:eS.H().required("Quote amount is required").typeError("Quote amount must be a number"),ppmAmount:eS.H().required("PPM amount is required").typeError("PPM amount must be a number"),startDate:eS.c().required("Start date is required"),endDate:eS.c().required("End date is required")});var t4=e.i(3878);let ae=e=>{let{locationId:a,lastBudget:n,close:i}=e,{user:r}=(0,j.f)(),{refetchQuery:d}=(0,t4.r)(),c=(0,tY.f)(),u=(0,ej.G)({defaultValues:{reactiveAmount:n?.reactiveAmount||0,quoteAmount:n?.quoteAmount||0,ppmAmount:n?.ppmAmount||0,startDate:n?.startDate,endDate:n?.endDate},reValidateMode:"onChange",resolver:(0,e$.yupResolver)(t7)}),m=Number(u.watch("reactiveAmount")),f=Number(u.watch("quoteAmount")),h=Number(u.watch("ppmAmount")),[p,{loading:x}]=(0,e_.f)(t6,{refetchQueries:["GetLocationBudget"],onCompleted:()=>{d("location-budget-chart"),c.show({content:"Budgets added successfully",severity:"success"}),i()},onError:e=>{c.show({content:`Error: ${e.message}.`,severity:"error"})}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e0.f,{open:x,sx:{zIndex:1e5},children:(0,t.jsx)(o.f,{color:"secondary"})}),(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:u.handleSubmit(e=>{p({variables:{budgets:[{...e,locationId:a,userId:r.id,totalAmount:e.reactiveAmount+e.quoteAmount+e.ppmAmount}]}})}),children:[(0,t.jsxs)(s.f,{spacing:4,children:[(0,t.jsx)(l.f,{variant:"h6",color:"text.secondary",fontWeight:300,children:"Budgets"}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:2,children:[(0,t.jsx)(l.f,{color:"text.secondary",fontWeight:300,sx:{width:"100px"},children:"Reactive works:"}),(0,t.jsx)(ej.e,{name:"reactiveAmount",defaultValue:0,control:u.control,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",InputProps:{inputProps:{min:0,step:".01"}},value:a,onChange:n,error:!!u.errors.reactiveAmount,helperText:u.errors.reactiveAmount?.message})}})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:2,children:[(0,t.jsx)(l.f,{color:"text.secondary",fontWeight:300,sx:{width:"100px"},children:"Quoted works:"}),(0,t.jsx)(ej.e,{name:"quoteAmount",control:u.control,defaultValue:0,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",InputProps:{inputProps:{min:0,step:".01"}},value:a,onChange:n,error:!!u.errors.quoteAmount,helperText:u.errors.quoteAmount?.message})}})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:2,children:[(0,t.jsx)(l.f,{color:"text.secondary",fontWeight:300,sx:{width:"100px"},children:"PPM:"}),(0,t.jsx)(ej.e,{name:"ppmAmount",control:u.control,defaultValue:0,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e2.f,{leftLabel:(0,t.jsx)(e5.default,{sx:{height:"18px"}}),rightLabel:"Ex VAT",type:"number",InputProps:{inputProps:{min:0,step:".01"}},value:a,onChange:n,error:!!u.errors.ppmAmount,helperText:u.errors.ppmAmount?.message})}})]}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:2,children:[(0,t.jsx)(l.f,{color:"text.secondary",fontWeight:300,sx:{width:"100px"},children:"Total:"}),(0,t.jsx)(l.f,{color:"text.secondary",children:(0,tB.f)(m+f+h)})]}),(0,t.jsx)(ej.e,{name:"startDate",control:u.control,defaultValue:null,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e4.f,{value:a?(0,A.default)(a):null,onChange:n,label:"Budget start date",format:"Do MMM YYYY",slotProps:{textField:{variant:"standard",color:"secondary",error:!!u.errors.startDate,helperText:u.errors.startDate?.message,placeholder:""}}})}}),(0,t.jsx)(ej.e,{name:"endDate",control:u.control,defaultValue:null,render:e=>{let{value:a,onChange:n}=e;return(0,t.jsx)(e4.f,{value:a?(0,A.default)(a):null,onChange:n,label:"Budget end date",format:"Do MMM YYYY",slotProps:{textField:{variant:"standard",color:"secondary",error:!!u.errors.endDate,helperText:u.errors.endDate?.message,placeholder:""}}})}})]}),(0,t.jsxs)(s.f,{mt:4,children:[(0,t.jsx)(l.f,{variant:"h6",color:"text.secondary",fontWeight:300,children:"Change log"}),(0,t.jsx)(t8,{locationId:a})]})]})]})};var at=e.i(451221),aa=e.i(376733),an=e.i(506656),ai=e.i(740472),ar=e.i(645691);let ao=[{title:"Amount spent",query:u.f`
  query TotalAmountSpentTile(
    $customerId: Int
    $locationId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $startDate: timestamptz
    $endDate: timestamptz
  ) {
    result: get_location_budget_tile_total_amount_spent(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      total
    }
  }
`,getValues:e=>{let{data:t,budget:a,filters:n}=e,i=0;return a?.startDate&&a?.endDate&&n?.startDate&&n?.endDate&&(0,A.default)(a?.startDate).isBefore(n?.endDate)&&(0,A.default)(a?.endDate).isAfter(n?.startDate)&&(i=a?.totalAmount),{part:t.result[0]?.total??0,total:i??0}},percentageColor:e=>e<70?"success.main":e>=70&&e<90?"info.main":"warning.main"},{title:"Committed spend",query:u.f`
  query CommittedSpentTile(
    $customerId: Int
    $locationId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $startDate: timestamptz
    $endDate: timestamptz
  ) {
    result: get_location_budget_tile_committed_spent(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      total
    }
  }
`,getValues:e=>{let{data:t,budget:a,filters:n}=e,i=0;return a?.startDate&&a?.endDate&&n?.startDate&&n?.endDate&&(0,A.default)(a?.startDate).isBefore(n?.endDate)&&(0,A.default)(a?.endDate).isAfter(n?.startDate)&&(i=a?.totalAmount),{part:t.result[0]?.total??0,total:i??0}},percentageColor:e=>e<=70?"success.main":e>70&&e<=90?"info.main":"warning.main"},{title:"Budget remaining",query:u.f`
  query BudgetRemainingTile(
    $customerId: Int
    $locationId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $startDate: timestamptz
    $endDate: timestamptz
  ) {
    result: get_location_budget_tile_budget_remaining(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      total
    }
  }
`,getValues:e=>{let{data:t,budget:a,filters:n}=e,i=0;return a?.startDate&&a?.endDate&&n?.startDate&&n?.endDate&&(0,A.default)(a?.startDate).isBefore(n?.endDate)&&(0,A.default)(a?.endDate).isAfter(n?.startDate)&&(i=a?.totalAmount),{part:(a?.totalAmount??0)-(t.result[0]?.total??0),total:i??0}},percentageColor:e=>e>30?"success.main":e>10&&e<=30?"info.main":"warning.main"},{title:"Pending quotes",query:u.f`
  query PendingQuotesTile(
    $customerId: Int
    $locationId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $startDate: timestamptz
    $endDate: timestamptz
  ) {
    result: get_location_budget_tile_pending_quotes(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      total
    }
  }
`,getValues:e=>{let{data:t,budget:a,filters:n}=e,i=0;return a?.startDate&&a?.endDate&&n?.startDate&&n?.endDate&&(0,A.default)(a?.startDate).isBefore(n?.endDate)&&(0,A.default)(a?.endDate).isAfter(n?.startDate)&&(i=a?.totalAmount),{part:t.result[0]?.total??0,total:i??0}},percentageColor:e=>e<=70?"success.main":e>70&&e<=90?"info.main":"warning.main"}];ai.J.register(ai.I,ai.W,ai.E);let as=e=>{if(null==e||""===e)return"-";let t=Number(e);return Number.isFinite(t)?(0,tB.f)(t):"N/A"},al=e=>{let{budget:i,locationId:o,startDate:d,endDate:c,onEdit:u}=e,m=(0,at.f)(),[f,h]=(0,a.useState)(0),p=ao[f],{data:x,loading:g}=(0,n.t)(p.query,{variables:{locationId:o,startDate:d??void 0,endDate:c??void 0}}),{part:b,total:v}=x?p.getValues({data:x,budget:i,filters:{startDate:d,endDate:c}}):{part:0,total:0},j=v>0?(0,an.f)(b/v*100,2):0,y=p.percentageColor(j),[I,w]=y.split("."),C=m.palette[I]?.[w]??y,$=Math.max(v-b,0);return(0,t.jsxs)(ey.f,{sx:{p:2},children:[(0,t.jsxs)(s.f,{width:"100%",direction:"row",justifyContent:"space-between",spacing:2,mt:1,children:[(0,t.jsx)(l.f,{variant:"h6",children:"Details"}),(0,t.jsx)(et.f,{variant:"contained",color:"secondary",size:"small",sx:{minWidth:30},onClick:u,children:(0,t.jsx)(aa.default,{sx:{height:"17px",width:"17px"}})})]}),(0,t.jsx)(s.f,{direction:"row",flexWrap:"wrap",gap:1,mt:2,children:ao.map((e,a)=>(0,t.jsx)(eG.f,{label:e.title,size:"small",variant:a===f?"filled":"outlined",color:a===f?"secondary":"default",onClick:()=>h(a)},e.title))}),(0,t.jsx)(s.f,{alignItems:"center",mt:2,children:g?(0,t.jsx)(tN.f,{variant:"circular",width:180,height:90}):(0,t.jsxs)(r.f,{sx:{position:"relative",width:"100%",maxWidth:220},children:[(0,t.jsx)(ar.K,{data:{labels:[p.title,"Remaining"],datasets:[{data:[b,$],backgroundColor:[C,"#e0e0e0"],borderWidth:0,hoverOffset:4}]},options:{responsive:!0,maintainAspectRatio:!1,rotation:-90,circumference:180,cutout:"70%",plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`${e.label}: ${(0,tB.f)(e.raw)}`}}}}}),(0,t.jsxs)(l.f,{variant:"h6",sx:{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)",color:C},children:[j,"%"]})]})}),(0,t.jsxs)(s.f,{width:"100%",spacing:2,mt:2,children:[(0,t.jsxs)(s.f,{width:"100%",children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Reactive works"}),(0,t.jsx)(l.f,{children:as(i?.reactiveAmount)})]}),(0,t.jsxs)(s.f,{width:"100%",children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Quoted works"}),(0,t.jsx)(l.f,{children:as(i?.quoteAmount)})]}),(0,t.jsxs)(s.f,{width:"100%",children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"PPM"}),(0,t.jsx)(l.f,{children:as(i?.ppmAmount)})]}),(0,t.jsxs)(s.f,{width:"100%",children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Total"}),(0,t.jsx)(l.f,{children:as(i?.totalAmount)})]}),(0,t.jsxs)(s.f,{width:"100%",children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Budget start date"}),(0,t.jsx)(l.f,{children:i?.startDate?(0,t1.f)(i.startDate):"-"})]}),(0,t.jsxs)(s.f,{width:"100%",children:[(0,t.jsx)(l.f,{variant:"subtitle2",children:"Budget end date"}),(0,t.jsx)(l.f,{children:i?.endDate?(0,t1.f)(i.endDate):"-"})]})]})]})};var ad=e.i(917563),ac=e.i(477882),au=e.i(241129),am=e.i(886779),af=e.i(356119);ai.J.register(ai.i,ai.z,ai.o,ai.a,ai.Z,ai.W,ai.E);let ah=e=>{let{loading:a,chartData:n,filtersComponent:i}=e,r=(0,th.f)("(max-width: 600px)");return(0,t.jsxs)(ac.f,{sx:{p:2},children:[(0,t.jsxs)(ap,{is600pxOrLess:r,children:[(0,t.jsx)(af.f,{variant:"h6",sx:ax.budgetingTitle(r),children:"Budget tracking"}),i]}),a?(0,t.jsx)(am.f,{width:"100%",height:"325px",direction:"row",mt:1,children:(0,t.jsx)(au.f,{animation:"wave",variant:"rounded",height:"100%",width:"100%"})}):(0,t.jsx)(ad.f,{sx:ax.lineChartContainer(r),children:(0,t.jsx)(ar.R,{data:n,...ax.lineChart(r),options:{responsive:!0,maintainAspectRatio:!1}})})]})},ap=(0,B.f)(am.f)(e=>{let{theme:t,is600pxOrLess:a}=e;return{width:"100%",display:a?"grid":"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:t.spacing(2),gridTemplateColumns:a?"repeat(2, 1fr)":"auto",gridTemplateRows:a?"repeat(2, 1fr)":"auto",gridColumnGap:a?0:t.spacing(2),gridRowGap:a?0:t.spacing(2)}}),ax={budgetingTitle:e=>({gridArea:e?"1 / 1 / 2 / 2":"auto",whiteSpace:"noWrap"}),lineChartContainer:e=>({width:"100%",height:e?500:334}),lineChart:e=>({...e&&{height:500,width:500,style:{width:500,height:500}}})};var ag=e.i(627242),ab=e.i(201084),av=e.i(16135);let aj=e=>{let{title:a,query:i,budget:r,variables:o,getValues:s,percentageColor:l}=e,{data:d,loading:c}=(0,n.t)(i,{variables:o}),{part:u,total:m}=d?s({data:d,budget:r,filters:o}):{part:0,total:0},f=(0,an.f)(m>0?u/m*100:0,2);return(0,t.jsx)(ag.f,{variant:"outlined",sx:{minWidth:260,flex:1},children:(0,t.jsxs)(ab.f,{children:[(0,t.jsx)(af.f,{variant:"h6",color:"text.primary",mb:1,children:a}),c?(0,t.jsx)(au.f,{variant:"rectangular",width:180,height:52}):(0,t.jsxs)(am.f,{spacing:1,children:[(0,t.jsxs)(am.f,{direction:"row",spacing:.5,alignItems:"baseline",children:[(0,t.jsx)(af.f,{variant:"h5",color:"text.primary",fontWeight:700,children:(0,tB.f)(u)}),(0,t.jsxs)(af.f,{variant:"body2",color:"text.secondary",children:["of ",(0,tB.f)(m)]})]}),(0,t.jsx)(ay,{size:"small",label:`${f}%`,chipcolor:l(f)})]})]})})},ay=(0,B.f)(av.f,{shouldForwardProp:e=>"chipcolor"!==e})(e=>{let{theme:t,chipcolor:a}=e,[n]=a.split("."),i=t.palette[n]||t.palette.success,r=i.main||t.palette.success.main,o=i.contrastText||t.palette.getContrastText(r);return{alignSelf:"flex-start",backgroundColor:r,color:o,borderRadius:"6px",fontWeight:600}}),aI=e=>{let{budget:a,locationId:n,startDate:i,endDate:r}=e,o=(0,th.f)("(max-width: 600px)");return(0,t.jsxs)(ac.f,{sx:{p:2},children:[(0,t.jsx)(af.f,{variant:"h6",sx:aw.budgetTilesTitle(o),children:"Spend overview"}),(0,t.jsx)(am.f,{direction:"row",justifyContent:"space-between",flexWrap:"wrap",rowGap:1,columnGap:1,sx:{pt:2},children:ao.map(e=>(0,t.jsx)(aj,{...e,budget:a,variables:{locationId:n,startDate:i??void 0,endDate:r??void 0}},e.title))})]})},aw={budgetTilesTitle:e=>({gridArea:e?"1 / 1 / 2 / 2":"auto",whiteSpace:"noWrap"})},aC=e=>{let{locationId:i}=e,r=(0,d.f)("(max-width: 600px)"),o=Intl.DateTimeFormat().resolvedOptions().timeZone,l=(0,U.f)(),c=(0,tY.f)(),[u,m]=(0,a.useState)({}),{data:{budget:f}={budget:[]},loading:h}=(0,n.t)(t5,{variables:{locationId:i}}),{data:p,isLoading:x}=(0,tO.f)(`/location/${i}/budget/chart`,{queryKey:"location-budget-chart",method:"GET",skip:!u.startDate||!u.endDate,params:{...u,timeZone:o,locationId:i},onError:e=>{c.show({content:`Error: ${e.message}`,color:"error"})}}),g=f[0],b=(0,a.useCallback)(()=>{l.show({content:(0,t.jsx)(ae,{locationId:i,lastBudget:g,close:l.close}),title:g?"Edit Budgets":"Add Budgets"})},[g,i,l]),v=(0,a.useMemo)(()=>(e=>{if(!e.startDate||!e.endDate)return{labels:[],datasets:[]};let t={label:"Actual spend",data:e.budget?.actualSpendData||[],borderColor:"rgb(6, 121, 216)",stepped:!1,fill:!1},a={label:"Budget",data:e.budget?.budgetData||[],borderColor:"rgb(232, 9, 94)",stepped:!1,fill:!1,borderDash:[5,5]};return{labels:e.budget?.labels||[],datasets:[t,a]}})({startDate:u.startDate,endDate:u.endDate,budget:p}),[p,u.endDate,u.startDate]);return(0,t.jsxs)(s.f,{children:[(0,t.jsx)(tH,{locationId:i,reactiveAmount:g?.reactiveAmount,quoteAmount:g?.quoteAmount,ppmAmount:g?.ppmAmount}),(0,t.jsx)(e1.f,{sx:{mt:2,mb:2}}),(0,t.jsxs)(_.f,{container:!0,columnSpacing:{xs:0,md:2},rowSpacing:{xs:2,md:0},children:[(0,t.jsx)(_.f,{item:!0,xs:12,md:3,children:h?(0,t.jsx)(tN.f,{animation:"wave",variant:"rounded",height:"100%",width:"100%"}):(0,t.jsx)(al,{budget:g,locationId:i,startDate:u.startDate,endDate:u.endDate,onEdit:b})}),(0,t.jsxs)(_.f,{container:!0,item:!0,xs:12,md:9,sx:{height:"fit-content"},rowGap:2,children:[(0,t.jsx)(_.f,{item:!0,xs:12,children:(0,t.jsx)(aI,{budget:g,locationId:i,startDate:u.startDate,endDate:u.endDate})}),(0,t.jsx)(_.f,{item:!0,xs:12,children:(0,t.jsx)(ah,{loading:h||x,chartData:v,filtersComponent:(0,t.jsx)(tX,{locationId:i,startDate:g?.startDate,endDate:g?.endDate,setFilters:m,chipContainerSx:a$.chipContainer(r),filterButtonSx:a$.filterButton(r),mobileFilterButton:r})})})]})]})]})},a$={chipContainer:e=>({gridArea:e?"2 / 1 / 3 / 3":"auto",marginTop:e?"8px":0,marginBottom:e?"8px":0}),filterButton:e=>({...e&&{"& .MuiButton-startIcon":{marginRight:0},justifySelf:"flex-end",gridArea:"1 / 2 / 2 / 3",minWidth:0,width:"60px"}})},a_=e=>{let{propertyId:l}=e,u=(0,d.f)("(max-width:600px)"),{hasRole:m}=(0,j.f)(),{admin:b,hasUserModule:v,can:y}=(0,c.f)(),w=b?.modules?.assets,C=m("admin"),$=m("admin_user"),_=m("tenant"),S=m("customer_user"),A=S||$,D=v("ppmSchedules"),M=v("finances"),k=v("quotes"),[q,T]=(0,a.useState)("details"),[L,N]=(0,a.useState)("slas-work-order"),{loading:U,data:{location:W}={location:null},refetch:F}=(0,n.t)(I,{variables:{id:l}}),B=(0,a.useMemo)(()=>W?.customer.find(e=>"primary"===e.linkType)?.account,[W]),E=(0,a.useMemo)(()=>W?.customer.filter(e=>"related_party"===e.linkType).map(e=>e.account),[W]),P=E?.map(e=>e.id),R=(0,a.useMemo)(()=>M||!_&&!A,[M,_,A]),O=(0,a.useMemo)(()=>!_,[_]),Y=y("location.budget.view"),H=(0,a.useMemo)(()=>!_&&w,[_,w]),V=(0,a.useMemo)(()=>!_,[_]),z=(0,a.useMemo)(()=>!_&&(!$||M),[_,$,M]),G=(0,a.useMemo)(()=>k||!_&&!A,[k,_,A]),Q=(0,a.useMemo)(()=>!_,[_]),J=(0,a.useMemo)(()=>!_,[_]),K=(0,a.useMemo)(()=>D||!A,[D,A]),Z=(0,a.useMemo)(()=>({marginTop:u?"20px":0,maxWidth:u?"100%":"calc(100vw - 280px)",height:"auto","& .MuiTabs-scroller":{height:"auto",overflowY:u?"visible":"auto"},...u&&{"& .MuiTabs-flexContainer>.MuiButtonBase-root":{marginBottom:"10px"}},"& .MuiTabs-flexContainer":u&&{flexWrap:"wrap"},"& .MuiTabs-flexContainer>.MuiTab-root:first-child":{...!u&&{borderTopLeftRadius:0,borderBottomLeftRadius:0}}}),[u]);return U?(0,t.jsx)(s.f,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(o.f,{color:"secondary"})}):W?.id&&B?.id?(0,t.jsxs)(r.f,{sx:{width:"100%",height:"100%"},children:[(0,t.jsxs)(s.f,{direction:u?"column":"row",width:"100%",children:[(0,t.jsx)(f.f,{withoutRightBorderRadius:!u,fullWidth:u,locationId:W.id,locationName:W.name,disabled:_}),(0,t.jsxs)(h.f,{defaultValue:"details",value:q,onChange:(e,t)=>{T(t)},changeQuery:!0,sx:Z,children:[(0,t.jsx)(p.f,{value:"details",label:"Details",sx:{borderTopLeftRadius:0,borderBottomLeftRadius:0}}),R&&(0,t.jsx)(p.f,{value:"finances",label:"Finances"}),O&&(0,t.jsx)(p.f,{value:"sublocations",label:"Sublocations"}),Y&&(0,t.jsx)(p.f,{value:"budgets",label:"Budgets"}),H&&(0,t.jsx)(p.f,{value:"assets",label:"Assets"}),V&&(0,t.jsx)(p.f,{value:"slas",label:"SLAs"}),z&&(0,t.jsx)(p.f,{value:"services",label:"Services"}),(0,t.jsx)(p.f,{value:"work-orders",label:"Work Orders"}),G&&(0,t.jsx)(p.f,{value:"quotes",label:"Quotes"}),Q&&(0,t.jsx)(p.f,{value:"compliance",label:"Compliance"}),J&&(0,t.jsx)(p.f,{value:"tenants",label:"Tenants"}),K&&(0,t.jsx)(p.f,{value:"planned-maintenance",label:"Planned Maintenance"})]})]}),(0,t.jsx)(X.f,{surface:"location_banner",locationId:W.id}),(0,t.jsx)(x.f,{value:q,index:"details",...aS,children:_?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(X.f,{surface:"location_details",locationId:W.id}),(0,t.jsx)(ex,{location:W,primaryCustomer:B,refetch:F})]}):(0,t.jsx)(eh,{location:W,primaryCustomer:B,relatedCustomers:E,refetch:F})}),R&&(0,t.jsx)(x.f,{value:q,index:"finances",...aS,children:(0,t.jsx)(ev,{locationId:W.id,primaryCustomerId:B.id,primaryCustomerMeta:B?.meta,relatedCustomerIds:P,refetch:F})}),O&&(0,t.jsx)(x.f,{value:q,index:"sublocations",...aS,children:(0,t.jsx)(eY,{location:W,customer:B})}),Y&&(0,t.jsx)(x.f,{value:q,index:"budgets",...aS,children:(0,t.jsx)(aC,{locationId:W.id})}),H&&(0,t.jsx)(x.f,{value:q,index:"assets",...aS,children:(0,t.jsx)(eH.f,{editable:C,hideLocationInfo:!0,hideCustomerInfo:!0,showHeader:!1,initialFilters:{locationId:W.id,filterType:"location_assets"},createFormDefaultValues:{customer:B?{label:B.name,value:B.id}:void 0,location:{label:W.name,value:W.id}}})}),V&&(0,t.jsxs)(x.f,{value:q,index:"slas",...aS,children:[(0,t.jsxs)(h.f,{value:L,queryKey:"slas-tab",defaultValue:"slas-work-order",changeQuery:!0,onChange:(e,t)=>{N(t)},children:[(0,t.jsx)(p.f,{value:"slas-work-order",label:"Work Order SLAs"}),(0,t.jsx)(p.f,{value:"slas-quote",label:"Quote SLAs"})]}),(0,t.jsx)(x.f,{value:L,index:"slas-work-order",...aS,children:(0,t.jsx)(eV.f,{title:"Work order SLAs & Priority levels",subtype:"reactive",isEntity:!0,isLocation:!0,customerId:B?.id,entity:"Location",entityId:W.id,containerHeight:"calc(100vh - 180px)"})}),(0,t.jsx)(x.f,{value:L,index:"slas-quote",...aS,children:(0,t.jsx)(eV.f,{title:"Quote SLAs & Priority levels",subtype:"quote",isEntity:!0,isLocation:!0,customerId:B?.id,entity:"Location",entityId:W.id,containerHeight:"calc(100vh - 180px)"})})]}),z&&(0,t.jsx)(x.f,{value:q,index:"services",...aS,children:(0,t.jsx)(tp,{editable:C,entityId:W.id,initialFilters:{filterType:"location_services"}})}),(0,t.jsx)(x.f,{value:q,index:"work-orders",...aS,children:(0,t.jsx)(tq.f,{columnVisibilityModel:{customerTotal:(!S&&!$||_)&&M,amountOutstanding:(!S&&!$||_)&&M},filtersVisibilityModel:{customer:!1,user:m("customer"),supplier:m("admin"),location:!1,manager:!1,customerManager:!1},defaultFilters:{locationId:W.id},initialFilters:{...tL.P,locationId:W.id,filterType:"locations_work_orders_tab"}})}),G&&(0,t.jsx)(x.f,{value:q,index:"quotes",...aS,children:(0,t.jsx)(tT.f,{filtersVisibilityModel:{location:!1},defaultFilters:{locationId:W.id},initialFilters:{showCanceled:!1,q:null,startDate:null,endDate:null,customerUserId:null,customerId:null,supplierId:null,accountManagerId:null,locationManagerId:null,slaId:null,tags:null,status:null,id:null,locationId:W.id,filterType:"location_quotes"}})}),Q&&(0,t.jsx)(x.f,{value:q,index:"compliance",...aS,children:(0,t.jsx)(tA,{location:{id:W.id,name:W.name}})}),J&&(0,t.jsx)(x.f,{value:q,index:"tenants",...aS,children:(0,t.jsx)(tv,{filters:{locationId:W.id}})}),K&&(0,t.jsx)(x.f,{value:q,index:"planned-maintenance",...aS,children:(0,t.jsx)(g.f,{locationId:W.id,locationName:W.name,hideItems:_,hideFinances:_,calendarInitialFilters:{filterType:`location_${W.id}`,locationId:W.id},hideCalendarFilters:["location"],tableInitialFilters:{filterType:`location_${W.id}`,locationId:W.id},hideTableFilters:["location"],itemsInitialFilters:{locationId:W.id,filterType:`location_${W.id}`},hideItemsFilters:["location","complianceCategory"]})})]}):(i.default.push("/404"),!1)},aS={sx:{height:"calc(100% - 44px)"},boxSx:{height:"100%"}},aA=()=>{let{user:e}=(0,j.f)(),{query:a}=(0,i.useRouter)();return a.id?"supplier"===e.accountType?(0,t.jsx)(b,{propertyId:a.id}):(0,t.jsx)(a_,{propertyId:+a.id}):i.default.push("/404")};aA.getLayout=function(e){return(0,t.jsx)(y.f,{children:e})},e.s(["default",0,aA],30256)}],258698,(e,t,a)=>{let n="/dashboard/properties/view";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(30256)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},885049,(e,t,a)=>{var n=e.r(733991);t.exports=e.r(8331)(n)},733991,(e,t,a)=>{var n=e.r(864353),i=e.r(622335);t.exports=function(e,t){return e&&n(e,t,i)}},928267,(e,t,a)=>{var n=e.r(478969),i=e.r(598921);t.exports=function(e,t){t=n(t,e);for(var a=0,r=t.length;null!=e&&a<r;)e=e[i(t[a++])];return a&&a==r?e:void 0}},980171,(e,t,a)=>{t.exports=function(e,t){return null!=e&&t in Object(e)}},305001,(e,t,a)=>{var n=e.r(698620),i=e.r(190835);t.exports=function(e,t,a,r){var o=a.length,s=o,l=!r;if(null==e)return!s;for(e=Object(e);o--;){var d=a[o];if(l&&d[2]?d[1]!==e[d[0]]:!(d[0]in e))return!1}for(;++o<s;){var c=(d=a[o])[0],u=e[c],m=d[1];if(l&&d[2]){if(void 0===u&&!(c in e))return!1}else{var f=new n;if(r)var h=r(u,m,c,e,t,f);if(!(void 0===h?i(m,u,3,r,f):h))return!1}}return!0}},305792,(e,t,a)=>{var n=e.r(708554),i=e.r(792384),r=e.r(625975),o=e.r(448684),s=e.r(122025);t.exports=function(e){return"function"==typeof e?e:null==e?r:"object"==typeof e?o(e)?i(e[0],e[1]):n(e):s(e)}},708554,(e,t,a)=>{var n=e.r(305001),i=e.r(461994),r=e.r(19939);t.exports=function(e){var t=i(e);return 1==t.length&&t[0][2]?r(t[0][0],t[0][1]):function(a){return a===e||n(a,e,t)}}},792384,(e,t,a)=>{var n=e.r(190835),i=e.r(758568),r=e.r(517217),o=e.r(970923),s=e.r(81673),l=e.r(19939),d=e.r(598921);t.exports=function(e,t){return o(e)&&s(t)?l(d(e),t):function(a){var o=i(a,e);return void 0===o&&o===t?r(a,e):n(t,o,3)}}},343054,(e,t,a)=>{t.exports=function(e){return function(t){return null==t?void 0:t[e]}}},502503,(e,t,a)=>{var n=e.r(928267);t.exports=function(e){return function(t){return n(t,e)}}},8331,(e,t,a)=>{var n=e.r(379858);t.exports=function(e,t){return function(a,i){if(null==a)return a;if(!n(a))return e(a,i);for(var r=a.length,o=t?r:-1,s=Object(a);(t?o--:++o<r)&&!1!==i(s[o],o,s););return a}}},461994,(e,t,a)=>{var n=e.r(81673),i=e.r(622335);t.exports=function(e){for(var t=i(e),a=t.length;a--;){var r=t[a],o=e[r];t[a]=[r,o,n(o)]}return t}},877697,(e,t,a)=>{var n=e.r(478969),i=e.r(713266),r=e.r(448684),o=e.r(805251),s=e.r(457279),l=e.r(598921);t.exports=function(e,t,a){t=n(t,e);for(var d=-1,c=t.length,u=!1;++d<c;){var m=l(t[d]);if(!(u=null!=e&&a(e,m)))break;e=e[m]}return u||++d!=c?u:!!(c=null==e?0:e.length)&&s(c)&&o(m,c)&&(r(e)||i(e))}},81673,(e,t,a)=>{var n=e.r(903275);t.exports=function(e){return e==e&&!n(e)}},19939,(e,t,a)=>{t.exports=function(e,t){return function(a){return null!=a&&a[e]===t&&(void 0!==t||e in Object(a))}}},758568,(e,t,a)=>{var n=e.r(928267);t.exports=function(e,t,a){var i=null==e?void 0:n(e,t);return void 0===i?a:i}},517217,(e,t,a)=>{var n=e.r(980171),i=e.r(877697);t.exports=function(e,t){return null!=e&&i(e,t,n)}},122025,(e,t,a)=>{var n=e.r(343054),i=e.r(502503),r=e.r(970923),o=e.r(598921);t.exports=function(e){return r(e)?n(o(e)):i(e)}}]);