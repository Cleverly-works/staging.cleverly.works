(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[394989,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(773831),r=e.i(813843),o=e.i(115871),s=e.i(322135),a=e.i(148310),l=e.i(889231),u=e.i(422411),d=e.i(424894),c=e.i(755548),m=e.i(652148),f=e.i(376733),p=e.i(978319),h=e.i(426778);let g=h.t({name:h.x().required("Name is required"),url:h.x().url().required("URL is required")}),y=e=>{let{noEdit:o=!1,noDelete:a=!1,isAdded:h=!1,id:y,url:v="",name:b="",onSave:_=()=>{},onCancel:S=()=>{},onDelete:w=()=>{}}=e,[I,$]=(0,i.useState)(h),{control:x,handleSubmit:D,errors:F}=(0,u.G)({resolver:(0,d.yupResolver)(g)});return(0,t.jsx)("form",{children:I?(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{spacing:1,children:[(0,t.jsx)(u.e,{control:x,name:"name",defaultValue:b,render:e=>(0,t.jsx)(m.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!F.name,helperText:F.name?.message})}),(0,t.jsx)(u.e,{control:x,name:"url",defaultValue:v,render:e=>(0,t.jsx)(m.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!F.url,helperText:F.url?.message})})]}),(0,t.jsxs)(r.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(c.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),$(!1),S(y)},children:"Cancel"}),(0,t.jsx)(c.f,{variant:"contained",size:"small",onClick:D(e=>{_(e),$(!1)}),children:"Save"})]})]}):(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(l.f,{target:"_blank",variant:"body1",color:"secondary",href:v,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:b}),!o&&(0,t.jsx)(s.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),$(!0)},children:(0,t.jsx)(f.default,{sx:{fontSize:"16px"}})})}),!a&&(0,t.jsx)(s.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>w(y),children:(0,t.jsx)(p.default,{sx:{fontSize:"16px"}})})})]})})};var v=e.i(594301);let b=[];e.s(["f",0,e=>{let{values:l=b,setValue:u=()=>{},name:d,title:c="Related links",displayMode:m=!1,noDeleteEdit:f=!1,titleSx:p={}}=e,[h,g]=(0,i.useState)([]),{hasRole:_}=(0,v.f)(),S=_("tenant");(0,i.useEffect)(()=>{Array.isArray(l)&&g((l??[]).map(e=>({...e,id:e?.id||Date.now()})))},[l]);let w=e=>{g(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(o.f,{sx:p,children:[c,":"]}),!m&&!S&&(0,t.jsx)(s.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),g(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(a.default,{})})})]}),(0,t.jsx)(r.f,{pl:2,spacing:.8,children:h?.length?h.map(e=>{let t;return(0,i.createElement)(y,{...e,key:e.id,onCancel:w,noEdit:f||m,noDelete:f||m,onDelete:(t=e.id,()=>{if(!d)return;let e=h.filter(e=>e.id!==t);u?.(d,e),g(e)}),onSave:t=>((e,t)=>{if(!d)return;let i=[...h],n=i.findIndex(t=>t.id===e);-1!==n&&i.splice(n,1,{...t,isAdded:!1,id:e}),u?.(d,i)})(e.id,t)})}):(0,t.jsx)(o.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},890350,e=>{var t,i,n,r=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),o=((i={}).VERIFIED="verified",i.UNVERIFIED="unverified",i),s=((n={}).CLEVERLY="cleverly",n.XERO="xero",n.BIDIRECTIONAL="bidirectional",n.NONE="none",n);e.s(["d",()=>r,"T",()=>o,"$",()=>s])},874711,e=>{var t=e.i(191788);e.s(["f",0,()=>{let e=(0,t.useRef)(null),i=(0,t.useCallback)(()=>{e.current&&(clearTimeout(e.current),e.current=null)},[]),n=(0,t.useCallback)((t,n)=>{i(),e.current=setTimeout(t,n)},[i]);return(0,t.useEffect)(()=>()=>{i()},[i]),{setTimeout:n,clearTimeout:i}}])},175872,e=>{var t=e.i(191788);e.s(["f",0,(e,i)=>{let n=(0,t.useRef)(null),r=(0,t.useRef)(e),o=(0,t.useRef)(i);return(0,t.useEffect)(()=>{r.current=e},[e]),(0,t.useEffect)(()=>{o.current=i,n.current&&(clearTimeout(n.current),n.current=null)},[i]),(0,t.useEffect)(()=>()=>{n.current&&clearTimeout(n.current)},[]),(0,t.useCallback)(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];n.current&&clearTimeout(n.current),n.current=setTimeout(()=>{r.current(...t)},o.current)},[])}])},441625,e=>{var t=e.i(159080);let i=t.f`
  query GetForms(
    $q: String
    $name: String
    $userId: Int
    $status: Boolean
    $createdAt: timestamptz
    $orderBy: [Form_order_by!]
    $limit: Int
    $offset: Int
  ) {
    Form(
      where: {
        _and: [
          { name: { _ilike: $q } }
          { userId: { _eq: $userId } }
          { status: { _eq: $status } }
          { createdAt: { _eq: $createdAt } }
        ]
      }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      id
      name
      description
      createdAt
      userId
      status
      formFields
      settings
      FormUser {
        id
        nameFirst
        nameLast
        __typename
      }
      __typename
    }
    meta: Form_aggregate(
      where: {
        _and: [
          { name: { _ilike: $q } }
          { userId: { _eq: $userId } }
          { status: { _eq: $status } }
          { createdAt: { _eq: $createdAt } }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,n=t.f`
  mutation UpdateStatus($id: Int!, $status: Boolean!) {
    update_Form_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      status
    }
  }
`,r=t.f`
  query GetFormNames($q: String, $limit: Int = 50, $offset: Int = 0) {
    Form(where: { name: { _ilike: $q } }, limit: $limit, offset: $offset) {
      name
      id
      formFields
      settings
    }
  }
