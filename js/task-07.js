const inputRangeEl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
spanText.style.fontSize = `${inputRangeEl.value}px`; 

function onInputRangeElInput(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;  
};

inputRangeEl.addEventListener('input', onInputRangeElInput);