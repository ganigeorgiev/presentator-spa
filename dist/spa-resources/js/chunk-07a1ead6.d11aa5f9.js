(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07a1ead6"],{"097d":function(t,e,s){"use strict";var i=s("5ca1"),a=s("8378"),n=s("7726"),r=s("ebd6"),o=s("bcaa");i(i.P+i.R,"Promise",{finally:function(t){var e=r(this,a.Promise||n.Promise),s="function"==typeof t;return this.then(s?function(s){return o(e,t()).then((function(){return s}))}:t,s?function(s){return o(e,t()).then((function(){throw s}))}:t)}})},"11b2":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"slotWrapper"},[t._t("default")],2)])},a=[],n={name:"relocator",props:{container:{default:"body"}},computed:{containerElem(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted(){if(this.containerElem){let t=this.$refs.slotWrapper;t.parentNode.removeChild(t),this.containerElem.appendChild(t),this.$once("hook:beforeDestroy",()=>{t&&(t.parentNode.removeChild(t),this.$el.appendChild(t))})}}},r=n,o=s("2877"),c=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},1293:function(t,e,s){"use strict";s("49b4")},3905:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])||e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[e("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),e("div",{staticClass:"popup-panel"},[t.closeBtn?e("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),e("div",{staticClass:"popup-header"},[t._t("header")],2),e("div",{staticClass:"popup-content"},[t._t("content")],2),e("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},a=[],n={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data(){return{isActive:!1,isClosing:!1}},methods:{open(){this.isActive=!0,this.isClosing=!1,this.$nextTick(()=>{this.$refs.popupContainer.focus()}),document.body.classList.add("popup-active"),this.$nextTick(()=>{let t=this.$el.querySelector("form input");t&&t.focus()})},close(){this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout(()=>{this.isActive=!1,this.isClosing=!1},300))}}},r=n,o=s("2877"),c=Object(o["a"])(r,i,a,!1,null,null,null);e["a"]=c.exports},"438c":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"app-footer"},[e("div",{staticClass:"info"},[e("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_RELEASES_URL"),target:"_blank",rel:"noopener"}},[e("span",{staticClass:"txt"},[t._v("Presentator v2.14.0")])]),e("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fe fe-github"}),e("span",{staticClass:"txt"},[t._v("Github")])]),t.loggedUser&&t.loggedUser.id&&t.$getAppConfig("VUE_APP_SHOW_SEND_FEEDBACK")<<0?e("div",{staticClass:"info-item handle",on:{click:function(e){return e.preventDefault(),t.openFeedbackPopup()}}},[e("i",{staticClass:"fe fe-life-buoy"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])]):t._e(),t._l(t.getFooterLinks(),(function(s,i){return e("a",{staticClass:"info-item",attrs:{href:s,target:"_blank",rel:"noopener"}},[e("span",{staticClass:"txt"},[t._v(t._s(i))])])})),e("div",{staticClass:"info-item"},[e("languages-select")],1)],2),t.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0?e("div",{staticClass:"credits"},[e("i18n",{attrs:{path:"Crafted by {author}"}},[e("a",{attrs:{slot:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"},slot:"author"},[t._v("Gani")])])],1):t._e(),t.$getAppConfig("VUE_APP_SHOW_SEND_FEEDBACK")<<0?e("relocator",[e("feedback-popup",{ref:"feedbackPopup"})],1):t._e()],1)},a=[],n=(s("ac6a"),s("28a5"),s("ade3")),r=s("2f62"),o=s("11b2"),c=function(){var t=this,e=t._self._c;return e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[e("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:t._u([{key:"header",fn:function(){return[e("h4",{staticClass:"title"},[t._v(t._s(t.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[e("p",[t._v(" "+t._s(t.$t("Found a bug or have a feature request?"))+" "),e("br"),e("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[e("a",{attrs:{slot:"issuesLink",href:t.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"},slot:"issuesLink"},[t._v(t._s(t.$t("create a GitHub issue")))])])],1)]),e("form-field",{staticClass:"required",attrs:{name:"message"}},[e("label",{attrs:{for:"feedback_message"}},[t._v(t._s(t.$t("Message")))]),e("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[e("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),e("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])])]},proxy:!0}])})],1)},l=[],p=(s("097d"),s("f744")),u=s("3905"),d={name:"feedback-popup",components:{popup:u["a"]},data(){return{isProcessing:!1,message:""}},methods:{open(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close(){this.$refs.popup.close(),this.$emit("close")},resetForm(){this.message=""},submitForm(){this.isProcessing||(this.isProcessing=!0,p["a"].Users.sendFeedback(this.message).then(t=>{this.$toast(this.$t("Thank you for the feedback!")),this.close(),this.resetForm()}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isProcessing=!1}))}}},f=d,v=s("2877"),m=Object(v["a"])(f,c,l,!1,null,null,null),h=m.exports,g=s("f7ef");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"app-footer",components:{relocator:o["a"],"feedback-popup":h,"languages-select":g["a"]},computed:C({},Object(r["d"])({loggedUser:t=>t.user.user})),methods:{getFooterLinks(){const t=(this.$getAppConfig("VUE_APP_FOOTER_LINKS")||"").split(","),e={};for(let s=0;s<t.length;s++){let i=t[s].split("|",2),a=(i[0]||"").trim(),n=(i[1]||"").trim();a.length&&n.length&&(e[a]=n)}return e},openFeedbackPopup(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},y=_,j=Object(v["a"])(y,i,a,!1,null,null,null);e["a"]=j.exports},"456d":function(t,e,s){var i=s("4bf8"),a=s("0d58");s("5eda")("keys",(function(){return function(t){return a(i(t))}}))},"49b4":function(t,e,s){},"4eee":function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("aside",{staticClass:"app-sidebar"},[e("div",{staticClass:"app-sidebar-section app-sidebar-header"},[e("router-link",{staticClass:"logo",attrs:{to:{name:"home"},title:"Presentator"}},[e("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"41",height:"53"}})])],1),e("div",{staticClass:"app-sidebar-section app-sidebar-content"},[e("nav",{staticClass:"main-menu"},[t._t("default")],2)]),e("div",{staticClass:"app-sidebar-section app-sidebar-footer"},[e("nav",{staticClass:"meta-menu m-b-small"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Notifications"),expression:"$t('Notifications')",modifiers:{right:!0}}],staticClass:"menu-item",class:{active:t.$refs.notificationsPanel&&t.$refs.notificationsPanel.isActive},on:{click:function(e){e.preventDefault(),t.$refs.notificationsPanel&&t.$refs.notificationsPanel.toggle()}}},[t.unreadComments.length?e("span",{staticClass:"beacon beacon-danger"}):t._e(),e("i",{staticClass:"fe fe-bell"})]),e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Recent activity"),expression:"$t('Recent activity')",modifiers:{right:!0}}],staticClass:"menu-item",class:{active:t.$refs.activityPanel&&t.$refs.activityPanel.isActive},on:{click:function(e){e.preventDefault(),t.$refs.activityPanel&&t.$refs.activityPanel.toggle()}}},[e("i",{staticClass:"fe fe-activity"})])]),t.loggedUser&&t.loggedUser.id?e("div",{staticClass:"user-profile"},[e("figure",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.loggedUser.identifier,expression:"loggedUser.identifier",modifiers:{right:!0}}],staticClass:"avatar"},[t.loggedUser.getAvatar("small")?e("img",{attrs:{src:t.loggedUser.getAvatar("small"),alt:"User avatar"}}):e("i",{staticClass:"fe fe-user"})]),e("toggler",{staticClass:"dropdown dropdown-sm"},[e("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"user",params:{userId:t.loggedUser.id}}}},[e("i",{staticClass:"fe fe-settings"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Settings")))])]),e("hr"),e("div",{staticClass:"dropdown-item link-danger",on:{click:function(e){return e.preventDefault(),t.logout()}}},[e("i",{staticClass:"fe fe-log-out"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Sign out")))])])],1)],1):t._e()]),e("activity-panel",{ref:"activityPanel"}),e("notifications-panel",{ref:"notificationsPanel"})],1)},a=[],n=(s("ac6a"),s("ade3")),r=s("2f62"),o=function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"sidebarPanel"}},[t.isActive?e("aside",{directives:[{name:"shortcut",rawName:"v-shortcut.27",value:t.hide,expression:"hide",modifiers:{27:!0}},{name:"outside-click",rawName:"v-outside-click",value:{handler:t.hide,status:t.isActive},expression:"{\n                'handler': hide,\n                'status':  isActive,\n            }"}],staticClass:"app-sidebar-panel no-b"},[e("div",{staticClass:"app-sidebar-section app-sidebar-header"},[e("h4",{staticClass:"title"},[t._v(t._s(t.$t("Recent activity")))]),e("div",{staticClass:"list-ctrls"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Close panel"),expression:"$t('Close panel')",modifiers:{right:!0}}],staticClass:"list-ctrl-item",on:{click:function(e){return e.preventDefault(),t.hide.apply(null,arguments)}}},[e("i",{staticClass:"fe fe-x"})])]),e("div",{staticClass:"clearfix m-b-small"}),e("div",{staticClass:"form-group form-group-sm"},[e("select",[e("option",{domProps:{value:null}},[t._v(t._s(t.$t("Viewed project links")))])])])]),e("div",{staticClass:"app-sidebar-section app-sidebar-content"},[t.isLoading?e("div",{staticClass:"placeholder-block"},[e("span",{staticClass:"loader"})]):t._e(),t.isLoading||t.projectLinks.length?t._e():e("div",{staticClass:"placeholder-block"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fe fe-activity"})]),e("div",{staticClass:"content"},[t._v(t._s(t.$t("No recent activity to show.")))])]),!t.isLoading&&t.projectLinks.length?e("div",{staticClass:"cards-list"},t._l(t.projectLinks,(function(s){return e("a",{staticClass:"card",attrs:{target:"_blank",href:s.fullUrl}},[e("figure",{staticClass:"icon"},[e("i",{staticClass:"fe fe-link-2"})]),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v(t._s(s.project?s.project.title:s.slug))]),e("div",{staticClass:"meta"},[e("div",{staticClass:"meta-item"},[t._v(t._s(s.fullUrl))])])])])})),0):t._e()])]):t._e()])},c=[],l=(s("097d"),s("f744")),p=s("ba5d"),u={name:"activity-panel",data(){return{isActive:!1,isLoading:!1,projectLinks:[]}},methods:{hide(){this.isActive=!1},show(){this.isActive=!0,this.getAccessedProjectLinks()},toggle(){this.isActive?this.hide():this.show()},getAccessedProjectLinks(){this.isLoading=!0,l["a"].ProjectLinks.getAccessed(1,30).then(t=>{this.projectLinks=p["a"].createInstances(t.data)}).catch(t=>{this.$errResponseHandler(t)}).finally(()=>{this.isLoading=!1})}}},d=u,f=s("2877"),v=Object(f["a"])(d,o,c,!1,null,null,null),m=v.exports,h=(s("456d"),function(){var t=this,e=t._self._c;return e("transition",{attrs:{name:"sidebarPanel"}},[t.isActive?e("aside",{directives:[{name:"shortcut",rawName:"v-shortcut.27",value:t.hide,expression:"hide",modifiers:{27:!0}},{name:"outside-click",rawName:"v-outside-click",value:{handler:t.hide,status:t.isActive},expression:"{\n                'handler': hide,\n                'status':  isActive,\n            }"}],staticClass:"app-sidebar-panel no-b"},[e("div",{staticClass:"app-sidebar-section app-sidebar-header"},[e("h4",{staticClass:"title"},[t._v(t._s(t.$t("Notifications")))]),e("div",{staticClass:"list-ctrls"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Close panel"),expression:"$t('Close panel')",modifiers:{right:!0}}],staticClass:"list-ctrl-item",on:{click:function(e){return e.preventDefault(),t.hide.apply(null,arguments)}}},[e("i",{staticClass:"fe fe-x"})])]),e("div",{staticClass:"clearfix m-b-small"}),e("div",{staticClass:"form-group form-group-sm"},[Object.keys(t.projectsList).length?e("select",{directives:[{name:"model",rawName:"v-model",value:t.activeProjectId,expression:"activeProjectId"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.activeProjectId=e.target.multiple?s:s[0]}}},[e("option",{domProps:{value:null}},[t._v(t._s(t.$t("All projects")))]),t._l(t.projectsList,(function(s,i){return e("option",{key:"filter_"+i,domProps:{value:i}},[t._v(" "+t._s(s)+" ")])}))],2):t._e()]),t.activeUnreadComments.length?e("div",{staticClass:"block txt-right m-t-5"},[e("small",{staticClass:"link-primary",on:{click:function(e){return e.preventDefault(),t.markAllActiveAsRead.apply(null,arguments)}}},[t._v(t._s(t.$t("Mark all as read")))])]):t._e()]),e("div",{staticClass:"app-sidebar-section app-sidebar-content"},[t.isLoading?e("div",{staticClass:"placeholder-block"},[e("span",{staticClass:"loader"})]):t._e(),t.isLoading||t.activeUnreadComments.length?t._e():e("div",{staticClass:"placeholder-block"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fe fe-bell"})]),e("div",{staticClass:"content"},[t._v(t._s(t.$t("No notifications to show.")))])]),!t.isLoading&&t.activeUnreadComments.length?e("div",{staticClass:"comments-list"},t._l(t.activeUnreadComments,(function(s){return e("div",{key:"notification_"+s.id,staticClass:"comment-list-item"},[e("figure",{staticClass:"avatar"},[s.user&&s.user.getAvatar("small")?e("img",{attrs:{src:s.user.getAvatar("small"),alt:t.$t("User avatar")}}):e("i",{staticClass:"fe fe-user"})]),e("div",{staticClass:"content"},[e("small",{staticClass:"content-header"},[e("span",{staticClass:"name"},[t._v(t._s(s.user?s.user.identifier:s.from))]),e("span",{staticClass:"date txt-hint",attrs:{title:s.createdAtLocal}},[t._v(" "+t._s(s.createdAtFromNow)+" ")])]),e("div",{staticClass:"message"},[t._v(t._s(s.message))]),s.metaData?e("div",{staticClass:"meta"},[s.metaData.screenTitle?e("div",{staticClass:"meta-item",attrs:{title:s.metaData.screenTitle}},[e("span",{staticClass:"txt screen-title"},[t._v(t._s(s.metaData.screenTitle))])]):t._e(),e("router-link",{staticClass:"meta-item link-primary",attrs:{to:{name:"screen",params:{projectId:s.metaData.projectId,prototypeId:s.metaData.prototypeId,screenId:s.metaData.screenId},query:{mode:"comments",commentId:s.replyTo||s.id}}}},[e("span",{staticClass:"txt"},[t._v("Details")])])],1):t._e()]),e("div",{staticClass:"list-ctrls"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Mark as read"),expression:"$t('Mark as read')",modifiers:{top:!0}}],staticClass:"list-ctrl-item ctrl-success",on:{click:function(e){return e.preventDefault(),t.markAsRead(s.id)}}},[e("i",{staticClass:"fe fe-check"})])])])})),0):t._e()])]):t._e()])}),g=[];function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var _={name:"notifications-panel",data(){return{isActive:!1,isLoading:!1,activeProjectId:null}},computed:C(C(C({},Object(r["d"])({unreadComments:t=>t.notifications.unreadComments})),Object(r["c"])({getUnreadCommentsForProject:"notifications/getUnreadCommentsForProject"})),{},{projectsList(){var t={};for(let e in this.unreadComments)this.unreadComments[e].metaData&&(t[this.unreadComments[e].metaData.projectId]=this.unreadComments[e].metaData.projectTitle||"N/A");return t},activeUnreadComments(){return this.activeProjectId?this.getUnreadCommentsForProject(this.activeProjectId):this.unreadComments}}),watch:{projectsList(t,e){this.activeProjectId&&!this.projectsList[this.activeProjectId]&&(this.activeProjectId=null)}},methods:C(C({},Object(r["b"])({loadUserUnreadComments:"notifications/loadUserUnreadComments",markAsRead:"notifications/markAsRead"})),{},{hide(){this.isActive=!1},show(){this.isActive=!0,this.activeProjectId=null,this.isLoading=!0,this.loadUserUnreadComments().finally(()=>{this.isLoading=!1}).catch(t=>{})},toggle(){this.isActive?this.hide():this.show()},markAllActiveAsRead(){var t=this.activeUnreadComments.slice();for(let e=t.length-1;e>=0;e--)this.markAsRead(t[e].id)}})},y=_,j=(s("1293"),Object(f["a"])(y,h,g,!1,null,"174168c8",null)),k=j.exports;function P(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function O(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?P(Object(s),!0).forEach((function(e){Object(n["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var w={name:"app-sidebar",components:{"activity-panel":m,"notifications-panel":k},computed:O({},Object(r["d"])({loggedUser:t=>t.user.user,unreadComments:t=>t.notifications.unreadComments})),methods:{logout(){this.$logout(),this.$toast(this.$t("You have been signed out successfully."))}}},$=w,A=Object(f["a"])($,i,a,!1,null,null,null);e["a"]=A.exports},"5eda":function(t,e,s){var i=s("5ca1"),a=s("8378"),n=s("79e5");t.exports=function(t,e){var s=(a.Object||{})[t]||Object[t],r={};r[t]=e(s),i(i.S+i.F*n((function(){s(1)})),"Object",r)}},"81fb":function(t,e,s){t.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},"9c86":function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s("9242"),a=s("dd93");class n extends i["a"]{load(t){t=t||{},super.load(t),this.title=a["a"].isEmpty(t.title)?"":t.title,this.archived=a["a"].isEmpty(t.archived)?0:t.archived<<0,this.pinned=a["a"].isEmpty(t.pinned)?0:t.pinned<<0,this.featuredScreen=a["a"].isEmpty(t.featuredScreen)?{}:t.featuredScreen}getFeaturedScreen(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[t]||this.featuredScreen["original"]||""}get isArchived(){return!!this.archived}get isPinned(){return!!this.pinned}}},a5b8:function(t,e,s){"use strict";var i=s("d8e8");function a(t){var e,s;this.promise=new t((function(t,i){if(void 0!==e||void 0!==s)throw TypeError("Bad Promise constructor");e=t,s=i})),this.resolve=i(e),this.reject=i(s)}t.exports.f=function(t){return new a(t)}},ba5d:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s("9242"),a=s("72a1"),n=s("9c86"),r=s("dd93");class o extends i["a"]{load(t){t=t||{},super.load(t),this.projectId=r["a"].isEmpty(t.projectId)?null:t.projectId,this.slug=r["a"].isEmpty(t.slug)?"":t.slug,this.passwordProtected=!!t.passwordProtected,this.allowComments=!!t.allowComments,this.allowGuideline=!!t.allowGuideline,r["a"].isArray(t.prototypes)?this.prototypes=a["a"].createInstances(t.prototypes):this.prototypes=this.prototypes||[],this.project=null,r["a"].isEmpty(t.projectInfo)?t.project&&t.project instanceof n["a"]&&(this.project=t.project):this.project=new n["a"](t.projectInfo)}get baseUrl(){var t=r["a"].getNestedVal(window,"location.origin","");return r["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(t+="/#"),t=t.endsWith("/")?t.substring(0,t.length-1):t,t}get relativeUrl(){return"/"+this.slug}get fullUrl(){return this.baseUrl+this.relativeUrl}get prototypeIds(){var t=[];for(let e in this.prototypes)this.prototypes[e].id&&t.push(this.prototypes[e].id);return t}}},bcaa:function(t,e,s){var i=s("cb7c"),a=s("d3f4"),n=s("a5b8");t.exports=function(t,e){if(i(t),a(e)&&e.constructor===t)return e;var s=n.f(t),r=s.resolve;return r(e),s.promise}},f7ef:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[e("div",{staticClass:"selected-language"},[e("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v(" ("),e("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(") ")]),e("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,(function(s,i){return e("div",{key:"language_"+i,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==i},on:{click:function(e){return e.preventDefault(),t.changeLanguage(i)}}},[e("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==i?"label-transp-primary":"label-light-border"},[t._v(t._s(i))]),e("span",{staticClass:"txt language-title"},[t._v(t._s(s))])])})),0)],1)},a=[],n=(s("097d"),s("9225")),r={name:"languages-select",data(){return{isChanging:!1,languages:Object.assign({},n["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode(){return this.$i18n.locale},activeLanguageTitle(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage(t){this.isChanging=!0,Object(n["a"])(t).finally(()=>{this.isChanging=!1})}}},o=r,c=s("2877"),l=Object(c["a"])(o,i,a,!1,null,null,null);e["a"]=l.exports}}]);