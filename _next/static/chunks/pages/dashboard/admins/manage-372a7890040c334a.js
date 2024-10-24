(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3445],{48262:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/admins/manage",function(){return a(76424)}])},20932:function(n,e,a){"use strict";a.d(e,{E:function(){return u}});var t,r=a(47568),o=a(97582),i=a(75327),u=(t=(0,r.Z)(function(n,e){var a,t,r,u=arguments;return(0,o.__generator)(this,function(t){switch(t.label){case 0:a=u.length>2&&void 0!==u[2]&&u[2],t.label=1;case 1:return t.trys.push([1,3,,4]),[4,n.query({query:i.WF,variables:{email:e}})];case 2:if((r=t.sent().data.users)&&r.length>0)return[2,!!a&&r[0]];return[2,!a||null];case 3:return t.sent(),[2,!0];case 4:return[2]}})}),function(n,e){return t.apply(this,arguments)})},75327:function(n,e,a){"use strict";a.d(e,{$E:function(){return B},AX:function(){return S},I4:function(){return v},JA:function(){return g},MT:function(){return N},Px:function(){return C},WF:function(){return b},ZA:function(){return H},a8:function(){return P},fA:function(){return E},fo:function(){return L},ge:function(){return D},iM:function(){return w},nE:function(){return R},nh:function(){return T},r1:function(){return q},tW:function(){return k},uz:function(){return M}});var t=a(7297),r=a(75063);function o(){var n=(0,t.Z)(["\n  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {\n    insert_Account_User(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return o=function(){return n},n}function i(){var n=(0,t.Z)(["\n  mutation UpdateUser(\n    $id: Int!\n    $accountUserId: Int!\n    $accountUserChanges: Account_User_set_input\n    $changes: User_set_input\n    $updateAccountUser: Boolean!\n  ) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _set: $accountUserChanges)\n      @include(if: $updateAccountUser) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]);return i=function(){return n},n}function u(){var n=(0,t.Z)(["\n  query GetUsers(\n    $accountId: Int\n    $accountType: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: User_order_by!\n    $status: String\n  ) {\n    users: User(\n      limit: $limit\n      offset: $offset\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [\n          { email: { _ilike: $q } }\n          { nameFirst: { _ilike: $q } }\n          { nameLast: { _ilike: $q } }\n        ]\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n        userLocations: User_Account_Locations {\n          accountLocationId\n        }\n      }\n    }\n    meta: User_aggregate(\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return u=function(){return n},n}function s(){var n=(0,t.Z)(["\n  query GetUser($id: Int!) {\n    user: User_by_pk(id: $id) {\n      id\n      fullName\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]);return s=function(){return n},n}function d(){var n=(0,t.Z)(["\n  query CheckDuplicateEmail($email: String!) {\n    users: User_public(where: { email: { _eq: $email } }) {\n      id\n      nameFirst\n      nameLast\n      email\n      phone\n    }\n  }\n"]);return d=function(){return n},n}function c(){var n=(0,t.Z)(["\n  fragment UserFields on User {\n    id\n    email\n    nameFirst\n    nameLast\n    fullName\n    phone\n    status\n  }\n"]);return c=function(){return n},n}function m(){var n=(0,t.Z)(["\n  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {\n    createGoogleToken(code: $code, id: $id, type: $type) {\n      success\n      tokens\n      error\n    }\n  }\n"]);return m=function(){return n},n}function l(){var n=(0,t.Z)(["\n  mutation GenerateMSURL($type: String!, $id: Int!) {\n    genenrateMSURL(id: $id, type: $type) {\n      url\n    }\n  }\n"]);return l=function(){return n},n}function $(){var n=(0,t.Z)(["\n  mutation signoutMS($id: Int!, $type: String!, $email: String!) {\n    signoutMS(id: $id, type: $type, email: $email) {\n      error\n      msId\n      success\n    }\n  }\n"]);return $=function(){return n},n}function _(){var n=(0,t.Z)(["\n  query getAccountMeta($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      meta\n    }\n  }\n"]);return _=function(){return n},n}function p(){var n=(0,t.Z)(["\n  query user($id: Int!) {\n    user: User_by_pk(id: $id) {\n      meta\n      invoiceThreshold\n      quoteThreshold\n    }\n  }\n"]);return p=function(){return n},n}function f(){var n=(0,t.Z)(["\n  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {\n    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {\n      meta\n    }\n  }\n"]);return f=function(){return n},n}function A(){var n=(0,t.Z)(["\n  mutation UpdateAccountUserByUserIdAccoutId(\n    $userId: Int!\n    $accountId: Int!\n    $changes: Account_User_set_input!\n  ) {\n    update_Account_User(\n      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }\n      _set: $changes\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return A=function(){return n},n}function h(){var n=(0,t.Z)(["\n  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {\n      id\n    }\n  }\n"]);return h=function(){return n},n}function U(){var n=(0,t.Z)(["\n  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {\n      id\n      meta\n    }\n  }\n"]);return U=function(){return n},n}function I(){var n=(0,t.Z)(['\n  query userDevices($accountId: Int!) {\n    users: User(\n      where: {\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        UserDevices: { status: { _eq: "active" } }\n        status: { _eq: "active" }\n      }\n    ) {\n      id\n      fullName\n      devices: UserDevices(\n        order_by: { updatedAt: desc_nulls_last }\n        where: { status: { _eq: "active" } }\n        limit: 1\n      ) {\n        id\n        playerId\n      }\n    }\n  }\n']);return I=function(){return n},n}function y(){var n=(0,t.Z)(['\n  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {\n    location: Location(\n      offset: $offset\n      limit: $limit\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      id\n      name\n      accountLocations: Account_Locations {\n        id\n      }\n      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {\n        id\n        status\n        address: Address {\n          id\n          name\n          addressLine1\n          postCode\n        }\n      }\n    }\n    meta: Location_aggregate(\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return y=function(){return n},n}function Z(){var n=(0,t.Z)(["\n  mutation InsertUserAccountLocations(\n    $accountUserId: Int!\n    $objects: [User_Account_Location_insert_input!]!\n  ) {\n    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {\n      affected_rows\n    }\n    insert_User_Account_Location(objects: $objects) {\n      affected_rows\n      returning {\n        id\n      }\n    }\n  }\n"]);return Z=function(){return n},n}var v=(0,r.Ps)(o()),S=(0,r.Ps)(i()),L=(0,r.Ps)(u()),g=(0,r.Ps)(s()),b=(0,r.Ps)(d()),C=(0,r.Ps)(c()),P=(0,r.Ps)(m()),q=(0,r.Ps)(l()),N=(0,r.Ps)($()),R=(0,r.Ps)(_()),T=(0,r.Ps)(p()),w=(0,r.Ps)(f()),E=(0,r.Ps)(A()),B=(0,r.Ps)(h()),M=(0,r.Ps)(U()),D=(0,r.Ps)(I()),H=(0,r.Ps)(y()),k=(0,r.Ps)(Z())},82749:function(n,e,a){"use strict";a.d(e,{O:function(){return r},y:function(){return t}});var t=[{area:"AB",name:"Aberdeen"},{area:"AL",name:"St. Albans"},{area:"B",name:"Birmingham"},{area:"BA",name:"Bath"},{area:"BB",name:"Blackburn"},{area:"BD",name:"Bradford"},{area:"BH",name:"Bournemouth"},{area:"BL",name:"Bolton"},{area:"BN",name:"Brighton"},{area:"BR",name:"Bromley"},{area:"BS",name:"Bristol"},{area:"BT",name:"Belfast"},{area:"CA",name:"Carlisle"},{area:"CB",name:"Cambridge"},{area:"CF",name:"Cardiff"},{area:"CH",name:"Chester"},{area:"CM",name:"Chelmsford"},{area:"CO",name:"Colchester"},{area:"CR",name:"Croydon"},{area:"CT",name:"Canterbury"},{area:"CV",name:"Coventry"},{area:"CW",name:"Crewe"},{area:"DA",name:"Dartford"},{area:"DD",name:"Dundee"},{area:"DE",name:"Derby"},{area:"DG",name:"Dumfries"},{area:"DH",name:"Durham"},{area:"DL",name:"Darlington"},{area:"DN",name:"Doncaster"},{area:"DT",name:"Dorchester"},{area:"DY",name:"Dudley"},{area:"E",name:"London E"},{area:"EC",name:"London EC"},{area:"EH",name:"Edinburgh"},{area:"EN",name:"Enfield"},{area:"EX",name:"Exeter"},{area:"FK",name:"Falkirk"},{area:"FY",name:"Blackpool"},{area:"G",name:"Glasgow"},{area:"GL",name:"Gloucester"},{area:"GU",name:"Guildford"},{area:"GY",name:"Guernsey"},{area:"HA",name:"Harrow"},{area:"HD",name:"Huddersfield"},{area:"HG",name:"Harrogate"},{area:"HP",name:"Hemel Hempstead"},{area:"HR",name:"Hereford"},{area:"HS",name:"Western Isles"},{area:"HU",name:"Hull"},{area:"HX",name:"Halifax"},{area:"IG",name:"Ilford"},{area:"IM",name:"Isle Of Man"},{area:"IP",name:"Ipswich"},{area:"IV",name:"Inverness"},{area:"JE",name:"Jersey"},{area:"KA",name:"Kilmarnock"},{area:"KT",name:"Kingston Upon Thames"},{area:"KW",name:"Kirkwall"},{area:"KY",name:"Kirkcaldy"},{area:"L",name:"Liverpool"},{area:"LA",name:"Lancaster"},{area:"LD",name:"Llandrindod Wells"},{area:"LE",name:"Leicester"},{area:"LL",name:"Llandudno"},{area:"LN",name:"Lincoln"},{area:"LS",name:"Leeds"},{area:"LU",name:"Luton"},{area:"M",name:"Manchester"},{area:"ME",name:"Medway"},{area:"MK",name:"Milton Keynes"},{area:"ML",name:"Motherwell"},{area:"N",name:"London N"},{area:"NE",name:"Newcastle Upon Tyne"},{area:"NG",name:"Nottingham"},{area:"NN",name:"Northampton"},{area:"NP",name:"Newport"},{area:"NR",name:"Norwich"},{area:"NW",name:"London NW"},{area:"OL",name:"Oldham"},{area:"OX",name:"Oxford"},{area:"PA",name:"Paisley"},{area:"PE",name:"Peterborough"},{area:"PH",name:"Perth"},{area:"PL",name:"Plymouth"},{area:"PO",name:"Portsmouth"},{area:"PR",name:"Preston"},{area:"RG",name:"Reading"},{area:"RH",name:"Redhill"},{area:"RM",name:"Romford"},{area:"S",name:"Sheffield"},{area:"SA",name:"Swansea"},{area:"SE",name:"London SE"},{area:"SG",name:"Stevenage"},{area:"SK",name:"Stockport"},{area:"SL",name:"Slough"},{area:"SM",name:"Sutton"},{area:"SN",name:"Swindon"},{area:"SO",name:"Southampton"},{area:"SP",name:"Salisbury"},{area:"SR",name:"Sunderland"},{area:"SS",name:"Southend-On-Sea"},{area:"ST",name:"Stoke-On-Trent"},{area:"SW",name:"London SW"},{area:"SY",name:"Shrewsbury"},{area:"TA",name:"Taunton"},{area:"TD",name:"Galashiels"},{area:"TF",name:"Telford"},{area:"TN",name:"Tonbridge"},{area:"TQ",name:"Torquay"},{area:"TR",name:"Truro"},{area:"TS",name:"Cleveland"},{area:"TW",name:"Twickenham"},{area:"UB",name:"Southall"},{area:"W",name:"London W"},{area:"WA",name:"Warrington"},{area:"WC",name:"London WC"},{area:"WD",name:"Watford"},{area:"WF",name:"Wakefield"},{area:"WN",name:"Wigan"},{area:"WR",name:"Worcester"},{area:"WS",name:"Walsall"},{area:"WV",name:"Wolverhampton"},{area:"YO",name:"York"},{area:"ZE",name:"Lerwick"}],r=new Map([["UK",/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i],["GB",/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i],["JE",/^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],["GG",/^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],["IM",/^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],["US",/^([0-9]{5})(?:-([0-9]{4}))?$/],["CA",/^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],["IE",/^([AC-FHKNPRTV-Y]\d{2}|D6W)\s[0-9AC-FHKNPRTV-Y]{4}$/],["DE",/^\d{5}$/],["JP",/^\d{3}-\d{4}$/],["FR",/^\d{2}[ ]?\d{3}$/],["AU",/^\d{4}$/],["IT",/^\d{5}$/],["CH",/^\d{4}$/],["AT",/^(?!0)\d{4}$/],["ES",/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],["NL",/^\d{4}[ ]?[A-Z]{2}$/],["BE",/^\d{4}$/],["DK",/^\d{4}$/],["SE",/^(SE-)?\d{3}[ ]?\d{2}$/],["NO",/^\d{4}$/],["FI",/^(FI-|AX-)?\d{5}$/],["AX",/^22\d{3}$/],["KR",/^\d{5}$/],["CN",/^\d{6}$/],["TW",/^\d{3}(\d{2})?$/],["SG",/^\d{6}$/],["DZ",/^\d{5}$/],["AD",/^AD\d{3}$/],["AR",/^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],["AM",/^(37)?\d{4}$/],["AZ",/^\d{4}$/],["BH",/^((1[0-2]|[2-9])\d{2})?$/],["BD",/^\d{4}$/],["BB",/^(BB\d{5})?$/],["BY",/^\d{6}$/],["BM",/^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],["BA",/^\d{5}$/],["IO",/^BBND 1ZZ$/],["BN",/^[A-Z]{2}[ ]?\d{4}$/],["BG",/^\d{4}$/],["KH",/^\d{5}$/],["CV",/^\d{4}$/],["CL",/^\d{7}$/],["CR",/^(\d{4,5}|\d{3}-\d{4})$/],["HR",/^(HR-)?\d{5}$/],["CY",/^\d{4}$/],["CZ",/^\d{3}[ ]?\d{2}$/],["DO",/^\d{5}$/],["EC",/^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],["EG",/^\d{5}$/],["EE",/^\d{5}$/],["FO",/^\d{3}$/],["GE",/^\d{4}$/],["GR",/^\d{3}[ ]?\d{2}$/],["GL",/^39\d{2}$/],["GT",/^\d{5}$/],["HT",/^\d{4}$/],["HN",/^(?:\d{5})?$/],["HU",/^\d{4}$/],["IS",/^\d{3}$/],["IN",/^\d{6}$/],["ID",/^\d{5}$/],["IL",/^\d{5,7}$/],["JO",/^\d{5}$/],["KZ",/^\d{6}$/],["KE",/^\d{5}$/],["KW",/^\d{5}$/],["LA",/^\d{5}$/],["LV",/^(LV-)?\d{4}$/],["LB",/^(\d{4}([ ]?\d{4})?)?$/],["LI",/^(948[5-9])|(949[0-7])$/],["LT",/^(LT-)?\d{5}$/],["LU",/^(L-)?\d{4}$/],["MK",/^\d{4}$/],["MY",/^\d{5}$/],["MV",/^\d{5}$/],["MT",/^[A-Z]{3}[ ]?\d{2,4}$/],["MU",/^((\d|[A-Z])\d{4})?$/],["MX",/^\d{5}$/],["MD",/^\d{4}$/],["MC",/^980\d{2}$/],["MA",/^\d{5}$/],["NP",/^\d{5}$/],["NZ",/^\d{4}$/],["NI",/^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],["NG",/^(\d{6})?$/],["OM",/^(PC )?\d{3}$/],["PK",/^\d{5}$/],["PY",/^\d{4}$/],["PH",/^\d{4}$/],["PL",/^\d{2}-\d{3}$/],["RO",/^\d{6}$/],["RU",/^\d{6}$/],["SM",/^4789\d$/],["SA",/^\d{5}$/],["SN",/^\d{5}$/],["SK",/^\d{3}[ ]?\d{2}$/],["SI",/^(SI-)?\d{4}$/],["ZA",/^\d{4}$/],["LK",/^\d{5}$/],["TJ",/^\d{6}$/],["TH",/^\d{5}$/],["TN",/^\d{4}$/],["TR",/^\d{5}$/],["TM",/^\d{6}$/],["UA",/^\d{5}$/],["UY",/^\d{5}$/],["UZ",/^\d{6}$/],["VA",/^00120$/],["VE",/^\d{4}$/],["ZM",/^\d{5}$/],["AS",/^96799$/],["CC",/^6799$/],["CK",/^\d{4}$/],["RS",/^\d{5,6}$/],["ME",/^8\d{4}$/],["CS",/^\d{5}$/],["YU",/^\d{5}$/],["CX",/^6798$/],["ET",/^\d{4}$/],["FK",/^FIQQ 1ZZ$/],["NF",/^2899$/],["PN",/^PCRN 1ZZ$/],["PW",/^96940$/],["RE",/^9[78]4\d{2}$/],["SH",/^(ASCN|STHL) 1ZZ$/],["SJ",/^\d{4}$/],["SO",/^\d{5}$/],["SZ",/^[HLMS]\d{3}$/],["TC",/^TKCA 1ZZ$/],["WF",/^986\d{2}$/],["XK",/^\d{5}$/],["YT",/^976\d{2}$/],["INTL",/^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i]])},76424:function(n,e,a){"use strict";a.r(e),a.d(e,{default:function(){return w}});var t=a(85893),r=a(19076),o=a(47568),i=a(26042),u=a(69396),s=a(828),d=a(97582),c=a(67294),m=a(66252),l=a(73359),$=a(50319),_=a(7297),p=a(75063);function f(){var n=(0,_.Z)(["\n  query GetAdmin($id: Int!) {\n    admin: Account_by_pk(id: $id) {\n      id\n      name\n      website\n      companyNumber\n      vatId\n      status\n      type\n      meta\n      contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n        id\n        isContact\n        userId\n        user: User {\n          id\n          email\n          fullName\n          meta\n          name: nameFirst\n          nameFirst\n          nameLast\n          phone\n          status\n        }\n      }\n      managerSelected: Manager {\n        id\n        label: fullName\n        value: id\n      }\n    }\n  }\n"]);return f=function(){return n},n}function A(){var n=(0,_.Z)(["\n  mutation AddAdmin($objects: [Account_insert_input!]!) {\n    insert_Account(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return A=function(){return n},n}function h(){var n=(0,_.Z)(["\n  mutation UpdateAdmin($adminId: Int!, $admin: Account_set_input) {\n    update_Account_by_pk(pk_columns: { id: $adminId }, _set: $admin) {\n      id\n    }\n  }\n"]);return h=function(){return n},n}var U=(0,p.Ps)(f()),I=(0,p.Ps)(A()),y=(0,p.Ps)(h()),Z=a(11163),v=a.n(Z),S=a(73987),L=a(8986),g=a(20932),b=a(58473),C=a(82749),P=[{type:"priority",name:"P1",normalRate:1,oohRate:1,premiumRate:1,minimumInterval:30,minimumLength:90,onSite:60,onSiteUnit:"minutes",jobReport:4,jobReportUnit:"hours",completion:2,completionUnit:"days",notes:"Danger to life"},{type:"priority",name:"P2",normalRate:1,oohRate:1,premiumRate:1,minimumInterval:30,minimumLength:60,onSite:8,onSiteUnit:"hours",jobReport:24,jobReportUnit:"hours",completion:4,completionUnit:"days",notes:"Immediate attention required"},{type:"priority",name:"P3",normalRate:1,oohRate:1,premiumRate:1,minimumInterval:30,minimumLength:60,onSite:24,onSiteUnit:"hours",jobReport:2,jobReportUnit:"days",completion:7,completionUnit:"days",notes:"Prompt attention required"},{type:"priority",name:"P4",normalRate:1,oohRate:1,premiumRate:1,minimumInterval:30,minimumLength:60,onSite:2,onSiteUnit:"days",jobReport:5,jobReportUnit:"days",completion:10,completionUnit:"days",notes:"Next day"},{type:"priority",name:"P5",normalRate:1,oohRate:1,premiumRate:1,minimumInterval:30,minimumLength:60,onSite:7,onSiteUnit:"days",jobReport:14,jobReportUnit:"days",completion:14,completionUnit:"days",notes:"Non-urgent"}],q=a(74231),N=function(){return(0,q.Ry)().shape({managerSelected:(0,q.Ry)().required(),availableCharts:(0,q.IX)().when("modules",{is:function(n){return n.includes("dataCharts")},then:(0,q.IX)().of((0,q.Ry)().shape({label:(0,q.Z_)().required("Please select at least one chart"),value:(0,q.Z_)().required("Please select at least one chart")}).required("Please select at least one chart")).required("Please select at least one chart"),otherwise:(0,q.IX)().notRequired()}),name:(0,q.Z_)().required(),website:(0,q.Z_)().required(),companyNumber:(0,q.Z_)(),vatId:(0,q.Z_)(),status:(0,q.Z_)().oneOf(["active","inactive"]).required(),timeZone:(0,q.Ry)().shape({label:(0,q.Z_)().required(),value:(0,q.Z_)().required()}),contactUseremail:(0,q.Z_)().when("contactUser",{is:"true",then:(0,q.Z_)().required()}),contactUsernameFirst:(0,q.Z_)().when("contactUser",{is:"true",then:(0,q.Z_)().required()}),contactUsernameLast:(0,q.Z_)().when("contactUser",{is:"true",then:(0,q.Z_)().required()}),contactUserphone:(0,q.Z_)().when("contactUser",{is:"true",then:(0,q.Z_)().required()}),contactUserstatus:(0,q.Z_)().when("contactUser",{is:"true",then:(0,q.Z_)().required()})})},R="/dashboard/admins/",T=function(){var n,e=(0,m.x)(),a=(0,c.useContext)(S.Z).user,r=(0,Z.useRouter)().query,_=void 0===r?{}:r,p=(0,c.useState)(!1),f=p[0],A=p[1],h=(0,s.Z)((0,l.t)(U,{variables:{id:_.id}}),2),q=h[0],T=h[1],w=T.loading,E=T.data,B=(void 0===E?{admin:{}}:E).admin;(0,c.useEffect)(function(){_.id&&q()},[q,_.id]);var M,D=(0,s.Z)((0,$.D)(I,{onCompleted:(n=(0,o.Z)(function(n){var e;return(0,d.__generator)(this,function(a){return e=n.insert_Account.returning[0].id,v().push("".concat(R,"view?id=").concat(e)),[2]})}),function(e){return n.apply(this,arguments)})}),1)[0],H=(0,s.Z)((0,$.D)(y,{onCompleted:function(n){var e=n.update_Account_by_pk.id;v().push("".concat(R,"view?id=").concat(e))}}),1)[0],k=(M=(0,o.Z)(function(n){var a,t,r,o,s,c;return(0,d.__generator)(this,function(d){switch(d.label){case 0:if(d.trys.push([0,,6,7]),A(!0),(t={}).Admin={managerId:null==n?void 0:null===(a=n.managerSelected)||void 0===a?void 0:a.value,name:n.name,website:n.website,companyNumber:n.companyNumber,vatId:n.vatId,status:n.status,type:"admin"},r={},L.o.forEach(function(e){var a;r[e.value]=null===(a=n.modules)||void 0===a?void 0:a.includes(e.value)}),!_.id)return[3,2];return t.Admin.meta=(0,u.Z)((0,i.Z)({},B.meta),{modules:r,prevAvailableCharts:(null===(o=B.meta)||void 0===o?void 0:o.availableCharts)||[],availableCharts:n.availableCharts})||{},t.Admin.meta.timeZone=(0,i.Z)({},n.timeZone),t.Admin.meta.modules=r,[4,H({variables:{adminId:B.id,admin:t.Admin}})];case 1:return d.sent(),[3,5];case 2:return[4,(0,g.E)(e,n.contactUseremail,!0)];case 3:return c=d.sent(),t.Admin.meta={modules:r,prevAvailableCharts:(null===(s=B.meta)||void 0===s?void 0:s.availableCharts)||[],availableCharts:n.availableCharts,timeZone:(0,i.Z)({},n.timeZone)},t.AdminSLAs={data:P.map(function(n){return n.status="active",n})},t.AdminPostcodeAreas={data:C.y.map(function(n){return n.status="active",n.countryId=1,n})},t.Account_Users={data:[{isContact:!0,role:"owner",status:n.contactUserstatus}]},c?t.Account_Users.data[0].userId=c.id:t.Account_Users.data[0].User={data:{nameFirst:n.contactUsernameFirst,nameLast:n.contactUsernameLast,email:n.contactUseremail,phone:n.contactUserphone,status:"active",meta:{notificationSettings:{sms:!0,email:!0,toast:!0,pushNotification:!0}}}},[4,D({variables:{objects:(0,u.Z)((0,i.Z)({},t.Admin),{AdminPostcodeAreas:t.AdminPostcodeAreas,AdminSLAs:t.AdminSLAs,Account_Users:t.Account_Users})}})];case 4:d.sent(),d.label=5;case 5:return[3,7];case 6:return A(!1),[7];case 7:return[2]}})}),function(n){return M.apply(this,arguments)});return(!w||!_.id)&&(0,t.jsx)(b.P,{loading:f,account:B.id?B:null,id:_.id||null,onSubmit:k,schema:N,type:"admin",user:a},B?B.id:"new")},w=function(){return(0,t.jsx)(r.Z,{pageHeading:{heading:"Admins - Manage"},View:(0,t.jsx)(T,{})})}}},function(n){n.O(0,[2283,212,8890,619,2583,6043,1838,3911,1417,3776,3054,4043,1144,699,4972,274,9774,2888,179],function(){return n(n.s=48262)}),_N_E=n.O()}]);