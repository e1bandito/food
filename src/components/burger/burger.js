import $ from "jquery";

$('.burger').on('click', function () {
  $(this).toggleClass('burger--open');
  $('.nav__wrap').toggleClass('nav__wrap--open');
  $('body').toggleClass('body-lock');
});

$('.nav__link').on('click', function () {
  if ('nav__wrap--open') {
    $('.nav__wrap').removeClass('nav__wrap--open');
    $('.burger').removeClass('burger--open');
    $('body').removeClass('body-lock');
  }
});
