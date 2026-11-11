(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,394989,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(773831),r=e.i(813843),a=e.i(115871),o=e.i(322135),s=e.i(148310),d=e.i(889231),l=e.i(422411),c=e.i(424894),u=e.i(755548),f=e.i(652148),m=e.i(376733),p=e.i(978319),h=e.i(426778);let y=h.t({name:h.x().required("Name is required"),url:h.x().url().required("URL is required")}),x=e=>{let{noEdit:a=!1,noDelete:s=!1,isAdded:h=!1,id:x,url:v="",name:g="",onSave:b=()=>{},onCancel:j=()=>{},onDelete:I=()=>{}}=e,[w,S]=(0,i.useState)(h),{control:R,handleSubmit:_,errors:C}=(0,l.G)({resolver:(0,c.yupResolver)(y)});return(0,t.jsx)("form",{children:w?(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{spacing:1,children:[(0,t.jsx)(l.e,{control:R,name:"name",defaultValue:g,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!C.name,helperText:C.name?.message})}),(0,t.jsx)(l.e,{control:R,name:"url",defaultValue:v,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!C.url,helperText:C.url?.message})})]}),(0,t.jsxs)(r.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),S(!1),j(x)},children:"Cancel"}),(0,t.jsx)(u.f,{variant:"contained",size:"small",onClick:_(e=>{b(e),S(!1)}),children:"Save"})]})]}):(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(d.f,{target:"_blank",variant:"body1",color:"secondary",href:v,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:g}),!a&&(0,t.jsx)(o.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),S(!0)},children:(0,t.jsx)(m.default,{sx:{fontSize:"16px"}})})}),!s&&(0,t.jsx)(o.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>I(x),children:(0,t.jsx)(p.default,{sx:{fontSize:"16px"}})})})]})})};var v=e.i(594301);let g=[];e.s(["f",0,e=>{let{values:d=g,setValue:l=()=>{},name:c,title:u="Related links",displayMode:f=!1,noDeleteEdit:m=!1,titleSx:p={}}=e,[h,y]=(0,i.useState)([]),{hasRole:b}=(0,v.f)(),j=b("tenant");(0,i.useEffect)(()=>{Array.isArray(d)&&y((d??[]).map(e=>({...e,id:e?.id||Date.now()})))},[d]);let I=e=>{y(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(a.f,{sx:p,children:[u,":"]}),!f&&!j&&(0,t.jsx)(o.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),y(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(s.default,{})})})]}),(0,t.jsx)(r.f,{pl:2,spacing:.8,children:h?.length?h.map(e=>{let t;return(0,i.createElement)(x,{...e,key:e.id,onCancel:I,noEdit:m||f,noDelete:m||f,onDelete:(t=e.id,()=>{if(!c)return;let e=h.filter(e=>e.id!==t);l?.(c,e),y(e)}),onSave:t=>((e,t)=>{if(!c)return;let i=[...h],n=i.findIndex(t=>t.id===e);-1!==n&&i.splice(n,1,{...t,isAdded:!1,id:e}),l?.(c,i)})(e.id,t)})}):(0,t.jsx)(a.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},558091,e=>{var t=e.i(391398),i=e.i(821627),n=e.i(477882),r=e.i(886779),a=e.i(280445),o=e.i(356119);let s=(0,a.f)(n.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100vw",maxWidth:"600px",maxHeight:"100vh",padding:"16px",borderRadius:"8px",overflow:"auto"}));e.s(["f",0,e=>{let{onCancel:n,onConfirm:a,title:d="Unsaved changes",body:l="Leaving this page means you will lose any updates you've made.",cancelLabel:c="Cancel",confirmLabel:u="Confirm"}=e;return(0,t.jsxs)(s,{children:[(0,t.jsx)(o.f,{variant:"h6",sx:{padding:"0 0 16px 0"},children:d}),(0,t.jsx)(r.f,{children:(0,t.jsx)(o.f,{sx:{textAlign:"left"},children:l})}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,justifyContent:"flex-end",sx:{padding:"16px 0 16px 24px"},children:[(0,t.jsx)(i.f,{onClick:n,color:"danger",variant:"contained",children:c}),(0,t.jsx)(i.f,{onClick:a,color:"secondary",variant:"contained",children:u})]})]})}])},900356,e=>{e.s(["f",0,[{label:"Call",value:"call"},{label:"Email",value:"email"},{label:"Portal",value:"portal"},{label:"Other",value:"other"}]])},454684,e=>{var t=e.i(191788),i=e.i(203828);e.i(443645);var n=e.i(648116),r=e.i(558091);let a=e=>"object"==typeof e&&null!==e;e.s(["f",0,e=>{let o=(0,i.useRouter)(),[s,d]=(0,n.f)(),l=(0,t.useRef)(a(e)?e.current:e),c=(0,t.useRef)(!1),u=(0,t.useRef)("");return(0,t.useEffect)(()=>{a(e)||(l.current=e)},[e]),(0,t.useEffect)(()=>{let i=t=>{if(!(a(e)?e.current:l.current)||c.current){c.current=!1;return}throw u.current=t,window.location.pathname+window.location.search!==o.asPath.split("#")[0]&&window.history.pushState(null,"",o.asPath),o.events.emit("routeChangeError",Error("Route change aborted by user")),"Route change aborted by user"},n=e=>{if(e instanceof Error&&"Route change aborted by user"===e.message)d({content:e=>{let{onClose:i}=e;return t.createElement(r.f,{onCancel:()=>i(),onConfirm:()=>{i(),c.current=!0,o.push(u.current)}})}});else throw e};return o.events.on("routeChangeStart",i),o.events.on("routeChangeError",n),()=>{o.events.off("routeChangeStart",i),o.events.off("routeChangeError",n)}},[o,d,e]),(0,t.useEffect)(()=>{let t=t=>{(a(e)?e.current:l.current)&&(t.preventDefault(),t.returnValue="")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[e]),s}])},287723,e=>{e.s(["f",0,function e(t,i){return!0===t||Array.isArray(t)||null==i||"object"!=typeof i?i:Object.fromEntries(Object.keys(t).map(n=>[n,e(t[n]??!1,i[n])]))}])},886143,e=>{var t=e.i(159080);let i=t.f`
  query MEDIAS(
    $category: String
    $entity: String
    $entityId: Int
    $limit: Int
    $offset: Int
    $q: String
    $type: String
    $adminId: Int
    $meta: jsonb
  ) {
    items: Media_Entity(
      limit: $limit
      offset: $offset
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: {
          adminId: { _eq: $adminId }
          caption: { _ilike: $q }
          category: { _eq: $category }
          type: { _eq: $type }
          meta: { _contains: $meta }
        }
      }
      order_by: { Medium: { createdAt: desc } }
    ) {
      id
      entity
      entityId
      mediaId
      item: Medium {
        id
        visibility
        caption
        category
        createdAt
        expiryAt
        filename
        name
        type
        meta
        userId
        user: User {
          id
          nameFirst
          nameLast
        }
      }
    }
    meta: Media_Entity_aggregate(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: {
          adminId: { _eq: $adminId }
          caption: { _ilike: $q }
          category: { _eq: $category }
          type: { _eq: $type }
          meta: { _contains: $meta }
        }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,n=t.f`
  query GetPreloadedMediaByEntity(
    $category: String
    $entity: String
    $entityId: Int
    $adminId: Int
  ) {
    items: Media_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: { adminId: { _eq: $adminId }, category: { _eq: $category } }
      }
    ) {
      mediaId
      media: Medium {
        id
        filename
        caption
      }
    }
  }
`;e.s(["o",0,i,"A",0,n])},327682,e=>{var t=e.i(159080);let i=t.f`
  mutation AddMedia($objects: [Media_insert_input!]!) {
    insert_Media(objects: $objects) {
      returning {
        id
        filename
      }
    }
  }
`,n=t.f`
  mutation AddMediaEntity($objects: [Media_Entity_insert_input!]!) {
    insert_Media_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,r=t.f`
  mutation UpdateMedia($changes: Media_set_input, $id: Int!) {
    update_Media_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["p",0,i,"u",0,n,"w",0,r])},856688,e=>{var t=e.i(776204),i=e.i(432171),n=e.i(170582),r=e.i(511667),a=e.i(886143),o=e.i(327682),s=e.i(191788);e.s(["f",0,function(e,d,l,c){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[f,m]=(0,s.useState)(!1),{data:{items:p}={items:[]},loading:h}=(0,i.t)(a.A,{variables:{entity:e,entityId:c,category:u,adminId:d},skip:!c}),[y,{isLoading:x}]=(0,r.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),[v]=(0,t.f)(o.p,{refetchQueries:["MEDIAS"]}),g=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{m(!0);let n=[];for(let r of t)if(!r.mediaId){let t,a=await b(r),o=null;if("image"===r.type){let e=a.key,i=a.data.find(e=>"large"===e.name);t=i?i.relativePath:e,o={original:{relativePath:e},thumbnails:a.data||null}}else t=a.key;n.push({entity:e,Medium:{data:{adminId:d,caption:r?.caption??null,extension:r?.media?.name?.split(".").pop(),userId:l,category:i,filename:t,type:r.type,meta:o??void 0}}})}return{Media_Entity:{data:n}}}finally{m(!1)}},b=async e=>{let t,i=new window.FormData;switch(e.media&&i.append("file",e.media,e.media.name),e.type){case"image":t=n.G;break;case"document":case"audio":t=n.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let r=window.localStorage.getItem("bearerToken"),a={};r&&(a.Authorization=`Bearer ${r}`);let o=await window.fetch(t,{method:"POST",body:i,headers:a}),s=await o.json();if(!o.ok)throw Error(s?.message||`Upload failed with status ${o.status}`);return s};return{uploadMedia:async(t,i)=>{try{if(m(!0),i){let n=await b(i),r={adminId:d,caption:i.caption,expiryAt:null,extension:i.media.name.split(".").pop(),userId:l,filename:n.key,type:i.type,Media_Entities:{data:[{entity:e,entityId:t}]}};await v({variables:{objects:r}})}}finally{m(!1)}},uploadMediaToS3:b,createMediaInput:g,deleteMediaByEntity:e=>y({body:{mediaId:e}}),loadingAddMedia:f,loadingDeleteMedia:x,preloadedMediaLoading:h,preloadedMedia:p?.length?p:[]}}])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},600504,711636,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(738251),r=e.i(551918),a=e.i(566118),o=e.i(280875),s=e.i(755548),d=e.i(280445),l=e.i(687722),c=e.i(813843),u=e.i(706692);let f=(0,d.f)(o.f)(e=>{let{theme:t}=e;return{"& .MuiSvgIcon-root.MuiStepIcon-root.Mui-active":{color:t.palette.secondary.main},"& .MuiSvgIcon-root.MuiStepIcon-root.Mui-completed":{color:t.palette.secondary.main}}}),m=(0,d.f)(l.f)(e=>{let{theme:t}=e;return{"&.Mui-active":{"& .MuiStepConnector-line":{borderColor:t.palette.secondary.main}},"&.Mui-completed":{"& .MuiStepConnector-line":{borderColor:t.palette.secondary.main}},"& .MuiStepConnector-line":{borderColor:t.palette.grey[300],borderTopWidth:4,borderRadius:1,marginTop:"-2px"}}}),p=(0,d.f)(c.f)(()=>({padding:"16px 72px","@media (max-width: 600px)":{padding:"16px 0px"}})),h=(0,d.f)(c.f,{shouldForwardProp:e=>"isColumn"!==e})(e=>{let{isColumn:t}=e;return{flexDirection:"row",...t&&{flexDirection:"column","&.MuiStack-root>:not(style):not(style)":{width:"100%",maxWidth:"100%"},"&.MuiStack-root>:not(style)~:not(style)":{width:"100%",maxWidth:"100%",marginTop:"16px",marginLeft:"0px"}}}});e.s(["f",0,e=>{let{activeStep:o,steps:d,canMoveToReview:l=!1,canCancel:y=!1,onCancel:x,onNext:v,onBack:g,onReview:b,children:j}=e,I=(0,u.f)("(max-width: 800px)"),w=i.useMemo(()=>{let e=0;return y&&e++,0!==o&&e++,o!==d.length-1&&e++,l&&o!==d.length-1&&e++,o===d.length-1&&e++,e},[o,y,l,d.length]);return(0,t.jsxs)(n.f,{sx:{width:"100%"},children:[(0,t.jsx)(r.f,{activeStep:o,alternativeLabel:!0,connector:(0,t.jsx)(m,{}),children:d.map(e=>(0,t.jsx)(a.f,{...{},children:(0,t.jsx)(f,{children:e})},e))}),(0,t.jsxs)(p,{width:"100%",children:[j,(0,t.jsxs)(h,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:4,mt:2,isColumn:I&&w>2,children:[y&&(0,t.jsx)(c.f,{width:"100%",children:(0,t.jsx)(s.f,{color:"danger",variant:"contained",onClick:x,sx:{maxWidth:I&&w>2?"100%":120},children:"Cancel"})}),0!==o&&(0,t.jsx)(s.f,{color:"muiGray",variant:"outlined",disabled:0===o,onClick:g,sx:{minWidth:120},children:"Back"}),o!==d.length-1&&(0,t.jsx)(s.f,{color:"success",variant:"contained",onClick:v,sx:{minWidth:130},children:"Next"}),l&&o!==d.length-1&&(0,t.jsx)(s.f,{color:"secondary",variant:"contained",onClick:b,sx:{minWidth:130},children:"Go to review"}),o===d.length-1&&(0,t.jsx)(s.f,{color:"secondary",variant:"contained",type:"submit",sx:{minWidth:130},children:"Submit"})]})]})]})}],600504);var y=e.i(115871),x=e.i(871931),v=e.i(302966),g=e.i(760981),b=e.i(162440);let j=(0,d.f)(x.f)(e=>{let{theme:t,transparent:i,isHighlighted:n,displayNone:r}=e;return{...r&&{display:"none"},backgroundColor:i?"transparent":t.palette.background.paper,transition:"background-color 0.3s ease-in-out, border 0.3s ease-in-out",...n&&{backgroundColor:t.palette.info.main,border:`2px solid ${t.palette.info.main}`},...i&&{border:"none",boxShadow:"none"},"& .MuiAccordionDetails-root":{...i&&{paddingTop:0}},"& .MuiAccordionSummary-root":{...i&&{minHeight:0}},"& .MuiAccordionSummary-content":{width:"100%",alignItems:"center",justifyContent:"center",...i&&{margin:0}}}});e.s(["f",0,e=>{let{title:n,transparent:r,defaultExpanded:a,allowExpand:o,children:s,displayNone:d=!1}=e,l=(0,i.useMemo)(()=>n.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,function(e,t){return 0==+e?"":0===t?e.toLowerCase():e.toUpperCase()}),[n]),[u,f]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=null,t=()=>{window.location.hash===`#${l}`&&f(!0),e&&clearTimeout(e),e=setTimeout(()=>{window.location.hash="",f(!1)},2e3)};return window.addEventListener("hashchange",t),()=>{window.removeEventListener("hashchange",t),e&&clearTimeout(e)}},[l]),(0,t.jsxs)(j,{id:l,isHighlighted:u,transparent:r,defaultExpanded:a,displayNone:d,...r&&!o&&{expanded:!0},children:[(0,t.jsx)(v.f,{expandIcon:(!r||o)&&(0,t.jsx)(b.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,t.jsx)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:(0,t.jsx)(y.f,{variant:"h6",children:n})})}),(0,t.jsx)(g.f,{children:s})]})}],711636)},720847,e=>{var t=e.i(391398),i=e.i(262999),n=e.i(974266),r=e.i(405167),a=e.i(405765),o=e.i(886779),s=e.i(917563),d=e.i(345837),l=e.i(491171),c=e.i(589200),u=e.i(422411),f=e.i(280445);let m=(0,f.f)(c.f)(()=>({"& .MuiFormHelperText-root.Mui-error":{marginLeft:"0px"}})),p=(0,f.f)(s.f)(()=>({position:"relative"}));e.s(["f",0,e=>{let{name:s,control:c,options:f,errors:h,optionDescription:y,loading:x=!1,handleChange:v}=e;return x?(0,t.jsx)(o.f,{width:"100%",spacing:1,children:(0,t.jsx)(n.f,{color:"secondary"})}):(0,t.jsxs)(o.f,{width:"100%",spacing:1,children:[(0,t.jsx)(u.e,{name:s,control:c,defaultValue:null,render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(p,{children:(0,t.jsxs)(m,{color:"secondary",error:!!h?.[s],children:[(0,t.jsx)(l.f,{"aria-labelledby":"priority",name:"priority",color:"secondary",value:i?.value,onChange:e=>{let t=e.target.value,i=f.find(e=>e.value===Number(t));n(i),v?.(i)},sx:{flexDirection:"row"},children:f.map(e=>(0,t.jsx)(d.f,{value:e.value,control:(0,t.jsx)(a.f,{color:"secondary"}),label:e.label},e.value))}),h?.[s]&&"message"in h[s]&&(0,t.jsx)(r.f,{error:!0,children:h[s]?.message}),(0,t.jsx)("input",{type:"hidden",value:i})]})})}}),y&&(0,t.jsx)(i.f,{variant:"filled",severity:"info",sx:{backgroundColor:"muiGray.main"},children:y})]})}])},181881,e=>{var t=e.i(432171),i=e.i(35818),n=e.i(695567);e.s(["f",0,e=>{let{subtype:r,customerId:a,locationId:o}=e,{data:s,loading:d}=(0,t.t)(i.o,{skip:!a||!o,variables:{customerId:a,locationId:o}});return{priority:{options:(0,n.f)({subtype:r,slas:s?.slas||[],customerSlas:s?.customerSlas||[],locationSlas:s?.locationSlas||[]}),loading:d}}}])},98982,532827,340680,268602,682685,423187,e=>{var t=e.i(159080);let i=t.f`
  query GetCustomer($id: Int!) {
    customer: Account_by_pk(id: $id) {
      id
      name
      rateType: meta(path: "finance.rateType")
      serviceRateType: meta(path: "finance.serviceRateType")
      serviceRateLabour: meta(path: "finance.serviceRateLabour")
      manager: Manager {
        id
        fullName
      }
    }
  }
`;e.s(["f",0,i],98982);var n=e.i(391398),r=e.i(886779),a=e.i(871931),o=e.i(760981),s=e.i(302966),d=e.i(115871),l=e.i(752727);e.s(["f",0,e=>{let{title:t,children:i}=e;return(0,n.jsxs)(a.f,{sx:{backgroundColor:"transparent",borderTop:"0 !important"},children:[(0,n.jsx)(s.f,{sx:{"& .MuiAccordionSummary-content":{justifyContent:"space-between"},padding:0},expandIcon:(0,n.jsx)(l.P,{}),"aria-controls":"mark-on-map-content",id:"mark-on-map-header",children:(0,n.jsx)(d.f,{color:"#626262",children:t})}),(0,n.jsx)(o.f,{sx:{padding:0},children:(0,n.jsx)(r.f,{mt:1.5,children:i})})]})}],532827);var c=e.i(813843),u=e.i(936641),f=e.i(394989);e.i(864980);var m=e.i(790388);let p={width:"100%"};e.s(["f",0,e=>{let{setValue:t,permitsLinks:i,attachmentsPermits:r,showWarning:a=!0,onDeleteExistingMedia:o}=e;return(0,n.jsxs)(c.f,{sx:p,children:[a&&(0,n.jsx)(u.f,{variant:"filled",severity:"error",sx:{mb:2,mt:2},children:"Warning: This site requires a permit for attendance"}),(0,n.jsx)(f.f,{name:"permitsLinks",setValue:t,values:i,title:"Permits links"}),(0,n.jsx)(m.f,{setValue:t,values:r,onDeleteExistingMedia:o,name:"permitsAttachments",title:"Permits attachments"})]})}],340680);var h=e.i(162440),y=e.i(986351),x=e.i(821627),v=e.i(555588);e.s(["f",0,e=>{let{title:t,fields:i,onEdit:r}=e;return(0,n.jsxs)(a.f,{defaultExpanded:!0,children:[(0,n.jsx)(s.f,{expandIcon:(0,n.jsx)(h.default,{}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,n.jsxs)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:[(0,n.jsx)(c.f,{direction:"row",alignItems:"center",justifyContent:"center",width:"100%",children:(0,n.jsx)(d.f,{variant:"h6",sx:{mr:"-60px"},children:t})}),(0,n.jsx)(x.f,{color:"secondary",variant:"contained",disableMinWidth:!0,size:"small",sx:{mr:2},onClick:r,children:(0,n.jsx)(v.default,{sx:{fontSize:18}})})]})}),(0,n.jsx)(o.f,{sx:{padding:0},children:(0,n.jsx)(c.f,{width:"100%",spacing:0,children:i.map(e=>e.render?(0,n.jsxs)(c.f,{width:"100%",children:[(0,n.jsxs)(c.f,{direction:"row",width:"100%",padding:2,alignItems:"center",children:[(0,n.jsx)(d.f,{variant:"body1",width:"30%",color:"text.secondary",fontWeight:600,children:e.label}),(0,n.jsx)(c.f,{width:"70%",children:e.render()})]}),(0,n.jsx)(y.f,{})]},e.label):(0,n.jsxs)(c.f,{width:"100%",children:[(0,n.jsxs)(c.f,{direction:"row",width:"100%",padding:2,alignItems:"center",children:[(0,n.jsx)(d.f,{variant:"body1",width:"30%",color:"text.secondary",fontWeight:600,children:e.label}),(0,n.jsx)(d.f,{variant:"body1",width:"70%",color:"text.primary",children:e.value||"-"})]}),(0,n.jsx)(y.f,{})]},e.label))})})]})}],268602);let g=t.f`
  query GetAssetsByIds($ids: [Int!]!) {
    assets: Asset(where: { id: { _in: $ids } }) {
      id
      name
    }
  }
`;e.s(["f",0,g],682685);let b=t.f`
  query GetUserById($id: Int!) {
    user: User_by_pk(id: $id) {
      id
      fullName
    }
  }
`;e.s(["f",0,b],423187)},669839,e=>{var t=e.i(159080);let i=t.f`
  query GetLocationById($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      name
      access
      permitsRequired
      contactUser: User {
        id
        fullName
        accountUser: Account_Users {
          id
          role
          userAccountLocations: User_Account_Locations(where: { accountLocationId: { _eq: $id } }) {
            id
            accountUserId
            accountLocationId
          }
        }
      }
      accountLocations: Account_Locations {
        linkType
        account: Account {
          id
          name
          rateType: meta(path: "finance.rateType")
          serviceRateType: meta(path: "finance.serviceRateType")
          serviceRateLabour: meta(path: "finance.serviceRateLabour")
          manager: Manager {
            id
            fullName
          }
        }
      }
    }
  }
`,n=t.f`
  query GetSublocationById($id: Int!) {
    sublocation: Sublocation_by_pk(id: $id) {
      id
      name
    }
  }
`;e.s(["_",0,i,"P",0,n])},35818,e=>{var t=e.i(159080);let i=t.f`
  query GetPriorityForWorkOrder($customerId: Int!, $locationId: Int!) {
    slas: SLA(where: { status: { _eq: "active" } }, order_by: { name: asc }) {
      id
      name
      subtype
      label: name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
    }
    customerSlas: SLA_Entity(
      where: { entityId: { _eq: $customerId }, entity: { _eq: "Account" } }
    ) {
      id
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      slaId
      inUse
      entity
      entityId
    }
    locationSlas: SLA_Entity(
      where: { entityId: { _eq: $locationId }, entity: { _eq: "Location" } }
    ) {
      id
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      slaId
      inUse
      entity
      entityId
    }
  }
`,n=t.f`
  query GetPriorityById($id: Int!, $customerId: Int!, $locationId: Int!) {
    priority: SLA_by_pk(id: $id) {
      id
      name
      subtype
      label: name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
      customerSlas: SLA_Entities(
        where: { entity: { _eq: "Account" }, entityId: { _eq: $customerId } }
      ) {
        id
        notes
        onSite
        onSiteUnit
        quoteReturned
        quoteReturnedUnit
        jobReport
        jobReportUnit
        createdAt
        updatedAt
        slaId
        inUse
        entity
        entityId
      }
      locationSlas: SLA_Entities(
        where: { entity: { _eq: "Location" }, entityId: { _eq: $locationId } }
      ) {
        id
        notes
        onSite
        onSiteUnit
        quoteReturned
        quoteReturnedUnit
        jobReport
        jobReportUnit
        createdAt
        updatedAt
        slaId
        inUse
        entity
        entityId
      }
    }
  }
`;e.s(["U",0,n,"o",0,i])},176278,e=>{var t=e.i(159080);let i=t.f`
  query GetTaxonomyById($id: Int!) {
    taxonomy: Taxonomy_by_pk(id: $id) {
      id
      name
      meta
    }
  }
`;e.s(["f",0,i])},284501,e=>{e.s(["f",0,e=>{let t,i=t=>{let i=Number(e[t]);return isNaN(i)?null:i},n=t=>{let i=e[t];return Array.isArray(i)?null:i};return{parentId:i("parentId"),jobNumber:"string"!=typeof e.id?null:e.id,locationId:i("locationId"),sublocationId:i("sublocationId"),customerId:i("customerId"),customerUserId:i("customerUserId"),source:n("source"),assetCategoryId:i("assetCategoryId"),assetIds:Array.isArray(t=e.assetId)?t.filter(e=>Number.isNaN(e)).map(e=>Number(e)):Number.isNaN(t)?null:[Number(t)],access:n("access"),shortJobDescriptionId:i("shortJobDescriptionId"),description:n("description"),reference:n("reference"),costCategoryId:i("costCategoryId"),serviceId:i("serviceId"),pricing:n("pricing"),spendThreshold:i("spendThreshold"),supplierSpendThreshold:i("supplierSpendThreshold"),customerAmount:i("customerAmount"),supplierLabourAmount:i("supplierLabourAmount"),supplierMaterialsAmount:i("supplierMaterialsAmount"),slaId:i("slaId")}}])},695567,e=>{var t=e.i(320861);e.s(["f",0,e=>{let{subtype:i,slas:n=[],customerSlas:r=[],locationSlas:a=[]}=e;return n.filter(e=>e.subtype===i).map(e=>{let i=a?.find(t=>t.slaId===e.id&&t.inUse),n=r?.find(t=>t.slaId===e.id&&t.inUse),o=i?.notes||n?.notes,s=(0,t.H)({time:i?.onSite,unit:i?.onSiteUnit},{time:n?.onSite,unit:n?.onSiteUnit},{time:e.onSite,unit:e.onSiteUnit}),d=(0,t.H)({time:i?.jobReport,unit:i?.jobReportUnit},{time:n?.jobReport,unit:n?.jobReportUnit},{time:e.jobReport,unit:e.jobReportUnit}),l=(0,t.H)({time:i?.quoteReturned,unit:i?.quoteReturnedUnit},{time:n?.quoteReturned,unit:n?.quoteReturnedUnit},{time:e.quoteReturned,unit:e.quoteReturnedUnit});return{id:e.id,label:e.label,value:e.id,notes:o||e.notes,onSite:s.time,onSiteUnit:s.unit,jobReport:d.time,jobReportUnit:d.unit,quoteReturned:l.time,quoteReturnedUnit:l.unit,disabled:!!(a?.find(t=>t.slaId===e.id&&!t.inUse)||r?.find(t=>t.slaId===e.id&&!t.inUse))}})}])},215574,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"AddOutlined")},920475,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),"Brightness1")},555588,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),a=e.r(391398);i.default=(0,r.default)((0,a.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},632784,e=>{var t=e.i(460997),i=e.i(75907),n=e.i(191788),r=e.i(889878),a=e.i(600961),o=e.i(396851),s=e.i(395724),d=e.i(713149),l=e.i(46739);function c(e){return(0,l.f)("MuiFormGroup",e)}(0,d.f)("MuiFormGroup",["root","row","error"]);var u=e.i(225730),f=e.i(180730),m=e.i(391398);let p=["className","row"],h=(0,o.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,i.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),y=n.forwardRef(function(e,n){let o=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:d,row:l=!1}=o,y=(0,t.f)(o,p),x=(0,u.f)(),v=(0,f.f)({props:o,muiFormControl:x,states:["error"]}),g=(0,i.f)({},o,{row:l,error:v.error}),b=(e=>{let{classes:t,row:i,error:n}=e;return(0,a.f)({root:["root",i&&"row",n&&"error"]},c,t)})(g);return(0,m.jsx)(h,(0,i.f)({className:(0,r.f)(b.root,d),ownerState:g,ref:n},y))});e.s(["f",0,y],632784)},405167,e=>{var t=e.i(471973);e.s(["f",()=>t.f])},477882,e=>{var t=e.i(88152);e.s(["f",()=>t.f])},530252,e=>{var t=e.i(460997),i=e.i(75907),n=e.i(191788),r=e.i(889878),a=e.i(600961),o=e.i(477366),s=e.i(272932),d=e.i(395724),l=e.i(727529),c=e.i(464107),u=e.i(938785),f=e.i(166822),m=e.i(713149),p=e.i(46739);function h(e){return(0,p.f)("MuiRadio",e)}let y=(0,m.f)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);var x=e.i(396851),v=e.i(896994),g=e.i(391398);let b=["checked","checkedIcon","color","icon","name","onChange","size","className"],j=(0,x.f)(s.f,{shouldForwardProp:e=>(0,v.f)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"medium"!==i.size&&t[`size${(0,c.f)(i.size)}`],t[`color${(0,c.f)(i.color)}`]]}})(e=>{let{theme:t,ownerState:n}=e;return(0,i.f)({color:(t.vars||t).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===n.color?t.vars.palette.action.activeChannel:t.vars.palette[n.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,o.alpha)("default"===n.color?t.palette.action.active:t.palette[n.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&{[`&.${y.checked}`]:{color:(t.vars||t).palette[n.color].main}},{[`&.${y.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}),I=(0,g.jsx)(l.f,{checked:!0}),w=(0,g.jsx)(l.f,{}),S=n.forwardRef(function(e,o){var s,l,m,p;let y=(0,d.f)({props:e,name:"MuiRadio"}),{checked:x,checkedIcon:v=I,color:S="primary",icon:R=w,name:_,onChange:C,size:M="medium",className:$}=y,k=(0,t.f)(y,b),q=(0,i.f)({},y,{color:S,size:M}),A=(e=>{let{classes:t,color:n,size:r}=e,o={root:["root",`color${(0,c.f)(n)}`,"medium"!==r&&`size${(0,c.f)(r)}`]};return(0,i.f)({},t,(0,a.f)(o,h,t))})(q),U=n.useContext(f.f),E=x,L=(0,u.f)(C,U&&U.onChange),D=_;return U&&(void 0===E&&(m=U.value,E="object"==typeof(p=y.value)&&null!==p?m===p:String(m)===String(p)),void 0===D&&(D=U.name)),(0,g.jsx)(j,(0,i.f)({type:"radio",icon:n.cloneElement(R,{fontSize:null!=(s=w.props.fontSize)?s:M}),checkedIcon:n.cloneElement(v,{fontSize:null!=(l=I.props.fontSize)?l:M}),ownerState:q,classes:A,name:D,checked:E,onChange:L,ref:o,className:(0,r.f)(A.root,$)},k))});e.s(["f",0,S],530252)},405765,491171,e=>{var t=e.i(530252);e.s(["f",()=>t.f],405765);var i=e.i(984636);e.s(["f",()=>i.f],491171)},727529,e=>{var t=e.i(75907);e.i(191788);var i=e.i(59540),n=e.i(391398);let r=(0,i.f)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),a=(0,i.f)((0,n.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var o=e.i(396851),s=e.i(896994);let d=(0,o.f)("span",{name:"MuiRadioButtonIcon",shouldForwardProp:s.f})({position:"relative",display:"flex"}),l=(0,o.f)(r,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),c=(0,o.f)(a,{name:"MuiRadioButtonIcon"})(e=>{let{theme:i,ownerState:n}=e;return(0,t.f)({left:0,position:"absolute",transform:"scale(0)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeIn,duration:i.transitions.duration.shortest})},n.checked&&{transform:"scale(1)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.shortest})})});e.s(["f",0,function(e){let{checked:i=!1,classes:r={},fontSize:a}=e,o=(0,t.f)({},e,{checked:i});return(0,n.jsxs)(d,{className:r.root,ownerState:o,children:[(0,n.jsx)(l,{fontSize:a,className:r.background,ownerState:o}),(0,n.jsx)(c,{fontSize:a,className:r.dot,ownerState:o})]})}],727529)},984636,e=>{e.i(350461);var t=e.i(75907),i=e.i(460997),n=e.i(191788),r=e.i(889878),a=e.i(600961),o=e.i(632784),s=e.i(258559),d=e.i(75136),l=e.i(324382),c=e.i(166822),u=e.i(701806),f=e.i(391398);let m=["actions","children","className","defaultValue","name","onChange","value"],p=n.forwardRef(function(e,p){let{actions:h,children:y,className:x,defaultValue:v,name:g,onChange:b,value:j}=e,I=(0,i.f)(e,m),w=n.useRef(null),S=(e=>{let{classes:t,row:i,error:n}=e;return(0,a.f)({root:["root",i&&"row",n&&"error"]},s.f,t)})(e),[R,_]=(0,l.f)({controlled:j,default:v,name:"RadioGroup"});n.useImperativeHandle(h,()=>({focus:()=>{let e=w.current.querySelector("input:not(:disabled):checked");e||(e=w.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let C=(0,d.f)(p,w),M=(0,u.f)(g),$=n.useMemo(()=>({name:M,onChange(e){_(e.target.value),b&&b(e,e.target.value)},value:R}),[M,b,_,R]);return(0,f.jsx)(c.f.Provider,{value:$,children:(0,f.jsx)(o.f,(0,t.f)({role:"radiogroup",ref:C,className:(0,r.f)(S.root,x)},I,{children:y}))})});e.s(["f",0,p])},166822,e=>{e.i(350461);let t=e.i(191788).createContext(void 0);e.s(["f",0,t])},258559,e=>{var t=e.i(713149),i=e.i(46739);(0,t.f)("MuiRadioGroup",["root","row","error"]),e.s(["f",0,function(e){return(0,i.f)("MuiRadioGroup",e)}])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])}])})();