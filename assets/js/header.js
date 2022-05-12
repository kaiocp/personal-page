const btnMobile = document.getElementById('btn');

btnMobile.addEventListener('click', () => {
    const nav = document.querySelector('.header__menu');
    nav.classList.toggle('active');
});