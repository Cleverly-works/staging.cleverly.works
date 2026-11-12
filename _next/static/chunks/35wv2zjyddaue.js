(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,890350,e=>{var a,n,t,r=((a={}).SUPER_ADMIN="superadmin",a.ADMIN="admin",a.CUSTOMER="customer",a.SUPPLIER="supplier",a.TENANT="tenant",a),o=((n={}).VERIFIED="verified",n.UNVERIFIED="unverified",n),d=((t={}).CLEVERLY="cleverly",t.XERO="xero",t.BIDIRECTIONAL="bidirectional",t.NONE="none",t);e.s(["d",()=>r,"T",()=>o,"$",()=>d])},399942,e=>{var a=e.i(39059);let n=async function(e,n){let t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{let{data:{users:r}}=await e.query({query:a.e,variables:{email:n}});if(r&&r.length>0)return!!t&&r[0];return!t||null}catch(e){return!0}};e.s(["f",0,n])},39059,e=>{var a=e.i(159080);let n=a.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,t=a.f`
  mutation UpdateUser(
    $id: Int!
    $accountUserId: Int!
    $accountUserChanges: Account_User_set_input
    $accountUserModules: jsonb = {}
    $changes: User_set_input
    $updateAccountUser: Boolean!
  ) {
    update_Account_User_by_pk(
      pk_columns: { id: $accountUserId }
      _set: $accountUserChanges
      _append: { modules: $accountUserModules }
    ) @include(if: $updateAccountUser) {
      id
    }
    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,r=a.f`
  query GetUsers(
    $accountId: Int
    $accountType: String
    $date: timestamptz
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: User_order_by!
    $status: String
  ) {
    users: User(
      limit: $limit
      offset: $offset
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [
          { email: { _ilike: $q } }
          { nameFirst: { _ilike: $q } }
          { nameLast: { _ilike: $q } }
        ]
        status: { _eq: $status }
      }
      order_by: [$orderBy]
    ) {
      id
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
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
        userLocations: User_Account_Locations {
          accountLocationId
        }
      }
    }
    meta: User_aggregate(
      where: {
        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }
        createdAt: { _eq: $date }
        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]
        status: { _eq: $status }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,o=a.f`
  query GetUser($id: Int!) {
    user: User_by_pk(id: $id) {
      id
      fullName
      name: nameFirst
      nameFirst
      nameLast
      phone
      status
      email
      createdAt
      meta
      invoiceThreshold
      quoteThreshold
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
`,d=a.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,s=a.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,i=a.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,c=a.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,l=a.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,u=a.f`
  mutation UpdateAccountUserByUserIdAccoutId(
    $userId: Int!
    $accountId: Int!
    $changes: Account_User_set_input!
  ) {
    update_Account_User(
      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }
      _set: $changes
    ) {
      returning {
        id
      }
    }
  }
`,m=a.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,$=a.f`
  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {
    location: Location(
      offset: $offset
      limit: $limit
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      id
      name
      accountLocations: Account_Locations {
        id
      }
      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {
        id
        status
        address: Address {
          id
          name
          addressLine1
          postCode
        }
      }
    }
    meta: Location_aggregate(
      where: {
        Account_Locations: {
          accountId: { _eq: $accountId }
          Account: { type: { _eq: "customer" } }
        }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
  }
`,f=a.f`
  mutation InsertUserAccountLocations(
    $accountUserId: Int!
    $objects: [User_Account_Location_insert_input!]!
  ) {
    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_User_Account_Location(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`,h=a.f`
  mutation ReplaceAccountRestrictedLocations(
    $accountUserId: Int!
    $objects: [Location_Account_User_insert_input!]!
  ) {
    delete_Location_Account_User(where: { accountUserId: { _eq: $accountUserId } }) {
      affected_rows
    }
    insert_Location_Account_User(objects: $objects) {
      affected_rows
      returning {
        id
      }
    }
  }
`;e.s(["e",0,d,"u",0,$,"q",0,i,"_",0,l,"x",0,o,"k",0,r,"f",0,c,"U",0,f,"I",0,n,"s",0,h,"l",0,u,"V",0,t,"J",0,m,"W",0,s])},228526,e=>{e.s(["G",0,[{text:"Select Type Of Organisation",value:""},{text:"Sole trader",value:"soleTrader"},{text:"Limited company",value:"limitedCompany"},{text:"Partnership",value:"partnership"},{text:"LLP",value:"llp"},{text:"PLC",value:"plc"}],"h",0,[{label:"Sole trader",value:"soleTrader"},{label:"Limited company",value:"limitedCompany"},{label:"Partnership",value:"partnership"},{label:"LLP",value:"llp"},{label:"PLC",value:"plc"}]])},116932,e=>{let a=new Map([["UK",/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i],["GB",/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i],["JE",/^JE\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],["GG",/^GY\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],["IM",/^IM\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}$/],["US",/^([0-9]{5})(?:-([0-9]{4}))?$/],["CA",/^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i],["IE",/^([AC-FHKNPRTV-Y]\d{2}|D6W)\s[0-9AC-FHKNPRTV-Y]{4}$/],["DE",/^\d{5}$/],["JP",/^\d{3}-\d{4}$/],["FR",/^\d{2}[ ]?\d{3}$/],["AU",/^\d{4}$/],["IT",/^\d{5}$/],["CH",/^\d{4}$/],["AT",/^(?!0)\d{4}$/],["ES",/^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/],["NL",/^\d{4}[ ]?[A-Z]{2}$/],["BE",/^\d{4}$/],["DK",/^\d{4}$/],["SE",/^(SE-)?\d{3}[ ]?\d{2}$/],["NO",/^\d{4}$/],["FI",/^(FI-|AX-)?\d{5}$/],["AX",/^22\d{3}$/],["KR",/^\d{5}$/],["CN",/^\d{6}$/],["TW",/^\d{3}(\d{2})?$/],["SG",/^\d{6}$/],["DZ",/^\d{5}$/],["AD",/^AD\d{3}$/],["AR",/^([A-HJ-NP-Z])?\d{4}([A-Z]{3})?$/],["AM",/^(37)?\d{4}$/],["AZ",/^\d{4}$/],["BH",/^((1[0-2]|[2-9])\d{2})?$/],["BD",/^\d{4}$/],["BB",/^(BB\d{5})?$/],["BY",/^\d{6}$/],["BM",/^[A-Z]{2}[ ]?[A-Z0-9]{2}$/],["BA",/^\d{5}$/],["IO",/^BBND 1ZZ$/],["BN",/^[A-Z]{2}[ ]?\d{4}$/],["BG",/^\d{4}$/],["KH",/^\d{5}$/],["CV",/^\d{4}$/],["CL",/^\d{7}$/],["CR",/^(\d{4,5}|\d{3}-\d{4})$/],["HR",/^(HR-)?\d{5}$/],["CY",/^\d{4}$/],["CZ",/^\d{3}[ ]?\d{2}$/],["DO",/^\d{5}$/],["EC",/^([A-Z]\d{4}[A-Z]|(?:[A-Z]{2})?\d{6})?$/],["EG",/^\d{5}$/],["EE",/^\d{5}$/],["FO",/^\d{3}$/],["GE",/^\d{4}$/],["GR",/^\d{3}[ ]?\d{2}$/],["GL",/^39\d{2}$/],["GT",/^\d{5}$/],["HT",/^\d{4}$/],["HN",/^(?:\d{5})?$/],["HU",/^\d{4}$/],["IS",/^\d{3}$/],["IN",/^\d{6}$/],["ID",/^\d{5}$/],["IL",/^\d{5,7}$/],["JO",/^\d{5}$/],["KZ",/^\d{6}$/],["KE",/^\d{5}$/],["KW",/^\d{5}$/],["LA",/^\d{5}$/],["LV",/^(LV-)?\d{4}$/],["LB",/^(\d{4}([ ]?\d{4})?)?$/],["LI",/^(948[5-9])|(949[0-7])$/],["LT",/^(LT-)?\d{5}$/],["LU",/^(L-)?\d{4}$/],["MK",/^\d{4}$/],["MY",/^\d{5}$/],["MV",/^\d{5}$/],["MT",/^[A-Z]{3}[ ]?\d{2,4}$/],["MU",/^((\d|[A-Z])\d{4})?$/],["MX",/^\d{5}$/],["MD",/^\d{4}$/],["MC",/^980\d{2}$/],["MA",/^\d{5}$/],["NP",/^\d{5}$/],["NZ",/^\d{4}$/],["NI",/^((\d{4}-)?\d{3}-\d{3}(-\d{1})?)?$/],["NG",/^(\d{6})?$/],["OM",/^(PC )?\d{3}$/],["PK",/^\d{5}$/],["PY",/^\d{4}$/],["PH",/^\d{4}$/],["PL",/^\d{2}-\d{3}$/],["RO",/^\d{6}$/],["RU",/^\d{6}$/],["SM",/^4789\d$/],["SA",/^\d{5}$/],["SN",/^\d{5}$/],["SK",/^\d{3}[ ]?\d{2}$/],["SI",/^(SI-)?\d{4}$/],["ZA",/^\d{4}$/],["LK",/^\d{5}$/],["TJ",/^\d{6}$/],["TH",/^\d{5}$/],["TN",/^\d{4}$/],["TR",/^\d{5}$/],["TM",/^\d{6}$/],["UA",/^\d{5}$/],["UY",/^\d{5}$/],["UZ",/^\d{6}$/],["VA",/^00120$/],["VE",/^\d{4}$/],["ZM",/^\d{5}$/],["AS",/^96799$/],["CC",/^6799$/],["CK",/^\d{4}$/],["RS",/^\d{5,6}$/],["ME",/^8\d{4}$/],["CS",/^\d{5}$/],["YU",/^\d{5}$/],["CX",/^6798$/],["ET",/^\d{4}$/],["FK",/^FIQQ 1ZZ$/],["NF",/^2899$/],["PN",/^PCRN 1ZZ$/],["PW",/^96940$/],["RE",/^9[78]4\d{2}$/],["SH",/^(ASCN|STHL) 1ZZ$/],["SJ",/^\d{4}$/],["SO",/^\d{5}$/],["SZ",/^[HLMS]\d{3}$/],["TC",/^TKCA 1ZZ$/],["WF",/^986\d{2}$/],["XK",/^\d{5}$/],["YT",/^976\d{2}$/],["INTL",/^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i]]);e.s(["r",0,a,"F",0,[{area:"AB",name:"Aberdeen"},{area:"AL",name:"St. Albans"},{area:"B",name:"Birmingham"},{area:"BA",name:"Bath"},{area:"BB",name:"Blackburn"},{area:"BD",name:"Bradford"},{area:"BH",name:"Bournemouth"},{area:"BL",name:"Bolton"},{area:"BN",name:"Brighton"},{area:"BR",name:"Bromley"},{area:"BS",name:"Bristol"},{area:"BT",name:"Belfast"},{area:"CA",name:"Carlisle"},{area:"CB",name:"Cambridge"},{area:"CF",name:"Cardiff"},{area:"CH",name:"Chester"},{area:"CM",name:"Chelmsford"},{area:"CO",name:"Colchester"},{area:"CR",name:"Croydon"},{area:"CT",name:"Canterbury"},{area:"CV",name:"Coventry"},{area:"CW",name:"Crewe"},{area:"DA",name:"Dartford"},{area:"DD",name:"Dundee"},{area:"DE",name:"Derby"},{area:"DG",name:"Dumfries"},{area:"DH",name:"Durham"},{area:"DL",name:"Darlington"},{area:"DN",name:"Doncaster"},{area:"DT",name:"Dorchester"},{area:"DY",name:"Dudley"},{area:"E",name:"London E"},{area:"EC",name:"London EC"},{area:"EH",name:"Edinburgh"},{area:"EN",name:"Enfield"},{area:"EX",name:"Exeter"},{area:"FK",name:"Falkirk"},{area:"FY",name:"Blackpool"},{area:"G",name:"Glasgow"},{area:"GL",name:"Gloucester"},{area:"GU",name:"Guildford"},{area:"GY",name:"Guernsey"},{area:"HA",name:"Harrow"},{area:"HD",name:"Huddersfield"},{area:"HG",name:"Harrogate"},{area:"HP",name:"Hemel Hempstead"},{area:"HR",name:"Hereford"},{area:"HS",name:"Western Isles"},{area:"HU",name:"Hull"},{area:"HX",name:"Halifax"},{area:"IG",name:"Ilford"},{area:"IM",name:"Isle Of Man"},{area:"IP",name:"Ipswich"},{area:"IV",name:"Inverness"},{area:"JE",name:"Jersey"},{area:"KA",name:"Kilmarnock"},{area:"KT",name:"Kingston Upon Thames"},{area:"KW",name:"Kirkwall"},{area:"KY",name:"Kirkcaldy"},{area:"L",name:"Liverpool"},{area:"LA",name:"Lancaster"},{area:"LD",name:"Llandrindod Wells"},{area:"LE",name:"Leicester"},{area:"LL",name:"Llandudno"},{area:"LN",name:"Lincoln"},{area:"LS",name:"Leeds"},{area:"LU",name:"Luton"},{area:"M",name:"Manchester"},{area:"ME",name:"Medway"},{area:"MK",name:"Milton Keynes"},{area:"ML",name:"Motherwell"},{area:"N",name:"London N"},{area:"NE",name:"Newcastle Upon Tyne"},{area:"NG",name:"Nottingham"},{area:"NN",name:"Northampton"},{area:"NP",name:"Newport"},{area:"NR",name:"Norwich"},{area:"NW",name:"London NW"},{area:"OL",name:"Oldham"},{area:"OX",name:"Oxford"},{area:"PA",name:"Paisley"},{area:"PE",name:"Peterborough"},{area:"PH",name:"Perth"},{area:"PL",name:"Plymouth"},{area:"PO",name:"Portsmouth"},{area:"PR",name:"Preston"},{area:"RG",name:"Reading"},{area:"RH",name:"Redhill"},{area:"RM",name:"Romford"},{area:"S",name:"Sheffield"},{area:"SA",name:"Swansea"},{area:"SE",name:"London SE"},{area:"SG",name:"Stevenage"},{area:"SK",name:"Stockport"},{area:"SL",name:"Slough"},{area:"SM",name:"Sutton"},{area:"SN",name:"Swindon"},{area:"SO",name:"Southampton"},{area:"SP",name:"Salisbury"},{area:"SR",name:"Sunderland"},{area:"SS",name:"Southend-On-Sea"},{area:"ST",name:"Stoke-On-Trent"},{area:"SW",name:"London SW"},{area:"SY",name:"Shrewsbury"},{area:"TA",name:"Taunton"},{area:"TD",name:"Galashiels"},{area:"TF",name:"Telford"},{area:"TN",name:"Tonbridge"},{area:"TQ",name:"Torquay"},{area:"TR",name:"Truro"},{area:"TS",name:"Cleveland"},{area:"TW",name:"Twickenham"},{area:"UB",name:"Southall"},{area:"W",name:"London W"},{area:"WA",name:"Warrington"},{area:"WC",name:"London WC"},{area:"WD",name:"Watford"},{area:"WF",name:"Wakefield"},{area:"WN",name:"Wigan"},{area:"WR",name:"Worcester"},{area:"WS",name:"Walsall"},{area:"WV",name:"Wolverhampton"},{area:"YO",name:"York"},{area:"ZE",name:"Lerwick"}]])},207646,e=>{e.s(["f",0,[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"}]])},284642,e=>{var a=e.i(391398),n=e.i(813843),t=e.i(422411),r=e.i(356119),o=e.i(824451),d=e.i(191788),s=e.i(834862),i=e.i(886779);let c=e=>{let{control:n,...c}=e,{authStatus:l,tenantId:u,getXeroContacts:m}=(0,s.f)(),[$,f]=(0,d.useState)(!1),[h,A]=(0,d.useState)([]),[p,_]=(0,d.useState)(!1),L=(0,d.useRef)(null),I=(0,d.useRef)(0),y=(0,d.useCallback)(async e=>{if("authorized"!==l||L.current===e)return;L.current=e;let a=++I.current;f(!0);try{let n=await m(e);if(a!==I.current)return;if(!n){L.current=null;return}A(n.reduce((e,a)=>(a.contactID&&a.name&&e.push({label:a.name,value:a.contactID}),e),[]))}finally{a===I.current&&f(!1)}},[m,l]);(0,d.useEffect)(()=>{I.current+=1,L.current=null,A([]),f(!1)},[u]);let C=(0,d.useCallback)((e,a)=>{p&&"reset"!==a&&y(e)},[y,p]),S=(0,d.useCallback)(()=>{_(!0),y("")},[y]),U=(0,d.useCallback)(()=>{_(!1),L.current=null},[]);return(0,a.jsx)(t.e,{control:n,defaultValue:null,name:"xeroContact",render:e=>{let{value:n,onChange:t}=e;return(0,a.jsx)(o.f,{loading:$,variant:"standard",color:"secondary",label:"Xero contact",value:n,options:h,filterOptions:e=>e,onChange:(e,a)=>t(a),open:p,onOpen:S,onClose:U,onSearchChange:C,getOptionLabel:e=>"string"==typeof e?e:e?.label??"",renderOption:(e,n)=>(0,a.jsx)("li",{...e,children:(0,a.jsxs)(i.f,{children:[(0,a.jsx)(r.f,{variant:"body2",children:n.label}),(0,a.jsx)(r.f,{variant:"caption",color:"text.secondary",children:n.value})]})}),...c})}})};e.s(["f",0,e=>{let{displayXero:o=!1}=e,{control:d}=(0,t.M)();return o?(0,a.jsxs)(n.f,{width:"100%",spacing:1,children:[(0,a.jsx)(r.f,{variant:"h6",textAlign:"center",children:"Xero user sync"}),(0,a.jsx)(c,{control:d,variant:"standard"})]}):null}],284642)},335744,e=>{var a=e.i(391398),n=e.i(813843),t=e.i(422411),r=e.i(824451),o=e.i(164056),d=e.i(356119),s=e.i(228526);e.s(["f",0,()=>{let{control:e,formState:{errors:i}}=(0,t.M)();return(0,a.jsxs)(n.f,{width:"100%",spacing:1,children:[(0,a.jsx)(d.f,{variant:"h6",textAlign:"center",children:"Supplier"}),(0,a.jsx)(t.e,{name:"typeOfOrganisation",control:e,defaultValue:null,render:e=>{let{value:n,onChange:t}=e;return(0,a.jsx)(r.f,{variant:"standard",color:"secondary",label:"Type of organisation",options:s.h,value:n,onChange:(e,a)=>t(a),error:!!i?.clientType,helperText:i?.clientType?.message})}}),(0,a.jsx)(t.e,{name:"quotingEmail",control:e,defaultValue:"",render:e=>{let{value:n,onChange:t}=e;return(0,a.jsx)(o.f,{variant:"standard",color:"secondary",label:"Quoting email",type:"email",value:n,onChange:t,error:!!i?.quotingEmail,fullWidth:!0})}}),(0,a.jsx)(t.e,{name:"utrNumber",control:e,defaultValue:"",render:e=>{let{value:n,onChange:t}=e;return(0,a.jsx)(o.f,{variant:"standard",color:"secondary",label:"UTR Number",value:n,onChange:t,error:!!i?.quotingEmail,fullWidth:!0})}}),(0,a.jsx)(t.e,{name:"cisRegistered",control:e,defaultValue:"",render:e=>{let{value:n,onChange:t}=e;return(0,a.jsx)(o.f,{variant:"standard",color:"secondary",label:"CIS registration number",value:n,onChange:t,error:!!i?.quotingEmail,fullWidth:!0})}})]})}])},480178,e=>{var a=e.i(391398),n=e.i(738251),t=e.i(115871),r=e.i(755548),o=e.i(19512);e.s(["f",0,e=>{let{title:d,description:s,onSave:i,formId:c,loading:l=!1,disabled:u=!1}=e;return(0,a.jsxs)(n.f,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,a.jsxs)(n.f,{children:[(0,a.jsx)(t.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600,mb:1},children:d}),s&&(0,a.jsx)(t.f,{variant:"body2",color:"text.secondary",children:s})]}),(0,a.jsx)(r.f,{variant:"contained",color:"secondary",startIcon:(0,a.jsx)(o.default,{}),type:c?"submit":"button",form:c,onClick:c?void 0:i,disabled:l||u,sx:{minWidth:150},children:"Save changes"})]})}])},19512,(e,a,n)=>{var t=e.r(978509);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(e.r(421506)),o=e.r(391398);n.default=(0,r.default)((0,o.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},540158,e=>{var a=e.i(460997),n=e.i(75907),t=e.i(191788),r=e.i(889878),o=e.i(600961),d=e.i(396851),s=e.i(896994),i=e.i(395724),c=e.i(115871),l=e.i(713149),u=e.i(46739);function m(e){return(0,u.f)("MuiDialogContentText",e)}(0,l.f)("MuiDialogContentText",["root"]);var $=e.i(391398);let f=["children","className"],h=(0,d.f)(c.f,{shouldForwardProp:e=>(0,s.f)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,a)=>a.root})({}),A=t.forwardRef(function(e,t){let d=(0,i.f)({props:e,name:"MuiDialogContentText"}),{className:s}=d,c=(0,a.f)(d,f),l=(e=>{let{classes:a}=e,t=(0,o.f)({root:["root"]},m,a);return(0,n.f)({},a,t)})(c);return(0,$.jsx)(h,(0,n.f)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:c,className:(0,r.f)(l.root,s)},d,{classes:l}))});e.s(["f",0,A],540158)}])})();