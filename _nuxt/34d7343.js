(window.webpackJsonp=window.webpackJsonp||[]).push([[182,185],{1080:function(t,e,n){var content=n(1081);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("e67f577c",content,!0,{sourceMap:!1})},1081:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".theme--light.v-small-dialog__actions,.theme--light.v-small-dialog__menu-content{background:#fff}.theme--dark.v-small-dialog__actions,.theme--dark.v-small-dialog__menu-content{background:#1e1e1e}.v-small-dialog{display:block}.v-small-dialog__activator{cursor:pointer}.v-small-dialog__activator__content{display:inline-block}.v-small-dialog__content{padding:0 16px}.v-small-dialog__actions{padding:8px;text-align:right;white-space:pre}",""]),o.locals={},t.exports=o},1203:function(t,e,n){"use strict";n(57),n(1080);var o=n(229),l=n(26),c=n(1),r=n(154),d=n(271),h=n(8);e.a=Object(h.a)(o.a,l.a).extend({name:"v-edit-dialog",props:{cancelText:{default:"Cancel"},large:Boolean,eager:Boolean,persistent:Boolean,saveText:{default:"Save"},transition:{type:String,default:"slide-x-reverse-transition"}},data:function(){return{isActive:!1}},watch:{isActive:function(t){t?(this.$emit("open"),setTimeout(this.focus,50)):this.$emit("close")}},methods:{cancel:function(){this.isActive=!1,this.$emit("cancel")},focus:function(){var input=this.$refs.content.querySelector("input");input&&input.focus()},genButton:function(t,text){return this.$createElement(r.a,{props:{text:!0,color:"primary",light:!0},on:{click:t}},text)},genActions:function(){var t=this;return this.$createElement("div",{class:"v-small-dialog__actions"},[this.genButton(this.cancel,this.cancelText),this.genButton((function(){t.save(t.returnValue),t.$emit("save")}),this.saveText)])},genContent:function(){var t=this;return this.$createElement("div",{staticClass:"v-small-dialog__content",on:{keydown:function(e){e.keyCode===c.z.esc&&t.cancel(),e.keyCode===c.z.enter&&(t.save(t.returnValue),t.$emit("save"))}},ref:"content"},[this.$slots.input])}},render:function(t){var e=this;return t(d.a,{staticClass:"v-small-dialog",class:this.themeClasses,props:{contentClass:"v-small-dialog__menu-content",transition:this.transition,origin:"top right",right:!0,value:this.isActive,closeOnClick:!this.persistent,closeOnContentClick:!1,eager:this.eager,light:this.light,dark:this.dark},on:{input:function(t){return e.isActive=t}},scopedSlots:{activator:function(n){var o=n.on;return t("div",{staticClass:"v-small-dialog__activator",on:o},[t("span",{staticClass:"v-small-dialog__activator__content"},e.$slots.default)])}}},[this.genContent(),this.large?this.genActions():null])}})},1725:function(t,e,n){"use strict";n.r(e);var o=n(920),l=n(117),c=n(138),r=n(538),d=n(1584),h=n(1585),m=n(1203),f=n(116),v=n(887),_=n(537),x=n(899),y=n(359),I=n(221),k=n(99),S=n(885),D=(n(33),n(2));n(542),n(6),n(80),n(37),n(12),n(14),n(11),n(20),n(9),n(21);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(D.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={data:function(){var t;return t={datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",Model:"Log",endpoint:"attendance_logs",from_date:null,from_menu:!1,to_date:null,to_menu:!1,payload:{},loading:!0,date:null,menu:!1},Object(D.a)(t,"loading",!1),Object(D.a)(t,"time_menu",!1),Object(D.a)(t,"log_payload",{user_id:41,device_id:"OX-8862021010100",date:null,time:null}),Object(D.a)(t,"headers",[{text:"UserID",align:"center",sortable:!1,value:"UserID"},{text:"DeviceID",align:"center",sortable:!1,value:"DeviceID"},{text:"Device Name",align:"center",sortable:!1,value:"device.name"},{text:"LogTime",align:"center",sortable:!1,value:"LogTime"}]),Object(D.a)(t,"ids",[]),Object(D.a)(t,"data",[]),Object(D.a)(t,"devices",[]),Object(D.a)(t,"total",0),Object(D.a)(t,"options",{}),Object(D.a)(t,"payloadOptions",{}),Object(D.a)(t,"errors",[]),Object(D.a)(t,"response",""),Object(D.a)(t,"snackbar",!1),Object(D.a)(t,"headers_table",[{text:"E.ID",align:"left",sortable:!0,key:"UserID",value:"UserID"},{text:"Log Time",align:"left",sortable:!0,key:"time",value:"time"},Object(D.a)({text:"Device Name",align:"left",sortable:!0,value:"devicename"},"value","device.device_name"),{text:"Device ID",align:"left",sortable:!0,key:"deviceid",value:"device.device_id"}]),t},created:function(){this.firstLoad()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{firstLoad:function(){this.loading=!0,this.payload.from_date=this.getDate(),this.payload.to_date=this.getDate(),this.payload.from_date_txt=this.getDate(),this.payload.to_date_txt=this.getDate(),this.getDeviceList()},datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},getDeviceList:function(){var t=this,e={params:{company_id:this.$auth.user.company_id}};this.$axios.get("/device_list",e).then((function(e){var data=e.data;t.devices=data}))},getDate:function(){var t=new Date,e=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),o=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(n,"-").concat(o)},can:function(t){return this.$pagePermission.can(t,this)},getRecords:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""!=e&&e.length<=2)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 3 Characters to filter ",this.loading=!1,!1;this.getDataFromApi(this.endpoint,t,e)},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.payloadOptions={params:C({per_page:this.options.itemsPerPage,company_id:this.$auth.user.company_id},this.payload)},""!=n&&(this.payloadOptions.params[n]=o),this.loading=!0,this.$axios.get("".concat(e,"?page=").concat(this.options.page),this.payloadOptions).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.data=data.data,t.total=data.total,t.loading=!1}))},searchIt:function(){return this.payload.from_date_txt=this.payload.from_date,this.payload.to_date_txt=this.payload.to_date,this.getDataFromApi(),this.from_menu=!1,this.to_menu=!1,!1}}},w=j,$=n(60),component=Object($.a)(w,(function(){var t=this,e=t._self._c;return t.can("logs_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(x.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(_.a,{staticClass:"pt-2 mt-5"},[e(r.a,{attrs:{cols:"12",sm:"8",md:"2"}},[e(v.a,{ref:"from_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e("div",{staticClass:"mb-1"},[t._v("From Date")]),t._v(" "),e(I.a,t._g(t._b({attrs:{"hide-details":!t.payload.from_date,outlined:"",dense:"",readonly:"",placeholder:"Date"},model:{value:t.payload.from_date_txt,callback:function(e){t.$set(t.payload,"from_date_txt",e)},expression:"payload.from_date_txt"}},"v-text-field",l,!1),o))]}}],null,!1,1187126813),model:{value:t.from_menu,callback:function(e){t.from_menu=e},expression:"from_menu"}},[t._v(" "),e(h.a,{attrs:{"no-title":"",scrollable:""},on:{change:t.searchIt},model:{value:t.payload.from_date,callback:function(e){t.$set(t.payload,"from_date",e)},expression:"payload.from_date"}},[e(y.a),t._v(" "),e(l.a,{staticClass:"blue-grey",attrs:{small:"",dark:""},on:{click:function(e){t.from_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(l.a,{staticClass:"blue-grey darken-3",attrs:{small:"",dark:""},on:{click:t.searchIt}},[t._v("\n            OK\n          ")])],1)],1)],1),t._v(" "),e(r.a,{attrs:{cols:"12",sm:"8",md:"2"}},[e("div",{staticClass:"mb-1"},[t._v("To Date")]),t._v(" "),e(v.a,{ref:"to_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(I.a,t._g(t._b({attrs:{"hide-details":!t.payload.to_date,outlined:"",dense:"",readonly:"",placeholder:"Date"},model:{value:t.payload.to_date_txt,callback:function(e){t.$set(t.payload,"to_date_txt",e)},expression:"payload.to_date_txt"}},"v-text-field",l,!1),o))]}}],null,!1,3679276102),model:{value:t.to_menu,callback:function(e){t.to_menu=e},expression:"to_menu"}},[t._v(" "),e(h.a,{attrs:{"no-title":"",scrollable:""},on:{change:t.searchIt},model:{value:t.payload.to_date,callback:function(e){t.$set(t.payload,"to_date",e)},expression:"payload.to_date"}},[e(y.a),t._v(" "),e(l.a,{staticClass:"blue-grey",attrs:{small:"",dark:""},on:{click:function(e){t.to_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(l.a,{staticClass:"blue-grey darken-3",attrs:{small:"",dark:""},on:{click:t.searchIt}},[t._v("\n            OK\n          ")])],1)],1)],1),t._v(" "),e(r.a,{attrs:{cols:"12",sm:"6",md:"2"}},[e("div",{staticClass:"mb-1"},[t._v("User ID")]),t._v(" "),e(I.a,{attrs:{outlined:"",dense:"",placeholder:"Search..."},on:{input:t.searchIt},model:{value:t.payload.UserID,callback:function(e){t.$set(t.payload,"UserID",e)},expression:"payload.UserID"}})],1),t._v(" "),e(r.a,{attrs:{cols:"12",sm:"6",md:"2"}},[e("div",{staticClass:"mb-1"},[t._v("Device ID")]),t._v(" "),e(o.a,{attrs:{outlined:"",dense:"",placeholder:"Search...",items:t.devices,"item-text":"device_id","item-value":"device_id"},on:{change:t.searchIt},model:{value:t.payload.DeviceID,callback:function(e){t.$set(t.payload,"DeviceID",e)},expression:"payload.DeviceID"}})],1)],1),t._v(" "),e(_.a,[e(r.a,[e(c.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[e(k.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(S.b,[e("span",[t._v(" Attendances Logs")])]),t._v(" "),e("a",{staticStyle:{"padding-left":"10px"},attrs:{title:"Reload Page/Reset Form"},on:{click:t.firstLoad}},[e(f.a,{staticClass:"mx-1"},[t._v("mdi mdi-reload")])],1)],1),t._v(" "),e(x.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e(l.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(d.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.UserID",fn:function(n){var o=n.item;return[e(m.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(I.a,{attrs:{label:"Search System User Id"},on:{input:function(e){return t.getRecords("search_system_user_id",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.UserID)+"\n              ")])]}},{key:"item.time",fn:function(n){var o=n.item;return[e(m.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(I.a,{attrs:{label:"Search Date and Time"},on:{input:function(e){return t.getRecords("search_time",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.LogTime)+"\n              ")])]}},{key:"item.device.device_name",fn:function(n){var o=n.item;return[e(m.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(I.a,{attrs:{label:"Search Device Name"},on:{input:function(e){return t.getRecords("search_device_name",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.device?o.device.name:"---")+"\n              ")])]}},{key:"item.device.device_id",fn:function(n){var o=n.item;return[e(m.a,{staticStyle:{"margin-left":"4%"},attrs:{large:"","save-text":"Reset","cancel-text":"Ok"},on:{cancel:function(e){return t.getRecords()},save:function(e){return t.getRecords()},open:t.datatable_open},scopedSlots:t._u([{key:"input",fn:function(){return[e(I.a,{attrs:{label:"Search Device ID"},on:{input:function(e){return t.getRecords("search_device_id",e)}},model:{value:t.datatable_search_textbox,callback:function(e){t.datatable_search_textbox=e},expression:"datatable_search_textbox"}})]},proxy:!0}],null,!0)},[t._v("\n              "+t._s(o.device?o.device.device_id:"---")+"\n              ")])]}}],null,!1,1546580085)})],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(907).default})},885:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var o=n(99),l=n(1),c=Object(l.k)("v-toolbar__title"),r=Object(l.k)("v-toolbar__items");o.a},907:function(t,e,n){"use strict";n.r(e);var o=n(60),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},911:function(t,e,n){var content=n(912);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("1377ef10",content,!0,{sourceMap:!1})},912:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),o.locals={},t.exports=o},920:function(t,e,n){"use strict";n(12),n(14),n(20),n(9),n(21);var o=n(2),l=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(911),n(919)),c=n(221),r=n(71),d=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},l.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=l.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:l.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=l.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=l.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var o=e[this.$refs.menu.listIndex];o?this.setMenuIndex(t.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,l.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=c.a.options.methods.genInput.call(this);return input.data=Object(r.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=l.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?l.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||l.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){l.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){l.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){l.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],l=this.getText(o);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",l),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",l),t.preventDefault()}}}})}}]);