$(document).ready(function() {
    $('.preloader').addClass('show');
});
$(window).load(function() {
    $('.preloader').removeClass('show').addClass('hide');
});