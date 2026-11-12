(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,911383,e=>{var t=e.i(220303);let i=async function(e,i){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=await t.R.fetchQuery(e,{method:"POST",body:i,...r});if("string"!=typeof o?.url||!o.url||"string"!=typeof o.key||!o.key)throw Error("The server did not return a PDF");return o};e.s(["G",0,e=>{let{refused:t=[],unavailable:i=[]}=e;return t.length>0||i.length>0},"g",0,i])},244776,782959,e=>{var t=e.i(191788);let i=e=>{let t="number"==typeof e?e:Number(e);return Number.isNaN(t)?null:t},r=(e,t)=>{let i=t?.find(t=>{let i=Number(t?.min),r=Number(t?.max);return!(Number.isNaN(i)||Number.isNaN(r))&&e>=i&&e<=r});return i?.label??null};e.s(["x",0,(e,t)=>{let r=Array.isArray(e)?e:[],o=t||{};return r.reduce((e,t)=>{let r=o[t.stateName];return null==r?e:e+((e,t)=>{if(!Array.isArray(e?.score))return 0;let r=i(t);if(null===r)return 0;let o=e.score.find(e=>Number(e.min)<=r&&r<=Number(e.max));return o?.score!==void 0&&Number(o.score)||0})(t,r)+((e,t)=>{if(!Array.isArray(e?.options))return 0;if(Array.isArray(t)){let i=Array.isArray(e.options)?e.options:[];return t.reduce((e,t)=>{let r=i.find(e=>e.value===t||e.label===t);return e+(r?.score!==void 0&&Number(r.score)||0)},0)}let i=e.options.find(e=>e.value===t||e.radioValue===t||e.label===t);return i?.score!==void 0&&Number(i.score)||0})(t,r)+((e,t)=>{if(!Array.isArray(e?.marks))return 0;let r=i(t);if(null===r)return 0;let o=e.marks.find(e=>i(e.markValue)===r);return o?.score!==void 0&&Number(o.score)||0})(t,r)},0)},"E",0,r],782959),e.s(["f",0,(e,i)=>{let[o,s]=(0,t.useState)(0),n=(0,t.useCallback)(function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return r(t,i)},[e]);return{totalScore:o,handleTotalScore:(0,t.useCallback)(t=>{s(Number(t)||0);let o=r(Number(t)||0,e);i?.(t,o??"")},[e,i]),findScoreLabel:n}}],244776)},806430,343598,303828,150524,e=>{var t=e.i(391398),i=e.i(356119),r=e.i(121432),o=e.i(605224),s=e.i(477882),n=e.i(917563),a=e.i(440726),d=e.i(652002),l=e.i(67267),u=e.i(738251),m=e.i(813843),f=e.i(115871),c=e.i(926021);let b="Job reference, date and customer reference appear here on work order reports",p="Company name · registered office · company and VAT numbers · contact details",y="+ accreditation logos";e.s(["K",0,p,"o",0,y,"W",0,b],343598);let h={details:{variant:"body2",color:"textSecondary"},logos:{variant:"body2",color:"textSecondary"},text:{variant:"body2"}},g=e=>{let{formatting:i,footerText:r,typography:o=h}=e;return(0,t.jsxs)(m.f,{direction:"row",justifyContent:"space-between",alignItems:"flex-end",gap:1.5,children:[(0,t.jsxs)(u.f,{sx:{flex:1,minWidth:0},children:[(0,c.o)(i)&&(0,t.jsx)(f.f,{...o.details,children:p}),r&&(0,t.jsx)(f.f,{...o.text,noWrap:!0,sx:{...o.text.sx,maxWidth:"60%"},children:r}),(0,c._)(i)&&(0,t.jsx)(f.f,{...o.logos,children:y})]}),(0,c.V)(i)&&(0,t.jsx)(f.f,{...o.details,children:"1"})]})};e.s(["f",0,g],303828);var x=e.i(336276),I=e.i(498681),v=e.i(377198);let F={location:"1 High Street London SW1A 1AA",customer:"Customer name",supplier:"Supplier name",date:"01/01/2026",jobId:"WO-0001"};e.s(["f",0,F],150524);var S=e.i(399627);let $={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"14px 16px",marginBottom:"14px",textAlign:"right"},_={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"10px 16px",marginTop:"14px"},k={details:{sx:{fontSize:"10px",color:"#666666",fontFamily:"Nunito-Regular"}},logos:{sx:{fontSize:"10px",color:"#999999",fontFamily:"Nunito-Regular"}},text:{sx:{fontSize:"11px",color:"#666666"}}},w={border:"none",backgroundColor:"#FFFFFF",highlighted:""},j={pointerEvents:"none"},q={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"650px",height:"600px",padding:"10px",overflowY:"auto",borderRadius:"12px",backgroundColor:"#FFFFFF"},N={position:"sticky",top:0,height:"44px",backgroundColor:"#F5F5F5",borderRadius:"12px",zIndex:1,fontFamily:"Nunito-Regular",padding:"15px",display:"flex",alignItems:"center",justifyContent:"space-between"};e.s(["f",0,e=>{let{selectedForm:u,open:m,onClose:f,formatting:p}=e,{admin:y}=(0,I.f)(),h=y?.media?.find(e=>{let{item:t}=e;return"themeLogo"===t.category}),M=(0,v.f)(h?.item.filename)??null,C=(0,S.f)(p?.header?.text,F),A=(0,S.f)(p?.footer?.text,F),E=!p||(0,c.S)(p,F);return(0,t.jsx)(t.Fragment,{children:u&&(0,t.jsx)(o.f,{open:m,onClose:f,style:{zIndex:"9999"},slotProps:{backdrop:{sx:{backgroundColor:"rgba(0, 0, 0, 0.7)"}}},children:(0,t.jsxs)(s.f,{sx:q,children:[(0,t.jsxs)(n.f,{sx:N,marginBottom:1,children:[(0,t.jsx)(i.f,{variant:"h6",sx:{fontFamily:"Nunito-Regular",fontSize:"16px",paddingLeft:"10px"},children:"Form preview"}),(0,t.jsx)(r.f,{color:"secondary",onClick:f,sx:{marginLeft:"10px"},children:(0,t.jsx)(d.default,{sx:{fontSize:20}})})]}),(0,t.jsxs)("div",{style:j,children:[p&&(0,c.d)(p)&&(0,t.jsxs)(n.f,{sx:$,children:[(0,t.jsx)(i.f,{sx:{fontWeight:700,fontSize:"18px",color:"#666666"},children:C.trim()||u?.name||"Form name"}),(0,t.jsx)(i.f,{sx:{fontSize:"11px",color:"#999999",fontFamily:"Nunito-Regular"},children:b})]}),p&&(0,c.Y)(p)&&(0,t.jsx)(l.f,{formatting:p,formName:u?.name??null,logoUrl:M,templateVariables:F}),(0,t.jsx)(x.f,{name:E?u?.name:null,description:u?.description}),(0,t.jsx)(a.f,{scheme:u?.formFields,submissionData:u?.submissionData,blockStyle:w}),p&&(0,c.W)(p)&&(0,t.jsx)(n.f,{sx:_,children:(0,t.jsx)(g,{formatting:p,footerText:A,typography:k})})]})]})})})}],806430)},441625,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
  mutation UpdateStatus($id: Int!, $status: Boolean!) {
    update_Form_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      status
    }
  }
