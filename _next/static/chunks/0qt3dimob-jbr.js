(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,482384,e=>{var t=e.i(391398),i=e.i(974261),r=e.i(191788);class n{apiKey=i.e.map||"";channel;center;client;format;language;location;maptype;markers;paths;region;rootURL;scale;signature;size;style;visible;zoom;constructor({center:e,channel:t,client:i,format:r="png",language:n,location:a="",maptype:s="roadmap",markers:o=[],paths:d=[],region:l,rootURL:c="https://maps.googleapis.com/maps/api/staticmap",scale:u=1,signature:m,size:p="400x400",style:y,visible:h,zoom:f=15}){this.channel=t,this.center=e,this.client=i,this.format=r,this.language=n,this.location=a,this.maptype=s,this.markers=o,this.paths=d,this.region=l,this.rootURL=c,this.scale=u,this.signature=m,this.size=p,this.style=y,this.visible=h,this.zoom=f}urlBuilder(e,t,i){return t?"object"==typeof t?`${e}${i}${JSON.stringify(t)}`:`${e}${i}${t}`:null}renderBaseMap(){let e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));let t=e.filter(e=>e).join("&");return`${this.rootURL}?${t}`}locationBuilder(e){let t=[];if(Array.isArray(e)){let i=e.map(e=>this.locationBuilder(e));t.push(...i)}return("string"==typeof e||"number"==typeof e)&&t.push(encodeURI(String(e))),"object"==typeof e&&"lat"in e&&"lng"in e&&t.push(`${e.lat},${e.lng}`),t.join("%7C")}renderPath(e){let t=[];if(e.circle){var i;let r=(i=e.circle.latitude,function(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,n=Math.PI,a="",s=e*n/180,o=t*n/180,d=i/1e3/6371;for(let e=0;e<=360;e+=r){let t=e*n/180,i=Math.asin(Math.sin(s)*Math.cos(d)+Math.cos(s)*Math.sin(d)*Math.cos(t)),r=(o+Math.atan2(Math.sin(t)*Math.sin(d)*Math.cos(s),Math.cos(d)-Math.sin(s)*Math.sin(i)))*180/n;a+=function e(t){let i=[];if(Array.isArray(t)){let r=t.map(t=>e(t));i.push(...r)}return("string"==typeof t||"number"==typeof t)&&i.push(String(t)),"object"==typeof t&&"lat"in t&&"lng"in t&&i.push(`${t.lat},${t.lng}`),i.join("%7C")}(180*i/n+","+r)}return encodeURI(a)}(i,e.circle.longitude,e.circle.radius));t.push(this.urlBuilder("",this.locationBuilder(`${r}`),""))}t.push(this.urlBuilder("color",e.color,":")),t.push(this.urlBuilder("weight",e.weight,":")),t.push(this.urlBuilder("fillcolor",e.fillcolor,":")),t.push(this.urlBuilder("geodesic",e.geodesic,":")),e.points&&t.push(this.urlBuilder("",this.locationBuilder(e.points),""));let r=t.filter(e=>e).join("%7C");return`path=${r}`}renderParts(){return this.paths.map(e=>this.renderPath(e))}renderMarkers(){let{markers:e,locationBuilder:t,location:i}=this;return(e.length?e.map(e=>{let i="markers=";switch(typeof e){case"string":i+=t.call(this,e);break;case"object":{let{colour:r,label:n,location:a}=e;i+=(r?`color:${r}|`:"")+(n?`label:${n}|`:"")+(a&&`${t.call(this,a)}|`)}}return i}):[`markers=${t.call(this,i)}`]).join("&")}generateUrl(){let e=this.renderParts()||[],t=this.renderBaseMap(),i=this.renderMarkers();return`${t}&${e}&${i}`}}e.s(["f",0,e=>{let{center:i,channel:a,className:s,client:o,container:d="img",format:l="png",language:c,location:u,maptype:m="roadmap",markers:p,paths:y,region:h,scale:f=1,signature:x,size:g="400x400",style:_,styleMap:$,visible:b,zoom:j=15}=e,[I,v]=g?g.split("x"):["400","400"],[q,A]=(0,r.useState)("");return(0,r.useEffect)(()=>{A(new n({center:i,channel:a,client:o,format:l,language:c,location:u,maptype:m,markers:p,paths:y,region:h,scale:f,signature:x,size:g,style:$,visible:b,zoom:j}).generateUrl())},[i,a,o,l,c,u,m,p,y,h,f,x,g,$,b,j]),(0,t.jsx)(d,{className:s,width:I,height:v,src:q,style:_,alt:"map"})}])},170398,e=>{var t=e.i(391398),i=e.i(813843),r=e.i(115871),n=e.i(191788),a=e.i(280445),s=e.i(64134),o=e.i(39345),d=e.i(451221);let l=(0,a.f)("div")`
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
`;e.s(["f",0,e=>{let{contactUsers:a}=e,[m,p]=(0,n.useState)(0),y=a.length,h=(0,d.f)(),f=(0,n.useMemo)(()=>a[m],[a,m]);return 0===y?null:(0,t.jsxs)("div",{children:[(0,t.jsxs)(i.f,{children:[(0,t.jsx)(r.f,{color:"text.primary",children:"Name"}),(0,t.jsxs)(r.f,{color:"text.primary",children:[f?.user?.nameFirst," ",f?.user?.nameLast]}),(0,t.jsx)(r.f,{color:"text.primary",children:"Phone"}),(0,t.jsx)(r.f,{color:"text.primary",children:f?.user?.phone}),(0,t.jsx)(r.f,{color:"text.primary",children:"Email"}),(0,t.jsx)(r.f,{color:"text.primary",children:f?.user?.email})]}),y>1&&(0,t.jsxs)(l,{children:[(0,t.jsx)(s.default,{onClick:()=>{p(e=>0===e?y-1:e-1)},sx:{color:h.palette.text.primary,cursor:"pointer"}}),(0,t.jsx)(c,{children:(()=>{if(y<=5)return a.map((e,i)=>(0,t.jsx)(u,{active:i===m},i));let e=0,i=m;return m<5?(e=0,i=m):(i=4,y-(e=m-4)<5&&(i=m-(e=y-5))),Array.from({length:5}).map((r,n)=>{let a=e+n;return(0,t.jsx)(u,{active:n===i},a)})})()}),(0,t.jsx)(o.default,{onClick:()=>{p(e=>e===y-1?0:e+1)},sx:{color:h.palette.text.primary,cursor:"pointer"}})]})]})}])},136006,673805,e=>{var t=e.i(391398),i=e.i(280445),r=e.i(115871),n=e.i(170398);let a=(0,i.f)("div")`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 1.25rem;
`;e.s(["f",0,e=>{let{contactUsers:i=[]}=e;return(0,t.jsxs)(a,{children:[(0,t.jsx)(r.f,{variant:"h6",color:"text.primary",mb:1,children:"Contacts"}),(0,t.jsx)(n.f,{contactUsers:i})]})}],136006);var s=e.i(871931),o=e.i(760981),d=e.i(302966),l=e.i(813843),c=e.i(747112),u=e.i(228526);let m=(0,i.f)(s.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{profile:i}=e;return i?.companyNumber||i?.vatId||i?.meta?.xeroContactId||i?.clientType?.name||i?.details?.typeOfOrganisation||i?.details?.utrNumber||i?.details?.cisRegistered||i?.details?.quotingEmail||i?.website?(0,t.jsxs)(m,{defaultExpanded:!0,children:[(0,t.jsx)(d.f,{expandIcon:(0,t.jsx)(c.f,{}),children:(0,t.jsx)(r.f,{typography:"h6",children:"Company"})}),(0,t.jsx)(o.f,{sx:{pt:0},children:(0,t.jsxs)(l.f,{spacing:2,sx:{width:"100%"},children:[i?.companyNumber&&i?.type!=="customer"&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Organisation type"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:u.G.find(e=>e.value===i?.details?.typeOfOrganisation)?.text||"N/A"})]}),i?.companyNumber&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Company number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.companyNumber})]}),i?.vatId&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"VAT number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.vatId})]}),i?.details?.utrNumber&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"UTR number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.details?.utrNumber})]}),i?.details?.cisRegistered&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"CIS registration number"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.details?.cisRegistered})]}),i?.clientType?.name&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Customer type"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i.clientType.name})]}),i?.details?.quotingEmail&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Quoting email"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i.details.quotingEmail})]}),i?.meta?.xeroContactId&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Xero contact ID"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.meta?.xeroContactId})]}),i?.website&&(0,t.jsxs)(l.f,{children:[(0,t.jsx)(r.f,{color:"text.secondary",fontSize:"0.875rem",children:"Website"}),(0,t.jsx)(r.f,{fontSize:"0.875rem",children:i?.website})]})]})})]}):null}],673805)},374979,e=>{var t=e.i(159080);let i=t.f`
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
`,e.s(["W",0,a,"q",0,o,"Z",0,d,"C",0,r,"o",0,i,"d",0,s,"Y",0,n])},865568,e=>{var t=e.i(159080);let i=t.f`
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
`;let r=t.f`
  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {
    insert_Taxonomy(objects: $objects) {
      returning {
        id
        type
      }
    }
  }
`,n=t.f`
  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {
    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      type
    }
  }
`;t.f`
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
  mutation InsertTaxonomyEntity(
    $entity: String!
    $entityId: Int!
    $questions: [Taxonomy_Entity_insert_input!]!
    $objectStatusLog: [StatusLog_insert_input!]!
    $hasStatusLog: Boolean!
  ) {
    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {
      returning {
        id
      }
    }
    insert_Taxonomy_Entity(objects: $questions) {
      returning {
        id
      }
    }

    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {
      returning {
        id
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
`,e.s(["e",0,r,"N",0,i,"y",0,n])},955811,e=>{var t=e.i(159080);e.i(865568);let i=t.f`
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
`,r=t.f`
  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {
    insert_Taxonomy(objects: $objects) {
      returning {
        id
        type
      }
    }
  }
`,n=t.f`
  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {
    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      type
    }
  }
`,a=t.f`
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
`,s=t.f`
  mutation InsertTaxonomyEntity(
    $entity: String!
    $entityId: Int!
    $questions: [Taxonomy_Entity_insert_input!]!
    $objectStatusLog: [StatusLog_insert_input!]!
    $hasStatusLog: Boolean!
  ) {
    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {
      returning {
        id
      }
    }
    insert_Taxonomy_Entity(objects: $questions) {
      returning {
        id
      }
    }

    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {
      returning {
        id
      }
    }
  }
`;t.f`
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
`,e.s(["e",0,r,"v",0,i,"o",0,a,"K",0,s,"y",0,n])},228526,e=>{e.s(["G",0,[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}],"h",0,[{label:"Sole trader",value:"soleTrader"},{label:"Limited company",value:"limitedCompany"},{label:"Partnership",value:"partnership"},{label:"LLP",value:"llp"},{label:"PLC",value:"plc"}]])},63886,e=>{e.s(["f",()=>$],63886);var t=e.i(391398),i=e.i(871931),r=e.i(760981),n=e.i(302966),a=e.i(482384),s=e.i(795617),o=e.i(362407),d=e.i(411331),l=e.i(280445),c=e.i(760814),u=e.i(489129);let m=e=>{let{propertyId:i,propertyName:r}=e,n=(0,d.f)();return(0,t.jsx)(p,{onClick:()=>{n.show({title:"Property information",content:(0,t.jsx)(u.f,{propertyId:i,toggleShow:n.close})})},children:r})},p=c.U.a.withConfig({displayName:"property-link__StyledLink",componentId:"sc-d818312b-0"})`
  cursor: pointer;
  text-decoration: none;
`;var y=e.i(115871),h=e.i(747112),f=e.i(813843),x=e.i(740790),g=e.i(773831),_=e.i(376733);let $=e=>{let{access:i,address:a,edit:l=!1,entity:c,entityId:u,id:p,name:$,refetch:I,showMap:v=!1,showLink:q=!0,title:A="Address",type:S}=e,w=(0,d.f)(),T=e=>{e&&I&&I()},k=(0,s.D)(a);return(0,t.jsxs)(j,{defaultExpanded:!0,children:[(0,t.jsx)(n.f,{expandIcon:(0,t.jsx)(h.f,{}),children:(0,t.jsxs)(f.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(y.f,{typography:"h6",children:A}),l&&(0,t.jsx)(g.f,{onClick:e=>{e.stopPropagation(),w.show({content:(0,t.jsx)(o.f,{entity:c,entityId:u,id:p,onSubmit:T,addressId:a.id,type:S}),submit:!1,title:"Manage addresses"})},size:"small",children:(0,t.jsx)(_.default,{sx:{height:"17px",width:"17px"}})})]})}),(0,t.jsx)(r.f,{sx:{pt:0},children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:6,children:[$&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(y.f,{color:"text.secondary",children:"Property"}),(0,t.jsx)(y.f,{variant:"body2",children:q?(0,t.jsx)(m,{propertyId:u,propertyName:$}):$})]}),"invoice"===S&&a.invoicingEntity&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(y.f,{color:"text.secondary",children:"Invoicing Entity"}),(0,t.jsx)(y.f,{variant:"body2",children:a.invoicingEntity})]}),a.name&&"invoice"!==S&&(0,t.jsxs)(f.f,{mb:1,children:[(0,t.jsx)(y.f,{color:"text.secondary",children:"Name"}),(0,t.jsx)(y.f,{variant:"body2",children:a.name})]}),(0,t.jsx)(y.f,{color:"text.secondary",children:"Address"}),(0,t.jsx)(y.f,{variant:"body2",sx:{mb:.5},children:a.addressLine1}),a.addressLine2&&(0,t.jsx)(y.f,{variant:"body2",sx:{mb:.5},children:a.addressLine2}),a.addressLine3&&(0,t.jsx)(y.f,{variant:"body2",sx:{mb:.5},children:a.addressLine3}),(0,t.jsx)(y.f,{variant:"body2",sx:{mb:.5},children:a.city}),(0,t.jsx)(y.f,{variant:"body2",sx:{mb:.5},children:a.postCode}),(0,t.jsx)(y.f,{variant:"body2",sx:{mb:.5},children:a.county}),i&&(0,t.jsxs)(f.f,{spacing:.5,children:[(0,t.jsx)(y.f,{variant:"subtitle2",children:"Access"}),(0,t.jsx)(y.f,{variant:"body2",children:i})]})]}),(0,t.jsx)(x.f,{item:!0,xs:6,children:v&&(0,t.jsx)(b,{center:k,location:k,markers:[k],style:{width:"100%",height:"auto"}})})]})})]})},b=(0,l.f)(a.f)(e=>{let{theme:t}=e;return{display:"block",maxWidth:"250px",width:"100%",height:"auto",marginLeft:"4px",border:`1px solid ${t.palette.secondary.main}`,borderRadius:"10px"}}),j=(0,l.f)(i.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`},450340,e=>{var t=e.i(159080);let i=t.f`
  query GetPostcodeAreas(
    $countryId: Int
    $limit: Int
    $offset: Int
    $q: String
    $order: [PostcodeArea_order_by!]
  ) {
    postcodeAreas: PostcodeArea(
      limit: $limit
      offset: $offset
      where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }
      order_by: $order
    ) {
      id
      area
      name
      status
      country: Country {
        id
        name
        code
      }
    }
    meta: PostcodeArea_aggregate(where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }) {
      aggregate {
        totalCount: count
      }
    }
  }
