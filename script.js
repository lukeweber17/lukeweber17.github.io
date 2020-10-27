$(document).ready(function(){
    $('.header').height($(window).height());
})

$('ul.nav').find('a').click(function(){
  var $href = $(this).attr('href');
  var $anchor = $('#'+$href).offset();
  window.scrollTo($anchor.left,$anchor.top);
  return false;
});