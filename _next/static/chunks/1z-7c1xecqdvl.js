(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[39059,e=>{var t=e.i(159080);let o=t.f`
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
`,a=t.f`
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
`,i=t.f`
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
`,n=t.f`
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
`,c=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,l=t.f`
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
`,_=t.f`
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
`;e.s(["e",0,n,"u",0,f,"q",0,c,"_",0,u,"x",0,i,"k",0,a,"f",0,l,"U",0,_,"I",0,o,"s",0,p,"l",0,d,"V",0,r,"J",0,m,"W",0,s])},659587,(e,t,o)=>{var r=e.r(978509);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var a=r(e.r(421506)),i=e.r(391398);o.default=(0,a.default)((0,i.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},36790,e=>{var t=e.i(225730);e.s(["f",()=>t.f])},152078,e=>{var t=e.i(460997),o=e.i(75907),r=e.i(191788),a=e.i(889878),i=e.i(600961),n=e.i(36790),s=e.i(813843),c=e.i(115871),l=e.i(464107),u=e.i(396851),d=e.i(395724),m=e.i(713149),f=e.i(46739);function _(e){return(0,f.f)("MuiFormControlLabel",e)}let p=(0,m.f)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var $=e.i(180730),h=e.i(391398);let b=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],g=(0,u.f)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[{[`& .${p.label}`]:t.label},t.root,t[`labelPlacement${(0,l.f)(o.labelPlacement)}`]]}})(e=>{let{theme:t,ownerState:r}=e;return(0,o.f)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${p.disabled}`]:{cursor:"default"}},"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${p.label}`]:{[`&.${p.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})}),I=(0,u.f)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(e=>{let{theme:t}=e;return{[`&.${p.error}`]:{color:(t.vars||t).palette.error.main}}}),U=r.forwardRef(function(e,u){var m,f;let p=(0,d.f)({props:e,name:"MuiFormControlLabel"}),{className:U,componentsProps:y={},control:v,disabled:A,disableTypography:q,label:x,labelPlacement:w="end",required:L,slotProps:j={}}=p,k=(0,t.f)(p,b),M=(0,n.f)(),C=null!=(m=null!=A?A:v.props.disabled)?m:null==M?void 0:M.disabled,T=null!=L?L:v.props.required,F={disabled:C,required:T};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===v.props[e]&&void 0!==p[e]&&(F[e]=p[e])});let S=(0,$.f)({props:p,muiFormControl:M,states:["error"]}),N=(0,o.f)({},p,{disabled:C,labelPlacement:w,required:T,error:S.error}),P=(e=>{let{classes:t,disabled:o,labelPlacement:r,error:a,required:n}=e,s={root:["root",o&&"disabled",`labelPlacement${(0,l.f)(r)}`,a&&"error",n&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,i.f)(s,_,t)})(N),R=null!=(f=j.typography)?f:y.typography,E=x;return null==E||E.type===c.f||q||(E=(0,h.jsx)(c.f,(0,o.f)({component:"span"},R,{className:(0,a.f)(P.label,null==R?void 0:R.className),children:E}))),(0,h.jsxs)(g,(0,o.f)({className:(0,a.f)(P.root,U),ownerState:N,ref:u},k,{children:[r.cloneElement(v,F),T?(0,h.jsxs)(s.f,{display:"block",children:[E,(0,h.jsxs)(I,{ownerState:N,"aria-hidden":!0,className:P.asterisk,children:[" ","*"]})]}):E]}))});e.s(["f",0,U],152078)},632784,e=>{var t=e.i(460997),o=e.i(75907),r=e.i(191788),a=e.i(889878),i=e.i(600961),n=e.i(396851),s=e.i(395724),c=e.i(713149),l=e.i(46739);function u(e){return(0,l.f)("MuiFormGroup",e)}(0,c.f)("MuiFormGroup",["root","row","error"]);var d=e.i(225730),m=e.i(180730),f=e.i(391398);let _=["className","row"],p=(0,n.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,o.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),$=r.forwardRef(function(e,r){let n=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:c,row:l=!1}=n,$=(0,t.f)(n,_),h=(0,d.f)(),b=(0,m.f)({props:n,muiFormControl:h,states:["error"]}),g=(0,o.f)({},n,{row:l,error:b.error}),I=(e=>{let{classes:t,row:o,error:r}=e;return(0,i.f)({root:["root",o&&"row",r&&"error"]},u,t)})(g);return(0,f.jsx)(p,(0,o.f)({className:(0,a.f)(I.root,c),ownerState:g,ref:r},$))});e.s(["f",0,$],632784)},654242,e=>{var t=e.i(391398),o=e.i(191788),r=e.i(776204),a=e.i(432171),i=e.i(877341),n=e.i(159080);let s=n.f`
  query GetNotificationSetting($userId: Int!) {
    notificationSetting: User(where: { id: { _eq: $userId } }) {
      meta
    }
  }
`,c=n.f`
  mutation UpdateNotificationSetting($userId: Int!, $changes: User_set_input) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: $changes) {
      id
    }
  }
`;var l=e.i(39059),u=e.i(422411),d=e.i(659587),m=e.i(871931),f=e.i(936641),_=e.i(760981),p=e.i(302966),$=e.i(755548),h=e.i(799083),b=e.i(152078),g=e.i(632784),I=e.i(813843),U=e.i(115871);let y=["email","sms","pushNotification","toast"],v=[{id:"email",label:"Email",value:"email"},{id:"sms",label:"Text message",value:"sms"},{id:"pushNotification",label:"App notification",value:"pushNotification"},{id:"toast",label:"Browser notification",value:"toast"}];var A=e.i(594301),q=e.i(293965);let x={settings:[]},w=()=>{let{user:{id:e}}=(0,A.f)(),{loading:n,data:{notificationSetting:q}={notificationSetting:{}}}=(0,a.t)(s,{variables:{userId:e}}),{control:w,handleSubmit:L,setValue:j}=(0,u.G)({defaultValues:x}),[k,M]=(0,o.useState)({context:"",message:""});(0,o.useEffect)(()=>{if(!n&&q.length&&q[0]?.meta?.notificationSettings){let e=q[0]?.meta?.notificationSettings;j("settings",Object.keys(e).filter(t=>!0===e[t]))}},[n,q,j]);let[C]=(0,r.f)(c),[T,{data:{user:F}={user:{}}}]=(0,i.f)(l.x,{variables:{id:e}});return(0,o.useEffect)(()=>{e&&T()},[T,e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(U.f,{mb:2,variant:"h5",children:"Notifications"}),(0,t.jsxs)(m.f,{defaultExpanded:!0,children:[(0,t.jsx)(p.f,{expandIcon:(0,t.jsx)(d.default,{}),children:"Global"}),(0,t.jsx)(_.f,{children:(0,t.jsxs)(I.f,{alignItems:"flex-start",component:"form",onSubmit:L(e=>{let t={};y.map(o=>t[o]=e.settings.includes(o));let o={...F.meta};o.notificationSettings=t,C({variables:{userId:F.id,changes:{meta:o}}}),M({context:"success",message:"Your changes have been saved."})}),spacing:2,children:[(0,t.jsx)(U.f,{children:"Choose where you'd like to receive notifications on your devices. You can turn them on or off here too."}),(0,t.jsx)(u.e,{control:w,name:"settings",render:e=>{let{value:o,onChange:r}=e;return(0,t.jsx)(g.f,{children:v.map(e=>(0,t.jsx)(b.f,{control:(0,t.jsx)(h.f,{checked:o.includes(e.value),color:"secondary",onChange:(t,a)=>r(a?[...o,e.value]:o.filter(t=>t!==e.value))}),label:e.label},e.id))})}}),(0,t.jsx)($.f,{variant:"contained",color:"secondary",size:"small",type:"submit",children:"Submit"})]})})]}),k.message&&(0,t.jsx)(f.f,{severity:"success",sx:{mt:2},children:k.message})]})};w.getLayout=function(e){return(0,t.jsx)(q.f,{children:e})},e.s(["default",0,w],654242)}],709875,(e,t,o)=>{let r="/account/notifications";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(654242)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);