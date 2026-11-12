(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,394989,e=>{var t=e.i(391398),n=e.i(191788),r=e.i(773831),i=e.i(813843),o=e.i(115871),s=e.i(322135),a=e.i(148310),l=e.i(889231),c=e.i(422411),d=e.i(424894),u=e.i(755548),p=e.i(652148),h=e.i(376733),f=e.i(978319),m=e.i(426778);let g=m.t({name:m.x().required("Name is required"),url:m.x().url().required("URL is required")}),b=e=>{let{noEdit:o=!1,noDelete:a=!1,isAdded:m=!1,id:b,url:v="",name:x="",onSave:y=()=>{},onCancel:_=()=>{},onDelete:S=()=>{}}=e,[I,E]=(0,n.useState)(m),{control:w,handleSubmit:$,errors:T}=(0,c.G)({resolver:(0,d.yupResolver)(g)});return(0,t.jsx)("form",{children:I?(0,t.jsxs)(i.f,{children:[(0,t.jsxs)(i.f,{spacing:1,children:[(0,t.jsx)(c.e,{control:w,name:"name",defaultValue:x,render:e=>(0,t.jsx)(p.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!T.name,helperText:T.name?.message})}),(0,t.jsx)(c.e,{control:w,name:"url",defaultValue:v,render:e=>(0,t.jsx)(p.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!T.url,helperText:T.url?.message})})]}),(0,t.jsxs)(i.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),E(!1),_(b)},children:"Cancel"}),(0,t.jsx)(u.f,{variant:"contained",size:"small",onClick:$(e=>{y(e),E(!1)}),children:"Save"})]})]}):(0,t.jsxs)(i.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(l.f,{target:"_blank",variant:"body1",color:"secondary",href:v,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:x}),!o&&(0,t.jsx)(s.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),E(!0)},children:(0,t.jsx)(h.default,{sx:{fontSize:"16px"}})})}),!a&&(0,t.jsx)(s.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>S(b),children:(0,t.jsx)(f.default,{sx:{fontSize:"16px"}})})})]})})};var v=e.i(594301);let x=[];e.s(["f",0,e=>{let{values:l=x,setValue:c=()=>{},name:d,title:u="Related links",displayMode:p=!1,noDeleteEdit:h=!1,titleSx:f={}}=e,[m,g]=(0,n.useState)([]),{hasRole:y}=(0,v.f)(),_=y("tenant");(0,n.useEffect)(()=>{Array.isArray(l)&&g((l??[]).map(e=>({...e,id:e?.id||Date.now()})))},[l]);let S=e=>{g(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(i.f,{children:[(0,t.jsxs)(i.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(o.f,{sx:f,children:[u,":"]}),!p&&!_&&(0,t.jsx)(s.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(r.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),g(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(a.default,{})})})]}),(0,t.jsx)(i.f,{pl:2,spacing:.8,children:m?.length?m.map(e=>{let t;return(0,n.createElement)(b,{...e,key:e.id,onCancel:S,noEdit:h||p,noDelete:h||p,onDelete:(t=e.id,()=>{if(!d)return;let e=m.filter(e=>e.id!==t);c?.(d,e),g(e)}),onSave:t=>((e,t)=>{if(!d)return;let n=[...m],r=n.findIndex(t=>t.id===e);-1!==r&&n.splice(r,1,{...t,isAdded:!1,id:e}),c?.(d,n)})(e.id,t)})}):(0,t.jsx)(o.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},890350,e=>{var t,n,r,i=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),o=((n={}).VERIFIED="verified",n.UNVERIFIED="unverified",n),s=((r={}).CLEVERLY="cleverly",r.XERO="xero",r.BIDIRECTIONAL="bidirectional",r.NONE="none",r);e.s(["d",()=>i,"T",()=>o,"$",()=>s])},185242,e=>{var t=e.i(191788),n=e.i(190077),r=e.i(631328),i=e.i(105118),o=e.i(3878);e.s(["f",0,function(e,s){let{queryKey:a,method:l="GET",headers:c,body:d,params:u,pathParams:p,baseUrl:h,skip:f=!1,pollInterval:m,stopPollingOnError:g=!0,onCompleted:b,onError:v}=s,x=(0,o.r)(),y=(0,t.useRef)(null),_=(0,t.useRef)(!0),{fetchQuery:S,unregisterQuery:I,registerQuery:E}=x,w=(0,t.useMemo)(()=>(0,n.f)(),[]),[$,T]=(0,t.useState)(void 0),[j,A]=(0,t.useState)(null),[R,U]=(0,t.useState)(!1),[C,L]=(0,t.useState)(0),D=(0,r.s)(f),k=(0,r.s)(d),M=(0,r.s)(u),q=(0,r.s)(p),O=(0,r.s)(C),N=(0,t.useRef)(0),P=(0,t.useRef)(null),W=(0,t.useRef)(b),B=(0,t.useRef)(v);(0,t.useEffect)(()=>{W.current=b,B.current=v});let F=(0,t.useCallback)(async()=>{y.current?.abort();let t=new AbortController;y.current=t,A(null),U(!0);let n=++N.current,r=!1;try{let r=await S(e,{baseUrl:h,method:l,headers:c,body:d,params:u,pathParams:p,signal:t.signal});n===N.current&&(T(r),W.current?.(r))}catch(i){if(i instanceof Error&&"AbortError"===i.name){r=!0,y.current===t&&U(!1);return}let e=i instanceof Error?i:Error("An unknown error occurred");n===N.current&&(A(e),B.current?.(e))}finally{r||n!==N.current||U(!1)}},[h,d,S,c,l,u,p,e]),Y=(0,t.useRef)(F);(0,t.useEffect)(()=>{Y.current=F}),(0,t.useEffect)(()=>(E(a,w,()=>L(e=>e+1),l),()=>{I(a,w)}),[w,l,a,E,I]),(0,t.useEffect)(()=>{if(P.current&&(clearTimeout(P.current),P.current=null,_.current=!1),f){D!==f&&(y.current?.abort(),U(!1));return}!_.current&&(0,i.f)(k,d)&&(0,i.f)(M,u)&&(0,i.f)(q,p)&&O===C&&D===f||(F(),_.current=!1)},[d,F,u,p,k,M,q,O,D,C,f]),(0,t.useEffect)(()=>()=>{P.current=setTimeout(()=>{P.current=null,y.current?.abort()}),_.current=!0},[]);let H=!!(m&&m>0&&!f&&!(g&&j));return(0,t.useEffect)(()=>{if(!H)return;let e=setInterval(()=>{Y.current()},m);return()=>{clearInterval(e)}},[H,m]),{data:$,error:j,isLoading:R,isError:!!j,refetch:()=>L(e=>e+1)}}])},39059,e=>{var t=e.i(159080);let n=t.f`
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
`,o=t.f`
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
`,p=t.f`
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
`,m=t.f`
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
`;e.s(["e",0,s,"u",0,h,"q",0,l,"_",0,d,"x",0,o,"k",0,i,"f",0,c,"U",0,f,"I",0,n,"s",0,m,"l",0,u,"V",0,r,"J",0,p,"W",0,a])},856688,e=>{var t=e.i(432171),n=e.i(170582),r=e.i(511667),i=e.i(886143),o=e.i(191788);e.s(["w",0,e=>(e?.Media_Entity.data??[]).flatMap(e=>{let{Medium:{data:t}}=e;return t.filename&&t.type?[{filename:t.filename,type:t.type,caption:t.caption,category:t.category,extension:t.extension,meta:t.meta}]:[]}),"t",0,function(e,s,a,l){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[d,u]=(0,o.useState)(!1),{data:{items:p}={items:[]},loading:h}=(0,t.t)(i.A,{variables:{entity:e,entityId:l,category:c,adminId:s},skip:!l}),[f,{isLoading:m}]=(0,r.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),g=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{u(!0);let r=[];for(let i of t)if(!i.mediaId){let t,o=await b(i),l=null;if("image"===i.type){let e=o.key,n=o.data.find(e=>"large"===e.name);t=n?n.relativePath:e,l={original:{relativePath:e},thumbnails:o.data||null}}else t=o.key;r.push({entity:e,Medium:{data:{adminId:s,caption:i?.caption??null,extension:i?.media?.name?.split(".").pop(),userId:a,category:n,filename:t,type:i.type,meta:l??void 0}}})}return{Media_Entity:{data:r}}}finally{u(!1)}},b=async e=>{let t,r=new window.FormData;switch(e.media&&r.append("file",e.media,e.media.name),e.type){case"image":t=n.G;break;case"document":case"audio":t=n.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let i=window.localStorage.getItem("bearerToken"),o={};i&&(o.Authorization=`Bearer ${i}`);let s=await window.fetch(t,{method:"POST",body:r,headers:o}),a=await s.json();if(!s.ok)throw Error(a?.message||`Upload failed with status ${s.status}`);return a};return{uploadMediaToS3:b,createMediaInput:g,deleteMediaByEntity:e=>f({body:{mediaId:e}}),loadingAddMedia:d,loadingDeleteMedia:m,preloadedMediaLoading:h,preloadedMedia:p?.length?p:[]}}])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},869877,e=>{var t=e.i(974261),n=e.i(587882);e.s(["f",0,class{static async request(e,r){try{let i=(0,n.f)(),o=await window.fetch(`${t.n.duxServerUrl}${e}`,{...r,headers:{...i&&r?.auth?{Authorization:i}:{},...r?.headers??{}}});if(!o.ok){let e="Unknown error";try{let t=await o.json();"string"==typeof t.detail?e=t.detail:Array.isArray(t.detail)&&(e=t.detail.map(e=>e.msg).join("\n"))}catch{e=o.statusText||"Unknown error"}throw Error(e)}return await o.json()}catch(e){throw Error(e instanceof Error?e.message:"Network error")}}static async getSessions(e){let t=new URLSearchParams;e?.chat_type&&t.set("chat_type",e.chat_type),e?.limit&&t.set("limit",e.limit.toString()),e?.offset&&t.set("offset",e.offset.toString());let n=t.toString();return this.request(`/chat/sessions${n?`?${n}`:""}`,{auth:!0,method:"GET"})}static async getSession(e){return this.request(`/chat/sessions/${e}`,{auth:!0,method:"GET"})}static async getSessionMessages(e,t){let n=new URLSearchParams;t?.limit&&n.set("limit",t.limit.toString()),t?.offset&&n.set("offset",t.offset.toString());let r=n.toString();return this.request(`/chat/sessions/${e}/messages${r?`?${r}`:""}`,{auth:!0,method:"GET"})}static async createSession(e){return this.request("/chat/sessions",{auth:!0,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})}static async deleteSession(e){return this.request(`/chat/sessions/${e}`,{auth:!0,method:"DELETE"})}static async submitFeedback(e,t,n,r){let i=new URLSearchParams;return i.set("rating",n),r&&i.set("comment",r),this.request(`/chat/sessions/${e}/messages/${t}/feedback?${i.toString()}`,{auth:!0,method:"POST"})}static async generateSummary(e){return this.request("/ai_summarizer/generate-summary",{auth:!0,method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(e)})}}])},248975,838744,e=>{var t=e.i(391398),n=e.i(529292);let r=(0,e.i(280445).f)("div")(e=>{let{theme:t}=e;return{"&.dot-flashing-container":{marginLeft:"15px"},"& .dot-flashing":{position:"relative",width:"10px",height:"10px",borderRadius:"5px",backgroundColor:t.palette.secondary.main,color:t.palette.secondary.main,animation:"dot-flashing 1s infinite linear alternate",animationDelay:"0.5s"},"& .dot-flashing::before, .dot-flashing::after":{content:"''",display:"inline-block",position:"absolute",top:0},"& .dot-flashing::before":{left:"-15px",width:"10px",height:"10px",borderRadius:"5px",backgroundColor:t.palette.secondary.main,color:t.palette.secondary.main,animation:"dot-flashing 1s infinite alternate",animationDelay:"0s"},"& .dot-flashing::after":{left:"15px",width:"10px",height:"10px",borderRadius:"5px",backgroundColor:t.palette.secondary.main,color:t.palette.secondary.main,animation:"dot-flashing 1s infinite alternate",animationDelay:"1s"},"@keyframes dot-flashing":{"0%":{backgroundColor:t.palette.secondary.main},"50%, 100%":{backgroundColor:(0,n.V)(t.palette.secondary.main,.8)}}}});e.s(["f",0,()=>(0,t.jsx)(r,{className:"dot-flashing-container",children:(0,t.jsx)("div",{className:"dot-flashing"})})],248975);var i=e.i(738251);function o(e,n){return e.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/).map((e,r)=>{if(/^\*\*(.*)\*\*$/.test(e))return(0,t.jsx)("strong",{children:e.slice(2,-2)},`${n}-b-${r}`);let i=e.match(/^\[([^\]]+)\]\(([^)]+)\)$/);if(i?.[1]&&i[2]){let e=i[2].trim(),o=e.toLowerCase().replace(/[\s\x00-\x1f]/g,"");return o.startsWith("javascript:")||o.startsWith("data:")||o.startsWith("vbscript:")?(0,t.jsx)("span",{children:i[1]},`${n}-a-${r}`):(0,t.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:i[1]},`${n}-a-${r}`)}return e})}e.s(["f",0,e=>{let{text:n}=e;if("string"!=typeof n||!n.includes("*")&&!n.includes("[")&&!n.includes("\n")&&!n.includes("-")&&!n.match(/^\d+\.\s+/))return(0,t.jsx)(i.f,{children:n});let r=(e,n)=>(0,t.jsx)(i.f,{sx:{mb:2},children:e.map((e,r)=>(0,t.jsxs)(i.f,{children:[(0,t.jsx)(i.f,{sx:{display:"flex",alignItems:"flex-start",mb:1,"&:before":{content:`"${r+1}."`,marginRight:"8px",color:"#666",fontWeight:"bold",minWidth:"20px"}},children:e.item.props.children}),e.subItems.length>0&&(0,t.jsx)(i.f,{sx:{ml:2},children:e.subItems})]},`${n}-item-${r}`))},n);return(0,t.jsx)(i.f,{component:"div",sx:{"& ul":{listStyle:"none",paddingLeft:0,"& li":{position:"relative",paddingLeft:"20px","&:before":{content:'"•"',position:"absolute",left:"8px",color:"#666"}}},"& ol":{margin:"0",paddingLeft:"0"},"& a":{color:"#1976d2",textDecoration:"underline","&:hover":{textDecoration:"none",opacity:.8}}},children:"string"==typeof n?(e=>{let n=e.split("\n"),s=[],a=-1;for(let e=0;e<n.length;e++){let t=n[e];if(!t)continue;let r=t.trim();if(/^\d+\.\s+/.test(r))a=s.length,s.push({type:"numbered",content:r,originalIndex:e,level:0});else if(/^-\s+/.test(r)){let t=+(a>=0);s.push({type:"bullet",content:r,originalIndex:e,level:t,parentIndex:a>=0?a:void 0})}else""===r?s.push({type:"empty",content:"",originalIndex:e,level:0}):(s.push({type:"text",content:r,originalIndex:e,level:0}),!(a>=0)||r.startsWith("  ")||r.startsWith("	")||(a=-1))}let l=[],c=[];for(let e of s)if("numbered"===e.type){let n=e.content.replace(/^\d+\.\s+/,"");c.push({item:(0,t.jsx)(i.f,{sx:{mb:1},children:(0,t.jsx)("span",{children:o(n,`numbered-${e.originalIndex}`)},`numbered-span-${e.originalIndex}`)},`numbered-${e.originalIndex}`),subItems:[]})}else if("bullet"===e.type){let n=e.content.replace(/^-\s+/,"");if(1===e.level&&void 0!==e.parentIndex){let r=(0,t.jsx)(i.f,{sx:{mb:1,ml:3,display:"flex",alignItems:"flex-start","&:before":{content:'"•"',marginRight:"8px",color:"#666",minWidth:"16px"}},children:(0,t.jsx)("span",{children:o(n,`bullet-${e.originalIndex}`)},`bullet-span-${e.originalIndex}`)},`bullet-${e.originalIndex}`);if(void 0!==e.parentIndex&&c[e.parentIndex]){let t=c[e.parentIndex];t&&t.subItems.push(r)}}else c.length>0&&(l.push(r(c,`ol-${e.originalIndex}`)),c=[]),l.push((0,t.jsx)(i.f,{sx:{mb:1,display:"flex",alignItems:"flex-start","&:before":{content:'"•"',marginRight:"8px",color:"#666",minWidth:"16px"}},children:(0,t.jsx)("span",{children:o(n,`bullet-${e.originalIndex}`)},`bullet-span-${e.originalIndex}`)},`bullet-${e.originalIndex}`))}else c.length>0&&(l.push(r(c,`ol-${e.originalIndex}`)),c=[]),"empty"===e.type?l.push((0,t.jsx)(i.f,{sx:{mb:2}},`empty-${e.originalIndex}`)):l.push((0,t.jsx)(i.f,{sx:{mb:1},children:(0,t.jsx)("span",{children:o(e.content,`text-${e.originalIndex}`)},`text-span-${e.originalIndex}`)},`text-${e.originalIndex}`));return c.length>0&&l.push(r(c,"ol-final")),l})(n):(0,t.jsx)(i.f,{children:n})})}],838744)},870856,e=>{e.s(["f",0,{URLS:{DASHBOARD_PREFIX:"/dashboard/issues/",BRAIN_RELAX_IMAGE:"/static/dux/brain-relax.svg",BRAIN_CELEBRATE_IMAGE:"/static/dux/brain-celebrate.jpg",RIGHT_RESPONSE_IMAGE:"/static/dux/right-response.png",DUX_SUMMARIZE:"/static/dux/dux-summarize.svg",DUX_SUMMARIZE_RESPONCE:"/static/dux/dux-summarize-responce.svg",SUCCESSFUL_JOB:"/static/dux/successful-job.svg",OUTSTANDING_REPORT:"/static/dux/outstanding-report.svg",SLA_BREACH:"/static/dux/sla-breach.svg",FURTHER_WORK_REQUIRED:"/static/dux/further-works-required.svg"},WORK_ORDER:{DEFAULT_NUMBER:"J12345",DISPUTE_NOTES:"Marked as dispute because of creating a recall job",REPORT_CAPTION:"report for recall job"},MESSAGES:{RELAX_TITLE:"Relax.",RELAX_DESCRIPTION:"Once you have added information to the left, the work order or assets will appear here for your approval.",SUCCESS_TITLE:"Work order",SUCCESS_DESCRIPTION:"You can now view the work order details, assign tasks, or return to the dashboard.",BUTTONS:{VIEW_WORK_ORDER:"View work order",CREATE_NEW_WORK_ORDER:"Create new work order"}},STYLING:{IMAGE_SIZES:{BRAIN_RELAX:{width:"200px",height:"200px"},BRAIN_CELEBRATE:{width:"200px",height:"200px"},RIGHT_RESPONSE:{width:"auto",height:"240px"}},CONTAINER_FLEX:{WITH_RESPONSE:1.8,WITHOUT_RESPONSE:.8,ADMIN_DEFAULT:.4}}}])},787009,e=>{var t=e.i(877341),n=e.i(35818),r=e.i(176278),i=e.i(851123),o=e.i(191788);e.s(["f",0,()=>{let[e,s]=(0,o.useState)(""),[a,{data:{items:l}={items:[]},loading:c}]=(0,t.f)(i.T,{variables:{q:""!==e?`${e}%`:null,orderBy:[{name:"asc"}]}}),[d]=(0,t.f)(r.f),[u]=(0,t.f)(n.U),[p]=(0,t.f)(i.z);return{setShortJobDescription:{loading:c,options:l,onSearchChange:s,onOpen:()=>a()},getShortJobDescriptionQuestions:p,getShortJobDescription:d,getPriority:u}}])},471612,63767,e=>{var t=e.i(191788),n=e.i(185242),r=e.i(122965),i=e.i(21557);let o=[];e.s(["f",0,e=>{let s,{jobId:a,customerId:l,locationId:c,serviceId:d,excludeJobId:u,filterByService:p=!0,includeWarning:h=!1,types:f,timeZone:m=Intl.DateTimeFormat().resolvedOptions().timeZone,enabled:g=!0,initialSort:b}=e,v=(0,i.f)(),{reference:x,pagination:y,order:_}=(0,r.f)(b?{initialSort:b}:{}),{orderBy:S,orderDir:I}={orderBy:((s=_[0])?Object.keys(s)[0]:"id")||"id",orderDir:(s?String(Object.values(s)[0]):"desc").startsWith("desc")?"desc":"asc"},E=null!=a||null!=l&&null!=c,w=!E,$=(0,t.useMemo)(()=>{if(E)return(e=>{let{jobId:t,customerId:n,locationId:r,serviceId:i,excludeJobId:o,filterByService:s=!0,includeWarning:a=!1,types:l,timeZone:c,limit:d,offset:u,orderBy:p,orderDir:h}=e,f={limit:d,offset:u,orderBy:p,orderDir:h,includeWarning:a};return f.filterByService=s,null!=t?f.jobId=t:(null!=n&&(f.customerId=n),null!=r&&(f.locationId=r),null!=i&&(f.serviceId=i),null!=o&&(f.excludeJobId=o)),l&&l.length>0&&(f.types=[...l]),c&&(f.timeZone=c),f})({jobId:a,customerId:l,locationId:c,serviceId:d,excludeJobId:u,filterByService:p,includeWarning:h,types:f,timeZone:m,limit:y.limit,offset:y.offset,orderBy:S,orderDir:I})},[E,a,l,c,d,u,p,h,f,m,y.limit,y.offset,S,I]),{data:T,isLoading:j}=(0,n.f)("/job/history",{queryKey:"job-history",skip:w||!g,params:$,onError:()=>{v.show({content:"Could not load job history",severity:"error"})}}),A=w?o:T?.jobs??o;return{reference:x,jobs:A,totalCount:w?0:T?.count??0,jobHistoryWarning:!w&&!!T?.hasWarning,loading:j}}],471612);var s=e.i(391398),a=e.i(773831),l=e.i(813843),c=e.i(322135),d=e.i(858564),u=e.i(820726),p=e.i(529422),h=e.i(624841),f=e.i(65295);e.s(["Z",0,e=>{let{numberPrefix:t,numberSuffix:n}=e;return[{field:"id",headerName:"Job ID",flex:1,minWidth:100,renderCell:e=>{let{row:r}=e,i=r.warningLevel;return(0,s.jsxs)(l.f,{direction:"row",alignItems:"center",gap:1,children:[i&&(0,s.jsx)(c.f,{title:"Warning! Please investigate for duplicate job or recurring issue.",children:(0,s.jsx)(u.default,{color:i,sx:{fontSize:24,mt:"-4px"}})}),(0,s.jsx)(p.f,{id:r.id,number:r.number,numberPrefix:t,numberSuffix:n,openCanvas:!0,type:r.type})]})}},{field:"description",headerName:"Description",flex:1,minWidth:140,sortable:!1,renderCell:e=>{let{row:t}=e;return t.shortJobDesc?.[0]?.taxonomy.name||"-"}},{field:"service",headerName:"Service",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return t.service?.name||"-"}},{field:"status",headerName:"Status",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,s.jsx)(h.f,{value:t.status})}},{field:"createdAt",headerName:"Date Created",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return(0,f.f)(t.createdAt)}}]},"g",0,e=>{let{numberPrefix:t,numberSuffix:n,onViewReport:r,openCanvas:i=!1}=e;return[{field:"createdAt",headerName:"Date",flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return(0,f.f)(t.createdAt)}},{field:"id",headerName:"Job ID",flex:1,minWidth:100,renderCell:e=>{let{row:r}=e;return(0,s.jsxs)(l.f,{direction:"row",alignItems:"center",gap:1,children:[r.warningLevel&&(0,s.jsx)(c.f,{title:"Warning! Please investigate for duplicate job or recurring issue.",children:(0,s.jsx)(u.default,{color:r.warningLevel,sx:{fontSize:24,mt:"-4px"}})}),(0,s.jsx)(p.f,{id:r.id,number:r.number,numberPrefix:t,numberSuffix:n,openCanvas:i,type:r.type})]})}},{field:"service",headerName:"Service",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return t.service?.name||"-"}},{field:"report",align:"center",headerAlign:"center",headerName:"Job report",minWidth:70,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,s.jsx)(c.f,{title:t.hasReport?"View job report":"No job report available",children:(0,s.jsx)("span",{children:(0,s.jsx)(a.f,{"aria-label":"View job report",color:"secondary",disabled:!t.hasReport,onClick:()=>r(t),children:(0,s.jsx)(d.default,{})})})})}}]}],63767)},756311,825051,e=>{var t=e.i(391398),n=e.i(122989),r=e.i(280445);let i="amount",o=[{label:"Amount",value:i},{label:"N/A",value:"n/a"}],s=(0,r.f)("div")({width:96,height:"36px",display:"flex",alignItems:"center","& .MuiFormControl-root":{width:96,minWidth:0,height:"36px",flexDirection:"row",alignItems:"center"}}),a=(0,r.f)(n.f)(e=>{let{theme:t}=e;return{width:96,height:"36px",fontSize:"14px",fontWeight:t.typography.fontWeightBold,backgroundColor:"transparent","& .MuiSelect-select.MuiInputBase-input":{padding:t.spacing(0,3,0,1),display:"flex",alignItems:"center",height:"36px",boxSizing:"border-box"},"& .MuiSelect-icon":{right:t.spacing(.5),top:"calc(50% - 12px)"}}});e.s(["f",0,e=>{let{isNa:n,onModeChange:r}=e;return(0,t.jsx)(s,{children:(0,t.jsx)(a,{hideLabel:!0,color:"secondary",variant:"standard",disableUnderline:!0,value:n?"n/a":i,onChange:e=>{r("n/a"===e.target.value)},options:[...o],inputProps:{"aria-label":"Spend threshold mode"}})})}],756311);var l=e.i(964770);let c=(0,r.f)(l.f)(e=>{let{theme:t}=e;return{"& .MuiInputBase-root.Mui-disabled":{backgroundColor:t.palette.background.paper},"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:t.palette.text.primary,backgroundColor:t.palette.background.paper}}});e.s(["f",0,c],825051)},850504,e=>{var t=e.i(877341),n=e.i(669839),r=e.i(851123),i=e.i(191788);e.s(["f",0,e=>{let{customerId:o,customerUserId:s,locationId:a,assetCategoryId:l,sublocationId:c}=e,[d,u]=(0,i.useState)(""),[p,h]=(0,i.useState)(""),[f,m]=(0,i.useState)(""),[g,b]=(0,i.useState)(""),[v,{data:{items:x}={items:[]},loading:y}]=(0,t.f)(r.b,{variables:{customerId:o,customerUserId:s,q:""!==d?`%${d}%`:null}}),[_]=(0,t.f)(n._),[S,{data:{items:I}={items:[]},loading:E}]=(0,t.f)(r.i,{variables:{locationId:a??0,q:""!==p?`%${p}%`:null}}),[w,{data:{items:$}={items:[]},loading:T}]=(0,t.f)(r.W,{variables:{where:{type:{_eq:"assetCategory"},isGroup:{_eq:!1},status:{_eq:"active"},name:{_ilike:""!==f?`%${f}%`:null},CategoryAssets:{locationId:{_eq:a}}}}}),[j,{data:{items:A}={items:[]},loading:R}]=(0,t.f)(r.B,{variables:{locationId:a,sublocationId:c,categoryId:l,q:""!==g?`%${g}%`:null}});return{location:{loading:y,options:x.map(e=>{let t=e.registeredAddress?.[0]?.address;return{label:`${e.label?.trim()?e.label+", ":""}${t?.addressLine1?t?.addressLine1+", ":""}${t?.city?t?.city+", ":""}`,value:e.value}}),onSearchChange:u,onOpen:()=>v()},prefetchLocation:_,sublocation:{disabled:!a,loading:E,options:I,onSearchChange:h,onOpen:()=>S()},assetCategory:{loading:T,options:$,onSearchChange:m,onOpen:()=>w()},asset:{disabled:!a||!l,loading:R,options:A,onSearchChange:b,onOpen:()=>j()}}}])},695567,e=>{var t=e.i(320861);e.s(["f",0,e=>{let{subtype:n,slas:r=[],customerSlas:i=[],locationSlas:o=[]}=e;return r.filter(e=>e.subtype===n).map(e=>{let n=o?.find(t=>t.slaId===e.id&&t.inUse),r=i?.find(t=>t.slaId===e.id&&t.inUse),s=n?.notes||r?.notes,a=(0,t.H)({time:n?.onSite,unit:n?.onSiteUnit},{time:r?.onSite,unit:r?.onSiteUnit},{time:e.onSite,unit:e.onSiteUnit}),l=(0,t.H)({time:n?.jobReport,unit:n?.jobReportUnit},{time:r?.jobReport,unit:r?.jobReportUnit},{time:e.jobReport,unit:e.jobReportUnit}),c=(0,t.H)({time:n?.quoteReturned,unit:n?.quoteReturnedUnit},{time:r?.quoteReturned,unit:r?.quoteReturnedUnit},{time:e.quoteReturned,unit:e.quoteReturnedUnit});return{id:e.id,label:e.label,value:e.id,notes:s||e.notes,onSite:a.time,onSiteUnit:a.unit,jobReport:l.time,jobReportUnit:l.unit,quoteReturned:c.time,quoteReturnedUnit:c.unit,disabled:!!(o?.find(t=>t.slaId===e.id&&!t.inUse)||i?.find(t=>t.slaId===e.id&&!t.inUse))}})}])},131750,677497,e=>{var t=e.i(391398),n=e.i(755548),r=e.i(382161),i=e.i(77052),o=e.i(185758),s=e.i(540158),a=e.i(556918);e.s(["f",0,e=>{let{open:l,formName:c,onClose:d,onConfirm:u,loading:p=!1}=e;return(0,t.jsxs)(r.f,{open:l,onClose:p?void 0:d,children:[(0,t.jsx)(a.f,{children:"Remove custom form"}),(0,t.jsx)(o.f,{children:(0,t.jsxs)(s.f,{children:['Remove "',c,'" from this work order? Any saved answers and uploaded files for this form will be permanently deleted. This cannot be undone.']})}),(0,t.jsxs)(i.f,{children:[(0,t.jsx)(n.f,{color:"secondary",variant:"outlined",onClick:d,disabled:p,children:"Cancel"}),(0,t.jsx)(n.f,{color:"danger",variant:"contained",onClick:u,disabled:p,children:"Remove"})]})]})}],131750),e.s(["f",0,(e,t)=>{e&&(e.description&&t.description?.(e.description),e.tags&&t.tags?.(e.tags),e.costCategorySelected&&t.costCategory?.({label:e.costCategorySelected.label,value:e.costCategorySelected.value}),e.serviceSelected&&t.service?.({label:e.serviceSelected.label,value:e.serviceSelected.value}),e.amount&&(t.pricing?.("fixed"),t.customerAmount?.(e.amount)),e.supplierMaterialsAmount&&(t.pricing?.("fixed"),t.supplierMaterialsAmount?.(e.supplierMaterialsAmount)),e.supplierLabourAmount&&(t.pricing?.("fixed"),t.supplierLabourAmount?.(e.supplierLabourAmount)))}],677497)},618606,e=>{var t=e.i(191788),n=e.i(432171),r=e.i(441625);e.s(["f",0,function(){let{mapForm:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[i,o]=(0,t.useState)(""),{data:s,loading:a}=(0,n.t)(r.W,{variables:{q:i.trim()?`%${i.trim()}%`:null,limit:50}}),l=(0,t.useCallback)(e=>{o(e)},[]);return{activeForms:(0,t.useMemo)(()=>[...s?.Form??[]].map(t=>({...t,value:t.id,label:t.name??"",...e?.(t)})).sort((e,t)=>e.label.localeCompare(t.label,void 0,{sensitivity:"base"})),[s?.Form,e]),formsLoading:a,onSearchChange:l}}])},832323,e=>{e.s(["f",0,e=>"submitted"===e||"submittedBySupplier"===e])},984933,e=>{var t=e.i(877341),n=e.i(851123),r=e.i(191788);e.s(["f",0,()=>{let[e,i]=(0,r.useState)(""),[o,{data:{items:s}={items:[]},loading:a}]=(0,t.f)(n.d,{variables:{q:""!==e?`%${e}%`:null}});return{loading:a,options:s,onSearchChange:i,onOpen:()=>o()}}])},667808,e=>{var t=e.i(877341),n=e.i(851123),r=e.i(191788);e.s(["f",0,()=>{let[e,i]=(0,r.useState)(""),[o,{data:{items:s}={items:[]},loading:a}]=(0,t.f)(n.D,{variables:{q:""!==e?`%${e}%`:null}});return{loading:a,options:s,onSearchChange:i,onOpen:()=>o()}}])},858564,(e,t,n)=>{var r=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(e.r(421506)),o=e.r(391398);n.default=(0,i.default)([(0,o.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},"0"),(0,o.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"},"1")],"ContentPasteSearchOutlined")},16135,e=>{var t=e.i(800884);e.s(["f",()=>t.f])},540158,e=>{var t=e.i(460997),n=e.i(75907),r=e.i(191788),i=e.i(889878),o=e.i(600961),s=e.i(396851),a=e.i(896994),l=e.i(395724),c=e.i(115871),d=e.i(713149),u=e.i(46739);function p(e){return(0,u.f)("MuiDialogContentText",e)}(0,d.f)("MuiDialogContentText",["root"]);var h=e.i(391398);let f=["children","className"],m=(0,s.f)(c.f,{shouldForwardProp:e=>(0,a.f)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),g=r.forwardRef(function(e,r){let s=(0,l.f)({props:e,name:"MuiDialogContentText"}),{className:a}=s,c=(0,t.f)(s,f),d=(e=>{let{classes:t}=e,r=(0,o.f)({root:["root"]},p,t);return(0,n.f)({},t,r)})(c);return(0,h.jsx)(m,(0,n.f)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:c,className:(0,i.f)(d.root,a)},s,{classes:d}))});e.s(["f",0,g],540158)},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},519088,e=>{var t=e.i(191788),n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i="Pixel",o="Percent",s={unit:o,value:.8};function a(e){return"number"==typeof e?{unit:o,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:o,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),s):(console.warn("scrollThreshold should be string or number"),s)}var l=function(e){function o(){this.constructor=s}function s(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"==typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){!n.lastScrollTop&&(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){!n.dragging||(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),!(n.currentY-n.startY>1.5*n.maxPullDownDistance)&&n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")})},n.onScrollListener=function(e){"function"==typeof n.props.onScroll&&setTimeout(function(){return n.props.onScroll&&n.props.onScroll(e)},0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=(function(e,t,n){var r,i=!1,o=0;function s(){r&&clearTimeout(r)}function a(){var a=this,l=Date.now()-o,c=arguments;function d(){o=Date.now(),t.apply(a,c)}i||(n&&!r&&d(),s(),void 0===n&&l>150?d():!0!==e&&(r=setTimeout(n?function(){r=void 0}:d,void 0===n?150-l:150)))}return"boolean"!=typeof e&&(n=t,t=e,e=void 0),a.cancel=function(){s(),i=!0},a})(n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return n(s,e),s.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o),s.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},s.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},s.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},s.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?r(r({},t),{prevDataLength:e.dataLength}):null},s.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=a(t);return r.unit===i?e.scrollTop<=r.value+n-e.scrollHeight+1:e.scrollTop<=r.value/100+n-e.scrollHeight+1},s.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=a(t);return r.unit===i?e.scrollTop+n>=e.scrollHeight-r.value:e.scrollTop+n>=r.value/100*e.scrollHeight},s.prototype.render=function(){var e=this,n=r({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),i=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return t.default.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},t.default.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:n},this.props.pullDownToRefresh&&t.default.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},t.default.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!i&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},s}(t.Component);e.s(["f",0,l])}])})();