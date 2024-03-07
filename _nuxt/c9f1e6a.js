(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1019:function(t,e,n){var content=n(1020);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("265ccd52",content,!0,{sourceMap:!1})},1020:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".theme--light.v-picker__title{background:#e0e0e0}.theme--dark.v-picker__title{background:#616161}.theme--light.v-picker__body{background:#fff}.theme--dark.v-picker__body{background:#424242}.v-picker{border-radius:4px;contain:layout style;display:inline-flex;flex-direction:column;font-size:1rem;position:relative;vertical-align:top}.v-picker--full-width{display:flex;width:100%}.v-picker--full-width>.v-picker__body{margin:initial}.v-picker__title{border-top-left-radius:4px;border-top-right-radius:4px;color:#fff;padding:16px}.v-picker__title__btn{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-picker__title__btn:not(.v-picker__title__btn--active){cursor:pointer;opacity:.6}.v-picker__title__btn:not(.v-picker__title__btn--active):hover:not(:focus){opacity:1}.v-picker__title__btn--readonly{pointer-events:none}.v-picker__title__btn--active{opacity:1}.v-picker__body{align-items:center;display:flex;flex:1 0 auto;flex-direction:column;height:auto;margin:0 auto;overflow:hidden;position:relative;z-index:0}.v-picker__body>div{width:100%}.v-picker__body>div.fade-transition-leave-active{position:absolute}.v-picker--landscape .v-picker__title{border-bottom-right-radius:0;border-top-right-radius:0;height:100%;position:absolute;top:0;width:170px;z-index:1}.v-application--is-ltr .v-picker--landscape .v-picker__title{left:0}.v-application--is-rtl .v-picker--landscape .v-picker__title{right:0}.v-application--is-ltr .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-ltr .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:170px;margin-right:0}.v-application--is-rtl .v-picker--landscape .v-picker__actions:not(.v-picker__actions--no-title),.v-application--is-rtl .v-picker--landscape .v-picker__body:not(.v-picker__body--no-title){margin-left:0;margin-right:170px}.v-picker--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}",""]),r.locals={},t.exports=r},1038:function(t,e,n){"use strict";n(228),n(59);e.a=function(t){var e,n,r;return e=t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r="0",n>>=0,e=String(e),r=String(r),e.length>n?String(e):((n-=e.length)>r.length&&(r+=r.repeat(n/r.length)),r.slice(0,n)+String(e))}},1043:function(t,e,n){"use strict";n(92);var r=n(29),o=n(8),l=n(1);e.a=Object(o.a)(r.a).extend({methods:{genPickerButton:function(t,e,content){var n=this,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",c=this[t]===e;return this.$createElement("div",{staticClass:"v-picker__title__btn ".concat(o).trim(),class:{"v-picker__title__btn--active":c,"v-picker__title__btn--readonly":r},on:c||r?void 0:{click:function(r){r.stopPropagation(),n.$emit("update:".concat(Object(l.y)(t)),e)}}},Array.isArray(content)?content:[content])}}})},1057:function(t,e,n){"use strict";n(28),n(224),n(225),n(12),n(14),n(11),n(6),n(20),n(9),n(21);var r=n(2),o=(n(1019),n(551),n(29)),l=n(227),c=n(26),_=n(1),d=n(8);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(d.a)(o.a,l.a,c.a).extend({name:"v-picker",props:{flat:Boolean,fullWidth:Boolean,landscape:Boolean,noTitle:Boolean,transition:{type:String,default:"fade-transition"},width:{type:[Number,String],default:290}},computed:{computedTitleColor:function(){var t=!this.isDark&&(this.color||"primary");return this.color||t}},methods:{genTitle:function(){return this.$createElement("div",this.setBackgroundColor(this.computedTitleColor,{staticClass:"v-picker__title",class:{"v-picker__title--landscape":this.landscape}}),this.$slots.title)},genBodyTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},this.$slots.default)},genBody:function(){return this.$createElement("div",{staticClass:"v-picker__body",class:m({"v-picker__body--no-title":this.noTitle},this.themeClasses),style:this.fullWidth?void 0:{width:Object(_.i)(this.width)}},[this.genBodyTransition()])},genActions:function(){return this.$createElement("div",{staticClass:"v-picker__actions v-card__actions",class:{"v-picker__actions--no-title":this.noTitle}},this.$slots.actions)}},render:function(t){return t("div",{staticClass:"v-picker v-card",class:m(m({"v-picker--flat":this.flat,"v-picker--landscape":this.landscape,"v-picker--full-width":this.fullWidth},this.themeClasses),this.elevationClasses)},[this.$slots.title?this.genTitle():null,this.genBody(),this.$slots.actions?this.genActions():null])}});e.a=Object(d.a)(o.a,l.a,c.a).extend({name:"picker",props:{flat:Boolean,fullWidth:Boolean,headerColor:String,landscape:Boolean,noTitle:Boolean,width:{type:[Number,String],default:290}},methods:{genPickerTitle:function(){return null},genPickerBody:function(){return null},genPickerActionsSlot:function(){return this.$scopedSlots.default?this.$scopedSlots.default({save:this.save,cancel:this.cancel}):this.$slots.default},genPicker:function(t){var e=[];if(!this.noTitle){var title=this.genPickerTitle();title&&e.push(title)}var body=this.genPickerBody();return body&&e.push(body),e.push(this.$createElement("template",{slot:"actions"},[this.genPickerActionsSlot()])),this.$createElement(f,{staticClass:t,props:{color:this.headerColor||this.color,dark:this.dark,elevation:this.elevation,flat:this.flat,fullWidth:this.fullWidth,landscape:this.landscape,light:this.light,width:this.width,noTitle:this.noTitle}},e)}}})},1326:function(t,e,n){var content=n(1528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("32a1a352",content,!0,{sourceMap:!1})},1527:function(t,e,n){"use strict";n(1326)},1528:function(t,e,n){var r=n(18)((function(i){return i[1]}));r.push([t.i,".wrapper[data-v-4164a228]{align-items:center;background:#fff;border:1px solid #918c8c;border-radius:5px;display:flex;height:47px;justify-content:center;width:100%}.wrapper span[data-v-4164a228]{cursor:pointer;font-size:25px;font-weight:400;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.wrapper span.num[data-v-4164a228]{border-left:2px solid rgba(0,0,0,.2);border-right:2px solid rgba(0,0,0,.2);font-size:20px;pointer-events:none}",""]),r.locals={},t.exports=r},1726:function(t,e,n){"use strict";n.r(e);var r=n(117),o=n(538),l=n(887),c=n(537),_=n(899),d=n(359),v=n(221),m=n(1802),f=(n(33),n(17)),h=(n(69),n(57),{props:["shift_type_id","shift_id"],data:function(){return{manual_shift:{},date:null,menu:!1,time_tables:[],shift_types:[],shift_last_id:"",shiftList:!0,isChange:!1,isAuto:!1,week_days:[{label:"Sun",value:"Sun"},{label:"Mon",value:"Mon"},{label:"Tue",value:"Tue"},{label:"Wed",value:"Wed"},{label:"Thu",value:"Thu"},{label:"Fri",value:"Fri"},{label:"Sat",value:"Sat"}],loading:!1,time_in_menu:!1,time_out_menu:!1,gap_in_menu:!1,gap_out_menu:!1,working_hours_menu:!1,overtime_interval_menu:!1,grace_time_in_menu:!1,grace_time_out_menu:!1,beginning_in_menu:!1,ending_in_menu:!1,beginning_out_menu:!1,ending_out_menu:!1,payload:{name:"Multi Shift",on_duty_time:"17:00",off_duty_time:"14:00",gap_in:15,gap_out:15,working_hours:"09:00",overtime_interval:"00:00"},errors:[],shifts:[],data:[],response:"",snackbar:!1}},created:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("/shift/".concat(t.shift_id)).then((function(e){var data=e.data;t.loading=!1,t.payload={name:data.name,on_duty_time:data.on_duty_time,off_duty_time:data.off_duty_time,gap_in:data.gap_in,gap_out:data.gap_out,working_hours:data.working_hours,overtime_interval:data.overtime_interval,company_id:t.$auth.user.company_id,shift_type_id:data.shift_type_id}})).catch((function(e){var n=e.message;t.snackbar=!0,t.response=n}));case 1:case"end":return e.stop()}}),e)})))()},watch:{},computed:{},methods:{can:function(t){return this.$pagePermission.can(t,this)},store_shift:function(){var t=this;this.loading=!0,this.$axios.put("/shift/".concat(this.shift_id),this.payload).then((function(e){var data=e.data;t.loading=!1,data.status?(t.snackbar=!0,t.response="Shift update successfully",setTimeout((function(){t.$router.push("/shift")}),1e3)):t.errors=data.errors})).catch((function(e){var n=e.message;t.snackbar=!0,t.response=n}))}}}),y=(n(1527),n(60)),component=Object(y.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center ma-2"},[e(_.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(c.a,[e(o.a,{attrs:{cols:"12",md:"12"}},[t._v("\n      Shift Name "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v(" "),e(v.a,{staticClass:"mt-1",attrs:{"hide-details":!t.errors.name,"error-messages":t.errors.name&&t.errors.name[0],outlined:"",dense:""},model:{value:t.payload.name,callback:function(e){t.$set(t.payload,"name",e)},expression:"payload.name"}})],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"3"}},[t._v("\n      On Duty Time "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v(" "),e(l.a,{ref:"time_in_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.payload.on_duty_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-height":"320px"},on:{"update:returnValue":function(e){return t.$set(t.payload,"on_duty_time",e)},"update:return-value":function(e){return t.$set(t.payload,"on_duty_time",e)}},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(v.a,t._g(t._b({staticClass:"mt-2",class:1!==t.payload.shift_type_id?"":"red lighten-1",attrs:{"append-icon":"mdi-clock-outline","hide-details":!t.errors.on_duty_time,readonly:"",dense:"",outlined:""},model:{value:t.payload.on_duty_time,callback:function(e){t.$set(t.payload,"on_duty_time",e)},expression:"payload.on_duty_time"}},"v-text-field",o,!1),r))]}}]),model:{value:t.time_in_menu,callback:function(e){t.time_in_menu=e},expression:"time_in_menu"}},[t._v(" "),t.time_in_menu?e(m.a,{attrs:{"full-width":"",format:"24hr"},model:{value:t.payload.on_duty_time,callback:function(e){t.$set(t.payload,"on_duty_time",e)},expression:"payload.on_duty_time"}},[e(d.a),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){t.time_in_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){return t.$refs.time_in_menu_ref.save(t.payload.on_duty_time)}}},[t._v("\n            OK\n          ")])],1):t._e()],1),t._v(" "),t.errors&&t.errors.on_duty_time?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.on_duty_time[0]))]):t._e()],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"3"}},[t._v("\n      Off Duty Time "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v(" "),e(l.a,{ref:"time_out_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.payload.off_duty_time,transition:"scale-transition","offset-y":"","max-width":"290px","min-height":"320px"},on:{"update:returnValue":function(e){return t.$set(t.payload,"off_duty_time",e)},"update:return-value":function(e){return t.$set(t.payload,"off_duty_time",e)}},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(v.a,t._g(t._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!t.errors.off_duty_time,dense:"",outlined:""},model:{value:t.payload.off_duty_time,callback:function(e){t.$set(t.payload,"off_duty_time",e)},expression:"payload.off_duty_time"}},"v-text-field",o,!1),r))]}}]),model:{value:t.time_out_menu,callback:function(e){t.time_out_menu=e},expression:"time_out_menu"}},[t._v(" "),t.time_out_menu?e(m.a,{attrs:{format:"24hr","full-width":""},model:{value:t.payload.off_duty_time,callback:function(e){t.$set(t.payload,"off_duty_time",e)},expression:"payload.off_duty_time"}},[e(d.a),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){t.time_out_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){return t.$refs.time_out_menu_ref.save(t.payload.off_duty_time)}}},[t._v("\n            OK\n          ")])],1):t._e()],1),t._v(" "),t.errors&&t.errors.off_duty_time?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.off_duty_time[0]))]):t._e()],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"3"}},[t._v("\n      Gap Time For Checkin "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v(" "),e("div",{staticClass:"wrapper"},[e("span",{staticClass:"minus",on:{click:function(e){t.payload.gap_in<1||t.payload.gap_in--}}},[t._v("-")]),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.payload.gap_in))]),t._v(" "),e("span",{staticClass:"plus",on:{click:function(e){t.payload.gap_in>=59||t.payload.gap_in++}}},[t._v("+")])])]),t._v(" "),e(o.a,{attrs:{cols:"12",md:"3"}},[t._v("\n      Gap Time For Checkout "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v(" "),e("div",{staticClass:"wrapper"},[e("span",{staticClass:"minus",on:{click:function(e){t.payload.gap_out<1||t.payload.gap_out--}}},[t._v("-")]),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.payload.gap_out))]),t._v(" "),e("span",{staticClass:"plus",on:{click:function(e){t.payload.gap_out>=59||t.payload.gap_out++}}},[t._v("+")])])]),t._v(" "),e(o.a,{attrs:{cols:"12",md:"3"}},[t._v("\n      Minimum Working Hours "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v(" "),e(l.a,{ref:"working_hours_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.payload.working_hours,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.payload,"working_hours",e)},"update:return-value":function(e){return t.$set(t.payload,"working_hours",e)}},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(v.a,t._g(t._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!t.errors.working_hours,dense:"",outlined:""},model:{value:t.payload.working_hours,callback:function(e){t.$set(t.payload,"working_hours",e)},expression:"payload.working_hours"}},"v-text-field",o,!1),r))]}}]),model:{value:t.working_hours_menu,callback:function(e){t.working_hours_menu=e},expression:"working_hours_menu"}},[t._v(" "),t.working_hours_menu?e(m.a,{attrs:{format:"24hr","full-width":""},model:{value:t.payload.working_hours,callback:function(e){t.$set(t.payload,"working_hours",e)},expression:"payload.working_hours"}},[e(d.a),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){t.working_hours_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){return t.$refs.working_hours_menu_ref.save(t.payload.working_hours)}}},[t._v("\n            OK\n          ")])],1):t._e()],1),t._v(" "),t.errors&&t.errors.working_hours?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.working_hours[0]))]):t._e()],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"3"}},[t._v("\n      Overtime start after duty hours "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v(" "),e(l.a,{ref:"overtime_interval_menu_ref",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":t.payload.overtime_interval,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},on:{"update:returnValue":function(e){return t.$set(t.payload,"overtime_interval",e)},"update:return-value":function(e){return t.$set(t.payload,"overtime_interval",e)}},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(v.a,t._g(t._b({staticClass:"mt-2",attrs:{"append-icon":"mdi-clock-outline",readonly:"","hide-details":!t.errors.working_hours,dense:"",outlined:""},model:{value:t.payload.overtime_interval,callback:function(e){t.$set(t.payload,"overtime_interval",e)},expression:"payload.overtime_interval"}},"v-text-field",o,!1),r))]}}]),model:{value:t.overtime_interval_menu,callback:function(e){t.overtime_interval_menu=e},expression:"overtime_interval_menu"}},[t._v(" "),t.overtime_interval_menu?e(m.a,{attrs:{format:"24hr","full-width":""},model:{value:t.payload.overtime_interval,callback:function(e){t.$set(t.payload,"overtime_interval",e)},expression:"payload.overtime_interval"}},[e(d.a),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){t.overtime_interval_menu=!1}}},[t._v("\n            Cancel\n          ")]),t._v(" "),e(r.a,{attrs:{"x-small":"",color:"primary"},on:{click:function(e){return t.$refs.overtime_interval_menu_ref.save(t.payload.overtime_interval)}}},[t._v("\n            OK\n          ")])],1):t._e()],1),t._v(" "),t.errors&&t.errors.overtime_interval?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.overtime_interval[0]))]):t._e()],1)],1),t._v(" "),e(c.a,[e(o.a,{attrs:{cols:"12"}},[e("div",{staticClass:"text-left"},[t.can("shift_create")?e(r.a,{attrs:{small:"",color:"primary"},on:{click:t.store_shift}},[t._v("\n          Submit\n        ")]):t._e()],1)])],1)],1)}),[],!1,null,"4164a228",null);e.default=component.exports}}]);