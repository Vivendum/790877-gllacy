var body = document.querySelector("body");
var body_color_1 = document.querySelector("#advertising-product-1");
var body_color_1_for_ie = document.querySelector(".button-slider-1");
var body_color_2 = document.querySelector("#advertising-product-2");
var body_color_2_for_ie = document.querySelector(".button-slider-2");
var body_color_3 = document.querySelector("#advertising-product-3");
var body_color_3_for_ie = document.querySelector(".button-slider-3");
var open_popup_connection = document.querySelector(".button-connection");
var overlay = document.querySelector(".overlay");
var popup_connection = document.querySelector(".modal-connection");
var close_popup_connection = popup_connection.querySelector(".modal-close");
var form_popup_connection = popup_connection.querySelector("form");
var name_form_popup_connection = form_popup_connection.querySelector("[name=name]");
var email_form_popup_connection = form_popup_connection.querySelector("[name=email]");
var comment_form_popup_connection = form_popup_connection.querySelector("[name=comment]");
var button_form_popup_connection = form_popup_connection.querySelector(".button");

body_color_1.addEventListener("focus", function () {
  body.classList.add("js-color-1");
  body.classList.remove("js-color-2");
  body.classList.remove("js-color-3");
});

body_color_1_for_ie.addEventListener("click", function () {
  body.classList.add("js-color-1");
  body.classList.remove("js-color-2");
  body.classList.remove("js-color-3");
});

body_color_2.addEventListener("focus", function () {
  body.classList.add("js-color-2");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-3");
});

body_color_2_for_ie.addEventListener("click", function () {
  body.classList.add("js-color-2");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-3");
});

body_color_3.addEventListener("focus", function () {
  body.classList.add("js-color-3");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-2");
});

body_color_3_for_ie.addEventListener("click", function () {
  body.classList.add("js-color-3");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-2");
});

open_popup_connection.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("js-modal-open");
  popup_connection.classList.add("js-modal-open");
  popup_connection.classList.add("js-animation-modal-open");
  name_form_popup_connection.focus();
});

form_popup_connection.addEventListener("submit", function (evt) {
  if (!name_form_popup_connection.value || !email_form_popup_connection.value || !comment_form_popup_connection.value) {
    evt.preventDefault();
    popup_connection.classList.add("js-animation-modal-error");
  };
});

button_form_popup_connection.addEventListener("click", function () {
  popup_connection.classList.remove("js-animation-modal-open");
  popup_connection.classList.remove("js-animation-modal-error");
});

close_popup_connection.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("js-modal-open");
  popup_connection.classList.remove("js-modal-open");
  popup_connection.classList.remove("js-animation-modal-open");
  popup_connection.classList.remove("js-animation-modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup_connection.classList.contains("js-modal-open")) {
      evt.preventDefault();
      overlay.classList.remove("js-modal-open");
      popup_connection.classList.remove("js-modal-open");
      popup_connection.classList.remove("js-animation-modal-open");
      popup_connection.classList.remove("js-animation-modal-error");
    };
  };
});
