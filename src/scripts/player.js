//Video Player

let video = document.getElementById("player"); 
let bigPlayButton = document.querySelector(".big_play");
let smallPlayButton = document.querySelector(".small_play");
let smallPauseButton = document.querySelector(".small_pause");
let durationScale = document.getElementById("durationScale");  
let sound = document.getElementById("sound");
let soundControl = document.getElementById("soundScale"); 

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


    let interval = setInterval(updateDurationScale, 1000);

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
