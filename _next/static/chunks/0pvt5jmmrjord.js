(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,394989,e=>{var t=e.i(391398),n=e.i(191788),i=e.i(773831),r=e.i(813843),o=e.i(115871),s=e.i(322135),a=e.i(148310),d=e.i(889231),l=e.i(422411),u=e.i(424894),c=e.i(755548),m=e.i(652148),f=e.i(376733),p=e.i(978319),h=e.i(426778);let _=h.t({name:h.x().required("Name is required"),url:h.x().url().required("URL is required")}),y=e=>{let{noEdit:o=!1,noDelete:a=!1,isAdded:h=!1,id:y,url:$="",name:g="",onSave:I=()=>{},onCancel:b=()=>{},onDelete:v=()=>{}}=e,[S,w]=(0,n.useState)(h),{control:q,handleSubmit:A,errors:F}=(0,l.G)({resolver:(0,u.yupResolver)(_)});return(0,t.jsx)("form",{children:S?(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{spacing:1,children:[(0,t.jsx)(l.e,{control:q,name:"name",defaultValue:g,render:e=>(0,t.jsx)(m.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!F.name,helperText:F.name?.message})}),(0,t.jsx)(l.e,{control:q,name:"url",defaultValue:$,render:e=>(0,t.jsx)(m.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!F.url,helperText:F.url?.message})})]}),(0,t.jsxs)(r.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(c.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),w(!1),b(y)},children:"Cancel"}),(0,t.jsx)(c.f,{variant:"contained",size:"small",onClick:A(e=>{I(e),w(!1)}),children:"Save"})]})]}):(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(d.f,{target:"_blank",variant:"body1",color:"secondary",href:$,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:g}),!o&&(0,t.jsx)(s.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),w(!0)},children:(0,t.jsx)(f.default,{sx:{fontSize:"16px"}})})}),!a&&(0,t.jsx)(s.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>v(y),children:(0,t.jsx)(p.default,{sx:{fontSize:"16px"}})})})]})})};var $=e.i(594301);let g=[];e.s(["f",0,e=>{let{values:d=g,setValue:l=()=>{},name:u,title:c="Related links",displayMode:m=!1,noDeleteEdit:f=!1,titleSx:p={}}=e,[h,_]=(0,n.useState)([]),{hasRole:I}=(0,$.f)(),b=I("tenant");(0,n.useEffect)(()=>{Array.isArray(d)&&_((d??[]).map(e=>({...e,id:e?.id||Date.now()})))},[d]);let v=e=>{_(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(r.f,{children:[(0,t.jsxs)(r.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(o.f,{sx:p,children:[c,":"]}),!m&&!b&&(0,t.jsx)(s.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),_(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(a.default,{})})})]}),(0,t.jsx)(r.f,{pl:2,spacing:.8,children:h?.length?h.map(e=>{let t;return(0,n.createElement)(y,{...e,key:e.id,onCancel:v,noEdit:f||m,noDelete:f||m,onDelete:(t=e.id,()=>{if(!u)return;let e=h.filter(e=>e.id!==t);l?.(u,e),_(e)}),onSave:t=>((e,t)=>{if(!u)return;let n=[...h],i=n.findIndex(t=>t.id===e);-1!==i&&n.splice(i,1,{...t,isAdded:!1,id:e}),l?.(u,n)})(e.id,t)})}):(0,t.jsx)(o.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},890350,e=>{var t,n,i,r=((t={}).SUPER_ADMIN="superadmin",t.ADMIN="admin",t.CUSTOMER="customer",t.SUPPLIER="supplier",t.TENANT="tenant",t),o=((n={}).VERIFIED="verified",n.UNVERIFIED="unverified",n),s=((i={}).CLEVERLY="cleverly",i.XERO="xero",i.BIDIRECTIONAL="bidirectional",i.NONE="none",i);e.s(["d",()=>r,"T",()=>o,"$",()=>s])},185242,e=>{var t=e.i(191788),n=e.i(190077),i=e.i(631328),r=e.i(105118),o=e.i(3878);e.s(["f",0,function(e,s){let{queryKey:a,method:d="GET",headers:l,body:u,params:c,pathParams:m,baseUrl:f,skip:p=!1,pollInterval:h,stopPollingOnError:_=!0,onCompleted:y,onError:$}=s,g=(0,o.r)(),I=(0,t.useRef)(null),b=(0,t.useRef)(!0),{fetchQuery:v,unregisterQuery:S,registerQuery:w}=g,q=(0,t.useMemo)(()=>(0,n.f)(),[]),[A,F]=(0,t.useState)(void 0),[T,E]=(0,t.useState)(null),[L,D]=(0,t.useState)(!1),[U,k]=(0,t.useState)(0),M=(0,i.s)(p),x=(0,i.s)(u),j=(0,i.s)(c),C=(0,i.s)(m),R=(0,i.s)(U),P=(0,t.useRef)(0),B=(0,t.useRef)(null),O=(0,t.useRef)(y),Y=(0,t.useRef)($);(0,t.useEffect)(()=>{O.current=y,Y.current=$});let G=(0,t.useCallback)(async()=>{I.current?.abort();let t=new AbortController;I.current=t,E(null),D(!0);let n=++P.current,i=!1;try{let i=await v(e,{baseUrl:f,method:d,headers:l,body:u,params:c,pathParams:m,signal:t.signal});n===P.current&&(F(i),O.current?.(i))}catch(r){if(r instanceof Error&&"AbortError"===r.name){i=!0,I.current===t&&D(!1);return}let e=r instanceof Error?r:Error("An unknown error occurred");n===P.current&&(E(e),Y.current?.(e))}finally{i||n!==P.current||D(!1)}},[f,u,v,l,d,c,m,e]),N=(0,t.useRef)(G);(0,t.useEffect)(()=>{N.current=G}),(0,t.useEffect)(()=>(w(a,q,()=>k(e=>e+1),d),()=>{S(a,q)}),[q,d,a,w,S]),(0,t.useEffect)(()=>{if(B.current&&(clearTimeout(B.current),B.current=null,b.current=!1),p){M!==p&&(I.current?.abort(),D(!1));return}!b.current&&(0,r.f)(x,u)&&(0,r.f)(j,c)&&(0,r.f)(C,m)&&R===U&&M===p||(G(),b.current=!1)},[u,G,c,m,x,j,C,R,M,U,p]),(0,t.useEffect)(()=>()=>{B.current=setTimeout(()=>{B.current=null,I.current?.abort()}),b.current=!0},[]);let z=!!(h&&h>0&&!p&&!(_&&T));return(0,t.useEffect)(()=>{if(!z)return;let e=setInterval(()=>{N.current()},h);return()=>{clearInterval(e)}},[z,h]),{data:A,error:T,isLoading:L,isError:!!T,refetch:()=>k(e=>e+1)}}])},175872,e=>{var t=e.i(191788);e.s(["f",0,(e,n)=>{let i=(0,t.useRef)(null),r=(0,t.useRef)(e),o=(0,t.useRef)(n);return(0,t.useEffect)(()=>{r.current=e},[e]),(0,t.useEffect)(()=>{o.current=n,i.current&&(clearTimeout(i.current),i.current=null)},[n]),(0,t.useEffect)(()=>()=>{i.current&&clearTimeout(i.current)},[]),(0,t.useCallback)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{r.current(...t)},o.current)},[])}])},441625,e=>{var t=e.i(159080);let n=t.f`
  query GetForms(
    $q: String
    $name: String
    $userId: Int
    $status: Boolean
    $createdAt: timestamptz
    $orderBy: [Form_order_by!]
    $limit: Int
    $offset: Int
  ) {
    Form(
      where: {
        _and: [
          { name: { _ilike: $q } }
          { userId: { _eq: $userId } }
          { status: { _eq: $status } }
          { createdAt: { _eq: $createdAt } }
        ]
      }
      order_by: $orderBy
      limit: $limit
      offset: $offset
    ) {
      id
      name
      description
      createdAt
      userId
      status
      formFields
      settings
      FormUser {
        id
        nameFirst
        nameLast
        __typename
      }
      __typename
    }
    meta: Form_aggregate(
      where: {
        _and: [
          { name: { _ilike: $q } }
          { userId: { _eq: $userId } }
          { status: { _eq: $status } }
          { createdAt: { _eq: $createdAt } }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  mutation UpdateStatus($id: Int!, $status: Boolean!) {
    update_Form_by_pk(pk_columns: { id: $id }, _set: { status: $status }) {
      id
      status
    }
  }
`,r=t.f`
  query GetFormNames($q: String, $limit: Int = 50, $offset: Int = 0) {
    Form(where: { name: { _ilike: $q } }, limit: $limit, offset: $offset) {
      name
      id
      formFields
      settings
    }
  }
`,o=t.f`
  query GetActiveForms($q: String, $limit: Int = 50, $offset: Int = 0) {
    Form(
      where: { status: { _eq: true }, name: { _ilike: $q } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      name
      id
      status
      formFields
      settings
    }
  }
`,s=t.f`
  query GetFormById($id: Int!) {
    Form_by_pk(id: $id) {
      id
      userId
      status
      name
      description
      formFields
      adminId
      createdAt
      updatedAt
      settings
      meta
    }
  }
`,a=t.f`
  mutation AddForm($object1: Form_insert_input!) {
    insert_Form_one(object: $object1) {
      id
    }
  }
`,d=t.f`
  mutation UpdateForm(
    $formId: Int!
    $formSubmissionId: Int
    $formFields: jsonb
    $formChanges: Form_set_input!
    $submissionChanges: FormSubmissions_set_input
    $updateSubmissions: Boolean! = false
  ) {
    update_Form_by_pk(pk_columns: { id: $formId }, _set: $formChanges) {
      id
      userId
      status
      name
      description
      formFields
      settings
      meta
      updatedAt
    }
    update_FormSubmissions(
      where: { formId: { _eq: $formId }, entity: { _eq: "Taxonomy" } }
      _set: { submissionData: null, formFields: $formFields }
    ) {
      affected_rows
      returning {
        id
        formId
        formFields
        submissionData
        entity
        entityId
      }
    }
    update_FormSubmissions_by_pk(pk_columns: { id: $formSubmissionId }, _set: $submissionChanges)
      @include(if: $updateSubmissions) {
      id
      formId
      formFields
      submissionData
      entity
      entityId
    }
  }
`,l=t.f`
  mutation UpdateStatusAndEntity($formId: Int!) {
    update_Form(where: { id: { _eq: $formId } }, _set: { status: false }) {
      affected_rows
    }
    delete_FormSubmissions(
      where: {
        formId: { _eq: $formId }
        _or: [
          {
            entity: { _eq: "Taxonomy" }
            FormSubmissionsTaxonomies: {
              status: { _in: ["active", "followOn", "reportSent", "completed"] }
            }
          }
          {
            entity: { _eq: "Job" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          {
            entity: { _eq: "Ppm" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          { entity: { _eq: "Task" }, FormSubmissionsTasks: { status: { _in: ["new", "todo"] } } }
          { entity: { _eq: "Workflow" }, FormSubmissionsWorkflows: { status: { _in: ["active"] } } }
        ]
      }
    ) {
      affected_rows
    }
  }
`,u=t.f`
  mutation UpdateIncompleteSubmissionsByForm(
    $formId: Int!
    $formFields: jsonb!
    $submissionData: jsonb = null
  ) {
    update_FormSubmissions(
      where: {
        formId: { _eq: $formId }
        entity: { _neq: "Taxonomy" }
        _or: [
          {
            entity: { _eq: "Job" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          {
            entity: { _eq: "Ppm" }
            FormSubmissionsJobs: { status: { _in: ["raised", "offered", "accepted"] } }
          }
          { entity: { _eq: "Task" }, FormSubmissionsTasks: { status: { _in: ["new", "todo"] } } }
          { entity: { _eq: "Workflow" }, FormSubmissionsWorkflows: { status: { _in: ["active"] } } }
        ]
      }
      _set: { submissionData: $submissionData, formFields: $formFields }
    ) {
      affected_rows
      returning {
        id
        formId
        formFields
        submissionData
        entity
        entityId
      }
    }
  }
`,c=t.f`
  query GetFormSubmission($entity: form_submission_entity!, $entityId: Int!) {
    FormSubmissions(
      where: { _and: [{ entity: { _eq: $entity } }, { entityId: { _eq: $entityId } }] }
    ) {
      id
      formId
      userId
      formFields
      submissionData
      entity
      entityId
      type
      createdAt
      updatedAt
      form: FormSubmissionsForm {
        name
        description
        status
        settings
        createdAt
        updatedAt
      }
    }
  }
`,m=t.f`
  query GetFormSubmissionById($id: Int!) {
    FormSubmissions_by_pk(id: $id) {
      id
      formId
      userId
      formFields
      submissionData
      entity
      entityId
      type
      createdAt
      updatedAt
      form: FormSubmissionsForm {
        name
        status
        description
        settings
        createdAt
        updatedAt
      }
    }
  }
`,f=t.f`
  mutation CreateFormSubmissions(
    $formId: Int!
    $userId: Int!
    $formFields: jsonb!
    $submissionData: jsonb
    $entity: form_submission_entity!
    $entityId: Int!
  ) {
    insert_FormSubmissions_one(
      object: {
        formId: $formId
        userId: $userId
        formFields: $formFields
        submissionData: $submissionData
        entity: $entity
        entityId: $entityId
      }
    ) {
      id
      formId
      userId
      formFields
      submissionData
      entity
      entityId
    }
  }
`;t.f`
  mutation CreateFormSubmissionsBulk($objects: [FormSubmissions_insert_input!]!) {
    insert_FormSubmissions(objects: $objects) {
      affected_rows
    }
  }
`;let p=t.f`
  mutation UpdateFormSubmission($id: Int!, $changes: FormSubmissions_set_input!) {
    update_FormSubmissions_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      formId
      formFields
      submissionData
      entity
      entityId
      type
      pdfGenerationStatus
      pdfGenerationId
    }
  }
`,h=t.f`
  mutation deleteFormSubmission($id: Int!) {
    delete_FormSubmissions(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;t.f`
  query GetFormSubmissionMedia($id: Int!, $entity: form_submission_entity!) {
    Media(
      where: {
        Media_Entities: {
          entity: { _eq: "FormSubmission" }
          FormSubmissions: { entityId: { _eq: $id }, entity: { _eq: $entity } }
        }
      }
    ) {
      id
      filename
      extension
      caption
      type
      category
      meta
      visibility
    }
  }
`,e.s(["H",0,a,"O",0,f,"F",0,h,"W",0,o,"a",0,n,"z",0,s,"B",0,r,"G",0,c,"_",0,m,"k",0,d,"p",0,p,"I",0,u,"c",0,i,"q",0,l])},886143,e=>{var t=e.i(159080);let n=t.f`
  query MEDIAS(
    $category: String
    $entity: String
    $entityId: Int
    $limit: Int
    $offset: Int
    $q: String
    $type: String
    $adminId: Int
    $meta: jsonb
  ) {
    items: Media_Entity(
      limit: $limit
      offset: $offset
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: {
          adminId: { _eq: $adminId }
          caption: { _ilike: $q }
          category: { _eq: $category }
          type: { _eq: $type }
          meta: { _contains: $meta }
        }
      }
      order_by: { Medium: { createdAt: desc } }
    ) {
      id
      entity
      entityId
      mediaId
      item: Medium {
        id
        visibility
        caption
        category
        createdAt
        expiryAt
        filename
        name
        type
        meta
        userId
        user: User {
          id
          nameFirst
          nameLast
        }
      }
    }
    meta: Media_Entity_aggregate(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: {
          adminId: { _eq: $adminId }
          caption: { _ilike: $q }
          category: { _eq: $category }
          type: { _eq: $type }
          meta: { _contains: $meta }
        }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  query GetPreloadedMediaByEntity(
    $category: String
    $entity: String
    $entityId: Int
    $adminId: Int
  ) {
    items: Media_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: { adminId: { _eq: $adminId }, category: { _eq: $category } }
      }
    ) {
      mediaId
      media: Medium {
        id
        filename
        caption
      }
    }
  }
`;e.s(["o",0,n,"A",0,i])},39059,e=>{var t=e.i(159080);let n=t.f`
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
`,r=t.f`
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
`,a=t.f`
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
`,l=t.f`
  mutation GenerateMSURL($type: String!, $id: Int!) {
    genenrateMSURL(id: $id, type: $type) {
      url
    }
  }
`,u=t.f`
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
`,f=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,p=t.f`
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
`,h=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,_=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,y=t.f`
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
`,$=t.f`
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
`;e.s(["e",0,s,"d",0,l,"u",0,y,"q",0,c,"_",0,f,"x",0,o,"k",0,r,"f",0,m,"U",0,$,"I",0,n,"s",0,g,"c",0,d,"S",0,u,"o",0,h,"l",0,p,"V",0,i,"J",0,_,"W",0,a])},856688,e=>{var t=e.i(776204),n=e.i(432171),i=e.i(170582),r=e.i(511667),o=e.i(886143),s=e.i(327682),a=e.i(191788);e.s(["f",0,function(e,d,l,u){let c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"media",[m,f]=(0,a.useState)(!1),{data:{items:p}={items:[]},loading:h}=(0,n.t)(o.A,{variables:{entity:e,entityId:u,category:c,adminId:d},skip:!u}),[_,{isLoading:y}]=(0,r.f)("/media/delete-media",{queryKey:"deleteMedia",method:"POST"}),[$]=(0,t.f)(s.p,{refetchQueries:["MEDIAS"]}),g=async function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"media";try{f(!0);let i=[];for(let r of t)if(!r.mediaId){let t,o=await I(r),s=null;if("image"===r.type){let e=o.key,n=o.data.find(e=>"large"===e.name);t=n?n.relativePath:e,s={original:{relativePath:e},thumbnails:o.data||null}}else t=o.key;i.push({entity:e,Medium:{data:{adminId:d,caption:r?.caption??null,extension:r?.media?.name?.split(".").pop(),userId:l,category:n,filename:t,type:r.type,meta:s??void 0}}})}return{Media_Entity:{data:i}}}finally{f(!1)}},I=async e=>{let t,n=new window.FormData;switch(e.media&&n.append("file",e.media,e.media.name),e.type){case"image":t=i.G;break;case"document":case"audio":t=i.Q;break;default:throw Error(`Unsupported attachment type: ${e.type}`)}let r=window.localStorage.getItem("bearerToken"),o={};r&&(o.Authorization=`Bearer ${r}`);let s=await window.fetch(t,{method:"POST",body:n,headers:o}),a=await s.json();if(!s.ok)throw Error(a?.message||`Upload failed with status ${s.status}`);return a};return{uploadMedia:async(t,n)=>{try{if(f(!0),n){let i=await I(n),r={adminId:d,caption:n.caption,expiryAt:null,extension:n.media.name.split(".").pop(),userId:l,filename:i.key,type:n.type,Media_Entities:{data:[{entity:e,entityId:t}]}};await $({variables:{objects:r}})}}finally{f(!1)}},uploadMediaToS3:I,createMediaInput:g,deleteMediaByEntity:e=>_({body:{mediaId:e}}),loadingAddMedia:m,loadingDeleteMedia:y,preloadedMediaLoading:h,preloadedMedia:p?.length?p:[]}}])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},251825,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"CheckCircleOutline")},652002,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded")},555588,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"m14.06 9.02.92.92L5.92 19H5v-.92zM17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29m-3.6 3.19L3 17.25V21h3.75L17.81 9.94z"}),"EditOutlined")},820726,(e,t,n)=>{var i=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"M4.47 21h15.06c1.54 0 2.5-1.67 1.73-3L13.73 4.99c-.77-1.33-2.69-1.33-3.46 0L2.74 18c-.77 1.33.19 3 1.73 3M12 14c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1m1 4h-2v-2h2z"}),"WarningRounded")},917563,e=>{var t=e.i(738251);e.s(["f",()=>t.f])},16135,e=>{var t=e.i(800884);e.s(["f",()=>t.f])},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},121432,e=>{var t=e.i(773831);e.s(["f",()=>t.f])},164056,e=>{var t=e.i(652148);e.s(["f",()=>t.f])},379741,e=>{var t=e.i(322135);e.s(["f",()=>t.f])},519088,e=>{var t=e.i(191788),n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},i=function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r="Pixel",o="Percent",s={unit:o,value:.8};function a(e){return"number"==typeof e?{unit:o,value:100*e}:"string"==typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:r,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:o,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),s):(console.warn("scrollThreshold should be string or number"),s)}var d=function(e){function o(){this.constructor=s}function s(t){var n=e.call(this,t)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"==typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(e){!n.lastScrollTop&&(n.dragging=!0,e instanceof MouseEvent?n.startY=e.pageY:e instanceof TouchEvent&&(n.startY=e.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(e){!n.dragging||(e instanceof MouseEvent?n.currentY=e.pageY:e instanceof TouchEvent&&(n.currentY=e.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),!(n.currentY-n.startY>1.5*n.maxPullDownDistance)&&n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")})},n.onScrollListener=function(e){"function"==typeof n.props.onScroll&&setTimeout(function(){return n.props.onScroll&&n.props.onScroll(e)},0);var t=n.props.height||n._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(t,n.props.scrollThreshold):n.isElementAtBottom(t,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=t.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},n.throttledOnScrollListener=(function(e,t,n){var i,r=!1,o=0;function s(){i&&clearTimeout(i)}function a(){var a=this,d=Date.now()-o,l=arguments;function u(){o=Date.now(),t.apply(a,l)}r||(n&&!i&&u(),s(),void 0===n&&d>150?u():!0!==e&&(i=setTimeout(n?function(){i=void 0}:u,void 0===n?150-d:150)))}return"boolean"!=typeof e&&(n=t,t=e,e=void 0),a.cancel=function(){s(),r=!0},a})(n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return n(s,e),s.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o),s.prototype.componentDidMount=function(){if(void 0===this.props.dataLength)throw Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"==typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!=typeof this.props.refreshFunction))throw Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},s.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},s.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},s.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?i(i({},t),{prevDataLength:e.dataLength}):null},s.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,i=a(t);return i.unit===r?e.scrollTop<=i.value+n-e.scrollHeight+1:e.scrollTop<=i.value/100+n-e.scrollHeight+1},s.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,i=a(t);return i.unit===r?e.scrollTop+n>=e.scrollHeight-i.value:e.scrollTop+n>=i.value/100*e.scrollHeight},s.prototype.render=function(){var e=this,n=i({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),o=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return t.default.createElement("div",{style:o,className:"infinite-scroll-component__outerdiv"},t.default.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:n},this.props.pullDownToRefresh&&t.default.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},t.default.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},s}(t.Component);e.s(["f",0,d])}])})();