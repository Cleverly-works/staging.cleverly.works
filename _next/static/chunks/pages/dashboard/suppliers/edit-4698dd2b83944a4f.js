(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6199],{65162:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/suppliers/edit",function(){return t(73338)}])},94922:function(n,e,t){"use strict";t.d(e,{C:function(){return i},w:function(){return a}});var r=t(26042),i=function(n){return n=(0,r.Z)({},n.supplierDetails,n)},a=function(n,e){var t=n.assignedUser,r=n.coverage,i=n.service,a=n.status,s=n.q,u={type:{_eq:"supplier"}};return t&&(u.managerId={_eq:e.id}),i&&(u.Services={Service:{id:{_eq:i.value}}}),r&&(u.PostcodeAreas={postcodeAreaId:{_eq:r.value}}),a&&(u.status={_eq:a.value}),s&&(u.name={_ilike:s}),u}},21937:function(n,e,t){"use strict";t.d(e,{f:function(){return i}});var r=t(74231),i=function(){return(0,r.Ry)().shape({managerSelected:(0,r.Ry)().required(),name:(0,r.Z_)().required(),website:(0,r.Z_)(),companyNumber:(0,r.Z_)(),vatId:(0,r.Z_)(),status:(0,r.Z_)().oneOf(["active","inactive"]).required(),typeOfOrganisation:(0,r.Z_)(),quotingEmail:(0,r.Z_)(),utrNumber:(0,r.Z_)(),cisRegistered:(0,r.Z_)(),contactUseremail:(0,r.Z_)().when("contactUser",{is:"true",then:(0,r.Z_)().required()}),contactUsernameFirst:(0,r.Z_)().when("contactUser",{is:"true",then:(0,r.Z_)().required()}),contactUsernameLast:(0,r.Z_)().when("contactUser",{is:"true",then:(0,r.Z_)().required()}),contactUserphone:(0,r.Z_)().when("contactUser",{is:"true",then:(0,r.Z_)()}),contactUserstatus:(0,r.Z_)().when("contactUser",{is:"true",then:(0,r.Z_)().required()})})}},14067:function(n,e,t){"use strict";t.d(e,{D7:function(){return v},KQ:function(){return y},R7:function(){return $},j$:function(){return b},kx:function(){return q},l1:function(){return I},lk:function(){return A},ys:function(){return g}});var r=t(7297),i=t(75063);function a(){var n=(0,r.Z)(['\n  query GetSuppliers(\n    $limit: Int\n    $offset: Int\n    $orderBy: Account_order_by!\n    $where: Account_bool_exp\n  ) {\n    suppliers: Account(limit: $limit, offset: $offset, where: $where, order_by: [$orderBy]) {\n      id\n      createdAt\n      name\n      status\n      companyNumber\n      vatId\n      website\n      jobs: SupplierJobs_aggregate {\n        aggregate {\n          count\n          max {\n            scheduledAt\n          }\n          sum {\n            amount\n          }\n        }\n      }\n      jobList: SupplierJobs(order_by: { createdAt: desc }) {\n        id\n      }\n      services: Services(where: { entity: { _eq: "Account" } }) {\n        id\n        service: Service {\n          id\n          name\n        }\n      }\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      locations: Account_Locations {\n        id\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n      }\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n          accounts: Account_Users {\n            id\n            role\n            position\n            isContact\n            status\n            account: Account {\n              id\n              name\n              type\n            }\n          }\n        }\n      }\n    }\n    meta: Account_aggregate(where: $where) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return a=function(){return n},n}function s(){var n=(0,r.Z)(['\n  query GetSupplier($id: Int!) {\n    supplier: Account_by_pk(id: $id) {\n      id\n      companyNumber\n      createdAt\n      name\n      status\n      type\n      updatedAt\n      website\n      clientType\n      managerId\n      vatId\n      meta\n      statusLogs: StatusLog(where: { entity: { _eq: "Account" } }) {\n        id\n        status\n        createdAt\n      }\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      manager: Manager {\n        id\n        fullName\n      }\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n\n      details: SupplierDetail {\n        cisRegistered\n        quotingEmail\n        typeOfOrganisation\n        utrNumber\n        accountId\n      }\n\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n        }\n      }\n      usersMeta: Account_Users_aggregate {\n        aggregate {\n          count\n        }\n      }\n\n      compliances: Compliances(where: { entity: { _eq: "Account" } }, order_by: { expiryAt: asc }) {\n        id\n        createdAt\n        entity\n        entityId\n        expiryAt\n        regNum\n        insuranceAmount\n        meta\n      }\n      coverage: PostcodeAreas(where: { entity: { _eq: "Account" }, status: { _eq: "active" } }) {\n        id\n        status\n        createdAt\n        area: PostcodeArea {\n          id\n          name\n          area\n        }\n      }\n      services: Services {\n        serviceId\n        createdAt\n      }\n      references: References {\n        id\n        createdAt\n      }\n    }\n  }\n']);return s=function(){return n},n}function u(){var n=(0,r.Z)(["\n  query GetSupplierManage($id: Int!) {\n    supplier: Account_by_pk(id: $id) {\n      id\n      name\n      website\n      companyNumber\n      vatId\n      status\n      meta\n      managerSelected: Manager {\n        id\n        label: fullName\n        value: id\n      }\n      supplierDetails: SupplierDetail {\n        id\n        cisRegistered\n        quotingEmail\n        typeOfOrganisation\n        utrNumber\n      }\n    }\n  }\n"]);return u=function(){return n},n}function o(){var n=(0,r.Z)(["\n  mutation AddSupplier($objects: [Account_insert_input!]!) {\n    insert_Account(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return o=function(){return n},n}function c(){var n=(0,r.Z)(["\n  mutation AddSupplierDetail($objects: [SupplierDetail_insert_input!]!) {\n    insert_SupplierDetail(objects: $objects) {\n      returning {\n        id\n        accountId\n      }\n    }\n  }\n"]);return c=function(){return n},n}function d(){var n=(0,r.Z)(["\n  mutation AddSupplierOffer($objects: [SupplierOffer_insert_input!]!) {\n    insert_SupplierOffer(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,r.Z)(["\n  mutation UpdateSupplier(\n    $supplierId: Int!\n    $supplier: Account_set_input\n    $supplierDetails: SupplierDetail_set_input\n  ) {\n    update_SupplierDetail(where: { accountId: { _eq: $supplierId } }, _set: $supplierDetails) {\n      returning {\n        id\n      }\n    }\n\n    update_Account_by_pk(pk_columns: { id: $supplierId }, _set: $supplier) {\n      id\n    }\n  }\n"]);return l=function(){return n},n}function p(){var n=(0,r.Z)(['\n  query GetPostCodeAreas(\n    $limit: Int\n    $offset: Int\n    $q: String\n    $supplierId: Int\n    $status: String = "active"\n  ) {\n    coverage: PostcodeArea_Entity(\n      where: {\n        entity: { _eq: "Account" }\n        entityId: { _eq: $supplierId }\n        status: { _eq: $status }\n        PostcodeArea: { name: { _ilike: $q } }\n      }\n      order_by: { PostcodeArea: { name: asc } }\n      limit: $limit\n      offset: $offset\n    ) {\n      id\n      status\n      createdAt\n      area: PostcodeArea {\n        id\n        name\n        area\n      }\n    }\n    meta: PostcodeArea_Entity_aggregate(\n      where: {\n        entity: { _eq: "Account" }\n        entityId: { _eq: $supplierId }\n        status: { _eq: $status }\n        PostcodeArea: { name: { _ilike: $q } }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return p=function(){return n},n}function m(){var n=(0,r.Z)(["\n  query GetPostCodeAreaForSelect($countryId: Int, $q: String) {\n    items: PostcodeArea(\n      where: { name: { _ilike: $q }, countryId: { _eq: $countryId } }\n      order_by: { name: asc }\n    ) {\n      area\n      label: name\n      value: id\n    }\n  }\n"]);return m=function(){return n},n}function _(){var n=(0,r.Z)(['\n  query GetServicesForSelect($q: String, $limit: Int, $offset: Int) {\n    items: Service(\n      where: { name: { _ilike: $q }, status: { _eq: "active" } }\n      limit: $limit\n      offset: $offset\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n']);return _=function(){return n},n}function f(){var n=(0,r.Z)(['\n  query GetFinancialJob(\n    $adminId: Int\n    $customerId: Int\n    $endDate: timestamptz\n    $startDate: timestamptz\n    $limit: Int\n    $status: [String]\n    $managerId: Int\n    $locationId: Int\n    $offset: Int\n    $supplierId: Int\n    $q: String\n    $orderBy: Job_order_by!\n  ) {\n    jobs: Job(\n      limit: $limit\n      offset: $offset\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      type\n      number\n      status\n      description\n      reference\n      timingStart\n      scheduledAt\n      createdAt\n\n      customerTotal: customerFinances(path: "amountInfo.total")\n      supplierTotal: supplierFinances(path: "amountInfo.total")\n      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")\n      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")\n      customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")\n      supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")\n      customerRebateAmount: customerFinances(path: "rebate.amount")\n\n      slaId\n      invoices: Invoices(order_by: { createdAt: desc }) {\n        invoiceNumber\n      }\n      customer: Customer {\n        id\n        name\n      }\n      supplier: Supplier {\n        id\n        name\n      }\n      location: Location {\n        id\n        name\n      }\n      sublocation: Sublocation {\n        id\n        name\n      }\n      sla: SLA {\n        name\n      }\n      manager: Manager {\n        fullName\n        nameLast\n        nameFirst\n        id\n      }\n      service: Service {\n        id\n        name\n      }\n    }\n    meta: Job_aggregate(\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return f=function(){return n},n}var g=(0,i.Ps)(a()),I=(0,i.Ps)(s()),$=(0,i.Ps)(u()),y=(0,i.Ps)(o());(0,i.Ps)(c()),(0,i.Ps)(d());var v=(0,i.Ps)(l()),A=(0,i.Ps)(p()),b=(0,i.Ps)(m()),q=(0,i.Ps)(_());(0,i.Ps)(f())},73338:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return q}});var r=t(85893),i=t(19076),a=t(47568),s=t(26042),u=t(69396),o=t(828),c=t(97582),d=t(67294),l=t(6388),p=t(50319),m=t(14067),_=t(11163),f=t.n(_),g=t(18586),I=t(73987),$=t(58473),y=t(94922),v=t(21937),A=t(41255),b=function(){var n=(0,g.q)(),e=(0,d.useContext)(I.Z).user,t=(0,_.useRouter)().query,i=(0,d.useState)(!1),b=i[0],q=i[1],h=(0,d.useState)([]),S=h[0],w=h[1],Z=(0,d.useState)(!1),C=Z[0],D=Z[1],k=(0,A.RM)(e.id),P=(0,l.aM)(m.R7,{variables:{id:t.id}}),N=P.loading,x=P.data,U=(void 0===x?{supplier:{}}:x).supplier,F=(0,A.BR)({adminId:e.id,xeroClientId:t.clientId||null},[n.admin]),L=F.onCallAuthorize,j=F.onGetXeroContacts;(0,d.useEffect)(function(){var n,e=(n=(0,a.Z)(function(n){var e,t;return(0,c.__generator)(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,j(n)];case 1:return t=e.sent().map(function(n){return{label:"".concat(n.name," - ").concat(n.contactID),value:n.contactID}}),D(!1),w(t),[3,3];case 2:return e.sent(),D(!0),[3,3];case 3:return[2]}})}),function(e){return n.apply(this,arguments)});(null==k?void 0:k.companyId)&&e(k.companyId)},[null==k?void 0:k.companyId]);var E,O=(0,o.Z)((0,p.D)(m.D7,{onCompleted:function(n){var e=n.update_Account_by_pk.id;f().push("".concat("/dashboard/suppliers/","view?id=").concat(e))}}),1)[0],R=(E=(0,a.Z)(function(n){var e,t;return(0,c.__generator)(this,function(r){switch(r.label){case 0:return r.trys.push([0,,2,3]),q(!0),t={supplierId:U.id,supplier:{managerId:n.managerSelected.value,name:n.name,website:n.website||null,companyNumber:n.companyNumber||null,vatId:n.vatId||null,status:n.status},supplierDetails:{typeOfOrganisation:n.typeOfOrganisation||null,quotingEmail:n.quotingEmail||null,utrNumber:n.utrNumber||null,cisRegistered:n.cisRegistered||null}},(null===(e=n.xeroContact)||void 0===e?void 0:e.value)&&(t.supplier.meta=(0,u.Z)((0,s.Z)({},U.meta),{xeroContactId:n.xeroContact.value,xeroAssignedCompanyId:null==k?void 0:k.companyId})),[4,O({variables:t})];case 1:return r.sent(),[3,3];case 2:return q(!1),[7];case 3:return[2]}})}),function(n){return E.apply(this,arguments)}),T=function(){L(window.location.href)};return!N&&(0,r.jsx)($.P,{loading:b,account:(0,y.C)(U),onSubmit:R,schema:v.f,type:"supplier",displayXeroContacts:!!(null==k?void 0:k.clientId),xeroContacts:S,displaySignin:C,handleXeroAuthorize:T})},q=function(){return(0,r.jsx)(i.Z,{pageHeading:{heading:"Suppliers - Edit"},View:(0,r.jsx)(b,{})})}}},function(n){n.O(0,[2283,212,8890,619,2583,6043,1838,3911,1417,3776,3054,4043,1144,699,4972,274,9774,2888,179],function(){return n(n.s=65162)}),_N_E=n.O()}]);