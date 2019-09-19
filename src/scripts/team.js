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
