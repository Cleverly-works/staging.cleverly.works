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
        meta
        heldSupplierUserId
        heldScheduledAt
        heldAt
        heldByUserId
      }
    }
  }
  ${i.a}
  ${i.S}
`,s=t.f`
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
`,n=t.f`
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
`,a=t.f`
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
`,d=t.f`
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
`,l=t.f`
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
`,m=t.f`
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
  ${i.a}
  ${i.S}
`,p=t.f`
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
`;e.s(["x",0,d,"d",0,c,"o",0,u,"G",0,l,"E",0,s,"u",0,n,"P",0,p,"m",0,r,"U",0,m,"b",0,o,"T",0,a])},482384,e=>{var t=e.i(391398),i=e.i(974261),r=e.i(191788);class s{apiKey=i.e.map||"";channel;center;client;format;language;location;maptype;markers;paths;region;rootURL;scale;signature;size;style;visible;zoom;constructor({center:e,channel:t,client:i,format:r="png",language:s,location:n="",maptype:a="roadmap",markers:o=[],paths:d=[],region:l,rootURL:c="https://maps.googleapis.com/maps/api/staticmap",scale:u=1,signature:m,size:p="400x400",style:h,visible:f,zoom:y=15}){this.channel=t,this.center=e,this.client=i,this.format=r,this.language=s,this.location=n,this.maptype=a,this.markers=o,this.paths=d,this.region=l,this.rootURL=c,this.scale=u,this.signature=m,this.size=p,this.style=h,this.visible=f,this.zoom=y}urlBuilder(e,t,i){return t?"object"==typeof t?`${e}${i}${JSON.stringify(t)}`:`${e}${i}${t}`:null}renderBaseMap(){let e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));let t=e.filter(e=>e).join("&");return`${this.rootURL}?${t}`}locationBuilder(e){let t=[];if(Array.isArray(e)){let i=e.map(e=>this.locationBuilder(e));t.push(...i)}return("string"==typeof e||"number"==typeof e)&&t.push(encodeURI(String(e))),"object"==typeof e&&"lat"in e&&"lng"in e&&t.push(`${e.lat},${e.lng}`),t.join("%7C")}renderPath(e){let t=[];if(e.circle){var i;let r=(i=e.circle.latitude,function(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,s=Math.PI,n="",a=e*s/180,o=t*s/180,d=i/1e3/6371;for(let e=0;e<=360;e+=r){let t=e*s/180,i=Math.asin(Math.sin(a)*Math.cos(d)+Math.cos(a)*Math.sin(d)*Math.cos(t)),r=(o+Math.atan2(Math.sin(t)*Math.sin(d)*Math.cos(a),Math.cos(d)-Math.sin(a)*Math.sin(i)))*180/s;n+=function e(t){let i=[];if(Array.isArray(t)){let r=t.map(t=>e(t));i.push(...r)}return("string"==typeof t||"number"==typeof t)&&i.push(String(t)),"object"==typeof t&&"lat"in t&&"lng"in t&&i.push(`${t.lat},${t.lng}`),i.join("%7C")}(180*i/s+","+r)}return encodeURI(n)}(i,e.circle.longitude,e.circle.radius));t.push(this.urlBuilder("",this.locationBuilder(`${r}`),""))}t.push(this.urlBuilder("color",e.color,":")),t.push(this.urlBuilder("weight",e.weight,":")),t.push(this.urlBuilder("fillcolor",e.fillcolor,":")),t.push(this.urlBuilder("geodesic",e.geodesic,":")),e.points&&t.push(this.urlBuilder("",this.locationBuilder(e.points),""));let r=t.filter(e=>e).join("%7C");return`path=${r}`}renderParts(){return this.paths.map(e=>this.renderPath(e))}renderMarkers(){let{markers:e,locationBuilder:t,location:i}=this;return(e.length?e.map(e=>{let i="markers=";switch(typeof e){case"string":i+=t.call(this,e);break;case"object":{let{colour:r,label:s,location:n}=e;i+=(r?`color:${r}|`:"")+(s?`label:${s}|`:"")+(n&&`${t.call(this,n)}|`)}}return i}):[`markers=${t.call(this,i)}`]).join("&")}generateUrl(){let e=this.renderParts()||[],t=this.renderBaseMap(),i=this.renderMarkers();return`${t}&${e}&${i}`}}e.s(["f",0,e=>{let{center:i,channel:n,className:a,client:o,container:d="img",format:l="png",language:c,location:u,maptype:m="roadmap",markers:p,paths:h,region:f,scale:y=1,signature:x,size:g="400x400",style:b,styleMap:_,visible:I,zoom:$=15}=e,[j,v]=g?g.split("x"):["400","400"],[A,S]=(0,r.useState)("");return(0,r.useEffect)(()=>{S(new s({center:i,channel:n,client:o,format:l,language:c,location:u,maptype:m,markers:p,paths:h,region:f,scale:y,signature:x,size:g,style:_,visible:I,zoom:$}).generateUrl())},[i,n,o,l,c,u,m,p,h,f,y,x,g,_,I,$]),(0,t.jsx)(d,{className:a,width:j,height:v,src:A,style:b,alt:"map"})}])},170398,e=>{var t=e.i(391398),i=e.i(813843),r=e.i(115871),s=e.i(191788),n=e.i(280445),a=e.i(64134),o=e.i(39345),d=e.i(451221);let l=(0,n.f)("div")`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1rem;
`,c=(0,n.f)("div")`
  display: flex;
  align-items: center;
