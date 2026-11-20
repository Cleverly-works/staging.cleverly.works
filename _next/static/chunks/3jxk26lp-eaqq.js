(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[122989,e=>{var t=e.i(391398),i=e.i(280445),n=e.i(668921),o=e.i(231637),r=e.i(901004),a=e.i(539117),s=e.i(471973);let l=(0,i.f)(n.f)(()=>({"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start"}})),u=(0,i.f)(o.f)(e=>{let{theme:t,variant:i}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main},..."outlined"===i&&{backgroundColor:"#fff",padding:"2px 6px 0",marginLeft:"-5px"}}});e.s(["f",0,e=>{let{fullWidth:i,variant:n,label:o,options:d,value:c,onChange:m,helperText:p,error:f,hideLabel:h,renderOption:b,...j}=e;return(0,t.jsxs)(l,{variant:n,fullWidth:i,error:f,hiddenLabel:h,children:[!h&&(0,t.jsx)(u,{variant:n,children:o}),(0,t.jsx)(a.f,{fullWidth:i,displayEmpty:!0,value:c||"",onChange:m,sx:{position:"relative"},renderValue:()=>{let e=d.find(e=>e.value===c);return e?e.label:""},error:f,...j,children:d.length?d.map(e=>(0,t.jsx)(r.f,{value:e.value,disabled:e.disabled,children:b?b(e):e.label},e.value)):(0,t.jsx)(r.f,{disabled:!0,value:"",children:"No options"})}),p&&(0,t.jsx)(s.f,{error:f,children:p})]})}])},239964,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(691567),o=e.i(773831),r=e.i(33670),a=e.i(901004),s=e.i(509790),l=e.i(692113),u=e.i(137995),d=e.i(817581),c=e.i(420),m=e.i(870307),p=e.i(407329),f=e.i(390536),h=e.i(978319),b=e.i(376733),j=e.i(13558),x=e.i(562673),v=e.i(339909),y=e.i(89029),R=e.i(129503),S=e.i(213419),g=e.i(12028),U=e.i(813843),q=e.i(115871);let w={add:(0,t.jsx)(d.default,{}),archive:(0,t.jsx)(l.default,{}),avatar:(0,t.jsx)(g.default,{}),check:(0,t.jsx)(c.default,{}),clock:(0,t.jsx)(m.default,{}),delete:(0,t.jsx)(h.default,{}),description:(0,t.jsx)(p.default,{}),download:(0,t.jsx)(f.default,{}),info:(0,t.jsx)(j.default,{}),edit:(0,t.jsx)(b.default,{}),location:(0,t.jsx)(y.default,{}),unarchive:(0,t.jsx)(u.default,{}),uploadFile:(0,t.jsx)(x.default,{}),receipt:(0,t.jsx)(v.default,{}),visibility:(0,t.jsx)(S.default,{})},_={default:(0,t.jsx)(s.default,{}),defaultHoriz:(0,t.jsx)(R.default,{}),description:(0,t.jsx)(p.default,{})},C=()=>[{disabled:!1,onClick:()=>{},icon:"edit",tooltip:"Edit"}],$=e=>{let{actionsData:n=C,icon:s="default",row:l,disabled:u=!1}=e,[d,c]=(0,i.useState)(null),m=()=>{c(null)};return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.f,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:u,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:e=>{e.stopPropagation(),c(e.currentTarget)},children:_[s]}),(0,t.jsx)(r.f,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:!!d,onClose:m,onClick:e=>e.stopPropagation(),slotProps:{paper:{sx:{borderRadius:2,margin:"0 !important",padding:"0 !important"}}},children:n(l).map((e,i)=>(0,t.jsx)(a.f,{disabled:e.disabled,onClick:t=>{e.onClick(t),m()},sx:{pl:3,pr:4},children:(0,t.jsxs)(U.f,{direction:"row",alignItems:"center",spacing:2,children:[w?.[e.icon]||null,(0,t.jsx)(q.f,{children:e.tooltip})]})},i))})]})};$.propTypes={actionsData:n.default.func,icon:n.default.oneOf(["default","description"]),row:n.default.any.isRequired,disabled:n.default.bool},e.s(["f",0,$])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},765099,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(432171),o=e.i(776204),r=e.i(159080);let a=r.f`
  query GetSlas(
    $subtype: sla_subtype
    $entity: String
    $entityId: Int
    $isEntity: Boolean!
    $isLocation: Boolean!
    $customerId: Int
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: SLA_order_by!
  ) {
    slas: SLA(
      limit: $limit
      offset: $offset
      where: { subtype: { _eq: $subtype }, name: { _ilike: $q } }
      order_by: [$orderBy]
    ) {
      id
      subtype
      name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
      customerSla: SLA_Entities(
        where: { entity: { _eq: "Account" }, entityId: { _eq: $customerId } }
      ) @include(if: $isLocation) {
        status
        id
        entity
        entityId
        quoteReturned
        quoteReturnedUnit
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
      }
      entities: SLA_Entities(
        where: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }
        order_by: { slaId: asc }
      ) @include(if: $isEntity) {
        status
        id
        entity
        entityId
        quoteReturned
        quoteReturnedUnit
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
      }
    }
    meta: SLA_aggregate(where: { subtype: { _eq: $subtype }, name: { _ilike: $q } }) {
      aggregate {
        totalCount: count
      }
    }
  }
`,s=r.f`
  query GetSla($id: Int!) {
    sla: SLA_by_pk(id: $id) {
      id
      subtype
      name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
    }
  }
`,l=r.f`
  mutation AddSla($objects: [SLA_insert_input!]!) {
    insert_SLA(objects: $objects) {
      returning {
        id
      }
    }
  }
`,u=r.f`
  mutation UpdateSla($id: Int!, $changes: SLA_set_input) {
    update_SLA_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,d=r.f`
  query GetSlaEntity($id: Int!, $slaEntityId: Int, $hasEntity: Boolean!) {
    sla: SLA_by_pk(id: $id) {
      id
      subtype
      name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      slaEntity: SLA_Entities(where: { id: { _eq: $slaEntityId } }) @include(if: $hasEntity) {
        id
        notes
        normalRate
        oohRate
        premiumRate
        minimumInterval
        minimumLength
        quoteReturned
        quoteReturnedUnit
        onSite
        onSiteUnit
        jobReport
        jobReportUnit
        completion
        completionUnit
        status
      }
    }
  }
