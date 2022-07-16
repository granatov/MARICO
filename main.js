"use strict";

let brg = document.querySelector(".menu__brg");
let menuList = document.querySelector(".menu__list");
let loginLinks = document.querySelector(".login__info");
let body = document.querySelector("body");

brg.addEventListener("click", function (event) {
  brg.classList.toggle("active");
  loginLinks.classList.toggle("active");
  menuList.classList.toggle("active");
  body.classList.toggle("active");
});

function show_hide_password(target) {
  let input = document.querySelector(".form__password");
  if (input.getAttribute("type") == "password") {
    target.classList.add("view");
    input.setAttribute("type", "text");
  } else {
    target.classList.remove("view");
    input.setAttribute("type", "password");
  }
  return false;
}

let btns = document.querySelectorAll("*[data-modal-btn]");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let name = btns[i].getAttribute("data-modal-btn");
    let modal = document.querySelector("[data-modal-window = '" + name + "']");
    modal.style.display = "block";
    let close = modal.querySelector(".modal__close-window");
    close.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
}

window.onclick = function (event) {
  if (event.target.hasAttribute("data-modal-window")) {
    let modals = document.querySelectorAll("*[data-modal-window]");
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
};
