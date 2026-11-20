(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,708051,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(800884),r=e.i(280445),s=e.i(813762),o=e.i(529292);let a=(0,r.f)(n.f,{shouldForwardProp:e=>"chipColor"!==e&&"textColor"!==e})(e=>{let{chipColor:t,textColor:i,variant:n}=e,r="outlined"===n;return{fontSize:"11px",color:r?t:i,backgroundColor:r?"transparent":t,border:r?`1px solid ${t}`:void 0,borderRadius:"0px 16px 16px 0px",...r&&{"& .MuiChip-icon":{color:t,fontSize:"14px",marginLeft:"6px"}}}});e.s(["f",0,e=>{let n,{chipProps:r={},tagEntityId:l,name:d,color:u,tooltipTitle:c,variant:m="filled",icon:p,onDelete:f}=e,h=u||"#f2f2f2",x=(0,i.useMemo)(()=>"function"==typeof f?{...r,onDelete:e=>{e.stopPropagation(),f(l)}}:{...r},[r,f,l]),b=(0,t.jsx)(a,{...x,size:"small",label:d,icon:p,variant:m,chipColor:h,textColor:(n=h,(0,o.G)(n,"#FFFFFF")>2.5?"#FFFFFF":"#000")});return c?(0,t.jsx)(s.l,{title:c,children:(0,t.jsx)("span",{style:{display:"inline-flex"},children:b})}):b}],708051)},190844,e=>{var t=e.i(391398),i=e.i(773831),n=e.i(715007),r=e.i(34121),s=e.i(40303),o=e.i(813843),a=e.i(652148),l=e.i(512057),d=e.i(469908),u=e.i(497844),c=e.i(498681),m=e.i(514707),p=e.i(191788),f=e.i(422411);let h=(0,m.f)(s.f)(e=>{let{color:t}=e;return{"&.MuiListItemText-root .MuiListItemText-primary":{fontWeight:700,color:t||void 0}}});e.s(["f",0,e=>{let{tagEntityId:s,tagId:m,name:x,color:b,editable:j=!0,onDelete:g,onColorChange:v=()=>{},onNameChange:y=()=>{}}=e,{register:T,handleSubmit:S}=(0,f.G)({defaultValues:{name:x,color:b}}),[w,q]=(0,p.useState)(null),I=(0,c.f)().can("taxonomy.manage"),R=(0,p.useMemo)(()=>[...g?[{icon:"delete",onClick:e=>{e.stopPropagation(),g(s)},tooltip:"Remove"}]:[],...I?[{icon:"edit",onClick:e=>{e.stopPropagation(),q("rename")},tooltip:"Rename"},{icon:"visibility",onClick:e=>{e.stopPropagation(),q("changeColor")},tooltip:"Change color"}]:[]],[I,s,g]),C=e=>{e.stopPropagation(),q(null)},$=e=>{let{color:t}=e;v({tagId:m,color:t}),q(null)},J=e=>{let{name:t}=e;y({tagId:m,name:t}),q(null)};return(0,t.jsx)(n.f,{disablePadding:!0,secondaryAction:!j||!w&&R.length>0&&(0,t.jsx)(u.f,{icon:"defaultHoriz",actions:R}),children:w?({changeColor:()=>(0,t.jsxs)(o.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",pl:"16px",pr:"16px",children:[(0,t.jsx)("input",{name:"color",ref:T,type:"color",style:{padding:0,border:"none",backgroundColor:"unset"}}),(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(i.f,{size:"small",color:"danger",onClick:C,children:(0,t.jsx)(l.default,{})}),(0,t.jsx)(i.f,{size:"small",color:"success",onClick:S($),children:(0,t.jsx)(d.default,{})})]})]}),rename:()=>(0,t.jsxs)(o.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",pl:"16px",pr:"16px",children:[(0,t.jsx)(a.f,{name:"name",inputRef:T,variant:"standard",color:"secondary"}),(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(i.f,{size:"small",color:"danger",onClick:C,children:(0,t.jsx)(l.default,{})}),(0,t.jsx)(i.f,{size:"small",color:"success",onClick:S(J),children:(0,t.jsx)(d.default,{})})]})]})})[w]():(0,t.jsx)(r.f,{children:(0,t.jsx)(h,{primary:x,color:b||void 0})})},m)}])},552987,879572,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(738251),r=e.i(115871),s=e.i(522507),o=e.i(388866),a=e.i(813843),l=e.i(21557),d=e.i(708051),u=e.i(190844),c=e.i(755548),m=e.i(382161),p=e.i(77052),f=e.i(185758),h=e.i(556918);let x={reactive:"This tag will be removed from the reactive job.",ppm:"This tag will be removed from the PPM job.",quote:"This tag will be removed from the quote.",task:"This tag will be removed from the task.",workflow:"This tag will be removed from the workflow.",asset:"This tag will be removed from the asset."},b=e=>{let{open:i,onClose:n,onConfirm:s,target:o="reactive"}=e;return(0,t.jsxs)(m.f,{open:i,onClose:n,children:[(0,t.jsx)(h.f,{children:"Remove tag?"}),(0,t.jsx)(f.f,{children:(0,t.jsx)(r.f,{children:x[o]})}),(0,t.jsxs)(p.f,{children:[(0,t.jsx)(c.f,{color:"secondary",variant:"contained",onClick:n,children:"Cancel"}),(0,t.jsx)(c.f,{color:"danger",variant:"contained",onClick:s,children:"Remove"})]})]})};e.s(["o",0,b,"p",0,function(e){return"quote"===e?"quote":"ppm"===e?"ppm":"reactive"}],879572);var j=e.i(731349),g=e.i(330774),v=e.i(97969),y=e.i(770614),T=e.i(330499),S=e.i(913918);let w=(0,i.createElement)(S.default);e.s(["f",0,e=>{let{tags:c=[],handleDeleteTagEntity:m,readOnly:p=!1,slaJobTimings:f,ppmLinkRowFallback:h,removeTagTarget:x="reactive",showAllTags:S=!1,expandToContainer:q=!1,clipLeadingWhenNarrow:I=!1,listSx:R}=e,C=(0,l.f)(),[$,J]=(0,i.useState)(null),[U,A]=(0,i.useState)({open:!1,tagEntityId:null}),F=(0,i.useMemo)(()=>c.map(e=>{let t={...(0,v.r)(e.tag.meta,e.meta)??e.tag.meta??{},...(0,y.q)(e.tag.meta,e.meta)??{}};return{...e,tag:{...e.tag,meta:t}}}),[c]),k=(0,i.useMemo)(()=>{let e=(0,j.R)(F);return(0,v.y)(e,e=>(0,j.N)(e??void 0)||(0,j.z)(e??void 0)||(0,y.K)(e??void 0)||(0,T.f)(e??void 0))},[F]),L=S?k:k?.slice(0,5),N=S?0:(k?.length??0)-(L?.length??0),_=!!$,E=p?void 0:e=>{A({open:!0,tagEntityId:e})},P=()=>{A({open:!1,tagEntityId:null})},D=async()=>{let{tagEntityId:e}=U;if(null==e||!m)return void P();try{await m(e),P()}catch(t){let e=t instanceof Error?t.message:"Failed to remove tag";C.show({content:`Error: ${e}`,severity:"error"})}},M=L.map((e,i)=>{var n;let r=(0,y.K)(e.tag.meta)?(0,y.b)(e.tag.name,e.tag.meta):(0,v._)(e.tag.name,e.tag.meta,h),s=(0,v.I)(e.tag.name,e.tag.meta,h)??(0,y.l)(e.tag.meta)??(0,T.n)(e.tag.meta)??(0,j.A)(e.tag.meta,f,e.createdAt),o=(n=e.tag.meta,(0,T.f)(n)?{variant:"outlined",icon:w}:null),a=(0,v.e)(e.tag.meta,e.tag.name)??(0,j.f)(e.tag.meta),l=!(0,g.f)(e.tag);return(0,t.jsx)(d.f,{tagEntityId:e.id||i,name:r,color:a,tooltipTitle:s,variant:o?.variant,icon:o?.icon,onDelete:l?E:void 0},e.id)}),O=!S&&N>0?(0,t.jsxs)(r.f,{component:"span",fontWeight:700,onMouseEnter:e=>{J(e.currentTarget),e.stopPropagation()},children:["+",N]}):null;return(0,t.jsxs)(n.f,{sx:{minWidth:0,...I?{direction:"ltr",display:"inline-flex",width:"max-content",verticalAlign:"middle"}:{maxWidth:"100%"},...q&&!I?{width:"100%"}:{}},children:[!p&&(0,t.jsx)(b,{open:U.open,onClose:P,onConfirm:()=>void D(),target:x}),S?(0,t.jsx)(n.f,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",gap:1,...R},children:M}):(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",spacing:1,sx:{flexWrap:"nowrap",minWidth:0,overflow:I?"visible":"hidden","& .MuiChip-root":{flexShrink:0},...R},children:[M,O]}),!S&&N>0&&(0,t.jsx)(s.U,{id:_?"tags-in-table-popover":void 0,open:_,anchorEl:$,onClose:()=>J(null),anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsx)(o.f,{children:k?.map(e=>(0,t.jsx)(u.f,{tagEntityId:e.id,tagId:e.tag.id,name:(0,y.K)(e.tag.meta)?(0,y.b)(e.tag.name,e.tag.meta):(0,v._)(e.tag.name,e.tag.meta,h),color:(0,v.e)(e.tag.meta,e.tag.name)??(0,j.f)(e.tag.meta),editable:!1},e.tag.id))})})]})}],552987)},770614,e=>{let t="on-hold-job",i="On hold";function n(e){return e?.systemTagKey===t}function r(e,n){let r=n?.systemTagKey??(e===i?t:null);return r&&r===t?{...n,systemTagKey:r,jobHoldReasonLabel:n?.jobHoldReasonLabel??null,jobHoldReasonValue:n?.jobHoldReasonValue??null}:null}e.s(["j",0,t,"T",0,i,"b",0,function(e,t){let i=r(e,t);if(!i)return e;let n=i.jobHoldReasonLabel?.trim();return n?`${e}: ${n}`:e},"l",0,function(e){if(!n(e))return null;let t=r(i,e);if(!t)return null;let s=t.jobHoldReasonLabel?.trim();return s?`This job is on hold: ${s}.`:"This job is currently on hold."},"K",0,n,"p",0,function(e){return!!e&&(!!n(e.meta??void 0)||e.name===i)},"q",0,function(e,t){return e||t?{...e,...t,systemTagKey:t?.systemTagKey??e?.systemTagKey,jobHoldReasonLabel:t?.jobHoldReasonLabel??e?.jobHoldReasonLabel??null,jobHoldReasonValue:t?.jobHoldReasonValue??e?.jobHoldReasonValue??null,color:e?.color??t?.color}:null}])},97969,e=>{var t=e.i(946028),i=e.i(494575);let n="follow-on-job",r="remedial-quote",s="Follow on job",o="Remedial quote",a=new Set([n,r]),l=i.f.COLOUR.help,d=i.f.COLOUR.success;function u(e){let t=e?.systemTagKey;return!!t&&a.has(t)}function c(e){return!!e&&(!!u(e.meta??void 0)||e.name===s||e.name===o)}function m(e,t){return e||t?{...e,...t,systemTagKey:t?.systemTagKey??e?.systemTagKey,parentJobType:t?.parentJobType??e?.parentJobType,parentJobNumber:t?.parentJobNumber??e?.parentJobNumber,color:e?.color??t?.color}:null}function p(e,t,i){let l=t?.systemTagKey??(e===s?n:e===o?r:null);return l&&a.has(l)?{...t,systemTagKey:l,parentJobType:t?.parentJobType??i?.parentJobType??null,parentJobNumber:t?.parentJobNumber??i?.parentJobNumber??null}:null}function f(e,i,r){let s=p(e,i,r);if(!s)return e;let o=function(e){let i=e.parentJobNumber;if(!i)return null;if(e.systemTagKey===n){let t="ppm"===e.parentJobType?"PM":"reactive"===e.parentJobType?"J":"";return t?`${t} ${i}`:i}let r=(0,t.f)(e.parentJobType);return r?`${r} ${i}`:i}(s);return o?`${e}: ${o}`:e}e.s(["T",0,function(e,t){return e?.length?e.map(e=>{let i=m(e.tag.meta,e.meta);return f(e.tag.name,i,t)}).join(", "):"-"},"_",0,f,"I",0,function(e,i,s){let o=p(e,i,s);if(!o)return null;let a=o.parentJobNumber,l=(0,t.f)(o.parentJobType),d=a&&l?`${l} ${a}`:a??"—";return o.systemTagKey===r?`Remedial quote raised from parent work order ${d}.`:o.systemTagKey===n?`Follow-on work linked to parent job ${d}.`:null},"W",0,c,"r",0,m,"w",0,function(e){let t=e.parentJob;return t?.number==null||""===t.number?null:{parentJobType:t.type??null,parentJobNumber:String(t.number)}},"e",0,function(e,t){let i=t?p(t,e):e&&u(e)?e:null;return i?.systemTagKey===r?d:i?.systemTagKey===n?l:e?.color},"$",0,p,"y",0,function(e,t){let i=[],n=[],r=[];for(let s of e)t(s.tag.meta??void 0)?i.push(s):c(s.tag)?n.push(s):r.push(s);return[...i,...n,...r]}])},731349,330499,e=>{var t=e.i(494575),i=e.i(65295);function n(e){return e?.systemTagKey==="time-held"}function r(e){return e?.color||"#0EA5E9"}e.s(["n",0,function(e){return n(e)?"Attendance time is held for a supplier offer on this job.":null},"f",0,n,"W",0,function(e){return!!e&&(!!n(e.meta??void 0)||"Time held"===e.name)},"k",0,r],330499);let s=new Set(["sla-at-risk:job-report","sla-at-risk:on-site","sla-at-risk:quote-returned","sla-breach:job-report","sla-breach:on-site","sla-breach:quote-returned"]),o=new Set(["sla-at-risk:job-report","sla-at-risk:on-site","sla-at-risk:quote-returned"]),a=new Set(["sla-breach:job-report","sla-breach:on-site","sla-breach:quote-returned"]),l=t.f.muiTheme.palette.secondary.main;function d(e){let t=e?.systemTagKey;return!!t&&s.has(t)}function u(e){return e?.systemTagKey==="outstanding-quote"}let c={"sla-at-risk:job-report":"Job report","sla-at-risk:on-site":"On site","sla-at-risk:quote-returned":"Quote returned"},m={"sla-breach:job-report":"Job report","sla-breach:on-site":"On site","sla-breach:quote-returned":"Quote returned"},p={"sla-at-risk:job-report":"jobReportTimingEnd","sla-at-risk:on-site":"onSiteTimingEnd","sla-at-risk:quote-returned":"quoteReturnedTimingEnd"};e.s(["A",0,function(e,t,n){if(u(e)){let t="number"==typeof e?.quoteId?` #${e.quoteId}`:"";return`Outstanding quote${t}: this asset is linked to a quote that is awaiting decision.`}return function(e,t){let n,r=e?.systemTagKey;if(!r||!o.has(r))return null;let s=c[r];if(!s)return null;let a=(n=p[r])&&t&&null!=t[n]?t[n]:e?.slaDueAt??e?.dueAt??void 0,l="sla-at-risk:quote-returned"===r?"quote":"job",d="—";return a&&(d=(0,i.f)(a,!0)||"—"),`This ${l} is at risk of breaching its ${s} SLA — due by ${d}.`}(e,t)??function(e,t){let n=e?.systemTagKey;if(!n||!a.has(n))return null;let r=m[n];if(!r)return null;let s="sla-breach:quote-returned"===n?"quote":"job",o=e?.slaBreachedAt??e?.breachedAt??t??void 0,l="—";return o&&(l=(0,i.f)(o,!0)||"—"),`This ${s} has breached its ${r} SLA — breached at ${l}.`}(e,n)},"g",0,function(e){return e?.isSystemTag===!0||!!e?.systemTagKey},"z",0,u,"N",0,d,"y",0,function(e){return!!e&&d(e.meta??void 0)},"f",0,function(e){var t,i;let s,d;return u(e??void 0)?l:(t=e??void 0,(s=t?.systemTagKey)&&a.has(s))?"hsl(337, 92.50%, 47.30%)":(i=e??void 0,(d=i?.systemTagKey)&&o.has(d))?"#FF9800":n(e??void 0)?r(e):e?.color},"R",0,function(e){let t=[],i=[];for(let n of e)d(n.tag.meta??void 0)||u(n.tag.meta??void 0)?t.push(n):i.push(n);return[...t,...i]}],731349)},330774,e=>{var t=e.i(770614),i=e.i(97969),n=e.i(731349),r=e.i(330499);e.s(["f",0,function(e){return!!e&&((0,n.g)(e.meta)||(0,i.W)(e)||(0,t.p)(e)||(0,r.W)(e)||(0,n.y)(e)||"Outstanding quote"===e.name)}])},879436,e=>{e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:t,currencyDisplay:"symbol",style:"currency"}).format(e)}])},946028,e=>{e.s(["f",0,function(e){switch(e){case"ppm":return"PM";case"quote":return"Q";case"reactive":return"J";default:return""}}])},299796,e=>{var t=e.i(946028);e.s(["f",()=>t.f])},407784,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(691567),r=e.i(747112),s=e.i(871931),o=e.i(302966),a=e.i(760981);let l={accordionSx:{},accordionSummarySx:{},accordionDetailsSx:{},expandIcon:r.f},d=e=>{let{title:n,children:r,accordionSx:d=l.accordionSx,accordionSummarySx:u=l.accordionSummarySx,accordionDetailsSx:c=l.accordionDetailsSx,expandIcon:m=l.expandIcon,headerAdornment:p=null,disabled:f=!1}=e,[h,x]=(0,i.useState)(!f);return(0,i.useEffect)(()=>{f||x(!0)},[f]),(0,t.jsxs)(s.f,{sx:{borderTop:"none!important",boxShadow:"none",marginBottom:"15px",opacity:f?.5:1,...d},expanded:h,onClick:f?()=>{}:e=>{e.stopPropagation(),x(e=>!e)},children:[(0,t.jsxs)(o.f,{sx:{backgroundColor:"#F2F2F2",borderRadius:"4px",...u},expandIcon:(0,t.jsx)(m,{}),children:[p&&(0,t.jsx)(p,{}),n]}),(0,t.jsx)(a.f,{onClick:e=>e.stopPropagation(),sx:{...c},children:r})]})};d.propTypes={title:n.node,children:n.object,accordionSx:n.object,accordionDetailsSx:n.object,accordionSummarySx:n.object,expandIcon:n.object,defaultExpanded:n.bool},e.s(["f",0,d])},529422,104868,e=>{e.s(["f",()=>l],529422),e.s(["f",()=>s.f],104868);var t=e.i(391398),i=e.i(115871),n=e.i(299796),r=e.i(807673);e.i(981683);var s=e.i(308680),s=s,o=e.i(411331),a=e.i(889231);let l=e=>{let{id:l,invoiceNumber:d,number:u,numberPrefix:c="",numberSuffix:m="",openCanvas:p=!1,isBlank:f=!1,isQuote:h=!1,underline:x=!1,shortJobDesc:b,status:j,style:g,type:v,toggleShow:y,isHref:T}=e,S=(0,o.f)(),w="quote"!==v&&h?"Q ":"";return(0,t.jsxs)("div",{style:g,children:[(0,t.jsxs)(a.f,{href:T?`/dashboard/issues/view?id=${u}`:void 0,onClick:e=>{if(e.stopPropagation(),f&&T){e.preventDefault(),window.open(`/dashboard/issues/view?id=${u}`,"_blank");return}if(p)return void S.show({content:(0,t.jsx)(s.f,{jobId:l,toggleShow:()=>{S.close(),y?.()},numberPrefix:c,numberSuffix:m}),submit:!1,title:h?"Quote Details":"Job Details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},sx:{color:p||f||T?"secondary.main":"inherit",cursor:p||f||T?"pointer":"inherit",textDecoration:x||f||T?"underline":"none"},children:[j&&(0,r.f)({value:j,withTooltip:!0}),`${(0,n.f)(v)} ${w}`,(e=>{let{id:t,number:i,invoiceNumber:n,numberPrefix:r,numberSuffix:s}=e,o=t?`${r} ${i||t} ${s}`:"";return n?`${o} / ${n}`:o})({id:l,number:u,invoiceNumber:d,numberPrefix:c,numberSuffix:m})]}),b&&(0,t.jsx)(i.f,{variant:"body2",children:b})]})}},981683,436295,308680,e=>{e.s([],981683),e.s(["f",()=>K],308680);var t=e.i(391398),i=e.i(191788),n=e.i(691567),r=e.i(432171),s=e.i(446305),o=e.i(203828),a=e.i(847474),l=e.i(717524),d=e.i(553875),u=e.i(76381),c=e.i(594301),m=e.i(362537),p=e.i(738251),f=e.i(740790),h=e.i(280445),x=e.i(813843),b=e.i(115871),j=e.i(889231),g=e.i(122891),v=e.i(624841),y=e.i(529422),T=e.i(407784),S=e.i(552987);let w=(0,h.f)(p.f)({margin:"5px 0px"}),q=e=>{let{isQuotes:i,job:n,numberPrefix:r,numberSuffix:s,showOrder:o=!0}=e,a=(0,g.f)(n),{hasRole:l}=(0,c.f)();return(0,t.jsx)(T.f,{title:"Details",children:(0,t.jsxs)(f.f,{container:!0,children:[(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[o&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{children:"Order"}),(0,t.jsx)(y.f,{id:n.id,number:n.number,numberPrefix:r,numberSuffix:s,type:n.type,isHref:!0})]}),n.tenantUser&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Tenant"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.tenantUser.fullName})]}),n.reference&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Reference"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.reference})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:i?"Description":"Short Job Description"}),(0,t.jsx)(b.f,{variant:"subtitle1",sx:{maxWidth:"14rem"},children:n?.shortJobDesc?.length>0&&n?.shortJobDesc[0]?.taxonomy.name||n.title})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(v.f,{value:n.status})]}),(n.tags?.length??0)>0&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Tags"}),(0,t.jsx)(S.f,{tags:n.tags,readOnly:!0,showAllTags:!0,slaJobTimings:{jobReportTimingEnd:n.jobReportTimingEnd,onSiteTimingEnd:n.onSiteTimingEnd,quoteReturnedTimingEnd:n.quoteReturnedTimingEnd}})]}),i&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Quote due date"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.quoteDue?(0,m.default)(n.quoteDue).format("YYYY-MM-DD"):"-"})]}),i&&!l("customer")&&(0,t.jsxs)(x.f,{rowGap:.5,children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Supplier(s)"}),n.quotations?.map(e=>{let{supplier:i}=e;return(0,t.jsx)(j.f,{href:`/dashboard/suppliers/view?id=${i?.id}`,color:"secondary",noWrap:!l("admin"),children:i?.name})})]})]}),(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[i&&!l("customer")&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:l("admin")?"Required quotes":"Quotation"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.quotations.length})]}),i&&!l("customer")&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:l("admin")?"Quotes received":"Received"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:`${(n.quotations||[]).reduce((e,t)=>"supplierQuoteComplete"===t.status?e+1:e,0)}/${n.quotations?.length||0}`})]}),!i&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Cost Category"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.costCategoryTaxonomy?.name})]}),!i&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Service"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.service?.name})]}),"ppm"!==n.type&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Priority"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:`${a?.name||"Not Specified "} (${a?.entity||"Default"})`})]}),(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Assigned To"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.manager?`${n.manager.nameFirst} ${n.manager.nameLast} `:"Unassigned"})]}),n.compliance&&(0,t.jsxs)(w,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Compliance"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n.compliance.name})]})]})]})})};q.propTypes={isQuotes:n.bool,job:n.object,showOrder:n.bool};var I=e.i(498681),R=e.i(879436);let C=(0,h.f)(p.f)({margin:"5px 0px"}),$=e=>{let{job:i}=e,{hasUserModule:n}=(0,I.f)(),{hasRole:r}=(0,c.f)(),s=r("customer_user"),o=r("admin_user"),a=n("finances");return(0,t.jsx)(T.f,{title:"Customer",children:(0,t.jsxs)(f.f,{container:!0,children:[(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(b.f,{children:"Name"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/customers/view?id=${i.customer?.id}`,children:i.customer?.name})]}),i.customerUser&&(0,t.jsxs)(C,{children:[(0,t.jsx)(b.f,{children:"Contact"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.customerUser.id}`,children:i.customerUser.fullName})]}),(!s&&!o||a)&&null!=i.customerSpendThreshold&&(0,t.jsxs)(C,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Spend Threshold"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:(0,R.f)(i.customerSpendThreshold)})]})]}),(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Email"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.customerUser?.email})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Phone"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.customerUser?.phone})]})]})]})})};$.propTypes={job:n.object.isRequired};let J=(0,h.f)(p.f)({margin:"5px 0px"}),U=e=>{let{job:i}=e,n=i.supplier?.contactUsers?.[0],r=i.supplierUser?.id&&n?.user&&i.supplierUser?.id!==n?.user?.id;return(0,t.jsx)(T.f,{title:"Supplier",children:(0,t.jsxs)(f.f,{container:!0,children:[(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(b.f,{children:"Name"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/suppliers/view?id=${i.supplier.id}`,children:i.supplier.name})]}),n&&(0,t.jsxs)(J,{children:[(0,t.jsx)(b.f,{children:r?"Contact":"Contact / Operative"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${n.user.id}`,children:n.user.fullName})]}),i.supplierUser&&r&&(0,t.jsxs)(J,{children:[(0,t.jsx)(b.f,{children:"Operative"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.supplierUser.id}`,children:i.supplierUser.fullName})]})]}),(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:r?"Contact email":"Email"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n?.user?.email})]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:r?"Contact phone":"Phone"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:n?.user?.phone??"N/A"})]}),i.supplierUser&&r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(J,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Operative email"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.supplierUser?.email})]}),(0,t.jsxs)(J,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Operative phone"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.supplierUser?.phone})]})]})]})]})})};U.propTypes={job:n.object};let A=(0,h.f)(p.f)({margin:"5px 0px"}),F=e=>{let{address:i,location:n,sublocation:r}=e,{hasRole:s}=(0,c.f)();return(0,t.jsx)(T.f,{title:"Address",children:(0,t.jsxs)(f.f,{container:!0,children:[(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Property"}),(0,t.jsx)(j.f,{href:`/dashboard/properties/view?id=${n.id}&tab=details`,noWrap:s("supplier"),color:"secondary",children:n.name})," ",r&&(0,t.jsxs)(j.f,{href:`/dashboard/properties/view?id=${n.id}&tab=sublocations`,noWrap:s("supplier"),color:"secondary",children:["(",r.name,")"]})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Name"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.name||"N/A"})]})]}),(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Address"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.addressLine1}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.addressLine2}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.addressLine3}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.city}),s(["admin","customer"])&&(0,t.jsx)(b.f,{variant:"subtitle1",children:i.county}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.postCode})]})]})})};F.propTypes={address:n.object};var k=e.i(285835),L=e.i(986351);let N=e=>{let{answers:i}=e;return(0,t.jsxs)(t.Fragment,{children:[i&&i.length>0&&(0,t.jsx)(L.f,{children:"Questions"}),i&&i.map(e=>{let{meta:i}=e;return i?.input==="media"?null:(0,t.jsxs)(p.f,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:e.taxonomy?.name||e.name}),(0,t.jsx)(b.f,{children:e.comments||e.taxonomy_entity?.[0]?.comments})]},e.id||e.taxonomyId)}),i&&i.length>0&&(0,t.jsx)(L.f,{})]})};N.propTypes={answers:n.default.array},e.s(["f",0,N],436295);let _=(0,h.f)(p.f)({margin:"5px 0px"}),E=e=>{let{isQuote:i,job:n,isReactive:r,isPPM:s,isQuoted:o}=e,a=n.shortJobDesc&&n.shortJobDesc.length?n.shortJobDesc[0].taxonomy.name:"",l=n.quoteSummary&&n.quoteSummary.length?n.quoteSummary[0].taxonomy.name:"",d=n.answers?.map(e=>{let{id:t,taxonomyId:i,comments:n,taxonomy:{name:r}}=e;return{id:t,taxonomyId:i,comments:n,name:r}});return(0,t.jsxs)(T.f,{title:"Issue Reported - Client",children:[(r||s)&&(0,t.jsxs)(_,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Short Job Description"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:a||"N/A"})]}),(r||s)&&(0,t.jsxs)(_,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Job Description"}),(0,t.jsx)(k.f,{sx:{fontSize:"1rem"},children:n.description||"N/A"})]}),o&&(0,t.jsxs)(_,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Quote Summary"}),(0,t.jsx)(k.f,{sx:{fontSize:"1rem"},children:l||"N/A"})]}),i&&(0,t.jsxs)(_,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Scope of works"}),(0,t.jsx)(k.f,{sx:{fontSize:"1rem"},children:n.description||"N/A"})]}),(0,t.jsx)(N,{answers:d})]})};E.propTypes={job:n.object,isQuote:n.bool};var P=e.i(48441);let D=(0,h.f)(p.f)({margin:"5px 0px"}),M=e=>{let{quotation:i}=e,{hasUserModule:n}=(0,I.f)(),{hasRole:r}=(0,c.f)(),s=r("supplier"),o=r("customer"),a=r("tenant"),l=r("customer_user"),d=r("admin_user"),u=n("finances"),m=P.E.find(e=>e.value===i.status)||{text:"-",context:"info"},p=(0,R.f)((i?.lineItems??[]).filter(e=>"Labour"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),h=(0,R.f)((i?.lineItems??[]).filter(e=>"Materials"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),x=(0,R.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.supplierTotal,0)),j=(0,R.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.customerTotal,0));return(0,t.jsx)(T.f,{title:`Quotation ${i?.quoteNumber||""}`,children:(0,t.jsxs)(f.f,{container:!0,children:[(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:m.text})]}),!o&&!a&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Labour Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:p})]}),!o&&!a&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Materials Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:h})]})]}),(0,t.jsxs)(f.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[!o&&!a&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Supplier Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:x})]}),!s&&(!l&&!a&&!d||u)&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Customer Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:j})]})]})]})})};M.propTypes={quotation:n.object};let O=e=>{let n,{jobId:m,toggleShow:p,numberPrefix:f="",numberSuffix:h=""}=e,{hasUserModule:x}=(0,I.f)(),{hasRole:b}=(0,c.f)(),j=(0,o.useRouter)(),g=b("tenant"),v=b("customer_user"),y=b("admin_user"),T=x("finances"),S=x("quotes");(0,i.useEffect)(()=>{let e=()=>{p()};return j.events.on("routeChangeComplete",e),()=>{j.events.off("routeChangeComplete",e)}},[j.events,p]);let w=b("supplier")?s.M:b(["customer","tenant"])?s.Y:s.O,{loading:R,data:{job:C}={job:{}}}=(0,r.t)(w,{variables:{jobId:m}}),J=C.quoted,A="quote"===C.type,k="reactive"===C.type,L="ppm"===C.type;if(R)return(0,t.jsx)(d.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(u.f,{color:"secondary"})});let N=C?.quotations?.length?[...C.quotations].sort((e,t)=>e.id-t.id):[],_=(0,a.w)(C?.location,"registered");return(0,t.jsxs)(t.Fragment,{children:[C.customer&&(0,t.jsx)(l.f,{editable:!1,entity:{id:C.customer.id,name:C.customer.name,website:C.customer.website},entityName:"Account"}),(0,t.jsx)(q,{isQuotes:A,job:C,numberPrefix:f,numberSuffix:h}),_&&(0,t.jsx)(F,{address:_.address,location:C?.location,sublocation:C?.sublocation}),b(["admin","customer","tenant"])&&(0,t.jsx)($,{job:C}),b(["admin"])&&C.supplier&&(0,t.jsx)(U,{job:C}),!!N.length&&A&&(!v&&!g&&!y||S)&&(!v&&!g&&!y||T)&&(n=[...N],b("customer")&&(n=n.filter(e=>{let{status:t}=e;return"supplierQuoteSent"===t||"quotationAccepted"===t||"quotationRejected"===t})),n).map(e=>(0,t.jsx)(M,{quotation:e})),(0,t.jsx)(E,{job:C,isReactive:k,isPPM:L,isQuoted:J,isQuote:A})]})};O.propTypes={jobId:n.number.isRequired,toggleShow:n.func.isRequired,numberPrefix:n.string,numberSuffix:n.string};let K=O},446305,717524,122891,e=>{var t=e.i(159080),i=e.i(987123);t.f`
  fragment JobFields on Job {
    access
    adminId
    costCategory
    createdAt
    description
    id
    meta
    pricing
    reference
    scheduledAt
    status
    supplierLabourAmount
    supplierMaterialsAmount
    timing
    timingEnd
    timingNormalHours
    timingStart
    title
    type
    siteVisitStart
    siteVisitEnd
    siteVisitWeekends
    amount
    number
    quoted
    timingStatus
    correctDuration
    correctStart
    correctEnd
  }
`,t.f`
  fragment JobQuoteFields on Job {
    quoted
    quoteNumber
    quoteDue
    quoteCharge
  }
`,t.f`
  fragment JobAdminFields on Job {
    supplierId
    supplierUserId
  }
`,t.f`
  fragment JobSupplierFields on Job {
    supplierId
    supplierUserId
  }
`;let n=t.f`
  fragment JobOffCanvasFields on Job {
    access
    costCategory
    description
    quoteDue
    quoteNumber
    id
    number
    paymentMethod
    reference
    status
    title
    type
    quoted
    onSiteTimingEnd
    jobReportTimingEnd
    quoteReturnedTimingEnd
    sublocation: Sublocation {
      name
    }
    invoices: Invoices(order_by: { createdAt: desc }) {
      id
      invoiceNumber
    }
    quotations: SupplierQuotes {
      id
      quoteNumber
      status
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
        type
        name
        accountUsers: Account_Users {
          user: User {
            id
            fullName
            nameFirst
            nameLast
            phone
            email
          }
        }
      }
    }
    admin: Admin {
      id
      name
    }
    service: Service {
      id
      name
    }
    manager: Manager {
      id
      nameFirst
      nameLast
    }
    customer: Customer {
      id
      name
      website
      slas: SLAs(where: { entity: { _eq: "Account" } }) {
        id
        entity
        entityId
        onSite
        onSiteUnit
        jobReport
        jobReportUnit
        completion
        completionUnit
        notes
        inUse
        normalRate
        oohRate
        premiumRate
        minimumInterval
        minimumLength
        slaId
        sla: SLA {
          id
          name
          notes
          normalRate
          oohRate
          premiumRate
          onSite
          onSiteUnit
          jobReport
          jobReportUnit
          completion
          completionUnit
          minimumInterval
          minimumLength
        }
      }
    }
    customerUser: CustomerUser {
      id
      nameFirst
      nameLast
      fullName
      email
      phone
    }
    supplier: Supplier {
      id
      name
      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
        id
        role
        position
        isContact
        lastSignInAt
        userId
        user: User {
          id
          fullName
          nameFirst
          nameLast
          email
          phone
        }
      }
    }
    supplierUser: SupplierUser {
      id
      fullName
      nameFirst
      nameLast
      email
      phone
    }
    location: Location {
      id
      name
      addresses: Addresses(where: { entity: { _eq: "Location" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
      slas: SLAs(where: { entity: { _eq: "Location" } }) {
        id
        entity
        entityId
        onSite
        onSiteUnit
        jobReport
        jobReportUnit
        completion
        completionUnit
        notes
        inUse
        normalRate
        oohRate
        premiumRate
        minimumInterval
        minimumLength
        slaId
        sla: SLA {
          id
          name
          notes
          normalRate
          oohRate
          premiumRate
          onSite
          onSiteUnit
          jobReport
          jobReportUnit
          completion
          completionUnit
          minimumInterval
          minimumLength
        }
      }
    }
    sla: SLA {
      id
      name
      notes
      normalRate
      oohRate
      premiumRate
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      minimumInterval
      minimumLength
    }
    costCategoryTaxonomy: CostCategory {
      id
      name
    }
    tags: Taxonomy(
      where: {
        entity: { _eq: "Job" }
        Taxonomy: { status: { _eq: "active" }, type: { _eq: "tags" } }
      }
    ) {
      id
      createdAt
      meta
      tag: Taxonomy {
        id
        name
        meta: clientMeta
      }
    }
    shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
      id
      taxonomyId
      comments
      taxonomy: Taxonomy {
        name
      }
    }
    quoteSummary: Taxonomy(where: { Taxonomy: { type: { _eq: "quoteSummary" } } }) {
      taxonomy: Taxonomy {
        name
      }
    }
  }
  ${i.a}
  ${i.S}
`,r=t.f`
  query GetJobOffCanvas($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      ...JobOffCanvasFields
      meta
      customerSpendThreshold
      quotations: SupplierQuotes {
        id
        lineItems: SupplierQuoteLineItems {
          id
          customerTotal
          unitRate
          customerUnitRate
          supplierTotal
        }
      }
    }
  }
  ${n}
`,s=t.f`
  query GetJobOffCanvasCustomer($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      ...JobOffCanvasFields
      meta: clientMeta
      customerSpendThreshold
      quotations: SupplierQuotes {
        id
        lineItems: SupplierQuoteLineItems {
          id
          customerTotal
          customerUnitRate
        }
      }
    }
  }
  ${n}
`,o=t.f`
  query GetJobOffCanvasSupplier($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      ...JobOffCanvasFields
      meta: clientMeta
      quotations: SupplierQuotes {
        id
        lineItems: SupplierQuoteLineItems {
          id
          unitRate
          supplierTotal
        }
      }
    }
  }
  ${n}
`;e.s(["O",0,r,"Y",0,s,"M",0,o],446305);var a=e.i(391398),l=e.i(222351),d=e.i(115871),u=e.i(314695),c=e.i(813843);let m=l.f;e.s(["f",0,e=>{let{avatar:t,entity:i}=e;return(0,a.jsxs)(c.f,{direction:"row",alignItems:"center",sx:{margin:"1.3em 0em"},spacing:4,children:[(0,a.jsx)(m,{sx:{width:"55px",height:"55px"},content:i?.name||"test",context:"primary",src:t}),(0,a.jsxs)(c.f,{direction:"row",alignItems:"center",sx:{color:"#000"},children:[(0,a.jsx)(u.default,{sx:{marginRight:"5px",width:"14px",height:"14px"}}),(0,a.jsx)(d.f,{variant:"h6",sx:{height:"24px"},children:i?.name})]})]})}],717524),e.s(["f",0,(e,t)=>{if(e.meta?.customerVATInvoice?.rateInfo?.selectedSla)return e.meta.customerVATInvoice.rateInfo.selectedSla;let i={...e.sla};i.entity="Job";let n={...e.location?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};n?.sla&&(n.entity="Property",n.name=n.sla.name);let r={...e.customer?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};return r?.sla&&(r.entity="Customer",r.name=r.sla.name),{...i,...r,...n}}],122891)},807673,e=>{var t=e.i(391398),i=e.i(691567),n=e.i(760814),r=e.i(322135),s=e.i(115871),o=e.i(48441),a=e.i(184696),l=e.i(594301);let d=e=>{let{value:i,withTooltip:n=!1}=e,d=(0,a.G)(i),{hasRole:c}=(0,l.f)(),{text:m,customerText:p,supplierText:f}=[...o.o,...o.w,...o.y].find(e=>e.value===i)||{statusText:""},h=c("admin")?m:c("supplier")?f||m:c("customer")&&p||m;return n?(0,t.jsx)(r.f,{title:h,children:(0,t.jsx)(u,{children:(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})})})}):(0,t.jsxs)(u,{children:[(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})}),(0,t.jsx)(s.f,{variant:"body2",children:h})]})},u=n.U.span.withConfig({displayName:"status__StyledLabel",componentId:"sc-6938cfcd-0"})`
  display: flex;
  align-items: center;
`;d.propTypes={value:i.string.isRequired,withTooltip:i.bool},e.s(["f",0,d])},469908,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),s=e.r(391398);i.default=(0,r.default)((0,s.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done")},314695,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),s=e.r(391398);i.default=(0,r.default)((0,s.jsx)("path",{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"}),"HomeOutlined")},913918,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=n(e.r(421506)),s=e.r(391398);i.default=(0,r.default)((0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"ScheduleRounded")}])})();