(window.webpackJsonp=window.webpackJsonp||[]).push([[318,172,193,241],{1004:function(e,t,r){"use strict";r.r(t);var n=r(117),o=r(116),l=r(219),d=(r(33),{props:["defaultImage"],data:function(){return{imagePreview:"/no-profile-image.jpg",upload:{name:""}}},created:function(){this.imagePreview=this.defaultImage||"/no-profile-image.jpg"},methods:{onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.attachment_input.files;if(r&&r[0]){var n=new FileReader;n.onload=function(e){t.imagePreview=e.target.result},n.readAsDataURL(r[0]),this.$emit("uploaded",r[0])}}}}),c=r(60),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t(l.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto",border:"1px solid #6946dd"},attrs:{src:e.imagePreview}}),e._v(" "),t(n.a,{staticClass:"mt-2",attrs:{outlined:"",block:"",color:"primary",small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n    "),t(o.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}})],1)}),[],!1,null,null,null);t.default=component.exports},1019:function(e,t,r){e.exports=r.p+"img/icon_excel.a89178d.png"},1026:function(e,t,r){"use strict";r.r(t);r(120),r(12),r(6),r(9),r(92),r(363);var n={props:["data"],methods:{exportData:function(){if(0===this.data.length)return this.snackbar=!0,void(this.response="No record to download");var header=Object.keys(this.data[0]).join(",")+"\n",e="";this.data.forEach((function(t){e+=Object.values(t).join(",").trim()+"\n"}));var element=document.createElement("a");element.setAttribute("href","data:text/csv;charset=utf-8, "+encodeURIComponent(header+e)),element.setAttribute("download","download.csv"),document.body.appendChild(element),element.click(),document.body.removeChild(element)}}},o=r(60),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("span",{staticClass:"pa-2 text-center",on:{click:e.exportData}},[t("img",{staticStyle:{width:"20px",cursor:"pointer"},attrs:{title:"Download",src:r(1019)}}),e._v(" "),t("div",{staticStyle:{"font-size":"8px",color:"black","margin-top":"-4px"}},[e._v("Download")])])}),[],!1,null,null,null);t.default=component.exports},1354:function(e,t,r){"use strict";r.r(t);var n=r(921),o=r(117),l=r(138),d=r(79),c=r(539),m=r(903),_=r(361),f=r(116),v=r(997),h=r(996),y=r(538),x=r(221),k=r(17),C=r(2),O=(r(103),r(6),r(33),r(69),{data:function(){var e;return e={payload:{parent_id:"",system_user_id:111111,first_name:"test",last_name:"test",age:"25",member_type:"Maid",nationality:"Maid",gender:"Male",rfid:"2112",pin:"12313",full_name:"",phone_number:""},imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",snack:!1,snackColor:"",snackText:"",dialog:!1,current_page:1,color:"background",response:"",snackbar:!1,btnLoader:!1,max_employee:0,upload:{name:""}},Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"ids",[]),Object(C.a)(e,"loading",!1),Object(C.a)(e,"response",null),Object(C.a)(e,"errors",[]),Object(C.a)(e,"formAction","Create"),Object(C.a)(e,"tanents",[]),e},created:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,e.boilerplate=!0,t.next=4,e.$axios.get("tanent-list",{params:{company_id:e.$auth.user.company_id}});case 4:r=t.sent,n=r.data,e.tanents=n;case 7:case"end":return t.stop()}}),t)})))()},methods:{setSystemUserId:function(e){var t=this.tanents.find((function(t){return t.id===e}));if(t){var r=t.system_user_id,n=t.members_count;this.payload.system_user_id=parseInt(r)+n+1}else this.payload.system_user_id="Tenant with ID ".concat(e," not found.")},handleAttachment:function(e){this.payload.profile_picture=e},mapper:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return this.payload.profile_picture&&t.append("profile_picture",this.upload.name),t.append("company_id",this.$auth.user.company_id),t},submit:function(){var e=this;this.$axios.post("add-member",this.mapper(Object.assign(this.payload))).then((function(t){t.data;e.errors=[],e.$emit("response","Tanent inserted successfully")})).catch((function(t){var r,n,o,l,d=t.response;e.response=null!==(r=null==d||null===(n=d.data)||void 0===n?void 0:n.message)&&void 0!==r?r:null,e.errors=null!==(o=null==d||null===(l=d.data)||void 0===l?void 0:l.errors)&&void 0!==o?o:[]}))}}}),j=r(60),component=Object(j.a)(O,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,l=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",l,!1),n),[t(o.a,{staticClass:"primary",attrs:{dense:"",small:"",text:"",title:"Add Company"}},[e._v("\n        Create Maid\n        "),t(f.a,{attrs:{right:"",dark:""}},[e._v("mdi-plus-circle-outline")])],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(d.d,[e._v("Create Maid")]),e._v(" "),t(m.a,[t(y.a,[t(c.a,{attrs:{cols:"3"}},[t(y.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("SnippetsUploadAttachment",{attrs:{defaultImage:e.setImagePreview},on:{uploaded:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)])],1)],1),e._v(" "),t(c.a,{attrs:{cols:"9"}},[t(y.a,[t(c.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Tanent",outlined:"",items:e.tanents,"item-value":"id","item-text":"full_name",dense:"","hide-details":!e.errors.parent_id,"error-messages":e.errors&&e.errors.parent_id?e.errors.parent_id[0]:""},on:{change:function(t){return e.setSystemUserId(e.payload.parent_id)}},model:{value:e.payload.parent_id,callback:function(t){e.$set(e.payload,"parent_id",t)},expression:"payload.parent_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Device User Id",readonly:!0,dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.payload.system_user_id,callback:function(t){e.$set(e.payload,"system_user_id",t)},expression:"payload.system_user_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"First Name",dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.payload.first_name,callback:function(t){e.$set(e.payload,"first_name",t)},expression:"payload.first_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Last Name",dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.payload.last_name,callback:function(t){e.$set(e.payload,"last_name",t)},expression:"payload.last_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Age",dense:"",outlined:"","hide-details":!e.errors.age,"error-messages":e.errors&&e.errors.age?e.errors.age[0]:""},model:{value:e.payload.age,callback:function(t){e.$set(e.payload,"age",t)},expression:"payload.age"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Nationality",dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:e.payload.nationality,callback:function(t){e.$set(e.payload,"nationality",t)},expression:"payload.nationality"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(h.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:e.payload.gender,callback:function(t){e.$set(e.payload,"gender",t)},expression:"payload.gender"}},[t(v.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),t(v.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),t(v.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"RFID",dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:e.payload.rfid,callback:function(t){e.$set(e.payload,"rfid",t)},expression:"payload.rfid"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"PIN",dense:"",outlined:"","hide-details":!e.errors.pin,"error-messages":e.errors&&e.errors.pin?e.errors.pin[0]:""},model:{value:e.payload.pin,callback:function(t){e.$set(e.payload,"pin",t)},expression:"payload.pin"}})],1)],1)],1)],1),e._v(" "),t(y.a,[t(c.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(o.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(o.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsUploadAttachment:r(1004).default})},1355:function(e,t,r){"use strict";r.r(t);var n=r(921),o=r(117),l=r(138),d=r(79),c=r(539),m=r(903),_=r(361),f=r(116),v=r(538),h=r(17),y=r(2),x=(r(69),{props:["id"],data:function(){var e;return e={parent_ids:[],snack:!1,snackColor:"",snackText:"",dialog:!1,current_page:1,color:"background",response:"",snackbar:!1,btnLoader:!1,max_employee:0,upload:{name:""}},Object(y.a)(e,"snackbar",!1),Object(y.a)(e,"ids",[]),Object(y.a)(e,"loading",!1),Object(y.a)(e,"response",""),Object(y.a)(e,"errors",[]),Object(y.a)(e,"formAction","Create"),Object(y.a)(e,"tanents",[]),e},created:function(){var e=this;return Object(h.a)(regeneratorRuntime.mark((function t(){var r,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,t.next=3,e.$axios.get("tanent-list",{params:{company_id:e.$auth.user.company_id}});case 3:return r=t.sent,n=r.data,e.tanents=n,t.next=8,e.$axios.get("get-associated-tanent-ids/".concat(e.id));case 8:o=t.sent,l=o.data,e.parent_ids=l;case 11:case"end":return t.stop()}}),t)})))()},methods:{submit:function(){var e=this;this.$axios.post("/assign-tanents/"+this.id,{parent_ids:this.parent_ids}).then((function(t){t.data;e.handleSuccessResponse("Maid has been assigned")})).catch((function(t){var r=t.response;e.handleErrorResponse(r)}))},handleSuccessResponse:function(e){this.errors=[],this.dialog=!1,this.$emit("response",e)},handleErrorResponse:function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,r=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=r)}}}),k=r(60),component=Object(k.a)(x,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{persistent:"",width:"700"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",o,!1),n),[t(f.a,{attrs:{color:"black",small:""}},[e._v("mdi-account")]),e._v("\n      Assign Tanent(s)\n    ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(d.d,[e._v("Assign Tanent(s)")]),e._v(" "),t(m.a,[t(v.a,[t(c.a,{attrs:{cols:"12"}},[t(n.a,{attrs:{label:"Tanent",multiple:"",outlined:"",items:e.tanents,"item-value":"id","item-text":"full_name",dense:"","hide-details":!e.errors.parent_ids,"error-messages":e.errors&&e.errors.parent_ids?e.errors.parent_ids[0]:""},model:{value:e.parent_ids,callback:function(t){e.parent_ids=t},expression:"parent_ids"}})],1)],1),e._v(" "),t(v.a,[t(c.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(o.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(o.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},1358:function(e,t,r){"use strict";r.r(t);var n=r(921),o=r(117),l=r(138),d=r(79),c=r(539),m=r(903),_=r(361),f=r(116),v=r(997),h=r(996),y=r(538),x=r(221),k=r(17),C=r(2),O=(r(103),r(6),r(33),r(69),{props:["item"],data:function(){var e;return e={payload:{parent_id:"",system_user_id:111111,first_name:"",last_name:"",age:"",member_type:"",nationality:"",gender:"",rfid:"",pin:"",full_name:"",phone_number:""},imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",snack:!1,snackColor:"",snackText:"",dialog:!1,current_page:1,color:"background",response:"",snackbar:!1,btnLoader:!1,max_employee:0,upload:{name:""}},Object(C.a)(e,"snackbar",!1),Object(C.a)(e,"ids",[]),Object(C.a)(e,"loading",!1),Object(C.a)(e,"response",""),Object(C.a)(e,"errors",[]),Object(C.a)(e,"formAction","Create"),Object(C.a)(e,"tanents",[]),e},mounted:function(){this.payload=this.item},created:function(){var e=this;return Object(k.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,t.next=3,e.$axios.get("tanent-list",{params:{company_id:e.$auth.user.company_id}});case 3:r=t.sent,n=r.data,e.tanents=n,e.payload.parent_id=parseInt(e.item.parent_id),e.setSystemUserId(e.payload.parent_id);case 8:case"end":return t.stop()}}),t)})))()},methods:{setSystemUserId:function(e){var t=this.tanents.find((function(t){return t.id===e}));if(t){var r=t.system_user_id,n=t.members_count;this.payload.system_user_id=parseInt(r)+n+1}else this.payload.system_user_id="Tenant with ID ".concat(e," not found.")},handleAttachment:function(e){this.payload.profile_picture=e},submit:function(e){var t=this,r=new FormData;e.profile_picture&&e.profile_picture.name&&r.append("profile_picture",e.profile_picture),r.append("first_name",e.first_name),r.append("last_name",e.last_name),r.append("age",e.age),r.append("phone_number",e.phone_number),r.append("member_type",e.member_type),r.append("nationality",e.nationality),r.append("gender",e.gender),r.append("rfid",e.rfid),r.append("pin",e.pin),this.$axios.post("/update-member/"+this.item.id,r).then((function(e){e.data;t.handleSuccessResponse("Member has been updated")})).catch((function(e){var r=e.response;t.handleErrorResponse(r)}))},handleSuccessResponse:function(e){this.errors=[],this.dialog=!1,this.$emit("response",e)},handleErrorResponse:function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,r=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=r)}}}),j=r(60),component=Object(j.a)(O,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,o=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",o,!1),n),[t(f.a,{attrs:{color:"black",small:""}},[e._v("mdi-pencil")]),e._v("\n      Edit\n    ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(d.d,[e._v("Edit Maid")]),e._v(" "),t(m.a,[t(y.a,[t(c.a,{attrs:{cols:"3"}},[t(y.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("SnippetsUploadAttachment",{attrs:{defaultImage:e.setImagePreview},on:{uploaded:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)])],1)],1),e._v(" "),t(c.a,{attrs:{cols:"9"}},[t(y.a,[t(c.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Tanent",outlined:"",items:e.tanents,"item-value":"id","item-text":"full_name",dense:"","hide-details":!e.errors.parent_id,"error-messages":e.errors&&e.errors.parent_id?e.errors.parent_id[0]:""},on:{change:function(t){return e.setSystemUserId(e.payload.parent_id)}},model:{value:e.payload.parent_id,callback:function(t){e.$set(e.payload,"parent_id",t)},expression:"payload.parent_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Device User Id",readonly:!0,dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.payload.system_user_id,callback:function(t){e.$set(e.payload,"system_user_id",t)},expression:"payload.system_user_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"First Name",dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.payload.first_name,callback:function(t){e.$set(e.payload,"first_name",t)},expression:"payload.first_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Last Name",dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.payload.last_name,callback:function(t){e.$set(e.payload,"last_name",t)},expression:"payload.last_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Age",dense:"",outlined:"","hide-details":!e.errors.age,"error-messages":e.errors&&e.errors.age?e.errors.age[0]:""},model:{value:e.payload.age,callback:function(t){e.$set(e.payload,"age",t)},expression:"payload.age"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Nationality",dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:e.payload.nationality,callback:function(t){e.$set(e.payload,"nationality",t)},expression:"payload.nationality"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(h.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:e.payload.gender,callback:function(t){e.$set(e.payload,"gender",t)},expression:"payload.gender"}},[t(v.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),t(v.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),t(v.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"RFID",dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:e.payload.rfid,callback:function(t){e.$set(e.payload,"rfid",t)},expression:"payload.rfid"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"text-center",attrs:{label:"PIN",dense:"",outlined:"","hide-details":!e.errors.pin,"error-messages":e.errors&&e.errors.pin?e.errors.pin[0]:""},model:{value:e.payload.pin,callback:function(t){e.$set(e.payload,"pin",t)},expression:"payload.pin"}})],1)],1)],1)],1),e._v(" "),t(y.a,[t(c.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(o.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(o.a,{staticClass:"primary",on:{click:function(t){return e.submit(e.payload)}}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsUploadAttachment:r(1004).default})},1626:function(e,t,r){"use strict";r.r(t);var n=r(117),o=r(138),l=r(539),d=r(1579),c=r(116),m=r(219),_=r(336),f=r(211),v=r(10),h=r(888),y=r(538),x=r(900),k=r(360),C=r(99),O=r(886),j=r(17),w=r(2);r(70),r(6),r(9),r(12),r(41),r(543),r(80),r(14),r(11),r(18),r(19),r(69);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(w.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={data:function(){var e;return e={snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,dialog:!1,loading:!1,next_page_url:"",prev_page_url:"",current_page:1,per_page:1e3,ListName:"",color:"background",response:"",snackbar:!1,btnLoader:!1,options:{},Model:"Maids",endpoint:"maids",search:""},Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"loading",!1),Object(w.a)(e,"data",[]),Object(w.a)(e,"totalRowsCount",0),Object(w.a)(e,"headers",[{text:"User Device Id",align:"left",sortable:!0,key:"system_user_id",value:"system_user_id",filterable:!0,filterSpecial:!1},{text:"Full Name",align:"left",sortable:!0,key:"full_name",value:"full_name",filterable:!0,filterSpecial:!1},{text:"Gender",align:"left",sortable:!0,key:"gender",value:"gender",filterable:!0,filterSpecial:!1},{text:"Phone Number",align:"left",sortable:!0,key:"phone_number",value:"phone_number",filterable:!0,filterSpecial:!1},{text:"Age",align:"left",sortable:!0,key:"age",value:"age",filterable:!0,filterSpecial:!1},{text:"Tanent",align:"left",sortable:!0,key:"tanent_for_maid.tanent.full_name",value:"tanent_for_maid.tanent.full_name",filterable:!0,filterSpecial:!1},{text:"Tanent Phone Number",align:"left",sortable:!0,key:"tanent_for_maid.tanent.phone_number",value:"tanent_for_maid.tanent.phone_number",filterable:!0,filterSpecial:!1},{text:"Tanent Term",align:"left",sortable:!0,key:"tanent_for_maid.tanent.term",value:"tanent_for_maid.tanent.term",filterable:!0,filterSpecial:!1},{text:"Nationality",align:"left",sortable:!0,key:"nationality",value:"nationality",filterable:!0,filterSpecial:!1},{text:"Details",align:"left",sortable:!1,key:"options",value:"options"}]),e},created:function(){var e=this;return Object(j.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.boilerplate=!0,e.getDataFromApi();case 3:case"end":return t.stop()}}),t)})))()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{exportData:function(){var e=["system_user_id","full_name","gender","phone_number","age","nationality"];return this.data.map((function(t){var r={};return Object.keys(t).forEach((function(n){var o,l,d,c,m,_,f,v,h;e.includes(n)&&(r[n]=t[n],r.tanent_full_name=null!==(o=null==t||null===(l=t.tanent_for_maid)||void 0===l||null===(d=l.tanent)||void 0===d?void 0:d.full_name)&&void 0!==o?o:"---",r.tanent_phone_number=null!==(c=null==t||null===(m=t.tanent_for_maid)||void 0===m||null===(_=m.tanent)||void 0===_?void 0:_.phone_number)&&void 0!==c?c:"---",r.tanent_term=null!==(f=null==t||null===(v=t.tanent_for_maid)||void 0===v||null===(h=v.tanent)||void 0===h?void 0:h.term)&&void 0!==f?f:"---")})),r}))},generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")},can:function(e){return this.$pagePermission.can(e,this)},getDataFromApi:function(){var e=this;this.loadinglinear=!0;var t=this.options,r=t.sortBy,n=t.sortDesc,o=t.page,l=t.itemsPerPage,d={params:$({page:o,sortBy:r?r[0]:"",sortDesc:n?n[0]:"",per_page:l,company_id:this.$auth.user.company_id},this.filters)};this.$axios.get(this.endpoint,d).then((function(t){var data=t.data;e.data=data.data,e.totalRowsCount=data.total,0==e.data.length?e.displayErrormsg=!0:e.displayErrormsg=!1,e.loadinglinear=!1}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("delete-member/".concat(e.id)).then((function(e){e.data;t.getDataFromApi(),t.snackbar=!0,t.response="Record deleted successfully"})).catch((function(e){return console.log(e)}))},handleResponse:function(e){this.snackbar=!0,this.response=e,this.dialog=!0,this.getDataFromApi()}}},R=r(60),component=Object(R.a)(P,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(x.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),e.loading?t("Preloader"):t("div",[t(x.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(r){var o=r.attrs;return[t(n.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",o,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n      "+e._s(e.snackText)+"\n\n      ")]),e._v(" "),t(o.a,{attrs:{elevation:"0"}},[t(C.a,{staticClass:"mb-2",attrs:{dense:"",flat:""}},[t(O.b,[t("span",[e._v(e._s(e.Model)+" ")])]),e._v(" "),t("span",[t(n.a,{staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:"",title:"Reload"}},[t(c.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:e.getDataFromApi}},[e._v("mdi-reload")])],1)],1),e._v(" "),t(k.a),e._v(" "),t("ExportData",{attrs:{data:e.exportData()}}),e._v(" "),t("CommunityMaidCreate",{key:e.generateRandomId(),on:{response:e.handleResponse}})],1),e._v(" "),t(d.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers,items:e.data,"model-value":"data.id",loading:e.loadinglinear,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]},"server-items-length":e.totalRowsCount},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.full_name",fn:function(r){var n=r.item;r.index;return[t(y.a,{attrs:{"no-gutters":""}},[t(l.a,{staticStyle:{padding:"5px","padding-left":"0px",width:"50px","max-width":"50px"}},[t(m.a,{staticStyle:{"border-radius":"50%",height:"50px",width:"50px","max-width":"50px"},attrs:{src:n.profile_picture?n.profile_picture:"/no-profile-image.jpg"}})],1),e._v(" "),t(l.a,{staticStyle:{padding:"10px"}},[t("strong",[e._v(" "+e._s(n.full_name))]),e._v(" "),t("p",[e._v("\n                "+e._s(n.phone_number)),n.phone_number?t("br"):e._e(),e._v(e._s(n.nationality)+"\n              ")])])],1)]}},{key:"item.options",fn:function(r){var o=r.item;return[t(h.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[t(n.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",l,!1),o),[t(c.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(_.a,{attrs:{width:"150",dense:""}},[t(f.a,[t(v.c,{staticStyle:{cursor:"pointer"}},[t("CommunityMaidAssignTanents",{attrs:{id:o.id},on:{response:e.handleResponse}})],1)],1),e._v(" "),t(f.a,[t(v.c,{staticStyle:{cursor:"pointer"}},[t("CommunityMaidSingle",{attrs:{item:o},on:{response:e.handleResponse}})],1)],1),e._v(" "),t(f.a,[t(v.c,{staticStyle:{cursor:"pointer"}},[t("CommunityMaidEdit",{attrs:{item:o},on:{response:e.handleResponse}})],1)],1),e._v(" "),t(f.a,{on:{click:function(t){return e.deleteItem(o)}}},[t(v.c,{staticStyle:{cursor:"pointer"}},[t(c.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                  Delete\n                ")],1)],1)],1)],1)]}}],null,!1,408899580)})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ExportData:r(1026).default,CommunityMaidCreate:r(1354).default,CommunityMaidAssignTanents:r(1355).default,CommunityMaidSingle:r(1570).default,CommunityMaidEdit:r(1358).default,Preloader:r(924).default})},886:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return l}));var n=r(99),o=r(1),l=Object(o.k)("v-toolbar__title"),d=Object(o.k)("v-toolbar__items");n.a},924:function(e,t,r){"use strict";r.r(t);var n=r(219),o=r(60),component=Object(o.a)({},(function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[e(n.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);