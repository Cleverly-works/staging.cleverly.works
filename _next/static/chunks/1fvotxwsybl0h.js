(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[363102,e=>{var t=e.i(965016);e.s(["f",()=>t.U])},111341,e=>{var t=e.i(391398);e.i(536594);var r=e.i(663782),i=e.i(543587),n=e.i(363102),s=e.i(114974),a=e.i(692499),o=e.i(775279),l=e.i(755548),d=e.i(88152),u=e.i(813843),c=e.i(280445),h=e.i(115871),f=e.i(191788),m=e.i(707065);let p=()=>m.m`
  .editor-container {
    border-radius: 0;
    background: none;
  }

  .editor-input {
    min-height: auto;
    padding: 0;
    border-radius: 0;
  }
`;var g=e.i(417715),y=e.i(36380),_=e.i(587369);let b=(0,c.f)(d.f)(e=>{let{theme:t,color:r,isMobile:i,fullWidth:n}=e;return{width:n||i?"100%":"500px",maxWidth:n?"100%":"500px",padding:"24px",borderLeft:`10px solid ${r?t.palette[r].main:t.palette.white.main}`,borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"}}),v=(0,c.f)("img")({height:"55px"});e.s(["f",0,e=>{let{fullWidth:d=!1,title:c,editorState:m,color:w,onOpen:x,onIgnore:C,notificationId:k}=e,A=(0,_.f)("(max-width: 800px)"),T=(0,_.f)("(max-width: 500px)"),S=(0,f.useMemo)(()=>"string"==typeof m?m:JSON.stringify(m),[m]);return(0,t.jsx)(b,{isMobile:A,color:w,fullWidth:d,children:(0,t.jsxs)(u.f,{direction:"row",spacing:2,children:[(0,t.jsx)(u.f,{pt:1,children:(0,t.jsx)(v,{src:"/static/icons/notification_alert.svg"})}),(0,t.jsxs)(u.f,{children:[(0,t.jsx)(h.f,{variant:"h6",fontWeight:700,children:c}),(0,t.jsx)(s.f,{settings:g.T,children:(0,t.jsx)(o.f,{initialConfig:{...y.Z,editorState:S,editable:!1},children:(0,t.jsx)(a.f,{children:k?(0,t.jsx)(n.f,{type:"Notification",id:k,children:(0,t.jsx)(i.f,{customStyles:p,children:(0,t.jsx)(r.f,{})})}):(0,t.jsx)(i.f,{customStyles:p,children:(0,t.jsx)(r.f,{})})})})}),(0,t.jsxs)(u.f,{direction:"row",spacing:A?4:8,mt:2,children:[x&&(0,t.jsx)(l.f,{variant:"contained",color:"secondary",size:"small",sx:{minWidth:T?"60px":"110px",borderRadius:"8px"},onClick:x,children:"Open"}),C&&(0,t.jsx)(l.f,{variant:"contained",color:"muiGray",size:"small",sx:{minWidth:T?"60px":"110px",borderRadius:"8px"},onClick:C,children:"Ignore"})]})]})]})})}],111341)},170582,e=>{e.i(350461);let t=["jpeg","jpg","png","gif","heic","webp"],r=["pdf","csv","doc","docx","xlsx","eml","msg"];[...t,...r];let i="image/*, .heic",n=".pdf, .csv, .doc, .docx, .xlsx, .eml, .msg, message/rfc822, application/vnd.ms-outlook",s=`${i}, ${n}`,a="https://aws-automation-staging.cleverly.works/api",o=`${a}/media/upload`,l=`${a}/media/upload-image`;e.s(["s",0,s,"f",0,n,"M",0,"JPEG, PNG, PDF, CSV, DOC, DOCX, XLSX, EML and MSG","m",0,i,"t",0,20,"H",0,"50 MB","G",0,l,"Q",0,o,"n",0,e=>{if(e.type.startsWith("image/"))return"image";if(e.type.startsWith("audio/"))return"audio";if(["application/pdf","text/csv","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","message/rfc822","application/vnd.ms-outlook"].includes(e.type))return"document";let i=e.name.split(".").pop()?.toLowerCase()||"";return t.includes(i)?"image":r.includes(i)?"document":"unknown"},"V",0,e=>e.size<=0x3200000])},472083,e=>{var t,r=((t={}).OWNER="owner",t.MANAGER="manager",t.USER="user",t.CONTRACTOR="contractor",t);e.s(["f",()=>r])},511667,e=>{var t=e.i(3878),r=e.i(105118),i=e.i(191788),n=e.i(190077),s=e.i(631328);e.s(["f",0,function(e,a){let{queryKey:o,method:l="GET",headers:d,body:u,params:c,pathParams:h,baseUrl:f,onCompleted:m,onError:p,refetchQueries:g,throwOnError:y=!1}=a,_=(0,t.r)(),b=(0,i.useRef)(null);if(g&&g.includes(o))throw Error("useLazyFetch: refetchQueries cannot include the queryKey");let{fetchQuery:v,refetchQuery:w,unregisterQuery:x,registerQuery:C}=_,k=(0,i.useMemo)(()=>(0,n.f)(),[]),[A,T]=(0,i.useState)(void 0),[S,E]=(0,i.useState)(null),[M,O]=(0,i.useState)(!1),[R,I]=(0,i.useState)(0),D=(0,i.useRef)(!1),L=(0,i.useRef)(void 0),$=(0,i.useRef)(m),j=(0,i.useRef)(p),z=(0,i.useRef)(g);(0,i.useEffect)(()=>{$.current=m,j.current=p,z.current=g});let q=(0,s.s)(u),P=(0,s.s)(c),N=(0,s.s)(h),F=(0,s.s)(R),U=(0,i.useCallback)(async t=>{b.current?.abort();let r=new AbortController;b.current=r,D.current=!0,E(null),O(!0);let i=!1,n=u||t?.body?{...u,...t?.body}:void 0;try{let i=await v(e,{baseUrl:f,method:l,headers:d,body:n,params:{...c,...t?.params},pathParams:{...h,...t?.pathParams},signal:r.signal});return T(i),$.current?.(i),z.current?.forEach(e=>{w(e)}),i}catch(t){if(t instanceof Error&&"AbortError"===t.name){i=!0,b.current===r&&O(!1);return}let e=t instanceof Error?t:Error("An unknown error occurred");if(E(e),j.current?.(e),y)throw e;return}finally{i||O(!1)}},[v,e,f,l,d,u,c,h,w,y]),B=(0,i.useCallback)(async e=>(L.current=e,U(e)),[U]);return(0,i.useEffect)(()=>(C(o,k,()=>I(e=>e+1),l),()=>{x(o,k)}),[k,l,o,C,x]),(0,i.useEffect)(()=>{!D.current||(0,r.f)(q,u)&&(0,r.f)(P,c)&&(0,r.f)(N,h)&&F===R||U(L.current).catch(()=>void 0)},[u,U,c,h,q,P,N,F,R]),(0,i.useEffect)(()=>()=>{b.current?.abort()},[]),[B,{data:A,error:S,isLoading:M,isError:!!S,refetch:()=>I(e=>e+1)}]}])},447090,e=>{var t=e.i(191788),r=e.i(21557),i=e.i(52495),n=e.i(93198),s=e.i(262887);let a=async(e,t)=>{if((0,n.Z)()){let r=await (0,i.t)(e,t);if(!r)throw Error("This file could not be opened");await (0,s.f)(r);return}let r=window.open("/download","_blank");if(!r)throw Error("The browser blocked the new tab. Allow pop-ups for this site and try again.");r.opener=null;let a=await (0,i.t)(e,t);if(!a)throw r.close(),Error("This file could not be opened");r.location.assign(a)};e.s(["f",0,()=>{let e=(0,r.f)();return(0,t.useCallback)((t,r)=>a(t,r).catch(()=>e.show({content:"This file could not be opened",severity:"error"})),[e])}],447090)},631328,e=>{var t=e.i(191788);e.s(["y",0,e=>{let r=(0,t.useRef)(void 0);return(0,t.useEffect)(function(){r.current=e}),r.current},"s",0,e=>{let r=(0,t.useRef)(e);return(0,t.useEffect)(function(){r.current=e}),r.current}])},562842,841298,e=>{var t=e.i(191788);let r=(0,t.createContext)(void 0);e.s(["f",0,r],841298),e.s(["f",0,()=>{let e=(0,t.useContext)(r);if(!e)throw Error("useSession must be used within the SessionProvider");return e}],562842)},262887,e=>{let t=async e=>{let t=window.Capacitor?.Plugins?.Browser;if(!t)throw Error("Unable to open the file on this device");await t.open({url:e})};e.s(["f",0,t])},195952,e=>{var t=e.i(159080);let r=t.f`
  query GetAssets(
    $where: Asset_bool_exp
    $limit: Int
    $offset: Int
    $order: [Asset_order_by!]
    $withMetrics: Boolean = false
    $withMetricMoney: Boolean = false
    $withJobCounts: Boolean = false
  ) {
    assets: Asset(limit: $limit, offset: $offset, where: $where, order_by: $order) {
      id
      name
      bookable
      customFields
      description
      meta
      status
      createdAt
      category: Category {
        id
        name
      }
      customer: Account {
        id
        name
      }
      location: Location {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      userId: User {
        value: id
        label: fullName
      }
      parentId: ParentAsset {
        value: id
        label: fullName
      }
      media: Media {
        id
        item: Medium {
          id
          filename
        }
      }
      mainPhoto: Media(where: { Medium: { category: { _eq: "assetMainPhoto" } } }) {
        id
        item: Medium {
          filename
        }
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Asset" }
          Taxonomy: { _and: [{ status: { _eq: "active" } }, { type: { _eq: "tags" } }] }
        }
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
      workOrdersAggregate: Asset_Entity_aggregate(
        where: { entity: { _eq: "Job" }, Job: { type: { _in: ["reactive", "ppm"] } } }
      ) @include(if: $withJobCounts) {
        aggregate {
          count
        }
      }
      quotesAggregate: Asset_Entity_aggregate(
        where: { entity: { _eq: "Job" }, Job: { type: { _eq: "quote" } } }
      ) @include(if: $withJobCounts) {
        aggregate {
          count
        }
      }
      listMetrics: AssetListMetrics @include(if: $withMetrics) {
        total12mNet @include(if: $withMetricMoney)
        total12mGross @include(if: $withMetricMoney)
        numberOfInvoices
        invoicesOutstanding @include(if: $withMetricMoney)
        nextJobDate
        lastJobDate
      }
    }
    meta: Asset_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  query GetAsset($id: Int!) {
    asset: Asset_by_pk(id: $id) {
      id
      name
      fullName
      description
      meta
      status
      createdAt
      condition
      preparationStatus
      parentAsset: ParentAsset {
        id
        name
        fullName
      }
      customer: Account {
        id
        name
      }
      location: Location {
        id
        name
        access
        meta
        customerUser: User {
          id
          fullName
          nameFirst
          nameLast
        }
        registeredAddress: Addresses(
          where: { entity: { _eq: "Location" }, registered: { _eq: true } }
        ) {
          address: Address {
            id
            addressLine1
            addressLine2
            addressLine3
            county
            country: Country {
              name
            }
            postCode
            city
          }
        }
      }
      sublocation: Sublocation {
        id
        name
        meta
      }
      category: Category {
        id
        name
        childs: Taxonomies(
          where: { status: { _eq: "active" }, type: { _eq: "assetQuestion" } }
          order_by: { id: asc }
        ) {
          id
          name
          type
          meta
        }
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Asset" }
          Taxonomy: { status: { _eq: "active" }, type: { _eq: "tags" } }
        }
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
      media: Media {
        id
        item: Medium {
          id
          filename
        }
      }
    }
  }
`;t.f`
  subscription GetAssetMeterByAssetId($assetId: Int!) {
    meters: AssetMeter(where: { assetId: { _eq: $assetId } }, order_by: { id: desc }) {
      id
      name
      unit
      frequency
      rangeLower
      rangeUpper
      status
      meta
      logs: AssetLogs(limit: 1000, order_by: { id: desc }) {
        id
        status
        eventTime
        type
        value
      }
    }
  }
`;let n=t.f`
  mutation AddAsset($objects: [Asset_insert_input!]!) {
    insert_Asset(objects: $objects) {
      returning {
        id
      }
    }
  }
`,s=t.f`
  mutation UpdateAsset($id: Int!, $changes: Asset_set_input) {
    update_Asset_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;t.f`
  mutation DeleteAsset($id: Int!) {
    delete_Asset_by_pk(id: $id) {
      id
    }
  }
`;let a=t.f`
  query GetJobs($assetId: Int!, $limit: Int, $offset: Int, $orderBy: Job_order_by!) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: { Assets: { entity: { _eq: "Job" }, Asset: { id: { _eq: $assetId } } } }
      order_by: [$orderBy]
    ) {
      id
      type
      number
      status
      scheduledAt
      timingStart
      createdAt
      invoices: Invoices(order_by: { createdAt: desc }) {
        invoiceNumber
      }
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
        fullName
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
      where: { Assets: { entity: { _eq: "Job" }, Asset: { id: { _eq: $assetId } } } }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,o=t.f`
  query MEDIAS($category: String, $entity: String, $entityId: Int, $type: String, $adminId: Int) {
    items: Media_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        Medium: { adminId: { _eq: $adminId }, category: { _eq: $category }, type: { _eq: $type } }
      }
    ) {
      id
      item: Medium {
        id
        filename
        createdAt
        user: User {
          id
          fullName
          accountUsers: Account_Users {
            accountId
          }
        }
      }
    }
  }
`,l=t.f`
  query GetAssetJobsByPeriod($assetId: Int!, $start: timestamptz, $end: timestamptz) {
    jobs: Job(
      where: {
        Assets: { entity: { _eq: "Job" }, Asset: { id: { _eq: $assetId } } }
        status: { _neq: "canceled" }
        _or: [
          { scheduledAt: { _gte: $start, _lte: $end } }
          { timingStart: { _gte: $start, _lte: $end } }
        ]
      }
    ) {
      scheduledAt
      timingStart
      customerTotal: customerFinances(path: "amountInfo.total")
      assets: Assets(where: { entity: { _eq: "Job" } }) {
        id
      }
    }
  }
`,d=t.f`
  query GetAssetMeta($id: Int!) {
    asset: Asset_by_pk(id: $id) {
      meta
    }
  }
`,u=t.f`
  query GetAssetsMeta($ids: [Int!]) {
    assets: Asset(where: { id: { _in: $ids } }) {
      id
      name
      meta
      sublocationId
    }
  }
`;e.s(["j",0,n,"d",0,i,"P",0,r,"q",0,u,"k",0,l,"W",0,d,"J",0,o,"n",0,a,"K",0,s])},798864,e=>{var t=e.i(170582);let r=(e,r,i)=>{let n=new XMLHttpRequest,s=new window.FormData;s.append("file",e,e.name);let a="image"===r?t.G:t.Q;return{promise:new Promise((e,t)=>{n.upload.onprogress=e=>{e.lengthComputable&&i&&i(Math.round(e.loaded/e.total*100))},n.onload=()=>{if(n.status>=200&&n.status<300)try{e(JSON.parse(n.responseText))}catch{t(Error("Invalid response from server"))}else t(Error(((e,t)=>{try{let{message:e}=JSON.parse(t);if("string"==typeof e&&e)return e}catch{}return`Upload failed with status ${e}`})(n.status,n.responseText)))},n.onerror=()=>t(Error("Upload failed")),n.ontimeout=()=>t(Error("Upload timed out")),n.onabort=()=>t(Error("Upload cancelled")),n.open("POST",a);let r=window.localStorage.getItem("bearerToken");r&&n.setRequestHeader("Authorization",`Bearer ${r}`),n.send(s)}),xhr:n}},i=async(e,t)=>{let{promise:i}=r(e,t);return i};e.s(["b",0,i,"x",0,r],798864)},443645,648116,e=>{var t=e.i(391398),r=e.i(683125),i=e.i(191788);e.s(["f",0,function(){let[e,n]=(0,i.useState)(null),[s,a]=(0,i.useState)(!1);(0,i.useEffect)(()=>()=>{e&&e.afterClose()},[e]);let o=(0,i.useCallback)(()=>{s||(a(!0),e?.afterClose(),n(null),a(!1))},[e,s]);return[(0,i.useMemo)(()=>{if(null===e)return null;let{content:i,keepMounted:n,sx:s,disableEscapeKeyDown:a,disableAutoFocus:l}=e;return(0,t.jsx)(r.f,{open:!0,keepMounted:n,onClose:o,sx:s,disableEscapeKeyDown:a,disableAutoFocus:l,"aria-labelledby":"modal-title","aria-describedby":"modal-description",children:i})},[e,o]),(0,i.useCallback)(async e=>{let{content:t,keepMounted:r=!0,afterClose:i,sx:s,disableEscapeKeyDown:a=!1,disableAutoFocus:l=!1}=e;return new Promise(e=>{n({keepMounted:r,content:t({onClose:()=>{o(),e()}}),afterClose:()=>{e(),i?.()},sx:s,disableEscapeKeyDown:a,disableAutoFocus:l})})},[o])]}],648116),e.s([],443645)},558486,e=>{var t,r,i=((t={}).EXCELLENT="excellent",t.GOOD="good",t.FAIR="fair",t.POOR="poor",t.VERY_POOR="veryPoor",t),n=((r={}).DISCARDED="discarded",r.PENDING_DISPOSAL="pendingDisposal",r.IN_REPAIRS="inRepairs",r.OFFLINE="offline",r.IN_STORAGE="inStorage",r.IN_USE="inUse",r.NOT_READY="notReady",r);let s=[{label:"Excellent",value:i.EXCELLENT,color:"success.main",fontColor:"success.contrastText"},{label:"Good",value:i.GOOD,color:"success.main",fontColor:"success.contrastText"},{label:"Fair",value:i.FAIR,color:"info.main",fontColor:"success.contrastText"},{label:"Poor",value:i.POOR,color:"pink.main",fontColor:"pink.contrastText"},{label:"Very poor",value:i.VERY_POOR,color:"danger.main",fontColor:"danger.contrastText"}],a=[{label:"Discarded",value:n.DISCARDED,color:"black.main",fontColor:"black.contrastText"},{label:"Pending disposal",value:n.PENDING_DISPOSAL,color:"muiGray.main",fontColor:"muiGray.contrastText"},{label:"In repairs",value:n.IN_REPAIRS,color:"help.main",fontColor:"help.contrastText"},{label:"Offline",value:n.OFFLINE,color:"danger.main",fontColor:"danger.contrastText"},{label:"In storage",value:n.IN_STORAGE,color:"secondary.main",fontColor:"secondary.contrastText"},{label:"In use",value:n.IN_USE,color:"success.main",fontColor:"success.contrastText"},{label:"Not ready",value:n.NOT_READY,color:"info.main",fontColor:"info.contrastText"}];e.s(["T",0,s,"W",0,a,"O",0,(e,t)=>e.find(e=>{let{value:r}=e;return r===t})||{backgroundColor:"success",color:"success"}],558486)},900268,745356,739001,766464,e=>{e.i(606775);var t=e.i(822025),r=new(e.i(898173)).f,i=new WeakMap;function n(e){var r=i.get(e);return r||i.set(e,r={vars:new Set,dep:(0,t.f)()}),r}e.s(["O",0,r,"D",0,function(e){n(e).vars.forEach(function(t){return t.forgetCache(e)})},"v",0,function(e){var t=new Set,i=new Set,s=function(o){if(arguments.length>0){if(e!==o){e=o,t.forEach(function(e){var t;n(e).dep.dirty(s),(t=e).broadcastWatches&&t.broadcastWatches()});var l=Array.from(i);i.clear(),l.forEach(function(t){return t(e)})}}else{var d=r.getValue();d&&(a(d),n(d).dep(s))}return e};s.onNextChange=function(e){return i.add(e),function(){i.delete(e)}};var a=s.attachCache=function(e){return t.add(e),n(e).vars.add(s),s};return s.forgetCache=function(e){return t.delete(e)},s},"T",0,function(e){n(e).vars.forEach(function(t){return t.attachCache(e)})}],900268);var s=e.i(926638),a=e.i(623886),o=e.i(699213);function l(e,t){return(0,o.f)(2,arguments),(0,a.f)(e).getTime()-(0,a.f)(t).getTime()}e.s(["f",0,l],745356);var d={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function u(e){return e?d[e]:d.trunc}e.s(["f",0,u],739001),e.s(["f",0,function(e,t,r){(0,o.f)(2,arguments);var i=l(e,t)/s.z;return u(null==r?void 0:r.roundingMethod)(i)}],766464)},92986,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),s=e.r(391398);r.default=(0,n.default)((0,s.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},936641,e=>{var t=e.i(460997),r=e.i(75907),i=e.i(191788),n=e.i(889878),s=e.i(600961),a=e.i(477366),o=e.i(280445),l=e.i(395724),d=e.i(69998),u=e.i(464107),c=e.i(88152),h=e.i(346146),f=e.i(773831),m=e.i(59540),p=e.i(391398);let g=(0,m.f)((0,p.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),y=(0,m.f)((0,p.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),_=(0,m.f)((0,p.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),b=(0,m.f)((0,p.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined");var v=e.i(815042);let w=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],x=(0,o.f)(c.f,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,u.f)(r.color||r.severity)}`]]}})(e=>{let{theme:t}=e,i="light"===t.palette.mode?a.darken:a.lighten,n="light"===t.palette.mode?a.lighten:a.darken;return(0,r.f)({},t.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(e=>{let[,t]=e;return t.main&&t.light}).map(e=>{let[r]=e;return{props:{colorSeverity:r,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${r}Color`]:i(t.palette[r].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${r}StandardBg`]:n(t.palette[r].light,.9),[`& .${h.U.icon}`]:t.vars?{color:t.vars.palette.Alert[`${r}IconColor`]}:{color:t.palette[r].main}}}}),...Object.entries(t.palette).filter(e=>{let[,t]=e;return t.main&&t.light}).map(e=>{let[r]=e;return{props:{colorSeverity:r,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${r}Color`]:i(t.palette[r].light,.6),border:`1px solid ${(t.vars||t).palette[r].light}`,[`& .${h.U.icon}`]:t.vars?{color:t.vars.palette.Alert[`${r}IconColor`]}:{color:t.palette[r].main}}}}),...Object.entries(t.palette).filter(e=>{let[,t]=e;return t.main&&t.dark}).map(e=>{let[i]=e;return{props:{colorSeverity:i,variant:"filled"},style:(0,r.f)({fontWeight:t.typography.fontWeightMedium},t.vars?{color:t.vars.palette.Alert[`${i}FilledColor`],backgroundColor:t.vars.palette.Alert[`${i}FilledBg`]}:{backgroundColor:"dark"===t.palette.mode?t.palette[i].dark:t.palette[i].main,color:t.palette.getContrastText(t.palette[i].main)})}})]})}),C=(0,o.f)("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),k=(0,o.f)("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),A=(0,o.f)("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),T={success:(0,p.jsx)(g,{fontSize:"inherit"}),warning:(0,p.jsx)(y,{fontSize:"inherit"}),error:(0,p.jsx)(_,{fontSize:"inherit"}),info:(0,p.jsx)(b,{fontSize:"inherit"})},S=i.forwardRef(function(e,i){let a=(0,l.f)({props:e,name:"MuiAlert"}),{action:o,children:c,className:m,closeText:g="Close",color:y,components:_={},componentsProps:b={},icon:S,iconMapping:E=T,onClose:M,role:O="alert",severity:R="success",slotProps:I={},slots:D={},variant:L="standard"}=a,$=(0,t.f)(a,w),j=(0,r.f)({},a,{color:y,severity:R,variant:L,colorSeverity:y||R}),z=(e=>{let{variant:t,color:r,severity:i,classes:n}=e,a={root:["root",`color${(0,u.f)(r||i)}`,`${t}${(0,u.f)(r||i)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return(0,s.f)(a,h.Y,n)})(j),q={slots:(0,r.f)({closeButton:_.CloseButton,closeIcon:_.CloseIcon},D),slotProps:(0,r.f)({},b,I)},[P,N]=(0,d.f)("closeButton",{elementType:f.f,externalForwardedProps:q,ownerState:j}),[F,U]=(0,d.f)("closeIcon",{elementType:v.f,externalForwardedProps:q,ownerState:j});return(0,p.jsxs)(x,(0,r.f)({role:O,elevation:0,ownerState:j,className:(0,n.f)(z.root,m),ref:i},$,{children:[!1!==S?(0,p.jsx)(C,{ownerState:j,className:z.icon,children:S||E[R]||T[R]}):null,(0,p.jsx)(k,{ownerState:j,className:z.message,children:c}),null!=o?(0,p.jsx)(A,{ownerState:j,className:z.action,children:o}):null,null==o&&M?(0,p.jsx)(A,{ownerState:j,className:z.action,children:(0,p.jsx)(P,(0,r.f)({size:"small","aria-label":g,title:g,color:"inherit",onClick:M},N,{children:(0,p.jsx)(F,(0,r.f)({fontSize:"small"},U))}))}):null]}))});e.s(["f",0,S],936641)},90754,e=>{var t=e.i(75907),r=e.i(362537);let i={Y:"year",YY:"year",YYYY:{sectionType:"year",contentType:"digit",maxLength:4},M:{sectionType:"month",contentType:"digit",maxLength:2},MM:"month",MMM:{sectionType:"month",contentType:"letter"},MMMM:{sectionType:"month",contentType:"letter"},D:{sectionType:"day",contentType:"digit",maxLength:2},DD:"day",Do:{sectionType:"day",contentType:"digit-with-letter"},E:{sectionType:"weekDay",contentType:"digit",maxLength:1},e:{sectionType:"weekDay",contentType:"digit",maxLength:1},d:{sectionType:"weekDay",contentType:"digit",maxLength:1},dd:{sectionType:"weekDay",contentType:"letter"},ddd:{sectionType:"weekDay",contentType:"letter"},dddd:{sectionType:"weekDay",contentType:"letter"},A:"meridiem",a:"meridiem",H:{sectionType:"hours",contentType:"digit",maxLength:2},HH:"hours",h:{sectionType:"hours",contentType:"digit",maxLength:2},hh:"hours",m:{sectionType:"minutes",contentType:"digit",maxLength:2},mm:"minutes",s:{sectionType:"seconds",contentType:"digit",maxLength:2},ss:"seconds"},n={year:"YYYY",month:"MMMM",monthShort:"MMM",dayOfMonth:"D",dayOfMonthFull:"Do",weekday:"dddd",weekdayShort:"ddd",hours24h:"HH",hours12h:"hh",meridiem:"A",minutes:"mm",seconds:"ss",fullDate:"ll",keyboardDate:"L",shortDate:"MMM D",normalDate:"D MMMM",normalDateWithWeekday:"ddd, MMM D",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"},s="Missing timezone plugin\nTo be able to use timezones, you have to pass the default export from `moment-timezone` to the `dateLibInstance` prop of `LocalizationProvider`\nFind more information on https://mui.com/x/react-date-pickers/timezone/#moment-and-timezone";e.s(["f",0,class{constructor({locale:e,formats:a,instance:o}={}){var l=this;this.isMUIAdapter=!0,this.isTimezoneCompatible=!0,this.lib="moment",this.moment=void 0,this.locale=void 0,this.formats=void 0,this.escapedCharacters={start:"[",end:"]"},this.formatTokenMap=i,this.setLocaleToValue=e=>{let t=this.getCurrentLocaleCode();return t===e.locale()?e:e.locale(t)},this.hasTimezonePlugin=()=>void 0!==this.moment.tz,this.createSystemDate=e=>{let t=this.moment(e).local();return void 0===this.locale?t:t.locale(this.locale)},this.createUTCDate=e=>{let t=this.moment.utc(e);return void 0===this.locale?t:t.locale(this.locale)},this.createTZDate=(e,t)=>{if(!this.hasTimezonePlugin())throw Error(s);let r="default"===t?this.moment(e):this.moment.tz(e,t);return void 0===this.locale?r:r.locale(this.locale)},this.date=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return null===e?null:"UTC"===t?l.createUTCDate(e):"system"!==t&&("default"!==t||l.hasTimezonePlugin())?l.createTZDate(e,t):l.createSystemDate(e)},this.getInvalidDate=()=>this.moment(new Date("Invalid Date")),this.getTimezone=e=>{let t=e._z?.name,r=e.isUTC()?"UTC":"system";return t??this.moment.defaultZone?.name??r},this.setTimezone=(e,t)=>{if(this.getTimezone(e)===t)return e;if("UTC"===t)return e.clone().utc();if("system"===t)return e.clone().local();if(!this.hasTimezonePlugin()){if("default"!==t)throw Error(s);return e}let r="default"===t?this.moment.defaultZone?.name??"system":t;if("system"===r)return e.clone().local();let i=e.clone();return i.tz(r),i},this.toJsDate=e=>e.toDate(),this.parse=(e,t)=>""===e?null:this.locale?this.moment(e,t,this.locale,!0):this.moment(e,t,!0),this.getCurrentLocaleCode=()=>this.locale||r.default.locale(),this.is12HourCycleInCurrentLocale=()=>/A|a/.test(r.default.localeData(this.getCurrentLocaleCode()).longDateFormat("LT")),this.expandFormat=e=>e.match(/(\[[^[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})|./g).map(e=>{let t=e[0];return"L"===t||";"===t?r.default.localeData(this.getCurrentLocaleCode()).longDateFormat(e):e}).join(""),this.isValid=e=>null!=e&&e.isValid(),this.format=(e,t)=>this.formatByString(e,this.formats[t]),this.formatByString=(e,t)=>{let r=e.clone();return r.locale(this.getCurrentLocaleCode()),r.format(t)},this.formatNumber=e=>e,this.isEqual=(e,t)=>null===e&&null===t||null!==e&&null!==t&&e.isSame(t),this.isSameYear=(e,t)=>e.isSame(t,"year"),this.isSameMonth=(e,t)=>e.isSame(t,"month"),this.isSameDay=(e,t)=>e.isSame(t,"day"),this.isSameHour=(e,t)=>e.isSame(t,"hour"),this.isAfter=(e,t)=>e.isAfter(t),this.isAfterYear=(e,t)=>e.isAfter(t,"year"),this.isAfterDay=(e,t)=>e.isAfter(t,"day"),this.isBefore=(e,t)=>e.isBefore(t),this.isBeforeYear=(e,t)=>e.isBefore(t,"year"),this.isBeforeDay=(e,t)=>e.isBefore(t,"day"),this.isWithinRange=(e,t)=>{let[r,i]=t;return e.isBetween(r,i,null,"[]")},this.startOfYear=e=>e.clone().startOf("year"),this.startOfMonth=e=>e.clone().startOf("month"),this.startOfWeek=e=>this.setLocaleToValue(e.clone()).startOf("week"),this.startOfDay=e=>e.clone().startOf("day"),this.endOfYear=e=>e.clone().endOf("year"),this.endOfMonth=e=>e.clone().endOf("month"),this.endOfWeek=e=>this.setLocaleToValue(e.clone()).endOf("week"),this.endOfDay=e=>e.clone().endOf("day"),this.addYears=(e,t)=>t<0?e.clone().subtract(Math.abs(t),"years"):e.clone().add(t,"years"),this.addMonths=(e,t)=>t<0?e.clone().subtract(Math.abs(t),"months"):e.clone().add(t,"months"),this.addWeeks=(e,t)=>t<0?e.clone().subtract(Math.abs(t),"weeks"):e.clone().add(t,"weeks"),this.addDays=(e,t)=>t<0?e.clone().subtract(Math.abs(t),"days"):e.clone().add(t,"days"),this.addHours=(e,t)=>t<0?e.clone().subtract(Math.abs(t),"hours"):e.clone().add(t,"hours"),this.addMinutes=(e,t)=>t<0?e.clone().subtract(Math.abs(t),"minutes"):e.clone().add(t,"minutes"),this.addSeconds=(e,t)=>t<0?e.clone().subtract(Math.abs(t),"seconds"):e.clone().add(t,"seconds"),this.getYear=e=>e.get("year"),this.getMonth=e=>e.get("month"),this.getDate=e=>e.get("date"),this.getHours=e=>e.get("hours"),this.getMinutes=e=>e.get("minutes"),this.getSeconds=e=>e.get("seconds"),this.getMilliseconds=e=>e.get("milliseconds"),this.setYear=(e,t)=>e.clone().year(t),this.setMonth=(e,t)=>e.clone().month(t),this.setDate=(e,t)=>e.clone().date(t),this.setHours=(e,t)=>e.clone().hours(t),this.setMinutes=(e,t)=>e.clone().minutes(t),this.setSeconds=(e,t)=>e.clone().seconds(t),this.setMilliseconds=(e,t)=>e.clone().milliseconds(t),this.getDaysInMonth=e=>e.daysInMonth(),this.getWeekArray=e=>{let t=this.startOfWeek(this.startOfMonth(e)),r=this.endOfWeek(this.endOfMonth(e)),i=0,n=t,s=n.get("dayOfYear"),a=[];for(;n.isBefore(r);){let e=Math.floor(i/7);a[e]=a[e]||[],a[e].push(n),s===(s=(n=this.addDays(n,1)).get("dayOfYear"))&&(n=n.add(12,"h").startOf("day")),i+=1}return a},this.getWeekNumber=e=>e.week(),this.getDayOfWeek=e=>e.day()+1,this.moment=o||r.default,this.locale=e,this.formats=(0,t.f)({},n,a)}getYearRange(e){let[t,r]=e,i=this.startOfYear(t),n=this.endOfYear(r),s=[],a=i;for(;this.isBefore(a,n);)s.push(a),a=this.addYears(a,1);return s}}])},503398,e=>{e.s(["f",0,function(e,t){for(var r=Math.abs(e).toString();r.length<t;)r="0"+r;return(e<0?"-":"")+r}])},190077,e=>{var t,r=new Uint8Array(16);let i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var n=[],s=0;s<256;++s)n.push((s+256).toString(16).substr(1));let a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase();if(!("string"==typeof r&&i.test(r)))throw TypeError("Stringified UUID is invalid");return r};e.s(["f",0,function(e,i,n){var s=(e=e||{}).random||(e.rng||function(){if(!t&&!(t="u">typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"u">typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(r)})();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,i){n=n||0;for(var o=0;o<16;++o)i[n+o]=s[o];return i}return a(s)}],190077)}],793035,(e,t,r)=>{var i=e.r(398629),n=e.r(198373),s=Object.prototype.hasOwnProperty;t.exports=function(e,t,r){var a=e[t];s.call(e,t)&&n(a,r)&&(void 0!==r||t in e)||i(e,t,r)}},398629,(e,t,r)=>{var i=e.r(610015);t.exports=function(e,t,r){"__proto__"==t&&i?i(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}},864353,(e,t,r)=>{t.exports=e.r(115470)()},115470,(e,t,r)=>{t.exports=function(e){return function(t,r,i){for(var n=-1,s=Object(t),a=i(t),o=a.length;o--;){var l=a[e?o:++n];if(!1===r(s[l],l,s))break}return t}}},610015,(e,t,r)=>{var i=e.r(689346);t.exports=function(){try{var e=i(Object,"defineProperty");return e({},"",{}),e}catch(e){}}()},625975,(e,t,r)=>{t.exports=function(e){return e}},472552,(e,t,r)=>{var i;let n;e.e,i=function e(){var t,r="u">typeof self?self:"u">typeof window?window:void 0!==r?r:{},i=!r.document&&!!r.postMessage,n=r.IS_PAPA_WORKER||!1,s={},a=0,o={};function l(e){return 65279===e.charCodeAt(0)?e.slice(1):e}function d(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new m(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,t){var i=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<i){let t=this._config.newline;t||(s=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,s)),e=[...e.split(t).slice(i)].join(t)}this.isFirstChunk&&x(this._config.beforeFirstChunk)&&void 0!==(s=this._config.beforeFirstChunk(e))&&(e=s),this.isFirstChunk=!1,this._halted=!1;var i=this._partialLine+e,s=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=s.meta.cursor,this._finished||(this._partialLine=i.substring(e-this._baseIndex),this._baseIndex=e),s&&s.data&&(this._rowCount+=s.data.length),i=this._finished||this._config.preview&&this._rowCount>=this._config.preview,n)r.postMessage({results:s,workerId:o.WORKER_ID,finished:i});else if(x(this._config.chunk)&&!t){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=s=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!i||!x(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){x(this._config.error)?this._config.error(e):n&&this._config.error&&r.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),d.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e,r,n=this._config.downloadRequestHeaders;for(r in n)t.setRequestHeader(r,n[r])}this._config.chunkSize&&(e=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+e));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){let e;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null!==(e=(e=t).getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function c(e){(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),d.call(this,e);var t,r,i="u">typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=w(this._chunkLoaded,this),t.onerror=w(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,n=(this._config.chunkSize&&(n=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,n)),t.readAsText(e,this._config.encoding));i||this._chunkLoaded({target:{result:n}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function h(e){var t;d.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,r;if(!this._finished)return t=(e=this._config.chunkSize)?(r=t.substring(0,e),t.substring(e)):(r=t,""),this._finished=!t,this.parseChunk(r)}}function f(e){d.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=w(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=w(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=w(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=w(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function m(e){var t,r,i,n,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,a=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,d=this,u=0,c=0,h=!1,f=!1,m=[],y={data:[],errors:[],meta:{}};function _(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function b(){if(y&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(y.data=y.data.filter(function(e){return!_(e)})),w()){if(y)if(Array.isArray(y.data[0])){for(var t,r=0;w()&&r<y.data.length;r++)y.data[r].forEach(n);y.data.splice(0,1)}else y.data.forEach(n);function n(t,r){t=l(t),x(e.transformHeader)&&(t=e.transformHeader(t,r)),m.push(t)}}function d(t,r){for(var i=e.header?{}:[],n=0;n<t.length;n++){var o=n,l=t[n],l=((t,r)=>(e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping))?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&((e=>{if(s.test(e)&&-0x20000000000000<(e=parseFloat(e))&&e<0x20000000000000)return 1})(r)?parseFloat(r):a.test(r)?new Date(r):""===r?null:r):r)(o=e.header?n>=m.length?"__parsed_extra":m[n]:o,l=e.transform?e.transform(l,o):l);"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(l)):i[o]=l}return e.header&&(n>m.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+n,c+r):n<m.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+n,c+r)),i}y&&(e.header||e.dynamicTyping||e.transform)&&(t=1,!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(d),t=y.data.length):y.data=d(y.data,0),e.header&&y.meta&&(y.meta.fields=m),c+=t)}function w(){return e.header&&0===m.length}function C(e,t,r,i){e={type:e,code:t,message:r},void 0!==i&&(e.row=i),y.errors.push(e)}x(e.step)&&(n=e.step,e.step=function(t){y=t,w()?b():(b(),0!==y.data.length&&(u+=t.data.length,e.preview&&u>e.preview?r.abort():(y.data=y.data[0],n(y,d))))}),this.parse=function(n,s,a){var l=e.quoteChar||'"',l=(e.newline||(e.newline=this.guessLineEndings(n,l)),i=!1,e.delimiter?x(e.delimiter)&&(e.delimiter=e.delimiter(n),y.meta.delimiter=e.delimiter):((l=((t,r,i,n,s)=>{var a,l,d,u;s=s||[",","	","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var c=0;c<s.length;c++){for(var h,f=s[c],m=0,p=0,y=0,b=(d=void 0,new g({comments:n,delimiter:f,newline:r,preview:10}).parse(t)),v=0;v<b.data.length;v++)i&&_(b.data[v])?y++:(p+=h=b.data[v].length,void 0===d?d=h:0<h&&(m+=Math.abs(h-d),d=h));0<b.data.length&&(p/=b.data.length-y),(void 0===l||m<=l)&&(void 0===u||u<p)&&1.99<p&&(l=m,a=f,u=p)}return{successful:!!(e.delimiter=a),bestDelimiter:a}})(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=l.bestDelimiter:(i=!0,e.delimiter=o.DefaultDelimiter),y.meta.delimiter=e.delimiter),v(e));return e.preview&&e.header&&l.preview++,t=n,y=(r=new g(l)).parse(t,s,a),b(),h?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,r.abort(),t=x(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){d.streamer._halted?(h=!1,d.streamer.parseChunk(t,!0)):setTimeout(d.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,r.abort(),y.meta.aborted=!0,x(e.complete)&&e.complete(y),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(p(t)+"([^]*?)"+p(t),"gm"),r=(e=e.replace(t,"")).split("\r"),t=e.split("\n"),e=1<t.length&&t[0].length<r[0].length;if(1===r.length||e)return"\n";for(var i=0,n=0;n<r.length;n++)"\n"===r[n][0]&&i++;return i>=r.length/2?"\r\n":"\r"}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g(e){var t=(e=e||{}).delimiter,r=e.newline,i=e.comments,n=e.step,s=e.preview,a=e.fastMode,d=null,u=!1,c=null==e.quoteChar?'"':e.quoteChar,h=c;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof t||-1<o.BAD_DELIMITERS.indexOf(t))&&(t=","),i===t)throw Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var f=0,m=!1;this.parse=function(o,g,y){if("string"!=typeof o)throw Error("Input must be a string");var _=o.length,b=t.length,v=r.length,w=i.length,C=x(n),k=[],A=[],T=[],S=f=0;if(!o)return P();if(a||!1!==a&&-1===o.indexOf(c)){for(var E=o.split(r),M=0;M<E.length;M++){if(T=E[M],f+=T.length,M!==E.length-1)f+=r.length;else if(y)break;if(!i||T.substring(0,w)!==i){if(C){if(k=[],$(T.split(t)),N(),m)return P()}else $(T.split(t));if(s&&s<=M)return k=k.slice(0,s),P(!0)}}return P()}for(var O=o.indexOf(t,f),R=o.indexOf(r,f),I=RegExp(p(h)+p(c),"g"),D=o.indexOf(c,f);;)if(o[f]===c)for(D=f,f++;;){if(-1===(D=o.indexOf(c,D+1)))return y||A.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:k.length,index:f}),z();if(D===_-1)return z(o.substring(f,D).replace(I,c));if(c===h&&o[D+1]===h)D++;else if(c===h||0===D||o[D-1]!==h){-1!==O&&O<D+1&&(O=o.indexOf(t,D+1));var L=j(-1===(R=-1!==R&&R<D+1?o.indexOf(r,D+1):R)?O:Math.min(O,R));if(o.substr(D+1+L,b)===t){T.push(o.substring(f,D).replace(I,c)),o[f=D+1+L+b]!==c&&(D=o.indexOf(c,f)),O=o.indexOf(t,f),R=o.indexOf(r,f);break}if(L=j(R),o.substring(D+1+L,D+1+L+v)===r){if(T.push(o.substring(f,D).replace(I,c)),q(D+1+L+v),O=o.indexOf(t,f),D=o.indexOf(c,f),C&&(N(),m))return P();if(s&&k.length>=s)return P(!0);break}A.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:k.length,index:f}),D++}}else if(i&&0===T.length&&o.substring(f,f+w)===i){if(-1===R)return P();f=R+v,R=o.indexOf(r,f),O=o.indexOf(t,f)}else if(-1!==O&&(O<R||-1===R))T.push(o.substring(f,O)),f=O+b,O=o.indexOf(t,f);else{if(-1===R)break;if(T.push(o.substring(f,R)),q(R+v),C&&(N(),m))return P();if(s&&k.length>=s)return P(!0)}return z();function $(e){k.push(e),S=f}function j(e){return -1!==e&&(e=o.substring(D+1,e))&&""===e.trim()?e.length:0}function z(e){return y||(void 0===e&&(e=o.substring(f)),T.push(e),f=_,$(T),C&&N()),P()}function q(e){f=e,$(T),T=[],R=o.indexOf(r,f)}function P(i){if(e.header&&!g&&k.length&&!u){var n=k[0],s=Object.create(null),a=new Set(n);let t=!1;for(let r=0;r<n.length;r++){let i=l(n[r]);if(s[i=x(e.transformHeader)?e.transformHeader(i,r):i]){let e,o=s[i];for(;e=i+"_"+o,o++,a.has(e););a.add(e),n[r]=e,s[i]++,t=!0,(d=null===d?{}:d)[e]=i}else s[i]=1,n[r]=i;a.add(i)}t&&console.warn("Duplicate headers found and renamed."),u=!0}return{data:k,errors:A,meta:{delimiter:t,linebreak:r,aborted:m,truncated:!!i,cursor:S+(g||0),renamedHeaders:d}}}function N(){n(P()),k=[],A=[]}},this.abort=function(){m=!0},this.getCharIndex=function(){return f}}function y(e){var t=e.data,r=s[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:b,resume:b};if(x(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},n),!i);a++);delete t.results}else x(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=s[e];x(r.userComplete)&&r.userComplete(t),r.terminate(),delete s[e]}function b(){throw Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t,r=Array.isArray(e)?[]:{};for(t in e)r[t]=v(e[t]);return r}function w(e,t){return function(){e.apply(t,arguments)}}function x(e){return"function"==typeof e}return o.parse=function(t,i){var n,d,m,p=(i=i||{}).dynamicTyping||!1;if(x(p)&&(i.dynamicTypingFunction=p,p={}),i.dynamicTyping=p,i.transform=!!x(i.transform)&&i.transform,!i.worker||!o.WORKERS_SUPPORTED)return p=null,o.NODE_STREAM_INPUT,"string"==typeof t?(t=l(t),p=new(i.download?u:h)(i)):!0===t.readable&&x(t.read)&&x(t.on)?p=new f(i):(r.File&&t instanceof File||t instanceof Object)&&(p=new c(i)),p.stream(t);(p=!!o.WORKERS_SUPPORTED&&(d=r.URL||r.webkitURL||null,m=e.toString(),n=o.BLOB_URL||(o.BLOB_URL=d.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",m,")();"],{type:"text/javascript"}))),(n=new r.Worker(n)).onmessage=y,n.id=a++,s[n.id]=n)).userStep=i.step,p.userChunk=i.chunk,p.userComplete=i.complete,p.userError=i.error,i.step=x(i.step),i.chunk=x(i.chunk),i.complete=x(i.complete),i.error=x(i.error),delete i.worker,p.postMessage({input:t,config:i,workerId:p.id})},o.unparse=function(e,t){var r=!1,i=!0,n=",",s="\r\n",a='"',l=a+a,d=!1,u=null,c=!1,h=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(d=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(l=(a=t.quoteChar)+a),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");u=t.columns}void 0!==t.escapeChar&&(l=t.escapeChar+a),t.escapeFormulae instanceof RegExp?c=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(c=/^[=+\-@\t\r].*$/)}})(),RegExp(p(a),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,d);if("object"==typeof e[0])return f(u||Object.keys(e[0]),e,d)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||u),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],d);throw Error("Unable to serialize unrecognized input");function f(e,t,r){var a="",o=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),l=!Array.isArray(t[0]);if(o&&i){for(var d=0;d<e.length;d++)0<d&&(a+=n),a+=m(e[d],d);0<t.length&&(a+=s)}for(var u=0;u<t.length;u++){var c=(o?e:t[u]).length,h=!1,f=o?0===Object.keys(t[u]).length:0===t[u].length;if(r&&!o&&(h="greedy"===r?""===t[u].join("").trim():1===t[u].length&&0===t[u][0].length),"greedy"===r&&o){for(var p=[],g=0;g<c;g++){var y=l?e[g]:g;p.push(t[u][y])}h=""===p.join("").trim()}if(!h){for(var _=0;_<c;_++){0<_&&!f&&(a+=n);var b=o&&l?e[_]:_;a+=m(t[u][b],_)}u<t.length-1&&(!r||0<c&&!f)&&(a+=s)}}return a}function m(e,t){var i,s,d;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(d=!1,c&&"string"==typeof e&&c.test(e)&&(e="'"+e,d=!0),s=(i=e.toString()).replace(h,l),(d=d||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||((e,t)=>{for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1})(s,o.BAD_DELIMITERS)||-1<s.indexOf(n)||-1<i.indexOf(a)||" "===s.charAt(0)||" "===s.charAt(s.length-1))?a+s+a:s)}},o.RECORD_SEP="\x1e",o.UNIT_SEP="\x1f",o.BYTE_ORDER_MARK="\uFEFF",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!i&&!!r.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=0xa00000,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=g,o.ParserHandle=m,o.NetworkStreamer=u,o.FileStreamer=c,o.StringStreamer=h,o.ReadableStreamStreamer=f,r.jQuery&&((t=r.jQuery).fn.parse=function(e){var i=e.config||{},n=[];return this.each(function(e){if(!("INPUT"===t(this).prop("tagName").toUpperCase()&&"file"===t(this).attr("type").toLowerCase()&&r.FileReader)||!this.files||0===this.files.length)return!0;for(var s=0;s<this.files.length;s++)n.push({file:this.files[s],inputElem:this,instanceConfig:t.extend({},i)})}),s(),this;function s(){if(0===n.length)x(e.complete)&&e.complete();else{var r,i,s,l=n[0];if(x(e.before)){var d=e.before(l.file,l.inputElem);if("object"==typeof d){if("abort"===d.action)return r=l.file,i=l.inputElem,s=d.reason,void(x(e.error)&&e.error({name:"AbortError"},r,i,s));if("skip"===d.action)return void a();"object"==typeof d.config&&(l.instanceConfig=t.extend(l.instanceConfig,d.config))}else if("skip"===d)return void a()}var u=l.instanceConfig.complete;l.instanceConfig.complete=function(e){x(u)&&u(e,l.file,l.inputElem),a()},o.parse(l.file,l.instanceConfig)}}function a(){n.splice(0,1),s()}}),n&&(r.onmessage=function(e){e=e.data,void 0===o.WORKER_ID&&e&&(o.WORKER_ID=e.workerId),"string"==typeof e.input?r.postMessage({workerId:o.WORKER_ID,results:o.parse(e.input,e.config),finished:!0}):(r.File&&e.input instanceof File||e.input instanceof Object)&&(e=o.parse(e.input,e.config))&&r.postMessage({workerId:o.WORKER_ID,results:e,finished:!0})}),(u.prototype=Object.create(d.prototype)).constructor=u,(c.prototype=Object.create(d.prototype)).constructor=c,(h.prototype=Object.create(h.prototype)).constructor=h,(f.prototype=Object.create(d.prototype)).constructor=f,o},"function"==typeof define&&define.amd?void 0!==(n=i())&&e.v(n):t.exports=i()}]);