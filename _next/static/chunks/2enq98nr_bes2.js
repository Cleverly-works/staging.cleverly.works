(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[510364,716699,e=>{var t=e.i(391398),a=e.i(645691),r=e.i(740472),n=e.i(55261),o=e.i(738251),i=e.i(115871),s=e.i(530852),l=e.i(887771),d=e.i(978760),c=e.i(886764),u=e.i(709848),m=e.i(681542),p=e.i(322135),h=e.i(968502),f=e.i(362537);let g={week:"Last 7 days",twoWeeks:"Last 14 days",month:"Last 30 days",year:"Year"},I=e=>Object.keys(e.data[0]).includes("name")&&Object.keys(e.data[0]).includes("value"),y=e=>Object.keys(e.data[0]).includes("date")&&Object.keys(e.data[0]).includes("values"),x=e=>Object.keys(e.data[0]).includes("date")&&Object.keys(e.data[0]).includes("sum"),$=e=>{let{data:a}=e;return(0,t.jsx)(o.f,{sx:{display:"flex",marginLeft:4},children:a.map((e,a)=>(0,t.jsxs)(o.f,{sx:{display:"flex",alignItems:"center",marginLeft:1},children:[(0,t.jsx)(h.default,{sx:{color:e.color,borderRadius:"2px"}}),(0,t.jsx)(i.f,{sx:{marginLeft:1},children:e.label})]},a))})},b=e=>{let{data:a,timeRange:r,selectedGroupName:n}=e,h=a.today||[],f=a[r]||[],I=h.find(e=>e.groupName===n),y=f.find(e=>e.groupName===n);if(!I||!y)return null;let x=I.chartData.map((e,t)=>{let a=y.chartData[t]||{},r=e.data[0],n=a.data[0],o=0;return r>n&&r>0?o=Math.round((r-n)/r*100):n>0&&(o=-Math.round((n-r)/n*100)),{...e,percent:o,color:r>n?"#00C853":"#F24236"}});return(0,t.jsx)(s.f,{component:o.f,children:(0,t.jsxs)(l.f,{size:"small",className:"value",children:[(0,t.jsx)(d.f,{children:(0,t.jsxs)(u.f,{children:[(0,t.jsx)(m.f,{children:"Source"}),(0,t.jsx)(m.f,{align:"right",children:"Today"}),(0,t.jsxs)(m.f,{align:"right",children:["For the ",String(g[r]).toLowerCase()]})]})}),(0,t.jsx)(c.f,{children:x.map((e,a)=>(0,t.jsxs)(u.f,{children:[(0,t.jsx)(m.f,{component:"th",scope:"row",children:e.label}),(0,t.jsx)(m.f,{align:"right",children:I.chartData[a].data}),(0,t.jsx)(m.f,{align:"right",children:(0,t.jsx)(p.f,{title:`In ${g[r]} ago it was ${y.chartData[a].data}`,children:(0,t.jsx)(i.f,{sx:{color:e.color},children:e.percent>0?`+${e.percent}%`:`${e.percent}%`})})})]},a))})]})})};e.s(["E",0,g,"t",0,e=>{let t=parseInt(e,10);return{startDate:(0,f.default)().year(t).startOf("year").toISOString(),endDate:(0,f.default)().year(t).endOf("year").toISOString()}},"N",0,()=>{let e=[];for(let t=0;t<=4;t++)e.push((0,f.default)().subtract(t,"years").year().toString());return[...e]},"w",0,y,"x",0,I,"v",0,x,"V",0,b,"F",0,$],716699);var v=e.i(48441),j=e.i(184696),M=e.i(494575);let C={maintainAspectRatio:!1,aspectRatio:1,responsive:!0,plugins:{legend:{display:!0,position:"top"}},scales:{x:{stacked:!0,grid:{color:"transparent"}},y:{stacked:!0,grid:{display:!0},beginAtZero:!0,ticks:{precision:0}}}};function S(e,t,a){let r=e?.[t];if(!r)return[];let n=r.find(e=>e.groupName===a);return n?.chartData?.[0]?.data??[]}r.J.register(...r.Q);let T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],D=e=>{if(null==e)return null;if(e instanceof Date)return e.getMonth();let t=String(e),a=t.match(/^(\d{4})-(\d{2})/);if(a&&a[2]){let e=parseInt(a[2],10);if(e>=1&&e<=12)return e-1}let r=t.match(/^(\d{4})(\d{2})$/);if(r&&r[2]){let e=parseInt(r[2],10);if(e>=1&&e<=12)return e-1}let n=new Date(t);return isNaN(n.getTime())?null:n.getMonth()},_=(e,t,a)=>{let r=new Date,n=r.getFullYear().toString();if(!e||e!==n)return{labels:t,datasets:a};let o=r.getMonth()+1;return{labels:t.slice(0,o),datasets:a.map(e=>({...e,data:e.data.slice(0,o)}))}};function k(e){if(null==e||isNaN(e))return"00:00";let t=Math.abs(e),a=Math.floor(t/60),r=Math.round(t%60),n=a.toString().padStart(2,"0"),o=r.toString().padStart(2,"0");return`${n}:${o}`}function w(e){switch(e){case"earlier30d":return"30 days";case"earlier90d":return"90 days";case"earlier1y":return"1 year";default:return""}}e.s(["y",0,function(e){if(null==e||isNaN(e))return null;let t=Math.abs(e),a=Math.floor(t),r=Math.round(60*(t-a)),n=60*a+r;return e<0?-n:n},"F",0,e=>{let{asAt:r,name:o,timeRange:i,selectedGroupName:s,data:l,selectedHistoricalOption:d,historicalData:c=[],selectedYear:u,showReactive:m=!0,showPpm:p=!0,showQuote:h=!0}=e,f=a.e,g=null,N=null,A=!0,z={labels:[],datasets:[]},E={};switch(o){case"chartJobMetrics":if(f=a.e,E={maintainAspectRatio:!1,plugins:{aspectRatio:1,responsive:!0,legend:{display:!1}},scales:{y:{grid:{display:!0},stacked:!1,ticks:{stepSize:2}},x:{stacked:!1,grid:{color:"transparent"}}}},l&&l[i]){let e=l[i].find(e=>e.groupName===s);e&&(g=$({data:e.chartData}),e.chartData.forEach(e=>{if("object"==typeof e.data&&e.data.length){if(I(e)){let t=[],a=[],r=[];e.data.forEach(n=>{t.push(n.name),a.push(n.value),r.push(e.color)}),z.labels=t.map((e,t)=>`${t+1} - ${e}`),z.datasets.push({label:e.label,data:a,backgroundColor:r})}else if(y(e)){let t=[],a=[];e.data.forEach(e=>{t.push((0,n.f)(new Date(e.date),e.formatDate||"dd/MM")),a.push(e.values.length)}),z.labels=t,z.datasets.push({label:e.label,data:a,backgroundColor:e.color,barPercentage:.75,categoryPercentage:.5})}else if(x(e)){let t=[],a=[];e.data.forEach(e=>{t.push((0,n.f)(new Date(e.date),e.formatDate||"dd/MM"));let r=e.sum.reduce((e,t)=>e+t,0);a.push(r)}),z.labels=t,z.datasets.push({label:e.label,data:a,backgroundColor:e.color,barPercentage:.75,categoryPercentage:.5})}}else z.datasets.push({label:e.label,data:e.data,backgroundColor:e.color,barPercentage:.75,categoryPercentage:.5})}))}break;case"numberOfNotifications":if(f=a.K,l&&l[i]){let e=l[i].find(e=>e.groupName===s);if(e){N=b({data:l,timeRange:i,selectedGroupName:s});let t=[],a=[],r=[];e.chartData.forEach(e=>{t.push(e.label),a.push(e.data),r.push(e.color)}),z.labels.push(...t),z.datasets.push({data:a,backgroundColor:r,cutout:120})}E={plugins:{aspectRatio:1,responsive:!0,legend:{display:!1}}}}break;case"chartAverageTimeToAttendSite":if(f=a.R,E={maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{aspectRatio:1,responsive:!0,legend:{display:!1},tooltip:{callbacks:{label:e=>{let t=e.dataset.label||"",a=k(e.parsed.y),r=e.dataset.originalData,n=r&&r[e.dataIndex],o=t.includes("(Historical)");if(n&&o){let e=n.actualDate||"";if(e&&d){let r=w(d),n=t.replace(" (Historical)","");return`${n} (${r} earlier: ${e}): ${a}`}}return`${t}: ${a}`}}}},scales:{y:{grid:{display:!0},ticks:{callback:e=>k(e)},title:{display:!0,text:"Average time (hours:minutes)"}},x:{grid:{display:!0},title:{display:!0,text:"Date"}}}},l&&l[i]){let e=l[i].find(e=>e.groupName===s);if(e){let t=!1;if(e.chartData.forEach(e=>{"object"==typeof e.data&&e.data.length&&e.data.forEach(a=>{null!=(e.valueKey?a[e.valueKey]:null)&&(t=!0)})}),!t){A=!1;break}g=$({data:e.chartData});let a=[];if(e.chartData.length>0&&e.chartData[0].data&&(e.chartData[0].data.forEach(e=>{a.push((0,n.f)(new Date(e.date),e.formatDate||"dd/MM"))}),z.labels=a),e.chartData.forEach(e=>{if("object"==typeof e.data&&e.data.length){let t=[],a=[],r=[];e.data.forEach(n=>{let o=e.valueKey?n[e.valueKey]:null;t.push(null==o?void 0:o),a.push(n),r.push(3*(null!=o))}),z.datasets.push({label:e.label,data:t,originalData:a,borderColor:e.color,backgroundColor:e.color,tension:.1,spanGaps:!0,pointRadius:r,pointHoverRadius:5,fill:!1,showLine:!0,pointBackgroundColor:e.color,pointBorderColor:e.color,pointBorderWidth:2})}}),d&&""!==d&&c.length>0&&l[i]&&l[i].length>0){let e=l[i].find(e=>e.groupName===s);e&&e.chartData.forEach(e=>{if("object"==typeof e.data&&e.data.length){let t=[],a=[],r=[];e.data.forEach((o,i)=>{let s=null,l=null;if(Array.isArray(c)&&c.length>i){let t=c[i];t&&"object"==typeof t?(s=t[e.valueKey],l=t):(s=t,l={value:t})}t.push(null==s?void 0:s);let d=l?{...l,date:o.date,actualDate:l.actualDate?(0,n.f)(new Date(l.actualDate),"dd/MM"):o.actualDate,formatDate:o.formatDate}:o;a.push(d),r.push(2*(null!=s))}),z.datasets.push({label:`${e.label} (Historical)`,data:t,originalData:a,borderColor:e.color,backgroundColor:e.color,borderDash:[5,5],tension:.1,spanGaps:!0,pointRadius:r,pointHoverRadius:4,fill:!1,showLine:!0,pointBackgroundColor:e.color,pointBorderColor:e.color,pointBorderWidth:1})}})}}}break;case"chartAverageTimeToReceiveReport":if(f=a.R,E={maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{aspectRatio:1,responsive:!0,legend:{display:!1},tooltip:{callbacks:{label:e=>{let t=e.dataset.label||"",a=k(e.parsed.y),r=e.dataset.originalData,n=r&&r[e.dataIndex],o=t.includes("(Historical)");if(n&&o){let e=n.actualDate||"";if(e&&d){let r=w(d),n=t.replace(" (Historical)","");return`${n} (${r} earlier: ${e}): ${a}`}}return`${t}: ${a}`}}}},scales:{y:{grid:{display:!0},ticks:{callback:e=>k(e)},title:{display:!0,text:"Average time (hours:minutes)"}},x:{grid:{display:!0},title:{display:!0,text:"Date"}}}},l&&l[i]){let e=l[i].find(e=>e.groupName===s);if(e){let t=!1;if(e.chartData.forEach(e=>{"object"==typeof e.data&&e.data.length&&e.data.forEach(a=>{null!=(e.valueKey?a[e.valueKey]:null)&&(t=!0)})}),!t){A=!1;break}g=$({data:e.chartData});let a=[];if(e.chartData.length>0&&e.chartData[0].data&&(e.chartData[0].data.forEach(e=>{a.push((0,n.f)(new Date(e.date),e.formatDate||"dd/MM"))}),z.labels=a),e.chartData.forEach(e=>{if("object"==typeof e.data&&e.data.length){let t=[],a=[];e.data.forEach(r=>{let n=e.valueKey?r[e.valueKey]:null;t.push(null===n?void 0:n),a.push(r)}),z.datasets.push({label:e.label,data:t,originalData:a,borderColor:e.color,backgroundColor:e.color,tension:.1,spanGaps:!0,pointRadius:3,pointHoverRadius:5,fill:!1,showLine:!0,pointBackgroundColor:e.color,pointBorderColor:e.color,pointBorderWidth:2})}}),d&&""!==d&&c.length>0&&l[i]&&l[i].length>0){let e=l[i].find(e=>e.groupName===s);e&&e.chartData.forEach(e=>{if("object"==typeof e.data&&e.data.length){let t=[],a=[],r=[];e.data.forEach((o,i)=>{let s=null,l=null;if(Array.isArray(c)&&c.length>i){let t=c[i];t&&"object"==typeof t?(s=t[e.valueKey],l=t):(s=t,l={value:t})}t.push(null==s?void 0:s);let d=l?{...l,date:o.date,actualDate:l.actualDate?(0,n.f)(new Date(l.actualDate),"dd/MM"):o.actualDate,formatDate:o.formatDate}:o;a.push(d),r.push(2*(null!=s))}),z.datasets.push({label:`${e.label} (Historical)`,data:t,originalData:a,borderColor:e.color,backgroundColor:e.color,borderDash:[5,5],tension:.1,spanGaps:!0,pointRadius:r,pointHoverRadius:4,fill:!1,showLine:!0,pointBackgroundColor:e.color,pointBorderColor:e.color,pointBorderWidth:1})}})}}}break;case"chartAverageTimeToSendReportCustomer":if(f=a.R,E={responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},plugins:{aspectRatio:1,legend:{display:!1},tooltip:{callbacks:{label:e=>{let t=e.dataset.label||"",a=k(e.parsed.y),r=e.dataset.originalData,n=r&&r[e.dataIndex],o=t.includes("(Historical)");if(n&&o){let e=n.actualDate||"";if(e&&d){let r=w(d),n=t.replace(" (Historical)","");return`${n} (${r} earlier: ${e}): ${a}`}}return`${t}: ${a}`}}}},scales:{y:{beginAtZero:!0,grid:{display:!0},ticks:{callback:e=>k(e)},title:{display:!0,text:"Average time (hours:minutes)"}},x:{grid:{display:!0},title:{display:!0,text:"Date"}}}},l&&l[i]){let e=l[i].find(e=>e.groupName===s);if(e){let t=!1;if(e.chartData.forEach(e=>{"object"==typeof e.data&&e.data.length&&e.data.forEach(a=>{null!=(e.valueKey?a[e.valueKey]:null)&&(t=!0)})}),!t){A=!1;break}g=$({data:e.chartData});let a=[];if(e.chartData.length>0&&e.chartData[0].data&&(e.chartData[0].data.forEach(e=>{a.push((0,n.f)(new Date(e.date),e.formatDate||"dd/MM"))}),z.labels=a),e.chartData.forEach(e=>{if("object"==typeof e.data&&e.data.length){let t=[],a=[],r=[];e.data.forEach(n=>{let o=e.valueKey?n[e.valueKey]:null;t.push(null==o?void 0:o),a.push(n),r.push(3*(null!=o))}),z.datasets.push({label:e.label,data:t,originalData:a,borderColor:e.color,backgroundColor:e.color,tension:.1,spanGaps:!0,pointRadius:r,pointHoverRadius:5,fill:!1,showLine:!0,pointBackgroundColor:e.color,pointBorderColor:e.color,pointBorderWidth:2})}}),d&&""!==d&&c.length>0&&l[i]&&l[i].length>0){let e=l[i].find(e=>e.groupName===s);e&&e.chartData.forEach(e=>{if("object"==typeof e.data&&e.data.length){let t=[],a=[],r=[];e.data.forEach((o,i)=>{let s=null,l=null;if(Array.isArray(c)&&c.length>i){let t=c[i];t&&"object"==typeof t?(s=t[e.valueKey],l=t):(s=t,l={value:t})}t.push(null==s?void 0:s);let d=l?{...l,date:o.date,actualDate:l.actualDate?(0,n.f)(new Date(l.actualDate),"dd/MM"):o.actualDate,formatDate:o.formatDate}:o;a.push(d),r.push(2*(null!=s))}),z.datasets.push({label:`${e.label} (Historical)`,data:t,originalData:a,borderColor:e.color,backgroundColor:e.color,borderDash:[5,5],tension:.1,spanGaps:!0,pointRadius:r,pointHoverRadius:4,fill:!1,showLine:!0,pointBackgroundColor:e.color,pointBorderColor:e.color,pointBorderWidth:1})}})}}}break;case"chartJobPerformanceByMonth":{f=a.e,E=C;let e=S(l,i,s),t=Array(12).fill(0),r=Array(12).fill(0),n=Array(12).fill(0);e.forEach(e=>{let a=D(e.yearMonth);if(null!==a)if("string"==typeof e.type)"reactive"===e.type?(t[a]+=Number(e.totalCount??0),n[a]+=Number(e.slaBreachedCount??0)):"ppm"===e.type&&(r[a]+=Number(e.totalCount??0));else{if(void 0!==e.reactiveTotalCount||void 0!==e.ppmTotalCount)t[a]+=Number(e.reactiveTotalCount??0),r[a]+=Number(e.ppmTotalCount??0);else if(void 0!==e.totalCount){let n=Number(e.totalCount);t[a]+=n,r[a]+=n}n[a]+=Number(e.slaBreachedCount??0)}});let o=Array(12).fill(0).map((e,t)=>m||p?n[t]:0),d=Array(12).fill(0).map((e,a)=>m?Math.max(t[a]-n[a],0):0),c=Array(12).fill(0).map((e,t)=>p?r[t]:0),h=_(u,T,[{data:o},{data:d.map((e,t)=>e+c[t])}]);z.labels=h.labels,z.datasets.push({label:"SLA breaches",data:h.datasets[0]?.data||[],backgroundColor:"#E60811",stack:"jobs"}),z.datasets.push({label:"Target achieved",data:h.datasets[1]?.data||[],backgroundColor:"#0679D8",stack:"jobs"}),A=e.length>0;break}case"chartJobsByStatusByYear":{f=a.u;let e=S(l,i,s),t=new Set;m&&t.add("reactive"),p&&t.add("ppm"),h&&t.add("quote");let r=new Map;e.forEach(e=>{let a=e.type;if(!a||!t.has(a))return;let n=e.status??e.statusname??e.name;if(!n)return;let o=Number(e.count??0);o<=0||r.set(n,(r.get(n)??0)+o)});let n=[],o=[],d=[],c=[...v.E,...v.o,...v.w,...v.y];r.forEach((e,t)=>{let a=c.find(e=>e.value===t),r=a?.text||a?.label||String(t),i=(0,j.M)(t),s=M.f.COLOUR[i]??"#999999";n.push(r),o.push(e),d.push(s)}),z.labels=n,z.datasets.push({data:o,backgroundColor:d}),E={maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"right"},tooltip:{callbacks:{label:e=>{let t=e.label||"",a=e.parsed,r=(e.dataset?.data||[]).reduce((e,t)=>e+(Number(t)||0),0),n=r>0?Math.round(a/r*100):0;return`${t}: ${a} (${n}%)`}}}}},A=o.length>0;break}case"chartPpmOutcomeByMonth":{f=a.e,E=C;let e=S(l,i,s),t=Array(12).fill(0),r=Array(12).fill(0);e.forEach(e=>{let a=D(e.yearMonth);null!==a&&(t[a]+=Number(e.totalCount??0),r[a]+=Number(e.missedServiceWindowCount??0))});let n=t.map((e,t)=>Math.max(e-r[t],0)),o=_(u,T,[{data:r},{data:n}]);z.labels=o.labels,z.datasets.push({label:"Missed service window",data:o.datasets[0]?.data||[],backgroundColor:"#E60811",stack:"ppm"}),z.datasets.push({label:"Target achieved",data:o.datasets[1]?.data||[],backgroundColor:"#0679D8",stack:"ppm"}),A=e.length>0;break}case"chartComplianceItemsByMonth":{f=a.e,E=C;let e=S(l,i,s),t=Array(12).fill(0),r=Array(12).fill(0);e.forEach(e=>{let a=D(e.yearMonth);null!==a&&(t[a]+=Number(e.compliantCount??0),r[a]+=Number(e.nonCompliantCount??0))});let n=_(u,T,[{data:r},{data:t}]);z.labels=n.labels,z.datasets.push({label:"Non-compliant",data:n.datasets[0]?.data||[],backgroundColor:"#E60811",stack:"compliance"}),z.datasets.push({label:"Compliant",data:n.datasets[1]?.data||[],backgroundColor:"rgb(0, 180, 60)",stack:"compliance"}),A=e.length>0}}return{chart:()=>(0,t.jsx)(f,{data:z,options:E}),shortLegend:()=>g,longLegend:()=>N,hasData:A}}],510364)},156612,331387,354565,755691,e=>{var t=e.i(391398),a=e.i(191788),r=e.i(437994),n=e.i(738251),o=e.i(220490),i=e.i(119209),s=e.i(106850),l=e.i(539117),d=e.i(901004),c=e.i(115871),u=e.i(322135),m=e.i(755548),p=e.i(799083),h=e.i(152078),f=e.i(813843),g=e.i(144097),I=e.i(877341),y=e.i(760814),x=e.i(510364),$=e.i(716699),b=e.i(458374);let v=["chartJobPerformanceByMonth","chartJobsByStatusByYear","chartPpmOutcomeByMonth","chartComplianceItemsByMonth"],j={chartJobPerformanceByMonth:{query:b.D,responseKey:"chartJobPerformanceByMonth"},chartJobsByStatusByYear:{query:b.b,responseKey:"chartJobsByStatusByYear"},chartPpmOutcomeByMonth:{query:b.E,responseKey:"chartPpmOutcomeByMonth"},chartComplianceItemsByMonth:{query:b.a,responseKey:"chartComplianceItemsByMonth"}},M=(0,y.U)(l.f).withConfig({displayName:"chart__StyledSelect",componentId:"sc-841212ce-0"})`
  .MuiSelect-select {
    padding: 0;
    font-size: 14px !important;
  }
  & * {
    font-size: 14px !important;
    border: 0;
    border-width: 0 !important;
  }
`,C=(0,y.U)(o.f).withConfig({displayName:"chart__StyledCard",componentId:"sc-841212ce-1"})`
  min-width: 300px;
  width: 100%;
  height: calc(400px * ${e=>e.size[1]});

  & .MuiCardHeader-root {
    padding: 16px 16px 0 16px;
  }

  &.MuiPaper-root {
    overflow-x: scroll;
  }
`,S=y.U.div.withConfig({displayName:"chart__StyledCardArea",componentId:"sc-841212ce-2"})`
  position: relative;
`,T=(0,y.U)(i.f).withConfig({displayName:"chart__StyledCardHeader",componentId:"sc-841212ce-3"})`
  .MuiCardHeader-content {
    flex-shrink: 0;
  }

  & .MuiTypography-root {
    font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};
    font-size: 1.063rem !important;
    color: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFontColor}};
  }
`,D=(0,y.U)(s.f).withConfig({displayName:"chart__StyledCardContent",componentId:"sc-841212ce-4"})`
  min-width: 700px;

  font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};

  max-height: 360px;

  .value {
    font-size: 1.5rem !important;
  }
  display: flex;
  flex-direction: column;
`,_=(0,y.U)(s.f).withConfig({displayName:"chart__StyledCardContentWithLegend",componentId:"sc-841212ce-5"})`
  min-width: 700px;

  font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};

  max-height: 360px;

  .value {
    font-size: 1.5rem !important;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,k=(0,y.n)(e=>{let o,i,s,l,{asAt:y=new Date,title:k,description:w=e.title,showLegend:N=!1,size:A=1,name:z="",data:E={},theme:R,sx:P,historicalComparison:B,queryParams:L}=e,[H,O]=(0,a.useState)("week"),[J,Y]=(0,a.useState)(B?.defaultOption||""),[F,q]=(0,a.useState)([]),[U,G]=(0,a.useState)({groupName:E[H]?.[0]?.groupName,groupLabel:E[H]?.[0]?.groupLabel,groupDescription:E[H]?.[0]?.groupDescription}),[K,W]=(0,a.useState)(null),Z=v.includes(z),V=(0,a.useMemo)(()=>Z?(0,$.N)():[],[Z]),Q=(0,a.useMemo)(()=>new Date().getFullYear().toString(),[]),[X,ee]=(0,a.useState)(Q),[et,ea]=(0,a.useState)(null),[er,en]=(0,a.useState)(!0),[eo,ei]=(0,a.useState)(!0),[es,el]=(0,a.useState)(!0),ed=Z?j[z]:null,[ec]=(0,I.f)(ed?.query||b.D,{onCompleted:e=>{ed&&ea(e?.[ed.responseKey]||[])},fetchPolicy:"cache-and-network"});(0,a.useEffect)(()=>{if(!Z||!ed)return;if(X===Q)return void ea(null);let{startDate:e,endDate:t}=(0,$.t)(X);ec({variables:{...L||{},startTime:e,endTime:t}})},[X,Z,ed,L,Q,ec]);let eu=(0,a.useMemo)(()=>"chartAverageTimeToAttendSite"===z?b.i:"chartAverageTimeToReceiveReport"===z?b.S:"chartAverageTimeToSendReportCustomer"===z?b.J:null,[z]),[em]=(0,I.f)(eu||b.i,{onCompleted:e=>{q(e?.data?.[0]?.data||[])},fetchPolicy:"cache-and-network"});(0,a.useEffect)(()=>{B?.enabled&&J&&""!==J&&L&&eu?em({variables:{...L,asAt:y,period:J}}):q([])},[J,B,L,y,eu,em]),(0,a.useEffect)(()=>{"customersBySpend"===U.groupName||"revenuesPerYear"===U.groupName||Z?O("year"):O("week")},[U,Z]);let ep=(0,a.useMemo)(()=>{if(Z&&!U.groupName){let e=E?.year?.[0];if(e)return{groupName:e.groupName,groupLabel:e.groupLabel,groupDescription:e.groupDescription}}return U},[Z,U,E]),eh=(0,a.useMemo)(()=>{if(!Z||!et)return E;let e=E?.year;return Array.isArray(e)&&e.length?{...E,year:e.map(e=>({...e,chartData:(e.chartData||[]).map((e,t)=>0===t?{...e,data:et}:e)}))}:E},[Z,et,E]),ef=Z?"year":H,{chart:eg,shortLegend:eI,longLegend:ey,hasData:ex}=(0,x.F)({asAt:y,name:z,timeRange:ef,selectedGroupName:ep.groupName,data:eh,theme:R,showLegend:N,selectedHistoricalOption:J,historicalData:F,selectedYear:X,showReactive:er,showPpm:eo,showQuote:es});return(0,t.jsx)(C,{size:A,sx:P,children:(0,t.jsxs)(S,{children:[(0,t.jsx)(T,{title:(o=Object.keys(E).reduce((e,t)=>(e.push(...E[t].map(e=>({groupName:e.groupName,groupLabel:e.groupLabel,groupDescription:e.groupDescription}))),e),[]),i=(0,r.default)(o,e=>e.groupName),s=U.groupLabel||k,l=U.groupDescription||w,i.length>1?(0,t.jsxs)(n.f,{sx:{display:"flex",alingItems:"center"},children:[(0,t.jsx)(M,{size:"small",value:U.groupName,onChange:e=>{G(i.find(t=>t.groupName===e.target.value))},children:i.map(e=>(0,t.jsx)(d.f,{value:e.groupName,children:e.groupLabel}))}),(0,t.jsx)(u.f,{title:l,open:K===l,onClose:()=>W(null),disableFocusListener:!0,disableTouchListener:!0,children:(0,t.jsx)(g.default,{onClick:()=>W(K===l?null:l),onMouseEnter:()=>W(l),onMouseLeave:()=>W(null),sx:{fontSize:"200",marginLeft:.5,color:"#cfd9e0",cursor:"pointer"}})}),eI&&eI()]}):(0,t.jsxs)(n.f,{sx:{display:"flex",alingItems:"center"},children:[Z?(0,t.jsx)(M,{size:"small",variant:"standard",color:"secondary",value:X,onChange:e=>ee(e.target.value),onClick:e=>e.stopPropagation(),sx:{minWidth:80,mr:1},children:V.map(e=>(0,t.jsx)(d.f,{value:e,sx:{fontSize:"14px"},children:e},e))}):null,(0,t.jsx)(c.f,{sx:{flexShrink:0},children:s}),(0,t.jsx)(u.f,{title:l,open:K===l,onClose:()=>W(null),disableFocusListener:!0,disableTouchListener:!0,children:(0,t.jsx)(g.default,{onClick:()=>W(K===l?null:l),onMouseEnter:()=>W(l),onMouseLeave:()=>W(null),sx:{fontSize:"200",marginLeft:.5,color:"#cfd9e0",cursor:"pointer"}})}),eI&&eI()]})),action:(()=>{if(Z){if("chartJobPerformanceByMonth"===z)return(0,t.jsxs)(f.f,{direction:"row",spacing:1,mr:2,onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(h.f,{control:(0,t.jsx)(p.f,{color:"secondary",size:"small",checked:er,onChange:e=>en(e.target.checked)}),label:"Reactive",sx:{mr:.5}}),(0,t.jsx)(h.f,{control:(0,t.jsx)(p.f,{color:"secondary",size:"small",checked:eo,onChange:e=>ei(e.target.checked)}),label:"Planned maintenance"})]});if("chartJobsByStatusByYear"===z)return(0,t.jsxs)(f.f,{direction:"row",spacing:1,mr:2,onClick:e=>e.stopPropagation(),children:[(0,t.jsx)(h.f,{control:(0,t.jsx)(p.f,{color:"secondary",size:"small",checked:er,onChange:e=>en(e.target.checked)}),label:"Reactive",sx:{mr:.5}}),(0,t.jsx)(h.f,{control:(0,t.jsx)(p.f,{color:"secondary",size:"small",checked:eo,onChange:e=>ei(e.target.checked)}),label:"Planned maintenance",sx:{mr:.5}}),(0,t.jsx)(h.f,{control:(0,t.jsx)(p.f,{color:"secondary",size:"small",checked:es,onChange:e=>el(e.target.checked)}),label:"Quotes"})]})}if(!ex)return null;if(B?.enabled)return(0,t.jsx)(n.f,{display:"flex",mt:.75,mr:2.5,ml:2,children:(0,t.jsx)(M,{displayEmpty:!0,variant:"standard",color:"secondary",size:"small",value:J,onChange:e=>Y(e.target.value),MenuProps:{PaperProps:{sx:{"& .MuiMenuItem-root":{fontSize:"14px"}}}},sx:{color:""===J?"rgba(0, 0, 0, 0.6)":"inherit","& .MuiSelect-select":{color:""===J?"rgba(0, 0, 0, 0.6)":"inherit"}},children:B.options.map(e=>(0,t.jsx)(d.f,{value:e.value,sx:{fontSize:"14px",color:""===e.value?"rgba(0, 0, 0, 0.6)":"inherit"},children:e.label},e.value))})});let e=Object.keys($.E);return"customersBySpend"===U.groupName||"revenuesPerYear"===U.groupName?e.splice(0,e.length-1):e.splice(-1,1),(0,t.jsx)(n.f,{display:"flex",children:e.map((e,a)=>(0,t.jsx)(m.f,{color:"secondary",sx:{textTransform:"none"},onClick:e=>O(e.target.value),value:e,disabled:H===e,children:$.E[e]},a))})})()}),ex?ey()?(0,t.jsxs)(_,{children:[(0,t.jsx)(n.f,{children:eg()}),(0,t.jsx)(n.f,{ml:3,children:ey()})]}):(0,t.jsx)(D,{children:eg()}):(0,t.jsx)(D,{children:(0,t.jsx)(n.f,{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",minHeight:"300px",children:(0,t.jsx)(c.f,{variant:"h6",color:"textSecondary",children:"No data"})})})]})},k)});e.s(["f",0,k],156612);var w=e.i(587369),N=e.i(522507),A=e.i(740790),z=e.i(280445),E=e.i(529422),R=e.i(657107),P=e.i(498681);let B={supplier:"/static/icons/airport_shuttle_black_24dp.svg",job:"/static/icons/location_on_black_24dp.svg"},L=e=>{let{markers:r,mapSX:o}=e,[i,s]=(0,a.useState)(null),[l,d]=(0,a.useState)(null),c=(e,t)=>{s(e.currentTarget),d(t)},u=!!i;return(0,t.jsxs)(n.f,{sx:o,children:[(0,t.jsx)(R.f,{defaultZoom:1,minZoom:1,defaultCenter:{lat:-34.397,lng:150.644},children:r.map(e=>(0,t.jsx)(H,{lat:e.lat,lng:e.lng,title:e.title,alt:e.title,role:"button",tabIndex:0,src:B[e.icon],onClick:t=>c(t,e),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),c(t,e))}},`${e.icon}-${e.id}`))}),(0,t.jsx)(O,{id:u?"simple-popover":void 0,anchorEl:i,handleClose:()=>{s(null),d(null)},marker:l})]})},H=(0,z.f)("img",{shouldForwardProp:e=>"lat"!==e&&"lng"!==e&&!String(e).startsWith("$")})({position:"absolute",transform:"translate(-50%, -100%)",cursor:"pointer"}),O=e=>{let{id:a,anchorEl:r,handleClose:o,marker:i={}}=e,s=(0,P.f)(),l=s.admin?.jobSetting?.jobNumberPrefix,d=s.admin?.jobSetting?.jobNumberSuffix;return(0,t.jsx)(N.U,{id:a,open:open&&i,anchorEl:r,onClose:o,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,t.jsxs)(n.f,{children:[i?.groupName==="jobsLocation"&&(0,t.jsxs)(A.f,{children:[(0,t.jsx)(E.f,{id:i.id,number:i.number,numberPrefix:l,numberSuffix:d,openCanvas:!0,type:i.type}),(0,t.jsx)(c.f,{children:i.location?.name}),(0,t.jsx)(c.f,{children:i.service?.name}),(0,t.jsx)(c.f,{children:i.supplier?.name})]}),i?.groupName==="suppliersLocation"&&(0,t.jsxs)(A.f,{children:[(0,t.jsx)(c.f,{children:i.account?.name}),(0,t.jsx)(c.f,{children:i.user?.fullName})]})]})})},J={suppliersLocation:{month:"Last 30 days"},jobsLocation:{today:"Today",tomorrow:"Tomorrow",nextWeek:"Next 7 days",nextTwoWeeks:"Next 14 days",nextMonth:"Next 30 days",week:"Last 7 days",month:"Last 30 days",threeMonth:"Last 90 days"}},Y=(0,y.U)(l.f).withConfig({displayName:"mapChart__StyledSelect",componentId:"sc-da9e14fb-0"})`
  .MuiSelect-select {
    padding: 0;
  }
  & * {
    font-size: 1.063rem !important;
  }
`,F=(0,y.U)(o.f).withConfig({displayName:"mapChart__StyledCard",componentId:"sc-da9e14fb-1"})`
  min-width: 300px;
  width: 100%;
  height: calc(400px * ${e=>e.size[1]});

  & .MuiCardHeader-root {
    padding: 16px 16px 0 16px;
  }
`,q=(0,y.U)(i.f).withConfig({displayName:"mapChart__StyledCardHeader",componentId:"sc-da9e14fb-2"})`
  & .MuiTypography-root {
    font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};
    font-size: 1.063rem !important;
    color: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFontColor}};
  }
