(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[21443,e=>{var t=e.i(391398),r=e.i(755548),n=e.i(76381),i=e.i(813843),a=e.i(115871),o=e.i(203828);e.s(["f",0,e=>{let{title:s,text:l,children:d}=e;return(0,t.jsx)(i.f,{alignItems:"center",justifyContent:"center",spacing:2,sx:{minHeight:"60vh",px:2,textAlign:"center"},children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.f,{variant:"h5",children:s}),l&&(0,t.jsx)(a.f,{color:"text.secondary",children:l}),d,(0,t.jsx)(r.f,{variant:"contained",color:"secondary",onClick:()=>o.default.push("/dashboard"),children:"Go to your dashboard"})]}):(0,t.jsx)(n.f,{color:"secondary"})})}])},229299,e=>{var t=e.i(93198),r=e.i(262887);let n=async e=>{(0,t.Z)()?await (0,r.f)(e):window.location.replace(e)};e.s(["f",0,n])},48534,828892,e=>{var t=e.i(221168),r=e.i(795617),n=e.i(942446),i=e.i(199525),a=e.i(26133),o=e.i(393788);let s=["onMyWay","onMyWayResumed"],l=["onMyWayPaused","inProgress","onHold"],d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,o.W)(e,s,l)},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return(0,o.P)(d(e),t)};e.s(["G",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return(0,a.f)(u(e,t))},"W",0,u,"M",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null!=d(e).openStartMs},"Z",0,d],828892);var c=e.i(68881);e.i(271621);var m=e.i(569373),f=e.i(48441),p=e.i(93198),h=e.i(911383);let g={content:"Job report custom fields could not be loaded",severity:"warning"},b={content:"Some photos could not be added to the job report",severity:"warning"},y={content:"Allow pop-ups for this site to open the job report",severity:"warning"},v=()=>{if((0,p.Z)())return null;let e=window.open("/download","_blank");return e&&(e.opener=null),e},w=async e=>{let{adminId:a,job:o,showSnackbar:s}=e,l=Array.isArray(o.media)?o.media:[],d=(0,r.w)(o.location,"registered"),p=f.o.find(e=>e.value===o.report?.completion),y=[];try{y=(await (0,c.C)({surface:"job_report",workOrderId:o.id,jobReportId:o.report?.id??null})).fields.map(e=>({label:e.definition.name,value:(0,m.r)(e.value,e.definition)}))}catch{y=[],s(g)}let v={job:{assets:o.assets,assetCategory:o.assetCategory?.name??null,address:d?.address,sublocation:o.sublocation,contractor:o.supplier?.name,completedAt:"incorrect"===o.timingStatus?o.correctEnd:(0,n.f)(o,"completed"),customer:o.customer?.name,description:o.description?t.Buffer.from(o.description).toString("base64"):"",expenses:o.expenses?.map(e=>e.description),further:p?.text||null,id:o.id,notes:o.report?.notes?t.Buffer.from(o?.report?.notes).toString("base64"):"",number:o.number,raisedBy:(0,i.f)(o,"pending"),reference:o.reference,service:o.service?.name,dateStart:"incorrect"===o.timingStatus?o.correctStart:(0,n.f)(o,"inProgress"),dateEnd:"incorrect"===o.timingStatus?o.correctEnd:(0,n.f)(o,"completed"),travelTime:(e=>{if(e?.timingStatus==="incorrect")return null;let t="number"==typeof e?.travelTimeMinutes?e.travelTimeMinutes:e?.meta?.travelTimeMinutes;if("number"==typeof t&&Number.isFinite(t)&&t>0)return t;let r=Math.floor(u(e?.timings??[])/60);return r>0?r:null})(o),priority:o.sla?.name,passFailStatus:o.report?.passFailStatus,customerSignature:o.report?.meta?.customerSignatureName?{name:o.report?.meta.customerSignatureName,data:o.report?.meta.customerSignatureTime}:null,supplierSignature:o.report?.meta?.supplierSignatureName?{name:o.report?.meta.supplierSignatureName,data:o.report?.meta.supplierSignatureTime}:null,recommendations:o.report?.recommendations?t.Buffer.from(o.report?.recommendations).toString("base64"):""},jobReportId:o.report?.id??null,adminId:a,media:l.filter(e=>"image"===e.item.type&&!e.item.meta?.adminOnly).map(e=>{if(e.item?.meta?.thumbnails){let t=e.item.meta.thumbnails.find(e=>"small"===e.name);if(t)return{filename:t.relativePath}}return{filename:e.item.filename}}),customFields:y},w=await (0,h.g)("/pdf/job-report/create",v,{timeoutMs:18e4}),x=`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${w.key}`;return(0,h.G)(w)&&s(b),{blob:w,link:x}},x=async e=>{let{downloadTab:t=null,...r}=e,n=t??v();try{let{blob:e}=await w(r);window?.Capacitor?.Plugins?.Browser?await window.Capacitor.Plugins.Browser.open({url:e.url}):n?.location?n.location.assign(e.url):(0,p.Z)()||r.showSnackbar(y)}catch(e){throw n?.close(),e}};e.s(["q",0,{content:"Error downloading job report",severity:"error"},"m",0,x,"O",0,v,"k",0,w],48534)},26133,e=>{var t=e.i(362537);e.s(["f",0,e=>{let r=Math.max(0,Math.floor(e)),n=t.default.duration(1e3*r),i=Math.floor(n.asHours()),a=n.minutes().toString().padStart(2,"0"),o=n.seconds().toString().padStart(2,"0");return`${i}:${a}:${o}`}])},942446,199525,e=>{e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let r=null;return t.forEach(t=>{let n=e?.timings?.find(e=>e.status===t);r=n?.createdAt||r}),r}let r=e?.timings?.find(e=>e.status===t);return r?.createdAt||null}],942446),e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let r=null;return t.forEach(t=>{let n=e?.timings?.find(e=>e.status===t);r=n?.user?.fullName||r}),r}let r=e?.timings?.find(e=>e.status===t);return r?.user?.fullName||null}],199525)},393788,e=>{var t=e.i(362537);let r=(e,r)=>{let n=(0,t.default)(e.createdAt).diff((0,t.default)(r.createdAt));if(0!==n)return n;if(null==e.id||null==r.id)return 0;let i=Number(e.id),a=Number(r.id);return Number.isFinite(i)&&Number.isFinite(a)&&i!==a?i-a:String(e.id).localeCompare(String(r.id))},n=(e,r)=>{let n=(0,t.default)(r).diff((0,t.default)(e),"seconds");return Number.isFinite(n)?{startDate:(0,t.default)(e).toISOString(),endDate:(0,t.default)(r).toISOString(),durationSeconds:Math.max(0,n)}:null};e.s(["s",0,r,"P",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return null==e.openStartMs?e.closedSeconds:e.closedSeconds+Math.max(0,Math.floor((t-e.openStartMs)/1e3))},"W",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,s=[...e].sort(r),l=s;if(o?.requireStartStatus){let e=s.findIndex(e=>e.status===o.requireStartStatus);if(-1===e)return{closedSeconds:0,openStartMs:null,closedIntervals:[]};let t=s.length-1;if(o.clipEndStatus){let r=s.findIndex((t,r)=>r>=e&&t.status===o.clipEndStatus);-1!==r&&(t=r)}l=s.slice(e,t+1)}let d=null,u=0,c=[];for(let e of l){if(i.includes(e.status)&&e.createdAt){d=e.createdAt;continue}if(a.includes(e.status)&&d&&e.createdAt){let t=n(d,e.createdAt);t&&(u+=t.durationSeconds,c.push(t)),d=null}}let m=d?(0,t.default)(d).valueOf():null;return{closedSeconds:u,openStartMs:Number.isFinite(m)?m:null,closedIntervals:c}}])},716121,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e.r(421506)),a=e.r(391398);r.default=(0,i.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")},88933,e=>{var t=e.i(391398),r=e.i(716121),n=e.i(755548),i=e.i(115871),a=e.i(280445),o=e.i(203828),s=e.i(179319),l=e.i(190871);let d={"customer-vat":"Invoice","customer-group":"Group invoice","customer-ppm":"PPM invoice",supplier:"Supplier invoice","supplier-ppm":"Supplier PPM invoice",proforma:"Proforma invoice","credit-note":"Credit note",quote:"Quotation","purchase-order":"Purchase order for job","job-report":"Job report for job"};var u=e.i(21443),c=e.i(813843),m=e.i(191788),f=e.i(511667),p=e.i(220303),h=e.i(93198),g=e.i(229299),b=e.i(917569);let y=(0,a.f)("object")({flex:1,width:"100%",border:0}),v=e=>{let{title:r,url:n}=e;return(0,t.jsx)(y,{data:n,type:"application/pdf","aria-label":r,children:(0,t.jsxs)(i.f,{children:["This browser cannot show the PDF here."," ",(0,t.jsx)(b.f,{href:n,target:"_blank",rel:"noopener noreferrer",color:"secondary",children:"Open it"})]})})},w={404:"missing",422:"unprintable"},x=e=>{let{type:r,number:i,id:a}=e,[o,s]=(0,m.useState)({state:"opening"}),[l]=(0,f.f)("/documents/:type/:number",{queryKey:"document-link",throwOnError:!0}),b=(0,m.useCallback)(async e=>{s({state:"opening"});try{let t=await l({pathParams:{type:r,number:i},params:e?{id:e}:void 0});if(!t)return;"url"in t&&(0,h.Z)()?await (0,g.f)(t.url):"url"in t?s({state:"showing",url:t.url}):s({state:"choosing",matches:t.matches})}catch(e){s({state:(e instanceof p.Q?w[e.status]:void 0)??"failed"})}},[l,r,i]);switch((0,m.useEffect)(()=>{b(a)},[b,a]),o.state){case"showing":return(0,t.jsx)(v,{title:`${d[r]} ${i}`,url:o.url});case"choosing":return(0,t.jsx)(u.f,{title:`More than one document is numbered ${i}`,text:"Choose the one to open.",children:(0,t.jsx)(c.f,{spacing:1,children:o.matches.map(e=>(0,t.jsx)(n.f,{variant:"outlined",color:"secondary",onClick:()=>void b(e.id),children:e.label},e.id))})});case"missing":return(0,t.jsx)(u.f,{title:"This document could not be found",text:`There is no document numbered ${i} that your account can open.`});case"unprintable":return(0,t.jsx)(u.f,{title:"This document cannot be printed",text:`Document ${i} was created without the details a PDF needs.`});case"failed":return(0,t.jsx)(u.f,{title:"This document could not be opened",text:"Please try again in a moment."});default:return(0,t.jsx)(u.f,{})}};var j=e.i(98926),S=e.i(21557),A=e.i(159080);let T=A.f`
  query GetJobForReport($id: Int!) {
    job: Job_by_pk(id: $id) {
      id
      number
      adminId
      reference
      description
      timingStatus
      correctStart
      correctEnd
      travelTimeMinutes: meta(path: "travelTimeMinutes")
      assets: Assets(where: { entity: { _eq: "Job" } }) {
        id
        status
        asset: Asset {
          id
          name
        }
      }
      assetCategory: AssetCategory {
        id
        name
      }
      media: Media(where: { entity: { _eq: "Job" } }) {
        id
        item: Medium {
          id
          name
          type
          filename
          category
          meta
        }
      }
      location: Location {
        id
        access
        createdAt
        name
        contactUserId
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            countryId
            country: Country {
              id
              name
              code
            }
          }
        }
      }
      report: JobReport {
        id
        completion
        meta
        notes
        timing
        passFailStatus
        recommendations
        comments
        createdAt
        updatedAt
      }

      sublocation: Sublocation {
        id
        name
      }

      supplier: Supplier {
        id
        name
      }
      customer: Customer {
        id
        name
      }
      expenses: Expenses {
        id
        description
      }

      service: Service {
        id
        name
      }
      sla: SLA {
        id
        name
      }

      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        notes
        meta
        quoteId
        createdAt
        user: User {
          id
          fullName
        }
      }
    }
  }

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
`;var M=e.i(48534);let P=e=>{let{number:r,id:n}=e,i=(0,j.f)(),{show:a}=(0,S.f)(),[o,s]=(0,m.useState)({state:"rendering"}),l=(0,m.useCallback)(async e=>{if(!n)return void s({state:"missing"});s({state:"rendering"});try{let{data:t}=await i.query({query:T,variables:{id:n},fetchPolicy:"network-only"});if(!e())return;if(!t.job?.adminId)return void s({state:"missing"});let{blob:r}=await (0,M.k)({adminId:t.job.adminId,job:t.job,showSnackbar:t=>e()&&a(t)});if(!e())return;(0,h.Z)()?(await (0,g.f)(r.url),s({state:"opened"})):s({state:"showing",url:r.url})}catch(t){e()&&s({state:t instanceof Error&&("AbortError"===t.name||"TimeoutError"===t.name)?"slow":"failed"})}},[i,n,a]);switch((0,m.useEffect)(()=>{let e=!0;return l(()=>e),()=>{e=!1}},[l]),o.state){case"showing":return(0,t.jsx)(v,{title:`${d["job-report"]} ${r}`,url:o.url});case"opened":return(0,t.jsx)(u.f,{title:"The job report opened in the browser"});case"missing":return(0,t.jsx)(u.f,{title:"This job report could not be found",text:`There is no job numbered ${r} whose report your account can open.`});case"slow":return(0,t.jsx)(u.f,{title:"The job report is taking longer than expected",text:"Please try again in a moment."});case"failed":return(0,t.jsx)(u.f,{title:"This job report could not be opened",text:"Please try again in a moment."});default:return(0,t.jsx)(u.f,{})}},_=(0,a.f)("div")(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",gap:t.spacing(1),height:"calc(100vh - 32px)"}}),E=(0,a.f)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",gap:t.spacing(2)}}),k=e=>{let{type:a}=e,{query:c,isReady:m}=(0,o.useRouter)(),f=m?(0,s.k)(c):null,p=f?.id?{type:a,number:f.number,id:f.id}:null;return(0,t.jsxs)(_,{children:[(0,t.jsxs)(E,{children:[(0,t.jsx)(n.f,{startIcon:(0,t.jsx)(r.default,{}),variant:"contained",color:"secondary",onClick:()=>{p&&(0,l.W)(p)?o.default.back():o.default.push("/dashboard")},children:"Back"}),f&&(0,t.jsx)(i.f,{variant:"h6",children:`${d[a]} ${f.number}`})]}),m?f&&"job-report"===a?(0,t.jsx)(P,{...f}):f?(0,t.jsx)(x,{type:a,...f}):(0,t.jsx)(u.f,{title:"This document could not be found",text:"The link does not name a document number."}):(0,t.jsx)(u.f,{})]})};var C=e.i(293965);let I=e=>{let{type:r}=e;return(0,t.jsx)(k,{type:r})};I.getLayout=function(e){return(0,t.jsx)(C.f,{children:e})},e.s(["__N_SSG",0,!0,"default",0,I],88933)}],457505,(e,t,r)=>{let n="/dashboard/documents/[type]";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(88933)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);