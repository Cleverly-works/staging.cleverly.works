(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[558091,e=>{var t=e.i(391398),r=e.i(821627),n=e.i(477882),o=e.i(886779),i=e.i(280445),a=e.i(356119);let s=(0,i.f)(n.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100vw",maxWidth:"600px",maxHeight:"100vh",padding:"16px",borderRadius:"8px",overflow:"auto"}));e.s(["f",0,e=>{let{onCancel:n,onConfirm:i,title:l="Unsaved changes",body:d="Leaving this page means you will lose any updates you've made.",cancelLabel:u="Cancel",confirmLabel:c="Confirm"}=e;return(0,t.jsxs)(s,{children:[(0,t.jsx)(a.f,{variant:"h6",sx:{padding:"0 0 16px 0"},children:l}),(0,t.jsx)(o.f,{children:(0,t.jsx)(a.f,{sx:{textAlign:"left"},children:d})}),(0,t.jsxs)(o.f,{direction:"row",spacing:2,justifyContent:"flex-end",sx:{padding:"16px 0 16px 24px"},children:[(0,t.jsx)(r.f,{onClick:n,color:"danger",variant:"contained",children:u}),(0,t.jsx)(r.f,{onClick:i,color:"secondary",variant:"contained",children:c})]})]})}])},454684,e=>{var t=e.i(191788),r=e.i(203828);e.i(443645);var n=e.i(648116),o=e.i(558091);let i=e=>"object"==typeof e&&null!==e;e.s(["f",0,e=>{let a=(0,r.useRouter)(),[s,l]=(0,n.f)(),d=(0,t.useRef)(i(e)?e.current:e),u=(0,t.useRef)(!1),c=(0,t.useRef)("");return(0,t.useEffect)(()=>{i(e)||(d.current=e)},[e]),(0,t.useEffect)(()=>{let r=t=>{if(!(i(e)?e.current:d.current)||u.current){u.current=!1;return}throw c.current=t,window.location.pathname+window.location.search!==a.asPath.split("#")[0]&&window.history.pushState(null,"",a.asPath),a.events.emit("routeChangeError",Error("Route change aborted by user")),"Route change aborted by user"},n=e=>{if(e instanceof Error&&"Route change aborted by user"===e.message)l({content:e=>{let{onClose:r}=e;return t.createElement(o.f,{onCancel:()=>r(),onConfirm:()=>{r(),u.current=!0,a.push(c.current)}})}});else throw e};return a.events.on("routeChangeStart",r),a.events.on("routeChangeError",n),()=>{a.events.off("routeChangeStart",r),a.events.off("routeChangeError",n)}},[a,l,e]),(0,t.useEffect)(()=>{let t=t=>{(i(e)?e.current:d.current)&&(t.preventDefault(),t.returnValue="")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[e]),s}])},480178,e=>{var t=e.i(391398),r=e.i(738251),n=e.i(115871),o=e.i(755548),i=e.i(19512);e.s(["f",0,e=>{let{title:a,description:s,onSave:l,formId:d,loading:u=!1,disabled:c=!1}=e;return(0,t.jsxs)(r.f,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,t.jsxs)(r.f,{children:[(0,t.jsx)(n.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600,mb:1},children:a}),s&&(0,t.jsx)(n.f,{variant:"body2",color:"text.secondary",children:s})]}),(0,t.jsx)(o.f,{variant:"contained",color:"secondary",startIcon:(0,t.jsx)(i.default,{}),type:d?"submit":"button",form:d,onClick:d?void 0:l,disabled:u||c,sx:{minWidth:150},children:"Save changes"})]})}])},847400,e=>{var t=e.i(159080);let r=t.f`
  mutation UpdateAccount($accountId: Int!, $account: Account_set_input) {
    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $account) {
      id
    }
  }
`,n=t.f`
  query GetFinanceSetting($id: Int!) {
    account: Account_by_pk(id: $id) {
      addresses: Addresses(where: { entity: { _eq: "Account" } }) {
        id
        registered
        operating
        trading
        invoice
        status
        createdAt
        address: Address {
          id
          name
          addressLine1
          addressLine2
          addressLine3
          city
          county
          geo
          postCode
          country: Country {
            id
            name
          }
        }
      }
      id
      media: Media(
        where: { entity: { _eq: "Account" }, Medium: { category: { _eq: "emailLogo" } } }
        limit: 1
        order_by: { createdAt: desc }
      ) {
        id
        item: Medium {
          id
          filename
        }
      }
      bankAccounts: BankAccounts {
        id
        bank
        stripeId
        accountNumber
        routingNumber
        bic
        iban
        status
        default
        createdAt
        meta
      }
      meta
      customerPpmInvoicingOnCompletion
      customerPpmInvoicingOnMonthly
    }
  }
`;e.s(["k",0,n,"e",0,r])},863838,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),i=e.r(391398);r.default=(0,o.default)((0,i.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description")},642508,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),i=e.r(391398);r.default=(0,o.default)((0,i.jsx)("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"}),"List")},19512,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),i=e.r(391398);r.default=(0,o.default)((0,i.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},5259,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(e.r(421506)),i=e.r(391398);r.default=(0,o.default)((0,i.jsx)("path",{d:"m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"}),"ShowChart")},477882,e=>{var t=e.i(88152);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])},210213,e=>{var t=e.i(391398),r=e.i(203828),n=e.i(191788),o=e.i(454684),i=e.i(432171),a=e.i(776204),s=e.i(847400),l=e.i(422411),d=e.i(738251),u=e.i(813843),c=e.i(88152),f=e.i(115871),h=e.i(652148),m=e.i(863838),p=e.i(21557),v=e.i(642508),x=e.i(5259),g=e.i(594301),y=e.i(480178);let j=()=>{let{user:e}=(0,g.f)(),r=(0,p.f)(),[j,b]=(0,n.useState)(!1),[w,I]=(0,n.useState)(!1),{data:{account:_}={account:null},loading:C,refetch:E}=(0,i.t)(s.k,{variables:{id:e?.accountId},skip:!e?.accountId}),{control:A,handleSubmit:q,reset:T,formState:{isDirty:L}}=(0,l.G)({defaultValues:{quoteTerms:"",supplierInstructions:"",thresholdInformation:""}});(0,n.useEffect)(()=>{!_||C||w||(T({quoteTerms:_.meta?.quote?.terms||"",supplierInstructions:_.meta?.supplierInstructions?.terms||"",thresholdInformation:_.meta?.thresholdInformation||""}),I(!0))},[_,C,T,w]);let z=(0,o.f)(L),[M]=(0,a.f)(s.e,{onCompleted:async()=>{b(!1);let{data:e}=await E();e?.account&&T({quoteTerms:e.account.meta?.quote?.terms||"",supplierInstructions:e.account.meta?.supplierInstructions?.terms||"",thresholdInformation:e.account.meta?.thresholdInformation||""}),r.show({content:"Text settings updated",severity:"success"})},onError:e=>{b(!1),r.show({content:e.message||"Failed to save",severity:"error"})}}),P=async t=>{if(!e?.accountId||j)return;b(!0);let r={..._?.meta};r.quote={...r.quote||{},terms:t.quoteTerms||null},r.supplierInstructions={...r.supplierInstructions||{},terms:t.supplierInstructions||null},r.thresholdInformation=t.thresholdInformation||null,M({variables:{accountId:e.accountId,account:{meta:r}}})};return(0,t.jsxs)(t.Fragment,{children:[z,(0,t.jsxs)(d.f,{sx:{flex:1,overflow:"auto",p:2,marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 258px)"},transition:"margin-left 0.5s ease"},children:[(0,t.jsx)(y.f,{title:"Text",description:"Manage quote terms, supplier instructions, and threshold information.",onSave:q(P),loading:j,disabled:!L||j}),(0,t.jsxs)(u.f,{spacing:3,children:[(0,t.jsxs)(c.f,{variant:"outlined",sx:{p:3},children:[(0,t.jsxs)(d.f,{sx:{display:"flex",alignItems:"center",gap:1,mb:2},children:[(0,t.jsx)(m.default,{color:"secondary"}),(0,t.jsx)(f.f,{variant:"h6",color:"text.primary",children:"Quote terms"})]}),(0,t.jsx)(l.e,{name:"quoteTerms",control:A,render:e=>{let{value:r,onChange:n,onBlur:o}=e;return(0,t.jsx)(h.f,{value:r,onChange:e=>n(e.target.value),onBlur:o,fullWidth:!0,multiline:!0,rows:12,variant:"outlined",color:"secondary",placeholder:"Enter quote terms...",disabled:j})}})]}),(0,t.jsxs)(c.f,{variant:"outlined",sx:{p:3},children:[(0,t.jsxs)(d.f,{sx:{display:"flex",alignItems:"center",gap:1,mb:2},children:[(0,t.jsx)(v.default,{color:"secondary"}),(0,t.jsx)(f.f,{variant:"h6",color:"text.primary",children:"Supplier instructions"})]}),(0,t.jsx)(l.e,{name:"supplierInstructions",control:A,render:e=>{let{value:r,onChange:n,onBlur:o}=e;return(0,t.jsx)(h.f,{value:r,onChange:e=>n(e.target.value),onBlur:o,fullWidth:!0,multiline:!0,rows:12,variant:"outlined",color:"secondary",placeholder:"Enter supplier instructions...",disabled:j})}})]}),(0,t.jsxs)(c.f,{variant:"outlined",sx:{p:3},children:[(0,t.jsxs)(d.f,{sx:{display:"flex",alignItems:"center",gap:1,mb:2},children:[(0,t.jsx)(x.default,{color:"secondary"}),(0,t.jsx)(f.f,{variant:"h6",color:"text.primary",children:"Threshold information"})]}),(0,t.jsx)(l.e,{name:"thresholdInformation",control:A,render:e=>{let{value:r,onChange:n,onBlur:o}=e;return(0,t.jsx)(h.f,{value:r,onChange:e=>n(e.target.value),onBlur:o,fullWidth:!0,multiline:!0,rows:12,variant:"outlined",color:"secondary",placeholder:"Enter threshold information...",disabled:j})}})]})]})]})]})};var b=e.i(293965);let w=()=>{let{user:e}=(0,g.f)();return e?(0,t.jsx)(j,{}):(r.default.replace("/account/sign-in"),null)};w.getLayout=function(e){return(0,t.jsx)(b.f,{children:e})},e.s(["default",0,w],210213)}],955174,(e,t,r)=>{let n="/dashboard/settings/text";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(210213)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);