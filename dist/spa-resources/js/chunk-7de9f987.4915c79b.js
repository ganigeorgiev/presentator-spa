(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7de9f987"],{"11b2":function(e,t,s){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",[t("div",{ref:"slotWrapper"},[e._t("default")],2)])},r=[],o={name:"relocator",props:{container:{default:"body"}},computed:{containerElem(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted(){if(this.containerElem){let e=this.$refs.slotWrapper;e.parentNode.removeChild(e),this.containerElem.appendChild(e),this.$once("hook:beforeDestroy",()=>{e&&(e.parentNode.removeChild(e),this.$el.appendChild(e))})}}},n=o,a=s("2877"),c=Object(a["a"])(n,i,r,!1,null,null,null);t["a"]=c.exports},3905:function(e,t,s){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{ref:"popupContainer",staticClass:"popup",class:{active:e.isActive,"is-closing":e.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])||t.target!==t.currentTarget?null:void(!e.closeOnEsc||e.close())}}},[t("div",{staticClass:"popup-overlay",on:{click:function(t){t.preventDefault(),!e.closeOnOverlay||e.close()}}}),t("div",{staticClass:"popup-panel"},[e.closeBtn?t("span",{staticClass:"popup-close-handle popup-close",on:{click:function(t){return t.preventDefault(),e.close()}}}):e._e(),t("div",{staticClass:"popup-header"},[e._t("header")],2),t("div",{staticClass:"popup-content"},[e._t("content")],2),t("div",{staticClass:"popup-footer"},[e._t("footer")],2)])])},r=[],o={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data(){return{isActive:!1,isClosing:!1}},methods:{open(){this.isActive=!0,this.isClosing=!1,this.$nextTick(()=>{this.$refs.popupContainer.focus()}),document.body.classList.add("popup-active"),this.$nextTick(()=>{let e=this.$el.querySelector("form input");e&&e.focus()})},close(){this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout(()=>{this.isActive=!1,this.isClosing=!1},300))}}},n=o,a=s("2877"),c=Object(a["a"])(n,i,r,!1,null,null,null);t["a"]=c.exports},"7f7f":function(e,t,s){var i=s("86cc").f,r=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in r||s("9e1e")&&i(r,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"9c86":function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var i=s("9242"),r=s("dd93");class o extends i["a"]{load(e){e=e||{},super.load(e),this.title=r["a"].isEmpty(e.title)?"":e.title,this.archived=r["a"].isEmpty(e.archived)?0:e.archived<<0,this.pinned=r["a"].isEmpty(e.pinned)?0:e.pinned<<0,this.featuredScreen=r["a"].isEmpty(e.featuredScreen)?{}:e.featuredScreen}getFeaturedScreen(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[e]||this.featuredScreen["original"]||""}get isArchived(){return!!this.archived}get isPinned(){return!!this.pinned}}},ba5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var i=s("9242"),r=s("72a1"),o=s("9c86"),n=s("dd93");class a extends i["a"]{load(e){e=e||{},super.load(e),this.projectId=n["a"].isEmpty(e.projectId)?null:e.projectId,this.slug=n["a"].isEmpty(e.slug)?"":e.slug,this.passwordProtected=!!e.passwordProtected,this.allowComments=!!e.allowComments,this.allowGuideline=!!e.allowGuideline,n["a"].isArray(e.prototypes)?this.prototypes=r["a"].createInstances(e.prototypes):this.prototypes=this.prototypes||[],this.project=null,n["a"].isEmpty(e.projectInfo)?e.project&&e.project instanceof o["a"]&&(this.project=e.project):this.project=new o["a"](e.projectInfo)}get baseUrl(){var e=n["a"].getNestedVal(window,"location.origin","");return n["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(e+="/#"),e=e.endsWith("/")?e.substring(0,e.length-1):e,e}get relativeUrl(){return"/"+this.slug}get fullUrl(){return this.baseUrl+this.relativeUrl}get prototypeIds(){var e=[];for(let t in this.prototypes)this.prototypes[t].id&&e.push(this.prototypes[t].id);return e}}},db9e:function(e,t,s){"use strict";s("7f7f");var i=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"floating-bar preview-bar",class:{active:e.isActive,"responsive-show-more":e.isResponsiveShowMoreActive}},[t("div",{staticClass:"visibility-toggle",on:{click:function(t){return t.preventDefault(),e.toggle()}}},[t("span",{staticClass:"txt"},[e._v(e._s(e.isActive?e.$t("Hide"):e.$t("Show")))])]),t("div",{staticClass:"nav nav-left"},[e._t("left")],2),t("div",{staticClass:"nav nav-center"},[e.projectLink.allowGuideline?t("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Guideline ({shortcut})",{shortcut:"G"}),expression:"$t('Guideline ({shortcut})', {shortcut: 'G'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.71",value:e.selfClick,expression:"selfClick",modifiers:{71:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-warning",attrs:{to:{name:"preview-guideline",params:{slug:e.projectLink.slug},query:{}},"active-class":"highlight"}},[t("i",{staticClass:"fe fe-book-open"})]):e._e(),t("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Preview mode ({shortcut})",{shortcut:"P"}),expression:"$t('Preview mode ({shortcut})', {shortcut: 'P'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.80",value:e.selfClick,expression:"selfClick",modifiers:{80:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-success",attrs:{to:{name:"preview-prototype",params:Object.assign({},e.$route.params,{slug:e.projectLink.slug,prototypeId:e.activePrototypeId}),query:Object.assign({},e.$route.query,{mode:"preview"})},"exact-active-class":"highlight"}},[t("i",{staticClass:"fe fe-eye"})]),e.projectLink.allowComments?t("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Comments mode ({shortcut})",{shortcut:"C"}),expression:"$t('Comments mode ({shortcut})', {shortcut: 'C'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.67",value:e.selfClick,expression:"selfClick",modifiers:{67:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-danger",attrs:{to:{name:"preview-prototype",params:Object.assign({},e.$route.params,{slug:e.projectLink.slug,prototypeId:e.activePrototypeId}),query:Object.assign({},e.$route.query,{mode:"comments"})},"exact-active-class":"highlight"}},["preview-prototype"==e.$route.name&&e.totalActiveScreenUnresolvedComments>0?t("span",{staticClass:"pin",class:{animate:e.totalActiveScreenUnreadComments>0}},[e._v(" "+e._s(e.totalActiveScreenUnresolvedComments)+" ")]):e._e(),t("i",{staticClass:"fe fe-message-circle"})]):e._e(),t("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("More tools"),expression:"$t('More tools')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-responsive-show-more responsive-only",on:{click:function(t){return t.preventDefault(),e.responsiveShowMore.apply(null,arguments)}}},[t("i",{staticClass:"fe fe-more-horizontal"})])],1),t("div",{staticClass:"nav nav-right"},[e._t("right"),t("div",{staticClass:"ctrl-item ctrl-item-circle ctrl-item-settings"},[t("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Preview info"),expression:"$t('Preview info')",modifiers:{top:!0}}]},[t("i",{staticClass:"fe fe-info"})]),t("preview-info-popover",{ref:"projectInfoPopover",staticClass:"transform-bottom-right",attrs:{project:e.project}})],1),t("div",{staticClass:"flex-fill-block responsive-only"}),t("div",{staticClass:"ctrl-item ctrl-item-circle ctrl-item-responsive-hide-more responsive-only",on:{click:function(t){return t.preventDefault(),e.responsiveHideMore.apply(null,arguments)}}},[t("i",{staticClass:"fe fe-x"})])],2)])},r=[],o=(s("ac6a"),s("ade3")),n=s("2f62"),a=s("0abc"),c=s("3d48"),l=s("9c86"),p=s("ba5d"),u=function(){var e=this,t=e._self._c;return t("toggler",{staticClass:"popover popover-sm preview-info-popover no-clip",attrs:{hideOnChildClick:!1}},[t("div",{staticClass:"content txt-center"},[t("p",[t("strong",[e._v(e._s(e.project.title))])]),e.$getAppConfig("VUE_APP_PROJECT_URL")?t("p",{staticClass:"txt-hint txt-small"},[t("i18n",{attrs:{path:"Presented with {projectLink}."}},[t("a",{attrs:{slot:"projectLink",href:e.$getAppConfig("VUE_APP_PROJECT_URL"),target:"_blank",rel:"noopener"},slot:"projectLink"},[e._v("Presentator")])])],1):e._e(),t("div",{staticClass:"clearfix m-t-small"}),t("language-select"),e.$getAppConfig("VUE_APP_SHOW_SPAM_REPORT")<<0?[t("div",{staticClass:"clearfix m-t-small"}),t("small",{staticClass:"link-danger link-fade",on:{click:function(t){return t.preventDefault(),e.openReportPopup.apply(null,arguments)}}},[t("i",{staticClass:"fe fe-flag m-r-5"}),t("span",{staticClass:"txt"},[e._v(e._s(e.$t("Report")))])])]:e._e()],2),t("relocator",[t("report-popup",{ref:"reportPopup"})],1)],1)},d=[],v=s("11b2"),m=function(){var e=this,t=e._self._c;return t("form",{on:{submit:function(t){return t.preventDefault(),e.submitForm()}}},[t("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:e._u([{key:"header",fn:function(){return[t("h4",{staticClass:"title"},[e._v(e._s(e.$t("Report this project for spam or abusive content")))])]},proxy:!0},{key:"content",fn:function(){return[t("form-field",{attrs:{name:"details"}},[t("label",{attrs:{for:"report_details"}},[e._v(e._s(e.$t("Additional details")))]),t("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.details,expression:"details",modifiers:{trim:!0}}],attrs:{id:"report_details"},domProps:{value:e.details},on:{input:function(t){t.target.composing||(e.details=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[t("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),e.close()}}},[t("span",{staticClass:"txt"},[e._v(e._s(e.$t("Cancel")))])]),t("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":e.isProcessing},attrs:{type:"submit"}},[t("span",{staticClass:"txt"},[e._v(e._s(e.$t("Report")))])])]},proxy:!0}])})],1)},h=[],f=(s("a481"),s("097d"),s("f744")),g=s("3905");function C(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?C(Object(s),!0).forEach((function(t){Object(o["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):C(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var b={name:"report-popup",components:{popup:g["a"]},data(){return{isProcessing:!1,details:""}},computed:y({},Object(n["d"])({previewToken:e=>e.preview.previewToken})),methods:{open(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close(){this.$refs.popup.close(),this.$emit("close")},resetForm(){this.details=""},submitForm(){this.isProcessing||(this.isProcessing=!0,f["a"].Previews.report(this.previewToken,this.details).then(e=>{this.$toast(this.$t("Thank you, we will investigate and remove the project if found inappropriate."),"success",6e3),this.$router.replace({name:"home"})}).catch(e=>{this.$errResponseHandler(e)}).finally(()=>{this.isProcessing=!1}))}}},_=b,w=s("2877"),j=Object(w["a"])(_,m,h,!1,null,null,null),O=j.exports,P=s("f7ef"),k={name:"preview-info-popover",components:{relocator:v["a"],"report-popup":O,"language-select":P["a"]},props:{project:{type:l["a"],required:!0}},methods:{openReportPopup(){this.$refs.reportPopup&&this.$refs.reportPopup.open()}}},S=k,$=Object(w["a"])(S,u,d,!1,null,null,null),A=$.exports;function x(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function E(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?x(Object(s),!0).forEach((function(t){Object(o["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var I={name:"preview-bar",components:{"preview-info-popover":A},props:{project:{type:l["a"],required:!0},projectLink:{type:p["a"],required:!0}},data(){return{isActive:!0,isResponsiveShowMoreActive:!1}},computed:E(E(E({},Object(n["d"])({activePrototypeId:e=>e.prototypes.activePrototypeId,activeScreenId:e=>e.screens.activeScreenId})),Object(n["c"])({getCommentsForScreen:"comments/getCommentsForScreen",getUnreadCommentsForScreen:"notifications/getUnreadCommentsForScreen"})),{},{activeScreenComments(){return this.getCommentsForScreen(this.activeScreenId)},totalActiveScreenComments(){return this.activeScreenComments.length},activeScreenResolvedComments(){return this.getCommentsForScreen(this.activeScreenId,"resolved")},totalActiveScreenResolvedComments(){return this.activeScreenResolvedComments.length},activeScreenUnreadComments(){return this.getUnreadCommentsForScreen(this.activeScreenId)},totalActiveScreenUnreadComments(){return this.activeScreenUnreadComments.length},totalActiveScreenUnresolvedComments(){return this.totalActiveScreenComments-this.totalActiveScreenResolvedComments}}),mounted(){var e=c["a"].getItem(a["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0);e?this.show():this.hide()},methods:{show(){this.isActive=!0,document.body.classList.remove("hide-distractions"),c["a"].setItem(a["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0),this.responsiveHideMore(),this.$emit("show")},hide(){this.isActive=!1,document.body.classList.add("hide-distractions"),c["a"].setItem(a["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!1),this.responsiveHideMore(),this.$emit("hide")},toggle(){this.isActive?this.hide():this.show()},responsiveShowMore(){this.isResponsiveShowMoreActive=!0},responsiveHideMore(){this.isResponsiveShowMoreActive=!1},goToGuideline(){this.$router.push({name:"preview-guideline",params:{slug:this.projectLink.slug}})},selfClick(e,t){t&&t.click()}}},R=I,L=Object(w["a"])(R,i,r,!1,null,null,null);t["a"]=L.exports},f7ef:function(e,t,s){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"languages-select",class:{loading:e.isChanging}},[t("div",{staticClass:"selected-language"},[t("span",{staticClass:"txt language-title"},[e._v(e._s(e.activeLanguageTitle))]),e._v(" ("),t("span",{staticClass:"txt language-code"},[e._v(e._s(e.activeLanguageCode))]),e._v(") ")]),t("toggler",{staticClass:"dropdown dropdown-sm"},e._l(e.languages,(function(s,i){return t("div",{key:"language_"+i,staticClass:"dropdown-item",class:{active:e.activeLanguageCode==i},on:{click:function(t){return t.preventDefault(),e.changeLanguage(i)}}},[t("small",{staticClass:"label language-code m-r-5",class:e.activeLanguageCode==i?"label-transp-primary":"label-light-border"},[e._v(e._s(i))]),t("span",{staticClass:"txt language-title"},[e._v(e._s(s))])])})),0)],1)},r=[],o=(s("097d"),s("9225")),n={name:"languages-select",data(){return{isChanging:!1,languages:Object.assign({},o["c"])}},watch:{"$i18n.locale":function(e,t){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode(){return this.$i18n.locale},activeLanguageTitle(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage(e){this.isChanging=!0,Object(o["a"])(e).finally(()=>{this.isChanging=!1})}}},a=n,c=s("2877"),l=Object(c["a"])(a,i,r,!1,null,null,null);t["a"]=l.exports}}]);