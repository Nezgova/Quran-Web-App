function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic client-side validation
    if (username === '' || password === '') {
        document.getElementById('error-message').innerText = 'Please enter both username and password.';
    } else {
        // Your logic for successful login goes here
        alert('Login successful!'); // Replace with your actual login logic
    }
}