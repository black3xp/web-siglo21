(window.webpackJsonp=window.webpackJsonp||[]).push([[27,5,11,12,14],{299:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,required:!0},subtitle:{type:String,required:!1},description:{type:String,require:!1},margin:{type:String,required:!1,default:"mt-4"},colorText:{type:String,required:!1,default:"text-black"}}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:(t.margin||"")+" flex flex-col md:flex-row justify-start md:justify-between md:items-center"},[n("div",{staticClass:"block"},[n("h3",{staticClass:"md:text-2xl text-xl leading-none"},[n("span",[t._v("\n          "+t._s(t.subtitle||"")+"\n      ")])]),t._v(" "),n("h2",{class:"md:text-[2.8rem] leading-[1.10] text-[2rem] md:leading-none font-bold mt-2 mb-0 "+(t.colorText||"")},[n("span",[t._v("\n          "+t._s(t.title)+"\n      ")])]),t._v(" "),n("p",{staticClass:"text-md mt-2"},[n("span",[t._v("\n          "+t._s(t.description||"")+"\n      ")])])]),t._v(" "),n("div",{staticClass:"block"},[t._t("default")],2)])}),[],!1,null,"9b6f0c24",null);e.default=component.exports},300:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));var o="https://web-api.cmsiglo21.app/api",r="https://web-beta.cmsiglo21.com"},301:function(t,e,n){"use strict";n.r(e);var o={props:{link:{type:String,required:!0},bg:{type:String,required:!1,default:"bg-white"},color:{type:String,required:!1,default:"text-black"},target:{type:Boolean,required:!1,default:!1}}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{class:"inline-block mt-4 py-[20px] px-[60px] rounded "+t.bg+" "+t.color,attrs:{to:t.link}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";var script={props:{height:{type:[Number,String],default:100},width:{type:[Number,String],default:100},color:{type:String,default:"rgba(0, 0, 0, 0.12)"},animation:{type:String,default:"wave"}},computed:{bindClass(){return`animation--${this.animation}`}},mounted(){const t="number"==typeof this.width?`${this.width}px`:this.width,e="number"==typeof this.width?`${this.height}px`:this.height,n=`${this.color}`,o=this.$el;o.style.setProperty("width",t),o.style.setProperty("height",e),o.style.setProperty("background-color",n)}};function o(template,style,script,t,e,n,o,r,l,d){"boolean"!=typeof o&&(l=r,r=o,o=!1);const c="function"==typeof script?script.options:script;let m;if(template&&template.render&&(c.render=template.render,c.staticRenderFns=template.staticRenderFns,c._compiled=!0,e&&(c.functional=!0)),t&&(c._scopeId=t),n?(m=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=m):style&&(m=o?function(t){style.call(this,d(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),m)if(c.functional){const t=c.render;c.render=function(e,n){return m.call(n),t(e,n)}}else{const t=c.beforeCreate;c.beforeCreate=t?[].concat(t,m):[m]}return script}const r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function l(t){return(t,style)=>function(t,e){const n=r?e.media||"default":t,style=c[n]||(c[n]={ids:new Set,styles:[]});if(!style.ids.has(t)){style.ids.add(t);let code=e.source;if(e.map&&(code+="\n/*# sourceURL="+e.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",e.media&&style.element.setAttribute("media",e.media),void 0===d&&(d=document.head||document.getElementsByTagName("head")[0]),d.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{const t=style.ids.size-1,e=document.createTextNode(code),n=style.element.childNodes;n[t]&&style.element.removeChild(n[t]),n.length?style.element.insertBefore(e,n[t]):style.element.appendChild(e)}}}(t,style)}let d;const c={};const m=o({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return"circle"===t.type?n("circle-loader",{attrs:{width:t.loaderWidth,height:t.loaderHeight,animation:t.animation,color:t.color}}):n("square-loader",{attrs:{width:t.loaderWidth,height:t.loaderHeight,animation:t.animation,type:t.type,color:t.color,rounded:t.rounded,radius:t.radius}})},staticRenderFns:[]},(function(t){t&&t("data-v-28d24b2c_0",{source:".loader{width:fit-content;cursor:wait;--gradient-color:rgba(255, 255, 255, 0.5)}@keyframes fade{0%{opacity:1}50%{opacity:.4}100%{opacity:1}}@keyframes pulse{0%{transform:scale(1)}50%{transform:scale(.85)}100%{transform:scale(1)}}@keyframes pulse-x{0%{transform:scaleX(1)}50%{transform:scaleX(.75)}100%{transform:scaleX(1)}}@keyframes pulse-y{0%{transform:scaleY(1)}50%{transform:scaleY(.75)}100%{transform:scaleY(1)}}@keyframes wave{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.animation--fade{animation:fade 1.5s linear .5s infinite}.animation--wave::before{background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);background:linear-gradient(90deg,transparent,var(--gradient-color),transparent);animation:wave 1.5s linear .5s infinite}.animation--pulse-x{animation:pulse-x 1.5s linear .5s infinite}.animation--pulse-y{animation:pulse-y 1.5s linear .5s infinite}.animation--pulse{animation:pulse 1.5s linear .5s infinite}",map:void 0,media:void 0})}),{components:{CircleLoader:o({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader loader--circle",class:t.bindClass})},staticRenderFns:[]},(function(t){t&&t("data-v-c49d1d20_0",{source:'.loader--circle[data-v-c49d1d20]{overflow:hidden;width:100px;height:100px;background-color:red;border-radius:50%;position:relative}.loader--circle[data-v-c49d1d20]::before{content:"";display:block;position:absolute;left:0;right:0;bottom:0;top:0}',map:void 0,media:void 0})}),script,"data-v-c49d1d20",false,undefined,!1,l,void 0,void 0),SquareLoader:o({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"loader",class:t.bindClass})},staticRenderFns:[]},(function(t){t&&t("data-v-39eb697a_0",{source:'.loader[data-v-39eb697a]{overflow:hidden;position:relative}.loader[data-v-39eb697a]::before{content:"";display:block;position:absolute;left:0;right:0;bottom:0;top:0}.shape--text[data-v-39eb697a]{height:20px}.shape--round[data-v-39eb697a]{border-radius:8px}',map:void 0,media:void 0})}),{props:{height:{type:[Number,String],default:100},width:{type:[Number,String],default:200},color:{type:String,default:"rgba(0, 0, 0, 0.12)"},animation:{type:String,default:"wave"},type:{type:String,default:"rect"},rounded:{type:Boolean,default:!1},radius:{type:[Number,String],default:0}},computed:{style(){return{width:"number"==typeof this.width?`${this.width}px`:this.width,height:"number"==typeof this.width?`${this.height}px`:this.height,"background-color":`${this.color}`,"border-radius":this.rounded?`${this.radius}px`:0}},bindClass(){return`animation--${this.animation} shape--${this.type} shape--${this.rounded?"round":"flat"}`}},mounted(){const t="number"==typeof this.width?`${this.width}px`:this.width,e="number"==typeof this.width?`${this.height}px`:this.height,n=`${this.color}`,o=this.rounded?`${this.radius}px`:0,r=this.$el;r.style.setProperty("width",t),r.style.setProperty("height",e),r.style.setProperty("background-color",n),r.style.setProperty("border-radius",o)}},"data-v-39eb697a",false,undefined,!1,l,void 0,void 0)},props:{type:{type:String,default:"rect"},size:{type:[Number,String]},animation:{type:String,default:"wave"},height:{type:[Number,String]},width:{type:[Number,String]},color:{type:String,default:"rgba(0, 0, 0, 0.12)"},waveColor:{type:String},rounded:{type:Boolean,default:!1},radius:{type:[Number,String],default:8}},computed:{loaderWidth(){return this.size?this.size:this.width},loaderHeight(){return this.size?this.size:this.height}},mounted(){this.waveColor&&this.$el.style.setProperty("--gradient-color",this.waveColor)}},undefined,false,undefined,!1,l,void 0,void 0),h=function(t){h.installed||(h.installed=!0,t.component("skeleton-loader-vue",m))};m.install=h,e.a=m},304:function(t,e,n){var content=n(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("2b3dab29",content,!0,{sourceMap:!1})},441:function(t,e,n){"use strict";n.r(e);n(65);var o={props:{id:{type:String,required:!0},title:{type:String,required:!0},icono:{type:String,required:!0},folder:{type:String},plus:{type:Boolean,default:!1}},data:function(){return{imageUrl:"/images/no-image.jpg",image:"/images/no-image.jpg"}},methods:{mostrarTitulo:function(){return this.title.length>20?this.title.substring(0,28)+"...":this.title},getIcono:function(){var t=this;if(!this.icono)return"/images/no-image.jpg";this.plus?this.imageUrl="/images/no-image.jpg":this.$axios.get("/v1/imagen/".concat(this.icono)).then((function(e){t.imageUrl="".concat(t.$axios.defaults.baseURL,"/v1/imagen/slug/").concat(e.data.slugs,"?folder=").concat(t.folder)})).catch((function(e){t.imageUrl="/images/no-image.jpg",console.log(e)}))}},mounted:function(){this.getIcono()},updated:function(){this.getIcono()}},r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-link",{staticClass:"flex sm:mb-5 md:mb-5",attrs:{to:"/servicios/"+t.id,title:t.title}},[n("div",{staticClass:"shadow-xl p-6 rounded w-full flex items-center flex-col"},[n("img",{staticClass:"h-[170px]",attrs:{src:this.imageUrl,alt:"",loading:"lazy"}}),t._v(" "),n("h3",{staticClass:"text-xl text-center mt-5"},[t._v(t._s(t.mostrarTitulo()))])])])}),[],!1,null,null,null);e.default=component.exports},442:function(t,e,n){"use strict";n(304)},443:function(t,e,n){var o=n(79)((function(i){return i[1]}));o.push([t.i,".hooper[data-v-1c4e02b3]{width:100%;height:400px}@media screen and (max-width:768px){.hooper[data-v-1c4e02b3]{width:100%;height:200px}}",""]),o.locals={},t.exports=o},456:function(t,e,n){"use strict";n.r(e);var o=n(301),r=n(450),l=(n(451),{components:{Hooper:r.a,Slide:r.d,HooperPagination:r.c,HooperNavigation:r.b,Buttom:o.default}}),d=(n(442),n(15)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("hooper",{ref:"hooper",staticClass:"md:h-[400px]",attrs:{autoPlay:!0,centerMode:!0,playSpeed:1e4,itemsToShow:1}},[n("slide",[n("div",{staticClass:"w-full relative"},[n("div",{staticClass:"absolute left-0 top-0 w-full h-[400px] bg-[rgba(0,0,0,0.5)] z-10"},[n("div",{staticClass:"\n            container-global\n            text-white\n            h-full\n            flex\n            items-end\n          "},[n("div",{staticClass:"mb-8"},[n("h2",{staticClass:"\n                text-[1.5rem]\n                md:text-[2.5rem]\n                leading-[auto]\n                text-white\n                font-bold\n                md:leading-[3rem]\n                uppercase\n              "},[t._v("\n              "+t._s(t.$t("text.medical.imaging"))+"\n            ")]),t._v(" "),n("div",{staticClass:"md:block hidden"}),t._v(" "),n("div",[n("router-link",{staticClass:"\n                  inline-block\n                  md:hidden\n                  mt-4\n                  py-[10px]\n                  px-[30px]\n                  rounded\n                  bg-primary-web\n                  text-black\n                ",attrs:{to:"/servicios/imgenes-mdicas-62b1c84bd483ca00131f3a11"}},[t._v("\n                Ver Más\n              ")])],1)])])]),t._v(" "),n("img",{staticClass:"w-full h-[400px] object-cover",attrs:{loading:"lazy",src:"/images/slider/servicios/imagenes-medicas.webp"}})])]),t._v(" "),n("slide",[n("div",{staticClass:"w-full relative"},[n("div",{staticClass:"absolute left-0 top-0 w-full h-[400px] bg-[rgba(0,0,0,0.5)] z-10"},[n("div",{staticClass:"\n            container-global\n            text-white\n            h-full\n            flex\n            items-end\n          "},[n("div",{staticClass:"mb-8"},[n("h2",{staticClass:"\n                text-[1.5rem]\n                md:text-[2.5rem]\n                leading-[auto]\n                text-white\n                font-bold\n                md:leading-[3rem]\n                uppercase\n              "},[t._v("\n              "+t._s(t.$t("text.surgery"))+"\n            ")]),t._v(" "),n("div",{staticClass:"md:block hidden"}),t._v(" "),n("div",[n("router-link",{staticClass:"\n                  inline-block\n                  md:hidden\n                  mt-4\n                  py-[10px]\n                  px-[30px]\n                  rounded\n                  bg-primary-web\n                  text-black\n                ",attrs:{to:"/servicios"}},[t._v("\n                Ver Más\n              ")])],1)])])]),t._v(" "),n("img",{staticClass:"w-full h-[400px] object-cover",attrs:{loading:"lazy",src:"/images/slider/servicios/cirugia.webp",alt:""}})])]),t._v(" "),n("slide",[n("div",{staticClass:"w-full relative"},[n("div",{staticClass:"absolute left-0 top-0 w-full h-[400px] bg-[rgba(0,0,0,0.5)] z-10"},[n("div",{staticClass:"\n            container-global\n            text-white\n            h-full\n            flex\n            items-end\n          "},[n("div",{staticClass:"mb-8"},[n("h2",{staticClass:"\n                text-[1.5rem]\n                md:text-[2.5rem]\n                leading-[auto]\n                text-white\n                font-bold\n                md:leading-[3rem]\n                uppercase\n              "},[t._v("\n              "+t._s(t.$t("text.medical.consultations"))+"\n            ")]),t._v(" "),n("div",{staticClass:"md:block hidden"}),t._v(" "),n("div",[n("router-link",{staticClass:"\n                  inline-block\n                  md:hidden\n                  mt-4\n                  py-[10px]\n                  px-[30px]\n                  rounded\n                  bg-primary-web\n                  text-black\n                ",attrs:{to:"/servicios/consultas-mdicas-62c6cd72f2c69b00120ad042"}},[t._v("\n                Ver Más\n              ")])],1)])])]),t._v(" "),n("img",{staticClass:"w-full h-[400px] object-cover",attrs:{loading:"lazy",src:"/images/slider/servicios/consulta-medica.webp",alt:""}})])]),t._v(" "),n("slide",[n("div",{staticClass:"w-full relative"},[n("div",{staticClass:"absolute left-0 top-0 w-full h-[400px] bg-[rgba(0,0,0,0.5)] z-10"},[n("div",{staticClass:"\n            container-global\n            text-white\n            h-full\n            flex\n            items-end\n          "},[n("div",{staticClass:"mb-8"},[n("h2",{staticClass:"\n                text-[1.5rem]\n                md:text-[2.5rem]\n                leading-[auto]\n                text-white\n                font-bold\n                md:leading-[3rem]\n                uppercase\n              "},[t._v("\n              "+t._s(t.$t("text.laboratory"))+"\n            ")]),t._v(" "),n("div",{staticClass:"md:block hidden"}),t._v(" "),n("div",[n("router-link",{staticClass:"\n                  inline-block\n                  md:hidden\n                  mt-4\n                  py-[10px]\n                  px-[30px]\n                  rounded\n                  bg-primary-web\n                  text-black\n                ",attrs:{to:"/servicios/laboratorio-clnico-62b1c6f5d483ca00131f3a0d"}},[t._v("\n                Ver Más\n              ")])],1)])])]),t._v(" "),n("img",{staticClass:"w-full h-[400px] object-cover",attrs:{loading:"lazy",src:"/images/slider/servicios/servicios-laboratorio.webp",alt:""}})])]),t._v(" "),n("slide",[n("div",{staticClass:"w-full relative"},[n("div",{staticClass:"absolute left-0 top-0 w-full h-[400px] bg-[rgba(0,0,0,0.5)] z-10"},[n("div",{staticClass:"\n            container-global\n            text-white\n            h-full\n            flex\n            items-end\n          "},[n("div",{staticClass:"mb-8"},[n("h2",{staticClass:"\n                text-[1.5rem]\n                md:text-[2.5rem]\n                leading-[auto]\n                text-white\n                font-bold\n                md:leading-[3rem]\n                uppercase\n              "},[t._v("\n              "+t._s(t.$t("text.uci"))+"\n            ")]),t._v(" "),n("div",{staticClass:"md:block hidden"}),t._v(" "),n("div",[n("router-link",{staticClass:"\n                  inline-block\n                  md:hidden\n                  mt-4\n                  py-[10px]\n                  px-[30px]\n                  rounded\n                  bg-primary-web\n                  text-black\n                ",attrs:{to:"/servicios/laboratorio-clnico-62b1c6f5d483ca00131f3a0d"}},[t._v("\n                Ver Más\n              ")])],1)])])]),t._v(" "),n("img",{staticClass:"w-full h-[400px] object-cover",attrs:{loading:"lazy",src:"/images/slider/servicios/UCI.webp",alt:""}})])]),t._v(" "),n("slide",[n("div",{staticClass:"w-full relative"},[n("div",{staticClass:"absolute left-0 top-0 w-full h-[400px] bg-[rgba(0,0,0,0.5)] z-10"},[n("div",{staticClass:"\n            container-global\n            text-white\n            h-full\n            flex\n            items-end\n          "},[n("div",{staticClass:"mb-8"},[n("h2",{staticClass:"\n                text-[1.5rem]\n                md:text-[2.5rem]\n                leading-[auto]\n                text-white\n                font-bold\n                md:leading-[3rem]\n                uppercase\n              "},[t._v("\n              "+t._s(t.$t("text.nicu"))+"\n            ")]),t._v(" "),n("div",{staticClass:"md:block hidden"}),t._v(" "),n("div",[n("router-link",{staticClass:"\n                  inline-block\n                  md:hidden\n                  mt-4\n                  py-[10px]\n                  px-[30px]\n                  rounded\n                  bg-primary-web\n                  text-black\n                ",attrs:{to:"/servicios/laboratorio-clnico-62b1c6f5d483ca00131f3a0d"}},[t._v("\n                Ver Más\n              ")])],1)])])]),t._v(" "),n("img",{staticClass:"w-full h-[400px] object-cover",attrs:{loading:"lazy",src:"/images/slider/servicios/UCIN.webp",alt:""}})])]),t._v(" "),n("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t._v(" "),n("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],1)}),[],!1,null,"1c4e02b3",null);e.default=component.exports},475:function(t,e,n){"use strict";n.r(e);n(34),n(29),n(33),n(14),n(48),n(28),n(49);var o=n(24),r=n(199),l=n(200),d=n(299),c=n(303),m=n(300),h=n(42);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={head:function(){return{title:"Nuestros servicios | Centro Médico Docente Siglo 21",meta:[{hid:"description",name:"description",content:"Conoce todos los servicios que ofrecemos en nuestro Centro."},{hid:"keywords",name:"keywords",content:"servicios, resultados, consultas, emergencias"},{hid:"og:image",property:"og:image",name:"og:image",content:"".concat(m.a,"/images/slider/servicios/servicios-laboratorio.webp")},{hid:"og:title",property:"og:title",name:"og:title",content:"Nuestros servicios | Centro Médico Docente Siglo 21"},{hid:"og:description",property:"og:description",name:"og:description",content:"Conoce todos los servicios que ofrecemos en nuestro Centro."},{hid:"og:url",property:"og:url",name:"og:url",content:"".concat(m.a)}]}},data:function(){return{servicios:[],serviciosDestacados:[],loadingServicios:!0}},components:{Mininav:r.default,Navbar:l.default,TitleArea:d.default,VueSkeletonLoader:c.a},computed:v({},Object(h.b)(["locales","locale"])),methods:v(v({},Object(h.c)(["SET_LANG"])),{},{getServiciosDestacados:function(t){var e=this;this.$axios.get("/v1/servicios?destacados=true&publicado=true&idioma=".concat(t)).then((function(t){e.loadingServicios=!1,e.serviciosDestacados=t.data})).catch((function(t){e.loadingServicios=!1,console.error(t)}))},getServicios:function(t){var e=this;this.$axios.get("/v1/servicios?destacados=false&publicado=true&idioma=".concat(t)).then((function(t){e.loadingServicios=!1,e.servicios=t.data})).catch((function(t){e.loadingServicios=!1,console.error(t)}))}}),watch:{locale:function(){this.getServicios(this.locale),this.getServiciosDestacados(this.locale),console.log(this.locale)}},mounted:function(){this.getServicios(this.locale),this.getServiciosDestacados(this.locale)}},y=n(15),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",[n("Mininav"),t._v(" "),n("Navbar")],1),t._v(" "),n("SliderServices"),t._v(" "),n("section",{},[n("div",{staticClass:"container-global"},[n("div",[n("TitleArea",{attrs:{margin:"my-10",title:t.$t("text.page.services.subtitle"),colorText:"text-primary-web"}})],1)])]),t._v(" "),n("section",{staticClass:"\n      container-global\n      grid\n      lg:grid-cols-5\n      md:grid-cols-4 md:gap-4\n      lg:gap-5\n      mb-10\n    "},[t._l(t.serviciosDestacados,(function(t,e){return n("Services",{key:e,attrs:{title:t.nombre,id:t.slugs,icono:t.icono,folder:"servicios"}})})),t._v(" "),t._l(t.servicios,(function(t){return n("Services",{key:t.id,attrs:{title:t.nombre,id:t.slugs,icono:t.icono,folder:"servicios"}})})),t._v(" "),t.loadingServicios?n("VueSkeletonLoader",{attrs:{type:"rect",height:200,animation:"fade"}}):t._e()],2),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Mininav:n(199).default,Navbar:n(200).default,SliderServices:n(456).default,Services:n(441).default,Footer:n(201).default})}}]);