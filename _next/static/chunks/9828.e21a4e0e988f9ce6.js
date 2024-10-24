"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9828],{2162:function(n,e,t){t.r(e);var i=t(85893),o=t(88462),r=t(18586),a=t(2845),s=function(){var n=(0,r.q)().hasUserModule,e=(0,(0,a.x)().hasRole)("customer_user"),t=n("quotes"),s=["reactive","ppm","cppm"];return(!e||t)&&s.push("quote"),(0,i.jsx)(o.e,{defaultFilters:s,filterDisabled:{quote:e&&!t}})};e.default=s},85488:function(n,e,t){t.d(e,{H_:function(){return _},Vw:function(){return h},aL:function(){return b},pf:function(){return f},sW:function(){return v},wd:function(){return g},xY:function(){return I},yT:function(){return y}});var i=t(7297),o=t(75063),r=t(66312);function a(){var n=(0,i.Z)(["\n  fragment JobFields on Job {\n    access\n    issueReportedDescription\n    adminId\n    costCategory\n    createdAt\n    description\n    id\n    meta\n    pricing\n    reference\n    scheduledAt\n    status\n    supplierLabourAmount\n    supplierMaterialsAmount\n    timing\n    timingEnd\n    timingNormalHours\n    timingStart\n    title\n    type\n    siteVisitStart\n    siteVisitEnd\n    siteVisitWeekends\n    amount\n    number\n    quoted\n    timingStatus\n    correctDuration\n    correctStart\n    correctEnd\n  }\n"]);return a=function(){return n},n}function s(){var n=(0,i.Z)(["\n  fragment JobQuoteFields on Job {\n    quoted\n    quoteNumber\n    quoteDue\n    quoteDueSupplier\n    quoteCharge\n  }\n"]);return s=function(){return n},n}function u(){var n=(0,i.Z)(["\n  fragment JobAdminFields on Job {\n    supplierId\n    supplierUserId\n  }\n"]);return u=function(){return n},n}function m(){var n=(0,i.Z)(["\n  fragment JobSupplierFields on Job {\n    supplierId\n    supplierUserId\n  }\n"]);return m=function(){return n},n}function d(){var n=(0,i.Z)(["\n  mutation UpdateJob(\n    $id: Int!\n    $changes: Job_set_input\n    $timing: [JobTiming_insert_input!]!\n    $_append: Job_append_input = {}\n  ) {\n    update_Job_by_pk(pk_columns: { id: $id }, _set: $changes, _append: $_append) {\n      id\n    }\n    insert_JobTiming(objects: $timing) {\n      returning {\n        id\n        status\n        createdAt\n      }\n    }\n  }\n"]);return d=function(){return n},n}function c(){var n=(0,i.Z)(["\n  mutation InsertJobTiming($timing: [JobTiming_insert_input!]!) {\n    insert_JobTiming(objects: $timing) {\n      returning {\n        id\n        status\n        createdAt\n      }\n    }\n  }\n"]);return c=function(){return n},n}function p(){var n=(0,i.Z)(['\n  query GetJobHistory(\n    $jobId: Int\n    $locationId: Int!\n    $limit: Int\n    $offset: Int\n    $serviceId: Int\n    $startDate: timestamptz!\n  ) {\n    jobs: Job(\n      limit: $limit\n      offset: $offset\n      order_by: { createdAt: desc }\n      where: {\n        createdAt: { _gte: $startDate }\n        id: { _neq: $jobId }\n        locationId: { _eq: $locationId }\n        serviceId: { _eq: $serviceId }\n        status: { _nin: ["pending", "raised", "offered", "accepted", "inProgress"] }\n      }\n    ) {\n      id\n      title\n      status\n      scheduledAt\n      createdAt\n      meta\n      service: Service {\n        id\n        name\n      }\n      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n        }\n      }\n    }\n    meta: Job_aggregate(\n      where: {\n        createdAt: { _gte: $startDate }\n        id: { _neq: $jobId }\n        locationId: { _eq: $locationId }\n        serviceId: { _eq: $serviceId }\n        status: { _nin: ["pending", "raised", "offered", "accepted", "inProgress"] }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return p=function(){return n},n}function l(){var n=(0,i.Z)(['\n  query GetJob($jobId: Int!) {\n    job: Job_by_pk(id: $jobId) {\n      access\n      costCategory\n      customerSpendThreshold\n      description\n      supplierLabourAmount\n      supplierMaterialsAmount\n      quoteDue\n      quoteNumber\n      id\n      number\n      meta\n      paymentMethod\n      reference\n      status\n      title\n      type\n      quoted\n      invoices: Invoices(order_by: { createdAt: desc }) {\n        id\n        invoiceNumber\n      }\n      quotations: SupplierQuotes {\n        id\n        quoteNumber\n        status\n        lineItems: SupplierQuoteLineItems {\n          id\n          description\n          item\n          qty\n          qtyUnit\n          quoteId\n          total\n          type\n          unitRate\n          supplierTotal\n        }\n        supplier: Supplier {\n          id\n          type\n          name\n          accountUsers: Account_Users {\n            user: User {\n              id\n              fullName\n              nameFirst\n              nameLast\n              phone\n              email\n              devices: UserDevices(where: { status: { _eq: "active" } }) {\n                id\n                playerId\n              }\n            }\n          }\n        }\n      }\n      admin: Admin {\n        id\n        name\n      }\n      service: Service {\n        id\n        name\n      }\n      manager: Manager {\n        id\n        nameFirst\n        nameLast\n      }\n      customer: Customer {\n        id\n        name\n        website\n        slas: SLAs(where: { entity: { _eq: "Account" } }) {\n          id\n          entity\n          entityId\n          onSite\n          onSiteUnit\n          jobReport\n          jobReportUnit\n          completion\n          completionUnit\n          notes\n          inUse\n          normalRate\n          oohRate\n          premiumRate\n          minimumInterval\n          minimumLength\n          slaId\n          sla: SLA {\n            id\n            name\n            notes\n            normalRate\n            oohRate\n            premiumRate\n            onSite\n            onSiteUnit\n            jobReport\n            jobReportUnit\n            completion\n            completionUnit\n            minimumInterval\n            minimumLength\n          }\n        }\n      }\n      customerUser: CustomerUser {\n        id\n        nameFirst\n        nameLast\n        fullName\n        email\n        phone\n      }\n      supplier: Supplier {\n        id\n        name\n        contactUsers: Account_Users(where: { isContact: { _eq: true } }) {\n          id\n          role\n          position\n          isContact\n          lastSignInAt\n          userId\n          user: User {\n            id\n            fullName\n            nameFirst\n            nameLast\n            email\n            phone\n          }\n        }\n      }\n      supplierUser: SupplierUser {\n        id\n        fullName\n        nameFirst\n        nameLast\n        email\n        phone\n      }\n      location: Location {\n        id\n        name\n        addresses: Addresses(where: { entity: { _eq: "Location" } }) {\n          ...AddressEntityFields\n          address: Address {\n            ...AddressFields\n            country: Country {\n              id\n              name\n            }\n          }\n        }\n        slas: SLAs(where: { entity: { _eq: "Location" } }) {\n          id\n          entity\n          entityId\n          onSite\n          onSiteUnit\n          jobReport\n          jobReportUnit\n          completion\n          completionUnit\n          notes\n          inUse\n          normalRate\n          oohRate\n          premiumRate\n          minimumInterval\n          minimumLength\n          slaId\n          sla: SLA {\n            id\n            name\n            notes\n            normalRate\n            oohRate\n            premiumRate\n            onSite\n            onSiteUnit\n            jobReport\n            jobReportUnit\n            completion\n            completionUnit\n            minimumInterval\n            minimumLength\n          }\n        }\n      }\n      sla: SLA {\n        id\n        name\n        notes\n        normalRate\n        oohRate\n        premiumRate\n        onSite\n        onSiteUnit\n        jobReport\n        jobReportUnit\n        completion\n        completionUnit\n        minimumInterval\n        minimumLength\n      }\n      costCategoryTaxonomy: CostCategory {\n        id\n        name\n      }\n      shortJobDesc: Taxonomy(where: { Taxonomy: { type: { _eq: "jobTags" } } }) {\n        id\n        taxonomyId\n        comments\n        taxonomy: Taxonomy {\n          name\n        }\n      }\n    }\n  }\n  ',"\n  ","\n"]);return l=function(){return n},n}var b=(0,o.Ps)(a()),f=(0,o.Ps)(s()),g=(0,o.Ps)(u()),_=(0,o.Ps)(m()),I=(0,o.Ps)(d()),y=(0,o.Ps)(c()),v=(0,o.Ps)(p()),h=(0,o.Ps)(l(),r.WW,r.MR)},97768:function(n,e,t){t.d(e,{x:function(){return i}});var i=[{text:"Reactive",value:"reactive",context:"#2EE6CA"},{text:"Planned Maintenance",value:"ppm",context:"#D67EFF"},{text:"Quote",value:"quote",context:"#7D7"},{text:"Compliance",value:"cppm",context:"#CC7429"}]}}]);