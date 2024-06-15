// JavaScript for handling payment status
document.addEventListener('DOMContentLoaded', function() {
    // Simulate payment status update
    const paymentStatusElement = document.getElementById('payment-status');

    // Simulated asynchronous payment verification (replace with actual logic)
    setTimeout(function() {
        // Simulated success message
        paymentStatusElement.textContent = 'Payment successful! Redirecting...';
        // Redirect to success page after 3 seconds (replace with actual redirect logic)
        setTimeout(function() {
            window.location.href = './payment-success.html';
        }, 3000);
    }, 5000); // Simulated delay for payment verification (5 seconds)
});

function openHomePage() {
    window.location.href = 'homepage.html';
}