function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=a.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,a){r[e]=a},a.parcelRequired7c6=n),n("kyEFX").register(JSON.parse('{"19qTy":"favorite.d119129a.js","dN60t":"image.a1e54c9b.png","32wSe":"read.11ec0996.js"}'));var o=n("cxTnx"),l=n("5R7wT"),i=n("4jbo8");function s(e,a,t){document.querySelector(`[data-id = "${e}"]`).addEventListener("click",(e=>{"A"===e.target.nodeName&&(0,i.addNewsToLocalStorage)(a,t)}))}var d=n("jErh6"),c=n("atV3q"),_=n("bfbNR");c=n("atV3q");function u(){document.querySelectorAll(".markup-unit__section").forEach((e=>{""===e.textContent&&(e.style.display="none")})),document.querySelectorAll(".markup-unit__add-favorite").forEach((e=>{e.addEventListener("click",(a=>{let t=JSON.parse(localStorage.getItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY)),r=JSON.parse(localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY));if(t&&!r){const a=t.filter((a=>a.title!==e.nextElementSibling.innerHTML));if(0!==a.length)return localStorage.setItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,JSON.stringify(a)),c.homePageNews.innerHTML="",O(),u();localStorage.removeItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),c.homePageNews.innerHTML="",g.classList.remove("visually-hidden")}else if(r&&!t){const a=r.filter((a=>a.headline.main!==e.nextElementSibling.innerHTML));if(0!==a.length)return localStorage.setItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,JSON.stringify(a)),c.homePageNews.innerHTML="",O(),u();localStorage.removeItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY),c.homePageNews.innerHTML="",g.classList.remove("visually-hidden")}else if(t&&r){const a=t.findIndex((a=>a.title===e.nextElementSibling.innerHTML));if(-1===a){const a=r.filter((a=>a.headline.main!==e.nextElementSibling.innerHTML));return 0===r.length?(localStorage.removeItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY),c.homePageNews.innerHTML="",g.classList.remove("visually-hidden"),O(),u()):(localStorage.setItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY,JSON.stringify(a)),c.homePageNews.innerHTML="",O(),u())}return t.splice(a,1),0===t.length?(localStorage.removeItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),c.homePageNews.innerHTML="",g.classList.remove("visually-hidden"),O(),u()):(localStorage.setItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY,JSON.stringify(t)),c.homePageNews.innerHTML="",O(),u())}}))}))}c=n("atV3q"),c=n("atV3q"),_=n("bfbNR"),_=n("bfbNR");var m,A=n("bb00P"),E=n("17yuK"),S=n("7eKOf"),L=n("ikvro");c=n("atV3q");m=new URL("../"+n("kyEFX").resolve("dN60t"),import.meta.url).toString();const g=document.querySelector(".default-picture");function O(){const a=localStorage.getItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),t=localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY);null!==a||null!==t?(a&&(parsedPopularArray=[...JSON.parse(a)],parsedPopularArray.map(((a,t)=>{const r=e(o)(a.published_date).format("YY/MM/YYYY"),n=`${t}`;let l=e(m),i="No text";0!==a.media.length&&(l=`${a.media[0]["media-metadata"][2].url}`,i=`${a.media[0].caption}`);const d=JSON.parse(localStorage.getItem(c.LOCAL_STORAGE_POPULAR_READ_KEY));if(d){-1===d.findIndex((e=>e.title===a.title))?(0,A.createLocalStorageWithFavouriteKeyPopularCardMarkup)(a,r,n,c.homePageNews,"beforeend",l,i):(0,S.createLocalStorageWithReadAndFavouriteKeyPopularCardMarkup)(a,r,n,c.homePageNews,"beforeend",l,i)}else(0,A.createLocalStorageWithFavouriteKeyPopularCardMarkup)(a,r,n,c.homePageNews,"beforeend",l,i);s(n,a,c.LOCAL_STORAGE_POPULAR_READ_KEY),g.classList.add("visually-hidden")}))),t&&(parsedSeachArray=[...JSON.parse(t)],parsedSeachArray.map(((a,t)=>{const r=e(o)(a.pub_date).format("YY/MM/YYYY");let n="./images/desktop-no-news-601.png";a.multimedia.length>0&&(n=`http://www.nytimes.com/${a.multimedia[0].url}`);const l=`${t}`,i=JSON.parse(localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY));if(i){-1===i.findIndex((e=>e.headline.main===a.headline.main))?(0,E.createLocalStorageWithFavouriteKeySearchCardMarkup)(a,r,l,n,c.homePageNews,"beforeend"):(0,L.createLocalStorageWithReadAndFavouriteKeySearchCardMarkup)(a,r,l,n,c.homePageNews,"beforeend")}else(0,E.createLocalStorageWithFavouriteKeySearchCardMarkup)(a,r,l,n,c.homePageNews,"beforeend");s(l,a,_.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY),g.classList.add("visually-hidden")})))):g.classList.remove("visually-hidden")}O(),u();const h=document.querySelector(".search-button svg"),p=document.querySelector(".search-input");function R(){const a=localStorage.getItem(c.LOCAL_STORAGE_POPULAR_FAVOURITE_KEY),t=localStorage.getItem(_.LOCAL_STORAGE_INPUT_SEARCH_FAVOURITE_KEY),r=[],n=[];if(null!==a||null!==t){if(a&&(parsedPopularArray=[...JSON.parse(a)],parsedPopularArray.map((e=>{e.abstract.includes(p.value)&&r.push(e)}))),t&&(parsedSeachArray=[...JSON.parse(t)],parsedSeachArray.map((e=>{e.abstract.includes(p.value)&&n.push(e)}))),!(r.length>0||n.length>0))return c.homePageNews.innerHTML="",void g.classList.remove("visually-hidden");c.homePageNews.innerHTML="",n.length>0&&n.map(((a,t)=>{const r=e(o)(a.pub_date).format("YY/MM/YYYY");let n="./images/desktop-no-news-601.png";a.multimedia.length>0&&(n=`http://www.nytimes.com/${a.multimedia[0].url}`);const l=`${t}`;(0,d.createSeachCardMarkup)(a,r,l,n,c.homePageNews,"beforeend"),s(l,a,_.LOCAL_STORAGE_INPUT_SEARCH_READ_KEY)})),r.length>0&&r.map(((a,t)=>{const r=e(o)(a.published_date).format("YY/MM/YYYY"),n=`${t}`;let i=e(m),d="No text";0!==a.media.length&&(i=`${a.media[0]["media-metadata"][2].url}`,d=`${a.media[0].caption}`),(0,l.createPopularCardMarkup)(a,r,n,c.homePageNews,"beforeend",i,d),s(n,a,c.LOCAL_STORAGE_POPULAR_READ_KEY),g.classList.add("visually-hidden")})),p.value=""}else g.classList.remove("visually-hidden")}h.addEventListener("click",R),document.addEventListener("keydown",(e=>{"Enter"===e.code&&(R(),u())}));
//# sourceMappingURL=favorite.d119129a.js.map
