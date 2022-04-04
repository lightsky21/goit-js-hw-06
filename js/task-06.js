const inputValidationEl = document.querySelector('#validation-input');
const inputValidationElDataLength = inputValidationEl.dataset.length;


function onInputValidationElBlur(event) {
    const inputValidationElValue = event.currentTarget.value.trim();
    // const inputValidationElValueArr = inputValidationElValue.split('');
   
    // if (inputValidationElValueArr.length === Number(inputValidationElDataLength)) {
    //      inputValidationEl.classList.add('valid')
    //  } else {inputValidationEl.classList.add('invalid')}
    if (inputValidationElValue.length === Number(inputValidationElDataLength)) {
        inputValidationEl.classList.add('valid');
        inputValidationEl.classList.remove('invalid');
    } else {
        inputValidationEl.classList.add('invalid');
        inputValidationEl.classList.remove('valid');
    }

}

inputValidationEl.addEventListener('blur', onInputValidationElBlur)
