(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[824451,e=>{var t=e.i(391398),i=e.i(800884),r=e.i(76381),n=e.i(515523),a=e.i(652148),l=e.i(191788);e.s(["f",0,e=>{let{color:o,variant:s,label:d,placeholder:u,error:c,helperText:h,size:m,loading:p,onSearchChange:g,onAddNew:f,textFieldProps:x={},disableClearable:y,onChange:b,onInputChange:v,...j}=e,[C,I]=(0,l.useState)(""),M=(0,l.useRef)("input");return(0,l.useEffect)(()=>{if(!g)return;if("reset"===M.current||"clear"===M.current)return void g(C,M.current);let e=setTimeout(()=>{g(C,M.current)},500);return()=>clearTimeout(e)},[C,g]),(0,t.jsx)(n.f,{disableClearable:y,getOptionKey:e=>"string"==typeof e?e:e?.value?.toString?.(),getOptionLabel:e=>"string"==typeof e?e:e?.label||"",isOptionEqualToValue:(e,t)=>e.value===t.value,loading:p,filterOptions:(e,t)=>{let i=e.filter(e=>("string"==typeof e?e:e?.label||"").toLowerCase().includes(t.inputValue.toLowerCase()));return f&&""!==t.inputValue.trim()&&(i.some(e=>("string"==typeof e?e:e?.label||"").toLowerCase()===t.inputValue.toLowerCase())||i.unshift({value:`${t.inputValue}`,label:`Add '${t.inputValue}'`,isAddNew:!0})),i},onInputChange:(e,t,i)=>{M.current=i,I(t),v?.(e,t,i)},onChange:async(e,t,i)=>{if(t&&"object"==typeof t&&!Array.isArray(t)&&"isAddNew"in t&&t.isAddNew&&f){let r=t.value,n=await f(r);if(!n)return;b?.(e,n,i),I("");return}b?.(e,t,i)},renderTags:(e,r)=>e.map((e,n)=>(0,t.jsx)(i.f,{size:"small",label:e.label,...r({index:n})})),renderOption:(e,i,r)=>{let n=C||"",a="string"==typeof i?i:i?.label||"";if("object"==typeof i&&"isAddNew"in i&&i.isAddNew)return(0,t.jsx)("li",{...e,children:(0,t.jsx)("span",{children:a})});let l=((e,t)=>{let i=t?.trim()||"";if(!i||!e||i.length<3)return e;let r=[],n=i.toLowerCase(),a=e.toLowerCase(),l=0,o=a.indexOf(n);for(;-1!==o;)o>l&&r.push({text:e.substring(l,o),highlight:!1}),r.push({text:e.substring(o,o+i.length),highlight:!0}),l=o+i.length,o=a.indexOf(n,l);return l<e.length&&r.push({text:e.substring(l),highlight:!1}),r})(a,n);return(0,t.jsx)("li",{...e,children:Array.isArray(l)?(0,t.jsx)("span",{children:l.map((e,i)=>e.highlight?(0,t.jsx)("strong",{children:e.text},i):(0,t.jsx)("span",{children:e.text},i))}):a})},renderInput:e=>(0,t.jsx)(a.f,{label:d,placeholder:u,color:o,variant:s,error:c,helperText:h,...e,...x,inputProps:{...e.inputProps,...x.inputProps||{}},InputLabelProps:{...e.InputLabelProps,...x.InputLabelProps||{}},InputProps:{...e.InputProps,...x.InputProps||{},endAdornment:(0,t.jsxs)(t.Fragment,{children:[p?(0,t.jsx)(r.f,{color:"inherit",size:20}):null,x.InputProps?.endAdornment,e.InputProps.endAdornment]})}}),...j})}])},218659,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(115871),n=e.i(813843),a=e.i(755548),l=e.i(587369);let o=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:s={},imageSx:d={},title:u,titleSx:c={},subtitleFirstLine:h,subtitleFirstLineSx:m={},subtitleSecondLine:p,subtitleSecondLineSx:g={},buttonText:f,onAction:x}=e,y=(0,l.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...s,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(o,{src:i,sx:{...d,width:y?"250px":"300px"}}),(0,t.jsx)(r.f,{typography:"h5",sx:{...c},children:u}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(r.f,{sx:{...m},children:h}),(0,t.jsx)(r.f,{sx:{...g},children:p})]}),f&&x&&(0,t.jsx)(a.f,{variant:"contained",color:"secondary",onClick:x,children:f})]})}])},74633,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(920235),n=e.i(738251),a=e.i(813843),l=e.i(115871),o=e.i(529292),s=e.i(280445),d=e.i(449587),u=e.i(317536),c=e.i(974261),h=e.i(749231),m=e.i(845825),p=e.i(587369),g=e.i(332789),f=e.i(340569),x=e.i(203828);let y=e=>{let{disabled:i,currentPage:r,totalCount:n,pageSize:a,onPageChange:l}=e,o=(0,p.f)("(max-width:400px)"),s=(0,p.f)("(max-width:500px)");return(0,t.jsx)(b,{disabled:i,page:r,count:Math.ceil(n/a),onChange:(e,t)=>l(t),variant:"outlined",shape:"rounded",size:o?"small":"medium",hidePrevButton:1===r,hideNextButton:r===Math.ceil(n/a),siblingCount:+!s,renderItem:e=>(0,t.jsx)(m.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})},b=(0,s.f)(h.f)(e=>{let{hidePrevButton:t,hideNextButton:i,theme:r}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px",flexShrink:0},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:r.palette.white.main,backgroundColor:r.palette.secondary.main,...i?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}}),v={item:"id",order:"desc"},j=(0,s.f)(n.f)(e=>{let{containerHeight:t,containerMaxHeight:i}=e;return{height:t,maxHeight:i,minHeight:0,display:"flex",flexDirection:"column"}}),C=(0,s.f)(r.f)(e=>{let{theme:t,hideHeader:i}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",flex:1,minHeight:0},"& .MuiDataGrid-columnHeaders":{...i&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...i&&{marginTop:"0 !important"}},"& .MuiDataGrid-iconSeparator":{opacity:1},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,o._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["B",0,y,"s",0,e=>{let{hideHeader:r,columns:n,history:o,totalCount:s,paginationSize:h,containerHeight:m,containerMaxHeight:p,autoHeight:b,currentPage:I=0,onTableStateChange:M,initialSort:$=[v],noRowsOverlay:_,loading:w,stateKey:S,onColumnOrderChange:P,onColumnWidthChange:A,slotProps:T,...k}=e,q=(0,x.useRouter)(),L=h||c.r.paginationSize,{apiRef:N,displayColumns:R,persistColumnOrder:O,persistColumnWidth:z}=(0,g.f)({stateKey:S,columns:n});(0,f.f)(N,!k.disableColumnReorder);let G=(0,i.useMemo)(()=>({...T,baseTooltip:{disableTouchListener:!0,...T?.baseTooltip}}),[T]),D=(0,i.useCallback)((e,t,i)=>{P?.(e,t,i),O()},[P,O]),E=(0,i.useCallback)((e,t,i)=>{A?.(e,t,i),z(e)},[A,z]),H=(0,i.useCallback)(e=>{q.push({query:{...q.query,page:e}},void 0,{shallow:!0})},[q]),B=(0,i.useCallback)(e=>{o&&H(e),M?.(t=>({...t,currentPage:e-1,pageSize:L}))},[H,o,M,L]),W=(0,i.useMemo)(()=>({sorting:{sortModel:$.map(e=>({field:e.item,sort:e.order}))}}),[$]);return(0,i.useEffect)(()=>{!s||s>I*L||B(1)},[I,B,L,s]),(0,t.jsxs)(j,{containerHeight:m,containerMaxHeight:p,children:[(0,t.jsx)(C,{hideHeader:r,hideFooter:!0,disableColumnMenu:!0,disableRowSelectionOnClick:!0,autoHeight:b,sortingMode:"server",filterMode:"server",apiRef:N,onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?M?.(e=>({...e,sorting:[{item:t.field.replace(/'/g,'"'),order:t.sort}]})):M?.(e=>({...e,sorting:$}))},onColumnOrderChange:D,onColumnWidthChange:E,columns:R,initialState:W,loading:w,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(d.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(u.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(a.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(d.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(u.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(a.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(l.f,{children:"There are no results."})}),noRowsOverlay:()=>_?(0,t.jsx)(a.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:_()}):(0,t.jsx)(a.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(l.f,{children:"There are no results."})})},slotProps:G,...k}),s&&Math.ceil(s/L)>1?(0,t.jsx)(y,{disabled:w,currentPage:I+1,totalCount:s,pageSize:L,onPageChange:B}):null]})}])},122965,e=>{var t=e.i(491230),i=e.i(203828),r=e.i(191788);let n=[{item:"id",order:"desc"}];e.s(["f",0,function(){let{initialSort:e=n,initialPageSize:a=50,options:l={},pageFromUrl:o=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=(0,i.useRouter)(),d=isNaN(Number(s.query.page))?0:Number(s.query.page)-1,[u,c]=(0,r.useState)({currentPage:o?d:0,pageSize:a,sorting:e||[]}),h=(0,r.useMemo)(()=>u.sorting.reduce((e,i)=>{let r=l.orderType,n=(0,t.f)(i.item.replaceAll(/ORDER/gi,`${i.order}${r?`_${r}`:""}`));return Array.isArray(n)?[...e,...n]:n?[...e,n]:[...e,{[i.item]:`${i.order}${r?`_${r}`:""}`}]},[]),[l.orderType,u.sorting]);return{reference:{currentPage:u.currentPage,paginationSize:u.pageSize,onTableStateChange:c,initialSort:e},pagination:{offset:u.currentPage*u.pageSize,limit:u.pageSize},order:h}}])},175872,e=>{var t=e.i(191788);e.s(["f",0,(e,i)=>{let r=(0,t.useRef)(null),n=(0,t.useRef)(e),a=(0,t.useRef)(i);return(0,t.useEffect)(()=>{n.current=e},[e]),(0,t.useEffect)(()=>{a.current=i,r.current&&(clearTimeout(r.current),r.current=null)},[i]),(0,t.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),(0,t.useCallback)(function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];r.current&&clearTimeout(r.current),r.current=setTimeout(()=>{n.current(...t)},a.current)},[])}])},886143,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["o",0,i,"A",0,r])},491230,e=>{e.s(["f",0,e=>{try{return JSON.parse(e)}catch(e){return!1}}])},171817,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),a=e.r(391398);i.default=(0,n.default)((0,a.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check")},128519,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),a=e.r(391398);i.default=(0,n.default)((0,a.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove")},210972,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(432171),n=e.i(41158),a=e.i(936641),l=e.i(738251),o=e.i(755548),s=e.i(171817),d=e.i(512057),u=e.i(917569),c=e.i(88152),h=e.i(128519),m=e.i(813843),p=e.i(652148),g=e.i(322135),f=e.i(115871),x=e.i(824451),y=e.i(74633),b=e.i(218659),v=e.i(122965),j=e.i(175872),C=e.i(594301),I=e.i(447090),M=e.i(886143);let $=[{label:"All types",value:"all"},{label:"Document",value:"document"},{label:"Image",value:"image"},{label:"Video",value:"video"}],_=()=>{let{user:e}=(0,C.f)(),_=(0,I.f)(),[w,S]=(0,i.useState)(""),[P,A]=(0,i.useState)(""),[T,k]=(0,i.useState)("all"),{pagination:q,reference:L}=(0,v.f)(),N=(0,j.f)(e=>S(e),500),{data:{items:R,meta:O}={items:[],meta:{aggregate:{totalCount:0}}},loading:z,error:G,refetch:D}=(0,r.t)(M.o,{variables:{q:w?`%${w}%`:null,type:"all"===T?null:T,adminId:e?.adminId,...q},skip:!e?.adminId}),E=(0,i.useMemo)(()=>R.map(e=>{let{caption:t,filename:i,meta:r,name:n,type:a,user:l}=e.item;return{id:e.id,file:t||n||i,filename:i,entity:e.entity?`${e.entity}#${e.entityId}`:"",uploaded:l?`${l.nameFirst} ${l.nameLast}`:"",userId:l?.id??null,thumbnails:"image"===a?r?.thumbnails?.length?"yes":"no":"unavailable"}}),[R]),H=(0,i.useMemo)(()=>[{field:"file",headerName:"File",flex:2,minWidth:220,sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsx)(u.f,{component:"button",color:"secondary",underline:"hover",sx:{textAlign:"left"},onClick:()=>_(i.filename),children:i.file})}},{field:"entity",headerName:"Entity",flex:1,minWidth:140,sortable:!1},{field:"uploaded",headerName:"Uploaded by",flex:1,minWidth:160,sortable:!1,renderCell:e=>{let{row:i}=e;return i.userId?(0,t.jsx)(u.f,{component:n.default,href:`/dashboard/users/view?id=${i.userId}`,color:"secondary",underline:"hover",children:i.uploaded}):(0,t.jsx)("span",{children:i.uploaded})}},{field:"thumbnails",headerName:"Thumbnails",flex:1,minWidth:110,sortable:!1,renderCell:e=>{let{row:i}=e;return"yes"===i.thumbnails?(0,t.jsx)(g.f,{title:"Yes",children:(0,t.jsx)(s.default,{color:"success",fontSize:"small"})}):"no"===i.thumbnails?(0,t.jsx)(g.f,{title:"No",children:(0,t.jsx)(d.default,{color:"warning",fontSize:"small"})}):(0,t.jsx)(g.f,{title:"Unavailable",children:(0,t.jsx)(h.default,{color:"disabled",fontSize:"small"})})}}],[_]);return(0,t.jsxs)(l.f,{sx:{flex:1,overflow:"auto",p:2,marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 210px)"},transition:"margin-left 0.5s ease"},children:[(0,t.jsxs)(l.f,{sx:{mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,t.jsx)(f.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600,mb:1},children:"Media"}),(0,t.jsx)(f.f,{variant:"body2",color:"text.secondary",children:"All files uploaded across the platform."})]}),(0,t.jsxs)(m.f,{direction:"row",spacing:2,sx:{mb:2,maxWidth:560},children:[(0,t.jsx)(p.f,{fullWidth:!0,size:"small",color:"secondary",label:"Search media",value:P,onChange:e=>{A(e.target.value),N(e.target.value)}}),(0,t.jsx)(l.f,{sx:{minWidth:170},children:(0,t.jsx)(x.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Type",options:$,value:$.find(e=>e.value===T)??null,onChange:(e,t)=>k(t?t.value:"all")})})]}),G&&(0,t.jsx)(a.f,{severity:"error",sx:{mb:2},onClose:()=>D(),action:(0,t.jsx)(o.f,{size:"small",onClick:()=>D(),children:"Retry"}),children:G.message}),(0,t.jsxs)(c.f,{sx:{p:1,mt:2,minHeight:400},children:[(E.length>0||z)&&(0,t.jsx)(y.s,{...L,loading:z,columns:H,rows:E,totalCount:O.aggregate.totalCount,autoHeight:!1,containerHeight:"calc(100vh - 340px)"}),!E.length&&!z&&(0,t.jsx)(b.f,{imageSrc:"/static/icons/no_locations_found.svg",title:"No media found",subtitleFirstLine:"There are no files matching your filters.",subtitleSecondLine:"Adjust the search or type filter to see more results."})]})]})};var w=e.i(293965);let S=()=>(0,t.jsx)(_,{});S.getLayout=e=>(0,t.jsx)(w.f,{children:e}),e.s(["default",0,S],210972)}],447937,(e,t,i)=>{let r="/dashboard/media";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(210972)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);