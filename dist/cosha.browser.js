var Cosha=function(){"use strict";function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}return function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.className,a=void 0===n?"cosha":n,r=e.blur,s=void 0===r?"5px":r,i=e.brightness,o=void 0===i?"100%":i;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.className=a,this.blur=s,this.brightness=o}var a,r,s;return a=t,(r=[{key:"init",value:function(){this.addStyle(),this.addClone()}},{key:"addStyle",value:function(){document.head.insertAdjacentHTML("beforeend","\n      <style>\n        .".concat(this.className,"__wrapper {\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n\n        .").concat(this.className,"__clone {\n          filter: blur(").concat(this.blur,") brightness(").concat(this.brightness,");\n          position: absolute;\n          z-index: -1;\n        }\n      </style>\n    "))}},{key:"addClone",value:function(){var e=this;this.nodes=document.getElementsByClassName(this.className),n(this.nodes).forEach(function(n){var t=n.cloneNode(),a=document.createElement("div");a.classList.add(e.className+"__wrapper"),t.classList.add(e.className+"__clone"),t.classList.remove(e.className),n.parentNode.insertBefore(a,n),a.appendChild(n),a.appendChild(t)})}}])&&e(a.prototype,r),s&&e(a,s),t}()}();