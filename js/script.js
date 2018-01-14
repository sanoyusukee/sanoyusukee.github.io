$(function(){
  var topBtn=$('#pageTop');
  topBtn.hide();

  $(window).scroll(function(){
    if($(this).scrollTop()>80){
      topBtn.fadeIn();    
    }else{
      topBtn.fadeOut();
    } 
  });
  
  topBtn.click(function(){
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });
});


$(document).ready(function(){
  $('.chocolat-image').Chocolat();
});


$(function () {
var $body = $('body');

$('#js__btn').on('click', function () {
    $body.toggleClass('open');
});

$('#js__nav').on('click', function () {
    $body.removeClass('open');
});
});
