(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1028:function(t,e,r){var content=r(1053);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("947f9b9e",content,!0,{sourceMap:!1})},1052:function(t,e,r){"use strict";r(1028)},1053:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,".apexcharts-canvas{width:100%}",""]),n.locals={},t.exports=n},1058:function(t,e,r){"use strict";r.r(e);var n=r(539),o=r(538),c=(r(33),r(17)),h=(r(6),r(9),r(69),{props:["name","height","branch_id"],data:function(){return{series:[{name:"In",data:[]},{name:"Out",data:[]}],chartOptions:{colors:["#14B012","#FF0000","#FFB600"],chart:{toolbar:{show:!1},type:"bar",width:"98%"},plotOptions:{bar:{horizontal:!1,columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},yaxis:{title:{text:" "}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}}}},watch:{branch_id:function(){try{this.$store.commit("dashboard/every_hour_count",null),this.getDataFromApi()}catch(t){}}},created:function(){this.getDataFromApi()},mounted:function(){this.chartOptions.chart.height=this.height,this.chartOptions.series=this.series},methods:{viewLogs:function(){this.$router.push("/visitor_logs")},getDataFromApi:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$store.dispatch("dashboard/setDates",{user_type:"visitor"}),e.next=3,t.$store.dispatch("dashboard/visitor_every_hour_count");case 3:data=e.sent,t.renderChart(data);case 5:case"end":return e.stop()}}),e)})))()},renderChart:function(data){var t=this,e=0;data.forEach((function(r){t.chartOptions.series[0].data[e]=parseInt(r.in_count),t.chartOptions.series[1].data[e]=parseInt(r.out_count),t.chartOptions.xaxis.categories[e]=r.hour,e++}));try{new ApexCharts(document.querySelector("#"+this.name),this.chartOptions).render()}catch(t){}}}}),d=(r(1052),r(60)),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%"}},[e(o.a,[e(n.a,{attrs:{md:"10"}},[e("h4",{staticClass:"pl-2"},[t._v("Today Access Logs - Hourly(in/out)")])]),t._v(" "),e(n.a,{staticClass:"menu-icon-right",attrs:{md:"2"}})],1),t._v(" "),e("div",{staticStyle:{width:"100%"},attrs:{id:t.name}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);