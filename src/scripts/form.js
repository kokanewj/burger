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