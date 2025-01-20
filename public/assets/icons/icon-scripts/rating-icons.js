document.addEventListener("DOMContentLoaded", function () {
    const starSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD700" viewBox="0 0 24 24" width="20px" height="20px" class="star-icon">
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>`;

    const carouselItems = document.querySelectorAll('.carousel-item .stars');
    carouselItems.forEach((starsContainer) => {
        // Add 5 stars to each rating
        for (let i = 0; i < 5; i++) {
            starsContainer.innerHTML += starSVG;
        }
    });
});
