(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[526374,e=>{var t=e.i(391398),r=e.i(443103),i=e.i(776204),n=e.i(432171),a=e.i(247297),o=e.i(515523),s=e.i(987171),d=e.i(738251),l=e.i(76381),u=e.i(773831),c=e.i(388866),m=e.i(901004),p=e.i(522507),f=e.i(813843),g=e.i(652148),y=e.i(191788),h=e.i(514707),b=e.i(594301),x=e.i(21557),v=e.i(190844),_=e.i(886292),j=e.i(552987),$=e.i(731349),I=e.i(330774);let S=(0,s.t)(),w=(0,h.f)(p.U)({"& .MuiPaper-root":{borderRadius:"12px"}});e.s(["f",0,e=>{let{hideTagsList:s=!1,entityId:p,entity:h,values:A=[],name:C="tags",setValue:T=()=>{},refetchQueries:E=[],showAllTags:k=!1,preloadTags:L=!1,slaJobTimings:M=null,removeTagTarget:q}=e,{user:R}=(0,b.f)(),[O,U]=(0,y.useState)(null),[D,P]=(0,y.useState)(""),[G,F]=(0,y.useState)(""),B=(0,y.useRef)(null),N=!!O,H=(0,y.useCallback)(()=>{null!==B.current&&(clearTimeout(B.current),B.current=null)},[]),J=(0,y.useCallback)(e=>{H(),B.current=setTimeout(()=>{B.current=null,P(e)},500)},[H]);(0,y.useEffect)(()=>()=>H(),[H]);let z=(0,x.f)(),W=e=>{z.show({content:`Error: ${e.message}`,severity:"error"})},{data:{tags:K}={tags:[]},loading:V}=(0,n.t)(_.J,{skip:!p||!N&&!L,variables:{entityId:p,entity:h},onCompleted:e=>{let{tags:t}=e;T(C,t)}}),{data:{tags:Q}={tags:[]},loading:Y}=(0,n.t)(_.r,{skip:!O,variables:{entityId:p??-1,entity:h,q:""!==D?`%${D}%`:null}}),[Z,{loading:X}]=(0,i.f)(_.K,{refetchQueries:["GetEntityTags"],onError:W}),[ee,{loading:et}]=(0,i.f)(_.$,{refetchQueries:["GetEntityTags","GetTagsForEntity",...E],onError:W}),[er,{loading:ei}]=(0,i.f)(_.R,{refetchQueries:["GetEntityTags","GetTagsForEntity",...E],onError:W}),[en,{loading:ea}]=(0,i.f)(_.M,{refetchQueries:["GetEntityTags","GetTagsForEntity",...E],onError:W}),eo=async(e,t)=>{if("string"==typeof t)return;let i=new Set(r.uniqBy([...K,...A],e=>e.tag?.id).map(e=>e.tag.id));if(t&&"inputValue"in t&&p)ee({variables:{objects:[{entity:h,entityId:p,Taxonomy:{data:{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:R.adminId}}}]}});else if(t&&"value"in t&&p){if(i.has(Number(t.value)))return;ee({variables:{objects:[{entity:h,entityId:p,taxonomyId:t.value}]}})}else if(t&&"inputValue"in t){let{data:e}=await Z({variables:{objects:[{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:R.adminId}]}});if(!e?.insert_Taxonomy?.returning[0])return;T(C,r.uniqBy([...A,{id:null,tag:{id:e.insert_Taxonomy.returning[0].id,name:e.insert_Taxonomy.returning[0].name,meta:e.insert_Taxonomy.returning[0].meta}}],e=>e.tag.id))}else t&&"value"in t&&t.value&&"label"in t&&t.label&&"meta"in t&&t.meta&&T(C,r.uniqBy([...A,{id:null,tag:{id:Number(t.value),name:t.label,meta:t.meta}}],e=>e.tag.id))},es=(0,y.useCallback)((e,t)=>{let r=S(e,t),{inputValue:i}=t,n=e.some(e=>"label"in e&&i===e.label);return""===i||n||r.push({inputValue:i,label:`Add "${i}"`,value:i}),r},[]),ed=(0,y.useCallback)(e=>"string"==typeof e?e:e.inputValue?e.inputValue:e.label,[]),el=async e=>{let{tagId:t,color:r}=e,{data:i}=await en({variables:{tagId:t,object:{meta:{color:r}}}});i?.update_Taxonomy_by_pk&&T(C,A.map(e=>e.tag.id===t?{...e,tag:{...i?.update_Taxonomy_by_pk}}:e))},eu=async e=>{let{tagId:t,name:r}=e,{data:i}=await en({variables:{tagId:t,object:{name:r}}});i?.update_Taxonomy_by_pk&&T(r,A.map(e=>e.tag.id===t?{...e,tag:{...i?.update_Taxonomy_by_pk}}:e))},ec=(0,y.useMemo)(()=>r.uniqBy([...K,...A],e=>e.tag?.id),[K,A]),em=(0,y.useMemo)(()=>Q.filter(e=>!(0,I.f)(e)).filter(e=>!ec.some(t=>t.tag.id===e.id)).map(e=>({label:e.name,value:e.id,meta:e.meta})),[Q,ec]),ep=(0,y.useMemo)(()=>(0,$.R)(ec),[ec]);return(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",children:[!s&&(0,t.jsx)(j.f,{tags:ec,handleDeleteTagEntity:e=>{if(p)return er({variables:{tagEntityId:e}});T(C,A.filter((t,r)=>r!==e))},showAllTags:k,slaJobTimings:M,removeTagTarget:q}),(0,t.jsx)(w,{id:N?"tags-popover":void 0,open:N,anchorEl:O,onClose:()=>{H(),P(""),F(""),U(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsxs)(d.f,{sx:{maxHeight:"80vh",width:"280px",p:"10px",pt:"5px"},children:[(0,t.jsx)(o.f,{freeSolo:!0,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,clearOnEscape:!0,disabled:V,inputValue:G,options:[...em],onChange:(e,t)=>{if(null===t){H(),P(""),F("");return}"string"==typeof t||(H(),P(""),F("")),eo(e,t)},onInputChange:(e,t,r)=>{if("input"===r){F(t),J(t);return}H(),P(""),"clear"===r||"reset"===r?F(""):F(t)},filterOptions:es,getOptionLabel:ed,renderOption:(e,r)=>(0,t.jsx)(m.f,{...e,children:r.label}),renderInput:e=>(0,t.jsx)(g.f,{...e,variant:"standard",color:"secondary",label:"Search tag",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[Y||X||et?(0,t.jsx)(l.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}}),sx:{pl:"16px",pr:"16px"}}),V||ei||ea?(0,t.jsx)(f.f,{width:"100%",alignItems:"center",p:4,children:(0,t.jsx)(l.f,{color:"secondary"})}):(0,t.jsx)(c.f,{children:ep?.map(e=>{let r=(0,I.f)(e.tag);return(0,t.jsx)(v.f,{tagEntityId:e.id??e.tag.id,tagId:e.tag.id,name:e.tag.name,color:(0,$.f)(e.tag.meta),editable:!r,onDelete:s||r?void 0:()=>(e=>{if(p&&null!=e.id)return er({variables:{tagEntityId:e.id}});T(C,A.filter(t=>t.tag.id!==e.tag.id))})(e),onColorChange:el,onNameChange:eu},e.tag.id)})})]})}),(0,t.jsx)(u.f,{color:"black",onClick:e=>{e.stopPropagation(),H(),P(""),F(""),U(e.currentTarget)},children:(0,t.jsx)(a.default,{sx:{height:"16px",width:"16px"}})})]})}])},886292,e=>{var t=e.i(159080);let r=t.f`
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
`,i=t.f`
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
`,a=t.f`
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
`,o=t.f`
  mutation CreateTagsAgainstEntity($objects: [Taxonomy_Entity_insert_input!]!) {
    insert_Taxonomy_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,s=t.f`
  mutation DeleteTagAgainstEntity($tagEntityId: Int!) {
    delete_Taxonomy_Entity_by_pk(id: $tagEntityId) {
      id
      taxonomyId
    }
  }
`,d=t.f`
  mutation UpdateTagAgainstEntity($tagId: Int!, $object: Taxonomy_set_input!) {
    update_Taxonomy_by_pk(pk_columns: { id: $tagId }, _set: $object) {
      id
      name
      meta
    }
  }
`,l=t.f`
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
`;e.s(["K",0,i,"$",0,o,"V",0,l,"R",0,s,"I",0,u,"J",0,n,"r",0,r,"T",0,a,"M",0,d])},842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,r=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),i=e=>{let t=e?.address||e;return t&&r(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,r,"Q",0,i],964919);let n=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},a=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let r=n(t[0]),i=n(t[1]);return null==i||null==r||i<-90||i>90||r<-180||r>180?null:{lat:i,lng:r}},o=e=>a(e?.geo),s=async e=>{let t=i(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var r=await e.json();if(!r)return null;let i=r.coordinates?.lat??r.lat;return o({geo:{coordinates:[r.coordinates?.lng??r.lng,i]}})}catch{return null}},d=async(e,t)=>{let r=o(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[],a=o({geo:{coordinates:[i,n]}});return a||s(e)};e.s(["g",0,a,"Z",0,o,"t",0,d,"l",0,(e,t)=>{let r=o(e?.address||e);if(r)return r;let[i,n]=t?.coordinates??[];return o({geo:{coordinates:[i,n]}})},"a",0,n],842088)},284661,e=>{var t=e.i(159080);let r=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,r])},892904,e=>{var t=e.i(159080),r=e.i(987123);let i=t.f`
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
`,a=t.f`
  fragment JobAdminFields on Job {
    supplierId
    supplierUserId
  }
`,o=t.f`
  fragment JobSupplierFields on Job {
    supplierId
    supplierUserId
  }
`,s=t.f`
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
`,d=t.f`
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
  ${r.a}
  ${r.S}
`,e.s(["K",0,d,"O",0,a,"r",0,i,"Z",0,n,"q",0,o,"D",0,s])},115126,e=>{var t=e.i(391398),r=e.i(420),i=e.i(202246),n=e.i(738251),a=e.i(755548),o=e.i(551918),s=e.i(813843),d=e.i(566118),l=e.i(687722),u=e.i(145018),u=u,c=e.i(460997),m=e.i(75907),p=e.i(191788),f=e.i(889878),g=e.i(600961),y=e.i(396851),h=e.i(395724),b=e.i(631269),x=e.i(425577),v=e.i(432484),_=e.i(713149),j=e.i(46739);function $(e){return(0,j.f)("MuiStepContent",e)}let I=(0,_.f)("MuiStepContent",["root","last","transition"]),S=["children","className","TransitionComponent","transitionDuration","TransitionProps"],w=(0,y.f)("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.last&&t.last]}})(e=>{let{ownerState:t,theme:r}=e;return(0,m.f)({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:r.vars?`1px solid ${r.vars.palette.StepContent.border}`:`1px solid ${"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}`},t.last&&{borderLeft:"none"})}),A=(0,y.f)(b.f,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,t)=>t.transition})({}),C=p.forwardRef(function(e,r){let i=(0,h.f)({props:e,name:"MuiStepContent"}),{children:n,className:a,TransitionComponent:o=b.f,transitionDuration:s="auto",TransitionProps:d}=i,l=(0,c.f)(i,S),{orientation:u}=p.useContext(x.f),{active:y,last:_,expanded:j}=p.useContext(v.f),I=(0,m.f)({},i,{last:_}),C=(e=>{let{classes:t,last:r}=e;return(0,g.f)({root:["root",r&&"last"],transition:["transition"]},$,t)})(I),T=s;return"auto"!==s||o.muiSupportAuto||(T=void 0),(0,t.jsx)(w,(0,m.f)({className:(0,f.f)(C.root,a),ref:r,ownerState:I},l,{children:(0,t.jsx)(A,(0,m.f)({as:o,in:y||j,className:C.transition,ownerState:I,timeout:T,unmountOnExit:!0},d,{children:n}))}))});var T=e.i(280875),E=e.i(860387),E=E,k=e.i(115871),L=e.i(889231),M=e.i(280445),q=e.i(362537);let R=(0,M.f)(l.f)(e=>{let{theme:t}=e;return{[`&.${u.U.active}`]:{[`& .${u.U.line}`]:{borderColor:t.palette.primary.main}},[`&.${u.U.completed}`]:{[`& .${u.U.line}`]:{borderColor:t.palette.primary.main}},[`& .${u.U.line}`]:{borderColor:t.palette.primary.main,borderLeftWidth:4,borderRadius:1,marginLeft:"-2px",minHeight:"15px"}}}),O=(0,M.f)(C)(e=>{let{theme:t}=e;return{[`&.${I.root}`]:{paddingLeft:"38px",paddingRight:"5px",borderColor:t.palette.primary.main,borderLeftWidth:4,marginLeft:"10px"}}}),U=(0,M.f)(T.f)(()=>({[`&.${E.U.root}`]:{padding:0},[`& .${E.U.labelContainer}`]:{color:"inherit"},[`& .${E.U.label}`]:{display:"flex",alignItems:"center",color:"inherit"}}));e.s(["f",0,e=>{let{steps:l,summary:u,enableBorder:c=!1}=e;return(0,t.jsxs)(n.f,{children:[(0,t.jsx)(o.f,{orientation:"vertical",connector:(0,t.jsx)(R,{}),children:l.filter(e=>{let{active:t}=e;return void 0===t||t}).map((e,o)=>{let{id:u,label:m,info:p,date:f,content:g,actions:y}=e,h=!!f,b=g?.filter(e=>{let{active:t,data:r}=e;return!!t&&!!r})||[],x=y?.filter(e=>{let{active:t}=e;return!!t})||[],v=h?(0,t.jsx)(r.default,{color:"primary"}):(0,t.jsx)(i.default,{color:"primary"});return(0,t.jsxs)(d.f,{completed:h,expanded:!0,children:[(0,t.jsxs)(U,{icon:v,children:[(0,t.jsx)(k.f,{sx:{fontSize:"13px",fontWeight:600,ml:"20px"},children:m}),(0,t.jsx)(k.f,{sx:{fontSize:"10px",fontWeight:400,ml:"auto",mr:"5px",opacity:.6},children:f?(0,q.default)(f).format("D MMM YYYY HH:mm"):""})]}),(0,t.jsx)(O,{children:(0,t.jsxs)(n.f,{sx:c&&o!==l.length-1?{pb:"15px",borderBottom:"1px solid #E0E0E0"}:void 0,children:[(0,t.jsx)(n.f,{children:h||b?.length>0?b.map(e=>"function"==typeof e.data?e.data():(0,t.jsx)(k.f,{sx:{fontSize:"10px",pl:"4px"},children:e.data})):(0,t.jsx)(k.f,{sx:{fontSize:"10px"},children:p})}),x?.length>0&&(0,t.jsx)(s.f,{mt:.5,spacing:.5,children:x.map(e=>"button"!==e.type?null:(0,t.jsx)(n.f,{children:(0,t.jsx)(a.f,{color:e.context,variant:"contained",size:"small",onClick:e.handleClick,children:e.content})}))})]})})]},`${m}-${u}`)})}),u&&u?.length>0&&(0,t.jsx)(n.f,{mt:2,children:u.map(e=>{let{label:r,value:i,link:n}=e;return(0,t.jsxs)(k.f,{mt:.75,children:[r,":"," ",n?(0,t.jsx)(L.f,{color:"secondary",underline:"none",href:n,children:i}):i]},r)})})]})}],115126)},995197,e=>{var t=e.i(391398),r=e.i(280445),i=e.i(738251);let n={},a={},o=(0,r.f)(i.f)(()=>({"& .MuiTabs-root":{}}));e.s(["f",0,e=>{let{children:r,value:s,index:d,boxProps:l=n,boxSx:u=a,...c}=e;return(0,t.jsx)(o,{role:"tabpanel",hidden:s!==d,id:`simple-tabpanel-${d}`,"aria-labelledby":`simple-tab-${d}`,...c,children:s===d&&(0,t.jsx)(i.f,{...l,sx:{padding:"25px 0",...u},children:r})})}])},890854,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(203828),n=e.i(691567),a=e.i(920235),o=e.i(738251),s=e.i(813843),d=e.i(115871),l=e.i(529292),u=e.i(280445),c=e.i(449587),m=e.i(317536),p=e.i(974261),f=e.i(332789),g=e.i(340569),y=e.i(749231),h=e.i(845825),b=e.i(587369);let x=()=>{},v=e=>{let{currentPage:r=1,totalCount:i=0,pageSize:n=50,onPageChange:a=x}=e,o=(0,b.f)("(max-width:400px)"),s=(0,b.f)("(max-width:500px)");return(0,t.jsx)(_,{mb:2,page:r,count:Math.ceil(i/n),onChange:(e,t)=>a(t),variant:"outlined",shape:"rounded",size:o?"small":"medium",hidePrevButton:1===r,hideNextButton:r===Math.ceil(i/n),siblingCount:+!s,renderItem:e=>(0,t.jsx)(h.f,{slots:{previous:()=>"Previous",next:()=>"Next"},...e})})};v.propTypes={currentPage:n.default.number,totalCount:n.default.number,pageSize:n.default.number,onPageChange:n.default.func};let _=(0,u.f)(y.f)(e=>{let{hidePrevButton:t,hideNextButton:r,theme:i}=e;return{"&.MuiPagination-root":{alignSelf:"center",marginTop:"16px"},"& .MuiPaginationItem-root":{fontWeight:600,margin:0,borderRadius:0},"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"0 5px 5px 0"},"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child":{margin:0,borderRadius:"5px 0 0 5px"},"& button.Mui-selected":{color:i.palette.white.main,backgroundColor:i.palette.secondary.main,...r?{borderRadius:"0 5px 5px 0"}:{},...t?{borderRadius:"5px 0 0 5px"}:{}}}});var j=e.i(544005);let $={columns:[],history:!1,loading:!1,rows:[],noResultsMessage:"There are no results.",autoHeight:!0},I=(0,r.forwardRef)((e,n)=>{let a=(0,j.f)(e,$),{columns:o,history:l,initialSort:u,meta:y,refetch:h,paginationSize:b,containerHeight:x,containerMaxHeight:_,noResultsMessage:I,autoHeight:A,stateKey:C,onColumnOrderChange:T,onColumnWidthChange:E,slotProps:k}=a,L=(0,i.useRouter)(),{query:M={}}=L,{apiRef:q,displayColumns:R,persistColumnOrder:O,persistColumnWidth:U}=(0,f.f)({stateKey:C,columns:o});(0,g.f)(q,!a.disableColumnReorder);let D=(0,r.useMemo)(()=>({...k,baseTooltip:{disableTouchListener:!0,...k?.baseTooltip}}),[k]),P=(0,r.useCallback)((e,t,r)=>{T?.(e,t,r),O()},[T,O]),G=(0,r.useCallback)((e,t,r)=>{E?.(e,t,r),U(e)},[E,U]),[F,B]=(0,r.useState)(parseInt(M?.page,10)||1),[N,H]=(0,r.useState)(b||p.r.paginationSize),J=u;J||(J={item:"createdAt",order:"desc"});let[z,W]=(0,r.useState)({item:J.item,order:J.order}),K=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,{query:t={}}=L;if(e>1?t.page=e:delete t.page,!(Object.keys(t).length>0))return{};{let r=Object.keys(t).map(r=>"page"===r?`${r}=${e}`:`${r}=${t[r]}`).join("&");return`?${r}`}};return(0,r.useImperativeHandle)(n,()=>({currentPage:F,pageSize:N,sort:z,resetPagination(){let e;W({item:J.item,order:J.order}),B(1),e=K(),L.push(e),H(b||p.r.paginationSize)}})),(0,t.jsxs)(S,{containerHeight:x,containerMaxHeight:_,children:[(0,t.jsx)(w,{hideFooter:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:A,sortingMode:"server",onSortModelChange:e=>{var t;(t=e[0])&&t.field&&t.sort?W({item:o.find(e=>{let{field:r}=e;return r===t.field}).sortName||t.field||t.item||J.item,order:t.sort||t.order||J.order}):W({item:J.item,order:J.order}),h&&h()},pageSize:N,slots:{columnSortedAscendingIcon:()=>(0,t.jsx)(c.default,{}),columnSortedDescendingIcon:()=>(0,t.jsx)(m.default,{}),columnUnsortedIcon:()=>(0,t.jsxs)(s.f,{alignItems:"center",sx:{width:"33px"},children:[(0,t.jsx)(c.default,{sx:{marginBottom:"-15px"}}),(0,t.jsx)(m.default,{})]}),noResultsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:I})}),noRowsOverlay:()=>(0,t.jsx)(s.f,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,t.jsx)(d.f,{children:I})})},...a,apiRef:q,slotProps:D,columns:R,onColumnOrderChange:P,onColumnWidthChange:G}),y&&Math.ceil(y.aggregate.totalCount/N)>1&&(0,t.jsx)(v,{currentPage:F,totalCount:y.aggregate.totalCount,pageSize:N,onPageChange:e=>{let t=K(e);l&&L.push(t),B(e),!l&&h&&h()}})]})});I.propTypes={history:n.default.bool,initialSort:n.default.object,loading:n.default.bool,meta:n.default.object,refetch:n.default.func,paginationSize:n.default.number,noResultsMessage:n.default.string,columns:n.default.array,rows:n.default.array,autoHeight:n.default.bool};let S=(0,u.f)(o.f)(e=>{let{containerHeight:t,containerMaxHeight:r}=e;return{height:t,maxHeight:r,display:"flex",flexDirection:"column"}}),w=(0,u.f)(a.f)(e=>{let{theme:t,hideHeader:r,rows:i,loading:n,rowHeight:a,isPdf:o}=e;return{"--DataGrid-overlayHeight":"40px","&.MuiDataGrid-root":{color:t.palette.black.main,border:"none",...o&&{"@media print":{display:"block"}}},"& .MuiDataGrid-main":{...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-columnHeaders":{...r&&{display:"none"},"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}},"& .MuiDataGrid-columnHeader":{touchAction:"pan-y"},"& .MuiDataGrid-virtualScroller":{overscrollBehaviorX:"contain",...r&&{marginTop:"0 !important"},...o&&{"@media print":{overflow:"visible !important"}}},"& .MuiDataGrid-iconSeparator":{opacity:0},"& .MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle":{fontWeight:700},"& .MuiDataGrid-virtualScrollerContent":{...o&&{height:"initial !important",minHeight:"initial !important"}},"& .MuiDataGrid-virtualScrollerRenderZone":{...o&&{position:"relative"}},"& .MuiDataGrid-overlayWrapper":{"& .MuiCircularProgress-root":{color:t.palette.secondary.main}},"& .MuiDataGrid-row":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-row > .MuiDataGrid-cell":{...o&&{minHeight:`${a}cm !important`,maxHeight:`${a}cm !important`}},"& .MuiDataGrid-columnHeaderCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row > .MuiDataGrid-cellCheckbox":{"& .MuiButtonBase-root.MuiCheckbox-root > .MuiSvgIcon-root":{color:t.palette.secondary.main,'&[data-testid="CheckBoxOutlineBlankIcon"]':{color:"currentColor"}}},"& .MuiDataGrid-row.even":{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,l._)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}}});e.s(["f",0,I],890854)},98762,e=>{var t=e.i(191788),r=e.i(949125),i=e.i(974261),n=e.i(491230);e.s(["f",0,e=>{let{filters:a,newFilters:o,initialSort:s}=e,d=(0,t.useRef)(void 0),[l,u]=(0,t.useState)({}),[c,m]=(0,t.useState)({}),p=s||{item:"createdAt",order:"desc"},f={[d.current?.sort.item||p.item]:p.inneritem?{[p.inneritem]:d.current?.sort.order||p.order}:d.current?.sort.order||p.order};return(0,t.useEffect)(()=>{let e=!(0,r.default)(l,a),t=!(0,r.default)(c,o);if(e&&(u(a),d?.current?.resetPagination()),t&&(m(o),d?.current?.resetPagination()),d?.current?.setSort&&!(e||t)){let e=d.current?.sort?.item&&d.current?.sort?.order?{item:d.current?.sort?.item,order:d.current?.sort?.order}:f;d.current.setSort(e)}},[a,o]),{initialData:{...a,newFilters:o?.length>0?o:void 0,limit:d.current?.pageSize==="Infinity"?null:parseInt(d.current?.pageSize,10)||i.r.paginationSize,offset:(d.current?.currentPage-1||0)*(d.current?.pageSize||i.r.paginationSize),orderBy:(0,n.f)(d.current?.sort?.item?.replace(/ORDER/i,d.current?.sort.order))||f},initialSort:s,ref:d}}])},921451,e=>{e.s(["e",0,e=>parseInt(e).toLocaleString("en-GB",{minimumIntegerDigits:2,useGrouping:!1}),"U",0,(e,t)=>{let r=Math.pow(10,t);return Math.round(e*r)/r}])},536422,e=>{e.s(["f",0,e=>"string"==typeof e&&""!==e.trim()&&e.toLowerCase().replace("gb","").length>=9])},362407,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(776204),n=e.i(432171),a=e.i(990071),o=e.i(410355),s=e.i(74633),d=e.i(411331),l=e.i(755548),u=e.i(813843),c=e.i(4142),m=e.i(115871),p=e.i(497844);let f=e=>{let{addresses:r=[],entity:n,entityId:f,loading:g,onSelected:y,refetch:h,selectable:b=!1,selected:x,type:v,editable:_}=e,j=(0,d.f)(),[$]=(0,i.f)(a.g,{onCompleted:()=>{j.close(),h()}}),[I]=(0,i.f)(a.h,{onCompleted:()=>{j.close(),h()}}),S=async e=>{e.countryId||(e.countryId=1);let t=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:e})}).then(e=>e.json());e.id?e.meta={invoicingEmail:e.invoicingEmail,...e.meta}:e.meta={invoicingEmail:e.invoicingEmail},delete e.invoicingEmail;let r=t?.coordinates||null;if(r?.lat&&r?.lng&&(e.geo={type:"Point",coordinates:[r.lng,r.lat]}),e.id){let t=parseInt(e.id);await I({variables:{id:t,changes:e}})}else e.Address_Entities={data:{entity:n,entityId:f,status:"active"}},await $({variables:{objects:[e]}})},w=e=>{let i=r.find(t=>t.id===e.id),n=i?i.address:null,a=n&&{id:n.id,invoicingEmail:n.meta?.invoicingEmail,invoicingEntity:n.invoicingEntity,name:n.name,addressLine1:n.addressLine1,addressLine2:n.addressLine2,addressLine3:n.addressLine3,city:n.city,postCode:n.postCode,county:n.county,countryId:n.country?.id};j.show({content:(0,t.jsx)(o.f,{defaultValues:a,onSubmit:S,type:v}),title:n?"Edit address":"invoice"===v?"Add new invoice address":"Add new address",submit:!1})},A=[{field:"id",headerName:"ID",sortable:!1},{field:"select",headerName:"Select",sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsx)(c.f,{checked:Number(x)===r.select,onChange:e=>{y(r.select,e.target.checked)},size:"small",color:"secondary"})},maxWidth:65},{field:"address",headerName:"Address",flex:1,sortable:!1,renderCell:e=>{let{row:r}=e;return(0,t.jsxs)(u.f,{children:[(0,t.jsx)(m.f,{children:r.address?.name}),(0,t.jsx)(m.f,{children:r.address.country?.name||""}),(0,t.jsx)(m.f,{children:r.address.addressLine1}),(0,t.jsx)(m.f,{children:r.address.city})]})}},{field:"email",headerName:"Email",sortable:!1},{field:"actions",headerName:"Actions",sortable:!1,renderCell(e){let{row:r}=e;return(0,t.jsx)(p.f,{actions:[{icon:"edit",tooltip:"Edit",onClick:()=>{w(r)}}]})}}],C=r?.map(e=>{let t=e.address;return{id:e.id,select:t.id,address:t,email:t.meta?.invoicingEmail||"-",actions:""}})||[];return(0,t.jsxs)(t.Fragment,{children:[_&&(0,t.jsx)(u.f,{marginBottom:3,justifyContent:"flex-start",flexDirection:"row",children:(0,t.jsx)(l.f,{variant:"contained",color:"secondary",onClick:w,children:"Add new address"})}),(0,t.jsx)(s.s,{columns:A,rowHeight:100,columnVisibilityModel:{id:!1,select:b&&!!_,address:!0,email:"invoice"===v,action:!!_},loading:g,paginationSize:50,rows:C,autoHeight:!0})]})};var g=e.i(795617),y=e.i(594301),h=e.i(936641),b=e.i(652148);let x={fontSize:"20px",fontWeight:300,marginBottom:"15px",color:"gray"};e.s(["f",0,e=>{let{addressId:o,entity:s,entityId:d,id:u,onSubmit:c,type:p,showAccessInformation:v=!1,accessInformation:_}=e,[j,$]=(0,r.useState)(o||null),[I,S]=(0,r.useState)(!1),[w,A]=(0,r.useState)(!1),[C,T]=(0,r.useState)(!1),[E,k]=(0,r.useState)(_??""),L=(0,g.N)(p),M=(0,g.p)(s),{hasRole:q}=(0,y.f)(),R=q("customer"),{loading:O,data:{item:U}={item:null},refetch:D}=(0,n.t)(M,{variables:{id:d}}),[P]=(0,i.f)(a.H,{onCompleted:e=>{c&&c(e)}}),[G]=(0,i.f)(a.I,{onCompleted:e=>{c&&c(e)}}),F=[];if(U){U.addresses&&F.push(...U.addresses);let e=U.accounts?.find(e=>"primary"===e.linkType)?.account;e?.addresses&&e?.addresses.forEach(e=>{F.find(t=>t.address.id===e.address.id)||F.push(e)})}let B=async(e,t)=>{A(!1),S(!1),t?($(parseInt(e)),await N(parseInt(e))):($(null),S(!0))},N=async e=>{if(j!==e){let t=null,r=null;if(F.forEach(i=>{i.address.id===e&&(t=i.entity,r=i.id)}),r&&t===s){let e={id:parseInt(r),changes:{[p]:!0},whereOld:{entityId:{_eq:d},[p]:{_eq:!0}},changesOld:{[p]:!1}};await G({variables:e}),A(!0)}else{let t=[{addressId:parseInt(e),entity:s,entityId:d,status:"active",[p]:!0}];await P({variables:{objects:t,whereOld:{entityId:{_eq:d},[p]:{_eq:!0}},changesOld:{[p]:!1}}}),A(!0)}}else c&&c(null)},H=async()=>{T(!1),await c?.({access:E}),T(!0)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.f,{sx:x,children:L}),w&&(0,t.jsx)(h.f,{severity:"success",sx:{marginBottom:3},children:"Selection saved."}),I&&(0,t.jsx)(h.f,{severity:"info",sx:{marginBottom:3},children:"You should select at least one address."}),C&&(0,t.jsx)(h.f,{severity:"success",sx:{marginBottom:3},children:"Access information saved."}),(0,t.jsx)(f,{addresses:F,entity:s,entityId:d,id:u,loading:O,refetch:D,selectable:!0,selected:j,type:p,onSelected:B,editable:!R}),v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b.f,{fullWidth:!0,multiline:!0,rows:4,variant:"filled",color:"secondary",label:"Access information",value:E,onChange:e=>k(e.target.value),sx:{mt:2}}),(0,t.jsx)(l.f,{variant:"contained",color:"secondary",sx:{mt:2},onClick:H,children:"Save"})]})]})}],362407)},795617,e=>{var t=e.i(990071),r=e.i(842088);let i=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:r,type:i="inline",hideinvoicingEntity:n=!1}=e;if(!t)return"";let a="",o=r?.name?` (${r.name})`:"";return"stacked"===i?(a+=!n&&t.invoicingEntity?t.invoicingEntity+"\n":"",a+=t.addressLine1?t.addressLine1+o+"\n":o,a+=t.addressLine2?t.addressLine2+"\n":"",a+=t.addressLine3?t.addressLine3+"\n":"",a+=t.city?t.city+"\n":"",a+=t.county?t.county+"\n":""):(a+=!n&&t.invoicingEntity?t.invoicingEntity+" ":"",a+=t.addressLine1?t.addressLine1+o+" ":o,a+=t.addressLine2?t.addressLine2+" ":"",a+=t.addressLine3?t.addressLine3+" ":"",a+=t.city?t.city+" ":"",a+=t.county?t.county+" ":""),(a+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,i,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let r=null;switch(e){case"Account":r=t.A;break;case"Location":r=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!r)throw Error("Query cannot be null");return r},"u",0,(e,t)=>{let r=null;return"customer"===t?r=i(e.location,"invoice")||i(e.customer,"invoice")||i(e.location,"registered"):"supplier"===t&&(r=i(e.supplier,"invoice")||i(e.supplier,"registered")),r},"D",0,e=>{let t=(0,r.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let r=t.f`
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
`,i=t.f`
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
`,n=t.f`
  query GetAddresses($id: Int!) {
    item: Account_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Account" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
    }
  }
  ${r}
  ${i}
`,a=t.f`
  query GetAddresses($id: Int!) {
    item: Location_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
      accounts: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          addresses: Addresses(where: { entity: { _eq: "Account" } }) {
            ...AddressEntityFields
            address: Address {
              ...AddressFields
            }
          }
        }
      }
    }
  }
  ${r}
  ${i}
