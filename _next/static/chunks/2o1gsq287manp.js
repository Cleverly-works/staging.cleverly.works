(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[544005,e=>{e.s(["f",0,(e,t)=>{let r={...e};return Object.entries(t).forEach(e=>{let[t,i]=e;void 0===r[t]&&(r[t]=i)}),r}])},441625,e=>{var t=e.i(159080);let r=t.f`
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
`,a=t.f`
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
`,o=t.f`
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
`,e.s(["H",0,s,"O",0,f,"F",0,h,"W",0,a,"a",0,r,"z",0,o,"B",0,n,"G",0,c,"_",0,m,"k",0,l,"p",0,p,"I",0,u,"c",0,i,"q",0,d])},128662,e=>{var t=e.i(391398),r=e.i(691567),i=e.i(280445),n=e.i(115871),a=e.i(813843),o=e.i(755548),s=e.i(587369);let l=(0,i.f)("img")({width:"300px",height:"250px"}),d={},u={},c={},m={},f={},p=e=>{let{imageSrc:r,sx:i=d,imageSx:p=u,title:h="",titleSx:b=c,subtitleFirstLine:g="",subtitleFirstLineSx:x=m,subtitleSecondLine:y="",subtitleSecondLineSx:v=f,buttonText:_,onAction:j=null}=e,I=(0,s.f)("(max-width: 400px)");return(0,t.jsxs)(a.f,{sx:{...i,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(l,{src:r,sx:{...p,width:I?"250px":"300px"}}),(0,t.jsx)(n.f,{typography:"h5",sx:{...b},children:h}),(0,t.jsxs)(a.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(n.f,{sx:{...x},children:g}),(0,t.jsx)(n.f,{sx:{...v},children:y})]}),_&&j&&(0,t.jsx)(o.f,{variant:"contained",color:"secondary",onClick:j,children:_})]})};p.propTypes={imageSrc:r.string,title:r.string,subtitleFirstLine:r.string,subtitleSecondLine:r.string,onAction:r.func,sx:r.object,imageSx:r.object,titleSx:r.object,subtitleFirstLineSx:r.object,subtitleSecondLineSx:r.object},e.s(["f",0,p])},890854,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(203828),n=e.i(691567),a=e.i(920235),o=e.i(738251),s=e.i(813843),l=e.i(115871),d=e.i(529292),u=e.i(280445),c=e.i(449587),m=e.i(317536),f=e.i(974261),p=e.i(332789),h=e.i(340569),b=e.i(749231),g=e.i(845825),x=e.i(587369);let y=()=>{},v=e=>{let{currentPage:r=1,totalCount:i=0,pageSize:n=50,onPageChange:a=y}=e,o=(0,x.f)("(max-width:400px)"),s=(0,x.f)("(max-width:500px)");return(0,t.jsx)(_,{mb:2,page:r,count:Math.ceil(i/n),onChange:(e,t)=>a(t),variant:"outlined",shape:"rounded",size:o?"small":"medium",hidePrevButton:1===r,hideNextButton:r===Math.ceil(i/n),siblingCount:+!s,renderItem:e=>(0,t.jsx)(g.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})};v.propTypes={currentPage:n.default.number,totalCount:n.default.number,pageSize:n.default.number,onPageChange:n.default.func};let _=(0,u.f)(b.f)(e=>{let{hidePrevButton:t,hideNextButton:r,theme:i}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px"},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:i.palette.white.main,backgroundColor:i.palette.secondary.main,...r?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}});var j=e.i(544005);let I={columns:[],history:!1,loading:!1,rows:[],noResultsMessage:"There are no results.",autoHeight:!0},F=(0,r.forwardRef)((e,n)=>{let a=(0,j.f)(e,I),{columns:o,history:d,initialSort:u,meta:b,refetch:g,paginationSize:x,containerHeight:y,containerMaxHeight:_,noResultsMessage:F,autoHeight:$,stateKey:w,onColumnOrderChange:k,onColumnWidthChange:M,slotProps:q}=a,A=(0,i.useRouter)(),{query:D={}}=A,{apiRef:T,displayColumns:O,persistColumnOrder:B,persistColumnWidth:P}=(0,p.f)({stateKey:w,columns:o});(0,h.f)(T,!a.disableColumnReorder);let G=(0,r.useMemo)(()=>({...q,baseTooltip:{disableTouchListener:!0,...q?.baseTooltip}}),[q]),U=(0,r.useCallback)((e,t,r)=>{k?.(e,t,r),B()},[k,B]),z=(0,r.useCallback)((e,t,r)=>{M?.(e,t,r),P(e)},[M,P]),[H,N]=(0,r.useState)(parseInt(D?.page,10)||1),[W,L]=(0,r.useState)(x||f.r.paginationSize),R=u;R||(R={item:"createdAt",order:"desc"});let[Y,E]=(0,r.useState)({item:R.item,order:R.order}),V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,{query:t={}}=A;if(e>1?t.page=e:delete t.page,!(Object.keys(t).length>0))return{};{let r=Object.keys(t).map(r=>"page"===r?`${r}=${e}`:`${r}=${t[r]}`).join("&");return`?${r}`}};return(0,r.useImperativeHandle)(n,()=>({currentPage:H,pageSize:W,sort:Y,resetPagination(){let e;E({item:R.item,order:R.order}),N(1),e=V(),A.push(e),L(x||f.r.paginationSize)}})),(0,t.jsxs)(S,{containerHeight:y,containerMaxHeight:_,children:[(0,t.jsx)(C,{hideFooter:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:$,sortingMode:"server",onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?E({item:o.find(e=>{let{field:r}=e;return r===t.field}).sortName||t.field||t.item||R.item,order:t.sort||t.order||R.order}):E({item:R.item,order:R.order}),g&&g()},pageSize:W,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(c.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(m.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(s.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(c.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(m.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(l.f,{children:F})}),noRowsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(l.f,{children:F})})},...a,apiRef:T,slotProps:G,columns:O,onColumnOrderChange:U,onColumnWidthChange:z}),b&&Math.ceil(b.aggregate.totalCount/W)>1&&(0,t.jsx)(v,{currentPage:H,totalCount:b.aggregate.totalCount,pageSize:W,onPageChange:e=>{let t=V(e);d&&A.push(t),N(e),!d&&g&&g()}})]})});F.propTypes={history:n.default.bool,initialSort:n.default.object,loading:n.default.bool,meta:n.default.object,refetch:n.default.func,paginationSize:n.default.number,noResultsMessage:n.default.string,columns:n.default.array,rows:n.default.array,autoHeight:n.default.bool};let S=(0,u.f)(o.f)(e=>{let{containerHeight:t,containerMaxHeight:r}=e;return{height:t,maxHeight:r,display:"flex",flexDirection:"column"}}),C=(0,u.f)(a.f)(e=>{let{theme:t,hideHeader:r,rows:i,loading:n,rowHeight:a,isPdf:o}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",...o&&{"@media print":{display:"block"}}},"& .MuiDataGrid-main":{...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-columnHeaders":{...r&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...r&&{marginTop:"0 !important"},...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-iconSeparator":{opacity:0},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-virtualScrollerContent":{...o&&{height:"initial !important",minHeight:"initial !important"}},"& .MuiDataGrid-virtualScrollerRenderZone":{...o&&{position:"relative"}},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-row > .MuiDataGrid-cell":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-columnHeaderCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row > .MuiDataGrid-cellCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,d._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,d._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,d._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,d._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["f",0,F],890854)},98762,e=>{var t=e.i(191788),r=e.i(949125),i=e.i(974261),n=e.i(491230);e.s(["f",0,e=>{let{filters:a,newFilters:o,initialSort:s}=e,l=(0,t.useRef)(void 0),[d,u]=(0,t.useState)({}),[c,m]=(0,t.useState)({}),f=s||{item:"createdAt",order:"desc"},p={[l.current?.sort.item||f.item]:f.inneritem?{[f.inneritem]:l.current?.sort.order||f.order}:l.current?.sort.order||f.order};return(0,t.useEffect)(()=>{let e=!(0,r.default)(d,a),t=!(0,r.default)(c,o);if(e&&(u(a),l?.current?.resetPagination()),t&&(m(o),l?.current?.resetPagination()),l?.current?.setSort&&!(e||t)){let e=l.current?.sort?.item&&l.current?.sort?.order?{item:l.current?.sort?.item,order:l.current?.sort?.order}:p;l.current.setSort(e)}},[a,o]),{initialData:{...a,newFilters:o?.length>0?o:void 0,limit:l.current?.pageSize==="Infinity"?null:parseInt(l.current?.pageSize,10)||i.r.paginationSize,offset:(l.current?.currentPage-1||0)*(l.current?.pageSize||i.r.paginationSize),orderBy:(0,n.f)(l.current?.sort?.item?.replace(/ORDER/i,l.current?.sort.order))||p},initialSort:s,ref:l}}])},637129,e=>{var t=e.i(191788),r=e.i(159080),i=e.i(776204),n=e.i(432171),a=e.i(498681);let o=r.f`
  query GetAccountUserFilters($accountUserId: Int!) {
    accountUser: Account_User_by_pk(id: $accountUserId) {
      filters
    }
  }
`,s=r.f`
  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {
    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {
      id
    }
  }
`;e.s(["f",0,function(e,r){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",{user:d}=(0,a.f)(),[u,c]=(0,t.useState)(()=>{try{switch(l){case"network":case"state":return r;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(e))||r}}catch(e){return r}});(0,n.t)(o,{variables:{accountUserId:d?.accountUserId},skip:"network"!==l,onCompleted:t=>{let{accountUser:i}=t;i&&c(i.filters[e]||r)}});let[m]=(0,i.f)(s);return[u,t=>{try{let r=t instanceof Function?t(u):t;switch(c(r),l){case"network":m({variables:{accountUserId:d?.accountUserId,filters:{[e]:r}}});break;case"sessionStorage":window.sessionStorage.setItem(e,JSON.stringify(r))}}catch(e){}}]}])},936333,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy")},952137,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"ModeEdit")},891723,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage")},16135,e=>{var t=e.i(800884);e.s(["f",()=>t.f])},246896,680596,751107,e=>{var t=e.i(382161);e.s(["f",()=>t.f],246896);var r=e.i(77052);e.s(["f",()=>r.f],680596);var i=e.i(185758);e.s(["f",()=>i.f],751107)},121432,e=>{var t=e.i(773831);e.s(["f",()=>t.f])},645085,e=>{var t=e.i(391398),r=e.i(293965),i=e.i(191788),n=e.i(362537),a=e.i(203828),o=e.i(432171),s=e.i(776204),l=e.i(322135),d=e.i(441625),u=e.i(477882),c=e.i(356119),m=e.i(886779),f=e.i(821627),p=e.i(121432),h=e.i(16135),b=e.i(936333),g=e.i(952137),x=e.i(890854),y=e.i(98762),v=e.i(128662),_=e.i(691567),j=e.i(605224),I=e.i(280445),F=e.i(164056),S=e.i(917563),C=e.i(706692),$=e.i(422411),w=e.i(637129),k=e.i(106997),M=e.i(722394);let q=e=>{let{initialFilters:r,filters:a,setFilters:s,open:l,onClose:u}=e,p=(0,C.f)("(max-width: 400px)"),[h,b]=(0,i.useState)(""),[g,x]=(0,i.useState)(a.createdAt?(0,n.default)(a.createdAt,"YYYY-MM-DD"):null),[y,v]=(0,w.f)(`form_data_${r.filterType}`,r),{data:_,loading:j}=(0,o.t)(d.a,{variables:{userId:r.userId??null,status:r?.status??null,name:a.name?a.name:null,q:""!==h?`%${h}%`:null,createdAt:r.createdAt||null,limit:50,offset:0}}),I=(0,i.useMemo)(()=>_?.Form||[],[_?.Form]),q=(0,i.useMemo)(()=>{if(!_||!_.Form)return[];let e=new Map;return _.Form.forEach(t=>{let r=t.FormUser;r&&!e.has(t.userId)&&e.set(t.userId,{id:t.userId,fullName:`${r.nameFirst} ${r.nameLast}`})}),Array.from(e.values())},[_]),{control:O,handleSubmit:B,register:P,reset:G,errors:U}=(0,$.G)({defaultValues:{name:y.name?{label:y.name,value:y.name}:null,status:void 0!==y.status&&null!==y.status?{label:!0===y.status?"Published":"Draft",value:y.status}:null,userId:y.userId&&y?.FormUser?{label:`${y?.FormUser?.nameFirst} ${y?.FormUser?.nameLast}`,value:y.userId}:null,q:y.q||"",createdAt:y.createdAt?(0,n.default)(y.createdAt).format("YYYY-MM-DD"):null}}),z=(0,i.useCallback)(e=>{x((0,n.default)(e,"YYYY-MM-DD"))},[]),H=(0,i.useCallback)(()=>{s(r),G(),u(),v({...r,filterType:r.filterType})},[r,s,v,u,G]);return(0,t.jsx)(D,{open:l,onClose:u,sx:A.modal,children:(0,t.jsx)("form",{onSubmit:B(e=>{let t={...a,...e,name:e?.name?.value??null,q:e?.name?.value?null:e.q,FormUser:I.find(t=>t.userId===e?.userId?.value)?.FormUser,status:e?.status!==null&&e?.status!==void 0?e?.status?.value:null,userId:e?.userId?.value??null,createdAt:e?.createdAt??null};s({...t,q:e.q?`%${e.q}%`:null}),v({...t,filterType:r.filterType}),G(),u()}),children:(0,t.jsxs)(T,{children:[(0,t.jsx)(c.f,{variant:"h6",sx:A.title,children:"Filters"}),(0,t.jsxs)(m.f,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:[(0,t.jsx)(F.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",value:h,inputRef:P,onChange:e=>b(e.target.value)}),(0,t.jsx)(S.f,{sx:A.inputContainer(p),children:(0,t.jsx)($.e,{name:"status",control:O,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(k.f,{value:r,onChange:(e,t)=>i(t),limitTags:6,label:"Select status",options:[{label:"Published",value:!0},{label:"Draft",value:!1}],getOptionLabel:e=>"string"==typeof e?e:e.label||"",isOptionEqualToValue:(e,t)=>e.value===t?.value,textFieldProps:{label:"Status",variant:"standard",color:"secondary",helperText:U.status?.message}})}})}),(0,t.jsx)(S.f,{sx:A.inputContainer(p),children:(0,t.jsx)($.e,{name:"name",control:O,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(k.f,{value:r,limitTags:6,onChange:(e,t)=>i(t),loading:j,getOptionLabel:e=>"string"==typeof e?e:e.label||"",options:(I||[]).map(e=>({label:e.name,value:e.name})),label:"Select name",isOptionEqualToValue:(e,t)=>e.value===t?.value,setSearch:b,textFieldProps:{color:"secondary",variant:"standard",label:"Name"}})}})}),(0,t.jsx)(S.f,{sx:A.inputContainer(p),children:(0,t.jsx)($.e,{name:"createdAt",control:O,render:e=>{let{onChange:r}=e;return(0,t.jsx)(M.f,{sx:{"&.MuiFormControl-root.MuiTextField-root":{width:"100%"}},value:g,format:"DD/MM/YYYY",onChange:e=>{if(e){let t=(0,n.default)(e).format("YYYY-MM-DD");z(e),r(t)}else r(null),z(null)},slotProps:{textField:{fullWidth:!0,label:"Date created",variant:"standard",color:"secondary"}}})}})}),(0,t.jsx)(S.f,{sx:A.inputContainer(p),children:(0,t.jsx)($.e,{name:"userId",control:O,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(k.f,{limitTags:6,color:"secondary",value:r,onChange:(e,t)=>i(t),getOptionLabel:e=>"string"==typeof e?e:e?.fullName||"",isOptionEqualToValue:(e,t)=>e.id===t?.id,options:q.map(e=>({label:e.fullName||`User ${e.id}`,value:e.id})),label:"Created by",textFieldProps:{label:"Created by",variant:"standard",color:"secondary",error:U.userId,helperText:U.userId?.message}})}})}),(0,t.jsxs)(m.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:A.bottomButtons,children:[(0,t.jsx)(f.f,{variant:"contained",color:"danger",onClick:()=>H(),children:"Cancel"}),(0,t.jsx)(f.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})]})})})},A={modal:{width:"100%",height:"100%"},inputContainer:e=>({width:e?"100%":"50%",...e?{padding:"10px 0px"}:{padding:"10px"}}),bottomButtons:{marginTop:"20px"},title:{fontWeight:600,marginBottom:"15px"}},D=(0,I.f)(j.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"})),T=(0,I.f)(u.f)(()=>({padding:"24px",maxWidth:"700px",maxHeight:"100vh",overflowY:"scroll"}));q.propTypes={initialFilters:_.default.object.isRequired,filters:_.default.object.isRequired,setFilters:_.default.func.isRequired,open:_.default.bool.isRequired,onClose:_.default.func.isRequired};var O=e.i(891723),B=e.i(246896),P=e.i(680596),G=e.i(751107);let U=e=>{let{open:r,onClose:i,onConfirm:n,status:a=!1}=e;return(0,t.jsx)(B.f,{open:r,onClose:i,PaperProps:{sx:{borderRadius:"8px",overflow:"hidden",width:"421px",maxWidth:"421px",height:"239px",display:"flex",alignItems:"center",justifyContent:"center",margin:0,position:"relative"}},slotProps:{backdrop:{sx:{backgroundColor:"rgba(0, 0, 0, 0.8)"}}},children:(0,t.jsxs)(S.f,{sx:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,t.jsx)(S.f,{sx:{position:"absolute",top:0,left:0,right:0,backgroundColor:"#2673CA",color:"#ffffff",textAlign:"center",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",height:"64px"},children:(0,t.jsx)(c.f,{align:"center",sx:{fontSize:"15px",justifyContent:"center"},children:a?"Are you sure you want to move this form to Draft?":"Are you sure you want to publish this form?"})}),(0,t.jsx)(G.f,{sx:{display:"flex",justifyContent:"center",padding:0,paddingTop:"74px",flexGrow:1},children:(0,t.jsx)(c.f,{align:"center",alignContent:"center",sx:{fontSize:"14px",maxWidth:"320px",lineHeight:1.57},children:a?(0,t.jsx)("div",{children:"It will no longer be available for selection in tasks and work orders. Existing work orders using this custom form will revert to the basic template."}):(0,t.jsx)("div",{children:"This will make it available for selection by users for tasks and work orders."})})}),(0,t.jsx)(P.f,{sx:{display:"flex",justifyContent:"center",padding:0,marginTop:"10px",paddingBottom:"10px"},children:(0,t.jsxs)(m.f,{direction:"row",justifyContent:"center",sx:{display:"flex",gap:"46px"},children:[(0,t.jsx)(f.f,{onClick:i,variant:"contained",size:"small",sx:{height:"36px",minHeight:"36px",minWidth:"100px",paddingInline:"24px",color:"#919191",backgroundColor:"transparent",justifyContent:"center",alignItems:"center",boxShadow:"none",border:"1px solid #9C9C9C",borderRadius:"4px",marginLeft:"0 !important","&:hover":{color:"#919191",backgroundColor:"transparent"}},children:"Cancel"}),(0,t.jsx)(f.f,{onClick:n,variant:"contained",size:"small",sx:{height:"36px",minHeight:"36px",minWidth:"100px",paddingInline:"24px",color:"#F5F5F5",backgroundColor:"#1565C0",justifyContent:"center",alignItems:"center",boxShadow:"none",borderRadius:"4px","&:hover":{color:"#F5F5F5",backgroundColor:"#1565C0"}},children:a?"Move to Draft":"Publish form"})]})})]})})};var z=e.i(889231),H=e.i(529069),N=e.i(65295);let W=["status","name","createdAt","userId","q"],L=e=>{let{initialFilters:r}=e,[_,j]=(0,i.useState)({...r}),[,I]=(0,w.f)(`form_data_${r?.filterType}`,r),[F,S]=(0,i.useState)(!1),[C,$]=(0,i.useState)(!1),[k,M]=(0,i.useState)(),[A]=(0,s.f)(d.c),[D]=(0,s.f)(d.q),T=(0,i.useMemo)(()=>({item:"createdAt",order:"desc"}),[]),{initialData:B,ref:P}=(0,y.f)({filters:_,initialSort:T}),{data:G,loading:L,refetch:R}=(0,o.t)(d.a,{variables:{...B,..._,userId:_.userId??B.userId,status:_.status??B.status,name:_.name??B.name,createdAt:_.createdAt??B.createdAt,limit:50}}),Y=(0,i.useCallback)(e=>{let t={..._};t[e]=null,"name"===e&&delete t.q,j(t),I({...t,filterType:r?.filterType})},[_,I,r?.filterType]),E=(0,i.useCallback)(()=>a.default.push("/dashboard/formBuilder/create"),[]),V=(0,i.useCallback)(e=>{a.default.push(`/dashboard/formBuilder/edit?id=${e.id}`)},[]),J=(0,i.useCallback)(e=>{a.default.push(`/dashboard/formBuilder/copy/${e.id}`)},[]),X=(0,i.useCallback)((e,t)=>{M(t),$(!0)},[]),K=(0,i.useCallback)(async()=>{if(k){let e=!k.status;if(e)try{await A({variables:{id:k.id,status:e}}),R()}catch(e){}else if(!e)try{await D({variables:{formId:k.id}}),R()}catch(e){}$(!1)}},[R,k,A,D]),Z=(0,i.useCallback)(()=>$(!1),[]),Q=(0,i.useCallback)(e=>{j(e)},[j]),ee=(0,i.useCallback)(e=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.f,{title:(0,t.jsx)("span",{style:{fontSize:"0.8rem"},children:"Edit"}),placement:"top",arrow:!0,enterDelay:500,children:(0,t.jsx)(p.f,{onClick:()=>V(e),children:(0,t.jsx)(g.default,{})})}),(0,t.jsx)(l.f,{title:(0,t.jsx)("span",{style:{fontSize:"0.8rem"},children:"Duplicate"}),placement:"top",arrow:!0,enterDelay:500,children:(0,t.jsx)(p.f,{onClick:()=>J(e),children:(0,t.jsx)(b.default,{})})})]}),[V,J]),et=[{flex:1,field:"status",headerName:"",sortable:!1,minWidth:50,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(H.f,{checked:!0===r.status,onChange:e=>X(e,r),color:"secondary"})}},{flex:1,field:"name",sortName:"name",headerName:"Form name",sortable:!0,minWidth:250},{flex:1,headerName:"Form description",field:"description",sortName:"description",minWidth:270,sortable:!0},{flex:1,field:"createdAt",sortName:"createdAt",headerName:"Date created",sortable:!0,minWidth:120,renderCell:e=>{let{row:t}=e;return(0,N.f)(String(t.createdAt))}},{flex:1,field:"userId",headerName:"Created by",sortName:"userId",sortable:!0,minWidth:130,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(z.f,{noWrap:!r.createdBy,color:"secondary",href:`/dashboard/users/view?id=${r.userId}`,children:r.createdBy})}},{flex:1,field:"published",headerName:"Status",sortable:!0,sortName:"status",minWidth:100},{flex:1,field:"actions",headerName:"Actions",sortable:!1,minWidth:60,renderCell:e=>{let{row:t}=e;return ee(t)}}],er=(0,i.useMemo)(()=>(G?.Form||[]).map(e=>({userId:e.FormUser?.id,createdBy:e.FormUser?`${e.FormUser?.nameFirst||""} ${e.FormUser?.nameLast||""}`.trim():"Unknown User",id:e.id,name:e.name,description:e.description||"No description",status:e.status,published:e.status?"Published":"Draft",createdAt:(0,n.default)(e.createdAt).format("YYYY-MM-DD"),actions:""})),[G?.Form]),ei=(0,i.useMemo)(()=>0===er.length&&(B?.q||B?.userId||B?.createdAt||B?.name||B?.status)?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No templates found",subtitleFirstLine:"It looks like you haven't created any form templates yet.",subtitleSecondLine:"Start by creating your first form to get things rolling!",buttonText:"Create new form",onAction:E},[er.length,B?.q,B?.userId,B?.createdAt,B?.name,B?.status,E]);return(0,t.jsxs)(t.Fragment,{children:[F&&(0,t.jsx)(q,{initialFilters:r,open:F,filters:_,setFilters:Q,onClose:()=>S(!1)}),(0,t.jsx)(U,{open:C,onClose:Z,onConfirm:K,status:k?.status}),(0,t.jsxs)(m.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,t.jsxs)(m.f,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(m.f,{direction:"row",spacing:2,children:[(0,t.jsx)(f.f,{variant:"contained",startIcon:(0,t.jsx)(O.default,{}),onClick:()=>S(!0),children:"Filters"}),(0,t.jsx)(m.f,{direction:"row",spacing:1,sx:{flexWrap:"wrap"},children:Object.keys(_).filter(e=>W.includes(e)).map(e=>{let r,i=null===(r=_[e])?null:({name:r?`Name is ${r}`:null,q:_.name?null:r?`Search is ${"string"==typeof r?r.replace(/%/g,""):r}`:null,status:void 0!==r?`Status is ${!0===r?"Published":"Draft"}`:null,createdAt:r?`Created at ${(0,n.default)(r).format("DD/MM/YYYY")}`:null,userId:_.FormUser?`Created by ${_.FormUser?.nameFirst} ${_.FormUser?.nameLast}`:null})[e]||null;return i&&(0,t.jsx)(h.f,{sx:{margin:"0px 0px 15px 0px",padding:"0.8vmin 0.5vmin"},label:i,onDelete:()=>Y(e)},e)})})]}),(0,t.jsx)(m.f,{direction:"row",spacing:2,children:(0,t.jsx)(f.f,{variant:"contained",color:"secondary",onClick:E,children:"Create new form"})})]}),(0,t.jsxs)(u.f,{sx:{padding:"16px 0px",height:"calc(100% - 52px)",overflow:"hidden"},children:[(0,t.jsx)(c.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Form Builder"}),er?.length?(0,t.jsx)(x.f,{ref:P,loading:L,columns:et,refetch:R,rows:er,columnVisibilityModel:{},meta:G?.meta,autoHeight:!1,containerHeight:"calc(100% - 52px)"}):!L&&(0,t.jsx)(v.f,{imageSrc:"/static/icons/no_locations_found.svg",...ei})]})]})]})},R={userId:null,q:null,status:null,name:null,createdAt:null,filterType:"formbuilder_list"},Y=()=>(0,t.jsx)(L,{initialFilters:R});Y.getLayout=function(e){return(0,t.jsx)(r.f,{children:e})},e.s(["default",0,Y],645085)}],567910,(e,t,r)=>{let i="/dashboard/formBuilder";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(645085)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},625106,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,r)=>{var i=e.r(933571),n=e.r(729549),a=e.r(630357);function o(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new i;++t<r;)this.add(e[t])}o.prototype.add=o.prototype.push=n,o.prototype.has=a,t.exports=o},278166,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length,n=0,a=[];++r<i;){var o=e[r];t(o,r,e)&&(a[n++]=o)}return a}},576723,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=t.length,n=e.length;++r<i;)e[n+r]=t[r];return e}},297560,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}},538916,(e,t,r)=>{var i=e.r(576723),n=e.r(448684);t.exports=function(e,t,r){var a=t(e);return n(e)?a:i(a,r(e))}},190835,(e,t,r)=>{var i=e.r(858056),n=e.r(432836);t.exports=function e(t,r,a,o,s){return t===r||(null!=t&&null!=r&&(n(t)||n(r))?i(t,r,a,o,e,s):t!=t&&r!=r)}},858056,(e,t,r)=>{var i=e.r(698620),n=e.r(536712),a=e.r(317744),o=e.r(804191),s=e.r(268829),l=e.r(448684),d=e.r(613272),u=e.r(75299),c="[object Arguments]",m="[object Array]",f="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,h,b,g){var x=l(e),y=l(t),v=x?m:s(e),_=y?m:s(t);v=v==c?f:v,_=_==c?f:_;var j=v==f,I=_==f,F=v==_;if(F&&d(e)){if(!d(t))return!1;x=!0,j=!1}if(F&&!j)return g||(g=new i),x||u(e)?n(e,t,r,h,b,g):a(e,t,v,r,h,b,g);if(!(1&r)){var S=j&&p.call(e,"__wrapped__"),C=I&&p.call(t,"__wrapped__");if(S||C){var $=S?e.value():e,w=C?t.value():t;return g||(g=new i),b($,w,r,h,g)}}return!!F&&(g||(g=new i),o(e,t,r,h,b,g))}},758629,(e,t,r)=>{var i=e.r(734274),n=e.r(517059),a=Object.prototype.hasOwnProperty;t.exports=function(e){if(!i(e))return n(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},33483,(e,t,r)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,r)=>{var i=e.r(650119),n=e.r(297560),a=e.r(33483);t.exports=function(e,t,r,o,s,l){var d=1&r,u=e.length,c=t.length;if(u!=c&&!(d&&c>u))return!1;var m=l.get(e),f=l.get(t);if(m&&f)return m==t&&f==e;var p=-1,h=!0,b=2&r?new i:void 0;for(l.set(e,t),l.set(t,e);++p<u;){var g=e[p],x=t[p];if(o)var y=d?o(x,g,p,t,e,l):o(g,x,p,e,t,l);if(void 0!==y){if(y)continue;h=!1;break}if(b){if(!n(t,function(e,t){if(!a(b,t)&&(g===e||s(g,e,r,o,l)))return b.push(t)})){h=!1;break}}else if(!(g===x||s(g,x,r,o,l))){h=!1;break}}return l.delete(e),l.delete(t),h}},317744,(e,t,r)=>{var i=e.r(889239),n=e.r(84742),a=e.r(198373),o=e.r(536712),s=e.r(692152),l=e.r(231853),d=i?i.prototype:void 0,u=d?d.valueOf:void 0;t.exports=function(e,t,r,i,d,c,m){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!c(new n(e),new n(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var f=s;case"[object Set]":var p=1&i;if(f||(f=l),e.size!=t.size&&!p)break;var h=m.get(e);if(h)return h==t;i|=2,m.set(e,t);var b=o(f(e),f(t),i,d,c,m);return m.delete(e),b;case"[object Symbol]":if(u)return u.call(e)==u.call(t)}return!1}},804191,(e,t,r)=>{var i=e.r(577256),n=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,a,o,s){var l=1&r,d=i(e),u=d.length;if(u!=i(t).length&&!l)return!1;for(var c=u;c--;){var m=d[c];if(!(l?m in t:n.call(t,m)))return!1}var f=s.get(e),p=s.get(t);if(f&&p)return f==t&&p==e;var h=!0;s.set(e,t),s.set(t,e);for(var b=l;++c<u;){var g=e[m=d[c]],x=t[m];if(a)var y=l?a(x,g,m,t,e,s):a(g,x,m,e,t,s);if(!(void 0===y?g===x||o(g,x,r,a,s):y)){h=!1;break}b||(b="constructor"==m)}if(h&&!b){var v=e.constructor,_=t.constructor;v!=_&&"constructor"in e&&"constructor"in t&&!("function"==typeof v&&v instanceof v&&"function"==typeof _&&_ instanceof _)&&(h=!1)}return s.delete(e),s.delete(t),h}},577256,(e,t,r)=>{var i=e.r(538916),n=e.r(40811),a=e.r(622335);t.exports=function(e){return i(e,a,n)}},40811,(e,t,r)=>{var i=e.r(856408),n=e.r(1107),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;t.exports=o?function(e){return null==e?[]:i(o(e=Object(e)),function(t){return a.call(e,t)})}:n},268829,(e,t,r)=>{var i=e.r(625106),n=e.r(696138),a=e.r(441298),o=e.r(340682),s=e.r(278166),l=e.r(912904),d=e.r(742186),u="[object Map]",c="[object Promise]",m="[object Set]",f="[object WeakMap]",p="[object DataView]",h=d(i),b=d(n),g=d(a),x=d(o),y=d(s),v=l;(i&&v(new i(new ArrayBuffer(1)))!=p||n&&v(new n)!=u||a&&v(a.resolve())!=c||o&&v(new o)!=m||s&&v(new s)!=f)&&(v=function(e){var t=l(e),r="[object Object]"==t?e.constructor:void 0,i=r?d(r):"";if(i)switch(i){case h:return p;case b:return u;case g:return c;case x:return m;case y:return f}return t}),t.exports=v},692152,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,i){r[++t]=[i,e]}),r}},517059,(e,t,r)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,r)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},949125,(e,t,r)=>{var i=e.r(190835);t.exports=function(e,t){return i(e,t)}},622335,(e,t,r)=>{var i=e.r(419188),n=e.r(758629),a=e.r(379858);t.exports=function(e){return a(e)?i(e):n(e)}},1107,(e,t,r)=>{t.exports=function(){return[]}}]);