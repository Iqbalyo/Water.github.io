document.addEventListener('DOMContentLoaded', () => {
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');
    const loginPopup = document.getElementById('loginPopup');
    
    const openLogoutPopup = document.getElementById('openLogoutPopup');
    const closeLogoutPopup = document.getElementById('closeLogoutPopup');
    const logoutPopup = document.getElementById('logoutPopup');
    const logout = document.getElementById('logout');

    openPopup.addEventListener('click', () => {
        loginPopup.style.display = 'flex';
    });

    closePopup.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    openLogoutPopup.addEventListener('click', () => {
        logoutPopup.style.display = 'flex';
    });

    closeLogoutPopup.addEventListener('click', () => {
        logoutPopup.style.display = 'none';
    });

    logout.addEventListener('click', () => {
        // Add your logout logic here
        alert('User logged out!');
        logoutPopup.style.display = 'none';
    });
});

function togglePassword() {
    const passwordInput = document.getElementById('Password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

// Handle switching between login and register forms
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const registerPopup = document.getElementById('registerPopup');
const closeRegisterPopup = document.getElementById('closeRegisterPopup');

switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginPopup.style.display = 'none';
    registerPopup.style.display = 'flex';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerPopup.style.display = 'none';
    loginPopup.style.display = 'flex';
});

closeRegisterPopup.addEventListener('click', () => {
    registerPopup.style.display = 'none';
});

// Example sign-in and sign-up functionality
const signIn = document.getElementById('signIn');
const signUp = document.getElementById('signUp');

signIn.addEventListener('click', (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    alert('User signed in!');
    loginPopup.style.display = 'none';
});

signUp.addEventListener('click', (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    alert('User registered!');
    registerPopup.style.display = 'none';
});

