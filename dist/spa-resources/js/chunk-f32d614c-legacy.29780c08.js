(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f32d614c"],{"5df3":function(e,t,o){"use strict";var s=o("02f4")(!0);o("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,o=this._i;return o>=t.length?{value:void 0,done:!0}:(e=s(t,o),this._i+=e.length,{value:e,done:!1})}))},fb7f:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"preview-container",class:{"comments-mode":e.isInCommentsMode,"preview-mode":e.isInPreviewMode,"preview-mode-hints":e.isPreviewModeHintsActive},style:{background:e.activePrototype&&e.activeScreen&&e.activePrototype.isForDesktop?e.activeScreen.background:null},attrs:{tabindex:"-1"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.onEscPress(t)}}},[o("div",{staticClass:"flex-fill-block"}),o("comment-popover",{ref:"commentPopover",attrs:{isForPreview:!0,mentionsList:e.mentionsList},on:{closed:e.onCommentPopoverClose}}),e.isLoadingData?o("div",{staticClass:"block txt-center"},[o("span",{staticClass:"loader loader-lg loader-blend"})]):e._e(),e.isLoadingData||e.screens.length?e._e():o("div",{staticClass:"block scroll-block txt-center p-base"},[e._m(0),o("h4",[e._v(e._s(e.$t("No prototype screens to show.")))])]),!e.isLoadingData&&e.screens.length?o("screen-preview",{ref:"screenPreview",attrs:{interactions:e.isInPreviewMode,activeScreenTooltip:e.modeHelpTooltip,fitToScreen:e.fitToScreen},on:{activeScreenClick:e.onActiveScreenClick}},[e.isInCommentsMode?o("div",{staticClass:"block comments-block"},e._l(e.activeScreenComments,(function(t){return o("comment-pin",{key:"comment_"+t.id,ref:"screenCommentPins",refInFor:!0,class:{"soft-hidden":!e.showResolvedComments&&t.isResolved,unread:e.isCommentUnread(t.id)},attrs:{comment:t,allowPositionChange:!1},on:{beforeActivate:e.onCommentActivate}})})),1):e._e()]):e._e(),o("div",{staticClass:"flex-fill-block"}),o("preview-bar",{attrs:{project:e.project,projectLink:e.projectLink},on:{hide:function(t){!e.$refs.screensPanel||e.$refs.screensPanel.hide()}},scopedSlots:e._u([{key:"left",fn:function(){return[e.activeScreen&&e.$refs.screensPanel?o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.screensPanel.isActive?e.$t("Hide screens panel"):e.$t("Show screens panel"),expression:"$refs.screensPanel.isActive ? $t('Hide screens panel') : $t('Show screens panel')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-screens",class:{active:e.$refs.screensPanel.isActive},on:{click:function(t){return t.preventDefault(),e.$refs.screensPanel.toggle()}}},[o("span",{staticClass:"txt screen-title"},[e._v(e._s(e.activeScreen.title))]),o("span",{staticClass:"txt counter m-l-5"},[e._v("("+e._s(e.activeScreenOrderedIndex+1)+" of "+e._s(e.screens.length)+")")]),o("i",{staticClass:"m-l-5 fe",class:e.$refs.screensPanel.isActive?"fe-chevron-up":"fe-chevron-down"})]):e._e()]},proxy:!0},{key:"right",fn:function(){return[e.isInCommentsMode&&e.totalActiveScreenComments>0?o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.showResolvedComments,expression:"showResolvedComments"}],attrs:{type:"checkbox",id:"toggle_resolved_comments"},domProps:{checked:Array.isArray(e.showResolvedComments)?e._i(e.showResolvedComments,null)>-1:e.showResolvedComments},on:{change:function(t){var o=e.showResolvedComments,s=t.target,n=!!s.checked;if(Array.isArray(o)){var r=null,i=e._i(o,r);s.checked?i<0&&(e.showResolvedComments=o.concat([r])):i>-1&&(e.showResolvedComments=o.slice(0,i).concat(o.slice(i+1)))}else e.showResolvedComments=n}}}),o("label",{staticClass:"resolved-comments-label desktop-only",attrs:{for:"toggle_resolved_comments"}},[e._v("\n                    "+e._s(e.$t("Show resolved comments"))+"\n                    ("+e._s(e.$t("{current} of {total}",{current:e.totalActiveScreenResolvedComments,total:e.totalActiveScreenComments}))+")\n                ")]),o("label",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Show resolved comments")+" ("+e.$t("{current} of {total}",{current:e.totalActiveScreenResolvedComments,total:e.totalActiveScreenComments})+")",expression:"$t('Show resolved comments') + ' (' + $t('{current} of {total}', {\n                        current: totalActiveScreenResolvedComments,\n                        total:   totalActiveScreenComments,\n                    }) + ')'",modifiers:{top:!0}}],staticClass:"resolved-comments-label responsive-only",attrs:{for:"toggle_resolved_comments"}})]):e._e(),e.prototypes.length>0&&0!=e.activePrototype.scaleFactor?o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$t("Toggle fit to screen"),expression:"$t('Toggle fit to screen')",modifiers:{top:!0}}],staticClass:"ctrl-item ctrl-item-circle",class:e.fitToScreen?"ctrl-item-success active bg-light-border":"",on:{click:function(t){return t.preventDefault(),e.toggleFitToScreen(t)}}},[o("i",{staticClass:"fe fe-maximize"})]):e._e(),e.prototypes.length>1?o("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"":e.$t("Change prototype"),expression:"!$refs.prototypesDropdown || !$refs.prototypesDropdown.isActive ? $t('Change prototype') : ''",modifiers:{top:!0}}],staticClass:"btn btn-sm btn-default m-l-small"},[o("i",{staticClass:"fe",class:e.activePrototype.isForDesktop?"fe-monitor":"fe-smartphone"}),o("span",{staticClass:"txt title m-l-5 m-r-5"},[e._v(e._s(e.activePrototype.title))]),o("i",{staticClass:"fe",class:e.$refs.prototypesDropdown&&e.$refs.prototypesDropdown.isActive?"fe-chevron-up":"fe-chevron-down"}),o("toggler",{ref:"prototypesDropdown",staticClass:"dropdown"},e._l(e.prototypes,(function(t){return o("div",{key:t.id,staticClass:"dropdown-item",class:{active:e.activePrototype.id==t.id},on:{click:function(o){return o.preventDefault(),e.setActivePrototypeId(t.id)}}},[o("i",{staticClass:"fe",class:t.isForDesktop?"fe-monitor":"fe-smartphone"}),o("span",{staticClass:"txt"},[e._v(e._s(t.title))])])})),0)],1):e._e()]},proxy:!0}])}),o("screens-panel",{ref:"screensPanel"})],1)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("figure",{staticClass:"mockup m-b-small"},[o("div",{staticClass:"mockup-bg"}),o("div",{staticClass:"browser secondary"}),o("div",{staticClass:"browser primary"},[o("i",{staticClass:"fe fe-image"})])])}],r=(o("8e6e"),o("456d"),o("a481"),o("ac6a"),o("5df3"),o("7f7f"),o("bd86")),i=o("2f62"),a=o("c1df"),c=o.n(a),p=o("0abc"),l=o("f744"),d=o("dd93"),m=o("3d48"),v=o("9c86"),u=o("ba5d"),f=(o("1efe"),o("46a0")),h=o("0372"),y=o("9aaf"),C=o("7bbf"),g=o("af83"),w=o("c647"),P=o("35bb"),b=o("ae26"),I=o("db9e");function _(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}function S(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?_(o,!0).forEach((function(t){Object(r["a"])(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):_(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var $="preview",k="comments",A=null,O={name:"screens-view",mixins:[w["a"],P["a"]],props:{project:{type:v["a"],required:!0},collaborators:{type:Array,required:!0},projectLink:{type:u["a"],required:!0}},components:{"screen-preview":h["a"],"screens-panel":y["a"],"comment-pin":C["a"],"comment-popover":g["a"],"guideline-section-preview":b["a"],"preview-bar":I["a"]},data:function(){return{isPreviewBarActive:!0,isLoadingData:!1,mode:$}},computed:S({},Object(i["d"])({activePrototypeId:function(e){return e.prototypes.activePrototypeId},prototypes:function(e){return e.prototypes.prototypes},screens:function(e){return e.screens.screens},activeScreenId:function(e){return e.screens.activeScreenId},previewToken:function(e){return e.preview.previewToken}}),{},Object(i["c"])({activePrototype:"prototypes/activePrototype",getPrototype:"prototypes/getPrototype",activeScreen:"screens/activeScreen",getScreen:"screens/getScreen",activeScreenOrderedIndex:"screens/activeScreenOrderedIndex",getComment:"comments/getComment"}),{isInCommentsMode:function(){return this.mode===k},isInPreviewMode:function(){return this.mode===$},modeHelpTooltip:function(){return this.isInCommentsMode?this.$t("Click to leave a comment"):""}}),watch:{"$route.params.prototypeId":function(e,t){e&&this.getPrototype(e)?e!=this.activePrototypeId&&this.setActivePrototypeId(e):this.updateRoutePrototypeId()},"$route.params.screenId":function(e,t){e!=this.activeScreenId&&this.setActiveScreenId(e)},"$route.query.mode":function(e,t){e===k?this.setCommentsMode():e===$?this.setPreviewMode():"preview-prototype"===this.$route.name&&this.updateRouteMode()},activePrototypeId:function(e,t){this.init()},activeScreenId:function(e,t){this.updateRouteScreenId(),this.deactivateComments()}},activated:function(){var e=this;this.isLoadingData||this.screens.length||this.$setDocumentTitle((function(){return e.$t("{projectTitle} prototypes",{projectTitle:e.project.title})}))},beforeMount:function(){this.$route.query.mode===k?this.setCommentsMode():this.setPreviewMode(),this.init()},methods:S({},Object(i["b"])({setActivePrototypeId:"prototypes/setActivePrototypeId",setScreens:"screens/setScreens",setActiveScreenId:"screens/setActiveScreenId",setHotspotTemplates:"hotspots/setHotspotTemplates",appendHotspots:"hotspots/appendHotspots",setHotspots:"hotspots/setHotspots",addUnreadComment:"notifications/addUnreadComment"}),{init:function(){this.activePrototypeId&&(this.loadPrototypeData(this.activePrototypeId,this.$route.params.screenId),this.projectLink.allowComments&&(this.loadComments(this.activePrototypeId,1,!0),this.startNewCommentsListener()),this.mentionsList=this.convertCollaboratorsListToMentionsList(this.collaborators))},loadPrototypeData:function(e,t){var o=this;e=e||this.activePrototypeId,t=t||this.activeScreenId,this.isLoadingData=!0,l["a"].Previews.getPrototype(this.previewToken,e).then((function(e){var s=d["a"].getNestedVal(e,"data.screens",[]),n=d["a"].getNestedVal(e,"data.hotspotTemplates",[]);if(o.setScreens(s),o.screens.length>0){o.isLoadingData=!0;var r=[];for(var i in o.screens)r.push(d["a"].loadImage(o.screens[i].getImage()));Promise.all(r).finally((function(){o.isLoadingData=!1}))}for(var a in o.setHotspots([]),s)s[a].hotspots&&o.appendHotspots(s[a].hotspots);for(var c in o.setHotspotTemplates(n),n)n[c].hotspots&&o.appendHotspots(n[c].hotspots);t&&o.getScreen(t)&&o.setActiveScreenId(t),o.$refs.screensPanel&&o.$refs.screensPanel.hide(),o.updateRoutePrototypeId(),o.updateRouteScreenId(),o.updateRouteMode()})).catch((function(e){o.$errResponseHandler(e)})).finally((function(){o.isLoadingData=!1}))},updateRoutePrototypeId:function(){if("preview-prototype"==this.$route.name){var e=this.$route.params.prototypeId;e!=this.activePrototypeId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{prototypeId:this.activePrototypeId,screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})}},updateRouteScreenId:function(){if("preview-prototype"==this.$route.name){var e=this.$route.params.screenId;e!=this.activeScreenId&&this.$router[e?"push":"replace"]({name:this.$route.name,params:Object.assign({},this.$route.params,{screenId:this.activeScreenId}),query:Object.assign({},this.$route.query)})}},updateRouteMode:function(){var e=this.$route.query.mode;e!=this.mode&&this.$router.replace({name:this.$route.name,params:Object.assign({},this.$route.params),query:Object.assign({},this.$route.query,{mode:this.mode})})},setCommentsMode:function(){this.mode=k},setPreviewMode:function(){this.mode=$},onEscPress:function(e){this.isInCommentsMode&&(e.preventDefault(),this.deactivateComments())},onActiveScreenClick:function(e){this.isInPreviewMode?this.blinkPreviewModeHints():this.isInCommentsMode&&this.initCommentCreation(e,this.activeScreenId)},loadLatestPreviewComments:function(e,t){var o=this;if(!this.isLoadingComments){if("undefined"===typeof t){var s=m["a"].getItem(p["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+this.projectLink.slug,c()().format("X"))<<0;t=c.a.utc(s-1,"X").format("YYYY-MM-DD HH:mm:ss")}l["a"].enableAutoCancellation(!1),l["a"].Previews.getScreenCommentsList(this.previewToken,1,100,{"search[prototypeId]":e,"search[afterCreatedAt]":t}).then((function(e){var t=f["a"].createInstances(e.data),s=m["a"].getItem(p["a"].get("VUE_APP_PREVIEW_COMMENT_FROM_STORAGE_KEY"));for(var n in t)t[n].from!=s&&o.addUnreadComment(t[n])})).catch((function(e){o.$errResponseHandler(e)})).finally((function(){m["a"].setItem(p["a"].get("VUE_APP_PREVIEW_LAST_COMMENTS_LOAD_STORAGE_KEY")+o.projectLink.slug,c()().format("X"))}))}},startNewCommentsListener:function(){var e=this;this.projectLink.allowComments&&p["a"].isFirestoreConfigured()&&Promise.all([o.e("chunk-4bbebd65"),o.e("chunk-2d0c9af8")]).then(o.t.bind(null,"59ca",7)).then((function(t){Promise.all([o.e("chunk-4bbebd65"),o.e("chunk-751cefa4")]).then(o.bind(null,"e71f")).then((function(){t.apps.length||t.initializeApp({projectId:p["a"].get("VUE_APP_FIRESTORE_PROJECT_ID")}),e.stopNewCommentsListener();var o=t.firestore();A=o.collection(p["a"].get("VUE_APP_FIRESTORE_COLLECTION")).doc("p"+e.project.id).onSnapshot((function(t){e.projectLink.allowComments&&e.loadLatestPreviewComments(e.activePrototypeId)})),e.$once("hook:deactivated",(function(){e.stopNewCommentsListener()}))}))}))},stopNewCommentsListener:function(){d["a"].isFunction(A)&&(A(),A=null)}})},L=O,R=o("2877"),j=Object(R["a"])(L,s,n,!1,null,null,null);t["default"]=j.exports}}]);