(window.webpackJsonp=window.webpackJsonp||[]).push([[374,185],{1656:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),l=n(79),d=n(539),c=n(903),m=n(1596),_=n(1597),h=n(361),f=n(889),v=n(116),y=n(888),k=n(538),x=n(920),I=n(900),D=n(360),O=n(221),j=n(99),C=n(886),w=n(882),$=(n(33),n(2)),A=(n(64),n(44),n(37),n(70),n(57),n(223),n(222),n(31),n(273),n(373)),F={components:{TiptapVuetify:A.p},data:function(){var t;return t={dialogFilter:!1,options:{},totalRowsCount:0,formTitle:"New Holiday Information",dialogEmployees:!1,idsEmployeeList:[],datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",extensions:[A.g,A.a,A.k,A.i,A.r,A.o,A.j,A.l,A.c,A.m,[A.f,{options:{levels:[1,2,3]}}],A.b,A.k,A.d,A.h,A.n,A.e],content:"\n      <h1>Yay Headlines!</h1>\n      <p>All these <strong>cool tags</strong> are working now.</p>\n        ",scrollInvoked:0,start_menu:!1,end_menu:!1,title:"",des:"",desDate:"",dept:""},Object($.a)(t,"options",{}),Object($.a)(t,"Model","Holidays"),Object($.a)(t,"endpoint","holidays"),Object($.a)(t,"search",""),Object($.a)(t,"snackbar",!1),Object($.a)(t,"dialog",!1),Object($.a)(t,"ids",[]),Object($.a)(t,"departments",[]),Object($.a)(t,"loading",!1),Object($.a)(t,"total",0),Object($.a)(t,"headers_Dialog",[{text:"Name",align:"left",sortable:!0,value:"first_name"},{text:"Employee Id",align:"left",sortable:!0,value:"employee_id"}]),Object($.a)(t,"headers",[{text:"Name",align:"left",sortable:!0,key:"name",value:"name"},{text:"Start Date",align:"left",sortable:!1,value:"start_date"},{text:"End Date",align:"left",sortable:!1,value:"end_date"},{text:"Total Days",align:"left",sortable:!1,value:"total_days"}]),Object($.a)(t,"editedIndex",-1),Object($.a)(t,"editedItem",{name:"",total_days:"0",start_date:null,end_date:null,year:null}),Object($.a)(t,"defaultItem",{name:"",total_days:"",start_date:null,end_date:null,year:null}),Object($.a)(t,"response",""),Object($.a)(t,"data",[]),Object($.a)(t,"errors",[]),Object($.a)(t,"options_dialog",{}),Object($.a)(t,"employees_dialog",[]),Object($.a)(t,"selectAllDepartment",!1),Object($.a)(t,"selectAllEmployee",!1),Object($.a)(t,"DialogEmployeesData",{}),Object($.a)(t,"dataYears",[]),Object($.a)(t,"filterYear",""),t},computed:{},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0;var t=new Date;this.filterYear=t.getFullYear(),this.getDataFromApi(),this.lastTenYears()},methods:{lastTenYears:function(){var t=(new Date).getFullYear();this.dataYears=Array.from({length:10},(function(e,i){return t-i}))},update_EdititemStart:function(){this.$refs.from_menu.save(this.editedItem.start_date),this.from_menu=!1,this.getDayscount()},update_EdititemEnd:function(){this.$refs.end_menu.save(this.editedItem.end_date),this.end_menu=!1,this.getDayscount()},getDayscount:function(){if(!this.editedItem.start_date||!this.editedItem.end_date)return!1;var t=new Date(this.editedItem.start_date),e=new Date(this.editedItem.end_date);this.editedItem.year=e.getFullYear();var n=Math.abs(e.getTime()-t.getTime()),o=Math.ceil(n/864e5);this.editedItem.total_days=o+1},gotoDialogPage:function(t){this.DialogEmployeesData=t.employees,this.dialogEmployees=!0},datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},toggleDepartmentSelection:function(){this.selectAllDepartment=!this.selectAllDepartment},toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},can:function(t){return this.$pagePermission.can(t,this)},onScroll:function(){this.scrollInvoked++},getDepartments:function(){var t=this,e={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data}))},employeesByDepartment:function(){var t=this;this.loading_dialog=!0;var e=this.options_dialog,n=e.page,o=e.itemsPerPage,r={params:{department_ids:this.editedItem.departments,per_page:o,page:n,company_id:this.$auth.user.company_id}};this.editedItem.departments.length?this.$axios.get("employeesByDepartment",r).then((function(e){var data=e.data;t.employees_dialog=data.data,t.loading_dialog=!1})):this.getEmployees()},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0;var r=this.options,l=r.sortBy,d=r.sortDesc,c=r.page,m=r.itemsPerPage,_={params:{page:c,sortBy:l?l[0]:"",sortDesc:d?d[0]:"",per_page:m,company_id:this.$auth.user.company_id,year:this.filterYear}};""!=n&&(_.params[n]=o),this.$axios.get("".concat(e,"?page=").concat(c),_).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.data=data.data,t.total=data.total,t.loading=!1,t.totalRowsCount=data.total,t.dialogFilter=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},editItem:function(t){this.formTitle="Edit Holidays Information",this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},delteteSelectedRecords:function(){var t=this;confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:this.ids.map((function(t){return t.id}))}).then((function(e){var data=e.data;data.status?(t.snackbar=data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=data.errors,t.getDataFromApi()})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message):e.errors=data.errors})).catch((function(t){return console.log(t)}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},getEmployees:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"employee";this.loading=!0;var n=this.options,o=n.page,r={params:{per_page:n.itemsPerPage,company_id:this.$auth.user.company_id}};this.$axios.get("".concat(e,"?page=").concat(o),r).then((function(e){var data=e.data;t.employees_dialog=data.data}))},save:function(){var t=this;this.editedItem.company_id=this.$auth.user.company_id,this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,this.editedItem).then((function(e){var data=e.data;if(data.status){var n=t.data.findIndex((function(e){return e.id==t.editedItem.id}));t.data.splice(n,1,{id:t.editedItem.id,name:t.editedItem.name}),t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close()}else t.errors=data.errors})).catch((function(t){return console.log(t)})):this.$axios.post(this.endpoint,this.editedItem).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search=""):t.errors=data.errors})).catch((function(t){return console.log(t)}))}}},E=F,S=n(60),component=Object(S.a)(E,(function(){var t=this,e=t._self._c;return t.can("holiday_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(I.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(h.a,{attrs:{persistent:"",width:"300px"},model:{value:t.dialogFilter,callback:function(e){t.dialogFilter=e},expression:"dialogFilter"}},[e(r.a,{attrs:{elevation:"0"}},[e(j.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[e("span",[t._v(" Select year")])]),t._v(" "),e(f.a,{staticClass:"py-0 my-0"}),t._v(" "),e(l.c,[e(c.a,[e(k.a,[e(d.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{outlined:"",dense:"","x-small":"",items:t.dataYears,placeholder:"Year",solo:"",flat:""},on:{change:function(e){return t.getDataFromApi()}},model:{value:t.filterYear,callback:function(e){t.filterYear=e},expression:"filterYear"}})],1)],1)],1)],1)],1)],1),t._v(" "),e(h.a,{attrs:{persistent:"",width:"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,[e(j.a,{staticClass:"background",attrs:{flat:"",small:"",dense:"",dark:""}},[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle)+" ")])]),t._v(" "),e(l.c,[e(c.a,[e(k.a,[e(d.a,{attrs:{cols:"12"}},[e("label",{staticStyle:{"padding-bottom":"5px"},attrs:{for:""}},[t._v("Title")]),t._v(" "),e(O.a,{attrs:{dense:"",outlined:"",placeholder:"Name","error-messages":t.errors&&t.errors.name?t.errors.name[0]:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(y.a,{ref:"from_menu",attrs:{"close-on-content-click":!1,"return-value":t.editedItem.start_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){return t.$set(t.editedItem,"start_date",e)},"update:return-value":function(e){return t.$set(t.editedItem,"start_date",e)}},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("div",{staticClass:"mb-1"},[t._v("Start Date")]),t._v(" "),e(O.a,t._g(t._b({attrs:{outlined:"",dense:"",readonly:"","error-messages":t.errors&&t.errors.start_date?t.errors.start_date[0]:""},model:{value:t.editedItem.start_date,callback:function(e){t.$set(t.editedItem,"start_date",e)},expression:"editedItem.start_date"}},"v-text-field",r,!1),o))]}}],null,!1,1178926747),model:{value:t.start_menu,callback:function(e){t.start_menu=e},expression:"start_menu"}},[t._v(" "),e(_.a,{attrs:{small:"","no-title":"",scrollable:""},on:{change:t.update_EdititemStart},model:{value:t.editedItem.start_date,callback:function(e){t.$set(t.editedItem,"start_date",e)},expression:"editedItem.start_date"}})],1)],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(y.a,{ref:"end_menu",attrs:{"close-on-content-click":!1,"return-value":t.editedItem.end_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){return t.$set(t.editedItem,"end_date",e)},"update:return-value":function(e){return t.$set(t.editedItem,"end_date",e)}},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("div",{staticClass:"mb-1"},[t._v("End Date")]),t._v(" "),e(O.a,t._g(t._b({attrs:{outlined:"",dense:"",readonly:"","error-messages":t.errors&&t.errors.end_date?t.errors.end_date[0]:""},model:{value:t.editedItem.end_date,callback:function(e){t.$set(t.editedItem,"end_date",e)},expression:"editedItem.end_date"}},"v-text-field",r,!1),o))]}}],null,!1,3363844155),model:{value:t.end_menu,callback:function(e){t.end_menu=e},expression:"end_menu"}},[t._v(" "),e(_.a,{attrs:{min:t.editedItem.start_date,small:"","no-title":"",scrollable:""},on:{change:t.update_EdititemEnd},model:{value:t.editedItem.end_date,callback:function(e){t.$set(t.editedItem,"end_date",e)},expression:"editedItem.end_date"}})],1)],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e("label",{attrs:{for:""}},[t._v("Today Days : "+t._s(t.editedItem.total_days))])])],1)],1)],1),t._v(" "),e(l.a,[e(D.a),t._v(" "),e(o.a,{staticClass:"error",attrs:{small:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),t._v(" "),e(k.a,[e(d.a,{attrs:{md:"12"}},[e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"0"}},[e(j.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(C.b,[e("span",[t._v(" Dashboard / "+t._s(t.Model)+" List")])]),t._v(" "),e(w.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(v.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)]}}],null,!1,1377685765)},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(w.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(v.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){t.dialogFilter=!0}}},[t._v("mdi mdi-calendar-blank-outline")])],1)]}}],null,!1,3405273068)},[t._v(" "),e("span",[t._v(t._s(t.filterYear))])]),t._v(" "),e("a",{staticStyle:{"padding-left":"10px"},on:{click:function(e){t.dialogFilter=!0}}},[e(v.a,{staticClass:"mx-1"},[t._v("mdi ")])],1),t._v(" "),e(D.a),t._v(" "),e(C.a,[e(d.a,{staticClass:"toolbaritems-button-design1"},[t.can("holiday_create")?e(o.a,{staticClass:"mb-2",attrs:{small:"",color:"primary"},on:{click:function(e){t.dialog=!0}}},[t._v(t._s(t.Model)+" +")]):t._e()],1)],1)],1),t._v(" "),e(I.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var r=n.attrs;return[e(o.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),t.can("holiday_view")?e(m.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:t.headers,items:t.data,loading:t.loading,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},options:t.options,"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.name",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.name)+"\n          ")]}},{key:"item.start_date",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.start_date)+"\n          ")]}},{key:"item.end_date",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.end_date)+"\n          ")]}},{key:"item.total_days",fn:function(e){var n=e.item;return[t._v("\n            "+t._s(n.total_days)+"\n          ")]}},{key:"no-data",fn:function(){},proxy:!0}],null,!1,466759605),model:{value:t.ids,callback:function(e){t.ids=e},expression:"ids"}}):t._e()],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(908).default})},886:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var o=n(99),r=n(1),l=Object(r.k)("v-toolbar__title"),d=Object(r.k)("v-toolbar__items");o.a},908:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);