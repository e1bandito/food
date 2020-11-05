import $ from 'jquery';

$('.menu__title-button').on('click', function (){
  let index = $(this).parent().index();
  $('.menu__title-item').removeClass('menu__title-item--active');
  $(this).parent().addClass('menu__title-item--active');
  $('.menu__content-item').removeClass('menu__content-item--active').eq(index).addClass('menu__content-item--active');
})
