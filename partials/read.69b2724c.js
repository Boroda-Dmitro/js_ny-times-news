var inputField=document.querySelector(".search-field"),openSearchBtn=document.querySelector(".open-search"),searchBtn=document.querySelector(".search-button");function showSearchField(){inputField.classList.contains("show-item")?(inputField.classList.remove("show-item"),openSearchBtn.style.display="none"):(inputField.classList.add("show-item"),searchBtn.style.display="block",openSearchBtn.style.display="none")}openSearchBtn.addEventListener("click",showSearchField);
//# sourceMappingURL=read.69b2724c.js.map