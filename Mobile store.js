// Array to store products
let products = [];
// Array to store customers
let customers = [];

// Product form submission
document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const productName = document.getElementById('product-name').value;
  const productBrand = document.getElementById('product-brand').value;
  const productPrice = document.getElementById('product-price').value;
  const productStock = document.getElementById('product-stock').value;

  const product = {
    name: productName,
    brand: productBrand,
    price: productPrice,
    stock: productStock
  };

  products.push(product);
  displayProducts();

  // Clear form
  document.getElementById('product-form').reset();
});

// Customer form submission
document.getElementById('customer-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const customerName = document.getElementById('customer-name').value;
  const customerPhone = document.getElementById('customer-phone').value;
  const customerEmail = document.getElementById('customer-email').value;

  const customer = {
    name: customerName,
    phone: customerPhone,
    email: customerEmail
  };

  customers.push(customer);
  displayCustomers();

  // Clear form
  document.getElementById('customer-form').reset();
});

// Display products in the product list
function displayProducts() {
  const productUl = document.getElementById('products');
  productUl.innerHTML = '';

  products.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${product.name} - ${product.brand} - $${product.price} - Stock: ${product.stock}
      <button onclick="deleteProduct(${index})">Delete</button>
    `;
    productUl.appendChild(li);
  });
}

// Display customers in the customer list
function displayCustomers() {
  const customerUl = document.getElementById('customers');
  customerUl.innerHTML = '';

  customers.forEach((customer, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${customer.name} - Phone: ${customer.phone} - Email: ${customer.email}
      <button onclick="deleteCustomer(${index})">Delete</button>
    `;
    customerUl.appendChild(li);
  });
}

// Delete product
function deleteProduct(index) {
  products.splice(index, 1);
  displayProducts();
}

// Delete customer
function deleteCustomer(index) {
  customers.splice(index, 1);
  displayCustomers();
}
