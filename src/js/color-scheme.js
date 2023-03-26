
const page = document.querySelector("body");
const toggleBtn = document.querySelector(".toggle-button");

toggleBtn.onclick = function () {
    page.classList.toggle("light-theme");
    page.classList.toggle("dark-theme");
}




