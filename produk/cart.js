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
        const formattedPrice = item.price.toLocaleString('id-ID');
        li.textContent = `${item.name} - Rp ${formattedPrice}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Hapus';
        deleteBtn.className = 'delete-btn'; 
        deleteBtn.onclick = () => removeFromCart(item);

        li.appendChild(deleteBtn);
        cartItems.appendChild(li);
    });
}

function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem !== item);
    displayCart();
}

function openCheckoutPopup() {
    const popup = document.getElementById('checkout-popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    const checkoutPopup = document.getElementById('checkout-popup');
    const generalPopup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    if (checkoutPopup.style.display === 'block') {
        checkoutPopup.style.display = 'none';
    }

    if (generalPopup.style.display === 'block') {
        generalPopup.style.display = 'none';
    }

    overlay.style.display = 'none';
}


function proceedToCheckout() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const cod = document.getElementById('cod').checked;
    const dana = document.getElementById('dana').checked;

    if (!name || !phone || !address) {
        alert('Silakan lengkapi semua kolom input.');
        return;
    }

    let paymentMethod = '';
    if (cod) {
        paymentMethod = 'COD';
    } else if (dana) {
        paymentMethod = 'Transfer Dana';
    } else {
        alert('Pilih salah satu metode pembayaran.');
        return;
    }

    // Lakukan proses checkout dengan informasi yang diperoleh
    // Contoh:
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    let checkoutInfo = {
        name: name,
        phone: phone,
        address: address,
        paymentMethod: paymentMethod,
        total: total
    };

    // Di sini bisa dilakukan pengiriman data checkout ke server atau proses lainnya
    // Misalnya, tampilkan informasi checkout atau lakukan pengiriman data dengan fetch ke API

    // Setelah proses checkout selesai, tutup popup checkout
    closePopup();
    showPopup(`Checkout berhasil dengan total belanja: Rp ${total}`);
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
