(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1129:function(t,e,r){"use strict";r.r(e);var o=r(117),l=r(538),n=r(537),c=r(899),_=r(221),d=(r(12),r(14),r(11),r(20),r(9),r(21),r(2));r(6),r(80),r(31),r(58),r(57);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={props:["employeeId"],data:function(){return{passport_info:!1,errors:[],snackbar:!1,response:"",passport_list:{}}},created:function(){this.getInfo(this.employeeId)},methods:{getInfo:function(t){var e=this;this.$axios.get("passport/".concat(t)).then((function(r){var data=r.data;e.passport_list=m(m({},data),{},{employee_id:t})}))},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){return!0},close_passport_info:function(){var t=this;this.passport_info=!1,this.errors=[],setTimeout((function(){t.$emit("close-popup")}),1e3)},save_passport_info:function(){var t,e,r,o=this,l=m(m({},this.passport_list),{},{company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(r=e.company)||void 0===r?void 0:r.id,employee_id:this.passport_list.employee_id});this.$axios.post("passport",l).then((function(t){var data=t.data;o.loading=!1,data.status?(o.$emit("eventFromchild"),o.errors=[],o.snackbar=!0,o.response=data.message,o.close_passport_info()):o.errors=data.errors})).catch((function(t){return console.log(t)}))}}},y=r(60),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center ma-2"},[e(c.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(n.a,[e(l.a,{attrs:{cols:"6"}},[e(n.a,[e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Passport No","hide-details":!t.errors.passport_no,"error-messages":t.errors.passport_no&&t.errors.passport_no[0],dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.passport_no,callback:function(e){t.$set(t.passport_list,"passport_no",e)},expression:"passport_list.passport_no"}})],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Note","hide-details":!t.errors.note,"error-messages":t.errors.note&&t.errors.note[0],dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.note,callback:function(e){t.$set(t.passport_list,"note",e)},expression:"passport_list.note"}})],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Place of Issue","hide-details":!t.errors.place_of_issues,"error-messages":t.errors.place_of_issues&&t.errors.place_of_issues[0],dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.place_of_issues,callback:function(e){t.$set(t.passport_list,"place_of_issues",e)},expression:"passport_list.place_of_issues"}})],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Issue Date","hide-details":!t.errors.country,"error-messages":t.errors.country&&t.errors.country[0],dense:"",small:"",outlined:"",type:"text"},model:{value:t.passport_list.country,callback:function(e){t.$set(t.passport_list,"country",e)},expression:"passport_list.country"}})],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Issue Date","hide-details":!t.errors.issue_date,"error-messages":t.errors.issue_date&&t.errors.issue_date[0],dense:"",small:"",outlined:"",type:"date"},model:{value:t.passport_list.issue_date,callback:function(e){t.$set(t.passport_list,"issue_date",e)},expression:"passport_list.issue_date"}})],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e(_.a,{staticClass:"form-control",attrs:{label:"Expiry Date","hide-details":!t.errors.expiry_date,"error-messages":t.errors.expiry_date&&t.errors.expiry_date[0],dense:"",small:"",outlined:"",type:"date"},model:{value:t.passport_list.expiry_date,callback:function(e){t.$set(t.passport_list,"expiry_date",e)},expression:"passport_list.expiry_date"}})],1)])],1),t._v(" "),e(n.a,[e(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save_passport_info}},[t._v("Save")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);