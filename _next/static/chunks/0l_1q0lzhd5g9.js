(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,482384,e=>{var t=e.i(391398),i=e.i(974261),r=e.i(191788);class n{apiKey=i.e.map||"";channel;center;client;format;language;location;maptype;markers;paths;region;rootURL;scale;signature;size;style;visible;zoom;constructor({center:e,channel:t,client:i,format:r="png",language:n,location:a="",maptype:s="roadmap",markers:o=[],paths:d=[],region:l,rootURL:u="https://maps.googleapis.com/maps/api/staticmap",scale:c=1,signature:m,size:p="400x400",style:h,visible:f,zoom:y=15}){this.channel=t,this.center=e,this.client=i,this.format=r,this.language=n,this.location=a,this.maptype=s,this.markers=o,this.paths=d,this.region=l,this.rootURL=u,this.scale=c,this.signature=m,this.size=p,this.style=h,this.visible=f,this.zoom=y}urlBuilder(e,t,i){return t?"object"==typeof t?`${e}${i}${JSON.stringify(t)}`:`${e}${i}${t}`:null}renderBaseMap(){let e=[];e.push(this.urlBuilder("key",this.apiKey,"=")),e.push(this.urlBuilder("center",this.center,"=")),e.push(this.urlBuilder("channel",this.channel,"=")),e.push(this.urlBuilder("client",this.client,"=")),e.push(this.urlBuilder("format",this.format,"=")),e.push(this.urlBuilder("language",this.language,"=")),e.push(this.urlBuilder("maptype",this.maptype,"=")),e.push(this.urlBuilder("region",this.region,"=")),e.push(this.urlBuilder("scale",this.scale,"=")),e.push(this.urlBuilder("signature",this.signature,"=")),e.push(this.urlBuilder("size",this.size,"=")),e.push(this.urlBuilder("style",this.style,"=")),e.push(this.urlBuilder("visible",this.visible,"=")),e.push(this.urlBuilder("zoom",this.zoom,"="));let t=e.filter(e=>e).join("&");return`${this.rootURL}?${t}`}locationBuilder(e){let t=[];if(Array.isArray(e)){let i=e.map(e=>this.locationBuilder(e));t.push(...i)}return("string"==typeof e||"number"==typeof e)&&t.push(encodeURI(String(e))),"object"==typeof e&&"lat"in e&&"lng"in e&&t.push(`${e.lat},${e.lng}`),t.join("%7C")}renderPath(e){let t=[];if(e.circle){var i;let r=(i=e.circle.latitude,function(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,n=Math.PI,a="",s=e*n/180,o=t*n/180,d=i/1e3/6371;for(let e=0;e<=360;e+=r){let t=e*n/180,i=Math.asin(Math.sin(s)*Math.cos(d)+Math.cos(s)*Math.sin(d)*Math.cos(t)),r=(o+Math.atan2(Math.sin(t)*Math.sin(d)*Math.cos(s),Math.cos(d)-Math.sin(s)*Math.sin(i)))*180/n;a+=function e(t){let i=[];if(Array.isArray(t)){let r=t.map(t=>e(t));i.push(...r)}return("string"==typeof t||"number"==typeof t)&&i.push(String(t)),"object"==typeof t&&"lat"in t&&"lng"in t&&i.push(`${t.lat},${t.lng}`),i.join("%7C")}(180*i/n+","+r)}return encodeURI(a)}(i,e.circle.longitude,e.circle.radius));t.push(this.urlBuilder("",this.locationBuilder(`${r}`),""))}t.push(this.urlBuilder("color",e.color,":")),t.push(this.urlBuilder("weight",e.weight,":")),t.push(this.urlBuilder("fillcolor",e.fillcolor,":")),t.push(this.urlBuilder("geodesic",e.geodesic,":")),e.points&&t.push(this.urlBuilder("",this.locationBuilder(e.points),""));let r=t.filter(e=>e).join("%7C");return`path=${r}`}renderParts(){return this.paths.map(e=>this.renderPath(e))}renderMarkers(){let{markers:e,locationBuilder:t,location:i}=this;return(e.length?e.map(e=>{let i="markers=";switch(typeof e){case"string":i+=t.call(this,e);break;case"object":{let{colour:r,label:n,location:a}=e;i+=(r?`color:${r}|`:"")+(n?`label:${n}|`:"")+(a&&`${t.call(this,a)}|`)}}return i}):[`markers=${t.call(this,i)}`]).join("&")}generateUrl(){let e=this.renderParts()||[],t=this.renderBaseMap(),i=this.renderMarkers();return`${t}&${e}&${i}`}}e.s(["f",0,e=>{let{center:i,channel:a,className:s,client:o,container:d="img",format:l="png",language:u,location:c,maptype:m="roadmap",markers:p,paths:h,region:f,scale:y=1,signature:x,size:g="400x400",style:b,styleMap:j,visible:I,zoom:v=15}=e,[A,w]=g?g.split("x"):["400","400"],[S,$]=(0,r.useState)("");return(0,r.useEffect)(()=>{$(new n({center:i,channel:a,client:o,format:l,language:u,location:c,maptype:m,markers:p,paths:h,region:f,scale:y,signature:x,size:g,style:j,visible:I,zoom:v}).generateUrl())},[i,a,o,l,u,c,m,p,h,f,y,x,g,j,I,v]),(0,t.jsx)(d,{className:s,width:A,height:w,src:S,style:b,alt:"map"})}])},443919,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(280445),n=e.i(222351),a=e.i(738251),s=e.i(115871),o=e.i(755548),d=e.i(813843),l=e.i(741850),u=e.i(376733),c=e.i(411331),m=e.i(377198);let p=["gmail.com","outlook.com","hotmail.com","yahoo.com","icloud.com","mail.com","protonmail.com","tutanota.com","live.com","msn.com","aol.com","zoho.com","fastmail.com"];var h=e.i(889231),f=e.i(396413);let y=(0,r.f)("div")`
  background-color: #fff;
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  padding: 1rem 0;
`,x=(0,r.f)("div")`
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
`,g=(0,r.f)("div")`
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
`;e.s(["f",0,e=>{let{avatar:r,editable:b=!0,avatarEditable:j=b,entity:I,entityName:v,linkTitleTo:A,relatedParties:w,onEdit:S,refetch:$}=e,T=(0,c.f)(),[_,R]=(0,i.useState)(null),[k,C]=(0,i.useState)(!1),q=(e=>{if(!e)return null;let t=null;t=e.includes("@")?(e=>{if(!e||!e.includes("@"))return null;try{let t=e.split("@")[1]?.toLowerCase();if(t&&!p.includes(t))return t;return null}catch(e){return null}})(e):(e=>{if(!e)return null;try{let t=e.replace(/^https?:\/\//,""),i=(t=t.replace(/^www\./,"")).split("/")[0];return i?.split(":")[0]||null}catch(e){return null}})(e);let i="pk_SDViFiouRqKwmhMyKrGTAQ";if(!t||!i)return null;let r=new URLSearchParams({size:"128",format:"png",fallback:"monogram",retina:"true",token:i});return`https://img.logo.dev/${encodeURIComponent(t)}?${r.toString()}`})(I.website||I.manager?.email),L=w&&w.length>0,U=(0,m.f)(_);(0,i.useEffect)(()=>{r?(R(r),C(!1)):q?(R(q),C(!0)):(R(null),C(!1))},[r,q]);let M=e=>{let[t]=e;T.close(),R(t?.filename||null)};return(0,t.jsx)(y,{children:(0,t.jsxs)(d.f,{px:1.5,direction:"row",children:[(0,t.jsx)(d.f,{alignSelf:"center",fontSize:0,flexShrink:0,children:(0,t.jsxs)(x,{logoUrl:k,children:[(0,t.jsx)(n.f,{content:I?.name,src:U,onClick:j?()=>{T.show({content:(0,t.jsx)(f.f,{category:"avatar",entity:v,entityId:I?.id,filters:{category:"avatar"},onMediaAdd:M,refetch:$,type:"image"}),title:"Avatar"})}:void 0,style:{cursor:j?"pointer":"default"}}),j&&(0,t.jsx)(g,{className:"edit-text",children:"Edit"})]})}),(0,t.jsxs)(d.f,{pl:1.5,flex:L?1:void 0,minWidth:L?0:void 0,children:[(0,t.jsxs)(s.f,{color:"text.primary",fontSize:17,children:[A?(0,t.jsx)(h.f,{href:A,sx:{color:"secondary.main"},children:I?.name}):I?.name,I?.description&&(I?.descriptionLink?(0,t.jsx)(h.f,{href:I?.descriptionLink,target:"_blank",underline:"none",rel:"noopener noreferrer",children:(0,t.jsx)(s.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:I?.description})}):(0,t.jsx)(s.f,{color:"text.secondary",variant:"body2",fontSize:14,mb:.5,children:I?.description})),I?.website&&(0,t.jsx)(h.f,{href:I?.website.startsWith("http")?I?.website:`http://${I?.website}`,sx:{verticalAlign:"sub"},rel:"nofollow noopener noreferrer",target:"_blank",children:(0,t.jsx)(l.default,{color:"secondary",sx:{fontSize:"16px",ml:.75,mb:"1px"}})})]}),L&&(0,t.jsxs)(d.f,{direction:"row",alignItems:"center",justifyContent:"space-between",gap:1,children:[(0,t.jsxs)(s.f,{color:"text.secondary",variant:"body2",fontSize:14,minWidth:0,children:[(0,t.jsx)(a.f,{component:"span",children:"Related party: "}),w.map((e,i)=>(0,t.jsxs)("span",{children:[i>0&&", ",(0,t.jsx)(h.f,{href:`/dashboard/customers/view?id=${e.id}`,color:"secondary",underline:"hover",children:e.name})]},e.id))]}),b&&!!S&&(0,t.jsxs)(o.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px",flexShrink:0},children:[(0,t.jsx)(u.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})]}),b&&!L&&(0,t.jsx)(d.f,{direction:"row",justifyContent:"flex-start",children:!!S&&(0,t.jsxs)(o.f,{onClick:S,type:"button",size:"small",variant:"contained",color:"secondary",sx:{fontSize:"12px",height:"24px"},children:[(0,t.jsx)(u.default,{sx:{fontSize:"12px",mr:.5}}),"Edit"]})})]})]})})}],443919)},239189,e=>{e.s(["N",0,["serviceRate","rebate"],"O",0,{serviceRate:"Service Rate",rebate:"Rebate"},"e",0,["grossPercent","costPlus"]])},436703,e=>{e.s(["f",0,e=>{let t=e&&e.length>0&&e.find(e=>e.medium?.category==="avatar");if(!t)return null;let i=t?.medium?.meta?.thumbnails,r=i?.find?.(e=>"small"===e.name);return r?.relativePath||t.medium.filename||null}])},209906,e=>{var t=e.i(159080),i=e.i(987123);let r=t.f`
  query GetJob($adminId: Int!, $number: String!) {
    job: Job(where: { adminId: { _eq: $adminId }, number: { _eq: $number } }) {
      id
      issueReportedDescription
      number
      invoiceNumber
      adminId
      title
      description
      reference
      referenceSupplier
      access
      aiSummary
      costCategory
      pricing
      supplierPricing
      timing
      timingStart
      timingEnd
      timingNormalHours
      paymentMethod
      customerSpendThreshold
      supplierSpendThreshold
      thresholdInformation
      time
      amount
      amountOutstanding
      invoicedToDate
      reconciledAmount
      amountToBeInvoiced
      amountOutstandingSupplier
      invoicedToDateSupplier
      reconciledAmountSupplier
      amountToBeInvoicedSupplier
      supplierLabourAmount
      supplierMaterialsAmount
      source
      discount
      timingStatus
      correctDuration
      correctStart
      correctEnd
      reportPassFail
      reportPassFailTitle
      requireReportRecommendations
      estimatedDuration
      estimatedDurationUnit
      anyTimeOption
      hourStart
      hourEnd
      onSiteTimingEnd
      jobReportTimingEnd
      quoteReturnedTimingEnd
      issueReportedDescription
      permitsLinks
      relatedLinks
      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")
      reverseCharge
      cisPercentage
      assetCategory: AssetCategory {
        name
        id
      }
      assets: Assets(where: { entity: { _eq: "Job" } }) {
        id
        status
        entityId
        asset: Asset {
          id
          name
        }
      }
      issueTypes: Taxonomy(
        where: {
          entity: { _eq: "Job" }
          Taxonomy: { status: { _eq: "active" }, type: { _eq: "issueType" } }
        }
      ) {
        id
        issue: Taxonomy {
          id
          name
        }
      }
      tags: Taxonomy(
        where: {
          entity: { _eq: "Job" }
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
          type
        }
      }
      customerCustomVat: meta(path: "customerCustomVat")
      customer: Customer {
        meta
        defaultVatRate
      }
      supplierDeposit
      rebate
      status
      workStatus
      supplierNotes
      ppm
      quoted
      quoteNumber
      quoteDue
      quoteDueSupplier
      statusData
      scheduledAt
      createdAt
      updatedAt
      supplierId
      supplierUserId
      customerId
      customerUserId
      locationId
      managerId
      parentId
      serviceId
      slaId
      siteVisitStart
      siteVisitEnd
      siteVisitWeekends
      tenantId
      quoteCharge
      quoteChargeAmount
      jobScheduleId
      type
      meta
      jobMap
      assetsMap
      customerFinances
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

      admin: Admin {
        id
        name
        meta
        bankAccounts: BankAccounts {
          id
          bank
          stripeId
          accountNumber
          routingNumber
          bic
          iban
          status
          default
          createdAt
          meta
        }
        addresses: Addresses {
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
      }
      customer: Customer {
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
        defaultVatRate
        meta
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
        financial: Financial {
          id
          amountOutstanding
          approvalThreshold
          arrangementFee
          createdAt
          creditLimit
          creditRating
          defaultPaymentMethod
          invoicing
          serviceRate
          spendThreshold
          stripeId
          totalRevenue
          unpaidInvoices
        }
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
        services: Services(where: { entity: { _eq: "Account" } }) {
          id
          dayRate
          dayRateOOH
          dayRatePremium
          hourRate
          hourRateOOH
          hourRatePremium
          meta
          minimumInterval
          minimumLength
          callOutHourRate
          callOutHourRateOOH
          callOutHourRatePremium
          notes
          delivery
          createdAt
          updatedAt
          entity
          entityId
          serviceId
        }
        addresses: Addresses(where: { entity: { _eq: "Account" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            country: Country {
              id
              name
            }
          }
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
      }
      customerUser: CustomerUser {
        id
        name: nameFirst
        nameFirst
        nameLast
        phone
        status
        email
        createdAt
        fullName
        meta
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
      expenses: Expenses {
        id
        amount
        description
        markup
        total
        unit
        vat
        paid
      }
      sublocation: Sublocation {
        id
        name
      }
      location: Location {
        id
        access
        createdAt
        name
        contactUserId
        permitsRequired
        addresses: Addresses(where: { entity: { _eq: "Location" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            countryId
            country: Country {
              id
              name
              code
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
        services: Services(where: { entity: { _eq: "Location" } }) {
          id
          dayRate
          dayRateOOH
          dayRatePremium
          hourRate
          hourRateOOH
          hourRatePremium
          meta
          minimumInterval
          minimumLength
          callOutHourRate
          callOutHourRateOOH
          callOutHourRatePremium
          notes
          delivery
          createdAt
          updatedAt
          entity
          entityId
          serviceId
        }
      }
      financeLogs: JobFinanceLogs(order_by: { createdAt: desc }) {
        id
        type
        value
        difference
        createdAt
      }
      manager: Manager {
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
      quotations: SupplierQuotes(
        where: { status: { _neq: "cancelled" } }
        order_by: { quoteNumber: asc }
      ) {
        id
        createdAt
        jobId
        methodStatement
        notes
        quoteNumber
        startDate
        rebate
        recommended
        status
        totalDuration
        totalDurationUnit
        durationPrefix
        noticePeriod
        noticePeriodUnit
        meta
        updatedAt
        siteVisitAt
        type
        accountId
        lineItems: SupplierQuoteLineItems {
          id
          description
          item
          qty
          qtyUnit
          quoteId
          supplierTotal
          customerTotal
          type
          unitRate
          customerUnitRate
        }
        supplier: Supplier {
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
          accountUsers: Account_Users {
            user: User {
              id
              fullName
              nameFirst
              nameLast
              phone
              email
            }
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
        }
        media: Media(where: { entity: { _eq: "Quotation" } }) {
          id
        }
      }
      report: JobReport {
        id
        completion
        meta
        notes
        timing
        passFailStatus
        recommendations
        comments
        createdAt
        updatedAt
      }
      service: Service {
        id
        name
        countryId
        currencyId
        customerDayRate
        customerDayRateOOH
        customerDayRatePremium
        customerHourRate
        customerHourRateOOH
        customerHourRatePremium
        supplierDayRate
        supplierDayRateOOH
        supplierDayRatePremium
        supplierHourRate
        supplierHourRateOOH
        supplierHourRatePremium
        minimumInterval
        minimumLength
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
      media: Media(where: { entity: { _eq: "Job" } }) {
        id
        item: Medium {
          id
          name
          type
          filename
          category
          meta
        }
      }
      relatedCustomers: JobRelatedCustomers {
        id
        accountId
      }
      supplier: Supplier {
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
        reverseCharge
        cisStatus
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
        addresses: Addresses(where: { entity: { _eq: "Account" } }) {
          ...AddressEntityFields
          address: Address {
            ...AddressFields
            country: Country {
              id
              name
            }
          }
        }
        services: Services(where: { entity: { _eq: "Account" } }) {
          id
          dayRate
          dayRateOOH
          dayRatePremium
          hourRate
          hourRateOOH
          hourRatePremium
          meta
          minimumInterval
          minimumLength
          callOutHourRate
          callOutHourRateOOH
          callOutHourRatePremium
          notes
          delivery
          createdAt
          updatedAt
          entity
          entityId
          serviceId
        }
      }
      supplierUser: SupplierUser {
        id
        meta
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
      supplierOffers: SupplierOffers {
        id
        status
        rate
        dayRate
        meta
        heldSupplierUserId
        heldScheduledAt
        heldAt
        heldByUserId
        notes
        statusLog
        accountId
        account: Supplier {
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
          serviceSchedules: ServiceSchedule(
            where: { status: { _eq: "active" }, entity: { _eq: "Supplier" } }
          ) {
            id
            serviceId
            normal
            ooh
            premium
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
        }
      }
      tenant: Tenant {
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
      }
      tenantUser: TenantUser {
        id
        fullName
        nameFirst
        nameLast
        email
        phone
      }
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        notes
        meta
        quoteId
        createdAt
        user: User {
          id
          fullName
        }
      }
      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
          meta
        }
      }
      quoteSummary: Taxonomy(where: { Taxonomy: { type: { _eq: "quoteSummary" } } }) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
          meta
        }
      }
      answers: Taxonomy(
        where: { Taxonomy: { type: { _eq: "jobQuestion" } } }
        order_by: { taxonomyId: asc }
      ) {
        id
        taxonomyId
        comments
        taxonomy: Taxonomy {
          name
        }
      }
      costCategoryTaxonomy: CostCategory {
        id
        name
      }
      parentJob: ParentJob {
        createdAt
        id
        number
        reference
        status
        title
        type
      }
      childJobs: Jobs {
        createdAt
        id
        number
        reference
        status
        title
        type
      }
      compliance: Compliance {
        id
      }
      form: FormSubmissions(where: { entity: { _in: ["Job", "Ppm"] } }) {
        id
        formId
        formFields
        submissionData
        entity
        entityId
        type
        pdfGenerationStatus
        pdfGenerationId
        form: FormSubmissionsForm {
          name
          status
          description
          settings
          updatedAt
        }
      }
    }
  }
  ${i.a}
  ${i.S}
`;t.f`
  mutation MyMutation($objects: [CreateJobInput]!, $adminId: Int!) {
    createJob(adminId: $adminId, objects: $objects) {
      data
    }
  }
`;let n=t.f`
  mutation UpdateJob($id: Int!, $changes: Job_set_input) {
    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      status
    }
  }
`;t.f`
  query GetIssueTypesForSelect {
    issueTypes: Taxonomy(where: { type: { _eq: "issueType" } }) {
      value: id
      label: name
    }
  }
`;let a=t.f`
  mutation AddJob($objects: [JobTiming_insert_input!]!) {
    insert_JobTiming(objects: $objects) {
      returning {
        id
        status
        notes
        createdAt
      }
    }
  }
`,s=t.f`
  mutation DeleteJobTiming($id: Int!, $quoteId: Int, $status: String) {
    delete_JobTiming(
      where: { jobId: { _eq: $id }, quoteId: { _eq: $quoteId }, status: { _eq: $status } }
    ) {
      returning {
        jobId
        status
      }
    }
  }
`,o=t.f`
  query GetSLAsForJobManage($customerId: Int!, $locationId: Int!) {
    customerSlas: SLA_Entity(
      where: { entityId: { _eq: $customerId }, entity: { _eq: "Account" } }
    ) {
      sla: SLA {
        name
      }
      id
      inUse
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      notes
      slaId
    }
    locationSlas: SLA_Entity(
      where: { entityId: { _eq: $locationId }, entity: { _eq: "Location" } }
    ) {
      sla: SLA {
        name
      }
      id
      inUse
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      notes
      slaId
      entity
    }
    slas: SLA(where: { status: { _eq: "active" } }, order_by: { name: asc }) {
      id
      label: name
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      type
      subtype
    }
  }
`,d=t.f`
  query GetJobFinanceLogs($jobId: Int!) {
    logs: JobFinanceLog(where: { jobId: { _eq: $jobId } }, order_by: { createdAt: desc }) {
      id
      type
      value
      difference
      createdAt
      meta
    }
    jobInfo: Job_by_pk(id: $jobId) {
      id
      type
      statusData
      pricing
      supplierPricing
      invoiceAmountCustomer
      invoiceAmountSupplier
      markupSupplierCost: meta(path: "markupSupplierCost")
      invoices: Invoices(where: { entity: { _eq: "Job" } }) {
        invoiceType
      }
      customerCustomVat: meta(path: "customerCustomVat")
      jobSchedule: JobSchedule {
        invoiceBasis
      }
      customer: Customer {
        rateType: meta(path: "$.finance.rateType")
        serviceRateType: meta(path: "$.finance.serviceRateType")
        serviceRateLabour: meta(path: "$.finance.serviceRateLabour")
        serviceRateExpenses: meta(path: "$.finance.serviceRateExpenses")
        defaultVatRate
      }
      timings: JobTimings(order_by: { id: desc }) {
        id
        status
        createdAt
      }
    }
  }
`,l=t.f`
  mutation AddJobFinanceLog($objects: [JobFinanceLog_insert_input!]!) {
    insert_JobFinanceLog(objects: $objects) {
      returning {
        id
      }
    }
  }
`,u=t.f`
  mutation AddJob(
    $timing: [JobTiming_insert_input!]!
    $financeLog: [JobFinanceLog_insert_input!]!
    $hasFinanceLog: Boolean!
    $jobId: Int!
    $jobChange: Job_set_input
  ) {
    insert_JobTiming(objects: $timing) {
      returning {
        id
        status
        notes
        createdAt
      }
    }
    insert_JobFinanceLog(objects: $financeLog) @include(if: $hasFinanceLog) {
      returning {
        id
      }
    }
    update_Job_by_pk(pk_columns: { id: $jobId }, _set: $jobChange) @include(if: $hasFinanceLog) {
      id
      status
    }
  }
`,c=t.f`
  mutation calculateJobFinance(
    $jobId: Int
    $invoiceType: String
    $customerId: Int
    $scheduleId: Int
    $locationId: Int
    $skipErrors: Boolean
  ) {
    calculateJobFinance(
      jobId: $jobId
      invoiceType: $invoiceType
      customerId: $customerId
      scheduleId: $scheduleId
      locationId: $locationId
      skipErrors: $skipErrors
    ) {
      data
    }
  }
`,m=t.f`
  subscription GetJobTimings($adminId: Int!, $number: String!) {
    timings: JobTiming(
      where: { Job: { adminId: { _eq: $adminId }, number: { _eq: $number } } }
      order_by: { id: desc }
    ) {
      id
      status
      notes
      meta
      quoteId
      createdAt
      user: User {
        id
        fullName
      }
    }
  }
`;e.s(["u",0,a,"B",0,l,"_",0,u,"T",0,c,"s",0,s,"D",0,r,"E",0,d,"W",0,o,"U",0,m,"x",0,n])},588964,e=>{var t=e.i(391398),i=e.i(691567),r=e.i(668921),n=e.i(152078),a=e.i(471973),s=e.i(606255),o=e.i(984636),d=e.i(530252),l=e.i(813843),u=e.i(115871),c=e.i(544005);let m={options:[],error:!1,helperText:"",stackProps:{},formControlProps:{},labelLeft:!1},p=e=>{let i=(0,c.f)(e,m),{label:p,options:f,error:y,helperText:x,stackProps:g={},formControlProps:b={},labelLeft:j}=i,I=e=>{let{children:i}=e;return(0,t.jsx)(t.Fragment,{children:i})};return(0,t.jsxs)(r.f,{sx:{m:3},error:y,variant:"standard",...b,children:[(0,t.jsxs)(l.f,{...j&&h,children:[p&&(0,t.jsx)(s.f,{id:"radio-group",color:"secondary",children:p}),(0,t.jsx)(o.f,{...i,"aria-labelledby":"radio-group",children:(0,t.jsx)(l.f,{...g,children:f.map(e=>{let{value:i,label:r,icon:a,ParentComponent:s=I}=e;return(0,t.jsx)(s,{children:(0,t.jsx)(n.f,{value:i,control:(0,t.jsx)(d.f,{color:"secondary"}),label:(0,t.jsxs)(l.f,{direction:"row",alignItems:"center",spacing:1,children:[a,(0,t.jsx)(u.f,{children:r})]})})})})})})]}),(0,t.jsx)(a.f,{children:x})]})};p.propTypes={label:i.default.string,options:i.default.arrayOf(i.default.shape({label:i.default.string.isRequired,value:i.default.any.isRequired,ParentComponent:i.default.elementType})),error:i.default.bool,helperText:i.default.string,stackProps:i.default.object,formControlProps:i.default.object,labelLeft:i.default.bool};let h={direction:"row",alignItems:"center",flexWrap:"wrap",spacing:1};e.s(["f",0,p])},510123,e=>{var t=e.i(391398),i=e.i(191788),r=e.i(362537),n=e.i(432171),a=e.i(773412),s=e.i(159080);let o=s.f`
  fragment TaskFields on Task {
    id
    status
    priority
    title
    content
    dueDate
    assignedUser: AssignedUser {
      id
      fullName
    }
  }
`,d=s.f`
  query GetTasks(
    $jobId: Int
    $customerId: Int
    $supplierId: Int
    $locationId: Int
    $assignedUserId: Int
    $limit: Int
    $offset: Int
    $orderBy: Task_order_by!
  ) {
    tasks: Task(
      where: {
        jobId: { _eq: $jobId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        locationId: { _eq: $locationId }
        assignedUserId: { _eq: $assignedUserId }
      }
      limit: $limit
      offset: $offset
      order_by: [$orderBy]
    ) {
      ...TaskFields
    }
    meta: Task_aggregate(
      where: {
        jobId: { _eq: $jobId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        locationId: { _eq: $locationId }
        assignedUserId: { _eq: $assignedUserId }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }

  ${o}
`,l=s.f`
  subscription GetTasks(
    $jobId: Int
    $customerId: Int
    $supplierId: Int
    $locationId: Int
    $assignedUserId: Int
    $limit: Int
    $offset: Int
    $orderBy: Task_order_by!
  ) {
    tasks: Task(
      where: {
        jobId: { _eq: $jobId }
        customerId: { _eq: $customerId }
        supplierId: { _eq: $supplierId }
        locationId: { _eq: $locationId }
        assignedUserId: { _eq: $assignedUserId }
      }
      limit: $limit
      offset: $offset
      order_by: [$orderBy]
    ) {
      ...TaskFields
    }
  }
  ${o}
`;var u=e.i(594301),c=e.i(98762),m=e.i(871931),p=e.i(760981),h=e.i(302966),f=e.i(738251),y=e.i(755548),x=e.i(799083),g=e.i(76381),b=e.i(152078),j=e.i(813843),I=e.i(115871),v=e.i(747112),A=e.i(220490),w=e.i(101934),S=e.i(106850),$=e.i(280445),T=e.i(529292),_=e.i(885783),R=e.i(337089);let k=e=>{let{title:i="",dueDate:r,priority:n,status:a,content:s,assigned:o,onView:d=()=>{}}=e;return(0,t.jsxs)(C,{variant:"outlined",children:[(0,t.jsxs)(S.f,{sx:{padding:1},children:[(0,t.jsxs)(j.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(_.f,{priority:n}),(0,t.jsx)(R.f,{status:a})]}),(0,t.jsxs)(I.f,{mt:1,variant:"h6",sx:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[i,"  "]}),(0,t.jsx)(I.f,{mt:1,sx:{height:"63px",overflow:"hidden"},children:s}),o&&(0,t.jsxs)(I.f,{variant:"subtitle2",children:["Assigned by ",o]})]}),(0,t.jsxs)(w.f,{sx:{display:"flex",justifyContent:"space-between",pt:0},children:[(0,t.jsx)(y.f,{variant:"contained",color:"secondary",onClick:d,sx:{height:"30px"},children:"View"}),(0,t.jsx)(q,{variant:"subtitle2",children:r})]})]})},C=(0,$.f)(A.f)(e=>{let{theme:t}=e;return{display:"flex",flexDirection:"column",justifyContent:"space-between",maxHeight:"210px",minWidth:"280px",backgroundColor:t.palette.muiCardGray.main}}),q=(0,$.f)(I.f)(e=>{let{theme:t}=e;return{alignSelf:"flex-end",fontWeight:700,color:(0,T.V)(t.palette.black.main,.46)}});var L=e.i(811179),U=e.i(411331),M=e.i(265387),D=e.i(398038);let F={item:"dueDate",order:"desc"};e.s(["f",0,e=>{let{jobId:s,customerId:o,supplierId:A,locationId:w,subscription:S,accordionSx:$,expanded:T,showMyTaskButton:_=!1,onChangeExpanded:R=()=>{}}=e,C=(0,U.f)(),{user:q}=(0,u.f)(),{initialData:N}=(0,c.f)({filters:{jobId:s,customerId:o,supplierId:A,locationId:w},initialSort:F}),[P,O]=(0,i.useState)(!1),J={...N,assignedUserId:P?q.id:N.userId},{loading:E,data:{tasks:B}={tasks:[],meta:{aggregate:{totalCount:0}}}}=(0,n.t)(d,{variables:{...J},skip:S}),{loading:H,data:{tasks:V}={tasks:[]}}=(0,a.f)(l,{variables:{...J},skip:!S}),z=(0,i.useCallback)(e=>{let{id:i}=e;C.show({content:(0,t.jsx)(L.DetailsTaskForm,{id:i}),title:"Task Details",submitForm:"taskDetailsForm",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw",query:{task_id:i.toString()},keepPrevQueryOnOpen:!0})},[C]),{open:Y}=(0,D.f)(z,"task_id"),G=(S?V:B).map(e=>({id:e.id,status:e.status,priority:e.priority,title:e.title,content:e.content,dueDate:(0,r.default)(e.dueDate).format("YYYY-MM-DD"),assignedUser:e.assignedUser?.fullName,item:e,actions:""}));return(0,t.jsx)(f.f,{children:(0,t.jsxs)(m.f,{expanded:T,onChange:R,sx:$,defaultExpanded:!0,children:[(0,t.jsx)(h.f,{expandIcon:(0,t.jsx)(v.f,{}),children:(0,t.jsx)(I.f,{variant:"h6",children:"Tasks"})}),(0,t.jsx)(p.f,{sx:{paddingTop:0},children:(0,t.jsxs)(j.f,{width:"100%",spacing:1,children:[(0,t.jsxs)(j.f,{width:"100%",direction:"row",justifyContent:"space-between",alignItems:"center",children:[(0,t.jsx)(I.f,{children:"Current task in progress"}),_&&(0,t.jsx)(b.f,{control:(0,t.jsx)(x.f,{color:"secondary",checked:P,onChange:e=>{e.stopPropagation(),O(e=>!e)}}),label:"My Tasks"})]}),(0,t.jsx)(j.f,{width:"100%",direction:"row",spacing:2,pb:1,sx:{overflowX:"scroll"},children:E||H?(0,t.jsx)(j.f,{width:"100%",direction:"row",justifyContent:"center",children:(0,t.jsx)(g.f,{color:"secondary"})}):G.map(e=>(0,t.jsx)(k,{dueDate:e.dueDate,priority:e.priority,status:e.status,title:e.title,content:e.content,assigned:e.assignedUser,onView:t=>Y({id:e.id})}))}),(0,t.jsx)(j.f,{direction:"row",justifyContent:"center",children:(0,t.jsx)(y.f,{variant:"contained",color:"secondary",onClick:e=>{e.preventDefault(),e.stopPropagation(),C.show({content:(0,t.jsx)(M.f,{jobId:s,customerId:o,supplierId:A,locationId:w,close:e=>{C.close(),Y({id:e})}}),title:"Create Task",xs3:"100vw",sm:"100vw",sm2:"80vw",sm3:"70vw",md2:"60vw",lg:"50vw",lg2:"40vw",keepPrevQueryOnOpen:!0})},children:"Add new task"})})]})})]})})}],510123)},265387,398038,e=>{var t=e.i(391398),i=e.i(362537),r=e.i(98926),n=e.i(776204),a=e.i(511667),s=e.i(974261),o=e.i(422411),d=e.i(424894),l=e.i(428424),u=e.i(76381),c=e.i(813843),m=e.i(652148),p=e.i(588964),h=e.i(722394),f=e.i(962379),y=e.i(230512),x=e.i(594301),g=e.i(394989),b=e.i(941062);e.i(864980);var j=e.i(790388),I=e.i(856688),v=e.i(640859),A=e.i(191788),w=e.i(54100),S=e.i(21557),$=e.i(202711),T=e.i(280321),_=e.i(738251),R=e.i(341056),k=e.i(498681),C=e.i(620291),q=e.i(867586),L=e.i(593626),U=e.i(885549),M=e.i(116823),D=e.i(877602),F=e.i(271775),N=e.i(144634),P=e.i(441625);async function O(e,t,i,r){if(i.value&&i.formFields){var n;await e.mutate({mutation:P.O,variables:{formId:Number(i.value),userId:i.userId||r,submissionData:(e=>{if(e)return{...e}})(i.submissionData),formFields:(n=i.formFields)?Array.isArray(n)?n:[n]:[],entity:"Task",entityId:t}})}}e.i(604265);let J=A.default.memo(w.f);e.s(["f",0,e=>{let{jobId:w,customerId:P,supplierId:E,locationId:B,close:H}=e,{user:V}=(0,x.f)(),z=(0,r.f)(),Y=(0,k.f)(),G=Y?.admin?.modules?.formBuilder||!1,W=(0,S.f)(),Q=(0,v.f)(),{createMediaInput:K,loadingAddMedia:X}=(0,I.t)("Task",V.adminId,V.id),{handleSubmit:Z,watch:ee,setValue:et,control:ei,errors:er,register:en,formState:ea,setError:es,clearErrors:eo}=(0,o.G)({defaultValues:{priority:"urgent",relatedLinks:[],customerAccount:null,assignedCustomer:null},resolver:(0,d.yupResolver)(b.f)}),ed=ee("customerAccount"),el=ee("relatedLinks"),eu=ee("attachments"),ec=ee("formSubmission"),em=ee("dueDate"),[ep,eh]=(0,A.useState)(!1),[ef,ey]=(0,A.useState)(!1),[ex,eg]=(0,A.useState)(""),[eb,ej]=(0,A.useState)(""),eI=(0,A.useRef)(ex);(0,A.useEffect)(()=>{eI.current=ex},[ex]);let ev=(0,F.f)(ex),eA=em&&ep?ev?(0,i.default)(em).format("YYYY-MM-DD-HH-mm"):(0,i.default)(em).format("YYYY-MM-DD"):null;(0,A.useEffect)(()=>{P&&et("customerAccount",{value:P,label:""},{shouldDirty:!1})},[P,et]),(0,A.useEffect)(()=>{if(!ep||!em)return;let e=(0,N.v)(em,eI.current,{syncStartToDueDate:!0});e.rruleString&&(eg(e.rruleString),ej(e.rruleText))},[eA,ep,ev,em]);let[ew,{isLoading:eS}]=(0,a.f)("/task",{queryKey:"create-task-rest",method:"POST",baseUrl:s.M,onError:e=>{W.show({content:e.message||D.G,severity:"error"})}}),[e$,{loading:eT}]=(0,n.f)(y.A,{refetchQueries:["GetTasksTable"],onError:()=>{W.show({content:"Failed to create task",severity:"error"})}}),e_=(0,A.useCallback)(e=>{et("content",e.textContent),et("editorState",e.json)},[et]),eR=(0,A.useCallback)((e,t)=>{eg(e),ej(t)},[]),ek=async e=>{let t;if(ep){if(!e.dueDate)return void W.show({content:"Set a due date before enabling recurrence.",severity:"error"});if(ef)return void W.show({content:"Check the recurrence end date.",severity:"error"});if(!ex)return void W.show({content:D.G,severity:"error"})}let i=await K(e.attachments),r=(0,$.f)(e.relatedLinks),n=(0,T.n)(e.relatedLinks),a=(0,T.U)(e.relatedLinks),s=(0,U.D)(e,P||r),o={status:l.k.NEW,priority:e.priority,relatedLinks:e.relatedLinks,title:e.title,content:e.content,editorState:e.editorState,dueDate:e.dueDate,adminId:V.adminId,userId:V.id,assignedAccountId:(0,U.E)(e,V.adminId),assignedUserId:(0,U.w)(e),jobId:w,customerId:s,supplierId:E||n,locationId:B||a},d=ec?.value&&ec?.formFields?{formId:Number(ec.value),userId:ec.userId||V.id,formFields:Array.isArray(ec.formFields)?ec.formFields:[ec.formFields],submissionData:ec.submissionData??null}:void 0,u=!1;if(ep&&ex){u=!0;let e=await ew({body:{...o,recurrence_rule:ex,recurrence_description:eb,...d?{form:d}:{}}});if(!(t=e?.id))return;await z.refetchQueries({include:["GetTasksTable","GetCustomerTasksTable"]})}else{let{data:e}=await e$({variables:{objects:[o]}});if(!e||!e.insert_Task?.returning?.[0]?.id)return;t=e.insert_Task.returning[0].id}if(!t)return;let c=!0,m=(0,I.w)(i);if(m.length>0)try{await Q({entity:"Task",entityId:t,files:m})}catch{c=!1,W.show({content:"Task created but its files could not be attached.",severity:"warning",color:"info"})}if(!u&&ec?.value&&ec?.formFields)try{await O(z,t,ec,V.id)}catch{c=!1,W.show({content:"Task created but the form could not be linked.",severity:"warning",color:"info"})}c&&W.show({content:"Task created successfully",severity:"success"}),H?.(t)};return eT||eS||X?(0,t.jsx)(c.f,{width:"100%",direction:"column",justifyContent:"center",alignItems:"center",children:(0,t.jsx)(u.f,{color:"secondary"})}):(0,t.jsx)("form",{id:"offCanvasForm",onSubmit:Z(ek),children:(0,t.jsxs)(c.f,{direction:"column",spacing:3,children:[(0,t.jsx)(o.e,{control:ei,name:"title",render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(m.f,{variant:"standard",color:"secondary",label:"Title",value:i,onChange:r,error:!!er.title,helperText:er.title?.message})}}),(0,t.jsx)(J,{handleChange:e_}),(0,t.jsx)(o.e,{control:ei,name:"priority",render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(p.f,{label:"Priority:",labelLeft:!0,stackProps:{direction:"row",flexWrap:"wrap"},options:l.s,value:i,onChange:r,error:er.priority,helperText:er.priority?.message})}}),(0,t.jsx)(o.e,{control:ei,name:"dueDate",defaultValue:null,render:e=>{let{value:r,onChange:n}=e;return ev?(0,t.jsx)(f.f,{label:"Due date",format:"Do MMM YYYY HH:mm",ampm:!1,minutesStep:15,minDateTime:(0,i.default)(),value:r?(0,i.default)(r):null,onChange:e=>{n(e&&(0,i.default)(e).isValid()?(0,i.default)(e).toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!er.dueDate,helperText:er.dueDate?.message}}}):(0,t.jsx)(h.f,{label:"Due date",format:"Do MMM YYYY",minDate:(0,i.default)().startOf("day"),value:r?(0,i.default)(r):null,onChange:e=>{let t=(0,N.p)(e);n(t?t.toDate():null)},slotProps:{textField:{fullWidth:!0,variant:"standard",color:"secondary",error:!!er.dueDate,helperText:er.dueDate?.message}}})}}),(0,t.jsx)(o.e,{name:"assignedUser",control:ei,defaultValue:null,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(C.f,{value:i,onChange:r,error:!!er.assignedUser,helperText:er.assignedUser?.value?.message})}}),(0,t.jsx)(o.e,{name:"customerAccount",control:ei,defaultValue:null,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(q.f,{value:i,onChange:e=>{r(e),et("assignedCustomer",null)},error:!!er.customerAccount,helperText:er.customerAccount?.message})}}),(0,t.jsx)(o.e,{name:"assignedCustomer",control:ei,defaultValue:null,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(L.f,{customerAccountId:ed?.value??null,value:i,onChange:r,error:!!er.assignedCustomer,helperText:er.assignedCustomer?.message})}}),(0,t.jsx)(g.f,{values:el,setValue:et,name:"relatedLinks"}),(0,t.jsx)(M.f,{dueDate:em?(0,i.default)(em):null,frequency:ex,onRecurrenceEnabledChange:eh,onFrequencyChange:eR,onFrequencyErrorChange:ey,setValue:et}),(0,t.jsx)(j.f,{values:eu,setValue:et}),(0,t.jsx)(o.e,{name:"content",control:ei,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)("input",{value:i,onChange:r,type:"hidden"})}}),(0,t.jsx)(o.e,{name:"editorState",control:ei,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)("input",{value:i,onChange:r,type:"hidden"})}}),(0,t.jsx)(o.e,{name:"relatedLinks",control:ei,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)("input",{value:i,onChange:r,type:"hidden"})}}),(0,t.jsx)(o.e,{name:"attachments",control:ei,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)("input",{value:i,onChange:r,type:"hidden"})}}),G&&(0,t.jsx)(_.f,{children:(0,t.jsx)(R.f,{control:ei,errors:er,register:en,setValue:et,formState:ea,setError:es,clearErrors:eo,hasPreview:!0,entity:"Task",entityId:null})})]})})}],265387);var E=e.i(203828);e.s(["f",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",{query:i}=(0,E.useRouter)(),r=(0,A.useRef)(!1);return(0,A.useEffect)(()=>{let n=i[t],a=Number(n);r.current||!n||isNaN(a)||e({id:a}),r.current=!0},[e,i,t]),{open:(0,A.useCallback)(t=>{let{id:i}=t;e({id:i})},[e])}}],398038)},520561,e=>{var t=e.i(209906);let i=async(e,i,r)=>{let n=null,a=null,s=null,o=null,d=[];return r&&"supplier"!==r||d.push(e.mutate({mutation:t.T,variables:{jobId:i,invoiceType:"supplier"}}).then(e=>{n=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{s=e})),r&&"supplier"===r||d.push(e.mutate({mutation:t.T,variables:{jobId:i,invoiceType:"customerVat"}}).then(e=>{a=e?.data?.calculateJobFinance?.data?.persistentData||null}).catch(e=>{o=e})),await Promise.all(d),{financeSupplier:n,financeCustomer:a,supplierError:s,customerError:o}},r=async e=>{let{client:i,customerId:r,scheduleId:n,locationId:a,skipErrors:s=!1}=e;return i.mutate({mutation:t.T,variables:{customerId:r,scheduleId:n,locationId:a,skipErrors:s}})};e.s(["L",0,r,"f",0,i])},63886,e=>{e.s(["f",()=>j],63886);var t=e.i(391398),i=e.i(871931),r=e.i(760981),n=e.i(302966),a=e.i(482384),s=e.i(795617),o=e.i(362407),d=e.i(411331),l=e.i(280445),u=e.i(760814),c=e.i(489129);let m=e=>{let{propertyId:i,propertyName:r}=e,n=(0,d.f)();return(0,t.jsx)(p,{onClick:()=>{n.show({title:"Property information",content:(0,t.jsx)(c.f,{propertyId:i,toggleShow:n.close})})},children:r})},p=u.U.a.withConfig({displayName:"property-link__StyledLink",componentId:"sc-d818312b-0"})`
  cursor: pointer;
  text-decoration: none;
`;var h=e.i(115871),f=e.i(747112),y=e.i(813843),x=e.i(740790),g=e.i(773831),b=e.i(376733);let j=e=>{let{access:i,address:a,edit:l=!1,entity:u,entityId:c,id:p,name:j,refetch:A,showMap:w=!1,showLink:S=!0,title:$="Address",type:T}=e,_=(0,d.f)(),R=e=>{e&&A&&A()},k=(0,s.D)(a);return(0,t.jsxs)(v,{defaultExpanded:!0,children:[(0,t.jsx)(n.f,{expandIcon:(0,t.jsx)(f.f,{}),children:(0,t.jsxs)(y.f,{direction:"row",alignItems:"center",spacing:1,children:[(0,t.jsx)(h.f,{typography:"h6",children:$}),l&&(0,t.jsx)(g.f,{onClick:e=>{e.stopPropagation(),_.show({content:(0,t.jsx)(o.f,{entity:u,entityId:c,id:p,onSubmit:R,addressId:a.id,type:T}),submit:!1,title:"Manage addresses"})},size:"small",children:(0,t.jsx)(b.default,{sx:{height:"17px",width:"17px"}})})]})}),(0,t.jsx)(r.f,{sx:{pt:0},children:(0,t.jsxs)(x.f,{container:!0,children:[(0,t.jsxs)(x.f,{item:!0,xs:6,children:[j&&(0,t.jsxs)(y.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Property"}),(0,t.jsx)(h.f,{variant:"body2",children:S?(0,t.jsx)(m,{propertyId:c,propertyName:j}):j})]}),"invoice"===T&&a.invoicingEntity&&(0,t.jsxs)(y.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Invoicing Entity"}),(0,t.jsx)(h.f,{variant:"body2",children:a.invoicingEntity})]}),a.name&&"invoice"!==T&&(0,t.jsxs)(y.f,{mb:1,children:[(0,t.jsx)(h.f,{color:"text.secondary",children:"Name"}),(0,t.jsx)(h.f,{variant:"body2",children:a.name})]}),(0,t.jsx)(h.f,{color:"text.secondary",children:"Address"}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.addressLine1}),a.addressLine2&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.addressLine2}),a.addressLine3&&(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.addressLine3}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.city}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.postCode}),(0,t.jsx)(h.f,{variant:"body2",sx:{mb:.5},children:a.county}),i&&(0,t.jsxs)(y.f,{spacing:.5,children:[(0,t.jsx)(h.f,{variant:"subtitle2",children:"Access"}),(0,t.jsx)(h.f,{variant:"body2",children:i})]})]}),(0,t.jsx)(x.f,{item:!0,xs:6,children:w&&(0,t.jsx)(I,{center:k,location:k,markers:[k],style:{width:"100%",height:"auto"}})})]})})]})},I=(0,l.f)(a.f)(e=>{let{theme:t}=e;return{display:"block",maxWidth:"250px",width:"100%",height:"auto",marginLeft:"4px",border:`1px solid ${t.palette.secondary.main}`,borderRadius:"10px"}}),v=(0,l.f)(i.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`},785744,581384,e=>{e.s(["f",0,20],581384);let t=e=>{if(null==e||"string"==typeof e&&""===e.trim())return null;let t="string"==typeof e?Number(e):e;return"number"!=typeof t||!Number.isFinite(t)||t<0||t>100?null:t};e.s(["u",0,e=>{if(e.jobCustomVat?.enabled){let i=t(e.jobCustomVat.rate);if(null!==i)return i}let i=t(e.customerDefaultVatRate);return null!==i?i:20},"H",0,t],785744)},995070,e=>{e.s(["i",0,"VAT rate must be between 0 and 100, to a maximum of 2 decimal places.","r",0,"Enter a VAT rate.","b",0,e=>{if(null==e||Number.isNaN(e))return!0;let t=100*e;return Math.abs(t-Math.round(t))<=1e-9*Math.max(1,Math.abs(t))},"H",0,e=>{let{value:t,validity:i}=e.target;return i.badInput?0/0:""===t?null:Number(t)}])},489129,e=>{e.s(["f",()=>p]);var t=e.i(391398),i=e.i(191788),r=e.i(432171),n=e.i(203828),a=e.i(553875),s=e.i(76381),o=e.i(436703),d=e.i(847474),l=e.i(946894),u=e.i(443919),c=e.i(757157),m=e.i(63886);let p=e=>{let{propertyId:p,toggleShow:h}=e,f=(0,n.useRouter)();(0,i.useEffect)(()=>{let e=()=>{h()};return f.events.on("routeChangeComplete",e),()=>{f.events.off("routeChangeComplete",e)}},[f.events,h]);let{loading:y,data:{location:x}={location:null}}=(0,r.t)(l.f,{variables:{id:p}}),g=(0,i.useMemo)(()=>x?.customer.find(e=>"primary"===e.linkType)?.account,[x]),b=(0,d.w)(x,"registered"),j=(0,d.w)(x,"invoice"),I=(0,i.useMemo)(()=>({accountName:g?.name,country:b?.address?.country?.name,createdAt:x?.createdAt,fullName:x?.user?.fullName,phone:x?.user?.phone}),[g?.name,x,b]);return y?(0,t.jsx)(a.f,{sx:{zIndex:1e5},open:!0,children:(0,t.jsx)(s.f,{color:"secondary"})}):x?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.f,{avatar:(0,o.f)(g?.media),editable:!1,entity:{id:x.id,description:g?.name,name:x.name},entityName:"Location",linkTitleTo:`/dashboard/properties/view?id=${x.id}`}),(0,t.jsx)(c.f,{contactUser:I}),b&&(0,t.jsx)(m.f,{address:b.address,edit:!1,entity:"Location",entityId:x.id,id:b.id,showMap:!0,title:"Address",type:"registered"}),j&&(0,t.jsx)(m.f,{address:j.address,edit:!1,entity:"Location",entityId:x.id,id:j.id,title:"Invoice address",type:"invoice"})]}):null}},946894,757157,e=>{var t=e.i(159080);let i=t.f`
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
`;e.s(["f",0,i],946894);var r=e.i(391398),n=e.i(871931),a=e.i(760981),s=e.i(302966),o=e.i(280445),d=e.i(115871),l=e.i(747112),u=e.i(813843),c=e.i(740790),m=e.i(65295);let p=(0,o.f)(n.f)`
  background-color: ${e=>{let{theme:t}=e;return t.palette.background.paper}};
  box-shadow: rgba(53, 64, 82, 0.05) 0 0 14px 0;
  border-radius: 5px;
  border: none;
  margin-bottom: 0.5rem;

  & {
    border: none !important;
  }
`;e.s(["f",0,e=>{let{contactUser:t}=e;return(0,r.jsxs)(p,{defaultExpanded:!0,children:[(0,r.jsx)(s.f,{expandIcon:(0,r.jsx)(l.f,{}),children:(0,r.jsx)(u.f,{direction:"row",alignItems:"center",spacing:1,children:(0,r.jsx)(d.f,{typography:"h6",children:"Contact"})})}),(0,r.jsx)(a.f,{sx:{pt:0},children:(0,r.jsxs)(c.f,{container:!0,spacing:1,children:[(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Account"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.accountName||"Not Specified"})]}),(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Name"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.fullName||"Not Specified"})]}),(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Position"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.position||"Not Specified"})]}),(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Phone number"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.phone||"Not Specified"})]}),(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Country"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.country||"Not Specified"})]}),(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Date added"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.createdAt?(0,m.f)(t?.createdAt):"Not Specified"})]}),(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Permits required"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.permitsRequired?"Yes":"No"})]}),t?.xeroContactId&&(0,r.jsxs)(c.f,{item:!0,xs:12,sm:6,children:[(0,r.jsx)(d.f,{color:"text.secondary",children:"Xero contact ID"}),(0,r.jsx)(d.f,{color:"text.primary",children:t?.xeroContactId})]})]})})]})}],757157)},741850,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),a=e.r(391398);i.default=(0,n.default)((0,a.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2m6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56M12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96M4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56m2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8M12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96M14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2m.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56M16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2z"}),"Language")}])})();