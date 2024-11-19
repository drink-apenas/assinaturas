// script.js

let currentIndex = 2; // Começa com o terceiro item no centro
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * 100 / totalItems;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    
    items.forEach((item, index) => {
        item.classList.toggle('focused', index === currentIndex);
    });
}

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalItems) % totalItems;
    updateCarousel();
}

document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

// Inicializa o carrossel
updateCarousel();
