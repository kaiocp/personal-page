const btnMobile = document.getElementById('btn');
const headerLinks = document.querySelectorAll('.header__menu-link');

btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('.header__menu');
    nav.classList.toggle('active');
});

headerLinks.forEach(el => {
    el.addEventListener('click', () => {
        const nav = document.querySelector('.header__menu');
        nav.classList.remove('active');
    });
});