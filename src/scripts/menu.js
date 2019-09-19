// Меню аккордеон
let menuAccordeon = document.querySelector('.menu-accordeon');

menuAccordeon.addEventListener('click', function(e) {
  e.preventDefault();

  let menuAccordeonItem = document.querySelectorAll('.menu-accordeon__item');
  let target = e.target.closest('li');

  if (!target) return;

  if (!target.classList.contains('menu-accordeon__item_active')) {
    for (let Item of menuAccordeonItem) {
      Item.classList.remove('menu-accordeon__item_active');
    }
    target.classList.add('menu-accordeon__item_active');
  } else {
    target.classList.remove('menu-accordeon__item_active');
  }
});
