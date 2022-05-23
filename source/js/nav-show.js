let navigation = document.querySelector('.nav__list');
let nav_btn = document.querySelector('.logo__menu-button');

nav_btn.addEventListener('click', function() {
  navigation.classList.toggle('nav--show');
});
