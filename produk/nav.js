document.addEventListener('DOMContentLoaded', function() {
    const headerComponent = document.querySelector('header-component');

    if (headerComponent) {
        const shadowRoot = headerComponent.shadowRoot;

        if (shadowRoot) {
            const hamburger = shadowRoot.querySelector('.hamburger');

            if (hamburger) {
                hamburger.onclick = function() { 
                    const navBar = shadowRoot.querySelector('.nav-bar');
                    if (navBar) {
                        navBar.classList.toggle('active');
                    }
                };
            }
        }
    }
});
