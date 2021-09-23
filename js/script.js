
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: false,
        arrows: false,
        autoplay: true,
        fade: true
    });

    $('.reviews__catalog').slick({
        dots: true,
        infinite: false,
        arrows: false,
        slidesToShow: 4,
  slidesToScroll: 4,
        autoplay: true
    });

  });
          