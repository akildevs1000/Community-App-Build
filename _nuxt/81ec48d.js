(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1351:function(t,e,n){var content=n(1566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("491111b6",content,!0,{sourceMap:!1})},1565:function(t,e,n){"use strict";n(1351)},1566:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".menu-icon-right{margin:auto;text-align:right}",""]),o.locals={},t.exports=o},1768:function(t,e,n){"use strict";n.r(e);var o=n(340),c=n(117),r=n(138),l=n(539),d=n(116),v=n(336),_=n(211),m=n(10),f=n(888),h=n(538),x=(n(57),{data:function(){return{offlineDevices:0,leaveRequests:0,data:{employeeCount:0,totalIn:0,totalOut:0,presentCount:0,absentCount:0,missingCount:0,offCount:0,holidayCount:0,leaveCount:0,vaccationCount:0}}},watch:{},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.getDataFromApi()}),4e3)},methods:{viewLeaves:function(){this.$router.push("/leaves")},viewLogs:function(){this.$router.push("/attendance_report")},getDataFromApi:function(){var t=this,e={params:{company_id:this.$auth.user.company_id}};this.$axios.get("dashbaord_attendance_count",e).then((function(e){var data=e.data;t.data=data,setTimeout((function(){t.getDeviceStatus(),t.getPendingLeavesCount()}),2e3)}))},getDeviceStatus:function(){var t=this;this.$axios.get("/devcie_count_Status/".concat(this.$auth.user.company_id)).then((function(e){var data=e.data;t.offlineDevices=data.series?data.series[1]:0}))},getPendingLeavesCount:function(){var t=this,e={params:{company_id:this.$auth.user.company_id||0}};this.$axios.get("employee_leaves_new",e).then((function(e){var data=e.data;t.leaveRequests=data.total_pending_count}))}}}),y=(n(1565),n(60)),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{staticClass:"py-2 mb-2"},[e(h.a,{attrs:{"align-self":"center"}},[e(l.a,{staticClass:"laptop-padding",staticStyle:{"padding-left":"25px"},attrs:{lg:"6",md:"6",sm:"6",xs:"6","align-self":"center"}},[t._v("Total Employees")]),t._v(" "),e(l.a,{staticClass:"text-red bold text-h3 red--text laptop-padding",staticStyle:{"margin-left":"5px"},attrs:{lg:"4",md:"4",sm:"4",xs:"4","align-self":"center"}},[t._v(t._s(t.data.employeeCount))])],1)],1),t._v(" "),e(h.a,[e(l.a,{attrs:{md:"6",xs:"12",sm:"12",cols:"12"}},[e(r.a,{staticClass:"py-2"},[e(h.a,{staticClass:"pa-2"},[e(h.a,{staticClass:"pa-0 ma-0"},[e(l.a,{attrs:{md:"6"}},[e(o.a,{attrs:{color:"green"}},[e(d.a,{staticStyle:{color:"#fff"},attrs:{size:"30"}},[t._v("mdi-account-outline")])],1)],1),t._v(" "),e(l.a,{staticClass:"menu-icon-right text-end",attrs:{md:"6"}},[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLogs()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n                      View Logs\n                    ")])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{staticStyle:{"text-align":"center","padding-top":"0px"},attrs:{md:"12"}},[e("div",{staticClass:"bold text-h3 green--text"},[t._v("\n                "+t._s(t.data.presentCount)+"\n              ")]),t._v(" "),e("div",[t._v("Today Presents")])])],1)],1)],1)],1),t._v(" "),e(l.a,{attrs:{md:"6",xs:"12",sm:"12",cols:"12"}},[e(r.a,{staticClass:"py-2"},[e(h.a,{staticClass:"pa-2"},[e(h.a,{staticClass:"pa-0 ma-0"},[e(l.a,{attrs:{md:"6"}},[e(o.a,{attrs:{color:"red"}},[e(d.a,{staticStyle:{color:"#fff"},attrs:{size:"30"}},[t._v("mdi-account-minus-outline")])],1)],1),t._v(" "),e(l.a,{staticClass:"menu-icon-right text-end",attrs:{md:"6"}},[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLogs()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n                      View Logs\n                    ")])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{staticStyle:{"text-align":"center","padding-top":"0px"},attrs:{md:"12"}},[e("div",{staticClass:"bold text-h3 red--text"},[t._v(t._s(t.data.absentCount))]),t._v(" "),e("div",[t._v("Today Absensts")])])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{attrs:{md:"6",xs:"12",sm:"12",cols:"12"}},[e(r.a,{staticClass:"py-2"},[e(h.a,{staticClass:"pa-2"},[e(h.a,{staticClass:"pa-0 ma-0"},[e(l.a,{attrs:{md:"6"}},[e(o.a,{attrs:{color:"blue"}},[e(d.a,{staticStyle:{color:"#fff"},attrs:{size:"30"}},[t._v("mdi-airplane-takeoff")])],1)],1),t._v(" "),e(l.a,{staticClass:"menu-icon-right",attrs:{md:"6"}},[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLogs()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n                      View Logs\n                    ")])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{staticStyle:{"text-align":"center","padding-top":"0px"},attrs:{md:"12"}},[e("div",{staticClass:"bold text-h3 blue--text"},[t._v("\n                "+t._s(t.data.vaccationCount)+"\n              ")]),t._v(" "),e("div",[t._v("On Vacation")])])],1)],1)],1)],1),t._v(" "),e(l.a,{attrs:{md:"6",xs:"12",sm:"12",cols:"12"}},[e(r.a,{staticClass:"py-2"},[e(h.a,{staticClass:"pa-2"},[e(h.a,{staticClass:"pa-0 ma-0"},[e(l.a,{attrs:{md:"6"}},[e(o.a,{attrs:{color:"yellow"}},[e(d.a,{staticStyle:{color:"#fff"},attrs:{size:"30"}},[t._v("mdi-clock-time-eight-outline")])],1)],1),t._v(" "),e(l.a,{staticClass:"menu-icon-right",attrs:{md:"6"}},[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLogs()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n                      View Logs\n                    ")])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{staticStyle:{"text-align":"center","padding-top":"0px"},attrs:{md:"12"}},[e("div",{staticClass:"bold text-h3 blue--text"},[t._v("\n                "+t._s(t.data.leaveCount)+"\n              ")]),t._v(" "),e("div",{staticStyle:{width:"210px","text-align":"center"}},[t._v("On Leave")])])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{attrs:{md:"6",xs:"12",sm:"12",cols:"12"}},[e(r.a,{staticClass:"py-2"},[e(h.a,{staticClass:"pa-2"},[e(h.a,{staticClass:"pa-0 ma-0"},[e(l.a,{attrs:{md:"6"}},[e(o.a,{attrs:{color:"#E65100"}},[e(d.a,{staticStyle:{color:"#fff"},attrs:{size:"30"}},[t._v("mdi-cellphone-information")])],1)],1),t._v(" "),e(l.a,{staticClass:"menu-icon-right",attrs:{md:"6"}},[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLogs()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n                      View Logs\n                    ")])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{staticStyle:{"text-align":"center","padding-top":"0px"},attrs:{md:"12"}},[e("div",{staticClass:"bold text-h3 red--text"},[t._v(t._s(t.offlineDevices))]),t._v(" "),e("div",[t._v("Offline Devices")])])],1)],1)],1)],1),t._v(" "),e(l.a,{attrs:{md:"6",xs:"12",sm:"12",cols:"12"}},[e(r.a,{staticClass:"py-2"},[e(h.a,{staticClass:"pa-2"},[e(h.a,{staticClass:"pa-0 ma-0"},[e(l.a,{attrs:{md:"6"}},[e(o.a,{attrs:{color:"black"}},[e(d.a,{staticStyle:{color:"#fff"},attrs:{size:"30"}},[t._v("mdi-card-account-mail-outline")])],1)],1),t._v(" "),e(l.a,{staticClass:"menu-icon-right",attrs:{md:"6"}},[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(_.a,{on:{click:function(e){return t.viewLeaves()}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[t._v("\n                      View Leaves\n                    ")])],1)],1)],1)],1)],1),t._v(" "),e(h.a,[e(l.a,{staticStyle:{"text-align":"center","padding-top":"0px"},attrs:{md:"12"}},[e("div",{staticClass:"bold text-h3 black--text"},[t._v(t._s(t.leaveRequests))]),t._v(" "),e("div",[t._v("Leave Requests")])])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);