(window.webpackJsonp=window.webpackJsonp||[]).push([[165,35,185],{1388:function(t,e,o){"use strict";o.r(e);var n=o(117),r=o(138),l=o(538),c=o(1584),d=o(537),h=o(899),f=o(359),m=o(99),_=o(885),v=(o(33),o(2));o(542),o(6),o(80),o(37),o(12),o(14),o(11),o(20),o(9),o(21);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D={data:function(){var t;return t={cumulativeIndex:1,perPage:10,currentPage:1,totalRowsCount:0,showFilters:!1,filters:{},isFilter:!1,datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",Model:"Log",endpoint:"attendance_logs",from_date:null,from_menu:!1,to_date:null,to_menu:!1,payload:{},loading:!0,date:null,menu:!1},Object(v.a)(t,"loading",!1),Object(v.a)(t,"time_menu",!1),Object(v.a)(t,"log_payload",{user_id:41,device_id:"",date:null,time:null}),Object(v.a)(t,"ids",[]),Object(v.a)(t,"data",[]),Object(v.a)(t,"devices",[]),Object(v.a)(t,"total",0),Object(v.a)(t,"options",{}),Object(v.a)(t,"payloadOptions",{}),Object(v.a)(t,"errors",[]),Object(v.a)(t,"response",""),Object(v.a)(t,"snackbar",!1),Object(v.a)(t,"headers_table",[{text:"#",align:"left",sortable:!1,key:"LogTime",value:"sno"},{text:"Log Time",align:"left",sortable:!0,key:"LogTime",value:"LogTime"},Object(v.a)({text:"Device",align:"left",sortable:!0,value:"devicename"},"value","device.name"),{text:"  Location",align:"left",sortable:!0,key:"deviceid",value:"gps_location"}]),t},created:function(){this.firstLoad()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{filterAttr:function(data){this.payload.from_date=data.from,this.payload.to_date=data.to,this.payload.from_date_txt=data.from,this.payload.to_date_txt=data.to,this.payload.UserID=this.$auth.user.employee.system_user_id,this.getDataFromApi()},firstLoad:function(){this.payload.from_date=this.getDate(),this.payload.to_date=this.getDate(),this.payload.from_date_txt="2023-11-01",this.payload.to_date_txt=this.getDate(),this.payload.UserID=this.$auth.user.employee.system_user_id,this.getDataFromApi()},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},getDate:function(){var t=new Date,e=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(o,"-").concat(n)},can:function(t){return this.$pagePermission.can(t,this)},getRecords:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""!=e&&e.length<=2)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 3 Characters to filter ",this.loading=!1,!1;this.getDataFromApi(this.endpoint,t,e)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t,e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=this.options,c=l.sortBy,d=l.sortDesc,h=l.page,f=l.itemsPerPage,m=c?c[0]:"",_=d?d[0]:"";this.payloadOptions={params:O(O(O((t={page:h,sortBy:m,sortDesc:_,per_page:f},Object(v.a)(t,"per_page",this.options.itemsPerPage),Object(v.a)(t,"company_id",this.$auth.user.company_id),t),this.payload),this.filters),{},{system_user_id:this.$auth.user.employee.system_user_id})},this.currentPage=h,this.perPage=f,""!=n&&(this.payloadOptions.params[n]=r),this.loading=!0,this.$axios.get("".concat(o,"?page=").concat(this.options.page),this.payloadOptions).then((function(t){var data=t.data;if(""!=n&&0==data.data.length)return e.snack=!0,e.snackColor="error",e.snackText="No Results Found",e.loading=!1,!1;e.data=data.data,e.total=data.total,e.loading=!1,e.totalRowsCount=data.total}))},searchIt:function(){return this.payload.from_date_txt=this.payload.from_date,this.payload.to_date_txt=this.payload.to_date,this.getDataFromApi(),this.from_menu=!1,this.to_menu=!1,!1}}},x=D,k=o(60),component=Object(k.a)(x,(function(){var t=this,e=t._self._c;return t.can("logs_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(h.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(d.a,[e(l.a,[e(r.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[e(m.a,{attrs:{dense:"",flat:""}},[e(_.b,[e("h5",[t._v("Live Logs on Devices")])]),t._v(" "),e(f.a),t._v(" "),e("Calender",{staticStyle:{width:"200px"},attrs:{defaultFilterType:1,height:"28px "},on:{"filter-attr":t.filterAttr}})],1),t._v(" "),e(h.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(o){var r=o.attrs;return[e(n.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(c.a,{staticClass:"elevation-0",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.sno",fn:function(e){var o=e.item;e.index;return[t._v("\n            "+t._s(t.currentPage?(t.currentPage-1)*t.perPage+(t.cumulativeIndex+t.data.indexOf(o)):"-")+"\n          ")]}},{key:"item.UserID",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.UserID)+"\n          ")]}},{key:"item.LogTime",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.LogTime)+"\n          ")]}},{key:"item.device.device_name",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.device?o.device.name:"---")+"\n          ")]}},{key:"item.device.location",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.device?o.device.location:"---")+"\n          ")]}},{key:"item.gps_location",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.gps_location||"---")+"\n          ")]}}],null,!1,1524953078)})],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Calender:o(930).default,NoAccess:o(907).default})},885:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return l}));var n=o(99),r=o(1),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");n.a},907:function(t,e,o){"use strict";o.r(e);var n=o(60),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},930:function(t,e,o){"use strict";o.r(e);var n=o(537),r=(o(59),o(31),o(272),o(937)),l=(o(936),{components:{DatePicker:r.a},props:["defaultFilterType","height","width","default_date_from","default_date_to"],data:function(){return{time3:null,from_date:"",from_menu:!1,to_date:"",to_menu:!1,loading:!1,showTimePanel:!1,filterType:1,search:""}},watch:{filterType:function(){this.showTimePanel=!0,this.FilterData()}},mounted:function(){},created:function(){this.defaultFilterType&&(this.filterType=this.defaultFilterType);var t=new Date;this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10),this.time3=[this.from_date,this.to_date]},methods:{commonMethod:function(){this.from_date&&this.to_date},CustomFilter:function(){if(this.from_date=this.time3[0],this.to_date=this.time3[1],this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},FilterData:function(){this.from_date=this.time3[0],this.to_date=this.time3[1];var t=new Date;if(1==this.filterType)this.from_date=t.toISOString().slice(0,10),this.to_date=t.toISOString().slice(0,10);else if(2==this.filterType){var e=new Date;e.setDate(t.getDate()-1),this.from_date=e.toISOString().slice(0,10),this.to_date=e.toISOString().slice(0,10)}else if(3==this.filterType){var o=new Date(t);o.setDate(t.getDate()-t.getDay());var n=new Date(t);n.setDate(t.getDate()-t.getDay()+6),this.from_date=o.toISOString().slice(0,10),this.to_date=n.toISOString().slice(0,10)}else if(4==this.filterType)this.from_date=this.formatDate(new Date(t.getFullYear(),t.getMonth(),1)),this.to_date=this.formatDate(new Date(t.getFullYear(),t.getMonth()+1,0));else if(5==this.filterType)return void(this.time3=[]);if(this.from_date&&this.to_date){var data={from:this.from_date,to:this.to_date,type:this.filterType,search:this.search};this.$emit("filter-attr",data)}},formatDate:function(t){var e=t.getDate(),o=t.getMonth()+1;return t.getFullYear()+"-"+(o<10?"0":"")+o+"-"+(e<10?"0":"")+e}}}),c=(o(963),o(60)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e(n.a,[e("date-picker",{staticStyle:{"padding-top":"7px",width:"100%"},attrs:{"value-type":"format",format:"YYYY-MM-DD",type:"date",range:""},on:{change:function(e){return t.CustomFilter()}},model:{value:t.time3,callback:function(e){t.time3=e},expression:"time3"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports},934:function(t,e,o){var content=o(964);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("20f2e8f4",content,!0,{sourceMap:!1})},963:function(t,e,o){"use strict";o(934)},964:function(t,e,o){var n=o(18)((function(i){return i[1]}));n.push([t.i,".mx-input{border:1px solid #9e9e9e!important;color:#000!important}.mx-datepicker{width:200px}.mx-table-date td,.mx-table-date th{text-align:center!important}",""]),n.locals={},t.exports=n}}]);