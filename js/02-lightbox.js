import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector('.gallery');

console.log(gallery);

const newGallery = galleryItems
    .map(({preview, original, description}) => 
        `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" alt="${description}" />
        </a>`)
        .join('');

gallery.insertAdjacentHTML("afterbegin",newGallery);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});
gallery.addEventListener("click",lightbox);