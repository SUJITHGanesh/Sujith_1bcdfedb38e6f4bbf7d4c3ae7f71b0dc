// Store data in arrays
let products = [];
let customers = [];

// Function to switch between sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden-section');
        section.classList.remove('active-section');
    });
    document.getElementById(sectionId).classList.add('active-section');
    document.getElementById(sectionId).classList.remove('hidden-section');
}

// Handle product form submission
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    products.push({ name: productName, price: productPrice });

    updateProductList();
    updateStats();
});

// Update product list in UI
function updateProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        productList.appendChild(li);
    });
}

// Handle customer form submission
document.getElementById('customer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const customerName = document.getElementById('customer-name').value;
    const customerEmail = document.getElementById('customer-email').value;

    customers.push({ name: customerName, email: customerEmail });

    updateCustomerList();
    updateStats();
});

// Update customer list in UI
function updateCustomerList() {
    const customerList = document.getElementById('customer-list');
    customerList.innerHTML = '';
    customers.forEach((customer, index) => {
        const li = document.createElement('li');
        li.textContent = `${customer.name} - ${customer.email}`;
        customerList.appendChild(li);
    });
}

// Update the dashboard stats
function updateStats() {
    document.getElementById('total-products').textContent = products.length;
    document.getElementById('total-customers').textContent = customers.length;
}
