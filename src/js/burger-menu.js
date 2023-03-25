const menu = document.querySelector(".burger-menu");
const hamburger= document.querySelector(".burger-button");
const closeIcon= document.querySelector(".burger-close");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    hamburger.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    hamburger.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);