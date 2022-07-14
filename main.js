"use strict";

let brg = document.querySelector(".menu__brg");
let menuList = document.querySelector(".menu__list");
let loginLinks = document.querySelector(".login__info");

brg.addEventListener("click", function (event) {
  brg.classList.toggle("active");
  loginLinks.classList.toggle("active");
  menuList.classList.toggle("active");
});

function show_hide_password(target) {
  let input = document.querySelector('.form__password')
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}
