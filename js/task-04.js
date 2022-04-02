const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');
const spanValueEl = document.querySelector('#value');

let counterValue = 0;

 


function onButtonDecrementElClick() {
    counterValue -= 1;
    spanValueEl.textContent = counterValue;
}

function onButtonIncrementClick() {
    counterValue += 1;
    spanValueEl.textContent = counterValue;
}

buttonDecrementEl.addEventListener('click', onButtonDecrementElClick
);

buttonIncrementEl.addEventListener('click', onButtonIncrementClick);