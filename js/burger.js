const menuIcon = document.querySelector('.hamburger-menu');
let menu = document.querySelector('.menu__box');

function toggleMenuIcon() {
  menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenuIcon);