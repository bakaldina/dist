$(document).ready(function(){
  // Слайдер
        var questSwiper = new Swiper ('.mobile-quest-slider', {
        speed: 150,
        width: 280
      });
        var bannerSwiper = new Swiper ('.mobile-banner-slider', {
        speed: 150,
        width: 314,
        spaceBetween: 10
      });
  // стрелочка подробнее
  $('.more').click(function(e){
    e.preventDefault();
    $(this).hide();
    $(this).parent().css('max-height', 'inherit');
    $(this).parent().css('-webkit-line-clamp', 'inherit');
    $(this).parent().css('-webkit-box-orient', 'inherit');
    $(this).parent().parent().css('height', 'auto');
  });
});