(window.webpackJsonp=window.webpackJsonp||[]).push([[89,37,75,237],{1e3:function(e,t,n){"use strict";n(12),n(14),n(11),n(6),n(20),n(9),n(21);var r=n(100),o=n(2),l=(n(33),n(958),n(226)),c=n(63),d=n(81),m=n(121),h=n(29),f=n(122),v=n(367),_=n(26),y=n(364),x=n(1),O=n(8),S=n(71),j=["title"];function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=Object(O.a)(m.a,h.a,v.a,Object(f.a)("radioGroup"),_.a);t.a=C.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return k(k({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){if(!this.isDisabled)return y.a.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return d.a.options.computed.computedId.call(this)},hasLabel:d.a.options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return y.a.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(e){return y.a.options.methods.genInput.call(this,"radio",e)},genLabel:function(){return this.hasLabel?this.$createElement(l.a,{on:{click:y.b},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(x.t)(this,"label")||this.label):null},genRadio:function(){var e=this.attrs$,t=(e.title,Object(r.a)(e,j));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(k({name:this.computedName,value:this.value},t)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(e){return e("div",{staticClass:"v-radio",class:this.classes,on:Object(S.c)({click:this.onChange},this.listeners$),attrs:{title:this.attrs$.title}},[this.genRadio(),this.genLabel()])}})},1023:function(e,t,n){var content=n(1046);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("749c6810",content,!0,{sourceMap:!1})},1045:function(e,t,n){"use strict";n(1023)},1046:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,"input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),r.locals={},e.exports=r},1053:function(e,t,n){"use strict";n.r(t);var r=n(117),o=n(138),l=n(79),c=n(538),d=n(902),m=n(1585),h=n(360),f=n(116),v=n(887),_=n(1e3),y=n(999),x=n(537),O=n(919),S=n(359),j=n(221),I=n(99),k=n(86),C=(n(37),n(17)),w=n(2),D=(n(69),n(542),new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substring(0,10)),$=String((new Date).getHours()).padStart(2,"0")+":"+String((new Date).getMinutes()).padStart(2,"0"),P={props:["item","visitor_type"],data:function(){var e;return e={disabled:!1,step:1,payload:{company_id:0,visit_from:D,visit_to:D,time_in:$,time_out:$,withOutHost:!0,host_flat_number:null,host_company_name:null,host_name:null,host_phone_number:null,host_email:null,note:null,timezone_id:1,purpose_id:1,first_name:null,last_name:null,gender:"Male",phone_number:null,email:null,visitor_company_name:null,status_id:1,date:D,updated_by:1,status_phone_number:null,company_name:null,reason:null,host_company_id:0},imagePreview:"/no-profile-image.jpg",setImagePreview:null,imageMemberPreview:"/no-profile-image.jpg",tab:null,totalRowsCount:0,filters:{},isFilter:!1,sortBy:"id",sortDesc:!1,snack:!1,snackColor:"",snackText:"",loadinglinear:!0,displayErrormsg:!1,image:"",mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,tabMenu:[]},Object(w.a)(e,"tab","0"),Object(w.a)(e,"employeeId",0),Object(w.a)(e,"employeeObject",{}),Object(w.a)(e,"attrs",[]),Object(w.a)(e,"dialog",!1),Object(w.a)(e,"editDialog",!1),Object(w.a)(e,"viewDialog",!1),Object(w.a)(e,"selectedFile",""),Object(w.a)(e,"dialog",!1),Object(w.a)(e,"m",!1),Object(w.a)(e,"right",!0),Object(w.a)(e,"rightDrawer",!1),Object(w.a)(e,"drawer",!0),Object(w.a)(e,"tab",null),Object(w.a)(e,"selectedItem",1),Object(w.a)(e,"on",""),Object(w.a)(e,"files",""),Object(w.a)(e,"search",""),Object(w.a)(e,"loading",!1),Object(w.a)(e,"next_page_url",""),Object(w.a)(e,"prev_page_url",""),Object(w.a)(e,"current_page",1),Object(w.a)(e,"per_page",1e3),Object(w.a)(e,"ListName",""),Object(w.a)(e,"color","background"),Object(w.a)(e,"response",""),Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"btnLoader",!1),Object(w.a)(e,"max_employee",0),Object(w.a)(e,"employee",{title:"Mr",display_name:"",employee_id:"",system_user_id:""}),Object(w.a)(e,"upload",{name:""}),Object(w.a)(e,"pagination",{current:1,total:0,per_page:10}),Object(w.a)(e,"options",{}),Object(w.a)(e,"Model","Tanent"),Object(w.a)(e,"endpoint","tanent"),Object(w.a)(e,"search",""),Object(w.a)(e,"snackbar",!1),Object(w.a)(e,"ids",[]),Object(w.a)(e,"loading",!1),Object(w.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(w.a)(e,"editedIndex",-1),Object(w.a)(e,"editedItem",{name:""}),Object(w.a)(e,"defaultItem",{name:""}),Object(w.a)(e,"response",""),Object(w.a)(e,"data",[]),Object(w.a)(e,"errors",[]),Object(w.a)(e,"designations",[]),Object(w.a)(e,"roles",[]),Object(w.a)(e,"employees",[]),Object(w.a)(e,"department_filter_id",""),Object(w.a)(e,"dialogVisible",!1),Object(w.a)(e,"formAction","Create"),Object(w.a)(e,"date",new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),Object(w.a)(e,"menu",!1),Object(w.a)(e,"menu2",!1),Object(w.a)(e,"menu3",!1),Object(w.a)(e,"floors",[]),Object(w.a)(e,"rooms",[]),Object(w.a)(e,"purposes",[]),e},created:function(){var e=this;return Object(C.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.loading=!1,e.getPurposes(),e.payload=e.item;case 3:case"end":return t.stop()}}),t)})))()},methods:{openDialogForCustom:function(e){"custom"==e&&(this.$refs.customPopup.DialogBox=!0)},handleResponse:function(e){var t=this;return Object(C.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.payload.purpose_id=e,t.getPurposes();case 2:case"end":return n.stop()}}),n)})))()},getPurposes:function(){var e=this;this.$axios.get("purpose_list",{params:{company_id:this.$auth.user.company_id,type:this.visitor_type}}).then((function(t){var data=t.data;e.purposes=data})).catch((function(e){return console.log(e)}))},handleAttachment:function(e){this.payload.profile_picture=e},can:function(e){return this.$pagePermission.can(e,this)},submit:function(){var e=this;this.$axios.post("visitor-update/".concat(this.payload.id),this.payload).then((function(t){t.data;e.handleSuccessResponse("Visitor inserted successfully")})).catch((function(t){var n=t.response;e.handleErrorResponse(n)}))},handleSuccessResponse:function(e){this.errors=[],this.dialog=!1,this.$emit("success",e)},handleErrorResponse:function(e){if(!e)return this.snackbar=!0,void(this.response="An unexpected error occurred.");var t=e.status,data=e.data,n=e.statusText;t&&422==t?this.errors=data.errors:(this.snackbar=!0,this.response=n)}}},T=(n(1045),n(60)),component=Object(T.a)(P,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{persistent:"",width:"900"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",o,!1),r),[t(f.a,{attrs:{color:"black",small:""}},[e._v("mdi-pencil")]),e._v("\n      Edit\n    ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(I.a,{attrs:{dense:"",flat:""}},[t(l.d,[e._v("Edit Visitor")]),e._v(" "),t(S.a),e._v(" "),t(f.a,{attrs:{color:"primary"},on:{click:function(t){e.dialog=!1}}},[e._v("mdi-close")])],1),e._v(" "),t(d.a,{attrs:{fluid:""}},[t(x.a,[t(c.a,{attrs:{cols:"3"}},[t(x.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-center"},[t("Camera",{ref:"CameraComponent",on:{imageSrc:function(t){e.payload.logo=t}}}),e._v(" "),e.errors&&e.errors.logo?t("span",{staticClass:"error--text mt-2"},[e._v(e._s(e.errors.logo[0]))]):e._e()],1)]),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.visitor_company_name,"error-messages":e.errors&&e.errors.visitor_company_name?e.errors.visitor_company_name[0]:"",label:"Company Name"},model:{value:e.payload.visitor_company_name,callback:function(t){e.$set(e.payload,"visitor_company_name",t)},expression:"payload.visitor_company_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.id_number,"error-messages":e.errors&&e.errors.id_number?e.errors.id_number[0]:"",label:"Emirates ID"},model:{value:e.payload.id_number,callback:function(t){e.$set(e.payload,"id_number",t)},expression:"payload.id_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:"",label:"Visitor Card Id",type:"number"},model:{value:e.payload.system_user_id,callback:function(t){e.$set(e.payload,"system_user_id",t)},expression:"payload.system_user_id"}})],1)],1)],1),e._v(" "),t(c.a,{attrs:{cols:"9"}},[t(x.a,{},[t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:"",label:"First Name"},model:{value:e.payload.first_name,callback:function(t){e.$set(e.payload,"first_name",t)},expression:"payload.first_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:"",label:"Last Name"},model:{value:e.payload.last_name,callback:function(t){e.$set(e.payload,"last_name",t)},expression:"payload.last_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{type:"number",dense:"",outlined:"","hide-details":!e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:"",label:"Phone Number"},model:{value:e.payload.phone_number,callback:function(t){e.$set(e.payload,"phone_number",t)},expression:"payload.phone_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{staticClass:"text-center",attrs:{label:"Email",readonly:e.disabled,dense:"",outlined:"","hide-details":!e.errors.email,"error-messages":e.errors&&e.errors.email?e.errors.email[0]:""},model:{value:e.payload.email,callback:function(t){e.$set(e.payload,"email",t)},expression:"payload.email"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(O.a,{attrs:{items:[{id:"",name:"Select Purpose"}].concat(Object(k.a)(e.purposes),[{id:"custom",name:"Custom"}]),dense:"",outlined:"","item-text":"name","item-value":"id","hide-details":!e.errors.purpose_id,label:"Purpose"},on:{change:function(t){return e.openDialogForCustom(e.payload.purpose_id)}},model:{value:e.payload.purpose_id,callback:function(t){e.$set(e.payload,"purpose_id",t)},expression:"payload.purpose_id"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(y.a,{staticClass:"ma-0 mt-2 px-2 pa-0",attrs:{row:"","hide-details":!e.errors.gender,"error-messages":e.errors&&e.errors.gender?e.errors.gender[0]:""},model:{value:e.payload.gender,callback:function(t){e.$set(e.payload,"gender",t)},expression:"payload.gender"}},[t(_.a,{attrs:{label:"Male",value:"Male"}}),e._v(" "),t(_.a,{attrs:{label:"Female",value:"Female"}}),e._v(" "),t(_.a,{attrs:{label:"Other",value:"Other"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(v.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(j.a,e._g(e._b({attrs:{label:"Visit From","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.visit_from,"error-messages":e.errors&&e.errors.visit_from?e.errors.visit_from[0]:""},model:{value:e.payload.visit_from,callback:function(t){e.$set(e.payload,"visit_from",t)},expression:"payload.visit_from"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu=!1}},model:{value:e.payload.visit_from,callback:function(t){e.$set(e.payload,"visit_from",t)},expression:"payload.visit_from"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(v.a,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(j.a,e._g(e._b({attrs:{label:"Visit To","append-icon":"mdi-calendar",outlined:"",dense:"",readonly:"","hide-details":!e.errors.visit_to,"error-messages":e.errors&&e.errors.visit_to?e.errors.visit_to[0]:""},model:{value:e.payload.visit_to,callback:function(t){e.$set(e.payload,"visit_to",t)},expression:"payload.visit_to"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),t(m.a,{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.menu2=!1}},model:{value:e.payload.visit_to,callback:function(t){e.$set(e.payload,"visit_to",t)},expression:"payload.visit_to"}})],1)],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t("SnippetsTimePickerV1",{attrs:{label:"Entry Time",default_value:e.payload.time_in},on:{getTime:function(t){e.payload.time_in=t}}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",sm:"6",md:"4",lg:"6"}},[t("SnippetsTimePickerV1",{attrs:{label:"Exit Time",default_value:e.payload.time_out},on:{getTime:function(t){e.payload.time_out=t}}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t("b",[e._v("Enter Host Details")])]),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_flat_number,"error-messages":e.errors&&e.errors.host_flat_number?e.errors.host_flat_number[0]:"",label:"Flat Number"},model:{value:e.payload.host_flat_number,callback:function(t){e.$set(e.payload,"host_flat_number",t)},expression:"payload.host_flat_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_company_name,"error-messages":e.errors&&e.errors.host_company_name?e.errors.host_company_name[0]:"",label:"Host Company Name"},model:{value:e.payload.host_company_name,callback:function(t){e.$set(e.payload,"host_company_name",t)},expression:"payload.host_company_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_name,"error-messages":e.errors&&e.errors.host_name?e.errors.host_name[0]:"",label:"Host Name"},model:{value:e.payload.host_name,callback:function(t){e.$set(e.payload,"host_name",t)},expression:"payload.host_name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_phone_number,"error-messages":e.errors&&e.errors.host_phone_number?e.errors.host_phone_number[0]:"",label:"Phone Number"},model:{value:e.payload.host_phone_number,callback:function(t){e.$set(e.payload,"host_phone_number",t)},expression:"payload.host_phone_number"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.host_email,"error-messages":e.errors&&e.errors.host_email?e.errors.host_email[0]:"",label:"Host Email Address"},model:{value:e.payload.host_email,callback:function(t){e.$set(e.payload,"host_email",t)},expression:"payload.host_email"}})],1),e._v(" "),t(c.a,{attrs:{cols:"6"}},[t(j.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.note,"error-messages":e.errors&&e.errors.note?e.errors.note[0]:"",label:"Note/Comment"},model:{value:e.payload.note,callback:function(t){e.$set(e.payload,"note",t)},expression:"payload.note"}})],1),e._v(" "),t(c.a,{staticClass:"text-right my-1",attrs:{cols:"12"}},[t(r.a,{on:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),t(r.a,{staticClass:"primary",on:{click:e.submit}},[e._v("Submit")])],1)],1)],1)],1)],1)],1),e._v(" "),t("CommunityPurposeCreate",{ref:"customPopup",attrs:{type:e.visitor_type},on:{success:e.handleResponse}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Camera:n(979).default,SnippetsTimePickerV1:n(960).default,CommunityPurposeCreate:n(980).default})},911:function(e,t,n){var content=n(912);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("1377ef10",content,!0,{sourceMap:!1})},912:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},920:function(e,t,n){"use strict";n(12),n(14),n(20),n(9),n(21);var r=n(2),o=(n(70),n(6),n(11),n(92),n(103),n(223),n(41),n(61),n(911),n(919)),l=n(221),c=n(71),d=n(1);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=h(h({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return h(h({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.s)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),h(h({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=h(h({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},956:function(e,t,n){var content=n(957);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("e09e1dc8",content,!0,{sourceMap:!1})},957:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".v-input--radio-group legend.v-label{cursor:text;font-size:14px;height:auto}.v-input--radio-group__input{border:none;cursor:default;display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row legend{align-self:center;display:inline-block}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column legend{padding-bottom:8px}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),r.locals={},e.exports=r},958:function(e,t,n){var content=n(959);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("78a1b980",content,!0,{sourceMap:!1})},959:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.v-radio{align-items:center;display:flex;height:auto;outline:none}.v-radio--is-disabled{cursor:default;pointer-events:none}.v-input--radio-group.v-input--radio-group--row .v-radio{margin-right:16px}",""]),r.locals={},e.exports=r},960:function(e,t,n){"use strict";n.r(t);var r=n(117),o=n(538),l=n(335),c=n(211),d=n(10),m=n(340),h=n(887),f=n(537),v=n(221),_=(n(64),n(44),n(37),{props:["label","default_value"],data:function(){return{menu:!1,selectedHour:1,selectedMinute:0,selectedPeriod:null,hours:[1,2,3,4,5,6,7,8,9,10,11,12],minutes:Array.from({length:60},(function(e,i){return i})),periods:["AM","PM"],finalTime:null}},created:function(){this.finalTime=this.default_value,this.$emit("getTime",this.default_value)},methods:{setPeriod:function(e){this.selectedHour="PM"==this.periods[e]?12+this.selectedHour:this.selectedHour-12,this.setFinalTime()},setHour:function(e){this.selectedPeriod&&"PM"==this.periods[e]?this.selectedHour=12+e:this.selectedHour=e,this.setFinalTime()},setMinute:function(e){this.selectedMinute=e,this.setFinalTime()},setFinalTime:function(){this.selectedHour>23?this.selectedHour=this.selectedHour-12:this.selectedHour<0&&(this.selectedHour=this.selectedHour+12);var e=this.selectedHour,t=this.selectedMinute;this.finalTime="".concat(e<10?"0".concat(e):e,":").concat(t<10?"0".concat(t):t),this.$emit("getTime",this.finalTime)}}}),y=n(60),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(v.a,e._g(e._b({attrs:{"append-icon":"mdi-clock-time-four-outline",outlined:"",dense:"",readonly:"","hide-details":"",label:e.label},model:{value:e.finalTime,callback:function(t){e.finalTime=t},expression:"finalTime"}},"v-text-field",o,!1),r))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),t(f.a,{staticClass:"pa-2 mx-auto",attrs:{witdh:"",align:"center","no-gutters":"",justify:"center"}},[t(o.a,[t(l.a,{staticClass:"text-center",staticStyle:{overflow:"scroll"},attrs:{outlined:"",dense:"",height:"200"}},[t("div",{staticClass:"mx-auto"},[t("b",[e._v("Hours ")])]),e._v(" "),t(m.a,{attrs:{color:"primary"}},e._l(e.hours,(function(n,i){return t(c.a,{key:i},[t(d.a,[t(d.c,{on:{click:function(t){return e.setHour(n)}}},[e._v(e._s(n))])],1)],1)})),1)],1)],1),e._v(" "),t(o.a,[t(l.a,{staticClass:"text-center",staticStyle:{overflow:"scroll"},attrs:{outlined:"",dense:"",height:"200"}},[t("div",{staticClass:"mx-auto"},[t("b",[e._v("Minutes ")])]),e._v(" "),t(m.a,{attrs:{color:"primary"}},e._l(e.minutes,(function(n,i){return t(c.a,{key:i},[t(d.a,[t(d.c,{on:{click:function(t){return e.setMinute(n)}}},[e._v(e._s(n))])],1)],1)})),1)],1)],1),e._v(" "),t(o.a,[t(l.a,{staticClass:"text-center",staticStyle:{overflow:"scroll"},attrs:{outlined:"",dense:"",height:"200"}},[t(m.a,{attrs:{color:"primary"}},[e._l(e.periods,(function(n,r){return t(c.a,{key:r},[t(d.a,[t(d.c,{on:{click:function(t){return e.setPeriod(r)}}},[t("b",[e._v("\n                  "+e._s(n)+"\n                ")])])],1)],1)})),e._v(" "),t(c.a,[t(d.a,[t(d.c,[t("b")])],1)],1),e._v(" "),t(r.a,{staticClass:"primary",attrs:{large:""},on:{click:function(t){e.menu=!1}}},[e._v("Ok")])],2)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},979:function(e,t,n){"use strict";n.r(t);var r=n(339),o=n(117),l=n(17),c=(n(6),n(9),n(69),{auth:!1,layout:"login",data:function(){return{isClicked:!1,isCamera:!1,videoStream:null}},mounted:function(){this.setupCamera()},methods:{setupCamera:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,video;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,navigator.mediaDevices.getUserMedia({video:!0});case 3:n=t.sent,(video=e.$refs.video).srcObject=n,e.videoStream=n,video.play(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error("Error accessing the camera: ",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},takeSnapshot:function(){this.isClicked=!0,this.isCamera=!this.isCamera;var video=this.$refs.video,canvas=this.$refs.canvas,e=canvas.getContext("2d");canvas.width=video.videoWidth,canvas.height=video.videoHeight,e.drawImage(video,0,0,canvas.width,canvas.height),this.$emit("imageSrc",canvas.toDataURL("image/png")),this.isCamera?video.play():this.isCamera||video.pause()},beforeDestroy:function(){this.videoStream&&this.videoStream.getTracks().forEach((function(track){return track.stop()}))}}}),d=n(60),component=Object(d.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t(r.a,{staticStyle:{border:"1px solid #6946dd"},attrs:{size:"175"}},[t("img",{directives:[{name:"show",rawName:"v-show",value:!e.isClicked,expression:"!isClicked"}],ref:"img",attrs:{src:"/no-profile-image.jpg",alt:""}}),e._v(" "),t("video",{directives:[{name:"show",rawName:"v-show",value:e.isClicked,expression:"isClicked"}],ref:"video",attrs:{width:"100%",autoplay:"",playsinline:""}}),e._v(" "),t("canvas",{ref:"canvas",staticStyle:{display:"none"}})]),e._v(" "),t("div",{staticClass:"mb-1"},[t(o.a,{staticClass:"primary mt-1",attrs:{small:"",outlined:"",dark:""},on:{click:e.takeSnapshot}},[e._v(e._s(e.isCamera?"Take Picture":"Open Camera"))])],1)],1)}),[],!1,null,null,null);t.default=component.exports},980:function(e,t,n){"use strict";n.r(t);var r=n(920),o=n(117),l=n(138),c=n(79),d=n(538),m=n(902),h=n(360),f=n(888),v=n(116),_=n(537),y=n(359),x=n(221),O=n(99),S=(n(33),{props:["buttonVisible","type"],data:function(){return{endpoint:"purpose",payload:{},errors:[],loading:!1,response:null,DialogBox:!1}},mounted:function(){this.type&&(this.payload.type=this.type)},methods:{submit:function(){var e=this;this.payload.company_id=this.$auth.user.company_id,this.$axios.post(this.endpoint,this.payload).then((function(t){var data=t.data,n="contractor"==e.type?"Activity":"Purpose";e.errors=[],e.$emit("success",e.type?data.record.id:n+" inserted successfully"),e.DialogBox=!1})).catch((function(t){var n=t.response;if(!n)return!1;var r=n.status,data=n.data,o=n.statusText;r&&422==r?e.errors=data.errors:e.response=o}))}}}),j=n(60),component=Object(j.a)(S,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{persistent:"",width:"500"},scopedSlots:e._u([e.buttonVisible?{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t("span",e._g(e._b({staticStyle:{cursor:"pointer"}},"span",l,!1),r),[t(o.a,{staticClass:"primary",attrs:{dense:"",small:"",text:"",title:"Create Tanent"}},[e._v("\n        Create "+e._s("contractor"==e.type?"Activity":"Purpose")+"\n        "),t(v.a,{attrs:{right:"",dark:""}},[e._v("mdi-plus-circle-outline")])],1)],1)]}}:null],null,!0),model:{value:e.DialogBox,callback:function(t){e.DialogBox=t},expression:"DialogBox"}},[e._v(" "),t(l.a,[t(O.a,{staticClass:"popup_background",attrs:{flat:"",dense:""}},[e._v("\n      Create "+e._s("contractor"==e.type?"Activity":"Purpose")+"\n      "),t(y.a),e._v(" "),t("span",[t(v.a,{staticClass:"ml-2",attrs:{dark:""},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          mdi-close-circle-outline")])],1)],1),e._v(" "),t(m.a,[t(_.a,[e.type?e._e():t(d.a,{attrs:{cols:"12"}},[t(r.a,{attrs:{label:"Type",outlined:"",items:["contractor","visitor","delivery"],dense:"","hide-details":!e.errors.type,"error-messages":e.errors&&e.errors.type?e.errors.type[0]:""},model:{value:e.payload.type,callback:function(t){e.$set(e.payload,"type",t)},expression:"payload.type"}})],1),e._v(" "),t(d.a,{attrs:{cols:"12"}},[t(x.a,{staticClass:"text-center",attrs:{label:"".concat("contractor"==e.type?"Activity":"Purpose"),dense:"",outlined:"","hide-details":!e.errors.name,error:e.errors.name,"error-messages":e.errors&&e.errors.name?e.errors.name[0]:""},model:{value:e.payload.name,callback:function(t){e.$set(e.payload,"name",t)},expression:"payload.name"}})],1)],1)],1),e._v(" "),t(f.a),e._v(" "),t(c.a,[t(y.a),e._v(" "),t("div",{staticClass:"text-right"},[t(o.a,{attrs:{small:"",color:"grey white--text"},on:{click:function(t){e.DialogBox=!1}}},[e._v("\n          Close\n        ")]),e._v(" "),t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.submit}},[e._v("\n          Submit\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},999:function(e,t,n){"use strict";n(12),n(14),n(11),n(6),n(20),n(9),n(21);var r=n(2),o=(n(28),n(547),n(956),n(81)),l=n(66),c=n(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=Object(c.a)(l.a,o.a);t.a=h.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},o.a.options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var e=o.a.options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.attrs.id=this.computedId,delete label.data.attrs.for,label.tag="legend",label):null},onClick:l.a.options.methods.onClick},render:function(e){var t=o.a.options.render.call(this,e);return this._b(t.data,"div",this.attrs$),t}})}}]);