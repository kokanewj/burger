let FullScreenMenu = (function(options) {

  let buttonOpen = document.querySelector(options.buttonOpen);
  let buttonClose = document.querySelector(options.buttonClose);
  let FullScreenMenu = document.querySelector(options.FullScreenMenu);
  let body = document.querySelector('body');
  let effect = document.querySelector(options.effect);

  let _toggleFullScreenMenu = function(e) {
    FullScreenMenu.classList.toggle('full_screen--open');
    body.classList.toggle('body_pop-up-menu');
    effect.classList.toggle('hamburger-menu-link_active');
  }

  let addListeners = function() {
    buttonOpen.addEventListener('click', _toggleFullScreenMenu);
    buttonClose.addEventListener('click', _toggleFullScreenMenu);

    FullScreenMenu.addEventListener("click", function(e) {
      target = e.target;
      console.dir(target);
      if (target.classList.contains('full_screen-menu__link')) {
        _toggleFullScreenMenu();
      }
    })
  
  };


  return {
    open: addListeners
  };
})({
  buttonOpen: '#hamburger-menu-link',
  buttonClose: '#close',
  FullScreenMenu: '#full_screen',
  effect: '#hamburger-menu-link'
});

FullScreenMenu.open(); //Открытие с помощью метода open();


let teamItem = document.querySelectorAll('#team-accordeon__item');

for (let i=0; i<teamItem.length; i++) {
    teamItem[i].addEventListener("click", function(e){
    e.preventDefault();
    teamItem[i].classList.toggle("team-accordeon__item_active");
    });
}


let menuItem = document.querySelectorAll('#menu-accordeon__item');

for (let i=0; i<menuItem.length; i++) {
    menuItem[i].addEventListener("click", function(e){
    e.preventDefault();
    menuItem[i].classList.toggle("menu-accordeon__item_active");
    });
}


// let teamAccordeon = document.querySelector('.team-accordeon');
    
//     teamAccordeon.addEventListener('click', function(e) {
//       e.preventDefault();

//       let teamAccordeonItem = document.querySelectorAll('.team-accordeon__item');
//       let target = e.target.closest('li');

//       if (!target) return;

//       if (!target.classList.contains('team-accordeon__item_active')) {
//         for (let Item of teamAccordeonItem) {
//           Item.classList.remove('team-accordeon__item_active');
//         }
//         target.classList.add('team-accordeon__item_active');
//       } else {
//         target.classList.remove('team-accordeon__item_active');
//       }
//     });


//   let menuAccordeon = document.querySelector('.menu-accordeon');

//     menuAccordeon.addEventListener('click', function(e) {
//       e.preventDefault();

//       let menuAccordeonItem = document.querySelectorAll('.menu-accordeon__item');
//       let target = e.target.closest('li');

//       if (!target) return;

//       if (!target.classList.contains('menu-accordeon__item_active')) {
//         for (let Item of menuAccordeonItem) {
//           Item.classList.remove('menu-accordeon__item_active');
//         }
//         target.classList.add('menu-accordeon__item_active');
//       } else {
//         target.classList.remove('menu-accordeon__item_active');
//       }
//     });
