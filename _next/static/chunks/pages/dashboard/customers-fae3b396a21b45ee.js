(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1525],{65725:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customers",function(){return t(58918)}])},5336:function(n,e,t){"use strict";t.d(e,{C:function(){return q}});var i=t(85893),r=t(67294),a=t(45697),o=t.n(a),s=t(93946),c=t(25464),u=t(18972),d=t(57976),l=t(73890),m=t(69008),p=t(41687),g=t(60888),f=t(40535),h=t(63441),v=t(41733),x=t(77957),b=t(2548),Z=t(24519),y=t(2391),I=t(69308),_=t(79369),j=t(22961),C=t(28201),S=t(51233),$=t(15861),A={add:(0,i.jsx)(p.Z,{}),archive:(0,i.jsx)(l.Z,{}),avatar:(0,i.jsx)(C.Z,{}),check:(0,i.jsx)(g.Z,{}),delete:(0,i.jsx)(v.Z,{}),description:(0,i.jsx)(f.Z,{}),download:(0,i.jsx)(h.Z,{}),info:(0,i.jsx)(b.Z,{}),edit:(0,i.jsx)(x.Z,{}),location:(0,i.jsx)(I.Z,{}),unarchive:(0,i.jsx)(m.Z,{}),uploadFile:(0,i.jsx)(Z.Z,{}),receipt:(0,i.jsx)(y.Z,{}),visibility:(0,i.jsx)(j.Z,{})},w={default:(0,i.jsx)(d.Z,{}),defaultHoriz:(0,i.jsx)(_.Z,{}),description:(0,i.jsx)(f.Z,{})},q=function(n){var e=n.actionsData,t=n.icon,a=n.row,o=n.disabled,d=(0,r.useState)(null),l=d[0],m=d[1],p=function(n){n.stopPropagation(),m(n.currentTarget)},g=function(){m(null)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:o,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:p,children:w[t]}),(0,i.jsx)(c.Z,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:g,PaperProps:{sx:{borderRadius:2}},children:e(a).map(function(n,e){return(0,i.jsx)(u.Z,{disabled:n.disabled,onClick:function(e){n.onClick(e),g()},sx:{pl:3,pr:4},children:(0,i.jsxs)(S.Z,{direction:"row",alignItems:"center",spacing:2,children:[(null==A?void 0:A[n.icon])||null,(0,i.jsx)($.Z,{children:n.tooltip})]})},e)})})]})};q.propTypes={actionsData:o().func.isRequired,icon:o().oneOf(["default","description"]),row:o().any.isRequired,disabled:o().bool},q.defaultProps={actionsData:function(){return[{disabled:!1,onClick:function(){},icon:"edit",tooltip:"Edit"}]},icon:"default",disabled:!1}},48580:function(n,e,t){"use strict";t.d(e,{q:function(){return g}});var i=t(26042),r=t(69396),a=t(99534),o=t(85893),s=t(87918),c=t(98456),u=t(23776),d=t(50135),l=t(67294),m=t(45697),p=t.n(m),g=function(n){var e=n.loading,t=n.setSearch,m=n.textFieldProps,p=(0,a.Z)(n,["loading","setSearch","textFieldProps"]),g=(0,l.useState)(""),f=g[0],h=g[1];return(0,l.useEffect)(function(){var n=setTimeout(function(){t(f)},500);return function(){return clearTimeout(n)}},[f,t]),(0,o.jsx)(u.Z,(0,r.Z)((0,i.Z)({isOptionEqualToValue:function(n,e){return n.value===e.value}},p),{loading:e,onInputChange:function(n,e){h(e)},getOptionLabel:function(n){return n.label},renderTags:function(n,e){return n.map(function(n,t){return(0,o.jsx)(s.Z,(0,i.Z)({size:"small",label:n.label},e({index:t})))})},renderInput:function(n){return(0,o.jsx)(d.Z,(0,r.Z)((0,i.Z)({},n,m),{InputProps:(0,r.Z)((0,i.Z)({},n.InputProps,m.InputProps||{}),{endAdornment:(0,o.jsxs)(o.Fragment,{children:[e?(0,o.jsx)(c.Z,{color:"inherit",size:20}):null,n.InputProps.endAdornment]})})}))}}))};g.defaultProps={color:"secondary",onChange:function(){},options:[],onOpen:function(){},setSearch:function(){},textFieldProps:{}},g.propTypes={multiple:p().bool,limitTags:p().number,filterSelectedOptions:p().bool,color:p().string,loading:p().bool,value:p().oneOf([p().array,p().object]),onChange:p().func,options:p().arrayOf(p().shape({value:p().any.isRequired,label:p().string.isRequired})).isRequired,onOpen:p().func,setSearch:p().func,textFieldProps:p().shape({label:p().string,variant:p().oneOf(["standard"]),color:p().string,error:p().bool,helperText:p().string})}},66779:function(n,e,t){"use strict";t.d(e,{G5:function(){return m},UB:function(){return g},Ve:function(){return h},Wn:function(){return v},bD:function(){return x},kJ:function(){return p},rM:function(){return f}});var i=t(7297),r=t(75063);function a(){var n=(0,i.Z)(['\n  query GetFinancialJob(\n    $adminId: Int\n    $customerId: Int\n    $endDate: timestamptz\n    $startDate: timestamptz\n    $limit: Int\n    $status: [String]\n    $managerId: Int\n    $locationId: Int\n    $offset: Int\n    $supplierId: Int\n    $q: String\n    $orderBy: Job_order_by!\n  ) {\n    jobs: Job(\n      limit: $limit\n      offset: $offset\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      type\n      number\n      status\n      description\n      reference\n      timingStart\n      scheduledAt\n      createdAt\n\n      customerTotal: customerFinances(path: "amountInfo.total")\n      supplierTotal: supplierFinances(path: "amountInfo.total")\n      customerVatTotal: customerFinances(path: "amountInfo.vatTotal")\n      supplierVatTotal: supplierFinances(path: "amountInfo.vatTotal")\n      customerExpensesTotal: customerFinances(path: "expensesInfo.expensesTotal")\n      supplierExpensesTotal: supplierFinances(path: "expensesInfo.expensesTotal")\n      customerRebateAmount: customerFinances(path: "rebate.amount")\n\n      slaId\n      invoices: Invoices(order_by: { createdAt: desc }) {\n        invoiceNumber\n      }\n      customer: Customer {\n        id\n        name\n      }\n      supplier: Supplier {\n        id\n        name\n      }\n      location: Location {\n        id\n        name\n      }\n      sublocation: Sublocation {\n        id\n        name\n      }\n      sla: SLA {\n        name\n      }\n      manager: Manager {\n        fullName\n        nameLast\n        nameFirst\n        id\n      }\n      service: Service {\n        id\n        name\n      }\n    }\n    meta: Job_aggregate(\n      where: {\n        type: { _in: ["reactive", "ppm"] }\n        _and: [\n          {\n            _or: [\n              { reference: { _ilike: $q } }\n              { title: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { number: { _ilike: $q } }\n              { Invoices: { invoiceNumber: { _ilike: $q } } }\n            ]\n          }\n          {\n            _or: [\n              { _and: [{ timingStart: { _gte: $startDate } }, { timingStart: { _lte: $endDate } }] }\n              { _and: [{ scheduledAt: { _gte: $startDate } }, { scheduledAt: { _lte: $endDate } }] }\n            ]\n          }\n        ]\n        status: { _in: $status }\n        customerId: { _eq: $customerId }\n        supplierId: { _eq: $supplierId }\n        managerId: { _eq: $managerId }\n        adminId: { _eq: $adminId }\n        locationId: { _eq: $locationId }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return a=function(){return n},n}function o(){var n=(0,i.Z)(['\n  query GetCustomers(\n    $customerManagerId: Int\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: Account_order_by!\n    $status: String\n  ) {\n    customers: Account(\n      limit: $limit\n      offset: $offset\n      where: {\n        type: { _eq: "customer" }\n        createdAt: { _eq: $date }\n        managerId: { _eq: $customerManagerId }\n        name: { _ilike: $q }\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      createdAt\n      name\n      companyNumber\n      vatId\n      website\n      status\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      locations: Account_Locations {\n        id\n      }\n      finance: Financial {\n        id\n        invoicing\n        serviceRate\n        stripeId\n        totalRevenue\n        unpaidInvoices\n        creditLimit\n        creditRating\n        createdAt\n        amountOutstanding\n        accountId\n        approvalThreshold\n        arrangementFee\n        spendThreshold\n        defaultPaymentMethod\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n      }\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n          accounts: Account_Users {\n            id\n            role\n            position\n            isContact\n            status\n            account: Account {\n              id\n              name\n              type\n            }\n          }\n        }\n      }\n    }\n    meta: Account_aggregate(\n      where: {\n        type: { _eq: "customer" }\n        createdAt: { _eq: $date }\n        managerId: { _eq: $customerManagerId }\n        name: { _ilike: $q }\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return o=function(){return n},n}function s(){var n=(0,i.Z)(['\n  query GetCustomer($id: Int!) {\n    customer: Account_by_pk(id: $id) {\n      id\n      name\n      clientType: ClientType {\n        id\n        name\n      }\n      structure\n      companyNumber\n      vatId\n      website\n      status\n      createdAt\n      updatedAt\n      status\n      type\n      meta\n      usersMeta: Account_Users_aggregate {\n        aggregate {\n          count\n        }\n      }\n      propertiesMeta: Account_Locations_aggregate {\n        aggregate {\n          count\n        }\n      }\n      jobsMeta: CustomerJobs_aggregate {\n        aggregate {\n          count\n        }\n      }\n      addresses: Addresses(where: { entity: { _eq: "Account" } }) {\n        id\n        registered\n        operating\n        trading\n        invoice\n        status\n        createdAt\n        address: Address {\n          id\n          name\n          addressLine1\n          addressLine2\n          addressLine3\n          city\n          county\n          geo\n          postCode\n          country: Country {\n            id\n            name\n          }\n        }\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n        phone\n        email\n      }\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        role\n        position\n        isContact\n        lastSignInAt\n        userId\n        user: User {\n          id\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n          email\n          createdAt\n          fullName\n          accounts: Account_Users {\n            id\n            role\n            position\n            isContact\n            status\n            account: Account {\n              id\n              name\n              type\n            }\n          }\n        }\n      }\n      bankAccounts: BankAccounts {\n        id\n        stripeId\n        accountNumber\n        routingNumber\n        bic\n        iban\n        status\n        default\n        createdAt\n      }\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      cards: Cards {\n        id\n        stripeId\n        type\n        last4\n        expYear\n        expMonth\n        status\n        default\n        createdAt\n      }\n      jobs: CustomerJobs {\n        id\n        title\n      }\n      finance: Financial {\n        id\n        invoicing\n        serviceRate\n        stripeId\n        totalRevenue\n        unpaidInvoices\n        creditLimit\n        creditRating\n        createdAt\n        amountOutstanding\n        accountId\n        approvalThreshold\n        arrangementFee\n        spendThreshold\n        defaultPaymentMethod\n      }\n      accountEntries: AccountEntries(order_by: { createdAt: asc }) {\n        id\n        outstandingAmount\n        type\n        entryId\n        currencyId\n        createdAt\n        balance\n        amount\n        accountId\n        updatedAt\n      }\n    }\n  }\n']);return s=function(){return n},n}function c(){var n=(0,i.Z)(["\n  query GetCustomerManage($id: Int!) {\n    customer: Account_by_pk(id: $id) {\n      id\n      name\n      website\n      companyNumber\n      vatId\n      meta\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        isContact\n        userId\n        user: User {\n          id\n          email\n          fullName\n          meta\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n        }\n      }\n      clientType: ClientType {\n        id\n        label: name\n        value: id\n      }\n      status\n      managerSelected: Manager {\n        id\n        label: fullName\n        value: id\n      }\n    }\n  }\n"]);return c=function(){return n},n}function u(){var n=(0,i.Z)(["\n  mutation AddCustomer($objects: [Account_insert_input!]!) {\n    insert_Account(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return u=function(){return n},n}function d(){var n=(0,i.Z)(["\n  mutation UpdateCustomer(\n    $customerId: Int!\n    $customer: Account_set_input\n    $userId: Int!\n    $user: User_set_input\n    $hasUpdateUser: Boolean!\n  ) {\n    update_Account_by_pk(pk_columns: { id: $customerId }, _set: $customer) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $userId }, _set: $user) @include(if: $hasUpdateUser) {\n      id\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=(0,i.Z)(["\n  mutation AddFinancial($objects: [Financial_insert_input!]!) {\n    insert_Financial(objects: $objects) {\n      returning {\n        id\n        accountId\n        locationId\n      }\n    }\n  }\n"]);return l=function(){return n},n}var m=(0,r.Ps)(a()),p=(0,r.Ps)(o()),g=(0,r.Ps)(s()),f=(0,r.Ps)(c()),h=(0,r.Ps)(u()),v=(0,r.Ps)(d()),x=(0,r.Ps)(l())},12547:function(n,e,t){"use strict";t.d(e,{r:function(){return l}});var i=t(26042),r=t(69396),a=t(85893),o=t(45697),s=t.n(o),c=t(41664),u=t.n(c),d=t(23795),l=function(n){var e=n.children,t=n.href,o=n.noWrap,s=n.target,c=n.sx,l=void 0===c?{}:c;return o?(0,a.jsx)(a.Fragment,{children:e}):t?(0,a.jsx)(u(),{href:t,target:s,passHref:!0,children:(0,a.jsx)(d.Z,(0,r.Z)((0,i.Z)({sx:l},n),{children:e}))}):(0,a.jsx)(d.Z,(0,r.Z)((0,i.Z)({sx:l},n),{children:e}))};l.defaultProps={onClick:function(n){n.stopPropagation()}},l.propTypes={onClick:s().func,href:s().string,noWrap:s().bool,color:s().string}},93884:function(n,e,t){"use strict";t.d(e,{C:function(){return p}});var i=t(26042),r=t(69396),a=t(85893);t(67294);var o=t(45697),s=t(90948),c=t(15861),u=t(51233),d=t(11057),l=t(61730),m=(0,s.ZP)("img")({width:"300px",height:"250px"}),p=function(n){var e=n.imageSrc,t=n.sx,o=n.imageSx,s=n.title,p=n.titleSx,g=n.subtitleFirstLine,f=n.subtitleFirstLineSx,h=n.subtitleSecondLine,v=n.subtitleSecondLineSx,x=n.buttonText,b=n.onAction,Z=(0,l.Z)("(max-width: 400px)");return(0,a.jsxs)(u.Z,{sx:(0,r.Z)((0,i.Z)({},t),{width:"100%",height:"100%"}),justifyContent:"center",alignItems:"center",spacing:2,color:"#757575",children:[(0,a.jsx)(m,{src:e,sx:(0,r.Z)((0,i.Z)({},o),{width:Z?"250px":"300px"})}),(0,a.jsx)(c.Z,{typography:"h5",sx:(0,i.Z)({},p),children:s}),(0,a.jsxs)(u.Z,{alignItems:"center",sx:{padding:"0px 10px",textAlign:"center"},children:[(0,a.jsx)(c.Z,{sx:(0,i.Z)({},f),children:g}),(0,a.jsx)(c.Z,{sx:(0,i.Z)({},v),children:h})]}),x&&b&&(0,a.jsx)(d.Z,{variant:"contained",color:"secondary",onClick:b,children:x})]})};p.propTypes={imageSrc:o.string,title:o.string,subtitleFirstLine:o.string,subtitleSecondLine:o.string,onAction:o.func,sx:o.object,imageSx:o.object,titleSx:o.object,subtitleFirstLineSx:o.object,subtitleSecondLineSx:o.object},p.defaultProps={title:"",subtitleFirstLine:"",subtitleSecondLine:"",sx:{},imageSx:{},titleSx:{},subtitleFirstLineSx:{},subtitleSecondLineSx:{},onAction:null}},15033:function(n,e,t){"use strict";t.d(e,{i:function(){return C}});var i=t(14924),r=t(26042),a=t(69396),o=t(85893),s=t(67294),c=t(11163),u=t(45697),d=t.n(u),l=t(61870),m=t(5616),p=t(51233),g=t(15861),f=t(90948),h=t(41796),v=t(29217),x=t(45111),b=t(46003),Z=t(70872),y=t(58886),I=t(61730),_=function(n){var e=n.currentPage,t=n.totalCount,i=n.pageSize,a=n.onPageChange,s=(0,I.Z)("(max-width:400px)"),c=(0,I.Z)("(max-width:500px)");return(0,o.jsx)(j,{mb:2,page:e,count:Math.ceil(t/i),onChange:function(n,e){return a(e)},variant:"outlined",shape:"rounded",size:s?"small":"medium",hidePrevButton:1===e,hideNextButton:e===Math.ceil(t/i),siblingCount:c?0:1,renderItem:function(n){return(0,o.jsx)(y.Z,(0,r.Z)({slots:{previous:function(){return"Previous"},next:function(){return"Next"}}},n))}})};_.defaultProps={currentPage:1,totalCount:0,pageSize:50,onPageChange:function(){}},_.propTypes={currentPage:d().number,totalCount:d().number,pageSize:d().number,onPageChange:d().func};var j=(0,f.ZP)(Z.Z)(function(n){var e,t=n.hidePrevButton,a=n.hideNextButton,o=n.theme;return e={},(0,i.Z)(e,"&.MuiPagination-root",{alignSelf:"center",marginTop:"16px"}),(0,i.Z)(e,"& .MuiPaginationItem-root",{fontWeight:600,margin:0,borderRadius:0}),(0,i.Z)(e,"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child",{margin:0,borderRadius:"0 5px 5px 0"}),(0,i.Z)(e,"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child",{margin:0,borderRadius:"5px 0 0 5px"}),(0,i.Z)(e,"& button.Mui-selected",(0,r.Z)({color:o.palette.white.main,backgroundColor:o.palette.secondary.main},a?{borderRadius:"0 5px 5px 0"}:{},t?{borderRadius:"5px 0 0 5px"}:{})),e}),C=(0,s.forwardRef)(function(n,e){var t=n.columns,i=n.history,a=n.initialSort,u=n.meta,d=n.refetch,l=n.paginationSize,m=n.containerHeight,f=n.noResultsMessage,h=n.autoHeight,Z=(0,c.useRouter)(),y=Z.query,I=void 0===y?{}:y,j=(0,s.useState)(parseInt(null==I?void 0:I.page,10)||1),C=j[0],A=j[1],w=(0,s.useState)(l||b.C1.paginationSize),q=w[0],M=w[1];a||(a={item:"createdAt",order:"desc"});var k=(0,s.useState)({item:a.item,order:a.order}),P=k[0],F=k[1],T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=Z.query,t=void 0===e?{}:e;if(n>1?t.page=n:delete t.page,!(Object.keys(t).length>0))return{};var i=Object.keys(t).map(function(e){return"page"===e?"".concat(e,"=").concat(n):"".concat(e,"=").concat(t[e])}).join("&");return"?".concat(i)},D=function(){F({item:a.item,order:a.order}),A(1);var n=T();Z.push(n),M(l||b.C1.paginationSize)};(0,s.useImperativeHandle)(e,function(){return{currentPage:C,pageSize:q,sort:P,resetPagination:function(){D()}}});var N=function(n){var e=T(n);i&&Z.push(e),A(n),!i&&d&&d()},U=function(n){n&&n.field&&n.sort?(F({item:t.find(function(e){return e.field===n.field}).sortName||n.field||n.item||a.item,order:n.sort||n.order||a.order}),d&&d()):(F({item:a.item,order:a.order}),d&&d())};return(0,o.jsxs)(S,{containerHeight:m,children:[(0,o.jsx)($,(0,r.Z)({hideFooter:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:h,sortingMode:"server",onSortModelChange:function(n){return U(n[0])},columns:t,pageSize:q,slots:{columnSortedAscendingIcon:function(){return(0,o.jsx)(v.Z,{})},columnSortedDescendingIcon:function(){return(0,o.jsx)(x.Z,{})},columnUnsortedIcon:function(){return(0,o.jsxs)(p.Z,{alignItems:"center",sx:{width:"33px"},children:[(0,o.jsx)(v.Z,{sx:{marginBottom:"-15px"}}),(0,o.jsx)(x.Z,{})]})},noResultsOverlay:function(){return(0,o.jsx)(p.Z,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,o.jsx)(g.Z,{children:f})})},noRowsOverlay:function(){return(0,o.jsx)(p.Z,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,o.jsx)(g.Z,{children:f})})}}},n)),u&&Math.ceil(u.aggregate.totalCount/q)>1&&(0,o.jsx)(_,{currentPage:C,totalCount:u.aggregate.totalCount,pageSize:q,onPageChange:N})]})});C.propTypes={history:d().bool,initialSort:d().object,loading:d().bool,meta:d().object,refetch:d().func,paginationSize:d().number,noResultsMessage:d().string,columns:d().array.isRequired,rows:d().array.isRequired,autoHeight:d().bool},C.defaultProps={columns:[],history:!1,loading:!1,rows:[],noResultsMessage:"There are no results.",autoHeight:!0};var S=(0,f.ZP)(m.Z)(function(n){return{height:n.containerHeight,display:"flex",flexDirection:"column"}}),$=(0,f.ZP)(l.s)(function(n){var e,t=n.theme,o=n.hideHeader,s=(n.rows,n.loading,n.rowHeight),c=n.isPdf;return e={"--DataGrid-overlayHeight":"40px"},(0,i.Z)(e,"&.MuiDataGrid-root",(0,r.Z)({color:t.palette.black.main,border:"none"},c&&{"@media print":{display:"block"}})),(0,i.Z)(e,"& .MuiDataGrid-main",(0,r.Z)({},c&&{"@media print":{overflow:"visible !important"}})),(0,i.Z)(e,"& .MuiDataGrid-columnHeaders",(0,a.Z)((0,r.Z)({},o&&{display:"none"}),{"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}})),(0,i.Z)(e,"& .MuiDataGrid-virtualScroller",(0,r.Z)({},o&&{marginTop:"0 !important"},c&&{"@media print":{overflow:"visible !important"}})),(0,i.Z)(e,"& .MuiDataGrid-iconSeparator",{opacity:0}),(0,i.Z)(e,"& .MuiDataGrid-columnHeaderTitle",{fontWeight:700}),(0,i.Z)(e,"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle",{fontWeight:700}),(0,i.Z)(e,"& .MuiDataGrid-virtualScrollerContent",(0,r.Z)({},c&&{height:"initial !important",minHeight:"initial !important"})),(0,i.Z)(e,"& .MuiDataGrid-virtualScrollerRenderZone",(0,r.Z)({},c&&{position:"relative"})),(0,i.Z)(e,"& .MuiDataGrid-overlayWrapper",(0,i.Z)({},"& .MuiCircularProgress-root",{color:t.palette.secondary.main})),(0,i.Z)(e,"& .MuiDataGrid-row",(0,r.Z)({},c&&{minHeight:"".concat(s,"cm !important"),maxHeight:"".concat(s,"cm !important")})),(0,i.Z)(e,"& .MuiDataGrid-row > .MuiDataGrid-cell",(0,r.Z)({},c&&{minHeight:"".concat(s,"cm !important"),maxHeight:"".concat(s,"cm !important")})),(0,i.Z)(e,"& .MuiDataGrid-row.even",{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,h.Fq)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,h.Fq)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,h.Fq)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,h.Fq)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}),e})},20705:function(n,e,t){"use strict";t.d(e,{x:function(){return d}});var i=t(14924),r=t(26042),a=t(69396),o=t(67294),s=t(96486),c=t(46003),u=function(n){try{return JSON.parse(n)}catch(e){return!1}},d=function(n){var e,t,d,l,m,p,g,f,h,v,x,b=n.filters,Z=n.newFilters,y=n.initialSort,I=(0,o.useRef)(),_=(0,o.useState)({}),j=_[0],C=_[1],S=(0,o.useState)({}),$=S[0],A=S[1],w=y||{item:"createdAt",order:"desc"},q=(0,i.Z)({},(null===(e=I.current)||void 0===e?void 0:e.sort.item)||w.item,w.inneritem?(0,i.Z)({},w.inneritem,(null===(t=I.current)||void 0===t?void 0:t.sort.order)||w.order):(null===(d=I.current)||void 0===d?void 0:d.sort.order)||w.order);return(0,o.useEffect)(function(){var n=!(0,s.isEqual)(j,b),e=!(0,s.isEqual)($,Z);if(n&&(C(b),null==I||null===(i=I.current)||void 0===i||i.resetPagination()),e&&(A(Z),null==I||null===(r=I.current)||void 0===r||r.resetPagination()),(null==I?void 0:null===(t=I.current)||void 0===t?void 0:t.setSort)&&!(n||e)){var t,i,r,a,o,c,u,d,l,m,p,g=(null===(a=I.current)||void 0===a?void 0:null===(o=a.sort)||void 0===o?void 0:o.item)&&(null===(c=I.current)||void 0===c?void 0:null===(u=c.sort)||void 0===u?void 0:u.order)?{item:null===(d=I.current)||void 0===d?void 0:null===(l=d.sort)||void 0===l?void 0:l.item,order:null===(m=I.current)||void 0===m?void 0:null===(p=m.sort)||void 0===p?void 0:p.order}:q;I.current.setSort(g)}},[b,Z]),{initialData:(0,a.Z)((0,r.Z)({},b),{newFilters:(null==Z?void 0:Z.length)>0?Z:void 0,limit:(null===(l=I.current)||void 0===l?void 0:l.pageSize)==="Infinity"?null:parseInt(null===(m=I.current)||void 0===m?void 0:m.pageSize,10)||c.C1.paginationSize,offset:((null===(p=I.current)||void 0===p?void 0:p.currentPage)-1||0)*((null===(g=I.current)||void 0===g?void 0:g.pageSize)||c.C1.paginationSize),orderBy:u(null===(f=I.current)||void 0===f?void 0:null===(h=f.sort)||void 0===h?void 0:null===(v=h.item)||void 0===v?void 0:v.replace(/ORDER/i,null===(x=I.current)||void 0===x?void 0:x.sort.order))||q}),initialSort:y,ref:I}}},9492:function(n,e,t){"use strict";t.d(e,{S:function(){return i}});var i=function(n,e){var t=document.createElement("a");"string"==typeof t.download?(document.body.appendChild(t),t.download=e,t.href=n,t.click(),document.body.removeChild(t)):location.replace(n)}},59938:function(n,e,t){"use strict";t.d(e,{X:function(){return g}});var i=t(14924),r=t(82670),a=t(828),o=t(7297),s=t(67294),c=t(6388),u=t(50319),d=t(75063),l=t(18586);function m(){var n=(0,o.Z)(["\n  query GetAccountUserFilters($accountUserId: Int!) {\n    accountUser: Account_User_by_pk(id: $accountUserId) {\n      filters\n    }\n  }\n"]);return m=function(){return n},n}function p(){var n=(0,o.Z)(["\n  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {\n      id\n    }\n  }\n"]);return p=function(){return n},n}function g(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",o=(0,l.q)().user,d=(0,s.useState)(function(){try{switch(t){case"network":case"state":return e;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(n))||e}}catch(i){return e}}),m=d[0],p=d[1],g=function(e){try{var a=(0,r.Z)(e,Function)?e(m):e;switch(p(a),t){case"network":v({variables:{accountUserId:null==o?void 0:o.accountUserId,filters:(0,i.Z)({},n,a)}});break;case"sessionStorage":window.sessionStorage.setItem(n,JSON.stringify(a))}}catch(s){}};(0,c.aM)(f,{variables:{accountUserId:null==o?void 0:o.accountUserId},skip:"network"!==t,onCompleted:function(t){var i=t.accountUser;i&&p(i.filters[n]||e)}});var v=(0,a.Z)((0,u.D)(h),1)[0];return[m,g]}var f=(0,d.Ps)(m()),h=(0,d.Ps)(p())},58918:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Y}});var i=t(85893),r=t(58849),a=t(26042),o=t(69396),s=t(828),c=t(45697),u=t.n(c),d=t(67294),l=t(30381),m=t.n(l),p=t(11163),g=t.n(p),f=t(6388),h=t(73359),v=t(66779),x=t(57460),b=t.n(x),Z=t(11057),y=t(51233),I=t(90629),_=t(15861),j=t(98456),C=t(15033),S=t(81261),$=t(85113),A=t(20705),w=t(9492),q=t(63139),M=t(2845),k=t(12547),P=t(5336),F=t(11994),T=t(90948),D=t(50135),N=t(61730),U=t(42283),L=t(4972),R=t(48580),O=t(59938),G=function(n){var e=n.initialFilters,t=n.filters,r=n.setFilters,c=n.open,u=n.onClose,l=(0,M.x)().user,m=(0,d.useState)(""),p=m[0],g=m[1],h=(0,N.Z)("(max-width: 400px)"),v=(0,s.Z)((0,O.X)("form_data_".concat(e.filterType),e),2),x=v[0],b=v[1],_=(0,U.cI)({defaultValues:x}),j=_.control,C=_.handleSubmit,S=_.register,$=_.reset,A=_.errors,w=(0,f.aM)(L.K4,{variables:{accountId:l.accountId,limit:50,offset:0,q:""!==p?"%".concat(p,"%"):null}}),q=w.data,k=(void 0===q?{items:[]}:q).items,P=w.loading,F=function(n){var i,s,c=(0,o.Z)((0,a.Z)({},t,n),{customerManagerId:null!==(s=null==n?void 0:null===(i=n.customerManager)||void 0===i?void 0:i.value)&&void 0!==s?s:null,q:n.q});r((0,o.Z)((0,a.Z)({},c),{q:n.q?"%".concat(n.q,"%"):null})),b((0,o.Z)((0,a.Z)({},c),{filterType:e.filterType})),$(),u()},T=function(){r(e),$(),u(),b((0,o.Z)((0,a.Z)({},e),{filterType:e.filterType}))};return(0,i.jsx)(z,{open:c,onClose:u,children:(0,i.jsx)(I.Z,{sx:{minWidth:h?"300px":"400px",padding:"20px 40px"},children:(0,i.jsxs)("form",{onSubmit:C(F),children:[(0,i.jsxs)(y.Z,{spacing:4,children:[(0,i.jsx)(D.Z,{fullWidth:!0,variant:"standard",color:"secondary",label:"Search...",name:"q",inputRef:S}),(0,i.jsx)(U.Qr,{name:"customerManager",control:j,render:function(n){var e=n.value,t=n.onChange;return(0,i.jsx)(R.q,{value:e,onChange:function(n,e){t(e)},loading:P,options:k,setSearch:g,textFieldProps:{color:"secondary",variant:"standard",label:"Select account manager"},size:"small"})}}),(0,i.jsx)(U.Qr,{name:"status",control:j,render:function(n){var e,t=n.value,r=n.onChange;return(0,i.jsx)(R.q,{limitTags:6,color:"secondary",value:t,onChange:function(n,e){return r(e)},options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}],textFieldProps:{label:"Select status",variant:"standard",color:"secondary",error:A.status,helperText:null===(e=A.status)||void 0===e?void 0:e.message}})}})]}),(0,i.jsxs)(y.Z,{width:"100%",direction:"row",justifyContent:"flex-end",spacing:2,sx:{margin:"20px 0"},children:[(0,i.jsx)(Z.Z,{variant:"contained",color:"danger",onClick:function(){return T()},children:"Cancel"}),(0,i.jsx)(Z.Z,{variant:"contained",color:"secondary",type:"submit",children:"Search"})]})]})})})},z=(0,T.ZP)(F.Z)(function(){return{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}});G.propTypes={initialFilters:u().object,filters:u().object,setFilters:u().func,open:u().bool,onClose:u().func};var E=t(93884),H="/dashboard/customers/",B=function(n){var e,t,r=n.initialFilters,c=(0,d.useState)((0,a.Z)({},r)),u=c[0],l=c[1],p=(0,A.x)({filters:u}),x=p.initialData,F=p.ref,T=(0,M.x)().user,D=(0,q.s)(),N=(0,d.useState)(!1),U=N[0],L=N[1],R=(0,d.useState)(!1),O=R[0],z=R[1],B=(0,f.aM)(v.kJ,{variables:(0,o.Z)((0,a.Z)({assignedUser:r.assignedUser?T.id:null},x),{status:x.status.value})}),W=B.data,J=void 0===W?{customers:[],meta:{aggregate:{totalCount:0}}}:W,Y=J.customers,V=J.meta,X=B.loading,Q=B.refetch,K=(0,s.Z)((0,h.t)(v.kJ,{fetchPolicy:"no-cache",variables:(0,o.Z)((0,a.Z)({},x),{status:x.status.value,limit:(null==V?void 0:null===(e=V.aggregate)||void 0===e?void 0:e.totalCount)||150}),onCompleted:function(n){try{var e=b().unparse(na(n.customers)),t="data:application/octet-stream,"+encodeURIComponent(e);(0,w.S)(t,"customers.csv")}finally{z(!1)}}}),1)[0],nn=function(n){n.stopPropagation(),z(!0),K()},ne=function(n){return[{context:"secondary",icon:"edit",onClick:function(e){return nr(e)(n)},tooltip:"Edit"}]},nt=function(n){g().push("".concat(H,"view?id=").concat(n.id,"&tab=details"))},ni=function(n){g().push("".concat(H,"manage"))},nr=function(n){return n.stopPropagation(),function(n){g().push("".concat(H,"manage?id=").concat(n.id))}},na=function(n){return n.map(function(n){return{name:n.name,companyNumber:n.companyNumber,vatId:n.vatId,website:n.website,status:n.status,createdAt:m()(n.createdAt).format("YYYY-MM-DD")}})},no=(0,d.useCallback)(function(){return Y.map(function(n){var e,t,i,r,a=(0,$.WE)(n,"registered"),o=null==a?void 0:null===(e=a.address)||void 0===e?void 0:e.city;return{id:n.id,managerId:null==n?void 0:null===(t=n.manager)||void 0===t?void 0:t.id,name:n.name,managerName:n.manager?"".concat(n.manager.nameFirst," ").concat(n.manager.nameLast," "):"Unassigned",contactName:(null===(i=n.contactUsers)||void 0===i?void 0:i.length)?"".concat(n.contactUsers[0].user.nameFirst," ").concat(n.contactUsers[0].user.nameLast):"Unassigned",contactId:(null===(r=n.contactUsers)||void 0===r?void 0:r.length)&&n.contactUsers[0].user.id,city:o||"",properties:n.locations.length||0,createdAt:m()(n.createdAt).format("YYYY-MM-DD"),status:n.status.charAt(0).toUpperCase()+n.status.slice(1,n.status.length),actions:""}})},[Y]),ns=(0,d.useMemo)(function(){var n={};return!no().length&&((null==x?void 0:x.q)||(null==x?void 0:x.customerManagerId))?{title:"No results",subtitleFirstLine:"The filters you have applied have returned no results",subtitleSecondLine:"Please amend and try again if necessary."}:{title:"No customers",subtitleFirstLine:"You currently have no customers set up in the system",subtitleSecondLine:"Click\xa0create customer to get started building.",buttonText:"Create customer",onAction:ni}},[null==x?void 0:x.customerManagerId,null==x?void 0:x.q,no]);return(0,i.jsxs)(i.Fragment,{children:[U&&(0,i.jsx)(G,{initialFilters:r,open:U,filters:u,setFilters:l,onClose:function(){return L(!1)}}),(0,i.jsxs)(y.Z,{width:"100%",spacing:2,sx:{height:"100%"},children:[(0,i.jsxs)(y.Z,{width:"100%",direction:"row",justifyContent:"space-between",children:[(0,i.jsx)(Z.Z,{variant:"contained",startIcon:(0,i.jsx)(S.Z,{}),onClick:function(){return L(!0)},children:"Filters"}),(0,i.jsxs)(y.Z,{direction:"row",spacing:2,children:[(0,i.jsx)(Z.Z,{variant:"contained",color:"secondary",onClick:ni,children:"Create customer"}),!D&&(0,i.jsx)(Z.Z,{startIcon:!O&&(0,i.jsx)("img",{src:"/static/icons/csv.svg"}),disabled:O,variant:"contained",color:"success",onClick:nn,children:O?(0,i.jsx)(j.Z,{size:20,color:"secondary"}):"Export"})]})]}),(0,i.jsxs)(I.Z,{sx:{padding:"16px 0px",height:"calc(100% - 52px)"},children:[(0,i.jsx)(_.Z,{ml:2,variant:"h5",sx:{fontWeight:600,marginBottom:"15px"},children:"Customers"}),(null===(t=no())||void 0===t?void 0:t.length)?(0,i.jsx)(C.i,{ref:F,loading:X,columns:[{flex:1,field:"name",headerName:"Name",minWidth:300},{flex:1,field:"manager",headerName:"Account manager",minWidth:130,sortName:'{"Manager": {"nameFirst": "ORDER"}}',renderCell:function(n){var e=n.row,t=e.managerName,r=e.managerId;return(0,i.jsx)(k.r,{color:"secondary",href:"/dashboard/users/view?id=".concat(r),children:t})}},{flex:1,field:"contactName",headerName:"Contact",minWidth:130,sortable:!1,renderCell:function(n){var e=n.row,t=e.contactName,r=e.contactId;return(0,i.jsx)(k.r,{color:"secondary",href:"/dashboard/users/view?id=".concat(r),children:t})}},{flex:1,field:"city",headerName:"City",sortable:!1,minWidth:130},{flex:1,field:"properties",headerName:"Properties",sortName:'{"Account_Locations_aggregate": {"count": "ORDER"}}',minWidth:130},{flex:1,field:"createdAt",headerName:"Created",minWidth:130},{flex:1,field:"status",headerName:"Status",minWidth:130,sortable:!1},{flex:1,field:"actions",headerName:"Actions",minWidth:130,sortable:!1,renderCell:function(n){var e=n.row;return(0,i.jsx)(P.C,{actionsData:ne,row:e})}}],rows:no(),columnVisibilityModel:{},meta:V,refetch:Q,autoHeight:!1,containerHeight:"calc(100% - 52px)",onRowClick:nt}):!X&&(0,i.jsx)(E.C,(0,a.Z)({imageSrc:"/static/icons/no_locations_found.svg"},ns))]})]})]})};B.propTypes={initialFilters:c.object};var W={q:null,status:{label:"Active",value:"active"},customerManagerId:null,filterType:"customers_list"},J=function(){return(0,i.jsx)(B,{initialFilters:W})};J.getLayout=function(n){return(0,i.jsx)(r.Z,{children:n})};var Y=J}},function(n){n.O(0,[3662,2283,212,8890,2583,4135,8579,6043,4244,3776,2329,778,1023,7454,1870,5497,9473,8849,4972,9774,2888,179],function(){return n(n.s=65725)}),_N_E=n.O()}]);