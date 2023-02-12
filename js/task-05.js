const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');
inputElement.addEventListener('input', event => {
    if (inputElement.value.trim() === '') {
        return (spanElement.textContent = 'Anonymous');
    }
    spanElement.textContent = event.currentTarget.value;
});
