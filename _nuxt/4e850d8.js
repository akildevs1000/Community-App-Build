(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{911:function(e,t,n){var content=n(912);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("1377ef10",content,!0,{sourceMap:!1})},912:function(e,t,n){var l=n(18)((function(i){return i[1]}));l.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),l.locals={},e.exports=l},920:function(e,t,n){"use strict";n(12),n(14),n(20),n(9),n(21);var l=n(2),r=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(911),n(919)),o=n(221),d=n(71),c=n(1);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x=f(f({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=r.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return x}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(c.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=r.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),f(f({},x),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var l=t[this.$refs.menu.listIndex];l?this.setMenuIndex(e.findIndex((function(i){return i===l}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===c.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===c.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==c.z.backspace&&e!==c.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var l=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[l]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(d.a)(input.data,{attrs:{"aria-activedescendant":Object(c.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(c.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[c.z.home,c.z.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){r.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){r.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var l=this.selectedItems[this.selectedIndex],r=this.getText(l);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",r),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}}})},925:function(e,t,n){var content=n(926);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("c54b7bb4",content,!0,{sourceMap:!1})},926:function(e,t,n){var l=n(18)((function(i){return i[1]}));l.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),l.locals={},e.exports=l},933:function(e,t,n){"use strict";n.r(t);var l=n(920),r=n(117),o=n(538),d=n(1585),c=n(887),v=n(537),f=n(899),x=n(359),h=n(221),m=n(962),_=n(1802),y=n(17),I=(n(41),n(103),n(6),n(9),n(69),{props:["endpoint","system_user_id","shift_type_id"],data:function(){return{Model:"Manual Log",date:null,menu:!1,loading:!1,time_menu:!1,reason:null,log_payload:{user_id:null,device_id:"",date:null,time:null,shift_type_id:null,branch_id:0,log_type:"auto"},headers:[{text:"UserID",align:"center",sortable:!1,value:"UserID"},{text:"DeviceID",align:"center",sortable:!1,value:"DeviceID"},{text:"LogTime",align:"center",sortable:!1,value:"LogTime"}],ids:[],devices:[],data:[],total:0,options:{},errors:[],employees:[],response:"",snackbar:!1}},mounted:function(){this.getDeviceList()},created:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.log_payload.user_id=e.system_user_id,t.next=4,e.$store.dispatch("fetchDropDowns",{key:"employeeList",endpoint:"employee-list",refresh:!0});case 4:e.employees=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching data:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},methods:{getDeviceList:function(){var e=this,t={params:{company_id:this.$auth.user.company_id}};this.$axios.get("/device_list_not_manual",t).then((function(t){var data=t.data;e.devices=data}))},getLastLog:function(e){var t=this;return Object(y.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.$axios.get("attendance_logs",{params:{company_id:t.$auth.user.company_id,UserID:e}}).then((function(e){var n,data=e.data;null!=data&&null!==(n=data.data)&&void 0!==n&&n.length&&["in","auto"].includes(data.data[0].log_type)?t.log_payload.log_type="out":t.log_payload.log_type="in"}));case 1:case"end":return n.stop()}}),n)})))()},handleChangeEvent:function(e){var t=this;return Object(y.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(l=t.employees.find((function(t){return e==t.system_user_id})))&&(t.log_payload.branch_id=l.branch_id||0);case 2:case"end":return n.stop()}}),n)})))()},submit:function(){var e=this;return Object(y.a)(regeneratorRuntime.mark((function t(){var n,l,r,time,o,d,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getLastLog(e.log_payload.user_id);case 2:if(n=e.log_payload,l=n.user_id,r=n.date,time=n.time,o=n.branch_id,d=n.device_id,c={branch_id:o,UserID:l,LogTime:r+" "+time,DeviceID:d,company_id:e.$auth.user.company_id,log_type:e.log_payload.log_type},e.loading=!0,l&&r&&time){t.next=8;break}return alert("Please enter required fields"),t.abrupt("return");case 8:e.$axios.post("/generate_log",c).then((function(t){var data=t.data;e.loading=!1,data.status?(e.render_report(r,e.shift_type_id),e.$emit("close-popup"),e.snackbar=!0,e.response=data.message):e.errors=data.errors})).catch((function(t){var n=t.message;e.snackbar=!0,e.response=n}));case 9:case"end":return t.stop()}}),t)})))()},render_report:function(e,t){var n=this,l={params:{dates:[e,e],UserIds:[this.log_payload.user_id],company_ids:[this.$auth.user.company_id],user_id:this.$auth.user.id,updated_by:this.$auth.user.id,reason:this.reason,employee_ids:[this.log_payload.user_id],shift_type_id:t}};this.$axios.get("render_logs",l).then((function(e){var data=e.data;n.loading=!1;var t="";data.forEach((function(element){t=t+" \n \n "+element})),n.response=t,n.loading=!1,n.$emit("update-data-table")})).catch((function(e){return console.log(e)}))}}}),w=n(60),component=Object(w.a)(I,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(f.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(v.a,[t(o.a,{attrs:{md:"3"}},[t(l.a,{staticClass:"mt-5",attrs:{label:"Employee ID",placeholder:"Employee Device Id",items:e.employees,"item-text":"name_with_user_id","item-value":"system_user_id",dense:"",outlined:""},on:{change:function(t){return e.handleChangeEvent(e.log_payload.user_id)}},model:{value:e.log_payload.user_id,callback:function(t){e.$set(e.log_payload,"user_id",t)},expression:"log_payload.user_id"}}),e._v(" "),e.errors&&e.errors.user_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.user_id[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{md:"3"}},[t(c.a,{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,r=n.attrs;return[t(h.a,e._g(e._b({staticClass:"mt-5",attrs:{label:"Date",dense:"",outlined:"",placeholder:"Date",readonly:""},model:{value:e.log_payload.date,callback:function(t){e.$set(e.log_payload,"date",t)},expression:"log_payload.date"}},"v-text-field",r,!1),l))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(d.a,{attrs:{"no-title":"",scrollable:""},model:{value:e.log_payload.date,callback:function(t){e.$set(e.log_payload,"date",t)},expression:"log_payload.date"}},[t(x.a),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v(" Cancel ")]),e._v(" "),t(r.a,{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.log_payload.date)}}},[e._v("\n            OK\n          ")])],1)],1)],1),e._v(" "),t(o.a,{attrs:{md:"3"}},[t(c.a,{ref:"time_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.log_payload.time,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(t){return e.$set(e.log_payload,"time",t)},"update:return-value":function(t){return e.$set(e.log_payload,"time",t)}},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,r=n.attrs;return[t(h.a,e._g(e._b({staticClass:"mt-5",attrs:{label:"Time",dense:"",outlined:"",placeholder:"Time",readonly:""},model:{value:e.log_payload.time,callback:function(t){e.$set(e.log_payload,"time",t)},expression:"log_payload.time"}},"v-text-field",r,!1),l))]}}]),model:{value:e.time_menu,callback:function(t){e.time_menu=t},expression:"time_menu"}},[e._v(" "),e.time_menu?t(_.a,{attrs:{"full-width":"",format:"24hr"},model:{value:e.log_payload.time,callback:function(t){e.$set(e.log_payload,"time",t)},expression:"log_payload.time"}},[t(x.a),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){e.time_menu=!1}}},[e._v("\n            Cancel\n          ")]),e._v(" "),t(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(t){return e.$refs.time_menu_ref.save(e.log_payload.time)}}},[e._v("\n            OK\n          ")])],1):e._e()],1),e._v(" "),e.errors&&e.errors.time?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.time[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{md:"3"}},[t(l.a,{staticClass:"mt-5",attrs:{label:"Device Name",placeholder:"Device Name",items:e.devices,"item-text":"name","item-value":"device_id",dense:"",outlined:""},on:{change:function(t){return e.handleChangeEvent(e.log_payload.user_id)}},model:{value:e.log_payload.device_id,callback:function(t){e.$set(e.log_payload,"device_id",t)},expression:"log_payload.device_id"}}),e._v(" "),e.errors&&e.errors.user_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.user_id[0]))]):e._e()],1),e._v(" "),t(o.a,{attrs:{cols:"12"}},[t(m.a,{attrs:{dense:"",outlined:"",placeholder:"Reason","auto-grow":"",required:""},model:{value:e.reason,callback:function(t){e.reason=t},expression:"reason"}}),e._v(" "),e.errors&&e.errors.reason?t("span",{staticClass:"error--text"},[e._v("\n        "+e._s(e.errors.reason[0])+"\n      ")]):e._e()],1),e._v(" "),t(o.a,{staticClass:"text-end",attrs:{col:"2"}},[t(r.a,{attrs:{small:"",color:"primary"},on:{click:e.submit}},[e._v(" Submit ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},962:function(e,t,n){"use strict";n(12),n(14),n(11),n(6),n(20),n(9),n(21);var l=n(2),r=(n(28),n(57),n(925),n(221)),o=n(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c=Object(o.a)(r.a);t.a=c.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){r.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})}}]);