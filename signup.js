document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const address = JSON.parse(localStorage.getItem('address'));
    if (!address) {
        alert('Please provide your address details first!');
        return;
    }

    localStorage.setItem('user', JSON.stringify({ username, email, password, address }));

    window.location.href = 'homepage.html';
});

document.getElementById('address-btn').addEventListener('click', function() {
    window.location.href = 'address.html';
});
