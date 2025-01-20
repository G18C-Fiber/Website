let currentIndex = 0;

const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    let slides = carousel.querySelectorAll('.carousel-slide');
    setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000);
});
