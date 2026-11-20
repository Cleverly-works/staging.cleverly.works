(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[6837,e=>{var t=e.i(391398),r=e.i(738251),i=e.i(377198);e.s(["f",0,e=>{let{file:n,embeddedIn:a,...o}=e,l=(0,i.f)(n,a);return(0,t.jsx)(r.f,{component:"img",src:l,...o})}])},443919,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(280445),n=e.i(222351),a=e.i(738251),o=e.i(115871),l=e.i(755548),s=e.i(813843),c=e.i(741850),d=e.i(376733),u=e.i(411331),f=e.i(377198);let m=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var p=e.i(889231),h=e.i(396413);let x=(0,i.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,y=(0,i.f)("div")`
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
`,v=(0,i.f)("div")`
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
`;e.s(["f",0,e=>{let{avatar:i,editable:b=!0,avatarEditable:g=b,entity:j,entityName:_,linkTitleTo:w,relatedParties:S,onEdit:I,refetch:$}=e,M=(0,u.f)(),[A,C]=(0,r.useState)(null),[k,q]=(0,r.useState)(!1),z=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!m.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),r=(t=t.replace(/^www\./,"")).split("/")[0];return r?.split(":")[0]||null}catch(e){return null}})(e);let r="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!r)return null;let i=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:r});return`https://img.logo.dev/${encodeURIComponent(t)}?${i.toString()}`})(j.website||j.manager?.email),P=S&&S.length>0,U=(0,f.f)(A);(0,r.useEffect)(()=>{i?(C(i),q(!1)):z?(C(z),q(!0)):(C(null),q(!1))},[i,z]);let O=e=>{let[t]=e;M.close(),C(t?.filename||null)};return(0,t.jsx)(x,{children:(0,t.jsxs)(s.f,{px:1.5,direction:"row",children:[(0,t.jsx)(s.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(y,{logoUrl:k,children:[(0,t.jsx)(n.f,{content:j?.name,src:U,onClick:g?()=>{M.show({content:(0,t.jsx)(h.f,{category:"avatar",entity:_,entityId:j?.id,filters:{category:"avatar"},onMediaAdd:O,refetch:$,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:g?"pointer":"default"}}),g&&(0,t.jsx)(v,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(s.f,{pl:1.5,flex:P?1:void 0,minWidth:P?0:void 0,children:[(0,t.jsxs)(o.f,{color:"text.primary",fontSize:17,children:[w?(0,t.jsx)(p.f,{href:w,sx:{color:"secondary.main"},children:j?.name}):j?.name,j?.description&&(j?.descriptionLink?(0,t.jsx)(p.f,{href:j?.descriptionLink,target:"_blank",underline:"none",rel:"noopener noreferrer",children:(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:j?.description})}):(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:j?.description})),j?.website&&(0,t.jsx)(p.f,{href:j?.website.startsWith("http")?j?.website:`http://${j?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(c.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),P&&(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(a.f,{component:"span",children:"Related party: "}),S.map((e,r)=>(0,t.jsxs)("span",{children:[r>0&&", ",(0,t.jsx)(p.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),b&&!!I&&(0,t.jsxs)(l.f,{onClick:I,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(d.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),b&&!P&&(0,t.jsx)(s.f,{direction:"row",justifyContent:"flex-start",children:!!I&&(0,t.jsxs)(l.f,{onClick:I,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(d.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},544005,e=>{e.s(["f",0,(e,t)=>{let r={...e};return Object.entries(t).forEach(e=>{let[t,i]=e;void 0===r[t]&&(r[t]=i)}),r}])},239964,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(691567),n=e.i(773831),a=e.i(33670),o=e.i(901004),l=e.i(509790),s=e.i(692113),c=e.i(137995),d=e.i(817581),u=e.i(420),f=e.i(870307),m=e.i(407329),p=e.i(390536),h=e.i(978319),x=e.i(376733),y=e.i(13558),v=e.i(562673),b=e.i(339909),g=e.i(89029),j=e.i(129503),_=e.i(213419),w=e.i(12028),S=e.i(813843),I=e.i(115871);let $={add:(0,t.jsx)(d.default,{}),archive:(0,t.jsx)(s.default,{}),avatar:(0,t.jsx)(w.default,{}),check:(0,t.jsx)(u.default,{}),clock:(0,t.jsx)(f.default,{}),delete:(0,t.jsx)(h.default,{}),description:(0,t.jsx)(m.default,{}),download:(0,t.jsx)(p.default,{}),info:(0,t.jsx)(y.default,{}),edit:(0,t.jsx)(x.default,{}),location:(0,t.jsx)(g.default,{}),unarchive:(0,t.jsx)(c.default,{}),uploadFile:(0,t.jsx)(v.default,{}),receipt:(0,t.jsx)(b.default,{}),visibility:(0,t.jsx)(_.default,{})},M={default:(0,t.jsx)(l.default,{}),defaultHoriz:(0,t.jsx)(j.default,{}),description:(0,t.jsx)(m.default,{})},A=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],C=e=>{let{actionsData:i=A,icon:l="default",row:s,disabled:c=!1}=e,[d,u]=(0,r.useState)(null),f=()=>{u(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:c,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),u(e.currentTarget)},children:M[l]}),(0,t.jsx)(a.f,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:!!d,onClose:f,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:i(s).map((e,r)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),f()},sx:{pl:3,pr:4},children:(0,t.jsxs)(S.f,{direction:"row",alignItems:"center",spacing:2,children:[$?.[e.icon]||null,(0,t.jsx)(I.f,{children:e.tooltip})]})},r))})]})};C.propTypes={actionsData:i.default.func,icon:i.default.oneOf(["default","description"]),row:i.default.any.isRequired,disabled:i.default.bool},e.s(["f",0,C])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let r=t?.medium?.meta?.thumbnails,i=r?.find?.(e=>"small"===e.name);return i?.relativePath||t.medium.filename||null}])},396413,719588,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(432171),n=e.i(511667),a=e.i(21557),o=e.i(159080);let l=o.f`
  query MEDIAS(
    $where: Media_Entity_bool_exp!
    $orderBy: [Media_Entity_order_by!]
    $limit: Int
    $offset: Int
  ) {
    items: Media_Entity(limit: $limit, offset: $offset, where: $where, order_by: $orderBy) {
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
    meta: Media_Entity_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var s=e.i(98926),c=e.i(553875),d=e.i(755548),u=e.i(76381),f=e.i(813843),m=e.i(115871);let p=e=>{let{mediaId:r,onSuccess:i}=e,a=(0,s.f)(),[o,{isLoading:l}]=(0,n.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST",body:{mediaId:r},onCompleted:()=>{a.refetchQueries({include:["MEDIAS"]}),i(r)}});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{sx:{zIndex:1e5},open:l,children:(0,t.jsx)(u.f,{color:"secondary"})}),(0,t.jsx)(m.f,{children:"Are you sure you want to delete this?"}),(0,t.jsx)(f.f,{alignItems:"flex-end",children:(0,t.jsx)(d.f,{variant:"contained",color:"danger",disabled:l,onClick:()=>o(),children:"Delete"})})]})};e.s(["f",0,p],719588);var h=e.i(443103),x=e.i(46587),y=e.i(422411),v=e.i(106997),b=e.i(498681),g=e.i(594301),j=e.i(65295);e.i(936641);var _=e.i(6837);let w=e=>{let{media:i,editable:o,toggleShow:l}=e,[d,p]=(0,r.useState)(!1),w=(0,s.f)(),S=(0,a.f)(),I=(0,b.f)(),{user:$}=(0,g.f)(),{mediaVisibility:M=[]}=I.user,{caption:A,createdAt:C,filename:k,mediaId:q,meta:z,name:P,id:U,visibility:O,type:T,user:L}=i,{control:E,handleSubmit:D}=(0,y.G)({defaultValues:{visibility:(e=>{let{selected:t,accountType:r}=e;return x.f[r].find(e=>h.isEqual(e.value,t))})({selected:O,accountType:$.accountType})}}),[F,{error:R}]=(0,n.f)("/media/:mediaId/visibility",{queryKey:"updateMediaVisibility",method:"POST",onError:e=>{S.show({content:e.message,severity:"error"})}}),N=async e=>{p(!0);let t=await F({pathParams:{mediaId:U},body:{visibility:e.visibility.value}});p(!1),t&&(await w.refetchQueries({include:["MEDIAS"]}),l())};return d?(0,t.jsx)(c.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(u.f,{color:"secondary"})}):(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:D(N),children:["image"===T&&(0,t.jsx)(f.f,{sx:{mb:2},children:(0,t.jsx)(_.f,{file:k,alt:A||k})}),(0,t.jsxs)(f.f,{spacing:1,children:[(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(m.f,{color:"text.secondary",fontSize:"0.875rem",children:"Name"}),(0,t.jsx)(m.f,{fontSize:"0.875rem",children:P||k||"-"})]}),(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(m.f,{color:"text.secondary",fontSize:"0.875rem",children:"Visible to"}),(0,t.jsx)(m.f,{fontSize:"0.875rem",children:O?.join(", ")||"-"})]}),A&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(m.f,{color:"text.secondary",fontSize:"0.875rem",children:"Caption"}),(0,t.jsx)(m.f,{fontSize:"0.875rem",children:A})]}),(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(m.f,{color:"text.secondary",fontSize:"0.875rem",children:"Type"}),(0,t.jsx)(m.f,{fontSize:"0.875rem",children:T||"-"})]}),L&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(m.f,{color:"text.secondary",fontSize:"0.875rem",children:"Uploaded by"}),(0,t.jsx)(m.f,{fontSize:"0.875rem",children:`${L?.nameFirst||""} ${L?.nameLast||""}`.trim()||"-"})]}),(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(m.f,{color:"text.secondary",fontSize:"0.875rem",children:"Created at"}),(0,t.jsx)(m.f,{fontSize:"0.875rem",children:(0,j.f)(C)||"-"})]})]}),o&&(0,t.jsx)(f.f,{mt:2,children:(0,t.jsx)(y.e,{name:"visibility",control:E,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(v.f,{value:r,disableClearable:!0,textFieldProps:{color:"secondary",variant:"standard",label:"Select media visibility"},onChange:(e,t)=>i(t),options:M})}})}),!1]})};var S=e.i(704129),I=e.i(171817),$=e.i(512057),M=e.i(128519);let A=e=>`${e?.toLowerCase?.()}MainPhoto`;var C=e.i(185242);let k={},q=function(e){let{skip:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(0,r.useMemo)(()=>[...new Set(e)].sort((e,t)=>e-t).join(","),[e]),n=(0,r.useMemo)(()=>({ids:i}),[i]),{data:a}=(0,C.f)("/media/actions",{queryKey:`media-actions-${i}`,params:n,skip:t||!i}),o=a?.actions??k;return{mayChange:(0,r.useCallback)(e=>null!=e&&o[e]?.change.allowed===!0,[o])}};var z=e.i(871931),P=e.i(760981),U=e.i(302966),O=e.i(749231),T=e.i(845825),L=e.i(280445),E=e.i(691567);let D=[],F=e=>{let{images:i=D,showPagination:n=!0,height:a}=e,[o,l]=(0,r.useState)(0),s=(0,r.useRef)(null);return(0,r.useEffect)(()=>{l(e=>e<i.length?e:0)},[i.length]),(0,r.useEffect)(()=>{if(i.length<2)return;let e=setTimeout(()=>l(e=>(e+1)%i.length),1e4);return()=>clearTimeout(e)},[o,i.length]),(0,t.jsxs)(f.f,{width:"100%",alignItems:"center",children:[(0,t.jsx)(R,{onPointerDown:e=>{s.current=e.clientX,e.currentTarget.setPointerCapture(e.pointerId)},onPointerUp:e=>{if(null===s.current)return;let t=e.clientX-s.current;s.current=null;let r=o+(t<0?1:-1);Math.abs(t)>=50&&r>=0&&r<i.length&&l(r)},onPointerCancel:()=>{s.current=null},children:(0,t.jsx)(N,{activeStep:o,children:i.map(e=>(0,t.jsx)(_.f,{file:e.filename,draggable:!1,sx:{height:a,display:"block",flexShrink:0,overflow:"hidden",width:"100%",objectFit:"cover"},alt:e.caption},e.filename))})}),n&&i.length>1&&(0,t.jsx)(B,{page:o+1,count:i.length,onChange:(e,t)=>{l(t-1)},variant:"outlined",shape:"rounded",renderItem:e=>(0,t.jsx)(T.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})]})};F.propTypes={height:E.default.oneOfType([E.default.string,E.default.number]),images:E.default.arrayOf(E.default.shape({caption:E.default.string,filename:E.default.string.isRequired}).isRequired),showPagination:E.default.bool};let R=(0,L.f)("div")({width:"100%",overflow:"hidden",touchAction:"pan-y"}),N=(0,L.f)("div",{shouldForwardProp:e=>"activeStep"!==e})(e=>{let{activeStep:t}=e;return{display:"flex",transform:`translateX(-${100*t}%)`,transition:"transform 0.35s ease-out"}}),B=(0,L.f)(O.f)(e=>{let{hidePrevButton:t,hideNextButton:r,theme:i}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px"},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:i.palette.white.main,backgroundColor:i.palette.secondary.main}}});var V=e.i(747112),K=e.i(889231),G=e.i(411331),W=e.i(447090),H=e.i(74633),X=e.i(122965),Q=e.i(170582),Y=e.i(497844);let J=["Account","Asset","Location","Sublocation"];e.s(["f",0,e=>{let{carousel:o=!0,category:s="media",data:c=[],entity:u,entityId:h,filters:x={},listView:y=!1,mediaMeta:v=null,onMediaAdd:j,onMediaRemove:_,onEdit:C,hideVisibleToColumn:k=!1,showActionButtons:O=!0,showEntityColumn:T=!1,showItemActions:L=!0,title:E="Media",type:D,expanded:R,defaultExpanded:N,onChangeExpanded:B=()=>{},hideExpandIcon:Z=!1,mediaFormProps:ee={},offCanvasProps:et={},onlySingleMedia:er=!1,elevation:ei=1,accordionSx:en={},refetch:ea=()=>{},withMainPhoto:eo=!1,children:el}=e,{reference:es,pagination:ec}=(0,X.f)({}),{hasRole:ed,user:eu}=(0,g.f)(),{can:ef}=(0,b.f)(),em=(0,G.f)(),ep=(0,a.f)(),eh=(0,W.f)(),ex=!J.includes(u)||ef("media.attachOwnerRecord"),[ey]=(0,n.f)("/media/:mediaId/main-photo",{queryKey:"makeMainPhoto",method:"POST",onError:e=>{ep.show({content:e.message,severity:"error"})}}),ev=(0,r.useMemo)(()=>(e=>{let{entity:t,entityId:r,adminId:i,q:n,type:a,meta:o,category:l,withMainPhoto:s}=e,c={entity:{_eq:t},entityId:{_eq:r},Medium:{adminId:{_eq:i}}};if(n&&(c.Medium.caption={_ilike:n}),a&&(c.Medium.type={_eq:a}),o&&(c.Medium.meta={_contains:o}),s){let e=A(t);c.Medium._or=l?[{category:{_eq:l}},{category:{_eq:e}}]:[{category:{_is_null:!0}},{category:{_eq:e}}]}else c.Medium.category=l?{_eq:l}:{_is_null:!0};return c})({entity:u,entityId:h,adminId:eu.adminId,q:x.q,type:x.type||D,meta:v,category:s,withMainPhoto:eo}),[u,h,eu.adminId,x.q,x.type,D,v,s,eo]),eb=(0,r.useMemo)(()=>(e=>{let{withMainPhoto:t}=e;return t?[{Medium:{category:"asc"}},{Medium:{createdAt:"desc"}}]:[{Medium:{createdAt:"desc"}}]})({withMainPhoto:eo}),[eo]),{data:{items:eg,meta:ej}={items:[],meta:{aggregate:{totalCount:0}}},loading:e_,refetch:ew}=(0,i.t)(l,{variables:{where:ev,orderBy:eb,...ec}}),{mayChange:eS}=q((0,r.useMemo)(()=>eg.flatMap(e=>{let{item:t}=e;return t?[t.id]:[]}),[eg]),{skip:!L}),eI=e=>{em.close(),c.length||ew();let t=e.map(e=>({...e,link:`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${e.filename}`}));j&&j(t),ea&&ea()},e$=e=>{em.close(),c?.length||ew(),_&&_(e),ea&&ea()},eM=async e=>{await ey({pathParams:{mediaId:e.data.id},body:{entity:u,entityId:h}})&&(ew(),ea())},eA=[{field:"file",headerName:"File",flex:1,sortable:!1,renderCell:e=>{let{row:r,value:i}=e;return(0,t.jsx)(K.f,{color:"secondary",onClick:e=>{e.preventDefault(),eh(r.filename)},children:i})}},{field:"visibility",headerName:"Visible to",flex:1,sortable:!1},{field:"entity",headerName:"Entity",flex:1,sortable:!1},{field:"uploaded",headerName:"Uploaded by",flex:1,sortable:!1},{field:"thumbnails",headerName:"Thumbnails",flex:1,sortable:!1,renderCell:e=>{let{value:t}=e;return"function"==typeof t?t():t}},{field:"actions",headerName:"Actions",width:50,sortable:!1,renderCell:e=>{let r,i,n,{row:a}=e;return(0,t.jsx)(Y.f,{actions:(r=A(u),i=eS(a.data.id),n=[],eo&&ex&&i&&n.push({icon:"uploadFile",onClick:()=>eM(a),tooltip:"Make main photo",disabled:a?.data?.category===r}),n.push({icon:"info",onClick:()=>{let e;return e=eS(a.data.id),void em.show({content:(0,t.jsx)(w,{media:a.data,editable:e,toggleShow:em.close}),submit:e,title:"Media details"})},tooltip:"Details"}),i&&n.push({icon:"delete",onClick:()=>{em.show({content:(0,t.jsx)(p,{mediaId:a.data.id,onSuccess:e$}),submit:!1,title:"Delete media"})},tooltip:"Delete"}),n)})}}],eC=[],ek=eg.filter(e=>{let{item:t}=e;return t?.visibility&&ed(t?.visibility)}).map(e=>{let{entity:r,entityId:i,id:n,item:a}=e,{caption:o,filename:l,meta:s,name:c,type:d,user:u,visibility:f}=a;return{data:a,id:n,userId:u?.id,filename:l,visibility:f.join(", "),file:o||c||l,entity:r&&`${r}#${i}`,authority:s,uploaded:`${u?.nameFirst} ${u?.nameLast}`,thumbnails:"image"===d?s?.thumbnails&&s?.thumbnails.length?()=>(0,t.jsx)(I.default,{color:"success",fontSize:"small",titleAccess:"Yes"}):()=>(0,t.jsx)($.default,{color:"error",fontSize:"small",titleAccess:"No"}):()=>(0,t.jsx)(M.default,{fontSize:"small",titleAccess:"Unavailable"}),actions:""}}),eq=(eg.filter(e=>{let{item:t}=e;return t?.visibility&&ed(t?.visibility)}).forEach(e=>{let{item:t}=e,{caption:r,filename:i,type:n}=t;"image"===n&&eC.push({caption:r,filename:i})}),eC),ez=eq.length;return(0,t.jsxs)(z.f,{elevation:ei,expanded:R,onChange:B,sx:en,defaultExpanded:N,children:[(0,t.jsxs)(U.f,{...!Z?{expandIcon:(0,t.jsx)(V.f,{})}:{},children:[(0,t.jsx)(m.f,{variant:"h6",sx:{flexShrink:0},children:E}),!!C&&(0,t.jsx)(f.f,{direction:"row",alignItems:"center",justifyContent:"flex-end",width:"100%",pr:+!Z,children:(0,t.jsx)(d.f,{onClick:C,variant:"contained",color:"secondary",children:"Edit"})})]}),(0,t.jsx)(P.f,{children:el}),(0,t.jsxs)(P.f,{children:[o&&ez>0&&(0,t.jsx)(F,{height:"200px",images:eq}),(0,t.jsx)(H.s,{...es,columns:eA,rows:ek,loading:e_,totalCount:ej.aggregate.totalCount,columnVisibilityModel:{entity:T,thumbnails:y,actions:L,visibility:!k}}),O&&ex&&!(er&&ek.length>0)&&(0,t.jsxs)(f.f,{direction:"row",justifyContent:"center",spacing:2,mt:2,children:[!D&&(0,t.jsx)(d.f,{variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),u&&em.show({content:(0,t.jsx)(S.f,{accept:Q.s,category:s,entity:u,entityId:h,expiryShow:!1,maxFiles:Q.t,mediaMeta:v,multiple:!0,onSuccess:eI,...ee}),title:"Upload files",...et})},children:"Add File"}),"document"===D&&(0,t.jsx)(d.f,{variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),u&&em.show({content:(0,t.jsx)(S.f,{accept:Q.f,category:s,entity:u,entityId:h,expiryShow:!1,mediaMeta:v,onSuccess:eI,type:"document",...ee}),title:"Upload documents",...et})},children:"Add Document"}),("image"===D||"avatar"===D)&&(0,t.jsxs)(d.f,{variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),u&&em.show({content:(0,t.jsx)(S.f,{accept:Q.m,category:s,entity:u,entityId:h,expiryShow:!1,maxFiles:Q.t,mediaMeta:v,multiple:!0,onSuccess:eI,type:"image",...ee}),title:"Upload photos",...et})},children:["Add ",D.charAt(0).toUpperCase()+D.slice(1)]})]})]})]})}],396413)},98762,e=>{var t=e.i(191788),r=e.i(949125),i=e.i(974261),n=e.i(491230);e.s(["f",0,e=>{let{filters:a,newFilters:o,initialSort:l}=e,s=(0,t.useRef)(void 0),[c,d]=(0,t.useState)({}),[u,f]=(0,t.useState)({}),m=l||{item:"createdAt",order:"desc"},p={[s.current?.sort.item||m.item]:m.inneritem?{[m.inneritem]:s.current?.sort.order||m.order}:s.current?.sort.order||m.order};return(0,t.useEffect)(()=>{let e=!(0,r.default)(c,a),t=!(0,r.default)(u,o);if(e&&(d(a),s?.current?.resetPagination()),t&&(f(o),s?.current?.resetPagination()),s?.current?.setSort&&!(e||t)){let e=s.current?.sort?.item&&s.current?.sort?.order?{item:s.current?.sort?.item,order:s.current?.sort?.order}:p;s.current.setSort(e)}},[a,o]),{initialData:{...a,newFilters:o?.length>0?o:void 0,limit:s.current?.pageSize==="Infinity"?null:parseInt(s.current?.pageSize,10)||i.r.paginationSize,offset:(s.current?.currentPage-1||0)*(s.current?.pageSize||i.r.paginationSize),orderBy:(0,n.f)(s.current?.sort?.item?.replace(/ORDER/i,s.current?.sort.order))||p},initialSort:l,ref:s}}])},39059,e=>{var t=e.i(159080);let r=t.f`
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
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,a=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,o=t.f`
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
`;e.s(["u",0,c,"q",0,a,"_",0,l,"x",0,i,"k",0,r,"f",0,o,"l",0,s,"V",0,n])},46587,e=>{let t=["admin","customer","supplier","tenant"],r=["admin","customer"],i=["admin","supplier"],n=["admin","customer","tenant"],a=["customer","tenant"];e.s(["f",0,{admin:[{label:"All",value:t},{label:"Admin + Supplier",value:i},{label:"Admin + Customer",value:r},{label:"Admin + Customer + Tenant",value:n},{label:"Internal",value:["admin"]}],customer:[{label:"All",value:t},{label:"Admin + Customer",value:r},{label:"Admin + Customer + Tenant",value:n},{label:"Customer + Tenant",value:a},{label:"Internal",value:["customer"]}],supplier:[{label:"All",value:t},{label:"Admin + Supplier",value:i},{label:"Internal",value:["supplier"]}],tenant:[{label:"All",value:t},{label:"Admin + Customer + Tenant",value:n},{label:"Customer + Tenant",value:a}]}])},171817,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},659587,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},741850,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},128519,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove")},870307,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])}],625106,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,r)=>{var i=e.r(933571),n=e.r(729549),a=e.r(630357);function o(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new i;++t<r;)this.add(e[t])}o.prototype.add=o.prototype.push=n,o.prototype.has=a,t.exports=o},278166,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length,n=0,a=[];++r<i;){var o=e[r];t(o,r,e)&&(a[n++]=o)}return a}},576723,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=t.length,n=e.length;++r<i;)e[n+r]=t[r];return e}},297560,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}},538916,(e,t,r)=>{var i=e.r(576723),n=e.r(448684);t.exports=function(e,t,r){var a=t(e);return n(e)?a:i(a,r(e))}},190835,(e,t,r)=>{var i=e.r(858056),n=e.r(432836);t.exports=function e(t,r,a,o,l){return t===r||(null!=t&&null!=r&&(n(t)||n(r))?i(t,r,a,o,e,l):t!=t&&r!=r)}},858056,(e,t,r)=>{var i=e.r(698620),n=e.r(536712),a=e.r(317744),o=e.r(804191),l=e.r(268829),s=e.r(448684),c=e.r(613272),d=e.r(75299),u="[object Arguments]",f="[object Array]",m="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,h,x,y){var v=s(e),b=s(t),g=v?f:l(e),j=b?f:l(t);g=g==u?m:g,j=j==u?m:j;var _=g==m,w=j==m,S=g==j;if(S&&c(e)){if(!c(t))return!1;v=!0,_=!1}if(S&&!_)return y||(y=new i),v||d(e)?n(e,t,r,h,x,y):a(e,t,g,r,h,x,y);if(!(1&r)){var I=_&&p.call(e,"__wrapped__"),$=w&&p.call(t,"__wrapped__");if(I||$){var M=I?e.value():e,A=$?t.value():t;return y||(y=new i),x(M,A,r,h,y)}}return!!S&&(y||(y=new i),o(e,t,r,h,x,y))}},758629,(e,t,r)=>{var i=e.r(734274),n=e.r(517059),a=Object.prototype.hasOwnProperty;t.exports=function(e){if(!i(e))return n(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},33483,(e,t,r)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,r)=>{var i=e.r(650119),n=e.r(297560),a=e.r(33483);t.exports=function(e,t,r,o,l,s){var c=1&r,d=e.length,u=t.length;if(d!=u&&!(c&&u>d))return!1;var f=s.get(e),m=s.get(t);if(f&&m)return f==t&&m==e;var p=-1,h=!0,x=2&r?new i:void 0;for(s.set(e,t),s.set(t,e);++p<d;){var y=e[p],v=t[p];if(o)var b=c?o(v,y,p,t,e,s):o(y,v,p,e,t,s);if(void 0!==b){if(b)continue;h=!1;break}if(x){if(!n(t,function(e,t){if(!a(x,t)&&(y===e||l(y,e,r,o,s)))return x.push(t)})){h=!1;break}}else if(!(y===v||l(y,v,r,o,s))){h=!1;break}}return s.delete(e),s.delete(t),h}},317744,(e,t,r)=>{var i=e.r(889239),n=e.r(84742),a=e.r(198373),o=e.r(536712),l=e.r(692152),s=e.r(231853),c=i?i.prototype:void 0,d=c?c.valueOf:void 0;t.exports=function(e,t,r,i,c,u,f){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!u(new n(e),new n(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var m=l;case"[object Set]":var p=1&i;if(m||(m=s),e.size!=t.size&&!p)break;var h=f.get(e);if(h)return h==t;i|=2,f.set(e,t);var x=o(m(e),m(t),i,c,u,f);return f.delete(e),x;case"[object Symbol]":if(d)return d.call(e)==d.call(t)}return!1}},804191,(e,t,r)=>{var i=e.r(577256),n=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,a,o,l){var s=1&r,c=i(e),d=c.length;if(d!=i(t).length&&!s)return!1;for(var u=d;u--;){var f=c[u];if(!(s?f in t:n.call(t,f)))return!1}var m=l.get(e),p=l.get(t);if(m&&p)return m==t&&p==e;var h=!0;l.set(e,t),l.set(t,e);for(var x=s;++u<d;){var y=e[f=c[u]],v=t[f];if(a)var b=s?a(v,y,f,t,e,l):a(y,v,f,e,t,l);if(!(void 0===b?y===v||o(y,v,r,a,l):b)){h=!1;break}x||(x="constructor"==f)}if(h&&!x){var g=e.constructor,j=t.constructor;g!=j&&"constructor"in e&&"constructor"in t&&!("function"==typeof g&&g instanceof g&&"function"==typeof j&&j instanceof j)&&(h=!1)}return l.delete(e),l.delete(t),h}},577256,(e,t,r)=>{var i=e.r(538916),n=e.r(40811),a=e.r(622335);t.exports=function(e){return i(e,a,n)}},40811,(e,t,r)=>{var i=e.r(856408),n=e.r(1107),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;t.exports=o?function(e){return null==e?[]:i(o(e=Object(e)),function(t){return a.call(e,t)})}:n},268829,(e,t,r)=>{var i=e.r(625106),n=e.r(696138),a=e.r(441298),o=e.r(340682),l=e.r(278166),s=e.r(912904),c=e.r(742186),d="[object Map]",u="[object Promise]",f="[object Set]",m="[object WeakMap]",p="[object DataView]",h=c(i),x=c(n),y=c(a),v=c(o),b=c(l),g=s;(i&&g(new i(new ArrayBuffer(1)))!=p||n&&g(new n)!=d||a&&g(a.resolve())!=u||o&&g(new o)!=f||l&&g(new l)!=m)&&(g=function(e){var t=s(e),r="[object Object]"==t?e.constructor:void 0,i=r?c(r):"";if(i)switch(i){case h:return p;case x:return d;case y:return u;case v:return f;case b:return m}return t}),t.exports=g},692152,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,i){r[++t]=[i,e]}),r}},517059,(e,t,r)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,r)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},949125,(e,t,r)=>{var i=e.r(190835);t.exports=function(e,t){return i(e,t)}},622335,(e,t,r)=>{var i=e.r(419188),n=e.r(758629),a=e.r(379858);t.exports=function(e){return a(e)?i(e):n(e)}},1107,(e,t,r)=>{t.exports=function(){return[]}}]);