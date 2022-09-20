/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{450:function(t,e,o){"use strict";o.d(e,"a",(function(){return $})),o.d(e,"b",(function(){return O})),o.d(e,"c",(function(){return M})),o.d(e,"d",(function(){return k}));var n=o(2);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},e=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(source).filter((function(t){return Object.getOwnPropertyDescriptor(source,t).enumerable})))),e.forEach((function(e){r(t,e,source[e])}))}return t}function l(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(t,e,o){return Math.max(Math.min(t,o),e)}function d(){return Date.now()}function f(t,time){this.create=function(){return window.setInterval(t,time)},this.stop=function(){this.timer&&(window.clearInterval(this.timer),this.timer=null)},this.start=function(){this.timer||(this.timer=this.create())},this.restart=function(t){time=t||time,this.stop(),this.start()},this.timer=this.create()}function v(t,e){var o;return(o=t<0?(t+e)%e:t%e)!=o?0:o}function m(t,e){var o=e.children||e.componentOptions.children||e.text;return t(e.componentOptions.Ctor,e.data,o)}var y=Object.assign||function(t){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var e=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o){o=Object(o);for(var n=Object.keys(Object(o)),r=0,h=n.length;r<h;r++){var l=n[r],desc=Object.getOwnPropertyDescriptor(o,l);void 0!==desc&&desc.enumerable&&(e[l]=o[l])}}}return e};var S=Math.sign||function(t){return t<0?-1:t>0?1:0};function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.$scopedSlots.default?t.$scopedSlots.default(e)||[]:t.$slots.default||[]}var w=new n.a,$={name:"Hooper",provide:function(){return{$hooper:this}},props:{itemsToShow:{default:1,type:Number},itemsToSlide:{default:1,type:Number},initialSlide:{default:0,type:Number},infiniteScroll:{default:!1,type:Boolean},centerMode:{default:!1,type:Boolean},vertical:{default:!1,type:Boolean},rtl:{default:null,type:Boolean},autoPlay:{default:!1,type:Boolean},playSpeed:{default:2e3,type:Number},mouseDrag:{default:!0,type:Boolean},touchDrag:{default:!0,type:Boolean},wheelControl:{default:!0,type:Boolean},keysControl:{default:!0,type:Boolean},shortDrag:{default:!0,type:Boolean},transition:{default:300,type:Number},hoverPause:{default:!0,type:Boolean},trimWhiteSpace:{default:!1,type:Boolean},settings:{default:function(){return{}},type:Object},group:{type:String,default:null}},data:function(){return{isDragging:!1,isSliding:!1,isTouch:!1,isHover:!1,isFocus:!1,initialized:!1,slideWidth:0,slideHeight:0,slidesCount:0,trimStart:0,trimEnd:1,currentSlide:null,timer:null,defaults:{},breakpoints:{},delta:{x:0,y:0},config:{}}},computed:{slideBounds:function(){var t=this.config,e=this.currentSlide,o=t.itemsToShow;return{lower:t.centerMode?Math.ceil(e-o/2):e,upper:t.centerMode?Math.floor(e+o/2):Math.floor(e+o-1)}},trackTransform:function(){var t=this.config,e=t.infiniteScroll,o=t.vertical,n=t.rtl,r=t.centerMode,h=n?-1:1,l=o?this.slideHeight:this.slideWidth,c=o?this.containerHeight:this.containerWidth,d=(o?this.delta.y:this.delta.x)+h*((r?(c-l)/2:0)-(e?l*this.slidesCount:0)-this.currentSlide*l);return o?"transform: translate(0, ".concat(d,"px);"):"transform: translate(".concat(d,"px, 0);")},trackTransition:function(){return this.initialized&&this.isSliding?"transition: ".concat(this.config.transition,"ms"):""}},watch:{group:function(t,e){t!==e&&(w.$off("slideGroup:".concat(e),this._groupSlideHandler),this.addGroupListeners())}},methods:{slideTo:function(t){var e=this,o=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.isSliding&&t!==this.currentSlide){this.$emit("beforeSlide",{currentSlide:this.currentSlide,slideTo:d});var n=this.config,r=n.infiniteScroll,h=n.transition,l=this.currentSlide,d=r?t:c(t,this.trimStart,this.slidesCount-this.trimEnd);this.group&&o&&w.$emit("slideGroup:".concat(this.group),t),this.currentSlide=d,this.isSliding=!0,window.setTimeout((function(){e.isSliding=!1,e.currentSlide=v(d,e.slidesCount)}),h),this.$emit("slide",{currentSlide:this.currentSlide,slideFrom:l})}},slideNext:function(){this.slideTo(this.currentSlide+this.config.itemsToSlide)},slidePrev:function(){this.slideTo(this.currentSlide-this.config.itemsToSlide)},initEvents:function(){null===this.defaults.rtl&&(this.defaults.rtl="rtl"===getComputedStyle(this.$el).direction),this.config.autoPlay&&this.initAutoPlay(),this.config.mouseDrag&&this.$refs.list.addEventListener("mousedown",this.onDragStart),this.config.touchDrag&&this.$refs.list.addEventListener("touchstart",this.onDragStart,{passive:!0}),this.config.keysControl&&this.$el.addEventListener("keydown",this.onKeypress),this.config.wheelControl&&(this.lastScrollTime=d(),this.$el.addEventListener("wheel",this.onWheel,{passive:!1})),window.addEventListener("resize",this.update)},initAutoPlay:function(){var t=this;this.timer=new f((function(){t.isSliding||t.isDragging||t.isHover&&t.config.hoverPause||t.isFocus||(t.currentSlide!==t.slidesCount-1||t.config.infiniteScroll?t.slideNext():t.slideTo(0))}),this.config.playSpeed)},initDefaults:function(){this.breakpoints=this.settings.breakpoints,this.defaults=y({},this.$props,this.settings),this.config=y({},this.defaults)},update:function(){this.breakpoints&&this.updateConfig(),this.updateWidth(),this.updateTrim(),this.$emit("updated",{containerWidth:this.containerWidth,containerHeight:this.containerHeight,slideWidth:this.slideWidth,slideHeight:this.slideHeight,settings:this.config})},updateTrim:function(){var t=this.config,e=t.trimWhiteSpace,o=t.itemsToShow,n=t.centerMode,r=t.infiniteScroll;if(!e||r)return this.trimStart=0,void(this.trimEnd=1);this.trimStart=n?Math.floor((o-1)/2):0,this.trimEnd=n?Math.ceil(o/2):o},updateWidth:function(){var rect=this.$el.getBoundingClientRect();this.containerWidth=rect.width,this.containerHeight=rect.height,this.config.vertical?this.slideHeight=this.containerHeight/this.config.itemsToShow:this.slideWidth=this.containerWidth/this.config.itemsToShow},updateConfig:function(){var t,e=this;Object.keys(this.breakpoints).sort((function(a,b){return b-a})).some((function(o){if(t=window.matchMedia("(min-width: ".concat(o,"px)")).matches)return e.config=y({},e.config,e.defaults,e.breakpoints[o]),!0})),t||(this.config=y(this.config,this.defaults))},restartTimer:function(){this.timer&&this.timer.restart()},restart:function(){var t=this;this.$nextTick((function(){t.update()}))},onDragStart:function(t){this.isTouch="touchstart"===t.type,(this.isTouch||0===t.button)&&(this.startPosition={x:0,y:0},this.endPosition={x:0,y:0},this.isDragging=!0,this.startPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.startPosition.y=this.isTouch?t.touches[0].clientY:t.clientY,document.addEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.addEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd))},isInvalidDirection:function(t,e){return this.config.vertical?!!this.config.vertical&&Math.abs(e)<=Math.abs(t):Math.abs(t)<=Math.abs(e)},onDrag:function(t){if(!this.isSliding){this.endPosition.x=this.isTouch?t.touches[0].clientX:t.clientX,this.endPosition.y=this.isTouch?t.touches[0].clientY:t.clientY;var e=this.endPosition.x-this.startPosition.x,o=this.endPosition.y-this.startPosition.y;this.isInvalidDirection(e,o)||(this.delta.y=o,this.delta.x=e,this.isTouch||t.preventDefault())}},onDragEnd:function(){var t=this.config.shortDrag?.5:.15;if(this.isDragging=!1,this.config.vertical){var e=Math.round(Math.abs(this.delta.y/this.slideHeight)+t);this.slideTo(this.currentSlide-S(this.delta.y)*e)}if(!this.config.vertical){var o=(this.config.rtl?-1:1)*S(this.delta.x),n=Math.round(Math.abs(this.delta.x/this.slideWidth)+t);this.slideTo(this.currentSlide-o*n)}this.delta.x=0,this.delta.y=0,document.removeEventListener(this.isTouch?"touchmove":"mousemove",this.onDrag),document.removeEventListener(this.isTouch?"touchend":"mouseup",this.onDragEnd),this.restartTimer()},onTransitionend:function(){this.isSliding=!1,this.$emit("afterSlide",{currentSlide:this.currentSlide})},onKeypress:function(t){var e=t.key;return e.startsWith("Arrow")&&t.preventDefault(),this.config.vertical?("ArrowUp"===e&&this.slidePrev(),void("ArrowDown"===e&&this.slideNext())):this.config.rtl?("ArrowRight"===e&&this.slidePrev(),void("ArrowLeft"===e&&this.slideNext())):("ArrowRight"===e&&this.slideNext(),void("ArrowLeft"===e&&this.slidePrev()))},onWheel:function(t){if(t.preventDefault(),!(d()-this.lastScrollTime<200)){this.lastScrollTime=d();var e=t.wheelDelta||-t.deltaY,o=S(e);-1===o&&this.slideNext(),1===o&&this.slidePrev()}},addGroupListeners:function(){var t=this;this.group&&(this._groupSlideHandler=function(e){t.slideTo(e,!1)},w.$on("slideGroup:".concat(this.group),this._groupSlideHandler))}},created:function(){this.initDefaults()},mounted:function(){var t=this;this.initEvents(),this.addGroupListeners(),this.$nextTick((function(){t.update(),t.slideTo(t.config.initialSlide||0),setTimeout((function(){t.$emit("loaded"),t.initialized=!0}),t.transition)}))},beforeDestroy:function(){window.removeEventListener("resize",this.update),this.group&&w.$off("slideGroup:".concat(this.group),this._groupSlideHandler),this.timer&&this.timer.stop()},render:function(t){var e=this,body=D.call(this,t);return t("section",{class:{hooper:!0,"is-vertical":this.config.vertical,"is-rtl":this.config.rtl},attrs:{tabindex:"0"},on:{focusin:function(){return e.isFocus=!0},focusout:function(){return e.isFocus=!1},mouseover:function(){return e.isHover=!0},mouseleave:function(){return e.isHover=!1}}},body)}};function T(t){for(var e=x(this),o=e.length,n=0,r=[],i=0;i<o;i++){var c=e[i],d=c.componentOptions&&c.componentOptions.Ctor;d&&"HooperSlide"===d.options.name&&(c.componentOptions.propsData.index=n,c.data.key=n,c.key=n,c.data.props=h({},c.data.props||{},{isClone:!1,index:n++}),r.push(c))}return this.slidesCount=r.length,this.config.infiniteScroll&&(r=function(t,e){for(var o=[],n=[],r=e.length,i=0;i<r;i++){var h=e[i],c=m(t,h),d=i-r;c.data.key="before_".concat(i),c.key=c.data.key,c.componentOptions.propsData.index=d,c.data.props={index:d,isClone:!0},o.push(c);var f=m(t,h);d=i+r,f.data.key="after_".concat(d),f.componentOptions.propsData.index=d,f.key=f.data.key,f.data.props={index:d,isClone:!0},n.push(f)}return[].concat(o,l(e),n)}(t,r)),t("ul",{class:{"hooper-track":!0,"is-dragging":this.isDragging},style:this.trackTransform+this.trackTransition,ref:"track",on:{transitionend:this.onTransitionend}},r)}function D(t){var e=T.call(this,t),o=this.$slots["hooper-addons"]||[],n=t("div",{class:"hooper-liveregion hooper-sr-only",attrs:{"aria-live":"polite","aria-atomic":"true"}},"Item ".concat(this.currentSlide+1," of ").concat(this.slidesCount));return[t("div",{class:"hooper-list",ref:"list"},[e].concat(l(o),[n]))]}var k={name:"HooperSlide",inject:["$hooper"],props:{isClone:{type:Boolean,default:!1},index:{type:Number,required:!0}},computed:{style:function(){var t=this.$hooper||{},e=t.config,o=t.slideHeight,n=t.slideWidth;return e.vertical?"height: ".concat(o,"px"):"width: ".concat(n,"px")},isActive:function(){var t=this.$hooper.slideBounds,e=t.upper,o=t.lower;return this.index>=o&&this.index<=e},isPrev:function(){var t=this.$hooper.slideBounds.lower,e=this.$hooper.config.itemsToSlide;return this.index<t&&this.index>=t-e},isNext:function(){var t=this.$hooper.slideBounds.upper,e=this.$hooper.config.itemsToSlide;return this.index>t&&this.index<=t+e},isCurrent:function(){return this.index===this.$hooper.currentSlide}},render:function(t){var e={"hooper-slide":!0,"is-clone":this.isClone,"is-active":this.isActive,"is-prev":this.isPrev,"is-next":this.isNext,"is-current":this.isCurrent},o=x(this);return t("li",{class:e,style:this.style,attrs:{"aria-hidden":!this.isActive}},o)}},P={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},C={name:"HooperIcon",functional:!0,inheritAttrs:!0,props:{name:{type:String,required:!0,validator:function(t){return t in P}}},render:function(t,e){var o,n=e.props,r=P[n.name],h=[];return h.push(t("title",(o=(o=n.name).replace(/([A-Z]+)/g," $1")).charAt(0).toUpperCase()+o.slice(1))),h.push(t("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})),h.push(t("path",{attrs:{d:r}})),t("svg",{attrs:{class:"icon icon-".concat(n.name),viewBox:"0 0 24 24",width:"24px",height:"24px"}},h)}};var M={inject:["$hooper"],name:"HooperPagination",props:{mode:{default:"indicator",type:String}},computed:{currentSlide:function(){return v(this.$hooper.currentSlide,this.$hooper.slidesCount)},slides:function(){var t=this.$hooper.slides.map((function(t,e){return e}));return t.slice(this.$hooper.trimStart,this.$hooper.slidesCount-this.$hooper.trimEnd+1)}},render:function(t){var e=this,o=this.$hooper.slidesCount,n="indicator"===this.mode?function(t,e,o,n){for(var r=[],h=function(i){r.push(function(t,e,o,n){return t("li",[t("button",{class:{"hooper-indicator":!0,"is-active":o},on:{click:n},attrs:{type:"button"}},[t("span",{class:"hooper-sr-only"},"item ".concat(e))])])}(t,i,i===e,(function(){return n(i)})))},i=0;i<o;i++)h(i);return[t("ol",{class:"hooper-indicators"},r)]}(t,this.currentSlide,o,(function(t){return e.$hooper.slideTo(t)})):function(t,e,o){return[t("span",e+1),t("span","/"),t("span",o)]}(t,this.currentSlide,o);return t("div",{class:{"hooper-pagination":!0,"is-vertical":this.$hooper.config.vertical}},n)}};function H(t,e,o){return o?t?"arrowUp":e?"arrowRight":"arrowLeft":t?"arrowDown":e?"arrowLeft":"arrowRight"}function L(t,e,slot,o,n,h){var l,c=n.isVertical,d=n.isRTL,f=slot&&slot.length?slot:[t(C,{props:{name:H(c,d,o)}})];return t("button",{class:(l={},r(l,"hooper-".concat(o?"prev":"next"),!0),r(l,"is-disabled",e),l),attrs:{type:"button"},on:{click:h}},f)}var O={inject:["$hooper"],name:"HooperNavigation",computed:{isPrevDisabled:function(){return!this.$hooper.config.infiniteScroll&&0===this.$hooper.currentSlide},isNextDisabled:function(){return!this.$hooper.config.infiniteScroll&&(this.$hooper.config.trimWhiteSpace?this.$hooper.currentSlide===this.$hooper.slidesCount-Math.min(this.$hooper.config.itemsToShow,this.$hooper.slidesCount):this.$hooper.currentSlide===this.$hooper.slidesCount-1)}},methods:{slideNext:function(){this.$hooper.slideNext(),this.$hooper.restartTimer()},slidePrev:function(){this.$hooper.slidePrev(),this.$hooper.restartTimer()}},render:function(t){var e=this,o={isRTL:this.$hooper.config.rtl,isVertical:this.$hooper.config.vertical},n=[L(t,this.isPrevDisabled,this.$slots["hooper-prev"],!0,o,(function(){return e.slidePrev()})),L(t,this.isNextDisabled,this.$slots["hooper-next"],!1,o,(function(){return e.slideNext()}))];return t("div",{class:{"hooper-navigation":!0,"is-vertical":this.$hooper.config.vertical,"is-rtl":this.$hooper.config.rtl}},n)}}},451:function(t,e,o){var content=o(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(80).default)("7064179c",content,!0,{sourceMap:!1})},465:function(t,e,o){var n=o(79)((function(i){return i[1]}));n.push([t.i,".hooper-slide{flex-shrink:0;height:100%;margin:0;padding:0;list-style:none}.hooper-progress{position:absolute;top:0;right:0;left:0;height:4px;background-color:#efefef}.hooper-progress-inner{height:100%;background-color:#4285f4;transition:.3s}.hooper-pagination{position:absolute;bottom:0;right:50%;transform:translateX(50%);display:flex;padding:5px 10px}.hooper-indicators{display:flex;list-style:none;margin:0;padding:0}.hooper-indicator.is-active,.hooper-indicator:hover{background-color:#4285f4}.hooper-indicator{margin:0 2px;width:12px;height:4px;border-radius:4px;border:none;padding:0;background-color:#fff;cursor:pointer}.hooper-pagination.is-vertical{bottom:auto;right:0;top:50%;transform:translateY(-50%)}.hooper-pagination.is-vertical .hooper-indicators{flex-direction:column}.hooper-pagination.is-vertical .hooper-indicator{width:6px}.hooper-next,.hooper-prev{background-color:transparent;border:none;padding:1em;position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.hooper-next.is-disabled,.hooper-prev.is-disabled{opacity:.3;cursor:not-allowed}.hooper-next{right:0}.hooper-prev{left:0}.hooper-navigation.is-vertical .hooper-next{top:auto;bottom:0;transform:none}.hooper-navigation.is-vertical .hooper-prev{top:0;bottom:auto;right:0;left:auto;transform:none}.hooper-navigation.is-rtl .hooper-prev{left:auto;right:0}.hooper-navigation.is-rtl .hooper-next{right:auto;left:0}.hooper{position:relative;width:100%;height:200px}.hooper,.hooper *{box-sizing:border-box}.hooper-list{overflow:hidden;width:100%;height:100%}.hooper-track{display:flex;box-sizing:border-box;width:100%;height:100%;padding:0;margin:0}.hooper.is-vertical .hooper-track{flex-direction:column;height:200px}.hooper.is-rtl{direction:rtl}.hooper-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}",""]),n.locals={},t.exports=n}}]);