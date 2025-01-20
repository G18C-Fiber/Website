let slideIndex = 0;

function moveSlide(step) {
  slideIndex += step;
  if (slideIndex < 0) {
    slideIndex = document.querySelectorAll('.slide').length - 1;
  } else if (slideIndex >= document.querySelectorAll('.slide').length) {
    slideIndex = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}
