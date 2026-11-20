(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,443919,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(280445),a=e.i(222351),o=e.i(738251),l=e.i(115871),i=e.i(755548),s=e.i(813843),d=e.i(741850),c=e.i(376733),u=e.i(411331),m=e.i(377198);let h=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var f=e.i(889231),p=e.i(396413);let x=(0,n.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,b=(0,n.f)("div")`
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
`,g=(0,n.f)("div")`
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
`;e.s(["f",0,e=>{let{avatar:n,editable:v=!0,avatarEditable:j=v,entity:y,entityName:I,linkTitleTo:C,relatedParties:w,onEdit:_,refetch:$}=e,k=(0,u.f)(),[q,L]=(0,r.useState)(null),[A,S]=(0,r.useState)(!1),U=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!h.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),r=(t=t.replace(/^www\./,"")).split("/")[0];return r?.split(":")[0]||null}catch(e){return null}})(e);let r="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!r)return null;let n=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:r});return`https://img.logo.dev/${encodeURIComponent(t)}?${n.toString()}`})(y.website||y.manager?.email),T=w&&w.length>0,P=(0,m.f)(q);(0,r.useEffect)(()=>{n?(L(n),S(!1)):U?(L(U),S(!0)):(L(null),S(!1))},[n,U]);let M=e=>{let[t]=e;k.close(),L(t?.filename||null)};return(0,t.jsx)(x,{children:(0,t.jsxs)(s.f,{px:1.5,direction:"row",children:[(0,t.jsx)(s.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(b,{logoUrl:A,children:[(0,t.jsx)(a.f,{content:y?.name,src:P,onClick:j?()=>{k.show({content:(0,t.jsx)(p.f,{category:"avatar",entity:I,entityId:y?.id,filters:{category:"avatar"},onMediaAdd:M,refetch:$,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:j?"pointer":"default"}}),j&&(0,t.jsx)(g,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(s.f,{pl:1.5,flex:T?1:void 0,minWidth:T?0:void 0,children:[(0,t.jsxs)(l.f,{color:"text.primary",fontSize:17,children:[C?(0,t.jsx)(f.f,{href:C,sx:{color:"secondary.main"},children:y?.name}):y?.name,y?.description&&(y?.descriptionLink?(0,t.jsx)(f.f,{href:y?.descriptionLink,target:"_blank",underline:"none",rel:"noopener noreferrer",children:(0,t.jsx)(l.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:y?.description})}):(0,t.jsx)(l.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:y?.description})),y?.website&&(0,t.jsx)(f.f,{href:y?.website.startsWith("http")?y?.website:`http://${y?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(d.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),T&&(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(l.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(o.f,{component:"span",children:"Related party: "}),w.map((e,r)=>(0,t.jsxs)("span",{children:[r>0&&", ",(0,t.jsx)(f.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),v&&!!_&&(0,t.jsxs)(i.f,{onClick:_,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),v&&!T&&(0,t.jsx)(s.f,{direction:"row",justifyContent:"flex-start",children:!!_&&(0,t.jsxs)(i.f,{onClick:_,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},894842,e=>{e.s(["f",0,e=>e&&!e.allowed?e.reason:void 0])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let r=t?.medium?.meta?.thumbnails,n=r?.find?.(e=>"small"===e.name);return n?.relativePath||t.medium.filename||null}])},588964,e=>{var t=e.i(391398),r=e.i(691567),n=e.i(668921),a=e.i(152078),o=e.i(471973),l=e.i(606255),i=e.i(984636),s=e.i(530252),d=e.i(813843),c=e.i(115871),u=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},h=e=>{let r=(0,u.f)(e,m),{label:h,options:p,error:x,helperText:b,stackProps:g={},formControlProps:v={},labelLeft:j}=r,y=e=>{let{children:r}=e;return(0,t.jsx)(t.Fragment,{children:r})};return(0,t.jsxs)(n.f,{sx:{m:3},error:x,variant:"standard",...v,children:[(0,t.jsxs)(d.f,{...j&&f,children:[h&&(0,t.jsx)(l.f,{id:"radio-group",color:"secondary",children:h}),(0,t.jsx)(i.f,{...r,"aria-labelledby":"radio-group",children:(0,t.jsx)(d.f,{...g,children:p.map(e=>{let{value:r,label:n,icon:o,ParentComponent:l=y}=e;return(0,t.jsx)(l,{children:(0,t.jsx)(a.f,{value:r,control:(0,t.jsx)(s.f,{color:"secondary"}),label:(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",spacing:1,children:[o,(0,t.jsx)(c.f,{children:n})]})})})})})})]}),(0,t.jsx)(o.f,{children:b})]})};h.propTypes={label:r.default.string,options:r.default.arrayOf(r.default.shape({label:r.default.string.isRequired,value:r.default.any.isRequired,ParentComponent:r.default.elementType})),error:r.default.bool,helperText:r.default.string,stackProps:r.default.object,formControlProps:r.default.object,labelLeft:r.default.bool};let f={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,h])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},292802,e=>{e.s(["f",0,[{label:"Owner",value:"owner"},{label:"Manager",value:"manager"},{label:"User",value:"user"}]])},697871,e=>{var t=e.i(391398),r=e.i(191788),n=e.i(432171),a=e.i(422411),o=e.i(424894),l=e.i(738251),i=e.i(799083),s=e.i(76381),d=e.i(813843),c=e.i(652148),u=e.i(115871),m=e.i(56271),h=e.i(577372),f=e.i(403901),p=e.i(588964),x=e.i(546788),b=e.i(594301),g=e.i(510447),v=e.i(894842),j=e.i(494575),y=e.i(498813),I=e.i(39059),C=e.i(219281),w=e.i(824451),_=e.i(292802),$=e.i(74633),k=e.i(889231),q=e.i(164056),L=e.i(658524),A=e.i(159974),S=e.i(589200),U=e.i(524057),T=e.i(207646),P=e.i(255419),M=e.i(948574);let R=e=>{let{emailDisabled:r=!1,emailRefusal:n}=e,{hasRole:o}=(0,b.f)(),{control:l,formState:{errors:i}}=(0,a.M)();return(0,t.jsxs)(d.f,{width:"100%",gap:1,children:[(0,t.jsxs)(d.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"nameFirst",control:l,defaultValue:"",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(q.f,{variant:"standard",color:"secondary",label:"First name",value:r,onChange:n,error:!!i?.nameFirst,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"nameLast",control:l,defaultValue:"",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(q.f,{variant:"standard",color:"secondary",label:"Last name",value:r,onChange:n,error:!!i?.nameLast,fullWidth:!0})}})]}),(0,t.jsxs)(d.f,{direction:"row",spacing:2,children:[(0,t.jsx)(a.e,{name:"email",control:l,defaultValue:"",render:e=>{let{value:a,onChange:o}=e;return(0,t.jsx)(q.f,{variant:"standard",color:"secondary",label:"Email",type:"email",value:a,onChange:o,disabled:r,error:!!i?.email,helperText:n,FormHelperTextProps:P.f,fullWidth:!0})}}),(0,t.jsx)(a.e,{name:"phone",control:l,defaultValue:"",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(q.f,{variant:"standard",color:"secondary",label:"Mobile",value:r,onChange:n,error:!!i?.phone,fullWidth:!0})}})]}),o([...M.x,...M.H,...M.z,...M.Q])&&(0,t.jsx)(a.e,{name:"status",control:l,defaultValue:"active",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsxs)(S.f,{variant:"standard",color:"secondary",fullWidth:!0,children:[(0,t.jsx)(U.f,{children:"Status"}),(0,t.jsx)(L.f,{value:r,onChange:n,error:!!i?.status,children:T.f.map(e=>(0,t.jsx)(A.f,{value:e.value,children:e.label},e.value))})]})}}),(0,t.jsx)(a.e,{name:"userId",control:l,defaultValue:null,render:e=>(0,t.jsx)("input",{type:"hidden",...e})})]})};var H=e.i(122965),F=e.i(159080);let z=F.f`
  query GetUserEditOffCanvas($userId: Int!, $accountId: Int, $includeAccount: Boolean!) {
    user: User_by_pk(id: $userId) {
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
      accounts: Account_Users(where: { accountId: { _eq: $accountId } })
        @include(if: $includeAccount) {
        id
        role
        position
        isContact
        status
        modules
        account: Account {
          id
          name
          type
        }
        userLocations: User_Account_Locations(
          where: { Account_Location: { accountId: { _eq: $accountId } } }
        ) {
          accountLocationId
        }
      }
    }
  }
`,O=F.f`
  query GetAdminUserLocations($accountId: Int, $q: String, $limit: Int, $offset: Int) {
    location: Location(
      offset: $offset
      limit: $limit
      where: {
        Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } }
        _or: [
          { name: { _ilike: $q } }
          { Customer: { name: { _ilike: $q } } }
          { Addresses: { Address: { city: { _ilike: $q } }, entity: { _eq: "Location" } } }
          { Addresses: { Address: { postCode: { _ilike: $q } }, entity: { _eq: "Location" } } }
        ]
      }
    ) {
      id
      name
      customer: Customer {
        id
        name
      }
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
        Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } }
        _or: [
          { name: { _ilike: $q } }
          { Customer: { name: { _ilike: $q } } }
          { Addresses: { Address: { city: { _ilike: $q } }, entity: { _eq: "Location" } } }
          { Addresses: { Address: { postCode: { _ilike: $q } }, entity: { _eq: "Location" } } }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,E=F.f`
  query GetAdminAccountAllLocationIds($accountId: Int!) {
    location: Location(
      where: { Account_Locations: { Account: { Admins: { adminId: { _eq: $accountId } } } } }
      limit: 10000
    ) {
      id
    }
  }
