(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[482384,e=>{var t=e.i(391398),i=e.i(974261),r=e.i(191788);class n{apiKey=i.e.map||"";channel;center;client;format;language;location;maptype;markers;paths;region;rootURL;scale;signature;size;style;visible;zoom;constructor({center:e,channel:t,client:i,format:r="png",language:n,location:s="",maptype:o="roadmap",markers:a=[],paths:l=[],region:d,rootURL:c="https://maps.googleapis.com/maps/api/staticmap",scale:h=1,signature:u,size:f="400x400",style:x,visible:p,zoom:m=15}){this.channel=t,this.center=e,this.client=i,this.format=r,this.language=n,this.location=s,this.maptype=o,this.markers=a,this.paths=l,this.region=d,this.rootURL=c,this.scale=h,this.signature=u,this.size=f,this.style=x,this.visible=p,this.zoom=m}urlBuilder(e,t,i){return t?"object"==typeof t?`${e}${i}${JSON.stringify(t)}`:`${e}${i}${t}`:null}renderBaseMap(){let e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));let t=e.filter(e=>e).join("&");return`${this.rootURL}?${t}`}locationBuilder(e){let t=[];if(Array.isArray(e)){let i=e.map(e=>this.locationBuilder(e));t.push(...i)}return("string"==typeof e||"number"==typeof e)&&t.push(encodeURI(String(e))),"object"==typeof e&&"lat"in e&&"lng"in e&&t.push(`${e.lat},${e.lng}`),t.join("%7C")}renderPath(e){let t=[];if(e.circle){var i;let r=(i=e.circle.latitude,function(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,n=Math.PI,s="",o=e*n/180,a=t*n/180,l=i/1e3/6371;for(let e=0;e<=360;e+=r){let t=e*n/180,i=Math.asin(Math.sin(o)*Math.cos(l)+Math.cos(o)*Math.sin(l)*Math.cos(t)),r=(a+Math.atan2(Math.sin(t)*Math.sin(l)*Math.cos(o),Math.cos(l)-Math.sin(o)*Math.sin(i)))*180/n;s+=function e(t){let i=[];if(Array.isArray(t)){let r=t.map(t=>e(t));i.push(...r)}return("string"==typeof t||"number"==typeof t)&&i.push(String(t)),"object"==typeof t&&"lat"in t&&"lng"in t&&i.push(`${t.lat},${t.lng}`),i.join("%7C")}(180*i/n+","+r)}return encodeURI(s)}(i,e.circle.longitude,e.circle.radius));t.push(this.urlBuilder("",this.locationBuilder(`${r}`),""))}t.push(this.urlBuilder("color",e.color,":")),t.push(this.urlBuilder("weight",e.weight,":")),t.push(this.urlBuilder("fillcolor",e.fillcolor,":")),t.push(this.urlBuilder("geodesic",e.geodesic,":")),e.points&&t.push(this.urlBuilder("",this.locationBuilder(e.points),""));let r=t.filter(e=>e).join("%7C");return`path=${r}`}renderParts(){return this.paths.map(e=>this.renderPath(e))}renderMarkers(){let{markers:e,locationBuilder:t,location:i}=this;return(e.length?e.map(e=>{let i="markers=";switch(typeof e){case"string":i+=t.call(this,e);break;case"object":{let{colour:r,label:n,location:s}=e;i+=(r?`color:${r}|`:"")+(n?`label:${n}|`:"")+(s&&`${t.call(this,s)}|`)}}return i}):[`markers=${t.call(this,i)}`]).join("&")}generateUrl(){let e=this.renderParts()||[],t=this.renderBaseMap(),i=this.renderMarkers();return`${t}&${e}&${i}`}}e.s(["f",0,e=>{let{center:i,channel:s,className:o,client:a,container:l="img",format:d="png",language:c,location:h,maptype:u="roadmap",markers:f,paths:x,region:p,scale:m=1,signature:y,size:j="400x400",style:g,styleMap:b,visible:v,zoom:w=15}=e,[k,I]=j?j.split("x"):["400","400"],[S,C]=(0,r.useState)("");return(0,r.useEffect)(()=>{C(new n({center:i,channel:s,client:a,format:d,language:c,location:h,maptype:u,markers:f,paths:x,region:p,scale:m,signature:y,size:j,style:b,visible:v,zoom:w}).generateUrl())},[i,s,a,d,c,h,u,f,x,p,m,y,j,b,v,w]),(0,t.jsx)(l,{className:o,width:k,height:I,src:S,style:g,alt:"map"})}])},170398,e=>{var t=e.i(391398),i=e.i(813843),r=e.i(115871),n=e.i(191788),s=e.i(280445),o=e.i(64134),a=e.i(39345),l=e.i(451221);let d=(0,s.f)("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,c=(0,s.f)("div")`
  display: flex;
  align-items: center;
`,h=(0,s.f)("span")`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>{let{active:t}=e;return t?"#333":"transparent"}};
  border: 1px solid #333;
  margin: 0 4px;
  display: inline-block;
`;e.s(["f",0,e=>{let{contactUsers:s}=e,[u,f]=(0,n.useState)(0),x=s.length,p=(0,l.f)(),m=(0,n.useMemo)(()=>s[u],[s,u]);return 0===x?null:(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.f,{children:[(0,t.jsx)(r.f,{color:"text.primary",children:"Name"}),(0,t.jsxs)(r.f,{color:"text.primary",children:[m?.user?.nameFirst," ",m?.user?.nameLast]}),(0,t.jsx)(r.f,{color:"text.primary",children:"Phone"}),(0,t.jsx)(r.f,{color:"text.primary",children:m?.user?.phone}),(0,t.jsx)(r.f,{color:"text.primary",children:"Email"}),(0,t.jsx)(r.f,{color:"text.primary",children:m?.user?.email})]}),x>1&&(0,t.jsxs)(d,{children:[(0,t.jsx)(o.default,{onClick:()=>{f(e=>0===e?x-1:e-1)},sx:{color:p.palette.text.primary,cursor:"pointer"}}),(0,t.jsx)(c,{children:(()=>{if(x<=5)return s.map((e,i)=>(0,t.jsx)(h,{active:i===u},i));let e=0,i=u;return u<5?(e=0,i=u):(i=4,x-(e=u-4)<5&&(i=u-(e=x-5))),Array.from({length:5}).map((r,n)=>{let s=e+n;return(0,t.jsx)(h,{active:n===i},s)})})()}),(0,t.jsx)(a.default,{onClick:()=>{f(e=>e===x-1?0:e+1)},sx:{color:p.palette.text.primary,cursor:"pointer"}})]})]})}])},443919,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(280445),n=e.i(222351),s=e.i(738251),o=e.i(115871),a=e.i(755548),l=e.i(813843),d=e.i(741850),c=e.i(376733),h=e.i(411331),u=e.i(377198);let f=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var x=e.i(889231),p=e.i(396413);let m=(0,r.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,y=(0,r.f)("div")`
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
`,j=(0,r.f)("div")`
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
`;e.s(["f",0,e=>{let{avatar:r,editable:g=!0,avatarEditable:b=g,entity:v,entityName:w,linkTitleTo:k,relatedParties:I,onEdit:S,refetch:C}=e,N=(0,h.f)(),[A,M]=(0,i.useState)(null),[$,L]=(0,i.useState)(!1),z=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!f.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),i=(t=t.replace(/^www\./,"")).split("/")[0];return i?.split(":")[0]||null}catch(e){return null}})(e);let i="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!i)return null;let r=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:i});return`https://img.logo.dev/${encodeURIComponent(t)}?${r.toString()}`})(v.website||v.manager?.email),_=I&&I.length>0,B=(0,u.f)(A);(0,i.useEffect)(()=>{r?(M(r),L(!1)):z?(M(z),L(!0)):(M(null),L(!1))},[r,z]);let P=e=>{let[t]=e;N.close(),M(t?.filename||null)};return(0,t.jsx)(m,{children:(0,t.jsxs)(l.f,{px:1.5,direction:"row",children:[(0,t.jsx)(l.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(y,{logoUrl:$,children:[(0,t.jsx)(n.f,{content:v?.name,src:B,onClick:b?()=>{N.show({content:(0,t.jsx)(p.f,{category:"avatar",entity:w,entityId:v?.id,filters:{category:"avatar"},onMediaAdd:P,refetch:C,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:b?"pointer":"default"}}),b&&(0,t.jsx)(j,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(l.f,{pl:1.5,flex:_?1:void 0,minWidth:_?0:void 0,children:[(0,t.jsxs)(o.f,{color:"text.primary",fontSize:17,children:[k?(0,t.jsx)(x.f,{href:k,sx:{color:"secondary.main"},children:v?.name}):v?.name,v?.description&&(v?.descriptionLink?(0,t.jsx)(x.f,{href:v?.descriptionLink,target:"_blank",underline:"none",rel:"noopener noreferrer",children:(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:v?.description})}):(0,t.jsx)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:v?.description})),v?.website&&(0,t.jsx)(x.f,{href:v?.website.startsWith("http")?v?.website:`http://${v?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(d.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),_&&(0,t.jsxs)(l.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(o.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(s.f,{component:"span",children:"Related party: "}),I.map((e,i)=>(0,t.jsxs)("span",{children:[i>0&&", ",(0,t.jsx)(x.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),g&&!!S&&(0,t.jsxs)(a.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),g&&!_&&(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-start",children:!!S&&(0,t.jsxs)(a.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},890350,e=>{var t,i,r,n=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),s=((i={}).VERIFIED="verified",i.UNVERIFIED="unverified",i),o=((r={}).CLEVERLY="cleverly",r.XERO="xero",r.BIDIRECTIONAL="bidirectional",r.NONE="none",r);e.s(["d",()=>n,"T",()=>s,"$",()=>o])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let i=t?.medium?.meta?.thumbnails,r=i?.find?.(e=>"small"===e.name);return r?.relativePath||t.medium.filename||null}])},63886,e=>{e.s(["f",()=>b],63886);var t=e.i(391398),i=e.i(871931),r=e.i(760981),n=e.i(302966),s=e.i(482384),o=e.i(795617),a=e.i(362407),l=e.i(411331),d=e.i(280445),c=e.i(760814),h=e.i(489129);let u=e=>{let{propertyId:i,propertyName:r}=e,n=(0,l.f)();return(0,t.jsx)(f,{onClick:()=>{n.show({title:"Property information",content:(0,t.jsx)(h.f,{propertyId:i,toggleShow:n.close})})},children:r})},f=c.U.a.withConfig({displayName:"property-link__StyledLink",componentId:"sc-d818312b-0"})`
  cursor: pointer;
  text-decoration: none;
`;var x=e.i(115871),p=e.i(747112),m=e.i(813843),y=e.i(740790),j=e.i(773831),g=e.i(376733);let b=e=>{let{access:i,address:s,edit:d=!1,entity:c,entityId:h,id:f,name:b,refetch:k,showMap:I=!1,showLink:S=!0,title:C="Address",type:N}=e,A=(0,l.f)(),M=e=>{e&&k&&k()},$=(0,o.D)(s);return(0,t.jsxs)(w,{defaultExpanded:!0,children:[(0,t.jsx)(n.f,{expandIcon:(0,t.jsx)(p.f,{}),children:(0,t.jsxs)(m.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(x.f,{typography:"h6",children:C}),d&&(0,t.jsx)(j.f,{onClick:e=>{e.stopPropagation(),A.show({content:(0,t.jsx)(a.f,{entity:c,entityId:h,id:f,onSubmit:M,addressId:s.id,type:N}),submit:!1,title:"Manage addresses"})},size:"small",children:(0,t.jsx)(g.default,{sx:{height:"17px",width:"17px"}})})]})}),(0,t.jsx)(r.f,{sx:{pt:0},children:(0,t.jsxs)(y.f,{container:!0,children:[(0,t.jsxs)(y.f,{item:!0,xs:6,children:[b&&(0,t.jsxs)(m.f,{mb:1,children:[(0,t.jsx)(x.f,{color:"text.secondary",children:"Property"}),(0,t.jsx)(x.f,{variant:"body2",children:S?(0,t.jsx)(u,{propertyId:h,propertyName:b}):b})]}),"invoice"===N&&s.invoicingEntity&&(0,t.jsxs)(m.f,{mb:1,children:[(0,t.jsx)(x.f,{color:"text.secondary",children:"Invoicing Entity"}),(0,t.jsx)(x.f,{variant:"body2",children:s.invoicingEntity})]}),s.name&&"invoice"!==N&&(0,t.jsxs)(m.f,{mb:1,children:[(0,t.jsx)(x.f,{color:"text.secondary",children:"Name"}),(0,t.jsx)(x.f,{variant:"body2",children:s.name})]}),(0,t.jsx)(x.f,{color:"text.secondary",children:"Address"}),(0,t.jsx)(x.f,{variant:"body2",sx:{mb:.5},children:s.addressLine1}),s.addressLine2&&(0,t.jsx)(x.f,{variant:"body2",sx:{mb:.5},children:s.addressLine2}),s.addressLine3&&(0,t.jsx)(x.f,{variant:"body2",sx:{mb:.5},children:s.addressLine3}),(0,t.jsx)(x.f,{variant:"body2",sx:{mb:.5},children:s.city}),(0,t.jsx)(x.f,{variant:"body2",sx:{mb:.5},children:s.postCode}),(0,t.jsx)(x.f,{variant:"body2",sx:{mb:.5},children:s.county}),i&&(0,t.jsxs)(m.f,{spacing:.5,children:[(0,t.jsx)(x.f,{variant:"subtitle2",children:"Access"}),(0,t.jsx)(x.f,{variant:"body2",children:i})]})]}),(0,t.jsx)(y.f,{item:!0,xs:6,children:I&&(0,t.jsx)(v,{center:$,location:$,markers:[$],style:{width:"100%",height:"auto"}})})]})})]})},v=(0,d.f)(s.f)(e=>{let{theme:t}=e;return{display:"block",maxWidth:"250px",width:"100%",height:"auto",marginLeft:"4px",border:`1px solid ${t.palette.secondary.main}`,borderRadius:"10px"}}),w=(0,d.f)(i.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`},489129,e=>{e.s(["f",()=>f]);var t=e.i(391398),i=e.i(191788),r=e.i(432171),n=e.i(203828),s=e.i(553875),o=e.i(76381),a=e.i(436703),l=e.i(847474),d=e.i(946894),c=e.i(443919),h=e.i(757157),u=e.i(63886);let f=e=>{let{propertyId:f,toggleShow:x}=e,p=(0,n.useRouter)();(0,i.useEffect)(()=>{let e=()=>{x()};return p.events.on("routeChangeComplete",e),()=>{p.events.off("routeChangeComplete",e)}},[p.events,x]);let{loading:m,data:{location:y}={location:null}}=(0,r.t)(d.f,{variables:{id:f}}),j=(0,i.useMemo)(()=>y?.customer.find(e=>"primary"===e.linkType)?.account,[y]),g=(0,l.w)(y,"registered"),b=(0,l.w)(y,"invoice"),v=(0,i.useMemo)(()=>({accountName:j?.name,country:g?.address?.country?.name,createdAt:y?.createdAt,fullName:y?.user?.fullName,phone:y?.user?.phone}),[j?.name,y,g]);return m?(0,t.jsx)(s.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(o.f,{color:"secondary"})}):y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{avatar:(0,a.f)(j?.media),editable:!1,entity:{id:y.id,description:j?.name,name:y.name},entityName:"Location",linkTitleTo:`/dashboard/properties/view?id=${y.id}`}),(0,t.jsx)(h.f,{contactUser:v}),g&&(0,t.jsx)(u.f,{address:g.address,edit:!1,entity:"Location",entityId:y.id,id:g.id,showMap:!0,title:"Address",type:"registered"}),b&&(0,t.jsx)(u.f,{address:b.address,edit:!1,entity:"Location",entityId:y.id,id:b.id,title:"Invoice address",type:"invoice"})]}):null}},946894,757157,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["f",0,i],946894);var r=e.i(391398),n=e.i(871931),s=e.i(760981),o=e.i(302966),a=e.i(280445),l=e.i(115871),d=e.i(747112),c=e.i(813843),h=e.i(740790),u=e.i(65295);let f=(0,a.f)(n.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{contactUser:t}=e;return(0,r.jsxs)(f,{defaultExpanded:!0,children:[(0,r.jsx)(o.f,{expandIcon:(0,r.jsx)(d.f,{}),children:(0,r.jsx)(c.f,{direction:"row",alignItems:"center",spacing:1,children:(0,r.jsx)(l.f,{typography:"h6",children:"Contact"})})}),(0,r.jsx)(s.f,{sx:{pt:0},children:(0,r.jsxs)(h.f,{container:!0,spacing:1,children:[(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Account"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.accountName||"Not Specified"})]}),(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Name"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.fullName||"Not Specified"})]}),(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Position"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.position||"Not Specified"})]}),(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Phone number"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.phone||"Not Specified"})]}),(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Country"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.country||"Not Specified"})]}),(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Date added"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.createdAt?(0,u.f)(t?.createdAt):"Not Specified"})]}),(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Permits required"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.permitsRequired?"Yes":"No"})]}),t?.xeroContactId&&(0,r.jsxs)(h.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(l.f,{color:"text.secondary",children:"Xero contact ID"}),(0,r.jsx)(l.f,{color:"text.primary",children:t?.xeroContactId})]})]})})]})}],757157)},64134,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")},39345,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"}),"ChevronRightRounded")},741850,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},469106,e=>{var t=e.i(391398),i=e.i(203828),r=e.i(191788),n=e.i(432171),s=e.i(891962),o=e.i(570112),a=e.i(995197),l=e.i(436703),d=e.i(594301),c=e.i(443919),h=e.i(280445),u=e.i(115871),f=e.i(170398),x=e.i(871931),p=e.i(760981),m=e.i(302966),y=e.i(813843),j=e.i(747112),g=e.i(65295);let b=e=>{let{tenant:i}=e;return(0,t.jsxs)(v,{defaultExpanded:!0,children:[(0,t.jsx)(m.f,{expandIcon:(0,t.jsx)(j.f,{}),children:(0,t.jsx)(y.f,{direction:"row",alignItems:"center",justifyContent:"space-between",width:"100%",children:(0,t.jsx)(u.f,{typography:"h6",children:"Contact"})})}),(0,t.jsx)(p.f,{sx:{pt:0},children:(0,t.jsxs)(y.f,{spacing:2,sx:{width:"100%"},children:[i?.accountName&&(0,t.jsxs)(y.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Account"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:i?.accountName})]}),i?.fullName&&(0,t.jsxs)(y.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Name"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:i?.fullName})]}),(0,t.jsxs)(y.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Phone"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:i?.phone})]}),(0,t.jsxs)(y.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Country"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:i?.country||"N/A"})]}),(0,t.jsxs)(y.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Date Added"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:(0,g.f)(i?.createdAt)})]}),(0,t.jsxs)(y.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Permits required"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:i?.permitsRequired?"Yes":"No"})]}),i?.xeroContactId&&(0,t.jsxs)(y.f,{children:[(0,t.jsx)(u.f,{color:"text.secondary",fontSize:"0.875rem",children:"Xero Contact ID"}),(0,t.jsx)(u.f,{fontSize:"0.875rem",children:i?.xeroContactId})]})]})})]})},v=(0,h.f)(x.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;var w=e.i(63886),k=e.i(740790),I=e.i(681700);let S=e=>{let{tenant:i,refetch:r,location:n}=e,{hasRole:s}=(0,d.f)(),o=s("admin"),a=n?.accountLocations?.find(e=>"primary"===e.linkType)?.account,h=i?.bookings?.[0]?.location?.addresses?.[0]?.address;return n?(0,t.jsx)(k.f,{container:!0,spacing:2,children:(0,t.jsxs)(k.f,{item:!0,xs:12,md:6,children:[(0,t.jsx)(c.f,{avatar:(0,l.f)(a?.media),editable:o,entity:{id:n.id,description:a?.name,name:i.fullName||"Not Specified"},entityName:"Account",refetch:r}),(0,t.jsx)(b,{tenant:{accountName:null,country:h?.country?.name||"",createdAt:i?.createdAt?(0,g.f)(i?.createdAt):null,fullName:i?.fullName,position:i?.accountUsers?.[0]?.position||null,phone:i?.phone||null,permitsRequired:null,xeroContactId:a?.meta?.xeroContactId??null}}),(0,t.jsxs)(C,{children:[(0,t.jsx)(u.f,{variant:"h6",color:"text.primary",mb:1,children:"Contact"}),(0,t.jsx)(f.f,{contactUsers:[{user:i}]})]}),h&&(0,t.jsx)(w.f,{address:h,entity:"Account",entityId:n.id,id:h.id,refetch:r,title:"Registered Address",type:"registered"}),o&&(0,t.jsx)(I.f,{entity:"Account",entityId:n.id,title:"Notes"})]})}):null},C=(0,h.f)("div")`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 1.25rem;
`;var N=e.i(159080);let A=N.f`
  query GetTenant($id: Int!) {
    tenant: User_by_pk(id: $id) {
      email
      fullName
      id
      phone
      invoiceThreshold
      meta
      nameFirst
      nameLast
      createdAt
      bookings: TenantBookings {
        id
        location: Location {
          name
          id
          addresses: Addresses {
            address: Address {
              geo
              id
              invoicingEntity
              name
              county
              country: Country {
                id
                name
              }
              addressLine1
              addressLine2
              addressLine3
              postCode
              city
            }
          }
          accountLocations: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
            linkType
            account: Account {
              id
              companyNumber
              createdAt
              name
              status
              type
              updatedAt
              website
              clientType
              managerId
              vatId
              meta
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
              manager: Manager {
                id
                fullName
              }
            }
          }
        }
      }
    }
  }
