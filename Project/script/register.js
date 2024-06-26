/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye, confirmPass, confirmEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye);
    const confirmInput = document.getElementById(confirmPass),
          confirmIconEye = document.getElementById(confirmEye);

    iconEye.addEventListener('click', () => {
        // Change password to text
        if (input.type === 'password') {
            input.type = 'text';
            iconEye.classList.add('ri-eye-line');
            iconEye.classList.remove('ri-eye-off-line');
        } else {
            input.type = 'password';
            iconEye.classList.remove('ri-eye-line');
            iconEye.classList.add('ri-eye-off-line');
        }
    });

    confirmIconEye.addEventListener('click', () => {
        // Change confirm password to text
        if (confirmInput.type === 'password') {
            confirmInput.type = 'text';
            confirmIconEye.classList.add('ri-eye-line');
            confirmIconEye.classList.remove('ri-eye-off-line');
        } else {
            confirmInput.type = 'password';
            confirmIconEye.classList.remove('ri-eye-line');
            confirmIconEye.classList.add('ri-eye-off-line');
        }
    });
};

// Initialize the showHiddenPass function with IDs
showHiddenPass('login-pass', 'login-eye', 'confirm-pass', 'confirm-eye');

/*=============== FORM SUBMISSION ===============*/
const form = document.getElementById('login-form');
const title = document.getElementById('form-title');
const submitButton = document.getElementById('submit-button');
const usernameBox = document.getElementById('username-box');
const confirmPassBox = document.getElementById('confirm-pass-box');

let isLoginMode = false;
let validEmail = '';
let validPassword = '';

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const emailInput = document.getElementById('login-email').value;
    const passwordInput = document.getElementById('login-pass').value;

    if (!isLoginMode) {
        const confirmPassInput = document.getElementById('confirm-pass').value;
        
        // Validate if password and confirm password match
        if (passwordInput !== confirmPassInput) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // Save the email and password entered during registration
        validEmail = emailInput;
        validPassword = passwordInput;

        // Change title and button text to "Login"
        title.textContent = 'Login';
        submitButton.textContent = 'Login';
        
        // Hide username and confirm password inputs
        usernameBox.classList.add('hidden');
        confirmPassBox.classList.add('hidden');
        
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
