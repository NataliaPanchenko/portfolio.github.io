"use strict";

var hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");
hamburger.addEventListener("click", function () {
  menu.classList.add("active");
});
closeElem.addEventListener("click", function () {
  menu.classList.remove("active");
});
document.addEventListener("keydown", function (e) {
  if (e.code === "Escape" && menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});
var counters = document.querySelectorAll(".skills__ratings-counter"),
    lines = document.querySelectorAll(".skills__ratings-line span");
counters.forEach(function (item, i) {
  lines[i].style.width = item.innerHTML;
});
var initPosition = document.documentElement.scrollTop,
    step = 450;
var instagram = document.querySelectorAll("#instagram"),
    facebook = document.querySelectorAll("#gmail"),
    github = document.querySelectorAll("#github");
window.addEventListener("scroll", function (e) {
  if (Math.abs(document.documentElement.scrollTop - initPosition) >= step) {
    handler();
  } else {
    handlerWhite();
  }
});

function toBlack(e) {
  e.forEach(function (e) {
    e.setAttribute("fill", "black");
  });
}

function toWhite(e) {
  e.forEach(function (e) {
    e.setAttribute("fill", "white");
  });
}

function handler() {
  document.querySelector(".sidepanel__text").style.color = "black";
  document.querySelector(".sidepanel__divider").style.background = "black";
  toBlack(instagram);
  toBlack(facebook);
  toBlack(github);
}

function handlerWhite() {
  document.querySelector(".sidepanel__text").style.color = "white";
  document.querySelector(".sidepanel__divider").style.background = "white";
  toWhite(instagram);
  toWhite(facebook);
  toWhite(github);
}