`,c=r.f`
  mutation addSla($objects: [SLA_Entity_insert_input!]!) {
    insert_SLA_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,m=r.f`
  mutation UpdateSla($id: Int!, $changes: SLA_Entity_set_input) {
    update_SLA_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;var p=e.i(98762),f=e.i(936641),h=e.i(755548),b=e.i(88152),j=e.i(813843),x=e.i(4142),v=e.i(115871),y=e.i(890854),R=e.i(411331),S=e.i(239964),g=e.i(594301),U=e.i(320861),q=e.i(21557),w=e.i(422411),_=e.i(424894),C=e.i(426778);let $=[...U.b,U.F],I=(e,t)=>(0,C.H)().nullable().transform((e,t)=>""===t||Number.isNaN(e)?null:e).when(["$subtype",t],(t,i)=>{let n=t[0],o=t[1];return n!==e||o===U.F?i.nullable():i.min(0).required()}),L=e=>(0,C.x)().nullable().when("$subtype",{is:t=>t===e,then:e=>e.oneOf([...$]).required(),otherwise:e=>e.nullable()}),E=(0,C.t)().shape({name:(0,C.x)().required(),status:(0,C.x)().oneOf(["active","inactive"]).required(),isDefault:(0,C.g)(),notes:(0,C.x)(),onSite:I("reactive","onSiteUnit"),onSiteUnit:L("reactive"),jobReport:I("reactive","jobReportUnit"),jobReportUnit:L("reactive"),completion:I("reactive","completionUnit"),completionUnit:L("reactive"),quoteReturned:I("quote","quoteReturnedUnit"),quoteReturnedUnit:L("quote")}),A=(0,C.t)().shape({status:(0,C.x)().oneOf(["active","inactive"]).required(),notes:(0,C.x)(),onSite:I("reactive","onSiteUnit"),onSiteUnit:L("reactive"),jobReport:I("reactive","jobReportUnit"),jobReportUnit:L("reactive"),completion:I("reactive","completionUnit"),completionUnit:L("reactive"),quoteReturned:I("quote","quoteReturnedUnit"),quoteReturnedUnit:L("quote")}),k=(e,t,i)=>{if("quote"===t){let n=(0,U.r)(e.quoteReturned,e.quoteReturnedUnit);return{type:"priority",subtype:t,name:e.name,status:e.status,notes:e.notes,quoteReturned:n.time,quoteReturnedUnit:n.unit,adminId:i}}let n=(0,U.r)(e.onSite,e.onSiteUnit),o=(0,U.r)(e.jobReport,e.jobReportUnit),r=(0,U.r)(e.completion,e.completionUnit);return{type:"priority",subtype:t,name:e.name,status:e.status,notes:e.notes,isDefault:e.isDefault,normalRate:0,oohRate:0,premiumRate:0,onSite:n.time,onSiteUnit:n.unit,jobReport:o.time,jobReportUnit:o.unit,completion:r.time,completionUnit:r.unit,adminId:i}};var N=e.i(207646),T=e.i(76381),P=e.i(652148),D=e.i(152078),W=e.i(122989),F=e.i(740790),G=e.i(799083),H=e.i(587369);let M="The deadline for the job to be marked as in progress, either by starting the timer or manually updating the job’s start time.",O="The deadline for the job report to be sent to the customer after the job has been marked as completed.";var Q=e.i(471973),B=e.i(813762);let z=e=>{let{name:i,nameUnit:n,label:o,tooltip:r,control:a,register:s,errors:l,setValue:u,watch:d}=e,c=d(n),m=d(i),p=c===U.F,f=!p&&""!==m&&null!=m&&0===Number(m);return(0,t.jsxs)(j.f,{children:[(0,t.jsxs)(v.f,{sx:V.title,children:[o,r&&(0,t.jsx)(B.p,{title:r,iconSx:{fontSize:16}})]}),(0,t.jsxs)(j.f,{direction:"row",spacing:1,alignItems:"flex-end",children:[(0,t.jsx)(j.f,{marginBottom:1,children:(0,t.jsx)(P.f,{name:i,inputRef:s,type:"number",variant:"standard",color:"secondary",disabled:p,inputProps:{min:0},error:!!l[i]})}),(0,t.jsx)(w.e,{name:n,control:a,render:e=>{let{value:o,onChange:r}=e;return(0,t.jsx)(W.f,{value:o||"",onChange:e=>{let t=e.target.value;r(t),t===U.F&&u(i,null)},options:[...U.c],label:"Unit",fullWidth:!0,variant:"standard",color:"secondary",error:!!l[n]})}})]}),f&&(0,t.jsx)(Q.f,{children:"Choosing 0 means that action must be taken immediately or the SLA is breached. If you would like there to be no time limits associated with SLA breaches, please choose N/A."})]})},V={title:{fontSize:"16px",fontWeight:300,marginBottom:"5px",color:"gray",display:"flex",alignItems:"center",gap:1}},J=e=>{let{id:i,subtype:r,isEntity:a,close:d=()=>{},slas:c}=e,{user:m}=(0,g.f)(),p=(0,q.f)(),f=(0,H.f)("(max-width: 1200px)"),{control:h,handleSubmit:b,reset:x,register:y,errors:R,watch:S,setValue:U}=(0,w.G)({defaultValues:{status:"active"},context:{subtype:r},resolver:(0,_.yupResolver)(E)}),{loading:C}=(0,n.t)(s,{skip:!i,variables:{id:i},onCompleted:function(){let{sla:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{sla:null};e&&x(e)}}),[$,{loading:I}]=(0,o.f)(l,{refetchQueries:["GetSla","GetSlas"],onCompleted:()=>{p.show({content:"SLA created successfully."}),d&&d()},onError:e=>{p.show({content:`Error:${e.message}`})}}),[L,{loading:A}]=(0,o.f)(u,{refetchQueries:["GetSla","GetSlas"],onCompleted:()=>{p.show({content:"SLA updated successfully."}),d&&d()},onError:e=>{p.show({content:`Error:${e.message}`})}}),Q=async e=>{let t=c.find(e=>{let{isDefault:t}=e;return t})??null;t&&L({variables:{id:t.id,changes:{...k(t,"reactive",m.adminId),isDefault:!1}}}),i?await L({variables:{id:i,changes:k(e,r,m.adminId)}}):await $({variables:{objects:[k(e,r,m.adminId)]}})};if(C||I||A)return(0,t.jsx)(j.f,{alignItems:"center",children:(0,t.jsx)(T.f,{color:"secondary"})});let B=(e,i,n,o)=>(0,t.jsx)(z,{name:e,nameUnit:i,label:n,tooltip:o,control:h,register:y,errors:R,setValue:U,watch:S});return"quote"===r?(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:b(Q),children:(0,t.jsxs)(j.f,{gap:3,children:[(0,t.jsxs)(F.f,{container:!0,alignItems:"flex-start",spacing:2,children:[(0,t.jsx)(F.f,{item:!0,xs:12,md:4,children:(0,t.jsx)(j.f,{spacing:2,children:(0,t.jsx)(P.f,{inputRef:y,name:"name",label:"Priority name",variant:"standard",color:"secondary",fullWidth:!0,error:!!R.name})})}),(0,t.jsx)(F.f,{item:!0,xs:12,md:8,children:(0,t.jsx)(j.f,{spacing:2,children:(0,t.jsx)(P.f,{inputRef:y,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0})})})]}),(0,t.jsx)(v.f,{variant:"h6",children:"Timings"}),B("quoteReturned","quoteReturnedUnit","Quote returned","This is the time by which the quote should have been completed and sent to the customer."),(0,t.jsx)(w.e,{name:"status",control:h,render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(W.f,{value:i||"",onChange:n,options:N.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:b(Q),children:(0,t.jsxs)(j.f,{gap:3,children:[(0,t.jsxs)(F.f,{container:!0,alignItems:"flex-start",spacing:2,children:[(0,t.jsx)(F.f,{item:!0,xs:12,md:4,height:"100%",children:(0,t.jsx)(j.f,{children:(0,t.jsx)(P.f,{inputRef:y,name:"name",label:"Priority name",variant:"standard",color:"secondary",fullWidth:!0,error:!!R.name,InputLabelProps:{shrink:!0}})})}),(0,t.jsx)(F.f,{item:!0,xs:12,md:8,children:(0,t.jsx)(j.f,{spacing:2,children:(0,t.jsx)(P.f,{inputRef:y,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0,InputLabelProps:{shrink:!0}})})})]}),!a&&(0,t.jsx)(w.e,{control:h,name:"isDefault",render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(D.f,{label:"Select as default SLA",sx:{userSelect:"none"},control:(0,t.jsx)(G.f,{checked:!!i,color:"secondary",onChange:e=>n(e.target?.checked)})})}}),(0,t.jsx)(v.f,{variant:"h6",children:"Timings"}),(0,t.jsxs)(j.f,{gap:f?3:1,direction:f?"column":"row",justifyContent:f?"flex-start":"space-between",children:[B("onSite","onSiteUnit","On site",M),B("jobReport","jobReportUnit","Job report",O),B("completion","completionUnit","Completion",`This is the time by which the job should be completed,
              defined as the report having been sent & the job is currently not
              in progress or on hold.`)]}),(0,t.jsx)(w.e,{name:"status",control:h,render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(W.f,{value:i||"",onChange:n,options:N.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})})};var X=e.i(706692);let K=e=>{let{subtype:r,id:a,slaEntityId:s,entity:l,entityId:u,close:p=()=>{}}=e,f=(0,q.f)(),h=(0,X.f)("(max-width: 1200px)"),{control:b,handleSubmit:x,reset:y,register:R,errors:S,watch:g,setValue:C}=(0,w.G)({defaultValues:{status:"active"},context:{subtype:r},resolver:(0,_.yupResolver)(A)}),{data:{sla:$}={sla:{}},loading:I}=(0,n.t)(d,{variables:{id:a,slaEntityId:s,hasEntity:!!s}});(0,i.useEffect)(()=>{s&&$.slaEntity?.[0]&&y($.slaEntity[0])},[y,$,s]);let[L,{loading:E}]=(0,o.f)(c,{refetchQueries:["GetSlaEntity","GetSlas"],onCompleted:()=>{f.show({content:"SLA entity created successfully."}),p&&p()},onError:e=>{f.show({content:`Error:${e.message}`})}}),[k,{loading:D}]=(0,o.f)(m,{refetchQueries:["GetSlaEntity","GetSlas"],onCompleted:()=>{f.show({content:"SLA entity updated successfully."}),p&&p()},onError:e=>{f.show({content:`Error:${e.message}`})}}),F=async e=>{let t=((e,t)=>{if("quote"===t){let t=(0,U.r)(e.quoteReturned,e.quoteReturnedUnit);return{inUse:"active"===e.status,status:e.status,notes:e.notes,quoteReturned:t.time,quoteReturnedUnit:t.unit}}let i=(0,U.r)(e.onSite,e.onSiteUnit),n=(0,U.r)(e.jobReport,e.jobReportUnit),o=(0,U.r)(e.completion,e.completionUnit);return{inUse:"active"===e.status,status:e.status,notes:e.notes,normalRate:0,oohRate:0,premiumRate:0,onSite:i.time,onSiteUnit:i.unit,jobReport:n.time,jobReportUnit:n.unit,completion:o.time,completionUnit:o.unit}})(e,r);s?await k({variables:{id:s,changes:t}}):await L({variables:{objects:[{...t,slaId:a,entity:l,entityId:u}]}})};if(I||E||D)return(0,t.jsx)(j.f,{alignItems:"center",children:(0,t.jsx)(T.f,{color:"secondary"})});let G=(e,i,n,o)=>(0,t.jsx)(z,{name:e,nameUnit:i,label:n,tooltip:o,control:b,register:R,errors:S,setValue:C,watch:g});return"quote"===r?(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:x(F),children:(0,t.jsxs)(j.f,{spacing:3,children:[(0,t.jsx)(v.f,{variant:"h5",children:`SLA: ${$.name}`}),(0,t.jsx)(P.f,{inputRef:R,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0}),(0,t.jsx)(v.f,{variant:"h6",children:"Timings"}),G("quoteReturned","quoteReturnedUnit","Quote returned","This is the time by which the quote should have been completed and sent to the customer."),(0,t.jsx)(w.e,{name:"status",control:b,render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(W.f,{value:i||"",onChange:n,options:N.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:x(F),children:(0,t.jsxs)(j.f,{spacing:3,children:[(0,t.jsx)(v.f,{variant:"h5",children:`SLA: ${$.name}`}),(0,t.jsx)(P.f,{inputRef:R,name:"notes",label:"Text description",variant:"standard",color:"secondary",fullWidth:!0}),(0,t.jsx)(v.f,{variant:"h6",children:"Timings"}),(0,t.jsxs)(j.f,{gap:h?3:1,direction:h?"column":"row",justifyContent:h?"flex-start":"space-between",children:[G("onSite","onSiteUnit","On site",M),G("jobReport","jobReportUnit","Job report",O),G("completion","completionUnit","Completion",`This is the time by which the job should be completed,
              defined as the report having been sent & the job is currently not
              in progress or on hold.`)]}),(0,t.jsx)(w.e,{name:"status",control:b,render:e=>{let{value:i,onChange:n}=e;return(0,t.jsx)(W.f,{value:i||"",onChange:n,options:N.f,label:"Status",fullWidth:!0,variant:"standard",color:"secondary"})}})]})})},Y={item:"name",order:"asc"};e.s(["f",0,e=>{let{title:r,subtype:s,isEntity:l=!1,isLocation:u=!1,customerId:d,entity:w,entityId:_,tableHeight:C="calc(100% - 32px)",containerHeight:$="calc(100vh - 100px)"}=e,I=(0,q.f)(),L=(0,R.f)(),{hasRole:E}=(0,g.f)(),A=E("admin"),{initialData:k,ref:N}=(0,p.f)({filters:{},initialSort:Y}),{data:{slas:T,meta:P}={slas:[],meta:{aggregate:{totalCount:0}}},loading:D,refetch:W}=(0,n.t)(a,{variables:{...k,subtype:s,isEntity:l,isLocation:u,customerId:d,entity:w,entityId:_}}),[F,{loading:G}]=(0,o.f)(c,{refetchQueries:["GetSlas"],onError:e=>{I.show({content:`Error:${e.message}`})}}),[H,{loading:Q}]=(0,o.f)(m,{refetchQueries:["GetSlas"],onError:e=>{I.show({content:`Error:${e.message}`})}}),z=(0,i.useCallback)((e,i)=>{i&&i.stopPropagation(),l&&w&&_?L.show({content:(0,t.jsx)(K,{subtype:s,id:e.id,slaEntityId:e.entity?.id,entity:w,entityId:_,close:L.close}),title:"Edit SLA & Priority level",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"}):L.show({content:(0,t.jsx)(J,{subtype:s,id:e.id,isEntity:l,close:L.close,slas:T}),title:"Edit SLA & Priority level",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"})},[w,_,l,L,s,T]),V=(0,i.useCallback)(e=>[{icon:"edit",onClick:t=>{t.stopPropagation(),z(e)},tooltip:"Edit"}],[z]),X=(0,i.useCallback)(async(e,t,i)=>{e.stopPropagation();let n=i.entity,o=(e=>{let{row:t,item:i,subtype:n,checked:o}=e;if("quote"===n){let e=(0,U.r)(i?.quoteReturnedUnit===U.F?null:i?.quoteReturned??t.quoteReturned,i?.quoteReturnedUnit||t.quoteReturnedUnit);return{inUse:o,status:o?"active":"inactive",notes:i?.notes||t.notes,quoteReturned:e.time,quoteReturnedUnit:e.unit}}let r=(0,U.r)(i?.onSiteUnit===U.F?null:i?.onSite??t.onSite,i?.onSiteUnit||t.onSiteUnit),a=(0,U.r)(i?.jobReportUnit===U.F?null:i?.jobReport??t.jobReport,i?.jobReportUnit||t.jobReportUnit),s=(0,U.r)(i?.completionUnit===U.F?null:i?.completion??t.completion,i?.completionUnit||t.completionUnit);return{inUse:o,status:o?"active":"inactive",notes:i?.notes||t.notes,normalRate:0,oohRate:0,premiumRate:0,onSite:r.time,onSiteUnit:r.unit,jobReport:a.time,jobReportUnit:a.unit,completion:s.time,completionUnit:s.unit}})({row:i,item:n,subtype:s,entity:w,entityId:_,checked:t});n?await H({variables:{id:n.id,changes:o}}):await F({variables:{objects:[{...o,slaId:i.id,entity:w,entityId:_}]}})},[F,w,_,s,H]),Z=(0,i.useCallback)(e=>{let{row:i}=e,n="boolean"!=typeof i.entity?.inUse||i.entity?.inUse,o=!!u&&!i.customerEntity?.[0]?.inUse;return(0,t.jsx)(x.f,{color:"secondary",disabled:o,checked:n,onChange:(e,t)=>X(e,t,i)})},[X,u]),ee=(0,i.useMemo)(()=>[{flex:1,field:"name",headerName:"Name"},{flex:1,headerName:"Is default SLA",field:"isDefault",valueFormatter:e=>e?"Yes":"No"},{flex:1,field:"inUse",headerName:"In use",renderCell:Z},{flex:1,field:"quoteReturned",headerName:"Quote returned",renderCell:e=>{let{row:t}=e;return(0,U.u)(t.quoteReturned,t.quoteReturnedUnit)}},{flex:1,minWidth:140,field:"onSite",headerName:"On site",sortable:!1,renderHeader:e=>{let{colDef:i}=e;return(0,t.jsxs)(j.f,{direction:"row",alignItems:"center",spacing:.5,children:[(0,t.jsx)(v.f,{fontWeight:"bold",children:i.headerName}),(0,t.jsx)(B.p,{title:M,iconSx:{fontSize:16,color:"action.active"}})]})},renderCell:e=>{let{row:t}=e;return(0,U.u)(t.onSite,t.onSiteUnit)}},{flex:1,minWidth:140,field:"jobReport",headerName:"Job report",sortable:!1,renderHeader:e=>{let{colDef:i}=e;return(0,t.jsxs)(j.f,{direction:"row",alignItems:"center",spacing:.5,children:[(0,t.jsx)(v.f,{fontWeight:"bold",children:i.headerName}),(0,t.jsx)(B.p,{title:O,iconSx:{fontSize:16,color:"action.active"}})]})},renderCell:e=>{let{row:t}=e;return(0,U.u)(t.jobReport,t.jobReportUnit)}},{flex:1,field:"completion",headerName:"Completion",sortable:!1,renderCell:e=>{let{row:t}=e;return(0,U.u)(t.completion,t.completionUnit)}},{flex:1,field:"status",headerName:"Status",sortable:!1},{flex:1,field:"notes",headerName:"Notes",sortable:!1},{width:80,field:"actions",headerName:"Actions",sortable:!1,renderCell:e=>{let{row:i}=e,n=!!u&&!i.customerEntity?.[0]?.inUse;return(0,t.jsx)(S.f,{disabled:n,row:i,actionsData:V})}}],[V,u,Z]),et=(0,i.useMemo)(()=>T.map(e=>{if(l&&e.entities?.[0]){let t=e.entities[0];return{id:e.id,name:e.name,quoteReturned:t.quoteReturned,quoteReturnedUnit:t.quoteReturnedUnit,onSite:t.onSite,onSiteUnit:t.onSiteUnit,jobReport:t.jobReport,jobReportUnit:t.jobReportUnit,completion:t.completion,completionUnit:t.completionUnit,status:t.status,notes:t.notes||"-",entity:t,customerEntity:e.customerSla,actions:""}}let t=e.customerSla?.[0],i=(0,U.H)(void 0,{time:t?.quoteReturned,unit:t?.quoteReturnedUnit},{time:e.quoteReturned,unit:e.quoteReturnedUnit}),n=(0,U.H)(void 0,{time:t?.onSite,unit:t?.onSiteUnit},{time:e.onSite,unit:e.onSiteUnit}),o=(0,U.H)(void 0,{time:t?.jobReport,unit:t?.jobReportUnit},{time:e.jobReport,unit:e.jobReportUnit}),r=(0,U.H)(void 0,{time:t?.completion,unit:t?.completionUnit},{time:e.completion,unit:e.completionUnit});return{id:e.id,name:e.name,quoteReturned:i.time,quoteReturnedUnit:i.unit,onSite:n.time,onSiteUnit:n.unit,jobReport:o.time,jobReportUnit:o.unit,completion:r.time,completionUnit:r.unit,status:t?.status||e.status,notes:t?.notes||e.notes||"-",entity:null,customerEntity:e.customerSla,actions:"",isDefault:e.isDefault}}),[l,T]);return(0,t.jsxs)(b.f,{sx:{paddingTop:"16px",paddingBottom:"16px",height:$},children:[u&&(0,t.jsx)(f.f,{color:"info",variant:"filled",sx:{ml:2,mr:2,mb:2},children:"In order to set up location SLAs, you must first add or confirm the appropriate customer SLA for that priority level."}),(0,t.jsxs)(j.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(v.f,{ml:2,variant:"h5",sx:{fontWeight:600},children:r}),!l&&(0,t.jsx)(h.f,{sx:{mr:2},variant:"contained",color:"secondary",onClick:e=>{e.stopPropagation(),L.show({content:(0,t.jsx)(J,{subtype:s,close:L.close,slas:T}),title:"Create priority level & SLA",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"50vw",md2:"50vw",lg:"50vw",lg2:"50vw"})},children:"Create SLA"})]}),(0,t.jsx)(y.f,{autoHeight:!1,loading:D||G||Q,ref:N,columns:ee,rows:et,meta:P,refetch:W,initialSort:Y,containerHeight:C,columnVisibilityModel:{name:!0,isDefault:!l&&"reactive"===s,inUse:A&&l,quoteReturned:"quote"===s,onSite:"reactive"===s,jobReport:"reactive"===s,completion:"reactive"===s,status:l,notes:!0,actions:A}})]})}],765099)},320861,e=>{let t=["minutes","hours","days"],i=e=>e?"n/a"===e.unit?{time:null,unit:"n/a"}:null!=e.time||e.unit?{time:e.time??null,unit:e.unit??null}:null:null;e.s(["b",0,t,"F",0,"n/a","u",0,(e,t)=>"n/a"===t?"N/A":null!=e&&t?`${e} ${t}`:"-","p",0,e=>t.some(t=>t===e),"L",0,e=>"n/a"===e,"r",0,(e,t)=>"n/a"===t?{time:null,unit:"n/a"}:{time:e??null,unit:t??null},"H",0,(e,t,n)=>i(e)??i(t)??i(n)??{time:null,unit:null},"c",0,[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"},{label:"N/A",value:"n/a"}]])},870307,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=n(e.r(421506)),r=e.r(391398);i.default=(0,o.default)([(0,r.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"0"),(0,r.jsx)("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"},"1")],"Schedule")},102e3,e=>{var t=e.i(391398),i=e.i(738251),n=e.i(191788),o=e.i(995197),r=e.i(891962),a=e.i(570112),s=e.i(765099);let l=()=>{let[e,l]=(0,n.useState)(0);return(0,t.jsxs)(i.f,{sx:{width:"100%"},children:[(0,t.jsx)(i.f,{children:(0,t.jsxs)(r.f,{value:e,onChange:(e,t)=>{l(Number(t))},children:[(0,t.jsx)(a.f,{label:"Work Order SLAs"}),(0,t.jsx)(a.f,{label:"Quote SLAs"})]})}),(0,t.jsx)(o.f,{value:e,index:0,children:(0,t.jsx)(s.f,{title:"Work order SLAs & Priority levels",subtype:"reactive"})}),(0,t.jsx)(o.f,{value:e,index:1,children:(0,t.jsx)(s.f,{title:"Quote SLAs & Priority levels",subtype:"quote"})})]})};var u=e.i(293965);let d=()=>(0,t.jsx)(i.f,{sx:{flex:1,overflow:"auto",p:2,marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 210px)"},transition:"margin-left 0.5s ease"},children:(0,t.jsx)(l,{})});d.getLayout=function(e){return(0,t.jsx)(u.f,{children:e})},e.s(["default",0,d],102e3)}],146327,(e,t,i)=>{let n="/dashboard/slas";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(102e3)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);