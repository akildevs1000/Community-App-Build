(window.webpackJsonp=window.webpackJsonp||[]).push([[420,185],{1716:function(t,e,n){"use strict";n.r(e);var c=n(117),o=n(138),r=n(79),l=n(539),_=n(889),h=n(1001),f=n(1e3),d=n(538),m=n(1323),v=n(1025),y=n(1026),O=n(990),S=n(1027),j=(n(33),n(2)),k={data:function(){var t;return t={Model:"Shift",comp:null,shift_types:[],shift_last_id:"",shiftList:!0,isChange:!1,isAuto:!1,week_days:[{label:"Sun",value:"Sun"},{label:"Mon",value:"Mon"},{label:"Tue",value:"Tue"},{label:"Wed",value:"Wed"},{label:"Thu",value:"Thu"},{label:"Fri",value:"Fri"},{label:"Sat",value:"Sat"}],errors:[],data:[],response:"",snackbar:!1},Object(j.a)(t,"Model","Shift"),Object(j.a)(t,"e1",1),Object(j.a)(t,"e6",1),Object(j.a)(t,"loading",!1),Object(j.a)(t,"time_in_menu",!1),Object(j.a)(t,"time_out_menu",!1),Object(j.a)(t,"grace_time_in_menu",!1),Object(j.a)(t,"grace_time_out_menu",!1),Object(j.a)(t,"beginning_in_menu",!1),Object(j.a)(t,"ending_in_menu",!1),Object(j.a)(t,"beginning_out_menu",!1),Object(j.a)(t,"ending_out_menu",!1),Object(j.a)(t,"payload",{shift_type_id:6,days:[]}),Object(j.a)(t,"errors",[]),Object(j.a)(t,"shifts",[]),Object(j.a)(t,"data",[]),Object(j.a)(t,"response",""),Object(j.a)(t,"snackbar",!1),t},created:function(){var t=this,e={per_page:1e3,company_id:this.$auth.user.company_id};this.$axios.get("shift_type",{params:e}).then((function(e){var data=e.data;t.shift_types=data})),this.e1=2,this.getComponent()},watch:{},computed:{shift_type_id:function(){return this.$store.state.shift_type_id},shift_id:function(){return this.$route.params.id}},methods:{getComponent:function(){switch(this.shift_type_id){case 6:this.comp="SingleShiftEdit";break;case 5:this.comp="widgetsShiftsSplitShiftEdit";break;case 4:this.comp="OverNightShiftEdit";break;case 3:this.comp="AutoShiftEdit";break;case 2:this.comp="MultiInOutShiftEdit";break;default:this.comp="FiloShiftEdit"}},can:function(t){return this.$pagePermission.can(t,this)},getShifts:function(){var t=this,e={params:{shift_type_id:6,company_id:this.$auth.user.company_id}};this.$axios.get("shift_by_type",e).then((function(e){var data=e.data;t.shifts=data})).catch((function(t){return console.log(t)}))}}},w=n(60),component=Object(w.a)(k,(function(){var t=this,e=t._self._c;return t.can("shift_create")?e("div",[e(o.a,[e(v.a,{model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[e(O.a,[e(S.a,{attrs:{complete:t.e1>1,step:"1"}},[t._v("\n          Shift Type\n        ")]),t._v(" "),e(_.a),t._v(" "),e(S.a,{attrs:{complete:t.e1>2,step:"2"}},[t._v("\n          Shift Details\n        ")])],1),t._v(" "),e(O.b,[e(y.a,{attrs:{step:"1"}},[e(o.a,{attrs:{flat:""}},[e(r.c,[e(d.a,{staticClass:"mx-auto"},[e(l.a,{attrs:{cols:"12"}},[t._v("\n                  Select Shift Type "),e("span",{staticClass:"error--text"},[t._v("*")]),t._v("\n                  "+t._s(t.shift_id)+"\n                  "),t.shift_types&&!t.shift_types.length?e(m.a,{attrs:{type:"card"}}):t._e(),t._v(" "),e(f.a,{attrs:{row:""},model:{value:t.shift_type_id,callback:function(e){t.shift_type_id=e},expression:"shift_type_id"}},t._l(t.shift_types,(function(t,n){return e(h.a,{key:n,attrs:{label:"".concat(t.name),value:t.id}})})),1)],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e("div",{staticClass:"text-left"},[e(c.a,{attrs:{dark:"",small:"",color:"primary"},on:{click:function(e){t.e1=2,t.getComponent()}}},[t._v("\n                      Continue\n                    ")])],1)])],1)],1)],1)],1),t._v(" "),e(y.a,{attrs:{step:"2"}},[e(o.a,{attrs:{flat:""}},[e(r.c,[e(d.a,[e(l.a,{attrs:{cols:"12"}},[e(t.comp,{tag:"component",attrs:{shift_id:t.shift_id,shift_type_id:t.shift_type_id}})],1)],1)],1)],1)],1)],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(908).default})},908:function(t,e,n){"use strict";n.r(e);var c=n(60),component=Object(c.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);