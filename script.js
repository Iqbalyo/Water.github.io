hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () { 
    navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active')
 }

 document.addEventListener('DOMContentLoaded', function() {
    const loginPopup = document.getElementById('loginPopup');
    const registerPopup = document.getElementById('registerPopup');
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');
    const closeRegisterPopup = document.getElementById('closeRegisterPopup');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');

    openPopup.addEventListener('click', function() {
        loginPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    closeRegisterPopup.addEventListener('click', function() {
        registerPopup.style.display = 'none';
    });

    switchToRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginPopup.style.display = 'none';
        registerPopup.style.display = 'block';
    });

    switchToLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerPopup.style.display = 'none';
        loginPopup.style.display = 'block';
    });

    window.addEventListener('click', function(e) {
        if (e.target == loginPopup) {
            loginPopup.style.display = 'none';
        }
        if (e.target == registerPopup) {
            registerPopup.style.display = 'none';
        }
    });
});


