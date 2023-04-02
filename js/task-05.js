const nameInputEl = document.querySelector('input#name-input');
const nameOutputEl = document.querySelector('span#name-output');

nameInputEl.addEventListener('input', event => {
  nameOutputEl.textContent = event.currentTarget.value;
  if (!event.currentTarget.value) {
    nameOutputEl.textContent = 'Anonymous';
  }
});
