(window.webpackJsonp=window.webpackJsonp||[]).push([[24,185],{1205:function(t,e,n){"use strict";n.r(e);var o=n(117),r=n(138),c=n(79),d=n(538),l=n(902),m=n(1584),h=n(360),_=n(116),v=n(335),f=n(211),k=n(10),y=n(887),x=n(537),I=n(899),C=n(359),w=n(221),A=n(99),$=n(885),N=(n(33),n(222),n(37),n(57),n(223),n(31),n(272),{components:{TiptapVuetify:n(372).p},data:function(){return{formTitle:"New Category",dialogEmployees:!1,idsEmployeeList:[],datatable_search_textbox:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",title:"",options:{},Model:"Announcement Categories",endpoint:"announcements_category",search:"",snackbar:!1,dialog:!1,ids:[],departments:[],loading:!1,total:0,headers:[{text:"Name",align:"left",sortable:!0,key:"name",value:"name"},{text:"Actions",align:"center",value:"action",sortable:!1}],editedIndex:-1,editedItem:{name:"",description:""},defaultItem:{name:"",description:""},response:"",data:[],errors:[],branch_id:null,branchesList:[]}},computed:{},watch:{},created:function(){var t=this;if(this.loading=!0,this.options={params:{per_page:100,company_id:this.$auth.user.company_id}},null==this.$auth.user.branch_id){var e;(e=this.headers).splice.apply(e,[1,0].concat([{text:"Branch",align:"left",sortable:!0,key:"branch_id",value:"branch.branch_name",width:"300px",filterable:!0,filterSpecial:!0}]))}this.$axios.get("branches_list",this.options).then((function(e){var data=e.data;t.branchesList=data,t.branch_id=t.$auth.user.branch_id||""})),this.getDataFromApi()},methods:{newDialog:function(){this.formTitle="New Category",this.errors=[],this.editedIndex=-1,this.editedItem={name:"",description:"",priority:0},this.defaultItem={name:"",description:"",priority:0},this.dialog=!0},can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";""==e&&(e=this.endpoint),this.loading=!0;new Date;var r=this.options,c=r.page,d={params:{per_page:r.itemsPerPage,company_id:this.$auth.user.company_id,branch_id:this.branch_id}};""!=n&&(d.params[n]=o),this.$axios.get("".concat(e,"?page=").concat(c),d).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.data=data.data,t.total=data.total,t.loading=!1}))},editItem:function(t){this.errors=[],this.formTitle="Edit Category  ",this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete ?")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message):e.errors=data.errors})).catch((function(t){return console.log(t)}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this;this.editedItem.company_id=this.$auth.user.company_id,this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,this.editedItem).then((function(e){var data=e.data;if(data.status){var n=t.data.findIndex((function(e){return e.id==t.editedItem.id}));t.data.splice(n,1,{id:t.editedItem.id,name:t.editedItem.name}),t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close()}else t.errors=data.errors,t.errors=data.errors,t.snackColor="error",t.snackbar=!0,t.response=data.message})).catch((function(t){return console.log(t)})):this.$axios.post(this.endpoint,this.editedItem).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search=""):(t.errors=data.errors,t.loading=!1)})).catch((function(t){return console.log(t)}))}}}),D=N,S=n(60),component=Object(S.a)(D,(function(){var t=this,e=t._self._c;return t.can("announcement_category_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(I.a,{attrs:{top:"top",color:t.snackColor,elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(h.a,{attrs:{width:"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,[e(c.d,{staticClass:"popup_background",attrs:{dense:""}},[t._v("\n        "+t._s(t.formTitle)+"\n        "),e(C.a),t._v(" "),e(_.a,{attrs:{outlined:"",dark:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n          mdi mdi-close-circle\n        ")])],1),t._v(" "),e(c.c,[e(l.a,[e(x.a,[e(d.a,{attrs:{cols:"12"}},[e("label",{staticStyle:{"margin-bottom":"5px"},attrs:{for:""}},[t._v("Name")]),t._v(" "),e("br"),t._v(" "),e(w.a,{attrs:{dense:"",outlined:"",placeholder:"Name","error-messages":t.errors&&t.errors.name?t.errors.name[0]:""},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1)],1)],1),t._v(" "),e(c.a,[e(C.a),t._v(" "),e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1),t._v(" "),e(x.a,[e(d.a,{attrs:{md:"12"}},[e(r.a,{staticClass:"mb-5 mt-2 rounded-md",attrs:{elevation:"0"}},[e(A.a,{staticClass:"rounded-md",attrs:{dense:"",flat:""}},[e($.b),t._v(" "),e("span"),t._v(" "),e(C.a),t._v(" "),e("span",[t.can("announcement_category_create")?e(o.a,{staticClass:"ma-0 px-2",attrs:{dense:"","x-small":"",ripple:!1,color:"primary",title:"Add Announcement Category"},on:{click:function(e){return t.newDialog()}}},[t._v("\n              Add New Category\n              ")]):t._e()],1)],1),t._v(" "),e(I.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var r=n.attrs;return[e(o.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),t.can("leave_type_view")?e(m.a,{staticClass:"elevation-1",attrs:{"item-key":"id",headers:t.headers,items:t.data,loading:t.loading,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},height:"300px"},scopedSlots:t._u([{key:"item.action",fn:function(n){var r=n.item;return[e(y.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(o.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",c,!1),r),[e(_.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(v.a,{attrs:{width:"120",dense:""}},[e(f.a,{on:{click:function(e){return t.editItem(r)}}},[e(k.c,{staticStyle:{cursor:"pointer"}},[t.can("announcement_category_edit")?e(_.a,{attrs:{color:"secondary",small:""},on:{click:function(e){return t.editItem(r)}}},[t._v("\n                      mdi-pencil\n                    ")]):t._e(),t._v("\n                    Edit\n                  ")],1)],1),t._v(" "),e(f.a,{on:{click:function(e){return t.deleteItem(r)}}},[e(k.c,{staticStyle:{cursor:"pointer"}},[t.can("announcement_category_delete")?e(_.a,{attrs:{color:"error",small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v("\n                      "+t._s("customer"===r.announcement?"":"mdi-delete")+"\n                    ")]):t._e(),t._v("\n                    Delete\n                  ")],1)],1)],1)],1)]}},{key:"no-data",fn:function(){},proxy:!0}],null,!1,1706024818),model:{value:t.ids,callback:function(e){t.ids=e},expression:"ids"}}):t._e()],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(907).default})},885:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return c}));var o=n(99),r=n(1),c=Object(r.k)("v-toolbar__title"),d=Object(r.k)("v-toolbar__items");o.a},907:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);