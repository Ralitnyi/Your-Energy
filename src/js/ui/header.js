
const currentPath = window.location.pathname;
const baseName = window.location.pathname.split('/').pop() || '';
const navLinks = document.querySelectorAll('.header__nav-link, .mobile-menu__link');

navLinks.forEach(link => {
    const href = link.getAttribute('href');

    // Check if it's the home link (index.html or empty)
    const isHome = href === './index.html' || href === 'index.html' || href === '/';

    // Check current page - handles both localhost and GitHub Pages URLs
    const isAtHome = baseName === '' || baseName === 'index.html';

    if (isHome && isAtHome) {
        link.classList.add('is-active');
    } else if (!isHome && baseName === href.replace('./', '')) {
        link.classList.add('is-active');
    } else {
        link.classList.remove('is-active');
    }
});
