(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,842088,964919,e=>{let t=(e,t)=>e?.addresses?.find(e=>!0===e[t])||null,i=e=>!!(e.addressLine1?.trim()||e.city?.trim()||e.postCode?.trim()),r=e=>{let t=e?.address||e;return t&&i(t)?{name:t.name||"",addressLine1:t.addressLine1||"",addressLine2:t.addressLine2||"",addressLine3:t.addressLine3||"",city:t.city||"",county:t.county||"",postCode:t.postCode||"",countryId:t.countryId||t.country?.id||1}:null};e.s(["U",0,e=>[e.addressLine1,e.addressLine2,e.addressLine3,e.city,e.county,e.postCode].map(e=>e?.trim()).filter(Boolean).join(", "),"S",0,e=>t(e,"registered")||t(e,"invoice")||e?.addresses?.[0]||null,"k",0,i,"Q",0,r],964919);let n=e=>{if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e||""===e.trim())return null;let t=Number(e.trim());return Number.isFinite(t)?t:null},o=e=>{let t=e?.coordinates;if(!Array.isArray(t)||t.length<2)return null;let i=n(t[0]),r=n(t[1]);return null==r||null==i||r<-90||r>90||i<-180||i>180?null:{lat:r,lng:i}},a=e=>o(e?.geo),s=async e=>{let t=r(e);if(!t)return null;try{let e=await window.fetch("https://aws-staging.cleverly.works/google/maps/geocode",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:JSON.stringify({address:t})});if(!e.ok)return null;var i=await e.json();if(!i)return null;let r=i.coordinates?.lat??i.lat;return a({geo:{coordinates:[i.coordinates?.lng??i.lng,r]}})}catch{return null}},d=async(e,t)=>{let i=a(e?.address||e);if(i)return i;let[r,n]=t?.coordinates??[],o=a({geo:{coordinates:[r,n]}});return o||s(e)};e.s(["g",0,o,"Z",0,a,"t",0,d,"l",0,(e,t)=>{let i=a(e?.address||e);if(i)return i;let[r,n]=t?.coordinates??[];return a({geo:{coordinates:[r,n]}})},"a",0,n],842088)},287723,e=>{e.s(["f",0,function e(t,i){return!0===t||Array.isArray(t)||null==i||"object"!=typeof i?i:Object.fromEntries(Object.keys(t).map(r=>[r,e(t[r]??!1,i[r])]))}])},648065,e=>{e.s(["f",0,e=>{let t=null,i=[...e||[]].sort((e,t)=>Number(e.id)-Number(t.id));for(let e=i.length-1;e>=0;e--){let r=i[e]?.status;if(r&&["onHold","resumed","paused","continued","onMyWayPaused","onMyWayResumed"].includes(r)){t=r;break}}return t}])},44165,e=>{e.s(["$",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);return i?.find(t=>t.status===`${e}ThresholdApproval`)},"B",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);if(Array.isArray(e)){let t;return e.forEach(e=>{t=i?.find(t=>t.status===`${e}ThresholdApproved`)||t}),t}return i?.find(t=>t.status===`${e}ThresholdApproved`)},"n",0,(e,t)=>{let i=t?.slice()?.sort((e,t)=>t.id-e.id);return i?.find(t=>t.status===`${e}ThresholdRejected`)},"t",0,(e,t,i)=>{let r=t?.slice()?.sort((e,t)=>t.id-e.id);return r?.find(t=>t.status===`${e}QuoteThresholdApproval`&&i===t.quoteId)},"D",0,(e,t,i)=>{let r=t?.slice()?.sort((e,t)=>t.id-e.id);return r?.find(t=>t.status===`${e}QuoteThresholdApproved`&&i===t.quoteId)},"k",0,(e,t,i)=>{let r=t?.slice()?.sort((e,t)=>t.id-e.id);return r?.find(t=>t.status===`${e}QuoteThresholdRejected`&&i===t.quoteId)}])},865568,e=>{var t=e.i(159080);let i=t.f`
  query GetTaxonomys(
    $limit: Int
    $offset: Int
    $q: String
    $orderBy: Taxonomy_order_by!
    $status: String = "active"
    $type: String
    $typeGroup: String
    $parentId: Int
    $fetchGroup: Boolean! = true
    $id: Int
    $isGroup: Boolean = false
  ) {
    taxonomy: Taxonomy(
      limit: $limit
      offset: $offset
      where: {
        name: { _ilike: $q }
        status: { _eq: $status }
        type: { _eq: $type }
        parentId: { _eq: $parentId }
        id: { _eq: $id }
        isGroup: { _eq: $isGroup }
      }
      order_by: [$orderBy]
    ) {
      options: Taxonomies(
        where: {
          type: { _eq: $type }
          name: { _ilike: $q }
          id: { _eq: $id }
          status: { _eq: "active" }
        }
        order_by: { name: asc }
      ) {
        value: id
        label: name

        childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {
          taxonomyId: id
          name
          type
          meta
          status
        }
      }
      id
      name
      type
      status
      parentId
      createdAt
      meta
      parent: Parent {
        id
        name
        type
      }
      childs: Taxonomies(order_by: { id: asc }, where: { status: { _eq: "active" } }) {
        taxonomyId: id
        name
        type
        meta
        status
      }
      jobs: Taxonomy_Entities_aggregate(
        where: { Taxonomy: { type: { _eq: "jobTags" } }, entity: { _eq: "Job" } }
      ) {
        aggregate {
          count
        }
      }
      FormSubmissions(where: { entity: { _eq: "Taxonomy" } }) {
        id
        entity
        entityId
        form: FormSubmissionsForm {
          name
        }
      }
    }
    meta: Taxonomy_aggregate(
      where: {
        name: { _ilike: $q }
        status: { _eq: $status }
        type: { _eq: $type }
        parentId: { _eq: $parentId }
        id: { _eq: $id }
        isGroup: { _eq: $isGroup }
      }
    ) {
      aggregate {
        totalCount: count
      }
    }
    taxonomyGroup: Taxonomy(where: { isGroup: { _eq: true }, type: { _eq: $typeGroup } })
      @include(if: $fetchGroup) {
      value: id
      text: name
    }
  }
`;t.f`
  query GetTaxonomy($id: Int!) {
    taxonomy: Taxonomy_by_pk(id: $id) {
      id
      name
      type
      status
      parentId
      createdAt
      meta
    }
  }
`;let r=t.f`
  mutation AddTaxonomy($objects: [Taxonomy_insert_input!]!) {
    insert_Taxonomy(objects: $objects) {
      returning {
        id
        type
      }
    }
  }
`,n=t.f`
  mutation UpdateTaxonomy($id: Int!, $changes: Taxonomy_set_input) {
    update_Taxonomy_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      type
    }
  }
`;t.f`
  query GeTaxonomyWithEntities($type: String!, $entity: String!, $entityId: Int!) {
    questions: Taxonomy(where: { type: { _eq: $type } }) {
      id
      meta
      name
      status
      taxonomy_entity: Taxonomy_Entities(
        where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }
      ) {
        comments
      }
    }
  }
`,t.f`
  mutation InsertTaxonomyEntity(
    $entity: String!
    $entityId: Int!
    $questions: [Taxonomy_Entity_insert_input!]!
    $objectStatusLog: [StatusLog_insert_input!]!
    $hasStatusLog: Boolean!
  ) {
    delete_Taxonomy_Entity(where: { entityId: { _eq: $entityId }, entity: { _eq: $entity } }) {
      returning {
        id
      }
    }
    insert_Taxonomy_Entity(objects: $questions) {
      returning {
        id
      }
    }

    insert_StatusLog(objects: $objectStatusLog) @include(if: $hasStatusLog) {
      returning {
        id
      }
    }
  }
`,t.f`
  query GetSlasForTemplate($where: SLA_bool_exp, $limit: Int, $offset: Int) {
    slas: SLA(where: $where, order_by: { name: asc }, limit: $limit, offset: $offset) {
      id
      label: name
      subtype
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
    }
  }
`,e.s(["e",0,r,"N",0,i,"y",0,n])},39059,e=>{var t=e.i(159080);let i=t.f`
  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {
    insert_Account_User(objects: $objects) {
      returning {
        id
      }
    }
  }
`,r=t.f`
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
`,n=t.f`
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
`,o=t.f`
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
`,a=t.f`
  query CheckDuplicateEmail($email: String!) {
    users: User_public(where: { email: { _eq: $email } }) {
      id
      nameFirst
      nameLast
      email
      phone
    }
  }
`,s=t.f`
  fragment UserFields on User {
    id
    email
    nameFirst
    nameLast
    fullName
    phone
    status
  }
`,d=t.f`
  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {
    createGoogleToken(code: $code, id: $id, type: $type) {
      success
      tokens
      error
    }
  }
`,u=t.f`
  mutation GenerateMSURL($type: String!, $id: Int!) {
    genenrateMSURL(id: $id, type: $type) {
      url
    }
  }
`,l=t.f`
  mutation signoutMS($id: Int!, $type: String!, $email: String!) {
    signoutMS(id: $id, type: $type, email: $email) {
      error
      msId
      success
    }
  }
`,c=t.f`
  query getAccountMeta($id: Int!) {
    account: Account_by_pk(id: $id) {
      meta
    }
  }
`,m=t.f`
  query user($id: Int!) {
    user: User_by_pk(id: $id) {
      meta
      invoiceThreshold
      quoteThreshold
    }
  }
`,p=t.f`
  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {
    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {
      meta
    }
  }
`,f=t.f`
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
`,y=t.f`
  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {
      id
    }
  }
`,g=t.f`
  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {
    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {
      id
      meta
    }
  }
`,h=t.f`
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
`,b=t.f`
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
`,v=t.f`
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
`;e.s(["e",0,a,"d",0,u,"u",0,h,"q",0,c,"_",0,p,"x",0,o,"k",0,n,"f",0,m,"U",0,b,"I",0,i,"s",0,v,"c",0,d,"S",0,l,"o",0,y,"l",0,f,"V",0,r,"J",0,g,"W",0,s])},506656,e=>{e.s(["f",0,(e,t)=>{let i=Math.pow(10,t);return Math.round(e*i)/i}])},358369,936509,76698,442600,e=>{e.s(["d",0,[{id:"time-materials",label:"Time & Materials",value:"time-materials"},{id:"fixed",label:"Fixed",value:"fixed"}],"v",0,[{id:"complete",label:"Job complete",value:"complete"},{id:"completeCertificate",label:"Job complete, certificate to follow",value:"completeCertificate"},{id:"returnVisit",label:"Return visit required",value:"returnVisit"},{id:"returnVisitByAnother",label:"Visit required by another supplier",value:"returnVisitByAnother"},{id:"couldNotDo",label:"Could not do",value:"couldNotDo"}],"z",0,[{id:"at",label:"At",value:"at"},{id:"between",label:"Between",value:"between"}]],358369);var t=e.i(159080);let i=t.f`
  query GetJobForAddInvoiceForm($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      id
      locationId
      customerId
      supplierId
      reverseCharge
      cisPercentage
      customerReverseCharge
      customerCisPercentage
      customerCustomVat: meta(path: "customerCustomVat")
      supplier: Supplier {
        reverseCharge
        cisStatus
        vatId
      }
      customer: Customer {
        id
        vatId
        reverseCharge
        cisPercentage
        defaultVatRate
        meta
      }
      relatedCustomers: JobRelatedCustomers {
        accountId
        account: Account {
          id
          defaultVatRate
        }
      }
      admin: Admin {
        meta
      }
    }
  }
`;e.s(["f",0,i],936509),t.f`
  query getInvoices($id: Int!) {
    invoice: Invoice_by_pk(id: $id) {
      id
      accountEntry: AccountEntry {
        id
        paymentStatus
      }
      items
      status
      createdAt
      rebate
      meta
      totals
      invoiceType
      invoiceNumber
      invoiceDate
      expenses
      entityId
      configs
      amounts
      addendum
      addresses
      adminId
      amountPaid: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "PaymentReceipt" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      amountDeducted: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "CreditNote" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      reconciledAmount: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    }
  }
`;let r=t.f`
  query getInvoiceForPdf($id: Int!) {
    invoice: Invoice_by_pk(id: $id) {
      id
      entityId
      invoiceType
      accountEntry: AccountEntry {
        id
        type
        invoiceNumber
        meta
      }
      amountPaid: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "PaymentReceipt" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      amountDeducted: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "CreditNote" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      reconciledAmount: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    }
  }
`,n=t.f`
  query getInvoiceForPdfByTypes($jobId: Int!, $invoiceTypes: [String!]!) {
    invoices: Invoice(
      where: {
        entityId: { _eq: $jobId }
        entity: { _eq: "Job" }
        invoiceType: { _in: $invoiceTypes }
      }
      order_by: { createdAt: desc }
    ) {
      id
      invoiceType
      accountEntry: AccountEntry {
        id
        type
        meta
        invoiceNumber
      }
      amountPaid: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "PaymentReceipt" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      amountDeducted: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "CreditNote" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      reconciledAmount: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    }
  }
`,o=t.f`
  query getInvoiceForPdfByType($jobId: Int!, $invoiceType: String!) {
    invoices: Invoice(
      where: {
        entityId: { _eq: $jobId }
        entity: { _eq: "Job" }
        invoiceType: { _eq: $invoiceType }
      }
      order_by: { createdAt: desc }
    ) {
      id
      invoiceType
      accountEntry: AccountEntry {
        id
        type
        meta
        invoiceNumber
      }
      amountPaid: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "PaymentReceipt" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      amountDeducted: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate(
          where: { creditEntity: { _eq: "CreditNote" } }
        ) {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
      reconciledAmount: AccountEntry {
        reconciliations: InvoiceReconciliations_aggregate {
          aggregate {
            sum {
              amount
            }
          }
        }
      }
    }
  }
`;e.s(["U",0,r,"I",0,o,"g",0,n],76698),e.s([],442600)},795617,e=>{var t=e.i(990071),i=e.i(842088);let r=(e,t)=>e?.addresses&&e.addresses.length?e.addresses.find(e=>!0===e[t]):null;e.s(["c",0,e=>{let{address:t,sublocation:i,type:r="inline",hideinvoicingEntity:n=!1}=e;if(!t)return"";let o="",a=i?.name?` (${i.name})`:"";return"stacked"===r?(o+=!n&&t.invoicingEntity?t.invoicingEntity+"\n":"",o+=t.addressLine1?t.addressLine1+a+"\n":a,o+=t.addressLine2?t.addressLine2+"\n":"",o+=t.addressLine3?t.addressLine3+"\n":"",o+=t.city?t.city+"\n":"",o+=t.county?t.county+"\n":""):(o+=!n&&t.invoicingEntity?t.invoicingEntity+" ":"",o+=t.addressLine1?t.addressLine1+a+" ":a,o+=t.addressLine2?t.addressLine2+" ":"",o+=t.addressLine3?t.addressLine3+" ":"",o+=t.city?t.city+" ":"",o+=t.county?t.county+" ":""),(o+=t.postCode?t.postCode.trim():"").trim()},"H",0,e=>[e?.name?.trim(),e?.addressLine1?.trim()].filter(Boolean).join(", ")||"-","w",0,r,"N",0,e=>{let t="Select address";switch(e){case"registered":t="Select address";break;case"operating":t="Select operating address";break;case"trading":t="Select trading address";break;case"invoice":t="Select invoice address"}return t},"p",0,e=>{let i=null;switch(e){case"Account":i=t.A;break;case"Location":i=t.R;break;default:throw Error(`Unsupported entity type: ${e}`)}if(!i)throw Error("Query cannot be null");return i},"u",0,(e,t)=>{let i=null;return"customer"===t?i=r(e.location,"invoice")||r(e.customer,"invoice")||r(e.location,"registered"):"supplier"===t&&(i=r(e.supplier,"invoice")||r(e.supplier,"registered")),i},"D",0,e=>{let t=(0,i.g)(e?.geo);return t?`${t.lat},${t.lng}`:`${e.addressLine1} ${e.city} ${e.postCode}`}])},990071,e=>{var t=e.i(159080);let i=t.f`
  fragment AddressFields on Address {
    id
    invoicingEntity
    name
    addressLine1
    addressLine2
    addressLine3
    postCode
    city
    county
    geo
    createdAt
    meta
  }
`,r=t.f`
  fragment AddressEntityFields on Address_Entity {
    id
    entity
    entityId
    status
    registered
    operating
    trading
    invoice
    createdAt
  }
`,n=t.f`
  query GetAddresses($id: Int!) {
    item: Account_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Account" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
    }
  }
  ${i}
  ${r}
`,o=t.f`
  query GetAddresses($id: Int!) {
    item: Location_by_pk(id: $id) {
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
        ...AddressEntityFields
        address: Address {
          ...AddressFields
          country: Country {
            id
            name
          }
        }
      }
      accounts: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          addresses: Addresses(where: { entity: { _eq: "Account" } }) {
            ...AddressEntityFields
            address: Address {
              ...AddressFields
            }
          }
        }
      }
    }
  }
  ${i}
  ${r}
`,a=t.f`
  mutation AddAddress($objects: [Address_insert_input!]!) {
    insert_Address(objects: $objects) {
      returning {
        ...AddressFields
      }
    }
  }
  ${i}
`,s=t.f`
  mutation UpdateAddress($id: Int!, $changes: Address_set_input!) {
    update_Address_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`,d=t.f`
  mutation AddUpdateAddress_Entity(
    $objects: [Address_Entity_insert_input!]!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    insert_Address_Entity(objects: $objects) {
      returning {
        id
      }
    }
  }
`,u=t.f`
  mutation UpdateAddress_Entities(
    $id: Int!
    $changes: Address_Entity_set_input!
    $whereOld: Address_Entity_bool_exp!
    $changesOld: Address_Entity_set_input!
  ) {
    updateOld: update_Address_Entity(where: $whereOld, _set: $changesOld) {
      returning {
        id
      }
    }
    updateNew: update_Address_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
    }
  }
`;e.s(["S",0,r,"a",0,i,"g",0,a,"H",0,d,"A",0,n,"R",0,o,"h",0,s,"I",0,u])},881128,e=>{e.s(["f",0,()=>"£"])},569373,e=>{e.s(["W",0,"—","r",0,function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==e||""===e)return"—";switch(t.fieldSubtype){case"currency":{let t=i.currencySymbol??"£",r="number"==typeof e?e.toFixed(2):String(e);return`${t}${r}`}case"time_range":if(!e?.start&&!e?.end)return"—";return`${e.start??"—"} → ${e.end??"—"}`;case"dropdown":case"radio":{let i=t.options.find(t=>t.value===e);return i?.label??String(e)}case"checkboxes":case"multi_select":if(!Array.isArray(e)||0===e.length)return"—";return e.map(e=>{let i=t.options.find(t=>t.value===e);return i?.label??e}).join(", ");default:return String(e)}}])},577579,e=>{var t=e.i(391398);e.i(443645);var i=e.i(648116),r=e.i(21557),n=e.i(88152),o=e.i(813843),a=e.i(115871),s=e.i(755548),d=e.i(529422),u=e.i(280445),l=e.i(191788),c=e.i(74633),m=e.i(936641),p=e.i(498681);let f=e=>{let{errors:i,onClose:r}=e,{admin:n}=(0,p.f)(),u=n.jobSetting.jobNumberPrefix,f=n.jobSetting.jobNumberSuffix,g=(0,l.useMemo)(()=>[{flex:1,minWidth:100,field:"job",headerName:"Job ID",sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsx)(d.f,{id:i.job.id,number:i.job.number,type:i.job.type,numberPrefix:u,numberSuffix:f,isBlank:!0,isHref:!0})}},{flex:1,minWidth:200,field:"customerError",headerName:"Customer Error",sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsx)(a.f,{variant:"body1",children:i.customerError?.message})}},{flex:1,minWidth:200,field:"supplierError",headerName:"Supplier Error",sortable:!1,renderCell:e=>{let{row:i}=e;return(0,t.jsx)(a.f,{variant:"body1",children:i.supplierError?.message})}}],[u,f]),h=(0,l.useMemo)(()=>i.sort((e,t)=>t.job.id-e.job.id),[i]);return(0,t.jsx)(y,{sx:{padding:4},children:(0,t.jsxs)(o.f,{direction:"column",alignItems:"center",spacing:2,children:[(0,t.jsx)(m.f,{variant:"filled",severity:"error",sx:{width:"100%"},children:"Some errors occurred while recalculating the finances."}),(0,t.jsx)(o.f,{height:"100%",width:"100%",sx:{overflow:"auto"},children:(0,t.jsx)(c.s,{autoHeight:!1,columns:g,rows:h,getRowId:e=>e.job.id,containerHeight:"calc(80vh - 200px)"})}),(0,t.jsx)(s.f,{fullWidth:!0,variant:"contained",color:"secondary",onClick:r,children:"Ok"})]})})},y=(0,u.f)(n.f)(e=>{let{theme:t}=e;return{padding:`${t.spacing(4)} !important`,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100%",maxWidth:"600px",maxHeight:"80vh"}});e.s(["S",0,()=>{let[e,r]=(0,i.f)();return{recalcModal:e,showRecalcErrors:async e=>{let i=e?.errors;return!!Array.isArray(i)&&0!==i.length&&(await r({content:e=>{let{onClose:r}=e;return(0,t.jsx)(f,{errors:i,onClose:r})}}),!0)}}},"H",0,()=>{let e=(0,r.f)();return{showRecalcErrorsSnackbar:t=>{let i=t?.errors;if(!Array.isArray(i)||0===i.length)return!1;let[r]=i,n=[r?.customerError?.message,r?.supplierError?.message].filter(e=>!!e);for(let t of n.length>0?n:["Saved, but the job finances could not be recalculated. Re-open the job to refresh them."])e.show({content:t,severity:"warning"});return!0}}}],577579)},720847,e=>{var t=e.i(391398),i=e.i(262999),r=e.i(974266),n=e.i(405167),o=e.i(405765),a=e.i(886779),s=e.i(917563),d=e.i(345837),u=e.i(491171),l=e.i(589200),c=e.i(422411),m=e.i(280445);let p=(0,m.f)(l.f)(()=>({"& .MuiFormHelperText-root.Mui-error":{marginLeft:"0px"}})),f=(0,m.f)(s.f)(()=>({position:"relative"}));e.s(["f",0,e=>{let{name:s,control:l,options:m,errors:y,optionDescription:g,loading:h=!1,handleChange:b}=e;return h?(0,t.jsx)(a.f,{width:"100%",spacing:1,children:(0,t.jsx)(r.f,{color:"secondary"})}):(0,t.jsxs)(a.f,{width:"100%",spacing:1,children:[(0,t.jsx)(c.e,{name:s,control:l,defaultValue:null,render:e=>{let{value:i,onChange:r}=e;return(0,t.jsx)(f,{children:(0,t.jsxs)(p,{color:"secondary",error:!!y?.[s],children:[(0,t.jsx)(u.f,{"aria-labelledby":"priority",name:"priority",color:"secondary",value:i?.value,onChange:e=>{let t=e.target.value,i=m.find(e=>e.value===Number(t));r(i),b?.(i)},sx:{flexDirection:"row"},children:m.map(e=>(0,t.jsx)(d.f,{value:e.value,control:(0,t.jsx)(o.f,{color:"secondary"}),label:e.label},e.value))}),y?.[s]&&"message"in y[s]&&(0,t.jsx)(n.f,{error:!0,children:y[s]?.message}),(0,t.jsx)("input",{type:"hidden",value:i})]})})}}),g&&(0,t.jsx)(i.f,{variant:"filled",severity:"info",sx:{backgroundColor:"muiGray.main"},children:g})]})}])},181881,e=>{var t=e.i(432171),i=e.i(35818),r=e.i(695567);e.s(["f",0,e=>{let{subtype:n,customerId:o,locationId:a}=e,{data:s,loading:d}=(0,t.t)(i.o,{skip:!o||!a,variables:{customerId:o,locationId:a}});return{priority:{options:(0,r.f)({subtype:n,slas:s?.slas||[],customerSlas:s?.customerSlas||[],locationSlas:s?.locationSlas||[]}),loading:d}}}])},271522,e=>{var t=e.i(877341),i=e.i(176278),r=e.i(851123),n=e.i(191788);e.s(["f",0,()=>{let[e,o]=(0,n.useState)(""),[a,{data:{items:s}={items:[]},loading:d}]=(0,t.f)(r.O,{variables:{q:""!==e?`%${e}%`:null,orderBy:[{name:"asc"}]}}),[u]=(0,t.f)(i.f);return{setQuoteSummary:{loading:d,options:s,onSearchChange:o,onOpen:()=>a()},getQuoteSummary:u}}])},787009,e=>{var t=e.i(877341),i=e.i(35818),r=e.i(176278),n=e.i(851123),o=e.i(191788);e.s(["f",0,()=>{let[e,a]=(0,o.useState)(""),[s,{data:{items:d}={items:[]},loading:u}]=(0,t.f)(n.T,{variables:{q:""!==e?`${e}%`:null,orderBy:[{name:"asc"}]}}),[l]=(0,t.f)(r.f),[c]=(0,t.f)(i.U),[m]=(0,t.f)(n.z);return{setShortJobDescription:{loading:u,options:d,onSearchChange:a,onOpen:()=>s()},getShortJobDescriptionQuestions:m,getShortJobDescription:l,getPriority:c}}])},471612,63767,e=>{var t=e.i(191788),i=e.i(185242),r=e.i(122965),n=e.i(21557);let o=[];e.s(["f",0,e=>{let a,{jobId:s,customerId:d,locationId:u,serviceId:l,excludeJobId:c,filterByService:m=!0,includeWarning:p=!1,types:f,timeZone:y=Intl.DateTimeFormat().resolvedOptions().timeZone,enabled:g=!0,initialSort:h}=e,b=(0,n.f)(),{reference:v,pagination:_,order:$}=(0,r.f)(h?{initialSort:h}:{}),{orderBy:I,orderDir:S}={orderBy:((a=$[0])?Object.keys(a)[0]:"id")||"id",orderDir:(a?String(Object.values(a)[0]):"desc").startsWith("desc")?"desc":"asc"},A=null!=s||null!=d&&null!=u,q=!A,x=(0,t.useMemo)(()=>{if(A)return(e=>{let{jobId:t,customerId:i,locationId:r,serviceId:n,excludeJobId:o,filterByService:a=!0,includeWarning:s=!1,types:d,timeZone:u,limit:l,offset:c,orderBy:m,orderDir:p}=e,f={limit:l,offset:c,orderBy:m,orderDir:p,includeWarning:s};return f.filterByService=a,null!=t?f.jobId=t:(null!=i&&(f.customerId=i),null!=r&&(f.locationId=r),null!=n&&(f.serviceId=n),null!=o&&(f.excludeJobId=o)),d&&d.length>0&&(f.types=[...d]),u&&(f.timeZone=u),f})({jobId:s,customerId:d,locationId:u,serviceId:l,excludeJobId:c,filterByService:m,includeWarning:p,types:f,timeZone:y,limit:_.limit,offset:_.offset,orderBy:I,orderDir:S})},[A,s,d,u,l,c,m,p,f,y,_.limit,_.offset,I,S]),{data:j,isLoading:w}=(0,i.f)("/job/history",{queryKey:"job-history",skip:q||!g,params:x,onError:()=>{b.show({content:"Could not load job history",severity:"error"})}}),U=q?o:j?.jobs??o;return{reference:v,jobs:U,totalCount:q?0:j?.count??0,jobHistoryWarning:!q&&!!j?.hasWarning,loading:w}}],471612);var a=e.i(391398),s=e.i(773831),d=e.i(813843),u=e.i(322135),l=e.i(858564),c=e.i(820726),m=e.i(529422),p=e.i(624841),f=e.i(65295);e.s(["Z",0,e=>{let{numberPrefix:t,numberSuffix:i}=e;return[{field:"id",headerName:"Job ID",flex:1,minWidth:100,renderCell:e=>{let{row:r}=e,n=r.warningLevel;return(0,a.jsxs)(d.f,{direction:"row",alignItems:"center",gap:1,children:[n&&(0,a.jsx)(u.f,{title:"Warning! Please investigate for duplicate job or recurring issue.",children:(0,a.jsx)(c.default,{color:n,sx:{fontSize:24,mt:"-4px"}})}),(0,a.jsx)(m.f,{id:r.id,number:r.number,numberPrefix:t,numberSuffix:i,openCanvas:!0,type:r.type})]})}},{field:"description",headerName:"Description",flex:1,minWidth:140,sortable:!1,renderCell:e=>{let{row:t}=e;return t.shortJobDesc?.[0]?.taxonomy.name||"-"}},{field:"service",headerName:"Service",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return t.service?.name||"-"}},{field:"status",headerName:"Status",flex:1,minWidth:100,renderCell:e=>{let{row:t}=e;return(0,a.jsx)(p.f,{value:t.status})}},{field:"createdAt",headerName:"Date Created",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return(0,f.f)(t.createdAt)}}]},"g",0,e=>{let{numberPrefix:t,numberSuffix:i,onViewReport:r,openCanvas:n=!1}=e;return[{field:"createdAt",headerName:"Date",flex:1,minWidth:120,renderCell:e=>{let{row:t}=e;return(0,f.f)(t.createdAt)}},{field:"id",headerName:"Job ID",flex:1,minWidth:100,renderCell:e=>{let{row:r}=e;return(0,a.jsxs)(d.f,{direction:"row",alignItems:"center",gap:1,children:[r.warningLevel&&(0,a.jsx)(u.f,{title:"Warning! Please investigate for duplicate job or recurring issue.",children:(0,a.jsx)(c.default,{color:r.warningLevel,sx:{fontSize:24,mt:"-4px"}})}),(0,a.jsx)(m.f,{id:r.id,number:r.number,numberPrefix:t,numberSuffix:i,openCanvas:n,type:r.type})]})}},{field:"service",headerName:"Service",flex:1,minWidth:140,renderCell:e=>{let{row:t}=e;return t.service?.name||"-"}},{field:"report",align:"center",headerAlign:"center",headerName:"Job report",minWidth:70,sortable:!1,renderCell:e=>{let{row:t}=e;return(0,a.jsx)(u.f,{title:t.hasReport?"View job report":"No job report available",children:(0,a.jsx)("span",{children:(0,a.jsx)(s.f,{"aria-label":"View job report",color:"secondary",disabled:!t.hasReport,onClick:()=>r(t.id),children:(0,a.jsx)(l.default,{})})})})}}]}],63767)},756311,825051,e=>{var t=e.i(391398),i=e.i(122989),r=e.i(280445);let n="amount",o=[{label:"Amount",value:n},{label:"N/A",value:"n/a"}],a=(0,r.f)("div")({width:96,height:"36px",display:"flex",alignItems:"center","& .MuiFormControl-root":{width:96,minWidth:0,height:"36px",flexDirection:"row",alignItems:"center"}}),s=(0,r.f)(i.f)(e=>{let{theme:t}=e;return{width:96,height:"36px",fontSize:"14px",fontWeight:t.typography.fontWeightBold,backgroundColor:"transparent","& .MuiSelect-select.MuiInputBase-input":{padding:t.spacing(0,3,0,1),display:"flex",alignItems:"center",height:"36px",boxSizing:"border-box"},"& .MuiSelect-icon":{right:t.spacing(.5),top:"calc(50% - 12px)"}}});e.s(["f",0,e=>{let{isNa:i,onModeChange:r}=e;return(0,t.jsx)(a,{children:(0,t.jsx)(s,{hideLabel:!0,color:"secondary",variant:"standard",disableUnderline:!0,value:i?"n/a":n,onChange:e=>{r("n/a"===e.target.value)},options:[...o],inputProps:{"aria-label":"Spend threshold mode"}})})}],756311);var d=e.i(964770);let u=(0,r.f)(d.f)(e=>{let{theme:t}=e;return{"& .MuiInputBase-root.Mui-disabled":{backgroundColor:t.palette.background.paper},"& .MuiInputBase-input.Mui-disabled":{WebkitTextFillColor:t.palette.text.primary,backgroundColor:t.palette.background.paper}}});e.s(["f",0,u],825051)},850504,e=>{var t=e.i(877341),i=e.i(669839),r=e.i(851123),n=e.i(191788);e.s(["f",0,e=>{let{customerId:o,customerUserId:a,locationId:s,assetCategoryId:d,sublocationId:u}=e,[l,c]=(0,n.useState)(""),[m,p]=(0,n.useState)(""),[f,y]=(0,n.useState)(""),[g,h]=(0,n.useState)(""),[b,{data:{items:v}={items:[]},loading:_}]=(0,t.f)(r.b,{variables:{customerId:o,customerUserId:a,q:""!==l?`%${l}%`:null}}),[$]=(0,t.f)(i._),[I,{data:{items:S}={items:[]},loading:A}]=(0,t.f)(r.i,{variables:{locationId:s??0,q:""!==m?`%${m}%`:null}}),[q,{data:{items:x}={items:[]},loading:j}]=(0,t.f)(r.W,{variables:{where:{type:{_eq:"assetCategory"},isGroup:{_eq:!1},status:{_eq:"active"},name:{_ilike:""!==f?`%${f}%`:null},CategoryAssets:{locationId:{_eq:s}}}}}),[w,{data:{items:U}={items:[]},loading:C}]=(0,t.f)(r.B,{variables:{locationId:s,sublocationId:u,categoryId:d,q:""!==g?`%${g}%`:null}});return{location:{loading:_,options:v.map(e=>{let t=e.registeredAddress?.[0]?.address;return{label:`${e.label?.trim()?e.label+", ":""}${t?.addressLine1?t?.addressLine1+", ":""}${t?.city?t?.city+", ":""}`,value:e.value}}),onSearchChange:c,onOpen:()=>b()},prefetchLocation:$,sublocation:{disabled:!s,loading:A,options:S,onSearchChange:p,onOpen:()=>I()},assetCategory:{loading:j,options:x,onSearchChange:y,onOpen:()=>q()},asset:{disabled:!s||!d,loading:C,options:U,onSearchChange:h,onOpen:()=>w()}}}])},382230,e=>{e.s(["f",0,e=>{let t=new URLSearchParams;return e.parent?.id&&t.set("parentId",e.parent.id.toString()),e.customer?.id&&t.set("customerId",e.customer.id.toString()),e.customerUser?.id&&t.set("customerUserId",e.customerUser.id.toString()),e.source&&t.set("source",e.source),e.location?.id&&t.set("locationId",e.location.id.toString()),e.sublocation?.id&&t.set("sublocationId",e.sublocation.id.toString()),e.assetCategory?.id&&t.set("assetCategoryId",e.assetCategory.id.toString()),e.assets&&e.assets.forEach(e=>{e.id&&t.append("assetId",e.id.toString())}),e.access&&t.set("access",e.access),e.shortJobDescription?.id&&t.set("shortJobDescriptionId",e.shortJobDescription?.id.toString()),e.description&&t.set("description",e.description),e.reference&&t.set("reference",e.reference),e.costCategory?.id&&t.set("costCategoryId",e.costCategory?.id.toString()),e.service?.id&&t.set("serviceId",e.service?.id.toString()),e.pricing&&t.set("pricing",e.pricing),null!=e.spendThreshold&&t.set("spendThreshold",e.spendThreshold.toString()),null!=e.supplierSpendThreshold&&t.set("supplierSpendThreshold",e.supplierSpendThreshold.toString()),e.customerAmount&&t.set("customerAmount",e.customerAmount.toString()),e.supplierLabourAmount&&t.set("supplierLabourAmount",e.supplierLabourAmount.toString()),e.supplierMaterialsAmount&&t.set("supplierMaterialsAmount",e.supplierMaterialsAmount.toString()),e.sla?.id&&t.set("slaId",e.sla?.id.toString()),t}])},669839,e=>{var t=e.i(159080);let i=t.f`
  query GetLocationById($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      name
      access
      permitsRequired
      contactUser: User {
        id
        fullName
        accountUser: Account_Users {
          id
          role
          userAccountLocations: User_Account_Locations(where: { accountLocationId: { _eq: $id } }) {
            id
            accountUserId
            accountLocationId
          }
        }
      }
      accountLocations: Account_Locations {
        linkType
        account: Account {
          id
          name
          rateType: meta(path: "finance.rateType")
          serviceRateType: meta(path: "finance.serviceRateType")
          serviceRateLabour: meta(path: "finance.serviceRateLabour")
          manager: Manager {
            id
            fullName
          }
        }
      }
    }
  }
`,r=t.f`
  query GetSublocationById($id: Int!) {
    sublocation: Sublocation_by_pk(id: $id) {
      id
      name
    }
  }
`;e.s(["_",0,i,"P",0,r])},35818,e=>{var t=e.i(159080);let i=t.f`
  query GetPriorityForWorkOrder($customerId: Int!, $locationId: Int!) {
    slas: SLA(where: { status: { _eq: "active" } }, order_by: { name: asc }) {
      id
      name
      subtype
      label: name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
    }
    customerSlas: SLA_Entity(
      where: { entityId: { _eq: $customerId }, entity: { _eq: "Account" } }
    ) {
      id
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      slaId
      inUse
      entity
      entityId
    }
    locationSlas: SLA_Entity(
      where: { entityId: { _eq: $locationId }, entity: { _eq: "Location" } }
    ) {
      id
      notes
      onSite
      onSiteUnit
      quoteReturned
      quoteReturnedUnit
      jobReport
      jobReportUnit
      createdAt
      updatedAt
      slaId
      inUse
      entity
      entityId
    }
  }
`,r=t.f`
  query GetPriorityById($id: Int!, $customerId: Int!, $locationId: Int!) {
    priority: SLA_by_pk(id: $id) {
      id
      name
      subtype
      label: name
      notes
      normalRate
      oohRate
      premiumRate
      minimumInterval
      minimumLength
      quoteReturned
      quoteReturnedUnit
      onSite
      onSiteUnit
      jobReport
      jobReportUnit
      completion
      completionUnit
      status
      isDefault
      customerSlas: SLA_Entities(
        where: { entity: { _eq: "Account" }, entityId: { _eq: $customerId } }
      ) {
        id
        notes
        onSite
        onSiteUnit
        quoteReturned
        quoteReturnedUnit
        jobReport
        jobReportUnit
        createdAt
        updatedAt
        slaId
        inUse
        entity
        entityId
      }
      locationSlas: SLA_Entities(
        where: { entity: { _eq: "Location" }, entityId: { _eq: $locationId } }
      ) {
        id
        notes
        onSite
        onSiteUnit
        quoteReturned
        quoteReturnedUnit
        jobReport
        jobReportUnit
        createdAt
        updatedAt
        slaId
        inUse
        entity
        entityId
      }
    }
  }
`;e.s(["U",0,r,"o",0,i])},176278,e=>{var t=e.i(159080);let i=t.f`
  query GetTaxonomyById($id: Int!) {
    taxonomy: Taxonomy_by_pk(id: $id) {
      id
      name
      meta
    }
  }
`;e.s(["f",0,i])},48534,828892,e=>{var t=e.i(221168),i=e.i(795617),r=e.i(942446),n=e.i(199525),o=e.i(26133),a=e.i(393788);let s=["onMyWay","onMyWayResumed"],d=["onMyWayPaused","inProgress","onHold"],u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,a.W)(e,s,d)},l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return(0,a.P)(u(e),t)};e.s(["G",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return(0,o.f)(l(e,t))},"W",0,l,"M",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return null!=u(e).openStartMs},"Z",0,u],828892);var c=e.i(68881);e.i(271621);var m=e.i(569373),p=e.i(48441),f=e.i(93198),y=e.i(911383);let g={content:"Job report custom fields could not be loaded",severity:"warning"},h={content:"Some photos could not be added to the job report",severity:"warning"},b={content:"Allow pop-ups for this site to open the job report",severity:"warning"},v=()=>{if((0,f.Z)())return null;let e=window.open("/download","_blank");return e&&(e.opener=null),e},_=async e=>{let{adminId:o,job:a,showSnackbar:s}=e,d=Array.isArray(a.media)?a.media:[],u=(0,i.w)(a.location,"registered"),f=p.o.find(e=>e.value===a.report?.completion),b=[];try{b=(await (0,c.C)({surface:"job_report",workOrderId:a.id,jobReportId:a.report?.id??null})).fields.map(e=>({label:e.definition.name,value:(0,m.r)(e.value,e.definition)}))}catch{b=[],s(g)}let v={job:{assets:a.assets,assetCategory:a.assetCategory?.name??null,address:u?.address,sublocation:a.sublocation,contractor:a.supplier?.name,completedAt:"incorrect"===a.timingStatus?a.correctEnd:(0,r.f)(a,"completed"),customer:a.customer?.name,description:a.description?t.Buffer.from(a.description).toString("base64"):"",expenses:a.expenses?.map(e=>e.description),further:f?.text||null,id:a.id,notes:a.report?.notes?t.Buffer.from(a?.report?.notes).toString("base64"):"",number:a.number,raisedBy:(0,n.f)(a,"pending"),reference:a.reference,service:a.service?.name,dateStart:"incorrect"===a.timingStatus?a.correctStart:(0,r.f)(a,"inProgress"),dateEnd:"incorrect"===a.timingStatus?a.correctEnd:(0,r.f)(a,"completed"),travelTime:(e=>{if(e?.timingStatus==="incorrect")return null;let t="number"==typeof e?.travelTimeMinutes?e.travelTimeMinutes:e?.meta?.travelTimeMinutes;if("number"==typeof t&&Number.isFinite(t)&&t>0)return t;let i=Math.floor(l(e?.timings??[])/60);return i>0?i:null})(a),priority:a.sla?.name,passFailStatus:a.report?.passFailStatus,customerSignature:a.report?.meta?.customerSignatureName?{name:a.report?.meta.customerSignatureName,data:a.report?.meta.customerSignatureTime}:null,supplierSignature:a.report?.meta?.supplierSignatureName?{name:a.report?.meta.supplierSignatureName,data:a.report?.meta.supplierSignatureTime}:null,recommendations:a.report?.recommendations?t.Buffer.from(a.report?.recommendations).toString("base64"):""},jobReportId:a.report?.id??null,adminId:o,media:d.filter(e=>"image"===e.item.type&&!e.item.meta?.adminOnly).map(e=>{if(e.item?.meta?.thumbnails){let t=e.item.meta.thumbnails.find(e=>"small"===e.name);if(t)return{filename:t.relativePath}}return{filename:e.item.filename}}),customFields:b},_=await (0,y.g)("/pdf/job-report/create",v,{timeoutMs:18e4}),$=`https://cleverly-staging-media.s3.eu-west-2.amazonaws.com/${_.key}`;return(0,y.G)(_)&&s(h),{blob:_,link:$}},$=async e=>{let{downloadTab:t=null,...i}=e,r=t??v();try{let{blob:e}=await _(i);window?.Capacitor?.Plugins?.Browser?await window.Capacitor.Plugins.Browser.open({url:e.url}):r?.location?r.location.assign(e.url):(0,f.Z)()||i.showSnackbar(b)}catch(e){throw r?.close(),e}};e.s(["q",0,{content:"Error downloading job report",severity:"error"},"m",0,$,"O",0,v,"k",0,_],48534)},315560,e=>{var t=e.i(159080);let i=t.f`
  fragment JobOperativesFields on Job {
    jobOperatives: JobOperatives(order_by: { id: asc }) {
      userId
      user: User {
        id
        fullName
      }
    }
  }
`,r=t.f`
  ${i}
  query GetJobOperatives($jobId: Int!) {
    job: Job_by_pk(id: $jobId) {
      id
      supplierUserId
      supplierUser: SupplierUser {
        id
        fullName
      }
      ...JobOperativesFields
    }
  }
`;e.s(["Q",0,r,"P",0,i])},58945,e=>{let t=[],i=[],r=e=>e.supplierUserId??e.supplierUser?.id,n=e=>{if(!e?.jobOperatives?.length)return i;let t=r(e),n=e.jobOperatives.map(e=>({id:e.userId,name:e.user?.fullName})).filter(e=>e.id!==t);return n.length?n:i};e.s(["Z",0,i,"P",0,[],"v",0,"Warning: This work order has multiple engineers attached. Please adjust the finances accordingly before invoicing.","G",0,e=>e.map(e=>e.name||`User #${e.id}`).join(", "),"a",0,n,"F",0,r,"T",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n(e);return!!r(e)&&t.length>0},"K",0,(e,i,r)=>!Number.isFinite(i)||e.some(e=>e.value===i)?e:[{value:i,label:((e,i)=>{if(i.supplierUser?.id===e&&i.supplierUser.fullName)return i.supplierUser.fullName;let r=(i.jobOperatives??t).find(t=>t.userId===e);return r?.user?.fullName||`Operative #${e}`})(i,r)},...e]])},26133,e=>{var t=e.i(362537);e.s(["f",0,e=>{let i=Math.max(0,Math.floor(e)),r=t.default.duration(1e3*i),n=Math.floor(r.asHours()),o=r.minutes().toString().padStart(2,"0"),a=r.seconds().toString().padStart(2,"0");return`${n}:${o}:${a}`}])},942446,199525,e=>{e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let r=e?.timings?.find(e=>e.status===t);i=r?.createdAt||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.createdAt||null}],942446),e.s(["f",0,(e,t)=>{if(Array.isArray(t)){let i=null;return t.forEach(t=>{let r=e?.timings?.find(e=>e.status===t);i=r?.user?.fullName||i}),i}let i=e?.timings?.find(e=>e.status===t);return i?.user?.fullName||null}],199525)},695567,e=>{var t=e.i(320861);e.s(["f",0,e=>{let{subtype:i,slas:r=[],customerSlas:n=[],locationSlas:o=[]}=e;return r.filter(e=>e.subtype===i).map(e=>{let i=o?.find(t=>t.slaId===e.id&&t.inUse),r=n?.find(t=>t.slaId===e.id&&t.inUse),a=i?.notes||r?.notes,s=(0,t.H)({time:i?.onSite,unit:i?.onSiteUnit},{time:r?.onSite,unit:r?.onSiteUnit},{time:e.onSite,unit:e.onSiteUnit}),d=(0,t.H)({time:i?.jobReport,unit:i?.jobReportUnit},{time:r?.jobReport,unit:r?.jobReportUnit},{time:e.jobReport,unit:e.jobReportUnit}),u=(0,t.H)({time:i?.quoteReturned,unit:i?.quoteReturnedUnit},{time:r?.quoteReturned,unit:r?.quoteReturnedUnit},{time:e.quoteReturned,unit:e.quoteReturnedUnit});return{id:e.id,label:e.label,value:e.id,notes:a||e.notes,onSite:s.time,onSiteUnit:s.unit,jobReport:d.time,jobReportUnit:d.unit,quoteReturned:u.time,quoteReturnedUnit:u.unit,disabled:!!(o?.find(t=>t.slaId===e.id&&!t.inUse)||n?.find(t=>t.slaId===e.id&&!t.inUse))}})}])},393788,e=>{var t=e.i(362537);let i=(e,i)=>{let r=(0,t.default)(e.createdAt).diff((0,t.default)(i.createdAt));if(0!==r)return r;if(null==e.id||null==i.id)return 0;let n=Number(e.id),o=Number(i.id);return Number.isFinite(n)&&Number.isFinite(o)&&n!==o?n-o:String(e.id).localeCompare(String(i.id))},r=(e,i)=>{let r=(0,t.default)(i).diff((0,t.default)(e),"seconds");return Number.isFinite(r)?{startDate:(0,t.default)(e).toISOString(),endDate:(0,t.default)(i).toISOString(),durationSeconds:Math.max(0,r)}:null};e.s(["s",0,i,"P",0,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return null==e.openStartMs?e.closedSeconds:e.closedSeconds+Math.max(0,Math.floor((t-e.openStartMs)/1e3))},"W",0,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,s=[...e].sort(i),d=s;if(a?.requireStartStatus){let e=s.findIndex(e=>e.status===a.requireStartStatus);if(-1===e)return{closedSeconds:0,openStartMs:null,closedIntervals:[]};let t=s.length-1;if(a.clipEndStatus){let i=s.findIndex((t,i)=>i>=e&&t.status===a.clipEndStatus);-1!==i&&(t=i)}d=s.slice(e,t+1)}let u=null,l=0,c=[];for(let e of d){if(n.includes(e.status)&&e.createdAt){u=e.createdAt;continue}if(o.includes(e.status)&&u&&e.createdAt){let t=r(u,e.createdAt);t&&(l+=t.durationSeconds,c.push(t)),u=null}}let m=u?(0,t.default)(u).valueOf():null;return{closedSeconds:l,openStartMs:Number.isFinite(m)?m:null,closedIntervals:c}}])},131750,677497,e=>{var t=e.i(391398),i=e.i(755548),r=e.i(382161),n=e.i(77052),o=e.i(185758),a=e.i(540158),s=e.i(556918);e.s(["f",0,e=>{let{open:d,formName:u,onClose:l,onConfirm:c,loading:m=!1}=e;return(0,t.jsxs)(r.f,{open:d,onClose:m?void 0:l,children:[(0,t.jsx)(s.f,{children:"Remove custom form"}),(0,t.jsx)(o.f,{children:(0,t.jsxs)(a.f,{children:['Remove "',u,'" from this work order? Any saved answers and uploaded files for this form will be permanently deleted. This cannot be undone.']})}),(0,t.jsxs)(n.f,{children:[(0,t.jsx)(i.f,{color:"secondary",variant:"outlined",onClick:l,disabled:m,children:"Cancel"}),(0,t.jsx)(i.f,{color:"danger",variant:"contained",onClick:c,disabled:m,children:"Remove"})]})]})}],131750),e.s(["f",0,(e,t)=>{e&&(e.description&&t.description?.(e.description),e.tags&&t.tags?.(e.tags),e.costCategorySelected&&t.costCategory?.({label:e.costCategorySelected.label,value:e.costCategorySelected.value}),e.serviceSelected&&t.service?.({label:e.serviceSelected.label,value:e.serviceSelected.value}),e.amount&&(t.pricing?.("fixed"),t.customerAmount?.(e.amount)),e.supplierMaterialsAmount&&(t.pricing?.("fixed"),t.supplierMaterialsAmount?.(e.supplierMaterialsAmount)),e.supplierLabourAmount&&(t.pricing?.("fixed"),t.supplierLabourAmount?.(e.supplierLabourAmount)))}],677497)},618606,e=>{var t=e.i(191788),i=e.i(432171),r=e.i(441625);e.s(["f",0,function(){let{mapForm:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[n,o]=(0,t.useState)(""),{data:a,loading:s}=(0,i.t)(r.W,{variables:{q:n.trim()?`%${n.trim()}%`:null,limit:50}}),d=(0,t.useCallback)(e=>{o(e)},[]);return{activeForms:(0,t.useMemo)(()=>[...a?.Form??[]].map(t=>({...t,value:t.id,label:t.name??"",...e?.(t)})).sort((e,t)=>e.label.localeCompare(t.label,void 0,{sensitivity:"base"})),[a?.Form,e]),formsLoading:s,onSearchChange:d}}])},832323,e=>{e.s(["f",0,e=>"submitted"===e||"submittedBySupplier"===e])},234383,e=>{var t=e.i(159080);let i=t.f`
  query GetQuotation($id: Int!) {
    quotation: SupplierQuote_by_pk(id: $id) {
      id
      createdAt
      jobId
      methodStatement
      notes
      quoteNumber
      startDate
      rebate
      status
      totalDuration
      totalDurationUnit
      durationPrefix
      noticePeriod
      noticePeriodUnit
      meta
      updatedAt
      siteVisitAt
      job: Job {
        id
        status
        type
        customer: Customer {
          id
          meta
        }
        timings: JobTimings(order_by: { id: desc }) {
          id
          status
          notes
          meta
          userId
          quoteId
          createdAt
        }
      }
      lineItems: SupplierQuoteLineItems {
        id
        description
        item
        qty
        qtyUnit
        quoteId
        supplierTotal
        customerTotal
        type
        unitRate
        customerUnitRate
      }
      supplier: Supplier {
        id
        companyNumber
        createdAt
        name
        status
        type
        updatedAt
        website
        clientType
        managerId
        vatId
        meta
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
        manager: Manager {
          id
          fullName
        }
      }
    }
  }
`,r=t.f`
  query GetQuoteNumber($id: Int!) {
    quote: SupplierQuote_by_pk(id: $id) {
      id
      quoteNumber
    }
  }
`;e.s(["w",0,i,"m",0,r])},984933,e=>{var t=e.i(877341),i=e.i(851123),r=e.i(191788);e.s(["f",0,()=>{let[e,n]=(0,r.useState)(""),[o,{data:{items:a}={items:[]},loading:s}]=(0,t.f)(i.d,{variables:{q:""!==e?`%${e}%`:null}});return{loading:s,options:a,onSearchChange:n,onOpen:()=>o()}}])},320861,e=>{let t=["minutes","hours","days"],i=e=>e?"n/a"===e.unit?{time:null,unit:"n/a"}:null!=e.time||e.unit?{time:e.time??null,unit:e.unit??null}:null:null;e.s(["b",0,t,"F",0,"n/a","u",0,(e,t)=>"n/a"===t?"N/A":null!=e&&t?`${e} ${t}`:"-","p",0,e=>t.some(t=>t===e),"L",0,e=>"n/a"===e,"r",0,(e,t)=>"n/a"===t?{time:null,unit:"n/a"}:{time:e??null,unit:t??null},"H",0,(e,t,r)=>i(e)??i(t)??i(r)??{time:null,unit:null},"c",0,[{label:"Minutes",value:"minutes"},{label:"Hours",value:"hours"},{label:"Days",value:"days"},{label:"N/A",value:"n/a"}]])},667808,e=>{var t=e.i(877341),i=e.i(851123),r=e.i(191788);e.s(["f",0,()=>{let[e,n]=(0,r.useState)(""),[o,{data:{items:a}={items:[]},loading:s}]=(0,t.f)(i.D,{variables:{q:""!==e?`%${e}%`:null}});return{loading:s,options:a,onSearchChange:n,onOpen:()=>o()}}])},858564,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),o=e.r(391398);i.default=(0,n.default)([(0,o.jsx)("path",{d:"M5 5h2v3h10V5h2v5h2V5c0-1.1-.9-2-2-2h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v-2H5zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1"},"0"),(0,o.jsx)("path",{d:"M20.3 18.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S12 14 12 16.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.7 2.7 1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5"},"1")],"ContentPasteSearchOutlined")},144097,(e,t,i)=>{var r=e.r(978509);Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=r(e.r(421506)),o=e.r(391398);i.default=(0,n.default)((0,o.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"}),"Info")},262999,e=>{var t=e.i(936641);e.s(["f",()=>t.f])},220490,e=>{var t=e.i(75907),i=e.i(460997),r=e.i(191788),n=e.i(889878),o=e.i(600961),a=e.i(396851),s=e.i(395724),d=e.i(88152),u=e.i(713149),l=e.i(46739);function c(e){return(0,l.f)("MuiCard",e)}(0,u.f)("MuiCard",["root"]);var m=e.i(391398);let p=["className","raised"],f=(0,a.f)(d.f,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),y=r.forwardRef(function(e,r){let a=(0,s.f)({props:e,name:"MuiCard"}),{className:d,raised:u=!1}=a,l=(0,i.f)(a,p),y=(0,t.f)({},a,{raised:u}),g=(e=>{let{classes:t}=e;return(0,o.f)({root:["root"]},c,t)})(y);return(0,m.jsx)(f,(0,t.f)({className:(0,n.f)(g.root,d),elevation:u?8:void 0,ref:r,ownerState:y},l))});e.s(["f",0,y],220490)},101934,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),n=e.i(889878),o=e.i(600961),a=e.i(396851),s=e.i(395724),d=e.i(713149),u=e.i(46739);function l(e){return(0,u.f)("MuiCardActions",e)}(0,d.f)("MuiCardActions",["root","spacing"]);var c=e.i(391398);let m=["disableSpacing","className"],p=(0,a.f)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:i}=e;return[t.root,!i.disableSpacing&&t.spacing]}})(e=>{let{ownerState:t}=e;return(0,i.f)({display:"flex",alignItems:"center",padding:8},!t.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})}),f=r.forwardRef(function(e,r){let a=(0,s.f)({props:e,name:"MuiCardActions"}),{disableSpacing:d=!1,className:u}=a,f=(0,t.f)(a,m),y=(0,i.f)({},a,{disableSpacing:d}),g=(e=>{let{classes:t,disableSpacing:i}=e;return(0,o.f)({root:["root",!i&&"spacing"]},l,t)})(y);return(0,c.jsx)(p,(0,i.f)({className:(0,n.f)(g.root,u),ownerState:y,ref:r},f))});e.s(["f",0,f],101934)},106850,e=>{var t=e.i(75907),i=e.i(460997),r=e.i(191788),n=e.i(889878),o=e.i(600961),a=e.i(396851),s=e.i(395724),d=e.i(713149),u=e.i(46739);function l(e){return(0,u.f)("MuiCardContent",e)}(0,d.f)("MuiCardContent",["root"]);var c=e.i(391398);let m=["className","component"],p=(0,a.f)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=r.forwardRef(function(e,r){let a=(0,s.f)({props:e,name:"MuiCardContent"}),{className:d,component:u="div"}=a,f=(0,i.f)(a,m),y=(0,t.f)({},a,{component:u}),g=(e=>{let{classes:t}=e;return(0,o.f)({root:["root"]},l,t)})(y);return(0,c.jsx)(p,(0,t.f)({as:u,className:(0,n.f)(g.root,d),ownerState:y,ref:r},f))});e.s(["f",0,f],106850)},849091,e=>{var t=e.i(799083);e.s(["f",()=>t.f])},540158,e=>{var t=e.i(460997),i=e.i(75907),r=e.i(191788),n=e.i(889878),o=e.i(600961),a=e.i(396851),s=e.i(896994),d=e.i(395724),u=e.i(115871),l=e.i(713149),c=e.i(46739);function m(e){return(0,c.f)("MuiDialogContentText",e)}(0,l.f)("MuiDialogContentText",["root"]);var p=e.i(391398);let f=["children","className"],y=(0,a.f)(u.f,{shouldForwardProp:e=>(0,s.f)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),g=r.forwardRef(function(e,r){let a=(0,d.f)({props:e,name:"MuiDialogContentText"}),{className:s}=a,u=(0,t.f)(a,f),l=(e=>{let{classes:t}=e,r=(0,o.f)({root:["root"]},m,t);return(0,i.f)({},t,r)})(u);return(0,p.jsx)(y,(0,i.f)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:u,className:(0,n.f)(l.root,s)},a,{classes:l}))});e.s(["f",0,g],540158)},717803,e=>{var t=e.i(986351);e.s(["f",()=>t.f])},589200,e=>{var t=e.i(668921);e.s(["f",()=>t.f])},345837,e=>{var t=e.i(152078);e.s(["f",()=>t.f])},405167,e=>{var t=e.i(471973);e.s(["f",()=>t.f])},774872,e=>{var t=e.i(740790);e.s(["f",()=>t.f])},405765,491171,e=>{var t=e.i(530252);e.s(["f",()=>t.f],405765);var i=e.i(984636);e.s(["f",()=>i.f],491171)},799306,e=>{e.s(["f",0,function(e){if(null===e||!0===e||!1===e)return 0/0;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}])},615198,e=>{var t=e.i(486066);e.s(["f",()=>t.f])},925527,389849,e=>{var t=e.i(623886),i=e.i(699213);e.s(["f",0,function(e){(0,i.f)(1,arguments);var r=(0,t.f)(e);return r.setHours(23,59,59,999),r}],925527);var r=e.i(926638),n=e.i(799306),o=/[T ]/,a=/[Z ]/i,s=/([Z+-].*)$/,d=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,u=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,l=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e){return e?parseInt(e):1}function m(e){return e&&parseFloat(e.replace(",","."))||0}var p=[31,null,31,30,31,30,31,31,30,31,30,31];function f(e){return e%400==0||e%4==0&&e%100!=0}e.s(["f",0,function(e,t){(0,i.f)(1,arguments);var y,g,h,b=(0,n.f)(null!=(y=null==t?void 0:t.additionalDigits)?y:2);if(2!==b&&1!==b&&0!==b)throw RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(0/0);var v=function(e){var t,i={},r=e.split(o);if(r.length>2)return i;if(/:/.test(r[0])?t=r[0]:(i.date=r[0],t=r[1],a.test(i.date)&&(i.date=e.split(a)[0],t=e.substr(i.date.length,e.length))),t){var n=s.exec(t);n?(i.time=t.replace(n[1],""),i.timezone=n[1]):i.time=t}return i}(e);if(v.date){var _=function(e,t){var i=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(i);if(!r)return{year:0/0,restDateString:""};var n=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?n:100*o,restDateString:e.slice((r[1]||r[2]).length)}}(v.date,b);g=function(e,t){if(null===t)return new Date(0/0);var i,r,n,o,a,s,u,l,m,y,g,h,b=e.match(d);if(!b)return new Date(0/0);var v=!!b[4],_=c(b[1]),$=c(b[2])-1,I=c(b[3]),S=c(b[4]),A=c(b[5])-1;if(v){return(i=S,r=A,i>=1&&i<=53&&r>=0&&r<=6)?(n=t,o=S,a=A,(s=new Date(0)).setUTCFullYear(n,0,4),u=s.getUTCDay()||7,s.setUTCDate(s.getUTCDate()+((o-1)*7+a+1-u)),s):new Date(0/0)}var q=new Date(0);return(l=t,m=$,y=I,m>=0&&m<=11&&y>=1&&y<=(p[m]||(f(l)?29:28))&&(g=t,(h=_)>=1&&h<=(f(g)?366:365)))?(q.setUTCFullYear(t,$,Math.max(_,I)),q):new Date(0/0)}(_.restDateString,_.year)}if(!g||isNaN(g.getTime()))return new Date(0/0);var $=g.getTime(),I=0;if(v.time&&isNaN(I=function(e){var t,i,n,o=e.match(u);if(!o)return 0/0;var a=m(o[1]),s=m(o[2]),d=m(o[3]);return(t=a,i=s,n=d,24===t?0===i&&0===n:n>=0&&n<60&&i>=0&&i<60&&t>=0&&t<25)?a*r.r+s*r.z+1e3*d:0/0}(v.time)))return new Date(0/0);if(v.timezone){if(isNaN(h=function(e){if("Z"===e)return 0;var t,i=e.match(l);if(!i)return 0;var n="+"===i[1]?-1:1,o=parseInt(i[2]),a=i[3]&&parseInt(i[3])||0;return(t=a)>=0&&t<=59?n*(o*r.r+a*r.z):0/0}(v.timezone)))return new Date(0/0)}else{var S=new Date($+I),A=new Date(0);return A.setFullYear(S.getUTCFullYear(),S.getUTCMonth(),S.getUTCDate()),A.setHours(S.getUTCHours(),S.getUTCMinutes(),S.getUTCSeconds(),S.getUTCMilliseconds()),A}return new Date($+I+h)}],389849)}])})();