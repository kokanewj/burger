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
