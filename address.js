document.getElementById('address-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const pickup = document.getElementById('pickup').value;

    const addressDetails = { fullname, phone, address, pickup };
    localStorage.setItem('address', JSON.stringify(addressDetails));

    window.location.href = 'signup.html';
});

function openHomePage() {
    window.location.href = 'homepage.html';
}
