(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,114974,e=>{var t=e.i(358410);e.s(["f",()=>t.U])},692499,e=>{var t=e.i(290207);e.s(["f",()=>t.U])},536594,36380,663782,543587,e=>{var t=e.i(391398),r=e.i(191788),i=e.i(335007),o=e.i(783373),n=e.i(989440),s=e.i(766155),a=e.i(398485),l=e.i(133567),d=e.i(709610);e.i(291276);var c=e.i(737438),u=e.i(458848),p=e.i(685087),g=e.i(372913),m=e.i(571761),h=e.i(62846),x=e.i(808239),f=e.i(144944),b=e.i(398829),v=e.i(995062),w=e.i(672505);e.i(512290);var j=e.i(441327),k=e.i(966861),y=e.i(358410),_=e.i(290207),O=e.i(343941),S=e.i(652115),C=e.i(881868),N=e.i(594301),M=e.i(975174),L=e.i(192006),E=e.i(744650),$=e.i(829487),z=e.i(361378),T=e.i(106224),A=e.i(765208),R=e.i(240975),P=e.i(741522),U=e.i(129283),I=O;class D extends I.w4{__url;static getType(){return"task-link"}static clone(e){return new D(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(U.f,{url:this.__url})}exportJSON(){return{type:"task-link",version:1,url:this.__url}}static importJSON(e){return new D(e.url)}}let J=[{regex:/https?:\/\/[^\/]+\/dashboard\/(?:tasks\?id=\d+|issues\/view\?id=\d+&task_id=\d+)/g,createNode:function(e){return new D(e)}},{regex:/https?:\/\/[^\/]+\/dashboard\/issues\/view\?id=\d+/g,createNode:T.L},{regex:/https?:\/\/[^\/]+\/dashboard\/customers\/view\?id=\d+(&tab=[^&\s]+)?/g,createNode:E.L},{regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?id=\d+(&tab=[^&\s]+)?/g,createNode:P.s},{regex:/https?:\/\/[^\/]+\/dashboard\/properties\/view\?id=[^&\s]+(?:&[^&\s]+)*&tab=compliance(?:&[^&\s]+)*/g,createNode:L.A},{regex:/https?:\/\/[^\/]+\/dashboard\/properties\/view\?id=[^&\s]+(?:&[^&\s]+)*&tab=planned-maintenance(?:&[^&\s]+)*/g,createNode:R.r},{regex:/https?:\/\/[^\/]+\/dashboard\/properties\/view\?id=\d+(?:&[^&\s]+)*/g,createNode:A.M},{regex:/https?:\/\/[^\/]+\/dashboard\/assets\/view\?id=\d+/g,createNode:M.p},{regex:/https?:\/\/[^\/]+\.amazonaws\.com\/documents\/[^\/]+\.pdf/g,createNode:$.H},{title:"PPM jobs today",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/issues\?type=[^&\s]+&asAt=\d{4}-\d{2}-\d{2}&tileName=[^&\s]+&userId=\d+&accountId=\d+&title=[^&\s]+/g,createNode:z.O},{title:"Work Orders List",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/issues$/g,createNode:z.O},{title:"Quotes List",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/quotes$/g,createNode:z.O},{title:"Customers List",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/customers$/g,createNode:z.O},{title:"Locations List",roles:["admin","customer"],regex:/https?:\/\/[^\/]+\/dashboard\/properties$/g,createNode:z.O},{title:"Assets List",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/assets$/g,createNode:z.O},{title:"Suppliers List",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers$/g,createNode:z.O},{title:"Automation| Communications Tab",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/communications$/g,createNode:z.O},{title:"Automation| Workflows Tab",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/workflows$/g,createNode:z.O},{title:"Data| Charts",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/data\/business$/g,createNode:z.O},{title:"Data| Reports Tab",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/data\/reports$/g,createNode:z.O},{title:"System Settings",regex:/https?:\/\/[^\/]+\/dashboard\/settings\/settingsSystem$/g,roles:["admin"],createNode:z.O},{title:"Settings| Company",regex:/https?:\/\/[^\/]+\/dashboard\/admins\/view$/g,roles:["admin"],createNode:z.O},{title:"System Settings| Accounts",regex:/https?:\/\/[^\/]+\/dashboard\/account$/g,roles:["admin"],createNode:z.O},{title:"System Settings| Users",regex:/https?:\/\/[^\/]+\/dashboard\/users$/g,roles:["admin"],createNode:z.O},{title:"System Settings| Media",regex:/https?:\/\/[^\/]+\/dashboard\/media$/g,roles:["admin"],createNode:z.O},{title:"System Settings| Services",regex:/https?:\/\/[^\/]+\/dashboard\/services$/g,roles:["admin"],createNode:z.O},{title:"System Settings| Coverage",regex:/https?:\/\/[^\/]+\/dashboard\/coverage$/g,roles:["admin"],createNode:z.O},{title:"System Settings| SLAs",regex:/https?:\/\/[^\/]+\/dashboard\/slas$/g,roles:["admin"],createNode:z.O},{title:"System Settings| Categories| Expense Categories",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=expense-categories$/g,createNode:z.O},{title:"System Settings| Categories| Cost Categories",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=cost-categories$/g,createNode:z.O},{title:"System Settings| Categories| Credit rating",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=credit-rating$/g,createNode:z.O},{title:"System Settings| Categories| Job templates & questions",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=job-templates-and-questions$/g,createNode:z.O},{title:"System Settings| Categories| Supplier Questions",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=supplier-questions$/g,createNode:z.O},{title:"System Settings| Categories| Asset Categories",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=asset-categories$/g,createNode:z.O},{title:"System Settings| Categories| Compliance Categories",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=compliance-categories$/g,createNode:z.O},{title:"System Settings| Categories| Client Type",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=client-type$/g,createNode:z.O},{title:"System Settings| Categories| Tags",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=tags$/g,createNode:z.O},{title:"System Settings| Categories| Job Hold Reason",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=job-hold-reason$/g,createNode:z.O},{title:"System Settings| Categories| Signatures",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=signatures$/g,createNode:z.O},{title:"System Settings| Categories| Issue Types",roles:["admin"],regex:/https?:\/\/[^\/]+\/dashboard\/taxonomy\?tab=issue-types$/g,createNode:z.O}],F=[{title:"Profile",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/users\/view\?id=\d+$/g,createNode:z.O},{title:"Current Jobs",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/issues\?show=current$/g,createNode:z.O},{title:"Job History",roles:["customer","supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/issues\?show=past$/g,createNode:z.O},{title:"Locations List",roles:["customer","admin"],regex:/https?:\/\/[^\/]+\/dashboard\/properties$/g,createNode:z.O},{title:"Account Page| Users tab",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/customers\/view\?tab=users$/g,createNode:z.O},{title:"Account Page| Locations tab",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/customers\/view\?tab=locations$/g,createNode:z.O},{title:"Account Page| Work Orders",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/customers\/view\?tab=work-orders$/g,createNode:z.O},{title:"Account Page| SLAs",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/customers\/view\?tab=slas$/g,createNode:z.O},{title:"Account Page| Quotes",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/customers\/view\?tab=quotes$/g,createNode:z.O},{title:"Account Page| Details",roles:["customer"],regex:/https?:\/\/[^\/]+\/dashboard\/customers\/view\?id=\d+$/g,createNode:z.O}],H=[{title:"Account Page| Finance",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=finance$/g,createNode:z.O},{title:"Account Page| Users tab",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=users$/g,createNode:z.O},{title:"Account Page| Services",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=services$/g,createNode:z.O},{title:"Account Page| Work Orders",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=work-orders$/g,createNode:z.O},{title:"Account Page| Quotations",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=quotations$/g,createNode:z.O},{title:"Account Page| Questions",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=questions$/g,createNode:z.O},{title:"Account Page| Planned Maintenance",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=planned-maintenance$/g,createNode:z.O},{title:"Account Page| Data",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?tab=data$/g,createNode:z.O},{title:"Account Page| Details",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/suppliers\/view\?id=\d+$/g,createNode:z.O},{title:"Current Offers",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/issues\?show=offered$/g,createNode:z.O},{title:"Reactive Jobs",roles:["supplier"],regex:/https?:\/\/[^\/]+\/dashboard\/issues\?show=current$/g,createNode:z.O},{title:"Job History",roles:["supplier","customer"],regex:/https?:\/\/[^\/]+\/dashboard\/issues\?show=past$/g,createNode:z.O}],q=[{title:"PPM List",regex:/https?:\/\/[^\/]+\/dashboard\/issues\?type=ppm$/g,createNode:z.O},{title:"PPM Schedules List",regex:/https?:\/\/[^\/]+\/dashboard\/scheduledjob(\?[^&\s]+(&[^&\s]+)*)?/g,createNode:z.O},{title:"Calendar Page",regex:/https?:\/\/[^\/]+\/dashboard\/snapshot$/g,createNode:z.O},{title:"Notifications",regex:/https?:\/\/[^\/]+\/dashboard\/notifications$/g,createNode:z.O},{title:"Dashboard page",regex:/https?:\/\/[^\/]+\/dashboard(?:\?asAt=\d{4}-\d{2}-\d{2})?(?:&userId=\d+)?/g,createNode:z.O}];function B(){let[e]=(0,C.y)(),{hasRole:t}=(0,N.f)(),i=(0,r.useMemo)(()=>[...t("admin")?J:[],...t("customer")?F:[],...t("supplier")?H:[],...q],[t]);return(0,r.useEffect)(()=>e.registerNodeTransform(O.Kl,e=>{let t=e.getTextContent();for(let{regex:r,createNode:o,title:n,roles:s}of i){let i=t.match(r);if(i){let r=i[0],a=t.indexOf(r),l=a+r.length,d=t.slice(0,a),c=t.slice(l),u=new O.Kl(d),p=new O.Kl(c),g=n?o(r,n,s):o(r);e.insertBefore(u),u.insertAfter(g),g.insertAfter(p),e.remove();break}}}),[e,t,i]),null}var W=e.i(52495),V=e.i(447090),K=e.i(965016);function Q(){let[e]=(0,C.y)(),t=(0,V.f)(),i=(0,K.u)();return(0,r.useEffect)(()=>{let r=r=>{let o=r.target instanceof Element?r.target.closest("a[href]"):null;!(o instanceof HTMLAnchorElement)||e.isEditable()||null!==(0,W.I)(o.href)&&(r.preventDefault(),t(o.href,i))},o=e.registerRootListener((e,t)=>{t?.removeEventListener("click",r),e?.addEventListener("click",r)});return()=>{o(),e.getRootElement()?.removeEventListener("click",r)}},[e,t,i]),null}var G=e.i(835044),Y=e.i(755548),Z=e.i(76381),X=e.i(322135),ee=e.i(918862),et=e.i(27851),er=e.i(919444),ei=e.i(798864),eo=e.i(377408),en=e.i(339047),es=e.i(763550),ea=e.i(188639),el=e.i(876669),ed=e.i(484511);function ec(e){let{loading:i=!1,onSend:o,setLoading:n=()=>{}}=e,[s]=(0,C.y)(),{form:a}=(0,el.q)(),[l,d]=(0,r.useState)(!0);s.getEditorState().read(async()=>{let e=!(0,O.v0)().getTextContent().trim().length;e!==l&&d(e)});let c=(0,r.useCallback)(async e=>{let t=(0,en.f)(e.editorState.root,"image",{isUploaded:!0}),r=await Promise.all(t.map(async e=>{let t=(0,eo.f)(e.src,e.altText);return{key:(await (0,ei.b)(t,"image")).key,source:"s3"}})),i=(0,es.f)({json:e,type:"image",to:r,keys:{src:"key",source:"source"},avoidKeyValues:{isUploaded:!0}});return(0,ed.f)({json:i,type:"image",keys:["isUploaded"]})},[]),u=(0,r.useCallback)(async()=>{!a||await a.trigger()&&s.getEditorState().read(async()=>{try{n(!0);let{from:e,to:t,cc:r,bcc:i,subject:l}=a.getValues(),d=(0,O.v0)(),u=(0,O.e6)(ea.$),p=d.getTextContent(),g=(0,et.T)(s,null),m=u.map(e=>e.__value),h=await c(s.toJSON());await o({json:h,plainText:p,htmlString:g,mentions:m,from:e.value,to:t.map(e=>e.value),cc:r?.map(e=>e.value)||[],bcc:i?.map(e=>e.value)||[],subject:l}),s.dispatchCommand(O.Hw,void 0)}finally{n(!1)}})},[s,a,o,n,c]),p=(0,r.useCallback)(e=>{let{ctrlKey:t,metaKey:r}=e;return(t||r)&&(e.preventDefault(),u()),!0},[u]);return(0,r.useEffect)(()=>(0,er.l)(s.registerCommand(O.J$,p,O.$Z)),[s,p]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(X.f,{title:"Ctrl or CMD + Enter",children:(0,t.jsx)(Y.f,{disableMinWidth:!0,disabled:i||l,color:"success",variant:"contained",sx:{width:"50px",height:"36px"},onClick:u,children:i?(0,t.jsx)(Z.f,{color:"success",size:18}):(0,t.jsx)(ee.default,{})})})})}var eu=e.i(886779),ep=e.i(707065),eg=e.i(280445);let em=(0,eg.f)("div")`
  ${()=>eh()}
  ${e=>{let{customStyles:t}=e;return t?.()}}
`,eh=()=>ep.m`
  .editor-container {
    font-family: Nunito-Regular;
    width: 100%;
    border-radius: 10px;
    color: #000;
    background: rgba(0, 0, 0, 0.06);
    position: relative;
    line-height: 20px;
    font-weight: 400;
    text-align: left;
  }

  .ltr {
    text-align: left;
  }

  .rtl {
    text-align: right;
  }

  .editor-inner {
    position: relative;
  }

  .editor-input {
    min-height: 150px;
    resize: none;
    font-size: 15px;
    caret-color: rgb(5, 5, 5);
    position: relative;
    tab-size: 1;
    outline: 0;
    padding: 15px 10px;
    caret-color: #444;
  }

  .editor-placeholder {
    color: #999;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 15px;
    left: 10px;
    font-size: 15px;
    user-select: none;
    display: inline-block;
    pointer-events: none;
  }

  .editor-text-bold {
    font-weight: bold;
  }

  .editor-text-italic {
    font-style: italic;
  }

  .editor-text-underline {
    text-decoration: underline;
  }

  .editor-text-strikethrough {
    text-decoration: line-through;
  }

  .editor-text-underlineStrikethrough {
    text-decoration: underline line-through;
  }

  .editor-text-code {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1px 0.25rem;
    font-family: Menlo, Consolas, Monaco, monospace;
    font-size: 94%;
  }

  .editor-link {
    color: rgb(33, 111, 219);
    text-decoration: none;
  }

  .editor-text-mention {
    border-radius: 5px;
    padding: 0 5px;
    background-color: #faae20;
  }

  .tree-view-output {
    display: block;
    background: #222;
    color: #fff;
    padding: 5px;
    font-size: 12px;
    white-space: pre-wrap;
    margin: 1px auto 10px auto;
    max-height: 250px;
    position: relative;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: auto;
    line-height: 14px;
  }

  .editor-code {
    background-color: rgb(240, 242, 245);
    font-family: Menlo, Consolas, Monaco, monospace;
    display: block;
    padding: 8px 8px 8px 52px;
    line-height: 1.53;
    font-size: 13px;
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    tab-size: 2;
    /* white-space: pre; */
    overflow-x: auto;
    position: relative;
  }

  .editor-code:before {
    content: attr(data-gutter);
    position: absolute;
    background-color: #eee;
    left: 0;
    top: 0;
    border-right: 1px solid #ccc;
    padding: 8px;
    color: #777;
    white-space: pre-wrap;
    text-align: right;
    min-width: 25px;
  }
  .editor-code:after {
    content: attr(data-highlight-language);
    top: 0;
    right: 3px;
    padding: 3px;
    font-size: 10px;
    text-transform: uppercase;
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
  }

  .editor-tokenComment {
    color: slategray;
  }

  .editor-tokenPunctuation {
    color: #999;
  }

  .editor-tokenProperty {
    color: #905;
  }

  .editor-tokenSelector {
    color: #690;
  }

  .editor-tokenOperator {
    color: #9a6e3a;
  }

  .editor-tokenAttr {
    color: #07a;
  }

  .editor-tokenVariable {
    color: #e90;
  }

  .editor-tokenFunction {
    color: #dd4a68;
  }

  .editor-paragraph {
    margin: 0;
    margin-bottom: 8px;
    position: relative;
  }

  .editor-paragraph:last-child {
    margin-bottom: 0;
  }

  .editor-heading-h1 {
    font-size: 24px;
    color: rgb(5, 5, 5);
    font-weight: 400;
    margin: 0;
    margin-bottom: 12px;
    padding: 0;
  }

  .editor-heading-h2 {
    font-size: 15px;
    color: rgb(101, 103, 107);
    font-weight: 700;
    margin: 0;
    margin-top: 10px;
    padding: 0;
    text-transform: uppercase;
  }

  .editor-quote {
    margin: 0;
    margin-left: 20px;
    font-size: 15px;
    color: rgb(101, 103, 107);
    border-left-color: rgb(206, 208, 212);
    border-left-width: 4px;
    border-left-style: solid;
    padding-left: 16px;
  }

  .editor-list-ol {
    padding: 0;
    margin: 0;
    margin-left: 16px;
  }

  .editor-list-ul {
    padding: 0;
    margin: 0;
    margin-left: 16px;
  }

  .editor-listitem {
    margin: 8px 32px 8px 32px;
  }

  .editor-nested-listitem {
    list-style-type: none;
  }

  .editor-text-bgcolor {
    border-radius: 5px;
    padding: 0 5px;
  }

  pre::-webkit-scrollbar {
    background: transparent;
    width: 10px;
  }

  pre::-webkit-scrollbar-thumb {
    background: #999;
  }

  .debug-timetravel-panel {
    overflow: hidden;
    padding: 0 0 10px 0;
    margin: auto;
    display: flex;
  }

  .debug-timetravel-panel-slider {
    padding: 0;
    flex: 8;
  }

  .debug-timetravel-panel-button {
    padding: 0;
    border: 0;
    background: none;
    flex: 1;
    color: #fff;
    font-size: 12px;
  }

  .debug-timetravel-panel-button:hover {
    text-decoration: underline;
  }

  .debug-timetravel-button {
    border: 0;
    padding: 0;
    font-size: 12px;
    top: 10px;
    right: 15px;
    position: absolute;
    background: none;
    color: #fff;
  }

  .debug-timetravel-button:hover {
    text-decoration: underline;
  }

  .toolbar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0px;
    padding: 0px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    vertical-align: middle;
    overflow: hidden;
  }

  .toolbar-actions {
    display: flex;
    gap: 0;
    overflow-x: scroll;
    margin-right: 2px;
    margin-top: 2px;
    padding-left: 10px;
  }

  .toolbar-actions::-webkit-scrollbar {
    width: 10px;
    height: 5px;
  }

  .toolbar button.toolbar-item {
    border: 0;
    display: flex;
    background: none;
    border-radius: 2px;
    padding: 2px;
    cursor: pointer;
    vertical-align: middle;
  }

  .toolbar button.toolbar-item:disabled {
    cursor: not-allowed;
  }

  .toolbar button.toolbar-item.spaced {
    margin-right: 2px;
  }

  .toolbar button.toolbar-item svg.MuiSvgIcon-root.format {
    background-size: contain;
    display: inline-block;
    // height: 18px;
    // width: 18px;
    font-size: 23px;
    margin-top: 2px;
    vertical-align: -0.25em;
    display: flex;
    opacity: 0.6;
  }

  .toolbar button.toolbar-item:disabled svg.MuiSvgIcon-root.format {
    opacity: 0.2;
  }

  .toolbar button.toolbar-item.active {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .toolbar button.toolbar-item.active svg {
    opacity: 1;
  }

  .toolbar .toolbar-item:hover:not([disabled]) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .toolbar .divider {
    width: 1px;
    min-width: 1px;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0 10px;
  }

  .toolbar .toolbar-item .text {
    display: flex;
    line-height: 20px;
    width: 200px;
    vertical-align: middle;
    font-size: 14px;
    color: #777;
    text-overflow: ellipsis;
    width: 70px;
    overflow: hidden;
    height: 20px;
    text-align: left;
  }

  .toolbar .toolbar-item .icon {
    display: flex;
    width: 20px;
    height: 20px;
    user-select: none;
    margin-right: 8px;
    line-height: 16px;
    background-size: contain;
  }

  .toolbar .toolbar-item.color-picker .MuiButton-startIcon {
    margin: 0;
  }

  .toolbar .toolbar-item.color-picker .MuiButton-startIcon svg {
    font-size: 19px;
    opacity: 0.6;
  }

  .toolbar .toolbar-item.color-picker .MuiButton-endIcon {
    margin: 0;
    margin-left: 4px;
  }

  .toolbar .toolbar-item.insert-action {
    padding-left: 8px;
    padding-right: 8px;
    opacity: 0.6;
  }

  .editor-image {
    cursor: default;
    display: inline-block;
    position: relative;
    user-select: none;
  }

  .editor-image img {
    max-width: 100%;
    cursor: default;
  }

  .editor-image img.focused {
    outline: 2px solid rgb(60, 132, 244);
    user-select: none;
  }

  .editor-image img.focused.draggable {
    cursor: grab;
  }

  .editor-image img.focused.draggable:active {
    cursor: grabbing;
  }

  .editor-image .image-caption-container .tree-view-output {
    margin: 0;
    border-radius: 0;
  }

  .editor-image .image-caption-container {
    display: block;
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    padding: 0;
    margin: 0;
    border-top: 1px solid #fff;
    background-color: rgba(255, 255, 255, 0.9);
    min-width: 100px;
    color: #000;
    overflow: hidden;
  }

  .editor-image .image-caption-button {
    display: block;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 30%;
    padding: 10px;
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.5);
    min-width: 100px;
    color: #fff;
    cursor: pointer;
    user-select: none;
  }

  .editor-image .image-caption-button:hover {
    background-color: rgba(60, 132, 244, 0.5);
  }

  .editor-image .image-edit-button {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-image: url(/src/images/icons/pencil-fill.svg);
    background-size: 16px;
    background-position: center;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    vertical-align: -0.25em;
    position: absolute;
    right: 4px;
    top: 4px;
    cursor: pointer;
    user-select: none;
  }

  .editor-image .image-edit-button:hover {
    background-color: rgba(60, 132, 244, 0.1);
  }

  .editor-image .image-resizer {
    display: block;
    width: 7px;
    height: 7px;
    position: absolute;
    background-color: rgb(60, 132, 244);
    border: 1px solid #fff;
  }

  .editor-image .image-resizer.image-resizer-n {
    top: -6px;
    left: 48%;
    cursor: n-resize;
  }

  .editor-image .image-resizer.image-resizer-ne {
    top: -6px;
    right: -6px;
    cursor: ne-resize;
  }

  .editor-image .image-resizer.image-resizer-e {
    bottom: 48%;
    right: -6px;
    cursor: e-resize;
  }

  .editor-image .image-resizer.image-resizer-se {
    bottom: -2px;
    right: -6px;
    cursor: nwse-resize;
  }

  .editor-image .image-resizer.image-resizer-s {
    bottom: -2px;
    left: 48%;
    cursor: s-resize;
  }

  .editor-image .image-resizer.image-resizer-sw {
    bottom: -2px;
    left: -6px;
    cursor: sw-resize;
  }

  .editor-image .image-resizer.image-resizer-w {
    bottom: 48%;
    left: -6px;
    cursor: w-resize;
  }

  .editor-image .image-resizer.image-resizer-nw {
    top: -6px;
    left: -6px;
    cursor: nw-resize;
  }

  .editor-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
  }

  .ImageNode__contentEditable {
    min-height: 20px;
    border: 0px;
    resize: none;
    cursor: text;
    caret-color: rgb(5, 5, 5);
    display: block;
    position: relative;
    outline: 0px;
    padding: 10px;
    user-select: text;
    font-size: 12px;
    width: calc(100% - 20px);
    white-space: pre-wrap;
    word-break: break-word;
  }

  .ImageNode__placeholder {
    font-size: 12px;
    color: #888;
    overflow: hidden;
    position: absolute;
    text-overflow: ellipsis;
    top: 10px;
    left: 10px;
    user-select: none;
    white-space: nowrap;
    display: inline-block;
    pointer-events: none;
  }

  .ImageNode__taskPriority {
    width: 20px;
    height: 20px;
    margin-bottom: -5px;
  }

  .image-control-wrapper--resizing {
    touch-action: none;
  }

  .editor-text-workflow-tag {
    background-color: #ffe354;
    padding: 2px 4px;
    border-radius: 12px;
    margin: 0 2px;
  }
`;var ex=e.i(752921),ef=e.i(464814),eb=O,ev=e.i(362537);class ew extends eb.Kl{__momentFormat;constructor(e,t,r){super(e,r),this.__text=(0,ev.default)(e).format(t),this.__momentFormat=t}static importJSON(e){let{text:t,momentFormat:r,format:i}=e,o=new ew(t,r);return o.setFormat(i),o}static getType(){return"TimestampNode"}static clone(e){return new ew(e.__text,e.__momentFormat,e.__key)}createDOM(e){return super.createDOM(e)}updateDOM(e,t,r){return super.updateDOM(e,t,r)}exportJSON(){return{...super.exportJSON(),text:(0,ev.default)(this.__text,this.__momentFormat).toISOString(),momentFormat:this.__momentFormat,type:"TimestampNode",version:1}}}var ej=e.i(682397);let ek=[z.h,D,T.D,E.c,P.f,A.S,R.p,L.k,M.O,$.e],ey=[ex.h,ex.H,ea.$,ef.x,ew,...ek],e_=[ex.h,ex.H,ea.$,ef.x,ew,ej.H],eO=[ej.H],eS={code:"editor-code",heading:{h1:"editor-heading-h1",h2:"editor-heading-h2",h3:"editor-heading-h3",h4:"editor-heading-h4",h5:"editor-heading-h5"},image:"editor-image",link:"editor-link",list:{listitem:"editor-listitem",nested:{listitem:"editor-nested-listitem"},ol:"editor-list-ol",ul:"editor-list-ul"},ltr:"ltr",paragraph:"editor-paragraph",placeholder:"editor-placeholder",quote:"editor-quote",rtl:"rtl",text:{bold:"editor-text-bold",code:"editor-text-code",hashtag:"editor-text-hashtag",italic:"editor-text-italic",overflowed:"editor-text-overflowed",strikethrough:"editor-text-strikethrough",underline:"editor-text-underline",underlineStrikethrough:"editor-text-underlineStrikethrough",workflowTag:"editor-text-workflow-tag"}};var eC=e.i(974261);let eN={editable:!0,namespace:"Main Editor",nodes:[...ey],onError(e){"development"===eC.n.environment&&console.error(e)},theme:eS},eM={editable:!0,namespace:"Notification Editor",nodes:[...e_],onError(e){"development"===eC.n.environment&&console.error(e)},theme:eS},eL={editable:!0,namespace:"Workflow Template Editor",nodes:[...eO],onError(e){"development"===eC.n.environment&&console.error(e)},theme:eS};e.s(["p",0,eN,"Z",0,eM,"m",0,eL],36380),e.i(685940),e.i(300608),e.i(687720),e.i(611206),e.s([],536594),e.s(["f",0,e=>{let{loading:C=!1,disabled:N=!1,hideEmailFields:M=!1,placeholder:L="",onCancel:E,onChange:$=()=>{},setLoading:z=()=>{},onSubmit:T=async()=>{},onSubmitAttachment:A=()=>{},droppedAttachments:R=[],onDroppedAttachmentsConsumed:P=()=>{},onSubmitEmail:U=async()=>{}}=e,{historyState:I}=(0,_.Y)(),{settings:{showTreeView:D,audiencePlugin:J,workflowPlugin:F,attachmentPlugin:H,sendPlugin:q,showEditorFooter:W,autoLinkPlugin:V,linkPlugin:K,mentionPlugin:Y,directPlugin:Z,dragDropPastePlugin:X,imagesPlugin:ee,toolbarPlugin:et,emailPlugin:er,emailSendPlugin:ei}}=(0,y.s)(),eo=(0,a.f)(),[en]=(0,r.useState)(document.body),[es,ea]=(0,r.useState)(!1),[el,ed]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{let e=d.f&&window.matchMedia("(max-width: 1025px)").matches;e!==el&&ed(e)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[el]),(0,t.jsxs)("div",{className:"editor-container",children:[eo&&et&&(0,t.jsx)(u.f,{setIsLinkEditMode:ea}),eo&&er&&!M&&(0,t.jsx)(G.T,{}),(0,t.jsxs)("div",{className:"editor-inner",children:[(0,t.jsx)(o.f,{contentEditable:(0,t.jsx)(k.f,{className:"editor-input"}),placeholder:L?(0,t.jsx)(j.f,{className:"editor-placeholder",children:L}):(0,t.jsx)(j.f,{className:"editor-placeholder"}),ErrorBoundary:l.f}),(0,t.jsx)(n.f,{onChange:e=>{let t=JSON.stringify(e.toJSON()),r=e.read(()=>(0,O.v0)().getTextContent());$({json:e.toJSON(),jsonString:t,textContent:r})}}),(0,t.jsx)(s.f,{}),(0,t.jsx)(i.f,{externalHistoryState:I}),V&&(0,t.jsx)(B,{}),K&&(0,t.jsx)(c.f,{}),(0,t.jsx)(Q,{}),Y&&(0,t.jsx)(v.f,{}),Z&&(0,t.jsx)(w.f,{}),X&&(0,t.jsx)(h.f,{}),ee&&(0,t.jsx)(m.f,{captionsEnabled:!1}),eo&&en&&(0,t.jsx)(p.f,{anchorElem:en,isLinkEditMode:es,setIsLinkEditMode:ea}),F&&(0,t.jsx)(S.f,{})]}),eo&&W&&(0,t.jsxs)("div",{className:"editor-footer",children:[J&&(0,t.jsx)(eu.f,{flex:1,children:(0,t.jsx)(f.f,{})}),(0,t.jsxs)("div",{children:[H&&(0,t.jsx)(x.f,{loading:C,setLoading:z,saveContent:A,incomingAttachments:R,onIncomingAttachmentsConsumed:P}),q&&(0,t.jsx)(g.f,{loading:C,disabled:N,setLoading:z,saveContent:T,onCancel:E}),ei&&(0,t.jsx)(ec,{loading:C,setLoading:z,onSend:U})]})]}),D&&(0,t.jsx)(b.f,{})]})}],663782),e.s(["f",0,function(e){let{customStyles:r,children:i,...o}=e;return(0,t.jsx)(em,{customStyles:r,...o,children:i})}],543587)},975174,946124,192006,744650,829487,361378,e=>{var t=e.i(391398),r=e.i(432171),i=e.i(191788),o=e.i(813843),n=e.i(738251),s=e.i(115871),a=e.i(451221),l=e.i(285835),d=e.i(195952),c=e.i(558486),u=e.i(789860),p=e.i(887598),g=e.i(466696),m=e.i(494575);let h=(e,t)=>{if(!e)return m.f.COLOUR.secondary;if(e.startsWith("#"))return e;let[r,i]=e.split(".");if(i&&r&&t.palette&&t.palette[r]){let e=t.palette[r];if("object"==typeof e&&i in e)return e[i]}return m.f.COLOUR.secondary};function x(e){let{url:m}=e,x=(0,i.useRef)(null),[w,j]=(0,i.useState)(!1),k=(0,i.useRef)(null),y=(0,a.f)(),_=f(m),{data:{asset:O}={asset:null},loading:S}=(0,r.t)(d.d,{variables:{id:_},skip:!_}),C=(0,c.O)(c.T,O?.condition),N=(0,c.O)(c.W,O?.preparationStatus),M=h(N?.color,y),L=h(C?.color,y),E=()=>{j(!0),x.current&&clearTimeout(x.current)},$=()=>{x.current=setTimeout(()=>{j(!1)},300)},z=b(m);return(0,t.jsxs)(t.Fragment,{children:[O&&!S&&(0,t.jsxs)("div",{children:[(0,t.jsx)(u.f,{ref:k,title:O.name||"",bgcolor:M,onMouseEnter:E,onMouseLeave:$,onClick:()=>window.open(z,"_blank")}),(0,t.jsxs)(p.f,{isOpen:w,anchorEl:k.current,onMouseEnter:E,onMouseLeave:$,onClose:()=>j(!1),url:z,title:`Asset: ${O.name}`,children:[(0,t.jsxs)(o.f,{pr:2,gap:.5,mb:1,children:[(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Description:"})," ",(0,t.jsx)(l.f,{maxLength:130,children:O.description})]}),O.category&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Category:"})," ",O.category.name]}),O.customer&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Customer:"}),(0,t.jsx)(l.f,{maxLength:130,children:O.customer.name})]}),O.location&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Location:"})," ",O.location.name]}),O.sublocation&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Sublocation:"})," ",O.sublocation.name]})]}),(0,t.jsxs)(o.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsxs)(s.f,{mr:1,fontWeight:"bold",color:"black.main",children:[(0,t.jsx)("strong",{children:"Type: "}),O.parentId?"Child":"Parent"]}),(0,t.jsxs)(o.f,{direction:"row",gap:1.5,alignItems:"center",children:[(0,t.jsxs)(n.f,{sx:{...v.bubble,backgroundColor:M,color:N?.fontColor||"#fff"},children:[(0,t.jsx)(s.f,{sx:v.bold,children:"Status: "}),(0,t.jsx)(s.f,{sx:v.thin,children:O.preparationStatus?N?.label:"N/A"})]}),(0,t.jsxs)(n.f,{sx:{...v.bubble,backgroundColor:L,color:C?.fontColor||"#fff"},children:[(0,t.jsx)(s.f,{sx:v.bold,children:"Condition: "}),(0,t.jsx)(s.f,{sx:v.thin,children:O.condition?C?.label:"N/A"})]})]})]})]})]}),!O&&!S&&(0,t.jsx)(g.f,{})]})}let f=e=>{try{let t=new URL(e).searchParams.get("id");return Number(t)||null}catch{return null}},b=e=>{try{let t=f(e);if(!t)return e;let r=new URL(window.location.href);return`${r.origin}/dashboard/assets/view?id=${t}`}catch{return e}},v={bubble:{display:"flex",justifyContent:"space-between",padding:"1px 8px",backgroundColor:"green",borderRadius:"20px"},bold:{fontWeight:"600!important"},thin:{fontWeight:300}};var w=e.i(343941);class j extends w.w4{__url;static getType(){return"asset-link"}static clone(e){return new j(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(x,{url:this.__url})}exportJSON(){return{type:"asset-link",version:1,url:this.__url}}static importJSON(e){return new j(e.url)}}e.s(["p",0,function(e){return new j(e)},"O",0,j],975174);var k=e.i(159080);let y=k.f`
  query GetPropertyLinkNode($id: Int!) {
    location: Location_by_pk(id: $id) {
      id
      access
      createdAt
      name
      contactUserId
      status
      meta
      permitsRequired
      addresses: Addresses(order_by: { id: asc }, where: { entity: { _eq: "Location" } }) {
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
            code
          }
        }
      }
      customer: Account_Locations(where: { Account: { type: { _eq: "customer" } } }) {
        linkType
        account: Account {
          id
          name
          contactUsers: Account_Users(where: { isContact: { _eq: true } }) {
            id
            user: User {
              id
              fullName
            }
          }
          manager: Manager {
            id
            fullName
          }
        }
      }
    }
  }
`;function _(e){let{url:n}=e,a=(0,i.useRef)(null),[l,d]=(0,i.useState)(!1),c=(0,i.useRef)(null),g=O(n),{data:{location:m}={location:null},loading:h}=(0,r.t)(y,{variables:{id:g},skip:!g}),x=m?.customer?.find(e=>"primary"===e.linkType)?.account?.name||"",f=m?.name,b=()=>{d(!0),a.current&&clearTimeout(a.current)},v=()=>{a.current=setTimeout(()=>{d(!1)},300)},w=S(n);return(0,t.jsx)(t.Fragment,{children:m&&!h&&(0,t.jsxs)("div",{children:[(0,t.jsx)(u.f,{ref:c,title:m.name,onMouseEnter:b,onMouseLeave:v,onClick:()=>window.open(w,"_blank")}),(0,t.jsx)(p.f,{isOpen:l,anchorEl:c.current,onMouseEnter:b,onMouseLeave:v,onClose:()=>d(!1),url:w,title:"Compliance",children:(0,t.jsxs)(o.f,{pr:2,gap:.5,mb:1,children:[x&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Customer: "})," ",x]}),f&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Location:"})," ",f]})]})})]})})}e.s(["f",0,y],946124);let O=e=>{try{return new URL(e).searchParams.get("id")}catch{return null}},S=e=>{let t=O(e);if(!t)return e;let r=new URL(window.location.href);return`${r.origin}/dashboard/properties/view?id=${t}&tab=compliance`};var C=w;class N extends C.w4{__url;static getType(){return"compliance-link"}static clone(e){return new N(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(_,{url:this.__url})}exportJSON(){return{type:"compliance-link",version:1,url:this.__url}}static importJSON(e){return new N(e.url)}}e.s(["A",0,function(e){return new N(e)},"k",0,N],192006);var M=e.i(598536);function L(e){let{url:n}=e,a=(0,i.useRef)(null),[l,d]=(0,i.useState)(!1),c=(0,i.useRef)(null),h=E(n),{data:{customer:x}={customer:null},loading:f}=(0,r.t)(M.q,{variables:{id:h},skip:!h}),b=x?.contactUsers?.[0]?.user?.fullName||"",v=x?.accountUsers?.length||0,w=x?.status==="active"?m.f.COLOUR.success:m.f.COLOUR.danger,j=()=>{d(!0),a.current&&clearTimeout(a.current)},k=()=>{a.current=setTimeout(()=>{d(!1)},300)},y=$(n);return(0,t.jsxs)(t.Fragment,{children:[x&&!f&&(0,t.jsxs)("div",{children:[(0,t.jsx)(u.f,{ref:c,title:x.name,bgcolor:w,onMouseEnter:j,onMouseLeave:k,onClick:()=>window.open(y,"_blank")}),(0,t.jsxs)(p.f,{isOpen:l,anchorEl:c.current,onMouseEnter:j,onMouseLeave:k,onClose:()=>d(!1),url:y,title:x.name,children:[(0,t.jsxs)(o.f,{pr:2,gap:.5,mb:1,children:[b&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Contact User: "})," ",b]}),v>0&&(0,t.jsxs)(s.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Users: "}),(0,t.jsx)("span",{children:v})]})]}),(0,t.jsx)(o.f,{direction:"row",justifyContent:"flex-end",children:(0,t.jsxs)(o.f,{direction:"row",gap:1.5,alignItems:"center",children:[x.manager&&(0,t.jsxs)(s.f,{children:[(0,t.jsx)("strong",{children:"Account manager:"})," ",x.manager.fullName]}),(0,t.jsx)(o.f,{sx:{borderRadius:12,padding:"2px 12px",bgcolor:w},children:(0,t.jsx)(s.f,{color:"white.main",textTransform:"capitalize",children:x.status})})]})})]})]}),!x&&!f&&(0,t.jsx)(g.f,{})]})}let E=e=>{try{return new URL(e).searchParams.get("id")}catch{return null}},$=e=>{let t=E(e);if(!t)return e;let r=new URL(window.location.href);return`${r.origin}/dashboard/customers/view?id=${t}`};var z=w;class T extends z.w4{__url;static getType(){return"customer-link"}static clone(e){return new T(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(L,{url:this.__url})}exportJSON(){return{type:"customer-link",version:1,url:this.__url}}static importJSON(e){return new T(e.url)}}e.s(["L",0,function(e){return new T(e)},"c",0,T],744650);var A=e.i(917569),R=e.i(214710),P=e.i(447090),U=e.i(965016);function I(e){let{url:r}=e,i=(0,P.f)(),o=(0,U.u)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(A.f,{component:"button",type:"button",underline:"none",sx:{color:"black.main"},onClick:()=>i(r,o),children:(0,t.jsxs)("span",{style:{backgroundColor:"#c7c7c7",borderRadius:"4px",cursor:"pointer",position:"relative",padding:"0 4px"},children:[(0,t.jsx)(R.default,{sx:{fontSize:"11px",mr:.5}}),"Document"]})})})}var D=w;class J extends D.w4{__url;static getType(){return"document-link"}static clone(e){return new J(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(I,{url:this.__url})}exportJSON(){return{type:"document-link",version:1,url:this.__url}}static importJSON(e){return new J(e.url)}}e.s(["H",0,function(e){return new J(e)},"e",0,J],829487);var F=w,H=e.i(594301),q=e.i(889231);function B(e){let{url:r,title:i}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(q.f,{href:r,sx:{textDecoration:"none",color:"black.main"},target:"_blank",children:(0,t.jsx)("span",{style:{backgroundColor:"#c7c7c7",borderRadius:"4px",cursor:"pointer",position:"relative",padding:"0 4px"},children:i})})})}var W=e.i(840971);function V(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(q.f,{href:"/403",sx:{textDecoration:"none",color:"black.main"},target:"_blank",children:(0,t.jsxs)("span",{style:{backgroundColor:"#c7c7c7",borderRadius:"4px",cursor:"pointer",position:"relative",padding:"0 4px"},children:[(0,t.jsx)(W.default,{sx:{fontSize:"11px",mr:.5}}),"Private - You do not have permission to view this page"]})})})}let K=e=>{let{url:r,title:i,roles:o}=e,{hasRole:n}=(0,H.f)();return!o.length||n(o)?(0,t.jsx)(B,{url:r,title:i}):(0,t.jsx)(V,{})};class Q extends F.w4{__url;__title;__roles;static getType(){return"internal-link"}static clone(e){return new Q(e.__url,e.__title,e.__roles,e.__key)}constructor(e,t,r,i){super(i),this.__url=e,this.__title=t||"",this.__roles=r||[]}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(K,{url:this.__url,title:this.__title,roles:this.__roles})}exportJSON(){return{type:"internal-link",version:1,url:this.__url,title:this.__title,roles:this.__roles}}static importJSON(e){return new Q(e.url,e.title,e.roles)}}e.s(["O",0,function(e,t,r){return new Q(e,t,r)},"h",0,Q],361378)},106224,765208,240975,741522,e=>{var t=e.i(391398),r=e.i(333548),i=e.i(343941);class o extends i.w4{__url;static getType(){return"job-link"}static clone(e){return new o(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(r.f,{url:this.__url})}exportJSON(){return{type:"job-link",version:1,url:this.__url}}static importJSON(e){return new o(e.url)}}e.s(["L",0,function(e){return new o(e)},"D",0,o],106224);var n=e.i(432171),s=e.i(191788),a=e.i(813843),l=e.i(115871),d=e.i(946124),c=e.i(466696),u=e.i(789860),p=e.i(887598),g=e.i(494575);function m(e){let{url:r}=e,i=(0,s.useRef)(null),[o,m]=(0,s.useState)(!1),f=(0,s.useRef)(null),b=h(r),{data:{location:v}={location:null},loading:w}=(0,n.t)(d.f,{variables:{id:b},skip:!b}),j=v?.customer?.find(e=>"primary"===e.linkType)?.account,k=j?.name||"",y=j?.contactUsers?.[0]?.user?.fullName||"",_=j?.manager?.fullName||"",O=v?.status==="active"?g.f.COLOUR.success:g.f.COLOUR.danger,S=()=>{m(!0),i.current&&clearTimeout(i.current)},C=()=>{i.current=setTimeout(()=>{m(!1)},300)},N=x(r);return(0,t.jsxs)(t.Fragment,{children:[v&&!w&&(0,t.jsxs)("div",{children:[(0,t.jsx)(u.f,{ref:f,title:v.name,bgcolor:O,onMouseEnter:S,onMouseLeave:C,onClick:()=>window.open(N,"_blank")}),(0,t.jsx)(p.f,{isOpen:o,anchorEl:f.current,onMouseEnter:S,onMouseLeave:C,onClose:()=>m(!1),url:N,title:v.name,children:(0,t.jsxs)(a.f,{children:[(0,t.jsxs)(a.f,{pr:2,gap:.5,mb:1,children:[k&&(0,t.jsxs)(l.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Customer: "})," ",k]}),y&&(0,t.jsxs)(l.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Contact User:"})," ",y]})]}),(0,t.jsxs)(a.f,{direction:"row",justifyContent:"space-between",alignItems:"center",gap:1.5,children:[_&&(0,t.jsxs)(l.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Assigned to:"})," ",_]}),(0,t.jsx)(a.f,{sx:{borderRadius:12,padding:"2px 12px",bgcolor:O},children:(0,t.jsx)(l.f,{color:"white.main",textTransform:"capitalize",children:v.status})})]})]})})]}),!v&&!w&&(0,t.jsx)(c.f,{})]})}let h=e=>{try{return new URL(e).searchParams.get("id")}catch{return null}},x=e=>{let t=h(e);if(!t)return e;let r=new URL(window.location.href);return`${r.origin}/dashboard/properties/view?id=${t}`};var f=i;class b extends f.w4{__url;static getType(){return"location-link"}static clone(e){return new b(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(m,{url:this.__url})}exportJSON(){return{type:"location-link",version:1,url:this.__url}}static importJSON(e){return new b(e.url)}}e.s(["M",0,function(e){return new b(e)},"S",0,b],765208);var v=e.i(773831),w=e.i(522507),j=e.i(889231),k=e.i(936066),y=e.i(480708),_=e.i(512057);function O(e){let{url:r}=e,[i,o]=(0,s.useState)(!1),c=(0,s.useRef)(null),u=S(r),{data:{location:p}={location:null},loading:m}=(0,n.t)(d.f,{variables:{id:u},skip:!u}),h=p?.customer?.find(e=>"primary"===e.linkType)?.account?.name||"",x=p?.name,f=()=>{o(!1)},b=C(r);return(0,t.jsx)(t.Fragment,{children:p&&!m&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{ref:c,style:{backgroundColor:"#c7c7c7",borderRadius:"4px",cursor:"pointer",position:"relative",padding:"0 4px"},onClick:()=>{o(!0)},children:p.name}),(0,t.jsx)(w.U,{open:i,anchorEl:c.current,onClose:f,slotProps:{paper:{sx:{border:"1px solid #ccc",borderRadius:2,boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)"}}},anchorOrigin:{vertical:"top",horizontal:"center"},transformOrigin:{vertical:"bottom",horizontal:"center"},children:(0,t.jsxs)(a.f,{sx:{padding:"10px",backgroundColor:"white.main",maxWidth:500,zIndex:1200},children:[(0,t.jsxs)(a.f,{direction:"row",justifyContent:"space-between",marginBottom:1,children:[(0,t.jsx)(a.f,{flex:1,alignSelf:"center",children:(0,t.jsx)(l.f,{variant:"h6",sx:{color:g.f.COLOUR.secondary,fontSize:"16px"},children:"PPM Schedules"})}),(0,t.jsxs)(a.f,{flexShrink:0,direction:"row",alignSelf:"flex-start",children:[(0,t.jsx)(j.f,{href:b,target:"_blank",children:(0,t.jsx)(v.f,{children:(0,t.jsx)(y.default,{fontSize:"small"})})}),(0,t.jsx)(v.f,{onClick:e=>{e.stopPropagation(),navigator.clipboard.writeText(b)},children:(0,t.jsx)(k.default,{fontSize:"small"})}),(0,t.jsx)(v.f,{onClick:e=>{e.stopPropagation(),f()},children:(0,t.jsx)(_.default,{fontSize:"small",color:"error"})})]})]}),(0,t.jsxs)(a.f,{pr:2,gap:.5,mb:1,children:[h&&(0,t.jsxs)(l.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Customer: "})," ",h]}),x&&(0,t.jsxs)(l.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Location:"})," ",x]})]})]})})]})})}let S=e=>{try{return new URL(e).searchParams.get("id")}catch{return null}},C=e=>{let t=S(e);if(!t)return e;let r=new URL(window.location.href);return`${r.origin}/dashboard/properties/view?id=${t}&tab=planned-maintenance`};var N=i;class M extends N.w4{__url;static getType(){return"ppm-location-link"}static clone(e){return new M(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(O,{url:this.__url})}exportJSON(){return{type:"ppm-location-link",version:1,url:this.__url}}static importJSON(e){return new M(e.url)}}e.s(["r",0,function(e){return new M(e)},"p",0,M],240975);var L=e.i(257267);function E(e){let{url:r}=e,i=(0,s.useRef)(null),[o,d]=(0,s.useState)(!1),m=(0,s.useRef)(null),h=$(r),{data:{supplier:x}={supplier:null},loading:f}=(0,n.t)(L.g,{variables:{id:h},skip:!h}),b=x?.contactUsers?.[0]?.user?.fullName||"",v=x?.status==="active"?g.f.COLOUR.success:g.f.COLOUR.danger,w=()=>{d(!0),i.current&&clearTimeout(i.current)},j=()=>{i.current=setTimeout(()=>{d(!1)},300)},k=z(r);return(0,t.jsxs)(t.Fragment,{children:[x&&!f&&(0,t.jsxs)("div",{children:[(0,t.jsx)(u.f,{ref:m,title:x.name,bgcolor:v,onMouseEnter:w,onMouseLeave:j,onClick:()=>window.open(k,"_blank")}),(0,t.jsxs)(p.f,{isOpen:o,anchorEl:m.current,onMouseEnter:w,onMouseLeave:j,onClose:()=>d(!1),url:k,title:x.name,children:[(0,t.jsx)(a.f,{pr:2,gap:.5,mb:1,children:b&&(0,t.jsxs)(l.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Contact User: "})," ",b]})}),(0,t.jsx)(a.f,{direction:"row",justifyContent:"flex-end",children:(0,t.jsx)(a.f,{direction:"row",gap:1.5,alignItems:"center",children:(0,t.jsx)(a.f,{sx:{borderRadius:12,padding:"2px 12px",bgcolor:v},children:(0,t.jsx)(l.f,{color:"white.main",textTransform:"capitalize",children:x.status})})})})]})]}),!x&&!f&&(0,t.jsx)(c.f,{})]})}let $=e=>{try{return new URL(e).searchParams.get("id")}catch{return null}},z=e=>{let t=$(e);if(!t)return e;let r=new URL(window.location.href);return`${r.origin}/dashboard/suppliers/view?id=${t}`};var T=i;class A extends T.w4{__url;static getType(){return"supplier-link"}static clone(e){return new A(e.__url,e.__key)}constructor(e,t){super(t),this.__url=e}createDOM(){return document.createElement("span")}updateDOM(){return!1}decorate(){return(0,t.jsx)(E,{url:this.__url})}exportJSON(){return{type:"supplier-link",version:1,url:this.__url}}static importJSON(e){return new A(e.url)}}e.s(["s",0,function(e){return new A(e)},"f",0,A],741522)},333548,e=>{var t=e.i(391398),r=e.i(432171),i=e.i(191788),o=e.i(813843),n=e.i(115871),s=e.i(184696),a=e.i(494575),l=e.i(517279),d=e.i(624841),c=e.i(594301),u=e.i(285835),p=e.i(789860),g=e.i(887598),m=e.i(466696);let h=e=>{try{return new URL(e).searchParams.get("id")}catch{return null}};e.s(["f",0,function(e){let{url:x}=e,{user:f}=(0,c.f)(),b=(0,i.useRef)(null),[v,w]=(0,i.useState)(!1),j=(0,i.useRef)(null),k=h(x),{data:{job:[y]=[null]}={},loading:_}=(0,r.t)(l.f,{variables:{number:k,adminId:f.adminId},skip:!k}),O=(0,s.M)(y?.status),S=a.f.COLOUR[O]||"#83BBDC",C=()=>{w(!0),b.current&&clearTimeout(b.current)},N=()=>{b.current=setTimeout(()=>{w(!1)},300)},M=(e=>{let t=h(e);if(!t)return e;let r=new URL(window.location.href);return`${r.origin}/dashboard/issues/view?id=${t}`})(x);return(0,t.jsxs)(t.Fragment,{children:[_&&(0,t.jsx)(p.f,{ref:j,title:"Loading...",bgcolor:"#c7c7c7",onMouseEnter:()=>{},onMouseLeave:()=>{},onClick:()=>{}}),y&&!_&&(0,t.jsxs)("div",{children:[(0,t.jsx)(p.f,{ref:j,title:y.title||y.description,bgcolor:S,onMouseEnter:C,onMouseLeave:N,onClick:()=>window.open(M,"_blank")}),(0,t.jsxs)(g.f,{isOpen:v,anchorEl:j.current,onMouseEnter:C,onMouseLeave:N,onClose:()=>w(!1),url:M,title:`Order: J ${y.number} ${y.invoices?.[0]?.invoiceNumber?"/ "+y.invoices[0].invoiceNumber:""}`,children:[(0,t.jsxs)(o.f,{pr:2,gap:.5,mb:1,children:[(0,t.jsxs)(n.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Type:"})," ",(0,t.jsx)("span",{style:{textTransform:"capitalize"},children:y.type})]}),y.title&&(0,t.jsxs)(n.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Short Job Description:"})," ",y.title]}),y.description&&(0,t.jsxs)(n.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Description:"}),(0,t.jsx)(u.f,{maxLength:130,children:y.description})]}),y.customer&&(0,t.jsxs)(n.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Customer:"})," ",y.customer.name]}),y.location&&(0,t.jsxs)(n.f,{color:"black.main",children:[(0,t.jsx)("strong",{children:"Location:"})," ",y.location.name]})]}),(0,t.jsxs)(o.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(n.f,{mr:1,fontWeight:"bold",children:y.sla?.name}),(0,t.jsxs)(o.f,{direction:"row",gap:1.5,alignItems:"center",children:[y.manager&&(0,t.jsxs)(n.f,{variant:"subtitle2",children:["Assigned by ",y.manager.fullName]}),(0,t.jsx)(d.f,{value:y.status})]})]})]})]}),!y&&!_&&(0,t.jsx)(m.f,{})]})}])},129283,e=>{var t=e.i(391398),r=e.i(432171),i=e.i(230512),o=e.i(191788),n=e.i(428424),s=e.i(411331),a=e.i(789860),l=e.i(887598),d=e.i(813843),c=e.i(885783),u=e.i(337089),p=e.i(115871);let g=(0,o.lazy)(()=>e.A(386328).then(e=>({default:e.DetailsTaskForm}))),m=e=>{try{let t=new URL(e),r=t.searchParams.get("task_id")||t.searchParams.get("id");return Number(r)||null}catch{return null}};e.s(["f",0,function(e){let{url:h}=e,x=(0,o.useRef)(null),[f,b]=(0,o.useState)(!1),v=(0,o.useRef)(null),w=(0,s.f)(),j=new URL(window.location.href).pathname.includes("/dashboard/issues/view"),k=m(h),{data:{task:y}={task:null},loading:_}=(0,r.t)(i.N,{variables:{id:k},skip:!k}),{bgcolor:O}=n.j.find(e=>e.value===y?.status)||{bgcolor:"#83BBDC"},S=()=>{b(!0),x.current&&clearTimeout(x.current)},C=()=>{x.current=setTimeout(()=>{b(!1)},300)},N=(0,o.useCallback)(e=>{w.show({content:(0,t.jsx)(o.Suspense,{children:(0,t.jsx)(g,{id:e})}),title:"Task Details",xs3:"100vw",sm:"100vw",sm2:"100vw",sm3:"100vw",md2:"100vw",lg:"90vw",lg2:"80vw",keepPrevQueryOnOpen:!0,query:j?{task_id:e.toString()}:{id:e.toString()}})},[j,w]),M=(e=>{let t=m(e);if(!t)return e;let r=new URL(window.location.href);return r.pathname.includes("/dashboard/issues/view")?(r.searchParams.set("task_id",t.toString()),r.toString()):`${r.origin}/dashboard/tasks?id=${t}`})(h);return(0,t.jsx)(t.Fragment,{children:y&&!_&&(0,t.jsxs)("div",{children:[(0,t.jsx)(a.f,{ref:v,title:y.title,bgcolor:O,onMouseEnter:S,onMouseLeave:C,onClick:()=>k&&N(k)}),(0,t.jsxs)(l.f,{isOpen:f,anchorEl:v.current,onMouseEnter:S,onMouseLeave:C,onClose:()=>b(!1),url:M,children:[(0,t.jsx)(p.f,{variant:"h6",color:"black.main",marginBottom:1,px:.5,children:y.title}),(0,t.jsxs)(d.f,{direction:"row",justifyContent:"space-between",children:[(0,t.jsx)(c.f,{priority:y.priority}),(0,t.jsxs)(d.f,{direction:"row",gap:1.5,alignItems:"center",children:[y.assignedUser&&(0,t.jsxs)(p.f,{variant:"subtitle2",children:["Assigned by ",y.assignedUser.fullName]}),(0,t.jsx)(u.f,{status:y.status})]})]})]})]})})}])},789860,887598,466696,e=>{var t=e.i(391398),r=e.i(191788);let i=(0,r.forwardRef)((e,r)=>{let{title:i,bgcolor:o,onMouseEnter:n,onMouseLeave:s,onClick:a}=e;return(0,t.jsx)("span",{ref:r,style:{backgroundColor:"#c7c7c7",borderRadius:"4px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"6px",padding:"2px 6px",lineHeight:1.4},onMouseEnter:n,onMouseLeave:s,onClick:a,children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{style:{backgroundColor:o,width:"12px",height:"12px",borderRadius:"4px",flexShrink:0}}),(0,t.jsx)("span",{children:i})]}):(0,t.jsx)("span",{children:i})})});e.s(["f",0,i],789860);var o=e.i(270456),n=e.i(587369),s=e.i(813843),a=e.i(773831),l=e.i(322135),d=e.i(115871),c=e.i(889231),u=e.i(936066),p=e.i(480708),g=e.i(512057),m=e.i(494575);function h(e){let{isOpen:r,anchorEl:i,children:h,onMouseEnter:x,onMouseLeave:f,onClose:b,url:v,showActions:w=!0,title:j}=e,k=(0,n.f)("(max-width: 800px)");return(0,t.jsx)(o.f,{open:r,anchorEl:i,placement:"top",modifiers:[{name:"offset",options:{offset:[0,10]}}],sx:{zIndex:1500},onMouseEnter:x,onMouseLeave:f,children:(0,t.jsxs)(s.f,{sx:{padding:"10px",backgroundColor:"white.main",minWidth:k?300:"auto",width:k?"auto":500,border:"1px solid #ccc",borderRadius:2,boxShadow:"0 2px 10px rgba(0, 0, 0, 0.1)",zIndex:1500},children:[w&&(0,t.jsxs)(s.f,{direction:"row",justifyContent:j?"space-between":"flex-end",marginBottom:+!!j,children:[j&&(0,t.jsx)(s.f,{flex:1,alignSelf:"center",children:(0,t.jsx)(d.f,{variant:"h6",sx:{color:m.f.COLOUR.secondary,fontSize:"16px"},children:j})}),(0,t.jsxs)(s.f,{flexShrink:0,direction:"row",alignSelf:"flex-start",children:[v&&(0,t.jsx)(l.f,{title:"New tab",arrow:!0,children:(0,t.jsx)("span",{children:(0,t.jsx)(c.f,{href:v,target:"_blank",children:(0,t.jsx)(a.f,{children:(0,t.jsx)(p.default,{fontSize:"small"})})})})}),v&&(0,t.jsx)(l.f,{title:"Copy link",arrow:!0,children:(0,t.jsx)(a.f,{onClick:e=>{e.stopPropagation(),navigator.clipboard.writeText(v)},children:(0,t.jsx)(u.default,{fontSize:"small"})})}),b&&(0,t.jsx)(l.f,{title:"Close",arrow:!0,children:(0,t.jsx)(a.f,{onClick:e=>{e.stopPropagation(),b()},children:(0,t.jsx)(g.default,{fontSize:"small",color:"error"})})})]})]}),h]})})}e.s(["f",0,h],887598);var x=e.i(840971);e.s(["f",0,function(){let[e,i]=(0,r.useState)(!1),o=(0,r.useRef)(null),s=(0,n.f)("(max-width: 800px)"),a=()=>{i(!0)},l=()=>{i(!1)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.f,{href:"/403",sx:{textDecoration:"none",color:"black.main"},target:"_blank",children:(0,t.jsxs)("span",{ref:o,style:{backgroundColor:"#c7c7c7",borderRadius:"4px",cursor:"pointer",position:"relative",padding:"0 4px"},onMouseEnter:a,onMouseLeave:l,children:[(0,t.jsx)(x.default,{sx:{fontSize:"11px",mr:.5}}),"Private - You do not have permission to view this page"]})}),(0,t.jsx)(h,{isOpen:e,anchorEl:o.current,onMouseEnter:a,onMouseLeave:l,onClose:()=>i(!1),showActions:!1,children:(0,t.jsx)("img",{src:"/static/icons/no_access.png",style:{maxWidth:s?"300px":"500px"},alt:"Private Link"})})]})}],466696)},885783,337089,e=>{var t=e.i(391398),r=e.i(691567),i=e.i(738251),o=e.i(813843),n=e.i(115871),s=e.i(428424);let a=e=>{let{priority:r}=e,{icon:a,label:l}=s.s.find(e=>e.value===r);return(0,t.jsx)(i.f,{display:"flex",alignItems:"center",children:(0,t.jsxs)(o.f,{direction:"row",alignItems:"center",children:[a,(0,t.jsx)(n.f,{ml:1,children:l})]})})};a.propTypes={priority:r.default.string},e.s(["f",0,a],885783);var l=e.i(800884);let d=e=>{let{status:r}=e,{icon:i,label:o,color:n,bgcolor:a,value:d}=s.j.find(e=>e.value===r);return(0,t.jsx)(l.f,{size:"small",label:o,icon:i,sx:{color:n,bgcolor:a}},d)};d.propTypes={status:r.default.oneOf(["open","closed","resolved"])},e.s(["f",0,d],337089)},230512,e=>{var t=e.i(159080);let r=t.f`
  query GetTaskDetails($id: Int!) {
    task: Task_by_pk(id: $id) {
      id
      status
      priority
      statusLog
      meta
      relatedLinks
      title
      content
      editorState
      dueDate
      createdAt
      updatedAt
      adminId
      archived
      userId
      assignedAccountId
      customerId
      supplierId
      locationId
      completion_by_customer
      recurrence_series_id
      recurrence_rule
      recurrence_modified
      assignedUser: AssignedUser {
        id
        fullName
      }
      customer: Customer {
        id
        name
      }
      jobId
      workflowId
      form: FormSubmissions(where: { entity: { _eq: "Task" } }) {
        id
        formId
        formFields
        submissionData
        entity
        entityId
        type
        pdfGenerationStatus
        pdfGenerationId
        user: FormSubmissionsUser {
          id
          fullName
        }
        form: FormSubmissionsForm {
          name
          status
          description
          settings
          updatedAt
        }
      }
      job: Job {
        id
        number
        type
        quoted

        customer: Customer {
          id
          name
        }

        supplier: Supplier {
          id
          name
        }

        location: Location {
          id
          name
        }
      }
    }
  }
`,i=t.f`
  mutation CreateTask($objects: [Task_insert_input!]!) {
    insert_Task(objects: $objects) {
      returning {
        id
      }
    }
  }
`,o=t.f`
  mutation UpdateTask($id: Int!, $object: Task_set_input!) {
    update_Task_by_pk(pk_columns: { id: $id }, _set: $object) {
      id
    }
  }
`;e.s(["A",0,i,"N",0,r,"Q",0,o])},517279,e=>{var t=e.i(159080);let r=t.f`
  query GetJobLinkNode($adminId: Int!, $number: String!) {
    job: Job(where: { adminId: { _eq: $adminId }, number: { _eq: $number } }) {
      id
      number
      title
      description
      status
      type
      manager: Manager {
        id
        fullName
      }
      sla: SLA {
        id
        name
      }
      invoices: Invoices(order_by: { createdAt: desc }) {
        id
        invoiceNumber
      }
      customer: Customer {
        id
        name
      }
      location: Location {
        id
        name
      }
    }
  }
`;e.s(["f",0,r])},775279,e=>{var t=e.i(881868),r=e.i(343941),i=e.i(191788),o=e.i(391398);let n="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement,s=n?i.useLayoutEffect:i.useEffect,a={tag:"history-merge"};e.s(["f",0,function(e){let{initialConfig:l,children:d}=e,c=(0,i.useMemo)(()=>{let{theme:e,namespace:i,nodes:o,onError:s,editorState:d,html:c}=l,u=(0,t.S)(null,e),p=(0,r.k0)({editable:l.editable,html:c,namespace:i,nodes:o,onError:e=>s(e,p),theme:e});return function(e,t){if(null!==t){if(void 0===t)e.update(()=>{let t=(0,r.v0)();if(t.isEmpty()){let i=(0,r.AI)();t.append(i);let o=n?document.activeElement:null;(null!==(0,r.Pm)()||null!==o&&o===e.getRootElement())&&i.select()}},a);else if(null!==t)switch(typeof t){case"string":{let r=e.parseEditorState(t);e.setEditorState(r,a);break}case"object":e.setEditorState(t,a);break;case"function":e.update(()=>{(0,r.v0)().isEmpty()&&t(e)},a)}}}(p,d),[p,u]},[]);return s(()=>{let e=l.editable,[t]=c;t.setEditable(void 0===e||e)},[]),(0,o.jsx)(t.f.Provider,{value:c,children:d})}])},989440,766155,709610,458848,685087,372913,571761,62846,808239,144944,398829,672505,441327,682397,611206,652115,e=>{var t=e.i(881868),r=e.i(191788);let i="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;e.s(["f",0,function(e){let{ignoreHistoryMergeTagChange:r=!0,ignoreSelectionChange:o=!1,onChange:n}=e,[s]=(0,t.y)();return i(()=>{if(n)return s.registerUpdateListener(e=>{let{editorState:t,dirtyElements:i,dirtyLeaves:a,prevEditorState:l,tags:d}=e;o&&0===i.size&&0===a.size||r&&d.has("history-merge")||l.isEmpty()||n(t,s,d)})},[s,r,o,n]),null}],989440);var o=e.i(343941);let n="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement?r.useLayoutEffect:r.useEffect;e.s(["f",0,function(e){let{onClear:r}=e,[i]=(0,t.y)();return n(()=>i.registerCommand(o.Hw,e=>(i.update(()=>{if(null==r){let e=(0,o.v0)(),t=(0,o.Pm)(),r=(0,o.AI)();e.clear(),e.append(r),null!==t&&r.select(),(0,o.LU)(t)&&(t.format=0)}else r()}),!0),o.VY),[i,r]),null}],766155);let s=void 0!==window.document&&void 0!==window.document.createElement;e.s(["f",0,s],709610);var a=e.i(223607);e.s(["f",()=>a.f],458848);var l=e.i(141774);e.s(["f",()=>l.f],685087);var d=e.i(725562);e.s(["f",()=>d.f],372913);var c=e.i(709389);e.s(["f",()=>c.U],571761);var u=e.i(373748);e.s(["f",()=>u.f],62846);var p=e.i(726079);e.s(["f",()=>p.f],808239);var g=e.i(173834);e.s(["f",()=>g.f],144944);var m=e.i(607364);e.s(["f",()=>m.f],398829);var h=e.i(946954);e.s(["f",()=>h.f],672505);var x=e.i(439222);e.s(["f",()=>x.f],441327);var f=e.i(391398),b=e.i(468712),v=o;let w=e=>{let t=e.getAttribute("data-workflow-tag-trigger"),r=e.getAttribute("data-workflow-tag-label"),i=e.getAttribute("data-workflow-tag-value");return r&&i&&t?{node:k({trigger:t,label:r,value:i})}:null};class j extends v.Kl{__label;__value;__trigger;static getType(){return"workflow-tag"}static clone(e){return new j(e.__trigger,e.__label,e.__value,e.__key)}constructor(e,t,r,i){super(e+t,i),this.__trigger=e,this.__label=t,this.__value=r}static importJSON(e){let t=k({trigger:e.trigger,label:e.label,value:e.value});return t.setTextContent(e.text),t.setFormat(e.format),t.setDetail(e.detail),t.setMode(e.mode),t.setStyle(e.style),t}exportJSON(){return{...super.exportJSON(),trigger:this.__trigger,label:this.__label,value:this.__value,type:"workflow-tag",version:1}}createDOM(e){let t=super.createDOM(e);return t.className="editor-text-workflow-tag",t}exportDOM(){let e=document.createElement("span");return e.setAttribute("data-lexical-workflow-tag","true"),e.setAttribute("data-workflow-tag-trigger",this.__trigger),e.setAttribute("data-workflow-tag-label",this.__label),e.setAttribute("data-workflow-tag-value",this.__value),e.textContent=this.__text,{element:e}}static importDOM(){return{span:e=>e.hasAttribute("data-lexical-workflow-tag")?{conversion:w,priority:1}:null}}isTextEntity(){return!0}canInsertTextBefore(){return!1}canInsertTextAfter(){return!1}}function k(e){let{trigger:t,label:r,value:i}=e,o=new j(t,r,i);return o.setMode("segmented").toggleDirectionless(),(0,v.kE)(o)}e.s(["E",0,k,"H",0,j],682397);var y=e.i(715007),_=e.i(34121),O=e.i(40303),S=e.i(88152),C=e.i(270456),N=e.i(388866);let M=(0,r.createContext)({availableTags:[]}),L=()=>(0,r.useContext)(M);e.s(["U",0,function(e){let{children:t,availableTags:r}=e;return(0,f.jsx)(M.Provider,{value:{availableTags:r},children:t})},"o",0,L],611206);var E=e.i(974261);class $ extends b.H{label;value;constructor(e,t){super(e),this.label=e,this.value=t}}function z(e){let{index:t,isSelected:r,onClick:i,onMouseEnter:o,option:n}=e;return(0,f.jsx)(y.f,{classes:{root:r?"item selected":"item"},id:"tag-typeahead-item-"+t,disablePadding:!0,onMouseEnter:o,onClick:i,children:(0,f.jsx)(_.f,{children:(0,f.jsx)(O.f,{primary:`${n.label}`})})},n.key)}e.s(["f",0,function(){let{availableTags:e}=L(),[i]=(0,t.y)(),[n,s]=(0,r.useState)(""),a=(0,r.useCallback)(e=>{let t=e.match(/@([\w\s]*)$/);return null!==t?{leadOffset:t.index??0,matchingString:t[1],replaceableString:t[0]}:null},[]),l=(0,r.useMemo)(()=>{let t=[...e];return"production"!==E.n.environment&&t.unshift({label:"Add all tags",value:"addAllTags"}),t.map(e=>new $(e.label,e.value))},[e]),d=(0,r.useMemo)(()=>{let e=n?.trim();return e?l.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())):l},[l,n]),c=(0,r.useCallback)((e,t,r)=>{i.update(()=>{let i=k({trigger:"@",label:e.label,value:e.value});t&&t.replace(i);let n=(0,o.cD)(" ");i.insertAfter(n),n.select(),r()})},[i]);return(0,f.jsx)(b.l,{onQueryChange:s,onSelectOption:c,triggerFn:a,options:d,menuRenderFn:(e,t)=>{let{selectedIndex:r,selectOptionAndCleanUp:i,setHighlightedIndex:o,options:n}=t;return e.current&&n.length?(0,f.jsx)(C.f,{open:!0,anchorEl:e.current,keepMounted:!0,placement:"bottom-start",style:{zIndex:1e4},modifiers:[{name:"preventOverflow",enabled:!0,options:{altAxis:!0,altBoundary:!0,tether:!0,rootBoundary:"document"}}],children:(0,f.jsx)(S.f,{sx:{width:"auto",maxHeight:"50vh",overflow:"auto",fontFamily:"Nunito-Regular","& *":{fontFamily:"Nunito-Regular"}},children:(0,f.jsx)(N.f,{dense:!0,sx:{width:"100%",overflow:"auto",maxWidth:360,bgcolor:"background.paper"},children:n.length>0?n.map((e,t)=>(0,f.jsx)(z,{index:t,isSelected:r===t,onClick:()=>{"production"!==E.n.environment&&"addAllTags"===e.value?n.filter(e=>"addAllTags"!==e.value).forEach(e=>{i(e)}):(o(t),i(e))},onMouseEnter:()=>{o(t)},option:e},e.value)):(0,f.jsx)(y.f,{children:(0,f.jsx)(O.f,{primary:"No matching tags found"})})})})}):null}})}],652115)},214710,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=i(e.r(421506)),n=e.r(391398);r.default=(0,o.default)((0,n.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zM6 20V4h7v5h5v11z"}),"InsertDriveFileOutlined")},936066,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=i(e.r(421506)),n=e.r(391398);r.default=(0,o.default)((0,n.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1M8 13h8v-2H8zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5"}),"Link")},840971,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=i(e.r(421506)),n=e.r(391398);r.default=(0,o.default)((0,n.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9zm9 14H6V10h12zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2"}),"LockOutlined")},480708,(e,t,r)=>{var i=e.r(978509);Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=i(e.r(421506)),n=e.r(391398);r.default=(0,o.default)((0,n.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"}),"OpenInNew")}])})();