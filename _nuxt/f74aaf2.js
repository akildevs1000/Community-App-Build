(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{967:function(t,e,r){"use strict";var o=r(42),l=r(140),n=r(74),d=r(88),c=r(125);o&&(c(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=n(this),e=d(t);return 0==e?void 0:t[e-1]},set:function(t){var e=n(this),r=d(e);return e[0==r?0:r-1]=t}}),l("lastItem"))},983:function(t,e,r){"use strict";r.r(e);var o=r(340),l=r(138),n=r(539),d=r(903),c=r(889),_=r(538),v=(r(33),r(17)),m=(r(69),r(31),r(273),r(58),r(967),r(543),r(37),{props:["UserID","visitor_type"],data:function(){return{loading:!1,dialog:!1,payload:{},searchCard:!0,infoCard:!1,item:{},response:null,firstItem:{},lastItem:{},errors:[]}},created:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!1,t.search();case 2:case"end":return e.stop()}}),e)})))()},methods:{caps:function(t){if(t)return t.replace(/\b\w/g,(function(t){return t.toUpperCase()}))},close:function(){this.searchCard=!0,this.infoCard=!1,this.dialog=!1},search:function(){var t=this;console.log(this.UserID),this.loading=!0,this.response=null,this.$axios.get("get_logs_by_visitor_id",{params:{per_page:100,company_id:this.$auth.user.company_id,UserID:this.UserID,id:this.UserID,user_type:this.visitor_type}}).then((function(e){var data=e.data;if(!data)return t.response="No record found",void(t.loading=!1);t.response=null,t.searchCard=!1,t.infoCard=!0,t.item=data,t.loading=!1;var r=data.attendance_logs;t.firstItem=r[0],t.lastItem=r[r.length-1]})).catch((function(e){var r=e.response;t.response=null,t.searchCard=!1,t.infoCard=!0,t.data=[],t.loading=!1,console.log("error:",r)}))},checkout:function(){var t=this;return Object(v.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={UserID:t.UserID,LogTime:t.getCurrentDateTime(),DeviceID:"Manual",company_id:t.$auth.user.company_id,log_type:"out",visitor_id:t.item.id},t.loading=!0,t.$axios.post("generate_log",r).then((function(e){var data=e.data;t.loading=!1,data.status?(t.$emit("success","Checkout has been recorded"),t.dialog=!1):t.errors=data.errors})).catch((function(e){e.message;t.$emit("response","Checkout cannot be done")}));case 3:case"end":return e.stop()}}),e)})))()},getCurrentDateTime:function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),o=String(t.getDate()).padStart(2,"0"),l=String(t.getHours()).padStart(2,"0"),n=String(t.getMinutes()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(o," ").concat(l,":").concat(n)}}}),f=r(60),component=Object(f.a)(m,(function(){var t,e,r,v=this,m=v._self._c;return m(l.a,[m(d.a,[m(_.a,{attrs:{"no-gutters":""}},[m(n.a,{staticStyle:{"border-right":"1px solid #dddddd"},attrs:{cols:"4"}},[m("h3",[v._v(v._s(v.caps(null===(t=v.item)||void 0===t?void 0:t.visitor_type)))]),v._v(" "),m(_.a,{staticClass:"pa-0 ma-0"},[m(n.a,{attrs:{cols:"12"}},[m(_.a,{attrs:{"no-gutters":""}},[m(n.a,{staticClass:"text-center",attrs:{cols:"12"}},[m(o.a,{attrs:{size:"100"}},[m("img",{staticStyle:{width:"100%"},attrs:{src:"/no-profile-image.jpg",alt:"Avatar"}})])],1),v._v(" "),m(n.a,{staticClass:"text-center",attrs:{cols:"12"}},[m("div",{staticClass:"mt-1",staticStyle:{height:"15px","font-size":"12px"}},[v._v("\n                  "+v._s(v.item.full_name)+"\n                  ")]),v._v(" "),m("div",{staticStyle:{"font-size":"12px"}},[m("small",[v._v("\n                    "+v._s(v.item.phone_number)+"\n                    ")])])])],1)],1),v._v(" "),m(n.a,{attrs:{cols:"12"}},[m(c.a),v._v(" "),m(_.a,{staticStyle:{"font-size":"15px"},attrs:{"no-gutters":""}},[m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" First Name ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.first_name)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Last Name ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.last_name)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Emirates Id ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.id_number)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Visitor Card Id ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.system_user_id)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Email ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.email)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Phone Number ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.phone_number)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Purpose ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s((null===(e=v.item)||void 0===e||null===(r=e.purpose)||void 0===r?void 0:r.name)||"---")+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Gender ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.gender)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Visit From ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.visit_from)+" "+v._s(v.item.time_in)+" ")])]),v._v(" "),m(n.a,{attrs:{cols:"6"}},[m("small",[v._v(" Visit To ")])]),v._v(" "),m(n.a,{staticClass:"text-right",attrs:{cols:"6"}},[m("small",[v._v(" "+v._s(v.item.visit_to)+" "+v._s(v.item.time_out)+" ")])])],1)],1)],1)],1),v._v(" "),m(n.a,{attrs:{cols:"8"}},[m(c.a),v._v(" "),m(_.a,{staticClass:"px-3",attrs:{"no-gutters":""}},[m(n.a,{attrs:{cols:"12"}},[m("div",{staticClass:"mt-4"},[m("table",{staticStyle:{width:"100%"}},[m("tr",[m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("#")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Date Time")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Tenant")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Flat")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("Device")])])]),v._v(" "),m("td",{staticStyle:{"font-size":"12px"}},[m("small",[m("b",[v._v("In/Out")])])])]),v._v(" "),v._l(v.item.attendance_logs,(function(t,e){var r,o,l,n,d,c,_,f,h,x,y;return m("tr",{key:e},[m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(e+1))])]),v._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(t.LogTime))])]),v._v(" "),t.visitor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(r=t.visitor.tanent)||void 0===r?void 0:r.full_name))]),m("br"),v._v(" "),m("small",[v._v(v._s(null===(o=t.visitor.tanent)||void 0===o?void 0:o.phone_number))])]):v._e(),v._v(" "),t.contractor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(l=t.contractor.tanent)||void 0===l?void 0:l.full_name))]),m("br"),v._v(" "),m("small",[v._v(v._s(null===(n=t.contractor.tanent)||void 0===n?void 0:n.phone_number))])]):v._e(),v._v(" "),t.delivery?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(d=t.delivery.tanent)||void 0===d?void 0:d.full_name))]),m("br"),v._v(" "),m("small",[v._v(v._s(null===(c=t.delivery.tanent)||void 0===c?void 0:c.phone_number))])]):v._e(),v._v(" "),t.visitor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(_=t.visitor.tanent)||void 0===_?void 0:_.room.room_number))]),m("br")]):t.contractor?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(f=t.contractor.tanent)||void 0===f?void 0:f.room.room_number))]),m("br")]):t.delivery?m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null===(h=t.delivery.tanent)||void 0===h?void 0:h.room.room_number))]),m("br")]):v._e(),v._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(null!==(x=null==t||null===(y=t.device)||void 0===y?void 0:y.short_name)&&void 0!==x?x:"Manual"))])]),v._v(" "),m("td",{staticStyle:{"font-size":"14px","border-bottom":"1px solid #dddddd"}},[m("small",[v._v(v._s(v.caps(null==t?void 0:t.log_type)))])])])}))],2)])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);