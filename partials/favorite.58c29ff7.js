function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r);var i=r("cxTnx"),l=r("5R7wT"),o=r("4jbo8");function s(e,t,n){document.querySelector(`[data-id = "${e}"]`).addEventListener("click",(e=>{"A"===e.target.nodeName&&(0,o.addNewsToLocalStorage)(t,n)}))}var d=r("jErh6"),c=r("atV3q"),_=(c=r("atV3q"),r("bfbNR"));_=r("bfbNR");const u=document.querySelector(".default-picture"),E=document.querySelector(".news__box");let L=[],A=[];function O(){document.querySelectorAll(".markup-unit__add-favorite").forEach((e=>{e.innerHTML='<p class="markup-unit__favorite-text">Remove from favorite</p>\n                    <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">\n                  <path d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>\n</svg>',e.addEventListener("click",(t=>{const n=localStorage.getItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),a=localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);if(n&&!a){L=[...JSON.parse(n)];const t=L.findIndex((t=>t.title===e.nextElementSibling.innerHTML));if(-1===t)return;if(L.splice(t,1),0!==L.length)return localStorage.setItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,JSON.stringify(L)),E.innerHTML="",m(),O();localStorage.removeItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),E.innerHTML="",u.classList.remove("visually-hidden")}else if(a&&!n){L=[...JSON.parse(a)];const t=L.findIndex((t=>t.headline.main===e.nextElementSibling.innerHTML));if(-1===t)return;if(L.splice(t,1),0!==L.length)return localStorage.setItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,JSON.stringify(L)),E.innerHTML="",m(),O();localStorage.removeItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY),E.innerHTML="",u.classList.remove("visually-hidden")}else if(n&&a){L=[...JSON.parse(n)];let t=[...JSON.parse(a)];const r=L.findIndex((t=>t.title===e.nextElementSibling.innerHTML));if(-1===r){const n=t.findIndex((t=>t.headline.main===e.nextElementSibling.innerHTML));return t.splice(n,1),0===t.length?(localStorage.removeItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY),E.innerHTML="",u.classList.remove("visually-hidden"),m(),O()):(localStorage.setItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,JSON.stringify(t)),E.innerHTML="",m(),O())}return L.splice(r,1),0===L.length?(localStorage.removeItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),E.innerHTML="",u.classList.remove("visually-hidden"),m(),O()):(localStorage.setItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,JSON.stringify(L)),E.innerHTML="",m(),O())}}))}))}function m(){const t=localStorage.getItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),n=localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);null!==t||null!==n?(t&&(L=[...JSON.parse(t)],L.map(((t,n)=>{const a=e(i)(t.published_date).format("YY/MM/YYYY"),r=`${n}`;(0,l.createPopularCardMarkup)(t,a,r,E,"beforeend"),s(r,t,c.LOCAL_STORAGE_POPULAR_READ_KEY),u.classList.add("visually-hidden")}))),n&&(A=[...JSON.parse(n)],A.map(((t,n)=>{const a=e(i)(t.pub_date).format("YY/MM/YYYY");let r="./images/desktop-no-news-601.png";t.multimedia.length>0&&(r=`http://www.nytimes.com/${t.multimedia[0].url}`);const l=`${n}`;(0,d.createSeachCardMarkup)(t,a,l,r,E,"beforeend"),s(l,t,_.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY),u.classList.add("visually-hidden")})))):u.classList.remove("visually-hidden")}m(),O();const S=document.querySelector(".search-button svg"),T=document.querySelector(".search-input");function R(){const t=localStorage.getItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),n=localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY),a=[],r=[];if(null!==t||null!==n){if(t&&(L=[...JSON.parse(t)],L.map((e=>{e.abstract.includes(T.value)&&a.push(e)}))),n&&(A=[...JSON.parse(n)],A.map((e=>{e.abstract.includes(T.value)&&r.push(e)}))),!(a.length>0||r.length>0))return E.innerHTML="",void u.classList.remove("visually-hidden");E.innerHTML="",r.length>0&&r.map(((t,n)=>{const a=e(i)(t.pub_date).format("YY/MM/YYYY");let r="./images/desktop-no-news-601.png";t.multimedia.length>0&&(r=`http://www.nytimes.com/${t.multimedia[0].url}`);const l=`${n}`;(0,d.createSeachCardMarkup)(t,a,l,r,E,"beforeend"),s(l,t,_.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY)})),a.length>0&&a.map(((t,n)=>{const a=e(i)(t.published_date).format("YY/MM/YYYY"),r=`${n}`;(0,l.createPopularCardMarkup)(t,a,r,E,"beforeend"),s(r,t,c.LOCAL_STORAGE_POPULAR_READ_KEY),u.classList.add("visually-hidden")})),T.value=""}else u.classList.remove("visually-hidden")}S.addEventListener("click",R),document.addEventListener("keydown",(e=>{"Enter"===e.code&&(R(),O())}));
//# sourceMappingURL=favorite.58c29ff7.js.map