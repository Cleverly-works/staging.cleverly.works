(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,913758,e=>{var t=e.i(159080),i=e.i(987123);let r=t.f`
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
        meta: clientMeta
        heldSupplierUserId
        heldScheduledAt
        heldAt
        heldByUserId
      }
    }
  }
  ${i.a}
  ${i.S}
`,a=t.f`
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
`,s=t.f`
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
`,n=t.f`
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
`,o=t.f`
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
      meta: clientMeta
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
`,l=t.f`
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
`,c=t.f`
  query GetBlockEventDetails($id: Int!) {
    event: Holiday_by_pk(id: $id) {
      id
      notes
      meta
      startDate
      endDate
    }
  }
`,u=t.f`
  query GetJobEventDetails($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      access
      costCategory
      description
      quoteDue
      quoteNumber
      id
      number
      meta: clientMeta
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
  ${i.a}
  ${i.S}
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
  ${i.a}
  ${i.S}
`;e.s(["x",0,o,"d",0,l,"o",0,c,"G",0,d,"E",0,a,"u",0,s,"P",0,m,"m",0,r,"U",0,u,"b",0,n])},482384,e=>{var t=e.i(391398),i=e.i(974261),r=e.i(191788);class a{apiKey=i.e.map||"";channel;center;client;format;language;location;maptype;markers;paths;region;rootURL;scale;signature;size;style;visible;zoom;constructor({center:e,channel:t,client:i,format:r="png",language:a,location:s="",maptype:n="roadmap",markers:o=[],paths:d=[],region:l,rootURL:c="https://maps.googleapis.com/maps/api/staticmap",scale:u=1,signature:m,size:p="400x400",style:h,visible:y,zoom:f=15}){this.channel=t,this.center=e,this.client=i,this.format=r,this.language=a,this.location=s,this.maptype=n,this.markers=o,this.paths=d,this.region=l,this.rootURL=c,this.scale=u,this.signature=m,this.size=p,this.style=h,this.visible=y,this.zoom=f}urlBuilder(e,t,i){return t?"object"==typeof t?`${e}${i}${JSON.stringify(t)}`:`${e}${i}${t}`:null}renderBaseMap(){let e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));let t=e.filter(e=>e).join("&");return`${this.rootURL}?${t}`}locationBuilder(e){let t=[];if(Array.isArray(e)){let i=e.map(e=>this.locationBuilder(e));t.push(...i)}return("string"==typeof e||"number"==typeof e)&&t.push(encodeURI(String(e))),"object"==typeof e&&"lat"in e&&"lng"in e&&t.push(`${e.lat},${e.lng}`),t.join("%7C")}renderPath(e){let t=[];if(e.circle){var i;let r=(i=e.circle.latitude,function(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,a=Math.PI,s="",n=e*a/180,o=t*a/180,d=i/1e3/6371;for(let e=0;e<=360;e+=r){let t=e*a/180,i=Math.asin(Math.sin(n)*Math.cos(d)+Math.cos(n)*Math.sin(d)*Math.cos(t)),r=(o+Math.atan2(Math.sin(t)*Math.sin(d)*Math.cos(n),Math.cos(d)-Math.sin(n)*Math.sin(i)))*180/a;s+=function e(t){let i=[];if(Array.isArray(t)){let r=t.map(t=>e(t));i.push(...r)}return("string"==typeof t||"number"==typeof t)&&i.push(String(t)),"object"==typeof t&&"lat"in t&&"lng"in t&&i.push(`${t.lat},${t.lng}`),i.join("%7C")}(180*i/a+","+r)}return encodeURI(s)}(i,e.circle.longitude,e.circle.radius));t.push(this.urlBuilder("",this.locationBuilder(`${r}`),""))}t.push(this.urlBuilder("color",e.color,":")),t.push(this.urlBuilder("weight",e.weight,":")),t.push(this.urlBuilder("fillcolor",e.fillcolor,":")),t.push(this.urlBuilder("geodesic",e.geodesic,":")),e.points&&t.push(this.urlBuilder("",this.locationBuilder(e.points),""));let r=t.filter(e=>e).join("%7C");return`path=${r}`}renderParts(){return this.paths.map(e=>this.renderPath(e))}renderMarkers(){let{markers:e,locationBuilder:t,location:i}=this;return(e.length?e.map(e=>{let i="markers=";switch(typeof e){case"string":i+=t.call(this,e);break;case"object":{let{colour:r,label:a,location:s}=e;i+=(r?`color:${r}|`:"")+(a?`label:${a}|`:"")+(s&&`${t.call(this,s)}|`)}}return i}):[`markers=${t.call(this,i)}`]).join("&")}generateUrl(){let e=this.renderParts()||[],t=this.renderBaseMap(),i=this.renderMarkers();return`${t}&${e}&${i}`}}e.s(["f",0,e=>{let{center:i,channel:s,className:n,client:o,container:d="img",format:l="png",language:c,location:u,maptype:m="roadmap",markers:p,paths:h,region:y,scale:f=1,signature:x,size:g="400x400",style:b,styleMap:_,visible:$,zoom:I=15}=e,[v,q]=g?g.split("x"):["400","400"],[j,S]=(0,r.useState)("");return(0,r.useEffect)(()=>{S(new a({center:i,channel:s,client:o,format:l,language:c,location:u,maptype:m,markers:p,paths:h,region:y,scale:f,signature:x,size:g,style:_,visible:$,zoom:I}).generateUrl())},[i,s,o,l,c,u,m,p,h,y,f,x,g,_,$,I]),(0,t.jsx)(d,{className:n,width:v,height:q,src:j,style:b,alt:"map"})}])},170398,e=>{var t=e.i(391398),i=e.i(813843),r=e.i(115871),a=e.i(191788),s=e.i(280445),n=e.i(64134),o=e.i(39345),d=e.i(451221);let l=(0,s.f)("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,c=(0,s.f)("div")`
  display: flex;
  align-items: center;
`,u=(0,s.f)("span")`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>{let{active:t}=e;return t?"#333":"transparent"}};
  border: 1px solid #333;
  margin: 0 4px;
  display: inline-block;
`;e.s(["f",0,e=>{let{contactUsers:s}=e,[m,p]=(0,a.useState)(0),h=s.length,y=(0,d.f)(),f=(0,a.useMemo)(()=>s[m],[s,m]);return 0===h?null:(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.f,{children:[(0,t.jsx)(r.f,{color:"text.primary",children:"Name"}),(0,t.jsxs)(r.f,{color:"text.primary",children:[f?.user?.nameFirst," ",f?.user?.nameLast]}),(0,t.jsx)(r.f,{color:"text.primary",children:"Phone"}),(0,t.jsx)(r.f,{color:"text.primary",children:f?.user?.phone}),(0,t.jsx)(r.f,{color:"text.primary",children:"Email"}),(0,t.jsx)(r.f,{color:"text.primary",children:f?.user?.email})]}),h>1&&(0,t.jsxs)(l,{children:[(0,t.jsx)(n.default,{onClick:()=>{p(e=>0===e?h-1:e-1)},sx:{color:y.palette.text.primary,cursor:"pointer"}}),(0,t.jsx)(c,{children:(()=>{if(h<=5)return s.map((e,i)=>(0,t.jsx)(u,{active:i===m},i));let e=0,i=m;return m<5?(e=0,i=m):(i=4,h-(e=m-4)<5&&(i=m-(e=h-5))),Array.from({length:5}).map((r,a)=>{let s=e+a;return(0,t.jsx)(u,{active:a===i},s)})})()}),(0,t.jsx)(o.default,{onClick:()=>{p(e=>e===h-1?0:e+1)},sx:{color:y.palette.text.primary,cursor:"pointer"}})]})]})}])},136006,673805,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(115871),a=e.i(170398);let s=(0,i.f)("div")`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 1.25rem;
`;e.s(["f",0,e=>{let{contactUsers:i=[]}=e;return(0,t.jsxs)(s,{children:[(0,t.jsx)(r.f,{variant:"h6",color:"text.primary",mb:1,children:"Contacts"}),(0,t.jsx)(a.f,{contactUsers:i})]})}],136006);var n=e.i(871931),o=e.i(760981),d=e.i(302966),l=e.i(813843),c=e.i(747112),u=e.i(228526);let m=(0,i.f)(n.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{profile:i}=e;return i?.companyNumber||i?.vatId||i?.meta?.xeroContactId||i?.clientType?.name||i?.details?.typeOfOrganisation||i?.details?.utrNumber||i?.details?.cisRegistered||i?.details?.quotingEmail||i?.website?(0,t.jsxs)(m,{defaultExpanded:!0,children:[(0,t.jsx)(d.f,{expandIcon:(0,t.jsx)(c.f,{}),children:(0,t.jsx)(r.f,{typography:"h6",children:"Company"})}),(0,t.jsx)(o.f,{sx:{pt:0},children:(0,t.jsxs)(l.f,{spacing:2,sx:{width:"100%"},children:[i?.companyNumber&&i?.type!=="customer"&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Organisation type"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:u.G.find(e=>e.value===i?.details?.typeOfOrganisation)?.text||"N/A"})]}),i?.companyNumber&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Company number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.companyNumber})]}),i?.vatId&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"VAT number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.vatId})]}),i?.details?.utrNumber&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"UTR number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.details?.utrNumber})]}),i?.details?.cisRegistered&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"CIS registration number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.details?.cisRegistered})]}),i?.clientType?.name&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Customer type"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i.clientType.name})]}),i?.details?.quotingEmail&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Quoting email"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i.details.quotingEmail})]}),i?.meta?.xeroContactId&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Xero contact ID"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.meta?.xeroContactId})]}),i?.website&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Website"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.website})]})]})})]}):null}],673805)},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,i)=>{if(!i)return null;let r=(0,t.default)(i);if(!r.isValid())return null;let a=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),s=r.clone().add(a,"minutes");return{start:r.toISOString(),end:s.toISOString()}}])},353069,e=>{var t=e.i(159080);let i=t.f`
  query GetSuppliersForAssign($jobId: Int!) {
    data: getSuppliersForAssign(jobId: $jobId) {
      job
      customerRates
      suppliers
      hasArea
      hasActiveOffer
    }
  }
`,r=t.f`
  mutation AcceptJob($object: AcceptJobOfferInput!) {
    acceptJobOffer(acceptOfferInput: $object) {
      data
      success
    }
  }
`;e.s(["J",0,r,"z",0,i])},374979,e=>{var t=e.i(159080);let i=t.f`
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
      services: ServiceSchedule(
        where: { entity: { _eq: "Supplier" }, status: { _eq: "active" } }
        distinct_on: serviceId
        order_by: { serviceId: asc }
      ) {
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
`,r=t.f`
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
      services: ServiceSchedule(
        where: { entity: { _eq: "Supplier" } }
        order_by: { createdAt: asc }
        limit: 1
      ) {
        serviceId
        createdAt
      }
    }
    compliance: Compliance(
      where: { supplierId: { _eq: $id } }
      order_by: { createdAt: asc }
      limit: 1
    ) {
      id
      createdAt
    }
  }
