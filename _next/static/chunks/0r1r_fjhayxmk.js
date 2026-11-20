(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[558091,e=>{var t=e.i(391398),r=e.i(821627),n=e.i(477882),i=e.i(886779),s=e.i(280445),o=e.i(356119);let a=(0,s.f)(n.f)(()=>({position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",width:"100vw",maxWidth:"600px",maxHeight:"100vh",padding:"16px",borderRadius:"8px",overflow:"auto"}));e.s(["f",0,e=>{let{onCancel:n,onConfirm:s,title:l="Unsaved changes",body:d="Leaving this page means you will lose any updates you've made.",cancelLabel:u="Cancel",confirmLabel:c="Confirm"}=e;return(0,t.jsxs)(a,{children:[(0,t.jsx)(o.f,{variant:"h6",sx:{padding:"0 0 16px 0"},children:l}),(0,t.jsx)(i.f,{children:(0,t.jsx)(o.f,{sx:{textAlign:"left"},children:d})}),(0,t.jsxs)(i.f,{direction:"row",spacing:2,justifyContent:"flex-end",sx:{padding:"16px 0 16px 24px"},children:[(0,t.jsx)(r.f,{onClick:n,color:"danger",variant:"contained",children:u}),(0,t.jsx)(r.f,{onClick:s,color:"secondary",variant:"contained",children:c})]})]})}])},454684,e=>{var t=e.i(191788),r=e.i(203828);e.i(443645);var n=e.i(648116),i=e.i(558091);let s=e=>"object"==typeof e&&null!==e;e.s(["f",0,e=>{let o=(0,r.useRouter)(),[a,l]=(0,n.f)(),d=(0,t.useRef)(s(e)?e.current:e),u=(0,t.useRef)(!1),c=(0,t.useRef)("");return(0,t.useEffect)(()=>{s(e)||(d.current=e)},[e]),(0,t.useEffect)(()=>{let r=t=>{if(!(s(e)?e.current:d.current)||u.current){u.current=!1;return}throw c.current=t,window.location.pathname+window.location.search!==o.asPath.split("#")[0]&&window.history.pushState(null,"",o.asPath),o.events.emit("routeChangeError",Error("Route change aborted by user")),"Route change aborted by user"},n=e=>{if(e instanceof Error&&"Route change aborted by user"===e.message)l({content:e=>{let{onClose:r}=e;return t.createElement(i.f,{onCancel:()=>r(),onConfirm:()=>{r(),u.current=!0,o.push(c.current)}})}});else throw e};return o.events.on("routeChangeStart",r),o.events.on("routeChangeError",n),()=>{o.events.off("routeChangeStart",r),o.events.off("routeChangeError",n)}},[o,l,e]),(0,t.useEffect)(()=>{let t=t=>{(s(e)?e.current:d.current)&&(t.preventDefault(),t.returnValue="")};return window.addEventListener("beforeunload",t),()=>window.removeEventListener("beforeunload",t)},[e]),a}])},480178,e=>{var t=e.i(391398),r=e.i(738251),n=e.i(115871),i=e.i(755548),s=e.i(19512);e.s(["f",0,e=>{let{title:o,description:a,onSave:l,formId:d,loading:u=!1,disabled:c=!1}=e;return(0,t.jsxs)(r.f,{sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",mb:3,pb:2,borderBottom:"1px solid",borderColor:"divider"},children:[(0,t.jsxs)(r.f,{children:[(0,t.jsx)(n.f,{variant:"h4",color:"text.primary",sx:{fontWeight:600,mb:1},children:o}),a&&(0,t.jsx)(n.f,{variant:"body2",color:"text.secondary",children:a})]}),(0,t.jsx)(i.f,{variant:"contained",color:"secondary",startIcon:(0,t.jsx)(s.default,{}),type:d?"submit":"button",form:d,onClick:d?void 0:l,disabled:u||c,sx:{minWidth:150},children:"Save changes"})]})}])},430583,e=>{var t=e.i(511667),r=e.i(974261);e.s(["f",0,(e,n)=>{let{onCompleted:i,onError:s}=n;return(0,t.f)(`/account/settings/${e}`,{queryKey:`account-settings-${e}`,method:"PUT",baseUrl:r.M,onCompleted:i,onError:s})}])},847400,e=>{var t=e.i(159080);let r=t.f`
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
`;e.s(["f",0,r])},863838,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e.r(421506)),s=e.r(391398);r.default=(0,i.default)((0,s.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"}),"Description")},642508,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e.r(421506)),s=e.r(391398);r.default=(0,i.default)((0,s.jsx)("path",{d:"M3 13h2v-2H3zm0 4h2v-2H3zm0-8h2V7H3zm4 4h14v-2H7zm0 4h14v-2H7zM7 7v2h14V7z"}),"List")},19512,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e.r(421506)),s=e.r(391398);r.default=(0,i.default)((0,s.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save")},5259,(e,t,r)=>{var n=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var i=n(e.r(421506)),s=e.r(391398);r.default=(0,i.default)((0,s.jsx)("path",{d:"m3.5 18.49 6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"}),"ShowChart")},477882,e=>{var t=e.i(88152);e.s(["f",()=>t.f])},356119,e=>{var t=e.i(115871);e.s(["f",()=>t.f])},210213,e=>{var t=e.i(391398),r=e.i(203828),n=e.i(191788),i=e.i(454684),s=e.i(432171),o=e.i(847400),a=e.i(430583),l=e.i(422411),d=e.i(738251),u=e.i(813843),c=e.i(88152),f=e.i(115871),h=e.i(652148),m=e.i(863838),p=e.i(21557),v=e.i(642508),x=e.i(5259),g=e.i(594301),y=e.i(480178);let j=()=>{let{user:e}=(0,g.f)(),r=(0,p.f)(),[j,b]=(0,n.useState)(!1),[w,I]=(0,n.useState)(!1),{data:{account:C}={account:null},loading:_,refetch:E}=(0,s.t)(o.f,{variables:{id:e?.accountId},skip:!e?.accountId}),{control:T,handleSubmit:q,reset:L,formState:{isDirty:M}}=(0,l.G)({defaultValues:{quoteTerms:"",supplierInstructions:"",thresholdInformation:""}});(0,n.useEffect)(()=>{!C||_||w||(L({quoteTerms:C.meta?.quote?.terms||"",supplierInstructions:C.meta?.supplierInstructions?.terms||"",thresholdInformation:C.meta?.thresholdInformation||""}),I(!0))},[C,_,L,w]);let P=(0,i.f)(M),[z]=(0,a.f)("text",{onCompleted:async()=>{b(!1);let{data:e}=await E();e?.account&&L({quoteTerms:e.account.meta?.quote?.terms||"",supplierInstructions:e.account.meta?.supplierInstructions?.terms||"",thresholdInformation:e.account.meta?.thresholdInformation||""}),r.show({content:"Text settings updated",severity:"success"})},onError:e=>{b(!1),r.show({content:e.message||"Failed to save",severity:"error"})}}),A=async t=>{e?.accountId&&!j&&(b(!0),z({body:{quoteTerms:t.quoteTerms||null,supplierInstructions:t.supplierInstructions||null,thresholdInformation:t.thresholdInformation||null}}))};return(0,t.jsxs)(t.Fragment,{children:[P,(0,t.jsxs)(d.f,{sx:{flex:1,overflow:"auto",p:2,marginLeft:{xs:0,sm:"var(--system-settings-sidebar-width, 258px)"},transition:"margin-left 0.5s ease"},children:[(0,t.jsx)(y.f,{title:"Text",description:"Manage quote terms, supplier instructions, and threshold information.",onSave:q(A),loading:j,disabled:!M||j}),(0,t.jsxs)(u.f,{spacing:3,children:[(0,t.jsxs)(c.f,{variant:"outlined",sx:{p:3},children:[(0,t.jsxs)(d.f,{sx:{display:"flex",alignItems:"center",gap:1,mb:2},children:[(0,t.jsx)(m.default,{color:"secondary"}),(0,t.jsx)(f.f,{variant:"h6",color:"text.primary",children:"Quote terms"})]}),(0,t.jsx)(l.e,{name:"quoteTerms",control:T,render:e=>{let{value:r,onChange:n,onBlur:i}=e;return(0,t.jsx)(h.f,{value:r,onChange:e=>n(e.target.value),onBlur:i,fullWidth:!0,multiline:!0,rows:12,variant:"outlined",color:"secondary",placeholder:"Enter quote terms...",disabled:j})}})]}),(0,t.jsxs)(c.f,{variant:"outlined",sx:{p:3},children:[(0,t.jsxs)(d.f,{sx:{display:"flex",alignItems:"center",gap:1,mb:2},children:[(0,t.jsx)(v.default,{color:"secondary"}),(0,t.jsx)(f.f,{variant:"h6",color:"text.primary",children:"Supplier instructions"})]}),(0,t.jsx)(l.e,{name:"supplierInstructions",control:T,render:e=>{let{value:r,onChange:n,onBlur:i}=e;return(0,t.jsx)(h.f,{value:r,onChange:e=>n(e.target.value),onBlur:i,fullWidth:!0,multiline:!0,rows:12,variant:"outlined",color:"secondary",placeholder:"Enter supplier instructions...",disabled:j})}})]}),(0,t.jsxs)(c.f,{variant:"outlined",sx:{p:3},children:[(0,t.jsxs)(d.f,{sx:{display:"flex",alignItems:"center",gap:1,mb:2},children:[(0,t.jsx)(x.default,{color:"secondary"}),(0,t.jsx)(f.f,{variant:"h6",color:"text.primary",children:"Threshold information"})]}),(0,t.jsx)(l.e,{name:"thresholdInformation",control:T,render:e=>{let{value:r,onChange:n,onBlur:i}=e;return(0,t.jsx)(h.f,{value:r,onChange:e=>n(e.target.value),onBlur:i,fullWidth:!0,multiline:!0,rows:12,variant:"outlined",color:"secondary",placeholder:"Enter threshold information...",disabled:j})}})]})]})]})]})};var b=e.i(293965);let w=()=>{let{user:e}=(0,g.f)();return e?(0,t.jsx)(j,{}):(r.default.replace("/account/sign-in"),null)};w.getLayout=function(e){return(0,t.jsx)(b.f,{children:e})},e.s(["default",0,w],210213)}],955174,(e,t,r)=>{let n="/dashboard/settings/text";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(210213)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})}]);