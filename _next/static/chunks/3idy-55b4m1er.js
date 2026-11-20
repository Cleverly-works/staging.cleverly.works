(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[450340,e=>{var t=e.i(159080);let r=t.f`
  query GetPostcodeAreas(
    $countryId: Int
    $limit: Int
    $offset: Int
    $q: String
    $order: [PostcodeArea_order_by!]
  ) {
    postcodeAreas: PostcodeArea(
      limit: $limit
      offset: $offset
      where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }
      order_by: $order
    ) {
      id
      area
      name
      status
      country: Country {
        id
        name
        code
      }
    }
    meta: PostcodeArea_aggregate(where: { countryId: { _eq: $countryId }, name: { _ilike: $q } }) {
      aggregate {
        totalCount: count
      }
    }
  }
`,o=t.f`
  query GetPostcodeArea($id: Int!) {
    postcodeArea: PostcodeArea_by_pk(id: $id) {
      id
      area
      name
      status
      country: Country {
        id
        name
        code
      }
    }
  }
`,a=t.f`
  mutation InsertPostCodeArea($objects: [PostcodeArea_Entity_insert_input!]!) {
    insert_PostcodeArea_Entity(
      objects: $objects
      on_conflict: {
        constraint: PostcodeArea_Entity_postcodeAreaId_entityId_entity_key
        update_columns: status
      }
    ) {
      returning {
        id
        status
      }
    }
  }
`,s=t.f`
  mutation UpdateEntityAssign($id: Int!, $changes: PostcodeArea_Entity_set_input) {
    update_PostcodeArea_Entity_by_pk(pk_columns: { id: $id }, _set: $changes) {
      id
      status
    }
  }
`;e.s(["G",0,o,"y",0,r,"R",0,a,"Z",0,s])},716121,(e,t,r)=>{var o=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=o(e.r(421506)),s=e.r(391398);r.default=(0,a.default)((0,s.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack")},253747,e=>{var t=e.i(391398),r=e.i(203828),o=e.i(432171),a=e.i(716121),s=e.i(738251),i=e.i(755548),n=e.i(76381),d=e.i(986351),c=e.i(88152),u=e.i(813843),l=e.i(115871),y=e.i(450340),_=e.i(21557);let f=e=>{let{id:f}=e,p=(0,r.useRouter)(),h=(0,_.f)(),{data:{postcodeArea:m}={postcodeArea:null},loading:x}=(0,o.t)(y.G,{variables:{id:f},skip:!f,onError:()=>{h.show({content:"Failed to load coverage area.",severity:"error"})}}),v=m?[{key:"Postcode",value:m.area},{key:"Area",value:m.name},{key:"Country",value:m.country?.name??"-"},{key:"Status",value:m.status?m.status.charAt(0).toUpperCase()+m.status.slice(1):"-"}]:[];return(0,t.jsxs)(s.f,{sx:{flex:1,overflow:"auto",p:2,marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 210px)"},transition:"margin-left 0.5s ease"},children:[(0,t.jsxs)(s.f,{sx:{mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,t.jsx)(i.f,{startIcon:(0,t.jsx)(a.default,{}),color:"secondary",onClick:()=>p.push("/dashboard/coverage"),sx:{mb:1},children:"Coverage areas"}),(0,t.jsx)(l.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600},children:m?`${m.area} — ${m.name}`:"Coverage area"})]}),x&&(0,t.jsx)(u.f,{alignItems:"center",py:6,children:(0,t.jsx)(n.f,{color:"secondary",size:28})}),!x&&m&&(0,t.jsxs)(c.f,{sx:{p:3,maxWidth:520},children:[(0,t.jsx)(l.f,{variant:"h6",sx:{mb:2},children:"Area"}),(0,t.jsx)(u.f,{divider:(0,t.jsx)(d.f,{}),spacing:1.5,children:v.map(e=>(0,t.jsxs)(u.f,{direction:"row",justifyContent:"space-between",spacing:2,children:[(0,t.jsx)(l.f,{variant:"subtitle2",color:"text.secondary",children:e.key}),(0,t.jsx)(l.f,{children:e.value})]},e.key))})]})]})};var p=e.i(293965);let h=()=>{let{query:e}=(0,r.useRouter)(),o=Number(e.id);return(0,t.jsx)(f,{id:Number.isNaN(o)?void 0:o})};h.getLayout=e=>(0,t.jsx)(p.f,{children:e}),e.s(["default",0,h],253747)}],100259,(e,t,r)=>{let o="/dashboard/coverage/view";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(253747)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})}]);