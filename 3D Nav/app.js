const hamburgerMenu = document.querySelector('.nav__hamburger__menu');
const container = document.querySelector('.container');

hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('active');
})