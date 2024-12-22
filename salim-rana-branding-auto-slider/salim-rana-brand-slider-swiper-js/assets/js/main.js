(function ($) {
  ("use strict");

  // brand slider
  var swiper = new Swiper(".tp-brand-top-active", {
    slidesPerView: "auto",
    spaceBetween: 80,
    freemode: true,
    centeredSlides: true,
    loop: true,
    speed: 3000,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
  });
    
})(jQuery);
