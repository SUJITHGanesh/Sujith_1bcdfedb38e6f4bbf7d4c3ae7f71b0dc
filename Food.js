// Product data
const products = [
    { id: 1, name: 'Pizza', price: 10.99 },
    { id: 2, name: 'Burger', price: 5.99 },
    { id: 3, name: 'Pasta', price: 7.99 },
    { id: 4, name: 'Salad', price: 4.99 }
];

// Cart items
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Function to add products to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Function to display cart items
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>No items in the cart.</p>';
        cartTotal.innerHTML = '<p>Total: $0.00</p>';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    
    cartTotal.innerHTML = `<p>Total: $${total.toFixed(2)}</p>`;
}

// Initialize
displayProducts();
