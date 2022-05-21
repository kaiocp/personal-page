const btnMobile = document.getElementById('btn');
const headerLinks = document.querySelectorAll('.header__menu-link');
const sections = document.querySelectorAll('.section');

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

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('li a[href*="' + sectionId + '"]').classList.add('highlight');
        } else {
            document.querySelector('li a[href*="' + sectionId + '"]').classList.remove('highlight');
        }
    })
})