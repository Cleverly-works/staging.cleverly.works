(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,864980,790388,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(115871),a=e.i(773831),o=e.i(813843),i=e.i(322135),l=e.i(148310),s=e.i(170582),c=e.i(424894),d=e.i(652148),u=e.i(755548),p=e.i(280445),f=e.i(422411),m=e.i(978319),x=e.i(494575),h=e.i(426778);let v=h.t().shape({caption:h.x().required("Caption is required")}),b=u.f,g=(0,p.f)(n.f)({backgroundColor:x.f.COLOUR.secondary,color:x.f.COLOUR.white,textAlign:"center",minWidth:"64px",borderRadius:"4px",margin:"10px 0",padding:"4px 10px",boxShadow:`0px 3px 1px -2px rgba(0,0,0,0.2),
    0px 2px 2px 0px rgba(0,0,0,0.14),
    0px 1px 5px 0px rgba(0,0,0,0.12)`}),y=(0,p.f)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),j=e=>{let{noDelete:l,onDelete:u,isAdded:p,media:h,caption:j,onSave:L}=e,[C,I]=(0,r.useState)(null),[S,$]=(0,r.useState)(""),[A,R]=(0,r.useState)(p),{register:_,errors:w,handleSubmit:M,reset:q,setValue:D,control:z}=(0,f.G)({resolver:(0,c.yupResolver)(v)}),U=(0,r.useCallback)(e=>t=>{t.stopPropagation();let r=t.target.files?.[0];r&&($(e),I(r),D("caption",r.name))},[I,D]);return(0,t.jsx)("form",{children:A?(0,t.jsx)(o.f,{children:(0,t.jsxs)(o.f,{rowGap:2,children:[(0,t.jsx)(f.e,{control:z,defaultValue:null,name:"caption",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(d.f,{fullWidth:!0,label:"Caption",variant:"standard",color:"secondary",name:"caption",value:r,onChange:n,InputLabelProps:{shrink:!!r},error:!!w.caption,helperText:w.caption?.message})}}),C?(0,t.jsxs)(o.f,{rowGap:3,children:[(0,t.jsxs)(o.f,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(n.f,{sx:{color:x.f.COLOUR.secondary,fontWeight:600,pointerEvents:"none"},children:C.name}),(0,t.jsx)(i.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(a.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),I(null),q()},children:(0,t.jsx)(m.default,{})})})]}),(0,t.jsxs)(o.f,{direction:"row",columnGap:3,justifyContent:"flex-end",children:[(0,t.jsx)(b,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),R(!1),u()},children:"Cancel"}),(0,t.jsx)(b,{variant:"contained",size:"small",onClick:M(e=>{C&&(L({...e,media:C,type:S}),R(!1))}),children:"Save"})]})]}):(0,t.jsxs)(o.f,{direction:"row",columnGap:3,justifyContent:"flex-end",children:[(0,t.jsxs)(g,{component:"label",children:["Add image ",(0,t.jsx)(y,{onChange:U("image"),type:"file",accept:s.m})]}),(0,t.jsxs)(g,{component:"label",children:["Add document ",(0,t.jsx)(y,{onChange:U("document"),type:"file",accept:s.f,multiple:!0})]})]})]})}):(0,t.jsxs)(o.f,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,children:[(0,t.jsx)(n.f,{sx:{color:x.f.COLOUR.secondary,fontWeight:600,pointerEvents:"none"},children:j||h?.name||"No caption"}),!l&&(0,t.jsx)(i.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(a.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:u,children:(0,t.jsx)(m.default,{sx:{fontSize:"16px"}})})})]})})};e.s(["f",0,e=>{let{values:s,setValue:c,name:d="attachments",title:u="Attachments",titleSx:p={},onDeleteExistingMedia:f}=e,[m,x]=(0,r.useState)([]);return(0,r.useEffect)(()=>{Array.isArray(s)&&x(s)},[s]),(0,t.jsxs)(o.f,{children:[(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(n.f,{sx:p,children:u?u+":":""}),(0,t.jsx)(i.f,{title:"Add new attachment",placement:"top-start",children:(0,t.jsx)(a.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),x(e=>[...e,{mediaId:null,caption:"",media:null,type:"",isAdded:!0}])},children:(0,t.jsx)(l.default,{})})})]}),(0,t.jsx)(o.f,{pl:2,spacing:.8,children:m?.length?m.map((e,r)=>(0,t.jsx)(j,{...e,onDelete:()=>{f&&m[r]?.mediaId&&f(m[r].mediaId);let e=m.filter((e,t)=>t!==r&&null!==e.media);c(d,e),x(e)},onSave:e=>{let t;(t=[...m]).splice(r,1,e),c(d,t.filter(e=>null!==e.media))}},(e?.caption??"")+r)):(0,t.jsx)(n.f,{typography:"subtitle2",children:"No data"})})]})}],790388),e.s([],864980)},122989,e=>{var t=e.i(391398),r=e.i(280445),n=e.i(668921),a=e.i(231637),o=e.i(901004),i=e.i(539117),l=e.i(471973);let s=(0,r.f)(n.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),c=(0,r.f)(a.f)(e=>{let{theme:t,variant:r}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===r&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:r,variant:n,label:a,options:d,value:u,onChange:p,helperText:f,error:m,hideLabel:x,renderOption:h,...v}=e;return(0,t.jsxs)(s,{variant:n,fullWidth:r,error:m,hiddenLabel:x,children:[!x&&(0,t.jsx)(c,{variant:n,children:a}),(0,t.jsx)(i.f,{fullWidth:r,displayEmpty:!0,value:u||"",onChange:p,sx:{position:"relative"},renderValue:()=>{let e=d.find(e=>e.value===u);return e?e.label:""},error:m,...v,children:d.length?d.map(e=>(0,t.jsx)(o.f,{value:e.value,disabled:e.disabled,children:h?h(e):e.label},e.value)):(0,t.jsx)(o.f,{disabled:!0,value:"",children:"No options"})}),f&&(0,t.jsx)(l.f,{error:m,children:f})]})}])},964770,e=>{var t=e.i(391398),r=e.i(738251),n=e.i(813843),a=e.i(652148),o=e.i(280445),i=e.i(115871),l=e.i(191788);let s=(0,o.f)(r.f)(e=>{let{theme:t,error:r,height:n}=e;return{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:r?t.palette.error.main:"#D9D9D9",height:n||"28px",padding:"0 5px"}}),c=(0,o.f)(a.f)(e=>{let{theme:t,error:r,height:n,leftLabelRef:a}=e;return{height:n||"28px","& .MuiInputBase-root ":{borderRadius:"0px","&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderColor:r?t.palette.error.main:"#D9D9D9"}},"& .MuiInputBase-input":{height:`calc(${n||"28px"} - 8px)`,padding:"2px 14px",borderColor:r?t.palette.error.main:"#D9D9D9",borderStyle:"solid",borderBottomWidth:"2.5px",borderTopWidth:"2px"},"& .MuiOutlinedInput-notchedOutline":{border:"none"}},"& .MuiFormLabel-root.MuiInputLabel-root":{transform:`translate(14px, ${(n?Number(n.replace("px","")):28)/2-10}px) scale(1)`,"&.Mui-focused":{color:"rgba(0, 0, 0, 0.6)"},"&.MuiInputLabel-shrink":{transform:"translate(0px, -16.5px) scale(0.75)"}},"& .MuiFormHelperText-root.Mui-error":{marginLeft:"0px",transform:`translate(-${a?.current?.clientWidth||0}px, 0px)`}}});e.s(["f",0,e=>{let{leftLabel:r,rightLabel:a,middleRight:o,error:d,height:u,rightLabelTypography:p,leftLabelTypography:f,...m}=e,x=(0,l.useRef)(null),h=(0,l.useRef)(null);return(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(s,{ref:x,sx:{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},error:d,height:u,children:(0,t.jsx)(i.f,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",...f},children:r})}),(0,t.jsx)(c,{...m,variant:"outlined",size:"small",error:d,height:u,leftLabelRef:x,rightLabelRef:h}),o&&(0,t.jsx)(s,{error:d,height:u,sx:{borderRadius:0,padding:0,flexShrink:0,overflow:"visible"},children:o}),(0,t.jsx)(s,{ref:h,sx:{borderTopRightRadius:"5px",borderBottomRightRadius:"5px",...o?{borderTopLeftRadius:0,borderBottomLeftRadius:0,borderLeft:e=>`1px solid ${e.palette.background.paper}`}:{}},error:d,height:u,children:(0,t.jsx)(i.f,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",...p},variant:"body2",fontWeight:700,children:a})})]})}])},39059,e=>{var t=e.i(159080);let r=t.f`
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
`,l=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,s=t.f`
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
`;e.s(["u",0,c,"q",0,o,"_",0,l,"x",0,n,"k",0,r,"f",0,i,"l",0,s,"V",0,a])},123518,e=>{e.s(["f",0,[{label:"United Kingdom",value:1},{label:"Ireland",value:4}]])},410355,e=>{var t=e.i(391398),r=e.i(422411),n=e.i(424894),a=e.i(426778);let o=(0,a.t)().shape({id:(0,a.H)().nullable(),name:(0,a.x)(),invoicingEntity:(0,a.x)(),invoicingEmail:(0,a.x)(),addressLine1:(0,a.x)().required(),addressLine2:(0,a.x)(),addressLine3:(0,a.x)(),city:(0,a.x)().required(),postCode:(0,a.x)().required().matches("^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$|^([AC-FHKNPRTV-Y]\\d{2}|D6W)\\s[0-9AC-FHKNPRTV-Y]{4}$","Invalid Post Code"),county:(0,a.x)(),countryId:(0,a.H)().required()});var i=e.i(123518),l=e.i(755548),s=e.i(813843),c=e.i(652148),d=e.i(115871),u=e.i(122989);let p={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{defaultValues:a,onSubmit:f,type:m}=e,{control:x,errors:h,handleSubmit:v,register:b}=(0,r.G)({defaultValues:{...a},resolver:(0,n.yupResolver)(o)});return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:v(f),children:[(0,t.jsxs)(s.f,{spacing:2,children:[(0,t.jsx)(d.f,{sx:p,children:"Address Form"}),(0,t.jsx)(c.f,{fullWidth:!0,name:"name",inputRef:b,label:"Address name",variant:"standard",color:"secondary",error:!!h.name}),"invoice"===m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{fullWidth:!0,name:"invoicingEmail",inputRef:b,label:"Invoicing email",type:"email",variant:"standard",color:"secondary",error:!!h.invoicingEmail}),(0,t.jsx)(c.f,{fullWidth:!0,name:"invoicingEntity",inputRef:b,label:"Invoicing entity",multiline:!0,rows:4,variant:"filled",color:"secondary",error:!!h.invoicingEntity})]}),(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(c.f,{fullWidth:!0,name:"addressLine1",inputRef:b,label:"Address Line 1*",variant:"standard",color:"secondary",error:!!h.addressLine1}),(0,t.jsx)(c.f,{fullWidth:!0,name:"addressLine2",inputRef:b,label:"Address Line 2",variant:"standard",color:"secondary",error:!!h.addressLine2})]}),(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(c.f,{fullWidth:!0,name:"addressLine3",inputRef:b,label:"Address Line 3",variant:"standard",color:"secondary",error:!!h.addressLine3}),(0,t.jsx)(c.f,{fullWidth:!0,name:"city",inputRef:b,label:"City*",variant:"standard",color:"secondary",error:!!h.city})]}),(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(c.f,{fullWidth:!0,name:"postCode",inputRef:b,label:"Post Code*",variant:"standard",color:"secondary",error:!!h.postCode}),(0,t.jsx)(c.f,{fullWidth:!0,name:"county",inputRef:b,label:"County",variant:"standard",color:"secondary",error:!!h.county})]}),(0,t.jsx)(s.f,{marginBottom:4,children:(0,t.jsx)(r.e,{name:"countryId",control:x,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(u.f,{value:r,onChange:n,options:i.f,label:"Country*",fullWidth:!0,error:!!h.countryId,variant:"standard",color:"secondary"})}})})]}),(0,t.jsx)(s.f,{direction:"row",justifyContent:"flex-end",marginTop:3,spacing:2,children:(0,t.jsx)(l.f,{variant:"contained",color:"secondary",type:"submit",children:"Submit"})}),a?.id&&(0,t.jsx)("input",{ref:b,name:"id",type:"hidden"})]})}],410355)},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=r.currencySymbol??"£",n="number"==typeof e?e.toFixed(2):String(e);return`${t}${n}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let r=t.options.find(t=>t.value===e);return r?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let r=t.options.find(t=>t.value===e);return r?.label??e}).join(", ");default:return String(e)}}])},140021,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(e.r(421506)),o=e.r(391398);r.default=(0,a.default)((0,o.jsx)("path",{d:"M17.21 17.61c-.47-.24-1.03-.05-1.31.4-.36.6-.97.99-1.9.99H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H13c.55 0 1-.45 1-1s-.45-1-1-1H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.2 0 2.26.61 2.89 1.53.27.4.77.59 1.22.4.6-.25.8-.99.43-1.53-.99-1.45-2.66-2.4-4.54-2.4C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H7c-.55 0-1 .45-1 1s.45 1 1 1h1.47c.08.31.13.64.13 1 0 1.9-1.29 3.11-2.06 3.66-.34.24-.54.63-.54 1.05 0 .71.58 1.29 1.29 1.29H14c1.55 0 2.95-.76 3.63-2 .28-.51.09-1.14-.42-1.39"}),"CurrencyPoundRounded")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])},551918,425577,432484,145018,687722,566118,860387,280875,e=>{var t,r=e.i(460997),n=e.i(75907),a=e.i(191788),o=e.i(889878),i=e.i(600961),l=e.i(395724),s=e.i(396851),c=e.i(713149),d=e.i(46739);function u(e){return(0,d.f)("MuiStepper",e)}(0,c.f)("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);var p=e.i(464107);let f=a.createContext({});e.s(["f",0,f],425577);let m=a.createContext({});function x(e){return(0,d.f)("MuiStepConnector",e)}e.s(["f",0,m],432484);let h=(0,c.f)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);e.s(["U",0,h,"c",0,x],145018);var v=e.i(391398);let b=["className"],g=(0,s.f)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})(e=>{let{ownerState:t}=e;return(0,n.f)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})}),y=(0,s.f)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.line,t[`line${(0,p.f)(r.orientation)}`]]}})(e=>{let{ownerState:t,theme:r}=e,a="light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600];return(0,n.f)({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:a},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),j=a.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStepConnector"}),{className:c}=s,d=(0,r.f)(s,b),{alternativeLabel:u,orientation:h="horizontal"}=a.useContext(f),{active:j,disabled:L,completed:C}=a.useContext(m),I=(0,n.f)({},s,{alternativeLabel:u,orientation:h,active:j,completed:C,disabled:L}),S=(e=>{let{classes:t,orientation:r,alternativeLabel:n,active:a,completed:o,disabled:l}=e,s={root:["root",r,n&&"alternativeLabel",a&&"active",o&&"completed",l&&"disabled"],line:["line",`line${(0,p.f)(r)}`]};return(0,i.f)(s,x,t)})(I);return(0,v.jsx)(g,(0,n.f)({className:(0,o.f)(S.root,c),ref:t,ownerState:I},d,{children:(0,v.jsx)(y,{className:S.line,ownerState:I})}))});e.s(["f",0,j],687722);let L=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],C=(0,s.f)("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.nonLinear&&t.nonLinear]}})(e=>{let{ownerState:t}=e;return(0,n.f)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})}),I=(0,v.jsx)(j,{}),S=a.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStepper"}),{activeStep:c=0,alternativeLabel:d=!1,children:p,className:m,component:x="div",connector:h=I,nonLinear:b=!1,orientation:g="horizontal"}=s,y=(0,r.f)(s,L),j=(0,n.f)({},s,{nonLinear:b,alternativeLabel:d,orientation:g,component:x}),S=(e=>{let{orientation:t,nonLinear:r,alternativeLabel:n,classes:a}=e;return(0,i.f)({root:["root",t,r&&"nonLinear",n&&"alternativeLabel"]},u,a)})(j),$=a.Children.toArray(p).filter(Boolean),A=$.map((e,t)=>a.cloneElement(e,(0,n.f)({index:t,last:t+1===$.length},e.props))),R=a.useMemo(()=>({activeStep:c,alternativeLabel:d,connector:h,nonLinear:b,orientation:g}),[c,d,h,b,g]);return(0,v.jsx)(f.Provider,{value:R,children:(0,v.jsx)(C,(0,n.f)({as:x,ownerState:j,className:(0,o.f)(S.root,m),ref:t},y,{children:A}))})});function $(e){return(0,d.f)("MuiStep",e)}e.s(["f",0,S],551918),(0,c.f)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);let A=["active","children","className","component","completed","disabled","expanded","index","last"],R=(0,s.f)("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})(e=>{let{ownerState:t}=e;return(0,n.f)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})}),_=a.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStep"}),{active:c,children:d,className:u,component:p="div",completed:x,disabled:h,expanded:b=!1,index:g,last:y}=s,j=(0,r.f)(s,A),{activeStep:L,connector:C,alternativeLabel:I,orientation:S,nonLinear:_}=a.useContext(f),[w=!1,M=!1,q=!1]=[c,x,h];L===g?w=void 0===c||c:!_&&L>g?M=void 0===x||x:!_&&L<g&&(q=void 0===h||h);let D=a.useMemo(()=>({index:g,last:y,expanded:b,icon:g+1,active:w,completed:M,disabled:q}),[g,y,b,w,M,q]),z=(0,n.f)({},s,{active:w,orientation:S,alternativeLabel:I,completed:M,disabled:q,expanded:b,component:p}),U=(e=>{let{classes:t,orientation:r,alternativeLabel:n,completed:a}=e;return(0,i.f)({root:["root",r,n&&"alternativeLabel",a&&"completed"]},$,t)})(z),k=(0,v.jsxs)(R,(0,n.f)({as:p,className:(0,o.f)(U.root,u),ref:t,ownerState:z},j,{children:[C&&I&&0!==g?C:null,d]}));return(0,v.jsx)(m.Provider,{value:D,children:C&&!I&&0!==g?(0,v.jsxs)(a.Fragment,{children:[C,k]}):k})});e.s(["f",0,_],566118);var w=e.i(59540);let M=(0,w.f)((0,v.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),q=(0,w.f)((0,v.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var D=e.i(308277);function z(e){return(0,d.f)("MuiStepIcon",e)}let U=(0,c.f)("MuiStepIcon",["root","active","completed","error","text"]),k=["active","className","completed","error","icon"],N=(0,s.f)(D.f,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(e=>{let{theme:t}=e;return{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${U.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${U.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${U.error}`]:{color:(t.vars||t).palette.error.main}}}),W=(0,s.f)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(e=>{let{theme:t}=e;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}}),T=a.forwardRef(function(e,a){let s=(0,l.f)({props:e,name:"MuiStepIcon"}),{active:c=!1,className:d,completed:u=!1,error:p=!1,icon:f}=s,m=(0,r.f)(s,k),x=(0,n.f)({},s,{active:c,completed:u,error:p}),h=(e=>{let{classes:t,active:r,completed:n,error:a}=e;return(0,i.f)({root:["root",r&&"active",n&&"completed",a&&"error"],text:["text"]},z,t)})(x);if("number"==typeof f||"string"==typeof f){let e=(0,o.f)(d,h.root);return p?(0,v.jsx)(N,(0,n.f)({as:q,className:e,ref:a,ownerState:x},m)):u?(0,v.jsx)(N,(0,n.f)({as:M,className:e,ref:a,ownerState:x},m)):(0,v.jsxs)(N,(0,n.f)({className:e,ref:a,ownerState:x},m,{children:[t||(t=(0,v.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,v.jsx)(W,{className:h.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:x,children:f})]}))}return f});function F(e){return(0,d.f)("MuiStepLabel",e)}let P=(0,c.f)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);e.s(["U",0,P,"L",0,F],860387);let B=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],O=(0,s.f)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.orientation]]}})(e=>{let{ownerState:t}=e;return(0,n.f)({display:"flex",alignItems:"center",[`&.${P.alternativeLabel}`]:{flexDirection:"column"},[`&.${P.disabled}`]:{cursor:"default"}},"vertical"===t.orientation&&{textAlign:"left",padding:"8px 0"})}),H=(0,s.f)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(e=>{let{theme:t}=e;return(0,n.f)({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${P.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.alternativeLabel}`]:{marginTop:16},[`&.${P.error}`]:{color:(t.vars||t).palette.error.main}})}),E=(0,s.f)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${P.alternativeLabel}`]:{paddingRight:0}})),G=(0,s.f)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(e=>{let{theme:t}=e;return{width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${P.alternativeLabel}`]:{textAlign:"center"}}}),V=a.forwardRef(function(e,t){var s;let c=(0,l.f)({props:e,name:"MuiStepLabel"}),{children:d,className:u,componentsProps:p={},error:x=!1,icon:h,optional:b,slotProps:g={},StepIconComponent:y,StepIconProps:j}=c,L=(0,r.f)(c,B),{alternativeLabel:C,orientation:I}=a.useContext(f),{active:S,disabled:$,completed:A,icon:R}=a.useContext(m),_=h||R,w=y;_&&!w&&(w=T);let M=(0,n.f)({},c,{active:S,alternativeLabel:C,completed:A,disabled:$,error:x,orientation:I}),q=(e=>{let{classes:t,orientation:r,active:n,completed:a,error:o,disabled:l,alternativeLabel:s}=e;return(0,i.f)({root:["root",r,o&&"error",l&&"disabled",s&&"alternativeLabel"],label:["label",n&&"active",a&&"completed",o&&"error",l&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",n&&"active",a&&"completed",o&&"error",l&&"disabled",s&&"alternativeLabel"],labelContainer:["labelContainer",s&&"alternativeLabel"]},F,t)})(M),D=null!=(s=g.label)?s:p.label;return(0,v.jsxs)(O,(0,n.f)({className:(0,o.f)(q.root,u),ref:t,ownerState:M},L,{children:[_||w?(0,v.jsx)(E,{className:q.iconContainer,ownerState:M,children:(0,v.jsx)(w,(0,n.f)({completed:A,active:S,error:x,icon:_},j))}):null,(0,v.jsxs)(G,{className:q.labelContainer,ownerState:M,children:[d?(0,v.jsx)(H,(0,n.f)({ownerState:M},D,{className:(0,o.f)(q.label,null==D?void 0:D.className),children:d})):null,b]})]}))});V.muiName="StepLabel",e.s(["f",0,V],280875)},720676,e=>{var t=e.i(172694);e.s(["f",()=>t.U])}])})();