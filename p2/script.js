let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const captions = [
    "The Mountain",
    "The Moon",
    "The Bird",
    "The Leaf"
];
const captionElement = document.querySelector('.caption');

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
    captionElement.textContent = captions[index];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Initialize the first image
showImage(currentIndex);