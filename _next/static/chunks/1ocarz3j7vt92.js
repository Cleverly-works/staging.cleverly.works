(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60450,e=>{"use strict";var t=e.i(391398),a=e.i(28980),n=e.i(631635);e.s(["f",0,e=>{let{label:s="Export",loading:i,onClick:r}=e;return(0,t.jsx)(n.f,{variant:"contained",color:"success",label:s,icon:(0,t.jsx)(a.default,{}),startIcon:(0,t.jsx)("img",{src:"/static/icons/csv.svg",alt:"",width:20,height:20}),loading:i,onClick:r})}])},795640,e=>{e.v(t=>Promise.all(["static/chunks/0r015bydn99_l.js"].map(t=>e.l(t))).then(()=>t(594366)))},38003,e=>{"use strict";var t=e.i(159080);t.f`
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
`,n=t.f`
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
`,e.s(["c",0,n,"_",0,a])}]);