`,W=F.f`
  query GetAccountUserRestrictedLocations($accountUserId: Int!) {
    restrictedLocations: Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      id
      locationId
    }
  }
`,G=["customer_user","admin_user"],B=[{label:"Yes",value:"yes"},{label:"No",value:"no"}],N=[],V={title:{fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"},locationError:{border:0,borderColor:j.f.COLOUR.danger,borderLeftWidth:"0.25rem",borderStyle:"solid",borderRadius:"0.25rem",m:0,pl:1},radioGroup:{direction:"row",spacing:0,m:0},radioGroupError:{borderLeft:"3px solid #d32f2f",direction:"row",spacing:0,m:0,pl:1}};e.s(["f",0,e=>{let{userId:j,accountId:q,accountType:L,submit:A}=e,{hasRole:S,user:U}=(0,b.f)(),T=(0,r.useMemo)(()=>j?[j]:N,[j]),{emailOf:P}=(0,g.f)(T),M=j?P(j):void 0,{reference:F,pagination:K}=(0,H.f)(),Q=S(["admin_owner","admin_manager"]),D=!(S("admin_user")&&"admin"===L),[J,X]=(0,r.useState)(!0),[Y,Z]=(0,r.useState)(""),[ee,et]=(0,r.useState)(!1),[er,en]=(0,r.useState)(!1),[ea,eo]=(0,r.useState)(""),[el,ei]=(0,r.useState)(null),[es,ed]=(0,r.useState)(!1),ec=(0,r.useRef)(!1),eu=[..._.f];switch(L){case"supplier":eu.push({label:"Operative",value:"contractor"});break;case"admin":eu.push({label:"Helpdesk",value:"helpdesk"})}let em=!q||"customer"!==L,{data:eh,loading:ef}=(0,n.t)(y.a,{skip:em,variables:{accountId:q,excludeUserId:j??-1}}),ep="customer"===L&&!!q&&!em&&!ef&&!((eh?.accountUsers?.length??0)>0),ex="customer"===L&&!!q,eb=(0,a.G)({defaultValues:{id:j,accountId:q,position:null,role:null,isContact:void 0,location:void 0},resolver:(0,o.yupResolver)(x.f),context:{hasRole:(0,C.G)(L,S)&&!!q,hasLocation:!G.includes(U.role)&&G.includes(Y),adminImplicitLocations:"admin"===L&&"admin_user"===Y&&!j&&!es,hasOneOwner:J,isCustomerAccount:ex,mustKeepContactUser:ep,contactRulesStillLoading:ex&&ef}}),{control:eg,errors:ev,handleSubmit:ej,watch:ey,reset:eI,setValue:eC}=eb,ew=ey("role"),e_=ey("location");(0,r.useEffect)(()=>{ew?.value&&Z(`${L}_${ew?.value}`)},[L,ew?.value]);let{data:{user:e$}={user:null},loading:ek}=(0,n.t)(z,{skip:!j,variables:{userId:j,accountId:q,includeAccount:!!q},onCompleted:e=>{let{user:t}=e;if(!t)return;let r=t.accounts?.find(e=>{let{account:t}=e;return t.id===Number(q)}),n={id:t.id,accountId:r?.account.id||q||null,nameFirst:t.nameFirst||"",nameLast:t.nameLast||"",email:t.email||"",phone:t.phone||"",invoiceThreshold:t.invoiceThreshold,quoteThreshold:t.quoteThreshold,position:null,isContact:"",status:t.status||"active",meta:t.meta,...r?{accountUserId:r.id,accountId:r.account.id,role:eu?.find?.(e=>e?.value===r?.role),position:r.position||null,isContact:!0===r.isContact?"yes":"no",status:r.status,location:"admin"===L&&"user"===r.role?void 0:r.userLocations.map(e=>e.accountLocationId),modules:r.modules}:{}};et(!0),eI(n),Z(`${L}_${n.role?.value||""}`),ei(n.accountUserId||null)}});(0,n.t)(y.R,{skip:!q,variables:{accountId:q,userId:j},onCompleted:e=>{let{accountUsers:t}=e;X(!(t.length>0))}});let eq="admin_user"===Y,eL=null!=h.f[Y]&&j!==U.id&&D,{data:eA}=(0,n.t)(E,{skip:!eq||null==q,variables:{accountId:q}}),eS=(0,r.useMemo)(()=>eA?.location?.map(e=>e.id)??[],[eA]),{data:{restrictedLocations:eU=[]}={restrictedLocations:[]},loading:eT}=(0,n.t)(W,{skip:!eq||!el,variables:{accountUserId:el}});(0,r.useEffect)(()=>{eq?!el||eT||er||(eC("location",eU.map(e=>e.locationId)),en(!0)):en(!1)},[el,er,eq,eU,eT,eC]),(0,r.useEffect)(()=>{!ec.current||eq||j||(eC("location",void 0),ed(!1)),ec.current=eq},[eq,eC,j]);let{data:{location:eP,meta:eM}={location:[],meta:{aggregate:{totalCount:0}}},loading:eR}=(0,n.t)(I.u,{skip:eq||!q,variables:{accountId:q,...K}}),{data:{location:eH,meta:eF}={location:[],meta:{aggregate:{totalCount:0}}},loading:ez}=(0,n.t)(O,{skip:!eq||!q,variables:{accountId:q,q:""!==ea?`%${ea}%`:null,...K}}),eO=eq?eH:eP,eE=eq?eF:eM,eW=eq?ez:eR,eG="admin"===L&&eq&&!j&&!es,eB=(0,r.useCallback)(e=>t=>{eq&&ed(!0),t.target.checked?eC("location",[...new Set([...e_??[],e])]):eC("location",(e_??[]).filter(t=>t!==e))},[eq,e_,eC]),eN=(0,r.useMemo)(()=>[{sortable:!1,minWidth:10,field:"id",headerName:"",renderHeader:()=>{if(!eq||0===eS.length)return null;let e=Array.isArray(e_)?e_:[],r=eS.length>0&&eS.every(t=>e.includes(t)),n=e.length>0;return eG?(0,t.jsx)(i.f,{color:"secondary",checked:!1,indeterminate:!1,onChange:e=>{e.target.checked&&(ed(!0),eC("location",[...eS]))},inputProps:{"aria-label":"Select all locations"}}):(0,t.jsx)(i.f,{color:"secondary",checked:r,indeterminate:n&&!r,onChange:e=>{ed(!0),e.target.checked?eC("location",[...eS]):eC("location",[])},inputProps:{"aria-label":"Select all locations"}})},renderCell:e=>{let{row:r}=e;return r.id?(0,t.jsx)(i.f,{color:"secondary",checked:!eG&&!!e_?.includes(r.id),onChange:eB(r.id)}):null}},{sortable:!1,flex:1,field:"name",headerName:"Name"},{sortable:!1,flex:1,field:"address",headerName:"Address",renderCell:e=>{let{row:r}=e;return r.address?(0,t.jsxs)(d.f,{children:[(0,t.jsx)(u.f,{children:r.address.addressLine1}),(0,t.jsx)(u.f,{children:r.address.postCode})]}):(0,t.jsx)(u.f,{children:"Please add"})}},...eq?[{sortable:!1,flex:1,field:"customer",headerName:"Customer",renderCell:e=>{let{row:r}=e;return r.customerId&&r.customer?(0,t.jsx)(k.f,{color:"secondary",href:`/dashboard/customers/view?id=${r.customerId}`,onClick:e=>e.stopPropagation(),children:r.customer}):null}}]:[]],[eS,eG,eq,e_,eB,ed,eC]),eV=(0,r.useMemo)(()=>(eO??[]).map(e=>({id:eq?e.id:e.accountLocations?.[0]?.id,name:e.name,customer:e.customer?.name,customerId:e.customer?.id,address:e.addresses?.[0]?.address})),[eq,eO]);if(ek)return(0,t.jsx)(d.f,{sx:{width:"100%",alignItems:"center"},children:(0,t.jsx)(s.f,{color:"secondary"})});let eK={id:(0,C.G)(L,S)};return(0,t.jsx)(a.p,{...eb,children:(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:ej(e=>{let t="admin"===L&&eq&&!j&&!es&&D&&eS.length>0?{...e,location:[...eS]}:e,r=eL?(0,f.f)(e.modules,h.f[Y]?.map(e=>e.name)??[]):void 0;A(r?{...t,modules:r}:t)}),children:[(0,t.jsx)(R,{emailDisabled:!!j&&M?.allowed!==!0,emailRefusal:(0,v.f)(M)}),q&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.f,{paddingTop:1,children:[(0,C.G)(L,S)&&(0,t.jsx)(d.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"role",control:eg,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(w.f,{value:r,onChange:(e,t)=>n(t),label:"Role",options:eu,variant:"standard",color:"secondary",error:!!ev?.role,helperText:ev?.role?.message||ev?.role?.value?.message})}},ee?"role-edit-mode":"role-create-mode")}),(0,t.jsx)(d.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"position",control:eg,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(c.f,{fullWidth:!0,value:r||"",onChange:e=>n(e.target.value||null),InputLabelProps:{shrink:!!r},label:"Position / Job title",variant:"standard",color:"secondary"})}})}),(0,C.u)({accountType:L,role:ew?.value,hasRole:S})&&e$?.id!==U.id&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"invoiceThreshold",control:eg,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(c.f,{fullWidth:!0,value:r,onChange:n,InputLabelProps:{shrink:!!r},label:"Threshold limit / Invoice",variant:"standard",color:"secondary"})}})}),(0,t.jsx)(d.f,{marginBottom:1,children:(0,t.jsx)(a.e,{name:"quoteThreshold",control:eg,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(c.f,{fullWidth:!0,value:r,onChange:n,InputLabelProps:{shrink:!!r},label:"Threshold limit / Quote",variant:"standard",color:"secondary"})}})})]}),(0,t.jsxs)(d.f,{marginBottom:1,paddingTop:1,children:[(0,t.jsx)(u.f,{sx:V.title,children:"Contact user"}),(0,t.jsx)(a.e,{name:"isContact",control:eg,render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)(p.f,{formControlProps:{sx:{m:0}},stackProps:ev.isContact?V.radioGroupError:V.radioGroup,error:!!ev.isContact,value:r,onChange:n,options:B,labelLeft:!0,helperText:ev.isContact?.message})}},ee?"contact-edit-mode":"contact-create-mode")]}),eL&&(0,t.jsx)(m.f,{role:Y})]}),G.includes(Y)&&j!==U.id&&D&&(0,t.jsxs)(l.f,{sx:ev.location?V.locationError:{},children:[(0,t.jsx)(u.f,{sx:V.title,children:"Locations"}),eq&&Q&&(0,t.jsx)(c.f,{fullWidth:!0,value:ea,onChange:e=>{eo(e.target.value),F.onTableStateChange(e=>({...e,currentPage:0}))},InputLabelProps:{shrink:!!ea},label:"Search locations",variant:"standard",color:"secondary",sx:{mb:1}}),(0,t.jsx)($.s,{...F,columnVisibilityModel:eK,totalCount:eE.aggregate.totalCount,columns:eN,loading:eW,rows:eV,autoHeight:!0}),(0,t.jsx)(a.e,{control:eg,name:"location",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}})]})]}),j&&(0,t.jsx)(a.e,{control:eg,name:"id",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}}),q&&(0,t.jsx)(a.e,{control:eg,name:"accountId",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}}),el&&(0,t.jsx)(a.e,{control:eg,name:"accountUserId",render:e=>{let{value:r,onChange:n}=e;return(0,t.jsx)("input",{type:"hidden",value:r,onChange:n})}})]})})}],697871)},56271,577372,403901,546788,498813,219281,e=>{var t=e.i(391398),r=e.i(813843),n=e.i(115871);let a=[{label:"Job reports",name:"jobReports"},{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"}],o=[{label:"Job history (All)",name:"jobHistoryAll"},{label:"Job history (Supplier account)",name:"jobHistorySupplier"}],l={customer_user:a,admin_user:a,supplier_owner:o,supplier_manager:o,supplier_user:o,supplier_contractor:[{label:"PPM Schedules",name:"ppmSchedules"},{label:"Quotes",name:"quotes"},{label:"Finances",name:"finances"},...o]};e.s(["f",0,l],577372);var i=e.i(191788),s=e.i(422411),d=e.i(152078),c=e.i(799083),u=e.i(738251);let m={fontSize:"14px",fontWeight:300,marginBottom:"4px",color:"gray"};e.s(["f",0,e=>{let{role:a}=e,{control:o,watch:h,setValue:f}=(0,s.M)(),p=!!h("modules.jobHistoryAll"),x=(0,i.useMemo)(()=>l[a]||[],[a]);return(0,i.useEffect)(()=>{p&&f("modules.jobHistorySupplier",!1,{shouldDirty:!0})},[p,f]),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(n.f,{sx:m,children:"Permissions"}),(0,t.jsx)(r.f,{direction:"row",flexWrap:"wrap",alignItems:"center",useFlexGap:!0,sx:{gap:1,rowGap:.5},children:x.map(e=>{let r="jobHistorySupplier"===e.name&&p;return(0,t.jsx)(s.e,{name:`modules.${e.name}`,control:o,render:n=>{let{value:a,onChange:o}=n;return(0,t.jsx)(d.f,{disabled:r,sx:{alignItems:"center",m:0,"& .MuiFormControlLabel-label":{lineHeight:1.25}},control:(0,t.jsx)(c.f,{color:"secondary",checked:!!a,disabled:r,onChange:e=>o(e.target.checked),sx:{p:"9px"}}),label:e.label})}},e.name)})})]})}],56271);let h=["finances","quotes","jobReports","ppmSchedules","jobHistoryAll","jobHistorySupplier"];e.s(["f",0,(e,t)=>{if(!t.length)return;let r=e??{};return Object.fromEntries(h.map(e=>[e,t.includes(e)&&!0===r[e]]))}],403901);var f=e.i(426778);let p="This account must keep at least one contact user. Set another user as contact first, or add a new contact user.",x=(0,f.t)().shape({id:(0,f.H)().nullable().optional(),accountId:(0,f.H)().nullable().optional(),nameFirst:(0,f.x)().required(),nameLast:(0,f.x)().required(),email:(0,f.x)().required().email(),phone:(0,f.x)().required(),status:(0,f.x)().when("$hasRole",(e,t)=>{let[r]=e;return r?t.oneOf(["active","inactive"]).required():t}),invoiceThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),quoteThreshold:(0,f.H)().nullable().transform(e=>isNaN(e)?null:e),role:(0,f.t)().nullable().shape({label:(0,f.x)(),value:(0,f.x)().when(["$hasRole","$hasOneOwner","accountId"],(e,t)=>{let[r,n,a]=e;return r?n?t.oneOf(["owner"],`Each account must have a designated owner.
            If you would like to change the account type on this user,
            please create another user account and designate this new account as an owner.`).required("Role is required"):a&&"number"==typeof a&&a>0?t.required("Role is required"):t.nullable():t.nullable()})}).when(["$hasRole","accountId"],(e,t)=>{let[r,n]=e;return r&&n&&"number"==typeof n&&n>0?t.required("Role is required"):t.nullable()}),userId:(0,f.H)().nullable().optional(),accountUserId:(0,f.H)().nullable().optional(),position:(0,f.x)().nullable().transform(e=>""===e?null:e).when("accountId",{is:e=>!!e,then:()=>(0,f.x)().nullable(),otherwise:()=>(0,f.x)().nullable()}),isContact:(0,f.x)().when("accountId",{is:e=>!!e,then:()=>(0,f.x)().when(["$isCustomerAccount","$mustKeepContactUser","$contactRulesStillLoading"],(e,t)=>{let[r,n,a]=e;return a?t.test("contact-rules-loading","Contact rules are still loading. Try again in a moment.",()=>!1):r&&n?t.oneOf(["yes"],p).required(p):t.oneOf(["yes","no"]).required()}),otherwise:()=>(0,f.x)().nullable().optional()}),location:(0,f.k)().of((0,f.H)().integer().required()).when(["$hasLocation","$adminImplicitLocations"],(e,t)=>{let[r,n]=e;return!r||n?t.nullable().optional():t.required()})});e.s(["f",0,x],546788);var b=e.i(159080);let g=b.f`
  query FindOwnersByAccount($accountId: Int, $userId: Int) {
    accountUsers: Account_User(
      where: { role: { _eq: "owner" }, accountId: { _eq: $accountId }, userId: { _neq: $userId } }
    ) {
      id
      role
    }
  }
