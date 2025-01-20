
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let currentIndex = 0;

    const updateCarousel = () => {
        const itemWidth = items[0].offsetWidth + 32; // Item width + margin
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

        // Update arrow visibility
        leftArrow.style.display = currentIndex === 0 ? 'none' : 'flex';
        rightArrow.style.display = currentIndex === items.length - 1 ? 'none' : 'flex';
    };

    leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            w1updateCarousel();
        }
    });

    rightArrow.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initial setup to hide arrows if necessary
    updateCarousel();

    // Resize handler to adjust carousel on window resize
    window.addEventListener('resize', updateCarousel);
});
