(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{1233:function(t,e,o){"use strict";o.r(e);var n=o(117),r=o(138),l=o(1596),c=o(116),d=o(360),f=o(99),h=o(886),m=o(882),_=(o(12),o(14),o(11),o(6),o(20),o(9),o(21),o(2));o(70),o(31),o(273),o(37);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={data:function(){return{options:{},Model:"Report Notification",endpoint:"report_notification",search:"",loading:!1,total:0,headers:[{text:"Subject",align:"left",sortable:!0,key:"title",value:"subject",filterable:!0,filterSpecial:!1},{text:"Frequency",align:"left",sortable:!0,key:"frequency",value:"frequency",filterable:!0,filterSpecial:!1},{text:"Time",align:"left",sortable:!0,key:"time",value:"time",filterable:!0,filterSpecial:!1}],response:"",data:[],options_dialog:{}}},watch:{selectAllDepartment:function(t){t?(this.editedItem.departments=this.departments.map((function(t){return t.id})),this.employeesByDepartment()):(this.editedItem.departments=[],this.getEmployees())},selectAllEmployee:function(t){this.editedItem.employees=t?this.employees_dialog.map((function(t){return t.id})):[]},dialog:function(t){t||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDataFromApi()},methods:{datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},applyFilters:function(){this.from_menu_filter=!1,this.to_menu_filter=!1,this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0;var r=this.options,l=r.sortBy,c=r.sortDesc,d=r.page,f=r.itemsPerPage,h={params:y({page:d,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:f,company_id:this.$auth.user.company_id},this.filters)};""!=o&&(h.params[o]=n),this.$axios.get("".concat(e,"?page=").concat(d),h).then((function(e){var data=e.data;if(""!=o&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;0==data.total&&(t.headers=[]),t.data=data.data,t.total=data.total,t.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))}}},k=O,j=o(60),component=Object(j.a)(k,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"0"}},[e(f.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(h.b,[e("span",[t._v(" "+t._s(t.Model)+" List ")])]),t._v(" "),e(m.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[e(n.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(c.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)]}}])},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(d.a),t._v(" "),e(m.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[e(n.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/report_notifications",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(c.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Announcement List")])])],1),t._v(" "),e(l.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:t.headers,items:t.data,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.data.total},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[e("div",{staticClass:"no-data-container"},[t._v("No data available")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports},886:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return l}));var n=o(99),r=o(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");n.a}}]);