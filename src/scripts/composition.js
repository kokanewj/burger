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
  