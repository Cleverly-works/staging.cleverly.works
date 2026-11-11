(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,827594,765951,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(738251),r=e.i(755548),n=e.i(813843),l=e.i(115871),o=e.i(478201),s=e.i(21557),d=e.i(170582);e.s(["f",0,e=>{let{accept:c=d.s,multiple:u=!0,disabled:f=!1,onFilesSelected:p}=e,[m,h]=(0,i.useState)(!1),g=(0,i.useRef)(null),y=(0,s.f)(),x=(0,i.useCallback)(e=>{if(!c)return!0;let t=c.split(",").map(e=>e.trim().toLowerCase()),i="."+(e.name.split(".").pop()?.toLowerCase()||""),a=e.type.toLowerCase();return t.some(e=>e.startsWith(".")?i===e:e.endsWith("/*")?a.startsWith(e.replace("/*","/")):a===e)},[c]),v=(0,i.useCallback)(e=>{let t=Array.from(e),i=[],a=[],r=[];if(t.forEach(e=>{x(e)?(0,d.V)(e)?i.push(e):a.push(e):r.push(e)}),r.length>0){let e=r.map(e=>e.name).join(", ");y.show({content:`The following files have unsupported formats and were not added: ${e}`,severity:"error"})}if(a.length>0){let e=a.map(e=>e.name).join(", ");y.show({content:`The following files exceed the ${d.H} limit and were not added: ${e}`,severity:"error"})}let n=u?i:i.slice(0,1);n.length>0&&p(n)},[x,u,p,y]),b=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),f||h(!0)},[f]),j=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),f||h(!0)},[f]),C=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),h(!1)},[]),w=(0,i.useCallback)(e=>{e.preventDefault(),e.stopPropagation(),h(!1),!f&&e.dataTransfer.files.length>0&&v(e.dataTransfer.files)},[f,v]),M=(0,i.useCallback)(e=>{e.target.files&&e.target.files.length>0&&v(e.target.files),e.target.value=""},[v]),_=(0,i.useCallback)(()=>{f||g.current?.click()},[f]);return(0,t.jsxs)(a.f,{onClick:_,onDragOver:b,onDragEnter:j,onDragLeave:C,onDrop:w,sx:{border:"2px dashed",borderColor:m?"secondary.main":"#ccc",borderRadius:2,backgroundColor:m?"action.hover":"#f8f9fa",padding:4,cursor:f?"default":"pointer",opacity:f?.5:1,transition:"border-color 0.2s, background-color 0.2s"},children:[(0,t.jsxs)(n.f,{alignItems:"center",spacing:1.5,children:[(0,t.jsx)(o.default,{sx:{fontSize:48,color:"text.secondary"}}),(0,t.jsx)(l.f,{variant:"body1",fontWeight:500,color:"text.primary",children:"Choose a file or drag & drop it here."}),(0,t.jsx)(l.f,{variant:"body2",color:"text.secondary",children:`${d.M} formats, up to ${d.H}.`}),(0,t.jsx)(r.f,{variant:"outlined",color:"secondary",size:"small",onClick:e=>{e.stopPropagation(),_()},disabled:f,children:"Browse files"})]}),(0,t.jsx)("input",{ref:g,type:"file",accept:c,multiple:u,hidden:!0,onChange:M})]})}],827594);var c=e.i(936641),u=e.i(575354),f=e.i(773831),p=e.i(512057),m=e.i(668724),h=e.i(886779),g=e.i(54448),y=e.i(631787),x=e.i(572007);let v=e=>e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1048576).toFixed(1)} MB`,b={uploading:{label:"Uploading...",color:"warning",icon:(0,t.jsx)(y.default,{color:"info",sx:{fontSize:"16px"}})},completed:{label:"Completed",color:"success",icon:(0,t.jsx)(g.default,{color:"success",sx:{fontSize:"16px"}})},failed:{label:"Failed",color:"error",icon:(0,t.jsx)(x.default,{color:"error",sx:{fontSize:"16px"}})}};e.s(["f",0,e=>{let i,r,{file:n,progress:o,status:s,error:g,onCancel:y,onDelete:x}=e,j=o/100*n.size,C="pending"!==s?b[s]:null;return(0,t.jsxs)(a.f,{sx:{display:"flex",alignItems:"center",gap:2,p:1.5},children:[(0,t.jsx)(a.f,{sx:{display:"flex",alignItems:"center",flexShrink:0},children:(i=(0,d.n)(n),r="/static/media-upload/doc.svg","image"===i&&(r="/static/media-upload/image.svg"),"application/pdf"===n.type&&(r="/static/media-upload/pdf.svg"),("message/rfc822"===n.type||"application/vnd.ms-outlook"===n.type)&&(r="/static/media-upload/eml.svg"),(0,t.jsx)(a.f,{component:"img",sx:{fontSize:32},src:r}))}),(0,t.jsxs)(a.f,{sx:{flex:1,minWidth:0},children:[(0,t.jsx)(l.f,{variant:"body2",sx:{fontWeight:500,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.name}),(0,t.jsxs)(h.f,{direction:"row",alignItems:"center",children:[(0,t.jsxs)(l.f,{variant:"caption",color:"text.secondary",children:[v(j)," of ",v(n.size)]}),C&&(0,t.jsxs)(h.f,{direction:"row",alignItems:"center",ml:2,children:[C.icon,(0,t.jsx)(l.f,{variant:"caption",color:"text.primary",ml:.5,children:C.label})]})]}),(0,t.jsx)(u.f,{variant:"determinate",color:"secondary",value:o,sx:{height:"8px",mt:.5,borderRadius:1}}),"failed"===s&&g&&(0,t.jsx)(c.f,{severity:"error",sx:{mt:1},children:g})]}),(0,t.jsxs)(a.f,{sx:{display:"flex",alignItems:"center",gap:1,flexShrink:0},children:["uploading"===s&&y&&(0,t.jsx)(f.f,{size:"small",onClick:y,"aria-label":"Cancel upload",children:(0,t.jsx)(p.default,{fontSize:"small"})}),("completed"===s||"failed"===s)&&x&&(0,t.jsx)(f.f,{size:"small",onClick:x,"aria-label":"Delete file",children:(0,t.jsx)(m.default,{fontSize:"small"})})]})]})}],765951)},6837,e=>{var t=e.i(391398),i=e.i(738251),a=e.i(377198);e.s(["f",0,e=>{let{file:r,embeddedIn:n,...l}=e,o=(0,a.f)(r,n);return(0,t.jsx)(i.f,{component:"img",src:o,...l})}])},558091,e=>{var t=e.i(391398),i=e.i(821627),a=e.i(477882),r=e.i(886779),n=e.i(280445),l=e.i(356119);let o=(0,n.f)(a.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100vw",maxWidth:"600px",maxHeight:"100vh",padding:"16px",borderRadius:"8px",overflow:"auto"}));e.s(["f",0,e=>{let{onCancel:a,onConfirm:n,title:s="Unsaved changes",body:d="Leaving this page means you will lose any updates you've made.",cancelLabel:c="Cancel",confirmLabel:u="Confirm"}=e;return(0,t.jsxs)(o,{children:[(0,t.jsx)(l.f,{variant:"h6",sx:{padding:"0 0 16px 0"},children:s}),(0,t.jsx)(r.f,{children:(0,t.jsx)(l.f,{sx:{textAlign:"left"},children:d})}),(0,t.jsxs)(r.f,{direction:"row",spacing:2,justifyContent:"flex-end",sx:{padding:"16px 0 16px 24px"},children:[(0,t.jsx)(i.f,{onClick:a,color:"danger",variant:"contained",children:c}),(0,t.jsx)(i.f,{onClick:n,color:"secondary",variant:"contained",children:u})]})]})}])},454684,e=>{var t=e.i(191788),i=e.i(203828);e.i(443645);var a=e.i(648116),r=e.i(558091);let n=e=>"object"==typeof e&&null!==e;e.s(["f",0,e=>{let l=(0,i.useRouter)(),[o,s]=(0,a.f)(),d=(0,t.useRef)(n(e)?e.current:e),c=(0,t.useRef)(!1),u=(0,t.useRef)("");return(0,t.useEffect)(()=>{n(e)||(d.current=e)},[e]),(0,t.useEffect)(()=>{let i=t=>{if(!(n(e)?e.current:d.current)||c.current){c.current=!1;return}throw u.current=t,window.location.pathname+window.location.search!==l.asPath.split("#")[0]&&window.history.pushState(null,"",l.asPath),l.events.emit("routeChangeError",Error("Route change aborted by user")),"Route change aborted by user"},a=e=>{if(e instanceof Error&&"Route change aborted by user"===e.message)s({content:e=>{let{onClose:i}=e;return t.createElement(r.f,{onCancel:()=>i(),onConfirm:()=>{i(),c.current=!0,l.push(u.current)}})}});else throw e};return l.events.on("routeChangeStart",i),l.events.on("routeChangeError",a),()=>{l.events.off("routeChangeStart",i),l.events.off("routeChangeError",a)}},[l,s,e]),(0,t.useEffect)(()=>{let t=t=>{(n(e)?e.current:d.current)&&(t.preventDefault(),t.returnValue="")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[e]),o}])},106997,e=>{var t=e.i(391398),i=e.i(800884),a=e.i(76381),r=e.i(515523),n=e.i(652148),l=e.i(191788),o=e.i(691567);let s=()=>{},d=[],c=()=>{},u=()=>{},f={},p=e=>{let{color:o="secondary",onChange:p=s,options:m=d,onOpen:h=c,loading:g,setSearch:y=u,textFieldProps:x=f,disableClearable:v,...b}=e,[j,C]=(0,l.useState)("");return(0,l.useEffect)(()=>{let e=setTimeout(()=>{y(j)},500);return()=>clearTimeout(e)},[j,y]),(0,t.jsx)(r.f,{isOptionEqualToValue:(e,t)=>e?.value===t?.value,...{color:o,onChange:p,options:m,onOpen:h,...b},loading:g,onInputChange:(e,t)=>{C(t)},getOptionLabel:e=>e?.label??"",renderOption:(e,i,a)=>{let r=i?.label||"",n=((e,t)=>{let i=t?.trim()||"";if(!i||!e||i.length<3)return e;let a=[],r=i.toLowerCase(),n=e.toLowerCase(),l=0,o=n.indexOf(r);for(;-1!==o;)o>l&&a.push({text:e.substring(l,o),highlight:!1}),a.push({text:e.substring(o,o+i.length),highlight:!0}),l=o+i.length,o=n.indexOf(r,l);return l<e.length&&a.push({text:e.substring(l),highlight:!1}),a})(r,j||"");return(0,t.jsx)("li",{...e,children:Array.isArray(n)?(0,t.jsx)("span",{children:n.map((e,i)=>e.highlight?(0,t.jsx)("strong",{children:e.text},i):(0,t.jsx)("span",{children:e.text},i))}):r})},renderTags:(e,a)=>e.map((e,r)=>(0,t.jsx)(i.f,{size:"small",label:e.label,...a({index:r})})),renderInput:e=>(0,t.jsx)(n.f,{...e,...x,InputProps:{...e.InputProps,...x.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[g?(0,t.jsx)(a.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})};p.propTypes={multiple:o.default.bool,limitTags:o.default.number,filterSelectedOptions:o.default.bool,color:o.default.string,loading:o.default.bool,value:o.default.oneOf([o.default.array,o.default.object]),onChange:o.default.func,options:o.default.arrayOf(o.default.shape({value:o.default.any.isRequired,label:o.default.string.isRequired})),onOpen:o.default.func,setSearch:o.default.func,textFieldProps:o.default.shape({label:o.default.string,variant:o.default.oneOf(["standard"]),color:o.default.string,error:o.default.bool,helperText:o.default.string})},e.s(["f",0,p])},130325,e=>{var t=e.i(391398),i=e.i(362537),a=e.i(422411),r=e.i(738251),n=e.i(722394);e.s(["f",0,e=>{let{control:l,errors:o={},minDate:s,name:d,onChange:c,placeholder:u,space:f=!0,value:p}=e,m=(e,a)=>(0,t.jsx)(n.f,{format:"D MMM YYYY",minDate:s?(0,i.default)(s):void 0,onChange:e=>a(e?.isValid()?e.toDate():null),slotProps:{field:{clearable:!0},textField:{color:"secondary",error:!!o[d],fullWidth:!0,placeholder:u,size:"small"}},value:e?(0,i.default)(e):null});return(0,t.jsxs)(t.Fragment,{children:[c?m(p,c):(0,t.jsx)(a.e,{control:l,name:d,render:e=>m(e.value,e.onChange)}),f&&(0,t.jsx)(r.f,{mb:1.5})]})}])},614707,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
  mutation resetMediaMainPhoto($entity: String!, $entityId: Int!, $category: String!) {
    resetOldCategory: update_Media(
      where: {
        category: { _eq: $category }
        Media_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
      }
      _set: { category: null }
    ) {
      affected_rows
      returning {
        id
        category
      }
    }
  }
`,r=t.f`
  mutation updateMediaCategory(
    $entity: String!
    $entityId: Int!
    $category: String!
    $mediaId: Int!
  ) {
    resetOldCategory: update_Media(
      where: {
        category: { _eq: $category }
        Media_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
      }
      _set: { category: null }
    ) {
      affected_rows
      returning {
        id
        category
      }
    }

    setNewCategory: update_Media_by_pk(
      pk_columns: { id: $mediaId }
      _set: { category: $category }
    ) {
      id
      category
      caption
      filename
    }
  }
`;e.s(["o",0,i,"l",0,a,"P",0,r])},886143,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`;e.s(["o",0,i,"A",0,a])},704129,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(362537),r=e.i(776204),n=e.i(327682),l=e.i(798864),o=e.i(594301),s=e.i(106997),d=e.i(827594),c=e.i(765951),u=e.i(498681),f=e.i(21557),p=e.i(511667),m=e.i(936641),h=e.i(755548),g=e.i(813843),y=e.i(652148),x=e.i(115871),v=e.i(152078),b=e.i(799083),j=e.i(614707),C=e.i(170582),w=e.i(130325),M=e.i(684779),_=e.i(974266),$=e.i(477882),I=e.i(454684),k=e.i(411331);e.i(443645);var E=e.i(648116),S=e.i(558091);e.s(["f",0,e=>{let{accept:P,adminId:R,category:q=null,entity:O,entityId:A,expiryShow:T=!0,mediaMeta:D=null,multiple:z,maxFiles:L,onSuccess:F,type:U,showVisibility:H=!0,showSubmitButton:B=!1}=e,V=(0,f.f)(),{user:W}=(0,o.f)(),{mediaVisibility:K=[]}=(0,u.f)().user,[N,Q]=(0,i.useState)(null),[Y,G]=(0,i.useState)(!1),[J,X]=(0,i.useState)([]),[Z,ee]=(0,i.useState)(!1),et=(0,i.useRef)(!1),ei=(0,i.useRef)([]);ei.current=J,(0,i.useEffect)(()=>()=>{et.current||ei.current.forEach(e=>e.xhr?.abort())},[]);let ea=J.some(e=>e.s3Response?.key||"uploading"===e.status||"pending"===e.status),er=(0,I.f)(ea),en=(0,k.f)(),[el,eo]=(0,E.f)(),es=(0,i.useRef)(ea);es.current=ea,(0,i.useEffect)(()=>(en.setConfirmClose(()=>!es.current||!!et.current||new Promise(e=>{eo({content:i=>{let{onClose:a}=i;return(0,t.jsx)(S.f,{title:"Closing this panel will cancel any unfinished uploads",body:"Closing this panel will cancel files that are still uploading. Continue?",cancelLabel:"Keep uploading",confirmLabel:"Close",onCancel:()=>{a(),e(!1)},onConfirm:()=>{a(),e(!0)}})}})})),()=>{en.setConfirmClose(null)}),[en,eo]);let[ed]=(0,r.f)(n.p,{refetchQueries:["MEDIAS"],onError:e=>{V.show({content:`Error: ${e.message}`,severity:"error"})}}),[ec]=(0,p.f)("/media/delete",{queryKey:"deleteUploadedFile",method:"POST"}),[eu]=(0,r.f)(j.l,{refetchQueries:["MEDIAS"],onError:e=>{V.show({content:`Error: ${e.message}`,severity:"error"})}}),ef=(0,i.useCallback)(e=>{if("image"===U)return"image";if("document"===U)return"document";let t=(0,C.n)(e);return"image"===t||"document"===t||"audio"===t?t:"document"},[U]),ep=(0,i.useCallback)((e,t)=>{X(i=>i.map(i=>i.id===e?{...i,...t}:i))},[]),em=(0,i.useCallback)(e=>{let{promise:t,xhr:i}=(0,l.x)(e.file,e.fileType,t=>ep(e.id,{progress:t}));ep(e.id,{status:"uploading",xhr:i}),t.then(t=>{ep(e.id,{status:"completed",progress:100,s3Response:t,xhr:null})}).catch(t=>{let i=t instanceof Error?t.message:"Upload failed";ep(e.id,{status:"failed",error:i,xhr:null})})},[ep]),eh=(0,i.useCallback)(e=>{let t=z?J.length:0;if(void 0!==L&&t+e.length>L){let e=Math.max(L-t,0);V.show({content:0===e?"No more files can be added.":`Only ${e} more file${1===e?"":"s"} can be added.`,severity:"error"});return}let i=e.map(e=>({id:crypto.randomUUID(),file:e,description:"",fileType:ef(e),visibility:K[0]||null,progress:0,status:"pending",s3Response:null,error:null,xhr:null}));z?X(e=>[...e,...i]):X(e=>(e.forEach(e=>e.xhr?.abort()),i)),i.forEach(e=>em(e))},[z,L,J.length,V,ef,K,em]),eg=(0,i.useCallback)(e=>{let t=J.find(t=>t.id===e);t?.xhr&&t.xhr.abort(),X(t=>t.filter(t=>t.id!==e))},[J]),ey=(0,i.useCallback)(e=>{let t=J.find(t=>t.id===e);t?.s3Response?.key&&ec({body:{key:t.s3Response.key,thumbnails:t.s3Response.data??[]}}),X(t=>t.filter(t=>t.id!==e))},[J,ec]),ex=(0,i.useCallback)((e,t)=>{ep(e,{description:t})},[ep]),ev=(0,i.useCallback)((e,t)=>{ep(e,{visibility:t})},[ep]),eb=async e=>{if(e.preventDefault(),0===J.length)return void V.show({content:"Please select at least one file.",severity:"error"});if(H&&J.find(e=>!e.visibility))return void V.show({content:"Please select visibility for all files.",severity:"error"});ee(!0);try{if(J.filter(e=>"pending"===e.status||"uploading"===e.status).length>0){V.show({content:"Please wait for all files to finish uploading.",severity:"error"}),ee(!1);return}let e=J.filter(e=>"failed"===e.status);if(e.length>0){V.show({content:`${e.length} file(s) failed to upload. Remove or retry them before submitting.`,severity:"error"}),ee(!1);return}let t=J.map(e=>{let t=e.s3Response;if(!t)throw Error("Missing upload response");let i=e.fileType||U||"document",r=null,n={};if("image"===i){let e=t.key,i=t.data?.find(e=>"large"===e.name);r=i?i.relativePath:e,n={original:{relativePath:e},thumbnails:t.data||null}}else r=t.key;let l={adminId:R??W?.adminId,category:q||(Y?O?.toLowerCase?.()+"MainPhoto":null),caption:e.description||"",expiryAt:N?(0,a.default)(N).utc().format():null,extension:r?.split(".").pop(),userId:W.id,filename:r,meta:{...n,...D},type:i,visibility:e.visibility?.value||K[0]?.value};return O&&A&&(l.Media_Entities={data:[{entity:O,entityId:A}]}),l});if(Y&&(await eu({variables:{entity:O,entityId:A,category:O?.toLowerCase?.()+"MainPhoto"}})).errors||(await ed({variables:{objects:t}})).errors)return;et.current=!0,V.show({content:"Media was successfully added.",severity:"success"}),X([]),Q(null),G(!1),F?.(t)}catch(e){V.show({content:`Error: ${e instanceof Error?e.message:"Upload failed."}`,severity:"error"})}finally{ee(!1)}};return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:eb,children:[(0,t.jsx)(M.f,{sx:{zIndex:1e5},open:Z,children:(0,t.jsx)(_.f,{color:"secondary"})}),er,el,(0,t.jsx)(d.f,{accept:P?"image/*"===P?P+", .heic":P:"image"===U?C.m:"document"===U?C.f:C.s,multiple:(!window?.Capacitor||"android"!==window.Capacitor.getPlatform())&&z,disabled:Z,onFilesSelected:eh}),J.length>0&&(0,t.jsx)(g.f,{spacing:1.5,sx:{mt:2},children:J.map(e=>(0,t.jsxs)($.f,{sx:{border:"2px solid",borderColor:"divider"},children:[(0,t.jsx)(c.f,{file:e.file,progress:e.progress,status:e.status,error:e.error,onCancel:()=>eg(e.id),onDelete:()=>ey(e.id)}),(0,t.jsxs)(g.f,{spacing:2,sx:{pt:1,pl:4,pr:2,pb:3,backgroundColor:"#bdbdbd1f"},children:[(0,t.jsx)(y.f,{label:"File description",value:e.description,onChange:t=>ex(e.id,t.target.value),color:"secondary",variant:"standard",fullWidth:!0,size:"small",disabled:Z}),H&&(0,t.jsx)(s.f,{value:e.visibility,disableClearable:!0,getOptionLabel:e=>e.label,textFieldProps:{color:"secondary",variant:"standard",label:"Select media visibility*"},onChange:(t,i)=>ev(e.id,i),options:K})]})]},e.id))}),(0,t.jsxs)(m.f,{sx:{mt:2,mb:2,backgroundColor:"secondary.main",color:"secondary.contrastText"},children:["File upload restriction: The maximum file size allowed is ",C.H,"."]}),T&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.f,{mb:1,children:"Expiry"}),(0,t.jsx)(w.f,{name:"expiryAt",onChange:e=>Q(e?e.toISOString():null),value:N})]}),"Location"===O&&"image"===U&&(0,t.jsx)(v.f,{sx:{mt:1},label:"Make main photo",control:(0,t.jsx)(b.f,{checked:Y,color:"secondary",onChange:e=>G(e.target.checked)})}),B&&(0,t.jsx)(g.f,{direction:"row",justifyContent:"flex-end",sx:{mt:2},children:(0,t.jsx)(h.f,{type:"submit",variant:"contained",color:"secondary",disabled:Z||0===J.length||J.some(e=>"uploading"===e.status||"pending"===e.status),children:"Submit"})})]})}])},327682,e=>{var t=e.i(159080);let i=t.f`
  mutation AddMedia($objects: [Media_insert_input!]!) {
    insert_Media(objects: $objects) {
      returning {
        id
        filename
      }
    }
  }
