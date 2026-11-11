(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,257764,e=>{var a=e.i(48441);let l=[{label:"Job status changes",value:"jobStatusChanges"},{label:"Quote status changes",value:"quoteStatusChanges"},{label:"Date is",value:"dateIs"},{label:"Job event occurs",value:"jobEventOccurs"},{label:"Quote event occurs",value:"quoteEventOccurs"},{label:"Time based event (Job)",value:"timeBasedEventJob"},{label:"Time based event (Quote)",value:"timeBasedEventQuote"},{label:"Time based event (Compliance)",value:"timeBasedEventCompliance"},{label:"Account event occurs",value:"accountEventOccurs"},{label:"Preset system emails",value:"presetSystemEmails"},{label:"Location event occurs",value:"locationEventOccurs"}],t={jobStatusChanges:a.w,quoteStatusChanges:a.p},o=[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"},{label:"Tenant",value:"tenant"}],r=[{value:"daysAfterTriggerDay",label:"Days after trigger day"},{value:"onTriggerDate",label:"On trigger date"},{value:"chooseDate",label:"Choose a date"}],s={retentionRelease:[{value:"onReleaseDate",label:"On release date"}]},n=[{label:"Issue reported",value:"issueReported"},{label:"Job approved",value:"jobApproved"},{label:"Job rejected",value:"jobRejected"},{label:"Job raised",value:"jobRaised"},{label:"Job was reposted",value:"jobReposted"},{label:"Supplier receives job offer",value:"supplierReceivesJobOffer"},{label:"Job is cancelled by supplier",value:"jobCancelledBySupplier"},{label:"Job offer input is updated by supplier",value:"jobOfferInputUpdated"},{label:"Job timing changed",value:"jobTimingChanged"},{label:"Job reassigned to new supplier",value:"jobReassignedToNewSupplier"},{label:"Job estimated duration was changed",value:"jobEstimatedDurationChanged"},{label:"Job priority changed",value:"jobPriorityChanged"},{label:"Job offer accepted",value:"jobOfferAccepted"},{label:"Job offer rejected",value:"jobOfferRejected"},{label:"Job correct timing",value:"jobCorrectTiming"},{label:"Job price / service changed",value:"jobPriceServiceChanged"},{label:"Travel timer started",value:"jobOnMyWay"},{label:"Job started",value:"jobStarted"},{label:"Remedial quote raised",value:"remedialQuoteRaised"},{label:"Media uploaded to job",value:"mediaUploadedToJob"},{label:"Job is waiting for threshold approval",value:"waitingThresholdApproval"},{label:"Threshold is approved",value:"thresholdApproved"},{label:"Threshold is rejected",value:"thresholdRejected"},{label:"Uplift is requested",value:"upliftRequested"},{label:"Admin sends uplift to customer",value:"adminSendsUpliftToCustomer"},{label:"Uplift is approved",value:"upliftApproved"},{label:"Uplift is rejected",value:"upliftRejected"},{label:"Job completed",value:"jobCompleted"},{label:"Signature captured",value:"signatureCaptured"},{label:"Signature not captured",value:"signatureNotCaptured"},{label:"Job failed",value:"jobFailed"},{label:"Job failure resolved",value:"jobFailureResolved"},{label:"Pending expense status added",value:"pendingExpenseAdded"},{label:"Revert job to prior status",value:"revertJobStatus"},{label:"Job report submitted",value:"jobReportSubmitted"},{label:"Job validated",value:"jobValidated"},{label:"Job unvalidated",value:"jobUnvalidated"},{label:"Send purchase order option selected",value:"purchaseOrderSent"},{label:"Job report sent",value:"jobReportSent"},{label:"Job finances updated",value:"jobFinancesUpdated"},{label:"Invoice sent to customer",value:"invoiceSentCustomer"},{label:"Invoice sent to supplier",value:"invoiceSentSupplier"},{label:"Supplier invoice added",value:"supplierInvoiceAdded"},{label:"Customer paid",value:"jobCustomerPaid"},{label:"Supplier paid",value:"jobSupplierPaid"},{label:"Credit note created",value:"creditNoteCreated"},{label:"Proforma invoice created",value:"proformaInvoiceCreated"},{label:"Job is placed on hold",value:"onHoldJob"},{label:"Job disputed",value:"jobDisputed"},{label:"Job dispute resolved",value:"jobDisputeResolved"},{label:"Job closed",value:"jobClosed"},{label:"Job reopened",value:"jobReopened"},{label:"Supplier contract added",value:"supplierContractAdded"},{label:"Supplier job spend threshold breached",value:"supplierThresholdBreached"},{label:"Customer job spend threshold breached",value:"customerThresholdBreached"},{label:"Access information has been updated",value:"accessInformationUpdated"},{label:"Job description has been updated",value:"jobDescriptionUpdated"},{label:"SLA at risk tag applied (Job report)",value:"workOrderSlaAtRiskTagAppliedJobReport"},{label:"SLA at risk tag applied (On site)",value:"workOrderSlaAtRiskTagAppliedOnSite"},{label:"SLA breach tag applied (Job report)",value:"workOrderSlaBreachTagAppliedJobReport"},{label:"SLA breach tag applied (On site)",value:"workOrderSlaBreachTagAppliedOnSite"},{label:"SLA at risk tag removed (Job report)",value:"workOrderSlaAtRiskTagRemovedJobReport"},{label:"SLA at risk tag removed (On site)",value:"workOrderSlaAtRiskTagRemovedOnSite"},{label:"SLA breach tag removed (Job report)",value:"workOrderSlaBreachTagRemovedJobReport"},{label:"SLA breach tag removed (On site)",value:"workOrderSlaBreachTagRemovedOnSite"}],i=[{label:"Quote raised",value:"quoteRaised"},{label:"Quote requested",value:"quoteRequested"},{label:"Quote declined",value:"quoteDeclined"},{label:"Quotation submitted",value:"quotationSubmitted"},{label:"Quotation sent to customer",value:"quotationSentToCustomer"},{label:"Quote accepted",value:"quoteAccepted"},{label:"Quote rejected",value:"quoteRejected"},{label:"Quote priority changed",value:"quotePriorityChanged"},{label:"Quote is waiting for threshold approval",value:"quoteWaitingThresholdApproval"},{label:"Quote threshold is approved",value:"quoteThresholdApproved"},{label:"Quote threshold is rejected",value:"quoteThresholdRejected"},{label:"Site visit option selected",value:"siteVisitOptionSelected"},{label:"SLA at risk tag applied",value:"quoteSlaAtRiskTagApplied"},{label:"SLA breach tag applied",value:"quoteSlaBreachTagApplied"},{label:"SLA at risk tag removed",value:"quoteSlaAtRiskTagRemoved"},{label:"SLA breach tag removed",value:"quoteSlaBreachTagRemoved"},{label:"Outstanding quote tag added to asset",value:"outstandingQuoteAssetTagApplied"},{label:"Outstanding quote tag removed from asset",value:"outstandingQuoteAssetTagRemoved"}],u=[{label:"Supplier not assigned",value:"supplierNotAssigned"},{label:"Permits not added",value:"permitsNotAdded"},{label:"Job is not finished",value:"jobNotFinished"},{label:"Job offer not allocated",value:"jobOfferNotAllocated"},{label:"Upcoming job",value:"upcomingJob"},{label:"Job not started / late arrival",value:"jobNotStartedLateArrival"},{label:"SLA breached (On site time)",value:"slaBreachedOnSiteTime"},{label:"Long job",value:"longJob"},{label:"Job report not received",value:"jobReportNotReceived"},{label:"Job report not sent to customer",value:"jobReportNotSentToCustomer"},{label:"Retention release",value:"retentionRelease"}],d=[{label:"Quote is not sent",value:"quoteNotSent"},{label:"Quote is not completed",value:"quoteNotCompleted"},{label:"Quote SLA breach",value:"quoteSLABreach"}],c=[{label:"Compliance item expiry",value:"complianceItemExpiry"}],b=[{label:"Supplier created",value:"supplierCreated"},{label:"Customer created",value:"customerCreated"},{label:"User created",value:"userAddedToAccount"},{label:"User password reset",value:"userPasswordReset"},{label:"New direct message",value:"newDirectMessage"},{label:"New message",value:"userReceivesMessage"},{label:"New task assigned",value:"userReceivesTask"},{label:"New comment for Admins",value:"newCommentAddedAdmin"},{label:"New comment for Suppliers",value:"newCommentAddedSupplier"},{label:"New comment for Customers",value:"newCommentAddedCustomer"}],v=[{label:"System - Invoice sent to customer",value:"system-jobInvoiceSentCustomer"},{label:"System - Non logged user reported an issue",value:"system-reportedByNonLoggedUser"},{label:"System - Invoice sent to supplier",value:"system-jobInvoiceSentSupplier"},{label:"System - Send Quote",value:"system-emailQuoteSent"},{label:"System - Job report sent",value:"system-jobReportSent"}],p=[{label:"Contract expiry",value:"contractExpiry"},{label:"Access information has been updated",value:"accessInformationLocationUpdated"}],m=["accessInformationLocationUpdated"],f={dateIs:["admin","customer","supplier"]},g=["dateIs"],h=["dateIs"],w=[],A=e=>g.some(a=>a===e),y={dateIs:["assignedUser"]},S=Object.keys(t),C=["jobEventOccurs","jobStatusChanges","timeBasedEventJob"],k=["timeBasedEventJob","timeBasedEventQuote","timeBasedEventCompliance","locationEventOccurs"],j=["dateIs","timeBasedEventJob","timeBasedEventQuote","timeBasedEventCompliance"];e.s(["H",0,m,"o",0,{dateIs:["sendEmail"],jobStatusChanges:["createTask"],quoteStatusChanges:["createTask"],jobEventOccurs:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],quoteEventOccurs:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],timeBasedEventJob:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],timeBasedEventQuote:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],timeBasedEventCompliance:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],accountEventOccurs:["sendEmail","createBrowserNotification","createPushNotification"],presetSystemEmails:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],locationEventOccurs:["sendEmail","createBrowserNotification","createPushNotification"]},"a",0,{supplierCreated:["sendEmail"],customerCreated:["sendEmail"],userAddedToAccount:["sendEmail"],userPasswordReset:["sendEmail"],userReceivesMessage:["sendEmail","createBrowserNotification","createPushNotification"],newDirectMessage:["sendEmail","createBrowserNotification","createPushNotification"],userReceivesTask:["sendEmail"],complianceItemExpiry:["sendEmail","createTask","createBrowserNotification","createPushNotification"],newCommentAddedAdmin:["sendEmail","createBrowserNotification","createPushNotification"],newCommentAddedSupplier:["sendEmail","createBrowserNotification","createPushNotification"],newCommentAddedCustomer:["sendEmail","createBrowserNotification","createPushNotification"],supplierContractAdded:["sendEmail","createBrowserNotification","createPushNotification"]},"l",0,(e,a)=>!y[a]?.some(a=>a===e),"m",0,[{label:"today",value:"today"},{label:"tomorrow",value:"tomorrow"},{label:"yesterday",value:"yesterday"},{label:"last 7 days",value:"lastSevenDays"},{label:"last month",value:"lastMonth"},{label:"last 30 days",value:"lastThirtyDays"},{label:"last 90 days",value:"lastNinetyDays"},{label:"last year",value:"lastYear"},{label:"in next 7 days",value:"inNextSevenDays"},{label:"in this month",value:"inThisMonth"},{label:"in next month",value:"inNextMonth"},{label:"in next 30 days",value:"inNextThirtyDays"},{label:"in next 90 days",value:"inNextNinetyDays"},{label:"in next year",value:"inNextYear"}],"b",0,[{label:"Reactive",value:"reactive"},{label:"PPM",value:"ppm"}],"j",0,[{label:"Account manager is",value:"accountManager"},{label:"Priority is",value:"priority"},{label:"Customer is",value:"customer"},{label:"Supplier is",value:"supplier"},{label:"Location is",value:"location"},{label:"Short job description is",value:"shortJobDescription"},{label:"Service is",value:"service"},{label:"Job date is",value:"jobDateIs"},{label:"Job type is",value:"jobTypeIs"},{label:"Job status is",value:"jobStatusIs"},{label:"Quote status is",value:"quoteStatusIs"},{label:"Quote summary is",value:"quoteSummaryIs"},{label:"Quote due date (Customer) is",value:"quoteDueCustomer"},{label:"Quote due date (Supplier) is ",value:"quoteDueSupplier"},{label:"Category (parent) is",value:"complianceCategoryParent"},{label:"Compliance category is",value:"complianceCategory"},{label:"Compliance frequency is",value:"complianceFrequency"},{label:"Compliance last completed is",value:"complianceLastCompleted"},{label:"Compliance next job is",value:"complianceNextJob"},{label:"Compliance status is",value:"complianceStatus"},{label:"Location manager is",value:"locationManager"},{label:"On hold reason is",value:"onHoldReasonIs"}],"p",0,f,"c",0,[{value:"customer",label:"Link to Customer page"},{value:"supplier",label:"Link to Supplier page"},{value:"location",label:"Link to Location page"},{value:"job",label:"Link to Quote or Work Order page"},{value:"customURL",label:"Custom URL"}],"G",0,[{value:"jobNumber",label:"Job ID"},{value:"jobType",label:"Job type"},{value:"invoiceNumber",label:"Invoice number"},{value:"invoiceType",label:"Invoice type"},{value:"invoiceAccountEntryStatus",label:"Invoice status"},{value:"invoiceAccountEntryDebit",label:"Invoice amount"},{value:"invoiceIssueDate",label:"Issue date"},{value:"invoiceAccountEntryOutstandingDays",label:"Outstanding days"},{value:"customerName",label:"Customer"},{value:"customerManagerFullName",label:"Account Manager"},{value:"supplierName",label:"Supplier"},{value:"locationName",label:"Location"},{value:"locationManagerFullName",label:"Location Manager"},{value:"addressMainName",label:"Address"},{value:"addressMainPostCode",label:"Post code"},{value:"addressInvoiceName",label:"Invoice address"},{value:"sublocationName",label:"Sublocation"},{value:"jobAssets",label:"Asset(s)"},{value:"jobPriorityName",label:"Priority"},{value:"jobStatus",label:"Status"},{value:"jobReportStatus",label:"Job status (report)"},{value:"supplierComments",label:"Supplier comments"},{value:"relatedJobs",label:"Related job(s)"},{value:"slaBreached",label:"SLA breached"},{value:"jobTotal",label:"Job total"},{value:"dueFromCustomer",label:"Due from customer"},{value:"outstandingAmount",label:"Outstanding amount"},{value:"jobNetRevenue",label:"Net revenue"},{value:"supplierAmount",label:"Supplier total"},{value:"jobTotalNet",label:"Job total (Net)"},{value:"supplierAmountNet",label:"Supplier total (Net)"},{value:"jobExpensesCustomer",label:"Expenses (Customer)"},{value:"jobExpensesSupplier",label:"Expenses (Supplier)"},{value:"jobServiceName",label:"Service line"},{value:"jobChargingMethod",label:"Charging method"},{value:"jobHourlyRate",label:"Hourly rate"},{value:"jobDate",label:"Job date"},{value:"jobTime",label:"Job time"},{value:"jobDuration",label:"Job duration"},{value:"quoteDate",label:"Quote date"},{value:"quoteDueDate",label:"Quote due date"},{value:"jobQuoteRange",label:"Quote range"},{value:"jobReference",label:"Customer reference"},{value:"jobReferenceSupplier",label:"Supplier reference"},{value:"jobDescription",label:"Job description"},{value:"jobShortDescription",label:"Short description"},{value:"jobSource",label:"Source"},{value:"costCategoryName",label:"Cost category"},{value:"managerFullName",label:"Assigned to (Admin)"},{value:"customerUserFullName",label:"Assigned to (Customer)"},{value:"supplierUserFullName",label:"Assigned to (Supplier)"},{value:"jobRaisedCreatedAt",label:"Job created"},{value:"jobRaisedUser",label:"Created by"},{value:"jobCustomerPaidCreatedAt",label:"Paid date"},{value:"jobCompletedCreatedAt",label:"Completed date"},{value:"jobInvoicedCreatedAt",label:"Invoiced date"},{value:"jobClosedCreatedAt",label:"Closed date"},{value:"parentChild",label:"Parent/Child"},{value:"parentJob",label:"Parent job"},{value:"jobValidated",label:"Job validated"},{value:"supplierInvoiceUploaded",label:"Supplier invoice uploaded"}],"L",0,["jobEventOccurs","quoteEventOccurs","timeBasedEventJob","timeBasedEventQuote","timeBasedEventCompliance","accountEventOccurs","presetSystemEmails","locationEventOccurs"],"N",0,{supplierNotAssigned:[{label:"before",value:"before"},{label:"after",value:"after"}],permitsNotAdded:[{label:"before",value:"before"},{label:"after",value:"after"}],jobNotFinished:[{label:"after",value:"after"}],jobOfferNotAllocated:[{label:"after",value:"after"}],upcomingJob:[{label:"before",value:"before"},{label:"after",value:"after"}],jobNotStartedLateArrival:[{label:"before",value:"before"},{label:"after",value:"after"}],slaBreachedOnSiteTime:[{label:"before",value:"before"},{label:"after",value:"after"}],longJob:[{label:"after",value:"after"}],jobReportNotReceived:[{label:"after",value:"after"}],jobReportNotSentToCustomer:[{label:"after",value:"after"}],retentionRelease:[{label:"before",value:"before"},{label:"after",value:"after"}],quoteNotSent:[{label:"before",value:"before"},{label:"after",value:"after"}],quoteNotCompleted:[{label:"before",value:"before"},{label:"after",value:"after"}],quoteSLABreach:[{label:"before",value:"before"},{label:"after",value:"after"}],complianceItemExpiry:[{label:"before",value:"before"},{label:"after",value:"after"}],contractExpiry:[{label:"before",value:"before"},{label:"after",value:"after"}],accessInformationLocationUpdated:[{label:"before",value:"before"},{label:"after",value:"after"}]},"M",0,{contractExpiry:{min:1,unit:"days"}},"W",0,{supplierNotAssigned:"scheduled start time",permitsNotAdded:"scheduled start time",jobNotFinished:"timer started",jobOfferNotAllocated:"offer sent time",upcomingJob:"scheduled start time",jobNotStartedLateArrival:"supplier arrival time",slaBreachedOnSiteTime:"SLA breach time",longJob:"timer started",jobReportNotReceived:"completed time",jobReportNotSentToCustomer:"completed time",retentionRelease:"release date",quoteNotSent:"quote due by customer",quoteNotCompleted:"quote due by customer",quoteSLABreach:"SLA breach time",complianceItemExpiry:"expiry date",contractExpiry:"scheduled end date",accessInformationLocationUpdated:"access information update time"},"$",0,k,"n",0,S,"V",0,e=>[...r,...e&&e in s?s[e]:[]],"v",0,e=>h.some(a=>a===e),"D",0,(e,a)=>j.some(a=>a===e)||"locationEventOccurs"===e&&"contractExpiry"===a,"g",0,(e,a)=>{let l=f[a];return!l||!o.some(a=>{let{value:l}=a;return l===e})||l.some(a=>a===e)},"O",0,C,"w",0,(e,a)=>k.some(a=>a===e)&&!m.some(e=>e===a),"Q",0,e=>C.some(a=>a===e),"r",0,{supplierContractAdded:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]},contractExpiry:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]},accessInformationLocationUpdated:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]},userReceivesTask:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Assigned user",value:"assignedUser"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Assigned user",value:"assignedUser"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]}},"_",0,{newCommentAddedAdmin:[{label:"Admin",value:"admin"}],newCommentAddedSupplier:[{label:"Supplier",value:"supplier"}],newCommentAddedCustomer:[{label:"Customer",value:"customer"}],contractExpiry:[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"}],accessInformationLocationUpdated:[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"}],complianceItemExpiry:[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Tenant",value:"tenant"}]},"P",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],"R",0,A,"I",0,[{value:"customer",label:"Customer"},{value:"supplier",label:"Supplier"},{value:"location",label:"Location"},{value:"job",label:"Quote or work order id"},{value:"externalURL",label:"External URL"}],"t",0,b,"q",0,[{label:"Day",value:"day"},{label:"Monday",value:"monday"},{label:"Tuesday",value:"tuesday"},{label:"Wednesday",value:"wednesday"},{label:"Thursday",value:"thursday"},{label:"Friday",value:"friday"},{label:"Saturday",value:"saturday"},{label:"Sunday",value:"sunday"},{label:"Weekday",value:"weekday"},{label:"Weekend day",value:"weekend"}],"S",0,[{label:"Every",value:"every"},{label:"First",value:"first"},{label:"Second",value:"second"},{label:"Third",value:"third"},{label:"Fourth",value:"fourth"},{label:"Last",value:"last"}],"J",0,[{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],"T",0,{jobEventOccurs:n,quoteEventOccurs:i,timeBasedEventJob:u,timeBasedEventQuote:d,timeBasedEventCompliance:c,accountEventOccurs:b,presetSystemEmails:v,locationEventOccurs:p},"y",0,[{label:"before",value:"before"},{label:"after",value:"after"}],"Y",0,[{label:"days",value:"days"},{label:"hours",value:"hours"}],"X",0,n,"F",0,[{label:"Reactive",value:"reactive"},{label:"PPM",value:"ppm"}],"u",0,{supplierContractAdded:["ppm"],workOrderSlaAtRiskTagAppliedJobReport:["reactive"],workOrderSlaAtRiskTagAppliedOnSite:["reactive"],workOrderSlaBreachTagAppliedJobReport:["reactive"],workOrderSlaBreachTagAppliedOnSite:["reactive"],workOrderSlaAtRiskTagRemovedJobReport:["reactive"],workOrderSlaAtRiskTagRemovedOnSite:["reactive"],workOrderSlaBreachTagRemovedJobReport:["reactive"],workOrderSlaBreachTagRemovedOnSite:["reactive"]},"z",0,e=>l.find(a=>{let{value:l}=a;return l===e})?.label??"this trigger","h",0,p,"B",0,l,"s",0,v,"x",0,i,"A",0,t,"K",0,e=>t[e??""],"U",0,c,"Z",0,u,"C",0,d,"d",0,g,"f",0,(e,a)=>(!A(e)||!a)&&!w.some(a=>a===e),"E",0,o,"e",0,[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Assigned user",value:"assignedUser"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],"i",0,[{label:"Create a task",value:"createTask"},{label:"Send an email",value:"sendEmail"},{label:"Create browser notification",value:"createBrowserNotification"},{label:"Add comment to context window",value:"addCommentToContextWindow"},{label:"Create app notification",value:"createPushNotification"}]])},185242,e=>{var a=e.i(191788),l=e.i(190077),t=e.i(631328),o=e.i(105118),r=e.i(3878);e.s(["f",0,function(e,s){let{queryKey:n,method:i="GET",headers:u,body:d,params:c,pathParams:b,baseUrl:v,skip:p=!1,pollInterval:m,stopPollingOnError:f=!0,onCompleted:g,onError:h}=s,w=(0,r.r)(),A=(0,a.useRef)(null),y=(0,a.useRef)(!0),{fetchQuery:S,unregisterQuery:C,registerQuery:k}=w,j=(0,a.useMemo)(()=>(0,l.f)(),[]),[R,O]=(0,a.useState)(void 0),[N,T]=(0,a.useState)(null),[E,J]=(0,a.useState)(!1),[I,U]=(0,a.useState)(0),x=(0,t.s)(p),q=(0,t.s)(d),B=(0,t.s)(c),W=(0,t.s)(b),$=(0,t.s)(I),L=(0,a.useRef)(0),_=(0,a.useRef)(null),P=(0,a.useRef)(g),M=(0,a.useRef)(h);(0,a.useEffect)(()=>{P.current=g,M.current=h});let D=(0,a.useCallback)(async()=>{A.current?.abort();let a=new AbortController;A.current=a,T(null),J(!0);let l=++L.current,t=!1;try{let t=await S(e,{baseUrl:v,method:i,headers:u,body:d,params:c,pathParams:b,signal:a.signal});l===L.current&&(O(t),P.current?.(t))}catch(o){if(o instanceof Error&&"AbortError"===o.name){t=!0,A.current===a&&J(!1);return}let e=o instanceof Error?o:Error("An unknown error occurred");l===L.current&&(T(e),M.current?.(e))}finally{t||l!==L.current||J(!1)}},[v,d,S,u,i,c,b,e]),F=(0,a.useRef)(D);(0,a.useEffect)(()=>{F.current=D}),(0,a.useEffect)(()=>(k(n,j,()=>U(e=>e+1),i),()=>{C(n,j)}),[j,i,n,k,C]),(0,a.useEffect)(()=>{if(_.current&&(clearTimeout(_.current),_.current=null,y.current=!1),p){x!==p&&(A.current?.abort(),J(!1));return}!y.current&&(0,o.f)(q,d)&&(0,o.f)(B,c)&&(0,o.f)(W,b)&&$===I&&x===p||(D(),y.current=!1)},[d,D,c,b,q,B,W,$,x,I,p]),(0,a.useEffect)(()=>()=>{_.current=setTimeout(()=>{_.current=null,A.current?.abort()}),y.current=!0},[]);let Q=!!(m&&m>0&&!p&&!(f&&N));return(0,a.useEffect)(()=>{if(!Q)return;let e=setInterval(()=>{F.current()},m);return()=>{clearInterval(e)}},[Q,m]),{data:R,error:N,isLoading:E,isError:!!N,refetch:()=>U(e=>e+1)}}])},495185,e=>{var a=e.i(391398),l=e.i(280445),t=e.i(800884),o=e.i(492448);let r=(0,l.f)(t.f,{shouldForwardProp:e=>"kind"!==e})(e=>{let{theme:a,kind:l}=e,t=(0,o.Z)(a,l);return{backgroundColor:t.background,color:t.text,fontWeight:700,borderRadius:6,height:24,textTransform:"uppercase",letterSpacing:"0.04em",fontSize:11}});e.s(["f",0,e=>{let{kind:l,label:t,size:o="small"}=e;return(0,a.jsx)(r,{kind:l,label:t,size:o,"data-testid":"status-badge"})}])},290918,e=>{var a=e.i(257764);let l="customFieldValueChanges",t="Custom field value changes",o=[...a.B,{label:t,value:l}];e.s(["L",0,l,"v",0,"customFieldValueChanged","w",0,t,"X",0,"Pick the custom field whose change starts this workflow.","h",0,o,"r",0,e=>o.some(a=>a.value===e),"y",0,e=>{let a=e?.definitionId;return"number"==typeof a&&Number.isInteger(a)&&a>0?a:null}])},3143,e=>{var a=e.i(159080),l=e.i(988204);let t=a.f`
  fragment WorkflowStepDefinitionFields on WorkflowStepDefinition {
    id
    workflowId
    position
    name
    actionType
    actionConfig
    sendTo
    timingMode
    timingDelayValue
    timingDelayUnit
    timingDependsOnStepId
    timingSpecificTime
    timingMeta
    runConditions
    condNotMetBehaviour
    completionRule
    failureBehaviour
    enabled
    createdAt
    updatedAt
  }
`,o=a.f`
  fragment WorkflowRunFields on WorkflowRun {
    id
    workflowId
    workflowVersionId
    adminId
    status
    triggerEventName
    entityRefs
    summary
    startedAt
    finishedAt
    error
    cancelledAt
    cancelledByUserId
    createdAt
    updatedAt
  }
`,r=a.f`
  fragment WorkflowStepRunFields on WorkflowStepRun {
    id
    workflowRunId
    stepDefinitionId
    position
    status
    scheduledFor
    dispatchedAt
    completedAt
    timedOutAt
    actionMessageId
    output
    error
    attempts
    skipReason
    createdAt
    updatedAt
  }
`,s=a.f`
  query GetAutomationOwners($where: Workflow_bool_exp = {}, $q: String = "%%", $limit: Int = 50) {
    owners: Workflow(
      where: {
        _and: [
          $where
          {
            AutomationOwner: { _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }] }
          }
        ]
      }
      distinct_on: automationOwnerUserId
      order_by: { automationOwnerUserId: asc }
      limit: $limit
    ) {
      id
      user: AutomationOwner {
        id
        nameFirst
        nameLast
      }
    }
    creators: Workflow(
      where: {
        _and: [
          $where
          { automationOwnerUserId: { _is_null: true } }
          { User: { _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }] } }
        ]
      }
      distinct_on: userId
      order_by: { userId: asc }
      limit: $limit
    ) {
      id
      user: User {
        id
        nameFirst
        nameLast
      }
    }
  }
