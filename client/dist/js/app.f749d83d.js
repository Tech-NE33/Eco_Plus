(function(t){function e(e){for(var n,s,i=e[0],r=e[1],c=e[2],d=0,u=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(l,s)&&l[s]&&u.push(l[s][0]),l[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);p&&p(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var i=o[s];0!==l[i]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},s={app:0},l={app:0},a=[];function i(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-7f14be3d":"e78da5a7","chunk-2d0ac940":"5c7d80da","chunk-2d0c7ac5":"ec41f271","chunk-2d21e307":"3f968be4"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],o={"chunk-7f14be3d":1};s[t]?e.push(s[t]):0!==s[t]&&o[t]&&e.push(s[t]=new Promise((function(e,o){for(var n="css/"+({}[t]||t)+"."+{"chunk-7f14be3d":"9a5cc059","chunk-2d0ac940":"31d6cfe0","chunk-2d0c7ac5":"31d6cfe0","chunk-2d21e307":"31d6cfe0"}[t]+".css",l=r.p+n,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===l))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){c=u[i],d=c.getAttribute("data-href");if(d===n||d===l)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||l,a=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete s[t],p.parentNode.removeChild(p),o(a)},p.href=l;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){s[t]=0})));var n=l[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,o){n=l[t]=[e,o]}));e.push(n[2]=a);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=i(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(p);var o=l[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,o[1](u)}l[t]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";o("64a9")},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,o){"use strict";o.r(e);var n=o("2b0e"),s=o("ce5b"),l=o.n(s);o("da64");n["default"].use(l.a,{icons:{iconfont:"md"},theme:{primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{staticClass:"grey lighten-4 test"},[o("Navbar"),o("Drawer"),o("v-content",{attrs:{"no-gutter":""}},[o("v-slide-x-reverse-transition",{attrs:{mode:"out-in"}},[o("router-view")],1)],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nav",[o("v-toolbar",{staticClass:"elevation-2",attrs:{flat:"",app:""}},[o("v-toolbar-title",{staticClass:"text-uppercase blue-grey--text",attrs:{right:""}},[o("span",{staticClass:"font-weight-light headline"},[t._v("NPU10000")]),o("span",{staticClass:"headline font-weight-medium"},[t._v("\n        ECO\n        "),o("sup",[t._v("+")])])]),o("v-spacer"),o("v-btn",{staticClass:"text-uppercase blue-grey--text title font-weight-light",staticStyle:{width:"180px"},attrs:{"font-weight-medium":"",flat:"",left:"","mr-2":"","pa-0":""},on:{click:t.doPublish}},[o("v-spacer"),t._v("\n      "+t._s(t.status?"Start Unit":"Stop Unit")+"\n      "),o("v-icon",{staticClass:"mr-3 ml-1 pl-0",attrs:{large:"",right:"",color:t.status?"red":"green"}},[t._v("power_settings_new")])],1)],1)],1)},c=[],d=o("e7fc"),u=o.n(d),p={name:"Navbar",components:{},data:()=>({status:!0,connection:{host:"localhost",port:9001,endpoint:"/mqtt",clean:!0,connectTimeout:4e3,reconnectPeriod:4e3,clientId:"Navbartt",username:"",password:""},powerstatus:{topic:"is_on",qos:0,payload:"1"},sensordata:{},qosList:[{label:0,value:0},{label:1,value:1},{label:2,value:2}],client:{connected:!1},subscribeSuccess:!1,switch1:!0,speed:30,interval:null,dialog:!1}),computed:{},created:function(){this.createConnection()},beforeDestroy(){this.destroyConnection()},mounted(){},methods:{createConnection(){const{host:t,port:e,endpoint:o,...n}=this.connection,s=`ws://${t}:${e}${o}`;try{this.client=u.a.connect(s,n)}catch(l){console.log("mqtt.connect error",l)}this.client.on("connect",()=>{console.log("Connection succeeded!")}),this.client.on("error",t=>{console.log("Connection failed",t)}),this.client.on("message",(t,e)=>{this.sensordata=JSON.parse(e),console.log(`Received message ${this.sensordata} from topic ${t}`)})},doSubscribe(){const{topic:t,qos:e}=this.subscription;this.client.subscribe(t,{qos:e},(t,e)=>{console.log("NavBar Connected and subscribed",t),t?console.log("Subscribe to topics error",t):(this.subscribeSuccess=!0,console.log("Subscribe to topics res",e))})},doUnSubscribe(){const{topic:t}=this.subscription;this.client.unsubscribe(t,t=>{t&&console.log("Unsubscribe error",t)})},doPublish:function(){const{topic:t,qos:e,payload:o}=this.powerstatus;this.client.publish(t,o,e,t=>{this.status=!this.status,console.log("Power Clicked"),t&&console.log("Publish error",t)})},destroyConnection(){if(this.client.connected)try{this.client.end(),this.client={connected:!1},console.log("Successfully disconnected!")}catch(t){console.log("Disconnect failed",t.toString())}}}},g=p,h=o("2877"),f=o("6544"),v=o.n(f),b=o("8336"),m=o("132d"),x=o("9910"),y=o("71d9"),_=o("2a7f"),k=Object(h["a"])(g,r,c,!1,null,null,null),w=k.exports;v()(k,{VBtn:b["a"],VIcon:m["a"],VSpacer:x["a"],VToolbar:y["a"],VToolbarTitle:_["a"]});var S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{clipped:"",app:"",permanent:"",width:"150"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-container",{attrs:{"fill-height":"","pa-0":""}},[o("v-list",[o("v-list-tile",{staticClass:"blue-grey--text darken-2",attrs:{router:"",to:t.links[0].route,"active-class":"blue-grey lighten-5 red--text"}},[o("v-list-tile-action",[o("v-avatar",{staticStyle:{"margin-left":"1px"},attrs:{color:"red",size:"34"}},[o("span",{staticClass:"white--text medium title"},[t._v("M")])])],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(t.links[0].text))])],1)],1),o("v-list-tile",{staticClass:"blue-grey--text darken-2",attrs:{router:"",to:t.links[3].route,"active-class":"blue-grey lighten-5 red--text"}},[o("v-list-tile-action",[o("v-avatar",{staticStyle:{"margin-left":"1px"},attrs:{color:"red",size:"34"}},[o("span",{staticClass:"white--text medium title"},[t._v("A")])])],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(t.links[3].text))])],1)],1),o("v-list-tile",{staticClass:"blue-grey--text darken-2",attrs:{router:"",to:t.links[4].route,"active-class":"blue-grey lighten-5 red--text"}},[o("v-list-tile-action",[o("v-avatar",{staticStyle:{"margin-left":"1px"},attrs:{color:"red",size:"34"}},[o("span",{staticClass:"white--text medium title"},[t._v("S")])])],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(t.links[4].text))])],1)],1),t._l(2,(function(e){return o("v-list-tile",{key:t.links[e].text,staticClass:"blue-grey--text text--darken-2",attrs:{router:"",to:t.links[e].route,"active-class":"blue-grey lighten-5 red--text"}},[o("v-list-tile-action",[o("v-icon",{attrs:{large:"",color:"red darken-1"}},[t._v(t._s(t.links[e].icon))])],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v(t._s(t.links[e].text))])],1)],1)}))],2)],1)],1)],1)},C=[],V={data(){return{drawer:!1,links:[{icon:"smart_toy",text:"Manual",route:"/"},{icon:"settings",text:"Settings",route:"/settings"},{icon:"article",text:"Logs",route:"/logs"},{icon:"hdr_auto",text:"Auto",route:"/auto"},{icon:"email",text:"Standby",route:"/standby"}]}}},T=V,P=o("8212"),E=o("a523"),O=o("8860"),L=o("ba95"),q=o("40fe"),$=o("5d23"),j=o("f774"),D=Object(h["a"])(T,S,C,!1,null,null,null),N=D.exports;v()(D,{VAvatar:P["a"],VContainer:E["a"],VIcon:m["a"],VList:O["a"],VListTile:L["a"],VListTileAction:q["a"],VListTileContent:$["a"],VListTileTitle:$["b"],VNavigationDrawer:j["a"]});var A={components:{Navbar:w,Drawer:N},data(){return{}},beforeCreate(){},mounted(){},methods:{}},B=A,U=(o("034f"),o("7496")),I=o("549c"),z=o("0789"),M=Object(h["a"])(B,a,i,!1,null,null,null),F=M.exports;v()(M,{VApp:U["a"],VContent:I["a"],VSlideXReverseTransition:z["e"]});var J=o("8c4f"),H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticStyle:{height:"520px"},attrs:{"grid-list-md":"","mt-2":"","pa-0":"","overflow-hidden":""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{md6:"","ma-3":""}},[o("v-card",[o("v-card-title",{staticClass:"pb-0 pl-3 ma-0 title red--text darken-2"},[t._v("\n          Date:\n        ")]),o("v-flex",{attrs:{"pt-0":"","pr-4":"","pl-3":"","mt--3":""}},[o("v-dialog",{ref:"dialog1",attrs:{"return-value":t.date,"full-width":"",persistent:"",lazy:"",width:"460px"},on:{"update:returnValue":function(e){t.date=e},"update:return-value":function(e){t.date=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-text-field",t._g({attrs:{"prepend-icon":"calendar_today",readonly:"",color:"red darken-2"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},n))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[o("v-date-picker",{attrs:{landscape:"",color:"red darken-2"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[o("v-btn",{attrs:{flat:"",color:"red darken-2"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),o("v-btn",{attrs:{flat:"",color:"red darken-2"},on:{click:function(e){return t.$refs.dialog1.save(t.date)}}},[t._v("OK")])],1)],1)],1),o("v-card-title",{staticClass:"pb-0 pl-3 ma-0 title red--text darken-2"},[t._v("\n          Time:\n        ")]),o("v-flex",{attrs:{"pt-0":"","pr-4":"","pl-3":"","mt--3":""}},[o("v-dialog",{ref:"dialog",attrs:{"return-value":t.time,persistent:"",lazy:"","full-width":"",width:"460px"},on:{"update:returnValue":function(e){t.time=e},"update:return-value":function(e){t.time=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[o("v-text-field",t._g({attrs:{"prepend-icon":"access_time",readonly:""},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},n))]}}]),model:{value:t.modal2,callback:function(e){t.modal2=e},expression:"modal2"}},[t.modal2?o("v-time-picker",{attrs:{format:"24hr",landscape:"","full-width":"",color:"red darken-2"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}},[o("v-spacer"),o("v-btn",{attrs:{flat:"",color:"red darken-2"},on:{click:function(e){t.modal2=!1}}},[t._v("Cancel")]),o("v-btn",{attrs:{flat:"",color:"red darken-2"},on:{click:function(e){return t.$refs.dialog.save(t.time)}}},[t._v("OK")])],1):t._e()],1)],1)],1)],1)],1)],1)},K=[],R={data:()=>({date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,e7:null,time:(new Date).toLocaleTimeString().substring(0,5),modal2:!1})},X=R,G=o("b0af"),Q=o("12b2"),W=o("2e4b"),Y=o("169a"),Z=o("0e8f"),tt=o("a722"),et=o("2677"),ot=o("c964"),nt=Object(h["a"])(X,H,K,!1,null,null,null),st=nt.exports;v()(nt,{VBtn:b["a"],VCard:G["a"],VCardTitle:Q["a"],VContainer:E["a"],VDatePicker:W["a"],VDialog:Y["a"],VFlex:Z["a"],VLayout:tt["a"],VSpacer:x["a"],VTextField:et["a"],VTimePicker:ot["a"]});var lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-tabs",{staticClass:"mx-2",attrs:{color:"dark-gray","slider-color":"red"}},[o("v-tab",[t._v("Logs")]),o("v-tab",[t._v("Alerts")]),o("v-spacer"),o("v-btn",{attrs:{"ma-0":"","pa-0":"",flat:""},on:{click:t.printlog}},[o("v-flex",{staticClass:"fill-height red--text pt-2 title",attrs:{flat:""}},[t._v("Export Data")]),o("v-flex",{attrs:{flat:"",width:"60px"}},[o("v-icon",{staticStyle:{padding:"4px 0px 0px 10px"},attrs:{color:"red",size:"40"}},[t._v("file_download")])],1)],1),o("v-tab-item",[o("v-container",{staticStyle:{"max-height":"393px"},attrs:{fluid:"","mt-4":"","pt-0":"","pb-0":"","overflow-y-hidden":"","scroll-y":""}},[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.logsHeaders,items:t.logs,"select-all":"","item-key":"filename","hide-actions":""},scopedSlots:t._u([{key:"headers",fn:function(e){return[o("tr",[o("th",[o("v-checkbox",{attrs:{color:"red","input-value":e.all,indeterminate:e.indeterminate,"hide-details":""},on:{click:function(e){return e.stopPropagation(),t.toggleLogs.apply(null,arguments)}}})],1),t._l(e.headers,(function(e){return o("th",{key:e.text,staticClass:"text-xs-left red--text ma-0"},[t._v("\n                "+t._s(e.text)+"\n              ")])}))],2)]}},{key:"items",fn:function(e){return[o("tr",[o("td",{attrs:{active:e.selected},on:{click:function(o){e.selected=!e.selected,t.exportLog(e.item.filename)}}},[o("v-checkbox",{attrs:{"input-value":e.selected,"hide-details":"",color:"red"}})],1),o("td",{staticClass:"text-xs-centre"},[t._v(t._s(e.item.filename))]),o("td",{staticClass:"text-xs-centre"},[t._v(t._s(e.item.startTime))]),o("td",{staticClass:"text-xs-centre"},[t._v(t._s(e.item.endTime))]),o("v-icon",{attrs:{color:"red darken-2"},on:{click:function(o){return t.deleteLog(e.item)}}},[t._v("clear")])],1)]}}]),model:{value:t.logsSelected,callback:function(e){t.logsSelected=e},expression:"logsSelected"}})],1)],1),o("v-tab-item",[o("v-container",{staticStyle:{"max-height":"393px"},attrs:{fluid:"","mt-4":"","pt-0":"","pb-0":"","overflow-y-hidden":"","scroll-y":""}})],1)],1)],1)},at=[],it={data(){return{connection:{host:"localhost",port:9001,endpoint:"/mqtt",clean:!0,connectTimeout:4e3,reconnectPeriod:4e3,clientId:"Logs_Page",username:"",password:""},subscription:{topic:"datalogs",qos:1},publish_dellogs:{topic:"dellogs",qos:1,payload:""},publish_getlogs:{topic:"getlogs",qos:1,payload:""},isDeleted:[],logsSelected:[],logsExport:[],logsHeaders:[{text:"File Name",align:"left",sortable:!1,value:"filename"},{text:"Start Time",value:"startTime",sortable:!1},{text:"End Time",value:"endTime",sortable:!1},{text:"",value:"delete",sortable:!1}],logs:[]}},created:function(){this.createConnection(),this.doSubscribe(),this.doPublish_getlogs()},methods:{toggleLogs(){if(this.logsSelected.length)this.logsSelected=[],this.logsExport=[],console.log("logs toggled off and logsExport is",this.logsExport);else{this.logsSelected=this.logs.slice();for(let t=0;t<this.logsSelected.length;t++)this.logsExport.push(this.logsSelected[t].filename);console.log("logs toggled on and logsExport is",this.logsExport)}console.log("logs toggled on")},changeSort(t){this.pagination.sortBy===t?this.pagination.descending=!this.pagination.descending:(this.pagination.sortBy=t,this.pagination.descending=!1)},printlog(){console.log(this.logsExport)},createConnection(){const{host:t,port:e,endpoint:o,...n}=this.connection,s=`ws://${t}:${e}${o}`;try{this.client=u.a.connect(s,n)}catch(l){console.log("mqtt.connect error",l)}this.client.on("message",(t,e)=>{this.logs=JSON.parse(e),console.log(`Received message ${this.logs} from topic ${t}`),console.log(this.logs)})},doSubscribe(){const{topic:t,qos:e}=this.subscription;this.client.subscribe(t,{qos:e},(t,e)=>{t?console.log("Subscribe to topics error",t):(this.subscribeSuccess=!0,console.log("Subscribe to topics res",e))})},doUnSubscribe(){const{topic:t}=this.subscription;this.client.unsubscribe(t,t=>{console.log("Unsubscribed"),t&&console.log("Unsubscribe error",t)})},doPublish(){const{topic:t,qos:e,payload:o}=this.publish_run;this.client.publish(t,o,e,t=>{console.log("Publishing something in manual"),t&&console.log("Publish error",t)})},doPublish_getlogs(){const{topic:t,qos:e,payload:o}=this.publish_getlogs;this.client.publish(t,o,e,t=>{console.log("Log getter"),t&&console.log("Publish error",t)})},doPublish_dellogs(){const{topic:t,qos:e,payload:o}=this.publish_dellogs;console.log("Trying to log delete with payload",o),this.client.publish(t,o,e,t=>{console.log("Publishing log delete with payload",o),t&&console.log("delog Publish error",t)})},deleteLog(t){console.log("clicked delete ");const e=this.logs.indexOf(t);if(this.publish_dellogs.payload=e.toString(),console.log(this.publish_dellogs.payload),this.logs.splice(e,1),this.logsExport.includes(t.filename)){const e=this.logsExport.indexOf(t);this.logsExport.splice(e,1),this.doPublish_dellogs()}else this.doPublish_dellogs()},disableCurrent(t){"in progress"===t.endTime?console.log("false"):console.log("true")},exportLog(t){if(this.logsExport.includes(t)){const e=this.logsExport.indexOf(t);this.logsExport.splice(e,1)}else this.logsExport.push(t);console.log(this.logsExport)}}},rt=it,ct=o("ac7c"),dt=o("8fea"),ut=o("71a3"),pt=o("c671"),gt=o("fe57"),ht=Object(h["a"])(rt,lt,at,!1,null,null,null),ft=ht.exports;v()(ht,{VBtn:b["a"],VCheckbox:ct["a"],VContainer:E["a"],VDataTable:dt["a"],VFlex:Z["a"],VIcon:m["a"],VSpacer:x["a"],VTab:ut["a"],VTabItem:pt["a"],VTabs:gt["a"]}),n["default"].use(J["a"]);var vt=new J["a"]({mode:"history",base:"/",routes:[{path:"/",name:"manual",component:()=>Promise.all([o.e("chunk-7f14be3d"),o.e("chunk-2d21e307")]).then(o.bind(null,"d500"))},{path:"/settings",name:"settings",component:st},{path:"/auto",name:"auto",component:()=>Promise.all([o.e("chunk-7f14be3d"),o.e("chunk-2d0c7ac5")]).then(o.bind(null,"522d"))},{path:"/standby",name:"standby  ",component:()=>Promise.all([o.e("chunk-7f14be3d"),o.e("chunk-2d0ac940")]).then(o.bind(null,"19ac"))},{path:"/logs",name:"logs",component:ft}]}),bt=o("9949"),mt=o.n(bt);n["default"].use(mt.a),n["default"].config.productionTip=!1,new n["default"]({router:vt,render:t=>t(F)}).$mount("#app")},6:function(t,e){},"64a9":function(t,e,o){}});
//# sourceMappingURL=app.f749d83d.js.map