`,u=(0,n.f)("span")`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${e=>{let{active:t}=e;return t?"#333":"transparent"}};
  border: 1px solid #333;
  margin: 0 4px;
  display: inline-block;
`;e.s(["f",0,e=>{let{contactUsers:n}=e,[m,p]=(0,s.useState)(0),h=n.length,f=(0,d.f)(),y=(0,s.useMemo)(()=>n[m],[n,m]);return 0===h?null:(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.f,{children:[(0,t.jsx)(r.f,{color:"text.primary",children:"Name"}),(0,t.jsxs)(r.f,{color:"text.primary",children:[y?.user?.nameFirst," ",y?.user?.nameLast]}),(0,t.jsx)(r.f,{color:"text.primary",children:"Phone"}),(0,t.jsx)(r.f,{color:"text.primary",children:y?.user?.phone}),(0,t.jsx)(r.f,{color:"text.primary",children:"Email"}),(0,t.jsx)(r.f,{color:"text.primary",children:y?.user?.email})]}),h>1&&(0,t.jsxs)(l,{children:[(0,t.jsx)(a.default,{onClick:()=>{p(e=>0===e?h-1:e-1)},sx:{color:f.palette.text.primary,cursor:"pointer"}}),(0,t.jsx)(c,{children:(()=>{if(h<=5)return n.map((e,i)=>(0,t.jsx)(u,{active:i===m},i));let e=0,i=m;return m<5?(e=0,i=m):(i=4,h-(e=m-4)<5&&(i=m-(e=h-5))),Array.from({length:5}).map((r,s)=>{let n=e+s;return(0,t.jsx)(u,{active:s===i},n)})})()}),(0,t.jsx)(o.default,{onClick:()=>{p(e=>e===h-1?0:e+1)},sx:{color:f.palette.text.primary,cursor:"pointer"}})]})]})}])},136006,673805,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(115871),s=e.i(170398);let n=(0,i.f)("div")`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 1.25rem;
`;e.s(["f",0,e=>{let{contactUsers:i=[]}=e;return(0,t.jsxs)(n,{children:[(0,t.jsx)(r.f,{variant:"h6",color:"text.primary",mb:1,children:"Contacts"}),(0,t.jsx)(s.f,{contactUsers:i})]})}],136006);var a=e.i(871931),o=e.i(760981),d=e.i(302966),l=e.i(813843),c=e.i(747112),u=e.i(228526);let m=(0,i.f)(a.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{profile:i}=e;return i?.companyNumber||i?.vatId||i?.meta?.xeroContactId||i?.clientType?.name||i?.details?.typeOfOrganisation||i?.details?.utrNumber||i?.details?.cisRegistered||i?.details?.quotingEmail||i?.website?(0,t.jsxs)(m,{defaultExpanded:!0,children:[(0,t.jsx)(d.f,{expandIcon:(0,t.jsx)(c.f,{}),children:(0,t.jsx)(r.f,{typography:"h6",children:"Company"})}),(0,t.jsx)(o.f,{sx:{pt:0},children:(0,t.jsxs)(l.f,{spacing:2,sx:{width:"100%"},children:[i?.companyNumber&&i?.type!=="customer"&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Organisation type"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:u.G.find(e=>e.value===i?.details?.typeOfOrganisation)?.text||"N/A"})]}),i?.companyNumber&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Company number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.companyNumber})]}),i?.vatId&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"VAT number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.vatId})]}),i?.details?.utrNumber&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"UTR number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.details?.utrNumber})]}),i?.details?.cisRegistered&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"CIS registration number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.details?.cisRegistered})]}),i?.clientType?.name&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Customer type"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i.clientType.name})]}),i?.details?.quotingEmail&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Quoting email"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i.details.quotingEmail})]}),i?.meta?.xeroContactId&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Xero contact ID"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.meta?.xeroContactId})]}),i?.website&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Website"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.website})]})]})})]}):null}],673805)},173188,e=>{var t=e.i(362537);e.s(["f",0,(e,i)=>{if(!i)return null;let r=(0,t.default)(i);if(!r.isValid())return null;let s=Math.max(30,Math.round((e.estimatedDuration||54e5)/6e4)),n=r.clone().add(s,"minutes");return{start:r.toISOString(),end:n.toISOString()}}])},353069,e=>{var t=e.i(159080);let i=t.f`
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
`,s=t.f`
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
`,n=t.f`
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
`;let a=t.f`
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
`,d=t.f`
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
`,e.s(["W",0,n,"q",0,o,"Z",0,d,"C",0,r,"o",0,i,"d",0,a,"Y",0,s])},694923,e=>{e.s(["f",0,[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]])},228526,e=>{e.s(["G",0,[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}],"h",0,[{label:"Sole trader",value:"soleTrader"},{label:"Limited company",value:"limitedCompany"},{label:"Partnership",value:"partnership"},{label:"LLP",value:"llp"},{label:"PLC",value:"plc"}]])},63886,e=>{e.s(["f",()=>_],63886);var t=e.i(391398),i=e.i(871931),r=e.i(760981),s=e.i(302966),n=e.i(482384),a=e.i(795617),o=e.i(362407),d=e.i(411331),l=e.i(280445),c=e.i(760814),u=e.i(489129);let m=e=>{let{propertyId:i,propertyName:r}=e,s=(0,d.f)();return(0,t.jsx)(p,{onClick:()=>{s.show({title:"Property information",content:(0,t.jsx)(u.f,{propertyId:i,toggleShow:s.close})})},children:r})},p=c.U.a.withConfig({displayName:"property-link__StyledLink",componentId:"sc-d818312b-0"})`
  cursor: pointer;
  text-decoration: none;
