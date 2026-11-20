(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,r=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),i=e=>{let t=e?.address||e;return t&&r(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,r,"Q",0,i],964919);let n=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},a=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let r=n(t[0]),i=n(t[1]);return null==i||null==r||i<-90||i>90||r<-180||r>180?null:{lat:i,lng:r}},o=e=>a(e?.geo),s=async e=>{let t=i(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var r=await e.json();if(!r)return null;let i=r.coordinates?.lat??r.lat;return o({geo:{coordinates:[r.coordinates?.lng??r.lng,i]}})}catch{return null}},d=async(e,t)=>{let r=o(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[],a=o({geo:{coordinates:[i,n]}});return a||s(e)};e.s(["g",0,a,"Z",0,o,"t",0,d,"l",0,(e,t)=>{let r=o(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[];return o({geo:{coordinates:[i,n]}})},"a",0,n],842088)},284661,e=>{var t=e.i(159080);let r=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,r])},239964,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(691567),n=e.i(773831),a=e.i(33670),o=e.i(901004),s=e.i(509790),d=e.i(692113),l=e.i(137995),u=e.i(817581),c=e.i(420),p=e.i(870307),f=e.i(407329),m=e.i(390536),g=e.i(978319),h=e.i(376733),y=e.i(13558),b=e.i(562673),x=e.i(339909),v=e.i(89029),j=e.i(129503),C=e.i(213419),_=e.i(12028),w=e.i(813843),S=e.i(115871);let A={add:(0,t.jsx)(u.default,{}),archive:(0,t.jsx)(d.default,{}),avatar:(0,t.jsx)(_.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(p.default,{}),delete:(0,t.jsx)(g.default,{}),description:(0,t.jsx)(f.default,{}),download:(0,t.jsx)(m.default,{}),info:(0,t.jsx)(y.default,{}),edit:(0,t.jsx)(h.default,{}),location:(0,t.jsx)(v.default,{}),unarchive:(0,t.jsx)(l.default,{}),uploadFile:(0,t.jsx)(b.default,{}),receipt:(0,t.jsx)(x.default,{}),visibility:(0,t.jsx)(C.default,{})},M={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(j.default,{}),description:(0,t.jsx)(f.default,{})},k=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],$=e=>{let{actionsData:i=k,icon:s="default",row:d,disabled:l=!1}=e,[u,c]=(0,r.useState)(null),p=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:l,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:M[s]}),(0,t.jsx)(a.f,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:!!u,onClose:p,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:i(d).map((e,r)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),p()},sx:{pl:3,pr:4},children:(0,t.jsxs)(w.f,{direction:"row",alignItems:"center",spacing:2,children:[A?.[e.icon]||null,(0,t.jsx)(S.f,{children:e.tooltip})]})},r))})]})};$.propTypes={actionsData:i.default.func,icon:i.default.oneOf(["default","description"]),row:i.default.any.isRequired,disabled:i.default.bool},e.s(["f",0,$])},892904,e=>{var t=e.i(159080);let r=t.f`
  fragment JobFields on Job {
    access
    issueReportedDescription
    adminId
    costCategory
    createdAt
    description
    id
    reference
    scheduledAt
    status
    timing
    timingEnd
    timingNormalHours
    timingStart
    title
    type
    siteVisitStart
    siteVisitEnd
    siteVisitWeekends
    number
    quoted
    timingStatus
    statusData
    correctDuration
    correctStart
    correctEnd
    onSiteTimingEnd
    jobReportTimingEnd
    quoteReturnedTimingEnd
  }
`,i=t.f`
  fragment JobQuoteFields on Job {
    quoted
    quoteNumber
    quoteDue
    quoteDueSupplier
  }
`,n=t.f`
  fragment JobAdminFinanceFields on Job {
    meta
    pricing
    supplierPricing
    supplierLabourAmount
    supplierMaterialsAmount
    amount
    quoteCharge
  }
`,a=t.f`
  fragment JobCustomerFinanceFields on Job {
    meta: clientMeta
    pricing
    amount
    quoteCharge
  }
`,o=t.f`
  fragment JobSupplierFinanceFields on Job {
    meta: clientMeta
    supplierPricing
    supplierLabourAmount
    supplierMaterialsAmount
  }
`,s=t.f`
  fragment JobAdminFields on Job {
    supplierId
    supplierUserId
  }
`,d=t.f`
  fragment JobSupplierFields on Job {
    supplierId
    supplierUserId
  }
`;e.s(["O",0,s,"U",0,n,"H",0,a,"r",0,r,"Z",0,i,"q",0,d,"C",0,o])},115126,e=>{var t=e.i(391398),r=e.i(420),i=e.i(202246),n=e.i(738251),a=e.i(755548),o=e.i(551918),s=e.i(813843),d=e.i(566118),l=e.i(687722),u=e.i(145018),u=u,c=e.i(460997),p=e.i(75907),f=e.i(191788),m=e.i(889878),g=e.i(600961),h=e.i(396851),y=e.i(395724),b=e.i(631269),x=e.i(425577),v=e.i(432484),j=e.i(713149),C=e.i(46739);function _(e){return(0,C.f)("MuiStepContent",e)}let w=(0,j.f)("MuiStepContent",["root","last","transition"]),S=["children","className","TransitionComponent","transitionDuration","TransitionProps"],A=(0,h.f)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.last&&t.last]}})(e=>{let{ownerState:t,theme:r}=e;return(0,p.f)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:r.vars?`1px solid ${r.vars.palette.StepContent.border}`:`1px solid ${"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}`},t.last&&{borderLeft:"none"})}),M=(0,h.f)(b.f,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),k=f.forwardRef(function(e,r){let i=(0,y.f)({props:e,name:"MuiStepContent"}),{children:n,className:a,TransitionComponent:o=b.f,transitionDuration:s="auto",TransitionProps:d}=i,l=(0,c.f)(i,S),{orientation:u}=f.useContext(x.f),{active:h,last:j,expanded:C}=f.useContext(v.f),w=(0,p.f)({},i,{last:j}),k=(e=>{let{classes:t,last:r}=e;return(0,g.f)({root:["root",r&&"last"],transition:["transition"]},_,t)})(w),$=s;return"auto"!==s||o.muiSupportAuto||($=void 0),(0,t.jsx)(A,(0,p.f)({className:(0,m.f)(k.root,a),ref:r,ownerState:w},l,{children:(0,t.jsx)(M,(0,p.f)({as:o,in:h||C,className:k.transition,ownerState:w,timeout:$,unmountOnExit:!0},d,{children:n}))}))});var $=e.i(280875),E=e.i(860387),E=E,L=e.i(115871),O=e.i(889231),I=e.i(280445),D=e.i(362537);let P=(0,I.f)(l.f)(e=>{let{theme:t}=e;return{[`&.${u.U.active}`]:{[`& .${u.U.line}`]:{borderColor:t.palette.primary.main}},[`&.${u.U.completed}`]:{[`& .${u.U.line}`]:{borderColor:t.palette.primary.main}},[`& .${u.U.line}`]:{borderColor:t.palette.primary.main,borderLeftWidth:4,borderRadius:1,marginLeft:"-2px",minHeight:"15px"}}}),R=(0,I.f)(k)(e=>{let{theme:t}=e;return{[`&.${w.root}`]:{paddingLeft:"38px",paddingRight:"5px",borderColor:t.palette.primary.main,borderLeftWidth:4,marginLeft:"10px"}}}),B=(0,I.f)($.f)(()=>({[`&.${E.U.root}`]:{padding:0},[`& .${E.U.labelContainer}`]:{color:"inherit"},[`& .${E.U.label}`]:{display:"flex",alignItems:"center",color:"inherit"}}));e.s(["f",0,e=>{let{steps:l,summary:u,enableBorder:c=!1}=e;return(0,t.jsxs)(n.f,{children:[(0,t.jsx)(o.f,{orientation:"vertical",connector:(0,t.jsx)(P,{}),children:l.filter(e=>{let{active:t}=e;return void 0===t||t}).map((e,o)=>{let{id:u,label:p,info:f,date:m,content:g,actions:h}=e,y=!!m,b=g?.filter(e=>{let{active:t,data:r}=e;return!!t&&!!r})||[],x=h?.filter(e=>{let{active:t}=e;return!!t})||[],v=y?(0,t.jsx)(r.default,{color:"primary"}):(0,t.jsx)(i.default,{color:"primary"});return(0,t.jsxs)(d.f,{completed:y,expanded:!0,children:[(0,t.jsxs)(B,{icon:v,children:[(0,t.jsx)(L.f,{sx:{fontSize:"13px",fontWeight:600,ml:"20px"},children:p}),(0,t.jsx)(L.f,{sx:{fontSize:"10px",fontWeight:400,ml:"auto",mr:"5px",opacity:.6},children:m?(0,D.default)(m).format("D MMM YYYY HH:mm"):""})]}),(0,t.jsx)(R,{children:(0,t.jsxs)(n.f,{sx:c&&o!==l.length-1?{pb:"15px",borderBottom:"1px solid #E0E0E0"}:void 0,children:[(0,t.jsx)(n.f,{children:y||b?.length>0?b.map(e=>"function"==typeof e.data?e.data():(0,t.jsx)(L.f,{sx:{fontSize:"10px",pl:"4px"},children:e.data})):(0,t.jsx)(L.f,{sx:{fontSize:"10px"},children:f})}),x?.length>0&&(0,t.jsx)(s.f,{mt:.5,spacing:.5,children:x.map(e=>"button"!==e.type?null:(0,t.jsx)(n.f,{children:(0,t.jsx)(a.f,{color:e.context,variant:"contained",size:"small",onClick:e.handleClick,children:e.content})}))})]})})]},`${p}-${u}`)})}),u&&u?.length>0&&(0,t.jsx)(n.f,{mt:2,children:u.map(e=>{let{label:r,value:i,link:n}=e;return(0,t.jsxs)(L.f,{mt:.75,children:[r,":"," ",n?(0,t.jsx)(O.f,{color:"secondary",underline:"none",href:n,children:i}):i]},r)})})]})}],115126)},995197,e=>{var t=e.i(391398),r=e.i(280445),i=e.i(738251);let n={},a={},o=(0,r.f)(i.f)(()=>({"& .MuiTabs-root":{}}));e.s(["f",0,e=>{let{children:r,value:s,index:d,boxProps:l=n,boxSx:u=a,...c}=e;return(0,t.jsx)(o,{role:"tabpanel",hidden:s!==d,id:`simple-tabpanel-${d}`,"aria-labelledby":`simple-tab-${d}`,...c,children:s===d&&(0,t.jsx)(i.f,{...l,sx:{padding:"25px 0",...u},children:r})})}])},890854,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(203828),n=e.i(691567),a=e.i(920235),o=e.i(738251),s=e.i(813843),d=e.i(115871),l=e.i(529292),u=e.i(280445),c=e.i(449587),p=e.i(317536),f=e.i(974261),m=e.i(332789),g=e.i(340569),h=e.i(749231),y=e.i(845825),b=e.i(587369);let x=()=>{},v=e=>{let{currentPage:r=1,totalCount:i=0,pageSize:n=50,onPageChange:a=x}=e,o=(0,b.f)("(max-width:400px)"),s=(0,b.f)("(max-width:500px)");return(0,t.jsx)(j,{mb:2,page:r,count:Math.ceil(i/n),onChange:(e,t)=>a(t),variant:"outlined",shape:"rounded",size:o?"small":"medium",hidePrevButton:1===r,hideNextButton:r===Math.ceil(i/n),siblingCount:+!s,renderItem:e=>(0,t.jsx)(y.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})};v.propTypes={currentPage:n.default.number,totalCount:n.default.number,pageSize:n.default.number,onPageChange:n.default.func};let j=(0,u.f)(h.f)(e=>{let{hidePrevButton:t,hideNextButton:r,theme:i}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px"},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:i.palette.white.main,backgroundColor:i.palette.secondary.main,...r?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}});var C=e.i(544005);let _={columns:[],history:!1,loading:!1,rows:[],noResultsMessage:"There are no results.",autoHeight:!0},w=(0,r.forwardRef)((e,n)=>{let a=(0,C.f)(e,_),{columns:o,history:l,initialSort:u,meta:h,refetch:y,paginationSize:b,containerHeight:x,containerMaxHeight:j,noResultsMessage:w,autoHeight:M,stateKey:k,onColumnOrderChange:$,onColumnWidthChange:E,slotProps:L}=a,O=(0,i.useRouter)(),{query:I={}}=O,{apiRef:D,displayColumns:P,persistColumnOrder:R,persistColumnWidth:B}=(0,m.f)({stateKey:k,columns:o});(0,g.f)(D,!a.disableColumnReorder);let F=(0,r.useMemo)(()=>({...L,baseTooltip:{disableTouchListener:!0,...L?.baseTooltip}}),[L]),H=(0,r.useCallback)((e,t,r)=>{$?.(e,t,r),R()},[$,R]),T=(0,r.useCallback)((e,t,r)=>{E?.(e,t,r),B(e)},[E,B]),[G,N]=(0,r.useState)(parseInt(I?.page,10)||1),[z,U]=(0,r.useState)(b||f.r.paginationSize),q=u;q||(q={item:"createdAt",order:"desc"});let[W,J]=(0,r.useState)({item:q.item,order:q.order}),V=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,{query:t={}}=O;if(e>1?t.page=e:delete t.page,!(Object.keys(t).length>0))return{};{let r=Object.keys(t).map(r=>"page"===r?`${r}=${e}`:`${r}=${t[r]}`).join("&");return`?${r}`}};return(0,r.useImperativeHandle)(n,()=>({currentPage:G,pageSize:z,sort:W,resetPagination(){let e;J({item:q.item,order:q.order}),N(1),e=V(),O.push(e),U(b||f.r.paginationSize)}})),(0,t.jsxs)(S,{containerHeight:x,containerMaxHeight:j,children:[(0,t.jsx)(A,{hideFooter:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:M,sortingMode:"server",onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?J({item:o.find(e=>{let{field:r}=e;return r===t.field}).sortName||t.field||t.item||q.item,order:t.sort||t.order||q.order}):J({item:q.item,order:q.order}),y&&y()},pageSize:z,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(c.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(p.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(s.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(c.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(p.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:w})}),noRowsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:w})})},...a,apiRef:D,slotProps:F,columns:P,onColumnOrderChange:H,onColumnWidthChange:T}),h&&Math.ceil(h.aggregate.totalCount/z)>1&&(0,t.jsx)(v,{currentPage:G,totalCount:h.aggregate.totalCount,pageSize:z,onPageChange:e=>{let t=V(e);l&&O.push(t),N(e),!l&&y&&y()}})]})});w.propTypes={history:n.default.bool,initialSort:n.default.object,loading:n.default.bool,meta:n.default.object,refetch:n.default.func,paginationSize:n.default.number,noResultsMessage:n.default.string,columns:n.default.array,rows:n.default.array,autoHeight:n.default.bool};let S=(0,u.f)(o.f)(e=>{let{containerHeight:t,containerMaxHeight:r}=e;return{height:t,maxHeight:r,display:"flex",flexDirection:"column"}}),A=(0,u.f)(a.f)(e=>{let{theme:t,hideHeader:r,rows:i,loading:n,rowHeight:a,isPdf:o}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",...o&&{"@media print":{display:"block"}}},"& .MuiDataGrid-main":{...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-columnHeaders":{...r&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...r&&{marginTop:"0 !important"},...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-iconSeparator":{opacity:0},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-virtualScrollerContent":{...o&&{height:"initial !important",minHeight:"initial !important"}},"& .MuiDataGrid-virtualScrollerRenderZone":{...o&&{position:"relative"}},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-row > .MuiDataGrid-cell":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-columnHeaderCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row > .MuiDataGrid-cellCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["f",0,w],890854)},98762,e=>{var t=e.i(191788),r=e.i(949125),i=e.i(974261),n=e.i(491230);e.s(["f",0,e=>{let{filters:a,newFilters:o,initialSort:s}=e,d=(0,t.useRef)(void 0),[l,u]=(0,t.useState)({}),[c,p]=(0,t.useState)({}),f=s||{item:"createdAt",order:"desc"},m={[d.current?.sort.item||f.item]:f.inneritem?{[f.inneritem]:d.current?.sort.order||f.order}:d.current?.sort.order||f.order};return(0,t.useEffect)(()=>{let e=!(0,r.default)(l,a),t=!(0,r.default)(c,o);if(e&&(u(a),d?.current?.resetPagination()),t&&(p(o),d?.current?.resetPagination()),d?.current?.setSort&&!(e||t)){let e=d.current?.sort?.item&&d.current?.sort?.order?{item:d.current?.sort?.item,order:d.current?.sort?.order}:m;d.current.setSort(e)}},[a,o]),{initialData:{...a,newFilters:o?.length>0?o:void 0,limit:d.current?.pageSize==="Infinity"?null:parseInt(d.current?.pageSize,10)||i.r.paginationSize,offset:(d.current?.currentPage-1||0)*(d.current?.pageSize||i.r.paginationSize),orderBy:(0,n.f)(d.current?.sort?.item?.replace(/ORDER/i,d.current?.sort.order))||m},initialSort:s,ref:d}}])},921451,e=>{e.s(["e",0,e=>parseInt(e).toLocaleString("en-GB",{minimumIntegerDigits:2,useGrouping:!1}),"U",0,(e,t)=>{let r=Math.pow(10,t);return Math.round(e*r)/r}])},536422,e=>{e.s(["f",0,e=>"string"==typeof e&&""!==e.trim()&&e.toLowerCase().replace("gb","").length>=9])},362407,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(776204),n=e.i(432171),a=e.i(990071),o=e.i(410355),s=e.i(74633),d=e.i(411331),l=e.i(755548),u=e.i(813843),c=e.i(4142),p=e.i(115871),f=e.i(497844);let m=e=>{let{addresses:r=[],entity:n,entityId:m,loading:g,onSelected:h,refetch:y,selectable:b=!1,selected:x,type:v,editable:j}=e,C=(0,d.f)(),[_]=(0,i.f)(a.g,{onCompleted:()=>{C.close(),y()}}),[w]=(0,i.f)(a.h,{onCompleted:()=>{C.close(),y()}}),S=async e=>{e.countryId||(e.countryId=1);let t=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:e})}).then(e=>e.json());e.id?e.meta={invoicingEmail:e.invoicingEmail,...e.meta}:e.meta={invoicingEmail:e.invoicingEmail},delete e.invoicingEmail;let r=t?.coordinates||null;if(r?.lat&&r?.lng&&(e.geo={type:"Point",coordinates:[r.lng,r.lat]}),e.id){let t=parseInt(e.id);await w({variables:{id:t,changes:e}})}else e.Address_Entities={data:{entity:n,entityId:m,status:"active"}},await _({variables:{objects:[e]}})},A=e=>{let i=r.find(t=>t.id===e.id),n=i?i.address:null,a=n&&{id:n.id,invoicingEmail:n.meta?.invoicingEmail,invoicingEntity:n.invoicingEntity,name:n.name,addressLine1:n.addressLine1,addressLine2:n.addressLine2,addressLine3:n.addressLine3,city:n.city,postCode:n.postCode,county:n.county,countryId:n.country?.id};C.show({content:(0,t.jsx)(o.f,{defaultValues:a,onSubmit:S,type:v}),title:n?"Edit address":"invoice"===v?"Add new invoice address":"Add new address",submit:!1})},M=[{field:"id",headerName:"ID",sortable:!1},{field:"select",headerName:"Select",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(c.f,{checked:Number(x)===r.select,onChange:e=>{h(r.select,e.target.checked)},size:"small",color:"secondary"})},maxWidth:65},{field:"address",headerName:"Address",flex:1,sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsxs)(u.f,{children:[(0,t.jsx)(p.f,{children:r.address?.name}),(0,t.jsx)(p.f,{children:r.address.country?.name||""}),(0,t.jsx)(p.f,{children:r.address.addressLine1}),(0,t.jsx)(p.f,{children:r.address.city})]})}},{field:"email",headerName:"Email",sortable:!1},{field:"actions",headerName:"Actions",sortable:!1,renderCell(e){let{row:r}=e;return(0,t.jsx)(f.f,{actions:[{icon:"edit",tooltip:"Edit",onClick:()=>{A(r)}}]})}}],k=r?.map(e=>{let t=e.address;return{id:e.id,select:t.id,address:t,email:t.meta?.invoicingEmail||"-",actions:""}})||[];return(0,t.jsxs)(t.Fragment,{children:[j&&(0,t.jsx)(u.f,{marginBottom:3,justifyContent:"flex-start",flexDirection:"row",children:(0,t.jsx)(l.f,{variant:"contained",color:"secondary",onClick:A,children:"Add new address"})}),(0,t.jsx)(s.s,{columns:M,rowHeight:100,columnVisibilityModel:{id:!1,select:b&&!!j,address:!0,email:"invoice"===v,actions:!!j},loading:g,paginationSize:50,rows:k,autoHeight:!0})]})};var g=e.i(795617),h=e.i(594301),y=e.i(936641),b=e.i(652148);let x={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{addressId:o,entity:s,entityId:d,id:u,onSubmit:c,type:f,showAccessInformation:v=!1,accessInformation:j}=e,[C,_]=(0,r.useState)(o||null),[w,S]=(0,r.useState)(!1),[A,M]=(0,r.useState)(!1),[k,$]=(0,r.useState)(!1),[E,L]=(0,r.useState)(j??""),O=(0,g.N)(f),I=(0,g.p)(s),{hasRole:D}=(0,h.f)(),P=D("customer"),{loading:R,data:{item:B}={item:null},refetch:F}=(0,n.t)(I,{variables:{id:d}}),[H]=(0,i.f)(a.H,{onCompleted:e=>{c&&c(e)}}),[T]=(0,i.f)(a.I,{onCompleted:e=>{c&&c(e)}}),G=[];if(B){B.addresses&&G.push(...B.addresses);let e=B.accounts?.find(e=>"primary"===e.linkType)?.account;e?.addresses&&e?.addresses.forEach(e=>{G.find(t=>t.address.id===e.address.id)||G.push(e)})}let N=async(e,t)=>{M(!1),S(!1),t?(_(parseInt(e)),await z(parseInt(e))):(_(null),S(!0))},z=async e=>{if(C!==e){let t=null,r=null;if(G.forEach(i=>{i.address.id===e&&(t=i.entity,r=i.id)}),r&&t===s){let e={id:parseInt(r),changes:{[f]:!0},whereOld:{entityId:{_eq:d},[f]:{_eq:!0}},changesOld:{[f]:!1}};await T({variables:e}),M(!0)}else{let t=[{addressId:parseInt(e),entity:s,entityId:d,status:"active",[f]:!0}];await H({variables:{objects:t,whereOld:{entityId:{_eq:d},[f]:{_eq:!0}},changesOld:{[f]:!1}}}),M(!0)}}else c&&c(null)},U=async()=>{$(!1),await c?.({access:E}),$(!0)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.f,{sx:x,children:O}),A&&(0,t.jsx)(y.f,{severity:"success",sx:{marginBottom:3},children:"Selection saved."}),w&&(0,t.jsx)(y.f,{severity:"info",sx:{marginBottom:3},children:"You should select at least one address."}),k&&(0,t.jsx)(y.f,{severity:"success",sx:{marginBottom:3},children:"Access information saved."}),(0,t.jsx)(m,{addresses:G,entity:s,entityId:d,id:u,loading:R,refetch:F,selectable:!0,selected:C,type:f,onSelected:N,editable:!P}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",label:"Access information",value:E,onChange:e=>L(e.target.value),sx:{mt:2}}),(0,t.jsx)(l.f,{variant:"contained",color:"secondary",sx:{mt:2},onClick:U,children:"Save"})]})]})}],362407)},795617,e=>{var t=e.i(990071),r=e.i(842088);let i=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:r,type:i="inline",hideinvoicingEntity:n=!1}=e;if(!t)return"";let a="",o=r?.name?` (${r.name})`:"";return"stacked"===i?(a+=!n&&t.invoicingEntity?t.invoicingEntity+"\n":"",a+=t.addressLine1?t.addressLine1+o+"\n":o,a+=t.addressLine2?t.addressLine2+"\n":"",a+=t.addressLine3?t.addressLine3+"\n":"",a+=t.city?t.city+"\n":"",a+=t.county?t.county+"\n":""):(a+=!n&&t.invoicingEntity?t.invoicingEntity+" ":"",a+=t.addressLine1?t.addressLine1+o+" ":o,a+=t.addressLine2?t.addressLine2+" ":"",a+=t.addressLine3?t.addressLine3+" ":"",a+=t.city?t.city+" ":"",a+=t.county?t.county+" ":""),(a+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,i,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let r=null;switch(e){case"Account":r=t.A;break;case"Location":r=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!r)throw Error("Query cannot be null");return r},"u",0,(e,t)=>{let r=null;return"customer"===t?r=i(e.location,"invoice")||i(e.customer,"invoice")||i(e.location,"registered"):"supplier"===t&&(r=i(e.supplier,"invoice")||i(e.supplier,"registered")),r},"D",0,e=>{let t=(0,r.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let r=t.f`
  fragment AddressFields on Address {
    id
    invoicingEntity
    name
    addressLine1
    addressLine2
    addressLine3
    postCode
    city
    county
    geo
    createdAt
    meta
  }
`,i=t.f`
  fragment AddressEntityFields on Address_Entity {
    id
    entity
    entityId
    status
    registered
    operating
    trading
    invoice
    createdAt
  }
`,n=t.f`
  query GetAddresses($id: Int!) {
    item: Account_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Account" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
    }
  }
  ${r}
  ${i}
`,a=t.f`
  query GetAddresses($id: Int!) {
    item: Location_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
      accounts: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          addresses: Addresses(where: { entity: { _eq: "Account" } }) {
            ...AddressEntityFields
            address: Address {
              ...AddressFields
            }
          }
        }
      }
    }
  }
  ${r}
  ${i}
