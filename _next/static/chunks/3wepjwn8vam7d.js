(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,218659,e=>{var r=e.i(391398),i=e.i(280445),t=e.i(115871),s=e.i(813843),a=e.i(755548),o=e.i(587369);let n=(0,i.f)("img")({width:"300px",height:"250px"});e.s(["f",0,e=>{let{imageSrc:i,sx:u={},imageSx:l={},title:d,titleSx:c={},subtitleFirstLine:m,subtitleFirstLineSx:h={},subtitleSecondLine:f,subtitleSecondLineSx:v={},buttonText:p,onAction:y}=e,q=(0,o.f)("(max-width: 400px)");return(0,r.jsxs)(s.f,{sx:{...u,width:"100%",height:"100%"},justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,r.jsx)(n,{src:i,sx:{...l,width:q?"250px":"300px"}}),(0,r.jsx)(t.f,{typography:"h5",sx:{...c},children:d}),(0,r.jsxs)(s.f,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,r.jsx)(t.f,{sx:{...h},children:m}),(0,r.jsx)(t.f,{sx:{...v},children:f})]}),p&&y&&(0,r.jsx)(a.f,{variant:"contained",color:"secondary",onClick:y,children:p})]})}])},562367,e=>{var r=e.i(391398),i=e.i(738251),t=e.i(755548),s=e.i(986351),a=e.i(813843),o=e.i(115871),n=e.i(280445),u=e.i(691567),l=e.i(74633),d=e.i(683125),c=e.i(88152),m=e.i(4142),h=e.i(652148),f=e.i(432171),v=e.i(159080);v.f`
  query GetEntityPostcodeAreas(
    $entityId: Int!
    $entity: String!
    $limit: Int = 50
    $offset: Int = 0
  ) {
    postcodeAreas: PostcodeArea_Entity(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        PostcodeArea: { status: { _eq: "active" } }
      }
      limit: $limit
      offset: $offset
      order_by: { PostcodeArea: { name: asc } }
    ) {
      id
      postcode: PostcodeArea {
        id
        name
        area
      }
    }
  }
`;let p=v.f`
  query GetPostcodeAreasForEntity($q: String, $limit: Int = 50, $offset: Int = 0) {
    postcodeAreas: PostcodeArea(
      where: {
        _or: [{ name: { _ilike: $q } }, { area: { _ilike: $q } }]
        status: { _eq: "active" }
      }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      id
      name
      area
    }
    meta: PostcodeArea_aggregate(
      where: {
        _or: [{ name: { _ilike: $q } }, { area: { _ilike: $q } }]
        status: { _eq: "active" }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`;var y=e.i(191788),q=e.i(98762),g=e.i(890854);let b=e=>{let{open:i,setOpen:t,values:n=[],setValues:u}=e,[l,c]=(0,y.useState)(n||[]),[v,b]=(0,y.useState)("");(0,y.useEffect)(()=>{c(n||[])},[n]);let{initialData:H,ref:x}=(0,q.f)({filters:{}}),{data:{postcodeAreas:T}={postcodeAreas:[],meta:{aggregate:{totalCount:0}}},loading:$}=(0,f.t)(p,{variables:{...H,q:null,limit:null}}),_=(0,y.useMemo)(()=>T.filter(e=>!v||RegExp(`${v}`,"gmi").test(e.name??"")||RegExp(`${v}`,"gmi").test(e.area??"")).map(e=>({id:e.id,name:e.name,area:e.area})),[T,v]),I=(0,y.useCallback)(e=>{e.target.checked?c([..._]):c([])},[_]),j=(0,y.useCallback)(e=>l.some(r=>r.id===e.id),[l]),A=(0,y.useCallback)((e,r)=>{e?c([...l,r]):c(l.filter(e=>e.id!==r.id))},[l,c]),w=_.length>0&&_.every(j),C=(0,y.useMemo)(()=>[{flex:1,field:"name",headerName:"Area",sortable:!1},{flex:1,field:"area",headerName:"Postcode",sortable:!1},{width:80,field:"select",headerName:"",sortable:!1,renderHeader:()=>(0,r.jsx)(m.f,{color:"secondary",checked:w,onChange:I}),renderCell:e=>{let{row:i}=e;return(0,r.jsx)(m.f,{color:"secondary",checked:j(i),onChange:(e,r)=>A(r,i)})}}],[w,A,I,j]);return(0,r.jsx)(d.f,{open:i,onClose:()=>{u(l),t(!1)},children:(0,r.jsx)(S,{children:(0,r.jsxs)(a.f,{children:[(0,r.jsx)(a.f,{direction:"row",justifyContent:"space-between",children:(0,r.jsx)(o.f,{variant:"h6",fontWeight:700,children:"Add postcode area"})}),(0,r.jsx)(s.f,{sx:{mb:.5}}),(0,r.jsx)(h.f,{label:"Search",color:"secondary",variant:"standard",value:v,onChange:e=>b(e.target.value),sx:{mb:1}}),(0,r.jsx)(g.f,{disableRowSelectionOnClick:!0,autoHeight:!1,hideFooter:!1,loading:$,ref:x,columns:C,rows:_,pagination:!0,sortingMode:"client",paginationSize:50,initialState:{pagination:{paginationModel:{pageSize:50}}},containerHeight:"calc(90vh - 120px)"})]})})})},S=(0,n.f)(c.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"500px",height:"90vh",padding:"16px 27px 16px 27px",borderRadius:"8px"})),H=[],x=e=>{let{editable:i,paginationSize:n=5,name:u,values:d=H,setValue:c,fillHeight:m}=e,[h,f]=(0,y.useState)(!1),[v,p]=(0,y.useState)({currentPage:0,pageSize:n,sorting:[]}),[q,g]=(0,y.useState)(n),S=(0,y.useRef)(null);(0,y.useEffect)(()=>{let e=S.current;if(!m||!e)return;let r=new ResizeObserver(()=>{g(Math.max(1,Math.floor((e.clientHeight-56-48)/52)))});return r.observe(e),()=>r.disconnect()},[m]);let x=m?q:n,_=(0,y.useMemo)(()=>d.slice(v.currentPage*x,(v.currentPage+1)*x),[d,v.currentPage,x]),I=(0,y.useMemo)(()=>[{flex:1,minWidth:0,field:"name",headerName:"Area",sortable:!1},{flex:1,minWidth:0,field:"area",headerName:"Postcode",sortable:!1}],[]),j=(0,y.useCallback)(e=>{c(u,e,{shouldDirty:!0})},[u,c]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{open:h,setOpen:f,values:d,setValues:j}),(0,r.jsxs)(T,{fillHeight:m,children:[(0,r.jsxs)(a.f,{direction:"row",justifyContent:"space-between",mb:1,flexShrink:0,children:[(0,r.jsx)(o.f,{variant:"h6",fontWeight:700,children:"Coverage areas"}),i&&(0,r.jsx)(t.f,{color:"secondary",variant:"contained",size:"small",onClick:e=>{e.stopPropagation(),f(!0)},children:"Add"})]}),(0,r.jsx)(s.f,{}),(0,r.jsx)($,{ref:S,fillHeight:m,children:(0,r.jsx)(l.s,{autoHeight:!1,rowSelection:!1,columns:I,rows:_,totalCount:d.length,paginationSize:x,currentPage:v.currentPage,onTableStateChange:p,rowHeight:52,columnHeaderHeight:56,containerHeight:m?"100%":void 0})})]})]})},T=(0,n.f)(a.f,{shouldForwardProp:e=>"fillHeight"!==e})(e=>{let{fillHeight:r}=e;return{...r&&{flex:1,minHeight:0,overflow:"hidden"}}}),$=(0,n.f)(i.f,{shouldForwardProp:e=>"fillHeight"!==e})(e=>{let{fillHeight:r}=e;return{...r&&{flex:1,minHeight:0,overflow:"hidden"}}});x.propTypes={editable:u.default.bool,paginationSize:u.default.number,setValue:u.default.func,values:u.default.array,name:u.default.string,fillHeight:u.default.bool},e.s(["f",0,x],562367)},534971,699737,468156,441353,e=>{let r=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}];e.s(["v",0,"Default rates must be set for this service before they can be specified for an engineer","e",0,{status:"active",service:void 0,coverageAreas:[],minimumDuration:0,minimumIncrement:0,includeTravelTime:!1,normal:{firstHour:null,subsequentHours:null},ooh:{firstHour:null,subsequentHours:null},premium:{firstHour:null,subsequentHours:null},oohTimes:{},premiumTimes:{},days:[],engineer:null},"s",0,[{value:"monday",label:"Monday"},{value:"tuesday",label:"Tuesday"},{value:"wednesday",label:"Wednesday"},{value:"thursday",label:"Thursday"},{value:"friday",label:"Friday"},{value:"saturday",label:"Saturday"},{value:"sunday",label:"Sunday"}],"P",0,r],534971);var i=e.i(391398),t=e.i(740790),s=e.i(813843),a=e.i(322135),o=e.i(115871),n=e.i(250990),u=e.i(422411),l=e.i(362537);let d=e=>{let r=(0,l.default)(e,"HH:mm",!0);return r.isValid()?r:null};e.s(["f",0,e=>{let{control:r,error:l,name:c,day:m}=e,h=e=>e?d(e):null,f=e=>e?.isValid()?e.format("HH:mm"):null,v="Are you sure you mean 23:59? The last minute of the day will not be included — use 00:00 to run the window to midnight.";return(0,i.jsxs)(t.f,{container:!0,children:[(0,i.jsx)(t.f,{item:!0,xs:2,children:(0,i.jsx)(o.f,{children:m})}),(0,i.jsx)(t.f,{item:!0,xs:10,children:(0,i.jsxs)(s.f,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,i.jsx)(u.e,{control:r,name:`${c}.firstFrom`,render:e=>{let{value:r,onChange:t}=e;return(0,i.jsx)(n.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:h(r),onChange:e=>t(f(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,i.jsx)(o.f,{children:"to"}),(0,i.jsx)(u.e,{control:r,name:`${c}.firstTo`,render:e=>{let{value:r,onChange:t}=e;return(0,i.jsx)(a.f,{open:"23:59"===r,title:v,arrow:!0,placement:"top",children:(0,i.jsx)("span",{children:(0,i.jsx)(n.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:h(r),onChange:e=>t(f(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}}),(0,i.jsx)(o.f,{children:"and"}),(0,i.jsx)(u.e,{control:r,name:`${c}.secondFrom`,render:e=>{let{value:r,onChange:t}=e;return(0,i.jsx)(n.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:h(r),onChange:e=>t(f(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,i.jsx)(o.f,{children:"to"}),(0,i.jsx)(u.e,{control:r,name:`${c}.secondTo`,render:e=>{let{value:r,onChange:t}=e;return(0,i.jsx)(a.f,{open:"23:59"===r,title:v,arrow:!0,placement:"top",children:(0,i.jsx)("span",{children:(0,i.jsx)(n.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:h(r),onChange:e=>t(f(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}})]})})]})}],699737);var c=e.i(280445),m=e.i(498681);let h=(0,c.f)(o.f)(e=>{let{theme:r}=e;return{color:r.palette.text.secondary,backgroundColor:r.palette.action.hover,borderRadius:r.shape.borderRadius,padding:r.spacing(.5,1)}});e.s(["f",0,()=>{let e,r,t=(e=(0,m.f)(),r=e?.admin?.timeZone,{value:"string"==typeof r?.value?r.value:"Europe/London",label:"string"==typeof r?.label?r.label:"Europe/London +00:00"});return(0,i.jsxs)(h,{variant:"body2",children:["Times are in the account timezone (",t.label,")"]})}],468156);var f=e.i(426778);let v=f.x().nullable().test("time-format","Invalid time",e=>!e||null!==d(e)),p=(e,r)=>{let i=d(r);return i&&"00:00"===r&&e&&"00:00"!==e?i.add(1,"day"):i},y=(e,r)=>!!(e.from&&e.to&&r.from&&r.to&&e.from.isBefore(r.to)&&r.from.isBefore(e.to)),q=f.t().shape({firstFrom:v,firstTo:v,secondFrom:v,secondTo:v}),g=f.t().shape({monday:q.nullable(),tuesday:q.nullable(),wednesday:q.nullable(),thursday:q.nullable(),friday:q.nullable(),saturday:q.nullable(),sunday:q.nullable()}),b=f.t().shape({status:f.x().oneOf(r.map(e=>e.value)).required("Status is required"),service:f.t({label:f.x().required("Service is required"),value:f.H().integer().required("Service is required")}).required("Service is required").typeError("Service is required"),priority:f.k().of(f.t({label:f.x().required("Priority is required"),value:f.H().integer().required("Priority is required")}).required("Priority is required").typeError("Priority is required")).required("Priority is required").typeError("Priority is required"),minimumDuration:f.H().integer().min(0).required("Minimum duration is required").typeError("Minimum duration is required"),minimumIncrement:f.H().integer().min(0).required("Minimum increment is required").typeError("Minimum increment is required"),includeTravelTime:f.g().default(!1),normal:f.t({firstHour:f.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:f.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),ooh:f.t({firstHour:f.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:f.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),premium:f.t({firstHour:f.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:f.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),oohTimes:g,premiumTimes:g,days:f.k().of(f.c())}),S=(e,r)=>{let{oohTimes:i,premiumTimes:t}=e;if(!i||!t)return!0;let s=Object.keys(i),a=Object.keys(t);for(let e of s)if(a.includes(e)){let s=i[e],a=t[e];if(s||a){let i=s?.firstFrom?d(s.firstFrom):null,t=s?.firstTo?p(s.firstFrom,s.firstTo):null,o=s?.secondFrom?d(s.secondFrom):null,n=s?.secondTo?p(s.secondFrom,s.secondTo):null,u=a?.firstFrom?d(a.firstFrom):null,l=a?.firstTo?p(a.firstFrom,a.firstTo):null,c=a?.secondFrom?d(a.secondFrom):null,m=a?.secondTo?p(a.secondFrom,a.secondTo):null;if((i||t)&&!(i&&t)||(o||n)&&!(o&&n))return r({path:`oohTimes.${e}`,message:"Incomplete time range"});if((u||l)&&!(u&&l)||(c||m)&&!(c&&m))return r({path:`premiumTimes.${e}`,message:"Incomplete time range"});if(i&&t&&i.isAfter(t)||o&&n&&o.isAfter(n))return r({path:`oohTimes.${e}`,message:"Invalid time range"});if(u&&l&&u.isAfter(l)||c&&m&&c.isAfter(m))return r({path:`premiumTimes.${e}`,message:"Invalid time range"});let h={from:i,to:t},f={from:o,to:n},v={from:u,to:l},q={from:c,to:m};if(y(h,f))return r({path:`oohTimes.${e}`,message:"hours overlap"});if(y(v,q))return r({path:`premiumTimes.${e}`,message:"hours overlap"});if([h,f].some(e=>[v,q].some(r=>y(e,r))))return r({path:`oohTimes.${e}`,message:"hours overlap"})}}return!0},H=f.t().shape({scheduleName:f.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:f.k().of(f.t({id:f.H().integer().required("Coverage area is required"),name:f.x().required("Coverage area is required"),area:f.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(b).test("no-overlap","hours overlap",function(e){return S(e,this.createError)}),x=f.t().shape({scheduleName:f.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:f.k().of(f.t({id:f.H().integer().required("Coverage area is required"),name:f.x().required("Coverage area is required"),area:f.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(b).test("no-overlap","hours overlap",function(e){return S(e,this.createError)}),T=f.t().shape({schedule:f.t().shape({label:f.x().required("Schedule is required"),value:f.H().integer().required("Schedule is required"),inputValue:f.x().nullable()}).required("Schedule is required").typeError("Schedule is required"),location:f.k().of(f.t({label:f.x().required("Location is required"),value:f.H().integer().required("Location is required")})).required("Location is required").typeError("Location is required")}).concat(b).test("no-overlap","hours overlap",function(e){return S(e,this.createError)}),$=f.t().shape({scheduleName:f.x().when("$isEdit",{is:!0,then:e=>e.required("Schedule name is required"),otherwise:e=>e.nullable()}),schedule:f.t().when("$isEdit",{is:!1,then:e=>e.shape({label:f.x().required("Schedule is required"),value:f.H().integer().required("Schedule is required"),inputValue:f.x().nullable(),fromSupplierDefaults:f.g()}).required("Schedule is required").typeError("Schedule is required"),otherwise:e=>e.nullable()}),coverageAreas:f.k().of(f.t({id:f.H().integer().required("Coverage area is required"),name:f.x().required("Coverage area is required"),area:f.x().required("Coverage area is required")})).required("Coverage areas are required").typeError("Coverage areas are required"),engineer:f.t({label:f.x().required(),value:f.H().integer().required()}).nullable()}).concat(b).test("no-overlap","hours overlap",function(e){return S(e,this.createError)});e.s(["h",0,T,"x",0,x,"M",0,$,"_",0,H],441353)},928382,37332,e=>{var r=e.i(391398),i=e.i(799083),t=e.i(152078),s=e.i(813843),a=e.i(422411),o=e.i(813762);e.s(["f",0,e=>{let{control:n}=e;return(0,r.jsxs)(s.f,{direction:"row",alignItems:"center",spacing:.5,mt:1,children:[(0,r.jsx)(a.e,{name:"includeTravelTime",control:n,render:e=>{let{value:s,onChange:a}=e;return(0,r.jsx)(t.f,{control:(0,r.jsx)(i.f,{color:"secondary",checked:!!s,onChange:e=>a(e.target.checked)}),label:"Include travel time"})}}),(0,r.jsx)(o.p,{title:"Selecting this will mean that travel time is included in calculating job duration for charging purposes.",iconSx:{color:"gray",fontSize:18}})]})}],928382);var n=e.i(98926),u=e.i(511667),l=e.i(21557);e.s(["f",0,e=>{let{refetchQueries:r,onSaved:i}=e,t=(0,n.f)(),s=(0,l.f)(),a=e=>s.show({content:e,severity:"error"}),o=e=>a(e.message||"Unable to save the service schedule"),d=e=>()=>{s.show({content:e,severity:"success"}),t.refetchQueries({include:r}),i()},[c,{isLoading:m}]=(0,u.f)("/service-schedule",{queryKey:"create-service-schedule",method:"POST",onError:o,onCompleted:d("Service schedule was created")}),[h,{isLoading:f}]=(0,u.f)("/service-schedule/:serviceScheduleId",{queryKey:"update-service-schedule",method:"PUT",onError:o,onCompleted:d("Service schedule was updated")});return{createSchedule:e=>c({body:e}),updateSchedule:async(e,r)=>e?h({pathParams:{serviceScheduleId:e},body:r}):void a("Service schedule not found"),isSaving:m||f}}],37332)},639907,e=>{e.s(["b",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"m",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"M",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[],engineer:e.userId?{value:e.userId,label:e.user?.fullName??"Unknown engineer"}:null}},"T",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}}])},933129,e=>{e.s(["l",0,e=>{let{form:r,entityId:i}=e;return{entity:"Customer",entityId:i,serviceId:r.service.value,schedule:r.schedule.label,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,location:r.location?.map(e=>e.value),normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days,parentId:r.schedule.value}},"Z",0,e=>{let{form:r,entityId:i}=e;return{entity:"Location",entityId:i,serviceId:r.service.value,schedule:r.scheduleName,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,coverageAreas:r.coverageAreas?.length?r.coverageAreas.map(e=>e.id):null,normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days}},"d",0,e=>{let r,{form:i,entityId:t}=e,s=null;return!i.schedule?.inputValue&&i.schedule?.value&&(r=i.schedule.label,s=i.schedule.fromSupplierDefaults?null:i.schedule.value),i.schedule?.inputValue&&(r=i.schedule.inputValue),i.scheduleName&&(r=i.scheduleName),{entity:"Supplier",entityId:t,serviceId:i.service.value,schedule:r,status:i.status,priority:i.priority.map(e=>e.value),minimumDuration:i.minimumDuration,minimumIncrement:i.minimumIncrement,includeTravelTime:i.includeTravelTime??!1,coverageAreas:i.coverageAreas?.length?i.coverageAreas.map(e=>e.id):null,normal:{firstHour:i.normal.firstHour,subsequentHours:i.normal.subsequentHours},ooh:{firstHour:i.ooh.firstHour,subsequentHours:i.ooh.subsequentHours},premium:{firstHour:i.premium.firstHour,subsequentHours:i.premium.subsequentHours},oohTimes:i.oohTimes,premiumTimes:i.premiumTimes,days:i.days,parentId:s,userId:i.engineer?.value??null}},"_",0,e=>{let{form:r,entity:i,entityId:t}=e;return{entity:i,entityId:t,serviceId:r.service.value,schedule:r.scheduleName,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,coverageAreas:r.coverageAreas?.length?r.coverageAreas.map(e=>e.id):null,normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days}}])},996706,e=>{var r=e.i(159080);let i=r.f`
  fragment ServiceScheduleFields on ServiceSchedule {
    id
    name
    status
    entity
    entityId
    userId
    serviceId
    minimumDuration
    minimumIncrement
    includeTravelTime
    normal
    ooh
    premium
    oohTimes
    premiumTimes
    days
    adminId
    createdAt
    updatedAt
  }
`,t=r.f`
  query GetServiceSchedule($serviceScheduleId: Int!) {
    serviceSchedule: ServiceSchedule_by_pk(id: $serviceScheduleId) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        location: Location {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
    }
  }

  ${i}
`,s=r.f`
  query GetServiceSchedules(
    $q: String
    $status: service_schedule_status
    $entity: service_schedule_entity!
    $entityId: Int
    $offset: Int = 0
    $limit: Int = 50
    $order: [ServiceSchedule_order_by!]
    $engineerFilter: ServiceSchedule_bool_exp = {}
  ) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        status: { _eq: $status }
        _and: [
          $engineerFilter
          { _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }] }
        ]
      }
      offset: $offset
      limit: $limit
      order_by: $order
    ) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
      user: User {
        id
        fullName
      }
    }
    meta: ServiceSchedule_aggregate(
      where: {
        entity: { _eq: $entity }
        entityId: { _eq: $entityId }
        status: { _eq: $status }
        _and: [
          $engineerFilter
          { _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }] }
        ]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${i}
`,a=r.f`
  query GetServiceScheduleForEntity($serviceScheduleId: Int!, $includeParent: Boolean!) {
    serviceSchedule: ServiceSchedule_by_pk(id: $serviceScheduleId) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }
      locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        location: Location {
          id
          name
        }
      }
      service: Service {
        id
        name
      }
      user: User {
        id
        fullName
      }
      parent: ParentServiceSchedule @include(if: $includeParent) {
        postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
          id
          postcode: PostcodeArea {
            id
            area
            name
          }
        }
      }
    }
  }

  ${i}
`,o=r.f`
  query GetServiceSchedulesForEntity(
    $q: String
    $status: service_schedule_status
    $entity: service_schedule_entity!
    $childEntityId: Int
    $childEntity: service_schedule_entity!
    $offset: Int = 0
    $limit: Int = 50
    $order: [ServiceSchedule_order_by!]
    $includeLocations: Boolean! = false
  ) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: $entity }
        status: { _eq: $status }
        _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }]
      }
      offset: $offset
      limit: $limit
      order_by: $order
    ) {
      ...ServiceScheduleFields
      postcodeAreas: PostcodeAreas(where: { entity: { _eq: "ServiceSchedule" } }) {
        id
        postcode: PostcodeArea {
          id
          area
          name
        }
      }
      slas: Slas {
        id
        sla: SLA {
          id
          name
        }
      }

      service: Service {
        id
        name
      }
      childSchedules: ServiceSchedules(
        where: { entity: { _eq: $childEntity }, entityId: { _eq: $childEntityId } }
      ) {
        ...ServiceScheduleFields
        locations: Location_Entity(where: { entity: { _eq: "ServiceSchedule" } })
          @include(if: $includeLocations) {
          id
          location: Location {
            id
            name
          }
        }
      }
    }
    meta: ServiceSchedule_aggregate(
      where: {
        entity: { _eq: $entity }
        status: { _eq: $status }
        _or: [{ name: { _ilike: $q } }, { Service: { name: { _ilike: $q } } }]
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${i}
`,n=r.f`
  query HasDefaultSupplierSchedule($entityId: Int!, $serviceId: Int!, $excludeIds: [Int!] = []) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: "Supplier" }
        entityId: { _eq: $entityId }
        serviceId: { _eq: $serviceId }
        userId: { _is_null: true }
        status: { _eq: "active" }
        id: { _nin: $excludeIds }
      }
      limit: 1
    ) {
      id
    }
  }
`,u=r.f`
  query ActiveEngineerSupplierSchedules($entityId: Int!, $serviceId: Int!) {
    schedules: ServiceSchedule(
      where: {
        entity: { _eq: "Supplier" }
        entityId: { _eq: $entityId }
        serviceId: { _eq: $serviceId }
        userId: { _is_null: false }
        status: { _eq: "active" }
      }
    ) {
      id
      user: User {
        id
        fullName
      }
    }
  }
`,l=r.f`
  query GetLocationCustomerReferences(
    $locationId: Int!
    $customerId: Int!
    $q: String = "%"
    $limit: Int = 50
  ) {
    references: JobSchedule(
      limit: $limit
      where: {
        locationId: { _eq: $locationId }
        customerId: { _eq: $customerId }
        reference: { _is_null: false, _neq: "", _ilike: $q }
      }
      distinct_on: reference
      order_by: { reference: asc }
    ) {
      reference
    }
  }
`;e.s(["c",0,u,"f",0,l,"O",0,t,"n",0,s,"y",0,o,"k",0,a,"i",0,n])},335453,e=>{var r=e.i(391398),i=e.i(755548),t=e.i(683125),s=e.i(88152),a=e.i(813843),o=e.i(652148),n=e.i(587369),u=e.i(691567),l=e.i(422411),d=e.i(514707),c=e.i(10945),m=e.i(849091),h=e.i(345837),f=e.i(824451),v=e.i(851123),p=e.i(877341),y=e.i(191788);let q={search:"",status:"active",engineer:null},g=()=>{},b={},S=()=>{},H=e=>{let{open:s=!1,close:u=g,initialFilters:d=b,setFilters:H=S,supplierAccountId:T}=e,$=(0,n.f)("(max-width: 600px)"),[_,I]=(0,y.useState)(""),[j,A]=(0,c.f)({key:T?`service_schedule_${d.filterType}_${T}`:`service_schedule_${d.filterType}`,initialValue:d}),[w,{data:{items:C}={items:[]},loading:P}]=(0,p.f)(v.P,{variables:{accountId:T,q:""!==_?`%${_}%`:null,limit:50,offset:0}}),{control:k,handleSubmit:E,reset:F,getValues:N}=(0,l.G)({defaultValues:{statusInactive:!1,...q,...d,...j}});return(0,r.jsx)(t.f,{keepMounted:!0,open:s,onClose:u,children:(0,r.jsx)("form",{onSubmit:E(e=>{try{let r={q:e.search?`%${e.search}%`:null,status:e.statusInactive?"inactive":"active",engineerId:e.engineer?.value??null};H(e=>({...e,...r}));let i=N();A(e=>({...e,...i}))}finally{u()}}),children:(0,r.jsxs)(x,{is600pxOrLess:$,children:[(0,r.jsx)(a.f,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:(0,r.jsx)(l.e,{control:k,name:"search",render:e=>{let{value:i,onChange:t}=e;return(0,r.jsx)(o.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search schedule or service",value:i,onChange:t})}})}),T&&(0,r.jsx)(a.f,{mt:2,children:(0,r.jsx)(l.e,{control:k,name:"engineer",render:e=>{let{value:i,onChange:t}=e;return(0,r.jsx)(f.f,{fullWidth:!0,color:"secondary",variant:"standard",label:"Engineer",placeholder:"All engineers",loading:P,options:C,value:i||null,onChange:(e,r)=>t(r),onOpen:()=>w(),onSearchChange:I})}})}),(0,r.jsx)(a.f,{mt:2,children:(0,r.jsx)(l.e,{name:"statusInactive",control:k,render:e=>{let{value:i,onChange:t}=e;return(0,r.jsx)(h.f,{control:(0,r.jsx)(m.f,{color:"secondary",checked:i,onChange:e=>t(e.target.checked)}),label:"Show inactive services"})}})}),(0,r.jsxs)(a.f,{width:"100%",direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,mt:3,children:[(0,r.jsx)(i.f,{variant:"contained",color:"danger",onClick:()=>{let e;F(e={...q,...d}),A(e),H({status:"active"}),u()},children:"Cancel"}),(0,r.jsx)(i.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})};H.propTypes={open:u.default.bool,close:u.default.func,initialFilters:u.default.object,setFilters:u.default.func};let x=(0,d.f)(s.f)(e=>{let{is600pxOrLess:r}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:r?"100vw":"500px",height:"auto",padding:"16px 27px 16px 27px",borderRadius:"8px"}});e.s(["f",0,H])},868450,(e,r,i)=>{var t=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=t(e.r(421506)),a=e.r(391398);i.default=(0,s.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"AccessTimeRounded")},953116,(e,r,i)=>{var t=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=t(e.r(421506)),a=e.r(391398);i.default=(0,s.default)((0,a.jsx)("path",{d:"M4 20h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4zM2 6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2m4 1H4V5h2zm-2 7h16c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2m0-3h2v2H4z"}),"StorageRounded")}])})();