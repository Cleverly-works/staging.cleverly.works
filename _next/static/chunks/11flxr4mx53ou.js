(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,824451,e=>{var t=e.i(391398),r=e.i(800884),i=e.i(76381),n=e.i(515523),o=e.i(652148),a=e.i(191788);e.s(["f",0,e=>{let{color:s,variant:u,label:d,placeholder:l,error:c,helperText:m,size:f,loading:p,onSearchChange:g,onAddNew:h,textFieldProps:y={},disableClearable:b,onChange:_,onInputChange:v,...$}=e,[I,x]=(0,a.useState)(""),S=(0,a.useRef)("input");return(0,a.useEffect)(()=>{if(!g)return;if("reset"===S.current||"clear"===S.current)return void g(I,S.current);let e=setTimeout(()=>{g(I,S.current)},500);return()=>clearTimeout(e)},[I,g]),(0,t.jsx)(n.f,{disableClearable:b,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:p,filterOptions:(e,t)=>{let r=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return h&&""!==t.inputValue.trim()&&(r.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||r.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),r},onInputChange:(e,t,r)=>{S.current=r,x(t),v?.(e,t,r)},onChange:async(e,t,r)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&h){let i=t.value,n=await h(i);if(!n)return;_?.(e,n,r),x("");return}_?.(e,t,r)},renderTags:(e,i)=>e.map((e,n)=>(0,t.jsx)(r.f,{size:"small",label:e.label,...i({index:n})})),renderOption:(e,r,i)=>{let n=I||"",o="string"==typeof r?r:r?.label||"";if("object"==typeof r&&"isAddNew"in r&&r.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:o})});let a=((e,t)=>{let r=t?.trim()||"";if(!r||!e||r.length<3)return e;let i=[],n=r.toLowerCase(),o=e.toLowerCase(),a=0,s=o.indexOf(n);for(;-1!==s;)s>a&&i.push({text:e.substring(a,s),highlight:!1}),i.push({text:e.substring(s,s+r.length),highlight:!0}),a=s+r.length,s=o.indexOf(n,a);return a<e.length&&i.push({text:e.substring(a),highlight:!1}),i})(o,n);return(0,t.jsx)("li",{...e,children:Array.isArray(a)?(0,t.jsx)("span",{children:a.map((e,r)=>e.highlight?(0,t.jsx)("strong",{children:e.text},r):(0,t.jsx)("span",{children:e.text},r))}):o})},renderInput:e=>(0,t.jsx)(o.f,{label:d,placeholder:l,color:s,variant:u,error:c,helperText:m,...e,...y,inputProps:{...e.inputProps,...y.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...y.InputLabelProps||{}},InputProps:{...e.InputProps,...y.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[p?(0,t.jsx)(i.f,{color:"inherit",size:20}):null,y.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...$})}])},74633,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(920235),n=e.i(738251),o=e.i(813843),a=e.i(115871),s=e.i(529292),u=e.i(280445),d=e.i(449587),l=e.i(317536),c=e.i(974261),m=e.i(749231),f=e.i(845825),p=e.i(587369),g=e.i(332789),h=e.i(340569),y=e.i(203828);let b=e=>{let{disabled:r,currentPage:i,totalCount:n,pageSize:o,onPageChange:a}=e,s=(0,p.f)("(max-width:400px)"),u=(0,p.f)("(max-width:500px)");return(0,t.jsx)(_,{disabled:r,page:i,count:Math.ceil(n/o),onChange:(e,t)=>a(t),variant:"outlined",shape:"rounded",size:s?"small":"medium",hidePrevButton:1===i,hideNextButton:i===Math.ceil(n/o),siblingCount:+!u,renderItem:e=>(0,t.jsx)(f.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})},_=(0,u.f)(m.f)(e=>{let{hidePrevButton:t,hideNextButton:r,theme:i}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px",flexShrink:0},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:i.palette.white.main,backgroundColor:i.palette.secondary.main,...r?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}}),v={item:"id",order:"desc"},$=(0,u.f)(n.f)(e=>{let{containerHeight:t,containerMaxHeight:r}=e;return{height:t,maxHeight:r,minHeight:0,display:"flex",flexDirection:"column"}}),I=(0,u.f)(i.f)(e=>{let{theme:t,hideHeader:r}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",flex:1,minHeight:0},"& .MuiDataGrid-columnHeaders":{...r&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...r&&{marginTop:"0 !important"}},"& .MuiDataGrid-iconSeparator":{opacity:1},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,s._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["B",0,b,"s",0,e=>{let{hideHeader:i,columns:n,history:s,totalCount:u,paginationSize:m,containerHeight:f,containerMaxHeight:p,autoHeight:_,currentPage:x=0,onTableStateChange:S,initialSort:C=[v],noRowsOverlay:w,loading:F,stateKey:M,onColumnOrderChange:j,onColumnWidthChange:q,slotProps:k,...R}=e,A=(0,y.useRouter)(),P=m||c.r.paginationSize,{apiRef:E,displayColumns:G,persistColumnOrder:z,persistColumnWidth:D}=(0,g.f)({stateKey:M,columns:n});(0,h.f)(E,!R.disableColumnReorder);let T=(0,r.useMemo)(()=>({...k,baseTooltip:{disableTouchListener:!0,...k?.baseTooltip}}),[k]),O=(0,r.useCallback)((e,t,r)=>{j?.(e,t,r),z()},[j,z]),B=(0,r.useCallback)((e,t,r)=>{q?.(e,t,r),D(e)},[q,D]),L=(0,r.useCallback)(e=>{A.push({query:{...A.query,page:e}},void 0,{shallow:!0})},[A]),N=(0,r.useCallback)(e=>{s&&L(e),S?.(t=>({...t,currentPage:e-1,pageSize:P}))},[L,s,S,P]),H=(0,r.useMemo)(()=>({sorting:{sortModel:C.map(e=>({field:e.item,sort:e.order}))}}),[C]);return(0,r.useEffect)(()=>{!u||u>x*P||N(1)},[x,N,P,u]),(0,t.jsxs)($,{containerHeight:f,containerMaxHeight:p,children:[(0,t.jsx)(I,{hideHeader:i,hideFooter:!0,disableColumnMenu:!0,disableRowSelectionOnClick:!0,autoHeight:_,sortingMode:"server",filterMode:"server",apiRef:E,onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?S?.(e=>({...e,sorting:[{item:t.field.replace(/'/g,'"'),order:t.sort}]})):S?.(e=>({...e,sorting:C}))},onColumnOrderChange:O,onColumnWidthChange:B,columns:G,initialState:H,loading:F,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(d.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(l.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(o.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(d.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(l.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(o.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(a.f,{children:"There are no results."})}),noRowsOverlay:()=>w?(0,t.jsx)(o.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:w()}):(0,t.jsx)(o.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(a.f,{children:"There are no results."})})},slotProps:T,...R}),u&&Math.ceil(u/P)>1?(0,t.jsx)(b,{disabled:F,currentPage:x+1,totalCount:u,pageSize:P,onPageChange:N}):null]})}])},558091,e=>{var t=e.i(391398),r=e.i(821627),i=e.i(477882),n=e.i(886779),o=e.i(280445),a=e.i(356119);let s=(0,o.f)(i.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100vw",maxWidth:"600px",maxHeight:"100vh",padding:"16px",borderRadius:"8px",overflow:"auto"}));e.s(["f",0,e=>{let{onCancel:i,onConfirm:o,title:u="Unsaved changes",body:d="Leaving this page means you will lose any updates you've made.",cancelLabel:l="Cancel",confirmLabel:c="Confirm"}=e;return(0,t.jsxs)(s,{children:[(0,t.jsx)(a.f,{variant:"h6",sx:{padding:"0 0 16px 0"},children:u}),(0,t.jsx)(n.f,{children:(0,t.jsx)(a.f,{sx:{textAlign:"left"},children:d})}),(0,t.jsxs)(n.f,{direction:"row",spacing:2,justifyContent:"flex-end",sx:{padding:"16px 0 16px 24px"},children:[(0,t.jsx)(r.f,{onClick:i,color:"danger",variant:"contained",children:l}),(0,t.jsx)(r.f,{onClick:o,color:"secondary",variant:"contained",children:c})]})]})}])},185242,e=>{var t=e.i(191788),r=e.i(190077),i=e.i(631328),n=e.i(105118),o=e.i(3878);e.s(["f",0,function(e,a){let{queryKey:s,method:u="GET",headers:d,body:l,params:c,pathParams:m,baseUrl:f,skip:p=!1,pollInterval:g,stopPollingOnError:h=!0,onCompleted:y,onError:b}=a,_=(0,o.r)(),v=(0,t.useRef)(null),$=(0,t.useRef)(!0),{fetchQuery:I,unregisterQuery:x,registerQuery:S}=_,C=(0,t.useMemo)(()=>(0,r.f)(),[]),[w,F]=(0,t.useState)(void 0),[M,j]=(0,t.useState)(null),[q,k]=(0,t.useState)(!1),[R,A]=(0,t.useState)(0),P=(0,i.s)(p),E=(0,i.s)(l),G=(0,i.s)(c),z=(0,i.s)(m),D=(0,i.s)(R),T=(0,t.useRef)(0),O=(0,t.useRef)(null),B=(0,t.useRef)(y),L=(0,t.useRef)(b);(0,t.useEffect)(()=>{B.current=y,L.current=b});let N=(0,t.useCallback)(async()=>{v.current?.abort();let t=new AbortController;v.current=t,j(null),k(!0);let r=++T.current,i=!1;try{let i=await I(e,{baseUrl:f,method:u,headers:d,body:l,params:c,pathParams:m,signal:t.signal});r===T.current&&(F(i),B.current?.(i))}catch(n){if(n instanceof Error&&"AbortError"===n.name){i=!0,v.current===t&&k(!1);return}let e=n instanceof Error?n:Error("An unknown error occurred");r===T.current&&(j(e),L.current?.(e))}finally{i||r!==T.current||k(!1)}},[f,l,I,d,u,c,m,e]),H=(0,t.useRef)(N);(0,t.useEffect)(()=>{H.current=N}),(0,t.useEffect)(()=>(S(s,C,()=>A(e=>e+1),u),()=>{x(s,C)}),[C,u,s,S,x]),(0,t.useEffect)(()=>{if(O.current&&(clearTimeout(O.current),O.current=null,$.current=!1),p){P!==p&&(v.current?.abort(),k(!1));return}!$.current&&(0,n.f)(E,l)&&(0,n.f)(G,c)&&(0,n.f)(z,m)&&D===R&&P===p||(N(),$.current=!1)},[l,N,c,m,E,G,z,D,P,R,p]),(0,t.useEffect)(()=>()=>{O.current=setTimeout(()=>{O.current=null,v.current?.abort()}),$.current=!0},[]);let W=!!(g&&g>0&&!p&&!(h&&M));return(0,t.useEffect)(()=>{if(!W)return;let e=setInterval(()=>{H.current()},g);return()=>{clearInterval(e)}},[W,g]),{data:w,error:M,isLoading:q,isError:!!M,refetch:()=>A(e=>e+1)}}])},122965,e=>{var t=e.i(491230),r=e.i(203828),i=e.i(191788);let n=[{item:"id",order:"desc"}];e.s(["f",0,function(){let{initialSort:e=n,initialPageSize:o=50,options:a={},pageFromUrl:s=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=(0,r.useRouter)(),d=isNaN(Number(u.query.page))?0:Number(u.query.page)-1,[l,c]=(0,i.useState)({currentPage:s?d:0,pageSize:o,sorting:e||[]}),m=(0,i.useMemo)(()=>l.sorting.reduce((e,r)=>{let i=a.orderType,n=(0,t.f)(r.item.replaceAll(/ORDER/gi,`${r.order}${i?`_${i}`:""}`));return Array.isArray(n)?[...e,...n]:n?[...e,n]:[...e,{[r.item]:`${r.order}${i?`_${i}`:""}`}]},[]),[a.orderType,l.sorting]);return{reference:{currentPage:l.currentPage,paginationSize:l.pageSize,onTableStateChange:c,initialSort:e},pagination:{offset:l.currentPage*l.pageSize,limit:l.pageSize},order:m}}])},454684,e=>{var t=e.i(191788),r=e.i(203828);e.i(443645);var i=e.i(648116),n=e.i(558091);let o=e=>"object"==typeof e&&null!==e;e.s(["f",0,e=>{let a=(0,r.useRouter)(),[s,u]=(0,i.f)(),d=(0,t.useRef)(o(e)?e.current:e),l=(0,t.useRef)(!1),c=(0,t.useRef)("");return(0,t.useEffect)(()=>{o(e)||(d.current=e)},[e]),(0,t.useEffect)(()=>{let r=t=>{if(!(o(e)?e.current:d.current)||l.current){l.current=!1;return}throw c.current=t,window.location.pathname+window.location.search!==a.asPath.split("#")[0]&&window.history.pushState(null,"",a.asPath),a.events.emit("routeChangeError",Error("Route change aborted by user")),"Route change aborted by user"},i=e=>{if(e instanceof Error&&"Route change aborted by user"===e.message)u({content:e=>{let{onClose:r}=e;return t.createElement(n.f,{onCancel:()=>r(),onConfirm:()=>{r(),l.current=!0,a.push(c.current)}})}});else throw e};return a.events.on("routeChangeStart",r),a.events.on("routeChangeError",i),()=>{a.events.off("routeChangeStart",r),a.events.off("routeChangeError",i)}},[a,u,e]),(0,t.useEffect)(()=>{let t=t=>{(o(e)?e.current:d.current)&&(t.preventDefault(),t.returnValue="")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[e]),s}])},441625,e=>{var t=e.i(159080);let r=t.f`
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
`,i=t.f`
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
`,u=t.f`
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
`,d=t.f`
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
`,l=t.f`
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
`,e.s(["H",0,s,"O",0,f,"F",0,g,"W",0,o,"a",0,r,"z",0,a,"B",0,n,"G",0,c,"_",0,m,"k",0,u,"p",0,p,"I",0,l,"c",0,i,"q",0,d])},886143,e=>{var t=e.i(159080);let r=t.f`
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
`;e.s(["o",0,r,"A",0,i])},491230,e=>{e.s(["f",0,e=>{try{return JSON.parse(e)}catch(e){return!1}}])},251825,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),o=e.r(391398);r.default=(0,n.default)((0,o.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline")},668724,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),o=e.r(391398);r.default=(0,n.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline")},555588,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),o=e.r(391398);r.default=(0,n.default)((0,o.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},820726,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),o=e.r(391398);r.default=(0,n.default)((0,o.jsx)("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"WarningRounded")},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},632784,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),n=e.i(889878),o=e.i(600961),a=e.i(396851),s=e.i(395724),u=e.i(713149),d=e.i(46739);function l(e){return(0,d.f)("MuiFormGroup",e)}(0,u.f)("MuiFormGroup",["root","row","error"]);var c=e.i(225730),m=e.i(180730),f=e.i(391398);let p=["className","row"],g=(0,a.f)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.row&&t.row]}})(e=>{let{ownerState:t}=e;return(0,r.f)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})}),h=i.forwardRef(function(e,i){let a=(0,s.f)({props:e,name:"MuiFormGroup"}),{className:u,row:d=!1}=a,h=(0,t.f)(a,p),y=(0,c.f)(),b=(0,m.f)({props:a,muiFormControl:y,states:["error"]}),_=(0,r.f)({},a,{row:d,error:b.error}),v=(e=>{let{classes:t,row:r,error:i}=e;return(0,o.f)({root:["root",r&&"row",i&&"error"]},l,t)})(_);return(0,f.jsx)(g,(0,r.f)({className:(0,n.f)(v.root,u),ownerState:_,ref:i},h))});e.s(["f",0,h],632784)},121432,e=>{var t=e.i(773831);e.s(["f",()=>t.f])},477882,e=>{var t=e.i(88152);e.s(["f",()=>t.f])},530252,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),n=e.i(889878),o=e.i(600961),a=e.i(477366),s=e.i(272932),u=e.i(395724),d=e.i(727529),l=e.i(464107),c=e.i(938785),m=e.i(166822),f=e.i(713149),p=e.i(46739);function g(e){return(0,p.f)("MuiRadio",e)}let h=(0,f.f)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary","sizeSmall"]);var y=e.i(396851),b=e.i(896994),_=e.i(391398);let v=["checked","checkedIcon","color","icon","name","onChange","size","className"],$=(0,y.f)(s.f,{shouldForwardProp:e=>(0,b.f)(e)||"classes"===e,name:"MuiRadio",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"medium"!==r.size&&t[`size${(0,l.f)(r.size)}`],t[`color${(0,l.f)(r.color)}`]]}})(e=>{let{theme:t,ownerState:i}=e;return(0,r.f)({color:(t.vars||t).palette.text.secondary},!i.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${"default"===i.color?t.vars.palette.action.activeChannel:t.vars.palette[i.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.alpha)("default"===i.color?t.palette.action.active:t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==i.color&&{[`&.${h.checked}`]:{color:(t.vars||t).palette[i.color].main}},{[`&.${h.disabled}`]:{color:(t.vars||t).palette.action.disabled}})}),I=(0,_.jsx)(d.f,{checked:!0}),x=(0,_.jsx)(d.f,{}),S=i.forwardRef(function(e,a){var s,d,f,p;let h=(0,u.f)({props:e,name:"MuiRadio"}),{checked:y,checkedIcon:b=I,color:S="primary",icon:C=x,name:w,onChange:F,size:M="medium",className:j}=h,q=(0,t.f)(h,v),k=(0,r.f)({},h,{color:S,size:M}),R=(e=>{let{classes:t,color:i,size:n}=e,a={root:["root",`color${(0,l.f)(i)}`,"medium"!==n&&`size${(0,l.f)(n)}`]};return(0,r.f)({},t,(0,o.f)(a,g,t))})(k),A=i.useContext(m.f),P=y,E=(0,c.f)(F,A&&A.onChange),G=w;return A&&(void 0===P&&(f=A.value,P="object"==typeof(p=h.value)&&null!==p?f===p:String(f)===String(p)),void 0===G&&(G=A.name)),(0,_.jsx)($,(0,r.f)({type:"radio",icon:i.cloneElement(C,{fontSize:null!=(s=x.props.fontSize)?s:M}),checkedIcon:i.cloneElement(b,{fontSize:null!=(d=I.props.fontSize)?d:M}),ownerState:k,classes:R,name:G,checked:P,onChange:E,ref:a,className:(0,n.f)(R.root,j)},q))});e.s(["f",0,S],530252)},727529,e=>{var t=e.i(75907);e.i(191788);var r=e.i(59540),i=e.i(391398);let n=(0,r.f)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),o=(0,r.f)((0,i.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked");var a=e.i(396851),s=e.i(896994);let u=(0,a.f)("span",{name:"MuiRadioButtonIcon",shouldForwardProp:s.f})({position:"relative",display:"flex"}),d=(0,a.f)(n,{name:"MuiRadioButtonIcon"})({transform:"scale(1)"}),l=(0,a.f)(o,{name:"MuiRadioButtonIcon"})(e=>{let{theme:r,ownerState:i}=e;return(0,t.f)({left:0,position:"absolute",transform:"scale(0)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeIn,duration:r.transitions.duration.shortest})},i.checked&&{transform:"scale(1)",transition:r.transitions.create("transform",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.shortest})})});e.s(["f",0,function(e){let{checked:r=!1,classes:n={},fontSize:o}=e,a=(0,t.f)({},e,{checked:r});return(0,i.jsxs)(u,{className:n.root,ownerState:a,children:[(0,i.jsx)(d,{fontSize:o,className:n.background,ownerState:a}),(0,i.jsx)(l,{fontSize:o,className:n.dot,ownerState:a})]})}],727529)},984636,e=>{e.i(350461);var t=e.i(75907),r=e.i(460997),i=e.i(191788),n=e.i(889878),o=e.i(600961),a=e.i(632784),s=e.i(258559),u=e.i(75136),d=e.i(324382),l=e.i(166822),c=e.i(701806),m=e.i(391398);let f=["actions","children","className","defaultValue","name","onChange","value"],p=i.forwardRef(function(e,p){let{actions:g,children:h,className:y,defaultValue:b,name:_,onChange:v,value:$}=e,I=(0,r.f)(e,f),x=i.useRef(null),S=(e=>{let{classes:t,row:r,error:i}=e;return(0,o.f)({root:["root",r&&"row",i&&"error"]},s.f,t)})(e),[C,w]=(0,d.f)({controlled:$,default:b,name:"RadioGroup"});i.useImperativeHandle(g,()=>({focus:()=>{let e=x.current.querySelector("input:not(:disabled):checked");e||(e=x.current.querySelector("input:not(:disabled)")),e&&e.focus()}}),[]);let F=(0,u.f)(p,x),M=(0,c.f)(_),j=i.useMemo(()=>({name:M,onChange(e){w(e.target.value),v&&v(e,e.target.value)},value:C}),[M,v,w,C]);return(0,m.jsx)(l.f.Provider,{value:j,children:(0,m.jsx)(a.f,(0,t.f)({role:"radiogroup",ref:F,className:(0,n.f)(S.root,y)},I,{children:h}))})});e.s(["f",0,p])},166822,e=>{e.i(350461);let t=e.i(191788).createContext(void 0);e.s(["f",0,t])},258559,e=>{var t=e.i(713149),r=e.i(46739);(0,t.f)("MuiRadioGroup",["root","row","error"]),e.s(["f",0,function(e){return(0,r.f)("MuiRadioGroup",e)}])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},379741,e=>{var t=e.i(322135);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])}])})();