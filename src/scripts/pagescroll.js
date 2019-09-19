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