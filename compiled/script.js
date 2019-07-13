$(document).ready(function(){
  $('.nav-toggle-container').click(function(){
    $('#nav').toggleClass('is-active');
    $('#toggle').toggleClass('active');
  });
  $('.popup-close').click(function(){
    $('#popup').addClass('popup-closed');
  });

  // COLOR VARIABLES
  BLUE = "#4285f4"
  YELLOW = "#f4b400"
  GREEN = "#0f9d58"
  RED = "#db4437"
  BLACK = "#0a0a0a"

  // $('#home').hover(function(){
  //   $('.nav-container').css('background-color', BLUE);
  // }, function(){
  //   $('.nav-container').css('background-color', BLACK);
  // });

  // $('#schedule').hover(function(){
  //   $('.nav-container').css('background-color', YELLOW);
  // }, function(){
  //   $('.nav-container').css('background-color', BLACK);
  // });

  // $('#team').hover(function(){
  //   $('.nav-container').css('background-color', GREEN);
  // }, function(){
  //   $('.nav-container').css('background-color', BLACK);
  // });

  // $('#contact').hover(function(){
  //   $('.nav-container').css('background-color', RED);
  // }, function(){
  //   $('.nav-container').css('background-color', BLACK);
  // });

});
$(window).on('load',function(){
  $('.intro').toggleClass('show-head');
  $('.cover--1').toggleClass('cover--1--removed');
  $('.cover--2').toggleClass('cover--2--removed');
});