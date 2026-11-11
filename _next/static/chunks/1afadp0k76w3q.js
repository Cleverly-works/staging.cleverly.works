(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,526374,e=>{var t=e.i(391398),i=e.i(443103),a=e.i(776204),n=e.i(432171),r=e.i(247297),o=e.i(515523),s=e.i(987171),d=e.i(738251),l=e.i(76381),m=e.i(773831),u=e.i(388866),c=e.i(901004),p=e.i(522507),_=e.i(813843),$=e.i(652148),g=e.i(191788),y=e.i(514707),b=e.i(594301),I=e.i(21557),f=e.i(190844),q=e.i(886292),h=e.i(552987),S=e.i(731349),T=e.i(330774);let x=(0,s.t)(),k=(0,y.f)(p.U)({"& .MuiPaper-root":{borderRadius:"12px"}});e.s(["f",0,e=>{let{hideTagsList:s=!1,entityId:p,entity:y,values:v=[],name:j="tags",setValue:A=()=>{},refetchQueries:w=[],showAllTags:D=!1,preloadTags:J=!1,slaJobTimings:R=null,removeTagTarget:E}=e,{user:N}=(0,b.f)(),[C,F]=(0,g.useState)(null),[U,M]=(0,g.useState)(""),[L,O]=(0,g.useState)(""),P=(0,g.useRef)(null),z=!!C,H=(0,g.useCallback)(()=>{null!==P.current&&(clearTimeout(P.current),P.current=null)},[]),B=(0,g.useCallback)(e=>{H(),P.current=setTimeout(()=>{P.current=null,M(e)},500)},[H]);(0,g.useEffect)(()=>()=>H(),[H]);let G=(0,I.f)(),K=e=>{G.show({content:`Error: ${e.message}`,severity:"error"})},{data:{tags:V}={tags:[]},loading:W}=(0,n.t)(q.J,{skip:!p||!z&&!J,variables:{entityId:p,entity:y},onCompleted:e=>{let{tags:t}=e;A(j,t)}}),{data:{tags:Q}={tags:[]},loading:Z}=(0,n.t)(q.r,{skip:!C,variables:{entityId:p??-1,entity:y,q:""!==U?`%${U}%`:null}}),[X,{loading:Y}]=(0,a.f)(q.K,{refetchQueries:["GetEntityTags"],onError:K}),[ee,{loading:et}]=(0,a.f)(q.$,{refetchQueries:["GetEntityTags","GetTagsForEntity",...w],onError:K}),[ei,{loading:ea}]=(0,a.f)(q.R,{refetchQueries:["GetEntityTags","GetTagsForEntity",...w],onError:K}),[en,{loading:er}]=(0,a.f)(q.M,{refetchQueries:["GetEntityTags","GetTagsForEntity",...w],onError:K}),eo=async(e,t)=>{if("string"==typeof t)return;let a=new Set(i.uniqBy([...V,...v],e=>e.tag?.id).map(e=>e.tag.id));if(t&&"inputValue"in t&&p)ee({variables:{objects:[{entity:y,entityId:p,Taxonomy:{data:{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:N.adminId}}}]}});else if(t&&"value"in t&&p){if(a.has(Number(t.value)))return;ee({variables:{objects:[{entity:y,entityId:p,taxonomyId:t.value}]}})}else if(t&&"inputValue"in t){let{data:e}=await X({variables:{objects:[{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:N.adminId}]}});if(!e?.insert_Taxonomy?.returning[0])return;A(j,i.uniqBy([...v,{id:null,tag:{id:e.insert_Taxonomy.returning[0].id,name:e.insert_Taxonomy.returning[0].name,meta:e.insert_Taxonomy.returning[0].meta}}],e=>e.tag.id))}else t&&"value"in t&&t.value&&"label"in t&&t.label&&"meta"in t&&t.meta&&A(j,i.uniqBy([...v,{id:null,tag:{id:Number(t.value),name:t.label,meta:t.meta}}],e=>e.tag.id))},es=(0,g.useCallback)((e,t)=>{let i=x(e,t),{inputValue:a}=t,n=e.some(e=>"label"in e&&a===e.label);return""===a||n||i.push({inputValue:a,label:`Add "${a}"`,value:a}),i},[]),ed=(0,g.useCallback)(e=>"string"==typeof e?e:e.inputValue?e.inputValue:e.label,[]),el=async e=>{let{tagId:t,color:i}=e,{data:a}=await en({variables:{tagId:t,object:{meta:{color:i}}}});a?.update_Taxonomy_by_pk&&A(j,v.map(e=>e.tag.id===t?{...e,tag:{...a?.update_Taxonomy_by_pk}}:e))},em=async e=>{let{tagId:t,name:i}=e,{data:a}=await en({variables:{tagId:t,object:{name:i}}});a?.update_Taxonomy_by_pk&&A(i,v.map(e=>e.tag.id===t?{...e,tag:{...a?.update_Taxonomy_by_pk}}:e))},eu=(0,g.useMemo)(()=>i.uniqBy([...V,...v],e=>e.tag?.id),[V,v]),ec=(0,g.useMemo)(()=>Q.filter(e=>!(0,T.f)(e)).filter(e=>!eu.some(t=>t.tag.id===e.id)).map(e=>({label:e.name,value:e.id,meta:e.meta})),[Q,eu]),ep=(0,g.useMemo)(()=>(0,S.R)(eu),[eu]);return(0,t.jsxs)(_.f,{direction:"row",alignItems:"center",children:[!s&&(0,t.jsx)(h.f,{tags:eu,handleDeleteTagEntity:e=>{if(p)return ei({variables:{tagEntityId:e}});A(j,v.filter((t,i)=>i!==e))},showAllTags:D,slaJobTimings:R,removeTagTarget:E}),(0,t.jsx)(k,{id:z?"tags-popover":void 0,open:z,anchorEl:C,onClose:()=>{H(),M(""),O(""),F(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsxs)(d.f,{sx:{maxHeight:"80vh",width:"280px",p:"10px",pt:"5px"},children:[(0,t.jsx)(o.f,{freeSolo:!0,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,clearOnEscape:!0,disabled:W,inputValue:L,options:[...ec],onChange:(e,t)=>{if(null===t){H(),M(""),O("");return}"string"==typeof t||(H(),M(""),O("")),eo(e,t)},onInputChange:(e,t,i)=>{if("input"===i){O(t),B(t);return}H(),M(""),"clear"===i||"reset"===i?O(""):O(t)},filterOptions:es,getOptionLabel:ed,renderOption:(e,i)=>(0,t.jsx)(c.f,{...e,children:i.label}),renderInput:e=>(0,t.jsx)($.f,{...e,variant:"standard",color:"secondary",label:"Search tag",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[Z||Y||et?(0,t.jsx)(l.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}}),sx:{pl:"16px",pr:"16px"}}),W||ea||er?(0,t.jsx)(_.f,{width:"100%",alignItems:"center",p:4,children:(0,t.jsx)(l.f,{color:"secondary"})}):(0,t.jsx)(u.f,{children:ep?.map(e=>{let i=(0,T.f)(e.tag);return(0,t.jsx)(f.f,{tagEntityId:e.id??e.tag.id,tagId:e.tag.id,name:e.tag.name,color:(0,S.f)(e.tag.meta),editable:!i,onDelete:s||i?void 0:()=>(e=>{if(p&&null!=e.id)return ei({variables:{tagEntityId:e.id}});A(j,v.filter(t=>t.tag.id!==e.tag.id))})(e),onColorChange:el,onNameChange:em},e.tag.id)})})]})}),(0,t.jsx)(m.f,{color:"black",onClick:e=>{e.stopPropagation(),H(),M(""),O(""),F(e.currentTarget)},children:(0,t.jsx)(r.default,{sx:{height:"16px",width:"16px"}})})]})}])},886292,e=>{var t=e.i(159080);let i=t.f`
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
`,a=t.f`
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
`,r=t.f`
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
`,m=t.f`
  mutation DeleteTagAgainstEntityWithFollowing($where: Taxonomy_Entity_bool_exp!) {
    delete_Taxonomy_Entity(where: $where) {
      returning {
        id
        taxonomyId
      }
    }
  }
`;e.s(["K",0,a,"$",0,o,"V",0,l,"R",0,s,"I",0,m,"J",0,n,"r",0,i,"T",0,r,"M",0,d])},360364,e=>{var t=e.i(391398),i=e.i(776204),a=e.i(738251),n=e.i(813843),r=e.i(886292),o=e.i(552987),s=e.i(526374),d=e.i(879572);e.s(["f",0,e=>{let{row:l,refetchQueries:m,entity:u,removeTagTarget:c}=e,[p]=(0,i.f)(r.R,{refetchQueries:["GetTaskTags",...m]}),_=async e=>{let{data:t}=await p({variables:{tagEntityId:e}});if(!t?.delete_Taxonomy_Entity_by_pk)throw Error("Tag could not be removed")},$={onSiteTimingEnd:l.onSiteTimingEnd,jobReportTimingEnd:l.jobReportTimingEnd,quoteReturnedTimingEnd:l.quoteReturnedTimingEnd},g=null!=l.parentJobNumber&&""!==l.parentJobNumber?{parentJobType:l.parentJobType??null,parentJobNumber:l.parentJobNumber}:null,y=null!=c?c:"Task"===u?"task":"Workflow"===u?"workflow":"Asset"===u?"asset":(0,d.p)(l.type);return(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",sx:{minWidth:0,width:"100%",columnGap:2},children:[(0,t.jsx)(a.f,{sx:{flex:"1 1 0%",minWidth:0,overflow:"hidden",pr:.5,direction:"ltr"},children:(0,t.jsx)(o.f,{expandToContainer:!0,tags:l.tags||[],handleDeleteTagEntity:_,slaJobTimings:$,ppmLinkRowFallback:g,removeTagTarget:y,listSx:{whiteSpace:"nowrap"}})}),(0,t.jsx)(a.f,{sx:{flexShrink:0,display:"flex",alignItems:"center",direction:"ltr"},children:(0,t.jsx)(s.f,{hideTagsList:!0,entityId:l.id,refetchQueries:m,entity:u})})]})}])},655477,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(422411),n=e.i(877341),r=e.i(515523),o=e.i(76381),s=e.i(652148),d=e.i(800884),l=e.i(886292),m=e.i(175872);let u=[];e.s(["f",0,e=>{let{control:c}=e,[p,_]=(0,i.useState)(""),[$,{loading:g,data:{items:y}={items:[]}}]=(0,n.f)(l.T,{variables:{q:""!==p?`%${p}%`:null}}),b=(0,m.f)(e=>_(e),500);return(0,t.jsx)(a.e,{control:c,name:"tags",render:e=>{let{value:i,onChange:a}=e;return(0,t.jsx)(r.f,{multiple:!0,limitTags:6,color:"secondary",onOpen:()=>$(),options:y,value:i||u,onChange:(e,t)=>{a(t)},onInputChange:(e,t)=>{b(t)},getOptionLabel:e=>e.label,renderTags:(e,i)=>e.map((e,a)=>(0,t.jsx)(d.f,{size:"small",label:e.label,...i({index:a})})),isOptionEqualToValue:(e,t)=>e.value===t.value,renderInput:e=>(0,t.jsx)(s.f,{...e,variant:"standard",color:"secondary",label:"Select tags",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[g?(0,t.jsx)(o.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}})})}})}])},284661,e=>{var t=e.i(159080);let i=t.f`
  fragment AccountFields on Account {
    id
    type
    name
    status
    vatId
  }
`;e.s(["f",0,i])},239964,e=>{var t=e.i(391398),i=e.i(191788),a=e.i(691567),n=e.i(773831),r=e.i(33670),o=e.i(901004),s=e.i(509790),d=e.i(692113),l=e.i(137995),m=e.i(817581),u=e.i(420),c=e.i(870307),p=e.i(407329),_=e.i(390536),$=e.i(978319),g=e.i(376733),y=e.i(13558),b=e.i(562673),I=e.i(339909),f=e.i(89029),q=e.i(129503),h=e.i(213419),S=e.i(12028),T=e.i(813843),x=e.i(115871);let k={add:(0,t.jsx)(m.default,{}),archive:(0,t.jsx)(d.default,{}),avatar:(0,t.jsx)(S.default,{}),check:(0,t.jsx)(u.default,{}),clock:(0,t.jsx)(c.default,{}),delete:(0,t.jsx)($.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(_.default,{}),info:(0,t.jsx)(y.default,{}),edit:(0,t.jsx)(g.default,{}),location:(0,t.jsx)(f.default,{}),unarchive:(0,t.jsx)(l.default,{}),uploadFile:(0,t.jsx)(b.default,{}),receipt:(0,t.jsx)(I.default,{}),visibility:(0,t.jsx)(h.default,{})},v={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(q.default,{}),description:(0,t.jsx)(p.default,{})},j=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],A=e=>{let{actionsData:a=j,icon:s="default",row:d,disabled:l=!1}=e,[m,u]=(0,i.useState)(null),c=()=>{u(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(n.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:l,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),u(e.currentTarget)},children:v[s]}),(0,t.jsx)(r.f,{id:"simple-menu",anchorEl:m,keepMounted:!0,open:!!m,onClose:c,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:a(d).map((e,i)=>(0,t.jsx)(o.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),c()},sx:{pl:3,pr:4},children:(0,t.jsxs)(T.f,{direction:"row",alignItems:"center",spacing:2,children:[k?.[e.icon]||null,(0,t.jsx)(x.f,{children:e.tooltip})]})},i))})]})};A.propTypes={actionsData:a.default.func,icon:a.default.oneOf(["default","description"]),row:a.default.any.isRequired,disabled:a.default.bool},e.s(["f",0,A])},951510,832790,269610,e=>{var t=e.i(159080);let i=t.f`
  query GetJobs(
    $endDate: timestamptz
    $number: String
    $limit: Int
    $offset: Int
    $orderBy: [Job_order_by!]
    $q: String
    $startDate: timestamptz
    $status: [String!]
    $excludeStatus: [String!]
    $type: String
    $userId: Int
    $slaId: [Int!]
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        type: { _eq: $type }
        slaId: { _in: $slaId }
        _or: [{ supplierUserId: { _eq: $userId } }, { JobOperatives: { userId: { _eq: $userId } } }]
      }
      order_by: $orderBy
    ) {
      id
      type
      number
      status
      scheduledAt
      timingStart
      createdAt
      invoiceNumber
      description
      referenceSupplier

      customer: Customer {
        id
        type
        name
        status
        vatId
      }
      location: Location {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
      supplier: Supplier {
        id
        name
      }
      supplierUser: SupplierUser {
        id
        fullName
      }
      supplierOffers: SupplierOffers {
        supplier: Supplier {
          id
          name
        }
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        user: User {
          fullName
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        type: { _eq: $type }
        slaId: { _in: $slaId }
        _or: [{ supplierUserId: { _eq: $userId } }, { JobOperatives: { userId: { _eq: $userId } } }]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,a=t.f`
  query GetJobs(
    $endDate: timestamptz
    $number: String
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: [Job_order_by!]
    $startDate: timestamptz
    $status: [String!]
    $excludeStatus: [String!]
    $type: [String!]
    $userId: Int
    $locationId: Int
    $locationManagerId: Int
    $slaId: [Int!]
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        type: { _in: $type }
        customerUserId: { _eq: $userId }
        locationId: { _eq: $locationId }
        Location: { managerId: { _eq: $locationManagerId } }
        slaId: { _in: $slaId }
      }
      order_by: $orderBy
    ) {
      id
      type
      number
      status
      scheduledAt
      timingStart
      createdAt
      invoiceNumber
      description
      reference

      customer: Customer {
        id
        type
        name
        status
        vatId
        manager: Manager {
          id
          fullName
        }
      }
      location: Location {
        id
        name
        manager: Manager {
          id
          fullName
        }
      }
      sublocation: Sublocation {
        id
        name
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
      supplier: Supplier {
        id
        name
      }
      supplierOffers: SupplierOffers {
        supplier: Supplier {
          id
          name
        }
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        user: User {
          fullName
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status, _nin: $excludeStatus }
        slaId: { _in: $slaId }
        type: { _in: $type }
        customerUserId: { _eq: $userId }
        locationId: { _eq: $locationId }
        Location: { managerId: { _eq: $locationManagerId } }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;e.s(["k",0,e=>{let{tagsWhere:i,parentChildWhere:a="",flagsWhere:n=""}=e;return t.f`
  query GetJobs(
    $withTableExtras: Boolean = false
    $withFinances: Boolean = false
    $assetId: Int
    $customerId: Int
    $endDate: timestamptz
    $number: String
    $limit: Int
    $locationId: Int
    $sublocationId: Int
    $managerId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $offset: Int
    $orderBy: [Job_order_by!]
    $paid: Boolean
    $type: [String!]
    $q: String
    $startDate: timestamptz
    $status: [String!]
    $excludeStatus: [String!]
    $tags: [Int!]
    $supplierId: Int
    $slaId: [Int!]
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${a}
          ${n}
        ]
        ${i}
        assetId: { _eq: $assetId }
        status: { _in: $status, _nin: $excludeStatus }
        type: { _in: $type }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        sublocationId: { _eq: $sublocationId }
        managerId: { _eq: $managerId }
        Customer: { managerId: { _eq: $customerManagerId } }
        Location: { managerId: { _eq: $locationManagerId } }
        paid: { _eq: $paid }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { Supplier: { id: { _eq: $supplierId } } } }
        ]
      }
      order_by: $orderBy
    ) {
      id
      type
      number
      status
      scheduledAt
      timingStart
      createdAt
      onSiteTimingEnd
      jobReportTimingEnd
      quoteReturnedTimingEnd
      parentId
      description
      issueReportedDescription
      reference
      referenceSupplier

      customerTotal: customerFinances(path: "amountInfo.total") @include(if: $withFinances)
      supplierTotal: supplierFinances(path: "amountInfo.total") @include(if: $withFinances)
      customerVatTotal: customerFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)
      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)

      assets: Assets(where: { entity: { _eq: "Job" } }) @include(if: $withTableExtras) {
        id
        asset: Asset {
          id
          name
        }
      }
      report: JobReport @include(if: $withTableExtras) {
        id
        completion
      }
      parentJob: ParentJob {
        id
        type
        number
      }
      childJobs: Jobs(limit: 2) @include(if: $withTableExtras) {
        id
      }
      validatedAt: statusData(path: "validated")
      supplierInvoiceMedia: Media(
        where: { entity: { _eq: "Job" }, Medium: { category: { _eq: "invoice" } } }
        limit: 1
      ) @include(if: $withTableExtras) {
        id
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: {
            _and: [
              {status: { _eq: "active" }},
              {type: { _eq: "tags" }}
            ]

          }
        }
      ) {
        id
        createdAt
        meta
        tag: Taxonomy {
          id
          name
          meta
          type
        }
      }
      invoiceNumber
      customer: Customer {
        id
        type
        name
        status
        vatId

        manager: Manager {
          id
          fullName
        }
      }
      location: Location {
        id
        name
        manager: Manager {
          id
          fullName
        }
      }
      sublocation: Sublocation {
        id
        name
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      service: Service {
        id
        name
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        taxonomy: Taxonomy {
          name
        }
      }
      sla: SLA {
        name
      }
      supplier: Supplier {
        id
        name
      }
      supplierOffers: SupplierOffers {
        supplier: Supplier {
          id
          name
        }
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        user: User {
          fullName
        }
      }
    }
    meta: Job_aggregate(
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { description: { _ilike: $q } }
              { Customer: { name: { _ilike: $q } } }
              { CustomerUser: { email: { _ilike: $q } } }
              { Supplier: { name: { _ilike: $q } } }
              { SupplierUser: { email: { _ilike: $q } } }
              { Location: { name: { _ilike: $q } } }
              { Taxonomy: { Taxonomy: { name: { _ilike: $q } } } }
              { number: { _ilike: $q } }
              { invoiceNumber: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${a}
          ${n}
        ]
        ${i}
        assetId: { _eq: $assetId }
        status: { _in: $status, _nin: $excludeStatus }
        type: { _in: $type }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        sublocationId: { _eq: $sublocationId }
        managerId: { _eq: $managerId }
        Customer: { managerId: { _eq: $customerManagerId } }
        Location: { managerId: { _eq: $locationManagerId } }
        paid: { _eq: $paid }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { Supplier: { id: { _eq: $supplierId } } } }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`},"C",0,a,"F",0,i],832790);var n=e.i(892904),r=e.i(284661),o=e.i(987123),s=e.i(39059);e.s(["f",0,e=>{let{tagsWhere:i,parentChildWhere:a="",flagsWhere:d=""}=e;return t.f`
  query GetDashboardList(
    $withTableExtras: Boolean = false
    $withFinances: Boolean = false
    $withSupplierReference: Boolean = false
    $accountId: Int
    $customerId: Int
    $supplierId: Int
    $locationId: Int
    $managerId: Int
    $customerManagerId: Int
    $locationManagerId: Int
    $adminId: Int
    $startDate: timestamptz
    $endDate: timestamptz
    $asAt: timestamptz
    $jobHoldReasonId: Int
    $limit: Int
    $monthStart: timestamptz
    $offset: Int
    $orderBy: [dashboard_home_details_order_by!]
    $q: String
    $tileName: String
    $dayStart: timestamptz
    $userId: Int
    $yearStart: timestamptz
    $number: String
    $status: [String!]
    $excludeStatus: [String!]
    $slaId: [Int!]
  ) {
    jobs: getDashboard_HomeTile_Details(
      args: {
        accountId: $accountId
        adminId: $adminId
        asAt: $asAt
        jobHoldReasonId: $jobHoldReasonId
        monthStart: $monthStart
        tileName: $tileName
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
      where: {
        _and: [
          {
            _or: [
              { number: { _eq: $number } }
              { reference: { _ilike: $q } }
              { description: { _ilike: $q } }
              { customerName: { _ilike: $q } }
              { serviceName: { _ilike: $q } }
              { assignedTo: { _ilike: $q } }
              { supplierName: { _ilike: $q } }
              { location: { _ilike: $q } }
              { number: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${a}
          ${d}
        ]
        ${i}
        status: { _in: $status, _nin: $excludeStatus }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        managerId: { _eq: $managerId }
        _or: [
          { supplierId: { _eq: $supplierId } }
          { SupplierOffers: { Supplier: { id: { _eq: $supplierId } } } }
        ]
      }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      Assets(where: { entity: { _eq: "Job" } }) {
        id
        assetId
        __typename
      }
      ...JobFields
      ...JobAdminFields
      admin: Admin {
        id
        name
        __typename
      }
      customer: Customer {
        ...AccountFields
        manager: Manager {
          id
          fullName
        }
        __typename
      }
      location: Location {
        id
        name
        manager: Manager {
          ...UserFields
          __typename
        }
        __typename
      }
      job: Job {
        id
        status
        issueReportedDescription
        reference
        referenceSupplier @include(if: $withSupplierReference)
        validatedAt: statusData(path: "validated")
        supplierInvoiceMedia: Media(
          where: { entity: { _eq: "Job" }, Medium: { category: { _eq: "invoice" } } }
          limit: 1
        ) @include(if: $withTableExtras) {
          id
        }
        customerTotal: customerFinances(path: "amountInfo.total") @include(if: $withFinances)
        supplierTotal: supplierFinances(path: "amountInfo.total") @include(if: $withFinances)
        customerVatTotal: customerFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)
        supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal") @include(if: $withFinances)
        sublocation: Sublocation {
          id
          name
        }
        assets: Assets(where: { entity: { _eq: "Job" } }) @include(if: $withTableExtras) {
          id
          asset: Asset {
            id
            name
          }
        }
        report: JobReport @include(if: $withTableExtras) {
          id
          completion
        }
        childJobs: Jobs(limit: 2) @include(if: $withTableExtras) {
          id
        }
      }
      manager: Manager {
        ...UserFields
        __typename
      }
      service: Service {
        id
        name
        __typename
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
          __typename
        }
        __typename
      }
      parentId
      parentJob: ParentJob {
        id
        type
        number
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: {
            status: { _eq: "active" }
            type: { _eq: "tags" }
          }
        }
      ) {
        id
        createdAt
        meta
        tag: Taxonomy {
          id
          name
          meta
          type
        }
      }
      sla: SLA {
        id
        name
        __typename
      }
      supplier: Supplier {
        ...AccountFields
        __typename
      }
      supplierOffers: SupplierOffers {
        status
        rate
        supplier: Supplier {
          ...AccountFields
          __typename
        }
        __typename
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        id
        status
        createdAt
        user: User {
          ...UserFields
          __typename
        }
        __typename
      }
      id: jobId
      number
      # location
      priority
      scheduledAt
      assignedTo
      jobHoldReason
      locationId
      meta
      managerId
      description
      customerName
      customerId
      reference
      serviceName
      status
      supplierId
      supplierName
      timingStart
      type
      quoteNumber
      quoteDue
      createdAt
    }
    meta: getDashboard_HomeTile_Details_aggregate(
      args: {
        accountId: $accountId
        adminId: $adminId
        asAt: $asAt
        jobHoldReasonId: $jobHoldReasonId
        monthStart: $monthStart
        tileName: $tileName
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
      where: {
        _and: [
          {
            _or: [
              { number: { _eq: $number } }
              { reference: { _ilike: $q } }
              { description: { _ilike: $q } }
              { customerName: { _ilike: $q } }
              { serviceName: { _ilike: $q } }
              { assignedTo: { _ilike: $q } }
              { supplierName: { _ilike: $q } }
              { location: { _ilike: $q } }
              { number: { _ilike: $q } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
          ${a}
          ${d}
        ]
        ${i}
        status: { _in: $status, _nin: $excludeStatus }
        slaId: {_in: $slaId}
        customerId: { _eq: $customerId }
        locationId: { _eq: $locationId }
        managerId: { _eq: $managerId }
        supplierId: { _eq: $supplierId }
      }
    ) {
      aggregate {
        totalCount: count
        __typename
      }
      __typename
    }
  }
  ${r.f}
  ${o.a}
  ${n.r}
  ${n.O}
  ${s.W}
`}],269610),t.f`
  query GetDashboardList(
    $accountId: Int
    $adminId: Int
    $asAt: timestamptz
    $jobHoldReasonId: Int
    $limit: Int
    $monthStart: timestamptz
    $offset: Int
    $orderBy: dashboard_home_details_order_by!
    $q: String
    $tileName: String
    $dayStart: timestamptz
    $userId: Int
    $yearStart: timestamptz
  ) {
    jobs: getDashboard_HomeTile_Details(
      args: {
        accountId: $accountId
        adminId: $adminId
        asAt: $asAt
        jobHoldReasonId: $jobHoldReasonId
        monthStart: $monthStart
        tileName: $tileName
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { description: { _ilike: $q } }
              { customerName: { _ilike: $q } }
              { serviceName: { _ilike: $q } }
              { assignedTo: { _ilike: $q } }
              { supplierName: { _ilike: $q } }
              { location: { _ilike: $q } }
              { number: { _ilike: $q } }
            ]
          }
        ]
      }
      order_by: [$orderBy]
      limit: $limit
      offset: $offset
    ) {
      Assets(where: { entity: { _eq: "Job" } }) {
        id
        assetId
        __typename
      }
      ...JobFields
      ...JobAdminFields
      admin: Admin {
        id
        name
        __typename
      }
      customer: Customer {
        ...AccountFields
        __typename
      }
      location: Location {
        id
        name
        __typename
      }
      manager: Manager {
        ...UserFields
        __typename
      }
      service: Service {
        id
        name
        __typename
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
          __typename
        }
        __typename
      }
      sla: SLA {
        id
        name
        __typename
      }
      supplier: Supplier {
        ...AccountFields
        __typename
      }
      supplierOffers: SupplierOffers {
        status
        rate
        supplier: Supplier {
          ...AccountFields
          __typename
        }
        __typename
      }
      timings: JobTimings(order_by: { createdAt: asc }) {
        id
        status
        createdAt
        user: User {
          ...UserFields
          __typename
        }
        __typename
      }
      id: jobId
      number
      # location
      priority
      scheduledAt
      assignedTo
      jobHoldReason
      locationId
      meta
      managerId
      description
      customerName
      customerId
      reference
      serviceName
      status
      supplierId
      supplierName
      timingStart
      type
      quoteNumber
      quoteDue
      createdAt
    }
    meta: getDashboard_HomeTile_Details_aggregate(
      args: {
        accountId: $accountId
        adminId: $adminId
        asAt: $asAt
        jobHoldReasonId: $jobHoldReasonId
        monthStart: $monthStart
        tileName: $tileName
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
      where: {
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { description: { _ilike: $q } }
              { customerName: { _ilike: $q } }
              { serviceName: { _ilike: $q } }
              { assignedTo: { _ilike: $q } }
              { supplierName: { _ilike: $q } }
              { location: { _ilike: $q } }
              { number: { _ilike: $q } }
            ]
          }
        ]
      }
    ) {
      aggregate {
        totalCount: count
        __typename
      }
      __typename
    }
  }
  ${r.f}
  ${o.a}
  ${n.r}
  ${n.O}
  ${s.W}
`,e.i(925527),e.i(684034);var d=e.i(48441);e.s(["D",0,e=>{let t=["completed","inDispute","disputeResolved","reportSent","invoiceSent","customerPaid","supplierPaid","closed"],i=["offered","completed","reportSent","invoiceSent","customerPaid","supplierPaid","closed","raised","paused","continued","accepted","onMyWay","inProgress","pending","onHold"];switch(e){case"offered":return d.e.filter(e=>"offered"===e.value);case"current":return d.e.filter(e=>{let{value:t}=e;return i.includes(t)});case"openJobs":return d.e.filter(e=>{let{value:t}=e;return"raised"===t||"pending"===t});case"raised":return d.e.filter(e=>{let{value:t}=e;return"raised"===t});case"pending":return d.e.filter(e=>{let{value:t}=e;return"pending"===t});case"past":return d.e.filter(e=>{let{value:i}=e;return t.includes(i)});default:return d.e}},"W",0,e=>{let t=["locationId","sublocationId","customerId","assetId"],i="";return e&&e.constructor===Object&&Object.keys(e).length>0&&(i="?",Object.entries(e).map(e=>{let[a,n]=e;return n&&t.includes(a)&&(i+=`${[a]}=${n}&`),0}),i=i.substring(0,i.length-1)),i}],951510)},892904,e=>{var t=e.i(159080),i=e.i(987123);let a=t.f`
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
`,r=t.f`
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
  ${i.a}
  ${i.S}
`,e.s(["K",0,d,"O",0,r,"r",0,a,"Z",0,n,"q",0,o,"D",0,s])},190871,179319,e=>{var t=e.i(203828),i=e.i(220303),a=e.i(93198),n=e.i(262887);let r=e=>{let{type:t,number:i,id:a}=e;return`/dashboard/documents/${t}?${new URLSearchParams({number:i,id:String(a)})}`};e.s(["$",0,r,"k",0,e=>{let t="string"==typeof e.number?e.number.trim():"";if(!t)return null;let i=Number(e.id);return{number:t,...Number.isSafeInteger(i)&&i>0&&{id:i}}}],179319);let o="This document could not be found",s="documentOpenedFromPortal",d=async e=>{let d=await e;if(!d)throw Error(o);if((0,a.Z)()&&"job-report"!==d.type){let e=await i.R.fetchQuery("/documents/:type/:number",{pathParams:{type:d.type,number:d.number},params:{id:d.id}});if(!("url"in e))throw Error(o);await (0,n.f)(e.url);return}let l=r(d);(e=>{try{return sessionStorage.setItem(s,e),!0}catch{return!1}})(l),await t.default.push(l)};e.s(["W",0,e=>{try{return sessionStorage.getItem(s)===r(e)}catch{return!1}},"k",0,d],190871)},247297,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)([(0,r.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,r.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},870307,(e,t,i)=>{var a=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=a(e.r(421506)),r=e.r(391398);i.default=(0,n.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")}])})();