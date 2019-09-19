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


//Слайдер (предыдущий вариант)
// const slide = (function(){
//   const left = document.querySelector('.slider__button_prev');
//   const right = document.querySelector('.slider__button_next');
//   const slider = document.querySelector('.slider_main');
//   const computed = getComputedStyle(slider);

//   let sliderWidth = parseInt(computed.width);

//   window.addEventListener('resize', function(){
//     currentRight = 0;
//     slider.style.right = currentRight;
//     sliderWidth = parseInt(computed.width);
//   }, true);

//   var sliderItemsCounter = slider.children.length;
//   let flag = true;

//   let moveSlide = function(direction) {
//     direction.addEventListener("click", function(e) {
//       e.preventDefault();
//       let currentRight = parseInt(computed.right);

//       if (currentRight < (sliderItemsCounter-1)*sliderWidth && direction==right && flag) {
//         flag = false;
//         slider.style.right = currentRight + sliderWidth + "px";
//         setTimeout(() => {flag = true}, 300)
//       }

//       if (currentRight > 0 && direction==left && flag) {
//         flag = false;
//         slider.style.right = currentRight - sliderWidth + "px";
//         setTimeout(() => {flag = true}, 300)
//       }
//     });
//   }

//   let addListeners = function(){
//     moveSlide(right);
//     moveSlide(left);
//   }

//   return {init: addListeners}
// })();

// slide.init();


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

  // Yandex Map
  ymaps.ready(init);

  var placemarks = [
      {
          latitude: 59.97,
          longitude: 30.31,
          hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
          balloonContent: [
              '<div class="map__balloon">',
              '<img class="map__burger-img" src="/img/icon/marker.png" alt="Бургер"/>',
              'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
              '</div>'
          ]
      },
      {
          latitude: 59.94,
          longitude: 30.25,
          hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
          balloonContent: [
              '<div class="map__balloon">',
              '<img class="map__burger-img" src="/img/icon/marker.png" alt="Бургер"/>',
              'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
              '</div>'
          ]
      },
      {
        latitude: 59.91,
        longitude: 30.45,
        hintContent: '<div class="map__hint">Дальневосточный проспект</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="/img/icon/marker.png" alt="Бургер"/>',
            'Самые вкусные бургеры у нас! Заходите по адресу: Дальневосточный проспект',
            '</div>'
        ]
    },
      {
          latitude: 59.93,
          longitude: 30.34,
          hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
          balloonContent: [
              '<div class="map__balloon">',
              '<img class="map__burger-img" src="/img/icon/marker.png" alt="Бургер"/>',
              'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
              '</div>'
          ]
      }
  ],
      geoObjects= [];
  
  function init() {
      var map = new ymaps.Map('map', {
          center: [59.94, 30.32],
          zoom: 12,
          behaviors: ['drag']
      });
  
      for (var i = 0; i < placemarks.length; i++) {
              geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
              {
                  hintContent: placemarks[i].hintContent,
                  balloonContent: placemarks[i].balloonContent.join('')
              },
              {
                  iconLayout: 'default#image',
                  iconImageHref: './img/icon/marker.png',
                  iconImageSize: [46, 57],
                  iconImageOffset: [-23, -57],
                  iconImageClipRect: [[415, 0], [461, 57]]
              });
      }
  
      var clusterer = new ymaps.Clusterer({
          clusterIcons: [
              {
                  href: './img/icon/marker.png',
                  size: [100, 100],
                  offset: [-50, -50]
              }
          ],
          clusterIconContentLayout: null
      });
  
      map.geoObjects.add(clusterer);
      clusterer.add(geoObjects);
  }

  //Composition

$('.composition').mouseenter(function(){
  $this = $(this);
  $this.addClass('composition_active');

  $('.composition__close').on('click',function(){
      $this.removeClass('composition_active');
  });

});

$('.composition').mouseleave(function(){
  $this = $(this);
  $this.removeClass('composition_active');
});


