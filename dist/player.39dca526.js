parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qbJK":[function(require,module,exports) {
var e=document.querySelector(".music__container"),t=document.getElementById("play"),n=document.getElementById("prev"),i=document.getElementById("next"),c=document.getElementById("audio"),a=document.querySelector(".progress"),o=document.querySelector(".music__container-progress"),s=document.getElementById("title"),r=document.getElementById("cover"),d=document.getElementById("tracktime"),l=["Telex - Moskow Diskow","Size - Olimpico","Valeria - Fairy Tale","Size - Esta Noche","Vandana - Cambios en el Tiempo"],u=0;function m(e){s.innerText=e,c.src="./music/".concat(e,".mp3"),r.src="./images/".concat(e,".png")}function y(){e.classList.add("play"),t.querySelector("i.fas").classList.remove("fa-play"),t.querySelector("i.fas").classList.add("fa-pause"),c.play()}function f(){e.classList.remove("play"),t.querySelector("i.fas").classList.remove("fa-pause"),t.querySelector("i.fas").classList.add("fa-play"),c.pause()}function p(){--u<0&&(u=l.length-1),m(l[u]),y()}function v(){++u>l.length-1&&(u=0),m(l[u]),y()}function g(e){var t=e.target,n=t.duration,i=t.currentTime/n*100;a.style.width="".concat(i,"%")}m(l[u]);var E=0;function L(e){var t=c.currentTime/60,n=t.toFixed(2),i=c.duration/60,a=i.toFixed(2);d.innerText=n+" / "+a,console.log(t,i)}function S(e){var t=this.clientWidth,n=e.offsetX,i=c.duration;c.currentTime=n/t*i,console.log(n)}t.addEventListener("click",function(){e.classList.contains("play")?f():y(),L()}),n.addEventListener("click",function(){p(),L()}),i.addEventListener("click",function(){v(),L()}),c.addEventListener("timeupdate",g),o.addEventListener("click",S),c.addEventListener("ended",v),c.addEventListener("timeupdate",L);
},{}]},{},["qbJK"], null)
//# sourceMappingURL=/player.39dca526.js.map