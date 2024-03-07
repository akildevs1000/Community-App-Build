(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1738:function(e,t,o){"use strict";o.r(t);var r=o(117),n=o(538),l=o(1585),c=o(360),d=o(888),m=o(116),_=o(219),y=o(887),h=o(537),v=o(1024),f=o(1025),x=o(989),k=o(1026),w=o(221),C=o(962),$=(o(33),{layout:function(e){var t=e.$auth.user.user_type;return"master"==t?"master":"employee"==t?"employee":"master"==t?"default":void 0},data:function(){return{dateMenu:!1,dateMenu2:!1,dialog:!1,snackbar:!1,response:"",preloader:!1,loading:!1,upload:{name:""},company_payload:{name:"",email:"",logo:"",member_from:"",expiry:"",no_branch:"",max_branches:"",max_employee:"",max_devices:""},contact_payload:{name:"",number:"",position:"",whatsapp:""},geographic_payload:{location:"",lat:"",lon:""},e1:1,errors:[],previewImage:"/no-business_profile.png"}},created:function(){this.preloader=!1},methods:{can:function(e){return this.$pagePermission.can(e,this)},onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this;this.upload.name=e.target.files[0]||"";var o=this.$refs.attachment_input.files;if(o&&o[0]){var r=new FileReader;r.onload=function(e){t.previewImage=e.target.result},r.readAsDataURL(o[0]),this.$emit("input",o[0])}},validate_building:function(){var e=this;this.loading=!0,this.errors=[];var t=new FormData;for(var o in t.append("logo",this.upload.name),this.company_payload)t.append(o,this.company_payload[o]);this.$axios.post("/building/validate",t).then((function(t){t.data;e.loading=!1,e.errors=[],e.e1=2})).catch((function(t){var o=t.response;return e.handleErrorResponse(o)}))},validate_contact:function(){var e=this;this.loading=!0,this.errors=[],this.$axios.post("company/contact/validate",this.contact_payload).then((function(t){var data=t.data;e.loading=!1,data.status?e.e1=3:e.errors=data.errors})).catch((function(e){return console.log(e)}))},validate_geographic_info:function(){var e=this;this.loading=!0,this.errors=[],this.$axios.post("company/user/validate",this.geographic_payload).then((function(t){var data=t.data;e.loading=!1,data.status?e.store_data():e.errors=data.errors})).catch((function(e){return console.log(e)}))},store_data:function(){var e=this,t=new FormData;t.append("logo",this.upload.name),t.append("company_name",this.company_payload.name),t.append("email",this.company_payload.email),t.append("member_from",this.company_payload.member_from),t.append("expiry",this.company_payload.expiry),t.append("management_company",this.company_payload.management_company),t.append("contact_name",this.contact_payload.name),t.append("number",this.contact_payload.number),t.append("position",this.contact_payload.position),t.append("whatsapp",this.contact_payload.whatsapp),t.append("lat",this.geographic_payload.lat),t.append("lon",this.geographic_payload.lon),t.append("location",this.geographic_payload.location||"no location"),this.$axios.post("/community",t).then((function(t){var data=t.data;e.loading=!1,data.status?(e.errors=[],e.$emit("success"),e.dialog=!1):e.errors=data.errors})).catch((function(e){return console.log(e)}))},handleErrorResponse:function(e){if(this.loading=!1,e){var t=e.status,data=e.data,o=e.statusText;t&&422==t?this.errors=data.errors:this.$emit("error",o)}else this.$emit("error","An unexpected error occurred.")}}}),S=o(60),component=Object(S.a)($,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(o){var n=o.on,l=o.attrs;return[t("span",[t(r.a,e._g(e._b({staticClass:"primary",attrs:{dense:"",small:"",text:"",title:"Create Community"}},"v-btn",l,!1),n),[e._v("\n        Create Community\n        "),t(m.a,{attrs:{right:"",dark:""}},[e._v("mdi-plus-circle-outline")])],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(v.a,{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[t(x.a,[t(k.a,{attrs:{complete:e.e1>1,step:"1",editable:""}},[e._v("\n        Company Info\n      ")]),e._v(" "),t(d.a),e._v(" "),t(k.a,{attrs:{complete:e.e1>2,step:"2",editable:""}},[e._v("\n        Contact Info\n      ")]),e._v(" "),t(d.a),e._v(" "),t(k.a,{attrs:{step:"3",editable:""}},[e._v(" Geographic Info ")])],1),e._v(" "),t(x.b,[t(f.a,{attrs:{step:"1"}},[t(h.a,[t(n.a,{attrs:{cols:"12",md:"3"}},[t("div",{staticClass:"text-center"},[t(_.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto"},attrs:{src:e.previewImage}}),e._v(" "),t(r.a,{staticClass:"mt-2",staticStyle:{width:"100%"},attrs:{small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n                "),t(m.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)]),e._v(" "),t(n.a,{staticClass:"mt-3",attrs:{md:"9",sm:"12",cols:"12",dense:""}},[t(h.a,[t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Building Name",dense:"",outlined:"",type:"text","hide-details":!e.errors.name,"error-messages":e.errors&&e.errors.name?e.errors.name[0]:""},model:{value:e.company_payload.name,callback:function(t){e.$set(e.company_payload,"name",t)},expression:"company_payload.name"}})],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Email",dense:"",outlined:"",type:"text","hide-details":!e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.company_payload.email,callback:function(t){e.$set(e.company_payload,"email",t)},expression:"company_payload.email"}})],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(y.a,{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,n=o.attrs;return[t(w.a,e._g(e._b({attrs:{label:"Member From","hide-details":!e.errors.member_from,"error-messages":e.errors&&e.errors.member_from?e.errors.member_from[0]:"","persistent-hint":"","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.company_payload.member_from,callback:function(t){e.$set(e.company_payload,"member_from",t)},expression:"company_payload.member_from"}},"v-text-field",n,!1),r))]}}]),model:{value:e.dateMenu,callback:function(t){e.dateMenu=t},expression:"dateMenu"}},[e._v(" "),t(l.a,{staticStyle:{"min-height":"320px"},attrs:{"no-title":""},on:{input:function(t){e.dateMenu=!1}},model:{value:e.company_payload.member_from,callback:function(t){e.$set(e.company_payload,"member_from",t)},expression:"company_payload.member_from"}})],1)],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(y.a,{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,n=o.attrs;return[t(w.a,e._g(e._b({attrs:{label:"Expiry Date","hide-details":!e.errors.expiry,"error-messages":e.errors&&e.errors.expiry?e.errors.expiry[0]:"","persistent-hint":"","append-icon":"mdi-calendar",readonly:"",outlined:"",dense:""},model:{value:e.company_payload.expiry,callback:function(t){e.$set(e.company_payload,"expiry",t)},expression:"company_payload.expiry"}},"v-text-field",n,!1),r))]}}]),model:{value:e.dateMenu2,callback:function(t){e.dateMenu2=t},expression:"dateMenu2"}},[e._v(" "),t(l.a,{staticStyle:{"min-height":"320px"},attrs:{"no-title":""},on:{input:function(t){e.dateMenu2=!1}},model:{value:e.company_payload.expiry,callback:function(t){e.$set(e.company_payload,"expiry",t)},expression:"company_payload.expiry"}})],1)],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Management Company",dense:"",outlined:"",type:"text","hide-details":!e.errors.management_company,"error-messages":e.errors&&e.errors.management_company?e.errors.management_company[0]:""},model:{value:e.company_payload.management_company,callback:function(t){e.$set(e.company_payload,"management_company",t)},expression:"company_payload.management_company"}})],1)],1)],1),e._v(" "),t(n.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(r.a,{attrs:{small:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:"",loading:e.loading},on:{click:e.validate_building}},[e._v("Next")])],1)],1)],1),e._v(" "),t(f.a,{attrs:{step:"2"}},[t(h.a,[t(n.a,{attrs:{cols:"12",md:"3"}},[t("div",{staticClass:"text-center"},[t(_.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto"},attrs:{src:e.previewImage}}),e._v(" "),t(r.a,{staticClass:"mt-2",staticStyle:{width:"100%"},attrs:{small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n                "),t(m.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)]),e._v(" "),t(n.a,{staticClass:"mt-3",attrs:{md:"9",cols:"12",sm:"12",dense:""}},[t(h.a,[t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Person Name",dense:"",outlined:"",type:"text","hide-details":!e.errors.name,"error-messages":e.errors&&e.errors.name?e.errors.name[0]:""},model:{value:e.contact_payload.name,callback:function(t){e.$set(e.contact_payload,"name",t)},expression:"contact_payload.name"}})],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Person Number",dense:"",outlined:"",type:"text","hide-details":!e.errors.number,"error-messages":e.errors&&e.errors.number?e.errors.number[0]:""},model:{value:e.contact_payload.number,callback:function(t){e.$set(e.contact_payload,"number",t)},expression:"contact_payload.number"}})],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Position",dense:"",outlined:"",type:"text","hide-details":!e.errors.position,"error-messages":e.errors&&e.errors.position?e.errors.position[0]:""},model:{value:e.contact_payload.position,callback:function(t){e.$set(e.contact_payload,"position",t)},expression:"contact_payload.position"}})],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Whatsapp",dense:"",outlined:"",type:"text","hide-details":!e.errors.whatsapp,"error-messages":e.errors&&e.errors.whatsapp?e.errors.whatsapp[0]:""},model:{value:e.contact_payload.whatsapp,callback:function(t){e.$set(e.contact_payload,"whatsapp",t)},expression:"contact_payload.whatsapp"}})],1)],1)],1),e._v(" "),t(n.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(r.a,{attrs:{small:""},on:{click:function(t){e.e1=1}}},[e._v("Back")]),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:"",loading:e.loading},on:{click:e.validate_contact}},[e._v("Submit")])],1)],1)],1),e._v(" "),t(f.a,{attrs:{step:"3"}},[t(h.a,[t(n.a,{attrs:{cols:"12",md:"3"}},[t("div",{staticClass:"text-center"},[t(_.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto"},attrs:{src:e.previewImage}}),e._v(" "),t(r.a,{staticClass:"mt-2",staticStyle:{width:"100%"},attrs:{small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n                "),t(m.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)]),e._v(" "),t(n.a,{staticClass:"mt-3",attrs:{md:"9",cols:"12",sm:"12",dense:""}},[t(h.a,[t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Lat",dense:"",outlined:"",type:"text","hide-details":!e.errors.lat,"error-messages":e.errors&&e.errors.lat?e.errors.lat[0]:""},model:{value:e.geographic_payload.lat,callback:function(t){e.$set(e.geographic_payload,"lat",t)},expression:"geographic_payload.lat"}})],1),e._v(" "),t(n.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t(w.a,{attrs:{label:"Lon",dense:"",outlined:"",type:"text","hide-details":!e.errors.lon,"error-messages":e.errors&&e.errors.lon?e.errors.lon[0]:""},model:{value:e.geographic_payload.lon,callback:function(t){e.$set(e.geographic_payload,"lon",t)},expression:"geographic_payload.lon"}})],1),e._v(" "),t(n.a,{attrs:{md:"12",cols:"12",sm:"12",dense:""}},[t(C.a,{attrs:{rows:"3",label:"Location",dense:"",outlined:"",type:"text","hide-details":!e.errors.location,"error-messages":e.errors&&e.errors.location?e.errors.location[0]:""},model:{value:e.geographic_payload.location,callback:function(t){e.$set(e.geographic_payload,"location",t)},expression:"geographic_payload.location"}})],1)],1)],1),e._v(" "),t(n.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(r.a,{attrs:{small:""},on:{click:function(t){e.e1=2}}},[e._v("Back")]),e._v(" "),t(r.a,{staticClass:"primary",attrs:{small:"",loading:e.loading},on:{click:e.validate_geographic_info}},[e._v("Submit")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);