`;var h=e.i(115871),f=e.i(747112),y=e.i(813843),x=e.i(740790),g=e.i(773831),b=e.i(376733);let _=e=>{let{access:i,address:n,edit:l=!1,entity:c,entityId:u,id:p,name:_,refetch:j,showMap:v=!1,showLink:A=!0,title:S="Address",type:q}=e,w=(0,d.f)(),C=e=>{e&&j&&j()},U=(0,a.D)(n);return(0,t.jsxs)($,{defaultExpanded:!0,children:[(0,t.jsx)(s.f,{expandIcon:(0,t.jsx)(f.f,{}),children:(0,t.jsxs)(y.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(h.f,{typography:"h6",children:S}),l&&(0,t.jsx)(g.f,{onClick:e=>{e.stopPropagation(),w.show({content:(0,t.jsx)(o.f,{entity:c,entityId:u,id:p,onSubmit:C,addressId:n.id,type:q}),submit:!1,title:"Manage addresses"})},size:"small",children:(0,t.jsx)(b.default,{sx:{height:"17px",width:"17px"}})})]})}),(0,t.jsx)(r.f,{sx:{pt:0},children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:6,children:[_&&(0,t.jsxs)(y.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Property"}),(0,t.jsx)(h.f,{variant:"body2",children:A?(0,t.jsx)(m,{propertyId:u,propertyName:_}):_})]}),"invoice"===q&&n.invoicingEntity&&(0,t.jsxs)(y.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Invoicing Entity"}),(0,t.jsx)(h.f,{variant:"body2",children:n.invoicingEntity})]}),n.name&&"invoice"!==q&&(0,t.jsxs)(y.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Name"}),(0,t.jsx)(h.f,{variant:"body2",children:n.name})]}),(0,t.jsx)(h.f,{color:"text.secondary",children:"Address"}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:n.addressLine1}),n.addressLine2&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:n.addressLine2}),n.addressLine3&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:n.addressLine3}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:n.city}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:n.postCode}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:n.county}),i&&(0,t.jsxs)(y.f,{spacing:.5,children:[(0,t.jsx)(h.f,{variant:"subtitle2",children:"Access"}),(0,t.jsx)(h.f,{variant:"body2",children:i})]})]}),(0,t.jsx)(x.f,{item:!0,xs:6,children:v&&(0,t.jsx)(I,{center:U,location:U,markers:[U],style:{width:"100%",height:"auto"}})})]})})]})},I=(0,l.f)(n.f)(e=>{let{theme:t}=e;return{display:"block",maxWidth:"250px",width:"100%",height:"auto",marginLeft:"4px",border:`1px solid ${t.palette.secondary.main}`,borderRadius:"10px"}}),$=(0,l.f)(i.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`},127342,e=>{var t=e.i(191788),i=e.i(511667),r=e.i(21557);e.s(["f",0,e=>{let s=(0,r.f)(),[n,{isLoading:a}]=(0,i.f)("/job/supplier-offers/:offerId/hold-time",{queryKey:"hold-supplier-offer-time",method:"POST",onError:e=>{s.show({severity:"error",content:e.message||"Unable to hold supplier offer time"})}});return{holdSupplierOfferTime:(0,t.useCallback)(async t=>{if(Number.isFinite(e))return n({body:t,pathParams:{offerId:e}})},[n,e]),isLoading:a}}])},809621,e=>{let t=e=>e instanceof Date?e.toISOString():e,i=e=>{if(null==e)return null;let t=e;if("string"==typeof e)try{t=JSON.parse(e)}catch{return null}if("object"!=typeof t||null===t)return null;let i=t.timeHold;if(!i?.scheduledAt)return null;let r=Number(i.supplierUserId);return Number.isFinite(r)?{...i,supplierUserId:r}:null};e.s(["f",0,e=>{if(null==e)return null;if("object"==typeof e&&!Array.isArray(e)&&("heldScheduledAt"in e||"heldSupplierUserId"in e)){if(null!=e.heldScheduledAt&&null!=e.heldSupplierUserId){let i=Number(e.heldSupplierUserId);if(Number.isFinite(i))return{scheduledAt:t(e.heldScheduledAt),supplierUserId:i,heldAt:null!=e.heldAt?t(e.heldAt):"",heldByUserId:null!=e.heldByUserId?Number(e.heldByUserId):0}}return i(e.meta)}return i(e)}])},489129,e=>{e.s(["f",()=>p]);var t=e.i(391398),i=e.i(191788),r=e.i(432171),s=e.i(203828),n=e.i(553875),a=e.i(76381),o=e.i(436703),d=e.i(847474),l=e.i(946894),c=e.i(443919),u=e.i(757157),m=e.i(63886);let p=e=>{let{propertyId:p,toggleShow:h}=e,f=(0,s.useRouter)();(0,i.useEffect)(()=>{let e=()=>{h()};return f.events.on("routeChangeComplete",e),()=>{f.events.off("routeChangeComplete",e)}},[f.events,h]);let{loading:y,data:{location:x}={location:null}}=(0,r.t)(l.f,{variables:{id:p}}),g=(0,i.useMemo)(()=>x?.customer.find(e=>"primary"===e.linkType)?.account,[x]),b=(0,d.w)(x,"registered"),_=(0,d.w)(x,"invoice"),I=(0,i.useMemo)(()=>({accountName:g?.name,country:b?.address?.country?.name,createdAt:x?.createdAt,fullName:x?.user?.fullName,phone:x?.user?.phone}),[g?.name,x,b]);return y?(0,t.jsx)(n.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(a.f,{color:"secondary"})}):x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{avatar:(0,o.f)(g?.media),editable:!1,entity:{id:x.id,description:g?.name,name:x.name},entityName:"Location",linkTitleTo:`/dashboard/properties/view?id=${x.id}`}),(0,t.jsx)(u.f,{contactUser:I}),b&&(0,t.jsx)(m.f,{address:b.address,edit:!1,entity:"Location",entityId:x.id,id:b.id,showMap:!0,title:"Address",type:"registered"}),_&&(0,t.jsx)(m.f,{address:_.address,edit:!1,entity:"Location",entityId:x.id,id:_.id,title:"Invoice address",type:"invoice"})]}):null}},946894,757157,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["f",0,i],946894);var r=e.i(391398),s=e.i(871931),n=e.i(760981),a=e.i(302966),o=e.i(280445),d=e.i(115871),l=e.i(747112),c=e.i(813843),u=e.i(740790),m=e.i(65295);let p=(0,o.f)(s.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{contactUser:t}=e;return(0,r.jsxs)(p,{defaultExpanded:!0,children:[(0,r.jsx)(a.f,{expandIcon:(0,r.jsx)(l.f,{}),children:(0,r.jsx)(c.f,{direction:"row",alignItems:"center",spacing:1,children:(0,r.jsx)(d.f,{typography:"h6",children:"Contact"})})}),(0,r.jsx)(n.f,{sx:{pt:0},children:(0,r.jsxs)(u.f,{container:!0,spacing:1,children:[(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Account"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.accountName||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Name"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.fullName||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Position"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.position||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Phone number"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.phone||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Country"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.country||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Date added"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.createdAt?(0,m.f)(t?.createdAt):"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Permits required"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.permitsRequired?"Yes":"No"})]}),t?.xeroContactId&&(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Xero contact ID"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.xeroContactId})]})]})})]})}],757157)},185863,e=>{let t=[{label:"Up to",value:"upTo"},{label:"Approximately",value:"approximately"},{label:"Exactly",value:"exactly"}],i=[{label:"Day",value:"day"},{label:"Working day",value:"workingDay"},{label:"Week",value:"week"}],r=(e,t)=>1===e?t:`${t}s`;e.s(["o",0,t,"E",0,e=>e.totalDuration&&e.totalDurationUnit?[t.find(t=>t.value===e.durationPrefix)?.label,`${e.totalDuration} ${r(e.totalDuration,e.totalDurationUnit)}`].filter(Boolean).join(" "):null,"d",0,e=>{if(!e.noticePeriod)return null;let t=i.find(t=>t.value===e.noticePeriodUnit)?.label;return t?`${e.noticePeriod} ${r(e.noticePeriod,t.toLowerCase())}`:null},"c",0,i,"w",0,[{label:"Hour",value:"hour"},{label:"Day",value:"day"},{label:"Week",value:"week"}]])},64134,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=r(e.r(421506)),n=e.r(391398);i.default=(0,s.default)((0,n.jsx)("path",{d:"M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")},39345,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=r(e.r(421506)),n=e.r(391398);i.default=(0,s.default)((0,n.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"}),"ChevronRightRounded")}])})();