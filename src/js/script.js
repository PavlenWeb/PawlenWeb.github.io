$(document).ready(function(){
    $('.carousel__inner').slick({
        dots: false,
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron-right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
      });
  });