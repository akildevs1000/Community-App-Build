(window.webpackJsonp=window.webpackJsonp||[]).push([[248,241],{1007:function(e,t,r){"use strict";r.r(t);var o=r(117),n=r(116),l=r(219),d=(r(33),{props:["defaultImage"],data:function(){return{imagePreview:"/no-profile-image.jpg",upload:{name:""}}},created:function(){this.imagePreview=this.defaultImage||"/no-profile-image.jpg"},methods:{onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.attachment_input.files;if(r&&r[0]){var o=new FileReader;o.onload=function(e){t.imagePreview=e.target.result},o.readAsDataURL(r[0]),this.$emit("uploaded",r[0])}}}}),c=r(60),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t(l.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto",border:"1px solid #6946dd"},attrs:{src:e.imagePreview}}),e._v(" "),t(o.a,{staticClass:"mt-2",attrs:{outlined:"",block:"",color:"primary",small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n    "),t(n.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}})],1)}),[],!1,null,null,null);t.default=component.exports},1386:function(e,t,r){"use strict";r.r(t);var o,n=r(921),l=r(117),d=r(539),c=r(903),m=r(1597),_=r(361),f=r(889),h=r(116),v=r(888),y=r(1001),x=r(1e3),j=r(538),O=r(1025),k=r(1026),w=r(990),C=r(1027),$=r(221),R=r(17),I=r(2),S=(r(11),r(6),r(543),r(80),r(103),r(31),r(58),r(57),r(222),r(33),r(9),r(69),r(925),r(936)),D={components:{VueCropper:r.n(S).a},data:function(){var e;return e={parkings:[],room_categories:[],room_sub_categories:[],filtered_room_sub_categories:[],disabled:!1,step:1,payload:{term:"Long Term",gender:"Male",full_name:"",phone_number:"",floor_id:"",room_id:"",start_date:"",end_date:""},documents:[{label:"Passport",key:"passport_doc"},{label:"ID",key:"id_doc"},{label:"Contract",key:"contract_doc"},{label:"Ejari",key:"ejari_doc"},{label:"License",key:"license_doc"},{label:"Other",key:"others_doc"}],vehicles:[{car_number:"",car_brand:"",parking_id:""}],imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(I.a)(e,"tab","0"),Object(I.a)(e,"employeeId",0),Object(I.a)(e,"employeeObject",{}),Object(I.a)(e,"attrs",[]),Object(I.a)(e,"dialog",!1),Object(I.a)(e,"editDialog",!1),Object(I.a)(e,"viewDialog",!1),Object(I.a)(e,"selectedFile",""),Object(I.a)(e,"dialog",!1),Object(I.a)(e,"memberdialog",!1),Object(I.a)(e,"viewMemberdialog",!1),Object(I.a)(e,"m",!1),Object(I.a)(e,"expand",!1),Object(I.a)(e,"expand2",!1),Object(I.a)(e,"boilerplate",!1),Object(I.a)(e,"right",!0),Object(I.a)(e,"rightDrawer",!1),Object(I.a)(e,"drawer",!0),Object(I.a)(e,"tab",null),Object(I.a)(e,"selectedItem",1),Object(I.a)(e,"on",""),Object(I.a)(e,"files",""),Object(I.a)(e,"search",""),Object(I.a)(e,"loading",!1),Object(I.a)(e,"next_page_url",""),Object(I.a)(e,"prev_page_url",""),Object(I.a)(e,"current_page",1),Object(I.a)(e,"per_page",1e3),Object(I.a)(e,"ListName",""),Object(I.a)(e,"color","background"),Object(I.a)(e,"response",""),Object(I.a)(e,"snackbar",!1),Object(I.a)(e,"btnLoader",!1),Object(I.a)(e,"max_employee",0),Object(I.a)(e,"employee",{title:"Mr",display_name:"",employee_id:"",system_user_id:""}),Object(I.a)(e,"upload",{name:""}),Object(I.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(I.a)(e,"options",{}),Object(I.a)(e,"Model","Tanent"),Object(I.a)(e,"endpoint","tanent"),Object(I.a)(e,"search",""),Object(I.a)(e,"snackbar",!1),Object(I.a)(e,"ids",[]),Object(I.a)(e,"loading",!1),Object(I.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(I.a)(e,"editedIndex",-1),Object(I.a)(e,"editedItem",{name:""}),Object(I.a)(e,"defaultItem",{name:""}),Object(I.a)(e,"response",""),Object(I.a)(e,"data",[]),Object(I.a)(e,"errors",[]),Object(I.a)(e,"designations",[]),Object(I.a)(e,"roles",[]),Object(I.a)(e,"employees",[]),Object(I.a)(e,"department_filter_id",""),Object(I.a)(e,"dialogVisible",!1),Object(I.a)(e,"formAction","Create"),Object(I.a)(e,"date",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(I.a)(e,"menu",!1),Object(I.a)(e,"menu2",!1),Object(I.a)(e,"menu3",!1),Object(I.a)(e,"floors",[]),Object(I.a)(e,"rooms",[]),Object(I.a)(e,"member",{full_name:null,phone_number:null,age:null,relation:null,tanent_id:0}),e},created:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function t(){var r,o,n,l,d,c,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,e.boilerplate=!0,r={params:{company_id:e.$auth.user.company_id}},t.next=5,e.getFloors();case 5:return t.next=7,e.$axios.get("room-category-list",r);case 7:return o=t.sent,n=o.data,e.room_categories=n,t.next=12,e.$axios.get("room-sub-category-list",r);case 12:return l=t.sent,d=l.data,e.room_sub_categories=d,t.next=17,e.$axios.get("parking-list");case 17:c=t.sent,data=c.data,e.parkings=data;case 20:case"end":return t.stop()}}),t)})))()},methods:(o={getRelatedChildDetails:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setRoomSubCategories(e.payload.room_category_id);case 2:case"end":return t.stop()}}),t)})))()},setRoomSubCategories:function(e){var t=this;return Object(R.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.filtered_room_sub_categories=t.room_sub_categories.filter((function(t){return t.room_category_id==e})),r.next=3,t.getFloorByCategory(e);case 3:case"end":return r.stop()}}),r)})))()},getFloorByCategory:function(e){var t=this;return Object(R.a)(regeneratorRuntime.mark((function r(){var o,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$axios.get("room-floor-by-category/".concat(e));case 2:o=r.sent,data=o.data,t.floors=data,t.getRoomsByFloorId(t.payload);case 6:case"end":return r.stop()}}),r)})))()},updatePayload:function(e,t){this.payload[e]=t},generateRandomId:function(){return Math.floor(Math.random()*Math.pow(10,8)).toString().padStart(8,"0")},handleAttachment:function(e){this.payload.profile_picture=e},nextStep:function(){this.step++},prevStep:function(){this.step--},getRoomNumber:function(e){var t=this.rooms.find((function(t){return t.id==e})).room_number;this.payload.room_number=t||0},getFloors:function(){var e=this;return Object(R.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("floor",{params:{company_id:e.$auth.user.company_id}});case 2:r=t.sent,o=r.data,e.floors=o.data;case 5:case"end":return t.stop()}}),t)})))()},getRoomsByFloorId:function(e){var t=this;return Object(R.a)(regeneratorRuntime.mark((function r(){var o,n,l,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.floor_id,n=e.room_category_id,r.next=3,t.$axios.get("room-by-floor-id",{params:{company_id:t.$auth.user.company_id,floor_id:o,room_category_id:n}});case 3:l=r.sent,data=l.data,t.rooms=data;case 6:case"end":return r.stop()}}),r)})))()},closeViewDialog:function(){this.viewDialog=!1},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},closePopup:function(){this.$refs.otherDoc_input.value=null,this.dialogCropping=!1},close:function(){this.dialog=!1,this.errors=[],setTimeout((function(){}),300)},can:function(e){return this.$pagePermission.can(e,this)},addItem:function(){this.vehicles.push({car_number:"",car_brand:"",parking_id:""})},deleteItem:function(e){this.vehicles.splice(e,1)}},Object(I.a)(o,"close",(function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)})),Object(I.a)(o,"previewImage",(function(e){var t=this,r=this.payload.profile_picture;if(r){var o=new FileReader;o.onload=function(e){t.imagePreview=e.target.result},o.readAsDataURL(r)}else this.imagePreview=null})),Object(I.a)(o,"previewMemberImage",(function(e){var t=this,r=this.member.profile_picture;if(r){var o=new FileReader;o.onload=function(e){t.imageMemberPreview=e.target.result},o.readAsDataURL(r)}else this.imageMemberPreview=null})),Object(I.a)(o,"others_doc",(function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.otherDoc_input.files;if(r[0].size>1048576)return e.preventDefault(),void(this.errors.profile_picture=["File too big (> 1MB). Upload less than 1MB"]);if(r&&r[0]){var o=new FileReader;o.onload=function(e){t.selectedFile=event.target.result,t.$refs.cropper.replace(t.selectedFile)},o.readAsDataURL(r[0]),this.$emit("input",r[0]),this.dialogCropping=!0}})),Object(I.a)(o,"mapper",(function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return this.payload.profile_picture&&t.append("profile_picture",this.upload.name),this.payload.passport_doc&&t.append("passport_doc",this.payload.passport_doc.name),t.append("company_id",this.$auth.user.company_id),t})),Object(I.a)(o,"tanentValidate",(function(){var e=this;this.$axios.post(this.endpoint+"-validate",this.mapper(Object.assign(this.payload))).then((function(t){t.data;e.errors=[],e.nextStep()})).catch((function(t){var r=t.response;e.handleErrorResponse(r)}))})),Object(I.a)(o,"vehicleValidate",(function(){var e=this;this.$axios.post("vehicle-validate",{vehicles:this.vehicles}).then((function(t){t.data;e.errors=[],e.nextStep()})).catch((function(t){var r=t.response;e.handleErrorResponse(r)}))})),Object(I.a)(o,"submit",(function(){var e=this;this.vehicleValidate(),this.$axios.post(this.endpoint,this.mapper(Object.assign(this.payload))).then((function(t){var data=t.data;e.storeVehicle(data.record.id)})).catch((function(t){var r=t.response;e.handleErrorResponse(r)}))})),Object(I.a)(o,"storeVehicle",(function(e){var t=this,r=[];this.vehicles.forEach((function(t){var o=t.car_number,n=t.car_brand,l=t.parking_id;r.push({tanent_id:e,car_brand:n,car_number:o,parking_id:l})})),this.$axios.post("vehicle-store",{vehicles:r}).then((function(e){e.data;t.errors=[],t.handleSuccessResponse("Tanent inserted successfully")})).catch((function(e){var r=e.response;t.handleErrorResponse(r)}))})),Object(I.a)(o,"handleSuccessResponse",(function(e){this.errors=[],this.dialog=!1,this.$emit("success",e)})),Object(I.a)(o,"handleErrorResponse",(function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,r=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=r)})),o)},F=r(60),component=Object(F.a)(D,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",n,!1),o),[t(l.a,{staticClass:"primary",attrs:{dense:"",small:"",text:"",title:"Add Company"}},[e._v("\n        Create Tanent\n        "),t(h.a,{attrs:{right:"",dark:""}},[e._v("mdi-plus-circle-outline")])],1)],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(O.a,{attrs:{horizontal:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[t(w.a,[t(C.a,{attrs:{complete:e.step>1,step:"1",editable:""}},[e._v("\n        Basic Info\n      ")]),e._v(" "),t(f.a),e._v(" "),t(C.a,{attrs:{complete:e.step>2,step:"2",editable:""}},[e._v("\n        Vehicle Info\n      ")]),e._v(" "),t(f.a)],1),e._v(" "),t(k.a,{attrs:{step:"1"}},[t(j.a,[t(d.a,{attrs:{cols:"3"}},[t(j.a,[t(d.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("SnippetsUploadAttachment",{attrs:{defaultImage:e.setImagePreview},on:{uploaded:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)]),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t($.a,{staticClass:"text-center",attrs:{label:"RFID",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:e.payload.rfid,callback:function(t){e.$set(e.payload,"rfid",t)},expression:"payload.rfid"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t($.a,{staticClass:"text-center",attrs:{label:"PIN",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.pin,"error-messages":e.errors&&e.errors.pin?e.errors.pin[0]:""},model:{value:e.payload.pin,callback:function(t){e.$set(e.payload,"pin",t)},expression:"payload.pin"}})],1)],1)],1),e._v(" "),t(d.a,{attrs:{cols:"9"}},[t(j.a,{staticClass:"mt-4"},[t(d.a,{attrs:{cols:"6"}},[t($.a,{staticClass:"text-center",attrs:{label:"First Name",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.payload.first_name,callback:function(t){e.$set(e.payload,"first_name",t)},expression:"payload.first_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t($.a,{staticClass:"text-center",attrs:{label:"Last Name",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.payload.last_name,callback:function(t){e.$set(e.payload,"last_name",t)},expression:"payload.last_name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Term",outlined:"",readonly:e.disabled,items:["Long Term","Short Term"],dense:"","hide-details":!e.errors.term,"error-messages":e.errors&&e.errors.term?e.errors.term[0]:""},model:{value:e.payload.term,callback:function(t){e.$set(e.payload,"term",t)},expression:"payload.term"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(x.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:e.payload.gender,callback:function(t){e.$set(e.payload,"gender",t)},expression:"payload.gender"}},[t(y.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),t(y.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),t(y.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Room Category",outlined:"",disabled:e.disabled,items:e.room_categories,dense:"","item-text":"name","item-value":"id","hide-details":!e.errors.room_category_id,"error-messages":e.errors&&e.errors.room_category_id?e.errors.room_category_id[0]:""},on:{change:e.getRelatedChildDetails},model:{value:e.payload.room_category_id,callback:function(t){e.$set(e.payload,"room_category_id",t)},expression:"payload.room_category_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Room Sub Category",outlined:"",disabled:e.disabled,items:e.filtered_room_sub_categories,dense:"","item-text":"name","item-value":"id","hide-details":!e.errors.room_sub_category_id,"error-messages":e.errors&&e.errors.room_sub_category_id?e.errors.room_sub_category_id[0]:""},model:{value:e.payload.room_sub_category_id,callback:function(t){e.$set(e.payload,"room_sub_category_id",t)},expression:"payload.room_sub_category_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Floor Number",outlined:"",readonly:e.disabled,items:e.floors,dense:"","item-text":"floor_number","item-value":"id","hide-details":!e.errors.floor_id,"error-messages":e.errors&&e.errors.floor_id?e.errors.floor_id[0]:""},on:{change:function(t){return e.getRoomsByFloorId(e.payload)}},model:{value:e.payload.floor_id,callback:function(t){e.$set(e.payload,"floor_id",t)},expression:"payload.floor_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(n.a,{attrs:{label:"Room",outlined:"",readonly:e.disabled,items:e.rooms,dense:"","item-text":"room_number","item-value":"id","hide-details":!e.errors.room_id,"error-messages":e.errors&&e.errors.room_id?e.errors.room_id[0]:""},on:{change:function(t){return e.getRoomNumber(e.payload.room_id)}},model:{value:e.payload.room_id,callback:function(t){e.$set(e.payload,"room_id",t)},expression:"payload.room_id"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t($.a,{staticClass:"text-center",attrs:{label:"Email",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(v.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t($.a,e._g(e._b({attrs:{label:"Date of Birth","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.date_of_birth,"error-messages":e.errors&&e.errors.date_of_birth?e.errors.date_of_birth[0]:""},model:{value:e.payload.date_of_birth,callback:function(t){e.$set(e.payload,"date_of_birth",t)},expression:"payload.date_of_birth"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu3,callback:function(t){e.menu3=t},expression:"menu3"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu3=!1}},model:{value:e.payload.date_of_birth,callback:function(t){e.$set(e.payload,"date_of_birth",t)},expression:"payload.date_of_birth"}})],1)],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t($.a,{staticClass:"text-center",attrs:{label:"Phone Number",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t($.a,{staticClass:"text-center",attrs:{label:"Whatsapp Number (optional)",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.whatsapp_number,"error-messages":e.errors&&e.errors.whatsapp_number?e.errors.whatsapp_number[0]:""},model:{value:e.payload.whatsapp_number,callback:function(t){e.$set(e.payload,"whatsapp_number",t)},expression:"payload.whatsapp_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t($.a,{staticClass:"text-center",attrs:{label:"Nationality",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:e.payload.nationality,callback:function(t){e.$set(e.payload,"nationality",t)},expression:"payload.nationality"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t($.a,{staticClass:"text-center",attrs:{label:"Address",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.address,"error-messages":e.errors&&e.errors.address?e.errors.address[0]:""},model:{value:e.payload.address,callback:function(t){e.$set(e.payload,"address",t)},expression:"payload.address"}})],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(v.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t($.a,e._g(e._b({attrs:{label:"Start Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.start_date,"error-messages":e.errors&&e.errors.start_date?e.errors.start_date[0]:""},model:{value:e.payload.start_date,callback:function(t){e.$set(e.payload,"start_date",t)},expression:"payload.start_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu=!1}},model:{value:e.payload.start_date,callback:function(t){e.$set(e.payload,"start_date",t)},expression:"payload.start_date"}})],1)],1),e._v(" "),t(d.a,{attrs:{cols:"6"}},[t(v.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t($.a,e._g(e._b({attrs:{label:"End Date","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.end_date,"error-messages":e.errors&&e.errors.end_date?e.errors.end_date[0]:""},model:{value:e.payload.end_date,callback:function(t){e.$set(e.payload,"end_date",t)},expression:"payload.end_date"}},"v-text-field",n,!1),o))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu2=!1}},model:{value:e.payload.end_date,callback:function(t){e.$set(e.payload,"end_date",t)},expression:"payload.end_date"}})],1)],1),e._v(" "),t(d.a,{staticClass:"my-1",attrs:{cols:"6"}},["Edit"==e.formAction?t(l.a,{staticClass:"primary",on:{click:e.update_data}},[e._v("Update")]):e._e()],1),e._v(" "),t(d.a,{staticClass:"text-right my-1",attrs:{cols:"6"}},[t(l.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),"Create"==e.formAction?t(l.a,{staticClass:"primary",on:{click:e.tanentValidate}},[e._v("Next")]):e._e(),e._v(" "),"Edit"==e.formAction?t(l.a,{staticClass:"primary",on:{click:e.tanentUpdateValidate}},[e._v("Next")]):e._e()],1)],1)],1)],1)],1),e._v(" "),t(k.a,{attrs:{step:"2"}},[t(c.a,[e._l(e.vehicles,(function(r,o){return t(j.a,{key:o,staticClass:"mt-0"},[t(d.a,{attrs:{cols:"3"}},[t($.a,{staticClass:"text-center",attrs:{label:"Car Number",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.car_number,"error-messages":e.errors&&e.errors.car_number?e.errors.car_number[0]:""},model:{value:r.car_number,callback:function(t){e.$set(r,"car_number",t)},expression:"vehicles.car_number"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t($.a,{staticClass:"text-center",attrs:{label:"Car Brand",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.car_brand,"error-messages":e.errors&&e.errors.car_brand?e.errors.car_brand[0]:""},model:{value:r.car_brand,callback:function(t){e.$set(r,"car_brand",t)},expression:"vehicles.car_brand"}})],1),e._v(" "),t(d.a,{attrs:{cols:"3"}},[t(n.a,{attrs:{label:"Parking Number",outlined:"",readonly:e.disabled,items:e.parkings,dense:"","item-text":"parking_number","item-value":"id","hide-details":!e.errors.parking_number,"error-messages":e.errors&&e.errors.parking_number?e.errors.parking_number[0]:""},model:{value:r.parking_id,callback:function(t){e.$set(r,"parking_id",t)},expression:"vehicles.parking_id"}})],1)],1)})),e._v(" "),t(j.a,{staticClass:"mt-1",attrs:{"no-gutters":""}},[t(d.a,{staticClass:"text-right",attrs:{cols:"9"}},[t(h.a,{on:{click:e.addItem}},[e._v("mdi-plus-circle-outline")]),e._v(" "),t(h.a,{on:{click:function(t){return e.deleteItem(e.index)}}},[e._v("mdi-delete")])],1)],1)],2),e._v(" "),t(d.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(l.a,{on:{click:function(t){e.dialog=!1}}},[e._v("close")]),e._v(" "),"Create"==e.formAction?t(l.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")]):"Edit"==e.formAction?t(l.a,{staticClass:"primary",on:{click:e.update_data}},[e._v("Update")]):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsUploadAttachment:r(1007).default})}}]);