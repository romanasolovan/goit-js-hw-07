const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', function (event) {
    const name = event.currentTarget.value.trim();
    output.textContent = name === '' ? 'Anonymous' : name;
});
