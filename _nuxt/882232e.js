(window.webpackJsonp=window.webpackJsonp||[]).push([[159,91],{922:function(t,e,n){"use strict";n.r(e);var r=n(219),o={props:["icon"]},l=n(60),component=Object(l.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"80px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports},992:function(t,e,n){"use strict";n.r(e);var r=n(339),o=n(538),l=n(888),d=n(537),c=(n(33),n(59),n(34)),m=n(17),_=(n(31),n(58),n(542),n(6),n(80),n(37),n(70),n(28),n(69),{props:["item"],data:function(){return{logs_data:null,loading:!1,log_endpoint:"attendance_logs",log_headers:[{text:"#",align:"left",sortable:!1,key:"id",value:"id",width:"10px"},{text:"DateTime",align:"left",sortable:!1,key:"date_range",value:"LogTime",fieldType:"date_range_picker"},{text:"Device",align:"left",sortable:!0,key:"device",value:"device",filterable:!0,filterSpecial:!0}],dialog:!1,UserID:null,profile_pictrue:"no-profile-image.jpg",company_id:0,employee_stats:[],todayAttendance:null,remainingTime:"00:00"}},created:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.company_id=t.$auth.user.company_id,e.next=3,t.getEmployeeStats();case 3:return e.next=5,t.getTodayAttendance();case 5:return e.next=7,t.getLogs();case 7:case"end":return e.stop()}}),e)})))()},methods:{caps:function(t){if(t)return t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))},getDate:function(){var t=new Date,e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(r)},getLogs:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get(t.log_endpoint,{params:{per_page:10,company_id:t.company_id,UserID:t.item.employee.system_user_id,from_date:t.getDate(),to_date:t.getDate()}}).then((function(e){var data=e.data;t.logs_data=data.data}));case 1:case"end":return e.stop()}}),e)})))()},getTodayAttendance:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0,t.$axios.get("report",{params:{company_id:t.company_id,employee_id:t.item.employee.system_user_id,from_date:t.getFormattedDate(),to_date:t.getFormattedDate()}}).then((function(e){var data=e.data;if(t.loading=!1,!data.data.length)return t.getRemainingTime("00:00","00:00"),void(t.todayAttendance={total_hrs:"00:00",ot:"00:00"});var n=data.data[0],r=n.total_hrs,o=n.ot,l=n.shift;if(!l)return t.getRemainingTime("00:00","00:00"),void(t.todayAttendance={total_hrs:"00:00",ot:"00:00"});t.todayAttendance={total_hrs:t.timeHandler(r),ot:t.timeHandler(o)},t.getRemainingTime(t.timeHandler(r),t.timeHandler(l.working_hours))}));case 2:case"end":return e.stop()}}),e)})))()},timeHandler:function(t){return"---"===t?"00:00":t},getEmployeeStats:function(){var t=this;return Object(m.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("employee-statistics",{params:{company_id:t.company_id,employee_id:t.item.employee.system_user_id}}).then((function(e){var data=e.data;t.employee_stats=data}));case 1:case"end":return e.stop()}}),e)})))()},getFormattedDate:function(){var t=new Date;return"".concat(t.getFullYear(),"-").concat(String(t.getMonth()+1).padStart(2,"0"),"-").concat(String(t.getDate()).padStart(2,"0"))},getRemainingTime:function(t,e){var n=t.split(":").map(Number),r=Object(c.a)(n,2),o=r[0],l=r[1],d=e.split(":").map(Number),m=Object(c.a)(d,2),_=60*o+l-(60*m[0]+m[1]);if(_<0){var v=Math.abs(Math.ceil(_/60)),f=Math.abs(_%60);this.remainingTime="".concat(String(v).padStart(2,"0"),":").concat(String(f).padStart(2,"0"))}}}}),v=n(60),component=Object(v.a)(_,(function(){var t,e,n,c,m,_,v,f=this,y=f._self._c;return f.item&&f.item.id?y(d.a,{attrs:{"no-gutters":""}},[y(o.a,{staticStyle:{"border-right":"1px solid #dddddd"},attrs:{cols:"4"}},[y(l.a),f._v(" "),y(d.a,{staticClass:"pa-0 ma-0"},[y(o.a,{attrs:{cols:"12"}},[y("h3",[f._v("Employee")]),f._v(" "),y(d.a,{attrs:{"no-gutters":""}},[y(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[f._v("\n            "+f._s(f.item.employee.profile_pictrue)+"\n            "),y(r.a,{attrs:{size:"100"}},[y("img",{staticStyle:{width:"100%"},attrs:{src:f.item.employee&&f.item.employee.profile_picture?f.item.employee.profile_picture:"/no-profile-image.jpg",alt:"Avatar"}})])],1),f._v(" "),y(o.a,{staticClass:"text-center",attrs:{cols:"12"}},[y("div",{staticClass:"mt-1",staticStyle:{height:"15px","font-size":"12px"}},[f._v("\n              "+f._s(null!==(t=f.item.employee.first_name)&&void 0!==t?t:"---")+"\n              "+f._s(null!==(e=f.item.employee.last_name)&&void 0!==e?e:"---")+"\n            ")]),f._v(" "),y("div",{staticStyle:{height:"15px","font-size":"12px"}},[y("small",[f._v("\n                "+f._s(null!==(n=null===(c=f.item)||void 0===c||null===(m=c.employee)||void 0===m||null===(_=m.designation)||void 0===_?void 0:_.name)&&void 0!==n?n:"---")+"\n              ")])]),f._v(" "),y("div",{staticStyle:{"font-size":"12px"}},[y("small",[f._v("\n                "+f._s(null!==(v=f.item.employee.phone_number)&&void 0!==v?v:"---")+"\n              ")])])])],1)],1),f._v(" "),y(o.a,{attrs:{cols:"12"}},[y(l.a),f._v(" "),f._l(f.employee_stats.slice(0,6),(function(t,e){return y(d.a,{key:e,staticStyle:{"font-size":"15px",height:"20px"},attrs:{"no-gutters":""}},[y(o.a,{attrs:{cols:"6"}},[y("small",[f._v(" "+f._s(t.title))])]),f._v(" "),y(o.a,{staticClass:"text-right",attrs:{cols:"6"}},[y("small",[f._v(" "+f._s(t.value))])])],1)}))],2)],1)],1),f._v(" "),y(o.a,{attrs:{cols:"8"}},[y(l.a),f._v(" "),y(d.a,{staticClass:"px-3",attrs:{"no-gutters":""}},[y(o.a,{attrs:{cols:"12"}},[f.loading?y("ComonPreloader",{attrs:{icon:"face-scan"}}):y("table",{staticClass:"mt-4",staticStyle:{width:"100%"}},[y("tr",[y("td",{staticStyle:{"font-size":"12px"}},[y("small",{},[y("b",[f._v("#")])])]),f._v(" "),y("td",{staticStyle:{"font-size":"12px"}},[y("small",{},[y("b",[f._v("Date Time")])])]),f._v(" "),y("td",{staticStyle:{"font-size":"12px"}},[y("small",[y("b",[f._v("Device")])])]),f._v(" "),y("td",{staticStyle:{"font-size":"12px"}},[y("small",[y("b",[f._v("In/Out")])])])]),f._v(" "),f._l(f.logs_data,(function(t,e){var n;return y("tr",{key:t.id},[y("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[y("small",[f._v(f._s(e+1))])]),f._v(" "),y("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[y("small",[f._v(f._s(t.date)+" "+f._s(t.time))])]),f._v(" "),y("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[y("small",[f._v(f._s(t.device?t.device.name:"---"))])]),f._v(" "),y("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[y("small",[f._v(f._s(f.caps(null===(n=f.log)||void 0===n?void 0:n.log_type)))])])])}))],2)],1)],1)],1)],1):f._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ComonPreloader:n(922).default})}}]);