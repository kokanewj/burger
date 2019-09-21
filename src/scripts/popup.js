//Modal window
const popupMenu = document.querySelector('.popup-menu');
const reviewsList = document.querySelector('.reviews__list');
const reviewClose = document.querySelector('.popup-menu__close');
reviewClose.addEventListener('click', function(e) {
  e.preventDefault();
  popupMenu.style.display = 'none';
  document.body.style.overflow = 'initial';
});

reviewsList.addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target.closest('button');
  if (!target) return;
    popupMenu.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
