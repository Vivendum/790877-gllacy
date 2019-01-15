var body_color_1 = document.querySelector("#advertising-product-1");
var body_color_2 = document.querySelector("#advertising-product-2");
var body_color_3 = document.querySelector("#advertising-product-3");
var body = document.querySelector("body");
var open_popup_connection = document.querySelector(".button-connection");
var popup_connection = document.querySelector(".modal-connection");
var overlay = document.querySelector(".overlay");
var focus_connection_name = popup_connection.querySelector("[name=name]");
var close_popup_connection = popup_connection.querySelector(".modal-close");

body_color_1.addEventListener("focus", function (evt) {
  body.classList.add("js-color-1");
  body.classList.remove("js-color-2");
  body.classList.remove("js-color-3");
});

body_color_2.addEventListener("focus", function (evt) {
  body.classList.add("js-color-2");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-3");
});

body_color_3.addEventListener("focus", function (evt) {
  body.classList.add("js-color-3");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-2");
});

open_popup_connection.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_connection.classList.add("js-modal-open");
  overlay.classList.add("js-modal-open");
  focus_connection_name.focus();
});

close_popup_connection.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_connection.classList.remove("js-modal-open");
  overlay.classList.remove("js-modal-open");
});
