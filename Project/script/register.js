/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye);

   iconEye.addEventListener('click', () => {
       // Change password to text
       if(input.type === 'password'){
           // Switch to text
           input.type = 'text';

           // Icon change
           iconEye.classList.add('ri-eye-line');
           iconEye.classList.remove('ri-eye-off-line');
       } else{
           // Change to password
           input.type = 'password';

           // Icon change
           iconEye.classList.remove('ri-eye-line');
           iconEye.classList.add('ri-eye-off-line');
       }
   });
};

showHiddenPass('login-pass', 'login-eye');

/*=============== FORM SUBMISSION ===============*/
const form = document.getElementById('login-form');
const title = document.getElementById('form-title');
const submitButton = document.getElementById('submit-button');

let isLoginMode = false;
let validEmail = '';
let validPassword = '';

form.addEventListener('submit', (event) => {
   event.preventDefault(); // Prevent form from submitting the traditional way

   const emailInput = document.getElementById('login-email').value;
   const passwordInput = document.getElementById('login-pass').value;

   if (!isLoginMode) {
       // Save the email and password entered during registration
       validEmail = emailInput;
       validPassword = passwordInput;

       // Change title and button text to "Login"
       title.textContent = 'Login';
       submitButton.textContent = 'Login';
       isLoginMode = true;
   } else {
       // Validate the login credentials
       if (emailInput === validEmail && passwordInput === validPassword) {
           // If credentials are correct, go to home.html
           window.location.href = 'home.html';
       } else {
           // If credentials are incorrect, show an error message
           alert('Incorrect email or password. Please try again.');
       }
   }
});
