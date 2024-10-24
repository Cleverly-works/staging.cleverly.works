(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2287,4972],{19883:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/services",function(){return t(57853)}])},9489:function(n,e,t){"use strict";t.d(e,{I:function(){return f}});var r=t(26042),i=t(69396),o=t(99534),a=t(85893),u=t(5616),s=t(51233),l=t(50135),c=t(90948),d=t(15861),f=function(n){var e=n.leftLabel,t=n.rightLabel,u=n.error,l=(0,o.Z)(n,["leftLabel","rightLabel","error"]);return(0,a.jsxs)(s.Z,{direction:"row",alignItems:"center",children:[(0,a.jsx)(m,{sx:{borderTopLeftRadius:"5px",borderBottomLeftRadius:"5px"},error:u,children:(0,a.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap"},children:e})}),(0,a.jsx)(p,(0,i.Z)((0,r.Z)({},l),{variant:"outlined",size:"small",error:u})),(0,a.jsx)(m,{sx:{borderTopRightRadius:"5px",borderBottomRightRadius:"5px"},error:u,children:(0,a.jsx)(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",whiteSpace:"nowrap"},variant:"body2",fontWeight:700,children:t})})]})},m=(0,c.ZP)(u.Z)(function(n){var e=n.theme;return{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:n.error?e.palette.danger.main:"#D9D9D9",minwidth:"28px",height:"28px",padding:"0 5px"}}),p=(0,c.ZP)(l.Z)(function(n){var e=n.theme,t=n.error;return{height:"28px","& .MuiInputBase-root ":{borderRadius:"0px","&.Mui-focused":{"& .MuiOutlinedInput-notchedOutline":{borderColor:t?e.palette.danger.main:"#D9D9D9"}},"& .MuiInputBase-input":{padding:"2px 14px",borderColor:t?e.palette.danger.main:"#D9D9D9",borderStyle:"solid",borderBottomWidth:"2.5px",borderTopWidth:"2px"},"& .MuiOutlinedInput-notchedOutline":{border:"none"}}}})},5336:function(n,e,t){"use strict";t.d(e,{C:function(){return j}});var r=t(85893),i=t(67294),o=t(45697),a=t.n(o),u=t(93946),s=t(25464),l=t(18972),c=t(57976),d=t(73890),f=t(69008),m=t(41687),p=t(60888),h=t(40535),v=t(63441),y=t(41733),g=t(77957),b=t(2548),x=t(24519),$=t(2391),_=t(69308),q=t(79369),I=t(22961),Z=t(28201),S=t(51233),P=t(15861),w={add:(0,r.jsx)(m.Z,{}),archive:(0,r.jsx)(d.Z,{}),avatar:(0,r.jsx)(Z.Z,{}),check:(0,r.jsx)(p.Z,{}),delete:(0,r.jsx)(y.Z,{}),description:(0,r.jsx)(h.Z,{}),download:(0,r.jsx)(v.Z,{}),info:(0,r.jsx)(b.Z,{}),edit:(0,r.jsx)(g.Z,{}),location:(0,r.jsx)(_.Z,{}),unarchive:(0,r.jsx)(f.Z,{}),uploadFile:(0,r.jsx)(x.Z,{}),receipt:(0,r.jsx)($.Z,{}),visibility:(0,r.jsx)(I.Z,{})},C={default:(0,r.jsx)(c.Z,{}),defaultHoriz:(0,r.jsx)(q.Z,{}),description:(0,r.jsx)(h.Z,{})},j=function(n){var e=n.actionsData,t=n.icon,o=n.row,a=n.disabled,c=(0,i.useState)(null),d=c[0],f=c[1],m=function(n){n.stopPropagation(),f(n.currentTarget)},p=function(){f(null)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(u.Z,{sx:{":hover":{backgroundColor:"#DDDDDD"}},disabled:a,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:m,children:C[t]}),(0,r.jsx)(s.Z,{id:"simple-menu",anchorEl:d,keepMounted:!0,open:Boolean(d),onClose:p,PaperProps:{sx:{borderRadius:2}},children:e(o).map(function(n,e){return(0,r.jsx)(l.Z,{disabled:n.disabled,onClick:function(e){n.onClick(e),p()},sx:{pl:3,pr:4},children:(0,r.jsxs)(S.Z,{direction:"row",alignItems:"center",spacing:2,children:[(null==w?void 0:w[n.icon])||null,(0,r.jsx)(P.Z,{children:n.tooltip})]})},e)})})]})};j.propTypes={actionsData:a().func.isRequired,icon:a().oneOf(["default","description"]),row:a().any.isRequired,disabled:a().bool},j.defaultProps={actionsData:function(){return[{disabled:!1,onClick:function(){},icon:"edit",tooltip:"Edit"}]},icon:"default",disabled:!1}},48580:function(n,e,t){"use strict";t.d(e,{q:function(){return p}});var r=t(26042),i=t(69396),o=t(99534),a=t(85893),u=t(87918),s=t(98456),l=t(23776),c=t(50135),d=t(67294),f=t(45697),m=t.n(f),p=function(n){var e=n.loading,t=n.setSearch,f=n.textFieldProps,m=(0,o.Z)(n,["loading","setSearch","textFieldProps"]),p=(0,d.useState)(""),h=p[0],v=p[1];return(0,d.useEffect)(function(){var n=setTimeout(function(){t(h)},500);return function(){return clearTimeout(n)}},[h,t]),(0,a.jsx)(l.Z,(0,i.Z)((0,r.Z)({isOptionEqualToValue:function(n,e){return n.value===e.value}},m),{loading:e,onInputChange:function(n,e){v(e)},getOptionLabel:function(n){return n.label},renderTags:function(n,e){return n.map(function(n,t){return(0,a.jsx)(u.Z,(0,r.Z)({size:"small",label:n.label},e({index:t})))})},renderInput:function(n){return(0,a.jsx)(c.Z,(0,i.Z)((0,r.Z)({},n,f),{InputProps:(0,i.Z)((0,r.Z)({},n.InputProps,f.InputProps||{}),{endAdornment:(0,a.jsxs)(a.Fragment,{children:[e?(0,a.jsx)(s.Z,{color:"inherit",size:20}):null,n.InputProps.endAdornment]})})}))}}))};p.defaultProps={color:"secondary",onChange:function(){},options:[],onOpen:function(){},setSearch:function(){},textFieldProps:{}},p.propTypes={multiple:m().bool,limitTags:m().number,filterSelectedOptions:m().bool,color:m().string,loading:m().bool,value:m().oneOf([m().array,m().object]),onChange:m().func,options:m().arrayOf(m().shape({value:m().any.isRequired,label:m().string.isRequired})).isRequired,onOpen:m().func,setSearch:m().func,textFieldProps:m().shape({label:m().string,variant:m().oneOf(["standard"]),color:m().string,error:m().bool,helperText:m().string})}},4972:function(n,e,t){"use strict";t.d(e,{A5:function(){return nl},Ak:function(){return B},Cj:function(){return Q},K4:function(){return no},Oq:function(){return ns},Qn:function(){return U},RJ:function(){return X},SW:function(){return O},T_:function(){return J},UH:function(){return R},UM:function(){return nr},Ve:function(){return Y},_d:function(){return z},_f:function(){return ni},by:function(){return K},cz:function(){return L},he:function(){return E},j$:function(){return N},kB:function(){return ne},kU:function(){return nn},kx:function(){return H},nD:function(){return D},nP:function(){return nu},pY:function(){return na},qd:function(){return A},t1:function(){return W},yR:function(){return V},zR:function(){return nt}});var r=t(7297),i=t(75063);function o(){var n=(0,r.Z)(["\n  query GetAddressForSelect($q: String, $entity: String!, $entityId: Int!) {\n    items: Address(\n      where: {\n        Address_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } }\n        _or: [\n          { addressLine1: { _eq: $q } }\n          { addressLine2: { _eq: $q } }\n          { addressLine3: { _eq: $q } }\n          { county: { _eq: $q } }\n          { postCode: { _eq: $q } }\n          { city: { _eq: $q } }\n        ]\n      }\n    ) {\n      label: addressLine1\n      value: id\n      id\n      name\n      addressLine1\n      addressLine2\n      addressLine3\n      postCode\n      county\n      country: Country {\n        name\n      }\n      city\n      Address_Entities {\n        invoice\n      }\n    }\n  }\n"]);return o=function(){return n},n}function a(){var n=(0,r.Z)(["\n  query GetAccountsForSelect($q: String, $type: String, $limit: Int, $offset: Int) {\n    items: Account(\n      where: { name: { _ilike: $q }, type: { _eq: $type } }\n      limit: $limit\n      offset: $offset\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n"]);return a=function(){return n},n}function u(){var n=(0,r.Z)(['\n  query GetTaxonomy($q: String, $id: Int) {\n    items: Taxonomy(\n      where: { type: { _eq: "assetCategory" }, status: { _eq: "active" } }\n      order_by: { name: asc }\n    ) {\n      label: name\n      options: Taxonomies(\n        where: {\n          type: { _eq: "assetCategory" }\n          name: { _ilike: $q }\n          id: { _eq: $id }\n          status: { _eq: "active" }\n        }\n        order_by: { name: asc }\n      ) {\n        value: id\n        label: name\n      }\n    }\n  }\n']);return u=function(){return n},n}function s(){var n=(0,r.Z)(["\n  query GetAssetsForSelect(\n    $locationId: Int\n    $q: String\n    $categoryId: Int\n    $bookable: String\n    $limit: Int\n    $offset: Int\n  ) {\n    items: Asset(\n      where: {\n        categoryId: { _eq: $categoryId }\n        locationId: { _eq: $locationId }\n        name: { _ilike: $q }\n        bookable: { _eq: $bookable }\n      }\n      limit: $limit\n      offset: $offset\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n"]);return s=function(){return n},n}function l(){var n=(0,r.Z)(['\n  query GetCustomersForSelect($q: String, $limit: Int, $offset: Int) {\n    items: Account(\n      where: { name: { _ilike: $q }, type: { _eq: "customer" } }\n      limit: $limit\n      offset: $offset\n      order_by: { name: asc }\n    ) {\n      admin: Admins {\n        id: adminId\n      }\n      label: name\n      spendThreshold: meta(path: "$.finance.spendThreshold")\n      serviceRateLabour: meta(path: "$.finance.serviceRateLabour")\n      serviceRateExpenses: meta(path: "$.finance.serviceRateExpenses")\n      value: id\n    }\n  }\n']);return l=function(){return n},n}function c(){var n=(0,r.Z)(["\n  query GetJobsForSelect($_q: Int, $locationId: Int) {\n    items: Job(\n      where: {\n        Location: { id: { _eq: $locationId } }\n        _or: [{ id: { _eq: $_q } }, { Invoices: { id: { _eq: $_q } } }]\n      }\n      order_by: { title: asc }\n    ) {\n      label: label\n      value: id\n      number\n      createdAt\n      description\n      status\n      timingStart\n      title\n      type\n      Location {\n        name\n      }\n      Taxonomy {\n        Taxonomy {\n          shortJobDescription: name\n        }\n      }\n    }\n  }\n"]);return c=function(){return n},n}function d(){var n=(0,r.Z)(['\n  query GetManagersForSelect($userId: Int, $accountId: Int!, $q: String) {\n    items: User(\n      where: {\n        status: { _eq: "active" }\n        Account_Users: {\n          role: { _in: ["owner", "manager"] }\n          status: { _eq: "active" }\n          Account: { id: { _eq: $accountId } }\n        }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        id: { _neq: $userId }\n      }\n      order_by: { nameFirst: asc }\n    ) {\n      label: fullName\n      value: id\n    }\n  }\n']);return d=function(){return n},n}function f(){var n=(0,r.Z)(['\n  query GetManagersForSelect(\n    $userId: Int\n    $accountId: Int!\n    $q: String\n    $invoiceThreshold: numeric\n    $quoteThreshold: numeric\n  ) {\n    items: User(\n      where: {\n        status: { _eq: "active" }\n        Account_Users: {\n          role: { _in: ["owner", "manager"] }\n          status: { _eq: "active" }\n          Account: { id: { _eq: $accountId } }\n        }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        id: { _neq: $userId }\n        _and: [\n          {\n            _or: [\n              { invoiceThreshold: { _gt: $invoiceThreshold } }\n              { invoiceThreshold: { _is_null: true } }\n            ]\n          }\n          {\n            _or: [\n              { quoteThreshold: { _gt: $quoteThreshold } }\n              { quoteThreshold: { _is_null: true } }\n            ]\n          }\n        ]\n      }\n      order_by: { nameFirst: asc }\n    ) {\n      label: fullName\n      value: id\n    }\n  }\n']);return f=function(){return n},n}function m(){var n=(0,r.Z)(["\n  query GetPostCodeAreaForSelect($countryId: Int, $q: String) {\n    items: PostcodeArea(\n      where: { name: { _ilike: $q }, countryId: { _eq: $countryId } }\n      order_by: { name: asc }\n    ) {\n      area\n      label: name\n      value: id\n    }\n  }\n"]);return m=function(){return n},n}function p(){var n=(0,r.Z)(['\n  query GetPropertiesForSelect($where: Location_bool_exp, $limit: Int, $offset: Int) {\n    items: Location(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {\n      label: name\n      value: id\n      access\n      permitsRequired\n      registeredAddress: Addresses(\n        where: { entity: { _eq: "Location" }, registered: { _eq: true } }\n      ) {\n        address: Address {\n          id\n          addressLine1\n          addressLine2\n          addressLine3\n          county\n          country: Country {\n            name\n          }\n          postCode\n          city\n        }\n      }\n    }\n  }\n']);return p=function(){return n},n}function h(){var n=(0,r.Z)(['\n  query GetServicesForSelect($q: String, $limit: Int, $offset: Int) {\n    items: Service(\n      where: { name: { _ilike: $q }, status: { _eq: "active" } }\n      limit: $limit\n      offset: $offset\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n']);return h=function(){return n},n}function v(){var n=(0,r.Z)(["\n  query GetSlasForSelect($q: String, $adminId: Int, $type: String) {\n    items: SLA(\n      where: { name: { _ilike: $q }, type: { _eq: $type }, adminId: { _eq: $adminId } }\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n"]);return v=function(){return n},n}function y(){var n=(0,r.Z)(["\n  query GetSlasForSelectNew($where: SLA_bool_exp, $limit: Int, $offset: Int) {\n    items: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {\n      label: name\n      value: id\n    }\n  }\n"]);return y=function(){return n},n}function g(){var n=(0,r.Z)(["\n  query GetSuppliersForSelect($where: Account_bool_exp, $limit: Int, $offset: Int) {\n    items: Account(where: $where, limit: $limit, offset: $offset, order_by: { name: asc }) {\n      label: name\n      value: id\n    }\n  }\n"]);return g=function(){return n},n}function b(){var n=(0,r.Z)(['\n  query GetUsersForSelect($accountId: Int, $q: String, $limit: Int, $offset: Int) {\n    items: User(\n      where: {\n        status: { _eq: "active" }\n        Account_Users: {\n          accountId: { _eq: $accountId }\n          isContact: { _eq: true }\n          status: { _eq: "active" }\n        }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n      }\n      order_by: { nameFirst: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      label: fullName\n      value: id\n      email\n      phone\n    }\n  }\n']);return b=function(){return n},n}function x(){var n=(0,r.Z)(['\n  query GetUsersForSelect($q: String) {\n    items: User(\n      where: {\n        status: { _eq: "active" }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n      }\n      order_by: { nameFirst: asc }\n    ) {\n      label: fullName\n      value: id\n      email\n      phone\n    }\n  }\n']);return x=function(){return n},n}function $(){var n=(0,r.Z)(["\n  query GetTaxonomyGroupForSelect($q: String, $type: String!) {\n    items: Taxonomy(\n      where: { isGroup: { _eq: true }, name: { _ilike: $q }, type: { _eq: $type } }\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n"]);return $=function(){return n},n}function _(){var n=(0,r.Z)(['\n  query GetTaxonomy($q: String) {\n    items: Taxonomy(where: { type: { _eq: "expenseCategoryGroup" } }, order_by: { name: asc }) {\n      label: name\n      options: Taxonomies(\n        where: { type: { _eq: "expenseCategory" }, name: { _ilike: $q } }\n        order_by: { name: asc }\n      ) {\n        value: id\n        label: name\n      }\n    }\n  }\n']);return _=function(){return n},n}function q(){var n=(0,r.Z)(['\n  query GetCompliancesForSelect($q: String, $locationId: Int, $limit: Int, $offset: Int) {\n    items: Taxonomy(\n      where: { type: { _eq: "complianceCategory" } }\n      order_by: { name: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      label: name\n      options: Compliances(\n        where: {\n          name: { _ilike: $q }\n          Compliance_Entities: { Location: { id: { _eq: $locationId } } }\n        }\n        order_by: { name: asc }\n      ) {\n        value: id\n        label: name\n      }\n    }\n  }\n']);return q=function(){return n},n}function I(){var n=(0,r.Z)(["\n  query GetUserRole($userId: Int!, $accountId: Int!) {\n    accountUsers: Account_User(\n      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }\n    ) {\n      role\n    }\n  }\n"]);return I=function(){return n},n}function Z(){var n=(0,r.Z)(["\n  query GetSublocationsForSelect($locationId: Int!, $q: String, $limit: Int, $offset: Int) {\n    items: Sublocation(\n      where: { name: { _ilike: $q }, locationId: { _eq: $locationId }, active: { _eq: true } }\n      limit: $limit\n      offset: $offset\n      order_by: { createdAt: desc }\n    ) {\n      value: id\n      label: name\n    }\n  }\n"]);return Z=function(){return n},n}function S(){var n=(0,r.Z)(['\n  query GetTaxonomy($q: String, $limit: Int, $offset: Int) {\n    items: Taxonomy(\n      where: {\n        type: { _eq: "assetCategory" }\n        isGroup: { _eq: false }\n        status: { _eq: "active" }\n        name: { _ilike: $q }\n      }\n      limit: $limit\n      offset: $offset\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n']);return S=function(){return n},n}function P(){var n=(0,r.Z)(["\n  query GetTaxonomyForSelect(\n    $where: Taxonomy_bool_exp\n    $limit: Int\n    $offset: Int\n    $orderBy: Taxonomy_order_by!\n    $includeMeta: Boolean! = false\n  ) {\n    items: Taxonomy(where: $where, limit: $limit, offset: $offset, order_by: [$orderBy]) {\n      value: id\n      label: name\n      meta @include(if: $includeMeta)\n    }\n  }\n"]);return P=function(){return n},n}function w(){var n=(0,r.Z)(['\n  query GetTagsForTask($q: String!, $limit: Int = 50, $offset: Int = 0) {\n    items: Taxonomy(\n      where: { name: { _ilike: $q }, status: { _eq: "active" }, type: { _eq: "taskTags" } }\n      limit: $limit\n      offset: $offset\n      order_by: { id: desc }\n    ) {\n      value: id\n      label: name\n    }\n  }\n']);return w=function(){return n},n}function C(){var n=(0,r.Z)(['\n  query GetTagsForEntity(\n    $entityId: Int\n    $entity: String!\n    $q: String!\n    $limit: Int = 50\n    $offset: Int = 0\n  ) {\n    tags: Taxonomy(\n      where: {\n        name: { _ilike: $q }\n        status: { _eq: "active" }\n        type: { _eq: "taskTags" }\n        _not: { Taxonomy_Entities: { entity: { _eq: $entity }, entityId: { _eq: $entityId } } }\n      }\n      limit: $limit\n      offset: $offset\n      order_by: { id: desc }\n    ) {\n      id\n      name\n      meta\n    }\n  }\n']);return C=function(){return n},n}function j(){var n=(0,r.Z)(['\n  query GetEntityTags($entityId: Int!, $entity: String!) {\n    tags: Taxonomy_Entity(\n      where: {\n        entity: { _eq: $entity }\n        entityId: { _eq: $entityId }\n        Taxonomy: { status: { _eq: "active" }, type: { _eq: "taskTags" } }\n      }\n      order_by: { id: desc }\n    ) {\n      id\n      tag: Taxonomy {\n        id\n        name\n        meta\n      }\n    }\n  }\n']);return j=function(){return n},n}function k(){var n=(0,r.Z)(["\n  query GetCustomerManagers($accountId: Int, $q: String, $limit: Int, $offset: Int) {\n    items: User(\n      where: { Account_Users: { accountId: { _eq: $accountId } }, fullName: { _ilike: $q } }\n      order_by: { fullName: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      label: fullName\n      value: id\n    }\n  }\n"]);return k=function(){return n},n}function T(){var n=(0,r.Z)(["\n  query GetServiceSchedulesForSelect(\n    $q: String\n    $serviceId: Int\n    $entity: service_schedule_entity\n    $entityId: Int\n    $limit: Int = 50\n    $offset: Int = 0\n  ) {\n    items: ServiceSchedule(\n      where: {\n        name: { _ilike: $q }\n        serviceId: { _eq: $serviceId }\n        entity: { _eq: $entity }\n        entityId: { _eq: $entityId }\n      }\n      limit: $limit\n      offset: $offset\n      order_by: { name: asc }\n    ) {\n      label: name\n      value: id\n    }\n  }\n"]);return T=function(){return n},n}function M(){var n=(0,r.Z)(['\n  query GetPropertyById($id: Int!) {\n    item: Location_by_pk(id: $id) {\n      label: name\n      value: id\n      access\n      registeredAddress: Addresses(\n        where: { entity: { _eq: "Location" }, registered: { _eq: true } }\n      ) {\n        address: Address {\n          id\n          addressLine1\n          addressLine2\n          addressLine3\n          county\n          country: Country {\n            name\n            code\n          }\n          postCode\n          city\n        }\n      }\n    }\n  }\n']);return M=function(){return n},n}function G(){var n=(0,r.Z)(['\n  query GetCompliancesForSelectNew($q: String, $locationId: Int, $limit: Int, $offset: Int) {\n    items: Compliance(\n      where: {\n        name: { _ilike: $q }\n        Category: { type: { _eq: "complianceCategory" } }\n        Compliance_Entities: { entity: { _eq: "Location" }, Location: { id: { _eq: $locationId } } }\n      }\n      order_by: { name: asc }\n      limit: $limit\n      offset: $offset\n    ) {\n      value: id\n      label: name\n      category: Category {\n        label: name\n      }\n    }\n  }\n']);return G=function(){return n},n}function F(){var n=(0,r.Z)(['\n  query GetTaskAssignedToForSelect(\n    $accountId: Int\n    $q: String\n    $limit: Int = 50\n    $offset: Int = 0\n  ) {\n    items: User(\n      where: {\n        status: { _eq: "active" }\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n      }\n      limit: $limit\n      offset: $offset\n      order_by: { nameFirst: asc }\n    ) {\n      label: fullName\n      value: id\n    }\n  }\n']);return F=function(){return n},n}var L=(0,i.Ps)(o()),A=(0,i.Ps)(a()),D=(0,i.Ps)(u()),R=(0,i.Ps)(s()),O=(0,i.Ps)(l()),U=(0,i.Ps)(c()),E=(0,i.Ps)(d()),B=(0,i.Ps)(f()),N=(0,i.Ps)(m()),z=(0,i.Ps)(p()),H=(0,i.Ps)(h()),W=(0,i.Ps)(v()),J=(0,i.Ps)(y()),K=(0,i.Ps)(g()),V=(0,i.Ps)(b()),X=(0,i.Ps)(x()),Q=(0,i.Ps)($()),Y=(0,i.Ps)(_()),nn=(0,i.Ps)(q()),ne=(0,i.Ps)(I()),nt=(0,i.Ps)(Z()),nr=(0,i.Ps)(S()),ni=(0,i.Ps)(P());(0,i.Ps)(w()),(0,i.Ps)(C()),(0,i.Ps)(j());var no=(0,i.Ps)(k()),na=(0,i.Ps)(T()),nu=(0,i.Ps)(M()),ns=(0,i.Ps)(G()),nl=(0,i.Ps)(F())},92321:function(n,e,t){"use strict";t.d(e,{P:function(){return _}});var r=t(26042),i=t(69396),o=t(85893),a=t(67294),u=t(10166),s=t(45697),l=t.n(s),c=t(94054),d=t(47312),f=t(18972),m=t(18360),p=t(56815),h=t(51233),v=t(15861),y=t(5616),g=t(87918),b=t(69368),x={text:function(n){var e=n.option,t=n.multiple,r=n.index;return t&&r>0?", ".concat(e.label):e.label},textWithIcon:function(n){var e=n.option;return(0,o.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:1,children:[e.icon,(0,o.jsxs)(v.Z,{children:[" ",e.label]})]})},chip:function(n){var e=n.chipProps,t=n.option;return(0,a.createElement)(g.Z,(0,i.Z)((0,r.Z)({},e),{key:t.value,label:t.label,icon:t.icon,sx:{color:t.color,bgcolor:t.bgcolor}}))}},$={text:function(n){return n.option.label},textWithIcon:function(n){var e=n.option;return(0,o.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:1,children:[e.icon,(0,o.jsxs)(v.Z,{children:[" ",e.label]})]})},chip:function(n){var e=n.chipProps,t=n.option;return(0,a.createElement)(g.Z,(0,i.Z)((0,r.Z)({},e),{key:t.value,label:t.label,icon:t.icon,sx:{color:t.color,bgcolor:t.bgcolor}}))},checkbox:function(n){var e=n.option,t=n.value;return(0,o.jsxs)(h.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,o.jsx)(b.Z,{color:"secondary",sx:{height:"10px"},checked:t.indexOf(e.value)>-1}),(0,o.jsxs)(v.Z,{children:[" ",e.label]})]})}},_=function(n){var e=n.label,t=n.value,a=n.onChange,u=n.leftSideLabel,s=n.options,l=n.inputComponent,c=n.selectComponent,d=n.withoutSelectIcon,h=n.formControl,g=n.chipProps,b=n.selectProps,_=function(n){return s.find(function(e){return e.value===n})};return(0,o.jsxs)(q,(0,i.Z)((0,r.Z)({},h),{leftSideLabel:u,withoutSelectIcon:d,children:[e&&u&&(0,o.jsx)(v.Z,{children:e}),e&&!u&&(0,o.jsx)(I,{shrink:""!==t&&void 0!==t,children:e}),(0,o.jsx)(m.Z,(0,i.Z)((0,r.Z)({displayEmpty:!0},b),{value:t,onChange:a,inputProps:{shrink:!0},renderValue:function(){if(Array.isArray(t))return(0,o.jsx)(y.Z,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:t.map(function(n,e){var t=_(n);return t?x[l]({chipProps:g,option:t,multiple:!0,index:e}):""})});var n=_(t);return n?(0,o.jsx)(y.Z,{children:x[l]({chipProps:g,option:n})}):""},children:s.map(function(n){return(0,o.jsx)(f.Z,{value:n.value,children:$[c]({chipProps:g,option:n,value:t})},n.value)})})),(null==h?void 0:h.helperText)&&(0,o.jsx)(p.Z,{children:h.helperText})]}))};_.defaultProps={label:"",onChange:function(){},leftSideLabel:!1,options:[],inputComponent:"text",selectComponent:"text",withoutSelectIcon:!1,formControl:{error:!1,helperText:""},chipProps:{size:"small"},selectProps:{}},_.propTypes={label:l().string,value:l().oneOfType([l().string,l().array]),onChange:l().func,leftSideLabel:l().bool,options:l().arrayOf(l().shape({label:l().string.isRequired,value:l().string.isRequired,color:l().string,bgcolor:l().string,icon:l().node}).isRequired),inputComponent:l().oneOf(["text","textWithIcon","chip"]),selectComponent:l().oneOf(["text","textWithIcon","chip","checkbox"]),withoutSelectIcon:l().bool,formControl:l().object,chipProps:l().object,selectProps:l().object};var q=(0,u.Z)(c.Z)(function(n){n.theme;var e=n.leftSideLabel,t=n.withoutSelectIcon;return{"&.MuiFormControl-root":(0,r.Z)({display:"flex",flexDirection:"column",alignItems:"flex-start"},e&&{display:"flex",flexDirection:"row",alignItems:"center",gap:"10px"}),"& .MuiSelect-icon":(0,r.Z)({},t&&{display:"none"})}}),I=(0,u.Z)(d.Z)(function(n){return{"&.MuiFormLabel-root.MuiInputLabel-root.Mui-focused":{color:n.theme.palette.secondary.main}}})},97824:function(n,e,t){"use strict";t.d(e,{x:function(){return l}});var r=t(26042),i=t(69396),o=t(99534),a=t(85893),u=t(90948),s=t(5616),l=function(n){var e=n.children,t=n.value,u=n.index,l=n.boxProps,d=n.boxSx,f=(0,o.Z)(n,["children","value","index","boxProps","boxSx"]);return(0,a.jsx)(c,(0,i.Z)((0,r.Z)({role:"tabpanel",hidden:t!==u,id:"simple-tabpanel-".concat(u),"aria-labelledby":"simple-tab-".concat(u)},f),{children:t===u&&(0,a.jsx)(s.Z,(0,i.Z)((0,r.Z)({},l),{sx:(0,r.Z)({padding:"25px 0"},d),children:e}))}))};l.defaultProps={boxProps:{},boxSx:{}};var c=(0,u.ZP)(s.Z)(function(){return{"& .MuiTabs-root":{}}})},15033:function(n,e,t){"use strict";t.d(e,{i:function(){return Z}});var r=t(14924),i=t(26042),o=t(69396),a=t(85893),u=t(67294),s=t(11163),l=t(45697),c=t.n(l),d=t(61870),f=t(5616),m=t(51233),p=t(15861),h=t(90948),v=t(41796),y=t(29217),g=t(45111),b=t(46003),x=t(70872),$=t(58886),_=t(61730),q=function(n){var e=n.currentPage,t=n.totalCount,r=n.pageSize,o=n.onPageChange,u=(0,_.Z)("(max-width:400px)"),s=(0,_.Z)("(max-width:500px)");return(0,a.jsx)(I,{mb:2,page:e,count:Math.ceil(t/r),onChange:function(n,e){return o(e)},variant:"outlined",shape:"rounded",size:u?"small":"medium",hidePrevButton:1===e,hideNextButton:e===Math.ceil(t/r),siblingCount:s?0:1,renderItem:function(n){return(0,a.jsx)($.Z,(0,i.Z)({slots:{previous:function(){return"Previous"},next:function(){return"Next"}}},n))}})};q.defaultProps={currentPage:1,totalCount:0,pageSize:50,onPageChange:function(){}},q.propTypes={currentPage:c().number,totalCount:c().number,pageSize:c().number,onPageChange:c().func};var I=(0,h.ZP)(x.Z)(function(n){var e,t=n.hidePrevButton,o=n.hideNextButton,a=n.theme;return e={},(0,r.Z)(e,"&.MuiPagination-root",{alignSelf:"center",marginTop:"16px"}),(0,r.Z)(e,"& .MuiPaginationItem-root",{fontWeight:600,margin:0,borderRadius:0}),(0,r.Z)(e,"& .MuiPagination-ul > li:last-child .MuiPaginationItem-previousNext:last-child",{margin:0,borderRadius:"0 5px 5px 0"}),(0,r.Z)(e,"& .MuiPagination-ul > li:first-child .MuiPaginationItem-previousNext:last-child",{margin:0,borderRadius:"5px 0 0 5px"}),(0,r.Z)(e,"& button.Mui-selected",(0,i.Z)({color:a.palette.white.main,backgroundColor:a.palette.secondary.main},o?{borderRadius:"0 5px 5px 0"}:{},t?{borderRadius:"5px 0 0 5px"}:{})),e}),Z=(0,u.forwardRef)(function(n,e){var t=n.columns,r=n.history,o=n.initialSort,l=n.meta,c=n.refetch,d=n.paginationSize,f=n.containerHeight,h=n.noResultsMessage,v=n.autoHeight,x=(0,s.useRouter)(),$=x.query,_=void 0===$?{}:$,I=(0,u.useState)(parseInt(null==_?void 0:_.page,10)||1),Z=I[0],w=I[1],C=(0,u.useState)(d||b.C1.paginationSize),j=C[0],k=C[1];o||(o={item:"createdAt",order:"desc"});var T=(0,u.useState)({item:o.item,order:o.order}),M=T[0],G=T[1],F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=x.query,t=void 0===e?{}:e;if(n>1?t.page=n:delete t.page,!(Object.keys(t).length>0))return{};var r=Object.keys(t).map(function(e){return"page"===e?"".concat(e,"=").concat(n):"".concat(e,"=").concat(t[e])}).join("&");return"?".concat(r)},L=function(){G({item:o.item,order:o.order}),w(1);var n=F();x.push(n),k(d||b.C1.paginationSize)};(0,u.useImperativeHandle)(e,function(){return{currentPage:Z,pageSize:j,sort:M,resetPagination:function(){L()}}});var A=function(n){var e=F(n);r&&x.push(e),w(n),!r&&c&&c()},D=function(n){n&&n.field&&n.sort?(G({item:t.find(function(e){return e.field===n.field}).sortName||n.field||n.item||o.item,order:n.sort||n.order||o.order}),c&&c()):(G({item:o.item,order:o.order}),c&&c())};return(0,a.jsxs)(S,{containerHeight:f,children:[(0,a.jsx)(P,(0,i.Z)({hideFooter:!0,disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:v,sortingMode:"server",onSortModelChange:function(n){return D(n[0])},columns:t,pageSize:j,slots:{columnSortedAscendingIcon:function(){return(0,a.jsx)(y.Z,{})},columnSortedDescendingIcon:function(){return(0,a.jsx)(g.Z,{})},columnUnsortedIcon:function(){return(0,a.jsxs)(m.Z,{alignItems:"center",sx:{width:"33px"},children:[(0,a.jsx)(y.Z,{sx:{marginBottom:"-15px"}}),(0,a.jsx)(g.Z,{})]})},noResultsOverlay:function(){return(0,a.jsx)(m.Z,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,a.jsx)(p.Z,{children:h})})},noRowsOverlay:function(){return(0,a.jsx)(m.Z,{height:"100%",alignItems:"center",justifyContent:"center",spacing:1,p:1,children:(0,a.jsx)(p.Z,{children:h})})}}},n)),l&&Math.ceil(l.aggregate.totalCount/j)>1&&(0,a.jsx)(q,{currentPage:Z,totalCount:l.aggregate.totalCount,pageSize:j,onPageChange:A})]})});Z.propTypes={history:c().bool,initialSort:c().object,loading:c().bool,meta:c().object,refetch:c().func,paginationSize:c().number,noResultsMessage:c().string,columns:c().array.isRequired,rows:c().array.isRequired,autoHeight:c().bool},Z.defaultProps={columns:[],history:!1,loading:!1,rows:[],noResultsMessage:"There are no results.",autoHeight:!0};var S=(0,h.ZP)(f.Z)(function(n){return{height:n.containerHeight,display:"flex",flexDirection:"column"}}),P=(0,h.ZP)(d.s)(function(n){var e,t=n.theme,a=n.hideHeader,u=(n.rows,n.loading,n.rowHeight),s=n.isPdf;return e={"--DataGrid-overlayHeight":"40px"},(0,r.Z)(e,"&.MuiDataGrid-root",(0,i.Z)({color:t.palette.black.main,border:"none"},s&&{"@media print":{display:"block"}})),(0,r.Z)(e,"& .MuiDataGrid-main",(0,i.Z)({},s&&{"@media print":{overflow:"visible !important"}})),(0,r.Z)(e,"& .MuiDataGrid-columnHeaders",(0,o.Z)((0,i.Z)({},a&&{display:"none"}),{"& .MuiDataGrid-iconButtonContainer":{visibility:"visible","& .MuiButtonBase-root.MuiIconButton-root":{backgroundColor:"inherit",color:t.palette.black.main,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.1)"}}}})),(0,r.Z)(e,"& .MuiDataGrid-virtualScroller",(0,i.Z)({},a&&{marginTop:"0 !important"},s&&{"@media print":{overflow:"visible !important"}})),(0,r.Z)(e,"& .MuiDataGrid-iconSeparator",{opacity:0}),(0,r.Z)(e,"& .MuiDataGrid-columnHeaderTitle",{fontWeight:700}),(0,r.Z)(e,"& .MuiButtonBase-root.MuiDataGrid-columnHeaderTitle",{fontWeight:700}),(0,r.Z)(e,"& .MuiDataGrid-virtualScrollerContent",(0,i.Z)({},s&&{height:"initial !important",minHeight:"initial !important"})),(0,r.Z)(e,"& .MuiDataGrid-virtualScrollerRenderZone",(0,i.Z)({},s&&{position:"relative"})),(0,r.Z)(e,"& .MuiDataGrid-overlayWrapper",(0,r.Z)({},"& .MuiCircularProgress-root",{color:t.palette.secondary.main})),(0,r.Z)(e,"& .MuiDataGrid-row",(0,i.Z)({},s&&{minHeight:"".concat(u,"cm !important"),maxHeight:"".concat(u,"cm !important")})),(0,r.Z)(e,"& .MuiDataGrid-row > .MuiDataGrid-cell",(0,i.Z)({},s&&{minHeight:"".concat(u,"cm !important"),maxHeight:"".concat(u,"cm !important")})),(0,r.Z)(e,"& .MuiDataGrid-row.even",{backgroundColor:t.palette.muiLightGray.main,"&:hover, &.Mui-hovered":{backgroundColor:(0,v.Fq)(t.palette.muiLightGray.main,.3),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,v.Fq)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,v.Fq)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,v.Fq)(t.palette.muiLightGray.main,.3+t.palette.action.selectedOpacity)}}}}),e})},20705:function(n,e,t){"use strict";t.d(e,{x:function(){return c}});var r=t(14924),i=t(26042),o=t(69396),a=t(67294),u=t(96486),s=t(46003),l=function(n){try{return JSON.parse(n)}catch(e){return!1}},c=function(n){var e,t,c,d,f,m,p,h,v,y,g,b=n.filters,x=n.newFilters,$=n.initialSort,_=(0,a.useRef)(),q=(0,a.useState)({}),I=q[0],Z=q[1],S=(0,a.useState)({}),P=S[0],w=S[1],C=$||{item:"createdAt",order:"desc"},j=(0,r.Z)({},(null===(e=_.current)||void 0===e?void 0:e.sort.item)||C.item,C.inneritem?(0,r.Z)({},C.inneritem,(null===(t=_.current)||void 0===t?void 0:t.sort.order)||C.order):(null===(c=_.current)||void 0===c?void 0:c.sort.order)||C.order);return(0,a.useEffect)(function(){var n=!(0,u.isEqual)(I,b),e=!(0,u.isEqual)(P,x);if(n&&(Z(b),null==_||null===(r=_.current)||void 0===r||r.resetPagination()),e&&(w(x),null==_||null===(i=_.current)||void 0===i||i.resetPagination()),(null==_?void 0:null===(t=_.current)||void 0===t?void 0:t.setSort)&&!(n||e)){var t,r,i,o,a,s,l,c,d,f,m,p=(null===(o=_.current)||void 0===o?void 0:null===(a=o.sort)||void 0===a?void 0:a.item)&&(null===(s=_.current)||void 0===s?void 0:null===(l=s.sort)||void 0===l?void 0:l.order)?{item:null===(c=_.current)||void 0===c?void 0:null===(d=c.sort)||void 0===d?void 0:d.item,order:null===(f=_.current)||void 0===f?void 0:null===(m=f.sort)||void 0===m?void 0:m.order}:j;_.current.setSort(p)}},[b,x]),{initialData:(0,o.Z)((0,i.Z)({},b),{newFilters:(null==x?void 0:x.length)>0?x:void 0,limit:(null===(d=_.current)||void 0===d?void 0:d.pageSize)==="Infinity"?null:parseInt(null===(f=_.current)||void 0===f?void 0:f.pageSize,10)||s.C1.paginationSize,offset:((null===(m=_.current)||void 0===m?void 0:m.currentPage)-1||0)*((null===(p=_.current)||void 0===p?void 0:p.pageSize)||s.C1.paginationSize),orderBy:l(null===(h=_.current)||void 0===h?void 0:null===(v=h.sort)||void 0===v?void 0:null===(y=v.item)||void 0===y?void 0:y.replace(/ORDER/i,null===(g=_.current)||void 0===g?void 0:g.sort.order))||j}),initialSort:$,ref:_}}},75832:function(n,e,t){"use strict";function r(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GBP";return new Intl.NumberFormat(["en-GB"],{currency:e,currencyDisplay:"symbol",style:"currency"}).format(n)}t.d(e,{T:function(){return r}})},62551:function(n,e,t){"use strict";t.d(e,{d:function(){return a}});var r=t(85893),i=t(11994),o=t(67294);function a(){var n=(0,o.useState)(null),e=n[0],t=n[1],a=(0,o.useCallback)(function(){t(null)},[]),u=(0,o.useMemo)(function(){if(null===e)return null;var n=e.content,t=e.keepMounted;return(0,r.jsx)(i.Z,{open:!0,keepMounted:t,onClose:a,children:n})},[e,a]),s=(0,o.useCallback)(function(n){var e=n.content,r=n.keepMounted;t({keepMounted:void 0===r||r,content:e({onClose:a})})},[a]);return[u,s]}},59938:function(n,e,t){"use strict";t.d(e,{X:function(){return p}});var r=t(14924),i=t(82670),o=t(828),a=t(7297),u=t(67294),s=t(6388),l=t(50319),c=t(75063),d=t(18586);function f(){var n=(0,a.Z)(["\n  query GetAccountUserFilters($accountUserId: Int!) {\n    accountUser: Account_User_by_pk(id: $accountUserId) {\n      filters\n    }\n  }\n"]);return f=function(){return n},n}function m(){var n=(0,a.Z)(["\n  mutation SetAccountUserFilters($accountUserId: Int!, $filters: jsonb) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _append: { filters: $filters }) {\n      id\n    }\n  }\n"]);return m=function(){return n},n}function p(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sessionStorage",a=(0,d.q)().user,c=(0,u.useState)(function(){try{switch(t){case"network":case"state":return e;case"sessionStorage":return JSON.parse(window.sessionStorage.getItem(n))||e}}catch(r){return e}}),f=c[0],m=c[1],p=function(e){try{var o=(0,i.Z)(e,Function)?e(f):e;switch(m(o),t){case"network":y({variables:{accountUserId:null==a?void 0:a.accountUserId,filters:(0,r.Z)({},n,o)}});break;case"sessionStorage":window.sessionStorage.setItem(n,JSON.stringify(o))}}catch(u){}};(0,s.aM)(h,{variables:{accountUserId:null==a?void 0:a.accountUserId},skip:"network"!==t,onCompleted:function(t){var r=t.accountUser;r&&m(r.filters[n]||e)}});var y=(0,o.Z)((0,l.D)(v),1)[0];return[f,p]}var h=(0,c.Ps)(f()),v=(0,c.Ps)(m())},73760:function(n,e,t){"use strict";t.d(e,{O:function(){return r},v:function(){return i}});var r=[{text:"Country",value:""},{text:"United Kingdom",value:1},{text:"Ireland",value:4}],i=[{label:"United Kingdom",value:1},{label:"Ireland",value:4}]},57853:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(85893),i=t(26042),o=t(69396),a=t(5616),u=t(67294),s=t(4790),l=t(23914),c=t(97824),d=t(23377),f=function(){var n=(0,u.useState)(0),e=n[0],t=n[1],f=function(n,e){t(e)};return(0,r.jsxs)(a.Z,{sx:{width:"100%",height:"100%"},children:[(0,r.jsx)(a.Z,{children:(0,r.jsxs)(l.m,{value:e,onChange:f,children:[(0,r.jsx)(s.O,{label:"Customer"}),(0,r.jsx)(s.O,{label:"Supplier"})]})}),(0,r.jsx)(c.x,(0,o.Z)((0,i.Z)({value:e,index:0},m),{children:(0,r.jsx)(d.J,{initialFilters:{filterType:"system_customer"},entity:"System-Customer"})})),(0,r.jsx)(c.x,(0,o.Z)((0,i.Z)({value:e,index:1},m),{children:(0,r.jsx)(d.J,{initialFilters:{filterType:"system_supplier"},entity:"System-Supplier"})}))]})},m={sx:{height:"calc(100% - 32px)"},boxSx:{height:"100%"}},p=t(58849),h=function(){return(0,r.jsx)(f,{})};h.getLayout=function(n){return(0,r.jsxs)(p.Z,{children:[n," "]})};var v=h}},function(n){n.O(0,[3662,2283,212,8890,619,2583,4135,8579,6043,4244,3911,3776,2329,778,1023,7454,1870,8062,3754,5497,1121,9528,9626,8849,1105,397,9774,2888,179],function(){return n(n.s=19883)}),_N_E=n.O()}]);