`,a=t.f`
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
`;t.f`
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
`,n=t.f`
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
`,o=t.f`
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
`,e.s(["q",0,n,"Z",0,o,"C",0,r,"o",0,i,"d",0,s,"Y",0,a])},865568,e=>{var t=e.i(159080);let i=t.f`
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
`,r=t.f`
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
`,e.s(["N",0,i,"g",0,r])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},228526,e=>{e.s(["G",0,[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}],"h",0,[{label:"Sole trader",value:"soleTrader"},{label:"Limited company",value:"limitedCompany"},{label:"Partnership",value:"partnership"},{label:"LLP",value:"llp"},{label:"PLC",value:"plc"}]])},63886,e=>{e.s(["f",()=>_],63886);var t=e.i(391398),i=e.i(871931),r=e.i(760981),a=e.i(302966),s=e.i(482384),n=e.i(795617),o=e.i(362407),d=e.i(411331),l=e.i(280445),c=e.i(760814),u=e.i(489129);let m=e=>{let{propertyId:i,propertyName:r}=e,a=(0,d.f)();return(0,t.jsx)(p,{onClick:()=>{a.show({title:"Property information",content:(0,t.jsx)(u.f,{propertyId:i,toggleShow:a.close})})},children:r})},p=c.U.a.withConfig({displayName:"property-link__StyledLink",componentId:"sc-d818312b-0"})`
  cursor: pointer;
  text-decoration: none;