`,U=(0,y.U)(n.f).withConfig({displayName:"mapChart__StyledCardHeaderTitle",componentId:"sc-da9e14fb-3"})`
  & .MuiTypography-root {
    font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};
    font-size: 1.063rem !important;
    color: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFontColor}};
  }
`,G=(0,y.U)(s.f).withConfig({displayName:"mapChart__StyledCardContent",componentId:"sc-da9e14fb-4"})`
  font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};

  max-height: 360px;

  .value {
    font-size: 1.5rem !important;
  }
  display: flex;
  flex-direction: column;
`,K=(0,y.n)(e=>{let{title:o,size:i=1,data:s={},sx:l,onChangeChartGroup:m=()=>{}}=e,[p,h]=(0,a.useState)("month"),f=(0,w.f)("(max-width: 450px)"),[I,y]=(0,a.useState)({groupName:s[p][0].groupName,groupLabel:s[p][0].groupLabel,groupDescription:s[p][0].groupDescription}),[x,$]=(0,a.useState)(null),b=(0,a.useRef)(m);b.current=m;let v=(0,a.useRef)(null);(0,a.useEffect)(()=>{let e=`${I.groupName}-${p}`;v.current!==e&&(v.current=e,b.current(I.groupName,p))},[I.groupName,p]);let{map:j}=(e=>{let{timeRange:a,selectedGroupName:r,data:n,mapSX:o}=e,i=[],s=n[a].find(e=>e.groupName===r);return s&&s.chartData.forEach(e=>{let{data:t,markerIcon:a}=e;t.forEach(e=>{i.push({...e,groupName:r,title:e.name,lat:e.position.lat,lng:e.position.lng,icon:a})})}),{map:()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),(0,t.jsx)(L,{markers:i,mapSX:o})]})}})({timeRange:p,selectedGroupName:I.groupName,data:s,mapSX:{minWidth:"300px",width:"100%",height:`calc(400px * ${i[1]})`}}),M=()=>{let e=Object.keys(J[I.groupName]);return(0,t.jsx)(n.f,{sx:{display:"flex",alingItems:"center",marginTop:.5},children:(0,t.jsx)(Y,{variant:"standard",color:"secondary",size:"small",value:p,children:e.map((e,a)=>(0,t.jsx)(d.f,{value:e,onClick:()=>h(e),children:J[I.groupName][e]},e))})})},C=()=>{let e=Object.keys(s).reduce((e,t)=>(e.push(...s[t].map(e=>({groupName:e.groupName,groupLabel:e.groupLabel,groupDescription:e.groupDescription}))),e),[]),a=(0,r.default)(e,e=>e.groupName),i=I.groupLabel||o,l=I.groupDescription;return a.length>1?(0,t.jsxs)(n.f,{sx:{display:"flex",alingItems:"center",marginRight:2},children:[(0,t.jsx)(Y,{size:"small",variant:"standard",color:"secondary",value:I.groupName,onChange:e=>{y(a.find(t=>t.groupName===e.target.value))},children:a.map(e=>(0,t.jsx)(d.f,{value:e.groupName,children:e.groupLabel}))}),l&&(0,t.jsx)(u.f,{title:l,open:x===l,onClose:()=>$(null),disableFocusListener:!0,disableTouchListener:!0,children:(0,t.jsx)(g.default,{onClick:()=>$(x===l?null:l),onMouseEnter:()=>$(l),onMouseLeave:()=>$(null),sx:{fontSize:"200",marginLeft:.75,color:"#cfd9e0",cursor:"pointer"}})})]}):(0,t.jsxs)(n.f,{sx:{display:"flex",alingItems:"center",marginRight:2},children:[(0,t.jsx)(c.f,{children:i}),(0,t.jsx)(u.f,{title:l,open:x===l,onClose:()=>$(null),disableFocusListener:!0,disableTouchListener:!0,children:(0,t.jsx)(g.default,{onClick:()=>$(x===l?null:l),onMouseEnter:()=>$(l),onMouseLeave:()=>$(null),sx:{fontSize:"200",marginLeft:.5,marginTop:-.25,color:"#cfd9e0",cursor:"pointer"}})})]})};return(0,t.jsxs)(F,{size:i,sx:l,children:[f?(0,t.jsxs)(n.f,{sx:{padding:"16px 16px 0 16px"},children:[(0,t.jsx)(U,{children:C()}),(0,t.jsx)(n.f,{sx:{marginTop:2},children:M()})]}):(0,t.jsx)(q,{title:C(),action:M()}),(0,t.jsx)(G,{children:j()})]},o)});e.s(["f",0,K],331387);var W=e.i(668921),Z=e.i(4142),V=e.i(382161),Q=e.i(556918),X=e.i(185758),ee=e.i(77052),et=e.i(773831),ea=e.i(512057),er=e.i(698114),en=e.i(821627),eo=e.i(627242),ei=e.i(101934),ei=ei,es=e.i(201084),el=e.i(774872),ed=e.i(886779),ec=e.i(356119),eu=e.i(506656),em=e.i(879436);let ep=e=>{let{editable:a,deletable:r,name:n,title:o,description:i,values:s,size:l,percentageColor:d,onEdit:c,onDelete:u}=e,m=Number(s?.today)||0,p=Number(s?.total)||0,h=(0,eu.f)(p>0?m/p*100:0,2);return(0,t.jsx)(el.f,{item:!0,sx:{height:"calc(187px * 1)"},children:(0,t.jsxs)(eh,{variant:"elevation",size:l,children:[(0,t.jsxs)(es.f,{sx:{borderBottom:"1px solid #0000001a"},children:[(0,t.jsx)(ec.f,{color:"text.primary",mb:1,sx:{fontSize:"1.063rem"},children:o}),i&&(0,t.jsx)(ec.f,{variant:"body2",color:"text.secondary",mb:1,children:i}),(0,t.jsxs)(ed.f,{direction:"row",spacing:1,mb:1,children:[(0,t.jsx)(ec.f,{color:"text.primary",fontWeight:"700",children:(0,em.f)(m)}),(0,t.jsx)(ec.f,{color:"text.secondary",children:"of"}),(0,t.jsx)(ec.f,{color:"text.secondary",fontWeight:"700",children:(0,em.f)(p)})]}),(0,t.jsxs)(ec.f,{color:d?.(h),mt:2,children:[h,"%"]})]}),(0,t.jsxs)(ei.f,{sx:{display:"flex",justifyContent:"flex-end",padding:0},children:[a&&(0,t.jsx)(en.f,{size:"small",color:"secondary",sx:{textTransform:"none"},variant:"text",onClick:()=>c?.(),children:"Edit"}),r&&(0,t.jsx)(en.f,{variant:"text",color:"secondary",sx:{textTransform:"none"},size:"small",onClick:()=>u?.(n),children:"Delete"})]})]})})},eh=(0,z.f)(eo.f)(e=>{let{size:t}=e;return{height:`calc(187px * ${t?.[0]})`}});e.s(["f",0,ep],354565);let ef=e=>{let{item:a,selectedTiles:r,disablePin:o,onPinChange:i,onTileSelect:s,queryParams:l}=e,d=(0,w.f)("(max-width: 800px)"),{type:c,title:m,description:p,name:f,values:g,size:I,percentageColor:y}=a,x=null;if("tile"===c&&(x=(0,t.jsx)(er.f,{...a})),"chart"===c&&(x=(0,t.jsx)(k,{title:m,description:p,showLegend:!0,name:f,data:g,size:I,queryParams:l})),"mapChart"===c&&(x=(0,t.jsx)(K,{title:m,description:p,showLegend:!0,name:f,data:g,size:I})),"budget-tiles"===c&&(x=(0,t.jsx)(ep,{name:f,title:m,description:p,values:g,size:I,percentageColor:y})),!x)return null;let $=r.some(e=>e.name===f),b=r.some(e=>e.name===f&&e.pinned);return(0,t.jsx)(A.f,{item:!0,xs:"tile"!==c&&"budget-tiles"!==c||d?12:6,children:(0,t.jsxs)(W.f,{sx:{display:"flex",flexDirection:"column"},children:[x,(0,t.jsxs)(n.f,{m:1,display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"tile"===c?"space-between":"flex-start",children:[(0,t.jsx)(u.f,{sx:{fontFamily:"Nunito-Regular"},title:"Toggle to display or hide this tile in your dashboard",children:(0,t.jsx)(h.f,{label:"Display",sx:{fontFamily:"Nunito-Regular"},control:(0,t.jsx)(Z.f,{sx:{mr:2},color:"secondary",checked:$,onChange:()=>{$?s("remove",f):s("add",f)}})})}),"tile"===c&&(0,t.jsx)(u.f,{sx:{fontFamily:"Nunito-Regular"},title:!b&&o?"You have already pinned 4 tiles. To pin this tile - please,unpin one of already selected tiles":"Pin this tile to top section",children:(0,t.jsx)("span",{children:(0,t.jsx)(h.f,{label:"Pin to top",sx:{fontFamily:"Nunito-Regular"},control:(0,t.jsx)(Z.f,{color:"secondary",checked:b,disabled:!b&&o,onChange:e=>i(a,e.currentTarget.checked)})})})})]})]})})};e.s(["f",0,e=>{let{open:r,fullTilesList:n,selectedTiles:o,onSaveTilesList:i,onClose:s,queryParams:l}=e,d=(0,w.f)("(max-width: 800px)"),[c,u]=(0,a.useState)(o),p=c.filter(e=>e.pinned).length>=4;(0,a.useEffect)(()=>{u(o)},[o]);let h=(e,t)=>{let{name:a}=e;u([...c.filter(e=>e.name!==a),{...e,pinned:t}])},f=(e,t)=>{let a=n.find(e=>e.name===t);a&&("add"===e?u([...c,{type:a.type,pinned:!1,colourConfig:a.colourConfig,name:a.name,greaterIsBetter:a.greaterIsBetter}]):"remove"===e&&u(c.filter(e=>e.name!==t)))};return(0,t.jsxs)(V.f,{open:r,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",fullWidth:!0,maxWidth:"lg",fullScreen:d,children:[(0,t.jsx)(Q.f,{variant:"h5",fontFamily:"Nunito-Regular",id:"modal-modal-title",children:"Select and add card to your dashboard"}),(0,t.jsx)(et.f,{"aria-label":"close",onClick:s,sx:{position:"absolute",right:8,top:8,color:e=>e.palette.grey[500]},children:(0,t.jsx)(ea.default,{})}),(0,t.jsx)(X.f,{...d&&{sx:{p:1}},children:(0,t.jsx)(A.f,{container:!0,spacing:d?1:3,sx:{width:"auto"},children:n.sort((e,t)=>e.type-t.type).map(e=>(0,t.jsx)(ef,{item:e,disablePin:p,selectedTiles:c,onPinChange:h,onTileSelect:f,queryParams:l}))})}),(0,t.jsxs)(ee.f,{children:[(0,t.jsx)(m.f,{sx:{mr:2,textTransform:"none"},variant:"text",color:"secondary",onClick:s,children:"Cancel"}),(0,t.jsx)(m.f,{sx:{textTransform:"none"},variant:"contained",color:"secondary",onClick:()=>{i(c),s()},children:"Save"})]})]})}],755691)},63196,698114,e=>{var t=e.i(391398),a=e.i(220490),r=e.i(75907),n=e.i(460997),o=e.i(191788),i=e.i(889878),s=e.i(600961),l=e.i(395724),d=e.i(396851),c=e.i(713149),u=e.i(46739);function m(e){return(0,u.f)("MuiCardActionArea",e)}let p=(0,c.f)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var h=e.i(941661);let f=["children","className","focusVisibleClassName"],g=(0,d.f)(h.f,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(e=>{let{theme:t}=e;return{display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${p.focusVisible} .${p.focusHighlight}`]:{opacity:(t.vars||t).palette.action.focusOpacity}}}),I=(0,d.f)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(e=>{let{theme:t}=e;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}}),y=o.forwardRef(function(e,a){let o=(0,l.f)({props:e,name:"MuiCardActionArea"}),{children:d,className:c,focusVisibleClassName:u}=o,p=(0,n.f)(o,f),h=(e=>{let{classes:t}=e;return(0,s.f)({root:["root"],focusHighlight:["focusHighlight"]},m,t)})(o);return(0,t.jsxs)(g,(0,r.f)({className:(0,i.f)(h.root,c),focusVisibleClassName:(0,i.f)(u,h.focusVisible),ref:a,ownerState:o},p,{children:[d,(0,t.jsx)(I,{className:h.focusHighlight,ownerState:o})]}))});var x=e.i(740790),$=e.i(148310),b=e.i(760814);let v=(0,b.U)(a.f).withConfig({displayName:"nullableTile__StyledCard",componentId:"sc-19cf239b-0"})`
  min-width: 300px;
  height: calc(187px * ${e=>e.size[1]});

  background: #edf0f2 !important;

  & .MuiCardHeader-root {
    padding: 16px 16px 0 16px;
  }

  & .MuiCardContent-root {
    padding: 10px 16px 16px 16px;
  }
`;e.s(["f",0,e=>{let{disabled:a=!1,onAddCard:r,...n}=e;return(0,t.jsx)(x.f,{item:!0,...n,children:(0,t.jsx)(v,{size:[1,1],children:(0,t.jsx)(y,{disabled:a,onClick:r,sx:{display:"flex",height:"100%"},children:(0,t.jsx)($.default,{fontSize:"large"})})})},"add-tile-card")}],63196);var j=e.i(203828),M=e.i(222351),C=e.i(738251),S=e.i(755548),T=e.i(101934),D=e.i(106850),_=e.i(119209),k=e.i(668921),w=e.i(773831),N=e.i(33670),A=e.i(901004),z=e.i(539117),E=e.i(813843),R=e.i(652148),P=e.i(322135),B=e.i(115871),L=e.i(642508),H=e.i(162440),O=e.i(689184),J=e.i(128519),Y=e.i(144097),F=e.i(879436);let q=M.f,U={success:"#18A999",danger:"#F1C40F",warning:"#F24236"},G={week:"7 days",month:"30 days",threeMonth:"3 months",year:"1 year"},K=e=>{let{colourConfig:a,onSubmit:r}=e,[n,i]=(0,o.useState)(a),s={type:"number",variant:"standard",size:"small",sx:{mx:2,width:"40px"}},l={display:"flex",flexDirection:"row",paddingLeft:"20px",m:1,alignItems:"center"};return(0,t.jsxs)(C.f,{display:"flex",flexDirection:"column",sx:{width:250},children:[(0,t.jsxs)(k.f,{sx:l,children:[(0,t.jsx)(q,{"aria-label":"success-set",size:"small",sx:{bgcolor:U.success},children:(0,t.jsx)(O.default,{})}),(0,t.jsxs)(C.f,{width:"100%",display:"flex",justifyContent:"space-around",children:[(0,t.jsx)(R.f,{...s,inputProps:{style:{textAlign:"center"}},value:n.success[0],onChange:e=>i({...n,success:[Number(e.target.value),n.success[1]]})})," - ",(0,t.jsx)(R.f,{...s,inputProps:{style:{textAlign:"center"}},value:n.success[1],onChange:e=>i({...n,success:[n.success[0],Number(e.target.value)]})})]})]}),(0,t.jsxs)(k.f,{sx:l,children:[(0,t.jsx)(q,{"aria-label":"danger-set",size:"small",sx:{bgcolor:U.danger},children:(0,t.jsx)(J.default,{})}),(0,t.jsxs)(C.f,{width:"100%",display:"flex",justifyContent:"space-around",children:[(0,t.jsx)(R.f,{...s,inputProps:{style:{textAlign:"center"}},value:n.danger[0],onChange:e=>i({...n,danger:[Number(e.target.value),n.danger[1]]})})," - ",(0,t.jsx)(R.f,{...s,inputProps:{style:{textAlign:"center"}},value:n.danger[1],onChange:e=>i({...n,danger:[n.danger[0],Number(e.target.value)]})})]})]}),(0,t.jsxs)(k.f,{sx:l,children:[(0,t.jsx)(q,{"aria-label":"warning-set",size:"small",sx:{bgcolor:U.warning,mr:2},children:(0,t.jsx)(H.default,{})}),(0,t.jsxs)(C.f,{width:"100%",display:"flex",justifyContent:"space-around",children:["more than",(0,t.jsx)(R.f,{...s,inputProps:{style:{textAlign:"center"}},value:n.warning[0],onChange:e=>i({...n,warning:[Number(e.target.value),null]})})]})]}),(0,t.jsx)(C.f,{display:"flex",justifyContent:"flex-end",sx:{mr:2},children:(0,t.jsx)(S.f,{color:"secondary",variant:"contained",size:"small",onClick:()=>r(n),children:"Save"})})]})},W=(0,b.U)(a.f).withConfig({displayName:"tile__StyledCard",componentId:"sc-daddb95c-0"})`
  min-width: 300px;
  height: calc(187px * ${e=>e.size[0]});

  & .MuiCardHeader-root {
    padding: 16px 16px 0 16px;
  }

  & .MuiCardContent-root {
    padding: 8px 16px;
  }
`,Z=(0,b.U)(_.f).withConfig({displayName:"tile__StyledCardHeader",componentId:"sc-daddb95c-1"})`
  & .MuiTypography-root {
    font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};
    font-size: 1.063rem !important;
    color: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFontColor}};
  }
  & .MuiTypography-root.MuiTypography-subtitle2 {
    font-size: 14px !important;
  }
`,V=(0,b.U)(D.f).withConfig({displayName:"tile__StyledCardContent",componentId:"sc-daddb95c-2"})`
  font-family: ${e=>{let{theme:t}=e;return t.THEME_TYPOGRAPHY.newFont}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.COLOUR.black+"1a"}};

  .value {
    font-size: 1.5rem !important;
  }
  display: flex;
  flex-direction: column;
`,Q=(0,b.U)(z.f).withConfig({displayName:"tile__StyledSelect",componentId:"sc-daddb95c-3"})`
  margin-left: 30px;
  & * {
    border: 0;
    border-width: 0 !important;
  }
`;e.s(["f",0,e=>{let a,r,{title:n,subtitle:i,name:s,size:l=1,values:{today:d=0,week:c=0,month:u=0,threeMonth:m=0,year:p=0},valueType:h,description:f,to:g,colourConfig:I,greaterIsBetter:y=!0,editable:$=!1,deletable:b=!1,onConfigChange:v=()=>{},onVersusChange:M=()=>{},onEdit:D,onDelete:_,hiddenVersusOptions:k=[],...z}=e,R=Object.keys(G).filter(e=>!k.includes(e))[0]||"month",[X,ee]=(0,o.useState)(R),[et,ea]=(0,o.useState)(null),[er,en]=(0,o.useState)(I),[eo,ei]=(0,o.useState)(null),es=()=>{ea(null)};(0,o.useEffect)(()=>{en(I)},[I]),(0,o.useEffect)(()=>{k.includes(X)&&ee(R)},[k,X,R]);let{Component:el}=(e=>{let{values:a,selectedOption:r,greaterIsBetter:n}=e,o=a.today,i=a[r],s=0,l=0;if(o===i?(l=0,s=0):o>i&&0!==i?(l=1,s=Math.round((o/i-1)*100)):o<i&&0!==i&&(l=-1,s=Math.round((o/i-1)*100)),!i||Number.isNaN(i)||Number.isNaN(s)||!Number.isFinite(s))return{Component:()=>(0,t.jsx)(P.f,{title:`No data available for ${G[r]} ago`,children:(0,t.jsx)(B.f,{sx:{color:"#666"},children:"N/A"})}),direction:0};if("today"===r)return 0;let d=o>i&&n?"#00C853":"#F24236";return{Component:()=>(0,t.jsx)(P.f,{title:`In ${G[r]} ago it was ${i}`,children:(0,t.jsx)(B.f,{sx:{color:d},children:l>0?`+${s}%`:`${s}%`})}),direction:l}})({values:{today:d,week:c,month:u,threeMonth:m,year:p},selectedOption:X,greaterIsBetter:y}),{color:ed,direction:ec}=(a="#1565C0",r=0,Object.keys(er).forEach(e=>{let[t,n]=er[e];if(Number(d)>=t&&(Number(d)<=n||null===n)){switch(e){case"success":r=1;break;case"danger":r=0;break;case"warning":r=-1}a=U[e]}}),{color:a,direction:r}),eu=(0,t.jsx)(J.default,{});ec>0?eu=(0,t.jsx)(O.default,{}):ec<0&&(eu=(0,t.jsx)(H.default,{}));let em=d;return"price"===h&&(em=(0,F.f)(em)),(0,t.jsxs)(x.f,{item:!0,...z,children:[(0,t.jsxs)(W,{size:l,children:[(0,t.jsx)(Z,{title:(0,t.jsxs)(C.f,{sx:{display:"flex"},children:[(0,t.jsxs)(E.f,{children:[(0,t.jsx)(B.f,{children:n}),(0,t.jsx)(B.f,{variant:"subtitle2",children:i})]}),f&&(0,t.jsx)(P.f,{title:f,open:eo===f,onClose:()=>ei(null),disableFocusListener:!0,disableTouchListener:!0,children:(0,t.jsx)(Y.default,{onClick:()=>ei(eo===f?null:f),onMouseEnter:()=>ei(f),onMouseLeave:()=>ei(null),sx:{fontSize:"200",marginLeft:.5,color:"#cfd9e0",cursor:"pointer"}})})]}),action:(0,t.jsxs)(C.f,{display:"flex",children:[(0,t.jsx)(w.f,{size:"medium","aria-label":"details",onClick:()=>{j.default.push(`${g}&title=${n}${i?`&subtitle=${i}`:""}`)},children:(0,t.jsx)(L.default,{fontSize:"inherit"})}),(0,t.jsx)(w.f,{size:"medium","aria-label":"config",onClick:e=>{ea(e.currentTarget)},children:(0,t.jsx)(q,{"aria-label":"status",size:"small",sx:{bgcolor:ed},children:eu})})]})}),(0,t.jsxs)(V,{children:[(0,t.jsx)(B.f,{className:"value",sx:{mr:2},children:em}),(0,t.jsxs)(C.f,{sx:{display:"flex",alignItems:"center"},children:[(0,t.jsx)(el,{}),(0,t.jsx)(Q,{size:"small",value:X,onChange:e=>{var t;ee(t=e.target.value),M(s,t)},children:Object.keys(G).filter(e=>!k.includes(e)).map(e=>(0,t.jsxs)(A.f,{value:e,children:["versus ",G[e]," ago"]},e))})]})]}),(0,t.jsxs)(T.f,{sx:{display:"flex",justifyContent:"flex-end",padding:0},children:[$&&(0,t.jsx)(S.f,{size:"small",color:"secondary",sx:{textTransform:"none"},variant:"text",onClick:()=>D(s),children:"Edit"}),b&&(0,t.jsx)(S.f,{variant:"text",color:"secondary",sx:{textTransform:"none"},size:"small",onClick:()=>_(s),children:"Delete"})]})]}),(0,t.jsx)(N.f,{open:!!et,anchorEl:et,onClose:es,children:(0,t.jsx)(K,{colourConfig:er,onSubmit:e=>{es(),en(e),v(s,e)}})})]},n)}],698114)},458374,e=>{var t=e.i(159080);let a=t.f`
  query GetDashboard(
    $accountId: Int
    $customerId: Int
    $adminId: Int
    $timezone: String
    $asAt: timestamptz
    $monthStart: timestamptz
    $dayStart: timestamptz
    $userId: Int
    $yearStart: timestamptz
    $yearEnd: timestamptz
    $locationId: Int
    $managerId: Int
    $customerManagerId: Int
    $locationManagerId: Int
  ) {
    dashboardTilesData: getDashboard_HomeTiles(
      args: {
        adminId: $adminId
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
    ) {
      thresholdApprovals
      outstandingInvoices
      outstandingInvoicesValues
      invoiceUnsent
      reactiveJobsToday
      plannedJobsToday
      complianceJobToday
      reportUnsent
      liveP1Jobs
      liveP2Jobs
      liveP3Jobs
      liveP4Jobs
      liveP5Jobs
      offeredJobs
      loggedJobs
      quotesToday
      quotesNotSent
      quotesOverdue
      quotesDueThisWeek
      inprogressJobs
      numberOfOpenJobs
      jobsInDispute
      worksValueMTD
      worksValueYTD
      overdueComplianceJobs
      onHold
      upliftRequested
      ppmOverdue
      reactiveOverdue
      failedJobs
      jobsWithTimeNotConfirmed
      jobsRequiringExpenseAmount
      imminentJobSlaBreaches
      slaAtRiskJobReport
      slaAtRiskOnSite
      slaAtRiskQuoteReturned
      jobsWithTimeNotConfirmedCurrentMonth
      jobsWithTimeNotConfirmedNext7days
      openRemedialQuotes
      openQuotes
      imminentQuoteSlaBreaches
      quoteSlaBreached
      jobSlaBreachedOnSite
      jobSlaBreachedJobReport
      incompleteJobsPpm
      incompleteJobsReactive
      openJobsReactive
      openJobsPpm
    }
    complianceExpiredTilesData: getDashboard_HomeTiles_complianceExpiredItems(
      args: {
        adminId: $adminId
        accountId: $customerId
        asAt: $asAt
        managerId: $managerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
      }
    ) {
      sum
      expiredItems
    }
    complianceUpcomingExpiredTilesData: getDashboard_HomeTiles_complianceUpcomingExpiredItems(
      args: { adminId: $adminId, asAt: $asAt }
    ) {
      sum
      upcomingExpiredItems
    }
    chartJobsPerDay: getDashboard_HomeTiles_Jobs_perDay(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
      }
    ) {
      jobsOnThisMonth
    }
    chartTimeToAttendSite: getDashboard_KPI_TimeToAttendSite(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
        period: "period30d"
      }
    ) {
      data
    }
    chartTimeToReceiveReport: getDashboard_KPI_TimeToReceiveReport(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
        period: "period30d"
      }
    ) {
      data
    }
    chartTimeToSendReportCustomer: getDashboard_KPI_TimeToSendReportCustomer(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
        period: "period30d"
      }
    ) {
      data
    }
    chartRevenuesPerDay: getDashboard_HomeTiles_Revenues_perDay(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
      }
    ) {
      revenuesOnThisMonth
    }
    chartRevenuesPerYear: getDashboard_HomeTiles_Revenues_perYear(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
      }
    ) {
      revenuesOnThisYear
    }
    chartTopCustomers: getDashboard_HomeTiles_Top_Customers_by_Spend(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
    ) {
      topCustomersBySpendOnThisYear
    }
    chartNotifications: getDashboard_HomeTiles_Notifications(
      args: {
        adminId: $adminId
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
      }
    ) {
      notificationsLateArrivalToday
      notificationsInvoiceNotSentToday
      notificationsSupplierNotAssignedToday
      notificationsLateArrivalOnThisWeek
      notificationsInvoiceNotSentOnThisWeek
      notificationsSupplierNotAssignedOnThisWeek
      notificationsLateArrivalOnTwoWeeks
      notificationsInvoiceNotSentOnTwoWeeks
      notificationsSupplierNotAssignedOnTwoWeeks
      notificationsLateArrivalOnThisMonth
      notificationsInvoiceNotSentOnThisMonth
      notificationsSupplierNotAssignedOnThisMonth
    }
    budgetTileTotalAmountSpent: get_location_budget_tile_total_amount_spent(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
    ) {
      total
    }
    budgetTileCommittedSpent: get_location_budget_tile_committed_spent(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
    ) {
      total
    }
    budgetTileBudgetRemaining: get_location_budget_tile_budget_remaining(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
    ) {
      total
    }
    budgetTilePendingQuotes: get_location_budget_tile_pending_quotes(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
    ) {
      total
    }
    budgetTileTotalBudget: get_location_budget_tile_total_budget(
      args: {
        customerId: $customerId
        locationId: $locationId
        customerManagerId: $customerManagerId
        locationManagerId: $locationManagerId
      }
    ) {
      total
    }
    chartJobPerformanceByMonth: getDashboard_JobPerformance_By_Month(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $yearStart
        endTime: $yearEnd
      }
    ) {
      yearMonth
      totalCount
      slaBreachedCount
      type
    }
    chartJobsByStatusByYear: getDashboard_JobsByStatus_By_Year(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $yearStart
        endTime: $yearEnd
      }
    ) {
      status: name
      count
      type
    }
    chartPpmOutcomeByMonth: getDashboard_PpmOutcome_By_Month(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $yearStart
        endTime: $yearEnd
      }
    ) {
      yearMonth
      totalCount
      missedServiceWindowCount
    }
    chartComplianceItemsByMonth: getDashboard_ComplianceItems_By_Month(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $yearStart
        endTime: $yearEnd
      }
    ) {
      yearMonth
      compliantCount
      nonCompliantCount
    }
  }
`,r=t.f`
  query GetSuppliersLocation($where: UserLocation_bool_exp) {
    suppliersLocation: UserLocation(distinct_on: userId, where: $where) {
      id
      geo
      account: Account {
        id
        name
      }
      user: User {
        id
        fullName
      }
    }
  }
`,n=t.f`
  query GetJobsLocation($where: Job_bool_exp) {
    jobsLocation: Job(where: $where, order_by: { createdAt: desc }) {
      id
      number
      type
      location: Location {
        id
        name
        addresses: Addresses(
          where: { registered: { _eq: true }, entity: { _eq: "Location" } }
          order_by: { createdAt: desc }
        ) {
          address: Address {
            addressLine1
            addressLine2
            addressLine3
            postCode
            name
            geo
          }
        }
      }
      supplier: Supplier {
        id
        name
      }
      service: Service {
        id
        name
      }
    }
  }
`;t.f`
  query getUser($id: Int) {
    newUserDate: Account(where: { id: { _eq: $id } }) {
      label: name
      accountId: id
      type
      admin: Admins {
        adminId: adminId
        accountId
      }
      accountUsers: Account_Users(where: { role: { _eq: "owner" } }) {
        role
        user: User {
          email
          nameFirst
          nameLast
          userId: id
        }
      }
    }
  }
`;let o=t.f`
  query GetAccountsForSelect($type: String!, $q: String, $limit: Int, $offset: Int) {
    items: Account(
      where: { name: { _ilike: $q }, type: { _eq: $type } }
      limit: $limit
      offset: $offset
      order_by: { name: asc }
    ) {
      label: name
      value: id
      accountUsers: Account_Users(where: { role: { _eq: "owner" } }) {
        id
        role
        user: User {
          id
        }
      }
    }
  }
`,i=t.f`
  query GetHistoricalTimeToAttendSite(
    $adminId: Int
    $timezone: String
    $asAt: timestamptz
    $accountId: Int
    $userId: Int
    $locationId: Int
    $managerId: Int
    $locationManagerId: Int
    $period: String!
  ) {
    data: getDashboard_KPI_TimeToAttendSite(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
        period: $period
      }
    ) {
      data
    }
  }
`,s=t.f`
  query GetHistoricalTimeToReceiveReport(
    $adminId: Int
    $timezone: String
    $asAt: timestamptz
    $accountId: Int
    $userId: Int
    $locationId: Int
    $managerId: Int
    $locationManagerId: Int
    $period: String!
  ) {
    data: getDashboard_KPI_TimeToReceiveReport(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
        period: $period
      }
    ) {
      data
    }
  }
`,l=t.f`
  query GetJobPerformanceByMonthForYear(
    $adminId: Int
    $accountId: Int
    $customerId: Int
    $customerManagerId: Int
    $locationId: Int
    $locationManagerId: Int
    $managerId: Int
    $userId: Int
    $timezone: String
    $startTime: timestamptz
    $endTime: timestamptz
  ) {
    chartJobPerformanceByMonth: getDashboard_JobPerformance_By_Month(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $startTime
        endTime: $endTime
      }
    ) {
      yearMonth
      totalCount
      slaBreachedCount
      type
    }
  }
`,d=t.f`
  query GetJobsByStatusForYear(
    $adminId: Int
    $accountId: Int
    $customerId: Int
    $customerManagerId: Int
    $locationId: Int
    $locationManagerId: Int
    $managerId: Int
    $userId: Int
    $timezone: String
    $startTime: timestamptz
    $endTime: timestamptz
  ) {
    chartJobsByStatusByYear: getDashboard_JobsByStatus_By_Year(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $startTime
        endTime: $endTime
      }
    ) {
      status: name
      count
      type
    }
  }
`,c=t.f`
  query GetPpmOutcomeByMonthForYear(
    $adminId: Int
    $accountId: Int
    $customerId: Int
    $customerManagerId: Int
    $locationId: Int
    $locationManagerId: Int
    $managerId: Int
    $userId: Int
    $timezone: String
    $startTime: timestamptz
    $endTime: timestamptz
  ) {
    chartPpmOutcomeByMonth: getDashboard_PpmOutcome_By_Month(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $startTime
        endTime: $endTime
      }
    ) {
      yearMonth
      totalCount
      missedServiceWindowCount
    }
  }
`,u=t.f`
  query GetComplianceItemsByMonthForYear(
    $adminId: Int
    $accountId: Int
    $customerId: Int
    $customerManagerId: Int
    $locationId: Int
    $locationManagerId: Int
    $managerId: Int
    $userId: Int
    $timezone: String
    $startTime: timestamptz
    $endTime: timestamptz
  ) {
    chartComplianceItemsByMonth: getDashboard_ComplianceItems_By_Month(
      args: {
        adminId: $adminId
        accountId: $accountId
        customerId: $customerId
        customerManagerId: $customerManagerId
        locationId: $locationId
        locationManagerId: $locationManagerId
        managerId: $managerId
        userId: $userId
        timeZone: $timezone
        startTime: $startTime
        endTime: $endTime
      }
    ) {
      yearMonth
      compliantCount
      nonCompliantCount
    }
  }
`,m=t.f`
  query GetHistoricalTimeToSendReportCustomer(
    $adminId: Int
    $timezone: String
    $asAt: timestamptz
    $accountId: Int
    $userId: Int
    $locationId: Int
    $managerId: Int
    $locationManagerId: Int
    $period: String!
  ) {
    data: getDashboard_KPI_TimeToSendReportCustomer(
      args: {
        adminId: $adminId
        timeZone: $timezone
        asAt: $asAt
        accountId: $accountId
        userId: $userId
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
        period: $period
      }
    ) {
      data
    }
  }
`;e.s(["V",0,o,"a",0,u,"F",0,a,"x",0,e=>t.f`
  query GetDashboard(
    $accountId: Int
    $adminId: Int
    $asAt: timestamptz
    $monthStart: timestamptz
    $dayStart: timestamptz
    $userId: Int
    $yearStart: timestamptz
    $locationId: Int
    $managerId: Int
    $locationManagerId: Int
  ) {
    ${e}: getDashboard_HomeTiles_${e}(
      args: {
        adminId: $adminId
        asAt: $asAt
        accountId: $accountId
        monthStart: $monthStart
        dayStart: $dayStart
        userId: $userId
        yearStart: $yearStart
        locationId: $locationId
        managerId: $managerId
        locationManagerId: $locationManagerId
      }
    ) {
      sum
    }
  }
`,"i",0,i,"S",0,s,"J",0,m,"b",0,d,"f",0,n,"D",0,l,"E",0,c,"P",0,r])},968502,(e,t,a)=>{var r=e.r(978509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(e.r(421506)),o=e.r(391398);a.default=(0,n.default)((0,o.jsx)("path",{d:"M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2"}),"SquareRounded")},751874,e=>{var t=e.i(512527);e.s(["f",()=>t.f])},495143,e=>{var t=e.i(623886),a=e.i(699213);e.s(["f",0,function(e){(0,a.f)(1,arguments);var r=(0,t.f)(e),n=new Date(0);return n.setFullYear(r.getFullYear(),0,1),n.setHours(0,0,0,0),n}],495143)},247095,e=>{var t=e.i(661174),a=e.i(211792),r=e.i(799306),n=e.i(486066),o=e.i(699213);e.s(["f",0,function(e,i){if((0,o.f)(2,arguments),!i||"object"!==(0,t.f)(i))return new Date(0/0);var s=i.years?(0,r.f)(i.years):0,l=i.months?(0,r.f)(i.months):0,d=i.weeks?(0,r.f)(i.weeks):0,c=i.days?(0,r.f)(i.days):0,u=i.hours?(0,r.f)(i.hours):0,m=i.minutes?(0,r.f)(i.minutes):0,p=i.seconds?(0,r.f)(i.seconds):0,h=function(e,t){(0,o.f)(2,arguments);var a=(0,r.f)(t);return(0,n.f)(e,-a)}(e,l+12*s);return new Date((0,a.f)(h,c+7*d).getTime()-1e3*(p+60*(m+60*u)))}],247095)},211792,e=>{var t=e.i(512527),a=e.i(699213),r=e.i(799306);e.s(["f",0,function(e,n){(0,a.f)(2,arguments);var o=(0,r.f)(n);return(0,t.f)(e,-o)}])},919358,e=>{var t=e.i(211792);e.s(["f",()=>t.f])}],679617,(e,t,a)=>{var r=e.r(291037);t.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},734403,(e,t,a)=>{t.exports=function(e,t,a){for(var r=-1,n=null==e?0:e.length;++r<n;)if(a(t,e[r]))return!0;return!1}},518219,(e,t,a)=>{t.exports=function(e,t,a,r){for(var n=e.length,o=a+(r?1:-1);r?o--:++o<n;)if(t(e[o],o,e))return o;return -1}},291037,(e,t,a)=>{var r=e.r(518219),n=e.r(285208),o=e.r(739960);t.exports=function(e,t,a){return t==t?o(e,t,a):r(e,n,a)}},285208,(e,t,a)=>{t.exports=function(e){return e!=e}},171239,(e,t,a)=>{var r=e.r(885049),n=e.r(379858);t.exports=function(e,t){var a=-1,o=n(e)?Array(e.length):[];return r(e,function(e,r,n){o[++a]=t(e,r,n)}),o}},931952,(e,t,a)=>{var r=e.r(648346),n=e.r(928267),o=e.r(305792),i=e.r(171239),s=e.r(828081),l=e.r(963115),d=e.r(519004),c=e.r(625975),u=e.r(448684);t.exports=function(e,t,a){t=t.length?r(t,function(e){return u(e)?function(t){return n(t,1===e.length?e[0]:e)}:e}):[c];var m=-1;return t=r(t,l(o)),s(i(e,function(e,a,n){return{criteria:r(t,function(t){return t(e)}),index:++m,value:e}}),function(e,t){return d(e,t,a)})}},828081,(e,t,a)=>{t.exports=function(e,t){var a=e.length;for(e.sort(t);a--;)e[a]=e[a].value;return e}},681708,(e,t,a)=>{var r=e.r(650119),n=e.r(679617),o=e.r(734403),i=e.r(33483),s=e.r(464163),l=e.r(231853);t.exports=function(e,t,a){var d=-1,c=n,u=e.length,m=!0,p=[],h=p;if(a)m=!1,c=o;else if(u>=200){var f=t?null:s(e);if(f)return l(f);m=!1,c=i,h=new r}else h=t?[]:p;e:for(;++d<u;){var g=e[d],I=t?t(g):g;if(g=a||0!==g?g:0,m&&I==I){for(var y=h.length;y--;)if(h[y]===I)continue e;t&&h.push(I),p.push(g)}else c(h,I,a)||(h!==p&&h.push(I),p.push(g))}return p}},943906,(e,t,a)=>{var r=e.r(849057);t.exports=function(e,t){if(e!==t){var a=void 0!==e,n=null===e,o=e==e,i=r(e),s=void 0!==t,l=null===t,d=t==t,c=r(t);if(!l&&!c&&!i&&e>t||i&&s&&d&&!l&&!c||n&&s&&d||!a&&d||!o)return 1;if(!n&&!i&&!c&&e<t||c&&a&&o&&!n&&!i||l&&a&&o||!s&&o||!d)return -1}return 0}},519004,(e,t,a)=>{var r=e.r(943906);t.exports=function(e,t,a){for(var n=-1,o=e.criteria,i=t.criteria,s=o.length,l=a.length;++n<s;){var d=r(o[n],i[n]);if(d){if(n>=l)return d;return d*("desc"==a[n]?-1:1)}}return e.index-t.index}},464163,(e,t,a)=>{var r=e.r(340682),n=e.r(687378),o=e.r(231853);t.exports=r&&1/o(new r([,-0]))[1]==1/0?function(e){return new r(e)}:n},739960,(e,t,a)=>{t.exports=function(e,t,a){for(var r=a-1,n=e.length;++r<n;)if(e[r]===t)return r;return -1}},687378,(e,t,a)=>{t.exports=function(){}},993993,(e,t,a)=>{var r=e.r(931952),n=e.r(448684);t.exports=function(e,t,a,o){return null==e?[]:(n(t)||(t=null==t?[]:[t]),n(a=o?void 0:a)||(a=null==a?[]:[a]),r(e,t,a))}},437994,(e,t,a)=>{var r=e.r(305792),n=e.r(681708);t.exports=function(e,t){return e&&e.length?n(e,r(t,2)):[]}}]);