`;var M=e.i(76381),$=e.i(738251),L=e.i(445011),z=e.i(642546),_=e.i(201609);let B=e=>{let{id:l}=e,{hasRole:c}=(0,d.f)(),[h,u]=(0,r.useState)("details"),{loading:f,data:x,error:p,refetch:m}=(0,n.t)(A,{fetchPolicy:"no-cache",variables:{id:l}});return p?(i.default.push("/404"),!1):f?(0,t.jsx)(y.f,{height:"100%",width:"100%",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(M.f,{color:"secondary"})}):(0,t.jsxs)($.f,{sx:{width:"100%",height:"100%"},children:[(0,t.jsxs)(s.f,{value:h,onChange:(e,t)=>{u(t)},changeQuery:!0,defaultValue:"details",queryKey:"tab",children:[(0,t.jsx)(o.f,{label:"Details",value:"details"}),(0,t.jsx)(o.f,{label:"Work Orders",value:"work-orders"}),(0,t.jsx)(o.f,{label:"Planned Maintenance",value:"planned-maintenance"})]}),(0,t.jsx)(a.f,{value:h,index:"details",children:(0,t.jsx)(S,{tenant:x.tenant,refetch:m,location:x.tenant.bookings?.[0]?.location??null})}),(0,t.jsx)(a.f,{value:h,index:"work-orders",children:(0,t.jsx)(z.f,{filtersVisibilityModel:{customer:c("admin"),location:c(["admin","supplier"]),user:c("supplier"),manager:!1,customerManager:!1},defaultFilters:{locationId:x?.tenant?.bookings[0]?.location?.id},initialFilters:{..._.P,filterType:"tenants_work_orders_tab"}})}),(0,t.jsx)(a.f,{value:h,index:"planned-maintenance",children:(0,t.jsx)(L.f,{locationId:x?.tenant?.bookings[0]?.location?.id,locationName:x?.tenant?.bookings[0]?.location?.name,calendarInitialFilters:{filterType:`tenant_${x?.tenant?.bookings[0]?.location?.id}`,locationId:x?.tenant?.bookings[0]?.location?.id},hideCalendarFilters:["location"],tableInitialFilters:{filterType:`tenant_${x?.tenant?.bookings[0]?.location?.id}`,locationId:x?.tenant?.bookings[0]?.location?.id},hideTableFilters:["location"],itemsInitialFilters:{locationId:x?.tenant?.bookings[0]?.location?.id,filterType:`tenant_${x?.tenant?.bookings[0]?.location?.id}`},hideItemsFilters:["location","complianceCategory"],hideFinances:!0,hideItems:!0})})]})},P=()=>{let{query:e}=(0,i.useRouter)(),{hasRole:r,user:n}=(0,d.f)(),s=r("tenant"),o=s?n.id:e.id;return o?(0,t.jsx)(B,{id:o,isTenant:s,adminId:n?.adminId}):(i.default.push("/404"),null)};var E=e.i(293965);let R=()=>(0,t.jsx)(P,{});R.getLayout=function(e){return(0,t.jsx)(E.f,{children:e})},e.s(["default",0,R],469106)}],98395,(e,t,i)=>{let r="/dashboard/tenant/view";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(469106)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);