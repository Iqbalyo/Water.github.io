let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  showPopup(`Produk "${productName}" telah ditambahkan ke keranjang.`);
  displayCart();
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp ${item.price}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.onclick = () => removeFromCart(item);
    li.appendChild(deleteBtn);
    cartItems.appendChild(li);
  });
}

function removeFromCart(item) {
  cart = cart.filter(cartItem => cartItem !== item);
  displayCart();
}

function checkout() {
  let total = cart.reduce((acc, item) => acc + item.price, 0);
  showPopup(`Total belanja: Rp ${total}`);
  cart = [];
  displayCart();
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  const popupContent = document.getElementById('popup-content');
  popupContent.textContent = message;
  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('overlay');
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

