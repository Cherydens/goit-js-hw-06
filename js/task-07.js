const fontSizeControlEl = document.querySelector('input#font-size-control');

const textEl = document.querySelector('span#text');

fontSizeControlEl.addEventListener('input', event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