`,o=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${r}
`,s=t.f`
  mutation UpdateAddress($id: Int!, $changes: Address_set_input!) {
    update_Address_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,d=t.f`
  mutation AddUpdateAddress_Entity(
    $objects: [Address_Entity_insert_input!]!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    insert_Address_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,l=t.f`
  mutation UpdateAddress_Entities(
    $id: Int!
    $changes: Address_Entity_set_input!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    updateNew: update_Address_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["S",0,i,"a",0,r,"g",0,o,"H",0,d,"A",0,n,"R",0,a,"h",0,s,"I",0,l])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=r.currencySymbol??"£",i="number"==typeof e?e.toFixed(2):String(e);return`${t}${i}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let r=t.options.find(t=>t.value===e);return r?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let r=t.options.find(t=>t.value===e);return r?.label??e}).join(", ");default:return String(e)}}])},190871,179319,e=>{var t=e.i(203828),r=e.i(220303),i=e.i(93198),n=e.i(262887);let a=e=>{let{type:t,number:r,id:i}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:r,...i&&"job-report"!==t&&{id:String(i)}})}`};e.s(["$",0,a,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let r=Number(e.id);return{number:t,...Number.isSafeInteger(r)&&r>0&&{id:r}}}],179319);let o="This document could not be found",s="documentOpenedFromPortal",d=async e=>{let d=await e;if(!d)throw Error(o);if((0,i.Z)()&&"job-report"!==d.type){let e=await r.R.fetchQuery("/documents/:type/:number",{pathParams:{type:d.type,number:d.number},params:{id:d.id}});if(!("url"in e))throw Error(o);await (0,n.f)(e.url);return}let l=a(d);(e=>{try{return sessionStorage.setItem(s,e),!0}catch{return!1}})(l),await t.default.push(l)};e.s(["W",0,e=>{try{return sessionStorage.getItem(s)===a(e)}catch{return!1}},"k",0,d],190871)},659587,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M15.88 9.29 12 13.17 8.12 9.29a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0"}),"ExpandMoreRounded")},247297,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)([(0,a.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,a.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},202246,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonUnchecked")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}],625106,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,r)=>{var i=e.r(933571),n=e.r(729549),a=e.r(630357);function o(e){var t=-1,r=null==e?0:e.length;for(this.__data__=new i;++t<r;)this.add(e[t])}o.prototype.add=o.prototype.push=n,o.prototype.has=a,t.exports=o},278166,(e,t,r)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length,n=0,a=[];++r<i;){var o=e[r];t(o,r,e)&&(a[n++]=o)}return a}},576723,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=t.length,n=e.length;++r<i;)e[n+r]=t[r];return e}},297560,(e,t,r)=>{t.exports=function(e,t){for(var r=-1,i=null==e?0:e.length;++r<i;)if(t(e[r],r,e))return!0;return!1}},538916,(e,t,r)=>{var i=e.r(576723),n=e.r(448684);t.exports=function(e,t,r){var a=t(e);return n(e)?a:i(a,r(e))}},190835,(e,t,r)=>{var i=e.r(858056),n=e.r(432836);t.exports=function e(t,r,a,o,s){return t===r||(null!=t&&null!=r&&(n(t)||n(r))?i(t,r,a,o,e,s):t!=t&&r!=r)}},858056,(e,t,r)=>{var i=e.r(698620),n=e.r(536712),a=e.r(317744),o=e.r(804191),s=e.r(268829),d=e.r(448684),l=e.r(613272),u=e.r(75299),c="[object Arguments]",m="[object Array]",p="[object Object]",f=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,g,y,h){var b=d(e),x=d(t),v=b?m:s(e),_=x?m:s(t);v=v==c?p:v,_=_==c?p:_;var j=v==p,$=_==p,I=v==_;if(I&&l(e)){if(!l(t))return!1;b=!0,j=!1}if(I&&!j)return h||(h=new i),b||u(e)?n(e,t,r,g,y,h):a(e,t,v,r,g,y,h);if(!(1&r)){var S=j&&f.call(e,"__wrapped__"),w=$&&f.call(t,"__wrapped__");if(S||w){var A=S?e.value():e,C=w?t.value():t;return h||(h=new i),y(A,C,r,g,h)}}return!!I&&(h||(h=new i),o(e,t,r,g,y,h))}},758629,(e,t,r)=>{var i=e.r(734274),n=e.r(517059),a=Object.prototype.hasOwnProperty;t.exports=function(e){if(!i(e))return n(e);var t=[];for(var r in Object(e))a.call(e,r)&&"constructor"!=r&&t.push(r);return t}},33483,(e,t,r)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,r)=>{var i=e.r(650119),n=e.r(297560),a=e.r(33483);t.exports=function(e,t,r,o,s,d){var l=1&r,u=e.length,c=t.length;if(u!=c&&!(l&&c>u))return!1;var m=d.get(e),p=d.get(t);if(m&&p)return m==t&&p==e;var f=-1,g=!0,y=2&r?new i:void 0;for(d.set(e,t),d.set(t,e);++f<u;){var h=e[f],b=t[f];if(o)var x=l?o(b,h,f,t,e,d):o(h,b,f,e,t,d);if(void 0!==x){if(x)continue;g=!1;break}if(y){if(!n(t,function(e,t){if(!a(y,t)&&(h===e||s(h,e,r,o,d)))return y.push(t)})){g=!1;break}}else if(!(h===b||s(h,b,r,o,d))){g=!1;break}}return d.delete(e),d.delete(t),g}},317744,(e,t,r)=>{var i=e.r(889239),n=e.r(84742),a=e.r(198373),o=e.r(536712),s=e.r(692152),d=e.r(231853),l=i?i.prototype:void 0,u=l?l.valueOf:void 0;t.exports=function(e,t,r,i,l,c,m){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!c(new n(e),new n(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var p=s;case"[object Set]":var f=1&i;if(p||(p=d),e.size!=t.size&&!f)break;var g=m.get(e);if(g)return g==t;i|=2,m.set(e,t);var y=o(p(e),p(t),i,l,c,m);return m.delete(e),y;case"[object Symbol]":if(u)return u.call(e)==u.call(t)}return!1}},804191,(e,t,r)=>{var i=e.r(577256),n=Object.prototype.hasOwnProperty;t.exports=function(e,t,r,a,o,s){var d=1&r,l=i(e),u=l.length;if(u!=i(t).length&&!d)return!1;for(var c=u;c--;){var m=l[c];if(!(d?m in t:n.call(t,m)))return!1}var p=s.get(e),f=s.get(t);if(p&&f)return p==t&&f==e;var g=!0;s.set(e,t),s.set(t,e);for(var y=d;++c<u;){var h=e[m=l[c]],b=t[m];if(a)var x=d?a(b,h,m,t,e,s):a(h,b,m,e,t,s);if(!(void 0===x?h===b||o(h,b,r,a,s):x)){g=!1;break}y||(y="constructor"==m)}if(g&&!y){var v=e.constructor,_=t.constructor;v!=_&&"constructor"in e&&"constructor"in t&&!("function"==typeof v&&v instanceof v&&"function"==typeof _&&_ instanceof _)&&(g=!1)}return s.delete(e),s.delete(t),g}},577256,(e,t,r)=>{var i=e.r(538916),n=e.r(40811),a=e.r(622335);t.exports=function(e){return i(e,a,n)}},40811,(e,t,r)=>{var i=e.r(856408),n=e.r(1107),a=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;t.exports=o?function(e){return null==e?[]:i(o(e=Object(e)),function(t){return a.call(e,t)})}:n},268829,(e,t,r)=>{var i=e.r(625106),n=e.r(696138),a=e.r(441298),o=e.r(340682),s=e.r(278166),d=e.r(912904),l=e.r(742186),u="[object Map]",c="[object Promise]",m="[object Set]",p="[object WeakMap]",f="[object DataView]",g=l(i),y=l(n),h=l(a),b=l(o),x=l(s),v=d;(i&&v(new i(new ArrayBuffer(1)))!=f||n&&v(new n)!=u||a&&v(a.resolve())!=c||o&&v(new o)!=m||s&&v(new s)!=p)&&(v=function(e){var t=d(e),r="[object Object]"==t?e.constructor:void 0,i=r?l(r):"";if(i)switch(i){case g:return f;case y:return u;case h:return c;case b:return m;case x:return p}return t}),t.exports=v},692152,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e,i){r[++t]=[i,e]}),r}},517059,(e,t,r)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,r)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,r)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,r)=>{t.exports=function(e){var t=-1,r=Array(e.size);return e.forEach(function(e){r[++t]=e}),r}},949125,(e,t,r)=>{var i=e.r(190835);t.exports=function(e,t){return i(e,t)}},622335,(e,t,r)=>{var i=e.r(419188),n=e.r(758629),a=e.r(379858);t.exports=function(e){return a(e)?i(e):n(e)}},1107,(e,t,r)=>{t.exports=function(){return[]}}]);