(window.webpackJsonp=window.webpackJsonp||[]).push([[246,241],{1007:function(e,t,r){"use strict";r.r(t);var o=r(117),n=r(116),l=r(219),d=(r(33),{props:["defaultImage"],data:function(){return{imagePreview:"/no-profile-image.jpg",upload:{name:""}}},created:function(){this.imagePreview=this.defaultImage||"/no-profile-image.jpg"},methods:{onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.attachment_input.files;if(r&&r[0]){var o=new FileReader;o.onload=function(e){t.imagePreview=e.target.result},o.readAsDataURL(r[0]),this.$emit("uploaded",r[0])}}}}),c=r(60),component=Object(c.a)(d,(function(){var e=this,t=e._self._c;return t("div",[t(l.a,{staticStyle:{width:"150px",height:"150px","border-radius":"50%",margin:"0 auto",border:"1px solid #6946dd"},attrs:{src:e.imagePreview}}),e._v(" "),t(o.a,{staticClass:"mt-2",attrs:{outlined:"",block:"",color:"primary",small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n    "),t(n.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}})],1)}),[],!1,null,null,null);t.default=component.exports},1387:function(e,t,r){"use strict";r.r(t);var o=r(921),n=r(117),l=r(138),d=r(79),c=r(539),m=r(903),_=r(361),y=r(116),f=r(1001),h=r(1e3),v=r(538),j=r(221),O=r(17),x=r(2),k=(r(33),r(69),r(925),r(936)),w={props:["item"],components:{VueCropper:r.n(k).a},data:function(){var e;return e={parkings:[],room_categories:[],room_sub_categories:[],filtered_room_sub_categories:[],disabled:!1,step:1,payload:{term:"Long Term",gender:"Male",full_name:"",phone_number:"",floor_id:"",room_id:"",start_date:"",end_date:""},imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(x.a)(e,"tab","0"),Object(x.a)(e,"employeeId",0),Object(x.a)(e,"employeeObject",{}),Object(x.a)(e,"attrs",[]),Object(x.a)(e,"dialog",!1),Object(x.a)(e,"editDialog",!1),Object(x.a)(e,"viewDialog",!1),Object(x.a)(e,"selectedFile",""),Object(x.a)(e,"dialog",!1),Object(x.a)(e,"memberdialog",!1),Object(x.a)(e,"viewMemberdialog",!1),Object(x.a)(e,"m",!1),Object(x.a)(e,"expand",!1),Object(x.a)(e,"expand2",!1),Object(x.a)(e,"boilerplate",!1),Object(x.a)(e,"right",!0),Object(x.a)(e,"rightDrawer",!1),Object(x.a)(e,"drawer",!0),Object(x.a)(e,"tab",null),Object(x.a)(e,"selectedItem",1),Object(x.a)(e,"on",""),Object(x.a)(e,"files",""),Object(x.a)(e,"search",""),Object(x.a)(e,"loading",!1),Object(x.a)(e,"next_page_url",""),Object(x.a)(e,"prev_page_url",""),Object(x.a)(e,"current_page",1),Object(x.a)(e,"per_page",1e3),Object(x.a)(e,"ListName",""),Object(x.a)(e,"color","background"),Object(x.a)(e,"response",""),Object(x.a)(e,"snackbar",!1),Object(x.a)(e,"btnLoader",!1),Object(x.a)(e,"max_employee",0),Object(x.a)(e,"upload",{name:""}),Object(x.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(x.a)(e,"options",{}),Object(x.a)(e,"Model","Tanent"),Object(x.a)(e,"endpoint","tanent"),Object(x.a)(e,"search",""),Object(x.a)(e,"snackbar",!1),Object(x.a)(e,"ids",[]),Object(x.a)(e,"loading",!1),Object(x.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(x.a)(e,"editedIndex",-1),Object(x.a)(e,"editedItem",{name:""}),Object(x.a)(e,"defaultItem",{name:""}),Object(x.a)(e,"response",""),Object(x.a)(e,"data",[]),Object(x.a)(e,"errors",[]),Object(x.a)(e,"designations",[]),Object(x.a)(e,"roles",[]),Object(x.a)(e,"employees",[]),Object(x.a)(e,"department_filter_id",""),Object(x.a)(e,"dialogVisible",!1),Object(x.a)(e,"formAction","Create"),Object(x.a)(e,"date",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(x.a)(e,"menu",!1),Object(x.a)(e,"menu2",!1),Object(x.a)(e,"menu3",!1),Object(x.a)(e,"floors",[]),Object(x.a)(e,"rooms",[]),Object(x.a)(e,"member",{full_name:null,phone_number:null,age:null,relation:null,tanent_id:0}),Object(x.a)(e,"member_types",[]),e},created:function(){var e=this;return Object(O.a)(regeneratorRuntime.mark((function t(){var r,o,n,l,d,c,data,m,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!1,e.boilerplate=!0,r={params:{company_id:e.$auth.user.company_id}},t.next=5,e.$axios.get("room-category-list",r);case 5:return o=t.sent,n=o.data,e.room_categories=n,t.next=10,e.$axios.get("room-sub-category-list",r);case 10:return l=t.sent,d=l.data,e.room_sub_categories=d,t.next=15,e.$axios.get("parking-list");case 15:return c=t.sent,data=c.data,e.parkings=data,t.next=20,e.$axios.get("get_member_types");case 20:m=t.sent,(_=m.data).shift(),e.member_types=_,e.payload.parent_id=e.item.tanent_id,e.payload.system_user_id=e.item.system_user_id;case 26:case"end":return t.stop()}}),t)})))()},methods:{handleAttachment:function(e){this.payload.profile_picture=e},mapper:function(e){var t=new FormData;for(var r in e)t.append(r,e[r]);return this.payload.profile_picture&&t.append("profile_picture",this.upload.name),t.append("company_id",this.$auth.user.company_id),t},submit:function(){var e=this;this.$axios.post("add-member",this.mapper(Object.assign(this.payload))).then((function(t){t.data;e.errors=[],e.handleSuccessResponse("Tanent inserted successfully")})).catch((function(t){var r=t.response;e.handleErrorResponse(r)}))},handleSuccessResponse:function(e){this.errors=[],this.dialog=!1,this.$emit("success",e)},handleErrorResponse:function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,r=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=r)}}},C=r(60),component=Object(C.a)(w,(function(){var e=this,t=e._self._c;return t(_.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,n=r.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",n,!1),o),[t(y.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-account ")]),e._v("\n      Add Member(s)\n    ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(l.a,[t(d.d,[e._v("Add Member")]),e._v(" "),t(m.a,[t(v.a,[t(c.a,{attrs:{cols:"3"}},[t(v.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("SnippetsUploadAttachment",{attrs:{defaultImage:e.setImagePreview},on:{uploaded:e.handleAttachment}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)])],1)],1),e._v(" "),t(c.a,{attrs:{cols:"9"}},[t(v.a,[t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"Tanent Ref #",disabled:!0,dense:"",outlined:"","hide-details":!e.errors.parent_id,"error-messages":e.errors&&e.errors.parent_id?e.errors.parent_id[0]:""},model:{value:e.payload.parent_id,callback:function(t){e.$set(e.payload,"parent_id",t)},expression:"payload.parent_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"Device User Id",readonly:!0,dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.payload.system_user_id,callback:function(t){e.$set(e.payload,"system_user_id",t)},expression:"payload.system_user_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"First Name",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.payload.first_name,callback:function(t){e.$set(e.payload,"first_name",t)},expression:"payload.first_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"Last Name",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.payload.last_name,callback:function(t){e.$set(e.payload,"last_name",t)},expression:"payload.last_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"Age",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.age,"error-messages":e.errors&&e.errors.age?e.errors.age[0]:""},model:{value:e.payload.age,callback:function(t){e.$set(e.payload,"age",t)},expression:"payload.age"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(o.a,{attrs:{label:"Member Type",outlined:"",readonly:e.disabled,items:e.member_types,dense:"","hide-details":!e.errors.member_type,"error-messages":e.errors&&e.errors.member_type?e.errors.member_type[0]:""},model:{value:e.payload.member_type,callback:function(t){e.$set(e.payload,"member_type",t)},expression:"payload.member_type"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"Nationality",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.nationality,"error-messages":e.errors&&e.errors.nationality?e.errors.nationality[0]:""},model:{value:e.payload.nationality,callback:function(t){e.$set(e.payload,"nationality",t)},expression:"payload.nationality"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(h.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:e.payload.gender,callback:function(t){e.$set(e.payload,"gender",t)},expression:"payload.gender"}},[t(f.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),t(f.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),t(f.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"RFID",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.rfid,"error-messages":e.errors&&e.errors.rfid?e.errors.rfid[0]:""},model:{value:e.payload.rfid,callback:function(t){e.$set(e.payload,"rfid",t)},expression:"payload.rfid"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"PIN",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.pin,"error-messages":e.errors&&e.errors.pin?e.errors.pin[0]:""},model:{value:e.payload.pin,callback:function(t){e.$set(e.payload,"pin",t)},expression:"payload.pin"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"Phone Number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1)],1)],1)],1),e._v(" "),t(v.a,[t(c.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(n.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(n.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SnippetsUploadAttachment:r(1007).default})}}]);