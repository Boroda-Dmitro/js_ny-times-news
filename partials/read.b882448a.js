function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequired7c6=a);var o=a("cxTnx");function r(e,t){const n=e.filter(((e,t,n)=>n.indexOf(e)===t)).sort(((e,t)=>t.localeCompare(e))).map((e=>`<div class="accordion__container">\n                  <button class="accordion__label">${e}</button>\n                  <ul class="accordion__content news__box news__box--accordion"></ul>\n                </div>`)).join("");t.innerHTML=n}o=a("cxTnx");var i=a("5R7wT"),c=a("7Sa78"),d=a("atV3q");d=a("atV3q");function u(t){t.map(((t,n)=>{const l=e(o)(t.published_date).format("YY/MM/YYYY"),a=`${n}`,r=[...document.querySelectorAll(".accordion__label")].find((e=>e.textContent===l));(0,i.createPopularCardMarkup)(t,l,a,r.nextElementSibling,"afterbegin"),(0,c.onCardClick)(a,t,d.LOCAL_STORAGE_POPULAR_READ_KEY,d.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY)}))}o=a("cxTnx");var s=a("jErh6"),_=(c=a("7Sa78"),a("bfbNR"));_=a("bfbNR");function f(t){t.map(((t,n)=>{const l=e(o)(t.pub_date).format("YY/MM/YYYY"),a=document.querySelectorAll(".accordion__label"),r=`${n}`;let i="./images/desktop-no-news-601.png";t.multimedia.length>0&&(i=`http://www.nytimes.com/${t.multimedia[0].url}`);const d=[...a].find((e=>e.textContent===l));(0,s.createSeachCardMarkup)(t,l,r,i,d.nextElementSibling,"afterbegin"),(0,c.onCardClick)(r,t,_.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY,_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY)}))}d=a("atV3q"),_=a("bfbNR");const p=document.querySelector(".default-picture"),Y=document.querySelector(".accordion");let m=[],b=[];var E;!function(){const t=localStorage.getItem(d.LOCAL_STORAGE_POPULAR_READ_KEY),n=localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY);if(null===t&&null===n)return void p.classList.remove("visually-hidden");if(null!==t&&null===n)m=[...JSON.parse(t)],b=m.map((t=>e(o)(t.published_date).format("YY/MM/YYYY"))),r(b,Y),u(m);else if(null!==n&&null===t)m=[...JSON.parse(n)],b=m.map((t=>e(o)(t.pub_date).format("YY/MM/YYYY"))),r(b,Y),f(m);else if(null!==n&&null!==t){m=[...JSON.parse(t),...JSON.parse(n)];let l=[],a=[];b=m.map((t=>t.pub_date?(a.push(t),e(o)(t.pub_date).format("YY/MM/YYYY")):t.published_date?(l.push(t),e(o)(t.published_date).format("YY/MM/YYYY")):void 0)),r(b,Y),f(a),u(l)}}(),E="accordion__label",document.querySelectorAll(`.${E}`).forEach((e=>{e.addEventListener("click",(t=>{let n=e.nextElementSibling;e.parentNode.classList.toggle("active"),n.style.maxHeight?n.style.maxHeight=null:n.style.maxHeight=n.scrollHeight+"px"}))})),document.querySelectorAll(".markup-unit__already-read").forEach((e=>{e.classList.remove("visually-hidden")}));
//# sourceMappingURL=read.b882448a.js.map