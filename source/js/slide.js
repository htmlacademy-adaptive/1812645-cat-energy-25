let btn_it_was = document.querySelector('.slide-btn-was');
let btn_has_become = document.querySelector('.slide-btn-become');
let photos_item_1 = document.querySelector('.photos__item-1');
let photos_item_2 = document.querySelector('.photos__item-2');
let slide_switch = document.querySelector('.slide-switch__mark');

btn_it_was.addEventListener('click', function() {
  photos_item_1.classList.remove('photos__item--disabled');
  photos_item_2.classList.add('photos__item--disabled');
  slide_switch.classList.remove('::before');
});

btn_has_become.addEventListener('click', function() {
  photos_item_2.classList.remove('photos__item--disabled');
  photos_item_1.classList.add('photos__item--disabled');
});
