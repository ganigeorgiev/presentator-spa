(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47931332"],{"1efe":function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));var i=s("d225"),a=s("b0b4"),o=s("308d"),r=s("6bb5"),n=s("2a88"),l=s("4e2b"),c=s("9242"),p=s("9300"),d=s("dd93"),u=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(n["a"])(Object(r["a"])(e.prototype),"load",this).call(this,t),this.projectId=d["a"].isEmpty(t.projectId)?null:t.projectId,this.order=d["a"].isEmpty(t.order)?1:t.order<<0,this.title=d["a"].isEmpty(t.title)?"":t.title,this.description=d["a"].isEmpty(t.description)?"":t.description,d["a"].isArray(t.assets)?this.assets=p["a"].createInstances(t.assets):this.assets=this.assets||[]}}]),e}(c["a"])},"795d":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"preview-container-wrapper"},[s("div",{staticClass:"preview-container"},[t.isLoadingAssets?[s("div",{staticClass:"flex-fill-block"}),t._m(0)]:t._e(),t.isLoadingAssets||t.hasAssets?t._e():[s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"block scroll-block txt-center p-base"},[t._m(1),s("h4",[t._v(t._s(t.$t("No guideline assets to show.")))])])],!t.isLoadingAssets&&t.hasAssets?s("div",{staticClass:"guideline-sections-list scroll-block p-base"},[s("h3",{staticClass:"m-t-0 m-b-base"},[t._v(t._s(t.$t("{projectTitle} guideline",{projectTitle:t.project.title})))]),t._l(t.orderedGuidelineSections,(function(e){return e.assets.length>0?s("guideline-section-preview",{key:e.id,attrs:{section:e}}):t._e()}))],2):t._e(),s("div",{staticClass:"flex-fill-block"}),s("preview-bar",{attrs:{project:t.project,projectLink:t.projectLink}})],2)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block txt-center"},[s("span",{staticClass:"loader loader-lg loader-blend"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("figure",{staticClass:"mockup m-b-small"},[s("div",{staticClass:"mockup-bg"}),s("div",{staticClass:"browser secondary"}),s("div",{staticClass:"browser primary"},[s("i",{staticClass:"fe fe-book-open"})])])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("55dd"),s("bd86")),r=s("2f62"),n=s("f744"),l=s("9c86"),c=s("ba5d"),p=s("1efe"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"guideline-section"},[s("header",{staticClass:"section-header"},[s("h5",{staticClass:"title"},[t._v(t._s(t.section.title))]),t.section.description?[t._v(" ("),s("div",{staticClass:"description"},[t._v(t._s(t.section.description))]),t._v(") ")]:t._e(),s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"ctrl-item toggle-ctrl",on:{click:function(e){return e.preventDefault(),t.toggleSection()}}},[t.collapsed?[s("span",{staticClass:"txt m-r-5 txt-default"},[t._v(t._s(t.$t("Expand")))]),s("i",{staticClass:"fe fe-chevron-down"})]:[s("span",{staticClass:"txt m-r-5"},[t._v(t._s(t.$t("Collapse")))]),s("i",{staticClass:"fe fe-chevron-up"})]],2)],2),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}],staticClass:"section-content"},[s("div",{staticClass:"boxes-list assets-list"},t._l(t.orderedAssets,(function(t){return s("asset-box-preview",{key:t.id,attrs:{asset:t}})})),1)])])},u=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box box-card box-compact",class:{"box-color":t.asset.isColor},on:{mouseleave:function(e){!t.$refs.assetDropdown||t.$refs.assetDropdown.hide()}}},[s("figure",{staticClass:"box-thumb",style:{background:t.asset.hex}},[t.asset.isFile?[s("div",{staticClass:"crop-wrapper"},[t.asset.isImage?s("img",{staticClass:"img",attrs:{src:t.asset.getFileUrl("medium"),alt:t.asset.title}}):s("span",{staticClass:"img img-alt"},[t._v(t._s(t.asset.fileExtension))])])]:t._e(),s("div",{staticClass:"thumb-overlay"},[t.asset.isImage?[s("div",{staticClass:"overlay-ctrl",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}}),s("div",{staticClass:"box-ctrl handle center",on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[s("i",{staticClass:"fe fe-eye"})])]:t._e(),s("div",{staticClass:"box-ctrl handle top-right"},[s("i",{staticClass:"fe fe-more-horizontal",style:{color:t.asset.isColor?t.asset.contrastHex:null}}),s("toggler",{ref:"assetDropdown",staticClass:"dropdown dropdown-sm"},[t.asset.isFile?s("a",{staticClass:"dropdown-item",attrs:{href:t.asset.getFileUrl(),tabindex:"-1",download:"",target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-download"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Download")))])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" HEX")])]):t._e(),t.asset.isColor?s("div",{staticClass:"dropdown-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[s("i",{staticClass:"fe fe-copy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Copy"))+" RGB")])]):t._e()])],1)],2)],2),s("div",{staticClass:"box-content"},[t.asset.isFile?[t.asset.isImage?s("div",{staticClass:"title",attrs:{title:t.asset.title},on:{click:function(e){return e.preventDefault(),t.openPreviewPopup()}}},[t._v(" "+t._s(t.asset.title)+" ")]):s("a",{staticClass:"title",attrs:{target:"_blank",rel:"noopener",download:"",href:t.asset.getFileUrl(),title:t.asset.title}},[t._v(" "+t._s(t.asset.title)+" ")]),s("div",{staticClass:"meta"},[s("div",{staticClass:"meta-item txt-uppercase"},[t._v(t._s(t.asset.fileExtension))]),t.asset.isImage&&t.assetWidth>0&&t.assetHeight>0?s("div",{staticClass:"meta-item"},[t._v(" "+t._s(t.assetWidth)+"x"+t._s(t.assetHeight)+" ")]):t._e()])]:[s("div",{staticClass:"title cursor-default",attrs:{title:t.asset.title}},[t._v(t._s(t.asset.title))]),s("div",{staticClass:"meta"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.hex.toUpperCase())}}},[t._v(" "+t._s(t.asset.hex.toUpperCase())+" ")]),s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.$t("Copy"),expression:"$t('Copy')",modifiers:{bottom:!0}}],staticClass:"meta-item",on:{click:function(e){e.preventDefault(),t.copyToClipboard(t.asset.rgb.toUpperCase())}}},[t._v(" "+t._s(t.asset.rgb.toUpperCase())+" ")])])]],2),t.asset.isImage?s("relocator",[s("popup",{key:"asset_popup_"+t.asset.id,ref:"previewPopup",staticClass:"popup-image",scopedSlots:t._u([{key:"content",fn:function(){return[t.$refs.previewPopup&&t.$refs.previewPopup.isActive?s("img",{attrs:{src:t.asset.getFileUrl("original"),alt:t.asset.title}}):t._e()]},proxy:!0}],null,!1,4169098407)})],1):t._e()],1)},v=[],h=s("dd93"),b=s("9300"),g=s("11b2"),m=s("3905"),C={name:"asset-box-preview",components:{relocator:g["a"],popup:m["a"]},props:{asset:{type:b["a"],required:!0}},data:function(){return{assetWidth:0,assetHeight:0}},mounted:function(){var t=this;this.asset.isImage&&h["a"].loadImage(this.asset.getFileUrl()).then((function(e){t.assetWidth=e.width,t.assetHeight=e.height}))},methods:{copyToClipboard:function(t){h["a"].copyToClipboard(t)?this.$toast(this.$t("Successfully copied {text} to clipboard.",{text:t})):this.$toast(this.$t("Failed copying {text} to clipboard.",{text:t}),"danger")},openPreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.open()},closePreviewPopup:function(){this.$refs.previewPopup&&this.$refs.previewPopup.close()}}},y=C,_=s("2877"),w=Object(_["a"])(y,f,v,!1,null,null,null),x=w.exports,j={name:"guideline-section-preview",props:{section:{type:p["a"],required:!0}},components:{"asset-box-preview":x},data:function(){return{collapsed:!1}},computed:{orderedAssets:function(){return this.section.assets.slice().sort((function(t,e){return t["order"]-e["order"]}))}},methods:{toggleSection:function(){this.collapsed=!this.collapsed}}},k=j,O=Object(_["a"])(k,d,u,!1,null,null,null),$=O.exports,P=s("db9e");function E(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function A(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?E(s,!0).forEach((function(e){Object(o["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):E(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var D={name:"preview-guideline",props:{project:{type:l["a"],required:!0},projectLink:{type:c["a"],required:!0}},components:{"guideline-section-preview":$,"preview-bar":P["a"]},data:function(){return{isLoadingAssets:!1,guidelineSections:[],isPreviewBarActive:!0}},computed:A({},Object(r["d"])({previewToken:function(t){return t.preview.previewToken}}),{orderedGuidelineSections:function(){return this.guidelineSections.slice().sort((function(t,e){return t["order"]-e["order"]}))},hasAssets:function(){for(var t in this.guidelineSections)if(this.guidelineSections[t].assets&&this.guidelineSections[t].assets.length>0)return!0;return!1}}),activated:function(){var t=this;this.$setDocumentTitle((function(){return t.$t("{projectTitle} guideline",{projectTitle:t.project.title})}))},beforeMount:function(){this.loadAssets()},methods:{loadAssets:function(){var t=this;this.isLoadingAssets||(this.isLoadingAssets=!0,n["a"].Previews.getAssets(this.previewToken).then((function(e){t.guidelineSections=p["a"].createInstances(e.data)})).catch((function(e){t.$errResponseHandler(e)})).finally((function(){t.isLoadingAssets=!1})))}}},S=D,I=Object(_["a"])(S,i,a,!1,null,null,null);e["default"]=I.exports},9300:function(t,e,s){"use strict";s.d(e,"a",(function(){return u}));s("28a5");var i=s("d225"),a=s("b0b4"),o=s("308d"),r=s("6bb5"),n=s("2a88"),l=s("4e2b"),c=s("9242"),p=s("dd93"),d=["png","jpg","jpeg","svg","bmp"],u=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(r["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(a["a"])(e,[{key:"load",value:function(t){t=t||{},Object(n["a"])(Object(r["a"])(e.prototype),"load",this).call(this,t),this.guidelineSectionId=p["a"].isEmpty(t.guidelineSectionId)?null:t.guidelineSectionId,this.type=p["a"].isEmpty(t.type)?"file":t.type,this.order=p["a"].isEmpty(t.order)?1:t.order,this.hex=p["a"].isEmpty(t.hex)?"":t.hex,this.title=p["a"].isEmpty(t.title)?"":t.title,this.file=p["a"].isEmpty(t.file)?{}:t.file}},{key:"getFileUrl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"original";return this.file[t]||this.file["original"]||""}},{key:"isFile",get:function(){return"file"===this.type}},{key:"isColor",get:function(){return"color"===this.type}},{key:"contrastHex",get:function(){return this.isColor?p["a"].getContrastHex(this.hex):""}},{key:"rgb",get:function(){var t=p["a"].hexToRgb(this.hex);return"rgb("+t.r+", "+t.g+", "+t.b+")"}},{key:"fileExtension",get:function(){return this.isFile&&this.file.original?this.file.original.split(".").pop():""}},{key:"isImage",get:function(){return this.isFile&&this.file.original&&d.indexOf(this.fileExtension)>=0}}]),e}(c["a"])}}]);