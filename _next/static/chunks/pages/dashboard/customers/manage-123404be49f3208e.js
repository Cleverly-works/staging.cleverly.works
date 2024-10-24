(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6982],{44402:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customers/manage",function(){return t(37654)}])},66779:function(n,e,t){"use strict";t.d(e,{G5:function(){return l},UB:function(){return p},Ve:function(){return $},Wn:function(){return I},bD:function(){return g},kJ:function(){return _},rM:function(){return f}});var r=t(7297),a=t(75063);function s(){var n=(0,r.Z)(['\n  query GetFinancialJob(\n    $adminId: Int\n    $customerId: Int\n    $endDate: timestamptz\n    $startDate: timestamptz\n    $limit: Int\n    $status: [String]\n    $managerId: Int\n    $locationId: Int\n    $offset: Int\n    $supplierId: Int\n    $q: String\n    $orderBy: Job_order_by!\n  ) {\n    jobs: Job(\n      limit: $limit\n      offset: $offset\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      type\n      number\n      status\n      description\n      reference\n      timingStart\n      scheduledAt\n      createdAt\n\n      customerTotal: customerFinances(path: "amountInfo.total")\n      supplierTotal: supplierFinances(path: "amountInfo.total")\n      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")\n      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")\n      customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")\n      supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")\n      customerRebateAmount: customerFinances(path: "rebate.amount")\n\n      slaId\n      invoices: Invoices(order_by: { createdAt: desc }) {\n        invoiceNumber\n      }\n      customer: Customer {\n        id\n        name\n      }\n      supplier: Supplier {\n        id\n        name\n      }\n      location: Location {\n        id\n        name\n      }\n      sublocation: Sublocation {\n        id\n        name\n      }\n      sla: SLA {\n        name\n      }\n      manager: Manager {\n        fullName\n        nameLast\n        nameFirst\n        id\n      }\n      service: Service {\n        id\n        name\n      }\n    }\n    meta: Job_aggregate(\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return s=function(){return n},n}function i(){var n=(0,r.Z)(['\n  query GetCustomers(\n    $customerManagerId: Int\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: Account_order_by!\n    $status: String\n  ) {\n    customers: Account(\n      limit: $limit\n      offset: $offset\n      where: {\n        type: { _eq: "customer" }\n        createdAt: { _eq: $date }\n        managerId: { _eq: $customerManagerId }\n        name: { _ilike: $q }\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      createdAt\n      name\n      companyNumber\n      vatId\n      website\n      status\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      locations: Account_Locations {\n        id\n      }\n      finance: Financial {\n        id\n        invoicing\n        serviceRate\n        stripeId\n        totalRevenue\n        unpaidInvoices\n        creditLimit\n        creditRating\n        createdAt\n        amountOutstanding\n        accountId\n        approvalThreshold\n        arrangementFee\n        spendThreshold\n        defaultPaymentMethod\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n      }\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n          accounts: Account_Users {\n            id\n            role\n            position\n            isContact\n            status\n            account: Account {\n              id\n              name\n              type\n            }\n          }\n        }\n      }\n    }\n    meta: Account_aggregate(\n      where: {\n        type: { _eq: "customer" }\n        createdAt: { _eq: $date }\n        managerId: { _eq: $customerManagerId }\n        name: { _ilike: $q }\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return i=function(){return n},n}function u(){var n=(0,r.Z)(['\n  query GetCustomer($id: Int!) {\n    customer: Account_by_pk(id: $id) {\n      id\n      name\n      clientType: ClientType {\n        id\n        name\n      }\n      structure\n      companyNumber\n      vatId\n      website\n      status\n      createdAt\n      updatedAt\n      status\n      type\n      meta\n      usersMeta: Account_Users_aggregate {\n        aggregate {\n          count\n        }\n      }\n      propertiesMeta: Account_Locations_aggregate {\n        aggregate {\n          count\n        }\n      }\n      jobsMeta: CustomerJobs_aggregate {\n        aggregate {\n          count\n        }\n      }\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n        phone\n        email\n      }\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n          accounts: Account_Users {\n            id\n            role\n            position\n            isContact\n            status\n            account: Account {\n              id\n              name\n              type\n            }\n          }\n        }\n      }\n      bankAccounts: BankAccounts {\n        id\n        stripeId\n        accountNumber\n        routingNumber\n        bic\n        iban\n        status\n        default\n        createdAt\n      }\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      cards: Cards {\n        id\n        stripeId\n        type\n        last4\n        expYear\n        expMonth\n        status\n        default\n        createdAt\n      }\n      jobs: CustomerJobs {\n        id\n        title\n      }\n      finance: Financial {\n        id\n        invoicing\n        serviceRate\n        stripeId\n        totalRevenue\n        unpaidInvoices\n        creditLimit\n        creditRating\n        createdAt\n        amountOutstanding\n        accountId\n        approvalThreshold\n        arrangementFee\n        spendThreshold\n        defaultPaymentMethod\n      }\n      accountEntries: AccountEntries(order_by: { createdAt: asc }) {\n        id\n        outstandingAmount\n        type\n        entryId\n        currencyId\n        createdAt\n        balance\n        amount\n        accountId\n        updatedAt\n      }\n    }\n  }\n']);return u=function(){return n},n}function c(){var n=(0,r.Z)(["\n  query GetCustomerManage($id: Int!) {\n    customer: Account_by_pk(id: $id) {\n      id\n      name\n      website\n      companyNumber\n      vatId\n      meta\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        isContact\n        userId\n        user: User {\n          id\n          email\n          fullName\n          meta\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n        }\n      }\n      clientType: ClientType {\n        id\n        label: name\n        value: id\n      }\n      status\n      managerSelected: Manager {\n        id\n        label: fullName\n        value: id\n      }\n    }\n  }\n"]);return c=function(){return n},n}function o(){var n=(0,r.Z)(["\n  mutation AddCustomer($objects: [Account_insert_input!]!) {\n    insert_Account(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return o=function(){return n},n}function d(){var n=(0,r.Z)(["\n  mutation UpdateCustomer(\n    $customerId: Int!\n    $customer: Account_set_input\n    $userId: Int!\n    $user: User_set_input\n    $hasUpdateUser: Boolean!\n  ) {\n    update_Account_by_pk(pk_columns: { id: $customerId }, _set: $customer) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $userId }, _set: $user) @include(if: $hasUpdateUser) {\n      id\n    }\n  }\n"]);return d=function(){return n},n}function m(){var n=(0,r.Z)(["\n  mutation AddFinancial($objects: [Financial_insert_input!]!) {\n    insert_Financial(objects: $objects) {\n      returning {\n        id\n        accountId\n        locationId\n      }\n    }\n  }\n"]);return m=function(){return n},n}var l=(0,a.Ps)(s()),_=(0,a.Ps)(i()),p=(0,a.Ps)(u()),f=(0,a.Ps)(c()),$=(0,a.Ps)(o()),I=(0,a.Ps)(d()),g=(0,a.Ps)(m())},20932:function(n,e,t){"use strict";t.d(e,{E:function(){return u}});var r,a=t(47568),s=t(97582),i=t(75327),u=(r=(0,a.Z)(function(n,e){var t,r,a,u=arguments;return(0,s.__generator)(this,function(r){switch(r.label){case 0:t=u.length>2&&void 0!==u[2]&&u[2],r.label=1;case 1:return r.trys.push([1,3,,4]),[4,n.query({query:i.WF,variables:{email:e}})];case 2:if((a=r.sent().data.users)&&a.length>0)return[2,!!t&&a[0]];return[2,!t||null];case 3:return r.sent(),[2,!0];case 4:return[2]}})}),function(n,e){return r.apply(this,arguments)})},75327:function(n,e,t){"use strict";t.d(e,{$E:function(){return N},AX:function(){return b},I4:function(){return U},JA:function(){return C},MT:function(){return F},Px:function(){return w},WF:function(){return Z},ZA:function(){return D},a8:function(){return L},fA:function(){return P},fo:function(){return q},ge:function(){return x},iM:function(){return M},nE:function(){return S},nh:function(){return T},r1:function(){return k},tW:function(){return E},uz:function(){return j}});var r=t(7297),a=t(75063);function s(){var n=(0,r.Z)(["\n  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {\n    insert_Account_User(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return s=function(){return n},n}function i(){var n=(0,r.Z)(["\n  mutation UpdateUser(\n    $id: Int!\n    $accountUserId: Int!\n    $accountUserChanges: Account_User_set_input\n    $changes: User_set_input\n    $updateAccountUser: Boolean!\n  ) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _set: $accountUserChanges)\n      @include(if: $updateAccountUser) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]);return i=function(){return n},n}function u(){var n=(0,r.Z)(["\n  query GetUsers(\n    $accountId: Int\n    $accountType: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: User_order_by!\n    $status: String\n  ) {\n    users: User(\n      limit: $limit\n      offset: $offset\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [\n          { email: { _ilike: $q } }\n          { nameFirst: { _ilike: $q } }\n          { nameLast: { _ilike: $q } }\n        ]\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n        userLocations: User_Account_Locations {\n          accountLocationId\n        }\n      }\n    }\n    meta: User_aggregate(\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return u=function(){return n},n}function c(){var n=(0,r.Z)(["\n  query GetUser($id: Int!) {\n    user: User_by_pk(id: $id) {\n      id\n      fullName\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]);return c=function(){return n},n}function o(){var n=(0,r.Z)(["\n  query CheckDuplicateEmail($email: String!) {\n    users: User_public(where: { email: { _eq: $email } }) {\n      id\n      nameFirst\n      nameLast\n      email\n      phone\n    }\n  }\n"]);return o=function(){return n},n}function d(){var n=(0,r.Z)(["\n  fragment UserFields on User {\n    id\n    email\n    nameFirst\n    nameLast\n    fullName\n    phone\n    status\n  }\n"]);return d=function(){return n},n}function m(){var n=(0,r.Z)(["\n  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {\n    createGoogleToken(code: $code, id: $id, type: $type) {\n      success\n      tokens\n      error\n    }\n  }\n"]);return m=function(){return n},n}function l(){var n=(0,r.Z)(["\n  mutation GenerateMSURL($type: String!, $id: Int!) {\n    genenrateMSURL(id: $id, type: $type) {\n      url\n    }\n  }\n"]);return l=function(){return n},n}function _(){var n=(0,r.Z)(["\n  mutation signoutMS($id: Int!, $type: String!, $email: String!) {\n    signoutMS(id: $id, type: $type, email: $email) {\n      error\n      msId\n      success\n    }\n  }\n"]);return _=function(){return n},n}function p(){var n=(0,r.Z)(["\n  query getAccountMeta($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      meta\n    }\n  }\n"]);return p=function(){return n},n}function f(){var n=(0,r.Z)(["\n  query user($id: Int!) {\n    user: User_by_pk(id: $id) {\n      meta\n      invoiceThreshold\n      quoteThreshold\n    }\n  }\n"]);return f=function(){return n},n}function $(){var n=(0,r.Z)(["\n  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {\n    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {\n      meta\n    }\n  }\n"]);return $=function(){return n},n}function I(){var n=(0,r.Z)(["\n  mutation UpdateAccountUserByUserIdAccoutId(\n    $userId: Int!\n    $accountId: Int!\n    $changes: Account_User_set_input!\n  ) {\n    update_Account_User(\n      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }\n      _set: $changes\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return I=function(){return n},n}function g(){var n=(0,r.Z)(["\n  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {\n      id\n    }\n  }\n"]);return g=function(){return n},n}function y(){var n=(0,r.Z)(["\n  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {\n      id\n      meta\n    }\n  }\n"]);return y=function(){return n},n}function h(){var n=(0,r.Z)(['\n  query userDevices($accountId: Int!) {\n    users: User(\n      where: {\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        UserDevices: { status: { _eq: "active" } }\n        status: { _eq: "active" }\n      }\n    ) {\n      id\n      fullName\n      devices: UserDevices(\n        order_by: { updatedAt: desc_nulls_last }\n        where: { status: { _eq: "active" } }\n        limit: 1\n      ) {\n        id\n        playerId\n      }\n    }\n  }\n']);return h=function(){return n},n}function A(){var n=(0,r.Z)(['\n  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {\n    location: Location(\n      offset: $offset\n      limit: $limit\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      id\n      name\n      accountLocations: Account_Locations {\n        id\n      }\n      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {\n        id\n        status\n        address: Address {\n          id\n          name\n          addressLine1\n          postCode\n        }\n      }\n    }\n    meta: Location_aggregate(\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return A=function(){return n},n}function v(){var n=(0,r.Z)(["\n  mutation InsertUserAccountLocations(\n    $accountUserId: Int!\n    $objects: [User_Account_Location_insert_input!]!\n  ) {\n    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {\n      affected_rows\n    }\n    insert_User_Account_Location(objects: $objects) {\n      affected_rows\n      returning {\n        id\n      }\n    }\n  }\n"]);return v=function(){return n},n}var U=(0,a.Ps)(s()),b=(0,a.Ps)(i()),q=(0,a.Ps)(u()),C=(0,a.Ps)(c()),Z=(0,a.Ps)(o()),w=(0,a.Ps)(d()),L=(0,a.Ps)(m()),k=(0,a.Ps)(l()),F=(0,a.Ps)(_()),S=(0,a.Ps)(p()),T=(0,a.Ps)(f()),M=(0,a.Ps)($()),P=(0,a.Ps)(I()),N=(0,a.Ps)(g()),j=(0,a.Ps)(y()),x=(0,a.Ps)(h()),D=(0,a.Ps)(A()),E=(0,a.Ps)(v())},37654:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return C}});var r=t(85893),a=t(19076),s=t(47568),i=t(26042),u=t(69396),c=t(828),o=t(97582),d=t(67294),m=t(66252),l=t(73359),_=t(50319),p=t(66779),f=t(11163),$=t.n(f),I=t(18586),g=t(73987),y=t(20932),h=t(58473),A=t(74231),v=function(){return(0,A.Ry)().shape({managerSelected:(0,A.Ry)().required(),name:(0,A.Z_)().required(),website:(0,A.Z_)(),companyNumber:(0,A.Z_)(),vatId:(0,A.Z_)(),status:(0,A.Z_)().oneOf(["active","inactive"]).required(),contactUseremail:(0,A.Z_)().when("contactUser",{is:"true",then:(0,A.Z_)().required()}),contactUsernameFirst:(0,A.Z_)().when("contactUser",{is:"true",then:(0,A.Z_)().required()}),contactUsernameLast:(0,A.Z_)().when("contactUser",{is:"true",then:(0,A.Z_)().required()}),contactUserphone:(0,A.Z_)().when("contactUser",{is:"true",then:(0,A.Z_)()}),contactUserstatus:(0,A.Z_)().when("contactUser",{is:"true",then:(0,A.Z_)().required()})})},U=t(41255),b="/dashboard/customers/",q=function(){var n=(0,I.q)(),e=(0,m.x)(),t=(0,d.useContext)(g.Z).user,a=(0,f.useRouter)().query,A=(0,d.useState)(!1),q=A[0],C=A[1],Z=(0,d.useState)([]),w=Z[0],L=Z[1],k=(0,d.useState)(!1),F=k[0],S=k[1],T=(0,U.RM)(t.id),M=(0,c.Z)((0,l.t)(p.rM,{variables:{id:a.id}}),2),P=M[0],N=M[1],j=N.loading,x=N.data,D=(void 0===x?{customer:{}}:x).customer,E=(0,U.BR)({adminId:t.id,xeroClientId:null==a?void 0:a.clientId},[n.admin]),R=E.onCallAuthorize,G=E.onGetXeroContacts;(0,d.useEffect)(function(){a.id&&P()},[]),(0,d.useEffect)(function(){var n,e=(n=(0,s.Z)(function(n){var e,t;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,G(n)];case 1:return t=e.sent().map(function(n){return{label:"".concat(n.name," - ").concat(n.contactID),value:n.contactID}}),S(!1),L(t),[3,3];case 2:return e.sent(),S(!0),[3,3];case 3:return[2]}})}),function(e){return n.apply(this,arguments)});(null==T?void 0:T.companyId)&&e(T.companyId)},[null==T?void 0:T.companyId]);var B,J,z=(0,c.Z)((0,_.D)(p.bD,{onCompleted:function(n){var e=n.insert_Financial.returning[0].accountId;$().push("".concat(b,"view?id=").concat(e))}}),1)[0],X=(0,c.Z)((0,_.D)(p.Ve,{onCompleted:(B=(0,s.Z)(function(n){var e;return(0,o.__generator)(this,function(e){switch(e.label){case 0:return[4,z({variables:{objects:[{accountId:n.insert_Account.returning[0].id}]}})];case 1:return e.sent(),[2]}})}),function(n){return B.apply(this,arguments)})}),1)[0],O=(0,c.Z)((0,_.D)(p.Wn,{onCompleted:function(n){var e=n.update_Account_by_pk.id;$().push("".concat(b,"view?id=").concat(e))}}),1)[0],V=(J=(0,s.Z)(function(n){var r,s,c,d;return(0,o.__generator)(this,function(o){switch(o.label){case 0:if(o.trys.push([0,,6,7]),C(!0),(s={}).Customer={managerId:n.managerSelected.value,name:n.name,website:n.website||null,companyNumber:n.companyNumber||null,vatId:n.vatId||null,status:n.status,type:"customer"},(null===(r=n.xeroContact)||void 0===r?void 0:r.value)&&(s.Customer.meta=(0,u.Z)((0,i.Z)({},D.meta),{xeroContactId:n.xeroContact.value,xeroAssignedCompanyId:null==T?void 0:T.companyId})),n.clientType&&(s.Customer.taxonomyId_clientType=n.clientType.value),c={nameFirst:n.contactUsernameFirst,nameLast:n.contactUsernameLast,email:n.contactUseremail,phone:n.contactUserphone,status:n.contactUserstatus},!a.id)return[3,2];return[4,O({variables:{customerId:D.id,customer:s.Customer,hasUpdateUser:!!n.contactUseruserId,userId:n.contactUseruserId,user:c}})];case 1:return o.sent(),[3,5];case 2:return s.Admins={data:[{adminId:t.accountId,status:n.status}]},[4,(0,y.E)(e,n.contactUseremail,!0)];case 3:return d=o.sent(),s.Account_Users={data:[{isContact:!0,role:"owner",status:n.contactUserstatus}]},d?s.Account_Users.data[0].userId=d.id:s.Account_Users.data[0].User={data:{nameFirst:n.contactUsernameFirst,nameLast:n.contactUsernameLast,email:n.contactUseremail,phone:n.contactUserphone,status:"active",meta:{notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}}}},[4,X({variables:{objects:(0,u.Z)((0,i.Z)({},s.Customer),{Admins:s.Admins,Account_Users:s.Account_Users})}})];case 4:o.sent(),o.label=5;case 5:return[3,7];case 6:return C(!1),[7];case 7:return[2]}})}),function(n){return J.apply(this,arguments)}),W=function(){R(window.location.href)};return(!j||!a.id)&&(0,r.jsx)(h.P,{loading:q,account:D.id?D:null,id:a.id||null,onSubmit:V,schema:v,type:"customer",user:t,displayXeroContacts:!!(null==T?void 0:T.clientId),xeroContacts:w,displaySignin:F,handleXeroAuthorize:W},D?D.id:"new")},C=function(){return(0,r.jsx)(a.Z,{pageHeading:{heading:"Customers - Manage"},View:(0,r.jsx)(q,{})})}}},function(n){n.O(0,[2283,212,8890,619,2583,6043,1838,3911,1417,3776,3054,4043,1144,699,4972,274,9774,2888,179],function(){return n(n.s=44402)}),_N_E=n.O()}]);