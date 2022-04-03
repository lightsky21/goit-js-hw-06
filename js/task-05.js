const inputEl = document.querySelector('#name-input');
const spanOutput = document.querySelector('#name-output');

function onInputElInput(event) {
    const inputElValue = inputEl.value.trim();
    
     
    if (inputElValue === '') {
        spanOutput.textContent = 'Anonymous';
    } else {spanOutput.textContent = event.currentTarget.value;}
    
    
};


inputEl.addEventListener('input', onInputElInput);