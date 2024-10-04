let products = [];

const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');

// Handle form submission
productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get product details
    const productName = document.getElementById('product-name').value;
    const productBrand = document.getElementById('product-brand').value;
    const productPrice = document.getElementById('product-price').value;
    const productStock = document.getElementById('product-stock').value;

    // Create a new product object
    const product = {
        id: Date.now(),
        name: productName,
        brand: productBrand,
        price: Number(productPrice),
        stock: Number(productStock),
    };

    // Add product to the array
    products.push(product);

    // Clear the form
    productForm.reset();

    // Update the product list
    displayProducts();
});

// Function to display products
function displayProducts() {
    productList.innerHTML = ''; // Clear the existing list

    products.forEach((product) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.stock}</td>
            <td class="actions">
                <button onclick="deleteProduct(${product.id})">Delete</button>
            </td>
        `;

        productList.appendChild(row);
    });
}

// Function to delete a product
function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    displayProducts(); // Update the list after deletion
}
