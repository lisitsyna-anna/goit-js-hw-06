const refs = {
  inputFsControl: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.inputFsControl.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.text.style.fontSize = `${event.currentTarget.value}px`;
}
