document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const slideMenu = document.getElementById("slide-menu");
    const closeBtn = document.getElementById("close-btn");

    // Toggle slide menu visibility
    hamburgerBtn.addEventListener("click", () => {
        slideMenu.classList.add("open");
    });

    // Close menu on clicking the close button
    closeBtn.addEventListener("click", () => {
        slideMenu.classList.remove("open");
    });

    // Close menu when clicking outsidew
    document.addEventListener("click", (e) => {
        if (!slideMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && !closeBtn.contains(e.target)) {
            slideMenu.classList.remove("open");
        }
    });
});
