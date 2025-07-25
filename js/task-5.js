function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color'); 
const span = document.querySelector('.color');
const body = document.body;

button.addEventListener('click', function () {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});