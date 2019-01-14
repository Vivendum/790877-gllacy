var open_popup_connection = document.querySelector(".button-connection");
var popup_connection = document.querySelector(".modal-connection");
var overlay = document.querySelector(".overlay");
var focus_connection_name = popup_connection.querySelector("[name=name]");
var close_popup_connection = popup_connection.querySelector(".modal-close");

open_popup_connection.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_connection.classList.add("js-modal-open");
  overlay.classList.add("js-modal-open");
  focus_connection_name.focus();
  // close_popup_connection.addEventListener("focus", function () {
    // window.addEventListener("keydown", function (evt) {
      // if (evt.keyCode === 9) {
        // focus_connection_name.focus();
      // }
    // });
  // });
});

close_popup_connection.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_connection.classList.remove("js-modal-open");
  overlay.classList.remove("js-modal-open");
});

close_popup_connection.addEventListener("focus", function () {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 9) {
      focus_connection_name.focus();
    }
  });
});
