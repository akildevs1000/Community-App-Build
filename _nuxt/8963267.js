(window.webpackJsonp=window.webpackJsonp||[]).push([[257,256],{906:function(t,e,r){var n=r(907).has;t.exports=function(t){return n(t),t}},907:function(t,e,r){var n=r(25),o=Set.prototype;t.exports={Set:Set,add:n(o.add),has:n(o.has),remove:n(o.delete),proto:o}},909:function(t,e,r){var n=r(25),o=r(545),c=r(907),l=c.Set,d=c.proto,v=n(d.forEach),f=n(d.keys),_=f(new l).next;t.exports=function(t,e,r){return r?o(f(t),e,_):v(t,e)}},916:function(t,e,r){var n=r(87),o=r(36),c=r(971),l=r(47),d=n("Set");t.exports=function(t){return function(t){return l(t)&&"number"==typeof t.size&&o(t.has)&&o(t.keys)}(t)?t:c(t)?new d(t):t}},917:function(t,e,r){var n=r(93),o=r(40),c=r(39),l=r(123),d=TypeError,v=Math.max,f=function(t,e,r,n){this.set=t,this.size=e,this.has=r,this.keys=n};f.prototype={getIterator:function(){return o(c(this.keys,this.set))},includes:function(t){return c(this.has,this.set,t)}},t.exports=function(t){o(t);var e=+t.size;if(e!=e)throw d("Invalid size");return new f(t,v(l(e),0),n(t.has),n(t.keys))}},919:function(t,e,r){var n=r(549),o=r(907);t.exports=n(o.proto,"size","get")||function(t){return t.size}},930:function(t,e,r){var n=r(907),o=r(909),c=n.Set,l=n.add;t.exports=function(t){var e=new c;return o(t,(function(t){l(e,t)})),e}},940:function(t,e,r){r(970)},941:function(t,e,r){"use strict";var n=r(7),o=r(906),c=r(907).add;n({target:"Set",proto:!0,real:!0,forced:!0},{addAll:function(){for(var t=o(this),e=0,r=arguments.length;e<r;e++)c(t,arguments[e]);return t}})},942:function(t,e,r){"use strict";var n=r(7),o=r(906),c=r(907).remove;n({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:function(){for(var t,e=o(this),r=!0,n=0,l=arguments.length;n<l;n++)t=c(e,arguments[n]),r=r&&t;return!!r}})},943:function(t,e,r){"use strict";var n=r(7),o=r(39),c=r(916),l=r(972);n({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){return o(l,this,c(t))}})},944:function(t,e,r){"use strict";var n=r(7),o=r(72),c=r(906),l=r(909);n({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0);return!1!==l(e,(function(t){if(!r(t,t,e))return!1}),!0)}})},945:function(t,e,r){"use strict";var n=r(7),o=r(72),c=r(906),l=r(907),d=r(909),v=l.Set,f=l.add;n({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=new v;return d(e,(function(t){r(t,t,e)&&f(n,t)})),n}})},946:function(t,e,r){"use strict";var n=r(7),o=r(72),c=r(906),l=r(909);n({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=l(e,(function(t){if(r(t,t,e))return{value:t}}),!0);return n&&n.value}})},947:function(t,e,r){"use strict";var n=r(7),o=r(39),c=r(916),l=r(973);n({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){return o(l,this,c(t))}})},948:function(t,e,r){"use strict";var n=r(7),o=r(39),c=r(916),l=r(974);n({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){return o(l,this,c(t))}})},949:function(t,e,r){"use strict";var n=r(7),o=r(39),c=r(916),l=r(975);n({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){return o(l,this,c(t))}})},950:function(t,e,r){"use strict";var n=r(7),o=r(39),c=r(916),l=r(976);n({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){return o(l,this,c(t))}})},951:function(t,e,r){"use strict";var n=r(7),o=r(25),c=r(906),l=r(909),d=r(45),v=o([].join),f=o([].push);n({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),r=void 0===t?",":d(t),n=[];return l(e,(function(t){f(n,t)})),v(n,r)}})},952:function(t,e,r){"use strict";var n=r(7),o=r(72),c=r(906),l=r(907),d=r(909),v=l.Set,f=l.add;n({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0),n=new v;return d(e,(function(t){f(n,r(t,t,e))})),n}})},953:function(t,e,r){"use strict";var n=r(7),o=r(93),c=r(906),l=r(909),d=TypeError;n({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=c(this),r=arguments.length<2,n=r?void 0:arguments[1];if(o(t),l(e,(function(o){r?(r=!1,n=o):n=t(n,o,o,e)})),r)throw d("Reduce of empty set with no initial value");return n}})},954:function(t,e,r){"use strict";var n=r(7),o=r(72),c=r(906),l=r(909);n({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=c(this),r=o(t,arguments.length>1?arguments[1]:void 0);return!0===l(e,(function(t){if(r(t,t,e))return!0}),!0)}})},955:function(t,e,r){"use strict";var n=r(7),o=r(39),c=r(916),l=r(977);n({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){return o(l,this,c(t))}})},956:function(t,e,r){"use strict";var n=r(7),o=r(39),c=r(916),l=r(978);n({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){return o(l,this,c(t))}})},966:function(t,e,r){"use strict";var n=r(2),o=(r(41),r(61),r(363),r(11),r(6),r(9),r(57),r(103),r(12),r(14),r(20),r(21),r(8)),c=r(121),l=r(155);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},970:function(t,e,r){"use strict";r(369)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r(550))},971:function(t,e,r){var n=r(185),o=r(48),c=r(94),l=r(38),d=r(186),v=l("iterator"),f=Object;t.exports=function(t){if(c(t))return!1;var e=f(t);return void 0!==e[v]||"@@iterator"in e||o(d,n(e))}},972:function(t,e,r){"use strict";var n=r(906),o=r(907),c=r(930),l=r(919),d=r(917),v=r(909),f=r(545),_=o.has,h=o.remove;t.exports=function(t){var e=n(this),r=d(t),o=c(e);return l(e)<=r.size?v(e,(function(t){r.includes(t)&&h(o,t)})):f(r.getIterator(),(function(t){_(e,t)&&h(o,t)})),o}},973:function(t,e,r){"use strict";var n=r(906),o=r(907),c=r(919),l=r(917),d=r(909),v=r(545),f=o.Set,_=o.add,h=o.has;t.exports=function(t){var e=n(this),r=l(t),o=new f;return c(e)>r.size?v(r.getIterator(),(function(t){h(e,t)&&_(o,t)})):d(e,(function(t){r.includes(t)&&_(o,t)})),o}},974:function(t,e,r){"use strict";var n=r(906),o=r(907).has,c=r(919),l=r(917),d=r(909),v=r(545),f=r(364);t.exports=function(t){var e=n(this),r=l(t);if(c(e)<=r.size)return!1!==d(e,(function(t){if(r.includes(t))return!1}),!0);var _=r.getIterator();return!1!==v(_,(function(t){if(o(e,t))return f(_,"normal",!1)}))}},975:function(t,e,r){"use strict";var n=r(906),o=r(919),c=r(909),l=r(917);t.exports=function(t){var e=n(this),r=l(t);return!(o(e)>r.size)&&!1!==c(e,(function(t){if(!r.includes(t))return!1}),!0)}},976:function(t,e,r){"use strict";var n=r(906),o=r(907).has,c=r(919),l=r(917),d=r(545),v=r(364);t.exports=function(t){var e=n(this),r=l(t);if(c(e)<r.size)return!1;var f=r.getIterator();return!1!==d(f,(function(t){if(!o(e,t))return v(f,"normal",!1)}))}},977:function(t,e,r){"use strict";var n=r(906),o=r(907),c=r(930),l=r(917),d=r(545),v=o.add,f=o.has,_=o.remove;t.exports=function(t){var e=n(this),r=l(t).getIterator(),o=c(e);return d(r,(function(t){f(e,t)?_(o,t):v(o,t)})),o}},978:function(t,e,r){"use strict";var n=r(906),o=r(907).add,c=r(930),l=r(917),d=r(545);t.exports=function(t){var e=n(this),r=l(t).getIterator(),v=c(e);return d(r,(function(t){o(v,t)})),v}},982:function(t,e,r){"use strict";r.r(e);var n=r(138),o=r(79),c=r(539),l=r(889),d=r(116),v=r(219),f=r(538),_=r(883),h=r(885),m=r(884),y=r(354),S=(r(33),{props:["item","attendance"],components:{VisitorHistory:r(939).default},data:function(){return{keyid:1}},methods:{getRelatedColor:function(t){return{1:"purple",3:"red",2:"green",UNKNOWN:"purple"}[t.status_id||"UNKNOWN"]},loadHistoryPage:function(){this.keyid++},verifyOverstay:function(t){if(t.attendances&&t.attendances[0]&&t.status_id>=6){var e=t.attendances[0].in,r=t.attendances[0].out,n=0;if(""!=r&&null!=r||(r=this.getCurrentTime()),e&&r&&(n=this.getTimeInSeconds(r)-this.getTimeInSeconds(e))>0)return"Over Stay : "+this.formatSecondsToTime(n)}return""}}}),w=r(60),component=Object(w.a)(S,(function(){var t,e,r,S,w,x,O,z,C=this,j=C._self._c;return j("div",[C.item?j("div",[j(m.a,{staticClass:"slidegroup1",attrs:{right:""}},[j(y.a,{attrs:{color:"violet"}}),C._v(" "),j(_.a,[j("span",[C._v("Information ")])]),C._v(" "),j(_.a,{on:{click:function(t){return C.loadHistoryPage()}}},[j("span",[C._v("History")])]),C._v(" "),j(h.a,[j("span",{staticClass:"bold"},[C._v(" Visitor ")]),C._v(" "),j("span",{staticStyle:{float:"right"}},[j("span",{style:"color:"+C.getRelatedColor(C.item)},[C._v(C._s(C.item.status))])]),C._v(" "),j(f.a,{staticClass:"100%",staticStyle:{margin:"auto","line-height":"36px"}},[j(c.a,{staticStyle:{padding:"0px"},attrs:{cols:"4"}},[j(v.a,{staticStyle:{"border-radius":"50%",width:"250px","max-width":"95%",height:"250px",border:"1px solid #ddd"},attrs:{src:C.item.logo?C.item.logo:"/no-profile-image.jpg"}})],1),C._v(" "),j(c.a,{staticStyle:{"padding-left":"5px","padding-top":"0px"},attrs:{cols:"4"}},[j("span",{attrs:{cols:"8"}},[j("b",[C._v(C._s(C.item.full_name||"---")+" ")])]),C._v(" "),j("div",[j(d.a,{staticClass:"icon-blue",attrs:{size:"20",title:"Date"}},[C._v("mdi-calendar-range")]),C._v("\n              "+C._s(C.item.from_date_display)+"\n              "),C.item.to_date_display!=C.item.from_date_display?j("span",[C._v("\n                to "+C._s(C.item.to_date_display))]):C._e()],1),C._v(" "),j("div",[j(d.a,{staticClass:"icon-blue",attrs:{size:"20",title:"Time"}},[C._v("mdi-clock-outline")]),C._v("\n              "+C._s(C.item.time_in)+" - "+C._s(C.item.time_out)+"\n            ")],1),C._v(" "),j("div",[j(d.a,{staticClass:"icon-blue",attrs:{title:"Purpose",size:"20"}},[C._v("mdi-briefcase-account-outline")]),C._v("\n              "+C._s((null===(t=C.item.purpose)||void 0===t?void 0:t.name)||"---")+"\n            ")],1),C._v(" "),j("div",[j(d.a,{staticClass:"icon-blue",attrs:{size:"20",title:"Contact Number"}},[C._v("mdi-cellphone")]),C._v("\n              "+C._s(C.item.phone_number||"---")+"\n            ")],1),C._v(" "),j("div",{staticClass:"bold",staticStyle:{"border-top":"1px solid #ddd"}},[j(d.a,{attrs:{size:"20",color:"green",title:"Entry In Time"}},[C._v("mdi-bank-transfer-in")]),C._v("\n              "+C._s(C.attendance&&C.attendance.in||"---")+" "),j("br"),C._v("\n              "+C._s(C.attendance&&C.attendance.device_in_name.name||"---")+"\n            ")],1),C._v(" "),C.item.over_stay?j("div",{staticStyle:{color:"red"}},[C._v("\n              Expected Out Time: "+C._s(C.item.time_out)+"\n            ")]):C._e()]),C._v(" "),j(c.a,{staticStyle:{"padding-left":"5px","padding-top":"0px"},attrs:{cols:"4"}},[j("div",[C._v(" ")]),C._v(" "),j("div",[j(d.a,{staticClass:"icon-blue",attrs:{title:"Company",size:"30"}},[C._v("mdi-domain")]),C._v("\n              "+C._s(C.item.visitor_company_name||"---")+"\n            ")],1),C._v(" "),j("span",{attrs:{cols:"8"}},["Male"==C.item.gender?j(d.a,{staticClass:"icon-blue",attrs:{size:"20"}},[C._v("mdi-human-male")]):C._e(),C._v(" "),"Female"==C.item.gender?j(d.a,{staticClass:"icon-blue",attrs:{size:"20"}},[C._v("mdi-human-female")]):C._e(),C._v("\n              "+C._s(C.item.gender||"---")+"\n            ")],1),C._v(" "),j("div",[j(d.a,{staticClass:"icon-blue",attrs:{size:"20",title:"ID"}},[C._v("mdi-identifier")]),C._v(" "),1==C.item.id_type?j("span",[C._v("Emirates ID")]):2==C.item.id_type?j("span",[C._v("National ID")]):C._e(),C._v("\n\n              : "+C._s(C.item.id_number||"---")+"\n            ")],1),C._v(" "),j("div",[j(d.a,{staticClass:"icon-blue",attrs:{size:"20",title:"Email"}},[C._v("mdi-email")]),C._v("\n              "+C._s(C.item.email||"---")+"\n            ")],1),C._v(" "),j("div",{staticClass:"bold",staticStyle:{"border-top":"1px solid #ddd"}},[j(d.a,{attrs:{size:"30",color:"red",title:"Exit Out Time"}},[C._v("mdi-bank-transfer-out")]),C._v("\n              "+C._s(C.attendance&&C.attendance.out||"---")+"\n              "),j("br"),C._v("\n              "+C._s(C.attendance&&C.attendance.device_out_name.name||"---")+"\n\n              "),j("div",{staticStyle:{color:"red"}},[C._v("\n                Overstay:\n                "+C._s(C.attendance&&C.attendance.over_stay||"---")+"\n\n                ")])],1)])],1),C._v(" "),j(l.a,{staticClass:"mt-3"}),C._v(" "),j("h4",{staticClass:"mb-3",staticStyle:{background:"#ddd"}},[C._v("Host :")]),C._v(" "),j(f.a,[j(c.a,{attrs:{col:"4"}},[j(v.a,{staticStyle:{"border-radius":"50%",width:"200px","max-width":"95%","min-height":"100px",height:"auto",border:"1px solid #ddd"},attrs:{src:C.item.host?C.item.host.employee.profile_picture:"/no-profile-image.jpg"}})],1),C._v(" "),j(c.a,{attrs:{cols:"8"}},[j(f.a,[j(c.a,{attrs:{col:"3"}},[C._v("Employee Name ")]),C._v(" "),j(c.a,{attrs:{col:"9"}},[C._v(": "+C._s(null===(e=C.item.host)||void 0===e?void 0:e.employee.first_name)+"\n                "+C._s(null===(r=C.item.host)||void 0===r?void 0:r.employee.last_name))])],1),C._v(" "),j(f.a,[j(c.a,{attrs:{col:"3"}},[C._v("Contact Number")]),C._v(" "),j(c.a,{attrs:{col:"9"}},[C._v(": "+C._s(null===(S=C.item.host)||void 0===S?void 0:S.employee.phone_number))])],1),C._v(" "),j(f.a,[j(c.a,{attrs:{col:"3"}},[C._v(" Email Id ")]),C._v(" "),j(c.a,{attrs:{col:"9"}},[C._v("\n                "+C._s((null===(w=C.item.host)||void 0===w||null===(x=w.employee.user)||void 0===x?void 0:x.email)||"---")+"\n              ")])],1),C._v(" "),j(f.a,[j(c.a,{attrs:{col:"3"}},[C._v(" Branch ")]),C._v(" "),j(c.a,{attrs:{col:"9"}},[C._v("\n                : "+C._s((null===(O=C.item.host)||void 0===O||null===(z=O.employee.branch)||void 0===z?void 0:z.branch_name)||"---")+"\n              ")])],1),C._v(" "),j(f.a,[j(c.a,{attrs:{col:"3"}},[C._v("Status ")]),C._v(" "),j(c.a,{attrs:{col:"9"}},[j("span",{style:"color:"+C.getRelatedColor(C.item)},[C._v(C._s(C.item.status))])])],1),C._v(" "),j(f.a,[j(c.a,{attrs:{col:"3"}},[C._v("Reason:")]),C._v(" "),j(c.a,{attrs:{col:"9"}},[C._v(" "+C._s(C.item.reason||"---"))])],1)],1)],1)],1),C._v(" "),j(h.a,[j(n.a,{attrs:{flat:""}},[j(o.c,[j("VisitorHistory",{attrs:{visitorIdentificationNumber:C.item.id_number,visitorFullName:C.item.full_name}})],1)],1)],1)],1)],1):C._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VisitorHistory:r(939).default})}}]);