(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[694508,2261,e=>{var a,t,i=((a={}).WEEKLY="Weekly",a.MONTHLY="Monthly",a.QUARTERLY="Quarterly",a.EVERY_SIX_MONTH="6 monthly",a.ANNUALLY="Annually",a.EVERY_THREE_YEARS="Every 3 years",a.EVERY_FIVE_YEARS="Every 5 years",a.EVERY_TEN_YEARS="Every 10 years",a),n=((t={}).ACTIVE="active",t.INACTIVE="inactive",t);e.s(["D",()=>i,"N",()=>n],2261);let r=[{label:"Active",value:n.ACTIVE},{label:"Inactive",value:n.INACTIVE}],l=[{label:i.WEEKLY,value:i.WEEKLY},{label:i.MONTHLY,value:i.MONTHLY},{label:i.QUARTERLY,value:i.QUARTERLY},{label:i.EVERY_SIX_MONTH,value:i.EVERY_SIX_MONTH},{label:i.ANNUALLY,value:i.ANNUALLY},{label:i.EVERY_THREE_YEARS,value:i.EVERY_THREE_YEARS},{label:i.EVERY_FIVE_YEARS,value:i.EVERY_FIVE_YEARS},{label:i.EVERY_TEN_YEARS,value:i.EVERY_TEN_YEARS}];e.s(["X",0,l,"d",0,{active:"success",inactive:"danger"},"G",0,r],694508)},690374,e=>{let a=(e,a)=>{let t=document.createElement("a");"string"==typeof t.download?(document.body.appendChild(t),t.download=a,t.href=e,t.click(),document.body.removeChild(t)):location.replace(e)};e.s(["h",0,(e,t)=>{let i=URL.createObjectURL(e);try{a(i,t)}finally{window.setTimeout(()=>URL.revokeObjectURL(i),1e3)}},"f",0,a])},49408,400171,e=>{var a=e.i(362537);e.s(["f",0,(e,t)=>{let i=(0,a.default)(),n=(0,a.default)(e);switch(t){case"Weekly":if(i.isAfter(n))return"warning";if(i.isAfter(n.clone().subtract(2,"days")))return"warning";if(i.isAfter(n.clone().subtract(4,"days")))return"info";return"success";case"Monthly":if(i.isAfter(n))return"warning";if(i.isAfter(n.clone().subtract(5,"days")))return"warning";if(i.isAfter(n.clone().subtract(10,"days")))return"info";return"success";case"Quarterly":case"6 monthly":case"Annually":case"Every 3 years":case"Every 5 years":case"Every 10 years":if(i.isAfter(n))return"warning";if(i.isAfter(n.clone().subtract(5,"days")))return"warning";if(i.isAfter(n.clone().subtract(30,"days")))return"info";return"success";default:throw Error("Unsupported frequency")}}],49408);var t=e.i(159080);let i=t.f`
  query GetCompliance($id: Int!) {
    compliance: Compliance_by_pk(id: $id) {
      id
      name
      registeredNumber
      repeat
      status
      expiryDate

      location: Location {
        id
        name
      }
      sublocation: Sublocation {
        id
        name
      }
      assetCategory: AssetCategory {
        id
        name
      }
      complianceCategory: ComplianceCategory {
        id
        name
      }
      parentCompliance: ParentCompliance {
        id
        name
      }
      assets: Assets(where: { entity: { _eq: "Compliance" } }) {
        id
        entity
        entityId
        assetId
        asset: Asset {
          id
          name
        }
      }
    }
  }
`;t.f`
  query GetComplianceFromSettings($id: Int!) {
    compliance: Compliance_by_pk(id: $id) {
      id
      name
      status

      complianceCategory: ComplianceCategory {
        id
        name
      }
    }
  }
`;let n=t.f`
  mutation ComplianceMediaAttached($id: Int!) {
    complianceMediaAttached(id: $id) {
      message
    }
  }
`;e.s(["Z",0,n,"s",0,i],400171)},290516,e=>{var a=e.i(159080);let t=a.f`
  mutation CreateCompliance($data: jsonb!) {
    createCompliance(data: $data) {
      id
      message
    }
  }
`,i=a.f`
  mutation UpdateCompliance($data: jsonb!) {
    updateCompliance(data: $data) {
      message
    }
  }
`;e.s(["R",0,t,"m",0,i])},417758,e=>{var a=e.i(391398),t=e.i(293965),i=e.i(813843),n=e.i(370569),r=e.i(594301);let l=()=>{let{user:e}=(0,r.f)();return(0,a.jsx)(i.f,{children:(0,a.jsx)(n.f,{linkToCompliance:!0,viewOnly:!0,adminId:e.adminId,showFiltersInTable:!1,hideFilters:{status:!0,hideExpiredCompliance:!0}})})},s=()=>(0,a.jsx)(l,{});s.getLayout=function(e){return(0,a.jsx)(t.f,{children:e})},e.s(["default",0,s],417758)}],668121,(e,a,t)=>{let i="/dashboard/compliances";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(417758)]),a.hot&&a.hot.dispose(function(){window.__NEXT_P.push([i])})}]);