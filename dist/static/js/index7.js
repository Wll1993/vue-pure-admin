import{r as h,ab as dt,k as L,ac as ot,o as b,i as O,ad as $,h as w,j as x,e as d,t as E,E as z,n as rt,s as ft,v as pt,d as T,W as C,ae as mt,D as k,af as gt,ag as ht,u as _,F as vt,q as yt,G as _t,ah as D,ai as bt,a as N,c as wt,w as R,aj as Ot,ak as At,al as It}from"./index.js";import{b as St}from"./back_top.js";function $t(t=6){return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)}const Et=["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399"];function zt(t,e){return Math.floor(Math.random()*(e-t+1))+t}function xt(){return Et[zt(0,4)]}const Ct="https://www.getphotoblanket.com",kt=({page:t=1,pageSize:e=20})=>{const n=`${Ct}/products.json?page=${t}&limit=${e}`;return fetch(n).then(o=>o.json()).then(o=>o.products).then(o=>o.map(r=>({id:$t(),star:!1,price:r.variants[0].price,src:{original:r.images[0].src},backgroundColor:xt(),name:r.title})))},Rt="/vue-pure-admin/static/png/error.png",jt="/vue-pure-admin/static/png/loading.png";const it=(t,e)=>{const n=t.__vccOpts||t;for(const[o,r]of e)n[o]=r;return n},Lt={},Tt=t=>(ft("data-v-259be2b2"),t=t(),pt(),t),Pt={class:"container"},Dt=Tt(()=>d("div",{class:"spinner"},null,-1)),Nt=[Dt];function Bt(t,e){return b(),O("div",Pt,Nt)}const Mt=it(Lt,[["render",Bt],["__scopeId","data-v-259be2b2"],["__file","/home/oumoussa/side-projects/infinite/src/components/Spinner.vue"]]),Vt=t=>({loading(){t.value="loading"},loaded(){t.value="loaded"},complete(){t.value="complete"},error(){t.value="error"}}),Ft=(t,e,n)=>()=>{const o=n.parentEl||document.documentElement;n.prevHeight=o.scrollHeight,e.loading(),t("infinite",e)},Ht=(t,e)=>{const n=t.getBoundingClientRect();if(!e)return n.top>=0&&n.bottom<=window.innerHeight;const o=e.getBoundingClientRect();return n.top>=o.top&&n.bottom<=o.bottom},B=t=>{t.parentEl=document.querySelector(t.target)||null;let e=`0px 0px ${t.distance}px 0px`;t.top&&(e=`${t.distance}px 0px 0px 0px`);const n=new IntersectionObserver(o=>{o[0].isIntersecting&&(t.firstload&&t.emit(),t.firstload=!0)},{root:t.parentEl,rootMargin:e});return n.observe(t.infiniteLoading.value),n},Wt={class:"state-error"},Gt={__name:"InfiniteLoading",props:{top:{type:Boolean,required:!1},target:{type:[String,Boolean],required:!1},distance:{type:Number,required:!1,default:0},identifier:{required:!1},firstload:{type:Boolean,required:!1,default:!0},slots:{type:Object,required:!1}},emits:["infinite"],setup(t,{emit:e}){const n=t;let o=null;const r=h(null),s=h("ready"),{top:i,firstload:a,target:u,distance:l}=n,{identifier:f}=dt(n),c={infiniteLoading:r,target:u,top:i,firstload:a,distance:l,prevHeight:0,parentEl:null};c.emit=Ft(e,Vt(s),c);const g=()=>z(s,async m=>{const v=c.parentEl||document.documentElement;await rt(),m=="loaded"&&i&&(v.scrollTop=v.scrollHeight-c.prevHeight),m=="loaded"&&Ht(r.value,c.parentEl)&&c.emit(),m=="complete"&&o.disconnect()}),p=()=>z(f,()=>{s.value="ready",o.disconnect(),o=B(c)});return L(()=>{o=B(c),g(),f&&p()}),ot(()=>{o.disconnect()}),(m,v)=>(b(),O("div",{ref_key:"infiniteLoading",ref:r},[s.value=="loading"?$(m.$slots,"spinner",{key:0},()=>[w(Mt)],!0):x("v-if",!0),s.value=="complete"?$(m.$slots,"complete",{key:1},()=>{var y;return[d("span",null,E(((y=t.slots)==null?void 0:y.complete)||"No more results!"),1)]},!0):x("v-if",!0),s.value=="error"?$(m.$slots,"error",{key:2,retry:c.emit},()=>{var y;return[d("span",Wt,[d("span",null,E(((y=t.slots)==null?void 0:y.error)||"Oops something went wrong!"),1),d("button",{class:"retry",onClick:v[0]||(v[0]=(...A)=>c.emit&&c.emit(...A))}," retry ")])]},!0):x("v-if",!0)],512))}},Ut=it(Gt,[["__scopeId","data-v-9d82030b"],["__file","/home/oumoussa/side-projects/infinite/src/components/InfiniteLoading.vue"]]);function qt(t){return gt()?(ht(t),!0):!1}const st=typeof window<"u";function Kt(t,e){function n(...o){t(()=>e.apply(this,o),{fn:e,thisArg:this,args:o})}return n}function Xt(t,e={}){let n,o;return s=>{const i=_(t),a=_(e.maxWait);if(n&&clearTimeout(n),i<=0||a!==void 0&&a<=0)return o&&(clearTimeout(o),o=null),s();a&&!o&&(o=setTimeout(()=>{n&&clearTimeout(n),o=null,s()},a)),n=setTimeout(()=>{o&&clearTimeout(o),o=null,s()},i)}}function Yt(t,e=200,n={}){return Kt(Xt(e,n),t)}function Qt(t){var e;const n=_(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Jt=st?window:void 0,M=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V="__vueuse_ssr_handlers__";M[V]=M[V]||{};var F=Object.getOwnPropertySymbols,Zt=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,ee=(t,e)=>{var n={};for(var o in t)Zt.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&F)for(var o of F(t))e.indexOf(o)<0&&te.call(t,o)&&(n[o]=t[o]);return n};function ne(t,e,n={}){const o=n,{window:r=Jt}=o,s=ee(o,["window"]);let i;const a=r&&"ResizeObserver"in r,u=()=>{i&&(i.disconnect(),i=void 0)},l=z(()=>Qt(t),c=>{u(),a&&r&&c&&(i=new ResizeObserver(e),i.observe(c,s))},{immediate:!0,flush:"post"}),f=()=>{u(),l()};return qt(f),{isSupported:a,stop:f}}var H,W;st&&(window!=null&&window.navigator)&&((H=window==null?void 0:window.navigator)!=null&&H.platform)&&/iP(ad|hone|od)/.test((W=window==null?void 0:window.navigator)==null?void 0:W.platform);const oe=({breakpoints:t,wrapperWidth:e,gutter:n,hasAroundGutter:o,initWidth:r})=>{const s=Object.keys(t).map(l=>Number(l)).sort((l,f)=>l-f);let i=e,a=!1;for(const l of s)if(e<=l){i=l,a=!0;break}if(!a)return r;const u=t[i].rowPerView;return o?(e-n)/u-n:(e-(u-1)*n)/u};function re(t){const e=h(0),n=h(null);ne(n,i=>{const a=i[0],{width:u}=a.contentRect;e.value=u});const o=k(()=>oe({wrapperWidth:e.value,breakpoints:t.breakpoints,gutter:t.gutter,hasAroundGutter:t.hasAroundGutter,initWidth:t.width})),r=k(()=>{const i=t.hasAroundGutter?-t.gutter:t.gutter;return Math.floor((e.value+i)/(o.value+t.gutter))}),s=k(()=>{const i=t.hasAroundGutter?t.gutter:-t.gutter,a=r.value*(o.value+t.gutter)+i;return(e.value-a)/2});return{waterfallWrapper:n,wrapperWidth:e,colWidth:o,cols:r,offsetX:s}}function at(t,e){return new RegExp(`(^|\\s)${e}(\\s|$)`).test(t.className)}function G(t,e){if(at(t,e))return;const n=t.className.split(/\s+/);n.push(e),t.className=n.join(" ")}const ie=document.createElement("div").style,j=(()=>{const t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(const e in t){const n=t[e];if(ie[n]!==void 0)return e}return!1})();function S(t){return j===!1?!1:j==="standard"?t:j+t.charAt(0).toUpperCase()+t.substr(1)}const U=S("transform"),q=S("animation-duration"),K=S("animation-delay"),X=S("transition"),Y=S("animation-fill-mode");function se(t,e,n,o,r){const s=h([]),i=h(0),a=c=>{const g=t.hasAroundGutter?c+1:c;return t.gutter*g+e.value*c+o.value},u=()=>{s.value=new Array(n.value).fill(t.hasAroundGutter?t.gutter:0)},l=ae(t);return{wrapperHeight:i,layoutHandle:async()=>{u();const c=[];if(r&&r.value&&r.value.childNodes.forEach(g=>{g.className==="waterfall-item"&&c.push(g)}),c.length===0)return!1;for(let g=0;g<c.length;g++){const p=c[g],m=Math.min.apply(null,s.value),v=s.value.indexOf(m),y=a(v),A=p.style;U&&(A[U]=`translate3d(${y}px,${m}px, 0)`),A.width=`${e.value}px`;const{height:ut}=p.getBoundingClientRect();s.value[v]+=ut+t.gutter,l(p,()=>{X&&(A[X]="transform .3s")})}i.value=Math.max.apply(null,s.value)}}}function ae(t){return(e,n)=>{const o=e.firstChild;if(o&&!at(o,t.animationPrefix)){const r=`${t.animationDuration/1e3}s`,s=`${t.animationDelay/1e3}s`,i=o.style;i.visibility="visible",q&&(i[q]=r),K&&(i[K]=s),Y&&(i[Y]="both"),G(o,t.animationPrefix),G(o,t.animationEffect),n&&setTimeout(()=>{n()},t.animationDuration+t.animationDelay)}}}const le=typeof window<"u"&&window!==null,Q=de(),ce=Object.prototype.propertyIsEnumerable,J=Object.getOwnPropertySymbols;function ue(t,...e){return e.map(o=>o.replace(/\[(\w+)\]/g,".$1").split(".").reduce((r,s)=>r&&r[s],t))}function de(){return le&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function I(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function fe(t){return typeof t=="object"?t===null:typeof t!="function"}function pe(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function me(t,...e){if(!I(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof J!="function")return t;for(const n of e){const o=J(n);for(const r of o)ce.call(n,r)&&(t[r]=n[r])}return t}function lt(t,...e){let n=0;for(fe(t)&&(t=e[n++]),t||(t={});n<e.length;n++)if(I(e[n])){for(const o of Object.keys(e[n]))pe(o)&&(I(t[o])&&I(e[n][o])?lt(t[o],e[n][o]):t[o]=e[n][o]);me(t,e[n])}return t}function Z(t,e){return new Promise((n,o)=>{const r=new Image;r.onload=()=>{n(r)},r.onerror=()=>{o(new Error("Image load error"))},e&&(r.crossOrigin="Anonymous"),r.src=t})}const ge={rootMargin:"0px",threshold:0},tt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",he="";class ve{constructor(e=!0,n,o=!0){this.lazyActive=!0,this.crossOrigin=!0,this.options={loading:tt,error:he,observerOptions:ge,log:!0},this._images=new WeakMap,this.lazyActive=e,this.crossOrigin=o,this.config(n)}config(e={}){lt(this.options,e)}mount(e,n,o){const{src:r,loading:s,error:i}=this._valueFormatter(n);e.setAttribute("lazy","loading"),e.setAttribute("src",s||tt),this.lazyActive?(Q||(this._setImageSrc(e,r,o,i),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,r,o,i)):this._setImageSrc(e,r,o,i)}resize(e,n){const o=e.getAttribute("lazy"),r=e.getAttribute("src");o&&o==="loaded"&&r&&Z(r,this.crossOrigin).then(s=>{const{width:i,height:a}=s,u=e.width/i*a;e.height=u;const l=e.style;l.height=`${u}px`,n()})}unmount(e){const n=this._realObserver(e);n&&n.unobserve(e),this._images.delete(e)}_setImageSrc(e,n,o,r){!n||e.getAttribute("src")===n||Z(n,this.crossOrigin).then(i=>{const{width:a,height:u}=i,l=u/a,f=e.parentNode.parentNode;f.style.paddingBottom=`${l*100}%`,e.setAttribute("lazy","loaded"),e.removeAttribute("src"),e.setAttribute("src",n),o()}).catch(()=>{const i=this._realObserver(e);i&&i.disconnect(),r&&(e.setAttribute("lazy","error"),e.setAttribute("src",r)),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${n} `)}),o()})}_isOpenLazy(){return Q&&this.lazyActive}_initIntersectionObserver(e,n,o,r){const s=this.options.observerOptions;this._images.set(e,new IntersectionObserver(a=>{Array.prototype.forEach.call(a,u=>{if(u.isIntersecting){const l=this._realObserver(e);l&&l.unobserve(u.target),this._setImageSrc(e,n,o,r)}})},s));const i=this._realObserver(e);i&&i.observe(e)}_valueFormatter(e){let n=e,o=this.options.loading,r=this.options.error;return I(e)&&(n=e.src,o=e.loading||this.options.loading,r=e.error||this.options.error),{src:n,loading:o,error:r}}_log(e){this.options.log&&e()}_realObserver(e){return this._images.get(e)}}var ct=(t,e)=>{const n=t.__vccOpts||t;for(const[o,r]of e)n[o]=r;return n};const P=T({props:{list:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},imgSelector:{type:String,default:"src"},width:{type:Number,default:200},breakpoints:{type:Object,default:()=>({1200:{rowPerView:3},800:{rowPerView:2},500:{rowPerView:1}})},gutter:{type:Number,default:10},hasAroundGutter:{type:Boolean,default:!0},animationPrefix:{type:String,default:"animate__animated"},animationEffect:{type:String,default:"fadeIn"},animationDuration:{type:Number,default:1e3},animationDelay:{type:Number,default:300},backgroundColor:{type:String,default:"#fff"},lazyload:{type:Boolean,default:!0},loadProps:{type:Object,default:()=>{}},crossOrigin:{type:Boolean,default:!0},delay:{type:Number,default:300}},setup(t){const e=new ve(t.lazyload,t.loadProps,t.crossOrigin);C("lazy",e);const{waterfallWrapper:n,wrapperWidth:o,colWidth:r,cols:s,offsetX:i}=re(t),{wrapperHeight:a,layoutHandle:u}=se(t,r,s,i,n),l=Yt(()=>{u()},t.delay);z(()=>[o,r,t.list],()=>{l()},{deep:!0});const f=h(0);return C("sizeChangeTime",f),C("imgLoaded",l),{waterfallWrapper:n,wrapperHeight:a,getRenderURL:p=>ue(p,t.imgSelector)[0],getKey:(p,m)=>p[t.rowKey]||m}}}),et=()=>{mt(t=>({e0bdcc92:t.backgroundColor}))},nt=P.setup;P.setup=nt?(t,e)=>(et(),nt(t,e)):et;const ye=P,_e={class:"waterfall-card"};function be(t,e,n,o,r,s){return b(),O("div",{ref:"waterfallWrapper",class:"waterfall-list",style:_t({height:`${t.wrapperHeight}px`})},[(b(!0),O(vt,null,yt(t.list,(i,a)=>(b(),O("div",{key:t.getKey(i,a),class:"waterfall-item"},[d("div",_e,[$(t.$slots,"item",{item:i,index:a,url:t.getRenderURL(i)},void 0,!0)])]))),128))],4)}var we=ct(ye,[["render",be],["__scopeId","data-v-585fbbe9"]]);const Oe=T({props:{url:{type:String,default:""}},setup(t){const e=D("imgLoaded"),n=D("lazy"),o=h(null);L(()=>{r()}),ot(()=>{s()});function r(){o.value&&n.mount(o.value,t.url,()=>{e()})}function s(){o.value&&n.unmount(o.value)}return{lazyRef:o}}}),Ae={class:"lazy__box"},Ie={class:"lazy__resource"},Se={ref:"lazyRef",class:"lazy__img"};function $e(t,e,n,o,r,s){return b(),O("div",Ae,[d("div",Ie,[d("img",Se,null,512)])])}var Ee=ct(Oe,[["render",$e],["__scopeId","data-v-5a384790"]]);const ze=["onClick"],xe={class:"overflow-hidden"},Ce={class:"px-4 pt-2 pb-4 border-t border-t-gray-800"},ke={class:"pb-4 text-gray-50 group-hover:text-yellow-300"},Re={class:"pt-3 flex justify-between items-center border-t border-t-gray-600 border-opacity-50"},je={class:"text-gray-50"},Le=["onClick"],De=T({__name:"index",setup(t){const e=bt({rowKey:"id",gutter:10,hasAroundGutter:!0,width:320,breakpoints:{1200:{rowPerView:4},800:{rowPerView:3},500:{rowPerView:2}},animationEffect:"animate__zoomInUp",animationDuration:1e3,animationDelay:300,imgSelector:"src.original",loadProps:{loading:jt,error:Rt},lazyload:!0}),n=h(1),o=h([]),r=h(),s=h();function i(){s.value=Ot.service({target:".content",background:"transparent",text:"加载中"}),kt({page:n.value,pageSize:r.value}).then(l=>{setTimeout(()=>{o.value.push(...l),n.value+=1,rt(()=>{s.value.close()})},500)})}function a(l,f){o.value.splice(f,1)}function u(l){}return L(()=>{i()}),(l,f)=>{const c=N("el-backtop"),g=N("el-scrollbar");return b(),wt(g,{height:"87vh",class:"content"},{default:R(()=>[w(_(we),It({list:o.value},e),{item:R(({item:p,url:m,index:v})=>[d("div",{class:"bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-linear hover:shadow-lg hover:shadow-gray-600 group",onClick:y=>void 0},[d("div",xe,[w(_(Ee),{url:m,class:"cursor-pointer transition-all duration-300 ease-linear group-hover:scale-105"},null,8,["url"])]),d("div",Ce,[d("h4",ke,E(p.name),1),d("div",Re,[d("div",je,"$ "+E(p.price),1),d("div",null,[d("button",{class:"px-3 h-7 rounded-full bg-red-500 text-sm text-white shadow-lg transition-all duration-300 hover:bg-red-600",onClick:At(y=>a(p,v),["stop"])}," 删除 ",8,Le)])])])],8,ze)]),_:1},16,["list"]),w(c,{title:"回到顶部",right:35,"visibility-height":400,target:".content .el-scrollbar__wrap"},{default:R(()=>[w(_(St))]),_:1}),w(_(Ut),{firstload:!1,onInfinite:i})]),_:1})}}});export{De as default};
