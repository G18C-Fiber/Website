let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    // Update currentIndex based on direction
    currentIndex += direction;
    
    // Loop the carousel if it goes beyond bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    // Adjust the carousel's position based on currentIndex
    const offset = -100 * currentIndex;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}
