"use strict";(self.webpackChunkpolla_mundialista_front=self.webpackChunkpolla_mundialista_front||[]).push([[569],{569:(_e,Y,g)=>{g.d(Y,{_:()=>vo});var o=g(4650),v=g(3238),F=g(6895);g(9646),g(2843),g(9751),g(4742),g(8421),g(3269),g(5403),g(3268),g(1810),g(8505),g(4004),g(262),g(8746),g(3099),g(529),g(1481);let Oe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[v.BQ,v.BQ]}),i})(),Ne=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[v.si,v.BQ,v.BQ]}),i})();var Ie=g(3546),J=g(9521),Ye=(g(1281),g(3353),g(7579),g(6451),g(5698),g(2722),g(8675),g(6720));g(445),g(2076),g(7340);const Wi=new o.OlP("mat-chips-default-options");let $i=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({providers:[v.rD,{provide:Wi,useValue:{separatorKeyCodes:[J.K5]}}],imports:[v.BQ]}),i})(),Yi=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[v.BQ,v.BQ]}),i})();var so=g(9643);let ho=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({}),i})(),Qi=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[F.ez,v.BQ,ho,v.si,so.Q8,Ye.rt,v.BQ]}),i})();const go=[Oe,Ne,Ie.QW,$i,Yi,Qi];let qi=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[go,Oe,Ne,Ie.QW,$i,Yi,Qi]}),i})();const bo=[F.ez,qi];let vo=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[bo,F.ez,qi]}),i})()},6720:(_e,Y,g)=>{g.d(Y,{rt:()=>te,Em:()=>Re,qm:()=>H,X6:()=>ct,yG:()=>dt});var o=g(6895),v=g(4650),F=g(3353),V=g(7579),Z=g(727),C=g(9521),N=g(8505),S=g(1566),D=g(4482),w=g(5403);function B(u,s=S.z){return(0,D.e)((l,h)=>{let p=null,M=null,k=null;const U=()=>{if(p){p.unsubscribe(),p=null;const ne=M;M=null,h.next(ne)}};function se(){const ne=k+u,Ce=s.now();if(Ce<ne)return p=this.schedule(void 0,ne-Ce),void h.add(p);U()}l.subscribe((0,w.x)(h,ne=>{M=ne,k=s.now(),p||(p=s.schedule(se,u),h.add(p))},()=>{U(),h.complete()},void 0,()=>{M=p=null}))})}var O=g(9300),L=g(4004),K=g(9643),X=g(1281),oe=g(9841),ue=g(7272),le=g(9751),pe=g(5698),xe=g(8675),y=g(2722);const x=new Set;let E,A=(()=>{class u{constructor(l){this._platform=l,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Ae}matchMedia(l){return(this._platform.WEBKIT||this._platform.BLINK)&&function ae(u){if(!x.has(u))try{E||(E=document.createElement("style"),E.setAttribute("type","text/css"),document.head.appendChild(E)),E.sheet&&(E.sheet.insertRule(`@media ${u} {body{ }}`,0),x.add(u))}catch(s){console.error(s)}}(l),this._matchMedia(l)}}return u.\u0275fac=function(l){return new(l||u)(v.LFG(F.t4))},u.\u0275prov=v.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();function Ae(u){return{matches:"all"===u||""===u,media:u,addListener:()=>{},removeListener:()=>{}}}let re=(()=>{class u{constructor(l,h){this._mediaMatcher=l,this._zone=h,this._queries=new Map,this._destroySubject=new V.x}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(l){return ge((0,X.Eq)(l)).some(p=>this._registerQuery(p).mql.matches)}observe(l){const p=ge((0,X.Eq)(l)).map(k=>this._registerQuery(k).observable);let M=(0,oe.a)(p);return M=(0,ue.z)(M.pipe((0,pe.q)(1)),M.pipe(function he(u){return(0,O.h)((s,l)=>u<=l)}(1),B(0))),M.pipe((0,L.U)(k=>{const U={matches:!1,breakpoints:{}};return k.forEach(({matches:se,query:ne})=>{U.matches=U.matches||se,U.breakpoints[ne]=se}),U}))}_registerQuery(l){if(this._queries.has(l))return this._queries.get(l);const h=this._mediaMatcher.matchMedia(l),M={observable:new le.y(k=>{const U=se=>this._zone.run(()=>k.next(se));return h.addListener(U),()=>{h.removeListener(U)}}).pipe((0,xe.O)(h),(0,L.U)(({matches:k})=>({query:l,matches:k})),(0,y.R)(this._destroySubject)),mql:h};return this._queries.set(l,M),M}}return u.\u0275fac=function(l){return new(l||u)(v.LFG(A),v.LFG(v.R0b))},u.\u0275prov=v.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})();function ge(u){return u.map(s=>s.split(",")).reduce((s,l)=>s.concat(l)).map(s=>s.trim())}class Re extends class ot{constructor(s){this._items=s,this._activeItemIndex=-1,this._activeItem=null,this._wrap=!1,this._letterKeyStream=new V.x,this._typeaheadSubscription=Z.w0.EMPTY,this._vertical=!0,this._allowedModifierKeys=[],this._homeAndEnd=!1,this._skipPredicateFn=l=>l.disabled,this._pressedLetters=[],this.tabOut=new V.x,this.change=new V.x,s instanceof v.n_E&&s.changes.subscribe(l=>{if(this._activeItem){const p=l.toArray().indexOf(this._activeItem);p>-1&&p!==this._activeItemIndex&&(this._activeItemIndex=p)}})}skipPredicate(s){return this._skipPredicateFn=s,this}withWrap(s=!0){return this._wrap=s,this}withVerticalOrientation(s=!0){return this._vertical=s,this}withHorizontalOrientation(s){return this._horizontal=s,this}withAllowedModifierKeys(s){return this._allowedModifierKeys=s,this}withTypeAhead(s=200){return this._typeaheadSubscription.unsubscribe(),this._typeaheadSubscription=this._letterKeyStream.pipe((0,N.b)(l=>this._pressedLetters.push(l)),B(s),(0,O.h)(()=>this._pressedLetters.length>0),(0,L.U)(()=>this._pressedLetters.join(""))).subscribe(l=>{const h=this._getItemsArray();for(let p=1;p<h.length+1;p++){const M=(this._activeItemIndex+p)%h.length,k=h[M];if(!this._skipPredicateFn(k)&&0===k.getLabel().toUpperCase().trim().indexOf(l)){this.setActiveItem(M);break}}this._pressedLetters=[]}),this}withHomeAndEnd(s=!0){return this._homeAndEnd=s,this}setActiveItem(s){const l=this._activeItem;this.updateActiveItem(s),this._activeItem!==l&&this.change.next(this._activeItemIndex)}onKeydown(s){const l=s.keyCode,p=["altKey","ctrlKey","metaKey","shiftKey"].every(M=>!s[M]||this._allowedModifierKeys.indexOf(M)>-1);switch(l){case C.Mf:return void this.tabOut.next();case C.JH:if(this._vertical&&p){this.setNextItemActive();break}return;case C.LH:if(this._vertical&&p){this.setPreviousItemActive();break}return;case C.SV:if(this._horizontal&&p){"rtl"===this._horizontal?this.setPreviousItemActive():this.setNextItemActive();break}return;case C.oh:if(this._horizontal&&p){"rtl"===this._horizontal?this.setNextItemActive():this.setPreviousItemActive();break}return;case C.Sd:if(this._homeAndEnd&&p){this.setFirstItemActive();break}return;case C.uR:if(this._homeAndEnd&&p){this.setLastItemActive();break}return;default:return void((p||(0,C.Vb)(s,"shiftKey"))&&(s.key&&1===s.key.length?this._letterKeyStream.next(s.key.toLocaleUpperCase()):(l>=C.A&&l<=C.Z||l>=C.xE&&l<=C.aO)&&this._letterKeyStream.next(String.fromCharCode(l))))}this._pressedLetters=[],s.preventDefault()}get activeItemIndex(){return this._activeItemIndex}get activeItem(){return this._activeItem}isTyping(){return this._pressedLetters.length>0}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._items.length-1,-1)}setNextItemActive(){this._activeItemIndex<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(s){const l=this._getItemsArray(),h="number"==typeof s?s:l.indexOf(s);this._activeItem=l[h]??null,this._activeItemIndex=h}_setActiveItemByDelta(s){this._wrap?this._setActiveInWrapMode(s):this._setActiveInDefaultMode(s)}_setActiveInWrapMode(s){const l=this._getItemsArray();for(let h=1;h<=l.length;h++){const p=(this._activeItemIndex+s*h+l.length)%l.length;if(!this._skipPredicateFn(l[p]))return void this.setActiveItem(p)}}_setActiveInDefaultMode(s){this._setActiveItemByIndex(this._activeItemIndex+s,s)}_setActiveItemByIndex(s,l){const h=this._getItemsArray();if(h[s]){for(;this._skipPredicateFn(h[s]);)if(!h[s+=l])return;this.setActiveItem(s)}}_getItemsArray(){return this._items instanceof v.n_E?this._items.toArray():this._items}}{constructor(){super(...arguments),this._origin="program"}setFocusOrigin(s){return this._origin=s,this}setActiveItem(s){super.setActiveItem(s),this.activeItem&&this.activeItem.focus(this._origin)}}function ct(u){return 0===u.buttons||0===u.offsetX&&0===u.offsetY}function dt(u){const s=u.touches&&u.touches[0]||u.changedTouches&&u.changedTouches[0];return!(!s||-1!==s.identifier||null!=s.radiusX&&1!==s.radiusX||null!=s.radiusY&&1!==s.radiusY)}const fe="cdk-high-contrast-black-on-white",$="cdk-high-contrast-white-on-black",me="cdk-high-contrast-active";let H=(()=>{class u{constructor(l,h){this._platform=l,this._document=h,this._breakpointSubscription=(0,v.f3M)(re).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const l=this._document.createElement("div");l.style.backgroundColor="rgb(1,2,3)",l.style.position="absolute",this._document.body.appendChild(l);const h=this._document.defaultView||window,p=h&&h.getComputedStyle?h.getComputedStyle(l):null,M=(p&&p.backgroundColor||"").replace(/ /g,"");switch(l.remove(),M){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const l=this._document.body.classList;l.remove(me,fe,$),this._hasCheckedHighContrastMode=!0;const h=this.getHighContrastMode();1===h?l.add(me,fe):2===h&&l.add(me,$)}}}return u.\u0275fac=function(l){return new(l||u)(v.LFG(F.t4),v.LFG(o.K0))},u.\u0275prov=v.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})(),te=(()=>{class u{constructor(l){l._applyBodyHighContrastModeCssClasses()}}return u.\u0275fac=function(l){return new(l||u)(v.LFG(H))},u.\u0275mod=v.oAB({type:u}),u.\u0275inj=v.cJS({imports:[K.Q8]}),u})()},445:(_e,Y,g)=>{g.d(Y,{Is:()=>N,vT:()=>D});var o=g(4650),v=g(6895);const F=new o.OlP("cdk-dir-doc",{providedIn:"root",factory:function V(){return(0,o.f3M)(v.K0)}}),Z=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;let N=(()=>{class w{constructor(O){if(this.value="ltr",this.change=new o.vpe,O){const K=O.documentElement?O.documentElement.dir:null;this.value=function C(w){const B=w?.toLowerCase()||"";return"auto"===B&&typeof navigator<"u"&&navigator?.language?Z.test(navigator.language)?"rtl":"ltr":"rtl"===B?"rtl":"ltr"}((O.body?O.body.dir:null)||K||"ltr")}}ngOnDestroy(){this.change.complete()}}return w.\u0275fac=function(O){return new(O||w)(o.LFG(F,8))},w.\u0275prov=o.Yz7({token:w,factory:w.\u0275fac,providedIn:"root"}),w})(),D=(()=>{class w{}return w.\u0275fac=function(O){return new(O||w)},w.\u0275mod=o.oAB({type:w}),w.\u0275inj=o.cJS({}),w})()},1281:(_e,Y,g)=>{g.d(Y,{Eq:()=>Z,Ig:()=>v,fI:()=>N,su:()=>F});var o=g(4650);function v(D){return null!=D&&"false"!=`${D}`}function F(D,w=0){return function V(D){return!isNaN(parseFloat(D))&&!isNaN(Number(D))}(D)?Number(D):w}function Z(D){return Array.isArray(D)?D:[D]}function N(D){return D instanceof o.SBq?D.nativeElement:D}},9521:(_e,Y,g)=>{g.d(Y,{A:()=>De,JH:()=>he,JU:()=>C,K5:()=>Z,LH:()=>le,L_:()=>O,MW:()=>lt,Mf:()=>F,SV:()=>pe,Sd:()=>oe,Vb:()=>pt,Z:()=>Qe,ZH:()=>v,aO:()=>Fe,b2:()=>ce,jx:()=>N,oh:()=>ue,uR:()=>X,xE:()=>E,yY:()=>x,zL:()=>S});const v=8,F=9,Z=13,C=16,N=17,S=18,O=32,X=35,oe=36,ue=37,le=38,pe=39,he=40,x=46,E=48,Fe=57,De=65,Qe=90,lt=91,ce=224;function pt(Be,...Ut){return Ut.length?Ut.some(zt=>Be[zt]):Be.altKey||Be.shiftKey||Be.ctrlKey||Be.metaKey}},9643:(_e,Y,g)=>{g.d(Y,{Q8:()=>Z});var o=g(4650);let v=(()=>{class C{create(S){return typeof MutationObserver>"u"?null:new MutationObserver(S)}}return C.\u0275fac=function(S){return new(S||C)},C.\u0275prov=o.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})(),Z=(()=>{class C{}return C.\u0275fac=function(S){return new(S||C)},C.\u0275mod=o.oAB({type:C}),C.\u0275inj=o.cJS({providers:[v]}),C})()},3353:(_e,Y,g)=>{g.d(Y,{Oy:()=>xe,i$:()=>B,t4:()=>V});var o=g(4650),v=g(6895);let F;try{F=typeof Intl<"u"&&Intl.v8BreakIterator}catch{F=!1}let D,V=(()=>{class y{constructor(x){this._platformId=x,this.isBrowser=this._platformId?(0,v.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!F)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return y.\u0275fac=function(x){return new(x||y)(o.LFG(o.Lbi))},y.\u0275prov=o.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})();function B(y){return function w(){if(null==D&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>D=!0}))}finally{D=D||!1}return D}()?y:!!y.capture}function xe(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},3546:(_e,Y,g)=>{g.d(Y,{QW:()=>P,a8:()=>he,dn:()=>D});var o=g(4650),v=g(3238);const F=["*",[["mat-card-footer"]]],V=["*","mat-card-footer"];let D=(()=>{class x{}return x.\u0275fac=function(A){return new(A||x)},x.\u0275dir=o.lG2({type:x,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),x})(),he=(()=>{class x{constructor(A){this._animationMode=A}}return x.\u0275fac=function(A){return new(A||x)(o.Y36(o.QbO,8))},x.\u0275cmp=o.Xpm({type:x,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(A,ae){2&A&&o.ekj("_mat-animation-noopable","NoopAnimations"===ae._animationMode)},exportAs:["matCard"],ngContentSelectors:V,decls:2,vars:0,template:function(A,ae){1&A&&(o.F$t(F),o.Hsn(0),o.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),x})(),P=(()=>{class x{}return x.\u0275fac=function(A){return new(A||x)},x.\u0275mod=o.oAB({type:x}),x.\u0275inj=o.cJS({imports:[v.BQ,v.BQ]}),x})()},3238:(_e,Y,g)=>{g.d(Y,{rD:()=>De,Y2:()=>We,BQ:()=>le,si:()=>Ie,IR:()=>Ue,pj:()=>P,Kr:()=>x,FD:()=>A,sb:()=>E});var o=g(4650),v=g(6720),F=g(445),Z=g(6895),C=g(3353),N=g(1281);const ue=new o.OlP("mat-sanity-checks",{providedIn:"root",factory:function oe(){return!0}});let le=(()=>{class _{constructor(d,f,I){this._sanityChecks=f,this._document=I,this._hasDoneGlobalChecks=!1,d._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(d){return!(0,C.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[d])}}return _.\u0275fac=function(d){return new(d||_)(o.LFG(v.qm),o.LFG(ue,8),o.LFG(Z.K0))},_.\u0275mod=o.oAB({type:_}),_.\u0275inj=o.cJS({imports:[F.vT,F.vT]}),_})();function P(_,c){return class extends _{constructor(...d){super(...d),this.defaultColor=c,this.color=c}get color(){return this._color}set color(d){const f=d||this.defaultColor;f!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),f&&this._elementRef.nativeElement.classList.add(`mat-${f}`),this._color=f)}}}function x(_){return class extends _{constructor(...c){super(...c),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(c){this._disableRipple=(0,N.Ig)(c)}}}function E(_,c=0){return class extends _{constructor(...d){super(...d),this._tabIndex=c,this.defaultTabIndex=c}get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(d){this._tabIndex=null!=d?(0,N.su)(d):this.defaultTabIndex}}}function A(_){return class extends _{constructor(...c){super(...c),this.errorState=!1}updateErrorState(){const c=this.errorState,W=(this.errorStateMatcher||this._defaultErrorStateMatcher).isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);W!==c&&(this.errorState=W,this.stateChanges.next())}}}let De=(()=>{class _{isErrorState(d,f){return!!(d&&d.invalid&&(d.touched||f&&f.submitted))}}return _.\u0275fac=function(d){return new(d||_)},_.\u0275prov=o.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})();class Oe{constructor(c,d,f,I=!1){this._renderer=c,this.element=d,this.config=f,this._animationForciblyDisabledThroughCss=I,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const Re={enterDuration:225,exitDuration:150},Se=(0,C.i$)({passive:!0}),je=["mousedown","touchstart"],Ge=["mouseup","mouseleave","touchend","touchcancel"];class Ue{constructor(c,d,f,I){this._target=c,this._ngZone=d,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,I.isBrowser&&(this._containerElement=(0,N.fI)(f))}fadeInRipple(c,d,f={}){const I=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),W={...Re,...f.animation};f.centered&&(c=I.left+I.width/2,d=I.top+I.height/2);const G=f.radius||function ze(_,c,d){const f=Math.max(Math.abs(_-d.left),Math.abs(_-d.right)),I=Math.max(Math.abs(c-d.top),Math.abs(c-d.bottom));return Math.sqrt(f*f+I*I)}(c,d,I),ee=c-I.left,qe=d-I.top,ye=W.enterDuration,Q=document.createElement("div");Q.classList.add("mat-ripple-element"),Q.style.left=ee-G+"px",Q.style.top=qe-G+"px",Q.style.height=2*G+"px",Q.style.width=2*G+"px",null!=f.color&&(Q.style.backgroundColor=f.color),Q.style.transitionDuration=`${ye}ms`,this._containerElement.appendChild(Q);const Le=window.getComputedStyle(Q),Me=Le.transitionDuration,fe="none"===Le.transitionProperty||"0s"===Me||"0s, 0s"===Me,$=new Oe(this,Q,f,fe);Q.style.transform="scale3d(1, 1, 1)",$.state=0,f.persistent||(this._mostRecentTransientRipple=$);let me=null;return!fe&&(ye||W.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const H=()=>this._finishRippleTransition($),te=()=>this._destroyRipple($);Q.addEventListener("transitionend",H),Q.addEventListener("transitioncancel",te),me={onTransitionEnd:H,onTransitionCancel:te}}),this._activeRipples.set($,me),(fe||!ye)&&this._finishRippleTransition($),$}fadeOutRipple(c){if(2===c.state||3===c.state)return;const d=c.element,f={...Re,...c.config.animation};d.style.transitionDuration=`${f.exitDuration}ms`,d.style.opacity="0",c.state=2,(c._animationForciblyDisabledThroughCss||!f.exitDuration)&&this._finishRippleTransition(c)}fadeOutAll(){this._getActiveRipples().forEach(c=>c.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(c=>{c.config.persistent||c.fadeOut()})}setupTriggerEvents(c){const d=(0,N.fI)(c);!d||d===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=d,this._registerEvents(je))}handleEvent(c){"mousedown"===c.type?this._onMousedown(c):"touchstart"===c.type?this._onTouchStart(c):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(Ge),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(c){0===c.state?this._startFadeOutTransition(c):2===c.state&&this._destroyRipple(c)}_startFadeOutTransition(c){const d=c===this._mostRecentTransientRipple,{persistent:f}=c.config;c.state=1,!f&&(!d||!this._isPointerDown)&&c.fadeOut()}_destroyRipple(c){const d=this._activeRipples.get(c)??null;this._activeRipples.delete(c),this._activeRipples.size||(this._containerRect=null),c===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),c.state=3,null!==d&&(c.element.removeEventListener("transitionend",d.onTransitionEnd),c.element.removeEventListener("transitioncancel",d.onTransitionCancel)),c.element.remove()}_onMousedown(c){const d=(0,v.X6)(c),f=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!d&&!f&&(this._isPointerDown=!0,this.fadeInRipple(c.clientX,c.clientY,this._target.rippleConfig))}_onTouchStart(c){if(!this._target.rippleDisabled&&!(0,v.yG)(c)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const d=c.changedTouches;for(let f=0;f<d.length;f++)this.fadeInRipple(d[f].clientX,d[f].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._getActiveRipples().forEach(c=>{!c.config.persistent&&(1===c.state||c.config.terminateOnPointerUp&&0===c.state)&&c.fadeOut()}))}_registerEvents(c){this._ngZone.runOutsideAngular(()=>{c.forEach(d=>{this._triggerElement.addEventListener(d,this,Se)})})}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){this._triggerElement&&(je.forEach(c=>{this._triggerElement.removeEventListener(c,this,Se)}),this._pointerUpEventsRegistered&&Ge.forEach(c=>{this._triggerElement.removeEventListener(c,this,Se)}))}}const We=new o.OlP("mat-ripple-global-options");let Ie=(()=>{class _{}return _.\u0275fac=function(d){return new(d||_)},_.\u0275mod=o.oAB({type:_}),_.\u0275inj=o.cJS({imports:[le,le]}),_})()}}]);