(window.webpackJsonp=window.webpackJsonp||[]).push([[371,91,266],{1085:function(t,e,n){var content=n(1165);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("77c0e0d6",content,!0,{sourceMap:!1})},1086:function(t,e,n){var content=n(1167);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("08d5f2f9",content,!0,{sourceMap:!1})},1087:function(t,e,n){var content=n(1169);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("643c2b9c",content,!0,{sourceMap:!1})},1088:function(t,e,n){var content=n(1171);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("07aef0d5",content,!0,{sourceMap:!1})},1164:function(t,e,n){"use strict";n(1085)},1165:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-5c704b73]{align-items:center;display:flex;height:31vh;justify-content:center}",""]),o.locals={},t.exports=o},1166:function(t,e,n){"use strict";n(1086)},1167:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-b05af396]{align-items:center;display:flex;height:31vh;justify-content:center}",""]),o.locals={},t.exports=o},1168:function(t,e,n){"use strict";n(1087)},1169:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-6d643026]{align-items:center;display:flex;height:31vh;justify-content:center}",""]),o.locals={},t.exports=o},1170:function(t,e,n){"use strict";n(1088)},1171:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-682bc78b]{align-items:center;display:flex;height:31vh;justify-content:center}",""]),o.locals={},t.exports=o},1204:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(116),c=n(219),d=n(220),m=n(2),f=n(122),h=n(8),v=n(16),_=n(5).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(m.a)({},this.activeClass,this.isActive)}),element):(Object(v.c)("v-item should only contain a single element",this),element)):(Object(v.c)("v-item is missing a default scopedSlot",this),null);var element}}),y=(Object(h.a)(_,Object(f.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(h.a)(_,Object(f.a)("slideGroup")).extend({name:"v-slide-item"})),x=n(359),C=n(99),k=n(885),O=n(881),D=(n(33),n(17)),w=(n(69),n(70),n(37),n(41),n(61),n(103),n(6),n(542),n(80),{data:function(){return{loading:!1,items:[],emptyLogmessage:"",number_of_records:10,logs:[],url:"wss://sdk.mytime2cloud.com/WebSocket",socket:null}},mounted:function(){this.socketConnection()},created:function(){this.getDataFromApi()},computed:{employees:function(){return this.$store.state.employeeList.map((function(t){return{system_user_id:t.system_user_id,first_name:t.first_name,last_name:t.last_name,display_name:t.display_name}}))},devices:function(){if(this.$store.state.devices)return this.$store.state.devices.map((function(t){return t.device_id}))}},methods:{getDataFromApi:function(){var t=this;this.loading=!0,this.$axios.get("device/getLastRecordsByCount/".concat(this.$auth.user.company_id,"/").concat(this.number_of_records)).then(function(){var e=Object(D.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,t.loading=!1,e.next=4,data.map((function(t){return{UserCode:t.UserID,time:t.time,name:t.employee&&(t.employee.display_name||t.employee.first_name||t.employee.last_name),image:t.employee&&t.employee.profile_picture||"/no-profile-image.jpg"}}));case 4:t.logs=e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},socketConnection:function(){var t=this;this.socket=new WebSocket(this.url),this.socket.onmessage=function(e){var data=e.data,n=JSON.parse(data).Data;n&&n.UserCode>0&&t.getDetails(n)}},getDetails:function(t){var e=t.SN,n=t.RecordImage,o=t.UserCode,r=t.RecordDate;if(this.devices&&this.devices.includes(e)){var l=this.employees.find((function(t){return t.system_user_id==o&&null!==t.first_name})),c={UserCode:o,image:"data:image;base64,"+n||!1,time:this.setTime(r),name:l&&(l.display_name||l.first_name||l.last_name)};this.logs.unshift(c)}},setTime:function(t){var e=new Date(t),n=e.getHours().toString().padStart(2,"0"),o=e.getMinutes().toString().padStart(2,"0");return"".concat(n,":").concat(o)}}}),S=w,A=(n(1168),n(60)),component=Object(A.a)(S,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"1"}},[e(C.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(k.b,[e("span",[t._v(" RealTime Log List")])]),t._v(" "),e(O.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",c,!1),r),[e(l.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)]}}])},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(x.a),t._v(" "),e(O.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/devicelogs",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",c,!1),r),[e(l.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Raw Log List")])])],1),t._v(" "),e("div",{staticClass:"center-both",staticStyle:{"min-height":"300px"}},[t.loading?e("ComonPreloader",{attrs:{icon:"face-scan"}}):t.logs.length?e(d.b,{attrs:{"center-active":"",multiple:"","show-arrows":""}},t._l(t.logs,(function(n,i){return e(y,{key:i,staticClass:"ma-5"},[e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"}},[e(c.a,{staticStyle:{"max-width":"125px","max-height":"125px","object-fit":"contain","border-radius":"50%"},attrs:{src:n.image}}),t._v(" "),e("div",{staticStyle:{"margin-top":"10px"}},[t._v("\n            "+t._s(n.name)+" -\n            "+t._s(n.UserCode)+"\n          ")]),t._v(" "),e("div",[e(o.a,{staticClass:"ma-2",attrs:{"x-small":"",outlined:"",color:"background"}},[e("span",[t._v(t._s(n.time))])])],1)],1)])})),1):e("div",[t._v("No record found")])],1)],1)}),[],!1,null,"6d643026",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(922).default})},1221:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(116),c=n(359),d=n(99),m=n(885),f=n(881),h=n(17),v=(n(69),n(70),{props:["page"],data:function(){return{Model:"Attendance",data:[],chartOptions:{title:{align:"center",margin:0},colors:[],series:[],chart:{toolbar:{show:!1},width:350,type:"pie"},labels:[],dataLabels:{enabled:!0,style:{fontSize:"10px"}},legend:{show:!0,fontSize:"10px"},responsive:[{breakpoint:480,options:{chart:{toolbar:{show:!1},width:250},legend:{position:"bottom"}}}]},loading:!0}},created:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this,e={params:{page:this.page||"dashboard2",type:"card",company_id:this.$auth.company_id}};this.$axios.get("theme",e).then(function(){var e=Object(h.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,t.loading=!1,t.data=data,e.next=5,data.map((function(t){return t.color}));case 5:return t.chartOptions.colors=e.sent,e.next=8,data.map((function(t){return t.title}));case 8:return t.chartOptions.labels=e.sent,e.next=11,data.map((function(t){return parseInt(t.calculated_value)}));case 11:t.chartOptions.series=e.sent,new ApexCharts(document.querySelector("#AttendancePie"),t.chartOptions).render();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))}}}),_=v,y=(n(1164),n(60)),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"1"}},[e(d.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(m.b,[e("span",[t._v(" "+t._s(t.Model)+" ")])]),t._v(" "),e(c.a),t._v(" "),e(f.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/attendance_report",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",c,!1),r),[e(l.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Reports")])])],1),t._v(" "),e("div",{staticClass:"center-both",staticStyle:{"min-height":"300px"}},[t.loading?e("ComonPreloader",{attrs:{icon:"pie-chart"}}):t.data.length?e("div",{attrs:{id:"AttendancePie"}}):e("div",[t._v("No record found")])],1)],1)}),[],!1,null,"5c704b73",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(922).default})},1222:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(79),c=n(116),d=n(359),m=n(99),f=n(885),h=n(881),v=(n(14),n(73),{data:function(){return{options:{},Model:"Announcement",endpoint:"announcement_list",loading:!1,dataLength:0,headers:[{text:"Title",align:"left",sortable:!0,key:"title",value:"title"},{text:"Start Date",align:"left",sortable:!0,value:"start_date",key:"start_date"},{text:"End Date",align:"left",sortable:!0,value:"end_date",key:"end_date"}],data:[]}},created:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this;this.loading=!0;var e=this.options,n=e.sortBy,o=e.sortDesc,r={params:{page:e.page,sortBy:n?n[0]:"",sortDesc:o?o[0]:"",per_page:5,company_id:this.$auth.user.company_id}};this.$axios.get(this.endpoint,r).then((function(e){var data=e.data;t.loading=!1,t.dataLength=data.total,t.data=data.data,data.total||(t.headers=[])}))}}}),_=(n(1166),n(60)),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"1"}},[e(m.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(f.b,[e("span",[t._v(" "+t._s(t.Model)+" List ")])]),t._v(" "),e(d.a),t._v(" "),e(h.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/announcement",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(c.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Announcement List")])])],1),t._v(" "),e("div",{class:t.dataLength?"":"center-both",staticStyle:{"min-height":"300px"}},[t.loading?e("ComonPreloader",{attrs:{icon:"notification"}}):t.loading||t.dataLength?e("div",{staticStyle:{width:"100%","max-height":"300px","overflow-y":"auto"}},t._l(t.data,(function(n,i){return e(l.c,{key:i,staticClass:"px-2"},[e("b",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v("\n          "+t._s(n.description)+"\n          "),e("small",{staticStyle:{float:"right","font-size":"9px"}},[t._v("Created At "+t._s(n.dateTime))])]),t._v(" "),i+1!==t.data.length?e("div",{staticStyle:{"border-bottom":"1px solid #b3b1b1"}}):t._e()])})),1):e("div",[t._v("No record found")])],1)],1)}),[],!1,null,"b05af396",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(922).default})},1223:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(116),c=n(359),d=n(99),m=n(885),f=n(881),h=n(17),v=(n(69),{data:function(){return{Model:"Device Status",dataLength:0,data:[],chartOptions:{title:{align:"center",margin:0},colors:["#23bdb8","#f48665"],series:[],chart:{toolbar:{show:!1},width:300,type:"pie"},labels:[],dataLabels:{enabled:!0,style:{fontSize:"10px"}},legend:{show:!0,fontSize:"10px"},responsive:[{breakpoint:480,options:{chart:{toolbar:{show:!1},width:250},legend:{position:"bottom"}}}]},loading:!0}},mounted:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this;this.loading=!0,this.$axios.get("devcieCountByStatus/".concat(this.$auth.user.company_id)).then(function(){var e=Object(h.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,t.loading=!1,e.next=4,data.total;case 4:return t.dataLength=e.sent,e.next=7,data.labels;case 7:return t.chartOptions.labels=e.sent,e.next=10,data.series;case 10:return t.chartOptions.series=e.sent,e.prev=11,e.next=14,new ApexCharts(document.querySelector("#DeviceStatusPieId"),t.chartOptions).render();case 14:e.next=18;break;case 16:e.prev=16,e.t0=e.catch(11);case 18:case"end":return e.stop()}}),e,null,[[11,16]])})));return function(t){return e.apply(this,arguments)}}())}}}),_=v,y=(n(1170),n(60)),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"1"}},[e(d.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(m.b,[e("span",[t._v(" "+t._s(t.Model)+" ")])]),t._v(" "),e(c.a),t._v(" "),e(f.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/device",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",c,!1),r),[e(l.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Reports")])])],1),t._v(" "),e("div",{staticClass:"center-both",staticStyle:{"min-height":"300px"}},[t.loading?e("ComonPreloader",{attrs:{icon:"pie-chart"}}):t.loading||t.dataLength?e("div",{attrs:{id:"DeviceStatusPieId"}}):e("div",[t._v("No record found")])],1)],1)}),[],!1,null,"682bc78b",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(922).default})},1224:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(538),c=n(1584),d=n(116),m=n(219),f=n(537),h=n(359),v=n(99),_=n(885),y=n(881),x=n(2);n(70),n(31),n(272),n(12),n(14),n(11),n(6),n(20),n(9),n(21);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={data:function(){return{options:{},Model:"Recent Log",endpoint:"attendance_logs",search:"",loading:!1,total:0,headers:[{text:"Employee",align:"left",sortable:!0,key:"UserID",value:"UserID",filterable:!0,filterSpecial:!1},{text:"Log Time",align:"left",sortable:!0,key:"LogTime",value:"LogTime",filterable:!0,filterSpecial:!0},{text:"Device Name",align:"left",sortable:!0,key:"device",value:"device.name",filterable:!0,filterSpecial:!0}],response:"",data:[],options_dialog:{}}},watch:{selectAllDepartment:function(t){t?(this.editedItem.departments=this.departments.map((function(t){return t.id})),this.employeesByDepartment()):(this.editedItem.departments=[],this.getEmployees())},selectAllEmployee:function(t){this.editedItem.employees=t?this.employees_dialog.map((function(t){return t.id})):[]},dialog:function(t){t||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDataFromApi()},methods:{datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},applyFilters:function(){this.from_menu_filter=!1,this.to_menu_filter=!1,this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0;var r={params:k({per_page:10,company_id:this.$auth.user.company_id},this.filters)};""!=n&&(r.params[n]=o),this.$axios.get(e,r).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;0==data.total&&(t.headers=[]),t.data=data.data,t.total=data.total,t.loading=!1}))}}},D=O,w=n(60),component=Object(w.a)(D,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"0"}},[e(v.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(_.b,[e("span",[t._v(" "+t._s(t.Model)+" List ")])]),t._v(" "),e(y.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(d.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)]}}])},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(h.a),t._v(" "),e(y.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/devicelogs",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(d.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Announcement List")])])],1),t._v(" "),e(c.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.total},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.UserID",fn:function(n){var o=n.item;n.index;return[e(f.a,{attrs:{"no-gutters":""}},[e(l.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"50px","max-width":"50px"}},[e(m.a,{staticStyle:{"border-radius":"50%",height:"auto",width:"30px","max-width":"30px"},attrs:{src:o.employee&&o.employee.profile_picture,"lazy-src":"/no-profile-image.jpg"}})],1),t._v(" "),e(l.a,{staticStyle:{padding:"10px"}},[t._v("\n          "+t._s(o.employee?o.employee.full_name:"---")+"\n        ")])],1)]}},{key:"no-data",fn:function(){return[e("div",{staticClass:"no-data-container"},[t._v("No data available")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},1225:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(1202),c=n(1584),d=n(116),m=n(359),f=n(99),h=n(885),v=n(881),_=(n(33),n(12),n(14),n(11),n(6),n(20),n(9),n(21),n(2));n(70),n(31),n(272),n(37);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={data:function(){return{options:{},Model:"Devices",endpoint:"device",search:"",loading:!1,total:0,headers:[{text:"Short Name",align:"left",sortable:!0,value:"short_name",filterable:!0},{text:"Location",align:"left",sortable:!0,value:"location",filterable:!0},{text:"Status",align:"center",sortable:!0,value:"status_id",filterable:!0,filterSpecial:!0}],response:"",data:[],options_dialog:{}}},watch:{selectAllDepartment:function(t){t?(this.editedItem.departments=this.departments.map((function(t){return t.id})),this.employeesByDepartment()):(this.editedItem.departments=[],this.getEmployees())},selectAllEmployee:function(t){this.editedItem.employees=t?this.employees_dialog.map((function(t){return t.id})):[]},dialog:function(t){t||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDataFromApi()},methods:{datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},applyFilters:function(){this.from_menu_filter=!1,this.to_menu_filter=!1,this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0;var r=this.options,l=r.sortBy,c=r.sortDesc,d=r.page,m=r.itemsPerPage,f={params:x({page:d,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:m,company_id:this.$auth.user.company_id},this.filters)};""!=n&&(f.params[n]=o),this.$axios.get("".concat(e,"?page=").concat(d),f).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;0==data.total&&(t.headers=[]),t.data=data.data,t.total=data.total,t.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))}}},k=C,O=n(60),component=Object(O.a)(k,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"0"}},[e(f.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(h.b,[e("span",[t._v(" "+t._s(t.Model)+" List ")])]),t._v(" "),e(v.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(d.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)]}}])},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(m.a),t._v(" "),e(v.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/device",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(d.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Announcement List")])])],1),t._v(" "),e(c.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.data.total},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.status_id",fn:function(n){var o=n.item;return[e(l.a,{staticClass:"p-2 mx-1",attrs:{small:"",color:"active"!==o.status.name?"error":"primary"}},[t._v("\n        "+t._s("active"!==o.status.name?"offline":"online")+"\n      ")])]}},{key:"no-data",fn:function(){return[e("div",{staticClass:"no-data-container"},[t._v("No data available")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},1226:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(1584),c=n(116),d=n(359),m=n(99),f=n(885),h=n(881),v=(n(12),n(14),n(11),n(6),n(20),n(9),n(21),n(2));n(70),n(31),n(272),n(37);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={data:function(){return{options:{},Model:"Report Notification",endpoint:"report_notification",search:"",loading:!1,total:0,headers:[{text:"Subject",align:"left",sortable:!0,key:"title",value:"subject",filterable:!0,filterSpecial:!1},{text:"Frequency",align:"left",sortable:!0,key:"frequency",value:"frequency",filterable:!0,filterSpecial:!1},{text:"Time",align:"left",sortable:!0,key:"time",value:"time",filterable:!0,filterSpecial:!1}],response:"",data:[],options_dialog:{}}},watch:{selectAllDepartment:function(t){t?(this.editedItem.departments=this.departments.map((function(t){return t.id})),this.employeesByDepartment()):(this.editedItem.departments=[],this.getEmployees())},selectAllEmployee:function(t){this.editedItem.employees=t?this.employees_dialog.map((function(t){return t.id})):[]},dialog:function(t){t||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDataFromApi()},methods:{datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},applyFilters:function(){this.from_menu_filter=!1,this.to_menu_filter=!1,this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0;var r=this.options,l=r.sortBy,c=r.sortDesc,d=r.page,m=r.itemsPerPage,f={params:y({page:d,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:m,company_id:this.$auth.user.company_id},this.filters)};""!=n&&(f.params[n]=o),this.$axios.get("".concat(e,"?page=").concat(d),f).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;0==data.total&&(t.headers=[]),t.data=data.data,t.total=data.total,t.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))}}},C=x,k=n(60),component=Object(k.a)(C,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"0"}},[e(m.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(f.b,[e("span",[t._v(" "+t._s(t.Model)+" List ")])]),t._v(" "),e(h.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(c.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)]}}])},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(d.a),t._v(" "),e(h.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/report_notifications",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(c.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Announcement List")])])],1),t._v(" "),e(l.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.data.total},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[e("div",{staticClass:"no-data-container"},[t._v("No data available")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},1385:function(t,e,n){"use strict";n.r(e);var o=n(138),r=n(538),l=n(537),c={props:["page"],data:function(){return{editDialog:!1,cardData:[]}},mounted:function(){this.getRecord()},methods:{getRecord:function(){var t=this,e={page:this.page,type:"card",company_id:this.$auth.user.company_id};this.$axios.get("theme",{params:e}).then((function(e){var data=e.data;t.cardData=data})).catch((function(t){return console.log(t)}))},goToThemeEditor:function(){this.$router.push("theme/".concat(this.page))}}},d=n(60),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e(l.a,t._l(t.cardData,(function(n,l){return e(r.a,{key:l,attrs:{cols:n.cols,sm:n.sm,md:n.md}},[e(o.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:n.color,dark:"",dense:""}},[e("div",{staticClass:"text-center pt-5 pb-1"},[e("h5",[t._v(t._s(n.calculated_value))]),t._v(" "),e("p",[t._v(t._s(n.title))])])])],1)})),1)}),[],!1,null,null,null);e.default=component.exports},1386:function(t,e,n){"use strict";n.r(e);var o=n(538),r=n(537),l=n(1221),c=n(1222),d=n(1204),m=n(1223),f=n(1224),h=n(1225),v=n(1226),_={props:["page"],components:{RealTimeLog:d.default,AnnouncementNew:c.default,AttendanceLog:f.default,Device:h.default,ReportNotification:v.default,AttendancePIE:l.default,DevicePIE:m.default}},y=n(60),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e(r.a,[e(o.a,{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[e("AttendancePIE",{attrs:{page:t.page}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[e("AnnouncementNew")],1),t._v(" "),e(o.a,{attrs:{cols:"12",xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[e("DevicePIE")],1),t._v(" "),e(o.a,{attrs:{cols:"12"}},[e("RealTimeLog"),t._v(" "),e("AttendanceLog"),t._v(" "),e("Device"),t._v(" "),e("ReportNotification")],1)],1)}),[],!1,null,null,null);e.default=component.exports},1643:function(t,e,n){"use strict";n.r(e);var o=n(902),r=n(1578),l=n(1385),c=n(1386),d={components:{Dashboard:r.default,DashboardCardComponent:l.default,DashboardComponent:c.default},computed:{id:function(){return"dashboard2"},isEmployee:function(){return"employee"===this.$store.state.loginType},employeeComponent:function(){return r.default},defaultCardComponent:function(){return l.default},defaultComponent:function(){return c.default}},created:function(){}},m=n(60),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e(o.a,[t.isEmployee?e(t.employeeComponent,{tag:"component"}):[e(t.defaultCardComponent,{tag:"component",attrs:{page:t.id}}),t._v(" "),e(t.defaultComponent,{tag:"component",attrs:{page:t.id}})]],2)}),[],!1,null,null,null);e.default=component.exports},922:function(t,e,n){"use strict";n.r(e);var o=n(219),r={props:["icon"]},l=n(60),component=Object(l.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(o.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);