`,o=t.f`
  query GetFormNames($q: String, $limit: Int = 50, $offset: Int = 0) {
    Form(where: { name: { _ilike: $q } }, limit: $limit, offset: $offset) {
      name
      id
      formFields
      settings
    }
  }
`,s=t.f`
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
`,n=t.f`
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
`,d=t.f`
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
`,l=t.f`
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
`,u=t.f`
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
`,m=t.f`
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
`,f=t.f`
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
`,c=t.f`
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
`;let b=t.f`
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
`,p=t.f`
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
`,e.s(["H",0,a,"O",0,c,"F",0,p,"W",0,s,"a",0,i,"z",0,n,"B",0,o,"G",0,m,"_",0,f,"k",0,d,"p",0,b,"I",0,u,"c",0,r,"q",0,l])},764890,594497,391492,989249,750546,644305,e=>{var t=e.i(391398),i=e.i(422411),r=e.i(238802),o=e.i(164056),s=e.i(356119),n=e.i(121432),a=e.i(390536),d=e.i(213419),l=e.i(93198),u=e.i(911383);let m=async e=>{var t;let i,r,o,{adminId:s,task:n,form:a,formMedia:d,openReport:m=!0}=e,f=new Set((a?.formFields||[]).filter(e=>e?.type==="fileUpload").map(e=>e.stateName)),c=new Map((a?.formFields||[]).filter(e=>e?.type==="table").map(e=>[e.stateName,e.grid?.rows??[]])),b=(e,t)=>{let i=t&&"object"==typeof t&&!Array.isArray(t)?t:{};return e.map(e=>e.filter(e=>!e.covered).map(e=>{let t="string"==typeof e.prefix?e.prefix:"",r="string"==typeof e.suffix?e.suffix:"",o="input"===e.cellType?String(i[String(e.id)]??""):"string"==typeof e.content?e.content:"";return`${t}${o}${r}`}).join(" | ")).join("\n")},p=a?.formFields||[],y=new Map(p.filter(e=>e?.type==="repeatableBlock").map(e=>[e.stateName,{label:e.blockName||e.label||"Entry",children:p.filter(t=>t.id&&e.memberIds?.includes(t.id))}])),h=a?.formFields?(i=[...a.formFields],r=[],o=new Set,i.forEach(e=>{let t=e?.id;!e?.parentFieldId&&t&&(r.push(e),o.add(t),i.forEach(e=>{let i=e?.id;e?.parentFieldId===t&&i&&!o.has(i)&&(r.push(e),o.add(i))}))}),i.forEach(e=>{let t=e?.id;t&&!o.has(t)&&r.push(e)}),r):a?.formFields,g={task:n,adminId:s,form:a?{...a,formFields:h,submissionData:(t=a.submissionData)?Object.fromEntries(Object.entries(t).map(e=>{let[t,i]=e;if(f.has(t))return[t,void 0];let r=c.get(t);if(r)return[t,b(r,i)];let o=y.get(t);if(o){let e,r;return[t,(e=o.children,r=o.label,(Array.isArray(i)?i:[]).filter(e=>e&&"object"==typeof e).map((t,i)=>[`${r} ${i+2}:`,...e.map(e=>{let i=t[e.stateName];if("fileUpload"===e.type){let t="number"==typeof i?i:0;return`${e.label||e.stateName}: ${String(t)} file(s)`}let r=e.grid?.rows,o=r?b(r,i):Array.isArray(i)?i.join(", "):"string"==typeof i||"number"==typeof i?String(i):i&&"object"==typeof i?Object.entries(i).map(e=>{let[t,i]=e;return`${t}: ${String(i)}`}).join(", "):"";return`${e.label||e.stateName}: ${o}`})].join(" ")).join("\n"))]}if(i&&"object"==typeof i&&"startTime"in i&&"endTime"in i){let{startTime:e,endTime:r}=i;return[t,`${e??""}${e||r?" - ":""}${r??""}`]}return Array.isArray(i)?[t,i.join(", ")]:i&&"object"==typeof i?[t,JSON.stringify(i)]:[t,i]}).filter(e=>{let[,t]=e;return void 0!==t})):{}}:null,media:(d?.Media||d?.items||[]).filter(e=>{let t="item"in e?e.item:e;return"image"===t.type&&!t.meta?.adminOnly}).map(e=>{let t="item"in e?e.item:e;if(t.meta?.thumbnails){let e=t.meta.thumbnails.find(e=>"small"===e.name);if(e)return{filename:e.relativePath}}return{filename:t.filename}})},x=null;!(0,l.Z)()&&m&&(x=window.open("/download","_blank"))&&(x.opener=null);try{let e=await (0,u.g)("/pdf/task-report-form/create",g);return m&&(x?.location?.assign(e.url),"Capacitor"in window&&window.Capacitor.Plugins?.Browser&&window.Capacitor.Plugins.Browser.open({url:e.url})),{blob:e,link:`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${e.key}`}}catch(e){x?.close();return}};var f=e.i(432171),c=e.i(21557),b=e.i(886143);let p={display:"flex",alignItems:"center",position:"relative",width:"100%",marginTop:"1rem",marginBottom:"1rem"},y={marginLeft:"10px"},h={width:"36px",height:"36px",margin:"14px",color:"rgb(6, 121, 216)"},g={position:"absolute",bottom:"-40px",right:"0",backgroundColor:"#fff",padding:"4px",zIndex:2,border:"2px solid #f5f5f5",borderRadius:"4px",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",width:"auto",maxWidth:"300px",minWidth:"250px",wordWrap:"break-word"},x={height:"2.25rem",boxSizing:"border-box",padding:"4px 4px 4px 0px",fontSize:"14px"},I={"& .MuiInputBase-root":{fontSize:"14px",boxSizing:"border-box",padding:0},"& .MuiOutlinedInput-input":{fontSize:"14px",display:"flex",alignItems:"center",color:"black"}};e.s(["f",0,e=>{let{control:l,errors:u,register:v,isDisabled:F=!1,hasPreview:S=!1,hasDownload:$=!1,handleFormChange:_,toggleEyePreview:k,activeForms:w,selectedForm:j,setSelectedForm:q,showEyeNotification:N,name:M="formSubmission",taskReport:C,entity:A}=e,E=(0,c.f)(),{data:O}=(0,f.t)(b.o,{skip:!C?.task?.id,variables:{entityId:C?.task?.id??0,entity:"FormSubmission"}}),R=e=>{if(e.stopPropagation(),C){let e=j?.settings||[],t=((e,t)=>{if(null==e||!Array.isArray(t))return null;let i=t.find(t=>{let i=Number(t?.min),r=Number(t?.max);return!(Number.isNaN(i)||Number.isNaN(r))&&Number(e)>=i&&Number(e)<=r});return i&&i.label||null})(C.form.totalScore,e),i=j?.name;m({adminId:C.adminId,task:C.task,form:{...C.form,scoreLabel:t||null,title:i,createdAt:C.form.createdAt||null,updatedAt:C.form.updatedAt||null,userId:C.form.userId??void 0},formMedia:O||{Media:[]}}).then(e=>{e||E.show({content:"The task report could not be downloaded",severity:"error"})})}};return(0,t.jsx)(i.e,{errors:u,control:l,register:v,name:M,render:e=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{style:p,children:[(0,t.jsx)(r.f,{...e,options:w,disabled:F,value:j,getOptionLabel:e=>String(e.name),sx:"JobSchedule"===A?{flex:1,"& .MuiInputBase-root":{padding:"9px 39px 9px 9px"},"& .MuiAutocomplete-inputRoot":{padding:"9px 39px 9px 14px",transition:"transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",minHeight:"40px","& .MuiOutlinedInput-root":{minHeight:"40px"},"& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(0, 0, 0, 0.23)",borderRadius:"4px"},"&:focus, :hover":{"& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(0, 0, 0, 0.87)"}},"&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderWidth:"2px",borderColor:"rgb(6, 121, 216)"}}},"& .MuiFormLabel-root.MuiInputLabel-root":{color:"rgba(0, 0, 0, 0.6)","&.Mui-focused":{color:"rgb(6, 121, 216)"}}}:"Taxonomy"===A?{flex:1,"& .MuiAutocomplete-inputRoot":{padding:0,transition:"transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",minHeight:"40px","& .MuiInputBase-input":{padding:"2px 8px",fontSize:"1rem",color:"rgb(0, 55, 83);","&::placeholder":{color:"rgb(0, 55, 83);",opacity:1}},"& .MuiOutlinedInput-root":{minHeight:"40px"},"& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(0, 0, 0, 0.23)",borderRadius:"4px"},"&:focus, :hover":{"& .MuiOutlinedInput-notchedOutline":{border:"1px solid rgba(0, 0, 0, 0.87)"}},"&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderWidth:"2px",borderColor:"rgb(6, 121, 216)"}}},"& .MuiFormLabel-root.MuiInputLabel-root":{color:"rgba(0, 0, 0, 0.6)","&.Mui-focused":{color:"rgb(6, 121, 216)"}}}:{flex:1,"& .MuiAutocomplete-inputRoot":{padding:"4px 39px 4px 0",transition:"transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms","& .MuiOutlinedInput-notchedOutline":{border:"none",borderRadius:0,borderBottom:"1px solid rgba(0, 0, 0, 0.42)"},"&:focus, :hover":{"& .MuiOutlinedInput-notchedOutline":{border:"none",borderRadius:0,borderBottom:"2px solid black"}},"&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderWidth:"2px",borderColor:"rgb(6, 121, 216)"}}},"& .MuiFormLabel-root.MuiInputLabel-root":{color:"rgba(0, 0, 0, 0.6)",left:"-14px",top:"-5px","&.Mui-focused":{color:"rgb(6, 121, 216)"}}},onChange:(e,t)=>{q(t),_(t)},renderInput:e=>(0,t.jsx)(o.f,{...e,label:"Taxonomy"!==A?"Custom form":void 0,color:"JobSchedule"===A?"secondary":void 0,variant:"outlined",inputProps:{...e.inputProps,style:"JobSchedule"===A||"Taxonomy"===A?{}:{...x},placeholder:"JobSchedule"===A?void 0:"Taxonomy"===A?"Select...":"Please select a form"},sx:"Taxonomy"!==A?I:void 0})}),S&&(0,t.jsx)(n.f,{color:"secondary",onClick:k,sx:y,disabled:!j?.value,children:(0,t.jsx)(d.default,{sx:{fontSize:20}})}),$&&(0,t.jsx)(a.default,{onClick:R,sx:{...h,cursor:j?.value&&j?.value?"pointer":"not-allowed"}}),N&&(0,t.jsx)("div",{className:"eyeNotification",style:g,children:(0,t.jsx)(s.f,{fontSize:"12px",color:"error",children:"No form will be created inside the job."})})]})})})}],764890),e.s(["f",0,e=>{let{showScoreAndLabels:i,totalScore:r,findScoreLabel:o,scoreLabels:n}=e;return(0,t.jsx)(t.Fragment,{children:i&&r>0&&(0,t.jsxs)(s.f,{variant:"h6",sx:{padding:"10px",borderTop:1,fontFamily:"Nunito-Regular",fontSize:"16px"},children:["Total Score: ",r,o(r,n)&&` (${o(r,n)})`]})})}],594497);var v=e.i(191788),F=e.i(441625),S=e.i(594301);function $(e){if(!e)return;if(e.submissionId)return e.submissionId;let t=Number(e.formId??e.value),i=Number(e.id);if(i>0&&t>0&&i!==t)return i}function _(e,t,i){let r=Number(e.formId??e.value),o=$(e),s=r?t.find(e=>e.id===r):void 0;return{...s,...e,submissionId:o,id:r||s?.id,formId:r||e.formId,value:r||e.value,userId:e.userId??s?.userId??i,name:e.name??s?.name,description:e.description??s?.description,settings:e.settings??s?.settings,formFields:e.formFields??s?.formFields,submissionData:e.submissionData??s?.submissionData}}e.s(["F",0,_,"s",0,$],391492),e.s(["f",0,e=>{let{linkedForm:t,linkedTo:i}=e,[r,o]=(0,v.useState)([]),[s,n]=(0,v.useState)(null),{user:a}=(0,S.f)(),{data:d}=(0,f.t)(F.W),{data:l}=(0,f.t)(F.G,{variables:i?{entity:i.entity,entityId:i.entityId}:void 0,skip:!i?.entity||!i?.entityId||!!t}),u=e=>n(e);return(0,v.useEffect)(()=>{d?.Form?.length&&o([...d.Form].map(e=>({...e,value:e.id,userId:a.id})).sort((e,t)=>e.id-t.id))},[d,a.id]),(0,v.useEffect)(()=>{t&&r.length&&u(_(t,r,a.id))},[r,t,a.id]),(0,v.useEffect)(()=>{if(l?.FormSubmissions?.[0]&&r.length){let e=l.FormSubmissions[0];u({id:e.formId,submissionId:e.id,name:e.form.name,description:e.form.description,userId:a.id,status:e.form.status,value:e.formId,formId:e.formId,submissionData:e.submissionData,formFields:e.formFields,entity:e.entity,entityId:e.entityId,settings:e.form.settings})}},[l,r,a.id]),{activeForms:r,setActiveForms:o,selectedForm:s,setSelectedFormSubmission:u}}],989249);var k=e.i(776204),w=e.i(3878),j=e.i(856688),q=e.i(691738);e.s(["f",0,(e,t,i,r)=>{let[o,s]=(0,v.useState)(),[n,a]=(0,v.useState)(),[d,l]=(0,v.useState)(!1),{fetchQuery:u}=(0,w.r)(),m=(0,v.useRef)(null),c=(0,v.useRef)(i);c.current=i;let p=(0,v.useCallback)(()=>c.current?.()??o,[o]),{data:y,loading:h}=(0,f.t)(F.G,{variables:e&&t?{entity:e,entityId:t}:void 0,skip:!e||!t||!!r}),{data:g,loading:x}=(0,f.t)(F._,{variables:r?{id:r}:void 0,skip:!r}),I=r?x:h,[$,{loading:_}]=(0,k.f)(F.O),[N,{loading:M}]=(0,k.f)(F.p),[C,{loading:A}]=(0,k.f)(F.F),{user:E}=(0,S.f)(),O=r??n?.id??t,{data:R}=(0,f.t)(b.o,{skip:!O,variables:{entityId:O,entity:"FormSubmission"}}),{deleteMediaByEntity:z}=(0,j.t)("FormSubmission",E?.adminId,E?.id,n?.id),D=(0,v.useCallback)(async(i,r,o)=>{if(!e||!t||_)return;let s=p(),n=await $({variables:{formId:i,userId:r,submissionData:s?Object.fromEntries(Object.entries(s).map(e=>{let[t,i]=e;return[t,null!==i&&"object"==typeof i?i:String(i)]})):void 0,formFields:o,entity:e,entityId:t}}),d=n?.data?.insert_FormSubmissions_one;if(d)return a({id:d.id,entity:d.entity,entityId:d.entityId,formId:d.formId}),d.id},[$,_,e,t,p]),T=(0,v.useCallback)(async e=>{let{submissionId:t,formFields:i}=e;if(M)return;let r=p(),o=i.filter(e=>e?.type==="fileUpload"&&!(0,q.f)({isVisible:e?.isVisible!==!1,isHidden:e?.isHidden,isShown:e?.isShown,formState:r??{}}));if(o?.length&&R?.items?.length)try{await Promise.all(R.items.map(e=>z(e.mediaId)))}catch(e){throw Error(`Could not remove files from hidden upload fields: ${e instanceof Error?e.message:"unknown error"}`)}try{let e=await N({variables:{id:t,changes:{formFields:i,submissionData:r}}});return e?.data?.update_FormSubmissions_by_pk}catch(e){throw Error(`Could not save the form: ${e instanceof Error?e.message:"unknown error"}`)}},[M,R,N,p,z]),B=(0,v.useCallback)(async e=>{A||await C({variables:{id:Number(e)}})},[C,A]),P=(0,v.useCallback)(async function(i){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"submitted";if(("Job"===e||"Ppm"===e)&&t){let e=await u("/job/:jobId/work-order/forms/:submissionId/submit",{method:"POST",pathParams:{jobId:t,submissionId:i},body:{type:r}});return e?.submissionId?{id:e.submissionId,type:e.type}:void 0}let o=await N({variables:{id:i,changes:{type:r}}});return o?.data?.update_FormSubmissions_by_pk},[e,t,u,N]);return(0,v.useEffect)(()=>{let i=r?g?.FormSubmissions_by_pk:y?.FormSubmissions?.[0];if(!i?.id||I)return;let o=r?`submission:${r}`:e&&t?`${e}:${t}`:null;o&&(a({id:i.id,entity:i.entity,entityId:i.entityId,formId:i.formId,createdAt:i.createdAt,updatedAt:i.updatedAt,userId:i.userId}),m.current!==o&&(s(i.submissionData),m.current=o))},[y?.FormSubmissions,g?.FormSubmissions_by_pk,I,e,t,r]),{submissionLoading:I,loaded:d,setLoaded:l,onSubmissionCreate:D,onSubmissionUpdate:T,onSubmissionDelete:B,onSubmissionFinalize:P,submissionData:o,setSubmissionData:s,submissionFormId:o?.formId,createdSubmission:n,formMedia:R}}],750546);var N=e.i(426778),M=e.i(764999),C=e.i(656134);let A=/^\d{2}:\d{2}$/,E=/^\d{4}-\d{2}-\d{2}$/;e.s(["f",0,e=>{let{selectedForm:t,setError:i,clearErrors:r,submissionData:o,getSubmissionData:s}=e,[n,a]=(0,v.useState)({}),d=(0,v.useMemo)(()=>t?.formFields?t.formFields.reduce((e,i)=>{if("repeatableBlock"===i.type){let r=(0,C.Q)(t.formFields??[],i);return e[i.stateName]=N.D().test("repeatable-block-entries",`${i.blockName??i.label} has entries with missing required fields`,function(e){let t=this.parent??{};return!r.some(e=>(0,q.f)({isVisible:!1!==e.isVisible,isHidden:e.isHidden,isShown:e.isShown,formState:t}))||(0,C.q)(i,r,e,t)}),e}if(i.required)switch(i.type){case"defaultText":case"text":case"input":case"longText":case"textArea":e[i.stateName]=N.x().trim().required(`${i.label} is required`);break;case"numberInput":case"currency":case"slider":e[i.stateName]=N.H().required(`${i.label} is required`).typeError("Please enter a number here.").nullable();break;case"select":case"signerInitials":e[i.stateName]=N.x().required(`${i.label} is required`);break;case"multiSelect":e[i.stateName]=N.k().of(N.x().required("Select a value")).min(1,`${i.label} requires at least one selection`).required(`${i.label} is required`);break;case"checkbox":e[i.stateName]=N.k().min(1,`Field ${i.label} requires at least one selection`).required(`Field ${i.label} is required`);break;case"datepicker":e[i.stateName]=N.x().required(`${i.label} is required`).matches(E,`${i.label} must be a valid date`);break;case"time":e[i.stateName]=N.x().required(`${i.label} is required`).matches(A,"Time must be in HH:MM format");break;case"timeRange":e[i.stateName]=N.t().shape({startTime:N.x().required("Start time is required").matches(A,"Start time must be in HH:MM format"),endTime:N.x().required("End time is required").matches(A,"End time must be in HH:MM format")});break;case"signature":e[i.stateName]=N.x().required("Signature is required").nullable();break;case"radio":e[i.stateName]=N.x().required(`Field ${i.label} is required`);break;case"table":e[i.stateName]=N.D().test("table-required",`${i.label} requires all inputs to be completed`,e=>(0,M.S)(i.grid,e));break;case"fileUpload":e[i.stateName]=N.D().test("file-required",`${i.label} is required`,e=>{if(Array.isArray(e))return e.length>0;if("number"==typeof e)return e>0;if("string"==typeof e)return""!==e.trim();if(e&&"object"==typeof e){if("number"==typeof e.count)return e.count>0;if(Array.isArray(e.files))return e.files.length>0}return!1}).required(`${i.label} is required`)}return e},{}):null,[t?.formFields]),l=(0,v.useCallback)(async()=>{if(!d)return Promise.resolve();let e=s?.()??o,n=Object.fromEntries(Object.entries(d).filter(i=>{let[r]=i,o=t?.formFields?.find(e=>e.stateName===r);return!o||(0,q.f)({isVisible:!1!==o.isVisible,isHidden:o.isHidden,isShown:o.isShown,formState:e??{}})})),l=N.t().shape(n);try{let t=await l.validate(e,{abortEarly:!1});return Object.keys(d).forEach(e=>r?.(e)),a({}),t}catch(e){throw e instanceof N.a&&a(e.inner.reduce((e,t)=>(void 0!==t.path&&(e[t.path]=t.message,i?.(t.path,{type:"manual",message:t.message})),e),{})),e}},[d,o,s,r,i,t?.formFields]);return(0,v.useEffect)(()=>{if(!d||!o||!Object.keys(n).length)return;let e=Object.keys(n),t={...n};e.forEach(e=>{let i=d[e];if(i&&void 0!==o[e])try{let s=o[e];N.t().shape({[e]:i}).validateSync({[e]:s},{abortEarly:!1}),delete t[e],r?.(e)}catch{}}),Object.keys(t).length!==Object.keys(n).length&&a(t)},[o,d,n,r]),{validationError:n,setValidationError:a,validationSchema:d,validateSubmission:l}}],644305)},341056,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(738251),o=e.i(755548),s=e.i(813762),n=e.i(440726),a=e.i(764890),d=e.i(806430),l=e.i(594497),u=e.i(989249),m=e.i(750546),f=e.i(644305),c=e.i(244776),b=e.i(691738),p=e.i(764999),y=e.i(656134);let h=(e,t)=>(0,b.f)({isVisible:!1!==e.isVisible,isHidden:e.isHidden,isShown:e.isShown,formState:t}),g=(e,t)=>e.filter(i=>{if("repeatableBlock"!==i.type||!i.stateName||!h(i,t))return!1;let r=(0,y.Q)(e,i);return!!r.some(e=>h(e,t))&&!(0,y.q)(i,r,t[i.stateName],t)});var x=e.i(594301),I=e.i(21557),v=e.i(105118),F=e.i(816037),S=e.i(391492);let $=(0,i.forwardRef)((e,b)=>{let{control:$,errors:k,register:w,setValue:j,formState:q,setError:N,clearErrors:M,entity:C,entityId:A,hasForm:E=!1,hasDownload:O,hasPreview:R=!1,isDisabled:z,showScoreAndLabels:D=!0,onTotalScoreAndLabelChange:T,autocompleteName:B,linkedTo:P,linkedForm:L,task:H,onFormSubmissionComplete:W,onDraftSaved:G,onFormSubmitted:U,submitType:V="submitted"}=e,[J,K]=(0,i.useState)(!1),[Q,Y]=(0,i.useState)(!1),[Z,X]=(0,i.useState)(!1),[ee,et]=(0,i.useState)(!1),[ei,er]=(0,i.useState)(!1),eo=(0,I.f)(),es=(0,i.useRef)(0),en=(0,i.useRef)(W),ea=(0,i.useRef)(null),[ed,el]=(0,i.useState)(),eu=(0,i.useRef)(void 0),[em,ef]=(0,i.useState)(),ec=(0,i.useCallback)(()=>eu.current,[]);(0,i.useEffect)(()=>{en.current=W},[W]);let eb=(0,S.s)(L),{activeForms:ep,selectedForm:ey,setSelectedFormSubmission:eh}=(0,u.f)({linkedForm:L,linkedTo:P}),eg=(0,i.useRef)(ey?.formFields),ex=(0,i.useMemo)(()=>{let e=ey?.formFields;return e?eg.current&&(0,v.f)(eg.current,e)?eg.current:(eg.current=e,e):e},[ey?.formFields]),{submissionLoading:eI,loaded:ev,setLoaded:eF,onSubmissionCreate:eS,onSubmissionUpdate:e$,onSubmissionDelete:e_,onSubmissionFinalize:ek,submissionData:ew,setSubmissionData:ej,createdSubmission:eq,formMedia:eN}=(0,m.f)(C,A,ec,eb);(0,i.useEffect)(()=>{ew&&(eu.current=ew)},[ew]);let{validationError:eM,validateSubmission:eC}=(0,f.f)({selectedForm:ey,setError:N,clearErrors:M,submissionData:ew,getSubmissionData:ec}),{user:eA}=(0,x.f)(),eE=eA.id,eO=(0,i.useMemo)(()=>(ey?.settings||[]).filter(e=>void 0!==e),[ey?.settings]),{totalScore:eR,handleTotalScore:ez,findScoreLabel:eD}=(0,c.f)(eO,T),eT=(0,i.useCallback)(()=>{Y(!Q),K(!1)},[Q]),eB=(0,i.useCallback)(function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];j("formSubmission",e??null,{shouldDirty:t,shouldValidate:!0}),e?(X(!1),K(!1)):t&&X(!0)},[j]),eP=(0,i.useCallback)(e=>{eu.current=e,ef(t=>t&&(0,v.f)(t,e)?t:e),eI||ej(t=>t&&(0,v.f)(t,e)?t:e)},[ej,eI]);(0,i.useEffect)(()=>{let e=C&&A?`${C}:${A}`:null;e&&e!==ea.current&&(ea.current=e,el(void 0))},[C,A]),(0,i.useEffect)(()=>{L?.submissionData&&!ed&&el(L.submissionData)},[L?.submissionData,ed]),(0,i.useEffect)(()=>{!eI&&ew&&el(e=>e??ew)},[ew,eI]),(0,i.useEffect)(()=>{Z||eB(ey,!1)},[eB,Z,ey]),(0,i.useEffect)(()=>{if(!L&&eq?.formId&&!ev){let e=ep.find(e=>e.id===eq.formId);e&&(null===ey||ey?.id!==e.id)&&(eh(e),eF(!0))}},[ep,eq?.formId,L,eh,ey,ev,eF]);let eL=(0,i.useCallback)(async()=>{if(eq?.id&&eq?.entityId===A&&eq?.entity===C&&ey?.formFields)return await e$({submissionId:eq.id,formFields:ey.formFields})?eq.id:void 0;let e=Number(ey?.formId??ey?.value),t=ey?.userId??eE;if(e&&t&&ey?.formFields&&!eq?.id)return eS(e,t,ey.formFields)},[eq?.entity,eq?.entityId,eq?.id,C,A,eS,e$,ey,eE]),eH=(0,i.useMemo)(()=>{var e;let t;return e=em??ew,t=Array.isArray(ex)?ex:[],!!e&&t.filter(t=>t.required&&h(t,e)).every(t=>{var i;return!t.stateName||("table"===t.type?(0,p.S)(t.grid,e[t.stateName]):"repeatableBlock"===t.type||("timeRange"===t.type?(0,y.K)(t,e[t.stateName]):null!=(i=e[t.stateName])&&("string"==typeof i?i.trim().length>0:Array.isArray(i)?i.length>0:"object"!=typeof i||Object.keys(i).length>0)))})&&0===g(t,e).length},[ex,em,ew]),eW=(0,i.useMemo)(()=>{let e=em??ew;return ex&&e?{...Object.fromEntries(g(ex,e).filter(e=>e.stateName).map(e=>[String(e.stateName),`${e.blockName??e.label??"This block"} has entries with missing required fields`])),...eM}:eM},[ex,em,ew,eM]),eG=(0,i.useCallback)(async()=>{if(!ee){et(!0);try{if(!await eL())throw Error("Draft could not be saved");eo.show({content:"Draft saved",severity:"success"}),G?.()}catch(e){eo.show({content:e instanceof Error&&e.message?e.message:"Failed to save draft",severity:"error"})}finally{et(!1)}}},[ee,eL,eo,G]),eU=(0,i.useCallback)(async()=>{if(!ei){er(!0);try{await eC();let e=await eL();if(!e)throw Error("Form submission could not be saved");if(!await ek(e,V))throw Error("Form submission could not be finalised");eo.show({content:"Form submitted",severity:"success"}),U?.()}catch(e){eo.show({content:e instanceof Error&&e.message?e.message:"Failed to submit form",severity:"error"})}finally{er(!1)}}},[ei,eC,eL,ek,V,eo,U]);(0,i.useEffect)(()=>{let e=Number(q.submitCount??0);if(!q.isSubmitted||0===e){es.current=0;return}if(es.current===e)return;es.current=e;let t=!!Object.keys(eM).length,i=!ey&&!!eq?.id;if(!t){if(i)return void e_(eq.id).then(()=>{en.current?.()});eL().then(e=>{en.current?.(e)},()=>{en.current?.(void 0)})}},[eq?.id,q.isSubmitted,q.submitCount,e_,eL,ey,eM]),(0,i.useImperativeHandle)(b,()=>({validateSubmission:eC}));let eV=(0,i.useMemo)(()=>({task:H||null,form:{submissionData:ew||{},formFields:ey?.formFields||[],totalScore:eR||null,createdAt:eq?.createdAt||null,updatedAt:eq?.updatedAt||null,userId:eq?.userId||ey?.userId||null},formMedia:eN??{Media:[]},adminId:eA.adminId}),[eN,ey?.formFields,ey?.userId,ew,H,eR,eA.adminId,eq?.createdAt,eq?.updatedAt,eq?.userId]),eJ=(0,i.useMemo)(()=>{let e=eb??eq?.id;if(e&&ex?.length)return(0,F.f)(e,ex).entityIdByStateName},[eb,eq?.id,ex]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.f,{name:B,control:$,errors:k,register:w,isDisabled:z,handleFormChange:eB,hasPreview:R,hasDownload:O,toggleEyePreview:eT,activeForms:ep,selectedForm:Z?null:ey,setSelectedForm:eh,showEyeNotification:J,taskReport:eV,entity:C}),ey&&ey?.id&&!!E&&(0,t.jsx)(n.f,{entityId:A,entityIdByStateName:eJ,scheme:ex,submissionData:ed,isOffCanvas:!0,liftingSubmissions:eP,calculatedTotalScore:ez,blockStyle:_.blockStyle,validationErrors:eW,errors:k}),(0,t.jsx)(l.f,{showScoreAndLabels:!!D&&!!ey?.id,totalScore:eR,findScoreLabel:eD,scoreLabels:eO}),!!E&&!!ey?.id&&!!G&&(0,t.jsxs)(r.f,{sx:{display:"flex",justifyContent:"flex-end",gap:2,mt:2},children:[(0,t.jsx)(o.f,{variant:"contained",color:"secondary",type:"button",onClick:eG,disabled:ee||ei,children:"Save draft"}),(0,t.jsx)(s.l,{title:eH?"":"There are required fields that need to be completed before form can be submitted",children:(0,t.jsx)("span",{children:(0,t.jsx)(o.f,{variant:"contained",color:"secondary",type:"button",onClick:eU,disabled:!eH||ei||ee,children:"Submit"})})})]}),(0,t.jsx)(d.f,{selectedForm:ey,open:Q,onClose:eT})]})}),_={blockStyle:{border:"none",backgroundColor:"#FFFFFF",highlighted:""}};e.s(["f",0,$],341056)},886143,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`;e.s(["o",0,i,"A",0,r])},816037,e=>{e.s(["f",0,(e,t)=>{let i={};for(let r of t)r.stateName&&("fileUpload"===r.type&&(i[r.stateName]=e),"repeatableBlock"===r.type&&t.some(e=>void 0!==e.id&&"fileUpload"===e.type&&!!e.stateName&&r.memberIds?.includes(String(e.id)))&&(i[r.stateName]=e));return{entityId:e,entityIdByStateName:i}}])},251825,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),s=e.r(391398);i.default=(0,o.default)((0,s.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline")},652002,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),s=e.r(391398);i.default=(0,o.default)((0,s.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded")},555588,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),s=e.r(391398);i.default=(0,o.default)((0,s.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},820726,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),s=e.r(391398);i.default=(0,o.default)((0,s.jsx)("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"WarningRounded")},238802,e=>{var t=e.i(515523);e.s(["f",()=>t.f])},632784,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),o=e.i(889878),s=e.i(600961),n=e.i(396851),a=e.i(395724),d=e.i(713149),l=e.i(46739);function u(e){return(0,l.f)("MuiFormGroup",e)}(0,d.f)("MuiFormGroup",["root","row","error"]);var m=e.i(225730),f=e.i(180730),c=e.i(391398);let b=["className","row"],p=(0,n.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,i.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),y=r.forwardRef(function(e,r){let n=(0,a.f)({props:e,name:"MuiFormGroup"}),{className:d,row:l=!1}=n,y=(0,t.f)(n,b),h=(0,m.f)(),g=(0,f.f)({props:n,muiFormControl:h,states:["error"]}),x=(0,i.f)({},n,{row:l,error:g.error}),I=(e=>{let{classes:t,row:i,error:r}=e;return(0,s.f)({root:["root",i&&"row",r&&"error"]},u,t)})(x);return(0,c.jsx)(p,(0,i.f)({className:(0,o.f)(I.root,d),ownerState:x,ref:r},y))});e.s(["f",0,y],632784)},121432,e=>{var t=e.i(773831);e.s(["f",()=>t.f])},530252,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),o=e.i(889878),s=e.i(600961),n=e.i(477366),a=e.i(272932),d=e.i(395724),l=e.i(727529),u=e.i(464107),m=e.i(938785),f=e.i(166822),c=e.i(713149),b=e.i(46739);function p(e){return(0,b.f)("MuiRadio",e)}let y=(0,c.f)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);var h=e.i(396851),g=e.i(896994),x=e.i(391398);let I=["checked","checkedIcon","color","icon","name","onChange","size","className"],v=(0,h.f)(a.f,{shouldForwardProp:e=>(0,g.f)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"medium"!==i.size&&t[`size${(0,u.f)(i.size)}`],t[`color${(0,u.f)(i.color)}`]]}})(e=>{let{theme:t,ownerState:r}=e;return(0,i.f)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,n.alpha)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${y.checked}`]:{color:(t.vars||t).palette[r.color].main}},{[`&.${y.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}),F=(0,x.jsx)(l.f,{checked:!0}),S=(0,x.jsx)(l.f,{}),$=r.forwardRef(function(e,n){var a,l,c,b;let y=(0,d.f)({props:e,name:"MuiRadio"}),{checked:h,checkedIcon:g=F,color:$="primary",icon:_=S,name:k,onChange:w,size:j="medium",className:q}=y,N=(0,t.f)(y,I),M=(0,i.f)({},y,{color:$,size:j}),C=(e=>{let{classes:t,color:r,size:o}=e,n={root:["root",`color${(0,u.f)(r)}`,"medium"!==o&&`size${(0,u.f)(o)}`]};return(0,i.f)({},t,(0,s.f)(n,p,t))})(M),A=r.useContext(f.f),E=h,O=(0,m.f)(w,A&&A.onChange),R=k;return A&&(void 0===E&&(c=A.value,E="object"==typeof(b=y.value)&&null!==b?c===b:String(c)===String(b)),void 0===R&&(R=A.name)),(0,x.jsx)(v,(0,i.f)({type:"radio",icon:r.cloneElement(_,{fontSize:null!=(a=S.props.fontSize)?a:j}),checkedIcon:r.cloneElement(g,{fontSize:null!=(l=F.props.fontSize)?l:j}),ownerState:M,classes:C,name:R,checked:E,onChange:O,ref:n,className:(0,o.f)(C.root,q)},N))});e.s(["f",0,$],530252)},727529,e=>{var t=e.i(75907);e.i(191788);var i=e.i(59540),r=e.i(391398);let o=(0,i.f)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),s=(0,i.f)((0,r.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var n=e.i(396851),a=e.i(896994);let d=(0,n.f)("span",{name:"MuiRadioButtonIcon",shouldForwardProp:a.f})({position:"relative",display:"flex"}),l=(0,n.f)(o,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),u=(0,n.f)(s,{name:"MuiRadioButtonIcon"})(e=>{let{theme:i,ownerState:r}=e;return(0,t.f)({left:0,position:"absolute",transform:"scale(0)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeIn,duration:i.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.shortest})})});e.s(["f",0,function(e){let{checked:i=!1,classes:o={},fontSize:s}=e,n=(0,t.f)({},e,{checked:i});return(0,r.jsxs)(d,{className:o.root,ownerState:n,children:[(0,r.jsx)(l,{fontSize:s,className:o.background,ownerState:n}),(0,r.jsx)(u,{fontSize:s,className:o.dot,ownerState:n})]})}],727529)},984636,e=>{e.i(350461);var t=e.i(75907),i=e.i(460997),r=e.i(191788),o=e.i(889878),s=e.i(600961),n=e.i(632784),a=e.i(258559),d=e.i(75136),l=e.i(324382),u=e.i(166822),m=e.i(701806),f=e.i(391398);let c=["actions","children","className","defaultValue","name","onChange","value"],b=r.forwardRef(function(e,b){let{actions:p,children:y,className:h,defaultValue:g,name:x,onChange:I,value:v}=e,F=(0,i.f)(e,c),S=r.useRef(null),$=(e=>{let{classes:t,row:i,error:r}=e;return(0,s.f)({root:["root",i&&"row",r&&"error"]},a.f,t)})(e),[_,k]=(0,l.f)({controlled:v,default:g,name:"RadioGroup"});r.useImperativeHandle(p,()=>({focus:()=>{let e=S.current.querySelector("input:not(:disabled):checked");e||(e=S.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let w=(0,d.f)(b,S),j=(0,m.f)(x),q=r.useMemo(()=>({name:j,onChange(e){k(e.target.value),I&&I(e,e.target.value)},value:_}),[j,I,k,_]);return(0,f.jsx)(u.f.Provider,{value:q,children:(0,f.jsx)(n.f,(0,t.f)({role:"radiogroup",ref:w,className:(0,o.f)($.root,h)},F,{children:y}))})});e.s(["f",0,b])},166822,e=>{e.i(350461);let t=e.i(191788).createContext(void 0);e.s(["f",0,t])},258559,e=>{var t=e.i(713149),i=e.i(46739);(0,t.f)("MuiRadioGroup",["root","row","error"]),e.s(["f",0,function(e){return(0,i.f)("MuiRadioGroup",e)}])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},379741,e=>{var t=e.i(322135);e.s(["f",()=>t.f])}])})();