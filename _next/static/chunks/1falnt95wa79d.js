(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,s=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),r=e=>{let t=e?.address||e;return t&&s(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,s,"Q",0,r],964919);let i=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},n=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let s=i(t[0]),r=i(t[1]);return null==r||null==s||r<-90||r>90||s<-180||s>180?null:{lat:r,lng:s}},d=e=>n(e?.geo),a=async e=>{let t=r(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var s=await e.json();if(!s)return null;let r=s.coordinates?.lat??s.lat;return d({geo:{coordinates:[s.coordinates?.lng??s.lng,r]}})}catch{return null}},l=async(e,t)=>{let s=d(e?.address||e);if(s)return s;let[r,i]=t?.coordinates??[],n=d({geo:{coordinates:[r,i]}});return n||a(e)};e.s(["g",0,n,"Z",0,d,"t",0,l,"l",0,(e,t)=>{let s=d(e?.address||e);if(s)return s;let[r,i]=t?.coordinates??[];return d({geo:{coordinates:[r,i]}})},"a",0,i],842088)},795617,e=>{var t=e.i(990071),s=e.i(842088);let r=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:s,type:r="inline",hideinvoicingEntity:i=!1}=e;if(!t)return"";let n="",d=s?.name?` (${s.name})`:"";return"stacked"===r?(n+=!i&&t.invoicingEntity?t.invoicingEntity+"\n":"",n+=t.addressLine1?t.addressLine1+d+"\n":d,n+=t.addressLine2?t.addressLine2+"\n":"",n+=t.addressLine3?t.addressLine3+"\n":"",n+=t.city?t.city+"\n":"",n+=t.county?t.county+"\n":""):(n+=!i&&t.invoicingEntity?t.invoicingEntity+" ":"",n+=t.addressLine1?t.addressLine1+d+" ":d,n+=t.addressLine2?t.addressLine2+" ":"",n+=t.addressLine3?t.addressLine3+" ":"",n+=t.city?t.city+" ":"",n+=t.county?t.county+" ":""),(n+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,r,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let s=null;switch(e){case"Account":s=t.A;break;case"Location":s=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!s)throw Error("Query cannot be null");return s},"u",0,(e,t)=>{let s=null;return"customer"===t?s=r(e.location,"invoice")||r(e.customer,"invoice")||r(e.location,"registered"):"supplier"===t&&(s=r(e.supplier,"invoice")||r(e.supplier,"registered")),s},"D",0,e=>{let t=(0,s.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let s=t.f`
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
`,r=t.f`
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
`,i=t.f`
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
  ${s}
  ${r}
`,n=t.f`
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
  ${s}
  ${r}
`,d=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${s}
`,a=t.f`
  mutation UpdateAddress($id: Int!, $changes: Address_set_input!) {
    update_Address_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,l=t.f`
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
`,o=t.f`
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
`;e.s(["S",0,r,"a",0,s,"g",0,d,"H",0,l,"A",0,i,"R",0,n,"h",0,a,"I",0,o])},816037,e=>{e.s(["f",0,(e,t)=>{let s={};for(let r of t)r.stateName&&("fileUpload"===r.type&&(s[r.stateName]=e),"repeatableBlock"===r.type&&t.some(e=>void 0!==e.id&&"fileUpload"===e.type&&!!e.stateName&&r.memberIds?.includes(String(e.id)))&&(s[r.stateName]=e));return{entityId:e,entityIdByStateName:s}}])},717803,e=>{var t=e.i(986351);e.s(["f",()=>t.f])},898130,e=>{var t=e.i(391398),s=e.i(203828),r=e.i(594301),i=e.i(440726),n=e.i(115871),d=e.i(738251),a=e.i(834744),l=e.i(917563),o=e.i(974266),u=e.i(405553),c=e.i(356119);let m=()=>(0,t.jsx)(u.f,{maxWidth:"lg",children:(0,t.jsxs)(l.f,{sx:{py:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"50vh"},children:[(0,t.jsx)(o.f,{size:48}),(0,t.jsx)(c.f,{sx:{mt:2},color:"text.secondary",children:"Loading form..."})]})});var f=e.i(191788),p=e.i(98926),y=e.i(159080);let b=y.f`
  query GetFormPreviewTaskDetails($id: Int!) {
    task: Task_by_pk(id: $id) {
      id
      form: FormSubmissions(where: { entity: { _eq: "Task" } }, order_by: { id: asc }) {
        id
        formFields
        submissionData
        user: FormSubmissionsUser {
          id
          fullName
        }
        form: FormSubmissionsForm {
          id
          name
          description
          meta
          createdAt
          updatedAt
        }
      }
    }
  }
`;var g=e.i(990071);let h=y.f`
  query GetFormPreviewJob($adminId: Int!, $number: String!) {
    job: Job(where: { adminId: { _eq: $adminId }, number: { _eq: $number } }) {
      id
      statusData
      description
      timingStatus
      correctStart
      correctEnd
      customer: Customer {
        id
        name
      }
      supplier: Supplier {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      assets: Assets(where: { entity: { _eq: "Job" } }) {
        asset: Asset {
          id
          name
        }
      }
      location: Location {
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
          }
        }
      }
      report: JobReport {
        passFailStatus
      }
      service: Service {
        name
      }
      sla: SLA {
        name
      }
      form: FormSubmissions(where: { entity: { _in: ["Job", "Ppm"] } }, order_by: { id: asc }) {
        id
        formId
        formFields
        submissionData
        user: FormSubmissionsUser {
          id
          fullName
        }
        form: FormSubmissionsForm {
          id
          name
          description
          meta
          createdAt
          updatedAt
        }
      }
    }
  }
  ${g.a}
  ${g.S}
`;var x=e.i(795617),j=e.i(816037),A=e.i(926021),v=e.i(562842),_=e.i(377198),S=e.i(958678);let F=()=>(0,t.jsx)(S.default,{children:(0,t.jsx)("style",{children:"body { background-color: #FFFFFF !important; }"})});var $=e.i(717803),k=e.i(886779);let w="Form template last edited",E=e=>{let{label:s,value:r}=e;return r?(0,t.jsxs)(l.f,{sx:{mb:1.5,breakInside:"avoid"},children:[(0,t.jsx)(c.f,{variant:"subtitle2",fontWeight:600,color:"text.secondary",sx:{mb:.5},children:s}),(0,t.jsx)(c.f,{variant:"body2",color:"text.primary",children:r})]}):null};var I=e.i(65295);let L=e=>{let{taskData:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{variant:"h5",color:"text.primary",sx:{mb:2,mt:8,fontWeight:600,breakAfter:"avoid"},children:"Details"}),(0,t.jsxs)(k.f,{spacing:0,sx:{mb:4},children:[s.createdAt&&(0,t.jsx)(E,{label:"Form template created",value:(0,I.f)(s.createdAt,!0)||null}),s.updatedAt&&(0,t.jsx)(E,{label:w,value:(0,I.f)(s.updatedAt,!0)||null}),s.createdBy&&(0,t.jsx)(E,{label:"Created by",value:s.createdBy}),s.totalScore&&(0,t.jsx)(E,{label:"Total score",value:String(s.totalScore)})]}),(0,t.jsx)($.f,{sx:{my:4}})]})},N=e=>{let{jobData:s}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{variant:"h5",color:"text.primary",sx:{mb:2,mt:8,fontWeight:600,breakAfter:"avoid"},children:"Details"}),(0,t.jsxs)(k.f,{spacing:0,sx:{mb:4},children:[(0,t.jsx)(E,{label:"Client",value:s.customer||null}),(0,t.jsx)(E,{label:"Address",value:s.formattedAddress||null}),(0,t.jsx)(E,{label:"Asset(s)",value:s.formattedAssets||null}),(0,t.jsx)(E,{label:"Service",value:s.service||null}),(0,t.jsx)(E,{label:"Priority",value:s.priority||null}),(0,t.jsx)(E,{label:"Start time",value:(0,I.f)(s.dateStart,!0)||null}),(0,t.jsx)(E,{label:"End time",value:(0,I.f)(s.dateEnd,!0)||null}),(0,t.jsx)(E,{label:w,value:(0,I.f)(s.formUpdatedAt,!0)||null}),(0,t.jsx)(E,{label:"Status",value:s.passFailStatus||null}),(0,t.jsx)(E,{label:"Created by",value:s.createdBy||null}),s.totalScore&&(0,t.jsx)(E,{label:"Total score",value:String(s.totalScore)})]}),s.description&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{variant:"h5",color:"text.primary",sx:{mb:2,fontWeight:600,breakAfter:"avoid"},children:"Job Description"}),(0,t.jsx)(c.f,{variant:"body2",color:"text.primary",sx:{mb:4,whiteSpace:"pre-wrap"},children:s.description})]}),(0,t.jsx)($.f,{sx:{my:4}})]})},C=e=>{let{error:s}=e;return(0,t.jsx)(u.f,{maxWidth:"lg",children:(0,t.jsx)(l.f,{sx:{py:4},children:(0,t.jsx)(c.f,{color:"error",children:s})})})};var q=e.i(67267),D=e.i(336276);let T=e=>{let{taskId:s,jobNumber:r,adminId:l,totalScore:o,formSubmissionId:u,entityType:c,templateVariables:y}=e,{loading:g,error:S,formFields:$,submissionData:k,jobData:w,taskData:E,entityId:T,entityIdByStateName:P,formName:B,formDescription:W,formatting:J,logoUrl:R}=(e=>{let{taskId:t,jobNumber:s,adminId:r,totalScore:i,formSubmissionId:n,entityType:d}=e,a=(0,p.f)(),l=(0,v.f)().session.settings.admin.media,[o,u]=(0,f.useState)(!0),[c,m]=(0,f.useState)(null),[y,g]=(0,f.useState)([]),[S,F]=(0,f.useState)({}),[$,k]=(0,f.useState)(null),[w,E]=(0,f.useState)(null),[I,L]=(0,f.useState)(null),[N,C]=(0,f.useState)(null),[q,D]=(0,f.useState)({}),[T,O]=(0,f.useState)(null),[U,P]=(0,f.useState)(null),[B,W]=(0,f.useState)({}),[J,R]=(0,f.useState)(null),H=(0,_.f)(J)??null;return(0,f.useEffect)(()=>{let e=!1;return(async()=>{try{if(u(!0),m(null),R(null),W({}),"job"!==d&&"task"!==d)return m("Entity type must be either job or task");let o=await a.query({query:"task"===d?b:h,variables:"task"===d?{id:t}:{number:s,adminId:r}});if(e)return;if(o.error)return m(`Error: ${o.error?.message}`);let{data:c}=o,f=c?.job?.[0]||null,p=c?.task||null,y=("task"===d?p?.form:f?.form)??[],v=null!=n?y.find(e=>e.id===n):y[0];if(!v)return m("Form not found for this entity");let _=v.formFields||[],{entityId:S,entityIdByStateName:$}=(0,j.f)(v.id,_),w=(e=>{let{job:t,submission:s,totalScore:r}=e;if(!t)return null;let i=s??t?.form?.[0],n=(0,x.w)(t?.location,"registered"),d=n?.address?(0,x.c)({address:n?.address,sublocation:t.sublocation,type:"inline"}):null,a=t.assets&&t.assets.length>0?t.assets.map(e=>e?.asset?.name||"-").join("; "):null;return{customer:t.customer?.name||null,supplier:t.supplier?.name||null,formattedAddress:d,formattedAssets:a,service:t.service?.name||null,priority:t.sla?.name||null,dateStart:"incorrect"===t.timingStatus?t.correctStart:t.statusData?.inProgress,dateEnd:"incorrect"===t.timingStatus?t.correctEnd:t.statusData?.completed,createdBy:i?.user?.fullName||null,passFailStatus:t.report?.passFailStatus||null,description:t.description||null,formUpdatedAt:i?.form?.updatedAt||null,totalScore:r||null}})({job:f,submission:v,totalScore:i}),I=(e=>{let{task:t,submission:s,totalScore:r}=e;if(!t)return null;let i=s??t?.form?.[0];return i?{createdAt:i.form?.createdAt||null,updatedAt:i.form?.updatedAt||null,createdBy:i?.user?.fullName||null,totalScore:r||null}:null})({task:p,submission:v,totalScore:i}),N=v.form?.meta?.formatting??{};if((0,A.Y)(N)&&(0,A.v)(N)){let e=l.find(e=>{let{item:t}=e;return t?.category==="themeLogo"});e?.item?.filename&&R(e.item.filename)}C(S),D($),g(_),F(v.submissionData||{}),L(v.id||null),k(w),E(I),O(v.form?.name??null),P(v.form?.description??null),W(N);return}catch(t){if(e)return;m(`Failed to load form data: ${t instanceof Error?t.message:"Unknown error"}`)}finally{e||u(!1)}})(),()=>{e=!0}},[r,a,d,n,s,t,l,i]),{loading:o,error:c,formFields:y,submissionData:S,jobData:$,taskData:w,formSubmissionId:I,entityId:N,entityIdByStateName:q,formName:T,formDescription:U,formatting:B,logoUrl:H}})({taskId:s,jobNumber:r,adminId:l,totalScore:o,formSubmissionId:u,entityType:c});if(g)return(0,t.jsx)(m,{});if(S)return(0,t.jsx)(C,{error:S});if(!$||0===$.length)return(0,t.jsx)(a.f,{maxWidth:"lg",children:(0,t.jsx)(d.f,{sx:{py:4},children:(0,t.jsx)(n.f,{children:"No form fields available"})})});let H=y??{location:w?.formattedAddress??null,customer:w?.customer??null,supplier:w?.supplier??null,date:w?.dateStart?(0,I.f)(w.dateStart):null,jobId:r??null},z=(0,A.Y)(J),G=z&&(0,A.z)(J),M=(0,A.d)(J)?`${A.t}px`:O,V=(0,t.jsxs)(t.Fragment,{children:["job"===c&&w&&(0,t.jsx)(N,{jobData:w}),"task"===c&&E&&(0,t.jsx)(L,{taskData:E})]});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(F,{}),(0,t.jsx)(d.f,{sx:{bgcolor:"#FFFFFF",minHeight:"100vh"},children:(0,t.jsx)(a.f,{maxWidth:"lg",children:(0,t.jsxs)(d.f,{sx:{pt:M,pb:4,px:2,bgcolor:"#FFFFFF"},children:[z&&(0,t.jsx)(d.f,{sx:{minHeight:e=>`calc(100vh - ${e.spacing(O)})`},children:(0,t.jsx)(q.f,{formatting:J,formName:B,logoUrl:R,templateVariables:H,children:G&&V})}),!G&&(0,t.jsx)(d.f,{sx:{pb:5,pt:5},children:V}),(0,t.jsx)(D.f,{name:(0,A.S)(J,H)?B:null,description:W}),(0,t.jsx)(i.f,{scheme:$,submissionData:k||{},blockStyle:U,isPreview:!0,isPdfMode:!0,entityId:T,entityIdByStateName:P,entity:"FormSubmission"})]})})})]})},O=5,U={border:"none",backgroundColor:"#FFFFFF",highlighted:""},P=()=>{let e=(0,s.useRouter)(),{user:i}=(0,r.f)();if(!e.isReady)return(0,t.jsx)(m,{});let{id:n,type:d,totalScore:a,formSubmissionId:l}=e.query;if(!d||"task"!==d&&"job"!==d)return(0,t.jsx)(C,{error:"Invalid entity type. Expected 'task' or 'job'."});let o=i?.adminId;if(!o)return(0,t.jsx)(C,{error:"Missing or invalid admin ID."});let u="string"==typeof a?parseInt(a,10):null,c="string"==typeof l?parseInt(l,10):0/0,f=Number.isNaN(c)?null:c,p="task"===d&&"string"==typeof n?parseInt(n,10):void 0,y="job"===d&&"string"==typeof n?n:void 0;if("task"===d&&(!p||isNaN(p)))return(0,t.jsx)(C,{error:"Missing or invalid task ID."});if("job"===d&&!y)return(0,t.jsx)(C,{error:"Missing job number."});let b=W(e.query);return(0,t.jsx)(T,{taskId:p,jobNumber:y,adminId:o,entityType:d,totalScore:u,formSubmissionId:f,templateVariables:b})},B=["location","customer","supplier","date","jobId"],W=e=>{if("1"===e.var_resolved)return Object.fromEntries(B.map(t=>{let s=e[`var_${t}`];return[t,"string"==typeof s?s:null]}))},J=()=>(0,t.jsx)(P,{});J.getLayout=function(e){return e},J.providers=["mainContext","theme","appTheme","localization","apollo","fetch","user","session","authorization","popup","offCanvas"],e.s(["default",0,J],898130)}],617229,(e,t,s)=>{let r="/form-preview-only";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(898130)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})}]);