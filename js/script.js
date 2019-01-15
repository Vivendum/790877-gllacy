var body_color_1 = document.querySelector("#advertising-product-1");
var body_color_2 = document.querySelector("#advertising-product-2");
var body_color_3 = document.querySelector("#advertising-product-3");
var body = document.querySelector("body");
var open_popup_connection = document.querySelector(".button-connection");
var overlay = document.querySelector(".overlay");
var popup_connection = document.querySelector(".modal-connection");
var close_popup_connection = popup_connection.querySelector(".modal-close");
var form_popup_connection = popup_connection.querySelector("form");
var name_form_popup_connection = form_popup_connection.querySelector("[name=name]");
var email_form_popup_connection = form_popup_connection.querySelector("[name=email]");
var comment_form_popup_connection = form_popup_connection.querySelector("[name=comment]");
var button_form_popup_connection = form_popup_connection.querySelector(".button");
var is_storage_support = true;
var storage_name = localStorage.getItem("name");
var storage_email = localStorage.getItem("email");

try {
  storage_name = localStorage.getItem("name");
  storage_email = localStorage.getItem("email");
} catch (err) {
  is_storage_support = false;
};

body_color_1.addEventListener("focus", function () {
  body.classList.add("js-color-1");
  body.classList.remove("js-color-2");
  body.classList.remove("js-color-3");
});

body_color_2.addEventListener("focus", function () {
  body.classList.add("js-color-2");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-3");
});

body_color_3.addEventListener("focus", function () {
  body.classList.add("js-color-3");
  body.classList.remove("js-color-1");
  body.classList.remove("js-color-2");
});

open_popup_connection.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("js-modal-open");
  popup_connection.classList.add("js-modal-open");
  popup_connection.classList.add("js-animation-modal-open");
  if (is_storage_support) {
    name_form_popup_connection.value = storage_name;
    email_form_popup_connection.value = storage_email;
    comment_form_popup_connection.focus();
  } else {
      name_form_popup_connection.focus();
    };
  close_popup_connection.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("js-modal-open");
    popup_connection.classList.remove("js-modal-open");
    popup_connection.classList.remove("js-animation-modal-open");
    popup_connection.classList.remove("js-animation-modal-error");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      overlay.classList.remove("js-modal-open");
      popup_connection.classList.remove("js-modal-open");
      popup_connection.classList.remove("js-animation-modal-open");
      popup_connection.classList.remove("js-animation-modal-error");
    };
  });
  form_popup_connection.addEventListener("submit", function (evt) {
    console.log(name_form_popup_connection.value);
    console.log(email_form_popup_connection.value);
    console.log(comment_form_popup_connection.value);
    if (!name_form_popup_connection.value || !email_form_popup_connection.value || !comment_form_popup_connection.value) {
      evt.preventDefault();
      console.log("Нужно заполнить все строки формы");
      popup_connection.classList.add("js-animation-modal-error");
    } else {
      localStorage.setItem("name", name_form_popup_connection.value);
      localStorage.setItem("email", email_form_popup_connection.value);
      overlay.classList.remove("js-modal-open");
      popup_connection.classList.remove("js-modal-open");
      popup_connection.classList.remove("js-animation-modal-open");
    };
    button_form_popup_connection.addEventListener("click", function () {
      popup_connection.classList.remove("js-animation-modal-error");
    });
  });
});
