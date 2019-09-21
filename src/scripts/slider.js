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
  
  
  