`,v=b.f`
  query FindOtherContactsByAccount($accountId: Int, $excludeUserId: Int!) {
    accountUsers: Account_User(
      where: {
        isContact: { _eq: true }
        accountId: { _eq: $accountId }
        userId: { _neq: $excludeUserId }
      }
      order_by: { id: asc }
      limit: 1
    ) {
      id
    }
  }
`;e.s(["a",0,v,"R",0,g],498813);var j=e.i(948574);e.s(["G",0,(e,t)=>"customer"!==e&&"supplier"!==e||t([...j.x,...j.H,...j.z,...j.Q]),"u",0,e=>{let{accountType:t,role:r,hasRole:n}=e;return n(["admin_owner","customer_owner","supplier_owner"])?!["admin_owner","customer_owner","supplier_owner"].includes(`${t}_${r}`):n(["customer_manager","supplier_manager"])?["admin_user","customer_user","supplier_user"].includes(`${t}_${r}`):!!n(["admin_manager"])&&["admin_user","customer_user","supplier_user","customer_manager","supplier_manager"].includes(`${t}_${r}`)}],219281)},510447,e=>{var t=e.i(191788),r=e.i(185242);let n=[],a={},o={},l=e=>e.length?[...new Set(e)].sort((e,t)=>e-t).join(","):null;e.s(["f",0,function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,s=(0,t.useMemo)(()=>l(e),[e]),d=(0,t.useMemo)(()=>l(i),[i]),c=(0,t.useMemo)(()=>({ids:s,accountIds:d}),[s,d]),{data:u,refetch:m}=(0,r.f)("/user/actions",{queryKey:`user-actions-${s??""}-${d??""}`,params:c,skip:!s&&!d}),h=u?.users??a,f=u?.accounts??o,p=(0,t.useCallback)(e=>h[e]?.editDetails,[h]),x=(0,t.useCallback)(e=>h[e]?.editEmail,[h]),b=(0,t.useCallback)(e=>p(e)?.allowed===!0,[p]);return{detailsOf:p,emailOf:x,mayEditDetails:b,mayEditLink:(0,t.useCallback)((e,t)=>null!=t&&h[e]?.editLink[t]?.allowed===!0,[h]),mayAddUser:(0,t.useCallback)((e,t)=>{let r=f[e]?.addUser;return!!r&&(t?r[t]?.allowed===!0:Object.values(r).some(e=>{let{allowed:t}=e;return t}))},[f]),refetch:m}}])},884288,e=>{var t=e.i(191788),r=e.i(511667),n=e.i(21557),a=e.i(974261),o=e.i(220303);let l=e=>void 0===e?void 0:e||null,i=e=>({position:e.position,isContact:"yes"===e.isContact,modules:e.modules,locationIds:e.location??void 0}),s=e=>({nameFirst:e.nameFirst,nameLast:e.nameLast,email:e.email,phone:e.phone,invoiceThreshold:l(e.invoiceThreshold),quoteThreshold:l(e.quoteThreshold)});e.s(["f",0,function(){let{failurePrefix:e=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{show:l}=(0,n.f)(),d=t=>{l({content:`${e}${t instanceof o.Q&&t.status<500?t.message:"The user could not be saved"}`,severity:t instanceof o.Q&&403===t.status?"warning":"error"})},[c]=(0,r.f)("/user",{queryKey:"user-add",method:"POST",baseUrl:a.M,onError:d}),[u]=(0,r.f)("/user/:userId",{queryKey:"user-edit",method:"PUT",baseUrl:a.M,onError:d}),m=(0,t.useCallback)(async e=>!!await c({body:e}),[c]),h=(0,t.useCallback)(async(e,t)=>!!await u({pathParams:{userId:e},body:t}),[u]),f=(0,t.useCallback)(e=>e.id?h(e.id,{...s(e),status:e.accountUserId?void 0:e.status,...e.accountUserId&&{link:{...i(e),id:e.accountUserId,role:e.role?.value,status:e.status}}}):m({...s(e),...i(e),accountId:e.accountId,role:e.role?.value||"user",status:e.status||"active"}),[m,h]);return{addUser:m,editUser:h,saveUser:f}}],884288)},741850,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(e.r(421506)),o=e.r(391398);r.default=(0,a.default)((0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},658524,524057,255419,e=>{var t=e.i(539117);e.s(["f",()=>t.f],658524);var r=e.i(231637);e.s(["f",()=>r.f],524057),e.s(["f",0,{disabled:!1}],255419)}])})();