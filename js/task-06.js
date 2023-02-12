const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
    textInput.classList.remove('invalid');
    if (textInput.value.length === Number(textInput.dataset.length)) {
        return textInput.classList.add('valid');
    }
    textInput.classList.add('invalid');
});
