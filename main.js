let brg = document.querySelector(".menu__brg");
let menuList = document.querySelector(".menu__list");
let loginLinks = document.querySelector(".login__info");

brg.addEventListener("click", function (event) {
  brg.classList.toggle("active");
  loginLinks.classList.toggle("active");
  menuList.classList.toggle("active");

});
