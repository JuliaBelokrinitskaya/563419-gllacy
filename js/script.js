var feedback_button = document.querySelector(".feedback-button");

var feedback_wrapper = document.querySelector(".modal-feedback-wrapper");
var feedback_popup = feedback_wrapper.querySelector(".modal-feedback");
var feedback_close = feedback_popup.querySelector(".modal-close");

var feedback_form = feedback_popup.querySelector(".feedback-form");
var feedback_name = feedback_popup.querySelector("#feedback-name");
var feedback_email = feedback_popup.querySelector("#feedback-email");
var feedback_message = feedback_popup.querySelector("#feedback-message");

var storage_name = localStorage.getItem("name");
var storage_email = localStorage.getItem("email");

feedback_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback_wrapper.classList.add("modal-show");
  if (storage_name && storage_email) {
    feedback_name.value = storage_name;
    feedback_email.value = storage_email;
    feedback_message.focus();
  } else {
    feedback_name.focus();
  }
});

feedback_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback_wrapper.classList.remove("modal-show");
  feedback_popup.classList.remove("modal-error");
});

feedback_form.addEventListener("submit", function (evt) {
  if (!feedback_name.value || !feedback_email.value || !feedback_message.value) {
    evt.preventDefault();
    feedback_popup.classList.remove("modal-error");
    feedback_popup.offsetWidth = feedback_popup.offsetWidth;
    feedback_popup.classList.add("modal-error");
  } else {
    localStorage.setItem("name", feedback_name.value);
    localStorage.setItem("email", feedback_email.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedback_wrapper.classList.contains("modal-show")) {
      feedback_wrapper.classList.remove("modal-show");
      feedback_popup.classList.remove("modal-error");
    }
  }
});
