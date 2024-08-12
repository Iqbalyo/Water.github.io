class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <style>

            * {
    
    box-sizing: border-box;
    list-style: none;
    color: inherit;
    text-decoration: none;
    font-family: "Inter", sans-serif;
    scroll-behavior: smooth;
}
               header {
    width: 100%;
    background: white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
}

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                min-height: 100vh;
                overflow-x: hidden;
            }

                .logo {
    font-size: 30px;
    font-weight: bold;
    
}

.hamburger {
    display: none;
}

.nav-bar ul {
    display: flex;
    
}

.nav-bar ul li a {
    display: block;
    font-size: 20px;
    padding: 10px 25px;
    margin: 0 5px;
}


.login-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

.nav-bar ul li a:hover {
    background: #007bff;
    color: #fff;
    border-radius: 5px;
}

.nav-bar ul li a.active {
    background: #007bff;
    color: #fff;
    border-radius: 5px;
}

/* login */
.login-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}


.login-popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    justify-content: center;
    align-items: center;
}

.Log {
    background-color: #FF3D33;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}
.popup-content {
    background-color: #fefefe;
    padding: 20px;
    max-width: 400px;
    margin: auto;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    text-align: center;
}

.close {
    float: right;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #aaa;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

.input-container {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 15px;
}

.input-container .input-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
}

.input-container input {
    border: none;
    outline: none;
    font-size: 16px;
    width: 100%;
    padding: 10px;
}

.input-container input::placeholder {
    color: #ccc;
}

/* regis */
.register-popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    justify-content: center;
    align-items: center;
}

.text-login {
    margin-bottom: 50px;
    font-size: 20px;
}

.reg {
    background-color: #007bff;
    color: #fff;
    border: none;
    margin-top: 10px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
}

@media only screen and (max-width:  1320px) {
    header{
        padding: 0 50px;
    }
    
}
@media only screen and (max-width:  1100px) {
    header{
        padding: 0 30px;
    }
    
}
@media only screen and (max-width:  900px) {
    .hamburger {
        display: block;
        cursor: pointer;
    }

    .hamburger .line {
        background: #007bff;
        width: 30px;
        height: 3px;
        margin: 6px 0;
    }
    .nav-bar {
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        width: 100vw;
        background: #007bff;
        transition: 0.2s;
        height: 0;
        overflow: hidden;
        text-align: center;
    }

    .nav-bar.active {
        height: 4800px;
        z-index: 1;
    }
    .nav-bar.active ul {
        opacity: 1;
    }
    .nav-bar ul {
        display: block;
        width: fit-content;
        margin: 80px auto 0 auto;
        transition: 0.5s;
        opacity: 0;
    }
    
    .nav-bar ul li a {
        margin-bottom: 12px;
    }

    .nav-bar ul li a.active {
        background: #fff;
        color: #007bff;
        border-radius: 5px;
    }

    .nav-bar ul li a {
       color: #fff;
    }

    .login-btn {
        background-color: #fff;
        color: #007bff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
    }
#cart-icon {
    position: relative;
    cursor: pointer;
}

#cart-count {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
}

#cart-popup {
    display: none;
    position: absolute;
    top: 60px; /* Adjust based on your header height */
    right: 10px;
    width: 300px;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

#cart-popup h2 {
    margin: 0;
    padding: 10px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ddd;
}

#cart-popup .cart-items {
    max-height: 300px;
    overflow-y: auto;
}

#cart-popup .cart-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

#cart-popup .cart-item:last-child {
    border-bottom: none;
}

#cart-popup .cart-item p {
    margin: 0;
}
}

            </style>
           <header>
    <div class="logo">Water</div>
    <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </div>
    <nav class="nav-bar">
        <ul>
            <li>
                <a href="/index.html" class="active" target="_blank">Beranda</a>
            </li>
            <li>
                <a href="/index.html#Informasi" target="_blank">Informasi dan layanan</a>
            </li>
            <li>
                <a href="/index.html#tentangweb" target="_blank">tentang kami</a>
            </li>
            <li>
                <a href="/index.html#footers" target="_blank">kontak</a>
            </li>
            
        </ul>
    </nav>
   
</header>

        `;

        // Menambahkan logika untuk popup login dan register
        
        this.shadowRoot.querySelector('#cart-icon').addEventListener('click', this.toggleCartPopup);
        this.shadowRoot.querySelector('.close').addEventListener('click', this.closeCartPopup);
    }

    toggleCartPopup() {
        const cartPopup = this.shadowRoot.querySelector('#cart-popup');
        if (cartPopup.style.display === 'none' || cartPopup.style.display === '') {
            cartPopup.style.display = 'block';
        } else {
            cartPopup.style.display = 'none';
        }
    }

    closeCartPopup() {
        this.shadowRoot.querySelector('#cart-popup').style.display = 'none';
    }
}

customElements.define('header-component', HeaderComponent);
