(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,218659,e=>{var t=e.i(391398),n=e.i(280445),i=e.i(115871),a=e.i(813843),o=e.i(755548),r=e.i(587369);let s=(0,n.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:n,sx:u={},imageSx:d={},title:l,titleSx:c={},subtitleFirstLine:m,subtitleFirstLineSx:p={},subtitleSecondLine:f,subtitleSecondLineSx:g={},buttonText:y,onAction:_}=e,b=(0,r.f)("(max-width: 400px)");return(0,t.jsxs)(a.f,{sx:{...u,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(s,{src:n,sx:{...d,width:b?"250px":"300px"}}),(0,t.jsx)(i.f,{typography:"h5",sx:{...c},children:l}),(0,t.jsxs)(a.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(i.f,{sx:{...p},children:m}),(0,t.jsx)(i.f,{sx:{...g},children:f})]}),y&&_&&(0,t.jsx)(o.f,{variant:"contained",color:"secondary",onClick:_,children:y})]})}])},526374,e=>{var t=e.i(391398),n=e.i(443103),i=e.i(776204),a=e.i(432171),o=e.i(247297),r=e.i(515523),s=e.i(987171),u=e.i(738251),d=e.i(76381),l=e.i(773831),c=e.i(388866),m=e.i(901004),p=e.i(522507),f=e.i(813843),g=e.i(652148),y=e.i(191788),_=e.i(514707),b=e.i(594301),h=e.i(21557),x=e.i(190844),I=e.i(886292),$=e.i(552987),T=e.i(731349),j=e.i(330774);let v=(0,s.t)(),q=(0,_.f)(p.U)({"& .MuiPaper-root":{borderRadius:"12px"}});e.s(["f",0,e=>{let{hideTagsList:s=!1,entityId:p,entity:_,values:A=[],name:U="tags",setValue:w=()=>{},refetchQueries:S=[],showAllTags:k=!1,preloadTags:E=!1,slaJobTimings:C=null,removeTagTarget:L}=e,{user:R}=(0,b.f)(),[F,J]=(0,y.useState)(null),[M,D]=(0,y.useState)(""),[P,O]=(0,y.useState)(""),G=(0,y.useRef)(null),N=!!F,K=(0,y.useCallback)(()=>{null!==G.current&&(clearTimeout(G.current),G.current=null)},[]),V=(0,y.useCallback)(e=>{K(),G.current=setTimeout(()=>{G.current=null,D(e)},500)},[K]);(0,y.useEffect)(()=>()=>K(),[K]);let B=(0,h.f)(),Q=e=>{B.show({content:`Error: ${e.message}`,severity:"error"})},{data:{tags:z}={tags:[]},loading:W}=(0,a.t)(I.J,{skip:!p||!N&&!E,variables:{entityId:p,entity:_},onCompleted:e=>{let{tags:t}=e;w(U,t)}}),{data:{tags:H}={tags:[]},loading:Z}=(0,a.t)(I.r,{skip:!F,variables:{entityId:p??-1,entity:_,q:""!==M?`%${M}%`:null}}),[X,{loading:Y}]=(0,i.f)(I.K,{refetchQueries:["GetEntityTags"],onError:Q}),[ee,{loading:et}]=(0,i.f)(I.$,{refetchQueries:["GetEntityTags","GetTagsForEntity",...S],onError:Q}),[en,{loading:ei}]=(0,i.f)(I.R,{refetchQueries:["GetEntityTags","GetTagsForEntity",...S],onError:Q}),[ea,{loading:eo}]=(0,i.f)(I.M,{refetchQueries:["GetEntityTags","GetTagsForEntity",...S],onError:Q}),er=async(e,t)=>{if("string"==typeof t)return;let i=new Set(n.uniqBy([...z,...A],e=>e.tag?.id).map(e=>e.tag.id));if(t&&"inputValue"in t&&p)ee({variables:{objects:[{entity:_,entityId:p,Taxonomy:{data:{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:R.adminId}}}]}});else if(t&&"value"in t&&p){if(i.has(Number(t.value)))return;ee({variables:{objects:[{entity:_,entityId:p,taxonomyId:t.value}]}})}else if(t&&"inputValue"in t){let{data:e}=await X({variables:{objects:[{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:R.adminId}]}});if(!e?.insert_Taxonomy?.returning[0])return;w(U,n.uniqBy([...A,{id:null,tag:{id:e.insert_Taxonomy.returning[0].id,name:e.insert_Taxonomy.returning[0].name,meta:e.insert_Taxonomy.returning[0].meta}}],e=>e.tag.id))}else t&&"value"in t&&t.value&&"label"in t&&t.label&&"meta"in t&&t.meta&&w(U,n.uniqBy([...A,{id:null,tag:{id:Number(t.value),name:t.label,meta:t.meta}}],e=>e.tag.id))},es=(0,y.useCallback)((e,t)=>{let n=v(e,t),{inputValue:i}=t,a=e.some(e=>"label"in e&&i===e.label);return""===i||a||n.push({inputValue:i,label:`Add "${i}"`,value:i}),n},[]),eu=(0,y.useCallback)(e=>"string"==typeof e?e:e.inputValue?e.inputValue:e.label,[]),ed=async e=>{let{tagId:t,color:n}=e,{data:i}=await ea({variables:{tagId:t,object:{meta:{color:n}}}});i?.update_Taxonomy_by_pk&&w(U,A.map(e=>e.tag.id===t?{...e,tag:{...i?.update_Taxonomy_by_pk}}:e))},el=async e=>{let{tagId:t,name:n}=e,{data:i}=await ea({variables:{tagId:t,object:{name:n}}});i?.update_Taxonomy_by_pk&&w(n,A.map(e=>e.tag.id===t?{...e,tag:{...i?.update_Taxonomy_by_pk}}:e))},ec=(0,y.useMemo)(()=>n.uniqBy([...z,...A],e=>e.tag?.id),[z,A]),em=(0,y.useMemo)(()=>H.filter(e=>!(0,j.f)(e)).filter(e=>!ec.some(t=>t.tag.id===e.id)).map(e=>({label:e.name,value:e.id,meta:e.meta})),[H,ec]),ep=(0,y.useMemo)(()=>(0,T.R)(ec),[ec]);return(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",children:[!s&&(0,t.jsx)($.f,{tags:ec,handleDeleteTagEntity:e=>{if(p)return en({variables:{tagEntityId:e}});w(U,A.filter((t,n)=>n!==e))},showAllTags:k,slaJobTimings:C,removeTagTarget:L}),(0,t.jsx)(q,{id:N?"tags-popover":void 0,open:N,anchorEl:F,onClose:()=>{K(),D(""),O(""),J(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsxs)(u.f,{sx:{maxHeight:"80vh",width:"280px",p:"10px",pt:"5px"},children:[(0,t.jsx)(r.f,{freeSolo:!0,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,clearOnEscape:!0,disabled:W,inputValue:P,options:[...em],onChange:(e,t)=>{if(null===t){K(),D(""),O("");return}"string"==typeof t||(K(),D(""),O("")),er(e,t)},onInputChange:(e,t,n)=>{if("input"===n){O(t),V(t);return}K(),D(""),"clear"===n||"reset"===n?O(""):O(t)},filterOptions:es,getOptionLabel:eu,renderOption:(e,n)=>(0,t.jsx)(m.f,{...e,children:n.label}),renderInput:e=>(0,t.jsx)(g.f,{...e,variant:"standard",color:"secondary",label:"Search tag",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[Z||Y||et?(0,t.jsx)(d.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}}),sx:{pl:"16px",pr:"16px"}}),W||ei||eo?(0,t.jsx)(f.f,{width:"100%",alignItems:"center",p:4,children:(0,t.jsx)(d.f,{color:"secondary"})}):(0,t.jsx)(c.f,{children:ep?.map(e=>{let n=(0,j.f)(e.tag);return(0,t.jsx)(x.f,{tagEntityId:e.id??e.tag.id,tagId:e.tag.id,name:e.tag.name,color:(0,T.f)(e.tag.meta),editable:!n,onDelete:s||n?void 0:()=>(e=>{if(p&&null!=e.id)return en({variables:{tagEntityId:e.id}});w(U,A.filter(t=>t.tag.id!==e.tag.id))})(e),onColorChange:ed,onNameChange:el},e.tag.id)})})]})}),(0,t.jsx)(l.f,{color:"black",onClick:e=>{e.stopPropagation(),K(),D(""),O(""),J(e.currentTarget)},children:(0,t.jsx)(o.default,{sx:{height:"16px",width:"16px"}})})]})}])},886292,e=>{var t=e.i(159080);let n=t.f`
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
`,r=t.f`
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
`,u=t.f`
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
`,l=t.f`
  mutation DeleteTagAgainstEntityWithFollowing($where: Taxonomy_Entity_bool_exp!) {
    delete_Taxonomy_Entity(where: $where) {
      returning {
        id
        taxonomyId
      }
    }
  }
`;e.s(["K",0,i,"$",0,r,"V",0,d,"R",0,s,"I",0,l,"J",0,a,"r",0,n,"T",0,o,"M",0,u])},360364,e=>{var t=e.i(391398),n=e.i(776204),i=e.i(738251),a=e.i(813843),o=e.i(886292),r=e.i(552987),s=e.i(526374),u=e.i(879572);e.s(["f",0,e=>{let{row:d,refetchQueries:l,entity:c,removeTagTarget:m}=e,[p]=(0,n.f)(o.R,{refetchQueries:["GetTaskTags",...l]}),f=async e=>{let{data:t}=await p({variables:{tagEntityId:e}});if(!t?.delete_Taxonomy_Entity_by_pk)throw Error("Tag could not be removed")},g={onSiteTimingEnd:d.onSiteTimingEnd,jobReportTimingEnd:d.jobReportTimingEnd,quoteReturnedTimingEnd:d.quoteReturnedTimingEnd},y=null!=d.parentJobNumber&&""!==d.parentJobNumber?{parentJobType:d.parentJobType??null,parentJobNumber:d.parentJobNumber}:null,_=null!=m?m:"Task"===c?"task":"Workflow"===c?"workflow":"Asset"===c?"asset":(0,u.p)(d.type);return(0,t.jsxs)(a.f,{direction:"row",alignItems:"center",sx:{minWidth:0,width:"100%",columnGap:2},children:[(0,t.jsx)(i.f,{sx:{flex:"1 1 0%",minWidth:0,overflow:"hidden",pr:.5,direction:"ltr"},children:(0,t.jsx)(r.f,{expandToContainer:!0,tags:d.tags||[],handleDeleteTagEntity:f,slaJobTimings:g,ppmLinkRowFallback:y,removeTagTarget:_,listSx:{whiteSpace:"nowrap"}})}),(0,t.jsx)(i.f,{sx:{flexShrink:0,display:"flex",alignItems:"center",direction:"ltr"},children:(0,t.jsx)(s.f,{hideTagsList:!0,entityId:d.id,refetchQueries:l,entity:c})})]})}])},655477,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(422411),a=e.i(877341),o=e.i(515523),r=e.i(76381),s=e.i(652148),u=e.i(800884),d=e.i(886292),l=e.i(175872);let c=[];e.s(["f",0,e=>{let{control:m}=e,[p,f]=(0,n.useState)(""),[g,{loading:y,data:{items:_}={items:[]}}]=(0,a.f)(d.T,{variables:{q:""!==p?`%${p}%`:null}}),b=(0,l.f)(e=>f(e),500);return(0,t.jsx)(i.e,{control:m,name:"tags",render:e=>{let{value:n,onChange:i}=e;return(0,t.jsx)(o.f,{multiple:!0,limitTags:6,color:"secondary",onOpen:()=>g(),options:_,value:n||c,onChange:(e,t)=>{i(t)},onInputChange:(e,t)=>{b(t)},getOptionLabel:e=>e.label,renderTags:(e,n)=>e.map((e,i)=>(0,t.jsx)(u.f,{size:"small",label:e.label,...n({index:i})})),isOptionEqualToValue:(e,t)=>e.value===t.value,renderInput:e=>(0,t.jsx)(s.f,{...e,variant:"standard",color:"secondary",label:"Select tags",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[y?(0,t.jsx)(r.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})}})}])},175872,e=>{var t=e.i(191788);e.s(["f",0,(e,n)=>{let i=(0,t.useRef)(null),a=(0,t.useRef)(e),o=(0,t.useRef)(n);return(0,t.useEffect)(()=>{a.current=e},[e]),(0,t.useEffect)(()=>{o.current=n,i.current&&(clearTimeout(i.current),i.current=null)},[n]),(0,t.useEffect)(()=>()=>{i.current&&clearTimeout(i.current)},[]),(0,t.useCallback)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{a.current(...t)},o.current)},[])}])},284661,e=>{var t=e.i(159080);let n=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,n])},239964,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(691567),a=e.i(773831),o=e.i(33670),r=e.i(901004),s=e.i(509790),u=e.i(692113),d=e.i(137995),l=e.i(817581),c=e.i(420),m=e.i(870307),p=e.i(407329),f=e.i(390536),g=e.i(978319),y=e.i(376733),_=e.i(13558),b=e.i(562673),h=e.i(339909),x=e.i(89029),I=e.i(129503),$=e.i(213419),T=e.i(12028),j=e.i(813843),v=e.i(115871);let q={add:(0,t.jsx)(l.default,{}),archive:(0,t.jsx)(u.default,{}),avatar:(0,t.jsx)(T.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(g.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(f.default,{}),info:(0,t.jsx)(_.default,{}),edit:(0,t.jsx)(y.default,{}),location:(0,t.jsx)(x.default,{}),unarchive:(0,t.jsx)(d.default,{}),uploadFile:(0,t.jsx)(b.default,{}),receipt:(0,t.jsx)(h.default,{}),visibility:(0,t.jsx)($.default,{})},A={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(I.default,{}),description:(0,t.jsx)(p.default,{})},U=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],w=e=>{let{actionsData:i=U,icon:s="default",row:u,disabled:d=!1}=e,[l,c]=(0,n.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(a.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:d,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:A[s]}),(0,t.jsx)(o.f,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:!!l,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:i(u).map((e,n)=>(0,t.jsx)(r.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(j.f,{direction:"row",alignItems:"center",spacing:2,children:[q?.[e.icon]||null,(0,t.jsx)(v.f,{children:e.tooltip})]})},n))})]})};w.propTypes={actionsData:i.default.func,icon:i.default.oneOf(["default","description"]),row:i.default.any.isRequired,disabled:i.default.bool},e.s(["f",0,w])},892904,e=>{var t=e.i(159080),n=e.i(987123);let i=t.f`
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
`,r=t.f`
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
`,u=t.f`
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
  ${n.a}
  ${n.S}
`,e.s(["K",0,u,"O",0,o,"r",0,i,"Z",0,a,"q",0,r,"D",0,s])},39059,e=>{var t=e.i(159080);let n=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,i=t.f`
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
`,r=t.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,s=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,u=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,d=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,l=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,c=t.f`
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
`,m=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,p=t.f`
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
`,f=t.f`
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
`,g=t.f`
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
`;e.s(["e",0,r,"u",0,p,"q",0,u,"_",0,l,"x",0,o,"k",0,a,"f",0,d,"U",0,f,"I",0,n,"s",0,g,"l",0,c,"V",0,i,"J",0,m,"W",0,s])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=n.currencySymbol??"£",i="number"==typeof e?e.toFixed(2):String(e);return`${t}${i}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let n=t.options.find(t=>t.value===e);return n?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let n=t.options.find(t=>t.value===e);return n?.label??e}).join(", ");default:return String(e)}}])},190871,179319,e=>{var t=e.i(203828),n=e.i(220303),i=e.i(93198),a=e.i(262887);let o=e=>{let{type:t,number:n,id:i}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:n,...i&&"job-report"!==t&&{id:String(i)}})}`};e.s(["$",0,o,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let n=Number(e.id);return{number:t,...Number.isSafeInteger(n)&&n>0&&{id:n}}}],179319);let r="This document could not be found",s="documentOpenedFromPortal",u=async e=>{let u=await e;if(!u)throw Error(r);if((0,i.Z)()&&"job-report"!==u.type){let e=await n.R.fetchQuery("/documents/:type/:number",{pathParams:{type:u.type,number:u.number},params:{id:u.id}});if(!("url"in e))throw Error(r);await (0,a.f)(e.url);return}let d=o(u);(e=>{try{return sessionStorage.setItem(s,e),!0}catch{return!1}})(d),await t.default.push(d)};e.s(["W",0,e=>{try{return sessionStorage.getItem(s)===o(e)}catch{return!1}},"k",0,u],190871)},393172,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e.r(421506)),o=e.r(391398);n.default=(0,a.default)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},247297,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e.r(421506)),o=e.r(391398);n.default=(0,a.default)([(0,o.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,o.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},870307,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e.r(421506)),o=e.r(391398);n.default=(0,a.default)([(0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,o.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])}])})();