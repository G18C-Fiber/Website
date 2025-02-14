// Function to detect if the user is on a mobile device
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

// Function to detect if the user is on a desktop device
function isDesktopDevice() {
  return !isMobileDevice();
}

// Redirect logic based on the current page
const currentPage = window.location.pathname;

// If on the desktop page and the user is on a mobile device, redirect to the mobile page
if (currentPage.includes("desktop/html") && isMobileDevice()) {
  window.location.href = "/home";
}

// If on the mobile page and the user is on a desktop device, redirect to the desktop page
if (currentPage.includes("/desktop") && isDesktopDevice()) {
  window.location.href = "/home";
}
