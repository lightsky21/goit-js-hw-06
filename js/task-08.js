const loginFormEl = document.querySelector('.login-form');


function onLoginFormEl(event) {
   event.preventDefault();
    
   const { elements: { email, password }} = event.currentTarget;
//     console.log( email.value);
    
    if (email.value === '' || password.value === '') {
        alert('All fields are required!');
        
    } else {
        console.log({
        email: email.value,
        password: password.value,
        }
        )
        event.currentTarget.reset();
    } 
    
}

loginFormEl.addEventListener('submit', onLoginFormEl)
