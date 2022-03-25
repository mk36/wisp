(function(t){function n(n){for(var i,r,s=n[0],l=n[1],u=n[2],p=0,m=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(n);while(m.length)m.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],i=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(i=!1)}i&&(a.splice(n--,1),t=r(r.s=e[0]))}return t}var i={},o={app:0},a=[];function r(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/wisp/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var c=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"569e":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],r=(e("569e"),{name:"App",components:{},data:function(){return{}}}),s=r,l=e("2877"),u=Object(l["a"])(s,o,a,!1,null,null,null),c=u.exports,p=e("8c4f"),m=e("bc3a"),d=e.n(m);i["a"].http=i["a"].prototype.$http=d.a,i["a"].use(p["a"]);var h=[{path:"/",name:"Dashboard",component:e("7277").default}],f=new p["a"]({routes:h}),g=f;e("b048"),i["a"].config.productionTip=!1,i["a"].config.ignoredElements=["a-scene","a-asset-item","a-image","a-curvedimage","a-assets","a-text","a-plane","a-cylinder","a-rounded","a-light","a-entity","a-camera","a-box","a-sky","a-cursor","a-gltf-model","a-triangle","a-cubemap"],new i["a"]({router:g,render:function(t){return t(c)}}).$mount("#app")},7277:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"dashboard"},[e("aframe-play")],1)},o=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-scene",[e("a-assets",[e("audio",{attrs:{id:t.soundBg,src:"sounds/the-great-unknown.mp3",preload:""}})]),e("a-camera"),e("a-light",{attrs:{type:"ambient",color:"#FFFFFF",intensity:"1.0"}}),e("a-sky",{attrs:{color:"black"}}),e("a-entity",{attrs:{id:"moon","gltf-model":"url(/wisp/models/moon.glb)",position:"80 30 -80",scale:"6.5 6.5 6.5",rotation:"0 0 0",animation:t.moonAnimation}},[e("a-entity",{attrs:{position:"0.5 1.1 1.9",light:"type: spot; angle: 45; distance: 20; color: yellow; intensity: 10;",animation:t.lightColorAnimation}})],1),e("a-entity",{attrs:{id:t.characterID,"gltf-model":"url(/wisp/models/wisp.glb)",position:t.movePositions[0],rotation:"0 90 0"}},[e("a-entity",{attrs:{position:{x:-t.wispGlowLightPos.x,y:t.wispGlowLightPos.y,z:t.wispGlowLightPos.z},light:t.glowLightProperties,animation:t.glowLightAnimation}}),e("a-entity",{attrs:{position:t.wispGlowLightPos,light:t.glowLightProperties,animation:t.glowLightAnimation}})],1)],1),e("section",{staticClass:"start-wrapper"},[e("button",{staticClass:"start-wrapper__start-btn",on:{click:function(n){return t.startExperience()}}},[t._v("Start Experience")])])],1)},r=[],s=e("5530"),l={props:[""],components:{},data:function(){return{characterID:"wisp",charElm:null,soundBg:"sound-bg",glowLightAnimation:"property: light.color; from:rgb(255, 255, 255); to:rgb(0, 0, 0); dir: alternate; dur: 1500; easing: easeInCirc; loop: true",lightColorAnimation:"property: light.intensity; from:1; to:10; dir: alternate; dur: 1000; easing: linear; loop: true",moonAnimation:{property:"rotation",to:{y:360},dur:15e3,easing:"linear",loop:!0},moveAnimation:{property:"position",to:{x:0,y:0,z:0},dur:3e3,easing:"linear"},rotateAnimation:{property:"rotation",to:{x:0,y:270,z:0},dur:2e3,easing:"linear"},animPos:1,animations:[],animNumber:1,wispGlowLightPos:{x:-5.6,y:1.1,z:0},lightColorPosition:"0.1 1.2 -2.9",movePositions:[{x:-5.5,y:2.9,z:-5},{x:0,y:0,z:-5},{x:5,y:2.9,z:-5}],glowLightProperties:"type: spot; angle: 180; distance: 20; color: white; intensity: 6"}},mounted:function(){this.charElm=document.getElementById(this.characterID),this.createAnimations()},methods:{startExperience:function(){var t=document.querySelector(".start-wrapper");t&&(t.style.display="none",this.setUpAnimationEvents(),this.playSound())},playSound:function(){var t=document.getElementById(this.soundBg);t&&t.play()},createAnimations:function(){this.animations.push(this.getMoveAnimation(0),this.getMoveAnimation(1),this.getMoveAnimation(2),this.getRotationAnimation(270),this.getMoveAnimation(0),this.getRotationAnimation(90))},getMoveAnimation:function(t){var n=Object(s["a"])({},this.moveAnimation);return n.to=this.movePositions[t],n},getRotationAnimation:function(t){var n=Object(s["a"])({},this.rotateAnimation);return n.to={x:0,y:t,z:0},n},setUpAnimationEvents:function(){var t=this;this.charElm&&(this.setCurrentAnimation(this.animNumber),this.charElm.addEventListener("animationcomplete",(function(){t.animNumber=t.animNumber<t.animations.length-1?t.animNumber+1:1,t.charElm.removeAttribute("animation"),t.setCurrentAnimation(t.animNumber)})))},setCurrentAnimation:function(t){this.charElm.setAttribute("animation",this.animations[t])}}},u=l,c=(e("95c5"),e("2877")),p=Object(c["a"])(u,a,r,!1,null,null,null),m=p.exports,d={name:"dashboard",components:{aframePlay:m},data:function(){return{}},mounted:function(){},methods:{}},h=d,f=(e("b985"),Object(c["a"])(h,i,o,!1,null,null,null));n["default"]=f.exports},"95c5":function(t,n,e){"use strict";var i=e("a2f3"),o=e.n(i);o.a},a2f3:function(t,n,e){},b985:function(t,n,e){"use strict";var i=e("de7f"),o=e.n(i);o.a},de7f:function(t,n,e){}});
//# sourceMappingURL=app.93a4d520.js.map
