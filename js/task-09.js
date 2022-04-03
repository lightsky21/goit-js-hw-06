function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');


function onButtonElClick() {
  const RandomHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = RandomHexColor;
  spanEl.textContent = RandomHexColor;
}

buttonEl.addEventListener('click', onButtonElClick);