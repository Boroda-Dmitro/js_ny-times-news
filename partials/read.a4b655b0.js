!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}function n(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var n=o[e];delete o[e];var t={id:e,exports:{}};return r[e]=t,n.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){o[e]=n},t.parcelRequired7c6=a),a.register("iE7OH",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)a[n[t]]=e[n[t]]},o=function(e){var n=a[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),a.register("aNJCr",(function(n,t){var r;e(n.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var n=o[e];return n||(n=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=n),n}})),a("iE7OH").register(JSON.parse('{"epUoY":"read.a4b655b0.js","bLbsu":"image.a1e54c9b.png","aJLwf":"desktop-no-news-601.dd9b880e.png","1tUMT":"read.7d4697e4.js"}'));var i=a("8nrFW"),u=a("jR9u2");function l(e,n){var t=e.filter((function(e,n,t){return t.indexOf(e)===n})).sort((function(e,n){return n.localeCompare(e)})).map((function(e){return'<div class="accordion__container">\n                  <button class="accordion__label">'.concat(e,'</button>\n                  <ul class="accordion__content news__box news__box--accordion"></ul>\n                </div>')})).join("");n.innerHTML=t}i=a("8nrFW"),u=a("jR9u2");var c,d=a("gzPrx"),f=a("iLqhe"),s=a("kN5pd");s=a("kN5pd");function _(e){e.map((function(e,t){var r=n(u)(e.published_date).format("YY/MM/YYYY"),o=document.querySelectorAll(".accordion__label"),a="".concat(t),l=n(c),_="No text";0!==e.media.length&&(l="".concat(e.media[0]["media-metadata"][2].url),_="".concat(e.media[0].caption));var p=n(i)(o).find((function(e){return e.textContent===r}));(0,d.createPopularCardMarkup)(e,r,a,p.nextElementSibling,"afterbegin",l,_),document.querySelectorAll(".markup-unit__section").forEach((function(e){""===e.textContent&&(e.style.display="none")})),(0,f.onCardClick)(a,e,s.LOCAL_STORAGE_POPULAR_READ_KEY,s.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY)}))}c=a("aNJCr").getBundleURL("epUoY")+"../"+a("iE7OH").resolve("bLbsu");i=a("8nrFW"),u=a("jR9u2");var p,m=a("aDOrX"),Y=(f=a("iLqhe"),a("aKAgX"));Y=a("aKAgX");function g(e){e.map((function(e,t){var r=n(u)(e.pub_date).format("YY/MM/YYYY"),o=document.querySelectorAll(".accordion__label"),a="".concat(t),l=n(p);e.multimedia.length>0&&(l="http://www.nytimes.com/".concat(e.multimedia[0].url));var c=n(i)(o).find((function(e){return e.textContent===r}));(0,m.createSeachCardMarkup)(e,r,a,l,c.nextElementSibling,"afterbegin"),(0,f.onCardClick)(a,e,Y.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY,Y.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY)}))}p=a("aNJCr").getBundleURL("epUoY")+"../"+a("iE7OH").resolve("aJLwf");s=a("kN5pd"),Y=a("aKAgX");var E,b=document.querySelector(".default-picture"),v=document.querySelector(".accordion"),A=[];!function(){var e=localStorage.getItem(s.LOCAL_STORAGE_POPULAR_READ_KEY),t=localStorage.getItem(Y.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY);if(null===e&&null===t)return void b.classList.remove("visually-hidden");if(null!==e&&null===t)A=n(i)(JSON.parse(e)),l(A.map((function(e){return n(u)(e.published_date).format("YY/MM/YYYY")})),v),_(A);else if(null!==t&&null===e)A=n(i)(JSON.parse(t)),l(A.map((function(e){return n(u)(e.pub_date).format("YY/MM/YYYY")})),v),g(A);else if(null!==t&&null!==e){A=n(i)(JSON.parse(e)).concat(n(i)(JSON.parse(t)));var r=[],o=[];l(A.map((function(e){return e.pub_date?(o.push(e),n(u)(e.pub_date).format("YY/MM/YYYY")):e.published_date?(r.push(e),n(u)(e.published_date).format("YY/MM/YYYY")):void 0})),v),g(o),_(r)}}(),E="accordion__label",document.querySelectorAll(".".concat(E)).forEach((function(e){e.addEventListener("click",(function(n){var t=e.nextElementSibling;e.parentNode.classList.toggle("active"),t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}))})),document.querySelectorAll(".markup-unit__already-read").forEach((function(e){e.classList.remove("visually-hidden")}))}();
//# sourceMappingURL=read.a4b655b0.js.map
