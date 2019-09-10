// Полноэкранное меню
let FullScreenMenu = (function(options) {

  let buttonOpen = document.querySelector(options.buttonOpen);
  let buttonClose = document.querySelector(options.buttonClose);
  let FullScreenMenu = document.querySelector(options.FullScreenMenu);
  let body = document.querySelector('body');
  let effect = document.querySelector(options.effect);

  let _toggleFullScreenMenu = function() {
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


// Тим аккордеон (при нажатии на следующий элемент, не закрывает активный)

// let teamItem = document.querySelectorAll('#team-accordeon__item');

// for (let i=0; i<teamItem.length; i++) {
//     teamItem[i].addEventListener("click", function(e){
//     e.preventDefault();
//     teamItem[i].classList.toggle("team-accordeon__item_active");
//     });
// }


// Меню аккордеон (при нажатии на следующий элемент, не закрывает активный)
// let menuItem = document.querySelectorAll('#menu-accordeon__item');

// for (let i=0; i<menuItem.length; i++) {
//     menuItem[i].addEventListener("click", function(e){
//     e.preventDefault();
//     menuItem[i].classList.toggle("menu-accordeon__item_active");
//     });
// }

//Тим аккордеон
let teamAccordeon = document.querySelector('.team-accordeon');
    
    teamAccordeon.addEventListener('click', function(e) {
      e.preventDefault();

      let teamAccordeonItem = document.querySelectorAll('.team-accordeon__item');
      let target = e.target.closest('li');

      if (!target) return;

      if (!target.classList.contains('team-accordeon__item_active')) {
        for (let Item of teamAccordeonItem) {
          Item.classList.remove('team-accordeon__item_active');
        }
        target.classList.add('team-accordeon__item_active');
      } else {
        target.classList.remove('team-accordeon__item_active');
      }
    });


// Меню аккордеон (при нажатии на следующий элемент, не закрывает активный)
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


//Слайдер
const slide = (function(){
  const left = document.querySelector('.slider__button_prev');
  const right = document.querySelector('.slider__button_next');
  const slider = document.querySelector('.slider_main');
  const computed = getComputedStyle(slider);

  let sliderWidth = parseInt(computed.width);

  window.addEventListener('resize', function(){
    currentRight = 0;
    slider.style.right = currentRight;
    sliderWidth = parseInt(computed.width);
  }, true);

  var sliderItemsCounter = slider.children.length;
  let flag = true;

  let moveSlide = function(direction) {
    direction.addEventListener("click", function(e) {
      e.preventDefault();
      let currentRight = parseInt(computed.right);

      if (currentRight < (sliderItemsCounter-1)*sliderWidth && direction==right) {
        flag = false;
        slider.style.right = currentRight + sliderWidth + "px";
        setTimeout(() => {flag = true}, 300)
      }

      if (currentRight > 0 && direction==left) {
        slider.style.right = currentRight - sliderWidth + "px";
      }
    });
  }

  let addListeners = function(){
    moveSlide(right);
    moveSlide(left);
  }

  return {init: addListeners}
})();

slide.init();


//Форма отправки

const myForm = document.querySelector('#myForm');
const send =  document.querySelector('#send');
const serverMenu = document.querySelector('.server-menu');
const serverText = document.querySelector('.server-menu__text');
const serverMenuClose = document.querySelector('.server-menu__close');
serverMenuClose.addEventListener('click', function(e) {
  e.preventDefault();
  serverMenu.style.display = 'none';
  document.body.style.overflow = 'initial';
});

send.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(myForm)) {
    let data = new FormData();
    data.append("name", myForm.elements.name.value);
    data.append("phone", myForm.elements.phone.value);
    data.append("comment", myForm.elements.comment.value);
    data.append("to", "kokanewj@gmail.com");
  
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(data);
    xhr.addEventListener('load', () => {
      serverMenu.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      serverText.innerText = xhr.response.message;
    });
  }
});

function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}


//Modal window (по вебинару)

// const openButton = document.querySelector(".review__btn");
// const template = document.querySelector("#overlayTemplate").innerHTML;
// const overlay = createOverlay(template);

// openButton.addEventListener("click", function() {
//   overlay.open();
//   overlay.setContent("Спасибо, данные сохранены");
// });

// function createOverlay(template) {
//   let fragment = document.createElement('div');

//   fragment.innerHTML = template;

//   const overlayElement = fragment.querySelector(".overlay");
//   const contentElement = fragment.querySelector(".button_content");
//   const closeElement = fragment.querySelector(".button_review_close");
  
//   fragment = null;

//   overlayElement.addEventListener("click", e => {
//     if (e.target === overlayElement) {
//       closeElement.click();
//     }
//   });
//   closeElement.addEventListener("click", () => {
//     document.body.removeChild(overlayElement);
//   });

//   return {
//     open() {
//       document.body.appendChild(overlayElement);
//     },
//     close() {
//       closeElement.click();
//     },
//     setContent(content) {
//       contentElement.innerHTML = content;
//     }
//   };
// }

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



 