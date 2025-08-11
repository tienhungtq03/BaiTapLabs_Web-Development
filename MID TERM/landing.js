const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
const cars = document.querySelectorAll('.featured-car');
const carWidth = cars[0].offsetWidth + 30;
let currentIndex = 0;

function slideTo(index) {
    slider.style.transform = `translateX(${-index * carWidth}px)`;
    currentIndex = index;
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < cars.length - 3) {
        slideTo(currentIndex + 1);
    } else {
        slideTo(0);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        slideTo(currentIndex - 1);
    } else {
        slideTo(cars.length - 3);
    }
});

setInterval(() => {
    if (currentIndex < cars.length - 3) {
        slideTo(currentIndex + 1);
    } else {
        slideTo(0);
    }
}, 5000);