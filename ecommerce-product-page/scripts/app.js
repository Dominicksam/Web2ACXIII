const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const quantityDisplay = document.querySelector('.quantity');
const cartCount = document.querySelector('.cart-count');
const addToCartBtn = document.querySelector('.add-to-cart');

let quantity = 1;

plusBtn.addEventListener('click', () => {
  quantity++;
  quantityDisplay.textContent = quantity;
});

minusBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    quantityDisplay.textContent = quantity;
  }
});

addToCartBtn.addEventListener('click', () => {
  cartCount.textContent = quantity;
  alert(`${quantity} item(s) added to cart!`);
});
// app.js - E-commerce Product Page Script
// This script handles the quantity increment/decrement and cart functionality