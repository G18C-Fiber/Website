$(document).ready(function () {
  initializeCarousels();
});

function initializeCarousels() {  
  $('.carousel').each(function () {
      $(this).slick({
          slidesToShow: 3, // Always show 3 slides
          slidesToScroll: 1,
          infinite: true,
          arrows: false, // Removed the arrows
          dots: false,
          speed: 350,
          autoplay: true,
          autoplaySpeed: 3000,
          centerMode: true,
          centerPadding: '20px', // Keep spacing minimal
          responsive: [
              { breakpoint: 992, settings: { slidesToShow: 3, centerPadding: '10px' } }, // Laptops
              { breakpoint: 768, settings: { slidesToShow: 3, centerPadding: '5px' } }, // Tablets
              { breakpoint: 576, settings: { slidesToShow: 3, centerPadding: '0px' } }  // Small devices
          ]
      });
  });

  setupSlideClickHandlers();
}

function setupSlideClickHandlers() {
  $('.carousel').on('click', '.slick-slide', function () {
      const $carousel = $(this).closest('.carousel');
      const index = $(this).data('slick-index');
      $carousel.slick('slickGoTo', index); // Enable click-to-slide functionality
  });
}
