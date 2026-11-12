(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[806430,343598,303828,150524,e=>{var t=e.i(391398),i=e.i(356119),o=e.i(121432),n=e.i(605224),r=e.i(477882),s=e.i(917563),a=e.i(440726),d=e.i(652002),l=e.i(67267),m=e.i(738251),c=e.i(813843),f=e.i(115871),u=e.i(926021);let p="Job reference, date and customer reference appear here on work order reports",y="Company name · registered office · company and VAT numbers · contact details",x="+ accreditation logos";e.s(["K",0,y,"o",0,x,"W",0,p],343598);let b={details:{variant:"body2",color:"textSecondary"},logos:{variant:"body2",color:"textSecondary"},text:{variant:"body2"}},h=e=>{let{formatting:i,footerText:o,typography:n=b}=e;return(0,t.jsxs)(c.f,{direction:"row",justifyContent:"space-between",alignItems:"flex-end",gap:1.5,children:[(0,t.jsxs)(m.f,{sx:{flex:1,minWidth:0},children:[(0,u.o)(i)&&(0,t.jsx)(f.f,{...n.details,children:y}),o&&(0,t.jsx)(f.f,{...n.text,noWrap:!0,sx:{...n.text.sx,maxWidth:"60%"},children:o}),(0,u._)(i)&&(0,t.jsx)(f.f,{...n.logos,children:x})]}),(0,u.V)(i)&&(0,t.jsx)(f.f,{...n.details,children:"1"})]})};e.s(["f",0,h],303828);var _=e.i(336276),g=e.i(498681),$=e.i(377198);let I={location:"1 High Street London SW1A 1AA",customer:"Customer name",supplier:"Supplier name",date:"01/01/2026",jobId:"WO-0001"};e.s(["f",0,I],150524);var v=e.i(399627);let F={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"14px 16px",marginBottom:"14px",textAlign:"right"},S={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"10px 16px",marginTop:"14px"},j={details:{sx:{fontSize:"10px",color:"#666666",fontFamily:"Nunito-Regular"}},logos:{sx:{fontSize:"10px",color:"#999999",fontFamily:"Nunito-Regular"}},text:{sx:{fontSize:"11px",color:"#666666"}}},w={border:"none",backgroundColor:"#FFFFFF",highlighted:""},k={pointerEvents:"none"},C={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"650px",height:"600px",padding:"10px",overflowY:"auto",borderRadius:"12px",backgroundColor:"#FFFFFF"},q={position:"sticky",top:0,height:"44px",backgroundColor:"#F5F5F5",borderRadius:"12px",zIndex:1,fontFamily:"Nunito-Regular",padding:"15px",display:"flex",alignItems:"center",justifyContent:"space-between"};e.s(["f",0,e=>{let{selectedForm:m,open:c,onClose:f,formatting:y}=e,{admin:x}=(0,g.f)(),b=x?.media?.find(e=>{let{item:t}=e;return"themeLogo"===t.category}),A=(0,$.f)(b?.item.filename)??null,M=(0,v.f)(y?.header?.text,I),R=(0,v.f)(y?.footer?.text,I),z=!y||(0,u.S)(y,I);return(0,t.jsx)(t.Fragment,{children:m&&(0,t.jsx)(n.f,{open:c,onClose:f,style:{zIndex:"9999"},slotProps:{backdrop:{sx:{backgroundColor:"rgba(0, 0, 0, 0.7)"}}},children:(0,t.jsxs)(r.f,{sx:C,children:[(0,t.jsxs)(s.f,{sx:q,marginBottom:1,children:[(0,t.jsx)(i.f,{variant:"h6",sx:{fontFamily:"Nunito-Regular",fontSize:"16px",paddingLeft:"10px"},children:"Form preview"}),(0,t.jsx)(o.f,{color:"secondary",onClick:f,sx:{marginLeft:"10px"},children:(0,t.jsx)(d.default,{sx:{fontSize:20}})})]}),(0,t.jsxs)("div",{style:k,children:[y&&(0,u.d)(y)&&(0,t.jsxs)(s.f,{sx:F,children:[(0,t.jsx)(i.f,{sx:{fontWeight:700,fontSize:"18px",color:"#666666"},children:M.trim()||m?.name||"Form name"}),(0,t.jsx)(i.f,{sx:{fontSize:"11px",color:"#999999",fontFamily:"Nunito-Regular"},children:p})]}),y&&(0,u.Y)(y)&&(0,t.jsx)(l.f,{formatting:y,formName:m?.name??null,logoUrl:A,templateVariables:I}),(0,t.jsx)(_.f,{name:z?m?.name:null,description:m?.description}),(0,t.jsx)(a.f,{scheme:m?.formFields,submissionData:m?.submissionData,blockStyle:w}),y&&(0,u.W)(y)&&(0,t.jsx)(s.f,{sx:S,children:(0,t.jsx)(h,{formatting:y,footerText:R,typography:j})})]})]})})})}],806430)},952859,e=>{var t=e.i(391398),i=e.i(191788),o=e.i(246896),n=e.i(886779),r=e.i(680596),s=e.i(751107),a=e.i(821627),d=e.i(356119),l=e.i(917563);let m={color:"secondary.main",borderColor:"secondary.main","&:hover":{color:"secondary.dark",backgroundColor:"transparent"}};e.s(["f",0,e=>{let{open:c,onClose:f,onAccept:u=f,onCancel:p=f,type:y}=e,[x,b]=(0,i.useState)(!1),h=(0,i.useRef)(!1),_=e=>async()=>{if(!h.current){h.current=!0,b(!0);try{await e()}finally{h.current=!1,b(!1)}}},g={draft:{title:"Are you sure you want to move this form to Draft?",content:"It will become available for selection in tasks and work orders.",cancelAction:"Cancel",okAction:"Move to draft"},publish:{title:"Are you sure you want to publish this form?",content:"It will become available for selection in tasks and work orders.",cancelAction:"Cancel",okAction:"Publish form"},applyToIncomplete:{title:"Apply to incomplete jobs?",content:"Do you want to apply this new template to all incomplete jobs and tasks?",dismissAction:"Keep editing",cancelAction:"Save only",okAction:"Save and apply",cancelSaves:!0},applyToNew:{title:"Apply new template",content:"Please note that these changes will only be applied to new jobs created using this template.",okAction:"Ok"},draftApplyToIncomplete:{title:"Save as a draft?",content:"This form is a draft. Publish it to add it to jobs and tasks.",cancelAction:"Keep editing",okAction:"Save draft"}};return(0,t.jsx)(o.f,{open:c,onClose:()=>!h.current&&f(),PaperProps:{sx:{borderRadius:"8px",overflow:"hidden",width:"421px",maxWidth:"421px",height:"239px",display:"flex",alignItems:"center",justifyContent:"center",margin:0,position:"relative"}},slotProps:{backdrop:{sx:{backgroundColor:"transparent"}}},children:(0,t.jsxs)(l.f,{sx:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,t.jsx)(l.f,{sx:{position:"absolute",top:0,left:0,right:0,backgroundColor:"#2673CA",color:"#ffffff",textAlign:"center",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",height:"64px"},children:(0,t.jsx)(d.f,{align:"center",sx:{fontSize:"15px",justifyContent:"center"},children:g[y].title})}),(0,t.jsx)(s.f,{sx:{display:"flex",justifyContent:"center",padding:0,paddingTop:"74px",flexGrow:1},children:(0,t.jsx)(d.f,{align:"center",alignContent:"center",sx:{fontSize:"14px",maxWidth:"320px",lineHeight:1.57},children:g[y].content})}),(0,t.jsx)(r.f,{sx:{display:"flex",justifyContent:"center",padding:0,marginTop:"10px",paddingBottom:"10px"},children:(0,t.jsxs)(n.f,{direction:"row",justifyContent:"center",sx:{display:"flex",gap:"12px"},children:[g[y]?.dismissAction&&(0,t.jsx)(a.f,{variant:"text",size:"small",disabled:x,onClick:_(f),sx:{height:"36px",minHeight:"36px",paddingInline:"16px",color:"text.secondary",marginLeft:"0 !important"},children:g[y].dismissAction}),g[y]?.cancelAction&&(0,t.jsx)(a.f,{color:"secondary",variant:g[y].cancelSaves?"outlined":"contained",size:"small",disabled:x,onClick:_(p),sx:{height:"36px",minHeight:"36px",paddingInline:"24px",color:"#000000",backgroundColor:"transparent",justifyContent:"center",alignItems:"center",boxShadow:"none",border:"1px solid #9C9C9C",borderRadius:"4px",marginLeft:"0 !important","&:hover":{color:"#919191",backgroundColor:"transparent"},...g[y].cancelSaves&&m},children:g[y].cancelAction}),(0,t.jsx)(a.f,{color:"secondary",variant:"contained",size:"small",disabled:x,onClick:_(u),sx:{height:"36px",minHeight:"36px",paddingInline:"24px",color:"F5F5F5",backgroundColor:"#1565C0",justifyContent:"center",alignItems:"center",boxShadow:"none",borderRadius:"4px","&:hover":{color:"F5F5F5",backgroundColor:"#1565C0"}},children:g[y].okAction})]})})]})})}])},441625,e=>{var t=e.i(159080);let i=t.f`
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
`,o=t.f`
  mutation UpdateStatus($id: Int!, $status: Boolean!) {
    update_Form_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      status
    }
  }
`,n=t.f`
  query GetFormNames($q: String, $limit: Int = 50, $offset: Int = 0) {
    Form(where: { name: { _ilike: $q } }, limit: $limit, offset: $offset) {
      name
      id
      formFields
      settings
    }
  }
`,r=t.f`
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
`,m=t.f`
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
`,u=t.f`
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
`,y=t.f`
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
`,e.s(["H",0,a,"O",0,u,"F",0,y,"W",0,r,"a",0,i,"z",0,s,"B",0,n,"G",0,c,"_",0,f,"k",0,d,"p",0,p,"I",0,m,"c",0,o,"q",0,l])},886143,e=>{var t=e.i(159080);let i=t.f`
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
`,o=t.f`
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
`;e.s(["o",0,i,"A",0,o])},617844,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1"}),"ArrowForwardRounded")},251825,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline")},652002,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded")},839264,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm3.17-6.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 14zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1"}),"DeleteForeverRounded")},555588,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},820726,(e,t,i)=>{var o=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"WarningRounded")},238802,e=>{var t=e.i(515523);e.s(["f",()=>t.f])},246896,680596,751107,e=>{var t=e.i(382161);e.s(["f",()=>t.f],246896);var i=e.i(77052);e.s(["f",()=>i.f],680596);var o=e.i(185758);e.s(["f",()=>o.f],751107)},632784,e=>{var t=e.i(460997),i=e.i(75907),o=e.i(191788),n=e.i(889878),r=e.i(600961),s=e.i(396851),a=e.i(395724),d=e.i(713149),l=e.i(46739);function m(e){return(0,l.f)("MuiFormGroup",e)}(0,d.f)("MuiFormGroup",["root","row","error"]);var c=e.i(225730),f=e.i(180730),u=e.i(391398);let p=["className","row"],y=(0,s.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,i.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),x=o.forwardRef(function(e,o){let s=(0,a.f)({props:e,name:"MuiFormGroup"}),{className:d,row:l=!1}=s,x=(0,t.f)(s,p),b=(0,c.f)(),h=(0,f.f)({props:s,muiFormControl:b,states:["error"]}),_=(0,i.f)({},s,{row:l,error:h.error}),g=(e=>{let{classes:t,row:i,error:o}=e;return(0,r.f)({root:["root",i&&"row",o&&"error"]},m,t)})(_);return(0,u.jsx)(y,(0,i.f)({className:(0,n.f)(g.root,d),ownerState:_,ref:o},x))});e.s(["f",0,x],632784)},774872,e=>{var t=e.i(740790);e.s(["f",()=>t.f])},121432,e=>{var t=e.i(773831);e.s(["f",()=>t.f])},530252,e=>{var t=e.i(460997),i=e.i(75907),o=e.i(191788),n=e.i(889878),r=e.i(600961),s=e.i(477366),a=e.i(272932),d=e.i(395724),l=e.i(727529),m=e.i(464107),c=e.i(938785),f=e.i(166822),u=e.i(713149),p=e.i(46739);function y(e){return(0,p.f)("MuiRadio",e)}let x=(0,u.f)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);var b=e.i(396851),h=e.i(896994),_=e.i(391398);let g=["checked","checkedIcon","color","icon","name","onChange","size","className"],$=(0,b.f)(a.f,{shouldForwardProp:e=>(0,h.f)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"medium"!==i.size&&t[`size${(0,m.f)(i.size)}`],t[`color${(0,m.f)(i.color)}`]]}})(e=>{let{theme:t,ownerState:o}=e;return(0,i.f)({color:(t.vars||t).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===o.color?t.vars.palette.action.activeChannel:t.vars.palette[o.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,s.alpha)("default"===o.color?t.palette.action.active:t.palette[o.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&{[`&.${x.checked}`]:{color:(t.vars||t).palette[o.color].main}},{[`&.${x.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}),I=(0,_.jsx)(l.f,{checked:!0}),v=(0,_.jsx)(l.f,{}),F=o.forwardRef(function(e,s){var a,l,u,p;let x=(0,d.f)({props:e,name:"MuiRadio"}),{checked:b,checkedIcon:h=I,color:F="primary",icon:S=v,name:j,onChange:w,size:k="medium",className:C}=x,q=(0,t.f)(x,g),A=(0,i.f)({},x,{color:F,size:k}),M=(e=>{let{classes:t,color:o,size:n}=e,s={root:["root",`color${(0,m.f)(o)}`,"medium"!==n&&`size${(0,m.f)(n)}`]};return(0,i.f)({},t,(0,r.f)(s,y,t))})(A),R=o.useContext(f.f),z=b,L=(0,c.f)(w,R&&R.onChange),P=j;return R&&(void 0===z&&(u=R.value,z="object"==typeof(p=x.value)&&null!==p?u===p:String(u)===String(p)),void 0===P&&(P=R.name)),(0,_.jsx)($,(0,i.f)({type:"radio",icon:o.cloneElement(S,{fontSize:null!=(a=v.props.fontSize)?a:k}),checkedIcon:o.cloneElement(h,{fontSize:null!=(l=I.props.fontSize)?l:k}),ownerState:A,classes:M,name:P,checked:z,onChange:L,ref:s,className:(0,n.f)(M.root,C)},q))});e.s(["f",0,F],530252)},727529,e=>{var t=e.i(75907);e.i(191788);var i=e.i(59540),o=e.i(391398);let n=(0,i.f)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),r=(0,i.f)((0,o.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var s=e.i(396851),a=e.i(896994);let d=(0,s.f)("span",{name:"MuiRadioButtonIcon",shouldForwardProp:a.f})({position:"relative",display:"flex"}),l=(0,s.f)(n,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),m=(0,s.f)(r,{name:"MuiRadioButtonIcon"})(e=>{let{theme:i,ownerState:o}=e;return(0,t.f)({left:0,position:"absolute",transform:"scale(0)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeIn,duration:i.transitions.duration.shortest})},o.checked&&{transform:"scale(1)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.shortest})})});e.s(["f",0,function(e){let{checked:i=!1,classes:n={},fontSize:r}=e,s=(0,t.f)({},e,{checked:i});return(0,o.jsxs)(d,{className:n.root,ownerState:s,children:[(0,o.jsx)(l,{fontSize:r,className:n.background,ownerState:s}),(0,o.jsx)(m,{fontSize:r,className:n.dot,ownerState:s})]})}],727529)},984636,e=>{e.i(350461);var t=e.i(75907),i=e.i(460997),o=e.i(191788),n=e.i(889878),r=e.i(600961),s=e.i(632784),a=e.i(258559),d=e.i(75136),l=e.i(324382),m=e.i(166822),c=e.i(701806),f=e.i(391398);let u=["actions","children","className","defaultValue","name","onChange","value"],p=o.forwardRef(function(e,p){let{actions:y,children:x,className:b,defaultValue:h,name:_,onChange:g,value:$}=e,I=(0,i.f)(e,u),v=o.useRef(null),F=(e=>{let{classes:t,row:i,error:o}=e;return(0,r.f)({root:["root",i&&"row",o&&"error"]},a.f,t)})(e),[S,j]=(0,l.f)({controlled:$,default:h,name:"RadioGroup"});o.useImperativeHandle(y,()=>({focus:()=>{let e=v.current.querySelector("input:not(:disabled):checked");e||(e=v.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let w=(0,d.f)(p,v),k=(0,c.f)(_),C=o.useMemo(()=>({name:k,onChange(e){j(e.target.value),g&&g(e,e.target.value)},value:S}),[k,g,j,S]);return(0,f.jsx)(m.f.Provider,{value:C,children:(0,f.jsx)(s.f,(0,t.f)({role:"radiogroup",ref:w,className:(0,n.f)(F.root,b)},I,{children:x}))})});e.s(["f",0,p])},166822,e=>{e.i(350461);let t=e.i(191788).createContext(void 0);e.s(["f",0,t])},258559,e=>{var t=e.i(713149),i=e.i(46739);(0,t.f)("MuiRadioGroup",["root","row","error"]),e.s(["f",0,function(e){return(0,i.f)("MuiRadioGroup",e)}])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},379741,e=>{var t=e.i(322135);e.s(["f",()=>t.f])},50765,e=>{var t=e.i(391398),i=e.i(293965),o=e.i(954102);let n=()=>(0,t.jsx)(o.f,{isCopy:!0});n.getLayout=function(e){return(0,t.jsx)(i.f,{children:e})},e.s(["default",0,n])}],639210,(e,t,i)=>{let o="/dashboard/formBuilder/copy/[id]";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(50765)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);