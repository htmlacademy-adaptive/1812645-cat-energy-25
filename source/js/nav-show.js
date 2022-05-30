let navigation = document.querySelector('.main-header');
let nav_btn = document.querySelector('.main-header__button');

navigation.classList.remove('main-header--nojs');
navigation.classList.remove('main-header--opened');
navigation.classList.add('main-header--closed');

nav_btn.addEventListener('click', function() {
  navigation.classList.toggle('main-header--opened');
  navigation.classList.toggle('main-header--closed');
});
