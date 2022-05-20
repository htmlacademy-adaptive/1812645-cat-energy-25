let navigation = document.querySelector('.main-header__nav');
let nav_btn = document.querySelector('.logo__menu-button');

nav_btn.addEventListener('click', function() {
  navigation.classList.toggle('nav--show');
  navigation.classList.toggle('nav--hidden');
});
