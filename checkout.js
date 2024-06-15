document.addEventListener('DOMContentLoaded', () => {
    const selectedProductsContainer = document.querySelector('.selected-products');
    const cartCounter = document.querySelector('.cart');
    const backBtn = document.querySelector('.back-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');

    // Fetch selected products from localStorage
    const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts')) || [];

    function createSelectedProductElement(product) {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        return productElement;
    }

    // Display selected products
    selectedProducts.forEach(product => {
        selectedProductsContainer.appendChild(createSelectedProductElement(product));
    });

    // Update cart counter
    function updateCartCounter() {
        cartCounter.textContent = `Cart (${selectedProducts.length})`;
    }

    // Handle back to shopping button click
    backBtn.addEventListener('click', () => {
        window.location.href = 'homepage.html';
    });

    // Handle proceed to payment button click
    checkoutBtn.addEventListener('click', () => {
        alert('Proceeding to payment...');
        // Here, you can add code to handle the payment process
    });

    // Initial update of cart counter
    updateCartCounter();
});

function openHomePage() {
    window.location.href = 'homepage.html';
}
