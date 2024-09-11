"use strict";(self.webpackChunksp_ipaasv18_0_4=self.webpackChunksp_ipaasv18_0_4||[]).push([[2653],{36447:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(65043),a=n(43488),o=n.n(a),r=n(44999),i=n.n(r),l=n(40854),d=n.n(l),c=n(70579);class h extends s.Component{constructor(){super(...arguments),this.state={data:[1,2,3]}}componentWillMount(){const e=this;d().get("https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json").then((function(t){e.setState({data:t.data})}))}render(){const e={chart:{zoomType:"x"},title:{text:"Average Response Time"},subtitle:{text:void 0===document.ontouchstart?"Click and drag in the plot area to zoom in":"Pinch the chart to zoom in"},xAxis:{type:"hourtime"},yAxis:{title:{text:"ms"}},legend:{enabled:!1},plotOptions:{area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#243E8A"],[1,"#58DECC"]]},marker:{radius:2},lineWidth:2,lineColor:"#58DECC",states:{hover:{lineWidth:1}},threshold:null}},series:[{type:"area",name:"V1 / 16390306",data:this.state.data}]};return this.state.data?(0,c.jsx)(i(),{highcharts:o(),options:e}):(0,c.jsx)("p",{children:"Loading..."})}}const p=h},92653:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var s=n(65043),a=n(61072),o=n(78602),r=n(33044),i=n(24831),l=n(43488),d=n.n(l),c=n(44999),h=n.n(c),p=n(70579);const x={chart:{type:"column"},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4"],title:{text:"Monthly Average Rainfall"},subtitle:{text:"Source: WorldClimate.com"},xAxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],crosshair:!0},yAxis:{min:0,title:{text:"Rainfall (mm)"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},plotOptions:{column:{pointPadding:.2,borderWidth:0}},series:[{name:"Tokyo",data:[49.9,71.5,106.4,129.2,144,176,135.6,148.5,216.4,194.1,95.6,54.4]},{name:"New York",data:[83.6,78.8,98.5,93.4,106,84.5,105,104.3,91.2,83.5,106.6,92.3]},{name:"London",data:[48.9,38.8,39.3,41.4,47,48.3,59,59.6,52.4,65.2,59.3,51.2]},{name:"Berlin",data:[42.4,33.2,34.5,39.7,52.6,75.5,57.4,60.4,47.6,39.1,46.8,51.1]}]};class m extends s.Component{render(){return(0,p.jsx)(h(),{highcharts:d(),options:x})}}const u=m,A={chart:{type:"spline"},colors:["#1de9b6","#1dc4e9","#A389D4"],title:{text:"Solar Employment Growth by Sector, 2010-2017"},subtitle:{text:"Source: thesolarfoundation.com"},yAxis:{title:{text:"Number of Employees"}},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"Installation",data:[5,25,15,35,25,35,45,75]},{name:"Manufacturing",data:[25,35,45,75,5,25,15,35]},{name:"Sales & Distribution",data:[45,75,25,5,15,55,5,25]}],responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}};class y extends s.Component{render(){return(0,p.jsx)(h(),{highcharts:d(),options:A})}}const j=y;var b=n(36447);const f={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Browser market shares in January, 2018"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Chrome",y:61.41,sliced:!0,selected:!0},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Other",y:7.05}]}]};class g extends s.Component{render(){return(0,p.jsx)(h(),{highcharts:d(),options:f})}}const C=g,B={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Browser market shares in January, 2018"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Brands",colorByPoint:!0,size:"90%",innerSize:"60%",data:[{name:"Chrome",y:61.41,sliced:!0,selected:!0},{name:"Internet Explorer",y:11.84},{name:"Firefox",y:10.85},{name:"Edge",y:4.67},{name:"Safari",y:4.18},{name:"Other",y:7.05}]}]};class D extends s.Component{render(){return(0,p.jsx)(h(),{highcharts:d(),options:B})}}const w=D;var v=n(54750),k=n.n(v);k()(d());const S={chart:{type:"pie",options3d:{enabled:!0,alpha:45}},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Contents of Highsoft weekly fruit delivery"},subtitle:{text:"3D in Highcharts"},plotOptions:{pie:{depth:45}},series:[{name:"Delivered amount",data:[["Bananas",8],["Kiwi",3],["Mixed nuts",2],["Oranges",6],["Apples",3],["Pears",4]]}]};class O extends s.Component{render(){return(0,p.jsx)(h(),{highcharts:d(),options:S})}}const P=O;k()(d());const T={chart:{type:"pie",options3d:{enabled:!0,alpha:45}},colors:["#1de9b6","#1dc4e9","#A389D4","#899FD4","#f44236","#f4c22b"],title:{text:"Contents of Highsoft weekly fruit delivery"},subtitle:{text:"3D donut in Highcharts"},plotOptions:{pie:{innerSize:100,depth:45}},series:[{name:"Delivered amount",data:[["Bananas",8],["Kiwi",3],["MIxed nuts",2],["Oranges",6],["Apples",3],["Pears",4]]}]};class F extends s.Component{render(){return(0,p.jsx)(h(),{highcharts:d(),options:T})}}const H=F,J={title:{text:"Combination chart"},xAxis:{categories:["Apples","Oranges","Pears","Bananas","Kiwi"]},colors:["#1de9b6","#1dc4e9","#A389D4"],labels:{items:[{html:"Total fruit consumption",style:{left:"50px",top:"18px",color:d().theme&&d().theme.textColor||"black"}}]},series:[{type:"column",name:"Jane",data:[3,2,1,3,4]},{type:"column",name:"John",data:[2,3,5,7,6]},{type:"column",name:"Joe",data:[4,3,3,9,0]},{type:"spline",name:"Average",data:[3,2.67,3,6.33,3.33],color:"#f44236",lineColor:"#f44236",marker:{lineWidth:2,lineColor:"#f44236",fillColor:"#fff"}},{type:"pie",name:"Total consumption",data:[{name:"Jane",y:13,color:"#1de9b6"},{name:"John",y:23,color:"#1dc4e9"},{name:"Joe",y:19,color:"#A389D4"}],center:[100,80],size:100,showInLegend:!1,dataLabels:{enabled:!1}}]};class L extends s.Component{render(){return(0,p.jsx)(h(),{highcharts:d(),options:J})}}const z=L;class E extends s.Component{render(){return(0,p.jsxs)(i.A,{children:[(0,p.jsx)(a.A,{children:(0,p.jsxs)(o.A,{children:[(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Bar [ Basic ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(u,{})})]}),(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Line [ Basic ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(j,{})})]}),(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Area [ Zoom ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(b.A,{})})]})]})}),(0,p.jsxs)(a.A,{children:[(0,p.jsx)(o.A,{lx:4,md:6,children:(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Pie [ Basic ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(C,{})})]})}),(0,p.jsx)(o.A,{lx:4,md:6,children:(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Pie [ Donut ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(w,{})})]})}),(0,p.jsx)(o.A,{lx:4,md:6,children:(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Pie [ 3D ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(P,{})})]})}),(0,p.jsx)(o.A,{lx:4,md:6,children:(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Pie [ Donut 3D ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(H,{})})]})})]}),(0,p.jsx)(a.A,{children:(0,p.jsx)(o.A,{children:(0,p.jsxs)(r.A,{children:[(0,p.jsx)(r.A.Header,{children:(0,p.jsx)(r.A.Title,{as:"h5",children:"Combinations [ Column, Line & Pie ] Chart"})}),(0,p.jsx)(r.A.Body,{children:(0,p.jsx)(z,{})})]})})})]})}}const W=E}}]);
//# sourceMappingURL=2653.1090dbc1.chunk.js.map