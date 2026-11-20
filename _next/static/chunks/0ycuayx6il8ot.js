(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[879436,e=>{e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:t,currencyDisplay:"symbol",style:"currency"}).format(e)}])},299796,e=>{var t=e.i(946028);e.s(["f",()=>t.f])},407784,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(691567),n=e.i(747112),s=e.i(871931),a=e.i(302966),o=e.i(760981);let l={accordionSx:{},accordionSummarySx:{},accordionDetailsSx:{},expandIcon:n.f},d=e=>{let{title:r,children:n,accordionSx:d=l.accordionSx,accordionSummarySx:c=l.accordionSummarySx,accordionDetailsSx:u=l.accordionDetailsSx,expandIcon:m=l.expandIcon,headerAdornment:p=null,disabled:h=!1}=e,[f,x]=(0,i.useState)(!h);return(0,i.useEffect)(()=>{h||x(!0)},[h]),(0,t.jsxs)(s.f,{sx:{borderTop:"none!important",boxShadow:"none",marginBottom:"15px",opacity:h?.5:1,...d},expanded:f,onClick:h?()=>{}:e=>{e.stopPropagation(),x(e=>!e)},children:[(0,t.jsxs)(a.f,{sx:{backgroundColor:"#F2F2F2",borderRadius:"4px",...c},expandIcon:(0,t.jsx)(m,{}),children:[p&&(0,t.jsx)(p,{}),r]}),(0,t.jsx)(o.f,{onClick:e=>e.stopPropagation(),sx:{...u},children:n})]})};d.propTypes={title:r.node,children:r.object,accordionSx:r.object,accordionDetailsSx:r.object,accordionSummarySx:r.object,expandIcon:r.object,defaultExpanded:r.bool},e.s(["f",0,d])},529422,104868,e=>{e.s(["f",()=>l],529422),e.s(["f",()=>s.f],104868);var t=e.i(391398),i=e.i(115871),r=e.i(299796),n=e.i(807673);e.i(981683);var s=e.i(308680),s=s,a=e.i(411331),o=e.i(889231);let l=e=>{let{id:l,invoiceNumber:d,number:c,numberPrefix:u="",numberSuffix:m="",openCanvas:p=!1,isBlank:h=!1,isQuote:f=!1,underline:x=!1,shortJobDesc:b,status:j,style:v,type:g,toggleShow:y,isHref:S}=e,w=(0,a.f)(),$="quote"!==g&&f?"Q ":"";return(0,t.jsxs)("div",{style:v,children:[(0,t.jsxs)(o.f,{href:S?`/dashboard/issues/view?id=${c}`:void 0,onClick:e=>{if(e.stopPropagation(),h&&S){e.preventDefault(),window.open(`/dashboard/issues/view?id=${c}`,"_blank");return}if(p)return void w.show({content:(0,t.jsx)(s.f,{jobId:l,toggleShow:()=>{w.close(),y?.()},numberPrefix:u,numberSuffix:m}),submit:!1,title:f?"Quote Details":"Job Details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"40vw",md2:"40vw",lg:"40vw",lg2:"40vw"})},sx:{color:p||h||S?"secondary.main":"inherit",cursor:p||h||S?"pointer":"inherit",textDecoration:x||h||S?"underline":"none"},children:[j&&(0,n.f)({value:j,withTooltip:!0}),`${(0,r.f)(g)} ${$}`,(e=>{let{id:t,number:i,invoiceNumber:r,numberPrefix:n,numberSuffix:s}=e,a=t?`${n} ${i||t} ${s}`:"";return r?`${a} / ${r}`:a})({id:l,number:c,invoiceNumber:d,numberPrefix:u,numberSuffix:m})]}),b&&(0,t.jsx)(i.f,{variant:"body2",children:b})]})}},981683,436295,308680,e=>{e.s([],981683),e.s(["f",()=>P],308680);var t=e.i(391398),i=e.i(191788),r=e.i(691567),n=e.i(432171),s=e.i(446305),a=e.i(203828),o=e.i(847474),l=e.i(717524),d=e.i(553875),c=e.i(76381),u=e.i(594301),m=e.i(362537),p=e.i(738251),h=e.i(740790),f=e.i(280445),x=e.i(813843),b=e.i(115871),j=e.i(889231),v=e.i(122891),g=e.i(624841),y=e.i(529422),S=e.i(407784),w=e.i(552987);let $=(0,f.f)(p.f)({margin:"5px 0px"}),T=e=>{let{isQuotes:i,job:r,numberPrefix:n,numberSuffix:s,showOrder:a=!0}=e,o=(0,v.f)(r),{hasRole:l}=(0,u.f)();return(0,t.jsx)(S.f,{title:"Details",children:(0,t.jsxs)(h.f,{container:!0,children:[(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[a&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{children:"Order"}),(0,t.jsx)(y.f,{id:r.id,number:r.number,numberPrefix:n,numberSuffix:s,type:r.type,isHref:!0})]}),r.tenantUser&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Tenant"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.tenantUser.fullName})]}),r.reference&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Reference"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.reference})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:i?"Description":"Short Job Description"}),(0,t.jsx)(b.f,{variant:"subtitle1",sx:{maxWidth:"14rem"},children:r?.shortJobDesc?.length>0&&r?.shortJobDesc[0]?.taxonomy.name||r.title})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(g.f,{value:r.status})]}),(r.tags?.length??0)>0&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Tags"}),(0,t.jsx)(w.f,{tags:r.tags,readOnly:!0,showAllTags:!0,slaJobTimings:{jobReportTimingEnd:r.jobReportTimingEnd,onSiteTimingEnd:r.onSiteTimingEnd,quoteReturnedTimingEnd:r.quoteReturnedTimingEnd}})]}),i&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Quote due date"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.quoteDue?(0,m.default)(r.quoteDue).format("YYYY-MM-DD"):"-"})]}),i&&!l("customer")&&(0,t.jsxs)(x.f,{rowGap:.5,children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Supplier(s)"}),r.quotations?.map(e=>{let{supplier:i}=e;return(0,t.jsx)(j.f,{href:`/dashboard/suppliers/view?id=${i?.id}`,color:"secondary",noWrap:!l("admin"),children:i?.name})})]})]}),(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[i&&!l("customer")&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:l("admin")?"Required quotes":"Quotation"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.quotations.length})]}),i&&!l("customer")&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:l("admin")?"Quotes received":"Received"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:`${(r.quotations||[]).reduce((e,t)=>"supplierQuoteComplete"===t.status?e+1:e,0)}/${r.quotations?.length||0}`})]}),!i&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Cost Category"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.costCategoryTaxonomy?.name})]}),!i&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Service"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.service?.name})]}),"ppm"!==r.type&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Priority"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:`${o?.name||"Not Specified "} (${o?.entity||"Default"})`})]}),(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Assigned To"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.manager?`${r.manager.nameFirst} ${r.manager.nameLast} `:"Unassigned"})]}),r.compliance&&(0,t.jsxs)($,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Compliance"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r.compliance.name})]})]})]})})};T.propTypes={isQuotes:r.bool,job:r.object,showOrder:r.bool};var I=e.i(498681),C=e.i(879436);let R=(0,f.f)(p.f)({margin:"5px 0px"}),q=e=>{let{job:i}=e,{hasUserModule:r}=(0,I.f)(),{hasRole:n}=(0,u.f)(),s=n("customer_user"),a=n("admin_user"),o=r("finances");return(0,t.jsx)(S.f,{title:"Customer",children:(0,t.jsxs)(h.f,{container:!0,children:[(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(b.f,{children:"Name"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/customers/view?id=${i.customer?.id}`,children:i.customer?.name})]}),i.customerUser&&(0,t.jsxs)(R,{children:[(0,t.jsx)(b.f,{children:"Contact"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.customerUser.id}`,children:i.customerUser.fullName})]}),(!s&&!a||o)&&null!=i.customerSpendThreshold&&(0,t.jsxs)(R,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Spend Threshold"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:(0,C.f)(i.customerSpendThreshold)})]})]}),(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Email"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.customerUser?.email})]}),(0,t.jsxs)(R,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Phone"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.customerUser?.phone})]})]})]})})};q.propTypes={job:r.object.isRequired};let U=(0,f.f)(p.f)({margin:"5px 0px"}),k=e=>{let{job:i}=e,r=i.supplier?.contactUsers?.[0],n=i.supplierUser?.id&&r?.user&&i.supplierUser?.id!==r?.user?.id;return(0,t.jsx)(S.f,{title:"Supplier",children:(0,t.jsxs)(h.f,{container:!0,children:[(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(b.f,{children:"Name"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/suppliers/view?id=${i.supplier.id}`,children:i.supplier.name})]}),r&&(0,t.jsxs)(U,{children:[(0,t.jsx)(b.f,{children:n?"Contact":"Contact / Operative"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${r.user.id}`,children:r.user.fullName})]}),i.supplierUser&&n&&(0,t.jsxs)(U,{children:[(0,t.jsx)(b.f,{children:"Operative"}),(0,t.jsx)(j.f,{sx:{color:"#2196F3"},href:`/dashboard/users/view?id=${i.supplierUser.id}`,children:i.supplierUser.fullName})]})]}),(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:n?"Contact email":"Email"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r?.user?.email})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:n?"Contact phone":"Phone"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:r?.user?.phone??"N/A"})]}),i.supplierUser&&n&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(U,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Operative email"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.supplierUser?.email})]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Operative phone"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.supplierUser?.phone})]})]})]})]})})};k.propTypes={job:r.object};let A=(0,f.f)(p.f)({margin:"5px 0px"}),J=e=>{let{address:i,location:r,sublocation:n}=e,{hasRole:s}=(0,u.f)();return(0,t.jsx)(S.f,{title:"Address",children:(0,t.jsxs)(h.f,{container:!0,children:[(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(A,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Property"}),(0,t.jsx)(j.f,{href:`/dashboard/properties/view?id=${r.id}&tab=details`,noWrap:s("supplier"),color:"secondary",children:r.name})," ",n&&(0,t.jsxs)(j.f,{href:`/dashboard/properties/view?id=${r.id}&tab=sublocations`,noWrap:s("supplier"),color:"secondary",children:["(",n.name,")"]})]}),(0,t.jsxs)(A,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Name"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.name||"N/A"})]})]}),(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Address"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.addressLine1}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.addressLine2}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.addressLine3}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.city}),s(["admin","customer"])&&(0,t.jsx)(b.f,{variant:"subtitle1",children:i.county}),(0,t.jsx)(b.f,{variant:"subtitle1",children:i.postCode})]})]})})};J.propTypes={address:r.object};var _=e.i(285835),L=e.i(986351);let N=e=>{let{answers:i}=e;return(0,t.jsxs)(t.Fragment,{children:[i&&i.length>0&&(0,t.jsx)(L.f,{children:"Questions"}),i&&i.map(e=>{let{meta:i}=e;return i?.input==="media"?null:(0,t.jsxs)(p.f,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:e.taxonomy?.name||e.name}),(0,t.jsx)(b.f,{children:e.comments||e.taxonomy_entity?.[0]?.comments})]},e.id||e.taxonomyId)}),i&&i.length>0&&(0,t.jsx)(L.f,{})]})};N.propTypes={answers:r.default.array},e.s(["f",0,N],436295);let D=(0,f.f)(p.f)({margin:"5px 0px"}),F=e=>{let{isQuote:i,job:r,isReactive:n,isPPM:s,isQuoted:a}=e,o=r.shortJobDesc&&r.shortJobDesc.length?r.shortJobDesc[0].taxonomy.name:"",l=r.quoteSummary&&r.quoteSummary.length?r.quoteSummary[0].taxonomy.name:"",d=r.answers?.map(e=>{let{id:t,taxonomyId:i,comments:r,taxonomy:{name:n}}=e;return{id:t,taxonomyId:i,comments:r,name:n}});return(0,t.jsxs)(S.f,{title:"Issue Reported - Client",children:[(n||s)&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Short Job Description"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:o||"N/A"})]}),(n||s)&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Job Description"}),(0,t.jsx)(_.f,{sx:{fontSize:"1rem"},children:r.description||"N/A"})]}),a&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Quote Summary"}),(0,t.jsx)(_.f,{sx:{fontSize:"1rem"},children:l||"N/A"})]}),i&&(0,t.jsxs)(D,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Scope of works"}),(0,t.jsx)(_.f,{sx:{fontSize:"1rem"},children:r.description||"N/A"})]}),(0,t.jsx)(N,{answers:d})]})};F.propTypes={job:r.object,isQuote:r.bool};var O=e.i(48441);let M=(0,f.f)(p.f)({margin:"5px 0px"}),Q=e=>{let{quotation:i}=e,{hasUserModule:r}=(0,I.f)(),{hasRole:n}=(0,u.f)(),s=n("supplier"),a=n("customer"),o=n("tenant"),l=n("customer_user"),d=n("admin_user"),c=r("finances"),m=O.E.find(e=>e.value===i.status)||{text:"-",context:"info"},p=(0,C.f)((i?.lineItems??[]).filter(e=>"Labour"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),f=(0,C.f)((i?.lineItems??[]).filter(e=>"Materials"===e.type).reduce((e,t)=>e+=t.supplierTotal,0)),x=(0,C.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.supplierTotal,0)),j=(0,C.f)((i?.lineItems??[]).reduce((e,t)=>e+=t.customerTotal,0));return(0,t.jsx)(S.f,{title:`Quotation ${i?.quoteNumber||""}`,children:(0,t.jsxs)(h.f,{container:!0,children:[(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[(0,t.jsxs)(M,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Status"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:m.text})]}),!a&&!o&&(0,t.jsxs)(M,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Labour Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:p})]}),!a&&!o&&(0,t.jsxs)(M,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Materials Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:f})]})]}),(0,t.jsxs)(h.f,{item:!0,xs:8,md:6,lg:6,rowSpacing:6,children:[!a&&!o&&(0,t.jsxs)(M,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Supplier Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:x})]}),!s&&(!l&&!o&&!d||c)&&(0,t.jsxs)(M,{children:[(0,t.jsx)(b.f,{variant:"subtitle2",children:"Customer Total"}),(0,t.jsx)(b.f,{variant:"subtitle1",children:j})]})]})]})})};Q.propTypes={quotation:r.object};let E=e=>{let r,{jobId:m,toggleShow:p,numberPrefix:h="",numberSuffix:f=""}=e,{hasUserModule:x}=(0,I.f)(),{hasRole:b}=(0,u.f)(),j=(0,a.useRouter)(),v=b("tenant"),g=b("customer_user"),y=b("admin_user"),S=x("finances"),w=x("quotes");(0,i.useEffect)(()=>{let e=()=>{p()};return j.events.on("routeChangeComplete",e),()=>{j.events.off("routeChangeComplete",e)}},[j.events,p]);let $=b("supplier")?s.M:b(["customer","tenant"])?s.Y:s.O,{loading:C,data:{job:R}={job:{}}}=(0,n.t)($,{variables:{jobId:m}}),U=R.quoted,A="quote"===R.type,_="reactive"===R.type,L="ppm"===R.type;if(C)return(0,t.jsx)(d.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(c.f,{color:"secondary"})});let N=R?.quotations?.length?[...R.quotations].sort((e,t)=>e.id-t.id):[],D=(0,o.w)(R?.location,"registered");return(0,t.jsxs)(t.Fragment,{children:[R.customer&&(0,t.jsx)(l.f,{editable:!1,entity:{id:R.customer.id,name:R.customer.name,website:R.customer.website},entityName:"Account"}),(0,t.jsx)(T,{isQuotes:A,job:R,numberPrefix:h,numberSuffix:f}),D&&(0,t.jsx)(J,{address:D.address,location:R?.location,sublocation:R?.sublocation}),b(["admin","customer","tenant"])&&(0,t.jsx)(q,{job:R}),b(["admin"])&&R.supplier&&(0,t.jsx)(k,{job:R}),!!N.length&&A&&(!g&&!v&&!y||w)&&(!g&&!v&&!y||S)&&(r=[...N],b("customer")&&(r=r.filter(e=>{let{status:t}=e;return"supplierQuoteSent"===t||"quotationAccepted"===t||"quotationRejected"===t})),r).map(e=>(0,t.jsx)(Q,{quotation:e})),(0,t.jsx)(F,{job:R,isReactive:_,isPPM:L,isQuoted:U,isQuote:A})]})};E.propTypes={jobId:r.number.isRequired,toggleShow:r.func.isRequired,numberPrefix:r.string,numberSuffix:r.string};let P=E},446305,717524,122891,e=>{var t=e.i(159080),i=e.i(987123);t.f`
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
`,n=t.f`
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
  ${r}
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
  ${r}
`,a=t.f`
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
  ${r}
`;e.s(["O",0,n,"Y",0,s,"M",0,a],446305);var o=e.i(391398),l=e.i(222351),d=e.i(115871),c=e.i(314695),u=e.i(813843);let m=l.f;e.s(["f",0,e=>{let{avatar:t,entity:i}=e;return(0,o.jsxs)(u.f,{direction:"row",alignItems:"center",sx:{margin:"1.3em 0em"},spacing:4,children:[(0,o.jsx)(m,{sx:{width:"55px",height:"55px"},content:i?.name||"test",context:"primary",src:t}),(0,o.jsxs)(u.f,{direction:"row",alignItems:"center",sx:{color:"#000"},children:[(0,o.jsx)(c.default,{sx:{marginRight:"5px",width:"14px",height:"14px"}}),(0,o.jsx)(d.f,{variant:"h6",sx:{height:"24px"},children:i?.name})]})]})}],717524),e.s(["f",0,(e,t)=>{if(e.meta?.customerVATInvoice?.rateInfo?.selectedSla)return e.meta.customerVATInvoice.rateInfo.selectedSla;let i={...e.sla};i.entity="Job";let r={...e.location?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};r?.sla&&(r.entity="Property",r.name=r.sla.name);let n={...e.customer?.slas?.find(e=>e.slaId===i?.id&&e.inUse)};return n?.sla&&(n.entity="Customer",n.name=n.sla.name),{...i,...n,...r}}],122891)},807673,e=>{var t=e.i(391398),i=e.i(691567),r=e.i(760814),n=e.i(322135),s=e.i(115871),a=e.i(48441),o=e.i(184696),l=e.i(594301);let d=e=>{let{value:i,withTooltip:r=!1}=e,d=(0,o.G)(i),{hasRole:u}=(0,l.f)(),{text:m,customerText:p,supplierText:h}=[...a.o,...a.w,...a.y].find(e=>e.value===i)||{statusText:""},f=u("admin")?m:u("supplier")?h||m:u("customer")&&p||m;return r?(0,t.jsx)(n.f,{title:f,children:(0,t.jsx)(c,{children:(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})})})}):(0,t.jsxs)(c,{children:[(0,t.jsx)("svg",{height:"16",width:"16",children:(0,t.jsx)("circle",{cx:"8",cy:"8",r:"6",fill:d})}),(0,t.jsx)(s.f,{variant:"body2",children:f})]})},c=r.U.span.withConfig({displayName:"status__StyledLabel",componentId:"sc-6938cfcd-0"})`
  display: flex;
  align-items: center;
`;d.propTypes={value:i.string.isRequired,withTooltip:i.bool},e.s(["f",0,d])},314695,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81zM12 3 2 12h3v8h6v-6h2v6h6v-8h3z"}),"HomeOutlined")},128519,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),s=e.r(391398);i.default=(0,n.default)((0,s.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove")},4142,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),n=e.i(889878),s=e.i(600961),a=e.i(477366),o=e.i(464107),l=e.i(272932),d=e.i(280445),c=e.i(395724),u=e.i(713149),m=e.i(46739);function p(e){return(0,m.f)("MuiSwitch",e)}let h=(0,u.f)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]);var f=e.i(391398);let x=["className","color","edge","size","sx"],b=(0,d.f)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.edge&&t[`edge${(0,o.f)(i.edge)}`],t[`size${(0,o.f)(i.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${h.thumb}`]:{width:16,height:16},[`& .${h.switchBase}`]:{padding:4,[`&.${h.checked}`]:{transform:"translateX(16px)"}}}}]}),j=(0,d.f)(l.f,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.switchBase,{[`& .${h.input}`]:t.input},"default"!==i.color&&t[`color${(0,o.f)(i.color)}`]]}})(e=>{let{theme:t}=e;return{position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${"light"===t.palette.mode?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${h.checked}`]:{transform:"translateX(20px)"},[`&.${h.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${"light"===t.palette.mode?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${h.checked} + .${h.track}`]:{opacity:.5},[`&.${h.disabled} + .${h.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${"light"===t.palette.mode?.12:.2}`},[`& .${h.input}`]:{left:"-100%",width:"300%"}}},e=>{let{theme:t}=e;return{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.alpha)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(t.palette).filter(e=>{let[,t]=e;return t.main&&t.light}).map(e=>{let[i]=e;return{props:{color:i},style:{[`&.${h.checked}`]:{color:(t.vars||t).palette[i].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[i].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,a.alpha)(t.palette[i].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${i}DisabledColor`]:`${"light"===t.palette.mode?(0,a.lighten)(t.palette[i].main,.62):(0,a.darken)(t.palette[i].main,.55)}`}},[`&.${h.checked} + .${h.track}`]:{backgroundColor:(t.vars||t).palette[i].main}}}})]}}),v=(0,d.f)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(e=>{let{theme:t}=e;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${"light"===t.palette.mode?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${"light"===t.palette.mode?.38:.3}`}}),g=(0,d.f)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(e=>{let{theme:t}=e;return{boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}}),y=r.forwardRef(function(e,r){let a=(0,c.f)({props:e,name:"MuiSwitch"}),{className:l,color:d="primary",edge:u=!1,size:m="medium",sx:h}=a,y=(0,t.f)(a,x),S=(0,i.f)({},a,{color:d,edge:u,size:m}),w=(e=>{let{classes:t,edge:r,size:n,color:a,checked:l,disabled:d}=e,c={root:["root",r&&`edge${(0,o.f)(r)}`,`size${(0,o.f)(n)}`],switchBase:["switchBase",`color${(0,o.f)(a)}`,l&&"checked",d&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},u=(0,s.f)(c,p,t);return(0,i.f)({},t,u)})(S),$=(0,f.jsx)(g,{className:w.thumb,ownerState:S});return(0,f.jsxs)(b,{className:(0,n.f)(w.root,l),sx:h,ownerState:S,children:[(0,f.jsx)(j,(0,i.f)({type:"checkbox",icon:$,checkedIcon:$,ref:r,ownerState:S},y,{classes:(0,i.f)({},w,{root:w.switchBase})})),(0,f.jsx)(v,{className:w.track,ownerState:S})]})});e.s(["f",0,y],4142)}],648346,(e,t,i)=>{t.exports=function(e,t){for(var i=-1,r=null==e?0:e.length,n=Array(r);++i<r;)n[i]=t(e[i],i,e);return n}},925055,(e,t,i)=>{var r=e.r(889239),n=e.r(648346),s=e.r(448684),a=e.r(849057),o=r?r.prototype:void 0,l=o?o.toString:void 0;t.exports=function e(t){if("string"==typeof t)return t;if(s(t))return n(t,e)+"";if(a(t))return l?l.call(t):"";var i=t+"";return"0"==i&&1/t==-1/0?"-0":i}},478969,(e,t,i)=>{var r=e.r(448684),n=e.r(970923),s=e.r(542774),a=e.r(782346);t.exports=function(e,t){return r(e)?e:n(e,t)?[e]:s(a(e))}},970923,(e,t,i)=>{var r=e.r(448684),n=e.r(849057),s=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(e,t){if(r(e))return!1;var i=typeof e;return!!("number"==i||"symbol"==i||"boolean"==i||null==e||n(e))||a.test(e)||!s.test(e)||null!=t&&e in Object(t)}},759762,(e,t,i)=>{var r=e.r(476116);t.exports=function(e){var t=r(e,function(e){return 500===i.size&&i.clear(),e}),i=t.cache;return t}},542774,(e,t,i)=>{var r=e.r(759762),n=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g;t.exports=r(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(n,function(e,i,r,n){t.push(r?n.replace(s,"$1"):i||e)}),t})},598921,(e,t,i)=>{var r=e.r(849057);t.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},849057,(e,t,i)=>{var r=e.r(912904),n=e.r(432836);t.exports=function(e){return"symbol"==typeof e||n(e)&&"[object Symbol]"==r(e)}},476116,(e,t,i)=>{var r=e.r(933571);function n(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw TypeError("Expected a function");var i=function(){var r=arguments,n=t?t.apply(this,r):r[0],s=i.cache;if(s.has(n))return s.get(n);var a=e.apply(this,r);return i.cache=s.set(n,a)||s,a};return i.cache=new(n.Cache||r),i}n.Cache=r,t.exports=n},782346,(e,t,i)=>{var r=e.r(925055);t.exports=function(e){return null==e?"":r(e)}}]);