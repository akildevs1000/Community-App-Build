(window.webpackJsonp=window.webpackJsonp||[]).push([[69,85],{1001:function(t,e,r){"use strict";r.r(e);var o=r(117),n=r(138),l=r(538),c=r(902),d=r(360),_=r(116),v=r(537),m=r(221),h=(r(31),r(272),r(17)),f=(r(966),r(542),r(37),r(69),{props:["visitor_type"],components:{VisitorAttendanceLogsPopup:r(982).default},data:function(){return{loading:!1,dialog:!1,payload:{},UserID:null,searchCard:!0,infoCard:!1,item:{},response:null,firstItem:{},lastItem:{},errors:[]}},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1;case 1:case"end":return e.stop()}}),e)})))()},methods:{close:function(){this.searchCard=!0,this.infoCard=!1,this.dialog=!1},search:function(){var t=this;this.loading=!0,this.response=null,this.$axios.get("search_visitor_by_user_id",{params:{UserID:this.UserID}}).then((function(e){var data=e.data;if(!data)return t.response="No record found",void(t.loading=!1);t.response=null,t.searchCard=!1,t.infoCard=!0,t.item=data,t.loading=!1;var r=data.attendance_logs;t.firstItem=r[0],t.lastItem=r[r.length-1]})).catch((function(e){var r=e.response;t.response=null,t.searchCard=!1,t.infoCard=!0,t.data=[],t.loading=!1,console.log("error:",r)}))},checkout:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={UserID:t.UserID,LogTime:t.getCurrentDateTime(),DeviceID:"Manual",company_id:t.$auth.user.company_id,log_type:"out",visitor_id:t.item.id},t.loading=!0,t.$axios.post("generate_log",r).then((function(e){var data=e.data;t.loading=!1,data.status?t.render_report():t.errors=data.errors})).catch((function(e){e.message;t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},render_report:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={LogTime:t.getCurrentDateTime(),company_id:t.$auth.user.company_id,id:t.item.id,UserIds:[t.UserID]},t.loading=!0,t.$axios.post("/community_common_report",r).then((function(e){var data=e.data;t.loading=!1,data.status?(t.$emit("success","Checkout has been recorded"),t.dialog=!1):t.errors=data.errors})).catch((function(e){e.message;t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},getCurrentDateTime:function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(o," ").concat(n,":").concat(l)}}}),y=r(60),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{persistent:"",width:"750"},scopedSlots:t._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[e("span",t._g(t._b({staticStyle:{cursor:"pointer"}},"span",n,!1),o),[e(_.a,{attrs:{color:"black"}},[t._v("mdi-magnify")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),t.searchCard?e(n.a,[e(c.a,[e(v.a,{attrs:{"no-gutters":""}},[e(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(_.a,{attrs:{color:"primary"},on:{click:t.close}},[t._v(" mdi-close ")])],1),t._v(" "),e(l.a,{staticClass:"my-1",attrs:{cols:"12"}},[e(m.a,{attrs:{label:"Search","hide-details":"",dense:"",outlined:""},model:{value:t.UserID,callback:function(e){t.UserID=e},expression:"UserID"}})],1),t._v(" "),t.response?e(l.a,{staticClass:"red--text",attrs:{cols:"12"}},[e("div",{staticClass:"my-1"},[t._v("\n            "+t._s(t.response)+"\n          ")])]):t._e(),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"mt-2",attrs:{loading:t.loading,color:"primary",block:""},on:{click:t.search}},[t._v("Search")])],1)],1)],1)],1):t._e(),t._v(" "),t.infoCard&&t.item&&t.item.id?e(n.a,[e(c.a,[e(v.a,{attrs:{"no-gutters":""}},[e(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[e(_.a,{attrs:{color:"primary"},on:{click:t.close}},[t._v(" mdi-close ")])],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e("VisitorAttendanceLogsPopup",{attrs:{UserID:t.item.id,visitor_type:t.visitor_type}}),t._v(" "),e(o.a,{staticClass:"mt-2",attrs:{loading:t.loading,color:"primary",block:""},on:{click:t.checkout}},[t._v("Checkout")])],1)],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},966:function(t,e,r){"use strict";var o=r(42),n=r(140),l=r(74),c=r(88),d=r(125);o&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=l(this),e=c(t);return 0==e?void 0:t[e-1]},set:function(t){var e=l(this),r=c(e);return e[0==r?0:r-1]=t}}),n("lastItem"))},982:function(t,e,r){"use strict";r.r(e);var o=r(339),n=r(138),l=r(538),c=r(902),d=r(888),_=r(537),v=(r(33),r(17)),m=(r(69),r(31),r(272),r(58),r(966),r(542),r(37),{props:["UserID","visitor_type"],data:function(){return{loading:!1,dialog:!1,payload:{},searchCard:!0,infoCard:!1,item:{},response:null,firstItem:{},lastItem:{},errors:[]}},created:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.search();case 2:case"end":return e.stop()}}),e)})))()},methods:{caps:function(t){if(t)return t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))},close:function(){this.searchCard=!0,this.infoCard=!1,this.dialog=!1},search:function(){var t=this;console.log(this.UserID),this.loading=!0,this.response=null,this.$axios.get("get_logs_by_visitor_id",{params:{per_page:100,company_id:this.$auth.user.company_id,UserID:this.UserID,id:this.UserID,user_type:this.visitor_type}}).then((function(e){var data=e.data;if(!data)return t.response="No record found",void(t.loading=!1);t.response=null,t.searchCard=!1,t.infoCard=!0,t.item=data,t.loading=!1;var r=data.attendance_logs;t.firstItem=r[0],t.lastItem=r[r.length-1]})).catch((function(e){var r=e.response;t.response=null,t.searchCard=!1,t.infoCard=!0,t.data=[],t.loading=!1,console.log("error:",r)}))},checkout:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={UserID:t.UserID,LogTime:t.getCurrentDateTime(),DeviceID:"Manual",company_id:t.$auth.user.company_id,log_type:"out",visitor_id:t.item.id},t.loading=!0,t.$axios.post("generate_log",r).then((function(e){var data=e.data;t.loading=!1,data.status?(t.$emit("success","Checkout has been recorded"),t.dialog=!1):t.errors=data.errors})).catch((function(e){e.message;t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},getCurrentDateTime:function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),n=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(o," ").concat(n,":").concat(l)}}}),h=r(60),component=Object(h.a)(m,(function(){var t,e,r,v=this,m=v._self._c;return m(n.a,[m(c.a,[m(_.a,{attrs:{"no-gutters":""}},[m(l.a,{staticStyle:{"border-right":"1px solid #dddddd"},attrs:{cols:"4"}},[m("h3",[v._v(v._s(v.caps(null===(t=v.item)||void 0===t?void 0:t.visitor_type)))]),v._v(" "),m(_.a,{staticClass:"pa-0 ma-0"},[m(l.a,{attrs:{cols:"12"}},[m(_.a,{attrs:{"no-gutters":""}},[m(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[m(o.a,{attrs:{size:"100"}},[m("img",{staticStyle:{width:"100%"},attrs:{src:"/no-profile-image.jpg",alt:"Avatar"}})])],1),v._v(" "),m(l.a,{staticClass:"text-center",attrs:{cols:"12"}},[m("div",{staticClass:"mt-1",staticStyle:{height:"15px","font-size":"12px"}},[v._v("\n                  "+v._s(v.item.full_name)+"\n                  ")]),v._v(" "),m("div",{staticStyle:{"font-size":"12px"}},[m("small",[v._v("\n                    "+v._s(v.item.phone_number)+"\n                    ")])])])],1)],1),v._v(" "),m(l.a,{attrs:{cols:"12"}},[m(d.a),v._v(" "),m(_.a,{staticStyle:{"font-size":"15px"},attrs:{"no-gutters":""}},[m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" First Name ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.first_name)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Last Name ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.last_name)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Emirates Id ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.id_number)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Visitor Card Id ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.system_user_id)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Email ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.email)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Phone Number ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.phone_number)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Purpose ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s((null===(e=v.item)||void 0===e||null===(r=e.purpose)||void 0===r?void 0:r.name)||"---")+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Gender ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.gender)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Visit From ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.visit_from)+" "+v._s(v.item.time_in)+" ")])]),v._v(" "),m(l.a,{attrs:{cols:"6"}},[m("small",[v._v(" Visit To ")])]),v._v(" "),m(l.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.visit_to)+" "+v._s(v.item.time_out)+" ")])])],1)],1)],1)],1),v._v(" "),m(l.a,{attrs:{cols:"8"}},[m(d.a),v._v(" "),m(_.a,{staticClass:"px-3",attrs:{"no-gutters":""}},[m(l.a,{attrs:{cols:"12"}},[m("div",{staticClass:"mt-4"},[m("table",{staticStyle:{width:"100%"}},[m("tr",[m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("#")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Date Time")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Tenant")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Flat")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Device")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("In/Out")])])])]),v._v(" "),v._l(v.item.attendance_logs,(function(t,e){var r,o,n,l,c,d,_,h,f,y,x;return m("tr",{key:e},[m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(e+1))])]),v._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(t.LogTime))])]),v._v(" "),t.visitor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(r=t.visitor.tanent)||void 0===r?void 0:r.full_name))]),m("br"),v._v(" "),m("small",[v._v(v._s(null===(o=t.visitor.tanent)||void 0===o?void 0:o.phone_number))])]):v._e(),v._v(" "),t.contractor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(n=t.contractor.tanent)||void 0===n?void 0:n.full_name))]),m("br"),v._v(" "),m("small",[v._v(v._s(null===(l=t.contractor.tanent)||void 0===l?void 0:l.phone_number))])]):v._e(),v._v(" "),t.delivery?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(c=t.delivery.tanent)||void 0===c?void 0:c.full_name))]),m("br"),v._v(" "),m("small",[v._v(v._s(null===(d=t.delivery.tanent)||void 0===d?void 0:d.phone_number))])]):v._e(),v._v(" "),t.visitor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(_=t.visitor.tanent)||void 0===_?void 0:_.room.room_number))]),m("br")]):t.contractor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(h=t.contractor.tanent)||void 0===h?void 0:h.room.room_number))]),m("br")]):t.delivery?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(f=t.delivery.tanent)||void 0===f?void 0:f.room.room_number))]),m("br")]):v._e(),v._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null!==(y=null==t||null===(x=t.device)||void 0===x?void 0:x.short_name)&&void 0!==y?y:"Manual"))])]),v._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(v.caps(null==t?void 0:t.log_type)))])])])}))],2)])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);