(window.webpackJsonp=window.webpackJsonp||[]).push([[378,185],{1303:function(e,t,n){var content=n(1484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("422ce3bc",content,!0,{sourceMap:!1})},1483:function(e,t,n){"use strict";n(1303)},1484:function(e,t,n){var r=n(20)((function(i){return i[1]}));r.push([e.i,".tiptap-vuetify-editor__content{min-height:300px!important}.ProseMirror .ProseMirror-focused{height:400px!important}",""]),r.locals={},e.exports=r},1644:function(e,t,n){"use strict";n.r(t);var r=n(921),o=n(117),l=n(138),c=n(79),d=n(1197),h=n(539),m=n(903),v=n(1579),f=n(1580),_=n(361),I=n(889),y=n(116),x=n(888),S=n(538),k=n(920),C=n(900),w=n(360),D=n(221),$=n(99),O=n(886),j=n(276),F=(n(14),n(73),n(31),n(273),n(37),n(33),n(70),n(57),n(373)),M={components:{TiptapVuetify:F.p},data:function(){return{extensions:[F.g,F.a,F.k,F.i,F.r,F.o,F.j,F.l,F.c,F.m,[F.f,{options:{levels:[1,2,3]}}],F.b,F.k,F.d,F.h,F.n,F.e],scrollInvoked:0,start_menu:!1,end_menu:!1,title:"",des:"",desDate:"",view_notification:!1,approved_by:"",approved_status:"",dept:"",options:{},Model:"Leave Request Notification",endpoint:"leave-notification",search:"",snackbar:!1,dialog:!1,ids:[],departments:[],type_manual:!1,loading:!1,total:0,leave_id:0,headers:[{text:"Employee Name",align:"left",sortable:!1,value:"employee.name_with_user_id"},{text:"Title",align:"left",sortable:!1,value:"title"},{text:"From",align:"left",sortable:!1,value:"start_date"},{text:"To",align:"left",sortable:!1,value:"end_date"},{text:"Status",align:"left",sortable:!1,value:"is_approved"},{text:"Actions",align:"center",value:"action",sortable:!1}],editedIndex:-1,editedItem:{title:"",type_manual:"",description:"",department:"",employee:"",start_date:null,end_date:null},defaultItem:{title:"",description:"",type:"",supervisor:"",company_id:"",start_date:null,end_date:null},response:"",data:[],reporters:[],errors:[],options_dialog:{},employees_dialog:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{dialog:function(e){e||this.close(),this.errors=[],this.type_manual=!1,this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getReporters()},methods:{can:function(e){return this.$pagePermission.can(e,this)},onScroll:function(){this.scrollInvoked++},status:function(e){var t=this,n={id:this.leave_id,approved_by:this.$auth.user.employee.id,is_approved:e};this.$axios.post("leave-status",n).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.viewItem(data.record),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search=""):t.errors=data.errors})).catch((function(e){return console.log(e)}))},changeType:function(e){"other"==e&&(this.type_manual=!0)},getReporters:function(){var e=this,t=this.$auth.user.employee.id;this.$axios.get("reporter_by_employee/".concat(t)).then((function(t){var data=t.data;e.reporters=data}))},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,r=n.page,o=n.itemsPerPage,l=this.$auth.user.employee.id,c={params:{per_page:o,company_id:this.$auth.user.employee.company_id}};this.$axios.get("".concat(t,"/").concat(l,"?page=").concat(r),c).then((function(t){var data=t.data;e.data=data.data,e.total=data.total,e.loading=!1}))},searchIt:function(e){0==e.length?this.getDataFromApi():e.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},editItem:function(e){this.editedIndex=this.data.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},viewItem:function(e){this.view_notification=!0,e.approved_by&&1==e.is_approved?(this.approved_by=e.approved_by.first_name,this.approved_status="Approved By"):e.approved_by&&2==e.is_approved?(this.approved_by=e.approved_by.first_name,this.approved_status="Rejectd By"):0==e.is_approved&&(this.approved_status="Pending"),this.leave_id=e.id,this.dept=e.employee.department.name,this.des=e.description,this.title=e.title,this.desDate=e.created_at},delteteSelectedRecords:function(){var e=this,t=this.ids.map((function(e){return e.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:t}).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.ids=[],e.response="Selected records has been deleted"):e.errors=data.errors})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message):t.errors=data.errors})).catch((function(e){return console.log(e)}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this,t={title:this.editedItem.title.toLowerCase(),description:this.editedItem.description,start_date:this.editedItem.start_date,end_date:this.editedItem.end_date,type:"other"==this.editedItem.type?this.editedItem.type_manual:this.editedItem.type,supervisor:this.editedItem.supervisor,company_id:this.$auth.user.employee.company_id,employee_id:this.$auth.user.employee.employee_id};this.$axios.post(this.endpoint,t).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message,e.close(),e.errors=[],e.search="",e.type_manual=!1):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}},A=M,P=(n(1483),n(60)),component=Object(P.a)(A,(function(){var e=this,t=e._self._c;return e.can("leave_notification_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(C.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(S.a,{staticClass:"mt-5 mb-5"},[t(h.a,{attrs:{cols:"6"}},[t("h3",[e._v(e._s(e.Model))]),e._v(" "),t("div",[e._v("Employee / "+e._s(e.Model))])]),e._v(" "),t(h.a,{attrs:{cols:"6"}},[t("div",{staticClass:"text-right"})])],1),e._v(" "),t(_.a,{attrs:{persistent:"","max-width":"60%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.a,[t(c.d,[t("span",{staticClass:"headline"},[e._v(e._s(e.formTitle)+" "+e._s(e.Model))])]),e._v(" "),t(c.c,[t(m.a,[t(S.a,[t(h.a,{attrs:{cols:"12"}},[t(D.a,{attrs:{label:"Title","error-messages":e.errors&&e.errors.title?e.errors.title[0]:""},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),e._v(" "),t(h.a,{attrs:{cols:"12"}},[t(k.a,{attrs:{items:["annual","sick","parental","other"],label:"Type","error-messages":e.errors&&e.errors.type?e.errors.type[0]:""},on:{change:function(t){return e.changeType(e.editedItem.type)}},model:{value:e.editedItem.type,callback:function(t){e.$set(e.editedItem,"type",t)},expression:"editedItem.type"}})],1),e._v(" "),e.type_manual?t(h.a,{attrs:{cols:"12"}},[t(D.a,{attrs:{label:"Other","error-messages":e.errors&&e.errors.type_manual?e.errors.type_manual[0]:""},model:{value:e.editedItem.type_manual,callback:function(t){e.$set(e.editedItem,"type_manual",t)},expression:"editedItem.type_manual"}})],1):e._e(),e._v(" "),t(h.a,{attrs:{cols:"12"}},[e._v("\n              "+e._s(e.editedItem.supervisor)+"\n              "),t(r.a,{attrs:{items:e.reporters,label:"Supervisor","item-text":"first_name","item-value":"id",chips:"",multiple:"","error-messages":e.errors&&e.errors.supervisor?e.errors.supervisor[0]:""},model:{value:e.editedItem.supervisor,callback:function(t){e.$set(e.editedItem,"supervisor",t)},expression:"editedItem.supervisor"}})],1),e._v(" "),t(h.a,{attrs:{cols:"6"}},[t(x.a,{ref:"from_menu",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.start_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"start_date",t)},"update:return-value":function(t){return e.$set(e.editedItem,"start_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("div",{staticClass:"mb-1"},[e._v("Start Date")]),e._v(" "),t(D.a,e._g(e._b({attrs:{dense:"",readonly:""},model:{value:e.editedItem.start_date,callback:function(t){e.$set(e.editedItem,"start_date",t)},expression:"editedItem.start_date"}},"v-text-field",o,!1),r))]}}],null,!1,3204556234),model:{value:e.start_menu,callback:function(t){e.start_menu=t},expression:"start_menu"}},[e._v(" "),t(f.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.editedItem.start_date,callback:function(t){e.$set(e.editedItem,"start_date",t)},expression:"editedItem.start_date"}},[t(w.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.from_menu=!1}}},[e._v("\n                    Reject\n                  ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.from_menu.save(e.editedItem.start_date)}}},[e._v("\n                    OK\n                  ")])],1)],1),e._v(" "),e.errors&&e.errors.start_date?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.start_date[0]))]):e._e()],1),e._v(" "),t(h.a,{attrs:{cols:"6"}},[t(x.a,{ref:"end_menu",attrs:{"close-on-content-click":!1,"return-value":e.editedItem.end_date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){return e.$set(e.editedItem,"end_date",t)},"update:return-value":function(t){return e.$set(e.editedItem,"end_date",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("div",{staticClass:"mb-1"},[e._v("End Date")]),e._v(" "),t(D.a,e._g(e._b({attrs:{"hide-details":!e.editedItem.end_date,dense:"",readonly:""},model:{value:e.editedItem.end_date,callback:function(t){e.$set(e.editedItem,"end_date",t)},expression:"editedItem.end_date"}},"v-text-field",o,!1),r))]}}],null,!1,1442780432),model:{value:e.end_menu,callback:function(t){e.end_menu=t},expression:"end_menu"}},[e._v(" "),t(f.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.editedItem.end_date,callback:function(t){e.$set(e.editedItem,"end_date",t)},expression:"editedItem.end_date"}},[t(w.a),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.end_menu=!1}}},[e._v("\n                    Reject\n                  ")]),e._v(" "),t(o.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.end_menu.save(e.editedItem.end_date)}}},[e._v("\n                    OK\n                  ")])],1)],1),e._v(" "),e.errors&&e.errors.end_date?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.end_date[0]))]):e._e()],1),e._v(" "),t(h.a,{attrs:{cols:"12"}},[t("ClientOnly",{scopedSlots:e._u([{key:"placeholder",fn:function(){return[e._v(" Loading... ")]},proxy:!0}],null,!1,669632662)},[t("tiptap-vuetify",{directives:[{def:j.b,name:"scroll",rawName:"v-scroll.self",value:e.onScroll,expression:"onScroll",modifiers:{self:!0}}],attrs:{extensions:e.extensions,"max-height":"300","toolbar-attributes":{color:"primary lighten-2 red--text text--lighten-1"}},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1),e._v(" "),e.errors&&e.errors.description?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.description[0]))]):e._e()],1)],1)],1),e._v(" "),t(c.a,[t(w.a),e._v(" "),t(o.a,{staticClass:"error",attrs:{small:""},on:{click:e.close}},[e._v(" Close ")]),e._v(" "),t(o.a,{staticClass:"primary",attrs:{small:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1),e._v(" "),t(_.a,{attrs:{persistent:"","max-width":"60%"},model:{value:e.view_notification,callback:function(t){e.view_notification=t},expression:"view_notification"}},[t(l.a,[t($.a,{staticClass:"pb-0 primary",attrs:{dark:"",flat:""}},[t("div",{staticClass:"w-50"},[t("span",{staticClass:"pb-0"},[t("small",[e._v(e._s(e.Model)+" Details")])])]),e._v(" "),t("div",{staticClass:"w-50 text-right"},[e.desDate?t("span",{staticClass:"pb-0"},[t("small",[e._v("Created: "+e._s(e.desDate))])]):e._e()])]),e._v(" "),t(c.c,[t(m.a,[t("h3",[e._v(e._s(e.title))]),e._v(" "),t(I.a),e._v(" "),t("div",[e.approved_by?t("span",[t("strong",[e._v(" "+e._s(e.approved_status)+":")]),e._v("\n              "+e._s(e.approved_by||"")+"\n            ")]):e._e()]),e._v(" "),t("div",[t(I.a),e._v(" "),e.leave_id&&e.dept?t(d.a,{staticClass:"primary pa-4",attrs:{small:"",color:"primary"}},[e._v("\n              "+e._s(e.dept)+"\n            ")]):e._e()],1),e._v(" "),t(I.a),e._v(" "),t("div",{domProps:{innerHTML:e._s(e.des)}})],1),e._v(" "),e.leave_id?t("div",[t(o.a,{staticClass:"primary",attrs:{small:""},on:{click:function(t){return e.status(1)}}},[e._v("Approved")]),e._v(" "),t(o.a,{staticClass:"error",attrs:{small:""},on:{click:function(t){return e.status(2)}}},[e._v("Reject")])],1):e._e()],1)],1)],1),e._v(" "),t(S.a,[t(h.a,{attrs:{md:"12"}},[e.can("leave_notification_list_view")?t(v.a,{staticClass:"elevation-1",attrs:{"show-select":"","item-key":"id",headers:e.headers,items:e.data,"server-items-length":e.total,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t($.a,{attrs:{flat:"",color:""}},[t(O.b,[e._v("List")]),e._v(" "),t(I.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),t(D.a,{attrs:{label:"Search","single-line":"","hide-details":""},on:{input:e.searchIt},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.action",fn:function(n){var r=n.item;return[e.can("leave_notification_show")?t(y.a,{staticClass:"mr-2",attrs:{color:"secondary",small:""},on:{click:function(t){return e.viewItem(r)}}},[e._v("\n            mdi-eye\n          ")]):e._e()]}},{key:"no-data",fn:function(){},proxy:!0},{key:"item.is_approved",fn:function(n){var r=n.item;return[t("label",{attrs:{for:""}},[t("span",[0==r.is_approved?t(d.a,{staticClass:"p-2 mx-1",attrs:{small:"",color:"primary"}},[e._v("\n                Pending\n              ")]):1==r.is_approved?t(d.a,{staticClass:"p-2 mx-1",attrs:{small:"",color:"success"}},[e._v("\n                Approved\n              ")]):e._e(),e._v(" "),2==r.is_approved?t(d.a,{staticClass:"p-2 mx-1",attrs:{small:"",color:"error"}},[e._v("\n                Reject\n              ")]):e._e()],1)])]}}],null,!1,4206789346),model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}}):e._e()],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:n(908).default})},886:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var r=n(99),o=n(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},908:function(e,t,n){"use strict";n.r(t);var r=n(60),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports},912:function(e,t,n){var content=n(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("1377ef10",content,!0,{sourceMap:!1})},913:function(e,t,n){var r=n(20)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},921:function(e,t,n){"use strict";n(12),n(14),n(18),n(9),n(19);var r=n(2),o=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(912),n(920)),l=n(221),c=n(71),d=n(1);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return v}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},v),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})}}]);