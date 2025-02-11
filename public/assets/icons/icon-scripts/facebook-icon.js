document.addEventListener("DOMContentLoaded", function () {
    const facebookIcon = document.querySelector('.social-icon.facebook-icon');

    // Retrieve the href value from a data attribute
    const href = facebookIcon.dataset.href || "#";

    const facebookSVG = `
        <a href="${href}" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 510.125">
                <path fill="currentColor" fill-rule="nonzero" d="M512 256C512 114.615 397.385 0 256 0S0 114.615 0 256c0 120.059 82.652 220.797 194.157 248.461V334.229h-52.79V256h52.79v-33.709c0-87.134 39.432-127.521 124.977-127.521 16.218 0 44.202 3.18 55.651 6.36v70.916c-6.042-.635-16.537-.954-29.575-.954-41.977 0-58.196 15.901-58.196 57.241V256h83.619l-14.365 78.229h-69.254v175.896C413.771 494.815 512 386.885 512 256z"></path>
            </svg>
        </a>
    `;

    // Insert the Facebook SVG into the icon element
    facebookIcon.innerHTML = facebookSVG;
});
