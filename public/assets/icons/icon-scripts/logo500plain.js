document.addEventListener("DOMContentLoaded", function () {
    const headerContent = document.querySelector('.header-content'); // Targeting the header content div.

    const logo500SVG = `
        <svg version="1.1" viewBox="0 0 2000 2000" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <path transform="translate(0)" d="m0 0h2e3v2e3h-2e3zm65 64-1 19v1852l6 1h1865l1-1v-1870l-1-1z" fill="currentColor"/>
            <path transform="translate(1201,830)" d="m0 0h194l19 2 15 4 14 7 11 9 8 10 6 10 5 15 2 10 1 10v29l-2 16-4 15-7 14-7 9-9 8-8 4 4 3 14 8 9 8v2h2l8 12 6 15 3 15 1 8v45l-3 18-4 12-7 14-10 11-10 7-10 5-13 4-19 3-184 1-26-1v-361zm51 52-1 5v97l146-1 13-4 8-7 5-12 1-7v-41l-3-12-5-9-9-6-5-2-6-1zm0 153-1 6v100h148l14-2 10-5 7-8 3-9 2-17v-20l-1-18-4-13-7-8-8-4-9-2z" fill="currentColor"/>
            <path transform="translate(575,830)" d="m0 0h185l11 2 9 4 8 5 8 7 8 12 3 8 1 6 1 53-1 2h-52l-1-45-173-1v24l-1 78h181l13 3 11 6 11 10 7 11 4 13v121l-4 13-7 11-9 9-14 7-6 2-8 1h-191l-13-3-12-7-10-10-6-10-4-14v-55h51l1 1 1 45h178v-101h-175l-14-2-14-7-10-9-7-9-5-12-1-5v-121l4-12 7-12 11-10 14-7z" fill="currentColor"/>
            <path transform="translate(901,830)" d="m0 0h50l2 1 1 5v303l184 1 1 1v50l-1 1h-237z" fill="currentColor"/>
        </svg>
    `;

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-500');
    logoContainer.innerHTML = logo500SVG;

    // Append the logo inside the header-content, before all the links
    headerContent.insertBefore(logoContainer, headerContent.firstChild); // Ensures the logo is placed before navigation
});