//jQuery новый слайдер
var moveSlider = function (container, slideNum) {
  var 
      items = container.find('.slider__item'),
      activeItem = items.filter('.slider__item_active'),
      reqItem = items.eq(slideNum),
      reqIndex = reqItem.index(),
      list = container.find('.slider_main'),
      duration = 100;

  if (reqItem.length) {
      list.animate({
          'left' : -reqIndex*100 + '%'
      }, duration, function(){
          activeItem.removeClass('slider__item_active');
          reqItem.addClass('slider__item_active');
      });
  }
}

$('.slider__button').on('click', function(e){
  e.preventDefault();

  var $this = $(this),
      container = $this.closest('.slider-block'),
      items = $('.slider__item', container),
      activeItem = items.filter('.slider__item_active'),
      existedItem, edgeItem, reqItem;

  if ($this.hasClass('slider__button_next')) {
      existedItem = activeItem.next();
      edgeItem = items.first();
  } 

  if ($this.hasClass('slider__button_prev')) {
      existedItem = activeItem.prev();
      edgeItem = items.last();
  }

  reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

  moveSlider(container, reqItem);
});


//pageScroll

const sections = $(".section");  //сохраняем секцию в переменную
const display = $("#content"); //то, что мы двигаем
let inscroll = false; //скролится страничка или нет

const mobdet = new MobileDetect(window.navigator.userAgent);
const isMobile = mobdet.mobile();

const countPosition = sectionEq => {
  return `${sectionEq * -100}%`;
};

const switchActiveClass = (elems, elemEq) => {
  elems
    .eq(elemEq)
    .addClass("active") //добавление класса к отображаемой секции
    .siblings()
    .removeClass("active"); //удаление класса
};

const unBlockScroll = () => {
  setTimeout(() => {
    inscroll = false;
  }, 1000 + 300); // Время transition + время за которое закончится инерции на тач-устройствах
};

const performTransition = sectionEq => {  //SectionEq отображает элемент по номеру
  if (inscroll) return;
  inscroll = true;

  const position = countPosition(sectionEq);  //расчитываем позицию
  const switchFixedMenuClass = () =>
    switchActiveClass($(".fixed-menu__item"), sectionEq);

  switchActiveClass(sections, sectionEq);
  switchFixedMenuClass();

  display.css({
    transform: `translateY(${position})`   //затрагивает только Composite, анимация будет плавной
  });

  unBlockScroll();
};

