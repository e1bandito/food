import $ from 'jquery';
import validation from 'jquery-validation';

$('.contact__form').validate({
  errorElement: 'span',
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      digits: true,
      minlength: 9,
      maxlength: 11,
    }
  },
  messages: {
    name: {
      required: 'Введите имя',
      minlength: 'Не короче 2-х символов'
    },
    email: {
      required: 'Введите email',
      email: 'Введите валидный email'
    },
    phone: {
      required: 'Введите номер телефона',
      digits: 'Введите только цифры',
      minlength: 'Минимальная длинна 9 символов',
      maxlength: 'Максимальная длинна 11 символов',
    }
  }
})
