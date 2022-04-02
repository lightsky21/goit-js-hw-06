const inputEl = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

function onInputElInput(event) {
    if ( inputEl.value === '') {
        spanOutput.textContent = 'Anonymous';
    } else {spanOutput.textContent = event.currentTarget.value;}
    
    
};


inputEl.addEventListener('input', onInputElInput);