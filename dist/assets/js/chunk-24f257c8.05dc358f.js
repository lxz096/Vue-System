(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24f257c8"],{"0e21":function(e,t,n){},"0eb2":function(e,t,n){},1220:function(e,t,n){"use strict";var r=n("0eb2"),c=n.n(r);c.a},"2b25":function(e,t,n){"use strict";var r=n("0e21"),c=n.n(r);c.a},4295:function(e,t,n){"use strict";var r=n("aacc"),c=n.n(r);c.a},"4d07":function(e,t,n){},5081:function(e,t,n){},"60d7":function(e,t,n){"use strict";var r=n("4d07"),c=n.n(r);c.a},"6f2f":function(e,t,n){"use strict";var r=n("5081"),c=n.n(r);c.a},aacc:function(e,t,n){},ade3:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},b64b:function(e,t,n){var r=n("23e7"),c=n("7b0b"),a=n("df75"),o=n("d039"),i=o((function(){a(1)}));r({target:"Object",stat:!0,forced:i},{keys:function(e){return a(c(e))}})},ba97:function(e,t,n){e.exports=n.p+"assets/img/user.e4aea211.png"},cd56:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{attrs:{width:"auto"}},[n("com-aside")],1),n("el-container",[n("el-header",[n("com-header")],1),n("com-tab"),n("el-main",[n("router-view")],1)],1)],1)},c=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"l-content"},[n("el-button",{attrs:{plain:"",icon:"el-icon-s-grid",size:"mini"},on:{click:e.collapseMenu}}),n("el-breadcrumb",{attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),e.current?n("el-breadcrumb-item",{attrs:{to:e.current.path}},[e._v(" "+e._s(e.current.label)+" ")]):e._e()],1)],1),n("div",{staticClass:"r-content"},[n("el-dropdown",{attrs:{trigger:"click",size:"mini"}},[n("span",{staticClass:"el-dropdown-link"},[n("img",{staticClass:"user",attrs:{src:e.userImg}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("个人中心")]),n("el-dropdown-item",{nativeOn:{click:function(t){return e.logOut(t)}}},[e._v("退出")])],1)],1)],1)])},o=[],i=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=n("2f62"),f={computed:u({},Object(l["c"])({current:function(e){return e.tab.currentMenu}})),data:function(){return{userImg:n("ba97")}},methods:{collapseMenu:function(){this.$store.commit("collapseMenu")},logOut:function(){this.$store.commit("clearToken"),this.$store.commit("clearMenu"),location.reload()}}},b=f,d=(n("4295"),n("1220"),n("2877")),m=Object(d["a"])(b,a,o,!1,null,"65a88812",null),p=m.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse,"default-active":"2","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},e._l(e.menu,(function(t){return n("el-menu-item",{key:t.path,attrs:{index:t.path},on:{click:function(n){return e.clickMenu(t)}}},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])})),1)},v=[],O=(n("b0c0"),{data:function(){return{asideMenu:[{path:"/",label:"首页",icon:"s-home",name:"home"},{path:"/video",label:"视频管理",icon:"video-camera",name:"video"},{path:"/user",label:"用户管理",icon:"user",name:"user"}]}},methods:{clickMenu:function(e){this.$router.push({name:e.name}),this.$store.commit("selectMenu",e)}},computed:{isCollapse:function(){return this.$store.state.tab.isCollapse},menu:function(){return this.$store.state.tab.menu}}}),g=O,w=(n("6f2f"),Object(d["a"])(g,h,v,!1,null,"bfb93a5c",null)),j=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs"},e._l(e.tags,(function(t){return n("el-tag",{key:t.name,attrs:{size:"small",effect:e.$route.name===t.name?"dark":"plain",closable:"home"!==t.name,"disable-transitions":!1},on:{close:function(n){return e.handleClose(t)},click:function(n){return e.changeMenu(t)}}},[e._v(" "+e._s(t.label)+" ")])})),1)},y=[],k={computed:u({},Object(l["c"])({tags:function(e){return e.tab.tabsList}})),data:function(){return{dynamicTags:["标签一","标签二","标签三"],inputVisible:!1,inputValue:""}},methods:u({},Object(l["b"])({close:"closeTab"}),{handleClose:function(e){this.close(e)},changeMenu:function(e){this.$router.push({name:e.name}),this.$store.commit("selectMenu",e)}})},C=k,$=(n("60d7"),Object(d["a"])(C,_,y,!1,null,"99aa73e6",null)),M=$.exports,P={components:{ComHeader:p,ComAside:j,ComTab:M}},x=P,D=(n("2b25"),Object(d["a"])(x,r,c,!1,null,"40d6cfef",null));t["default"]=D.exports},dbb4:function(e,t,n){var r=n("23e7"),c=n("83ab"),a=n("56ef"),o=n("fc6a"),i=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(e){var t,n,r=o(e),c=i.f,u=a(r),l={},f=0;while(u.length>f)n=c(r,t=u[f++]),void 0!==n&&s(l,t,n);return l}})},e439:function(e,t,n){var r=n("23e7"),c=n("d039"),a=n("fc6a"),o=n("06cf").f,i=n("83ab"),s=c((function(){o(1)})),u=!i||s;r({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(a(e),t)}})}}]);
//# sourceMappingURL=chunk-24f257c8.05dc358f.js.map