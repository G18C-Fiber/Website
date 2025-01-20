document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById('logo');
    const overlayLogo = document.getElementById('overlay-logo');
    const header = document.getElementById('sticky-header');
    const headerLeft = document.querySelector('.header-left');
    const headerRight = document.querySelector('.header-right');

    let overlayLogoTop = 0;

    const updatePositions = () => {
        const rect = overlayLogo.getBoundingClientRect();
        overlayLogoTop = rect.top + (window.scrollY || document.documentElement.scrollTop);
        console.log(`Overlay Logo Top Updated: ${overlayLogoTop}`);
    };

    window.addEventListener("resize", updatePositions);
    window.addEventListener("orientationchange", updatePositions);

    // Observe layout changes
    const observer = new MutationObserver(updatePositions);
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });

    // Observe overlay-logo size changes
    const resizeObserver = new ResizeObserver(() => {
        updatePositions();
    });
    resizeObserver.observe(overlayLogo);

    updatePositions(); // Initial position update

    document.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        if (scrollPosition + header.offsetHeight >= overlayLogoTop) {
            overlayLogo.style.transform = "scale(0)";
            logo.classList.remove('hidden');
            logo.style.transform = "scale(1)";

            headerLeft.classList.add('pushed-left');
            headerRight.classList.add('pushed-right');

            headerLeft.classList.remove('pull-center');
            headerRight.classList.remove('pull-center');
        } else {
            overlayLogo.style.transform = "scale(1)";
            logo.classList.add('hidden');
            logo.style.transform = "scale(0)";

            headerLeft.classList.remove('pushed-left');
            headerRight.classList.remove('pushed-right');

            headerLeft.classList.add('pull-center');
            headerRight.classList.add('pull-center');
        }
    });
});