(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,600744,444158,300052,793391,284699,e=>{var t=e.i(391398),i=e.i(810142),a=e.i(280445),n=e.i(631635);let r=(0,a.f)(n.f)(e=>{let{theme:t}=e;return{backgroundColor:t.palette.common.white,color:t.palette.primary.main,borderColor:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.common.white,borderColor:t.palette.primary.dark,color:t.palette.primary.dark}}}),o=(0,a.f)("span")({opacity:.75,marginLeft:"0.35em",fontWeight:"inherit"});e.s(["f",0,e=>{let{count:a,disabled:n,onClick:l}=e,s=null!=a;return(0,t.jsxs)(r,{variant:"outlined",label:s?`Columns \xb7 ${a}`:"Columns",icon:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{}),s&&(0,t.jsx)(o,{children:a})]}),startIcon:(0,t.jsx)(i.default,{}),disabled:n,onClick:l,children:["Columns",s&&(0,t.jsxs)(o,{children:["· ",a]})]})}],600744);let l=(0,a.f)("div")(e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:t.spacing(2),width:"100%","& > :not(:first-child)":{marginLeft:"auto"}}});e.s(["f",0,l],444158);var s=e.i(724128);e.s(["f",0,e=>{let{onClick:i}=e;return(0,t.jsx)(n.f,{variant:"contained",label:"Filters",icon:(0,t.jsx)(s.default,{}),startIcon:(0,t.jsx)(s.default,{}),onClick:i})}],300052);var d=e.i(49077);e.s(["f",0,e=>{let{label:i,onClick:a}=e;return(0,t.jsx)(n.f,{variant:"contained",color:"secondary",label:i,icon:(0,t.jsx)(d.default,{}),onClick:a})}],793391);var u=e.i(191788),c=e.i(10945);let m=[];var f=e.i(21557),p=e.i(432171),h=e.i(594301),g=e.i(569373),v=e.i(881128),y=e.i(52796),b=e.i(25246),x=e.i(159080);let I=x.f`
  query GetCustomFieldsForTable(
    $accountId: Int!
    $dataOwner: String!
    $limit: Int = 200
    $optionsLimit: Int = 200
  ) {
    fields: CustomItemDefinition(
      where: {
        accountId: { _eq: $accountId }
        kind: { _eq: "field" }
        status: { _eq: "active" }
        dataOwner: { _eq: $dataOwner }
        audiences: { audience: { _eq: "admin" } }
      }
      order_by: { name: asc }
      limit: $limit
    ) {
      id
      name
      internalName
      fieldSubtype
      options(order_by: { ordinal: asc }, limit: $optionsLimit) {
        label
        value
      }
    }
  }
`,j=x.f`
  query GetCustomFieldValuesForRows(
    $accountId: Int!
    $dataOwner: String!
    $rowIds: [Int!]!
    $definitionIds: [Int!]!
    $limit: Int!
  ) {
    values: CustomFieldValue(
      limit: $limit
      where: {
        accountId: { _eq: $accountId }
        dataOwnerType: { _eq: $dataOwner }
        dataOwnerId: { _in: $rowIds }
        definitionId: { _in: $definitionIds }
      }
    ) {
      definitionId
      dataOwnerId
      value
    }
  }
`,w=y.I,_=["actions"],$=new Set;e.s(["f",0,e=>{let{stateKey:t,columns:i,defaultFields:a,lockedFields:n=_,hiddenFields:r=$,customFields:o}=e,[l,s]=(0,u.useState)(!1),d=(0,f.f)(),{definitions:x,columns:C,truncated:A}=(e=>{let{dataOwner:t,skip:i}=e,{user:a}=(0,h.f)(),{data:n,loading:r}=(0,p.t)(I,{variables:{accountId:a?.accountId,dataOwner:t,limit:200,optionsLimit:200},skip:i||!a?.accountId});return(0,u.useMemo)(()=>{let e=(n?.fields??[]).slice().sort((e,t)=>(e.internalName||e.name).localeCompare(t.internalName||t.name,void 0,{sensitivity:"base"})),t=e.map(e=>({field:(0,y.a)(e.id),headerName:e.internalName||e.name,width:160,sortable:!1})),i=t.map(e=>({value:e.field,label:e.headerName||"",width:e.width||160}));return{definitions:e,columns:t,options:i,loading:r,truncated:(n?.fields?.length??0)>=200}},[n,r])})({dataOwner:o.dataOwner,skip:o.skip}),{visibleColumns:q,pickerOptions:S,selectedOptions:k,applySelection:M,canPersist:T,isCustomized:F,visibleCount:L}=(e=>{let{stateKey:t,catalog:i,defaultFields:a,lockedFields:n=m}=e,r=!!t,[o,l,s]=(0,c.f)({key:t?`table-columns-${t}`:"table-columns-inactive",initialValue:{fields:a},storageType:r?"network":"state"}),d=!r||s,f=Array.isArray(o?.fields)&&o.fields.every(e=>"string"==typeof e)?o.fields:a,{visibleColumns:p,selectedOptions:h,pickerOptions:g,visibleCount:v,isCustomized:y}=(0,u.useMemo)(()=>{let e=new Set(n),t=new Set(f),r=i.filter(i=>e.has(i.field)||t.has(i.field)),o=e=>({value:e.field,label:e.headerName||"",width:e.width||100}),l=i.filter(t=>!e.has(t.field)),s=l.filter(e=>t.has(e.field)),d=new Set(a),u=f.length!==a.length||f.some(e=>!d.has(e));return{visibleColumns:r,selectedOptions:s.map(o),pickerOptions:l.map(o),visibleCount:s.length,isCustomized:u}},[i,f,a,n]);return{visibleColumns:p,pickerOptions:g,selectedOptions:h,applySelection:(0,u.useCallback)(e=>{if(!d)return;let t=new Set(i.map(e=>e.field));l({fields:[...f.filter(e=>!t.has(e)),...e.map(e=>e.value)]})},[d,i,f,l]),canPersist:d,isCustomized:y,visibleCount:v}})({stateKey:t,catalog:(0,u.useMemo)(()=>{let e=i.filter(e=>!r.has(e.field));return[...e.filter(e=>!n.includes(e.field)),...C,...e.filter(e=>n.includes(e.field))]},[i,C,r,n]),defaultFields:a,lockedFields:n}),U=(0,u.useMemo)(()=>q.map(e=>e.field),[q]),{columns:O,error:N}=(e=>{let{dataOwner:t,definitions:i,rowIds:a,visibleFields:n,ownerIdsByRow:r,skip:o}=e,{user:l}=(0,h.f)(),s=(0,v.f)(),d=(0,u.useMemo)(()=>{let e=new Set(n.filter(w));return i.filter(t=>e.has((0,y.a)(t.id)))},[i,n]),{data:c,loading:m,error:f}=(0,p.t)(j,{fetchPolicy:"cache-and-network",variables:{accountId:l?.accountId,dataOwner:t,rowIds:a,definitionIds:d.map(e=>e.id),limit:a.length*d.length},skip:o||!l?.accountId||0===d.length||0===a.length});return(0,u.useMemo)(()=>{let e=new Map((c?.values??[]).map(e=>[`${e.definitionId}:${e.dataOwnerId}`,e.value])),t=!c&&!f;return{columns:d.map(i=>{let a=(0,y.K)(i);return{field:(0,y.a)(i.id),headerName:i.internalName||i.name,width:160,sortable:!1,renderCell:n=>{let{row:o}=n;if(t||f)return"";let l=(r?r[o.id]??[]:[o.id]).map(t=>(0,g.r)(e.get(`${i.id}:${t}`),a,{currencySymbol:s})).filter(e=>e!==g.W);return l.length?1===l.length?l[0]:`${b.a}${b.B}${l.join(b.B)}`:g.W}}}),loading:m,error:f}},[d,c,m,f,s,r])})({...o,definitions:x,visibleFields:U});(0,u.useEffect)(()=>{N&&d.show({content:"Custom field values could not be loaded",severity:"error"})},[N,d]);let E=(0,u.useMemo)(()=>{let e=new Map(O.map(e=>[e.field,e.renderCell]));return q.map(t=>{let i=e.get(t.field);return i?{...t,renderCell:i}:t})},[q,O]),{nativeOptions:P,customFieldOptions:J}=(0,u.useMemo)(()=>({nativeOptions:S.filter(e=>!w(e.value)),customFieldOptions:S.filter(e=>w(e.value))}),[S]);return{gridColumns:E,visibleFields:U,modalProps:{open:l,onClose:()=>s(!1),options:P,customFieldOptions:J,isCustomOption:w,value:k,onApply:M,notice:A&&J.length>0?"Showing the first 200 custom fields.":void 0},buttonProps:{count:F?L:null,disabled:!T,onClick:()=>s(!0)}}}],284699)},772937,e=>{var t=e.i(391398),i=e.i(821627),a=e.i(849091),n=e.i(717803),r=e.i(605224),o=e.i(477882),l=e.i(886779),s=e.i(356119),d=e.i(706692),u=e.i(393172),c=e.i(586741),m=e.i(191788),f=e.i(280445),p=e.i(824451),h=e.i(917563),g=e.i(345837);let v=(0,m.createContext)({selectAll:!1,onToggleSelectAll:()=>{}}),y=e=>{let{children:i,...r}=e,{selectAll:l,onToggleSelectAll:s}=(0,m.useContext)(v);return(0,t.jsxs)(o.f,{...r,children:[(0,t.jsx)(h.f,{onMouseDown:e=>e.preventDefault(),pl:"25px",py:1,children:(0,t.jsx)(g.f,{label:"Select all",control:(0,t.jsx)(a.f,{color:"secondary",checked:l,onClick:e=>{e.preventDefault(),s()},style:{height:10,marginRight:8}})})}),(0,t.jsx)(n.f,{}),i]})},b="__customFieldsGroup__",x={value:b,label:"Custom fields",width:0},I=(0,f.f)(o.f)(e=>{let{theme:t,isScreen600pxOrLess:i}=e;return{maxWidth:"100vw",minWidth:i?"100%":500,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:`${t.spacing(2)} !important`}});e.s(["f",0,e=>{let{open:o,onClose:f,options:h,customFieldOptions:g=[],isCustomOption:j,value:w,onApply:_,notice:$}=e,C=(0,d.f)("(max-width: 600px)"),[A,q]=(0,m.useState)([]),[S,k]=(0,m.useState)(!1),[M,T]=(0,m.useState)(!1),[F,L]=(0,m.useState)(""),U=(0,m.useMemo)(()=>{if(j)return j;let e=new Set(g.map(e=>e.value));return t=>e.has(t)},[g,j]),O=(0,m.useCallback)(e=>h.length>0&&h.every(t=>e.some(e=>e.value===t.value)),[h]),N=(0,m.useMemo)(()=>g.length>0?[...h,x,...g]:h,[h,g]),E=(0,m.useCallback)(e=>{if(e.value===b)return!1;let t=F.trim().toLowerCase();return""!==t?e.label.toLowerCase().includes(t):M||!U(e.value)},[F,M,U]),P=(0,m.useMemo)(()=>A.filter(e=>U(e.value)),[A,U]),J=g.length>0&&g.every(e=>A.some(t=>t.value===e.value)),R=(0,m.useCallback)(()=>{q(e=>{let t=e.filter(e=>!h.some(t=>t.value===e.value));return S?t:[...h,...t]}),k(!S)},[S,h]),D=(0,m.useMemo)(()=>({selectAll:S,onToggleSelectAll:R}),[S,R]),Q=(0,m.useRef)(!1),z=(0,m.useRef)(new Set);return(0,m.useEffect)(()=>{if(!o){Q.current=!1,L(""),T(!1);return}Q.current||(Q.current=!0,z.current=new Set([...N.filter(e=>e.value!==b&&!U(e.value)),...w].map(e=>e.value)),q(w),k(O(w)))},[w,o,O,N,U]),(0,m.useEffect)(()=>{if(!o||!Q.current)return;let e=z.current,t=w.filter(t=>!e.has(t.value));t.length&&(t.forEach(t=>e.add(t.value)),q(e=>[...e,...t.filter(t=>!e.some(e=>e.value===t.value))]))},[o,w]),(0,m.useEffect)(()=>{o&&Q.current&&N.filter(E).forEach(e=>z.current.add(e.value))},[o,N,E]),(0,t.jsx)(r.f,{open:o,onClose:f,children:(0,t.jsxs)(I,{isScreen600pxOrLess:C,children:[(0,t.jsx)(s.f,{variant:"h6",component:"h2",children:"Columns"}),(0,t.jsx)(s.f,{variant:"body2",sx:{fontSize:12,color:"text.secondary",mt:1},children:"Select the columns you would like to see in the table."}),$&&(0,t.jsx)(s.f,{variant:"caption",sx:{display:"block",color:"text.secondary",mt:.5},children:$}),(0,t.jsx)(n.f,{sx:{mt:2}}),(0,t.jsx)(v.Provider,{value:D,children:(0,t.jsx)(p.f,{multiple:!0,disableCloseOnSelect:!0,label:"Columns",variant:"standard",color:"secondary",options:N,value:A,onInputChange:(e,t)=>L(t),filterOptions:(e,t)=>{let i=t.inputValue.trim().toLowerCase(),a=e=>e.label.toLowerCase().includes(i),n=e.filter(e=>!U(e.value)&&e.value!==b),r=e.filter(e=>U(e.value)),o=n.filter(a);if(0===g.length)return o;if(""!==i){let e=r.filter(a);return e.length>0?[...o,x,...e]:o}return M?[...n,x,...r]:[...n,x]},onChange:(e,t,i)=>{"selectOption"===i&&t.some(e=>e.value===b)?T(e=>!e):(k(O(t)),q(t))},renderOption:(e,i)=>i.value===b?(0,t.jsxs)("li",{...e,"aria-label":`Custom fields, ${M?"expanded":"collapsed"}`,onMouseDown:e=>e.preventDefault(),onClick:e=>{e.preventDefault(),e.stopPropagation(),T(e=>!e)},children:[(0,t.jsx)(a.f,{color:"secondary",checked:J,indeterminate:P.length>0&&!J,onClick:e=>{e.preventDefault(),e.stopPropagation(),q(e=>{if(g.every(t=>e.some(e=>e.value===t.value))){let t=new Set(g.map(e=>e.value));return e.filter(e=>!t.has(e.value))}let t=g.filter(t=>!e.some(e=>e.value===t.value));return[...e,...t]})},style:{height:10,marginRight:8}}),(0,t.jsx)("span",{style:{flexGrow:1},children:i.label}),M?(0,t.jsx)(c.default,{fontSize:"small"}):(0,t.jsx)(u.default,{fontSize:"small"})]}):(0,t.jsxs)("li",{...e,style:U(i.value)?{paddingLeft:32}:void 0,children:[(0,t.jsx)(a.f,{color:"secondary",checked:A.some(e=>e.value===i.value),style:{height:10,marginRight:8}}),i.label]}),sx:{mt:1,mb:1},PaperComponent:y})}),(0,t.jsxs)(l.f,{direction:"row",justifyContent:"flex-end",gap:2,mt:2,children:[(0,t.jsx)(i.f,{variant:"contained",color:"danger",onClick:f,children:"Cancel"}),(0,t.jsx)(i.f,{variant:"contained",color:"secondary",onClick:()=>{_(A),f()},children:"Apply"})]})]})})}],772937)},60450,e=>{var t=e.i(391398),i=e.i(28980),a=e.i(631635);e.s(["f",0,e=>{let{label:n="Export",loading:r,onClick:o}=e;return(0,t.jsx)(a.f,{variant:"contained",color:"success",label:n,icon:(0,t.jsx)(i.default,{}),startIcon:(0,t.jsx)("img",{src:"/static/icons/csv.svg",alt:"",width:20,height:20}),loading:r,onClick:o})}])},631635,e=>{var t=e.i(391398),i=e.i(755548),a=e.i(76381),n=e.i(322135),r=e.i(587369),o=e.i(280445),l=e.i(451221);let s=(0,o.f)(i.f)({"& .MuiSvgIcon-root":{fontSize:20}});e.s(["f",0,e=>{let{label:o,icon:d,loading:u=!1,disabled:c,startIcon:m,children:f,...p}=e,h=(0,l.f)(),g=(0,r.f)(h.breakpoints.down("sm")),v=(0,t.jsx)(a.f,{size:20,color:"secondary"}),y=c||u;if(!g)return(0,t.jsx)(i.f,{...p,disabled:y,startIcon:u?void 0:m,children:u?v:f??o});let b=(0,t.jsx)(s,{...p,disabled:y,"aria-label":o,children:u?v:d});return y?b:(0,t.jsx)(n.f,{title:o,children:b})}])},218659,e=>{var t=e.i(391398),i=e.i(280445),a=e.i(115871),n=e.i(813843),r=e.i(755548),o=e.i(587369);let l=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:s={},imageSx:d={},title:u,titleSx:c={},subtitleFirstLine:m,subtitleFirstLineSx:f={},subtitleSecondLine:p,subtitleSecondLineSx:h={},buttonText:g,onAction:v}=e,y=(0,o.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...s,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(l,{src:i,sx:{...d,width:y?"250px":"300px"}}),(0,t.jsx)(a.f,{typography:"h5",sx:{...c},children:u}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(a.f,{sx:{...f},children:m}),(0,t.jsx)(a.f,{sx:{...h},children:p})]}),g&&v&&(0,t.jsx)(r.f,{variant:"contained",color:"secondary",onClick:v,children:g})]})}])},360364,e=>{var t=e.i(391398),i=e.i(738251),a=e.i(813843),n=e.i(59626),r=e.i(552987),o=e.i(526374),l=e.i(879572);e.s(["f",0,e=>{let{row:s,refetchQueries:d,entity:u,removeTagTarget:c}=e,{removeLink:m}=(0,n.f)({refetchQueries:["GetTaskTags",...d]}),f=async e=>{if(!await m(e))throw Error("Tag could not be removed")},p={onSiteTimingEnd:s.onSiteTimingEnd,jobReportTimingEnd:s.jobReportTimingEnd,quoteReturnedTimingEnd:s.quoteReturnedTimingEnd},h=null!=s.parentJobNumber&&""!==s.parentJobNumber?{parentJobType:s.parentJobType??null,parentJobNumber:s.parentJobNumber}:null,g=null!=c?c:"Task"===u?"task":"Workflow"===u?"workflow":"Asset"===u?"asset":(0,l.p)(s.type);return(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:{minWidth:0,width:"100%",columnGap:2},children:[(0,t.jsx)(i.f,{sx:{flex:"1 1 0%",minWidth:0,overflow:"hidden",pr:.5,direction:"ltr"},children:(0,t.jsx)(r.f,{expandToContainer:!0,tags:s.tags||[],handleDeleteTagEntity:f,slaJobTimings:p,ppmLinkRowFallback:h,removeTagTarget:g,listSx:{whiteSpace:"nowrap"}})}),(0,t.jsx)(i.f,{sx:{flexShrink:0,display:"flex",alignItems:"center",direction:"ltr"},children:(0,t.jsx)(o.f,{hideTagsList:!0,entityId:s.id,refetchQueries:d,entity:u})})]})}])},655477,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(422411),n=e.i(877341),r=e.i(515523),o=e.i(76381),l=e.i(652148),s=e.i(800884),d=e.i(886292),u=e.i(175872);let c=[];e.s(["f",0,e=>{let{control:m}=e,[f,p]=(0,i.useState)(""),[h,{loading:g,data:{items:v}={items:[]}}]=(0,n.f)(d.T,{variables:{q:""!==f?`%${f}%`:null}}),y=(0,u.f)(e=>p(e),500);return(0,t.jsx)(a.e,{control:m,name:"tags",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(r.f,{multiple:!0,limitTags:6,color:"secondary",onOpen:()=>h(),options:v,value:i||c,onChange:(e,t)=>{a(t)},onInputChange:(e,t)=>{y(t)},getOptionLabel:e=>e.label,renderTags:(e,i)=>e.map((e,a)=>(0,t.jsx)(s.f,{size:"small",label:e.label,...i({index:a})})),isOptionEqualToValue:(e,t)=>e.value===t.value,renderInput:e=>(0,t.jsx)(l.f,{...e,variant:"standard",color:"secondary",label:"Select tags",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[g?(0,t.jsx)(o.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})}})}])},413452,e=>{e.s(["f",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=>!0===e[t]}])},668056,247300,357969,e=>{let t=e=>e?.value??null;e.s(["_",0,t,"o",0,e=>Array.isArray(e)?e.map(t):null],668056);let i=e=>{if(void 0===e)return;let t=Array.isArray(e)?e[0]:e;return"string"==typeof t?t:""};e.s(["f",0,(e,t,a)=>{let n=i(a.show),r=i(a.tileName);return[e,t,void 0!==n&&`show:${encodeURIComponent(n)}`,void 0!==r&&`tile:${encodeURIComponent(r)}`].filter(Boolean).join("-")}],247300),e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Job",i="";return e?.length&&(i=`
      Taxonomy: {
      _and: [
        { entity: { _eq: ${t} } }
        {
          Taxonomy: {
            status: { _eq: "active" }
            _and: [{ id: { _in: [${e}] } }, { type: { _eq: "tags" } }]
          }
        }
      ]
    }
  `),i}],357969)},284661,e=>{var t=e.i(159080);let i=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,i])},239964,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(691567),n=e.i(773831),r=e.i(33670),o=e.i(901004),l=e.i(509790),s=e.i(692113),d=e.i(137995),u=e.i(817581),c=e.i(420),m=e.i(870307),f=e.i(407329),p=e.i(390536),h=e.i(978319),g=e.i(376733),v=e.i(13558),y=e.i(562673),b=e.i(339909),x=e.i(89029),I=e.i(129503),j=e.i(213419),w=e.i(12028),_=e.i(813843),$=e.i(115871);let C={add:(0,t.jsx)(u.default,{}),archive:(0,t.jsx)(s.default,{}),avatar:(0,t.jsx)(w.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(h.default,{}),description:(0,t.jsx)(f.default,{}),download:(0,t.jsx)(p.default,{}),info:(0,t.jsx)(v.default,{}),edit:(0,t.jsx)(g.default,{}),location:(0,t.jsx)(x.default,{}),unarchive:(0,t.jsx)(d.default,{}),uploadFile:(0,t.jsx)(y.default,{}),receipt:(0,t.jsx)(b.default,{}),visibility:(0,t.jsx)(j.default,{})},A={default:(0,t.jsx)(l.default,{}),defaultHoriz:(0,t.jsx)(I.default,{}),description:(0,t.jsx)(f.default,{})},q=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],S=e=>{let{actionsData:a=q,icon:l="default",row:s,disabled:d=!1}=e,[u,c]=(0,i.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:d,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:A[l]}),(0,t.jsx)(r.f,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:!!u,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:a(s).map((e,i)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(_.f,{direction:"row",alignItems:"center",spacing:2,children:[C?.[e.icon]||null,(0,t.jsx)($.f,{children:e.tooltip})]})},i))})]})};S.propTypes={actionsData:a.default.func,icon:a.default.oneOf(["default","description"]),row:a.default.any.isRequired,disabled:a.default.bool},e.s(["f",0,S])},892904,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`,r=t.f`
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
`,l=t.f`
  fragment JobAdminFields on Job {
    supplierId
    supplierUserId
  }
`,s=t.f`
  fragment JobSupplierFields on Job {
    supplierId
    supplierUserId
  }
`;e.s(["O",0,l,"U",0,n,"H",0,r,"r",0,i,"Z",0,a,"q",0,s,"C",0,o])},277063,e=>{var t=e.i(159080);let i=t.f`
  fragment QuoteFields on Job {
    quoteNumber
    quoteDue
  }
`;t.f`
  query Quote($id: Int!) {
    job: Job_by_pk(id: $id) {
      id
      title
      description
      costCategory
      status
      workStatus
      scheduledAt
      createdAt
      customerId
      customerUserId
      locationId
      managerId
      parentId
      serviceId
      slaId
      tenantId
      reference
      amount
      accountByTenantid {
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
      customer: Account {
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
      customerUser: CustomerUser {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
        accounts: Account_Users {
          id
          role
          position
          isContact
          status
          account: Account {
            id
            name
            type
          }
        }
      }
      expenses: Expenses {
        id
        paid
        description
        amount
        markup
        vat
      }
      location: Location {
        id
        access
        createdAt
        name
        contactUserId
      }
      messages: Messages {
        id
        message
        priority
        taskId
        jobId
        locationId
        description
      }
      service: Service {
        id
        name
        countryId
        currencyId
      }
      supplier: Suplier {
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
      manager: Manager {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
        accounts: Account_Users {
          id
          role
          position
          isContact
          status
          account: Account {
            id
            name
            type
          }
        }
      }
      timings: JobTimings {
        id
        status
        createdAt
      }
    }
  }
`,e.s(["f",0,i])},39059,e=>{var t=e.i(159080);let i=t.f`
  query GetUsers(
    $accountId: Int
    $accountType: String
    $date: timestamptz
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: User_order_by!
    $status: String
  ) {
    users: User(
      limit: $limit
      offset: $offset
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [
          { email: { _ilike: $q } }
          { nameFirst: { _ilike: $q } }
          { nameLast: { _ilike: $q } }
        ]
        status: { _eq: $status }
      }
      order_by: [$orderBy]
    ) {
      id
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
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
      accounts: Account_Users {
        id
        role
        position
        isContact
        status
        account: Account {
          id
          name
          type
        }
        userLocations: User_Account_Locations {
          accountLocationId
        }
      }
    }
    meta: User_aggregate(
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        status: { _eq: $status }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,a=t.f`
  query GetUser($id: Int!) {
    user: User_by_pk(id: $id) {
      id
      fullName
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
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
      accounts: Account_Users {
        id
        role
        position
        isContact
        status
        account: Account {
          id
          name
          type
        }
      }
    }
  }
`,n=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,r=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,o=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,l=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,s=t.f`
  mutation UpdateAccountUserByUserIdAccoutId(
    $userId: Int!
    $accountId: Int!
    $changes: Account_User_set_input!
  ) {
    update_Account_User(
      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }
      _set: $changes
    ) {
      returning {
        id
      }
    }
  }
`,d=t.f`
  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {
    location: Location(
      offset: $offset
      limit: $limit
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      id
      name
      accountLocations: Account_Locations(where: { accountId: { _eq: $accountId } }) {
        id
      }
      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {
        id
        status
        address: Address {
          id
          name
          addressLine1
          postCode
        }
      }
    }
    meta: Location_aggregate(
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;e.s(["u",0,d,"q",0,r,"_",0,l,"x",0,a,"k",0,i,"f",0,o,"l",0,s,"V",0,n])},60903,e=>{e.s(["f",0,(e,t)=>{let i=document.createElement("a");"string"==typeof i.download?(document.body.appendChild(i),i.download=t,i.href=e,i.click(),document.body.removeChild(i)):location.replace(e)}])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},52796,25246,e=>{let t="customField_",i=e=>e.startsWith(t);e.s(["a",0,e=>`${t}${e}`,"$",0,e=>{if(!i(e))return null;let a=e.slice(t.length);if(!/^\d+$/.test(a))return null;let n=Number(a);return n>0?n:null},"K",0,e=>({id:e.id,name:e.name,helpText:null,fieldSubtype:e.fieldSubtype??null,dataOwner:null,required:!1,defaultValue:null,config:null,options:(e.options??[]).map(e=>({...e,active:!0}))}),"I",0,i],52796);let a="Multiple",n=e=>null==e?[]:Array.isArray(e)?[...e]:[e];e.s(["R",0,"-","a",0,a,"B",0," / ","$",0,(e,t)=>{let i=n(e);if(!i.length)return"-";let r=[...new Set(i.map(e=>null==e?"-":t(e)))],[o]=r;return 1===r.length&&void 0!==o?o:[a,...r].join(" / ")},"j",0,e=>"object"==typeof e&&null!==e&&Array.isArray(e.__multiOwner),"L",0,n],25246)},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=i.currencySymbol??"£",a="number"==typeof e?e.toFixed(2):String(e);return`${t}${a}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let i=t.options.find(t=>t.value===e);return i?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let i=t.options.find(t=>t.value===e);return i?.label??e}).join(", ");default:return String(e)}}])},413696,e=>{var t=e.i(234383),i=e.i(190871);let a=async(e,a,n)=>{try{await (0,i.k)(e.query({query:t.m,variables:{id:n}}).then(e=>{let{data:{quote:t}}=e;return t?.quoteNumber?{type:"quote",number:t.quoteNumber,id:t.id}:null}))}catch(e){a.show({content:"Error downloading job quote",severity:"error"})}};e.s(["f",0,a])},190871,179319,e=>{var t=e.i(203828),i=e.i(220303),a=e.i(93198),n=e.i(262887);let r=e=>{let{type:t,number:i,id:a}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:i,...a&&"job-report"!==t&&{id:String(a)}})}`};e.s(["$",0,r,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let i=Number(e.id);return{number:t,...Number.isSafeInteger(i)&&i>0&&{id:i}}}],179319);let o="This document could not be found",l="documentOpenedFromPortal",s=async e=>{let s=await e;if(!s)throw Error(o);if((0,a.Z)()&&"job-report"!==s.type){let e=await i.R.fetchQuery("/documents/:type/:number",{pathParams:{type:s.type,number:s.number},params:{id:s.id}});if(!("url"in e))throw Error(o);await (0,n.f)(e.url);return}let d=r(s);(e=>{try{return sessionStorage.setItem(l,e),!0}catch{return!1}})(d),await t.default.push(d)};e.s(["W",0,e=>{try{return sessionStorage.getItem(l)===r(e)}catch{return!1}},"k",0,s],190871)},234383,e=>{var t=e.i(159080);let i=t.f`
  fragment QuotationFields on SupplierQuote {
    id
    createdAt
    jobId
    methodStatement
    notes
    quoteNumber
    startDate
    status
    totalDuration
    totalDurationUnit
    durationPrefix
    noticePeriod
    noticePeriodUnit
    updatedAt
    siteVisitAt
    job: Job {
      id
      status
      type
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        notes
        userId
        quoteId
        createdAt
      }
    }
    lineItems: SupplierQuoteLineItems {
      id
      description
      item
      qty
      qtyUnit
      quoteId
      type
    }
    supplier: Supplier {
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
`,a=t.f`
  query GetQuotation($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      ...QuotationFields
      meta
      rebate
      job: Job {
        customer: Customer {
          id
          meta
        }
      }
      lineItems: SupplierQuoteLineItems {
        id
        supplierTotal
        customerTotal
        unitRate
        customerUnitRate
      }
    }
  }
  ${i}
`,n=t.f`
  query GetQuotationCustomer($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      ...QuotationFields
      job: Job {
        customer: Customer {
          id
          meta
        }
      }
      lineItems: SupplierQuoteLineItems {
        id
        customerTotal
        customerUnitRate
      }
    }
  }
  ${i}
`,r=t.f`
  query GetQuotationSupplier($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      ...QuotationFields
      rebate
      lineItems: SupplierQuoteLineItems {
        id
        supplierTotal
        unitRate
      }
    }
  }
  ${i}
`,o=t.f`
  query GetQuoteNumber($id: Int!) {
    quote: SupplierQuote_by_pk(id: $id) {
      id
      quoteNumber
    }
  }
`;e.s(["w",0,a,"J",0,n,"E",0,r,"m",0,o])},28980,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M16.59 9H15V4c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v5H7.41c-.89 0-1.34 1.08-.71 1.71l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.63-.63.19-1.71-.7-1.71M5 19c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1"}),"DownloadRounded")},724128,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAltRounded")},393172,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},586741,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp")},834035,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"}),"Notifications")},870307,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},810142,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"StorageOutlined")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},717803,e=>{var t=e.i(986351);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}])})();