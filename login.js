document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Fetch username and password values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Basic validation - check if fields are not empty
        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            return;
        }

        // If validation passes, you can proceed with form submission
        // For demonstration, you can redirect to another page
        window.location.href = './homepage.html'; // Replace with actual redirect URL
    });
});
