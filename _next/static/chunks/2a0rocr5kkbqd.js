(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,824451,e=>{var t=e.i(391398),i=e.i(800884),r=e.i(76381),o=e.i(515523),n=e.i(652148),a=e.i(191788);e.s(["f",0,e=>{let{color:s,variant:d,label:l,placeholder:u,error:m,helperText:c,size:f,loading:p,onSearchChange:g,onAddNew:h,textFieldProps:y={},disableClearable:b,onChange:x,onInputChange:_,...I}=e,[$,v]=(0,a.useState)(""),F=(0,a.useRef)("input");return(0,a.useEffect)(()=>{if(!g)return;if("reset"===F.current||"clear"===F.current)return void g($,F.current);let e=setTimeout(()=>{g($,F.current)},500);return()=>clearTimeout(e)},[$,g]),(0,t.jsx)(o.f,{disableClearable:b,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:p,filterOptions:(e,t)=>{let i=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return h&&""!==t.inputValue.trim()&&(i.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||i.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),i},onInputChange:(e,t,i)=>{F.current=i,v(t),_?.(e,t,i)},onChange:async(e,t,i)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&h){let r=t.value,o=await h(r);if(!o)return;x?.(e,o,i),v("");return}x?.(e,t,i)},renderTags:(e,r)=>e.map((e,o)=>(0,t.jsx)(i.f,{size:"small",label:e.label,...r({index:o})})),renderOption:(e,i,r)=>{let o=$||"",n="string"==typeof i?i:i?.label||"";if("object"==typeof i&&"isAddNew"in i&&i.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:n})});let a=((e,t)=>{let i=t?.trim()||"";if(!i||!e||i.length<3)return e;let r=[],o=i.toLowerCase(),n=e.toLowerCase(),a=0,s=n.indexOf(o);for(;-1!==s;)s>a&&r.push({text:e.substring(a,s),highlight:!1}),r.push({text:e.substring(s,s+i.length),highlight:!0}),a=s+i.length,s=n.indexOf(o,a);return a<e.length&&r.push({text:e.substring(a),highlight:!1}),r})(n,o);return(0,t.jsx)("li",{...e,children:Array.isArray(a)?(0,t.jsx)("span",{children:a.map((e,i)=>e.highlight?(0,t.jsx)("strong",{children:e.text},i):(0,t.jsx)("span",{children:e.text},i))}):n})},renderInput:e=>(0,t.jsx)(n.f,{label:l,placeholder:u,color:s,variant:d,error:m,helperText:c,...e,...y,inputProps:{...e.inputProps,...y.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...y.InputLabelProps||{}},InputProps:{...e.InputProps,...y.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[p?(0,t.jsx)(r.f,{color:"inherit",size:20}):null,y.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...I})}])},74633,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(920235),o=e.i(738251),n=e.i(813843),a=e.i(115871),s=e.i(529292),d=e.i(280445),l=e.i(449587),u=e.i(317536),m=e.i(974261),c=e.i(749231),f=e.i(845825),p=e.i(587369),g=e.i(332789),h=e.i(340569),y=e.i(203828);let b=e=>{let{disabled:i,currentPage:r,totalCount:o,pageSize:n,onPageChange:a}=e,s=(0,p.f)("(max-width:400px)"),d=(0,p.f)("(max-width:500px)");return(0,t.jsx)(x,{disabled:i,page:r,count:Math.ceil(o/n),onChange:(e,t)=>a(t),variant:"outlined",shape:"rounded",size:s?"small":"medium",hidePrevButton:1===r,hideNextButton:r===Math.ceil(o/n),siblingCount:+!d,renderItem:e=>(0,t.jsx)(f.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})},x=(0,d.f)(c.f)(e=>{let{hidePrevButton:t,hideNextButton:i,theme:r}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px",flexShrink:0},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:r.palette.white.main,backgroundColor:r.palette.secondary.main,...i?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}}),_={item:"id",order:"desc"},I=(0,d.f)(o.f)(e=>{let{containerHeight:t,containerMaxHeight:i}=e;return{height:t,maxHeight:i,minHeight:0,display:"flex",flexDirection:"column"}}),$=(0,d.f)(r.f)(e=>{let{theme:t,hideHeader:i}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",flex:1,minHeight:0},"& .MuiDataGrid-columnHeaders":{...i&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...i&&{marginTop:"0 !important"}},"& .MuiDataGrid-iconSeparator":{opacity:1},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["B",0,b,"s",0,e=>{let{hideHeader:r,columns:o,history:s,totalCount:d,paginationSize:c,containerHeight:f,containerMaxHeight:p,autoHeight:x,currentPage:v=0,onTableStateChange:F,initialSort:S=[_],noRowsOverlay:j,loading:C,stateKey:M,onColumnOrderChange:w,onColumnWidthChange:k,slotProps:q,...A}=e,R=(0,y.useRouter)(),P=c||m.r.paginationSize,{apiRef:z,displayColumns:G,persistColumnOrder:D,persistColumnWidth:L}=(0,g.f)({stateKey:M,columns:o});(0,h.f)(z,!A.disableColumnReorder);let T=(0,i.useMemo)(()=>({...q,baseTooltip:{disableTouchListener:!0,...q?.baseTooltip}}),[q]),B=(0,i.useCallback)((e,t,i)=>{w?.(e,t,i),D()},[w,D]),O=(0,i.useCallback)((e,t,i)=>{k?.(e,t,i),L(e)},[k,L]),N=(0,i.useCallback)(e=>{R.push({query:{...R.query,page:e}},void 0,{shallow:!0})},[R]),E=(0,i.useCallback)(e=>{s&&N(e),F?.(t=>({...t,currentPage:e-1,pageSize:P}))},[N,s,F,P]),W=(0,i.useMemo)(()=>({sorting:{sortModel:S.map(e=>({field:e.item,sort:e.order}))}}),[S]);return(0,i.useEffect)(()=>{!d||d>v*P||E(1)},[v,E,P,d]),(0,t.jsxs)(I,{containerHeight:f,containerMaxHeight:p,children:[(0,t.jsx)($,{hideHeader:r,hideFooter:!0,disableColumnMenu:!0,disableRowSelectionOnClick:!0,autoHeight:x,sortingMode:"server",filterMode:"server",apiRef:z,onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?F?.(e=>({...e,sorting:[{item:t.field.replace(/'/g,'"'),order:t.sort}]})):F?.(e=>({...e,sorting:S}))},onColumnOrderChange:B,onColumnWidthChange:O,columns:G,initialState:W,loading:C,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(l.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(u.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(n.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(l.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(u.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(n.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(a.f,{children:"There are no results."})}),noRowsOverlay:()=>j?(0,t.jsx)(n.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:j()}):(0,t.jsx)(n.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(a.f,{children:"There are no results."})})},slotProps:T,...A}),d&&Math.ceil(d/P)>1?(0,t.jsx)(b,{disabled:C,currentPage:v+1,totalCount:d,pageSize:P,onPageChange:E}):null]})}])},122965,e=>{var t=e.i(491230),i=e.i(203828),r=e.i(191788);let o=[{item:"id",order:"desc"}];e.s(["f",0,function(){let{initialSort:e=o,initialPageSize:n=50,options:a={},pageFromUrl:s=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=(0,i.useRouter)(),l=isNaN(Number(d.query.page))?0:Number(d.query.page)-1,[u,m]=(0,r.useState)({currentPage:s?l:0,pageSize:n,sorting:e||[]}),c=(0,r.useMemo)(()=>u.sorting.reduce((e,i)=>{let r=a.orderType,o=(0,t.f)(i.item.replaceAll(/ORDER/gi,`${i.order}${r?`_${r}`:""}`));return Array.isArray(o)?[...e,...o]:o?[...e,o]:[...e,{[i.item]:`${i.order}${r?`_${r}`:""}`}]},[]),[a.orderType,u.sorting]);return{reference:{currentPage:u.currentPage,paginationSize:u.pageSize,onTableStateChange:m,initialSort:e},pagination:{offset:u.currentPage*u.pageSize,limit:u.pageSize},order:c}}])},806430,343598,303828,150524,e=>{var t=e.i(391398),i=e.i(356119),r=e.i(121432),o=e.i(605224),n=e.i(477882),a=e.i(917563),s=e.i(440726),d=e.i(652002),l=e.i(67267),u=e.i(738251),m=e.i(813843),c=e.i(115871),f=e.i(926021);let p="Job reference, date and customer reference appear here on work order reports",g="Company name · registered office · company and VAT numbers · contact details",h="+ accreditation logos";e.s(["K",0,g,"o",0,h,"W",0,p],343598);let y={details:{variant:"body2",color:"textSecondary"},logos:{variant:"body2",color:"textSecondary"},text:{variant:"body2"}},b=e=>{let{formatting:i,footerText:r,typography:o=y}=e;return(0,t.jsxs)(m.f,{direction:"row",justifyContent:"space-between",alignItems:"flex-end",gap:1.5,children:[(0,t.jsxs)(u.f,{sx:{flex:1,minWidth:0},children:[(0,f.o)(i)&&(0,t.jsx)(c.f,{...o.details,children:g}),r&&(0,t.jsx)(c.f,{...o.text,noWrap:!0,sx:{...o.text.sx,maxWidth:"60%"},children:r}),(0,f._)(i)&&(0,t.jsx)(c.f,{...o.logos,children:h})]}),(0,f.V)(i)&&(0,t.jsx)(c.f,{...o.details,children:"1"})]})};e.s(["f",0,b],303828);var x=e.i(336276),_=e.i(498681),I=e.i(377198);let $={location:"1 High Street London SW1A 1AA",customer:"Customer name",supplier:"Supplier name",date:"01/01/2026",jobId:"WO-0001"};e.s(["f",0,$],150524);var v=e.i(399627);let F={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"14px 16px",marginBottom:"14px",textAlign:"right"},S={backgroundColor:"#E6E6E6",borderRadius:"4px",padding:"10px 16px",marginTop:"14px"},j={details:{sx:{fontSize:"10px",color:"#666666",fontFamily:"Nunito-Regular"}},logos:{sx:{fontSize:"10px",color:"#999999",fontFamily:"Nunito-Regular"}},text:{sx:{fontSize:"11px",color:"#666666"}}},C={border:"none",backgroundColor:"#FFFFFF",highlighted:""},M={pointerEvents:"none"},w={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"650px",height:"600px",padding:"10px",overflowY:"auto",borderRadius:"12px",backgroundColor:"#FFFFFF"},k={position:"sticky",top:0,height:"44px",backgroundColor:"#F5F5F5",borderRadius:"12px",zIndex:1,fontFamily:"Nunito-Regular",padding:"15px",display:"flex",alignItems:"center",justifyContent:"space-between"};e.s(["f",0,e=>{let{selectedForm:u,open:m,onClose:c,formatting:g}=e,{admin:h}=(0,_.f)(),y=h?.media?.find(e=>{let{item:t}=e;return"themeLogo"===t.category}),q=(0,I.f)(y?.item.filename)??null,A=(0,v.f)(g?.header?.text,$),R=(0,v.f)(g?.footer?.text,$),P=!g||(0,f.S)(g,$);return(0,t.jsx)(t.Fragment,{children:u&&(0,t.jsx)(o.f,{open:m,onClose:c,style:{zIndex:"9999"},slotProps:{backdrop:{sx:{backgroundColor:"rgba(0, 0, 0, 0.7)"}}},children:(0,t.jsxs)(n.f,{sx:w,children:[(0,t.jsxs)(a.f,{sx:k,marginBottom:1,children:[(0,t.jsx)(i.f,{variant:"h6",sx:{fontFamily:"Nunito-Regular",fontSize:"16px",paddingLeft:"10px"},children:"Form preview"}),(0,t.jsx)(r.f,{color:"secondary",onClick:c,sx:{marginLeft:"10px"},children:(0,t.jsx)(d.default,{sx:{fontSize:20}})})]}),(0,t.jsxs)("div",{style:M,children:[g&&(0,f.d)(g)&&(0,t.jsxs)(a.f,{sx:F,children:[(0,t.jsx)(i.f,{sx:{fontWeight:700,fontSize:"18px",color:"#666666"},children:A.trim()||u?.name||"Form name"}),(0,t.jsx)(i.f,{sx:{fontSize:"11px",color:"#999999",fontFamily:"Nunito-Regular"},children:p})]}),g&&(0,f.Y)(g)&&(0,t.jsx)(l.f,{formatting:g,formName:u?.name??null,logoUrl:q,templateVariables:$}),(0,t.jsx)(x.f,{name:P?u?.name:null,description:u?.description}),(0,t.jsx)(s.f,{scheme:u?.formFields,submissionData:u?.submissionData,blockStyle:C}),g&&(0,f.W)(g)&&(0,t.jsx)(a.f,{sx:S,children:(0,t.jsx)(b,{formatting:g,footerText:R,typography:j})})]})]})})})}],806430)},441625,e=>{var t=e.i(159080);let i=t.f`
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
`,n=t.f`
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
`,a=t.f`
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
`,s=t.f`
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
`,c=t.f`
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
`,g=t.f`
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
`,e.s(["H",0,s,"O",0,f,"F",0,g,"W",0,n,"a",0,i,"z",0,a,"B",0,o,"G",0,m,"_",0,c,"k",0,d,"p",0,p,"I",0,u,"c",0,r,"q",0,l])},886143,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["o",0,i,"A",0,r])},491230,e=>{e.s(["f",0,e=>{try{return JSON.parse(e)}catch(e){return!1}}])},251825,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline")},652002,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded")},555588,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},820726,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=r(e.r(421506)),n=e.r(391398);i.default=(0,o.default)((0,n.jsx)("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"WarningRounded")},238802,e=>{var t=e.i(515523);e.s(["f",()=>t.f])},632784,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),o=e.i(889878),n=e.i(600961),a=e.i(396851),s=e.i(395724),d=e.i(713149),l=e.i(46739);function u(e){return(0,l.f)("MuiFormGroup",e)}(0,d.f)("MuiFormGroup",["root","row","error"]);var m=e.i(225730),c=e.i(180730),f=e.i(391398);let p=["className","row"],g=(0,a.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,i.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),h=r.forwardRef(function(e,r){let a=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:d,row:l=!1}=a,h=(0,t.f)(a,p),y=(0,m.f)(),b=(0,c.f)({props:a,muiFormControl:y,states:["error"]}),x=(0,i.f)({},a,{row:l,error:b.error}),_=(e=>{let{classes:t,row:i,error:r}=e;return(0,n.f)({root:["root",i&&"row",r&&"error"]},u,t)})(x);return(0,f.jsx)(g,(0,i.f)({className:(0,o.f)(_.root,d),ownerState:x,ref:r},h))});e.s(["f",0,h],632784)},121432,e=>{var t=e.i(773831);e.s(["f",()=>t.f])},530252,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),o=e.i(889878),n=e.i(600961),a=e.i(477366),s=e.i(272932),d=e.i(395724),l=e.i(727529),u=e.i(464107),m=e.i(938785),c=e.i(166822),f=e.i(713149),p=e.i(46739);function g(e){return(0,p.f)("MuiRadio",e)}let h=(0,f.f)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);var y=e.i(396851),b=e.i(896994),x=e.i(391398);let _=["checked","checkedIcon","color","icon","name","onChange","size","className"],I=(0,y.f)(s.f,{shouldForwardProp:e=>(0,b.f)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,"medium"!==i.size&&t[`size${(0,u.f)(i.size)}`],t[`color${(0,u.f)(i.color)}`]]}})(e=>{let{theme:t,ownerState:r}=e;return(0,i.f)({color:(t.vars||t).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===r.color?t.vars.palette.action.activeChannel:t.vars.palette[r.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.alpha)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&{[`&.${h.checked}`]:{color:(t.vars||t).palette[r.color].main}},{[`&.${h.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}),$=(0,x.jsx)(l.f,{checked:!0}),v=(0,x.jsx)(l.f,{}),F=r.forwardRef(function(e,a){var s,l,f,p;let h=(0,d.f)({props:e,name:"MuiRadio"}),{checked:y,checkedIcon:b=$,color:F="primary",icon:S=v,name:j,onChange:C,size:M="medium",className:w}=h,k=(0,t.f)(h,_),q=(0,i.f)({},h,{color:F,size:M}),A=(e=>{let{classes:t,color:r,size:o}=e,a={root:["root",`color${(0,u.f)(r)}`,"medium"!==o&&`size${(0,u.f)(o)}`]};return(0,i.f)({},t,(0,n.f)(a,g,t))})(q),R=r.useContext(c.f),P=y,z=(0,m.f)(C,R&&R.onChange),G=j;return R&&(void 0===P&&(f=R.value,P="object"==typeof(p=h.value)&&null!==p?f===p:String(f)===String(p)),void 0===G&&(G=R.name)),(0,x.jsx)(I,(0,i.f)({type:"radio",icon:r.cloneElement(S,{fontSize:null!=(s=v.props.fontSize)?s:M}),checkedIcon:r.cloneElement(b,{fontSize:null!=(l=$.props.fontSize)?l:M}),ownerState:q,classes:A,name:G,checked:P,onChange:z,ref:a,className:(0,o.f)(A.root,w)},k))});e.s(["f",0,F],530252)},727529,e=>{var t=e.i(75907);e.i(191788);var i=e.i(59540),r=e.i(391398);let o=(0,i.f)((0,r.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),n=(0,i.f)((0,r.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var a=e.i(396851),s=e.i(896994);let d=(0,a.f)("span",{name:"MuiRadioButtonIcon",shouldForwardProp:s.f})({position:"relative",display:"flex"}),l=(0,a.f)(o,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),u=(0,a.f)(n,{name:"MuiRadioButtonIcon"})(e=>{let{theme:i,ownerState:r}=e;return(0,t.f)({left:0,position:"absolute",transform:"scale(0)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeIn,duration:i.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:i.transitions.create("transform",{easing:i.transitions.easing.easeOut,duration:i.transitions.duration.shortest})})});e.s(["f",0,function(e){let{checked:i=!1,classes:o={},fontSize:n}=e,a=(0,t.f)({},e,{checked:i});return(0,r.jsxs)(d,{className:o.root,ownerState:a,children:[(0,r.jsx)(l,{fontSize:n,className:o.background,ownerState:a}),(0,r.jsx)(u,{fontSize:n,className:o.dot,ownerState:a})]})}],727529)},984636,e=>{e.i(350461);var t=e.i(75907),i=e.i(460997),r=e.i(191788),o=e.i(889878),n=e.i(600961),a=e.i(632784),s=e.i(258559),d=e.i(75136),l=e.i(324382),u=e.i(166822),m=e.i(701806),c=e.i(391398);let f=["actions","children","className","defaultValue","name","onChange","value"],p=r.forwardRef(function(e,p){let{actions:g,children:h,className:y,defaultValue:b,name:x,onChange:_,value:I}=e,$=(0,i.f)(e,f),v=r.useRef(null),F=(e=>{let{classes:t,row:i,error:r}=e;return(0,n.f)({root:["root",i&&"row",r&&"error"]},s.f,t)})(e),[S,j]=(0,l.f)({controlled:I,default:b,name:"RadioGroup"});r.useImperativeHandle(g,()=>({focus:()=>{let e=v.current.querySelector("input:not(:disabled):checked");e||(e=v.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let C=(0,d.f)(p,v),M=(0,m.f)(x),w=r.useMemo(()=>({name:M,onChange(e){j(e.target.value),_&&_(e,e.target.value)},value:S}),[M,_,j,S]);return(0,c.jsx)(u.f.Provider,{value:w,children:(0,c.jsx)(a.f,(0,t.f)({role:"radiogroup",ref:C,className:(0,o.f)(F.root,y)},$,{children:h}))})});e.s(["f",0,p])},166822,e=>{e.i(350461);let t=e.i(191788).createContext(void 0);e.s(["f",0,t])},258559,e=>{var t=e.i(713149),i=e.i(46739);(0,t.f)("MuiRadioGroup",["root","row","error"]),e.s(["f",0,function(e){return(0,i.f)("MuiRadioGroup",e)}])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},379741,e=>{var t=e.i(322135);e.s(["f",()=>t.f])}])})();