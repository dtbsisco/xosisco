const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryImages = document.querySelector('.gallery-images');
let currentIndex = 0;

const images = document.querySelectorAll('.gallery-item');

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateGallery();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();
    }
});

function updateGallery() {
    const offset = -currentIndex * 100;
    galleryImages.style.transform = `translateX(${offset}%)`;
}