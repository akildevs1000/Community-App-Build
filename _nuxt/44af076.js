(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1328:function(t,n,o){var content=o(1537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("51b89afa",content,!0,{sourceMap:!1})},1536:function(t,n,o){"use strict";o(1328)},1537:function(t,n,o){var e=o(20)((function(i){return i[1]}));e.push([t.i,".apexcharts-canvas{width:100%}",""]),e.locals={},t.exports=e},1747:function(t,n,o){"use strict";o.r(n);var e=o(117),r=o(539),c=o(116),h=o(336),d=o(211),l=o(10),f=o(888),_=o(538),v=(o(33),o(57),o(6),o(9),{props:["name","height","branch_id"],data:function(){return{series:[{name:"Log count",data:[]}],chartOptions:{colors:["#14B012","#FF0000","#FFB600"],chart:{toolbar:{show:!1},type:"bar",width:"98%"},plotOptions:{bar:{horizontal:!1,columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:[]},yaxis:{title:{text:" "}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return t}}}}}},watch:{branch_id:function(){this.getDataFromApi(),this.loading=!1}},created:function(){var t=this;setTimeout((function(){t.getDataFromApi()}),6e3)},mounted:function(){this.chartOptions.chart.height=this.height,this.chartOptions.series=this.series},methods:{viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this,n={params:{company_id:this.$auth.user.company_id,branch_id:this.branch_id>0?this.branch_id:null}};this.$axios.get("dashboard_get_counts_today_hour_in_out",n).then((function(n){var data=n.data,o=0;data.forEach((function(n){t.chartOptions.series[0].data[o]=parseInt(n.count),t.chartOptions.xaxis.categories[o]=n.hour,o++}));try{new ApexCharts(document.querySelector("#"+t.name),t.chartOptions).render()}catch(t){}}))}}}),m=(o(1536),o(60)),component=Object(m.a)(v,(function(){var t=this,n=t._self._c;return n("div",{staticStyle:{width:"100%"}},[n(_.a,[n(r.a,{attrs:{md:"10"}},[n("h4",{staticClass:"pl-2"},[t._v("Today Device Logs (in/out)")])]),t._v(" "),n(r.a,{staticClass:"menu-icon-right",attrs:{md:"2"}},[n(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,h=o.attrs;return[n(e.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",h,!1),r),[n(c.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),n(h.a,{attrs:{width:"120",dense:""}},[n(d.a,{on:{click:function(n){return t.viewLogs()}}},[n(l.c,{staticStyle:{cursor:"pointer"}},[t._v("\n              View Logs\n            ")])],1)],1)],1)],1)],1),t._v(" "),n("div",{staticStyle:{width:"100%"},attrs:{id:t.name}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);