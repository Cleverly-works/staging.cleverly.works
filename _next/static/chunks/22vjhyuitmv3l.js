(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,218659,e=>{var t=e.i(391398),i=e.i(280445),n=e.i(115871),a=e.i(813843),o=e.i(755548),s=e.i(587369);let r=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:d={},imageSx:u={},title:l,titleSx:c={},subtitleFirstLine:m,subtitleFirstLineSx:p={},subtitleSecondLine:g,subtitleSecondLineSx:f={},buttonText:y,onAction:_}=e,b=(0,s.f)("(max-width: 400px)");return(0,t.jsxs)(a.f,{sx:{...d,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(r,{src:i,sx:{...u,width:b?"250px":"300px"}}),(0,t.jsx)(n.f,{typography:"h5",sx:{...c},children:l}),(0,t.jsxs)(a.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(n.f,{sx:{...p},children:m}),(0,t.jsx)(n.f,{sx:{...f},children:g})]}),y&&_&&(0,t.jsx)(o.f,{variant:"contained",color:"secondary",onClick:_,children:y})]})}])},526374,e=>{var t=e.i(391398),i=e.i(443103),n=e.i(776204),a=e.i(432171),o=e.i(247297),s=e.i(515523),r=e.i(987171),d=e.i(738251),u=e.i(76381),l=e.i(773831),c=e.i(388866),m=e.i(901004),p=e.i(522507),g=e.i(813843),f=e.i(652148),y=e.i(191788),_=e.i(514707),b=e.i(594301),h=e.i(21557),$=e.i(190844),I=e.i(886292),x=e.i(552987),T=e.i(731349),j=e.i(330774);let q=(0,r.t)(),A=(0,_.f)(p.U)({"& .MuiPaper-root":{borderRadius:"12px"}});e.s(["f",0,e=>{let{hideTagsList:r=!1,entityId:p,entity:_,values:v=[],name:U="tags",setValue:S=()=>{},refetchQueries:w=[],showAllTags:k=!1,preloadTags:E=!1,slaJobTimings:L=null,removeTagTarget:C}=e,{user:R}=(0,b.f)(),[F,J]=(0,y.useState)(null),[M,D]=(0,y.useState)(""),[G,O]=(0,y.useState)(""),P=(0,y.useRef)(null),N=!!F,K=(0,y.useCallback)(()=>{null!==P.current&&(clearTimeout(P.current),P.current=null)},[]),V=(0,y.useCallback)(e=>{K(),P.current=setTimeout(()=>{P.current=null,D(e)},500)},[K]);(0,y.useEffect)(()=>()=>K(),[K]);let B=(0,h.f)(),Q=e=>{B.show({content:`Error: ${e.message}`,severity:"error"})},{data:{tags:z}={tags:[]},loading:W}=(0,a.t)(I.J,{skip:!p||!N&&!E,variables:{entityId:p,entity:_},onCompleted:e=>{let{tags:t}=e;S(U,t)}}),{data:{tags:H}={tags:[]},loading:Z}=(0,a.t)(I.r,{skip:!F,variables:{entityId:p??-1,entity:_,q:""!==M?`%${M}%`:null}}),[X,{loading:Y}]=(0,n.f)(I.K,{refetchQueries:["GetEntityTags"],onError:Q}),[ee,{loading:et}]=(0,n.f)(I.$,{refetchQueries:["GetEntityTags","GetTagsForEntity",...w],onError:Q}),[ei,{loading:en}]=(0,n.f)(I.R,{refetchQueries:["GetEntityTags","GetTagsForEntity",...w],onError:Q}),[ea,{loading:eo}]=(0,n.f)(I.M,{refetchQueries:["GetEntityTags","GetTagsForEntity",...w],onError:Q}),es=async(e,t)=>{if("string"==typeof t)return;let n=new Set(i.uniqBy([...z,...v],e=>e.tag?.id).map(e=>e.tag.id));if(t&&"inputValue"in t&&p)ee({variables:{objects:[{entity:_,entityId:p,Taxonomy:{data:{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:R.adminId}}}]}});else if(t&&"value"in t&&p){if(n.has(Number(t.value)))return;ee({variables:{objects:[{entity:_,entityId:p,taxonomyId:t.value}]}})}else if(t&&"inputValue"in t){let{data:e}=await X({variables:{objects:[{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:R.adminId}]}});if(!e?.insert_Taxonomy?.returning[0])return;S(U,i.uniqBy([...v,{id:null,tag:{id:e.insert_Taxonomy.returning[0].id,name:e.insert_Taxonomy.returning[0].name,meta:e.insert_Taxonomy.returning[0].meta}}],e=>e.tag.id))}else t&&"value"in t&&t.value&&"label"in t&&t.label&&"meta"in t&&t.meta&&S(U,i.uniqBy([...v,{id:null,tag:{id:Number(t.value),name:t.label,meta:t.meta}}],e=>e.tag.id))},er=(0,y.useCallback)((e,t)=>{let i=q(e,t),{inputValue:n}=t,a=e.some(e=>"label"in e&&n===e.label);return""===n||a||i.push({inputValue:n,label:`Add "${n}"`,value:n}),i},[]),ed=(0,y.useCallback)(e=>"string"==typeof e?e:e.inputValue?e.inputValue:e.label,[]),eu=async e=>{let{tagId:t,color:i}=e,{data:n}=await ea({variables:{tagId:t,object:{meta:{color:i}}}});n?.update_Taxonomy_by_pk&&S(U,v.map(e=>e.tag.id===t?{...e,tag:{...n?.update_Taxonomy_by_pk}}:e))},el=async e=>{let{tagId:t,name:i}=e,{data:n}=await ea({variables:{tagId:t,object:{name:i}}});n?.update_Taxonomy_by_pk&&S(i,v.map(e=>e.tag.id===t?{...e,tag:{...n?.update_Taxonomy_by_pk}}:e))},ec=(0,y.useMemo)(()=>i.uniqBy([...z,...v],e=>e.tag?.id),[z,v]),em=(0,y.useMemo)(()=>H.filter(e=>!(0,j.f)(e)).filter(e=>!ec.some(t=>t.tag.id===e.id)).map(e=>({label:e.name,value:e.id,meta:e.meta})),[H,ec]),ep=(0,y.useMemo)(()=>(0,T.R)(ec),[ec]);return(0,t.jsxs)(g.f,{direction:"row",alignItems:"center",children:[!r&&(0,t.jsx)(x.f,{tags:ec,handleDeleteTagEntity:e=>{if(p)return ei({variables:{tagEntityId:e}});S(U,v.filter((t,i)=>i!==e))},showAllTags:k,slaJobTimings:L,removeTagTarget:C}),(0,t.jsx)(A,{id:N?"tags-popover":void 0,open:N,anchorEl:F,onClose:()=>{K(),D(""),O(""),J(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsxs)(d.f,{sx:{maxHeight:"80vh",width:"280px",p:"10px",pt:"5px"},children:[(0,t.jsx)(s.f,{freeSolo:!0,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,clearOnEscape:!0,disabled:W,inputValue:G,options:[...em],onChange:(e,t)=>{if(null===t){K(),D(""),O("");return}"string"==typeof t||(K(),D(""),O("")),es(e,t)},onInputChange:(e,t,i)=>{if("input"===i){O(t),V(t);return}K(),D(""),"clear"===i||"reset"===i?O(""):O(t)},filterOptions:er,getOptionLabel:ed,renderOption:(e,i)=>(0,t.jsx)(m.f,{...e,children:i.label}),renderInput:e=>(0,t.jsx)(f.f,{...e,variant:"standard",color:"secondary",label:"Search tag",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[Z||Y||et?(0,t.jsx)(u.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}}),sx:{pl:"16px",pr:"16px"}}),W||en||eo?(0,t.jsx)(g.f,{width:"100%",alignItems:"center",p:4,children:(0,t.jsx)(u.f,{color:"secondary"})}):(0,t.jsx)(c.f,{children:ep?.map(e=>{let i=(0,j.f)(e.tag);return(0,t.jsx)($.f,{tagEntityId:e.id??e.tag.id,tagId:e.tag.id,name:e.tag.name,color:(0,T.f)(e.tag.meta),editable:!i,onDelete:r||i?void 0:()=>(e=>{if(p&&null!=e.id)return ei({variables:{tagEntityId:e.id}});S(U,v.filter(t=>t.tag.id!==e.tag.id))})(e),onColorChange:eu,onNameChange:el},e.tag.id)})})]})}),(0,t.jsx)(l.f,{color:"black",onClick:e=>{e.stopPropagation(),K(),D(""),O(""),J(e.currentTarget)},children:(0,t.jsx)(o.default,{sx:{height:"16px",width:"16px"}})})]})}])},886292,e=>{var t=e.i(159080);let i=t.f`
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
`,n=t.f`
  mutation CreateTag($objects: [Taxonomy_insert_input!]!) {
    insert_Taxonomy(objects: $objects) {
      returning {
        id
        name
        meta
      }
    }
  }
`,a=t.f`
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
`,o=t.f`
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
`,s=t.f`
  mutation CreateTagsAgainstEntity($objects: [Taxonomy_Entity_insert_input!]!) {
    insert_Taxonomy_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,r=t.f`
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
`,u=t.f`
  mutation CreateTagsAgainstEntityWithFollowing($objects: [Taxonomy_Entity_insert_input!]!) {
    insert_Taxonomy_Entity(objects: $objects) {
      returning {
        id
        taxonomyId
      }
    }
  }
`,l=t.f`
  mutation DeleteTagAgainstEntityWithFollowing($where: Taxonomy_Entity_bool_exp!) {
    delete_Taxonomy_Entity(where: $where) {
      returning {
        id
        taxonomyId
      }
    }
  }
`;e.s(["K",0,n,"$",0,s,"V",0,u,"R",0,r,"I",0,l,"J",0,a,"r",0,i,"T",0,o,"M",0,d])},360364,e=>{var t=e.i(391398),i=e.i(776204),n=e.i(738251),a=e.i(813843),o=e.i(886292),s=e.i(552987),r=e.i(526374),d=e.i(879572);e.s(["f",0,e=>{let{row:u,refetchQueries:l,entity:c,removeTagTarget:m}=e,[p]=(0,i.f)(o.R,{refetchQueries:["GetTaskTags",...l]}),g=async e=>{let{data:t}=await p({variables:{tagEntityId:e}});if(!t?.delete_Taxonomy_Entity_by_pk)throw Error("Tag could not be removed")},f={onSiteTimingEnd:u.onSiteTimingEnd,jobReportTimingEnd:u.jobReportTimingEnd,quoteReturnedTimingEnd:u.quoteReturnedTimingEnd},y=null!=u.parentJobNumber&&""!==u.parentJobNumber?{parentJobType:u.parentJobType??null,parentJobNumber:u.parentJobNumber}:null,_=null!=m?m:"Task"===c?"task":"Workflow"===c?"workflow":"Asset"===c?"asset":(0,d.p)(u.type);return(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:{minWidth:0,width:"100%",columnGap:2},children:[(0,t.jsx)(n.f,{sx:{flex:"1 1 0%",minWidth:0,overflow:"hidden",pr:.5,direction:"ltr"},children:(0,t.jsx)(s.f,{expandToContainer:!0,tags:u.tags||[],handleDeleteTagEntity:g,slaJobTimings:f,ppmLinkRowFallback:y,removeTagTarget:_,listSx:{whiteSpace:"nowrap"}})}),(0,t.jsx)(n.f,{sx:{flexShrink:0,display:"flex",alignItems:"center",direction:"ltr"},children:(0,t.jsx)(r.f,{hideTagsList:!0,entityId:u.id,refetchQueries:l,entity:c})})]})}])},655477,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(422411),a=e.i(877341),o=e.i(515523),s=e.i(76381),r=e.i(652148),d=e.i(800884),u=e.i(886292),l=e.i(175872);let c=[];e.s(["f",0,e=>{let{control:m}=e,[p,g]=(0,i.useState)(""),[f,{loading:y,data:{items:_}={items:[]}}]=(0,a.f)(u.T,{variables:{q:""!==p?`%${p}%`:null}}),b=(0,l.f)(e=>g(e),500);return(0,t.jsx)(n.e,{control:m,name:"tags",render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(o.f,{multiple:!0,limitTags:6,color:"secondary",onOpen:()=>f(),options:_,value:i||c,onChange:(e,t)=>{n(t)},onInputChange:(e,t)=>{b(t)},getOptionLabel:e=>e.label,renderTags:(e,i)=>e.map((e,n)=>(0,t.jsx)(d.f,{size:"small",label:e.label,...i({index:n})})),isOptionEqualToValue:(e,t)=>e.value===t.value,renderInput:e=>(0,t.jsx)(r.f,{...e,variant:"standard",color:"secondary",label:"Select tags",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[y?(0,t.jsx)(s.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})}})}])},284661,e=>{var t=e.i(159080);let i=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,i])},239964,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(691567),a=e.i(773831),o=e.i(33670),s=e.i(901004),r=e.i(509790),d=e.i(692113),u=e.i(137995),l=e.i(817581),c=e.i(420),m=e.i(870307),p=e.i(407329),g=e.i(390536),f=e.i(978319),y=e.i(376733),_=e.i(13558),b=e.i(562673),h=e.i(339909),$=e.i(89029),I=e.i(129503),x=e.i(213419),T=e.i(12028),j=e.i(813843),q=e.i(115871);let A={add:(0,t.jsx)(l.default,{}),archive:(0,t.jsx)(d.default,{}),avatar:(0,t.jsx)(T.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(f.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(g.default,{}),info:(0,t.jsx)(_.default,{}),edit:(0,t.jsx)(y.default,{}),location:(0,t.jsx)($.default,{}),unarchive:(0,t.jsx)(u.default,{}),uploadFile:(0,t.jsx)(b.default,{}),receipt:(0,t.jsx)(h.default,{}),visibility:(0,t.jsx)(x.default,{})},v={default:(0,t.jsx)(r.default,{}),defaultHoriz:(0,t.jsx)(I.default,{}),description:(0,t.jsx)(p.default,{})},U=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],S=e=>{let{actionsData:n=U,icon:r="default",row:d,disabled:u=!1}=e,[l,c]=(0,i.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(a.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:u,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:v[r]}),(0,t.jsx)(o.f,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:!!l,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:n(d).map((e,i)=>(0,t.jsx)(s.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(j.f,{direction:"row",alignItems:"center",spacing:2,children:[A?.[e.icon]||null,(0,t.jsx)(q.f,{children:e.tooltip})]})},i))})]})};S.propTypes={actionsData:n.default.func,icon:n.default.oneOf(["default","description"]),row:n.default.any.isRequired,disabled:n.default.bool},e.s(["f",0,S])},892904,e=>{var t=e.i(159080),i=e.i(987123);let n=t.f`
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
`,a=t.f`
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
`,s=t.f`
  fragment JobSupplierFields on Job {
    supplierId
    supplierUserId
  }
`,r=t.f`
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
  ${i.a}
  ${i.S}
`,e.s(["K",0,d,"O",0,o,"r",0,n,"Z",0,a,"q",0,s,"D",0,r])},39059,e=>{var t=e.i(159080);let i=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,n=t.f`
  mutation UpdateUser(
    $id: Int!
    $accountUserId: Int!
    $accountUserChanges: Account_User_set_input
    $accountUserModules: jsonb = {}
    $changes: User_set_input
    $updateAccountUser: Boolean!
  ) {
    update_Account_User_by_pk(
      pk_columns: { id: $accountUserId }
      _set: $accountUserChanges
      _append: { modules: $accountUserModules }
    ) @include(if: $updateAccountUser) {
      id
    }
    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,a=t.f`
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
`,o=t.f`
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
`,s=t.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,r=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,d=t.f`
  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {
    createGoogleToken(code: $code, id: $id, type: $type) {
      success
      tokens
      error
    }
  }
`,u=t.f`
  mutation GenerateMSURL($type: String!, $id: Int!) {
    genenrateMSURL(id: $id, type: $type) {
      url
    }
  }
`,l=t.f`
  mutation signoutMS($id: Int!, $type: String!, $email: String!) {
    signoutMS(id: $id, type: $type, email: $email) {
      error
      msId
      success
    }
  }
`,c=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,m=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,p=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,g=t.f`
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
`,f=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,y=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,_=t.f`
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
      accountLocations: Account_Locations {
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
`,b=t.f`
  mutation InsertUserAccountLocations(
    $accountUserId: Int!
    $objects: [User_Account_Location_insert_input!]!
  ) {
    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_User_Account_Location(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`,h=t.f`
  mutation ReplaceAccountRestrictedLocations(
    $accountUserId: Int!
    $objects: [Location_Account_User_insert_input!]!
  ) {
    delete_Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_Location_Account_User(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`;e.s(["e",0,s,"d",0,u,"u",0,_,"q",0,c,"_",0,p,"x",0,o,"k",0,a,"f",0,m,"U",0,b,"I",0,i,"s",0,h,"c",0,d,"S",0,l,"o",0,f,"l",0,g,"V",0,n,"J",0,y,"W",0,r])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=i.currencySymbol??"£",n="number"==typeof e?e.toFixed(2):String(e);return`${t}${n}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let i=t.options.find(t=>t.value===e);return i?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let i=t.options.find(t=>t.value===e);return i?.label??e}).join(", ");default:return String(e)}}])},190871,179319,e=>{var t=e.i(203828),i=e.i(220303),n=e.i(93198),a=e.i(262887);let o=e=>{let{type:t,number:i,id:n}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:i,id:String(n)})}`};e.s(["$",0,o,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let i=Number(e.id);return{number:t,...Number.isSafeInteger(i)&&i>0&&{id:i}}}],179319);let s="This document could not be found",r="documentOpenedFromPortal",d=async e=>{let d=await e;if(!d)throw Error(s);if((0,n.Z)()&&"job-report"!==d.type){let e=await i.R.fetchQuery("/documents/:type/:number",{pathParams:{type:d.type,number:d.number},params:{id:d.id}});if(!("url"in e))throw Error(s);await (0,a.f)(e.url);return}let u=o(d);(e=>{try{return sessionStorage.setItem(r,e),!0}catch{return!1}})(u),await t.default.push(u)};e.s(["W",0,e=>{try{return sessionStorage.getItem(r)===o(e)}catch{return!1}},"k",0,d],190871)},247297,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e.r(421506)),o=e.r(391398);i.default=(0,a.default)([(0,o.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,o.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},870307,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e.r(421506)),o=e.r(391398);i.default=(0,a.default)([(0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,o.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}])})();