(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1617:function(e,t,n){"use strict";n.r(t);var o=n(117),r=n(138),l=n(538),c=n(1584),d=n(116),m=n(219),f=n(537),v=n(899),_=n(359),h=n(221),y=n(99),x=n(885),k=n(881),w=(n(33),n(12),n(14),n(11),n(20),n(9),n(21),n(2));n(6),n(80),n(31),n(58),n(37),n(120),n(59);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(w.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={data:function(){return{totalRowsCount:0,showFilters:!1,filters:{},isFilter:!1,datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",Model:"Device",pagination:{current:1,total:0,per_page:10},options:{},endpoint:"device",search:"",snackbar:!1,dialog:!1,data:[],loading:!1,total:0,headers:[{text:"&nbsp #"},{text:"Pic"},{text:"Name"},{text:"E.id"},{text:"Last Active"},{text:"Device name"}],editedIndex:-1,response:"",errors:[],number_of_records:20,logs:[],url:"wss://sdk.mytime2cloud.com/WebSocket",socket:null,headers_table:[{text:"Employee Name",align:"left",sortable:!0,filterable:!0,value:"employee.first_name"},{text:"Department",align:"left",sortable:!1,filterable:!0,value:"employee.department"},{text:"E.ID",align:"left",sortable:!0,filterable:!0,value:"UserID"},{text:"Employee   Id",align:"left",sortable:!0,filterable:!0,value:"employee.employee_id"},{text:"Time",align:"left",sortable:!0,filterable:!0,value:"LogTime"},{text:"Device Name",align:"left",sortable:!0,filterable:!0,value:"device.device_name"},{text:"Location",align:"left",sortable:!0,filterable:!0,value:"device.location"}]}},watch:{options:{handler:function(){this.getRecords()},deep:!0}},mounted:function(){this.socketConnection()},created:function(){},methods:{caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},toggleFilter:function(){this.isFilter=!this.isFilter},applyFilters:function(){this.getRecords()},datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},getRecords:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(this.loading=!0,""!=n&&n.length<=2)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 3 Characters to filter ",this.loading=!1,!1;var o=this.options,r=o.sortBy,l=o.sortDesc,c=o.page,d=o.itemsPerPage;d||(d=10);var m={params:D({page:c,sortBy:r?r[0]:"",sortDesc:l?l[0]:"",per_page:d,filter_column:n},this.filters)};""!=t&&(m.params[t]=n),this.$axios.get("device/getLastRecordsHistory/".concat(this.$auth.user.company_id,"/").concat(d),m).then((function(t){var data=t.data;e.totalRowsCount=data.total,e.logs=data.data,e.loading=!1}))},getShortName:function(e){return!!e&&e.split(" ").slice(0,2).join(" ")},socketConnection:function(){var e=this;this.socket=new WebSocket(this.url),this.socket.onmessage=function(t){var data=t.data,n=JSON.parse(data);200==n.Status&&n.Data.UserCode>0&&(console.log("employee_report_page"),e.getDetails(n.Data))}},getDetails:function(e){var t=this;e.company_id=this.$auth.user.company_id,this.$axios.post("/device/details",e).then((function(e){var data=e.data;data.device&&t.$auth.user&&data.device.company_id==t.$auth.user.company_id&&t.logs.unshift(data)}))}}},j=C,S=n(60),component=Object(S.a)(j,(function(){var e=this,t=e._self._c;return t("div",[t("div",[t(y.a,{attrs:{flat:""}},[t("h5",[t("b",[e._v(" Employees Data(Recent Logs) ")])]),e._v(" "),t(_.a)],1),e._v(" "),t(f.a,[t(l.a,[t(r.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[t(y.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[t(x.b,[t("span",[e._v(" Recent Logs")])]),e._v(" "),t(k.a,{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[t(d.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(t){return e.getRecords()}}},[e._v("mdi mdi-reload")])],1)]}}])},[e._v(" "),t("span",[e._v("Reload")])])],1),e._v(" "),t(v.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var r=n.attrs;return[t(o.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",r,!1),[e._v("\n                Close\n              ")])]}}]),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n            "+e._s(e.snackText)+"\n\n            ")]),e._v(" "),t(c.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers_table,items:e.logs,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"header",fn:function(n){var o=n.props.headers;return[e.isFilter?t("tr",e._l(o,(function(header){return t("td",{key:header.text,staticClass:"table-search-header"},[header.filterable?t(h.a,{staticStyle:{"margin-left":"10px",width:"90% !important"},attrs:{autocomplete:"off",id:"header.value",outlined:"",height:"10px",clearable:""},on:{input:function(t){return e.applyFilters(header.value,t)}},model:{value:e.filters[header.value],callback:function(t){e.$set(e.filters,header.value,t)},expression:"filters[header.value]"}}):e._e()],1)})),0):e._e()]}},{key:"item.employee.first_name",fn:function(n){var o=n.item;n.index;return[t(f.a,{attrs:{"no-gutters":""}},[t(l.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"50px","max-width":"50px"}},[t(m.a,{staticStyle:{"border-radius":"50%",height:"auto",width:"50px","max-width":"50px"},attrs:{src:o.employee&&o.employee.profile_picture?o.employee.profile_picture:"/no-profile-image.jpg"}})],1),e._v(" "),t(l.a,{staticStyle:{padding:"10px"}},[t("strong",[e._v("\n                    "+e._s(o.employee?o.employee.first_name:"---")+"\n                    "+e._s(o.employee?o.employee.last_name:"---"))]),e._v(" "),t("div",[e._v("\n                    "+e._s(o.employee&&o.employee.designation?e.caps(o.employee.designation.name):"---")+"\n                  ")])])],1)]}},{key:"item.employee.department",fn:function(n){var o=n.item;return[t("strong",[e._v(e._s(o.employee&&o.employee.department?e.caps(o.employee.department.name):"---"))]),e._v(" "),t("div",[e._v("\n                "+e._s(o.employee&&o.employee.sub_department?e.caps(o.employee.sub_department.name):"---")+"\n              ")])]}},{key:"item.UserID",fn:function(t){var n=t.item;return[e._v("\n              "+e._s(n.UserID)+"\n            ")]}},{key:"item.employee.employee_id",fn:function(t){var n=t.item;return[e._v("\n              "+e._s(n.employee&&n.employee.employee_id)+"\n            ")]}},{key:"item.LogTime",fn:function(t){var n=t.item;return[e._v("\n              "+e._s(n.LogTime)+"\n            ")]}},{key:"item.device.device_name",fn:function(t){var n=t.item;return[e._v("\n              "+e._s(n.device?n.device.name:"---")+"\n            ")]}},{key:"item.device.location",fn:function(t){var n=t.item;return[e._v("\n              "+e._s(n.device?n.device.location:"---")+"\n            ")]}}])})],1)],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var o=n(99),r=n(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");o.a}}]);