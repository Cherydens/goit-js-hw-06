const controlsEl = document.querySelector('#controls');
const numberInputEl = controlsEl.querySelector('input');
const createBtnEl = controlsEl.querySelector('button[data-create]');
const destroyBtnEl = controlsEl.querySelector('button[data-destroy]');
const boxesContainerEl = document.querySelector('#boxes');

let boxSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxArray = [];
  for (let i = 0; i < amount; i += 1) {
    const bgColor = getRandomHexColor();
    boxArray.push(
      `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${bgColor};"></div>`
    );
    boxSize += 10;
  }
  boxesContainerEl.insertAdjacentHTML('beforeend', boxArray.join(''));
  return boxSize;
}

function destroyBoxes() {
  boxesContainerEl.innerHTML = '';
}

createBtnEl.addEventListener('click', () => {
  const amount = numberInputEl.value;
  createBoxes(amount);
});

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes();
  boxSize = 30;
});
