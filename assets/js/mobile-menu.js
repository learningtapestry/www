const burgerMenu = document.querySelector(".mobile-burger-menu")
const menu = document.querySelector(".mobile-menu .menu")
const closeMenu = document.querySelector(".mobile-menu .close-menu")

burgerMenu.addEventListener("click", function () {
  menu.classList.toggle("open")
})

closeMenu.addEventListener("click", function () {
  menu.classList.remove("open")
})