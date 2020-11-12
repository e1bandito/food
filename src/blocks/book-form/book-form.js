import $ from 'jquery';
import validation from 'jquery-validation';

$('.book-form').validate({
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
    },
    people: {
      required: true
    },
    time: {
      required: true
    },
    date: {
      required: true,
      dateISO: true
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
    },
    people: {
      required: 'Выберите значение из списка'
    },
    time: {
      required: 'Выберите значение из списка'
    },
    date: {
      required: 'Выберите удобную дату',
      dateISO: 'Дата должны быть в формате YYYY-MM-DD'
    }
  }
})
