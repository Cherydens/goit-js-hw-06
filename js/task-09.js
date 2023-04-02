function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');

const btnChangeColorEl = document.querySelector('button.change-color');

const textBgColorEl = document.querySelector('span.color');

btnChangeColorEl.addEventListener('click', () => {
  const bcgColor = getRandomHexColor();
  bodyEl.style.backgroundColor = bcgColor;
  textBgColorEl.textContent = bcgColor;
});
