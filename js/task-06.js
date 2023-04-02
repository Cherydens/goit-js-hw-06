const textInputEl = document.querySelector('#validation-input');
console.log(textInputEl.dataset.length);
textInputEl.addEventListener('blur', () => {
  if (textInputEl.value.length === Number(textInputEl.dataset.length)) {
    textInputEl.classList.remove('invalid');
    textInputEl.classList.add('valid');
    return;
  }

  textInputEl.classList.remove('valid');
  textInputEl.classList.add('invalid');
});