`,r=t.f`
  query GetPostcodeArea($id: Int!) {
    postcodeArea: PostcodeArea_by_pk(id: $id) {
      id
      area
      name
      status
      country: Country {
        id
        name
        code
      }
    }
  }
`,n=t.f`
  mutation InsertPostCodeArea($objects: [PostcodeArea_Entity_insert_input!]!) {
    insert_PostcodeArea_Entity(
      objects: $objects
      on_conflict: {
        constraint: PostcodeArea_Entity_postcodeAreaId_entityId_entity_key
        update_columns: status
      }
    ) {
      returning {
        id
        status
      }
    }
  }
`,a=t.f`
  mutation UpdateEntityAssign($id: Int!, $changes: PostcodeArea_Entity_set_input) {
    update_PostcodeArea_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      status
    }
  }
`;e.s(["G",0,r,"y",0,i,"R",0,n,"Z",0,a])},489129,e=>{e.s(["f",()=>p]);var t=e.i(391398),i=e.i(191788),r=e.i(432171),n=e.i(203828),a=e.i(553875),s=e.i(76381),o=e.i(436703),d=e.i(847474),l=e.i(946894),c=e.i(443919),u=e.i(757157),m=e.i(63886);let p=e=>{let{propertyId:p,toggleShow:y}=e,h=(0,n.useRouter)();(0,i.useEffect)(()=>{let e=()=>{y()};return h.events.on("routeChangeComplete",e),()=>{h.events.off("routeChangeComplete",e)}},[h.events,y]);let{loading:f,data:{location:x}={location:null}}=(0,r.t)(l.f,{variables:{id:p}}),g=(0,i.useMemo)(()=>x?.customer.find(e=>"primary"===e.linkType)?.account,[x]),_=(0,d.w)(x,"registered"),$=(0,d.w)(x,"invoice"),b=(0,i.useMemo)(()=>({accountName:g?.name,country:_?.address?.country?.name,createdAt:x?.createdAt,fullName:x?.user?.fullName,phone:x?.user?.phone}),[g?.name,x,_]);return f?(0,t.jsx)(a.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(s.f,{color:"secondary"})}):x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{avatar:(0,o.f)(g?.media),editable:!1,entity:{id:x.id,description:g?.name,name:x.name},entityName:"Location",linkTitleTo:`/dashboard/properties/view?id=${x.id}`}),(0,t.jsx)(u.f,{contactUser:b}),_&&(0,t.jsx)(m.f,{address:_.address,edit:!1,entity:"Location",entityId:x.id,id:_.id,showMap:!0,title:"Address",type:"registered"}),$&&(0,t.jsx)(m.f,{address:$.address,edit:!1,entity:"Location",entityId:x.id,id:$.id,title:"Invoice address",type:"invoice"})]}):null}},946894,757157,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["f",0,i],946894);var r=e.i(391398),n=e.i(871931),a=e.i(760981),s=e.i(302966),o=e.i(280445),d=e.i(115871),l=e.i(747112),c=e.i(813843),u=e.i(740790),m=e.i(65295);let p=(0,o.f)(n.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{contactUser:t}=e;return(0,r.jsxs)(p,{defaultExpanded:!0,children:[(0,r.jsx)(s.f,{expandIcon:(0,r.jsx)(l.f,{}),children:(0,r.jsx)(c.f,{direction:"row",alignItems:"center",spacing:1,children:(0,r.jsx)(d.f,{typography:"h6",children:"Contact"})})}),(0,r.jsx)(a.f,{sx:{pt:0},children:(0,r.jsxs)(u.f,{container:!0,spacing:1,children:[(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Account"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.accountName||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Name"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.fullName||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Position"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.position||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Phone number"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.phone||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Country"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.country||"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Date added"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.createdAt?(0,m.f)(t?.createdAt):"Not Specified"})]}),(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Permits required"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.permitsRequired?"Yes":"No"})]}),t?.xeroContactId&&(0,r.jsxs)(u.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Xero contact ID"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.xeroContactId})]})]})})]})}],757157)},185863,e=>{let t=[{label:"Up to",value:"upTo"},{label:"Approximately",value:"approximately"},{label:"Exactly",value:"exactly"}],i=[{label:"Day",value:"day"},{label:"Working day",value:"workingDay"},{label:"Week",value:"week"}],r=(e,t)=>1===e?t:`${t}s`;e.s(["o",0,t,"E",0,e=>e.totalDuration&&e.totalDurationUnit?[t.find(t=>t.value===e.durationPrefix)?.label,`${e.totalDuration} ${r(e.totalDuration,e.totalDurationUnit)}`].filter(Boolean).join(" "):null,"d",0,e=>{if(!e.noticePeriod)return null;let t=i.find(t=>t.value===e.noticePeriodUnit)?.label;return t?`${e.noticePeriod} ${r(e.noticePeriod,t.toLowerCase())}`:null},"c",0,i,"w",0,[{label:"Hour",value:"hour"},{label:"Day",value:"day"},{label:"Week",value:"week"}]])},64134,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),a=e.r(391398);i.default=(0,n.default)((0,a.jsx)("path",{d:"M14.71 6.71a.9959.9959 0 0 0-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41"}),"ChevronLeftRounded")},39345,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),a=e.r(391398);i.default=(0,n.default)((0,a.jsx)("path",{d:"M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01"}),"ChevronRightRounded")},540158,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),n=e.i(889878),a=e.i(600961),s=e.i(396851),o=e.i(896994),d=e.i(395724),l=e.i(115871),c=e.i(713149),u=e.i(46739);function m(e){return(0,u.f)("MuiDialogContentText",e)}(0,c.f)("MuiDialogContentText",["root"]);var p=e.i(391398);let y=["children","className"],h=(0,s.f)(l.f,{shouldForwardProp:e=>(0,o.f)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),f=r.forwardRef(function(e,r){let s=(0,d.f)({props:e,name:"MuiDialogContentText"}),{className:o}=s,l=(0,t.f)(s,y),c=(e=>{let{classes:t}=e,r=(0,a.f)({root:["root"]},m,t);return(0,i.f)({},t,r)})(l);return(0,p.jsx)(h,(0,i.f)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:l,className:(0,n.f)(c.root,o)},s,{classes:c}))});e.s(["f",0,f],540158)}])})();