let FullScreenMenu = (function(options) {

  let buttonOpen = document.querySelector(options.buttonOpen);
  let buttonClose = document.querySelector(options.buttonClose);
  let FullScreenMenu = document.querySelector(options.FullScreenMenu);
  let body = document.querySelector('body');

  let _toggleFullScreenMenu = function(e) {
    FullScreenMenu.classList.toggle('full_screen--open');
    body.classList.toggle('body_pop-up-menu');
  }

  let addListeners = function() {
    buttonOpen.addEventListener('click', _toggleFullScreenMenu);
    buttonClose.addEventListener('click', _toggleFullScreenMenu);
  }

  return {
    open: addListeners
  };
})({
  buttonOpen: '#open',
  buttonClose: '#close',
  FullScreenMenu: '#full_screen'
});

FullScreenMenu.open(); //Открытие с помощью метода open();
