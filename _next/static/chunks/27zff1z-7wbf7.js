(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,482384,e=>{var t=e.i(391398),r=e.i(974261),i=e.i(191788);class n{apiKey=r.e.map||"";channel;center;client;format;language;location;maptype;markers;paths;region;rootURL;scale;signature;size;style;visible;zoom;constructor({center:e,channel:t,client:r,format:i="png",language:n,location:a="",maptype:o="roadmap",markers:s=[],paths:l=[],region:d,rootURL:c="https://maps.googleapis.com/maps/api/staticmap",scale:u=1,signature:m,size:p="400x400",style:h,visible:f,zoom:x=15}){this.channel=t,this.center=e,this.client=r,this.format=i,this.language=n,this.location=a,this.maptype=o,this.markers=s,this.paths=l,this.region=d,this.rootURL=c,this.scale=u,this.signature=m,this.size=p,this.style=h,this.visible=f,this.zoom=x}urlBuilder(e,t,r){return t?"object"==typeof t?`${e}${r}${JSON.stringify(t)}`:`${e}${r}${t}`:null}renderBaseMap(){let e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));let t=e.filter(e=>e).join("&");return`${this.rootURL}?${t}`}locationBuilder(e){let t=[];if(Array.isArray(e)){let r=e.map(e=>this.locationBuilder(e));t.push(...r)}return("string"==typeof e||"number"==typeof e)&&t.push(encodeURI(String(e))),"object"==typeof e&&"lat"in e&&"lng"in e&&t.push(`${e.lat},${e.lng}`),t.join("%7C")}renderPath(e){let t=[];if(e.circle){var r;let i=(r=e.circle.latitude,function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,n=Math.PI,a="",o=e*n/180,s=t*n/180,l=r/1e3/6371;for(let e=0;e<=360;e+=i){let t=e*n/180,r=Math.asin(Math.sin(o)*Math.cos(l)+Math.cos(o)*Math.sin(l)*Math.cos(t)),i=(s+Math.atan2(Math.sin(t)*Math.sin(l)*Math.cos(o),Math.cos(l)-Math.sin(o)*Math.sin(r)))*180/n;a+=function e(t){let r=[];if(Array.isArray(t)){let i=t.map(t=>e(t));r.push(...i)}return("string"==typeof t||"number"==typeof t)&&r.push(String(t)),"object"==typeof t&&"lat"in t&&"lng"in t&&r.push(`${t.lat},${t.lng}`),r.join("%7C")}(180*r/n+","+i)}return encodeURI(a)}(r,e.circle.longitude,e.circle.radius));t.push(this.urlBuilder("",this.locationBuilder(`${i}`),""))}t.push(this.urlBuilder("color",e.color,":")),t.push(this.urlBuilder("weight",e.weight,":")),t.push(this.urlBuilder("fillcolor",e.fillcolor,":")),t.push(this.urlBuilder("geodesic",e.geodesic,":")),e.points&&t.push(this.urlBuilder("",this.locationBuilder(e.points),""));let i=t.filter(e=>e).join("%7C");return`path=${i}`}renderParts(){return this.paths.map(e=>this.renderPath(e))}renderMarkers(){let{markers:e,locationBuilder:t,location:r}=this;return(e.length?e.map(e=>{let r="markers=";switch(typeof e){case"string":r+=t.call(this,e);break;case"object":{let{colour:i,label:n,location:a}=e;r+=(i?`color:${i}|`:"")+(n?`label:${n}|`:"")+(a&&`${t.call(this,a)}|`)}}return r}):[`markers=${t.call(this,r)}`]).join("&")}generateUrl(){let e=this.renderParts()||[],t=this.renderBaseMap(),r=this.renderMarkers();return`${t}&${e}&${r}`}}e.s(["f",0,e=>{let{center:r,channel:a,className:o,client:s,container:l="img",format:d="png",language:c,location:u,maptype:m="roadmap",markers:p,paths:h,region:f,scale:x=1,signature:g,size:b="400x400",style:y,styleMap:j,visible:v,zoom:I=15}=e,[S,$]=b?b.split("x"):["400","400"],[C,w]=(0,i.useState)("");return(0,i.useEffect)(()=>{w(new n({center:r,channel:a,client:s,format:d,language:c,location:u,maptype:m,markers:p,paths:h,region:f,scale:x,signature:g,size:b,style:j,visible:v,zoom:I}).generateUrl())},[r,a,s,d,c,u,m,p,h,f,x,g,b,j,v,I]),(0,t.jsx)(l,{className:o,width:S,height:$,src:C,style:y,alt:"map"})}])},443919,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(280445),n=e.i(222351),a=e.i(738251),o=e.i(115871),s=e.i(755548),l=e.i(813843),d=e.i(741850),c=e.i(376733),u=e.i(411331),m=e.i(377198);let p=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var h=e.i(889231),f=e.i(396413);let x=(0,i.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,g=(0,i.f)("div")`
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
`,b=(0,i.f)("div")`
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
`;e.s(["f",0,e=>{let{avatar:i,editable:y=!0,entity:j,entityName:v,linkTitleTo:I,relatedParties:S,onEdit:$,refetch:C}=e,w=(0,u.f)(),[N,_]=(0,r.useState)(null),[M,k]=(0,r.useState)(!1),T=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!p.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),r=(t=t.replace(/^www\./,"")).split("/")[0];return r?.split(":")[0]||null}catch(e){return null}})(e);let r="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!r)return null;let i=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:r});return`https://img.logo.dev/${encodeURIComponent(t)}?${i.toString()}`})(j.website||j.manager?.email),R=S&&S.length>0,q=(0,m.f)(N);(0,r.useEffect)(()=>{i?(_(i),k(!1)):T?(_(T),k(!0)):(_(null),k(!1))},[i,T]);let A=e=>{let[t]=e;w.close(),_(t?.filename||null)};return(0,t.jsx)(x,{children:(0,t.jsxs)(l.f,{px:1.5,direction:"row",children:[(0,t.jsx)(l.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(g,{logoUrl:M,children:[(0,t.jsx)(n.f,{content:j?.name,src:q,onClick:y?()=>{w.show({content:(0,t.jsx)(f.f,{category:"avatar",entity:v,entityId:j?.id,filters:{category:"avatar"},onMediaAdd:A,refetch:C,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:y?"pointer":"default"}}),y&&(0,t.jsx)(b,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(l.f,{pl:1.5,flex:R?1:void 0,minWidth:R?0:void 0,children:[(0,t.jsxs)(o.f,{color:"text.primary",fontSize:17,children:[I?(0,t.jsx)(h.f,{href:I,sx:{color:"secondary.main"},children:j?.name}):j?.name,j?.description&&(j?.descriptionLink?(0,t.jsx)(h.f,{href:j?.descriptionLink,target:"_blank",underline:"none",children:(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:j?.description})}):(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:j?.description})),j?.website&&(0,t.jsx)(h.f,{href:j?.website.startsWith("http")?j?.website:`http://${j?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(d.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),R&&(0,t.jsxs)(l.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(a.f,{component:"span",children:"Related party: "}),S.map((e,r)=>(0,t.jsxs)("span",{children:[r>0&&", ",(0,t.jsx)(h.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),y&&!!$&&(0,t.jsxs)(s.f,{onClick:$,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),y&&!R&&(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-start",children:!!$&&(0,t.jsxs)(s.f,{onClick:$,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},938504,e=>{let t=e=>String(e).padStart(2,"0");e.s(["f",0,function(e){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=new Date(e),n=`${i.getFullYear()}-${t(i.getMonth()+1)}-${t(i.getDate())}`;return r?`${n} ${t(i.getHours())}:${t(i.getMinutes())}`:n}])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let r=t?.medium?.meta?.thumbnails,i=r?.find?.(e=>"small"===e.name);return i?.relativePath||t.medium.filename||null}])},63886,e=>{e.s(["f",()=>j],63886);var t=e.i(391398),r=e.i(871931),i=e.i(760981),n=e.i(302966),a=e.i(482384),o=e.i(795617),s=e.i(362407),l=e.i(411331),d=e.i(280445),c=e.i(760814),u=e.i(489129);let m=e=>{let{propertyId:r,propertyName:i}=e,n=(0,l.f)();return(0,t.jsx)(p,{onClick:()=>{n.show({title:"Property information",content:(0,t.jsx)(u.f,{propertyId:r,toggleShow:n.close})})},children:i})},p=c.U.a.withConfig({displayName:"property-link__StyledLink",componentId:"sc-d818312b-0"})`
  cursor: pointer;
  text-decoration: none;
`;var h=e.i(115871),f=e.i(747112),x=e.i(813843),g=e.i(740790),b=e.i(773831),y=e.i(376733);let j=e=>{let{access:r,address:a,edit:d=!1,entity:c,entityId:u,id:p,name:j,refetch:S,showMap:$=!1,showLink:C=!0,title:w="Address",type:N}=e,_=(0,l.f)(),M=e=>{e&&S&&S()},k=(0,o.D)(a);return(0,t.jsxs)(I,{defaultExpanded:!0,children:[(0,t.jsx)(n.f,{expandIcon:(0,t.jsx)(f.f,{}),children:(0,t.jsxs)(x.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(h.f,{typography:"h6",children:w}),d&&(0,t.jsx)(b.f,{onClick:e=>{e.stopPropagation(),_.show({content:(0,t.jsx)(s.f,{entity:c,entityId:u,id:p,onSubmit:M,addressId:a.id,type:N}),submit:!1,title:"Manage addresses"})},size:"small",children:(0,t.jsx)(y.default,{sx:{height:"17px",width:"17px"}})})]})}),(0,t.jsx)(i.f,{sx:{pt:0},children:(0,t.jsxs)(g.f,{container:!0,children:[(0,t.jsxs)(g.f,{item:!0,xs:6,children:[j&&(0,t.jsxs)(x.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Property"}),(0,t.jsx)(h.f,{variant:"body2",children:C?(0,t.jsx)(m,{propertyId:u,propertyName:j}):j})]}),"invoice"===N&&a.invoicingEntity&&(0,t.jsxs)(x.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Invoicing Entity"}),(0,t.jsx)(h.f,{variant:"body2",children:a.invoicingEntity})]}),a.name&&"invoice"!==N&&(0,t.jsxs)(x.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Name"}),(0,t.jsx)(h.f,{variant:"body2",children:a.name})]}),(0,t.jsx)(h.f,{color:"text.secondary",children:"Address"}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.addressLine1}),a.addressLine2&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.addressLine2}),a.addressLine3&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.addressLine3}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.city}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.postCode}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.county}),r&&(0,t.jsxs)(x.f,{spacing:.5,children:[(0,t.jsx)(h.f,{variant:"subtitle2",children:"Access"}),(0,t.jsx)(h.f,{variant:"body2",children:r})]})]}),(0,t.jsx)(g.f,{item:!0,xs:6,children:$&&(0,t.jsx)(v,{center:k,location:k,markers:[k],style:{width:"100%",height:"auto"}})})]})})]})},v=(0,d.f)(a.f)(e=>{let{theme:t}=e;return{display:"block",maxWidth:"250px",width:"100%",height:"auto",marginLeft:"4px",border:`1px solid ${t.palette.secondary.main}`,borderRadius:"10px"}}),I=(0,d.f)(r.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`},681700,201609,642546,e=>{var t,r=e.i(391398),i=e.i(432171),n=e.i(159080);let a=n.f`
  query GetNotes($entity: String!, $entityId: Int!, $limit: Int, $offset: Int) {
    note: Note(
      where: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
      order_by: { createdAt: desc }
      limit: $limit
      offset: $offset
    ) {
      accountId
      comments
      createdAt
      id
      userId
      user: User {
        nameFirst
        nameLast
      }
    }
  }
`,o=n.f`
  mutation AddNote(
    $accountId: Int
    $comments: String
    $entity: String
    $entityId: Int
    $userId: Int
  ) {
    insert_Note(
      objects: {
        accountId: $accountId
        comments: $comments
        entity: $entity
        entityId: $entityId
        userId: $userId
      }
    ) {
      returning {
        id
        comments
      }
    }
  }
`,s=n.f`
  mutation UpdateNote($id: Int!, $change: Note_set_input) {
    update_Note_by_pk(pk_columns: { id: $id }, _set: $change) {
      id
      comments
    }
  }
`;var l=e.i(422411),d=e.i(424894),c=e.i(813843),u=e.i(115871),m=e.i(652148),p=e.i(426778);let h=(0,p.t)().shape({comments:(0,p.x)().required()});var f=e.i(776204),x=e.i(21557),g=e.i(594301);let b=e=>{let{defaultValues:t,refetchQueries:i,noteId:n,entity:a,entityId:p,close:b}=e,j=(0,x.f)(),{user:v}=(0,g.f)(),{errors:I,handleSubmit:S,register:$}=(0,l.G)({defaultValues:{...t},resolver:(0,d.yupResolver)(h)}),[C]=(0,f.f)(o,{refetchQueries:i,onCompleted:()=>{j.show({content:"Note added successfully",severity:"success"}),b()},onError:e=>{j.show({content:`Error: ${e.message}`,severity:"error"})}}),[w]=(0,f.f)(s,{refetchQueries:i,onCompleted:()=>{j.show({content:"Note updated successfully",severity:"success"}),b()},onError:e=>{j.show({content:`Error: ${e.message}`,severity:"error"})}}),N=async e=>{n?await w({variables:{id:n,change:{...e,accountId:v.accountId,userId:v.id}}}):await C({variables:{accountId:v.accountId,comments:e.comments,entity:a,entityId:p,userId:v.id}})};return(0,r.jsx)("form",{id:"offCanvasForm",onSubmit:S(N),children:(0,r.jsxs)(c.f,{marginBottom:3,children:[(0,r.jsx)(u.f,{sx:{...y.title,marginBottom:2},children:"Title"}),(0,r.jsx)(m.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",placeholder:"Comments",name:"comments",inputRef:$,error:!!I.comments,helperText:I.comments?.message})]})})},y={title:{fontSize:"16px",fontWeight:300,marginBottom:"15px",color:"gray"}};var j=e.i(74633),v=e.i(362537),I=e.i(497844),S=e.i(285835);let $=e=>{let{note:t=[],loading:i,handleClick:n,userId:a,reference:o}=e,s=[{field:"comments",headerName:"Title",flex:1,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(c.f,{direction:"row",overflow:"auto",height:"100%",paddingTop:2,children:(0,r.jsx)(c.f,{overflow:"auto",children:(0,r.jsx)(S.f,{maxLength:10,children:t.comments})})})}},{field:"user",headerName:"By",flex:1,sortable:!1},{field:"date",headerName:"Created",flex:1,sortable:!1},{field:"actions",headerName:"",width:50,sortable:!1,renderCell:e=>{let{row:t}=e;return a===t.userId?(0,r.jsx)(I.f,{actions:[{icon:"edit",onClick:e=>{e.stopPropagation(),n(e,t)},tooltip:"Edit"}]}):null}}];return(0,r.jsx)(j.s,{...o,columns:s,loading:i,rows:t.map(e=>({id:e.id,userId:e.userId,comments:e.comments,user:`${e.user?.nameFirst} ${e.user?.nameLast}`,date:(0,v.default)(e.createdAt).format("DD/MM/YYYY"),actions:""})),autoHeight:!0})};var C=e.i(411331),w=e.i(871931),N=e.i(760981),_=e.i(302966),M=e.i(886779),k=e.i(356119),T=e.i(747112),R=e.i(280445),q=e.i(755548),A=e.i(122965);let E=(0,R.f)(w.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{entity:t,entityId:n,title:o="Note"}=e,s=(0,C.f)(),{user:l}=(0,g.f)(),{reference:d,pagination:c}=(0,A.f)({initialSort:[{item:"createdAt",order:"desc"}]}),{loading:u,data:{note:m}={note:[]}}=(0,i.t)(a,{variables:{entity:t,entityId:n,...c},skip:!n}),p=(e,i)=>{e.preventDefault(),e.stopPropagation();let a={...i};s.show({content:(0,r.jsx)(b,{defaultValues:a,noteId:i?.id,entity:t,entityId:n,close:s.close,refetchQueries:["GetNotes"]}),title:i?.id?"Edit note":"Add note"})};return(0,r.jsxs)(E,{defaultExpanded:!0,children:[(0,r.jsx)(_.f,{expandIcon:(0,r.jsx)(T.f,{}),children:(0,r.jsx)(M.f,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",pr:1,children:(0,r.jsx)(k.f,{typography:"h6",children:o})})}),(0,r.jsxs)(N.f,{sx:{pt:0},children:[(0,r.jsx)($,{note:m,reference:d,loading:u,handleClick:p,userId:l.id}),(0,r.jsx)(()=>(0,r.jsx)(M.f,{width:"100%",pt:2,justifyContent:"center",alignItems:"center",children:(0,r.jsx)(q.f,{variant:"contained",color:"secondary",onClick:e=>p(e),size:"small",children:"Add"})}),{})]})]})}],681700);var D=e.i(191788),L=e.i(203828),F=e.i(472552),W=e.i(443103),O=e.i(88152),P=e.i(76381),B=e.i(891723),z=e.i(877341),U=e.i(890350);let V=`
  id
  invoiceNumber
  type
  number
  status
  description
  reference
  timingStart
  scheduledAt
  createdAt
  onSiteTimingEnd
  jobReportTimingEnd
  quoteReturnedTimingEnd
  revenue
  customerTotal: customerFinances(path: "amountInfo.total")
  supplierTotal: supplierFinances(path: "amountInfo.total")
  customerVatTotal: customerFinances(path: "amountInfo.vatTotal")
  supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")
  customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")
  supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")
  customerRebateAmount: customerFinances(path: "rebate.amount")
  slaId
  tags: Taxonomy(
    where: {
      entity: { _eq: "Job" }
      Taxonomy: { status: { _eq: "active" }, type: { _eq: "tags" } }
    }
  ) {
    id
    createdAt
    meta
    tag: Taxonomy {
      id
      name
      meta
      type
    }
  }
  invoiceNumber
  customer: Customer {
    id
    name
  }
  supplier: Supplier {
    id
    name
  }
  location: Location {
    id
    name
    manager: Manager {
      id
      fullName
    }
  }
  sublocation: Sublocation {
    id
    name
  }
  sla: SLA {
    name
  }
  manager: Manager {
    fullName
    nameLast
    nameFirst
    id
  }
  service: Service {
    id
    name
  }
`,Y=n.f`
  query GetFinancialJob($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      amountOutstanding
      ${V}
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,J=n.f`
  query GetFinancialJobSupplier($where: Job_bool_exp, $limit: Int, $offset: Int, $order: [Job_order_by!]) {
    jobs: Job(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      amountOutstandingSupplier
      ${V}
    }
    meta: Job_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var G=e.i(948574),H=e.i(498681),K=e.i(218659),Q=e.i(529422),X=e.i(60903),Z=e.i(951510),ee=e.i(879436),et=e.i(938504);let er=function(e,t){let{numberPrefix:r="",numberSuffix:i="",omitFinancialColumnsFromExport:n=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a="customer"===t||"tenant"===t,o="supplier"===t;return e.map(e=>{let t=e.manager?`${e.manager.nameFirst} ${e.manager.nameLast}`:"Unassigned",s=e.scheduledAt?(0,et.f)(e.scheduledAt,!0):e.timingStart?(0,et.f)(e.timingStart,!0):"-",l=e.customerRebateAmount>0?e.customerVatTotal-e.customerRebateAmount-e.supplierTotal:e.customerTotal-e.supplierTotal;return o?{id:`${r} ${e.number} ${i}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",scheduleDate:s,created:(0,et.f)(e.createdAt),status:e.status}:a?{id:`${r} ${e.number} ${i}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",ref:e.reference,...n?{}:{jobTotal:(0,ee.f)(e.customerVatTotal)||0,expensesAmountCustomer:(0,ee.f)(e.customerExpensesTotal)||0},priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",manager:t,location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",scheduleDate:s,created:(0,et.f)(e.createdAt),status:e.status}:{id:`${r} ${e.number} ${i}`,type:e.type,invoiceNumber:e.invoices?.[0]?.invoiceNumber||"-",ref:e.reference,...n?{}:{jobTotal:(0,ee.f)(e.customerVatTotal)||0,expensesAmountCustomer:(0,ee.f)(e.customerExpensesTotal)||0,supplierAmount:(0,ee.f)(e.supplierVatTotal)||0,expensesAmountSupplier:(0,ee.f)(e.supplierExpensesTotal)||0,revenue:(0,ee.f)(l)||0},priority:e.sla?.name||"-",service:e.service?.name||"-",description:e.description||"-",manager:t,location:e.location?.name||"-",sublocation:e.sublocation?.name||"-",supplier:e.supplier?.name||"-",scheduleDate:s,created:(0,et.f)(e.createdAt),status:e.status}})};var ei=e.i(93198),en=e.i(889231),ea=e.i(360364),eo=e.i(624841),es=e.i(799083),el=e.i(152078),ed=e.i(683125),ec=e.i(740790),eu=e.i(514707),em=e.i(722394),ep=e.i(10945),eh=e.i(824451),ef=e.i(655477);let ex={customerId:null,endDate:null,slaId:null,locationId:null,sublocationId:null,managerId:null,tags:null,startDate:null,status:null,supplierId:null,userId:null,customerManager:null,customerManagerId:null,locationManager:null,locationManagerId:null,showCanceled:!1,q:null,id:null,meta:null,jobNumber:null,invoiceNumber:null,isChangedStatusSelect:null,noAssignToMeFilter:null},eg=e=>{let{filters:t,defaultFilters:r}=e,i=[];return(t.q||r.q)&&i.push({_or:[{reference:{_ilike:t.q||r.q}},{title:{_ilike:t.q||r.q}},{number:{_ilike:t.q||r.q}},{Invoices:{invoiceNumber:{_ilike:t.q||r.q}}}]}),(t.startDate||t.endDate||r.startDate||r.endDate)&&i.push({_or:[{_and:[{timingStart:{_gte:t.startDate||r.startDate}},{timingStart:{_lte:t.endDate||r.endDate}}]},{_and:[{scheduledAt:{_gte:t.startDate||r.startDate}},{scheduledAt:{_lte:t.endDate||r.endDate}}]}]}),(t.status?.length||r.status?.length)&&i.push({status:{_in:t.status||r.status}}),(t.customerId||r.customerId)&&i.push({customerId:{_eq:t.customerId||r.customerId}}),(t.supplierId||r.supplierId)&&i.push({supplierId:{_eq:t.supplierId||r.supplierId}}),(t.managerId||r.managerId)&&i.push({managerId:{_eq:t.managerId||r.managerId}}),(t.locationId||r.locationId)&&i.push({locationId:{_eq:t.locationId||r.locationId}}),(t.sublocationId||r.sublocationId)&&i.push({sublocationId:{_eq:t.sublocationId||r.sublocationId}}),(t.locationManagerId||r.locationManagerId)&&i.push({Location:{managerId:{_eq:t.locationManagerId||r.locationManagerId}}}),(t.userId||r.userId)&&i.push({_or:[{customerUserId:{_eq:t.userId||r.userId}},{supplierUserId:{_eq:t.userId||r.userId}}]}),(t.tags||r.tags)&&i.push({Taxonomy:{_and:[{entity:{_eq:"Job"}},{Taxonomy:{status:{_eq:"active"},_and:[{id:{_in:t.tags||r.tags}},{type:{_eq:"tags"}}]}}]}}),(t.showCanceled??r.showCanceled)||i.push({status:{_neq:"canceled"}}),{type:{_in:["reactive","ppm"]},_and:i}},eb=(e,t)=>t?e.map(e=>{if("amountOutstanding"in e){let{amountOutstanding:t}=e;return{amountOutstandingSupplier:t}}return e}):e;e.s(["P",0,ex,"m",0,eb,"N",0,eg],201609);var ey=e.i(827010),ej=e.i(851123);let ev=e=>{let{open:t=!1,close:i=()=>{},filterType:n="",setFilters:a=()=>{},initialFilters:o={...ex,filterType:""},filtersVisibilityModel:s={}}=e,{hasRole:d,user:u}=(0,g.f)(),{query:p}=(0,L.useRouter)(),[h,f]=(0,ep.f)({key:`form_data_issues_${n}`,initialValue:{...ex}}),{control:x,handleSubmit:b,register:y,reset:j,watch:v,getValues:I}=(0,l.G)({defaultValues:h}),S=v("locationId"),{customerValues:$,userValues:C,supplierValues:w,slaValues:N,sublocationValues:_,customerManagerValues:M,locationManagerValues:k,propertyValues:T}=(e=>{let{initialFilters:t,locationIdWatch:r}=e,{user:i}=(0,g.f)(),[n,a]=(0,D.useState)(""),[o,s]=(0,D.useState)(""),[l,d]=(0,D.useState)(""),[c,u]=(0,D.useState)(""),[m,p]=(0,D.useState)(""),[h,f]=(0,D.useState)(""),[x,b]=(0,D.useState)(""),[y,j]=(0,D.useState)(""),[v,{loading:I,data:{items:S}={items:[]}}]=(0,z.f)(ey.Q,{fetchPolicy:"network-only",variables:{accountId:i.accountId,limit:50,offset:0,q:""!==l?`%${l}%`:null}}),[$,{loading:C,data:{items:w}={items:[]}}]=(0,z.f)(ey.k,{fetchPolicy:"network-only",variables:{adminId:i.adminId,subtype:"reactive",limit:50,offset:0,q:""!==h?`%${h}%`:null}}),[N,{loading:_,data:{items:M}={items:[]}}]=(0,z.f)(ey.r,{variables:{limit:50,offset:0,q:""!==c?`%${c}%`:null}}),[k,{loading:T,data:{items:R}={items:[]}}]=(0,z.f)(ej.j,{variables:{where:{status:{_eq:"active"},Account_Locations:{accountId:{_eq:t.customerId}},name:{_ilike:""!==m?`%${m}%`:null}},limit:50,offset:0}}),[q,{loading:A,data:{items:E}={items:[]}}]=(0,z.f)(ey.j,{variables:{locationId:r?.value,limit:50,offset:0,q:""!==x?`%${x}%`:null}}),[L,{loading:F,data:{items:W}={items:[]}}]=(0,z.f)(ey.U,{variables:{where:{type:{_eq:"supplier"},name:{_ilike:""!==y?`%${y}%`:null}},limit:50,offset:0}}),[O,{data:{items:P}={items:[]},loading:B}]=(0,z.f)(ey.O,{variables:{accountId:i.accountId,limit:50,offset:0,q:""!==n?`%${n}%`:null}}),[U,{data:{items:V}={items:[]},loading:Y}]=(0,z.f)(ey.Q,{variables:{accountId:i.adminId,limit:50,offset:0,q:""!==o?`%${o}%`:null}});return{customerManagerValues:{loading:B,onOpen:()=>O(),options:P,onSearchChange:a},locationManagerValues:{loading:Y,onOpen:()=>U(),options:V,onSearchChange:s},userValues:{loading:I,onOpen:()=>v(),options:S,onSearchChange:d},customerValues:{loading:_,onOpen:()=>N(),options:M,onSearchChange:u},propertyValues:{loading:T,onOpen:()=>k(),options:R,onSearchChange:p},slaValues:{loading:C,onOpen:()=>$(),options:w,onSearchChange:f},sublocationValues:{loading:A,onOpen:()=>q(),options:E,onSearchChange:b},supplierValues:{loading:F,onOpen:()=>L(),options:W,onSearchChange:j}}})({initialFilters:o,locationIdWatch:S});(0,D.useEffect)(()=>{let e={filterType:o.filterType,customerId:h?.customerId?.value||null,endDate:h?.endDate||null,slaId:h?.slaId?.map(e=>{let{value:t}=e;return t})||null,locationId:h?.locationId?.value||null,sublocationId:h?.sublocationId?.value||null,managerId:h?.managerId?u.id:null,tags:h?.tags?.map(e=>{let{value:t}=e;return t})||null,startDate:h?.startDate||null,status:h?.status&&h?.status?.length>0?h.status.map(e=>{let{value:t}=e;return t}):null,supplierId:h.supplierId?.value||null,userId:h?.userId?.value||null,customerManagerId:h?.customerManager?.value||null,locationManagerId:h?.locationManager?.value||null,showCanceled:h?.showCanceled??!1,q:h?.q?`%${h.q}%`:null,id:h?.q&&"id"in o&&/^\d+$/.test(h.q)?Number(h.q):null,meta:h?.q&&"meta"in o&&/^\d+$/.test(h.q)?{invoiceNumbers:[h.q]}:null,jobNumber:h?.q&&"jobNumber"in o&&/^\d+$/.test(h.q)?String(h.q):null,invoiceNumber:h?.q&&"jobNumber"in o&&/^\d+$/.test(h.q)?Number(h.q):null,isChangedStatusSelect:!!h.status?.length||null};j({...h}),a(e)},[h,o,j,a,u.id]);let R=e=>{let t=!0;return e in s&&!s[e]&&(t=!1),t};return(0,r.jsx)(eS,{keepMounted:!0,open:t,onClose:i,sx:eI.modal,children:(0,r.jsx)("form",{onSubmit:b(()=>{try{let e=I();f(e)}finally{i()}}),children:(0,r.jsx)(e$,{children:(0,r.jsxs)(ec.f,{container:!0,rowSpacing:2,columnSpacing:2,children:[(0,r.jsx)(ec.f,{item:!0,xs:12,children:(0,r.jsx)(m.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:y})}),R("status")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"status",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{value:t||[],onChange:(e,t)=>i(t),multiple:!0,limitTags:1,label:"Select status",options:(0,Z.D)(p.show),variant:"standard",color:"secondary",fullWidth:!0})}})}),d(["supplier",...G.z])&&R("user")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"userId",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{...C,value:t,onChange:(e,t)=>i(t),label:"Select user",variant:"standard",color:"secondary",fullWidth:!0})}})}),d("admin")&&R("tags")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(ef.f,{control:x})}),d("admin")&&R("customer")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"customerId",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{...$,value:t,onChange:(e,t)=>i(t),label:"Select customer",variant:"standard",color:"secondary",fullWidth:!0})}})}),d(["admin","customer"])&&R("location")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"locationId",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{...T,value:t,onChange:(e,t)=>i(t),label:"Select location",variant:"standard",color:"secondary",fullWidth:!0})}})}),d("admin")&&R("supplier")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"supplierId",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{...w,value:t,onChange:(e,t)=>i(t),label:"Select supplier",variant:"standard",color:"secondary",fullWidth:!0})}})}),R("sla")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"slaId",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{...N,multiple:!0,limitTags:1,value:t||[],onChange:(e,t)=>i(t),label:"Select priority",variant:"standard",color:"secondary",fullWidth:!0})}})}),S&&d("admin")&&R("sublocation")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"sublocationId",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{..._,value:t,onChange:(e,t)=>i(t),label:"Select sublocation",variant:"standard",color:"secondary",fullWidth:!0})}})}),d([...G.f,...G.G])&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"locationManager",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{...k,value:t,onChange:(e,t)=>i(t),color:"secondary",variant:"standard",label:"Select location manager",fullWidth:!0})}})}),(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"startDate",control:x,render:e=>(0,r.jsx)(eC,{...e,label:"Start date",slotProps:{textField:{variant:"standard"}}})})}),(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"endDate",control:x,render:e=>(0,r.jsx)(eC,{...e,label:"End date",slotProps:{textField:{variant:"standard"}}})})}),d([...G.f])&&R("customerManager")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"customerManager",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(eh.f,{...M,value:t,onChange:(e,t)=>i(t),color:"secondary",variant:"standard",label:"Select account manager",fullWidth:!0})}})}),d([...G.f,...G.z,...G.Q])&&R("manager")&&(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"managerId",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(el.f,{control:(0,r.jsx)(es.f,{color:"secondary",checked:t,onChange:e=>i(e.target.checked)}),label:"Assigned to me"})}})}),(0,r.jsx)(ec.f,{item:!0,xs:12,md:6,children:(0,r.jsx)(l.e,{name:"showCanceled",control:x,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(el.f,{control:(0,r.jsx)(es.f,{color:"secondary",checked:t,onChange:e=>i(e.target.checked)}),label:"Include canceled jobs"})}})}),(0,r.jsxs)(c.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:eI.bottomButtons,children:[(0,r.jsx)(q.f,{variant:"contained",color:"danger",onClick:()=>void(f({...ex}),i()),children:"Cancel"}),(0,r.jsx)(q.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})})},eI={modal:{width:"40%"},bottomButtons:{marginTop:"20px"}},eS=(0,eu.f)(ed.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),e$=(0,eu.f)(O.f)(()=>({padding:"24px",maxWidth:"700px",maxHeight:"100vh",overflowY:"scroll"})),eC=(0,eu.f)(em.f)(()=>({"&.MuiFormControl-root.MuiTextField-root":{width:"100%"}}));var ew=((t=ew||{}).Service="{'Service': {'name': 'ORDER'}}",t.SLA="{'SLA': {'name': 'ORDER'}}",t.Customer="{'Customer': {'name': 'ORDER'}}",t.Location="{'Location': {'name': 'ORDER'}}",t.LocationManager="{'Location': {'Manager': {'fullName': 'ORDER'}}}",t.Supplier="{'Supplier': {'name': 'ORDER'}}",t);let eN={width:"100%",height:"100%"},e_={padding:"16px 0px",height:"calc(80vh - 22px)"},eM={fontWeight:600,marginBottom:"15px"};e.s(["f",0,e=>{let{initialFilters:t,defaultFilters:n={},filtersVisibilityModel:a,columnVisibilityModel:o={}}=e,{user:s,hasRole:l}=(0,g.f)(),d=(0,H.f)(),m=d.admin.jobSetting?.jobNumberPrefix||"",p=d.admin.jobSetting?.jobNumberSuffix||"",{pathname:h}=(0,L.useRouter)(),[f,x]=(0,D.useState)(!1),[b,y]=(0,D.useState)({...t}),S=(0,ei.r)(),$=l("admin_user"),C=s.accountType===U.d.SUPPLIER,w=d.hasUserModule("finances"),N=(0,D.useMemo)(()=>s.accountType===U.d.SUPPLIER?J:Y,[s.accountType]),_=l("admin")&&!$||l("customer")&&(!l("customer_user")||w)||$&&w,M=l("admin")&&!$||l(["supplier_owner","supplier_manager","supplier_user"])||l("supplier_contractor")&&w||$&&w,k=l("admin")&&(!$||w),T=(0,D.useRef)({numberPrefix:m,numberSuffix:p,accountType:s.accountType,omitFinancialColumnsFromExport:!1});T.current={numberPrefix:m,numberSuffix:p,accountType:s.accountType,omitFinancialColumnsFromExport:$&&!w};let{reference:R,pagination:E,order:V}=(0,A.f)(),ee=(0,D.useMemo)(()=>eg({filters:b,defaultFilters:n}),[b,n]),et=(0,D.useMemo)(()=>eb(V,C),[C,V]),{data:{jobs:es,meta:el}={jobs:[],meta:{aggregate:{totalCount:0}}},loading:ed}=(0,i.t)(N,{variables:{where:ee,...E,order:et}}),[ec,{loading:eu}]=(0,z.f)(N,{variables:{where:ee,order:et},onCompleted:e=>{let t=T.current,r=er(e.jobs,t.accountType,{numberPrefix:t.numberPrefix,numberSuffix:t.numberSuffix,omitFinancialColumnsFromExport:t.omitFinancialColumnsFromExport}),i=e.jobs[0]?.id||"New-report",n="data:application/octet-stream,"+encodeURIComponent(F.default.unparse(r,{escapeFormulae:/^[=+@\t\r]/}));(0,X.f)(n,`${i}-work-orders.csv`)}}),em=(0,D.useCallback)(e=>{L.default.push(`/dashboard/issues/manage?id=${e.number}`)},[]),ep=(0,D.useCallback)(e=>{e?.number&&L.default.push(`/dashboard/issues/view?id=${e.number}`)},[]),eh=(0,D.useCallback)(e=>l("admin")?[{icon:"info",tooltip:"Info",onClick:()=>ep(e)},{icon:"edit",tooltip:"Edit",onClick:()=>em(e)}]:[{icon:"info",tooltip:"Info",onClick:()=>ep(e)}],[ep,em,l]),ef=(0,D.useMemo)(()=>[{headerName:"Job ID",field:"number",sortable:!0,flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(Q.f,{id:t.id,number:t.number,openCanvas:!0,type:t.type,numberPrefix:m,numberSuffix:p})}},{headerName:"Invoice number",field:"invoiceNumber",sortable:!0,flex:1,minWidth:100},{headerName:"Reference",field:"ref",sortable:!1,flex:1,minWidth:100},{minWidth:300,field:"tags",headerName:"Tags",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(ea.f,{row:t,refetchQueries:["GetFinancialJob","GetFinancialJobSupplier"],entity:"Job"})}},{headerName:"Service",field:"{'Service': {'name': 'ORDER'}}",sortable:!0,flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return t.service}},{headerName:"Priority",field:"{'SLA': {'name': 'ORDER'}}",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return t.priority}},{headerName:"Customer",field:"{'Customer': {'name': 'ORDER'}}",minWidth:200,flex:1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(en.f,{color:"secondary",href:`/dashboard/customers/view?id=${t.customer?.id}`,noWrap:!t.customer,children:t.customer?.name||"-"})}},{headerName:"Location",field:"{'Location': {'name': 'ORDER'}}",minWidth:300,flex:1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(en.f,{color:"secondary",href:`/dashboard/properties/view?id=${t.location?.id}`,noWrap:!t.location||l(["supplier","tenant"]),children:t.location?.name||"-"})}},{minWidth:180,flex:1,field:"{'Location': {'Manager': {'fullName': 'ORDER'}}}",headerName:"Location Manager",renderCell:e=>{let{row:t}=e;return(0,r.jsx)(en.f,{noWrap:!t.location?.manager?.id,color:"secondary",href:`/dashboard/users/view?id=${t.location?.manager?.id}`,children:t.location?.manager?.fullName})}},{headerName:"Customer (NET)",field:"customerTotal",minWidth:150,sortable:!0,flex:1,renderCell:e=>{let{row:t}=e;return`\xa3${(+(t.customerNet??0)).toFixed(2)}`}},{headerName:"Amount Outstanding",field:"amountOutstanding",sortable:!0,minWidth:150,flex:1,valueFormatter:e=>`\xa3${(+(e??0)).toFixed(2)}`},{headerName:"Supplier (NET)",field:"supplierTotal",minWidth:150,sortable:!0,flex:1,renderCell:e=>{let{row:t}=e;return`\xa3${(+(t.supplierNet??0)).toFixed(2)}`}},{headerName:l("admin")?"Net Revenue":"Revenue",field:"revenue",minWidth:150,sortable:!0,flex:1,valueFormatter:e=>`\xa3${(+(e??0)).toFixed(2)}`},{headerName:"Scheduled",field:"scheduledAt",minWidth:130,flex:1},{headerName:"Created",field:"createdAt",flex:1,minWidth:100},{headerName:"Supplier",field:"{'Supplier': {'name': 'ORDER'}}",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(en.f,{color:"secondary",noWrap:!l("admin")||!t.supplier,href:`/dashboard/suppliers/view?id=${t.supplier?.id}`,children:t.supplier?.name||""})}},{headerName:"Status",field:"status",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(eo.f,{value:t.status})}},{headerName:"Actions",field:"actions",sortable:!1,minWidth:130,flex:1,renderCell:e=>{let{row:t}=e;return(0,r.jsx)(I.f,{actions:eh(t)})}}],[eh,l,m,p]),ex=(0,D.useMemo)(()=>es.map(e=>{let t=e.scheduledAt?(0,v.default)(e.scheduledAt).format("YYYY-MM-DD"):e.timingStart?(0,v.default)(e.timingStart).format("YYYY-MM-DD"):"-";return{id:e.id,jobId:`J ${e.number} `,type:e.type,number:e.number,invoiceNumber:e.invoiceNumber||"-",amountOutstanding:e.amountOutstanding??e.amountOutstandingSupplier??0,ref:e.reference||"-",description:e.description||"-",service:e.service?.name||"-",priority:e.sla?.name||"-",location:e?.location,customerNet:e?.customerTotal,supplierNet:e?.supplierTotal,supplier:e?.supplier,tags:e.tags,onSiteTimingEnd:e.onSiteTimingEnd,jobReportTimingEnd:e.jobReportTimingEnd,quoteReturnedTimingEnd:e.quoteReturnedTimingEnd,revenue:e.revenue||0,scheduledAt:t,customer:e?.customer,createdAt:(0,v.default)(e.createdAt).format("YYYY-MM-DD"),status:e.status}}),[es]),ey=(0,D.useCallback)(e=>{e.stopPropagation();let r=(0,Z.W)({...b,customerId:t.customerId,locationId:t.locationId});L.default.push(`/dashboard/issues/manage${r}`)},[b,t]),ej=(0,D.useMemo)(()=>({ref:l([...G.O]),"{'Service': {'name': 'ORDER'}}":l(["admin","customer"]),customerTotal:_,supplierTotal:M,revenue:k,"{'Supplier': {'name': 'ORDER'}}":l("admin"),tags:l("admin"),"{'Customer': {'name': 'ORDER'}}":h.includes("suppliers")&&l("admin"),"{'Location': {'Manager': {'fullName': 'ORDER'}}}":l(["admin","customer"]),...o}),[o,l,h,_,k,M]),eI=(0,D.useMemo)(()=>W.isEqual(b,t)?{title:"No work orders",subtitleFirstLine:"You currently have no work orders set up in the system",subtitleSecondLine:"Click create work orders to get started building.",buttonText:"Create work orders",onAction:ey}:{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."},[b,ey,t]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ev,{open:f,close:()=>x(!1),initialFilters:t,filterType:t.filterType,setFilters:y,filtersVisibilityModel:a}),(0,r.jsxs)(c.f,{spacing:2,sx:eN,children:[(0,r.jsxs)(c.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(q.f,{variant:"contained",startIcon:(0,r.jsx)(B.default,{}),onClick:()=>x(!0),children:"Filters"}),(0,r.jsxs)(c.f,{direction:"row",spacing:2,children:[!l(["supplier","tenant"])&&(0,r.jsx)(q.f,{variant:"contained",color:"secondary",onClick:ey,children:"Create Work Order"}),!S&&(0,r.jsx)(q.f,{startIcon:!eu&&(0,r.jsx)("img",{src:"/static/icons/csv.svg"}),disabled:eu,variant:"contained",color:"success",onClick:e=>{e.stopPropagation(),ec()},children:eu?(0,r.jsx)(P.f,{size:20,color:"secondary"}):"Export"})]})]}),(0,r.jsxs)(O.f,{sx:e_,children:[(0,r.jsx)(u.f,{ml:2,variant:"h5",sx:eM,children:"Work Orders"}),(ex?.length||ed)&&(0,r.jsx)(j.s,{...R,loading:ed,columns:ef,rows:ex,totalCount:el?.aggregate?.totalCount,columnVisibilityModel:ej,autoHeight:!1,onRowClick:e=>ep(e.row),containerHeight:"calc(100% - 52px)"}),!ex?.length&&!ed&&(0,r.jsx)(K.f,{imageSrc:"/static/icons/no_locations_found.svg",...eI})]})]})]})}],642546)},489129,e=>{e.s(["f",()=>p]);var t=e.i(391398),r=e.i(191788),i=e.i(432171),n=e.i(203828),a=e.i(553875),o=e.i(76381),s=e.i(436703),l=e.i(847474),d=e.i(946894),c=e.i(443919),u=e.i(757157),m=e.i(63886);let p=e=>{let{propertyId:p,toggleShow:h}=e,f=(0,n.useRouter)();(0,r.useEffect)(()=>{let e=()=>{h()};return f.events.on("routeChangeComplete",e),()=>{f.events.off("routeChangeComplete",e)}},[f.events,h]);let{loading:x,data:{location:g}={location:null}}=(0,i.t)(d.f,{variables:{id:p}}),b=(0,r.useMemo)(()=>g?.customer.find(e=>"primary"===e.linkType)?.account,[g]),y=(0,l.w)(g,"registered"),j=(0,l.w)(g,"invoice"),v=(0,r.useMemo)(()=>({accountName:b?.name,country:y?.address?.country?.name,createdAt:g?.createdAt,fullName:g?.user?.fullName,phone:g?.user?.phone}),[b?.name,g,y]);return x?(0,t.jsx)(a.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(o.f,{color:"secondary"})}):g?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{avatar:(0,s.f)(b?.media),editable:!1,entity:{id:g.id,description:b?.name,name:g.name},entityName:"Location",linkTitleTo:`/dashboard/properties/view?id=${g.id}`}),(0,t.jsx)(u.f,{contactUser:v}),y&&(0,t.jsx)(m.f,{address:y.address,edit:!1,entity:"Location",entityId:g.id,id:y.id,showMap:!0,title:"Address",type:"registered"}),j&&(0,t.jsx)(m.f,{address:j.address,edit:!1,entity:"Location",entityId:g.id,id:j.id,title:"Invoice address",type:"invoice"})]}):null}},946894,757157,e=>{var t=e.i(159080);let r=t.f`
  query GetProperty($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      createdAt
      name
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        id
        registered
        invoice
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
      customer: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          name
          media: Media {
            id
            medium: Medium {
              id
              category
              filename
              meta
            }
          }
        }
      }
      user: User {
        id
        fullName
        phone
      }
    }
  }
`;e.s(["f",0,r],946894);var i=e.i(391398),n=e.i(871931),a=e.i(760981),o=e.i(302966),s=e.i(280445),l=e.i(115871),d=e.i(747112),c=e.i(813843),u=e.i(740790),m=e.i(65295);let p=(0,s.f)(n.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{contactUser:t}=e;return(0,i.jsxs)(p,{defaultExpanded:!0,children:[(0,i.jsx)(o.f,{expandIcon:(0,i.jsx)(d.f,{}),children:(0,i.jsx)(c.f,{direction:"row",alignItems:"center",spacing:1,children:(0,i.jsx)(l.f,{typography:"h6",children:"Contact"})})}),(0,i.jsx)(a.f,{sx:{pt:0},children:(0,i.jsxs)(u.f,{container:!0,spacing:1,children:[(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Account"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.accountName||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Name"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.fullName||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Position"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.position||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Phone number"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.phone||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Country"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.country||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Date added"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.createdAt?(0,m.f)(t?.createdAt):"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Permits required"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.permitsRequired?"Yes":"No"})]}),t?.xeroContactId&&(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Xero contact ID"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.xeroContactId})]})]})})]})}],757157)},659587,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},741850,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")}])})();