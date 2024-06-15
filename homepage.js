document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.product-container');
    const cartCounter = document.querySelector('.cart');
    const products = [
        { name: 'Product 1', price: '$10.00', image: 'product1.jpg' },
        { name: 'Product 2', price: '$15.00', image: 'product2.jpg' },
        { name: 'Product 3', price: '$20.00', image: 'product3.jpg' },
        { name: 'Product 4', price: '$25.00', image: 'product4.jpg' },
        { name: 'Product 5', price: '$30.00', image: 'product5.jpg' },
        { name: 'Product 6', price: '$35.00', image: 'product6.jpg' },
        { name: 'Product 7', price: '$40.00', image: 'product7.jpg' },
        { name: 'Product 8', price: '$45.00', image: 'product8.jpg' },
        { name: 'Product 9', price: '$50.00', image: 'product9.jpg' },
        { name: 'Product 10', price: '$55.00', image: 'product10.jpg' },
        { name: 'Product 11', price: '$60.00', image: 'product11.jpg' },
        { name: 'Product 12', price: '$65.00', image: 'product12.jpg' },
        { name: 'Product 13', price: '$70.00', image: 'product13.jpg' },
        { name: 'Product 14', price: '$75.00', image: 'product14.jpg' },
        { name: 'Product 15', price: '$80.00', image: 'product15.jpg' },
        { name: 'Product 16', price: '$85.00', image: 'product16.jpg' },
        { name: 'Product 17', price: '$90.00', image: 'product17.jpg' },
        { name: 'Product 18', price: '$95.00', image: 'product18.jpg' },
        { name: 'Product 19', price: '$100.00', image: 'product19.jpg' },
        { name: 'Product 20', price: '$105.00', image: 'product20.jpg' },
    ];

    let selectedProducts = [];

    function createProductElement(product, index) {
        const productElement = document.createElement('div');
        productElement.className = 'product-item';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">${product.price}</p>
            <button class="add-to-cart-btn" data-index="${index}">Add to Cart</button>
        `;
        return productElement;
    }

    products.forEach((product, index) => {
        productContainer.appendChild(createProductElement(product, index));
    });

    function updateCartCounter() {
        cartCounter.textContent = `Cart (${selectedProducts.length})`;
    }

    productContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const productIndex = event.target.getAttribute('data-index');
            selectedProducts.push(products[productIndex]);
            updateCartCounter();
            localStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));

            // Remove the product from the product container
            event.target.closest('.product-item').remove();
        }
    });

    // Handle carousel navigation
    let currentIndex = 0;

    function showProduct(index) {
        const items = document.querySelectorAll('.product-item');
        items.forEach((item, idx) => {
            item.classList.remove('visible');
            if (idx === index) {
                item.classList.add('visible');
            }
        });
    }

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : products.length - 1;
        productContainer.style.transform = `translateX(-${currentIndex * 220}px)`;
        showProduct(currentIndex);
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex < products.length - 1) ? currentIndex + 1 : 0;
        productContainer.style.transform = `translateX(-${currentIndex * 220}px)`;
        showProduct(currentIndex);
    });

    // Initial display
    showProduct(currentIndex);
});

function openAccountPage() {
    window.location.href = 'account.html';
}

function openCartPage() {
    window.location.href = 'checkout.html';
}

function openHomePage() {
    window.location.href = 'homepage.html';
}