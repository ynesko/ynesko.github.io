document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.t-menuburger');
    const mobileMenu = document.querySelector('.tmenu-mobile');
    const nav = document.querySelector('#nav951212026');
    
    if (burger && mobileMenu && nav) {
        burger.addEventListener('click', function() {
            this.classList.toggle('t-menuburger-opened');
            nav.classList.toggle('tmenu-mobile__menucontent_hidden');
        });
    }
    
    // Подсветка активных ссылок
    const menuLinks = document.querySelectorAll('.t454__list_item a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});