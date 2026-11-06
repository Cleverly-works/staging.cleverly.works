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
  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {
    createGoogleToken(code: $code, id: $id, type: $type) {
      success
      tokens
      error
    }
  }
`,l=t.f`
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
`,f=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,_=t.f`
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
`,p=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,$=t.f`
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
`,g=t.f`
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
`;e.s(["e",0,a,"d",0,l,"u",0,h,"q",0,d,"_",0,f,"x",0,n,"k",0,i,"f",0,m,"U",0,g,"I",0,o,"s",0,b,"c",0,c,"S",0,u,"o",0,p,"l",0,_,"V",0,r,"J",0,$,"W",0,s])},659587,(e,t,o)=>{var r=e.r(978509);Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=r(e.r(421506)),n=e.r(391398);o.default=(0,i.default)((0,n.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},36790,e=>{var t=e.i(225730);e.s(["f",()=>t.f])},152078,e=>{var t=e.i(460997),o=e.i(75907),r=e.i(191788),i=e.i(889878),n=e.i(600961),a=e.i(36790),s=e.i(813843),c=e.i(115871),l=e.i(464107),u=e.i(396851),d=e.i(395724),m=e.i(713149),f=e.i(46739);function _(e){return(0,f.f)("MuiFormControlLabel",e)}let p=(0,m.f)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var $=e.i(180730),h=e.i(391398);let g=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],b=(0,u.f)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[{[`& .${p.label}`]:t.label},t.root,t[`labelPlacement${(0,l.f)(o.labelPlacement)}`]]}})(e=>{let{theme:t,ownerState:r}=e;return(0,o.f)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${p.disabled}`]:{cursor:"default"}},"start"===r.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===r.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===r.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${p.label}`]:{[`&.${p.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})}),I=(0,u.f)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(e=>{let{theme:t}=e;return{[`&.${p.error}`]:{color:(t.vars||t).palette.error.main}}}),y=r.forwardRef(function(e,u){var m,f;let p=(0,d.f)({props:e,name:"MuiFormControlLabel"}),{className:y,componentsProps:U={},control:v,disabled:A,disableTypography:q,label:x,labelPlacement:L="end",required:w,slotProps:j={}}=p,k=(0,t.f)(p,g),S=(0,a.f)(),M=null!=(m=null!=A?A:v.props.disabled)?m:null==S?void 0:S.disabled,C=null!=w?w:v.props.required,T={disabled:M,required:C};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===v.props[e]&&void 0!==p[e]&&(T[e]=p[e])});let F=(0,$.f)({props:p,muiFormControl:S,states:["error"]}),N=(0,o.f)({},p,{disabled:M,labelPlacement:L,required:C,error:F.error}),P=(e=>{let{classes:t,disabled:o,labelPlacement:r,error:i,required:a}=e,s={root:["root",o&&"disabled",`labelPlacement${(0,l.f)(r)}`,i&&"error",a&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",i&&"error"]};return(0,n.f)(s,_,t)})(N),R=null!=(f=j.typography)?f:U.typography,G=x;return null==G||G.type===c.f||q||(G=(0,h.jsx)(c.f,(0,o.f)({component:"span"},R,{className:(0,i.f)(P.label,null==R?void 0:R.className),children:G}))),(0,h.jsxs)(b,(0,o.f)({className:(0,i.f)(P.root,y),ownerState:N,ref:u},k,{children:[r.cloneElement(v,T),C?(0,h.jsxs)(s.f,{display:"block",children:[G,(0,h.jsxs)(I,{ownerState:N,"aria-hidden":!0,className:P.asterisk,children:[" ","*"]})]}):G]}))});e.s(["f",0,y],152078)},632784,e=>{var t=e.i(460997),o=e.i(75907),r=e.i(191788),i=e.i(889878),n=e.i(600961),a=e.i(396851),s=e.i(395724),c=e.i(713149),l=e.i(46739);function u(e){return(0,l.f)("MuiFormGroup",e)}(0,c.f)("MuiFormGroup",["root","row","error"]);var d=e.i(225730),m=e.i(180730),f=e.i(391398);let _=["className","row"],p=(0,a.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:o}=e;return[t.root,o.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,o.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),$=r.forwardRef(function(e,r){let a=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:c,row:l=!1}=a,$=(0,t.f)(a,_),h=(0,d.f)(),g=(0,m.f)({props:a,muiFormControl:h,states:["error"]}),b=(0,o.f)({},a,{row:l,error:g.error}),I=(e=>{let{classes:t,row:o,error:r}=e;return(0,n.f)({root:["root",o&&"row",r&&"error"]},u,t)})(b);return(0,f.jsx)(p,(0,o.f)({className:(0,i.f)(I.root,c),ownerState:b,ref:r},$))});e.s(["f",0,$],632784)},654242,e=>{var t=e.i(391398),o=e.i(191788),r=e.i(776204),i=e.i(432171),n=e.i(877341),a=e.i(159080);let s=a.f`
  query GetNotificationSetting($userId: Int!) {
    notificationSetting: User(where: { id: { _eq: $userId } }) {
      meta
    }
  }
`,c=a.f`
  mutation UpdateNotificationSetting($userId: Int!, $changes: User_set_input) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: $changes) {
      id
    }
  }
`;var l=e.i(39059),u=e.i(422411),d=e.i(659587),m=e.i(871931),f=e.i(936641),_=e.i(760981),p=e.i(302966),$=e.i(755548),h=e.i(799083),g=e.i(152078),b=e.i(632784),I=e.i(813843),y=e.i(115871);let U=["email","sms","pushNotification","toast"],v=[{id:"email",label:"Email",value:"email"},{id:"sms",label:"Text message",value:"sms"},{id:"pushNotification",label:"App notification",value:"pushNotification"},{id:"toast",label:"Browser notification",value:"toast"}];var A=e.i(594301),q=e.i(293965);let x={settings:[]},L=()=>{let{user:{id:e}}=(0,A.f)(),{loading:a,data:{notificationSetting:q}={notificationSetting:{}}}=(0,i.t)(s,{variables:{userId:e}}),{control:L,handleSubmit:w,setValue:j}=(0,u.G)({defaultValues:x}),[k,S]=(0,o.useState)({context:"",message:""});(0,o.useEffect)(()=>{if(!a&&q.length&&q[0]?.meta?.notificationSettings){let e=q[0]?.meta?.notificationSettings;j("settings",Object.keys(e).filter(t=>!0===e[t]))}},[a,q,j]);let[M]=(0,r.f)(c),[C,{data:{user:T}={user:{}}}]=(0,n.f)(l.x,{variables:{id:e}});return(0,o.useEffect)(()=>{e&&C()},[C,e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.f,{mb:2,variant:"h5",children:"Notifications"}),(0,t.jsxs)(m.f,{defaultExpanded:!0,children:[(0,t.jsx)(p.f,{expandIcon:(0,t.jsx)(d.default,{}),children:"Global"}),(0,t.jsx)(_.f,{children:(0,t.jsxs)(I.f,{alignItems:"flex-start",component:"form",onSubmit:w(e=>{let t={};U.map(o=>t[o]=e.settings.includes(o));let o={...T.meta};o.notificationSettings=t,M({variables:{userId:T.id,changes:{meta:o}}}),S({context:"success",message:"Your changes have been saved."})}),spacing:2,children:[(0,t.jsx)(y.f,{children:"Choose where you'd like to receive notifications on your devices. You can turn them on or off here too."}),(0,t.jsx)(u.e,{control:L,name:"settings",render:e=>{let{value:o,onChange:r}=e;return(0,t.jsx)(b.f,{children:v.map(e=>(0,t.jsx)(g.f,{control:(0,t.jsx)(h.f,{checked:o.includes(e.value),color:"secondary",onChange:(t,i)=>r(i?[...o,e.value]:o.filter(t=>t!==e.value))}),label:e.label},e.id))})}}),(0,t.jsx)($.f,{variant:"contained",color:"secondary",size:"small",type:"submit",children:"Submit"})]})})]}),k.message&&(0,t.jsx)(f.f,{severity:"success",sx:{mt:2},children:k.message})]})};L.getLayout=function(e){return(0,t.jsx)(q.f,{children:e})},e.s(["default",0,L],654242)}],709875,(e,t,o)=>{let r="/account/notifications";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(654242)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);