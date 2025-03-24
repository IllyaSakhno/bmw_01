let slideIndex = 0;
function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    document.querySelector('.slider').style.transform = `translateX(${-slideIndex * 100}%)`;
}