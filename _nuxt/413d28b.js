(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{1322:function(t,e,n){var content=n(1525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("6b0be33c",content,!0,{sourceMap:!1})},1524:function(t,e,n){"use strict";n(1322)},1525:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,"#pie .apexcharts-legend-series[data-v-78f7757a]{margin:0 50px 2px 0!important}",""]),o.locals={},t.exports=o},1725:function(t,e,n){"use strict";n.r(e);n(70);var o={props:["items"],data:function(){return{options:{title:{text:"Devices Status",align:"left",margin:0},colors:["#009d00","#ff0000"],series:[],chart:{toolbar:{show:!1},width:253,type:"donut"},labels:[],dataLabels:{enabled:!0,style:{fontSize:"10px"}},legend:{show:!0,fontSize:"10px"},responsive:[{breakpoint:480,options:{chart:{toolbar:{show:!1}},legend:{position:"bottom"}}}]}}},mounted:function(){this.options.labels=this.items.map((function(t){return t.title})),this.options.series=this.items.map((function(t){return t.value})),new ApexCharts(document.querySelector("#pie2"),this.options).render()},methods:{}},r=(n(1524),n(60)),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticStyle:{padding:"0px",width:"100%"}},[t("div",{attrs:{id:"pie2"}})])}],!1,null,"78f7757a",null);e.default=component.exports}}]);