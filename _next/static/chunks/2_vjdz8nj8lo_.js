(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[39059,e=>{var t=e.i(159080);let r=t.f`
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
`,n=t.f`
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
`;e.s(["u",0,c,"q",0,o,"_",0,s,"x",0,i,"k",0,r,"f",0,n,"l",0,l,"V",0,a])},659587,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),o=e.r(391398);r.default=(0,a.default)((0,o.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},36790,e=>{var t=e.i(225730);e.s(["f",()=>t.f])},152078,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),a=e.i(889878),o=e.i(600961),n=e.i(36790),s=e.i(813843),l=e.i(115871),c=e.i(464107),u=e.i(396851),d=e.i(395724),f=e.i(713149),m=e.i(46739);function p(e){return(0,m.f)("MuiFormControlLabel",e)}let h=(0,f.f)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]);var _=e.i(180730),g=e.i(391398);let b=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],$=(0,u.f)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[{[`& .${h.label}`]:t.label},t.root,t[`labelPlacement${(0,c.f)(r.labelPlacement)}`]]}})(e=>{let{theme:t,ownerState:i}=e;return(0,r.f)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${h.disabled}`]:{cursor:"default"}},"start"===i.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===i.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===i.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${h.label}`]:{[`&.${h.disabled}`]:{color:(t.vars||t).palette.text.disabled}}})}),v=(0,u.f)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(e=>{let{theme:t}=e;return{[`&.${h.error}`]:{color:(t.vars||t).palette.error.main}}}),y=i.forwardRef(function(e,u){var f,m;let h=(0,d.f)({props:e,name:"MuiFormControlLabel"}),{className:y,componentsProps:I={},control:q,disabled:x,disableTypography:A,label:w,labelPlacement:U="end",required:L,slotProps:j={}}=h,k=(0,t.f)(h,b),T=(0,n.f)(),F=null!=(f=null!=x?x:q.props.disabled)?f:null==T?void 0:T.disabled,M=null!=L?L:q.props.required,N={disabled:F,required:M};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===q.props[e]&&void 0!==h[e]&&(N[e]=h[e])});let P=(0,_.f)({props:h,muiFormControl:T,states:["error"]}),S=(0,r.f)({},h,{disabled:F,labelPlacement:U,required:M,error:P.error}),C=(e=>{let{classes:t,disabled:r,labelPlacement:i,error:a,required:n}=e,s={root:["root",r&&"disabled",`labelPlacement${(0,c.f)(i)}`,a&&"error",n&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",a&&"error"]};return(0,o.f)(s,p,t)})(S),R=null!=(m=j.typography)?m:I.typography,G=w;return null==G||G.type===l.f||A||(G=(0,g.jsx)(l.f,(0,r.f)({component:"span"},R,{className:(0,a.f)(C.label,null==R?void 0:R.className),children:G}))),(0,g.jsxs)($,(0,r.f)({className:(0,a.f)(C.root,y),ownerState:S,ref:u},k,{children:[i.cloneElement(q,N),M?(0,g.jsxs)(s.f,{display:"block",children:[G,(0,g.jsxs)(v,{ownerState:S,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):G]}))});e.s(["f",0,y],152078)},632784,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),a=e.i(889878),o=e.i(600961),n=e.i(396851),s=e.i(395724),l=e.i(713149),c=e.i(46739);function u(e){return(0,c.f)("MuiFormGroup",e)}(0,l.f)("MuiFormGroup",["root","row","error"]);var d=e.i(225730),f=e.i(180730),m=e.i(391398);let p=["className","row"],h=(0,n.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,r.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),_=i.forwardRef(function(e,i){let n=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:l,row:c=!1}=n,_=(0,t.f)(n,p),g=(0,d.f)(),b=(0,f.f)({props:n,muiFormControl:g,states:["error"]}),$=(0,r.f)({},n,{row:c,error:b.error}),v=(e=>{let{classes:t,row:r,error:i}=e;return(0,o.f)({root:["root",r&&"row",i&&"error"]},u,t)})($);return(0,m.jsx)(h,(0,r.f)({className:(0,a.f)(v.root,l),ownerState:$,ref:i},_))});e.s(["f",0,_],632784)},654242,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(776204),a=e.i(432171),o=e.i(877341),n=e.i(159080);let s=n.f`
  query GetNotificationSetting($userId: Int!) {
    notificationSetting: User(where: { id: { _eq: $userId } }) {
      meta
    }
  }
`,l=n.f`
  mutation UpdateNotificationSetting($userId: Int!, $changes: User_set_input) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: $changes) {
      id
    }
  }
`;var c=e.i(39059),u=e.i(422411),d=e.i(659587),f=e.i(871931),m=e.i(936641),p=e.i(760981),h=e.i(302966),_=e.i(755548),g=e.i(799083),b=e.i(152078),$=e.i(632784),v=e.i(813843),y=e.i(115871);let I=["email","sms","pushNotification","toast"],q=[{id:"email",label:"Email",value:"email"},{id:"sms",label:"Text message",value:"sms"},{id:"pushNotification",label:"App notification",value:"pushNotification"},{id:"toast",label:"Browser notification",value:"toast"}];var x=e.i(594301),A=e.i(293965);let w={settings:[]},U=()=>{let{user:{id:e}}=(0,x.f)(),{loading:n,data:{notificationSetting:A}={notificationSetting:{}}}=(0,a.t)(s,{variables:{userId:e}}),{control:U,handleSubmit:L,setValue:j}=(0,u.G)({defaultValues:w}),[k,T]=(0,r.useState)({context:"",message:""});(0,r.useEffect)(()=>{if(!n&&A.length&&A[0]?.meta?.notificationSettings){let e=A[0]?.meta?.notificationSettings;j("settings",Object.keys(e).filter(t=>!0===e[t]))}},[n,A,j]);let[F]=(0,i.f)(l),[M,{data:{user:N}={user:{}}}]=(0,o.f)(c.x,{variables:{id:e}});return(0,r.useEffect)(()=>{e&&M()},[M,e]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.f,{mb:2,variant:"h5",children:"Notifications"}),(0,t.jsxs)(f.f,{defaultExpanded:!0,children:[(0,t.jsx)(h.f,{expandIcon:(0,t.jsx)(d.default,{}),children:"Global"}),(0,t.jsx)(p.f,{children:(0,t.jsxs)(v.f,{alignItems:"flex-start",component:"form",onSubmit:L(e=>{let t={};I.map(r=>t[r]=e.settings.includes(r));let r={...N.meta};r.notificationSettings=t,F({variables:{userId:N.id,changes:{meta:r}}}),T({context:"success",message:"Your changes have been saved."})}),spacing:2,children:[(0,t.jsx)(y.f,{children:"Choose where you'd like to receive notifications on your devices. You can turn them on or off here too."}),(0,t.jsx)(u.e,{control:U,name:"settings",render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)($.f,{children:q.map(e=>(0,t.jsx)(b.f,{control:(0,t.jsx)(g.f,{checked:r.includes(e.value),color:"secondary",onChange:(t,a)=>i(a?[...r,e.value]:r.filter(t=>t!==e.value))}),label:e.label},e.id))})}}),(0,t.jsx)(_.f,{variant:"contained",color:"secondary",size:"small",type:"submit",children:"Submit"})]})})]}),k.message&&(0,t.jsx)(m.f,{severity:"success",sx:{mt:2},children:k.message})]})};U.getLayout=function(e){return(0,t.jsx)(A.f,{children:e})},e.s(["default",0,U],654242)}],709875,(e,t,r)=>{let i="/account/notifications";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(654242)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})}]);