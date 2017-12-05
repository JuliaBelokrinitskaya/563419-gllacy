var feedback_button=document.querySelector(".feedback-button"),feedback_wrapper=document.querySelector(".modal-feedback-wrapper"),feedback_popup=feedback_wrapper.querySelector(".modal-feedback"),feedback_close=feedback_popup.querySelector(".modal-close"),feedback_form=feedback_popup.querySelector(".feedback-form"),feedback_name=feedback_popup.querySelector("#feedback-name"),feedback_email=feedback_popup.querySelector("#feedback-email"),feedback_message=feedback_popup.querySelector("#feedback-message"),storage_name=localStorage.getItem("name"),storage_email=localStorage.getItem("email");feedback_button.addEventListener("click",function(e){e.preventDefault(),feedback_wrapper.classList.add("modal-show"),storage_name&&storage_email?(feedback_name.value=storage_name,feedback_email.value=storage_email,feedback_message.focus()):feedback_name.focus()}),feedback_close.addEventListener("click",function(e){e.preventDefault(),feedback_wrapper.classList.remove("modal-show"),feedback_popup.classList.remove("modal-error")}),feedback_form.addEventListener("submit",function(e){feedback_name.value&&feedback_email.value&&feedback_message.value?(localStorage.setItem("name",feedback_name.value),localStorage.setItem("email",feedback_email.value)):(e.preventDefault(),feedback_popup.classList.remove("modal-error"),feedback_popup.offsetWidth=feedback_popup.offsetWidth,feedback_popup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedback_wrapper.classList.contains("modal-show")&&(feedback_wrapper.classList.remove("modal-show"),feedback_popup.classList.remove("modal-error"))});
