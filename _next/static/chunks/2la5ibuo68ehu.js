(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[218659,e=>{var t=e.i(391398),a=e.i(280445),n=e.i(115871),r=e.i(813843),i=e.i(755548),o=e.i(587369);let s=(0,a.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:a,sx:l={},imageSx:u={},title:d,titleSx:y={},subtitleFirstLine:c,subtitleFirstLineSx:m={},subtitleSecondLine:p,subtitleSecondLineSx:f={},buttonText:g,onAction:_}=e,b=(0,o.f)("(max-width: 400px)");return(0,t.jsxs)(r.f,{sx:{...l,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,t.jsx)(s,{src:a,sx:{...u,width:b?"250px":"300px"}}),(0,t.jsx)(n.f,{typography:"h5",sx:{...y},children:d}),(0,t.jsxs)(r.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,t.jsx)(n.f,{sx:{...m},children:c}),(0,t.jsx)(n.f,{sx:{...f},children:p})]}),g&&_&&(0,t.jsx)(i.f,{variant:"contained",color:"secondary",onClick:_,children:g})]})}])},526374,e=>{var t=e.i(391398),a=e.i(443103),n=e.i(776204),r=e.i(432171),i=e.i(247297),o=e.i(515523),s=e.i(987171),l=e.i(738251),u=e.i(76381),d=e.i(773831),y=e.i(388866),c=e.i(901004),m=e.i(522507),p=e.i(813843),f=e.i(652148),g=e.i(191788),_=e.i(514707),b=e.i(594301),h=e.i(21557),x=e.i(190844),v=e.i(886292),$=e.i(552987),T=e.i(731349),E=e.i(330774);let j=(0,s.t)(),I=(0,_.f)(m.U)({"& .MuiPaper-root":{borderRadius:"12px"}});e.s(["f",0,e=>{let{hideTagsList:s=!1,entityId:m,entity:_,values:w=[],name:q="tags",setValue:S=()=>{},refetchQueries:A=[],showAllTags:k=!1,preloadTags:R=!1,slaJobTimings:O=null,removeTagTarget:L}=e,{user:G}=(0,b.f)(),[Y,M]=(0,g.useState)(null),[V,C]=(0,g.useState)(""),[N,P]=(0,g.useState)(""),F=(0,g.useRef)(null),K=!!Y,U=(0,g.useCallback)(()=>{null!==F.current&&(clearTimeout(F.current),F.current=null)},[]),B=(0,g.useCallback)(e=>{U(),F.current=setTimeout(()=>{F.current=null,C(e)},500)},[U]);(0,g.useEffect)(()=>()=>U(),[U]);let H=(0,h.f)(),z=e=>{H.show({content:`Error: ${e.message}`,severity:"error"})},{data:{tags:D}={tags:[]},loading:Q}=(0,r.t)(v.J,{skip:!m||!K&&!R,variables:{entityId:m,entity:_},onCompleted:e=>{let{tags:t}=e;S(q,t)}}),{data:{tags:W}={tags:[]},loading:J}=(0,r.t)(v.r,{skip:!Y,variables:{entityId:m??-1,entity:_,q:""!==V?`%${V}%`:null}}),[X,{loading:Z}]=(0,n.f)(v.K,{refetchQueries:["GetEntityTags"],onError:z}),[ee,{loading:et}]=(0,n.f)(v.$,{refetchQueries:["GetEntityTags","GetTagsForEntity",...A],onError:z}),[ea,{loading:en}]=(0,n.f)(v.R,{refetchQueries:["GetEntityTags","GetTagsForEntity",...A],onError:z}),[er,{loading:ei}]=(0,n.f)(v.M,{refetchQueries:["GetEntityTags","GetTagsForEntity",...A],onError:z}),eo=async(e,t)=>{if("string"==typeof t)return;let n=new Set(a.uniqBy([...D,...w],e=>e.tag?.id).map(e=>e.tag.id));if(t&&"inputValue"in t&&m)ee({variables:{objects:[{entity:_,entityId:m,Taxonomy:{data:{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:G.adminId}}}]}});else if(t&&"value"in t&&m){if(n.has(Number(t.value)))return;ee({variables:{objects:[{entity:_,entityId:m,taxonomyId:t.value}]}})}else if(t&&"inputValue"in t){let{data:e}=await X({variables:{objects:[{type:"tags",status:"active",name:t.inputValue,meta:{color:"#0679d8"},isGroup:!1,adminId:G.adminId}]}});if(!e?.insert_Taxonomy?.returning[0])return;S(q,a.uniqBy([...w,{id:null,tag:{id:e.insert_Taxonomy.returning[0].id,name:e.insert_Taxonomy.returning[0].name,meta:e.insert_Taxonomy.returning[0].meta}}],e=>e.tag.id))}else t&&"value"in t&&t.value&&"label"in t&&t.label&&"meta"in t&&t.meta&&S(q,a.uniqBy([...w,{id:null,tag:{id:Number(t.value),name:t.label,meta:t.meta}}],e=>e.tag.id))},es=(0,g.useCallback)((e,t)=>{let a=j(e,t),{inputValue:n}=t,r=e.some(e=>"label"in e&&n===e.label);return""===n||r||a.push({inputValue:n,label:`Add "${n}"`,value:n}),a},[]),el=(0,g.useCallback)(e=>"string"==typeof e?e:e.inputValue?e.inputValue:e.label,[]),eu=async e=>{let{tagId:t,color:a}=e,{data:n}=await er({variables:{tagId:t,object:{meta:{color:a}}}});n?.update_Taxonomy_by_pk&&S(q,w.map(e=>e.tag.id===t?{...e,tag:{...n?.update_Taxonomy_by_pk}}:e))},ed=async e=>{let{tagId:t,name:a}=e,{data:n}=await er({variables:{tagId:t,object:{name:a}}});n?.update_Taxonomy_by_pk&&S(a,w.map(e=>e.tag.id===t?{...e,tag:{...n?.update_Taxonomy_by_pk}}:e))},ey=(0,g.useMemo)(()=>a.uniqBy([...D,...w],e=>e.tag?.id),[D,w]),ec=(0,g.useMemo)(()=>W.filter(e=>!(0,E.f)(e)).filter(e=>!ey.some(t=>t.tag.id===e.id)).map(e=>({label:e.name,value:e.id,meta:e.meta})),[W,ey]),em=(0,g.useMemo)(()=>(0,T.R)(ey),[ey]);return(0,t.jsxs)(p.f,{direction:"row",alignItems:"center",children:[!s&&(0,t.jsx)($.f,{tags:ey,handleDeleteTagEntity:e=>{if(m)return ea({variables:{tagEntityId:e}});S(q,w.filter((t,a)=>a!==e))},showAllTags:k,slaJobTimings:O,removeTagTarget:L}),(0,t.jsx)(I,{id:K?"tags-popover":void 0,open:K,anchorEl:Y,onClose:()=>{U(),C(""),P(""),M(null)},anchorOrigin:{vertical:"top",horizontal:"right"},children:(0,t.jsxs)(l.f,{sx:{maxHeight:"80vh",width:"280px",p:"10px",pt:"5px"},children:[(0,t.jsx)(o.f,{freeSolo:!0,selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,clearOnEscape:!0,disabled:Q,inputValue:N,options:[...ec],onChange:(e,t)=>{if(null===t){U(),C(""),P("");return}"string"==typeof t||(U(),C(""),P("")),eo(e,t)},onInputChange:(e,t,a)=>{if("input"===a){P(t),B(t);return}U(),C(""),"clear"===a||"reset"===a?P(""):P(t)},filterOptions:es,getOptionLabel:el,renderOption:(e,a)=>(0,t.jsx)(c.f,{...e,children:a.label}),renderInput:e=>(0,t.jsx)(f.f,{...e,variant:"standard",color:"secondary",label:"Search tag",InputProps:{...e.InputProps,endAdornment:(0,t.jsxs)(t.Fragment,{children:[J||Z||et?(0,t.jsx)(u.f,{color:"inherit",size:20}):null,e.InputProps.endAdornment]})}}),sx:{pl:"16px",pr:"16px"}}),Q||en||ei?(0,t.jsx)(p.f,{width:"100%",alignItems:"center",p:4,children:(0,t.jsx)(u.f,{color:"secondary"})}):(0,t.jsx)(y.f,{children:em?.map(e=>{let a=(0,E.f)(e.tag);return(0,t.jsx)(x.f,{tagEntityId:e.id??e.tag.id,tagId:e.tag.id,name:e.tag.name,color:(0,T.f)(e.tag.meta),editable:!a,onDelete:s||a?void 0:()=>(e=>{if(m&&null!=e.id)return ea({variables:{tagEntityId:e.id}});S(q,w.filter(t=>t.tag.id!==e.tag.id))})(e),onColorChange:eu,onNameChange:ed},e.tag.id)})})]})}),(0,t.jsx)(d.f,{color:"black",onClick:e=>{e.stopPropagation(),U(),C(""),P(""),M(e.currentTarget)},children:(0,t.jsx)(i.default,{sx:{height:"16px",width:"16px"}})})]})}])},886292,e=>{var t=e.i(159080);let a=t.f`
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
`,r=t.f`
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
`,i=t.f`
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
`,l=t.f`
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
`,d=t.f`
  mutation DeleteTagAgainstEntityWithFollowing($where: Taxonomy_Entity_bool_exp!) {
    delete_Taxonomy_Entity(where: $where) {
      returning {
        id
        taxonomyId
      }
    }
  }
`;e.s(["K",0,n,"$",0,o,"V",0,u,"R",0,s,"I",0,d,"J",0,r,"r",0,a,"T",0,i,"M",0,l])},694508,2261,e=>{var t,a,n=((t={}).WEEKLY="Weekly",t.MONTHLY="Monthly",t.QUARTERLY="Quarterly",t.EVERY_SIX_MONTH="6 monthly",t.ANNUALLY="Annually",t.EVERY_THREE_YEARS="Every 3 years",t.EVERY_FIVE_YEARS="Every 5 years",t.EVERY_TEN_YEARS="Every 10 years",t),r=((a={}).ACTIVE="active",a.INACTIVE="inactive",a);e.s(["D",()=>n,"N",()=>r],2261);let i=[{label:"Active",value:r.ACTIVE},{label:"Inactive",value:r.INACTIVE}],o=[{label:n.WEEKLY,value:n.WEEKLY},{label:n.MONTHLY,value:n.MONTHLY},{label:n.QUARTERLY,value:n.QUARTERLY},{label:n.EVERY_SIX_MONTH,value:n.EVERY_SIX_MONTH},{label:n.ANNUALLY,value:n.ANNUALLY},{label:n.EVERY_THREE_YEARS,value:n.EVERY_THREE_YEARS},{label:n.EVERY_FIVE_YEARS,value:n.EVERY_FIVE_YEARS},{label:n.EVERY_TEN_YEARS,value:n.EVERY_TEN_YEARS}];e.s(["X",0,o,"d",0,{active:"success",inactive:"danger"},"G",0,i],694508)},911383,e=>{var t=e.i(220303);let a=async function(e,a){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=await t.R.fetchQuery(e,{method:"POST",body:a,...n});if("string"!=typeof r?.url||!r.url||"string"!=typeof r.key||!r.key)throw Error("The server did not return a PDF");return r};e.s(["G",0,e=>{let{refused:t=[],unavailable:a=[]}=e;return t.length>0||a.length>0},"g",0,a])},995197,e=>{var t=e.i(391398),a=e.i(280445),n=e.i(738251);let r={},i={},o=(0,a.f)(n.f)(()=>({"& .MuiTabs-root":{}}));e.s(["f",0,e=>{let{children:a,value:s,index:l,boxProps:u=r,boxSx:d=i,...y}=e;return(0,t.jsx)(o,{role:"tabpanel",hidden:s!==l,id:`simple-tabpanel-${l}`,"aria-labelledby":`simple-tab-${l}`,...y,children:s===l&&(0,t.jsx)(n.f,{...u,sx:{padding:"25px 0",...d},children:a})})}])},98762,e=>{var t=e.i(191788),a=e.i(949125),n=e.i(974261),r=e.i(491230);e.s(["f",0,e=>{let{filters:i,newFilters:o,initialSort:s}=e,l=(0,t.useRef)(void 0),[u,d]=(0,t.useState)({}),[y,c]=(0,t.useState)({}),m=s||{item:"createdAt",order:"desc"},p={[l.current?.sort.item||m.item]:m.inneritem?{[m.inneritem]:l.current?.sort.order||m.order}:l.current?.sort.order||m.order};return(0,t.useEffect)(()=>{let e=!(0,a.default)(u,i),t=!(0,a.default)(y,o);if(e&&(d(i),l?.current?.resetPagination()),t&&(c(o),l?.current?.resetPagination()),l?.current?.setSort&&!(e||t)){let e=l.current?.sort?.item&&l.current?.sort?.order?{item:l.current?.sort?.item,order:l.current?.sort?.order}:p;l.current.setSort(e)}},[i,o]),{initialData:{...i,newFilters:o?.length>0?o:void 0,limit:l.current?.pageSize==="Infinity"?null:parseInt(l.current?.pageSize,10)||n.r.paginationSize,offset:(l.current?.currentPage-1||0)*(l.current?.pageSize||n.r.paginationSize),orderBy:(0,r.f)(l.current?.sort?.item?.replace(/ORDER/i,l.current?.sort.order))||p},initialSort:s,ref:l}}])},865568,e=>{var t=e.i(159080);let a=t.f`
  query GetTaxonomys(
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: Taxonomy_order_by!
    $status: String = "active"
    $type: String
    $typeGroup: String
    $parentId: Int
    $fetchGroup: Boolean! = true
    $id: Int
    $isGroup: Boolean = false
  ) {
    taxonomy: Taxonomy(
      limit: $limit
      offset: $offset
      where: {
        name: { _ilike: $q }
        status: { _eq: $status }
        type: { _eq: $type }
        parentId: { _eq: $parentId }
        id: { _eq: $id }
        isGroup: { _eq: $isGroup }
      }
      order_by: [$orderBy]
    ) {
      options: Taxonomies(
        where: {
          type: { _eq: $type }
          name: { _ilike: $q }
          id: { _eq: $id }
          status: { _eq: "active" }
        }
        order_by: { name: asc }
      ) {
        value: id
        label: name

        childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {
          taxonomyId: id
          name
          type
          meta
          status
        }
      }
      id
      name
      type
      status
      parentId
      createdAt
      meta
      parent: Parent {
        id
        name
        type
      }
      childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {
        taxonomyId: id
        name
        type
        meta
        status
      }
      jobs: Taxonomy_Entities_aggregate(
        where: { Taxonomy: { type: { _eq: "jobTags" } }, entity: { _eq: "Job" } }
      ) {
        aggregate {
          count
        }
      }
      FormSubmissions(where: { entity: { _eq: "Taxonomy" } }) {
        id
        entity
        entityId
        form: FormSubmissionsForm {
          name
        }
      }
    }
    meta: Taxonomy_aggregate(
      where: {
        name: { _ilike: $q }
        status: { _eq: $status }
        type: { _eq: $type }
        parentId: { _eq: $parentId }
        id: { _eq: $id }
        isGroup: { _eq: $isGroup }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
    taxonomyGroup: Taxonomy(where: { isGroup: { _eq: true }, type: { _eq: $typeGroup } })
      @include(if: $fetchGroup) {
      value: id
      text: name
    }
  }
`;t.f`
  query GetTaxonomy($id: Int!) {
    taxonomy: Taxonomy_by_pk(id: $id) {
      id
      name
      type
      status
      parentId
      createdAt
      meta
    }
  }
`;let n=t.f`
  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {
    insert_Taxonomy(objects: $objects) {
      returning {
        id
        type
      }
    }
  }
`,r=t.f`
  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {
    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      type
    }
  }
`;t.f`
  query GeTaxonomyWithEntities($type: String!, $entity: String!, $entityId: Int!) {
    questions: Taxonomy(where: { type: { _eq: $type } }) {
      id
      meta
      name
      status
      taxonomy_entity: Taxonomy_Entities(
        where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }
      ) {
        comments
      }
    }
  }
`,t.f`
  mutation InsertTaxonomyEntity(
    $entity: String!
    $entityId: Int!
    $questions: [Taxonomy_Entity_insert_input!]!
    $objectStatusLog: [StatusLog_insert_input!]!
    $hasStatusLog: Boolean!
  ) {
    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {
      returning {
        id
      }
    }
    insert_Taxonomy_Entity(objects: $questions) {
      returning {
        id
      }
    }

    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {
      returning {
        id
      }
    }
  }
`,t.f`
  query GetSlasForTemplate($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    slas: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      id
      label: name
      subtype
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
    }
  }
`,e.s(["e",0,n,"N",0,a,"y",0,r])},955811,e=>{var t=e.i(159080);e.i(865568);let a=t.f`
  query GetTaxonomy($id: Int!) {
    taxonomy: Taxonomy_by_pk(id: $id) {
      id
      name
      type
      status
      parentId
      createdAt
      meta
    }
  }
`,n=t.f`
  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {
    insert_Taxonomy(objects: $objects) {
      returning {
        id
        type
      }
    }
  }
`,r=t.f`
  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {
    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      type
    }
  }
`,i=t.f`
  query GeTaxonomyWithEntities($type: String!, $entity: String!, $entityId: Int!) {
    questions: Taxonomy(where: { type: { _eq: $type } }) {
      id
      meta
      name
      status
      taxonomy_entity: Taxonomy_Entities(
        where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }
      ) {
        comments
      }
    }
  }
`,o=t.f`
  mutation InsertTaxonomyEntity(
    $entity: String!
    $entityId: Int!
    $questions: [Taxonomy_Entity_insert_input!]!
    $objectStatusLog: [StatusLog_insert_input!]!
    $hasStatusLog: Boolean!
  ) {
    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {
      returning {
        id
      }
    }
    insert_Taxonomy_Entity(objects: $questions) {
      returning {
        id
      }
    }

    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {
      returning {
        id
      }
    }
  }
`;t.f`
  query GetSlasForTemplate($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    slas: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      id
      label: name
      subtype
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
    }
  }
`,e.s(["e",0,n,"v",0,a,"o",0,i,"K",0,o,"y",0,r])},856688,e=>{var t=e.i(776204),a=e.i(432171),n=e.i(170582),r=e.i(511667),i=e.i(886143),o=e.i(327682),s=e.i(191788);e.s(["f",0,function(e,l,u,d){let y=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[c,m]=(0,s.useState)(!1),{data:{items:p}={items:[]},loading:f}=(0,a.t)(i.A,{variables:{entity:e,entityId:d,category:y,adminId:l},skip:!d}),[g,{isLoading:_}]=(0,r.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),[b]=(0,t.f)(o.p,{refetchQueries:["MEDIAS"]}),h=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{m(!0);let n=[];for(let r of t)if(!r.mediaId){let t,i=await x(r),o=null;if("image"===r.type){let e=i.key,a=i.data.find(e=>"large"===e.name);t=a?a.relativePath:e,o={original:{relativePath:e},thumbnails:i.data||null}}else t=i.key;n.push({entity:e,Medium:{data:{adminId:l,caption:r?.caption??null,extension:r?.media?.name?.split(".").pop(),userId:u,category:a,filename:t,type:r.type,meta:o??void 0}}})}return{Media_Entity:{data:n}}}finally{m(!1)}},x=async e=>{let t,a=new window.FormData;switch(e.media&&a.append("file",e.media,e.media.name),e.type){case"image":t=n.G;break;case"document":case"audio":t=n.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let r=window.localStorage.getItem("bearerToken"),i={};r&&(i.Authorization=`Bearer ${r}`);let o=await window.fetch(t,{method:"POST",body:a,headers:i}),s=await o.json();if(!o.ok)throw Error(s?.message||`Upload failed with status ${o.status}`);return s};return{uploadMedia:async(t,a)=>{try{if(m(!0),a){let n=await x(a),r={adminId:l,caption:a.caption,expiryAt:null,extension:a.media.name.split(".").pop(),userId:u,filename:n.key,type:a.type,Media_Entities:{data:[{entity:e,entityId:t}]}};await b({variables:{objects:r}})}}finally{m(!1)}},uploadMediaToS3:x,createMediaInput:h,deleteMediaByEntity:e=>g({body:{mediaId:e}}),loadingAddMedia:c,loadingDeleteMedia:_,preloadedMediaLoading:f,preloadedMedia:p?.length?p:[]}}])},290516,e=>{var t=e.i(159080);let a=t.f`
  mutation CreateCompliance($data: jsonb!) {
    createCompliance(data: $data) {
      message
    }
  }
`,n=t.f`
  mutation UpdateCompliance($data: jsonb!) {
    updateCompliance(data: $data) {
      message
    }
  }
`;e.s(["R",0,a,"m",0,n])},816037,e=>{e.s(["f",0,(e,t)=>{let a={};for(let n of t)n.stateName&&("fileUpload"===n.type&&(a[n.stateName]=e),"repeatableBlock"===n.type&&t.some(e=>void 0!==e.id&&"fileUpload"===e.type&&!!e.stateName&&n.memberIds?.includes(String(e.id)))&&(a[n.stateName]=e));return{entityId:e,entityIdByStateName:a}}])},247297,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e.r(421506)),i=e.r(391398);a.default=(0,r.default)([(0,i.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42M13 20.01 4 11V4h7v-.01l9 9z"},"0"),(0,i.jsx)("circle",{cx:"6.5",cy:"6.5",r:"1.5"},"1")],"LocalOfferOutlined")},953116,(e,t,a)=>{var n=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(e.r(421506)),i=e.r(391398);a.default=(0,r.default)((0,i.jsx)("path",{d:"M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2m4 1H4V5h2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4z"}),"StorageRounded")}],625106,(e,t,a)=>{t.exports=e.r(689346)(e.r(247663),"DataView")},441298,(e,t,a)=>{t.exports=e.r(689346)(e.r(247663),"Promise")},340682,(e,t,a)=>{t.exports=e.r(689346)(e.r(247663),"Set")},650119,(e,t,a)=>{var n=e.r(933571),r=e.r(729549),i=e.r(630357);function o(e){var t=-1,a=null==e?0:e.length;for(this.__data__=new n;++t<a;)this.add(e[t])}o.prototype.add=o.prototype.push=r,o.prototype.has=i,t.exports=o},278166,(e,t,a)=>{t.exports=e.r(689346)(e.r(247663),"WeakMap")},856408,(e,t,a)=>{t.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,r=0,i=[];++a<n;){var o=e[a];t(o,a,e)&&(i[r++]=o)}return i}},576723,(e,t,a)=>{t.exports=function(e,t){for(var a=-1,n=t.length,r=e.length;++a<n;)e[r+a]=t[a];return e}},297560,(e,t,a)=>{t.exports=function(e,t){for(var a=-1,n=null==e?0:e.length;++a<n;)if(t(e[a],a,e))return!0;return!1}},538916,(e,t,a)=>{var n=e.r(576723),r=e.r(448684);t.exports=function(e,t,a){var i=t(e);return r(e)?i:n(i,a(e))}},190835,(e,t,a)=>{var n=e.r(858056),r=e.r(432836);t.exports=function e(t,a,i,o,s){return t===a||(null!=t&&null!=a&&(r(t)||r(a))?n(t,a,i,o,e,s):t!=t&&a!=a)}},858056,(e,t,a)=>{var n=e.r(698620),r=e.r(536712),i=e.r(317744),o=e.r(804191),s=e.r(268829),l=e.r(448684),u=e.r(613272),d=e.r(75299),y="[object Arguments]",c="[object Array]",m="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(e,t,a,f,g,_){var b=l(e),h=l(t),x=b?c:s(e),v=h?c:s(t);x=x==y?m:x,v=v==y?m:v;var $=x==m,T=v==m,E=x==v;if(E&&u(e)){if(!u(t))return!1;b=!0,$=!1}if(E&&!$)return _||(_=new n),b||d(e)?r(e,t,a,f,g,_):i(e,t,x,a,f,g,_);if(!(1&a)){var j=$&&p.call(e,"__wrapped__"),I=T&&p.call(t,"__wrapped__");if(j||I){var w=j?e.value():e,q=I?t.value():t;return _||(_=new n),g(w,q,a,f,_)}}return!!E&&(_||(_=new n),o(e,t,a,f,g,_))}},758629,(e,t,a)=>{var n=e.r(734274),r=e.r(517059),i=Object.prototype.hasOwnProperty;t.exports=function(e){if(!n(e))return r(e);var t=[];for(var a in Object(e))i.call(e,a)&&"constructor"!=a&&t.push(a);return t}},33483,(e,t,a)=>{t.exports=function(e,t){return e.has(t)}},536712,(e,t,a)=>{var n=e.r(650119),r=e.r(297560),i=e.r(33483);t.exports=function(e,t,a,o,s,l){var u=1&a,d=e.length,y=t.length;if(d!=y&&!(u&&y>d))return!1;var c=l.get(e),m=l.get(t);if(c&&m)return c==t&&m==e;var p=-1,f=!0,g=2&a?new n:void 0;for(l.set(e,t),l.set(t,e);++p<d;){var _=e[p],b=t[p];if(o)var h=u?o(b,_,p,t,e,l):o(_,b,p,e,t,l);if(void 0!==h){if(h)continue;f=!1;break}if(g){if(!r(t,function(e,t){if(!i(g,t)&&(_===e||s(_,e,a,o,l)))return g.push(t)})){f=!1;break}}else if(!(_===b||s(_,b,a,o,l))){f=!1;break}}return l.delete(e),l.delete(t),f}},317744,(e,t,a)=>{var n=e.r(889239),r=e.r(84742),i=e.r(198373),o=e.r(536712),s=e.r(692152),l=e.r(231853),u=n?n.prototype:void 0,d=u?u.valueOf:void 0;t.exports=function(e,t,a,n,u,y,c){switch(a){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!y(new r(e),new r(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var m=s;case"[object Set]":var p=1&n;if(m||(m=l),e.size!=t.size&&!p)break;var f=c.get(e);if(f)return f==t;n|=2,c.set(e,t);var g=o(m(e),m(t),n,u,y,c);return c.delete(e),g;case"[object Symbol]":if(d)return d.call(e)==d.call(t)}return!1}},804191,(e,t,a)=>{var n=e.r(577256),r=Object.prototype.hasOwnProperty;t.exports=function(e,t,a,i,o,s){var l=1&a,u=n(e),d=u.length;if(d!=n(t).length&&!l)return!1;for(var y=d;y--;){var c=u[y];if(!(l?c in t:r.call(t,c)))return!1}var m=s.get(e),p=s.get(t);if(m&&p)return m==t&&p==e;var f=!0;s.set(e,t),s.set(t,e);for(var g=l;++y<d;){var _=e[c=u[y]],b=t[c];if(i)var h=l?i(b,_,c,t,e,s):i(_,b,c,e,t,s);if(!(void 0===h?_===b||o(_,b,a,i,s):h)){f=!1;break}g||(g="constructor"==c)}if(f&&!g){var x=e.constructor,v=t.constructor;x!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof x&&x instanceof x&&"function"==typeof v&&v instanceof v)&&(f=!1)}return s.delete(e),s.delete(t),f}},577256,(e,t,a)=>{var n=e.r(538916),r=e.r(40811),i=e.r(622335);t.exports=function(e){return n(e,i,r)}},40811,(e,t,a)=>{var n=e.r(856408),r=e.r(1107),i=Object.prototype.propertyIsEnumerable,o=Object.getOwnPropertySymbols;t.exports=o?function(e){return null==e?[]:n(o(e=Object(e)),function(t){return i.call(e,t)})}:r},268829,(e,t,a)=>{var n=e.r(625106),r=e.r(696138),i=e.r(441298),o=e.r(340682),s=e.r(278166),l=e.r(912904),u=e.r(742186),d="[object Map]",y="[object Promise]",c="[object Set]",m="[object WeakMap]",p="[object DataView]",f=u(n),g=u(r),_=u(i),b=u(o),h=u(s),x=l;(n&&x(new n(new ArrayBuffer(1)))!=p||r&&x(new r)!=d||i&&x(i.resolve())!=y||o&&x(new o)!=c||s&&x(new s)!=m)&&(x=function(e){var t=l(e),a="[object Object]"==t?e.constructor:void 0,n=a?u(a):"";if(n)switch(n){case f:return p;case g:return d;case _:return y;case b:return c;case h:return m}return t}),t.exports=x},692152,(e,t,a)=>{t.exports=function(e){var t=-1,a=Array(e.size);return e.forEach(function(e,n){a[++t]=[n,e]}),a}},517059,(e,t,a)=>{t.exports=e.r(358705)(Object.keys,Object)},729549,(e,t,a)=>{t.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},630357,(e,t,a)=>{t.exports=function(e){return this.__data__.has(e)}},231853,(e,t,a)=>{t.exports=function(e){var t=-1,a=Array(e.size);return e.forEach(function(e){a[++t]=e}),a}},949125,(e,t,a)=>{var n=e.r(190835);t.exports=function(e,t){return n(e,t)}},622335,(e,t,a)=>{var n=e.r(419188),r=e.r(758629),i=e.r(379858);t.exports=function(e){return i(e)?n(e):r(e)}},1107,(e,t,a)=>{t.exports=function(){return[]}}]);