`,n=a.f`
  query GetAutomationsV2(
    $where: Workflow_bool_exp
    $limit: Int = 50
    $offset: Int = 0
    $order: [Workflow_order_by!] = [{ updatedAt: desc }]
  ) {
    automations: Workflow(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      ...WorkflowFields
      schemaVersion
      description
      rerunPolicy
      currentVersionId
      archivedAt
      automationOwnerUserId
      fired
      owner: AutomationOwner {
        id
        nameFirst
        nameLast
      }
      creator: User {
        id
        nameFirst
        nameLast
      }
      stepCount: Steps_aggregate(where: { position: { _gte: 1 } }) {
        aggregate {
          count
        }
      }
      lastRun: Runs(limit: 1, order_by: { createdAt: desc }) {
        id
        status
        createdAt
        finishedAt
        summary
      }
    }
    meta: Workflow_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
  ${l.U}
`,i=a.f`
  query GetAutomationV2($id: Int!) {
    automations: Workflow(where: { id: { _eq: $id }, schemaVersion: { _eq: 2 } }) {
      ...WorkflowFields
      schemaVersion
      description
      rerunPolicy
      currentVersionId
      archivedAt
      automationOwnerUserId
      unpublishedChanges
      steps: Steps(where: { position: { _gte: 1 } }, order_by: { position: asc }) {
        ...WorkflowStepDefinitionFields
      }
      conditions: WorkflowConditions {
        id
        isTrigger
        trigger
        condition
      }
    }
  }
  ${l.U}
  ${t}
`,u=a.f`
  query GetWorkflowRuns(
    $where: WorkflowRun_bool_exp
    $limit: Int = 50
    $offset: Int = 0
    $order: [WorkflowRun_order_by!] = [{ createdAt: desc }, { id: desc }]
  ) {
    runs: WorkflowRun(where: $where, limit: $limit, offset: $offset, order_by: $order) {
      ...WorkflowRunFields
      workflow: Workflow {
        id
        title
      }
    }
    meta: WorkflowRun_aggregate(where: $where) {
      aggregate {
        totalCount: count
      }
    }
  }
  ${o}
`,d=a.f`
  query GetWorkflowRun($id: bigint!) {
    run: WorkflowRun_by_pk(id: $id) {
      ...WorkflowRunFields
      workflow: Workflow {
        id
        title
      }
      stepRuns: StepRuns(order_by: { position: asc }) {
        ...WorkflowStepRunFields
        stepDefinition: StepDefinition {
          id
          name
          actionType
          position
        }
      }
    }
  }
  ${o}
  ${r}
`,c=a.f`
  query GetAutomationOptions($where: Workflow_bool_exp = {}, $q: String = "%%", $limit: Int = 50) {
    automations: Workflow(
      where: { _and: [$where, { title: { _ilike: $q } }] }
      order_by: { title: asc }
      limit: $limit
    ) {
      id
      title
    }
  }
`;e.s(["I",0,n,"l",0,c,"h",0,s,"X",0,i,"G",0,d,"V",0,u],3143)},458144,e=>{let a=e=>null!=e&&e>1?{page:e}:{};e.s(["V",0,e=>({pathname:"/dashboard/automations/view",query:{id:e}}),"T",0,(e,l,t)=>({pathname:"/dashboard/automations/runs/view",query:{id:e,runId:l,...a(t)}}),"o",0,(e,l)=>({pathname:"/dashboard/automations/runs",query:{id:e,...a(l)}}),"x",0,e=>({pathname:"/dashboard/automations/test",query:{id:e}})])},856584,e=>{var a=e.i(257764),l=e.i(290918);let t=(()=>{let e={};for(let l of Object.values(a.T))for(let a of l)a.value in e||(e[a.value]=a.label);for(let a of l.h)a.value in e||(e[a.value]=a.label);return e[l.v]=l.w,e})();e.s(["f",0,e=>{if(!e)return"Not configured";if(t[e])return t[e];let a=e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/[_-]+/g," ").trim();return a.charAt(0).toUpperCase()+a.slice(1)}])},900693,e=>{let a={pending:{kind:"neutral",label:"Pending"},running:{kind:"progress",label:"Running"},completed:{kind:"success",label:"Completed"},partially_completed:{kind:"warning",label:"Completed with errors"},stopped:{kind:"neutral",label:"Stopped"},failed:{kind:"danger",label:"Failed"},cancelled:{kind:"neutral",label:"Cancelled"}},l={pending:{kind:"neutral",label:"Pending"},scheduled:{kind:"progress",label:"Scheduled"},waiting_dependency:{kind:"progress",label:"Waiting on previous step"},waiting_condition:{kind:"progress",label:"Waiting on condition"},waiting_object:{kind:"progress",label:"Waiting on update"},dispatched:{kind:"progress",label:"Dispatched"},in_progress:{kind:"progress",label:"In progress"},completed:{kind:"success",label:"Completed"},skipped:{kind:"neutral",label:"Skipped"},failed:{kind:"danger",label:"Failed"},cancelled:{kind:"neutral",label:"Cancelled"},timed_out:{kind:"danger",label:"Timed out"}};e.s(["r",0,e=>0===e.length?{content:"Workflow published"}:{severity:"warning",color:"info",duration:12e3,content:`Workflow published. Check: ${e.map(e=>e.message).join(" ")}`},"K",0,e=>{let{status:a,hasUnpublishedChanges:l}=e;if(l)return"Workflow saved. Publish to start running these changes.";switch(a){case"draft":return"Workflow saved as draft";case"active":return"Workflow saved and still active";case"paused":return"Workflow saved and still paused";default:return"Workflow saved"}},"Q",0,e=>{switch(e){case"active":return"success";case"paused":return"warning";default:return"neutral"}},"Y",0,e=>a[e]??{kind:"neutral",label:e},"d",0,e=>l[e]??{kind:"neutral",label:e}])},492448,e=>{var a=e.i(14331),l=e.i(529292);let t={success:{palette:"success",darken:.3},progress:{palette:"secondary",darken:.15},warning:{palette:"info",darken:.4},danger:{palette:"danger",darken:.15}},o={[`&.${a.f.standard}.${a.f.colorInfo}`]:{color:"text.primary"}};e.s(["U",0,o,"Z",0,(e,a)=>{let o=t[a];if(!o)return{text:e.palette.text.secondary,background:e.palette.grey[100]};let r=e.palette[o.palette].main;return{text:(0,l.J)(r,o.darken),background:(0,l.V)(r,.88)}}])},448601,e=>{e.s(["f",0,e=>"string"==typeof e&&/^\d+$/.test(e)?Number(e):null])},988204,e=>{var a=e.i(159080);let l=a.f`
  fragment WorkflowFields on Workflow {
    id
    status
    title
    actions
    fired
    sendTo
    taskTemplate
    emailTemplate
    browserNotification
    contextWindowComment
    pushNotification
    meta
    createdAt
    updatedAt
    adminId
    userId
  }
`,t=a.f`
  fragment WorkflowConditionFields on WorkflowCondition {
    id
    isTrigger
    trigger
    condition
    meta
    createdAt
    updatedAt
    workflowId
  }
`;e.s(["R",0,t,"U",0,l])},529292,e=>{e.i(350461);var a=e.i(492736),l=e.i(198548);function t(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return(0,l.f)(e,a,t)}function o(e){let l;if(e.type)return e;if("#"===e.charAt(0)){var t;let a,l;return o((t=(t=e).slice(1),a=RegExp(`.{1,${t.length>=6?2:1}}`,"g"),(l=t.match(a))&&1===l[0].length&&(l=l.map(e=>e+e)),l?`rgb${4===l.length?"a":""}(${l.map((e,a)=>a<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3).join(", ")})`:""))}let r=e.indexOf("("),s=e.substring(0,r);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(s))throw Error((0,a.f)(9,e));let n=e.substring(r+1,e.length-1);if("color"===s){if(l=(n=n.split(" ")).shift(),4===n.length&&"/"===n[3].charAt(0)&&(n[3]=n[3].slice(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(l))throw Error((0,a.f)(10,l))}else n=n.split(",");return{type:s,values:n=n.map(e=>parseFloat(e)),colorSpace:l}}function r(e){let{type:a,colorSpace:l}=e,{values:t}=e;return -1!==a.indexOf("rgb")?t=t.map((e,a)=>a<3?parseInt(e,10):e):-1!==a.indexOf("hsl")&&(t[1]=`${t[1]}%`,t[2]=`${t[2]}%`),t=-1!==a.indexOf("color")?`${l} ${t.join(" ")}`:`${t.join(", ")}`,`${a}(${t})`}function s(e){let a="hsl"===(e=o(e)).type||"hsla"===e.type?o(function(e){let{values:a}=e=o(e),l=a[0],t=a[1]/100,s=a[2]/100,n=t*Math.min(s,1-s),i=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+l/30)%12;return s-n*Math.max(Math.min(a-3,9-a,1),-1)},u="rgb",d=[Math.round(255*i(0)),Math.round(255*i(8)),Math.round(255*i(4))];return"hsla"===e.type&&(u+="a",d.push(a[3])),r({type:u,values:d})}(e)).values:e.values;return Number((.2126*(a=a.map(a=>("color"!==e.type&&(a/=255),a<=.03928?a/12.92:((a+.055)/1.055)**2.4)))[0]+.7152*a[1]+.0722*a[2]).toFixed(3))}e.s(["_",0,function(e,a){return e=o(e),a=t(a),("rgb"===e.type||"hsl"===e.type)&&(e.type+="a"),"color"===e.type?e.values[3]=`/${a}`:e.values[3]=a,r(e)},"J",0,function(e,a){if(e=o(e),a=t(a),-1!==e.type.indexOf("hsl"))e.values[2]*=1-a;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let l=0;l<3;l+=1)e.values[l]*=1-a;return r(e)},"T",0,o,"G",0,function(e,a){let l=s(e),t=s(a);return(Math.max(l,t)+.05)/(Math.min(l,t)+.05)},"V",0,function(e,a){if(e=o(e),a=t(a),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*a;else if(-1!==e.type.indexOf("rgb"))for(let l=0;l<3;l+=1)e.values[l]+=(255-e.values[l])*a;else if(-1!==e.type.indexOf("color"))for(let l=0;l<3;l+=1)e.values[l]+=(1-e.values[l])*a;return r(e)},"g",0,r])}])})();