const menu = document.querySelector('.mobile-menu');
const hamb = document.querySelector('.hamburger-menu');
const closeBtn = menu.querySelector('.mobile-menu__close');
const menuItems = menu.querySelectorAll('.mobile-menu__item');

hamb.addEventListener('click', () => {
  menu.style.right = 0;
});

closeBtn.addEventListener('click', closeMenu);

document.addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    closeMenu();
  }
});

Array.from(menuItems).forEach(item => {
  item.addEventListener('click', closeMenu);
});

function closeMenu() {
  menu.style.right = '-100%';
};