`,a=t.f`
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
`;e.s(["p",0,i,"u",0,a,"w",0,r])},856688,e=>{var t=e.i(776204),i=e.i(432171),a=e.i(170582),r=e.i(511667),n=e.i(886143),l=e.i(327682),o=e.i(191788);e.s(["f",0,function(e,s,d,c){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[f,p]=(0,o.useState)(!1),{data:{items:m}={items:[]},loading:h}=(0,i.t)(n.A,{variables:{entity:e,entityId:c,category:u,adminId:s},skip:!c}),[g,{isLoading:y}]=(0,r.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),[x]=(0,t.f)(l.p,{refetchQueries:["MEDIAS"]}),v=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{p(!0);let a=[];for(let r of t)if(!r.mediaId){let t,n=await b(r),l=null;if("image"===r.type){let e=n.key,i=n.data.find(e=>"large"===e.name);t=i?i.relativePath:e,l={original:{relativePath:e},thumbnails:n.data||null}}else t=n.key;a.push({entity:e,Medium:{data:{adminId:s,caption:r?.caption??null,extension:r?.media?.name?.split(".").pop(),userId:d,category:i,filename:t,type:r.type,meta:l??void 0}}})}return{Media_Entity:{data:a}}}finally{p(!1)}},b=async e=>{let t,i=new window.FormData;switch(e.media&&i.append("file",e.media,e.media.name),e.type){case"image":t=a.G;break;case"document":case"audio":t=a.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let r=window.localStorage.getItem("bearerToken"),n={};r&&(n.Authorization=`Bearer ${r}`);let l=await window.fetch(t,{method:"POST",body:i,headers:n}),o=await l.json();if(!l.ok)throw Error(o?.message||`Upload failed with status ${l.status}`);return o};return{uploadMedia:async(t,i)=>{try{if(p(!0),i){let a=await b(i),r={adminId:s,caption:i.caption,expiryAt:null,extension:i.media.name.split(".").pop(),userId:d,filename:a.key,type:i.type,Media_Entities:{data:[{entity:e,entityId:t}]}};await x({variables:{objects:r}})}}finally{p(!1)}},uploadMediaToS3:b,createMediaInput:v,deleteMediaByEntity:e=>g({body:{mediaId:e}}),loadingAddMedia:f,loadingDeleteMedia:y,preloadedMediaLoading:h,preloadedMedia:m?.length?m:[]}}])},631787,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M12 6v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.79c-.31-.31-.85-.09-.85.36V4c-4.42 0-8 3.58-8 8 0 1.04.2 2.04.57 2.95.27.67 1.13.85 1.64.34.27-.27.38-.68.23-1.04C6.15 13.56 6 12.79 6 12c0-3.31 2.69-6 6-6m5.79 2.71c-.27.27-.38.69-.23 1.04.28.7.44 1.46.44 2.25 0 3.31-2.69 6-6 6v-1.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79c.31.31.85.09.85-.35V20c4.42 0 8-3.58 8-8 0-1.04-.2-2.04-.57-2.95-.27-.67-1.13-.85-1.64-.34"}),"AutorenewRounded")},54448,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.29 16.29 5.7 12.7a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0"}),"CheckCircleRounded")},652002,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded")},478201,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z"}),"CloudUploadOutlined")},668724,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},572007,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"ErrorRounded")},741850,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),n=e.r(391398);i.default=(0,r.default)((0,n.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},684779,e=>{var t=e.i(553875);e.s(["f",()=>t.f])},974266,e=>{var t=e.i(76381);e.s(["f",()=>t.f])},540158,e=>{var t=e.i(460997),i=e.i(75907),a=e.i(191788),r=e.i(889878),n=e.i(600961),l=e.i(396851),o=e.i(896994),s=e.i(395724),d=e.i(115871),c=e.i(713149),u=e.i(46739);function f(e){return(0,u.f)("MuiDialogContentText",e)}(0,c.f)("MuiDialogContentText",["root"]);var p=e.i(391398);let m=["children","className"],h=(0,l.f)(d.f,{shouldForwardProp:e=>(0,o.f)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),g=a.forwardRef(function(e,a){let l=(0,s.f)({props:e,name:"MuiDialogContentText"}),{className:o}=l,d=(0,t.f)(l,m),c=(e=>{let{classes:t}=e,a=(0,n.f)({root:["root"]},f,t);return(0,i.f)({},t,a)})(d);return(0,p.jsx)(h,(0,i.f)({component:"p",variant:"body1",color:"text.secondary",ref:a,ownerState:d,className:(0,r.f)(c.root,o)},l,{classes:c}))});e.s(["f",0,g],540158)},477882,e=>{var t=e.i(88152);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])}])})();