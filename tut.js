// script.js
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));
