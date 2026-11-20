(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,122989,e=>{var t=e.i(391398),n=e.i(280445),i=e.i(668921),a=e.i(231637),o=e.i(901004),l=e.i(539117),r=e.i(471973);let s=(0,n.f)(i.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),d=(0,n.f)(a.f)(e=>{let{theme:t,variant:n}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===n&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:n,variant:i,label:a,options:u,value:c,onChange:p,helperText:m,error:y,hideLabel:f,renderOption:x,...b}=e;return(0,t.jsxs)(s,{variant:i,fullWidth:n,error:y,hiddenLabel:f,children:[!f&&(0,t.jsx)(d,{variant:i,children:a}),(0,t.jsx)(l.f,{fullWidth:n,displayEmpty:!0,value:c||"",onChange:p,sx:{position:"relative"},renderValue:()=>{let e=u.find(e=>e.value===c);return e?e.label:""},error:y,...b,children:u.length?u.map(e=>(0,t.jsx)(o.f,{value:e.value,disabled:e.disabled,children:x?x(e):e.label},e.value)):(0,t.jsx)(o.f,{disabled:!0,value:"",children:"No options"})}),m&&(0,t.jsx)(r.f,{error:y,children:m})]})}])},201894,989373,e=>{var t,n=((t={}).ACTIVE="active",t.INACTIVE="inactive",t);e.s(["f",()=>n],989373);let i=[{label:"Active",value:n.ACTIVE},{label:"Inactive",value:n.INACTIVE}];e.s(["h",0,[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"},{label:"Tenant",value:"tenant"}],"d",0,{active:"success",inactive:"danger"},"P",0,i],201894)},694508,2261,e=>{var t,n,i=((t={}).WEEKLY="Weekly",t.MONTHLY="Monthly",t.QUARTERLY="Quarterly",t.EVERY_SIX_MONTH="6 monthly",t.ANNUALLY="Annually",t.EVERY_THREE_YEARS="Every 3 years",t.EVERY_FIVE_YEARS="Every 5 years",t.EVERY_TEN_YEARS="Every 10 years",t),a=((n={}).ACTIVE="active",n.INACTIVE="inactive",n);e.s(["D",()=>i,"N",()=>a],2261);let o=[{label:"Active",value:a.ACTIVE},{label:"Inactive",value:a.INACTIVE}],l=[{label:i.WEEKLY,value:i.WEEKLY},{label:i.MONTHLY,value:i.MONTHLY},{label:i.QUARTERLY,value:i.QUARTERLY},{label:i.EVERY_SIX_MONTH,value:i.EVERY_SIX_MONTH},{label:i.ANNUALLY,value:i.ANNUALLY},{label:i.EVERY_THREE_YEARS,value:i.EVERY_THREE_YEARS},{label:i.EVERY_FIVE_YEARS,value:i.EVERY_FIVE_YEARS},{label:i.EVERY_TEN_YEARS,value:i.EVERY_TEN_YEARS}];e.s(["X",0,l,"d",0,{active:"success",inactive:"danger"},"G",0,o],694508)},952859,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(246896),a=e.i(886779),o=e.i(680596),l=e.i(751107),r=e.i(821627),s=e.i(356119),d=e.i(917563);let u={color:"secondary.main",borderColor:"secondary.main","&:hover":{color:"secondary.dark",backgroundColor:"transparent"}};e.s(["f",0,e=>{let{open:c,onClose:p,onAccept:m=p,onCancel:y=p,type:f}=e,[x,b]=(0,n.useState)(!1),h=(0,n.useRef)(!1),v=e=>async()=>{if(!h.current){h.current=!0,b(!0);try{await e()}finally{h.current=!1,b(!1)}}},_={draft:{title:"Are you sure you want to move this form to Draft?",content:"It will become available for selection in tasks and work orders.",cancelAction:"Cancel",okAction:"Move to draft"},publish:{title:"Are you sure you want to publish this form?",content:"It will become available for selection in tasks and work orders.",cancelAction:"Cancel",okAction:"Publish form"},applyToIncomplete:{title:"Apply to incomplete jobs?",content:"Do you want to apply this new template to all incomplete jobs and tasks?",dismissAction:"Keep editing",cancelAction:"Save only",okAction:"Save and apply",cancelSaves:!0},applyToNew:{title:"Apply new template",content:"Please note that these changes will only be applied to new jobs created using this template.",okAction:"Ok"},draftApplyToIncomplete:{title:"Save as a draft?",content:"This form is a draft. Publish it to add it to jobs and tasks.",cancelAction:"Keep editing",okAction:"Save draft"}};return(0,t.jsx)(i.f,{open:c,onClose:()=>!h.current&&p(),PaperProps:{sx:{borderRadius:"8px",overflow:"hidden",width:"421px",maxWidth:"421px",height:"239px",display:"flex",alignItems:"center",justifyContent:"center",margin:0,position:"relative"}},slotProps:{backdrop:{sx:{backgroundColor:"transparent"}}},children:(0,t.jsxs)(d.f,{sx:{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column"},children:[(0,t.jsx)(d.f,{sx:{position:"absolute",top:0,left:0,right:0,backgroundColor:"#2673CA",color:"#ffffff",textAlign:"center",fontSize:"12px",display:"flex",justifyContent:"center",alignItems:"center",height:"64px"},children:(0,t.jsx)(s.f,{align:"center",sx:{fontSize:"15px",justifyContent:"center"},children:_[f].title})}),(0,t.jsx)(l.f,{sx:{display:"flex",justifyContent:"center",padding:0,paddingTop:"74px",flexGrow:1},children:(0,t.jsx)(s.f,{align:"center",alignContent:"center",sx:{fontSize:"14px",maxWidth:"320px",lineHeight:1.57},children:_[f].content})}),(0,t.jsx)(o.f,{sx:{display:"flex",justifyContent:"center",padding:0,marginTop:"10px",paddingBottom:"10px"},children:(0,t.jsxs)(a.f,{direction:"row",justifyContent:"center",sx:{display:"flex",gap:"12px"},children:[_[f]?.dismissAction&&(0,t.jsx)(r.f,{variant:"text",size:"small",disabled:x,onClick:v(p),sx:{height:"36px",minHeight:"36px",paddingInline:"16px",color:"text.secondary",marginLeft:"0 !important"},children:_[f].dismissAction}),_[f]?.cancelAction&&(0,t.jsx)(r.f,{color:"secondary",variant:_[f].cancelSaves?"outlined":"contained",size:"small",disabled:x,onClick:v(y),sx:{height:"36px",minHeight:"36px",paddingInline:"24px",color:"#000000",backgroundColor:"transparent",justifyContent:"center",alignItems:"center",boxShadow:"none",border:"1px solid #9C9C9C",borderRadius:"4px",marginLeft:"0 !important","&:hover":{color:"#919191",backgroundColor:"transparent"},..._[f].cancelSaves&&u},children:_[f].cancelAction}),(0,t.jsx)(r.f,{color:"secondary",variant:"contained",size:"small",disabled:x,onClick:v(m),sx:{height:"36px",minHeight:"36px",paddingInline:"24px",color:"F5F5F5",backgroundColor:"#1565C0",justifyContent:"center",alignItems:"center",boxShadow:"none",borderRadius:"4px","&:hover":{color:"F5F5F5",backgroundColor:"#1565C0"}},children:_[f].okAction})]})})]})})}])},865568,e=>{var t=e.i(159080);let n=t.f`
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
`,i=t.f`
  query GetTaxonomySelectOptions(
    $q: String
    $orderBy: Taxonomy_order_by!
    $status: String = "active"
    $type: String
    $parentId: Int
    $id: Int
    $isGroup: Boolean = false
  ) {
    taxonomy: Taxonomy(
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
          meta: clientMeta
          status
        }
      }
      id
      name
      meta: clientMeta
      childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {
        taxonomyId: id
        name
        type
        meta: clientMeta
        status
      }
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
`,t.f`
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
`,e.s(["N",0,n,"g",0,i])},955811,e=>{var t=e.i(159080);e.i(865568);let n=t.f`
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
`,i=t.f`
  query GeTaxonomyWithEntities($type: String!, $entity: String!, $entityId: Int!) {
    questions: Taxonomy(where: { type: { _eq: $type } }) {
      id
      meta: clientMeta
      name
      status
      taxonomy_entity: Taxonomy_Entities(
        where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }
      ) {
        comments
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
`,e.s(["v",0,n,"o",0,i])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},290516,e=>{var t=e.i(159080);let n=t.f`
  mutation CreateCompliance($data: jsonb!) {
    createCompliance(data: $data) {
      id
      message
    }
  }
`,i=t.f`
  mutation UpdateCompliance($data: jsonb!) {
    updateCompliance(data: $data) {
      message
    }
  }
`;e.s(["R",0,n,"m",0,i])},695567,e=>{var t=e.i(320861);e.s(["f",0,e=>{let{subtype:n,slas:i=[],customerSlas:a=[],locationSlas:o=[]}=e;return i.filter(e=>e.subtype===n).map(e=>{let n=o?.find(t=>t.slaId===e.id&&t.inUse),i=a?.find(t=>t.slaId===e.id&&t.inUse),l=n?.notes||i?.notes,r=(0,t.H)({time:n?.onSite,unit:n?.onSiteUnit},{time:i?.onSite,unit:i?.onSiteUnit},{time:e.onSite,unit:e.onSiteUnit}),s=(0,t.H)({time:n?.jobReport,unit:n?.jobReportUnit},{time:i?.jobReport,unit:i?.jobReportUnit},{time:e.jobReport,unit:e.jobReportUnit}),d=(0,t.H)({time:n?.quoteReturned,unit:n?.quoteReturnedUnit},{time:i?.quoteReturned,unit:i?.quoteReturnedUnit},{time:e.quoteReturned,unit:e.quoteReturnedUnit});return{id:e.id,label:e.label,value:e.id,notes:l||e.notes,onSite:r.time,onSiteUnit:r.unit,jobReport:s.time,jobReportUnit:s.unit,quoteReturned:d.time,quoteReturnedUnit:d.unit,disabled:!!(o?.find(t=>t.slaId===e.id&&!t.inUse)||a?.find(t=>t.slaId===e.id&&!t.inUse))}})}])},984933,e=>{var t=e.i(877341),n=e.i(851123),i=e.i(191788);e.s(["f",0,()=>{let[e,a]=(0,i.useState)(""),[o,{data:{items:l}={items:[]},loading:r}]=(0,t.f)(n.d,{variables:{q:""!==e?`%${e}%`:null}});return{loading:r,options:l,onSearchChange:a,onOpen:()=>o()}}])},320861,e=>{let t=["minutes","hours","days"],n=e=>e?"n/a"===e.unit?{time:null,unit:"n/a"}:null!=e.time||e.unit?{time:e.time??null,unit:e.unit??null}:null:null;e.s(["b",0,t,"F",0,"n/a","u",0,(e,t)=>"n/a"===t?"N/A":null!=e&&t?`${e} ${t}`:"-","p",0,e=>t.some(t=>t===e),"L",0,e=>"n/a"===e,"r",0,(e,t)=>"n/a"===t?{time:null,unit:"n/a"}:{time:e??null,unit:t??null},"H",0,(e,t,i)=>n(e)??n(t)??n(i)??{time:null,unit:null},"c",0,[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"},{label:"N/A",value:"n/a"}]])},667808,e=>{var t=e.i(877341),n=e.i(851123),i=e.i(191788);e.s(["f",0,()=>{let[e,a]=(0,i.useState)(""),[o,{data:{items:l}={items:[]},loading:r}]=(0,t.f)(n.D,{variables:{q:""!==e?`%${e}%`:null}});return{loading:r,options:l,onSearchChange:a,onOpen:()=>o()}}])},246896,680596,751107,e=>{var t=e.i(382161);e.s(["f",()=>t.f],246896);var n=e.i(77052);e.s(["f",()=>n.f],680596);var i=e.i(185758);e.s(["f",()=>i.f],751107)},76753,e=>{var t=e.i(464107);e.s(["f",()=>t.f])}])})();