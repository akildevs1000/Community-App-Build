(window.webpackJsonp=window.webpackJsonp||[]).push([[25,185,231,232,234],{1014:function(e,t,n){"use strict";n.r(t);var r=n(221),o={props:["header","column"],date:function(){return{text:""}},methods:{handleChange:function(){this.$emit("entered-value",this.header)}}},l=n(60),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.header.key==e.column||"text"==e.header.type?t(r.a,{attrs:{placeholder:e.header.text,clearable:"","hide-details":!0,outlined:"",dense:"",autocomplete:"off"},on:{input:e.handleChange},model:{value:e.header.search_value,callback:function(t){e.$set(e.header,"search_value",t)},expression:"header.search_value"}}):e._e()}),[],!1,null,null,null);t.default=component.exports},1015:function(e,t,n){"use strict";n.r(t);var r=n(919),o=n(86),l=(n(37),{props:["header","column","items","disabled"],methods:{handleChange:function(){this.$emit("entered-value",this.header)}}}),c=n(60),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",[e.header.key==e.column||"dropdown"==e.header.type?t(r.a,{attrs:{placeholder:e.header.text,"hide-details":!0,outlined:"",dense:"","item-text":"name","item-value":"id",items:[{id:"",name:"All"}].concat(Object(o.a)(e.items)),solo:"",flat:"",disabled:e.disabled},on:{change:e.handleChange},model:{value:e.header.search_value,callback:function(t){e.$set(e.header,"search_value",t)},expression:"header.search_value"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports},1082:function(e,t,n){"use strict";n.r(t);var r=n(117),o=n(138),l=n(1585),c=n(887),d=n(221),m=(n(59),n(120),n(365),new Date(Date.now()-6e4*(new Date).getTimezoneOffset())),h=new Date(m);h.setMonth(h.getMonth()+1);var f=m.toISOString().slice(0,10),v=h.toISOString().slice(0,10),_={props:["header","column","disabled"],data:function(){return{menu:!1,menu2:!1,showPicker:!0,startDates:[f],endDates:[v],finalDates:[],min:v}},computed:{datesLabel:function(){return this.finalDates.join(" ~ ")}},methods:{firstPicker:function(){this.startDates.sort((function(a,b){return a.localeCompare(b)})),this.endDates=[],this.finalDates=this.startDates,this.$emit("selected-dates",this.finalDates)},secondPicker:function(){this.endDates.sort((function(a,b){return a.localeCompare(b)}));var e=this.endDates.length?this.endDates[this.endDates.length-1]:this.startDates[this.startDates.length-1];this.finalDates=[this.startDates[0],e],this.startDates=this.finalDates,this.endDates=this.finalDates,this.$emit("selected-dates",this.finalDates),this.min=this.startDates[0]},clearDates:function(){this.clearStartDates(),this.clearEndDates()},clearStartDates:function(){this.finalDates=[],this.startDates=[]},clearEndDates:function(){this.finalDates=[],this.endDates=[]}}},y=n(60),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return e.header.key==e.column||"date_range_picker"==e.header.type?t(c.a,{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto",disabled:e.disabled},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on;return[t(d.a,e._g({attrs:{"hide-details":!0,outlined:"",dense:"",readonly:"",placeholder:e.header.text},model:{value:e.datesLabel,callback:function(t){e.datesLabel=t},expression:"datesLabel"}},r))]}}],null,!1,3443285459),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t("div",{staticClass:"text-center",staticStyle:{padding:"0"}},[t(l.a,{attrs:{persistant:"","no-title":"",color:"primary",range:"",scrollable:""},on:{input:e.firstPicker},model:{value:e.startDates,callback:function(t){e.startDates=t},expression:"startDates"}}),e._v(" "),t(l.a,{attrs:{"no-title":"",color:"primary",range:"",min:e.min},on:{input:e.secondPicker},model:{value:e.endDates,callback:function(t){e.endDates=t},expression:"endDates"}}),e._v(" "),t(o.a,{staticClass:"text-right pa-2"},[t(r.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:e.clearDates}},[e._v("\n        clear\n      ")]),e._v(" "),t(r.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:function(t){e.menu=!1}}},[e._v("\n        close\n      ")]),e._v(" "),t(r.a,{attrs:{dark:"",color:"background","x-small":""},on:{click:function(t){return e.$refs.menu.save(e.secondPicker)}}},[e._v("\n        OK\n      ")])],1)],1)]):e._e()}),[],!1,null,null,null);t.default=component.exports},1151:function(e,t,n){var content=n(1237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("4de7aad6",content,!0,{sourceMap:!1})},1236:function(e,t,n){"use strict";n(1151)},1237:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".tiptap-vuetify-editor__content{min-height:400px!important}.ProseMirror .ProseMirror-focused{height:400px!important}.tiptap-icon .v-btn--icon,.tiptap-icon .v-icon{color:#fff!important}",""]),r.locals={},e.exports=r},1349:function(e,t,n){"use strict";n.r(t);var r=n(920),o=n(117),l=n(138),c=n(79),d=n(540),m=n(1202),h=n(538),f=n(902),v=n(1584),_=n(1585),y=n(360),x=n(116),I=n(335),D=n(211),k=n(337),S=n(10),O=n(887),C=n(537),w=n(919),j=n(899),$=n(359),A=n(221),F=n(99),E=n(885),P=n(275),T=(n(33),n(14),n(73),n(59),n(12),n(11),n(6),n(20),n(9),n(21),n(2)),M=(n(542),n(37),n(70),n(31),n(272),n(57),n(1082)),L=n(1014),V=n(1015),z=n(372);function B(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function N(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(t){Object(T.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var R={components:{DateRangePicker:M.default,TextField:L.default,DropDown:V.default,TiptapVuetify:z.p},data:function(){var e;return e={extensions:[z.g,z.a,z.r,z.o,z.j,z.l,z.c,z.m,[z.f,{options:{levels:[1,2,3]}}],z.b,z.n],branchesList:[],categories:[],totalRowsCount:0,from_menu_filter:"",from_date_filter:"",to_date_filter:"",to_menu_filter:"",showFilters:!1,filters:{},isFilter:!1,options:{},dialogEmployees:!1,idsEmployeeList:[],datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",scrollInvoked:0,start_menu:!1,end_menu:!1,title:"",des:"",desDate:"",dept:""},Object(T.a)(e,"options",{}),Object(T.a)(e,"Model","Announcement"),Object(T.a)(e,"endpoint","announcement"),Object(T.a)(e,"search",""),Object(T.a)(e,"snackbar",!1),Object(T.a)(e,"dialog",!1),Object(T.a)(e,"ids",[]),Object(T.a)(e,"departments",[]),Object(T.a)(e,"loading",!1),Object(T.a)(e,"total",0),Object(T.a)(e,"headers_Dialog",[{text:"Name",align:"left",sortable:!0,value:"first_name"},{text:"Employee Id",align:"left",sortable:!1,value:"employee_id"}]),Object(T.a)(e,"headers",[{text:"Title",align:"left",sortable:!0,key:"title",value:"title",fieldType:"text"},{text:"Branch",align:"left",sortable:!0,key:"department",value:"branch.branch_name",fieldType:"dropdown"},{text:"Departments",align:"left",sortable:!0,key:"department",value:"department.name.id",fieldType:"dropdown"},{text:"Employees",align:"left",sortable:!0,key:"employees",value:"employees",fieldType:"dropdown"},{text:"Description",align:"left",sortable:!0,key:"description",value:"description",fieldType:"text",class:"breakthewords"},{text:"Date Range",align:"left",sortable:!1,key:"date_range",value:"start_date",fieldType:"date_range_picker"},{text:"Category",align:"left",sortable:!1,key:"categories",value:"categories",fieldType:"dropdown"},{text:"User",align:"left",sortable:!1,key:"user",value:"user",fieldType:"dropdown"},{width:"50px",text:"Actions",align:"center",value:"action",sortable:!1}]),Object(T.a)(e,"editedIndex",-1),Object(T.a)(e,"editedItem",{title:"",description:"",departments:[],employees:[],start_date:null,end_date:null,category_id:null,branch_id:""}),Object(T.a)(e,"defaultItem",{title:"",description:"",departments:[],employees:[],start_date:null,end_date:null,category_id:null,branch_id:""}),Object(T.a)(e,"response",""),Object(T.a)(e,"headerText",""),Object(T.a)(e,"data",[]),Object(T.a)(e,"errors",[]),Object(T.a)(e,"options_dialog",{}),Object(T.a)(e,"employees_dialog",[]),Object(T.a)(e,"selectAllDepartment",!1),Object(T.a)(e,"selectAllEmployee",!1),Object(T.a)(e,"DialogEmployeesData",{}),Object(T.a)(e,"employees",[]),e},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"},getCurrentDate:function(){var e=new Date,t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return"".concat(t,"-").concat(n,"-").concat(r)},isIndeterminateDepartment:function(){return this.editedItem.departments.length>0&&this.editedItem.departments.length<this.departments.length},isIndeterminateEmployee:function(){return this.editedItem.employees.length>0&&this.editedItem.employees.length<this.employees_dialog.length}},watch:{selectAllDepartment:function(e){e?(this.editedItem.departments=this.departments.map((function(e){return e.id})),this.employeesByDepartment()):(this.editedItem.departments=[],this.getEmployees())},selectAllEmployee:function(e){this.editedItem.employees=e?this.employees_dialog.map((function(e){return e.id})):[]},dialog:function(e){e||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDataFromApi(),this.getbranchesList()},methods:{getbranchesList:function(){var e=this;this.payloadOptions={params:{company_id:this.$auth.user.company_id}},this.$axios.get("branches_list",this.payloadOptions).then((function(t){var data=t.data;e.branchesList=data,e.$auth.user.branch_id?e.branch_id=e.$auth.user.branch_id:e.branch_id=""}))},handleFilter:function(e){var t=e.key,n=e.search_value;this.getDataFromApi(this.endpoint,t,n)},handleDatesFilter:function(e){e.length>1&&this.getDataFromApi(this.endpoint,"dates",e)},gotoDialogPage:function(e){this.DialogEmployeesData=e.employees,this.dialogEmployees=!0},datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},toggleDepartmentSelection:function(){this.selectAllDepartment=!this.selectAllDepartment},toggleEmployeeSelection:function(){this.selectAllEmployee=!this.selectAllEmployee},can:function(e){return this.$pagePermission.can(e,this)},onScroll:function(){this.scrollInvoked++},getDepartments:function(){var e=this;this.getCategories(),console.log(this.editedItem.branch_id);var t={params:{per_page:1e3,company_id:this.$auth.user.company_id,branch_id:this.editedItem.branch_id}};this.$axios.get("departments",t).then((function(t){var data=t.data;e.departments=data.data,e.editItemId>-1||e.toggleDepartmentSelection()}))},employeesByDepartment:function(){var e=this;this.loading_dialog=!0;var t=this.options_dialog,n=t.page,r=t.itemsPerPage,o={params:{department_ids:this.editedItem.departments,per_page:r,page:n,company_id:this.$auth.user.company_id}};this.employees_dialog=[],this.editedItem.departments.length?this.$axios.get("employeesByDepartmentForAnnoucements",o).then((function(t){var data=t.data;e.employees_dialog=data.data,e.loading_dialog=!1,e.toggleEmployeeSelection()})):this.getEmployees()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==t&&(t=this.endpoint),this.loading=!0;var o=this.options,l=o.sortBy,c=o.sortDesc,d=o.page,m=o.itemsPerPage,h={params:N({page:d,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:m,company_id:this.$auth.user.company_id},this.filters)};""!=n&&(h.params[n]=r),this.$axios.get(t,h).then((function(t){var data=t.data;e.totalRowsCount=e.total=data.total,e.data=data.data,e.loading=!1}))},searchIt:function(e){0==e.length?this.getDataFromApi():e.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},editItem:function(e){this.editedIndex=this.data.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0,this.editedItem.departments=e.departments.map((function(e){return e.id})),this.editedItem.employees=e.employees.map((function(e){return e.id})),this.getbranchesList()},delteteSelectedRecords:function(){var e=this;confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:this.ids.map((function(e){return e.id}))}).then((function(t){var data=t.data;data.status?(e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):e.errors=data.errors,e.getDataFromApi()})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message):t.errors=data.errors})).catch((function(e){return console.log(e)}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},getCategories:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"announcements_category";this.categories=[],this.loading=!0;var n=this.options,r={params:{page:n.page,per_page:n.itemsPerPage,company_id:this.$auth.user.company_id,branch_id:this.editedItem.branch_id}};this.$axios.get(t,r).then((function(t){var data=t.data;e.categories=data.data,e.loading=!1}))},getUserDetails:function(e){return null==e?"---":e.user&&"company"==e.user.user_type?e.user.name:e.user&&"employee"==e.user.user_type?e.user.employee.first_name+" "+e.user.employee.last_name:void 0},getEmployees:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"employee";this.loading=!0;var n=this.options,r={params:{page:n.page,per_page:n.itemsPerPage,company_id:this.$auth.user.company_id}};this.$axios.get(t,r).then((function(t){var data=t.data;e.employees_dialog=data.data,e.loading=!1}))},save:function(){var e=this;this.editedItem.company_id=this.$auth.user.company_id,this.editedItem.user_id=this.$auth.user.id,this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,this.editedItem).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.close()):e.errors=data.errors})).catch((function(e){return console.log(e)})):this.$axios.post(this.endpoint,this.editedItem).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.close(),e.errors=[],e.search=""):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}},K=R,U=(n(1236),n(60)),component=Object(U.a)(K,(function(){var e=this,t=e._self._c;return e.can("announcement_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(j.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(y.a,{key:e.editedIndex,attrs:{persistent:"","max-width":"60%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(c.d,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n        "+e._s(e.formTitle)+" "+e._s(e.Model)+"\n        "),t($.a),e._v(" "),t(x.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialog=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(c.c,[t(f.a,[t(C.a,[t(h.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Title")]),e._v(" "),t(A.a,{attrs:{dense:"",outlined:"",placeholder:"Title","error-messages":e.errors&&e.errors.title?e.errors.title[0]:""},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),e._v(" "),t(h.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Branch")]),e._v(" "),t(w.a,{attrs:{items:e.branchesList,dense:"",placeholder:"Branch",outlined:"","item-value":"id","item-text":"branch_name",error:e.errors.branch_id,"error-messages":e.errors&&e.errors.branch_id?e.errors.branch_id[0]:""},on:{change:function(t){return e.getDepartments()}},model:{value:e.editedItem.branch_id,callback:function(t){e.$set(e.editedItem,"branch_id",t)},expression:"editedItem.branch_id"}})],1),e._v(" "),t(h.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Department")]),e._v(" "),t(r.a,{staticClass:"announcement-dropdown1",attrs:{outlined:"",dense:"",items:e.departments,multiple:"","item-text":"name","item-value":"id",placeholder:"Departments","error-messages":e.errors&&e.errors.departments?e.errors.departments[0]:""},on:{change:e.employeesByDepartment},scopedSlots:e._u([e.departments.length?{key:"prepend-item",fn:function(){return[t(D.a,{on:{click:e.toggleDepartmentSelection}},[t(k.a,[t(d.a,{attrs:{indeterminate:e.isIndeterminateDepartment,"true-value":!0,"false-value":!1},on:{click:e.toggleDepartmentSelection},model:{value:e.selectAllDepartment,callback:function(t){e.selectAllDepartment=t},expression:"selectAllDepartment"}})],1),e._v(" "),t(S.a,[t(S.c,[e._v("\n                        "+e._s(e.selectAllDepartment?"Unselect All":"Select All")+"\n                      ")])],1)],1)]},proxy:!0}:null,{key:"selection",fn:function(n){var r=n.item,o=n.index;return[0===o&&1==e.editedItem.departments.length?t("span",[e._v(e._s(r.name))]):1===o&&e.editedItem.departments.length==e.departments.length?t("span",{staticClass:""},[e._v("\n                    All Selected\n                  ")]):1===o?t("span",{staticClass:""},[e._v("\n                    Selected "+e._s(e.editedItem.departments.length)+" Department(s)\n                  ")]):e._e()]}}],null,!0),model:{value:e.editedItem.departments,callback:function(t){e.$set(e.editedItem,"departments",t)},expression:"editedItem.departments"}})],1),e._v(" "),t(h.a,{attrs:{cols:"4"}},[t("label",{attrs:{for:""}},[e._v("Employee")]),e._v(" "),t(r.a,{staticClass:"announcement-dropdown1",attrs:{outlined:"",dense:"",items:e.employees_dialog,multiple:"","item-text":"name_with_user_id","item-value":"id",placeholder:"Employees","error-messages":e.errors&&e.errors.employees?e.errors.employees[0]:"",color:"background"},scopedSlots:e._u([e.employees_dialog.length?{key:"prepend-item",fn:function(){return[t(D.a,{on:{click:e.toggleEmployeeSelection}},[t(k.a,[t(d.a,{attrs:{indeterminate:e.isIndeterminateEmployee,"true-value":!0,"false-value":!1},on:{click:e.toggleEmployeeSelection},model:{value:e.selectAllEmployee,callback:function(t){e.selectAllEmployee=t},expression:"selectAllEmployee"}})],1),e._v(" "),t(S.a,[t(S.c,[e._v("\n                        "+e._s(e.selectAllEmployee?"Unselect All":"Select All")+"\n                      ")])],1)],1)]},proxy:!0}:null,{key:"selection",fn:function(n){var r=n.item,o=n.index;return[0===o&&1==e.editedItem.employees.length?t("span",[e._v(e._s(r.first_name)+" "+e._s(r.last_name))]):1===o&&e.editedItem.employees.length==e.employees_dialog.length?t("span",{staticClass:""},[e._v("\n                    All Selected\n                  ")]):1===o?t("span",{staticClass:""},[e._v("\n                    Selected "+e._s(e.editedItem.employees.length)+" Employee(s)\n                  ")]):e._e()]}}],null,!0),model:{value:e.editedItem.employees,callback:function(t){e.$set(e.editedItem,"employees",t)},expression:"editedItem.employees"}})],1),e._v(" "),t(h.a,{attrs:{cols:"4"}},[t(O.a,{ref:"from_menu",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.start_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"start_date",t)},"update:return-value":function(t){return e.$set(e.editedItem,"start_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("div",{staticClass:"mb-1"},[e._v("Start Date")]),e._v(" "),t(A.a,e._g(e._b({attrs:{outlined:"",dense:"",readonly:"","error-messages":e.errors&&e.errors.start_date?e.errors.start_date[0]:""},model:{value:e.editedItem.start_date,callback:function(t){e.$set(e.editedItem,"start_date",t)},expression:"editedItem.start_date"}},"v-text-field",o,!1),r))]}}],null,!1,1178926747),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[e._v(" "),t(_.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.editedItem.start_date,callback:function(t){e.$set(e.editedItem,"start_date",t)},expression:"editedItem.start_date"}},[t($.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.from_menu=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.from_menu.save(e.editedItem.start_date)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1),e._v(" "),t(h.a,{attrs:{cols:"4"}},[t(O.a,{ref:"end_menu",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.end_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"end_date",t)},"update:return-value":function(t){return e.$set(e.editedItem,"end_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("div",{staticClass:"mb-1"},[e._v("End Date")]),e._v(" "),t(A.a,e._g(e._b({attrs:{outlined:"",dense:"",readonly:"","error-messages":e.errors&&e.errors.end_date?e.errors.end_date[0]:""},model:{value:e.editedItem.end_date,callback:function(t){e.$set(e.editedItem,"end_date",t)},expression:"editedItem.end_date"}},"v-text-field",o,!1),r))]}}],null,!1,3363844155),model:{value:e.end_menu,callback:function(t){e.end_menu=t},expression:"end_menu"}},[e._v(" "),t(_.a,{attrs:{min:e.editedItem.start_date,"no-title":"",scrollable:""},model:{value:e.editedItem.end_date,callback:function(t){e.$set(e.editedItem,"end_date",t)},expression:"editedItem.end_date"}},[t($.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.end_menu=!1}}},[e._v("\n                    Cancel\n                  ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.end_menu.save(e.editedItem.end_date)}}},[e._v("\n                    OK\n                  ")])],1)],1)],1),e._v(" "),t(h.a,[t("label",{attrs:{for:""}},[e._v("Category")]),e._v("\n              "+e._s(e.editedItem.category_id)+"\n              "),t(w.a,{attrs:{dense:"",outlined:"",items:e.categories,"item-value":"id","item-text":"name","error-messages":e.errors&&e.errors.category_id?e.errors.category_id[0]:""},model:{value:e.editedItem.category_id,callback:function(t){e.$set(e.editedItem,"category_id",t)},expression:"editedItem.category_id"}})],1),e._v(" "),t(h.a,{attrs:{cols:"12"}},[t("ClientOnly",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v(" Loading... ")]},proxy:!0}],null,!1,669632662)},[t("tiptap-vuetify",{directives:[{def:P.b,name:"scroll",rawName:"v-scroll.self",value:e.onScroll,expression:"onScroll",modifiers:{self:!0}}],staticClass:"tiptap-icon",attrs:{extensions:e.extensions,"max-height":"400","toolbar-attributes":{color:"background red--text"}},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1)],1)],1)],1),e._v(" "),t(c.a,[t($.a),e._v(" "),t(o.a,{staticClass:"primary",attrs:{small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1),e._v(" "),t(y.a,{attrs:{persistent:"","max-width":"60%"},model:{value:e.dialogEmployees,callback:function(t){e.dialogEmployees=t},expression:"dialogEmployees"}},[t(l.a,[t(c.d,{staticClass:"popup_background",attrs:{dense:""}},[e._v("\n        Employees List\n        "),t($.a),e._v(" "),t(x.a,{attrs:{outlined:"",dark:""},on:{click:function(t){e.dialogEmployees=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(c.c,[t(f.a,[t(C.a,[t(v.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:e.headers_Dialog,items:e.DialogEmployeesData,loading:e.loading,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]}},scopedSlots:e._u([{key:"item.first_name",fn:function(t){var n=t.item;return[e._v("\n                "+e._s(n.first_name?n.first_name:"---")+"\n                "+e._s(n.last_name)+"\n              ")]}},{key:"item.employeeId",fn:function(t){var n=t.item;return[e._v("\n                "+e._s(n.employee_id)+"\n              ")]}}],null,!1,4148908657),model:{value:e.idsEmployeeList,callback:function(t){e.idsEmployeeList=t},expression:"idsEmployeeList"}})],1)],1)],1)],1)],1),e._v(" "),t(C.a,[t(h.a,{attrs:{md:"12"}},[t(l.a,{staticClass:"mb-5 mt-2 rounded-md",attrs:{elevation:"0"}},[t(F.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[t(E.b,[t("span",[e._v(" "+e._s(e.Model)+" List ")])]),e._v(" "),t(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(x.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){return e.getDataFromApi()}}},[e._v("mdi mdi-reload")])],1),e._v(" "),t(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Filter"}},[t(x.a,{staticClass:"mx-1 ml-2",on:{click:e.toggleFilter}},[e._v("mdi mdi-filter")])],1),e._v(" "),t($.a),e._v(" "),e.can("announcement_create")?t(o.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Announcement"}},[t(x.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){e.dialog=!0}}},[e._v("mdi mdi-plus-circle")])],1):e._e()],1),e._v(" "),t(j.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var r=n.attrs;return[t(o.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",r,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n          "+e._s(e.snackText)+"\n\n          ")]),e._v(" "),e.can("announcement_view")?t(v.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:e.headers,items:e.data,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"header",fn:function(n){var r=n.props.headers;return[e.isFilter?t("tr",e._l(r,(function(header,n){return t("td",{key:n},[t(f.a,[t("TextField",{attrs:{header:header,column:"title"},on:{"entered-value":e.handleFilter}}),e._v(" "),t("DropDown",{attrs:{disabled:!0,header:header,column:"department",items:e.departments},on:{"entered-value":e.handleFilter}}),e._v(" "),t("DropDown",{attrs:{disabled:!0,header:header,column:"employees",items:e.employees},on:{"entered-value":e.handleFilter}}),e._v(" "),t("DropDown",{attrs:{disabled:!1,header:header,column:"categories",items:e.categories},on:{"entered-value":e.handleFilter}}),e._v(" "),t("TextField",{attrs:{header:header,column:"description"},on:{"entered-value":e.handleFilter}}),e._v(" "),t("DateRangePicker",{attrs:{disabled:!1,header:header,column:"date_range"},on:{"selected-dates":e.handleDatesFilter}})],1)],1)})),0):e._e()]}},{key:"item.start_date",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n&&n.start_date)+" - "+e._s(n&&n.end_date)+"\n          ")]}},{key:"item.categories",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.category&&n.category.name)+"\n          ")]}},{key:"item.priority",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(n.category&&n.category.priority)+"\n          ")]}},{key:"item.description",fn:function(n){var r=n.item;return[t("div",{staticClass:"breakthewords",domProps:{innerHTML:e._s(r.description)}})]}},{key:"item.user",fn:function(t){var n=t.item;return[e._v("\n            "+e._s(e.getUserDetails(n))+"\n          ")]}},{key:"item.action",fn:function(n){var r=n.item;return[t(O.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),r),[t(x.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(I.a,{attrs:{width:"120",dense:""}},[t(D.a,{on:{click:function(t){return e.editItem(r)}}},[t(S.c,{staticStyle:{cursor:"pointer"}},[e.can("announcement_edit")?t(x.a,{attrs:{color:"secondary",small:""},on:{click:function(t){return e.editItem(r)}}},[e._v("\n                      mdi-pencil\n                    ")]):e._e(),e._v("\n                    Edit\n                  ")],1)],1),e._v(" "),t(D.a,{on:{click:function(t){return e.deleteItem(r)}}},[t(S.c,{staticStyle:{cursor:"pointer"}},[e.can("announcement_delete")?t(x.a,{attrs:{color:"error",small:""},on:{click:function(t){return e.deleteItem(r)}}},[e._v("mdi-delete\n                    ")]):e._e(),e._v("\n                    Delete\n                  ")],1)],1)],1)],1)]}},{key:"item.department.name.id",fn:function(n){var r=n.item;return e._l(r.departments,(function(n,r){return t("span",{key:r,staticClass:"",attrs:{small:"",color:"primary"}},[e._v("\n              "+e._s(n.name)+" "),t("br")])}))}},{key:"item.employees",fn:function(n){var r=n.item;return[e._l(r.employees.slice(0,4),(function(n,r){return t("span",{key:r,staticClass:"p-2 ma-1",attrs:{small:"",color:"primary"}},[e._v("\n              "+e._s(n.first_name)+" "+e._s(n.last_name)+" -\n              "+e._s(n.employee_id)+"\n\n              "),t("br")])})),e._v(" "),r.employees.length>4?t(m.a,{staticClass:"primary ma-1",staticStyle:{color:"black","margin-left":"10px !important"},attrs:{small:""},on:{click:function(t){return e.gotoDialogPage(r)}}},[e._v("\n              More...\n            ")]):e._e()]}}],null,!1,3818608054),model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}}):e._e()],1)],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(907).default})},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(99),o=n(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},907:function(e,t,n){"use strict";n.r(t);var r=n(60),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},911:function(e,t,n){var content=n(912);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("1377ef10",content,!0,{sourceMap:!1})},912:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},920:function(e,t,n){"use strict";n(12),n(14),n(20),n(9),n(21);var r=n(2),o=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(911),n(919)),l=n(221),c=n(71),d=n(1);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),h(h({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})}}]);