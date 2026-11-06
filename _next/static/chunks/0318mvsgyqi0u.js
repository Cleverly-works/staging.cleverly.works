(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,864980,790388,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(115871),n=e.i(773831),o=e.i(813843),a=e.i(322135),l=e.i(148310),s=e.i(170582),d=e.i(424894),c=e.i(652148),p=e.i(755548),u=e.i(280445),m=e.i(422411),f=e.i(978319),h=e.i(494575),x=e.i(426778);let g=x.t().shape({caption:x.x().required("Caption is required")}),b=p.f,v=(0,u.f)(r.f)({backgroundColor:h.f.COLOUR.secondary,color:h.f.COLOUR.white,textAlign:"center",minWidth:"64px",borderRadius:"4px",margin:"10px 0",padding:"4px 10px",boxShadow:`0px 3px 1px -2px rgba(0,0,0,0.2),
    0px 2px 2px 0px rgba(0,0,0,0.14),
    0px 1px 5px 0px rgba(0,0,0,0.12)`}),y=(0,u.f)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),j=e=>{let{noDelete:l,onDelete:p,isAdded:u,media:x,caption:j,onSave:S}=e,[C,L]=(0,i.useState)(null),[I,R]=(0,i.useState)(""),[w,A]=(0,i.useState)(u),{register:$,errors:M,handleSubmit:D,reset:U,setValue:_,control:N}=(0,m.G)({resolver:(0,d.yupResolver)(g)}),T=(0,i.useCallback)(e=>t=>{t.stopPropagation();let i=t.target.files?.[0];i&&(R(e),L(i),_("caption",i.name))},[L,_]);return(0,t.jsx)("form",{children:w?(0,t.jsx)(o.f,{children:(0,t.jsxs)(o.f,{rowGap:2,children:[(0,t.jsx)(m.e,{control:N,defaultValue:null,name:"caption",render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(c.f,{fullWidth:!0,label:"Caption",variant:"standard",color:"secondary",name:"caption",value:i,onChange:r,InputLabelProps:{shrink:!!i},error:!!M.caption,helperText:M.caption?.message})}}),C?(0,t.jsxs)(o.f,{rowGap:3,children:[(0,t.jsxs)(o.f,{direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(r.f,{sx:{color:h.f.COLOUR.secondary,fontWeight:600,pointerEvents:"none"},children:C.name}),(0,t.jsx)(a.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),L(null),U()},children:(0,t.jsx)(f.default,{})})})]}),(0,t.jsxs)(o.f,{direction:"row",columnGap:3,justifyContent:"flex-end",children:[(0,t.jsx)(b,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),A(!1),p()},children:"Cancel"}),(0,t.jsx)(b,{variant:"contained",size:"small",onClick:D(e=>{C&&(S({...e,media:C,type:I}),A(!1))}),children:"Save"})]})]}):(0,t.jsxs)(o.f,{direction:"row",columnGap:3,justifyContent:"flex-end",children:[(0,t.jsxs)(v,{component:"label",children:["Add image ",(0,t.jsx)(y,{onChange:T("image"),type:"file",accept:s.m})]}),(0,t.jsxs)(v,{component:"label",children:["Add document ",(0,t.jsx)(y,{onChange:T("document"),type:"file",accept:s.f,multiple:!0})]})]})]})}):(0,t.jsxs)(o.f,{direction:"row",justifyContent:"flex-start",alignItems:"center",spacing:1,children:[(0,t.jsx)(r.f,{sx:{color:h.f.COLOUR.secondary,fontWeight:600,pointerEvents:"none"},children:j||x?.name||"No caption"}),!l&&(0,t.jsx)(a.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:p,children:(0,t.jsx)(f.default,{sx:{fontSize:"16px"}})})})]})})};e.s(["f",0,e=>{let{values:s,setValue:d,name:c="attachments",title:p="Attachments",titleSx:u={},onDeleteExistingMedia:m}=e,[f,h]=(0,i.useState)([]);return(0,i.useEffect)(()=>{Array.isArray(s)&&h(s)},[s]),(0,t.jsxs)(o.f,{children:[(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(r.f,{sx:u,children:p?p+":":""}),(0,t.jsx)(a.f,{title:"Add new attachment",placement:"top-start",children:(0,t.jsx)(n.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),h(e=>[...e,{mediaId:null,caption:"",media:null,type:"",isAdded:!0}])},children:(0,t.jsx)(l.default,{})})})]}),(0,t.jsx)(o.f,{pl:2,spacing:.8,children:f?.length?f.map((e,i)=>(0,t.jsx)(j,{...e,onDelete:()=>{m&&f[i]?.mediaId&&m(f[i].mediaId);let e=f.filter((e,t)=>t!==i&&null!==e.media);d(c,e),h(e)},onSave:e=>{let t;(t=[...f]).splice(i,1,e),d(c,t.filter(e=>null!==e.media))}},(e?.caption??"")+i)):(0,t.jsx)(r.f,{typography:"subtitle2",children:"No data"})})]})}],790388),e.s([],864980)},122989,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(668921),n=e.i(231637),o=e.i(901004),a=e.i(539117),l=e.i(471973);let s=(0,i.f)(r.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),d=(0,i.f)(n.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:r,label:n,options:c,value:p,onChange:u,helperText:m,error:f,hideLabel:h,renderOption:x,...g}=e;return(0,t.jsxs)(s,{variant:r,fullWidth:i,error:f,hiddenLabel:h,children:[!h&&(0,t.jsx)(d,{variant:r,children:n}),(0,t.jsx)(a.f,{fullWidth:i,displayEmpty:!0,value:p||"",onChange:u,sx:{position:"relative"},renderValue:()=>{let e=c.find(e=>e.value===p);return e?e.label:""},error:f,...g,children:c.length?c.map(e=>(0,t.jsx)(o.f,{value:e.value,disabled:e.disabled,children:x?x(e):e.label},e.value)):(0,t.jsx)(o.f,{disabled:!0,value:"",children:"No options"})}),m&&(0,t.jsx)(l.f,{error:f,children:m})]})}])},964770,e=>{var t=e.i(391398),i=e.i(738251),r=e.i(813843),n=e.i(652148),o=e.i(280445),a=e.i(115871),l=e.i(191788);let s=(0,o.f)(i.f)(e=>{let{theme:t,error:i,height:r}=e;return{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:i?t.palette.error.main:"#D9D9D9",height:r||"28px",padding:"0 5px"}}),d=(0,o.f)(n.f)(e=>{let{theme:t,error:i,height:r,leftLabelRef:n}=e;return{height:r||"28px","& .MuiInputBase-root ":{borderRadius:"0px","&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderColor:i?t.palette.error.main:"#D9D9D9"}},"& .MuiInputBase-input":{height:`calc(${r||"28px"} - 8px)`,padding:"2px 14px",borderColor:i?t.palette.error.main:"#D9D9D9",borderStyle:"solid",borderBottomWidth:"2.5px",borderTopWidth:"2px"},"& .MuiOutlinedInput-notchedOutline":{border:"none"}},"& .MuiFormLabel-root.MuiInputLabel-root":{transform:`translate(14px, ${(r?Number(r.replace("px","")):28)/2-10}px) scale(1)`,"&.Mui-focused":{color:"rgba(0, 0, 0, 0.6)"},"&.MuiInputLabel-shrink":{transform:"translate(0px, -16.5px) scale(0.75)"}},"& .MuiFormHelperText-root.Mui-error":{marginLeft:"0px",transform:`translate(-${n?.current?.clientWidth||0}px, 0px)`}}});e.s(["f",0,e=>{let{leftLabel:i,rightLabel:n,middleRight:o,error:c,height:p,rightLabelTypography:u,leftLabelTypography:m,...f}=e,h=(0,l.useRef)(null),x=(0,l.useRef)(null);return(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",children:[(0,t.jsx)(s,{ref:h,sx:{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},error:c,height:p,children:(0,t.jsx)(a.f,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",...m},children:i})}),(0,t.jsx)(d,{...f,variant:"outlined",size:"small",error:c,height:p,leftLabelRef:h,rightLabelRef:x}),o&&(0,t.jsx)(s,{error:c,height:p,sx:{borderRadius:0,padding:0,flexShrink:0,overflow:"visible"},children:o}),(0,t.jsx)(s,{ref:x,sx:{borderTopRightRadius:"5px",borderBottomRightRadius:"5px",...o?{borderTopLeftRadius:0,borderBottomLeftRadius:0,borderLeft:e=>`1px solid ${e.palette.background.paper}`}:{}},error:c,height:p,children:(0,t.jsx)(a.f,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",...u},variant:"body2",fontWeight:700,children:n})})]})}])},284661,e=>{var t=e.i(159080);let i=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,i])},892904,e=>{var t=e.i(159080),i=e.i(987123);let r=t.f`
  fragment JobFields on Job {
    access
    issueReportedDescription
    adminId
    costCategory
    createdAt
    description
    id
    meta
    pricing
    supplierPricing
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
    statusData
    correctDuration
    correctStart
    correctEnd
    onSiteTimingEnd
    jobReportTimingEnd
    quoteReturnedTimingEnd
  }
`,n=t.f`
  fragment JobQuoteFields on Job {
    quoted
    quoteNumber
    quoteDue
    quoteDueSupplier
    quoteCharge
  }
`,o=t.f`
  fragment JobAdminFields on Job {
    supplierId
    supplierUserId
  }
`,a=t.f`
  fragment JobSupplierFields on Job {
    supplierId
    supplierUserId
  }
`,l=t.f`
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
`,s=t.f`
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
`,t.f`
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
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
        }
      }
    }
  }
  ${i.a}
  ${i.S}
`,e.s(["K",0,s,"O",0,o,"r",0,r,"Z",0,n,"q",0,a,"D",0,l])},115126,e=>{var t=e.i(391398),i=e.i(420),r=e.i(202246),n=e.i(738251),o=e.i(755548),a=e.i(551918),l=e.i(813843),s=e.i(566118),d=e.i(687722),c=e.i(145018),c=c,p=e.i(460997),u=e.i(75907),m=e.i(191788),f=e.i(889878),h=e.i(600961),x=e.i(396851),g=e.i(395724),b=e.i(631269),v=e.i(425577),y=e.i(432484),j=e.i(713149),S=e.i(46739);function C(e){return(0,S.f)("MuiStepContent",e)}let L=(0,j.f)("MuiStepContent",["root","last","transition"]),I=["children","className","TransitionComponent","transitionDuration","TransitionProps"],R=(0,x.f)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,i.last&&t.last]}})(e=>{let{ownerState:t,theme:i}=e;return(0,u.f)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:i.vars?`1px solid ${i.vars.palette.StepContent.border}`:`1px solid ${"light"===i.palette.mode?i.palette.grey[400]:i.palette.grey[600]}`},t.last&&{borderLeft:"none"})}),w=(0,x.f)(b.f,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),A=m.forwardRef(function(e,i){let r=(0,g.f)({props:e,name:"MuiStepContent"}),{children:n,className:o,TransitionComponent:a=b.f,transitionDuration:l="auto",TransitionProps:s}=r,d=(0,p.f)(r,I),{orientation:c}=m.useContext(v.f),{active:x,last:j,expanded:S}=m.useContext(y.f),L=(0,u.f)({},r,{last:j}),A=(e=>{let{classes:t,last:i}=e;return(0,h.f)({root:["root",i&&"last"],transition:["transition"]},C,t)})(L),$=l;return"auto"!==l||a.muiSupportAuto||($=void 0),(0,t.jsx)(R,(0,u.f)({className:(0,f.f)(A.root,o),ref:i,ownerState:L},d,{children:(0,t.jsx)(w,(0,u.f)({as:a,in:x||S,className:A.transition,ownerState:L,timeout:$,unmountOnExit:!0},s,{children:n}))}))});var $=e.i(280875),M=e.i(860387),M=M,D=e.i(115871),U=e.i(889231),_=e.i(280445),N=e.i(362537);let T=(0,_.f)(d.f)(e=>{let{theme:t}=e;return{[`&.${c.U.active}`]:{[`& .${c.U.line}`]:{borderColor:t.palette.primary.main}},[`&.${c.U.completed}`]:{[`& .${c.U.line}`]:{borderColor:t.palette.primary.main}},[`& .${c.U.line}`]:{borderColor:t.palette.primary.main,borderLeftWidth:4,borderRadius:1,marginLeft:"-2px",minHeight:"15px"}}}),z=(0,_.f)(A)(e=>{let{theme:t}=e;return{[`&.${L.root}`]:{paddingLeft:"38px",paddingRight:"5px",borderColor:t.palette.primary.main,borderLeftWidth:4,marginLeft:"10px"}}}),q=(0,_.f)($.f)(()=>({[`&.${M.U.root}`]:{padding:0},[`& .${M.U.labelContainer}`]:{color:"inherit"},[`& .${M.U.label}`]:{display:"flex",alignItems:"center",color:"inherit"}}));e.s(["f",0,e=>{let{steps:d,summary:c,enableBorder:p=!1}=e;return(0,t.jsxs)(n.f,{children:[(0,t.jsx)(a.f,{orientation:"vertical",connector:(0,t.jsx)(T,{}),children:d.filter(e=>{let{active:t}=e;return void 0===t||t}).map((e,a)=>{let{id:c,label:u,info:m,date:f,content:h,actions:x}=e,g=!!f,b=h?.filter(e=>{let{active:t,data:i}=e;return!!t&&!!i})||[],v=x?.filter(e=>{let{active:t}=e;return!!t})||[],y=g?(0,t.jsx)(i.default,{color:"primary"}):(0,t.jsx)(r.default,{color:"primary"});return(0,t.jsxs)(s.f,{completed:g,expanded:!0,children:[(0,t.jsxs)(q,{icon:y,children:[(0,t.jsx)(D.f,{sx:{fontSize:"13px",fontWeight:600,ml:"20px"},children:u}),(0,t.jsx)(D.f,{sx:{fontSize:"10px",fontWeight:400,ml:"auto",mr:"5px",opacity:.6},children:f?(0,N.default)(f).format("D MMM YYYY HH:mm"):""})]}),(0,t.jsx)(z,{children:(0,t.jsxs)(n.f,{sx:p&&a!==d.length-1?{pb:"15px",borderBottom:"1px solid #E0E0E0"}:void 0,children:[(0,t.jsx)(n.f,{children:g||b?.length>0?b.map(e=>"function"==typeof e.data?e.data():(0,t.jsx)(D.f,{sx:{fontSize:"10px",pl:"4px"},children:e.data})):(0,t.jsx)(D.f,{sx:{fontSize:"10px"},children:m})}),v?.length>0&&(0,t.jsx)(l.f,{mt:.5,spacing:.5,children:v.map(e=>"button"!==e.type?null:(0,t.jsx)(n.f,{children:(0,t.jsx)(o.f,{color:e.context,variant:"contained",size:"small",onClick:e.handleClick,children:e.content})}))})]})})]},`${u}-${c}`)})}),c&&c?.length>0&&(0,t.jsx)(n.f,{mt:2,children:c.map(e=>{let{label:i,value:r,link:n}=e;return(0,t.jsxs)(D.f,{mt:.75,children:[i,":"," ",n?(0,t.jsx)(U.f,{color:"secondary",underline:"none",href:n,children:r}):r]},i)})})]})}],115126)},921451,e=>{e.s(["e",0,e=>parseInt(e).toLocaleString("en-GB",{minimumIntegerDigits:2,useGrouping:!1}),"U",0,(e,t)=>{let i=Math.pow(10,t);return Math.round(e*i)/i}])},536422,e=>{e.s(["f",0,e=>"string"==typeof e&&""!==e.trim()&&e.toLowerCase().replace("gb","").length>=9])},123518,e=>{e.s(["f",0,[{label:"United Kingdom",value:1},{label:"Ireland",value:4}]])},410355,e=>{var t=e.i(391398),i=e.i(422411),r=e.i(424894),n=e.i(426778);let o=(0,n.t)().shape({id:(0,n.H)().nullable(),name:(0,n.x)(),invoicingEntity:(0,n.x)(),invoicingEmail:(0,n.x)(),addressLine1:(0,n.x)().required(),addressLine2:(0,n.x)(),addressLine3:(0,n.x)(),city:(0,n.x)().required(),postCode:(0,n.x)().required().matches("^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$|^([AC-FHKNPRTV-Y]\\d{2}|D6W)\\s[0-9AC-FHKNPRTV-Y]{4}$","Invalid Post Code"),county:(0,n.x)(),countryId:(0,n.H)().required()});var a=e.i(123518),l=e.i(755548),s=e.i(813843),d=e.i(652148),c=e.i(115871),p=e.i(122989);let u={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{defaultValues:n,onSubmit:m,type:f}=e,{control:h,errors:x,handleSubmit:g,register:b}=(0,i.G)({defaultValues:{...n},resolver:(0,r.yupResolver)(o)});return(0,t.jsxs)("form",{id:"offCanvasForm",onSubmit:g(m),children:[(0,t.jsxs)(s.f,{spacing:2,children:[(0,t.jsx)(c.f,{sx:u,children:"Address Form"}),(0,t.jsx)(d.f,{fullWidth:!0,name:"name",inputRef:b,label:"Address name",variant:"standard",color:"secondary",error:!!x.name}),"invoice"===f&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"invoicingEmail",inputRef:b,label:"Invoicing email",type:"email",variant:"standard",color:"secondary",error:!!x.invoicingEmail}),(0,t.jsx)(d.f,{fullWidth:!0,name:"invoicingEntity",inputRef:b,label:"Invoicing entity",multiline:!0,rows:4,variant:"filled",color:"secondary",error:!!x.invoicingEntity})]}),(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine1",inputRef:b,label:"Address Line 1*",variant:"standard",color:"secondary",error:!!x.addressLine1}),(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine2",inputRef:b,label:"Address Line 2",variant:"standard",color:"secondary",error:!!x.addressLine2})]}),(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"addressLine3",inputRef:b,label:"Address Line 3",variant:"standard",color:"secondary",error:!!x.addressLine3}),(0,t.jsx)(d.f,{fullWidth:!0,name:"city",inputRef:b,label:"City*",variant:"standard",color:"secondary",error:!!x.city})]}),(0,t.jsxs)(s.f,{direction:"row",spacing:2,children:[(0,t.jsx)(d.f,{fullWidth:!0,name:"postCode",inputRef:b,label:"Post Code*",variant:"standard",color:"secondary",error:!!x.postCode}),(0,t.jsx)(d.f,{fullWidth:!0,name:"county",inputRef:b,label:"County",variant:"standard",color:"secondary",error:!!x.county})]}),(0,t.jsx)(s.f,{marginBottom:4,children:(0,t.jsx)(i.e,{name:"countryId",control:h,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(p.f,{value:i,onChange:r,options:a.f,label:"Country*",fullWidth:!0,error:!!x.countryId,variant:"standard",color:"secondary"})}})})]}),(0,t.jsx)(s.f,{direction:"row",justifyContent:"flex-end",marginTop:3,spacing:2,children:(0,t.jsx)(l.f,{variant:"contained",color:"secondary",type:"submit",children:"Submit"})}),n?.id&&(0,t.jsx)("input",{ref:b,name:"id",type:"hidden"})]})}],410355)},362407,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(776204),n=e.i(432171),o=e.i(990071),a=e.i(410355),l=e.i(74633),s=e.i(411331),d=e.i(755548),c=e.i(813843),p=e.i(4142),u=e.i(115871),m=e.i(497844);let f=e=>{let{addresses:i=[],entity:n,entityId:f,loading:h,onSelected:x,refetch:g,selectable:b=!1,selected:v,type:y,editable:j}=e,S=(0,s.f)(),[C]=(0,r.f)(o.g,{onCompleted:()=>{S.close(),g()}}),[L]=(0,r.f)(o.h,{onCompleted:()=>{S.close(),g()}}),I=async e=>{e.countryId||(e.countryId=1);let t=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:e})}).then(e=>e.json());e.id?e.meta={invoicingEmail:e.invoicingEmail,...e.meta}:e.meta={invoicingEmail:e.invoicingEmail},delete e.invoicingEmail;let i=t?.coordinates||null;if(i?.lat&&i?.lng&&(e.geo={type:"Point",coordinates:[i.lng,i.lat]}),e.id){let t=parseInt(e.id);await L({variables:{id:t,changes:e}})}else e.Address_Entities={data:{entity:n,entityId:f,status:"active"}},await C({variables:{objects:[e]}})},R=e=>{let r=i.find(t=>t.id===e.id),n=r?r.address:null,o=n&&{id:n.id,invoicingEmail:n.meta?.invoicingEmail,invoicingEntity:n.invoicingEntity,name:n.name,addressLine1:n.addressLine1,addressLine2:n.addressLine2,addressLine3:n.addressLine3,city:n.city,postCode:n.postCode,county:n.county,countryId:n.country?.id};S.show({content:(0,t.jsx)(a.f,{defaultValues:o,onSubmit:I,type:y}),title:n?"Edit address":"invoice"===y?"Add new invoice address":"Add new address",submit:!1})},w=[{field:"id",headerName:"ID",sortable:!1},{field:"select",headerName:"Select",sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsx)(p.f,{checked:Number(v)===i.select,onChange:e=>{x(i.select,e.target.checked)},size:"small",color:"secondary"})},maxWidth:65},{field:"address",headerName:"Address",flex:1,sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsxs)(c.f,{children:[(0,t.jsx)(u.f,{children:i.address?.name}),(0,t.jsx)(u.f,{children:i.address.country?.name||""}),(0,t.jsx)(u.f,{children:i.address.addressLine1}),(0,t.jsx)(u.f,{children:i.address.city})]})}},{field:"email",headerName:"Email",sortable:!1},{field:"actions",headerName:"Actions",sortable:!1,renderCell(e){let{row:i}=e;return(0,t.jsx)(m.f,{actions:[{icon:"edit",tooltip:"Edit",onClick:()=>{R(i)}}]})}}],A=i?.map(e=>{let t=e.address;return{id:e.id,select:t.id,address:t,email:t.meta?.invoicingEmail||"-",actions:""}})||[];return(0,t.jsxs)(t.Fragment,{children:[j&&(0,t.jsx)(c.f,{marginBottom:3,justifyContent:"flex-start",flexDirection:"row",children:(0,t.jsx)(d.f,{variant:"contained",color:"secondary",onClick:R,children:"Add new address"})}),(0,t.jsx)(l.s,{columns:w,rowHeight:100,columnVisibilityModel:{id:!1,select:b&&!!j,address:!0,email:"invoice"===y,action:!!j},loading:h,paginationSize:50,rows:A,autoHeight:!0})]})};var h=e.i(795617),x=e.i(594301),g=e.i(936641),b=e.i(652148);let v={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{addressId:a,entity:l,entityId:s,id:c,onSubmit:p,type:m,showAccessInformation:y=!1,accessInformation:j}=e,[S,C]=(0,i.useState)(a||null),[L,I]=(0,i.useState)(!1),[R,w]=(0,i.useState)(!1),[A,$]=(0,i.useState)(!1),[M,D]=(0,i.useState)(j??""),U=(0,h.N)(m),_=(0,h.p)(l),{hasRole:N}=(0,x.f)(),T=N("customer"),{loading:z,data:{item:q}={item:null},refetch:E}=(0,n.t)(_,{variables:{id:s}}),[k]=(0,r.f)(o.H,{onCompleted:e=>{p&&p(e)}}),[W]=(0,r.f)(o.I,{onCompleted:e=>{p&&p(e)}}),P=[];if(q){q.addresses&&P.push(...q.addresses);let e=q.accounts?.find(e=>"primary"===e.linkType)?.account;e?.addresses&&e?.addresses.forEach(e=>{P.find(t=>t.address.id===e.address.id)||P.push(e)})}let F=async(e,t)=>{w(!1),I(!1),t?(C(parseInt(e)),await J(parseInt(e))):(C(null),I(!0))},J=async e=>{if(S!==e){let t=null,i=null;if(P.forEach(r=>{r.address.id===e&&(t=r.entity,i=r.id)}),i&&t===l){let e={id:parseInt(i),changes:{[m]:!0},whereOld:{entityId:{_eq:s},[m]:{_eq:!0}},changesOld:{[m]:!1}};await W({variables:e}),w(!0)}else{let t=[{addressId:parseInt(e),entity:l,entityId:s,status:"active",[m]:!0}];await k({variables:{objects:t,whereOld:{entityId:{_eq:s},[m]:{_eq:!0}},changesOld:{[m]:!1}}}),w(!0)}}else p&&p(null)},O=async()=>{$(!1),await p?.({access:M}),$(!0)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.f,{sx:v,children:U}),R&&(0,t.jsx)(g.f,{severity:"success",sx:{marginBottom:3},children:"Selection saved."}),L&&(0,t.jsx)(g.f,{severity:"info",sx:{marginBottom:3},children:"You should select at least one address."}),A&&(0,t.jsx)(g.f,{severity:"success",sx:{marginBottom:3},children:"Access information saved."}),(0,t.jsx)(f,{addresses:P,entity:l,entityId:s,id:c,loading:z,refetch:E,selectable:!0,selected:S,type:m,onSelected:F,editable:!T}),y&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",label:"Access information",value:M,onChange:e=>D(e.target.value),sx:{mt:2}}),(0,t.jsx)(d.f,{variant:"contained",color:"secondary",sx:{mt:2},onClick:O,children:"Save"})]})]})}],362407)},190871,179319,e=>{var t=e.i(203828),i=e.i(220303),r=e.i(93198),n=e.i(262887);let o=e=>{let{type:t,number:i,id:r}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:i,id:String(r)})}`};e.s(["$",0,o,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let i=Number(e.id);return{number:t,...Number.isSafeInteger(i)&&i>0&&{id:i}}}],179319);let a="This document could not be found",l="documentOpenedFromPortal",s=async e=>{let s=await e;if(!s)throw Error(a);if((0,r.Z)()&&"job-report"!==s.type){let e=await i.R.fetchQuery("/documents/:type/:number",{pathParams:{type:s.type,number:s.number},params:{id:s.id}});if(!("url"in e))throw Error(a);await (0,n.f)(e.url);return}let d=o(s);(e=>{try{return sessionStorage.setItem(l,e),!0}catch{return!1}})(d),await t.default.push(d)};e.s(["W",0,e=>{try{return sessionStorage.getItem(l)===o(e)}catch{return!1}},"k",0,s],190871)},140021,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),o=e.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M17.21 17.61c-.47-.24-1.03-.05-1.31.4-.36.6-.97.99-1.9.99H9.1c.83-1 1.5-2.34 1.5-4 0-.35-.03-.69-.08-1H13c.55 0 1-.45 1-1s-.45-1-1-1H9.82C9 10.42 8 9.6 8 8c0-1.93 1.57-3.5 3.5-3.5 1.2 0 2.26.61 2.89 1.53.27.4.77.59 1.22.4.6-.25.8-.99.43-1.53-.99-1.45-2.66-2.4-4.54-2.4C8.46 2.5 6 4.96 6 8c0 1.78.79 2.9 1.49 4H7c-.55 0-1 .45-1 1s.45 1 1 1h1.47c.08.31.13.64.13 1 0 1.9-1.29 3.11-2.06 3.66-.34.24-.54.63-.54 1.05 0 .71.58 1.29 1.29 1.29H14c1.55 0 2.95-.76 3.63-2 .28-.51.09-1.14-.42-1.39"}),"CurrencyPoundRounded")},202246,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),o=e.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked")},551918,425577,432484,145018,687722,566118,860387,280875,e=>{var t,i=e.i(460997),r=e.i(75907),n=e.i(191788),o=e.i(889878),a=e.i(600961),l=e.i(395724),s=e.i(396851),d=e.i(713149),c=e.i(46739);function p(e){return(0,c.f)("MuiStepper",e)}(0,d.f)("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);var u=e.i(464107);let m=n.createContext({});e.s(["f",0,m],425577);let f=n.createContext({});function h(e){return(0,c.f)("MuiStepConnector",e)}e.s(["f",0,f],432484);let x=(0,d.f)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);e.s(["U",0,x,"c",0,h],145018);var g=e.i(391398);let b=["className"],v=(0,s.f)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation],i.alternativeLabel&&t.alternativeLabel,i.completed&&t.completed]}})(e=>{let{ownerState:t}=e;return(0,r.f)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})}),y=(0,s.f)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.line,t[`line${(0,u.f)(i.orientation)}`]]}})(e=>{let{ownerState:t,theme:i}=e,n="light"===i.palette.mode?i.palette.grey[400]:i.palette.grey[600];return(0,r.f)({display:"block",borderColor:i.vars?i.vars.palette.StepConnector.border:n},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),j=n.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStepConnector"}),{className:d}=s,c=(0,i.f)(s,b),{alternativeLabel:p,orientation:x="horizontal"}=n.useContext(m),{active:j,disabled:S,completed:C}=n.useContext(f),L=(0,r.f)({},s,{alternativeLabel:p,orientation:x,active:j,completed:C,disabled:S}),I=(e=>{let{classes:t,orientation:i,alternativeLabel:r,active:n,completed:o,disabled:l}=e,s={root:["root",i,r&&"alternativeLabel",n&&"active",o&&"completed",l&&"disabled"],line:["line",`line${(0,u.f)(i)}`]};return(0,a.f)(s,h,t)})(L);return(0,g.jsx)(v,(0,r.f)({className:(0,o.f)(I.root,d),ref:t,ownerState:L},c,{children:(0,g.jsx)(y,{className:I.line,ownerState:L})}))});e.s(["f",0,j],687722);let S=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],C=(0,s.f)("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation],i.alternativeLabel&&t.alternativeLabel,i.nonLinear&&t.nonLinear]}})(e=>{let{ownerState:t}=e;return(0,r.f)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})}),L=(0,g.jsx)(j,{}),I=n.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStepper"}),{activeStep:d=0,alternativeLabel:c=!1,children:u,className:f,component:h="div",connector:x=L,nonLinear:b=!1,orientation:v="horizontal"}=s,y=(0,i.f)(s,S),j=(0,r.f)({},s,{nonLinear:b,alternativeLabel:c,orientation:v,component:h}),I=(e=>{let{orientation:t,nonLinear:i,alternativeLabel:r,classes:n}=e;return(0,a.f)({root:["root",t,i&&"nonLinear",r&&"alternativeLabel"]},p,n)})(j),R=n.Children.toArray(u).filter(Boolean),w=R.map((e,t)=>n.cloneElement(e,(0,r.f)({index:t,last:t+1===R.length},e.props))),A=n.useMemo(()=>({activeStep:d,alternativeLabel:c,connector:x,nonLinear:b,orientation:v}),[d,c,x,b,v]);return(0,g.jsx)(m.Provider,{value:A,children:(0,g.jsx)(C,(0,r.f)({as:h,ownerState:j,className:(0,o.f)(I.root,f),ref:t},y,{children:w}))})});function R(e){return(0,c.f)("MuiStep",e)}e.s(["f",0,I],551918),(0,d.f)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);let w=["active","children","className","component","completed","disabled","expanded","index","last"],A=(0,s.f)("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation],i.alternativeLabel&&t.alternativeLabel,i.completed&&t.completed]}})(e=>{let{ownerState:t}=e;return(0,r.f)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})}),$=n.forwardRef(function(e,t){let s=(0,l.f)({props:e,name:"MuiStep"}),{active:d,children:c,className:p,component:u="div",completed:h,disabled:x,expanded:b=!1,index:v,last:y}=s,j=(0,i.f)(s,w),{activeStep:S,connector:C,alternativeLabel:L,orientation:I,nonLinear:$}=n.useContext(m),[M=!1,D=!1,U=!1]=[d,h,x];S===v?M=void 0===d||d:!$&&S>v?D=void 0===h||h:!$&&S<v&&(U=void 0===x||x);let _=n.useMemo(()=>({index:v,last:y,expanded:b,icon:v+1,active:M,completed:D,disabled:U}),[v,y,b,M,D,U]),N=(0,r.f)({},s,{active:M,orientation:I,alternativeLabel:L,completed:D,disabled:U,expanded:b,component:u}),T=(e=>{let{classes:t,orientation:i,alternativeLabel:r,completed:n}=e;return(0,a.f)({root:["root",i,r&&"alternativeLabel",n&&"completed"]},R,t)})(N),z=(0,g.jsxs)(A,(0,r.f)({as:u,className:(0,o.f)(T.root,p),ref:t,ownerState:N},j,{children:[C&&L&&0!==v?C:null,c]}));return(0,g.jsx)(f.Provider,{value:_,children:C&&!L&&0!==v?(0,g.jsxs)(n.Fragment,{children:[C,z]}):z})});e.s(["f",0,$],566118);var M=e.i(59540);let D=(0,M.f)((0,g.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),U=(0,M.f)((0,g.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");var _=e.i(308277);function N(e){return(0,c.f)("MuiStepIcon",e)}let T=(0,d.f)("MuiStepIcon",["root","active","completed","error","text"]),z=["active","className","completed","error","icon"],q=(0,s.f)(_.f,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,t)=>t.root})(e=>{let{theme:t}=e;return{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${T.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${T.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${T.error}`]:{color:(t.vars||t).palette.error.main}}}),E=(0,s.f)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,t)=>t.text})(e=>{let{theme:t}=e;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}}),k=n.forwardRef(function(e,n){let s=(0,l.f)({props:e,name:"MuiStepIcon"}),{active:d=!1,className:c,completed:p=!1,error:u=!1,icon:m}=s,f=(0,i.f)(s,z),h=(0,r.f)({},s,{active:d,completed:p,error:u}),x=(e=>{let{classes:t,active:i,completed:r,error:n}=e;return(0,a.f)({root:["root",i&&"active",r&&"completed",n&&"error"],text:["text"]},N,t)})(h);if("number"==typeof m||"string"==typeof m){let e=(0,o.f)(c,x.root);return u?(0,g.jsx)(q,(0,r.f)({as:U,className:e,ref:n,ownerState:h},f)):p?(0,g.jsx)(q,(0,r.f)({as:D,className:e,ref:n,ownerState:h},f)):(0,g.jsxs)(q,(0,r.f)({className:e,ref:n,ownerState:h},f,{children:[t||(t=(0,g.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,g.jsx)(E,{className:x.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:h,children:m})]}))}return m});function W(e){return(0,c.f)("MuiStepLabel",e)}let P=(0,d.f)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]);e.s(["U",0,P,"L",0,W],860387);let F=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],J=(0,s.f)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,t[i.orientation]]}})(e=>{let{ownerState:t}=e;return(0,r.f)({display:"flex",alignItems:"center",[`&.${P.alternativeLabel}`]:{flexDirection:"column"},[`&.${P.disabled}`]:{cursor:"default"}},"vertical"===t.orientation&&{textAlign:"left",padding:"8px 0"})}),O=(0,s.f)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,t)=>t.label})(e=>{let{theme:t}=e;return(0,r.f)({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${P.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.alternativeLabel}`]:{marginTop:16},[`&.${P.error}`]:{color:(t.vars||t).palette.error.main}})}),H=(0,s.f)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,t)=>t.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${P.alternativeLabel}`]:{paddingRight:0}})),B=(0,s.f)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,t)=>t.labelContainer})(e=>{let{theme:t}=e;return{width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${P.alternativeLabel}`]:{textAlign:"center"}}}),G=n.forwardRef(function(e,t){var s;let d=(0,l.f)({props:e,name:"MuiStepLabel"}),{children:c,className:p,componentsProps:u={},error:h=!1,icon:x,optional:b,slotProps:v={},StepIconComponent:y,StepIconProps:j}=d,S=(0,i.f)(d,F),{alternativeLabel:C,orientation:L}=n.useContext(m),{active:I,disabled:R,completed:w,icon:A}=n.useContext(f),$=x||A,M=y;$&&!M&&(M=k);let D=(0,r.f)({},d,{active:I,alternativeLabel:C,completed:w,disabled:R,error:h,orientation:L}),U=(e=>{let{classes:t,orientation:i,active:r,completed:n,error:o,disabled:l,alternativeLabel:s}=e;return(0,a.f)({root:["root",i,o&&"error",l&&"disabled",s&&"alternativeLabel"],label:["label",r&&"active",n&&"completed",o&&"error",l&&"disabled",s&&"alternativeLabel"],iconContainer:["iconContainer",r&&"active",n&&"completed",o&&"error",l&&"disabled",s&&"alternativeLabel"],labelContainer:["labelContainer",s&&"alternativeLabel"]},W,t)})(D),_=null!=(s=v.label)?s:u.label;return(0,g.jsxs)(J,(0,r.f)({className:(0,o.f)(U.root,p),ref:t,ownerState:D},S,{children:[$||M?(0,g.jsx)(H,{className:U.iconContainer,ownerState:D,children:(0,g.jsx)(M,(0,r.f)({completed:w,active:I,error:h,icon:$},j))}):null,(0,g.jsxs)(B,{className:U.labelContainer,ownerState:D,children:[c?(0,g.jsx)(O,(0,r.f)({ownerState:D},_,{className:(0,o.f)(U.label,null==_?void 0:_.className),children:c})):null,b]})]}))});G.muiName="StepLabel",e.s(["f",0,G],280875)},720676,e=>{var t=e.i(172694);e.s(["f",()=>t.U])}])})();