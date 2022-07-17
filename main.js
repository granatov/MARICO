"use strict";

const brg = document.querySelector(".menu__brg");
const menuList = document.querySelector(".menu__list");
const loginLinks = document.querySelector(".login__info");
const body = document.querySelector("body");

brg.addEventListener("click", function (event) {
  brg.classList.toggle("active");
  loginLinks.classList.toggle("active");
  menuList.classList.toggle("active");
  body.classList.toggle("active");
});

function show_hide_password(target) {
  const input = document.querySelector(".form__password");
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
    const name = btns[i].getAttribute("data-modal-btn");
    const modal = document.querySelector("[data-modal-window = '" + name + "']");
    modal.style.display = "block";
    const close = modal.querySelector(".modal__close-window");
    close.addEventListener("click", function () {
      modal.style.display = "none";
    });
  });
}

window.onclick = function (event) {
  if (event.target.hasAttribute("data-modal-window")) {
    const modals = document.querySelectorAll("*[data-modal-window]");
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
    }
  }
};

let payBtn = document.querySelector(".modal__btn");

for (let i = 0; i < payBtn.length; i++) {
  const name = payBtn[i].getAttribute("modal-apply");

  const modal = document.querySelector(
    '[data-modal-window-apply = "' + name + '"]'
  );
  modal.style.display = "block";
}


