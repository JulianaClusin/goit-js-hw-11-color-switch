parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Sr7R":[function(require,module,exports) {

},{}],"rzxb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var F=["#FFFFFF","#FF69B4","#FF8C00","#FF9800","#00FA9A","#00FFFF","#00008B","#808000","#4B0082","#000000"];exports.default=F;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("/main");var t=e(require("./js/color"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var a=document.querySelector("body"),r=document.querySelector('[data-action="start"]'),l=document.querySelector('[data-action="stop"]'),s=function(){function e(){n(this,e),this.intervalId=null,this.isActive=!1,this.colors=t.default,this.disabledStop()}return o(e,[{key:"disabledStop",value:function(){l.disabled=!0}},{key:"btnStart",value:function(){var t=this;this.isActive||(this.isActive=!0,this.intervalId=setInterval(function(){t.onChangeColor()},1e3),this.startButtonDisable())}},{key:"btnStop",value:function(){clearInterval(this.intervalId),this.isActive=!1,this.stopButtonDisable()}},{key:"randomIntegerFromInterval",value:function(t,e){var n=this.colors[Math.floor(Math.random()*(e-t+1)+t)];n===this.index?this.randomIntegerFromInterval(t,e):this.index=n}},{key:"onChangeColor",value:function(){this.randomIntegerFromInterval(0,this.colors.length-1),a.style.backgroundColor=this.index}},{key:"startButtonDisable",value:function(){r.disabled=!0,l.disabled=!1}},{key:"stopButtonDisable",value:function(){r.disabled=!1,l.disabled=!0}}]),e}();r.addEventListener("click",function(){u.btnStart()}),l.addEventListener("click",function(){u.btnStop()});var u=new s;
},{"/main":"Sr7R","./js/color":"rzxb"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.bba97c18.js.map