const loginLink = document.querySelector('.button_login');
const modalWindow = document.querySelector('.modal_window');
const loginClose = document.querySelector('.button_close');
const loginForm = document.querySelector('.modal_form');
const loginInput = modalWindow.querySelector('.login_input');
const loginEmail = modalWindow.querySelector('.email_input');
const loginArea = modalWindow.querySelector('.text_area_input');

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}


loginLink.addEventListener('click', function () {
    modalWindow.classList.add('modal_show');

    if (storage) {
        loginInput.value = storage;
        loginEmail.focus();
    } else {
            loginInput.focus();
         }
});

loginClose.addEventListener('click', function () {
    modalWindow.classList.remove('modal_show');
    modalWindow.classList.remove('modal_error');
});

modalWindow.addEventListener('submit', function (evt) {
    if (!loginInput.value || !loginEmail.value || !loginArea.value) {
        evt.preventDefault();
        modalWindow.classList.remove("modal_error");
        modalWindow.offsetWidth = modalWindow.offsetWidth;
        modalWindow.classList.add("modal_error");
        console.log('wqe')
    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', loginInput.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      if (modalWindow.classList.contains("modal_show")) {
        evt.preventDefault();
        modalWindow.classList.remove("modal_show");
        modalWindow.classList.add("modal_error");
      }
    }
});