`;var h=e.i(115871),y=e.i(747112),f=e.i(813843),x=e.i(740790),g=e.i(773831),b=e.i(376733);let _=e=>{let{access:i,address:s,edit:l=!1,entity:c,entityId:u,id:p,name:_,refetch:v,showMap:q=!1,showLink:j=!0,title:S="Address",type:A}=e,w=(0,d.f)(),C=e=>{e&&v&&v()},U=(0,n.D)(s);return(0,t.jsxs)(I,{defaultExpanded:!0,children:[(0,t.jsx)(a.f,{expandIcon:(0,t.jsx)(y.f,{}),children:(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(h.f,{typography:"h6",children:S}),l&&(0,t.jsx)(g.f,{onClick:e=>{e.stopPropagation(),w.show({content:(0,t.jsx)(o.f,{entity:c,entityId:u,id:p,onSubmit:C,addressId:s.id,type:A}),submit:!1,title:"Manage addresses"})},size:"small",children:(0,t.jsx)(b.default,{sx:{height:"17px",width:"17px"}})})]})}),(0,t.jsx)(r.f,{sx:{pt:0},children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:6,children:[_&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Property"}),(0,t.jsx)(h.f,{variant:"body2",children:j?(0,t.jsx)(m,{propertyId:u,propertyName:_}):_})]}),"invoice"===A&&s.invoicingEntity&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Invoicing Entity"}),(0,t.jsx)(h.f,{variant:"body2",children:s.invoicingEntity})]}),s.name&&"invoice"!==A&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Name"}),(0,t.jsx)(h.f,{variant:"body2",children:s.name})]}),(0,t.jsx)(h.f,{color:"text.secondary",children:"Address"}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:s.addressLine1}),s.addressLine2&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:s.addressLine2}),s.addressLine3&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:s.addressLine3}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:s.city}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:s.postCode}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:s.county}),i&&(0,t.jsxs)(f.f,{spacing:.5,children:[(0,t.jsx)(h.f,{variant:"subtitle2",children:"Access"}),(0,t.jsx)(h.f,{variant:"body2",children:i})]})]}),(0,t.jsx)(x.f,{item:!0,xs:6,children:q&&(0,t.jsx)($,{center:U,location:U,markers:[U],style:{width:"100%",height:"auto"}})})]})})]})},$=(0,l.f)(s.f)(e=>{let{theme:t}=e;return{display:"block",maxWidth:"250px",width:"100%",height:"auto",marginLeft:"4px",border:`1px solid ${t.palette.secondary.main}`,borderRadius:"10px"}}),I=(0,l.f)(i.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`},127342,e=>{var t=e.i(191788),i=e.i(511667),r=e.i(21557);e.s(["f",0,e=>{let a=(0,r.f)(),[s,{isLoading:n}]=(0,i.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{a.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return s({body:t,pathParams:{offerId:e}})},[s,e]),isLoading:n}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,i=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let i=t.timeHold;if(!i?.scheduledAt)return null;let r=Number(i.supplierUserId);return Number.isFinite(r)?{...i,supplierUserId:r}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let i=Number(e.heldSupplierUserId);if(Number.isFinite(i))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:i,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return i(e.meta)}return i(e)}])},489129,e=>{e.s(["f",()=>p]);var t=e.i(391398),i=e.i(191788),r=e.i(432171),a=e.i(203828),s=e.i(553875),n=e.i(76381),o=e.i(436703),d=e.i(847474),l=e.i(946894),c=e.i(443919),u=e.i(757157),m=e.i(63886);let p=e=>{let{propertyId:p,toggleShow:h}=e,y=(0,a.useRouter)();(0,i.useEffect)(()=>{let e=()=>{h()};return y.events.on("routeChangeComplete",e),()=>{y.events.off("routeChangeComplete",e)}},[y.events,h]);let{loading:f,data:{location:x}={location:null}}=(0,r.t)(l.f,{variables:{id:p}}),g=(0,i.useMemo)(()=>x?.customer.find(e=>"primary"===e.linkType)?.account,[x]),b=(0,d.w)(x,"registered"),_=(0,d.w)(x,"invoice"),$=(0,i.useMemo)(()=>({accountName:g?.name,country:b?.address?.country?.name,createdAt:x?.createdAt,fullName:x?.user?.fullName,phone:x?.user?.phone}),[g?.name,x,b]);return f?(0,t.jsx)(s.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(n.f,{color:"secondary"})}):x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{avatar:(0,o.f)(g?.media),editable:!1,entity:{id:x.id,description:g?.name,name:x.name},entityName:"Location",linkTitleTo:`/dashboard/properties/view?id=${x.id}`}),(0,t.jsx)(u.f,{contactUser:$}),b&&(0,t.jsx)(m.f,{address:b.address,edit:!1,entity:"Location",entityId:x.id,id:b.id,showMap:!0,title:"Address",type:"registered"}),_&&(0,t.jsx)(m.f,{address:_.address,edit:!1,entity:"Location",entityId:x.id,id:_.id,title:"Invoice address",type:"invoice"})]}):null}},946894,757157,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["f",0,i],946894);var r=e.i(391398),a=e.i(871931),s=e.i(760981),n=e.i(302966),o=e.i(280445),d=e.i(115871),l=e.i(747112),c=e.i(813843),u=e.i(740790),m=e.i(65295);let p=(0,o.f)(a.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{contactUser:t}=e;return(0,r.jsxs)(p,{defaultExpanded:!0,children:[(0,r.jsx)(n.f,{expandIcon:(0,r.jsx)(l.f,{}),children:(0,r.jsx)(c.f,{direction:"row",alignItems:"center",spacing:1,children:(0,r.jsx)(d.f,{typography:"h6",children:"Contact"})})}),(0,r.jsx)(s.f,{sx:{pt:0},children:(0,r.jsxs)(u.f,{container:!0,spacing:1,children:[(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Account"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.accountName||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Name"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.fullName||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Position"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.position||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Phone number"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.phone||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Country"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.country||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Date added"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.createdAt?(0,m.f)(t?.createdAt):"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Permits required"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.permitsRequired?"Yes":"No"})]}),t?.xeroContactId&&(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Xero contact ID"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.xeroContactId})]})]})})]})}],757157)},185863,e=>{let t=[{label:"Up to",value:"upTo"},{label:"Approximately",value:"approximately"},{label:"Exactly",value:"exactly"}],i=[{label:"Day",value:"day"},{label:"Working day",value:"workingDay"},{label:"Week",value:"week"}],r=(e,t)=>1===e?t:`${t}s`;e.s(["o",0,t,"E",0,e=>e.totalDuration&&e.totalDurationUnit?[t.find(t=>t.value===e.durationPrefix)?.label,`${e.totalDuration} ${r(e.totalDuration,e.totalDurationUnit)}`].filter(Boolean).join(" "):null,"d",0,e=>{if(!e.noticePeriod)return null;let t=i.find(t=>t.value===e.noticePeriodUnit)?.label;return t?`${e.noticePeriod} ${r(e.noticePeriod,t.toLowerCase())}`:null},"c",0,i,"w",0,[{label:"Hour",value:"hour"},{label:"Day",value:"day"},{label:"Week",value:"week"}]])},64134,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),s=e.r(391398);i.default=(0,a.default)((0,s.jsx)("path",{d:"M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")},39345,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=r(e.r(421506)),s=e.r(391398);i.default=(0,a.default)((0,s.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"}),"ChevronRightRounded")}])})();