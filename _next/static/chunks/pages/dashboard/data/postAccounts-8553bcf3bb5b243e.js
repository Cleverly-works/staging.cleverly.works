(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4548],{46321:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/data/postAccounts",function(){return t(378)}])},25742:function(e,n,t){"use strict";t.d(n,{H:function(){return c}});var o=t(26042),r=t(85893),a=t(45697),i=t(55377),s=t(16551),u=t(77439),c=function(e){var n=e.children,t=e.content,a=e.context,c=e.data,d=e.disabled,l=e.handleClick,m=e.size,p=e.type;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{size:"sm"}),(0,r.jsxs)(s.Z,{align:"flex-end",children:[n,(0,r.jsx)(u.Z,(0,o.Z)({content:t,context:a,disabled:d,onClick:l,size:m,type:p},c))]})]})};c.propTypes={children:a.node,content:a.string,context:a.string,data:a.object,disabled:a.bool,handleClick:a.func,size:a.string,type:a.string},c.defaultProps={content:"Add",context:"secondary",disabled:!1,size:"sm",type:"button"}},378:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ei}});var o=t(85893),r=t(19076),a=t(26042),i=t(69396),s=t(67294),u=t(6388),c=t(7297),d=t(75063);function l(){var e=(0,c.Z)(['\n  query GetFinancialJob(\n    $adminId: Int!\n    $customerId: Int\n    $invoiceNumber: jsonb\n    $jobId: String\n    $jobEndDate: timestamptz\n    $jobStartDate: timestamptz\n    $limit: Int\n    $locationId: Int\n    $offset: Int\n    $paymentStartDate: timestamptz\n    $paymentEndDate: timestamptz\n    $supplierId: Int\n  ) {\n    jobFinancial: getDashboard_Job_Financial(\n      limit: $limit\n      offset: $offset\n      where: {\n        job_ispaid: { _eq: true }\n        adminid: { _eq: $adminId }\n        customer_id: { _eq: $customerId }\n        locationid: { _eq: $locationId }\n        supplier_id: { _eq: $supplierId }\n        _and: [\n          { job_date: { _gte: $jobStartDate } }\n          { job_date: { _lte: $jobEndDate } }\n          { pay_date: { _gte: $paymentStartDate } }\n          { pay_date: { _lte: $paymentEndDate } }\n          { _or: [{ job_number: { _eq: $jobId } }, { job_invoicenumber: { _eq: $invoiceNumber } }] }\n        ]\n      }\n      args: { adminId: $adminId }\n    ) {\n      account: customer_name\n      expensesAmount: job_expenses_customer\n      expensesAmountSupplier: job_expenses_supplier\n      invoiceDate: job_date\n      invoiceNumber: job_invoicenumber\n      jobId: job_id\n      jobNumber: job_number\n      jobStatus: job_status\n      jobTotal: customer_amount\n      jobType: job_type\n      payDate: pay_date\n      supplierAmount: supplier_amount\n      serviceLine: service_name\n      serviceName: service_name\n      supplierId: supplier_id\n      supplierName: supplier_name\n      job: Job {\n        sageInvoiceNumber: meta(path: "$.sageInvoiceNumber")\n      }\n      customer: Customer {\n        sageCode: meta(path: "$.sageCode")\n      }\n    }\n    meta: getDashboard_Job_Financial_aggregate(\n      where: {\n        job_ispaid: { _eq: true }\n        adminid: { _eq: $adminId }\n        customer_id: { _eq: $customerId }\n        locationid: { _eq: $locationId }\n        supplier_id: { _eq: $supplierId }\n        _and: [\n          { job_date: { _gte: $jobStartDate } }\n          { job_date: { _lte: $jobEndDate } }\n          { pay_date: { _gte: $paymentStartDate } }\n          { pay_date: { _lte: $paymentEndDate } }\n          { _or: [{ job_number: { _eq: $jobId } }, { job_invoicenumber: { _eq: $invoiceNumber } }] }\n        ]\n      }\n      args: { adminId: $adminId }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n    account: Account_by_pk(id: $adminId) {\n      meta\n    }\n  }\n']);return l=function(){return e},e}function m(){var e=(0,c.Z)(["\n  query sageStatus($url: String!) {\n    sageStatus(url: $url) {\n      online\n    }\n  }\n"]);return m=function(){return e},e}function p(){var e=(0,c.Z)(["\n  mutation sendSageInvoice($invoices: [InvoicesInput]!, $url: String!) {\n    sendSageInvoice(invoices: $invoices, url: $url) {\n      success\n      error\n      invoices\n    }\n  }\n"]);return p=function(){return e},e}function b(){var e=(0,c.Z)(["\n  query sageUrl($accountId: Int!) {\n    Account_by_pk(id: $accountId) {\n      meta\n    }\n  }\n"]);return b=function(){return e},e}function j(){var e=(0,c.Z)(["mutation UpdateJob {\n    ","\n  }"]);return j=function(){return e},e}var v=(0,d.Ps)(l()),x=(0,d.Ps)(m()),f=(0,d.Ps)(p());(0,d.Ps)(b());var g=function(e){var n="";return e.forEach(function(e,t){n+="\n              alias".concat(t,": update_Job_by_pk(pk_columns: { id: ").concat(e.id," },\n                  _append:{meta:{sageInvoiceNumber:").concat(e.sageInvoiceNumber,"}}) {\n                id\n              }\n            ")}),(0,d.Ps)(j(),n)},_=t(42283),S=t(43703),I=t(4135),h=t(69119),Z=t(83894),y=t(77439),D=t(40826),$=t(78289),N=t(51466),w=t(26186),C=t(11082),E=t(68956),A=t(11585),P=t(76600),q=t(9270),T=t(62140),z=t(55563),k=t(95103),F=t(55843),J=t(91272),L=t(94789),R=t(13077),U=t(6033),H=t(45416),B=t(66812),M=t(2845),O=t(18586),V=t(20705),X=t(11587),G=function(e){var n=e.url,t=(0,u.aM)(x,{variables:{url:n}}),r=t.data,a=(void 0===r?{sageStatus:{online:!1}}:r).sageStatus.online,i=t.loading;return(0,o.jsx)(X.Z,{content:i?"loading...":a?"Connected":"Disconnected",context:a?"success":"danger",shape:"round",size:"sm"})},K=t(828),Q=t(45697),W=t(15214),Y=t(25742),ee=t(66252),en=t(50319),et=function(e){var n=e.rows,t=e.url,r=e.onSuccess,a=(0,s.useState)(),i=a[0],u=a[1],c=(0,s.useState)([]),d=c[0],l=c[1],m=(0,s.useState)([]),p=m[0],b=m[1],j=(0,s.useState)(),v=j[0],x=j[1],_=(0,ee.x)(),S=n.filter(function(e){return!e.sageInvoiceNumber}),I=(0,K.Z)((0,en.D)(f,{onCompleted:function(e){var n=e.sendSageInvoice.invoices,t=n.filter(function(e){return!!e.number}),o=n.filter(function(e){return!e.number}),a=t.map(function(e){return{id:e.senderJobId,sageInvoiceNumber:e.number}});a.length>0&&_.mutate({mutation:g(a)}),r(),b(t),l(o),x(!0)},onError:function(e){u(e.message)}}),1)[0],h=function(){I({variables:{invoices:S.map(function(e){return{accountRef:e.customerSageCode,amount:e.jobTotal,invoiceDate:e.invoiceDate,productCode:"PRD1",senderInvoiceNumber:String(e.invoiceNumber),senderJobId:String(e.jobId)}}),url:t}})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(N.Z,{weight:"bold",children:["Send ",S.length," Invoice(s) to Sage"]}),(0,o.jsx)(Y.H,{content:"Submit",disabled:v,handleClick:h}),i&&(0,o.jsx)(W.Z,{context:"danger",content:i}),d&&d.length>0&&d.map(function(e){return(0,o.jsx)(W.Z,{context:"danger",content:"Job ".concat(e.senderJobId," =>  ").concat(e.result)})}),p&&p.length>0&&(0,o.jsx)(W.Z,{context:"success",content:"".concat(p.length," Invoices sent successfully")})]})};et.propTypes={rows:Q.array,onSuccess:Q.func.isRequired,url:Q.string};var eo=function(e){var n=e.onExport,t=e.rows,r=e.url;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(G,{url:r}),(0,o.jsx)(y.Z,{context:"secondary",onClick:function(e){return n({e:e,rows:t()})},title:"Send Current Page To Sage",size:"sm",children:(0,o.jsx)(D.Z,{context:"white",icon:"file-export",size:"md"})})]})},er={endDate:(0,I.Z)(new Date),startDate:(0,S.Z)(new Date)},ea=function(){var e,n,t,r=(0,M.x)().user,c=(0,s.useContext)($.Z),d=(0,O.q)(),l=null===(e=d.admin.jobSetting)||void 0===e?void 0:e.jobNumberPrefix,m=null===(n=d.admin.jobSetting)||void 0===n?void 0:n.jobNumberSuffix,p=(0,s.useState)(er),b=p[0],j=p[1],x=(0,V.x)({filters:b}),f=x.initialData,g=x.ref,S=(0,_.cI)({defaultValues:b}),I=S.control,X=S.errors,G=S.handleSubmit,K=S.register,Q=(0,u.aM)(v,{variables:(0,a.Z)({adminId:r.accountId},f)}),W=Q.data,Y=void 0===W?{jobFinancial:[],meta:{aggregate:{totalCount:0}},account:{}}:W,ee=Y.account,en=Y.jobFinancial,ea=Y.meta,ei=Q.loading,es=Q.refetch,eu=function(e){var n,t=e.e,r=e.rows;t.stopPropagation(),c.show({content:(0,o.jsx)(et,{rows:r,onSuccess:es,url:null==ee?void 0:null===(n=ee.meta)||void 0===n?void 0:n.sageUrl}),submit:!1,title:"Send To Sage"})},ec=function(e){var n=!!e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(D.Z,{context:"".concat(n?"success":"danger"),icon:"".concat(n?"check":"times"),size:"sm",title:"".concat(n?"sent to sage":"not sent")}),n&&(0,o.jsxs)(N.Z,{size:"xs",children:["Sage invoice number: ",e," "]})]})},ed=[{hidden:!0},{hidden:!0},{hidden:!0},{text:"Job ID",formatter:function(e){var n=e.row;return(0,o.jsx)(H.D,{id:n.jobId,invoiceNumber:n.invoiceNumber,number:n.jobNumber,numberPrefix:l,numberSuffix:m,openCanvas:!0,type:n.jobType})}},{text:"Sent To Sage",formatter:function(e){return ec(e.row.sageInvoiceNumber)}},{formatter:function(e){var n=e.row;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N.Z,{children:n.account}),(0,o.jsx)(N.Z,{size:"xs",children:"Sage Code: ".concat(n.customerSageCode||"")})]})},text:"Customer"},{text:"Job Date",formatter:function(e){var n=e.row;return(0,w.Z)(n.invoiceDate)}},{text:"Pay Date",formatter:function(e){var n=e.row;return n.payDate&&(0,w.Z)(n.payDate)}},{text:"Customer Amount",formatter:function(e){var n=e.row;return(0,C.Z)(n.jobTotal)}},{text:"Supplier Amount",formatter:function(e){var n=e.row;return(0,C.Z)(n.supplierAmount)}},{text:"Customer Expenses",formatter:function(e){var n=e.row;return(0,C.Z)(n.expensesAmount)}},{text:"Supplier Expenses",formatter:function(e){var n=e.row;return(0,C.Z)(n.expensesAmountSupplier)}},{text:"Revenue",formatter:function(e){var n=e.row;return(0,C.Z)(n.revenue)}},{text:"Status",formatter:function(e){var n=e.row;return(0,R.B)({value:n.jobStatus})}},{text:"Service"},{hidden:!0},{formatter:E.Z,formatterData:[{context:"secondary",icon:["fa","file-export"],onClick:function(e,n){return eu({e:e,rows:[n]})},tooltip:"Send To Sage"}],text:"Actions"}],el=function(){return en.map(function(e){return{invoiceNumber:e.invoiceNumber,jobId:e.jobId,jobNumber:e.jobNumber,jobType:e.jobType,sageInvoiceNumber:e.job.sageInvoiceNumber,account:e.account,invoiceDate:e.invoiceDate,payDate:e.payDate,jobTotal:e.jobTotal,supplierAmount:e.supplierAmount,expensesAmount:e.expensesAmount,expensesAmountSupplier:e.expensesAmountSupplier,revenue:e.jobTotal-e.supplierAmount,jobStatus:e.jobStatus,serviceLine:e.serviceLine,customerSageCode:e.customer.sageCode,actions:""}})},em={control:I,errors:X,register:K},ep=function(e){var n,t,o;j({customerId:null===(n=e.customerId)||void 0===n?void 0:n.value,invoiceNumber:e.invoiceNumber||null,jobId:e.invoiceNumber||null,jobEndDate:(0,Z.Z)(e.jobEndDate),jobStartDate:(0,h.Z)(e.jobStartDate),locationId:null===(t=e.locationId)||void 0===t?void 0:t.value,outstandingLevel:e.outstandingLevel>-1?e.outstandingLevel:null,paymentEndDate:(0,Z.Z)(e.paymentEndDate),paymentStartDate:(0,h.Z)(e.paymentStartDate),startDate:e.startDate,supplierId:null===(o=e.supplierId)||void 0===o?void 0:o.value})};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(A.Z,{title:"Filters",children:(0,o.jsxs)(P.Z,{handleSubmit:G(ep),children:[(0,o.jsx)(L.C,(0,i.Z)((0,a.Z)({},em),{nameEnd:"jobEndDate",nameStart:"jobStartDate",placeholderEnd:"Job end date",placeholderStart:"Job start date"})),(0,o.jsx)(L.C,(0,i.Z)((0,a.Z)({},em),{nameEnd:"paymentEndDate",nameStart:"paymentStartDate",placeholderEnd:"Payment end date",placeholderStart:"Payment start date"})),(0,o.jsxs)(q.Z,{children:[(0,o.jsx)(T.Z,{md:6,children:(0,o.jsx)(z.Z,(0,i.Z)((0,a.Z)({},em),{name:"invoiceNumber",placeholder:"Id / Invoice"}))}),(0,o.jsx)(T.Z,{md:6,children:(0,o.jsx)(k.Z,(0,i.Z)((0,a.Z)({},em),{name:"outstandingLevel",options:U.r}))})]}),(0,o.jsxs)(q.Z,{children:[(0,o.jsx)(T.Z,{md:6,children:(0,o.jsx)(B.P,(0,i.Z)((0,a.Z)({},em),{label:"",name:"customerId",placeholder:"Select customer",type:"customer"}))}),(0,o.jsx)(T.Z,{md:6,children:(0,o.jsx)(B.P,(0,i.Z)((0,a.Z)({},em),{label:"",name:"locationId",placeholder:"Select Location",type:"property"}))})]}),(0,o.jsx)(q.Z,{children:(0,o.jsx)(T.Z,{md:6,children:(0,o.jsx)(B.P,(0,i.Z)((0,a.Z)({},em),{label:"",name:"supplierId",placeholder:"Select supplier",type:"supplier"}))})}),(0,o.jsx)(F.Z,{marginBottom:"sm"}),(0,o.jsx)(y.Z,{content:"Filter",context:"secondary",size:"sm",type:"submit"})]})}),(0,o.jsx)(A.Z,{dataSet:{"data-cy":"Financial Data"},open:!0,title:"Paid Invoices",toolbar:(0,o.jsx)(eo,{onExport:eu,rows:el,url:null===(t=ee.meta)||void 0===t?void 0:t.sageUrl}),children:(0,o.jsx)(J.t,{columns:ed,loading:ei,meta:ea,ref:g,refetch:es,rows:el()})})]})},ei=function(){return(0,o.jsx)(r.Z,{pageHeading:{heading:"Post Accounts"},View:(0,o.jsx)(ea,{})})}}},function(e){e.O(0,[3662,2283,212,8890,619,2583,4135,8579,1838,4244,3911,1417,1564,3054,8500,4046,2797,4043,148,8344,4972,5740,9774,2888,179],function(){return e(e.s=46321)}),_N_E=e.O()}]);