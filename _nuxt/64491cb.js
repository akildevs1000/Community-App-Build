(window.webpackJsonp=window.webpackJsonp||[]).push([[326,62,185],{1366:function(t,e,n){"use strict";n.r(e);var o=n(339),r=n(117),l=n(138),c=n(1202),d=n(538),_=n(1584),m=n(116),f=n(219),v=n(537),y=n(899),h=n(359),k=n(99),x=n(885),O=n(17),j=n(2),w=(n(69),n(37),n(120),n(70),n(12),{props:["report_type"],data:function(){var t;return t={tableHeight:750,status:"",department_ids:"",daily_date:"",to_date:"",isFilter:!1,totalRowsCount:0,snack:!1,snackColor:"",snackText:"",date:null,menu:!1,options:{}},Object(j.a)(t,"date",null),Object(j.a)(t,"menu",!1),Object(j.a)(t,"loading",!1),Object(j.a)(t,"time_menu",!1),Object(j.a)(t,"Model","Available Room"),Object(j.a)(t,"endpoint","room_report"),Object(j.a)(t,"search",""),Object(j.a)(t,"snackbar",!1),Object(j.a)(t,"add_manual_log",!1),Object(j.a)(t,"dialog",!1),Object(j.a)(t,"generateLogsDialog",!1),Object(j.a)(t,"reportSync",!1),Object(j.a)(t,"from_menu",!1),Object(j.a)(t,"to_menu",!1),Object(j.a)(t,"ids",[]),Object(j.a)(t,"departments",[]),Object(j.a)(t,"employees",[]),Object(j.a)(t,"DateRange",!0),Object(j.a)(t,"devices",[]),Object(j.a)(t,"loading",!1),Object(j.a)(t,"total",0),Object(j.a)(t,"payload",{report_type:"Available",from_date:null,to_date:null,daily_date:null,UserID:"",department_ids:[],status:"-1",DeviceID:"",branch_id:"",include_device_types:["all","Access Control"]}),Object(j.a)(t,"response",""),Object(j.a)(t,"data",[]),Object(j.a)(t,"errors",[]),Object(j.a)(t,"report_template","Template1"),Object(j.a)(t,"headers",[{text:"#",align:"left",sortable:!0,key:"id",value:"id",width:"50px"},{text:"Room Number",align:"left",sortable:!0,key:"room_number",value:"room_number",width:"50px"},{text:"Floor",align:"left",sortable:!0,key:"floor_id",value:"floor_id",width:"50px"},{text:"Room Category",align:"left",sortable:!0,key:"room_category.name",value:"room_category.name",width:"50px"},{text:"Tanent",align:"left",sortable:!0,key:"full_name",value:"full_name",width:"50px"},{text:"Contract Start",align:"left",sortable:!0,key:"tanent.start_date",value:"tanent.start_date",width:"50px"},{text:"Contract End",align:"left",sortable:!0,key:"tanent.end_date",value:"tanent.end_date",width:"50px"},{text:"Status",align:"left",sortable:!0,key:"status_id",value:"status_id",width:"50px"}]),Object(j.a)(t,"max_date",null),Object(j.a)(t,"isCompany",!0),Object(j.a)(t,"branches",[]),t},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},mounted:function(){var t=this;this.tableHeight=window.innerHeight-370,window.addEventListener("resize",(function(){t.tableHeight=window.innerHeight-370}))},created:function(){this.payload.report_type=this.report_type,this.setFromDate()},methods:{filterAttr:function(data){this.payload.from_date=data.from,this.payload.to_date=data.to,this.getDataFromApi()},setFromDate:function(){if(null==this.payload.from_date){var dt=new Date,t=dt.getFullYear(),e=dt.getMonth()+1,n=e<10?"0"+e:e;this.payload.from_date="".concat(t,"-").concat(n,"-01")}},can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this;return Object(O.a)(regeneratorRuntime.mark((function e(){var n,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.payload.from_date){e.next=2;break}return e.abrupt("return",!1);case 2:return t.payload.from_date&&(t.payload.from_date=t.payload.from_date),t.payload.to_date&&(t.payload.to_date=t.payload.to_date),t.loading=!0,e.next=7,t.$store.dispatch("fetchData",{key:"access_control_report",options:t.options,refresh:!0,endpoint:t.endpoint,filters:t.payload});case 7:n=e.sent,data=n.data,o=n.total,t.data=data,t.totalRowsCount=o,t.loading=!1;case 13:case"end":return e.stop()}}),e)})))()},pdfDownload:function(){var t=document.createElement("a");t.setAttribute("href","http://192.168.2.32:8000/api/pdf"),t.setAttribute("target","_blank"),t.click()},process_file:function(t){var e=this;return Object(O.a)(regeneratorRuntime.mark((function n(){var o,r,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,e.data&&e.data.length){n.next=4;break}return alert("No data found"),n.abrupt("return");case 4:"http://192.168.2.32:8000/api",o={company_id:e.$auth.user.company_id,branch_id:e.payload.branch_id,UserID:e.payload.UserID,DeviceID:e.payload.DeviceID,from_date:e.payload.from_date,to_date:e.payload.to_date,report_type:e.report_type,user_type:e.payload.user_type},e.payload.from_date&&(o.from_date=e.payload.from_date),e.payload.to_date&&(o.to_date=e.payload.to_date),r=Object.keys(o).map((function(t){return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(o[t]))})).join("&"),l="".concat("http://192.168.2.32:8000/api","/room_report_").concat(t.toLowerCase(),"?").concat(r,"&include_device_types[]=all&include_device_types[]=Access Control"),(c=document.createElement("a")).setAttribute("href",l),c.setAttribute("target","_blank"),c.click(),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),console.error("Error processing file:",n.t0.message);case 19:case"end":return n.stop()}}),n,null,[[0,16]])})))()}}}),C=n(60),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;return t.can("attendance_report_view")?e("div",[e(l.a,{staticClass:"mb-5 mt-5",attrs:{elevation:"0"}},[t.can("attendance_report_access")?e("div",[e("div",{staticClass:"text-center"},[e(y.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n          "+t._s(t.response)+"\n        ")]),t._v(" "),e(y.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e(r.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")])],1),t._v(" "),e(l.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[e(k.a,{staticClass:"backgrounds",attrs:{dense:"",flat:""}},[e(x.b,[e("span",[t._v(t._s(t.report_type)+" Rooms ")])]),t._v(" "),e("span",[e(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[e(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:t.getDataFromApi}},[t._v("mdi-reload")])],1)],1),t._v(" "),e(h.a),t._v(" "),e("span",{staticStyle:{"padding-left":"15px"}},[e("img",{staticClass:"iconsize",staticStyle:{cursor:"pointer"},attrs:{title:"Print",src:"/icons/icon_print.png"},on:{click:function(e){return t.process_file("print_pdf")}}})]),t._v(" "),e("span",{staticStyle:{"padding-left":"15px"}},[e("img",{staticClass:"iconsize",staticStyle:{cursor:"pointer"},attrs:{title:"Download Pdf",src:"/icons/icon_pdf.png"},on:{click:function(e){return t.process_file("download_pdf")}}})])],1),t._v(" "),e(_.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"model-value":"data.id","server-items-length":t.totalRowsCount,"fixed-header":"",height:t.tableHeight},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.id",fn:function(e){e.item;var n=e.index;return[t._v("\n            "+t._s(n+1)+"\n          ")]}},{key:"item.full_name",fn:function(n){var r=n.item;return[r.tanent?e(v.a,{attrs:{"no-gutters":""}},[e(d.a,{staticStyle:{padding:"3px","padding-left":"0px",width:"45px","max-width":"45px"},attrs:{md:"2"}},[e(o.a,[e(f.a,{attrs:{src:r.tanent&&r.tanent.profile_picture?r.tanent.profile_picture:"/no-profile-image.jpg"}})],1)],1),t._v(" "),e(d.a,[e("div",{staticClass:"mx-2 mt-2",staticStyle:{height:"15px"}},[t._v("\n                  "+t._s(r.tanent.full_name||"---")+"\n                ")]),t._v(" "),e("small",{staticClass:"mx-2 mt-2"},[t._v("\n                  "+t._s(r.tanent.nationality||"---"))])])],1):t._e()]}},{key:"item.status_id",fn:function(n){var o,r,l=n.item;return[e(c.a,{staticClass:"ma-1",attrs:{small:"",color:null!=l&&null!==(o=l.tanent)&&void 0!==o&&o.id?"grey":"green",dark:""}},[t._v("\n              "+t._s(null!=l&&null!==(r=l.tanent)&&void 0!==r&&r.id?"Occupied":"Available"))])]}}],null,!1,2477862889)})],1)],1):t._e()])],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(907).default})},1634:function(t,e,n){"use strict";n.r(e);var o=n(882),r=n(884),l=n(883),c=(n(542),n(6),n(80),{methods:{generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")}}}),d=n(60),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{color:"deep-purple accent-4",right:""}},[e(o.a,[t._v("Available Rooms")]),t._v(" "),e(o.a,[t._v("Occupied Rooms")]),t._v(" "),e(o.a,[t._v("Expiring Soon")]),t._v(" "),e(r.a,[e("CommunityFilteredRooms",{key:t.generateRandomId(),attrs:{report_type:"Available"}})],1),t._v(" "),e(r.a,[e("CommunityFilteredRooms",{key:t.generateRandomId(),attrs:{report_type:"Occupied"}})],1),t._v(" "),e(r.a,[e("CommunityFilteredRooms",{key:t.generateRandomId(),attrs:{report_type:"Expire"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommunityFilteredRooms:n(1366).default})},885:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(99),r=n(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");o.a},907:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);