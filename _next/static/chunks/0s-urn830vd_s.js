(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,497844,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(773831),r=e.i(33670),o=e.i(901004),n=e.i(509790),s=e.i(692113),l=e.i(137995),u=e.i(817581),d=e.i(420),c=e.i(407329),m=e.i(390536),f=e.i(978319),$=e.i(376733),y=e.i(13558),_=e.i(562673),q=e.i(339909),p=e.i(89029),b=e.i(129503),v=e.i(213419),h=e.i(12028),I=e.i(813843),g=e.i(115871),S=e.i(379500);let x={add:(0,t.jsx)(u.default,{}),archive:(0,t.jsx)(s.default,{}),avatar:(0,t.jsx)(h.default,{}),check:(0,t.jsx)(d.default,{}),delete:(0,t.jsx)(f.default,{}),description:(0,t.jsx)(c.default,{}),download:(0,t.jsx)(m.default,{}),info:(0,t.jsx)(y.default,{}),edit:(0,t.jsx)($.default,{}),location:(0,t.jsx)(p.default,{}),unarchive:(0,t.jsx)(l.default,{}),uploadFile:(0,t.jsx)(_.default,{}),receipt:(0,t.jsx)(q.default,{}),visibility:(0,t.jsx)(v.default,{}),cancel:(0,t.jsx)(S.default,{})},T={default:(0,t.jsx)(n.default,{}),defaultHoriz:(0,t.jsx)(b.default,{}),description:(0,t.jsx)(c.default,{})};e.s(["f",0,e=>{let{actions:n,icon:s="default",disabled:l}=e,[u,d]=(0,i.useState)(null),c=()=>{d(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(a.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:l,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),d(e.currentTarget)},children:T[s]}),(0,t.jsx)(r.f,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:!!u,onClose:c,slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:n.map((e,i)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),c()},sx:{pl:3,pr:4},children:(0,t.jsxs)(I.f,{direction:"row",alignItems:"center",spacing:2,children:[e.icon?x[e.icon]:null,(0,t.jsx)(g.f,{children:e.tooltip})]})},i))})]})}])},708051,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(800884),r=e.i(280445),o=e.i(813762),n=e.i(529292);let s=(0,r.f)(a.f,{shouldForwardProp:e=>"chipColor"!==e&&"textColor"!==e})(e=>{let{chipColor:t,textColor:i,variant:a}=e,r="outlined"===a;return{fontSize:"11px",color:r?t:i,backgroundColor:r?"transparent":t,border:r?`1px solid ${t}`:void 0,borderRadius:"0px 16px 16px 0px",...r&&{"& .MuiChip-icon":{color:t,fontSize:"14px",marginLeft:"6px"}}}});e.s(["f",0,e=>{let a,{chipProps:r={},tagEntityId:l,name:u,color:d,tooltipTitle:c,variant:m="filled",icon:f,onDelete:$}=e,y=d||"#f2f2f2",_=(0,i.useMemo)(()=>"function"==typeof $?{...r,onDelete:e=>{e.stopPropagation(),$(l)}}:{...r},[r,$,l]),q=(0,t.jsx)(s,{..._,size:"small",label:u,icon:f,variant:m,chipColor:y,textColor:(a=y,(0,n.G)(a,"#FFFFFF")>2.5?"#FFFFFF":"#000")});return c?(0,t.jsx)(o.l,{title:c,children:(0,t.jsx)("span",{style:{display:"inline-flex"},children:q})}):q}],708051)},190844,e=>{var t=e.i(391398),i=e.i(773831),a=e.i(715007),r=e.i(34121),o=e.i(40303),n=e.i(813843),s=e.i(652148),l=e.i(512057),u=e.i(469908),d=e.i(497844),c=e.i(514707),m=e.i(191788),f=e.i(422411);let $=(0,c.f)(o.f)(e=>{let{color:t}=e;return{"&.MuiListItemText-root .MuiListItemText-primary":{fontWeight:700,color:t||void 0}}});e.s(["f",0,e=>{let{tagEntityId:o,tagId:c,name:y,color:_,editable:q=!0,onDelete:p=()=>{},onColorChange:b=()=>{},onNameChange:v=()=>{}}=e,{register:h,handleSubmit:I}=(0,f.G)({defaultValues:{name:y,color:_}}),[g,S]=(0,m.useState)(null),x=(0,m.useMemo)(()=>[{icon:"delete",onClick:e=>{e.stopPropagation(),p(o)},tooltip:"Remove"},{icon:"edit",onClick:e=>{e.stopPropagation(),S("rename")},tooltip:"Rename"},{icon:"visibility",onClick:e=>{e.stopPropagation(),S("changeColor")},tooltip:"Change color"}],[o,p]),T=e=>{e.stopPropagation(),S(null)},j=e=>{let{color:t}=e;b({tagId:c,color:t}),S(null)},w=e=>{let{name:t}=e;v({tagId:c,name:t}),S(null)};return(0,t.jsx)(a.f,{disablePadding:!0,secondaryAction:!q||!g&&(0,t.jsx)(d.f,{icon:"defaultHoriz",actions:x}),children:g?({changeColor:()=>(0,t.jsxs)(n.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",pl:"16px",pr:"16px",children:[(0,t.jsx)("input",{name:"color",ref:h,type:"color",style:{padding:0,border:"none",backgroundColor:"unset"}}),(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(i.f,{size:"small",color:"danger",onClick:T,children:(0,t.jsx)(l.default,{})}),(0,t.jsx)(i.f,{size:"small",color:"success",onClick:I(j),children:(0,t.jsx)(u.default,{})})]})]}),rename:()=>(0,t.jsxs)(n.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",pl:"16px",pr:"16px",children:[(0,t.jsx)(s.f,{name:"name",inputRef:h,variant:"standard",color:"secondary"}),(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(i.f,{size:"small",color:"danger",onClick:T,children:(0,t.jsx)(l.default,{})}),(0,t.jsx)(i.f,{size:"small",color:"success",onClick:I(w),children:(0,t.jsx)(u.default,{})})]})]})})[g]():(0,t.jsx)(r.f,{children:(0,t.jsx)($,{primary:y,color:_||void 0})})},c)}])},552987,879572,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(738251),r=e.i(115871),o=e.i(522507),n=e.i(388866),s=e.i(813843),l=e.i(21557),u=e.i(708051),d=e.i(190844),c=e.i(755548),m=e.i(382161),f=e.i(77052),$=e.i(185758),y=e.i(556918);let _={reactive:"This tag will be removed from the reactive job.",ppm:"This tag will be removed from the PPM job.",quote:"This tag will be removed from the quote.",task:"This tag will be removed from the task.",workflow:"This tag will be removed from the workflow.",asset:"This tag will be removed from the asset."},q=e=>{let{open:i,onClose:a,onConfirm:o,target:n="reactive"}=e;return(0,t.jsxs)(m.f,{open:i,onClose:a,children:[(0,t.jsx)(y.f,{children:"Remove tag?"}),(0,t.jsx)($.f,{children:(0,t.jsx)(r.f,{children:_[n]})}),(0,t.jsxs)(f.f,{children:[(0,t.jsx)(c.f,{color:"secondary",variant:"contained",onClick:a,children:"Cancel"}),(0,t.jsx)(c.f,{color:"danger",variant:"contained",onClick:o,children:"Remove"})]})]})};e.s(["o",0,q,"p",0,function(e){return"quote"===e?"quote":"ppm"===e?"ppm":"reactive"}],879572);var p=e.i(731349),b=e.i(330774),v=e.i(97969),h=e.i(770614),I=e.i(330499),g=e.i(913918);let S=(0,i.createElement)(g.default);e.s(["f",0,e=>{let{tags:c=[],handleDeleteTagEntity:m,readOnly:f=!1,slaJobTimings:$,ppmLinkRowFallback:y,removeTagTarget:_="reactive",showAllTags:g=!1,expandToContainer:x=!1,clipLeadingWhenNarrow:T=!1,listSx:j}=e,w=(0,l.f)(),[k,A]=(0,i.useState)(null),[C,F]=(0,i.useState)({open:!1,tagEntityId:null}),L=(0,i.useMemo)(()=>c.map(e=>{let t={...(0,v.r)(e.tag.meta,e.meta)??e.tag.meta??{},...(0,h.q)(e.tag.meta,e.meta)??{}};return{...e,tag:{...e.tag,meta:t}}}),[c]),G=(0,i.useMemo)(()=>{let e=(0,p.R)(L);return(0,v.y)(e,e=>(0,p.N)(e??void 0)||(0,p.z)(e??void 0)||(0,h.K)(e??void 0)||(0,I.f)(e??void 0))},[L]),M=g?G:G?.slice(0,5),U=g?0:(G?.length??0)-(M?.length??0),P=!!k,N=f?void 0:e=>{F({open:!0,tagEntityId:e})},z=()=>{F({open:!1,tagEntityId:null})},H=async()=>{let{tagEntityId:e}=C;if(null==e||!m)return void z();try{await m(e),z()}catch(t){let e=t instanceof Error?t.message:"Failed to remove tag";w.show({content:`Error: ${e}`,severity:"error"})}},O=M.map((e,i)=>{var a;let r=(0,h.K)(e.tag.meta)?(0,h.b)(e.tag.name,e.tag.meta):(0,v._)(e.tag.name,e.tag.meta,y),o=(0,v.I)(e.tag.name,e.tag.meta,y)??(0,h.l)(e.tag.meta)??(0,I.n)(e.tag.meta)??(0,p.A)(e.tag.meta,$,e.createdAt),n=(a=e.tag.meta,(0,I.f)(a)?{variant:"outlined",icon:S}:null),s=(0,v.e)(e.tag.meta,e.tag.name)??(0,p.f)(e.tag.meta),l=!(0,b.f)(e.tag);return(0,t.jsx)(u.f,{tagEntityId:e.id||i,name:r,color:s,tooltipTitle:o,variant:n?.variant,icon:n?.icon,onDelete:l?N:void 0},e.id)}),R=!g&&U>0?(0,t.jsxs)(r.f,{component:"span",fontWeight:700,onMouseEnter:e=>{A(e.currentTarget),e.stopPropagation()},children:["+",U]}):null;return(0,t.jsxs)(a.f,{sx:{minWidth:0,...T?{direction:"ltr",display:"inline-flex",width:"max-content",verticalAlign:"middle"}:{maxWidth:"100%"},...x&&!T?{width:"100%"}:{}},children:[!f&&(0,t.jsx)(q,{open:C.open,onClose:z,onConfirm:()=>void H(),target:_}),g?(0,t.jsx)(a.f,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",gap:1,...j},children:O}):(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:1,sx:{flexWrap:"nowrap",minWidth:0,overflow:T?"visible":"hidden","& .MuiChip-root":{flexShrink:0},...j},children:[O,R]}),!g&&U>0&&(0,t.jsx)(o.U,{id:P?"tags-in-table-popover":void 0,open:P,anchorEl:k,onClose:()=>A(null),anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsx)(n.f,{children:G?.map(e=>(0,t.jsx)(d.f,{tagEntityId:e.id,tagId:e.tag.id,name:(0,h.K)(e.tag.meta)?(0,h.b)(e.tag.name,e.tag.meta):(0,v._)(e.tag.name,e.tag.meta,y),color:(0,v.e)(e.tag.meta,e.tag.name)??(0,p.f)(e.tag.meta),editable:!1},e.tag.id))})})]})}],552987)},770614,e=>{let t="on-hold-job",i="On hold";function a(e){return e?.systemTagKey===t}function r(e,a){let r=a?.systemTagKey??(e===i?t:null);return r&&r===t?{...a,systemTagKey:r,jobHoldReasonLabel:a?.jobHoldReasonLabel??null,jobHoldReasonValue:a?.jobHoldReasonValue??null}:null}e.s(["j",0,t,"T",0,i,"b",0,function(e,t){let i=r(e,t);if(!i)return e;let a=i.jobHoldReasonLabel?.trim();return a?`${e}: ${a}`:e},"l",0,function(e){if(!a(e))return null;let t=r(i,e);if(!t)return null;let o=t.jobHoldReasonLabel?.trim();return o?`This job is on hold: ${o}.`:"This job is currently on hold."},"K",0,a,"p",0,function(e){return!!e&&(!!a(e.meta??void 0)||e.name===i)},"q",0,function(e,t){return e||t?{...e,...t,systemTagKey:t?.systemTagKey??e?.systemTagKey,jobHoldReasonLabel:t?.jobHoldReasonLabel??e?.jobHoldReasonLabel??null,jobHoldReasonValue:t?.jobHoldReasonValue??e?.jobHoldReasonValue??null,color:e?.color??t?.color}:null}])},97969,e=>{var t=e.i(946028),i=e.i(494575);let a="follow-on-job",r="remedial-quote",o="Follow on job",n="Remedial quote",s=new Set([a,r]),l=i.f.COLOUR.help,u=i.f.COLOUR.success;function d(e){let t=e?.systemTagKey;return!!t&&s.has(t)}function c(e){return!!e&&(!!d(e.meta??void 0)||e.name===o||e.name===n)}function m(e,t){return e||t?{...e,...t,systemTagKey:t?.systemTagKey??e?.systemTagKey,parentJobType:t?.parentJobType??e?.parentJobType,parentJobNumber:t?.parentJobNumber??e?.parentJobNumber,color:e?.color??t?.color}:null}function f(e,t,i){let l=t?.systemTagKey??(e===o?a:e===n?r:null);return l&&s.has(l)?{...t,systemTagKey:l,parentJobType:t?.parentJobType??i?.parentJobType??null,parentJobNumber:t?.parentJobNumber??i?.parentJobNumber??null}:null}function $(e,i,r){let o=f(e,i,r);if(!o)return e;let n=function(e){let i=e.parentJobNumber;if(!i)return null;if(e.systemTagKey===a){let t="ppm"===e.parentJobType?"PM":"reactive"===e.parentJobType?"J":"";return t?`${t} ${i}`:i}let r=(0,t.f)(e.parentJobType);return r?`${r} ${i}`:i}(o);return n?`${e}: ${n}`:e}e.s(["T",0,function(e,t){return e?.length?e.map(e=>{let i=m(e.tag.meta,e.meta);return $(e.tag.name,i,t)}).join(", "):"-"},"_",0,$,"I",0,function(e,i,o){let n=f(e,i,o);if(!n)return null;let s=n.parentJobNumber,l=(0,t.f)(n.parentJobType),u=s&&l?`${l} ${s}`:s??"—";return n.systemTagKey===r?`Remedial quote raised from parent work order ${u}.`:n.systemTagKey===a?`Follow-on work linked to parent job ${u}.`:null},"W",0,c,"r",0,m,"w",0,function(e){let t=e.parentJob;return t?.number==null||""===t.number?null:{parentJobType:t.type??null,parentJobNumber:String(t.number)}},"e",0,function(e,t){let i=t?f(t,e):e&&d(e)?e:null;return i?.systemTagKey===r?u:i?.systemTagKey===a?l:e?.color},"$",0,f,"y",0,function(e,t){let i=[],a=[],r=[];for(let o of e)t(o.tag.meta??void 0)?i.push(o):c(o.tag)?a.push(o):r.push(o);return[...i,...a,...r]}])},731349,330499,e=>{var t=e.i(494575),i=e.i(65295);function a(e){return e?.systemTagKey==="time-held"}function r(e){return e?.color||"#0EA5E9"}e.s(["n",0,function(e){return a(e)?"Attendance time is held for a supplier offer on this job.":null},"f",0,a,"W",0,function(e){return!!e&&(!!a(e.meta??void 0)||"Time held"===e.name)},"k",0,r],330499);let o=new Set(["sla-at-risk:job-report","sla-at-risk:on-site","sla-at-risk:quote-returned","sla-breach:job-report","sla-breach:on-site","sla-breach:quote-returned"]),n=new Set(["sla-at-risk:job-report","sla-at-risk:on-site","sla-at-risk:quote-returned"]),s=new Set(["sla-breach:job-report","sla-breach:on-site","sla-breach:quote-returned"]),l=t.f.muiTheme.palette.secondary.main;function u(e){let t=e?.systemTagKey;return!!t&&o.has(t)}function d(e){return e?.systemTagKey==="outstanding-quote"}let c={"sla-at-risk:job-report":"Job report","sla-at-risk:on-site":"On site","sla-at-risk:quote-returned":"Quote returned"},m={"sla-breach:job-report":"Job report","sla-breach:on-site":"On site","sla-breach:quote-returned":"Quote returned"},f={"sla-at-risk:job-report":"jobReportTimingEnd","sla-at-risk:on-site":"onSiteTimingEnd","sla-at-risk:quote-returned":"quoteReturnedTimingEnd"};e.s(["A",0,function(e,t,a){if(d(e)){let t="number"==typeof e?.quoteId?` #${e.quoteId}`:"";return`Outstanding quote${t}: this asset is linked to a quote that is awaiting decision.`}return function(e,t){let a,r=e?.systemTagKey;if(!r||!n.has(r))return null;let o=c[r];if(!o)return null;let s=(a=f[r])&&t&&null!=t[a]?t[a]:e?.slaDueAt??e?.dueAt??void 0,l="sla-at-risk:quote-returned"===r?"quote":"job",u="—";return s&&(u=(0,i.f)(s,!0)||"—"),`This ${l} is at risk of breaching its ${o} SLA — due by ${u}.`}(e,t)??function(e,t){let a=e?.systemTagKey;if(!a||!s.has(a))return null;let r=m[a];if(!r)return null;let o="sla-breach:quote-returned"===a?"quote":"job",n=e?.slaBreachedAt??e?.breachedAt??t??void 0,l="—";return n&&(l=(0,i.f)(n,!0)||"—"),`This ${o} has breached its ${r} SLA — breached at ${l}.`}(e,a)},"g",0,function(e){return e?.isSystemTag===!0||!!e?.systemTagKey},"z",0,d,"N",0,u,"y",0,function(e){return!!e&&u(e.meta??void 0)},"f",0,function(e){var t,i;let o,u;return d(e??void 0)?l:(t=e??void 0,(o=t?.systemTagKey)&&s.has(o))?"hsl(337, 92.50%, 47.30%)":(i=e??void 0,(u=i?.systemTagKey)&&n.has(u))?"#FF9800":a(e??void 0)?r(e):e?.color},"R",0,function(e){let t=[],i=[];for(let a of e)u(a.tag.meta??void 0)||d(a.tag.meta??void 0)?t.push(a):i.push(a);return[...t,...i]}],731349)},330774,e=>{var t=e.i(770614),i=e.i(97969),a=e.i(731349),r=e.i(330499);e.s(["f",0,function(e){return!!e&&((0,a.g)(e.meta)||(0,i.W)(e)||(0,t.p)(e)||(0,r.W)(e)||(0,a.y)(e)||"Outstanding quote"===e.name)}])},813762,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(738251),r=e.i(322135),o=e.i(13558);e.s(["p",0,e=>{let{title:n,iconSx:s,tooltipProps:l,ariaLabel:u="More information",focusable:d=!0}=e,[c,m]=(0,i.useState)(!1);return(0,t.jsx)(r.f,{arrow:!0,...l,describeChild:!0,title:n,open:c,onClose:()=>m(!1),disableFocusListener:!0,disableTouchListener:!0,children:(0,t.jsx)(a.f,{component:"span",role:d?"button":void 0,tabIndex:d?0:void 0,"aria-label":d?u:void 0,onClick:()=>m(!c),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onFocus:d?()=>m(!0):void 0,onBlur:d?()=>m(!1):void 0,onKeyDown:d?e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),m(e=>!e))}:void 0,sx:{display:"inline-flex",cursor:"pointer",fontSize:"1.5rem",...s},children:(0,t.jsx)(o.default,{fontSize:"inherit"})})})},"l",0,e=>{let{title:i,children:a,tooltipProps:o}=e;return(0,t.jsx)(r.f,{arrow:!0,placement:"top",...o,title:i,children:a})}])},851123,e=>{var t=e.i(159080);let i=t.f`
  query GetComplianceCategoriesForSelect(
    $q: String
    $type: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Taxonomy(
      where: { type: { _eq: $type }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,a=t.f`
  query GetSublocationsForSelect($locationId: Int, $q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Sublocation(
      where: { name: { _ilike: $q }, locationId: { _eq: $locationId }, active: { _eq: true } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      value: id
      label: name
    }
  }
`,r=t.f`
  query GetSublocationsForSelectMultipleLocation(
    $locationIds: [Int]
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Sublocation(
      where: { name: { _ilike: $q }, locationId: { _in: $locationIds }, active: { _eq: true } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      value: id
      label: name
    }
  }
`,o=t.f`
  query GetAssetsCategoryForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: {
        type: { _eq: "assetCategory" }
        isGroup: { _eq: false }
        status: { _eq: "active" }
        name: { _ilike: $q }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,n=t.f`
  query GetAssetsCategoryWithWhere($where: Taxonomy_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,s=t.f`
  query GetAssetsForSelect(
    $locationId: Int
    $sublocationId: Int
    $categoryId: Int
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Asset(
      where: {
        categoryId: { _eq: $categoryId }
        locationId: { _eq: $locationId }
        sublocationId: { _eq: $sublocationId }
        name: { _ilike: $q }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,l=t.f`
  query GetAdminCompliancesForSelect(
    $q: String
    $type: String = "complianceCategory"
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Compliance(
      where: {
        name: { _ilike: $q }
        locationId: { _is_null: true }
        supplierId: { _is_null: true }
        status: { _eq: "active" }
        type: { _eq: "admin" }
        ComplianceCategory: { type: { _eq: $type } }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
      category: ComplianceCategory {
        value: id
        label: name
      }
    }
  }
`,u=t.f`
  query GetUsersForSelect($accountId: Int, $q: String, $limit: Int = 50, $offset: Int = 0) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          accountId: { _eq: $accountId }
          isContact: { _eq: true }
          status: { _eq: "active" }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
    }
  }
`;t.f`
  query GetUsersForSelectMultiple(
    $accountIds: [Int]
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          accountId: { _in: $accountIds }
          isContact: { _eq: true }
          status: { _eq: "active" }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
    }
  }
`;let d=t.f`
  query GetCounterpartyUsersForSendTo(
    $accountType: String!
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        meta: { _contains: { notificationSettings: { email: true } } }
        Account_Users: {
          status: { _eq: "active" }
          isContact: { _eq: true }
          Account: { type: { _eq: $accountType }, status: { _eq: "active" } }
        }
        _or: [
          { fullName: { _ilike: $q } }
          { nameFirst: { _ilike: $q } }
          { nameLast: { _ilike: $q } }
          { email: { _ilike: $q } }
        ]
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
      email
    }
  }
`;t.f`
  query GetTenantsForSelect($q: String, $locationId: Int, $limit: Int = 50, $offset: Int = 0) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { Account: { type: { _eq: "tenant" } }, status: { _eq: "active" } }
        TenantBookings: { locationId: { _eq: $locationId } }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`;let c=t.f`
  query GetTenantsForSelectMultiple(
    $q: String
    $locationIds: [Int]
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { Account: { type: { _eq: "tenant" } }, status: { _eq: "active" } }
        TenantBookings: { locationId: { _in: $locationIds } }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`,m=t.f`
  query GetAccountsForSelect($where: Account_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,f=t.f`
  query GetAccountsForSendTo($where: Account_bool_exp, $limit: Int = 50, $offset: Int = 0) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
      usersMeta: Account_Users_aggregate(
        where: {
          status: { _eq: "active" }
          User: { meta: { _contains: { notificationSettings: { email: true } } } }
        }
      ) {
        aggregate {
          count
        }
      }
    }
  }
`,$=t.f`
  query GetLocationsForSelect($q: String, $customerId: Int, $limit: Int = 50, $offset: Int = 0) {
    items: Location(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        Account_Locations: { accountId: { _eq: $customerId } }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
      registeredAddress: Addresses(
        where: { entity: { _eq: "Location" }, registered: { _eq: true } }
      ) {
        address: Address {
          id
          addressLine1
          addressLine2
          addressLine3
          county
          country: Country {
            name
          }
          postCode
          city
        }
      }
    }
  }
`,y=t.f`
  query GetLocationsForCustomerUserForSelect(
    $q: String
    $customerId: Int
    $customerUserId: Int
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Location(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        _or: [
          {
            Account_Locations: {
              accountId: { _eq: $customerId }
              Account: {
                type: { _eq: "customer" }
                Account_Users: { role: { _neq: "user" }, userId: { _eq: $customerUserId } }
              }
            }
          }
          {
            Account_Locations: {
              accountId: { _eq: $customerId }
              Account: {
                type: { _eq: "customer" }
                Account_Users: { role: { _eq: "user" }, userId: { _eq: $customerUserId } }
              }
              User_Account_Locations: {
                Account_User: { userId: { _eq: $customerUserId }, accountId: { _eq: $customerId } }
              }
            }
          }
        ]
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
      registeredAddress: Addresses(
        where: { entity: { _eq: "Location" }, registered: { _eq: true } }
      ) {
        address: Address {
          id
          addressLine1
          addressLine2
          addressLine3
          county
          country: Country {
            name
          }
          postCode
          city
        }
      }
    }
  }
`,_=t.f`
  query GetPostCodeAreasForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: PostcodeArea(where: { name: { _ilike: $q } }, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,q=t.f`
  query GetAddressesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Address(
      where: {
        _or: [{ name: { _ilike: $q } }, { addressLine1: { _ilike: $q } }, { city: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      value: id
      name
      addressLine1
      city
    }
  }
`,p=t.f`
  query GetIssueTypesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { type: { _eq: "issueType" }, name: { _ilike: $q } }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
    }
  }
`,b=t.f`
  query GetShortJobDescriptionForSelect(
    $q: String
    $limit: Int = 50
    $offset: Int = 0
    $orderBy: [Taxonomy_order_by!]
  ) {
    items: Taxonomy(
      where: { type: { _eq: "jobTags" }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,v=t.f`
  query GetQuoteSummaryForSelect(
    $q: String
    $limit: Int = 50
    $offset: Int = 0
    $orderBy: [Taxonomy_order_by!]
  ) {
    items: Taxonomy(
      where: { type: { _eq: "quoteSummary" }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,h=t.f`
  query GetServicesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Service(
      where: { name: { _ilike: $q }, status: { _eq: "active" } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,I=t.f`
  query GetCostCategoriesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { type: { _eq: "costCategory" }, status: { _eq: "active" }, name: { _ilike: $q } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,g=t.f`
  query GetTaxonomyChildrenForSelect(
    $q: String
    $parentId: Int!
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: Taxonomy(
      where: { status: { _eq: "active" }, name: { _ilike: $q }, parentId: { _eq: $parentId } }
      order_by: { id: desc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,S=t.f`
  query GetClientTypesForSelect($q: String, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: {
        type: { _eq: "clientType" }
        status: { _eq: "active" }
        name: { _ilike: $q }
        isGroup: { _eq: false }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,x=t.f`
  query GetTaxonomyForSelect(
    $where: Taxonomy_bool_exp
    $limit: Int
    $offset: Int
    $orderBy: Taxonomy_order_by!
    $includeMeta: Boolean! = false
  ) {
    items: Taxonomy(where: $where, limit: $limit, offset: $offset, order_by: [$orderBy]) {
      value: id
      label: name
      meta @include(if: $includeMeta)
    }
  }
`,T=t.f`
  query GetPropertiesForSelect($where: Location_bool_exp, $limit: Int, $offset: Int) {
    items: Location(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
      access
      permitsRequired
      registeredAddress: Addresses(
        where: { entity: { _eq: "Location" }, registered: { _eq: true } }
      ) {
        address: Address {
          id
          addressLine1
          addressLine2
          addressLine3
          county
          country: Country {
            name
          }
          postCode
          city
        }
      }
    }
  }
`,j=t.f`
  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      label: name
      value: id
    }
  }
`,w=t.f`
  query GetCompliancesCategoryParentForSelect($q: String, $limit: Int, $offset: Int) {
    items: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "complianceCategory" }
        isGroup: { _eq: false }
      }
      order_by: [{ id: desc }]
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
    }
  }
`,k=t.f`
  query GetCompliancesCategoryForSelect($q: String, $limit: Int, $offset: Int) {
    items: Compliance(
      where: { name: { _ilike: $q }, status: { _eq: "active" } }
      order_by: [{ id: desc }]
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
    }
  }
`,A=t.f`
  query GetActiveFormsForSelect($q: String!, $limit: Int = 50, $offset: Int = 0) {
    items: Form(
      where: { status: { _eq: true }, name: { _ilike: $q } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,C=t.f`
  query GetAssignableTagsForSelect($q: String!, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "tags" }
        _or: [
          { meta: { _is_null: true } }
          {
            _not: {
              _or: [
                { meta: { _contains: { isSystemTag: true } } }
                { meta: { _has_key: "systemTagKey" } }
              ]
            }
          }
        ]
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
      meta
    }
  }
`;e.s(["V",0,m,"M",0,f,"J",0,A,"c",0,q,"m",0,l,"_",0,o,"W",0,n,"B",0,s,"a",0,C,"v",0,S,"S",0,k,"Z",0,w,"X",0,i,"D",0,I,"Y",0,d,"g",0,p,"b",0,y,"h",0,$,"o",0,_,"j",0,T,"O",0,v,"d",0,h,"T",0,b,"U",0,j,"i",0,a,"e",0,r,"z",0,g,"A",0,x,"p",0,c,"P",0,u])},65295,e=>{var t=e.i(362537);e.s(["f",0,function(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?(0,t.default)(e).format(i?"DD/MM/YYYY HH:mm:ss":"DD/MM/YYYY"):""}])},946028,e=>{e.s(["f",0,function(e){switch(e){case"ppm":return"PM";case"quote":return"Q";case"reactive":return"J";default:return""}}])},827010,e=>{var t=e.i(159080);e.i(851123);let i=t.f`
  query GetAddressForSelect($q: String, $entity: String!, $entityId: Int!) {
    items: Address(
      where: {
        Address_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
        _or: [
          { addressLine1: { _eq: $q } }
          { addressLine2: { _eq: $q } }
          { addressLine3: { _eq: $q } }
          { county: { _eq: $q } }
          { postCode: { _eq: $q } }
          { city: { _eq: $q } }
        ]
      }
    ) {
      label: addressLine1
      value: id
      id
      name
      addressLine1
      addressLine2
      addressLine3
      postCode
      county
      country: Country {
        name
      }
      city
      Address_Entities {
        invoice
      }
    }
  }
`,a=t.f`
  query GetAccountsForSelect($q: String, $type: String, $limit: Int, $offset: Int) {
    items: Account(
      where: { name: { _ilike: $q }, type: { _eq: $type } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,r=t.f`
  query GetTaxonomy($q: String, $id: Int) {
    items: Taxonomy(
      where: { type: { _eq: "assetCategory" }, status: { _eq: "active" } }
      order_by: { name: asc }
    ) {
      label: name
      options: Taxonomies(
        where: {
          type: { _eq: "assetCategory" }
          name: { _ilike: $q }
          id: { _eq: $id }
          status: { _eq: "active" }
        }
        order_by: { name: asc }
      ) {
        value: id
        label: name
      }
    }
  }
`,o=t.f`
  query GetAssetsForSelect(
    $locationId: Int
    $q: String
    $categoryId: Int
    $bookable: String
    $limit: Int
    $offset: Int
  ) {
    items: Asset(
      where: {
        categoryId: { _eq: $categoryId }
        locationId: { _eq: $locationId }
        name: { _ilike: $q }
        bookable: { _eq: $bookable }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
      sublocation: Sublocation {
        name
      }
    }
  }
`,n=t.f`
  query GetCustomersForSelect($q: String, $limit: Int, $offset: Int) {
    items: Account(
      where: { name: { _ilike: $q }, type: { _eq: "customer" } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      admin: Admins {
        id: adminId
      }
      label: name
      spendThreshold: meta(path: "$.finance.spendThreshold")
      rateType: meta(path: "$.finance.rateType")
      value: id
    }
  }
`,s=t.f`
  query GetJobsForSelect($q: String, $limit: Int = 50, $locationId: Int, $ids: [Int!] = []) {
    items: Job(
      where: {
        Location: { id: { _eq: $locationId } }
        number: { _ilike: $q }
        _not: { id: { _in: $ids } }
      }
      order_by: { title: asc }
      limit: $limit
    ) {
      label: number
      value: id
      number
      createdAt
      description
      status
      timingStart
      title
      type
      Location {
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
    }
  }
`,l=t.f`
  query GetManagersForSelect($userId: Int, $accountId: Int!, $q: String) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          role: { _in: ["owner", "manager"] }
          status: { _eq: "active" }
          Account: { id: { _eq: $accountId } }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        id: { _neq: $userId }
      }
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`,u=t.f`
  query GetManagersForSelect(
    $userId: Int
    $accountId: Int!
    $q: String
    $invoiceThreshold: numeric
    $quoteThreshold: numeric
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          role: { _in: ["owner", "manager"] }
          status: { _eq: "active" }
          Account: { id: { _eq: $accountId } }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        id: { _neq: $userId }
        _and: [
          {
            _or: [
              { invoiceThreshold: { _gt: $invoiceThreshold } }
              { invoiceThreshold: { _is_null: true } }
            ]
          }
          {
            _or: [
              { quoteThreshold: { _gt: $quoteThreshold } }
              { quoteThreshold: { _is_null: true } }
            ]
          }
        ]
      }
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`,d=t.f`
  query GetPostCodeAreaForSelect($countryId: Int, $q: String) {
    items: PostcodeArea(
      where: { name: { _ilike: $q }, countryId: { _eq: $countryId } }
      order_by: { name: asc }
    ) {
      area
      label: name
      value: id
    }
  }
`,c=t.f`
  query GetServicesForSelect($q: String, $limit: Int, $offset: Int) {
    items: Service(
      where: { name: { _ilike: $q }, status: { _eq: "active" } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,m=t.f`
  query GetSlasForSelect(
    $q: String
    $adminId: Int
    $type: String
    $subtype: sla_subtype
    $limit: Int
    $offset: Int
  ) {
    items: SLA(
      where: {
        name: { _ilike: $q }
        type: { _eq: $type }
        adminId: { _eq: $adminId }
        subtype: { _eq: $subtype }
      }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,f=t.f`
  query GetSuppliersForSelect($where: Account_bool_exp, $limit: Int, $offset: Int) {
    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {
      label: name
      value: id
    }
  }
`,$=t.f`
  query GetUsersForSelect(
    $accountId: Int
    $q: String
    $limit: Int
    $offset: Int
    $userIds: [Int!] = []
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          accountId: { _eq: $accountId }
          isContact: { _eq: true }
          status: { _eq: "active" }
        }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        _not: { id: { _in: $userIds } }
      }
      order_by: { nameFirst: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
      email
      phone
    }
  }
`,y=t.f`
  query GetSupplierUsersForCalendarFilter($q: String, $supplierId: Int, $limit: Int, $offset: Int) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: {
          status: { _eq: "active" }
          accountId: { _eq: $supplierId }
          Account: { type: { _eq: "supplier" } }
        }
        _or: [
          { fullName: { _ilike: $q } }
          {
            Account_Users: {
              status: { _eq: "active" }
              accountId: { _eq: $supplierId }
              Account: { type: { _eq: "supplier" }, name: { _ilike: $q } }
            }
          }
        ]
      }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      fullName
      accountUsers: Account_Users(
        where: { status: { _eq: "active" }, Account: { type: { _eq: "supplier" } } }
        order_by: { Account: { name: asc } }
      ) {
        Account {
          id
          name
        }
      }
    }
  }
`,_=t.f`
  query GetSupplierUsersForCalendarFilterGlobal($q: String, $limit: Int, $offset: Int) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { status: { _eq: "active" }, Account: { type: { _eq: "supplier" } } }
        _or: [
          { fullName: { _ilike: $q } }
          {
            Account_Users: {
              status: { _eq: "active" }
              Account: { type: { _eq: "supplier" }, name: { _ilike: $q } }
            }
          }
        ]
      }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      fullName
      accountUsers: Account_Users(
        where: { status: { _eq: "active" }, Account: { type: { _eq: "supplier" } } }
        order_by: { Account: { name: asc } }
      ) {
        Account {
          id
          name
        }
      }
    }
  }
`,q=t.f`
  query GetSupplierUsersByAccountForCalendar(
    $accountId: Int!
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        fullName: { _ilike: $q }
        Account_Users: {
          accountId: { _eq: $accountId }
          status: { _eq: "active" }
          Account: { type: { _eq: "supplier" } }
        }
      }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: fullName
    }
  }
`,p=t.f`
  query GetUsersForSelect($q: String) {
    items: User(
      where: {
        status: { _eq: "active" }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
      }
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
      email
      phone
    }
  }
`,b=t.f`
  query GetTaxonomyGroupForSelect($q: String, $type: String!, $limit: Int, $offset: Int) {
    items: Taxonomy(
      where: { isGroup: { _eq: true }, name: { _ilike: $q }, type: { _eq: $type } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      label: name
      value: id
    }
  }
`,v=t.f`
  query GetTaxonomy($q: String) {
    items: Taxonomy(where: { type: { _eq: "expenseCategoryGroup" } }, order_by: { name: asc }) {
      label: name
      options: Taxonomies(
        where: { type: { _eq: "expenseCategory" }, name: { _ilike: $q } }
        order_by: { name: asc }
      ) {
        value: id
        label: name
      }
    }
  }
`;t.f`
  query GetUserRole($userId: Int!, $accountId: Int!) {
    accountUsers: Account_User(
      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }
    ) {
      role
    }
  }
`;let h=t.f`
  query GetSublocationsForSelect($locationId: Int!, $q: String, $limit: Int, $offset: Int) {
    items: Sublocation(
      where: { name: { _ilike: $q }, locationId: { _eq: $locationId }, active: { _eq: true } }
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
    ) {
      value: id
      label: name
    }
  }
`,I=t.f`
  query GetTaxonomy($q: String, $limit: Int, $offset: Int) {
    items: Taxonomy(
      where: {
        type: { _eq: "assetCategory" }
        isGroup: { _eq: false }
        status: { _eq: "active" }
        name: { _ilike: $q }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`;t.f`
  query GetTagsForTask($q: String!, $limit: Int = 50, $offset: Int = 0) {
    items: Taxonomy(
      where: { name: { _ilike: $q }, status: { _eq: "active" }, type: { _eq: "taskTags" } }
      limit: $limit
      offset: $offset
      order_by: { id: desc }
    ) {
      value: id
      label: name
    }
  }
`,t.f`
  query GetTagsForTaskEntity(
    $entityId: Int
    $entity: String!
    $q: String!
    $limit: Int = 50
    $offset: Int = 0
  ) {
    tags: Taxonomy(
      where: {
        name: { _ilike: $q }
        status: { _eq: "active" }
        type: { _eq: "taskTags" }
        _not: { Taxonomy_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } } }
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
`,t.f`
  query GetTaskEntityTags($entityId: Int!, $entity: String!) {
    tags: Taxonomy_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Taxonomy: { status: { _eq: "active" }, type: { _eq: "taskTags" } }
      }
      order_by: { id: desc }
    ) {
      id
      createdAt
      tag: Taxonomy {
        id
        name
        meta
      }
    }
  }
`;let g=t.f`
  query GetCustomerManagers($accountId: Int, $q: String, $limit: Int, $offset: Int) {
    items: User(
      where: { Account_Users: { accountId: { _eq: $accountId } }, fullName: { _ilike: $q } }
      order_by: { fullName: asc }
      limit: $limit
      offset: $offset
    ) {
      label: fullName
      value: id
    }
  }
`,S=t.f`
  query GetServiceSchedulesForSelect(
    $q: String
    $serviceId: Int
    $entity: service_schedule_entity
    $entityId: Int
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: ServiceSchedule(
      where: {
        name: { _ilike: $q }
        serviceId: { _eq: $serviceId }
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        userId: { _is_null: true }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`,x=t.f`
  query GetPropertyById($id: Int!) {
    item: Location_by_pk(id: $id) {
      label: name
      value: id
      access
      registeredAddress: Addresses(
        where: { entity: { _eq: "Location" }, registered: { _eq: true } }
      ) {
        address: Address {
          id
          addressLine1
          addressLine2
          addressLine3
          county
          country: Country {
            name
            code
          }
          postCode
          city
        }
      }
    }
  }
`,T=t.f`
  query GetCompliancesForSelectNew($q: String, $locationId: Int, $limit: Int, $offset: Int) {
    items: Compliance(
      where: { name: { _ilike: $q }, locationId: { _eq: $locationId } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      value: id
      label: name
      registeredNumber
      category: ComplianceCategory {
        label: name
      }
      assets: Assets {
        asset: Asset {
          value: id
          label: name
        }
      }
      sublocation: Sublocation {
        value: id
        label: name
      }
    }
  }
`,j=t.f`
  query GetTaskAssignedToForSelect(
    $accountId: Int
    $q: String
    $limit: Int = 50
    $offset: Int = 0
  ) {
    items: User(
      where: {
        status: { _eq: "active" }
        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }
        _or: [{ fullName: { _ilike: $q } }]
      }
      limit: $limit
      offset: $offset
      order_by: { nameFirst: asc }
    ) {
      label: fullName
      value: id
    }
  }
`;e.s(["V",0,a,"i",0,i,"_",0,I,"B",0,o,"v",0,r,"d",0,T,"r",0,n,"O",0,g,"f",0,v,"$",0,s,"C",0,l,"o",0,u,"q",0,d,"g",0,x,"Z",0,c,"Y",0,S,"k",0,m,"j",0,h,"U",0,f,"N",0,q,"T",0,y,"P",0,_,"h",0,j,"J",0,b,"p",0,p,"Q",0,$])},817581,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutline")},692113,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"}),"Archive")},379500,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"}),"CancelRounded")},420,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle")},978319,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},407329,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"}),"DescriptionOutlined")},469908,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done")},390536,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},376733,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},13558,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined")},129503,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz")},509790,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert")},913918,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"ScheduleRounded")},137995,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"m20.55 5.22-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28M12 9.5l5.5 5.5H14v2h-4v-2H6.5zM5.12 5l.82-1h12l.93 1z"}),"Unarchive")},562673,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile")},213419,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=a(e.r(421506)),o=e.r(391398);i.default=(0,r.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")}])})();