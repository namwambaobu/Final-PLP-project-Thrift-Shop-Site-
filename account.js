document.addEventListener("DOMContentLoaded", function() {
    // Simulate the number of products purchased by the user
    let numberOfProductsPurchased = 5; // This should be dynamically fetched based on real data

    // Calculate reward points
    let rewardPoints = calculateRewardPoints(numberOfProductsPurchased);

    // Display reward points on the page
    document.getElementById("account-points").innerText = rewardPoints;
});

function calculateRewardPoints(numberOfProducts) {
    const pointsPerProduct = 10;
    return numberOfProducts * pointsPerProduct;
}

function openCartPage() {
    window.location.href = 'checkout.html';
}

function openHomePage() {
    window.location.href = 'homepage.html';
}
