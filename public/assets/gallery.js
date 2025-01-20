document.addEventListener('DOMContentLoaded', function() {
    const wigCarousel = new bootstrap.Carousel('#wig-carousel', {
        interval: 3000,
        ride: 'carousel'
    });

    const braidCarousel = new bootstrap.Carousel('#braid-carousel', {
        interval: 3000,
        ride: 'carousel'
    });

    const colorCarousel = new bootstrap.Carousel('#color-carousel', {
        interval: 3000,
        ride: 'carousel'
    });
});
