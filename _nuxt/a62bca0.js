(window.webpackJsonp=window.webpackJsonp||[]).push([[74,75,76,185,193],{1212:function(t,e,n){"use strict";n.r(e);var r=n(921),o=n(117),l=n(138),c=n(79),d=n(539),h=n(903),m=n(361),f=n(889),v=n(116),y=n(538),_=n(360),x=n(221),I=n(99),S=(n(33),{props:["item"],data:function(){return{payload:{},endpoint:"purpose",DialogBox:!1,loading:!1,errors:[]}},created:function(){this.payload=this.item},methods:{submit:function(){var t=this;this.payload.company_id=this.$auth.user.company_id,this.$axios.put(this.endpoint+"/"+this.payload.id,this.payload).then((function(e){e.data;t.errors=[],t.$emit("success","Purpose updated successfully"),t.DialogBox=!1})).catch((function(e){var n=e.response;if(!n)return!1;var r=n.status,data=n.data,o=n.statusText;r&&422==r?t.errors=data.errors:t.response=o}))}}}),D=n(60),component=Object(D.a)(S,(function(){var t=this,e=t._self._c;return e(m.a,{attrs:{persistent:"",width:"500"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("span",t._g(t._b({staticStyle:{cursor:"pointer"}},"span",o,!1),r),[e(v.a,{attrs:{color:"black",small:""}},[t._v("mdi-pencil")]),t._v("\n      Edit\n    ")],1)]}}]),model:{value:t.DialogBox,callback:function(e){t.DialogBox=e},expression:"DialogBox"}},[t._v(" "),e(l.a,[e(I.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[t._v("\n      Edit Purpose\n\n      "),e(_.a),t._v(" "),e("span",[e(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(e){t.DialogBox=!1}}},[t._v("\n          mdi mdi-close-circle-outline")])],1)],1),t._v(" "),e(h.a,[e(y.a,[e(d.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{label:"Type",outlined:"",items:["contractor","visitor","delivery"],dense:"","hide-details":!t.errors.type,"error-messages":t.errors&&t.errors.type?t.errors.type[0]:""},model:{value:t.payload.type,callback:function(e){t.$set(t.payload,"type",e)},expression:"payload.type"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(x.a,{staticClass:"text-center",attrs:{label:"Purpose",dense:"",outlined:"","hide-details":!t.errors.name,error:t.errors.name,"error-messages":t.errors&&t.errors.name?t.errors.name[0]:""},model:{value:t.payload.name,callback:function(e){t.$set(t.payload,"name",e)},expression:"payload.name"}})],1)],1)],1),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(_.a),t._v(" "),e("div",{staticClass:"text-right"},[e(o.a,{attrs:{small:"",color:"grey white--text"},on:{click:function(e){t.DialogBox=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),e(o.a,{attrs:{small:"",loading:t.loading,color:"primary"},on:{click:t.submit}},[t._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},1366:function(t,e,n){"use strict";n.r(e);var r=n(117),o=n(138),l=n(1579),c=n(116),d=n(336),h=n(211),m=n(10),f=n(888),v=n(900),y=n(360),_=n(99),x=n(886),I=(n(12),n(14),n(11),n(6),n(18),n(9),n(19),n(17)),S=n(2);n(37),n(69);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(S.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={props:["id"],data:function(){var t;return t={loading:!0,totalRowsCount:0,color:"background",response:"",snackbar:!1,options:{},Model:"Purpose",endpoint:"purpose"},Object(S.a)(t,"response",""),Object(S.a)(t,"data",[]),Object(S.a)(t,"headers",[{text:"Purpose",align:"left",sortable:!0,key:"name",value:"name",filterable:!0,filterSpecial:!1},{text:"Type",align:"left",sortable:!0,key:"type",value:"type",filterable:!0,filterSpecial:!1},{text:"Details",align:"left",sortable:!1,key:"options",value:"options"}]),t},created:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.getDataFromApi();case 2:case"end":return e.stop()}}),e)})))()},mounted:function(){},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{handleSuccessResponse:function(t){this.snackbar=!0,this.response=t,this.getDataFromApi()},can:function(t){return this.$pagePermission.can(t,this)},getDataFromApi:function(){var t=this,e=this.options,n=e.sortBy,r=e.sortDesc,o=e.page,l=e.itemsPerPage,c={params:O({page:o,sortBy:n?n[0]:"",sortDesc:r?r[0]:"",per_page:l,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get(this.endpoint,c).then((function(e){var data=e.data;t.data=data.data,t.totalRowsCount=data.total,t.loading=!1}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("".concat(this.endpoint,"/").concat(t.id)).then((function(t){t.data;e.getDataFromApi(),e.snackbar=!0,e.response="Record deleted successfully"})).catch((function(t){return console.log(t)}))}}},k=n(60),component=Object(k.a)(C,(function(){var t=this,e=t._self._c;return t.can("employee_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(v.a,{attrs:{small:"",top:"top",color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),t.loading?e("Preloader"):e("div",[t.can("employee_view")?e("div",[e(o.a,{attrs:{elevation:"0"}},[e(_.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[e(x.b,[e("span",[t._v(t._s(t.Model)+" ")])]),t._v(" "),e("span",[e(r.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[e(c.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:t.getDataFromApi}},[t._v("mdi mdi-reload")])],1)],1),t._v(" "),e(y.a),t._v(" "),e("CommunityPurposeCreate",{attrs:{buttonVisible:!0},on:{success:t.handleSuccessResponse}})],1),t._v(" "),e(l.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.options",fn:function(n){var o=n.item;return[e(f.a,{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[e(c.a,[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[t._v(" "),e(d.a,{attrs:{width:"120",dense:""}},[e(h.a,{on:{click:function(e){return t.viewItem(o)}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[e(c.a,{attrs:{color:"secondary",small:""}},[t._v(" mdi-eye ")]),t._v("\n                    View\n                  ")],1)],1),t._v(" "),e(h.a,[e(m.c,{staticStyle:{cursor:"pointer"}},[e("CommunityPurposeEdit",{attrs:{item:o},on:{success:t.handleSuccessResponse}})],1)],1),t._v(" "),e(h.a,{on:{click:function(e){return t.deleteItem(o)}}},[e(m.c,{staticStyle:{cursor:"pointer"}},[e(c.a,{attrs:{color:"error",small:""}},[t._v(" mdi-delete ")]),t._v("\n                    Delete\n                  ")],1)],1)],1)],1)]}}],null,!1,1410468698)})],1)],1):t._e()])],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CommunityPurposeCreate:n(980).default,CommunityPurposeEdit:n(1212).default,Preloader:n(924).default,NoAccess:n(908).default})},886:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(99),o=n(1),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},908:function(t,e,n){"use strict";n.r(e);var r=n(60),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},912:function(t,e,n){var content=n(913);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("1377ef10",content,!0,{sourceMap:!1})},913:function(t,e,n){var r=n(20)((function(i){return i[1]}));r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},t.exports=r},921:function(t,e,n){"use strict";n(12),n(14),n(18),n(9),n(19);var r=n(2),o=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(912),n(920)),l=n(221),c=n(71),d=n(1);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.s)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.z.backspace&&t!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.z.home,d.z.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(e=t.clipboardData)||void 0===e||e.setData("text/plain",o),null===(n=t.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},924:function(t,e,n){"use strict";n.r(e);var r=n(219),o=n(60),component=Object(o.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);e.default=component.exports},980:function(t,e,n){"use strict";n.r(e);var r=n(921),o=n(117),l=n(138),c=n(79),d=n(539),h=n(903),m=n(361),f=n(889),v=n(116),y=n(538),_=n(360),x=n(221),I=n(99),S=(n(33),{props:["buttonVisible","type"],data:function(){return{endpoint:"purpose",payload:{},errors:[],loading:!1,response:null,DialogBox:!1}},mounted:function(){this.type&&(this.payload.type=this.type)},methods:{submit:function(){var t=this;this.payload.company_id=this.$auth.user.company_id,this.$axios.post(this.endpoint,this.payload).then((function(e){var data=e.data,n="contractor"==t.type?"Activity":"Purpose";t.errors=[],t.$emit("success",t.type?data.record.id:n+" inserted successfully"),t.DialogBox=!1})).catch((function(e){var n=e.response;if(!n)return!1;var r=n.status,data=n.data,o=n.statusText;r&&422==r?t.errors=data.errors:t.response=o}))}}}),D=n(60),component=Object(D.a)(S,(function(){var t=this,e=t._self._c;return e(m.a,{attrs:{persistent:"",width:"500"},scopedSlots:t._u([t.buttonVisible?{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e("span",t._g(t._b({staticStyle:{cursor:"pointer"}},"span",l,!1),r),[e(o.a,{staticClass:"primary",attrs:{dense:"",small:"",text:"",title:"Create Tanent"}},[t._v("\n        Create "+t._s("contractor"==t.type?"Activity":"Purpose")+"\n        "),e(v.a,{attrs:{right:"",dark:""}},[t._v("mdi-plus-circle-outline")])],1)],1)]}}:null],null,!0),model:{value:t.DialogBox,callback:function(e){t.DialogBox=e},expression:"DialogBox"}},[t._v(" "),e(l.a,[e(I.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[t._v("\n      Create "+t._s("contractor"==t.type?"Activity":"Purpose")+"\n      "),e(_.a),t._v(" "),e("span",[e(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(e){t.DialogBox=!1}}},[t._v("\n          mdi-close-circle-outline")])],1)],1),t._v(" "),e(h.a,[e(y.a,[t.type?t._e():e(d.a,{attrs:{cols:"12"}},[e(r.a,{attrs:{label:"Type",outlined:"",items:["contractor","visitor","delivery"],dense:"","hide-details":!t.errors.type,"error-messages":t.errors&&t.errors.type?t.errors.type[0]:""},model:{value:t.payload.type,callback:function(e){t.$set(t.payload,"type",e)},expression:"payload.type"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(x.a,{staticClass:"text-center",attrs:{label:"".concat("contractor"==t.type?"Activity":"Purpose"),dense:"",outlined:"","hide-details":!t.errors.name,error:t.errors.name,"error-messages":t.errors&&t.errors.name?t.errors.name[0]:""},model:{value:t.payload.name,callback:function(e){t.$set(t.payload,"name",e)},expression:"payload.name"}})],1)],1)],1),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(_.a),t._v(" "),e("div",{staticClass:"text-right"},[e(o.a,{attrs:{small:"",color:"grey white--text"},on:{click:function(e){t.DialogBox=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),e(o.a,{attrs:{small:"",loading:t.loading,color:"primary"},on:{click:t.submit}},[t._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);