function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a=i("cxTnx"),l=i("5R7wT"),o=i("7Sa78"),_=i("jErh6"),s=i("atV3q"),c=(s=i("atV3q"),i("bfbNR"));c=i("bfbNR");const d=document.querySelector(".default-picture"),u=document.querySelector(".news__box");let A=[],E=[];function O(){const t=localStorage.getItem(s.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),n=localStorage.getItem(c.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);null!==t||null!==n?(t&&(A=[...JSON.parse(t)],A.map(((t,n)=>{const r=e(a)(t.published_date).format("YY/MM/YYYY"),i=`${n}`;(0,l.createPopularCardMarkup)(t,r,i,u,"beforeend"),(0,o.onCardClick)(i,t,s.LOCAL_STORAGE_POPULAR_READ_KEY,s.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),d.classList.add("visually-hidden")}))),n&&(E=[...JSON.parse(n)],E.map(((t,n)=>{const r=e(a)(t.pub_date).format("YY/MM/YYYY");let i="./images/desktop-no-news-601.png";t.multimedia.length>0&&(i=`http://www.nytimes.com/${t.multimedia[0].url}`);const l=`${n}`;(0,_.createSeachCardMarkup)(t,r,l,i,u,"beforeend"),(0,o.onCardClick)(l,t,c.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY,c.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY)})))):d.classList.remove("visually-hidden")}O(),function e(){document.querySelectorAll(".markup-unit__add-favorite").forEach((t=>{t.innerHTML='<p class="markup-unit__favorite-text">Remove from favorite</p>\n                    <svg class="markup-unit__favorite-icon markup-unit__favorite-icon--active" width="16" height="16" viewBox="0 0 32 32">\n                  <path d="M9.334 4c-3.682 0-6.668 2.954-6.668 6.6 0 2.942 1.168 9.926 12.652 16.986 0.194 0.12 0.43 0.191 0.682 0.191s0.488-0.071 0.688-0.194l-0.006 0.003c11.484-7.060 12.652-14.044 12.652-16.986 0-3.646-2.986-6.6-6.668-6.6-3.68 0-6.666 4-6.666 4s-2.986-4-6.666-4z"></path>\n</svg>',t.addEventListener("click",(n=>{const r=localStorage.getItem(s.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),i=localStorage.getItem(c.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);if(r){A=[...JSON.parse(r)];const n=A.findIndex((e=>e.title===t.nextElementSibling.innerHTML));if(-1===n)return;if(A.splice(n,1),0!==A.length)return localStorage.setItem(s.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,JSON.stringify(A)),u.innerHTML="",O(),e();localStorage.removeItem(s.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),u.innerHTML="",d.classList.remove("visually-hidden")}else if(i){A=[...JSON.parse(i)];const n=A.findIndex((e=>e.headline.main===t.nextElementSibling.innerHTML));if(-1===n)return;if(A.splice(n,1),0!==A.length)return localStorage.setItem(c.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,JSON.stringify(A)),u.innerHTML="",O(),e();localStorage.removeItem(c.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY),u.innerHTML="",d.classList.remove("visually-hidden")}}))}))}();
//# sourceMappingURL=favorite.dbd1f8f7.js.map
