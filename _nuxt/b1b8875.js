(window.webpackJsonp=window.webpackJsonp||[]).push([[373],{1645:function(t,e,n){"use strict";n.r(e);var o=n(138),r=n(538),c=n(1584),l=n(537),d=n(899),f=n(99),m=n(885),h=(n(33),n(12),n(14),n(11),n(20),n(21),n(2));n(6),n(80),n(31),n(58),n(9),n(37);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={data:function(t){var e,n;return{cumulativeIndex:1,perPage:10,currentPage:1,showFilters:!1,filters:{},isFilter:!1,totalRowsCount:10,filter_employeeid:"",snack:!1,snackColor:"",snackText:"",datatable_search_textbox:"",total:0,options:{},data:[],name:"",endpoint:"gettimezonesinfo",Model:"Timezone Mapping List ",response:"",tableData:[],tableColumns:[],loading:!1,snackbar:!1,color:"black",pagination:{current:1,total:0,per_page:10},headers:[(e={text:"#",align:"left",sortable:!1,value:"sno"},Object(h.a)(e,"align","start"),Object(h.a)(e,"key","sno"),Object(h.a)(e,"value","sno"),e),(n={text:"Ttile",align:"left",sortable:!1},Object(h.a)(n,"align","start"),Object(h.a)(n,"key","timezoneName"),Object(h.a)(n,"filterable",!0),Object(h.a)(n,"filterSpecial",!1),Object(h.a)(n,"value","timezone.timezone_name"),n),{text:"Devices",align:"left",sortable:!1,value:"devices",filterable:!1,filterSpecial:!1,key:"device",placeHolder:"Type Device Name"}],branchesList:[],branch_id:""}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0},mounted:function(){this.getDataFromApi()},methods:{applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},getDeviceslist:function(t){var e="";return t.forEach((function(t){e=e+t.location+": "+t.name+" <br />"})),e},getEmployeelist:function(t){var e="";return t.forEach((function(t){e=e+t.display_name+": "+t.employee_id+"<br />"})),e},displayView:function(t){this.$router.push("/timezonemapping/"+t)},displayEdit:function(t){this.$router.push("/timezonemapping/edit?id="+t)},deleteItem:function(t,e){var n=this,o=this.$axios.defaults.baseURL+"/deletetimezone",r={timezone_id:e,id:t,company_id:this.$auth.user.company_id};confirm("Are you sure you want to delete this item?")&&this.$axios.post("".concat(o),r).then((function(t){var data=t.data;n.getDataFromApi(),data.status?(n.errors=[],n.snackbar=!0,n.response=data.message):n.errors=data.errors}))},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1?arguments[1]:void 0;this.data=[];var o=this.options,r=o.sortBy,c=o.sortDesc,l=o.page,d=o.itemsPerPage,f={params:_({page:l,sortBy:r?r[0]:"",sortDesc:c?c[0]:"",per_page:d,company_id:this.$auth.user.company_id,branch_id:this.branch_id,employee_id:this.$auth.user.employee.employee_id,cols:["id","employee_id","display_name"]},this.filters)};""!=n&&(f.params.additional_params=n),this.loading=!0,this.$axios.get("".concat(e,"?page=").concat(l),f).then((function(e){var data=e.data;t.data=data.data,t.itemsPerPage=t.data.length,t.totalRowsCount=data.total,t.pagination.current=data.current_page,t.pagination.total=data.last_page,t.loading=!1}))},goToCreatePage:function(){this.$router.push("/timezonemapping/new")},handleAction:function(t,data){}}},O=y,j=n(60),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center ma-2"},[e(d.a,{attrs:{small:"",top:"top",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(l.a,{staticClass:""},[e(r.a,{attrs:{cols:"12"}},[e(o.a,[e(f.a,{staticClass:"rounded-md",attrs:{color:"popup_background",dense:"",flat:""}},[e(r.a,{attrs:{cols:"12"}},[e(m.b,[e("span",[t._v("Device(s)")])])],1)],1),t._v(" "),e(c.a,{staticClass:"elevation-1 alternate-rows",attrs:{dense:"",headers:t.headers,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.sno",fn:function(e){var n=e.item;e.index;return[t._v("\n            "+t._s(t.currentPage?(t.currentPage-1)*t.perPage+(t.cumulativeIndex+t.data.indexOf(n)):"-")+"\n          ")]}},{key:"item.devices",fn:function(n){var o=n.item;return t._l(o.device_id,(function(n,o){return e("div",{key:"b"+o},[e("div",[t._v("\n                "+t._s(n.name)+" "),e("span",{staticStyle:{color:"red"}},[t._v("in")]),t._v("\n                "+t._s(n.location)+"\n              ")])])}))}}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},885:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var o=n(99),r=n(1),c=Object(r.k)("v-toolbar__title"),l=Object(r.k)("v-toolbar__items");o.a}}]);