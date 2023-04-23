window.addEventListener('DOMContentLoaded', startApp);

function startApp() {
    dateFooter();
    navigationResponsive();
}

function dateFooter() {
    const allright = document.querySelector('#allrightYear');
    const getYear = new Date().getFullYear();
    allright.textContent = getYear;
}

function navigationResponsive() {
    const nav = document.querySelector('.nav__responsive');
    const burger = document.querySelector('.header__nav .burger');

    // SHOW NAV AND BURGER EFFECT
    burger.addEventListener('click', function() {
        nav.classList.toggle('show-nav');
        burger.classList.toggle('burger-toggle');
    });

    // CLICK LINKS
    const navLinks = document.querySelectorAll('.nav__responsive .nav__link');

    navLinks.forEach(link=>{
        link.addEventListener('click', function(){
            nav.classList.toggle('show-nav');
            burger.classList.toggle('burger-toggle');
        });
    });
}