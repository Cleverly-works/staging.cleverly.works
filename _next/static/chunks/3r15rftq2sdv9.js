(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[864883,e=>{var r=e.i(890350);let t=[{value:r.T.VERIFIED,label:"Verified",color:"success"},{value:r.T.UNVERIFIED,label:"Unverified",color:"danger"}];e.s(["f",0,t])},690374,e=>{let r=(e,r)=>{let t=document.createElement("a");"string"==typeof t.download?(document.body.appendChild(t),t.download=r,t.href=e,t.click(),document.body.removeChild(t)):location.replace(e)};e.s(["h",0,(e,t)=>{let i=URL.createObjectURL(e);try{r(i,t)}finally{window.setTimeout(()=>URL.revokeObjectURL(i),1e3)}},"f",0,r])},39059,e=>{var r=e.i(159080);let t=r.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,i=r.f`
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
`,n=r.f`
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
`,o=r.f`
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
`,s=r.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,a=r.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,u=r.f`
  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {
    createGoogleToken(code: $code, id: $id, type: $type) {
      success
      tokens
      error
    }
  }
`,l=r.f`
  mutation GenerateMSURL($type: String!, $id: Int!) {
    genenrateMSURL(id: $id, type: $type) {
      url
    }
  }
`,c=r.f`
  mutation signoutMS($id: Int!, $type: String!, $email: String!) {
    signoutMS(id: $id, type: $type, email: $email) {
      error
      msId
      success
    }
  }
`,d=r.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,m=r.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,f=r.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,p=r.f`
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
`,v=r.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,h=r.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,g=r.f`
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
`,b=r.f`
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
`,y=r.f`
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
`;e.s(["e",0,s,"d",0,l,"u",0,g,"q",0,d,"_",0,f,"x",0,o,"k",0,n,"f",0,m,"U",0,b,"I",0,t,"s",0,y,"c",0,u,"S",0,c,"o",0,v,"l",0,p,"V",0,i,"J",0,h,"W",0,a])},506656,e=>{e.s(["f",0,(e,r)=>{let t=Math.pow(10,r);return Math.round(e*t)/t}])},51196,152658,e=>{var r=e.i(159080);let t=r.f`
  mutation AddBankAccount($objects: [BankAccount_insert_input!]!) {
    insert_BankAccount(objects: $objects) {
      returning {
        id
        stripeId
        accountNumber
        routingNumber
        bic
        iban
        status
        createdAt
      }
    }
  }
`,i=r.f`
  mutation UpdateBankAccount($id: Int!, $changes: BankAccount_set_input) {
    update_BankAccount_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["R",0,t,"b",0,i],51196);var n=e.i(426778);let o=(0,n.t)().shape({bank:(0,n.x)().required(),accountNumber:(0,n.x)().required(),bic:(0,n.x)().required(),iban:(0,n.x)().required(),routingNumber:(0,n.x)().required(),showInInvoice:(0,n.g)()});e.s(["f",0,o],152658)},534971,699737,468156,441353,e=>{let r=[{value:"active",label:"Active"},{value:"inactive",label:"Inactive"}];e.s(["v",0,"Default rates must be set for this service before they can be specified for an engineer","e",0,{status:"active",service:void 0,coverageAreas:[],minimumDuration:0,minimumIncrement:0,includeTravelTime:!1,normal:{firstHour:null,subsequentHours:null},ooh:{firstHour:null,subsequentHours:null},premium:{firstHour:null,subsequentHours:null},oohTimes:{},premiumTimes:{},days:[],engineer:null},"s",0,[{value:"monday",label:"Monday"},{value:"tuesday",label:"Tuesday"},{value:"wednesday",label:"Wednesday"},{value:"thursday",label:"Thursday"},{value:"friday",label:"Friday"},{value:"saturday",label:"Saturday"},{value:"sunday",label:"Sunday"}],"P",0,r],534971);var t=e.i(391398),i=e.i(740790),n=e.i(813843),o=e.i(322135),s=e.i(115871),a=e.i(250990),u=e.i(422411),l=e.i(362537);let c=e=>{let r=(0,l.default)(e,"HH:mm",!0);return r.isValid()?r:null};e.s(["f",0,e=>{let{control:r,error:l,name:d,day:m}=e,f=e=>e?c(e):null,p=e=>e?.isValid()?e.format("HH:mm"):null,v="Are you sure you mean 23:59? The last minute of the day will not be included — use 00:00 to run the window to midnight.";return(0,t.jsxs)(i.f,{container:!0,children:[(0,t.jsx)(i.f,{item:!0,xs:2,children:(0,t.jsx)(s.f,{children:m})}),(0,t.jsx)(i.f,{item:!0,xs:10,children:(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,t.jsx)(u.e,{control:r,name:`${d}.firstFrom`,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(a.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(r),onChange:e=>i(p(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,t.jsx)(s.f,{children:"to"}),(0,t.jsx)(u.e,{control:r,name:`${d}.firstTo`,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(o.f,{open:"23:59"===r,title:v,arrow:!0,placement:"top",children:(0,t.jsx)("span",{children:(0,t.jsx)(a.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(r),onChange:e=>i(p(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}}),(0,t.jsx)(s.f,{children:"and"}),(0,t.jsx)(u.e,{control:r,name:`${d}.secondFrom`,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(a.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(r),onChange:e=>i(p(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})}}),(0,t.jsx)(s.f,{children:"to"}),(0,t.jsx)(u.e,{control:r,name:`${d}.secondTo`,render:e=>{let{value:r,onChange:i}=e;return(0,t.jsx)(o.f,{open:"23:59"===r,title:v,arrow:!0,placement:"top",children:(0,t.jsx)("span",{children:(0,t.jsx)(a.f,{ampm:!1,format:"HH:mm",disableOpenPicker:!0,value:f(r),onChange:e=>i(p(e)),slotProps:{textField:{error:!!l,variant:"standard",color:"secondary",size:"small",sx:{width:"100px"}}}})})})}})]})})]})}],699737);var d=e.i(280445),m=e.i(498681);let f=(0,d.f)(s.f)(e=>{let{theme:r}=e;return{color:r.palette.text.secondary,backgroundColor:r.palette.action.hover,borderRadius:r.shape.borderRadius,padding:r.spacing(.5,1)}});e.s(["f",0,()=>{let e,r,i=(e=(0,m.f)(),r=e?.admin?.timeZone,{value:"string"==typeof r?.value?r.value:"Europe/London",label:"string"==typeof r?.label?r.label:"Europe/London +00:00"});return(0,t.jsxs)(f,{variant:"body2",children:["Times are in the account timezone (",i.label,")"]})}],468156);var p=e.i(426778);let v=p.x().nullable().test("time-format","Invalid time",e=>!e||null!==c(e)),h=(e,r)=>{let t=c(r);return t&&"00:00"===r&&e&&"00:00"!==e?t.add(1,"day"):t},g=(e,r)=>!!(e.from&&e.to&&r.from&&r.to&&e.from.isBefore(r.to)&&r.from.isBefore(e.to)),b=p.t().shape({firstFrom:v,firstTo:v,secondFrom:v,secondTo:v}),y=p.t().shape({monday:b.nullable(),tuesday:b.nullable(),wednesday:b.nullable(),thursday:b.nullable(),friday:b.nullable(),saturday:b.nullable(),sunday:b.nullable()}),q=p.t().shape({status:p.x().oneOf(r.map(e=>e.value)).required("Status is required"),service:p.t({label:p.x().required("Service is required"),value:p.H().integer().required("Service is required")}).required("Service is required").typeError("Service is required"),priority:p.k().of(p.t({label:p.x().required("Priority is required"),value:p.H().integer().required("Priority is required")}).required("Priority is required").typeError("Priority is required")).required("Priority is required").typeError("Priority is required"),minimumDuration:p.H().integer().min(0).required("Minimum duration is required").typeError("Minimum duration is required"),minimumIncrement:p.H().integer().min(0).required("Minimum increment is required").typeError("Minimum increment is required"),includeTravelTime:p.g().default(!1),normal:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),ooh:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),premium:p.t({firstHour:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e),subsequentHours:p.H().min(0).nullable().typeError("").transform(e=>isNaN(e)?null:e)}),oohTimes:y,premiumTimes:y,days:p.k().of(p.c())}),H=(e,r)=>{let{oohTimes:t,premiumTimes:i}=e;if(!t||!i)return!0;let n=Object.keys(t),o=Object.keys(i);for(let e of n)if(o.includes(e)){let n=t[e],o=i[e];if(n||o){let t=n?.firstFrom?c(n.firstFrom):null,i=n?.firstTo?h(n.firstFrom,n.firstTo):null,s=n?.secondFrom?c(n.secondFrom):null,a=n?.secondTo?h(n.secondFrom,n.secondTo):null,u=o?.firstFrom?c(o.firstFrom):null,l=o?.firstTo?h(o.firstFrom,o.firstTo):null,d=o?.secondFrom?c(o.secondFrom):null,m=o?.secondTo?h(o.secondFrom,o.secondTo):null;if((t||i)&&!(t&&i)||(s||a)&&!(s&&a))return r({path:`oohTimes.${e}`,message:"Incomplete time range"});if((u||l)&&!(u&&l)||(d||m)&&!(d&&m))return r({path:`premiumTimes.${e}`,message:"Incomplete time range"});if(t&&i&&t.isAfter(i)||s&&a&&s.isAfter(a))return r({path:`oohTimes.${e}`,message:"Invalid time range"});if(u&&l&&u.isAfter(l)||d&&m&&d.isAfter(m))return r({path:`premiumTimes.${e}`,message:"Invalid time range"});let f={from:t,to:i},p={from:s,to:a},v={from:u,to:l},b={from:d,to:m};if(g(f,p))return r({path:`oohTimes.${e}`,message:"hours overlap"});if(g(v,b))return r({path:`premiumTimes.${e}`,message:"hours overlap"});if([f,p].some(e=>[v,b].some(r=>g(e,r))))return r({path:`oohTimes.${e}`,message:"hours overlap"})}}return!0},T=p.t().shape({scheduleName:p.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(q).test("no-overlap","hours overlap",function(e){return H(e,this.createError)}),_=p.t().shape({scheduleName:p.x().required("Schedule name is required").typeError("Schedule name is required"),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required")}).concat(q).test("no-overlap","hours overlap",function(e){return H(e,this.createError)}),x=p.t().shape({schedule:p.t().shape({label:p.x().required("Schedule is required"),value:p.H().integer().required("Schedule is required"),inputValue:p.x().nullable()}).required("Schedule is required").typeError("Schedule is required"),location:p.k().of(p.t({label:p.x().required("Location is required"),value:p.H().integer().required("Location is required")})).required("Location is required").typeError("Location is required")}).concat(q).test("no-overlap","hours overlap",function(e){return H(e,this.createError)}),$=p.t().shape({scheduleName:p.x().when("$isEdit",{is:!0,then:e=>e.required("Schedule name is required"),otherwise:e=>e.nullable()}),schedule:p.t().when("$isEdit",{is:!1,then:e=>e.shape({label:p.x().required("Schedule is required"),value:p.H().integer().required("Schedule is required"),inputValue:p.x().nullable(),fromSupplierDefaults:p.g()}).required("Schedule is required").typeError("Schedule is required"),otherwise:e=>e.nullable()}),coverageAreas:p.k().of(p.t({id:p.H().integer().required("Coverage area is required"),name:p.x().required("Coverage area is required"),area:p.x().required("Coverage area is required")})).required("Coverage areas are required").typeError("Coverage areas are required"),engineer:p.t({label:p.x().required(),value:p.H().integer().required()}).nullable()}).concat(q).test("no-overlap","hours overlap",function(e){return H(e,this.createError)});e.s(["h",0,x,"x",0,_,"M",0,$,"_",0,T],441353)},928382,37332,e=>{var r=e.i(391398),t=e.i(799083),i=e.i(152078),n=e.i(813843),o=e.i(422411),s=e.i(813762);e.s(["f",0,e=>{let{control:a}=e;return(0,r.jsxs)(n.f,{direction:"row",alignItems:"center",spacing:.5,mt:1,children:[(0,r.jsx)(o.e,{name:"includeTravelTime",control:a,render:e=>{let{value:n,onChange:o}=e;return(0,r.jsx)(i.f,{control:(0,r.jsx)(t.f,{color:"secondary",checked:!!n,onChange:e=>o(e.target.checked)}),label:"Include travel time"})}}),(0,r.jsx)(s.p,{title:"Selecting this will mean that travel time is included in calculating job duration for charging purposes.",iconSx:{color:"gray",fontSize:18}})]})}],928382);var a=e.i(98926),u=e.i(511667),l=e.i(21557);e.s(["f",0,e=>{let{refetchQueries:r,onSaved:t}=e,i=(0,a.f)(),n=(0,l.f)(),o=e=>n.show({content:e,severity:"error"}),s=e=>o(e.message||"Unable to save the service schedule"),c=e=>()=>{n.show({content:e,severity:"success"}),i.refetchQueries({include:r}),t()},[d,{isLoading:m}]=(0,u.f)("/service-schedule",{queryKey:"create-service-schedule",method:"POST",onError:s,onCompleted:c("Service schedule was created")}),[f,{isLoading:p}]=(0,u.f)("/service-schedule/:serviceScheduleId",{queryKey:"update-service-schedule",method:"PUT",onError:s,onCompleted:c("Service schedule was updated")});return{createSchedule:e=>d({body:e}),updateSchedule:async(e,r)=>e?f({pathParams:{serviceScheduleId:e},body:r}):void o("Service schedule not found"),isSaving:m||p}}],37332)},639907,e=>{e.s(["b",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"m",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}},"M",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,schedule:{value:e.id,label:e.name},status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:"postcodeAreas"in e&&Array.isArray(e.postcodeAreas)?e.postcodeAreas.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})):void 0,location:"locations"in e&&Array.isArray(e.locations)?e.locations.map(e=>({value:e.location?.id,label:e.location?.name})):void 0,normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[],engineer:e.userId?{value:e.userId,label:e.user?.fullName??"Unknown engineer"}:null}},"T",0,e=>{if(!e.service)throw Error("Service not found");return{service:{value:e.service.id,label:e.service.name},scheduleName:e.name,status:e.status,priority:e.slas?.map(e=>({value:e.sla?.id,label:e.sla?.name})),minimumDuration:e.minimumDuration,minimumIncrement:e.minimumIncrement,includeTravelTime:e.includeTravelTime??!1,coverageAreas:e.postcodeAreas?.map(e=>({id:e.postcode?.id,name:e.postcode?.name,area:e.postcode?.area})),normal:{firstHour:e.normal.firstHour,subsequentHours:e.normal.subsequentHours},ooh:{firstHour:e.ooh.firstHour,subsequentHours:e.ooh.subsequentHours},premium:{firstHour:e.premium.firstHour,subsequentHours:e.premium.subsequentHours},oohTimes:e.oohTimes,premiumTimes:e.premiumTimes,days:e.days||[]}}])},933129,e=>{e.s(["l",0,e=>{let{form:r,entityId:t}=e;return{entity:"Customer",entityId:t,serviceId:r.service.value,schedule:r.schedule.label,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,location:r.location?.map(e=>e.value),normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days,parentId:r.schedule.value}},"Z",0,e=>{let{form:r,entityId:t}=e;return{entity:"Location",entityId:t,serviceId:r.service.value,schedule:r.scheduleName,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,coverageAreas:r.coverageAreas?.length?r.coverageAreas.map(e=>e.id):null,normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days}},"d",0,e=>{let r,{form:t,entityId:i}=e,n=null;return!t.schedule?.inputValue&&t.schedule?.value&&(r=t.schedule.label,n=t.schedule.fromSupplierDefaults?null:t.schedule.value),t.schedule?.inputValue&&(r=t.schedule.inputValue),t.scheduleName&&(r=t.scheduleName),{entity:"Supplier",entityId:i,serviceId:t.service.value,schedule:r,status:t.status,priority:t.priority.map(e=>e.value),minimumDuration:t.minimumDuration,minimumIncrement:t.minimumIncrement,includeTravelTime:t.includeTravelTime??!1,coverageAreas:t.coverageAreas?.length?t.coverageAreas.map(e=>e.id):null,normal:{firstHour:t.normal.firstHour,subsequentHours:t.normal.subsequentHours},ooh:{firstHour:t.ooh.firstHour,subsequentHours:t.ooh.subsequentHours},premium:{firstHour:t.premium.firstHour,subsequentHours:t.premium.subsequentHours},oohTimes:t.oohTimes,premiumTimes:t.premiumTimes,days:t.days,parentId:n,userId:t.engineer?.value??null}},"_",0,e=>{let{form:r,entity:t,entityId:i}=e;return{entity:t,entityId:i,serviceId:r.service.value,schedule:r.scheduleName,status:r.status,priority:r.priority.map(e=>e.value),minimumDuration:r.minimumDuration,minimumIncrement:r.minimumIncrement,includeTravelTime:r.includeTravelTime??!1,coverageAreas:r.coverageAreas?.length?r.coverageAreas.map(e=>e.id):null,normal:{firstHour:r.normal.firstHour,subsequentHours:r.normal.subsequentHours},ooh:{firstHour:r.ooh.firstHour,subsequentHours:r.ooh.subsequentHours},premium:{firstHour:r.premium.firstHour,subsequentHours:r.premium.subsequentHours},oohTimes:r.oohTimes,premiumTimes:r.premiumTimes,days:r.days}}])},335453,e=>{var r=e.i(391398),t=e.i(755548),i=e.i(683125),n=e.i(88152),o=e.i(813843),s=e.i(652148),a=e.i(587369),u=e.i(691567),l=e.i(422411),c=e.i(514707),d=e.i(10945),m=e.i(849091),f=e.i(345837),p=e.i(824451),v=e.i(851123),h=e.i(877341),g=e.i(191788);let b={search:"",status:"active",engineer:null},y=()=>{},q={},H=()=>{},T=e=>{let{open:n=!1,close:u=y,initialFilters:c=q,setFilters:T=H,supplierAccountId:x}=e,$=(0,a.f)("(max-width: 600px)"),[I,A]=(0,g.useState)(""),[U,j]=(0,d.f)({key:x?`service_schedule_${c.filterType}_${x}`:`service_schedule_${c.filterType}`,initialValue:c}),[w,{data:{items:C}={items:[]},loading:S}]=(0,h.f)(v.P,{variables:{accountId:x,q:""!==I?`%${I}%`:null,limit:50,offset:0}}),{control:k,handleSubmit:D,reset:N,getValues:M}=(0,l.G)({defaultValues:{statusInactive:!1,...b,...c,...U}});return(0,r.jsx)(i.f,{keepMounted:!0,open:n,onClose:u,children:(0,r.jsx)("form",{onSubmit:D(e=>{try{let r={q:e.search?`%${e.search}%`:null,status:e.statusInactive?"inactive":"active",engineerId:e.engineer?.value??null};T(e=>({...e,...r}));let t=M();j(e=>({...e,...t}))}finally{u()}}),children:(0,r.jsxs)(_,{is600pxOrLess:$,children:[(0,r.jsx)(o.f,{direction:"row",flexWrap:"wrap",justifyContent:"center",children:(0,r.jsx)(l.e,{control:k,name:"search",render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(s.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search schedule or service",value:t,onChange:i})}})}),x&&(0,r.jsx)(o.f,{mt:2,children:(0,r.jsx)(l.e,{control:k,name:"engineer",render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(p.f,{fullWidth:!0,color:"secondary",variant:"standard",label:"Engineer",placeholder:"All engineers",loading:S,options:C,value:t||null,onChange:(e,r)=>i(r),onOpen:()=>w(),onSearchChange:A})}})}),(0,r.jsx)(o.f,{mt:2,children:(0,r.jsx)(l.e,{name:"statusInactive",control:k,render:e=>{let{value:t,onChange:i}=e;return(0,r.jsx)(f.f,{control:(0,r.jsx)(m.f,{color:"secondary",checked:t,onChange:e=>i(e.target.checked)}),label:"Show inactive services"})}})}),(0,r.jsxs)(o.f,{width:"100%",direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,mt:3,children:[(0,r.jsx)(t.f,{variant:"contained",color:"danger",onClick:()=>{let e;N(e={...b,...c}),j(e),T({status:"active"}),u()},children:"Cancel"}),(0,r.jsx)(t.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})};T.propTypes={open:u.default.bool,close:u.default.func,initialFilters:u.default.object,setFilters:u.default.func};let _=(0,c.f)(n.f)(e=>{let{is600pxOrLess:r}=e;return{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:r?"100vw":"500px",height:"auto",padding:"16px 27px 16px 27px",borderRadius:"8px"}});e.s(["f",0,T])},868450,(e,r,t)=>{var i=e.r(978509);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(e.r(421506)),o=e.r(391398);t.default=(0,n.default)((0,o.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-.22-13h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l4.15 2.49c.34.2.78.1.98-.24.21-.34.1-.79-.25-.99l-3.87-2.3V7.72c0-.4-.32-.72-.72-.72"}),"AccessTimeRounded")},220490,e=>{var r=e.i(75907),t=e.i(460997),i=e.i(191788),n=e.i(889878),o=e.i(600961),s=e.i(396851),a=e.i(395724),u=e.i(88152),l=e.i(713149),c=e.i(46739);function d(e){return(0,c.f)("MuiCard",e)}(0,l.f)("MuiCard",["root"]);var m=e.i(391398);let f=["className","raised"],p=(0,s.f)(u.f,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),v=i.forwardRef(function(e,i){let s=(0,a.f)({props:e,name:"MuiCard"}),{className:u,raised:l=!1}=s,c=(0,t.f)(s,f),v=(0,r.f)({},s,{raised:l}),h=(e=>{let{classes:r}=e;return(0,o.f)({root:["root"]},d,r)})(v);return(0,m.jsx)(p,(0,r.f)({className:(0,n.f)(h.root,u),elevation:l?8:void 0,ref:i,ownerState:v},c))});e.s(["f",0,v],220490)},101934,e=>{var r=e.i(460997),t=e.i(75907),i=e.i(191788),n=e.i(889878),o=e.i(600961),s=e.i(396851),a=e.i(395724),u=e.i(713149),l=e.i(46739);function c(e){return(0,l.f)("MuiCardActions",e)}(0,u.f)("MuiCardActions",["root","spacing"]);var d=e.i(391398);let m=["disableSpacing","className"],f=(0,s.f)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:t}=e;return[r.root,!t.disableSpacing&&r.spacing]}})(e=>{let{ownerState:r}=e;return(0,t.f)({display:"flex",alignItems:"center",padding:8},!r.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),p=i.forwardRef(function(e,i){let s=(0,a.f)({props:e,name:"MuiCardActions"}),{disableSpacing:u=!1,className:l}=s,p=(0,r.f)(s,m),v=(0,t.f)({},s,{disableSpacing:u}),h=(e=>{let{classes:r,disableSpacing:t}=e;return(0,o.f)({root:["root",!t&&"spacing"]},c,r)})(v);return(0,d.jsx)(f,(0,t.f)({className:(0,n.f)(h.root,l),ownerState:v,ref:i},p))});e.s(["f",0,p],101934)},106850,e=>{var r=e.i(75907),t=e.i(460997),i=e.i(191788),n=e.i(889878),o=e.i(600961),s=e.i(396851),a=e.i(395724),u=e.i(713149),l=e.i(46739);function c(e){return(0,l.f)("MuiCardContent",e)}(0,u.f)("MuiCardContent",["root"]);var d=e.i(391398);let m=["className","component"],f=(0,s.f)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),p=i.forwardRef(function(e,i){let s=(0,a.f)({props:e,name:"MuiCardContent"}),{className:u,component:l="div"}=s,p=(0,t.f)(s,m),v=(0,r.f)({},s,{component:l}),h=(e=>{let{classes:r}=e;return(0,o.f)({root:["root"]},c,r)})(v);return(0,d.jsx)(f,(0,r.f)({as:l,className:(0,n.f)(h.root,u),ownerState:v,ref:i},p))});e.s(["f",0,p],106850)},799306,e=>{e.s(["f",0,function(e){if(null===e||!0===e||!1===e)return 0/0;var r=Number(e);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}])},925527,389849,e=>{var r=e.i(623886),t=e.i(699213);e.s(["f",0,function(e){(0,t.f)(1,arguments);var i=(0,r.f)(e);return i.setHours(23,59,59,999),i}],925527);var i=e.i(926638),n=e.i(799306),o=/[T ]/,s=/[Z ]/i,a=/([Z+-].*)$/,u=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var f=[31,null,31,30,31,30,31,31,30,31,30,31];function p(e){return e%400==0||e%4==0&&e%100!=0}e.s(["f",0,function(e,r){(0,t.f)(1,arguments);var v,h,g,b=(0,n.f)(null!=(v=null==r?void 0:r.additionalDigits)?v:2);if(2!==b&&1!==b&&0!==b)throw RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(0/0);var y=function(e){var r,t={},i=e.split(o);if(i.length>2)return t;if(/:/.test(i[0])?r=i[0]:(t.date=i[0],r=i[1],s.test(t.date)&&(t.date=e.split(s)[0],r=e.substr(t.date.length,e.length))),r){var n=a.exec(r);n?(t.time=r.replace(n[1],""),t.timezone=n[1]):t.time=r}return t}(e);if(y.date){var q=function(e,r){var t=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+r)+"})|(\\d{2}|[+-]\\d{"+(2+r)+"})$)"),i=e.match(t);if(!i)return{year:0/0,restDateString:""};var n=i[1]?parseInt(i[1]):null,o=i[2]?parseInt(i[2]):null;return{year:null===o?n:100*o,restDateString:e.slice((i[1]||i[2]).length)}}(y.date,b);h=function(e,r){if(null===r)return new Date(0/0);var t,i,n,o,s,a,l,c,m,v,h,g,b=e.match(u);if(!b)return new Date(0/0);var y=!!b[4],q=d(b[1]),H=d(b[2])-1,T=d(b[3]),_=d(b[4]),x=d(b[5])-1;if(y){return(t=_,i=x,t>=1&&t<=53&&i>=0&&i<=6)?(n=r,o=_,s=x,(a=new Date(0)).setUTCFullYear(n,0,4),l=a.getUTCDay()||7,a.setUTCDate(a.getUTCDate()+((o-1)*7+s+1-l)),a):new Date(0/0)}var $=new Date(0);return(c=r,m=H,v=T,m>=0&&m<=11&&v>=1&&v<=(f[m]||(p(c)?29:28))&&(h=r,(g=q)>=1&&g<=(p(h)?366:365)))?($.setUTCFullYear(r,H,Math.max(q,T)),$):new Date(0/0)}(q.restDateString,q.year)}if(!h||isNaN(h.getTime()))return new Date(0/0);var H=h.getTime(),T=0;if(y.time&&isNaN(T=function(e){var r,t,n,o=e.match(l);if(!o)return 0/0;var s=m(o[1]),a=m(o[2]),u=m(o[3]);return(r=s,t=a,n=u,24===r?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&r>=0&&r<25)?s*i.r+a*i.z+1e3*u:0/0}(y.time)))return new Date(0/0);if(y.timezone){if(isNaN(g=function(e){if("Z"===e)return 0;var r,t=e.match(c);if(!t)return 0;var n="+"===t[1]?-1:1,o=parseInt(t[2]),s=t[3]&&parseInt(t[3])||0;return(r=s)>=0&&r<=59?n*(o*i.r+s*i.z):0/0}(y.timezone)))return new Date(0/0)}else{var _=new Date(H+T),x=new Date(0);return x.setFullYear(_.getUTCFullYear(),_.getUTCMonth(),_.getUTCDate()),x.setHours(_.getUTCHours(),_.getUTCMinutes(),_.getUTCSeconds(),_.getUTCMilliseconds()),x}return new Date(H+T+g)}],389849)},684034,e=>{var r=e.i(389849);e.s(["f",()=>r.f])}],171764,(e,r,t)=>{r.exports=function(e,r,t,i){for(var n=-1,o=null==e?0:e.length;++n<o;){var s=e[n];r(i,s,t(s),e)}return i}},299177,(e,r,t)=>{var i=e.r(885049);r.exports=function(e,r,t,n){return i(e,function(e,i,o){r(n,e,t(e),o)}),n}},885049,(e,r,t)=>{var i=e.r(733991);r.exports=e.r(8331)(i)},733991,(e,r,t)=>{var i=e.r(864353),n=e.r(622335);r.exports=function(e,r){return e&&i(e,r,n)}},928267,(e,r,t)=>{var i=e.r(478969),n=e.r(598921);r.exports=function(e,r){r=i(r,e);for(var t=0,o=r.length;null!=e&&t<o;)e=e[n(r[t++])];return t&&t==o?e:void 0}},980171,(e,r,t)=>{r.exports=function(e,r){return null!=e&&r in Object(e)}},305001,(e,r,t)=>{var i=e.r(698620),n=e.r(190835);r.exports=function(e,r,t,o){var s=t.length,a=s,u=!o;if(null==e)return!a;for(e=Object(e);s--;){var l=t[s];if(u&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++s<a;){var c=(l=t[s])[0],d=e[c],m=l[1];if(u&&l[2]){if(void 0===d&&!(c in e))return!1}else{var f=new i;if(o)var p=o(d,m,c,e,r,f);if(!(void 0===p?n(m,d,3,o,f):p))return!1}}return!0}},305792,(e,r,t)=>{var i=e.r(708554),n=e.r(792384),o=e.r(625975),s=e.r(448684),a=e.r(122025);r.exports=function(e){return"function"==typeof e?e:null==e?o:"object"==typeof e?s(e)?n(e[0],e[1]):i(e):a(e)}},708554,(e,r,t)=>{var i=e.r(305001),n=e.r(461994),o=e.r(19939);r.exports=function(e){var r=n(e);return 1==r.length&&r[0][2]?o(r[0][0],r[0][1]):function(t){return t===e||i(t,e,r)}}},792384,(e,r,t)=>{var i=e.r(190835),n=e.r(758568),o=e.r(517217),s=e.r(970923),a=e.r(81673),u=e.r(19939),l=e.r(598921);r.exports=function(e,r){return s(e)&&a(r)?u(l(e),r):function(t){var s=n(t,e);return void 0===s&&s===r?o(t,e):i(r,s,3)}}},343054,(e,r,t)=>{r.exports=function(e){return function(r){return null==r?void 0:r[e]}}},502503,(e,r,t)=>{var i=e.r(928267);r.exports=function(e){return function(r){return i(r,e)}}},316666,(e,r,t)=>{var i=e.r(171764),n=e.r(299177),o=e.r(305792),s=e.r(448684);r.exports=function(e,r){return function(t,a){var u=s(t)?i:n,l=r?r():{};return u(t,e,o(a,2),l)}}},8331,(e,r,t)=>{var i=e.r(379858);r.exports=function(e,r){return function(t,n){if(null==t)return t;if(!i(t))return e(t,n);for(var o=t.length,s=r?o:-1,a=Object(t);(r?s--:++s<o)&&!1!==n(a[s],s,a););return t}}},461994,(e,r,t)=>{var i=e.r(81673),n=e.r(622335);r.exports=function(e){for(var r=n(e),t=r.length;t--;){var o=r[t],s=e[o];r[t]=[o,s,i(s)]}return r}},877697,(e,r,t)=>{var i=e.r(478969),n=e.r(713266),o=e.r(448684),s=e.r(805251),a=e.r(457279),u=e.r(598921);r.exports=function(e,r,t){r=i(r,e);for(var l=-1,c=r.length,d=!1;++l<c;){var m=u(r[l]);if(!(d=null!=e&&t(e,m)))break;e=e[m]}return d||++l!=c?d:!!(c=null==e?0:e.length)&&a(c)&&s(m,c)&&(o(e)||n(e))}},81673,(e,r,t)=>{var i=e.r(903275);r.exports=function(e){return e==e&&!i(e)}},19939,(e,r,t)=>{r.exports=function(e,r){return function(t){return null!=t&&t[e]===r&&(void 0!==r||e in Object(t))}}},758568,(e,r,t)=>{var i=e.r(928267);r.exports=function(e,r,t){var n=null==e?void 0:i(e,r);return void 0===n?t:n}},320037,(e,r,t)=>{var i=e.r(398629),n=e.r(316666),o=Object.prototype.hasOwnProperty;r.exports=n(function(e,r,t){o.call(e,t)?e[t].push(r):i(e,t,[r])})},517217,(e,r,t)=>{var i=e.r(980171),n=e.r(877697);r.exports=function(e,r){return null!=e&&n(e,r,i)}},122025,(e,r,t)=>{var i=e.r(343054),n=e.r(502503),o=e.r(970923),s=e.r(598921);r.exports=function(e){return o(e)?i(s(e)):n(e)}}]);