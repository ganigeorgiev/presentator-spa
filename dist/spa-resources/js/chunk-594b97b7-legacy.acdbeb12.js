(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-594b97b7"],{"5df3":function(e,t,s){"use strict";var i=s("02f4")(!0);s("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,s=this._i;return s>=t.length?{value:void 0,done:!0}:(e=i(t,s),this._i+=e.length,{value:e,done:!1})}))},"9c86":function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var i=s("d225"),o=s("b0b4"),n=s("308d"),r=s("6bb5"),a=s("2a88"),c=s("4e2b"),l=s("9242"),p=s("dd93"),u=function(e){function t(){return Object(i["a"])(this,t),Object(n["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"load",value:function(e){e=e||{},Object(a["a"])(Object(r["a"])(t.prototype),"load",this).call(this,e),this.title=p["a"].isEmpty(e.title)?"":e.title,this.archived=p["a"].isEmpty(e.archived)?0:e.archived<<0,this.featuredScreen=p["a"].isEmpty(e.featuredScreen)?{}:e.featuredScreen}},{key:"getFeaturedScreen",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.featuredScreen[e]||this.featuredScreen["original"]||""}},{key:"isArchived",get:function(){return!!this.archived}}]),t}(l["a"])},aef6:function(e,t,s){"use strict";var i=s("5ca1"),o=s("9def"),n=s("d2c8"),r="endsWith",a=""[r];i(i.P+i.F*s("5147")(r),"String",{endsWith:function(e){var t=n(this,e,r),s=arguments.length>1?arguments[1]:void 0,i=o(t.length),c=void 0===s?i:Math.min(o(s),i),l=String(e);return a?a.call(t,l,c):t.slice(c-l.length,c)===l}})},ba5d:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));s("aef6");var i=s("d225"),o=s("b0b4"),n=s("308d"),r=s("6bb5"),a=s("2a88"),c=s("4e2b"),l=s("9242"),p=s("72a1"),u=s("9c86"),d=s("dd93"),m=function(e){function t(){return Object(i["a"])(this,t),Object(n["a"])(this,Object(r["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"load",value:function(e){e=e||{},Object(a["a"])(Object(r["a"])(t.prototype),"load",this).call(this,e),this.projectId=d["a"].isEmpty(e.projectId)?null:e.projectId,this.slug=d["a"].isEmpty(e.slug)?"":e.slug,this.passwordProtected=!!e.passwordProtected,this.allowComments=!!e.allowComments,this.allowGuideline=!!e.allowGuideline,d["a"].isArray(e.prototypes)?this.prototypes=p["a"].createInstances(e.prototypes):this.prototypes=this.prototypes||[],this.project=null,d["a"].isEmpty(e.projectInfo)?e.project&&e.project instanceof u["a"]&&(this.project=e.project):this.project=new u["a"](e.projectInfo)}},{key:"baseUrl",get:function(){var e=d["a"].getNestedVal(window,"location.origin","");return d["a"].getNestedVal(window,"location.href","").indexOf("/#/")>0&&(e+="/#"),e=e.endsWith("/")?e.substring(0,e.length-1):e,e}},{key:"relativeUrl",get:function(){return"/"+this.slug}},{key:"fullUrl",get:function(){return this.baseUrl+this.relativeUrl}},{key:"prototypeIds",get:function(){var e=[];for(var t in this.prototypes)this.prototypes[t].id&&e.push(this.prototypes[t].id);return e}}]),t}(l["a"])},db9e:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"floating-bar preview-bar",class:{active:e.isActive,"responsive-show-more":e.isResponsiveShowMoreActive}},[s("div",{staticClass:"visibility-toggle",on:{click:function(t){return t.preventDefault(),e.toggle()}}},[s("span",{staticClass:"txt"},[e._v(e._s(e.isActive?e.$t("Hide"):e.$t("Show")))])]),s("div",{staticClass:"nav nav-left"},[e._t("left")],2),s("div",{staticClass:"nav nav-center"},[e.projectLink.allowGuideline?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Guideline ({shortcut})",{shortcut:"G"}),expression:"$t('Guideline ({shortcut})', {shortcut: 'G'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.71",value:e.selfClick,expression:"selfClick",modifiers:{71:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-warning",attrs:{to:{name:"preview-guideline",params:{slug:e.projectLink.slug},query:{}},"active-class":"highlight"}},[s("i",{staticClass:"fe fe-book-open"})]):e._e(),s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Preview mode ({shortcut})",{shortcut:"P"}),expression:"$t('Preview mode ({shortcut})', {shortcut: 'P'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.80",value:e.selfClick,expression:"selfClick",modifiers:{80:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-success",attrs:{to:{name:"preview-prototype",params:Object.assign({},e.$route.params,{slug:e.projectLink.slug,prototypeId:e.activePrototypeId}),query:Object.assign({},e.$route.query,{mode:"preview"})},"exact-active-class":"highlight"}},[s("i",{staticClass:"fe fe-eye"})]),e.projectLink.allowComments?s("router-link",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Comments mode ({shortcut})",{shortcut:"C"}),expression:"$t('Comments mode ({shortcut})', {shortcut: 'C'})",modifiers:{top:!0}},{name:"shortcut",rawName:"v-shortcut.67",value:e.selfClick,expression:"selfClick",modifiers:{67:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-danger",attrs:{to:{name:"preview-prototype",params:Object.assign({},e.$route.params,{slug:e.projectLink.slug,prototypeId:e.activePrototypeId}),query:Object.assign({},e.$route.query,{mode:"comments"})},"exact-active-class":"highlight"}},[e.activeUnreadComments.length?s("span",{staticClass:"beacon beacon-danger"}):e._e(),s("i",{staticClass:"fe fe-message-circle"})]):e._e(),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("More tools"),expression:"$t('More tools')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle ctrl-item-responsive-show-more responsive-only",on:{click:function(t){return t.preventDefault(),e.responsiveShowMore(t)}}},[s("i",{staticClass:"fe fe-more-horizontal"})])],1),s("div",{staticClass:"nav nav-right"},[e._t("right"),s("div",{staticClass:"ctrl-item ctrl-item-circle ctrl-item-settings"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Preview info"),expression:"$t('Preview info')",modifiers:{top:!0}}]},[s("i",{staticClass:"fe fe-info"})]),s("preview-info-popover",{ref:"projectInfoPopover",staticClass:"transform-bottom-right",attrs:{project:e.project}})],1),s("div",{staticClass:"flex-fill-block responsive-only"}),s("div",{staticClass:"ctrl-item ctrl-item-circle ctrl-item-responsive-hide-more responsive-only",on:{click:function(t){return t.preventDefault(),e.responsiveHideMore(t)}}},[s("i",{staticClass:"fe fe-x"})])],2)])},o=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("2f62"),a=s("0abc"),c=s("3d48"),l=s("9c86"),p=s("ba5d"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("toggler",{staticClass:"popover popover-sm preview-info-popover no-clip",attrs:{hideOnChildClick:!1}},[s("div",{staticClass:"content m-b-small txt-center"},[s("p",[s("strong",[e._v(e._s(e.project.title))])]),e.$getAppConfig("VUE_APP_PROJECT_URL")?s("p",{staticClass:"txt-hint txt-small"},[s("i18n",{attrs:{path:"Presented with {projectLink}."}},[s("a",{attrs:{slot:"projectLink",href:e.$getAppConfig("VUE_APP_PROJECT_URL"),target:"_blank",rel:"noopener"},slot:"projectLink"},[e._v("Presentator")])])],1):e._e(),s("div",{staticClass:"clearfix m-t-small"}),s("language-select")],1)])},d=[],m=s("f7ef"),v={name:"preview-info-popover",components:{"language-select":m["a"]},props:{project:{type:l["a"],required:!0}}},f=v,h=s("2877"),g=Object(h["a"])(f,u,d,!1,null,null,null),y=g.exports;function C(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function b(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?C(s,!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):C(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var w={name:"preview-bar",components:{"preview-info-popover":y},props:{project:{type:l["a"],required:!0},projectLink:{type:p["a"],required:!0}},data:function(){return{isActive:!0,isResponsiveShowMoreActive:!1}},computed:b({},Object(r["d"])({activePrototypeId:function(e){return e.prototypes.activePrototypeId},activeScreenId:function(e){return e.screens.activeScreenId}}),{},Object(r["c"])({getUnreadCommentsForScreen:"notifications/getUnreadCommentsForScreen"}),{activeUnreadComments:function(){return this.getUnreadCommentsForScreen(this.activeScreenId)}}),mounted:function(){var e=c["a"].getItem(a["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0);e?this.show():this.hide()},methods:{show:function(){this.isActive=!0,c["a"].setItem(a["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!0),this.responsiveHideMore(),this.$emit("show")},hide:function(){this.isActive=!1,c["a"].setItem(a["a"].get("VUE_APP_PREVIEW_BAR_VISIBLITY_STORAGE_KEY"),!1),this.responsiveHideMore(),this.$emit("hide")},toggle:function(){this.isActive?this.hide():this.show()},responsiveShowMore:function(){this.isResponsiveShowMoreActive=!0},responsiveHideMore:function(){this.isResponsiveShowMoreActive=!1},goToGuideline:function(){this.$router.push({name:"preview-guideline",params:{slug:this.projectLink.slug}})},selfClick:function(e,t){t&&t.click()}}},P=w,_=Object(h["a"])(P,i,o,!1,null,null,null);t["a"]=_.exports},f7ef:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"languages-select",class:{loading:e.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[e._v(e._s(e.activeLanguageTitle))]),e._v(" ("),s("span",{staticClass:"txt language-code"},[e._v(e._s(e.activeLanguageCode))]),e._v(") ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},e._l(e.languages,(function(t,i){return s("div",{key:"language_"+i,staticClass:"dropdown-item",class:{active:e.activeLanguageCode==i},on:{click:function(t){return t.preventDefault(),e.changeLanguage(i)}}},[s("small",{staticClass:"label language-code m-r-5",class:e.activeLanguageCode==i?"label-transp-primary":"label-light-border"},[e._v(e._s(i))]),s("span",{staticClass:"txt language-title"},[e._v(e._s(t))])])})),0)],1)},o=[],n=s("9225"),r={name:"languages-select",data:function(){return{isChanging:!1,languages:Object.assign({},n["c"])}},watch:{"$i18n.locale":function(e,t){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode:function(){return this.$i18n.locale},activeLanguageTitle:function(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage:function(e){var t=this;this.isChanging=!0,Object(n["a"])(e).finally((function(){t.isChanging=!1}))}}},a=r,c=s("2877"),l=Object(c["a"])(a,i,o,!1,null,null,null);t["a"]=l.exports},fb7f:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"preview-container-wrapper"},[s("div",{staticClass:"preview-container",class:{"comments-mode":e.isInCommentsMode,"preview-mode":e.isInPreviewMode,"preview-mode-hints":e.isPreviewModeHintsActive},style:{background:e.activePrototype&&e.activeScreen&&e.activePrototype.isForDesktop?e.activeScreen.background:null},attrs:{tabindex:"-1"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEscPress(t)}}},[s("div",{staticClass:"flex-fill-block"}),s("active-comment-popover",{ref:"commentPopover",attrs:{isForPreview:!0,mentionsList:e.mentionsList}}),e.isLoadingData?s("div",{staticClass:"block txt-center"},[s("span",{staticClass:"loader loader-lg loader-blend"})]):e._e(),e.isLoadingData||e.screens.length?e._e():s("div",{staticClass:"block scroll-block txt-center p-base"},[e._m(0),s("h4",[e._v(e._s(e.$t("No prototype screens to show.")))])]),!e.isLoadingData&&e.screens.length?s("screen-preview",{ref:"screenPreview",attrs:{interactions:e.isInPreviewMode,activeScreenTooltip:e.modeHelpTooltip,fitToScreen:e.fitToScreen},on:{activeScreenClick:e.onActiveScreenClick}},[e.isInCommentsMode?s("div",{staticClass:"block comments-block"},e._l(e.activeScreenComments,(function(t){return s("comment-pin",{key:"comment_"+t.id,ref:"screenCommentPins",refInFor:!0,class:{"soft-hidden":!e.showResolvedComments&&t.isResolved,unread:e.isCommentUnread(t.id)},attrs:{comment:t,allowPositionChange:!1}})})),1):e._e()]):e._e(),s("div",{staticClass:"flex-fill-block"}),s("preview-bar",{attrs:{project:e.project,projectLink:e.projectLink},on:{hide:function(t){!e.$refs.screensPanel||e.$refs.screensPanel.hide()}},scopedSlots:e._u([{key:"left",fn:function(){return[e.activeScreen&&e.$refs.screensPanel?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.screensPanel.isActive?e.$t("Hide screens panel"):e.$t("Show screens panel"),expression:"$refs.screensPanel.isActive ? $t('Hide screens panel') : $t('Show screens panel')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-screens",class:{active:e.$refs.screensPanel.isActive},on:{click:function(t){return t.preventDefault(),e.$refs.screensPanel.toggle()}}},[s("span",{staticClass:"txt screen-title"},[e._v(e._s(e.activeScreen.title))]),s("span",{staticClass:"txt counter m-l-5"},[e._v("("+e._s(e.activeScreenOrderedIndex+1)+" of "+e._s(e.screens.length)+")")]),s("i",{staticClass:"m-l-5 fe",class:e.$refs.screensPanel.isActive?"fe-chevron-up":"fe-chevron-down"})]):e._e()]},proxy:!0},{key:"right",fn:function(){return[e.isInCommentsMode&&e.$refs.commentsPanel?s("button",{staticClass:"btn btn-sm no-shadow comments-panel-toggle",class:e.$refs.commentsPanel.isActive?"btn-danger":"btn-transp-danger",on:{click:function(t){return t.preventDefault(),e.$refs.commentsPanel.toggle()}}},[s("span",{staticClass:"txt"},[e._v(" "+e._s(e.$t("Comments panel ({resolved}/{total})",{resolved:e.totalActiveScreenResolvedComments,total:e.totalActiveScreenComments}))+" ")])]):e._e(),e.prototypes.length>0&&0!=e.activePrototype.scaleFactor?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Toggle fit to screen"),expression:"$t('Toggle fit to screen')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle",class:e.fitToScreen?"ctrl-item-success active bg-light-border":"",on:{click:function(t){return t.preventDefault(),e.toggleFitToScreen(t)}}},[s("i",{staticClass:"fe fe-maximize"})]):e._e(),e.prototypes.length>1?s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"":e.$t("Change prototype"),expression:"!$refs.prototypesDropdown || !$refs.prototypesDropdown.isActive ? $t('Change prototype') : ''",modifiers:{top:!0}}],staticClass:"btn btn-sm btn-default m-l-small"},[s("i",{staticClass:"fe",class:e.activePrototype.isForDesktop?"fe-monitor":"fe-smartphone"}),s("span",{staticClass:"txt title m-l-5 m-r-5"},[e._v(e._s(e.activePrototype.title))]),s("i",{staticClass:"fe",class:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"fe-chevron-up":"fe-chevron-down"}),s("toggler",{ref:"prototypesDropdown",staticClass:"dropdown"},e._l(e.prototypes,(function(t){return s("div",{key:t.id,staticClass:"dropdown-item",class:{active:e.activePrototype.id==t.id},on:{click:function(s){return s.preventDefault(),e.setActivePrototypeId(t.id)}}},[s("i",{staticClass:"fe",class:t.isForDesktop?"fe-monitor":"fe-smartphone"}),s("span",{staticClass:"txt"},[e._v(e._s(t.title))])])})),0)],1):e._e()]},proxy:!0}])}),s("screens-panel",{ref:"screensPanel"})],1),s("comments-panel",{ref:"commentsPanel"})],1)},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",{staticClass:"mockup m-b-small"},[s("div",{staticClass:"mockup-bg"}),s("div",{staticClass:"browser secondary"}),s("div",{staticClass:"browser primary"},[s("i",{staticClass:"fe fe-image"})])])}],n=(s("8e6e"),s("456d"),s("a481"),s("ac6a"),s("5df3"),s("7f7f"),s("bd86")),r=s("2f62"),a=s("c1df"),c=s.n(a),l=s("0abc"),p=s("f744"),u=s("dd93"),d=s("3d48"),m=s("9c86"),v=s("ba5d"),f=s("46a0"),h=s("0372"),g=s("9aaf"),y=s("7bbf"),C=s("57d1"),b=s("917d"),w=s("c647"),P=s("35bb"),_=s("db9e");function I(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,i)}return s}function j(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?I(s,!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):I(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var k="preview",O="comments",S=null,$={name:"screens-view",mixins:[w["a"],P["a"]],props:{project:{type:m["a"],required:!0},collaborators:{type:Array,required:!0},projectLink:{type:v["a"],required:!0}},components:{"screen-preview":h["a"],"screens-panel":g["a"],"comment-pin":y["a"],"comments-panel":C["a"],"active-comment-popover":b["a"],"preview-bar":_["a"]},data:function(){return{isPreviewBarActive:!0,isLoadingData:!1,mode:k}},computed:j({},Object(r["d"])({activePrototypeId:function(e){return e.prototypes.activePrototypeId},prototypes:function(e){return e.prototypes.prototypes},screens:function(e){return e.screens.screens},activeScreenId:function(e){return e.screens.activeScreenId},previewToken:function(e){return e.preview.previewToken}}),{},Object(r["c"])({activePrototype:"prototypes/activePrototype",getPrototype:"prototypes/getPrototype",activeScreen:"screens/activeScreen",getScreen:"screens/getScreen",activeScreenOrderedIndex:"screens/activeScreenOrderedIndex",getComment:"comments/getComment"}),{isInCommentsMode:function(){return this.mode===O},isInPreviewMode:function(){return this.mode===k},modeHelpTooltip:function(){return this.isInCommentsMode?this.$t("Click to leave a comment"):""}}),watch:{"$route.params.prototypeId":function(e,t){e&&this.getPrototype(e)?e!=this.activePrototypeId&&this.setActivePrototypeId(e):this.updateRoutePrototypeId()},"$route.params.screenId":function(e,t){e!=this.activeScreenId&&this.setActiveScreenId(e)},"$route.query.mode":function(e,t){e===O?this.setCommentsMode():e===k?this.setPreviewMode():"preview-prototype"===this.$route.name&&this.updateRouteMode()},activePrototypeId:function(e,t){this.init()},activeScreenId:function(e,t){this.updateRouteScreenId(),this.deactivateComments()},mode:function(e,t){!this.isInCommentsMode&&this.$refs.commentsPanel&&this.$refs.commentsPanel.hide()}},activated:function(){var e=this;this.isLoadingData||this.screens.length||this.$setDocumentTitle((function(){return e.$t("{projectTitle} prototypes",{projectTitle:e.project.title})}))},beforeMount:function(){this.$route.query.mode===O?this.setCommentsMode():this.setPreviewMode(),this.init()},methods:j({},Object(r["b"])({setActivePrototypeId:"prototypes/setActivePrototypeId",setScreens:"screens/setScreens",setActiveScreenId:"screens/setActiveScreenId",setHotspotTemplates:"hotspots/setHotspotTemplates",appendHotspots:"hotspots/appendHotspots",setHotspots:"hotspots/setHotspots",addUnreadComment:"notifications/addUnreadComment"}),{init:function(){this.activePrototypeId&&(this.loadPrototypeData(this.activePrototypeId,this.$route.params.screenId),this.projectLink.allowComments&&(this.loadComments(this.activePrototypeId,1,!0),this.startNewCommentsListener()),this.mentionsList=this.convertCollaboratorsListToMentionsList(this.collaborators))},loadPrototypeData:function(e,t){var s=this;e=e||this.activePrototypeId,t=t||this.activeScreenId,this.isLoadingData=!0,p["a"].Previews.getPrototype(this.previewToken,e).then((function(e){var i=u["a"].getNestedVal(e,"data.screens",[]),o=u["a"].getNestedVal(e,"data.hotspotTemplates",[]);if(s.setScreens(i),s.screens.length>0){s.isLoadingData=!0;var n=[];for(var r in s.screens)n.push(u["a"].loadImage(s.screens[r].getImage()));Promise.all(n).finally((function(){s.isLoadingData=!1}))}for(var a in s.setHotspots([]),i)i[a].hotspots&&s.appendHotspots(i[a].hotspots);for(var c in s.setHotspotTemplates(o),o)o[c].hotspots&&s.appendHotspots(o[c].hotspots);t&&s.getScreen(t)&&s.setActiveScreenId(t),s.$refs.screensPanel&&s.$refs.screensPanel.hide(),s.updateRoutePrototypeId(),s.updateRouteScreenId(),s.updateRouteMode()})).catch((function(e){s.$errResponseHandler(e)})).finally((function(){s.isLoadingData=!1}))},updateRoutePrototypeId:function(){if("preview-prototype"==this.$route.name){var e=this.$route.params.prototypeId;e!=this.activePrototypeId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{prototypeId:this.activePrototypeId,screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})}},updateRouteScreenId:function(){if("preview-prototype"==this.$route.name){var e=this.$route.params.screenId;e!=this.activeScreenId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})}},updateRouteMode:function(){var e=this.$route.query.mode;e!=this.mode&&this.$router.replace({name:this.$route.name,params:Object.assign({},this.$route.params),query:Object.assign({},this.$route.query,{mode:this.mode})})},setCommentsMode:function(){this.mode=O},setPreviewMode:function(){this.mode=k},onEscPress:function(e){this.isInCommentsMode&&(e.preventDefault(),this.deactivateComments())},onActiveScreenClick:function(e){this.isInPreviewMode?this.blinkPreviewModeHints():this.isInCommentsMode&&this.initCommentCreation(e,this.activeScreenId)},loadLatestPreviewComments:function(e,t){var s=this;if(!this.isLoadingComments){if("undefined"===typeof t){var i=d["a"].getItem(l["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+this.projectLink.slug,c()().format("X"))<<0;t=c.a.utc(i-1,"X").format("YYYY-MM-DD HH:mm:ss")}p["a"].enableAutoCancellation(!1),p["a"].Previews.getScreenCommentsList(this.previewToken,1,100,{"search[prototypeId]":e,"search[afterCreatedAt]":t}).then((function(e){var t=f["a"].createInstances(e.data),i=d["a"].getItem(l["a"].get("VUE_APP_PREVIEW_COMMENT_FROM_STORAGE_KEY"));for(var o in t)t[o].from!=i&&s.addUnreadComment(t[o])})).catch((function(e){s.$errResponseHandler(e)})).finally((function(){d["a"].setItem(l["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+s.projectLink.slug,c()().format("X"))}))}},startNewCommentsListener:function(){var e=this;this.projectLink.allowComments&&l["a"].isFirestoreConfigured()&&Promise.all([s.e("chunk-59fc5fbd"),s.e("chunk-2d0c9af8")]).then(s.t.bind(null,"59ca",7)).then((function(t){Promise.all([s.e("chunk-59fc5fbd"),s.e("chunk-046c06fa")]).then(s.bind(null,"e71f")).then((function(){t.apps.length||t.initializeApp({projectId:l["a"].get("VUE_APP_FIRESTORE_PROJECT_ID")}),e.stopNewCommentsListener();var s=t.firestore();S=s.collection(l["a"].get("VUE_APP_FIRESTORE_COLLECTION")).doc("p"+e.project.id).onSnapshot((function(t){e.projectLink.allowComments&&e.loadLatestPreviewComments(e.activePrototypeId)})),e.$once("hook:deactivated",(function(){e.stopNewCommentsListener()}))}))}))},stopNewCommentsListener:function(){u["a"].isFunction(S)&&(S(),S=null)}})},E=$,A=s("2877"),L=Object(A["a"])(E,i,o,!1,null,null,null);t["default"]=L.exports}}]);