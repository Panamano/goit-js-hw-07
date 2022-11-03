import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const newGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image" 
                    src="${preview}" 
                    data-source="${original}"
                    alt="${description}" 
                    />
            </a>
        </div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", newGallery);

const pictureClick = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== `IMG`) {
    return;
  }
  const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);
  instance.show();
  const modalEscape = (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  };
  window.addEventListener("keyup", modalEscape);
};

gallery.addEventListener("click", pictureClick);
