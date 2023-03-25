const inputField = document.querySelector(".search-field");
const openSearchBtn = document.querySelector(".open-search");
const searchBtn = document.querySelector(".search-button");

function showSearchField() {
  if (inputField.classList.contains("show-item")) {
    inputField.classList.remove("show-item");
    openSearchBtn.style.display = "none";
    // openSearchBtn.style.display = "block";
} else {
    inputField.classList.add("show-item");
    searchBtn.style.display = "block";
    openSearchBtn.style.display = "none";
 }
}



openSearchBtn.addEventListener("click", showSearchField);