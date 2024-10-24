"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7092],{67868:function(n,e,t){t.d(e,{Z:function(){return X}});var r,i=t(7297),a=t(29815),o=t(85893),s=t(67294),c=t(96486),u=t(5616),l=t(66242),d=t(78445),p=t(44267),f=t(18360),m=t(18972),h=t(15861),g=t(21023),x=t(11057),Z=t(74721),y=t(10367),v=t(26495),j=t(23148),b=t(74975),_=t(26042),C=t(69396),I=t(72882),w=t(7906),$=t(53184),k=t(295),N=t(68509),P=t(53252),A=t(61369),S={week:"Last 7 days",twoWeeks:"Last 14 days",month:"Last 30 days",year:"Year"},L=function(n){var e=n.data;return(0,o.jsx)(u.Z,{sx:{display:"flex",marginLeft:4},children:e.map(function(n,e){return(0,o.jsxs)(u.Z,{sx:{display:"flex",alignItems:"center",marginLeft:1},children:[(0,o.jsx)(A.Z,{sx:{color:n.color,borderRadius:"2px"}}),(0,o.jsx)(h.Z,{sx:{marginLeft:1},children:n.label})]},e)})})},T=function(n){var e=n.data,t=n.timeRange,r=n.selectedGroupName,i=e.today||[],a=e[t]||[],s=i.find(function(n){return n.groupName===r}),c=a.find(function(n){return n.groupName===r});if(!s||!c)return null;var l=s.chartData.map(function(n,e){var t=c.chartData[e]||{},r=n.data[0],i=t.data[0],a=0;return r>i&&r>0?a=Math.round((r-i)/r*100):i>0&&(a=-Math.round((i-r)/i*100)),(0,C.Z)((0,_.Z)({},n),{percent:a,color:r>i?"#00C853":"#F24236"})});return(0,o.jsx)(I.Z,{component:u.Z,children:(0,o.jsxs)(w.Z,{size:"small",className:"value",children:[(0,o.jsx)($.Z,{children:(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(P.Z,{children:"Source"}),(0,o.jsx)(P.Z,{align:"right",children:"Today"}),(0,o.jsxs)(P.Z,{align:"right",children:["For the last ",S[t]]})]})}),(0,o.jsx)(k.Z,{children:l.map(function(n,e){return(0,o.jsxs)(N.Z,{children:[(0,o.jsx)(P.Z,{component:"th",scope:"row",children:n.label}),(0,o.jsx)(P.Z,{align:"right",children:s.chartData[e].data}),(0,o.jsx)(P.Z,{align:"right",children:(0,o.jsx)(g.Z,{title:"In ".concat(S[t]," ago it was ").concat(c.chartData[e].data),children:(0,o.jsx)(h.Z,{sx:{color:n.color},children:n.percent>0?"+".concat(n.percent,"%"):"".concat(n.percent,"%")})})})]},e)})})]})})};(r=j.kL).register.apply(r,(0,a.Z)(j.zX));var U=function(n){n.asAt;var e=n.name,t=n.timeRange,r=n.selectedGroupName,i=n.data,s=v.$Q,c=null,u=null,l={labels:[],datasets:[]},d={};switch(e){case"chartJobMetrics":if(s=v.$Q,d={maintainAspectRatio:!1,plugins:{aspectRatio:1,responsive:!0,legend:{display:!1}},scales:{y:{grid:{display:!0},stacked:!1,ticks:{stepSize:2}},x:{stacked:!1,grid:{color:"transparent"}}}},i&&i[t]){var p=i[t].find(function(n){return n.groupName===r});p&&(c=L({data:p.chartData}),p.chartData.forEach(function(n){if("object"==typeof n.data&&n.data.length){var e;if(Object.keys(n.data[0]).includes("name")&&Object.keys(n.data[0]).includes("value")){var t=[],r=[],i=[];n.data.forEach(function(e){t.push(e.name),r.push(e.value),i.push(n.color)}),l.labels=t.map(function(n,e){return"".concat(e+1," - ").concat(n)}),l.datasets.push({label:n.label,data:r,backgroundColor:i})}else if(Object.keys((a=n).data[0]).includes("date")&&Object.keys(a.data[0]).includes("values")){var a,o,s=[],c=[];n.data.forEach(function(n){s.push((0,b.Z)(new Date(n.date),n.formatDate||"dd/MM")),c.push(n.values.length)}),l.labels=s,l.datasets.push({label:n.label,data:c,backgroundColor:n.color,barPercentage:.75,categoryPercentage:.5})}else if(Object.keys((o=n).data[0]).includes("date")&&Object.keys(o.data[0]).includes("sum")){var u=[],d=[];n.data.forEach(function(n){u.push((0,b.Z)(new Date(n.date),n.formatDate||"dd/MM"));var e=n.sum.reduce(function(n,e){return n+e},0);d.push(e)}),l.labels=u,l.datasets.push({label:n.label,data:d,backgroundColor:n.color,barPercentage:.75,categoryPercentage:.5})}}else l.datasets.push({label:n.label,data:n.data,backgroundColor:n.color,barPercentage:.75,categoryPercentage:.5})}))}break;case"numberOfNotifications":if(s=v.$I,i&&i[t]){var f=i[t].find(function(n){return n.groupName===r});if(f){u=T({data:i,timeRange:t,selectedGroupName:r});var m,h=[],g=[],x=[];f.chartData.forEach(function(n){h.push(n.label),g.push(n.data),x.push(n.color)}),(m=l.labels).push.apply(m,(0,a.Z)(h)),l.datasets.push({data:g,backgroundColor:x,cutout:120})}d={plugins:{aspectRatio:1,responsive:!0,legend:{display:!1}}}}}return{chart:function(){return(0,o.jsx)(s,{data:l,options:d})},shortLegend:function(){return c},longLegend:function(){return u}}};function z(){var n=(0,i.Z)(["\n  .MuiSelect-select {\n    padding: 0;\n  }\n  & * {\n    font-size: 1.063rem !important;\n    border: 0;\n    border-width: 0 !important;\n  }\n"]);return z=function(){return n},n}function M(){var n=(0,i.Z)(["\n  min-width: 300px;\n  width: 100%;\n  height: calc(400px * ",");\n\n  & .MuiCardHeader-root {\n    padding: 16px 16px 0 16px;\n  }\n\n  &.MuiPaper-root {\n    overflow-x: scroll;\n  }\n"]);return M=function(){return n},n}function E(){var n=(0,i.Z)(["\n  position: relative;\n"]);return E=function(){return n},n}function q(){var n=(0,i.Z)(["\n  & .MuiTypography-root {\n    font-family: ",";\n    font-size: 1.063rem !important;\n    color: ",";\n  }\n"]);return q=function(){return n},n}function D(){var n=(0,i.Z)(["\n  min-width: 700px;\n\n  font-family: ",";\n\n  max-height: 360px;\n\n  .value {\n    font-size: 1.5rem !important;\n  }\n  display: flex;\n  flex-direction: column;\n"]);return D=function(){return n},n}function F(){var n=(0,i.Z)(["\n  min-width: 700px;\n\n  font-family: ",";\n\n  max-height: 360px;\n\n  .value {\n    font-size: 1.5rem !important;\n  }\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"]);return F=function(){return n},n}var O=function(n){var e=n.asAt,t=void 0===e?new Date:e,r=n.title,i=n.description,l=void 0===i?n.title:i,d=n.showLegend,p=n.size,f=n.name,y=n.data,v=void 0===y?{}:y,j=n.theme,b=n.sx,_=(0,s.useState)("week"),C=_[0],I=_[1],w=(0,s.useState)({groupName:v[C][0].groupName,groupLabel:v[C][0].groupLabel,groupDescription:v[C][0].groupDescription}),$=w[0],k=w[1];(0,s.useEffect)(function(){"customersBySpend"===$.groupName||"revenuesPerYear"===$.groupName?I("year"):I("week")},[$]);var N,P,A,L,T,z=function(n){k(n)},M=U({asAt:t,name:void 0===f?"":f,timeRange:C,selectedGroupName:$.groupName,data:v,theme:j,showLegend:void 0!==d&&d}),E=M.chart,q=M.shortLegend,D=M.longLegend;return(0,o.jsx)(H,{size:void 0===p?1:p,sx:b,children:(0,o.jsxs)(G,{children:[(0,o.jsx)(Y,{title:(N=Object.keys(v).reduce(function(n,e){return n.push.apply(n,(0,a.Z)(v[e].map(function(n){return{groupName:n.groupName,groupLabel:n.groupLabel,groupDescription:n.groupDescription}}))),n},[]),P=(0,c.uniqBy)(N,function(n){return n.groupName}),A=$.groupLabel||r,L=$.groupDescription||l,P.length>1?(0,o.jsxs)(u.Z,{sx:{display:"flex",alingItems:"center"},children:[(0,o.jsx)(R,{size:"small",value:$.groupName,onChange:function(n){z(P.find(function(e){return e.groupName===n.target.value}))},children:P.map(function(n){return(0,o.jsx)(m.Z,{value:n.groupName,children:n.groupLabel})})}),(0,o.jsx)(g.Z,{title:L,children:(0,o.jsx)(Z.Z,{fontSize:"200",sx:{marginLeft:.5,color:"#cfd9e0"}})}),q&&q()]}):(0,o.jsxs)(u.Z,{sx:{display:"flex",alingItems:"center"},children:[(0,o.jsx)(h.Z,{children:A}),(0,o.jsx)(g.Z,{title:L,children:(0,o.jsx)(Z.Z,{fontSize:"200",sx:{marginLeft:.5,color:"#cfd9e0"}})}),q&&q()]})),action:(T=Object.keys(S),"customersBySpend"===$.groupName?T.splice(0,T.length-1):"revenuesPerYear"===$.groupName?T.splice(0,T.length-1):T.splice(-1,1),(0,o.jsx)(u.Z,{display:"flex",children:T.map(function(n,e){return(0,o.jsx)(x.Z,{color:"secondary",sx:{textTransform:"none"},onClick:function(n){return I(n.target.value)},value:n,disabled:C===n,children:S[n]},e)})}))}),D()?(0,o.jsxs)(W,{children:[(0,o.jsx)(u.Z,{children:E()}),(0,o.jsx)(u.Z,{ml:3,children:D()})]}):(0,o.jsx)(B,{children:E()})]})},r)},R=(0,y.ZP)(f.Z).withConfig({displayName:"chart__StyledSelect",componentId:"sc-53a49567-0"})(z()),H=(0,y.ZP)(l.Z).withConfig({displayName:"chart__StyledCard",componentId:"sc-53a49567-1"})(M(),function(n){return n.size[1]}),G=y.ZP.div.withConfig({displayName:"chart__StyledCardArea",componentId:"sc-53a49567-2"})(E()),Y=(0,y.ZP)(d.Z).withConfig({displayName:"chart__StyledCardHeader",componentId:"sc-53a49567-3"})(q(),function(n){return n.theme.THEME_TYPOGRAPHY.newFont},function(n){return n.theme.THEME_TYPOGRAPHY.newFontColor}),B=(0,y.ZP)(p.Z).withConfig({displayName:"chart__StyledCardContent",componentId:"sc-53a49567-4"})(D(),function(n){return n.theme.THEME_TYPOGRAPHY.newFont}),W=(0,y.ZP)(p.Z).withConfig({displayName:"chart__StyledCardContentWithLegend",componentId:"sc-53a49567-5"})(F(),function(n){return n.theme.THEME_TYPOGRAPHY.newFont}),X=(0,y.Zz)(O)},83537:function(n,e,t){t.d(e,{Z:function(){return F}});var r=t(7297),i=t(29815),a=t(85893),o=t(67294),s=t(96486),c=t(5616),u=t(66242),l=t(78445),d=t(44267),p=t(18360),f=t(18972),m=t(15861),h=t(21023),g=t(74721),x=t(10367),Z=t(26042),y=t(69396),v=t(33458),j=t(14564),b=t(86886),_=t(98456),C=t(45416),I=t(46003),w=t(18586),$={supplier:"/static/icons/airport_shuttle_black_24dp.svg",job:"/static/icons/location_on_black_24dp.svg"},k=(0,v.WS)((0,v.OI)(function(n){var e=n.markers,t=void 0===e?[]:e,r=(0,o.useState)(null),i=r[0],s=r[1],c=(0,o.useState)(null),u=c[0],l=c[1],d=function(n,e){s(n.domEvent.currentTarget),l(e)},p=function(){s(null),l(null)},f=Boolean(i);return(0,a.jsxs)(v.b6,{defaultZoom:1,defaultCenter:{lat:-34.397,lng:150.644},children:[(0,a.jsx)(P,{id:f?"simple-popover":void 0,anchorEl:i,handleClose:p,marker:u}),t.length&&t.map(function(n){return(0,a.jsx)(v.Jx,{position:{lat:n.lat,lng:n.lng},title:n.title,icon:$[n.icon],clickable:!0,onClick:function(e){return d(e,n)}})})]})})),N=function(n){var e=n.timeRange,t=n.selectedGroupName,r=n.data,i=n.mapSX,o={googleMapURL:"https://maps.googleapis.com/maps/api/js?key=".concat(I.ie.map,"&v=3.exp&libraries=geometry,drawing,places"),loadingElement:(0,a.jsx)(c.Z,{className:"loadingComponent",sx:{height:"100%"},children:(0,a.jsx)(_.Z,{})}),containerElement:(0,a.jsx)(c.Z,{className:"containerComponent",sx:i}),mapElement:(0,a.jsx)(c.Z,{className:"mapElement",sx:{height:"100%"}})},s=[],u=r[e].find(function(n){return n.groupName===t});return u&&u.chartData.forEach(function(n){var e=n.data,r=n.markerIcon;e.forEach(function(n){s.push((0,y.Z)((0,Z.Z)({},n),{groupName:t,title:n.name,lat:n.position.lat,lng:n.position.lng,icon:r}))})}),{map:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),(0,a.jsx)(k,(0,y.Z)((0,Z.Z)({},o),{markers:s}))]})}}},P=function(n){var e,t,r,i,o,s,u,l,d,p=n.id,f=n.anchorEl,h=n.handleClose,g=n.marker,x=void 0===g?{}:g,Z=(0,w.q)(),y=null===(e=Z.admin)||void 0===e?void 0:null===(t=e.jobSetting)||void 0===t?void 0:t.jobNumberPrefix,v=null===(r=Z.admin)||void 0===r?void 0:null===(i=r.jobSetting)||void 0===i?void 0:i.jobNumberSuffix;return(0,a.jsx)(j.ZP,{id:p,open:open&&x,anchorEl:f,onClose:h,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:(0,a.jsxs)(c.Z,{children:[(null==x?void 0:x.groupName)==="jobsLocation"&&(0,a.jsxs)(b.ZP,{children:[(0,a.jsx)(C.D,{id:x.id,number:x.number,numberPrefix:y,numberSuffix:v,openCanvas:!0,type:x.type}),(0,a.jsx)(m.Z,{children:null===(o=x.location)||void 0===o?void 0:o.name}),(0,a.jsx)(m.Z,{children:null===(s=x.service)||void 0===s?void 0:s.name}),(0,a.jsx)(m.Z,{children:null===(u=x.supplier)||void 0===u?void 0:u.name})]}),(null==x?void 0:x.groupName)==="suppliersLocation"&&(0,a.jsxs)(b.ZP,{children:[(0,a.jsx)(m.Z,{children:null===(l=x.account)||void 0===l?void 0:l.name}),(0,a.jsx)(m.Z,{children:null===(d=x.user)||void 0===d?void 0:d.fullName})]})]})})},A={suppliersLocation:{month:"Last 30 days"},jobsLocation:{today:"Today",tomorrow:"Tomorrow",nextWeek:"Next 7 days",nextTwoWeeks:"Next 14 days",nextMonth:"Next 30 days",week:"Last 7 days",month:"Last 30 days",threeMonth:"Last 90 days"}};function S(){var n=(0,r.Z)(["\n  .MuiSelect-select {\n    padding: 0;\n  }\n  & * {\n    font-size: 1.063rem !important;\n    border: 0;\n    border-width: 0 !important;\n  }\n"]);return S=function(){return n},n}function L(){var n=(0,r.Z)(["\n  min-width: 300px;\n  width: 100%;\n  height: calc(400px * ",");\n\n  & .MuiCardHeader-root {\n    padding: 16px 16px 0 16px;\n  }\n"]);return L=function(){return n},n}function T(){var n=(0,r.Z)(["\n  & .MuiTypography-root {\n    font-family: ",";\n    font-size: 1.063rem !important;\n    color: ",";\n  }\n"]);return T=function(){return n},n}function U(){var n=(0,r.Z)(["\n  font-family: ",";\n\n  max-height: 360px;\n\n  .value {\n    font-size: 1.5rem !important;\n  }\n  display: flex;\n  flex-direction: column;\n"]);return U=function(){return n},n}var z=function(n){var e=n.title,t=n.size,r=void 0===t?1:t,u=n.data,l=void 0===u?{}:u,d=n.sx,p=n.onChangeChartGroup,x=void 0===p?function(){}:p,Z=(0,o.useState)("month"),y=Z[0],v=Z[1],j=(0,o.useState)({groupName:l[y][0].groupName,groupLabel:l[y][0].groupLabel,groupDescription:l[y][0].groupDescription}),b=j[0],_=j[1];(0,o.useEffect)(function(){x(b.groupName,y)},[b,y]);var C,I,w,$,k,P=function(n){_(n)},S=N({timeRange:y,selectedGroupName:b.groupName,data:l,mapSX:{minWidth:"300px",width:"100%",height:"calc(400px * ".concat(r[1],")")}}).map;return(0,a.jsxs)(E,{size:r,sx:d,children:[(0,a.jsx)(q,{title:(C=Object.keys(l).reduce(function(n,e){return n.push.apply(n,(0,i.Z)(l[e].map(function(n){return{groupName:n.groupName,groupLabel:n.groupLabel,groupDescription:n.groupDescription}}))),n},[]),I=(0,s.uniqBy)(C,function(n){return n.groupName}),w=b.groupLabel||e,$=b.groupDescription,I.length>1?(0,a.jsxs)(c.Z,{sx:{display:"flex",alingItems:"center"},children:[(0,a.jsx)(M,{size:"small",value:b.groupName,onChange:function(n){P(I.find(function(e){return e.groupName===n.target.value}))},children:I.map(function(n){return(0,a.jsx)(f.Z,{value:n.groupName,children:n.groupLabel})})}),$&&(0,a.jsx)(h.Z,{title:$,children:(0,a.jsx)(g.Z,{fontSize:"200",sx:{marginLeft:.5,color:"#cfd9e0"}})})]}):(0,a.jsxs)(c.Z,{sx:{display:"flex",alingItems:"center"},children:[(0,a.jsx)(m.Z,{children:w}),(0,a.jsx)(h.Z,{title:$,children:(0,a.jsx)(g.Z,{fontSize:"200",sx:{marginLeft:.5,color:"#cfd9e0"}})})]})),action:(k=Object.keys(A[b.groupName]),(0,a.jsx)(c.Z,{sx:{display:"flex",alingItems:"center"},children:(0,a.jsx)(M,{size:"small",value:y,children:k.map(function(n,e){return(0,a.jsx)(f.Z,{value:n,onClick:function(){return v(n)},children:A[b.groupName][n]},n)})})}))}),(0,a.jsx)(D,{children:S()})]},e)},M=(0,x.ZP)(p.Z).withConfig({displayName:"mapChart__StyledSelect",componentId:"sc-6ce6014-0"})(S()),E=(0,x.ZP)(u.Z).withConfig({displayName:"mapChart__StyledCard",componentId:"sc-6ce6014-1"})(L(),function(n){return n.size[1]}),q=(0,x.ZP)(l.Z).withConfig({displayName:"mapChart__StyledCardHeader",componentId:"sc-6ce6014-2"})(T(),function(n){return n.theme.THEME_TYPOGRAPHY.newFont},function(n){return n.theme.THEME_TYPOGRAPHY.newFontColor}),D=(0,x.ZP)(d.Z).withConfig({displayName:"mapChart__StyledCardContent",componentId:"sc-6ce6014-3"})(U(),function(n){return n.theme.THEME_TYPOGRAPHY.newFont}),F=(0,x.Zz)(z)},5339:function(n,e,t){var r=t(26042),i=t(69396),a=t(99534),o=t(7297),s=t(85893),c=t(66242),u=t(9974),l=t(86886),d=t(96540),p=t(10367);function f(){var n=(0,o.Z)(["\n  min-width: 300px;\n  height: calc(187px * ",");\n\n  background: #edf0f2 !important;\n\n  & .MuiCardHeader-root {\n    padding: 16px 16px 0 16px;\n  }\n\n  & .MuiCardContent-root {\n    padding: 10px 16px 16px 16px;\n  }\n"]);return f=function(){return n},n}var m=function(n){var e=n.disabled,t=n.onAddCard,o=(0,a.Z)(n,["disabled","onAddCard"]);return(0,s.jsx)(l.ZP,(0,i.Z)((0,r.Z)({item:!0},o),{children:(0,s.jsx)(h,{size:[1,1],children:(0,s.jsx)(u.Z,{disabled:void 0!==e&&e,onClick:t,sx:{display:"flex",height:"100%"},children:(0,s.jsx)(d.Z,{fontSize:"large"})})})}),"add-tile-card")},h=(0,p.ZP)(c.Z).withConfig({displayName:"nullableTile__StyledCard",componentId:"sc-b9878aa9-0"})(f(),function(n){return n.size[1]});e.Z=m},98572:function(n,e,t){var r=t(26042),i=t(69396),a=t(99534),o=t(828),s=t(7297),c=t(85893),u=t(67294),l=t(11163),d=t.n(l),p=t(11082),f=t(69661),m=t(5616),h=t(11057),g=t(66242),x=t(62023),Z=t(44267),y=t(78445),v=t(94054),j=t(86886),b=t(93946),_=t(25464),C=t(18972),I=t(18360),w=t(51233),$=t(50135),k=t(21023),N=t(15861),P=t(26130),A=t(23508),S=t(60181),L=t(94895),T=t(74721),U=t(10367);function z(){var n=(0,s.Z)(["\n  min-width: 300px;\n  height: calc(187px * ",");\n\n  & .MuiCardHeader-root {\n    padding: 16px 16px 0 16px;\n  }\n\n  & .MuiCardContent-root {\n    padding: 8px 16px;\n  }\n"]);return z=function(){return n},n}function M(){var n=(0,s.Z)(["\n  & .MuiTypography-root {\n    font-family: ",";\n    font-size: 1.063rem !important;\n    color: ",";\n  }\n  & .MuiTypography-root.MuiTypography-subtitle2 {\n    font-size: 14px !important;\n  }\n"]);return M=function(){return n},n}function E(){var n=(0,s.Z)(["\n  font-family: ",";\n  border-bottom: 1px solid ",";\n\n  .value {\n    font-size: 1.5rem !important;\n  }\n  display: flex;\n  flex-direction: column;\n"]);return E=function(){return n},n}function q(){var n=(0,s.Z)(["\n  margin-left: 30px;\n  & * {\n    border: 0;\n    border-width: 0 !important;\n  }\n"]);return q=function(){return n},n}var D={success:"#18A999",danger:"#F1C40F",warning:"#F24236"},F={week:"7 days",month:"30 days",threeMonth:"3 months",year:"1 year"},O=function(n,e){var t="#1565C0",r=0;return Object.keys(e).forEach(function(i){var a=(0,o.Z)(e[i],2),s=a[0],c=a[1];if(Number(n)>=s&&(Number(n)<=c||null===c)){switch(i){case"success":r=1;break;case"danger":r=0;break;case"warning":r=-1}t=D[i]}}),{color:t,direction:r}},R=function(n){var e=n.values,t=n.selectedOption,r=n.greaterIsBetter;if("today"===t)return 0;var i=e.today,a=e[t],o=0,s=0;i===a?(s=0,o=0):i>a&&0!==a?(s=1,o=Math.round((i/a-1)*100)):i<a&&0!==a&&(s=-1,o=Math.round((i/a-1)*100));var u=i>a&&r?"#00C853":"#F24236";return{Component:function(){return(0,c.jsx)(k.Z,{title:"In ".concat(F[t]," ago it was ").concat(a),children:(0,c.jsx)(N.Z,{sx:{color:u},children:s>0?"+".concat(o,"%"):"".concat(o,"%")})})},direction:s}},H=function(n){var e=n.colourConfig,t=n.onSubmit,a=(0,u.useState)(e),o=a[0],s=a[1],l={type:"number",variant:"standard",size:"small",sx:{mx:2,width:"40px"}},d={display:"flex",flexDirection:"row",paddingLeft:"20px",m:1,alignItems:"center"};return(0,c.jsxs)(m.Z,{display:"flex",flexDirection:"column",sx:{width:250},children:[(0,c.jsxs)(v.Z,{sx:d,children:[(0,c.jsx)(f.Z,{"aria-label":"success-set",size:"small",sx:{bgcolor:D.success},children:(0,c.jsx)(S.Z,{})}),(0,c.jsxs)(m.Z,{width:"100%",display:"flex",justifyContent:"space-around",children:[(0,c.jsx)($.Z,(0,i.Z)((0,r.Z)({},l),{inputProps:{style:{textAlign:"center"}},value:o.success[0],onChange:function(n){return s((0,i.Z)((0,r.Z)({},o),{success:[Number(n.target.value),o.success[1]]}))}}))," - ",(0,c.jsx)($.Z,(0,i.Z)((0,r.Z)({},l),{inputProps:{style:{textAlign:"center"}},value:o.success[1],onChange:function(n){return s((0,i.Z)((0,r.Z)({},o),{success:[o.success[0],Number(n.target.value)]}))}}))]})]}),(0,c.jsxs)(v.Z,{sx:d,children:[(0,c.jsx)(f.Z,{"aria-label":"danger-set",size:"small",sx:{bgcolor:D.danger},children:(0,c.jsx)(L.Z,{})}),(0,c.jsxs)(m.Z,{width:"100%",display:"flex",justifyContent:"space-around",children:[(0,c.jsx)($.Z,(0,i.Z)((0,r.Z)({},l),{inputProps:{style:{textAlign:"center"}},value:o.danger[0],onChange:function(n){return s((0,i.Z)((0,r.Z)({},o),{danger:[Number(n.target.value),o.danger[1]]}))}}))," - ",(0,c.jsx)($.Z,(0,i.Z)((0,r.Z)({},l),{inputProps:{style:{textAlign:"center"}},value:o.danger[1],onChange:function(n){return s((0,i.Z)((0,r.Z)({},o),{danger:[o.danger[0],Number(n.target.value)]}))}}))]})]}),(0,c.jsxs)(v.Z,{sx:d,children:[(0,c.jsx)(f.Z,{"aria-label":"warning-set",size:"small",sx:{bgcolor:D.warning,mr:2},children:(0,c.jsx)(A.Z,{})}),(0,c.jsxs)(m.Z,{width:"100%",display:"flex",justifyContent:"space-around",children:["more then",(0,c.jsx)($.Z,(0,i.Z)((0,r.Z)({},l),{inputProps:{style:{textAlign:"center"}},value:o.warning[0],onChange:function(n){return s((0,i.Z)((0,r.Z)({},o),{warning:[Number(n.target.value),null]}))}}))]})]}),(0,c.jsx)(m.Z,{display:"flex",justifyContent:"flex-end",sx:{mr:2},children:(0,c.jsx)(h.Z,{color:"secondary",variant:"contained",size:"small",onClick:function(){return t(o)},children:"Save"})})]})},G=function(n){var e=(0,u.useState)("week"),t=e[0],o=e[1],s=(0,u.useState)(null),l=s[0],g=s[1],Z=n.title,y=n.subtitle,v=n.name,I=n.size,$=n.values,U=$.today,z=void 0===U?0:U,M=$.week,E=$.month,q=$.threeMonth,D=$.year,G=n.valueType,J=n.description,Q=n.to,V=n.colourConfig,K=n.greaterIsBetter,nn=n.editable,ne=n.deletable,nt=n.onConfigChange,nr=void 0===nt?function(){}:nt,ni=n.onVersusChange,na=void 0===ni?function(){}:ni,no=n.onEdit,ns=n.onDelete,nc=(0,a.Z)(n,["title","subtitle","name","size","values","valueType","description","to","colourConfig","greaterIsBetter","editable","deletable","onConfigChange","onVersusChange","onEdit","onDelete"]),nu=(0,u.useState)(V),nl=nu[0],nd=nu[1],np=function(n){g(n.currentTarget)},nf=function(){g(null)},nm=function(n){nf(),nd(n),nr(v,n)},nh=function(n){o(n),na(v,n)},ng=function(){d().push("".concat(Q,"&title=").concat(Z).concat(y?"&subtitle=".concat(y):""))};(0,u.useEffect)(function(){nd(V)},[V]);var nx=R({values:{today:z,week:void 0===M?0:M,month:void 0===E?0:E,threeMonth:void 0===q?0:q,year:void 0===D?0:D},selectedOption:t,greaterIsBetter:void 0===K||K}).Component,nZ=O(z,nl),ny=nZ.color,nv=nZ.direction,nj=(0,c.jsx)(L.Z,{});nv>0?nj=(0,c.jsx)(S.Z,{}):nv<0&&(nj=(0,c.jsx)(A.Z,{}));var nb=z;return"price"===G&&(nb=(0,p.Z)(nb)),(0,c.jsxs)(j.ZP,(0,i.Z)((0,r.Z)({item:!0},nc),{children:[(0,c.jsxs)(Y,{size:void 0===I?1:I,children:[(0,c.jsx)(B,{title:(0,c.jsxs)(m.Z,{sx:{display:"flex"},children:[(0,c.jsxs)(w.Z,{children:[(0,c.jsx)(N.Z,{children:Z}),(0,c.jsx)(N.Z,{variant:"subtitle2",children:y})]}),J&&(0,c.jsx)(k.Z,{title:J,children:(0,c.jsx)(T.Z,{fontSize:"200",sx:{marginLeft:.5,color:"#cfd9e0"}})})]}),action:(0,c.jsxs)(m.Z,{display:"flex",children:[(0,c.jsx)(b.Z,{size:"medium","aria-label":"details",onClick:ng,children:(0,c.jsx)(P.Z,{fontSize:"inherit"})}),(0,c.jsx)(b.Z,{size:"medium","aria-label":"config",onClick:np,children:(0,c.jsx)(f.Z,{"aria-label":"status",size:"small",sx:{bgcolor:ny},children:nj})})]})}),(0,c.jsxs)(W,{children:[(0,c.jsx)(N.Z,{className:"value",sx:{mr:2},children:nb}),(0,c.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,c.jsx)(nx,{}),(0,c.jsx)(X,{size:"small",value:t,onChange:function(n){return nh(n.target.value)},children:Object.keys(F).map(function(n){return(0,c.jsxs)(C.Z,{value:n,children:["versus ",F[n]," ago"]})})})]})]}),(0,c.jsxs)(x.Z,{sx:{display:"flex",justifyContent:"flex-end",padding:0},children:[void 0!==nn&&nn&&(0,c.jsx)(h.Z,{size:"small",color:"secondary",sx:{textTransform:"none"},variant:"text",onClick:function(){return no(v)},children:"Edit"}),void 0!==ne&&ne&&(0,c.jsx)(h.Z,{variant:"text",color:"secondary",sx:{textTransform:"none"},size:"small",onClick:function(){return ns(v)},children:"Delete"})]})]}),(0,c.jsx)(_.Z,{open:Boolean(l),anchorEl:l,onClose:nf,children:(0,c.jsx)(H,{colourConfig:nl,onSubmit:nm})})]}),Z)},Y=(0,U.ZP)(g.Z).withConfig({displayName:"tile__StyledCard",componentId:"sc-db49fb39-0"})(z(),function(n){return n.size[1]}),B=(0,U.ZP)(y.Z).withConfig({displayName:"tile__StyledCardHeader",componentId:"sc-db49fb39-1"})(M(),function(n){return n.theme.THEME_TYPOGRAPHY.newFont},function(n){return n.theme.THEME_TYPOGRAPHY.newFontColor}),W=(0,U.ZP)(Z.Z).withConfig({displayName:"tile__StyledCardContent",componentId:"sc-db49fb39-2"})(E(),function(n){return n.theme.THEME_TYPOGRAPHY.newFont},function(n){return n.theme.COLOUR.black+"1a"}),X=(0,U.ZP)(I.Z).withConfig({displayName:"tile__StyledSelect",componentId:"sc-db49fb39-3"})(q());e.Z=G},6425:function(n,e,t){var r=t(26042),i=t(69396),a=t(29815),o=t(85893),s=t(67294),c=t(11057),u=t(86886),l=t(5616),d=t(94054),p=t(21023),f=t(72852),m=t(64666),h=t(37645),g=t(6514),x=t(31425),Z=t(93946),y=t(50480),v=t(61730),j=t(50594),b=t(98572),_=t(67868),C=t(83537),I=function(n){var e=n.item,t=n.selectedTiles,i=n.disablePin,a=n.onPinChange,s=n.onTileSelect,c=(0,v.Z)("(max-width: 800px)"),m=e.type,h=e.title,g=e.description,x=e.name,Z=e.values,j=e.size,I=null;if("tile"===m&&(I=(0,o.jsx)(b.Z,(0,r.Z)({},e))),"chart"===m&&(I=(0,o.jsx)(_.Z,{title:h,description:g,showLegend:!0,name:x,data:Z,size:j})),"mapChart"===m&&(I=(0,o.jsx)(C.Z,{title:h,description:g,showLegend:!0,name:x,data:Z,size:j})),!I)return null;var w=t.some(function(n){return n.name===x}),$=t.some(function(n){return n.name===x&&n.pinned});return(0,o.jsx)(u.ZP,{item:!0,xs:"tile"!==m||c?12:6,children:(0,o.jsxs)(d.Z,{sx:{display:"flex",flexDirection:"column"},children:[I,(0,o.jsxs)(l.Z,{m:1,display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"tile"===m?"space-between":"flex-start",children:[(0,o.jsx)(p.Z,{sx:{fontFamily:"Nunito-Regular"},title:"Toggle to display or hide this tile in your dashboard",children:(0,o.jsx)(y.Z,{label:"Display",sx:{fontFamily:"Nunito-Regular"},control:(0,o.jsx)(f.Z,{sx:{mr:2},color:"secondary",checked:w,onChange:function(){w?s("remove",x):s("add",x)}})})}),"tile"===m&&(0,o.jsx)(p.Z,{sx:{fontFamily:"Nunito-Regular"},title:!$&&i?"You have already pinned 4 tiles. To pin this tile - please,unpin one of already selected tiles":"Pin this tile to top section",children:(0,o.jsx)("span",{children:(0,o.jsx)(y.Z,{label:"Pin to top",sx:{fontFamily:"Nunito-Regular"},control:(0,o.jsx)(f.Z,{color:"secondary",checked:$,disabled:!$&&i,onChange:function(n){return a(e,n.currentTarget.checked)}})})})})]})]})})},w=function(n){var e=n.open,t=n.fullTilesList,l=n.selectedTiles,d=n.onSaveTilesList,p=n.onClose,f=(0,v.Z)("(max-width: 800px)"),y=(0,s.useState)(l),b=y[0],_=y[1],C=b.filter(function(n){return n.pinned}).length>=4;(0,s.useEffect)(function(){_(l)},[l]);var w=function(){d(b),p()},$=function(n,e){var t=n.name,o=b.filter(function(n){return n.name!==t}),s=(0,i.Z)((0,r.Z)({},n),{pinned:e});_((0,a.Z)(o).concat([s]))},k=function(n,e){var r=t.find(function(n){return n.name===e});if(r){if("add"===n){var i={type:r.type,pinned:!1,colourConfig:r.colourConfig,name:r.name,greaterIsBetter:r.greaterIsBetter};_((0,a.Z)(b).concat([i]))}else"remove"===n&&_(b.filter(function(n){return n.name!==e}))}};return(0,o.jsxs)(m.Z,{open:e,onClose:p,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",fullWidth:!0,maxWidth:"lg",fullScreen:f,children:[(0,o.jsx)(h.Z,{variant:"h5",fontFamily:"Nunito-Regular",id:"modal-modal-title",children:"Select and add card to your dashboard"}),(0,o.jsx)(Z.Z,{"aria-label":"close",onClick:p,sx:{position:"absolute",right:8,top:8,color:function(n){return n.palette.grey[500]}},children:(0,o.jsx)(j.Z,{})}),(0,o.jsx)(g.Z,(0,i.Z)((0,r.Z)({},f&&{sx:{p:1}}),{children:(0,o.jsx)(u.ZP,{container:!0,spacing:f?1:3,sx:{width:"auto"},children:t.sort(function(n,e){return n.type-e.type}).map(function(n){return(0,o.jsx)(I,{item:n,disablePin:C,selectedTiles:b,onPinChange:$,onTileSelect:k})})})})),(0,o.jsxs)(x.Z,{children:[(0,o.jsx)(c.Z,{sx:{mr:2,textTransform:"none"},variant:"text",color:"secondary",onClick:p,children:"Cancel"}),(0,o.jsx)(c.Z,{sx:{textTransform:"none"},variant:"contained",color:"secondary",onClick:w,children:"Save"})]})]})};e.Z=w},75327:function(n,e,t){t.d(e,{$E:function(){return z},AX:function(){return C},I4:function(){return _},JA:function(){return w},MT:function(){return A},Px:function(){return k},WF:function(){return $},ZA:function(){return q},a8:function(){return N},fA:function(){return U},fo:function(){return I},ge:function(){return E},iM:function(){return T},nE:function(){return S},nh:function(){return L},r1:function(){return P},tW:function(){return D},uz:function(){return M}});var r=t(7297),i=t(75063);function a(){var n=(0,r.Z)(["\n  mutation InsertAccountUser($objects: [Account_User_insert_input!]!) {\n    insert_Account_User(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return a=function(){return n},n}function o(){var n=(0,r.Z)(["\n  mutation UpdateUser(\n    $id: Int!\n    $accountUserId: Int!\n    $accountUserChanges: Account_User_set_input\n    $changes: User_set_input\n    $updateAccountUser: Boolean!\n  ) {\n    update_Account_User_by_pk(pk_columns: { id: $accountUserId }, _set: $accountUserChanges)\n      @include(if: $updateAccountUser) {\n      id\n    }\n    update_User_by_pk(pk_columns: { id: $id }, _set: $changes) {\n      id\n    }\n  }\n"]);return o=function(){return n},n}function s(){var n=(0,r.Z)(["\n  query GetUsers(\n    $accountId: Int\n    $accountType: String\n    $date: timestamptz\n    $limit: Int\n    $offset: Int\n    $q: String\n    $orderBy: User_order_by!\n    $status: String\n  ) {\n    users: User(\n      limit: $limit\n      offset: $offset\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [\n          { email: { _ilike: $q } }\n          { nameFirst: { _ilike: $q } }\n          { nameLast: { _ilike: $q } }\n        ]\n        status: { _eq: $status }\n      }\n      order_by: [$orderBy]\n    ) {\n      id\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n        userLocations: User_Account_Locations {\n          accountLocationId\n        }\n      }\n    }\n    meta: User_aggregate(\n      where: {\n        Account_Users: { Account: { id: { _eq: $accountId }, type: { _eq: $accountType } } }\n        createdAt: { _eq: $date }\n        _or: [{ nameFirst: { _ilike: $q } }, { nameLast: { _ilike: $q } }]\n        status: { _eq: $status }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n"]);return s=function(){return n},n}function c(){var n=(0,r.Z)(["\n  query GetUser($id: Int!) {\n    user: User_by_pk(id: $id) {\n      id\n      fullName\n      name: nameFirst\n      nameFirst\n      nameLast\n      phone\n      status\n      email\n      createdAt\n      meta\n      invoiceThreshold\n      quoteThreshold\n      media: Media {\n        id\n        medium: Medium {\n          id\n          category\n          filename\n          meta\n          type\n        }\n      }\n      accounts: Account_Users {\n        id\n        role\n        position\n        isContact\n        status\n        account: Account {\n          id\n          name\n          type\n        }\n      }\n    }\n  }\n"]);return c=function(){return n},n}function u(){var n=(0,r.Z)(["\n  query CheckDuplicateEmail($email: String!) {\n    users: User_public(where: { email: { _eq: $email } }) {\n      id\n      nameFirst\n      nameLast\n      email\n      phone\n    }\n  }\n"]);return u=function(){return n},n}function l(){var n=(0,r.Z)(["\n  fragment UserFields on User {\n    id\n    email\n    nameFirst\n    nameLast\n    fullName\n    phone\n    status\n  }\n"]);return l=function(){return n},n}function d(){var n=(0,r.Z)(["\n  mutation SendGoogleAuthCode($code: String!, $id: Int!, $type: String!) {\n    createGoogleToken(code: $code, id: $id, type: $type) {\n      success\n      tokens\n      error\n    }\n  }\n"]);return d=function(){return n},n}function p(){var n=(0,r.Z)(["\n  mutation GenerateMSURL($type: String!, $id: Int!) {\n    genenrateMSURL(id: $id, type: $type) {\n      url\n    }\n  }\n"]);return p=function(){return n},n}function f(){var n=(0,r.Z)(["\n  mutation signoutMS($id: Int!, $type: String!, $email: String!) {\n    signoutMS(id: $id, type: $type, email: $email) {\n      error\n      msId\n      success\n    }\n  }\n"]);return f=function(){return n},n}function m(){var n=(0,r.Z)(["\n  query getAccountMeta($id: Int!) {\n    account: Account_by_pk(id: $id) {\n      meta\n    }\n  }\n"]);return m=function(){return n},n}function h(){var n=(0,r.Z)(["\n  query user($id: Int!) {\n    user: User_by_pk(id: $id) {\n      meta\n      invoiceThreshold\n      quoteThreshold\n    }\n  }\n"]);return h=function(){return n},n}function g(){var n=(0,r.Z)(["\n  query GetAccountUserMeta($userId: Int!, $accountId: Int!) {\n    accountUser: Account_User(where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }) {\n      meta\n    }\n  }\n"]);return g=function(){return n},n}function x(){var n=(0,r.Z)(["\n  mutation UpdateAccountUserByUserIdAccoutId(\n    $userId: Int!\n    $accountId: Int!\n    $changes: Account_User_set_input!\n  ) {\n    update_Account_User(\n      where: { userId: { _eq: $userId }, accountId: { _eq: $accountId } }\n      _set: $changes\n    ) {\n      returning {\n        id\n      }\n    }\n  }\n"]);return x=function(){return n},n}function Z(){var n=(0,r.Z)(["\n  mutation updateAccount($accountId: Int!, $set: Account_set_input!) {\n    update_Account_by_pk(pk_columns: { id: $accountId }, _set: $set) {\n      id\n    }\n  }\n"]);return Z=function(){return n},n}function y(){var n=(0,r.Z)(["\n  mutation updateUserMeta($userId: Int!, $meta: jsonb!) {\n    update_User_by_pk(pk_columns: { id: $userId }, _set: { meta: $meta }) {\n      id\n      meta\n    }\n  }\n"]);return y=function(){return n},n}function v(){var n=(0,r.Z)(['\n  query userDevices($accountId: Int!) {\n    users: User(\n      where: {\n        Account_Users: { accountId: { _eq: $accountId }, status: { _eq: "active" } }\n        UserDevices: { status: { _eq: "active" } }\n        status: { _eq: "active" }\n      }\n    ) {\n      id\n      fullName\n      devices: UserDevices(\n        order_by: { updatedAt: desc_nulls_last }\n        where: { status: { _eq: "active" } }\n        limit: 1\n      ) {\n        id\n        playerId\n      }\n    }\n  }\n']);return v=function(){return n},n}function j(){var n=(0,r.Z)(['\n  query GetAccountLocations($accountId: Int, $limit: Int, $offset: Int) {\n    location: Location(\n      offset: $offset\n      limit: $limit\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      id\n      name\n      accountLocations: Account_Locations {\n        id\n      }\n      addresses: Addresses(where: { entity: { _eq: "Location" }, registered: { _eq: true } }) {\n        id\n        status\n        address: Address {\n          id\n          name\n          addressLine1\n          postCode\n        }\n      }\n    }\n    meta: Location_aggregate(\n      where: {\n        Account_Locations: {\n          accountId: { _eq: $accountId }\n          Account: { type: { _eq: "customer" } }\n        }\n      }\n    ) {\n      aggregate {\n        totalCount: count\n      }\n    }\n  }\n']);return j=function(){return n},n}function b(){var n=(0,r.Z)(["\n  mutation InsertUserAccountLocations(\n    $accountUserId: Int!\n    $objects: [User_Account_Location_insert_input!]!\n  ) {\n    delete_User_Account_Location(where: { accountUserId: { _eq: $accountUserId } }) {\n      affected_rows\n    }\n    insert_User_Account_Location(objects: $objects) {\n      affected_rows\n      returning {\n        id\n      }\n    }\n  }\n"]);return b=function(){return n},n}var _=(0,i.Ps)(a()),C=(0,i.Ps)(o()),I=(0,i.Ps)(s()),w=(0,i.Ps)(c()),$=(0,i.Ps)(u()),k=(0,i.Ps)(l()),N=(0,i.Ps)(d()),P=(0,i.Ps)(p()),A=(0,i.Ps)(f()),S=(0,i.Ps)(m()),L=(0,i.Ps)(h()),T=(0,i.Ps)(g()),U=(0,i.Ps)(x()),z=(0,i.Ps)(Z()),M=(0,i.Ps)(y()),E=(0,i.Ps)(v()),q=(0,i.Ps)(j()),D=(0,i.Ps)(b())}}]);