const scrollViewport = direction => {
  const activeSection = sections.filter(".active");   // выбираем секцию с классом active
  const nextSection = activeSection.next();           // следующая секция
  const prevSection = activeSection.prev();           // предыдущая секция

  if (direction === "next" && nextSection.length) {      //проверяем направление и существование секции
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {      //проверяем направление и существование секции
    performTransition(prevSection.index());
  }
};

$(document).on({
  wheel: e => {                               //значение, которое отслеживает скролл по колесику мыши
    const deltaY = e.originalEvent.deltaY;
    if (deltaY < 0) {
      scrollViewport("prev");
    }
    if (deltaY > 0) {
      scrollViewport("next");
    }
  },
    //делаем так, чтобы при вводе текста у нас не уходил вниз или вверх   
  keydown: e => {                              
    const tagName = e.target.tagName.toLowerCase();
    const textareaInputs = tagName === "input" || tagName === "textarea";

    if (textareaInputs) return;

    switch (e.keyCode) {
      case 38:                 // предыдущая секция
        scrollViewport("prev");
        break;

        case 40:              // следуюшая секция
          scrollViewport("next");
          break;
    }
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();
  performTransition(parseInt($(e.currentTarget).attr("data-scroll-to")));
});

//  swipe на мобильных устройствах
if (isMobile) {             
  window.addEventListener(
    "touchmove",
    e => {
      e.preventDefault();
    },
    { passive: false }
  );

  $("body").swipe({
    swipe: (event, direction) => {
      let scrollDirection;
      if (direction === "up") scrollDirection = "next";
      if (direction === "down") scrollDirection = "prev";
      scrollViewport(scrollDirection);
    }
  });
}

//Video Player

let video = document.getElementById("player"); 
let bigPlayButton = document.querySelector(".big_play");
let smallPlayButton = document.querySelector(".small_play");
let smallPauseButton = document.querySelector(".small_pause");
let durationScale = document.getElementById("durationScale");  
let sound = document.getElementById("sound");
let soundControl = document.getElementById("soundScale"); 
let interval = setInterval(updateDurationScale, 1000);

    sound.addEventListener('click', function (){      // onclick на кнопку sound
       document.querySelector(".short").classList.toggle("short_active"); // отображает или скрывает шкалу громкости  
    });    

    bigPlayButton.addEventListener('click', function (){  // onclick на большую кнопку play 
        document.querySelector(".big_play").classList.toggle("big_play_active");          // отображает или скрывает большую кнопку play 
        smallPlayButton.style.display  = 'none'; //скрываем маленькую кнопку play
        smallPauseButton.style.display = 'block'; //отображаем кнопку pause
        if (video.paused){  //свойство, аудио / видео приостановлено или нет (true или false)
            video.play(); // событие запускает видео
            interval();
        }
        else 
        {
            video.pause();  //ставим видео на паузу
            clearInterval(interval); //очищаем, чтобы функция постоянно не вызывалась
        }
    });  
    smallPlayButton.addEventListener('click', function (){      // onclick на маленькую кнопку play
      document.querySelector(".big_play").classList.toggle("big_play_active"); // отображает или скрывает маленькую кнопку play 
      smallPlayButton.style.display  = 'none'; 
      smallPauseButton.style.display = 'block';
      if (video.paused){
          video.play();
          interval();     
      }
      else
      {
          video.pause();  
          clearInterval(interval);     
      }
    });    

    smallPauseButton.addEventListener('click', function (){      // onclick на большую кнопку play
      document.querySelector(".big_play").classList.toggle("big_play_active"); // отображает или скрывает маленькую кнопку play 
      smallPlayButton.style.display  = 'block'; //отображаем маленькую кнопку play
      smallPauseButton.style.display = 'none'; //скрываем кнопку pause
      if (video.paused){
          video.play();
          interval();     
      }
      else
      {
          video.pause();  
          clearInterval(interval);     
      }
    });    


    durationScale.addEventListener('mousedown', function (){ // Кнопка мыши нажата над элементом
      video.pause();
      clearInterval(interval);
    });

    //Обновление позиции продолжительности видео
    function updateDurationScale(){    
      durationScale.value = video.currentTime;
    }



     //Перемотка видео
     durationScale.addEventListener('mouseup', function (){ // Кнопка мыши отпущена над элементом
      video.currentTime = durationScale.value;
      interval = setInterval(updateDurationScale,1000);
      if (video.paused){
          video.play();
          document.getElementsByClassName("big_play").classList.add("big_play_active");
      }
    }); 

    durationScale.min = 0;
    durationScale.value = 0;    
    durationScale.max = video.duration; 

    soundControl = document.getElementById("soundScale");  // обработчики событий для громкости

    soundControl.min = 0; // минимальные значение громкости
    soundControl.avg = 5; // среднее значение громкости
    soundControl.max = 10; // максимальное значение громкости
    soundControl.value = soundControl.avg;   // присваиваем громкости среднее значение


    // управление звуком видео
    soundControl.addEventListener('mouseup',  function (){
      video.volume = soundControl.value/10; 
    }); 

  

    //окончание видео
    video.addEventListener('ended', function () { //событие end срабатывает, когда видео достигает конца
        document.querySelector(".big_play").classList.toggle("big_play_active");
        video.currentTime = 0; // время возвращаем на начало
    }, false);
