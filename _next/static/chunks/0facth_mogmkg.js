(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,600744,444158,300052,793391,284699,e=>{var t=e.i(391398),i=e.i(810142),a=e.i(280445),n=e.i(631635);let l=(0,a.f)(n.f)(e=>{let{theme:t}=e;return{backgroundColor:t.palette.common.white,color:t.palette.primary.main,borderColor:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.common.white,borderColor:t.palette.primary.dark,color:t.palette.primary.dark}}}),r=(0,a.f)("span")({opacity:.75,marginLeft:"0.35em",fontWeight:"inherit"});e.s(["f",0,e=>{let{count:a,disabled:n,onClick:o}=e,s=null!=a;return(0,t.jsxs)(l,{variant:"outlined",label:s?`Columns \xb7 ${a}`:"Columns",icon:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{}),s&&(0,t.jsx)(r,{children:a})]}),startIcon:(0,t.jsx)(i.default,{}),disabled:n,onClick:o,children:["Columns",s&&(0,t.jsxs)(r,{children:["· ",a]})]})}],600744);let o=(0,a.f)("div")(e=>{let{theme:t}=e;return{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:t.spacing(2),width:"100%","& > :not(:first-child)":{marginLeft:"auto"}}});e.s(["f",0,o],444158);var s=e.i(724128);e.s(["f",0,e=>{let{onClick:i}=e;return(0,t.jsx)(n.f,{variant:"contained",label:"Filters",icon:(0,t.jsx)(s.default,{}),startIcon:(0,t.jsx)(s.default,{}),onClick:i})}],300052);var d=e.i(49077);e.s(["f",0,e=>{let{label:i,onClick:a}=e;return(0,t.jsx)(n.f,{variant:"contained",color:"secondary",label:i,icon:(0,t.jsx)(d.default,{}),onClick:a})}],793391);var u=e.i(191788),c=e.i(10945);let f=[];var m=e.i(21557),p=e.i(432171),g=e.i(594301),h=e.i(569373),y=e.i(881128),x=e.i(52796),v=e.i(25246),b=e.i(159080);let j=b.f`
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
`,_=b.f`
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
`,w=x.I,T=["actions"],I=new Set;e.s(["f",0,e=>{let{stateKey:t,columns:i,defaultFields:a,lockedFields:n=T,hiddenFields:l=I,customFields:r}=e,[o,s]=(0,u.useState)(!1),d=(0,m.f)(),{definitions:b,columns:C,truncated:$}=(e=>{let{dataOwner:t,skip:i}=e,{user:a}=(0,g.f)(),{data:n,loading:l}=(0,p.t)(j,{variables:{accountId:a?.accountId,dataOwner:t,limit:200,optionsLimit:200},skip:i||!a?.accountId});return(0,u.useMemo)(()=>{let e=(n?.fields??[]).slice().sort((e,t)=>(e.internalName||e.name).localeCompare(t.internalName||t.name,void 0,{sensitivity:"base"})),t=e.map(e=>({field:(0,x.a)(e.id),headerName:e.internalName||e.name,width:160,sortable:!1})),i=t.map(e=>({value:e.field,label:e.headerName||"",width:e.width||160}));return{definitions:e,columns:t,options:i,loading:l,truncated:(n?.fields?.length??0)>=200}},[n,l])})({dataOwner:r.dataOwner,skip:r.skip}),{visibleColumns:k,pickerOptions:S,selectedOptions:E,applySelection:q,canPersist:O,isCustomized:M,visibleCount:A}=(e=>{let{stateKey:t,catalog:i,defaultFields:a,lockedFields:n=f}=e,l=!!t,[r,o,s]=(0,c.f)({key:t?`table-columns-${t}`:"table-columns-inactive",initialValue:{fields:a},storageType:l?"network":"state"}),d=!l||s,m=Array.isArray(r?.fields)&&r.fields.every(e=>"string"==typeof e)?r.fields:a,{visibleColumns:p,selectedOptions:g,pickerOptions:h,visibleCount:y,isCustomized:x}=(0,u.useMemo)(()=>{let e=new Set(n),t=new Set(m),l=i.filter(i=>e.has(i.field)||t.has(i.field)),r=e=>({value:e.field,label:e.headerName||"",width:e.width||100}),o=i.filter(t=>!e.has(t.field)),s=o.filter(e=>t.has(e.field)),d=new Set(a),u=m.length!==a.length||m.some(e=>!d.has(e));return{visibleColumns:l,selectedOptions:s.map(r),pickerOptions:o.map(r),visibleCount:s.length,isCustomized:u}},[i,m,a,n]);return{visibleColumns:p,pickerOptions:h,selectedOptions:g,applySelection:(0,u.useCallback)(e=>{if(!d)return;let t=new Set(i.map(e=>e.field));o({fields:[...m.filter(e=>!t.has(e)),...e.map(e=>e.value)]})},[d,i,m,o]),canPersist:d,isCustomized:x,visibleCount:y}})({stateKey:t,catalog:(0,u.useMemo)(()=>{let e=i.filter(e=>!l.has(e.field));return[...e.filter(e=>!n.includes(e.field)),...C,...e.filter(e=>n.includes(e.field))]},[i,C,l,n]),defaultFields:a,lockedFields:n}),F=(0,u.useMemo)(()=>k.map(e=>e.field),[k]),{columns:P,error:R}=(e=>{let{dataOwner:t,definitions:i,rowIds:a,visibleFields:n,ownerIdsByRow:l,skip:r}=e,{user:o}=(0,g.f)(),s=(0,y.f)(),d=(0,u.useMemo)(()=>{let e=new Set(n.filter(w));return i.filter(t=>e.has((0,x.a)(t.id)))},[i,n]),{data:c,loading:f,error:m}=(0,p.t)(_,{fetchPolicy:"cache-and-network",variables:{accountId:o?.accountId,dataOwner:t,rowIds:a,definitionIds:d.map(e=>e.id),limit:a.length*d.length},skip:r||!o?.accountId||0===d.length||0===a.length});return(0,u.useMemo)(()=>{let e=new Map((c?.values??[]).map(e=>[`${e.definitionId}:${e.dataOwnerId}`,e.value])),t=!c&&!m;return{columns:d.map(i=>{let a=(0,x.K)(i);return{field:(0,x.a)(i.id),headerName:i.internalName||i.name,width:160,sortable:!1,renderCell:n=>{let{row:r}=n;if(t||m)return"";let o=(l?l[r.id]??[]:[r.id]).map(t=>(0,h.r)(e.get(`${i.id}:${t}`),a,{currencySymbol:s})).filter(e=>e!==h.W);return o.length?1===o.length?o[0]:`${v.a}${v.B}${o.join(v.B)}`:h.W}}}),loading:f,error:m}},[d,c,f,m,s,l])})({...r,definitions:b,visibleFields:F});(0,u.useEffect)(()=>{R&&d.show({content:"Custom field values could not be loaded",severity:"error"})},[R,d]);let z=(0,u.useMemo)(()=>{let e=new Map(P.map(e=>[e.field,e.renderCell]));return k.map(t=>{let i=e.get(t.field);return i?{...t,renderCell:i}:t})},[k,P]),{nativeOptions:D,customFieldOptions:K}=(0,u.useMemo)(()=>({nativeOptions:S.filter(e=>!w(e.value)),customFieldOptions:S.filter(e=>w(e.value))}),[S]);return{gridColumns:z,visibleFields:F,modalProps:{open:o,onClose:()=>s(!1),options:D,customFieldOptions:K,isCustomOption:w,value:E,onApply:q,notice:$&&K.length>0?"Showing the first 200 custom fields.":void 0},buttonProps:{count:M?A:null,disabled:!O,onClick:()=>s(!0)}}}],284699)},772937,e=>{var t=e.i(391398),i=e.i(821627),a=e.i(849091),n=e.i(717803),l=e.i(605224),r=e.i(477882),o=e.i(886779),s=e.i(356119),d=e.i(706692),u=e.i(393172),c=e.i(586741),f=e.i(191788),m=e.i(280445),p=e.i(824451),g=e.i(917563),h=e.i(345837);let y=(0,f.createContext)({selectAll:!1,onToggleSelectAll:()=>{}}),x=e=>{let{children:i,...l}=e,{selectAll:o,onToggleSelectAll:s}=(0,f.useContext)(y);return(0,t.jsxs)(r.f,{...l,children:[(0,t.jsx)(g.f,{onMouseDown:e=>e.preventDefault(),pl:"25px",py:1,children:(0,t.jsx)(h.f,{label:"Select all",control:(0,t.jsx)(a.f,{color:"secondary",checked:o,onClick:e=>{e.preventDefault(),s()},style:{height:10,marginRight:8}})})}),(0,t.jsx)(n.f,{}),i]})},v="__customFieldsGroup__",b={value:v,label:"Custom fields",width:0},j=(0,m.f)(r.f)(e=>{let{theme:t,isScreen600pxOrLess:i}=e;return{maxWidth:"100vw",minWidth:i?"100%":500,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:`${t.spacing(2)} !important`}});e.s(["f",0,e=>{let{open:r,onClose:m,options:g,customFieldOptions:h=[],isCustomOption:_,value:w,onApply:T,notice:I}=e,C=(0,d.f)("(max-width: 600px)"),[$,k]=(0,f.useState)([]),[S,E]=(0,f.useState)(!1),[q,O]=(0,f.useState)(!1),[M,A]=(0,f.useState)(""),F=(0,f.useMemo)(()=>{if(_)return _;let e=new Set(h.map(e=>e.value));return t=>e.has(t)},[h,_]),P=(0,f.useCallback)(e=>g.length>0&&g.every(t=>e.some(e=>e.value===t.value)),[g]),R=(0,f.useMemo)(()=>h.length>0?[...g,b,...h]:g,[g,h]),z=(0,f.useCallback)(e=>{if(e.value===v)return!1;let t=M.trim().toLowerCase();return""!==t?e.label.toLowerCase().includes(t):q||!F(e.value)},[M,q,F]),D=(0,f.useMemo)(()=>$.filter(e=>F(e.value)),[$,F]),K=h.length>0&&h.every(e=>$.some(t=>t.value===e.value)),G=(0,f.useCallback)(()=>{k(e=>{let t=e.filter(e=>!g.some(t=>t.value===e.value));return S?t:[...g,...t]}),E(!S)},[S,g]),L=(0,f.useMemo)(()=>({selectAll:S,onToggleSelectAll:G}),[S,G]),N=(0,f.useRef)(!1),V=(0,f.useRef)(new Set);return(0,f.useEffect)(()=>{if(!r){N.current=!1,A(""),O(!1);return}N.current||(N.current=!0,V.current=new Set([...R.filter(e=>e.value!==v&&!F(e.value)),...w].map(e=>e.value)),k(w),E(P(w)))},[w,r,P,R,F]),(0,f.useEffect)(()=>{if(!r||!N.current)return;let e=V.current,t=w.filter(t=>!e.has(t.value));t.length&&(t.forEach(t=>e.add(t.value)),k(e=>[...e,...t.filter(t=>!e.some(e=>e.value===t.value))]))},[r,w]),(0,f.useEffect)(()=>{r&&N.current&&R.filter(z).forEach(e=>V.current.add(e.value))},[r,R,z]),(0,t.jsx)(l.f,{open:r,onClose:m,children:(0,t.jsxs)(j,{isScreen600pxOrLess:C,children:[(0,t.jsx)(s.f,{variant:"h6",component:"h2",children:"Columns"}),(0,t.jsx)(s.f,{variant:"body2",sx:{fontSize:12,color:"text.secondary",mt:1},children:"Select the columns you would like to see in the table."}),I&&(0,t.jsx)(s.f,{variant:"caption",sx:{display:"block",color:"text.secondary",mt:.5},children:I}),(0,t.jsx)(n.f,{sx:{mt:2}}),(0,t.jsx)(y.Provider,{value:L,children:(0,t.jsx)(p.f,{multiple:!0,disableCloseOnSelect:!0,label:"Columns",variant:"standard",color:"secondary",options:R,value:$,onInputChange:(e,t)=>A(t),filterOptions:(e,t)=>{let i=t.inputValue.trim().toLowerCase(),a=e=>e.label.toLowerCase().includes(i),n=e.filter(e=>!F(e.value)&&e.value!==v),l=e.filter(e=>F(e.value)),r=n.filter(a);if(0===h.length)return r;if(""!==i){let e=l.filter(a);return e.length>0?[...r,b,...e]:r}return q?[...n,b,...l]:[...n,b]},onChange:(e,t,i)=>{"selectOption"===i&&t.some(e=>e.value===v)?O(e=>!e):(E(P(t)),k(t))},renderOption:(e,i)=>i.value===v?(0,t.jsxs)("li",{...e,"aria-label":`Custom fields, ${q?"expanded":"collapsed"}`,onMouseDown:e=>e.preventDefault(),onClick:e=>{e.preventDefault(),e.stopPropagation(),O(e=>!e)},children:[(0,t.jsx)(a.f,{color:"secondary",checked:K,indeterminate:D.length>0&&!K,onClick:e=>{e.preventDefault(),e.stopPropagation(),k(e=>{if(h.every(t=>e.some(e=>e.value===t.value))){let t=new Set(h.map(e=>e.value));return e.filter(e=>!t.has(e.value))}let t=h.filter(t=>!e.some(e=>e.value===t.value));return[...e,...t]})},style:{height:10,marginRight:8}}),(0,t.jsx)("span",{style:{flexGrow:1},children:i.label}),q?(0,t.jsx)(c.default,{fontSize:"small"}):(0,t.jsx)(u.default,{fontSize:"small"})]}):(0,t.jsxs)("li",{...e,style:F(i.value)?{paddingLeft:32}:void 0,children:[(0,t.jsx)(a.f,{color:"secondary",checked:$.some(e=>e.value===i.value),style:{height:10,marginRight:8}}),i.label]}),sx:{mt:1,mb:1},PaperComponent:x})}),(0,t.jsxs)(o.f,{direction:"row",justifyContent:"flex-end",gap:2,mt:2,children:[(0,t.jsx)(i.f,{variant:"contained",color:"danger",onClick:m,children:"Cancel"}),(0,t.jsx)(i.f,{variant:"contained",color:"secondary",onClick:()=>{T($),m()},children:"Apply"})]})]})})}],772937)},631635,e=>{var t=e.i(391398),i=e.i(755548),a=e.i(76381),n=e.i(322135),l=e.i(587369),r=e.i(280445),o=e.i(451221);let s=(0,r.f)(i.f)({"& .MuiSvgIcon-root":{fontSize:20}});e.s(["f",0,e=>{let{label:r,icon:d,loading:u=!1,disabled:c,startIcon:f,children:m,...p}=e,g=(0,o.f)(),h=(0,l.f)(g.breakpoints.down("sm")),y=(0,t.jsx)(a.f,{size:20,color:"secondary"}),x=c||u;if(!h)return(0,t.jsx)(i.f,{...p,disabled:x,startIcon:u?void 0:f,children:u?y:m??r});let v=(0,t.jsx)(s,{...p,disabled:x,"aria-label":r,children:u?y:d});return x?v:(0,t.jsx)(n.f,{title:r,children:v})}])},218659,e=>{var t=e.i(391398),i=e.i(280445),a=e.i(115871),n=e.i(813843),l=e.i(755548),r=e.i(587369);let o=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:s={},imageSx:d={},title:u,titleSx:c={},subtitleFirstLine:f,subtitleFirstLineSx:m={},subtitleSecondLine:p,subtitleSecondLineSx:g={},buttonText:h,onAction:y}=e,x=(0,r.f)("(max-width: 400px)");return(0,t.jsxs)(n.f,{sx:{...s,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(o,{src:i,sx:{...d,width:x?"250px":"300px"}}),(0,t.jsx)(a.f,{typography:"h5",sx:{...c},children:u}),(0,t.jsxs)(n.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(a.f,{sx:{...m},children:f}),(0,t.jsx)(a.f,{sx:{...g},children:p})]}),h&&y&&(0,t.jsx)(l.f,{variant:"contained",color:"secondary",onClick:y,children:h})]})}])},526374,e=>{var t=e.i(391398),i=e.i(443103),a=e.i(776204),n=e.i(432171),l=e.i(247297),r=e.i(515523),o=e.i(987171),s=e.i(738251),d=e.i(76381),u=e.i(773831),c=e.i(388866),f=e.i(901004),m=e.i(522507),p=e.i(813843),g=e.i(652148),h=e.i(191788),y=e.i(514707),x=e.i(594301),v=e.i(21557),b=e.i(190844),j=e.i(886292),_=e.i(552987),w=e.i(731349),T=e.i(330774);let I=(0,o.t)(),C=(0,y.f)(m.U)({"& .MuiPaper-root":{borderRadius:"12px"}});e.s(["f",0,e=>{let{hideTagsList:o=!1,entityId:m,entity:y,values:$=[],name:k="tags",setValue:S=()=>{},refetchQueries:E=[],showAllTags:q=!1,preloadTags:O=!1,slaJobTimings:M=null,removeTagTarget:A}=e,{user:F}=(0,x.f)(),[P,R]=(0,h.useState)(null),[z,D]=(0,h.useState)(""),[K,G]=(0,h.useState)(""),L=(0,h.useRef)(null),N=!!P,V=(0,h.useCallback)(()=>{null!==L.current&&(clearTimeout(L.current),L.current=null)},[]),W=(0,h.useCallback)(e=>{V(),L.current=setTimeout(()=>{L.current=null,D(e)},500)},[V]);(0,h.useEffect)(()=>()=>V(),[V]);let H=(0,v.f)(),B=e=>{H.show({content:`Error: ${e.message}`,severity:"error"})},{data:{tags:J}={tags:[]},loading:Q}=(0,n.t)(j.J,{skip:!m||!N&&!O,variables:{entityId:m,entity:y},onCompleted:e=>{let{tags:t}=e;S(k,t)}}),{data:{tags:U}={tags:[]},loading:X}=(0,n.t)(j.r,{skip:!P,variables:{entityId:m??-1,entity:y,q:""!==z?`%${z}%`:null}}),[Y,{loading:Z}]=(0,a.f)(j.K,{refetchQueries:["GetEntityTags"],onError:B}),[ee,{loading:et}]=(0,a.f)(j.$,{refetchQueries:["GetEntityTags","GetTagsForEntity",...E],onError:B}),[ei,{loading:ea}]=(0,a.f)(j.R,{refetchQueries:["GetEntityTags","GetTagsForEntity",...E],onError:B}),[en,{loading:el}]=(0,a.f)(j.M,{refetchQueries:["GetEntityTags","GetTagsForEntity",...E],onError:B}),er=async(e,t)=>{if("string"==typeof t)return;let a=new Set(i.uniqBy([...J,...$],e=>e.tag?.id).map(e=>e.tag.id));if(t&&"inputValue"in t&&m)ee({variables:{objects:[{entity:y,entityId:m,Taxonomy:{data:{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:F.adminId}}}]}});else if(t&&"value"in t&&m){if(a.has(Number(t.value)))return;ee({variables:{objects:[{entity:y,entityId:m,taxonomyId:t.value}]}})}else if(t&&"inputValue"in t){let{data:e}=await Y({variables:{objects:[{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:F.adminId}]}});if(!e?.insert_Taxonomy?.returning[0])return;S(k,i.uniqBy([...$,{id:null,tag:{id:e.insert_Taxonomy.returning[0].id,name:e.insert_Taxonomy.returning[0].name,meta:e.insert_Taxonomy.returning[0].meta}}],e=>e.tag.id))}else t&&"value"in t&&t.value&&"label"in t&&t.label&&"meta"in t&&t.meta&&S(k,i.uniqBy([...$,{id:null,tag:{id:Number(t.value),name:t.label,meta:t.meta}}],e=>e.tag.id))},eo=(0,h.useCallback)((e,t)=>{let i=I(e,t),{inputValue:a}=t,n=e.some(e=>"label"in e&&a===e.label);return""===a||n||i.push({inputValue:a,label:`Add "${a}"`,value:a}),i},[]),es=(0,h.useCallback)(e=>"string"==typeof e?e:e.inputValue?e.inputValue:e.label,[]),ed=async e=>{let{tagId:t,color:i}=e,{data:a}=await en({variables:{tagId:t,object:{meta:{color:i}}}});a?.update_Taxonomy_by_pk&&S(k,$.map(e=>e.tag.id===t?{...e,tag:{...a?.update_Taxonomy_by_pk}}:e))},eu=async e=>{let{tagId:t,name:i}=e,{data:a}=await en({variables:{tagId:t,object:{name:i}}});a?.update_Taxonomy_by_pk&&S(i,$.map(e=>e.tag.id===t?{...e,tag:{...a?.update_Taxonomy_by_pk}}:e))},ec=(0,h.useMemo)(()=>i.uniqBy([...J,...$],e=>e.tag?.id),[J,$]),ef=(0,h.useMemo)(()=>U.filter(e=>!(0,T.f)(e)).filter(e=>!ec.some(t=>t.tag.id===e.id)).map(e=>({label:e.name,value:e.id,meta:e.meta})),[U,ec]),em=(0,h.useMemo)(()=>(0,w.R)(ec),[ec]);return(0,t.jsxs)(p.f,{direction:"row",alignItems:"center",children:[!o&&(0,t.jsx)(_.f,{tags:ec,handleDeleteTagEntity:e=>{if(m)return ei({variables:{tagEntityId:e}});S(k,$.filter((t,i)=>i!==e))},showAllTags:q,slaJobTimings:M,removeTagTarget:A}),(0,t.jsx)(C,{id:N?"tags-popover":void 0,open:N,anchorEl:P,onClose:()=>{V(),D(""),G(""),R(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsxs)(s.f,{sx:{maxHeight:"80vh",width:"280px",p:"10px",pt:"5px"},children:[(0,t.jsx)(r.f,{freeSolo:!0,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,clearOnEscape:!0,disabled:Q,inputValue:K,options:[...ef],onChange:(e,t)=>{if(null===t){V(),D(""),G("");return}"string"==typeof t||(V(),D(""),G("")),er(e,t)},onInputChange:(e,t,i)=>{if("input"===i){G(t),W(t);return}V(),D(""),"clear"===i||"reset"===i?G(""):G(t)},filterOptions:eo,getOptionLabel:es,renderOption:(e,i)=>(0,t.jsx)(f.f,{...e,children:i.label}),renderInput:e=>(0,t.jsx)(g.f,{...e,variant:"standard",color:"secondary",label:"Search tag",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[X||Z||et?(0,t.jsx)(d.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}}),sx:{pl:"16px",pr:"16px"}}),Q||ea||el?(0,t.jsx)(p.f,{width:"100%",alignItems:"center",p:4,children:(0,t.jsx)(d.f,{color:"secondary"})}):(0,t.jsx)(c.f,{children:em?.map(e=>{let i=(0,T.f)(e.tag);return(0,t.jsx)(b.f,{tagEntityId:e.id??e.tag.id,tagId:e.tag.id,name:e.tag.name,color:(0,w.f)(e.tag.meta),editable:!i,onDelete:o||i?void 0:()=>(e=>{if(m&&null!=e.id)return ei({variables:{tagEntityId:e.id}});S(k,$.filter(t=>t.tag.id!==e.tag.id))})(e),onColorChange:ed,onNameChange:eu},e.tag.id)})})]})}),(0,t.jsx)(u.f,{color:"black",onClick:e=>{e.stopPropagation(),V(),D(""),G(""),R(e.currentTarget)},children:(0,t.jsx)(l.default,{sx:{height:"16px",width:"16px"}})})]})}])},886292,e=>{var t=e.i(159080);let i=t.f`
  query GetTagsForEntity(
    $entityId: Int!
    $entity: String!
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    tags: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "tags" }
        _not: {
          _or: [
            { meta: { _contains: { isSystemTag: true } } }
            { meta: { _contains: { systemTagKey: "follow-on-job" } } }
            { meta: { _contains: { systemTagKey: "remedial-quote" } } }
            { meta: { _contains: { systemTagKey: "on-hold-job" } } }
            { meta: { _contains: { systemTagKey: "time-held" } } }
            { meta: { _contains: { systemTagKey: "sla-at-risk:job-report" } } }
            { meta: { _contains: { systemTagKey: "sla-at-risk:on-site" } } }
            { meta: { _contains: { systemTagKey: "sla-at-risk:quote-returned" } } }
            { meta: { _contains: { systemTagKey: "sla-breach:job-report" } } }
            { meta: { _contains: { systemTagKey: "sla-breach:on-site" } } }
            { meta: { _contains: { systemTagKey: "sla-breach:quote-returned" } } }
            { name: { _eq: "Follow on job" } }
            { name: { _eq: "Remedial quote" } }
            { name: { _eq: "On hold" } }
            { name: { _eq: "Time held" } }
            { meta: { _has_key: "systemTagKey" } }
            { Taxonomy_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } } }
          ]
        }
      }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      id
      name
      meta
    }
  }
`,a=t.f`
  mutation CreateTag($objects: [Taxonomy_insert_input!]!) {
    insert_Taxonomy(objects: $objects) {
      returning {
        id
        name
        meta
      }
    }
  }
`,n=t.f`
  query GetEntityTags($entityId: Int!, $entity: String!) {
    tags: Taxonomy_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Taxonomy: { status: { _eq: "active" }, type: { _eq: "tags" } }
      }
      order_by: { id: desc }
    ) {
      id
      createdAt
      meta
      tag: Taxonomy {
        id
        name
        meta
      }
    }
  }
`,l=t.f`
  query GetTagsForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { name: { _ilike: $q }, status: { _eq: "active" }, type: { _eq: "tags" } }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      value: id
      label: name
    }
  }
`,r=t.f`
  mutation CreateTagsAgainstEntity($objects: [Taxonomy_Entity_insert_input!]!) {
    insert_Taxonomy_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,o=t.f`
  mutation DeleteTagAgainstEntity($tagEntityId: Int!) {
    delete_Taxonomy_Entity_by_pk(id: $tagEntityId) {
      id
      taxonomyId
    }
  }
`,s=t.f`
  mutation UpdateTagAgainstEntity($tagId: Int!, $object: Taxonomy_set_input!) {
    update_Taxonomy_by_pk(pk_columns: { id: $tagId }, _set: $object) {
      id
      name
      meta
    }
  }
`,d=t.f`
  mutation CreateTagsAgainstEntityWithFollowing($objects: [Taxonomy_Entity_insert_input!]!) {
    insert_Taxonomy_Entity(objects: $objects) {
      returning {
        id
        taxonomyId
      }
    }
  }
`,u=t.f`
  mutation DeleteTagAgainstEntityWithFollowing($where: Taxonomy_Entity_bool_exp!) {
    delete_Taxonomy_Entity(where: $where) {
      returning {
        id
        taxonomyId
      }
    }
  }
`;e.s(["K",0,a,"$",0,r,"V",0,d,"R",0,o,"I",0,u,"J",0,n,"r",0,i,"T",0,l,"M",0,s])},360364,e=>{var t=e.i(391398),i=e.i(776204),a=e.i(738251),n=e.i(813843),l=e.i(886292),r=e.i(552987),o=e.i(526374),s=e.i(879572);e.s(["f",0,e=>{let{row:d,refetchQueries:u,entity:c,removeTagTarget:f}=e,[m]=(0,i.f)(l.R,{refetchQueries:["GetTaskTags",...u]}),p=async e=>{let{data:t}=await m({variables:{tagEntityId:e}});if(!t?.delete_Taxonomy_Entity_by_pk)throw Error("Tag could not be removed")},g={onSiteTimingEnd:d.onSiteTimingEnd,jobReportTimingEnd:d.jobReportTimingEnd,quoteReturnedTimingEnd:d.quoteReturnedTimingEnd},h=null!=d.parentJobNumber&&""!==d.parentJobNumber?{parentJobType:d.parentJobType??null,parentJobNumber:d.parentJobNumber}:null,y=null!=f?f:"Task"===c?"task":"Workflow"===c?"workflow":"Asset"===c?"asset":(0,s.p)(d.type);return(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",sx:{minWidth:0,width:"100%",columnGap:2},children:[(0,t.jsx)(a.f,{sx:{flex:"1 1 0%",minWidth:0,overflow:"hidden",pr:.5,direction:"ltr"},children:(0,t.jsx)(r.f,{expandToContainer:!0,tags:d.tags||[],handleDeleteTagEntity:p,slaJobTimings:g,ppmLinkRowFallback:h,removeTagTarget:y,listSx:{whiteSpace:"nowrap"}})}),(0,t.jsx)(a.f,{sx:{flexShrink:0,display:"flex",alignItems:"center",direction:"ltr"},children:(0,t.jsx)(o.f,{hideTagsList:!0,entityId:d.id,refetchQueries:u,entity:c})})]})}])},655477,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(422411),n=e.i(877341),l=e.i(515523),r=e.i(76381),o=e.i(652148),s=e.i(800884),d=e.i(886292),u=e.i(175872);let c=[];e.s(["f",0,e=>{let{control:f}=e,[m,p]=(0,i.useState)(""),[g,{loading:h,data:{items:y}={items:[]}}]=(0,n.f)(d.T,{variables:{q:""!==m?`%${m}%`:null}}),x=(0,u.f)(e=>p(e),500);return(0,t.jsx)(a.e,{control:f,name:"tags",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(l.f,{multiple:!0,limitTags:6,color:"secondary",onOpen:()=>g(),options:y,value:i||c,onChange:(e,t)=>{a(t)},onInputChange:(e,t)=>{x(t)},getOptionLabel:e=>e.label,renderTags:(e,i)=>e.map((e,a)=>(0,t.jsx)(s.f,{size:"small",label:e.label,...i({index:a})})),isOptionEqualToValue:(e,t)=>e.value===t.value,renderInput:e=>(0,t.jsx)(o.f,{...e,variant:"standard",color:"secondary",label:"Select tags",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[h?(0,t.jsx)(r.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})}})}])},413452,e=>{e.s(["f",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=>!0===e[t]}])},239964,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(691567),n=e.i(773831),l=e.i(33670),r=e.i(901004),o=e.i(509790),s=e.i(692113),d=e.i(137995),u=e.i(817581),c=e.i(420),f=e.i(870307),m=e.i(407329),p=e.i(390536),g=e.i(978319),h=e.i(376733),y=e.i(13558),x=e.i(562673),v=e.i(339909),b=e.i(89029),j=e.i(129503),_=e.i(213419),w=e.i(12028),T=e.i(813843),I=e.i(115871);let C={add:(0,t.jsx)(u.default,{}),archive:(0,t.jsx)(s.default,{}),avatar:(0,t.jsx)(w.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(f.default,{}),delete:(0,t.jsx)(g.default,{}),description:(0,t.jsx)(m.default,{}),download:(0,t.jsx)(p.default,{}),info:(0,t.jsx)(y.default,{}),edit:(0,t.jsx)(h.default,{}),location:(0,t.jsx)(b.default,{}),unarchive:(0,t.jsx)(d.default,{}),uploadFile:(0,t.jsx)(x.default,{}),receipt:(0,t.jsx)(v.default,{}),visibility:(0,t.jsx)(_.default,{})},$={default:(0,t.jsx)(o.default,{}),defaultHoriz:(0,t.jsx)(j.default,{}),description:(0,t.jsx)(m.default,{})},k=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],S=e=>{let{actionsData:a=k,icon:o="default",row:s,disabled:d=!1}=e,[u,c]=(0,i.useState)(null),f=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:d,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:$[o]}),(0,t.jsx)(l.f,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:!!u,onClose:f,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:a(s).map((e,i)=>(0,t.jsx)(r.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),f()},sx:{pl:3,pr:4},children:(0,t.jsxs)(T.f,{direction:"row",alignItems:"center",spacing:2,children:[C?.[e.icon]||null,(0,t.jsx)(I.f,{children:e.tooltip})]})},i))})]})};S.propTypes={actionsData:a.default.func,icon:a.default.oneOf(["default","description"]),row:a.default.any.isRequired,disabled:a.default.bool},e.s(["f",0,S])},52796,25246,e=>{let t="customField_",i=e=>e.startsWith(t);e.s(["a",0,e=>`${t}${e}`,"$",0,e=>{if(!i(e))return null;let a=e.slice(t.length);if(!/^\d+$/.test(a))return null;let n=Number(a);return n>0?n:null},"K",0,e=>({id:e.id,name:e.name,helpText:null,fieldSubtype:e.fieldSubtype??null,dataOwner:null,required:!1,defaultValue:null,config:null,options:(e.options??[]).map(e=>({...e,active:!0}))}),"I",0,i],52796);let a="Multiple",n=e=>null==e?[]:Array.isArray(e)?[...e]:[e];e.s(["R",0,"-","a",0,a,"B",0," / ","$",0,(e,t)=>{let i=n(e);if(!i.length)return"-";let l=[...new Set(i.map(e=>null==e?"-":t(e)))],[r]=l;return 1===l.length&&void 0!==r?r:[a,...l].join(" / ")},"j",0,e=>"object"==typeof e&&null!==e&&Array.isArray(e.__multiOwner),"L",0,n],25246)},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=i.currencySymbol??"£",a="number"==typeof e?e.toFixed(2):String(e);return`${t}${a}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let i=t.options.find(t=>t.value===e);return i?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let i=t.options.find(t=>t.value===e);return i?.label??e}).join(", ");default:return String(e)}}])},724128,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),l=e.r(391398);i.default=(0,n.default)((0,l.jsx)("path",{d:"M4.25 5.61C6.57 8.59 10 13 10 13v5c0 1.1.9 2 2 2s2-.9 2-2v-5s3.43-4.41 5.75-7.39c.51-.66.04-1.61-.8-1.61H5.04c-.83 0-1.3.95-.79 1.61"}),"FilterAltRounded")},586741,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),l=e.r(391398);i.default=(0,n.default)((0,l.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp")},247297,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),l=e.r(391398);i.default=(0,n.default)([(0,l.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,l.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},870307,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),l=e.r(391398);i.default=(0,n.default)([(0,l.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,l.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},810142,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),l=e.r(391398);i.default=(0,n.default)((0,l.jsx)("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"StorageOutlined")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},717803,e=>{var t=e.i(986351);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}])})();