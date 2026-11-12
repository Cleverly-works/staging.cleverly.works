(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[874711,e=>{var t=e.i(191788);e.s(["f",0,()=>{let e=(0,t.useRef)(null),i=(0,t.useCallback)(()=>{e.current&&(clearTimeout(e.current),e.current=null)},[]),n=(0,t.useCallback)((t,n)=>{i(),e.current=setTimeout(t,n)},[i]);return(0,t.useEffect)(()=>()=>{i()},[i]),{setTimeout:n,clearTimeout:i}}])},591003,e=>{var t=e.i(391398),i=e.i(691567),n=e.i(738251),a=e.i(89029),r=e.i(191788),o=e.i(377198);let s={x:0,y:0},l=()=>{},u=e=>{let{filename:i,initialCoordinates:u=s,color:c="warning",editable:d=!1,showMarker:m=!0,handleChangeCoordinates:f=l}=e,p=(0,r.useRef)(null),h=(0,r.useRef)(null),[g,y]=(0,r.useState)(u),v=(0,o.f)(i);return(0,r.useEffect)(()=>{y(u)},[u]),(0,t.jsx)(n.f,{sx:{position:"relative"},children:v&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.f,{ref:h,component:"img",src:v,sx:{width:"100%"},onClick:e=>{if(!d)return;let{clientHeight:t,clientWidth:i}=p.current,{clientHeight:n,clientWidth:a}=h.current,r={x:(e.nativeEvent.offsetX-i/2)*100/a,y:(e.nativeEvent.offsetY-t)*100/n};y(r),f(r)}}),m&&(0,t.jsx)(a.default,{ref:p,color:c,sx:{position:"absolute",width:"8%",height:"auto",top:`${g.y}%`,left:`${g.x}%`}})]})})};u.propTypes={filename:i.default.string.isRequired,initialCoordinates:i.default.shape({x:i.default.number.isRequired,y:i.default.number.isRequired}),color:i.default.string,editable:i.default.bool,showMarker:i.default.bool,handleChangeCoordinates:i.default.func},e.s(["f",0,u])},39059,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`,o=t.f`
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
`,l=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,u=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,c=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,d=t.f`
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
`,f=t.f`
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
`,p=t.f`
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
`;e.s(["e",0,o,"u",0,f,"q",0,l,"_",0,c,"x",0,r,"k",0,a,"f",0,u,"U",0,p,"I",0,i,"s",0,h,"l",0,d,"V",0,n,"J",0,m,"W",0,s])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},148648,e=>{let t=function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(0===e.length)return t?"Complete the required custom fields before submitting.":"Some required custom fields are not completed.";let i=e.length>1?"s":"",n=e.join("; ");return t?`Complete the required custom field${i}: ${n}.`:`Required custom field${i} not completed: ${n}.`},i=e=>`Correct the custom field${e.length>1?"s":""}: ${e.join("; ")}.`;e.s(["f",0,"Custom fields are still loading — please try again in a moment.","r",0,function(e){let n=!(arguments.length>1)||void 0===arguments[1]||arguments[1],{missingRequiredFieldNames:a,invalidFieldNames:r}=e;if(0===r.length)return t(a,n);let o=i(r);return a.length>0?`${t(a,n)} ${o}`:o},"A",0,i])},931463,e=>{var t=e.i(391398),i=e.i(191788),n=e.i(886779),a=e.i(356119),r=e.i(122989),o=e.i(591003),s=e.i(432171),l=e.i(195952),u=e.i(594301);e.s(["f",0,e=>{let{asset:c,assetsMap:d=[],assetsMetaData:m,locationItems:f,setAssetsMap:p}=e,{user:h}=(0,u.f)(),[g,y]=(0,i.useState)(d.find(e=>e.id===c.value)?.map||"location"),v=(0,i.useMemo)(()=>m.find(e=>e.id===c.value),[m,c.value]),{data:{items:b}={items:[]}}=(0,s.t)(l.J,{variables:{adminId:h.adminId,entityId:v?.sublocationId,entity:"Sublocation",category:"sublocationFloorplan",type:"image"},skip:!v?.sublocationId||!h?.adminId}),_=(0,i.useMemo)(()=>"location"===g?f:"sublocation"===g?b:[],[g,f,b]),x=(0,i.useMemo)(()=>_?.[0]?.item?.filename,[_]),S=!!x,I=!!v?.sublocationId,w=(0,i.useMemo)(()=>v?.meta?.coordinates?.[g],[v,g]),$=(0,i.useCallback)(e=>{let t=d.find(e=>e.id===c.value);t?p(d.map(i=>i.id===t.id?{...i,map:e}:i)):p([...d,{id:c.value,map:e}])},[c.value,d,p]),j=(0,i.useMemo)(()=>[{label:"Location",value:"location"},...v?.sublocationId?[{label:"Sublocation",value:"sublocation"}]:[]],[v]);return(0,t.jsxs)(n.f,{gap:2,children:[g&&I&&(0,t.jsx)(r.f,{value:g,label:"Map",onChange:e=>{y(e.target.value),$(e.target.value)},onClick:e=>e.stopPropagation(),options:j,fullWidth:!0,variant:"standard",color:"secondary"}),(0,t.jsx)(n.f,{children:S?(0,t.jsx)(o.f,{editable:!1,filename:x,initialCoordinates:w}):(0,t.jsxs)(a.f,{color:"#626262",children:["No map exists for this ","sublocation"===g?"sublocation":"location"]})})]})}])},320306,e=>{var t=e.i(391398),i=e.i(115871),n=e.i(122989),a=e.i(813843),r=e.i(591003);e.s(["f",0,e=>{let{selectedMap:o,sublocationId:s,setSelectedMap:l,hasMap:u,filename:c,handleChangeCoordinates:d,initialCoordinates:m}=e;return(0,t.jsxs)(a.f,{spacing:2,children:[o&&s&&(0,t.jsx)(n.f,{label:"Map",value:o,onChange:e=>l(e.target.value),onClick:e=>e.stopPropagation(),options:[{label:"Location",value:"location"},{label:"Sublocation",value:"sublocation"}],fullWidth:!0,variant:"standard",color:"secondary"}),(0,t.jsx)(a.f,{children:u?(0,t.jsx)(r.f,{editable:!0,filename:c,initialCoordinates:m,handleChangeCoordinates:d},o):(0,t.jsxs)(i.f,{color:"#626262",children:["No map exists for this ",o]})})]})}])},977982,e=>{var t=e.i(191788),i=e.i(874711);e.s(["f",0,function(){let{initialCoordinates:e={location:{x:0,y:0},sublocation:{x:0,y:0}},initialAssetsMap:n=[],initialJobMap:a,onCoordinatesChange:r,onAssetsMapChange:o,setValue:s,debounceDelay:l=1e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[u,c]=(0,t.useState)(e),[d,m]=(0,t.useState)(a||"location"),[f,p]=(0,t.useState)(n),{setTimeout:h,clearTimeout:g}=(0,i.f)(),y=(0,t.useCallback)((e,t)=>e?.x===t?.x&&e?.y===t?.y,[]),v=(0,t.useCallback)(e=>{g(),h(()=>{if("location"!==d||y(e,u.location)){if("sublocation"===d&&!y(e,u.sublocation)){let t={...u,sublocation:e};c(t),r?.(t),s&&(s("jobMap",{coordinates:t,map:d},{shouldDirty:!0}),s("assetsMap",{assets:f},{shouldDirty:!0}))}}else{let t={...u,location:e};c(t),r?.(t),s&&(s("jobMap",{coordinates:t,map:d},{shouldDirty:!0}),s("assetsMap",{assets:f},{shouldDirty:!0}))}},l)},[d,u,y,r,l,h,g,s,f]),b=(0,t.useCallback)(e=>{m(e),s&&(s("jobMap",{coordinates:u,map:e},{shouldDirty:!0}),s("assetsMap",{assets:f},{shouldDirty:!0}))},[s,f,u]),_=(0,t.useCallback)(e=>{c(t=>{let i={...t,...e};return s&&(s("jobMap",{coordinates:i,map:d},{shouldDirty:!0}),s("assetsMap",{assets:f},{shouldDirty:!0})),i})},[s,d,f]),x=(0,t.useCallback)(e=>{p(t=>{let i=[...t.filter(t=>e.some(e=>e.value===t.id)),...e.filter(e=>!t.some(t=>t.id===e.value)).map(e=>({id:e.value,map:"location"}))];return o?.(i),s&&(s("jobMap",{coordinates:u,map:d},{shouldDirty:!0}),s("assetsMap",{assets:i},{shouldDirty:!0})),i})},[o,s,d,u]),S=(0,t.useCallback)(e=>{p(e),o?.(e),s&&(s("jobMap",{coordinates:u,map:d},{shouldDirty:!0}),s("assetsMap",{assets:e},{shouldDirty:!0}))},[o,s,d,u]);return{coordinates:u,selectedMap:d,assetsMap:f,setSelectedMap:b,handleChangeCoordinates:v,updateCoordinates:_,setAssetsMap:S,handleChangeAssets:x}}])},364797,e=>{var t=e.i(191788),i=e.i(432171),n=e.i(195952),a=e.i(594301);e.s(["f",0,e=>{let{locationId:r,sublocationId:o,assetIds:s=[],selectedMap:l}=e,{user:u}=(0,a.f)(),{data:{items:c}={items:[]}}=(0,i.t)(n.J,{variables:{adminId:u.adminId,entityId:r,entity:"Location",category:"locationFloorplan",type:"image"},skip:!r}),{data:{items:d}={items:[]}}=(0,i.t)(n.J,{variables:{adminId:u.adminId,entityId:o,entity:"Sublocation",category:"sublocationFloorplan",type:"image"},skip:!o}),{data:{assets:m}={assets:[]}}=(0,i.t)(n.q,{variables:{ids:s},skip:!s.length}),f=(0,t.useMemo)(()=>"location"===l?c:"sublocation"===l?d:[],[l,c,d]),p=(0,t.useMemo)(()=>f?.[0]?.item?.filename,[f]);return{locationItems:c,sublocationItems:d,assetsMetaData:m,selectedItems:f,imageName:p,hasMap:!!p,filename:p}}])},787009,e=>{var t=e.i(877341),i=e.i(35818),n=e.i(176278),a=e.i(851123),r=e.i(191788);e.s(["f",0,()=>{let[e,o]=(0,r.useState)(""),[s,{data:{items:l}={items:[]},loading:u}]=(0,t.f)(a.T,{variables:{q:""!==e?`${e}%`:null,orderBy:[{name:"asc"}]}}),[c]=(0,t.f)(n.f),[d]=(0,t.f)(i.U),[m]=(0,t.f)(a.z);return{setShortJobDescription:{loading:u,options:l,onSearchChange:o,onOpen:()=>s()},getShortJobDescriptionQuestions:m,getShortJobDescription:c,getPriority:d}}])},471612,63767,e=>{var t=e.i(191788),i=e.i(185242),n=e.i(122965),a=e.i(21557);let r=[];e.s(["f",0,e=>{let o,{jobId:s,customerId:l,locationId:u,serviceId:c,excludeJobId:d,filterByService:m=!0,includeWarning:f=!1,types:p,timeZone:h=Intl.DateTimeFormat().resolvedOptions().timeZone,enabled:g=!0,initialSort:y}=e,v=(0,a.f)(),{reference:b,pagination:_,order:x}=(0,n.f)(y?{initialSort:y}:{}),{orderBy:S,orderDir:I}={orderBy:((o=x[0])?Object.keys(o)[0]:"id")||"id",orderDir:(o?String(Object.values(o)[0]):"desc").startsWith("desc")?"desc":"asc"},w=null!=s||null!=l&&null!=u,$=!w,j=(0,t.useMemo)(()=>{if(w)return(e=>{let{jobId:t,customerId:i,locationId:n,serviceId:a,excludeJobId:r,filterByService:o=!0,includeWarning:s=!1,types:l,timeZone:u,limit:c,offset:d,orderBy:m,orderDir:f}=e,p={limit:c,offset:d,orderBy:m,orderDir:f,includeWarning:s};return p.filterByService=o,null!=t?p.jobId=t:(null!=i&&(p.customerId=i),null!=n&&(p.locationId=n),null!=a&&(p.serviceId=a),null!=r&&(p.excludeJobId=r)),l&&l.length>0&&(p.types=[...l]),u&&(p.timeZone=u),p})({jobId:s,customerId:l,locationId:u,serviceId:c,excludeJobId:d,filterByService:m,includeWarning:f,types:p,timeZone:h,limit:_.limit,offset:_.offset,orderBy:S,orderDir:I})},[w,s,l,u,c,d,m,f,p,h,_.limit,_.offset,S,I]),{data:M,isLoading:C}=(0,i.f)("/job/history",{queryKey:"job-history",skip:$||!g,params:j,onError:()=>{v.show({content:"Could not load job history",severity:"error"})}}),U=$?r:M?.jobs??r;return{reference:b,jobs:U,totalCount:$?0:M?.count??0,jobHistoryWarning:!$&&!!M?.hasWarning,loading:C}}],471612);var o=e.i(391398),s=e.i(773831),l=e.i(813843),u=e.i(322135),c=e.i(858564),d=e.i(820726),m=e.i(529422),f=e.i(624841),p=e.i(65295);e.s(["Z",0,e=>{let{numberPrefix:t,numberSuffix:i}=e;return[{field:"id",headerName:"Job ID",flex:1,minWidth:100,renderCell:e=>{let{row:n}=e,a=n.warningLevel;return(0,o.jsxs)(l.f,{direction:"row",alignItems:"center",gap:1,children:[a&&(0,o.jsx)(u.f,{title:"Warning! Please investigate for duplicate job or recurring issue.",children:(0,o.jsx)(d.default,{color:a,sx:{fontSize:24,mt:"-4px"}})}),(0,o.jsx)(m.f,{id:n.id,number:n.number,numberPrefix:t,numberSuffix:i,openCanvas:!0,type:n.type})]})}},{field:"description",headerName:"Description",flex:1,minWidth:140,sortable:!1,renderCell:e=>{let{row:t}=e;return t.shortJobDesc?.[0]?.taxonomy.name||"-"}},{field:"service",headerName:"Service",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return t.service?.name||"-"}},{field:"status",headerName:"Status",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,o.jsx)(f.f,{value:t.status})}},{field:"createdAt",headerName:"Date Created",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return(0,p.f)(t.createdAt)}}]},"g",0,e=>{let{numberPrefix:t,numberSuffix:i,onViewReport:n,openCanvas:a=!1}=e;return[{field:"createdAt",headerName:"Date",flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return(0,p.f)(t.createdAt)}},{field:"id",headerName:"Job ID",flex:1,minWidth:100,renderCell:e=>{let{row:n}=e;return(0,o.jsxs)(l.f,{direction:"row",alignItems:"center",gap:1,children:[n.warningLevel&&(0,o.jsx)(u.f,{title:"Warning! Please investigate for duplicate job or recurring issue.",children:(0,o.jsx)(d.default,{color:n.warningLevel,sx:{fontSize:24,mt:"-4px"}})}),(0,o.jsx)(m.f,{id:n.id,number:n.number,numberPrefix:t,numberSuffix:i,openCanvas:a,type:n.type})]})}},{field:"service",headerName:"Service",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return t.service?.name||"-"}},{field:"report",align:"center",headerAlign:"center",headerName:"Job report",minWidth:70,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,o.jsx)(u.f,{title:t.hasReport?"View job report":"No job report available",children:(0,o.jsx)("span",{children:(0,o.jsx)(s.f,{"aria-label":"View job report",color:"secondary",disabled:!t.hasReport,onClick:()=>n(t),children:(0,o.jsx)(c.default,{})})})})}}]}],63767)},756311,825051,e=>{var t=e.i(391398),i=e.i(122989),n=e.i(280445);let a="amount",r=[{label:"Amount",value:a},{label:"N/A",value:"n/a"}],o=(0,n.f)("div")({width:96,height:"36px",display:"flex",alignItems:"center","& .MuiFormControl-root":{width:96,minWidth:0,height:"36px",flexDirection:"row",alignItems:"center"}}),s=(0,n.f)(i.f)(e=>{let{theme:t}=e;return{width:96,height:"36px",fontSize:"14px",fontWeight:t.typography.fontWeightBold,backgroundColor:"transparent","& .MuiSelect-select.MuiInputBase-input":{padding:t.spacing(0,3,0,1),display:"flex",alignItems:"center",height:"36px",boxSizing:"border-box"},"& .MuiSelect-icon":{right:t.spacing(.5),top:"calc(50% - 12px)"}}});e.s(["f",0,e=>{let{isNa:i,onModeChange:n}=e;return(0,t.jsx)(o,{children:(0,t.jsx)(s,{hideLabel:!0,color:"secondary",variant:"standard",disableUnderline:!0,value:i?"n/a":a,onChange:e=>{n("n/a"===e.target.value)},options:[...r],inputProps:{"aria-label":"Spend threshold mode"}})})}],756311);var l=e.i(964770);let u=(0,n.f)(l.f)(e=>{let{theme:t}=e;return{"& .MuiInputBase-root.Mui-disabled":{backgroundColor:t.palette.background.paper},"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:t.palette.text.primary,backgroundColor:t.palette.background.paper}}});e.s(["f",0,u],825051)},850504,e=>{var t=e.i(877341),i=e.i(669839),n=e.i(851123),a=e.i(191788);e.s(["f",0,e=>{let{customerId:r,customerUserId:o,locationId:s,assetCategoryId:l,sublocationId:u}=e,[c,d]=(0,a.useState)(""),[m,f]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),[g,y]=(0,a.useState)(""),[v,{data:{items:b}={items:[]},loading:_}]=(0,t.f)(n.b,{variables:{customerId:r,customerUserId:o,q:""!==c?`%${c}%`:null}}),[x]=(0,t.f)(i._),[S,{data:{items:I}={items:[]},loading:w}]=(0,t.f)(n.i,{variables:{locationId:s??0,q:""!==m?`%${m}%`:null}}),[$,{data:{items:j}={items:[]},loading:M}]=(0,t.f)(n.W,{variables:{where:{type:{_eq:"assetCategory"},isGroup:{_eq:!1},status:{_eq:"active"},name:{_ilike:""!==p?`%${p}%`:null},CategoryAssets:{locationId:{_eq:s}}}}}),[C,{data:{items:U}={items:[]},loading:k}]=(0,t.f)(n.B,{variables:{locationId:s,sublocationId:u,categoryId:l,q:""!==g?`%${g}%`:null}});return{location:{loading:_,options:b.map(e=>{let t=e.registeredAddress?.[0]?.address;return{label:`${e.label?.trim()?e.label+", ":""}${t?.addressLine1?t?.addressLine1+", ":""}${t?.city?t?.city+", ":""}`,value:e.value}}),onSearchChange:d,onOpen:()=>v()},prefetchLocation:x,sublocation:{disabled:!s,loading:w,options:I,onSearchChange:f,onOpen:()=>S()},assetCategory:{loading:M,options:j,onSearchChange:h,onOpen:()=>$()},asset:{disabled:!s||!l,loading:k,options:U,onSearchChange:y,onOpen:()=>C()}}}])},695567,e=>{var t=e.i(320861);e.s(["f",0,e=>{let{subtype:i,slas:n=[],customerSlas:a=[],locationSlas:r=[]}=e;return n.filter(e=>e.subtype===i).map(e=>{let i=r?.find(t=>t.slaId===e.id&&t.inUse),n=a?.find(t=>t.slaId===e.id&&t.inUse),o=i?.notes||n?.notes,s=(0,t.H)({time:i?.onSite,unit:i?.onSiteUnit},{time:n?.onSite,unit:n?.onSiteUnit},{time:e.onSite,unit:e.onSiteUnit}),l=(0,t.H)({time:i?.jobReport,unit:i?.jobReportUnit},{time:n?.jobReport,unit:n?.jobReportUnit},{time:e.jobReport,unit:e.jobReportUnit}),u=(0,t.H)({time:i?.quoteReturned,unit:i?.quoteReturnedUnit},{time:n?.quoteReturned,unit:n?.quoteReturnedUnit},{time:e.quoteReturned,unit:e.quoteReturnedUnit});return{id:e.id,label:e.label,value:e.id,notes:o||e.notes,onSite:s.time,onSiteUnit:s.unit,jobReport:l.time,jobReportUnit:l.unit,quoteReturned:u.time,quoteReturnedUnit:u.unit,disabled:!!(r?.find(t=>t.slaId===e.id&&!t.inUse)||a?.find(t=>t.slaId===e.id&&!t.inUse))}})}])},131750,677497,e=>{var t=e.i(391398),i=e.i(755548),n=e.i(382161),a=e.i(77052),r=e.i(185758),o=e.i(540158),s=e.i(556918);e.s(["f",0,e=>{let{open:l,formName:u,onClose:c,onConfirm:d,loading:m=!1}=e;return(0,t.jsxs)(n.f,{open:l,onClose:m?void 0:c,children:[(0,t.jsx)(s.f,{children:"Remove custom form"}),(0,t.jsx)(r.f,{children:(0,t.jsxs)(o.f,{children:['Remove "',u,'" from this work order? Any saved answers and uploaded files for this form will be permanently deleted. This cannot be undone.']})}),(0,t.jsxs)(a.f,{children:[(0,t.jsx)(i.f,{color:"secondary",variant:"outlined",onClick:c,disabled:m,children:"Cancel"}),(0,t.jsx)(i.f,{color:"danger",variant:"contained",onClick:d,disabled:m,children:"Remove"})]})]})}],131750),e.s(["f",0,(e,t)=>{e&&(e.description&&t.description?.(e.description),e.tags&&t.tags?.(e.tags),e.costCategorySelected&&t.costCategory?.({label:e.costCategorySelected.label,value:e.costCategorySelected.value}),e.serviceSelected&&t.service?.({label:e.serviceSelected.label,value:e.serviceSelected.value}),e.amount&&(t.pricing?.("fixed"),t.customerAmount?.(e.amount)),e.supplierMaterialsAmount&&(t.pricing?.("fixed"),t.supplierMaterialsAmount?.(e.supplierMaterialsAmount)),e.supplierLabourAmount&&(t.pricing?.("fixed"),t.supplierLabourAmount?.(e.supplierLabourAmount)))}],677497)},618606,e=>{var t=e.i(191788),i=e.i(432171),n=e.i(441625);e.s(["f",0,function(){let{mapForm:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[a,r]=(0,t.useState)(""),{data:o,loading:s}=(0,i.t)(n.W,{variables:{q:a.trim()?`%${a.trim()}%`:null,limit:50}}),l=(0,t.useCallback)(e=>{r(e)},[]);return{activeForms:(0,t.useMemo)(()=>[...o?.Form??[]].map(t=>({...t,value:t.id,label:t.name??"",...e?.(t)})).sort((e,t)=>e.label.localeCompare(t.label,void 0,{sensitivity:"base"})),[o?.Form,e]),formsLoading:s,onSearchChange:l}}])},832323,e=>{e.s(["f",0,e=>"submitted"===e||"submittedBySupplier"===e])},984933,e=>{var t=e.i(877341),i=e.i(851123),n=e.i(191788);e.s(["f",0,()=>{let[e,a]=(0,n.useState)(""),[r,{data:{items:o}={items:[]},loading:s}]=(0,t.f)(i.d,{variables:{q:""!==e?`%${e}%`:null}});return{loading:s,options:o,onSearchChange:a,onOpen:()=>r()}}])},667808,e=>{var t=e.i(877341),i=e.i(851123),n=e.i(191788);e.s(["f",0,()=>{let[e,a]=(0,n.useState)(""),[r,{data:{items:o}={items:[]},loading:s}]=(0,t.f)(i.D,{variables:{q:""!==e?`%${e}%`:null}});return{loading:s,options:o,onSearchChange:a,onOpen:()=>r()}}])},858564,(e,t,i)=>{var n=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e.r(421506)),r=e.r(391398);i.default=(0,a.default)([(0,r.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},"0"),(0,r.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"},"1")],"ContentPasteSearchOutlined")},540158,e=>{var t=e.i(460997),i=e.i(75907),n=e.i(191788),a=e.i(889878),r=e.i(600961),o=e.i(396851),s=e.i(896994),l=e.i(395724),u=e.i(115871),c=e.i(713149),d=e.i(46739);function m(e){return(0,d.f)("MuiDialogContentText",e)}(0,c.f)("MuiDialogContentText",["root"]);var f=e.i(391398);let p=["children","className"],h=(0,o.f)(u.f,{shouldForwardProp:e=>(0,s.f)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),g=n.forwardRef(function(e,n){let o=(0,l.f)({props:e,name:"MuiDialogContentText"}),{className:s}=o,u=(0,t.f)(o,p),c=(e=>{let{classes:t}=e,n=(0,r.f)({root:["root"]},m,t);return(0,i.f)({},t,n)})(u);return(0,f.jsx)(h,(0,i.f)({component:"p",variant:"body1",color:"text.secondary",ref:n,ownerState:u,className:(0,a.f)(c.root,s)},o,{classes:c}))});e.s(["f",0,g],540158)},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])}],409021,(e,t,i)=>{!function(i,n){if("function"==typeof define&&define.amd){let t;void 0!==(t=n(e.r(362537)))&&e.v(t)}else if(1)try{t.exports=n(e.r(362537))}catch(e){t.exports=n}i&&(i.momentDurationFormatSetup=i.moment?n(i.moment):n)}(e.e,function(e){var t=!1,i=!1,n=!1,a=!1,r="escape years months weeks days hours minutes seconds milliseconds general".split(" "),o=[{type:"seconds",targets:[{type:"minutes",value:60},{type:"hours",value:3600},{type:"days",value:86400},{type:"weeks",value:604800},{type:"months",value:2678400},{type:"years",value:31536e3}]},{type:"minutes",targets:[{type:"hours",value:60},{type:"days",value:1440},{type:"weeks",value:10080},{type:"months",value:44640},{type:"years",value:525600}]},{type:"hours",targets:[{type:"days",value:24},{type:"weeks",value:168},{type:"months",value:744},{type:"years",value:8760}]},{type:"days",targets:[{type:"weeks",value:7},{type:"months",value:31},{type:"years",value:365}]},{type:"months",targets:[{type:"years",value:12}]}];function s(e,t){return!(t.length>e.length)&&-1!==e.indexOf(t)}function l(e){for(var t="";e;)t+="0",e-=1;return t}function u(e,t){var i=e+"+"+y(w(t).sort(),function(e){return e+":"+t[e]}).join(",");return u.cache[i]||(u.cache[i]=Intl.NumberFormat(e,t)),u.cache[i]}function c(e,t,r){var o,s,d,m,f,p=t.useToLocaleString,h=t.useGrouping,g=h&&t.grouping.slice(),y=t.maximumSignificantDigits,v=t.minimumIntegerDigits||1,b=t.fractionDigits||0,_=t.groupingSeparator,x=t.decimalSeparator;if(p&&r){var S={minimumIntegerDigits:v,useGrouping:h};if(b&&(S.maximumFractionDigits=b,S.minimumFractionDigits=b),y&&e>0&&(S.maximumSignificantDigits=y),n){if(!a){var w=I({},t);w.useGrouping=!1,w.decimalSeparator=".",e=parseFloat(c(e,w),10)}return u(r,S).format(e)}if(!i){var w=I({},t);w.useGrouping=!1,w.decimalSeparator=".",e=parseFloat(c(e,w),10)}return e.toLocaleString(r,S)}var $=(o=y?e.toPrecision(y+1):e.toFixed(b+1)).split("e");m=$[1]||"",d=($=$[0].split("."))[1]||"";var j=(s=$[0]||"").length,M=d.length,C=j+M,U=s+d;(y&&C===y+1||!y&&M===b+1)&&((U=function(e){for(var t=e.split("").reverse(),i=0,n=!0;n&&i<t.length;)i?"9"===t[i]?t[i]="0":(t[i]=(parseInt(t[i],10)+1).toString(),n=!1):(5>parseInt(t[i],10)&&(n=!1),t[i]="0"),i+=1;return n&&t.push("1"),t.reverse().join("")}(U)).length===C+1&&(j+=1),M&&(U=U.slice(0,-1)),s=U.slice(0,j),d=U.slice(j)),y&&(d=d.replace(/0*$/,""));var k=parseInt(m,10);k>0?d.length<=k?(d+=l(k-d.length),s+=d,d=""):(s+=d.slice(0,k),d=d.slice(k)):k<0&&(d=l(Math.abs(k)-s.length)+s+d,s="0"),!y&&((d=d.slice(0,b)).length<b&&(d+=l(b-d.length)),s.length<v&&(s=l(v-s.length)+s));var D="";if(h)for($=s;$.length;)g.length&&(f=g.shift()),D&&(D=_+D),D=$.slice(-f)+D,$=$.slice(0,-f);else D=s;return d&&(D=D+x+d),D}function d(e,t){return e.label.length>t.label.length?-1:+(e.label.length<t.label.length)}u.cache={};var m={durationLabelsStandard:{S:"millisecond",SS:"milliseconds",s:"second",ss:"seconds",m:"minute",mm:"minutes",h:"hour",hh:"hours",d:"day",dd:"days",w:"week",ww:"weeks",M:"month",MM:"months",y:"year",yy:"years"},durationLabelsShort:{S:"msec",SS:"msecs",s:"sec",ss:"secs",m:"min",mm:"mins",h:"hr",hh:"hrs",d:"dy",dd:"dys",w:"wk",ww:"wks",M:"mo",MM:"mos",y:"yr",yy:"yrs"},durationTimeTemplates:{HMS:"h:mm:ss",HM:"h:mm",MS:"m:ss"},durationLabelTypes:[{type:"standard",string:"__"},{type:"short",string:"_"}],durationPluralKey:function(e,t,i){return 1===t&&null===i?e:e+e}};function f(e){return"[object Array]"===Object.prototype.toString.call(e)}function p(e){return"[object Object]"===Object.prototype.toString.call(e)}function h(e,t){var i,n=0,a=e&&e.length||0;for("function"!=typeof t&&(i=t,t=function(e){return e===i});n<a;){if(t(e[n]))return e[n];n+=1}}function g(e,t){var i=0,n=e.length;if(e&&n)for(;i<n;){if(!1===t(e[i],i))return;i+=1}}function y(e,t){var i=0,n=e.length,a=[];if(!e||!n)return a;for(;i<n;)a[i]=t(e[i],i),i+=1;return a}function v(e,t){return y(e,function(e){return e[t]})}function b(e){var t=[];return g(e,function(e){e&&t.push(e)}),t}function _(e){var t=[];return g(e,function(e){h(t,e)||t.push(e)}),t}function x(e,t){var i=[];return g(e,function(e){g(t,function(t){e===t&&i.push(e)})}),_(i)}function S(e,t){var i=[];return g(e,function(n,a){if(!t(n))return i=e.slice(a),!1}),i}function I(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);return e}function w(e){var t=[];for(var i in e)e.hasOwnProperty(i)&&t.push(i);return t}function $(e,t){var i=0,n=e.length;if(!e||!n)return!1;for(;i<n;){if(!0===t(e[i],i))return!0;i+=1}return!1}function j(e){return"3.6"===e(3.55,"en",{useGrouping:!1,minimumIntegerDigits:1,minimumFractionDigits:1,maximumFractionDigits:1})}function M(e){var t=!0;return!!(t=(t=(t="1"===e(1,"en",{minimumIntegerDigits:1}))&&"01"===e(1,"en",{minimumIntegerDigits:2}))&&"001"===e(1,"en",{minimumIntegerDigits:3}))&&!!(t=(t=(t=(t=t&&"100"===e(99.99,"en",{maximumFractionDigits:0,minimumFractionDigits:0}))&&"100.0"===e(99.99,"en",{maximumFractionDigits:1,minimumFractionDigits:1}))&&"99.99"===e(99.99,"en",{maximumFractionDigits:2,minimumFractionDigits:2}))&&"99.990"===e(99.99,"en",{maximumFractionDigits:3,minimumFractionDigits:3}))&&!!(t=(t=(t=(t=(t=t&&"100"===e(99.99,"en",{maximumSignificantDigits:1}))&&"100"===e(99.99,"en",{maximumSignificantDigits:2}))&&"100"===e(99.99,"en",{maximumSignificantDigits:3}))&&"99.99"===e(99.99,"en",{maximumSignificantDigits:4}))&&"99.99"===e(99.99,"en",{maximumSignificantDigits:5}))&&!!(t=(t=t&&"1,000"===e(1e3,"en",{useGrouping:!0}))&&"1000"===e(1e3,"en",{useGrouping:!1}))}function C(){var e,t,i=[].slice.call(arguments),n={};if(g(i,function(e,i){if(!i){if(!f(e))throw"Expected array as the first argument to durationsFormat.";t=e}if("string"==typeof e||"function"==typeof e){n.template=e;return}if("number"==typeof e){n.precision=e;return}p(e)&&I(n,e)}),!t||!t.length)return[];n.returnMomentTypes=!0;var a=y(t,function(e){return e.format(n)}),o=x(r,_(v((e=[],g(a,function(t){e=e.concat(t)}),e),"type"))),s=n.largest;return s&&(o=o.slice(0,s)),n.returnMomentTypes=!1,n.outputTypes=o,y(t,function(e){return e.format(n)})}function U(){var i,a=[].slice.call(arguments),l=I({},this.format.defaults),u=this.asMilliseconds(),j=this.asMonths();"function"==typeof this.isValid&&!1===this.isValid()&&(u=0,j=0);var M=u<0,C=e.duration(Math.abs(u),"milliseconds"),U=e.duration(Math.abs(j),"months");g(a,function(e){if("string"==typeof e||"function"==typeof e){l.template=e;return}if("number"==typeof e){l.precision=e;return}p(e)&&I(l,e)});var k={years:"y",months:"M",weeks:"w",days:"d",hours:"h",minutes:"m",seconds:"s",milliseconds:"S"},D={escape:/\[(.+?)\]/,years:/\*?[Yy]+/,months:/\*?M+/,weeks:/\*?[Ww]+/,days:/\*?[Dd]+/,hours:/\*?[Hh]+/,minutes:/\*?m+/,seconds:/\*?s+/,milliseconds:/\*?S+/,general:/.+?/};l.types=r;var q=function(e){return h(r,function(t){return D[t].test(e)})},A=RegExp(y(r,function(e){return D[e].source}).join("|"),"g");l.duration=this;var L="function"==typeof l.template?l.template.apply(l):l.template,V=l.outputTypes,T=l.returnMomentTypes,F=l.largest,R=[];!V&&(f(l.stopTrim)&&(l.stopTrim=l.stopTrim.join("")),l.stopTrim&&g(l.stopTrim.match(A),function(e){var t=q(e);"escape"!==t&&"general"!==t&&R.push(t)}));var W=e.localeData();W||(W={}),g(w(m),function(e){if("function"==typeof m[e]){W[e]||(W[e]=m[e]);return}W["_"+e]||(W["_"+e]=m[e])}),g(w(W._durationTimeTemplates),function(e){L=L.replace("_"+e+"_",W._durationTimeTemplates[e])});var N=l.userLocale||e.locale(),O=l.useLeftUnits,P=l.usePlural,G=l.precision,B=l.forceLength,E=l.useGrouping,H=l.trunc,J=l.useSignificantDigits&&G>0,z=J?l.precision:0,K=z,Z=l.minValue,Y=!1,X=l.maxValue,Q=!1,ee=l.useToLocaleString,et=l.groupingSeparator,ei=l.decimalSeparator,en=l.grouping;ee=ee&&(t||n);var ea=l.trim;f(ea)&&(ea=ea.join(" ")),null===ea&&(F||X||J)&&(ea="all"),(null===ea||!0===ea||"left"===ea||"right"===ea)&&(ea="large"),!1===ea&&(ea="");var er=function(e){return e.test(ea)},eo=/both/,es=/^all|[^sm]all/,el=F>0||$([/large/,eo,es],er),eu=$([/small/,eo,es],er),ec=$([/mid/,es],er),ed=$([/final/,es],er),em=y(L.match(A),function(e,t){var i=q(e);return"*"===e.slice(0,1)&&(e=e.slice(1),"escape"!==i&&"general"!==i&&R.push(i)),{index:t,length:e.length,text:"",token:"escape"===i?e.replace(D.escape,"$1"):e,type:"escape"===i||"general"===i?null:i}}),ef={index:0,length:0,token:"",text:"",type:null},ep=[];O&&em.reverse(),g(em,function(e){if(e.type){(ef.type||ef.text)&&ep.push(ef),ef=e;return}O?ef.text=e.token+ef.text:ef.text+=e.token}),(ef.type||ef.text)&&ep.push(ef),O&&ep.reverse();var eh=x(r,_(b(v(ep,"type"))));if(!eh.length)return v(ep,"text").join("");eh=y(eh,function(e,t){var i,n=t+1===eh.length,a=!t,r=Math.floor(i="years"===e||"months"===e?U.as(e):C.as(e)),o=i-r,s=h(ep,function(t){return e===t.type});return a&&X&&i>X&&(Q=!0),n&&Z&&Math.abs(l.duration.as(e))<Z&&(Y=!0),a&&null===B&&s.length>1&&(B=!0),C.subtract(r,e),U.subtract(r,e),{rawValue:i,wholeValue:r,decimalValue:n?o:0,isSmallest:n,isLargest:a,type:e,tokenLength:s.length}});var eg=H?Math.floor:Math.round,ey=function(e,t){var i=Math.pow(10,t);return eg(e*i)/i},ev=!1,eb=!1,e_=function(e,t){var i={useGrouping:E,groupingSeparator:et,decimalSeparator:ei,grouping:en,useToLocaleString:ee};return J&&(z<=0?(e.rawValue=0,e.wholeValue=0,e.decimalValue=0):(i.maximumSignificantDigits=z,e.significantDigits=z)),Q&&!eb&&(e.isLargest?e.wholeValue=X:e.wholeValue=0,e.decimalValue=0),Y&&!eb&&(e.isSmallest?e.wholeValue=Z:e.wholeValue=0,e.decimalValue=0),e.isSmallest||e.significantDigits&&e.significantDigits-e.wholeValue.toString().length<=0?G<0?e.value=ey(e.wholeValue,G):0===G?e.value=eg(e.wholeValue+e.decimalValue):J?(H?e.value=ey(e.rawValue,z-e.wholeValue.toString().length):e.value=e.rawValue,e.wholeValue&&(z-=e.wholeValue.toString().length)):(i.fractionDigits=G,H?e.value=e.wholeValue+ey(e.decimalValue,G):e.value=e.wholeValue+e.decimalValue):J&&e.wholeValue?(e.value=Math.round(ey(e.wholeValue,e.significantDigits-e.wholeValue.toString().length)),z-=e.wholeValue.toString().length):e.value=e.wholeValue,e.tokenLength>1&&(B||ev)&&(i.minimumIntegerDigits=e.tokenLength,eb&&i.maximumSignificantDigits<e.tokenLength&&delete i.maximumSignificantDigits),!ev&&(e.value>0||""===ea||h(R,e.type)||h(V,e.type))&&(ev=!0),e.formattedValue=c(e.value,i,N),i.useGrouping=!1,i.decimalSeparator=".",e.formattedValueEn=c(e.value,i,"en"),2===e.tokenLength&&"milliseconds"===e.type&&(e.formattedValueMS=c(e.value,{minimumIntegerDigits:3,useGrouping:!1},"en").slice(0,2)),e};if((eh=b(eh=y(eh,e_))).length>1){var ex=function(e){return h(eh,function(t){return t.type===e})};g(o,function(e){var t=ex(e.type);t&&g(e.targets,function(e){var i=ex(e.type);i&&parseInt(t.formattedValueEn,10)===e.value&&(t.rawValue=0,t.wholeValue=0,t.decimalValue=0,i.rawValue+=1,i.wholeValue+=1,i.decimalValue=0,i.formattedValueEn=i.wholeValue.toString(),eb=!0)})})}return(eb&&(ev=!1,z=K,eh=b(eh=y(eh,e_))),V&&!(Q&&!l.trim))?eh=b(eh=y(eh,function(e){return h(V,function(t){return e.type===t})?e:null})):(el&&(eh=S(eh,function(e){return!e.isSmallest&&!e.wholeValue&&!h(R,e.type)})),F&&eh.length&&(eh=eh.slice(0,F)),eu&&eh.length>1&&(i=eh,eh=S(i.slice().reverse(),function(e){return!e.wholeValue&&!h(R,e.type)&&!e.isLargest}).reverse()),ec&&(eh=b(eh=y(eh,function(e,t){return t>0&&t<eh.length-1&&!e.wholeValue?null:e}))),!ed||1!==eh.length||eh[0].wholeValue||!H&&eh[0].isSmallest&&eh[0].rawValue<Z||(eh=[])),T?eh:(g(ep,function(e){var t=k[e.type],i=h(eh,function(t){return t.type===e.type});if(t&&i){var n,a,r=i.formattedValueEn.split(".");r[0]=parseInt(r[0],10),r[1]?r[1]=parseFloat("0."+r[1],10):r[1]=null;var o=W.durationPluralKey(t,r[0],r[1]),l=(a=[],g(w(n=W),function(e){if("_durationLabels"===e.slice(0,15)){var i=e.slice(15).toLowerCase();g(w(n[e]),function(r){r.slice(0,1)===t&&a.push({type:i,key:r,label:n[e][r]})})}}),a),u=!1,c={};g(W._durationLabelTypes,function(t){var i=h(l,function(e){return e.type===t.type&&e.key===o});i&&(c[i.type]=i.label,s(e.text,t.string)&&(e.text=e.text.replace(t.string,i.label),u=!0))}),P&&!u&&(l.sort(d),g(l,function(t){return c[t.type]===t.label?!s(e.text,t.label)&&void 0:s(e.text,t.label)?(e.text=e.text.replace(t.label,c[t.type]),!1):void 0}))}}),(ep=y(ep,function(e){if(!e.type)return e.text;var t=h(eh,function(t){return t.type===e.type});if(!t)return"";var i="";return O&&(i+=e.text),(M&&Q||!M&&Y)&&(i+="< ",Q=!1,Y=!1),(M&&Y||!M&&Q)&&(i+="> ",Q=!1,Y=!1),M&&(t.value>0||""===ea||h(R,t.type)||h(V,t.type))&&(i+="-",M=!1),"milliseconds"===e.type&&t.formattedValueMS?i+=t.formattedValueMS:i+=t.formattedValue,O||(i+=e.text),i})).join("").replace(/(,| |:|\.)*$/,"").replace(/^(,| |:|\.)*/,""))}function k(){var e=this.duration,t=function(t){return e._data[t]},i=h(this.types,t),n=function(e,t){for(var i=e.length;i-=1;)if(t(e[i]))return e[i]}(this.types,t);switch(i){case"milliseconds":return"S __";case"seconds":case"minutes":return"*_MS_";case"hours":return"_HMS_";case"days":if(i===n)return"d __";case"weeks":if(i===n)return"w __";return null===this.trim&&(this.trim="both"),"w __, d __, h __";case"months":if(i===n)return"M __";case"years":if(i===n)return"y __";return null===this.trim&&(this.trim="both"),"y __, M __, d __";default:return null===this.trim&&(this.trim="both"),"y __, d __, h __, m __, s __"}}function D(e){if(!e)throw"Moment Duration Format init cannot find moment instance.";e.duration.format=C,e.duration.fn.format=U,e.duration.fn.format.defaults={trim:null,stopTrim:null,largest:null,maxValue:null,minValue:null,precision:0,trunc:!1,forceLength:null,userLocale:null,usePlural:!0,useLeftUnits:!1,useGrouping:!0,useSignificantDigits:!1,template:k,useToLocaleString:!0,groupingSeparator:",",decimalSeparator:".",grouping:[3]},e.updateLocale("en",m)}var q=function(e,t,i){return e.toLocaleString(t,i)};i=(t=function(){try{0..toLocaleString("i")}catch(e){return"RangeError"===e.name}return!1}()&&M(q))&&j(q);var A=function(e,t,i){if("u">typeof window&&window&&window.Intl&&window.Intl.NumberFormat)return window.Intl.NumberFormat(t,i).format(e)};return a=(n=M(A))&&j(A),D(e),D})}]);