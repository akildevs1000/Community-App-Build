(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{1721:function(e,t,r){"use strict";r.r(t);var n=r(117),c=r(138),o=r(79),l=r(541),d=r(539),v=r(116),h=r(342),f=r(538),m=r(900),D=r(360),_=r(221),S=r(99),k=(r(33),r(57),r(70),r(366),r(223),r(103),r(6),r(222),{data:function(){return{displaybutton:!1,progressloading:!1,searchInput:"",snackbar:{message:"",color:"background",show:!0},errors:[],response:"",color:"primary",loading:!0,leftSelectedDevices:[],leftDevices:[],rightSelectedDevices:[],rightDevices:[],name:"",options:{params:{company_id:this.$auth.user.company_id,cols:["id","name"]}}}},mounted:function(){var e=this;this.snackbar.show=!0,this.snackbar.message="Data loading...Please wait ",this.response="Data loading...Please wait ",this.$nextTick((function(){var e=this;setTimeout((function(){e.loading=!1}),2e3)})),setTimeout((function(){e.loading=!1}),2e3)},created:function(){this.getDevisesDataFromApi(),this.getTimezonesFromApi()},methods:{getZone:function(){var e=this;this.$axios.get("zone/".concat(this.$route.params.id)).then((function(t){var data=t.data;e.name=data.name,e.leftSelectedDevices=data.devices.map((function(e){return e.id})),e.moveToRightDevicesOption2()})).catch((function(e){return console.log(e)}))},getTimezonesFromApi:function(){var e=this,t={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("timezone",t).then((function(t){var data=t.data;e.timezones=data.data})).catch((function(e){return console.log(e)}))},resetErrorMessages:function(){this.errors=[],Object.assign(this.snackbar,{})},onSubmit:function(){var e=this;this.resetErrorMessages();var t={name:this.name,device_ids:this.rightDevices.map((function(e){return e.id})),company_id:this.$auth.user.company_id};this.$axios.put("zone/".concat(this.$route.params.id),t).then((function(t){var data=t.data;e.errors=[],e.snackbar={message:data.message,color:"background",show:!0}})).catch((function(t){var r=t.response;if(!r)return!1;var n=r.status,data=r.data;r.statusText;n&&422==n&&(e.errors=data.errors)}))},goback:function(){this.$router.push("/zone")},getDevisesDataFromApi:function(){var e=this,t={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("device?page=".concat(1),t).then((function(t){var data=t.data;e.leftDevices=data.data,e.getZone()}))},sortObject:function(e){return e.sort((function(a,b){if(a.first_name&&b.first_name){var e=a.first_name.toUpperCase(),t=b.first_name.toUpperCase();return e<t?-1:e>t?1:0}}))},sortObjectD:function(e){return e.sort((function(a,b){if(a.device_id&&b.device_id){var e=a.device_id.toUpperCase(),t=b.device_id.toUpperCase();return e<t?-1:e>t?1:0}return 0}))},sortObjectC:function(e){return e.sort((function(a,b){if(a.name&&b.name){var e=a.name.toUpperCase(),t=b.name.toUpperCase();return e<t?-1:e>t?1:0}}))},allmoveLeftDevices:function(){this.resetErrorMessages(),this.leftDevices=this.rightDevices,this.rightDevices=[],this.leftDevices=this.sortObjectD(this.leftDevices)},allmoveRightDevices:function(){this.resetErrorMessages(),this.rightDevices=this.leftDevices,this.leftDevices=[],this.rightDevices=this.sortObjectD(this.rightDevices)},moveToLeftDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.rightSelectedDevices.length){for(var t=this.rightSelectedDevices.length,r=function(i){if(e.rightSelectedDevices){var t=e.rightDevices.findIndex((function(t){return t.id==e.rightSelectedDevices[i]})),r=e.rightDevices.find((function(t){return t.id==e.rightSelectedDevices[i]}));e.leftDevices.push(r),e.rightDevices.splice(t,1)}},i=0;i<t;i++)r(i);this.leftDevices=this.sortObjectD(this.leftDevices);for(var n=0;n<t;n++)this.rightSelectedDevices.pop(this.rightSelectedDevices[n])}},moveToRightDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.leftSelectedDevices.length){for(var t=this.leftSelectedDevices.length,r=function(i){if(e.leftSelectedDevices){var t=e.leftDevices.findIndex((function(t){return t.id==e.leftSelectedDevices[i]})),r=e.leftDevices.find((function(t){return t.id==e.leftSelectedDevices[i]}));e.rightDevices.push(r),e.leftDevices.splice(t,1)}},i=0;i<t;i++)r(i);this.rightDevices=this.sortObjectD(this.rightDevices);for(var n=0;n<t;n++)this.leftSelectedDevices.pop(this.leftSelectedDevices[n])}}}}),y=r(60),component=Object(y.a)(k,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100% !important"}},[e.progressloading?t(h.a,{attrs:{active:e.loading,indeterminate:e.loading,absolute:"",color:"primary"}}):e._e(),e._v(" "),t("div",{staticClass:"text-center ma-2"},[t(m.a,{attrs:{color:e.snackbar.color,small:"",top:"top",timeout:3e3},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n      "+e._s(e.snackbar.message)+"\n    ")])],1),e._v(" "),t(f.a,[t(d.a,{attrs:{cols:"4"}},[t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.name,"error-messages":e.errors&&e.errors.name&&e.errors.name[0],placeholder:"Zone Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),t(d.a,{attrs:{cols:"4"}}),e._v(" "),t(d.a,{attrs:{cols:"4"}},[t("div",{staticClass:"text-right"},[t(n.a,{staticClass:"primary",attrs:{small:"",fab:""}},[t(v.a,{attrs:{small:"",color:"white"},on:{click:function(t){return e.goback()}}},[e._v("mdi-arrow-left")])],1)],1)])],1),e._v(" "),t(f.a,[t(d.a,{attrs:{cols:"5"}},[t(S.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v("All Devices List")]),e._v(" "),t(D.a)],1),e._v(" "),t("div",[t(c.a,{staticStyle:{"min-height":"500px"},attrs:{scrollable:""}},e._l(e.leftDevices,(function(r,n){return t(o.c,{key:n,staticClass:"timezone-displaylistview",attrs:{id:r.id},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}},[t("div",{staticClass:"row"},[t(d.a,{staticClass:"col-1",staticStyle:{padding:"0px"}},[t(l.a,{staticClass:"col-1 d-flex flex-column justify-center",attrs:{hideDetails:"",value:r.id,primary:"","hide-details":""},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}})],1),e._v(" "),t("div",{staticClass:"col-sm",staticStyle:{"padding-top":"21px",color:"#000000"}},[e._v("\n                "+e._s(r.name)+" : "+e._s(r.device_id)+"\n\n                "),"active"==r.status.name?t("span",{staticStyle:{color:"green"}},[e._v("\n                  Online")]):t("span",{staticStyle:{color:"red"}},[e._v("Offline ")])])],1)])})),1)],1)],1),e._v(" "),t(d.a,{attrs:{cols:"2"}},[t("div",{staticStyle:{"text-align":"-webkit-center"}},[t("button",{staticClass:"btn primary btn-block white--text",attrs:{type:"button",id:"undo_redo_undo"}},[e._v("\n          Options\n        ")]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightSelected"},on:{click:e.moveToRightDevicesOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightAll"},on:{click:e.allmoveRightDevices}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftSelected"},on:{click:e.moveToLeftDevicesOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftAll"},on:{click:e.allmoveLeftDevices}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-left theme--red",attrs:{"aria-hidden":"true"}})])])]),e._v(" "),t(d.a,{attrs:{cols:"5"}},[t(S.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v("Selected Devices List")])]),e._v(" "),t("div",[t(c.a,{staticStyle:{"min-height":"500px"}},[e.errors&&e.errors.device_ids?t(o.c,{staticClass:"error--text text-center"},[e._v("\n            "+e._s(e.errors.device_ids&&e.errors.device_ids[0])+"\n          ")]):e._e(),e._v(" "),e._l(e.rightDevices,(function(r,n){return t(o.c,{key:n,staticClass:"timezone-displaylistview",attrs:{id:r.id},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}},[t("div",{staticClass:"row"},[t(d.a,{staticClass:"col-1",staticStyle:{padding:"0px"}},[t(l.a,{staticClass:"col-1 d-flex flex-column justify-center",attrs:{hideDetails:"",value:r.id,primary:"","hide-details":""},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}})],1),e._v(" "),t("div",{staticClass:"col-sm",staticStyle:{"padding-top":"21px",color:"#000000"}},[e._v("\n                "+e._s(r.name)+" : "+e._s(r.device_id)+"\n                "),"active"==r.status.name?t("span",{staticStyle:{color:"green"}},[e._v("\n                  Online")]):t("span",{staticStyle:{color:"red"}},[e._v("Offline ")])])],1)])}))],2)],1)],1)],1),e._v(" "),t(f.a,[t(d.a,{staticClass:"text-right"},[t("button",{staticClass:"btn primary white--text v-size--default",attrs:{loading:e.loading,type:"button",id:"save"},on:{click:e.onSubmit}},[e._v("\n        Submit\n      ")])])],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);