`,o=t.f`
  query GetActiveForms($q: String, $limit: Int = 50, $offset: Int = 0) {
    Form(
      where: { status: { _eq: true }, name: { _ilike: $q } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      name
      id
      status
      formFields
      settings
    }
  }
`,s=t.f`
  query GetFormById($id: Int!) {
    Form_by_pk(id: $id) {
      id
      userId
      status
      name
      description
      formFields
      adminId
      createdAt
      updatedAt
      settings
      meta
    }
  }
`,a=t.f`
  mutation AddForm($object1: Form_insert_input!) {
    insert_Form_one(object: $object1) {
      id
    }
  }
`,l=t.f`
  mutation UpdateForm(
    $formId: Int!
    $formSubmissionId: Int
    $formFields: jsonb
    $formChanges: Form_set_input!
    $submissionChanges: FormSubmissions_set_input
    $updateSubmissions: Boolean! = false
  ) {
    update_Form_by_pk(pk_columns: { id: $formId }, _set: $formChanges) {
      id
      userId
      status
      name
      description
      formFields
      settings
      meta
      updatedAt
    }
    update_FormSubmissions(
      where: { formId: { _eq: $formId }, entity: { _eq: "Taxonomy" } }
      _set: { submissionData: null, formFields: $formFields }
    ) {
      affected_rows
      returning {
        id
        formId
        formFields
        submissionData
        entity
        entityId
      }
    }
    update_FormSubmissions_by_pk(pk_columns: { id: $formSubmissionId }, _set: $submissionChanges)
      @include(if: $updateSubmissions) {
      id
      formId
      formFields
      submissionData
      entity
      entityId
    }
  }
`,u=t.f`
  mutation UpdateStatusAndEntity($formId: Int!) {
    update_Form(where: { id: { _eq: $formId } }, _set: { status: false }) {
      affected_rows
    }
    delete_FormSubmissions(
      where: {
        formId: { _eq: $formId }
        _or: [
          {
            entity: { _eq: "Taxonomy" }
            FormSubmissionsTaxonomies: {
              status: { _in: ["active", "followOn", "reportSent", "completed"] }
            }
          }
          {
            entity: { _eq: "Job" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          {
            entity: { _eq: "Ppm" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          { entity: { _eq: "Task" }, FormSubmissionsTasks: { status: { _in: ["new", "todo"] } } }
          { entity: { _eq: "Workflow" }, FormSubmissionsWorkflows: { status: { _in: ["active"] } } }
        ]
      }
    ) {
      affected_rows
    }
  }
`,d=t.f`
  mutation UpdateIncompleteSubmissionsByForm(
    $formId: Int!
    $formFields: jsonb!
    $submissionData: jsonb = null
  ) {
    update_FormSubmissions(
      where: {
        formId: { _eq: $formId }
        entity: { _neq: "Taxonomy" }
        _or: [
          {
            entity: { _eq: "Job" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          {
            entity: { _eq: "Ppm" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          { entity: { _eq: "Task" }, FormSubmissionsTasks: { status: { _in: ["new", "todo"] } } }
          { entity: { _eq: "Workflow" }, FormSubmissionsWorkflows: { status: { _in: ["active"] } } }
        ]
      }
      _set: { submissionData: $submissionData, formFields: $formFields }
    ) {
      affected_rows
      returning {
        id
        formId
        formFields
        submissionData
        entity
        entityId
      }
    }
  }
`,c=t.f`
  query GetFormSubmission($entity: form_submission_entity!, $entityId: Int!) {
    FormSubmissions(
      where: { _and: [{ entity: { _eq: $entity } }, { entityId: { _eq: $entityId } }] }
    ) {
      id
      formId
      userId
      formFields
      submissionData
      entity
      entityId
      type
      createdAt
      updatedAt
      form: FormSubmissionsForm {
        name
        description
        status
        settings
        createdAt
        updatedAt
      }
    }
  }
`,m=t.f`
  query GetFormSubmissionById($id: Int!) {
    FormSubmissions_by_pk(id: $id) {
      id
      formId
      userId
      formFields
      submissionData
      entity
      entityId
      type
      createdAt
      updatedAt
      form: FormSubmissionsForm {
        name
        status
        description
        settings
        createdAt
        updatedAt
      }
    }
  }
`,f=t.f`
  mutation CreateFormSubmissions(
    $formId: Int!
    $userId: Int!
    $formFields: jsonb!
    $submissionData: jsonb
    $entity: form_submission_entity!
    $entityId: Int!
  ) {
    insert_FormSubmissions_one(
      object: {
        formId: $formId
        userId: $userId
        formFields: $formFields
        submissionData: $submissionData
        entity: $entity
        entityId: $entityId
      }
    ) {
      id
      formId
      userId
      formFields
      submissionData
      entity
      entityId
    }
  }
`;t.f`
  mutation CreateFormSubmissionsBulk($objects: [FormSubmissions_insert_input!]!) {
    insert_FormSubmissions(objects: $objects) {
      affected_rows
    }
  }
`;let p=t.f`
  mutation UpdateFormSubmission($id: Int!, $changes: FormSubmissions_set_input!) {
    update_FormSubmissions_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      formId
      formFields
      submissionData
      entity
      entityId
      type
      pdfGenerationStatus
      pdfGenerationId
    }
  }
`,h=t.f`
  mutation deleteFormSubmission($id: Int!) {
    delete_FormSubmissions(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;t.f`
  query GetFormSubmissionMedia($id: Int!, $entity: form_submission_entity!) {
    Media(
      where: {
        Media_Entities: {
          entity: { _eq: "FormSubmission" }
          FormSubmissions: { entityId: { _eq: $id }, entity: { _eq: $entity } }
        }
      }
    ) {
      id
      filename
      extension
      caption
      type
      category
      meta
      visibility
    }
  }
`,e.s(["H",0,a,"O",0,f,"F",0,h,"W",0,o,"a",0,i,"z",0,s,"B",0,r,"G",0,c,"_",0,m,"k",0,l,"p",0,p,"I",0,d,"c",0,n,"q",0,u])},591003,e=>{var t=e.i(391398),i=e.i(691567),n=e.i(738251),r=e.i(89029),o=e.i(191788),s=e.i(377198);let a={x:0,y:0},l=()=>{},u=e=>{let{filename:i,initialCoordinates:u=a,color:d="warning",editable:c=!1,showMarker:m=!0,handleChangeCoordinates:f=l}=e,p=(0,o.useRef)(null),h=(0,o.useRef)(null),[g,y]=(0,o.useState)(u),v=(0,s.f)(i);return(0,o.useEffect)(()=>{y(u)},[u]),(0,t.jsx)(n.f,{sx:{position:"relative"},children:v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.f,{ref:h,component:"img",src:v,sx:{width:"100%"},onClick:e=>{if(!c)return;let{clientHeight:t,clientWidth:i}=p.current,{clientHeight:n,clientWidth:r}=h.current,o={x:(e.nativeEvent.offsetX-i/2)*100/r,y:(e.nativeEvent.offsetY-t)*100/n};y(o),f(o)}}),m&&(0,t.jsx)(r.default,{ref:p,color:d,sx:{position:"absolute",width:"8%",height:"auto",top:`${g.y}%`,left:`${g.x}%`}})]})})};u.propTypes={filename:i.default.string.isRequired,initialCoordinates:i.default.shape({x:i.default.number.isRequired,y:i.default.number.isRequired}),color:i.default.string,editable:i.default.bool,showMarker:i.default.bool,handleChangeCoordinates:i.default.func},e.s(["f",0,u])},886143,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["o",0,i,"A",0,n])},856688,e=>{var t=e.i(432171),i=e.i(170582),n=e.i(511667),r=e.i(886143),o=e.i(191788);e.s(["w",0,e=>(e?.Media_Entity.data??[]).flatMap(e=>{let{Medium:{data:t}}=e;return t.filename&&t.type?[{filename:t.filename,type:t.type,caption:t.caption,category:t.category,extension:t.extension,meta:t.meta}]:[]}),"t",0,function(e,s,a,l){let u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[d,c]=(0,o.useState)(!1),{data:{items:m}={items:[]},loading:f}=(0,t.t)(r.A,{variables:{entity:e,entityId:l,category:u,adminId:s},skip:!l}),[p,{isLoading:h}]=(0,n.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),g=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{c(!0);let n=[];for(let r of t)if(!r.mediaId){let t,o=await y(r),l=null;if("image"===r.type){let e=o.key,i=o.data.find(e=>"large"===e.name);t=i?i.relativePath:e,l={original:{relativePath:e},thumbnails:o.data||null}}else t=o.key;n.push({entity:e,Medium:{data:{adminId:s,caption:r?.caption??null,extension:r?.media?.name?.split(".").pop(),userId:a,category:i,filename:t,type:r.type,meta:l??void 0}}})}return{Media_Entity:{data:n}}}finally{c(!1)}},y=async e=>{let t,n=new window.FormData;switch(e.media&&n.append("file",e.media,e.media.name),e.type){case"image":t=i.G;break;case"document":case"audio":t=i.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let r=window.localStorage.getItem("bearerToken"),o={};r&&(o.Authorization=`Bearer ${r}`);let s=await window.fetch(t,{method:"POST",body:n,headers:o}),a=await s.json();if(!s.ok)throw Error(a?.message||`Upload failed with status ${s.status}`);return a};return{uploadMediaToS3:y,createMediaInput:g,deleteMediaByEntity:e=>p({body:{mediaId:e}}),loadingAddMedia:d,loadingDeleteMedia:h,preloadedMediaLoading:f,preloadedMedia:m?.length?m:[]}}])},148648,e=>{let t=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(0===e.length)return t?"Complete the required custom fields before submitting.":"Some required custom fields are not completed.";let i=e.length>1?"s":"",n=e.join("; ");return t?`Complete the required custom field${i}: ${n}.`:`Required custom field${i} not completed: ${n}.`},i=e=>`Correct the custom field${e.length>1?"s":""}: ${e.join("; ")}.`;e.s(["f",0,"Custom fields are still loading — please try again in a moment.","r",0,function(e){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],{missingRequiredFieldNames:r,invalidFieldNames:o}=e;if(0===o.length)return t(r,n);let s=i(o);return r.length>0?`${t(r,n)} ${s}`:s},"A",0,i])},931463,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(886779),r=e.i(356119),o=e.i(122989),s=e.i(591003),a=e.i(432171),l=e.i(195952),u=e.i(594301);e.s(["f",0,e=>{let{asset:d,assetsMap:c=[],assetsMetaData:m,locationItems:f,setAssetsMap:p}=e,{user:h}=(0,u.f)(),[g,y]=(0,i.useState)(c.find(e=>e.id===d.value)?.map||"location"),v=(0,i.useMemo)(()=>m.find(e=>e.id===d.value),[m,d.value]),{data:{items:b}={items:[]}}=(0,a.t)(l.J,{variables:{adminId:h.adminId,entityId:v?.sublocationId,entity:"Sublocation",category:"sublocationFloorplan",type:"image"},skip:!v?.sublocationId||!h?.adminId}),_=(0,i.useMemo)(()=>"location"===g?f:"sublocation"===g?b:[],[g,f,b]),S=(0,i.useMemo)(()=>_?.[0]?.item?.filename,[_]),w=!!S,I=!!v?.sublocationId,$=(0,i.useMemo)(()=>v?.meta?.coordinates?.[g],[v,g]),x=(0,i.useCallback)(e=>{let t=c.find(e=>e.id===d.value);t?p(c.map(i=>i.id===t.id?{...i,map:e}:i)):p([...c,{id:d.value,map:e}])},[d.value,c,p]),D=(0,i.useMemo)(()=>[{label:"Location",value:"location"},...v?.sublocationId?[{label:"Sublocation",value:"sublocation"}]:[]],[v]);return(0,t.jsxs)(n.f,{gap:2,children:[g&&I&&(0,t.jsx)(o.f,{value:g,label:"Map",onChange:e=>{y(e.target.value),x(e.target.value)},onClick:e=>e.stopPropagation(),options:D,fullWidth:!0,variant:"standard",color:"secondary"}),(0,t.jsx)(n.f,{children:w?(0,t.jsx)(s.f,{editable:!1,filename:S,initialCoordinates:$}):(0,t.jsxs)(r.f,{color:"#626262",children:["No map exists for this ","sublocation"===g?"sublocation":"location"]})})]})}])},320306,e=>{var t=e.i(391398),i=e.i(115871),n=e.i(122989),r=e.i(813843),o=e.i(591003);e.s(["f",0,e=>{let{selectedMap:s,sublocationId:a,setSelectedMap:l,hasMap:u,filename:d,handleChangeCoordinates:c,initialCoordinates:m}=e;return(0,t.jsxs)(r.f,{spacing:2,children:[s&&a&&(0,t.jsx)(n.f,{label:"Map",value:s,onChange:e=>l(e.target.value),onClick:e=>e.stopPropagation(),options:[{label:"Location",value:"location"},{label:"Sublocation",value:"sublocation"}],fullWidth:!0,variant:"standard",color:"secondary"}),(0,t.jsx)(r.f,{children:u?(0,t.jsx)(o.f,{editable:!0,filename:d,initialCoordinates:m,handleChangeCoordinates:c},s):(0,t.jsxs)(i.f,{color:"#626262",children:["No map exists for this ",s]})})]})}])},977982,e=>{var t=e.i(191788),i=e.i(874711);e.s(["f",0,function(){let{initialCoordinates:e={location:{x:0,y:0},sublocation:{x:0,y:0}},initialAssetsMap:n=[],initialJobMap:r,onCoordinatesChange:o,onAssetsMapChange:s,setValue:a,debounceDelay:l=1e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[u,d]=(0,t.useState)(e),[c,m]=(0,t.useState)(r||"location"),[f,p]=(0,t.useState)(n),{setTimeout:h,clearTimeout:g}=(0,i.f)(),y=(0,t.useCallback)((e,t)=>e?.x===t?.x&&e?.y===t?.y,[]),v=(0,t.useCallback)(e=>{g(),h(()=>{if("location"!==c||y(e,u.location)){if("sublocation"===c&&!y(e,u.sublocation)){let t={...u,sublocation:e};d(t),o?.(t),a&&(a("jobMap",{coordinates:t,map:c},{shouldDirty:!0}),a("assetsMap",{assets:f},{shouldDirty:!0}))}}else{let t={...u,location:e};d(t),o?.(t),a&&(a("jobMap",{coordinates:t,map:c},{shouldDirty:!0}),a("assetsMap",{assets:f},{shouldDirty:!0}))}},l)},[c,u,y,o,l,h,g,a,f]),b=(0,t.useCallback)(e=>{m(e),a&&(a("jobMap",{coordinates:u,map:e},{shouldDirty:!0}),a("assetsMap",{assets:f},{shouldDirty:!0}))},[a,f,u]),_=(0,t.useCallback)(e=>{d(t=>{let i={...t,...e};return a&&(a("jobMap",{coordinates:i,map:c},{shouldDirty:!0}),a("assetsMap",{assets:f},{shouldDirty:!0})),i})},[a,c,f]),S=(0,t.useCallback)(e=>{p(t=>{let i=[...t.filter(t=>e.some(e=>e.value===t.id)),...e.filter(e=>!t.some(t=>t.id===e.value)).map(e=>({id:e.value,map:"location"}))];return s?.(i),a&&(a("jobMap",{coordinates:u,map:c},{shouldDirty:!0}),a("assetsMap",{assets:i},{shouldDirty:!0})),i})},[s,a,c,u]),w=(0,t.useCallback)(e=>{p(e),s?.(e),a&&(a("jobMap",{coordinates:u,map:c},{shouldDirty:!0}),a("assetsMap",{assets:e},{shouldDirty:!0}))},[s,a,c,u]);return{coordinates:u,selectedMap:c,assetsMap:f,setSelectedMap:b,handleChangeCoordinates:v,updateCoordinates:_,setAssetsMap:w,handleChangeAssets:S}}])},364797,e=>{var t=e.i(191788),i=e.i(432171),n=e.i(195952),r=e.i(594301);e.s(["f",0,e=>{let{locationId:o,sublocationId:s,assetIds:a=[],selectedMap:l}=e,{user:u}=(0,r.f)(),{data:{items:d}={items:[]}}=(0,i.t)(n.J,{variables:{adminId:u.adminId,entityId:o,entity:"Location",category:"locationFloorplan",type:"image"},skip:!o}),{data:{items:c}={items:[]}}=(0,i.t)(n.J,{variables:{adminId:u.adminId,entityId:s,entity:"Sublocation",category:"sublocationFloorplan",type:"image"},skip:!s}),{data:{assets:m}={assets:[]}}=(0,i.t)(n.q,{variables:{ids:a},skip:!a.length}),f=(0,t.useMemo)(()=>"location"===l?d:"sublocation"===l?c:[],[l,d,c]),p=(0,t.useMemo)(()=>f?.[0]?.item?.filename,[f]);return{locationItems:d,sublocationItems:c,assetsMetaData:m,selectedItems:f,imageName:p,hasMap:!!p,filename:p}}])},251825,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline")},652002,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded")},936333,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},555588,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},820726,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"WarningRounded")},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},16135,e=>{var t=e.i(800884);e.s(["f",()=>t.f])},121432,e=>{var t=e.i(773831);e.s(["f",()=>t.f])},241129,e=>{var t=e.i(523042);e.s(["f",()=>t.f])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},379741,e=>{var t=e.i(322135);e.s(["f",()=>t.f])},519088,e=>{var t=e.i(191788),i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},n=function(){return(n=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r="Pixel",o="Percent",s={unit:o,value:.8};function a(e){return"number"==typeof e?{unit:o,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:r,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:o,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),s):(console.warn("scrollThreshold should be string or number"),s)}var l=function(e){function o(){this.constructor=s}function s(t){var i=e.call(this,t)||this;return i.lastScrollTop=0,i.actionTriggered=!1,i.startY=0,i.currentY=0,i.dragging=!1,i.maxPullDownDistance=0,i.getScrollableTarget=function(){return i.props.scrollableTarget instanceof HTMLElement?i.props.scrollableTarget:"string"==typeof i.props.scrollableTarget?document.getElementById(i.props.scrollableTarget):(null===i.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},i.onStart=function(e){!i.lastScrollTop&&(i.dragging=!0,e instanceof MouseEvent?i.startY=e.pageY:e instanceof TouchEvent&&(i.startY=e.touches[0].pageY),i.currentY=i.startY,i._infScroll&&(i._infScroll.style.willChange="transform",i._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},i.onMove=function(e){!i.dragging||(e instanceof MouseEvent?i.currentY=e.pageY:e instanceof TouchEvent&&(i.currentY=e.touches[0].pageY),i.currentY<i.startY||(i.currentY-i.startY>=Number(i.props.pullDownToRefreshThreshold)&&i.setState({pullToRefreshThresholdBreached:!0}),!(i.currentY-i.startY>1.5*i.maxPullDownDistance)&&i._infScroll&&(i._infScroll.style.overflow="visible",i._infScroll.style.transform="translate3d(0px, "+(i.currentY-i.startY)+"px, 0px)")))},i.onEnd=function(){i.startY=0,i.currentY=0,i.dragging=!1,i.state.pullToRefreshThresholdBreached&&(i.props.refreshFunction&&i.props.refreshFunction(),i.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){i._infScroll&&(i._infScroll.style.overflow="auto",i._infScroll.style.transform="none",i._infScroll.style.willChange="unset")})},i.onScrollListener=function(e){"function"==typeof i.props.onScroll&&setTimeout(function(){return i.props.onScroll&&i.props.onScroll(e)},0);var t=i.props.height||i._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;i.actionTriggered||((i.props.inverse?i.isElementAtTop(t,i.props.scrollThreshold):i.isElementAtBottom(t,i.props.scrollThreshold))&&i.props.hasMore&&(i.actionTriggered=!0,i.setState({showLoader:!0}),i.props.next&&i.props.next()),i.lastScrollTop=t.scrollTop)},i.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},i.throttledOnScrollListener=(function(e,t,i){var n,r=!1,o=0;function s(){n&&clearTimeout(n)}function a(){var a=this,l=Date.now()-o,u=arguments;function d(){o=Date.now(),t.apply(a,u)}r||(i&&!n&&d(),s(),void 0===i&&l>150?d():!0!==e&&(n=setTimeout(i?function(){n=void 0}:d,void 0===i?150-l:150)))}return"boolean"!=typeof e&&(i=t,t=e,e=void 0),a.cancel=function(){s(),r=!0},a})(i.onScrollListener).bind(i),i.onStart=i.onStart.bind(i),i.onMove=i.onMove.bind(i),i.onEnd=i.onEnd.bind(i),i}return i(s,e),s.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o),s.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},s.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},s.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},s.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?n(n({},t),{prevDataLength:e.dataLength}):null},s.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=a(t);return n.unit===r?e.scrollTop<=n.value+i-e.scrollHeight+1:e.scrollTop<=n.value/100+i-e.scrollHeight+1},s.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var i=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,n=a(t);return n.unit===r?e.scrollTop+i>=e.scrollHeight-n.value:e.scrollTop+i>=n.value/100*e.scrollHeight},s.prototype.render=function(){var e=this,i=n({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return t.default.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},t.default.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:i},this.props.pullDownToRefresh&&t.default.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},t.default.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},s}(t.Component);e.s(["f",0,l])}],409021,(e,t,i)=>{!function(i,n){if("function"==typeof define&&define.amd){let t;void 0!==(t=n(e.r(362537)))&&e.v(t)}else if(1)try{t.exports=n(e.r(362537))}catch(e){t.exports=n}i&&(i.momentDurationFormatSetup=i.moment?n(i.moment):n)}(e.e,function(e){var t=!1,i=!1,n=!1,r=!1,o="escape years months weeks days hours minutes seconds milliseconds general".split(" "),s=[{type:"seconds",targets:[{type:"minutes",value:60},{type:"hours",value:3600},{type:"days",value:86400},{type:"weeks",value:604800},{type:"months",value:2678400},{type:"years",value:31536e3}]},{type:"minutes",targets:[{type:"hours",value:60},{type:"days",value:1440},{type:"weeks",value:10080},{type:"months",value:44640},{type:"years",value:525600}]},{type:"hours",targets:[{type:"days",value:24},{type:"weeks",value:168},{type:"months",value:744},{type:"years",value:8760}]},{type:"days",targets:[{type:"weeks",value:7},{type:"months",value:31},{type:"years",value:365}]},{type:"months",targets:[{type:"years",value:12}]}];function a(e,t){return!(t.length>e.length)&&-1!==e.indexOf(t)}function l(e){for(var t="";e;)t+="0",e-=1;return t}function u(e,t){var i=e+"+"+y($(t).sort(),function(e){return e+":"+t[e]}).join(",");return u.cache[i]||(u.cache[i]=Intl.NumberFormat(e,t)),u.cache[i]}function d(e,t,o){var s,a,c,m,f,p=t.useToLocaleString,h=t.useGrouping,g=h&&t.grouping.slice(),y=t.maximumSignificantDigits,v=t.minimumIntegerDigits||1,b=t.fractionDigits||0,_=t.groupingSeparator,S=t.decimalSeparator;if(p&&o){var w={minimumIntegerDigits:v,useGrouping:h};if(b&&(w.maximumFractionDigits=b,w.minimumFractionDigits=b),y&&e>0&&(w.maximumSignificantDigits=y),n){if(!r){var $=I({},t);$.useGrouping=!1,$.decimalSeparator=".",e=parseFloat(d(e,$),10)}return u(o,w).format(e)}if(!i){var $=I({},t);$.useGrouping=!1,$.decimalSeparator=".",e=parseFloat(d(e,$),10)}return e.toLocaleString(o,w)}var x=(s=y?e.toPrecision(y+1):e.toFixed(b+1)).split("e");m=x[1]||"",c=(x=x[0].split("."))[1]||"";var D=(a=x[0]||"").length,F=c.length,M=D+F,T=a+c;(y&&M===y+1||!y&&F===b+1)&&((T=function(e){for(var t=e.split("").reverse(),i=0,n=!0;n&&i<t.length;)i?"9"===t[i]?t[i]="0":(t[i]=(parseInt(t[i],10)+1).toString(),n=!1):(5>parseInt(t[i],10)&&(n=!1),t[i]="0"),i+=1;return n&&t.push("1"),t.reverse().join("")}(T)).length===M+1&&(D+=1),F&&(T=T.slice(0,-1)),a=T.slice(0,D),c=T.slice(D)),y&&(c=c.replace(/0*$/,""));var k=parseInt(m,10);k>0?c.length<=k?(c+=l(k-c.length),a+=c,c=""):(a+=c.slice(0,k),c=c.slice(k)):k<0&&(c=l(Math.abs(k)-a.length)+a+c,a="0"),!y&&((c=c.slice(0,b)).length<b&&(c+=l(b-c.length)),a.length<v&&(a=l(v-a.length)+a));var E="";if(h)for(x=a;x.length;)g.length&&(f=g.shift()),E&&(E=_+E),E=x.slice(-f)+E,x=x.slice(0,-f);else E=a;return c&&(E=E+S+c),E}function c(e,t){return e.label.length>t.label.length?-1:+(e.label.length<t.label.length)}u.cache={};var m={durationLabelsStandard:{S:"millisecond",SS:"milliseconds",s:"second",ss:"seconds",m:"minute",mm:"minutes",h:"hour",hh:"hours",d:"day",dd:"days",w:"week",ww:"weeks",M:"month",MM:"months",y:"year",yy:"years"},durationLabelsShort:{S:"msec",SS:"msecs",s:"sec",ss:"secs",m:"min",mm:"mins",h:"hr",hh:"hrs",d:"dy",dd:"dys",w:"wk",ww:"wks",M:"mo",MM:"mos",y:"yr",yy:"yrs"},durationTimeTemplates:{HMS:"h:mm:ss",HM:"h:mm",MS:"m:ss"},durationLabelTypes:[{type:"standard",string:"__"},{type:"short",string:"_"}],durationPluralKey:function(e,t,i){return 1===t&&null===i?e:e+e}};function f(e){return"[object Array]"===Object.prototype.toString.call(e)}function p(e){return"[object Object]"===Object.prototype.toString.call(e)}function h(e,t){var i,n=0,r=e&&e.length||0;for("function"!=typeof t&&(i=t,t=function(e){return e===i});n<r;){if(t(e[n]))return e[n];n+=1}}function g(e,t){var i=0,n=e.length;if(e&&n)for(;i<n;){if(!1===t(e[i],i))return;i+=1}}function y(e,t){var i=0,n=e.length,r=[];if(!e||!n)return r;for(;i<n;)r[i]=t(e[i],i),i+=1;return r}function v(e,t){return y(e,function(e){return e[t]})}function b(e){var t=[];return g(e,function(e){e&&t.push(e)}),t}function _(e){var t=[];return g(e,function(e){h(t,e)||t.push(e)}),t}function S(e,t){var i=[];return g(e,function(e){g(t,function(t){e===t&&i.push(e)})}),_(i)}function w(e,t){var i=[];return g(e,function(n,r){if(!t(n))return i=e.slice(r),!1}),i}function I(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function $(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(i);return t}function x(e,t){var i=0,n=e.length;if(!e||!n)return!1;for(;i<n;){if(!0===t(e[i],i))return!0;i+=1}return!1}function D(e){return"3.6"===e(3.55,"en",{useGrouping:!1,minimumIntegerDigits:1,minimumFractionDigits:1,maximumFractionDigits:1})}function F(e){var t=!0;return!!(t=(t=(t="1"===e(1,"en",{minimumIntegerDigits:1}))&&"01"===e(1,"en",{minimumIntegerDigits:2}))&&"001"===e(1,"en",{minimumIntegerDigits:3}))&&!!(t=(t=(t=(t=t&&"100"===e(99.99,"en",{maximumFractionDigits:0,minimumFractionDigits:0}))&&"100.0"===e(99.99,"en",{maximumFractionDigits:1,minimumFractionDigits:1}))&&"99.99"===e(99.99,"en",{maximumFractionDigits:2,minimumFractionDigits:2}))&&"99.990"===e(99.99,"en",{maximumFractionDigits:3,minimumFractionDigits:3}))&&!!(t=(t=(t=(t=(t=t&&"100"===e(99.99,"en",{maximumSignificantDigits:1}))&&"100"===e(99.99,"en",{maximumSignificantDigits:2}))&&"100"===e(99.99,"en",{maximumSignificantDigits:3}))&&"99.99"===e(99.99,"en",{maximumSignificantDigits:4}))&&"99.99"===e(99.99,"en",{maximumSignificantDigits:5}))&&!!(t=(t=t&&"1,000"===e(1e3,"en",{useGrouping:!0}))&&"1000"===e(1e3,"en",{useGrouping:!1}))}function M(){var e,t,i=[].slice.call(arguments),n={};if(g(i,function(e,i){if(!i){if(!f(e))throw"Expected array as the first argument to durationsFormat.";t=e}if("string"==typeof e||"function"==typeof e){n.template=e;return}if("number"==typeof e){n.precision=e;return}p(e)&&I(n,e)}),!t||!t.length)return[];n.returnMomentTypes=!0;var r=y(t,function(e){return e.format(n)}),s=S(o,_(v((e=[],g(r,function(t){e=e.concat(t)}),e),"type"))),a=n.largest;return a&&(s=s.slice(0,a)),n.returnMomentTypes=!1,n.outputTypes=s,y(t,function(e){return e.format(n)})}function T(){var i,r=[].slice.call(arguments),l=I({},this.format.defaults),u=this.asMilliseconds(),D=this.asMonths();"function"==typeof this.isValid&&!1===this.isValid()&&(u=0,D=0);var F=u<0,M=e.duration(Math.abs(u),"milliseconds"),T=e.duration(Math.abs(D),"months");g(r,function(e){if("string"==typeof e||"function"==typeof e){l.template=e;return}if("number"==typeof e){l.precision=e;return}p(e)&&I(l,e)});var k={years:"y",months:"M",weeks:"w",days:"d",hours:"h",minutes:"m",seconds:"s",milliseconds:"S"},E={escape:/\[(.+?)\]/,years:/\*?[Yy]+/,months:/\*?M+/,weeks:/\*?[Ww]+/,days:/\*?[Dd]+/,hours:/\*?[Hh]+/,minutes:/\*?m+/,seconds:/\*?s+/,milliseconds:/\*?S+/,general:/.+?/};l.types=o;var j=function(e){return h(o,function(t){return E[t].test(e)})},L=RegExp(y(o,function(e){return E[e].source}).join("|"),"g");l.duration=this;var q="function"==typeof l.template?l.template.apply(l):l.template,C=l.outputTypes,V=l.returnMomentTypes,A=l.largest,R=[];!C&&(f(l.stopTrim)&&(l.stopTrim=l.stopTrim.join("")),l.stopTrim&&g(l.stopTrim.match(L),function(e){var t=j(e);"escape"!==t&&"general"!==t&&R.push(t)}));var P=e.localeData();P||(P={}),g($(m),function(e){if("function"==typeof m[e]){P[e]||(P[e]=m[e]);return}P["_"+e]||(P["_"+e]=m[e])}),g($(P._durationTimeTemplates),function(e){q=q.replace("_"+e+"_",P._durationTimeTemplates[e])});var O=l.userLocale||e.locale(),Y=l.useLeftUnits,N=l.usePlural,B=l.precision,G=l.forceLength,H=l.useGrouping,U=l.trunc,z=l.useSignificantDigits&&B>0,W=z?l.precision:0,J=W,K=l.minValue,X=!1,Q=l.maxValue,Z=!1,ee=l.useToLocaleString,et=l.groupingSeparator,ei=l.decimalSeparator,en=l.grouping;ee=ee&&(t||n);var er=l.trim;f(er)&&(er=er.join(" ")),null===er&&(A||Q||z)&&(er="all"),(null===er||!0===er||"left"===er||"right"===er)&&(er="large"),!1===er&&(er="");var eo=function(e){return e.test(er)},es=/both/,ea=/^all|[^sm]all/,el=A>0||x([/large/,es,ea],eo),eu=x([/small/,es,ea],eo),ed=x([/mid/,ea],eo),ec=x([/final/,ea],eo),em=y(q.match(L),function(e,t){var i=j(e);return"*"===e.slice(0,1)&&(e=e.slice(1),"escape"!==i&&"general"!==i&&R.push(i)),{index:t,length:e.length,text:"",token:"escape"===i?e.replace(E.escape,"$1"):e,type:"escape"===i||"general"===i?null:i}}),ef={index:0,length:0,token:"",text:"",type:null},ep=[];Y&&em.reverse(),g(em,function(e){if(e.type){(ef.type||ef.text)&&ep.push(ef),ef=e;return}Y?ef.text=e.token+ef.text:ef.text+=e.token}),(ef.type||ef.text)&&ep.push(ef),Y&&ep.reverse();var eh=S(o,_(b(v(ep,"type"))));if(!eh.length)return v(ep,"text").join("");eh=y(eh,function(e,t){var i,n=t+1===eh.length,r=!t,o=Math.floor(i="years"===e||"months"===e?T.as(e):M.as(e)),s=i-o,a=h(ep,function(t){return e===t.type});return r&&Q&&i>Q&&(Z=!0),n&&K&&Math.abs(l.duration.as(e))<K&&(X=!0),r&&null===G&&a.length>1&&(G=!0),M.subtract(o,e),T.subtract(o,e),{rawValue:i,wholeValue:o,decimalValue:n?s:0,isSmallest:n,isLargest:r,type:e,tokenLength:a.length}});var eg=U?Math.floor:Math.round,ey=function(e,t){var i=Math.pow(10,t);return eg(e*i)/i},ev=!1,eb=!1,e_=function(e,t){var i={useGrouping:H,groupingSeparator:et,decimalSeparator:ei,grouping:en,useToLocaleString:ee};return z&&(W<=0?(e.rawValue=0,e.wholeValue=0,e.decimalValue=0):(i.maximumSignificantDigits=W,e.significantDigits=W)),Z&&!eb&&(e.isLargest?e.wholeValue=Q:e.wholeValue=0,e.decimalValue=0),X&&!eb&&(e.isSmallest?e.wholeValue=K:e.wholeValue=0,e.decimalValue=0),e.isSmallest||e.significantDigits&&e.significantDigits-e.wholeValue.toString().length<=0?B<0?e.value=ey(e.wholeValue,B):0===B?e.value=eg(e.wholeValue+e.decimalValue):z?(U?e.value=ey(e.rawValue,W-e.wholeValue.toString().length):e.value=e.rawValue,e.wholeValue&&(W-=e.wholeValue.toString().length)):(i.fractionDigits=B,U?e.value=e.wholeValue+ey(e.decimalValue,B):e.value=e.wholeValue+e.decimalValue):z&&e.wholeValue?(e.value=Math.round(ey(e.wholeValue,e.significantDigits-e.wholeValue.toString().length)),W-=e.wholeValue.toString().length):e.value=e.wholeValue,e.tokenLength>1&&(G||ev)&&(i.minimumIntegerDigits=e.tokenLength,eb&&i.maximumSignificantDigits<e.tokenLength&&delete i.maximumSignificantDigits),!ev&&(e.value>0||""===er||h(R,e.type)||h(C,e.type))&&(ev=!0),e.formattedValue=d(e.value,i,O),i.useGrouping=!1,i.decimalSeparator=".",e.formattedValueEn=d(e.value,i,"en"),2===e.tokenLength&&"milliseconds"===e.type&&(e.formattedValueMS=d(e.value,{minimumIntegerDigits:3,useGrouping:!1},"en").slice(0,2)),e};if((eh=b(eh=y(eh,e_))).length>1){var eS=function(e){return h(eh,function(t){return t.type===e})};g(s,function(e){var t=eS(e.type);t&&g(e.targets,function(e){var i=eS(e.type);i&&parseInt(t.formattedValueEn,10)===e.value&&(t.rawValue=0,t.wholeValue=0,t.decimalValue=0,i.rawValue+=1,i.wholeValue+=1,i.decimalValue=0,i.formattedValueEn=i.wholeValue.toString(),eb=!0)})})}return(eb&&(ev=!1,W=J,eh=b(eh=y(eh,e_))),C&&!(Z&&!l.trim))?eh=b(eh=y(eh,function(e){return h(C,function(t){return e.type===t})?e:null})):(el&&(eh=w(eh,function(e){return!e.isSmallest&&!e.wholeValue&&!h(R,e.type)})),A&&eh.length&&(eh=eh.slice(0,A)),eu&&eh.length>1&&(i=eh,eh=w(i.slice().reverse(),function(e){return!e.wholeValue&&!h(R,e.type)&&!e.isLargest}).reverse()),ed&&(eh=b(eh=y(eh,function(e,t){return t>0&&t<eh.length-1&&!e.wholeValue?null:e}))),!ec||1!==eh.length||eh[0].wholeValue||!U&&eh[0].isSmallest&&eh[0].rawValue<K||(eh=[])),V?eh:(g(ep,function(e){var t=k[e.type],i=h(eh,function(t){return t.type===e.type});if(t&&i){var n,r,o=i.formattedValueEn.split(".");o[0]=parseInt(o[0],10),o[1]?o[1]=parseFloat("0."+o[1],10):o[1]=null;var s=P.durationPluralKey(t,o[0],o[1]),l=(r=[],g($(n=P),function(e){if("_durationLabels"===e.slice(0,15)){var i=e.slice(15).toLowerCase();g($(n[e]),function(o){o.slice(0,1)===t&&r.push({type:i,key:o,label:n[e][o]})})}}),r),u=!1,d={};g(P._durationLabelTypes,function(t){var i=h(l,function(e){return e.type===t.type&&e.key===s});i&&(d[i.type]=i.label,a(e.text,t.string)&&(e.text=e.text.replace(t.string,i.label),u=!0))}),N&&!u&&(l.sort(c),g(l,function(t){return d[t.type]===t.label?!a(e.text,t.label)&&void 0:a(e.text,t.label)?(e.text=e.text.replace(t.label,d[t.type]),!1):void 0}))}}),(ep=y(ep,function(e){if(!e.type)return e.text;var t=h(eh,function(t){return t.type===e.type});if(!t)return"";var i="";return Y&&(i+=e.text),(F&&Z||!F&&X)&&(i+="< ",Z=!1,X=!1),(F&&X||!F&&Z)&&(i+="> ",Z=!1,X=!1),F&&(t.value>0||""===er||h(R,t.type)||h(C,t.type))&&(i+="-",F=!1),"milliseconds"===e.type&&t.formattedValueMS?i+=t.formattedValueMS:i+=t.formattedValue,Y||(i+=e.text),i})).join("").replace(/(,| |:|\.)*$/,"").replace(/^(,| |:|\.)*/,""))}function k(){var e=this.duration,t=function(t){return e._data[t]},i=h(this.types,t),n=function(e,t){for(var i=e.length;i-=1;)if(t(e[i]))return e[i]}(this.types,t);switch(i){case"milliseconds":return"S __";case"seconds":case"minutes":return"*_MS_";case"hours":return"_HMS_";case"days":if(i===n)return"d __";case"weeks":if(i===n)return"w __";return null===this.trim&&(this.trim="both"),"w __, d __, h __";case"months":if(i===n)return"M __";case"years":if(i===n)return"y __";return null===this.trim&&(this.trim="both"),"y __, M __, d __";default:return null===this.trim&&(this.trim="both"),"y __, d __, h __, m __, s __"}}function E(e){if(!e)throw"Moment Duration Format init cannot find moment instance.";e.duration.format=M,e.duration.fn.format=T,e.duration.fn.format.defaults={trim:null,stopTrim:null,largest:null,maxValue:null,minValue:null,precision:0,trunc:!1,forceLength:null,userLocale:null,usePlural:!0,useLeftUnits:!1,useGrouping:!0,useSignificantDigits:!1,template:k,useToLocaleString:!0,groupingSeparator:",",decimalSeparator:".",grouping:[3]},e.updateLocale("en",m)}var j=function(e,t,i){return e.toLocaleString(t,i)};i=(t=function(){try{0..toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()&&F(j))&&D(j);var L=function(e,t,i){if("u">typeof window&&window&&window.Intl&&window.Intl.NumberFormat)return window.Intl.NumberFormat(t,i).format(e)};return r=(n=F(L))&&D(L),E(e),E})}]);