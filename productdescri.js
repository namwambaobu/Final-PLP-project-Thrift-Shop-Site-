document.addEventListener('DOMContentLoaded', function() {
    // Simulated selected product data (replace with actual data)
    const selectedProduct = {
        id: 1,
        name: 'Vintage Leather Bag',
        description: 'This vintage leather bag is made from high-quality leather and features a spacious interior with multiple pockets. Perfect for everyday use or special occasions.',
        price: 120.00,
        imageUrl: 'path/to/image.jpg' // Replace with actual image path
    };

    // Populate product details in the DOM
    const productNameElement = document.getElementById('product-name');
    const productDescriptionElement = document.getElementById('product-description');
    const productPriceElement = document.getElementById('product-price');
    const productImageElement = document.getElementById('product-image');

    productNameElement.textContent = selectedProduct.name;
    productDescriptionElement.textContent = selectedProduct.description;
    productPriceElement.textContent = `Price: $${selectedProduct.price.toFixed(2)}`;
    productImageElement.src = selectedProduct.imageUrl;

    // Add to Cart button click handler
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
        alert(`${selectedProduct.name} has been added to your cart!`);
        // Simulated adding to cart (replace with actual logic)
        // e.g., update cart in local storage, session, or backend
    });
});

function openHomePage() {
    window.location.href = 'homepage.html';
}
