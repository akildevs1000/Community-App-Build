(window.webpackJsonp=window.webpackJsonp||[]).push([[421,185,202],{1478:function(e){e.exports=JSON.parse('[{"text":"S.No","align":"left","sortable":true,"value":"sno","filterable":false,"filterSpecial":false},{"text":"Name of Schedule","align":"left","sortable":true,"key":"name","value":"name","filterable":true,"filterSpecial":false},{"text":"Type Schedule","align":"left","sortable":true,"key":"shift_type_name","value":"shift_type.name","filterable":true,"filterSpecial":false},{"text":"Scheduled Time","align":"left","sortable":true,"key":"scheduled_time","value":"scheduled_time","filterable":false,"filterSpecial":false},{"text":"From Date","align":"left","sortable":true,"key":"from_date","value":"show_from_date","filterable":false,"filterSpecial":false},{"text":"To Date","align":"left","sortable":true,"key":"to_date","value":"show_to_date","filterable":false,"filterSpecial":false},{"text":"Auto Shift","align":"left","sortable":true,"key":"isAutoShift","value":"isAutoShift","filterable":false,"filterSpecial":false},{"text":"Half Day","align":"left","sortable":true,"key":"halfday","value":"halfday","filterable":false,"filterSpecial":false},{"text":"Half Day Working Hours","align":"left","sortable":true,"key":"halfday_working_hours","value":"halfday_working_hours","filterable":false,"filterSpecial":false},{"text":"Actions","align":"left","sortable":false,"key":"actions","value":"actions"}]')},1479:function(e){e.exports=JSON.parse('{"1":{"on_duty_time":"00:01","off_duty_time":"23:59","working_hours":"09:00","overtime_interval":"00:30","days":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"weekend1":"Not Applicable","weekend2":"Not Applicable","monthly_flexi_holidays":0,"halfday":"Not Applicable","halfday_working_hours":"HH:MM"},"2":{"on_duty_time":"00:01","off_duty_time":"23:59","working_hours":"09:00","overtime_interval":"00:30","days":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"weekend1":"Not Applicable","weekend2":"Not Applicable","monthly_flexi_holidays":0,"halfday":"Not Applicable","halfday_working_hours":"HH:MM"},"4":{"on_duty_time":"20:00","off_duty_time":"08:00","working_hours":"12:00","overtime_interval":"00:30","days":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"weekend1":"Not Applicable","weekend2":"Not Applicable","monthly_flexi_holidays":0,"beginning_in":"19:00","beginning_out":"22:00","ending_in":"06:00","ending_out":"10:00","late_time":"00:15","early_time":"00:15","absent_min_in":"01:00","absent_min_out":"01:00","halfday":"Not Applicable","halfday_working_hours":"HH:MM"},"5":{"name":"","late_time":"00:15","early_time":"00:15","absent_min_in":"01:00","absent_min_out":"01:00","working_hours":"09:00","overtime_interval":"00:30","days":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"weekend1":"Not Applicable","weekend2":"Not Applicable","monthly_flexi_holidays":0,"on_duty_time":"09:00","off_duty_time":"14:00","beginning_in":"06:00","beginning_out":"17:00","ending_in":"06:00","ending_out":"13:00","on_duty_time1":"17:00","off_duty_time1":"21:00","beginning_in1":"16:00","beginning_out1":"18:00","ending_in1":"20:00","ending_out1":"23:59","halfday":"Not Applicable","halfday_working_hours":"HH:MM"},"6":{"on_duty_time":"09:00","off_duty_time":"18:00","working_hours":"09:00","overtime_interval":"00:30","days":["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],"weekend1":"Not Applicable","weekend2":"Not Applicable","monthly_flexi_holidays":0,"beginning_in":"06:00","beginning_out":"13:00","ending_in":"15:00","ending_out":"21:00","late_time":"00:15","early_time":"00:15","absent_min_in":"01:00","absent_min_out":"01:00","halfday":"Not Applicable","halfday_working_hours":"HH:MM"}}')},1632:function(e,t,n){"use strict";n.r(t);var r=n(117),o=n(138),l=n(79),c=n(541),d=n(539),h=n(903),f=n(1596),_=n(361),m=n(116),y=n(336),v=n(211),k=n(10),w=n(888),S=n(538),x=n(920),D=n(900),A=n(360),C=n(221),F=n(99),O=n(886),N=n(86),M=(n(33),n(37),n(12),n(14),n(11),n(6),n(20),n(9),n(21),n(2)),j=n(17),T=(n(31),n(58),n(70),n(69),n(1293)),P=n(999),$=n(1478),H=n(1479),R=n(1586);function B(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(t){Object(M.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I=new Date,W=new Date(I);W.setFullYear(I.getFullYear()+1);var Y={components:{Back:P.default,DatePickerCommon:T.default,SplitShift:R.default},data:function(){return{showDialog:!1,branchList:[],isFilter:!1,filters:{},shifts:[],datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",employee:{},defaults:H,currentDate:I,nextYearDate:W,payload:{shift_type_id:1},isNew:!0,options:{},Model:"Shift & Schedule",endpoint:"shift",search:"",snackbar:!1,ids:[],loading:!1,total:0,headers:$,response:"",data:[],errors:[],renderComponent:0,branch_id:0,isCompany:!0,comp:""}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.loading=!0,!e.$auth.user.branch_id){t.next=5;break}return e.branch_id=e.$auth.user.branch_id,e.isCompany=!1,t.abrupt("return");case 5:e.getComponent();case 6:case"end":return t.stop()}}),t)})))()},methods:{handleChangeEvent:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchDropDowns",{key:"branchList",endpoint:"branch-list"});case 2:e.branchList=t.sent;case 3:case"end":return t.stop()}}),t)})))()},getRelatedShiftComponent:function(){this.payload=E({shift_type_id:this.payload.shift_type_id},this.defaults[this.payload.shift_type_id]),this.renderComponent=999*Math.random()+1,this.getComponent()},getComponent:function(){switch(this.payload.shift_type_id){case 6:this.comp="widgetsShiftsSingleShift";break;case 4:this.comp="widgetsShiftsOverNightShift";break;case 3:this.comp="widgetsShiftsAutoShift";break;case 2:this.comp="widgetsShiftsMultiInOutShift";break;default:this.comp="widgetsShiftsFiloShift"}},toggleFilter:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isFilter=!e.isFilter,e.isFilter&&(e.refresh=!0,e.handleChangeEvent());case 2:case"end":return t.stop()}}),t)})))()},goToCreate:function(){this.isNew=!0,this.payload=E({shift_type_id:1,branch_id:this.branch_id},this.defaults[this.payload.shift_type_id]),this.renderComponent=999*Math.random()+1,this.showDialog=!0,this.getComponent(),this.refresh=!0,this.handleChangeEvent()},caps:function(e){return e.replace(/_/g," ").replace(/\b\w/g,(function(e){return e.toUpperCase()}))},can:function(e){return this.$pagePermission.can(e,this)},getRecords:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.getDataFromApi(this.endpoint,e,t)},applyFilters:function(){this.getDataFromApi()},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.loading=!0;var o=this.options,l=o.sortBy,c=o.sortDesc,d=o.page,h=o.itemsPerPage,f={params:E({page:d,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:h,company_id:this.$auth.user.company_id},this.filters)};""!=n&&(f.params[n]=r),this.$axios.get(t,f).then((function(t){var data=t.data;if(""!=n&&0==data.data.length)return e.snack=!0,e.snackColor="error",e.snackText="No Results Found",e.loading=!1,!1;e.data=data.data,e.total=data.total,e.loading=!1}))},searchIt:function(e){0==e.length?this.getDataFromApi():e.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},editItem:function(e){this.isNew=!1,this.renderComponent=999*Math.random()+1,this.payload=e,this.payload.from_date=new Date(e.from_date),this.payload.to_date=new Date(e.to_date),this.currentDate=e.from_date,this.nextYearDate=e.to_date,this.showDialog=!0,this.getComponent(),this.refresh=!0,this.handleChangeEvent()},delteteSelectedRecords:function(){var e=this;confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:this.ids.map((function(e){return e.id}))}).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):e.errors=data.errors})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message):t.errors=data.errors})).catch((function(e){return console.log(e)}))},submit:function(){var e=this;this.payload.company_id=this.$auth.user.company_id,this.payload.from_date||(this.payload.from_date=this.currentDate),this.payload.to_date||(this.payload.to_date=this.nextYearDate),this.loading=!0,this.$axios.post("/shift",this.payload).then((function(t){var data=t.data;e.loading=!1,data.status?(e.errors=[],e.snackbar=!0,e.response="Shift added successfully",e.showDialog=!1,e.getDataFromApi()):e.errors=data.errors})).catch((function(t){var n=t.message;e.snackbar=!0,e.response=n,e.showDialog=!1}))},update:function(){var e=this;this.loading=!0,this.$axios.put("/shift/".concat(this.payload.id),this.payload).then((function(t){var data=t.data;e.loading=!1,data.status?(e.errors=[],e.snackbar=!0,e.response="Shift update successfully",e.showDialog=!1,e.getDataFromApi()):e.errors=data.errors})).catch((function(t){var n=t.message;e.snackbar=!0,e.response=n}))}}},L=Y,J=n(60),component=Object(J.a)(L,(function(){var e=this,t=e._self._c;return e.can("shift_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(D.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(_.a,{attrs:{persistent:"",width:"1100"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[t(o.a,[t(l.d,{staticClass:"popup_background",attrs:{dark:""}},[e._v("\n        "+e._s(e.Model)+"\n        "),t(A.a),e._v(" "),t(m.a,{attrs:{dark:"",outlined:""},on:{click:function(t){e.showDialog=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(l.c,[t(S.a,[t(d.a,{attrs:{cols:"12"}},[t(c.a,{attrs:{"hide-details":"",small:"",color:"primary",label:"Auto Shift"},model:{value:e.payload.isAutoShift,callback:function(t){e.$set(e.payload,"isAutoShift",t)},expression:"payload.isAutoShift"}})],1),e._v(" "),t(d.a,{attrs:{md:"3",sm:"12",cols:"12"}},[t("label",[e._v("Type of Schedule "),t("span",{staticClass:"error--text"},[e._v("*")])]),e._v(" "),t(x.a,{attrs:{items:[{id:1,name:"Flexible"},{id:4,name:"Night"},{id:6,name:"Single"},{id:5,name:"Dual"},{id:2,name:"Multi"}],"item-value":"id","item-text":"name","hide-details":!0,dense:"",outlined:""},on:{change:e.getRelatedShiftComponent},model:{value:e.payload.shift_type_id,callback:function(t){e.$set(e.payload,"shift_type_id",t)},expression:"payload.shift_type_id"}}),e._v(" "),e.errors&&e.errors.shift_type_id?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.shift_type_id[0]))]):e._e()],1),e._v(" "),t(d.a,{attrs:{md:"3",sm:"12",cols:"12"}},[t("label",[e._v("Name of Schedule"),t("span",{staticClass:"error--text"},[e._v("*")])]),e._v(" "),t(C.a,{attrs:{"hide-details":!0,dense:"",outlined:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}}),e._v(" "),e.errors&&e.errors.name?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.name[0]))]):e._e()],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[5==e.payload.shift_type_id?t("SplitShift",{key:e.renderComponent,attrs:{shift_type_id:e.payload.shift_type_id,name:e.payload.name,payload:e.payload},on:{success:e.getDataFromApi,"close-popup":function(t){e.showDialog=!1}}}):e._e(),e._v(" "),5!=e.payload.shift_type_id?t(e.comp,{key:e.renderComponent,tag:"component",attrs:{errors:e.errors,payload:e.payload}}):e._e()],1)],1),e._v(" "),e.can("shift_create")&&5!=e.payload.shift_type_id?t(S.a,[t(d.a,{attrs:{cols:"4",md:"4"}},[t("DatePickerCommon",{attrs:{label:"From Date",default_value:e.currentDate},on:{selectedDate:function(t){return e.payload.from_date=t}}}),e._v(" "),e.errors&&e.errors.from_date?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.from_date[0]))]):e._e()],1),e._v(" "),t(d.a,{attrs:{cols:"4",md:"4"}},[t("DatePickerCommon",{attrs:{label:"To Date",default_value:e.nextYearDate},on:{selectedDate:function(t){return e.payload.to_date=t}}}),e._v(" "),e.errors&&e.errors.to_date?t("span",{staticClass:"text-danger"},[e._v(e._s(e.errors.to_date[0]))]):e._e()],1),e._v(" "),t(d.a,{staticStyle:{float:"right","text-align":"right"},attrs:{cols:"12"}},[e.payload&&e.payload.id>0?t(r.a,{attrs:{small:"",color:"primary"},on:{click:e.update}},[e._v("\n              Update\n            ")]):t(r.a,{attrs:{small:"",color:"primary"},on:{click:e.submit}},[e._v("\n              Submit\n            ")])],1)],1):e._e()],1)],1)],1),e._v(" "),e.can("shift_view")?t(o.a,{staticClass:"mt-2",attrs:{elevation:"0"}},[t(F.a,{staticClass:"mb-2 white--text",attrs:{color:"white",dense:"",flat:""}},[t(O.b,{staticStyle:{color:"black"}},[t("span",[e._v(" "+e._s(e.Model)+" List")])]),e._v(" "),t("span",[t(r.a,{attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(m.a,{attrs:{dark:"",white:""},on:{click:function(t){return e.getDataFromApi()}}},[e._v("mdi mdi-reload")])],1)],1),e._v(" "),t("span",[t(r.a,{attrs:{"x-small":"",ripple:!1,text:"",title:"Filter"}},[t(m.a,{attrs:{dark:"",white:""},on:{click:e.toggleFilter}},[e._v("mdi-filter")])],1)],1),e._v(" "),t(A.a),e._v(" "),t("span",[e.can("shift_create")?t(r.a,{attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Add   Shift Details"}},[t(m.a,{attrs:{dark:""},on:{click:e.goToCreate}},[e._v("mdi mdi-plus-circle")])],1):e._e()],1)],1),e._v(" "),t(D.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var o=n.attrs;return[t(r.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",o,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n      "+e._s(e.snackText)+"\n\n      ")]),e._v(" "),t(f.a,{staticClass:"elevation-1",attrs:{dense:"","server-items-length":e.total,headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[20,50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"header",fn:function(n){var r=n.props.headers;return[e.isFilter?t("tr",e._l(r,(function(header){return t("td",{key:header.text},[t(h.a,[header.filterable&&!header.filterSpecial?t(C.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{input:function(t){return e.applyFilters(header.key,t)}},model:{value:e.filters[header.key],callback:function(t){e.$set(e.filters,header.key,t)},expression:"filters[header.key]"}}):e._e(),e._v(" "),header.filterSpecial&&"branch.branch_name"==header.value?t(x.a,{attrs:{clearable:"",id:header.key,"hide-details":!0,outlined:"",dense:"",small:"","item-text":"name","item-value":"id",items:[{name:"All Branches",id:""}].concat(Object(N.a)(e.branchList)),placeholder:"All Branches",solo:"",flat:""},on:{"click:clear":function(t){e.filters[header.value]="",e.applyFilters()},change:function(t){return e.applyFilters(header.key,t)}},model:{value:e.filters[header.key],callback:function(t){e.$set(e.filters,header.key,t)},expression:"filters[header.key]"}}):e._e()],1)],1)})),0):e._e()]}},{key:"item.sno",fn:function(t){t.item;var n=t.index;return[e._v("\n        "+e._s(++n)+"\n      ")]}},{key:"item.scheduled_time",fn:function(n){var r=n.item;n.index;return[e._v("\n        "+e._s(r.on_duty_time)+" to "+e._s(r.off_duty_time)+"\n        "),5==r.shift_type_id?t("span",[e._v("\n          -\n          "+e._s(r.on_duty_time1)+" to "+e._s(r.off_duty_time1)+"\n        ")]):e._e()]}},{key:"item.isAutoShift",fn:function(n){var r=n.item;n.index;return[r.isAutoShift?t(m.a,{attrs:{color:"green"}},[e._v("mdi-check")]):t(m.a,{attrs:{color:"red"}},[e._v("mdi-close")])]}},{key:"item.actions",fn:function(n){var o=n.item;return[t(w.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[t("div",{staticClass:"text-center"},[t(r.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[t(m.a,[e._v("mdi-dots-vertical")])],1)],1)]}}],null,!0)},[e._v(" "),t(y.a,{attrs:{width:"120",dense:""}},[e.can("shift_edit")?t(v.a,{on:{click:function(t){return e.editItem(o)}}},[t(k.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-pencil ")]),e._v("\n                Edit\n              ")],1)],1):e._e(),e._v(" "),e.can("shift_delete")?t(v.a,{on:{click:function(t){return e.deleteItem(o)}}},[t(k.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                Delete\n              ")],1)],1):e._e()],1)],1)]}}],null,!1,692233948)})],1):t("NoAccess")],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(908).default})},886:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(99),o=n(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},908:function(e,t,n){"use strict";n.r(t);var r=n(60),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},999:function(e,t,n){"use strict";n.r(t);var r={props:["color"],methods:{goBack:function(){window.history.back()}}},o=n(60),component=Object(o.a)(r,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=component.exports}}]);