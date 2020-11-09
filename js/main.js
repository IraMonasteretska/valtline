$(document).ready(function(){
	$('.header__btn').click(function(event) {
    $('.header__btn,.list__item,.header__list').toggleClass('active');
    $('.header__btn').toggleClass('rotate');
    
  });
    
    /* Slick slider */ 

  $('.slider-for').slick({
    arrows: false,
    autoplay: false,
    slidesToShow: 3,
    dots: false,
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
  });
  $('.slider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if(currentSlide == 0) {
      $('.number__item').removeClass('current');
      $('.number__item--one').addClass('current');
    }
    else if(currentSlide == 1) {
      $('.number__item').removeClass('current');
      $('.number__item--two').addClass('current');
    }
    else {
      $('.number__item').removeClass('current');
      $('.number__item--three').addClass('current');
    }
  });

  $('.number__item--one').click(function(event){
    $('.slider-for').slick('goTo', 0);
  });

  $('.number__item--two').click(function(event){
    $('.slider-for').slick('goTo', 1);
  });

  $('.number__item--three').click(function(event){
    $('.slider-for').slick('goTo', 2);
  });

  /*** Gallery  ***/
  var activeStep = 0;
  $(".nextstep").click(function() {
    $('.card').eq(activeStep++).show();
    if(activeStep == $('.gallery__hide').length) $(this).hide();
  });

});