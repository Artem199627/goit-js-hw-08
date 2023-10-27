import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("input", throttle(onFormInput, 500));


function onFormSubmit(evt) {
    evt.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
};


function onFormInput() {
    let messageData = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messageData));
    return messageData;
}

function inputField() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        form.elements.email.value = JSON.parse(savedMessage).email;
        form.elements.message.value = JSON.parse(savedMessage).message;
    }
}

inputField();