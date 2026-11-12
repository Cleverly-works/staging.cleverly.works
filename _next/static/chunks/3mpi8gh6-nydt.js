(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,913758,e=>{var t=e.i(159080),r=e.i(987123);let i=t.f`
  query GetEvents($where: Job_bool_exp) {
    events: Job(where: $where) {
      id
      number
      type
      description
      timingEnd
      scheduledAt
      siteVisitStart
      timingStart
      status
      title
      quoteDue
      estimatedDuration
      estimatedDurationUnit
      anyTimeOption
      hourStart
      hourEnd
      shortJobDesc: Taxonomy(
        where: { entity: { _eq: "Job" }, Taxonomy: { type: { _eq: "jobTags" } } }
      ) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
        }
      }
      quoteSummary: Taxonomy(
        where: { entity: { _eq: "Job" }, Taxonomy: { type: { _eq: "quoteSummary" } } }
      ) {
        taxonomy: Taxonomy {
          name
        }
      }
      supplierQuotes: SupplierQuotes(
        where: {
          siteVisitAt: { _is_null: false }
          status: { _neq: "cancelled" }
          type: { _eq: "quote" }
        }
      ) {
        siteVisitAt
        quoteNumber
      }
      location: Location {
        id
        access
        createdAt
        name
        contactUserId
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
          }
        }
      }
      supplier: Supplier {
        addresses: Addresses(where: { entity: { _eq: "Account" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
          }
        }
      }
      supplierUser: SupplierUser {
        id
        fullName
      }
      supplierOffers: SupplierOffers(where: { status: { _neq: "cancelled" } }) {
        id
        accountId
        status
        statusLog
        meta
        heldSupplierUserId
        heldScheduledAt
        heldAt
        heldByUserId
      }
    }
  }
  ${r.a}
  ${r.S}
`,n=t.f`
  query GetCalendarTasks($where: Task_bool_exp!) {
    tasks: Task(where: $where) {
      id
      title
      status
      dueDate
      completion_by_customer
      job: Job {
        number
        type
        quoted
      }
      location: Location {
        name
      }
    }
  }
`,a=t.f`
  query GetCompliancesCalendar(
    $locationId: Int
    $customerId: Int
    $start: date
    $end: date
    $supplierId: Int
  ) {
    compliances: Compliance(
      where: {
        locationId: { _eq: $locationId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        expiryDate: { _gte: $start, _lte: $end }
      }
    ) {
      id
      name
      expiryDate
    }
  }
`,s=t.f`
  mutation UpdateCalendarJobAssignment(
    $id: Int!
    $changes: Job_set_input!
    $timing: [JobTiming_insert_input!]!
    $cancelOtherOffers: Boolean!
    $acceptedSupplierOfferId: Int
  ) {
    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      supplierId
      supplierUserId
      scheduledAt
      timingStart
    }
    insert_JobTiming(objects: $timing) {
      affected_rows
    }
    update_SupplierOffer(
      where: {
        jobId: { _eq: $id }
        id: { _neq: $acceptedSupplierOfferId }
        status: { _neq: "cancelled" }
      }
      _set: { status: "cancelled" }
    ) @include(if: $cancelOtherOffers) {
      affected_rows
    }
  }
`,o=t.f`
  query GetSupplierOfferByJobAndAccount($jobId: Int!, $accountId: Int!) {
    SupplierOffer(
      where: {
        jobId: { _eq: $jobId }
        accountId: { _eq: $accountId }
        status: { _neq: "cancelled" }
      }
      limit: 1
      order_by: { id: desc }
    ) {
      id
      accountId
      statusLog
    }
  }
`,l=t.f`
  query CheckSupplierUserOverlap(
    $supplierUserId: Int!
    $excludeJobId: Int!
    $start: timestamptz!
    $end: timestamptz!
  ) {
    overlaps: Job(
      where: {
        id: { _neq: $excludeJobId }
        status: { _neq: "canceled" }
        _and: [
          {
            _or: [
              { supplierUserId: { _eq: $supplierUserId } }
              { JobOperatives: { userId: { _eq: $supplierUserId } } }
            ]
          }
          {
            _or: [
              {
                _and: [
                  { scheduledAt: { _is_null: false } }
                  { scheduledAt: { _lt: $end } }
                  { scheduledAt: { _gte: $start } }
                ]
              }
              {
                _and: [
                  { scheduledAt: { _is_null: true } }
                  { timingStart: { _is_null: false } }
                  { timingEnd: { _is_null: false } }
                  { timingStart: { _lt: $end } }
                  { timingEnd: { _gt: $start } }
                ]
              }
            ]
          }
        ]
      }
      limit: 1
    ) {
      id
    }
    heldOffers: SupplierOffer(
      where: {
        status: { _eq: "offered" }
        jobId: { _neq: $excludeJobId }
        heldSupplierUserId: { _eq: $supplierUserId }
        Job: { status: { _neq: "canceled" } }
      }
    ) {
      id
      jobId
      meta
      heldSupplierUserId
      heldScheduledAt
      heldAt
      heldByUserId
    }
  }
`,d=t.f`
  query GetCalendarBlockEvents($userIds: [Int!], $start: timestamptz!, $end: timestamptz!) {
    events: Holiday(
      where: {
        status: { _eq: "active" }
        userId: { _in: $userIds }
        _and: [{ startDate: { _lt: $end } }, { endDate: { _gt: $start } }]
      }
    ) {
      id
      userId
      startDate
      endDate
      notes
      meta
      User {
        id
        fullName
      }
    }
  }
`,c=t.f`
  query CheckUserBlockOverlap($userId: Int!, $start: timestamptz!, $end: timestamptz!) {
    overlaps: Holiday(
      where: {
        status: { _eq: "active" }
        userId: { _eq: $userId }
        _and: [{ startDate: { _lt: $end } }, { endDate: { _gt: $start } }]
      }
      limit: 1
    ) {
      id
    }
  }
`,u=t.f`
  query GetBlockEventDetails($id: Int!) {
    event: Holiday_by_pk(id: $id) {
      id
      notes
      meta
      startDate
      endDate
    }
  }
`,p=t.f`
  query GetJobEventDetails($jobId: Int!) {
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
      sublocation: Sublocation {
        name
      }
      invoices: Invoices(order_by: { createdAt: desc }) {
        id
        invoiceNumber
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
      quoteSummary: Taxonomy(
        where: { entity: { _eq: "Job" }, Taxonomy: { type: { _eq: "quoteSummary" } } }
      ) {
        taxonomy: Taxonomy {
          name
        }
      }
      compliance: Compliance {
        id
        name
        complianceCategory: ComplianceCategory {
          id
          name
        }
        parentCompliance: ParentCompliance {
          id
          name
        }
      }
    }
  }
  ${r.a}
  ${r.S}
`,m=t.f`
  query GetComplianceEventDetails($id: Int!) {
    compliance: Compliance_by_pk(id: $id) {
      id
      name
      registeredNumber
      repeat
      status
      expiryDate

      location: Location {
        id
        name
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
          }
        }
      }
      sublocation: Sublocation {
        id
        name
      }
      assetCategory: AssetCategory {
        id
        name
      }
      complianceCategory: ComplianceCategory {
        id
        name
      }
      parentCompliance: ParentCompliance {
        id
        name
      }
      assets: Assets(where: { entity: { _eq: "Compliance" } }) {
        id
        entity
        entityId
        assetId
        asset: Asset {
          id
          name
        }
      }
      supplier: Supplier {
        id
        name
        accountUsers: Account_Users(where: { isContact: { _eq: true } }) {
          user: User {
            id
            fullName
          }
        }
      }
      customer: Customer {
        id
        name
        accountUsers: Account_Users(where: { isContact: { _eq: true } }) {
          user: User {
            id
            fullName
          }
        }
      }
    }
  }
  ${r.a}
  ${r.S}
`;e.s(["x",0,l,"d",0,c,"o",0,u,"G",0,d,"E",0,n,"u",0,a,"P",0,m,"m",0,i,"U",0,p,"b",0,o,"T",0,s])},482384,e=>{var t=e.i(391398),r=e.i(974261),i=e.i(191788);class n{apiKey=r.e.map||"";channel;center;client;format;language;location;maptype;markers;paths;region;rootURL;scale;signature;size;style;visible;zoom;constructor({center:e,channel:t,client:r,format:i="png",language:n,location:a="",maptype:s="roadmap",markers:o=[],paths:l=[],region:d,rootURL:c="https://maps.googleapis.com/maps/api/staticmap",scale:u=1,signature:p,size:m="400x400",style:f,visible:h,zoom:x=15}){this.channel=t,this.center=e,this.client=r,this.format=i,this.language=n,this.location=a,this.maptype=s,this.markers=o,this.paths=l,this.region=d,this.rootURL=c,this.scale=u,this.signature=p,this.size=m,this.style=f,this.visible=h,this.zoom=x}urlBuilder(e,t,r){return t?"object"==typeof t?`${e}${r}${JSON.stringify(t)}`:`${e}${r}${t}`:null}renderBaseMap(){let e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));let t=e.filter(e=>e).join("&");return`${this.rootURL}?${t}`}locationBuilder(e){let t=[];if(Array.isArray(e)){let r=e.map(e=>this.locationBuilder(e));t.push(...r)}return("string"==typeof e||"number"==typeof e)&&t.push(encodeURI(String(e))),"object"==typeof e&&"lat"in e&&"lng"in e&&t.push(`${e.lat},${e.lng}`),t.join("%7C")}renderPath(e){let t=[];if(e.circle){var r;let i=(r=e.circle.latitude,function(e,t,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,n=Math.PI,a="",s=e*n/180,o=t*n/180,l=r/1e3/6371;for(let e=0;e<=360;e+=i){let t=e*n/180,r=Math.asin(Math.sin(s)*Math.cos(l)+Math.cos(s)*Math.sin(l)*Math.cos(t)),i=(o+Math.atan2(Math.sin(t)*Math.sin(l)*Math.cos(s),Math.cos(l)-Math.sin(s)*Math.sin(r)))*180/n;a+=function e(t){let r=[];if(Array.isArray(t)){let i=t.map(t=>e(t));r.push(...i)}return("string"==typeof t||"number"==typeof t)&&r.push(String(t)),"object"==typeof t&&"lat"in t&&"lng"in t&&r.push(`${t.lat},${t.lng}`),r.join("%7C")}(180*r/n+","+i)}return encodeURI(a)}(r,e.circle.longitude,e.circle.radius));t.push(this.urlBuilder("",this.locationBuilder(`${i}`),""))}t.push(this.urlBuilder("color",e.color,":")),t.push(this.urlBuilder("weight",e.weight,":")),t.push(this.urlBuilder("fillcolor",e.fillcolor,":")),t.push(this.urlBuilder("geodesic",e.geodesic,":")),e.points&&t.push(this.urlBuilder("",this.locationBuilder(e.points),""));let i=t.filter(e=>e).join("%7C");return`path=${i}`}renderParts(){return this.paths.map(e=>this.renderPath(e))}renderMarkers(){let{markers:e,locationBuilder:t,location:r}=this;return(e.length?e.map(e=>{let r="markers=";switch(typeof e){case"string":r+=t.call(this,e);break;case"object":{let{colour:i,label:n,location:a}=e;r+=(i?`color:${i}|`:"")+(n?`label:${n}|`:"")+(a&&`${t.call(this,a)}|`)}}return r}):[`markers=${t.call(this,r)}`]).join("&")}generateUrl(){let e=this.renderParts()||[],t=this.renderBaseMap(),r=this.renderMarkers();return`${t}&${e}&${r}`}}e.s(["f",0,e=>{let{center:r,channel:a,className:s,client:o,container:l="img",format:d="png",language:c,location:u,maptype:p="roadmap",markers:m,paths:f,region:h,scale:x=1,signature:y,size:g="400x400",style:b,styleMap:j,visible:v,zoom:_=15}=e,[I,$]=g?g.split("x"):["400","400"],[S,A]=(0,i.useState)("");return(0,i.useEffect)(()=>{A(new n({center:r,channel:a,client:o,format:d,language:c,location:u,maptype:p,markers:m,paths:f,region:h,scale:x,signature:y,size:g,style:j,visible:v,zoom:_}).generateUrl())},[r,a,o,d,c,u,p,m,f,h,x,y,g,j,v,_]),(0,t.jsx)(l,{className:s,width:I,height:$,src:S,style:b,alt:"map"})}])},170398,e=>{var t=e.i(391398),r=e.i(813843),i=e.i(115871),n=e.i(191788),a=e.i(280445),s=e.i(64134),o=e.i(39345),l=e.i(451221);let d=(0,a.f)("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,c=(0,a.f)("div")`
  display: flex;
  align-items: center;
`,u=(0,a.f)("span")`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>{let{active:t}=e;return t?"#333":"transparent"}};
  border: 1px solid #333;
  margin: 0 4px;
  display: inline-block;
`;e.s(["f",0,e=>{let{contactUsers:a}=e,[p,m]=(0,n.useState)(0),f=a.length,h=(0,l.f)(),x=(0,n.useMemo)(()=>a[p],[a,p]);return 0===f?null:(0,t.jsxs)("div",{children:[(0,t.jsxs)(r.f,{children:[(0,t.jsx)(i.f,{color:"text.primary",children:"Name"}),(0,t.jsxs)(i.f,{color:"text.primary",children:[x?.user?.nameFirst," ",x?.user?.nameLast]}),(0,t.jsx)(i.f,{color:"text.primary",children:"Phone"}),(0,t.jsx)(i.f,{color:"text.primary",children:x?.user?.phone}),(0,t.jsx)(i.f,{color:"text.primary",children:"Email"}),(0,t.jsx)(i.f,{color:"text.primary",children:x?.user?.email})]}),f>1&&(0,t.jsxs)(d,{children:[(0,t.jsx)(s.default,{onClick:()=>{m(e=>0===e?f-1:e-1)},sx:{color:h.palette.text.primary,cursor:"pointer"}}),(0,t.jsx)(c,{children:(()=>{if(f<=5)return a.map((e,r)=>(0,t.jsx)(u,{active:r===p},r));let e=0,r=p;return p<5?(e=0,r=p):(r=4,f-(e=p-4)<5&&(r=p-(e=f-5))),Array.from({length:5}).map((i,n)=>{let a=e+n;return(0,t.jsx)(u,{active:n===r},a)})})()}),(0,t.jsx)(o.default,{onClick:()=>{m(e=>e===f-1?0:e+1)},sx:{color:h.palette.text.primary,cursor:"pointer"}})]})]})}])},136006,673805,e=>{var t=e.i(391398),r=e.i(280445),i=e.i(115871),n=e.i(170398);let a=(0,r.f)("div")`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 1.25rem;
`;e.s(["f",0,e=>{let{contactUsers:r=[]}=e;return(0,t.jsxs)(a,{children:[(0,t.jsx)(i.f,{variant:"h6",color:"text.primary",mb:1,children:"Contacts"}),(0,t.jsx)(n.f,{contactUsers:r})]})}],136006);var s=e.i(871931),o=e.i(760981),l=e.i(302966),d=e.i(813843),c=e.i(747112),u=e.i(228526);let p=(0,r.f)(s.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{profile:r}=e;return r?.companyNumber||r?.vatId||r?.meta?.xeroContactId||r?.clientType?.name||r?.details?.typeOfOrganisation||r?.details?.utrNumber||r?.details?.cisRegistered||r?.details?.quotingEmail||r?.website?(0,t.jsxs)(p,{defaultExpanded:!0,children:[(0,t.jsx)(l.f,{expandIcon:(0,t.jsx)(c.f,{}),children:(0,t.jsx)(i.f,{typography:"h6",children:"Company"})}),(0,t.jsx)(o.f,{sx:{pt:0},children:(0,t.jsxs)(d.f,{spacing:2,sx:{width:"100%"},children:[r?.companyNumber&&r?.type!=="customer"&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"Organisation type"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:u.G.find(e=>e.value===r?.details?.typeOfOrganisation)?.text||"N/A"})]}),r?.companyNumber&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"Company number"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r?.companyNumber})]}),r?.vatId&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"VAT number"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r?.vatId})]}),r?.details?.utrNumber&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"UTR number"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r?.details?.utrNumber})]}),r?.details?.cisRegistered&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"CIS registration number"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r?.details?.cisRegistered})]}),r?.clientType?.name&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"Customer type"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r.clientType.name})]}),r?.details?.quotingEmail&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"Quoting email"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r.details.quotingEmail})]}),r?.meta?.xeroContactId&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"Xero contact ID"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r?.meta?.xeroContactId})]}),r?.website&&(0,t.jsxs)(d.f,{children:[(0,t.jsx)(i.f,{color:"text.secondary",fontSize:"0.875rem",children:"Website"}),(0,t.jsx)(i.f,{fontSize:"0.875rem",children:r?.website})]})]})})]}):null}],673805)},443919,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(280445),n=e.i(222351),a=e.i(738251),s=e.i(115871),o=e.i(755548),l=e.i(813843),d=e.i(741850),c=e.i(376733),u=e.i(411331),p=e.i(377198);let m=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var f=e.i(889231),h=e.i(396413);let x=(0,i.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,y=(0,i.f)("div")`
  position: relative;
  display: inline-block;
  border-radius: ${e=>{let{logoUrl:t}=e;return t?"2px":"50%"}};
  overflow: hidden;

  .edit-text {
    width: 100%;
    text-align: center;
    border-radius: ${e=>{let{logoUrl:t}=e;return t?"0px 0px 2px 2px":"0"}};
  }

  &:hover .edit-text {
    opacity: 1;
  }

  & .MuiAvatar-root {
    overflow: hidden;
    border-radius: ${e=>{let{logoUrl:t}=e;return t?"2px":"50%"}};
    ${e=>{let{logoUrl:t}=e;return t?"height: 55px; width: auto; min-width: 55px;":"height: 55px; width: 55px;"}}
  }
`,g=(0,i.f)("div")`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 2px 10px;
  font-size: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
`;e.s(["f",0,e=>{let{avatar:i,editable:b=!0,avatarEditable:j=b,entity:v,entityName:_,linkTitleTo:I,relatedParties:$,onEdit:S,refetch:A}=e,q=(0,u.f)(),[w,C]=(0,r.useState)(null),[k,L]=(0,r.useState)(!1),U=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!m.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),r=(t=t.replace(/^www\./,"")).split("/")[0];return r?.split(":")[0]||null}catch(e){return null}})(e);let r="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!r)return null;let i=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:r});return`https://img.logo.dev/${encodeURIComponent(t)}?${i.toString()}`})(v.website||v.manager?.email),D=$&&$.length>0,M=(0,p.f)(w);(0,r.useEffect)(()=>{i?(C(i),L(!1)):U?(C(U),L(!0)):(C(null),L(!1))},[i,U]);let z=e=>{let[t]=e;q.close(),C(t?.filename||null)};return(0,t.jsx)(x,{children:(0,t.jsxs)(l.f,{px:1.5,direction:"row",children:[(0,t.jsx)(l.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(y,{logoUrl:k,children:[(0,t.jsx)(n.f,{content:v?.name,src:M,onClick:j?()=>{q.show({content:(0,t.jsx)(h.f,{category:"avatar",entity:_,entityId:v?.id,filters:{category:"avatar"},onMediaAdd:z,refetch:A,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:j?"pointer":"default"}}),j&&(0,t.jsx)(g,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(l.f,{pl:1.5,flex:D?1:void 0,minWidth:D?0:void 0,children:[(0,t.jsxs)(s.f,{color:"text.primary",fontSize:17,children:[I?(0,t.jsx)(f.f,{href:I,sx:{color:"secondary.main"},children:v?.name}):v?.name,v?.description&&(v?.descriptionLink?(0,t.jsx)(f.f,{href:v?.descriptionLink,target:"_blank",underline:"none",rel:"noopener noreferrer",children:(0,t.jsx)(s.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:v?.description})}):(0,t.jsx)(s.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:v?.description})),v?.website&&(0,t.jsx)(f.f,{href:v?.website.startsWith("http")?v?.website:`http://${v?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(d.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),D&&(0,t.jsxs)(l.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(s.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(a.f,{component:"span",children:"Related party: "}),$.map((e,r)=>(0,t.jsxs)("span",{children:[r>0&&", ",(0,t.jsx)(f.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),b&&!!S&&(0,t.jsxs)(o.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),b&&!D&&(0,t.jsx)(l.f,{direction:"row",justifyContent:"flex-start",children:!!S&&(0,t.jsxs)(o.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(c.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},394989,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(773831),n=e.i(813843),a=e.i(115871),s=e.i(322135),o=e.i(148310),l=e.i(889231),d=e.i(422411),c=e.i(424894),u=e.i(755548),p=e.i(652148),m=e.i(376733),f=e.i(978319),h=e.i(426778);let x=h.t({name:h.x().required("Name is required"),url:h.x().url().required("URL is required")}),y=e=>{let{noEdit:a=!1,noDelete:o=!1,isAdded:h=!1,id:y,url:g="",name:b="",onSave:j=()=>{},onCancel:v=()=>{},onDelete:_=()=>{}}=e,[I,$]=(0,r.useState)(h),{control:S,handleSubmit:A,errors:q}=(0,d.G)({resolver:(0,c.yupResolver)(x)});return(0,t.jsx)("form",{children:I?(0,t.jsxs)(n.f,{children:[(0,t.jsxs)(n.f,{spacing:1,children:[(0,t.jsx)(d.e,{control:S,name:"name",defaultValue:b,render:e=>(0,t.jsx)(p.f,{fullWidth:!0,label:"Name",variant:"standard",color:"secondary",...e,error:!!q.name,helperText:q.name?.message})}),(0,t.jsx)(d.e,{control:S,name:"url",defaultValue:g,render:e=>(0,t.jsx)(p.f,{fullWidth:!0,label:"Link",variant:"standard",color:"secondary",...e,error:!!q.url,helperText:q.url?.message})})]}),(0,t.jsxs)(n.f,{direction:"row",justifyContent:"flex-end",spacing:1,mt:2,children:[(0,t.jsx)(u.f,{variant:"contained",color:"danger",size:"small",onClick:e=>{e.stopPropagation(),$(!1),v(y)},children:"Cancel"}),(0,t.jsx)(u.f,{variant:"contained",size:"small",onClick:A(e=>{j(e),$(!1)}),children:"Save"})]})]}):(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(l.f,{target:"_blank",variant:"body1",color:"secondary",href:g,sx:{textDecoration:"auto",fontWeight:700},rel:"noopener noreferrer",children:b}),!a&&(0,t.jsx)(s.f,{title:"Edit",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),$(!0)},children:(0,t.jsx)(m.default,{sx:{fontSize:"16px"}})})}),!o&&(0,t.jsx)(s.f,{title:"Delete",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:()=>_(y),children:(0,t.jsx)(f.default,{sx:{fontSize:"16px"}})})})]})})};var g=e.i(594301);let b=[];e.s(["f",0,e=>{let{values:l=b,setValue:d=()=>{},name:c,title:u="Related links",displayMode:p=!1,noDeleteEdit:m=!1,titleSx:f={}}=e,[h,x]=(0,r.useState)([]),{hasRole:j}=(0,g.f)(),v=j("tenant");(0,r.useEffect)(()=>{Array.isArray(l)&&x((l??[]).map(e=>({...e,id:e?.id||Date.now()})))},[l]);let _=e=>{x(t=>t.filter(t=>t.id!==e))};return(0,t.jsxs)(n.f,{children:[(0,t.jsxs)(n.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsxs)(a.f,{sx:f,children:[u,":"]}),!p&&!v&&(0,t.jsx)(s.f,{title:"Add new link",placement:"top-start",children:(0,t.jsx)(i.f,{size:"small",sx:{":hover":{backgroundColor:"#DDDDDD"}},onClick:e=>{e.stopPropagation(),x(e=>[...e,{name:"",url:"",isAdded:!0,noEdit:!1,id:Date.now()}])},children:(0,t.jsx)(o.default,{})})})]}),(0,t.jsx)(n.f,{pl:2,spacing:.8,children:h?.length?h.map(e=>{let t;return(0,r.createElement)(y,{...e,key:e.id,onCancel:_,noEdit:m||p,noDelete:m||p,onDelete:(t=e.id,()=>{if(!c)return;let e=h.filter(e=>e.id!==t);d?.(c,e),x(e)}),onSave:t=>((e,t)=>{if(!c)return;let r=[...h],i=r.findIndex(t=>t.id===e);-1!==i&&r.splice(i,1,{...t,isAdded:!1,id:e}),d?.(c,r)})(e.id,t)})}):(0,t.jsx)(a.f,{typography:"subtitle2",children:"No data"})})]})}],394989)},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,r)=>{if(!r)return null;let i=(0,t.default)(r);if(!i.isValid())return null;let n=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),a=i.clone().add(n,"minutes");return{start:i.toISOString(),end:a.toISOString()}}])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let r=t?.medium?.meta?.thumbnails,i=r?.find?.(e=>"small"===e.name);return i?.relativePath||t.medium.filename||null}])},353069,e=>{var t=e.i(159080);let r=t.f`
  query GetSuppliersForAssign($jobId: Int!) {
    data: getSuppliersForAssign(jobId: $jobId) {
      job
      customerRates
      suppliers
      hasArea
      hasActiveOffer
    }
  }
`,i=t.f`
  mutation AcceptJob($object: AcceptJobOfferInput!) {
    acceptJobOffer(acceptOfferInput: $object) {
      data
      success
    }
  }
`;e.s(["J",0,i,"z",0,r])},382461,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(514707),n=e.i(691567),a=e.i(668921),s=e.i(231637),o=e.i(901004),l=e.i(539117),d=e.i(471973),c=e.i(813843),u=e.i(115871),p=e.i(738251),m=e.i(800884),f=e.i(799083),h=e.i(544005);let x={text:e=>{let{option:t,multiple:r,index:i}=e;return r&&i>0?`, ${t.label}`:t.label},textWithIcon:e=>{let{option:r}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r.icon,(0,t.jsxs)(u.f,{children:[" ",r.label]})]})},chip:e=>{let{chipProps:t,option:i}=e;return(0,r.createElement)(m.f,{...t,key:i.value,label:i.label,icon:i.icon,sx:{color:i.color,bgcolor:i.bgcolor}})}},y={text:e=>{let{option:t}=e;return t.label},textWithIcon:e=>{let{option:r}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[r.icon,(0,t.jsxs)(u.f,{children:[" ",r.label]})]})},chip:e=>{let{chipProps:t,option:i}=e;return(0,r.createElement)(m.f,{...t,key:i.value,label:i.label,icon:i.icon,sx:{color:i.color,bgcolor:i.bgcolor}})},checkbox:e=>{let{option:r,value:i}=e;return(0,t.jsxs)(c.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(f.f,{color:"secondary",sx:{height:"10px"},checked:i.indexOf(r.value)>-1}),(0,t.jsxs)(u.f,{children:[" ",r.label]})]})}},g={label:"",onChange:()=>{},leftSideLabel:!1,options:[],inputComponent:"text",selectComponent:"text",withoutSelectIcon:!1,formControl:{error:!1,helperText:""},chipProps:{size:"small"},selectProps:{}},b=e=>{let{label:r,value:i,onChange:n,leftSideLabel:a,options:s,inputComponent:c,selectComponent:m,withoutSelectIcon:f,formControl:b,chipProps:_,selectProps:I}=(0,h.f)(e,g),$=e=>s.find(t=>t.value===e);return(0,t.jsxs)(j,{...b,leftSideLabel:a,withoutSelectIcon:f,children:[r&&a&&(0,t.jsx)(u.f,{children:r}),r&&!a&&(0,t.jsx)(v,{shrink:""!==i&&void 0!==i,children:r}),(0,t.jsx)(l.f,{displayEmpty:!0,...I,value:i,onChange:n,inputProps:{shrink:!0},renderValue:()=>{if(Array.isArray(i))return(0,t.jsx)(p.f,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:i.map((e,t)=>{let r=$(e);return r?x[c]({chipProps:_,option:r,multiple:!0,index:t}):""})});let e=$(i);return e?(0,t.jsx)(p.f,{children:x[c]({chipProps:_,option:e})}):""},children:s.map(e=>(0,t.jsx)(o.f,{value:e.value,children:y[m]({chipProps:_,option:e,value:i})},e.value))}),b?.helperText&&(0,t.jsx)(d.f,{children:b.helperText})]})};b.propTypes={label:n.default.string,value:n.default.oneOfType([n.default.string,n.default.array]),onChange:n.default.func,leftSideLabel:n.default.bool,options:n.default.arrayOf(n.default.shape({label:n.default.string,value:n.default.string.isRequired,color:n.default.string,bgcolor:n.default.string,icon:n.default.node}).isRequired),inputComponent:n.default.oneOf(["text","textWithIcon","chip"]),selectComponent:n.default.oneOf(["text","textWithIcon","chip","checkbox"]),withoutSelectIcon:n.default.bool,formControl:n.default.object,chipProps:n.default.object,selectProps:n.default.object};let j=(0,i.f)(a.f)(e=>{let{theme:t,leftSideLabel:r,withoutSelectIcon:i}=e;return{"&.MuiFormControl-root":{display:"flex",flexDirection:"column",alignItems:"flex-start",...r&&{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}},"& .MuiSelect-icon":{...i&&{display:"none"}}}}),v=(0,i.f)(s.f)(e=>{let{theme:t}=e;return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:t.palette.secondary.main}}});e.s(["f",0,b])},374979,e=>{var t=e.i(159080);let r=t.f`
  query GetSuppliers(
    $limit: Int
    $offset: Int
    $orderBy: Account_order_by!
    $where: Account_bool_exp
    $now: timestamptz
    $withMetrics: Boolean = false
  ) {
    suppliers: Account(limit: $limit, offset: $offset, where: $where, order_by: [$orderBy]) {
      id
      createdAt
      name
      status
      companyNumber
      vatId
      website
      jobs: SupplierJobs_aggregate {
        aggregate {
          count
          max {
            scheduledAt
          }
          sum {
            amount
          }
        }
      }
      jobList: SupplierJobs(order_by: { createdAt: desc }) {
        id
      }
      services: Services(where: { entity: { _eq: "Account" } }) {
        id
        service: Service {
          id
          name
        }
      }
      addresses: Addresses(where: { entity: { _eq: "Account" } }) {
        id
        registered
        operating
        trading
        invoice
        status
        createdAt
        address: Address {
          id
          name
          addressLine1
          addressLine2
          addressLine3
          city
          county
          geo
          postCode
          country: Country {
            id
            name
          }
        }
      }
      listMetrics: AccountListMetrics @include(if: $withMetrics) {
        supplierTotal12mNet
        supplierTotal12mGross
        invoicesOutstanding
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
        id
        role
        position
        isContact
        lastSignInAt
        userId
        user: User {
          id
          name: nameFirst
          nameFirst
          nameLast
          phone
          status
          email
          createdAt
          fullName
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
      usersAggregate: Account_Users_aggregate {
        aggregate {
          count
        }
      }
      quotesAggregate: SupplierQuotes_aggregate(
        where: {
          type: { _eq: "quote" }
          status: {
            _in: [
              "supplierQuoteRequested"
              "supplierQuoteComplete"
              "supplierQuoteDraft"
              "waitingThresholdApproval"
            ]
          }
        }
      ) {
        aggregate {
          count
        }
      }
      invoicesAggregate: AccountEntries_aggregate(
        where: { type: { _in: ["invoice", "proformaInvoice", "supplierPpmInvoice"] } }
      ) {
        aggregate {
          count
        }
      }
      nextJob: SupplierJobs_aggregate(
        where: {
          type: { _in: ["reactive", "ppm"] }
          status: { _neq: "canceled" }
          timingStart: { _gte: $now }
        }
      ) {
        aggregate {
          min {
            timingStart
          }
        }
      }
    }
    meta: Account_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
`,i=t.f`
  query GetSupplier($id: Int!) {
    supplier: Account_by_pk(id: $id) {
      id
      companyNumber
      createdAt
      name
      status
      type
      updatedAt
      website
      clientType
      managerId
      vatId
      meta
      statusLogs: StatusLog(where: { entity: { _eq: "Account" } }) {
        id
        status
        createdAt
      }
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
      manager: Manager {
        id
        fullName
      }
      addresses: Addresses(where: { entity: { _eq: "Account" } }) {
        id
        registered
        operating
        trading
        invoice
        status
        createdAt
        address: Address {
          id
          name
          addressLine1
          addressLine2
          addressLine3
          city
          county
          geo
          postCode
          country: Country {
            id
            name
          }
        }
      }

      details: SupplierDetail {
        cisRegistered
        quotingEmail
        typeOfOrganisation
        utrNumber
        accountId
      }

      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
        role
        position
        isContact
        lastSignInAt
        userId
        user: User {
          id
          name: nameFirst
          nameFirst
          nameLast
          phone
          status
          email
          createdAt
          fullName
        }
      }
      usersMeta: Account_Users_aggregate {
        aggregate {
          count
        }
      }

      coverage: PostcodeAreas(where: { entity: { _eq: "Account" }, status: { _eq: "active" } }) {
        id
        status
        createdAt
        area: PostcodeArea {
          id
          name
          area
        }
      }
      services: Services {
        serviceId
        createdAt
      }
      references: References {
        id
        createdAt
      }
    }
  }
`,n=t.f`
  query GetSupplierManage($id: Int!) {
    supplier: Account_by_pk(id: $id) {
      id
      name
      website
      companyNumber
      vatId
      status
      meta
      managerSelected: Manager {
        id
        label: fullName
        value: id
      }
      supplierDetails: SupplierDetail {
        id
        cisRegistered
        quotingEmail
        typeOfOrganisation
        utrNumber
      }
    }
  }
`,a=t.f`
  mutation AddSupplier($objects: [Account_insert_input!]!) {
    insert_Account(objects: $objects) {
      returning {
        id
      }
    }
  }
`;t.f`
  mutation AddSupplierDetail($objects: [SupplierDetail_insert_input!]!) {
    insert_SupplierDetail(objects: $objects) {
      returning {
        id
        accountId
      }
    }
  }
`,t.f`
  mutation AddSupplierOffer($objects: [SupplierOffer_insert_input!]!) {
    insert_SupplierOffer(objects: $objects) {
      returning {
        id
      }
    }
  }
`;let s=t.f`
  query GetPostCodeAreas(
    $limit: Int
    $offset: Int
    $q: String
    $supplierId: Int
    $status: String = "active"
  ) {
    coverage: PostcodeArea_Entity(
      where: {
        entity: { _eq: "Account" }
        entityId: { _eq: $supplierId }
        status: { _eq: $status }
        PostcodeArea: { name: { _ilike: $q } }
      }
      order_by: { PostcodeArea: { name: asc } }
      limit: $limit
      offset: $offset
    ) {
      id
      status
      createdAt
      area: PostcodeArea {
        id
        name
        area
      }
    }
    meta: PostcodeArea_Entity_aggregate(
      where: {
        entity: { _eq: "Account" }
        entityId: { _eq: $supplierId }
        status: { _eq: $status }
        PostcodeArea: { name: { _ilike: $q } }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,o=t.f`
  query GetPostCodeAreaForSelect($countryId: Int, $q: String, $limit: Int, $offset: Int) {
    items: PostcodeArea(
      where: { name: { _ilike: $q }, countryId: { _eq: $countryId } }
      order_by: { name: asc }
      limit: $limit
      offset: $offset
    ) {
      area
      label: name
      value: id
    }
  }
`,l=t.f`
  query GetServicesForSelect($q: String, $limit: Int, $offset: Int) {
    items: Service(
      where: { name: { _ilike: $q }, status: { _eq: "active" } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
    }
  }
`;t.f`
  query GetFinancialJob(
    $adminId: Int
    $customerId: Int
    $endDate: timestamptz
    $startDate: timestamptz
    $limit: Int
    $status: [String]
    $managerId: Int
    $locationId: Int
    $offset: Int
    $supplierId: Int
    $q: String
    $orderBy: Job_order_by!
  ) {
    jobs: Job(
      limit: $limit
      offset: $offset
      where: {
        type: { _in: ["reactive", "ppm"] }
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { number: { _ilike: $q } }
              { Invoices: { invoiceNumber: { _ilike: $q } } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        managerId: { _eq: $managerId }
        adminId: { _eq: $adminId }
        locationId: { _eq: $locationId }
      }
      order_by: [$orderBy]
    ) {
      id
      type
      number
      status
      description
      reference
      timingStart
      scheduledAt
      createdAt

      customerTotal: customerFinances(path: "amountInfo.total")
      supplierTotal: supplierFinances(path: "amountInfo.total")
      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")
      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")
      customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")
      supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")
      customerRebateAmount: customerFinances(path: "rebate.amount")

      slaId
      invoices: Invoices(order_by: { createdAt: desc }) {
        invoiceNumber
      }
      customer: Customer {
        id
        name
      }
      supplier: Supplier {
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
      sla: SLA {
        name
      }
      manager: Manager {
        fullName
        nameLast
        nameFirst
        id
      }
      service: Service {
        id
        name
      }
    }
    meta: Job_aggregate(
      where: {
        type: { _in: ["reactive", "ppm"] }
        _and: [
          {
            _or: [
              { reference: { _ilike: $q } }
              { title: { _ilike: $q } }
              { number: { _ilike: $q } }
              { number: { _ilike: $q } }
              { Invoices: { invoiceNumber: { _ilike: $q } } }
            ]
          }
          {
            _or: [
              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }
              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }
            ]
          }
        ]
        status: { _in: $status }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        managerId: { _eq: $managerId }
        adminId: { _eq: $adminId }
        locationId: { _eq: $locationId }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,e.s(["W",0,a,"q",0,o,"Z",0,l,"C",0,i,"o",0,r,"d",0,s,"Y",0,n])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},228526,e=>{e.s(["G",0,[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}],"h",0,[{label:"Sole trader",value:"soleTrader"},{label:"Limited company",value:"limitedCompany"},{label:"Partnership",value:"partnership"},{label:"LLP",value:"llp"},{label:"PLC",value:"plc"}]])},63886,e=>{e.s(["f",()=>j],63886);var t=e.i(391398),r=e.i(871931),i=e.i(760981),n=e.i(302966),a=e.i(482384),s=e.i(795617),o=e.i(362407),l=e.i(411331),d=e.i(280445),c=e.i(760814),u=e.i(489129);let p=e=>{let{propertyId:r,propertyName:i}=e,n=(0,l.f)();return(0,t.jsx)(m,{onClick:()=>{n.show({title:"Property information",content:(0,t.jsx)(u.f,{propertyId:r,toggleShow:n.close})})},children:i})},m=c.U.a.withConfig({displayName:"property-link__StyledLink",componentId:"sc-d818312b-0"})`
  cursor: pointer;
  text-decoration: none;
`;var f=e.i(115871),h=e.i(747112),x=e.i(813843),y=e.i(740790),g=e.i(773831),b=e.i(376733);let j=e=>{let{access:r,address:a,edit:d=!1,entity:c,entityId:u,id:m,name:j,refetch:I,showMap:$=!1,showLink:S=!0,title:A="Address",type:q}=e,w=(0,l.f)(),C=e=>{e&&I&&I()},k=(0,s.D)(a);return(0,t.jsxs)(_,{defaultExpanded:!0,children:[(0,t.jsx)(n.f,{expandIcon:(0,t.jsx)(h.f,{}),children:(0,t.jsxs)(x.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(f.f,{typography:"h6",children:A}),d&&(0,t.jsx)(g.f,{onClick:e=>{e.stopPropagation(),w.show({content:(0,t.jsx)(o.f,{entity:c,entityId:u,id:m,onSubmit:C,addressId:a.id,type:q}),submit:!1,title:"Manage addresses"})},size:"small",children:(0,t.jsx)(b.default,{sx:{height:"17px",width:"17px"}})})]})}),(0,t.jsx)(i.f,{sx:{pt:0},children:(0,t.jsxs)(y.f,{container:!0,children:[(0,t.jsxs)(y.f,{item:!0,xs:6,children:[j&&(0,t.jsxs)(x.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",children:"Property"}),(0,t.jsx)(f.f,{variant:"body2",children:S?(0,t.jsx)(p,{propertyId:u,propertyName:j}):j})]}),"invoice"===q&&a.invoicingEntity&&(0,t.jsxs)(x.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",children:"Invoicing Entity"}),(0,t.jsx)(f.f,{variant:"body2",children:a.invoicingEntity})]}),a.name&&"invoice"!==q&&(0,t.jsxs)(x.f,{mb:1,children:[(0,t.jsx)(f.f,{color:"text.secondary",children:"Name"}),(0,t.jsx)(f.f,{variant:"body2",children:a.name})]}),(0,t.jsx)(f.f,{color:"text.secondary",children:"Address"}),(0,t.jsx)(f.f,{variant:"body2",sx:{mb:.5},children:a.addressLine1}),a.addressLine2&&(0,t.jsx)(f.f,{variant:"body2",sx:{mb:.5},children:a.addressLine2}),a.addressLine3&&(0,t.jsx)(f.f,{variant:"body2",sx:{mb:.5},children:a.addressLine3}),(0,t.jsx)(f.f,{variant:"body2",sx:{mb:.5},children:a.city}),(0,t.jsx)(f.f,{variant:"body2",sx:{mb:.5},children:a.postCode}),(0,t.jsx)(f.f,{variant:"body2",sx:{mb:.5},children:a.county}),r&&(0,t.jsxs)(x.f,{spacing:.5,children:[(0,t.jsx)(f.f,{variant:"subtitle2",children:"Access"}),(0,t.jsx)(f.f,{variant:"body2",children:r})]})]}),(0,t.jsx)(y.f,{item:!0,xs:6,children:$&&(0,t.jsx)(v,{center:k,location:k,markers:[k],style:{width:"100%",height:"auto"}})})]})})]})},v=(0,d.f)(a.f)(e=>{let{theme:t}=e;return{display:"block",maxWidth:"250px",width:"100%",height:"auto",marginLeft:"4px",border:`1px solid ${t.palette.secondary.main}`,borderRadius:"10px"}}),_=(0,d.f)(r.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`},127342,e=>{var t=e.i(191788),r=e.i(511667),i=e.i(21557);e.s(["f",0,e=>{let n=(0,i.f)(),[a,{isLoading:s}]=(0,r.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{n.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return a({body:t,pathParams:{offerId:e}})},[a,e]),isLoading:s}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,r=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let r=t.timeHold;if(!r?.scheduledAt)return null;let i=Number(r.supplierUserId);return Number.isFinite(i)?{...r,supplierUserId:i}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let r=Number(e.heldSupplierUserId);if(Number.isFinite(r))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:r,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return r(e.meta)}return r(e)}])},489129,e=>{e.s(["f",()=>m]);var t=e.i(391398),r=e.i(191788),i=e.i(432171),n=e.i(203828),a=e.i(553875),s=e.i(76381),o=e.i(436703),l=e.i(847474),d=e.i(946894),c=e.i(443919),u=e.i(757157),p=e.i(63886);let m=e=>{let{propertyId:m,toggleShow:f}=e,h=(0,n.useRouter)();(0,r.useEffect)(()=>{let e=()=>{f()};return h.events.on("routeChangeComplete",e),()=>{h.events.off("routeChangeComplete",e)}},[h.events,f]);let{loading:x,data:{location:y}={location:null}}=(0,i.t)(d.f,{variables:{id:m}}),g=(0,r.useMemo)(()=>y?.customer.find(e=>"primary"===e.linkType)?.account,[y]),b=(0,l.w)(y,"registered"),j=(0,l.w)(y,"invoice"),v=(0,r.useMemo)(()=>({accountName:g?.name,country:b?.address?.country?.name,createdAt:y?.createdAt,fullName:y?.user?.fullName,phone:y?.user?.phone}),[g?.name,y,b]);return x?(0,t.jsx)(a.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(s.f,{color:"secondary"})}):y?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{avatar:(0,o.f)(g?.media),editable:!1,entity:{id:y.id,description:g?.name,name:y.name},entityName:"Location",linkTitleTo:`/dashboard/properties/view?id=${y.id}`}),(0,t.jsx)(u.f,{contactUser:v}),b&&(0,t.jsx)(p.f,{address:b.address,edit:!1,entity:"Location",entityId:y.id,id:b.id,showMap:!0,title:"Address",type:"registered"}),j&&(0,t.jsx)(p.f,{address:j.address,edit:!1,entity:"Location",entityId:y.id,id:j.id,title:"Invoice address",type:"invoice"})]}):null}},946894,757157,e=>{var t=e.i(159080);let r=t.f`
  query GetProperty($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      createdAt
      name
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        id
        registered
        invoice
        address: Address {
          id
          name
          addressLine1
          addressLine2
          addressLine3
          city
          county
          geo
          postCode
          country: Country {
            id
            name
            code
          }
        }
      }
      customer: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          name
          media: Media {
            id
            medium: Medium {
              id
              category
              filename
              meta
            }
          }
        }
      }
      user: User {
        id
        fullName
        phone
      }
    }
  }
`;e.s(["f",0,r],946894);var i=e.i(391398),n=e.i(871931),a=e.i(760981),s=e.i(302966),o=e.i(280445),l=e.i(115871),d=e.i(747112),c=e.i(813843),u=e.i(740790),p=e.i(65295);let m=(0,o.f)(n.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{contactUser:t}=e;return(0,i.jsxs)(m,{defaultExpanded:!0,children:[(0,i.jsx)(s.f,{expandIcon:(0,i.jsx)(d.f,{}),children:(0,i.jsx)(c.f,{direction:"row",alignItems:"center",spacing:1,children:(0,i.jsx)(l.f,{typography:"h6",children:"Contact"})})}),(0,i.jsx)(a.f,{sx:{pt:0},children:(0,i.jsxs)(u.f,{container:!0,spacing:1,children:[(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Account"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.accountName||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Name"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.fullName||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Position"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.position||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Phone number"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.phone||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Country"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.country||"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Date added"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.createdAt?(0,p.f)(t?.createdAt):"Not Specified"})]}),(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Permits required"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.permitsRequired?"Yes":"No"})]}),t?.xeroContactId&&(0,i.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,i.jsx)(l.f,{color:"text.secondary",children:"Xero contact ID"}),(0,i.jsx)(l.f,{color:"text.primary",children:t?.xeroContactId})]})]})})]})}],757157)},185863,e=>{let t=[{label:"Up to",value:"upTo"},{label:"Approximately",value:"approximately"},{label:"Exactly",value:"exactly"}],r=[{label:"Day",value:"day"},{label:"Working day",value:"workingDay"},{label:"Week",value:"week"}],i=(e,t)=>1===e?t:`${t}s`;e.s(["o",0,t,"E",0,e=>e.totalDuration&&e.totalDurationUnit?[t.find(t=>t.value===e.durationPrefix)?.label,`${e.totalDuration} ${i(e.totalDuration,e.totalDurationUnit)}`].filter(Boolean).join(" "):null,"d",0,e=>{if(!e.noticePeriod)return null;let t=r.find(t=>t.value===e.noticePeriodUnit)?.label;return t?`${e.noticePeriod} ${i(e.noticePeriod,t.toLowerCase())}`:null},"c",0,r,"w",0,[{label:"Hour",value:"hour"},{label:"Day",value:"day"},{label:"Week",value:"week"}]])},64134,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")},39345,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"}),"ChevronRightRounded")},393172,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"}),"KeyboardArrowDown")},741850,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")},474829,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5 8-5zm-8-7L4 6h16z"}),"MailOutline")},896490,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=i(e.r(421506)),a=e.r(391398);r.default=(0,n.default)((0,a.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")}])})();