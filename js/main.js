let navLinks = document.getElementById('nav-links');
let btnToggle = document.getElementById('mobile-menu-toggle');

btnToggle.addEventListener('click', () => {
    let visibility = navLinks.getAttribute('data-visible');
    if (visibility === 'false') {
        navLinks.setAttribute('data-visible', true);
        btnToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
        navLinks.setAttribute('data-visible', false);
        btnToggle.setAttribute('aria-expanded', false);
    }
})