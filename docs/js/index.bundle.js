/*! For license information please see index.bundle.js.LICENSE.txt */
!function(){var t={402:function(){document.addEventListener("DOMContentLoaded",(function t(){const n=[];if(window.innerWidth<=768){const t=document.querySelector(".intersection__button"),e=[document.querySelector(".about"),document.querySelector(".founder"),document.querySelector(".services"),document.querySelector(".projects")],i={rootMargin:"0px",threshold:.1},o=(n,e)=>{n.forEach((n=>{n.isIntersecting?(t.style.opacity=1,t.style.pointerEvents="auto"):(t.style.opacity=0,t.style.pointerEvents="none")}))};e.forEach((t=>{if(t){const e=new IntersectionObserver(o,i);e.observe(t),n.push(e)}else console.error(`${t} not founded`)}))}else n?.forEach((t=>t.disconnect())),document.removeEventListener("DOMContentLoaded",t)}))},50:function(){const t=document.querySelector(".services__cards"),n=document.querySelectorAll(".services__card"),e=document.querySelectorAll(".services__card-front"),i=document.querySelectorAll(".services__card-back");window.addEventListener("resize",(()=>{window.innerWidth<=768?(t.classList.remove("cards"),n.forEach((t=>t.classList.remove("card"))),e.forEach((t=>t.classList.remove("card-face, card-front"))),i.forEach((t=>t.classList.remove("card-face, card-back")))):(t.classList.add("cards"),n.forEach((t=>t.classList.add("card"))),e.forEach((t=>t.classList.add("card-face, card-front"))),i.forEach((t=>t.classList.add("card-face, card-back"))))}))}},n={};function e(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={exports:{}};return t[i](r,r.exports,e),r.exports}!function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n="(prefers-reduced-motion: reduce)",i={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function o(t){t.length=0}function r(t,n,e){return Array.prototype.slice.call(t,n,e)}function s(t){return t.bind.apply(t,[null].concat(r(arguments,1)))}var a=setTimeout,u=function(){};function c(t){return requestAnimationFrame(t)}function l(t,n){return typeof n===t}function d(t){return!m(t)&&l("object",t)}var f=Array.isArray,h=s(l,"function"),p=s(l,"string"),v=s(l,"undefined");function m(t){return null===t}function g(t){try{return t instanceof(t.ownerDocument.defaultView||window).HTMLElement}catch(t){return!1}}function y(t){return f(t)?t:[t]}function b(t,n){y(t).forEach(n)}function w(t,n){return t.indexOf(n)>-1}function E(t,n){return t.push.apply(t,y(n)),t}function S(t,n,e){t&&b(n,(function(n){n&&t.classList[e?"add":"remove"](n)}))}function x(t,n){S(t,p(n)?n.split(" "):n,!0)}function V(t,n){b(n,t.appendChild.bind(t))}function C(t,n){b(t,(function(t){var e=(n||t).parentNode;e&&e.insertBefore(t,n)}))}function _(t,n){return g(t)&&(t.msMatchesSelector||t.matches).call(t,n)}function L(t,n){var e=t?r(t.children):[];return n?e.filter((function(t){return _(t,n)})):e}function A(t,n){return n?L(t,n)[0]:t.firstElementChild}var P=Object.keys;function k(t,n,e){return t&&(e?P(t).reverse():P(t)).forEach((function(e){"__proto__"!==e&&n(t[e],e)})),t}function D(t){return r(arguments,1).forEach((function(n){k(n,(function(e,i){t[i]=n[i]}))})),t}function F(t){return r(arguments,1).forEach((function(n){k(n,(function(n,e){f(n)?t[e]=n.slice():d(n)?t[e]=F({},d(t[e])?t[e]:{},n):t[e]=n}))})),t}function M(t,n){b(n||P(t),(function(n){delete t[n]}))}function N(t,n){b(t,(function(t){b(n,(function(n){t&&t.removeAttribute(n)}))}))}function O(t,n,e){d(n)?k(n,(function(n,e){O(t,e,n)})):b(t,(function(t){m(e)||""===e?N(t,n):t.setAttribute(n,String(e))}))}function T(t,n,e){var i=document.createElement(t);return n&&(p(n)?x(i,n):O(i,n)),e&&V(e,i),i}function I(t,n,e){if(v(e))return getComputedStyle(t)[n];m(e)||(t.style[n]=""+e)}function q(t,n){I(t,"display",n)}function z(t){t.setActive&&t.setActive()||t.focus({preventScroll:!0})}function j(t,n){return t.getAttribute(n)}function R(t,n){return t&&t.classList.contains(n)}function W(t){return t.getBoundingClientRect()}function G(t){b(t,(function(t){t&&t.parentNode&&t.parentNode.removeChild(t)}))}function X(t){return A((new DOMParser).parseFromString(t,"text/html").body)}function Y(t,n){t.preventDefault(),n&&(t.stopPropagation(),t.stopImmediatePropagation())}function B(t,n){return t&&t.querySelector(n)}function H(t,n){return n?r(t.querySelectorAll(n)):[]}function U(t,n){S(t,n,!1)}function K(t){return t.timeStamp}function $(t){return p(t)?t:t?t+"px":""}var J="splide",Q="data-"+J;function Z(t,n){if(!t)throw new Error("["+J+"] "+(n||""))}var tt=Math.min,nt=Math.max,et=Math.floor,it=Math.ceil,ot=Math.abs;function rt(t,n,e){return ot(t-n)<e}function st(t,n,e,i){var o=tt(n,e),r=nt(n,e);return i?o<t&&t<r:o<=t&&t<=r}function at(t,n,e){var i=tt(n,e),o=nt(n,e);return tt(nt(i,t),o)}function ut(t){return+(t>0)-+(t<0)}function ct(t,n){return b(n,(function(n){t=t.replace("%s",""+n)})),t}function lt(t){return t<10?"0"+t:""+t}var dt={};function ft(){var t=[];function n(t,n,e){b(t,(function(t){t&&b(n,(function(n){n.split(" ").forEach((function(n){var i=n.split(".");e(t,i[0],i[1])}))}))}))}return{bind:function(e,i,o,r){n(e,i,(function(n,e,i){var s="addEventListener"in n,a=s?n.removeEventListener.bind(n,e,o,r):n.removeListener.bind(n,o);s?n.addEventListener(e,o,r):n.addListener(o),t.push([n,e,i,o,a])}))},unbind:function(e,i,o){n(e,i,(function(n,e,i){t=t.filter((function(t){return!!(t[0]!==n||t[1]!==e||t[2]!==i||o&&t[3]!==o)||(t[4](),!1)}))}))},dispatch:function(t,n,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(n,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(n,!0,!1,e),t.dispatchEvent(i),i},destroy:function(){t.forEach((function(t){t[4]()})),o(t)}}}var ht="mounted",pt="ready",vt="move",mt="moved",gt="click",yt="refresh",bt="updated",wt="resize",Et="resized",St="scroll",xt="scrolled",Vt="destroy",Ct="navigation:mounted",_t="autoplay:play",Lt="autoplay:pause",At="lazyload:loaded",Pt="ei";function kt(t){var n=t?t.event.bus:document.createDocumentFragment(),e=ft();return t&&t.event.on(Vt,e.destroy),D(e,{bus:n,on:function(t,i){e.bind(n,y(t).join(" "),(function(t){i.apply(i,f(t.detail)?t.detail:[])}))},off:s(e.unbind,n),emit:function(t){e.dispatch(n,t,r(arguments,1))}})}function Dt(t,n,e,i){var o,r,s=Date.now,a=0,u=!0,l=0;function d(){if(!u){if(a=t?tt((s()-o)/t,1):1,e&&e(a),a>=1&&(n(),o=s(),i&&++l>=i))return f();r=c(d)}}function f(){u=!0}function h(){r&&cancelAnimationFrame(r),a=0,r=0,u=!0}return{start:function(n){n||h(),o=s()-(n?a*t:0),u=!1,r=c(d)},rewind:function(){o=s(),a=0,e&&e(a)},pause:f,cancel:h,set:function(n){t=n},isPaused:function(){return u}}}var Ft="Arrow",Mt=Ft+"Left",Nt=Ft+"Right",Ot=Ft+"Up",Tt=Ft+"Down",It="ttb",qt={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Ot,Nt],ArrowRight:[Tt,Mt]};var zt="role",jt="tabindex",Rt="aria-",Wt=Rt+"controls",Gt=Rt+"current",Xt=Rt+"selected",Yt=Rt+"label",Bt=Rt+"labelledby",Ht=Rt+"hidden",Ut=Rt+"orientation",Kt=Rt+"roledescription",$t=Rt+"live",Jt=Rt+"busy",Qt=Rt+"atomic",Zt=[zt,jt,"disabled",Wt,Gt,Yt,Bt,Ht,Ut,Kt],tn=J+"__",nn="is-",en=J,on=tn+"track",rn=tn+"list",sn=tn+"slide",an=sn+"--clone",un=sn+"__container",cn=tn+"arrows",ln=tn+"arrow",dn=ln+"--prev",fn=ln+"--next",hn=tn+"pagination",pn=hn+"__page",vn=tn+"progress__bar",mn=tn+"toggle",gn=tn+"sr",yn=nn+"initialized",bn=nn+"active",wn=nn+"prev",En=nn+"next",Sn=nn+"visible",xn=nn+"loading",Vn=nn+"focus-in",Cn=nn+"overflow",_n=[bn,Sn,wn,En,xn,Vn,Cn],Ln={slide:sn,clone:an,arrows:cn,arrow:ln,prev:dn,next:fn,pagination:hn,page:pn,spinner:tn+"spinner"},An="touchstart mousedown",Pn="touchmove mousemove",kn="touchend touchcancel mouseup click",Dn="slide",Fn="loop",Mn="fade";var Nn=Q+"-interval",On={passive:!1,capture:!0},Tn={Spacebar:" ",Right:Nt,Left:Mt,Up:Ot,Down:Tt};function In(t){return t=p(t)?t:t.key,Tn[t]||t}var qn="keydown",zn=Q+"-lazy",jn=zn+"-srcset",Rn="["+zn+"], ["+jn+"]",Wn=[" ","Enter"],Gn=Object.freeze({__proto__:null,Media:function(t,e,i){var o=t.state,r=i.breakpoints||{},s=i.reducedMotion||{},a=ft(),u=[];function c(t){t&&a.destroy()}function l(t,n){var e=matchMedia(n);a.bind(e,"change",d),u.push([t,e])}function d(){var n=o.is(7),e=i.direction,r=u.reduce((function(t,n){return F(t,n[1].matches?n[0]:{})}),{});M(i),f(r),i.destroy?t.destroy("completely"===i.destroy):n?(c(!0),t.mount()):e!==i.direction&&t.refresh()}function f(n,e,r){F(i,n),e&&F(Object.getPrototypeOf(i),n),!r&&o.is(1)||t.emit(bt,i)}return{setup:function(){var t="min"===i.mediaQuery;P(r).sort((function(n,e){return t?+n-+e:+e-+n})).forEach((function(n){l(r[n],"("+(t?"min":"max")+"-width:"+n+"px)")})),l(s,n),d()},destroy:c,reduce:function(t){matchMedia(n).matches&&(t?F(i,s):M(i,P(s)))},set:f}},Direction:function(t,n,e){return{resolve:function(t,n,i){var o="rtl"!==(i=i||e.direction)||n?i===It?0:-1:1;return qt[t]&&qt[t][o]||t.replace(/width|left|right/i,(function(t,n){var e=qt[t.toLowerCase()][o]||t;return n>0?e.charAt(0).toUpperCase()+e.slice(1):e}))},orient:function(t){return t*("rtl"===e.direction?1:-1)}}},Elements:function(t,n,e){var i,r,s,a=kt(t),u=a.on,c=a.bind,l=t.root,d=e.i18n,f={},p=[],v=[],m=[];function g(){var t,n,o;i=w("."+on),r=A(i,"."+rn),Z(i&&r,"A track/list element is missing."),E(p,L(r,"."+sn+":not(."+an+")")),k({arrows:cn,pagination:hn,prev:dn,next:fn,bar:vn,toggle:mn},(function(t,n){f[n]=w("."+t)})),D(f,{root:l,track:i,list:r,slides:p}),n=l.id||""+(t=J)+lt(dt[t]=(dt[t]||0)+1),o=e.role,l.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!j(l,zt)&&"SECTION"!==l.tagName&&o&&O(l,zt,o),O(l,Kt,d.carousel),O(r,zt,"presentation"),b()}function y(t){var n=Zt.concat("style");o(p),U(l,v),U(i,m),N([i,r],n),N(l,t?n:["style",Kt])}function b(){U(l,v),U(i,m),v=V(en),m=V(on),x(l,v),x(i,m),O(l,Yt,e.label),O(l,Bt,e.labelledby)}function w(t){var n=B(l,t);return n&&function(t,n){if(h(t.closest))return t.closest(n);for(var e=t;e&&1===e.nodeType&&!_(e,n);)e=e.parentElement;return e}(n,"."+en)===l?n:void 0}function V(t){return[t+"--"+e.type,t+"--"+e.direction,e.drag&&t+"--draggable",e.isNavigation&&t+"--nav",t===en&&bn]}return D(f,{setup:g,mount:function(){u(yt,y),u(yt,g),u(bt,b),c(document,An+" keydown",(function(t){s="keydown"===t.type}),{capture:!0}),c(l,"focusin",(function(){S(l,Vn,!!s)}))},destroy:y})},Slides:function(t,n,e){var i=kt(t),r=i.on,a=i.emit,u=i.bind,c=n.Elements,l=c.slides,d=c.list,f=[];function v(){l.forEach((function(t,n){E(t,n,-1)}))}function m(){P((function(t){t.destroy()})),o(f)}function E(n,e,i){var o=function(t,n,e,i){var o,r=kt(t),a=r.on,u=r.emit,c=r.bind,l=t.Components,d=t.root,f=t.options,h=f.isNavigation,p=f.updateOnMove,v=f.i18n,m=f.pagination,g=f.slideFocus,y=l.Direction.resolve,b=j(i,"style"),w=j(i,Yt),E=e>-1,x=A(i,"."+un);function V(){var o=t.splides.map((function(t){var e=t.splide.Components.Slides.getAt(n);return e?e.slide.id:""})).join(" ");O(i,Yt,ct(v.slideX,(E?e:n)+1)),O(i,Wt,o),O(i,zt,g?"button":""),g&&N(i,Kt)}function C(){o||_()}function _(){if(!o){var e=t.index;(r=L())!==R(i,bn)&&(S(i,bn,r),O(i,Gt,h&&r||""),u(r?"active":"inactive",P)),function(){var n=function(){if(t.is(Mn))return L();var n=W(l.Elements.track),e=W(i),o=y("left",!0),r=y("right",!0);return et(n[o])<=it(e[o])&&et(e[r])<=it(n[r])}(),e=!n&&(!L()||E);if(t.state.is([4,5])||O(i,Ht,e||""),O(H(i,f.focusableNodes||""),jt,e?-1:""),g&&O(i,jt,e?-1:0),n!==R(i,Sn)&&(S(i,Sn,n),u(n?"visible":"hidden",P)),!n&&document.activeElement===i){var o=l.Slides.getAt(t.index);o&&z(o.slide)}}(),S(i,wn,n===e-1),S(i,En,n===e+1)}var r}function L(){var i=t.index;return i===n||f.cloneStatus&&i===e}var P={index:n,slideIndex:e,slide:i,container:x,isClone:E,mount:function(){E||(i.id=d.id+"-slide"+lt(n+1),O(i,zt,m?"tabpanel":"group"),O(i,Kt,v.slide),O(i,Yt,w||ct(v.slideLabel,[n+1,t.length]))),c(i,"click",s(u,gt,P)),c(i,"keydown",s(u,"sk",P)),a([mt,"sh",xt],_),a(Ct,V),p&&a(vt,C)},destroy:function(){o=!0,r.destroy(),U(i,_n),N(i,Zt),O(i,"style",b),O(i,Yt,w||"")},update:_,style:function(t,n,e){I(e&&x||i,t,n)},isWithin:function(e,i){var o=ot(e-n);return E||!f.rewind&&!t.is(Fn)||(o=tt(o,t.length-o)),o<=i}};return P}(t,e,i,n);o.mount(),f.push(o),f.sort((function(t,n){return t.index-n.index}))}function L(t){return t?k((function(t){return!t.isClone})):f}function P(t,n){L(n).forEach(t)}function k(t){return f.filter(h(t)?t:function(n){return p(t)?_(n.slide,t):w(y(t),n.index)})}return{mount:function(){v(),r(yt,m),r(yt,v)},destroy:m,update:function(){P((function(t){t.update()}))},register:E,get:L,getIn:function(t){var i=n.Controller,o=i.toIndex(t),r=i.hasFocus()?1:e.perPage;return k((function(t){return st(t.index,o,o+r-1)}))},getAt:function(t){return k(t)[0]},add:function(t,n){b(t,(function(t){if(p(t)&&(t=X(t)),g(t)){var i=l[n];i?C(t,i):V(d,t),x(t,e.classes.slide),o=t,r=s(a,wt),c=H(o,"img"),(f=c.length)?c.forEach((function(t){u(t,"load error",(function(){--f||r()}))})):r()}var o,r,c,f})),a(yt)},remove:function(t){G(k(t).map((function(t){return t.slide}))),a(yt)},forEach:P,filter:k,style:function(t,n,e){P((function(i){i.style(t,n,e)}))},getLength:function(t){return t?l.length:f.length},isEnough:function(){return f.length>e.perPage}}},Layout:function(t,n,e){var i,o,r,a=kt(t),u=a.on,c=a.bind,l=a.emit,f=n.Slides,h=n.Direction.resolve,p=n.Elements,v=p.root,m=p.track,g=p.list,y=f.getAt,b=f.style;function w(){i=e.direction===It,I(v,"maxWidth",$(e.width)),I(m,h("paddingLeft"),x(!1)),I(m,h("paddingRight"),x(!0)),E(!0)}function E(t){var n,s=W(v);(t||o.width!==s.width||o.height!==s.height)&&(I(m,"height",(n="",i&&(Z(n=V(),"height or heightRatio is missing."),n="calc("+n+" - "+x(!1)+" - "+x(!0)+")"),n)),b(h("marginRight"),$(e.gap)),b("width",e.autoWidth?null:$(e.fixedWidth)||(i?"":C())),b("height",$(e.fixedHeight)||(i?e.autoHeight?null:C():V()),!0),o=s,l(Et),r!==(r=D())&&(S(v,Cn,r),l("overflow",r)))}function x(t){var n=e.padding,i=h(t?"right":"left");return n&&$(n[i]||(d(n)?0:n))||"0px"}function V(){return $(e.height||W(g).width*e.heightRatio)}function C(){var t=$(e.gap);return"calc((100%"+(t&&" + "+t)+")/"+(e.perPage||1)+(t&&" - "+t)+")"}function _(){return W(g)[h("width")]}function L(t,n){var e=y(t||0);return e?W(e.slide)[h("width")]+(n?0:k()):0}function A(t,n){var e=y(t);if(e){var i=W(e.slide)[h("right")],o=W(g)[h("left")];return ot(i-o)+(n?0:k())}return 0}function P(n){return A(t.length-1)-A(0)+L(0,n)}function k(){var t=y(0);return t&&parseFloat(I(t.slide,h("marginRight")))||0}function D(){return t.is(Mn)||P(!0)>_()}return{mount:function(){var t,n;w(),c(window,"resize load",(t=s(l,wt),n=Dt(0,t,null,1),function(){n.isPaused()&&n.start()})),u([bt,yt],w),u(wt,E)},resize:E,listSize:_,slideSize:L,sliderSize:P,totalSize:A,getPadding:function(t){return parseFloat(I(m,h("padding"+(t?"Right":"Left"))))||0},isOverflow:D}},Clones:function(t,n,e){var i,r=kt(t),s=r.on,a=n.Elements,u=n.Slides,c=n.Direction.resolve,l=[];function d(){s(yt,f),s([bt,wt],p),(i=m())&&(function(n){var i=u.get().slice(),o=i.length;if(o){for(;i.length<n;)E(i,i);E(i.slice(-n),i.slice(0,n)).forEach((function(r,s){var c=s<n,d=function(n,i){var o=n.cloneNode(!0);return x(o,e.classes.clone),o.id=t.root.id+"-clone"+lt(i+1),o}(r.slide,s);c?C(d,i[0].slide):V(a.list,d),E(l,d),u.register(d,s-n+(c?0:o),r.index)}))}}(i),n.Layout.resize(!0))}function f(){h(),d()}function h(){G(l),o(l),r.destroy()}function p(){var t=m();i!==t&&(i<t||!t)&&r.emit(yt)}function m(){var i=e.clones;if(t.is(Fn)){if(v(i)){var o=e[c("fixedWidth")]&&n.Layout.slideSize(0);i=o&&it(W(a.track)[c("width")]/o)||e[c("autoWidth")]&&t.length||2*e.perPage}}else i=0;return i}return{mount:d,destroy:h}},Move:function(t,n,e){var i,o=kt(t),r=o.on,s=o.emit,a=t.state.set,u=n.Layout,c=u.slideSize,l=u.getPadding,d=u.totalSize,f=u.listSize,h=u.sliderSize,p=n.Direction,m=p.resolve,g=p.orient,y=n.Elements,b=y.list,w=y.track;function E(){n.Controller.isBusy()||(n.Scroll.cancel(),S(t.index),n.Slides.update())}function S(t){x(L(t,!0))}function x(e,i){if(!t.is(Mn)){var o=i?e:function(e){if(t.is(Fn)){var i=_(e),o=i>n.Controller.getEnd();(i<0||o)&&(e=V(e,o))}return e}(e);I(b,"transform","translate"+m("X")+"("+o+"px)"),e!==o&&s("sh")}}function V(t,n){var e=t-P(n),i=h();return t-g(i*(it(ot(e)/i)||1))*(n?1:-1)}function C(){x(A(),!0),i.cancel()}function _(t){for(var e=n.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var s=e[r].index,a=ot(L(s,!0)-t);if(!(a<=o))break;o=a,i=s}return i}function L(n,i){var o=g(d(n-1)-function(t){var n=e.focus;return"center"===n?(f()-c(t,!0))/2:+n*c(t)||0}(n));return i?function(n){return e.trimSpace&&t.is(Dn)&&(n=at(n,0,g(h(!0)-f()))),n}(o):o}function A(){var t=m("left");return W(b)[t]-W(w)[t]+g(l(!1))}function P(t){return L(t?n.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=n.Transition,r([ht,Et,bt,yt],E)},move:function(t,n,e,o){var r,u;t!==n&&(r=t>e,u=g(V(A(),r)),r?u>=0:u<=b[m("scrollWidth")]-W(w)[m("width")])&&(C(),x(V(A(),t>e),!0)),a(4),s(vt,n,e,t),i.start(n,(function(){a(3),s(mt,n,e,t),o&&o()}))},jump:S,translate:x,shift:V,cancel:C,toIndex:_,toPosition:L,getPosition:A,getLimit:P,exceededLimit:function(t,n){n=v(n)?A():n;var e=!0!==t&&g(n)<g(P(!1)),i=!1!==t&&g(n)>g(P(!0));return e||i},reposition:E}},Controller:function(t,n,e){var i,o,r,a,u=kt(t),c=u.on,l=u.emit,d=n.Move,f=d.getPosition,h=d.getLimit,m=d.toPosition,g=n.Slides,y=g.isEnough,b=g.getLength,w=e.omitEnd,E=t.is(Fn),S=t.is(Dn),x=s(P,!1),V=s(P,!0),C=e.start||0,_=C;function L(){o=b(!0),r=e.perMove,a=e.perPage,i=F();var t=at(C,0,w?i:o-1);t!==C&&(C=t,d.reposition())}function A(){i!==F()&&l(Pt)}function P(t,n){var e=r||(T()?1:a),o=k(C+e*(t?-1:1),C,!(r||T()));return-1===o&&S&&!rt(f(),h(!t),1)?t?0:i:n?o:D(o)}function k(n,s,u){if(y()||T()){var c=function(n){if(S&&"move"===e.trimSpace&&n!==C)for(var i=f();i===m(n,!0)&&st(n,0,t.length-1,!e.rewind);)n<C?--n:++n;return n}(n);c!==n&&(s=n,n=c,u=!1),n<0||n>i?n=r||!st(0,n,s,!0)&&!st(i,s,n,!0)?E?u?n<0?-(o%a||a):o:n:e.rewind?n<0?i:0:-1:M(N(n)):u&&n!==s&&(n=M(N(s)+(n<s?-1:1)))}else n=-1;return n}function D(t){return E?(t+o)%o||0:t}function F(){for(var t=o-(T()||E&&r?1:a);w&&t-- >0;)if(m(o-1,!0)!==m(t,!0)){t++;break}return at(t,0,o-1)}function M(t){return at(T()?t:a*t,0,i)}function N(t){return T()?tt(t,i):et((t>=i?o-1:t)/a)}function O(t){t!==C&&(_=C,C=t)}function T(){return!v(e.focus)||e.isNavigation}function I(){return t.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){L(),c([bt,yt,Pt],L),c(Et,A)},go:function(t,n,e){if(!I()){var o=function(t){var n=C;if(p(t)){var e=t.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?n=k(C+ +(""+o+(+r||1)),C):">"===o?n=r?M(+r):x(!0):"<"===o&&(n=V(!0))}else n=E?t:at(t,0,i);return n}(t),r=D(o);r>-1&&(n||r!==C)&&(O(r),d.move(o,r,_,e))}},scroll:function(t,e,o,r){n.Scroll.scroll(t,e,o,(function(){var t=D(d.toIndex(f()));O(w?tt(t,i):t),r&&r()}))},getNext:x,getPrev:V,getAdjacent:P,getEnd:F,setIndex:O,getIndex:function(t){return t?_:C},toIndex:M,toPage:N,toDest:function(t){var n=d.toIndex(t);return S?at(n,0,i):n},hasFocus:T,isBusy:I}},Arrows:function(t,n,e){var i,o,r=kt(t),a=r.on,u=r.bind,c=r.emit,l=e.classes,d=e.i18n,f=n.Elements,h=n.Controller,p=f.arrows,v=f.track,m=p,g=f.prev,y=f.next,b={};function w(){var t;!(t=e.arrows)||g&&y||(m=p||T("div",l.arrows),g=L(!0),y=L(!1),i=!0,V(m,[g,y]),!p&&C(m,v)),g&&y&&(D(b,{prev:g,next:y}),q(m,t?"":"none"),x(m,o=cn+"--"+e.direction),t&&(a([ht,mt,yt,xt,Pt],A),u(y,"click",s(_,">")),u(g,"click",s(_,"<")),A(),O([g,y],Wt,v.id),c("arrows:mounted",g,y))),a(bt,E)}function E(){S(),w()}function S(){r.destroy(),U(m,o),i?(G(p?[g,y]:m),g=y=null):N([g,y],Zt)}function _(t){h.go(t,!0)}function L(t){return X('<button class="'+l.arrow+" "+(t?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function A(){if(g&&y){var n=t.index,e=h.getPrev(),i=h.getNext(),o=e>-1&&n<e?d.last:d.prev,r=i>-1&&n>i?d.first:d.next;g.disabled=e<0,y.disabled=i<0,O(g,Yt,o),O(y,Yt,r),c("arrows:updated",g,y,e,i)}}return{arrows:b,mount:w,destroy:S,update:A}},Autoplay:function(t,n,e){var i,o,r=kt(t),s=r.on,a=r.bind,u=r.emit,c=Dt(e.interval,t.go.bind(t,">"),(function(t){var n=d.bar;n&&I(n,"width",100*t+"%"),u("autoplay:playing",t)})),l=c.isPaused,d=n.Elements,f=n.Elements,h=f.root,p=f.toggle,v=e.autoplay,m="pause"===v;function g(){l()&&n.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=m=!1,w(),u(_t))}function y(t){void 0===t&&(t=!0),m=!!t,w(),l()||(c.pause(),u(Lt))}function b(){m||(i||o?y(!1):g())}function w(){p&&(S(p,bn,!m),O(p,Yt,e.i18n[m?"play":"pause"]))}function E(t){var i=n.Slides.getAt(t);c.set(i&&+j(i.slide,Nn)||e.interval)}return{mount:function(){v&&(e.pauseOnHover&&a(h,"mouseenter mouseleave",(function(t){i="mouseenter"===t.type,b()})),e.pauseOnFocus&&a(h,"focusin focusout",(function(t){o="focusin"===t.type,b()})),p&&a(p,"click",(function(){m?g():y(!0)})),s([vt,St,yt],c.rewind),s(vt,E),p&&O(p,Wt,d.track.id),m||g(),w())},destroy:c.cancel,play:g,pause:y,isPaused:l}},Cover:function(t,n,e){var i=kt(t).on;function o(t){n.Slides.forEach((function(n){var e=A(n.container||n.slide,"img");e&&e.src&&r(t,e,n)}))}function r(t,n,e){e.style("background",t?'center/cover no-repeat url("'+n.src+'")':"",!0),q(n,t?"none":"")}return{mount:function(){e.cover&&(i(At,s(r,!0)),i([ht,bt,yt],s(o,!0)))},destroy:s(o,!1)}},Scroll:function(t,n,e){var i,o,r=kt(t),a=r.on,u=r.emit,c=t.state.set,l=n.Move,d=l.getPosition,f=l.getLimit,h=l.exceededLimit,p=l.translate,v=t.is(Dn),m=1;function g(t,e,r,a,f){var p=d();if(w(),r&&(!v||!h())){var g=n.Layout.sliderSize(),E=ut(t)*g*et(ot(t)/g)||0;t=l.toPosition(n.Controller.toDest(t%g))+E}var S=rt(p,t,1);m=1,e=S?0:e||nt(ot(t-p)/1.5,800),o=a,i=Dt(e,y,s(b,p,t,f),1),c(5),u(St),i.start()}function y(){c(3),o&&o(),u(xt)}function b(t,n,i,r){var s,a,u=d(),c=(t+(n-t)*(s=r,(a=e.easingFunc)?a(s):1-Math.pow(1-s,4))-u)*m;p(u+c),v&&!i&&h()&&(m*=.6,ot(c)<10&&g(f(h(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){a(vt,w),a([bt,yt],E)},destroy:w,scroll:g,cancel:E}},Drag:function(t,n,e){var i,o,r,s,a,c,l,f,h=kt(t),p=h.on,v=h.emit,m=h.bind,g=h.unbind,y=t.state,b=n.Move,w=n.Scroll,E=n.Controller,S=n.Elements.track,x=n.Media.reduce,V=n.Direction,C=V.resolve,L=V.orient,A=b.getPosition,P=b.exceededLimit,k=!1;function D(){var t=e.drag;W(!t),s="free"===t}function F(t){if(c=!1,!l){var n=R(t);i=t.target,o=e.noDrag,_(i,"."+pn+", ."+ln)||o&&_(i,o)||!n&&t.button||(E.isBusy()?Y(t,!0):(f=n?S:window,a=y.is([4,5]),r=null,m(f,Pn,M,On),m(f,kn,N,On),b.cancel(),w.cancel(),T(t)))}var i,o}function M(n){if(y.is(6)||(y.set(6),v("drag")),n.cancelable)if(a){b.translate(i+I(n)/(k&&t.is(Dn)?5:1));var o=q(n)>200,r=k!==(k=P());(o||r)&&T(n),c=!0,v("dragging"),Y(n)}else(function(t){return ot(I(t))>ot(I(t,!0))})(n)&&(a=function(t){var n=e.dragMinThreshold,i=d(n),o=i&&n.mouse||0,r=(i?n.touch:+n)||10;return ot(I(t))>(R(t)?r:o)}(n),Y(n))}function N(i){y.is(6)&&(y.set(3),v("dragged")),a&&(function(i){var o=function(n){if(t.is(Fn)||!k){var e=q(n);if(e&&e<200)return I(n)/e}return 0}(i),r=function(t){return A()+ut(t)*tt(ot(t)*(e.flickPower||600),s?1/0:n.Layout.listSize()*(e.flickMaxPages||1))}(o),a=e.rewind&&e.rewindByDrag;x(!1),s?E.scroll(r,0,e.snap):t.is(Mn)?E.go(L(ut(o))<0?a?"<":"-":a?">":"+"):t.is(Dn)&&k&&a?E.go(P(!0)?">":"<"):E.go(E.toDest(r),!0),x(!0)}(i),Y(i)),g(f,Pn,M),g(f,kn,N),a=!1}function O(t){!l&&c&&Y(t,!0)}function T(t){r=o,o=t,i=A()}function I(t,n){return j(t,n)-j(z(t),n)}function q(t){return K(t)-K(z(t))}function z(t){return o===t&&r||o}function j(t,n){return(R(t)?t.changedTouches[0]:t)["page"+C(n?"Y":"X")]}function R(t){return"undefined"!=typeof TouchEvent&&t instanceof TouchEvent}function W(t){l=t}return{mount:function(){m(S,Pn,u,On),m(S,kn,u,On),m(S,An,F,On),m(S,"click",O,{capture:!0}),m(S,"dragstart",Y),p([ht,bt],D)},disable:W,isDragging:function(){return a}}},Keyboard:function(t,n,e){var i,o,r=kt(t),s=r.on,u=r.bind,c=r.unbind,l=t.root,d=n.Direction.resolve;function f(){var t=e.keyboard;t&&(i="global"===t?window:l,u(i,qn,v))}function h(){c(i,qn)}function p(){var t=o;o=!0,a((function(){o=t}))}function v(n){if(!o){var e=In(n);e===d(Mt)?t.go("<"):e===d(Nt)&&t.go(">")}}return{mount:function(){f(),s(bt,h),s(bt,f),s(vt,p)},destroy:h,disable:function(t){o=t}}},LazyLoad:function(t,n,e){var i=kt(t),r=i.on,a=i.off,u=i.bind,c=i.emit,l="sequential"===e.lazyLoad,d=[mt,xt],f=[];function h(){o(f),n.Slides.forEach((function(t){H(t.slide,Rn).forEach((function(n){var i=j(n,zn),o=j(n,jn);if(i!==n.src||o!==n.srcset){var r=e.classes.spinner,s=n.parentElement,a=A(s,"."+r)||T("span",r,s);f.push([n,t,a]),n.src||q(n,"none")}}))})),l?g():(a(d),r(d,p),p())}function p(){(f=f.filter((function(n){var i=e.perPage*((e.preloadPages||1)+1)-1;return!n[1].isWithin(t.index,i)||v(n)}))).length||a(d)}function v(t){var n=t[0];x(t[1].slide,xn),u(n,"load error",s(m,t)),O(n,"src",j(n,zn)),O(n,"srcset",j(n,jn)),N(n,zn),N(n,jn)}function m(t,n){var e=t[0],i=t[1];U(i.slide,xn),"error"!==n.type&&(G(t[2]),q(e,""),c(At,e,i),c(wt)),l&&g()}function g(){f.length&&v(f.shift())}return{mount:function(){e.lazyLoad&&(h(),r(yt,h))},destroy:s(o,f),check:p}},Pagination:function(t,n,e){var i,a,u=kt(t),c=u.on,l=u.emit,d=u.bind,f=n.Slides,h=n.Elements,p=n.Controller,v=p.hasFocus,m=p.getIndex,g=p.go,y=n.Direction.resolve,b=h.pagination,w=[];function E(){i&&(G(b?r(i.children):i),U(i,a),o(w),i=null),u.destroy()}function S(t){g(">"+t,!0)}function V(t,n){var e=w.length,i=In(n),o=C(),r=-1;i===y(Nt,!1,o)?r=++t%e:i===y(Mt,!1,o)?r=(--t+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var s=w[r];s&&(z(s.button),g(">"+r),Y(n,!0))}function C(){return e.paginationDirection||e.direction}function _(t){return w[p.toPage(t)]}function L(){var t=_(m(!0)),n=_(m());if(t){var e=t.button;U(e,bn),N(e,Xt),O(e,jt,-1)}if(n){var o=n.button;x(o,bn),O(o,Xt,!0),O(o,jt,"")}l("pagination:updated",{list:i,items:w},t,n)}return{items:w,mount:function n(){E(),c([bt,yt,Pt],n);var o=e.pagination;b&&q(b,o?"":"none"),o&&(c([vt,St,xt],L),function(){var n=t.length,o=e.classes,r=e.i18n,u=e.perPage,c=v()?p.getEnd()+1:it(n/u);x(i=b||T("ul",o.pagination,h.track.parentElement),a=hn+"--"+C()),O(i,zt,"tablist"),O(i,Yt,r.select),O(i,Ut,C()===It?"vertical":"");for(var l=0;l<c;l++){var m=T("li",null,i),g=T("button",{class:o.page,type:"button"},m),y=f.getIn(l).map((function(t){return t.slide.id})),E=!v()&&u>1?r.pageX:r.slideX;d(g,"click",s(S,l)),e.paginationKeyboard&&d(g,"keydown",s(V,l)),O(m,zt,"presentation"),O(g,zt,"tab"),O(g,Wt,y.join(" ")),O(g,Yt,ct(E,l+1)),O(g,jt,-1),w.push({li:m,button:g,page:l})}}(),L(),l("pagination:mounted",{list:i,items:w},_(t.index)))},destroy:E,getAt:_,update:L}},Sync:function(t,n,e){var i=e.isNavigation,r=e.slideFocus,a=[];function u(){var n,e;t.splides.forEach((function(n){n.isParent||(l(t,n.splide),l(n.splide,t))})),i&&((e=(n=kt(t)).on)(gt,f),e("sk",h),e([ht,bt],d),a.push(n),n.emit(Ct,t.splides))}function c(){a.forEach((function(t){t.destroy()})),o(a)}function l(t,n){var e=kt(t);e.on(vt,(function(t,e,i){n.go(n.is(Fn)?i:t)})),a.push(e)}function d(){O(n.Elements.list,Ut,e.direction===It?"vertical":"")}function f(n){t.go(n.index)}function h(t,n){w(Wn,In(n))&&(f(t),Y(n))}return{setup:s(n.Media.set,{slideFocus:v(r)?i:r},!0),mount:u,destroy:c,remount:function(){c(),u()}}},Wheel:function(t,n,e){var i=kt(t).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,s=r<0,a=K(i),u=e.wheelMinThreshold||0,c=e.wheelSleep||0;ot(r)>u&&a-o>c&&(t.go(s?"<":">"),o=a),function(i){return!e.releaseWheel||t.state.is(4)||-1!==n.Controller.getAdjacent(i)}(s)&&Y(i)}}return{mount:function(){e.wheel&&i(n.Elements.track,"wheel",r,On)}}},Live:function(t,n,e){var i=kt(t).on,o=n.Elements.track,r=e.live&&!e.isNavigation,a=T("span",gn),u=Dt(90,s(c,!1));function c(t){O(o,Jt,t),t?(V(o,a),u.start()):(G(a),u.cancel())}function l(t){r&&O(o,$t,t?"off":"polite")}return{mount:function(){r&&(l(!n.Autoplay.isPaused()),O(o,Qt,!0),a.textContent="…",i(_t,s(l,!0)),i(Lt,s(l,!1)),i([mt,xt],s(c,!0)))},disable:l,destroy:function(){N(o,[$t,Qt,Jt]),G(a)}}}}),Xn={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ln,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Yn(t,n,e){var i=n.Slides;function o(){i.forEach((function(t){t.style("transform","translateX(-"+100*t.index+"%)")}))}return{mount:function(){kt(t).on([ht,yt],o)},start:function(t,n){i.style("transition","opacity "+e.speed+"ms "+e.easing),a(n)},cancel:u}}function Bn(t,n,e){var i,o=n.Move,r=n.Controller,a=n.Scroll,u=n.Elements.list,c=s(I,u,"transition");function l(){c(""),a.cancel()}return{mount:function(){kt(t).bind(u,"transitionend",(function(t){t.target===u&&i&&(l(),i())}))},start:function(n,s){var u=o.toPosition(n,!0),l=o.getPosition(),d=function(n){var i=e.rewindSpeed;if(t.is(Dn)&&i){var o=r.getIndex(!0),s=r.getEnd();if(0===o&&n>=s||o>=s&&0===n)return i}return e.speed}(n);ot(u-l)>=1&&d>=1?e.useScroll?a.scroll(u,d,!1,s):(c("transform "+d+"ms "+e.easing),o.translate(u,!0),i=s):(o.jump(n),s())},cancel:l}}var Hn=function(){function n(t,e){var i;this.event=kt(),this.Components={},this.state=(i=1,{set:function(t){i=t},is:function(t){return w(y(t),i)}}),this.splides=[],this._o={},this._E={};var o=p(t)?B(document,t):t;Z(o,o+" is invalid."),this.root=o,e=F({label:j(o,Yt)||"",labelledby:j(o,Bt)||""},Xn,n.defaults,e||{});try{F(e,JSON.parse(j(o,Q)))}catch(t){Z(!1,"Invalid JSON")}this._o=Object.create(F({},e))}var e,i,s=n.prototype;return s.mount=function(t,n){var e=this,i=this.state,o=this.Components;return Z(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=n||this._T||(this.is(Mn)?Yn:Bn),this._E=t||this._E,k(D({},Gn,this._E,{Transition:this._T}),(function(t,n){var i=t(e,o,e._o);o[n]=i,i.setup&&i.setup()})),k(o,(function(t){t.mount&&t.mount()})),this.emit(ht),x(this.root,yn),i.set(3),this.emit(pt),this},s.sync=function(t){return this.splides.push({splide:t}),t.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),t.Components.Sync.remount()),this},s.go=function(t){return this._C.Controller.go(t),this},s.on=function(t,n){return this.event.on(t,n),this},s.off=function(t){return this.event.off(t),this},s.emit=function(t){var n;return(n=this.event).emit.apply(n,[t].concat(r(arguments,1))),this},s.add=function(t,n){return this._C.Slides.add(t,n),this},s.remove=function(t){return this._C.Slides.remove(t),this},s.is=function(t){return this._o.type===t},s.refresh=function(){return this.emit(yt),this},s.destroy=function(t){void 0===t&&(t=!0);var n=this.event,e=this.state;return e.is(1)?kt(this).on(pt,this.destroy.bind(this,t)):(k(this._C,(function(n){n.destroy&&n.destroy(t)}),!0),n.emit(Vt),n.destroy(),t&&o(this.splides),e.set(7)),this},e=n,i=[{key:"options",get:function(){return this._o},set:function(t){this._C.Media.set(t,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}],i&&t(e.prototype,i),Object.defineProperty(e,"prototype",{writable:!1}),n}(),Un=Hn;Un.defaults={},Un.STATES=i,document.addEventListener("DOMContentLoaded",(function(){let t=null,n=null;const e=document.querySelectorAll(".splide__arrows"),i=document.querySelector("#slider1"),o=document.querySelector(".advantages__list"),r=document.querySelector("#slider2"),s=document.querySelector(".projects__list"),a={type:"loop",arrows:!0,pagination:!1,drag:!0,paginationKeyboard:!0,paginationDirection:!0,mediaQuery:"min",breakpoints:{768:{destroy:!0}}},u=()=>{window.innerWidth<768?(e.forEach((t=>t.classList.remove("visually-hidden"))),(()=>{i.classList.add("splide"),o.classList.add("splide__list"),t=new Un("#slider1",a);const n=t.root.querySelector(".my-carousel-progress-bar"),e=document.querySelector(".slider__counter-start");t.on("mounted move",(function(){const i=t.Components.Controller.getEnd()+1,o=Math.min((t.index+1)/i,1);n.style.width=100*o+"%",e.textContent=`${t.index+1}`,document.querySelector(".slider__counter-end").textContent=` / ${i}`})),t.mount()})(),(()=>{r.classList.add("splide"),s.classList.add("splide__list"),n=new Un("#slider2",a);const t=n.root.querySelector(".my-carousel-progress-bar");n.on("mounted move",(function(){const e=n.Components.Controller.getEnd()+1,i=Math.min((n.index+1)/e,1);t.style.width=100*i+"%"})),n.mount()})()):(e.forEach((t=>t.classList.add("visually-hidden"))),i.classList.remove("splide"),o.classList.remove("splide__list"),t&&(splideInstanceForAdvantages.destroy(!0),splideInstanceForAdvantages=null),n.destroy(!0),n=null,r.classList.remove("splide"),s.classList.remove("splide__list"))};u(),window.addEventListener("resize",u)}));var Kn=function(){return Kn=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},Kn.apply(this,arguments)},$n=function(){function t(t,n,e){var i=this;this.endVal=n,this.options=e,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var n=t-i.startTime;i.remaining=i.duration-n,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(n,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(n,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(n/i.duration);var e=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=e?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),n<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(t){var n,e,o,r,s=t<0?"-":"";n=Math.abs(t).toFixed(i.options.decimalPlaces);var a=(n+="").split(".");if(e=a[0],o=a.length>1?i.options.decimal+a[1]:"",i.options.useGrouping){r="";for(var u=3,c=0,l=0,d=e.length;l<d;++l)i.options.useIndianSeparators&&4===l&&(u=2,c=1),0!==l&&c%u==0&&(r=i.options.separator+r),c++,r=e[d-l-1]+r;e=r}return i.options.numerals&&i.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),o=o.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+e+o+i.options.suffix},this.easeOutExpo=function(t,n,e,i){return e*(1-Math.pow(2,-10*t/i))*1024/1023+n},this.options=Kn(Kn({},this.defaults),e),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var n=window.innerHeight+window.scrollY,e=t.el.getBoundingClientRect(),i=e.top+window.pageYOffset,o=e.top+e.height+window.pageYOffset;o<n&&o>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>o||i>n)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var e=this.countDown?1:-1;this.endVal=t+e*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var n;if(this.el){var e=this.formattingFn(t);(null===(n=this.options.plugin)||void 0===n?void 0:n.render)?this.options.plugin.render(this.el,e):"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();const Jn=document.querySelectorAll(".counters__item-value"),Qn={duration:3,decimal:""};new IntersectionObserver(((t,n)=>{t.forEach((t=>{t.isIntersecting&&(Jn.forEach((t=>(t=>{let n=new $n(t,Number(t.textContent),Qn);n.error?console.error(n.error):n.start()})(t))),n.unobserve(t.target))}))}),{root:null,rootMargin:"0px",threshold:.3}).observe(document.querySelector(".counters")),e(50),e(402)}()}();