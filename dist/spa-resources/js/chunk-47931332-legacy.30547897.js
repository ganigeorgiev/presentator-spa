(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47931332"],{"1efe":function(t,e,s){"use strict";s.d(e,"a",(function(){return v}));s("2397");var i=s("d225"),a=s("b0b4"),o=s("2a88"),r=s("4e2b"),n=s("308d"),c=s("6bb5"),l=s("9242"),p=s("9300"),u=s("dd93");function d(t){var e=f();return function(){var s,i=Object(c["a"])(t);if(e){var a=Object(c["a"])(this).constructor;s=Reflect.construct(i,arguments,a)}else s=i.apply(this,arguments);return Object(n["a"])(this,s)}}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var v=function(t){Object(r["a"])(s,t);var e=d(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(a["a"])(s,[{key:"load",value:function(t){t=t||{},Object(o["a"])(Object(c["a"])(s.prototype),"load",this).call(this,t),this.projectId=u["a"].isEmpty(t.projectId)?null:t.projectId,this.order=u["a"].isEmpty(t.order)?1:t.order<<0,this.title=u["a"].isEmpty(t.title)?"":t.title,this.description=u["a"].isEmpty(t.description)?"":t.description,u["a"].isArray(t.assets)?this.assets=p["a"].createInstances(t.assets):this.assets=this.assets||[]}}]),s}(l["a"])},"795d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"preview-container-wrapper"},[e("div",{staticClass:"preview-container"},[t.isLoadingAssets?[e("div",{staticClass:"flex-fill-block"}),t._m(0)]:t._e(),t.isLoadingAssets||t.hasAssets?t._e():[e("div",{staticClass:"flex-fill-block"}),e("div",{staticClass:"block scroll-block txt-center p-base"},[t._m(1),e("h4",[t._v(t._s(t.$t("No guideline assets to show.")))])])],!t.isLoadingAssets&&t.hasAssets?e("div",{staticClass:"guideline-sections-list scroll-block p-base"},[e("h3",{staticClass:"m-t-0 m-b-base"},[t._v(t._s(t.$t("{projectTitle} guideline",{projectTitle:t.project.title})))]),t._l(t.orderedGuidelineSections,(function(s){return s.assets.length>0?e("guideline-section-preview",{key:s.id,attrs:{section:s}}):t._e()}))],2):t._e(),e("div",{staticClass:"flex-fill-block"}),e("preview-bar",{attrs:{project:t.project,projectLink:t.projectLink}})],2)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"block txt-center"},[e("span",{staticClass:"loader loader-lg loader-blend"})])},function(){var t=this,e=t._self._c;return e("figure",{staticClass:"mockup m-b-small"},[e("div",{staticClass:"mockup-bg"}),e("div",{staticClass:"browser secondary"}),e("div",{staticClass:"browser primary"},[e("i",{staticClass:"fe fe-book-open"})])])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("55dd"),s("bd86")),r=s("2f62"),n=s("f744"),c=s("9c86"),l=s("ba5d"),p=s("1efe"),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"guideline-section"},[e("header",{staticClass:"section-header"},[e("h5",{staticClass:"title"},[t._v(t._s(t.section.title))]),t.section.description?[t._v(" ("),e("div",{staticClass:"description"},[t._v(t._s(t.section.description))]),t._v(") ")]:t._e(),e("div",{staticClass:"flex-fill-block"}),e("div",{staticClass:"ctrl-item toggle-ctrl",on:{click:function(e){return e.preventDefault(),t.toggleSection()}}},[t.collapsed?[e("span",{staticClass:"txt m-r-5 txt-default"},[t._v(t._s(t.$t("Expand")))]),e("i",{staticClass:"fe fe-chevron-down"})]:[e("span",{staticClass:"txt m-r-5"},[t._v(t._s(t.$t("Collapse")))]),e("i",{staticClass:"fe fe-chevron-up"})]],2)],2),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"section-content"},[e("div",{staticClass:"boxes-list assets-list"},t._l(t.orderedAssets,(function(t){return e("asset-box-preview",{key:t.id,attrs:{asset:t}})})),1)])])},d=[],f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box box-card box-compact",class:{"box-color":t.asset.isColor},on:{mouseleave:function(e){!t.$refs.assetDropdown||t.$refs.assetDropdown.hide()}}},[e("figure",{staticClass:"box-thumb",style:{background:t.asset.hex}},[t.asset.isFile?[e("div",{staticClass:"crop-wrapper"},[t.asset.isImage?e("img",{staticClass:"img",attrs:{src:t.asset.getFileUrl("medium"),alt:t.asset.title}}):e("span",{staticClass:"img img-alt"},[t._v(t._s(t.asset.fileExtension))])])]:t._e(),e("div",{staticClass:"thumb-overlay"},[t.asset.isImage?[e("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}}),e("div",{staticClass:"box-ctrl handle center",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[e("i",{staticClass:"fe fe-eye"})])]:t._e(),e("div",{staticClass:"box-ctrl handle top-right"},[e("i",{staticClass:"fe fe-more-horizontal",style:{color:t.asset.isColor?t.asset.contrastHex:null}}),e("toggler",{ref:"assetDropdown",staticClass:"dropdown dropdown-sm"},[t.asset.isFile?e("a",{staticClass:"dropdown-item",attrs:{href:t.asset.getFileUrl(),tabindex:"-1",download:"",target:"_blank",rel:"noopener"}},[e("i",{staticClass:"fe fe-download"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Download")))])]):t._e(),t.asset.isColor?e("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[e("i",{staticClass:"fe fe-copy"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" HEX")])]):t._e(),t.asset.isColor?e("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[e("i",{staticClass:"fe fe-copy"}),e("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" RGB")])]):t._e()])],1)],2)],2),e("div",{staticClass:"box-content"},[t.asset.isFile?[t.asset.isImage?e("div",{staticClass:"title",attrs:{title:t.asset.title},on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[t._v(" "+t._s(t.asset.title)+" ")]):e("a",{staticClass:"title",attrs:{target:"_blank",rel:"noopener",download:"",href:t.asset.getFileUrl(),title:t.asset.title}},[t._v(" "+t._s(t.asset.title)+" ")]),e("div",{staticClass:"meta"},[e("div",{staticClass:"meta-item txt-uppercase"},[t._v(t._s(t.asset.fileExtension))]),t.asset.isImage&&t.assetWidth>0&&t.assetHeight>0?e("div",{staticClass:"meta-item"},[t._v(" "+t._s(t.assetWidth)+"x"+t._s(t.assetHeight)+" ")]):t._e()])]:[e("div",{staticClass:"title cursor-default",attrs:{title:t.asset.title}},[t._v(t._s(t.asset.title))]),e("div",{staticClass:"meta"},[e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[t._v(" "+t._s(t.asset.hex.toUpperCase())+" ")]),e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[t._v(" "+t._s(t.asset.rgb.toUpperCase())+" ")])])]],2),t.asset.isImage?e("relocator",[e("popup",{key:"asset_popup_"+t.asset.id,ref:"previewPopup",staticClass:"popup-image",scopedSlots:t._u([{key:"content",fn:function(){return[t.$refs.previewPopup&&t.$refs.previewPopup.isActive?e("img",{attrs:{src:t.asset.getFileUrl("original"),alt:t.asset.title}}):t._e()]},proxy:!0}],null,!1,4169098407)})],1):t._e()],1)},v=[],h=s("dd93"),b=s("9300"),g=s("11b2"),m=s("3905"),y={name:"asset-box-preview",components:{relocator:g["a"],popup:m["a"]},props:{asset:{type:b["a"],required:!0}},data:function(){return{assetWidth:0,assetHeight:0}},mounted:function(){var t=this;this.asset.isImage&&h["a"].loadImage(this.asset.getFileUrl()).then((function(e){t.assetWidth=e.width,t.assetHeight=e.height}))},methods:{copyToClipboard:function(t){h["a"].copyToClipboard(t)?this.$toast(this.$t("Successfully copied {text} to clipboard.",{text:t})):this.$toast(this.$t("Failed copying {text} to clipboard.",{text:t}),"danger")},openPreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.open()},closePreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.close()}}},C=y,_=s("2877"),w=Object(_["a"])(C,f,v,!1,null,null,null),x=w.exports,j={name:"guideline-section-preview",props:{section:{type:p["a"],required:!0}},components:{"asset-box-preview":x},data:function(){return{collapsed:!1}},computed:{orderedAssets:function(){return this.section.assets.slice().sort((function(t,e){return t["order"]-e["order"]}))}},methods:{toggleSection:function(){this.collapsed=!this.collapsed}}},k=j,O=Object(_["a"])(k,u,d,!1,null,null,null),P=O.exports,$=s("db9e");function A(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function E(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?A(Object(s),!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var D={name:"preview-guideline",props:{project:{type:c["a"],required:!0},projectLink:{type:l["a"],required:!0}},components:{"guideline-section-preview":P,"preview-bar":$["a"]},data:function(){return{isLoadingAssets:!1,guidelineSections:[],isPreviewBarActive:!0}},computed:E(E({},Object(r["d"])({previewToken:function(t){return t.preview.previewToken}})),{},{orderedGuidelineSections:function(){return this.guidelineSections.slice().sort((function(t,e){return t["order"]-e["order"]}))},hasAssets:function(){for(var t in this.guidelineSections)if(this.guidelineSections[t].assets&&this.guidelineSections[t].assets.length>0)return!0;return!1}}),activated:function(){var t=this;this.$setDocumentTitle((function(){return t.$t("{projectTitle} guideline",{projectTitle:t.project.title})}))},beforeMount:function(){this.loadAssets()},methods:{loadAssets:function(){var t=this;this.isLoadingAssets||(this.isLoadingAssets=!0,n["a"].Previews.getAssets(this.previewToken).then((function(e){t.guidelineSections=p["a"].createInstances(e.data)})).catch((function(e){t.$errResponseHandler(e)})).finally((function(){t.isLoadingAssets=!1})))}}},S=D,I=Object(_["a"])(S,i,a,!1,null,null,null);e["default"]=I.exports},9300:function(t,e,s){"use strict";s.d(e,"a",(function(){return v}));s("2397"),s("28a5");var i=s("d225"),a=s("b0b4"),o=s("2a88"),r=s("4e2b"),n=s("308d"),c=s("6bb5"),l=s("9242"),p=s("dd93");function u(t){var e=d();return function(){var s,i=Object(c["a"])(t);if(e){var a=Object(c["a"])(this).constructor;s=Reflect.construct(i,arguments,a)}else s=i.apply(this,arguments);return Object(n["a"])(this,s)}}function d(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var f=["png","jpg","jpeg","svg","bmp"],v=function(t){Object(r["a"])(s,t);var e=u(s);function s(){return Object(i["a"])(this,s),e.apply(this,arguments)}return Object(a["a"])(s,[{key:"load",value:function(t){t=t||{},Object(o["a"])(Object(c["a"])(s.prototype),"load",this).call(this,t),this.guidelineSectionId=p["a"].isEmpty(t.guidelineSectionId)?null:t.guidelineSectionId,this.type=p["a"].isEmpty(t.type)?"file":t.type,this.order=p["a"].isEmpty(t.order)?1:t.order,this.hex=p["a"].isEmpty(t.hex)?"":t.hex,this.title=p["a"].isEmpty(t.title)?"":t.title,this.file=p["a"].isEmpty(t.file)?{}:t.file}},{key:"isFile",get:function(){return"file"===this.type}},{key:"isColor",get:function(){return"color"===this.type}},{key:"contrastHex",get:function(){return this.isColor?p["a"].getContrastHex(this.hex):""}},{key:"rgb",get:function(){var t=p["a"].hexToRgb(this.hex);return"rgb("+t.r+", "+t.g+", "+t.b+")"}},{key:"fileExtension",get:function(){return this.isFile&&this.file.original?this.file.original.split(".").pop():""}},{key:"isImage",get:function(){return this.isFile&&this.file.original&&f.indexOf(this.fileExtension)>=0}},{key:"getFileUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.file[t]||this.file["original"]||""}}]),s}(l["a"])}}]);