import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryCards = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryCards);


function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
     <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"/>
    </a>
   </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  caption: true,
  captionsData: "alt",
  captionDelay: 250,
});