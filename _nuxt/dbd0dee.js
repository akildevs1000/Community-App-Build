(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1722:function(e,t,n){"use strict";n.r(t);var o=n(1584),d=(n(37),n(70),n(222),n(57),n(33),n(223),{data:function(){return{Module:"Employee",options:{},endpoint:"employee",dialog_search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,headers:[{text:"First Name",align:"left",sortable:!1,value:"first_name"}],response:"",data:[],errors:[]}},computed:{},watch:{dialog:function(e){e||this.close(),this.errors=[],this.dialog_search=""},options:{handler:function(){this.getEmployeesDataFromApi()},deep:!0}},methods:{getEmployeesDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,o={params:{page:n.page,per_page:n.itemsPerPage}};this.$axios.get(t,o).then((function(t){var data=t.data,n=data.data;e.data=n,e.total=data.total,e.loading=!1}))},dialog_searchIt:function(e){0==e.length?this.getEmployeesDataFromApi():e.length>2&&this.getEmployeesDataFromApi("".concat(this.endpoint,"/dialog_search/").concat(e))},editItem:function(e){this.editedIndex=this.data.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},delteteSelectedRecords:function(){var e=this,t=this.ids.map((function(e){return e.id}));confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:t}).then((function(t){t.data.status?(e.getEmployeesDataFromApi(),e.snackbar=t.data.status,e.ids=[],e.response="Selected records has been deleted"):e.errors=t.data.errors})).catch((function(e){return console.log(e)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+e.id).then((function(n){var data=n.data,o=t.data.indexOf(e);t.data.splice(o,1),t.snackbar=data.status,t.response=data.message})).catch((function(e){return console.log(e)}))},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}),300)},save:function(){var e=this,t={name:this.editedItem.name};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,t).then((function(t){if(t.data.status){var n=e.data.findIndex((function(t){return t.id==e.editedItem.id}));e.data.splice(n,1,{id:e.editedItem.id,name:e.editedItem.name}),e.snackbar=t.data.status,e.response=t.data.message,e.close()}else e.errors=t.data.errors})).catch((function(e){return console.log(e)})):this.$axios.post(this.endpoint,t).then((function(t){t.data.status?(e.getEmployeesDataFromApi(),e.snackbar=t.data.status,e.response=t.data.message,e.close(),e.errors=[],e.dialog_search=""):e.errors=t.data.errors})).catch((function(e){return console.log(e)}))}}}),r=d,c=n(60),component=Object(c.a)(r,(function(){var e=this;return(0,e._self._c)(o.a,{staticClass:"elevation-1",attrs:{"show-select":"","item-key":"id",headers:e.headers,items:e.data,"server-items-length":e.total,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},model:{value:e.ids,callback:function(t){e.ids=t},expression:"ids"}})}),[],!1,null,null,null);t.default=component.exports}}]);