function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let widthBox = 30;
  let heightBox = 30;

  let boxesArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');

    box.style.backgroundColor = getRandomHexColor();
    box.style.width = widthBox + 'px';
    box.style.height = heightBox + 'px';

    widthBox += 10;
    heightBox += 10;

    boxesArray.push(box);
  }
  refs.boxes.append(...boxesArray);
}

function onBtnCreate() {
  createBoxes(refs.input.value);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}

refs.btnCreate.addEventListener('click', onBtnCreate);

refs.btnDestroy.addEventListener('click', destroyBoxes);
