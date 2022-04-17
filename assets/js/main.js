(function($){
    "use strict";
    // BACKGROUND IMAGE JS START
    $("[data-background]").each(function(){
      $(this).css("background-image", "url("+ $(this).attr("data-background") + ")")
    });
    // BACKGROUND IMAGE JS START
    // SLIDER AREA SLICK SLIDER JS START
    $('.bbc_banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        fade:true,
        dots:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
// SLIDER AREA SLICK SLIDER JS END
})(jQuery);