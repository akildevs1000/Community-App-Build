(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{1073:function(t,e,r){var content=r(1124);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("0f821d56",content,!0,{sourceMap:!1})},1123:function(t,e,r){"use strict";r(1073)},1124:function(t,e,r){var o=r(18)((function(i){return i[1]}));o.push([t.i,"table[data-v-a13030d8]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-a13030d8],th[data-v-a13030d8]{padding:8px;text-align:left}tr[data-v-a13030d8]:nth-child(2n){background-color:#fbfdff}",""]),o.locals={},t.exports=o},1143:function(t,e,r){"use strict";r.r(e);var o=r(117),l=r(539),n=r(903),c=r(538),_=r(900),v=r(221),d=(r(12),r(14),r(11),r(20),r(9),r(21),r(2));r(6),r(80),r(31),r(58),r(57);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={props:["employeeId"],data:function(){return{visa_info:!1,snackbar:!1,response:"",errors:[],visaItem:{}}},created:function(){this.getInfo(this.employeeId)},methods:{getInfo:function(t){var e=this;this.$axios.get("visa/".concat(t)).then((function(r){var data=r.data;e.visaItem=f(f({},data),{},{employee_id:t})}))},caps:function(t){return""==t||null==t?"---":t.toString().replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){return!0},close_visa_info:function(){var t=this;this.visa_info=!1,this.errors=[],setTimeout((function(){t.$emit("close-popup")}),1e3)},save_visa_info:function(){var t,e,r,o=this,l=f(f({},this.visaItem),{},{company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(r=e.company)||void 0===r?void 0:r.id,employee_id:this.visaItem.employee_id});this.$axios.post("visa",l).then((function(t){var data=t.data;o.loading=!1,data.status?(o.errors=[],o.snackbar=!0,o.response=data.message,o.close_visa_info()):o.errors=data.errors})).catch((function(t){return console.log(t)}))}}},x=(r(1123),r(60)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center ma-2"},[e(_.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(n.a,[e(c.a,[e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("Visa no")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.visaItem.visa_no,callback:function(e){t.$set(t.visaItem,"visa_no",e)},expression:"visaItem.visa_no"}}),t._v(" "),t.errors&&t.errors.visa_no?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.visa_no[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("note")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.visaItem.note,callback:function(e){t.$set(t.visaItem,"note",e)},expression:"visaItem.note"}}),t._v(" "),t.errors&&t.errors.note?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.note[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("place of issues")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.visaItem.place_of_issues,callback:function(e){t.$set(t.visaItem,"place_of_issues",e)},expression:"visaItem.place_of_issues"}}),t._v(" "),t.errors&&t.errors.place_of_issues?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.place_of_issues[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("country")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.visaItem.country,callback:function(e){t.$set(t.visaItem,"country",e)},expression:"visaItem.country"}}),t._v(" "),t.errors&&t.errors.country?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.country[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("issue date")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"date"},model:{value:t.visaItem.issue_date,callback:function(e){t.$set(t.visaItem,"issue_date",e)},expression:"visaItem.issue_date"}}),t._v(" "),t.errors&&t.errors.issue_date?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.issue_date[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("expiry date")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"date"},model:{value:t.visaItem.expiry_date,callback:function(e){t.$set(t.visaItem,"expiry_date",e)},expression:"visaItem.expiry_date"}}),t._v(" "),t.errors&&t.errors.expiry_date?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.expiry_date[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("labour no")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.visaItem.labour_no,callback:function(e){t.$set(t.visaItem,"labour_no",e)},expression:"visaItem.labour_no"}}),t._v(" "),t.errors&&t.errors.labour_no?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.labour_no[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("expiry date")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"text"},model:{value:t.visaItem.personal_no,callback:function(e){t.$set(t.visaItem,"personal_no",e)},expression:"visaItem.personal_no"}}),t._v(" "),t.errors&&t.errors.personal_no?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.personal_no[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("labour issue date")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"date"},model:{value:t.visaItem.labour_issue_date,callback:function(e){t.$set(t.visaItem,"labour_issue_date",e)},expression:"visaItem.labour_issue_date"}}),t._v(" "),t.errors&&t.errors.labour_issue_date?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.labour_issue_date[0]))]):t._e()],1)]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"col-form-label"},[t._v(t._s(t.caps("labour expiry date")))]),t._v(" "),e(v.a,{staticClass:"form-control",attrs:{dense:"",small:"",outlined:"",type:"date"},model:{value:t.visaItem.labour_expiry_date,callback:function(e){t.$set(t.visaItem,"labour_expiry_date",e)},expression:"visaItem.labour_expiry_date"}}),t._v(" "),t.errors&&t.errors.labour_expiry_date?e("span",{staticClass:"text-danger mt-2"},[t._v(t._s(t.errors.labour_expiry_date[0]))]):t._e()],1)]),t._v(" "),t.errors&&t.errors.length?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors))]):t._e()],1),t._v(" "),e(c.a,[e(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save_visa_info}},[t._v("Save")])],1)],1)],1)],1)}),[],!1,null,"a13030d8",null);e.default=component.exports}}]);