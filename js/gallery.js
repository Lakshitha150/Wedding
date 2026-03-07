// JavaScript code for the wedding photo gallery

const photos = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg'
];

const galleryContainer = document.querySelector('.gallery');

photos.forEach(photo => {
    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'Wedding Photo';
    img.classList.add('gallery-item');
    galleryContainer.appendChild(img);
});