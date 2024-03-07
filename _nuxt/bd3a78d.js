(window.webpackJsonp=window.webpackJsonp||[]).push([[424,185],{1624:function(e,t,r){"use strict";r.r(t);var n=r(117),o=r(138),l=r(538),c=r(1584),m=r(116),d=r(219),f=r(537),_=r(919),h=r(99),v=r(885),y=r(86),x=(r(37),r(33),r(2)),w=r(17);r(69),r(222),r(6),r(80),r(31),r(58),r(12),r(14),r(11),r(20),r(9),r(21);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={data:function(){return{loading:!1,items:[],emptyLogmessage:"",number_of_records:5,logs:[],url:"wss://sdk.mytime2cloud.com/WebSocket",socket:null,totalRowsCount:0,total:0,options:{},headers:[{text:"Pic",align:"left",sortable:!1,filterable:!0,value:"employee.pic"},{text:"Employee Name",align:"left",sortable:!1,filterable:!0,value:"employee.first_name"},{text:"Page",align:"left",sortable:!1,filterable:!0,value:"action"},{text:"User ",align:"left",sortable:!1,filterable:!0,value:"user.user_type"},{text:"Email",align:"left",sortable:!1,filterable:!0,value:"user.email"},{text:"Time",align:"left",sortable:!1,filterable:!0,value:"LogTime"}],branch_id:null,branchesList:[],isCompany:!0}},watch:{options:{handler:function(){this.getRecords()},deep:!0}},created:function(){var e=this;return Object(w.a)(regeneratorRuntime.mark((function t(){var r,n,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.$auth.user.branch_id){t.next=4;break}return e.branch_id=e.$auth.user.branch_id,e.isCompany=!1,t.abrupt("return");case 4:return n=[{text:"Branch",align:"left",sortable:!0,key:"branch_id",value:"user.employee.branch.branch_name",width:"300px",filterable:!0,filterSpecial:!0}],(r=e.headers).splice.apply(r,[1,0].concat(n)),t.prev=6,t.next=9,e.$axios.get("branches_list",{params:{per_page:100,company_id:e.$auth.user.company_id}});case 9:o=t.sent,data=o.data,e.branchesList=data,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(6),console.error("Error fetching branch list",t.t0);case 17:case"end":return t.stop()}}),t,null,[[6,14]])})))()},methods:{can:function(e){return this.$pagePermission.can(e,this)},caps:function(e){return""==e||null==e?"":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},getRecords:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.options,o=n.sortBy,l=n.sortDesc,c=n.page,m=n.itemsPerPage,d=o?o[0]:"",f=l?l[0]:"";1==c&&(this.loading=!0);var _=m;_||(_=5);var h={params:O({branch_id:this.branch_id,page:c,sortBy:d,sortDesc:f,per_page:_,filter_column:r,company_id:this.$auth.user.company_id},this.filters)};""!=t&&(h.params[t]=r),this.$axios.get("activity",h).then((function(t){var data=t.data;e.totalRowsCount=data.total,e.logs=data.data,e.loading=!1}))}}},C=j,P=r(60),component=Object(P.a)(C,(function(){var e=this,t=e._self._c;return e.can("web_logs_access")?t("div",[t(o.a,{staticClass:"mb-5 mt-2 rounded-md",attrs:{elevation:"0"}},[t(h.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[t(v.b,[t("span",[e._v(" Web user Logins")])]),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(m.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){return e.getRecords()}}},[e._v("mdi-reload")])],1)],1),e._v(" "),e.isCompany?t("div",{staticStyle:{width:"250px"}},[t(_.a,{staticClass:"pt-10 px-2",attrs:{items:[{id:"",branch_name:"Select All"}].concat(Object(y.a)(e.branchesList)),dense:"",placeholder:"Select Branch",outlined:"","item-value":"id","item-text":"branch_name"},on:{change:function(t){return e.getRecords()}},model:{value:e.branch_id,callback:function(t){e.branch_id=t},expression:"branch_id"}})],1):e._e()],1),e._v(" "),t(c.a,{staticClass:"pt-5",attrs:{dense:"",headers:e.headers,items:e.logs,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[10,50,100]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.employee.pic",fn:function(e){var r=e.item;e.index;return[t(f.a,{attrs:{"no-gutters":""}},[t(l.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"30px","max-width":"30px"}},[t(d.a,{staticStyle:{"border-radius":"50%",height:"auto",width:"30px","max-width":"30px"},attrs:{src:r.user.employee?r.user.employee.profile_picture:"/no-profile-image.jpg"}})],1)],1)]}},{key:"item.branch.branch_name",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(r.branch&&r.branch_name||"---")+"\n      ")]}},{key:"item.employee.first_name",fn:function(r){var n=r.item;r.index;return[e._v("\n        "+e._s(n.user.employee?n.user.employee.first_name:"Admin")+"\n        "+e._s(n.user.employee?n.user.employee.last_name:" ")+"\n\n        "),t("div",[e._v("\n          "+e._s(n.user.employee&&n.user.employee.department?e.caps(n.user.employee.department.name):"---")+"\n        ")])]}},{key:"item.UserID",fn:function(t){var r=t.item;return[e._v(" #"+e._s(r.UserID)+" ")]}},{key:"item.employee.employee_id",fn:function(t){var r=t.item;return[e._v("\n        "+e._s(r.employee&&r.employee.employee_id)+"\n      ")]}},{key:"item.LogTime",fn:function(r){var n=r.item;return[t(m.a,{attrs:{color:"green",fill:""}},[e._v("mdi-clock-outline")]),e._v(e._s(n.date_time)+"\n      ")]}},{key:"item.online",fn:function(r){return[r.item.device.location?t(m.a,{attrs:{color:"green",fill:""}},[e._v("mdi-map-marker-radius")]):t(m.a,{attrs:{color:"red",fill:""}},[e._v("mdi-map-marker-radius")])]}},{key:"item.device.device_name",fn:function(r){var n=r.item;return[t("div",{style:n.device.location?"color:green":"color: red;"},[e._v("\n          "+e._s(n.device?e.caps(n.device.name):"---")+" "),t("br"),e._v("\n\n          "+e._s(n.device.location?n.device.location:"---")+"\n        ")])]}}],null,!1,3178905005)})],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:r(907).default})},885:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return l}));var n=r(99),o=r(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");n.a},907:function(e,t,r){"use strict";r.r(t);var n=r(60),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports}}]);