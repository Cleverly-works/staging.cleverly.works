(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,257764,e=>{var a=e.i(48441);let t=[{label:"Job status changes",value:"jobStatusChanges"},{label:"Quote status changes",value:"quoteStatusChanges"},{label:"Date is",value:"dateIs"},{label:"Job event occurs",value:"jobEventOccurs"},{label:"Quote event occurs",value:"quoteEventOccurs"},{label:"Time based event (Job)",value:"timeBasedEventJob"},{label:"Time based event (Quote)",value:"timeBasedEventQuote"},{label:"Time based event (Compliance)",value:"timeBasedEventCompliance"},{label:"Account event occurs",value:"accountEventOccurs"},{label:"Preset system emails",value:"presetSystemEmails"},{label:"Location event occurs",value:"locationEventOccurs"}],l={jobStatusChanges:a.w,quoteStatusChanges:a.p},o=[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"},{label:"Tenant",value:"tenant"}],r=[{value:"daysAfterTriggerDay",label:"Days after trigger day"},{value:"onTriggerDate",label:"On trigger date"},{value:"chooseDate",label:"Choose a date"}],i={retentionRelease:[{value:"onReleaseDate",label:"On release date"}]},n=[{label:"Issue reported",value:"issueReported"},{label:"Job approved",value:"jobApproved"},{label:"Job rejected",value:"jobRejected"},{label:"Job raised",value:"jobRaised"},{label:"Job was reposted",value:"jobReposted"},{label:"Supplier receives job offer",value:"supplierReceivesJobOffer"},{label:"Job is cancelled by supplier",value:"jobCancelledBySupplier"},{label:"Job offer input is updated by supplier",value:"jobOfferInputUpdated"},{label:"Job timing changed",value:"jobTimingChanged"},{label:"Job reassigned to new supplier",value:"jobReassignedToNewSupplier"},{label:"Job estimated duration was changed",value:"jobEstimatedDurationChanged"},{label:"Job priority changed",value:"jobPriorityChanged"},{label:"Job offer accepted",value:"jobOfferAccepted"},{label:"Job offer rejected",value:"jobOfferRejected"},{label:"Job correct timing",value:"jobCorrectTiming"},{label:"Job price / service changed",value:"jobPriceServiceChanged"},{label:"Travel timer started",value:"jobOnMyWay"},{label:"Job started",value:"jobStarted"},{label:"Remedial quote raised",value:"remedialQuoteRaised"},{label:"Media uploaded to job",value:"mediaUploadedToJob"},{label:"Job is waiting for threshold approval",value:"waitingThresholdApproval"},{label:"Threshold is approved",value:"thresholdApproved"},{label:"Threshold is rejected",value:"thresholdRejected"},{label:"Uplift is requested",value:"upliftRequested"},{label:"Admin sends uplift to customer",value:"adminSendsUpliftToCustomer"},{label:"Uplift is approved",value:"upliftApproved"},{label:"Uplift is rejected",value:"upliftRejected"},{label:"Job completed",value:"jobCompleted"},{label:"Signature captured",value:"signatureCaptured"},{label:"Signature not captured",value:"signatureNotCaptured"},{label:"Job failed",value:"jobFailed"},{label:"Job failure resolved",value:"jobFailureResolved"},{label:"Pending expense status added",value:"pendingExpenseAdded"},{label:"Revert job to prior status",value:"revertJobStatus"},{label:"Job report submitted",value:"jobReportSubmitted"},{label:"Job validated",value:"jobValidated"},{label:"Job unvalidated",value:"jobUnvalidated"},{label:"Send purchase order option selected",value:"purchaseOrderSent"},{label:"Job report sent",value:"jobReportSent"},{label:"Job finances updated",value:"jobFinancesUpdated"},{label:"Invoice sent to customer",value:"invoiceSentCustomer"},{label:"Invoice sent to supplier",value:"invoiceSentSupplier"},{label:"Supplier invoice added",value:"supplierInvoiceAdded"},{label:"Customer paid",value:"jobCustomerPaid"},{label:"Supplier paid",value:"jobSupplierPaid"},{label:"Credit note created",value:"creditNoteCreated"},{label:"Proforma invoice created",value:"proformaInvoiceCreated"},{label:"Job is placed on hold",value:"onHoldJob"},{label:"Job disputed",value:"jobDisputed"},{label:"Job dispute resolved",value:"jobDisputeResolved"},{label:"Job closed",value:"jobClosed"},{label:"Job reopened",value:"jobReopened"},{label:"Supplier contract added",value:"supplierContractAdded"},{label:"Supplier job spend threshold breached",value:"supplierThresholdBreached"},{label:"Customer job spend threshold breached",value:"customerThresholdBreached"},{label:"Access information has been updated",value:"accessInformationUpdated"},{label:"Job description has been updated",value:"jobDescriptionUpdated"},{label:"SLA at risk tag applied (Job report)",value:"workOrderSlaAtRiskTagAppliedJobReport"},{label:"SLA at risk tag applied (On site)",value:"workOrderSlaAtRiskTagAppliedOnSite"},{label:"SLA breach tag applied (Job report)",value:"workOrderSlaBreachTagAppliedJobReport"},{label:"SLA breach tag applied (On site)",value:"workOrderSlaBreachTagAppliedOnSite"},{label:"SLA at risk tag removed (Job report)",value:"workOrderSlaAtRiskTagRemovedJobReport"},{label:"SLA at risk tag removed (On site)",value:"workOrderSlaAtRiskTagRemovedOnSite"},{label:"SLA breach tag removed (Job report)",value:"workOrderSlaBreachTagRemovedJobReport"},{label:"SLA breach tag removed (On site)",value:"workOrderSlaBreachTagRemovedOnSite"}],s=[{label:"Quote raised",value:"quoteRaised"},{label:"Quote requested",value:"quoteRequested"},{label:"Quote declined",value:"quoteDeclined"},{label:"Quotation submitted",value:"quotationSubmitted"},{label:"Quotation sent to customer",value:"quotationSentToCustomer"},{label:"Quote accepted",value:"quoteAccepted"},{label:"Quote rejected",value:"quoteRejected"},{label:"Quote priority changed",value:"quotePriorityChanged"},{label:"Quote is waiting for threshold approval",value:"quoteWaitingThresholdApproval"},{label:"Quote threshold is approved",value:"quoteThresholdApproved"},{label:"Quote threshold is rejected",value:"quoteThresholdRejected"},{label:"Site visit option selected",value:"siteVisitOptionSelected"},{label:"SLA at risk tag applied",value:"quoteSlaAtRiskTagApplied"},{label:"SLA breach tag applied",value:"quoteSlaBreachTagApplied"},{label:"SLA at risk tag removed",value:"quoteSlaAtRiskTagRemoved"},{label:"SLA breach tag removed",value:"quoteSlaBreachTagRemoved"},{label:"Outstanding quote tag added to asset",value:"outstandingQuoteAssetTagApplied"},{label:"Outstanding quote tag removed from asset",value:"outstandingQuoteAssetTagRemoved"}],u=[{label:"Supplier not assigned",value:"supplierNotAssigned"},{label:"Permits not added",value:"permitsNotAdded"},{label:"Job is not finished",value:"jobNotFinished"},{label:"Job offer not allocated",value:"jobOfferNotAllocated"},{label:"Upcoming job",value:"upcomingJob"},{label:"Job not started / late arrival",value:"jobNotStartedLateArrival"},{label:"SLA breached (On site time)",value:"slaBreachedOnSiteTime"},{label:"Long job",value:"longJob"},{label:"Job report not received",value:"jobReportNotReceived"},{label:"Job report not sent to customer",value:"jobReportNotSentToCustomer"},{label:"Retention release",value:"retentionRelease"}],d=[{label:"Quote is not sent",value:"quoteNotSent"},{label:"Quote is not completed",value:"quoteNotCompleted"},{label:"Quote SLA breach",value:"quoteSLABreach"}],c=[{label:"Compliance item expiry",value:"complianceItemExpiry"}],b=[{label:"Supplier created",value:"supplierCreated"},{label:"Customer created",value:"customerCreated"},{label:"User created",value:"userAddedToAccount"},{label:"User password reset",value:"userPasswordReset"},{label:"New direct message",value:"newDirectMessage"},{label:"New message",value:"userReceivesMessage"},{label:"New task assigned",value:"userReceivesTask"},{label:"New comment for Admins",value:"newCommentAddedAdmin"},{label:"New comment for Suppliers",value:"newCommentAddedSupplier"},{label:"New comment for Customers",value:"newCommentAddedCustomer"}],p=[{label:"System - Invoice sent to customer",value:"system-jobInvoiceSentCustomer"},{label:"System - Non logged user reported an issue",value:"system-reportedByNonLoggedUser"},{label:"System - Invoice sent to supplier",value:"system-jobInvoiceSentSupplier"},{label:"System - Send Quote",value:"system-emailQuoteSent"},{label:"System - Job report sent",value:"system-jobReportSent"}],v=[{label:"Contract expiry",value:"contractExpiry"},{label:"Access information has been updated",value:"accessInformationLocationUpdated"}],m=["accessInformationLocationUpdated"],f={dateIs:["admin","customer","supplier"]},g=["dateIs"],h=["dateIs"],y=[],w=e=>g.some(a=>a===e),S={dateIs:["assignedUser"]},A=Object.keys(l),j=["jobEventOccurs","jobStatusChanges","timeBasedEventJob"],x=["timeBasedEventJob","timeBasedEventQuote","timeBasedEventCompliance","locationEventOccurs"],k=["dateIs","timeBasedEventJob","timeBasedEventQuote","timeBasedEventCompliance"];e.s(["H",0,m,"o",0,{dateIs:["sendEmail"],jobStatusChanges:["createTask"],quoteStatusChanges:["createTask"],jobEventOccurs:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],quoteEventOccurs:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],timeBasedEventJob:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],timeBasedEventQuote:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],timeBasedEventCompliance:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],accountEventOccurs:["sendEmail","createBrowserNotification","createPushNotification"],presetSystemEmails:["sendEmail","createTask","createBrowserNotification","addCommentToContextWindow","createPushNotification"],locationEventOccurs:["sendEmail","createBrowserNotification","createPushNotification"]},"a",0,{supplierCreated:["sendEmail"],customerCreated:["sendEmail"],userAddedToAccount:["sendEmail"],userPasswordReset:["sendEmail"],userReceivesMessage:["sendEmail","createBrowserNotification","createPushNotification"],newDirectMessage:["sendEmail","createBrowserNotification","createPushNotification"],userReceivesTask:["sendEmail"],complianceItemExpiry:["sendEmail","createTask","createBrowserNotification","createPushNotification"],newCommentAddedAdmin:["sendEmail","createBrowserNotification","createPushNotification"],newCommentAddedSupplier:["sendEmail","createBrowserNotification","createPushNotification"],newCommentAddedCustomer:["sendEmail","createBrowserNotification","createPushNotification"],supplierContractAdded:["sendEmail","createBrowserNotification","createPushNotification"]},"l",0,(e,a)=>!S[a]?.some(a=>a===e),"m",0,[{label:"today",value:"today"},{label:"tomorrow",value:"tomorrow"},{label:"yesterday",value:"yesterday"},{label:"last 7 days",value:"lastSevenDays"},{label:"last month",value:"lastMonth"},{label:"last 30 days",value:"lastThirtyDays"},{label:"last 90 days",value:"lastNinetyDays"},{label:"last year",value:"lastYear"},{label:"in next 7 days",value:"inNextSevenDays"},{label:"in this month",value:"inThisMonth"},{label:"in next month",value:"inNextMonth"},{label:"in next 30 days",value:"inNextThirtyDays"},{label:"in next 90 days",value:"inNextNinetyDays"},{label:"in next year",value:"inNextYear"}],"b",0,[{label:"Reactive",value:"reactive"},{label:"PPM",value:"ppm"}],"j",0,[{label:"Account manager is",value:"accountManager"},{label:"Priority is",value:"priority"},{label:"Customer is",value:"customer"},{label:"Supplier is",value:"supplier"},{label:"Location is",value:"location"},{label:"Short job description is",value:"shortJobDescription"},{label:"Service is",value:"service"},{label:"Job date is",value:"jobDateIs"},{label:"Job type is",value:"jobTypeIs"},{label:"Job status is",value:"jobStatusIs"},{label:"Quote status is",value:"quoteStatusIs"},{label:"Quote summary is",value:"quoteSummaryIs"},{label:"Quote due date (Customer) is",value:"quoteDueCustomer"},{label:"Quote due date (Supplier) is ",value:"quoteDueSupplier"},{label:"Category (parent) is",value:"complianceCategoryParent"},{label:"Compliance category is",value:"complianceCategory"},{label:"Compliance frequency is",value:"complianceFrequency"},{label:"Compliance last completed is",value:"complianceLastCompleted"},{label:"Compliance next job is",value:"complianceNextJob"},{label:"Compliance status is",value:"complianceStatus"},{label:"Location manager is",value:"locationManager"},{label:"On hold reason is",value:"onHoldReasonIs"}],"p",0,f,"c",0,[{value:"customer",label:"Link to Customer page"},{value:"supplier",label:"Link to Supplier page"},{value:"location",label:"Link to Location page"},{value:"job",label:"Link to Quote or Work Order page"},{value:"customURL",label:"Custom URL"}],"G",0,[{value:"jobNumber",label:"Job ID"},{value:"jobType",label:"Job type"},{value:"invoiceNumber",label:"Invoice number"},{value:"invoiceType",label:"Invoice type"},{value:"invoiceAccountEntryStatus",label:"Invoice status"},{value:"invoiceAccountEntryDebit",label:"Invoice amount"},{value:"invoiceIssueDate",label:"Issue date"},{value:"invoiceAccountEntryOutstandingDays",label:"Outstanding days"},{value:"customerName",label:"Customer"},{value:"customerManagerFullName",label:"Account Manager"},{value:"supplierName",label:"Supplier"},{value:"locationName",label:"Location"},{value:"locationManagerFullName",label:"Location Manager"},{value:"addressMainName",label:"Address"},{value:"addressMainPostCode",label:"Post code"},{value:"addressInvoiceName",label:"Invoice address"},{value:"sublocationName",label:"Sublocation"},{value:"jobAssets",label:"Asset(s)"},{value:"jobPriorityName",label:"Priority"},{value:"jobStatus",label:"Status"},{value:"jobReportStatus",label:"Job status (report)"},{value:"supplierComments",label:"Supplier comments"},{value:"relatedJobs",label:"Related job(s)"},{value:"slaBreached",label:"SLA breached"},{value:"jobTotal",label:"Job total"},{value:"dueFromCustomer",label:"Due from customer"},{value:"outstandingAmount",label:"Outstanding amount"},{value:"jobNetRevenue",label:"Net revenue"},{value:"supplierAmount",label:"Supplier total"},{value:"jobTotalNet",label:"Job total (Net)"},{value:"supplierAmountNet",label:"Supplier total (Net)"},{value:"jobExpensesCustomer",label:"Expenses (Customer)"},{value:"jobExpensesSupplier",label:"Expenses (Supplier)"},{value:"jobServiceName",label:"Service line"},{value:"jobChargingMethod",label:"Charging method"},{value:"jobHourlyRate",label:"Hourly rate"},{value:"jobDate",label:"Job date"},{value:"jobTime",label:"Job time"},{value:"jobDuration",label:"Job duration"},{value:"quoteDate",label:"Quote date"},{value:"quoteDueDate",label:"Quote due date"},{value:"jobQuoteRange",label:"Quote range"},{value:"jobReference",label:"Customer reference"},{value:"jobReferenceSupplier",label:"Supplier reference"},{value:"jobDescription",label:"Job description"},{value:"jobShortDescription",label:"Short description"},{value:"jobSource",label:"Source"},{value:"costCategoryName",label:"Cost category"},{value:"managerFullName",label:"Assigned to (Admin)"},{value:"customerUserFullName",label:"Assigned to (Customer)"},{value:"supplierUserFullName",label:"Assigned to (Supplier)"},{value:"jobRaisedCreatedAt",label:"Job created"},{value:"jobRaisedUser",label:"Created by"},{value:"jobCustomerPaidCreatedAt",label:"Paid date"},{value:"jobCompletedCreatedAt",label:"Completed date"},{value:"jobInvoicedCreatedAt",label:"Invoiced date"},{value:"jobClosedCreatedAt",label:"Closed date"},{value:"parentChild",label:"Parent/Child"},{value:"parentJob",label:"Parent job"},{value:"jobValidated",label:"Job validated"},{value:"supplierInvoiceUploaded",label:"Supplier invoice uploaded"}],"L",0,["jobEventOccurs","quoteEventOccurs","timeBasedEventJob","timeBasedEventQuote","timeBasedEventCompliance","accountEventOccurs","presetSystemEmails","locationEventOccurs"],"N",0,{supplierNotAssigned:[{label:"before",value:"before"},{label:"after",value:"after"}],permitsNotAdded:[{label:"before",value:"before"},{label:"after",value:"after"}],jobNotFinished:[{label:"after",value:"after"}],jobOfferNotAllocated:[{label:"after",value:"after"}],upcomingJob:[{label:"before",value:"before"},{label:"after",value:"after"}],jobNotStartedLateArrival:[{label:"before",value:"before"},{label:"after",value:"after"}],slaBreachedOnSiteTime:[{label:"before",value:"before"},{label:"after",value:"after"}],longJob:[{label:"after",value:"after"}],jobReportNotReceived:[{label:"after",value:"after"}],jobReportNotSentToCustomer:[{label:"after",value:"after"}],retentionRelease:[{label:"before",value:"before"},{label:"after",value:"after"}],quoteNotSent:[{label:"before",value:"before"},{label:"after",value:"after"}],quoteNotCompleted:[{label:"before",value:"before"},{label:"after",value:"after"}],quoteSLABreach:[{label:"before",value:"before"},{label:"after",value:"after"}],complianceItemExpiry:[{label:"before",value:"before"},{label:"after",value:"after"}],contractExpiry:[{label:"before",value:"before"},{label:"after",value:"after"}],accessInformationLocationUpdated:[{label:"before",value:"before"},{label:"after",value:"after"}]},"M",0,{contractExpiry:{min:1,unit:"days"}},"W",0,{supplierNotAssigned:"scheduled start time",permitsNotAdded:"scheduled start time",jobNotFinished:"timer started",jobOfferNotAllocated:"offer sent time",upcomingJob:"scheduled start time",jobNotStartedLateArrival:"supplier arrival time",slaBreachedOnSiteTime:"SLA breach time",longJob:"timer started",jobReportNotReceived:"completed time",jobReportNotSentToCustomer:"completed time",retentionRelease:"release date",quoteNotSent:"quote due by customer",quoteNotCompleted:"quote due by customer",quoteSLABreach:"SLA breach time",complianceItemExpiry:"expiry date",contractExpiry:"scheduled end date",accessInformationLocationUpdated:"access information update time"},"$",0,x,"n",0,A,"V",0,e=>[...r,...e&&e in i?i[e]:[]],"v",0,e=>h.some(a=>a===e),"D",0,(e,a)=>k.some(a=>a===e)||"locationEventOccurs"===e&&"contractExpiry"===a,"g",0,(e,a)=>{let t=f[a];return!t||!o.some(a=>{let{value:t}=a;return t===e})||t.some(a=>a===e)},"O",0,j,"w",0,(e,a)=>x.some(a=>a===e)&&!m.some(e=>e===a),"Q",0,e=>j.some(a=>a===e),"r",0,{supplierContractAdded:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]},contractExpiry:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]},accessInformationLocationUpdated:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]},userReceivesTask:{admin:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Assigned user",value:"assignedUser"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],customer:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Assigned user",value:"assignedUser"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],supplier:[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}]}},"_",0,{newCommentAddedAdmin:[{label:"Admin",value:"admin"}],newCommentAddedSupplier:[{label:"Supplier",value:"supplier"}],newCommentAddedCustomer:[{label:"Customer",value:"customer"}],contractExpiry:[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"}],accessInformationLocationUpdated:[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Supplier",value:"supplier"}],complianceItemExpiry:[{label:"Admin",value:"admin"},{label:"Customer",value:"customer"},{label:"Tenant",value:"tenant"}]},"P",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],"R",0,w,"I",0,[{value:"customer",label:"Customer"},{value:"supplier",label:"Supplier"},{value:"location",label:"Location"},{value:"job",label:"Quote or work order id"},{value:"externalURL",label:"External URL"}],"t",0,b,"q",0,[{label:"Day",value:"day"},{label:"Monday",value:"monday"},{label:"Tuesday",value:"tuesday"},{label:"Wednesday",value:"wednesday"},{label:"Thursday",value:"thursday"},{label:"Friday",value:"friday"},{label:"Saturday",value:"saturday"},{label:"Sunday",value:"sunday"},{label:"Weekday",value:"weekday"},{label:"Weekend day",value:"weekend"}],"S",0,[{label:"Every",value:"every"},{label:"First",value:"first"},{label:"Second",value:"second"},{label:"Third",value:"third"},{label:"Fourth",value:"fourth"},{label:"Last",value:"last"}],"J",0,[{label:"Week",value:"week"},{label:"Month",value:"month"},{label:"Year",value:"year"}],"T",0,{jobEventOccurs:n,quoteEventOccurs:s,timeBasedEventJob:u,timeBasedEventQuote:d,timeBasedEventCompliance:c,accountEventOccurs:b,presetSystemEmails:p,locationEventOccurs:v},"y",0,[{label:"before",value:"before"},{label:"after",value:"after"}],"Y",0,[{label:"days",value:"days"},{label:"hours",value:"hours"}],"X",0,n,"F",0,[{label:"Reactive",value:"reactive"},{label:"PPM",value:"ppm"}],"u",0,{supplierContractAdded:["ppm"],workOrderSlaAtRiskTagAppliedJobReport:["reactive"],workOrderSlaAtRiskTagAppliedOnSite:["reactive"],workOrderSlaBreachTagAppliedJobReport:["reactive"],workOrderSlaBreachTagAppliedOnSite:["reactive"],workOrderSlaAtRiskTagRemovedJobReport:["reactive"],workOrderSlaAtRiskTagRemovedOnSite:["reactive"],workOrderSlaBreachTagRemovedJobReport:["reactive"],workOrderSlaBreachTagRemovedOnSite:["reactive"]},"z",0,e=>t.find(a=>{let{value:t}=a;return t===e})?.label??"this trigger","h",0,v,"B",0,t,"s",0,p,"x",0,s,"A",0,l,"K",0,e=>l[e??""],"U",0,c,"Z",0,u,"C",0,d,"d",0,g,"f",0,(e,a)=>(!w(e)||!a)&&!y.some(a=>a===e),"E",0,o,"e",0,[{label:"All users",value:"allUsers"},{label:"All contact users",value:"allContactUsers"},{label:"Assigned user",value:"assignedUser"},{label:"Account owners",value:"accountOwners"},{label:"Account managers",value:"accountManagers"}],"i",0,[{label:"Create a task",value:"createTask"},{label:"Send an email",value:"sendEmail"},{label:"Create browser notification",value:"createBrowserNotification"},{label:"Add comment to context window",value:"addCommentToContextWindow"},{label:"Create app notification",value:"createPushNotification"}]])},627657,e=>{var a=e.i(391398),t=e.i(645691),l=e.i(906133),o=e.i(718119);e.s(["f",0,e=>{let{title:r,labels:i,data:n,colors:s,action:u,height:d}=e;return(0,a.jsx)(l.f,{title:r,action:u,hasData:n.some(e=>e>0),height:d,children:(0,a.jsx)(t.K,{data:{labels:i,datasets:[{data:n,backgroundColor:s??i.map(()=>o.p),borderWidth:2,borderColor:"#fff"}]},options:{responsive:!0,maintainAspectRatio:!1,cutout:"62%",plugins:{legend:{display:!0,position:"right"}}}})})}])},424896,e=>{var a=e.i(391398),t=e.i(645691),l=e.i(906133),o=e.i(718119);e.s(["f",0,e=>{let{title:r,labels:i,data:n,color:s=o.p,valueFormatter:u,action:d,height:c}=e;return(0,a.jsx)(l.f,{title:r,action:d,hasData:n.length>0,height:c,children:(0,a.jsx)(t.R,{data:{labels:i,datasets:[{data:n,borderColor:s,backgroundColor:`${s}22`,fill:!0,tension:.3,pointRadius:3,pointBackgroundColor:s}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`  ${u?u(Number(e.parsed.y)):String(e.parsed.y)}`}}},scales:{x:{grid:{color:"transparent"}},y:{beginAtZero:!0,ticks:u?{callback:e=>u(Number(e))}:{precision:0}}}}})})}])},955379,23593,e=>{e.s(["f",0,e=>null==e?"—":`${String(Math.round(100*e))}%`],955379);var a=e.i(391398),t=e.i(813843),l=e.i(755548);let o=[{days:7,label:"Last 7 days"},{days:14,label:"Last 14 days"},{days:30,label:"Last 30 days"}];e.s(["f",0,e=>{let{days:r,onChange:i}=e;return(0,a.jsx)(t.f,{direction:"row",spacing:.5,children:o.map(e=>(0,a.jsx)(l.f,{size:"small",color:"secondary",disabled:r===e.days,sx:{textTransform:"none"},onClick:()=>i(e.days),children:e.label},e.days))})}],23593)},841166,61160,163202,39056,718119,296618,906133,480525,e=>{var a=e.i(391398),t=e.i(203828),l=e.i(432171),o=e.i(280445),r=e.i(813843),i=e.i(76381),n=e.i(936641),s=e.i(74633),u=e.i(3143),d=e.i(191788),c=e.i(115871),b=e.i(631269),p=e.i(917569),v=e.i(773831),m=e.i(624700),f=e.i(900693),g=e.i(856584),h=e.i(495185);let y=(0,o.f)("div")(()=>({display:"flex",flexDirection:"column"})),w=(0,o.f)("div")(e=>{let{theme:a,expanded:t}=e;return{display:"grid",gridTemplateColumns:"1fr 180px 1fr 184px 24px",alignItems:"center",gap:a.spacing(2),padding:a.spacing(1.5,2),borderBottom:t?"none":`1px solid ${a.palette.divider}`,cursor:"pointer",background:t?a.palette.action.hover:"transparent",transition:"background-color 120ms ease","&:hover":{backgroundColor:a.palette.action.hover}}}),S=(0,o.f)(m.default)(e=>{let{expanded:a}=e;return{transition:"transform 160ms ease",transform:a?"rotate(90deg)":"rotate(0deg)"}}),A=(0,o.f)("div")(e=>{let{theme:a}=e;return{padding:a.spacing(2,3,2.5,6),background:a.palette.action.hover,borderBottom:`1px solid ${a.palette.divider}`}}),j=(0,o.f)("div")(e=>{let{theme:a}=e;return{display:"grid",gridTemplateColumns:"140px 1fr",gap:a.spacing(1.5),alignItems:"baseline",padding:a.spacing(.4,0)}}),x=e=>{var t;let l,o,{run:i,onClick:n,showAutomation:s=!1}=e,[u,m]=(0,d.useState)(!1),x=(0,f.Y)(i.status),C=(l=(t=i).entityRefs??{},o=[],"number"==typeof l.jobId?o.push(`Job #${String(l.jobId)}`):"number"==typeof l.taskId?o.push(`Task #${String(l.taskId)}`):"number"==typeof l.quoteId?o.push(`Quote #${String(l.quoteId)}`):"number"==typeof l.complianceId?o.push(`Compliance #${String(l.complianceId)}`):"number"==typeof l.locationId&&o.push(`Location #${String(l.locationId)}`),o.push((0,g.f)(t.triggerEventName)),o.join(" · ")),N=i.startedAt??i.createdAt,R=i.finishedAt??i.cancelledAt??null,T=N&&R?function(e,a){let t="string"==typeof e?new Date(e):e,l=Math.max(0,Math.round((("string"==typeof a?new Date(a):a).getTime()-t.getTime())/1e3));if(l<60)return`${String(l)}s`;let o=Math.floor(l/60);if(o<60)return`${String(o)}m ${String(l%60)}s`;let r=Math.floor(o/60);return`${String(r)}h ${String(o%60)}m`}(N,R):null,O=()=>m(e=>!e);return(0,a.jsxs)(y,{"data-testid":`run-row-${String(i.id)}`,children:[(0,a.jsxs)(w,{expanded:u,role:"button",tabIndex:0,"aria-expanded":u,onClick:O,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),O())},children:[(0,a.jsx)(r.f,{children:s&&i.workflow?.title?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.f,{variant:"body2",fontWeight:700,children:i.workflow.title}),(0,a.jsx)(c.f,{variant:"caption",color:"text.secondary",children:C})]}):(0,a.jsx)(c.f,{variant:"body2",fontWeight:700,children:C})}),(0,a.jsx)(c.f,{variant:"caption",color:"text.secondary",children:function(e){if(null==e)return"—";let a="string"==typeof e?new Date(e):e;if(Number.isNaN(a.getTime()))return"—";let t=Math.floor((Date.now()-a.getTime())/1e3);if(t<60)return"Just now";let l=Math.floor(t/60);if(l<60)return`${String(l)}m ago`;let o=Math.floor(l/60);if(o<24)return`${String(o)}h ago`;let r=Math.floor(o/24);return r<14?`${String(r)}d ago`:a.toLocaleDateString()}(N)}),(0,a.jsx)(c.f,{variant:"body2",color:"text.secondary",sx:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i.summary??"—"}),(0,a.jsx)("div",{children:(0,a.jsx)(h.f,{kind:x.kind,label:x.label})}),(0,a.jsx)(v.f,{size:"small",color:"secondary","aria-label":u?"Collapse run details":"Expand run details",onClick:e=>{e.stopPropagation(),O()},"data-testid":`run-row-${String(i.id)}-toggle`,children:(0,a.jsx)(S,{expanded:u,fontSize:"small"})})]}),(0,a.jsx)(b.f,{in:u,unmountOnExit:!0,children:(0,a.jsxs)(A,{children:[(0,a.jsxs)(j,{children:[(0,a.jsx)(c.f,{variant:"caption",color:"text.secondary",fontWeight:600,children:"Summary"}),(0,a.jsx)(c.f,{variant:"body2",children:i.summary??"—"})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(c.f,{variant:"caption",color:"text.secondary",fontWeight:600,children:"Trigger event"}),(0,a.jsx)(c.f,{variant:"body2",children:(0,g.f)(i.triggerEventName)})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(c.f,{variant:"caption",color:"text.secondary",fontWeight:600,children:"Started"}),(0,a.jsx)(c.f,{variant:"body2",children:k(N)})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(c.f,{variant:"caption",color:"text.secondary",fontWeight:600,children:"Finished"}),(0,a.jsxs)(c.f,{variant:"body2",children:[R?k(R):"Still running",T&&` \xb7 ${T}`]})]}),Object.keys(i.entityRefs??{}).length>0&&(0,a.jsxs)(j,{children:[(0,a.jsx)(c.f,{variant:"caption",color:"text.secondary",fontWeight:600,children:"Trigger record"}),(0,a.jsx)(c.f,{variant:"body2",children:Object.entries(i.entityRefs).map(e=>{let[a,t]=e;return`${a}: ${String(t)}`}).join(" · ")})]}),n&&(0,a.jsx)(r.f,{direction:"row",sx:{mt:1.5},children:(0,a.jsx)(p.f,{component:"button",variant:"body2",onClick:e=>{e.stopPropagation(),n(i.id)},"data-testid":`run-row-${String(i.id)}-detail-link`,children:"View full run details →"})})]})})]})};function k(e){if(null==e)return"—";let a="string"==typeof e?new Date(e):e;return Number.isNaN(a.getTime())?"—":a.toLocaleString()}let C=(0,o.f)("div")(e=>{let{theme:a}=e;return{padding:a.spacing(6,3),textAlign:"center",color:a.palette.text.secondary}}),N=e=>{let{title:t,body:l,action:o,testId:r}=e;return(0,a.jsxs)(C,{"data-testid":r,children:[(0,a.jsx)(c.f,{variant:"body1",sx:{mb:.5,fontWeight:600},children:t}),(0,a.jsx)(c.f,{variant:"body2",sx:{mb:3*!!o},children:l}),o]})};e.s(["f",0,N],61160);var R=e.i(448601);let T=(0,o.f)("div")(e=>{let{theme:a}=e;return{background:a.palette.background.paper,border:`1px solid ${a.palette.divider}`,borderRadius:2*a.shape.borderRadius,overflow:"hidden"}}),O=(0,o.f)("div")(e=>{let{theme:a}=e;return{display:"grid",gridTemplateColumns:"1fr 180px 1fr 184px 24px",gap:a.spacing(2),padding:a.spacing(1.5,2),background:a.palette.action.hover,borderBottom:`1px solid ${a.palette.divider}`,fontSize:13,color:a.palette.text.primary,fontWeight:600}});e.s(["f",0,e=>{let{workflowId:o,limit:d=50,onRowClick:c}=e,b=null==o,p=(0,t.useRouter)(),v=(0,R.f)(p.query.page)??1,{data:m,previousData:f,loading:g,error:h}=(0,l.t)(u.V,{variables:{where:b?{}:{workflowId:{_eq:o}},limit:d,offset:(v-1)*d}}),y=m??f;if(g&&!y)return(0,a.jsx)(r.f,{alignItems:"center",py:6,children:(0,a.jsx)(i.f,{color:"secondary",size:24})});if(h)return(0,a.jsxs)(n.f,{severity:"error",children:["Failed to load run history: ",h.message]});let w=y?.runs??[],S=y?.meta?.aggregate?.totalCount??0;return 0===S?(0,a.jsx)(T,{"data-testid":"run-history-list",children:(0,a.jsx)(N,{title:"No runs yet",body:b?"A workflow runs each time its trigger fires while it is active. Every run appears here.":"This workflow runs each time its trigger fires while it is active. Its runs appear here.",testId:"run-history-empty"})}):(0,a.jsxs)(r.f,{children:[(0,a.jsxs)(T,{"data-testid":"run-history-list",children:[(0,a.jsxs)(O,{children:[(0,a.jsx)("span",{children:b?"Workflow":"Trigger record"}),(0,a.jsx)("span",{children:"When"}),(0,a.jsx)("span",{children:"Summary"}),(0,a.jsx)("span",{children:"Status"}),(0,a.jsx)("span",{"aria-hidden":!0})]}),w.map(e=>(0,a.jsx)(x,{run:e,showAutomation:b,onClick:c},e.id))]}),(S>d||v>1)&&(0,a.jsx)(s.B,{disabled:g,currentPage:v,totalCount:S,pageSize:d,onPageChange:e=>void p.replace({pathname:p.pathname,query:{...p.query,page:String(e)}},void 0,{shallow:!0})})]})}],841166);var I=e.i(185242);e.s(["f",0,e=>{let{workflowId:a=null,ownerId:t=null,days:l}=e,o=(0,d.useMemo)(()=>({workflowId:a,ownerId:t,days:l}),[a,t,l]);return(0,I.f)("/v2/workflow-run/stats",{queryKey:"automationV2.runStats",params:o})}],163202),e.s(["C",0,e=>{if(!e)return"—";let a=new Date(e);return Number.isNaN(a.getTime())?"—":a.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})},"_",0,e=>{let a=new Date(`${e}T00:00:00Z`);return Number.isNaN(a.getTime())?"—":a.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric",timeZone:"UTC"})},"M",0,e=>{if(null==e||!Number.isFinite(e)||e<=0)return"—";let a=Math.round(e/1e3);if(a<60)return`${String(a)}s`;let t=Math.floor(a/60);if(t<60){let e=a%60;return e?`${String(t)}m ${String(e)}s`:`${String(t)}m`}let l=Math.floor(t/60);if(l<24){let e=t%60;return e?`${String(l)}h ${String(e)}m`:`${String(l)}h`}let o=Math.round(l/24*10)/10;return`${String(o)} ${1===o?"day":"days"}`}],39056);var E=e.i(740472);E.J.register(...E.Q),E.J.defaults.font.family="Nunito-Regular, Nunito, Arial, sans-serif";let $="#0679D8",J="rgb(0, 204, 188)",U="#9AA5B1";e.s(["p",0,$,"l",0,J,"m",0,{completed:J,partially_completed:"#F5A623",running:$,pending:U,stopped:U,failed:"#E60811",cancelled:"#C7CDD4"},"n",0,{completed:"Completed",partially_completed:"Partially completed",running:"Running",pending:"Pending",stopped:"Stopped",failed:"Failed",cancelled:"Cancelled"}],718119);var W=e.i(220490),q=e.i(738251),B=e.i(539117),D=e.i(901004),L=e.i(813762);let M={week:"7 days",month:"30 days",threeMonth:"3 months",year:"1 year"},P="Nunito-Regular, Nunito, Arial, sans-serif";e.s(["f",0,e=>{let{title:t,value:l,info:o,compare:i,greaterIsBetter:n=!0}=e,[s,u]=(0,d.useState)("week");return(0,a.jsx)(W.f,{variant:"outlined",sx:{p:2,borderRadius:2,height:"100%"},children:(0,a.jsxs)(r.f,{spacing:.5,children:[(0,a.jsxs)(q.f,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(c.f,{sx:{fontSize:"1.063rem",fontFamily:P,color:"text.secondary"},children:t}),o?(0,a.jsx)(L.p,{title:o,iconSx:{fontSize:16,ml:.5,color:"#cfd9e0"}}):null]}),(0,a.jsx)(c.f,{sx:{fontSize:"1.5rem",fontFamily:P},children:l}),i?(0,a.jsxs)(q.f,{sx:{display:"flex",alignItems:"center",gap:1},children:[(()=>{if(!i)return null;let e=i.today,t=i[s];if(null==t||!Number.isFinite(t)||0===t)return(0,a.jsx)(L.l,{title:`No data for ${M[s]} ago`,children:(0,a.jsx)(c.f,{sx:{color:"#666",fontFamily:P},children:"N/A"})});let l=Math.round((e/t-1)*100);return(0,a.jsx)(L.l,{title:`Was ${String(t)} ${M[s]} ago`,children:(0,a.jsx)(c.f,{sx:{color:e===t?"#666":(n?e>t:e<t)?"#00C853":"#F24236",fontFamily:P},children:l>0?`+${String(l)}%`:`${String(l)}%`})})})(),(0,a.jsx)(B.f,{variant:"standard",color:"secondary",disableUnderline:!0,value:s,onChange:e=>u(String(e.target.value)),sx:{fontSize:13,color:"text.secondary",fontFamily:P,"& .MuiSelect-select":{py:0}},children:Object.keys(M).map(e=>(0,a.jsxs)(D.f,{value:e,children:["versus ",M[e]," ago"]},e))})]}):null]})})}],296618);var _=e.i(645691);let F=e=>{let{title:t,action:l,hasData:o=!0,height:i=300,children:n}=e;return(0,a.jsxs)(W.f,{variant:"outlined",sx:{p:2,borderRadius:2,height:"100%"},children:[(0,a.jsxs)(r.f,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{mb:1.5},children:[(0,a.jsx)(c.f,{sx:{fontSize:"1.063rem"},children:t}),l]}),(0,a.jsx)(q.f,{sx:{height:i,position:"relative"},children:o?n:(0,a.jsx)(r.f,{alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:(0,a.jsx)(c.f,{variant:"body2",color:"text.secondary",children:"No data yet"})})})]})};e.s(["f",0,F],906133),e.s(["f",0,e=>{let{title:t,labels:l,data:o,horizontal:r=!1,color:i=$,valueFormatter:n,action:s,height:u}=e,d=n?{callback:e=>n(Number(e))}:{precision:0};return(0,a.jsx)(F,{title:t,action:s,hasData:o.some(e=>e>0),height:u,children:(0,a.jsx)(_.e,{data:{labels:l,datasets:[{data:o,backgroundColor:i,borderRadius:4,maxBarThickness:30}]},options:{indexAxis:r?"y":"x",responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>{let a=r?e.parsed.x:e.parsed.y;return`  ${n?n(Number(a)):String(a)}`}}}},scales:{x:{grid:{color:"transparent"},ticks:r?d:{}},y:{beginAtZero:!0,grid:{display:!r},ticks:r?{}:d}}}})})}],480525)},495185,e=>{var a=e.i(391398),t=e.i(280445),l=e.i(800884),o=e.i(492448);let r=(0,t.f)(l.f,{shouldForwardProp:e=>"kind"!==e})(e=>{let{theme:a,kind:t}=e,l=(0,o.Z)(a,t);return{backgroundColor:l.background,color:l.text,fontWeight:700,borderRadius:6,height:24,textTransform:"uppercase",letterSpacing:"0.04em",fontSize:11}});e.s(["f",0,e=>{let{kind:t,label:l,size:o="small"}=e;return(0,a.jsx)(r,{kind:t,label:l,size:o,"data-testid":"status-badge"})}])},290918,e=>{var a=e.i(257764);let t="customFieldValueChanges",l="Custom field value changes",o=[...a.B,{label:l,value:t}];e.s(["L",0,t,"v",0,"customFieldValueChanged","w",0,l,"X",0,"Pick the custom field whose change starts this workflow.","h",0,o,"r",0,e=>o.some(a=>a.value===e),"y",0,e=>{let a=e?.definitionId;return"number"==typeof a&&Number.isInteger(a)&&a>0?a:null}])},3143,e=>{var a=e.i(159080),t=e.i(988204);let l=a.f`
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
`,i=a.f`
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
  ${t.U}
`,s=a.f`
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
  ${t.U}
  ${l}
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
`;e.s(["I",0,n,"l",0,c,"h",0,i,"X",0,s,"G",0,d,"V",0,u],3143)},458144,e=>{let a=e=>null!=e&&e>1?{page:e}:{};e.s(["V",0,e=>({pathname:"/dashboard/automations/view",query:{id:e}}),"T",0,(e,t,l)=>({pathname:"/dashboard/automations/runs/view",query:{id:e,runId:t,...a(l)}}),"o",0,(e,t)=>({pathname:"/dashboard/automations/runs",query:{id:e,...a(t)}}),"x",0,e=>({pathname:"/dashboard/automations/test",query:{id:e}})])},856584,e=>{var a=e.i(257764),t=e.i(290918);let l=(()=>{let e={};for(let t of Object.values(a.T))for(let a of t)a.value in e||(e[a.value]=a.label);for(let a of t.h)a.value in e||(e[a.value]=a.label);return e[t.v]=t.w,e})();e.s(["f",0,e=>{if(!e)return"Not configured";if(l[e])return l[e];let a=e.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/[_-]+/g," ").trim();return a.charAt(0).toUpperCase()+a.slice(1)}])},900693,e=>{let a={pending:{kind:"neutral",label:"Pending"},running:{kind:"progress",label:"Running"},completed:{kind:"success",label:"Completed"},partially_completed:{kind:"warning",label:"Completed with errors"},stopped:{kind:"neutral",label:"Stopped"},failed:{kind:"danger",label:"Failed"},cancelled:{kind:"neutral",label:"Cancelled"}},t={pending:{kind:"neutral",label:"Pending"},scheduled:{kind:"progress",label:"Scheduled"},waiting_dependency:{kind:"progress",label:"Waiting on previous step"},waiting_condition:{kind:"progress",label:"Waiting on condition"},waiting_object:{kind:"progress",label:"Waiting on update"},dispatched:{kind:"progress",label:"Dispatched"},in_progress:{kind:"progress",label:"In progress"},completed:{kind:"success",label:"Completed"},skipped:{kind:"neutral",label:"Skipped"},failed:{kind:"danger",label:"Failed"},cancelled:{kind:"neutral",label:"Cancelled"},timed_out:{kind:"danger",label:"Timed out"}};e.s(["r",0,e=>0===e.length?{content:"Workflow published"}:{severity:"warning",color:"info",duration:12e3,content:`Workflow published. Check: ${e.map(e=>e.message).join(" ")}`},"K",0,e=>{let{status:a,hasUnpublishedChanges:t}=e;if(t)return"Workflow saved. Publish to start running these changes.";switch(a){case"draft":return"Workflow saved as draft";case"active":return"Workflow saved and still active";case"paused":return"Workflow saved and still paused";default:return"Workflow saved"}},"Q",0,e=>{switch(e){case"active":return"success";case"paused":return"warning";default:return"neutral"}},"Y",0,e=>a[e]??{kind:"neutral",label:e},"d",0,e=>t[e]??{kind:"neutral",label:e}])},492448,e=>{var a=e.i(14331),t=e.i(529292);let l={success:{palette:"success",darken:.3},progress:{palette:"secondary",darken:.15},warning:{palette:"info",darken:.4},danger:{palette:"danger",darken:.15}},o={[`&.${a.f.standard}.${a.f.colorInfo}`]:{color:"text.primary"}};e.s(["U",0,o,"Z",0,(e,a)=>{let o=l[a];if(!o)return{text:e.palette.text.secondary,background:e.palette.grey[100]};let r=e.palette[o.palette].main;return{text:(0,t.J)(r,o.darken),background:(0,t.V)(r,.88)}}])},448601,e=>{e.s(["f",0,e=>"string"==typeof e&&/^\d+$/.test(e)?Number(e):null])},988204,e=>{var a=e.i(159080);let t=a.f`
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
`,l=a.f`
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
`;e.s(["R",0,l,"U",0,t])}])})();