`,o=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${r}
`,s=t.f`
  mutation UpdateAddress($id: Int!, $changes: Address_set_input!) {
    update_Address_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,d=t.f`
  mutation AddUpdateAddress_Entity(
    $objects: [Address_Entity_insert_input!]!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    insert_Address_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,l=t.f`
  mutation UpdateAddress_Entities(
    $id: Int!
    $changes: Address_Entity_set_input!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    updateNew: update_Address_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["S",0,i,"a",0,r,"g",0,o,"H",0,d,"A",0,n,"R",0,a,"h",0,s,"I",0,l])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=r.currencySymbol??"£",i="number"==typeof e?e.toFixed(2):String(e);return`${t}${i}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let r=t.options.find(t=>t.value===e);return r?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let r=t.options.find(t=>t.value===e);return r?.label??e}).join(", ");default:return String(e)}}])},190871,179319,e=>{var t=e.i(203828),r=e.i(220303),i=e.i(93198),n=e.i(262887);let a=e=>{let{type:t,number:r,id:i}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:r,...i&&"job-report"!==t&&{id:String(i)}})}`};e.s(["$",0,a,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let r=Number(e.id);return{number:t,...Number.isSafeInteger(r)&&r>0&&{id:r}}}],179319);let o="This document could not be found",s="documentOpenedFromPortal",d=async e=>{let d=await e;if(!d)throw Error(o);if((0,i.Z)()&&"job-report"!==d.type){let e=await r.R.fetchQuery("/documents/:type/:number",{pathParams:{type:d.type,number:d.number},params:{id:d.id}});if(!("url"in e))throw Error(o);await (0,n.f)(e.url);return}let l=a(d);(e=>{try{return sessionStorage.setItem(s,e),!0}catch{return!1}})(l),await t.default.push(l)};e.s(["W",0,e=>{try{return sessionStorage.getItem(s)===a(e)}catch{return!1}},"k",0,d],190871)},659587,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},202246,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked")},870307,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)([(0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,a.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}],625106,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,r)=>{var i=e.r(933571),n=e.r(729549),a=e.r(630357);function o(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new i;++t<r;)this.add(e[t])}o.prototype.add=o.prototype.push=n,o.prototype.has=a,t.exports=o},278166,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length,n=0,a=[];++r<i;){var o=e[r];t(o,r,e)&&(a[n++]=o)}return a}},576723,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=t.length,n=e.length;++r<i;)e[n+r]=t[r];return e}},297560,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}},538916,(e,t,r)=>{var i=e.r(576723),n=e.r(448684);t.exports=function(e,t,r){var a=t(e);return n(e)?a:i(a,r(e))}},190835,(e,t,r)=>{var i=e.r(858056),n=e.r(432836);t.exports=function e(t,r,a,o,s){return t===r||(null!=t&&null!=r&&(n(t)||n(r))?i(t,r,a,o,e,s):t!=t&&r!=r)}},858056,(e,t,r)=>{var i=e.r(698620),n=e.r(536712),a=e.r(317744),o=e.r(804191),s=e.r(268829),d=e.r(448684),l=e.r(613272),u=e.r(75299),c="[object Arguments]",p="[object Array]",f="[object Object]",m=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,g,h,y){var b=d(e),x=d(t),v=b?p:s(e),j=x?p:s(t);v=v==c?f:v,j=j==c?f:j;var C=v==f,_=j==f,w=v==j;if(w&&l(e)){if(!l(t))return!1;b=!0,C=!1}if(w&&!C)return y||(y=new i),b||u(e)?n(e,t,r,g,h,y):a(e,t,v,r,g,h,y);if(!(1&r)){var S=C&&m.call(e,"__wrapped__"),A=_&&m.call(t,"__wrapped__");if(S||A){var M=S?e.value():e,k=A?t.value():t;return y||(y=new i),h(M,k,r,g,y)}}return!!w&&(y||(y=new i),o(e,t,r,g,h,y))}},758629,(e,t,r)=>{var i=e.r(734274),n=e.r(517059),a=Object.prototype.hasOwnProperty;t.exports=function(e){if(!i(e))return n(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},33483,(e,t,r)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,r)=>{var i=e.r(650119),n=e.r(297560),a=e.r(33483);t.exports=function(e,t,r,o,s,d){var l=1&r,u=e.length,c=t.length;if(u!=c&&!(l&&c>u))return!1;var p=d.get(e),f=d.get(t);if(p&&f)return p==t&&f==e;var m=-1,g=!0,h=2&r?new i:void 0;for(d.set(e,t),d.set(t,e);++m<u;){var y=e[m],b=t[m];if(o)var x=l?o(b,y,m,t,e,d):o(y,b,m,e,t,d);if(void 0!==x){if(x)continue;g=!1;break}if(h){if(!n(t,function(e,t){if(!a(h,t)&&(y===e||s(y,e,r,o,d)))return h.push(t)})){g=!1;break}}else if(!(y===b||s(y,b,r,o,d))){g=!1;break}}return d.delete(e),d.delete(t),g}},317744,(e,t,r)=>{var i=e.r(889239),n=e.r(84742),a=e.r(198373),o=e.r(536712),s=e.r(692152),d=e.r(231853),l=i?i.prototype:void 0,u=l?l.valueOf:void 0;t.exports=function(e,t,r,i,l,c,p){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!c(new n(e),new n(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var f=s;case"[object Set]":var m=1&i;if(f||(f=d),e.size!=t.size&&!m)break;var g=p.get(e);if(g)return g==t;i|=2,p.set(e,t);var h=o(f(e),f(t),i,l,c,p);return p.delete(e),h;case"[object Symbol]":if(u)return u.call(e)==u.call(t)}return!1}},804191,(e,t,r)=>{var i=e.r(577256),n=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,a,o,s){var d=1&r,l=i(e),u=l.length;if(u!=i(t).length&&!d)return!1;for(var c=u;c--;){var p=l[c];if(!(d?p in t:n.call(t,p)))return!1}var f=s.get(e),m=s.get(t);if(f&&m)return f==t&&m==e;var g=!0;s.set(e,t),s.set(t,e);for(var h=d;++c<u;){var y=e[p=l[c]],b=t[p];if(a)var x=d?a(b,y,p,t,e,s):a(y,b,p,e,t,s);if(!(void 0===x?y===b||o(y,b,r,a,s):x)){g=!1;break}h||(h="constructor"==p)}if(g&&!h){var v=e.constructor,j=t.constructor;v!=j&&"constructor"in e&&"constructor"in t&&!("function"==typeof v&&v instanceof v&&"function"==typeof j&&j instanceof j)&&(g=!1)}return s.delete(e),s.delete(t),g}},577256,(e,t,r)=>{var i=e.r(538916),n=e.r(40811),a=e.r(622335);t.exports=function(e){return i(e,a,n)}},40811,(e,t,r)=>{var i=e.r(856408),n=e.r(1107),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;t.exports=o?function(e){return null==e?[]:i(o(e=Object(e)),function(t){return a.call(e,t)})}:n},268829,(e,t,r)=>{var i=e.r(625106),n=e.r(696138),a=e.r(441298),o=e.r(340682),s=e.r(278166),d=e.r(912904),l=e.r(742186),u="[object Map]",c="[object Promise]",p="[object Set]",f="[object WeakMap]",m="[object DataView]",g=l(i),h=l(n),y=l(a),b=l(o),x=l(s),v=d;(i&&v(new i(new ArrayBuffer(1)))!=m||n&&v(new n)!=u||a&&v(a.resolve())!=c||o&&v(new o)!=p||s&&v(new s)!=f)&&(v=function(e){var t=d(e),r="[object Object]"==t?e.constructor:void 0,i=r?l(r):"";if(i)switch(i){case g:return m;case h:return u;case y:return c;case b:return p;case x:return f}return t}),t.exports=v},692152,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,i){r[++t]=[i,e]}),r}},517059,(e,t,r)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,r)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},949125,(e,t,r)=>{var i=e.r(190835);t.exports=function(e,t){return i(e,t)}},622335,(e,t,r)=>{var i=e.r(419188),n=e.r(758629),a=e.r(379858);t.exports=function(e){return a(e)?i(e):n(e)}},1107,(e,t,r)=>{t.exports=function(){return[]}}]);