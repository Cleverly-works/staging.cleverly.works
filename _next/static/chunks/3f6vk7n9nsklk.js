(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,497844,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(773831),n=e.i(33670),s=e.i(901004),o=e.i(509790),a=e.i(692113),l=e.i(137995),d=e.i(817581),u=e.i(420),c=e.i(407329),m=e.i(390536),f=e.i(978319),p=e.i(376733),h=e.i(13558),x=e.i(562673),j=e.i(339909),b=e.i(89029),v=e.i(129503),g=e.i(213419),y=e.i(12028),T=e.i(813843),w=e.i(115871),S=e.i(379500);let C={add:(0,t.jsx)(d.default,{}),archive:(0,t.jsx)(a.default,{}),avatar:(0,t.jsx)(y.default,{}),check:(0,t.jsx)(u.default,{}),delete:(0,t.jsx)(f.default,{}),description:(0,t.jsx)(c.default,{}),download:(0,t.jsx)(m.default,{}),info:(0,t.jsx)(h.default,{}),edit:(0,t.jsx)(p.default,{}),location:(0,t.jsx)(b.default,{}),unarchive:(0,t.jsx)(l.default,{}),uploadFile:(0,t.jsx)(x.default,{}),receipt:(0,t.jsx)(j.default,{}),visibility:(0,t.jsx)(g.default,{}),cancel:(0,t.jsx)(S.default,{})},_={default:(0,t.jsx)(o.default,{}),defaultHoriz:(0,t.jsx)(v.default,{}),description:(0,t.jsx)(c.default,{})};e.s(["f",0,e=>{let{actions:o,icon:a="default",disabled:l}=e,[d,u]=(0,i.useState)(null),c=()=>{u(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(r.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:l,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),u(e.currentTarget)},children:_[a]}),(0,t.jsx)(n.f,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:!!d,onClose:c,slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:o.map((e,i)=>(0,t.jsx)(s.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),c()},sx:{pl:3,pr:4},children:(0,t.jsxs)(T.f,{direction:"row",alignItems:"center",spacing:2,children:[e.icon?C[e.icon]:null,(0,t.jsx)(w.f,{children:e.tooltip})]})},i))})]})}])},708051,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(800884),n=e.i(280445),s=e.i(813762),o=e.i(529292);let a=(0,n.f)(r.f,{shouldForwardProp:e=>"chipColor"!==e&&"textColor"!==e})(e=>{let{chipColor:t,textColor:i,variant:r}=e,n="outlined"===r;return{fontSize:"11px",color:n?t:i,backgroundColor:n?"transparent":t,border:n?`1px solid ${t}`:void 0,borderRadius:"0px 16px 16px 0px",...n&&{"& .MuiChip-icon":{color:t,fontSize:"14px",marginLeft:"6px"}}}});e.s(["f",0,e=>{let r,{chipProps:n={},tagEntityId:l,name:d,color:u,tooltipTitle:c,variant:m="filled",icon:f,onDelete:p}=e,h=u||"#f2f2f2",x=(0,i.useMemo)(()=>"function"==typeof p?{...n,onDelete:e=>{e.stopPropagation(),p(l)}}:{...n},[n,p,l]),j=(0,t.jsx)(a,{...x,size:"small",label:d,icon:f,variant:m,chipColor:h,textColor:(r=h,(0,o.G)(r,"#FFFFFF")>2.5?"#FFFFFF":"#000")});return c?(0,t.jsx)(s.l,{title:c,children:(0,t.jsx)("span",{style:{display:"inline-flex"},children:j})}):j}],708051)},190844,e=>{var t=e.i(391398),i=e.i(773831),r=e.i(715007),n=e.i(34121),s=e.i(40303),o=e.i(813843),a=e.i(652148),l=e.i(512057),d=e.i(469908),u=e.i(497844),c=e.i(514707),m=e.i(191788),f=e.i(422411);let p=(0,c.f)(s.f)(e=>{let{color:t}=e;return{"&.MuiListItemText-root .MuiListItemText-primary":{fontWeight:700,color:t||void 0}}});e.s(["f",0,e=>{let{tagEntityId:s,tagId:c,name:h,color:x,editable:j=!0,onDelete:b=()=>{},onColorChange:v=()=>{},onNameChange:g=()=>{}}=e,{register:y,handleSubmit:T}=(0,f.G)({defaultValues:{name:h,color:x}}),[w,S]=(0,m.useState)(null),C=(0,m.useMemo)(()=>[{icon:"delete",onClick:e=>{e.stopPropagation(),b(s)},tooltip:"Remove"},{icon:"edit",onClick:e=>{e.stopPropagation(),S("rename")},tooltip:"Rename"},{icon:"visibility",onClick:e=>{e.stopPropagation(),S("changeColor")},tooltip:"Change color"}],[s,b]),_=e=>{e.stopPropagation(),S(null)},q=e=>{let{color:t}=e;v({tagId:c,color:t}),S(null)},I=e=>{let{name:t}=e;g({tagId:c,name:t}),S(null)};return(0,t.jsx)(r.f,{disablePadding:!0,secondaryAction:!j||!w&&(0,t.jsx)(u.f,{icon:"defaultHoriz",actions:C}),children:w?({changeColor:()=>(0,t.jsxs)(o.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",pl:"16px",pr:"16px",children:[(0,t.jsx)("input",{name:"color",ref:y,type:"color",style:{padding:0,border:"none",backgroundColor:"unset"}}),(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(i.f,{size:"small",color:"danger",onClick:_,children:(0,t.jsx)(l.default,{})}),(0,t.jsx)(i.f,{size:"small",color:"success",onClick:T(q),children:(0,t.jsx)(d.default,{})})]})]}),rename:()=>(0,t.jsxs)(o.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",pl:"16px",pr:"16px",children:[(0,t.jsx)(a.f,{name:"name",inputRef:y,variant:"standard",color:"secondary"}),(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(i.f,{size:"small",color:"danger",onClick:_,children:(0,t.jsx)(l.default,{})}),(0,t.jsx)(i.f,{size:"small",color:"success",onClick:T(I),children:(0,t.jsx)(d.default,{})})]})]})})[w]():(0,t.jsx)(n.f,{children:(0,t.jsx)(p,{primary:h,color:x||void 0})})},c)}])},552987,879572,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(738251),n=e.i(115871),s=e.i(522507),o=e.i(388866),a=e.i(813843),l=e.i(21557),d=e.i(708051),u=e.i(190844),c=e.i(755548),m=e.i(382161),f=e.i(77052),p=e.i(185758),h=e.i(556918);let x={reactive:"This tag will be removed from the reactive job.",ppm:"This tag will be removed from the PPM job.",quote:"This tag will be removed from the quote.",task:"This tag will be removed from the task.",workflow:"This tag will be removed from the workflow.",asset:"This tag will be removed from the asset."},j=e=>{let{open:i,onClose:r,onConfirm:s,target:o="reactive"}=e;return(0,t.jsxs)(m.f,{open:i,onClose:r,children:[(0,t.jsx)(h.f,{children:"Remove tag?"}),(0,t.jsx)(p.f,{children:(0,t.jsx)(n.f,{children:x[o]})}),(0,t.jsxs)(f.f,{children:[(0,t.jsx)(c.f,{color:"secondary",variant:"contained",onClick:r,children:"Cancel"}),(0,t.jsx)(c.f,{color:"danger",variant:"contained",onClick:s,children:"Remove"})]})]})};e.s(["o",0,j,"p",0,function(e){return"quote"===e?"quote":"ppm"===e?"ppm":"reactive"}],879572);var b=e.i(731349),v=e.i(330774),g=e.i(97969),y=e.i(770614),T=e.i(330499),w=e.i(913918);let S=(0,i.createElement)(w.default);e.s(["f",0,e=>{let{tags:c=[],handleDeleteTagEntity:m,readOnly:f=!1,slaJobTimings:p,ppmLinkRowFallback:h,removeTagTarget:x="reactive",showAllTags:w=!1,expandToContainer:C=!1,clipLeadingWhenNarrow:_=!1,listSx:q}=e,I=(0,l.f)(),[R,$]=(0,i.useState)(null),[M,A]=(0,i.useState)({open:!1,tagEntityId:null}),J=(0,i.useMemo)(()=>c.map(e=>{let t={...(0,g.r)(e.tag.meta,e.meta)??e.tag.meta??{},...(0,y.q)(e.tag.meta,e.meta)??{}};return{...e,tag:{...e.tag,meta:t}}}),[c]),k=(0,i.useMemo)(()=>{let e=(0,b.R)(J);return(0,g.y)(e,e=>(0,b.N)(e??void 0)||(0,b.z)(e??void 0)||(0,y.K)(e??void 0)||(0,T.f)(e??void 0))},[J]),L=w?k:k?.slice(0,5),U=w?0:(k?.length??0)-(L?.length??0),O=!!R,P=f?void 0:e=>{A({open:!0,tagEntityId:e})},D=()=>{A({open:!1,tagEntityId:null})},z=async()=>{let{tagEntityId:e}=M;if(null==e||!m)return void D();try{await m(e),D()}catch(t){let e=t instanceof Error?t.message:"Failed to remove tag";I.show({content:`Error: ${e}`,severity:"error"})}},F=L.map((e,i)=>{var r;let n=(0,y.K)(e.tag.meta)?(0,y.b)(e.tag.name,e.tag.meta):(0,g._)(e.tag.name,e.tag.meta,h),s=(0,g.I)(e.tag.name,e.tag.meta,h)??(0,y.l)(e.tag.meta)??(0,T.n)(e.tag.meta)??(0,b.A)(e.tag.meta,p,e.createdAt),o=(r=e.tag.meta,(0,T.f)(r)?{variant:"outlined",icon:S}:null),a=(0,g.e)(e.tag.meta,e.tag.name)??(0,b.f)(e.tag.meta),l=!(0,v.f)(e.tag);return(0,t.jsx)(d.f,{tagEntityId:e.id||i,name:n,color:a,tooltipTitle:s,variant:o?.variant,icon:o?.icon,onDelete:l?P:void 0},e.id)}),H=!w&&U>0?(0,t.jsxs)(n.f,{component:"span",fontWeight:700,onMouseEnter:e=>{$(e.currentTarget),e.stopPropagation()},children:["+",U]}):null;return(0,t.jsxs)(r.f,{sx:{minWidth:0,..._?{direction:"ltr",display:"inline-flex",width:"max-content",verticalAlign:"middle"}:{maxWidth:"100%"},...C&&!_?{width:"100%"}:{}},children:[!f&&(0,t.jsx)(j,{open:M.open,onClose:D,onConfirm:()=>void z(),target:x}),w?(0,t.jsx)(r.f,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",gap:1,...q},children:F}):(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",spacing:1,sx:{flexWrap:"nowrap",minWidth:0,overflow:_?"visible":"hidden","& .MuiChip-root":{flexShrink:0},...q},children:[F,H]}),!w&&U>0&&(0,t.jsx)(s.U,{id:O?"tags-in-table-popover":void 0,open:O,anchorEl:R,onClose:()=>$(null),anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsx)(o.f,{children:k?.map(e=>(0,t.jsx)(u.f,{tagEntityId:e.id,tagId:e.tag.id,name:(0,y.K)(e.tag.meta)?(0,y.b)(e.tag.name,e.tag.meta):(0,g._)(e.tag.name,e.tag.meta,h),color:(0,g.e)(e.tag.meta,e.tag.name)??(0,b.f)(e.tag.meta),editable:!1},e.tag.id))})})]})}],552987)},770614,e=>{let t="on-hold-job",i="On hold";function r(e){return e?.systemTagKey===t}function n(e,r){let n=r?.systemTagKey??(e===i?t:null);return n&&n===t?{...r,systemTagKey:n,jobHoldReasonLabel:r?.jobHoldReasonLabel??null,jobHoldReasonValue:r?.jobHoldReasonValue??null}:null}e.s(["j",0,t,"T",0,i,"b",0,function(e,t){let i=n(e,t);if(!i)return e;let r=i.jobHoldReasonLabel?.trim();return r?`${e}: ${r}`:e},"l",0,function(e){if(!r(e))return null;let t=n(i,e);if(!t)return null;let s=t.jobHoldReasonLabel?.trim();return s?`This job is on hold: ${s}.`:"This job is currently on hold."},"K",0,r,"p",0,function(e){return!!e&&(!!r(e.meta??void 0)||e.name===i)},"q",0,function(e,t){return e||t?{...e,...t,systemTagKey:t?.systemTagKey??e?.systemTagKey,jobHoldReasonLabel:t?.jobHoldReasonLabel??e?.jobHoldReasonLabel??null,jobHoldReasonValue:t?.jobHoldReasonValue??e?.jobHoldReasonValue??null,color:e?.color??t?.color}:null}])},97969,e=>{var t=e.i(946028),i=e.i(494575);let r="follow-on-job",n="remedial-quote",s="Follow on job",o="Remedial quote",a=new Set([r,n]),l=i.f.COLOUR.help,d=i.f.COLOUR.success;function u(e){let t=e?.systemTagKey;return!!t&&a.has(t)}function c(e){return!!e&&(!!u(e.meta??void 0)||e.name===s||e.name===o)}function m(e,t){return e||t?{...e,...t,systemTagKey:t?.systemTagKey??e?.systemTagKey,parentJobType:t?.parentJobType??e?.parentJobType,parentJobNumber:t?.parentJobNumber??e?.parentJobNumber,color:e?.color??t?.color}:null}function f(e,t,i){let l=t?.systemTagKey??(e===s?r:e===o?n:null);return l&&a.has(l)?{...t,systemTagKey:l,parentJobType:t?.parentJobType??i?.parentJobType??null,parentJobNumber:t?.parentJobNumber??i?.parentJobNumber??null}:null}function p(e,i,n){let s=f(e,i,n);if(!s)return e;let o=function(e){let i=e.parentJobNumber;if(!i)return null;if(e.systemTagKey===r){let t="ppm"===e.parentJobType?"PM":"reactive"===e.parentJobType?"J":"";return t?`${t} ${i}`:i}let n=(0,t.f)(e.parentJobType);return n?`${n} ${i}`:i}(s);return o?`${e}: ${o}`:e}e.s(["T",0,function(e,t){return e?.length?e.map(e=>{let i=m(e.tag.meta,e.meta);return p(e.tag.name,i,t)}).join(", "):"-"},"_",0,p,"I",0,function(e,i,s){let o=f(e,i,s);if(!o)return null;let a=o.parentJobNumber,l=(0,t.f)(o.parentJobType),d=a&&l?`${l} ${a}`:a??"—";return o.systemTagKey===n?`Remedial quote raised from parent work order ${d}.`:o.systemTagKey===r?`Follow-on work linked to parent job ${d}.`:null},"W",0,c,"r",0,m,"w",0,function(e){let t=e.parentJob;return t?.number==null||""===t.number?null:{parentJobType:t.type??null,parentJobNumber:String(t.number)}},"e",0,function(e,t){let i=t?f(t,e):e&&u(e)?e:null;return i?.systemTagKey===n?d:i?.systemTagKey===r?l:e?.color},"$",0,f,"y",0,function(e,t){let i=[],r=[],n=[];for(let s of e)t(s.tag.meta??void 0)?i.push(s):c(s.tag)?r.push(s):n.push(s);return[...i,...r,...n]}])},731349,330499,e=>{var t=e.i(494575),i=e.i(65295);function r(e){return e?.systemTagKey==="time-held"}function n(e){return e?.color||"#0EA5E9"}e.s(["n",0,function(e){return r(e)?"Attendance time is held for a supplier offer on this job.":null},"f",0,r,"W",0,function(e){return!!e&&(!!r(e.meta??void 0)||"Time held"===e.name)},"k",0,n],330499);let s=new Set(["sla-at-risk:job-report","sla-at-risk:on-site","sla-at-risk:quote-returned","sla-breach:job-report","sla-breach:on-site","sla-breach:quote-returned"]),o=new Set(["sla-at-risk:job-report","sla-at-risk:on-site","sla-at-risk:quote-returned"]),a=new Set(["sla-breach:job-report","sla-breach:on-site","sla-breach:quote-returned"]),l=t.f.muiTheme.palette.secondary.main;function d(e){let t=e?.systemTagKey;return!!t&&s.has(t)}function u(e){return e?.systemTagKey==="outstanding-quote"}let c={"sla-at-risk:job-report":"Job report","sla-at-risk:on-site":"On site","sla-at-risk:quote-returned":"Quote returned"},m={"sla-breach:job-report":"Job report","sla-breach:on-site":"On site","sla-breach:quote-returned":"Quote returned"},f={"sla-at-risk:job-report":"jobReportTimingEnd","sla-at-risk:on-site":"onSiteTimingEnd","sla-at-risk:quote-returned":"quoteReturnedTimingEnd"};e.s(["A",0,function(e,t,r){if(u(e)){let t="number"==typeof e?.quoteId?` #${e.quoteId}`:"";return`Outstanding quote${t}: this asset is linked to a quote that is awaiting decision.`}return function(e,t){let r,n=e?.systemTagKey;if(!n||!o.has(n))return null;let s=c[n];if(!s)return null;let a=(r=f[n])&&t&&null!=t[r]?t[r]:e?.slaDueAt??e?.dueAt??void 0,l="sla-at-risk:quote-returned"===n?"quote":"job",d="—";return a&&(d=(0,i.f)(a,!0)||"—"),`This ${l} is at risk of breaching its ${s} SLA — due by ${d}.`}(e,t)??function(e,t){let r=e?.systemTagKey;if(!r||!a.has(r))return null;let n=m[r];if(!n)return null;let s="sla-breach:quote-returned"===r?"quote":"job",o=e?.slaBreachedAt??e?.breachedAt??t??void 0,l="—";return o&&(l=(0,i.f)(o,!0)||"—"),`This ${s} has breached its ${n} SLA — breached at ${l}.`}(e,r)},"g",0,function(e){return e?.isSystemTag===!0||!!e?.systemTagKey},"z",0,u,"N",0,d,"y",0,function(e){return!!e&&d(e.meta??void 0)},"f",0,function(e){var t,i;let s,d;return u(e??void 0)?l:(t=e??void 0,(s=t?.systemTagKey)&&a.has(s))?"hsl(337, 92.50%, 47.30%)":(i=e??void 0,(d=i?.systemTagKey)&&o.has(d))?"#FF9800":r(e??void 0)?n(e):e?.color},"R",0,function(e){let t=[],i=[];for(let r of e)d(r.tag.meta??void 0)||u(r.tag.meta??void 0)?t.push(r):i.push(r);return[...t,...i]}],731349)},330774,e=>{var t=e.i(770614),i=e.i(97969),r=e.i(731349),n=e.i(330499);e.s(["f",0,function(e){return!!e&&((0,r.g)(e.meta)||(0,i.W)(e)||(0,t.p)(e)||(0,n.W)(e)||(0,r.y)(e)||"Outstanding quote"===e.name)}])},813762,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(738251),n=e.i(322135),s=e.i(13558);e.s(["p",0,e=>{let{title:o,iconSx:a,tooltipProps:l,ariaLabel:d="More information",focusable:u=!0}=e,[c,m]=(0,i.useState)(!1);return(0,t.jsx)(n.f,{arrow:!0,...l,describeChild:!0,title:o,open:c,onClose:()=>m(!1),disableFocusListener:!0,disableTouchListener:!0,children:(0,t.jsx)(r.f,{component:"span",role:u?"button":void 0,tabIndex:u?0:void 0,"aria-label":u?d:void 0,onClick:()=>m(!c),onMouseEnter:()=>m(!0),onMouseLeave:()=>m(!1),onFocus:u?()=>m(!0):void 0,onBlur:u?()=>m(!1):void 0,onKeyDown:u?e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),m(e=>!e))}:void 0,sx:{display:"inline-flex",cursor:"pointer",fontSize:"1.5rem",...a},children:(0,t.jsx)(s.default,{fontSize:"inherit"})})})},"l",0,e=>{let{title:i,children:r,tooltipProps:s}=e;return(0,t.jsx)(n.f,{arrow:!0,placement:"top",...s,title:i,children:r})}])},65295,e=>{var t=e.i(362537);e.s(["f",0,function(e){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e?(0,t.default)(e).format(i?"DD/MM/YYYY HH:mm:ss":"DD/MM/YYYY"):""}])},879436,e=>{e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:t,currencyDisplay:"symbol",style:"currency"}).format(e)}])},946028,e=>{e.s(["f",0,function(e){switch(e){case"ppm":return"PM";case"quote":return"Q";case"reactive":return"J";default:return""}}])},299796,e=>{var t=e.i(946028);e.s(["f",()=>t.f])},407784,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(691567),n=e.i(747112),s=e.i(871931),o=e.i(302966),a=e.i(760981);let l={accordionSx:{},accordionSummarySx:{},accordionDetailsSx:{},expandIcon:n.f},d=e=>{let{title:r,children:n,accordionSx:d=l.accordionSx,accordionSummarySx:u=l.accordionSummarySx,accordionDetailsSx:c=l.accordionDetailsSx,expandIcon:m=l.expandIcon,headerAdornment:f=null,disabled:p=!1}=e,[h,x]=(0,i.useState)(!p);return(0,i.useEffect)(()=>{p||x(!0)},[p]),(0,t.jsxs)(s.f,{sx:{borderTop:"none!important",boxShadow:"none",marginBottom:"15px",opacity:p?.5:1,...d},expanded:h,onClick:p?()=>{}:e=>{e.stopPropagation(),x(e=>!e)},children:[(0,t.jsxs)(o.f,{sx:{backgroundColor:"#F2F2F2",borderRadius:"4px",...u},expandIcon:(0,t.jsx)(m,{}),children:[f&&(0,t.jsx)(f,{}),r]}),(0,t.jsx)(a.f,{onClick:e=>e.stopPropagation(),sx:{...c},children:n})]})};d.propTypes={title:r.node,children:r.object,accordionSx:r.object,accordionDetailsSx:r.object,accordionSummarySx:r.object,expandIcon:r.object,defaultExpanded:r.bool},e.s(["f",0,d])},529422,104868,e=>{e.s(["f",()=>l],529422),e.s(["f",()=>s.f],104868);var t=e.i(391398),i=e.i(115871),r=e.i(299796),n=e.i(807673);e.i(981683);var s=e.i(308680),s=s,o=e.i(411331),a=e.i(889231);let l=e=>{let{id:l,invoiceNumber:d,number:u,numberPrefix:c="",numberSuffix:m="",openCanvas:f=!1,isBlank:p=!1,isQuote:h=!1,underline:x=!1,shortJobDesc:j,status:b,style:v,type:g,toggleShow:y,isHref:T}=e,w=(0,o.f)(),S="quote"!==g&&h?"Q ":"";return(0,t.jsxs)("div",{style:v,children:[(0,t.jsxs)(a.f,{href:T?`/dashboard/issues/view?id=${u}`:void 0,onClick:e=>{if(e.stopPropagation(),p&&T){e.preventDefault(),window.open(`/dashboard/issues/view?id=${u}`,"_blank");return}if(f)return void w.show({content:(0,t.jsx)(s.f,{jobId:l,toggleShow:()=>{w.close(),y?.()},numberPrefix:c,numberSuffix:m}),submit:!1,title:h?"Quote Details":"Job Details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},sx:{color:f||p||T?"secondary.main":"inherit",cursor:f||p||T?"pointer":"inherit",textDecoration:x||p||T?"underline":"none"},children:[b&&(0,n.f)({value:b,withTooltip:!0}),`${(0,r.f)(g)} ${S}`,(e=>{let{id:t,number:i,invoiceNumber:r,numberPrefix:n,numberSuffix:s}=e,o=t?`${n} ${i||t} ${s}`:"";return r?`${o} / ${r}`:o})({id:l,number:u,invoiceNumber:d,numberPrefix:c,numberSuffix:m})]}),j&&(0,t.jsx)(i.f,{variant:"body2",children:j})]})}},981683,436295,308680,e=>{e.s([],981683),e.s(["f",()=>E],308680);var t=e.i(391398),i=e.i(191788),r=e.i(691567),n=e.i(432171),s=e.i(446305),o=e.i(203828),a=e.i(847474),l=e.i(717524),d=e.i(553875),u=e.i(76381),c=e.i(594301),m=e.i(362537),f=e.i(738251),p=e.i(740790),h=e.i(280445),x=e.i(813843),j=e.i(115871),b=e.i(889231),v=e.i(122891),g=e.i(624841),y=e.i(529422),T=e.i(407784),w=e.i(552987);let S=(0,h.f)(f.f)({margin:"5px 0px"}),C=e=>{let{isQuotes:i,job:r,numberPrefix:n,numberSuffix:s,showOrder:o=!0}=e,a=(0,v.f)(r),{hasRole:l}=(0,c.f)();return(0,t.jsx)(T.f,{title:"Details",children:(0,t.jsxs)(p.f,{container:!0,children:[(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[o&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{children:"Order"}),(0,t.jsx)(y.f,{id:r.id,number:r.number,numberPrefix:n,numberSuffix:s,type:r.type,isHref:!0})]}),r.tenantUser&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Tenant"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.tenantUser.fullName})]}),r.reference&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Reference"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.reference})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:i?"Description":"Short Job Description"}),(0,t.jsx)(j.f,{variant:"subtitle1",sx:{maxWidth:"14rem"},children:r?.shortJobDesc?.length>0&&r?.shortJobDesc[0]?.taxonomy.name||r.title})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(g.f,{value:r.status})]}),(r.tags?.length??0)>0&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Tags"}),(0,t.jsx)(w.f,{tags:r.tags,readOnly:!0,showAllTags:!0,slaJobTimings:{jobReportTimingEnd:r.jobReportTimingEnd,onSiteTimingEnd:r.onSiteTimingEnd,quoteReturnedTimingEnd:r.quoteReturnedTimingEnd}})]}),i&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Quote due date"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.quoteDue?(0,m.default)(r.quoteDue).format("YYYY-MM-DD"):"-"})]}),i&&!l("customer")&&(0,t.jsxs)(x.f,{rowGap:.5,children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Supplier(s)"}),r.quotations?.map(e=>{let{supplier:i}=e;return(0,t.jsx)(b.f,{href:`/dashboard/suppliers/view?id=${i?.id}`,color:"secondary",noWrap:!l("admin"),children:i?.name})})]})]}),(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[i&&!l("customer")&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:l("admin")?"Required quotes":"Quotation"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.quotations.length})]}),i&&!l("customer")&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:l("admin")?"Quotes received":"Received"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:`${(r.quotations||[]).reduce((e,t)=>"supplierQuoteComplete"===t.status?e+1:e,0)}/${r.quotations?.length||0}`})]}),!i&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Cost Category"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.costCategoryTaxonomy?.name})]}),!i&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Service"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.service?.name})]}),"ppm"!==r.type&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Priority"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:`${a?.name||"Not Specified "} (${a?.entity||"Default"})`})]}),(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Assigned To"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.manager?`${r.manager.nameFirst} ${r.manager.nameLast} `:"Unassigned"})]}),r.compliance&&(0,t.jsxs)(S,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Compliance"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r.compliance.name})]})]})]})})};C.propTypes={isQuotes:r.bool,job:r.object,showOrder:r.bool};var _=e.i(498681),q=e.i(879436);let I=(0,h.f)(f.f)({margin:"5px 0px"}),R=e=>{let{job:i}=e,{hasUserModule:r}=(0,_.f)(),{hasRole:n}=(0,c.f)(),s=n("customer_user"),o=n("admin_user"),a=r("finances");return(0,t.jsx)(T.f,{title:"Customer",children:(0,t.jsxs)(p.f,{container:!0,children:[(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{children:"Name"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/customers/view?id=${i.customer?.id}`,children:i.customer?.name})]}),i.customerUser&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{children:"Contact"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.customerUser.id}`,children:i.customerUser.fullName})]}),(!s&&!o||a)&&null!=i.customerSpendThreshold&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Spend Threshold"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:(0,q.f)(i.customerSpendThreshold)})]})]}),(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Email"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.customerUser?.email})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Phone"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.customerUser?.phone})]})]})]})})};R.propTypes={job:r.object.isRequired};let $=(0,h.f)(f.f)({margin:"5px 0px"}),M=e=>{let{job:i}=e,r=i.supplier?.contactUsers?.[0],n=i.supplierUser?.id&&r?.user&&i.supplierUser?.id!==r?.user?.id;return(0,t.jsx)(T.f,{title:"Supplier",children:(0,t.jsxs)(p.f,{container:!0,children:[(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)($,{children:[(0,t.jsx)(j.f,{children:"Name"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/suppliers/view?id=${i.supplier.id}`,children:i.supplier.name})]}),r&&(0,t.jsxs)($,{children:[(0,t.jsx)(j.f,{children:n?"Contact":"Contact / Operative"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${r.user.id}`,children:r.user.fullName})]}),i.supplierUser&&n&&(0,t.jsxs)($,{children:[(0,t.jsx)(j.f,{children:"Operative"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.supplierUser.id}`,children:i.supplierUser.fullName})]})]}),(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)($,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:n?"Contact email":"Email"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r?.user?.email})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:n?"Contact phone":"Phone"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:r?.user?.phone??"N/A"})]}),i.supplierUser&&n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)($,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Operative email"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.supplierUser?.email})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Operative phone"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.supplierUser?.phone})]})]})]})]})})};M.propTypes={job:r.object};let A=(0,h.f)(f.f)({margin:"5px 0px"}),J=e=>{let{address:i,location:r,sublocation:n}=e,{hasRole:s}=(0,c.f)();return(0,t.jsx)(T.f,{title:"Address",children:(0,t.jsxs)(p.f,{container:!0,children:[(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Property"}),(0,t.jsx)(b.f,{href:`/dashboard/properties/view?id=${r.id}&tab=details`,noWrap:s("supplier"),color:"secondary",children:r.name})," ",n&&(0,t.jsxs)(b.f,{href:`/dashboard/properties/view?id=${r.id}&tab=sublocations`,noWrap:s("supplier"),color:"secondary",children:["(",n.name,")"]})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Name"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.name||"N/A"})]})]}),(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Address"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.addressLine1}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.addressLine2}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.addressLine3}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.city}),s(["admin","customer"])&&(0,t.jsx)(j.f,{variant:"subtitle1",children:i.county}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.postCode})]})]})})};J.propTypes={address:r.object};var k=e.i(285835),L=e.i(986351);let U=e=>{let{answers:i}=e;return(0,t.jsxs)(t.Fragment,{children:[i&&i.length>0&&(0,t.jsx)(L.f,{children:"Questions"}),i&&i.map(e=>{let{meta:i}=e;return i?.input==="media"?null:(0,t.jsxs)(f.f,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:e.taxonomy?.name||e.name}),(0,t.jsx)(j.f,{children:e.comments||e.taxonomy_entity?.[0]?.comments})]},e.id||e.taxonomyId)}),i&&i.length>0&&(0,t.jsx)(L.f,{})]})};U.propTypes={answers:r.default.array},e.s(["f",0,U],436295);let O=(0,h.f)(f.f)({margin:"5px 0px"}),P=e=>{let{isQuote:i,job:r,isReactive:n,isPPM:s,isQuoted:o}=e,a=r.shortJobDesc&&r.shortJobDesc.length?r.shortJobDesc[0].taxonomy.name:"",l=r.quoteSummary&&r.quoteSummary.length?r.quoteSummary[0].taxonomy.name:"",d=r.answers?.map(e=>{let{id:t,taxonomyId:i,comments:r,taxonomy:{name:n}}=e;return{id:t,taxonomyId:i,comments:r,name:n}});return(0,t.jsxs)(T.f,{title:"Issue Reported - Client",children:[(n||s)&&(0,t.jsxs)(O,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Short Job Description"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:a||"N/A"})]}),(n||s)&&(0,t.jsxs)(O,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Job Description"}),(0,t.jsx)(k.f,{sx:{fontSize:"1rem"},children:r.description||"N/A"})]}),o&&(0,t.jsxs)(O,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Quote Summary"}),(0,t.jsx)(k.f,{sx:{fontSize:"1rem"},children:l||"N/A"})]}),i&&(0,t.jsxs)(O,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Scope of works"}),(0,t.jsx)(k.f,{sx:{fontSize:"1rem"},children:r.description||"N/A"})]}),(0,t.jsx)(U,{answers:d})]})};P.propTypes={job:r.object,isQuote:r.bool};var D=e.i(48441);let z=(0,h.f)(f.f)({margin:"5px 0px"}),F=e=>{let{quotation:i}=e,{hasUserModule:r}=(0,_.f)(),{hasRole:n}=(0,c.f)(),s=n("supplier"),o=n("customer"),a=n("tenant"),l=n("customer_user"),d=n("admin_user"),u=r("finances"),m=D.E.find(e=>e.value===i.status)||{text:"-",context:"info"},f=(0,q.f)((i?.lineItems??[]).filter(e=>"Labour"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),h=(0,q.f)((i?.lineItems??[]).filter(e=>"Materials"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),x=(0,q.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.supplierTotal,0)),b=(0,q.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.customerTotal,0));return(0,t.jsx)(T.f,{title:`Quotation ${i?.quoteNumber||""}`,children:(0,t.jsxs)(p.f,{container:!0,children:[(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(z,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:m.text})]}),!o&&!a&&(0,t.jsxs)(z,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Labour Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:f})]}),!o&&!a&&(0,t.jsxs)(z,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Materials Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:h})]})]}),(0,t.jsxs)(p.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[!o&&!a&&(0,t.jsxs)(z,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Supplier Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:x})]}),!s&&(!l&&!a&&!d||u)&&(0,t.jsxs)(z,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Customer Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:b})]})]})]})})};F.propTypes={quotation:r.object};let H=e=>{let r,{jobId:m,toggleShow:f,numberPrefix:p="",numberSuffix:h=""}=e,{hasUserModule:x}=(0,_.f)(),{hasRole:j}=(0,c.f)(),b=(0,o.useRouter)(),v=j("tenant"),g=j("customer_user"),y=j("admin_user"),T=x("finances"),w=x("quotes");(0,i.useEffect)(()=>{let e=()=>{f()};return b.events.on("routeChangeComplete",e),()=>{b.events.off("routeChangeComplete",e)}},[b.events,f]);let{loading:S,data:{job:q}={job:{}}}=(0,n.t)(s.O,{variables:{jobId:m}}),I=q.quoted,$="quote"===q.type,A="reactive"===q.type,k="ppm"===q.type;if(S)return(0,t.jsx)(d.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(u.f,{color:"secondary"})});let L=q?.quotations?.length?[...q.quotations].sort((e,t)=>e.id-t.id):[],U=(0,a.w)(q?.location,"registered");return(0,t.jsxs)(t.Fragment,{children:[q.customer&&(0,t.jsx)(l.f,{editable:!1,entity:{id:q.customer.id,name:q.customer.name,website:q.customer.website},entityName:"Account"}),(0,t.jsx)(C,{isQuotes:$,job:q,numberPrefix:p,numberSuffix:h}),U&&(0,t.jsx)(J,{address:U.address,location:q?.location,sublocation:q?.sublocation}),j(["admin","customer","tenant"])&&(0,t.jsx)(R,{job:q}),j(["admin"])&&q.supplier&&(0,t.jsx)(M,{job:q}),!!L.length&&$&&(!g&&!v&&!y||w)&&(!g&&!v&&!y||T)&&(r=[...L],j("customer")&&(r=r.filter(e=>{let{status:t}=e;return"supplierQuoteSent"===t||"quotationAccepted"===t||"quotationRejected"===t})),r).map(e=>(0,t.jsx)(F,{quotation:e})),(0,t.jsx)(P,{job:q,isReactive:A,isPPM:k,isQuoted:I,isQuote:$})]})};H.propTypes={jobId:r.number.isRequired,toggleShow:r.func.isRequired,numberPrefix:r.string,numberSuffix:r.string};let E=H},446305,e=>{var t=e.i(159080),i=e.i(987123);t.f`
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
`;let r=t.f`
  mutation UpdateJob(
    $id: Int!
    $changes: Job_set_input = {}
    $timing: [JobTiming_insert_input!]!
    $_append: Job_append_input = {}
  ) {
    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes, _append: $_append) {
      id
    }
    insert_JobTiming(objects: $timing) {
      returning {
        id
        status
        createdAt
      }
    }
  }
`,n=t.f`
  mutation InsertJobTiming($timing: [JobTiming_insert_input!]!) {
    insert_JobTiming(objects: $timing) {
      returning {
        id
        status
        createdAt
      }
    }
  }
`;t.f`
  query GetJobHistory(
    $jobId: Int
    $locationId: Int!
    $limit: Int
    $offset: Int
    $serviceId: Int
    $startDate: timestamptz!
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      order_by: { createdAt: desc }
      where: {
        createdAt: { _gte: $startDate }
        id: { _neq: $jobId }
        locationId: { _eq: $locationId }
        serviceId: { _eq: $serviceId }
        status: { _nin: ["pending", "raised", "offered", "accepted", "inProgress"] }
      }
    ) {
      id
      title
      status
      scheduledAt
      createdAt
      meta
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
        }
      }
    }
    meta: Job_aggregate(
      where: {
        createdAt: { _gte: $startDate }
        id: { _neq: $jobId }
        locationId: { _eq: $locationId }
        serviceId: { _eq: $serviceId }
        status: { _nin: ["pending", "raised", "offered", "accepted", "inProgress"] }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;let s=t.f`
  query GetJobOffCanvas($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      access
      costCategory
      customerSpendThreshold
      description
      supplierLabourAmount
      supplierMaterialsAmount
      quoteDue
      quoteNumber
      id
      number
      meta
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
          customerTotal
          type
          unitRate
          customerUnitRate
          supplierTotal
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
          meta
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
  }
  ${i.a}
  ${i.S}
`;e.s(["O",0,s,"K",0,n,"D",0,r])},807673,e=>{var t=e.i(391398),i=e.i(691567),r=e.i(760814),n=e.i(322135),s=e.i(115871),o=e.i(48441),a=e.i(184696),l=e.i(594301);let d=e=>{let{value:i,withTooltip:r=!1}=e,d=(0,a.G)(i),{hasRole:c}=(0,l.f)(),{text:m,customerText:f,supplierText:p}=[...o.o,...o.w,...o.y].find(e=>e.value===i)||{statusText:""},h=c("admin")?m:c("supplier")?p||m:c("customer")&&f||m;return r?(0,t.jsx)(n.f,{title:h,children:(0,t.jsx)(u,{children:(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})})})}):(0,t.jsxs)(u,{children:[(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})}),(0,t.jsx)(s.f,{variant:"body2",children:h})]})},u=r.U.span.withConfig({displayName:"status__StyledLabel",componentId:"sc-6938cfcd-0"})`
  display: flex;
  align-items: center;
`;d.propTypes={value:i.string.isRequired,withTooltip:i.bool},e.s(["f",0,d])},717524,122891,e=>{var t=e.i(391398),i=e.i(222351),r=e.i(115871),n=e.i(314695),s=e.i(813843);let o=i.f;e.s(["f",0,e=>{let{avatar:i,entity:a}=e;return(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:{margin:"1.3em 0em"},spacing:4,children:[(0,t.jsx)(o,{sx:{width:"55px",height:"55px"},content:a?.name||"test",context:"primary",src:i}),(0,t.jsxs)(s.f,{direction:"row",alignItems:"center",sx:{color:"#000"},children:[(0,t.jsx)(n.default,{sx:{marginRight:"5px",width:"14px",height:"14px"}}),(0,t.jsx)(r.f,{variant:"h6",sx:{height:"24px"},children:a?.name})]})]})}],717524),e.s(["f",0,(e,t)=>{if(e.meta?.customerVATInvoice?.rateInfo?.selectedSla)return e.meta.customerVATInvoice.rateInfo.selectedSla;let i={...e.sla};i.entity="Job";let r={...e.location?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};r?.sla&&(r.entity="Property",r.name=r.sla.name);let n={...e.customer?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};return n?.sla&&(n.entity="Customer",n.name=n.sla.name),{...i,...n,...r}}],122891)},817581,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"AddCircleOutline")},692113,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"m20.54 5.23-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27M12 17.5 6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z"}),"Archive")},379500,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 12 7.7 9.11a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41"}),"CancelRounded")},420,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle")},978319,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},407329,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"}),"DescriptionOutlined")},469908,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"}),"Done")},390536,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},376733,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},314695,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"}),"HomeOutlined")},13558,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"}),"InfoOutlined")},129503,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz")},509790,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert")},913918,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"ScheduleRounded")},137995,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"m20.55 5.22-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28M12 9.5l5.5 5.5H14v2h-4v-2H6.5zM5.12 5l.82-1h12l.93 1z"}),"Unarchive")},562673,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01 12.01 11z"}),"UploadFile")},213419,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility")},747112,e=>{var t=e.i(191788),i=e.i(691567);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(this,arguments)}var n=(0,t.forwardRef)(function(e,i){var n=e.color,s=e.size,o=void 0===s?24:s,a=function(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}(e,["color","size"]);return t.default.createElement("svg",r({ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:void 0===n?"currentColor":n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),t.default.createElement("polyline",{points:"6 9 12 15 18 9"}))});n.propTypes={color:i.default.string,size:i.default.oneOfType([i.default.string,i.default.number])},n.displayName="ChevronDown",e.s(["f",0,n],747112)}])})();