(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,394989,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(773831),a=e.i(813843),n=e.i(115871),o=e.i(322135),s=e.i(148310),l=e.i(889231),d=e.i(422411),c=e.i(424894),u=e.i(755548),f=e.i(652148),m=e.i(376733),p=e.i(978319),h=e.i(426778);let y=h.t({name:h.x().required("Name is required"),url:h.x().url().required("URL is required")}),g=e=>{let{noEdit:n=!1,noDelete:s=!1,isAdded:h=!1,id:g,url:v="",name:x="",onSave:w=()=>{},onCancel:I=()=>{},onDelete:b=()=>{}}=e,[j,C]=(0,r.useState)(h),{control:$,handleSubmit:S,errors:M}=(0,d.G)({resolver:(0,c.yupResolver)(y)});return(0,t.jsx)("form",{children:j?(0,t.jsxs)(a.f,{children:[(0,t.jsxs)(a.f,{spacing:1,children:[(0,t.jsx)(d.e,{control:$,name:"name",defaultValue:x,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!M.name,helperText:M.name?.message})}),(0,t.jsx)(d.e,{control:$,name:"url",defaultValue:v,render:e=>(0,t.jsx)(f.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!M.url,helperText:M.url?.message})})]}),(0,t.jsxs)(a.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),C(!1),I(g)},children:"Cancel"}),(0,t.jsx)(u.f,{variant:"contained",size:"small",onClick:S(e=>{w(e),C(!1)}),children:"Save"})]})]}):(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(l.f,{target:"_blank",variant:"body1",color:"secondary",href:v,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:x}),!n&&(0,t.jsx)(o.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),C(!0)},children:(0,t.jsx)(m.default,{sx:{fontSize:"16px"}})})}),!s&&(0,t.jsx)(o.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>b(g),children:(0,t.jsx)(p.default,{sx:{fontSize:"16px"}})})})]})})};var v=e.i(594301);let x=[];e.s(["f",0,e=>{let{values:l=x,setValue:d=()=>{},name:c,title:u="Related links",displayMode:f=!1,noDeleteEdit:m=!1,titleSx:p={}}=e,[h,y]=(0,r.useState)([]),{hasRole:w}=(0,v.f)(),I=w("tenant");(0,r.useEffect)(()=>{Array.isArray(l)&&y((l??[]).map(e=>({...e,id:e?.id||Date.now()})))},[l]);let b=e=>{y(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(a.f,{children:[(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(n.f,{sx:p,children:[u,":"]}),!f&&!I&&(0,t.jsx)(o.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),y(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(s.default,{})})})]}),(0,t.jsx)(a.f,{pl:2,spacing:.8,children:h?.length?h.map(e=>{let t;return(0,r.createElement)(g,{...e,key:e.id,onCancel:b,noEdit:m||f,noDelete:m||f,onDelete:(t=e.id,()=>{if(!c)return;let e=h.filter(e=>e.id!==t);d?.(c,e),y(e)}),onSave:t=>((e,t)=>{if(!c)return;let r=[...h],i=r.findIndex(t=>t.id===e);-1!==i&&r.splice(i,1,{...t,isAdded:!1,id:e}),d?.(c,r)})(e.id,t)})}):(0,t.jsx)(n.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},558091,e=>{var t=e.i(391398),r=e.i(821627),i=e.i(477882),a=e.i(886779),n=e.i(280445),o=e.i(356119);let s=(0,n.f)(i.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100vw",maxWidth:"600px",maxHeight:"100vh",padding:"16px",borderRadius:"8px",overflow:"auto"}));e.s(["f",0,e=>{let{onCancel:i,onConfirm:n,title:l="Unsaved changes",body:d="Leaving this page means you will lose any updates you've made.",cancelLabel:c="Cancel",confirmLabel:u="Confirm"}=e;return(0,t.jsxs)(s,{children:[(0,t.jsx)(o.f,{variant:"h6",sx:{padding:"0 0 16px 0"},children:l}),(0,t.jsx)(a.f,{children:(0,t.jsx)(o.f,{sx:{textAlign:"left"},children:d})}),(0,t.jsxs)(a.f,{direction:"row",spacing:2,justifyContent:"flex-end",sx:{padding:"16px 0 16px 24px"},children:[(0,t.jsx)(r.f,{onClick:i,color:"danger",variant:"contained",children:c}),(0,t.jsx)(r.f,{onClick:n,color:"secondary",variant:"contained",children:u})]})]})}])},454684,e=>{var t=e.i(191788),r=e.i(203828);e.i(443645);var i=e.i(648116),a=e.i(558091);let n=e=>"object"==typeof e&&null!==e;e.s(["f",0,e=>{let o=(0,r.useRouter)(),[s,l]=(0,i.f)(),d=(0,t.useRef)(n(e)?e.current:e),c=(0,t.useRef)(!1),u=(0,t.useRef)("");return(0,t.useEffect)(()=>{n(e)||(d.current=e)},[e]),(0,t.useEffect)(()=>{let r=t=>{if(!(n(e)?e.current:d.current)||c.current){c.current=!1;return}throw u.current=t,window.location.pathname+window.location.search!==o.asPath.split("#")[0]&&window.history.pushState(null,"",o.asPath),o.events.emit("routeChangeError",Error("Route change aborted by user")),"Route change aborted by user"},i=e=>{if(e instanceof Error&&"Route change aborted by user"===e.message)l({content:e=>{let{onClose:r}=e;return t.createElement(a.f,{onCancel:()=>r(),onConfirm:()=>{r(),c.current=!0,o.push(u.current)}})}});else throw e};return o.events.on("routeChangeStart",r),o.events.on("routeChangeError",i),()=>{o.events.off("routeChangeStart",r),o.events.off("routeChangeError",i)}},[o,l,e]),(0,t.useEffect)(()=>{let t=t=>{(n(e)?e.current:d.current)&&(t.preventDefault(),t.returnValue="")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[e]),s}])},886143,e=>{var t=e.i(159080);let r=t.f`
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
`,i=t.f`
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
`;e.s(["o",0,r,"A",0,i])},856688,e=>{var t=e.i(432171),r=e.i(170582),i=e.i(511667),a=e.i(886143),n=e.i(191788);e.s(["w",0,e=>(e?.Media_Entity.data??[]).flatMap(e=>{let{Medium:{data:t}}=e;return t.filename&&t.type?[{filename:t.filename,type:t.type,caption:t.caption,category:t.category,extension:t.extension,meta:t.meta}]:[]}),"t",0,function(e,o,s,l){let d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[c,u]=(0,n.useState)(!1),{data:{items:f}={items:[]},loading:m}=(0,t.t)(a.A,{variables:{entity:e,entityId:l,category:d,adminId:o},skip:!l}),[p,{isLoading:h}]=(0,i.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),y=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{u(!0);let i=[];for(let a of t)if(!a.mediaId){let t,n=await g(a),l=null;if("image"===a.type){let e=n.key,r=n.data.find(e=>"large"===e.name);t=r?r.relativePath:e,l={original:{relativePath:e},thumbnails:n.data||null}}else t=n.key;i.push({entity:e,Medium:{data:{adminId:o,caption:a?.caption??null,extension:a?.media?.name?.split(".").pop(),userId:s,category:r,filename:t,type:a.type,meta:l??void 0}}})}return{Media_Entity:{data:i}}}finally{u(!1)}},g=async e=>{let t,i=new window.FormData;switch(e.media&&i.append("file",e.media,e.media.name),e.type){case"image":t=r.G;break;case"document":case"audio":t=r.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let a=window.localStorage.getItem("bearerToken"),n={};a&&(n.Authorization=`Bearer ${a}`);let o=await window.fetch(t,{method:"POST",body:i,headers:n}),s=await o.json();if(!o.ok)throw Error(s?.message||`Upload failed with status ${o.status}`);return s};return{uploadMediaToS3:g,createMediaInput:y,deleteMediaByEntity:e=>p({body:{mediaId:e}}),loadingAddMedia:c,loadingDeleteMedia:h,preloadedMediaLoading:m,preloadedMedia:f?.length?f:[]}}])},271522,e=>{var t=e.i(877341),r=e.i(176278),i=e.i(851123),a=e.i(191788);e.s(["f",0,()=>{let[e,n]=(0,a.useState)(""),[o,{data:{items:s}={items:[]},loading:l}]=(0,t.f)(i.O,{variables:{q:""!==e?`%${e}%`:null,orderBy:[{name:"asc"}]}}),[d]=(0,t.f)(r.J);return{setQuoteSummary:{loading:l,options:s,onSearchChange:n,onOpen:()=>o()},getQuoteSummary:d}}])},284501,e=>{e.s(["f",0,e=>{let t,r=t=>{let r=Number(e[t]);return isNaN(r)?null:r},i=t=>{let r=e[t];return Array.isArray(r)?null:r};return{parentId:r("parentId"),jobNumber:"string"!=typeof e.id?null:e.id,locationId:r("locationId"),sublocationId:r("sublocationId"),customerId:r("customerId"),customerUserId:r("customerUserId"),source:i("source"),assetCategoryId:r("assetCategoryId"),assetIds:Array.isArray(t=e.assetId)?t.filter(e=>Number.isNaN(e)).map(e=>Number(e)):Number.isNaN(t)?null:[Number(t)],access:i("access"),shortJobDescriptionId:r("shortJobDescriptionId"),description:i("description"),reference:i("reference"),costCategoryId:r("costCategoryId"),serviceId:r("serviceId"),pricing:i("pricing"),spendThreshold:r("spendThreshold"),supplierSpendThreshold:r("supplierSpendThreshold"),customerAmount:r("customerAmount"),supplierLabourAmount:r("supplierLabourAmount"),supplierMaterialsAmount:r("supplierMaterialsAmount"),slaId:r("slaId")}}])},555588,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=i(e.r(421506)),n=e.r(391398);r.default=(0,a.default)((0,n.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},632784,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),a=e.i(889878),n=e.i(600961),o=e.i(396851),s=e.i(395724),l=e.i(713149),d=e.i(46739);function c(e){return(0,d.f)("MuiFormGroup",e)}(0,l.f)("MuiFormGroup",["root","row","error"]);var u=e.i(225730),f=e.i(180730),m=e.i(391398);let p=["className","row"],h=(0,o.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,r.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),y=i.forwardRef(function(e,i){let o=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:l,row:d=!1}=o,y=(0,t.f)(o,p),g=(0,u.f)(),v=(0,f.f)({props:o,muiFormControl:g,states:["error"]}),x=(0,r.f)({},o,{row:d,error:v.error}),w=(e=>{let{classes:t,row:r,error:i}=e;return(0,n.f)({root:["root",r&&"row",i&&"error"]},c,t)})(x);return(0,m.jsx)(h,(0,r.f)({className:(0,a.f)(w.root,l),ownerState:x,ref:i},y))});e.s(["f",0,y],632784)},477882,e=>{var t=e.i(88152);e.s(["f",()=>t.f])},530252,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),a=e.i(889878),n=e.i(600961),o=e.i(477366),s=e.i(272932),l=e.i(395724),d=e.i(727529),c=e.i(464107),u=e.i(938785),f=e.i(166822),m=e.i(713149),p=e.i(46739);function h(e){return(0,p.f)("MuiRadio",e)}let y=(0,m.f)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);var g=e.i(396851),v=e.i(896994),x=e.i(391398);let w=["checked","checkedIcon","color","icon","name","onChange","size","className"],I=(0,g.f)(s.f,{shouldForwardProp:e=>(0,v.f)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"medium"!==r.size&&t[`size${(0,c.f)(r.size)}`],t[`color${(0,c.f)(r.color)}`]]}})(e=>{let{theme:t,ownerState:i}=e;return(0,r.f)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette[i.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,o.alpha)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&{[`&.${y.checked}`]:{color:(t.vars||t).palette[i.color].main}},{[`&.${y.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}),b=(0,x.jsx)(d.f,{checked:!0}),j=(0,x.jsx)(d.f,{}),C=i.forwardRef(function(e,o){var s,d,m,p;let y=(0,l.f)({props:e,name:"MuiRadio"}),{checked:g,checkedIcon:v=b,color:C="primary",icon:$=j,name:S,onChange:M,size:k="medium",className:R}=y,D=(0,t.f)(y,w),E=(0,r.f)({},y,{color:C,size:k}),_=(e=>{let{classes:t,color:i,size:a}=e,o={root:["root",`color${(0,c.f)(i)}`,"medium"!==a&&`size${(0,c.f)(a)}`]};return(0,r.f)({},t,(0,n.f)(o,h,t))})(E),q=i.useContext(f.f),A=g,z=(0,u.f)(M,q&&q.onChange),N=S;return q&&(void 0===A&&(m=q.value,A="object"==typeof(p=y.value)&&null!==p?m===p:String(m)===String(p)),void 0===N&&(N=q.name)),(0,x.jsx)(I,(0,r.f)({type:"radio",icon:i.cloneElement($,{fontSize:null!=(s=j.props.fontSize)?s:k}),checkedIcon:i.cloneElement(v,{fontSize:null!=(d=b.props.fontSize)?d:k}),ownerState:E,classes:_,name:N,checked:A,onChange:z,ref:o,className:(0,a.f)(_.root,R)},D))});e.s(["f",0,C],530252)},727529,e=>{var t=e.i(75907);e.i(191788);var r=e.i(59540),i=e.i(391398);let a=(0,r.f)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),n=(0,r.f)((0,i.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var o=e.i(396851),s=e.i(896994);let l=(0,o.f)("span",{name:"MuiRadioButtonIcon",shouldForwardProp:s.f})({position:"relative",display:"flex"}),d=(0,o.f)(a,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),c=(0,o.f)(n,{name:"MuiRadioButtonIcon"})(e=>{let{theme:r,ownerState:i}=e;return(0,t.f)({left:0,position:"absolute",transform:"scale(0)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeIn,duration:r.transitions.duration.shortest})},i.checked&&{transform:"scale(1)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.shortest})})});e.s(["f",0,function(e){let{checked:r=!1,classes:a={},fontSize:n}=e,o=(0,t.f)({},e,{checked:r});return(0,i.jsxs)(l,{className:a.root,ownerState:o,children:[(0,i.jsx)(d,{fontSize:n,className:a.background,ownerState:o}),(0,i.jsx)(c,{fontSize:n,className:a.dot,ownerState:o})]})}],727529)},984636,e=>{e.i(350461);var t=e.i(75907),r=e.i(460997),i=e.i(191788),a=e.i(889878),n=e.i(600961),o=e.i(632784),s=e.i(258559),l=e.i(75136),d=e.i(324382),c=e.i(166822),u=e.i(701806),f=e.i(391398);let m=["actions","children","className","defaultValue","name","onChange","value"],p=i.forwardRef(function(e,p){let{actions:h,children:y,className:g,defaultValue:v,name:x,onChange:w,value:I}=e,b=(0,r.f)(e,m),j=i.useRef(null),C=(e=>{let{classes:t,row:r,error:i}=e;return(0,n.f)({root:["root",r&&"row",i&&"error"]},s.f,t)})(e),[$,S]=(0,d.f)({controlled:I,default:v,name:"RadioGroup"});i.useImperativeHandle(h,()=>({focus:()=>{let e=j.current.querySelector("input:not(:disabled):checked");e||(e=j.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let M=(0,l.f)(p,j),k=(0,u.f)(x),R=i.useMemo(()=>({name:k,onChange(e){S(e.target.value),w&&w(e,e.target.value)},value:$}),[k,w,S,$]);return(0,f.jsx)(c.f.Provider,{value:R,children:(0,f.jsx)(o.f,(0,t.f)({role:"radiogroup",ref:M,className:(0,a.f)(C.root,g)},b,{children:y}))})});e.s(["f",0,p])},166822,e=>{e.i(350461);let t=e.i(191788).createContext(void 0);e.s(["f",0,t])},258559,e=>{var t=e.i(713149),r=e.i(46739);(0,t.f)("MuiRadioGroup",["root","row","error"]),e.s(["f",0,function(e){return(0,r.f)("MuiRadioGroup",e)}])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])}])})();