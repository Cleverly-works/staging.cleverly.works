(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,407784,e=>{var t=e.i(391398),i=e.i(191788),s=e.i(691567),n=e.i(747112),r=e.i(871931),o=e.i(302966),a=e.i(760981);let l={accordionSx:{},accordionSummarySx:{},accordionDetailsSx:{},expandIcon:n.f},d=e=>{let{title:s,children:n,accordionSx:d=l.accordionSx,accordionSummarySx:c=l.accordionSummarySx,accordionDetailsSx:u=l.accordionDetailsSx,expandIcon:m=l.expandIcon,headerAdornment:p=null,disabled:x=!1}=e,[h,f]=(0,i.useState)(!x);return(0,i.useEffect)(()=>{x||f(!0)},[x]),(0,t.jsxs)(r.f,{sx:{borderTop:"none!important",boxShadow:"none",marginBottom:"15px",opacity:x?.5:1,...d},expanded:h,onClick:x?()=>{}:e=>{e.stopPropagation(),f(e=>!e)},children:[(0,t.jsxs)(o.f,{sx:{backgroundColor:"#F2F2F2",borderRadius:"4px",...c},expandIcon:(0,t.jsx)(m,{}),children:[p&&(0,t.jsx)(p,{}),s]}),(0,t.jsx)(a.f,{onClick:e=>e.stopPropagation(),sx:{...u},children:n})]})};d.propTypes={title:s.node,children:s.object,accordionSx:s.object,accordionDetailsSx:s.object,accordionSummarySx:s.object,expandIcon:s.object,defaultExpanded:s.bool},e.s(["f",0,d])},529422,104868,e=>{e.s(["f",()=>l],529422),e.s(["f",()=>r.f],104868);var t=e.i(391398),i=e.i(115871),s=e.i(299796),n=e.i(807673);e.i(981683);var r=e.i(308680),r=r,o=e.i(411331),a=e.i(889231);let l=e=>{let{id:l,invoiceNumber:d,number:c,numberPrefix:u="",numberSuffix:m="",openCanvas:p=!1,isBlank:x=!1,isQuote:h=!1,underline:f=!1,shortJobDesc:j,status:b,style:v,type:g,toggleShow:y,isHref:S}=e,T=(0,o.f)(),I="quote"!==g&&h?"Q ":"";return(0,t.jsxs)("div",{style:v,children:[(0,t.jsxs)(a.f,{href:S?`/dashboard/issues/view?id=${c}`:void 0,onClick:e=>{if(e.stopPropagation(),x&&S){e.preventDefault(),window.open(`/dashboard/issues/view?id=${c}`,"_blank");return}if(p)return void T.show({content:(0,t.jsx)(r.f,{jobId:l,toggleShow:()=>{T.close(),y?.()},numberPrefix:u,numberSuffix:m}),submit:!1,title:h?"Quote Details":"Job Details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},sx:{color:p||x||S?"secondary.main":"inherit",cursor:p||x||S?"pointer":"inherit",textDecoration:f||x||S?"underline":"none"},children:[b&&(0,n.f)({value:b,withTooltip:!0}),`${(0,s.f)(g)} ${I}`,(e=>{let{id:t,number:i,invoiceNumber:s,numberPrefix:n,numberSuffix:r}=e,o=t?`${n} ${i||t} ${r}`:"";return s?`${o} / ${s}`:o})({id:l,number:c,invoiceNumber:d,numberPrefix:u,numberSuffix:m})]}),j&&(0,t.jsx)(i.f,{variant:"body2",children:j})]})}},981683,436295,308680,e=>{e.s([],981683),e.s(["f",()=>k],308680);var t=e.i(391398),i=e.i(191788),s=e.i(691567),n=e.i(432171),r=e.i(446305),o=e.i(203828),a=e.i(847474),l=e.i(717524),d=e.i(553875),c=e.i(76381),u=e.i(594301),m=e.i(362537),p=e.i(738251),x=e.i(740790),h=e.i(280445),f=e.i(813843),j=e.i(115871),b=e.i(889231),v=e.i(122891),g=e.i(624841),y=e.i(529422),S=e.i(407784),T=e.i(552987);let I=(0,h.f)(p.f)({margin:"5px 0px"}),w=e=>{let{isQuotes:i,job:s,numberPrefix:n,numberSuffix:r,showOrder:o=!0}=e,a=(0,v.f)(s),{hasRole:l}=(0,u.f)();return(0,t.jsx)(S.f,{title:"Details",children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[o&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{children:"Order"}),(0,t.jsx)(y.f,{id:s.id,number:s.number,numberPrefix:n,numberSuffix:r,type:s.type,isHref:!0})]}),s.tenantUser&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Tenant"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.tenantUser.fullName})]}),s.reference&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Reference"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.reference})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:i?"Description":"Short Job Description"}),(0,t.jsx)(j.f,{variant:"subtitle1",sx:{maxWidth:"14rem"},children:s?.shortJobDesc?.length>0&&s?.shortJobDesc[0]?.taxonomy.name||s.title})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(g.f,{value:s.status})]}),(s.tags?.length??0)>0&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Tags"}),(0,t.jsx)(T.f,{tags:s.tags,readOnly:!0,showAllTags:!0,slaJobTimings:{jobReportTimingEnd:s.jobReportTimingEnd,onSiteTimingEnd:s.onSiteTimingEnd,quoteReturnedTimingEnd:s.quoteReturnedTimingEnd}})]}),i&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Quote due date"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.quoteDue?(0,m.default)(s.quoteDue).format("YYYY-MM-DD"):"-"})]}),i&&!l("customer")&&(0,t.jsxs)(f.f,{rowGap:.5,children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Supplier(s)"}),s.quotations?.map(e=>{let{supplier:i}=e;return(0,t.jsx)(b.f,{href:`/dashboard/suppliers/view?id=${i?.id}`,color:"secondary",noWrap:!l("admin"),children:i?.name})})]})]}),(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[i&&!l("customer")&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:l("admin")?"Required quotes":"Quotation"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.quotations.length})]}),i&&!l("customer")&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:l("admin")?"Quotes received":"Received"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:`${(s.quotations||[]).reduce((e,t)=>"supplierQuoteComplete"===t.status?e+1:e,0)}/${s.quotations?.length||0}`})]}),!i&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Cost Category"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.costCategoryTaxonomy?.name})]}),!i&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Service"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.service?.name})]}),"ppm"!==s.type&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Priority"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:`${a?.name||"Not Specified "} (${a?.entity||"Default"})`})]}),(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Assigned To"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.manager?`${s.manager.nameFirst} ${s.manager.nameLast} `:"Unassigned"})]}),s.compliance&&(0,t.jsxs)(I,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Compliance"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s.compliance.name})]})]})]})})};w.propTypes={isQuotes:s.bool,job:s.object,showOrder:s.bool};var q=e.i(498681),_=e.i(879436);let U=(0,h.f)(p.f)({margin:"5px 0px"}),$=e=>{let{job:i}=e,{hasUserModule:s}=(0,q.f)(),{hasRole:n}=(0,u.f)(),r=n("customer_user"),o=n("admin_user"),a=s("finances");return(0,t.jsx)(S.f,{title:"Customer",children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(j.f,{children:"Name"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/customers/view?id=${i.customer?.id}`,children:i.customer?.name})]}),i.customerUser&&(0,t.jsxs)(U,{children:[(0,t.jsx)(j.f,{children:"Contact"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.customerUser.id}`,children:i.customerUser.fullName})]}),(!r&&!o||a)&&null!=i.customerSpendThreshold&&(0,t.jsxs)(U,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Spend Threshold"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:(0,_.f)(i.customerSpendThreshold)})]})]}),(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Email"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.customerUser?.email})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Phone"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.customerUser?.phone})]})]})]})})};$.propTypes={job:s.object.isRequired};let R=(0,h.f)(p.f)({margin:"5px 0px"}),A=e=>{let{job:i}=e,s=i.supplier?.contactUsers?.[0],n=i.supplierUser?.id&&s?.user&&i.supplierUser?.id!==s?.user?.id;return(0,t.jsx)(S.f,{title:"Supplier",children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(j.f,{children:"Name"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/suppliers/view?id=${i.supplier.id}`,children:i.supplier.name})]}),s&&(0,t.jsxs)(R,{children:[(0,t.jsx)(j.f,{children:n?"Contact":"Contact / Operative"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${s.user.id}`,children:s.user.fullName})]}),i.supplierUser&&n&&(0,t.jsxs)(R,{children:[(0,t.jsx)(j.f,{children:"Operative"}),(0,t.jsx)(b.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.supplierUser.id}`,children:i.supplierUser.fullName})]})]}),(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:n?"Contact email":"Email"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s?.user?.email})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:n?"Contact phone":"Phone"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:s?.user?.phone??"N/A"})]}),i.supplierUser&&n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Operative email"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.supplierUser?.email})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Operative phone"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.supplierUser?.phone})]})]})]})]})})};A.propTypes={job:s.object};let C=(0,h.f)(p.f)({margin:"5px 0px"}),J=e=>{let{address:i,location:s,sublocation:n}=e,{hasRole:r}=(0,u.f)();return(0,t.jsx)(S.f,{title:"Address",children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Property"}),(0,t.jsx)(b.f,{href:`/dashboard/properties/view?id=${s.id}&tab=details`,noWrap:r("supplier"),color:"secondary",children:s.name})," ",n&&(0,t.jsxs)(b.f,{href:`/dashboard/properties/view?id=${s.id}&tab=sublocations`,noWrap:r("supplier"),color:"secondary",children:["(",n.name,")"]})]}),(0,t.jsxs)(C,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Name"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.name||"N/A"})]})]}),(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Address"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.addressLine1}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.addressLine2}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.addressLine3}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.city}),r(["admin","customer"])&&(0,t.jsx)(j.f,{variant:"subtitle1",children:i.county}),(0,t.jsx)(j.f,{variant:"subtitle1",children:i.postCode})]})]})})};J.propTypes={address:s.object};var D=e.i(285835),L=e.i(986351);let N=e=>{let{answers:i}=e;return(0,t.jsxs)(t.Fragment,{children:[i&&i.length>0&&(0,t.jsx)(L.f,{children:"Questions"}),i&&i.map(e=>{let{meta:i}=e;return i?.input==="media"?null:(0,t.jsxs)(p.f,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:e.taxonomy?.name||e.name}),(0,t.jsx)(j.f,{children:e.comments||e.taxonomy_entity?.[0]?.comments})]},e.id||e.taxonomyId)}),i&&i.length>0&&(0,t.jsx)(L.f,{})]})};N.propTypes={answers:s.default.array},e.s(["f",0,N],436295);let F=(0,h.f)(p.f)({margin:"5px 0px"}),E=e=>{let{isQuote:i,job:s,isReactive:n,isPPM:r,isQuoted:o}=e,a=s.shortJobDesc&&s.shortJobDesc.length?s.shortJobDesc[0].taxonomy.name:"",l=s.quoteSummary&&s.quoteSummary.length?s.quoteSummary[0].taxonomy.name:"",d=s.answers?.map(e=>{let{id:t,taxonomyId:i,comments:s,taxonomy:{name:n}}=e;return{id:t,taxonomyId:i,comments:s,name:n}});return(0,t.jsxs)(S.f,{title:"Issue Reported - Client",children:[(n||r)&&(0,t.jsxs)(F,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Short Job Description"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:a||"N/A"})]}),(n||r)&&(0,t.jsxs)(F,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Job Description"}),(0,t.jsx)(D.f,{sx:{fontSize:"1rem"},children:s.description||"N/A"})]}),o&&(0,t.jsxs)(F,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Quote Summary"}),(0,t.jsx)(D.f,{sx:{fontSize:"1rem"},children:l||"N/A"})]}),i&&(0,t.jsxs)(F,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Scope of works"}),(0,t.jsx)(D.f,{sx:{fontSize:"1rem"},children:s.description||"N/A"})]}),(0,t.jsx)(N,{answers:d})]})};E.propTypes={job:s.object,isQuote:s.bool};var P=e.i(48441);let Q=(0,h.f)(p.f)({margin:"5px 0px"}),O=e=>{let{quotation:i}=e,{hasUserModule:s}=(0,q.f)(),{hasRole:n}=(0,u.f)(),r=n("supplier"),o=n("customer"),a=n("tenant"),l=n("customer_user"),d=n("admin_user"),c=s("finances"),m=P.E.find(e=>e.value===i.status)||{text:"-",context:"info"},p=(0,_.f)((i?.lineItems??[]).filter(e=>"Labour"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),h=(0,_.f)((i?.lineItems??[]).filter(e=>"Materials"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),f=(0,_.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.supplierTotal,0)),b=(0,_.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.customerTotal,0));return(0,t.jsx)(S.f,{title:`Quotation ${i?.quoteNumber||""}`,children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(Q,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:m.text})]}),!o&&!a&&(0,t.jsxs)(Q,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Labour Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:p})]}),!o&&!a&&(0,t.jsxs)(Q,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Materials Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:h})]})]}),(0,t.jsxs)(x.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[!o&&!a&&(0,t.jsxs)(Q,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Supplier Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:f})]}),!r&&(!l&&!a&&!d||c)&&(0,t.jsxs)(Q,{children:[(0,t.jsx)(j.f,{variant:"subtitle2",children:"Customer Total"}),(0,t.jsx)(j.f,{variant:"subtitle1",children:b})]})]})]})})};O.propTypes={quotation:s.object};let M=e=>{let s,{jobId:m,toggleShow:p,numberPrefix:x="",numberSuffix:h=""}=e,{hasUserModule:f}=(0,q.f)(),{hasRole:j}=(0,u.f)(),b=(0,o.useRouter)(),v=j("tenant"),g=j("customer_user"),y=j("admin_user"),S=f("finances"),T=f("quotes");(0,i.useEffect)(()=>{let e=()=>{p()};return b.events.on("routeChangeComplete",e),()=>{b.events.off("routeChangeComplete",e)}},[b.events,p]);let{loading:I,data:{job:_}={job:{}}}=(0,n.t)(r.O,{variables:{jobId:m}}),U=_.quoted,R="quote"===_.type,C="reactive"===_.type,D="ppm"===_.type;if(I)return(0,t.jsx)(d.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(c.f,{color:"secondary"})});let L=_?.quotations?.length?[..._.quotations].sort((e,t)=>e.id-t.id):[],N=(0,a.w)(_?.location,"registered");return(0,t.jsxs)(t.Fragment,{children:[_.customer&&(0,t.jsx)(l.f,{editable:!1,entity:{id:_.customer.id,name:_.customer.name,website:_.customer.website},entityName:"Account"}),(0,t.jsx)(w,{isQuotes:R,job:_,numberPrefix:x,numberSuffix:h}),N&&(0,t.jsx)(J,{address:N.address,location:_?.location,sublocation:_?.sublocation}),j(["admin","customer","tenant"])&&(0,t.jsx)($,{job:_}),j(["admin"])&&_.supplier&&(0,t.jsx)(A,{job:_}),!!L.length&&R&&(!g&&!v&&!y||T)&&(!g&&!v&&!y||S)&&(s=[...L],j("customer")&&(s=s.filter(e=>{let{status:t}=e;return"supplierQuoteSent"===t||"quotationAccepted"===t||"quotationRejected"===t})),s).map(e=>(0,t.jsx)(O,{quotation:e})),(0,t.jsx)(E,{job:_,isReactive:C,isPPM:D,isQuoted:U,isQuote:R})]})};M.propTypes={jobId:s.number.isRequired,toggleShow:s.func.isRequired,numberPrefix:s.string,numberSuffix:s.string};let k=M},446305,e=>{var t=e.i(159080),i=e.i(987123);t.f`
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
`;let s=t.f`
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
`;let r=t.f`
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
`;e.s(["O",0,r,"K",0,n,"D",0,s])},807673,e=>{var t=e.i(391398),i=e.i(691567),s=e.i(760814),n=e.i(322135),r=e.i(115871),o=e.i(48441),a=e.i(184696),l=e.i(594301);let d=e=>{let{value:i,withTooltip:s=!1}=e,d=(0,a.G)(i),{hasRole:u}=(0,l.f)(),{text:m,customerText:p,supplierText:x}=[...o.o,...o.w,...o.y].find(e=>e.value===i)||{statusText:""},h=u("admin")?m:u("supplier")?x||m:u("customer")&&p||m;return s?(0,t.jsx)(n.f,{title:h,children:(0,t.jsx)(c,{children:(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})})})}):(0,t.jsxs)(c,{children:[(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})}),(0,t.jsx)(r.f,{variant:"body2",children:h})]})},c=s.U.span.withConfig({displayName:"status__StyledLabel",componentId:"sc-6938cfcd-0"})`
  display: flex;
  align-items: center;
`;d.propTypes={value:i.string.isRequired,withTooltip:i.bool},e.s(["f",0,d])},717524,122891,e=>{var t=e.i(391398),i=e.i(222351),s=e.i(115871),n=e.i(314695),r=e.i(813843);let o=i.f;e.s(["f",0,e=>{let{avatar:i,entity:a}=e;return(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:{margin:"1.3em 0em"},spacing:4,children:[(0,t.jsx)(o,{sx:{width:"55px",height:"55px"},content:a?.name||"test",context:"primary",src:i}),(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",sx:{color:"#000"},children:[(0,t.jsx)(n.default,{sx:{marginRight:"5px",width:"14px",height:"14px"}}),(0,t.jsx)(s.f,{variant:"h6",sx:{height:"24px"},children:a?.name})]})]})}],717524),e.s(["f",0,(e,t)=>{if(e.meta?.customerVATInvoice?.rateInfo?.selectedSla)return e.meta.customerVATInvoice.rateInfo.selectedSla;let i={...e.sla};i.entity="Job";let s={...e.location?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};s?.sla&&(s.entity="Property",s.name=s.sla.name);let n={...e.customer?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};return n?.sla&&(n.entity="Customer",n.name=n.sla.name),{...i,...n,...s}}],122891)},314695,(e,t,i)=>{var s=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(e.r(421506)),r=e.r(391398);i.default=(0,n.default)((0,r.jsx)("path",{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"}),"HomeOutlined")}])})();