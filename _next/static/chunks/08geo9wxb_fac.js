(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,158687,(e,t,a)=>{let s="/dashboard/customers";(window.__NEXT_P=window.__NEXT_P||[]).push([s,()=>e.r(841985)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([s])})},38003,e=>{"use strict";var t=e.i(159080);t.f`
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
`;let a=t.f`
  query GetCustomers(
    $customerManagerId: Int
    $date: timestamptz
    $limit: Int
    $offset: Int
    $q: String
    $order: [Account_order_by!]
    $status: String
    $now: timestamptz
    $withMetrics: Boolean = false
  ) {
    customers: Account(
      limit: $limit
      offset: $offset
      where: {
        type: { _eq: "customer" }
        createdAt: { _eq: $date }
        managerId: { _eq: $customerManagerId }
        name: { _ilike: $q }
        status: { _eq: $status }
      }
      order_by: $order
    ) {
      id
      createdAt
      name
      companyNumber
      vatId
      website
      status
      city
      locations: Account_Locations {
        id
      }
      listMetrics: AccountListMetrics @include(if: $withMetrics) {
        customerTotal12mNet
        customerTotal12mGross
        invoicesOutstanding
        quotesOutstandingNet
      }
      manager: Manager {
        id
        nameFirst
        nameLast
      }
      contactUser: ContactUser {
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
      addresses: Addresses(where: { entity: { _eq: "Account" } }) {
        id
        registered
        operating
        invoice
        address: Address {
          id
          name
          addressLine1
        }
      }
      usersAggregate: Account_Users_aggregate {
        aggregate {
          count
        }
      }
      quotesAggregate: CustomerJobs_aggregate(where: { type: { _eq: "quote" } }) {
        aggregate {
          count
        }
      }
      invoicesAggregate: AccountEntries_aggregate(
        where: {
          type: {
            _in: ["invoice", "proformaInvoice", "customerPpmInvoice", "customerGroupInvoice"]
          }
        }
      ) {
        aggregate {
          count
        }
      }
      nextJob: CustomerJobs_aggregate(
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
      lastJob: CustomerJobs_aggregate(
        where: {
          type: { _in: ["reactive", "ppm"] }
          status: { _neq: "canceled" }
          timingStart: { _lt: $now }
        }
      ) {
        aggregate {
          max {
            timingStart
          }
        }
      }
    }
    meta: Account_aggregate(
      where: {
        type: { _eq: "customer" }
        createdAt: { _eq: $date }
        managerId: { _eq: $customerManagerId }
        name: { _ilike: $q }
        status: { _eq: $status }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,s=t.f`
  query GetCustomer($id: Int!) {
    customer: Account_by_pk(id: $id) {
      id
      name
      clientType: ClientType {
        id
        name
      }
      structure
      companyNumber
      vatId
      website
      status
      createdAt
      updatedAt
      status
      type
      meta
      usersMeta: Account_Users_aggregate {
        aggregate {
          count
        }
      }
      propertiesMeta: Account_Locations_aggregate {
        aggregate {
          count
        }
      }
      jobsMeta: CustomerJobs_aggregate {
        aggregate {
          count
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
      manager: Manager {
        id
        nameFirst
        nameLast
        phone
        email
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
      bankAccounts: BankAccounts {
        id
        stripeId
        accountNumber
        routingNumber
        bic
        iban
        status
        default
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
      jobs: CustomerJobs {
        id
        title
      }
      finance: Financial {
        id
        invoicing
        serviceRate
        stripeId
        totalRevenue
        unpaidInvoices
        creditLimit
        creditRating
        createdAt
        amountOutstanding
        accountId
        approvalThreshold
        arrangementFee
        spendThreshold
        defaultPaymentMethod
      }
      accountEntries: AccountEntries(order_by: { createdAt: asc }) {
        id
        outstandingAmount
        type
        entryId
        currencyId
        createdAt
        balance
        amount
        accountId
        updatedAt
      }
    }
  }
`;t.f`
  query GetCustomerManage($id: Int!) {
    customer: Account_by_pk(id: $id) {
      id
      name
      website
      companyNumber
      vatId
      meta
      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
        id
        isContact
        userId
        user: User {
          id
          email
          fullName
          meta
          name: nameFirst
          nameFirst
          nameLast
          phone
          status
        }
      }
      clientType: ClientType {
        id
        label: name
        value: id
      }
      status
      managerSelected: Manager {
        id
        label: fullName
        value: id
      }
    }
  }
`,t.f`
  mutation AddCustomer($objects: [Account_insert_input!]!) {
    insert_Account(objects: $objects) {
      returning {
        id
      }
    }
  }
`,t.f`
  mutation UpdateCustomer(
    $customerId: Int!
    $customer: Account_set_input
    $userId: Int
    $user: User_set_input
    $hasUpdateUser: Boolean!
  ) {
    update_Account_by_pk(pk_columns: { id: $customerId }, _set: $customer) {
      id
    }
    update_User(where: { id: { _eq: $userId } }, _set: $user) @include(if: $hasUpdateUser) {
      returning {
        id
      }
    }
  }
`,t.f`
  mutation AddFinancial($objects: [Financial_insert_input!]!) {
    insert_Financial(objects: $objects) {
      returning {
        id
        accountId
        locationId
      }
    }
  }
`,e.s(["c",0,s,"_",0,a])},841985,e=>{"use strict";var t=e.i(391398),a=e.i(293965),s=e.i(691567),i=e.i(191788),n=e.i(362537),r=e.i(203828),o=e.i(877341),d=e.i(432171),c=e.i(38003),u=e.i(472552),l=e.i(813843),m=e.i(88152),g=e.i(115871),p=e.i(74633),f=e.i(60903),h=e.i(93198),_=e.i(594301),b=e.i(498681),$=e.i(889231),x=e.i(239964),A=e.i(683125),I=e.i(280445),v=e.i(652148),y=e.i(755548),q=e.i(587369),C=e.i(422411),N=e.i(827010),w=e.i(106997);let M=e=>{let{initialFilters:a,filterForm:s,setFilterForm:n,open:r=!1,onClose:d}=e,{user:c}=(0,_.f)(),[u,g]=(0,i.useState)(""),p=(0,q.f)("(max-width: 400px)"),{control:f,handleSubmit:h,register:b,reset:$,errors:x}=(0,C.G)({defaultValues:s}),[A,{data:{items:I}={items:[]},loading:M}]=(0,o.f)(N.O,{variables:{accountId:c.accountId,limit:50,offset:0,q:""!==u?`%${u}%`:null}});return(0,t.jsx)(j,{open:r,onClose:d,children:(0,t.jsx)(m.f,{sx:{minWidth:p?"300px":"400px",padding:"20px 40px"},children:(0,t.jsxs)("form",{onSubmit:h(e=>{n(e),d()}),children:[(0,t.jsxs)(l.f,{spacing:4,children:[(0,t.jsx)(v.f,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:b}),(0,t.jsx)(C.e,{name:"customerManager",control:f,render:e=>{let{value:a,onChange:s}=e;return(0,t.jsx)(w.f,{value:a||null,onChange:(e,t)=>s(t),loading:M,onOpen:()=>A(),options:I,setSearch:g,textFieldProps:{color:"secondary",variant:"standard",label:"Select account manager"},size:"small"})}}),(0,t.jsx)(C.e,{name:"status",control:f,render:e=>{let{value:a,onChange:s}=e;return(0,t.jsx)(w.f,{limitTags:6,color:"secondary",value:a||null,onChange:(e,t)=>s(t),options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],textFieldProps:{label:"Select status",variant:"standard",color:"secondary",error:!!x.status,helperText:x.status?.message}})}})]}),(0,t.jsxs)(l.f,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,t.jsx)(y.f,{variant:"contained",color:"danger",onClick:()=>{let e;n(e={q:a.q??null,status:a.status??null}),$(e),d()},children:"Cancel"}),(0,t.jsx)(y.f,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},j=(0,I.f)(A.f)(()=>({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}));var T=e.i(128662),S=e.i(122965),F=e.i(10945),O=e.i(21557),R=e.i(600744),D=e.i(444158),U=e.i(300052),L=e.i(793391),k=e.i(60450),E=e.i(772937),W=e.i(284699),J=e.i(795617),Y=e.i(879436);let P="/dashboard/customers/",G=["name","manager",'{"ContactUser": {"nameFirst": "ORDER"}}',"city","properties","createdAt","status"],B=e=>null==e?"-":(0,Y.f)(e),V=new Set(['{"AccountListMetrics": {"customerTotal12mNet": "ORDER"}}','{"AccountListMetrics": {"customerTotal12mGross": "ORDER"}}','{"AccountListMetrics": {"quotesOutstandingNet": "ORDER"}}','{"AccountListMetrics": {"invoicesOutstanding": "ORDER"}}']),H=new Set,z=e=>{let{initialFilters:a}=e,[s,A]=(0,F.f)({key:"filter-form-customers",initialValue:{q:a.q??null,status:a.status??null},storageType:"sessionStorage"}),I=(0,i.useMemo)(()=>({q:s.q?`%${s.q}%`:null,customerManagerId:s.customerManager?.value??null,status:s.status?.value??null}),[s]),{reference:v,pagination:y,order:q}=(0,S.f)(),{user:C,hasRole:N}=(0,_.f)(),{can:w}=(0,b.f)(),j=w("admin.finances.view"),[Y,z]=(0,i.useState)(!1),K=(0,h.r)(),[X,Q]=(0,i.useState)(!1),[Z,ee]=(0,i.useState)(!1),et=(0,O.f)(),[ea]=(0,i.useState)(()=>(0,n.default)().toISOString()),{data:{customers:es,meta:ei}={customers:[],meta:{aggregate:{totalCount:0}}},loading:en}=(0,d.t)(c._,{variables:{...I,assignedUser:a.assignedUser?C.id:null,status:I.status,now:ea,...y,order:q,withMetrics:Y}}),[er]=(0,o.f)(c._,{fetchPolicy:"no-cache",variables:{...I,status:I.status,now:ea,limit:ei?.aggregate?.totalCount||150},onCompleted:e=>{try{let t=u.default.unparse(e_(e.customers),{escapeFormulae:/^[=+@\t\r]/}),a="data:application/octet-stream,"+encodeURIComponent(t);(0,f.f)(a,"customers.csv")}finally{ee(!1)}},onError:()=>{ee(!1),et.show({content:"Error exporting customers",severity:"error"})}}),eo=(0,i.useCallback)(e=>[{context:"secondary",icon:"edit",onClick:t=>eh(t)(e),tooltip:"Edit"}],[]),ed=(0,i.useMemo)(()=>[{flex:1,field:"name",headerName:"Name",minWidth:300},{flex:1,field:"manager",headerName:"Account manager",minWidth:130,sortName:'{"Manager": {"nameFirst": "ORDER"}}',renderCell:e=>{let{row:{managerName:a,managerId:s}}=e;return(0,t.jsx)($.f,{color:"secondary",href:`/dashboard/users/view?id=${s}`,children:a})}},{flex:1,field:'{"ContactUser": {"nameFirst": "ORDER"}}',headerName:"Contact",minWidth:130,sortable:!0,renderCell:e=>{let{row:{contactName:a,contactId:s}}=e;return(0,t.jsx)($.f,{color:"secondary",href:`/dashboard/users/view?id=${s}`,children:a})}},{flex:1,field:"city",headerName:"City",sortable:!0,minWidth:130,renderCell:e=>{let{row:t}=e;return t.city||"-"}},{flex:1,field:"properties",headerName:"Properties",sortName:'{"Account_Locations_aggregate": {"count": "ORDER"}}',minWidth:130},{flex:1,field:"createdAt",headerName:"Created",minWidth:130},{flex:1,field:"status",headerName:"Status",minWidth:130,sortable:!1},{flex:1,field:"numberOfUsers",headerName:"Number of users",minWidth:130,sortable:!1},{flex:1,field:"numberOfQuotes",headerName:"Number of quotes",minWidth:130,sortable:!1},{flex:1,field:"numberOfInvoices",headerName:"Number of invoices",minWidth:140,sortable:!1},{flex:1,field:"operatingAddress",headerName:"Operating address",minWidth:200,sortable:!1},{flex:1,field:"registeredAddress",headerName:"Registered address",minWidth:200,sortable:!1},{flex:1,field:"invoiceAddress",headerName:"Invoice address",minWidth:200,sortable:!1},{flex:1,field:"nextJobDate",headerName:"Next job date",minWidth:130,sortable:!1},{flex:1,field:"lastJobDate",headerName:"Last job date",minWidth:130,sortable:!1},{flex:1,field:'{"AccountListMetrics": {"customerTotal12mNet": "ORDER"}}',headerName:"Total revenues ex-VAT (12M)",minWidth:180,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalRevenues12mNet}},{flex:1,field:'{"AccountListMetrics": {"customerTotal12mGross": "ORDER"}}',headerName:"Total revenues inc-VAT (12M)",minWidth:180,sortable:!0,renderCell:e=>{let{row:t}=e;return t.totalRevenues12mGross}},{flex:1,field:'{"AccountListMetrics": {"quotesOutstandingNet": "ORDER"}}',headerName:"Total quotes outstanding ex-VAT",minWidth:170,sortable:!0,renderCell:e=>{let{row:t}=e;return t.quotesOutstanding}},{flex:1,field:'{"AccountListMetrics": {"invoicesOutstanding": "ORDER"}}',headerName:"Total invoices outstanding",minWidth:170,sortable:!0,renderCell:e=>{let{row:t}=e;return t.invoicesOutstanding}},{flex:1,field:"actions",headerName:"Actions",minWidth:130,sortable:!1,renderCell:e=>{let{row:a}=e;return(0,t.jsx)(x.f,{actionsData:eo,row:a})}}],[eo]),ec=(0,i.useMemo)(()=>es.map(e=>e.id),[es]),{gridColumns:eu,visibleFields:el,modalProps:em,buttonProps:eg}=(0,W.f)({stateKey:"customers",columns:ed,defaultFields:G,hiddenFields:j?H:V,customFields:{dataOwner:"customer",rowIds:ec,skip:!N("admin")}}),ep=el.some(e=>V.has(e));(0,i.useEffect)(()=>z(ep),[ep]);let ef=e=>{r.default.push(`${P}manage`)},eh=e=>(e.stopPropagation(),e=>{r.default.push(`${P}manage?id=${e.id}`)}),e_=e=>e.map(e=>({name:e.name,companyNumber:e.companyNumber,vatId:e.vatId,website:e.website,status:e.status,createdAt:(0,n.default)(e.createdAt).format("YYYY-MM-DD")})),eb=(0,i.useMemo)(()=>es.map(e=>({id:e.id,managerId:e?.manager?.id,name:e.name,managerName:e.manager?`${e.manager.nameFirst} ${e.manager.nameLast} `:"Unassigned",contactName:e.contactUser?`${e.contactUser.nameFirst} ${e.contactUser.nameLast}`:"Unassigned",contactId:e.contactUser?.id,city:e.city,properties:e.locations.length||0,createdAt:(0,n.default)(e.createdAt).format("YYYY-MM-DD"),status:e.status.charAt(0).toUpperCase()+e.status.slice(1,e.status.length),numberOfUsers:e.usersAggregate?.aggregate?.count??0,numberOfQuotes:e.quotesAggregate?.aggregate?.count??0,numberOfInvoices:e.invoicesAggregate?.aggregate?.count??0,operatingAddress:(0,J.H)((0,J.w)(e,"operating")?.address),registeredAddress:(0,J.H)((0,J.w)(e,"registered")?.address),invoiceAddress:(0,J.H)((0,J.w)(e,"invoice")?.address),nextJobDate:e.nextJob?.aggregate?.min?.timingStart?(0,n.default)(e.nextJob.aggregate.min.timingStart).format("YYYY-MM-DD"):"-",lastJobDate:e.lastJob?.aggregate?.max?.timingStart?(0,n.default)(e.lastJob.aggregate.max.timingStart).format("YYYY-MM-DD"):"-",totalRevenues12mNet:B(e.listMetrics?.customerTotal12mNet),totalRevenues12mGross:B(e.listMetrics?.customerTotal12mGross),quotesOutstanding:B(e.listMetrics?.quotesOutstandingNet),invoicesOutstanding:B(e.listMetrics?.invoicesOutstanding),actions:""})),[es]),e$=(0,i.useMemo)(()=>!eb.length&&(I?.q||I?.customerManagerId)?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No customers",subtitleFirstLine:"You currently have no customers set up in the system",subtitleSecondLine:"Click create customer to get started building.",buttonText:"Create customer",onAction:ef},[I?.customerManagerId,I?.q,eb]);return(0,t.jsxs)(t.Fragment,{children:[X&&(0,t.jsx)(M,{initialFilters:a,open:X,filterForm:s,setFilterForm:A,onClose:()=>Q(!1)}),(0,t.jsx)(E.f,{...em}),(0,t.jsxs)(l.f,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,t.jsxs)(D.f,{children:[(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(U.f,{onClick:()=>Q(!0)}),(0,t.jsx)(R.f,{...eg})]}),(0,t.jsxs)(l.f,{direction:"row",spacing:2,children:[(0,t.jsx)(L.f,{label:"Create customer",onClick:ef}),!K&&(0,t.jsx)(k.f,{loading:Z,onClick:e=>{e.stopPropagation(),ee(!0),er()}})]})]}),(0,t.jsxs)(m.f,{sx:{padding:"16px 0px",flex:1,minHeight:0},children:[(0,t.jsx)(g.f,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Customers"}),(eb?.length||en)&&(0,t.jsx)(p.s,{...v,stateKey:"customers",loading:en,columns:eu,rows:eb,totalCount:ei.aggregate.totalCount,autoHeight:!1,containerHeight:"calc(100% - 52px)",onRowClick:e=>{r.default.push(`${P}view?id=${e.id}&tab=details`)}}),!eb?.length&&!en&&(0,t.jsx)(T.f,{imageSrc:"/static/icons/no_locations_found.svg",...e$})]})]})]})};z.propTypes={initialFilters:s.object};let K={q:null,status:{label:"Active",value:"active"},customerManagerId:null,filterType:"customers_list"},X=()=>(0,t.jsx)(z,{initialFilters:K});X.getLayout=function(e){return(0,t.jsx)(a.f,{children:e})},e.s(["default",0,X],841985)}]);