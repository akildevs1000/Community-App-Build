(window.webpackJsonp=window.webpackJsonp||[]).push([[404],{1289:function(t,e,r){var content=r(1454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("6e5db394",content,!0,{sourceMap:!1})},1453:function(t,e,r){"use strict";r(1289)},1454:function(t,e,r){var n=r(20)((function(i){return i[1]}));n.push([t.i,"@media (min-width:768px){.gradient-form[data-v-4afd5e14]{height:100vh!important}}@media (min-width:769px){.primary[data-v-4afd5e14]{background:#5fafa3!important;border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}}",""]),n.locals={},t.exports=n},1607:function(t,e,r){"use strict";r.r(e);var n=r(896),o=r(117),l=r(965),c=r(221),d=(r(31),r(57),{layout:"login",auth:!1,data:function(){return{logo:"/ideaHRMS-final-blue.svg",valid:!0,loading:!1,snackbar:!1,email:"",password:"",show_password:!1,msg:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}]}},created:function(){},methods:{login:function(){var t=this;if(this.$refs.form.validate()){this.msg="",this.loading=!0;var e={email:this.email,password:this.password};this.$auth.loginWith("local",{data:e}).then((function(t){t.data})).catch((function(e){var r=e.response;if(setTimeout((function(){return t.loading=!1}),2e3),r){var n=r.status,data=r.data,o=r.statusText;t.msg=n?422==n?data.message:o:"Server Down"}else t.msg="No response found"}))}}}}),f=(r(1453),r(60)),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e(n.a,[e("section",{staticClass:"h-100 gradient-form",staticStyle:{"background-color":"#eee"}},[e("div",{staticClass:"container py-5 h-100"},[e("div",{staticClass:"row d-flex justify-content-center align-items-center h-100"},[e("div",{staticClass:"col-xl-10"},[e("div",{staticClass:"card rounded-3 text-black"},[e("div",{staticClass:"row g-0"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"card-body p-md-5 mx-md-4"},[e("div",{staticClass:"text-center"},[e("img",{attrs:{width:"35%",src:t.logo,alt:"logo"}})]),t._v(" "),e(l.a,{ref:"form",attrs:{method:"post","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),e("div",{staticClass:"form-outline mb-4"},[e(c.a,{attrs:{rules:t.emailRules,"hide-details":!1,id:"form2Example11",placeholder:"master@erp.com",required:"",dense:"",outlined:"",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e("label",{attrs:{for:""}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"form-outline mb-4"},[e(c.a,{staticClass:"input-group--focused",attrs:{dense:"",outlined:"",rules:t.passwordRules,"append-icon":t.show_password?"mdi-eye":"mdi-eye-off",type:t.show_password?"text":"password"},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[t.msg?e("span",{staticClass:"error--text"},[t._v("\n                        "+t._s(t.msg)+"\n                      ")]):t._e(),t._v(" "),e(o.a,{staticClass:"btn btn-primary btn-block text-white fa-lg primary mt-1 mb-3",attrs:{loading:t.loading},on:{click:t.login}},[t._v("\n                        Log in\n                      ")])],1),t._v(" "),e("div",{staticClass:"d-flex align-items-center justify-content-center pb-4"})]),t._v(" "),e("div",{staticClass:"text-right"},[e("nuxt-link",{staticClass:"text-muted text-right",attrs:{to:"/reset-password"}},[t._v("Forgot password?")])],1)],1)]),t._v(" "),e("div",{staticClass:"col-lg-6 d-flex align-items-center primary"},[e("div",{staticClass:"text-white px-3 py-4 p-md-5 mx-md-4"},[e("h6",[t._v("IDEA-HRMS THE RIGHT SOLUTION FOR YOU")]),t._v(" "),e("p",{staticClass:"small mb-0"},[t._v("\n                    Make it simple, easy and accessible anywhere, anytime.\n                    Save time, stay compliant and reduce labor costs by\n                    streamlining how you collect hours worked and time-off\n                    accruals.\n                  ")])])])])])])])])])])}),[],!1,null,"4afd5e14",null);e.default=component.exports},965:function(t,e,r){"use strict";var n=r(2),o=(r(41),r(61),r(363),r(11),r(6),r(9),r(57),r(103),r(12),r(14),r(18),r(19),r(8)),l=r(121),c=r(155);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);